const _0x9caf2e05 = s => atob(s);
const _0x80424030 = _0x9caf2e05('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0xb5e96152 = _0x9caf2e05('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x538d26cc = _0x9caf2e05('YWRt');
const _0xf2c92229 = _0x9caf2e05('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x2c78a51a = 60 * 60 * 1000;
let _0x5e400301,
_0xc2dd0161 = [],
_0xcafbdeac = {},
_0xef9e97cf = 'all',
_0xbabcad3f = null,
_0x3694ecc7 = 1,
_0xb15fa87a = 0;
let _0xb95f7c7d = (() => {
try {
const _0xad56e14a = localStorage.getItem('mv_autoplay');
return _0xad56e14a === null ? true : _0xad56e14a === '1';
} catch {
return true;
}
})();
function toggleAutoplay() {
_0xb95f7c7d = !_0xb95f7c7d;
try {
localStorage.setItem('mv_autoplay', _0xb95f7c7d ? '1' : '0');
} catch {}
updateAutoplayBtn();
if (_0xb95f7c7d) {
injectPreloadedFeatured();
autoPlayFeatured();
} else {
stopAllFeatured();
}
}
function updateAutoplayBtn() {
const _0xbaef075d = el('autoplay-toggle'),
_0xa63cd563 = el('autoplay-label');
if (!_0xbaef075d) return;
if (_0xb95f7c7d) {
_0xbaef075d.classList.add('active');
if (_0xa63cd563) _0xa63cd563.textContent = 'Autoplay';
_0xbaef075d.title = 'Autoplay ON — click to turn off';
} else {
_0xbaef075d.classList.remove('active');
if (_0xa63cd563) _0xa63cd563.textContent = 'Autoplay';
_0xbaef075d.title = 'Autoplay OFF — click to turn on';
}
}
function stopAllFeatured() {
document.querySelectorAll('.mv-card.featured-autoplay').forEach(card => {
const _0xc083f1b8 = card.querySelector('.mv-preview-iframe');
if (_0xc083f1b8) _0xc083f1b8.remove();
card.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
});
featuredPreloadMap.forEach(_0xc083f1b8 => _0xc083f1b8.remove());
featuredPreloadMap.clear();
}
const _0x870411c3 = new Map();
function preloadFeaturedIframes() {
const _0x71208c6d = 5000;
if (!_0xb95f7c7d) return Promise.resolve();
const _0xa16a56ae = _0xc2dd0161.filter(c => c.featured && c.ytId);
if (!_0xa16a56ae.length) return Promise.resolve();
const _0xfad9b455 = _0xa16a56ae.map(c => {
if (_0x870411c3.has(c.ytId)) return Promise.resolve();
return new Promise(resolve => {
const _0xc083f1b8 = document.createElement('iframe');
_0xc083f1b8.allow = 'autoplay';
_0xc083f1b8.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
_0xc083f1b8.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
const _0x47714839 = () => {
_0xc083f1b8._mvReady = true;
resolve();
};
_0xc083f1b8.onload = _0x47714839;
const _0x902ba05b = setTimeout(_0x47714839, _0x71208c6d);
_0xc083f1b8.onload = () => {
clearTimeout(_0x902ba05b);
_0xc083f1b8._mvReady = true;
resolve();
};
document.body.appendChild(_0xc083f1b8);
_0x870411c3.set(c.ytId, _0xc083f1b8);
});
});
return Promise.race([Promise.all(_0xfad9b455), new Promise(r => setTimeout(r, _0x71208c6d))]);
}
function isAdminActive() {
try {
const _0xb5afc8c5 = JSON.parse(sessionStorage.getItem(_0xf2c92229) || 'null');
if (!_0xb5afc8c5) return false;
if (Date.now() - _0xb5afc8c5.ts > _0x2c78a51a) {
sessionStorage.removeItem(_0xf2c92229);
return false;
}
return true;
} catch {
return false;
}
}
function setAdminSession(a) {
if (a) sessionStorage.setItem(_0xf2c92229, JSON.stringify({
ts: Date.now()
}));else sessionStorage.removeItem(_0xf2c92229);
}
function renewAdminSession() {
if (isAdminActive()) setAdminSession(true);
}
setInterval(() => {
if (!isAdminActive() && el('admin-panel')?.classList.contains('open')) {
el('admin-panel').classList.remove('open');
toast('Admin session expired. Type "adm" to log in again.', 'error');
}
}, 60 * 1000);
function closeAdminPanel() {
document.getElementById('admin-panel').classList.remove('open');
_0x5e400301.auth.signOut();
setAdminSession(false);
}
let _0x484996db = '';
document.addEventListener('keydown', e => {
if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
if (e.key === 'Escape') {
closeModal();
closeSiteEdit();
closeAdminPanel();
el('pw-modal').style.display = 'none';
return;
}
_0x484996db += e.key.toLowerCase();
if (_0x484996db.length > _0x538d26cc.length) _0x484996db = _0x484996db.slice(-_0x538d26cc.length);
if (_0x484996db === _0x538d26cc) {
_0x484996db = '';
requestAdmin();
}
});
function switchTab(name, _0xbaef075d) {
document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
_0xbaef075d.classList.add('active');
el('tab-' + name).classList.add('active');
if (name === 'list') renderExistingList();
if (name === 'site') fillSiteForm();
if (name === 'design') fillDesignForm();
}
function requestAdmin() {
if (isAdminActive()) {
renewAdminSession();
el('admin-panel').classList.toggle('open');
return;
}
el('pw-error').style.display = 'none';
el('pw-email').value = '';
el('pw-input').value = '';
el('pw-btn').disabled = false;
try {
const _0xc38d0a7c = JSON.parse(sessionStorage.getItem(_0x9caf2e05('bG9ja291dA==')) || 'null');
if (_0xc38d0a7c && Date.now() < _0xc38d0a7c.until) {
const _0x3a646363 = Math.ceil((_0xc38d0a7c.until - Date.now()) / 60000);
el('pw-error').style.display = 'block';
el('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0x3a646363} min.`;
el('pw-btn').disabled = true;
}
} catch (e) {}
el('pw-modal').style.display = 'flex';
setTimeout(() => el('pw-email').focus(), 100);
}
async function checkPw() {
const _0xc715307d = 5,
_0x0b7331ec = 15 * 60 * 1000,
_0xf10b507a = Date.now();
const _0xb456389c = _0x9caf2e05('bG9ja291dA=='),
_0xb0d347eb = _0x9caf2e05('YXR0ZW1wdHM=');
try {
const _0xc38d0a7c = JSON.parse(sessionStorage.getItem(_0xb456389c) || 'null');
if (_0xc38d0a7c && _0xf10b507a < _0xc38d0a7c.until) {
const _0x3a646363 = Math.ceil((_0xc38d0a7c.until - _0xf10b507a) / 60000);
el('pw-error').style.display = 'block';
el('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0x3a646363} min.`;
el('pw-btn').disabled = true;
return;
}
} catch (e) {}
const _0x0de27a12 = el('pw-email').value.trim(),
_0xace03e23 = el('pw-input').value;
if (!_0x0de27a12 || !_0xace03e23) {
el('pw-error').style.display = 'block';
el('pw-error').textContent = '❌ Please enter email and password.';
return;
}
const _0xbaef075d = el('pw-btn');
_0xbaef075d.textContent = 'Signing in...';
_0xbaef075d.disabled = true;
try {
const {
data,
error
} = await _0x5e400301.auth.signInWithPassword({
_0x0de27a12,
password: _0xace03e23
});
if (error || !data.user) throw new Error('fail');
sessionStorage.removeItem(_0xb0d347eb);
sessionStorage.removeItem(_0xb456389c);
setAdminSession(true);
el('pw-modal').style.display = 'none';
el('admin-panel').classList.add('open');
toast('Welcome back! ✓', 'success');
} catch (e) {
let _0x40176fc2 = 0;
try {
_0x40176fc2 = parseInt(sessionStorage.getItem(_0xb0d347eb) || '0');
} catch (e) {}
_0x40176fc2++;
sessionStorage.setItem(_0xb0d347eb, _0x40176fc2);
const _0x9a760eed = _0xc715307d - _0x40176fc2;
if (_0x40176fc2 >= _0xc715307d) {
sessionStorage.setItem(_0xb456389c, JSON.stringify({
until: _0xf10b507a + _0x0b7331ec
}));
sessionStorage.removeItem(_0xb0d347eb);
el('pw-error').style.display = 'block';
el('pw-error').textContent = '🔒 Too many attempts. Locked for 15 minutes.';
_0xbaef075d.disabled = true;
} else {
el('pw-error').style.display = 'block';
el('pw-error').textContent = `❌ Wrong credentials. ${_0x9a760eed} attempt${_0x9a760eed > 1 ? 's' : ''} left.`;
_0xbaef075d.disabled = false;
}
el('pw-input').value = '';
el('pw-input').focus();
}
_0xbaef075d.textContent = 'Sign In →';
}
function setLoadProgress(pct, text) {
const _0x117bd196 = el('loading-bar'),
_0xbe3daa6a = el('loading-text');
if (_0x117bd196) _0x117bd196.style.width = pct + '%';
if (_0xbe3daa6a && text) _0xbe3daa6a.textContent = text;
}
function hideLoading() {
const _0xb5afc8c5 = el('loading-screen');
if (!_0xb5afc8c5) return;
_0xb5afc8c5.classList.add('hidden');
document.body.classList.remove('loading');
}
async function loadCards() {
const {
data,
error
} = await _0x5e400301.from('mv_works').select('*').order('sort_order').order('created_at');
if (error) {
console.error(error);
return;
}
_0xc2dd0161 = data || [];
renderGrid(true);
renderFilters();
updateStats();
buildShowcase();
if (el('tab-list')?.classList.contains('active')) renderExistingList();
}
async function loadSiteInfo() {
const {
data
} = await _0x5e400301.from('mv_site').select('data').eq('id', 1).single();
if (data?.data) {
_0xcafbdeac = data.data;
if (_0xcafbdeac.logoData) {
await new Promise(resolve => {
const _0xb6762832 = new Image();
_0xb6762832.onload = resolve;
_0xb6762832.onerror = resolve;
_0xb6762832.src = _0xcafbdeac.logoData;
});
}
applySiteInfo();
updateStats();
}
}
function el(id) {
return document.getElementById(id);
}
function setText(id, _0xad56e14a) {
if (_0xad56e14a && el(id)) el(id).textContent = _0xad56e14a;
}
function esc(_0xb5afc8c5) {
return String(_0xb5afc8c5 || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function ytExtract(_0xb5afc8c5) {
if (!_0xb5afc8c5 || typeof _0xb5afc8c5 !== 'string') return null;
const _0xc02fe390 = _0xb5afc8c5.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || _0xb5afc8c5.match(/^([a-zA-Z0-9_-]{11})$/);
return _0xc02fe390 ? _0xc02fe390[1] : null;
}
let _0x1a0902d8;
function toast(msg, type = '') {
const _0x902ba05b = el('toast');
_0x902ba05b.textContent = msg;
_0x902ba05b.className = `toast ${type} show`;
clearTimeout(_0x1a0902d8);
_0x1a0902d8 = setTimeout(() => _0x902ba05b.classList.remove('show'), 3200);
}
function getTagsArray(id) {
const _0xbfe46ccb = el(id).value || '';
return _0xbfe46ccb.split(',').map(_0x902ba05b => _0x902ba05b.trim()).filter(Boolean);
}
function setTagsArray(id, arr) {
el(id).value = arr.join(', ');
}
function togglePresetTag(inputId, tag, _0xbaef075d) {
renewAdminSession();
let _0x3c769133 = getTagsArray(inputId);
if (_0x3c769133.includes(tag)) {
_0x3c769133 = _0x3c769133.filter(_0x902ba05b => _0x902ba05b !== tag);
_0xbaef075d.classList.remove('active');
} else {
_0x3c769133.push(tag);
_0xbaef075d.classList.add('active');
}
setTagsArray(inputId, _0x3c769133);
}
function syncPresetHighlight(inputId, presetsId) {
const _0x3c769133 = getTagsArray(inputId),
_0xe6532ccb = el(presetsId);
if (!_0xe6532ccb) return;
_0xe6532ccb.querySelectorAll('.tag-preset-btn').forEach(_0xbaef075d => {
_0xbaef075d.classList.toggle('active', _0x3c769133.includes(_0xbaef075d.textContent.trim()));
});
}
function ytThumb(id) {
return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function ytThumbFallback(id) {
return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function buildShowcase() {
const _0x8061bcb4 = _0xc2dd0161.map(c => c.thumb || (c.ytId ? ytThumbFallback(c.ytId) : null)).filter(Boolean);
if (_0x8061bcb4.length < 2) return;
const _0x8f04b9d2 = (arr, min) => {
let _0x64b19ed7 = [...arr];
while (_0x64b19ed7.length < min) _0x64b19ed7 = [..._0x64b19ed7, ...arr];
return _0x64b19ed7;
};
const _0xf7ff1638 = [{
id: 'hero-row-1',
items: _0x8f04b9d2(_0x8061bcb4, 20),
dir: 'left',
speed: 60
}, {
id: 'hero-row-2',
items: _0x8f04b9d2([..._0x8061bcb4].reverse(), 20),
dir: 'right',
speed: 75
}, {
id: 'hero-row-3',
items: _0x8f04b9d2(_0x8061bcb4.slice(Math.floor(_0x8061bcb4.length / 2)).concat(_0x8061bcb4.slice(0, Math.floor(_0x8061bcb4.length / 2))), 20),
dir: 'left',
speed: 50
}];
_0xf7ff1638.forEach(({
id,
items,
dir,
speed
}) => {
const _0x9123a604 = el(id);
if (!_0x9123a604) return;
const _0xb28649a8 = [...items, ...items];
_0x9123a604.innerHTML = _0xb28649a8.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
requestAnimationFrame(() => {
const _0x01cf0e44 = items.length * (speed / 20);
_0x9123a604.style.animationDuration = `${_0x01cf0e44}s`;
if (dir === 'right') {
_0x9123a604.style.animationName = 'slideRight';
}
});
});
setTimeout(() => {
const _0xe6532ccb = el('hero-track-wrap');
if (_0xe6532ccb) _0xe6532ccb.classList.add('visible');
}, 400);
}
function cardHTML(c) {
const _0x04d3176f = c.thumb || (c.ytId ? ytThumb(c.ytId) : '');
const _0xa239e94e = c.ytId ? ytThumbFallback(c.ytId) : '';
const _0x3c769133 = (c.tags || []).map(_0x902ba05b => `<span class="mv-tag">${esc(_0x902ba05b)}</span>`).join('');
const _0xfe2634b1 = !!c.ytId;
const _0x97562d96 = !!c.featured;
const _0xfe41412e = _0xfe2634b1 && !_0x97562d96 ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
return `<div class="mv-card${_0x97562d96 ? ' featured' : ''}"
data-id="${c.id}"
data-ytid="${c.ytId || ''}"
onclick="openModal('${c.id}')"
${_0xfe41412e}>
${_0x04d3176f ? `<img class="mv-thumb" src="${_0x04d3176f}" alt="${esc(c.title)}" loading="lazy" onerror="this.src='${_0xa239e94e}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${_0x04d3176f ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${_0x3c769133}<div class="mv-title">${esc(c.title)}</div><div class="mv-artist">${esc(c.artist || '')}</div></div></div>
</div>`;
}
function getDisplayMode() {
return _0xcafbdeac.displayMode || 'all';
}
function getPerPage() {
return parseInt(_0xcafbdeac.perPage) || 12;
}
function renderGrid(resetPage) {
if (resetPage) {
_0x3694ecc7 = 1;
_0xb15fa87a = 0;
}
const _0x82fc81d7 = el('mv-grid'),
_0x7b43fa0f = getDisplayMode(),
_0x536c6355 = getPerPage();
const _0xfb5377a6 = _0xef9e97cf === 'all' ? _0xc2dd0161 : _0xc2dd0161.filter(c => (c.tags || []).includes(_0xef9e97cf));
el('works-count').textContent = String(_0xfb5377a6.length).padStart(2, '0');
['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
const _0xa784441f = el(id);
if (_0xa784441f) _0xa784441f.remove();
});
if (!_0xfb5377a6.length) {
_0x82fc81d7.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
return;
}
if (_0x7b43fa0f === 'pagination') {
const _0x85a3d5b2 = Math.ceil(_0xfb5377a6.length / _0x536c6355);
_0x3694ecc7 = Math.min(_0x3694ecc7, _0x85a3d5b2);
const _0x925cd160 = _0xfb5377a6.slice((_0x3694ecc7 - 1) * _0x536c6355, _0x3694ecc7 * _0x536c6355);
_0x82fc81d7.innerHTML = _0x925cd160.map(cardHTML).join('');
if (_0x85a3d5b2 > 1) {
const _0x117bd196 = document.createElement('div');
_0x117bd196.id = 'mv-pagination';
_0x117bd196.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
for (let _0x77f0d2f5 = 1; _0x77f0d2f5 <= _0x85a3d5b2; _0x77f0d2f5++) {
const _0xbaef075d = document.createElement('button');
_0xbaef075d.textContent = _0x77f0d2f5;
_0xbaef075d.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${_0x77f0d2f5 === _0x3694ecc7 ? 'var(--accent)' : 'transparent'};color:${_0x77f0d2f5 === _0x3694ecc7 ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
_0xbaef075d.onclick = () => {
_0x3694ecc7 = _0x77f0d2f5;
renderGrid(false);
window.scrollTo({
top: el('works').offsetTop - 80,
behavior: 'smooth'
});
};
_0x117bd196.appendChild(_0xbaef075d);
}
_0x82fc81d7.appendChild(_0x117bd196);
}
} else if (_0x7b43fa0f === 'loadmore') {
if (resetPage) _0xb15fa87a = _0x536c6355;else _0xb15fa87a = Math.max(_0xb15fa87a, _0x536c6355);
const _0x925cd160 = _0xfb5377a6.slice(0, _0xb15fa87a);
_0x82fc81d7.innerHTML = _0x925cd160.map(cardHTML).join('');
if (_0xb15fa87a < _0xfb5377a6.length) {
const _0x9a760eed = _0xfb5377a6.length - _0xb15fa87a;
const _0xbaef075d = document.createElement('button');
_0xbaef075d.id = 'mv-loadmore-btn';
_0xbaef075d.textContent = `Load More (${_0x9a760eed} more)`;
_0xbaef075d.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
_0xbaef075d.onmouseenter = () => _0xbaef075d.style.background = 'rgba(200,255,0,.08)';
_0xbaef075d.onmouseleave = () => _0xbaef075d.style.background = 'transparent';
_0xbaef075d.onclick = () => {
_0xb15fa87a += _0x536c6355;
renderGrid(false);
};
_0x82fc81d7.appendChild(_0xbaef075d);
}
} else {
_0x82fc81d7.innerHTML = _0xfb5377a6.map(cardHTML).join('');
}
requestAnimationFrame(() => injectPreloadedFeatured());
}
function renderFilters() {
const _0x3c769133 = new Set();
_0xc2dd0161.forEach(c => (c.tags || []).forEach(_0x902ba05b => _0x3c769133.add(_0x902ba05b)));
el('filter-bar').innerHTML = `<button class="filter-btn${_0xef9e97cf === 'all' ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [..._0x3c769133].map(_0x902ba05b => `<button class="filter-btn${_0xef9e97cf === _0x902ba05b ? ' active' : ''}" onclick="filterCards('${esc(_0x902ba05b)}',this)">${esc(_0x902ba05b)}</button>`).join('');
}
function filterCards(tag, _0xbaef075d) {
_0xef9e97cf = tag;
document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
_0xbaef075d.classList.add('active');
renderGrid(true);
}
function injectPreloadedFeatured() {
if (!_0xb95f7c7d) return;
const _0xe7932e67 = document.querySelectorAll('.mv-card.featured');
_0xe7932e67.forEach(card => {
const _0xffbb4cdf = card.dataset.ytid;
if (!_0xffbb4cdf) return;
if (card.classList.contains('previewing')) return;
const _0x16577a1c = _0x870411c3.get(_0xffbb4cdf);
if (_0x16577a1c) {
_0x16577a1c.removeAttribute('style');
_0x16577a1c.className = 'mv-preview-iframe';
card.insertBefore(_0x16577a1c, card.firstChild);
card.classList.add('previewing', 'featured-autoplay');
if (_0x16577a1c.contentWindow) {
if (_0x16577a1c._mvReady) {
card.classList.add('preview-ready');
} else {
_0x16577a1c.onload = () => {
_0x16577a1c._mvReady = true;
card.classList.add('preview-ready');
};
}
}
_0x870411c3.delete(_0xffbb4cdf);
} else {
autoPlayFeaturedCard(card, _0xffbb4cdf);
}
});
}
function autoPlayFeaturedCard(card, _0xffbb4cdf) {
if (!_0xb95f7c7d) return;
if (card.classList.contains('previewing')) return;
card.classList.add('previewing', 'featured-autoplay');
const _0xc083f1b8 = document.createElement('iframe');
_0xc083f1b8.className = 'mv-preview-iframe';
_0xc083f1b8.allow = 'autoplay';
_0xc083f1b8.src = `https://www.youtube.com/embed/${_0xffbb4cdf}?autoplay=1&mute=1&controls=0&loop=1&playlist=${_0xffbb4cdf}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
_0xc083f1b8.onload = () => {
_0xc083f1b8._mvReady = true;
card.classList.add('preview-ready');
};
card.insertBefore(_0xc083f1b8, card.firstChild);
}
function autoPlayFeatured() {
const _0xa16a56ae = document.querySelectorAll('.mv-card.featured');
_0xa16a56ae.forEach(card => {
const _0xffbb4cdf = card.dataset.ytid;
if (!_0xffbb4cdf) return;
if (card.classList.contains('previewing')) return;
autoPlayFeaturedCard(card, _0xffbb4cdf);
});
}
let _0x2a5a8d87 = null;
function renderExistingList() {
const _0x4db906e3 = el('existing-list');
if (!_0xc2dd0161.length) {
_0x4db906e3.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
if (_0x2a5a8d87) {
_0x2a5a8d87.destroy();
_0x2a5a8d87 = null;
}
return;
}
_0x4db906e3.innerHTML = _0xc2dd0161.map(c => {
const _0x04d3176f = c.thumb || (c.ytId ? ytThumb(c.ytId) : '');
const _0xa239e94e = c.ytId ? ytThumbFallback(c.ytId) : '';
return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${_0x04d3176f ? `<img class="existing-item-thumb" src="${_0x04d3176f}" onerror="this.src='${_0xa239e94e}';this.onerror=null;">` : ''}
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
if (_0x2a5a8d87) {
_0x2a5a8d87.destroy();
_0x2a5a8d87 = null;
}
_0x2a5a8d87 = Sortable.create(_0x4db906e3, {
handle: '.drag-handle',
animation: 180,
ghostClass: 'sortable-ghost',
chosenClass: 'sortable-chosen',
onEnd: async evt => {
if (evt.oldIndex === evt.newIndex) return;
const _0xfdc11934 = _0xc2dd0161.splice(evt.oldIndex, 1);
_0xc2dd0161.splice(evt.newIndex, 0, _0xfdc11934);
let _0x25d01f2b = el('sort-saving');
if (!_0x25d01f2b) {
_0x25d01f2b = document.createElement('div');
_0x25d01f2b.id = 'sort-saving';
_0x25d01f2b.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
_0x4db906e3.insertAdjacentElement('afterend', _0x25d01f2b);
}
_0x25d01f2b.textContent = '⟳ Saving order...';
await Promise.all(_0xc2dd0161.map((c, _0x77f0d2f5) => _0x5e400301.from('mv_works').update({
sort_order: _0x77f0d2f5
}).eq('id', c.id)));
_0x25d01f2b.remove();
toast('Order saved! ✓', 'success');
renderGrid(true);
}
});
}
function toggleEdit(id) {
const _0x59bf1703 = el('edit-' + id);
document.querySelectorAll('.inline-edit.open').forEach(p => {
if (p.id !== 'edit-' + id) p.classList.remove('open');
});
_0x59bf1703.classList.toggle('open');
if (_0x59bf1703.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function saveEdit(id) {
const _0xc6e43375 = el(`e-url-${id}`).value.trim(),
_0x255b6f74 = el(`e-title-${id}`).value.trim(),
_0xf486342e = el(`e-artist-${id}`).value.trim();
const _0xdd604a19 = el(`e-tags-${id}`).value.trim(),
_0x04d3176f = el(`e-thumb-${id}`).value.trim(),
_0xa9fc3f00 = el(`e-feat-${id}`).checked;
if (!_0x255b6f74) {
toast('Title cannot be empty!', 'error');
return;
}
renewAdminSession();
const _0xffbb4cdf = ytExtract(_0xc6e43375) || _0xc6e43375 || null;
const _0x3c769133 = _0xdd604a19 ? _0xdd604a19.split(',').map(_0x902ba05b => _0x902ba05b.trim()).filter(Boolean) : [];
const _0xbaef075d = el(`edit-${id}`).querySelector('.inline-save-btn');
_0xbaef075d.textContent = 'Saving...';
_0xbaef075d.disabled = true;
const {
error
} = await _0x5e400301.from('mv_works').update({
_0xffbb4cdf,
_0x255b6f74,
_0xf486342e,
_0x3c769133,
_0x04d3176f: _0x04d3176f || null,
featured: _0xa9fc3f00
}).eq('id', id);
_0xbaef075d.textContent = '💾 Save Changes';
_0xbaef075d.disabled = false;
if (error) {
toast('Error: ' + error.message, 'error');
return;
}
toast('Work updated! ✓', 'success');
toggleEdit(id);
}
function updateStats() {
el('stat-mvs').textContent = _0xc2dd0161.length || '0';
const _0xa939bbbb = new Set(_0xc2dd0161.map(c => c.artist).filter(Boolean));
el('stat-clients').textContent = _0xa939bbbb.size || '0';
const _0x3c769133 = new Set();
_0xc2dd0161.forEach(c => (c.tags || []).forEach(_0x902ba05b => _0x3c769133.add(_0x902ba05b)));
el('stat-tags').textContent = _0x3c769133.size || '0';
el('stat-year').textContent = _0xcafbdeac.year || new Date().getFullYear();
}
async function addCard() {
const _0x26642e4d = el('inp-url').value.trim(),
_0x255b6f74 = el('inp-title').value.trim(),
_0xf486342e = el('inp-artist').value.trim();
const _0x5050ddbe = el('inp-tags').value.trim(),
_0x04d3176f = el('inp-thumb').value.trim(),
_0xa9fc3f00 = el('inp-featured').checked;
if (!_0x255b6f74) {
toast('Title is required!', 'error');
return;
}
renewAdminSession();
const _0xffbb4cdf = ytExtract(_0x26642e4d);
const _0x3c769133 = _0x5050ddbe ? _0x5050ddbe.split(',').map(_0x902ba05b => _0x902ba05b.trim()).filter(Boolean) : [];
const _0xbaef075d = el('add-btn');
_0xbaef075d.disabled = true;
_0xbaef075d.textContent = 'Saving...';
const {
error
} = await _0x5e400301.from('mv_works').insert([{
_0xffbb4cdf,
_0x255b6f74,
_0xf486342e,
_0x3c769133,
_0x04d3176f: _0x04d3176f || null,
featured: _0xa9fc3f00,
sort_order: -1
}]);
_0xbaef075d.disabled = false;
_0xbaef075d.textContent = '+ Add to Portfolio';
if (error) {
toast('Error: ' + error.message, 'error');
return;
}
toast('Work added! ✓', 'success');
['inp-url', 'inp-title', 'inp-artist', 'inp-tags', 'inp-thumb'].forEach(id => el(id).value = '');
el('inp-featured').checked = false;
document.querySelectorAll('#add-tag-presets .tag-preset-btn').forEach(b => b.classList.remove('active'));
setFetchStatus('', '');
}
async function deleteCard(id) {
if (!confirm('Remove this work?')) return;
renewAdminSession();
const {
error
} = await _0x5e400301.from('mv_works').delete().eq('id', id);
if (error) {
toast('Error: ' + error.message, 'error');
return;
}
toast('Work removed', 'success');
}
function openModal(id) {
if (document.body.classList.contains('edit-mode')) return;
const _0xde88c951 = _0xc2dd0161.find(x => x.id === id);
if (!_0xde88c951) return;
el('modal-title').textContent = _0xde88c951.title;
el('modal-artist').textContent = _0xde88c951.artist || '';
el('modal-tags').innerHTML = (_0xde88c951.tags || []).map(_0x902ba05b => `<span class="mv-tag">${esc(_0x902ba05b)}</span>`).join('');
el('modal-video-wrap').innerHTML = _0xde88c951.ytId ? `<iframe src="https://www.youtube.com/embed/${_0xde88c951.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
el('modal').classList.add('open');
document.body.style.overflow = 'hidden';
}
function closeModal(_0xa784441f) {
if (_0xa784441f && _0xa784441f.target !== el('modal')) return;
el('modal').classList.remove('open');
el('modal-video-wrap').innerHTML = '';
document.body.style.overflow = '';
}
function onUrlInput(_0xbfe46ccb) {
clearTimeout(_0xbabcad3f);
const _0xffbb4cdf = ytExtract(_0xbfe46ccb);
if (!_0xffbb4cdf) {
setFetchStatus('', '');
return;
}
setFetchStatus('loading', '⟳ Fetching info...');
_0xbabcad3f = setTimeout(() => fetchYtInfo(_0xffbb4cdf), 800);
}
async function fetchYtInfo(_0xffbb4cdf) {
try {
const _0x7d1c69e7 = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${_0xffbb4cdf}&format=json`);
if (!_0x7d1c69e7.ok) throw new Error();
const _0x0a685f53 = await _0x7d1c69e7.json();
if (!el('inp-title').value.trim()) el('inp-title').value = _0x0a685f53.title || '';
if (!el('inp-artist').value.trim()) el('inp-artist').value = _0x0a685f53.author_name || '';
setFetchStatus('ok', '✓ Info fetched');
} catch {
setFetchStatus('err', '⚠ Could not fetch info');
}
}
function setFetchStatus(type, msg) {
const _0xb5afc8c5 = el('fetch-status');
_0xb5afc8c5.textContent = msg;
_0xb5afc8c5.className = 'fetch-status' + (type ? ' ' + type : '');
}
let _0xa821d1be = null;
function toggleEditMode() {
const _0x7fedafbb = document.body.classList.toggle('edit-mode');
const _0x117bd196 = el('edit-mode-bar');
const _0xbaef075d = el('edit-mode-toggle-btn');
if (_0x7fedafbb) {
_0x117bd196.classList.add('active');
_0xbaef075d.textContent = '✦ Exit Drag Mode';
_0xbaef075d.style.background = 'rgba(255,60,172,.1)';
_0xbaef075d.style.borderColor = 'rgba(255,60,172,.4)';
_0xbaef075d.style.color = 'var(--accent2)';
el('admin-panel').classList.remove('open');
initGridSortable();
} else {
exitEditMode();
}
}
function exitEditMode() {
document.body.classList.remove('edit-mode');
el('edit-mode-bar').classList.remove('active');
const _0xbaef075d = el('edit-mode-toggle-btn');
if (_0xbaef075d) {
_0xbaef075d.textContent = '✦ Drag Reorder on Page';
_0xbaef075d.style.background = 'rgba(200,255,0,.1)';
_0xbaef075d.style.borderColor = 'rgba(200,255,0,.3)';
_0xbaef075d.style.color = 'var(--accent)';
}
if (_0xa821d1be) {
_0xa821d1be.destroy();
_0xa821d1be = null;
}
}
function initGridSortable() {
const _0x82fc81d7 = el('mv-grid');
if (!_0x82fc81d7) return;
if (_0xa821d1be) _0xa821d1be.destroy();
_0xa821d1be = Sortable.create(_0x82fc81d7, {
animation: 200,
draggable: ".mv-card",
ghostClass: 'sortable-ghost',
chosenClass: 'sortable-chosen',
onEnd: evt => {
if (evt.oldIndex === evt.newIndex) return;
const _0xfdc11934 = _0xc2dd0161.splice(evt.oldIndex, 1);
_0xc2dd0161.splice(evt.newIndex, 0, _0xfdc11934);
toast('Drag to rearrange • Click Save Order when done', '');
}
});
}
async function saveGridOrder() {
toast('Saving order...', '');
await Promise.all(_0xc2dd0161.map((_0xde88c951, _0x77f0d2f5) => _0x5e400301.from('mv_works').update({
sort_order: _0x77f0d2f5
}).eq('id', _0xde88c951.id)));
toast('Order saved! ✓', 'success');
exitEditMode();
renderGrid(true);
}
let _0x2575b3e5 = null;
let _0xa67797f9 = null;
const _0xdb19bab0 = new Map();
function startPreview(card, _0xffbb4cdf) {
if (!_0xffbb4cdf || document.body.classList.contains('edit-mode')) return;
if (card.classList.contains('featured')) return;
if (!_0xdb19bab0.has(_0xffbb4cdf)) {
const _0xc5db2f71 = document.createElement('iframe');
_0xc5db2f71.src = `https://www.youtube.com/embed/${_0xffbb4cdf}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
_0xc5db2f71.allow = 'autoplay';
_0xc5db2f71.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
document.body.appendChild(_0xc5db2f71);
_0xdb19bab0.set(_0xffbb4cdf, _0xc5db2f71);
}
_0x2575b3e5 = setTimeout(() => {
stopPreview(_0xa67797f9);
_0xa67797f9 = card;
card.classList.add('previewing');
const _0x5313789b = _0xdb19bab0.get(_0xffbb4cdf);
if (_0x5313789b) {
_0x5313789b.removeAttribute('style');
_0x5313789b.className = 'mv-preview-iframe';
_0x5313789b.src = `https://www.youtube.com/embed/${_0xffbb4cdf}?autoplay=1&mute=1&controls=0&loop=1&playlist=${_0xffbb4cdf}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
card.insertBefore(_0x5313789b, card.firstChild);
_0x5313789b.onload = () => card.classList.add('preview-ready');
}
}, 700);
}
function stopPreview(card) {
clearTimeout(_0x2575b3e5);
if (!card) return;
if (card.classList.contains('featured-autoplay')) return;
card.classList.remove('previewing', 'preview-ready');
const _0xc083f1b8 = card.querySelector('.mv-preview-iframe');
if (_0xc083f1b8) {
const _0xffbb4cdf = card.dataset.ytid;
_0xc083f1b8.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
_0xc083f1b8.className = '';
if (_0xffbb4cdf) _0xc083f1b8.src = `https://www.youtube.com/embed/${_0xffbb4cdf}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
document.body.appendChild(_0xc083f1b8);
}
if (_0xa67797f9 === card) _0xa67797f9 = null;
}
const _0x4bd20bba = {
lime: {
text: '#f0f0f0',
accent: '#c8ff00',
accent2: '#ff3cac',
bg: '#080810',
surface: '#10101c'
},
cyan: {
text: '#f0f0f0',
accent: '#00ffee',
accent2: '#ff3cac',
bg: '#060c12',
surface: '#0c1a22'
},
pink: {
text: '#f0f0f0',
accent: '#ff2d78',
accent2: '#ffe600',
bg: '#100810',
surface: '#1c101c'
},
orange: {
text: '#f0f0f0',
accent: '#ff7b00',
accent2: '#00d4ff',
bg: '#100a06',
surface: '#1c1208'
},
purple: {
text: '#f0f0f0',
accent: '#9d4edd',
accent2: '#ff6b6b',
bg: '#08060e',
surface: '#120e1e'
},
white: {
text: '#f0f0f0',
accent: '#ffffff',
accent2: '#ff3cac',
bg: '#080810',
surface: '#10101c'
}
};
function applyColorPreset(name) {
const _0xe46d1ff9 = _0x4bd20bba[name];
if (!_0xe46d1ff9) return;
Object.entries(_0xe46d1ff9).forEach(([k, _0xad56e14a]) => {
document.documentElement.style.setProperty('--' + k, _0xad56e14a);
const _0xfd573ea5 = el('color-' + k);
if (_0xfd573ea5) _0xfd573ea5.value = _0xad56e14a;
const _0x0022a832 = el('color-' + k + '-hex');
if (_0x0022a832) _0x0022a832.value = _0xad56e14a;
});
toast('Preview applied — click Save Colors to keep it', '');
}
function previewColor(varName, _0xbfe46ccb) {
document.documentElement.style.setProperty('--' + varName, _0xbfe46ccb);
const _0x0022a832 = el('color-' + varName + '-hex');
if (_0x0022a832) _0x0022a832.value = _0xbfe46ccb;
}
function previewColorHex(varName, input) {
const _0xbfe46ccb = input.value.trim();
if (/^#[0-9a-fA-F]{6}$/.test(_0xbfe46ccb)) {
document.documentElement.style.setProperty('--' + varName, _0xbfe46ccb);
const _0xad0f8ea0 = el('color-' + varName);
if (_0xad0f8ea0) _0xad0f8ea0.value = _0xbfe46ccb;
}
}
async function saveColors() {
renewAdminSession();
const _0x17f2a975 = {
text: el('color-text')?.value || '#f0f0f0',
accent: el('color-accent').value,
accent2: el('color-accent2').value,
bg: el('color-bg').value,
surface: el('color-surface').value
};
_0xcafbdeac.colors = _0x17f2a975;
const _0xbaef075d = el('color-save-btn');
_0xbaef075d.textContent = 'Saving...';
_0xbaef075d.disabled = true;
try {
const {
error
} = await _0x5e400301.from('mv_site').upsert({
id: 1,
_0x0a685f53: _0xcafbdeac
});
if (error) throw error;
toast('Colors saved! ✓', 'success');
} catch (err) {
toast('Error: ' + err.message, 'error');
} finally {
_0xbaef075d.textContent = '💾 Save Colors';
_0xbaef075d.disabled = false;
}
}
function applyColors(_0x17f2a975) {
if (!_0x17f2a975) return;
Object.entries(_0x17f2a975).forEach(([k, _0xad56e14a]) => {
document.documentElement.style.setProperty('--' + k, _0xad56e14a);
const _0xfd573ea5 = el('color-' + k);
if (_0xfd573ea5) _0xfd573ea5.value = _0xad56e14a;
const _0x0022a832 = el('color-' + k + '-hex');
if (_0x0022a832) _0x0022a832.value = _0xad56e14a;
});
}
function resetColors() {
const _0x5047bbd5 = {
text: '#f0f0f0',
accent: '#c8ff00',
accent2: '#ff3cac',
bg: '#080810',
surface: '#10101c'
};
applyColors(_0x5047bbd5);
_0xcafbdeac.colors = _0x5047bbd5;
toast('Reset to default — click Save Colors to keep it', '');
}
function fillDesignForm() {
if (_0xcafbdeac.colors) applyColors(_0xcafbdeac.colors);
if (_0xcafbdeac.logoData) {
const _0x955185a5 = el('logo-preview');
const _0xb6762832 = el('logo-preview-img');
if (_0x955185a5 && _0xb6762832) {
_0xb6762832.src = _0xcafbdeac.logoData;
_0x955185a5.style.display = 'block';
}
}
}
let _0xf08fae6b = null;
let _0x88056ddb = null;
function getMimeType(file) {
if (file.type && file.type !== '') return file.type;
const ext = file.name.split('.').pop().toLowerCase();
const _0x8870e1e1 = {
gif: 'image/gif',
png: 'image/png',
jpg: 'image/jpeg',
jpeg: 'image/jpeg',
webp: 'image/webp',
svg: 'image/svg+xml',
ico: 'image/x-icon'
};
return _0x8870e1e1[ext] || 'image/png';
}
function getFileExt(file) {
return file.name.split('.').pop().toLowerCase() || 'png';
}
async function uploadFileToSupabase(file, folderName) {
if (!file) return null;
const _0x240f7248 = getMimeType(file);
const ext = getFileExt(file);
const _0x952bec72 = `${folderName}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
const {
_0x0a685f53,
error
} = await _0x5e400301.storage.from('portfolio-assets').upload(_0x952bec72, file, {
upsert: true,
contentType: _0x240f7248
});
if (error) {
console.error('Upload Error:', error);
throw error;
}
const {
_0x0a685f53: publicUrlData
} = _0x5e400301.storage.from('portfolio-assets').getPublicUrl(_0x952bec72);
return publicUrlData.publicUrl;
}
function handleLogoUpload(input) {
const _0x5da4cfd9 = input.files[0];
if (!_0x5da4cfd9) return;
_0xf08fae6b = _0x5da4cfd9;
const _0xf8618061 = URL.createObjectURL(_0x5da4cfd9);
const _0x955185a5 = el('logo-preview'),
_0xb6762832 = el('logo-preview-img');
if (_0x955185a5 && _0xb6762832) {
_0xb6762832.src = _0xf8618061;
_0x955185a5.style.display = 'block';
}
toast('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
const _0x5da4cfd9 = input.files[0];
if (!_0x5da4cfd9) return;
_0x88056ddb = _0x5da4cfd9;
toast('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
renewAdminSession();
if (!_0xf08fae6b && !_0x88056ddb) {
toast('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
return;
}
const _0xbaef075d = el('logo-save-btn');
_0xbaef075d.textContent = 'Uploading & Saving...';
_0xbaef075d.disabled = true;
try {
if (_0xf08fae6b) {
const _0xfff13ab4 = await uploadFileToSupabase(_0xf08fae6b, 'logos');
if (_0xfff13ab4) _0xcafbdeac.logoData = _0xfff13ab4;
}
if (_0x88056ddb) {
const _0x5a3176bb = await uploadFileToSupabase(_0x88056ddb, 'favicons');
if (_0x5a3176bb) _0xcafbdeac.faviconData = _0x5a3176bb;
}
const {
error
} = await _0x5e400301.from('mv_site').upsert({
id: 1,
_0x0a685f53: _0xcafbdeac
});
if (error) throw error;
applyLogoFavicon();
el('logo-upload').value = '';
el('favicon-upload').value = '';
_0xf08fae6b = null;
_0x88056ddb = null;
toast('Logo & Favicon uploaded and saved! ✓', 'success');
} catch (err) {
console.error(err);
toast('Error: ' + err.message, 'error');
} finally {
_0xbaef075d.textContent = '💾 Save Logo & Favicon';
_0xbaef075d.disabled = false;
}
}
function applyLogoFavicon() {
const _0xa304a60d = document.getElementById('loading-logo-img');
const _0xb680ce9f = document.getElementById('loading-logo-text');
if (_0xcafbdeac.logoData) {
if (_0xb680ce9f) _0xb680ce9f.style.display = 'none';
if (_0xa304a60d) {
_0xa304a60d.style.display = 'block';
_0xa304a60d.src = _0xcafbdeac.logoData;
}
try {
localStorage.setItem('mv_logo_url', _0xcafbdeac.logoData);
} catch (_0xa784441f) {}
} else {
if (_0xa304a60d) _0xa304a60d.style.display = 'none';
if (_0xb680ce9f) _0xb680ce9f.style.display = 'block';
try {
localStorage.removeItem('mv_logo_url');
} catch (_0xa784441f) {}
}
if (_0xcafbdeac.faviconData) {
let _0x5b57fe9d = document.querySelector('link[rel="icon"]');
if (!_0x5b57fe9d) {
_0x5b57fe9d = document.createElement('link');
_0x5b57fe9d.rel = 'icon';
document.head.appendChild(_0x5b57fe9d);
}
_0x5b57fe9d.href = _0xcafbdeac.faviconData;
}
}
async function deleteLogo() {
if (!confirm('Hapus logo yang sedang dipakai?')) return;
renewAdminSession();
_0xcafbdeac.logoData = null;
const {
error
} = await _0x5e400301.from('mv_site').upsert({
id: 1,
_0x0a685f53: _0xcafbdeac
});
if (error) {
toast('Error: ' + error.message, 'error');
return;
}
applyLogoFavicon();
const _0x955185a5 = el('logo-preview'),
_0xb6762832 = el('logo-preview-img');
if (_0x955185a5) _0x955185a5.style.display = 'none';
if (_0xb6762832) _0xb6762832.src = '';
toast('Logo dihapus! ✓', 'success');
}
function applySiteInfo() {
const _0xb5afc8c5 = _0xcafbdeac;
if (!_0xb5afc8c5 || !Object.keys(_0xb5afc8c5).length) return;
if (_0xb5afc8c5.colors) applyColors(_0xb5afc8c5.colors);
applyLogoFavicon();
const _0xb10e78b9 = _0xb5afc8c5.siteTitle || _0xb5afc8c5.brand || 'MV Portfolio';
document.title = _0xb10e78b9;
if (el('page-title')) el('page-title').textContent = _0xb10e78b9;
if (_0xb5afc8c5.brand && typeof _0xb5afc8c5.brand === 'string') {
el('nav-brand').innerHTML = _0xb5afc8c5.brand.replace('.', '<span>.</span>');
el('footer-brand').innerHTML = _0xb5afc8c5.brand.replace('.', '<span>.</span>');
}
setText('hero-label', _0xb5afc8c5.label);
setText('hero-sub', _0xb5afc8c5.hsub);
setText('about-p1', _0xb5afc8c5.about1);
setText('about-p2', _0xb5afc8c5.about2);
setText('footer-copy', _0xb5afc8c5.copy);
if (_0xb5afc8c5.htitle && typeof _0xb5afc8c5.htitle === 'string') {
const _0x351217be = _0xb5afc8c5.htitle.split('|');
el('hero-title').innerHTML = _0x351217be.map((l, _0x77f0d2f5) => _0x77f0d2f5 === 0 ? l : _0x77f0d2f5 === 1 ? `<span class="accent">${l}</span>` : `<span class="stroke">${l}</span>`).join('<br>');
}
const _0x9d203432 = [{
key: 'yt',
_0xa63cd563: 'YouTube',
icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>',
primary: true
}, {
key: 'tw',
_0xa63cd563: 'Twitter/X',
icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
primary: false
}, {
key: 'discord',
_0xa63cd563: 'Discord',
icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.024.015.046.033.06a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
primary: false
}, {
key: 'vgen',
_0xa63cd563: 'VGen',
icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
primary: false
}, {
key: 'ig',
_0xa63cd563: 'Instagram',
icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
primary: false
}, {
key: 'tiktok',
_0xa63cd563: 'TikTok',
icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>',
primary: false
}];
const _0xb7c5a03f = el('about-social-btns'),
_0x893def47 = el('footer-social-links');
if (_0xb7c5a03f) _0xb7c5a03f.innerHTML = _0x9d203432.filter(s2 => _0xb5afc8c5[s2.key]).map(s2 => `<a href="${_0xb5afc8c5[s2.key]}" target="_blank" class="btn ${s2.primary ? 'btn-primary' : 'btn-ghost'}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
if (_0x893def47) _0x893def47.innerHTML = _0x9d203432.filter(s2 => _0xb5afc8c5[s2.key]).map(s2 => `<a href="${_0xb5afc8c5[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function fillSiteForm() {
const _0xb5afc8c5 = _0xcafbdeac;
['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(k => {
if (el('s-' + k)) el('s-' + k).value = _0xb5afc8c5[k] || '';
});
if (el('s-perpage')) el('s-perpage').value = _0xb5afc8c5.perPage || 12;
const _0x7b43fa0f = _0xb5afc8c5.displayMode || 'all',
_0xd2ae9dd8 = el('dm-' + _0x7b43fa0f);
if (_0xd2ae9dd8) _0xd2ae9dd8.checked = true;
}
function previewMode(_0x7b43fa0f) {
_0xcafbdeac.displayMode = _0x7b43fa0f;
renderGrid(true);
}
async function saveSiteEdit() {
const _0x7b43fa0f = document.querySelector('input[name="display-mode"]:checked');
_0xcafbdeac = {
brand: el('s-brand').value,
siteTitle: el('s-siteTitle').value,
_0xa63cd563: el('s-label').value,
htitle: el('s-htitle').value,
hsub: el('s-hsub').value,
about1: el('s-about1').value,
about2: el('s-about2').value,
yt: el('s-yt').value,
tw: el('s-tw').value,
discord: el('s-discord').value,
vgen: el('s-vgen').value,
ig: el('s-ig').value,
tiktok: el('s-tiktok').value,
copy: el('s-copy').value,
year: el('s-year').value,
displayMode: _0x7b43fa0f ? _0x7b43fa0f.value : 'all',
_0x536c6355: parseInt(el('s-perpage')?.value) || 12,
_0x17f2a975: _0xcafbdeac.colors,
logoData: _0xcafbdeac.logoData,
faviconData: _0xcafbdeac.faviconData
};
const _0xbaef075d = el('site-save-btn');
_0xbaef075d.textContent = 'Saving...';
_0xbaef075d.disabled = true;
renewAdminSession();
try {
const {
error
} = await _0x5e400301.from('mv_site').upsert({
id: 1,
_0x0a685f53: _0xcafbdeac
});
if (error) throw error;
applySiteInfo();
updateStats();
renderGrid(true);
toast('Site info saved! ✓', 'success');
} catch (err) {
toast('Error: ' + err.message, 'error');
} finally {
_0xbaef075d.textContent = 'Simpan Info Site →';
_0xbaef075d.disabled = false;
}
}
function closeSiteEdit() {
const _0x81feb7b4 = el('site-edit-panel');
if (_0x81feb7b4) _0x81feb7b4.classList.remove('open');
}
async function init() {
const _0xcf308938 = el('logo-upload'),
_0x2f6b9cc3 = el('favicon-upload');
if (_0xcf308938) _0xcf308938.value = '';
if (_0x2f6b9cc3) _0x2f6b9cc3.value = '';
document.body.classList.add('loading');
setLoadProgress(15, 'Connecting...');
_0x5e400301 = window.supabase.createClient(_0x80424030, _0xb5e96152);
setLoadProgress(35, 'Loading site info...');
await loadSiteInfo();
setLoadProgress(60, 'Loading works...');
await loadCards();
setLoadProgress(75, 'Preloading previews...');
await preloadFeaturedIframes();
setLoadProgress(90, 'Almost there...');
_0x5e400301.channel('mv_realtime').on('postgres_changes', {
event: '*',
schema: 'public',
table: 'mv_works'
}, loadCards).on('postgres_changes', {
event: '*',
schema: 'public',
table: 'mv_site'
}, loadSiteInfo).subscribe();
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
