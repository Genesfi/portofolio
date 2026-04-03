/* ═══════════════════════════════════════
   MV PORTFOLIO — site.js
   Site info, colors, logo/favicon, design tab
   ═══════════════════════════════════════ */

'use strict';

const SOCIALS = [
  { key:'yt',      label:'YouTube',   primary:true,
    icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>' },
  { key:'tw',      label:'Twitter/X', primary:false,
    icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
  { key:'discord', label:'Discord',   primary:false,
    icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.024.015.046.033.06a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>' },
  { key:'vgen',    label:'VGen',      primary:false,
    icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>' },
  { key:'ig',      label:'Instagram', primary:false,
    icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>' },
  { key:'tiktok',  label:'TikTok',    primary:false,
    icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>' },
];

// ── APPLY SITE INFO ──
function applySiteInfo() {
  const s = window.APP.siteInfo;
  if (!s || !Object.keys(s).length) return;

  if (s.colors) applyColors(s.colors);
  applyLogoFavicon();

  // Page/tab title
  const tabTitle = s.siteTitle || s.brand || 'MV Portfolio';
  document.title = tabTitle;
  const pt = el('page-title'); if (pt) pt.textContent = tabTitle;

  // Brand name (nav + footer)
  if (s.brand) {
    const brandHTML = s.brand.replace('.', '<span>.</span>');
    el('nav-brand').innerHTML = brandHTML;
    el('footer-brand').innerHTML = brandHTML;
  }

  setText('hero-label', s.label);
  setText('hero-sub',   s.hsub);
  setText('about-p1',   s.about1);
  setText('about-p2',   s.about2);
  setText('footer-copy', s.copy);

  // Hero title lines (| separator)
  if (s.htitle) {
    const lines = s.htitle.split('|');
    el('hero-title').innerHTML = lines
      .map((l, i) => i === 0 ? l : i === 1 ? `<span class="accent">${l}</span>` : `<span class="stroke">${l}</span>`)
      .join('<br>');
  }

  // Social links
  const aboutWrap  = el('about-social-btns');
  const footerWrap = el('footer-social-links');
  const active     = SOCIALS.filter(sc => s[sc.key]);

  if (aboutWrap)
    aboutWrap.innerHTML = active.map(sc =>
      `<a href="${s[sc.key]}" target="_blank" rel="noopener"
          class="btn ${sc.primary ? 'btn-primary' : 'btn-ghost'}"
          style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">
         ${sc.icon} ${sc.label}
       </a>`
    ).join('');

  if (footerWrap)
    footerWrap.innerHTML = active.map(sc =>
      `<a href="${s[sc.key]}" target="_blank" rel="noopener">${sc.label}</a>`
    ).join('');
}

// ── FILL SITE FORM ──
function fillSiteForm() {
  const s = window.APP.siteInfo;
  ['brand','siteTitle','label','htitle','hsub','about1','about2',
   'yt','tw','discord','vgen','ig','tiktok','copy','year'].forEach(k => {
    if (el('s-' + k)) el('s-' + k).value = s[k] || '';
  });
  if (el('s-perpage')) el('s-perpage').value = s.perPage || 12;
  const mode = s.displayMode || 'all';
  const radio = el('dm-' + mode);
  if (radio) radio.checked = true;
}

function previewMode(mode) {
  window.APP.siteInfo.displayMode = mode;
  renderGrid(true);
}

// ── SAVE SITE ──
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  const s = window.APP.siteInfo;

  Object.assign(s, {
    brand:       el('s-brand').value,
    siteTitle:   el('s-siteTitle').value,
    label:       el('s-label').value,
    htitle:      el('s-htitle').value,
    hsub:        el('s-hsub').value,
    about1:      el('s-about1').value,
    about2:      el('s-about2').value,
    yt:          el('s-yt').value,
    tw:          el('s-tw').value,
    discord:     el('s-discord').value,
    vgen:        el('s-vgen').value,
    ig:          el('s-ig').value,
    tiktok:      el('s-tiktok').value,
    copy:        el('s-copy').value,
    year:        el('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage:     parseInt(el('s-perpage')?.value) || 12,
  });

  const btn = el('site-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;

  renewAdminSession();
  const { error } = await window.APP.sb.from('mv_site').upsert({ id: 1, data: s });
  btn.textContent = 'Save Site Info →';
  btn.disabled = false;

  if (error) { toast('Error: ' + error.message, 'error'); return; }
  applySiteInfo();
  updateStats();
  renderGrid(true);
  toast('Site info saved! ✓', 'success');
}

// ════════════════════════════
// DESIGN TAB
// ════════════════════════════

const COLOR_PRESETS = {
  lime:   { accent:'#c8ff00', accent2:'#ff3cac', text:'#f0f0f0', bg:'#080810', surface:'#10101c' },
  cyan:   { accent:'#00ffee', accent2:'#ff3cac', text:'#f0f0f0', bg:'#060c12', surface:'#0c1a22' },
  pink:   { accent:'#ff2d78', accent2:'#ffe600', text:'#f0f0f0', bg:'#100810', surface:'#1c101c' },
  orange: { accent:'#ff7b00', accent2:'#00d4ff', text:'#f0f0f0', bg:'#100a06', surface:'#1c1208' },
  purple: { accent:'#9d4edd', accent2:'#ff6b6b', text:'#f0f0f0', bg:'#08060e', surface:'#120e1e' },
  white:  { accent:'#ffffff', accent2:'#ff3cac', text:'#f0f0f0', bg:'#080810', surface:'#10101c' },
};

// Color vars: accent, accent2, text, bg, surface
const COLOR_VARS = ['accent','accent2','text','bg','surface'];

function applyColors(colors) {
  if (!colors) return;
  COLOR_VARS.forEach(k => {
    if (!colors[k]) return;
    document.documentElement.style.setProperty('--' + k, colors[k]);
    const picker = el('color-' + k);     if (picker) picker.value = colors[k];
    const hex    = el('color-' + k + '-hex'); if (hex) hex.value = colors[k];
  });
}

function applyColorPreset(name) {
  const p = COLOR_PRESETS[name];
  if (!p) return;
  applyColors(p);
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
  const colors = {};
  COLOR_VARS.forEach(k => { colors[k] = el('color-' + k)?.value || ''; });
  window.APP.siteInfo.colors = colors;

  const btn = el('color-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;

  const { error } = await window.APP.sb.from('mv_site').upsert({ id: 1, data: window.APP.siteInfo });
  btn.textContent = '💾 Save Colors';
  btn.disabled = false;

  if (error) { toast('Error: ' + error.message, 'error'); return; }
  toast('Colors saved! ✓', 'success');
}

function resetColors() {
  const defaults = { accent:'#c8ff00', accent2:'#ff3cac', text:'#f0f0f0', bg:'#080810', surface:'#10101c' };
  applyColors(defaults);
  toast('Reset to default — click Save Colors to keep', '');
}

function fillDesignForm() {
  const s = window.APP.siteInfo;
  if (s.colors) applyColors(s.colors);
  if (s.logoData) {
    const prev = el('logo-preview');
    const img  = el('logo-preview-img');
    if (prev && img) { img.src = s.logoData; prev.style.display = 'block'; }
  }
}

// ── LOGO & FAVICON ──
let _pendingLogo = null, _pendingFavicon = null;

function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    _pendingLogo = e.target.result;
    const prev = el('logo-preview');
    const img  = el('logo-preview-img');
    if (prev && img) { img.src = _pendingLogo; prev.style.display = 'block'; }
    toast('Logo ready — click Save Logo & Favicon', '');
  };
  reader.readAsDataURL(file);
}

function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    _pendingFavicon = e.target.result;
    toast('Favicon ready — click Save Logo & Favicon', '');
  };
  reader.readAsDataURL(file);
}

async function saveLogoFavicon() {
  renewAdminSession();
  if (!_pendingLogo && !_pendingFavicon) { toast('No new images selected', 'error'); return; }

  if (_pendingLogo)    window.APP.siteInfo.logoData    = _pendingLogo;
  if (_pendingFavicon) window.APP.siteInfo.faviconData = _pendingFavicon;

  const btn = el('logo-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;

  const { error } = await window.APP.sb.from('mv_site').upsert({ id: 1, data: window.APP.siteInfo });
  btn.textContent = '💾 Save Logo & Favicon';
  btn.disabled = false;

  if (error) { toast('Error: ' + error.message, 'error'); return; }

  applyLogoFavicon();
  _pendingLogo = null;
  _pendingFavicon = null;
  toast('Logo & Favicon saved! ✓', 'success');
}

function applyLogoFavicon() {
  const s = window.APP.siteInfo;
  if (s.logoData) {
    const logo = document.querySelector('.loading-logo');
    if (logo) logo.src = s.logoData;
  }
  if (s.faviconData) {
    let link = document.querySelector('link[rel="icon"]');
    if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
    link.href = s.faviconData;
  }
}
