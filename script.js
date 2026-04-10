const _0x9d026212 = _0xed78162d => atob(_0xed78162d);
const _0xb0e4e980 = _0x9d026212('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0xa3a37ffb = _0x9d026212('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x5ea7869b = _0x9d026212('YWRt');
let _0xc9613c68,
  _0xfeb17cd1 = [],
  _0xcdb199f3 = {},
  _0xf5d4a58c = 'all',
  _0x4ac432e4 = null,
  _0x6a0a79a9 = 1,
  _0x9dea7b79 = 0;
let _0xacf3e6b5 = (() => {
  try {
    const _0x61531ca0 = localStorage.getItem('mv_autoplay');
    return (_0x61531ca0 === null) ? true : (_0x61531ca0 === '1');
  } catch {
    return true;
  }
})();
function toggleAutoplay() {
  _0xacf3e6b5 = !_0xacf3e6b5;
  try {
    localStorage.setItem('mv_autoplay', _0xacf3e6b5 ? '1' : '0');
  } catch {}
  _0x80e50e9a();
  if (_0xacf3e6b5) {
    _0x45b374c6();
    _0x7716aeec();
  } else {
    _0xae78d346();
  }
}
function _0x80e50e9a() {
  const _0x8dc0b8d8 = _0x37d5bdea("_cc0e578e2"),
    label = _0x37d5bdea("_c8ba5f4a6");
  if (!_0x8dc0b8d8) return;
  if (_0xacf3e6b5) {
    _0x8dc0b8d8.classList.add("_ccc322fc9");
    if (label) label.textContent = 'Autoplay';
    _0x8dc0b8d8.title = 'Autoplay ON — click to turn off';
  } else {
    _0x8dc0b8d8.classList.remove("_ccc322fc9");
    if (label) label.textContent = 'Autoplay';
    _0x8dc0b8d8.title = 'Autoplay OFF — click to turn on';
  }
}
function _0xae78d346() {
  document.querySelectorAll("._c23449f03.featured-autoplay").forEach(_0xcbe043cf => {
    const _0xefb3d0cc = _0xcbe043cf.querySelector('.mv-preview-iframe');
    if (_0xefb3d0cc) _0xefb3d0cc.remove();
    _0xcbe043cf.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x0e57365a.forEach(iframe => iframe.remove());
  _0x0e57365a.clear();
}
const _0x0e57365a = new Map();
function _0x8e6596de() {
  const _0x7bbd5ff6 = 5000;
  if (!_0xacf3e6b5) return Promise.resolve();
  const _0x4a64917f = _0xfeb17cd1.filter(_0x290d0431 => (_0x290d0431.featured && _0x290d0431.ytId));
  if (!_0x4a64917f.length) return Promise.resolve();
  const _0x217fc884 = _0x4a64917f.map(c => {
    if (_0x0e57365a.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x4c5eae88 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x4c5eae88;
      const _0x077b2cd4 = setTimeout(_0x4c5eae88, _0x7bbd5ff6);
      iframe.onload = () => {
        clearTimeout(_0x077b2cd4);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0x0e57365a.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x217fc884), new Promise(_0xb671ebf9 => setTimeout(_0xb671ebf9, _0x7bbd5ff6))]);
}
async function _0x2327b324() {
  if (!_0xc9613c68) return false;
  const {
    data: {
      session
    },
    error
  } = await _0xc9613c68.auth.getSession();
  return (!!session && !error);
}
async function _0x7426dbc2() {
  const _0xba7da3da = await _0x2327b324();
  if (!_0xba7da3da) {
    _0x232f0b22('Sesi tidak valid atau telah berakhir. Silakan login kembali.', 'error');
    closeAdminPanel();
    throw new Error('Unauthorized');
  }
}
setInterval(async () => {
  const _0x907ac4bb = _0x37d5bdea("_c358bdcd8");
  if ((_0x907ac4bb && _0x907ac4bb.classList.contains('open'))) {
    const isActive = await _0x2327b324();
    if (!isActive) {
      _0x907ac4bb.classList.remove('open');
      _0x232f0b22('Admin session expired. Type "adm" to log in again.', 'error');
    }
  }
}, (60 * 1000));
async function closeAdminPanel() {
  document.getElementById("_c358bdcd8").classList.remove('open');
  if (_0xc9613c68) await _0xc9613c68.auth.signOut();
}
let _0xe1a1c196 = '';
document.addEventListener('keydown', _0x7055d202 => {
  if (['INPUT', 'TEXTAREA'].includes(_0x7055d202.target.tagName)) return;
  if ((_0x7055d202.key === 'Escape')) {
    closeModal();
    _0x807fdda7();
    closeAdminPanel();
    _0x37d5bdea("_c0a0380b3").style.display = 'none';
    return;
  }
  _0xe1a1c196 += _0x7055d202.key.toLowerCase();
  if ((_0xe1a1c196.length > _0x5ea7869b.length)) _0xe1a1c196 = _0xe1a1c196.slice(-_0x5ea7869b.length);
  if ((_0xe1a1c196 === _0x5ea7869b)) {
    _0xe1a1c196 = '';
    _0x7129e7b3();
  }
});
function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(_0x5025a183 => _0x5025a183.classList.remove("_ccc322fc9"));
  document.querySelectorAll('.tab-pane').forEach(_0xf8cca9b0 => _0xf8cca9b0.classList.remove("_ccc322fc9"));
  btn.classList.add("_ccc322fc9");
  _0x37d5bdea(('tab-' + name)).classList.add("_ccc322fc9");
  if ((name === 'list')) _0x0fca5d5c();
  if ((name === 'site')) _0x0ef5cb2d();
  if ((name === 'design')) _0x992b71a3();
}
async function _0x7129e7b3() {
  const isActive = await _0x2327b324();
  if (isActive) {
    _0x37d5bdea("_c358bdcd8").classList.toggle('open');
    return;
  }
  _0x37d5bdea("_c3f00c230").style.display = 'none';
  _0x37d5bdea("_cce839bcf").value = '';
  _0x37d5bdea("_c318ed3a7").value = '';
  _0x37d5bdea("_c66a766e9").disabled = false;
  try {
    const _0xe927fcc0 = JSON.parse((sessionStorage.getItem(_0x9d026212('bG9ja291dA==')) || 'null'));
    if ((_0xe927fcc0 && (Date.now() < _0xe927fcc0.until))) {
      const _0xec4736e7 = Math.ceil(((_0xe927fcc0.until - Date.now()) / 60000));
      _0x37d5bdea("_c3f00c230").style.display = 'block';
      _0x37d5bdea("_c3f00c230").textContent = `🔒 Too many attempts. Try again in ${_0xec4736e7} min.`;
      _0x37d5bdea("_c66a766e9").disabled = true;
    }
  } catch (e) {}
  _0x37d5bdea("_c0a0380b3").style.display = 'flex';
  setTimeout(() => _0x37d5bdea("_cce839bcf").focus(), 100);
}
async function checkPw() {
  const _0xb3add16c = 5,
    _0xc3839d38 = ((15 * 60) * 1000),
    now = Date.now();
  const _0x9d7457da = _0x9d026212('bG9ja291dA=='),
    _0x4325763b = _0x9d026212('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0x9d7457da) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0x37d5bdea("_c3f00c230").style.display = 'block';
      _0x37d5bdea("_c3f00c230").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0x37d5bdea("_c66a766e9").disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0x37d5bdea("_cce839bcf").value.trim(),
    _0xe81ba66b = _0x37d5bdea("_c318ed3a7").value;
  if ((!email || !_0xe81ba66b)) {
    _0x37d5bdea("_c3f00c230").style.display = 'block';
    _0x37d5bdea("_c3f00c230").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0x37d5bdea("_c66a766e9");
  btn.textContent = 'Gassss in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0xc9613c68.auth.signInWithPassword({
      email,
      password: _0xe81ba66b
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0x4325763b);
    sessionStorage.removeItem(_0x9d7457da);
    _0x37d5bdea("_c0a0380b3").style.display = 'none';
    _0x37d5bdea("_c358bdcd8").classList.add('open');
    _0x232f0b22('Wack! ✓', 'success');
  } catch (e) {
    let _0xe2123691 = 0;
    try {
      _0xe2123691 = parseInt((sessionStorage.getItem(_0x4325763b) || '0'));
    } catch (e) {}
    _0xe2123691++;
    sessionStorage.setItem(_0x4325763b, _0xe2123691);
    const _0x38d5b865 = (_0xb3add16c - _0xe2123691);
    if ((_0xe2123691 >= _0xb3add16c)) {
      sessionStorage.setItem(_0x9d7457da, JSON.stringify({
        until: (now + _0xc3839d38)
      }));
      sessionStorage.removeItem(_0x4325763b);
      _0x37d5bdea("_c3f00c230").style.display = 'block';
      _0x37d5bdea("_c3f00c230").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0x37d5bdea("_c3f00c230").style.display = 'block';
      _0x37d5bdea("_c3f00c230").textContent = `❌ Wrong credentials. ${_0x38d5b865} attempt${(_0x38d5b865 > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0x37d5bdea("_c318ed3a7").value = '';
    _0x37d5bdea("_c318ed3a7").focus();
  }
  btn.textContent = 'Gas In →';
}
function _0xb6b6ecd8(_0xce69447f, text) {
  const _0x978765de = _0x37d5bdea("_ce706d8a3"),
    _0x37d0a4dc = _0x37d5bdea("_c80a18a62");
  if (_0x978765de) _0x978765de.style.width = (_0xce69447f + '%');
  if ((_0x37d0a4dc && text)) _0x37d0a4dc.textContent = text;
}
function _0xa4fd1408() {
  const s = _0x37d5bdea("_c18faac08");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x05756d2c() {
  const {
    data,
    error
  } = await _0xc9613c68.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0xfeb17cd1 = (data || []);
  _0x3ccbc61c(true);
  _0xe6cbeaef();
  _0x044081ab();
  _0x5faf2cb3();
  if (_0x37d5bdea('tab-list')?.classList.contains("_ccc322fc9")) _0x0fca5d5c();
}
async function _0x235b2d05() {
  const {
    data
  } = await _0xc9613c68.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0xcdb199f3 = data.data;
    if (_0xcdb199f3.logoData) {
      await new Promise(resolve => {
        const _0xe1a6ab8e = new Image();
        _0xe1a6ab8e.onload = resolve;
        _0xe1a6ab8e.onerror = resolve;
        _0xe1a6ab8e.src = _0xcdb199f3.logoData;
      });
    }
    _0x7dadc044();
    _0x044081ab();
  }
}
function _0x37d5bdea(id) {
  return document.getElementById(id);
}
function _0xcec13c30(id, v) {
  if ((v && _0x37d5bdea(id))) _0x37d5bdea(id).textContent = v;
}
function _0x772f591c(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0xbc25060a(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0x92836eb2 = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0x92836eb2 ? _0x92836eb2[1] : null;
}
let _0x203d4a1d;
function _0x232f0b22(_0x95318d2b, type = '') {
  const t = _0x37d5bdea("_cde7865dc");
  t.textContent = _0x95318d2b;
  t.className = `toast ${type} show`;
  clearTimeout(_0x203d4a1d);
  _0x203d4a1d = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0xfa4e1e97(id) {
  const _0x3ff924a0 = (_0x37d5bdea(id).value || '');
  return _0x3ff924a0.split(',').map(t => t.trim()).filter(Boolean);
}
function _0xd229842e(id, _0xf7412e34) {
  _0x37d5bdea(id).value = _0xf7412e34.join(', ');
}
async function togglePresetTag(_0xaf225d13, _0x9e9e478d, btn) {
  await _0x7426dbc2();
  let tags = _0xfa4e1e97(_0xaf225d13);
  if (tags.includes(_0x9e9e478d)) {
    tags = tags.filter(t => (t !== _0x9e9e478d));
    btn.classList.remove("_ccc322fc9");
  } else {
    tags.push(_0x9e9e478d);
    btn.classList.add("_ccc322fc9");
  }
  _0xd229842e(_0xaf225d13, tags);
}
function syncPresetHighlight(inputId, _0xf8ba2f91) {
  const tags = _0xfa4e1e97(inputId),
    _0xda262777 = _0x37d5bdea(_0xf8ba2f91);
  if (!_0xda262777) return;
  _0xda262777.querySelectorAll("._ca8cf6a94").forEach(btn => {
    btn.classList.toggle("_ccc322fc9", tags.includes(btn.textContent.trim()));
  });
}
function _0x117ca867(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x14f2dfbf(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x5faf2cb3() {
  const _0xc8ecb306 = _0xfeb17cd1.map(c => (c.thumb || (c.ytId ? _0x14f2dfbf(c.ytId) : null))).filter(Boolean);
  if ((_0xc8ecb306.length < 2)) return;
  const _0xa4b77667 = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0xcac2c34c = [{
    id: "_c74ad429f",
    items: _0xa4b77667(_0xc8ecb306, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_c6abf5b0a",
    items: _0xa4b77667([..._0xc8ecb306].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_cffb4e1c2",
    items: _0xa4b77667(_0xc8ecb306.slice(Math.floor((_0xc8ecb306.length / 2))).concat(_0xc8ecb306.slice(0, Math.floor((_0xc8ecb306.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0xcac2c34c.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0x2999808f = _0x37d5bdea(id);
    if (!_0x2999808f) return;
    const all = [...items, ...items];
    _0x2999808f.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0x398569b5 = (items.length * (speed / 20));
      _0x2999808f.style.animationDuration = `${_0x398569b5}s`;
      if ((dir === 'right')) {
        _0x2999808f.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0x37d5bdea("_c89b02f14");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0xe63e9beb(c) {
  const thumb = (c.thumb || (c.ytId ? _0x117ca867(c.ytId) : ''));
  const _0x8bc800a8 = c.ytId ? _0x14f2dfbf(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0x772f591c(t)}</span>`).join('');
  const _0xe8acad09 = !!c.ytId;
  const _0x2162de83 = !!c.featured;
  const _0x7c9dae9b = (_0xe8acad09 && !_0x2162de83) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_c23449f03${_0x2162de83 ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0x7c9dae9b}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0x772f591c(c.title)}" loading="lazy" onerror="this.src='${_0x8bc800a8}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0x772f591c(c.title)}</div><div class="mv-artist">${_0x772f591c((c.artist || ''))}</div></div></div>
</div>`;
}
function _0x2046681e() {
  return (_0xcdb199f3.displayMode || 'all');
}
function _0x12d7ac9c() {
  return (parseInt(_0xcdb199f3.perPage) || 12);
}
function _0x3ccbc61c(_0x6fb93a82) {
  if (_0x6fb93a82) {
    _0x6a0a79a9 = 1;
    _0x9dea7b79 = 0;
  }
  const _0xa29061e3 = _0x37d5bdea("_c6e985a40"),
    _0x45c77511 = _0x2046681e(),
    perPage = _0x12d7ac9c();
  const _0x00bc27cf = (_0xf5d4a58c === 'all') ? _0xfeb17cd1 : _0xfeb17cd1.filter(c => (c.tags || []).includes(_0xf5d4a58c));
  _0x37d5bdea("_c64c0a5e9").textContent = String(_0x00bc27cf.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0x37d5bdea(id);
    if (e) e.remove();
  });
  if (!_0x00bc27cf.length) {
    _0xa29061e3.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0x45c77511 === 'pagination')) {
    const _0x5edfe436 = Math.ceil((_0x00bc27cf.length / perPage));
    _0x6a0a79a9 = Math.min(_0x6a0a79a9, _0x5edfe436);
    const slice = _0x00bc27cf.slice(((_0x6a0a79a9 - 1) * perPage), (_0x6a0a79a9 * perPage));
    _0xa29061e3.innerHTML = slice.map(_0xe63e9beb).join('');
    if ((_0x5edfe436 > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0xc053333b = 1; (_0xc053333b <= _0x5edfe436); _0xc053333b++) {
        const btn = document.createElement('button');
        btn.textContent = _0xc053333b;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0xc053333b === _0x6a0a79a9) ? 'var(--accent)' : 'transparent'};color:${(_0xc053333b === _0x6a0a79a9) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0x6a0a79a9 = _0xc053333b;
          _0x3ccbc61c(false);
          window.scrollTo({
            top: (_0x37d5bdea("_c6e65d3f6").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0xa29061e3.appendChild(bar);
    }
  } else if ((_0x45c77511 === 'loadmore')) {
    if (_0x6fb93a82) _0x9dea7b79 = perPage;else _0x9dea7b79 = Math.max(_0x9dea7b79, perPage);
    const slice = _0x00bc27cf.slice(0, _0x9dea7b79);
    _0xa29061e3.innerHTML = slice.map(_0xe63e9beb).join('');
    if ((_0x9dea7b79 < _0x00bc27cf.length)) {
      const rem = (_0x00bc27cf.length - _0x9dea7b79);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0x9dea7b79 += perPage;
        _0x3ccbc61c(false);
      };
      _0xa29061e3.appendChild(btn);
    }
  } else {
    _0xa29061e3.innerHTML = _0x00bc27cf.map(_0xe63e9beb).join('');
  }
  requestAnimationFrame(() => _0x45b374c6());
}
function _0xe6cbeaef() {
  const tags = new Set();
  _0xfeb17cd1.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x37d5bdea("_c45568e9f").innerHTML = (`<button class="_c82d44ffd${(_0xf5d4a58c === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_c82d44ffd${(_0xf5d4a58c === t) ? ' active' : ''}" onclick="filterCards('${_0x772f591c(t)}',this)">${_0x772f591c(t)}</button>`).join(''));
}
function filterCards(tag, btn) {
  _0xf5d4a58c = tag;
  document.querySelectorAll("._c82d44ffd").forEach(b => b.classList.remove("_ccc322fc9"));
  btn.classList.add("_ccc322fc9");
  _0x3ccbc61c(true);
}
function _0x45b374c6() {
  if (!_0xacf3e6b5) return;
  const _0x21ed4b05 = document.querySelectorAll("._c23449f03.featured");
  _0x21ed4b05.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0xd6fde764 = _0x0e57365a.get(ytId);
    if (_0xd6fde764) {
      _0xd6fde764.removeAttribute('style');
      _0xd6fde764.className = 'mv-preview-iframe';
      card.insertBefore(_0xd6fde764, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0xd6fde764.contentWindow) {
        if (_0xd6fde764._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0xd6fde764.onload = () => {
            _0xd6fde764._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0x0e57365a.delete(ytId);
    } else {
      _0xd74e323f(card, ytId);
    }
  });
}
function _0xd74e323f(card, ytId) {
  if (!_0xacf3e6b5) return;
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
function _0x7716aeec() {
  const featuredCards = document.querySelectorAll("._c23449f03.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0xd74e323f(card, ytId);
  });
}
let _0xd6fb20ec = null;
function _0x0fca5d5c() {
  const _0x20977ff3 = _0x37d5bdea("_cfe2d1def");
  if (!_0xfeb17cd1.length) {
    _0x20977ff3.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0xd6fb20ec) {
      _0xd6fb20ec.destroy();
      _0xd6fb20ec = null;
    }
    return;
  }
  _0x20977ff3.innerHTML = _0xfeb17cd1.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0x117ca867(c.ytId) : ''));
    const fallback = c.ytId ? _0x14f2dfbf(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0x772f591c(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0x772f591c((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0x772f591c(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0x772f591c((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_c9fd0df45" id="edit-tag-presets-${c.id}">
  <button type="button" class="_ca8cf6a94" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_ca8cf6a94" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_ca8cf6a94" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_ca8cf6a94" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_ca8cf6a94" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0x772f591c((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0x772f591c((c.thumb || ''))}">
<div class="_cc88b97fe" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0xd6fb20ec) {
    _0xd6fb20ec.destroy();
    _0xd6fb20ec = null;
  }
  _0xd6fb20ec = Sortable.create(_0x20977ff3, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0xc03175de => {
      if ((_0xc03175de.oldIndex === _0xc03175de.newIndex)) return;
      const _0x4990a952 = _0xfeb17cd1.splice(_0xc03175de.oldIndex, 1);
      _0xfeb17cd1.splice(_0xc03175de.newIndex, 0, _0x4990a952[0]);
      let _0x1dfacd28 = _0x37d5bdea('sort-saving');
      if (!_0x1dfacd28) {
        _0x1dfacd28 = document.createElement('div');
        _0x1dfacd28.id = 'sort-saving';
        _0x1dfacd28.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0x20977ff3.insertAdjacentElement('afterend', _0x1dfacd28);
      }
      _0x1dfacd28.textContent = '⟳ Saving order...';
      await Promise.all(_0xfeb17cd1.map((c, i) => _0xc9613c68.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0x1dfacd28.remove();
      _0x232f0b22('Order saved! ✓', 'success');
      _0x3ccbc61c(true);
    }
  });
}
function toggleEdit(id) {
  const _0x8fc283b6 = _0x37d5bdea(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0x8fc283b6.classList.toggle('open');
  if (_0x8fc283b6.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function saveEdit(id) {
  const _0x3773674a = _0x37d5bdea(`e-url-${id}`).value.trim(),
    title = _0x37d5bdea(`e-title-${id}`).value.trim(),
    artist = _0x37d5bdea(`e-artist-${id}`).value.trim();
  const _0x0a291365 = _0x37d5bdea(`e-tags-${id}`).value.trim(),
    thumb = _0x37d5bdea(`e-thumb-${id}`).value.trim(),
    _0xdbad63cd = _0x37d5bdea(`e-feat-${id}`).checked;
  if (!title) {
    _0x232f0b22('Title cannot be empty!', 'error');
    return;
  }
  await _0x7426dbc2();
  const ytId = ((_0xbc25060a(_0x3773674a) || _0x3773674a) || null);
  const tags = _0x0a291365 ? _0x0a291365.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x37d5bdea(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0xc9613c68.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0xdbad63cd
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0x232f0b22(('Error: ' + error.message), 'error');
    return;
  }
  _0x232f0b22('Work updated! ✓', 'success');
  toggleEdit(id);
}
function _0x044081ab() {
  _0x37d5bdea("_c66efd05f").textContent = (_0xfeb17cd1.length || '0');
  const _0x66972972 = new Set(_0xfeb17cd1.map(c => c.artist).filter(Boolean));
  _0x37d5bdea("_c05a861c4").textContent = (_0x66972972.size || '0');
  const tags = new Set();
  _0xfeb17cd1.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x37d5bdea("_ccc68d690").textContent = (tags.size || '0');
  _0x37d5bdea("_c81758b1d").textContent = (_0xcdb199f3.year || new Date().getFullYear());
}
async function addCard() {
  const _0xc8a42b54 = _0x37d5bdea("_cab917ca8").value.trim(),
    title = _0x37d5bdea("_cc18106b6").value.trim(),
    artist = _0x37d5bdea("_cbe7049a8").value.trim();
  const _0x21da851f = _0x37d5bdea("_c139d527d").value.trim(),
    thumb = _0x37d5bdea("_cf8b792ef").value.trim(),
    feat = _0x37d5bdea("_c4f7e0348").checked;
  if (!title) {
    _0x232f0b22('Title is required!', 'error');
    return;
  }
  await _0x7426dbc2();
  const ytId = _0xbc25060a(_0xc8a42b54);
  const tags = _0x21da851f ? _0x21da851f.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x37d5bdea("_ce45006a6");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0xc9613c68.from('mv_works').insert([{
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
    _0x232f0b22(('Error: ' + error.message), 'error');
    return;
  }
  _0x232f0b22('Work added! ✓', 'success');
  ["_cab917ca8", "_cc18106b6", "_cbe7049a8", "_c139d527d", "_cf8b792ef"].forEach(id => _0x37d5bdea(id).value = '');
  _0x37d5bdea("_c4f7e0348").checked = false;
  document.querySelectorAll("#_c932a29d9 ._ca8cf6a94").forEach(b => b.classList.remove("_ccc322fc9"));
  _0x88bf19e4('', '');
}
async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  await _0x7426dbc2();
  const {
    error
  } = await _0xc9613c68.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x232f0b22(('Error: ' + error.message), 'error');
    return;
  }
  _0x232f0b22('Work removed', 'success');
}
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0xfeb17cd1.find(_0x35af17b9 => (_0x35af17b9.id === id));
  if (!c) return;
  _0x37d5bdea("_cf4c66524").textContent = c.title;
  _0x37d5bdea("_cab9c0125").textContent = (c.artist || '');
  _0x37d5bdea("_cd3f85318").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0x772f591c(t)}</span>`).join('');
  _0x37d5bdea("_c2cc9b3d5").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x37d5bdea("_cf47dd85f").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if ((e && (e.target !== _0x37d5bdea("_cf47dd85f")))) return;
  _0x37d5bdea("_cf47dd85f").classList.remove('open');
  _0x37d5bdea("_c2cc9b3d5").innerHTML = '';
  document.body.style.overflow = '';
}
function onUrlInput(val) {
  clearTimeout(_0x4ac432e4);
  const ytId = _0xbc25060a(val);
  if (!ytId) {
    _0x88bf19e4('', '');
    return;
  }
  _0x88bf19e4('loading', '⟳ Fetching info...');
  _0x4ac432e4 = setTimeout(() => _0xb615c344(ytId), 800);
}
async function _0xb615c344(ytId) {
  try {
    const _0xccf6789d = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xccf6789d.ok) throw new Error();
    const data = await _0xccf6789d.json();
    if (!_0x37d5bdea("_cc18106b6").value.trim()) _0x37d5bdea("_cc18106b6").value = (data.title || '');
    if (!_0x37d5bdea("_cbe7049a8").value.trim()) _0x37d5bdea("_cbe7049a8").value = (data.author_name || '');
    _0x88bf19e4('ok', '✓ Info fetched');
  } catch {
    _0x88bf19e4('err', '⚠ Could not fetch info');
  }
}
function _0x88bf19e4(type, msg) {
  const s = _0x37d5bdea("_c7daf2518");
  s.textContent = msg;
  s.className = ("_c7daf2518" + (type ? (' ' + type) : ''));
}
let _0x8613cd84 = null;
function toggleEditMode() {
  const isActive = document.body.classList.toggle('edit-mode');
  const bar = _0x37d5bdea('edit-mode-bar');
  const btn = _0x37d5bdea('edit-mode-toggle-btn');
  if (isActive) {
    bar.classList.add("_ccc322fc9");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0x37d5bdea("_c358bdcd8").classList.remove('open');
    _0x633efeda();
  } else {
    exitEditMode();
  }
}
function exitEditMode() {
  document.body.classList.remove('edit-mode');
  _0x37d5bdea('edit-mode-bar').classList.remove("_ccc322fc9");
  const btn = _0x37d5bdea('edit-mode-toggle-btn');
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0x8613cd84) {
    _0x8613cd84.destroy();
    _0x8613cd84 = null;
  }
}
function _0x633efeda() {
  const grid = _0x37d5bdea("_c6e985a40");
  if (!grid) return;
  if (_0x8613cd84) _0x8613cd84.destroy();
  _0x8613cd84 = Sortable.create(grid, {
    animation: 200,
    draggable: "._c23449f03",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0xfeb17cd1.splice(evt.oldIndex, 1);
      _0xfeb17cd1.splice(evt.newIndex, 0, moved[0]);
      _0x232f0b22('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function saveGridOrder() {
  _0x232f0b22('Saving order...', '');
  await Promise.all(_0xfeb17cd1.map((c, i) => _0xc9613c68.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0x232f0b22('Order saved! ✓', 'success');
  exitEditMode();
  _0x3ccbc61c(true);
}
let _0x45cd4941 = null;
let _0x2d1c9417 = null;
const _0x3c118ea9 = new Map();
function startPreview(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0x3c118ea9.has(ytId)) {
    const _0xa6dd396e = document.createElement('iframe');
    _0xa6dd396e.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0xa6dd396e.allow = 'autoplay';
    _0xa6dd396e.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0xa6dd396e);
    _0x3c118ea9.set(ytId, _0xa6dd396e);
  }
  _0x45cd4941 = setTimeout(() => {
    stopPreview(_0x2d1c9417);
    _0x2d1c9417 = card;
    card.classList.add('previewing');
    const _0x17beb31a = _0x3c118ea9.get(ytId);
    if (_0x17beb31a) {
      _0x17beb31a.removeAttribute('style');
      _0x17beb31a.className = 'mv-preview-iframe';
      _0x17beb31a.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x17beb31a, card.firstChild);
      _0x17beb31a.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function stopPreview(card) {
  clearTimeout(_0x45cd4941);
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
  if ((_0x2d1c9417 === card)) _0x2d1c9417 = null;
}
const _0xad935639 = {
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
function _0xb493981c(name) {
  const p = _0xad935639[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x9a973706 = _0x37d5bdea(('color-' + k));
    if (_0x9a973706) _0x9a973706.value = v;
    const _0x52f744f9 = _0x37d5bdea((('color-' + k) + '-hex'));
    if (_0x52f744f9) _0x52f744f9.value = v;
  });
  _0x232f0b22('Preview applied — click Save Colors to keep it', '');
}
function previewColor(_0x81d9c092, val) {
  document.documentElement.style.setProperty(('--' + _0x81d9c092), val);
  const hex = _0x37d5bdea((('color-' + _0x81d9c092) + '-hex'));
  if (hex) hex.value = val;
}
function previewColorHex(varName, _0x416a8924) {
  const val = _0x416a8924.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0xb34eb4e7 = _0x37d5bdea(('color-' + varName));
    if (_0xb34eb4e7) _0xb34eb4e7.value = val;
  }
}
async function saveColors() {
  await _0x7426dbc2();
  const colors = {
    text: (_0x37d5bdea('color-text')?.value || '#f0f0f0'),
    accent: _0x37d5bdea('color-accent').value,
    accent2: _0x37d5bdea('color-accent2').value,
    bg: _0x37d5bdea('color-bg').value,
    surface: _0x37d5bdea('color-surface').value
  };
  _0xcdb199f3.colors = colors;
  const btn = _0x37d5bdea('color-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0xc9613c68.from('mv_site').upsert({
      id: 1,
      data: _0xcdb199f3
    });
    if (error) throw error;
    _0x232f0b22('Colors saved! ✓', 'success');
  } catch (err) {
    _0x232f0b22(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0x82b7d4e0(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0x37d5bdea(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0x37d5bdea((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function resetColors() {
  const _0xc98839f0 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0x82b7d4e0(_0xc98839f0);
  _0xcdb199f3.colors = _0xc98839f0;
  _0x232f0b22('Reset to default — click Save Colors to keep it', '');
}
function _0x992b71a3() {
  if (_0xcdb199f3.colors) _0x82b7d4e0(_0xcdb199f3.colors);
  if (_0xcdb199f3.logoData) {
    const _0x247c3ee9 = _0x37d5bdea("_c22762e68");
    const img = _0x37d5bdea("_cb79b5029");
    if ((_0x247c3ee9 && img)) {
      img.src = _0xcdb199f3.logoData;
      _0x247c3ee9.style.display = 'block';
    }
  }
}
let _0xad388a20 = null;
let _0x833bb414 = null;
function _0x87310551(_0xa8142357) {
  if ((_0xa8142357.type && (_0xa8142357.type !== ''))) return _0xa8142357.type;
  const _0xa5c76515 = _0xa8142357.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0xa5c76515] || 'image/png');
}
function _0xf180cbf7(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0x23d43eef(file, _0x356167ce) {
  if (!file) return null;
  const _0x75ea22c6 = _0x87310551(file);
  const ext = _0xf180cbf7(file);
  const _0x62e13e44 = `${_0x356167ce}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0xc9613c68.storage.from('portfolio-assets').upload(_0x62e13e44, file, {
    upsert: true,
    contentType: _0x75ea22c6
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x45bd1ca5
  } = _0xc9613c68.storage.from('portfolio-assets').getPublicUrl(_0x62e13e44);
  return _0x45bd1ca5.publicUrl;
}
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0xad388a20 = file;
  const _0xccfa55d6 = URL.createObjectURL(file);
  const prev = _0x37d5bdea("_c22762e68"),
    img = _0x37d5bdea("_cb79b5029");
  if ((prev && img)) {
    img.src = _0xccfa55d6;
    prev.style.display = 'block';
  }
  _0x232f0b22('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x833bb414 = file;
  _0x232f0b22('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
  await _0x7426dbc2();
  if ((!_0xad388a20 && !_0x833bb414)) {
    _0x232f0b22('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0x37d5bdea("_c677c8c45");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0xad388a20) {
      const _0xef28b2e9 = await _0x23d43eef(_0xad388a20, 'logos');
      if (_0xef28b2e9) _0xcdb199f3.logoData = _0xef28b2e9;
    }
    if (_0x833bb414) {
      const _0x6a5b9cf2 = await _0x23d43eef(_0x833bb414, 'favicons');
      if (_0x6a5b9cf2) _0xcdb199f3.faviconData = _0x6a5b9cf2;
    }
    const {
      error
    } = await _0xc9613c68.from('mv_site').upsert({
      id: 1,
      data: _0xcdb199f3
    });
    if (error) throw error;
    _0x7d1a55f0();
    _0x37d5bdea("_c80d205e4").value = '';
    _0x37d5bdea("_cf3e6c8cb").value = '';
    _0xad388a20 = null;
    _0x833bb414 = null;
    _0x232f0b22('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x232f0b22(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0x7d1a55f0() {
  const _0xbd833354 = document.getElementById("_cbf340cc9");
  const _0x11c099a2 = document.getElementById("_c7ea86a35");
  if (_0xcdb199f3.logoData) {
    if (_0x11c099a2) _0x11c099a2.style.display = 'none';
    if (_0xbd833354) {
      _0xbd833354.style.display = 'block';
      _0xbd833354.src = _0xcdb199f3.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0xcdb199f3.logoData);
    } catch (e) {}
  } else {
    if (_0xbd833354) _0xbd833354.style.display = 'none';
    if (_0x11c099a2) _0x11c099a2.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0xcdb199f3.faviconData) {
    let _0x4ef375c5 = document.querySelector('link[rel="icon"]');
    if (!_0x4ef375c5) {
      _0x4ef375c5 = document.createElement('link');
      _0x4ef375c5.rel = 'icon';
      document.head.appendChild(_0x4ef375c5);
    }
    _0x4ef375c5.href = _0xcdb199f3.faviconData;
  }
}
async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  await _0x7426dbc2();
  _0xcdb199f3.logoData = null;
  const {
    error
  } = await _0xc9613c68.from('mv_site').upsert({
    id: 1,
    data: _0xcdb199f3
  });
  if (error) {
    _0x232f0b22(('Error: ' + error.message), 'error');
    return;
  }
  _0x7d1a55f0();
  const prev = _0x37d5bdea("_c22762e68"),
    img = _0x37d5bdea("_cb79b5029");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0x232f0b22('Logo dihapus! ✓', 'success');
}
function _0x7dadc044() {
  const s = _0xcdb199f3;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0x82b7d4e0(s.colors);
  _0x7d1a55f0();
  const _0x7c87929f = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0x7c87929f;
  if (_0x37d5bdea("_cc2dd41c4")) _0x37d5bdea("_cc2dd41c4").textContent = _0x7c87929f;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0x37d5bdea("_c0140f662").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0x37d5bdea("_c92e79ff5").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0xcec13c30("_c4de6a827", s.label);
  _0xcec13c30("_c1f3b1acc", s.hsub);
  _0xcec13c30("_c78b14f43", s.about1);
  _0xcec13c30("_c2046bb89", s.about2);
  _0xcec13c30("_c7c7ee666", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0x93f44925 = s.htitle.split('|');
    _0x37d5bdea("_c88face0f").innerHTML = _0x93f44925.map((_0x6767c90f, i) => (i === 0) ? _0x6767c90f : (i === 1) ? `<span class="_c025ed98e">${_0x6767c90f}</span>` : `<span class="_c7b5861e3">${_0x6767c90f}</span>`).join('<br>');
  }
  const _0xc0556468 = [{
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
  const _0x0dad5d55 = _0x37d5bdea("_c697d4a62"),
    _0x436fb91c = _0x37d5bdea("_c0a415f86");
  if (_0x0dad5d55) _0x0dad5d55.innerHTML = _0xc0556468.filter(_0xdb0ebf2a => s[_0xdb0ebf2a.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_c1a6ffbeb ${s2.primary ? "_c606b4b15" : "_c02208ef0"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x436fb91c) _0x436fb91c.innerHTML = _0xc0556468.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0x0ef5cb2d() {
  const s = _0xcdb199f3;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x8cf3a4b1 => {
    if (_0x37d5bdea(('s-' + _0x8cf3a4b1))) _0x37d5bdea(('s-' + _0x8cf3a4b1)).value = (s[_0x8cf3a4b1] || '');
  });
  if (_0x37d5bdea('s-perpage')) _0x37d5bdea('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0xdf63ceb9 = _0x37d5bdea(('dm-' + mode));
  if (_0xdf63ceb9) _0xdf63ceb9.checked = true;
}
function previewMode(mode) {
  _0xcdb199f3.displayMode = mode;
  _0x3ccbc61c(true);
}
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0xcdb199f3 = {
    brand: _0x37d5bdea('s-brand').value,
    siteTitle: _0x37d5bdea('s-siteTitle').value,
    label: _0x37d5bdea('s-label').value,
    htitle: _0x37d5bdea('s-htitle').value,
    hsub: _0x37d5bdea('s-hsub').value,
    about1: _0x37d5bdea('s-about1').value,
    about2: _0x37d5bdea('s-about2').value,
    yt: _0x37d5bdea('s-yt').value,
    tw: _0x37d5bdea('s-tw').value,
    discord: _0x37d5bdea('s-discord').value,
    vgen: _0x37d5bdea('s-vgen').value,
    ig: _0x37d5bdea('s-ig').value,
    tiktok: _0x37d5bdea('s-tiktok').value,
    copy: _0x37d5bdea('s-copy').value,
    year: _0x37d5bdea('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0x37d5bdea('s-perpage')?.value) || 12),
    colors: _0xcdb199f3.colors,
    logoData: _0xcdb199f3.logoData,
    faviconData: _0xcdb199f3.faviconData
  };
  const btn = _0x37d5bdea("_c962cba79");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  await _0x7426dbc2();
  try {
    const {
      error
    } = await _0xc9613c68.from('mv_site').upsert({
      id: 1,
      data: _0xcdb199f3
    });
    if (error) throw error;
    _0x7dadc044();
    _0x044081ab();
    _0x3ccbc61c(true);
    _0x232f0b22('Site info saved! ✓', 'success');
  } catch (err) {
    _0x232f0b22(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0x807fdda7() {
  const panel = _0x37d5bdea('site-edit-panel');
  if (panel) panel.classList.remove('open');
}
async function _0x94d35597() {
  const _0xb0f78f48 = _0x37d5bdea("_c80d205e4"),
    _0x99b8a57a = _0x37d5bdea("_cf3e6c8cb");
  if (_0xb0f78f48) _0xb0f78f48.value = '';
  if (_0x99b8a57a) _0x99b8a57a.value = '';
  document.body.classList.add('loading');
  _0xb6b6ecd8(15, 'Connecting...');
  _0xc9613c68 = window.supabase.createClient(_0xb0e4e980, _0xa3a37ffb);
  _0xb6b6ecd8(35, 'Loading site info...');
  await _0x235b2d05();
  _0xb6b6ecd8(60, 'Loading works...');
  await _0x05756d2c();
  _0xb6b6ecd8(75, 'Preloading previews...');
  await _0x8e6596de();
  _0xb6b6ecd8(90, 'Almost there...');
  _0xc9613c68.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x05756d2c).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x235b2d05).subscribe();
  setTimeout(() => {
    _0xb6b6ecd8(100, 'Ready!');
    setTimeout(async () => {
      _0xa4fd1408();
      _0x80e50e9a();
      const isActive = await _0x2327b324();
      if (isActive) _0x37d5bdea("_c358bdcd8").classList.add('open');
    }, 300);
  }, 200);
}
_0x94d35597();
