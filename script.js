const _c = s => atob(s);
const SB_URL = _c('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const SB_KEY = _c('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const SHORTCUT = _c('YWRt');
const ADMIN_SESSION_KEY = _c('bXZwX2FkbWluX3Nlc3Npb24=');
const ADMIN_TIMEOUT_MS = 60 * 60 * 1000;
let sb, cards = [], siteInfo = {}, activeFilter = 'all', fetchTimer = null, currentPage = 1, loadedCount = 0;

// ── ADMIN SESSION ──
function isAdminActive() { try { const s = JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY) || 'null'); if (!s) return false; if (Date.now() - s.ts > ADMIN_TIMEOUT_MS) { sessionStorage.removeItem(ADMIN_SESSION_KEY); return false; } return true; } catch { return false; } }
function setAdminSession(a) { if (a) sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ ts: Date.now() })); else sessionStorage.removeItem(ADMIN_SESSION_KEY); }
function renewAdminSession() { if (isAdminActive()) setAdminSession(true); }
setInterval(() => { if (!isAdminActive() && el('admin-panel')?.classList.contains('open')) { el('admin-panel').classList.remove('open'); toast('Admin session expired. Type "adm" to log in again.', 'error'); } }, 60 * 1000);

// ── SECRET SHORTCUT ──
let keyBuf = '';
document.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (e.key === 'Escape') { closeModal(); closeSiteEdit(); el('admin-panel').classList.remove('open'); el('pw-modal').style.display = 'none'; return; }
    keyBuf += e.key.toLowerCase();
    if (keyBuf.length > SHORTCUT.length) keyBuf = keyBuf.slice(-SHORTCUT.length);
    if (keyBuf === SHORTCUT) { keyBuf = ''; requestAdmin(); }
});

// ── TABS ──
function switchTab(name, btn) { 
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); 
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active')); 
    btn.classList.add('active'); el('tab-' + name).classList.add('active'); 
    if (name === 'list') renderExistingList(); 
    if (name === 'site') fillSiteForm(); 
    if (name === 'design') fillDesignForm(); 
}

// ── PASSWORD / AUTH ──
function requestAdmin() {
    if (isAdminActive()) { renewAdminSession(); el('admin-panel').classList.toggle('open'); return; }
    el('pw-error').style.display = 'none'; el('pw-email').value = ''; el('pw-input').value = ''; el('pw-btn').disabled = false;
    try { const lock = JSON.parse(sessionStorage.getItem(_c('bG9ja291dA==')) || 'null'); if (lock && Date.now() < lock.until) { const mins = Math.ceil((lock.until - Date.now()) / 60000); el('pw-error').style.display = 'block'; el('pw-error').textContent = `🔒 Too many attempts. Try again in ${mins} min.`; el('pw-btn').disabled = true; } } catch (e) { }
    el('pw-modal').style.display = 'flex'; setTimeout(() => el('pw-email').focus(), 100);
}

async function checkPw() {
    const MAX = 5, LOCK_MS = 15 * 60 * 1000, now = Date.now();
    const lockKey = _c('bG9ja291dA=='), attKey = _c('YXR0ZW1wdHM=');
    try { const lock = JSON.parse(sessionStorage.getItem(lockKey) || 'null'); if (lock && now < lock.until) { const mins = Math.ceil((lock.until - now) / 60000); el('pw-error').style.display = 'block'; el('pw-error').textContent = `🔒 Too many attempts. Try again in ${mins} min.`; el('pw-btn').disabled = true; return; } } catch (e) { }
    const email = el('pw-email').value.trim(), pass = el('pw-input').value;
    if (!email || !pass) { el('pw-error').style.display = 'block'; el('pw-error').textContent = '❌ Please enter email and password.'; return; }
    const btn = el('pw-btn'); btn.textContent = 'Signing in...'; btn.disabled = true;
    try {
        const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
        if (error || !data.user) throw new Error('fail');
        sessionStorage.removeItem(attKey); sessionStorage.removeItem(lockKey);
        setAdminSession(true); el('pw-modal').style.display = 'none'; el('admin-panel').classList.add('open'); toast('Welcome back! ✓', 'success');
    } catch (e) {
        let att = 0; try { att = parseInt(sessionStorage.getItem(attKey) || '0'); } catch (e) { }
        att++; sessionStorage.setItem(attKey, att);
        const rem = MAX - att;
        if (att >= MAX) { sessionStorage.setItem(lockKey, JSON.stringify({ until: now + LOCK_MS })); sessionStorage.removeItem(attKey); el('pw-error').style.display = 'block'; el('pw-error').textContent = '🔒 Too many attempts. Locked for 15 minutes.'; btn.disabled = true; }
        else { el('pw-error').style.display = 'block'; el('pw-error').textContent = `❌ Wrong credentials. ${rem} attempt${rem > 1 ? 's' : ''} left.`; btn.disabled = false; }
        el('pw-input').value = ''; el('pw-input').focus();
    }
    btn.textContent = 'Sign In →';
}

// ── LOADING ──
function setLoadProgress(pct, text) { const bar = el('loading-bar'), txt = el('loading-text'); if (bar) bar.style.width = pct + '%'; if (txt && text) txt.textContent = text; }
function hideLoading() { const s = el('loading-screen'); if (!s) return; s.classList.add('hidden'); document.body.classList.remove('loading'); }

// ── LOAD DATA ──
async function loadCards() { const { data, error } = await sb.from('mv_works').select('*').order('sort_order').order('created_at'); if (error) { console.error(error); return; } cards = data || []; renderGrid(true); renderFilters(); updateStats(); buildShowcase(); if (el('tab-list')?.classList.contains('active')) renderExistingList(); }
async function loadSiteInfo() { const { data } = await sb.from('mv_site').select('data').eq('id', 1).single(); if (data?.data) { siteInfo = data.data; applySiteInfo(); updateStats(); } }

// ── UTILS ──
function el(id) { return document.getElementById(id); }
function setText(id, v) { if (v && el(id)) el(id).textContent = v; }
function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function ytExtract(s) { if (!s || typeof s !== 'string') return null; const m = s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/); return m ? m : null; }
let _tt;
function toast(msg, type = '') { const t = el('toast'); t.textContent = msg; t.className = `toast ${type} show`; clearTimeout(_tt); _tt = setTimeout(() => t.classList.remove('show'), 3200); }

// ── TAG PRESETS ──
function getTagsArray(id) { const val = el(id).value || ''; return val.split(',').map(t => t.trim()).filter(Boolean); }
function setTagsArray(id, arr) { el(id).value = arr.join(', '); }
function togglePresetTag(inputId, tag, btn) { renewAdminSession(); let tags = getTagsArray(inputId); if (tags.includes(tag)) { tags = tags.filter(t => t !== tag); btn.classList.remove('active'); } else { tags.push(tag); btn.classList.add('active'); } setTagsArray(inputId, tags); }
function syncPresetHighlight(inputId, presetsId) { const tags = getTagsArray(inputId), wrap = el(presetsId); if (!wrap) return; wrap.querySelectorAll('.tag-preset-btn').forEach(btn => { btn.classList.toggle('active', tags.includes(btn.textContent.trim())); }); }

// ── SHOWCASE ──
function ytThumb(id) { return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }
function ytThumbFallback(id) { return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }

function buildShowcase() {
    const thumbs = cards.map(c => c.thumb || (c.ytId ? ytThumbFallback(c.ytId) : null)).filter(Boolean);
    if (thumbs.length < 2) return;
    const fill = (arr, min) => { let r = [...arr]; while (r.length < min) r = [...r, ...arr]; return r; };
    const configs = [
        { id: 'hero-row-1', items: fill(thumbs, 20), dir: 'left', speed: 60 },
        { id: 'hero-row-2', items: fill([...thumbs].reverse(), 20), dir: 'right', speed: 75 },
        { id: 'hero-row-3', items: fill(thumbs.slice(Math.floor(thumbs.length / 2)).concat(thumbs.slice(0, Math.floor(thumbs.length / 2))), 20), dir: 'left', speed: 50 },
    ];
    configs.forEach(({ id, items, dir, speed }) => {
        const row = el(id); if (!row) return;
        const all = [...items, ...items];
        row.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
        requestAnimationFrame(() => {
            const dur = items.length * (speed / 20);
            row.style.animationDuration = `${dur}s`;
            if (dir === 'right') { row.style.animationName = 'slideRight'; }
        });
    });
    setTimeout(() => { const wrap = el('hero-track-wrap'); if (wrap) wrap.classList.add('visible'); }, 400);
}

// ── RENDER ──
function cardHTML(c) {
    const thumb = c.thumb || (c.ytId ? ytThumb(c.ytId) : '');
    const fallback = c.ytId ? ytThumbFallback(c.ytId) : '';
    const tags = (c.tags || []).map(t => `<span class="mv-tag">${esc(t)}</span>`).join('');
    return `<div class="mv-card${c.featured ? ' featured' : ''}" onclick="openModal('${c.id}')">
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${esc(c.title)}" loading="lazy" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${esc(c.title)}</div><div class="mv-artist">${esc(c.artist || '')}</div></div></div>
</div>`;
}

function getDisplayMode() { return siteInfo.displayMode || 'all'; }
function getPerPage() { return parseInt(siteInfo.perPage) || 12; }

function renderGrid(resetPage) {
    if (resetPage) { currentPage = 1; loadedCount = 0; }
    const grid = el('mv-grid'), mode = getDisplayMode(), perPage = getPerPage();
    const list = activeFilter === 'all' ? cards : cards.filter(c => (c.tags || []).includes(activeFilter));
    el('works-count').textContent = String(list.length).padStart(2, '0');
    ['mv-pagination', 'mv-loadmore-btn'].forEach(id => { const e = el(id); if (e) e.remove(); });
    if (!list.length) { grid.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`; return; }
    if (mode === 'pagination') {
        const total = Math.ceil(list.length / perPage);
        currentPage = Math.min(currentPage, total);
        const slice = list.slice((currentPage - 1) * perPage, currentPage * perPage);
        grid.innerHTML = slice.map(cardHTML).join('');
        if (total > 1) { const bar = document.createElement('div'); bar.id = 'mv-pagination'; bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap'; for (let i = 1; i <= total; i++) { const btn = document.createElement('button'); btn.textContent = i; btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${i === currentPage ? 'var(--accent)' : 'transparent'};color:${i === currentPage ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`; btn.onclick = () => { currentPage = i; renderGrid(false); window.scrollTo({ top: el('works').offsetTop - 80, behavior: 'smooth' }); }; bar.appendChild(btn); } grid.appendChild(bar); }
    } else if (mode === 'loadmore') {
        if (resetPage) loadedCount = perPage; else loadedCount = Math.max(loadedCount, perPage);
        const slice = list.slice(0, loadedCount);
        grid.innerHTML = slice.map(cardHTML).join('');
        if (loadedCount < list.length) { const rem = list.length - loadedCount; const btn = document.createElement('button'); btn.id = 'mv-loadmore-btn'; btn.textContent = `Load More (${rem} more)`; btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s'; btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)'; btn.onmouseleave = () => btn.style.background = 'transparent'; btn.onclick = () => { loadedCount += perPage; renderGrid(false); }; grid.appendChild(btn); }
    } else { grid.innerHTML = list.map(cardHTML).join(''); }
}

function renderFilters() {
    const tags = new Set(); cards.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
    el('filter-bar').innerHTML = `<button class="filter-btn${activeFilter === 'all' ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="filter-btn${activeFilter === t ? ' active' : ''}" onclick="filterCards('${esc(t)}',this)">${esc(t)}</button>`).join('');
}

function filterCards(tag, btn) { activeFilter = tag; document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderGrid(true); }

// ── EXISTING LIST ──
let sortableInstance = null;
function renderExistingList() {
    const listEl = el('existing-list');
    if (!cards.length) { listEl.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>'; if (sortableInstance) { sortableInstance.destroy(); sortableInstance = null; } return; }
    listEl.innerHTML = cards.map(c => {
        const thumb = c.thumb || (c.ytId ? ytThumb(c.ytId) : '');
        const fallback = c.ytId ? ytThumbFallback(c.ytId) : '';
        return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${esc(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${esc(c.ytId || '')}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${esc(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${esc(c.artist || '')}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="tag-presets" id="edit-tag-presets-${c.id}">
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${esc((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${esc(c.thumb || '')}">
<div class="checkbox-row" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
    }).join('');
    if (sortableInstance) { sortableInstance.destroy(); sortableInstance = null; }
    sortableInstance = Sortable.create(listEl, { handle: '.drag-handle', animation: 180, ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen', onEnd: async (evt) => { if (evt.oldIndex === evt.newIndex) return; const moved = cards.splice(evt.oldIndex, 1); cards.splice(evt.newIndex, 0, moved); let note = el('sort-saving'); if (!note) { note = document.createElement('div'); note.id = 'sort-saving'; note.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)'; listEl.insertAdjacentElement('afterend', note); } note.textContent = '⟳ Saving order...'; await Promise.all(cards.map((c, i) => sb.from('mv_works').update({ sort_order: i }).eq('id', c.id))); note.remove(); toast('Order saved! ✓', 'success'); renderGrid(true); } });
}

function toggleEdit(id) { const pane = el('edit-' + id); document.querySelectorAll('.inline-edit.open').forEach(p => { if (p.id !== 'edit-' + id) p.classList.remove('open'); }); pane.classList.toggle('open'); if (pane.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50); }

async function saveEdit(id) {
    const urlVal = el(`e-url-${id}`).value.trim(), title = el(`e-title-${id}`).value.trim(), artist = el(`e-artist-${id}`).value.trim();
    const tagsRaw = el(`e-tags-${id}`).value.trim(), thumb = el(`e-thumb-${id}`).value.trim(), feat = el(`e-feat-${id}`).checked;
    if (!title) { toast('Title cannot be empty!', 'error'); return; }
    renewAdminSession();
    const ytId = ytExtract(urlVal) || urlVal || null;
    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
    const btn = el(`edit-${id}`).querySelector('.inline-save-btn'); btn.textContent = 'Saving...'; btn.disabled = true;
    const { error } = await sb.from('mv_works').update({ ytId, title, artist, tags, thumb: thumb || null, featured: feat }).eq('id', id);
    btn.textContent = '💾 Save Changes'; btn.disabled = false;
    if (error) { toast('Error: ' + error.message, 'error'); return; }
    toast('Work updated! ✓', 'success'); toggleEdit(id);
}

function updateStats() {
    el('stat-mvs').textContent = cards.length || '0';
    const artists = new Set(cards.map(c => c.artist).filter(Boolean));
    el('stat-clients').textContent = artists.size || '0';
    const tags = new Set(); cards.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
    el('stat-tags').textContent = tags.size || '0';
    el('stat-year').textContent = siteInfo.year || new Date().getFullYear();
}

// ── ADD / DELETE ──
async function addCard() {
    const url = el('inp-url').value.trim(), title = el('inp-title').value.trim(), artist = el('inp-artist').value.trim();
    const tRaw = el('inp-tags').value.trim(), thumb = el('inp-thumb').value.trim(), feat = el('inp-featured').checked;
    if (!title) { toast('Title is required!', 'error'); return; }
    renewAdminSession();
    const ytId = ytExtract(url);
    const tags = tRaw ? tRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
    const btn = el('add-btn'); btn.disabled = true; btn.textContent = 'Saving...';
    const { error } = await sb.from('mv_works').insert([{ ytId, title, artist, tags, thumb: thumb || null, featured: feat, sort_order: -1 }]);
    btn.disabled = false; btn.textContent = '+ Add to Portfolio';
    if (error) { toast('Error: ' + error.message, 'error'); return; }
    toast('Work added! ✓', 'success');
    ['inp-url', 'inp-title', 'inp-artist', 'inp-tags', 'inp-thumb'].forEach(id => el(id).value = '');
    el('inp-featured').checked = false;
    document.querySelectorAll('#add-tag-presets .tag-preset-btn').forEach(b => b.classList.remove('active'));
    setFetchStatus('', '');
}

async function deleteCard(id) {
    if (!confirm('Remove this work?')) return;
    renewAdminSession();
    const { error } = await sb.from('mv_works').delete().eq('id', id);
    if (error) { toast('Error: ' + error.message, 'error'); return; }
    toast('Work removed', 'success');
}

// ── MODAL ──
function openModal(id) {
    if (document.body.classList.contains('edit-mode')) return;
    const c = cards.find(x => x.id === id); if (!c) return;
    el('modal-title').textContent = c.title; el('modal-artist').textContent = c.artist || '';
    el('modal-tags').innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${esc(t)}</span>`).join('');
    el('modal-video-wrap').innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
    el('modal').classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeModal(e) { if (e && e.target !== el('modal')) return; el('modal').classList.remove('open'); el('modal-video-wrap').innerHTML = ''; document.body.style.overflow = ''; }

// ── AUTO FETCH YT ──
function onUrlInput(val) { clearTimeout(fetchTimer); const ytId = ytExtract(val); if (!ytId) { setFetchStatus('', ''); return; } setFetchStatus('loading', '⟳ Fetching info...'); fetchTimer = setTimeout(() => fetchYtInfo(ytId), 800); }
async function fetchYtInfo(ytId) { try { const res = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`); if (!res.ok) throw new Error(); const data = await res.json(); if (!el('inp-title').value.trim()) el('inp-title').value = data.title || ''; if (!el('inp-artist').value.trim()) el('inp-artist').value = data.author_name || ''; setFetchStatus('ok', '✓ Info fetched'); } catch { setFetchStatus('err', '⚠ Could not fetch info'); } }
function setFetchStatus(type, msg) { const s = el('fetch-status'); s.textContent = msg; s.className = 'fetch-status' + (type ? ' ' + type : ''); }

// ── DRAG MODE ──
let gridSortable = null;

function toggleEditMode() {
    const isActive = document.body.classList.toggle('edit-mode');
    const bar = el('edit-mode-bar');
    const btn = el('edit-mode-toggle-btn');
    if (isActive) {
        bar.classList.add('active');
        btn.textContent = '✦ Exit Drag Mode';
        btn.style.background = 'rgba(255,60,172,.1)';
        btn.style.borderColor = 'rgba(255,60,172,.4)';
        btn.style.color = 'var(--accent2)';
        el('admin-panel').classList.remove('open');
        initGridSortable();
    } else {
        exitEditMode();
    }
}

function exitEditMode() {
    document.body.classList.remove('edit-mode');
    el('edit-mode-bar').classList.remove('active');
    const btn = el('edit-mode-toggle-btn');
    if (btn) {
        btn.textContent = '✦ Drag Reorder on Page';
        btn.style.background = 'rgba(200,255,0,.1)';
        btn.style.borderColor = 'rgba(200,255,0,.3)';
        btn.style.color = 'var(--accent)';
    }
    if (gridSortable) { gridSortable.destroy(); gridSortable = null; }
}

function initGridSortable() {
    const grid = el('mv-grid');
    if (!grid) return;
    if (gridSortable) gridSortable.destroy();
    gridSortable = Sortable.create(grid, {
        animation: 200,
        draggable: ".mv-card",
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        onEnd: (evt) => {
            if (evt.oldIndex === evt.newIndex) return;
            const moved = cards.splice(evt.oldIndex, 1);
            cards.splice(evt.newIndex, 0, moved);
            toast('Drag to rearrange • Click Save Order when done', '');
        }
    });
}

async function saveGridOrder() {
    toast('Saving order...', '');
    await Promise.all(cards.map((c, i) => sb.from('mv_works').update({ sort_order: i }).eq('id', c.id)));
    toast('Order saved! ✓', 'success');
    exitEditMode();
    renderGrid(true);
}

// ── COLORS ───────────────────────────────────
const COLOR_PRESETS = {
    lime: { text: '#f0f0f0', accent: '#c8ff00', accent2: '#ff3cac', bg: '#080810', surface: '#10101c' },
    cyan: { text: '#f0f0f0', accent: '#00ffee', accent2: '#ff3cac', bg: '#060c12', surface: '#0c1a22' },
    pink: { text: '#f0f0f0', accent: '#ff2d78', accent2: '#ffe600', bg: '#100810', surface: '#1c101c' },
    orange: { text: '#f0f0f0', accent: '#ff7b00', accent2: '#00d4ff', bg: '#100a06', surface: '#1c1208' },
    purple: { text: '#f0f0f0', accent: '#9d4edd', accent2: '#ff6b6b', bg: '#08060e', surface: '#120e1e' },
    white: { text: '#f0f0f0', accent: '#ffffff', accent2: '#ff3cac', bg: '#080810', surface: '#10101c' },
};

function applyColorPreset(name) {
    const p = COLOR_PRESETS[name]; if (!p) return;
    Object.entries(p).forEach(([k, v]) => {
        document.documentElement.style.setProperty('--' + k, v);
        const inp = el('color-' + k); if (inp) inp.value = v;
        const hex = el('color-' + k + '-hex'); if (hex) hex.value = v;
    });
    toast('Preview applied — click Save Colors to keep it', '');
}

function previewColor(varName, val) {
    document.documentElement.style.setProperty('--' + varName, val);
    const hex = el('color-' + varName + '-hex');
    if (hex) hex.value = val;
}

function previewColorHex(varName, input) {
    const val = input.value.trim();
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
        document.documentElement.style.setProperty('--' + varName, val);
        const picker = el('color-' + varName);
        if (picker) picker.value = val;
    }
}

async function saveColors() {
    renewAdminSession();
    const colors = {
        text: el('color-text')?.value || '#f0f0f0',
        accent: el('color-accent').value,
        accent2: el('color-accent2').value,
        bg: el('color-bg').value,
        surface: el('color-surface').value,
    };
    siteInfo.colors = colors;
    const btn = el('color-save-btn');
    btn.textContent = 'Saving...'; btn.disabled = true;
    try {
        const { error } = await sb.from('mv_site').upsert({ id: 1, data: siteInfo });
        if (error) throw error;
        toast('Colors saved! ✓', 'success');
    } catch(err) {
        toast('Error: ' + err.message, 'error'); 
    } finally {
        btn.textContent = '💾 Save Colors'; btn.disabled = false;
    }
}

function applyColors(colors) {
    if (!colors) return;
    Object.entries(colors).forEach(([k, v]) => {
        document.documentElement.style.setProperty('--' + k, v);
        const inp = el('color-' + k); if (inp) inp.value = v;
        const hex = el('color-' + k + '-hex'); if (hex) hex.value = v;
    });
}

function resetColors() {
    const defaults = { text: '#f0f0f0', accent: '#c8ff00', accent2: '#ff3cac', bg: '#080810', surface: '#10101c' };
    applyColors(defaults);
    siteInfo.colors = defaults;
    toast('Reset to default — click Save Colors to keep it', '');
}

function fillDesignForm() {
    if (siteInfo.colors) applyColors(siteInfo.colors);
    if (siteInfo.logoData) {
        const prev = el('logo-preview');
        const img = el('logo-preview-img');
        if (prev && img) { img.src = siteInfo.logoData; prev.style.display = 'block'; }
    }
}

// ── LOGO & FAVICON (STORAGE) ────────────────────────────

async function uploadFileToSupabase(file, folderName) {
    if (!file) return null;
    
    // BACA EKSTENSI DARI TIPE FILE ASLI (Paling Akurat)
    let fileExt = 'png'; 
    if (file.type && file.type.includes('/')) {
        fileExt = file.type.split('/'); // contoh: 'image/gif' akan menjadi 'gif'
    } else if (file.name && file.name.includes('.')) {
        fileExt = file.name.split('.').pop().toLowerCase();
    }

    // Rapikan sedikit jika SVG atau JPEG
    if (fileExt === 'svg+xml') fileExt = 'svg';
    if (fileExt === 'jpeg') fileExt = 'jpg';

    // Bikin nama unik
    const fileName = `${folderName}/${Date.now()}-logo.${fileExt}`;

    // Upload dengan contentType yang sesuai agar browser mengenali format aslinya
    const { data, error } = await sb.storage
        .from('portfolio-assets')
        .upload(fileName, file, { 
            upsert: true,
            contentType: file.type || `image/${fileExt}` 
        });

    if (error) {
        console.error('Upload Error Details:', error);
        throw error;
    }

    const { data: publicUrlData } = sb.storage
        .from('portfolio-assets')
        .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
}

function handleLogoUpload(input) {
    const file = input.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const prev = el('logo-preview');
        const img = el('logo-preview-img');
        if (prev && img) { img.src = e.target.result; prev.style.display = 'block'; }
        toast('Logo selected — click Save Logo & Favicon', '');
    };
    reader.readAsDataURL(file);
}

function handleFaviconUpload(input) {
    const file = input.files;
    if (!file) return;
    toast('Favicon selected — click Save Logo & Favicon', '');
}

async function saveLogoFavicon() {
    renewAdminSession();
    
    const logoFile = el('logo-upload').files;
    const favFile = el('favicon-upload').files;

    if (!logoFile && !favFile) {
        toast('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
        return;
    }

    const btn = el('logo-save-btn');
    btn.textContent = 'Uploading & Saving...'; 
    btn.disabled = true;

    try {
        if (logoFile) {
            const logoUrl = await uploadFileToSupabase(logoFile, 'logos');
            if (logoUrl) siteInfo.logoData = logoUrl;
        }
        
        if (favFile) {
            const favUrl = await uploadFileToSupabase(favFile, 'favicons');
            if (favUrl) siteInfo.faviconData = favUrl;
        }

        const { error } = await sb.from('mv_site').upsert({ id: 1, data: siteInfo });
        if (error) throw error;

        applyLogoFavicon();
        
        el('logo-upload').value = '';
        el('favicon-upload').value = '';
        
        toast('Logo & Favicon uploaded and saved! ✓', 'success');
    } catch (err) {
        console.error(err);
        toast('Error: ' + err.message, 'error');
    } finally {
        btn.textContent = '💾 Save Logo & Favicon'; 
        btn.disabled = false;
    }
}

function applyLogoFavicon() {
    const loadingLogoImg = document.getElementById('loading-logo-img');
    const loadingLogoText = document.getElementById('loading-logo-text');
    
    if (siteInfo.logoData) {
        if (loadingLogoImg) {
            loadingLogoImg.src = siteInfo.logoData;
            loadingLogoImg.style.display = 'block';
        }
        if (loadingLogoText) loadingLogoText.style.display = 'none';
    } else {
        if (loadingLogoImg) loadingLogoImg.style.display = 'none';
        if (loadingLogoText) loadingLogoText.style.display = 'block';
    }

    if (siteInfo.faviconData) {
        let link = document.querySelector('link[rel="icon"]');
        if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
        link.href = siteInfo.faviconData;
    }
}

// ── SITE INFO (Lainnya) ──
function applySiteInfo() {
    const s = siteInfo; if (!s || !Object.keys(s).length) return;
    if (s.colors) applyColors(s.colors);
    applyLogoFavicon();
    
    const tabTitle = s.siteTitle || s.brand || 'MV Portfolio'; document.title = tabTitle; if (el('page-title')) el('page-title').textContent = tabTitle;
    
    if (s.brand && typeof s.brand === 'string') { el('nav-brand').innerHTML = s.brand.replace('.', '<span>.</span>'); el('footer-brand').innerHTML = s.brand.replace('.', '<span>.</span>'); }
    
    setText('hero-label', s.label); setText('hero-sub', s.hsub); setText('about-p1', s.about1); setText('about-p2', s.about2); setText('footer-copy', s.copy);
    
    if (s.htitle && typeof s.htitle === 'string') { const lines = s.htitle.split('|'); el('hero-title').innerHTML = lines.map((l, i) => i === 0 ? l : i === 1 ? `<span class="accent">${l}</span>` : `<span class="stroke">${l}</span>`).join('<br>'); }
    
    const socials = [
        { key: 'yt', label: 'YouTube', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>', primary: true }, 
        { key: 'tw', label: 'Twitter/X', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', primary: false }, 
        { key: 'discord', label: 'Discord', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.024.015.046.033.06a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>', primary: false }, 
        { key: 'vgen', label: 'VGen', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>', primary: false }, 
        { key: 'ig', label: 'Instagram', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>', primary: false }, 
        { key: 'tiktok', label: 'TikTok', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>', primary: false }
    ];
    
    const aboutWrap = el('about-social-btns'), footerWrap = el('footer-social-links');
    if (aboutWrap) aboutWrap.innerHTML = socials.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="btn ${s2.primary ? 'btn-primary' : 'btn-ghost'}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
    if (footerWrap) footerWrap.innerHTML = socials.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}

function fillSiteForm() {
    const s = siteInfo;
    ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(k => { if (el('s-' + k)) el('s-' + k).value = s[k] || ''; });
    if (el('s-perpage')) el('s-perpage').value = s.perPage || 12;
    const mode = s.displayMode || 'all', radio = el('dm-' + mode); if (radio) radio.checked = true;
}

function previewMode(mode) { 
    siteInfo.displayMode = mode; 
    renderGrid(true); 
}

async function saveSiteEdit() {
    const mode = document.querySelector('input[name="display-mode"]:checked');
    siteInfo = { 
        brand: el('s-brand').value, siteTitle: el('s-siteTitle').value, label: el('s-label').value, 
        htitle: el('s-htitle').value, hsub: el('s-hsub').value, about1: el('s-about1').value, 
        about2: el('s-about2').value, yt: el('s-yt').value, tw: el('s-tw').value, 
        discord: el('s-discord').value, vgen: el('s-vgen').value, ig: el('s-ig').value, 
        tiktok: el('s-tiktok').value, copy: el('s-copy').value, year: el('s-year').value, 
        displayMode: mode ? mode.value : 'all', perPage: parseInt(el('s-perpage')?.value) || 12,
        colors: siteInfo.colors, logoData: siteInfo.logoData, faviconData: siteInfo.faviconData
    };
    const btn = el('site-save-btn'); btn.textContent = 'Saving...'; btn.disabled = true;
    renewAdminSession();
    try {
        const { error } = await sb.from('mv_site').upsert({ id: 1, data: siteInfo });
        if (error) throw error;
        applySiteInfo(); updateStats(); renderGrid(true); toast('Site info saved! ✓', 'success');
    } catch(err) {
        toast('Error: ' + err.message, 'error');
    } finally {
        btn.textContent = 'Simpan Info Site →'; btn.disabled = false;
    }
}

function closeSiteEdit() { 
    const panel = el('site-edit-panel');
    if (panel) panel.classList.remove('open'); 
}

// ── INIT ──
async function init() {
    document.body.classList.add('loading');
    setLoadProgress(15, 'Connecting...');
    sb = window.supabase.createClient(SB_URL, SB_KEY);
    setLoadProgress(35, 'Loading site info...');
    await loadSiteInfo();
    setLoadProgress(65, 'Loading works...');
    await loadCards();
    setLoadProgress(90, 'Almost there...');
    sb.channel('mv_realtime')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'mv_works' }, loadCards)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'mv_site' }, loadSiteInfo)
        .subscribe();
    setTimeout(() => { 
        setLoadProgress(100, 'Ready!'); 
        setTimeout(() => { 
            hideLoading(); 
            if (isAdminActive()) el('admin-panel').classList.add('open'); 
        }, 300); 
    }, 200);
}

init();
