const _c = s => atob(s);
const SB_URL = _c('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const SB_KEY = _c('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const SHORTCUT = _c('YWRt');
const ADMIN_SESSION_KEY = _c('bXZwX2FkbWluX3Nlc3Npb24=');
const ADMIN_TIMEOUT_MS = 60 * 60 * 1000;
let sb, cards = [], siteInfo = {}, activeFilter = 'all', fetchTimer = null, currentPage = 1, loadedCount = 0;

function isAdminActive() { try { const s = JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY) || 'null'); if (!s) return false; if (Date.now() - s.ts > ADMIN_TIMEOUT_MS) { sessionStorage.removeItem(ADMIN_SESSION_KEY); return false; } return true; } catch { return false; } }
function setAdminSession(a) { if (a) sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ ts: Date.now() })); else sessionStorage.removeItem(ADMIN_SESSION_KEY); }
function renewAdminSession() { if (isAdminActive()) setAdminSession(true); }
setInterval(() => { if (!isAdminActive() && el('admin-panel')?.classList.contains('open')) { el('admin-panel').classList.remove('open'); toast('Admin session expired. Type "adm" to log in again.', 'error'); } }, 60 * 1000);

let keyBuf = '';
document.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (e.key === 'Escape') { closeModal(); el('admin-panel').classList.remove('open'); el('pw-modal').style.display = 'none'; return; }
    keyBuf += e.key.toLowerCase();
    if (keyBuf.length > SHORTCUT.length) keyBuf = keyBuf.slice(-SHORTCUT.length);
    if (keyBuf === SHORTCUT) { keyBuf = ''; requestAdmin(); }
});

function switchTab(name, btn) { 
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); 
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active')); 
    btn.classList.add('active'); el('tab-' + name).classList.add('active'); 
    if (name === 'list') renderExistingList(); 
    if (name === 'site') fillSiteForm(); 
    if (name === 'design') fillDesignForm(); 
}

function requestAdmin() {
    if (isAdminActive()) { renewAdminSession(); el('admin-panel').classList.toggle('open'); return; }
    el('pw-error').style.display = 'none'; el('pw-email').value = ''; el('pw-input').value = ''; el('pw-btn').disabled = false;
    el('pw-modal').style.display = 'flex'; setTimeout(() => el('pw-email').focus(), 100);
}

async function checkPw() {
    const email = el('pw-email').value.trim(), pass = el('pw-input').value;
    if (!email || !pass) { el('pw-error').style.display = 'block'; el('pw-error').textContent = '❌ Please enter email and password.'; return; }
    const btn = el('pw-btn'); btn.textContent = 'Signing in...'; btn.disabled = true;
    try {
        const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
        if (error || !data.user) throw new Error('fail');
        setAdminSession(true); el('pw-modal').style.display = 'none'; el('admin-panel').classList.add('open'); toast('Welcome back! ✓', 'success');
    } catch (e) {
        el('pw-error').style.display = 'block'; el('pw-error').textContent = `❌ Wrong credentials.`; btn.disabled = false;
        el('pw-input').value = ''; el('pw-input').focus();
    }
    btn.textContent = 'Sign In →';
}

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
    setTimeout(() => { setLoadProgress(100, 'Ready!'); setTimeout(() => { hideLoading(); if (isAdminActive()) el('admin-panel').classList.add('open'); }, 300); }, 200);
}

function setLoadProgress(pct, text) { const bar = el('loading-bar'), txt = el('loading-text'); if (bar) bar.style.width = pct + '%'; if (txt && text) txt.textContent = text; }
function hideLoading() { const s = el('loading-screen'); if (!s) return; s.classList.add('hidden'); document.body.classList.remove('loading'); }

async function loadCards() { const { data, error } = await sb.from('mv_works').select('*').order('sort_order').order('created_at'); if (error) return; cards = data || []; renderGrid(true); renderFilters(); updateStats(); buildShowcase(); if (el('tab-list')?.classList.contains('active')) renderExistingList(); }
async function loadSiteInfo() { const { data } = await sb.from('mv_site').select('data').eq('id', 1).single(); if (data?.data) { siteInfo = data.data; applySiteInfo(); updateStats(); } }

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

function cardHTML(c) {
    const thumb = c.thumb || (c.ytId ? ytThumb(c.ytId) : '');
    const fallback = c.ytId ? ytThumbFallback(c.ytId) : '';
    const tags = (c.tags || []).map(t => `<span class="mv-tag">${esc(t)}</span>`).join('');
    return `<div class="mv-card${c.featured ? ' featured' : ''}" onclick="openModal('${c.id}')">
  ${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${esc(c.title)}" loading="lazy" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
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
    if (!list.length) { grid.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);">No works yet.</div>`; return; }
    
    grid.innerHTML = list.map(cardHTML).join(''); 
}

function renderFilters() {
    const tags = new Set(); cards.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
    el('filter-bar').innerHTML = `<button class="filter-btn${activeFilter === 'all' ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="filter-btn${activeFilter === t ? ' active' : ''}" onclick="filterCards('${esc(t)}',this)">${esc(t)}</button>`).join('');
}

function filterCards(tag, btn) { activeFilter = tag; document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderGrid(true); }

function updateStats() {
    el('stat-mvs').textContent = cards.length || '0';
    const artists = new Set(cards.map(c => c.artist).filter(Boolean));
    el('stat-clients').textContent = artists.size || '0';
    const tags = new Set(); cards.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
    el('stat-tags').textContent = tags.size || '0';
    el('stat-year').textContent = siteInfo.year || new Date().getFullYear();
}

function openModal(id) {
    if (document.body.classList.contains('edit-mode')) return; // Mencegah modal terbuka saat edit mode
    const c = cards.find(x => x.id === id); if (!c) return;
    el('modal-title').textContent = c.title; el('modal-artist').textContent = c.artist || '';
    el('modal-tags').innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${esc(t)}</span>`).join('');
    el('modal-video-wrap').innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div>No video</div>`;
    el('modal').classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeModal(e) { if (e && e.target !== el('modal')) return; el('modal').classList.remove('open'); el('modal-video-wrap').innerHTML = ''; document.body.style.overflow = ''; }

// ── FIX FITUR DRAG MODE ────────────────────────────
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
    
    // FIX: Menghapus filter yang membatasi area drag dan memungkinkan drag pada seluruh elemen .mv-card
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

// ── COLORS / FIX TEXT COLOR ───────────────────────────────────
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
    // FIX: Menambahkan property text ke dalam penyimpanan warna
    const colors = {
        text: el('color-text').value,
        accent: el('color-accent').value,
        accent2: el('color-accent2').value,
        bg: el('color-bg').value,
        surface: el('color-surface').value,
    };
    siteInfo.colors = colors;
    const btn = el('color-save-btn');
    btn.textContent = 'Saving...'; btn.disabled = true;
    const { error } = await sb.from('mv_site').upsert({ id: 1, data: siteInfo });
    btn.textContent = '💾 Save Colors'; btn.disabled = false;
    if (error) { toast('Error: ' + error.message, 'error'); return; }
    toast('Colors saved! ✓', 'success');
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
    // Menambahkan text default saat direset
    const defaults = { text: '#f0f0f0', accent: '#c8ff00', accent2: '#ff3cac', bg: '#080810', surface: '#10101c' };
    applyColors(defaults);
    siteInfo.colors = defaults;
    toast('Reset to default — click Save Colors to keep it', '');
}

// ── LOGO & FAVICON FIX ────────────────────────────
let pendingLogo = null, pendingFavicon = null;

function handleLogoUpload(input) {
    const file = input.files; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        pendingLogo = e.target.result;
        const prev = el('logo-preview');
        const img = el('logo-preview-img');
        if (prev && img) { img.src = pendingLogo; prev.style.display = 'block'; }
        toast('Logo ready — click Save Logo & Favicon', '');
    };
    reader.readAsDataURL(file);
}

function handleFaviconUpload(input) {
    const file = input.files; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        pendingFavicon = e.target.result;
        toast('Favicon ready — click Save Logo & Favicon', '');
    };
    reader.readAsDataURL(file);
}

async function saveLogoFavicon() {
    renewAdminSession();
    if (pendingLogo) siteInfo.logoData = pendingLogo;
    if (pendingFavicon) siteInfo.faviconData = pendingFavicon;
    
    const btn = el('logo-save-btn');
    btn.textContent = 'Saving...'; btn.disabled = true;
    const { error } = await sb.from('mv_site').upsert({ id: 1, data: siteInfo });
    btn.textContent = '💾 Save Logo & Favicon'; btn.disabled = false;
    if (error) { toast('Error: ' + error.message, 'error'); return; }
    
    applyLogoFavicon();
    pendingLogo = null; pendingFavicon = null;
    toast('Logo & Favicon saved! ✓', 'success');
}

function applyLogoFavicon() {
    // FIX: Toggle logika untuk menampilkan logo gambar VS logo text
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

function el(id) { return document.getElementById(id); }
function setText(id, v) { if (v && el(id)) el(id).textContent = v; }
function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

let _tt;
function toast(msg, type = '') { const t = el('toast'); t.textContent = msg; t.className = `toast ${type} show`; clearTimeout(_tt); _tt = setTimeout(() => t.classList.remove('show'), 3200); }

// (Salin fungsi pembantu lainnya seperti fillSiteForm, dll dari file awalmu)

// Jalankan sistem
init();
