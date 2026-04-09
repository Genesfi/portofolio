const _0xd33ffa39 = (_0x5388f025) => atob(_0x5388f025);
const _0x28c84fd0 = _0xd33ffa39('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x44a7397e = _0xd33ffa39('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0xc1c0fd5b = _0xd33ffa39('YWRt');
const _0x90c83c2b = _0xd33ffa39('bXZwX2FkbWluX3Nlc3Npb24=');
const _0xdc649d1a = ((60 * 60) * 1000);
let _0x0d0b8e83,_0x8e583cbe = [],_0x5ab197b3 = {},_0x2f320bf7 = 'all',_0x0e30eaf7 = null,_0x7b750ab4 = 1,_0xf11df308 = 0;

// ── AUTOPLAY STATE ──
// Default ON, tersimpan di localStorage supaya preferensi user diingat
let _0x08f13d05 = (() => {
  try {const _0x4abe8366 = localStorage.getItem('mv_autoplay');return (_0x4abe8366 === null) ? true : (_0x4abe8366 === '1');} catch {return true;}
})();

function toggleAutoplay() {
  _0x08f13d05 = !_0x08f13d05;
  try {localStorage.setItem('mv_autoplay', _0x08f13d05 ? '1' : '0');} catch {}
  updateAutoplayBtn();
  if (_0x08f13d05) {
    // ON: inject / play semua featured yang belum jalan
    injectPreloadedFeatured();
    autoPlayFeatured();
  } else {
    // OFF: hentikan semua featured yang sedang play
    stopAllFeatured();
  }
}

function updateAutoplayBtn() {
  const _0x16a8eaa9 = el('autoplay-toggle'),label = el('autoplay-label');
  if (!_0x16a8eaa9) return;
  if (_0x08f13d05) {
    _0x16a8eaa9.classList.add('active');
    if (label) label.textContent = 'Autoplay';
    _0x16a8eaa9.title = 'Autoplay ON — click to turn off';
  } else {
    _0x16a8eaa9.classList.remove('active');
    if (label) label.textContent = 'Autoplay';
    _0x16a8eaa9.title = 'Autoplay OFF — click to turn on';
  }
}

function stopAllFeatured() {
  document.querySelectorAll('.mv-card.featured-autoplay').forEach((card) => {
    const _0x1a2cae8c = card.querySelector('.mv-preview-iframe');
    if (_0x1a2cae8c) _0x1a2cae8c.remove();
    card.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  // Bersihkan juga preload map
  _0xafb85346.forEach((_0x1a2cae8c) => _0x1a2cae8c.remove());
  _0xafb85346.clear();
}

// ── FEATURED PRELOAD CACHE ──
// Key: ytId, Value: iframe element (dibuat saat loading screen masih muncul)
const _0xafb85346 = new Map();

// Preload semua featured iframe, return Promise yang resolve saat
// SEMUA iframe sudah onload — atau setelah MAX_WAIT_MS timeout (fallback).
function preloadFeaturedIframes() {
  const _0x575adfc5 = 5000;
  if (!_0x08f13d05) return Promise.resolve(); // skip kalau user matiin autoplay
  const _0x7afe3b04 = _0x8e583cbe.filter((_0x41c8c759) => (_0x41c8c759.featured && _0x41c8c759.ytId));
  if (!_0x7afe3b04.length) return Promise.resolve();

  const _0xb184c538 = _0x7afe3b04.map((_0x41c8c759) => {
    if (_0xafb85346.has(_0x41c8c759.ytId)) return Promise.resolve();
    return new Promise((resolve) => {
      const _0x1a2cae8c = document.createElement('iframe');
      _0x1a2cae8c.allow = 'autoplay';
      _0x1a2cae8c.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      _0x1a2cae8c.src = `https://www.youtube.com/embed/${_0x41c8c759.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${_0x41c8c759.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;

      const _0x8fdfd489 = () => {_0x1a2cae8c._mvReady = true;resolve();};
      _0x1a2cae8c.onload = _0x8fdfd489;
      // Fallback: kalau onload tidak muncul dalam MAX_WAIT_MS, resolve aja
      const _0xcea7e3e1 = setTimeout(_0x8fdfd489, _0x575adfc5);
      _0x1a2cae8c.onload = () => {clearTimeout(_0xcea7e3e1);_0x1a2cae8c._mvReady = true;resolve();};

      document.body.appendChild(_0x1a2cae8c);
      _0xafb85346.set(_0x41c8c759.ytId, _0x1a2cae8c);
    });
  });

  // Race: selesai semua ATAU timeout global 5 detik
  return Promise.race([
  Promise.all(_0xb184c538),
  new Promise((_0x255b19df) => setTimeout(_0x255b19df, _0x575adfc5))]
  );
}

// ── ADMIN SESSION ──
function isAdminActive() {try {const _0x5388f025 = JSON.parse((sessionStorage.getItem(_0x90c83c2b) || 'null'));if (!_0x5388f025) return false;if (((Date.now() - _0x5388f025.ts) > _0xdc649d1a)) {sessionStorage.removeItem(_0x90c83c2b);return false;}return true;} catch {return false;}}
function setAdminSession(a) {if (a) sessionStorage.setItem(_0x90c83c2b, JSON.stringify({ ts: Date.now() }));else sessionStorage.removeItem(_0x90c83c2b);}
function renewAdminSession() {if (isAdminActive()) setAdminSession(true);}
setInterval(() => {if ((!isAdminActive() && el('admin-panel')?.classList.contains('open'))) {el('admin-panel').classList.remove('open');toast('Admin session expired. Type "adm" to log in again.', 'error');}}, (60 * 1000));

function closeAdminPanel() {
  document.getElementById('admin-panel').classList.remove('open');
  _0x0d0b8e83.auth.signOut();
  setAdminSession(false);
}

// ── SECRET SHORTCUT ──
let _0x9873d80a = '';
document.addEventListener('keydown', (_0x1d322cac) => {
  if (['INPUT', 'TEXTAREA'].includes(_0x1d322cac.target.tagName)) return;
  if ((_0x1d322cac.key === 'Escape')) {closeModal();closeSiteEdit();closeAdminPanel();el('pw-modal').style.display = 'none';return;}
  _0x9873d80a += _0x1d322cac.key.toLowerCase();
  if ((_0x9873d80a.length > _0xc1c0fd5b.length)) _0x9873d80a = _0x9873d80a.slice(-_0xc1c0fd5b.length);
  if ((_0x9873d80a === _0xc1c0fd5b)) {_0x9873d80a = '';requestAdmin();}
});

// ── TABS ──
function switchTab(name, _0x16a8eaa9) {
  document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach((_0x6aabff61) => _0x6aabff61.classList.remove('active'));
  _0x16a8eaa9.classList.add('active');el(('tab-' + name)).classList.add('active');
  if ((name === 'list')) renderExistingList();
  if ((name === 'site')) fillSiteForm();
  if ((name === 'design')) fillDesignForm();
}

// ── PASSWORD / AUTH ──
function requestAdmin() {
  if (isAdminActive()) {renewAdminSession();el('admin-panel').classList.toggle('open');return;}
  el('pw-error').style.display = 'none';el('pw-email').value = '';el('pw-input').value = '';el('pw-btn').disabled = false;
  try {const _0x6af62942 = JSON.parse((sessionStorage.getItem(_0xd33ffa39('bG9ja291dA==')) || 'null'));if ((_0x6af62942 && (Date.now() < _0x6af62942.until))) {const _0x880be8f5 = Math.ceil(((_0x6af62942.until - Date.now()) / 60000));el('pw-error').style.display = 'block';el('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0x880be8f5} min.`;el('pw-btn').disabled = true;}} catch (_0x1d322cac) {}
  el('pw-modal').style.display = 'flex';setTimeout(() => el('pw-email').focus(), 100);
}

async function checkPw() {
  const _0x4a4db351 = 5,_0xac484adc = ((15 * 60) * 1000),now = Date.now();
  const _0x754c1926 = _0xd33ffa39('bG9ja291dA=='),_0xa40986fa = _0xd33ffa39('YXR0ZW1wdHM=');
  try {const _0x6af62942 = JSON.parse((sessionStorage.getItem(_0x754c1926) || 'null'));if ((_0x6af62942 && (now < _0x6af62942.until))) {const _0x880be8f5 = Math.ceil(((_0x6af62942.until - now) / 60000));el('pw-error').style.display = 'block';el('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0x880be8f5} min.`;el('pw-btn').disabled = true;return;}} catch (_0x1d322cac) {}
  const email = el('pw-email').value.trim(),_0xf59f3849 = el('pw-input').value;
  if ((!email || !_0xf59f3849)) {el('pw-error').style.display = 'block';el('pw-error').textContent = '❌ Please enter email and password.';return;}
  const _0x16a8eaa9 = el('pw-btn');_0x16a8eaa9.textContent = 'Signing in...';_0x16a8eaa9.disabled = true;
  try {
    const { data, error } = await _0x0d0b8e83.auth.signInWithPassword({ email, password: _0xf59f3849 });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0xa40986fa);sessionStorage.removeItem(_0x754c1926);
    setAdminSession(true);el('pw-modal').style.display = 'none';el('admin-panel').classList.add('open');toast('Welcome back! ✓', 'success');
  } catch (_0x1d322cac) {
    let _0x0702d6ad = 0;try {_0x0702d6ad = parseInt((sessionStorage.getItem(_0xa40986fa) || '0'));} catch (_0x1d322cac) {}
    _0x0702d6ad++;sessionStorage.setItem(_0xa40986fa, _0x0702d6ad);
    const _0xc47ca86d = (_0x4a4db351 - _0x0702d6ad);
    if ((_0x0702d6ad >= _0x4a4db351)) {sessionStorage.setItem(_0x754c1926, JSON.stringify({ until: (now + _0xac484adc) }));sessionStorage.removeItem(_0xa40986fa);el('pw-error').style.display = 'block';el('pw-error').textContent = '🔒 Too many attempts. Locked for 15 minutes.';_0x16a8eaa9.disabled = true;} else
    {el('pw-error').style.display = 'block';el('pw-error').textContent = `❌ Wrong credentials. ${_0xc47ca86d} attempt${(_0xc47ca86d > 1) ? 's' : ''} left.`;_0x16a8eaa9.disabled = false;}
    el('pw-input').value = '';el('pw-input').focus();
  }
  _0x16a8eaa9.textContent = 'Sign In →';
}

// ── LOADING ──
function setLoadProgress(pct, text) {const _0xaaee26d3 = el('loading-bar'),_0x60484c1d = el('loading-text');if (_0xaaee26d3) _0xaaee26d3.style.width = (pct + '%');if ((_0x60484c1d && text)) _0x60484c1d.textContent = text;}
function hideLoading() {const _0x5388f025 = el('loading-screen');if (!_0x5388f025) return;_0x5388f025.classList.add('hidden');document.body.classList.remove('loading');}

// ── LOAD DATA ──
async function loadCards() {
  const { data, error } = await _0x0d0b8e83.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {console.error(error);return;}
  _0x8e583cbe = (data || []);
  renderGrid(true);
  renderFilters();
  updateStats();
  buildShowcase();
  if (el('tab-list')?.classList.contains('active')) renderExistingList();
}

async function loadSiteInfo() {
  const { data } = await _0x0d0b8e83.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x5ab197b3 = data.data;
    if (_0x5ab197b3.logoData) {
      await new Promise((resolve) => {
        const _0x57012b3b = new Image();
        _0x57012b3b.onload = resolve;
        _0x57012b3b.onerror = resolve;
        _0x57012b3b.src = _0x5ab197b3.logoData;
      });
    }
    applySiteInfo();
    updateStats();
  }
}

// ── UTILS ──
function el(id) {return document.getElementById(id);}
function setText(id, _0x4abe8366) {if ((_0x4abe8366 && el(id))) el(id).textContent = _0x4abe8366;}
function esc(_0x5388f025) {return String((_0x5388f025 || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');}
function ytExtract(_0x5388f025) {if ((!_0x5388f025 || (typeof _0x5388f025 !== 'string'))) return null;const _0x80b46d6f = (_0x5388f025.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || _0x5388f025.match(/^([a-zA-Z0-9_-]{11})$/));return _0x80b46d6f ? _0x80b46d6f[1] : null;}
let _0xb4e17ec6;
function toast(msg, type = '') {const _0xcea7e3e1 = el('toast');_0xcea7e3e1.textContent = msg;_0xcea7e3e1.className = `toast ${type} show`;clearTimeout(_0xb4e17ec6);_0xb4e17ec6 = setTimeout(() => _0xcea7e3e1.classList.remove('show'), 3200);}

// ── TAG PRESETS ──
function getTagsArray(id) {const _0x9ae54f5d = (el(id).value || '');return _0x9ae54f5d.split(',').map((_0xcea7e3e1) => _0xcea7e3e1.trim()).filter(Boolean);}
function setTagsArray(id, arr) {el(id).value = arr.join(', ');}
function togglePresetTag(inputId, tag, _0x16a8eaa9) {renewAdminSession();let tags = getTagsArray(inputId);if (tags.includes(tag)) {tags = tags.filter((_0xcea7e3e1) => (_0xcea7e3e1 !== tag));_0x16a8eaa9.classList.remove('active');} else {tags.push(tag);_0x16a8eaa9.classList.add('active');}setTagsArray(inputId, tags);}
function syncPresetHighlight(inputId, presetsId) {const tags = getTagsArray(inputId),_0xa5b33517 = el(presetsId);if (!_0xa5b33517) return;_0xa5b33517.querySelectorAll('.tag-preset-btn').forEach((_0x16a8eaa9) => {_0x16a8eaa9.classList.toggle('active', tags.includes(_0x16a8eaa9.textContent.trim()));});}

// ── SHOWCASE ──
function ytThumb(id) {return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;}
function ytThumbFallback(id) {return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;}

function buildShowcase() {
  const _0x2dd9e425 = _0x8e583cbe.map((_0x41c8c759) => (_0x41c8c759.thumb || (_0x41c8c759.ytId ? ytThumbFallback(_0x41c8c759.ytId) : null))).filter(Boolean);
  if ((_0x2dd9e425.length < 2)) return;
  const _0xe70738de = (arr, min) => {let _0x255b19df = [...arr];while ((_0x255b19df.length < min)) _0x255b19df = [..._0x255b19df, ...arr];return _0x255b19df;};
  const _0x48442714 = [
  { id: 'hero-row-1', items: _0xe70738de(_0x2dd9e425, 20), dir: 'left', speed: 60 },
  { id: 'hero-row-2', items: _0xe70738de([..._0x2dd9e425].reverse(), 20), dir: 'right', speed: 75 },
  { id: 'hero-row-3', items: _0xe70738de(_0x2dd9e425.slice(Math.floor((_0x2dd9e425.length / 2))).concat(_0x2dd9e425.slice(0, Math.floor((_0x2dd9e425.length / 2)))), 20), dir: 'left', speed: 50 }];

  _0x48442714.forEach(({ id, items, dir, speed }) => {
    const _0x42bcde5f = el(id);if (!_0x42bcde5f) return;
    const all = [...items, ...items];
    _0x42bcde5f.innerHTML = all.map((src) => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0x95a8df3e = (items.length * (speed / 20));
      _0x42bcde5f.style.animationDuration = `${_0x95a8df3e}s`;
      if ((dir === 'right')) {_0x42bcde5f.style.animationName = 'slideRight';}
    });
  });
  setTimeout(() => {const _0xa5b33517 = el('hero-track-wrap');if (_0xa5b33517) _0xa5b33517.classList.add('visible');}, 400);
}

// ── RENDER ──
function cardHTML(_0x41c8c759) {
  const thumb = (_0x41c8c759.thumb || (_0x41c8c759.ytId ? ytThumb(_0x41c8c759.ytId) : ''));
  const _0x1cc2f797 = _0x41c8c759.ytId ? ytThumbFallback(_0x41c8c759.ytId) : '';
  const tags = (_0x41c8c759.tags || []).map((_0xcea7e3e1) => `<span class="mv-tag">${esc(_0xcea7e3e1)}</span>`).join('');
  const _0xbce50a6b = !!_0x41c8c759.ytId;
  const _0x79b287b3 = !!_0x41c8c759.featured;

  const _0xbcf2e8f3 = (_0xbce50a6b && !_0x79b287b3) ?
  `onmouseenter="startPreview(this,'${_0x41c8c759.ytId}')" onmouseleave="stopPreview(this)"` :
  '';

  return `<div class="mv-card${_0x79b287b3 ? ' featured' : ''}" 
        data-id="${_0x41c8c759.id}" 
        data-ytid="${(_0x41c8c759.ytId || '')}"
        onclick="openModal('${_0x41c8c759.id}')"
        ${_0xbcf2e8f3}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${esc(_0x41c8c759.title)}" loading="lazy" onerror="this.src='${_0x1cc2f797}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${esc(_0x41c8c759.title)}</div><div class="mv-artist">${esc((_0x41c8c759.artist || ''))}</div></div></div>
</div>`;
}

function getDisplayMode() {return (_0x5ab197b3.displayMode || 'all');}
function getPerPage() {return (parseInt(_0x5ab197b3.perPage) || 12);}

function renderGrid(resetPage) {
  if (resetPage) {_0x7b750ab4 = 1;_0xf11df308 = 0;}
  const _0xb0508eea = el('mv-grid'),_0x040bac11 = getDisplayMode(),perPage = getPerPage();
  const _0x4f1877f6 = (_0x2f320bf7 === 'all') ? _0x8e583cbe : _0x8e583cbe.filter((_0x41c8c759) => (_0x41c8c759.tags || []).includes(_0x2f320bf7));
  el('works-count').textContent = String(_0x4f1877f6.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach((id) => {const _0x1d322cac = el(id);if (_0x1d322cac) _0x1d322cac.remove();});
  if (!_0x4f1877f6.length) {_0xb0508eea.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;return;}
  if ((_0x040bac11 === 'pagination')) {
    const _0x52c67801 = Math.ceil((_0x4f1877f6.length / perPage));
    _0x7b750ab4 = Math.min(_0x7b750ab4, _0x52c67801);
    const slice = _0x4f1877f6.slice(((_0x7b750ab4 - 1) * perPage), (_0x7b750ab4 * perPage));
    _0xb0508eea.innerHTML = slice.map(cardHTML).join('');
    if ((_0x52c67801 > 1)) {const _0xaaee26d3 = document.createElement('div');_0xaaee26d3.id = 'mv-pagination';_0xaaee26d3.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';for (let _0x4072741f = 1; (_0x4072741f <= _0x52c67801); _0x4072741f++) {const _0x16a8eaa9 = document.createElement('button');_0x16a8eaa9.textContent = _0x4072741f;_0x16a8eaa9.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x4072741f === _0x7b750ab4) ? 'var(--accent)' : 'transparent'};color:${(_0x4072741f === _0x7b750ab4) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;_0x16a8eaa9.onclick = () => {_0x7b750ab4 = _0x4072741f;renderGrid(false);window.scrollTo({ top: (el('works').offsetTop - 80), behavior: 'smooth' });};_0xaaee26d3.appendChild(_0x16a8eaa9);}_0xb0508eea.appendChild(_0xaaee26d3);}
  } else if ((_0x040bac11 === 'loadmore')) {
    if (resetPage) _0xf11df308 = perPage;else _0xf11df308 = Math.max(_0xf11df308, perPage);
    const slice = _0x4f1877f6.slice(0, _0xf11df308);
    _0xb0508eea.innerHTML = slice.map(cardHTML).join('');
    if ((_0xf11df308 < _0x4f1877f6.length)) {const _0xc47ca86d = (_0x4f1877f6.length - _0xf11df308);const _0x16a8eaa9 = document.createElement('button');_0x16a8eaa9.id = 'mv-loadmore-btn';_0x16a8eaa9.textContent = `Load More (${_0xc47ca86d} more)`;_0x16a8eaa9.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';_0x16a8eaa9.onmouseenter = () => _0x16a8eaa9.style.background = 'rgba(200,255,0,.08)';_0x16a8eaa9.onmouseleave = () => _0x16a8eaa9.style.background = 'transparent';_0x16a8eaa9.onclick = () => {_0xf11df308 += perPage;renderGrid(false);};_0xb0508eea.appendChild(_0x16a8eaa9);}
  } else {
    _0xb0508eea.innerHTML = _0x4f1877f6.map(cardHTML).join('');
  }

  // Inject iframe yang sudah preloaded ke card featured
  // Tidak ada delay — langsung inject karena iframe sudah warming up sejak loading screen
  requestAnimationFrame(() => injectPreloadedFeatured());
}

function renderFilters() {
  const tags = new Set();_0x8e583cbe.forEach((_0x41c8c759) => (_0x41c8c759.tags || []).forEach((_0xcea7e3e1) => tags.add(_0xcea7e3e1)));
  el('filter-bar').innerHTML = (`<button class="filter-btn${(_0x2f320bf7 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map((_0xcea7e3e1) => `<button class="filter-btn${(_0x2f320bf7 === _0xcea7e3e1) ? ' active' : ''}" onclick="filterCards('${esc(_0xcea7e3e1)}',this)">${esc(_0xcea7e3e1)}</button>`).join(''));
}

function filterCards(tag, _0x16a8eaa9) {_0x2f320bf7 = tag;document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));_0x16a8eaa9.classList.add('active');renderGrid(true);}

// ── INJECT PRELOADED FEATURED (tanpa delay, iframe sudah siap) ──
function injectPreloadedFeatured() {
  if (!_0x08f13d05) return; // respect user preference
  const _0xeadf93f0 = document.querySelectorAll('.mv-card.featured');
  _0xeadf93f0.forEach((card) => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;

    const _0x5ecbb1e8 = _0xafb85346.get(ytId);
    if (_0x5ecbb1e8) {
      // Ambil iframe dari cache, pindahkan ke dalam card
      _0x5ecbb1e8.removeAttribute('style');
      _0x5ecbb1e8.className = 'mv-preview-iframe';
      card.insertBefore(_0x5ecbb1e8, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      // Iframe sudah loading sejak tadi — tandai ready setelah onload
      // Kalau sudah loaded sebelumnya, langsung ready
      if (_0x5ecbb1e8.contentWindow) {
        // Cek apakah sudah loaded dengan flag custom
        if (_0x5ecbb1e8._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0x5ecbb1e8.onload = () => {
            _0x5ecbb1e8._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0xafb85346.delete(ytId); // sudah dipindah, hapus dari map
    } else {
      // Fallback: tidak ada preload (misal card baru ditambah), buat iframe baru
      autoPlayFeaturedCard(card, ytId);
    }
  });
}

// ── AUTO PLAY FEATURED (fallback untuk card yang tidak sempat preload) ──
function autoPlayFeaturedCard(card, ytId) {
  if (!_0x08f13d05) return; // respect user preference
  if (card.classList.contains('previewing')) return;
  card.classList.add('previewing', 'featured-autoplay');
  const _0x1a2cae8c = document.createElement('iframe');
  _0x1a2cae8c.className = 'mv-preview-iframe';
  _0x1a2cae8c.allow = 'autoplay';
  _0x1a2cae8c.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
  _0x1a2cae8c.onload = () => {
    _0x1a2cae8c._mvReady = true;
    card.classList.add('preview-ready');
  };
  card.insertBefore(_0x1a2cae8c, card.firstChild);
}

// Fungsi lama dipertahankan untuk kompatibilitas (dipanggil dari realtime update)
function autoPlayFeatured() {
  const _0x7afe3b04 = document.querySelectorAll('.mv-card.featured');
  _0x7afe3b04.forEach((card) => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    autoPlayFeaturedCard(card, ytId);
  });
}

// ── EXISTING LIST ──
let _0xfd589a92 = null;
function renderExistingList() {
  const _0x250b2b0d = el('existing-list');
  if (!_0x8e583cbe.length) {_0x250b2b0d.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';if (_0xfd589a92) {_0xfd589a92.destroy();_0xfd589a92 = null;}return;}
  _0x250b2b0d.innerHTML = _0x8e583cbe.map((_0x41c8c759) => {
    const thumb = (_0x41c8c759.thumb || (_0x41c8c759.ytId ? ytThumb(_0x41c8c759.ytId) : ''));
    const _0x1cc2f797 = _0x41c8c759.ytId ? ytThumbFallback(_0x41c8c759.ytId) : '';
    return `<div class="existing-item" id="item-${_0x41c8c759.id}" data-id="${_0x41c8c759.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${_0x1cc2f797}';this.onerror=null;">` : ''}
<span class="existing-item-title">${esc(_0x41c8c759.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${_0x41c8c759.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${_0x41c8c759.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${_0x41c8c759.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${_0x41c8c759.id}" value="${esc((_0x41c8c759.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${_0x41c8c759.id}" value="${esc(_0x41c8c759.title)}">
<label>Artist</label><input type="text" id="e-artist-${_0x41c8c759.id}" value="${esc((_0x41c8c759.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="tag-presets" id="edit-tag-presets-${_0x41c8c759.id}">
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x41c8c759.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x41c8c759.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x41c8c759.id}','Complex',this)">Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x41c8c759.id}','Debut',this)">Debut</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x41c8c759.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${_0x41c8c759.id}" value="${esc((_0x41c8c759.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${_0x41c8c759.id}','edit-tag-presets-${_0x41c8c759.id}')" onfocus="syncPresetHighlight('e-tags-${_0x41c8c759.id}','edit-tag-presets-${_0x41c8c759.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${_0x41c8c759.id}" value="${esc((_0x41c8c759.thumb || ''))}">
<div class="checkbox-row" style="margin:6px 0"><input type="checkbox" id="e-feat-${_0x41c8c759.id}" ${_0x41c8c759.featured ? 'checked' : ''}><label for="e-feat-${_0x41c8c759.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${_0x41c8c759.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${_0x41c8c759.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0xfd589a92) {_0xfd589a92.destroy();_0xfd589a92 = null;}
  _0xfd589a92 = Sortable.create(_0x250b2b0d, { handle: '.drag-handle', animation: 180, ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen', onEnd: async (evt) => {if ((evt.oldIndex === evt.newIndex)) return;const _0xdced2409 = _0x8e583cbe.splice(evt.oldIndex, 1);_0x8e583cbe.splice(evt.newIndex, 0, _0xdced2409);let _0x4b520f65 = el('sort-saving');if (!_0x4b520f65) {_0x4b520f65 = document.createElement('div');_0x4b520f65.id = 'sort-saving';_0x4b520f65.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';_0x250b2b0d.insertAdjacentElement('afterend', _0x4b520f65);}_0x4b520f65.textContent = '⟳ Saving order...';await Promise.all(_0x8e583cbe.map((_0x41c8c759, _0x4072741f) => _0x0d0b8e83.from('mv_works').update({ sort_order: _0x4072741f }).eq('id', _0x41c8c759.id)));_0x4b520f65.remove();toast('Order saved! ✓', 'success');renderGrid(true);} });
}

function toggleEdit(id) {const _0x96c5cc02 = el(('edit-' + id));document.querySelectorAll('.inline-edit.open').forEach((_0x6aabff61) => {if ((_0x6aabff61.id !== ('edit-' + id))) _0x6aabff61.classList.remove('open');});_0x96c5cc02.classList.toggle('open');if (_0x96c5cc02.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);}

async function saveEdit(id) {
  const _0xbc400dd6 = el(`e-url-${id}`).value.trim(),title = el(`e-title-${id}`).value.trim(),artist = el(`e-artist-${id}`).value.trim();
  const _0x2233d65e = el(`e-tags-${id}`).value.trim(),thumb = el(`e-thumb-${id}`).value.trim(),_0x3b31154a = el(`e-feat-${id}`).checked;
  if (!title) {toast('Title cannot be empty!', 'error');return;}
  renewAdminSession();
  const ytId = ((ytExtract(_0xbc400dd6) || _0xbc400dd6) || null);
  const tags = _0x2233d65e ? _0x2233d65e.split(',').map((_0xcea7e3e1) => _0xcea7e3e1.trim()).filter(Boolean) : [];
  const _0x16a8eaa9 = el(`edit-${id}`).querySelector('.inline-save-btn');_0x16a8eaa9.textContent = 'Saving...';_0x16a8eaa9.disabled = true;
  const { error } = await _0x0d0b8e83.from('mv_works').update({ ytId, title, artist, tags, thumb: (thumb || null), featured: _0x3b31154a }).eq('id', id);
  _0x16a8eaa9.textContent = '💾 Save Changes';_0x16a8eaa9.disabled = false;
  if (error) {toast(('Error: ' + error.message), 'error');return;}
  toast('Work updated! ✓', 'success');toggleEdit(id);
}

function updateStats() {
  el('stat-mvs').textContent = (_0x8e583cbe.length || '0');
  const _0xf8ca93c3 = new Set(_0x8e583cbe.map((_0x41c8c759) => _0x41c8c759.artist).filter(Boolean));
  el('stat-clients').textContent = (_0xf8ca93c3.size || '0');
  const tags = new Set();_0x8e583cbe.forEach((_0x41c8c759) => (_0x41c8c759.tags || []).forEach((_0xcea7e3e1) => tags.add(_0xcea7e3e1)));
  el('stat-tags').textContent = (tags.size || '0');
  el('stat-year').textContent = (_0x5ab197b3.year || new Date().getFullYear());
}

// ── ADD / DELETE ──
async function addCard() {
  const _0xd597fa2c = el('inp-url').value.trim(),title = el('inp-title').value.trim(),artist = el('inp-artist').value.trim();
  const _0x38d61c2b = el('inp-tags').value.trim(),thumb = el('inp-thumb').value.trim(),_0x3b31154a = el('inp-featured').checked;
  if (!title) {toast('Title is required!', 'error');return;}
  renewAdminSession();
  const ytId = ytExtract(_0xd597fa2c);
  const tags = _0x38d61c2b ? _0x38d61c2b.split(',').map((_0xcea7e3e1) => _0xcea7e3e1.trim()).filter(Boolean) : [];
  const _0x16a8eaa9 = el('add-btn');_0x16a8eaa9.disabled = true;_0x16a8eaa9.textContent = 'Saving...';
  const { error } = await _0x0d0b8e83.from('mv_works').insert([{ ytId, title, artist, tags, thumb: (thumb || null), featured: _0x3b31154a, sort_order: -1 }]);
  _0x16a8eaa9.disabled = false;_0x16a8eaa9.textContent = '+ Add to Portfolio';
  if (error) {toast(('Error: ' + error.message), 'error');return;}
  toast('Work added! ✓', 'success');
  ['inp-url', 'inp-title', 'inp-artist', 'inp-tags', 'inp-thumb'].forEach((id) => el(id).value = '');
  el('inp-featured').checked = false;
  document.querySelectorAll('#add-tag-presets .tag-preset-btn').forEach((b) => b.classList.remove('active'));
  setFetchStatus('', '');
}

async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  renewAdminSession();
  const { error } = await _0x0d0b8e83.from('mv_works').delete().eq('id', id);
  if (error) {toast(('Error: ' + error.message), 'error');return;}
  toast('Work removed', 'success');
}

// ── MODAL ──
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const _0x41c8c759 = _0x8e583cbe.find((x) => (x.id === id));if (!_0x41c8c759) return;
  el('modal-title').textContent = _0x41c8c759.title;el('modal-artist').textContent = (_0x41c8c759.artist || '');
  el('modal-tags').innerHTML = (_0x41c8c759.tags || []).map((_0xcea7e3e1) => `<span class="mv-tag">${esc(_0xcea7e3e1)}</span>`).join('');
  el('modal-video-wrap').innerHTML = _0x41c8c759.ytId ? `<iframe src="https://www.youtube.com/embed/${_0x41c8c759.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  el('modal').classList.add('open');document.body.style.overflow = 'hidden';
}
function closeModal(_0x1d322cac) {if ((_0x1d322cac && (_0x1d322cac.target !== el('modal')))) return;el('modal').classList.remove('open');el('modal-video-wrap').innerHTML = '';document.body.style.overflow = '';}

// ── AUTO FETCH YT ──
function onUrlInput(_0x9ae54f5d) {clearTimeout(_0x0e30eaf7);const ytId = ytExtract(_0x9ae54f5d);if (!ytId) {setFetchStatus('', '');return;}setFetchStatus('loading', '⟳ Fetching info...');_0x0e30eaf7 = setTimeout(() => fetchYtInfo(ytId), 800);}
async function fetchYtInfo(ytId) {try {const _0x0d6a30e8 = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);if (!_0x0d6a30e8.ok) throw new Error();const data = await _0x0d6a30e8.json();if (!el('inp-title').value.trim()) el('inp-title').value = (data.title || '');if (!el('inp-artist').value.trim()) el('inp-artist').value = (data.author_name || '');setFetchStatus('ok', '✓ Info fetched');} catch {setFetchStatus('err', '⚠ Could not fetch info');}}
function setFetchStatus(type, msg) {const _0x5388f025 = el('fetch-status');_0x5388f025.textContent = msg;_0x5388f025.className = ('fetch-status' + (type ? (' ' + type) : ''));}

// ── DRAG MODE ──
let _0xb001aff9 = null;

function toggleEditMode() {
  const _0x00963f7b = document.body.classList.toggle('edit-mode');
  const _0xaaee26d3 = el('edit-mode-bar');
  const _0x16a8eaa9 = el('edit-mode-toggle-btn');
  if (_0x00963f7b) {
    _0xaaee26d3.classList.add('active');
    _0x16a8eaa9.textContent = '✦ Exit Drag Mode';
    _0x16a8eaa9.style.background = 'rgba(255,60,172,.1)';
    _0x16a8eaa9.style.borderColor = 'rgba(255,60,172,.4)';
    _0x16a8eaa9.style.color = 'var(--accent2)';
    el('admin-panel').classList.remove('open');
    initGridSortable();
  } else {
    exitEditMode();
  }
}

function exitEditMode() {
  document.body.classList.remove('edit-mode');
  el('edit-mode-bar').classList.remove('active');
  const _0x16a8eaa9 = el('edit-mode-toggle-btn');
  if (_0x16a8eaa9) {
    _0x16a8eaa9.textContent = '✦ Drag Reorder on Page';
    _0x16a8eaa9.style.background = 'rgba(200,255,0,.1)';
    _0x16a8eaa9.style.borderColor = 'rgba(200,255,0,.3)';
    _0x16a8eaa9.style.color = 'var(--accent)';
  }
  if (_0xb001aff9) {_0xb001aff9.destroy();_0xb001aff9 = null;}
}

function initGridSortable() {
  const _0xb0508eea = el('mv-grid');
  if (!_0xb0508eea) return;
  if (_0xb001aff9) _0xb001aff9.destroy();
  _0xb001aff9 = Sortable.create(_0xb0508eea, {
    animation: 200,
    draggable: ".mv-card",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: (evt) => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const _0xdced2409 = _0x8e583cbe.splice(evt.oldIndex, 1);
      _0x8e583cbe.splice(evt.newIndex, 0, _0xdced2409);
      toast('Drag to rearrange • Click Save Order when done', '');
    }
  });
}

async function saveGridOrder() {
  toast('Saving order...', '');
  await Promise.all(_0x8e583cbe.map((_0x41c8c759, _0x4072741f) => _0x0d0b8e83.from('mv_works').update({ sort_order: _0x4072741f }).eq('id', _0x41c8c759.id)));
  toast('Order saved! ✓', 'success');
  exitEditMode();
  renderGrid(true);
}

// ── HOVER PREVIEW (non-featured only) ──
let _0x7896bd90 = null;
let _0xbedc1f8d = null;
const _0x4801931c = new Map();

function startPreview(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;

  if (!_0x4801931c.has(ytId)) {
    const _0x32900d88 = document.createElement('iframe');
    _0x32900d88.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0x32900d88.allow = 'autoplay';
    _0x32900d88.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0x32900d88);
    _0x4801931c.set(ytId, _0x32900d88);
  }

  _0x7896bd90 = setTimeout(() => {
    stopPreview(_0xbedc1f8d);
    _0xbedc1f8d = card;
    card.classList.add('previewing');

    const _0x7269be11 = _0x4801931c.get(ytId);
    if (_0x7269be11) {
      _0x7269be11.removeAttribute('style');
      _0x7269be11.className = 'mv-preview-iframe';
      _0x7269be11.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x7269be11, card.firstChild);
      _0x7269be11.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}

function stopPreview(card) {
  clearTimeout(_0x7896bd90);
  if (!card) return;
  if (card.classList.contains('featured-autoplay')) return;

  card.classList.remove('previewing', 'preview-ready');
  const _0x1a2cae8c = card.querySelector('.mv-preview-iframe');
  if (_0x1a2cae8c) {
    const ytId = card.dataset.ytid;
    _0x1a2cae8c.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    _0x1a2cae8c.className = '';
    if (ytId) _0x1a2cae8c.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    document.body.appendChild(_0x1a2cae8c);
  }
  if ((_0xbedc1f8d === card)) _0xbedc1f8d = null;
}

// ── COLORS ──
const _0xa812bdd1 = {
  lime: { text: '#f0f0f0', accent: '#c8ff00', accent2: '#ff3cac', bg: '#080810', surface: '#10101c' },
  cyan: { text: '#f0f0f0', accent: '#00ffee', accent2: '#ff3cac', bg: '#060c12', surface: '#0c1a22' },
  pink: { text: '#f0f0f0', accent: '#ff2d78', accent2: '#ffe600', bg: '#100810', surface: '#1c101c' },
  orange: { text: '#f0f0f0', accent: '#ff7b00', accent2: '#00d4ff', bg: '#100a06', surface: '#1c1208' },
  purple: { text: '#f0f0f0', accent: '#9d4edd', accent2: '#ff6b6b', bg: '#08060e', surface: '#120e1e' },
  white: { text: '#f0f0f0', accent: '#ffffff', accent2: '#ff3cac', bg: '#080810', surface: '#10101c' }
};

function applyColorPreset(name) {
  const _0x6aabff61 = _0xa812bdd1[name];if (!_0x6aabff61) return;
  Object.entries(_0x6aabff61).forEach(([k, _0x4abe8366]) => {
    document.documentElement.style.setProperty(('--' + k), _0x4abe8366);
    const _0xc9671e17 = el(('color-' + k));if (_0xc9671e17) _0xc9671e17.value = _0x4abe8366;
    const _0x7bc297b0 = el((('color-' + k) + '-hex'));if (_0x7bc297b0) _0x7bc297b0.value = _0x4abe8366;
  });
  toast('Preview applied — click Save Colors to keep it', '');
}

function previewColor(varName, _0x9ae54f5d) {
  document.documentElement.style.setProperty(('--' + varName), _0x9ae54f5d);
  const _0x7bc297b0 = el((('color-' + varName) + '-hex'));
  if (_0x7bc297b0) _0x7bc297b0.value = _0x9ae54f5d;
}

function previewColorHex(varName, input) {
  const _0x9ae54f5d = input.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(_0x9ae54f5d)) {
    document.documentElement.style.setProperty(('--' + varName), _0x9ae54f5d);
    const _0xb29ca200 = el(('color-' + varName));
    if (_0xb29ca200) _0xb29ca200.value = _0x9ae54f5d;
  }
}

async function saveColors() {
  renewAdminSession();
  const colors = {
    text: (el('color-text')?.value || '#f0f0f0'),
    accent: el('color-accent').value,
    accent2: el('color-accent2').value,
    bg: el('color-bg').value,
    surface: el('color-surface').value
  };
  _0x5ab197b3.colors = colors;
  const _0x16a8eaa9 = el('color-save-btn');
  _0x16a8eaa9.textContent = 'Saving...';_0x16a8eaa9.disabled = true;
  try {
    const { error } = await _0x0d0b8e83.from('mv_site').upsert({ id: 1, data: _0x5ab197b3 });
    if (error) throw error;
    toast('Colors saved! ✓', 'success');
  } catch (err) {
    toast(('Error: ' + err.message), 'error');
  } finally {
    _0x16a8eaa9.textContent = '💾 Save Colors';_0x16a8eaa9.disabled = false;
  }
}

function applyColors(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, _0x4abe8366]) => {
    document.documentElement.style.setProperty(('--' + k), _0x4abe8366);
    const _0xc9671e17 = el(('color-' + k));if (_0xc9671e17) _0xc9671e17.value = _0x4abe8366;
    const _0x7bc297b0 = el((('color-' + k) + '-hex'));if (_0x7bc297b0) _0x7bc297b0.value = _0x4abe8366;
  });
}

function resetColors() {
  const _0xf06fdc72 = { text: '#f0f0f0', accent: '#c8ff00', accent2: '#ff3cac', bg: '#080810', surface: '#10101c' };
  applyColors(_0xf06fdc72);
  _0x5ab197b3.colors = _0xf06fdc72;
  toast('Reset to default — click Save Colors to keep it', '');
}

function fillDesignForm() {
  if (_0x5ab197b3.colors) applyColors(_0x5ab197b3.colors);
  if (_0x5ab197b3.logoData) {
    const _0x3f91d6fa = el('logo-preview');
    const _0x57012b3b = el('logo-preview-img');
    if ((_0x3f91d6fa && _0x57012b3b)) {_0x57012b3b.src = _0x5ab197b3.logoData;_0x3f91d6fa.style.display = 'block';}
  }
}

// ── LOGO & FAVICON ──
let _0x54810d36 = null;
let _0x7cab322f = null;

function getMimeType(_0x4b1468a3) {
  if ((_0x4b1468a3.type && (_0x4b1468a3.type !== ''))) return _0x4b1468a3.type;
  const ext = _0x4b1468a3.name.split('.').pop().toLowerCase();
  const map = { gif: 'image/gif', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', svg: 'image/svg+xml', ico: 'image/x-icon' };
  return (map[ext] || 'image/png');
}

function getFileExt(_0x4b1468a3) {return (_0x4b1468a3.name.split('.').pop().toLowerCase() || 'png');}

async function uploadFileToSupabase(_0x4b1468a3, folderName) {
  if (!_0x4b1468a3) return null;
  const _0xed89758b = getMimeType(_0x4b1468a3);
  const ext = getFileExt(_0x4b1468a3);
  const _0xf75220cc = `${folderName}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const { data, error } = await _0x0d0b8e83.storage.from('portfolio-assets').upload(_0xf75220cc, _0x4b1468a3, { upsert: true, contentType: _0xed89758b });
  if (error) {console.error('Upload Error:', error);throw error;}
  const { data: publicUrlData } = _0x0d0b8e83.storage.from('portfolio-assets').getPublicUrl(_0xf75220cc);
  return publicUrlData.publicUrl;
}

function handleLogoUpload(input) {
  const _0x4b1468a3 = input.files[0];if (!_0x4b1468a3) return;
  _0x54810d36 = _0x4b1468a3;
  const _0x745cd390 = URL.createObjectURL(_0x4b1468a3);
  const _0x3f91d6fa = el('logo-preview'),_0x57012b3b = el('logo-preview-img');
  if ((_0x3f91d6fa && _0x57012b3b)) {_0x57012b3b.src = _0x745cd390;_0x3f91d6fa.style.display = 'block';}
  toast('Logo selected — click Save Logo & Favicon', '');
}

function handleFaviconUpload(input) {
  const _0x4b1468a3 = input.files[0];if (!_0x4b1468a3) return;
  _0x7cab322f = _0x4b1468a3;
  toast('Favicon selected — click Save Logo & Favicon', '');
}

async function saveLogoFavicon() {
  renewAdminSession();
  if ((!_0x54810d36 && !_0x7cab322f)) {toast('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');return;}
  const _0x16a8eaa9 = el('logo-save-btn');
  _0x16a8eaa9.textContent = 'Uploading & Saving...';_0x16a8eaa9.disabled = true;
  try {
    if (_0x54810d36) {const _0xa38d2939 = await uploadFileToSupabase(_0x54810d36, 'logos');if (_0xa38d2939) _0x5ab197b3.logoData = _0xa38d2939;}
    if (_0x7cab322f) {const _0xfcde6656 = await uploadFileToSupabase(_0x7cab322f, 'favicons');if (_0xfcde6656) _0x5ab197b3.faviconData = _0xfcde6656;}
    const { error } = await _0x0d0b8e83.from('mv_site').upsert({ id: 1, data: _0x5ab197b3 });
    if (error) throw error;
    applyLogoFavicon();
    el('logo-upload').value = '';el('favicon-upload').value = '';
    _0x54810d36 = null;_0x7cab322f = null;
    toast('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);toast(('Error: ' + err.message), 'error');
  } finally {
    _0x16a8eaa9.textContent = '💾 Save Logo & Favicon';_0x16a8eaa9.disabled = false;
  }
}

function applyLogoFavicon() {
  const _0x22aea8fb = document.getElementById('loading-logo-img');
  const _0xa212ecf8 = document.getElementById('loading-logo-text');
  if (_0x5ab197b3.logoData) {
    if (_0xa212ecf8) _0xa212ecf8.style.display = 'none';
    if (_0x22aea8fb) {_0x22aea8fb.style.display = 'block';_0x22aea8fb.src = _0x5ab197b3.logoData;}
    try {localStorage.setItem('mv_logo_url', _0x5ab197b3.logoData);} catch (_0x1d322cac) {}
  } else {
    if (_0x22aea8fb) _0x22aea8fb.style.display = 'none';
    if (_0xa212ecf8) _0xa212ecf8.style.display = 'block';
    try {localStorage.removeItem('mv_logo_url');} catch (_0x1d322cac) {}
  }
  if (_0x5ab197b3.faviconData) {
    let _0x714441e3 = document.querySelector('link[rel="icon"]');
    if (!_0x714441e3) {_0x714441e3 = document.createElement('link');_0x714441e3.rel = 'icon';document.head.appendChild(_0x714441e3);}
    _0x714441e3.href = _0x5ab197b3.faviconData;
  }
}

async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  renewAdminSession();
  _0x5ab197b3.logoData = null;
  const { error } = await _0x0d0b8e83.from('mv_site').upsert({ id: 1, data: _0x5ab197b3 });
  if (error) {toast(('Error: ' + error.message), 'error');return;}
  applyLogoFavicon();
  const _0x3f91d6fa = el('logo-preview'),_0x57012b3b = el('logo-preview-img');
  if (_0x3f91d6fa) _0x3f91d6fa.style.display = 'none';
  if (_0x57012b3b) _0x57012b3b.src = '';
  toast('Logo dihapus! ✓', 'success');
}

// ── SITE INFO ──
function applySiteInfo() {
  const _0x5388f025 = _0x5ab197b3;if ((!_0x5388f025 || !Object.keys(_0x5388f025).length)) return;
  if (_0x5388f025.colors) applyColors(_0x5388f025.colors);
  applyLogoFavicon();
  const _0x6249ef62 = ((_0x5388f025.siteTitle || _0x5388f025.brand) || 'MV Portfolio');document.title = _0x6249ef62;if (el('page-title')) el('page-title').textContent = _0x6249ef62;
  if ((_0x5388f025.brand && (typeof _0x5388f025.brand === 'string'))) {el('nav-brand').innerHTML = _0x5388f025.brand.replace('.', '<span>.</span>');el('footer-brand').innerHTML = _0x5388f025.brand.replace('.', '<span>.</span>');}
  setText('hero-label', _0x5388f025.label);setText('hero-sub', _0x5388f025.hsub);setText('about-p1', _0x5388f025.about1);setText('about-p2', _0x5388f025.about2);setText('footer-copy', _0x5388f025.copy);
  if ((_0x5388f025.htitle && (typeof _0x5388f025.htitle === 'string'))) {const _0xb734f348 = _0x5388f025.htitle.split('|');el('hero-title').innerHTML = _0xb734f348.map((l, _0x4072741f) => (_0x4072741f === 0) ? l : (_0x4072741f === 1) ? `<span class="accent">${l}</span>` : `<span class="stroke">${l}</span>`).join('<br>');}
  const _0x56d6b907 = [
  { key: 'yt', label: 'YouTube', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>', primary: true },
  { key: 'tw', label: 'Twitter/X', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', primary: false },
  { key: 'discord', label: 'Discord', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.024.015.046.033.06a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>', primary: false },
  { key: 'vgen', label: 'VGen', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>', primary: false },
  { key: 'ig', label: 'Instagram', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>', primary: false },
  { key: 'tiktok', label: 'TikTok', icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>', primary: false }];

  const _0xa1205c81 = el('about-social-btns'),_0x65bb2924 = el('footer-social-links');
  if (_0xa1205c81) _0xa1205c81.innerHTML = _0x56d6b907.filter((s2) => _0x5388f025[s2.key]).map((s2) => `<a href="${_0x5388f025[s2.key]}" target="_blank" class="btn ${s2.primary ? 'btn-primary' : 'btn-ghost'}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x65bb2924) _0x65bb2924.innerHTML = _0x56d6b907.filter((s2) => _0x5388f025[s2.key]).map((s2) => `<a href="${_0x5388f025[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}

function fillSiteForm() {
  const _0x5388f025 = _0x5ab197b3;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach((k) => {if (el(('s-' + k))) el(('s-' + k)).value = (_0x5388f025[k] || '');});
  if (el('s-perpage')) el('s-perpage').value = (_0x5388f025.perPage || 12);
  const _0x040bac11 = (_0x5388f025.displayMode || 'all'),_0x3cdedff0 = el(('dm-' + _0x040bac11));if (_0x3cdedff0) _0x3cdedff0.checked = true;
}

function previewMode(_0x040bac11) {_0x5ab197b3.displayMode = _0x040bac11;renderGrid(true);}

async function saveSiteEdit() {
  const _0x040bac11 = document.querySelector('input[name="display-mode"]:checked');
  _0x5ab197b3 = {
    brand: el('s-brand').value, siteTitle: el('s-siteTitle').value, label: el('s-label').value,
    htitle: el('s-htitle').value, hsub: el('s-hsub').value, about1: el('s-about1').value,
    about2: el('s-about2').value, yt: el('s-yt').value, tw: el('s-tw').value,
    discord: el('s-discord').value, vgen: el('s-vgen').value, ig: el('s-ig').value,
    tiktok: el('s-tiktok').value, copy: el('s-copy').value, year: el('s-year').value,
    displayMode: _0x040bac11 ? _0x040bac11.value : 'all', perPage: (parseInt(el('s-perpage')?.value) || 12),
    colors: _0x5ab197b3.colors, logoData: _0x5ab197b3.logoData, faviconData: _0x5ab197b3.faviconData
  };
  const _0x16a8eaa9 = el('site-save-btn');_0x16a8eaa9.textContent = 'Saving...';_0x16a8eaa9.disabled = true;
  renewAdminSession();
  try {
    const { error } = await _0x0d0b8e83.from('mv_site').upsert({ id: 1, data: _0x5ab197b3 });
    if (error) throw error;
    applySiteInfo();updateStats();renderGrid(true);toast('Site info saved! ✓', 'success');
  } catch (err) {
    toast(('Error: ' + err.message), 'error');
  } finally {
    _0x16a8eaa9.textContent = 'Simpan Info Site →';_0x16a8eaa9.disabled = false;
  }
}

function closeSiteEdit() {const _0x13d8e495 = el('site-edit-panel');if (_0x13d8e495) _0x13d8e495.classList.remove('open');}

// ── INIT ──
async function init() {
  const _0x2b8d7e09 = el('logo-upload'),_0x04a22a79 = el('favicon-upload');
  if (_0x2b8d7e09) _0x2b8d7e09.value = '';
  if (_0x04a22a79) _0x04a22a79.value = '';
  document.body.classList.add('loading');
  setLoadProgress(15, 'Connecting...');
  _0x0d0b8e83 = window.supabase.createClient(_0x28c84fd0, _0x44a7397e);
  setLoadProgress(35, 'Loading site info...');
  await loadSiteInfo();
  setLoadProgress(60, 'Loading works...');
  await loadCards();

  // ── PRELOAD FEATURED IFRAMES ──
  // Tunggu sampai iframe featured benar-benar onload (atau max 5 detik)
  // Loading screen masih tampil selama proses ini berlangsung
  setLoadProgress(75, 'Preloading previews...');
  await preloadFeaturedIframes();

  setLoadProgress(90, 'Almost there...');

  _0x0d0b8e83.channel('mv_realtime').
  on('postgres_changes', { event: '*', schema: 'public', table: 'mv_works' }, loadCards).
  on('postgres_changes', { event: '*', schema: 'public', table: 'mv_site' }, loadSiteInfo).
  subscribe();

  setTimeout(() => {
    setLoadProgress(100, 'Ready!');
    setTimeout(() => {
      hideLoading();
      updateAutoplayBtn();
      if (isAdminActive()) el('admin-panel').classList.add('open');
    }, 300);
  }, 200);
}

init();
