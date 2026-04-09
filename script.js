const _0xf6b41d60 = _0x8e00db82 => atob(_0x8e00db82);
const _0x6c052a28 = _0xf6b41d60('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x117a3de6 = _0xf6b41d60('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x600f1e3a = _0xf6b41d60('YWRt');
const _0xf2552d05 = _0xf6b41d60('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x6e8255f9 = ((60 * 60) * 1000);
let _0xabe1466d,
  _0x2cc905d3 = [],
  _0x9564ac24 = {},
  _0x18bdb942 = 'all',
  _0x786727eb = null,
  _0x21b80482 = 1,
  _0x031e32b5 = 0;
let _0x98576f75 = (() => {
  try {
    const _0x879a5839 = localStorage.getItem('mv_autoplay');
    return (_0x879a5839 === null) ? true : (_0x879a5839 === '1');
  } catch {
    return true;
  }
})();
function toggleAutoplay() {
  _0x98576f75 = !_0x98576f75;
  try {
    localStorage.setItem('mv_autoplay', _0x98576f75 ? '1' : '0');
  } catch {}
  _0x8b075129();
  if (_0x98576f75) {
    _0x41d1dac7();
    _0xe4b56738();
  } else {
    _0x9b8869a4();
  }
}
function _0x8b075129() {
  const _0xc2439b9c = _0x5289aa5d("_ca2529ddc"),
    label = _0x5289aa5d("_cda9f364c");
  if (!_0xc2439b9c) return;
  if (_0x98576f75) {
    _0xc2439b9c.classList.add("_ca4e3ea0f");
    if (label) label.textContent = 'Autoplay';
    _0xc2439b9c.title = 'Autoplay ON — click to turn off';
  } else {
    _0xc2439b9c.classList.remove("_ca4e3ea0f");
    if (label) label.textContent = 'Autoplay';
    _0xc2439b9c.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x9b8869a4() {
  document.querySelectorAll("._c3e377cd8.featured-autoplay").forEach(_0x6a61fe66 => {
    const _0x9a0c3cd7 = _0x6a61fe66.querySelector('.mv-preview-iframe');
    if (_0x9a0c3cd7) _0x9a0c3cd7.remove();
    _0x6a61fe66.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0xc6cce66c.forEach(iframe => iframe.remove());
  _0xc6cce66c.clear();
}
const _0xc6cce66c = new Map();
function _0xbccb9dbf() {
  const _0x2d37a0ae = 5000;
  if (!_0x98576f75) return Promise.resolve();
  const _0xb4e46849 = _0x2cc905d3.filter(_0xe7307afc => (_0xe7307afc.featured && _0xe7307afc.ytId));
  if (!_0xb4e46849.length) return Promise.resolve();
  const _0x4cf88e3e = _0xb4e46849.map(c => {
    if (_0xc6cce66c.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x8fd9f647 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x8fd9f647;
      const _0xf65e346a = setTimeout(_0x8fd9f647, _0x2d37a0ae);
      iframe.onload = () => {
        clearTimeout(_0xf65e346a);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0xc6cce66c.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x4cf88e3e), new Promise(_0xae6635af => setTimeout(_0xae6635af, _0x2d37a0ae))]);
}
function _0xc38e3136() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0xf2552d05) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0x6e8255f9)) {
      sessionStorage.removeItem(_0xf2552d05);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x014174d9(_0xd45d722c) {
  if (_0xd45d722c) sessionStorage.setItem(_0xf2552d05, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0xf2552d05);
}
function _0x2a6101fe() {
  if (_0xc38e3136()) _0x014174d9(true);
}
setInterval(() => {
  if ((!_0xc38e3136() && _0x5289aa5d("_c3eae28dc")?.classList.contains('open'))) {
    _0x5289aa5d("_c3eae28dc").classList.remove('open');
    _0x7cf6f445('Admin session expired. Type "adm" to log in again.', 'error');
  }
}, (60 * 1000));
function closeAdminPanel() {
  document.getElementById("_c3eae28dc").classList.remove('open');
  _0xabe1466d.auth.signOut();
  _0x014174d9(false);
}
let _0xe0c3e63d = '';
document.addEventListener('keydown', _0x175a53bb => {
  if (['INPUT', 'TEXTAREA'].includes(_0x175a53bb.target.tagName)) return;
  if ((_0x175a53bb.key === 'Escape')) {
    closeModal();
    _0x19eba93e();
    closeAdminPanel();
    _0x5289aa5d("_c8113771c").style.display = 'none';
    return;
  }
  _0xe0c3e63d += _0x175a53bb.key.toLowerCase();
  if ((_0xe0c3e63d.length > _0x600f1e3a.length)) _0xe0c3e63d = _0xe0c3e63d.slice(-_0x600f1e3a.length);
  if ((_0xe0c3e63d === _0x600f1e3a)) {
    _0xe0c3e63d = '';
    _0xbdcc3fd4();
  }
});
function switchTab(name, btn) {
  document.querySelectorAll("._c9c87d26f").forEach(_0xf9dcec1b => _0xf9dcec1b.classList.remove("_ca4e3ea0f"));
  document.querySelectorAll("._cfeaf9f12").forEach(_0xae745081 => _0xae745081.classList.remove("_ca4e3ea0f"));
  btn.classList.add("_ca4e3ea0f");
  _0x5289aa5d(('tab-' + name)).classList.add("_ca4e3ea0f");
  if ((name === 'list')) _0xd46e757f();
  if ((name === 'site')) _0xd510b4fa();
  if ((name === 'design')) _0x2e350c9d();
}
function _0xbdcc3fd4() {
  if (_0xc38e3136()) {
    _0x2a6101fe();
    _0x5289aa5d("_c3eae28dc").classList.toggle('open');
    return;
  }
  _0x5289aa5d("_cea3e9cec").style.display = 'none';
  _0x5289aa5d("_c1c6e4397").value = '';
  _0x5289aa5d("_c83271b3e").value = '';
  _0x5289aa5d("_cbaceb49a").disabled = false;
  try {
    const _0x06bbf82a = JSON.parse((sessionStorage.getItem(_0xf6b41d60('bG9ja291dA==')) || 'null'));
    if ((_0x06bbf82a && (Date.now() < _0x06bbf82a.until))) {
      const _0x933ac250 = Math.ceil(((_0x06bbf82a.until - Date.now()) / 60000));
      _0x5289aa5d("_cea3e9cec").style.display = 'block';
      _0x5289aa5d("_cea3e9cec").textContent = `🔒 Too many attempts. Try again in ${_0x933ac250} min.`;
      _0x5289aa5d("_cbaceb49a").disabled = true;
    }
  } catch (e) {}
  _0x5289aa5d("_c8113771c").style.display = 'flex';
  setTimeout(() => _0x5289aa5d("_c1c6e4397").focus(), 100);
}
async function checkPw() {
  const _0x6ebd09f6 = 5,
    _0xb10e6a98 = ((15 * 60) * 1000),
    now = Date.now();
  const _0x292dc1ed = _0xf6b41d60('bG9ja291dA=='),
    _0x8bec9627 = _0xf6b41d60('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0x292dc1ed) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0x5289aa5d("_cea3e9cec").style.display = 'block';
      _0x5289aa5d("_cea3e9cec").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0x5289aa5d("_cbaceb49a").disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0x5289aa5d("_c1c6e4397").value.trim(),
    _0x807bca44 = _0x5289aa5d("_c83271b3e").value;
  if ((!email || !_0x807bca44)) {
    _0x5289aa5d("_cea3e9cec").style.display = 'block';
    _0x5289aa5d("_cea3e9cec").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0x5289aa5d("_cbaceb49a");
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0xabe1466d.auth.signInWithPassword({
      email,
      password: _0x807bca44
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0x8bec9627);
    sessionStorage.removeItem(_0x292dc1ed);
    _0x014174d9(true);
    _0x5289aa5d("_c8113771c").style.display = 'none';
    _0x5289aa5d("_c3eae28dc").classList.add('open');
    _0x7cf6f445('Welcome back! ✓', 'success');
  } catch (e) {
    let _0x82967f11 = 0;
    try {
      _0x82967f11 = parseInt((sessionStorage.getItem(_0x8bec9627) || '0'));
    } catch (e) {}
    _0x82967f11++;
    sessionStorage.setItem(_0x8bec9627, _0x82967f11);
    const _0xf93a11f6 = (_0x6ebd09f6 - _0x82967f11);
    if ((_0x82967f11 >= _0x6ebd09f6)) {
      sessionStorage.setItem(_0x292dc1ed, JSON.stringify({
        until: (now + _0xb10e6a98)
      }));
      sessionStorage.removeItem(_0x8bec9627);
      _0x5289aa5d("_cea3e9cec").style.display = 'block';
      _0x5289aa5d("_cea3e9cec").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0x5289aa5d("_cea3e9cec").style.display = 'block';
      _0x5289aa5d("_cea3e9cec").textContent = `❌ Wrong credentials. ${_0xf93a11f6} attempt${(_0xf93a11f6 > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0x5289aa5d("_c83271b3e").value = '';
    _0x5289aa5d("_c83271b3e").focus();
  }
  btn.textContent = 'Sign In →';
}
function _0xed8d112b(_0xd11be18a, text) {
  const _0xc5838df1 = _0x5289aa5d("_c1ad66b7e"),
    _0x1bcc8a2e = _0x5289aa5d("_ca78112a7");
  if (_0xc5838df1) _0xc5838df1.style.width = (_0xd11be18a + '%');
  if ((_0x1bcc8a2e && text)) _0x1bcc8a2e.textContent = text;
}
function _0x60f20b9b() {
  const s = _0x5289aa5d("_cf4c511fe");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0xf8e56506() {
  const {
    data,
    error
  } = await _0xabe1466d.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0x2cc905d3 = (data || []);
  _0xf2c3a627(true);
  _0xbd63ffdc();
  _0x924974fc();
  _0x9b141bb4();
  if (_0x5289aa5d("_cd2accdef")?.classList.contains("_ca4e3ea0f")) _0xd46e757f();
}
async function _0x1a6b2304() {
  const {
    data
  } = await _0xabe1466d.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x9564ac24 = data.data;
    if (_0x9564ac24.logoData) {
      await new Promise(resolve => {
        const _0x66541b09 = new Image();
        _0x66541b09.onload = resolve;
        _0x66541b09.onerror = resolve;
        _0x66541b09.src = _0x9564ac24.logoData;
      });
    }
    _0x216d7fd4();
    _0x924974fc();
  }
}
function _0x5289aa5d(id) {
  return document.getElementById(id);
}
function _0xdd2555d3(id, v) {
  if ((v && _0x5289aa5d(id))) _0x5289aa5d(id).textContent = v;
}
function _0x41db9b9c(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0xb7112657(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0x62f48728 = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0x62f48728 ? _0x62f48728[1] : null;
}
let _0x3cf559d1;
function _0x7cf6f445(_0x1d9ba6bb, type = '') {
  const t = _0x5289aa5d("_cc455c45b");
  t.textContent = _0x1d9ba6bb;
  t.className = `toast ${type} show`;
  clearTimeout(_0x3cf559d1);
  _0x3cf559d1 = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0x8d51ebd7(id) {
  const _0x4e8d93bc = (_0x5289aa5d(id).value || '');
  return _0x4e8d93bc.split(',').map(t => t.trim()).filter(Boolean);
}
function _0x98fad2b5(id, _0xc0c5a82c) {
  _0x5289aa5d(id).value = _0xc0c5a82c.join(', ');
}
function togglePresetTag(_0x9c680788, _0xcf0e6726, btn) {
  _0x2a6101fe();
  let tags = _0x8d51ebd7(_0x9c680788);
  if (tags.includes(_0xcf0e6726)) {
    tags = tags.filter(t => (t !== _0xcf0e6726));
    btn.classList.remove("_ca4e3ea0f");
  } else {
    tags.push(_0xcf0e6726);
    btn.classList.add("_ca4e3ea0f");
  }
  _0x98fad2b5(_0x9c680788, tags);
}
function syncPresetHighlight(inputId, _0xb0fc79c6) {
  const tags = _0x8d51ebd7(inputId),
    _0xdf1c3540 = _0x5289aa5d(_0xb0fc79c6);
  if (!_0xdf1c3540) return;
  _0xdf1c3540.querySelectorAll("._caea077e7").forEach(btn => {
    btn.classList.toggle("_ca4e3ea0f", tags.includes(btn.textContent.trim()));
  });
}
function _0xf7754930(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xb60c793c(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x9b141bb4() {
  const _0xec742581 = _0x2cc905d3.map(c => (c.thumb || (c.ytId ? _0xb60c793c(c.ytId) : null))).filter(Boolean);
  if ((_0xec742581.length < 2)) return;
  const _0x166c34c2 = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0xd0ab5854 = [{
    id: "_c9a6f0702",
    items: _0x166c34c2(_0xec742581, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_c2a5a2263",
    items: _0x166c34c2([..._0xec742581].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_cb5962a0a",
    items: _0x166c34c2(_0xec742581.slice(Math.floor((_0xec742581.length / 2))).concat(_0xec742581.slice(0, Math.floor((_0xec742581.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0xd0ab5854.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0x0818119d = _0x5289aa5d(id);
    if (!_0x0818119d) return;
    const all = [...items, ...items];
    _0x0818119d.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0x41eee932 = (items.length * (speed / 20));
      _0x0818119d.style.animationDuration = `${_0x41eee932}s`;
      if ((dir === 'right')) {
        _0x0818119d.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0x5289aa5d("_c2347e2ed");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0x049fc29a(c) {
  const thumb = (c.thumb || (c.ytId ? _0xf7754930(c.ytId) : ''));
  const _0xe2f8674e = c.ytId ? _0xb60c793c(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0x41db9b9c(t)}</span>`).join('');
  const _0x6f63dd11 = !!c.ytId;
  const _0xb7888073 = !!c.featured;
  const _0x13cad996 = (_0x6f63dd11 && !_0xb7888073) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_c3e377cd8${_0xb7888073 ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0x13cad996}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0x41db9b9c(c.title)}" loading="lazy" onerror="this.src='${_0xe2f8674e}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0x41db9b9c(c.title)}</div><div class="mv-artist">${_0x41db9b9c((c.artist || ''))}</div></div></div>
</div>`;
}
function _0x07263546() {
  return (_0x9564ac24.displayMode || 'all');
}
function _0xe1905fea() {
  return (parseInt(_0x9564ac24.perPage) || 12);
}
function _0xf2c3a627(_0xe41497ed) {
  if (_0xe41497ed) {
    _0x21b80482 = 1;
    _0x031e32b5 = 0;
  }
  const _0x92c99507 = _0x5289aa5d("_cf6a7221c"),
    _0x713e680f = _0x07263546(),
    perPage = _0xe1905fea();
  const _0x02bd87c2 = (_0x18bdb942 === 'all') ? _0x2cc905d3 : _0x2cc905d3.filter(c => (c.tags || []).includes(_0x18bdb942));
  _0x5289aa5d("_c65d11cb2").textContent = String(_0x02bd87c2.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0x5289aa5d(id);
    if (e) e.remove();
  });
  if (!_0x02bd87c2.length) {
    _0x92c99507.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0x713e680f === 'pagination')) {
    const _0xcba57f6f = Math.ceil((_0x02bd87c2.length / perPage));
    _0x21b80482 = Math.min(_0x21b80482, _0xcba57f6f);
    const slice = _0x02bd87c2.slice(((_0x21b80482 - 1) * perPage), (_0x21b80482 * perPage));
    _0x92c99507.innerHTML = slice.map(_0x049fc29a).join('');
    if ((_0xcba57f6f > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x98be12a2 = 1; (_0x98be12a2 <= _0xcba57f6f); _0x98be12a2++) {
        const btn = document.createElement('button');
        btn.textContent = _0x98be12a2;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x98be12a2 === _0x21b80482) ? 'var(--accent)' : 'transparent'};color:${(_0x98be12a2 === _0x21b80482) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0x21b80482 = _0x98be12a2;
          _0xf2c3a627(false);
          window.scrollTo({
            top: (_0x5289aa5d("_c89237c2d").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0x92c99507.appendChild(bar);
    }
  } else if ((_0x713e680f === 'loadmore')) {
    if (_0xe41497ed) _0x031e32b5 = perPage;else _0x031e32b5 = Math.max(_0x031e32b5, perPage);
    const slice = _0x02bd87c2.slice(0, _0x031e32b5);
    _0x92c99507.innerHTML = slice.map(_0x049fc29a).join('');
    if ((_0x031e32b5 < _0x02bd87c2.length)) {
      const rem = (_0x02bd87c2.length - _0x031e32b5);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0x031e32b5 += perPage;
        _0xf2c3a627(false);
      };
      _0x92c99507.appendChild(btn);
    }
  } else {
    _0x92c99507.innerHTML = _0x02bd87c2.map(_0x049fc29a).join('');
  }
  requestAnimationFrame(() => _0x41d1dac7());
}
function _0xbd63ffdc() {
  const tags = new Set();
  _0x2cc905d3.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x5289aa5d("_c0424a5d1").innerHTML = (`<button class="_c5c8e2384${(_0x18bdb942 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_c5c8e2384${(_0x18bdb942 === t) ? ' active' : ''}" onclick="filterCards('${_0x41db9b9c(t)}',this)">${_0x41db9b9c(t)}</button>`).join(''));
}
function filterCards(tag, btn) {
  _0x18bdb942 = tag;
  document.querySelectorAll("._c5c8e2384").forEach(b => b.classList.remove("_ca4e3ea0f"));
  btn.classList.add("_ca4e3ea0f");
  _0xf2c3a627(true);
}
function _0x41d1dac7() {
  if (!_0x98576f75) return;
  const _0x21c8e9ba = document.querySelectorAll("._c3e377cd8.featured");
  _0x21c8e9ba.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0x4bcf9457 = _0xc6cce66c.get(ytId);
    if (_0x4bcf9457) {
      _0x4bcf9457.removeAttribute('style');
      _0x4bcf9457.className = 'mv-preview-iframe';
      card.insertBefore(_0x4bcf9457, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0x4bcf9457.contentWindow) {
        if (_0x4bcf9457._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0x4bcf9457.onload = () => {
            _0x4bcf9457._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0xc6cce66c.delete(ytId);
    } else {
      _0x33fb60b3(card, ytId);
    }
  });
}
function _0x33fb60b3(card, ytId) {
  if (!_0x98576f75) return;
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
function _0xe4b56738() {
  const featuredCards = document.querySelectorAll("._c3e377cd8.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0x33fb60b3(card, ytId);
  });
}
let _0xf0b8424e = null;
function _0xd46e757f() {
  const _0xdbf23bfd = _0x5289aa5d("_cbc29a428");
  if (!_0x2cc905d3.length) {
    _0xdbf23bfd.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0xf0b8424e) {
      _0xf0b8424e.destroy();
      _0xf0b8424e = null;
    }
    return;
  }
  _0xdbf23bfd.innerHTML = _0x2cc905d3.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0xf7754930(c.ytId) : ''));
    const fallback = c.ytId ? _0xb60c793c(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0x41db9b9c(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0x41db9b9c((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0x41db9b9c(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0x41db9b9c((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_c54026ae7" id="edit-tag-presets-${c.id}">
  <button type="button" class="_caea077e7" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_caea077e7" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_caea077e7" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_caea077e7" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_caea077e7" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0x41db9b9c((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0x41db9b9c((c.thumb || ''))}">
<div class="_cfed55e07" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0xf0b8424e) {
    _0xf0b8424e.destroy();
    _0xf0b8424e = null;
  }
  _0xf0b8424e = Sortable.create(_0xdbf23bfd, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0xe876ebce => {
      if ((_0xe876ebce.oldIndex === _0xe876ebce.newIndex)) return;
      const _0x447b5aef = _0x2cc905d3.splice(_0xe876ebce.oldIndex, 1);
      _0x2cc905d3.splice(_0xe876ebce.newIndex, 0, _0x447b5aef);
      let _0xd63830f3 = _0x5289aa5d('sort-saving');
      if (!_0xd63830f3) {
        _0xd63830f3 = document.createElement('div');
        _0xd63830f3.id = 'sort-saving';
        _0xd63830f3.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xdbf23bfd.insertAdjacentElement('afterend', _0xd63830f3);
      }
      _0xd63830f3.textContent = '⟳ Saving order...';
      await Promise.all(_0x2cc905d3.map((c, i) => _0xabe1466d.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0xd63830f3.remove();
      _0x7cf6f445('Order saved! ✓', 'success');
      _0xf2c3a627(true);
    }
  });
}
function _0x997ba215(id) {
  const _0x021e4e9a = _0x5289aa5d(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0x021e4e9a.classList.toggle('open');
  if (_0x021e4e9a.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function _0x4d505dac(id) {
  const _0x31e518fd = _0x5289aa5d(`e-url-${id}`).value.trim(),
    title = _0x5289aa5d(`e-title-${id}`).value.trim(),
    artist = _0x5289aa5d(`e-artist-${id}`).value.trim();
  const _0xf92f090a = _0x5289aa5d(`e-tags-${id}`).value.trim(),
    thumb = _0x5289aa5d(`e-thumb-${id}`).value.trim(),
    _0x150721bb = _0x5289aa5d(`e-feat-${id}`).checked;
  if (!title) {
    _0x7cf6f445('Title cannot be empty!', 'error');
    return;
  }
  _0x2a6101fe();
  const ytId = ((_0xb7112657(_0x31e518fd) || _0x31e518fd) || null);
  const tags = _0xf92f090a ? _0xf92f090a.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x5289aa5d(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0xabe1466d.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x150721bb
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0x7cf6f445(('Error: ' + error.message), 'error');
    return;
  }
  _0x7cf6f445('Work updated! ✓', 'success');
  _0x997ba215(id);
}
function _0x924974fc() {
  _0x5289aa5d("_c874add7c").textContent = (_0x2cc905d3.length || '0');
  const _0x171f7720 = new Set(_0x2cc905d3.map(c => c.artist).filter(Boolean));
  _0x5289aa5d("_c2dfab732").textContent = (_0x171f7720.size || '0');
  const tags = new Set();
  _0x2cc905d3.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x5289aa5d("_c1b29220a").textContent = (tags.size || '0');
  _0x5289aa5d("_c33dd3075").textContent = (_0x9564ac24.year || new Date().getFullYear());
}
async function addCard() {
  const _0xc251388d = _0x5289aa5d("_c3d51e445").value.trim(),
    title = _0x5289aa5d("_c72852da4").value.trim(),
    artist = _0x5289aa5d("_ce987274b").value.trim();
  const _0xa702c665 = _0x5289aa5d("_c6d14198e").value.trim(),
    thumb = _0x5289aa5d("_c87c9c151").value.trim(),
    feat = _0x5289aa5d("_c6f57d50a").checked;
  if (!title) {
    _0x7cf6f445('Title is required!', 'error');
    return;
  }
  _0x2a6101fe();
  const ytId = _0xb7112657(_0xc251388d);
  const tags = _0xa702c665 ? _0xa702c665.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x5289aa5d("_c45e29d5a");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0xabe1466d.from('mv_works').insert([{
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
    _0x7cf6f445(('Error: ' + error.message), 'error');
    return;
  }
  _0x7cf6f445('Work added! ✓', 'success');
  ["_c3d51e445", "_c72852da4", "_ce987274b", "_c6d14198e", "_c87c9c151"].forEach(id => _0x5289aa5d(id).value = '');
  _0x5289aa5d("_c6f57d50a").checked = false;
  document.querySelectorAll("#_c43c0b3b1 ._caea077e7").forEach(b => b.classList.remove("_ca4e3ea0f"));
  _0x2bb57e5f('', '');
}
async function _0x40a3f80e(id) {
  if (!confirm('Remove this work?')) return;
  _0x2a6101fe();
  const {
    error
  } = await _0xabe1466d.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x7cf6f445(('Error: ' + error.message), 'error');
    return;
  }
  _0x7cf6f445('Work removed', 'success');
}
function _0xe027840e(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0x2cc905d3.find(_0x26a04f0c => (_0x26a04f0c.id === id));
  if (!c) return;
  _0x5289aa5d("_c89a6a9e4").textContent = c.title;
  _0x5289aa5d("_c38006586").textContent = (c.artist || '');
  _0x5289aa5d("_c6267d1a7").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0x41db9b9c(t)}</span>`).join('');
  _0x5289aa5d("_c00d76796").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x5289aa5d("_ce57082d2").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if ((e && (e.target !== _0x5289aa5d("_ce57082d2")))) return;
  _0x5289aa5d("_ce57082d2").classList.remove('open');
  _0x5289aa5d("_c00d76796").innerHTML = '';
  document.body.style.overflow = '';
}
function onUrlInput(val) {
  clearTimeout(_0x786727eb);
  const ytId = _0xb7112657(val);
  if (!ytId) {
    _0x2bb57e5f('', '');
    return;
  }
  _0x2bb57e5f('loading', '⟳ Fetching info...');
  _0x786727eb = setTimeout(() => _0x5dac9935(ytId), 800);
}
async function _0x5dac9935(ytId) {
  try {
    const _0x59db4045 = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0x59db4045.ok) throw new Error();
    const data = await _0x59db4045.json();
    if (!_0x5289aa5d("_c72852da4").value.trim()) _0x5289aa5d("_c72852da4").value = (data.title || '');
    if (!_0x5289aa5d("_ce987274b").value.trim()) _0x5289aa5d("_ce987274b").value = (data.author_name || '');
    _0x2bb57e5f('ok', '✓ Info fetched');
  } catch {
    _0x2bb57e5f('err', '⚠ Could not fetch info');
  }
}
function _0x2bb57e5f(type, msg) {
  const s = _0x5289aa5d("_c0e895b69");
  s.textContent = msg;
  s.className = ("_c0e895b69" + (type ? (' ' + type) : ''));
}
let _0x8b4a2ff1 = null;
function toggleEditMode() {
  const _0x5e4cf5fd = document.body.classList.toggle('edit-mode');
  const bar = _0x5289aa5d("_c9ddd4040");
  const btn = _0x5289aa5d("_c27e8a161");
  if (_0x5e4cf5fd) {
    bar.classList.add("_ca4e3ea0f");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0x5289aa5d("_c3eae28dc").classList.remove('open');
    _0xd7819404();
  } else {
    exitEditMode();
  }
}
function exitEditMode() {
  document.body.classList.remove('edit-mode');
  _0x5289aa5d("_c9ddd4040").classList.remove("_ca4e3ea0f");
  const btn = _0x5289aa5d("_c27e8a161");
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0x8b4a2ff1) {
    _0x8b4a2ff1.destroy();
    _0x8b4a2ff1 = null;
  }
}
function _0xd7819404() {
  const grid = _0x5289aa5d("_cf6a7221c");
  if (!grid) return;
  if (_0x8b4a2ff1) _0x8b4a2ff1.destroy();
  _0x8b4a2ff1 = Sortable.create(grid, {
    animation: 200,
    draggable: "._c3e377cd8",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0x2cc905d3.splice(evt.oldIndex, 1);
      _0x2cc905d3.splice(evt.newIndex, 0, moved);
      _0x7cf6f445('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function saveGridOrder() {
  _0x7cf6f445('Saving order...', '');
  await Promise.all(_0x2cc905d3.map((c, i) => _0xabe1466d.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0x7cf6f445('Order saved! ✓', 'success');
  exitEditMode();
  _0xf2c3a627(true);
}
let _0x76f34dfe = null;
let _0x05ca3b49 = null;
const _0x6819d835 = new Map();
function _0x3677e8b7(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0x6819d835.has(ytId)) {
    const _0x683fe66c = document.createElement('iframe');
    _0x683fe66c.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0x683fe66c.allow = 'autoplay';
    _0x683fe66c.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0x683fe66c);
    _0x6819d835.set(ytId, _0x683fe66c);
  }
  _0x76f34dfe = setTimeout(() => {
    _0x4d35aa4f(_0x05ca3b49);
    _0x05ca3b49 = card;
    card.classList.add('previewing');
    const _0x02be20b9 = _0x6819d835.get(ytId);
    if (_0x02be20b9) {
      _0x02be20b9.removeAttribute('style');
      _0x02be20b9.className = 'mv-preview-iframe';
      _0x02be20b9.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x02be20b9, card.firstChild);
      _0x02be20b9.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function _0x4d35aa4f(card) {
  clearTimeout(_0x76f34dfe);
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
  if ((_0x05ca3b49 === card)) _0x05ca3b49 = null;
}
const _0x3baf08e8 = {
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
function _0x9397fdc9(name) {
  const p = _0x3baf08e8[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x565159fc = _0x5289aa5d(('color-' + k));
    if (_0x565159fc) _0x565159fc.value = v;
    const _0x59818138 = _0x5289aa5d((('color-' + k) + '-hex'));
    if (_0x59818138) _0x59818138.value = v;
  });
  _0x7cf6f445('Preview applied — click Save Colors to keep it', '');
}
function previewColor(_0x4463de97, val) {
  document.documentElement.style.setProperty(('--' + _0x4463de97), val);
  const hex = _0x5289aa5d((('color-' + _0x4463de97) + '-hex'));
  if (hex) hex.value = val;
}
function previewColorHex(varName, _0x82a1ff3e) {
  const val = _0x82a1ff3e.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0xa22128c9 = _0x5289aa5d(('color-' + varName));
    if (_0xa22128c9) _0xa22128c9.value = val;
  }
}
async function saveColors() {
  _0x2a6101fe();
  const colors = {
    text: (_0x5289aa5d("_caa0db4db")?.value || '#f0f0f0'),
    accent: _0x5289aa5d("_c01689254").value,
    accent2: _0x5289aa5d("_c39be136c").value,
    bg: _0x5289aa5d("_c3d9b43bd").value,
    surface: _0x5289aa5d("_cece3e1f1").value
  };
  _0x9564ac24.colors = colors;
  const btn = _0x5289aa5d("_cb92a4555");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0xabe1466d.from('mv_site').upsert({
      id: 1,
      data: _0x9564ac24
    });
    if (error) throw error;
    _0x7cf6f445('Colors saved! ✓', 'success');
  } catch (err) {
    _0x7cf6f445(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0xbef0813c(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0x5289aa5d(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0x5289aa5d((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function resetColors() {
  const _0xde7d7784 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0xbef0813c(_0xde7d7784);
  _0x9564ac24.colors = _0xde7d7784;
  _0x7cf6f445('Reset to default — click Save Colors to keep it', '');
}
function _0x2e350c9d() {
  if (_0x9564ac24.colors) _0xbef0813c(_0x9564ac24.colors);
  if (_0x9564ac24.logoData) {
    const _0x6782b52f = _0x5289aa5d("_c016f02b9");
    const img = _0x5289aa5d("_ca4fbb508");
    if ((_0x6782b52f && img)) {
      img.src = _0x9564ac24.logoData;
      _0x6782b52f.style.display = 'block';
    }
  }
}
let _0x9cb4aba9 = null;
let _0x8dd9b8ed = null;
function _0xb5a43548(_0xed650fa9) {
  if ((_0xed650fa9.type && (_0xed650fa9.type !== ''))) return _0xed650fa9.type;
  const _0xb343e9d6 = _0xed650fa9.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0xb343e9d6] || 'image/png');
}
function _0x8b5105aa(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0x42d376f5(file, _0x9e1710ae) {
  if (!file) return null;
  const _0xfda5ac41 = _0xb5a43548(file);
  const ext = _0x8b5105aa(file);
  const _0xe4a1d90d = `${_0x9e1710ae}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0xabe1466d.storage.from('portfolio-assets').upload(_0xe4a1d90d, file, {
    upsert: true,
    contentType: _0xfda5ac41
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0xa036cf71
  } = _0xabe1466d.storage.from('portfolio-assets').getPublicUrl(_0xe4a1d90d);
  return _0xa036cf71.publicUrl;
}
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x9cb4aba9 = file;
  const _0x06ee4884 = URL.createObjectURL(file);
  const prev = _0x5289aa5d("_c016f02b9"),
    img = _0x5289aa5d("_ca4fbb508");
  if ((prev && img)) {
    img.src = _0x06ee4884;
    prev.style.display = 'block';
  }
  _0x7cf6f445('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x8dd9b8ed = file;
  _0x7cf6f445('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
  _0x2a6101fe();
  if ((!_0x9cb4aba9 && !_0x8dd9b8ed)) {
    _0x7cf6f445('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0x5289aa5d("_c2c28900c");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0x9cb4aba9) {
      const _0x04a4f144 = await _0x42d376f5(_0x9cb4aba9, 'logos');
      if (_0x04a4f144) _0x9564ac24.logoData = _0x04a4f144;
    }
    if (_0x8dd9b8ed) {
      const _0x49890697 = await _0x42d376f5(_0x8dd9b8ed, 'favicons');
      if (_0x49890697) _0x9564ac24.faviconData = _0x49890697;
    }
    const {
      error
    } = await _0xabe1466d.from('mv_site').upsert({
      id: 1,
      data: _0x9564ac24
    });
    if (error) throw error;
    _0xa737bfd3();
    _0x5289aa5d("_c21044974").value = '';
    _0x5289aa5d("_ce812d479").value = '';
    _0x9cb4aba9 = null;
    _0x8dd9b8ed = null;
    _0x7cf6f445('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x7cf6f445(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0xa737bfd3() {
  const _0xd2476479 = document.getElementById("_c9ac7ad43");
  const _0xe1310127 = document.getElementById("_c1989d378");
  if (_0x9564ac24.logoData) {
    if (_0xe1310127) _0xe1310127.style.display = 'none';
    if (_0xd2476479) {
      _0xd2476479.style.display = 'block';
      _0xd2476479.src = _0x9564ac24.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x9564ac24.logoData);
    } catch (e) {}
  } else {
    if (_0xd2476479) _0xd2476479.style.display = 'none';
    if (_0xe1310127) _0xe1310127.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0x9564ac24.faviconData) {
    let _0x2a0f2232 = document.querySelector('link[rel="icon"]');
    if (!_0x2a0f2232) {
      _0x2a0f2232 = document.createElement('link');
      _0x2a0f2232.rel = 'icon';
      document.head.appendChild(_0x2a0f2232);
    }
    _0x2a0f2232.href = _0x9564ac24.faviconData;
  }
}
async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0x2a6101fe();
  _0x9564ac24.logoData = null;
  const {
    error
  } = await _0xabe1466d.from('mv_site').upsert({
    id: 1,
    data: _0x9564ac24
  });
  if (error) {
    _0x7cf6f445(('Error: ' + error.message), 'error');
    return;
  }
  _0xa737bfd3();
  const prev = _0x5289aa5d("_c016f02b9"),
    img = _0x5289aa5d("_ca4fbb508");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0x7cf6f445('Logo dihapus! ✓', 'success');
}
function _0x216d7fd4() {
  const s = _0x9564ac24;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0xbef0813c(s.colors);
  _0xa737bfd3();
  const _0xe00dc7d5 = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0xe00dc7d5;
  if (_0x5289aa5d("_ccfef416e")) _0x5289aa5d("_ccfef416e").textContent = _0xe00dc7d5;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0x5289aa5d("_cb4142ba3").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0x5289aa5d("_c2fde37da").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0xdd2555d3("_cbeed6411", s.label);
  _0xdd2555d3("_c353e1af4", s.hsub);
  _0xdd2555d3("_c711b4ee3", s.about1);
  _0xdd2555d3("_cb7d1dd83", s.about2);
  _0xdd2555d3("_ca8feb305", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xd28ca427 = s.htitle.split('|');
    _0x5289aa5d("_ca0d68bd3").innerHTML = _0xd28ca427.map((_0x035cac63, i) => (i === 0) ? _0x035cac63 : (i === 1) ? `<span class="_cb8832f4c">${_0x035cac63}</span>` : `<span class="_cf7c7b3de">${_0x035cac63}</span>`).join('<br>');
  }
  const _0xf49ab449 = [{
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
  const _0xaf800aaf = _0x5289aa5d("_c8e354291"),
    _0x1882f887 = _0x5289aa5d("_cd0ba55cc");
  if (_0xaf800aaf) _0xaf800aaf.innerHTML = _0xf49ab449.filter(_0xb003180d => s[_0xb003180d.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_c5e407e72 ${s2.primary ? "_c90ded338" : "_cc7f82412"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x1882f887) _0x1882f887.innerHTML = _0xf49ab449.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0xd510b4fa() {
  const s = _0x9564ac24;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0xeb39eb1b => {
    if (_0x5289aa5d(('s-' + _0xeb39eb1b))) _0x5289aa5d(('s-' + _0xeb39eb1b)).value = (s[_0xeb39eb1b] || '');
  });
  if (_0x5289aa5d('s-perpage')) _0x5289aa5d('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0x6de43aa7 = _0x5289aa5d(('dm-' + mode));
  if (_0x6de43aa7) _0x6de43aa7.checked = true;
}
function previewMode(mode) {
  _0x9564ac24.displayMode = mode;
  _0xf2c3a627(true);
}
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0x9564ac24 = {
    brand: _0x5289aa5d("_ccc701425").value,
    siteTitle: _0x5289aa5d("_c2eea86af").value,
    label: _0x5289aa5d("_cbd13f0be").value,
    htitle: _0x5289aa5d("_c09188135").value,
    hsub: _0x5289aa5d("_c02f0b56d").value,
    about1: _0x5289aa5d("_c122aac33").value,
    about2: _0x5289aa5d("_c09ec8a32").value,
    yt: _0x5289aa5d("_c153c041d").value,
    tw: _0x5289aa5d("_c52fa249c").value,
    discord: _0x5289aa5d('s-discord').value,
    vgen: _0x5289aa5d('s-vgen').value,
    ig: _0x5289aa5d('s-ig').value,
    tiktok: _0x5289aa5d('s-tiktok').value,
    copy: _0x5289aa5d('s-copy').value,
    year: _0x5289aa5d('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0x5289aa5d('s-perpage')?.value) || 12),
    colors: _0x9564ac24.colors,
    logoData: _0x9564ac24.logoData,
    faviconData: _0x9564ac24.faviconData
  };
  const btn = _0x5289aa5d("_ce7101140");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0x2a6101fe();
  try {
    const {
      error
    } = await _0xabe1466d.from('mv_site').upsert({
      id: 1,
      data: _0x9564ac24
    });
    if (error) throw error;
    _0x216d7fd4();
    _0x924974fc();
    _0xf2c3a627(true);
    _0x7cf6f445('Site info saved! ✓', 'success');
  } catch (err) {
    _0x7cf6f445(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0x19eba93e() {
  const _0xef99bb36 = _0x5289aa5d('site-edit-panel');
  if (_0xef99bb36) _0xef99bb36.classList.remove('open');
}
async function _0x1d2db5d6() {
  const _0xd4e7204b = _0x5289aa5d("_c21044974"),
    _0xb5978cf8 = _0x5289aa5d("_ce812d479");
  if (_0xd4e7204b) _0xd4e7204b.value = '';
  if (_0xb5978cf8) _0xb5978cf8.value = '';
  document.body.classList.add('loading');
  _0xed8d112b(15, 'Connecting...');
  _0xabe1466d = window.supabase.createClient(_0x6c052a28, _0x117a3de6);
  _0xed8d112b(35, 'Loading site info...');
  await _0x1a6b2304();
  _0xed8d112b(60, 'Loading works...');
  await _0xf8e56506();
  _0xed8d112b(75, 'Preloading previews...');
  await _0xbccb9dbf();
  _0xed8d112b(90, 'Almost there...');
  _0xabe1466d.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0xf8e56506).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x1a6b2304).subscribe();
  setTimeout(() => {
    _0xed8d112b(100, 'Ready!');
    setTimeout(() => {
      _0x60f20b9b();
      _0x8b075129();
      if (_0xc38e3136()) _0x5289aa5d("_c3eae28dc").classList.add('open');
    }, 300);
  }, 200);
}
_0x1d2db5d6();
