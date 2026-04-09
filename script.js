const _0x50d73d98 = _0xffcffb55 => atob(_0xffcffb55);
const _0x1c4e7566 = _0x50d73d98('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x5af3b772 = _0x50d73d98('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x5002ac2d = _0x50d73d98('YWRt');
const _0x49364287 = _0x50d73d98('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x9b4e7304 = ((60 * 60) * 1000);
let _0x572d3d0a,
  _0x135431be = [],
  _0x8aaaf79d = {},
  _0x19586b01 = 'all',
  _0x9ff37817 = null,
  _0x13b7292a = 1,
  _0x124fe33c = 0;
let _0x2a938056 = (() => {
  try {
    const _0x39bdf202 = localStorage.getItem('mv_autoplay');
    return (_0x39bdf202 === null) ? true : (_0x39bdf202 === '1');
  } catch {
    return true;
  }
})();
function toggleAutoplay() {
  _0x2a938056 = !_0x2a938056;
  try {
    localStorage.setItem('mv_autoplay', _0x2a938056 ? '1' : '0');
  } catch {}
  _0xa7087167();
  if (_0x2a938056) {
    _0x0fc131a4();
    _0x2620cc48();
  } else {
    _0x55247c0b();
  }
}
function _0xa7087167() {
  const _0x654e43f7 = _0x591e5a12("_c87de673f"),
    label = _0x591e5a12("_ce95fc39e");
  if (!_0x654e43f7) return;
  if (_0x2a938056) {
    _0x654e43f7.classList.add("_c28bf1904");
    if (label) label.textContent = 'Autoplay';
    _0x654e43f7.title = 'Autoplay ON — click to turn off';
  } else {
    _0x654e43f7.classList.remove("_c28bf1904");
    if (label) label.textContent = 'Autoplay';
    _0x654e43f7.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x55247c0b() {
  document.querySelectorAll("._c419f4be1.featured-autoplay").forEach(_0x9e504a9e => {
    const _0x3144bff4 = _0x9e504a9e.querySelector('.mv-preview-iframe');
    if (_0x3144bff4) _0x3144bff4.remove();
    _0x9e504a9e.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x438149d8.forEach(iframe => iframe.remove());
  _0x438149d8.clear();
}
const _0x438149d8 = new Map();
function _0x4e1ff679() {
  const _0x5536cab0 = 5000;
  if (!_0x2a938056) return Promise.resolve();
  const _0x476270b8 = _0x135431be.filter(_0xd64bc387 => (_0xd64bc387.featured && _0xd64bc387.ytId));
  if (!_0x476270b8.length) return Promise.resolve();
  const _0xfc4d96d9 = _0x476270b8.map(c => {
    if (_0x438149d8.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x50de74f5 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x50de74f5;
      const _0x601dbf98 = setTimeout(_0x50de74f5, _0x5536cab0);
      iframe.onload = () => {
        clearTimeout(_0x601dbf98);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0x438149d8.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0xfc4d96d9), new Promise(_0x53de1ec5 => setTimeout(_0x53de1ec5, _0x5536cab0))]);
}
function _0xd755d7c8() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0x49364287) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0x9b4e7304)) {
      sessionStorage.removeItem(_0x49364287);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0xff478cf6(_0x1ec3d46d) {
  if (_0x1ec3d46d) sessionStorage.setItem(_0x49364287, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0x49364287);
}
function _0x0dd299d8() {
  if (_0xd755d7c8()) _0xff478cf6(true);
}
setInterval(() => {
  if ((!_0xd755d7c8() && _0x591e5a12("_cb75745c8")?.classList.contains('open'))) {
    _0x591e5a12("_cb75745c8").classList.remove('open');
    _0x368d17cf('', 'error');
  }
}, (60 * 1000));
function closeAdminPanel() {
  document.getElementById("_cb75745c8").classList.remove('open');
  _0x572d3d0a.auth.signOut();
  _0xff478cf6(false);
}
let _0x3b83f250 = '';
document.addEventListener('keydown', _0x4ad862f8 => {
  if (['INPUT', 'TEXTAREA'].includes(_0x4ad862f8.target.tagName)) return;
  if ((_0x4ad862f8.key === 'Escape')) {
    closeModal();
    _0x776f79da();
    closeAdminPanel();
    _0x591e5a12("_c8e31ba48").style.display = 'none';
    return;
  }
  _0x3b83f250 += _0x4ad862f8.key.toLowerCase();
  if ((_0x3b83f250.length > _0x5002ac2d.length)) _0x3b83f250 = _0x3b83f250.slice(-_0x5002ac2d.length);
  if ((_0x3b83f250 === _0x5002ac2d)) {
    _0x3b83f250 = '';
    _0x3a3c22ef();
  }
});
function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(_0xa354c5a3 => _0xa354c5a3.classList.remove("_c28bf1904"));
  document.querySelectorAll('.tab-pane').forEach(_0xeed3580d => _0xeed3580d.classList.remove("_c28bf1904"));
  btn.classList.add("_c28bf1904");
  _0x591e5a12(('tab-' + name)).classList.add("_c28bf1904");
  if ((name === 'list')) _0x7769c078();
  if ((name === 'site')) _0x6699935d();
  if ((name === 'design')) _0xdd2b6ed1();
}
function _0x3a3c22ef() {
  if (_0xd755d7c8()) {
    _0x0dd299d8();
    _0x591e5a12("_cb75745c8").classList.toggle('open');
    return;
  }
  _0x591e5a12("_c04c2d3fa").style.display = 'none';
  _0x591e5a12("_c86207dfc").value = '';
  _0x591e5a12("_c16ede40b").value = '';
  _0x591e5a12("_c5738b248").disabled = false;
  try {
    const _0xafcba0f5 = JSON.parse((sessionStorage.getItem(_0x50d73d98('bG9ja291dA==')) || 'null'));
    if ((_0xafcba0f5 && (Date.now() < _0xafcba0f5.until))) {
      const _0x3280274e = Math.ceil(((_0xafcba0f5.until - Date.now()) / 60000));
      _0x591e5a12("_c04c2d3fa").style.display = 'block';
      _0x591e5a12("_c04c2d3fa").textContent = `🔒 Too many attempts. Try again in ${_0x3280274e} min.`;
      _0x591e5a12("_c5738b248").disabled = true;
    }
  } catch (e) {}
  _0x591e5a12("_c8e31ba48").style.display = 'flex';
  setTimeout(() => _0x591e5a12("_c86207dfc").focus(), 100);
}
async function checkPw() {
  const _0xa9b35669 = 5,
    _0x55bfc39c = ((15 * 60) * 1000),
    now = Date.now();
  const _0xf08f0a18 = _0x50d73d98('bG9ja291dA=='),
    _0xe1156c87 = _0x50d73d98('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0xf08f0a18) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0x591e5a12("_c04c2d3fa").style.display = 'block';
      _0x591e5a12("_c04c2d3fa").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0x591e5a12("_c5738b248").disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0x591e5a12("_c86207dfc").value.trim(),
    _0x47ae0cac = _0x591e5a12("_c16ede40b").value;
  if ((!email || !_0x47ae0cac)) {
    _0x591e5a12("_c04c2d3fa").style.display = 'block';
    _0x591e5a12("_c04c2d3fa").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0x591e5a12("_c5738b248");
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0x572d3d0a.auth.signInWithPassword({
      email,
      password: _0x47ae0cac
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0xe1156c87);
    sessionStorage.removeItem(_0xf08f0a18);
    _0xff478cf6(true);
    _0x591e5a12("_c8e31ba48").style.display = 'none';
    _0x591e5a12("_cb75745c8").classList.add('open');
    _0x368d17cf('Welcome back! ✓', 'success');
  } catch (e) {
    let _0x62403d89 = 0;
    try {
      _0x62403d89 = parseInt((sessionStorage.getItem(_0xe1156c87) || '0'));
    } catch (e) {}
    _0x62403d89++;
    sessionStorage.setItem(_0xe1156c87, _0x62403d89);
    const _0x4f607ad4 = (_0xa9b35669 - _0x62403d89);
    if ((_0x62403d89 >= _0xa9b35669)) {
      sessionStorage.setItem(_0xf08f0a18, JSON.stringify({
        until: (now + _0x55bfc39c)
      }));
      sessionStorage.removeItem(_0xe1156c87);
      _0x591e5a12("_c04c2d3fa").style.display = 'block';
      _0x591e5a12("_c04c2d3fa").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0x591e5a12("_c04c2d3fa").style.display = 'block';
      _0x591e5a12("_c04c2d3fa").textContent = `❌ Wrong credentials. ${_0x4f607ad4} attempt${(_0x4f607ad4 > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0x591e5a12("_c16ede40b").value = '';
    _0x591e5a12("_c16ede40b").focus();
  }
  btn.textContent = 'Sign In →';
}
function _0x73e53ebd(_0x2ab2462c, text) {
  const _0x83b323b5 = _0x591e5a12("_c68815b93"),
    _0xfb27f0a3 = _0x591e5a12("_ccc3fb218");
  if (_0x83b323b5) _0x83b323b5.style.width = (_0x2ab2462c + '%');
  if ((_0xfb27f0a3 && text)) _0xfb27f0a3.textContent = text;
}
function _0x6b733e27() {
  const s = _0x591e5a12("_c217cfed4");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x27a59d6f() {
  const {
    data,
    error
  } = await _0x572d3d0a.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0x135431be = (data || []);
  _0x62f3b054(true);
  _0x7f1766db();
  _0x0b0b1304();
  _0x53b17777();
  if (_0x591e5a12('tab-list')?.classList.contains("_c28bf1904")) _0x7769c078();
}
async function _0x10a2f6b8() {
  const {
    data
  } = await _0x572d3d0a.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x8aaaf79d = data.data;
    if (_0x8aaaf79d.logoData) {
      await new Promise(resolve => {
        const _0x40c4d2ef = new Image();
        _0x40c4d2ef.onload = resolve;
        _0x40c4d2ef.onerror = resolve;
        _0x40c4d2ef.src = _0x8aaaf79d.logoData;
      });
    }
    _0xfc730213();
    _0x0b0b1304();
  }
}
function _0x591e5a12(id) {
  return document.getElementById(id);
}
function _0x1959ba00(id, v) {
  if ((v && _0x591e5a12(id))) _0x591e5a12(id).textContent = v;
}
function _0x038d5287(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0x1fa3580a(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0xcbcc67ae = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0xcbcc67ae ? _0xcbcc67ae[1] : null;
}
let _0x1ab86f9d;
function _0x368d17cf(_0x651c9091, type = '') {
  const t = _0x591e5a12("_cc7478e53");
  t.textContent = _0x651c9091;
  t.className = `toast ${type} show`;
  clearTimeout(_0x1ab86f9d);
  _0x1ab86f9d = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0x518c9603(id) {
  const _0x5ec07ad4 = (_0x591e5a12(id).value || '');
  return _0x5ec07ad4.split(',').map(t => t.trim()).filter(Boolean);
}
function _0x721ca2fa(id, _0x73a022be) {
  _0x591e5a12(id).value = _0x73a022be.join(', ');
}
function togglePresetTag(_0x0bf88014, _0x9b5743c5, btn) {
  _0x0dd299d8();
  let tags = _0x518c9603(_0x0bf88014);
  if (tags.includes(_0x9b5743c5)) {
    tags = tags.filter(t => (t !== _0x9b5743c5));
    btn.classList.remove("_c28bf1904");
  } else {
    tags.push(_0x9b5743c5);
    btn.classList.add("_c28bf1904");
  }
  _0x721ca2fa(_0x0bf88014, tags);
}
function syncPresetHighlight(inputId, _0xe5a9d6e9) {
  const tags = _0x518c9603(inputId),
    _0x656a4a36 = _0x591e5a12(_0xe5a9d6e9);
  if (!_0x656a4a36) return;
  _0x656a4a36.querySelectorAll("._c8ec5c8b0").forEach(btn => {
    btn.classList.toggle("_c28bf1904", tags.includes(btn.textContent.trim()));
  });
}
function _0x49098193(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xa1693119(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x53b17777() {
  const _0x1a228bd1 = _0x135431be.map(c => (c.thumb || (c.ytId ? _0xa1693119(c.ytId) : null))).filter(Boolean);
  if ((_0x1a228bd1.length < 2)) return;
  const _0x7713d47c = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0xe6c0a116 = [{
    id: "_cfc77c466",
    items: _0x7713d47c(_0x1a228bd1, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_c7c3a03ba",
    items: _0x7713d47c([..._0x1a228bd1].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_c951e4e2a",
    items: _0x7713d47c(_0x1a228bd1.slice(Math.floor((_0x1a228bd1.length / 2))).concat(_0x1a228bd1.slice(0, Math.floor((_0x1a228bd1.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0xe6c0a116.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0x114e0301 = _0x591e5a12(id);
    if (!_0x114e0301) return;
    const all = [...items, ...items];
    _0x114e0301.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0xd3761a49 = (items.length * (speed / 20));
      _0x114e0301.style.animationDuration = `${_0xd3761a49}s`;
      if ((dir === 'right')) {
        _0x114e0301.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0x591e5a12("_ccd1da177");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0xc00bde03(c) {
  const thumb = (c.thumb || (c.ytId ? _0x49098193(c.ytId) : ''));
  const _0x80f46326 = c.ytId ? _0xa1693119(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0x038d5287(t)}</span>`).join('');
  const _0x6099e194 = !!c.ytId;
  const _0x34dca5a1 = !!c.featured;
  const _0x921ef78c = (_0x6099e194 && !_0x34dca5a1) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_c419f4be1${_0x34dca5a1 ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0x921ef78c}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0x038d5287(c.title)}" loading="lazy" onerror="this.src='${_0x80f46326}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0x038d5287(c.title)}</div><div class="mv-artist">${_0x038d5287((c.artist || ''))}</div></div></div>
</div>`;
}
function _0x90e7ec6b() {
  return (_0x8aaaf79d.displayMode || 'all');
}
function _0xd87b3db4() {
  return (parseInt(_0x8aaaf79d.perPage) || 12);
}
function _0x62f3b054(_0x3cd06b0c) {
  if (_0x3cd06b0c) {
    _0x13b7292a = 1;
    _0x124fe33c = 0;
  }
  const _0x3ba596ca = _0x591e5a12("_c99d69784"),
    _0xb964097b = _0x90e7ec6b(),
    perPage = _0xd87b3db4();
  const _0x9bf77431 = (_0x19586b01 === 'all') ? _0x135431be : _0x135431be.filter(c => (c.tags || []).includes(_0x19586b01));
  _0x591e5a12("_c9a6de1bb").textContent = String(_0x9bf77431.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0x591e5a12(id);
    if (e) e.remove();
  });
  if (!_0x9bf77431.length) {
    _0x3ba596ca.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0xb964097b === 'pagination')) {
    const _0xb3a7d721 = Math.ceil((_0x9bf77431.length / perPage));
    _0x13b7292a = Math.min(_0x13b7292a, _0xb3a7d721);
    const slice = _0x9bf77431.slice(((_0x13b7292a - 1) * perPage), (_0x13b7292a * perPage));
    _0x3ba596ca.innerHTML = slice.map(_0xc00bde03).join('');
    if ((_0xb3a7d721 > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0xa2aa9915 = 1; (_0xa2aa9915 <= _0xb3a7d721); _0xa2aa9915++) {
        const btn = document.createElement('button');
        btn.textContent = _0xa2aa9915;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0xa2aa9915 === _0x13b7292a) ? 'var(--accent)' : 'transparent'};color:${(_0xa2aa9915 === _0x13b7292a) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0x13b7292a = _0xa2aa9915;
          _0x62f3b054(false);
          window.scrollTo({
            top: (_0x591e5a12("_cd1735a6f").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0x3ba596ca.appendChild(bar);
    }
  } else if ((_0xb964097b === 'loadmore')) {
    if (_0x3cd06b0c) _0x124fe33c = perPage;else _0x124fe33c = Math.max(_0x124fe33c, perPage);
    const slice = _0x9bf77431.slice(0, _0x124fe33c);
    _0x3ba596ca.innerHTML = slice.map(_0xc00bde03).join('');
    if ((_0x124fe33c < _0x9bf77431.length)) {
      const rem = (_0x9bf77431.length - _0x124fe33c);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0x124fe33c += perPage;
        _0x62f3b054(false);
      };
      _0x3ba596ca.appendChild(btn);
    }
  } else {
    _0x3ba596ca.innerHTML = _0x9bf77431.map(_0xc00bde03).join('');
  }
  requestAnimationFrame(() => _0x0fc131a4());
}
function _0x7f1766db() {
  const tags = new Set();
  _0x135431be.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x591e5a12("_c944c4fbe").innerHTML = (`<button class="_c73ff3533${(_0x19586b01 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_c73ff3533${(_0x19586b01 === t) ? ' active' : ''}" onclick="filterCards('${_0x038d5287(t)}',this)">${_0x038d5287(t)}</button>`).join(''));
}
function filterCards(tag, btn) {
  _0x19586b01 = tag;
  document.querySelectorAll("._c73ff3533").forEach(b => b.classList.remove("_c28bf1904"));
  btn.classList.add("_c28bf1904");
  _0x62f3b054(true);
}
function _0x0fc131a4() {
  if (!_0x2a938056) return;
  const _0x970e4dcf = document.querySelectorAll("._c419f4be1.featured");
  _0x970e4dcf.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0x4b2a71a7 = _0x438149d8.get(ytId);
    if (_0x4b2a71a7) {
      _0x4b2a71a7.removeAttribute('style');
      _0x4b2a71a7.className = 'mv-preview-iframe';
      card.insertBefore(_0x4b2a71a7, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0x4b2a71a7.contentWindow) {
        if (_0x4b2a71a7._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0x4b2a71a7.onload = () => {
            _0x4b2a71a7._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0x438149d8.delete(ytId);
    } else {
      _0x4988e52b(card, ytId);
    }
  });
}
function _0x4988e52b(card, ytId) {
  if (!_0x2a938056) return;
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
function _0x2620cc48() {
  const featuredCards = document.querySelectorAll("._c419f4be1.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0x4988e52b(card, ytId);
  });
}
let _0x6d3cc604 = null;
function _0x7769c078() {
  const _0x669496f9 = _0x591e5a12("_c58390bcd");
  if (!_0x135431be.length) {
    _0x669496f9.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0x6d3cc604) {
      _0x6d3cc604.destroy();
      _0x6d3cc604 = null;
    }
    return;
  }
  _0x669496f9.innerHTML = _0x135431be.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0x49098193(c.ytId) : ''));
    const fallback = c.ytId ? _0xa1693119(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0x038d5287(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0x038d5287((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0x038d5287(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0x038d5287((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_c461913b7" id="edit-tag-presets-${c.id}">
  <button type="button" class="_c8ec5c8b0" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_c8ec5c8b0" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_c8ec5c8b0" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_c8ec5c8b0" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_c8ec5c8b0" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0x038d5287((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0x038d5287((c.thumb || ''))}">
<div class="_c0bec6186" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0x6d3cc604) {
    _0x6d3cc604.destroy();
    _0x6d3cc604 = null;
  }
  _0x6d3cc604 = Sortable.create(_0x669496f9, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0x884a2732 => {
      if ((_0x884a2732.oldIndex === _0x884a2732.newIndex)) return;
      const _0x5eaf0760 = _0x135431be.splice(_0x884a2732.oldIndex, 1);
      _0x135431be.splice(_0x884a2732.newIndex, 0, _0x5eaf0760);
      let _0xb2f65ec7 = _0x591e5a12('sort-saving');
      if (!_0xb2f65ec7) {
        _0xb2f65ec7 = document.createElement('div');
        _0xb2f65ec7.id = 'sort-saving';
        _0xb2f65ec7.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0x669496f9.insertAdjacentElement('afterend', _0xb2f65ec7);
      }
      _0xb2f65ec7.textContent = '⟳ Saving order...';
      await Promise.all(_0x135431be.map((c, i) => _0x572d3d0a.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0xb2f65ec7.remove();
      _0x368d17cf('Order saved! ✓', 'success');
      _0x62f3b054(true);
    }
  });
}
function toggleEdit(id) {
  const _0xc5bc9a53 = _0x591e5a12(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0xc5bc9a53.classList.toggle('open');
  if (_0xc5bc9a53.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function saveEdit(id) {
  const _0xa8f44fbe = _0x591e5a12(`e-url-${id}`).value.trim(),
    title = _0x591e5a12(`e-title-${id}`).value.trim(),
    artist = _0x591e5a12(`e-artist-${id}`).value.trim();
  const _0xdd45775f = _0x591e5a12(`e-tags-${id}`).value.trim(),
    thumb = _0x591e5a12(`e-thumb-${id}`).value.trim(),
    _0x541a8443 = _0x591e5a12(`e-feat-${id}`).checked;
  if (!title) {
    _0x368d17cf('Title cannot be empty!', 'error');
    return;
  }
  _0x0dd299d8();
  const ytId = ((_0x1fa3580a(_0xa8f44fbe) || _0xa8f44fbe) || null);
  const tags = _0xdd45775f ? _0xdd45775f.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x591e5a12(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0x572d3d0a.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x541a8443
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0x368d17cf(('Error: ' + error.message), 'error');
    return;
  }
  _0x368d17cf('Work updated! ✓', 'success');
  toggleEdit(id);
}
function _0x0b0b1304() {
  _0x591e5a12("_c78080472").textContent = (_0x135431be.length || '0');
  const _0xc2db0b3a = new Set(_0x135431be.map(c => c.artist).filter(Boolean));
  _0x591e5a12("_c9c17b5fe").textContent = (_0xc2db0b3a.size || '0');
  const tags = new Set();
  _0x135431be.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x591e5a12("_cff008cf0").textContent = (tags.size || '0');
  _0x591e5a12("_c1b874da5").textContent = (_0x8aaaf79d.year || new Date().getFullYear());
}
async function addCard() {
  const _0x4a867306 = _0x591e5a12("_cca9e14b3").value.trim(),
    title = _0x591e5a12("_c73166f5e").value.trim(),
    artist = _0x591e5a12("_ce78492bb").value.trim();
  const _0x93de8e36 = _0x591e5a12("_cff14b822").value.trim(),
    thumb = _0x591e5a12("_ca039feac").value.trim(),
    feat = _0x591e5a12("_c2793baf1").checked;
  if (!title) {
    _0x368d17cf('Title is required!', 'error');
    return;
  }
  _0x0dd299d8();
  const ytId = _0x1fa3580a(_0x4a867306);
  const tags = _0x93de8e36 ? _0x93de8e36.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x591e5a12("_c70e0bbee");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0x572d3d0a.from('mv_works').insert([{
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
    _0x368d17cf(('Error: ' + error.message), 'error');
    return;
  }
  _0x368d17cf('Work added! ✓', 'success');
  ["_cca9e14b3", "_c73166f5e", "_ce78492bb", "_cff14b822", "_ca039feac"].forEach(id => _0x591e5a12(id).value = '');
  _0x591e5a12("_c2793baf1").checked = false;
  document.querySelectorAll("#_c0975053b ._c8ec5c8b0").forEach(b => b.classList.remove("_c28bf1904"));
  _0xd69cc423('', '');
}
async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  _0x0dd299d8();
  const {
    error
  } = await _0x572d3d0a.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x368d17cf(('Error: ' + error.message), 'error');
    return;
  }
  _0x368d17cf('Work removed', 'success');
}
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0x135431be.find(_0x2faed3ed => (_0x2faed3ed.id === id));
  if (!c) return;
  _0x591e5a12("_cedf7d9de").textContent = c.title;
  _0x591e5a12("_c8976c12a").textContent = (c.artist || '');
  _0x591e5a12("_c5f609a77").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0x038d5287(t)}</span>`).join('');
  _0x591e5a12("_c9500cb0e").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x591e5a12("_c8ce8565e").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if ((e && (e.target !== _0x591e5a12("_c8ce8565e")))) return;
  _0x591e5a12("_c8ce8565e").classList.remove('open');
  _0x591e5a12("_c9500cb0e").innerHTML = '';
  document.body.style.overflow = '';
}
function onUrlInput(val) {
  clearTimeout(_0x9ff37817);
  const ytId = _0x1fa3580a(val);
  if (!ytId) {
    _0xd69cc423('', '');
    return;
  }
  _0xd69cc423('loading', '⟳ Fetching info...');
  _0x9ff37817 = setTimeout(() => _0x676693b5(ytId), 800);
}
async function _0x676693b5(ytId) {
  try {
    const _0xa017edd1 = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xa017edd1.ok) throw new Error();
    const data = await _0xa017edd1.json();
    if (!_0x591e5a12("_c73166f5e").value.trim()) _0x591e5a12("_c73166f5e").value = (data.title || '');
    if (!_0x591e5a12("_ce78492bb").value.trim()) _0x591e5a12("_ce78492bb").value = (data.author_name || '');
    _0xd69cc423('ok', '✓ Info fetched');
  } catch {
    _0xd69cc423('err', '⚠ Could not fetch info');
  }
}
function _0xd69cc423(type, msg) {
  const s = _0x591e5a12("_c90ade352");
  s.textContent = msg;
  s.className = ("_c90ade352" + (type ? (' ' + type) : ''));
}
let _0x2d623ab7 = null;
function toggleEditMode() {
  const _0x123d6dd3 = document.body.classList.toggle('edit-mode');
  const bar = _0x591e5a12('edit-mode-bar');
  const btn = _0x591e5a12('edit-mode-toggle-btn');
  if (_0x123d6dd3) {
    bar.classList.add("_c28bf1904");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0x591e5a12("_cb75745c8").classList.remove('open');
    _0x2909902c();
  } else {
    exitEditMode();
  }
}
function exitEditMode() {
  document.body.classList.remove('edit-mode');
  _0x591e5a12('edit-mode-bar').classList.remove("_c28bf1904");
  const btn = _0x591e5a12('edit-mode-toggle-btn');
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0x2d623ab7) {
    _0x2d623ab7.destroy();
    _0x2d623ab7 = null;
  }
}
function _0x2909902c() {
  const grid = _0x591e5a12("_c99d69784");
  if (!grid) return;
  if (_0x2d623ab7) _0x2d623ab7.destroy();
  _0x2d623ab7 = Sortable.create(grid, {
    animation: 200,
    draggable: "._c419f4be1",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0x135431be.splice(evt.oldIndex, 1);
      _0x135431be.splice(evt.newIndex, 0, moved);
      _0x368d17cf('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function saveGridOrder() {
  _0x368d17cf('Saving order...', '');
  await Promise.all(_0x135431be.map((c, i) => _0x572d3d0a.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0x368d17cf('Order saved! ✓', 'success');
  exitEditMode();
  _0x62f3b054(true);
}
let _0xc557fffc = null;
let _0x8adf52cc = null;
const _0xa67641d3 = new Map();
function startPreview(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0xa67641d3.has(ytId)) {
    const _0xff9f15a5 = document.createElement('iframe');
    _0xff9f15a5.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0xff9f15a5.allow = 'autoplay';
    _0xff9f15a5.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0xff9f15a5);
    _0xa67641d3.set(ytId, _0xff9f15a5);
  }
  _0xc557fffc = setTimeout(() => {
    stopPreview(_0x8adf52cc);
    _0x8adf52cc = card;
    card.classList.add('previewing');
    const _0x650cee79 = _0xa67641d3.get(ytId);
    if (_0x650cee79) {
      _0x650cee79.removeAttribute('style');
      _0x650cee79.className = 'mv-preview-iframe';
      _0x650cee79.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x650cee79, card.firstChild);
      _0x650cee79.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function stopPreview(card) {
  clearTimeout(_0xc557fffc);
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
  if ((_0x8adf52cc === card)) _0x8adf52cc = null;
}
const _0xdc380e8c = {
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
function _0x263d053d(name) {
  const p = _0xdc380e8c[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x49043965 = _0x591e5a12(('color-' + k));
    if (_0x49043965) _0x49043965.value = v;
    const _0x94444ff6 = _0x591e5a12((('color-' + k) + '-hex'));
    if (_0x94444ff6) _0x94444ff6.value = v;
  });
  _0x368d17cf('Preview applied — click Save Colors to keep it', '');
}
function previewColor(_0x6b525f6b, val) {
  document.documentElement.style.setProperty(('--' + _0x6b525f6b), val);
  const hex = _0x591e5a12((('color-' + _0x6b525f6b) + '-hex'));
  if (hex) hex.value = val;
}
function previewColorHex(varName, _0x471f256f) {
  const val = _0x471f256f.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0x87604f55 = _0x591e5a12(('color-' + varName));
    if (_0x87604f55) _0x87604f55.value = val;
  }
}
async function saveColors() {
  _0x0dd299d8();
  const colors = {
    text: (_0x591e5a12('color-text')?.value || '#f0f0f0'),
    accent: _0x591e5a12('color-accent').value,
    accent2: _0x591e5a12('color-accent2').value,
    bg: _0x591e5a12('color-bg').value,
    surface: _0x591e5a12('color-surface').value
  };
  _0x8aaaf79d.colors = colors;
  const btn = _0x591e5a12('color-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0x572d3d0a.from('mv_site').upsert({
      id: 1,
      data: _0x8aaaf79d
    });
    if (error) throw error;
    _0x368d17cf('Colors saved! ✓', 'success');
  } catch (err) {
    _0x368d17cf(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0xa8b2e4d0(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0x591e5a12(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0x591e5a12((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function resetColors() {
  const _0x1cbb7c66 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0xa8b2e4d0(_0x1cbb7c66);
  _0x8aaaf79d.colors = _0x1cbb7c66;
  _0x368d17cf('Reset to default — click Save Colors to keep it', '');
}
function _0xdd2b6ed1() {
  if (_0x8aaaf79d.colors) _0xa8b2e4d0(_0x8aaaf79d.colors);
  if (_0x8aaaf79d.logoData) {
    const _0x57b3612b = _0x591e5a12("_c03b86f09");
    const img = _0x591e5a12("_c331efb37");
    if ((_0x57b3612b && img)) {
      img.src = _0x8aaaf79d.logoData;
      _0x57b3612b.style.display = 'block';
    }
  }
}
let _0xb2573070 = null;
let _0x9033cceb = null;
function _0x7ccbe2bc(_0x4ccd4940) {
  if ((_0x4ccd4940.type && (_0x4ccd4940.type !== ''))) return _0x4ccd4940.type;
  const _0xdb347fd5 = _0x4ccd4940.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0xdb347fd5] || 'image/png');
}
function _0xec7f78f6(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0xd0e015ce(file, _0xd71f6dd6) {
  if (!file) return null;
  const _0x84203507 = _0x7ccbe2bc(file);
  const ext = _0xec7f78f6(file);
  const _0x4e07e6a2 = `${_0xd71f6dd6}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0x572d3d0a.storage.from('portfolio-assets').upload(_0x4e07e6a2, file, {
    upsert: true,
    contentType: _0x84203507
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x83e6bf8d
  } = _0x572d3d0a.storage.from('portfolio-assets').getPublicUrl(_0x4e07e6a2);
  return _0x83e6bf8d.publicUrl;
}
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0xb2573070 = file;
  const _0x3002c5fb = URL.createObjectURL(file);
  const prev = _0x591e5a12("_c03b86f09"),
    img = _0x591e5a12("_c331efb37");
  if ((prev && img)) {
    img.src = _0x3002c5fb;
    prev.style.display = 'block';
  }
  _0x368d17cf('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x9033cceb = file;
  _0x368d17cf('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
  _0x0dd299d8();
  if ((!_0xb2573070 && !_0x9033cceb)) {
    _0x368d17cf('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0x591e5a12("_c045af35f");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0xb2573070) {
      const _0x12eb4f42 = await _0xd0e015ce(_0xb2573070, 'logos');
      if (_0x12eb4f42) _0x8aaaf79d.logoData = _0x12eb4f42;
    }
    if (_0x9033cceb) {
      const _0x60af9684 = await _0xd0e015ce(_0x9033cceb, 'favicons');
      if (_0x60af9684) _0x8aaaf79d.faviconData = _0x60af9684;
    }
    const {
      error
    } = await _0x572d3d0a.from('mv_site').upsert({
      id: 1,
      data: _0x8aaaf79d
    });
    if (error) throw error;
    _0x3ef98c99();
    _0x591e5a12("_cacbe2dee").value = '';
    _0x591e5a12("_c98e49b4f").value = '';
    _0xb2573070 = null;
    _0x9033cceb = null;
    _0x368d17cf('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x368d17cf(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0x3ef98c99() {
  const _0xb567ebd5 = document.getElementById("_c921b447e");
  const _0x8f28c608 = document.getElementById("_c325b37e0");
  if (_0x8aaaf79d.logoData) {
    if (_0x8f28c608) _0x8f28c608.style.display = 'none';
    if (_0xb567ebd5) {
      _0xb567ebd5.style.display = 'block';
      _0xb567ebd5.src = _0x8aaaf79d.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x8aaaf79d.logoData);
    } catch (e) {}
  } else {
    if (_0xb567ebd5) _0xb567ebd5.style.display = 'none';
    if (_0x8f28c608) _0x8f28c608.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0x8aaaf79d.faviconData) {
    let _0x79742485 = document.querySelector('link[rel="icon"]');
    if (!_0x79742485) {
      _0x79742485 = document.createElement('link');
      _0x79742485.rel = 'icon';
      document.head.appendChild(_0x79742485);
    }
    _0x79742485.href = _0x8aaaf79d.faviconData;
  }
}
async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0x0dd299d8();
  _0x8aaaf79d.logoData = null;
  const {
    error
  } = await _0x572d3d0a.from('mv_site').upsert({
    id: 1,
    data: _0x8aaaf79d
  });
  if (error) {
    _0x368d17cf(('Error: ' + error.message), 'error');
    return;
  }
  _0x3ef98c99();
  const prev = _0x591e5a12("_c03b86f09"),
    img = _0x591e5a12("_c331efb37");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0x368d17cf('Logo dihapus! ✓', 'success');
}
function _0xfc730213() {
  const s = _0x8aaaf79d;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0xa8b2e4d0(s.colors);
  _0x3ef98c99();
  const _0x98c7c03a = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0x98c7c03a;
  if (_0x591e5a12("_c8c2eb826")) _0x591e5a12("_c8c2eb826").textContent = _0x98c7c03a;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0x591e5a12("_cbe9c63d7").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0x591e5a12("_c431e0658").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0x1959ba00("_c418f1112", s.label);
  _0x1959ba00("_cff516168", s.hsub);
  _0x1959ba00("_c40dc6891", s.about1);
  _0x1959ba00("_cf0d5285a", s.about2);
  _0x1959ba00("_c51871b7e", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xe31a230e = s.htitle.split('|');
    _0x591e5a12("_c4341d751").innerHTML = _0xe31a230e.map((_0xc0161576, i) => (i === 0) ? _0xc0161576 : (i === 1) ? `<span class="_c8c58cb1c">${_0xc0161576}</span>` : `<span class="_cc7dc3c10">${_0xc0161576}</span>`).join('<br>');
  }
  const _0x2c454e1e = [{
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
  const _0xfabb342c = _0x591e5a12("_cb179cc02"),
    _0x2acddbf8 = _0x591e5a12("_ceda88d1c");
  if (_0xfabb342c) _0xfabb342c.innerHTML = _0x2c454e1e.filter(_0xe35fd665 => s[_0xe35fd665.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_c653ca657 ${s2.primary ? "_ce1e41e64" : "_c7c8551f0"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x2acddbf8) _0x2acddbf8.innerHTML = _0x2c454e1e.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0x6699935d() {
  const s = _0x8aaaf79d;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0xd4a76ea1 => {
    if (_0x591e5a12(('s-' + _0xd4a76ea1))) _0x591e5a12(('s-' + _0xd4a76ea1)).value = (s[_0xd4a76ea1] || '');
  });
  if (_0x591e5a12('s-perpage')) _0x591e5a12('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0x4e66eff8 = _0x591e5a12(('dm-' + mode));
  if (_0x4e66eff8) _0x4e66eff8.checked = true;
}
function previewMode(mode) {
  _0x8aaaf79d.displayMode = mode;
  _0x62f3b054(true);
}
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0x8aaaf79d = {
    brand: _0x591e5a12('s-brand').value,
    siteTitle: _0x591e5a12('s-siteTitle').value,
    label: _0x591e5a12('s-label').value,
    htitle: _0x591e5a12('s-htitle').value,
    hsub: _0x591e5a12('s-hsub').value,
    about1: _0x591e5a12('s-about1').value,
    about2: _0x591e5a12('s-about2').value,
    yt: _0x591e5a12('s-yt').value,
    tw: _0x591e5a12('s-tw').value,
    discord: _0x591e5a12('s-discord').value,
    vgen: _0x591e5a12('s-vgen').value,
    ig: _0x591e5a12('s-ig').value,
    tiktok: _0x591e5a12('s-tiktok').value,
    copy: _0x591e5a12('s-copy').value,
    year: _0x591e5a12('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0x591e5a12('s-perpage')?.value) || 12),
    colors: _0x8aaaf79d.colors,
    logoData: _0x8aaaf79d.logoData,
    faviconData: _0x8aaaf79d.faviconData
  };
  const btn = _0x591e5a12("_c2b8c3cf9");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0x0dd299d8();
  try {
    const {
      error
    } = await _0x572d3d0a.from('mv_site').upsert({
      id: 1,
      data: _0x8aaaf79d
    });
    if (error) throw error;
    _0xfc730213();
    _0x0b0b1304();
    _0x62f3b054(true);
    _0x368d17cf('Site info saved! ✓', 'success');
  } catch (err) {
    _0x368d17cf(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0x776f79da() {
  const _0xc98d75e0 = _0x591e5a12('site-edit-panel');
  if (_0xc98d75e0) _0xc98d75e0.classList.remove('open');
}
async function _0x2b66692a() {
  const _0x83c388c1 = _0x591e5a12("_cacbe2dee"),
    _0x15dffd7a = _0x591e5a12("_c98e49b4f");
  if (_0x83c388c1) _0x83c388c1.value = '';
  if (_0x15dffd7a) _0x15dffd7a.value = '';
  document.body.classList.add('loading');
  _0x73e53ebd(15, 'Connecting...');
  _0x572d3d0a = window.supabase.createClient(_0x1c4e7566, _0x5af3b772);
  _0x73e53ebd(35, 'Loading site info...');
  await _0x10a2f6b8();
  _0x73e53ebd(60, 'Loading works...');
  await _0x27a59d6f();
  _0x73e53ebd(75, 'Preloading previews...');
  await _0x4e1ff679();
  _0x73e53ebd(90, 'Almost there...');
  _0x572d3d0a.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x27a59d6f).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x10a2f6b8).subscribe();
  setTimeout(() => {
    _0x73e53ebd(100, 'Ready!');
    setTimeout(() => {
      _0x6b733e27();
      _0xa7087167();
      if (_0xd755d7c8()) _0x591e5a12("_cb75745c8").classList.add('open');
    }, 300);
  }, 200);
}
_0x2b66692a();
