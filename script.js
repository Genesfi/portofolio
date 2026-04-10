const _0x809cca86 = _0xa265e6ab => atob(_0xa265e6ab);
const _0x0bc43252 = _0x809cca86('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x56e8bdfe = _0x809cca86('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x8af50faf = _0x809cca86('YWRt');
const _0x1ccdf181 = _0x809cca86('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x05f20527 = ((60 * 60) * 1000);
let _0xb6b66b5e,
  _0xa18d6424 = [],
  _0x84479b26 = {},
  _0x882d235b = 'all',
  _0xfa1191eb = null,
  _0xd529bd4d = 1,
  _0xa0c7171f = 0;
let _0xf0228b0a = (() => {
  try {
    const _0x533a4407 = localStorage.getItem('mv_autoplay');
    return (_0x533a4407 === null) ? true : (_0x533a4407 === '1');
  } catch {
    return true;
  }
})();
function toggleAutoplay() {
  _0xf0228b0a = !_0xf0228b0a;
  try {
    localStorage.setItem('mv_autoplay', _0xf0228b0a ? '1' : '0');
  } catch {}
  _0xd1ee98e5();
  if (_0xf0228b0a) {
    _0xb9a49dc5();
    _0x79ad8ff4();
  } else {
    _0x0b46bbed();
  }
}
function _0xd1ee98e5() {
  const _0x484b1794 = _0x8cbf6036("_ce2e4b410"),
    label = _0x8cbf6036("_cba25bc1f");
  if (!_0x484b1794) return;
  if (_0xf0228b0a) {
    _0x484b1794.classList.add("_c599f219d");
    if (label) label.textContent = 'Autoplay';
    _0x484b1794.title = 'Autoplay ON — click to turn off';
  } else {
    _0x484b1794.classList.remove("_c599f219d");
    if (label) label.textContent = 'Autoplay';
    _0x484b1794.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x0b46bbed() {
  document.querySelectorAll("._caf9e322f.featured-autoplay").forEach(_0xd43c1f17 => {
    const _0x6b034d68 = _0xd43c1f17.querySelector('.mv-preview-iframe');
    if (_0x6b034d68) _0x6b034d68.remove();
    _0xd43c1f17.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0xe2bda6ba.forEach(iframe => iframe.remove());
  _0xe2bda6ba.clear();
}
const _0xe2bda6ba = new Map();
function _0x54637bbb() {
  const _0x8bce8879 = 5000;
  if (!_0xf0228b0a) return Promise.resolve();
  const _0xb1a51adb = _0xa18d6424.filter(_0xcf2d4be9 => (_0xcf2d4be9.featured && _0xcf2d4be9.ytId));
  if (!_0xb1a51adb.length) return Promise.resolve();
  const _0x92dc95d8 = _0xb1a51adb.map(c => {
    if (_0xe2bda6ba.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x5c46e603 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x5c46e603;
      const _0x6fa08542 = setTimeout(_0x5c46e603, _0x8bce8879);
      iframe.onload = () => {
        clearTimeout(_0x6fa08542);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0xe2bda6ba.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x92dc95d8), new Promise(_0x9dbf475c => setTimeout(_0x9dbf475c, _0x8bce8879))]);
}
function _0xc926f275() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0x1ccdf181) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0x05f20527)) {
      sessionStorage.removeItem(_0x1ccdf181);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x0bbfe0be(_0x924598a1) {
  if (_0x924598a1) sessionStorage.setItem(_0x1ccdf181, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0x1ccdf181);
}
function _0xd9f6e27f() {
  if (_0xc926f275()) _0x0bbfe0be(true);
}
setInterval(() => {
  if ((!_0xc926f275() && _0x8cbf6036("_c5f03bd80")?.classList.contains('open'))) {
    _0x8cbf6036("_c5f03bd80").classList.remove('open');
    _0xe90d247c('jir', 'error');
  }
}, (60 * 1000));
function closeAdminPanel() {
  document.getElementById("_c5f03bd80").classList.remove('open');
  _0xb6b66b5e.auth.signOut();
  _0x0bbfe0be(false);
}
let _0xfa144d62 = '';
document.addEventListener('keydown', _0x078cf848 => {
  if (['INPUT', 'TEXTAREA'].includes(_0x078cf848.target.tagName)) return;
  if ((_0x078cf848.key === 'Escape')) {
    closeModal();
    _0xf7ab76f4();
    closeAdminPanel();
    _0x8cbf6036("_c93d2a225").style.display = 'none';
    return;
  }
  _0xfa144d62 += _0x078cf848.key.toLowerCase();
  if ((_0xfa144d62.length > _0x8af50faf.length)) _0xfa144d62 = _0xfa144d62.slice(-_0x8af50faf.length);
  if ((_0xfa144d62 === _0x8af50faf)) {
    _0xfa144d62 = '';
    _0x5979168d();
  }
});
function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(_0x2c2539a3 => _0x2c2539a3.classList.remove("_c599f219d"));
  document.querySelectorAll('.tab-pane').forEach(_0x33a48a2f => _0x33a48a2f.classList.remove("_c599f219d"));
  btn.classList.add("_c599f219d");
  _0x8cbf6036(('tab-' + name)).classList.add("_c599f219d");
  if ((name === 'list')) _0x14f8e1ec();
  if ((name === 'site')) _0xfafd1919();
  if ((name === 'design')) _0x15a4ac37();
}
function _0x5979168d() {
  if (_0xc926f275()) {
    _0xd9f6e27f();
    _0x8cbf6036("_c5f03bd80").classList.toggle('open');
    return;
  }
  _0x8cbf6036("_c0481e632").style.display = 'none';
  _0x8cbf6036("_c5daa9f69").value = '';
  _0x8cbf6036("_c5e9ad1ef").value = '';
  _0x8cbf6036("_c9bf2f222").disabled = false;
  try {
    const _0x27e70e9a = JSON.parse((sessionStorage.getItem(_0x809cca86('bG9ja291dA==')) || 'null'));
    if ((_0x27e70e9a && (Date.now() < _0x27e70e9a.until))) {
      const _0xd499df53 = Math.ceil(((_0x27e70e9a.until - Date.now()) / 60000));
      _0x8cbf6036("_c0481e632").style.display = 'block';
      _0x8cbf6036("_c0481e632").textContent = `🔒 Too many attempts. Try again in ${_0xd499df53} min.`;
      _0x8cbf6036("_c9bf2f222").disabled = true;
    }
  } catch (e) {}
  _0x8cbf6036("_c93d2a225").style.display = 'flex';
  setTimeout(() => _0x8cbf6036("_c5daa9f69").focus(), 100);
}
async function checkPw() {
  const _0x081d9df6 = 5,
    _0xf2422a5c = ((15 * 60) * 1000),
    now = Date.now();
  const _0x82a3d2f1 = _0x809cca86('bG9ja291dA=='),
    _0xdd3f5b5a = _0x809cca86('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0x82a3d2f1) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0x8cbf6036("_c0481e632").style.display = 'block';
      _0x8cbf6036("_c0481e632").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0x8cbf6036("_c9bf2f222").disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0x8cbf6036("_c5daa9f69").value.trim(),
    _0x5f9799ff = _0x8cbf6036("_c5e9ad1ef").value;
  if ((!email || !_0x5f9799ff)) {
    _0x8cbf6036("_c0481e632").style.display = 'block';
    _0x8cbf6036("_c0481e632").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0x8cbf6036("_c9bf2f222");
  btn.textContent = 'Gas in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0xb6b66b5e.auth.signInWithPassword({
      email,
      password: _0x5f9799ff
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0xdd3f5b5a);
    sessionStorage.removeItem(_0x82a3d2f1);
    _0x0bbfe0be(true);
    _0x8cbf6036("_c93d2a225").style.display = 'none';
    _0x8cbf6036("_c5f03bd80").classList.add('open');
    _0xe90d247c('Wack! ✓', 'success');
  } catch (e) {
    let _0xd51d12ae = 0;
    try {
      _0xd51d12ae = parseInt((sessionStorage.getItem(_0xdd3f5b5a) || '0'));
    } catch (e) {}
    _0xd51d12ae++;
    sessionStorage.setItem(_0xdd3f5b5a, _0xd51d12ae);
    const _0xd659f6b8 = (_0x081d9df6 - _0xd51d12ae);
    if ((_0xd51d12ae >= _0x081d9df6)) {
      sessionStorage.setItem(_0x82a3d2f1, JSON.stringify({
        until: (now + _0xf2422a5c)
      }));
      sessionStorage.removeItem(_0xdd3f5b5a);
      _0x8cbf6036("_c0481e632").style.display = 'block';
      _0x8cbf6036("_c0481e632").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0x8cbf6036("_c0481e632").style.display = 'block';
      _0x8cbf6036("_c0481e632").textContent = `❌ Wrong credentials. ${_0xd659f6b8} attempt${(_0xd659f6b8 > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0x8cbf6036("_c5e9ad1ef").value = '';
    _0x8cbf6036("_c5e9ad1ef").focus();
  }
  btn.textContent = 'Gas in →';
}
function _0x65b812cd(_0xf9369494, text) {
  const _0xc8e28ca8 = _0x8cbf6036("_c7cff5314"),
    _0xe0cc05a1 = _0x8cbf6036("_c56527b1b");
  if (_0xc8e28ca8) _0xc8e28ca8.style.width = (_0xf9369494 + '%');
  if ((_0xe0cc05a1 && text)) _0xe0cc05a1.textContent = text;
}
function _0xb5095539() {
  const s = _0x8cbf6036("_ccbfb7f04");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x71ef0847() {
  const {
    data,
    error
  } = await _0xb6b66b5e.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0xa18d6424 = (data || []);
  _0xacf50601(true);
  _0x78c09654();
  _0x1a38ce4d();
  _0xbc6edc7e();
  if (_0x8cbf6036('tab-list')?.classList.contains("_c599f219d")) _0x14f8e1ec();
}
async function _0x613ca34b() {
  const {
    data
  } = await _0xb6b66b5e.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x84479b26 = data.data;
    if (_0x84479b26.logoData) {
      await new Promise(resolve => {
        const _0xf631c5cc = new Image();
        _0xf631c5cc.onload = resolve;
        _0xf631c5cc.onerror = resolve;
        _0xf631c5cc.src = _0x84479b26.logoData;
      });
    }
    _0x82d5aeb5();
    _0x1a38ce4d();
  }
}
function _0x8cbf6036(id) {
  return document.getElementById(id);
}
function _0x343b389d(id, v) {
  if ((v && _0x8cbf6036(id))) _0x8cbf6036(id).textContent = v;
}
function _0x676c77bf(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0xd6005f09(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0xe221fca5 = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0xe221fca5 ? _0xe221fca5[1] : null;
}
let _0x35521202;
function _0xe90d247c(_0xa58fecf2, type = '') {
  const t = _0x8cbf6036("_cc7dac680");
  t.textContent = _0xa58fecf2;
  t.className = `toast ${type} show`;
  clearTimeout(_0x35521202);
  _0x35521202 = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0xe3297f5e(id) {
  const _0xac4acbd5 = (_0x8cbf6036(id).value || '');
  return _0xac4acbd5.split(',').map(t => t.trim()).filter(Boolean);
}
function _0x25d824d5(id, _0x5ec253ae) {
  _0x8cbf6036(id).value = _0x5ec253ae.join(', ');
}
function togglePresetTag(_0xccb9b76e, _0x10c42d05, btn) {
  _0xd9f6e27f();
  let tags = _0xe3297f5e(_0xccb9b76e);
  if (tags.includes(_0x10c42d05)) {
    tags = tags.filter(t => (t !== _0x10c42d05));
    btn.classList.remove("_c599f219d");
  } else {
    tags.push(_0x10c42d05);
    btn.classList.add("_c599f219d");
  }
  _0x25d824d5(_0xccb9b76e, tags);
}
function syncPresetHighlight(inputId, _0x981a5888) {
  const tags = _0xe3297f5e(inputId),
    _0x7eeee7eb = _0x8cbf6036(_0x981a5888);
  if (!_0x7eeee7eb) return;
  _0x7eeee7eb.querySelectorAll("._c49f19eb7").forEach(btn => {
    btn.classList.toggle("_c599f219d", tags.includes(btn.textContent.trim()));
  });
}
function _0xce9b6a50(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x4d6ca5f9(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xbc6edc7e() {
  const _0xf951f20f = _0xa18d6424.map(c => (c.thumb || (c.ytId ? _0x4d6ca5f9(c.ytId) : null))).filter(Boolean);
  if ((_0xf951f20f.length < 2)) return;
  const _0x4882201b = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0x38312d13 = [{
    id: "_cc14c3aa2",
    items: _0x4882201b(_0xf951f20f, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_cdca16275",
    items: _0x4882201b([..._0xf951f20f].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_caea47b65",
    items: _0x4882201b(_0xf951f20f.slice(Math.floor((_0xf951f20f.length / 2))).concat(_0xf951f20f.slice(0, Math.floor((_0xf951f20f.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0x38312d13.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0x7045cc01 = _0x8cbf6036(id);
    if (!_0x7045cc01) return;
    const all = [...items, ...items];
    _0x7045cc01.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0xc7b1af1e = (items.length * (speed / 20));
      _0x7045cc01.style.animationDuration = `${_0xc7b1af1e}s`;
      if ((dir === 'right')) {
        _0x7045cc01.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0x8cbf6036("_c32f09ea4");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0x24a92b26(c) {
  const thumb = (c.thumb || (c.ytId ? _0xce9b6a50(c.ytId) : ''));
  const _0xef31c617 = c.ytId ? _0x4d6ca5f9(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0x676c77bf(t)}</span>`).join('');
  const _0xe4c1f460 = !!c.ytId;
  const _0x1e7ed101 = !!c.featured;
  const _0xccd16c6c = (_0xe4c1f460 && !_0x1e7ed101) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_caf9e322f${_0x1e7ed101 ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0xccd16c6c}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0x676c77bf(c.title)}" loading="lazy" onerror="this.src='${_0xef31c617}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0x676c77bf(c.title)}</div><div class="mv-artist">${_0x676c77bf((c.artist || ''))}</div></div></div>
</div>`;
}
function _0xd1019e06() {
  return (_0x84479b26.displayMode || 'all');
}
function _0x7ceb9cc1() {
  return (parseInt(_0x84479b26.perPage) || 12);
}
function _0xacf50601(_0x6fd7d97f) {
  if (_0x6fd7d97f) {
    _0xd529bd4d = 1;
    _0xa0c7171f = 0;
  }
  const _0x14da41af = _0x8cbf6036("_cee573d3c"),
    _0xd977ad44 = _0xd1019e06(),
    perPage = _0x7ceb9cc1();
  const _0xc84e4a0a = (_0x882d235b === 'all') ? _0xa18d6424 : _0xa18d6424.filter(c => (c.tags || []).includes(_0x882d235b));
  _0x8cbf6036("_c1c18864c").textContent = String(_0xc84e4a0a.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0x8cbf6036(id);
    if (e) e.remove();
  });
  if (!_0xc84e4a0a.length) {
    _0x14da41af.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0xd977ad44 === 'pagination')) {
    const _0x700496c2 = Math.ceil((_0xc84e4a0a.length / perPage));
    _0xd529bd4d = Math.min(_0xd529bd4d, _0x700496c2);
    const slice = _0xc84e4a0a.slice(((_0xd529bd4d - 1) * perPage), (_0xd529bd4d * perPage));
    _0x14da41af.innerHTML = slice.map(_0x24a92b26).join('');
    if ((_0x700496c2 > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x226d1734 = 1; (_0x226d1734 <= _0x700496c2); _0x226d1734++) {
        const btn = document.createElement('button');
        btn.textContent = _0x226d1734;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x226d1734 === _0xd529bd4d) ? 'var(--accent)' : 'transparent'};color:${(_0x226d1734 === _0xd529bd4d) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0xd529bd4d = _0x226d1734;
          _0xacf50601(false);
          window.scrollTo({
            top: (_0x8cbf6036("_c94a87bcc").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0x14da41af.appendChild(bar);
    }
  } else if ((_0xd977ad44 === 'loadmore')) {
    if (_0x6fd7d97f) _0xa0c7171f = perPage;else _0xa0c7171f = Math.max(_0xa0c7171f, perPage);
    const slice = _0xc84e4a0a.slice(0, _0xa0c7171f);
    _0x14da41af.innerHTML = slice.map(_0x24a92b26).join('');
    if ((_0xa0c7171f < _0xc84e4a0a.length)) {
      const rem = (_0xc84e4a0a.length - _0xa0c7171f);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0xa0c7171f += perPage;
        _0xacf50601(false);
      };
      _0x14da41af.appendChild(btn);
    }
  } else {
    _0x14da41af.innerHTML = _0xc84e4a0a.map(_0x24a92b26).join('');
  }
  requestAnimationFrame(() => _0xb9a49dc5());
}
function _0x78c09654() {
  const tags = new Set();
  _0xa18d6424.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x8cbf6036("_cdfa0dead").innerHTML = (`<button class="_c290c6b51${(_0x882d235b === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_c290c6b51${(_0x882d235b === t) ? ' active' : ''}" onclick="filterCards('${_0x676c77bf(t)}',this)">${_0x676c77bf(t)}</button>`).join(''));
}
function filterCards(tag, btn) {
  _0x882d235b = tag;
  document.querySelectorAll("._c290c6b51").forEach(b => b.classList.remove("_c599f219d"));
  btn.classList.add("_c599f219d");
  _0xacf50601(true);
}
function _0xb9a49dc5() {
  if (!_0xf0228b0a) return;
  const _0xc17c33ff = document.querySelectorAll("._caf9e322f.featured");
  _0xc17c33ff.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0xc3411b76 = _0xe2bda6ba.get(ytId);
    if (_0xc3411b76) {
      _0xc3411b76.removeAttribute('style');
      _0xc3411b76.className = 'mv-preview-iframe';
      card.insertBefore(_0xc3411b76, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0xc3411b76.contentWindow) {
        if (_0xc3411b76._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0xc3411b76.onload = () => {
            _0xc3411b76._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0xe2bda6ba.delete(ytId);
    } else {
      _0x40614a84(card, ytId);
    }
  });
}
function _0x40614a84(card, ytId) {
  if (!_0xf0228b0a) return;
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
function _0x79ad8ff4() {
  const featuredCards = document.querySelectorAll("._caf9e322f.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0x40614a84(card, ytId);
  });
}
let _0x9b7b3144 = null;
function _0x14f8e1ec() {
  const _0xf1c816fb = _0x8cbf6036("_cca303f12");
  if (!_0xa18d6424.length) {
    _0xf1c816fb.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0x9b7b3144) {
      _0x9b7b3144.destroy();
      _0x9b7b3144 = null;
    }
    return;
  }
  _0xf1c816fb.innerHTML = _0xa18d6424.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0xce9b6a50(c.ytId) : ''));
    const fallback = c.ytId ? _0x4d6ca5f9(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0x676c77bf(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0x676c77bf((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0x676c77bf(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0x676c77bf((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_cbcdca41d" id="edit-tag-presets-${c.id}">
  <button type="button" class="_c49f19eb7" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_c49f19eb7" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_c49f19eb7" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_c49f19eb7" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_c49f19eb7" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0x676c77bf((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0x676c77bf((c.thumb || ''))}">
<div class="_c0e1539f6" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0x9b7b3144) {
    _0x9b7b3144.destroy();
    _0x9b7b3144 = null;
  }
  _0x9b7b3144 = Sortable.create(_0xf1c816fb, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0x0f9445d5 => {
      if ((_0x0f9445d5.oldIndex === _0x0f9445d5.newIndex)) return;
      const _0xdcdde444 = _0xa18d6424.splice(_0x0f9445d5.oldIndex, 1);
      _0xa18d6424.splice(_0x0f9445d5.newIndex, 0, _0xdcdde444[0]);
      let _0xf5b67c4d = _0x8cbf6036('sort-saving');
      if (!_0xf5b67c4d) {
        _0xf5b67c4d = document.createElement('div');
        _0xf5b67c4d.id = 'sort-saving';
        _0xf5b67c4d.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xf1c816fb.insertAdjacentElement('afterend', _0xf5b67c4d);
      }
      _0xf5b67c4d.textContent = '⟳ Saving order...';
      await Promise.all(_0xa18d6424.map((c, i) => _0xb6b66b5e.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0xf5b67c4d.remove();
      _0xe90d247c('Order saved! ✓', 'success');
      _0xacf50601(true);
    }
  });
}
function toggleEdit(id) {
  const _0xa0df1f12 = _0x8cbf6036(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0xa0df1f12.classList.toggle('open');
  if (_0xa0df1f12.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function saveEdit(id) {
  const _0xeb5c7d7b = _0x8cbf6036(`e-url-${id}`).value.trim(),
    title = _0x8cbf6036(`e-title-${id}`).value.trim(),
    artist = _0x8cbf6036(`e-artist-${id}`).value.trim();
  const _0x4e25ca0a = _0x8cbf6036(`e-tags-${id}`).value.trim(),
    thumb = _0x8cbf6036(`e-thumb-${id}`).value.trim(),
    _0x72d413ae = _0x8cbf6036(`e-feat-${id}`).checked;
  if (!title) {
    _0xe90d247c('Title cannot be empty!', 'error');
    return;
  }
  _0xd9f6e27f();
  const ytId = ((_0xd6005f09(_0xeb5c7d7b) || _0xeb5c7d7b) || null);
  const tags = _0x4e25ca0a ? _0x4e25ca0a.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x8cbf6036(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0xb6b66b5e.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x72d413ae
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0xe90d247c(('Error: ' + error.message), 'error');
    return;
  }
  _0xe90d247c('Work updated! ✓', 'success');
  toggleEdit(id);
}
function _0x1a38ce4d() {
  _0x8cbf6036("_c19df6245").textContent = (_0xa18d6424.length || '0');
  const _0xfe266b2c = new Set(_0xa18d6424.map(c => c.artist).filter(Boolean));
  _0x8cbf6036("_c2ecd977e").textContent = (_0xfe266b2c.size || '0');
  const tags = new Set();
  _0xa18d6424.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x8cbf6036("_c7b216dbb").textContent = (tags.size || '0');
  _0x8cbf6036("_c8829f644").textContent = (_0x84479b26.year || new Date().getFullYear());
}
async function addCard() {
  const _0x7b2b853d = _0x8cbf6036("_c0f818419").value.trim(),
    title = _0x8cbf6036("_cbea007de").value.trim(),
    artist = _0x8cbf6036("_c80317461").value.trim();
  const _0x87eeee05 = _0x8cbf6036("_cdab21455").value.trim(),
    thumb = _0x8cbf6036("_c102b8d76").value.trim(),
    feat = _0x8cbf6036("_c0e034389").checked;
  if (!title) {
    _0xe90d247c('Title is required!', 'error');
    return;
  }
  _0xd9f6e27f();
  const ytId = _0xd6005f09(_0x7b2b853d);
  const tags = _0x87eeee05 ? _0x87eeee05.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x8cbf6036("_c3627024f");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0xb6b66b5e.from('mv_works').insert([{
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
    _0xe90d247c(('Error: ' + error.message), 'error');
    return;
  }
  _0xe90d247c('Work added! ✓', 'success');
  ["_c0f818419", "_cbea007de", "_c80317461", "_cdab21455", "_c102b8d76"].forEach(id => _0x8cbf6036(id).value = '');
  _0x8cbf6036("_c0e034389").checked = false;
  document.querySelectorAll("#_c718aa29d ._c49f19eb7").forEach(b => b.classList.remove("_c599f219d"));
  _0xc306a47f('', '');
}
async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  _0xd9f6e27f();
  const {
    error
  } = await _0xb6b66b5e.from('mv_works').delete().eq('id', id);
  if (error) {
    _0xe90d247c(('Error: ' + error.message), 'error');
    return;
  }
  _0xe90d247c('Work removed', 'success');
}
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0xa18d6424.find(_0xcb06066e => (_0xcb06066e.id === id));
  if (!c) return;
  _0x8cbf6036("_c83628aba").textContent = c.title;
  _0x8cbf6036("_cc80e23b8").textContent = (c.artist || '');
  _0x8cbf6036("_c4c1d9e0e").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0x676c77bf(t)}</span>`).join('');
  _0x8cbf6036("_cf4d18526").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x8cbf6036("_cf57f4f0c").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if ((e && (e.target !== _0x8cbf6036("_cf57f4f0c")))) return;
  _0x8cbf6036("_cf57f4f0c").classList.remove('open');
  _0x8cbf6036("_cf4d18526").innerHTML = '';
  document.body.style.overflow = '';
}
function onUrlInput(val) {
  clearTimeout(_0xfa1191eb);
  const ytId = _0xd6005f09(val);
  if (!ytId) {
    _0xc306a47f('', '');
    return;
  }
  _0xc306a47f('loading', '⟳ Fetching info...');
  _0xfa1191eb = setTimeout(() => _0x6c1a5441(ytId), 800);
}
async function _0x6c1a5441(ytId) {
  try {
    const _0xef37ac8f = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xef37ac8f.ok) throw new Error();
    const data = await _0xef37ac8f.json();
    if (!_0x8cbf6036("_cbea007de").value.trim()) _0x8cbf6036("_cbea007de").value = (data.title || '');
    if (!_0x8cbf6036("_c80317461").value.trim()) _0x8cbf6036("_c80317461").value = (data.author_name || '');
    _0xc306a47f('ok', '✓ Info fetched');
  } catch {
    _0xc306a47f('err', '⚠ Could not fetch info');
  }
}
function _0xc306a47f(type, msg) {
  const s = _0x8cbf6036("_cae9a3bd3");
  s.textContent = msg;
  s.className = ("_cae9a3bd3" + (type ? (' ' + type) : ''));
}
let _0x1a0ab46c = null;
function toggleEditMode() {
  const _0xee5d866d = document.body.classList.toggle('edit-mode');
  const bar = _0x8cbf6036('edit-mode-bar');
  const btn = _0x8cbf6036('edit-mode-toggle-btn');
  if (_0xee5d866d) {
    bar.classList.add("_c599f219d");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0x8cbf6036("_c5f03bd80").classList.remove('open');
    _0xec34ec2f();
  } else {
    exitEditMode();
  }
}
function exitEditMode() {
  document.body.classList.remove('edit-mode');
  _0x8cbf6036('edit-mode-bar').classList.remove("_c599f219d");
  const btn = _0x8cbf6036('edit-mode-toggle-btn');
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0x1a0ab46c) {
    _0x1a0ab46c.destroy();
    _0x1a0ab46c = null;
  }
}
function _0xec34ec2f() {
  const grid = _0x8cbf6036("_cee573d3c");
  if (!grid) return;
  if (_0x1a0ab46c) _0x1a0ab46c.destroy();
  _0x1a0ab46c = Sortable.create(grid, {
    animation: 200,
    draggable: "._caf9e322f",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0xa18d6424.splice(evt.oldIndex, 1);
      _0xa18d6424.splice(evt.newIndex, 0, moved[0]);
      _0xe90d247c('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function saveGridOrder() {
  _0xe90d247c('Saving order...', '');
  await Promise.all(_0xa18d6424.map((c, i) => _0xb6b66b5e.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0xe90d247c('Order saved! ✓', 'success');
  exitEditMode();
  _0xacf50601(true);
}
let _0x4201bc80 = null;
let _0x000ead5c = null;
const _0x0646ae88 = new Map();
function startPreview(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0x0646ae88.has(ytId)) {
    const _0xe22a9dc7 = document.createElement('iframe');
    _0xe22a9dc7.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0xe22a9dc7.allow = 'autoplay';
    _0xe22a9dc7.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0xe22a9dc7);
    _0x0646ae88.set(ytId, _0xe22a9dc7);
  }
  _0x4201bc80 = setTimeout(() => {
    stopPreview(_0x000ead5c);
    _0x000ead5c = card;
    card.classList.add('previewing');
    const _0xf5118222 = _0x0646ae88.get(ytId);
    if (_0xf5118222) {
      _0xf5118222.removeAttribute('style');
      _0xf5118222.className = 'mv-preview-iframe';
      _0xf5118222.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0xf5118222, card.firstChild);
      _0xf5118222.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function stopPreview(card) {
  clearTimeout(_0x4201bc80);
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
  if ((_0x000ead5c === card)) _0x000ead5c = null;
}
const _0x64a868e6 = {
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
function _0xfbfc90d3(name) {
  const p = _0x64a868e6[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x9c284206 = _0x8cbf6036(('color-' + k));
    if (_0x9c284206) _0x9c284206.value = v;
    const _0x93b329e8 = _0x8cbf6036((('color-' + k) + '-hex'));
    if (_0x93b329e8) _0x93b329e8.value = v;
  });
  _0xe90d247c('Preview applied — click Save Colors to keep it', '');
}
function previewColor(_0xd42c35b6, val) {
  document.documentElement.style.setProperty(('--' + _0xd42c35b6), val);
  const hex = _0x8cbf6036((('color-' + _0xd42c35b6) + '-hex'));
  if (hex) hex.value = val;
}
function previewColorHex(varName, _0xcb2ec118) {
  const val = _0xcb2ec118.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0xb10d435b = _0x8cbf6036(('color-' + varName));
    if (_0xb10d435b) _0xb10d435b.value = val;
  }
}
async function saveColors() {
  _0xd9f6e27f();
  const colors = {
    text: (_0x8cbf6036('color-text')?.value || '#f0f0f0'),
    accent: _0x8cbf6036('color-accent').value,
    accent2: _0x8cbf6036('color-accent2').value,
    bg: _0x8cbf6036('color-bg').value,
    surface: _0x8cbf6036('color-surface').value
  };
  _0x84479b26.colors = colors;
  const btn = _0x8cbf6036('color-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0xb6b66b5e.from('mv_site').upsert({
      id: 1,
      data: _0x84479b26
    });
    if (error) throw error;
    _0xe90d247c('Colors saved! ✓', 'success');
  } catch (err) {
    _0xe90d247c(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0x91674fd5(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0x8cbf6036(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0x8cbf6036((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function resetColors() {
  const _0x9f251b7d = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0x91674fd5(_0x9f251b7d);
  _0x84479b26.colors = _0x9f251b7d;
  _0xe90d247c('Reset to default — click Save Colors to keep it', '');
}
function _0x15a4ac37() {
  if (_0x84479b26.colors) _0x91674fd5(_0x84479b26.colors);
  if (_0x84479b26.logoData) {
    const _0xe9d59cc5 = _0x8cbf6036("_c31fff579");
    const img = _0x8cbf6036("_c0fb6ef60");
    if ((_0xe9d59cc5 && img)) {
      img.src = _0x84479b26.logoData;
      _0xe9d59cc5.style.display = 'block';
    }
  }
}
let _0x968f10d5 = null;
let _0xbc0f0785 = null;
function _0xdbc607e1(_0xeacf6f19) {
  if ((_0xeacf6f19.type && (_0xeacf6f19.type !== ''))) return _0xeacf6f19.type;
  const _0x8bc81574 = _0xeacf6f19.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x8bc81574] || 'image/png');
}
function _0x45b4c249(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0x4345011a(file, _0xa96f575e) {
  if (!file) return null;
  const _0x5482b17c = _0xdbc607e1(file);
  const ext = _0x45b4c249(file);
  const _0xcbe9baa1 = `${_0xa96f575e}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0xb6b66b5e.storage.from('portfolio-assets').upload(_0xcbe9baa1, file, {
    upsert: true,
    contentType: _0x5482b17c
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x673b9c8a
  } = _0xb6b66b5e.storage.from('portfolio-assets').getPublicUrl(_0xcbe9baa1);
  return _0x673b9c8a.publicUrl;
}
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x968f10d5 = file;
  const _0x1e0bcb65 = URL.createObjectURL(file);
  const prev = _0x8cbf6036("_c31fff579"),
    img = _0x8cbf6036("_c0fb6ef60");
  if ((prev && img)) {
    img.src = _0x1e0bcb65;
    prev.style.display = 'block';
  }
  _0xe90d247c('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0xbc0f0785 = file;
  _0xe90d247c('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
  _0xd9f6e27f();
  if ((!_0x968f10d5 && !_0xbc0f0785)) {
    _0xe90d247c('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0x8cbf6036("_c77146998");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0x968f10d5) {
      const _0xbf8a4b8c = await _0x4345011a(_0x968f10d5, 'logos');
      if (_0xbf8a4b8c) _0x84479b26.logoData = _0xbf8a4b8c;
    }
    if (_0xbc0f0785) {
      const _0x034a0345 = await _0x4345011a(_0xbc0f0785, 'favicons');
      if (_0x034a0345) _0x84479b26.faviconData = _0x034a0345;
    }
    const {
      error
    } = await _0xb6b66b5e.from('mv_site').upsert({
      id: 1,
      data: _0x84479b26
    });
    if (error) throw error;
    _0x04244f71();
    _0x8cbf6036("_c8e416775").value = '';
    _0x8cbf6036("_cb430d114").value = '';
    _0x968f10d5 = null;
    _0xbc0f0785 = null;
    _0xe90d247c('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0xe90d247c(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0x04244f71() {
  const _0x32a6ac6b = document.getElementById("_cb7951de5");
  const _0x326a4209 = document.getElementById("_c10ef4112");
  if (_0x84479b26.logoData) {
    if (_0x326a4209) _0x326a4209.style.display = 'none';
    if (_0x32a6ac6b) {
      _0x32a6ac6b.style.display = 'block';
      _0x32a6ac6b.src = _0x84479b26.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x84479b26.logoData);
    } catch (e) {}
  } else {
    if (_0x32a6ac6b) _0x32a6ac6b.style.display = 'none';
    if (_0x326a4209) _0x326a4209.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0x84479b26.faviconData) {
    let _0xea7d7dd4 = document.querySelector('link[rel="icon"]');
    if (!_0xea7d7dd4) {
      _0xea7d7dd4 = document.createElement('link');
      _0xea7d7dd4.rel = 'icon';
      document.head.appendChild(_0xea7d7dd4);
    }
    _0xea7d7dd4.href = _0x84479b26.faviconData;
  }
}
async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0xd9f6e27f();
  _0x84479b26.logoData = null;
  const {
    error
  } = await _0xb6b66b5e.from('mv_site').upsert({
    id: 1,
    data: _0x84479b26
  });
  if (error) {
    _0xe90d247c(('Error: ' + error.message), 'error');
    return;
  }
  _0x04244f71();
  const prev = _0x8cbf6036("_c31fff579"),
    img = _0x8cbf6036("_c0fb6ef60");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0xe90d247c('Logo dihapus! ✓', 'success');
}
function _0x82d5aeb5() {
  const s = _0x84479b26;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0x91674fd5(s.colors);
  _0x04244f71();
  const _0xcf00b94e = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0xcf00b94e;
  if (_0x8cbf6036("_c8e8f2f06")) _0x8cbf6036("_c8e8f2f06").textContent = _0xcf00b94e;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0x8cbf6036("_c82e06578").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0x8cbf6036("_ce92fed1f").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0x343b389d("_cccb35ac0", s.label);
  _0x343b389d("_ca52a766b", s.hsub);
  _0x343b389d("_c91bea30c", s.about1);
  _0x343b389d("_c88d17da1", s.about2);
  _0x343b389d("_c3dfb8158", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xb8e10de9 = s.htitle.split('|');
    _0x8cbf6036("_cf9654943").innerHTML = _0xb8e10de9.map((_0x250952a5, i) => (i === 0) ? _0x250952a5 : (i === 1) ? `<span class="_caad56f3d">${_0x250952a5}</span>` : `<span class="_c39b560d3">${_0x250952a5}</span>`).join('<br>');
  }
  const _0xbb5cf64c = [{
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
  const _0x8f5ff421 = _0x8cbf6036("_cb3a13754"),
    _0xecfe0db1 = _0x8cbf6036("_c1c7ba293");
  if (_0x8f5ff421) _0x8f5ff421.innerHTML = _0xbb5cf64c.filter(_0x9b389df0 => s[_0x9b389df0.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_c0cb36483 ${s2.primary ? "_c012fedcb" : "_c7b87dceb"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0xecfe0db1) _0xecfe0db1.innerHTML = _0xbb5cf64c.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0xfafd1919() {
  const s = _0x84479b26;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x84f17dc9 => {
    if (_0x8cbf6036(('s-' + _0x84f17dc9))) _0x8cbf6036(('s-' + _0x84f17dc9)).value = (s[_0x84f17dc9] || '');
  });
  if (_0x8cbf6036('s-perpage')) _0x8cbf6036('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0x09f1b2ef = _0x8cbf6036(('dm-' + mode));
  if (_0x09f1b2ef) _0x09f1b2ef.checked = true;
}
function previewMode(mode) {
  _0x84479b26.displayMode = mode;
  _0xacf50601(true);
}
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0x84479b26 = {
    brand: _0x8cbf6036('s-brand').value,
    siteTitle: _0x8cbf6036('s-siteTitle').value,
    label: _0x8cbf6036('s-label').value,
    htitle: _0x8cbf6036('s-htitle').value,
    hsub: _0x8cbf6036('s-hsub').value,
    about1: _0x8cbf6036('s-about1').value,
    about2: _0x8cbf6036('s-about2').value,
    yt: _0x8cbf6036('s-yt').value,
    tw: _0x8cbf6036('s-tw').value,
    discord: _0x8cbf6036('s-discord').value,
    vgen: _0x8cbf6036('s-vgen').value,
    ig: _0x8cbf6036('s-ig').value,
    tiktok: _0x8cbf6036('s-tiktok').value,
    copy: _0x8cbf6036('s-copy').value,
    year: _0x8cbf6036('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0x8cbf6036('s-perpage')?.value) || 12),
    colors: _0x84479b26.colors,
    logoData: _0x84479b26.logoData,
    faviconData: _0x84479b26.faviconData
  };
  const btn = _0x8cbf6036("_c03543076");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0xd9f6e27f();
  try {
    const {
      error
    } = await _0xb6b66b5e.from('mv_site').upsert({
      id: 1,
      data: _0x84479b26
    });
    if (error) throw error;
    _0x82d5aeb5();
    _0x1a38ce4d();
    _0xacf50601(true);
    _0xe90d247c('Site info saved! ✓', 'success');
  } catch (err) {
    _0xe90d247c(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0xf7ab76f4() {
  const _0x72680117 = _0x8cbf6036('site-edit-panel');
  if (_0x72680117) _0x72680117.classList.remove('open');
}
async function _0xba5db47e() {
  const _0xfc1b0867 = _0x8cbf6036("_c8e416775"),
    _0x0a53e498 = _0x8cbf6036("_cb430d114");
  if (_0xfc1b0867) _0xfc1b0867.value = '';
  if (_0x0a53e498) _0x0a53e498.value = '';
  document.body.classList.add('loading');
  _0x65b812cd(15, 'Connecting...');
  _0xb6b66b5e = window.supabase.createClient(_0x0bc43252, _0x56e8bdfe);
  _0x65b812cd(35, 'Loading site info...');
  await _0x613ca34b();
  _0x65b812cd(60, 'Loading works...');
  await _0x71ef0847();
  _0x65b812cd(75, 'Preloading previews...');
  await _0x54637bbb();
  _0x65b812cd(90, 'Almost there...');
  _0xb6b66b5e.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x71ef0847).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x613ca34b).subscribe();
  setTimeout(() => {
    _0x65b812cd(100, 'Ready!');
    setTimeout(() => {
      _0xb5095539();
      _0xd1ee98e5();
      if (_0xc926f275()) _0x8cbf6036("_c5f03bd80").classList.add('open');
    }, 300);
  }, 200);
}
_0xba5db47e();
