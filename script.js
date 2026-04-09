const _0xfa9b16db = _0x9b512764 => atob(_0x9b512764);
const _0xc926e151 = _0xfa9b16db('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x9f00379a = _0xfa9b16db('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x67067c61 = _0xfa9b16db('YWRt');
const _0x1ca119c9 = _0xfa9b16db('bXZwX2FkbWluX3Nlc3Npb24=');
const _0xf2eb4b11 = ((60 * 60) * 1000);
let _0x52814179,
  _0x29bc5713 = [],
  _0xdc03774d = {},
  _0x808b08e9 = 'all',
  _0x46328e35 = null,
  _0x758e1d65 = 1,
  _0x2ae78a32 = 0;
let _0xf5d30b54 = (() => {
  try {
    const _0x9cba8c86 = localStorage.getItem('mv_autoplay');
    return (_0x9cba8c86 === null) ? true : (_0x9cba8c86 === '1');
  } catch {
    return true;
  }
})();
function _0xce09a34d() {
  _0xf5d30b54 = !_0xf5d30b54;
  try {
    localStorage.setItem('mv_autoplay', _0xf5d30b54 ? '1' : '0');
  } catch {}
  _0x684b2875();
  if (_0xf5d30b54) {
    _0x53f6faa9();
    _0x17a38433();
  } else {
    _0xb819db27();
  }
}
function _0x684b2875() {
  const _0x4455c3c3 = _0xce876474('autoplay-toggle'),
    label = _0xce876474('autoplay-label');
  if (!_0x4455c3c3) return;
  if (_0xf5d30b54) {
    _0x4455c3c3.classList.add('active');
    if (label) label.textContent = 'Autoplay';
    _0x4455c3c3.title = 'Autoplay ON — click to turn off';
  } else {
    _0x4455c3c3.classList.remove('active');
    if (label) label.textContent = 'Autoplay';
    _0x4455c3c3.title = 'Autoplay OFF — click to turn on';
  }
}
function _0xb819db27() {
  document.querySelectorAll('.mv-card.featured-autoplay').forEach(_0x1f8459c7 => {
    const _0xa8468a1f = _0x1f8459c7.querySelector('.mv-preview-iframe');
    if (_0xa8468a1f) _0xa8468a1f.remove();
    _0x1f8459c7.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x7cbe3996.forEach(iframe => iframe.remove());
  _0x7cbe3996.clear();
}
const _0x7cbe3996 = new Map();
function _0xa7514ee6() {
  const _0xd8607e06 = 5000;
  if (!_0xf5d30b54) return Promise.resolve();
  const _0x30bb209e = _0x29bc5713.filter(_0x17437bff => (_0x17437bff.featured && _0x17437bff.ytId));
  if (!_0x30bb209e.length) return Promise.resolve();
  const _0x854d7f44 = _0x30bb209e.map(c => {
    if (_0x7cbe3996.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x40b923a5 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x40b923a5;
      const _0x4efa0115 = setTimeout(_0x40b923a5, _0xd8607e06);
      iframe.onload = () => {
        clearTimeout(_0x4efa0115);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0x7cbe3996.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x854d7f44), new Promise(_0x66e5d4d0 => setTimeout(_0x66e5d4d0, _0xd8607e06))]);
}
function _0x8a924144() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0x1ca119c9) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0xf2eb4b11)) {
      sessionStorage.removeItem(_0x1ca119c9);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x7cd13920(_0x896228fd) {
  if (_0x896228fd) sessionStorage.setItem(_0x1ca119c9, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0x1ca119c9);
}
function _0xf00ed60a() {
  if (_0x8a924144()) _0x7cd13920(true);
}
setInterval(() => {
  if ((!_0x8a924144() && _0xce876474('admin-panel')?.classList.contains('open'))) {
    _0xce876474('admin-panel').classList.remove('open');
    _0x9e4d4e40('Admin session expired. Type "adm" to log in again.', 'error');
  }
}, (60 * 1000));
function _0x889e11e3() {
  document.getElementById('admin-panel').classList.remove('open');
  _0x52814179.auth.signOut();
  _0x7cd13920(false);
}
let _0xa6cc37bc = '';
document.addEventListener('keydown', _0xd5f07ff6 => {
  if (['INPUT', 'TEXTAREA'].includes(_0xd5f07ff6.target.tagName)) return;
  if ((_0xd5f07ff6.key === 'Escape')) {
    _0x4c77267d();
    _0xd0f2d3e7();
    _0x889e11e3();
    _0xce876474('pw-modal').style.display = 'none';
    return;
  }
  _0xa6cc37bc += _0xd5f07ff6.key.toLowerCase();
  if ((_0xa6cc37bc.length > _0x67067c61.length)) _0xa6cc37bc = _0xa6cc37bc.slice(-_0x67067c61.length);
  if ((_0xa6cc37bc === _0x67067c61)) {
    _0xa6cc37bc = '';
    _0x9eb48030();
  }
});
function _0x204e84a6(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(_0x559ccb3f => _0x559ccb3f.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(_0xd345154c => _0xd345154c.classList.remove('active'));
  btn.classList.add('active');
  _0xce876474(('tab-' + name)).classList.add('active');
  if ((name === 'list')) _0x1ee65012();
  if ((name === 'site')) _0xe9153d51();
  if ((name === 'design')) _0x08342529();
}
function _0x9eb48030() {
  if (_0x8a924144()) {
    _0xf00ed60a();
    _0xce876474('admin-panel').classList.toggle('open');
    return;
  }
  _0xce876474('pw-error').style.display = 'none';
  _0xce876474('pw-email').value = '';
  _0xce876474('pw-input').value = '';
  _0xce876474('pw-btn').disabled = false;
  try {
    const _0x5683b636 = JSON.parse((sessionStorage.getItem(_0xfa9b16db('bG9ja291dA==')) || 'null'));
    if ((_0x5683b636 && (Date.now() < _0x5683b636.until))) {
      const _0xd15c3e32 = Math.ceil(((_0x5683b636.until - Date.now()) / 60000));
      _0xce876474('pw-error').style.display = 'block';
      _0xce876474('pw-error').textContent = `🔒 Too many attempts. Try again in ${_0xd15c3e32} min.`;
      _0xce876474('pw-btn').disabled = true;
    }
  } catch (e) {}
  _0xce876474('pw-modal').style.display = 'flex';
  setTimeout(() => _0xce876474('pw-email').focus(), 100);
}
async function _0xac765256() {
  const _0x9abc9bce = 5,
    _0xdedee7cf = ((15 * 60) * 1000),
    now = Date.now();
  const _0x0981f89b = _0xfa9b16db('bG9ja291dA=='),
    _0x2fb9a1f1 = _0xfa9b16db('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0x0981f89b) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0xce876474('pw-error').style.display = 'block';
      _0xce876474('pw-error').textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0xce876474('pw-btn').disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0xce876474('pw-email').value.trim(),
    _0x752312a5 = _0xce876474('pw-input').value;
  if ((!email || !_0x752312a5)) {
    _0xce876474('pw-error').style.display = 'block';
    _0xce876474('pw-error').textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0xce876474('pw-btn');
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0x52814179.auth.signInWithPassword({
      email,
      password: _0x752312a5
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0x2fb9a1f1);
    sessionStorage.removeItem(_0x0981f89b);
    _0x7cd13920(true);
    _0xce876474('pw-modal').style.display = 'none';
    _0xce876474('admin-panel').classList.add('open');
    _0x9e4d4e40('Welcome back! ✓', 'success');
  } catch (e) {
    let _0x6a9bf05f = 0;
    try {
      _0x6a9bf05f = parseInt((sessionStorage.getItem(_0x2fb9a1f1) || '0'));
    } catch (e) {}
    _0x6a9bf05f++;
    sessionStorage.setItem(_0x2fb9a1f1, _0x6a9bf05f);
    const _0xc10e543b = (_0x9abc9bce - _0x6a9bf05f);
    if ((_0x6a9bf05f >= _0x9abc9bce)) {
      sessionStorage.setItem(_0x0981f89b, JSON.stringify({
        until: (now + _0xdedee7cf)
      }));
      sessionStorage.removeItem(_0x2fb9a1f1);
      _0xce876474('pw-error').style.display = 'block';
      _0xce876474('pw-error').textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0xce876474('pw-error').style.display = 'block';
      _0xce876474('pw-error').textContent = `❌ Wrong credentials. ${_0xc10e543b} attempt${(_0xc10e543b > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0xce876474('pw-input').value = '';
    _0xce876474('pw-input').focus();
  }
  btn.textContent = 'Sign In →';
}
function _0x13372211(_0x0af8ddb1, text) {
  const _0xfe9bfdcd = _0xce876474('loading-bar'),
    _0x33e7b58e = _0xce876474('loading-text');
  if (_0xfe9bfdcd) _0xfe9bfdcd.style.width = (_0x0af8ddb1 + '%');
  if ((_0x33e7b58e && text)) _0x33e7b58e.textContent = text;
}
function _0x3f4645e4() {
  const s = _0xce876474('loading-screen');
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0xb6b43773() {
  const {
    data,
    error
  } = await _0x52814179.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0x29bc5713 = (data || []);
  _0xa634ed7d(true);
  _0xb093b39c();
  _0xd65b5c34();
  _0x750e7dee();
  if (_0xce876474('tab-list')?.classList.contains('active')) _0x1ee65012();
}
async function _0x6a488bc7() {
  const {
    data
  } = await _0x52814179.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0xdc03774d = data.data;
    if (_0xdc03774d.logoData) {
      await new Promise(resolve => {
        const _0x9e1f4a85 = new Image();
        _0x9e1f4a85.onload = resolve;
        _0x9e1f4a85.onerror = resolve;
        _0x9e1f4a85.src = _0xdc03774d.logoData;
      });
    }
    _0x67ae08ba();
    _0xd65b5c34();
  }
}
function _0xce876474(id) {
  return document.getElementById(id);
}
function _0x1c378e99(id, v) {
  if ((v && _0xce876474(id))) _0xce876474(id).textContent = v;
}
function _0x0247c9a1(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0x8681f331(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0x1d73c333 = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0x1d73c333 ? _0x1d73c333[1] : null;
}
let _0xa3fefa6f;
function _0x9e4d4e40(_0xb58f9f0f, type = '') {
  const t = _0xce876474('toast');
  t.textContent = _0xb58f9f0f;
  t.className = `toast ${type} show`;
  clearTimeout(_0xa3fefa6f);
  _0xa3fefa6f = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0xf2870db1(id) {
  const _0x28192add = (_0xce876474(id).value || '');
  return _0x28192add.split(',').map(t => t.trim()).filter(Boolean);
}
function _0x276b37fb(id, _0x92aebf3b) {
  _0xce876474(id).value = _0x92aebf3b.join(', ');
}
function _0xb9365c19(_0x5f8e66e7, _0x0f4af5d3, btn) {
  _0xf00ed60a();
  let tags = _0xf2870db1(_0x5f8e66e7);
  if (tags.includes(_0x0f4af5d3)) {
    tags = tags.filter(t => (t !== _0x0f4af5d3));
    btn.classList.remove('active');
  } else {
    tags.push(_0x0f4af5d3);
    btn.classList.add('active');
  }
  _0x276b37fb(_0x5f8e66e7, tags);
}
function _0xc8e69f2f(inputId, _0x45114305) {
  const tags = _0xf2870db1(inputId),
    _0x10f56b39 = _0xce876474(_0x45114305);
  if (!_0x10f56b39) return;
  _0x10f56b39.querySelectorAll('.tag-preset-btn').forEach(btn => {
    btn.classList.toggle('active', tags.includes(btn.textContent.trim()));
  });
}
function _0x5926a619(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xdb52df24(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0x750e7dee() {
  const _0x06e6b751 = _0x29bc5713.map(c => (c.thumb || (c.ytId ? _0xdb52df24(c.ytId) : null))).filter(Boolean);
  if ((_0x06e6b751.length < 2)) return;
  const _0x505f7047 = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0x70b6144b = [{
    id: 'hero-row-1',
    items: _0x505f7047(_0x06e6b751, 20),
    dir: 'left',
    speed: 60
  }, {
    id: 'hero-row-2',
    items: _0x505f7047([..._0x06e6b751].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: 'hero-row-3',
    items: _0x505f7047(_0x06e6b751.slice(Math.floor((_0x06e6b751.length / 2))).concat(_0x06e6b751.slice(0, Math.floor((_0x06e6b751.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0x70b6144b.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0xa6d6150b = _0xce876474(id);
    if (!_0xa6d6150b) return;
    const all = [...items, ...items];
    _0xa6d6150b.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0x28da27fd = (items.length * (speed / 20));
      _0xa6d6150b.style.animationDuration = `${_0x28da27fd}s`;
      if ((dir === 'right')) {
        _0xa6d6150b.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0xce876474('hero-track-wrap');
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0xca1ba287(c) {
  const thumb = (c.thumb || (c.ytId ? _0x5926a619(c.ytId) : ''));
  const _0x55f7536e = c.ytId ? _0xdb52df24(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0x0247c9a1(t)}</span>`).join('');
  const _0x198d250c = !!c.ytId;
  const _0x2c939ec1 = !!c.featured;
  const _0x99e61559 = (_0x198d250c && !_0x2c939ec1) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="mv-card${_0x2c939ec1 ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0x99e61559}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0x0247c9a1(c.title)}" loading="lazy" onerror="this.src='${_0x55f7536e}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0x0247c9a1(c.title)}</div><div class="mv-artist">${_0x0247c9a1((c.artist || ''))}</div></div></div>
</div>`;
}
function _0xb09ce80b() {
  return (_0xdc03774d.displayMode || 'all');
}
function _0xa99d8901() {
  return (parseInt(_0xdc03774d.perPage) || 12);
}
function _0xa634ed7d(_0x44283e96) {
  if (_0x44283e96) {
    _0x758e1d65 = 1;
    _0x2ae78a32 = 0;
  }
  const _0x53b2c563 = _0xce876474('mv-grid'),
    _0xae6ad973 = _0xb09ce80b(),
    perPage = _0xa99d8901();
  const _0x862782f7 = (_0x808b08e9 === 'all') ? _0x29bc5713 : _0x29bc5713.filter(c => (c.tags || []).includes(_0x808b08e9));
  _0xce876474('works-count').textContent = String(_0x862782f7.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0xce876474(id);
    if (e) e.remove();
  });
  if (!_0x862782f7.length) {
    _0x53b2c563.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0xae6ad973 === 'pagination')) {
    const _0x1ffd166f = Math.ceil((_0x862782f7.length / perPage));
    _0x758e1d65 = Math.min(_0x758e1d65, _0x1ffd166f);
    const slice = _0x862782f7.slice(((_0x758e1d65 - 1) * perPage), (_0x758e1d65 * perPage));
    _0x53b2c563.innerHTML = slice.map(_0xca1ba287).join('');
    if ((_0x1ffd166f > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x61f7dfef = 1; (_0x61f7dfef <= _0x1ffd166f); _0x61f7dfef++) {
        const btn = document.createElement('button');
        btn.textContent = _0x61f7dfef;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x61f7dfef === _0x758e1d65) ? 'var(--accent)' : 'transparent'};color:${(_0x61f7dfef === _0x758e1d65) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0x758e1d65 = _0x61f7dfef;
          _0xa634ed7d(false);
          window.scrollTo({
            top: (_0xce876474('works').offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0x53b2c563.appendChild(bar);
    }
  } else if ((_0xae6ad973 === 'loadmore')) {
    if (_0x44283e96) _0x2ae78a32 = perPage;else _0x2ae78a32 = Math.max(_0x2ae78a32, perPage);
    const slice = _0x862782f7.slice(0, _0x2ae78a32);
    _0x53b2c563.innerHTML = slice.map(_0xca1ba287).join('');
    if ((_0x2ae78a32 < _0x862782f7.length)) {
      const rem = (_0x862782f7.length - _0x2ae78a32);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0x2ae78a32 += perPage;
        _0xa634ed7d(false);
      };
      _0x53b2c563.appendChild(btn);
    }
  } else {
    _0x53b2c563.innerHTML = _0x862782f7.map(_0xca1ba287).join('');
  }
  requestAnimationFrame(() => _0x53f6faa9());
}
function _0xb093b39c() {
  const tags = new Set();
  _0x29bc5713.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0xce876474('filter-bar').innerHTML = (`<button class="filter-btn${(_0x808b08e9 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="filter-btn${(_0x808b08e9 === t) ? ' active' : ''}" onclick="filterCards('${_0x0247c9a1(t)}',this)">${_0x0247c9a1(t)}</button>`).join(''));
}
function _0xb67e4ccd(tag, btn) {
  _0x808b08e9 = tag;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  _0xa634ed7d(true);
}
function _0x53f6faa9() {
  if (!_0xf5d30b54) return;
  const _0xc95fb858 = document.querySelectorAll('.mv-card.featured');
  _0xc95fb858.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0x5b3ca782 = _0x7cbe3996.get(ytId);
    if (_0x5b3ca782) {
      _0x5b3ca782.removeAttribute('style');
      _0x5b3ca782.className = 'mv-preview-iframe';
      card.insertBefore(_0x5b3ca782, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0x5b3ca782.contentWindow) {
        if (_0x5b3ca782._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0x5b3ca782.onload = () => {
            _0x5b3ca782._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0x7cbe3996.delete(ytId);
    } else {
      _0x5536e98e(card, ytId);
    }
  });
}
function _0x5536e98e(card, ytId) {
  if (!_0xf5d30b54) return;
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
function _0x17a38433() {
  const featuredCards = document.querySelectorAll('.mv-card.featured');
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0x5536e98e(card, ytId);
  });
}
let _0x00ccf284 = null;
function _0x1ee65012() {
  const _0xc6cf95b1 = _0xce876474('existing-list');
  if (!_0x29bc5713.length) {
    _0xc6cf95b1.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0x00ccf284) {
      _0x00ccf284.destroy();
      _0x00ccf284 = null;
    }
    return;
  }
  _0xc6cf95b1.innerHTML = _0x29bc5713.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0x5926a619(c.ytId) : ''));
    const fallback = c.ytId ? _0xdb52df24(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0x0247c9a1(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0x0247c9a1((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0x0247c9a1(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0x0247c9a1((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="tag-presets" id="edit-tag-presets-${c.id}">
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="tag-preset-btn" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0x0247c9a1((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0x0247c9a1((c.thumb || ''))}">
<div class="checkbox-row" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0x00ccf284) {
    _0x00ccf284.destroy();
    _0x00ccf284 = null;
  }
  _0x00ccf284 = Sortable.create(_0xc6cf95b1, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0x24f6aff9 => {
      if ((_0x24f6aff9.oldIndex === _0x24f6aff9.newIndex)) return;
      const _0x2b993793 = _0x29bc5713.splice(_0x24f6aff9.oldIndex, 1);
      _0x29bc5713.splice(_0x24f6aff9.newIndex, 0, _0x2b993793);
      let _0x3f0cb660 = _0xce876474('sort-saving');
      if (!_0x3f0cb660) {
        _0x3f0cb660 = document.createElement('div');
        _0x3f0cb660.id = 'sort-saving';
        _0x3f0cb660.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xc6cf95b1.insertAdjacentElement('afterend', _0x3f0cb660);
      }
      _0x3f0cb660.textContent = '⟳ Saving order...';
      await Promise.all(_0x29bc5713.map((c, i) => _0x52814179.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0x3f0cb660.remove();
      _0x9e4d4e40('Order saved! ✓', 'success');
      _0xa634ed7d(true);
    }
  });
}
function _0xc50ca5a2(id) {
  const _0x58290143 = _0xce876474(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0x58290143.classList.toggle('open');
  if (_0x58290143.classList.contains('open')) setTimeout(() => _0xc8e69f2f(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function _0xf061607f(id) {
  const _0x24646150 = _0xce876474(`e-url-${id}`).value.trim(),
    title = _0xce876474(`e-title-${id}`).value.trim(),
    artist = _0xce876474(`e-artist-${id}`).value.trim();
  const _0xd654ac03 = _0xce876474(`e-tags-${id}`).value.trim(),
    thumb = _0xce876474(`e-thumb-${id}`).value.trim(),
    _0x1ae835d1 = _0xce876474(`e-feat-${id}`).checked;
  if (!title) {
    _0x9e4d4e40('Title cannot be empty!', 'error');
    return;
  }
  _0xf00ed60a();
  const ytId = ((_0x8681f331(_0x24646150) || _0x24646150) || null);
  const tags = _0xd654ac03 ? _0xd654ac03.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0xce876474(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0x52814179.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x1ae835d1
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0x9e4d4e40(('Error: ' + error.message), 'error');
    return;
  }
  _0x9e4d4e40('Work updated! ✓', 'success');
  _0xc50ca5a2(id);
}
function _0xd65b5c34() {
  _0xce876474('stat-mvs').textContent = (_0x29bc5713.length || '0');
  const _0xced06403 = new Set(_0x29bc5713.map(c => c.artist).filter(Boolean));
  _0xce876474('stat-clients').textContent = (_0xced06403.size || '0');
  const tags = new Set();
  _0x29bc5713.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0xce876474('stat-tags').textContent = (tags.size || '0');
  _0xce876474('stat-year').textContent = (_0xdc03774d.year || new Date().getFullYear());
}
async function _0x85f9213a() {
  const _0x185a58a6 = _0xce876474('inp-url').value.trim(),
    title = _0xce876474('inp-title').value.trim(),
    artist = _0xce876474('inp-artist').value.trim();
  const _0x6b8343eb = _0xce876474('inp-tags').value.trim(),
    thumb = _0xce876474('inp-thumb').value.trim(),
    feat = _0xce876474('inp-featured').checked;
  if (!title) {
    _0x9e4d4e40('Title is required!', 'error');
    return;
  }
  _0xf00ed60a();
  const ytId = _0x8681f331(_0x185a58a6);
  const tags = _0x6b8343eb ? _0x6b8343eb.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0xce876474('add-btn');
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0x52814179.from('mv_works').insert([{
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
    _0x9e4d4e40(('Error: ' + error.message), 'error');
    return;
  }
  _0x9e4d4e40('Work added! ✓', 'success');
  ['inp-url', 'inp-title', 'inp-artist', 'inp-tags', 'inp-thumb'].forEach(id => _0xce876474(id).value = '');
  _0xce876474('inp-featured').checked = false;
  document.querySelectorAll('#add-tag-presets .tag-preset-btn').forEach(b => b.classList.remove('active'));
  _0xa8ad6545('', '');
}
async function _0xccf6e97d(id) {
  if (!confirm('Remove this work?')) return;
  _0xf00ed60a();
  const {
    error
  } = await _0x52814179.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x9e4d4e40(('Error: ' + error.message), 'error');
    return;
  }
  _0x9e4d4e40('Work removed', 'success');
}
function _0x74159da6(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0x29bc5713.find(_0x068f597c => (_0x068f597c.id === id));
  if (!c) return;
  _0xce876474('modal-title').textContent = c.title;
  _0xce876474('modal-artist').textContent = (c.artist || '');
  _0xce876474('modal-tags').innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0x0247c9a1(t)}</span>`).join('');
  _0xce876474('modal-video-wrap').innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0xce876474('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function _0x4c77267d(e) {
  if ((e && (e.target !== _0xce876474('modal')))) return;
  _0xce876474('modal').classList.remove('open');
  _0xce876474('modal-video-wrap').innerHTML = '';
  document.body.style.overflow = '';
}
function _0xcdad4f0d(val) {
  clearTimeout(_0x46328e35);
  const ytId = _0x8681f331(val);
  if (!ytId) {
    _0xa8ad6545('', '');
    return;
  }
  _0xa8ad6545('loading', '⟳ Fetching info...');
  _0x46328e35 = setTimeout(() => _0x43b72584(ytId), 800);
}
async function _0x43b72584(ytId) {
  try {
    const _0x4852f58c = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0x4852f58c.ok) throw new Error();
    const data = await _0x4852f58c.json();
    if (!_0xce876474('inp-title').value.trim()) _0xce876474('inp-title').value = (data.title || '');
    if (!_0xce876474('inp-artist').value.trim()) _0xce876474('inp-artist').value = (data.author_name || '');
    _0xa8ad6545('ok', '✓ Info fetched');
  } catch {
    _0xa8ad6545('err', '⚠ Could not fetch info');
  }
}
function _0xa8ad6545(type, msg) {
  const s = _0xce876474('fetch-status');
  s.textContent = msg;
  s.className = ('fetch-status' + (type ? (' ' + type) : ''));
}
let _0x5a9cc374 = null;
function _0x7a1fdb0f() {
  const _0x1cd19a78 = document.body.classList.toggle('edit-mode');
  const bar = _0xce876474('edit-mode-bar');
  const btn = _0xce876474('edit-mode-toggle-btn');
  if (_0x1cd19a78) {
    bar.classList.add('active');
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0xce876474('admin-panel').classList.remove('open');
    _0xcdc70679();
  } else {
    _0xec085514();
  }
}
function _0xec085514() {
  document.body.classList.remove('edit-mode');
  _0xce876474('edit-mode-bar').classList.remove('active');
  const btn = _0xce876474('edit-mode-toggle-btn');
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0x5a9cc374) {
    _0x5a9cc374.destroy();
    _0x5a9cc374 = null;
  }
}
function _0xcdc70679() {
  const grid = _0xce876474('mv-grid');
  if (!grid) return;
  if (_0x5a9cc374) _0x5a9cc374.destroy();
  _0x5a9cc374 = Sortable.create(grid, {
    animation: 200,
    draggable: ".mv-card",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0x29bc5713.splice(evt.oldIndex, 1);
      _0x29bc5713.splice(evt.newIndex, 0, moved);
      _0x9e4d4e40('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function _0xd920dbf1() {
  _0x9e4d4e40('Saving order...', '');
  await Promise.all(_0x29bc5713.map((c, i) => _0x52814179.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0x9e4d4e40('Order saved! ✓', 'success');
  _0xec085514();
  _0xa634ed7d(true);
}
let _0x01d3562a = null;
let _0xfa41fa44 = null;
const _0x8cb1d2ed = new Map();
function _0xe812cd3c(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0x8cb1d2ed.has(ytId)) {
    const _0xb4f5c79f = document.createElement('iframe');
    _0xb4f5c79f.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0xb4f5c79f.allow = 'autoplay';
    _0xb4f5c79f.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0xb4f5c79f);
    _0x8cb1d2ed.set(ytId, _0xb4f5c79f);
  }
  _0x01d3562a = setTimeout(() => {
    _0xd2c7ee66(_0xfa41fa44);
    _0xfa41fa44 = card;
    card.classList.add('previewing');
    const _0x555e5813 = _0x8cb1d2ed.get(ytId);
    if (_0x555e5813) {
      _0x555e5813.removeAttribute('style');
      _0x555e5813.className = 'mv-preview-iframe';
      _0x555e5813.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x555e5813, card.firstChild);
      _0x555e5813.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function _0xd2c7ee66(card) {
  clearTimeout(_0x01d3562a);
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
  if ((_0xfa41fa44 === card)) _0xfa41fa44 = null;
}
const _0xf9b516fb = {
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
function _0x4b342ac0(name) {
  const p = _0xf9b516fb[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x2af51f30 = _0xce876474(('color-' + k));
    if (_0x2af51f30) _0x2af51f30.value = v;
    const _0x951e9de9 = _0xce876474((('color-' + k) + '-hex'));
    if (_0x951e9de9) _0x951e9de9.value = v;
  });
  _0x9e4d4e40('Preview applied — click Save Colors to keep it', '');
}
function _0x8c80ee66(_0xeef551ed, val) {
  document.documentElement.style.setProperty(('--' + _0xeef551ed), val);
  const hex = _0xce876474((('color-' + _0xeef551ed) + '-hex'));
  if (hex) hex.value = val;
}
function _0xe6249b07(varName, _0x86abcb1c) {
  const val = _0x86abcb1c.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0xb4e015a8 = _0xce876474(('color-' + varName));
    if (_0xb4e015a8) _0xb4e015a8.value = val;
  }
}
async function _0x1027da44() {
  _0xf00ed60a();
  const colors = {
    text: (_0xce876474('color-text')?.value || '#f0f0f0'),
    accent: _0xce876474('color-accent').value,
    accent2: _0xce876474('color-accent2').value,
    bg: _0xce876474('color-bg').value,
    surface: _0xce876474('color-surface').value
  };
  _0xdc03774d.colors = colors;
  const btn = _0xce876474('color-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0x52814179.from('mv_site').upsert({
      id: 1,
      data: _0xdc03774d
    });
    if (error) throw error;
    _0x9e4d4e40('Colors saved! ✓', 'success');
  } catch (err) {
    _0x9e4d4e40(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0xac0b2c10(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0xce876474(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0xce876474((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function _0x7af2fb8d() {
  const _0xe618be60 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0xac0b2c10(_0xe618be60);
  _0xdc03774d.colors = _0xe618be60;
  _0x9e4d4e40('Reset to default — click Save Colors to keep it', '');
}
function _0x08342529() {
  if (_0xdc03774d.colors) _0xac0b2c10(_0xdc03774d.colors);
  if (_0xdc03774d.logoData) {
    const _0x197853ee = _0xce876474('logo-preview');
    const img = _0xce876474('logo-preview-img');
    if ((_0x197853ee && img)) {
      img.src = _0xdc03774d.logoData;
      _0x197853ee.style.display = 'block';
    }
  }
}
let _0x6f6afcfb = null;
let _0x23be36ab = null;
function _0x951707b2(_0x4a5919f9) {
  if ((_0x4a5919f9.type && (_0x4a5919f9.type !== ''))) return _0x4a5919f9.type;
  const _0x4d67f524 = _0x4a5919f9.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x4d67f524] || 'image/png');
}
function _0x6ba872d8(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0xe92aa39e(file, _0x52a2e19f) {
  if (!file) return null;
  const _0xf2ba3e91 = _0x951707b2(file);
  const ext = _0x6ba872d8(file);
  const _0xe19b9882 = `${_0x52a2e19f}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0x52814179.storage.from('portfolio-assets').upload(_0xe19b9882, file, {
    upsert: true,
    contentType: _0xf2ba3e91
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x03d38421
  } = _0x52814179.storage.from('portfolio-assets').getPublicUrl(_0xe19b9882);
  return _0x03d38421.publicUrl;
}
function _0xabb30093(input) {
  const file = input.files[0];
  if (!file) return;
  _0x6f6afcfb = file;
  const _0xa1275c11 = URL.createObjectURL(file);
  const prev = _0xce876474('logo-preview'),
    img = _0xce876474('logo-preview-img');
  if ((prev && img)) {
    img.src = _0xa1275c11;
    prev.style.display = 'block';
  }
  _0x9e4d4e40('Logo selected — click Save Logo & Favicon', '');
}
function _0x8e49ab09(input) {
  const file = input.files[0];
  if (!file) return;
  _0x23be36ab = file;
  _0x9e4d4e40('Favicon selected — click Save Logo & Favicon', '');
}
async function _0x0a9b084b() {
  _0xf00ed60a();
  if ((!_0x6f6afcfb && !_0x23be36ab)) {
    _0x9e4d4e40('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0xce876474('logo-save-btn');
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0x6f6afcfb) {
      const _0xb32e106f = await _0xe92aa39e(_0x6f6afcfb, 'logos');
      if (_0xb32e106f) _0xdc03774d.logoData = _0xb32e106f;
    }
    if (_0x23be36ab) {
      const _0x582dabc2 = await _0xe92aa39e(_0x23be36ab, 'favicons');
      if (_0x582dabc2) _0xdc03774d.faviconData = _0x582dabc2;
    }
    const {
      error
    } = await _0x52814179.from('mv_site').upsert({
      id: 1,
      data: _0xdc03774d
    });
    if (error) throw error;
    _0x05b16bdd();
    _0xce876474('logo-upload').value = '';
    _0xce876474('favicon-upload').value = '';
    _0x6f6afcfb = null;
    _0x23be36ab = null;
    _0x9e4d4e40('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x9e4d4e40(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0x05b16bdd() {
  const _0xda9c3d0d = document.getElementById('loading-logo-img');
  const _0x06732e9e = document.getElementById('loading-logo-text');
  if (_0xdc03774d.logoData) {
    if (_0x06732e9e) _0x06732e9e.style.display = 'none';
    if (_0xda9c3d0d) {
      _0xda9c3d0d.style.display = 'block';
      _0xda9c3d0d.src = _0xdc03774d.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0xdc03774d.logoData);
    } catch (e) {}
  } else {
    if (_0xda9c3d0d) _0xda9c3d0d.style.display = 'none';
    if (_0x06732e9e) _0x06732e9e.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0xdc03774d.faviconData) {
    let _0x66951976 = document.querySelector('link[rel="icon"]');
    if (!_0x66951976) {
      _0x66951976 = document.createElement('link');
      _0x66951976.rel = 'icon';
      document.head.appendChild(_0x66951976);
    }
    _0x66951976.href = _0xdc03774d.faviconData;
  }
}
async function _0x5c69ee78() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0xf00ed60a();
  _0xdc03774d.logoData = null;
  const {
    error
  } = await _0x52814179.from('mv_site').upsert({
    id: 1,
    data: _0xdc03774d
  });
  if (error) {
    _0x9e4d4e40(('Error: ' + error.message), 'error');
    return;
  }
  _0x05b16bdd();
  const prev = _0xce876474('logo-preview'),
    img = _0xce876474('logo-preview-img');
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0x9e4d4e40('Logo dihapus! ✓', 'success');
}
function _0x67ae08ba() {
  const s = _0xdc03774d;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0xac0b2c10(s.colors);
  _0x05b16bdd();
  const _0x8ade7f61 = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0x8ade7f61;
  if (_0xce876474('page-title')) _0xce876474('page-title').textContent = _0x8ade7f61;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0xce876474('nav-brand').innerHTML = s.brand.replace('.', '<span>.</span>');
    _0xce876474('footer-brand').innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0x1c378e99('hero-label', s.label);
  _0x1c378e99('hero-sub', s.hsub);
  _0x1c378e99('about-p1', s.about1);
  _0x1c378e99('about-p2', s.about2);
  _0x1c378e99('footer-copy', s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xbd78f89f = s.htitle.split('|');
    _0xce876474('hero-title').innerHTML = _0xbd78f89f.map((_0xb832311e, i) => (i === 0) ? _0xb832311e : (i === 1) ? `<span class="accent">${_0xb832311e}</span>` : `<span class="stroke">${_0xb832311e}</span>`).join('<br>');
  }
  const _0x653294c0 = [{
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
  const _0x86b6bab6 = _0xce876474('about-social-btns'),
    _0x03a403c0 = _0xce876474('footer-social-links');
  if (_0x86b6bab6) _0x86b6bab6.innerHTML = _0x653294c0.filter(_0x43bf698d => s[_0x43bf698d.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="btn ${s2.primary ? 'btn-primary' : 'btn-ghost'}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x03a403c0) _0x03a403c0.innerHTML = _0x653294c0.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0xe9153d51() {
  const s = _0xdc03774d;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x1f166f6b => {
    if (_0xce876474(('s-' + _0x1f166f6b))) _0xce876474(('s-' + _0x1f166f6b)).value = (s[_0x1f166f6b] || '');
  });
  if (_0xce876474('s-perpage')) _0xce876474('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0x951372c5 = _0xce876474(('dm-' + mode));
  if (_0x951372c5) _0x951372c5.checked = true;
}
function _0x2416e15c(mode) {
  _0xdc03774d.displayMode = mode;
  _0xa634ed7d(true);
}
async function _0x070bf16c() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0xdc03774d = {
    brand: _0xce876474('s-brand').value,
    siteTitle: _0xce876474('s-siteTitle').value,
    label: _0xce876474('s-label').value,
    htitle: _0xce876474('s-htitle').value,
    hsub: _0xce876474('s-hsub').value,
    about1: _0xce876474('s-about1').value,
    about2: _0xce876474('s-about2').value,
    yt: _0xce876474('s-yt').value,
    tw: _0xce876474('s-tw').value,
    discord: _0xce876474('s-discord').value,
    vgen: _0xce876474('s-vgen').value,
    ig: _0xce876474('s-ig').value,
    tiktok: _0xce876474('s-tiktok').value,
    copy: _0xce876474('s-copy').value,
    year: _0xce876474('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0xce876474('s-perpage')?.value) || 12),
    colors: _0xdc03774d.colors,
    logoData: _0xdc03774d.logoData,
    faviconData: _0xdc03774d.faviconData
  };
  const btn = _0xce876474('site-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0xf00ed60a();
  try {
    const {
      error
    } = await _0x52814179.from('mv_site').upsert({
      id: 1,
      data: _0xdc03774d
    });
    if (error) throw error;
    _0x67ae08ba();
    _0xd65b5c34();
    _0xa634ed7d(true);
    _0x9e4d4e40('Site info saved! ✓', 'success');
  } catch (err) {
    _0x9e4d4e40(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0xd0f2d3e7() {
  const _0x31ff6bcb = _0xce876474('site-edit-panel');
  if (_0x31ff6bcb) _0x31ff6bcb.classList.remove('open');
}
async function _0x4f9cfd5c() {
  const _0xa8188dac = _0xce876474('logo-upload'),
    _0x7a13c53a = _0xce876474('favicon-upload');
  if (_0xa8188dac) _0xa8188dac.value = '';
  if (_0x7a13c53a) _0x7a13c53a.value = '';
  document.body.classList.add('loading');
  _0x13372211(15, 'Connecting...');
  _0x52814179 = window.supabase.createClient(_0xc926e151, _0x9f00379a);
  _0x13372211(35, 'Loading site info...');
  await _0x6a488bc7();
  _0x13372211(60, 'Loading works...');
  await _0xb6b43773();
  _0x13372211(75, 'Preloading previews...');
  await _0xa7514ee6();
  _0x13372211(90, 'Almost there...');
  _0x52814179.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0xb6b43773).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0x6a488bc7).subscribe();
  setTimeout(() => {
    _0x13372211(100, 'Ready!');
    setTimeout(() => {
      _0x3f4645e4();
      _0x684b2875();
      if (_0x8a924144()) _0xce876474('admin-panel').classList.add('open');
    }, 300);
  }, 200);
}
_0x4f9cfd5c();
