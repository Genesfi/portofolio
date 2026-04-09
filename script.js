const _0x2bba70a5 = _0x1de2aa98 => atob(_0x1de2aa98);
const _0x268ac621 = _0x2bba70a5('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x248c043f = _0x2bba70a5('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x4991b496 = _0x2bba70a5('YWRt');
const _0xea617f0e = _0x2bba70a5('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x420fedc3 = ((60 * 60) * 1000);
let _0x0cf28f49,
  _0xb75797f2 = [],
  _0x16ba7d5a = {},
  _0x17da496c = 'all',
  _0x35791667 = null,
  _0x92172b60 = 1,
  _0xe82c6a9d = 0;
let _0x2a1966a0 = (() => {
  try {
    const _0xdf6fd439 = localStorage.getItem('mv_autoplay');
    return (_0xdf6fd439 === null) ? true : (_0xdf6fd439 === '1');
  } catch {
    return true;
  }
})();
function toggleAutoplay() {
  _0x2a1966a0 = !_0x2a1966a0;
  try {
    localStorage.setItem('mv_autoplay', _0x2a1966a0 ? '1' : '0');
  } catch {}
  _0xc201d46e();
  if (_0x2a1966a0) {
    _0x3610f5f2();
    _0x4b6ea5c1();
  } else {
    _0x9eda1217();
  }
}
function _0xc201d46e() {
  const _0xff96a5c4 = _0x98a51130("_c059fa255"),
    label = _0x98a51130("_cc9a0676a");
  if (!_0xff96a5c4) return;
  if (_0x2a1966a0) {
    _0xff96a5c4.classList.add("_cb0ba7cea");
    if (label) label.textContent = 'Autoplay';
    _0xff96a5c4.title = 'Autoplay ON — click to turn off';
  } else {
    _0xff96a5c4.classList.remove("_cb0ba7cea");
    if (label) label.textContent = 'Autoplay';
    _0xff96a5c4.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x9eda1217() {
  document.querySelectorAll("._c05677e76.featured-autoplay").forEach(_0xc02e14a7 => {
    const _0x0eae00a0 = _0xc02e14a7.querySelector('.mv-preview-iframe');
    if (_0x0eae00a0) _0x0eae00a0.remove();
    _0xc02e14a7.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0xee0ebc40.forEach(iframe => iframe.remove());
  _0xee0ebc40.clear();
}
const _0xee0ebc40 = new Map();
function _0x007b5fc1() {
  const _0x205e4d9c = 5000;
  if (!_0x2a1966a0) return Promise.resolve();
  const _0x02769044 = _0xb75797f2.filter(_0x53f1e6e3 => (_0x53f1e6e3.featured && _0x53f1e6e3.ytId));
  if (!_0x02769044.length) return Promise.resolve();
  const _0x196d4691 = _0x02769044.map(c => {
    if (_0xee0ebc40.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x965e91b8 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x965e91b8;
      const _0x6e662bc2 = setTimeout(_0x965e91b8, _0x205e4d9c);
      iframe.onload = () => {
        clearTimeout(_0x6e662bc2);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0xee0ebc40.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x196d4691), new Promise(_0x0a6a73e4 => setTimeout(_0x0a6a73e4, _0x205e4d9c))]);
}
function _0x784ee238() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0xea617f0e) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0x420fedc3)) {
      sessionStorage.removeItem(_0xea617f0e);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0xf4407d0b(_0xfe9b48e4) {
  if (_0xfe9b48e4) sessionStorage.setItem(_0xea617f0e, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0xea617f0e);
}
function _0xb93df367() {
  if (_0x784ee238()) _0xf4407d0b(true);
}
setInterval(() => {
  if ((!_0x784ee238() && _0x98a51130("_c23cb14b9")?.classList.contains('open'))) {
    _0x98a51130("_c23cb14b9").classList.remove('open');
    _0x8235428c('Admin session expired. Type "adm" to log in again.', 'error');
  }
}, (60 * 1000));
function closeAdminPanel() {
  document.getElementById("_c23cb14b9").classList.remove('open');
  _0x0cf28f49.auth.signOut();
  _0xf4407d0b(false);
}
let _0xa9112bdc = '';
document.addEventListener('keydown', _0x002de420 => {
  if (['INPUT', 'TEXTAREA'].includes(_0x002de420.target.tagName)) return;
  if ((_0x002de420.key === 'Escape')) {
    closeModal();
    _0x54570c05();
    closeAdminPanel();
    _0x98a51130("_c503b30af").style.display = 'none';
    return;
  }
  _0xa9112bdc += _0x002de420.key.toLowerCase();
  if ((_0xa9112bdc.length > _0x4991b496.length)) _0xa9112bdc = _0xa9112bdc.slice(-_0x4991b496.length);
  if ((_0xa9112bdc === _0x4991b496)) {
    _0xa9112bdc = '';
    _0xdbae11cc();
  }
});
function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(_0xbdd2b829 => _0xbdd2b829.classList.remove("_cb0ba7cea"));
  document.querySelectorAll('.tab-pane').forEach(_0x80b7347a => _0x80b7347a.classList.remove("_cb0ba7cea"));
  btn.classList.add("_cb0ba7cea");
  _0x98a51130(('tab-' + name)).classList.add("_cb0ba7cea");
  if ((name === 'list')) _0xb932bae6();
  if ((name === 'site')) _0xc41c6330();
  if ((name === 'design')) _0x467a2afe();
}
function _0xdbae11cc() {
  if (_0x784ee238()) {
    _0xb93df367();
    _0x98a51130("_c23cb14b9").classList.toggle('open');
    return;
  }
  _0x98a51130("_cd61b7387").style.display = 'none';
  _0x98a51130("_c5ed63840").value = '';
  _0x98a51130("_c7473aa38").value = '';
  _0x98a51130("_ca925d67a").disabled = false;
  try {
    const _0x3bab3cc1 = JSON.parse((sessionStorage.getItem(_0x2bba70a5('bG9ja291dA==')) || 'null'));
    if ((_0x3bab3cc1 && (Date.now() < _0x3bab3cc1.until))) {
      const _0x5ab50d75 = Math.ceil(((_0x3bab3cc1.until - Date.now()) / 60000));
      _0x98a51130("_cd61b7387").style.display = 'block';
      _0x98a51130("_cd61b7387").textContent = `🔒 Too many attempts. Try again in ${_0x5ab50d75} min.`;
      _0x98a51130("_ca925d67a").disabled = true;
    }
  } catch (e) {}
  _0x98a51130("_c503b30af").style.display = 'flex';
  setTimeout(() => _0x98a51130("_c5ed63840").focus(), 100);
}
async function checkPw() {
  const _0xc9528f4f = 5,
    _0x19a47d14 = ((15 * 60) * 1000),
    now = Date.now();
  const _0x7c926358 = _0x2bba70a5('bG9ja291dA=='),
    _0xf396dd2c = _0x2bba70a5('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0x7c926358) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0x98a51130("_cd61b7387").style.display = 'block';
      _0x98a51130("_cd61b7387").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0x98a51130("_ca925d67a").disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0x98a51130("_c5ed63840").value.trim(),
    _0x9817182d = _0x98a51130("_c7473aa38").value;
  if ((!email || !_0x9817182d)) {
    _0x98a51130("_cd61b7387").style.display = 'block';
    _0x98a51130("_cd61b7387").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0x98a51130("_ca925d67a");
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0x0cf28f49.auth.signInWithPassword({
      email,
      password: _0x9817182d
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0xf396dd2c);
    sessionStorage.removeItem(_0x7c926358);
    _0xf4407d0b(true);
    _0x98a51130("_c503b30af").style.display = 'none';
    _0x98a51130("_c23cb14b9").classList.add('open');
    _0x8235428c('Welcome back! ✓', 'success');
  } catch (e) {
    let _0x28d97a86 = 0;
    try {
      _0x28d97a86 = parseInt((sessionStorage.getItem(_0xf396dd2c) || '0'));
    } catch (e) {}
    _0x28d97a86++;
    sessionStorage.setItem(_0xf396dd2c, _0x28d97a86);
    const _0x0ec88f7b = (_0xc9528f4f - _0x28d97a86);
    if ((_0x28d97a86 >= _0xc9528f4f)) {
      sessionStorage.setItem(_0x7c926358, JSON.stringify({
        until: (now + _0x19a47d14)
      }));
      sessionStorage.removeItem(_0xf396dd2c);
      _0x98a51130("_cd61b7387").style.display = 'block';
      _0x98a51130("_cd61b7387").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0x98a51130("_cd61b7387").style.display = 'block';
      _0x98a51130("_cd61b7387").textContent = `❌ Wrong credentials. ${_0x0ec88f7b} attempt${(_0x0ec88f7b > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0x98a51130("_c7473aa38").value = '';
    _0x98a51130("_c7473aa38").focus();
  }
  btn.textContent = 'Sign In →';
}
function _0x7bc634bb(_0xaa3137bd, text) {
  const _0x8856dcb2 = _0x98a51130("_cbac1d6f4"),
    _0xbe4da737 = _0x98a51130("_cc190106d");
  if (_0x8856dcb2) _0x8856dcb2.style.width = (_0xaa3137bd + '%');
  if ((_0xbe4da737 && text)) _0xbe4da737.textContent = text;
}
function _0x160c5440() {
  const s = _0x98a51130("_c9438c09b");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x01561352() {
  const {
    data,
    error
  } = await _0x0cf28f49.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0xb75797f2 = (data || []);
  _0x66ba5410(true);
  _0xbc846601();
  _0xd5cb6718();
  _0x41df3b35();
  if (_0x98a51130('tab-list')?.classList.contains("_cb0ba7cea")) _0xb932bae6();
}
async function _0xe09561ee() {
  const {
    data
  } = await _0x0cf28f49.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x16ba7d5a = data.data;
    if (_0x16ba7d5a.logoData) {
      await new Promise(resolve => {
        const _0xe06fae02 = new Image();
        _0xe06fae02.onload = resolve;
        _0xe06fae02.onerror = resolve;
        _0xe06fae02.src = _0x16ba7d5a.logoData;
      });
    }
    _0xe6a7e06f();
    _0xd5cb6718();
  }
}
function _0x98a51130(id) {
  return document.getElementById(id);
}
function _0xbd610f8a(id, v) {
  if ((v && _0x98a51130(id))) _0x98a51130(id).textContent = v;
}
function _0x019f6248(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0xb72e5216(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0x85632467 = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0x85632467 ? _0x85632467[1] : null;
}
let _0x41deb8e6;
function _0x8235428c(_0x33a1b7e0, type = '') {
  const t = _0x98a51130("_c34ab13e7");
  t.textContent = _0x33a1b7e0;
  t.className = `toast ${type} show`;
  clearTimeout(_0x41deb8e6);
  _0x41deb8e6 = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0x730f6184(id) {
  const _0xb466f1e8 = (_0x98a51130(id).value || '');
  return _0xb466f1e8.split(',').map(t => t.trim()).filter(Boolean);
}
function _0x7f6a9b6f(id, _0x5433b33e) {
  _0x98a51130(id).value = _0x5433b33e.join(', ');
}
function togglePresetTag(_0x438622d1, _0x19d3b41c, btn) {
  _0xb93df367();
  let tags = _0x730f6184(_0x438622d1);
  if (tags.includes(_0x19d3b41c)) {
    tags = tags.filter(t => (t !== _0x19d3b41c));
    btn.classList.remove("_cb0ba7cea");
  } else {
    tags.push(_0x19d3b41c);
    btn.classList.add("_cb0ba7cea");
  }
  _0x7f6a9b6f(_0x438622d1, tags);
}
function syncPresetHighlight(inputId, _0x5fa1040b) {
  const tags = _0x730f6184(inputId),
    _0x43186c0a = _0x98a51130(_0x5fa1040b);
  if (!_0x43186c0a) return;
  _0x43186c0a.querySelectorAll("._c850e1af5").forEach(btn => {
    btn.classList.toggle("_cb0ba7cea", tags.includes(btn.textContent.trim()));
  });
}
function _0x3f36f846(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xe43f412f(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x41df3b35() {
  const _0x94f83261 = _0xb75797f2.map(c => (c.thumb || (c.ytId ? _0xe43f412f(c.ytId) : null))).filter(Boolean);
  if ((_0x94f83261.length < 2)) return;
  const _0x9d9b2890 = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0xfd54f3e7 = [{
    id: "_c451917ff",
    items: _0x9d9b2890(_0x94f83261, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_c7f46f428",
    items: _0x9d9b2890([..._0x94f83261].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_c6ee494a9",
    items: _0x9d9b2890(_0x94f83261.slice(Math.floor((_0x94f83261.length / 2))).concat(_0x94f83261.slice(0, Math.floor((_0x94f83261.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0xfd54f3e7.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0x86bcdbcc = _0x98a51130(id);
    if (!_0x86bcdbcc) return;
    const all = [...items, ...items];
    _0x86bcdbcc.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0xaa716fa2 = (items.length * (speed / 20));
      _0x86bcdbcc.style.animationDuration = `${_0xaa716fa2}s`;
      if ((dir === 'right')) {
        _0x86bcdbcc.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0x98a51130("_c966aa96b");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0xebae0d8d(c) {
  const thumb = (c.thumb || (c.ytId ? _0x3f36f846(c.ytId) : ''));
  const _0x0d262899 = c.ytId ? _0xe43f412f(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0x019f6248(t)}</span>`).join('');
  const _0x2bd73ae9 = !!c.ytId;
  const _0xf636eea4 = !!c.featured;
  const _0xa6b9a0f6 = (_0x2bd73ae9 && !_0xf636eea4) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_c05677e76${_0xf636eea4 ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0xa6b9a0f6}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0x019f6248(c.title)}" loading="lazy" onerror="this.src='${_0x0d262899}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0x019f6248(c.title)}</div><div class="mv-artist">${_0x019f6248((c.artist || ''))}</div></div></div>
</div>`;
}
function _0x5fe8521e() {
  return (_0x16ba7d5a.displayMode || 'all');
}
function _0x310bbf90() {
  return (parseInt(_0x16ba7d5a.perPage) || 12);
}
function _0x66ba5410(_0x8d6fa5b5) {
  if (_0x8d6fa5b5) {
    _0x92172b60 = 1;
    _0xe82c6a9d = 0;
  }
  const _0x9fcd80e7 = _0x98a51130("_c8ee3adcb"),
    _0xdc8ab79b = _0x5fe8521e(),
    perPage = _0x310bbf90();
  const _0xca356712 = (_0x17da496c === 'all') ? _0xb75797f2 : _0xb75797f2.filter(c => (c.tags || []).includes(_0x17da496c));
  _0x98a51130("_c0efd0eb4").textContent = String(_0xca356712.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0x98a51130(id);
    if (e) e.remove();
  });
  if (!_0xca356712.length) {
    _0x9fcd80e7.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0xdc8ab79b === 'pagination')) {
    const _0xce5ee5b0 = Math.ceil((_0xca356712.length / perPage));
    _0x92172b60 = Math.min(_0x92172b60, _0xce5ee5b0);
    const slice = _0xca356712.slice(((_0x92172b60 - 1) * perPage), (_0x92172b60 * perPage));
    _0x9fcd80e7.innerHTML = slice.map(_0xebae0d8d).join('');
    if ((_0xce5ee5b0 > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x73fc3aee = 1; (_0x73fc3aee <= _0xce5ee5b0); _0x73fc3aee++) {
        const btn = document.createElement('button');
        btn.textContent = _0x73fc3aee;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x73fc3aee === _0x92172b60) ? 'var(--accent)' : 'transparent'};color:${(_0x73fc3aee === _0x92172b60) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0x92172b60 = _0x73fc3aee;
          _0x66ba5410(false);
          window.scrollTo({
            top: (_0x98a51130("_c3a2cba56").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0x9fcd80e7.appendChild(bar);
    }
  } else if ((_0xdc8ab79b === 'loadmore')) {
    if (_0x8d6fa5b5) _0xe82c6a9d = perPage;else _0xe82c6a9d = Math.max(_0xe82c6a9d, perPage);
    const slice = _0xca356712.slice(0, _0xe82c6a9d);
    _0x9fcd80e7.innerHTML = slice.map(_0xebae0d8d).join('');
    if ((_0xe82c6a9d < _0xca356712.length)) {
      const rem = (_0xca356712.length - _0xe82c6a9d);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0xe82c6a9d += perPage;
        _0x66ba5410(false);
      };
      _0x9fcd80e7.appendChild(btn);
    }
  } else {
    _0x9fcd80e7.innerHTML = _0xca356712.map(_0xebae0d8d).join('');
  }
  requestAnimationFrame(() => _0x3610f5f2());
}
function _0xbc846601() {
  const tags = new Set();
  _0xb75797f2.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x98a51130("_c86fc3563").innerHTML = (`<button class="_cdbbc8bd1${(_0x17da496c === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_cdbbc8bd1${(_0x17da496c === t) ? ' active' : ''}" onclick="filterCards('${_0x019f6248(t)}',this)">${_0x019f6248(t)}</button>`).join(''));
}
function filterCards(tag, btn) {
  _0x17da496c = tag;
  document.querySelectorAll("._cdbbc8bd1").forEach(b => b.classList.remove("_cb0ba7cea"));
  btn.classList.add("_cb0ba7cea");
  _0x66ba5410(true);
}
function _0x3610f5f2() {
  if (!_0x2a1966a0) return;
  const _0xeeae8cc7 = document.querySelectorAll("._c05677e76.featured");
  _0xeeae8cc7.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0x027bc7b5 = _0xee0ebc40.get(ytId);
    if (_0x027bc7b5) {
      _0x027bc7b5.removeAttribute('style');
      _0x027bc7b5.className = 'mv-preview-iframe';
      card.insertBefore(_0x027bc7b5, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0x027bc7b5.contentWindow) {
        if (_0x027bc7b5._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0x027bc7b5.onload = () => {
            _0x027bc7b5._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0xee0ebc40.delete(ytId);
    } else {
      _0xa9db4889(card, ytId);
    }
  });
}
function _0xa9db4889(card, ytId) {
  if (!_0x2a1966a0) return;
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
function _0x4b6ea5c1() {
  const featuredCards = document.querySelectorAll("._c05677e76.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0xa9db4889(card, ytId);
  });
}
let _0x8128c2c6 = null;
function _0xb932bae6() {
  const _0xd15b95d1 = _0x98a51130("_c4a9d5f70");
  if (!_0xb75797f2.length) {
    _0xd15b95d1.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0x8128c2c6) {
      _0x8128c2c6.destroy();
      _0x8128c2c6 = null;
    }
    return;
  }
  _0xd15b95d1.innerHTML = _0xb75797f2.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0x3f36f846(c.ytId) : ''));
    const fallback = c.ytId ? _0xe43f412f(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0x019f6248(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0x019f6248((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0x019f6248(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0x019f6248((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_c30ad5660" id="edit-tag-presets-${c.id}">
  <button type="button" class="_c850e1af5" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_c850e1af5" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_c850e1af5" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_c850e1af5" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_c850e1af5" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0x019f6248((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0x019f6248((c.thumb || ''))}">
<div class="_c7fe53794" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0x8128c2c6) {
    _0x8128c2c6.destroy();
    _0x8128c2c6 = null;
  }
  _0x8128c2c6 = Sortable.create(_0xd15b95d1, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0xa0b12d91 => {
      if ((_0xa0b12d91.oldIndex === _0xa0b12d91.newIndex)) return;
      const _0x96b885ce = _0xb75797f2.splice(_0xa0b12d91.oldIndex, 1);
      _0xb75797f2.splice(_0xa0b12d91.newIndex, 0, _0x96b885ce);
      let _0xe3500fa9 = _0x98a51130('sort-saving');
      if (!_0xe3500fa9) {
        _0xe3500fa9 = document.createElement('div');
        _0xe3500fa9.id = 'sort-saving';
        _0xe3500fa9.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xd15b95d1.insertAdjacentElement('afterend', _0xe3500fa9);
      }
      _0xe3500fa9.textContent = '⟳ Saving order...';
      await Promise.all(_0xb75797f2.map((c, i) => _0x0cf28f49.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0xe3500fa9.remove();
      _0x8235428c('Order saved! ✓', 'success');
      _0x66ba5410(true);
    }
  });
}
function toggleEdit(id) {
  const _0x0a7f22ff = _0x98a51130(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0x0a7f22ff.classList.toggle('open');
  if (_0x0a7f22ff.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function saveEdit(id) {
  const _0x72d6e337 = _0x98a51130(`e-url-${id}`).value.trim(),
    title = _0x98a51130(`e-title-${id}`).value.trim(),
    artist = _0x98a51130(`e-artist-${id}`).value.trim();
  const _0xc90c6962 = _0x98a51130(`e-tags-${id}`).value.trim(),
    thumb = _0x98a51130(`e-thumb-${id}`).value.trim(),
    _0x90765656 = _0x98a51130(`e-feat-${id}`).checked;
  if (!title) {
    _0x8235428c('Title cannot be empty!', 'error');
    return;
  }
  _0xb93df367();
  const ytId = ((_0xb72e5216(_0x72d6e337) || _0x72d6e337) || null);
  const tags = _0xc90c6962 ? _0xc90c6962.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x98a51130(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0x0cf28f49.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x90765656
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0x8235428c(('Error: ' + error.message), 'error');
    return;
  }
  _0x8235428c('Work updated! ✓', 'success');
  toggleEdit(id);
}
function _0xd5cb6718() {
  _0x98a51130("_c745f6f40").textContent = (_0xb75797f2.length || '0');
  const _0xea81e35d = new Set(_0xb75797f2.map(c => c.artist).filter(Boolean));
  _0x98a51130("_c8429cd28").textContent = (_0xea81e35d.size || '0');
  const tags = new Set();
  _0xb75797f2.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x98a51130("_c4ee5b15d").textContent = (tags.size || '0');
  _0x98a51130("_c64035ce2").textContent = (_0x16ba7d5a.year || new Date().getFullYear());
}
async function addCard() {
  const _0xdfeb15c0 = _0x98a51130("_cd37d97f2").value.trim(),
    title = _0x98a51130("_c96c6b262").value.trim(),
    artist = _0x98a51130("_cba40c7ff").value.trim();
  const _0xa0657729 = _0x98a51130("_c84d8b1d6").value.trim(),
    thumb = _0x98a51130("_cdb70d313").value.trim(),
    feat = _0x98a51130("_c346a54d7").checked;
  if (!title) {
    _0x8235428c('Title is required!', 'error');
    return;
  }
  _0xb93df367();
  const ytId = _0xb72e5216(_0xdfeb15c0);
  const tags = _0xa0657729 ? _0xa0657729.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x98a51130("_cd07fa27d");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0x0cf28f49.from('mv_works').insert([{
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
    _0x8235428c(('Error: ' + error.message), 'error');
    return;
  }
  _0x8235428c('Work added! ✓', 'success');
  ["_cd37d97f2", "_c96c6b262", "_cba40c7ff", "_c84d8b1d6", "_cdb70d313"].forEach(id => _0x98a51130(id).value = '');
  _0x98a51130("_c346a54d7").checked = false;
  document.querySelectorAll("#_cd5fedbf2 ._c850e1af5").forEach(b => b.classList.remove("_cb0ba7cea"));
  _0x00551db1('', '');
}
async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  _0xb93df367();
  const {
    error
  } = await _0x0cf28f49.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x8235428c(('Error: ' + error.message), 'error');
    return;
  }
  _0x8235428c('Work removed', 'success');
}
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0xb75797f2.find(_0x956aa7d5 => (_0x956aa7d5.id === id));
  if (!c) return;
  _0x98a51130("_cb196d953").textContent = c.title;
  _0x98a51130("_ce6b31177").textContent = (c.artist || '');
  _0x98a51130("_cba72a9d9").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0x019f6248(t)}</span>`).join('');
  _0x98a51130("_c36294660").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x98a51130("_c03e634e3").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if ((e && (e.target !== _0x98a51130("_c03e634e3")))) return;
  _0x98a51130("_c03e634e3").classList.remove('open');
  _0x98a51130("_c36294660").innerHTML = '';
  document.body.style.overflow = '';
}
function onUrlInput(val) {
  clearTimeout(_0x35791667);
  const ytId = _0xb72e5216(val);
  if (!ytId) {
    _0x00551db1('', '');
    return;
  }
  _0x00551db1('loading', '⟳ Fetching info...');
  _0x35791667 = setTimeout(() => _0x38cae81b(ytId), 800);
}
async function _0x38cae81b(ytId) {
  try {
    const _0xe036989a = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xe036989a.ok) throw new Error();
    const data = await _0xe036989a.json();
    if (!_0x98a51130("_c96c6b262").value.trim()) _0x98a51130("_c96c6b262").value = (data.title || '');
    if (!_0x98a51130("_cba40c7ff").value.trim()) _0x98a51130("_cba40c7ff").value = (data.author_name || '');
    _0x00551db1('ok', '✓ Info fetched');
  } catch {
    _0x00551db1('err', '⚠ Could not fetch info');
  }
}
function _0x00551db1(type, msg) {
  const s = _0x98a51130("_cceaea84b");
  s.textContent = msg;
  s.className = ("_cceaea84b" + (type ? (' ' + type) : ''));
}
let _0xbaf4d0b4 = null;
function toggleEditMode() {
  const _0xa17bf037 = document.body.classList.toggle('edit-mode');
  const bar = _0x98a51130('edit-mode-bar');
  const btn = _0x98a51130('edit-mode-toggle-btn');
  if (_0xa17bf037) {
    bar.classList.add("_cb0ba7cea");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0x98a51130("_c23cb14b9").classList.remove('open');
    _0xf5848ddb();
  } else {
    exitEditMode();
  }
}
function exitEditMode() {
  document.body.classList.remove('edit-mode');
  _0x98a51130('edit-mode-bar').classList.remove("_cb0ba7cea");
  const btn = _0x98a51130('edit-mode-toggle-btn');
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0xbaf4d0b4) {
    _0xbaf4d0b4.destroy();
    _0xbaf4d0b4 = null;
  }
}
function _0xf5848ddb() {
  const grid = _0x98a51130("_c8ee3adcb");
  if (!grid) return;
  if (_0xbaf4d0b4) _0xbaf4d0b4.destroy();
  _0xbaf4d0b4 = Sortable.create(grid, {
    animation: 200,
    draggable: "._c05677e76",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0xb75797f2.splice(evt.oldIndex, 1);
      _0xb75797f2.splice(evt.newIndex, 0, moved);
      _0x8235428c('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function saveGridOrder() {
  _0x8235428c('Saving order...', '');
  await Promise.all(_0xb75797f2.map((c, i) => _0x0cf28f49.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0x8235428c('Order saved! ✓', 'success');
  exitEditMode();
  _0x66ba5410(true);
}
let _0x0ed86cb4 = null;
let _0x30d07b96 = null;
const _0xd9f3d1cf = new Map();
function startPreview(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0xd9f3d1cf.has(ytId)) {
    const _0x3ec8e5af = document.createElement('iframe');
    _0x3ec8e5af.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0x3ec8e5af.allow = 'autoplay';
    _0x3ec8e5af.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0x3ec8e5af);
    _0xd9f3d1cf.set(ytId, _0x3ec8e5af);
  }
  _0x0ed86cb4 = setTimeout(() => {
    stopPreview(_0x30d07b96);
    _0x30d07b96 = card;
    card.classList.add('previewing');
    const _0x58c3457f = _0xd9f3d1cf.get(ytId);
    if (_0x58c3457f) {
      _0x58c3457f.removeAttribute('style');
      _0x58c3457f.className = 'mv-preview-iframe';
      _0x58c3457f.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x58c3457f, card.firstChild);
      _0x58c3457f.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function stopPreview(card) {
  clearTimeout(_0x0ed86cb4);
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
  if ((_0x30d07b96 === card)) _0x30d07b96 = null;
}
const _0x4546b246 = {
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
function _0x102eb61b(name) {
  const p = _0x4546b246[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0xc25fed2d = _0x98a51130(('color-' + k));
    if (_0xc25fed2d) _0xc25fed2d.value = v;
    const _0xa1e48ce6 = _0x98a51130((('color-' + k) + '-hex'));
    if (_0xa1e48ce6) _0xa1e48ce6.value = v;
  });
  _0x8235428c('Preview applied — click Save Colors to keep it', '');
}
function previewColor(_0xadea739b, val) {
  document.documentElement.style.setProperty(('--' + _0xadea739b), val);
  const hex = _0x98a51130((('color-' + _0xadea739b) + '-hex'));
  if (hex) hex.value = val;
}
function previewColorHex(varName, _0xd2f77fbd) {
  const val = _0xd2f77fbd.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0x82f65ffb = _0x98a51130(('color-' + varName));
    if (_0x82f65ffb) _0x82f65ffb.value = val;
  }
}
async function saveColors() {
  _0xb93df367();
  const colors = {
    text: (_0x98a51130('color-text')?.value || '#f0f0f0'),
    accent: _0x98a51130('color-accent').value,
    accent2: _0x98a51130('color-accent2').value,
    bg: _0x98a51130('color-bg').value,
    surface: _0x98a51130('color-surface').value
  };
  _0x16ba7d5a.colors = colors;
  const btn = _0x98a51130('color-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0x0cf28f49.from('mv_site').upsert({
      id: 1,
      data: _0x16ba7d5a
    });
    if (error) throw error;
    _0x8235428c('Colors saved! ✓', 'success');
  } catch (err) {
    _0x8235428c(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0x1a53b094(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0x98a51130(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0x98a51130((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function resetColors() {
  const _0x23a2cf75 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0x1a53b094(_0x23a2cf75);
  _0x16ba7d5a.colors = _0x23a2cf75;
  _0x8235428c('Reset to default — click Save Colors to keep it', '');
}
function _0x467a2afe() {
  if (_0x16ba7d5a.colors) _0x1a53b094(_0x16ba7d5a.colors);
  if (_0x16ba7d5a.logoData) {
    const _0x3d9e6ab0 = _0x98a51130("_c7a3928c3");
    const img = _0x98a51130("_cf870cc09");
    if ((_0x3d9e6ab0 && img)) {
      img.src = _0x16ba7d5a.logoData;
      _0x3d9e6ab0.style.display = 'block';
    }
  }
}
let _0x451aa87d = null;
let _0x7cf6a408 = null;
function _0x1e226c4f(_0x406d9845) {
  if ((_0x406d9845.type && (_0x406d9845.type !== ''))) return _0x406d9845.type;
  const _0x39abbacf = _0x406d9845.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x39abbacf] || 'image/png');
}
function _0x53b9b054(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0x9400a7fb(file, _0x982742be) {
  if (!file) return null;
  const _0x0addf80d = _0x1e226c4f(file);
  const ext = _0x53b9b054(file);
  const _0x4fa9511f = `${_0x982742be}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0x0cf28f49.storage.from('portfolio-assets').upload(_0x4fa9511f, file, {
    upsert: true,
    contentType: _0x0addf80d
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x432fefa2
  } = _0x0cf28f49.storage.from('portfolio-assets').getPublicUrl(_0x4fa9511f);
  return _0x432fefa2.publicUrl;
}
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x451aa87d = file;
  const _0x72f5a2fc = URL.createObjectURL(file);
  const prev = _0x98a51130("_c7a3928c3"),
    img = _0x98a51130("_cf870cc09");
  if ((prev && img)) {
    img.src = _0x72f5a2fc;
    prev.style.display = 'block';
  }
  _0x8235428c('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x7cf6a408 = file;
  _0x8235428c('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
  _0xb93df367();
  if ((!_0x451aa87d && !_0x7cf6a408)) {
    _0x8235428c('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0x98a51130("_c7a231901");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0x451aa87d) {
      const _0x709c4c82 = await _0x9400a7fb(_0x451aa87d, 'logos');
      if (_0x709c4c82) _0x16ba7d5a.logoData = _0x709c4c82;
    }
    if (_0x7cf6a408) {
      const _0x29a4b057 = await _0x9400a7fb(_0x7cf6a408, 'favicons');
      if (_0x29a4b057) _0x16ba7d5a.faviconData = _0x29a4b057;
    }
    const {
      error
    } = await _0x0cf28f49.from('mv_site').upsert({
      id: 1,
      data: _0x16ba7d5a
    });
    if (error) throw error;
    _0x091bd0a0();
    _0x98a51130("_c87236f90").value = '';
    _0x98a51130("_c028d2901").value = '';
    _0x451aa87d = null;
    _0x7cf6a408 = null;
    _0x8235428c('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x8235428c(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0x091bd0a0() {
  const _0xcad13fd4 = document.getElementById("_c944bd1dd");
  const _0xccd40e1d = document.getElementById("_c90851b59");
  if (_0x16ba7d5a.logoData) {
    if (_0xccd40e1d) _0xccd40e1d.style.display = 'none';
    if (_0xcad13fd4) {
      _0xcad13fd4.style.display = 'block';
      _0xcad13fd4.src = _0x16ba7d5a.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x16ba7d5a.logoData);
    } catch (e) {}
  } else {
    if (_0xcad13fd4) _0xcad13fd4.style.display = 'none';
    if (_0xccd40e1d) _0xccd40e1d.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0x16ba7d5a.faviconData) {
    let _0x12290228 = document.querySelector('link[rel="icon"]');
    if (!_0x12290228) {
      _0x12290228 = document.createElement('link');
      _0x12290228.rel = 'icon';
      document.head.appendChild(_0x12290228);
    }
    _0x12290228.href = _0x16ba7d5a.faviconData;
  }
}
async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0xb93df367();
  _0x16ba7d5a.logoData = null;
  const {
    error
  } = await _0x0cf28f49.from('mv_site').upsert({
    id: 1,
    data: _0x16ba7d5a
  });
  if (error) {
    _0x8235428c(('Error: ' + error.message), 'error');
    return;
  }
  _0x091bd0a0();
  const prev = _0x98a51130("_c7a3928c3"),
    img = _0x98a51130("_cf870cc09");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0x8235428c('Logo dihapus! ✓', 'success');
}
function _0xe6a7e06f() {
  const s = _0x16ba7d5a;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0x1a53b094(s.colors);
  _0x091bd0a0();
  const _0xd66f1e44 = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0xd66f1e44;
  if (_0x98a51130("_ceebe8f20")) _0x98a51130("_ceebe8f20").textContent = _0xd66f1e44;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0x98a51130("_cde88b1dc").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0x98a51130("_cbe175c30").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0xbd610f8a("_c35de0dbf", s.label);
  _0xbd610f8a("_c8ccac552", s.hsub);
  _0xbd610f8a("_c44cc9c49", s.about1);
  _0xbd610f8a("_cb512042e", s.about2);
  _0xbd610f8a("_cadc13ddf", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xda9459d3 = s.htitle.split('|');
    _0x98a51130("_cea21dafa").innerHTML = _0xda9459d3.map((_0xda8805ac, i) => (i === 0) ? _0xda8805ac : (i === 1) ? `<span class="_c43047539">${_0xda8805ac}</span>` : `<span class="_c66b8639e">${_0xda8805ac}</span>`).join('<br>');
  }
  const _0x839e7706 = [{
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
  const _0xb49c3fda = _0x98a51130("_c61c7191f"),
    _0x3f0cc20f = _0x98a51130("_c48970904");
  if (_0xb49c3fda) _0xb49c3fda.innerHTML = _0x839e7706.filter(_0x639e13cf => s[_0x639e13cf.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_c000533bf ${s2.primary ? "_cee1f8979" : "_cc4c68a54"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x3f0cc20f) _0x3f0cc20f.innerHTML = _0x839e7706.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0xc41c6330() {
  const s = _0x16ba7d5a;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x80c01c4e => {
    if (_0x98a51130(('s-' + _0x80c01c4e))) _0x98a51130(('s-' + _0x80c01c4e)).value = (s[_0x80c01c4e] || '');
  });
  if (_0x98a51130('s-perpage')) _0x98a51130('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0xd7873125 = _0x98a51130(('dm-' + mode));
  if (_0xd7873125) _0xd7873125.checked = true;
}
function previewMode(mode) {
  _0x16ba7d5a.displayMode = mode;
  _0x66ba5410(true);
}
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0x16ba7d5a = {
    brand: _0x98a51130('s-brand').value,
    siteTitle: _0x98a51130('s-siteTitle').value,
    label: _0x98a51130('s-label').value,
    htitle: _0x98a51130('s-htitle').value,
    hsub: _0x98a51130('s-hsub').value,
    about1: _0x98a51130('s-about1').value,
    about2: _0x98a51130('s-about2').value,
    yt: _0x98a51130('s-yt').value,
    tw: _0x98a51130('s-tw').value,
    discord: _0x98a51130('s-discord').value,
    vgen: _0x98a51130('s-vgen').value,
    ig: _0x98a51130('s-ig').value,
    tiktok: _0x98a51130('s-tiktok').value,
    copy: _0x98a51130('s-copy').value,
    year: _0x98a51130('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0x98a51130('s-perpage')?.value) || 12),
    colors: _0x16ba7d5a.colors,
    logoData: _0x16ba7d5a.logoData,
    faviconData: _0x16ba7d5a.faviconData
  };
  const btn = _0x98a51130("_c9f19def5");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0xb93df367();
  try {
    const {
      error
    } = await _0x0cf28f49.from('mv_site').upsert({
      id: 1,
      data: _0x16ba7d5a
    });
    if (error) throw error;
    _0xe6a7e06f();
    _0xd5cb6718();
    _0x66ba5410(true);
    _0x8235428c('Site info saved! ✓', 'success');
  } catch (err) {
    _0x8235428c(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0x54570c05() {
  const _0xed604cdc = _0x98a51130('site-edit-panel');
  if (_0xed604cdc) _0xed604cdc.classList.remove('open');
}
async function _0x47b7f1fc() {
  const _0x1413dd7d = _0x98a51130("_c87236f90"),
    _0x8ef533ba = _0x98a51130("_c028d2901");
  if (_0x1413dd7d) _0x1413dd7d.value = '';
  if (_0x8ef533ba) _0x8ef533ba.value = '';
  document.body.classList.add('loading');
  _0x7bc634bb(15, 'Connecting...');
  _0x0cf28f49 = window.supabase.createClient(_0x268ac621, _0x248c043f);
  _0x7bc634bb(35, 'Loading site info...');
  await _0xe09561ee();
  _0x7bc634bb(60, 'Loading works...');
  await _0x01561352();
  _0x7bc634bb(75, 'Preloading previews...');
  await _0x007b5fc1();
  _0x7bc634bb(90, 'Almost there...');
  _0x0cf28f49.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x01561352).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0xe09561ee).subscribe();
  setTimeout(() => {
    _0x7bc634bb(100, 'Ready!');
    setTimeout(() => {
      _0x160c5440();
      _0xc201d46e();
      if (_0x784ee238()) _0x98a51130("_c23cb14b9").classList.add('open');
    }, 300);
  }, 200);
}
_0x47b7f1fc();
