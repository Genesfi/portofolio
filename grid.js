/* ═══════════════════════════════════════
   MV PORTFOLIO — grid.js
   Card rendering, filters, modal, showcase
   ═══════════════════════════════════════ */

'use strict';

// ── STATE (set by app.js) ──
// window.APP = { cards, siteInfo, activeFilter, currentPage, loadedCount }

// ── CARD HTML ──
function cardHTML(c) {
  const thumb   = c.thumb || (c.ytId ? ytThumb(c.ytId) : '');
  const fallback= c.ytId  ? ytThumbFB(c.ytId) : '';
  const tags    = (c.tags || []).map(t => `<span class="mv-tag">${esc(t)}</span>`).join('');

  return `<div class="mv-card${c.featured ? ' featured' : ''}"
               data-id="${c.id}"
               onclick="openModal('${c.id}')">
    ${thumb
      ? `<img class="mv-thumb" src="${thumb}" alt="${esc(c.title)}" loading="lazy"
             onerror="this.src='${fallback}';this.onerror=null;">`
      : ''}
    <div class="mv-placeholder" ${thumb ? 'style="display:none"' : ''}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    </div>
    <div class="mv-play">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    </div>
    <div class="mv-overlay">
      <div>${tags}<div class="mv-title">${esc(c.title)}</div>
      <div class="mv-artist">${esc(c.artist || '')}</div></div>
    </div>
  </div>`;
}

// ── RENDER GRID ──
function renderGrid(resetPage) {
  const APP = window.APP;
  if (resetPage) { APP.currentPage = 1; APP.loadedCount = 0; }

  const grid    = el('mv-grid');
  const mode    = APP.siteInfo.displayMode || 'all';
  const perPage = parseInt(APP.siteInfo.perPage) || 12;

  const list = APP.activeFilter === 'all'
    ? APP.cards
    : APP.cards.filter(c => (c.tags || []).includes(APP.activeFilter));

  el('works-count').textContent = String(list.length).padStart(2, '0');

  // Remove old pagination/loadmore
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => { const e = el(id); if (e) e.remove(); });

  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }

  if (mode === 'pagination') {
    renderPagination(grid, list, perPage, APP);
  } else if (mode === 'loadmore') {
    renderLoadMore(grid, list, perPage, APP);
  } else {
    grid.innerHTML = list.map(cardHTML).join('');
  }
}

function renderPagination(grid, list, perPage, APP) {
  const total = Math.ceil(list.length / perPage);
  APP.currentPage = Math.min(APP.currentPage, total);
  const slice = list.slice((APP.currentPage - 1) * perPage, APP.currentPage * perPage);
  grid.innerHTML = slice.map(cardHTML).join('');

  if (total > 1) {
    const bar = document.createElement('div');
    bar.id = 'mv-pagination';
    for (let i = 1; i <= total; i++) {
      const btn = document.createElement('button');
      btn.className = 'page-btn' + (i === APP.currentPage ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => {
        APP.currentPage = i;
        renderGrid(false);
        window.scrollTo({ top: el('works').offsetTop - 80, behavior: 'smooth' });
      };
      bar.appendChild(btn);
    }
    grid.appendChild(bar);
  }
}

function renderLoadMore(grid, list, perPage, APP) {
  if (APP.loadedCount === 0) APP.loadedCount = perPage;
  const slice = list.slice(0, APP.loadedCount);
  grid.innerHTML = slice.map(cardHTML).join('');

  if (APP.loadedCount < list.length) {
    const rem = list.length - APP.loadedCount;
    const btn = document.createElement('button');
    btn.id = 'mv-loadmore-btn';
    btn.textContent = `Load More (${rem} more)`;
    btn.onclick = () => { APP.loadedCount += perPage; renderGrid(false); };
    grid.appendChild(btn);
  }
}

// ── FILTERS ──
function renderFilters() {
  const tags = new Set();
  window.APP.cards.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  el('filter-bar').innerHTML =
    `<button class="filter-btn${window.APP.activeFilter === 'all' ? ' active' : ''}"
             onclick="filterCards('all',this)">All</button>` +
    [...tags].map(t =>
      `<button class="filter-btn${window.APP.activeFilter === t ? ' active' : ''}"
               onclick="filterCards('${esc(t)}',this)">${esc(t)}</button>`
    ).join('');
}

function filterCards(tag, btn) {
  window.APP.activeFilter = tag;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(true);
}

// ── HERO SHOWCASE ──
function buildShowcase() {
  const cards = window.APP.cards;
  const thumbs = cards.map(c => c.thumb || (c.ytId ? ytThumbFB(c.ytId) : null)).filter(Boolean);
  if (thumbs.length < 2) return;

  const fill = (arr, min) => {
    let r = [...arr];
    while (r.length < min) r = [...r, ...arr];
    return r;
  };

  const rows = [
    { id: 'hero-row-1', items: fill(thumbs, 20),                              dir: 'left',  speed: 60 },
    { id: 'hero-row-2', items: fill([...thumbs].reverse(), 20),               dir: 'right', speed: 75 },
    { id: 'hero-row-3', items: fill(thumbs.slice(Math.floor(thumbs.length/2)).concat(thumbs.slice(0, Math.floor(thumbs.length/2))), 20), dir: 'left', speed: 50 },
  ];

  rows.forEach(({ id, items, dir, speed }) => {
    const row = el(id);
    if (!row) return;
    const all = [...items, ...items];
    row.innerHTML = all.map(src =>
      `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`
    ).join('');
    requestAnimationFrame(() => {
      row.style.animationDuration = `${items.length * (speed / 20)}s`;
      if (dir === 'right') row.style.animationName = 'slideRight';
    });
  });

  setTimeout(() => {
    const wrap = el('hero-track-wrap');
    if (wrap) wrap.classList.add('visible');
  }, 400);
}

// ── STATS ──
function updateStats() {
  const { cards, siteInfo } = window.APP;
  el('stat-mvs').textContent     = cards.length || '0';
  const artists = new Set(cards.map(c => c.artist).filter(Boolean));
  el('stat-clients').textContent = artists.size || '0';
  const tags = new Set();
  cards.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  el('stat-tags').textContent    = tags.size || '0';
  el('stat-year').textContent    = siteInfo.year || new Date().getFullYear();
}

// ── MODAL ──
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = window.APP.cards.find(x => x.id === id);
  if (!c) return;

  el('modal-title').textContent = c.title;
  el('modal-artist').textContent = c.artist || '';
  el('modal-tags').innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${esc(t)}</span>`).join('');
  el('modal-video-wrap').innerHTML = c.ytId
    ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0"
               allow="autoplay;encrypted-media" allowfullscreen></iframe>`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;

  el('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== el('modal')) return;
  el('modal').classList.remove('open');
  el('modal-video-wrap').innerHTML = '';
  document.body.style.overflow = '';
}

// ── DRAG REORDER ON GRID ──
let _gridSortable = null;

function toggleEditMode() {
  const isActive = document.body.classList.toggle('edit-mode');
  const bar = el('edit-mode-bar');
  const btn = el('edit-mode-toggle-btn');

  if (isActive) {
    bar.classList.add('active');
    if (btn) {
      btn.textContent = '✦ Exit Drag Mode';
      btn.style.cssText += 'background:rgba(255,60,172,.1);border-color:rgba(255,60,172,.4);color:var(--accent2)';
    }
    el('admin-panel').classList.remove('open');
    _initGridSortable();
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
  if (_gridSortable) { _gridSortable.destroy(); _gridSortable = null; }
}

function _initGridSortable() {
  const grid = el('mv-grid');
  if (!grid) return;
  if (_gridSortable) _gridSortable.destroy();

  _gridSortable = Sortable.create(grid, {
    animation: 200,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    // FIXED: Don't filter clicks — let Sortable handle drag vs click naturally
    delay: 150,           // short delay distinguishes drag from click
    delayOnTouchOnly: false,
    onEnd: (evt) => {
      if (evt.oldIndex === evt.newIndex) return;
      // Sync APP.cards to the new visual order
      const moved = window.APP.cards.splice(evt.oldIndex, 1)[0];
      window.APP.cards.splice(evt.newIndex, 0, moved);
      toast('Order changed — click Save Order to persist', '');
    }
  });
}

async function saveGridOrder() {
  toast('Saving order...', '');
  renewAdminSession();
  const { sb, cards } = window.APP;
  await Promise.all(cards.map((c, i) =>
    sb.from('mv_works').update({ sort_order: i }).eq('id', c.id)
  ));
  toast('Order saved! ✓', 'success');
  exitEditMode();
  renderGrid(true);
}
