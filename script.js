const _0xe4aa113a = _0x23e24308 => atob(_0x23e24308);
const _0xa3c360c8 = _0xe4aa113a('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const _0x661289cc = _0xe4aa113a('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const _0x94f11ca1 = _0xe4aa113a('YWRt');
const _0xc9c67c75 = _0xe4aa113a('bXZwX2FkbWluX3Nlc3Npb24=');
const _0x9243199e = ((60 * 60) * 1000);
let _0xc0006f36,
  _0x19e50c97 = [],
  _0x26838ffe = {},
  _0x06620a72 = 'all',
  _0xce49bddc = null,
  _0xb5e578fa = 1,
  _0x8acb23e2 = 0;
let _0xe9f07bac = (() => {
  try {
    const _0x25e5b88d = localStorage.getItem('mv_autoplay');
    return (_0x25e5b88d === null) ? true : (_0x25e5b88d === '1');
  } catch {
    return true;
  }
})();
function toggleAutoplay() {
  _0xe9f07bac = !_0xe9f07bac;
  try {
    localStorage.setItem('mv_autoplay', _0xe9f07bac ? '1' : '0');
  } catch {}
  _0x926374bc();
  if (_0xe9f07bac) {
    _0x923c2fe8();
    _0x3b143947();
  } else {
    _0x7c34b0a7();
  }
}
function _0x926374bc() {
  const _0xba4f8c1a = _0x36784fdb("_c06ed188f"),
    label = _0x36784fdb("_c94af0019");
  if (!_0xba4f8c1a) return;
  if (_0xe9f07bac) {
    _0xba4f8c1a.classList.add("_c2467c7f5");
    if (label) label.textContent = 'Autoplay';
    _0xba4f8c1a.title = 'Autoplay ON — click to turn off';
  } else {
    _0xba4f8c1a.classList.remove("_c2467c7f5");
    if (label) label.textContent = 'Autoplay';
    _0xba4f8c1a.title = 'Autoplay OFF — click to turn on';
  }
}
function _0x7c34b0a7() {
  document.querySelectorAll("._cdb6db7bb.featured-autoplay").forEach(_0xd928ea3d => {
    const _0x06a3b747 = _0xd928ea3d.querySelector('.mv-preview-iframe');
    if (_0x06a3b747) _0x06a3b747.remove();
    _0xd928ea3d.classList.remove('previewing', 'preview-ready', 'featured-autoplay');
  });
  _0x2b3c21e9.forEach(iframe => iframe.remove());
  _0x2b3c21e9.clear();
}
const _0x2b3c21e9 = new Map();
function _0x7bda72ac() {
  const _0x2269dee4 = 5000;
  if (!_0xe9f07bac) return Promise.resolve();
  const _0x67058a7d = _0x19e50c97.filter(_0x9c1365b2 => (_0x9c1365b2.featured && _0x9c1365b2.ytId));
  if (!_0x67058a7d.length) return Promise.resolve();
  const _0x5a473f42 = _0x67058a7d.map(c => {
    if (_0x2b3c21e9.has(c.ytId)) return Promise.resolve();
    return new Promise(resolve => {
      const iframe = document.createElement('iframe');
      iframe.allow = 'autoplay';
      iframe.style.cssText = 'position:fixed;width:480px;height:270px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
      iframe.src = `https://www.youtube.com/embed/${c.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${c.ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60&disablekb=1&fs=0`;
      const _0x1c1953b4 = () => {
        iframe._mvReady = true;
        resolve();
      };
      iframe.onload = _0x1c1953b4;
      const _0xfd865576 = setTimeout(_0x1c1953b4, _0x2269dee4);
      iframe.onload = () => {
        clearTimeout(_0xfd865576);
        iframe._mvReady = true;
        resolve();
      };
      document.body.appendChild(iframe);
      _0x2b3c21e9.set(c.ytId, iframe);
    });
  });
  return Promise.race([Promise.all(_0x5a473f42), new Promise(_0xb9e080b0 => setTimeout(_0xb9e080b0, _0x2269dee4))]);
}
function _0xfe9e7d74() {
  try {
    const s = JSON.parse((sessionStorage.getItem(_0xc9c67c75) || 'null'));
    if (!s) return false;
    if (((Date.now() - s.ts) > _0x9243199e)) {
      sessionStorage.removeItem(_0xc9c67c75);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function _0x1c533cb6(_0x126217e1) {
  if (_0x126217e1) sessionStorage.setItem(_0xc9c67c75, JSON.stringify({
    ts: Date.now()
  }));else sessionStorage.removeItem(_0xc9c67c75);
}
function _0xecb6f9c4() {
  if (_0xfe9e7d74()) _0x1c533cb6(true);
}
setInterval(() => {
  if ((!_0xfe9e7d74() && _0x36784fdb("_cb45e18fa")?.classList.contains('open'))) {
    _0x36784fdb("_cb45e18fa").classList.remove('open');
    _0x91c3b970('Admin session expired. Type "adm" to log in again.', 'error');
  }
}, (60 * 1000));
function closeAdminPanel() {
  document.getElementById("_cb45e18fa").classList.remove('open');
  _0xc0006f36.auth.signOut();
  _0x1c533cb6(false);
}
let _0x183c61cd = '';
document.addEventListener('keydown', _0x22f9d9ac => {
  if (['INPUT', 'TEXTAREA'].includes(_0x22f9d9ac.target.tagName)) return;
  if ((_0x22f9d9ac.key === 'Escape')) {
    closeModal();
    _0xca14acb2();
    closeAdminPanel();
    _0x36784fdb("_ceed75d9f").style.display = 'none';
    return;
  }
  _0x183c61cd += _0x22f9d9ac.key.toLowerCase();
  if ((_0x183c61cd.length > _0x94f11ca1.length)) _0x183c61cd = _0x183c61cd.slice(-_0x94f11ca1.length);
  if ((_0x183c61cd === _0x94f11ca1)) {
    _0x183c61cd = '';
    _0x4c370437();
  }
});
function switchTab(name, btn) {
  document.querySelectorAll("._ca0af8dc1").forEach(_0xe11b57b6 => _0xe11b57b6.classList.remove("_c2467c7f5"));
  document.querySelectorAll("._cd78752e6").forEach(_0xb129f8e4 => _0xb129f8e4.classList.remove("_c2467c7f5"));
  btn.classList.add("_c2467c7f5");
  _0x36784fdb(('tab-' + name)).classList.add("_c2467c7f5");
  if ((name === 'list')) _0xb59f5918();
  if ((name === 'site')) _0x82fa6959();
  if ((name === 'design')) _0xa2ae0e72();
}
function _0x4c370437() {
  if (_0xfe9e7d74()) {
    _0xecb6f9c4();
    _0x36784fdb("_cb45e18fa").classList.toggle('open');
    return;
  }
  _0x36784fdb("_cc2504d17").style.display = 'none';
  _0x36784fdb("_c16c73a95").value = '';
  _0x36784fdb("_c9e468ad6").value = '';
  _0x36784fdb("_c0b9186dd").disabled = false;
  try {
    const _0x902526d9 = JSON.parse((sessionStorage.getItem(_0xe4aa113a('bG9ja291dA==')) || 'null'));
    if ((_0x902526d9 && (Date.now() < _0x902526d9.until))) {
      const _0xde377c03 = Math.ceil(((_0x902526d9.until - Date.now()) / 60000));
      _0x36784fdb("_cc2504d17").style.display = 'block';
      _0x36784fdb("_cc2504d17").textContent = `🔒 Too many attempts. Try again in ${_0xde377c03} min.`;
      _0x36784fdb("_c0b9186dd").disabled = true;
    }
  } catch (e) {}
  _0x36784fdb("_ceed75d9f").style.display = 'flex';
  setTimeout(() => _0x36784fdb("_c16c73a95").focus(), 100);
}
async function checkPw() {
  const _0x478efe12 = 5,
    _0xc71014bc = ((15 * 60) * 1000),
    now = Date.now();
  const _0x760405ec = _0xe4aa113a('bG9ja291dA=='),
    _0x5932cdcf = _0xe4aa113a('YXR0ZW1wdHM=');
  try {
    const lock = JSON.parse((sessionStorage.getItem(_0x760405ec) || 'null'));
    if ((lock && (now < lock.until))) {
      const mins = Math.ceil(((lock.until - now) / 60000));
      _0x36784fdb("_cc2504d17").style.display = 'block';
      _0x36784fdb("_cc2504d17").textContent = `🔒 Too many attempts. Try again in ${mins} min.`;
      _0x36784fdb("_c0b9186dd").disabled = true;
      return;
    }
  } catch (e) {}
  const email = _0x36784fdb("_c16c73a95").value.trim(),
    _0xb4584136 = _0x36784fdb("_c9e468ad6").value;
  if ((!email || !_0xb4584136)) {
    _0x36784fdb("_cc2504d17").style.display = 'block';
    _0x36784fdb("_cc2504d17").textContent = '❌ Please enter email and password.';
    return;
  }
  const btn = _0x36784fdb("_c0b9186dd");
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  try {
    const {
      data,
      error
    } = await _0xc0006f36.auth.signInWithPassword({
      email,
      password: _0xb4584136
    });
    if ((error || !data.user)) throw new Error('fail');
    sessionStorage.removeItem(_0x5932cdcf);
    sessionStorage.removeItem(_0x760405ec);
    _0x1c533cb6(true);
    _0x36784fdb("_ceed75d9f").style.display = 'none';
    _0x36784fdb("_cb45e18fa").classList.add('open');
    _0x91c3b970('Welcome back! ✓', 'success');
  } catch (e) {
    let _0x569df777 = 0;
    try {
      _0x569df777 = parseInt((sessionStorage.getItem(_0x5932cdcf) || '0'));
    } catch (e) {}
    _0x569df777++;
    sessionStorage.setItem(_0x5932cdcf, _0x569df777);
    const _0x07b167ca = (_0x478efe12 - _0x569df777);
    if ((_0x569df777 >= _0x478efe12)) {
      sessionStorage.setItem(_0x760405ec, JSON.stringify({
        until: (now + _0xc71014bc)
      }));
      sessionStorage.removeItem(_0x5932cdcf);
      _0x36784fdb("_cc2504d17").style.display = 'block';
      _0x36784fdb("_cc2504d17").textContent = '🔒 Too many attempts. Locked for 15 minutes.';
      btn.disabled = true;
    } else {
      _0x36784fdb("_cc2504d17").style.display = 'block';
      _0x36784fdb("_cc2504d17").textContent = `❌ Wrong credentials. ${_0x07b167ca} attempt${(_0x07b167ca > 1) ? 's' : ''} left.`;
      btn.disabled = false;
    }
    _0x36784fdb("_c9e468ad6").value = '';
    _0x36784fdb("_c9e468ad6").focus();
  }
  btn.textContent = 'Sign In →';
}
function _0x94feb38b(_0x936e4fff, text) {
  const _0xecc1f5d5 = _0x36784fdb("_cce4d821b"),
    _0xb45d30a5 = _0x36784fdb("_c6e6c0175");
  if (_0xecc1f5d5) _0xecc1f5d5.style.width = (_0x936e4fff + '%');
  if ((_0xb45d30a5 && text)) _0xb45d30a5.textContent = text;
}
function _0x3f330ef8() {
  const s = _0x36784fdb("_c7c76f316");
  if (!s) return;
  s.classList.add('hidden');
  document.body.classList.remove('loading');
}
async function _0x674623d7() {
  const {
    data,
    error
  } = await _0xc0006f36.from('mv_works').select('*').order('sort_order').order('created_at');
  if (error) {
    console.error(error);
    return;
  }
  _0x19e50c97 = (data || []);
  _0xd1a3d751(true);
  _0x392411b1();
  _0xa5723f3b();
  _0xaa70077b();
  if (_0x36784fdb("_c389a3a8f")?.classList.contains("_c2467c7f5")) _0xb59f5918();
}
async function _0xc9a28122() {
  const {
    data
  } = await _0xc0006f36.from('mv_site').select('data').eq('id', 1).single();
  if (data?.data) {
    _0x26838ffe = data.data;
    if (_0x26838ffe.logoData) {
      await new Promise(resolve => {
        const _0x1279d379 = new Image();
        _0x1279d379.onload = resolve;
        _0x1279d379.onerror = resolve;
        _0x1279d379.src = _0x26838ffe.logoData;
      });
    }
    _0xc922fe82();
    _0xa5723f3b();
  }
}
function _0x36784fdb(id) {
  return document.getElementById(id);
}
function _0x3f98fa36(id, v) {
  if ((v && _0x36784fdb(id))) _0x36784fdb(id).textContent = v;
}
function _0x2243ae57(s) {
  return String((s || '')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function _0xfd69a5c0(s) {
  if ((!s || (typeof s !== 'string'))) return null;
  const _0x143f3f96 = (s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) || s.match(/^([a-zA-Z0-9_-]{11})$/));
  return _0x143f3f96 ? _0x143f3f96[1] : null;
}
let _0x3d7613a8;
function _0x91c3b970(_0xc9e5dec9, type = '') {
  const t = _0x36784fdb("_ce04a2b1f");
  t.textContent = _0xc9e5dec9;
  t.className = `toast ${type} show`;
  clearTimeout(_0x3d7613a8);
  _0x3d7613a8 = setTimeout(() => t.classList.remove('show'), 3200);
}
function _0xe025f56f(id) {
  const _0xda6c45e6 = (_0x36784fdb(id).value || '');
  return _0xda6c45e6.split(',').map(t => t.trim()).filter(Boolean);
}
function _0x337d8012(id, _0xff0bca2b) {
  _0x36784fdb(id).value = _0xff0bca2b.join(', ');
}
function togglePresetTag(_0x47c5cd17, _0x46f5ebfc, btn) {
  _0xecb6f9c4();
  let tags = _0xe025f56f(_0x47c5cd17);
  if (tags.includes(_0x46f5ebfc)) {
    tags = tags.filter(t => (t !== _0x46f5ebfc));
    btn.classList.remove("_c2467c7f5");
  } else {
    tags.push(_0x46f5ebfc);
    btn.classList.add("_c2467c7f5");
  }
  _0x337d8012(_0x47c5cd17, tags);
}
function syncPresetHighlight(inputId, _0x167e922e) {
  const tags = _0xe025f56f(inputId),
    _0x9e4d239c = _0x36784fdb(_0x167e922e);
  if (!_0x9e4d239c) return;
  _0x9e4d239c.querySelectorAll("._cb33a15e4").forEach(btn => {
    btn.classList.toggle("_c2467c7f5", tags.includes(btn.textContent.trim()));
  });
}
function _0xf9ee74e2(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xee68fd12(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
function _0xaa70077b() {
  const _0xbd1957f1 = _0x19e50c97.map(c => (c.thumb || (c.ytId ? _0xee68fd12(c.ytId) : null))).filter(Boolean);
  if ((_0xbd1957f1.length < 2)) return;
  const _0xc63b3fa1 = (arr, min) => {
    let r = [...arr];
    while ((r.length < min)) r = [...r, ...arr];
    return r;
  };
  const _0xff61e507 = [{
    id: "_cd7a8c6e4",
    items: _0xc63b3fa1(_0xbd1957f1, 20),
    dir: 'left',
    speed: 60
  }, {
    id: "_c48ffca33",
    items: _0xc63b3fa1([..._0xbd1957f1].reverse(), 20),
    dir: 'right',
    speed: 75
  }, {
    id: "_c364dcb51",
    items: _0xc63b3fa1(_0xbd1957f1.slice(Math.floor((_0xbd1957f1.length / 2))).concat(_0xbd1957f1.slice(0, Math.floor((_0xbd1957f1.length / 2)))), 20),
    dir: 'left',
    speed: 50
  }];
  _0xff61e507.forEach(({
    id,
    items,
    dir,
    speed
  }) => {
    const _0x4295a0f7 = _0x36784fdb(id);
    if (!_0x4295a0f7) return;
    const all = [...items, ...items];
    _0x4295a0f7.innerHTML = all.map(src => `<div class="hero-slide"><img src="${src}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join('');
    requestAnimationFrame(() => {
      const _0x95bdfc4f = (items.length * (speed / 20));
      _0x4295a0f7.style.animationDuration = `${_0x95bdfc4f}s`;
      if ((dir === 'right')) {
        _0x4295a0f7.style.animationName = 'slideRight';
      }
    });
  });
  setTimeout(() => {
    const wrap = _0x36784fdb("_c1480ffc2");
    if (wrap) wrap.classList.add('visible');
  }, 400);
}
function _0x93314c87(c) {
  const thumb = (c.thumb || (c.ytId ? _0xf9ee74e2(c.ytId) : ''));
  const _0x3837e87d = c.ytId ? _0xee68fd12(c.ytId) : '';
  const tags = (c.tags || []).map(t => `<span class="mv-tag">${_0x2243ae57(t)}</span>`).join('');
  const _0xba6d7222 = !!c.ytId;
  const _0xca667a8f = !!c.featured;
  const _0x654c7c2a = (_0xba6d7222 && !_0xca667a8f) ? `onmouseenter="startPreview(this,'${c.ytId}')" onmouseleave="stopPreview(this)"` : '';
  return `<div class="_cdb6db7bb${_0xca667a8f ? ' featured' : ''}" 
        data-id="${c.id}" 
        data-ytid="${(c.ytId || '')}"
        onclick="openModal('${c.id}')"
        ${_0x654c7c2a}>
${thumb ? `<img class="mv-thumb" src="${thumb}" alt="${_0x2243ae57(c.title)}" loading="lazy" onerror="this.src='${_0x3837e87d}';this.onerror=null;">` : ''}
<div class="mv-placeholder" style="${thumb ? 'display:none' : ''}"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-play"><svg width="18" height="18" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
<div class="mv-overlay"><div>${tags}<div class="mv-title">${_0x2243ae57(c.title)}</div><div class="mv-artist">${_0x2243ae57((c.artist || ''))}</div></div></div>
</div>`;
}
function _0x96c8fe73() {
  return (_0x26838ffe.displayMode || 'all');
}
function _0xee4a683a() {
  return (parseInt(_0x26838ffe.perPage) || 12);
}
function _0xd1a3d751(_0x40739efe) {
  if (_0x40739efe) {
    _0xb5e578fa = 1;
    _0x8acb23e2 = 0;
  }
  const _0xe28864e5 = _0x36784fdb("_c211f23fd"),
    _0x2e4dab19 = _0x96c8fe73(),
    perPage = _0xee4a683a();
  const _0x9e511ca4 = (_0x06620a72 === 'all') ? _0x19e50c97 : _0x19e50c97.filter(c => (c.tags || []).includes(_0x06620a72));
  _0x36784fdb("_c679c31bb").textContent = String(_0x9e511ca4.length).padStart(2, '0');
  ['mv-pagination', 'mv-loadmore-btn'].forEach(id => {
    const e = _0x36784fdb(id);
    if (e) e.remove();
  });
  if (!_0x9e511ca4.length) {
    _0xe28864e5.innerHTML = `<div style="grid-column:1/-1;padding:80px;text-align:center;color:var(--muted);font-family:'Space Mono',monospace;font-size:13px">No works yet.</div>`;
    return;
  }
  if ((_0x2e4dab19 === 'pagination')) {
    const _0xbf575c1d = Math.ceil((_0x9e511ca4.length / perPage));
    _0xb5e578fa = Math.min(_0xb5e578fa, _0xbf575c1d);
    const slice = _0x9e511ca4.slice(((_0xb5e578fa - 1) * perPage), (_0xb5e578fa * perPage));
    _0xe28864e5.innerHTML = slice.map(_0x93314c87).join('');
    if ((_0xbf575c1d > 1)) {
      const bar = document.createElement('div');
      bar.id = 'mv-pagination';
      bar.style.cssText = 'grid-column:1/-1;display:flex;justify-content:center;gap:6px;padding:32px 0 8px;flex-wrap:wrap';
      for (let _0x5f7538fc = 1; (_0x5f7538fc <= _0xbf575c1d); _0x5f7538fc++) {
        const btn = document.createElement('button');
        btn.textContent = _0x5f7538fc;
        btn.style.cssText = `padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;border:1px solid rgba(240,240,240,.15);background:${(_0x5f7538fc === _0xb5e578fa) ? 'var(--accent)' : 'transparent'};color:${(_0x5f7538fc === _0xb5e578fa) ? '#000' : 'var(--muted)'};cursor:pointer;transition:all .2s`;
        btn.onclick = () => {
          _0xb5e578fa = _0x5f7538fc;
          _0xd1a3d751(false);
          window.scrollTo({
            top: (_0x36784fdb("_c8fc02be2").offsetTop - 80),
            behavior: 'smooth'
          });
        };
        bar.appendChild(btn);
      }
      _0xe28864e5.appendChild(bar);
    }
  } else if ((_0x2e4dab19 === 'loadmore')) {
    if (_0x40739efe) _0x8acb23e2 = perPage;else _0x8acb23e2 = Math.max(_0x8acb23e2, perPage);
    const slice = _0x9e511ca4.slice(0, _0x8acb23e2);
    _0xe28864e5.innerHTML = slice.map(_0x93314c87).join('');
    if ((_0x8acb23e2 < _0x9e511ca4.length)) {
      const rem = (_0x9e511ca4.length - _0x8acb23e2);
      const btn = document.createElement('button');
      btn.id = 'mv-loadmore-btn';
      btn.textContent = `Load More (${rem} more)`;
      btn.style.cssText = 'grid-column:1/-1;margin:24px auto 0;display:block;padding:14px 40px;background:transparent;border:1px solid rgba(200,255,0,.3);color:var(--accent);font-family:"Space Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .2s';
      btn.onmouseenter = () => btn.style.background = 'rgba(200,255,0,.08)';
      btn.onmouseleave = () => btn.style.background = 'transparent';
      btn.onclick = () => {
        _0x8acb23e2 += perPage;
        _0xd1a3d751(false);
      };
      _0xe28864e5.appendChild(btn);
    }
  } else {
    _0xe28864e5.innerHTML = _0x9e511ca4.map(_0x93314c87).join('');
  }
  requestAnimationFrame(() => _0x923c2fe8());
}
function _0x392411b1() {
  const tags = new Set();
  _0x19e50c97.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x36784fdb("_cfac2ea24").innerHTML = (`<button class="_cfbec5ee6${(_0x06620a72 === 'all') ? ' active' : ''}" onclick="filterCards('all',this)">All</button>` + [...tags].map(t => `<button class="_cfbec5ee6${(_0x06620a72 === t) ? ' active' : ''}" onclick="filterCards('${_0x2243ae57(t)}',this)">${_0x2243ae57(t)}</button>`).join(''));
}
function filterCards(tag, btn) {
  _0x06620a72 = tag;
  document.querySelectorAll("._cfbec5ee6").forEach(b => b.classList.remove("_c2467c7f5"));
  btn.classList.add("_c2467c7f5");
  _0xd1a3d751(true);
}
function _0x923c2fe8() {
  if (!_0xe9f07bac) return;
  const _0x8a1ee241 = document.querySelectorAll("._cdb6db7bb.featured");
  _0x8a1ee241.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    const _0xced107ad = _0x2b3c21e9.get(ytId);
    if (_0xced107ad) {
      _0xced107ad.removeAttribute('style');
      _0xced107ad.className = 'mv-preview-iframe';
      card.insertBefore(_0xced107ad, card.firstChild);
      card.classList.add('previewing', 'featured-autoplay');
      if (_0xced107ad.contentWindow) {
        if (_0xced107ad._mvReady) {
          card.classList.add('preview-ready');
        } else {
          _0xced107ad.onload = () => {
            _0xced107ad._mvReady = true;
            card.classList.add('preview-ready');
          };
        }
      }
      _0x2b3c21e9.delete(ytId);
    } else {
      _0x56344625(card, ytId);
    }
  });
}
function _0x56344625(card, ytId) {
  if (!_0xe9f07bac) return;
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
function _0x3b143947() {
  const featuredCards = document.querySelectorAll("._cdb6db7bb.featured");
  featuredCards.forEach(card => {
    const ytId = card.dataset.ytid;
    if (!ytId) return;
    if (card.classList.contains('previewing')) return;
    _0x56344625(card, ytId);
  });
}
let _0x02eec4df = null;
function _0xb59f5918() {
  const _0xfacdcc9a = _0x36784fdb("_c3476f189");
  if (!_0x19e50c97.length) {
    _0xfacdcc9a.innerHTML = '<div style="color:var(--muted);font-size:12px;font-family:\'Space Mono\',monospace">No works yet</div>';
    if (_0x02eec4df) {
      _0x02eec4df.destroy();
      _0x02eec4df = null;
    }
    return;
  }
  _0xfacdcc9a.innerHTML = _0x19e50c97.map(c => {
    const thumb = (c.thumb || (c.ytId ? _0xf9ee74e2(c.ytId) : ''));
    const fallback = c.ytId ? _0xee68fd12(c.ytId) : '';
    return `<div class="existing-item" id="item-${c.id}" data-id="${c.id}">
<div class="existing-item-header">
<span class="drag-handle" title="Drag to reorder">⠿</span>
${thumb ? `<img class="existing-item-thumb" src="${thumb}" onerror="this.src='${fallback}';this.onerror=null;">` : ''}
<span class="existing-item-title">${_0x2243ae57(c.title)}</span>
<div class="existing-item-actions">
  <button class="edit-btn" onclick="toggleEdit('${c.id}')">✏</button>
  <button class="del-btn" onclick="deleteCard('${c.id}')">✕</button>
</div>
</div>
<div class="inline-edit" id="edit-${c.id}">
<label>YouTube URL / ID</label><input type="text" id="e-url-${c.id}" value="${_0x2243ae57((c.ytId || ''))}">
<label>Title</label><input type="text" id="e-title-${c.id}" value="${_0x2243ae57(c.title)}">
<label>Artist</label><input type="text" id="e-artist-${c.id}" value="${_0x2243ae57((c.artist || ''))}">
<label>Tags <span style="color:var(--muted);font-size:9px">(click preset or type)</span></label>
<div class="_c69d38fec" id="edit-tag-presets-${c.id}">
  <button type="button" class="_cb33a15e4" onclick="togglePresetTag('e-tags-${c.id}','Simple MV',this)">Simple MV</button>
  <button type="button" class="_cb33a15e4" onclick="togglePresetTag('e-tags-${c.id}','Semi Complex',this)">Semi Complex</button>
  <button type="button" class="_cb33a15e4" onclick="togglePresetTag('e-tags-${c.id}','Complex',this)">Complex</button>
  <button type="button" class="_cb33a15e4" onclick="togglePresetTag('e-tags-${c.id}','Debut',this)">Debut</button>
  <button type="button" class="_cb33a15e4" onclick="togglePresetTag('e-tags-${c.id}','Trailer',this)">Trailer</button>
</div>
<input type="text" id="e-tags-${c.id}" value="${_0x2243ae57((c.tags || []).join(', '))}" oninput="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')" onfocus="syncPresetHighlight('e-tags-${c.id}','edit-tag-presets-${c.id}')">
<label>Custom Thumbnail URL</label><input type="text" id="e-thumb-${c.id}" value="${_0x2243ae57((c.thumb || ''))}">
<div class="_cb4df76db" style="margin:6px 0"><input type="checkbox" id="e-feat-${c.id}" ${c.featured ? 'checked' : ''}><label for="e-feat-${c.id}" style="margin:0;font-size:11px;text-transform:none;letter-spacing:0">Featured (2x size)</label></div>
<button class="inline-save-btn" onclick="saveEdit('${c.id}')">💾 Save Changes</button>
<button class="inline-cancel-btn" onclick="toggleEdit('${c.id}')">Cancel</button>
</div>
</div>`;
  }).join('');
  if (_0x02eec4df) {
    _0x02eec4df.destroy();
    _0x02eec4df = null;
  }
  _0x02eec4df = Sortable.create(_0xfacdcc9a, {
    handle: '.drag-handle',
    animation: 180,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async _0x5d80fc25 => {
      if ((_0x5d80fc25.oldIndex === _0x5d80fc25.newIndex)) return;
      const _0x7f1c3bb0 = _0x19e50c97.splice(_0x5d80fc25.oldIndex, 1);
      _0x19e50c97.splice(_0x5d80fc25.newIndex, 0, _0x7f1c3bb0);
      let _0x29a2f616 = _0x36784fdb('sort-saving');
      if (!_0x29a2f616) {
        _0x29a2f616 = document.createElement('div');
        _0x29a2f616.id = 'sort-saving';
        _0x29a2f616.style.cssText = 'text-align:center;padding:8px;font-family:"Space Mono",monospace;font-size:11px;color:var(--accent)';
        _0xfacdcc9a.insertAdjacentElement('afterend', _0x29a2f616);
      }
      _0x29a2f616.textContent = '⟳ Saving order...';
      await Promise.all(_0x19e50c97.map((c, i) => _0xc0006f36.from('mv_works').update({
        sort_order: i
      }).eq('id', c.id)));
      _0x29a2f616.remove();
      _0x91c3b970('Order saved! ✓', 'success');
      _0xd1a3d751(true);
    }
  });
}
function toggleEdit(id) {
  const _0x0021fcad = _0x36784fdb(('edit-' + id));
  document.querySelectorAll('.inline-edit.open').forEach(p => {
    if ((p.id !== ('edit-' + id))) p.classList.remove('open');
  });
  _0x0021fcad.classList.toggle('open');
  if (_0x0021fcad.classList.contains('open')) setTimeout(() => syncPresetHighlight(`e-tags-${id}`, `edit-tag-presets-${id}`), 50);
}
async function saveEdit(id) {
  const _0xc08205d1 = _0x36784fdb(`e-url-${id}`).value.trim(),
    title = _0x36784fdb(`e-title-${id}`).value.trim(),
    artist = _0x36784fdb(`e-artist-${id}`).value.trim();
  const _0x33f41fe6 = _0x36784fdb(`e-tags-${id}`).value.trim(),
    thumb = _0x36784fdb(`e-thumb-${id}`).value.trim(),
    _0x08cfddf7 = _0x36784fdb(`e-feat-${id}`).checked;
  if (!title) {
    _0x91c3b970('Title cannot be empty!', 'error');
    return;
  }
  _0xecb6f9c4();
  const ytId = ((_0xfd69a5c0(_0xc08205d1) || _0xc08205d1) || null);
  const tags = _0x33f41fe6 ? _0x33f41fe6.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x36784fdb(`edit-${id}`).querySelector('.inline-save-btn');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  const {
    error
  } = await _0xc0006f36.from('mv_works').update({
    ytId,
    title,
    artist,
    tags,
    thumb: (thumb || null),
    featured: _0x08cfddf7
  }).eq('id', id);
  btn.textContent = '💾 Save Changes';
  btn.disabled = false;
  if (error) {
    _0x91c3b970(('Error: ' + error.message), 'error');
    return;
  }
  _0x91c3b970('Work updated! ✓', 'success');
  toggleEdit(id);
}
function _0xa5723f3b() {
  _0x36784fdb("_c18571a7c").textContent = (_0x19e50c97.length || '0');
  const _0xafc2a204 = new Set(_0x19e50c97.map(c => c.artist).filter(Boolean));
  _0x36784fdb("_c4497e01d").textContent = (_0xafc2a204.size || '0');
  const tags = new Set();
  _0x19e50c97.forEach(c => (c.tags || []).forEach(t => tags.add(t)));
  _0x36784fdb("_c0fd07c31").textContent = (tags.size || '0');
  _0x36784fdb("_c53dada36").textContent = (_0x26838ffe.year || new Date().getFullYear());
}
async function addCard() {
  const _0x303e2874 = _0x36784fdb("_caf67cc93").value.trim(),
    title = _0x36784fdb("_c8af2a6bd").value.trim(),
    artist = _0x36784fdb("_c644e6883").value.trim();
  const _0xab80c668 = _0x36784fdb("_ca6a4cfd0").value.trim(),
    thumb = _0x36784fdb("_c9e183e25").value.trim(),
    feat = _0x36784fdb("_c4fc23eee").checked;
  if (!title) {
    _0x91c3b970('Title is required!', 'error');
    return;
  }
  _0xecb6f9c4();
  const ytId = _0xfd69a5c0(_0x303e2874);
  const tags = _0xab80c668 ? _0xab80c668.split(',').map(t => t.trim()).filter(Boolean) : [];
  const btn = _0x36784fdb("_c3f52d3dc");
  btn.disabled = true;
  btn.textContent = 'Saving...';
  const {
    error
  } = await _0xc0006f36.from('mv_works').insert([{
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
    _0x91c3b970(('Error: ' + error.message), 'error');
    return;
  }
  _0x91c3b970('Work added! ✓', 'success');
  ["_caf67cc93", "_c8af2a6bd", "_c644e6883", "_ca6a4cfd0", "_c9e183e25"].forEach(id => _0x36784fdb(id).value = '');
  _0x36784fdb("_c4fc23eee").checked = false;
  document.querySelectorAll("#_c2a515589 ._cb33a15e4").forEach(b => b.classList.remove("_c2467c7f5"));
  _0xbf2ab044('', '');
}
async function deleteCard(id) {
  if (!confirm('Remove this work?')) return;
  _0xecb6f9c4();
  const {
    error
  } = await _0xc0006f36.from('mv_works').delete().eq('id', id);
  if (error) {
    _0x91c3b970(('Error: ' + error.message), 'error');
    return;
  }
  _0x91c3b970('Work removed', 'success');
}
function openModal(id) {
  if (document.body.classList.contains('edit-mode')) return;
  const c = _0x19e50c97.find(_0xe95232e4 => (_0xe95232e4.id === id));
  if (!c) return;
  _0x36784fdb("_c65670b41").textContent = c.title;
  _0x36784fdb("_c797551db").textContent = (c.artist || '');
  _0x36784fdb("_c4a916eac").innerHTML = (c.tags || []).map(t => `<span class="mv-tag">${_0x2243ae57(t)}</span>`).join('');
  _0x36784fdb("_ce30428a6").innerHTML = c.ytId ? `<iframe src="https://www.youtube.com/embed/${c.ytId}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--muted);font-family:'Space Mono',monospace">No video</div>`;
  _0x36784fdb("_c9aea26a3").classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if ((e && (e.target !== _0x36784fdb("_c9aea26a3")))) return;
  _0x36784fdb("_c9aea26a3").classList.remove('open');
  _0x36784fdb("_ce30428a6").innerHTML = '';
  document.body.style.overflow = '';
}
function onUrlInput(val) {
  clearTimeout(_0xce49bddc);
  const ytId = _0xfd69a5c0(val);
  if (!ytId) {
    _0xbf2ab044('', '');
    return;
  }
  _0xbf2ab044('loading', '⟳ Fetching info...');
  _0xce49bddc = setTimeout(() => _0x5a2ed25c(ytId), 800);
}
async function _0x5a2ed25c(ytId) {
  try {
    const _0xc7cdf96a = await fetch(`https://www.youtube.com/oembed?url=https://youtube.com/watch?v=${ytId}&format=json`);
    if (!_0xc7cdf96a.ok) throw new Error();
    const data = await _0xc7cdf96a.json();
    if (!_0x36784fdb("_c8af2a6bd").value.trim()) _0x36784fdb("_c8af2a6bd").value = (data.title || '');
    if (!_0x36784fdb("_c644e6883").value.trim()) _0x36784fdb("_c644e6883").value = (data.author_name || '');
    _0xbf2ab044('ok', '✓ Info fetched');
  } catch {
    _0xbf2ab044('err', '⚠ Could not fetch info');
  }
}
function _0xbf2ab044(type, msg) {
  const s = _0x36784fdb("_c2878ea43");
  s.textContent = msg;
  s.className = ("_c2878ea43" + (type ? (' ' + type) : ''));
}
let _0x64b6da38 = null;
function toggleEditMode() {
  const _0x92e94c92 = document.body.classList.toggle('edit-mode');
  const bar = _0x36784fdb("_cf93b52b1");
  const btn = _0x36784fdb("_c11d6d02c");
  if (_0x92e94c92) {
    bar.classList.add("_c2467c7f5");
    btn.textContent = '✦ Exit Drag Mode';
    btn.style.background = 'rgba(255,60,172,.1)';
    btn.style.borderColor = 'rgba(255,60,172,.4)';
    btn.style.color = 'var(--accent2)';
    _0x36784fdb("_cb45e18fa").classList.remove('open');
    _0xf6fb8800();
  } else {
    exitEditMode();
  }
}
function exitEditMode() {
  document.body.classList.remove('edit-mode');
  _0x36784fdb("_cf93b52b1").classList.remove("_c2467c7f5");
  const btn = _0x36784fdb("_c11d6d02c");
  if (btn) {
    btn.textContent = '✦ Drag Reorder on Page';
    btn.style.background = 'rgba(200,255,0,.1)';
    btn.style.borderColor = 'rgba(200,255,0,.3)';
    btn.style.color = 'var(--accent)';
  }
  if (_0x64b6da38) {
    _0x64b6da38.destroy();
    _0x64b6da38 = null;
  }
}
function _0xf6fb8800() {
  const grid = _0x36784fdb("_c211f23fd");
  if (!grid) return;
  if (_0x64b6da38) _0x64b6da38.destroy();
  _0x64b6da38 = Sortable.create(grid, {
    animation: 200,
    draggable: "._cdb6db7bb",
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: evt => {
      if ((evt.oldIndex === evt.newIndex)) return;
      const moved = _0x19e50c97.splice(evt.oldIndex, 1);
      _0x19e50c97.splice(evt.newIndex, 0, moved);
      _0x91c3b970('Drag to rearrange • Click Save Order when done', '');
    }
  });
}
async function saveGridOrder() {
  _0x91c3b970('Saving order...', '');
  await Promise.all(_0x19e50c97.map((c, i) => _0xc0006f36.from('mv_works').update({
    sort_order: i
  }).eq('id', c.id)));
  _0x91c3b970('Order saved! ✓', 'success');
  exitEditMode();
  _0xd1a3d751(true);
}
let _0x1714c0e5 = null;
let _0xb621b6ae = null;
const _0x18301771 = new Map();
function startPreview(card, ytId) {
  if ((!ytId || document.body.classList.contains('edit-mode'))) return;
  if (card.classList.contains('featured')) return;
  if (!_0x18301771.has(ytId)) {
    const _0x47837fd2 = document.createElement('iframe');
    _0x47837fd2.src = `https://www.youtube.com/embed/${ytId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3`;
    _0x47837fd2.allow = 'autoplay';
    _0x47837fd2.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;border:none;';
    document.body.appendChild(_0x47837fd2);
    _0x18301771.set(ytId, _0x47837fd2);
  }
  _0x1714c0e5 = setTimeout(() => {
    stopPreview(_0xb621b6ae);
    _0xb621b6ae = card;
    card.classList.add('previewing');
    const _0x7dd6ca44 = _0x18301771.get(ytId);
    if (_0x7dd6ca44) {
      _0x7dd6ca44.removeAttribute('style');
      _0x7dd6ca44.className = 'mv-preview-iframe';
      _0x7dd6ca44.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&rel=0&modestbranding=1&iv_load_policy=3&start=60`;
      card.insertBefore(_0x7dd6ca44, card.firstChild);
      _0x7dd6ca44.onload = () => card.classList.add('preview-ready');
    }
  }, 700);
}
function stopPreview(card) {
  clearTimeout(_0x1714c0e5);
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
  if ((_0xb621b6ae === card)) _0xb621b6ae = null;
}
const _0x90329d54 = {
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
function _0x7511bb31(name) {
  const p = _0x90329d54[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const _0x9b0936fb = _0x36784fdb(('color-' + k));
    if (_0x9b0936fb) _0x9b0936fb.value = v;
    const _0x6372dd1a = _0x36784fdb((('color-' + k) + '-hex'));
    if (_0x6372dd1a) _0x6372dd1a.value = v;
  });
  _0x91c3b970('Preview applied — click Save Colors to keep it', '');
}
function previewColor(_0x4ec3396d, val) {
  document.documentElement.style.setProperty(('--' + _0x4ec3396d), val);
  const hex = _0x36784fdb((('color-' + _0x4ec3396d) + '-hex'));
  if (hex) hex.value = val;
}
function previewColorHex(varName, _0xd119f3f8) {
  const val = _0xd119f3f8.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    document.documentElement.style.setProperty(('--' + varName), val);
    const _0x57c0c78f = _0x36784fdb(('color-' + varName));
    if (_0x57c0c78f) _0x57c0c78f.value = val;
  }
}
async function saveColors() {
  _0xecb6f9c4();
  const colors = {
    text: (_0x36784fdb("_c6639ae89")?.value || '#f0f0f0'),
    accent: _0x36784fdb("_c3b3a9fcb").value,
    accent2: _0x36784fdb("_cbfdddd39").value,
    bg: _0x36784fdb("_ca6da336d").value,
    surface: _0x36784fdb("_c137653b3").value
  };
  _0x26838ffe.colors = colors;
  const btn = _0x36784fdb("_c430b68d4");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const {
      error
    } = await _0xc0006f36.from('mv_site').upsert({
      id: 1,
      data: _0x26838ffe
    });
    if (error) throw error;
    _0x91c3b970('Colors saved! ✓', 'success');
  } catch (err) {
    _0x91c3b970(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Colors';
    btn.disabled = false;
  }
}
function _0xbe7ca870(colors) {
  if (!colors) return;
  Object.entries(colors).forEach(([k, v]) => {
    document.documentElement.style.setProperty(('--' + k), v);
    const inp = _0x36784fdb(('color-' + k));
    if (inp) inp.value = v;
    const hex = _0x36784fdb((('color-' + k) + '-hex'));
    if (hex) hex.value = v;
  });
}
function resetColors() {
  const _0x25579799 = {
    text: '#f0f0f0',
    accent: '#c8ff00',
    accent2: '#ff3cac',
    bg: '#080810',
    surface: '#10101c'
  };
  _0xbe7ca870(_0x25579799);
  _0x26838ffe.colors = _0x25579799;
  _0x91c3b970('Reset to default — click Save Colors to keep it', '');
}
function _0xa2ae0e72() {
  if (_0x26838ffe.colors) _0xbe7ca870(_0x26838ffe.colors);
  if (_0x26838ffe.logoData) {
    const _0xebcb64d7 = _0x36784fdb("_c5c011604");
    const img = _0x36784fdb("_c1d6bcc87");
    if ((_0xebcb64d7 && img)) {
      img.src = _0x26838ffe.logoData;
      _0xebcb64d7.style.display = 'block';
    }
  }
}
let _0x02f5e897 = null;
let _0x31d8a9b1 = null;
function _0x9a705552(_0x067abb5b) {
  if ((_0x067abb5b.type && (_0x067abb5b.type !== ''))) return _0x067abb5b.type;
  const _0x4701abb5 = _0x067abb5b.name.split('.').pop().toLowerCase();
  const map = {
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon'
  };
  return (map[_0x4701abb5] || 'image/png');
}
function _0x1f4e0cbc(file) {
  return (file.name.split('.').pop().toLowerCase() || 'png');
}
async function _0xe8d07760(file, _0xc2e6c46a) {
  if (!file) return null;
  const _0x7cf30ead = _0x9a705552(file);
  const ext = _0x1f4e0cbc(file);
  const _0x8b8aec6a = `${_0xc2e6c46a}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
  const {
    data,
    error
  } = await _0xc0006f36.storage.from('portfolio-assets').upload(_0x8b8aec6a, file, {
    upsert: true,
    contentType: _0x7cf30ead
  });
  if (error) {
    console.error('Upload Error:', error);
    throw error;
  }
  const {
    data: _0x14ffc3c6
  } = _0xc0006f36.storage.from('portfolio-assets').getPublicUrl(_0x8b8aec6a);
  return _0x14ffc3c6.publicUrl;
}
function handleLogoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x02f5e897 = file;
  const _0x4e7e3fa1 = URL.createObjectURL(file);
  const prev = _0x36784fdb("_c5c011604"),
    img = _0x36784fdb("_c1d6bcc87");
  if ((prev && img)) {
    img.src = _0x4e7e3fa1;
    prev.style.display = 'block';
  }
  _0x91c3b970('Logo selected — click Save Logo & Favicon', '');
}
function handleFaviconUpload(input) {
  const file = input.files[0];
  if (!file) return;
  _0x31d8a9b1 = file;
  _0x91c3b970('Favicon selected — click Save Logo & Favicon', '');
}
async function saveLogoFavicon() {
  _0xecb6f9c4();
  if ((!_0x02f5e897 && !_0x31d8a9b1)) {
    _0x91c3b970('Silakan pilih gambar (Klik Choose File) terlebih dahulu', 'error');
    return;
  }
  const btn = _0x36784fdb("_c1003ef94");
  btn.textContent = 'Uploading & Saving...';
  btn.disabled = true;
  try {
    if (_0x02f5e897) {
      const _0x612bde76 = await _0xe8d07760(_0x02f5e897, 'logos');
      if (_0x612bde76) _0x26838ffe.logoData = _0x612bde76;
    }
    if (_0x31d8a9b1) {
      const _0x7dfc84a4 = await _0xe8d07760(_0x31d8a9b1, 'favicons');
      if (_0x7dfc84a4) _0x26838ffe.faviconData = _0x7dfc84a4;
    }
    const {
      error
    } = await _0xc0006f36.from('mv_site').upsert({
      id: 1,
      data: _0x26838ffe
    });
    if (error) throw error;
    _0x1e56d004();
    _0x36784fdb("_c056dae87").value = '';
    _0x36784fdb("_c3315f6e3").value = '';
    _0x02f5e897 = null;
    _0x31d8a9b1 = null;
    _0x91c3b970('Logo & Favicon uploaded and saved! ✓', 'success');
  } catch (err) {
    console.error(err);
    _0x91c3b970(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = '💾 Save Logo & Favicon';
    btn.disabled = false;
  }
}
function _0x1e56d004() {
  const _0xb4e595ad = document.getElementById("_c23d11a90");
  const _0x45aca1dd = document.getElementById("_cff55c37b");
  if (_0x26838ffe.logoData) {
    if (_0x45aca1dd) _0x45aca1dd.style.display = 'none';
    if (_0xb4e595ad) {
      _0xb4e595ad.style.display = 'block';
      _0xb4e595ad.src = _0x26838ffe.logoData;
    }
    try {
      localStorage.setItem('mv_logo_url', _0x26838ffe.logoData);
    } catch (e) {}
  } else {
    if (_0xb4e595ad) _0xb4e595ad.style.display = 'none';
    if (_0x45aca1dd) _0x45aca1dd.style.display = 'block';
    try {
      localStorage.removeItem('mv_logo_url');
    } catch (e) {}
  }
  if (_0x26838ffe.faviconData) {
    let _0xcd18a877 = document.querySelector('link[rel="icon"]');
    if (!_0xcd18a877) {
      _0xcd18a877 = document.createElement('link');
      _0xcd18a877.rel = 'icon';
      document.head.appendChild(_0xcd18a877);
    }
    _0xcd18a877.href = _0x26838ffe.faviconData;
  }
}
async function deleteLogo() {
  if (!confirm('Hapus logo yang sedang dipakai?')) return;
  _0xecb6f9c4();
  _0x26838ffe.logoData = null;
  const {
    error
  } = await _0xc0006f36.from('mv_site').upsert({
    id: 1,
    data: _0x26838ffe
  });
  if (error) {
    _0x91c3b970(('Error: ' + error.message), 'error');
    return;
  }
  _0x1e56d004();
  const prev = _0x36784fdb("_c5c011604"),
    img = _0x36784fdb("_c1d6bcc87");
  if (prev) prev.style.display = 'none';
  if (img) img.src = '';
  _0x91c3b970('Logo dihapus! ✓', 'success');
}
function _0xc922fe82() {
  const s = _0x26838ffe;
  if ((!s || !Object.keys(s).length)) return;
  if (s.colors) _0xbe7ca870(s.colors);
  _0x1e56d004();
  const _0xe37e69cd = ((s.siteTitle || s.brand) || 'MV Portfolio');
  document.title = _0xe37e69cd;
  if (_0x36784fdb("_c17be0b86")) _0x36784fdb("_c17be0b86").textContent = _0xe37e69cd;
  if ((s.brand && (typeof s.brand === 'string'))) {
    _0x36784fdb("_cc9ad1b70").innerHTML = s.brand.replace('.', '<span>.</span>');
    _0x36784fdb("_cb1fdd2ff").innerHTML = s.brand.replace('.', '<span>.</span>');
  }
  _0x3f98fa36("_c702985df", s.label);
  _0x3f98fa36("_c8927b724", s.hsub);
  _0x3f98fa36("_cd2d086b9", s.about1);
  _0x3f98fa36("_c766455a2", s.about2);
  _0x3f98fa36("_c7edf9cc0", s.copy);
  if ((s.htitle && (typeof s.htitle === 'string'))) {
    const _0xd70617f9 = s.htitle.split('|');
    _0x36784fdb("_c1465e136").innerHTML = _0xd70617f9.map((_0xb118410a, i) => (i === 0) ? _0xb118410a : (i === 1) ? `<span class="_c6861ba17">${_0xb118410a}</span>` : `<span class="_c73213e1d">${_0xb118410a}</span>`).join('<br>');
  }
  const _0xb441a9a4 = [{
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
  const _0xdbd2fdbc = _0x36784fdb("_c501a37e9"),
    _0x68325e0e = _0x36784fdb("_cbf669de7");
  if (_0xdbd2fdbc) _0xdbd2fdbc.innerHTML = _0xb441a9a4.filter(_0x462acdeb => s[_0x462acdeb.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank" class="_cca507ad5 ${s2.primary ? "_c074bd3ca" : "_c9299d4be"}" style="padding:10px 20px;font-size:11px;display:inline-flex;align-items:center;gap:7px">${s2.icon} ${s2.label}</a>`).join('');
  if (_0x68325e0e) _0x68325e0e.innerHTML = _0xb441a9a4.filter(s2 => s[s2.key]).map(s2 => `<a href="${s[s2.key]}" target="_blank">${s2.label}</a>`).join('');
}
function _0x82fa6959() {
  const s = _0x26838ffe;
  ['brand', 'siteTitle', 'label', 'htitle', 'hsub', 'about1', 'about2', 'yt', 'tw', 'discord', 'vgen', 'ig', 'tiktok', 'copy', 'year'].forEach(_0x7435af61 => {
    if (_0x36784fdb(('s-' + _0x7435af61))) _0x36784fdb(('s-' + _0x7435af61)).value = (s[_0x7435af61] || '');
  });
  if (_0x36784fdb('s-perpage')) _0x36784fdb('s-perpage').value = (s.perPage || 12);
  const mode = (s.displayMode || 'all'),
    _0xe7ebdc21 = _0x36784fdb(('dm-' + mode));
  if (_0xe7ebdc21) _0xe7ebdc21.checked = true;
}
function previewMode(mode) {
  _0x26838ffe.displayMode = mode;
  _0xd1a3d751(true);
}
async function saveSiteEdit() {
  const mode = document.querySelector('input[name="display-mode"]:checked');
  _0x26838ffe = {
    brand: _0x36784fdb("_c29078e0c").value,
    siteTitle: _0x36784fdb("_cb353eea0").value,
    label: _0x36784fdb("_cb7df3c5a").value,
    htitle: _0x36784fdb("_c69a3bad9").value,
    hsub: _0x36784fdb("_cd657cc0f").value,
    about1: _0x36784fdb("_cb2285e1b").value,
    about2: _0x36784fdb("_cca907f5d").value,
    yt: _0x36784fdb("_c2d1570ab").value,
    tw: _0x36784fdb("_c7e352f32").value,
    discord: _0x36784fdb('s-discord').value,
    vgen: _0x36784fdb('s-vgen').value,
    ig: _0x36784fdb('s-ig').value,
    tiktok: _0x36784fdb('s-tiktok').value,
    copy: _0x36784fdb('s-copy').value,
    year: _0x36784fdb('s-year').value,
    displayMode: mode ? mode.value : 'all',
    perPage: (parseInt(_0x36784fdb('s-perpage')?.value) || 12),
    colors: _0x26838ffe.colors,
    logoData: _0x26838ffe.logoData,
    faviconData: _0x26838ffe.faviconData
  };
  const btn = _0x36784fdb("_c1d93289d");
  btn.textContent = 'Saving...';
  btn.disabled = true;
  _0xecb6f9c4();
  try {
    const {
      error
    } = await _0xc0006f36.from('mv_site').upsert({
      id: 1,
      data: _0x26838ffe
    });
    if (error) throw error;
    _0xc922fe82();
    _0xa5723f3b();
    _0xd1a3d751(true);
    _0x91c3b970('Site info saved! ✓', 'success');
  } catch (err) {
    _0x91c3b970(('Error: ' + err.message), 'error');
  } finally {
    btn.textContent = 'Simpan Info Site →';
    btn.disabled = false;
  }
}
function _0xca14acb2() {
  const _0xf6fcd3b5 = _0x36784fdb('site-edit-panel');
  if (_0xf6fcd3b5) _0xf6fcd3b5.classList.remove('open');
}
async function _0xc4324bf0() {
  const _0x916c5346 = _0x36784fdb("_c056dae87"),
    _0xbc054fd1 = _0x36784fdb("_c3315f6e3");
  if (_0x916c5346) _0x916c5346.value = '';
  if (_0xbc054fd1) _0xbc054fd1.value = '';
  document.body.classList.add('loading');
  _0x94feb38b(15, 'Connecting...');
  _0xc0006f36 = window.supabase.createClient(_0xa3c360c8, _0x661289cc);
  _0x94feb38b(35, 'Loading site info...');
  await _0xc9a28122();
  _0x94feb38b(60, 'Loading works...');
  await _0x674623d7();
  _0x94feb38b(75, 'Preloading previews...');
  await _0x7bda72ac();
  _0x94feb38b(90, 'Almost there...');
  _0xc0006f36.channel('mv_realtime').on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_works'
  }, _0x674623d7).on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'mv_site'
  }, _0xc9a28122).subscribe();
  setTimeout(() => {
    _0x94feb38b(100, 'Ready!');
    setTimeout(() => {
      _0x3f330ef8();
      _0x926374bc();
      if (_0xfe9e7d74()) _0x36784fdb("_cb45e18fa").classList.add('open');
    }, 300);
  }, 200);
}
_0xc4324bf0();
