/* ═══════════════════════════════════════
   MV PORTFOLIO — app.js
   Bootstrap, Supabase init, data loading
   ═══════════════════════════════════════ */

'use strict';

// ── GLOBAL STATE ──
window.APP = {
  sb:           null,
  cards:        [],
  siteInfo:     {},
  activeFilter: 'all',
  currentPage:  1,
  loadedCount:  0,
};

// ── KEYBOARD SHORTCUT ──
let _keyBuf = '';
document.addEventListener('keydown', e => {
  if (['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
  if (e.key === 'Escape') {
    closeModal();
    el('admin-panel').classList.remove('open');
    el('pw-modal').style.display = 'none';
    exitEditMode();
    return;
  }
  _keyBuf += e.key.toLowerCase();
  if (_keyBuf.length > SHORTCUT.length) _keyBuf = _keyBuf.slice(-SHORTCUT.length);
  if (_keyBuf === SHORTCUT) { _keyBuf = ''; requestAdmin(); }
});

// ── LOADING PROGRESS ──
function setLoadProgress(pct, text) {
  const bar = el('loading-bar'), txt = el('loading-text');
  if (bar) bar.style.width = pct + '%';
  if (txt && text) txt.textContent = text;
}
function hideLoading() {
  const s = el('loading-screen');
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}

// ── LOAD DATA ──
async function loadCards() {
  const { data, error } = await window.APP.sb
    .from('mv_works').select('*')
    .order('sort_order')
    .order('created_at');

  if (error) { toast('Error: ' + error.message, 'error'); return; }

  window.APP.cards = data || [];
  renderGrid(true);
  renderFilters();
  updateStats();
  buildShowcase();

  // Refresh admin list if open
  if (el('tab-list')?.classList.contains('active')) renderExistingList();
}

async function loadSiteInfo() {
  const { data } = await window.APP.sb
    .from('mv_site').select('data').eq('id', 1).single();

  if (data?.data) {
    window.APP.siteInfo = data.data;
    applySiteInfo();
    updateStats();
  }
}

// ── INIT ──
async function init() {
  document.body.classList.add('loading');
  setLoadProgress(15, 'Connecting...');

  window.APP.sb = window.supabase.createClient(SB_URL, SB_KEY);
  setLoadProgress(35, 'Loading site info...');

  await loadSiteInfo();
  setLoadProgress(65, 'Loading works...');

  await loadCards();
  setLoadProgress(90, 'Almost there...');

  // Realtime subscriptions
  window.APP.sb.channel('mv_realtime')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'mv_works'  }, loadCards)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'mv_site'   }, loadSiteInfo)
    .subscribe();

  setTimeout(() => {
    setLoadProgress(100, 'Ready!');
    setTimeout(() => {
      hideLoading();
      if (isAdminActive()) el('admin-panel').classList.add('open');
    }, 300);
  }, 200);
}

// ── BOOT ──
init();
