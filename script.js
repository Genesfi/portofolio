const _0x3b3d79db = _0xd2ec5675 => atob(_0xd2ec5675);
const _0x06d333dd = _0x3b3d79db('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0xd0aa6008 = _0x3b3d79db('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0xc218c428 = _0x3b3d79db('YWRt');
const _0x5739f48a = _0x3b3d79db('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x803da829 = ((60 * 60) * 1000);
let _0x549d8906,
  _0xf59d0c41 = [],
  _0x06b1f34f = {},
  _0x1af57fd3 = 'all',
  _0x47efdcb7 = null,
  _0xc254ef3d = 1,
  _0x3c008973 = 0;
let _0xa94e88ad = (() => {
  try {
    const _0x598d2799 = localStorage.getItem('mv_autoplay');
    return (_0x598d2799 === null) ? true : (_0x598d2799 === '1');
  } catch {
    return true;
  }
})();
function _0xa9941eb2() {
  _0xa94e88ad = !_0xa94e88ad;
  try {
    localStorage.setItem('mv_autoplay', _0xa94e88ad ? '1' : '0');
  } catch {}
  _0xbdcfe49a();
  if (_0xa94e88ad) {
    _0x097effd2();
    _0x738c06d2();
  } else {
    _0xadb72235();
  }
}
function _0xbdcfe49a() {
  const _0x0b69aa3e = _0xc575df90('autoplay-toggle'),
    label = _0xc575df90('autoplay-label');
  if (!_0x0b69aa3e) return;
  if (_0xa94e88ad) {
    _0x0b69aa3e.classList.add('active');
    if (label) label.textContent = 'Autoplay';
    _0x0b69aa3e.title = 'Autoplay ON — click to turn off';
  } else {
    _0x0b69aa3e.classList.remove('active');
    if (label) label.textContent = 'Autoplay';
    _0x0b69aa3e.title = 'Autoplay OFF — click to turn on';
  }
}
function _0xadb72235() {
  document.querySelectorAll('.mv-card.featured-autoplay').forEach(_0x40a241cc => {
    const _0xef8b2804 = _0x40a241cc.querySelector('.mv-preview-iframe');
    if (_0xef8b2804) _0xef8b2804.remove();
    _0x40a241cc.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x27dae5e3.forEach(_0x39cd252d => _0x39cd252d.remove());
  _0x27dae5e3.clear();
}
const _0x27dae5e3 = new Map();
function _0x6ca778e4() {
  const _0x86c78b9a = 5000;
  if (!_0xa94e88ad) return Promise.resolve();
  const _0x9073e8f3 = _0xf59d0c41.filter(_0x6f8e4cf2 => (_0x6f8e4cf2.featured && _0x6f8e4cf2.ytId));
  if (!_0x9073e8f3.length) return Promise.resolve();
  const _0x968da0d2 = _0x9073e8f3.map(_0xc0f9da73 => {
    if (_0x27dae5e3.has(_0xc0f9da73.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const _0xa7c9f1e2 = document.createElement('iframe');
      _0xa7c9f1e2.allow = 'autoplay';
      _0xa7c9f1e2.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      _0xa7c9f1e2.src = `https://www.youtube.com/embed/${_0xc0f9da73.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${_0xc0f9da73.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x183104fd = () => {
        _0xa7c9f1e2._mvReady = true;
        resolve();
      };
      _0xa7c9f1e2.onload = _0x183104fd;
      const _0x2c04cf27 = setTimeout(_0x183104fd, _0x86c78b9a);
      _0xa7c9f1e2.onload = () => {
        clearTimeout(_0x2c04cf27);
        _0xa7c9f1e2._mvReady = true;
        resolve();
      };
      document.body.appendChild(_0xa7c9f1e2);
      _0x27dae5e3.set(_0xc0f9da73.ytId, _0xa7c9f1e2);
    });
  });
  return Promise.race([Promise.all(_0x968da0d2), new Promise(_0xaff2c336 => setTimeout(_0xaff2c336, _0x86c78b9a))]);
}
function _0xdaedd2b1() {
  try {
    const _0x940ad3c1 = JSON.parse((sessionStorage.getItem(_0x5739f48a) || 'null'));
    if (!_0x940ad3c1) return false;
    if (((Date.now() - _0x940ad3c1.ts) > _0x803da829)) {
      sessionStorage.removeItem(_0x5739f48a);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x763dd271(_0x7e1c2b37) {
  if (_0x7e1c2b37) sessionStorage.setItem(_0x5739f48a, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0x5739f48a);
}
function _0x26d4865d() {
  if (_0xdaedd2b1()) _0x763dd271(true);
}
setInterval(() => {
  if ((!_0xdaedd2b1() && _0xc575df90('jkw-jk')?.classList.contains('open'))) {
    _0xc575df90('jkw-jk').classList.remove('open');
    _0x0863efd5('.', 'error');
  }
}, (60 * 1000));
function _0xfb49b346() {
  document.getElementById('jkw-jk').classList.remove('open');
  _0x549d8906.auth.signOut();
  _0x763dd271(false);
}
let _0xe45a5e72 = '';
document.addEventListener('keydown', _0xdc40ff85 => {
  if (['INPUT', 'TEXTAREA'].includes(_0xdc40ff85.target.tagName)) return;
  if ((_0xdc40ff85.key === 'Escape')) {
    _0x40cf4c47();
    _0x971d434b();
    _0xfb49b346();
    _0xc575df90('pw-modal').style.display = 'none';
    return;
  }
  _0xe45a5e72 += _0xdc40ff85.key.toLowerCase();
  if ((_0xe45a5e72.length > _0xc218c428.length)) _0xe45a5e72 = _0xe45a5e72.slice(-_0xc218c428.length);
  if ((_0xe45a5e72 === _0xc218c428)) {
    _0xe45a5e72 = '';
    _0x717d1c49();
  }
});
function _0x86f4c97d(name, _0xcc730b2c) {
  document.querySelectorAll('.tab-btn').forEach(_0x704daa75 => _0x704daa75.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(_0x24258130 => _0x24258130.classList.remove('active'));
  _0xcc730b2c.classList.add('active');
  _0xc575df90(('tab-' + name)).classList.add('active');
  if ((name === 'list')) _0xadefa96e();
  if ((name === 'site')) _0x6cd66778();
  if ((name === 'design')) _0x092ae8a4();
}
function _0x717d1c49() {
  if (_0xdaedd2b1()) {
    _0x26d4865d();
    _0xc575df90('jkw-jk').classList.toggle('open');
    return;
  }
  _0xc575df90('pw-error').style.display = 'none';
  _0xc575df90('pw-email').value = '';
  _0xc575df90('pw-input').value = '';
  _0xc575df90('pw-btn').disabled = false;
  try {
    const _0x9b1a059b = JSON.parse((sessionStorage.getItem(_0x3b3d79db('bG9ja291dA==')) || 'null'));
    if ((_0x9b1a059b && (Date.now() < _0x9b1a059b.until))) {
      const _0x1bb973e3 = Math.ceil(((_0x9b1a059b.until - Date.now()) / 60000));
      _0xc575df90('pw-error').style.display = 'block';
      _0xc575df90('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0x1bb973e3} min.`;
      _0xc575df90('pw-btn').disabled = true;
    }
  } catch (e) {}
  _0xc575df90('pw-modal').style.display = 'flex';
  setTimeout(() => _0xc575df90('pw-email').focus(), 100);
}
async function _0x1843ff31() {
  const _0x5dfcaebb = 5,
    _0xebc49d5c = ((15 * 60) * 1000),
    now = Date.now();
  const _0x015e076e = _0x3b3d79db('bG9ja291dA=='),
    _0x181b71e4 = _0x3b3d79db('YXR0ZW1wdHM=');
  try {
    const _0x675f6efb = JSON.parse((sessionStorage.getItem(_0x015e076e) || 'null'));
    if ((_0x675f6efb && (now < _0x675f6efb.until))) {
      const _0xbb40ef87 = Math.ceil(((_0x675f6efb.until - now) / 60000));
      _0xc575df90('pw-error').style.display = 'block';
      _0xc575df90('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0xbb40ef87} min.`;
      _0xc575df90('pw-btn').disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0xc575df90('pw-email').value.trim(),
    _0xd18a3c1a = _0xc575df90('pw-input').value;
  if ((!email || !_0xd18a3c1a)) {
    _0xc575df90('pw-error').style.display = 'block';
    _0xc575df90('pw-error').textContent = '❌ Please enter email and password.';
    return;
  }
  const _0xbe7f0da8 = _0xc575df90('pw-btn');
  _0xbe7f0da8.textContent = 'Signing in...';
  _0xbe7f0da8.disabled = true;
  try {
    const {
      data,
      error
    } = await _0x549d8906.auth.signInWithPassword({
      email,
      password: _0xd18a3c1a
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0x181b71e4);
    sessionStorage.removeItem(_0x015e076e);
    _0x763dd271(true);
    _0xc575df90('pw-modal').style.display = 'none';
    _0xc575df90('jkw-jk').classList.add('open');
    _0x0863efd5('Welcome back! ✓', 'success');
  } catch (e) {
    let _0x7fe9061f = 0;
    try {
      _0x7fe9061f = parseInt((sessionStorage.getItem(_0x181b71e4) || '0'));
    } catch (e) {}
    _0x7fe9061f++;
    sessionStorage.setItem(_0x181b71e4, _0x7fe9061f);
    const _0x28c2b7d2 = (_0x5dfcaebb - _0x7fe9061f);
    if ((_0x7fe9061f >= _0x5dfcaebb)) {
      sessionStorage.setItem(_0x015e076e, JSON.stringify({
        until: (now + _0xebc49d5c)
      }));
      sessionStorage.removeItem(_0x181b71e4);
      _0xc575df90('pw-error').style.display = 'block';
      _0xc575df90('pw-error').textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      _0xbe7f0da8.disabled = true;
    } else {
      _0xc575df90('pw-error').style.display = 'block';
      _0xc575df90('pw-error').textContent = `❌ Wrong credentials. ${_0x28c2b7d2} attempt${(_0x28c2b7d2 > 1) ? 's' : ''} left.`;
      _0xbe7f0da8.disabled = false;
    }
    _0xc575df90('pw-input').value = '';
    _0xc575df90('pw-input').focus();
  }
  _0xbe7f0da8.textContent = 'Sign In →';
}
function _0xd51bcb03(_0x58d93549, text) {
  const _0xb2bd567e = _0xc575df90('loading-bar'),
    _0x12a5aff1 = _0xc575df90('loading-text');
  if (_0xb2bd567e) _0xb2bd567e.style.width = (_0x58d93549 + '%');
  if ((_0x12a5aff1 && text)) _0x12a5aff1.textContent = text;
}
function _0x37307395() {
  const _0x96044de7 = _0xc575df90('loading-screen');
  if (!_0x96044de7) return;
  _0x96044de7.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x18a5f773() {
  const {
    data,
    error
  } = await _0x549d8906.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0xf59d0c41 = (data || []);
  _0x0635810d(true);
  _0x244b2ec8();
  _0x5efca1d9();
  _0x8f64d671();
  if (_0xc575df90('tab-list')?.classList.contains('active')) _0xadefa96e();
}
async function _0x18159b2d() {
  const {
    data
  } = await _0x549d8906.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x06b1f34f = data.data;
    if (_0x06b1f34f.logoData) {
      await new Promise(resolve => {
        const _0x15b5e029 = new Image();
        _0x15b5e029.onload = resolve;
        _0x15b5e029.onerror = resolve;
        _0x15b5e029.src = _0x06b1f34f.logoData;
      });
    }
    _0xc6840202();
    _0x5efca1d9();
  }
}
function _0xc575df90(id) {
  return document.getElementById(id);
}
function _0xb29e38c4(id, _0x80bdf5ee) {
  if ((_0x80bdf5ee && _0xc575df90(id))) _0xc575df90(id).textContent = _0x80bdf5ee;
}
function _0x3dd06a1f(_0x106e0959) {
  return String((_0x106e0959 || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0xa43fa512(_0x908b0849) {
  if ((!_0x908b0849 || (typeof _0x908b0849 !== 'string'))) return null;
  const _0xfdea7191 = (_0x908b0849.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || _0x908b0849.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0xfdea7191 ? _0xfdea7191[1] : null;
}
let _0x1f132ce4;
function _0x0863efd5(_0xee4d77f1, type = '') {
  const _0x392d3bbd = _0xc575df90('toast');
  _0x392d3bbd.textContent = _0xee4d77f1;
  _0x392d3bbd.className = `toast ${type} show`;
  clearTimeout(_0x1f132ce4);
  _0x1f132ce4 = setTimeout(() => _0x392d3bbd.classList.remove('show'), 3200);
}
function _0x3723d3c0(id) {
  const _0x4c7fec84 = (_0xc575df90(id).value || '');
  return _0x4c7fec84.split(',').map(_0x01fdf6f5 => _0x01fdf6f5.trim()).filter(Boolean);
}
function _0x9cddd9a2(id, _0x672133f3) {
  _0xc575df90(id).value = _0x672133f3.join(', ');
}
function _0xb8bfaa85(_0xd5b1c813, _0x37d366b5, _0xe1321805) {
  _0x26d4865d();
  let tags = _0x3723d3c0(_0xd5b1c813);
  if (tags.includes(_0x37d366b5)) {
    tags = tags.filter(_0x57aa9d02 => (_0x57aa9d02 !== _0x37d366b5));
    _0xe1321805.classList.remove('active');
  } else {
    tags.push(_0x37d366b5);
    _0xe1321805.classList.add('active');
  }
  _0x9cddd9a2(_0xd5b1c813, tags);
}
function _0x4f40d5f3(_0x5d30388b, _0x8f3ec13a) {
  const tags = _0x3723d3c0(_0x5d30388b),
    _0x867a74a8 = _0xc575df90(_0x8f3ec13a);
  if (!_0x867a74a8) return;
  _0x867a74a8.querySelectorAll('.tag-preset-btn').forEach(_0x55113ab8 => {
    _0x55113ab8.classList.toggle('active', tags.includes(_0x55113ab8.textContent.trim()));
  });
}
function _0x782d0356(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xcfbcfbc4(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x8f64d671() {
  const _0x65fc4849 = _0xf59d0c41.map(_0x58624965 => (_0x58624965.thumb || (_0x58624965.ytId ? _0xcfbcfbc4(_0x58624965.ytId) : null))).filter(Boolean);
  if ((_0x65fc4849.length < 2)) return;
  const _0x58d00cca = (_0xa863cd50, min) => {
    let _0x084721f1 = [..._0xa863cd50];
    while ((_0x084721f1.length < min)) _0x084721f1 = [..._0x084721f1, ..._0xa863cd50];
    return _0x084721f1;
  };
  const _0xb3e9a426 = [{
    id: 'hero-row-1',
    items: _0x58d00cca(_0x65fc4849, 20),
    dir: 'left',
    speed: 60
  }, {
    id: 'hero-row-2',
    items: _0x58d00cca([..._0x65fc4849].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: 'hero-row-3',
    items: _0x58d00cca(_0x65fc4849.slice(Math.floor((_0x65fc4849.length / 2))).concat(_0x65fc4849.slice(0, Math.floor((_0x65fc4849.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0xb3e9a426.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0x14cce75e = _0xc575df90(id);
    if (!_0x14cce75e) return;
    const all = [...items, ...items];
    _0x14cce75e.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0x8b449058 = (items.length * (speed / 20));
      _0x14cce75e.style.animationDuration = `${_0x8b449058}s`;
      if ((dir === 'right')) {
        _0x14cce75e.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const _0x11a7ed1c = _0xc575df90('hero-track-wrap');
    if (_0x11a7ed1c) _0x11a7ed1c.classList.add('visible');
  }, 400);
}
function _0xdb609482(_0x015b8d97) {
  const thumb = (_0x015b8d97.thumb || (_0x015b8d97.ytId ? _0x782d0356(_0x015b8d97.ytId) : ''));
  const _0xca5ef220 = _0x015b8d97.ytId ? _0xcfbcfbc4(_0x015b8d97.ytId) : '';
  const tags = (_0x015b8d97.tags || []).map(_0xadf8d2cd => `<span class="mv-tag">${_0x3dd06a1f(_0xadf8d2cd)}</span>`).join('');
  const _0x18bb02fe = !!_0x015b8d97.ytId;
  const _0xc54516df = !!_0x015b8d97.featured;
  const _0x1f18e185 = (_0x18bb02fe && !_0xc54516df) ? `onmouseenter="startPreview(this,'${_0x015b8d97.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="mv-card${_0xc54516df ? ' featured' : ''}" 
        data-id="${_0x015b8d97.id}" 
        data-ytid="${(_0x015b8d97.ytId || '')}"
        onclick="openModal('${_0x015b8d97.id}')"
        ${_0x1f18e185}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0x3dd06a1f(_0x015b8d97.title)}" loading="lazy" onerror="this.src='${_0xca5ef220}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0x3dd06a1f(_0x015b8d97.title)}</div><div class="mv-artist">${_0x3dd06a1f((_0x015b8d97.artist || ''))}</div></div></div>
</div>`;
}
function _0xedde526e() {
  return (_0x06b1f34f.displayMode || 'all');
}
function _0x6d7abf3f() {
  return (parseInt(_0x06b1f34f.perPage) || 12);
}
function _0x0635810d(_0xf70dc737) {
  if (_0xf70dc737) {
    _0xc254ef3d = 1;
    _0x3c008973 = 0;
  }
  const _0x1bb383d4 = _0xc575df90('mv-grid'),
    _0xf1ea5e39 = _0xedde526e(),
    perPage = _0x6d7abf3f();
  const _0x73834d33 = (_0x1af57fd3 === 'all') ? _0xf59d0c41 : _0xf59d0c41.filter(_0xca57fa8f => (_0xca57fa8f.tags || []).includes(_0x1af57fd3));
  _0xc575df90('works-count').textContent = String(_0x73834d33.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const _0x769ac79e = _0xc575df90(id);
    if (_0x769ac79e) _0x769ac79e.remove();
  });
  if (!_0x73834d33.length) {
    _0x1bb383d4.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0xf1ea5e39 === 'pagination')) {
    const _0xeb5162ae = Math.ceil((_0x73834d33.length / perPage));
    _0xc254ef3d = Math.min(_0xc254ef3d, _0xeb5162ae);
    const slice = _0x73834d33.slice(((_0xc254ef3d - 1) * perPage), (_0xc254ef3d * perPage));
    _0x1bb383d4.innerHTML = slice.map(_0xdb609482).join('');
    if ((_0xeb5162ae > 1)) {
      const _0x0f795125 = document.createElement('div');
      _0x0f795125.id = 'mv-pagination';
      _0x0f795125.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x044537c0 = 1; (_0x044537c0 <= _0xeb5162ae); _0x044537c0++) {
        const _0xd2df97b2 = document.createElement('button');
        _0xd2df97b2.textContent = _0x044537c0;
        _0xd2df97b2.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x044537c0 === _0xc254ef3d) ? 'var(--accent)' : 'transparent'};color:${(_0x044537c0 === _0xc254ef3d) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        _0xd2df97b2.onclick = () => {
          _0xc254ef3d = _0x044537c0;
          _0x0635810d(false);
          window.scrollTo({
            top: (_0xc575df90('works').offsetTop - 80),
            behavior: 'smooth'
          });
        };
        _0x0f795125.appendChild(_0xd2df97b2);
      }
      _0x1bb383d4.appendChild(_0x0f795125);
    }
  } else if ((_0xf1ea5e39 === 'loadmore')) {
    if (_0xf70dc737) _0x3c008973 = perPage;else _0x3c008973 = Math.max(_0x3c008973, perPage);
    const slice = _0x73834d33.slice(0, _0x3c008973);
    _0x1bb383d4.innerHTML = slice.map(_0xdb609482).join('');
    if ((_0x3c008973 < _0x73834d33.length)) {
      const _0x90a9da50 = (_0x73834d33.length - _0x3c008973);
      const _0xd0dd8276 = document.createElement('button');
      _0xd0dd8276.id = 'mv-loadmore-btn';
      _0xd0dd8276.textContent = `Load More (${_0x90a9da50} more)`;
      _0xd0dd8276.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      _0xd0dd8276.onmouseenter = () => _0xd0dd8276.style.background = 'rgba(200,255,0,.08)';
      _0xd0dd8276.onmouseleave = () => _0xd0dd8276.style.background = 'transparent';
      _0xd0dd8276.onclick = () => {
        _0x3c008973 += perPage;
        _0x0635810d(false);
      };
      _0x1bb383d4.appendChild(_0xd0dd8276);
    }
  } else {
    _0x1bb383d4.innerHTML = _0x73834d33.map(_0xdb609482).join('');
  }
  requestAnimationFrame(() => _0x097effd2());
}
function _0x244b2ec8() {
  const tags = new Set();
  _0xf59d0c41.forEach(_0xd96faa5b => (_0xd96faa5b.tags || []).forEach(_0x95a228d0 => tags.add(_0x95a228d0)));
  _0xc575df90('filter-bar').innerHTML = (`<button class="filter-btn${(_0x1af57fd3 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(_0xad1dfdc2 => `<button class="filter-btn${(_0x1af57fd3 === _0xad1dfdc2) ? ' active' : ''}" onclick="filterCards('${_0x3dd06a1f(_0xad1dfdc2)}',this)">${_0x3dd06a1f(_0xad1dfdc2)}</button>`).join(''));
}
function _0x6078e4b1(_0x156f61af, _0x95db03c1) {
  _0x1af57fd3 = _0x156f61af;
  document.querySelectorAll('.filter-btn').forEach(_0x7586a3e9 => _0x7586a3e9.classList.remove('active'));
  _0x95db03c1.classList.add('active');
  _0x0635810d(true);
}
function _0x097effd2() {
  if (!_0xa94e88ad) return;
  const _0x7c1cc201 = document.querySelectorAll('.mv-card.featured');
  _0x7c1cc201.forEach(_0x9c12cfd2 => {
    const ytId = _0x9c12cfd2.dataset.ytid;
    if (!ytId) return;
    if (_0x9c12cfd2.classList.contains('previewing')) return;
    const _0xf28d3024 = _0x27dae5e3.get(ytId);
    if (_0xf28d3024) {
      _0xf28d3024.removeAttribute('style');
      _0xf28d3024.className = 'mv-preview-iframe';
      _0x9c12cfd2.insertBefore(_0xf28d3024, _0x9c12cfd2.firstChild);
      _0x9c12cfd2.classList.add('previewing', 'featured-autoplay');
      if (_0xf28d3024.contentWindow) {
        if (_0xf28d3024._mvReady) {
          _0x9c12cfd2.classList.add('preview-ready');
        } else {
          _0xf28d3024.onload = () => {
            _0xf28d3024._mvReady = true;
            _0x9c12cfd2.classList.add('preview-ready');
          };
        }
      }
      _0x27dae5e3.delete(ytId);
    } else {
      _0x06200ad1(_0x9c12cfd2, ytId);
    }
  });
}
function _0x06200ad1(_0xa3de66ae, ytId) {
  if (!_0xa94e88ad) return;
  if (_0xa3de66ae.classList.contains('previewing')) return;
  _0xa3de66ae.classList.add('previewing', 'featured-autoplay');
  const _0xb93c3c38 = document.createElement('iframe');
  _0xb93c3c38.className = 'mv-preview-iframe';
  _0xb93c3c38.allow = 'autoplay';
  _0xb93c3c38.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
  _0xb93c3c38.onload = () => {
    _0xb93c3c38._mvReady = true;
    _0xa3de66ae.classList.add('preview-ready');
  };
  _0xa3de66ae.insertBefore(_0xb93c3c38, _0xa3de66ae.firstChild);
}
function _0x738c06d2() {
  const _0x474e271b = document.querySelectorAll('.mv-card.featured');
  _0x474e271b.forEach(_0x7313788f => {
    const ytId = _0x7313788f.dataset.ytid;
    if (!ytId) return;
    if (_0x7313788f.classList.contains('previewing')) return;
    _0x06200ad1(_0x7313788f, ytId);
  });
}
let _0x69a638bb = null;
function _0xadefa96e() {
  const _0x6414a940 = _0xc575df90('existing-list');
  if (!_0xf59d0c41.length) {
    _0x6414a940.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0x69a638bb) {
      _0x69a638bb.destroy();
      _0x69a638bb = null;
    }
    return;
  }
  _0x6414a940.innerHTML = _0xf59d0c41.map(_0x2f803dcc => {
    const thumb = (_0x2f803dcc.thumb || (_0x2f803dcc.ytId ? _0x782d0356(_0x2f803dcc.ytId) : ''));
    const _0x412ee615 = _0x2f803dcc.ytId ? _0xcfbcfbc4(_0x2f803dcc.ytId) : '';
    return `<div class="existing-item" id="item-${_0x2f803dcc.id}" data-id="${_0x2f803dcc.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${_0x412ee615}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0x3dd06a1f(_0x2f803dcc.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${_0x2f803dcc.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${_0x2f803dcc.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${_0x2f803dcc.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${_0x2f803dcc.id}" value="${_0x3dd06a1f((_0x2f803dcc.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${_0x2f803dcc.id}" value="${_0x3dd06a1f(_0x2f803dcc.title)}">
<label>Artist</label><input type="text" id="e-artist-${_0x2f803dcc.id}" value="${_0x3dd06a1f((_0x2f803dcc.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="tag-presets" id="edit-tag-presets-${_0x2f803dcc.id}">
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x2f803dcc.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x2f803dcc.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x2f803dcc.id}','Complex',this)">Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x2f803dcc.id}','Debut',this)">Debut</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0x2f803dcc.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${_0x2f803dcc.id}" value="${_0x3dd06a1f((_0x2f803dcc.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${_0x2f803dcc.id}','edit-tag-presets-${_0x2f803dcc.id}')" onfocus="syncPresetHighlight('e-tags-${_0x2f803dcc.id}','edit-tag-presets-${_0x2f803dcc.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${_0x2f803dcc.id}" value="${_0x3dd06a1f((_0x2f803dcc.thumb || ''))}">
<div class="checkbox-row" style="margin:6px 0"><input type="checkbox" id="e-feat-${_0x2f803dcc.id}" ${_0x2f803dcc.featured ? 'checked' : ''}><label for="e-feat-${_0x2f803dcc.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${_0x2f803dcc.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${_0x2f803dcc.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0x69a638bb) {
    _0x69a638bb.destroy();
    _0x69a638bb = null;
  }
  _0x69a638bb = Sortable.create(_0x6414a940, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0xb83c59ac => {
      if ((_0xb83c59ac.oldIndex === _0xb83c59ac.newIndex)) return;
      const _0x3e39ed8e = _0xf59d0c41.splice(_0xb83c59ac.oldIndex, 1);
      _0xf59d0c41.splice(_0xb83c59ac.newIndex, 0, _0x3e39ed8e);
      let _0xd8415abb = _0xc575df90('sort-saving');
      if (!_0xd8415abb) {
        _0xd8415abb = document.createElement('div');
        _0xd8415abb.id = 'sort-saving';
        _0xd8415abb.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0x6414a940.insertAdjacentElement('afterend', _0xd8415abb);
      }
      _0xd8415abb.textContent = '⟳ Saving order...';
      await Promise.all(_0xf59d0c41.map((_0xc5bc2246, _0x4faab4a4) => _0x549d8906.from('mv_works').update({
        sort_order: _0x4faab4a4
      }).eq('id', _0xc5bc2246.id)));
      _0xd8415abb.remove();
      _0x0863efd5('Order saved! ✓', 'success');
      _0x0635810d(true);
    }
  });
}
function _0x3e825f68(id) {
  const _0xe4120329 = _0xc575df90(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(_0x4e582129 => {
    if ((_0x4e582129.id !== ('edit-' + id))) _0x4e582129.classList.remove('open');
  });
  _0xe4120329.classList.toggle('open');
  if (_0xe4120329.classList.contains('open')) setTimeout(() => _0x4f40d5f3(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function _0xb8807e24(id) {
  const _0x70dd610b = _0xc575df90(`e-url-${id}`).value.trim(),
    title = _0xc575df90(`e-title-${id}`).value.trim(),
    artist = _0xc575df90(`e-artist-${id}`).value.trim();
  const _0x1eee1dad = _0xc575df90(`e-tags-${id}`).value.trim(),
    thumb = _0xc575df90(`e-thumb-${id}`).value.trim(),
    _0x7f38c421 = _0xc575df90(`e-feat-${id}`).checked;
  if (!title) {
    _0x0863efd5('Title cannot be empty!', 'error');
    return;
  }
  _0x26d4865d();
  const ytId = ((_0xa43fa512(_0x70dd610b) || _0x70dd610b) || null);
  const tags = _0x1eee1dad ? _0x1eee1dad.split(',').map(_0x72f20625 => _0x72f20625.trim()).filter(Boolean) : [];
  const _0xc11a5b98 = _0xc575df90(`edit-${id}`).querySelector('.inline-save-btn');
  _0xc11a5b98.textContent = 'Saving...';
  _0xc11a5b98.disabled = true;
  const {
    error
  } = await _0x549d8906.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x7f38c421
  }).eq('id', id);
  _0xc11a5b98.textContent = '💾 Save Changes';
  _0xc11a5b98.disabled = false;
  if (error) {
    _0x0863efd5(('Error: ' + error.message), 'error');
    return;
  }
  _0x0863efd5('Work updated! ✓', 'success');
  _0x3e825f68(id);
}
function _0x5efca1d9() {
  _0xc575df90('stat-mvs').textContent = (_0xf59d0c41.length || '0');
  const _0xde913282 = new Set(_0xf59d0c41.map(_0x77f181ee => _0x77f181ee.artist).filter(Boolean));
  _0xc575df90('stat-clients').textContent = (_0xde913282.size || '0');
  const tags = new Set();
  _0xf59d0c41.forEach(_0x9522f277 => (_0x9522f277.tags || []).forEach(_0x417dad47 => tags.add(_0x417dad47)));
  _0xc575df90('stat-tags').textContent = (tags.size || '0');
  _0xc575df90('stat-year').textContent = (_0x06b1f34f.year || new Date().getFullYear());
}
async function _0x91cd7a8a() {
  const _0xa1089ce2 = _0xc575df90('inp-url').value.trim(),
    title = _0xc575df90('inp-title').value.trim(),
    artist = _0xc575df90('inp-artist').value.trim();
  const _0xdeb549dc = _0xc575df90('inp-tags').value.trim(),
    thumb = _0xc575df90('inp-thumb').value.trim(),
    _0x06a3a2f2 = _0xc575df90('inp-featured').checked;
  if (!title) {
    _0x0863efd5('Title is required!', 'error');
    return;
  }
  _0x26d4865d();
  const ytId = _0xa43fa512(_0xa1089ce2);
  const tags = _0xdeb549dc ? _0xdeb549dc.split(',').map(_0x0e8005ad => _0x0e8005ad.trim()).filter(Boolean) : [];
  const _0x0eb03a0d = _0xc575df90('add-btn');
  _0x0eb03a0d.disabled = true;
  _0x0eb03a0d.textContent = 'Saving...';
  const {
    error
  } = await _0x549d8906.from('mv_works').insert([{
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x06a3a2f2,
    sort_order: -1
  }]);
  _0x0eb03a0d.disabled = false;
  _0x0eb03a0d.textContent = '+ Add to Portfolio';
  if (error) {
    _0x0863efd5(('Error: ' + error.message), 'error');
    return;
  }
  _0x0863efd5('Work added! ✓', 'success');
  ['inp-url', 'inp-title', 'inp-artist', 'inp-tags', 'inp-thumb'].forEach(id => _0xc575df90(id).value = '');
  _0xc575df90('inp-featured').checked = false;
  document.querySelectorAll('#add-tag-presets .tag-preset-btn').forEach(_0xeeac4ddc => _0xeeac4ddc.classList.remove('active'));
  _0xa8eea28a('', '');
}
async function _0xea91dc14(id) {
  if (!confirm('Remove this work?')) return;
  _0x26d4865d();
  const {
    error
  } = await _0x549d8906.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x0863efd5(('Error: ' + error.message), 'error');
    return;
  }
  _0x0863efd5('Work removed', 'success');
}
function _0x7187faeb(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const _0xdd923c8c = _0xf59d0c41.find(_0x42b27fdd => (_0x42b27fdd.id === id));
  if (!_0xdd923c8c) return;
  _0xc575df90('modal-title').textContent = _0xdd923c8c.title;
  _0xc575df90('modal-artist').textContent = (_0xdd923c8c.artist || '');
  _0xc575df90('modal-tags').innerHTML = (_0xdd923c8c.tags || []).map(_0x26648f72 => `<span class="mv-tag">${_0x3dd06a1f(_0x26648f72)}</span>`).join('');
  _0xc575df90('modal-video-wrap').innerHTML = _0xdd923c8c.ytId ? `<iframe src="https://www.youtube.com/embed/${_0xdd923c8c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0xc575df90('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function _0x40cf4c47(_0xe01a4b0c) {
  if ((_0xe01a4b0c && (_0xe01a4b0c.target !== _0xc575df90('modal')))) return;
  _0xc575df90('modal').classList.remove('open');
  _0xc575df90('modal-video-wrap').innerHTML = '';
  document.body.style.overflow = '';
}
function _0x9fdc2e7d(_0x3b76b089) {
  clearTimeout(_0x47efdcb7);
  const ytId = _0xa43fa512(_0x3b76b089);
  if (!ytId) {
    _0xa8eea28a('', '');
    return;
  }
  _0xa8eea28a('loading', '⟳ Fetching info...');
  _0x47efdcb7 = setTimeout(() => _0xc8d1e2d8(ytId), 800);
}
async function _0xc8d1e2d8(ytId) {
  try {
    const _0x258c3fac = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0x258c3fac.ok) throw new Error();
    const data = await _0x258c3fac.json();
    if (!_0xc575df90('inp-title').value.trim()) _0xc575df90('inp-title').value = (data.title || '');
    if (!_0xc575df90('inp-artist').value.trim()) _0xc575df90('inp-artist').value = (data.author_name || '');
    _0xa8eea28a('ok', '✓ Info fetched');
  } catch {
    _0xa8eea28a('err', '⚠ Could not fetch info');
  }
}
function _0xa8eea28a(type, _0x55267db0) {
  const _0x98c4124c = _0xc575df90('fetch-status');
  _0x98c4124c.textContent = _0x55267db0;
  _0x98c4124c.className = ('fetch-status' + (type ? (' ' + type) : ''));
}
let _0xbb92f767 = null;
function _0xb244b721() {
  const _0x25a00458 = document.body.classList.toggle('edit-mode');
  const _0x02179b2b = _0xc575df90('edit-mode-bar');
  const _0x705bf6af = _0xc575df90('edit-mode-toggle-btn');
  if (_0x25a00458) {
    _0x02179b2b.classList.add('active');
    _0x705bf6af.textContent = '✦ Exit Drag Mode';
    _0x705bf6af.style.background = 'rgba(255,60,172,.1)';
    _0x705bf6af.style.borderColor = 'rgba(255,60,172,.4)';
    _0x705bf6af.style.color = 'var(--accent2)';
    _0xc575df90('jkw-jk').classList.remove('open');
    _0x46b3ef9e();
  } else {
    _0x51375c46();
  }
}
function _0x51375c46() {
  document.body.classList.remove('edit-mode');
  _0xc575df90('edit-mode-bar').classList.remove('active');
  const _0xd8ecf1f2 = _0xc575df90('edit-mode-toggle-btn');
  if (_0xd8ecf1f2) {
    _0xd8ecf1f2.textContent = '✦ Drag Reorder on Page';
    _0xd8ecf1f2.style.background = 'rgba(200,255,0,.1)';
    _0xd8ecf1f2.style.borderColor = 'rgba(200,255,0,.3)';
    _0xd8ecf1f2.style.color = 'var(--accent)';
  }
  if (_0xbb92f767) {
    _0xbb92f767.destroy();
    _0xbb92f767 = null;
  }
}
function _0x46b3ef9e() {
  const _0x10aaf51d = _0xc575df90('mv-grid');
  if (!_0x10aaf51d) return;
  if (_0xbb92f767) _0xbb92f767.destroy();
  _0xbb92f767 = Sortable.create(_0x10aaf51d, {
    animation: 200,
    draggable: ".mv-card",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: _0xec4fef73 => {
      if ((_0xec4fef73.oldIndex === _0xec4fef73.newIndex)) return;
      const _0x5fb26b46 = _0xf59d0c41.splice(_0xec4fef73.oldIndex, 1);
      _0xf59d0c41.splice(_0xec4fef73.newIndex, 0, _0x5fb26b46);
      _0x0863efd5('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function _0x469bb7ea() {
  _0x0863efd5('Saving order...', '');
  await Promise.all(_0xf59d0c41.map((_0xfd5749c7, _0x546e87de) => _0x549d8906.from('mv_works').update({
    sort_order: _0x546e87de
  }).eq('id', _0xfd5749c7.id)));
  _0x0863efd5('Order saved! ✓', 'success');
  _0x51375c46();
  _0x0635810d(true);
}
let _0xb4d8d03b = null;
let _0x3ed1f7bc = null;
const _0x7320a5f1 = new Map();
function _0xb2729dfe(_0x539e8725, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (_0x539e8725.classList.contains('featured')) return;
  if (!_0x7320a5f1.has(ytId)) {
    const _0xfa43c236 = document.createElement('iframe');
    _0xfa43c236.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0xfa43c236.allow = 'autoplay';
    _0xfa43c236.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0xfa43c236);
    _0x7320a5f1.set(ytId, _0xfa43c236);
  }
  _0xb4d8d03b = setTimeout(() => {
    _0xd8281985(_0x3ed1f7bc);
    _0x3ed1f7bc = _0x539e8725;
    _0x539e8725.classList.add('previewing');
    const _0xe12f2e91 = _0x7320a5f1.get(ytId);
    if (_0xe12f2e91) {
      _0xe12f2e91.removeAttribute('style');
      _0xe12f2e91.className = 'mv-preview-iframe';
      _0xe12f2e91.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      _0x539e8725.insertBefore(_0xe12f2e91, _0x539e8725.firstChild);
      _0xe12f2e91.onload = () => _0x539e8725.classList.add('preview-ready');
    }
  }, 700);
}
function _0xd8281985(_0xd0c407d2) {
  clearTimeout(_0xb4d8d03b);
  if (!_0xd0c407d2) return;
  if (_0xd0c407d2.classList.contains('featured-autoplay')) return;
  _0xd0c407d2.classList.remove('previewing', 'preview-ready');
  const _0xf7870bfd = _0xd0c407d2.querySelector('.mv-preview-iframe');
  if (_0xf7870bfd) {
    const ytId = _0xd0c407d2.dataset.ytid;
    _0xf7870bfd.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    _0xf7870bfd.className = '';
    if (ytId) _0xf7870bfd.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    document.body.appendChild(_0xf7870bfd);
  }
  if ((_0x3ed1f7bc === _0xd0c407d2)) _0x3ed1f7bc = null;
}
const _0xabb5af19 = {
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
function _0xf516eb51(name) {
  const _0x05982eb6 = _0xabb5af19[name];
  if (!_0x05982eb6) return;
  Object.entries(_0x05982eb6).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x81c4b4e2 = _0xc575df90(('color-' + k));
    if (_0x81c4b4e2) _0x81c4b4e2.value = v;
    const _0xd02194a8 = _0xc575df90((('color-' + k) + '-hex'));
    if (_0xd02194a8) _0xd02194a8.value = v;
  });
  _0x0863efd5('Preview applied — click Save Colors to keep it', '');
}
function _0x18051c93(_0x8991dc82, _0x6d2de9f9) {
  document.documentElement.style.setProperty(('--' + _0x8991dc82), _0x6d2de9f9);
  const _0xdc742470 = _0xc575df90((('color-' + _0x8991dc82) + '-hex'));
  if (_0xdc742470) _0xdc742470.value = _0x6d2de9f9;
}
function _0x3ee6d71f(_0x24e7b38c, _0x78a00ac4) {
  const _0xbe8659c4 = _0x78a00ac4.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(_0xbe8659c4)) {
    document.documentElement.style.setProperty(('--' + _0x24e7b38c), _0xbe8659c4);
    const _0x3c11d9f4 = _0xc575df90(('color-' + _0x24e7b38c));
    if (_0x3c11d9f4) _0x3c11d9f4.value = _0xbe8659c4;
  }
}
async function _0xbaaac06f() {
  _0x26d4865d();
  const colors = {
    text: (_0xc575df90('color-text')?.value || '#f0f0f0'),
    accent: _0xc575df90('color-accent').value,
    accent2: _0xc575df90('color-accent2').value,
    bg: _0xc575df90('color-bg').value,
    surface: _0xc575df90('color-surface').value
  };
  _0x06b1f34f.colors = colors;
  const _0x7ec457f0 = _0xc575df90('color-save-btn');
  _0x7ec457f0.textContent = 'Saving...';
  _0x7ec457f0.disabled = true;
  try {
    const {
      error
    } = await _0x549d8906.from('mv_site').upsert({
      id: 1,
      data: _0x06b1f34f
    });
    if (error) throw error;
    _0x0863efd5('Colors saved! ✓', 'success');
  } catch (err) {
    _0x0863efd5(('Error: ' + err.message), 'error');
  } finally {
    _0x7ec457f0.textContent = '💾 Save Colors';
    _0x7ec457f0.disabled = false;
  }
}
function _0x67f29946(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0xc8cabda3 = _0xc575df90(('color-' + k));
    if (_0xc8cabda3) _0xc8cabda3.value = v;
    const _0x35eda535 = _0xc575df90((('color-' + k) + '-hex'));
    if (_0x35eda535) _0x35eda535.value = v;
  });
}
function _0x4db63960() {
  const _0x16aa74dd = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0x67f29946(_0x16aa74dd);
  _0x06b1f34f.colors = _0x16aa74dd;
  _0x0863efd5('Reset to default — click Save Colors to keep it', '');
}
function _0x092ae8a4() {
  if (_0x06b1f34f.colors) _0x67f29946(_0x06b1f34f.colors);
  if (_0x06b1f34f.logoData) {
    const _0x2bcbbc68 = _0xc575df90('logo-preview');
    const _0x4a4478d1 = _0xc575df90('logo-preview-img');
    if ((_0x2bcbbc68 && _0x4a4478d1)) {
      _0x4a4478d1.src = _0x06b1f34f.logoData;
      _0x2bcbbc68.style.display = 'block';
    }
  }
}
let _0x165c32ef = null;
let _0x7222945c = null;
function _0x1fb754f7(_0xc9db7547) {
  if ((_0xc9db7547.type && (_0xc9db7547.type !== ''))) return _0xc9db7547.type;
  const _0x101c898c = _0xc9db7547.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x101c898c] || 'image/png');
}
function _0x2a4e89e6(_0x744c849b) {
  return (_0x744c849b.name.split('.').pop().toLowerCase() || 'png');
}
async function _0xc98c2b2e(_0xd6ce7cd5, _0x28b3886f) {
  if (!_0xd6ce7cd5) return null;
  const _0xc656c46f = _0x1fb754f7(_0xd6ce7cd5);
  const _0x6f84eb02 = _0x2a4e89e6(_0xd6ce7cd5);
  const _0x017dd951 = `${_0x28b3886f}/${Date.now()}-${Math.random().toString(36).substring(7)}.${_0x6f84eb02}`;
  const {
    data,
    error
  } = await _0x549d8906.storage.from('portfolio-assets').upload(_0x017dd951, _0xd6ce7cd5, {
    upsert: true,
    contentType: _0xc656c46f
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0xc3d8c759
  } = _0x549d8906.storage.from('portfolio-assets').getPublicUrl(_0x017dd951);
  return _0xc3d8c759.publicUrl;
}
function _0x7b095d72(_0xf361ee97) {
  const _0xef06658b = _0xf361ee97.files[0];
  if (!_0xef06658b) return;
  _0x165c32ef = _0xef06658b;
  const _0x420594bc = URL.createObjectURL(_0xef06658b);
  const _0x507bc1fa = _0xc575df90('logo-preview'),
    _0x662048e8 = _0xc575df90('logo-preview-img');
  if ((_0x507bc1fa && _0x662048e8)) {
    _0x662048e8.src = _0x420594bc;
    _0x507bc1fa.style.display = 'block';
  }
  _0x0863efd5('Logo selected — click Save Logo & Favicon', '');
}
function _0x054be066(_0xda974d73) {
  const _0xc939be2d = _0xda974d73.files[0];
  if (!_0xc939be2d) return;
  _0x7222945c = _0xc939be2d;
  _0x0863efd5('Favicon selected — click Save Logo & Favicon', '');
}
async function _0x98680b16() {
  _0x26d4865d();
  if ((!_0x165c32ef && !_0x7222945c)) {
    _0x0863efd5('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const _0x0e35bcbe = _0xc575df90('logo-save-btn');
  _0x0e35bcbe.textContent = 'Uploading & Saving...';
  _0x0e35bcbe.disabled = true;
  try {
    if (_0x165c32ef) {
      const _0xca10bab7 = await _0xc98c2b2e(_0x165c32ef, 'logos');
      if (_0xca10bab7) _0x06b1f34f.logoData = _0xca10bab7;
    }
    if (_0x7222945c) {
      const _0x2b7b1dde = await _0xc98c2b2e(_0x7222945c, 'favicons');
      if (_0x2b7b1dde) _0x06b1f34f.faviconData = _0x2b7b1dde;
    }
    const {
      error
    } = await _0x549d8906.from('mv_site').upsert({
      id: 1,
      data: _0x06b1f34f
    });
    if (error) throw error;
    _0x10593de2();
    _0xc575df90('logo-upload').value = '';
    _0xc575df90('favicon-upload').value = '';
    _0x165c32ef = null;
    _0x7222945c = null;
    _0x0863efd5('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x0863efd5(('Error: ' + err.message), 'error');
  } finally {
    _0x0e35bcbe.textContent = '💾 Save Logo & Favicon';
    _0x0e35bcbe.disabled = false;
  }
}
function _0x10593de2() {
  const _0xea0c63a1 = document.getElementById('loading-logo-img');
  const _0x7563cf1d = document.getElementById('loading-logo-text');
  if (_0x06b1f34f.logoData) {
    if (_0x7563cf1d) _0x7563cf1d.style.display = 'none';
    if (_0xea0c63a1) {
      _0xea0c63a1.style.display = 'block';
      _0xea0c63a1.src = _0x06b1f34f.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x06b1f34f.logoData);
    } catch (e) {}
  } else {
    if (_0xea0c63a1) _0xea0c63a1.style.display = 'none';
    if (_0x7563cf1d) _0x7563cf1d.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0x06b1f34f.faviconData) {
    let _0x14232d16 = document.querySelector('link[rel="icon"]');
    if (!_0x14232d16) {
      _0x14232d16 = document.createElement('link');
      _0x14232d16.rel = 'icon';
      document.head.appendChild(_0x14232d16);
    }
    _0x14232d16.href = _0x06b1f34f.faviconData;
  }
}
async function _0x737b7e24() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0x26d4865d();
  _0x06b1f34f.logoData = null;
  const {
    error
  } = await _0x549d8906.from('mv_site').upsert({
    id: 1,
    data: _0x06b1f34f
  });
  if (error) {
    _0x0863efd5(('Error: ' + error.message), 'error');
    return;
  }
  _0x10593de2();
  const _0xc0e5cd4e = _0xc575df90('logo-preview'),
    _0x0702f769 = _0xc575df90('logo-preview-img');
  if (_0xc0e5cd4e) _0xc0e5cd4e.style.display = 'none';
  if (_0x0702f769) _0x0702f769.src = '';
  _0x0863efd5('Logo dihapus! ✓', 'success');
}
function _0xc6840202() {
  const _0x1a40b5b7 = _0x06b1f34f;
  if ((!_0x1a40b5b7 || !Object.keys(_0x1a40b5b7).length)) return;
  if (_0x1a40b5b7.colors) _0x67f29946(_0x1a40b5b7.colors);
  _0x10593de2();
  const _0xa59900f2 = ((_0x1a40b5b7.siteTitle || _0x1a40b5b7.brand) || 'MV Portfolio');
  document.title = _0xa59900f2;
  if (_0xc575df90('page-title')) _0xc575df90('page-title').textContent = _0xa59900f2;
  if ((_0x1a40b5b7.brand && (typeof _0x1a40b5b7.brand === 'string'))) {
    _0xc575df90('nav-brand').innerHTML = _0x1a40b5b7.brand.replace('.', '<span>.</span>');
    _0xc575df90('footer-brand').innerHTML = _0x1a40b5b7.brand.replace('.', '<span>.</span>');
  }
  _0xb29e38c4('hero-label', _0x1a40b5b7.label);
  _0xb29e38c4('hero-sub', _0x1a40b5b7.hsub);
  _0xb29e38c4('about-p1', _0x1a40b5b7.about1);
  _0xb29e38c4('about-p2', _0x1a40b5b7.about2);
  _0xb29e38c4('footer-copy', _0x1a40b5b7.copy);
  if ((_0x1a40b5b7.htitle && (typeof _0x1a40b5b7.htitle === 'string'))) {
    const _0x62f413b9 = _0x1a40b5b7.htitle.split('|');
    _0xc575df90('hero-title').innerHTML = _0x62f413b9.map((_0x5fe5eb30, _0x7ab3bc8e) => (_0x7ab3bc8e === 0) ? _0x5fe5eb30 : (_0x7ab3bc8e === 1) ? `<span class="accent">${_0x5fe5eb30}</span>` : `<span class="stroke">${_0x5fe5eb30}</span>`).join('<br>');
  }
  const _0xb54af11f = [{
    key: 'yt',
    label: 'YouTube',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>',
    primary: true
  }, {
    key: 'tw',
    label: 'Twitter/X',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    primary: false
  }, {
    key: 'discord',
    label: 'Discord',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.003.024.015.046.033.06a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
    primary: false
  }, {
    key: 'vgen',
    label: 'VGen',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    primary: false
  }, {
    key: 'ig',
    label: 'Instagram',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    primary: false
  }, {
    key: 'tiktok',
    label: 'TikTok',
    icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>',
    primary: false
  }];
  const _0x6d9f0544 = _0xc575df90('about-social-btns'),
    _0xa523e6fb = _0xc575df90('footer-social-links');
  if (_0x6d9f0544) _0x6d9f0544.innerHTML = _0xb54af11f.filter(_0xac0258c8 => _0x1a40b5b7[_0xac0258c8.key]).map(_0x1f70322c => `<a href="${_0x1a40b5b7[_0x1f70322c.key]}" target="_blank" class="btn ${_0x1f70322c.primary ? 'btn-primary' : 'btn-ghost'}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${_0x1f70322c.icon} ${_0x1f70322c.label}</a>`).join('');
  if (_0xa523e6fb) _0xa523e6fb.innerHTML = _0xb54af11f.filter(_0x8d08b47c => _0x1a40b5b7[_0x8d08b47c.key]).map(_0x5d7c059d => `<a href="${_0x1a40b5b7[_0x5d7c059d.key]}" target="_blank">${_0x5d7c059d.label}</a>`).join('');
}
function _0x6cd66778() {
  const _0x49e888f0 = _0x06b1f34f;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x87766144 => {
    if (_0xc575df90(('s-' + _0x87766144))) _0xc575df90(('s-' + _0x87766144)).value = (_0x49e888f0[_0x87766144] || '');
  });
  if (_0xc575df90('s-perpage')) _0xc575df90('s-perpage').value = (_0x49e888f0.perPage || 12);
  const _0xaa9fdac7 = (_0x49e888f0.displayMode || 'all'),
    _0x5d2dcae1 = _0xc575df90(('dm-' + _0xaa9fdac7));
  if (_0x5d2dcae1) _0x5d2dcae1.checked = true;
}
function _0x843f18e6(_0x819762b0) {
  _0x06b1f34f.displayMode = _0x819762b0;
  _0x0635810d(true);
}
async function _0xb915d378() {
  const _0xd2b0c9d3 = document.querySelector('input[name="display-mode"]:checked');
  _0x06b1f34f = {
    brand: _0xc575df90('s-brand').value,
    siteTitle: _0xc575df90('s-siteTitle').value,
    label: _0xc575df90('s-label').value,
    htitle: _0xc575df90('s-htitle').value,
    hsub: _0xc575df90('s-hsub').value,
    about1: _0xc575df90('s-about1').value,
    about2: _0xc575df90('s-about2').value,
    yt: _0xc575df90('s-yt').value,
    tw: _0xc575df90('s-tw').value,
    discord: _0xc575df90('s-discord').value,
    vgen: _0xc575df90('s-vgen').value,
    ig: _0xc575df90('s-ig').value,
    tiktok: _0xc575df90('s-tiktok').value,
    copy: _0xc575df90('s-copy').value,
    year: _0xc575df90('s-year').value,
    displayMode: _0xd2b0c9d3 ? _0xd2b0c9d3.value : 'all',
    perPage: (parseInt(_0xc575df90('s-perpage')?.value) || 12),
    colors: _0x06b1f34f.colors,
    logoData: _0x06b1f34f.logoData,
    faviconData: _0x06b1f34f.faviconData
  };
  const _0xe3ea6b0f = _0xc575df90('site-save-btn');
  _0xe3ea6b0f.textContent = 'Saving...';
  _0xe3ea6b0f.disabled = true;
  _0x26d4865d();
  try {
    const {
      error
    } = await _0x549d8906.from('mv_site').upsert({
      id: 1,
      data: _0x06b1f34f
    });
    if (error) throw error;
    _0xc6840202();
    _0x5efca1d9();
    _0x0635810d(true);
    _0x0863efd5('Site info saved! ✓', 'success');
  } catch (err) {
    _0x0863efd5(('Error: ' + err.message), 'error');
  } finally {
    _0xe3ea6b0f.textContent = 'Simpan Info Site →';
    _0xe3ea6b0f.disabled = false;
  }
}
function _0x971d434b() {
  const _0xa9c147b9 = _0xc575df90('site-edit-panel');
  if (_0xa9c147b9) _0xa9c147b9.classList.remove('open');
}
async function _0x9d1f7346() {
  const _0x4bb150fe = _0xc575df90('logo-upload'),
    _0x6a354b78 = _0xc575df90('favicon-upload');
  if (_0x4bb150fe) _0x4bb150fe.value = '';
  if (_0x6a354b78) _0x6a354b78.value = '';
  document.body.classList.add('loading');
  _0xd51bcb03(15, 'Connecting...');
  _0x549d8906 = window.supabase.createClient(_0x06d333dd, _0xd0aa6008);
  _0xd51bcb03(35, 'Loading site info...');
  await _0x18159b2d();
  _0xd51bcb03(60, 'Loading works...');
  await _0x18a5f773();
  _0xd51bcb03(75, 'Preloading previews...');
  await _0x6ca778e4();
  _0xd51bcb03(90, 'Almost there...');
  _0x549d8906.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x18a5f773).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x18159b2d).subscribe();
  setTimeout(() => {
    _0xd51bcb03(100, 'Ready!');
    setTimeout(() => {
      _0x37307395();
      _0xbdcfe49a();
      if (_0xdaedd2b1()) _0xc575df90('jkw-jk').classList.add('open');
    }, 300);
  }, 200);
}
_0x9d1f7346();
