const _0xa33e293a = _0xfbb7d634 => atob(_0xfbb7d634);
const _0x0ce912a8 = _0xa33e293a('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0xd5412e43 = _0xa33e293a('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0xdf46260c = _0xa33e293a('YWRt');
const _0xd84571a3 = _0xa33e293a('bXZwX2FkbWluX3Nlc3Npb24=');
const _0xa2e7774b = ((60 * 60) * 1000);
let _0xde726f48,
  _0x9e6443c5 = [],
  _0x85641d8a = {},
  _0xb2085f51 = 'all',
  _0xe31e1fa8 = null,
  _0x849173aa = 1,
  _0x87f615c0 = 0;
let _0x76270aea = (() => {
  try {
    const _0xc281d665 = localStorage.getItem('mv_autoplay');
    return (_0xc281d665 === null) ? true : (_0xc281d665 === '1');
  } catch {
    return true;
  }
})();
function toggleAutoplay() {
  _0x76270aea = !_0x76270aea;
  try {
    localStorage.setItem('mv_autoplay', _0x76270aea ? '1' : '0');
  } catch { }
  _0x08171b79();
  if (_0x76270aea) {
    _0xe1d3f6ae();
    _0x316faa05();
  } else {
    _0x252302f4();
  }
}
function _0x08171b79() {
  const _0x939bb2b1 = _0x8a90014c("_c741f3104"),
    label = _0x8a90014c("_ca4f001ce");
  if (!_0x939bb2b1) return;
  if (_0x76270aea) {
    _0x939bb2b1.classList.add("_c50031cce");
    if (label) label.textContent = 'Autoplay';
    _0x939bb2b1.title = 'Autoplay ON — click to turn off';
  } else {
    _0x939bb2b1.classList.remove("_c50031cce");
    if (label) label.textContent = 'Autoplay';
    _0x939bb2b1.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x252302f4() {
  document.querySelectorAll("._c04cfca0e.featured-autoplay").forEach(_0xc1fbb58d => {
    const _0x9b2b5cff = _0xc1fbb58d.querySelector('.mv-preview-iframe');
    if (_0x9b2b5cff) _0x9b2b5cff.remove();
    _0xc1fbb58d.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x64e6727c.forEach(iframe => iframe.remove());
  _0x64e6727c.clear();
}
const _0x64e6727c = new Map();
function _0x28602faf() {
  const _0x7131d07a = 5000;
  if (!_0x76270aea) return Promise.resolve();
  const _0x65bca479 = _0x9e6443c5.filter(_0xad0e2172 => (_0xad0e2172.featured && _0xad0e2172.ytId));
  if (!_0x65bca479.length) return Promise.resolve();
  const _0x658d535a = _0x65bca479.map(c => {
    if (_0x64e6727c.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x71a34d71 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x71a34d71;
      const _0x29a61c7a = setTimeout(_0x71a34d71, _0x7131d07a);
      iframe.onload = () => {
        clearTimeout(_0x29a61c7a);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0x64e6727c.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x658d535a), new Promise(_0x824dadb4 => setTimeout(_0x824dadb4, _0x7131d07a))]);
}
function _0x5765cff8() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0xd84571a3) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0xa2e7774b)) {
      sessionStorage.removeItem(_0xd84571a3);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x6df8b971(_0xc2e411f0) {
  if (_0xc2e411f0) sessionStorage.setItem(_0xd84571a3, JSON.stringify({
    ts: Date.now()
  })); else sessionStorage.removeItem(_0xd84571a3);
}
function _0x15423974() {
  if (_0x5765cff8()) _0x6df8b971(true);
}
setInterval(() => {
  if ((!_0x5765cff8() && _0x8a90014c("_c640325b4")?.classList.contains('open'))) {
    _0x8a90014c("_c640325b4").classList.remove('open');
    _0x7ffb1855('.', 'error');
  }
}, (60 * 1000));
function closeAdminPanel() {
  document.getElementById("_c640325b4").classList.remove('open');
  _0xde726f48.auth.signOut();
  _0x6df8b971(false);
}
let _0x9d6f2c94 = '';
document.addEventListener('keydown', _0x74d669f9 => {
  if (['INPUT', 'TEXTAREA'].includes(_0x74d669f9.target.tagName)) return;
  if ((_0x74d669f9.key === 'Escape')) {
    closeModal();
    _0x3801cd4b();
    closeAdminPanel();
    _0x8a90014c("_c8b0d2452").style.display = 'none';
    return;
  }
  _0x9d6f2c94 += _0x74d669f9.key.toLowerCase();
  if ((_0x9d6f2c94.length > _0xdf46260c.length)) _0x9d6f2c94 = _0x9d6f2c94.slice(-_0xdf46260c.length);
  if ((_0x9d6f2c94 === _0xdf46260c)) {
    _0x9d6f2c94 = '';
    _0x3e3b8187();
  }
});
function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(_0xeebd800d => _0xeebd800d.classList.remove("_c50031cce"));
  document.querySelectorAll('.tab-pane').forEach(_0x137ea312 => _0x137ea312.classList.remove("_c50031cce"));
  btn.classList.add("_c50031cce");
  _0x8a90014c(('tab-' + name)).classList.add("_c50031cce");
  if ((name === 'list')) _0x82262e9d();
  if ((name === 'site')) _0xfd5f9650();
  if ((name === 'design')) _0x0c75cb53();
}
function _0x3e3b8187() {
  if (_0x5765cff8()) {
    _0x15423974();
    _0x8a90014c("_c640325b4").classList.toggle('open');
    return;
  }
  _0x8a90014c("_cd16b18f7").style.display = 'none';
  _0x8a90014c("_cbb999b5c").value = '';
  _0x8a90014c("_c037f9b53").value = '';
  _0x8a90014c("_c6fc85d31").disabled = false;
  try {
    const _0xfa3111ad = JSON.parse((sessionStorage.getItem(_0xa33e293a('bG9ja291dA==')) || 'null'));
    if ((_0xfa3111ad && (Date.now() < _0xfa3111ad.until))) {
      const _0x7e47ad74 = Math.ceil(((_0xfa3111ad.until - Date.now()) / 60000));
      _0x8a90014c("_cd16b18f7").style.display = 'block';
      _0x8a90014c("_cd16b18f7").textContent = `🔒 Too many attempts. Try again in ${_0x7e47ad74} min.`;
      _0x8a90014c("_c6fc85d31").disabled = true;
    }
  } catch (e) { }
  _0x8a90014c("_c8b0d2452").style.display = 'flex';
  setTimeout(() => _0x8a90014c("_cbb999b5c").focus(), 100);
}
async function checkPw() {
  const _0x87d5ce06 = 5,
    _0x7f6f6f0d = ((15 * 60) * 1000),
    now = Date.now();
  const _0x9add22c4 = _0xa33e293a('bG9ja291dA=='),
    _0x0c04d9d3 = _0xa33e293a('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0x9add22c4) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0x8a90014c("_cd16b18f7").style.display = 'block';
      _0x8a90014c("_cd16b18f7").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0x8a90014c("_c6fc85d31").disabled = true;
      return;
    }
  } catch (e) { }
  const email = _0x8a90014c("_cbb999b5c").value.trim(),
    _0x8c2eec35 = _0x8a90014c("_c037f9b53").value;
  if ((!email || !_0x8c2eec35)) {
    _0x8a90014c("_cd16b18f7").style.display = 'block';
    _0x8a90014c("_cd16b18f7").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0x8a90014c("_c6fc85d31");
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0xde726f48.auth.signInWithPassword({
      email,
      password: _0x8c2eec35
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0x0c04d9d3);
    sessionStorage.removeItem(_0x9add22c4);
    _0x6df8b971(true);
    _0x8a90014c("_c8b0d2452").style.display = 'none';
    _0x8a90014c("_c640325b4").classList.add('open');
    _0x7ffb1855('Welcome back! ✓', 'success');
  } catch (e) {
    let _0xe95ba6d1 = 0;
    try {
      _0xe95ba6d1 = parseInt((sessionStorage.getItem(_0x0c04d9d3) || '0'));
    } catch (e) { }
    _0xe95ba6d1++;
    sessionStorage.setItem(_0x0c04d9d3, _0xe95ba6d1);
    const _0x60b21a0b = (_0x87d5ce06 - _0xe95ba6d1);
    if ((_0xe95ba6d1 >= _0x87d5ce06)) {
      sessionStorage.setItem(_0x9add22c4, JSON.stringify({
        until: (now + _0x7f6f6f0d)
      }));
      sessionStorage.removeItem(_0x0c04d9d3);
      _0x8a90014c("_cd16b18f7").style.display = 'block';
      _0x8a90014c("_cd16b18f7").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0x8a90014c("_cd16b18f7").style.display = 'block';
      _0x8a90014c("_cd16b18f7").textContent = `❌ Wrong credentials. ${_0x60b21a0b} attempt${(_0x60b21a0b > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0x8a90014c("_c037f9b53").value = '';
    _0x8a90014c("_c037f9b53").focus();
  }
  btn.textContent = 'Sign In →';
}
function _0x332c4775(_0x528dce01, text) {
  const _0xddeca977 = _0x8a90014c("_cc0162933"),
    _0xf6cea0f2 = _0x8a90014c("_cd68641b2");
  if (_0xddeca977) _0xddeca977.style.width = (_0x528dce01 + '%');
  if ((_0xf6cea0f2 && text)) _0xf6cea0f2.textContent = text;
}
function _0xba189121() {
  const s = _0x8a90014c("_cdeaee804");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x85de6d91() {
  const {
    data,
    error
  } = await _0xde726f48.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0x9e6443c5 = (data || []);
  _0x819c9060(true);
  _0xb6351c0b();
  _0x6f133dc5();
  _0x5688895e();
  if (_0x8a90014c('tab-list')?.classList.contains("_c50031cce")) _0x82262e9d();
}
async function _0x9272c55a() {
  const {
    data
  } = await _0xde726f48.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x85641d8a = data.data;
    if (_0x85641d8a.logoData) {
      await new Promise(resolve => {
        const _0xbeac2951 = new Image();
        _0xbeac2951.onload = resolve;
        _0xbeac2951.onerror = resolve;
        _0xbeac2951.src = _0x85641d8a.logoData;
      });
    }
    _0x54a4beb3();
    _0x6f133dc5();
  }
}
function _0x8a90014c(id) {
  return document.getElementById(id);
}
function _0xc3904bee(id, v) {
  if ((v && _0x8a90014c(id))) _0x8a90014c(id).textContent = v;
}
function _0xf890e162(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0xaa5f1122(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0xea739170 = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0xea739170 ? _0xea739170[1] : null;
}
let _0xbf4c23fe;
function _0x7ffb1855(_0xa4f640c7, type = '') {
  const t = _0x8a90014c("_ca10aab1c");
  t.textContent = _0xa4f640c7;
  t.className = `toast ${type} show`;
  clearTimeout(_0xbf4c23fe);
  _0xbf4c23fe = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0xbd8faacc(id) {
  const _0x504f7292 = (_0x8a90014c(id).value || '');
  return _0x504f7292.split(',').map(t => t.trim()).filter(Boolean);
}
function _0x090a21c9(id, _0x6b975e65) {
  _0x8a90014c(id).value = _0x6b975e65.join(', ');
}
function togglePresetTag(_0x888c75d3, _0x2921c994, btn) {
  _0x15423974();
  let tags = _0xbd8faacc(_0x888c75d3);
  if (tags.includes(_0x2921c994)) {
    tags = tags.filter(t => (t !== _0x2921c994));
    btn.classList.remove("_c50031cce");
  } else {
    tags.push(_0x2921c994);
    btn.classList.add("_c50031cce");
  }
  _0x090a21c9(_0x888c75d3, tags);
}
function syncPresetHighlight(inputId, _0xb8a5da31) {
  const tags = _0xbd8faacc(inputId),
    _0x49e497b0 = _0x8a90014c(_0xb8a5da31);
  if (!_0x49e497b0) return;
  _0x49e497b0.querySelectorAll("._cfd1f1e8b").forEach(btn => {
    btn.classList.toggle("_c50031cce", tags.includes(btn.textContent.trim()));
  });
}
function _0x3e31919e(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xc7d1955f(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x5688895e() {
  const _0x58233d92 = _0x9e6443c5.map(c => (c.thumb || (c.ytId ? _0xc7d1955f(c.ytId) : null))).filter(Boolean);
  if ((_0x58233d92.length < 2)) return;
  const _0xd4932fb3 = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0xb402d670 = [{
    id: "_c316ef656",
    items: _0xd4932fb3(_0x58233d92, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_c04e64e76",
    items: _0xd4932fb3([..._0x58233d92].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_ce48dcda1",
    items: _0xd4932fb3(_0x58233d92.slice(Math.floor((_0x58233d92.length / 2))).concat(_0x58233d92.slice(0, Math.floor((_0x58233d92.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0xb402d670.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0xc9412552 = _0x8a90014c(id);
    if (!_0xc9412552) return;
    const all = [...items, ...items];
    _0xc9412552.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0xba56ab8d = (items.length * (speed / 20));
      _0xc9412552.style.animationDuration = `${_0xba56ab8d}s`;
      if ((dir === 'right')) {
        _0xc9412552.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0x8a90014c("_c3b80e61d");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0x093376f4(c) {
  const thumb = (c.thumb || (c.ytId ? _0x3e31919e(c.ytId) : ''));
  const _0x3d033f1c = c.ytId ? _0xc7d1955f(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0xf890e162(t)}</span>`).join('');
  const _0x4f663d4e = !!c.ytId;
  const _0x0d753ed4 = !!c.featured;
  const _0xb5c867ef = (_0x4f663d4e && !_0x0d753ed4) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_c04cfca0e${_0x0d753ed4 ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0xb5c867ef}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0xf890e162(c.title)}" loading="lazy" onerror="this.src='${_0x3d033f1c}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0xf890e162(c.title)}</div><div class="mv-artist">${_0xf890e162((c.artist || ''))}</div></div></div>
</div>`;
}
function _0xc6722cfc() {
  return (_0x85641d8a.displayMode || 'all');
}
function _0x77bfe407() {
  return (parseInt(_0x85641d8a.perPage) || 12);
}
function _0x819c9060(_0x39f21d9f) {
  if (_0x39f21d9f) {
    _0x849173aa = 1;
    _0x87f615c0 = 0;
  }
  const _0x146b7157 = _0x8a90014c("_c5398f17a"),
    _0xd2b325fd = _0xc6722cfc(),
    perPage = _0x77bfe407();
  const _0x0c729395 = (_0xb2085f51 === 'all') ? _0x9e6443c5 : _0x9e6443c5.filter(c => (c.tags || []).includes(_0xb2085f51));
  _0x8a90014c("_c0053b140").textContent = String(_0x0c729395.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0x8a90014c(id);
    if (e) e.remove();
  });
  if (!_0x0c729395.length) {
    _0x146b7157.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0xd2b325fd === 'pagination')) {
    const _0xb02572dd = Math.ceil((_0x0c729395.length / perPage));
    _0x849173aa = Math.min(_0x849173aa, _0xb02572dd);
    const slice = _0x0c729395.slice(((_0x849173aa - 1) * perPage), (_0x849173aa * perPage));
    _0x146b7157.innerHTML = slice.map(_0x093376f4).join('');
    if ((_0xb02572dd > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x00304d78 = 1; (_0x00304d78 <= _0xb02572dd); _0x00304d78++) {
        const btn = document.createElement('button');
        btn.textContent = _0x00304d78;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x00304d78 === _0x849173aa) ? 'var(--accent)' : 'transparent'};color:${(_0x00304d78 === _0x849173aa) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0x849173aa = _0x00304d78;
          _0x819c9060(false);
          window.scrollTo({
            top: (_0x8a90014c("_c44807b49").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0x146b7157.appendChild(bar);
    }
  } else if ((_0xd2b325fd === 'loadmore')) {
    if (_0x39f21d9f) _0x87f615c0 = perPage; else _0x87f615c0 = Math.max(_0x87f615c0, perPage);
    const slice = _0x0c729395.slice(0, _0x87f615c0);
    _0x146b7157.innerHTML = slice.map(_0x093376f4).join('');
    if ((_0x87f615c0 < _0x0c729395.length)) {
      const rem = (_0x0c729395.length - _0x87f615c0);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0x87f615c0 += perPage;
        _0x819c9060(false);
      };
      _0x146b7157.appendChild(btn);
    }
  } else {
    _0x146b7157.innerHTML = _0x0c729395.map(_0x093376f4).join('');
  }
  requestAnimationFrame(() => _0xe1d3f6ae());
}
function _0xb6351c0b() {
  const tags = new Set();
  _0x9e6443c5.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x8a90014c("_ce76c5946").innerHTML = (`<button class="_cbeedbc7f${(_0xb2085f51 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_cbeedbc7f${(_0xb2085f51 === t) ? ' active' : ''}" onclick="filterCards('${_0xf890e162(t)}',this)">${_0xf890e162(t)}</button>`).join(''));
}
function filterCards(tag, btn) {
  _0xb2085f51 = tag;
  document.querySelectorAll("._cbeedbc7f").forEach(b => b.classList.remove("_c50031cce"));
  btn.classList.add("_c50031cce");
  _0x819c9060(true);
}
function _0xe1d3f6ae() {
  if (!_0x76270aea) return;
  const _0x3da1e2d4 = document.querySelectorAll("._c04cfca0e.featured");
  _0x3da1e2d4.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0xdd730a01 = _0x64e6727c.get(ytId);
    if (_0xdd730a01) {
      _0xdd730a01.removeAttribute('style');
      _0xdd730a01.className = 'mv-preview-iframe';
      card.insertBefore(_0xdd730a01, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0xdd730a01.contentWindow) {
        if (_0xdd730a01._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0xdd730a01.onload = () => {
            _0xdd730a01._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0x64e6727c.delete(ytId);
    } else {
      _0xeeb9081b(card, ytId);
    }
  });
}
function _0xeeb9081b(card, ytId) {
  if (!_0x76270aea) return;
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
function _0x316faa05() {
  const featuredCards = document.querySelectorAll("._c04cfca0e.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0xeeb9081b(card, ytId);
  });
}
let _0xfc432646 = null;
function _0x82262e9d() {
  const _0xf1d96f1e = _0x8a90014c("_c0a6629fe");
  if (!_0x9e6443c5.length) {
    _0xf1d96f1e.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0xfc432646) {
      _0xfc432646.destroy();
      _0xfc432646 = null;
    }
    return;
  }
  _0xf1d96f1e.innerHTML = _0x9e6443c5.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0x3e31919e(c.ytId) : ''));
    const fallback = c.ytId ? _0xc7d1955f(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0xf890e162(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0xf890e162((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0xf890e162(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0xf890e162((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_c61e53dde" id="edit-tag-presets-${c.id}">
  <button type="button" class="_cfd1f1e8b" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_cfd1f1e8b" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_cfd1f1e8b" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_cfd1f1e8b" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_cfd1f1e8b" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0xf890e162((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0xf890e162((c.thumb || ''))}">
<div class="_cd0d65697" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0xfc432646) {
    _0xfc432646.destroy();
    _0xfc432646 = null;
  }
  _0xfc432646 = Sortable.create(_0xf1d96f1e, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0xa71119a9 => {
      if ((_0xa71119a9.oldIndex === _0xa71119a9.newIndex)) return;
      const _0xc7bc7922 = _0x9e6443c5.splice(_0xa71119a9.oldIndex, 1);
      _0x9e6443c5.splice(_0xa71119a9.newIndex, 0, _0xc7bc7922[0]);
      let _0x93a8e1e5 = _0x8a90014c('sort-saving');
      if (!_0x93a8e1e5) {
        _0x93a8e1e5 = document.createElement('div');
        _0x93a8e1e5.id = 'sort-saving';
        _0x93a8e1e5.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xf1d96f1e.insertAdjacentElement('afterend', _0x93a8e1e5);
      }
      _0x93a8e1e5.textContent = '⟳ Saving order...';
      await Promise.all(_0x9e6443c5.map((c, i) => _0xde726f48.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0x93a8e1e5.remove();
      _0x7ffb1855('Order saved! ✓', 'success');
      _0x819c9060(true);
    }
  });
}
function toggleEdit(id) {
  const _0x9cbfc190 = _0x8a90014c(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0x9cbfc190.classList.toggle('open');
  if (_0x9cbfc190.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function saveEdit(id) {
  const _0xbf7eab60 = _0x8a90014c(`e-url-${id}`).value.trim(),
    title = _0x8a90014c(`e-title-${id}`).value.trim(),
    artist = _0x8a90014c(`e-artist-${id}`).value.trim();
  const _0x365cde2b = _0x8a90014c(`e-tags-${id}`).value.trim(),
    thumb = _0x8a90014c(`e-thumb-${id}`).value.trim(),
    _0xbba4b664 = _0x8a90014c(`e-feat-${id}`).checked;
  if (!title) {
    _0x7ffb1855('Title cannot be empty!', 'error');
    return;
  }
  _0x15423974();
  const ytId = ((_0xaa5f1122(_0xbf7eab60) || _0xbf7eab60) || null);
  const tags = _0x365cde2b ? _0x365cde2b.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x8a90014c(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0xde726f48.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0xbba4b664
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0x7ffb1855(('Error: ' + error.message), 'error');
    return;
  }
  _0x7ffb1855('Work updated! ✓', 'success');
  toggleEdit(id);
}
function _0x6f133dc5() {
  _0x8a90014c("_cfd1572d6").textContent = (_0x9e6443c5.length || '0');
  const _0x90c5aa88 = new Set(_0x9e6443c5.map(c => c.artist).filter(Boolean));
  _0x8a90014c("_c29aff663").textContent = (_0x90c5aa88.size || '0');
  const tags = new Set();
  _0x9e6443c5.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x8a90014c("_c1218b9bd").textContent = (tags.size || '0');
  _0x8a90014c("_ce57a8f10").textContent = (_0x85641d8a.year || new Date().getFullYear());
}
async function addCard() {
  const _0x401ae57f = _0x8a90014c("_cf7ad909d").value.trim(),
    title = _0x8a90014c("_cc04cbc68").value.trim(),
    artist = _0x8a90014c("_c0761ac60").value.trim();
  const _0x149e5f88 = _0x8a90014c("_ccd2a8778").value.trim(),
    thumb = _0x8a90014c("_c91007453").value.trim(),
    feat = _0x8a90014c("_cb50829d1").checked;
  if (!title) {
    _0x7ffb1855('Title is required!', 'error');
    return;
  }
  _0x15423974();
  const ytId = _0xaa5f1122(_0x401ae57f);
  const tags = _0x149e5f88 ? _0x149e5f88.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x8a90014c("_c13b08c6f");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0xde726f48.from('mv_works').insert([{
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
    _0x7ffb1855(('Error: ' + error.message), 'error');
    return;
  }
  _0x7ffb1855('Work added! ✓', 'success');
  ["_cf7ad909d", "_cc04cbc68", "_c0761ac60", "_ccd2a8778", "_c91007453"].forEach(id => _0x8a90014c(id).value = '');
  _0x8a90014c("_cb50829d1").checked = false;
  document.querySelectorAll("#_c7630b761 ._cfd1f1e8b").forEach(b => b.classList.remove("_c50031cce"));
  _0x95ef6c7e('', '');
}
async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  _0x15423974();
  const {
    error
  } = await _0xde726f48.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x7ffb1855(('Error: ' + error.message), 'error');
    return;
  }
  _0x7ffb1855('Work removed', 'success');
}
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0x9e6443c5.find(_0x0450c2a1 => (_0x0450c2a1.id === id));
  if (!c) return;
  _0x8a90014c("_c58e2753c").textContent = c.title;
  _0x8a90014c("_cbbce595e").textContent = (c.artist || '');
  _0x8a90014c("_c826274c2").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0xf890e162(t)}</span>`).join('');
  _0x8a90014c("_c1149000e").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x8a90014c("_ce055b087").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if ((e && (e.target !== _0x8a90014c("_ce055b087")))) return;
  _0x8a90014c("_ce055b087").classList.remove('open');
  _0x8a90014c("_c1149000e").innerHTML = '';
  document.body.style.overflow = '';
}
function onUrlInput(val) {
  clearTimeout(_0xe31e1fa8);
  const ytId = _0xaa5f1122(val);
  if (!ytId) {
    _0x95ef6c7e('', '');
    return;
  }
  _0x95ef6c7e('loading', '⟳ Fetching info...');
  _0xe31e1fa8 = setTimeout(() => _0x7b2d74d7(ytId), 800);
}
async function _0x7b2d74d7(ytId) {
  try {
    const _0xd19ce15c = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xd19ce15c.ok) throw new Error();
    const data = await _0xd19ce15c.json();
    if (!_0x8a90014c("_cc04cbc68").value.trim()) _0x8a90014c("_cc04cbc68").value = (data.title || '');
    if (!_0x8a90014c("_c0761ac60").value.trim()) _0x8a90014c("_c0761ac60").value = (data.author_name || '');
    _0x95ef6c7e('ok', '✓ Info fetched');
  } catch {
    _0x95ef6c7e('err', '⚠ Could not fetch info');
  }
}
function _0x95ef6c7e(type, msg) {
  const s = _0x8a90014c("_cdae86679");
  s.textContent = msg;
  s.className = ("_cdae86679" + (type ? (' ' + type) : ''));
}
let _0xefc68956 = null;
function toggleEditMode() {
  const _0x4d2fc26d = document.body.classList.toggle('edit-mode');
  const bar = _0x8a90014c('edit-mode-bar');
  const btn = _0x8a90014c('edit-mode-toggle-btn');
  if (_0x4d2fc26d) {
    bar.classList.add("_c50031cce");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0x8a90014c("_c640325b4").classList.remove('open');
    _0x7f72c9ba();
  } else {
    exitEditMode();
  }
}
function exitEditMode() {
  document.body.classList.remove('edit-mode');
  _0x8a90014c('edit-mode-bar').classList.remove("_c50031cce");
  const btn = _0x8a90014c('edit-mode-toggle-btn');
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0xefc68956) {
    _0xefc68956.destroy();
    _0xefc68956 = null;
  }
}
function _0x7f72c9ba() {
  const grid = _0x8a90014c("_c5398f17a");
  if (!grid) return;
  if (_0xefc68956) _0xefc68956.destroy();
  _0xefc68956 = Sortable.create(grid, {
    animation: 200,
    draggable: "._c04cfca0e",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0x9e6443c5.splice(evt.oldIndex, 1);
      _0x9e6443c5.splice(evt.newIndex, 0, moved[0]);
      _0x7ffb1855('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function saveGridOrder() {
  _0x7ffb1855('Saving order...', '');
  await Promise.all(_0x9e6443c5.map((c, i) => _0xde726f48.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0x7ffb1855('Order saved! ✓', 'success');
  exitEditMode();
  _0x819c9060(true);
}
let _0x90bbfb45 = null;
let _0x28764f8f = null;
const _0x50022bd1 = new Map();
function startPreview(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0x50022bd1.has(ytId)) {
    const _0x07c9c8ff = document.createElement('iframe');
    _0x07c9c8ff.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0x07c9c8ff.allow = 'autoplay';
    _0x07c9c8ff.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0x07c9c8ff);
    _0x50022bd1.set(ytId, _0x07c9c8ff);
  }
  _0x90bbfb45 = setTimeout(() => {
    stopPreview(_0x28764f8f);
    _0x28764f8f = card;
    card.classList.add('previewing');
    const _0x1f2ad091 = _0x50022bd1.get(ytId);
    if (_0x1f2ad091) {
      _0x1f2ad091.removeAttribute('style');
      _0x1f2ad091.className = 'mv-preview-iframe';
      _0x1f2ad091.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x1f2ad091, card.firstChild);
      _0x1f2ad091.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function stopPreview(card) {
  clearTimeout(_0x90bbfb45);
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
  if ((_0x28764f8f === card)) _0x28764f8f = null;
}
const _0x68f580df = {
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
function _0x66eb3622(name) {
  const p = _0x68f580df[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0xbdf0ab67 = _0x8a90014c(('color-' + k));
    if (_0xbdf0ab67) _0xbdf0ab67.value = v;
    const _0x725edb52 = _0x8a90014c((('color-' + k) + '-hex'));
    if (_0x725edb52) _0x725edb52.value = v;
  });
  _0x7ffb1855('Preview applied — click Save Colors to keep it', '');
}
function previewColor(_0xdfc6421f, val) {
  document.documentElement.style.setProperty(('--' + _0xdfc6421f), val);
  const hex = _0x8a90014c((('color-' + _0xdfc6421f) + '-hex'));
  if (hex) hex.value = val;
}
function previewColorHex(varName, _0x47369bd5) {
  const val = _0x47369bd5.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0xab88e066 = _0x8a90014c(('color-' + varName));
    if (_0xab88e066) _0xab88e066.value = val;
  }
}
async function saveColors() {
  _0x15423974();
  const colors = {
    text: (_0x8a90014c('color-text')?.value || '#f0f0f0'),
    accent: _0x8a90014c('color-accent').value,
    accent2: _0x8a90014c('color-accent2').value,
    bg: _0x8a90014c('color-bg').value,
    surface: _0x8a90014c('color-surface').value
  };
  _0x85641d8a.colors = colors;
  const btn = _0x8a90014c('color-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0xde726f48.from('mv_site').upsert({
      id: 1,
      data: _0x85641d8a
    });
    if (error) throw error;
    _0x7ffb1855('Colors saved! ✓', 'success');
  } catch (err) {
    _0x7ffb1855(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0x13d381fe(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0x8a90014c(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0x8a90014c((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function resetColors() {
  const _0xb61b181b = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0x13d381fe(_0xb61b181b);
  _0x85641d8a.colors = _0xb61b181b;
  _0x7ffb1855('Reset to default — click Save Colors to keep it', '');
}
function _0x0c75cb53() {
  if (_0x85641d8a.colors) _0x13d381fe(_0x85641d8a.colors);
  if (_0x85641d8a.logoData) {
    const _0xac084c2c = _0x8a90014c("_c3f4d588c");
    const img = _0x8a90014c("_caaa2c99b");
    if ((_0xac084c2c && img)) {
      img.src = _0x85641d8a.logoData;
      _0xac084c2c.style.display = 'block';
    }
  }
}
let _0x8b8d8657 = null;
let _0x5e525cf3 = null;
function _0x9e1f7896(_0x0b59bf96) {
  if ((_0x0b59bf96.type && (_0x0b59bf96.type !== ''))) return _0x0b59bf96.type;
  const _0x27736164 = _0x0b59bf96.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x27736164] || 'image/png');
}
function _0x09f9c84b(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0xb352b13a(file, _0x7caebf8b) {
  if (!file) return null;
  const _0x23e8ffd8 = _0x9e1f7896(file);
  const ext = _0x09f9c84b(file);
  const _0x062fd909 = `${_0x7caebf8b}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0xde726f48.storage.from('portfolio-assets').upload(_0x062fd909, file, {
    upsert: true,
    contentType: _0x23e8ffd8
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0xa85f9586
  } = _0xde726f48.storage.from('portfolio-assets').getPublicUrl(_0x062fd909);
  return _0xa85f9586.publicUrl;
}
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x8b8d8657 = file;
  const _0x29a4d90f = URL.createObjectURL(file);
  const prev = _0x8a90014c("_c3f4d588c"),
    img = _0x8a90014c("_caaa2c99b");
  if ((prev && img)) {
    img.src = _0x29a4d90f;
    prev.style.display = 'block';
  }
  _0x7ffb1855('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x5e525cf3 = file;
  _0x7ffb1855('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
  _0x15423974();
  if ((!_0x8b8d8657 && !_0x5e525cf3)) {
    _0x7ffb1855('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0x8a90014c("_c4233f127");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0x8b8d8657) {
      const _0x23096145 = await _0xb352b13a(_0x8b8d8657, 'logos');
      if (_0x23096145) _0x85641d8a.logoData = _0x23096145;
    }
    if (_0x5e525cf3) {
      const _0xca02fb80 = await _0xb352b13a(_0x5e525cf3, 'favicons');
      if (_0xca02fb80) _0x85641d8a.faviconData = _0xca02fb80;
    }
    const {
      error
    } = await _0xde726f48.from('mv_site').upsert({
      id: 1,
      data: _0x85641d8a
    });
    if (error) throw error;
    _0xc69d865e();
    _0x8a90014c("_c5833c2d4").value = '';
    _0x8a90014c("_c7c91dfd2").value = '';
    _0x8b8d8657 = null;
    _0x5e525cf3 = null;
    _0x7ffb1855('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x7ffb1855(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0xc69d865e() {
  const _0xe8b34dc7 = document.getElementById("_c1482436e");
  const _0xcb1ec5c9 = document.getElementById("_c20f15f76");
  if (_0x85641d8a.logoData) {
    if (_0xcb1ec5c9) _0xcb1ec5c9.style.display = 'none';
    if (_0xe8b34dc7) {
      _0xe8b34dc7.style.display = 'block';
      _0xe8b34dc7.src = _0x85641d8a.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x85641d8a.logoData);
    } catch (e) { }
  } else {
    if (_0xe8b34dc7) _0xe8b34dc7.style.display = 'none';
    if (_0xcb1ec5c9) _0xcb1ec5c9.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) { }
  }
  if (_0x85641d8a.faviconData) {
    let _0xc642d7cb = document.querySelector('link[rel="icon"]');
    if (!_0xc642d7cb) {
      _0xc642d7cb = document.createElement('link');
      _0xc642d7cb.rel = 'icon';
      document.head.appendChild(_0xc642d7cb);
    }
    _0xc642d7cb.href = _0x85641d8a.faviconData;
  }
}
async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0x15423974();
  _0x85641d8a.logoData = null;
  const {
    error
  } = await _0xde726f48.from('mv_site').upsert({
    id: 1,
    data: _0x85641d8a
  });
  if (error) {
    _0x7ffb1855(('Error: ' + error.message), 'error');
    return;
  }
  _0xc69d865e();
  const prev = _0x8a90014c("_c3f4d588c"),
    img = _0x8a90014c("_caaa2c99b");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0x7ffb1855('Logo dihapus! ✓', 'success');
}
function _0x54a4beb3() {
  const s = _0x85641d8a;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0x13d381fe(s.colors);
  _0xc69d865e();
  const _0xb413144d = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0xb413144d;
  if (_0x8a90014c("_c7d100dac")) _0x8a90014c("_c7d100dac").textContent = _0xb413144d;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0x8a90014c("_cee603a41").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0x8a90014c("_c76711091").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0xc3904bee("_cafb154a2", s.label);
  _0xc3904bee("_c201e9810", s.hsub);
  _0xc3904bee("_cbc75451e", s.about1);
  _0xc3904bee("_c064056dd", s.about2);
  _0xc3904bee("_cad4d9d4a", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xc1534443 = s.htitle.split('|');
    _0x8a90014c("_c139851fd").innerHTML = _0xc1534443.map((_0xfa674f1d, i) => (i === 0) ? _0xfa674f1d : (i === 1) ? `<span class="_c87034275">${_0xfa674f1d}</span>` : `<span class="_caf9ab875">${_0xfa674f1d}</span>`).join('<br>');
  }
  const _0x317aba14 = [{
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
  const _0x900bacb5 = _0x8a90014c("_c90cb1055"),
    _0xdef1ecfe = _0x8a90014c("_c040ba47f");
  if (_0x900bacb5) _0x900bacb5.innerHTML = _0x317aba14.filter(_0x0b3dcc8b => s[_0x0b3dcc8b.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_cf93310aa ${s2.primary ? "_cda06235f" : "_cdc49a7fe"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0xdef1ecfe) _0xdef1ecfe.innerHTML = _0x317aba14.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0xfd5f9650() {
  const s = _0x85641d8a;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x404c916c => {
    if (_0x8a90014c(('s-' + _0x404c916c))) _0x8a90014c(('s-' + _0x404c916c)).value = (s[_0x404c916c] || '');
  });
  if (_0x8a90014c('s-perpage')) _0x8a90014c('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0xdde94ec1 = _0x8a90014c(('dm-' + mode));
  if (_0xdde94ec1) _0xdde94ec1.checked = true;
}
function previewMode(mode) {
  _0x85641d8a.displayMode = mode;
  _0x819c9060(true);
}
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0x85641d8a = {
    brand: _0x8a90014c('s-brand').value,
    siteTitle: _0x8a90014c('s-siteTitle').value,
    label: _0x8a90014c('s-label').value,
    htitle: _0x8a90014c('s-htitle').value,
    hsub: _0x8a90014c('s-hsub').value,
    about1: _0x8a90014c('s-about1').value,
    about2: _0x8a90014c('s-about2').value,
    yt: _0x8a90014c('s-yt').value,
    tw: _0x8a90014c('s-tw').value,
    discord: _0x8a90014c('s-discord').value,
    vgen: _0x8a90014c('s-vgen').value,
    ig: _0x8a90014c('s-ig').value,
    tiktok: _0x8a90014c('s-tiktok').value,
    copy: _0x8a90014c('s-copy').value,
    year: _0x8a90014c('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0x8a90014c('s-perpage')?.value) || 12),
    colors: _0x85641d8a.colors,
    logoData: _0x85641d8a.logoData,
    faviconData: _0x85641d8a.faviconData
  };
  const btn = _0x8a90014c("_c211f690f");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0x15423974();
  try {
    const {
      error
    } = await _0xde726f48.from('mv_site').upsert({
      id: 1,
      data: _0x85641d8a
    });
    if (error) throw error;
    _0x54a4beb3();
    _0x6f133dc5();
    _0x819c9060(true);
    _0x7ffb1855('Site info saved! ✓', 'success');
  } catch (err) {
    _0x7ffb1855(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0x3801cd4b() {
  const _0x2284df8e = _0x8a90014c('site-edit-panel');
  if (_0x2284df8e) _0x2284df8e.classList.remove('open');
}
async function _0xacd2956c() {
  const _0x6f9b43c3 = _0x8a90014c("_c5833c2d4"),
    _0x17091fa8 = _0x8a90014c("_c7c91dfd2");
  if (_0x6f9b43c3) _0x6f9b43c3.value = '';
  if (_0x17091fa8) _0x17091fa8.value = '';
  document.body.classList.add('loading');
  _0x332c4775(15, 'Connecting...');
  _0xde726f48 = window.supabase.createClient(_0x0ce912a8, _0xd5412e43);
  _0x332c4775(35, 'Loading site info...');
  await _0x9272c55a();
  _0x332c4775(60, 'Loading works...');
  await _0x85de6d91();
  _0x332c4775(75, 'Preloading previews...');
  await _0x28602faf();
  _0x332c4775(90, 'Almost there...');
  _0xde726f48.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x85de6d91).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x9272c55a).subscribe();
  setTimeout(() => {
    _0x332c4775(100, 'Ready!');
    setTimeout(() => {
      _0xba189121();
      _0x08171b79();
      if (_0x5765cff8()) _0x8a90014c("_c640325b4").classList.add('open');
    }, 300);
  }, 200);
}
_0xacd2956c();
