/* ═══════════════════════════════════════
   MV PORTFOLIO — admin.js
   Admin panel: auth, add/edit/delete, list
   ═══════════════════════════════════════ */

'use strict';

// ── AUTH ──
function requestAdmin() {
  if (isAdminActive()) {
    renewAdminSession();
    el('admin-panel').classList.toggle('open');
    return;
  }
  // Reset form
  el('pw-error').style.display = 'none';
  el('pw-email').value = '';
  el('pw-input').value = '';
  el('pw-btn').disabled = false;

  try {
    const lock = JSON.parse(sessionStorage.getItem(_c('bG9ja291dA==')) || 'null');
    if (lock && Date.now() < lock.until) {
      const mins = Math.ceil((lock.until - Date.now()) / 60000);
      el('pw-error').style.display = 'block';
      el('pw-error').textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      el('pw-btn').disabled = true;
    }
  } catch(e) {}

  el('pw-modal').style.display = 'flex';
  setTimeout(() => el('pw-email').focus(), 100);
}

async function checkPw() {
  const MAX = 5, LOCK_MS = 15 * 60 * 1000, now = Date.now();
  const lockKey = _c('bG9ja291dA=='), attKey = _c('YXR0ZW1wdHM=');

  try {
    const lock = JSON.parse(sessionStorage.getItem(lockKey) || 'null');
    if (lock && now < lock.until) {
      const mins = Math.ceil((lock.until - now) / 60000);
      el('pw-error').style.display = 'block';
      el('pw-error').textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      el('pw-btn').disabled = true;
      return;
    }
  } catch(e) {}

  const email = el('pw-email').value.trim(), pass = el('pw-input').value;
  if (!email || !pass) {
    el('pw-error').style.display = 'block';
    el('pw-error').textContent = '❌ Please enter email and password.';
    return;
  }

  const btn = el('pw-btn');
  btn.textContent = 'Signing in...';
  btn.disabled = true;

  try {
    const { data, error } = await window.APP.sb.auth.signInWithPassword({ email, password: pass });
    if (error || !data.user) throw new Error('fail');

    sessionStorage.removeItem(attKey);
    sessionStorage.removeItem(lockKey);
    setAdminSession(true);
    el('pw-modal').style.display = 'none';
    el('admin-panel').classList.add('open');
    toast('Welcome back! ✓', 'success');
  } catch(e) {
    let att = 0;
    try { att = parseInt(sessionStorage.getItem(attKey) || '0'); } catch(e) {}
    att++;
    sessionStorage.setItem(attKey, att);
    const rem = MAX - att;
    if (att >= MAX) {
      sessionStorage.setItem(lockKey, JSON.stringify({ until: now + LOCK_MS }));
      sessionStorage.removeItem(attKey);
      el('pw-error').style.display = 'block';
      el('pw-error').textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      el('pw-error').style.display = 'block';
      el('pw-error').textContent = `❌ Wrong credentials. ${rem} attempt${rem > 1 ? 's' : ''} left.`;
      btn.disabled = false;
    }
    el('pw-input').value = '';
    el('pw-input').focus();
  }

  btn.textContent = 'Sign In →';
}

// ── TABS ──
function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  el('tab-' + name).classList.add('active');

  if (name === 'list')   renderExistingList();
  if (name === 'site')   fillSiteForm();
  if (name === 'design') fillDesignForm();
}

// ── AUTO FETCH YT ──
let _fetchTimer = null;

function onUrlInput(val) {
  clearTimeout(_fetchTimer);
  const ytId = ytExtract(val);
  if (!ytId) { setFetchStatus('', ''); return; }
  setFetchStatus('loading', '⟳ Fetching info...');
  _fetchTimer = setTimeout(() => fetchYtInfo(ytId), 800);
}

async function fetchYtInfo(ytId) {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (!el('inp-title').value.trim()) el('inp-title').value = data.title || '';
    if (!el('inp-artist').value.trim()) el('inp-artist').value = data.author_name || '';
    setFetchStatus('ok', '✓ Info fetched');
  } catch {
    setFetchStatus('err', '⚠ Could not fetch info');
  }
}

function setFetchStatus(type, msg) {
  const s = el('fetch-status');
  s.textContent = msg;
  s.className = 'fetch-status' + (type ? ' ' + type : '');
}

// ── ADD CARD ──
async function addCard() {
  const url    = el('inp-url').value.trim();
  const title  = el('inp-title').value.trim();
  const artist = el('inp-artist').value.trim();
  const tRaw   = el('inp-tags').value.trim();
  const thumb  = el('inp-thumb').value.trim();
  const feat   = el('inp-featured').checked;

  if (!title) { toast('Title is required!', 'error'); return; }
  renewAdminSession();

  const ytId = ytExtract(url) || null;
  const tags  = tRaw ? tRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

  const btn = el('add-btn');
  btn.disabled = true;
  btn.textContent = 'Saving...';

  const { error } = await window.APP.sb.from('mv_works').insert([{
    ytId, title, artist, tags, thumb: thumb || null, featured: feat, sort_order: -1
  }]);

  btn.disabled = false;
  btn.textContent = '+ Add to Portfolio';

  if (error) { toast('Error: ' + error.message, 'error'); return; }

  toast('Work added! ✓', 'success');
  ['inp-url','inp-title','inp-artist','inp-tags','inp-thumb'].forEach(id => el(id).value = '');
  el('inp-featured').checked = false;
  document.querySelectorAll('#add-tag-presets .tag-preset-btn').forEach(b => b.classList.remove('active'));
  setFetchStatus('', '');
}

// ── DELETE CARD ──
async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  renewAdminSession();
  const { error } = await window.APP.sb.from('mv_works').delete().eq('id', id);
  if (error) { toast('Error: ' + error.message, 'error'); return; }
  toast('Work removed', 'success');
}

// ── EXISTING LIST ──
let _listSortable = null;

function renderExistingList() {
  const listEl = el('existing-list');
  const cards  = window.APP.cards;

  if (!cards.length) {
    listEl.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_listSortable) { _listSortable.destroy(); _listSortable = null; }
    return;
  }

  listEl.innerHTML = cards.map(c => {
    const thumb    = c.thumb || (c.ytId ? ytThumb(c.ytId) : '');
    const fallback = c.ytId  ? ytThumbFB(c.ytId) : '';
    return `<div class="existing-item" data-id="${c.id}">
      <div class="existing-item-header">
        <span class="drag-handle" title="Drag to reorder">⠿</span>
        ${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
        <span class="existing-item-title">${esc(c.title)}</span>
        <div class="existing-item-actions">
          <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
          <button class="del-btn"  onclick="deleteCard('${c.id}')">✕</button>
        </div>
      </div>
      <div class="inline-edit" id="edit-${c.id}">
        <label>YouTube URL / ID</label>
        <input type="text" id="e-url-${c.id}" value="${esc(c.ytId || '')}">
        <label>Title</label>
        <input type="text" id="e-title-${c.id}" value="${esc(c.title)}">
        <label>Artist</label>
        <input type="text" id="e-artist-${c.id}" value="${esc(c.artist || '')}">
        <label>Tags</label>
        <div class="tag-presets" id="edit-presets-${c.id}">
          ${['Simple MV','Semi Complex','Complex','Debut','Trailer'].map(t =>
            `<button type="button" class="tag-preset-btn"
                     onclick="togglePresetTag('e-tags-${c.id}','${t}',this)">${t}</button>`
          ).join('')}
        </div>
        <input type="text" id="e-tags-${c.id}" value="${esc((c.tags||[]).join(', '))}"
               oninput="syncPresetHighlight('e-tags-${c.id}','edit-presets-${c.id}')"
               onfocus="syncPresetHighlight('e-tags-${c.id}','edit-presets-${c.id}')">
        <label>Custom Thumbnail URL</label>
        <input type="text" id="e-thumb-${c.id}" value="${esc(c.thumb || '')}">
        <div class="checkbox-row" style="margin:6px 0">
          <input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}>
          <label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2× size)</label>
        </div>
        <button class="inline-save-btn"   onclick="saveEdit('${c.id}')">💾 Save Changes</button>
        <button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
      </div>
    </div>`;
  }).join('');

  // List sortable (admin panel)
  if (_listSortable) { _listSortable.destroy(); _listSortable = null; }
  _listSortable = Sortable.create(listEl, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async (evt) => {
      if (evt.oldIndex === evt.newIndex) return;
      const moved = window.APP.cards.splice(evt.oldIndex, 1)[0];
      window.APP.cards.splice(evt.newIndex, 0, moved);

      // Show saving indicator
      let note = el('sort-saving');
      if (!note) {
        note = document.createElement('div');
        note.id = 'sort-saving';
        note.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        listEl.insertAdjacentElement('afterend', note);
      }
      note.textContent = '⟳ Saving order...';

      await Promise.all(window.APP.cards.map((c, i) =>
        window.APP.sb.from('mv_works').update({ sort_order: i }).eq('id', c.id)
      ));

      note.remove();
      toast('Order saved! ✓', 'success');
      renderGrid(true);
    }
  });
}

function toggleEdit(id) {
  const pane = el('edit-' + id);
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if (p.id !== 'edit-' + id) p.classList.remove('open');
  });
  pane.classList.toggle('open');
  if (pane.classList.contains('open'))
    setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-presets-${id}`), 50);
}

async function saveEdit(id) {
  const urlVal = el(`e-url-${id}`).value.trim();
  const title  = el(`e-title-${id}`).value.trim();
  const artist = el(`e-artist-${id}`).value.trim();
  const tRaw   = el(`e-tags-${id}`).value.trim();
  const thumb  = el(`e-thumb-${id}`).value.trim();
  const feat   = el(`e-feat-${id}`).checked;

  if (!title) { toast('Title cannot be empty!', 'error'); return; }
  renewAdminSession();

  const ytId = ytExtract(urlVal) || urlVal || null;
  const tags  = tRaw ? tRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

  const btn = el('edit-' + id).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;

  const { error } = await window.APP.sb.from('mv_works')
    .update({ ytId, title, artist, tags, thumb: thumb || null, featured: feat })
    .eq('id', id);

  btn.textContent = '💾 Save Changes';
  btn.disabled = false;

  if (error) { toast('Error: ' + error.message, 'error'); return; }
  toast('Work updated! ✓', 'success');
  toggleEdit(id);
}
