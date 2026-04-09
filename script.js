const _0x2bf37433 = _0x758c1fbf => atob(_0x758c1fbf);
const _0x245ceaf4 = _0x2bf37433('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x1420908b = _0x2bf37433('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x34820209 = _0x2bf37433('YWRt');
const _0x16b7586c = _0x2bf37433('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x3de1843f = ((60 * 60) * 1000);
let _0x9b255160,
  _0x2cb1fd14 = [],
  _0xdb10c6d8 = {},
  _0xce9a9871 = 'all',
  _0x98ee791a = null,
  _0xeee42d70 = 1,
  _0x8630b5df = 0;
let _0xd23ab175 = (() => {
  try {
    const _0x1a61969c = localStorage.getItem('mv_autoplay');
    return (_0x1a61969c === null) ? true : (_0x1a61969c === '1');
  } catch {
    return true;
  }
})();
function _0xcd0c2409() {
  _0xd23ab175 = !_0xd23ab175;
  try {
    localStorage.setItem('mv_autoplay', _0xd23ab175 ? '1' : '0');
  } catch {}
  _0x9cd64696();
  if (_0xd23ab175) {
    _0x4c364dac();
    _0x46eeb8eb();
  } else {
    _0x569dc40c();
  }
}
function _0x9cd64696() {
  const _0xcc7e6f3a = _0x60aa79c6('autoplay-toggle'),
    label = _0x60aa79c6('autoplay-label');
  if (!_0xcc7e6f3a) return;
  if (_0xd23ab175) {
    _0xcc7e6f3a.classList.add('active');
    if (label) label.textContent = 'Autoplay';
    _0xcc7e6f3a.title = 'Autoplay ON — click to turn off';
  } else {
    _0xcc7e6f3a.classList.remove('active');
    if (label) label.textContent = 'Autoplay';
    _0xcc7e6f3a.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x569dc40c() {
  document.querySelectorAll("._c4312aa7b.featured-autoplay").forEach(_0xc888eaa4 => {
    const _0x61d691ff = _0xc888eaa4.querySelector('.mv-preview-iframe');
    if (_0x61d691ff) _0x61d691ff.remove();
    _0xc888eaa4.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x6d61710c.forEach(_0x8ace7a46 => _0x8ace7a46.remove());
  _0x6d61710c.clear();
}
const _0x6d61710c = new Map();
function _0x0acb0dda() {
  const _0x2cb4f496 = 5000;
  if (!_0xd23ab175) return Promise.resolve();
  const _0x338f242b = _0x2cb1fd14.filter(_0xb3d48559 => (_0xb3d48559.featured && _0xb3d48559.ytId));
  if (!_0x338f242b.length) return Promise.resolve();
  const _0x186c7930 = _0x338f242b.map(_0x85a4c85b => {
    if (_0x6d61710c.has(_0x85a4c85b.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const _0x32c0f55d = document.createElement('iframe');
      _0x32c0f55d.allow = 'autoplay';
      _0x32c0f55d.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      _0x32c0f55d.src = `https://www.youtube.com/embed/${_0x85a4c85b.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${_0x85a4c85b.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0xa5edfc24 = () => {
        _0x32c0f55d._mvReady = true;
        resolve();
      };
      _0x32c0f55d.onload = _0xa5edfc24;
      const _0x9b439c18 = setTimeout(_0xa5edfc24, _0x2cb4f496);
      _0x32c0f55d.onload = () => {
        clearTimeout(_0x9b439c18);
        _0x32c0f55d._mvReady = true;
        resolve();
      };
      document.body.appendChild(_0x32c0f55d);
      _0x6d61710c.set(_0x85a4c85b.ytId, _0x32c0f55d);
    });
  });
  return Promise.race([Promise.all(_0x186c7930), new Promise(_0xffd45b81 => setTimeout(_0xffd45b81, _0x2cb4f496))]);
}
function _0xe601bf04() {
  try {
    const _0x44ade4ba = JSON.parse((sessionStorage.getItem(_0x16b7586c) || 'null'));
    if (!_0x44ade4ba) return false;
    if (((Date.now() - _0x44ade4ba.ts) > _0x3de1843f)) {
      sessionStorage.removeItem(_0x16b7586c);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x89804e55(_0x21f19bd9) {
  if (_0x21f19bd9) sessionStorage.setItem(_0x16b7586c, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0x16b7586c);
}
function _0xb6498e3b() {
  if (_0xe601bf04()) _0x89804e55(true);
}
setInterval(() => {
  if ((!_0xe601bf04() && _0x60aa79c6('admin-panel')?.classList.contains('open'))) {
    _0x60aa79c6('admin-panel').classList.remove('open');
    _0x942d33b2('Admin session expired. Type "adm" to log in again.', 'error');
  }
}, (60 * 1000));
function _0xf1a3f2cb() {
  document.getElementById('admin-panel').classList.remove('open');
  _0x9b255160.auth.signOut();
  _0x89804e55(false);
}
let _0x7a1acc7b = '';
document.addEventListener('keydown', _0x860ec01a => {
  if (['INPUT', 'TEXTAREA'].includes(_0x860ec01a.target.tagName)) return;
  if ((_0x860ec01a.key === 'Escape')) {
    _0xa7a9f645();
    _0xda5ee5c5();
    _0xf1a3f2cb();
    _0x60aa79c6('pw-modal').style.display = 'none';
    return;
  }
  _0x7a1acc7b += _0x860ec01a.key.toLowerCase();
  if ((_0x7a1acc7b.length > _0x34820209.length)) _0x7a1acc7b = _0x7a1acc7b.slice(-_0x34820209.length);
  if ((_0x7a1acc7b === _0x34820209)) {
    _0x7a1acc7b = '';
    _0x9d3a9ed8();
  }
});
function _0xa891d0a8(name, _0xf1c511bd) {
  document.querySelectorAll("._c3f474256").forEach(_0xf0da5b52 => _0xf0da5b52.classList.remove('active'));
  document.querySelectorAll("._c98be356c").forEach(_0x0185f601 => _0x0185f601.classList.remove('active'));
  _0xf1c511bd.classList.add('active');
  _0x60aa79c6(('tab-' + name)).classList.add('active');
  if ((name === 'list')) _0x8ca85b2a();
  if ((name === 'site')) _0xee3424e1();
  if ((name === 'design')) _0x07ff52fd();
}
function _0x9d3a9ed8() {
  if (_0xe601bf04()) {
    _0xb6498e3b();
    _0x60aa79c6('admin-panel').classList.toggle('open');
    return;
  }
  _0x60aa79c6('pw-error').style.display = 'none';
  _0x60aa79c6('pw-email').value = '';
  _0x60aa79c6('pw-input').value = '';
  _0x60aa79c6('pw-btn').disabled = false;
  try {
    const _0xb8d2ea48 = JSON.parse((sessionStorage.getItem(_0x2bf37433('bG9ja291dA==')) || 'null'));
    if ((_0xb8d2ea48 && (Date.now() < _0xb8d2ea48.until))) {
      const _0x00f4ee4a = Math.ceil(((_0xb8d2ea48.until - Date.now()) / 60000));
      _0x60aa79c6('pw-error').style.display = 'block';
      _0x60aa79c6('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0x00f4ee4a} min.`;
      _0x60aa79c6('pw-btn').disabled = true;
    }
  } catch (e) {}
  _0x60aa79c6('pw-modal').style.display = 'flex';
  setTimeout(() => _0x60aa79c6('pw-email').focus(), 100);
}
async function _0x1ee0454d() {
  const _0xaa2c3b67 = 5,
    _0x4516bf70 = ((15 * 60) * 1000),
    now = Date.now();
  const _0x91332534 = _0x2bf37433('bG9ja291dA=='),
    _0x04568da0 = _0x2bf37433('YXR0ZW1wdHM=');
  try {
    const _0x202cd56a = JSON.parse((sessionStorage.getItem(_0x91332534) || 'null'));
    if ((_0x202cd56a && (now < _0x202cd56a.until))) {
      const _0xa9aee51a = Math.ceil(((_0x202cd56a.until - now) / 60000));
      _0x60aa79c6('pw-error').style.display = 'block';
      _0x60aa79c6('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0xa9aee51a} min.`;
      _0x60aa79c6('pw-btn').disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0x60aa79c6('pw-email').value.trim(),
    _0x8c24560a = _0x60aa79c6('pw-input').value;
  if ((!email || !_0x8c24560a)) {
    _0x60aa79c6('pw-error').style.display = 'block';
    _0x60aa79c6('pw-error').textContent = '❌ Please enter email and password.';
    return;
  }
  const _0xd3141bec = _0x60aa79c6('pw-btn');
  _0xd3141bec.textContent = 'Signing in...';
  _0xd3141bec.disabled = true;
  try {
    const {
      data,
      error
    } = await _0x9b255160.auth.signInWithPassword({
      email,
      password: _0x8c24560a
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0x04568da0);
    sessionStorage.removeItem(_0x91332534);
    _0x89804e55(true);
    _0x60aa79c6('pw-modal').style.display = 'none';
    _0x60aa79c6('admin-panel').classList.add('open');
    _0x942d33b2('Welcome back! ✓', 'success');
  } catch (e) {
    let _0xd150eb1b = 0;
    try {
      _0xd150eb1b = parseInt((sessionStorage.getItem(_0x04568da0) || '0'));
    } catch (e) {}
    _0xd150eb1b++;
    sessionStorage.setItem(_0x04568da0, _0xd150eb1b);
    const _0x1c97a63d = (_0xaa2c3b67 - _0xd150eb1b);
    if ((_0xd150eb1b >= _0xaa2c3b67)) {
      sessionStorage.setItem(_0x91332534, JSON.stringify({
        until: (now + _0x4516bf70)
      }));
      sessionStorage.removeItem(_0x04568da0);
      _0x60aa79c6('pw-error').style.display = 'block';
      _0x60aa79c6('pw-error').textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      _0xd3141bec.disabled = true;
    } else {
      _0x60aa79c6('pw-error').style.display = 'block';
      _0x60aa79c6('pw-error').textContent = `❌ Wrong credentials. ${_0x1c97a63d} attempt${(_0x1c97a63d > 1) ? 's' : ''} left.`;
      _0xd3141bec.disabled = false;
    }
    _0x60aa79c6('pw-input').value = '';
    _0x60aa79c6('pw-input').focus();
  }
  _0xd3141bec.textContent = 'Sign In →';
}
function _0xb01970fb(_0x2c178901, text) {
  const _0x6460e9f0 = _0x60aa79c6('loading-bar'),
    _0x017e7a92 = _0x60aa79c6('loading-text');
  if (_0x6460e9f0) _0x6460e9f0.style.width = (_0x2c178901 + '%');
  if ((_0x017e7a92 && text)) _0x017e7a92.textContent = text;
}
function _0xa14f3588() {
  const _0x323e1923 = _0x60aa79c6('loading-screen');
  if (!_0x323e1923) return;
  _0x323e1923.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0xa8fdb276() {
  const {
    data,
    error
  } = await _0x9b255160.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0x2cb1fd14 = (data || []);
  _0x3491127c(true);
  _0xa2be75af();
  _0x30cae196();
  _0xf778e7a0();
  if (_0x60aa79c6('tab-list')?.classList.contains('active')) _0x8ca85b2a();
}
async function _0x185a8705() {
  const {
    data
  } = await _0x9b255160.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0xdb10c6d8 = data.data;
    if (_0xdb10c6d8.logoData) {
      await new Promise(resolve => {
        const _0x9b6a4256 = new Image();
        _0x9b6a4256.onload = resolve;
        _0x9b6a4256.onerror = resolve;
        _0x9b6a4256.src = _0xdb10c6d8.logoData;
      });
    }
    _0x4c0393bd();
    _0x30cae196();
  }
}
function _0x60aa79c6(id) {
  return document.getElementById(id);
}
function _0x6aab8122(id, _0x2180c856) {
  if ((_0x2180c856 && _0x60aa79c6(id))) _0x60aa79c6(id).textContent = _0x2180c856;
}
function _0xcb4c3d00(_0x70abe334) {
  return String((_0x70abe334 || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0x779efb98(_0xfb96d5f8) {
  if ((!_0xfb96d5f8 || (typeof _0xfb96d5f8 !== 'string'))) return null;
  const _0xda34d2ab = (_0xfb96d5f8.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || _0xfb96d5f8.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0xda34d2ab ? _0xda34d2ab[1] : null;
}
let _0x97bf156b;
function _0x942d33b2(_0xea361dd2, type = '') {
  const _0xd12b2f5d = _0x60aa79c6('toast');
  _0xd12b2f5d.textContent = _0xea361dd2;
  _0xd12b2f5d.className = `toast ${type} show`;
  clearTimeout(_0x97bf156b);
  _0x97bf156b = setTimeout(() => _0xd12b2f5d.classList.remove('show'), 3200);
}
function _0xdf0943c7(id) {
  const _0x86447d10 = (_0x60aa79c6(id).value || '');
  return _0x86447d10.split(',').map(_0x77f0705d => _0x77f0705d.trim()).filter(Boolean);
}
function _0x2e276dbe(id, _0x515e6610) {
  _0x60aa79c6(id).value = _0x515e6610.join(', ');
}
function _0x5130b65c(_0x22d98845, _0x848fd5ee, _0x88e8565c) {
  _0xb6498e3b();
  let tags = _0xdf0943c7(_0x22d98845);
  if (tags.includes(_0x848fd5ee)) {
    tags = tags.filter(_0x8a51ed0b => (_0x8a51ed0b !== _0x848fd5ee));
    _0x88e8565c.classList.remove('active');
  } else {
    tags.push(_0x848fd5ee);
    _0x88e8565c.classList.add('active');
  }
  _0x2e276dbe(_0x22d98845, tags);
}
function _0x079d7c0a(_0xcd182e80, _0x3ab833e0) {
  const tags = _0xdf0943c7(_0xcd182e80),
    _0xc2f67269 = _0x60aa79c6(_0x3ab833e0);
  if (!_0xc2f67269) return;
  _0xc2f67269.querySelectorAll("._cc278cacc").forEach(_0xd9228442 => {
    _0xd9228442.classList.toggle('active', tags.includes(_0xd9228442.textContent.trim()));
  });
}
function _0xa8fe3b65(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x8f0cc1fd(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xf778e7a0() {
  const _0x3da5588b = _0x2cb1fd14.map(_0x19ea2fa6 => (_0x19ea2fa6.thumb || (_0x19ea2fa6.ytId ? _0x8f0cc1fd(_0x19ea2fa6.ytId) : null))).filter(Boolean);
  if ((_0x3da5588b.length < 2)) return;
  const _0x464b54c3 = (_0x3b07d2c9, min) => {
    let _0x69229c28 = [..._0x3b07d2c9];
    while ((_0x69229c28.length < min)) _0x69229c28 = [..._0x69229c28, ..._0x3b07d2c9];
    return _0x69229c28;
  };
  const _0x3ad42cd1 = [{
    id: 'hero-row-1',
    items: _0x464b54c3(_0x3da5588b, 20),
    dir: 'left',
    speed: 60
  }, {
    id: 'hero-row-2',
    items: _0x464b54c3([..._0x3da5588b].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: 'hero-row-3',
    items: _0x464b54c3(_0x3da5588b.slice(Math.floor((_0x3da5588b.length / 2))).concat(_0x3da5588b.slice(0, Math.floor((_0x3da5588b.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0x3ad42cd1.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0x5aa77012 = _0x60aa79c6(id);
    if (!_0x5aa77012) return;
    const all = [...items, ...items];
    _0x5aa77012.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0x8fdddbde = (items.length * (speed / 20));
      _0x5aa77012.style.animationDuration = `${_0x8fdddbde}s`;
      if ((dir === 'right')) {
        _0x5aa77012.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const _0xbaa470df = _0x60aa79c6('hero-track-wrap');
    if (_0xbaa470df) _0xbaa470df.classList.add('visible');
  }, 400);
}
function _0xfc1a5d91(_0xe009934c) {
  const thumb = (_0xe009934c.thumb || (_0xe009934c.ytId ? _0xa8fe3b65(_0xe009934c.ytId) : ''));
  const _0x269f7874 = _0xe009934c.ytId ? _0x8f0cc1fd(_0xe009934c.ytId) : '';
  const tags = (_0xe009934c.tags || []).map(_0xd39b1c29 => `<span class="mv-tag">${_0xcb4c3d00(_0xd39b1c29)}</span>`).join('');
  const _0x1bc3abdd = !!_0xe009934c.ytId;
  const _0x88db7080 = !!_0xe009934c.featured;
  const _0x88b55636 = (_0x1bc3abdd && !_0x88db7080) ? `onmouseenter="startPreview(this,'${_0xe009934c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="mv-card${_0x88db7080 ? ' featured' : ''}" 
        data-id="${_0xe009934c.id}" 
        data-ytid="${(_0xe009934c.ytId || '')}"
        onclick="openModal('${_0xe009934c.id}')"
        ${_0x88b55636}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0xcb4c3d00(_0xe009934c.title)}" loading="lazy" onerror="this.src='${_0x269f7874}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0xcb4c3d00(_0xe009934c.title)}</div><div class="mv-artist">${_0xcb4c3d00((_0xe009934c.artist || ''))}</div></div></div>
</div>`;
}
function _0x1cf04057() {
  return (_0xdb10c6d8.displayMode || 'all');
}
function _0x162acb74() {
  return (parseInt(_0xdb10c6d8.perPage) || 12);
}
function _0x3491127c(_0x59012af7) {
  if (_0x59012af7) {
    _0xeee42d70 = 1;
    _0x8630b5df = 0;
  }
  const _0x10a540fa = _0x60aa79c6('mv-grid'),
    _0x49c27c00 = _0x1cf04057(),
    perPage = _0x162acb74();
  const _0xe504b577 = (_0xce9a9871 === 'all') ? _0x2cb1fd14 : _0x2cb1fd14.filter(_0xd6d856f3 => (_0xd6d856f3.tags || []).includes(_0xce9a9871));
  _0x60aa79c6('works-count').textContent = String(_0xe504b577.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const _0xebeb89af = _0x60aa79c6(id);
    if (_0xebeb89af) _0xebeb89af.remove();
  });
  if (!_0xe504b577.length) {
    _0x10a540fa.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0x49c27c00 === 'pagination')) {
    const _0xa40eb331 = Math.ceil((_0xe504b577.length / perPage));
    _0xeee42d70 = Math.min(_0xeee42d70, _0xa40eb331);
    const slice = _0xe504b577.slice(((_0xeee42d70 - 1) * perPage), (_0xeee42d70 * perPage));
    _0x10a540fa.innerHTML = slice.map(_0xfc1a5d91).join('');
    if ((_0xa40eb331 > 1)) {
      const _0x7a181c6b = document.createElement('div');
      _0x7a181c6b.id = 'mv-pagination';
      _0x7a181c6b.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x41eaa33f = 1; (_0x41eaa33f <= _0xa40eb331); _0x41eaa33f++) {
        const _0xd3417bd0 = document.createElement('button');
        _0xd3417bd0.textContent = _0x41eaa33f;
        _0xd3417bd0.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x41eaa33f === _0xeee42d70) ? 'var(--accent)' : 'transparent'};color:${(_0x41eaa33f === _0xeee42d70) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        _0xd3417bd0.onclick = () => {
          _0xeee42d70 = _0x41eaa33f;
          _0x3491127c(false);
          window.scrollTo({
            top: (_0x60aa79c6('works').offsetTop - 80),
            behavior: 'smooth'
          });
        };
        _0x7a181c6b.appendChild(_0xd3417bd0);
      }
      _0x10a540fa.appendChild(_0x7a181c6b);
    }
  } else if ((_0x49c27c00 === 'loadmore')) {
    if (_0x59012af7) _0x8630b5df = perPage;else _0x8630b5df = Math.max(_0x8630b5df, perPage);
    const slice = _0xe504b577.slice(0, _0x8630b5df);
    _0x10a540fa.innerHTML = slice.map(_0xfc1a5d91).join('');
    if ((_0x8630b5df < _0xe504b577.length)) {
      const _0x176be70b = (_0xe504b577.length - _0x8630b5df);
      const _0x6dcf1f53 = document.createElement('button');
      _0x6dcf1f53.id = 'mv-loadmore-btn';
      _0x6dcf1f53.textContent = `Load More (${_0x176be70b} more)`;
      _0x6dcf1f53.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      _0x6dcf1f53.onmouseenter = () => _0x6dcf1f53.style.background = 'rgba(200,255,0,.08)';
      _0x6dcf1f53.onmouseleave = () => _0x6dcf1f53.style.background = 'transparent';
      _0x6dcf1f53.onclick = () => {
        _0x8630b5df += perPage;
        _0x3491127c(false);
      };
      _0x10a540fa.appendChild(_0x6dcf1f53);
    }
  } else {
    _0x10a540fa.innerHTML = _0xe504b577.map(_0xfc1a5d91).join('');
  }
  requestAnimationFrame(() => _0x4c364dac());
}
function _0xa2be75af() {
  const tags = new Set();
  _0x2cb1fd14.forEach(_0xcb1a4e08 => (_0xcb1a4e08.tags || []).forEach(_0xcc54234b => tags.add(_0xcc54234b)));
  _0x60aa79c6('filter-bar').innerHTML = (`<button class="filter-btn${(_0xce9a9871 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(_0x0e8c7013 => `<button class="filter-btn${(_0xce9a9871 === _0x0e8c7013) ? ' active' : ''}" onclick="filterCards('${_0xcb4c3d00(_0x0e8c7013)}',this)">${_0xcb4c3d00(_0x0e8c7013)}</button>`).join(''));
}
function _0x486a0315(_0x4d11a617, _0x98ceff3a) {
  _0xce9a9871 = _0x4d11a617;
  document.querySelectorAll("._c3aafba08").forEach(_0x02b9fbae => _0x02b9fbae.classList.remove('active'));
  _0x98ceff3a.classList.add('active');
  _0x3491127c(true);
}
function _0x4c364dac() {
  if (!_0xd23ab175) return;
  const _0xcab04107 = document.querySelectorAll("._c4312aa7b.featured");
  _0xcab04107.forEach(_0xfc1da6f4 => {
    const ytId = _0xfc1da6f4.dataset.ytid;
    if (!ytId) return;
    if (_0xfc1da6f4.classList.contains('previewing')) return;
    const _0x3ad65418 = _0x6d61710c.get(ytId);
    if (_0x3ad65418) {
      _0x3ad65418.removeAttribute('style');
      _0x3ad65418.className = 'mv-preview-iframe';
      _0xfc1da6f4.insertBefore(_0x3ad65418, _0xfc1da6f4.firstChild);
      _0xfc1da6f4.classList.add('previewing', 'featured-autoplay');
      if (_0x3ad65418.contentWindow) {
        if (_0x3ad65418._mvReady) {
          _0xfc1da6f4.classList.add('preview-ready');
        } else {
          _0x3ad65418.onload = () => {
            _0x3ad65418._mvReady = true;
            _0xfc1da6f4.classList.add('preview-ready');
          };
        }
      }
      _0x6d61710c.delete(ytId);
    } else {
      _0x45a37b06(_0xfc1da6f4, ytId);
    }
  });
}
function _0x45a37b06(_0x2b2e10a8, ytId) {
  if (!_0xd23ab175) return;
  if (_0x2b2e10a8.classList.contains('previewing')) return;
  _0x2b2e10a8.classList.add('previewing', 'featured-autoplay');
  const _0x1bcd0cea = document.createElement('iframe');
  _0x1bcd0cea.className = 'mv-preview-iframe';
  _0x1bcd0cea.allow = 'autoplay';
  _0x1bcd0cea.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
  _0x1bcd0cea.onload = () => {
    _0x1bcd0cea._mvReady = true;
    _0x2b2e10a8.classList.add('preview-ready');
  };
  _0x2b2e10a8.insertBefore(_0x1bcd0cea, _0x2b2e10a8.firstChild);
}
function _0x46eeb8eb() {
  const _0x25dd00f1 = document.querySelectorAll("._c4312aa7b.featured");
  _0x25dd00f1.forEach(_0x5719ac67 => {
    const ytId = _0x5719ac67.dataset.ytid;
    if (!ytId) return;
    if (_0x5719ac67.classList.contains('previewing')) return;
    _0x45a37b06(_0x5719ac67, ytId);
  });
}
let _0x4ee7a477 = null;
function _0x8ca85b2a() {
  const _0xba2deef0 = _0x60aa79c6('existing-list');
  if (!_0x2cb1fd14.length) {
    _0xba2deef0.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0x4ee7a477) {
      _0x4ee7a477.destroy();
      _0x4ee7a477 = null;
    }
    return;
  }
  _0xba2deef0.innerHTML = _0x2cb1fd14.map(_0xfc7b1195 => {
    const thumb = (_0xfc7b1195.thumb || (_0xfc7b1195.ytId ? _0xa8fe3b65(_0xfc7b1195.ytId) : ''));
    const _0x8c00ed94 = _0xfc7b1195.ytId ? _0x8f0cc1fd(_0xfc7b1195.ytId) : '';
    return `<div class="existing-item" id="item-${_0xfc7b1195.id}" data-id="${_0xfc7b1195.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${_0x8c00ed94}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0xcb4c3d00(_0xfc7b1195.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${_0xfc7b1195.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${_0xfc7b1195.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${_0xfc7b1195.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${_0xfc7b1195.id}" value="${_0xcb4c3d00((_0xfc7b1195.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${_0xfc7b1195.id}" value="${_0xcb4c3d00(_0xfc7b1195.title)}">
<label>Artist</label><input type="text" id="e-artist-${_0xfc7b1195.id}" value="${_0xcb4c3d00((_0xfc7b1195.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="tag-presets" id="edit-tag-presets-${_0xfc7b1195.id}">
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0xfc7b1195.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0xfc7b1195.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0xfc7b1195.id}','Complex',this)">Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0xfc7b1195.id}','Debut',this)">Debut</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${_0xfc7b1195.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${_0xfc7b1195.id}" value="${_0xcb4c3d00((_0xfc7b1195.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${_0xfc7b1195.id}','edit-tag-presets-${_0xfc7b1195.id}')" onfocus="syncPresetHighlight('e-tags-${_0xfc7b1195.id}','edit-tag-presets-${_0xfc7b1195.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${_0xfc7b1195.id}" value="${_0xcb4c3d00((_0xfc7b1195.thumb || ''))}">
<div class="checkbox-row" style="margin:6px 0"><input type="checkbox" id="e-feat-${_0xfc7b1195.id}" ${_0xfc7b1195.featured ? 'checked' : ''}><label for="e-feat-${_0xfc7b1195.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${_0xfc7b1195.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${_0xfc7b1195.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0x4ee7a477) {
    _0x4ee7a477.destroy();
    _0x4ee7a477 = null;
  }
  _0x4ee7a477 = Sortable.create(_0xba2deef0, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0x339b9087 => {
      if ((_0x339b9087.oldIndex === _0x339b9087.newIndex)) return;
      const _0x23490139 = _0x2cb1fd14.splice(_0x339b9087.oldIndex, 1);
      _0x2cb1fd14.splice(_0x339b9087.newIndex, 0, _0x23490139);
      let _0xaa1bb974 = _0x60aa79c6('sort-saving');
      if (!_0xaa1bb974) {
        _0xaa1bb974 = document.createElement('div');
        _0xaa1bb974.id = 'sort-saving';
        _0xaa1bb974.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xba2deef0.insertAdjacentElement('afterend', _0xaa1bb974);
      }
      _0xaa1bb974.textContent = '⟳ Saving order...';
      await Promise.all(_0x2cb1fd14.map((_0x20d6fb52, _0x05366d1f) => _0x9b255160.from('mv_works').update({
        sort_order: _0x05366d1f
      }).eq('id', _0x20d6fb52.id)));
      _0xaa1bb974.remove();
      _0x942d33b2('Order saved! ✓', 'success');
      _0x3491127c(true);
    }
  });
}
function _0xf14a8ba8(id) {
  const _0x22cf45ad = _0x60aa79c6(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(_0xa2b72ae1 => {
    if ((_0xa2b72ae1.id !== ('edit-' + id))) _0xa2b72ae1.classList.remove('open');
  });
  _0x22cf45ad.classList.toggle('open');
  if (_0x22cf45ad.classList.contains('open')) setTimeout(() => _0x079d7c0a(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function _0xee6c48db(id) {
  const _0xae6ebdc4 = _0x60aa79c6(`e-url-${id}`).value.trim(),
    title = _0x60aa79c6(`e-title-${id}`).value.trim(),
    artist = _0x60aa79c6(`e-artist-${id}`).value.trim();
  const _0x668b904c = _0x60aa79c6(`e-tags-${id}`).value.trim(),
    thumb = _0x60aa79c6(`e-thumb-${id}`).value.trim(),
    _0x3bb9bfe6 = _0x60aa79c6(`e-feat-${id}`).checked;
  if (!title) {
    _0x942d33b2('Title cannot be empty!', 'error');
    return;
  }
  _0xb6498e3b();
  const ytId = ((_0x779efb98(_0xae6ebdc4) || _0xae6ebdc4) || null);
  const tags = _0x668b904c ? _0x668b904c.split(',').map(_0x087a8aaa => _0x087a8aaa.trim()).filter(Boolean) : [];
  const _0xf332eb80 = _0x60aa79c6(`edit-${id}`).querySelector('.inline-save-btn');
  _0xf332eb80.textContent = 'Saving...';
  _0xf332eb80.disabled = true;
  const {
    error
  } = await _0x9b255160.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x3bb9bfe6
  }).eq('id', id);
  _0xf332eb80.textContent = '💾 Save Changes';
  _0xf332eb80.disabled = false;
  if (error) {
    _0x942d33b2(('Error: ' + error.message), 'error');
    return;
  }
  _0x942d33b2('Work updated! ✓', 'success');
  _0xf14a8ba8(id);
}
function _0x30cae196() {
  _0x60aa79c6('stat-mvs').textContent = (_0x2cb1fd14.length || '0');
  const _0xf0a47465 = new Set(_0x2cb1fd14.map(_0x74c0a768 => _0x74c0a768.artist).filter(Boolean));
  _0x60aa79c6('stat-clients').textContent = (_0xf0a47465.size || '0');
  const tags = new Set();
  _0x2cb1fd14.forEach(_0xf8cec0f8 => (_0xf8cec0f8.tags || []).forEach(_0xd75f90b5 => tags.add(_0xd75f90b5)));
  _0x60aa79c6('stat-tags').textContent = (tags.size || '0');
  _0x60aa79c6('stat-year').textContent = (_0xdb10c6d8.year || new Date().getFullYear());
}
async function _0xcee579c2() {
  const _0xaf34636c = _0x60aa79c6('inp-url').value.trim(),
    title = _0x60aa79c6('inp-title').value.trim(),
    artist = _0x60aa79c6('inp-artist').value.trim();
  const _0xb70685ac = _0x60aa79c6('inp-tags').value.trim(),
    thumb = _0x60aa79c6('inp-thumb').value.trim(),
    _0x2375ae76 = _0x60aa79c6('inp-featured').checked;
  if (!title) {
    _0x942d33b2('Title is required!', 'error');
    return;
  }
  _0xb6498e3b();
  const ytId = _0x779efb98(_0xaf34636c);
  const tags = _0xb70685ac ? _0xb70685ac.split(',').map(_0x6e7185f3 => _0x6e7185f3.trim()).filter(Boolean) : [];
  const _0xb399dbfc = _0x60aa79c6('add-btn');
  _0xb399dbfc.disabled = true;
  _0xb399dbfc.textContent = 'Saving...';
  const {
    error
  } = await _0x9b255160.from('mv_works').insert([{
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x2375ae76,
    sort_order: -1
  }]);
  _0xb399dbfc.disabled = false;
  _0xb399dbfc.textContent = '+ Add to Portfolio';
  if (error) {
    _0x942d33b2(('Error: ' + error.message), 'error');
    return;
  }
  _0x942d33b2('Work added! ✓', 'success');
  ['inp-url', 'inp-title', 'inp-artist', 'inp-tags', 'inp-thumb'].forEach(id => _0x60aa79c6(id).value = '');
  _0x60aa79c6('inp-featured').checked = false;
  document.querySelectorAll("#_c5274a0fa ._cc278cacc").forEach(_0x4ee50d25 => _0x4ee50d25.classList.remove('active'));
  _0x2db73eca('', '');
}
async function _0xab8fdc11(id) {
  if (!confirm('Remove this work?')) return;
  _0xb6498e3b();
  const {
    error
  } = await _0x9b255160.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x942d33b2(('Error: ' + error.message), 'error');
    return;
  }
  _0x942d33b2('Work removed', 'success');
}
function _0x27ac5f3c(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const _0xbcf96660 = _0x2cb1fd14.find(_0xe310d8ef => (_0xe310d8ef.id === id));
  if (!_0xbcf96660) return;
  _0x60aa79c6('modal-title').textContent = _0xbcf96660.title;
  _0x60aa79c6('modal-artist').textContent = (_0xbcf96660.artist || '');
  _0x60aa79c6('modal-tags').innerHTML = (_0xbcf96660.tags || []).map(_0x67bd1270 => `<span class="mv-tag">${_0xcb4c3d00(_0x67bd1270)}</span>`).join('');
  _0x60aa79c6('modal-video-wrap').innerHTML = _0xbcf96660.ytId ? `<iframe src="https://www.youtube.com/embed/${_0xbcf96660.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x60aa79c6('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function _0xa7a9f645(_0xdd8c423a) {
  if ((_0xdd8c423a && (_0xdd8c423a.target !== _0x60aa79c6('modal')))) return;
  _0x60aa79c6('modal').classList.remove('open');
  _0x60aa79c6('modal-video-wrap').innerHTML = '';
  document.body.style.overflow = '';
}
function _0xb59caf9e(_0x0cacccc9) {
  clearTimeout(_0x98ee791a);
  const ytId = _0x779efb98(_0x0cacccc9);
  if (!ytId) {
    _0x2db73eca('', '');
    return;
  }
  _0x2db73eca('loading', '⟳ Fetching info...');
  _0x98ee791a = setTimeout(() => _0xf300e693(ytId), 800);
}
async function _0xf300e693(ytId) {
  try {
    const _0xbbcb2888 = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xbbcb2888.ok) throw new Error();
    const data = await _0xbbcb2888.json();
    if (!_0x60aa79c6('inp-title').value.trim()) _0x60aa79c6('inp-title').value = (data.title || '');
    if (!_0x60aa79c6('inp-artist').value.trim()) _0x60aa79c6('inp-artist').value = (data.author_name || '');
    _0x2db73eca('ok', '✓ Info fetched');
  } catch {
    _0x2db73eca('err', '⚠ Could not fetch info');
  }
}
function _0x2db73eca(type, _0xfedb4ed0) {
  const _0x2b7913ef = _0x60aa79c6('fetch-status');
  _0x2b7913ef.textContent = _0xfedb4ed0;
  _0x2b7913ef.className = ('fetch-status' + (type ? (' ' + type) : ''));
}
let _0xa1cff2e8 = null;
function _0x53f70fb2() {
  const _0x19115fd6 = document.body.classList.toggle('edit-mode');
  const _0x24606adc = _0x60aa79c6('edit-mode-bar');
  const _0x338a4c1d = _0x60aa79c6('edit-mode-toggle-btn');
  if (_0x19115fd6) {
    _0x24606adc.classList.add('active');
    _0x338a4c1d.textContent = '✦ Exit Drag Mode';
    _0x338a4c1d.style.background = 'rgba(255,60,172,.1)';
    _0x338a4c1d.style.borderColor = 'rgba(255,60,172,.4)';
    _0x338a4c1d.style.color = 'var(--accent2)';
    _0x60aa79c6('admin-panel').classList.remove('open');
    _0xe75ef155();
  } else {
    _0x5eae9292();
  }
}
function _0x5eae9292() {
  document.body.classList.remove('edit-mode');
  _0x60aa79c6('edit-mode-bar').classList.remove('active');
  const _0x130fe0fc = _0x60aa79c6('edit-mode-toggle-btn');
  if (_0x130fe0fc) {
    _0x130fe0fc.textContent = '✦ Drag Reorder on Page';
    _0x130fe0fc.style.background = 'rgba(200,255,0,.1)';
    _0x130fe0fc.style.borderColor = 'rgba(200,255,0,.3)';
    _0x130fe0fc.style.color = 'var(--accent)';
  }
  if (_0xa1cff2e8) {
    _0xa1cff2e8.destroy();
    _0xa1cff2e8 = null;
  }
}
function _0xe75ef155() {
  const _0xa8d3b6b8 = _0x60aa79c6('mv-grid');
  if (!_0xa8d3b6b8) return;
  if (_0xa1cff2e8) _0xa1cff2e8.destroy();
  _0xa1cff2e8 = Sortable.create(_0xa8d3b6b8, {
    animation: 200,
    draggable: "._c4312aa7b",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: _0x5ca22e26 => {
      if ((_0x5ca22e26.oldIndex === _0x5ca22e26.newIndex)) return;
      const _0xcdfcd872 = _0x2cb1fd14.splice(_0x5ca22e26.oldIndex, 1);
      _0x2cb1fd14.splice(_0x5ca22e26.newIndex, 0, _0xcdfcd872);
      _0x942d33b2('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function _0x2c96237b() {
  _0x942d33b2('Saving order...', '');
  await Promise.all(_0x2cb1fd14.map((_0x68730511, _0xb9d277f9) => _0x9b255160.from('mv_works').update({
    sort_order: _0xb9d277f9
  }).eq('id', _0x68730511.id)));
  _0x942d33b2('Order saved! ✓', 'success');
  _0x5eae9292();
  _0x3491127c(true);
}
let _0xde1d6c1e = null;
let _0xe5540d04 = null;
const _0xc083cff6 = new Map();
function _0xc363f5cc(_0xaf36ad58, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (_0xaf36ad58.classList.contains('featured')) return;
  if (!_0xc083cff6.has(ytId)) {
    const _0xe72bed16 = document.createElement('iframe');
    _0xe72bed16.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0xe72bed16.allow = 'autoplay';
    _0xe72bed16.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0xe72bed16);
    _0xc083cff6.set(ytId, _0xe72bed16);
  }
  _0xde1d6c1e = setTimeout(() => {
    _0xab28aef7(_0xe5540d04);
    _0xe5540d04 = _0xaf36ad58;
    _0xaf36ad58.classList.add('previewing');
    const _0x301092ef = _0xc083cff6.get(ytId);
    if (_0x301092ef) {
      _0x301092ef.removeAttribute('style');
      _0x301092ef.className = 'mv-preview-iframe';
      _0x301092ef.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      _0xaf36ad58.insertBefore(_0x301092ef, _0xaf36ad58.firstChild);
      _0x301092ef.onload = () => _0xaf36ad58.classList.add('preview-ready');
    }
  }, 700);
}
function _0xab28aef7(_0x71aec7d4) {
  clearTimeout(_0xde1d6c1e);
  if (!_0x71aec7d4) return;
  if (_0x71aec7d4.classList.contains('featured-autoplay')) return;
  _0x71aec7d4.classList.remove('previewing', 'preview-ready');
  const _0xa0c14cf3 = _0x71aec7d4.querySelector('.mv-preview-iframe');
  if (_0xa0c14cf3) {
    const ytId = _0x71aec7d4.dataset.ytid;
    _0xa0c14cf3.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    _0xa0c14cf3.className = '';
    if (ytId) _0xa0c14cf3.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    document.body.appendChild(_0xa0c14cf3);
  }
  if ((_0xe5540d04 === _0x71aec7d4)) _0xe5540d04 = null;
}
const _0x7bdf1b54 = {
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
function _0x400a6535(name) {
  const _0x6d9eeeac = _0x7bdf1b54[name];
  if (!_0x6d9eeeac) return;
  Object.entries(_0x6d9eeeac).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x09e1c048 = _0x60aa79c6(('color-' + k));
    if (_0x09e1c048) _0x09e1c048.value = v;
    const _0x264b4284 = _0x60aa79c6((('color-' + k) + '-hex'));
    if (_0x264b4284) _0x264b4284.value = v;
  });
  _0x942d33b2('Preview applied — click Save Colors to keep it', '');
}
function _0x2bc57a08(_0x043fb013, _0x83c67357) {
  document.documentElement.style.setProperty(('--' + _0x043fb013), _0x83c67357);
  const _0x6a564bda = _0x60aa79c6((('color-' + _0x043fb013) + '-hex'));
  if (_0x6a564bda) _0x6a564bda.value = _0x83c67357;
}
function _0xb7a974bb(_0x31aa61d8, _0xcc238893) {
  const _0x840b26f2 = _0xcc238893.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(_0x840b26f2)) {
    document.documentElement.style.setProperty(('--' + _0x31aa61d8), _0x840b26f2);
    const _0x94c455b9 = _0x60aa79c6(('color-' + _0x31aa61d8));
    if (_0x94c455b9) _0x94c455b9.value = _0x840b26f2;
  }
}
async function _0x9488dd07() {
  _0xb6498e3b();
  const colors = {
    text: (_0x60aa79c6('color-text')?.value || '#f0f0f0'),
    accent: _0x60aa79c6('color-accent').value,
    accent2: _0x60aa79c6('color-accent2').value,
    bg: _0x60aa79c6('color-bg').value,
    surface: _0x60aa79c6('color-surface').value
  };
  _0xdb10c6d8.colors = colors;
  const _0x3a4d4673 = _0x60aa79c6('color-save-btn');
  _0x3a4d4673.textContent = 'Saving...';
  _0x3a4d4673.disabled = true;
  try {
    const {
      error
    } = await _0x9b255160.from('mv_site').upsert({
      id: 1,
      data: _0xdb10c6d8
    });
    if (error) throw error;
    _0x942d33b2('Colors saved! ✓', 'success');
  } catch (err) {
    _0x942d33b2(('Error: ' + err.message), 'error');
  } finally {
    _0x3a4d4673.textContent = '💾 Save Colors';
    _0x3a4d4673.disabled = false;
  }
}
function _0xbdbe0826(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x3c26e777 = _0x60aa79c6(('color-' + k));
    if (_0x3c26e777) _0x3c26e777.value = v;
    const _0x1d7af939 = _0x60aa79c6((('color-' + k) + '-hex'));
    if (_0x1d7af939) _0x1d7af939.value = v;
  });
}
function _0x0bb59455() {
  const _0x72981ac8 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0xbdbe0826(_0x72981ac8);
  _0xdb10c6d8.colors = _0x72981ac8;
  _0x942d33b2('Reset to default — click Save Colors to keep it', '');
}
function _0x07ff52fd() {
  if (_0xdb10c6d8.colors) _0xbdbe0826(_0xdb10c6d8.colors);
  if (_0xdb10c6d8.logoData) {
    const _0xe50e251f = _0x60aa79c6('logo-preview');
    const _0xceced257 = _0x60aa79c6('logo-preview-img');
    if ((_0xe50e251f && _0xceced257)) {
      _0xceced257.src = _0xdb10c6d8.logoData;
      _0xe50e251f.style.display = 'block';
    }
  }
}
let _0x87a79158 = null;
let _0xb0c897f2 = null;
function _0xd6001572(_0xd08e812e) {
  if ((_0xd08e812e.type && (_0xd08e812e.type !== ''))) return _0xd08e812e.type;
  const _0x25c47046 = _0xd08e812e.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x25c47046] || 'image/png');
}
function _0x2307afac(_0x59d90abd) {
  return (_0x59d90abd.name.split('.').pop().toLowerCase() || 'png');
}
async function _0xbc54118c(_0xadfcc290, _0xc33559a4) {
  if (!_0xadfcc290) return null;
  const _0x7ac3f627 = _0xd6001572(_0xadfcc290);
  const _0x74dfcf99 = _0x2307afac(_0xadfcc290);
  const _0xd77249b2 = `${_0xc33559a4}/${Date.now()}-${Math.random().toString(36).substring(7)}.${_0x74dfcf99}`;
  const {
    data,
    error
  } = await _0x9b255160.storage.from('portfolio-assets').upload(_0xd77249b2, _0xadfcc290, {
    upsert: true,
    contentType: _0x7ac3f627
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x5ae3e7f2
  } = _0x9b255160.storage.from('portfolio-assets').getPublicUrl(_0xd77249b2);
  return _0x5ae3e7f2.publicUrl;
}
function _0xe972b4c8(_0x9cd9425d) {
  const _0xb224298e = _0x9cd9425d.files[0];
  if (!_0xb224298e) return;
  _0x87a79158 = _0xb224298e;
  const _0x3e17b421 = URL.createObjectURL(_0xb224298e);
  const _0xa248ee5c = _0x60aa79c6('logo-preview'),
    _0xa0eeea78 = _0x60aa79c6('logo-preview-img');
  if ((_0xa248ee5c && _0xa0eeea78)) {
    _0xa0eeea78.src = _0x3e17b421;
    _0xa248ee5c.style.display = 'block';
  }
  _0x942d33b2('Logo selected — click Save Logo & Favicon', '');
}
function _0x2c70045d(_0x69d20fca) {
  const _0xc9021918 = _0x69d20fca.files[0];
  if (!_0xc9021918) return;
  _0xb0c897f2 = _0xc9021918;
  _0x942d33b2('Favicon selected — click Save Logo & Favicon', '');
}
async function _0xb541702a() {
  _0xb6498e3b();
  if ((!_0x87a79158 && !_0xb0c897f2)) {
    _0x942d33b2('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const _0x4142b079 = _0x60aa79c6('logo-save-btn');
  _0x4142b079.textContent = 'Uploading & Saving...';
  _0x4142b079.disabled = true;
  try {
    if (_0x87a79158) {
      const _0x35712d82 = await _0xbc54118c(_0x87a79158, 'logos');
      if (_0x35712d82) _0xdb10c6d8.logoData = _0x35712d82;
    }
    if (_0xb0c897f2) {
      const _0x946b49c0 = await _0xbc54118c(_0xb0c897f2, 'favicons');
      if (_0x946b49c0) _0xdb10c6d8.faviconData = _0x946b49c0;
    }
    const {
      error
    } = await _0x9b255160.from('mv_site').upsert({
      id: 1,
      data: _0xdb10c6d8
    });
    if (error) throw error;
    _0xf5f95ea8();
    _0x60aa79c6('logo-upload').value = '';
    _0x60aa79c6('favicon-upload').value = '';
    _0x87a79158 = null;
    _0xb0c897f2 = null;
    _0x942d33b2('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x942d33b2(('Error: ' + err.message), 'error');
  } finally {
    _0x4142b079.textContent = '💾 Save Logo & Favicon';
    _0x4142b079.disabled = false;
  }
}
function _0xf5f95ea8() {
  const _0xd1742f60 = document.getElementById('loading-logo-img');
  const _0x0c82ea50 = document.getElementById('loading-logo-text');
  if (_0xdb10c6d8.logoData) {
    if (_0x0c82ea50) _0x0c82ea50.style.display = 'none';
    if (_0xd1742f60) {
      _0xd1742f60.style.display = 'block';
      _0xd1742f60.src = _0xdb10c6d8.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0xdb10c6d8.logoData);
    } catch (e) {}
  } else {
    if (_0xd1742f60) _0xd1742f60.style.display = 'none';
    if (_0x0c82ea50) _0x0c82ea50.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0xdb10c6d8.faviconData) {
    let _0x23f805fb = document.querySelector('link[rel="icon"]');
    if (!_0x23f805fb) {
      _0x23f805fb = document.createElement('link');
      _0x23f805fb.rel = 'icon';
      document.head.appendChild(_0x23f805fb);
    }
    _0x23f805fb.href = _0xdb10c6d8.faviconData;
  }
}
async function _0xa3d25918() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0xb6498e3b();
  _0xdb10c6d8.logoData = null;
  const {
    error
  } = await _0x9b255160.from('mv_site').upsert({
    id: 1,
    data: _0xdb10c6d8
  });
  if (error) {
    _0x942d33b2(('Error: ' + error.message), 'error');
    return;
  }
  _0xf5f95ea8();
  const _0xf18deee2 = _0x60aa79c6('logo-preview'),
    _0x63730a61 = _0x60aa79c6('logo-preview-img');
  if (_0xf18deee2) _0xf18deee2.style.display = 'none';
  if (_0x63730a61) _0x63730a61.src = '';
  _0x942d33b2('Logo dihapus! ✓', 'success');
}
function _0x4c0393bd() {
  const _0xda0a8bea = _0xdb10c6d8;
  if ((!_0xda0a8bea || !Object.keys(_0xda0a8bea).length)) return;
  if (_0xda0a8bea.colors) _0xbdbe0826(_0xda0a8bea.colors);
  _0xf5f95ea8();
  const _0xdc236093 = ((_0xda0a8bea.siteTitle || _0xda0a8bea.brand) || 'MV Portfolio');
  document.title = _0xdc236093;
  if (_0x60aa79c6('page-title')) _0x60aa79c6('page-title').textContent = _0xdc236093;
  if ((_0xda0a8bea.brand && (typeof _0xda0a8bea.brand === 'string'))) {
    _0x60aa79c6('nav-brand').innerHTML = _0xda0a8bea.brand.replace('.', '<span>.</span>');
    _0x60aa79c6('footer-brand').innerHTML = _0xda0a8bea.brand.replace('.', '<span>.</span>');
  }
  _0x6aab8122('hero-label', _0xda0a8bea.label);
  _0x6aab8122('hero-sub', _0xda0a8bea.hsub);
  _0x6aab8122('about-p1', _0xda0a8bea.about1);
  _0x6aab8122('about-p2', _0xda0a8bea.about2);
  _0x6aab8122('footer-copy', _0xda0a8bea.copy);
  if ((_0xda0a8bea.htitle && (typeof _0xda0a8bea.htitle === 'string'))) {
    const _0xbde16576 = _0xda0a8bea.htitle.split('|');
    _0x60aa79c6('hero-title').innerHTML = _0xbde16576.map((_0x7940ec30, _0x9ebc20b3) => (_0x9ebc20b3 === 0) ? _0x7940ec30 : (_0x9ebc20b3 === 1) ? `<span class="accent">${_0x7940ec30}</span>` : `<span class="stroke">${_0x7940ec30}</span>`).join('<br>');
  }
  const _0x8b5c7ed8 = [{
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
  const _0x4b9fbebc = _0x60aa79c6('about-social-btns'),
    _0x320539e5 = _0x60aa79c6('footer-social-links');
  if (_0x4b9fbebc) _0x4b9fbebc.innerHTML = _0x8b5c7ed8.filter(_0xc667c97f => _0xda0a8bea[_0xc667c97f.key]).map(_0xf18dbe0a => `<a href="${_0xda0a8bea[_0xf18dbe0a.key]}" target="_blank" class="btn ${_0xf18dbe0a.primary ? 'btn-primary' : 'btn-ghost'}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${_0xf18dbe0a.icon} ${_0xf18dbe0a.label}</a>`).join('');
  if (_0x320539e5) _0x320539e5.innerHTML = _0x8b5c7ed8.filter(_0x1cc83256 => _0xda0a8bea[_0x1cc83256.key]).map(_0x839fe8dd => `<a href="${_0xda0a8bea[_0x839fe8dd.key]}" target="_blank">${_0x839fe8dd.label}</a>`).join('');
}
function _0xee3424e1() {
  const _0x889f69c9 = _0xdb10c6d8;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x4ff8e652 => {
    if (_0x60aa79c6(('s-' + _0x4ff8e652))) _0x60aa79c6(('s-' + _0x4ff8e652)).value = (_0x889f69c9[_0x4ff8e652] || '');
  });
  if (_0x60aa79c6('s-perpage')) _0x60aa79c6('s-perpage').value = (_0x889f69c9.perPage || 12);
  const _0x2d9535d5 = (_0x889f69c9.displayMode || 'all'),
    _0xc8d3ab54 = _0x60aa79c6(('dm-' + _0x2d9535d5));
  if (_0xc8d3ab54) _0xc8d3ab54.checked = true;
}
function _0x62c04d0e(_0xc4ddc0dc) {
  _0xdb10c6d8.displayMode = _0xc4ddc0dc;
  _0x3491127c(true);
}
async function _0x307d8f2c() {
  const _0x50780d49 = document.querySelector('input[name="display-mode"]:checked');
  _0xdb10c6d8 = {
    brand: _0x60aa79c6('s-brand').value,
    siteTitle: _0x60aa79c6('s-siteTitle').value,
    label: _0x60aa79c6('s-label').value,
    htitle: _0x60aa79c6('s-htitle').value,
    hsub: _0x60aa79c6('s-hsub').value,
    about1: _0x60aa79c6('s-about1').value,
    about2: _0x60aa79c6('s-about2').value,
    yt: _0x60aa79c6('s-yt').value,
    tw: _0x60aa79c6('s-tw').value,
    discord: _0x60aa79c6('s-discord').value,
    vgen: _0x60aa79c6('s-vgen').value,
    ig: _0x60aa79c6('s-ig').value,
    tiktok: _0x60aa79c6('s-tiktok').value,
    copy: _0x60aa79c6('s-copy').value,
    year: _0x60aa79c6('s-year').value,
    displayMode: _0x50780d49 ? _0x50780d49.value : 'all',
    perPage: (parseInt(_0x60aa79c6('s-perpage')?.value) || 12),
    colors: _0xdb10c6d8.colors,
    logoData: _0xdb10c6d8.logoData,
    faviconData: _0xdb10c6d8.faviconData
  };
  const _0x69080611 = _0x60aa79c6('site-save-btn');
  _0x69080611.textContent = 'Saving...';
  _0x69080611.disabled = true;
  _0xb6498e3b();
  try {
    const {
      error
    } = await _0x9b255160.from('mv_site').upsert({
      id: 1,
      data: _0xdb10c6d8
    });
    if (error) throw error;
    _0x4c0393bd();
    _0x30cae196();
    _0x3491127c(true);
    _0x942d33b2('Site info saved! ✓', 'success');
  } catch (err) {
    _0x942d33b2(('Error: ' + err.message), 'error');
  } finally {
    _0x69080611.textContent = 'Simpan Info Site →';
    _0x69080611.disabled = false;
  }
}
function _0xda5ee5c5() {
  const _0xd57eb2cb = _0x60aa79c6('site-edit-panel');
  if (_0xd57eb2cb) _0xd57eb2cb.classList.remove('open');
}
async function _0xc6281791() {
  const _0x47fd90a9 = _0x60aa79c6('logo-upload'),
    _0xc873fe92 = _0x60aa79c6('favicon-upload');
  if (_0x47fd90a9) _0x47fd90a9.value = '';
  if (_0xc873fe92) _0xc873fe92.value = '';
  document.body.classList.add('loading');
  _0xb01970fb(15, 'Connecting...');
  _0x9b255160 = window.supabase.createClient(_0x245ceaf4, _0x1420908b);
  _0xb01970fb(35, 'Loading site info...');
  await _0x185a8705();
  _0xb01970fb(60, 'Loading works...');
  await _0xa8fdb276();
  _0xb01970fb(75, 'Preloading previews...');
  await _0x0acb0dda();
  _0xb01970fb(90, 'Almost there...');
  _0x9b255160.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0xa8fdb276).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x185a8705).subscribe();
  setTimeout(() => {
    _0xb01970fb(100, 'Ready!');
    setTimeout(() => {
      _0xa14f3588();
      _0x9cd64696();
      if (_0xe601bf04()) _0x60aa79c6('admin-panel').classList.add('open');
    }, 300);
  }, 200);
}
_0xc6281791();
