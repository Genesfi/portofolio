/* ═══════════════════════════════════════
   MV PORTFOLIO — utils.js
   Shared helpers & constants
   ═══════════════════════════════════════ */

'use strict';

// ── CONSTANTS ──
const _c = s => atob(s);
const SB_URL          = _c('aHR0cHM6Ly92aWRvYW5kb2x5YXdjemlyZGlmdS5zdXBhYmFzZS5jbw==');
const SB_KEY          = _c('c2JfcHVibGlzaGFibGVfanNKOTYyQnNYVEpKQVZSN3hZVGNPZ19xbGNibmxqeg==');
const SHORTCUT        = _c('YWRt');
const ADMIN_KEY       = _c('bXZwX2FkbWluX3Nlc3Npb24=');
const ADMIN_TIMEOUT   = 60 * 60 * 1000; // 1 hour

// ── DOM HELPER ──
function el(id) { return document.getElementById(id); }

function setText(id, v) { if (v && el(id)) el(id).textContent = v; }

function esc(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── YOUTUBE ──
function ytExtract(s) {
  if (!s) return null;
  const m = s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/)
         || s.match(/^([a-zA-Z0-9_-]{11})$/);
  return m ? m[1] : null;
}

function ytThumb(id)  { return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`; }
function ytThumbFB(id){ return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }

// ── TOAST ──
let _toastTimer;
function toast(msg, type = '') {
  const t = el('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

// ── ADMIN SESSION ──
function isAdminActive() {
  try {
    const s = JSON.parse(sessionStorage.getItem(ADMIN_KEY) || 'null');
    if (!s) return false;
    if (Date.now() - s.ts > ADMIN_TIMEOUT) {
      sessionStorage.removeItem(ADMIN_KEY);
      return false;
    }
    return true;
  } catch { return false; }
}

function setAdminSession(active) {
  if (active) sessionStorage.setItem(ADMIN_KEY, JSON.stringify({ ts: Date.now() }));
  else sessionStorage.removeItem(ADMIN_KEY);
}

function renewAdminSession() {
  if (isAdminActive()) setAdminSession(true);
}

// Auto-expire check
setInterval(() => {
  if (!isAdminActive() && el('admin-panel')?.classList.contains('open')) {
    el('admin-panel').classList.remove('open');
    toast('Admin session expired. Type "adm" to log in again.', 'error');
  }
}, 60_000);

// ── TAG HELPERS ──
function getTagsArray(id) {
  return el(id).value.split(',').map(t => t.trim()).filter(Boolean);
}
function setTagsArray(id, arr) {
  el(id).value = arr.join(', ');
}
function togglePresetTag(inputId, tag, btn) {
  renewAdminSession();
  let tags = getTagsArray(inputId);
  if (tags.includes(tag)) {
    tags = tags.filter(t => t !== tag);
    btn.classList.remove('active');
  } else {
    tags.push(tag);
    btn.classList.add('active');
  }
  setTagsArray(inputId, tags);
}
function syncPresetHighlight(inputId, presetsId) {
  const tags = getTagsArray(inputId);
  const wrap = el(presetsId);
  if (!wrap) return;
  wrap.querySelectorAll('.tag-preset-btn').forEach(btn => {
    btn.classList.toggle('active', tags.includes(btn.textContent.trim()));
  });
}
