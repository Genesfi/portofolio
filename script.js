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

// ── SITE INFO (Fungsi yang hilang) ────────────────────────────

function applySiteInfo() {
    const s = siteInfo; if (!s || !Object.keys(s).length) return;
    if (s.colors) applyColors(s.colors);
    applyLogoFavicon();
    const tabTitle = s.siteTitle || s.brand || 'MV Portfolio'; document.title = tabTitle; if (el('page-title')) el('page-title').textContent = tabTitle;
    if (s.brand) { el('nav-brand').innerHTML = s.brand.replace('.', '<span>.</span>'); el('footer-brand').innerHTML = s.brand.replace('.', '<span>.</span>'); }
    setText('hero-label', s.label); setText('hero-sub', s.hsub); setText('about-p1', s.about1); setText('about-p2', s.about2); setText('footer-copy', s.copy);
    if (s.htitle) { const lines = s.htitle.split('|'); el('hero-title').innerHTML = lines.map((l, i) => i === 0 ? l : i === 1 ? `<span class="accent">${l}</span>` : `<span class="stroke">${l}</span>`).join('<br>'); }
    
    // Ikon Sosial Media
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
        colors: siteInfo.colors, logoData: siteInfo.logoData, faviconData: siteInfo.faviconData // Memastikan data design tidak tertimpa
    };
    const btn = el('site-save-btn'); btn.textContent = 'Saving...'; btn.disabled = true;
    renewAdminSession();
    const { error } = await sb.from('mv_site').upsert({ id: 1, data: siteInfo });
    btn.textContent = 'Simpan Info Site →'; btn.disabled = false;
    if (error) { toast('Error: ' + error.message, 'error'); return; }
    applySiteInfo(); updateStats(); renderGrid(true); toast('Site info saved! ✓', 'success');
}

function closeSiteEdit() { 
    const panel = el('site-edit-panel');
    if (panel) panel.classList.remove('open'); 
}

// Jalankan sistem
init();
