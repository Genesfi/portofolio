const _0x5ce6570c = _0x09f55a22 => atob(_0x09f55a22);
const _0x58d3a81b = _0x5ce6570c('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0xe486236a = _0x5ce6570c('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x6e66bfa3 = _0x5ce6570c('YWRt');
const _0xb0cb7473 = _0x5ce6570c('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x1d54a787 = ((60 * 60) * 1000);
let _0x50f7f1fa,
  _0xecd49742 = [],
  _0x4e5adde4 = {},
  _0x937d7e63 = 'all',
  _0xd5152e0f = null,
  _0x197a4cbe = 1,
  _0xcda63602 = 0;
let _0x76186345 = (() => {
  try {
    const _0xc219e4f2 = localStorage.getItem('mv_autoplay');
    return (_0xc219e4f2 === null) ? true : (_0xc219e4f2 === '1');
  } catch {
    return true;
  }
})();
function _0x04d65f61() {
  _0x76186345 = !_0x76186345;
  try {
    localStorage.setItem('mv_autoplay', _0x76186345 ? '1' : '0');
  } catch {}
  _0x85844086();
  if (_0x76186345) {
    _0x95de31f0();
    _0x1cc41c9b();
  } else {
    _0x8055673e();
  }
}
function _0x85844086() {
  const _0x9a855637 = _0x0b1846cd("_c3269068a"),
    label = _0x0b1846cd("_cd63fdd80");
  if (!_0x9a855637) return;
  if (_0x76186345) {
    _0x9a855637.classList.add("_c83e7a3a2");
    if (label) label.textContent = 'Autoplay';
    _0x9a855637.title = 'Autoplay ON — click to turn off';
  } else {
    _0x9a855637.classList.remove("_c83e7a3a2");
    if (label) label.textContent = 'Autoplay';
    _0x9a855637.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x8055673e() {
  document.querySelectorAll("._cccc57cb7.featured-autoplay").forEach(_0xd0bcf794 => {
    const _0xf2956944 = _0xd0bcf794.querySelector('.mv-preview-iframe');
    if (_0xf2956944) _0xf2956944.remove();
    _0xd0bcf794.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x7fc2c6bb.forEach(iframe => iframe.remove());
  _0x7fc2c6bb.clear();
}
const _0x7fc2c6bb = new Map();
function _0x50ec7bbb() {
  const _0x75671eb4 = 5000;
  if (!_0x76186345) return Promise.resolve();
  const _0xa60d0706 = _0xecd49742.filter(_0x23b81fe1 => (_0x23b81fe1.featured && _0x23b81fe1.ytId));
  if (!_0xa60d0706.length) return Promise.resolve();
  const _0x73fb8bec = _0xa60d0706.map(c => {
    if (_0x7fc2c6bb.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0xfecd3f5c = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0xfecd3f5c;
      const _0x81a74218 = setTimeout(_0xfecd3f5c, _0x75671eb4);
      iframe.onload = () => {
        clearTimeout(_0x81a74218);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0x7fc2c6bb.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x73fb8bec), new Promise(_0xa82e6dad => setTimeout(_0xa82e6dad, _0x75671eb4))]);
}
function _0xc195bfcf() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0xb0cb7473) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0x1d54a787)) {
      sessionStorage.removeItem(_0xb0cb7473);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x42b89e55(_0x4474cf8e) {
  if (_0x4474cf8e) sessionStorage.setItem(_0xb0cb7473, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0xb0cb7473);
}
function _0xfc0777f4() {
  if (_0xc195bfcf()) _0x42b89e55(true);
}
setInterval(() => {
  if ((!_0xc195bfcf() && _0x0b1846cd("_c71f4ec9d")?.classList.contains('open'))) {
    _0x0b1846cd("_c71f4ec9d").classList.remove('open');
    _0x38c1cca9('Admin session expired. Type "adm" to log in again.', 'error');
  }
}, (60 * 1000));
function _0x295d9f22() {
  document.getElementById("_c71f4ec9d").classList.remove('open');
  _0x50f7f1fa.auth.signOut();
  _0x42b89e55(false);
}
let _0x0643b3a6 = '';
document.addEventListener('keydown', _0x88c1054f => {
  if (['INPUT', 'TEXTAREA'].includes(_0x88c1054f.target.tagName)) return;
  if ((_0x88c1054f.key === 'Escape')) {
    _0xd1c110da();
    _0x449c9f16();
    _0x295d9f22();
    _0x0b1846cd("_cf648e919").style.display = 'none';
    return;
  }
  _0x0643b3a6 += _0x88c1054f.key.toLowerCase();
  if ((_0x0643b3a6.length > _0x6e66bfa3.length)) _0x0643b3a6 = _0x0643b3a6.slice(-_0x6e66bfa3.length);
  if ((_0x0643b3a6 === _0x6e66bfa3)) {
    _0x0643b3a6 = '';
    _0xa2467849();
  }
});
function _0x8e51bc01(name, btn) {
  document.querySelectorAll("._ca3606f2e").forEach(_0x894eb71f => _0x894eb71f.classList.remove("_c83e7a3a2"));
  document.querySelectorAll("._ce0b9c56f").forEach(_0x0e2b3212 => _0x0e2b3212.classList.remove("_c83e7a3a2"));
  btn.classList.add("_c83e7a3a2");
  _0x0b1846cd(('tab-' + name)).classList.add("_c83e7a3a2");
  if ((name === 'list')) _0xb7e8469d();
  if ((name === 'site')) _0xb59bcac8();
  if ((name === 'design')) _0x6a48c9cd();
}
function _0xa2467849() {
  if (_0xc195bfcf()) {
    _0xfc0777f4();
    _0x0b1846cd("_c71f4ec9d").classList.toggle('open');
    return;
  }
  _0x0b1846cd("_c17acd405").style.display = 'none';
  _0x0b1846cd("_c84473477").value = '';
  _0x0b1846cd("_cb517e34f").value = '';
  _0x0b1846cd("_c295c69ba").disabled = false;
  try {
    const _0xe6684693 = JSON.parse((sessionStorage.getItem(_0x5ce6570c('bG9ja291dA==')) || 'null'));
    if ((_0xe6684693 && (Date.now() < _0xe6684693.until))) {
      const _0x5c560c30 = Math.ceil(((_0xe6684693.until - Date.now()) / 60000));
      _0x0b1846cd("_c17acd405").style.display = 'block';
      _0x0b1846cd("_c17acd405").textContent = `🔒 Too many attempts. Try again in ${_0x5c560c30} min.`;
      _0x0b1846cd("_c295c69ba").disabled = true;
    }
  } catch (e) {}
  _0x0b1846cd("_cf648e919").style.display = 'flex';
  setTimeout(() => _0x0b1846cd("_c84473477").focus(), 100);
}
async function _0x3ad2b701() {
  const _0xa5c1b185 = 5,
    _0x4f76afa0 = ((15 * 60) * 1000),
    now = Date.now();
  const _0xdc94ba6b = _0x5ce6570c('bG9ja291dA=='),
    _0xa21c3e63 = _0x5ce6570c('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0xdc94ba6b) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0x0b1846cd("_c17acd405").style.display = 'block';
      _0x0b1846cd("_c17acd405").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0x0b1846cd("_c295c69ba").disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0x0b1846cd("_c84473477").value.trim(),
    _0xf0b6571b = _0x0b1846cd("_cb517e34f").value;
  if ((!email || !_0xf0b6571b)) {
    _0x0b1846cd("_c17acd405").style.display = 'block';
    _0x0b1846cd("_c17acd405").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0x0b1846cd("_c295c69ba");
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0x50f7f1fa.auth.signInWithPassword({
      email,
      password: _0xf0b6571b
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0xa21c3e63);
    sessionStorage.removeItem(_0xdc94ba6b);
    _0x42b89e55(true);
    _0x0b1846cd("_cf648e919").style.display = 'none';
    _0x0b1846cd("_c71f4ec9d").classList.add('open');
    _0x38c1cca9('Welcome back! ✓', 'success');
  } catch (e) {
    let _0xf288413f = 0;
    try {
      _0xf288413f = parseInt((sessionStorage.getItem(_0xa21c3e63) || '0'));
    } catch (e) {}
    _0xf288413f++;
    sessionStorage.setItem(_0xa21c3e63, _0xf288413f);
    const _0xb22c7360 = (_0xa5c1b185 - _0xf288413f);
    if ((_0xf288413f >= _0xa5c1b185)) {
      sessionStorage.setItem(_0xdc94ba6b, JSON.stringify({
        until: (now + _0x4f76afa0)
      }));
      sessionStorage.removeItem(_0xa21c3e63);
      _0x0b1846cd("_c17acd405").style.display = 'block';
      _0x0b1846cd("_c17acd405").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0x0b1846cd("_c17acd405").style.display = 'block';
      _0x0b1846cd("_c17acd405").textContent = `❌ Wrong credentials. ${_0xb22c7360} attempt${(_0xb22c7360 > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0x0b1846cd("_cb517e34f").value = '';
    _0x0b1846cd("_cb517e34f").focus();
  }
  btn.textContent = 'Sign In →';
}
function _0xe952bd0b(_0xf3f1d350, text) {
  const _0xb3cfad52 = _0x0b1846cd("_cae48ab0a"),
    _0xe3b3d946 = _0x0b1846cd("_c3ef80565");
  if (_0xb3cfad52) _0xb3cfad52.style.width = (_0xf3f1d350 + '%');
  if ((_0xe3b3d946 && text)) _0xe3b3d946.textContent = text;
}
function _0x27742aed() {
  const s = _0x0b1846cd("_ca3cb8d36");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x2d60d5d3() {
  const {
    data,
    error
  } = await _0x50f7f1fa.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0xecd49742 = (data || []);
  _0xb2663376(true);
  _0xa23a1aad();
  _0x1e56d090();
  _0x7a3ed471();
  if (_0x0b1846cd("_c4bedec79")?.classList.contains("_c83e7a3a2")) _0xb7e8469d();
}
async function _0xb0d45d74() {
  const {
    data
  } = await _0x50f7f1fa.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x4e5adde4 = data.data;
    if (_0x4e5adde4.logoData) {
      await new Promise(resolve => {
        const _0xdd4a7a81 = new Image();
        _0xdd4a7a81.onload = resolve;
        _0xdd4a7a81.onerror = resolve;
        _0xdd4a7a81.src = _0x4e5adde4.logoData;
      });
    }
    _0x6d05113a();
    _0x1e56d090();
  }
}
function _0x0b1846cd(id) {
  return document.getElementById(id);
}
function _0x62a52d69(id, v) {
  if ((v && _0x0b1846cd(id))) _0x0b1846cd(id).textContent = v;
}
function _0xb529cfb8(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0xa24254ea(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0x4665e4a1 = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0x4665e4a1 ? _0x4665e4a1[1] : null;
}
let _0x2a09459c;
function _0x38c1cca9(_0x2721326b, type = '') {
  const t = _0x0b1846cd("_c5c01a063");
  t.textContent = _0x2721326b;
  t.className = `toast ${type} show`;
  clearTimeout(_0x2a09459c);
  _0x2a09459c = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0x0c5a3027(id) {
  const _0x0317de50 = (_0x0b1846cd(id).value || '');
  return _0x0317de50.split(',').map(t => t.trim()).filter(Boolean);
}
function _0x6e786ec1(id, _0x1b47caec) {
  _0x0b1846cd(id).value = _0x1b47caec.join(', ');
}
function _0x846b41e2(_0x2e6a1162, _0x597d2fe6, btn) {
  _0xfc0777f4();
  let tags = _0x0c5a3027(_0x2e6a1162);
  if (tags.includes(_0x597d2fe6)) {
    tags = tags.filter(t => (t !== _0x597d2fe6));
    btn.classList.remove("_c83e7a3a2");
  } else {
    tags.push(_0x597d2fe6);
    btn.classList.add("_c83e7a3a2");
  }
  _0x6e786ec1(_0x2e6a1162, tags);
}
function _0xebcf9938(inputId, _0x400b45e5) {
  const tags = _0x0c5a3027(inputId),
    _0x8e875c49 = _0x0b1846cd(_0x400b45e5);
  if (!_0x8e875c49) return;
  _0x8e875c49.querySelectorAll("._cd3154b8b").forEach(btn => {
    btn.classList.toggle("_c83e7a3a2", tags.includes(btn.textContent.trim()));
  });
}
function _0xbc8658e3(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xfe76c597(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x7a3ed471() {
  const _0x79a74dfb = _0xecd49742.map(c => (c.thumb || (c.ytId ? _0xfe76c597(c.ytId) : null))).filter(Boolean);
  if ((_0x79a74dfb.length < 2)) return;
  const _0xdde251bc = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0x2e3e8714 = [{
    id: "_c5505653f",
    items: _0xdde251bc(_0x79a74dfb, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_c8f4b39cf",
    items: _0xdde251bc([..._0x79a74dfb].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_c63171572",
    items: _0xdde251bc(_0x79a74dfb.slice(Math.floor((_0x79a74dfb.length / 2))).concat(_0x79a74dfb.slice(0, Math.floor((_0x79a74dfb.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0x2e3e8714.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0xce77ac7a = _0x0b1846cd(id);
    if (!_0xce77ac7a) return;
    const all = [...items, ...items];
    _0xce77ac7a.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0xb1cb7aa2 = (items.length * (speed / 20));
      _0xce77ac7a.style.animationDuration = `${_0xb1cb7aa2}s`;
      if ((dir === 'right')) {
        _0xce77ac7a.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0x0b1846cd("_c8659d369");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0x7caaae05(c) {
  const thumb = (c.thumb || (c.ytId ? _0xbc8658e3(c.ytId) : ''));
  const _0x08f4038b = c.ytId ? _0xfe76c597(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0xb529cfb8(t)}</span>`).join('');
  const _0xc4374960 = !!c.ytId;
  const _0xcbbcc40e = !!c.featured;
  const _0x19ba422c = (_0xc4374960 && !_0xcbbcc40e) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_cccc57cb7${_0xcbbcc40e ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0x19ba422c}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0xb529cfb8(c.title)}" loading="lazy" onerror="this.src='${_0x08f4038b}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0xb529cfb8(c.title)}</div><div class="mv-artist">${_0xb529cfb8((c.artist || ''))}</div></div></div>
</div>`;
}
function _0x93d68e83() {
  return (_0x4e5adde4.displayMode || 'all');
}
function _0x9a0a5e20() {
  return (parseInt(_0x4e5adde4.perPage) || 12);
}
function _0xb2663376(_0x5a9b1ce5) {
  if (_0x5a9b1ce5) {
    _0x197a4cbe = 1;
    _0xcda63602 = 0;
  }
  const _0xd3ed8475 = _0x0b1846cd("_c1306bd4b"),
    _0x595b91a0 = _0x93d68e83(),
    perPage = _0x9a0a5e20();
  const _0xa5d8165e = (_0x937d7e63 === 'all') ? _0xecd49742 : _0xecd49742.filter(c => (c.tags || []).includes(_0x937d7e63));
  _0x0b1846cd("_c803a1026").textContent = String(_0xa5d8165e.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0x0b1846cd(id);
    if (e) e.remove();
  });
  if (!_0xa5d8165e.length) {
    _0xd3ed8475.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0x595b91a0 === 'pagination')) {
    const _0x2f1f95a7 = Math.ceil((_0xa5d8165e.length / perPage));
    _0x197a4cbe = Math.min(_0x197a4cbe, _0x2f1f95a7);
    const slice = _0xa5d8165e.slice(((_0x197a4cbe - 1) * perPage), (_0x197a4cbe * perPage));
    _0xd3ed8475.innerHTML = slice.map(_0x7caaae05).join('');
    if ((_0x2f1f95a7 > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0xda3dbaa1 = 1; (_0xda3dbaa1 <= _0x2f1f95a7); _0xda3dbaa1++) {
        const btn = document.createElement('button');
        btn.textContent = _0xda3dbaa1;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0xda3dbaa1 === _0x197a4cbe) ? 'var(--accent)' : 'transparent'};color:${(_0xda3dbaa1 === _0x197a4cbe) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0x197a4cbe = _0xda3dbaa1;
          _0xb2663376(false);
          window.scrollTo({
            top: (_0x0b1846cd("_cf0482437").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0xd3ed8475.appendChild(bar);
    }
  } else if ((_0x595b91a0 === 'loadmore')) {
    if (_0x5a9b1ce5) _0xcda63602 = perPage;else _0xcda63602 = Math.max(_0xcda63602, perPage);
    const slice = _0xa5d8165e.slice(0, _0xcda63602);
    _0xd3ed8475.innerHTML = slice.map(_0x7caaae05).join('');
    if ((_0xcda63602 < _0xa5d8165e.length)) {
      const rem = (_0xa5d8165e.length - _0xcda63602);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0xcda63602 += perPage;
        _0xb2663376(false);
      };
      _0xd3ed8475.appendChild(btn);
    }
  } else {
    _0xd3ed8475.innerHTML = _0xa5d8165e.map(_0x7caaae05).join('');
  }
  requestAnimationFrame(() => _0x95de31f0());
}
function _0xa23a1aad() {
  const tags = new Set();
  _0xecd49742.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x0b1846cd("_ca54c99a9").innerHTML = (`<button class="_c350a1023${(_0x937d7e63 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_c350a1023${(_0x937d7e63 === t) ? ' active' : ''}" onclick="filterCards('${_0xb529cfb8(t)}',this)">${_0xb529cfb8(t)}</button>`).join(''));
}
function _0xcf8e256e(tag, btn) {
  _0x937d7e63 = tag;
  document.querySelectorAll("._c350a1023").forEach(b => b.classList.remove("_c83e7a3a2"));
  btn.classList.add("_c83e7a3a2");
  _0xb2663376(true);
}
function _0x95de31f0() {
  if (!_0x76186345) return;
  const _0x10401a94 = document.querySelectorAll("._cccc57cb7.featured");
  _0x10401a94.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0xee669ad7 = _0x7fc2c6bb.get(ytId);
    if (_0xee669ad7) {
      _0xee669ad7.removeAttribute('style');
      _0xee669ad7.className = 'mv-preview-iframe';
      card.insertBefore(_0xee669ad7, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0xee669ad7.contentWindow) {
        if (_0xee669ad7._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0xee669ad7.onload = () => {
            _0xee669ad7._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0x7fc2c6bb.delete(ytId);
    } else {
      _0xbf62e681(card, ytId);
    }
  });
}
function _0xbf62e681(card, ytId) {
  if (!_0x76186345) return;
  if (card.classList.contains('previewing')) return;
  card.classList.add('previewing', 'featured-autoplay');
  const iframe = document.createElement('iframe');
  iframe.className = 'mv-preview-iframe';
  iframe.allow = 'autoplay';
  iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
  iframe.onload = () => {
    iframe._mvReady = true;
    card.classList.add('preview-ready');
  };
  card.insertBefore(iframe, card.firstChild);
}
function _0x1cc41c9b() {
  const featuredCards = document.querySelectorAll("._cccc57cb7.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0xbf62e681(card, ytId);
  });
}
let _0xe47aca8e = null;
function _0xb7e8469d() {
  const _0xa01ddde6 = _0x0b1846cd("_c5762e055");
  if (!_0xecd49742.length) {
    _0xa01ddde6.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0xe47aca8e) {
      _0xe47aca8e.destroy();
      _0xe47aca8e = null;
    }
    return;
  }
  _0xa01ddde6.innerHTML = _0xecd49742.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0xbc8658e3(c.ytId) : ''));
    const fallback = c.ytId ? _0xfe76c597(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0xb529cfb8(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0xb529cfb8((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0xb529cfb8(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0xb529cfb8((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_c054c9f41" id="edit-tag-presets-${c.id}">
  <button type="button" class="_cd3154b8b" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_cd3154b8b" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_cd3154b8b" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_cd3154b8b" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_cd3154b8b" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0xb529cfb8((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0xb529cfb8((c.thumb || ''))}">
<div class="_c47681f22" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0xe47aca8e) {
    _0xe47aca8e.destroy();
    _0xe47aca8e = null;
  }
  _0xe47aca8e = Sortable.create(_0xa01ddde6, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0x8c859536 => {
      if ((_0x8c859536.oldIndex === _0x8c859536.newIndex)) return;
      const _0x3909be2a = _0xecd49742.splice(_0x8c859536.oldIndex, 1);
      _0xecd49742.splice(_0x8c859536.newIndex, 0, _0x3909be2a);
      let _0x8eec9676 = _0x0b1846cd('sort-saving');
      if (!_0x8eec9676) {
        _0x8eec9676 = document.createElement('div');
        _0x8eec9676.id = 'sort-saving';
        _0x8eec9676.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xa01ddde6.insertAdjacentElement('afterend', _0x8eec9676);
      }
      _0x8eec9676.textContent = '⟳ Saving order...';
      await Promise.all(_0xecd49742.map((c, i) => _0x50f7f1fa.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0x8eec9676.remove();
      _0x38c1cca9('Order saved! ✓', 'success');
      _0xb2663376(true);
    }
  });
}
function _0x11b1454c(id) {
  const _0x2b1d8168 = _0x0b1846cd(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0x2b1d8168.classList.toggle('open');
  if (_0x2b1d8168.classList.contains('open')) setTimeout(() => _0xebcf9938(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function _0x0d8674f8(id) {
  const _0x9ffc8b85 = _0x0b1846cd(`e-url-${id}`).value.trim(),
    title = _0x0b1846cd(`e-title-${id}`).value.trim(),
    artist = _0x0b1846cd(`e-artist-${id}`).value.trim();
  const _0xaca2ce7d = _0x0b1846cd(`e-tags-${id}`).value.trim(),
    thumb = _0x0b1846cd(`e-thumb-${id}`).value.trim(),
    _0xfa850b92 = _0x0b1846cd(`e-feat-${id}`).checked;
  if (!title) {
    _0x38c1cca9('Title cannot be empty!', 'error');
    return;
  }
  _0xfc0777f4();
  const ytId = ((_0xa24254ea(_0x9ffc8b85) || _0x9ffc8b85) || null);
  const tags = _0xaca2ce7d ? _0xaca2ce7d.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x0b1846cd(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0x50f7f1fa.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0xfa850b92
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0x38c1cca9(('Error: ' + error.message), 'error');
    return;
  }
  _0x38c1cca9('Work updated! ✓', 'success');
  _0x11b1454c(id);
}
function _0x1e56d090() {
  _0x0b1846cd("_c12f60bcd").textContent = (_0xecd49742.length || '0');
  const _0x27eb0186 = new Set(_0xecd49742.map(c => c.artist).filter(Boolean));
  _0x0b1846cd("_c797c8d9e").textContent = (_0x27eb0186.size || '0');
  const tags = new Set();
  _0xecd49742.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x0b1846cd("_c0ea09da7").textContent = (tags.size || '0');
  _0x0b1846cd("_ca4033997").textContent = (_0x4e5adde4.year || new Date().getFullYear());
}
async function _0xac978b29() {
  const _0x89c19e04 = _0x0b1846cd("_caf9dc594").value.trim(),
    title = _0x0b1846cd("_c060c36f3").value.trim(),
    artist = _0x0b1846cd("_c8ecc524e").value.trim();
  const _0x367f4a26 = _0x0b1846cd("_cb17968f6").value.trim(),
    thumb = _0x0b1846cd("_c0c451bf2").value.trim(),
    feat = _0x0b1846cd("_ce14f3eb8").checked;
  if (!title) {
    _0x38c1cca9('Title is required!', 'error');
    return;
  }
  _0xfc0777f4();
  const ytId = _0xa24254ea(_0x89c19e04);
  const tags = _0x367f4a26 ? _0x367f4a26.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x0b1846cd("_c97ad78f4");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0x50f7f1fa.from('mv_works').insert([{
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: feat,
    sort_order: -1
  }]);
  btn.disabled = false;
  btn.textContent = '+ Add to Portfolio';
  if (error) {
    _0x38c1cca9(('Error: ' + error.message), 'error');
    return;
  }
  _0x38c1cca9('Work added! ✓', 'success');
  ["_caf9dc594", "_c060c36f3", "_c8ecc524e", "_cb17968f6", "_c0c451bf2"].forEach(id => _0x0b1846cd(id).value = '');
  _0x0b1846cd("_ce14f3eb8").checked = false;
  document.querySelectorAll("#_c447d6b99 ._cd3154b8b").forEach(b => b.classList.remove("_c83e7a3a2"));
  _0x44bf05dc('', '');
}
async function _0x8569c275(id) {
  if (!confirm('Remove this work?')) return;
  _0xfc0777f4();
  const {
    error
  } = await _0x50f7f1fa.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x38c1cca9(('Error: ' + error.message), 'error');
    return;
  }
  _0x38c1cca9('Work removed', 'success');
}
function _0x535213c0(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0xecd49742.find(_0xef701c71 => (_0xef701c71.id === id));
  if (!c) return;
  _0x0b1846cd("_ca512bdcd").textContent = c.title;
  _0x0b1846cd("_c79fe41ff").textContent = (c.artist || '');
  _0x0b1846cd("_c0495d1b0").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0xb529cfb8(t)}</span>`).join('');
  _0x0b1846cd("_c96ad4d61").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x0b1846cd("_cded83b0a").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function _0xd1c110da(e) {
  if ((e && (e.target !== _0x0b1846cd("_cded83b0a")))) return;
  _0x0b1846cd("_cded83b0a").classList.remove('open');
  _0x0b1846cd("_c96ad4d61").innerHTML = '';
  document.body.style.overflow = '';
}
function _0xa21ee738(val) {
  clearTimeout(_0xd5152e0f);
  const ytId = _0xa24254ea(val);
  if (!ytId) {
    _0x44bf05dc('', '');
    return;
  }
  _0x44bf05dc('loading', '⟳ Fetching info...');
  _0xd5152e0f = setTimeout(() => _0x72636e03(ytId), 800);
}
async function _0x72636e03(ytId) {
  try {
    const _0xd8895e11 = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xd8895e11.ok) throw new Error();
    const data = await _0xd8895e11.json();
    if (!_0x0b1846cd("_c060c36f3").value.trim()) _0x0b1846cd("_c060c36f3").value = (data.title || '');
    if (!_0x0b1846cd("_c8ecc524e").value.trim()) _0x0b1846cd("_c8ecc524e").value = (data.author_name || '');
    _0x44bf05dc('ok', '✓ Info fetched');
  } catch {
    _0x44bf05dc('err', '⚠ Could not fetch info');
  }
}
function _0x44bf05dc(type, msg) {
  const s = _0x0b1846cd("_c13a20ac2");
  s.textContent = msg;
  s.className = ("_c13a20ac2" + (type ? (' ' + type) : ''));
}
let _0x0cda9b21 = null;
function _0x3afd74e4() {
  const _0x469f2ce1 = document.body.classList.toggle('edit-mode');
  const bar = _0x0b1846cd("_c1c5a9d19");
  const btn = _0x0b1846cd("_ccf799225");
  if (_0x469f2ce1) {
    bar.classList.add("_c83e7a3a2");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0x0b1846cd("_c71f4ec9d").classList.remove('open');
    _0x81864be9();
  } else {
    _0x323b5c9c();
  }
}
function _0x323b5c9c() {
  document.body.classList.remove('edit-mode');
  _0x0b1846cd("_c1c5a9d19").classList.remove("_c83e7a3a2");
  const btn = _0x0b1846cd("_ccf799225");
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0x0cda9b21) {
    _0x0cda9b21.destroy();
    _0x0cda9b21 = null;
  }
}
function _0x81864be9() {
  const grid = _0x0b1846cd("_c1306bd4b");
  if (!grid) return;
  if (_0x0cda9b21) _0x0cda9b21.destroy();
  _0x0cda9b21 = Sortable.create(grid, {
    animation: 200,
    draggable: "._cccc57cb7",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0xecd49742.splice(evt.oldIndex, 1);
      _0xecd49742.splice(evt.newIndex, 0, moved);
      _0x38c1cca9('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function _0xf7b01e87() {
  _0x38c1cca9('Saving order...', '');
  await Promise.all(_0xecd49742.map((c, i) => _0x50f7f1fa.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0x38c1cca9('Order saved! ✓', 'success');
  _0x323b5c9c();
  _0xb2663376(true);
}
let _0xc8c6ed7d = null;
let _0xddd5fdc4 = null;
const _0x41ccb6a9 = new Map();
function _0xc49672b0(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0x41ccb6a9.has(ytId)) {
    const _0xc3bef28d = document.createElement('iframe');
    _0xc3bef28d.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0xc3bef28d.allow = 'autoplay';
    _0xc3bef28d.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0xc3bef28d);
    _0x41ccb6a9.set(ytId, _0xc3bef28d);
  }
  _0xc8c6ed7d = setTimeout(() => {
    _0x55f56d3c(_0xddd5fdc4);
    _0xddd5fdc4 = card;
    card.classList.add('previewing');
    const _0x08ca381f = _0x41ccb6a9.get(ytId);
    if (_0x08ca381f) {
      _0x08ca381f.removeAttribute('style');
      _0x08ca381f.className = 'mv-preview-iframe';
      _0x08ca381f.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x08ca381f, card.firstChild);
      _0x08ca381f.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function _0x55f56d3c(card) {
  clearTimeout(_0xc8c6ed7d);
  if (!card) return;
  if (card.classList.contains('featured-autoplay')) return;
  card.classList.remove('previewing', 'preview-ready');
  const iframe = card.querySelector('.mv-preview-iframe');
  if (iframe) {
    const ytId = card.dataset.ytid;
    iframe.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    iframe.className = '';
    if (ytId) iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    document.body.appendChild(iframe);
  }
  if ((_0xddd5fdc4 === card)) _0xddd5fdc4 = null;
}
const _0x9248c59e = {
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
function _0x113339ad(name) {
  const p = _0x9248c59e[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0xf1bfb4e4 = _0x0b1846cd(('color-' + k));
    if (_0xf1bfb4e4) _0xf1bfb4e4.value = v;
    const _0xaab17c93 = _0x0b1846cd((('color-' + k) + '-hex'));
    if (_0xaab17c93) _0xaab17c93.value = v;
  });
  _0x38c1cca9('Preview applied — click Save Colors to keep it', '');
}
function _0x9d60358c(_0x15483045, val) {
  document.documentElement.style.setProperty(('--' + _0x15483045), val);
  const hex = _0x0b1846cd((('color-' + _0x15483045) + '-hex'));
  if (hex) hex.value = val;
}
function _0x12cf8335(varName, _0xa254cd4b) {
  const val = _0xa254cd4b.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0x8fc3f67e = _0x0b1846cd(('color-' + varName));
    if (_0x8fc3f67e) _0x8fc3f67e.value = val;
  }
}
async function _0xc61af9d6() {
  _0xfc0777f4();
  const colors = {
    text: (_0x0b1846cd("_c56425ead")?.value || '#f0f0f0'),
    accent: _0x0b1846cd("_caf2485e9").value,
    accent2: _0x0b1846cd("_c0319d56e").value,
    bg: _0x0b1846cd("_cde11cbf7").value,
    surface: _0x0b1846cd("_c55cce02d").value
  };
  _0x4e5adde4.colors = colors;
  const btn = _0x0b1846cd("_c4426ad1f");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0x50f7f1fa.from('mv_site').upsert({
      id: 1,
      data: _0x4e5adde4
    });
    if (error) throw error;
    _0x38c1cca9('Colors saved! ✓', 'success');
  } catch (err) {
    _0x38c1cca9(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0xce0f9d0e(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0x0b1846cd(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0x0b1846cd((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function _0xa038094f() {
  const _0x2d42a686 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0xce0f9d0e(_0x2d42a686);
  _0x4e5adde4.colors = _0x2d42a686;
  _0x38c1cca9('Reset to default — click Save Colors to keep it', '');
}
function _0x6a48c9cd() {
  if (_0x4e5adde4.colors) _0xce0f9d0e(_0x4e5adde4.colors);
  if (_0x4e5adde4.logoData) {
    const _0xf52a0563 = _0x0b1846cd("_c44aebf7b");
    const img = _0x0b1846cd("_cd9720aa1");
    if ((_0xf52a0563 && img)) {
      img.src = _0x4e5adde4.logoData;
      _0xf52a0563.style.display = 'block';
    }
  }
}
let _0x110c631c = null;
let _0xdc4a2a6f = null;
function _0x84ad8a93(_0x2f078aef) {
  if ((_0x2f078aef.type && (_0x2f078aef.type !== ''))) return _0x2f078aef.type;
  const _0x115c2f75 = _0x2f078aef.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x115c2f75] || 'image/png');
}
function _0xa09a2f3c(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0xc394d2e3(file, _0x5a435272) {
  if (!file) return null;
  const _0xdfbc288b = _0x84ad8a93(file);
  const ext = _0xa09a2f3c(file);
  const _0xac018a53 = `${_0x5a435272}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0x50f7f1fa.storage.from('portfolio-assets').upload(_0xac018a53, file, {
    upsert: true,
    contentType: _0xdfbc288b
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x5e34765a
  } = _0x50f7f1fa.storage.from('portfolio-assets').getPublicUrl(_0xac018a53);
  return _0x5e34765a.publicUrl;
}
function _0x2b6b15b2(input) {
  const file = input.files[0];
  if (!file) return;
  _0x110c631c = file;
  const _0xf07f9509 = URL.createObjectURL(file);
  const prev = _0x0b1846cd("_c44aebf7b"),
    img = _0x0b1846cd("_cd9720aa1");
  if ((prev && img)) {
    img.src = _0xf07f9509;
    prev.style.display = 'block';
  }
  _0x38c1cca9('Logo selected — click Save Logo & Favicon', '');
}
function _0xa683c0fa(input) {
  const file = input.files[0];
  if (!file) return;
  _0xdc4a2a6f = file;
  _0x38c1cca9('Favicon selected — click Save Logo & Favicon', '');
}
async function _0x0dabceb6() {
  _0xfc0777f4();
  if ((!_0x110c631c && !_0xdc4a2a6f)) {
    _0x38c1cca9('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0x0b1846cd("_c1ceacc57");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0x110c631c) {
      const _0x07174958 = await _0xc394d2e3(_0x110c631c, 'logos');
      if (_0x07174958) _0x4e5adde4.logoData = _0x07174958;
    }
    if (_0xdc4a2a6f) {
      const _0xa45be55d = await _0xc394d2e3(_0xdc4a2a6f, 'favicons');
      if (_0xa45be55d) _0x4e5adde4.faviconData = _0xa45be55d;
    }
    const {
      error
    } = await _0x50f7f1fa.from('mv_site').upsert({
      id: 1,
      data: _0x4e5adde4
    });
    if (error) throw error;
    _0xdff716f8();
    _0x0b1846cd("_ccccd92d9").value = '';
    _0x0b1846cd("_c1c15dc4d").value = '';
    _0x110c631c = null;
    _0xdc4a2a6f = null;
    _0x38c1cca9('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x38c1cca9(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0xdff716f8() {
  const _0xdd4fb14c = document.getElementById("_cf89dd67e");
  const _0x97d54153 = document.getElementById("_c60049ffb");
  if (_0x4e5adde4.logoData) {
    if (_0x97d54153) _0x97d54153.style.display = 'none';
    if (_0xdd4fb14c) {
      _0xdd4fb14c.style.display = 'block';
      _0xdd4fb14c.src = _0x4e5adde4.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x4e5adde4.logoData);
    } catch (e) {}
  } else {
    if (_0xdd4fb14c) _0xdd4fb14c.style.display = 'none';
    if (_0x97d54153) _0x97d54153.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0x4e5adde4.faviconData) {
    let _0xf262b9f9 = document.querySelector('link[rel="icon"]');
    if (!_0xf262b9f9) {
      _0xf262b9f9 = document.createElement('link');
      _0xf262b9f9.rel = 'icon';
      document.head.appendChild(_0xf262b9f9);
    }
    _0xf262b9f9.href = _0x4e5adde4.faviconData;
  }
}
async function _0x022d68cf() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0xfc0777f4();
  _0x4e5adde4.logoData = null;
  const {
    error
  } = await _0x50f7f1fa.from('mv_site').upsert({
    id: 1,
    data: _0x4e5adde4
  });
  if (error) {
    _0x38c1cca9(('Error: ' + error.message), 'error');
    return;
  }
  _0xdff716f8();
  const prev = _0x0b1846cd("_c44aebf7b"),
    img = _0x0b1846cd("_cd9720aa1");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0x38c1cca9('Logo dihapus! ✓', 'success');
}
function _0x6d05113a() {
  const s = _0x4e5adde4;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0xce0f9d0e(s.colors);
  _0xdff716f8();
  const _0x4e62e842 = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0x4e62e842;
  if (_0x0b1846cd("_c64b1a2df")) _0x0b1846cd("_c64b1a2df").textContent = _0x4e62e842;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0x0b1846cd("_ca6e306d5").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0x0b1846cd("_c96f869de").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0x62a52d69("_c58fa7f52", s.label);
  _0x62a52d69("_c71cb225b", s.hsub);
  _0x62a52d69("_c1dc3ede8", s.about1);
  _0x62a52d69("_c8ebc75bf", s.about2);
  _0x62a52d69("_c02ea437c", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xceb61dda = s.htitle.split('|');
    _0x0b1846cd("_c72ae1a65").innerHTML = _0xceb61dda.map((_0x38f85570, i) => (i === 0) ? _0x38f85570 : (i === 1) ? `<span class="_ce8e08384">${_0x38f85570}</span>` : `<span class="_cb7216e5a">${_0x38f85570}</span>`).join('<br>');
  }
  const _0xe2310c28 = [{
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
  const _0x017c0bb7 = _0x0b1846cd("_c7ab85dd3"),
    _0x667c3909 = _0x0b1846cd("_c2910eebd");
  if (_0x017c0bb7) _0x017c0bb7.innerHTML = _0xe2310c28.filter(_0xb766bfa0 => s[_0xb766bfa0.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_cc3f7e8cb ${s2.primary ? "_cf55cefc4" : "_c85990d65"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x667c3909) _0x667c3909.innerHTML = _0xe2310c28.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0xb59bcac8() {
  const s = _0x4e5adde4;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0xd2b3599f => {
    if (_0x0b1846cd(('s-' + _0xd2b3599f))) _0x0b1846cd(('s-' + _0xd2b3599f)).value = (s[_0xd2b3599f] || '');
  });
  if (_0x0b1846cd('s-perpage')) _0x0b1846cd('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0x190270fc = _0x0b1846cd(('dm-' + mode));
  if (_0x190270fc) _0x190270fc.checked = true;
}
function _0x175b1fb9(mode) {
  _0x4e5adde4.displayMode = mode;
  _0xb2663376(true);
}
async function _0xd8ad53ad() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0x4e5adde4 = {
    brand: _0x0b1846cd("_c3bd513c6").value,
    siteTitle: _0x0b1846cd("_cbdac3261").value,
    label: _0x0b1846cd("_c0e6d8510").value,
    htitle: _0x0b1846cd("_cd5c76acb").value,
    hsub: _0x0b1846cd("_c16e9439a").value,
    about1: _0x0b1846cd("_ce6189449").value,
    about2: _0x0b1846cd("_cdf85045e").value,
    yt: _0x0b1846cd("_c1e4c204f").value,
    tw: _0x0b1846cd("_c45c83b07").value,
    discord: _0x0b1846cd('s-discord').value,
    vgen: _0x0b1846cd('s-vgen').value,
    ig: _0x0b1846cd('s-ig').value,
    tiktok: _0x0b1846cd('s-tiktok').value,
    copy: _0x0b1846cd('s-copy').value,
    year: _0x0b1846cd('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0x0b1846cd('s-perpage')?.value) || 12),
    colors: _0x4e5adde4.colors,
    logoData: _0x4e5adde4.logoData,
    faviconData: _0x4e5adde4.faviconData
  };
  const btn = _0x0b1846cd("_c9440879e");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0xfc0777f4();
  try {
    const {
      error
    } = await _0x50f7f1fa.from('mv_site').upsert({
      id: 1,
      data: _0x4e5adde4
    });
    if (error) throw error;
    _0x6d05113a();
    _0x1e56d090();
    _0xb2663376(true);
    _0x38c1cca9('Site info saved! ✓', 'success');
  } catch (err) {
    _0x38c1cca9(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0x449c9f16() {
  const _0xe83332e7 = _0x0b1846cd('site-edit-panel');
  if (_0xe83332e7) _0xe83332e7.classList.remove('open');
}
async function _0x651a3d93() {
  const _0x5380c5bc = _0x0b1846cd("_ccccd92d9"),
    _0x06722c61 = _0x0b1846cd("_c1c15dc4d");
  if (_0x5380c5bc) _0x5380c5bc.value = '';
  if (_0x06722c61) _0x06722c61.value = '';
  document.body.classList.add('loading');
  _0xe952bd0b(15, 'Connecting...');
  _0x50f7f1fa = window.supabase.createClient(_0x58d3a81b, _0xe486236a);
  _0xe952bd0b(35, 'Loading site info...');
  await _0xb0d45d74();
  _0xe952bd0b(60, 'Loading works...');
  await _0x2d60d5d3();
  _0xe952bd0b(75, 'Preloading previews...');
  await _0x50ec7bbb();
  _0xe952bd0b(90, 'Almost there...');
  _0x50f7f1fa.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x2d60d5d3).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0xb0d45d74).subscribe();
  setTimeout(() => {
    _0xe952bd0b(100, 'Ready!');
    setTimeout(() => {
      _0x27742aed();
      _0x85844086();
      if (_0xc195bfcf()) _0x0b1846cd("_c71f4ec9d").classList.add('open');
    }, 300);
  }, 200);
}
_0x651a3d93();
