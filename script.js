const _0x74e37955 = _0x376e2b69 => atob(_0x376e2b69);
const _0x77539e69 = _0x74e37955('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x09246c92 = _0x74e37955('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x147ce4d4 = _0x74e37955('YWRt');
const _0x8b60712b = _0x74e37955('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x577c1f90 = ((60 * 60) * 1000);
let _0x98cc1889,
  _0x2dacc7c4 = [],
  _0x62a79faf = {},
  _0x27bd4cd1 = 'all',
  _0x84f08f83 = null,
  _0x375a7b27 = 1,
  _0x1595694c = 0;
let _0x02f18240 = (() => {
  try {
    const _0x09347a3c = localStorage.getItem('mv_autoplay');
    return (_0x09347a3c === null) ? true : (_0x09347a3c === '1');
  } catch {
    return true;
  }
})();
function toggleAutoplay() {
  _0x02f18240 = !_0x02f18240;
  try {
    localStorage.setItem('mv_autoplay', _0x02f18240 ? '1' : '0');
  } catch {}
  _0x0997ce04();
  if (_0x02f18240) {
    _0x305c92d0();
    _0xeedaaa05();
  } else {
    _0x9b088e78();
  }
}
function _0x0997ce04() {
  const _0x2f343e5e = _0xebe0492e("_c726d9046"),
    label = _0xebe0492e("_c93d710ec");
  if (!_0x2f343e5e) return;
  if (_0x02f18240) {
    _0x2f343e5e.classList.add("_c00393c9f");
    if (label) label.textContent = 'Autoplay';
    _0x2f343e5e.title = 'Autoplay ON — click to turn off';
  } else {
    _0x2f343e5e.classList.remove("_c00393c9f");
    if (label) label.textContent = 'Autoplay';
    _0x2f343e5e.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x9b088e78() {
  document.querySelectorAll("._c909aa435.featured-autoplay").forEach(_0x6b2690da => {
    const _0x32f0f185 = _0x6b2690da.querySelector('.mv-preview-iframe');
    if (_0x32f0f185) _0x32f0f185.remove();
    _0x6b2690da.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x6c41ca6a.forEach(iframe => iframe.remove());
  _0x6c41ca6a.clear();
}
const _0x6c41ca6a = new Map();
function _0x73b55659() {
  const _0xf3ab49d7 = 5000;
  if (!_0x02f18240) return Promise.resolve();
  const _0x9775c22e = _0x2dacc7c4.filter(_0xcd2fa953 => (_0xcd2fa953.featured && _0xcd2fa953.ytId));
  if (!_0x9775c22e.length) return Promise.resolve();
  const _0x2d25a6ee = _0x9775c22e.map(c => {
    if (_0x6c41ca6a.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x0b6e97d6 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x0b6e97d6;
      const _0xcf0effd1 = setTimeout(_0x0b6e97d6, _0xf3ab49d7);
      iframe.onload = () => {
        clearTimeout(_0xcf0effd1);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0x6c41ca6a.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x2d25a6ee), new Promise(_0x1e3ae1b4 => setTimeout(_0x1e3ae1b4, _0xf3ab49d7))]);
}
function _0xf9ace250() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0x8b60712b) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0x577c1f90)) {
      sessionStorage.removeItem(_0x8b60712b);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x5cd29776(_0x005ba54a) {
  if (_0x005ba54a) sessionStorage.setItem(_0x8b60712b, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0x8b60712b);
}
function _0xee861363() {
  if (_0xf9ace250()) _0x5cd29776(true);
}
setInterval(() => {
  if ((!_0xf9ace250() && _0xebe0492e("_c0c7440b0")?.classList.contains('open'))) {
    _0xebe0492e("_c0c7440b0").classList.remove('open');
    _0xab4ea441('Admin session expired. Type "adm" to log in again.', 'error');
  }
}, (60 * 1000));
function closeAdminPanel() {
  document.getElementById("_c0c7440b0").classList.remove('open');
  _0x98cc1889.auth.signOut();
  _0x5cd29776(false);
}
let _0xeb5a100a = '';
document.addEventListener('keydown', _0x965c7326 => {
  if (['INPUT', 'TEXTAREA'].includes(_0x965c7326.target.tagName)) return;
  if ((_0x965c7326.key === 'Escape')) {
    closeModal();
    _0x2a28856c();
    closeAdminPanel();
    _0xebe0492e("_c7f110ffa").style.display = 'none';
    return;
  }
  _0xeb5a100a += _0x965c7326.key.toLowerCase();
  if ((_0xeb5a100a.length > _0x147ce4d4.length)) _0xeb5a100a = _0xeb5a100a.slice(-_0x147ce4d4.length);
  if ((_0xeb5a100a === _0x147ce4d4)) {
    _0xeb5a100a = '';
    _0x28270241();
  }
});
function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(_0x2a9092af => _0x2a9092af.classList.remove("_c00393c9f"));
  document.querySelectorAll('.tab-pane').forEach(_0x222ea93d => _0x222ea93d.classList.remove("_c00393c9f"));
  btn.classList.add("_c00393c9f");
  _0xebe0492e(('tab-' + name)).classList.add("_c00393c9f");
  if ((name === 'list')) _0x7ae3b892();
  if ((name === 'site')) _0x0f803a30();
  if ((name === 'design')) _0xd05b2636();
}
function _0x28270241() {
  if (_0xf9ace250()) {
    _0xee861363();
    _0xebe0492e("_c0c7440b0").classList.toggle('open');
    return;
  }
  _0xebe0492e("_c9faa44f8").style.display = 'none';
  _0xebe0492e("_cb44c2a0a").value = '';
  _0xebe0492e("_c70526fd5").value = '';
  _0xebe0492e("_ccbb22190").disabled = false;
  try {
    const _0xfcb5b9ec = JSON.parse((sessionStorage.getItem(_0x74e37955('bG9ja291dA==')) || 'null'));
    if ((_0xfcb5b9ec && (Date.now() < _0xfcb5b9ec.until))) {
      const _0xeb37fa7e = Math.ceil(((_0xfcb5b9ec.until - Date.now()) / 60000));
      _0xebe0492e("_c9faa44f8").style.display = 'block';
      _0xebe0492e("_c9faa44f8").textContent = `🔒 Too many attempts. Try again in ${_0xeb37fa7e} min.`;
      _0xebe0492e("_ccbb22190").disabled = true;
    }
  } catch (e) {}
  _0xebe0492e("_c7f110ffa").style.display = 'flex';
  setTimeout(() => _0xebe0492e("_cb44c2a0a").focus(), 100);
}
async function checkPw() {
  const _0xa2e7d16a = 5,
    _0x4126f211 = ((15 * 60) * 1000),
    now = Date.now();
  const _0x9c1b8aff = _0x74e37955('bG9ja291dA=='),
    _0x7bcc574d = _0x74e37955('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0x9c1b8aff) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0xebe0492e("_c9faa44f8").style.display = 'block';
      _0xebe0492e("_c9faa44f8").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0xebe0492e("_ccbb22190").disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0xebe0492e("_cb44c2a0a").value.trim(),
    _0xe9f2ec1b = _0xebe0492e("_c70526fd5").value;
  if ((!email || !_0xe9f2ec1b)) {
    _0xebe0492e("_c9faa44f8").style.display = 'block';
    _0xebe0492e("_c9faa44f8").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0xebe0492e("_ccbb22190");
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0x98cc1889.auth.signInWithPassword({
      email,
      password: _0xe9f2ec1b
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0x7bcc574d);
    sessionStorage.removeItem(_0x9c1b8aff);
    _0x5cd29776(true);
    _0xebe0492e("_c7f110ffa").style.display = 'none';
    _0xebe0492e("_c0c7440b0").classList.add('open');
    _0xab4ea441('Welcome back! ✓', 'success');
  } catch (e) {
    let _0x5c9b319c = 0;
    try {
      _0x5c9b319c = parseInt((sessionStorage.getItem(_0x7bcc574d) || '0'));
    } catch (e) {}
    _0x5c9b319c++;
    sessionStorage.setItem(_0x7bcc574d, _0x5c9b319c);
    const _0xb82b2819 = (_0xa2e7d16a - _0x5c9b319c);
    if ((_0x5c9b319c >= _0xa2e7d16a)) {
      sessionStorage.setItem(_0x9c1b8aff, JSON.stringify({
        until: (now + _0x4126f211)
      }));
      sessionStorage.removeItem(_0x7bcc574d);
      _0xebe0492e("_c9faa44f8").style.display = 'block';
      _0xebe0492e("_c9faa44f8").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0xebe0492e("_c9faa44f8").style.display = 'block';
      _0xebe0492e("_c9faa44f8").textContent = `❌ Wrong credentials. ${_0xb82b2819} attempt${(_0xb82b2819 > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0xebe0492e("_c70526fd5").value = '';
    _0xebe0492e("_c70526fd5").focus();
  }
  btn.textContent = 'Sign In →';
}
function _0xcb1e1e5e(_0x9852add6, text) {
  const _0x79789a53 = _0xebe0492e("_c3b13fffc"),
    _0xc8a73452 = _0xebe0492e("_c4cd7c66e");
  if (_0x79789a53) _0x79789a53.style.width = (_0x9852add6 + '%');
  if ((_0xc8a73452 && text)) _0xc8a73452.textContent = text;
}
function _0x4e0795ff() {
  const s = _0xebe0492e("_c2667f3bd");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x7a48bbf9() {
  const {
    data,
    error
  } = await _0x98cc1889.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0x2dacc7c4 = (data || []);
  _0xebfd6a7c(true);
  _0x3469e941();
  _0xd97e9dce();
  _0x6f1f7604();
  if (_0xebe0492e('tab-list')?.classList.contains("_c00393c9f")) _0x7ae3b892();
}
async function _0x60a3d6a9() {
  const {
    data
  } = await _0x98cc1889.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x62a79faf = data.data;
    if (_0x62a79faf.logoData) {
      await new Promise(resolve => {
        const _0x1c906e0c = new Image();
        _0x1c906e0c.onload = resolve;
        _0x1c906e0c.onerror = resolve;
        _0x1c906e0c.src = _0x62a79faf.logoData;
      });
    }
    _0x1a431888();
    _0xd97e9dce();
  }
}
function _0xebe0492e(id) {
  return document.getElementById(id);
}
function _0xd735bc3f(id, v) {
  if ((v && _0xebe0492e(id))) _0xebe0492e(id).textContent = v;
}
function _0xd8f3bfc7(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0x6e2110c3(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0x9b7e885a = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0x9b7e885a ? _0x9b7e885a[1] : null;
}
let _0x1136dfc8;
function _0xab4ea441(_0xa7fd9e3a, type = '') {
  const t = _0xebe0492e("_cff3fb2b1");
  t.textContent = _0xa7fd9e3a;
  t.className = `toast ${type} show`;
  clearTimeout(_0x1136dfc8);
  _0x1136dfc8 = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0xec3403c0(id) {
  const _0x680e3647 = (_0xebe0492e(id).value || '');
  return _0x680e3647.split(',').map(t => t.trim()).filter(Boolean);
}
function _0xc2a2e08c(id, _0x49d62dc6) {
  _0xebe0492e(id).value = _0x49d62dc6.join(', ');
}
function togglePresetTag(_0xeb450cbf, _0xcf1526da, btn) {
  _0xee861363();
  let tags = _0xec3403c0(_0xeb450cbf);
  if (tags.includes(_0xcf1526da)) {
    tags = tags.filter(t => (t !== _0xcf1526da));
    btn.classList.remove("_c00393c9f");
  } else {
    tags.push(_0xcf1526da);
    btn.classList.add("_c00393c9f");
  }
  _0xc2a2e08c(_0xeb450cbf, tags);
}
function syncPresetHighlight(inputId, _0x19d48e7a) {
  const tags = _0xec3403c0(inputId),
    _0x6abfc378 = _0xebe0492e(_0x19d48e7a);
  if (!_0x6abfc378) return;
  _0x6abfc378.querySelectorAll("._c7f5050f1").forEach(btn => {
    btn.classList.toggle("_c00393c9f", tags.includes(btn.textContent.trim()));
  });
}
function _0xec64d13d(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x81046a0f(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x6f1f7604() {
  const _0xfbedc22a = _0x2dacc7c4.map(c => (c.thumb || (c.ytId ? _0x81046a0f(c.ytId) : null))).filter(Boolean);
  if ((_0xfbedc22a.length < 2)) return;
  const _0xd9188e9a = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0x4dc32ade = [{
    id: "_cb8d0ecaa",
    items: _0xd9188e9a(_0xfbedc22a, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_c862ccae1",
    items: _0xd9188e9a([..._0xfbedc22a].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_cbac73707",
    items: _0xd9188e9a(_0xfbedc22a.slice(Math.floor((_0xfbedc22a.length / 2))).concat(_0xfbedc22a.slice(0, Math.floor((_0xfbedc22a.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0x4dc32ade.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0xaba6027e = _0xebe0492e(id);
    if (!_0xaba6027e) return;
    const all = [...items, ...items];
    _0xaba6027e.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0xb432eea3 = (items.length * (speed / 20));
      _0xaba6027e.style.animationDuration = `${_0xb432eea3}s`;
      if ((dir === 'right')) {
        _0xaba6027e.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0xebe0492e("_c24334139");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0x62a428f9(c) {
  const thumb = (c.thumb || (c.ytId ? _0xec64d13d(c.ytId) : ''));
  const _0x141c1585 = c.ytId ? _0x81046a0f(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0xd8f3bfc7(t)}</span>`).join('');
  const _0x1cbfbe2f = !!c.ytId;
  const _0x8793ba81 = !!c.featured;
  const _0x7405fddd = (_0x1cbfbe2f && !_0x8793ba81) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_c909aa435${_0x8793ba81 ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0x7405fddd}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0xd8f3bfc7(c.title)}" loading="lazy" onerror="this.src='${_0x141c1585}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0xd8f3bfc7(c.title)}</div><div class="mv-artist">${_0xd8f3bfc7((c.artist || ''))}</div></div></div>
</div>`;
}
function _0x5cf00f5e() {
  return (_0x62a79faf.displayMode || 'all');
}
function _0x89d19941() {
  return (parseInt(_0x62a79faf.perPage) || 12);
}
function _0xebfd6a7c(_0x1fe702fb) {
  if (_0x1fe702fb) {
    _0x375a7b27 = 1;
    _0x1595694c = 0;
  }
  const _0x1baec7df = _0xebe0492e("_c8a43e5b1"),
    _0xf9a08bfa = _0x5cf00f5e(),
    perPage = _0x89d19941();
  const _0xbdafb2be = (_0x27bd4cd1 === 'all') ? _0x2dacc7c4 : _0x2dacc7c4.filter(c => (c.tags || []).includes(_0x27bd4cd1));
  _0xebe0492e("_c728d908e").textContent = String(_0xbdafb2be.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0xebe0492e(id);
    if (e) e.remove();
  });
  if (!_0xbdafb2be.length) {
    _0x1baec7df.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0xf9a08bfa === 'pagination')) {
    const _0xf8ee7578 = Math.ceil((_0xbdafb2be.length / perPage));
    _0x375a7b27 = Math.min(_0x375a7b27, _0xf8ee7578);
    const slice = _0xbdafb2be.slice(((_0x375a7b27 - 1) * perPage), (_0x375a7b27 * perPage));
    _0x1baec7df.innerHTML = slice.map(_0x62a428f9).join('');
    if ((_0xf8ee7578 > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x6c7a1c52 = 1; (_0x6c7a1c52 <= _0xf8ee7578); _0x6c7a1c52++) {
        const btn = document.createElement('button');
        btn.textContent = _0x6c7a1c52;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x6c7a1c52 === _0x375a7b27) ? 'var(--accent)' : 'transparent'};color:${(_0x6c7a1c52 === _0x375a7b27) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0x375a7b27 = _0x6c7a1c52;
          _0xebfd6a7c(false);
          window.scrollTo({
            top: (_0xebe0492e("_c8f13cb67").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0x1baec7df.appendChild(bar);
    }
  } else if ((_0xf9a08bfa === 'loadmore')) {
    if (_0x1fe702fb) _0x1595694c = perPage;else _0x1595694c = Math.max(_0x1595694c, perPage);
    const slice = _0xbdafb2be.slice(0, _0x1595694c);
    _0x1baec7df.innerHTML = slice.map(_0x62a428f9).join('');
    if ((_0x1595694c < _0xbdafb2be.length)) {
      const rem = (_0xbdafb2be.length - _0x1595694c);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0x1595694c += perPage;
        _0xebfd6a7c(false);
      };
      _0x1baec7df.appendChild(btn);
    }
  } else {
    _0x1baec7df.innerHTML = _0xbdafb2be.map(_0x62a428f9).join('');
  }
  requestAnimationFrame(() => _0x305c92d0());
}
function _0x3469e941() {
  const tags = new Set();
  _0x2dacc7c4.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0xebe0492e("_c489c4769").innerHTML = (`<button class="_c5285a148${(_0x27bd4cd1 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_c5285a148${(_0x27bd4cd1 === t) ? ' active' : ''}" onclick="filterCards('${_0xd8f3bfc7(t)}',this)">${_0xd8f3bfc7(t)}</button>`).join(''));
}
function filterCards(tag, btn) {
  _0x27bd4cd1 = tag;
  document.querySelectorAll("._c5285a148").forEach(b => b.classList.remove("_c00393c9f"));
  btn.classList.add("_c00393c9f");
  _0xebfd6a7c(true);
}
function _0x305c92d0() {
  if (!_0x02f18240) return;
  const _0xed558bd1 = document.querySelectorAll("._c909aa435.featured");
  _0xed558bd1.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0xc1b1d038 = _0x6c41ca6a.get(ytId);
    if (_0xc1b1d038) {
      _0xc1b1d038.removeAttribute('style');
      _0xc1b1d038.className = 'mv-preview-iframe';
      card.insertBefore(_0xc1b1d038, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0xc1b1d038.contentWindow) {
        if (_0xc1b1d038._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0xc1b1d038.onload = () => {
            _0xc1b1d038._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0x6c41ca6a.delete(ytId);
    } else {
      _0x2c28c801(card, ytId);
    }
  });
}
function _0x2c28c801(card, ytId) {
  if (!_0x02f18240) return;
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
function _0xeedaaa05() {
  const featuredCards = document.querySelectorAll("._c909aa435.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0x2c28c801(card, ytId);
  });
}
let _0xdda7063d = null;
function _0x7ae3b892() {
  const _0xa105560b = _0xebe0492e("_c5fa42dd0");
  if (!_0x2dacc7c4.length) {
    _0xa105560b.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0xdda7063d) {
      _0xdda7063d.destroy();
      _0xdda7063d = null;
    }
    return;
  }
  _0xa105560b.innerHTML = _0x2dacc7c4.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0xec64d13d(c.ytId) : ''));
    const fallback = c.ytId ? _0x81046a0f(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0xd8f3bfc7(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0xd8f3bfc7((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0xd8f3bfc7(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0xd8f3bfc7((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_c1af462fc" id="edit-tag-presets-${c.id}">
  <button type="button" class="_c7f5050f1" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_c7f5050f1" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_c7f5050f1" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_c7f5050f1" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_c7f5050f1" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0xd8f3bfc7((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0xd8f3bfc7((c.thumb || ''))}">
<div class="_c4ed24456" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0xdda7063d) {
    _0xdda7063d.destroy();
    _0xdda7063d = null;
  }
  _0xdda7063d = Sortable.create(_0xa105560b, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0x913ece95 => {
      if ((_0x913ece95.oldIndex === _0x913ece95.newIndex)) return;
      const _0xf8d54790 = _0x2dacc7c4.splice(_0x913ece95.oldIndex, 1);
      _0x2dacc7c4.splice(_0x913ece95.newIndex, 0, _0xf8d54790);
      let _0x77d62c3c = _0xebe0492e('sort-saving');
      if (!_0x77d62c3c) {
        _0x77d62c3c = document.createElement('div');
        _0x77d62c3c.id = 'sort-saving';
        _0x77d62c3c.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xa105560b.insertAdjacentElement('afterend', _0x77d62c3c);
      }
      _0x77d62c3c.textContent = '⟳ Saving order...';
      await Promise.all(_0x2dacc7c4.map((c, i) => _0x98cc1889.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0x77d62c3c.remove();
      _0xab4ea441('Order saved! ✓', 'success');
      _0xebfd6a7c(true);
    }
  });
}
function toggleEdit(id) {
  const _0x0dcff305 = _0xebe0492e(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0x0dcff305.classList.toggle('open');
  if (_0x0dcff305.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function saveEdit(id) {
  const _0xfeaf9f08 = _0xebe0492e(`e-url-${id}`).value.trim(),
    title = _0xebe0492e(`e-title-${id}`).value.trim(),
    artist = _0xebe0492e(`e-artist-${id}`).value.trim();
  const _0xad78a4bb = _0xebe0492e(`e-tags-${id}`).value.trim(),
    thumb = _0xebe0492e(`e-thumb-${id}`).value.trim(),
    _0x93b4d780 = _0xebe0492e(`e-feat-${id}`).checked;
  if (!title) {
    _0xab4ea441('Title cannot be empty!', 'error');
    return;
  }
  _0xee861363();
  const ytId = ((_0x6e2110c3(_0xfeaf9f08) || _0xfeaf9f08) || null);
  const tags = _0xad78a4bb ? _0xad78a4bb.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0xebe0492e(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0x98cc1889.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x93b4d780
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0xab4ea441(('Error: ' + error.message), 'error');
    return;
  }
  _0xab4ea441('Work updated! ✓', 'success');
  toggleEdit(id);
}
function _0xd97e9dce() {
  _0xebe0492e("_ca6a482b7").textContent = (_0x2dacc7c4.length || '0');
  const _0xa3138fd3 = new Set(_0x2dacc7c4.map(c => c.artist).filter(Boolean));
  _0xebe0492e("_c81ea9002").textContent = (_0xa3138fd3.size || '0');
  const tags = new Set();
  _0x2dacc7c4.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0xebe0492e("_c83af3848").textContent = (tags.size || '0');
  _0xebe0492e("_c26040edd").textContent = (_0x62a79faf.year || new Date().getFullYear());
}
async function addCard() {
  const _0xe9a44f26 = _0xebe0492e("_cdc13562f").value.trim(),
    title = _0xebe0492e("_ce2934e9c").value.trim(),
    artist = _0xebe0492e("_cd7c14bd1").value.trim();
  const _0xb07f89f4 = _0xebe0492e("_ccd7b7167").value.trim(),
    thumb = _0xebe0492e("_cafd57f97").value.trim(),
    feat = _0xebe0492e("_c42964a40").checked;
  if (!title) {
    _0xab4ea441('Title is required!', 'error');
    return;
  }
  _0xee861363();
  const ytId = _0x6e2110c3(_0xe9a44f26);
  const tags = _0xb07f89f4 ? _0xb07f89f4.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0xebe0492e("_c3a2635ae");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0x98cc1889.from('mv_works').insert([{
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
    _0xab4ea441(('Error: ' + error.message), 'error');
    return;
  }
  _0xab4ea441('Work added! ✓', 'success');
  ["_cdc13562f", "_ce2934e9c", "_cd7c14bd1", "_ccd7b7167", "_cafd57f97"].forEach(id => _0xebe0492e(id).value = '');
  _0xebe0492e("_c42964a40").checked = false;
  document.querySelectorAll("#_cae9c6f36 ._c7f5050f1").forEach(b => b.classList.remove("_c00393c9f"));
  _0x4c729713('', '');
}
async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  _0xee861363();
  const {
    error
  } = await _0x98cc1889.from('mv_works').delete().eq('id', id);
  if (error) {
    _0xab4ea441(('Error: ' + error.message), 'error');
    return;
  }
  _0xab4ea441('Work removed', 'success');
}
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0x2dacc7c4.find(_0x90f61391 => (_0x90f61391.id === id));
  if (!c) return;
  _0xebe0492e("_c62f509e5").textContent = c.title;
  _0xebe0492e("_c1c680d07").textContent = (c.artist || '');
  _0xebe0492e("_c244d6cb5").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0xd8f3bfc7(t)}</span>`).join('');
  _0xebe0492e("_c2ef38e64").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0xebe0492e("_c385b1a01").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if ((e && (e.target !== _0xebe0492e("_c385b1a01")))) return;
  _0xebe0492e("_c385b1a01").classList.remove('open');
  _0xebe0492e("_c2ef38e64").innerHTML = '';
  document.body.style.overflow = '';
}
function onUrlInput(val) {
  clearTimeout(_0x84f08f83);
  const ytId = _0x6e2110c3(val);
  if (!ytId) {
    _0x4c729713('', '');
    return;
  }
  _0x4c729713('loading', '⟳ Fetching info...');
  _0x84f08f83 = setTimeout(() => _0x0c8cdc57(ytId), 800);
}
async function _0x0c8cdc57(ytId) {
  try {
    const _0xcaf408ac = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xcaf408ac.ok) throw new Error();
    const data = await _0xcaf408ac.json();
    if (!_0xebe0492e("_ce2934e9c").value.trim()) _0xebe0492e("_ce2934e9c").value = (data.title || '');
    if (!_0xebe0492e("_cd7c14bd1").value.trim()) _0xebe0492e("_cd7c14bd1").value = (data.author_name || '');
    _0x4c729713('ok', '✓ Info fetched');
  } catch {
    _0x4c729713('err', '⚠ Could not fetch info');
  }
}
function _0x4c729713(type, msg) {
  const s = _0xebe0492e("_c1cbec14e");
  s.textContent = msg;
  s.className = ("_c1cbec14e" + (type ? (' ' + type) : ''));
}
let _0x776f5de3 = null;
function toggleEditMode() {
  const _0x3b1943ff = document.body.classList.toggle('edit-mode');
  const bar = _0xebe0492e('edit-mode-bar');
  const btn = _0xebe0492e('edit-mode-toggle-btn');
  if (_0x3b1943ff) {
    bar.classList.add("_c00393c9f");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0xebe0492e("_c0c7440b0").classList.remove('open');
    _0x102ff0b8();
  } else {
    exitEditMode();
  }
}
function exitEditMode() {
  document.body.classList.remove('edit-mode');
  _0xebe0492e('edit-mode-bar').classList.remove("_c00393c9f");
  const btn = _0xebe0492e('edit-mode-toggle-btn');
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0x776f5de3) {
    _0x776f5de3.destroy();
    _0x776f5de3 = null;
  }
}
function _0x102ff0b8() {
  const grid = _0xebe0492e("_c8a43e5b1");
  if (!grid) return;
  if (_0x776f5de3) _0x776f5de3.destroy();
  _0x776f5de3 = Sortable.create(grid, {
    animation: 200,
    draggable: "._c909aa435",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0x2dacc7c4.splice(evt.oldIndex, 1);
      _0x2dacc7c4.splice(evt.newIndex, 0, moved);
      _0xab4ea441('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function saveGridOrder() {
  _0xab4ea441('Saving order...', '');
  await Promise.all(_0x2dacc7c4.map((c, i) => _0x98cc1889.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0xab4ea441('Order saved! ✓', 'success');
  exitEditMode();
  _0xebfd6a7c(true);
}
let _0x4a508ac2 = null;
let _0xf0357753 = null;
const _0x60b263b5 = new Map();
function startPreview(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0x60b263b5.has(ytId)) {
    const _0x36de1d4c = document.createElement('iframe');
    _0x36de1d4c.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0x36de1d4c.allow = 'autoplay';
    _0x36de1d4c.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0x36de1d4c);
    _0x60b263b5.set(ytId, _0x36de1d4c);
  }
  _0x4a508ac2 = setTimeout(() => {
    stopPreview(_0xf0357753);
    _0xf0357753 = card;
    card.classList.add('previewing');
    const _0x5e7ba40f = _0x60b263b5.get(ytId);
    if (_0x5e7ba40f) {
      _0x5e7ba40f.removeAttribute('style');
      _0x5e7ba40f.className = 'mv-preview-iframe';
      _0x5e7ba40f.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x5e7ba40f, card.firstChild);
      _0x5e7ba40f.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function stopPreview(card) {
  clearTimeout(_0x4a508ac2);
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
  if ((_0xf0357753 === card)) _0xf0357753 = null;
}
const _0x8fb74fcd = {
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
function _0x569d5f0e(name) {
  const p = _0x8fb74fcd[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x6b541964 = _0xebe0492e(('color-' + k));
    if (_0x6b541964) _0x6b541964.value = v;
    const _0xfda1477f = _0xebe0492e((('color-' + k) + '-hex'));
    if (_0xfda1477f) _0xfda1477f.value = v;
  });
  _0xab4ea441('Preview applied — click Save Colors to keep it', '');
}
function previewColor(_0x1fdb6f12, val) {
  document.documentElement.style.setProperty(('--' + _0x1fdb6f12), val);
  const hex = _0xebe0492e((('color-' + _0x1fdb6f12) + '-hex'));
  if (hex) hex.value = val;
}
function previewColorHex(varName, _0x1e1e3bf8) {
  const val = _0x1e1e3bf8.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0x3f24487d = _0xebe0492e(('color-' + varName));
    if (_0x3f24487d) _0x3f24487d.value = val;
  }
}
async function saveColors() {
  _0xee861363();
  const colors = {
    text: (_0xebe0492e('color-text')?.value || '#f0f0f0'),
    accent: _0xebe0492e('color-accent').value,
    accent2: _0xebe0492e('color-accent2').value,
    bg: _0xebe0492e('color-bg').value,
    surface: _0xebe0492e('color-surface').value
  };
  _0x62a79faf.colors = colors;
  const btn = _0xebe0492e('color-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0x98cc1889.from('mv_site').upsert({
      id: 1,
      data: _0x62a79faf
    });
    if (error) throw error;
    _0xab4ea441('Colors saved! ✓', 'success');
  } catch (err) {
    _0xab4ea441(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0xc22111c5(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0xebe0492e(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0xebe0492e((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function resetColors() {
  const _0x09ade9e9 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0xc22111c5(_0x09ade9e9);
  _0x62a79faf.colors = _0x09ade9e9;
  _0xab4ea441('Reset to default — click Save Colors to keep it', '');
}
function _0xd05b2636() {
  if (_0x62a79faf.colors) _0xc22111c5(_0x62a79faf.colors);
  if (_0x62a79faf.logoData) {
    const _0x9b4c7684 = _0xebe0492e("_cdaed90c1");
    const img = _0xebe0492e("_ca1b04f71");
    if ((_0x9b4c7684 && img)) {
      img.src = _0x62a79faf.logoData;
      _0x9b4c7684.style.display = 'block';
    }
  }
}
let _0x7ee0926b = null;
let _0x4dc4ff50 = null;
function _0xd46e0bcd(_0xdb9cb083) {
  if ((_0xdb9cb083.type && (_0xdb9cb083.type !== ''))) return _0xdb9cb083.type;
  const _0x2a633c4a = _0xdb9cb083.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x2a633c4a] || 'image/png');
}
function _0x77e5d50b(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0x0c01baa3(file, _0x3aef2e81) {
  if (!file) return null;
  const _0x9d727d56 = _0xd46e0bcd(file);
  const ext = _0x77e5d50b(file);
  const _0x4584d183 = `${_0x3aef2e81}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0x98cc1889.storage.from('portfolio-assets').upload(_0x4584d183, file, {
    upsert: true,
    contentType: _0x9d727d56
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x4bf66e58
  } = _0x98cc1889.storage.from('portfolio-assets').getPublicUrl(_0x4584d183);
  return _0x4bf66e58.publicUrl;
}
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x7ee0926b = file;
  const _0x55f458b6 = URL.createObjectURL(file);
  const prev = _0xebe0492e("_cdaed90c1"),
    img = _0xebe0492e("_ca1b04f71");
  if ((prev && img)) {
    img.src = _0x55f458b6;
    prev.style.display = 'block';
  }
  _0xab4ea441('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x4dc4ff50 = file;
  _0xab4ea441('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
  _0xee861363();
  if ((!_0x7ee0926b && !_0x4dc4ff50)) {
    _0xab4ea441('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0xebe0492e("_cf72674fb");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0x7ee0926b) {
      const _0x0a4c3628 = await _0x0c01baa3(_0x7ee0926b, 'logos');
      if (_0x0a4c3628) _0x62a79faf.logoData = _0x0a4c3628;
    }
    if (_0x4dc4ff50) {
      const _0x73a7f857 = await _0x0c01baa3(_0x4dc4ff50, 'favicons');
      if (_0x73a7f857) _0x62a79faf.faviconData = _0x73a7f857;
    }
    const {
      error
    } = await _0x98cc1889.from('mv_site').upsert({
      id: 1,
      data: _0x62a79faf
    });
    if (error) throw error;
    _0xe3da5d33();
    _0xebe0492e("_cc24e1102").value = '';
    _0xebe0492e("_c28e010a7").value = '';
    _0x7ee0926b = null;
    _0x4dc4ff50 = null;
    _0xab4ea441('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0xab4ea441(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0xe3da5d33() {
  const _0xe7f2eaee = document.getElementById("_ca366d506");
  const _0x9e9fbd34 = document.getElementById("_ca35a5d0b");
  if (_0x62a79faf.logoData) {
    if (_0x9e9fbd34) _0x9e9fbd34.style.display = 'none';
    if (_0xe7f2eaee) {
      _0xe7f2eaee.style.display = 'block';
      _0xe7f2eaee.src = _0x62a79faf.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x62a79faf.logoData);
    } catch (e) {}
  } else {
    if (_0xe7f2eaee) _0xe7f2eaee.style.display = 'none';
    if (_0x9e9fbd34) _0x9e9fbd34.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0x62a79faf.faviconData) {
    let _0xc0bb8172 = document.querySelector('link[rel="icon"]');
    if (!_0xc0bb8172) {
      _0xc0bb8172 = document.createElement('link');
      _0xc0bb8172.rel = 'icon';
      document.head.appendChild(_0xc0bb8172);
    }
    _0xc0bb8172.href = _0x62a79faf.faviconData;
  }
}
async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0xee861363();
  _0x62a79faf.logoData = null;
  const {
    error
  } = await _0x98cc1889.from('mv_site').upsert({
    id: 1,
    data: _0x62a79faf
  });
  if (error) {
    _0xab4ea441(('Error: ' + error.message), 'error');
    return;
  }
  _0xe3da5d33();
  const prev = _0xebe0492e("_cdaed90c1"),
    img = _0xebe0492e("_ca1b04f71");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0xab4ea441('Logo dihapus! ✓', 'success');
}
function _0x1a431888() {
  const s = _0x62a79faf;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0xc22111c5(s.colors);
  _0xe3da5d33();
  const _0xc9ea9625 = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0xc9ea9625;
  if (_0xebe0492e("_c065a034d")) _0xebe0492e("_c065a034d").textContent = _0xc9ea9625;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0xebe0492e("_c97815e39").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0xebe0492e("_c32091db6").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0xd735bc3f("_c3ad52395", s.label);
  _0xd735bc3f("_c2448543f", s.hsub);
  _0xd735bc3f("_c5420d1ba", s.about1);
  _0xd735bc3f("_c1351450c", s.about2);
  _0xd735bc3f("_c35176635", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xbc438edf = s.htitle.split('|');
    _0xebe0492e("_cfee50768").innerHTML = _0xbc438edf.map((_0x4f5f5875, i) => (i === 0) ? _0x4f5f5875 : (i === 1) ? `<span class="_c8471ee7f">${_0x4f5f5875}</span>` : `<span class="_cbf856389">${_0x4f5f5875}</span>`).join('<br>');
  }
  const _0xe8861a36 = [{
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
  const _0xfb0078b8 = _0xebe0492e("_cee045151"),
    _0x59402495 = _0xebe0492e("_c9f13353a");
  if (_0xfb0078b8) _0xfb0078b8.innerHTML = _0xe8861a36.filter(_0x4eabe9d9 => s[_0x4eabe9d9.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_cc5dd7d7b ${s2.primary ? "_c7fa597ca" : "_c0dde536f"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x59402495) _0x59402495.innerHTML = _0xe8861a36.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0x0f803a30() {
  const s = _0x62a79faf;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x922773a5 => {
    if (_0xebe0492e(('s-' + _0x922773a5))) _0xebe0492e(('s-' + _0x922773a5)).value = (s[_0x922773a5] || '');
  });
  if (_0xebe0492e('s-perpage')) _0xebe0492e('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0x0e548d27 = _0xebe0492e(('dm-' + mode));
  if (_0x0e548d27) _0x0e548d27.checked = true;
}
function previewMode(mode) {
  _0x62a79faf.displayMode = mode;
  _0xebfd6a7c(true);
}
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0x62a79faf = {
    brand: _0xebe0492e('s-brand').value,
    siteTitle: _0xebe0492e('s-siteTitle').value,
    label: _0xebe0492e('s-label').value,
    htitle: _0xebe0492e('s-htitle').value,
    hsub: _0xebe0492e('s-hsub').value,
    about1: _0xebe0492e('s-about1').value,
    about2: _0xebe0492e('s-about2').value,
    yt: _0xebe0492e('s-yt').value,
    tw: _0xebe0492e('s-tw').value,
    discord: _0xebe0492e('s-discord').value,
    vgen: _0xebe0492e('s-vgen').value,
    ig: _0xebe0492e('s-ig').value,
    tiktok: _0xebe0492e('s-tiktok').value,
    copy: _0xebe0492e('s-copy').value,
    year: _0xebe0492e('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0xebe0492e('s-perpage')?.value) || 12),
    colors: _0x62a79faf.colors,
    logoData: _0x62a79faf.logoData,
    faviconData: _0x62a79faf.faviconData
  };
  const btn = _0xebe0492e("_c79ab6801");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0xee861363();
  try {
    const {
      error
    } = await _0x98cc1889.from('mv_site').upsert({
      id: 1,
      data: _0x62a79faf
    });
    if (error) throw error;
    _0x1a431888();
    _0xd97e9dce();
    _0xebfd6a7c(true);
    _0xab4ea441('Site info saved! ✓', 'success');
  } catch (err) {
    _0xab4ea441(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0x2a28856c() {
  const _0x7f032ab6 = _0xebe0492e('site-edit-panel');
  if (_0x7f032ab6) _0x7f032ab6.classList.remove('open');
}
async function _0xd03af109() {
  const _0x7eb613a2 = _0xebe0492e("_cc24e1102"),
    _0x833ca05a = _0xebe0492e("_c28e010a7");
  if (_0x7eb613a2) _0x7eb613a2.value = '';
  if (_0x833ca05a) _0x833ca05a.value = '';
  document.body.classList.add('loading');
  _0xcb1e1e5e(15, 'Connecting...');
  _0x98cc1889 = window.supabase.createClient(_0x77539e69, _0x09246c92);
  _0xcb1e1e5e(35, 'Loading site info...');
  await _0x60a3d6a9();
  _0xcb1e1e5e(60, 'Loading works...');
  await _0x7a48bbf9();
  _0xcb1e1e5e(75, 'Preloading previews...');
  await _0x73b55659();
  _0xcb1e1e5e(90, 'Almost there...');
  _0x98cc1889.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x7a48bbf9).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x60a3d6a9).subscribe();
  setTimeout(() => {
    _0xcb1e1e5e(100, 'Ready!');
    setTimeout(() => {
      _0x4e0795ff();
      _0x0997ce04();
      if (_0xf9ace250()) _0xebe0492e("_c0c7440b0").classList.add('open');
    }, 300);
  }, 200);
}
_0xd03af109();
