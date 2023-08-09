(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? s.credentials = "include" : i.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const wa = "155", mm = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, gm = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Jd = 0, al = 1, jd = 2, _m = 3, ym = 0, $l = 1, Zl = 2, Un = 3, Sn = 0, Wt = 1, Mn = 2, xm = 2, ei = 0, es = 1, cl = 2, ll = 3, hl = 4, Qd = 5, $i = 100, ef = 101, tf = 102, ul = 103, dl = 104, nf = 200, sf = 201, rf = 202, of = 203, Kl = 204, Jl = 205, af = 206, cf = 207, lf = 208, hf = 209, uf = 210, df = 0, ff = 1, pf = 2, ya = 3, mf = 4, gf = 5, _f = 6, yf = 7, ro = 0, xf = 1, vf = 2, ti = 0, Mf = 1, Sf = 2, Ef = 3, jl = 4, Tf = 5, Ra = 300, ii = 301, bi = 302, Vr = 303, Gr = 304, lr = 306, si = 1e3, Dt = 1001, Js = 1002, _t = 1003, Wr = 1004, vm = 1004, Ys = 1005, Mm = 1005, lt = 1006, Ca = 1007, Sm = 1007, Bn = 1008, Em = 1008, ni = 1009, bf = 1010, Af = 1011, La = 1012, Ql = 1013, jn = 1014, Qt = 1015, Dn = 1016, eh = 1017, th = 1018, Mi = 1020, wf = 1021, jt = 1023, Rf = 1024, Cf = 1025, Si = 1026, is = 1027, Lf = 1028, nh = 1029, Pf = 1030, ih = 1031, sh = 1033, la = 33776, ha = 33777, ua = 33778, da = 33779, fl = 35840, pl = 35841, ml = 35842, gl = 35843, If = 36196, _l = 37492, yl = 37496, xl = 37808, vl = 37809, Ml = 37810, Sl = 37811, El = 37812, Tl = 37813, bl = 37814, Al = 37815, wl = 37816, Rl = 37817, Cl = 37818, Ll = 37819, Pl = 37820, Il = 37821, fa = 36492, Uf = 36283, Ul = 36284, Dl = 36285, Ol = 36286, Df = 2200, Of = 2201, Nf = 2202, js = 2300, ss = 2301, pa = 2302, Ki = 2400, Ji = 2401, Xr = 2402, Pa = 2500, rh = 2501, Ff = 0, oh = 1, xa = 2, ah = 3e3, Ei = 3001, Bf = 3200, zf = 3201, Ri = 0, Hf = 1, Ti = "", De = "srgb", fn = "srgb-linear", ch = "display-p3", Tm = 0, ma = 7680, bm = 7681, Am = 7682, wm = 7683, Rm = 34055, Cm = 34056, Lm = 5386, Pm = 512, Im = 513, Um = 514, Dm = 515, Om = 516, Nm = 517, Fm = 518, kf = 519, Vf = 512, Gf = 513, Wf = 514, Xf = 515, Yf = 516, qf = 517, $f = 518, Zf = 519, Yr = 35044, Bm = 35048, zm = 35040, Hm = 35045, km = 35049, Vm = 35041, Gm = 35046, Wm = 35050, Xm = 35042, Ym = "100", Nl = "300 es", va = 1035, On = 2e3, qr = 2001;
class ai {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const Ot = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let eu = 1234567;
const ts = Math.PI / 180, Qs = 180 / Math.PI;
function tn() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ot[r & 255] + Ot[r >> 8 & 255] + Ot[r >> 16 & 255] + Ot[r >> 24 & 255] + "-" + Ot[e & 255] + Ot[e >> 8 & 255] + "-" + Ot[e >> 16 & 15 | 64] + Ot[e >> 24 & 255] + "-" + Ot[t & 63 | 128] + Ot[t >> 8 & 255] + "-" + Ot[t >> 16 & 255] + Ot[t >> 24 & 255] + Ot[n & 255] + Ot[n >> 8 & 255] + Ot[n >> 16 & 255] + Ot[n >> 24 & 255]).toLowerCase();
}
function yt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function lh(r, e) {
  return (r % e + e) % e;
}
function qm(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function $m(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Br(r, e, t) {
  return (1 - t) * r + t * e;
}
function Zm(r, e, t, n) {
  return Br(r, e, 1 - Math.exp(-t * n));
}
function Km(r, e = 1) {
  return e - Math.abs(lh(r, e * 2) - e);
}
function Jm(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function jm(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function Qm(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function eg(r, e) {
  return r + Math.random() * (e - r);
}
function tg(r) {
  return r * (0.5 - Math.random());
}
function ng(r) {
  r !== void 0 && (eu = r);
  let e = eu += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function ig(r) {
  return r * ts;
}
function sg(r) {
  return r * Qs;
}
function Fl(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Kf(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Ma(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function rg(r, e, t, n, i) {
  const s = Math.cos, o = Math.sin, a = s(t / 2), c = o(t / 2), l = s((e + n) / 2), h = o((e + n) / 2), u = s((e - n) / 2), d = o((e - n) / 2), f = s((n - e) / 2), m = o((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(a * h, c * u, c * d, a * l);
      break;
    case "YZY":
      r.set(c * d, a * h, c * u, a * l);
      break;
    case "ZXZ":
      r.set(c * u, c * d, a * h, a * l);
      break;
    case "XZX":
      r.set(a * h, c * m, c * f, a * l);
      break;
    case "YXY":
      r.set(c * f, a * h, c * m, a * l);
      break;
    case "ZYZ":
      r.set(c * m, c * f, a * h, a * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function $t(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ge(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Jf = {
  DEG2RAD: ts,
  RAD2DEG: Qs,
  generateUUID: tn,
  clamp: yt,
  euclideanModulo: lh,
  mapLinear: qm,
  inverseLerp: $m,
  lerp: Br,
  damp: Zm,
  pingpong: Km,
  smoothstep: Jm,
  smootherstep: jm,
  randInt: Qm,
  randFloat: eg,
  randFloatSpread: tg,
  seededRandom: ng,
  degToRad: ig,
  radToDeg: sg,
  isPowerOfTwo: Fl,
  ceilPowerOfTwo: Kf,
  floorPowerOfTwo: Ma,
  setQuaternionFromProperEuler: rg,
  normalize: Ge,
  denormalize: $t
};
class j {
  constructor(e = 0, t = 0) {
    j.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * i + e.x, this.y = s * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Xe {
  constructor(e, t, n, i, s, o, a, c, l) {
    Xe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, o, a, c, l);
  }
  set(e, t, n, i, s, o, a, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], m = n[8], _ = i[0], g = i[3], p = i[6], v = i[1], x = i[4], y = i[7], S = i[2], E = i[5], T = i[8];
    return s[0] = o * _ + a * v + c * S, s[3] = o * g + a * x + c * E, s[6] = o * p + a * y + c * T, s[1] = l * _ + h * v + u * S, s[4] = l * g + h * x + u * E, s[7] = l * p + h * y + u * T, s[2] = d * _ + f * v + m * S, s[5] = d * g + f * x + m * E, s[8] = d * p + f * y + m * T, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
    return t * o * h - t * a * l - n * s * h + n * a * c + i * s * l - i * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = h * o - a * l, d = a * c - h * s, f = l * s - o * c, m = t * u + n * d + i * f;
    if (m === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return e[0] = u * _, e[1] = (i * l - h * n) * _, e[2] = (a * n - i * o) * _, e[3] = d * _, e[4] = (h * t - i * c) * _, e[5] = (i * s - a * t) * _, e[6] = f * _, e[7] = (n * c - l * t) * _, e[8] = (o * t - n * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, o, a) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + e,
      -i * l,
      i * c,
      -i * (-l * o + c * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    return this.premultiply(dc.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(dc.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(dc.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const dc = /* @__PURE__ */ new Xe();
function jf(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1;
}
const og = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function Gs(r, e) {
  return new og[r](e);
}
function $r(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
const tu = {};
function zr(r) {
  r in tu || (tu[r] = !0, console.warn(r));
}
function qs(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function fc(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const ag = /* @__PURE__ */ new Xe().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), cg = /* @__PURE__ */ new Xe().fromArray([
  1.2249401,
  -0.0420569,
  -0.0196376,
  -0.2249404,
  1.0420571,
  -0.0786361,
  1e-7,
  0,
  1.0982735
]);
function lg(r) {
  return r.convertSRGBToLinear().applyMatrix3(cg);
}
function hg(r) {
  return r.applyMatrix3(ag).convertLinearToSRGB();
}
const ug = {
  [fn]: (r) => r,
  [De]: (r) => r.convertSRGBToLinear(),
  [ch]: lg
}, dg = {
  [fn]: (r) => r,
  [De]: (r) => r.convertLinearToSRGB(),
  [ch]: hg
}, an = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(r) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !r;
  },
  get workingColorSpace() {
    return fn;
  },
  set workingColorSpace(r) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = ug[e], i = dg[t];
    if (n === void 0 || i === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this.workingColorSpace);
  }
};
let gs;
class hh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      gs === void 0 && (gs = $r("canvas")), gs.width = e.width, gs.height = e.height;
      const n = gs.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = gs;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = $r("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = qs(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(qs(t[n] / 255) * 255) : t[n] = qs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let fg = 0;
class ji {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: fg++ }), this.uuid = tn(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? s.push(pc(i[o].image)) : s.push(pc(i[o]));
      } else
        s = pc(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function pc(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? hh.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let pg = 0;
class ft extends ai {
  constructor(e = ft.DEFAULT_IMAGE, t = ft.DEFAULT_MAPPING, n = Dt, i = Dt, s = lt, o = Bn, a = jt, c = ni, l = ft.DEFAULT_ANISOTROPY, h = Ti) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: pg++ }), this.uuid = tn(), this.name = "", this.source = new ji(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new j(0, 0), this.repeat = new j(1, 1), this.center = new j(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Xe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === Ei ? De : Ti), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Ra)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case si:
          e.x = e.x - Math.floor(e.x);
          break;
        case Dt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Js:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case si:
          e.y = e.y - Math.floor(e.y);
          break;
        case Dt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Js:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === De ? Ei : ah;
  }
  set encoding(e) {
    zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Ei ? De : Ti;
  }
}
ft.DEFAULT_IMAGE = null;
ft.DEFAULT_MAPPING = Ra;
ft.DEFAULT_ANISOTROPY = 1;
class it {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    it.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], m = c[9], _ = c[2], g = c[6], p = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(m - g) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(m + g) < 0.1 && Math.abs(l + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (l + 1) / 2, y = (f + 1) / 2, S = (p + 1) / 2, E = (h + d) / 4, T = (u + _) / 4, R = (m + g) / 4;
      return x > y && x > S ? x < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), i = E / n, s = T / n) : y > S ? y < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(y), n = E / i, s = R / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(S), n = T / s, i = R / s), this.set(n, i, s, t), this;
    }
    let v = Math.sqrt((g - m) * (g - m) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(v) < 1e-3 && (v = 1), this.x = (g - m) / v, this.y = (u - _) / v, this.z = (d - h) / v, this.w = Math.acos((l + f + p - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Qf extends ai {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new it(0, 0, e, t), this.scissorTest = !1, this.viewport = new it(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Ei ? De : Ti), this.texture = new ft(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : lt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new ji(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class pn extends Qf {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Ia extends ft {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = _t, this.minFilter = _t, this.wrapR = Dt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class mg extends pn {
  constructor(e = 1, t = 1, n = 1) {
    super(e, t), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new Ia(null, e, t, n), this.texture.isRenderTargetTexture = !0;
  }
}
class uh extends ft {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = _t, this.minFilter = _t, this.wrapR = Dt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class gg extends pn {
  constructor(e = 1, t = 1, n = 1) {
    super(e, t), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new uh(null, e, t, n), this.texture.isRenderTargetTexture = !0;
  }
}
class _g extends pn {
  constructor(e = 1, t = 1, n = 1, i = {}) {
    super(e, t, i), this.isWebGLMultipleRenderTargets = !0;
    const s = this.texture;
    this.texture = [];
    for (let o = 0; o < n; o++)
      this.texture[o] = s.clone(), this.texture[o].isRenderTargetTexture = !0;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, s = this.texture.length; i < s; i++)
        this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  copy(e) {
    this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.texture.length = 0;
    for (let t = 0, n = e.texture.length; t < n; t++)
      this.texture[t] = e.texture[t].clone(), this.texture[t].isRenderTargetTexture = !0;
    return this;
  }
}
class Ft {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, o, a) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[o + 0], f = s[o + 1], m = s[o + 2], _ = s[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = f, e[t + 2] = m, e[t + 3] = _;
      return;
    }
    if (u !== _ || c !== d || l !== f || h !== m) {
      let g = 1 - a;
      const p = c * d + l * f + h * m + u * _, v = p >= 0 ? 1 : -1, x = 1 - p * p;
      if (x > Number.EPSILON) {
        const S = Math.sqrt(x), E = Math.atan2(S, p * v);
        g = Math.sin(g * E) / S, a = Math.sin(a * E) / S;
      }
      const y = a * v;
      if (c = c * g + d * y, l = l * g + f * y, h = h * g + m * y, u = u * g + _ * y, g === 1 - a) {
        const S = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= S, l *= S, h *= S, u *= S;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[o], d = s[o + 1], f = s[o + 2], m = s[o + 3];
    return e[t] = a * m + h * u + c * f - l * d, e[t + 1] = c * m + h * d + l * u - a * f, e[t + 2] = l * m + h * f + a * d - c * u, e[t + 3] = h * m - a * u - c * d - l * f, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), u = a(s / 2), d = c(n / 2), f = c(i / 2), m = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "YXZ":
        this._x = d * h * u + l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u + d * f * m;
        break;
      case "ZXY":
        this._x = d * h * u - l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "ZYX":
        this._x = d * h * u - l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u + d * f * m;
        break;
      case "YZX":
        this._x = d * h * u + l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "XZY":
        this._x = d * h * u - l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u + d * f * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - c) * f, this._y = (s - l) * f, this._z = (o - i) * f;
    } else if (n > a && n > u) {
      const f = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - c) / f, this._x = 0.25 * f, this._y = (i + o) / f, this._z = (s + l) / f;
    } else if (a > u) {
      const f = 2 * Math.sqrt(1 + a - n - u);
      this._w = (s - l) / f, this._x = (i + o) / f, this._y = 0.25 * f, this._z = (c + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / f, this._x = (s + l) / f, this._y = (c + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(yt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * a + i * l - s * c, this._y = i * h + o * c + s * a - n * l, this._z = s * h + o * l + n * c - i * a, this._w = o * h - n * a - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class w {
  constructor(e = 0, t = 0, n = 0) {
    w.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(nu.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(nu.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * i - a * n, h = c * n + a * t - s * i, u = c * i + s * n - o * t, d = -s * t - o * n - a * i;
    return this.x = l * c + d * -s + h * -a - u * -o, this.y = h * c + d * -o + u * -s - l * -a, this.z = u * c + d * -a + l * -o - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = i * c - s * a, this.y = s * o - n * c, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return mc.copy(this).projectOnVector(e), this.sub(mc);
  }
  reflect(e) {
    return this.sub(mc.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const mc = /* @__PURE__ */ new w(), nu = /* @__PURE__ */ new Ft();
class bn {
  constructor(e = new w(1 / 0, 1 / 0, 1 / 0), t = new w(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Wn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Wn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Wn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if (e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0)
      e.boundingBox === null && e.computeBoundingBox(), _s.copy(e.boundingBox), _s.applyMatrix4(e.matrixWorld), this.union(_s);
    else {
      const i = e.geometry;
      if (i !== void 0)
        if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
          const s = i.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            Wn.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(Wn);
        } else
          i.boundingBox === null && i.computeBoundingBox(), _s.copy(i.boundingBox), _s.applyMatrix4(e.matrixWorld), this.union(_s);
    }
    const n = e.children;
    for (let i = 0, s = n.length; i < s; i++)
      this.expandByObject(n[i], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Wn), Wn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(yr), yo.subVectors(this.max, yr), ys.subVectors(e.a, yr), xs.subVectors(e.b, yr), vs.subVectors(e.c, yr), di.subVectors(xs, ys), fi.subVectors(vs, xs), Di.subVectors(ys, vs);
    let t = [
      0,
      -di.z,
      di.y,
      0,
      -fi.z,
      fi.y,
      0,
      -Di.z,
      Di.y,
      di.z,
      0,
      -di.x,
      fi.z,
      0,
      -fi.x,
      Di.z,
      0,
      -Di.x,
      -di.y,
      di.x,
      0,
      -fi.y,
      fi.x,
      0,
      -Di.y,
      Di.x,
      0
    ];
    return !gc(t, ys, xs, vs, yo) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !gc(t, ys, xs, vs, yo)) ? !1 : (xo.crossVectors(di, fi), t = [xo.x, xo.y, xo.z], gc(t, ys, xs, vs, yo));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Wn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Wn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Gn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Gn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Gn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Gn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Gn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Gn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Gn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Gn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Gn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Gn = [
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w()
], Wn = /* @__PURE__ */ new w(), _s = /* @__PURE__ */ new bn(), ys = /* @__PURE__ */ new w(), xs = /* @__PURE__ */ new w(), vs = /* @__PURE__ */ new w(), di = /* @__PURE__ */ new w(), fi = /* @__PURE__ */ new w(), Di = /* @__PURE__ */ new w(), yr = /* @__PURE__ */ new w(), yo = /* @__PURE__ */ new w(), xo = /* @__PURE__ */ new w(), Oi = /* @__PURE__ */ new w();
function gc(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    Oi.fromArray(r, s);
    const a = i.x * Math.abs(Oi.x) + i.y * Math.abs(Oi.y) + i.z * Math.abs(Oi.z), c = e.dot(Oi), l = t.dot(Oi), h = n.dot(Oi);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const yg = /* @__PURE__ */ new bn(), xr = /* @__PURE__ */ new w(), _c = /* @__PURE__ */ new w();
class gn {
  constructor(e = new w(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : yg.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    xr.subVectors(e, this.center);
    const t = xr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(xr, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (_c.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(xr.copy(e.center).add(_c)), this.expandByPoint(xr.copy(e.center).sub(_c))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xn = /* @__PURE__ */ new w(), yc = /* @__PURE__ */ new w(), vo = /* @__PURE__ */ new w(), pi = /* @__PURE__ */ new w(), xc = /* @__PURE__ */ new w(), Mo = /* @__PURE__ */ new w(), vc = /* @__PURE__ */ new w();
class hr {
  constructor(e = new w(), t = new w(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Xn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Xn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Xn.copy(this.origin).addScaledVector(this.direction, t), Xn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    yc.copy(e).add(t).multiplyScalar(0.5), vo.copy(t).sub(e).normalize(), pi.copy(this.origin).sub(yc);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(vo), a = pi.dot(this.direction), c = -pi.dot(vo), l = pi.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, f, m;
    if (h > 0)
      if (u = o * c - a, d = o * a - c, m = s * h, u >= 0)
        if (d >= -m)
          if (d <= m) {
            const _ = 1 / h;
            u *= _, d *= _, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
      else
        d <= -m ? (u = Math.max(0, -(-o * s + a)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), f = -u * u + d * (d + 2 * c) + l) : d <= m ? (u = 0, d = Math.min(Math.max(-s, -c), s), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * s + a)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), f = -u * u + d * (d + 2 * c) + l);
    else
      d = o > 0 ? -s : s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(yc).addScaledVector(vo, d), f;
  }
  intersectSphere(e, t) {
    Xn.subVectors(e.center, this.origin);
    const n = Xn.dot(this.direction), i = Xn.dot(Xn) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const o = Math.sqrt(s - i), a = n - o, c = n + o;
    return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, a, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || s > i || ((s > n || isNaN(n)) && (n = s), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Xn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    xc.subVectors(t, e), Mo.subVectors(n, e), vc.crossVectors(xc, Mo);
    let o = this.direction.dot(vc), a;
    if (o > 0) {
      if (i)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    pi.subVectors(this.origin, e);
    const c = a * this.direction.dot(Mo.crossVectors(pi, Mo));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(xc.cross(pi));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * pi.dot(vc);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ie {
  constructor(e, t, n, i, s, o, a, c, l, h, u, d, f, m, _, g) {
    Ie.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, o, a, c, l, h, u, d, f, m, _, g);
  }
  set(e, t, n, i, s, o, a, c, l, h, u, d, f, m, _, g) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = o, p[9] = a, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = m, p[11] = _, p[15] = g, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ie().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Ms.setFromMatrixColumn(e, 0).length(), s = 1 / Ms.setFromMatrixColumn(e, 1).length(), o = 1 / Ms.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * h, f = o * u, m = a * h, _ = a * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = f + m * l, t[5] = d - _ * l, t[9] = -a * c, t[2] = _ - d * l, t[6] = m + f * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const d = c * h, f = c * u, m = l * h, _ = l * u;
      t[0] = d + _ * a, t[4] = m * a - f, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = f * a - m, t[6] = _ + d * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const d = c * h, f = c * u, m = l * h, _ = l * u;
      t[0] = d - _ * a, t[4] = -o * u, t[8] = m + f * a, t[1] = f + m * a, t[5] = o * h, t[9] = _ - d * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const d = o * h, f = o * u, m = a * h, _ = a * u;
      t[0] = c * h, t[4] = m * l - f, t[8] = d * l + _, t[1] = c * u, t[5] = _ * l + d, t[9] = f * l - m, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const d = o * c, f = o * l, m = a * c, _ = a * l;
      t[0] = c * h, t[4] = _ - d * u, t[8] = m * u + f, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = f * u + m, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = o * c, f = o * l, m = a * c, _ = a * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + _, t[5] = o * h, t[9] = f * u - m, t[2] = m * u - f, t[6] = a * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(xg, e, vg);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Kt.subVectors(e, t), Kt.lengthSq() === 0 && (Kt.z = 1), Kt.normalize(), mi.crossVectors(n, Kt), mi.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Kt.x += 1e-4 : Kt.z += 1e-4, Kt.normalize(), mi.crossVectors(n, Kt)), mi.normalize(), So.crossVectors(Kt, mi), i[0] = mi.x, i[4] = So.x, i[8] = Kt.x, i[1] = mi.y, i[5] = So.y, i[9] = Kt.y, i[2] = mi.z, i[6] = So.z, i[10] = Kt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], m = n[2], _ = n[6], g = n[10], p = n[14], v = n[3], x = n[7], y = n[11], S = n[15], E = i[0], T = i[4], R = i[8], M = i[12], b = i[1], U = i[5], k = i[9], D = i[13], F = i[2], N = i[6], K = i[10], W = i[14], Y = i[3], ee = i[7], Q = i[11], z = i[15];
    return s[0] = o * E + a * b + c * F + l * Y, s[4] = o * T + a * U + c * N + l * ee, s[8] = o * R + a * k + c * K + l * Q, s[12] = o * M + a * D + c * W + l * z, s[1] = h * E + u * b + d * F + f * Y, s[5] = h * T + u * U + d * N + f * ee, s[9] = h * R + u * k + d * K + f * Q, s[13] = h * M + u * D + d * W + f * z, s[2] = m * E + _ * b + g * F + p * Y, s[6] = m * T + _ * U + g * N + p * ee, s[10] = m * R + _ * k + g * K + p * Q, s[14] = m * M + _ * D + g * W + p * z, s[3] = v * E + x * b + y * F + S * Y, s[7] = v * T + x * U + y * N + S * ee, s[11] = v * R + x * k + y * K + S * Q, s[15] = v * M + x * D + y * W + S * z, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], f = e[14], m = e[3], _ = e[7], g = e[11], p = e[15];
    return m * (+s * c * u - i * l * u - s * a * d + n * l * d + i * a * f - n * c * f) + _ * (+t * c * f - t * l * d + s * o * d - i * o * f + i * l * h - s * c * h) + g * (+t * l * u - t * a * f - s * o * u + n * o * f + s * a * h - n * l * h) + p * (-i * a * h - t * c * u + t * a * d + i * o * u - n * o * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], f = e[11], m = e[12], _ = e[13], g = e[14], p = e[15], v = u * g * l - _ * d * l + _ * c * f - a * g * f - u * c * p + a * d * p, x = m * d * l - h * g * l - m * c * f + o * g * f + h * c * p - o * d * p, y = h * _ * l - m * u * l + m * a * f - o * _ * f - h * a * p + o * u * p, S = m * u * c - h * _ * c - m * a * d + o * _ * d + h * a * g - o * u * g, E = t * v + n * x + i * y + s * S;
    if (E === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const T = 1 / E;
    return e[0] = v * T, e[1] = (_ * d * s - u * g * s - _ * i * f + n * g * f + u * i * p - n * d * p) * T, e[2] = (a * g * s - _ * c * s + _ * i * l - n * g * l - a * i * p + n * c * p) * T, e[3] = (u * c * s - a * d * s - u * i * l + n * d * l + a * i * f - n * c * f) * T, e[4] = x * T, e[5] = (h * g * s - m * d * s + m * i * f - t * g * f - h * i * p + t * d * p) * T, e[6] = (m * c * s - o * g * s - m * i * l + t * g * l + o * i * p - t * c * p) * T, e[7] = (o * d * s - h * c * s + h * i * l - t * d * l - o * i * f + t * c * f) * T, e[8] = y * T, e[9] = (m * u * s - h * _ * s - m * n * f + t * _ * f + h * n * p - t * u * p) * T, e[10] = (o * _ * s - m * a * s + m * n * l - t * _ * l - o * n * p + t * a * p) * T, e[11] = (h * a * s - o * u * s - h * n * l + t * u * l + o * n * f - t * a * f) * T, e[12] = S * T, e[13] = (h * _ * i - m * u * i + m * n * d - t * _ * d - h * n * g + t * u * g) * T, e[14] = (m * a * i - o * _ * i - m * n * c + t * _ * c + o * n * g - t * a * g) * T, e[15] = (o * u * i - h * a * i + h * n * c - t * u * c - o * n * d + t * a * d) * T, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, h = s * a;
    return this.set(
      l * o + n,
      l * a - i * c,
      l * c + i * a,
      0,
      l * a + i * c,
      h * a + n,
      h * c - i * o,
      0,
      l * c - i * a,
      h * c + i * o,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, h = o + o, u = a + a, d = s * l, f = s * h, m = s * u, _ = o * h, g = o * u, p = a * u, v = c * l, x = c * h, y = c * u, S = n.x, E = n.y, T = n.z;
    return i[0] = (1 - (_ + p)) * S, i[1] = (f + y) * S, i[2] = (m - x) * S, i[3] = 0, i[4] = (f - y) * E, i[5] = (1 - (d + p)) * E, i[6] = (g + v) * E, i[7] = 0, i[8] = (m + x) * T, i[9] = (g - v) * T, i[10] = (1 - (d + _)) * T, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Ms.set(i[0], i[1], i[2]).length();
    const o = Ms.set(i[4], i[5], i[6]).length(), a = Ms.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], _n.copy(this);
    const l = 1 / s, h = 1 / o, u = 1 / a;
    return _n.elements[0] *= l, _n.elements[1] *= l, _n.elements[2] *= l, _n.elements[4] *= h, _n.elements[5] *= h, _n.elements[6] *= h, _n.elements[8] *= u, _n.elements[9] *= u, _n.elements[10] *= u, t.setFromRotationMatrix(_n), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, s, o, a = On) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let f, m;
    if (a === On)
      f = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    else if (a === qr)
      f = -o / (o - s), m = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o, a = On) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - s), d = (t + e) * l, f = (n + i) * h;
    let m, _;
    if (a === On)
      m = (o + s) * u, _ = -2 * u;
    else if (a === qr)
      m = s * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -f, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Ms = /* @__PURE__ */ new w(), _n = /* @__PURE__ */ new Ie(), xg = /* @__PURE__ */ new w(0, 0, 0), vg = /* @__PURE__ */ new w(1, 1, 1), mi = /* @__PURE__ */ new w(), So = /* @__PURE__ */ new w(), Kt = /* @__PURE__ */ new w(), iu = /* @__PURE__ */ new Ie(), su = /* @__PURE__ */ new Ft();
class oo {
  constructor(e = 0, t = 0, n = 0, i = oo.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], o = i[4], a = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(yt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-yt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(yt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-yt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(yt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-yt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return iu.makeRotationFromQuaternion(e), this.setFromRotationMatrix(iu, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return su.setFromEuler(this), this.setFromQuaternion(su, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
oo.DEFAULT_ORDER = "XYZ";
class Ua {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Mg = 0;
const ru = /* @__PURE__ */ new w(), Ss = /* @__PURE__ */ new Ft(), Yn = /* @__PURE__ */ new Ie(), Eo = /* @__PURE__ */ new w(), vr = /* @__PURE__ */ new w(), Sg = /* @__PURE__ */ new w(), Eg = /* @__PURE__ */ new Ft(), ou = /* @__PURE__ */ new w(1, 0, 0), au = /* @__PURE__ */ new w(0, 1, 0), cu = /* @__PURE__ */ new w(0, 0, 1), Tg = { type: "added" }, lu = { type: "removed" };
class ze extends ai {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Mg++ }), this.uuid = tn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ze.DEFAULT_UP.clone();
    const e = new w(), t = new oo(), n = new Ft(), i = new w(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ie()
      },
      normalMatrix: {
        value: new Xe()
      }
    }), this.matrix = new Ie(), this.matrixWorld = new Ie(), this.matrixAutoUpdate = ze.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Ua(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ss.setFromAxisAngle(e, t), this.quaternion.multiply(Ss), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ss.setFromAxisAngle(e, t), this.quaternion.premultiply(Ss), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ou, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(au, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(cu, e);
  }
  translateOnAxis(e, t) {
    return ru.copy(e).applyQuaternion(this.quaternion), this.position.add(ru.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(ou, e);
  }
  translateY(e) {
    return this.translateOnAxis(au, e);
  }
  translateZ(e) {
    return this.translateOnAxis(cu, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Yn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Eo.copy(e) : Eo.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), vr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Yn.lookAt(vr, Eo, this.up) : Yn.lookAt(Eo, vr, this.up), this.quaternion.setFromRotationMatrix(Yn), i && (Yn.extractRotation(i.matrixWorld), Ss.setFromRotationMatrix(Yn), this.quaternion.premultiply(Ss.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Tg)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(lu)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(lu);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Yn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Yn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Yn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(vr, e, Sg), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(vr, Eg, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) {
        const a = i[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
        i.material = a;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), f = o(e.animations), m = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), m.length > 0 && (n.nodes = m);
    }
    return n.object = i, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ze.DEFAULT_UP = /* @__PURE__ */ new w(0, 1, 0);
ze.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const yn = /* @__PURE__ */ new w(), qn = /* @__PURE__ */ new w(), Mc = /* @__PURE__ */ new w(), $n = /* @__PURE__ */ new w(), Es = /* @__PURE__ */ new w(), Ts = /* @__PURE__ */ new w(), hu = /* @__PURE__ */ new w(), Sc = /* @__PURE__ */ new w(), Ec = /* @__PURE__ */ new w(), Tc = /* @__PURE__ */ new w();
let To = !1;
class qt {
  constructor(e = new w(), t = new w(), n = new w()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), yn.subVectors(e, t), i.cross(yn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    yn.subVectors(i, t), qn.subVectors(n, t), Mc.subVectors(e, t);
    const o = yn.dot(yn), a = yn.dot(qn), c = yn.dot(Mc), l = qn.dot(qn), h = qn.dot(Mc), u = o * l - a * a;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, f = (l * c - a * h) * d, m = (o * h - a * c) * d;
    return s.set(1 - f - m, m, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, $n), $n.x >= 0 && $n.y >= 0 && $n.x + $n.y <= 1;
  }
  static getUV(e, t, n, i, s, o, a, c) {
    return To === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), To = !0), this.getInterpolation(e, t, n, i, s, o, a, c);
  }
  static getInterpolation(e, t, n, i, s, o, a, c) {
    return this.getBarycoord(e, t, n, i, $n), c.setScalar(0), c.addScaledVector(s, $n.x), c.addScaledVector(o, $n.y), c.addScaledVector(a, $n.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return yn.subVectors(n, t), qn.subVectors(e, t), yn.cross(qn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return yn.subVectors(this.c, this.b), qn.subVectors(this.a, this.b), yn.cross(qn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return qt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return qt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return To === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), To = !0), qt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  getInterpolation(e, t, n, i, s) {
    return qt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return qt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return qt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let o, a;
    Es.subVectors(i, n), Ts.subVectors(s, n), Sc.subVectors(e, n);
    const c = Es.dot(Sc), l = Ts.dot(Sc);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Ec.subVectors(e, i);
    const h = Es.dot(Ec), u = Ts.dot(Ec);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(Es, o);
    Tc.subVectors(e, s);
    const f = Es.dot(Tc), m = Ts.dot(Tc);
    if (m >= 0 && f <= m)
      return t.copy(s);
    const _ = f * l - c * m;
    if (_ <= 0 && l >= 0 && m <= 0)
      return a = l / (l - m), t.copy(n).addScaledVector(Ts, a);
    const g = h * m - f * u;
    if (g <= 0 && u - h >= 0 && f - m >= 0)
      return hu.subVectors(s, i), a = (u - h) / (u - h + (f - m)), t.copy(i).addScaledVector(hu, a);
    const p = 1 / (g + _ + d);
    return o = _ * p, a = d * p, t.copy(n).addScaledVector(Es, o).addScaledVector(Ts, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let bg = 0;
class Rt extends ai {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: bg++ }), this.uuid = tn(), this.name = "", this.type = "Material", this.blending = es, this.side = Sn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Kl, this.blendDst = Jl, this.blendEquation = $i, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = ya, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = kf, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ma, this.stencilZFail = ma, this.stencilZPass = ma, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== es && (n.blending = this.blending), this.side !== Sn && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = this.alphaHash), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures), o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const ep = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, xn = { h: 0, s: 0, l: 0 }, bo = { h: 0, s: 0, l: 0 };
function bc(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class he {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = De) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, an.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = an.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, an.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = an.workingColorSpace) {
    if (e = lh(e, 1), t = yt(t, 0, 1), n = yt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = bc(o, s, e + 1 / 3), this.g = bc(o, s, e), this.b = bc(o, s, e - 1 / 3);
    }
    return an.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = De) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = De) {
    const n = ep[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = qs(e.r), this.g = qs(e.g), this.b = qs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = fc(e.r), this.g = fc(e.g), this.b = fc(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = De) {
    return an.fromWorkingColorSpace(Nt.copy(this), e), Math.round(yt(Nt.r * 255, 0, 255)) * 65536 + Math.round(yt(Nt.g * 255, 0, 255)) * 256 + Math.round(yt(Nt.b * 255, 0, 255));
  }
  getHexString(e = De) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = an.workingColorSpace) {
    an.fromWorkingColorSpace(Nt.copy(this), t);
    const n = Nt.r, i = Nt.g, s = Nt.b, o = Math.max(n, i, s), a = Math.min(n, i, s);
    let c, l;
    const h = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const u = o - a;
      switch (l = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = an.workingColorSpace) {
    return an.fromWorkingColorSpace(Nt.copy(this), t), e.r = Nt.r, e.g = Nt.g, e.b = Nt.b, e;
  }
  getStyle(e = De) {
    an.fromWorkingColorSpace(Nt.copy(this), e);
    const t = Nt.r, n = Nt.g, i = Nt.b;
    return e !== De ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(xn), xn.h += e, xn.s += t, xn.l += n, this.setHSL(xn.h, xn.s, xn.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(xn), e.getHSL(bo);
    const n = Br(xn.h, bo.h, t), i = Br(xn.s, bo.s, t), s = Br(xn.l, bo.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Nt = /* @__PURE__ */ new he();
he.NAMES = ep;
class en extends Rt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new he(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ro, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Jn = /* @__PURE__ */ Ag();
function Ag() {
  const r = new ArrayBuffer(4), e = new Float32Array(r), t = new Uint32Array(r), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const l = c - 127;
    l < -27 ? (n[c] = 0, n[c | 256] = 32768, i[c] = 24, i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14, n[c | 256] = 1024 >> -l - 14 | 32768, i[c] = -l - 1, i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10, n[c | 256] = l + 15 << 10 | 32768, i[c] = 13, i[c | 256] = 13) : l < 128 ? (n[c] = 31744, n[c | 256] = 64512, i[c] = 24, i[c | 256] = 24) : (n[c] = 31744, n[c | 256] = 64512, i[c] = 13, i[c | 256] = 13);
  }
  const s = new Uint32Array(2048), o = new Uint32Array(64), a = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let l = c << 13, h = 0;
    for (; (l & 8388608) === 0; )
      l <<= 1, h -= 8388608;
    l &= -8388609, h += 947912704, s[c] = l | h;
  }
  for (let c = 1024; c < 2048; ++c)
    s[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c)
    o[c] = c << 23;
  o[31] = 1199570944, o[32] = 2147483648;
  for (let c = 33; c < 63; ++c)
    o[c] = 2147483648 + (c - 32 << 23);
  o[63] = 3347054592;
  for (let c = 1; c < 64; ++c)
    c !== 32 && (a[c] = 1024);
  return {
    floatView: e,
    uint32View: t,
    baseTable: n,
    shiftTable: i,
    mantissaTable: s,
    exponentTable: o,
    offsetTable: a
  };
}
function Yt(r) {
  Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), r = yt(r, -65504, 65504), Jn.floatView[0] = r;
  const e = Jn.uint32View[0], t = e >> 23 & 511;
  return Jn.baseTable[t] + ((e & 8388607) >> Jn.shiftTable[t]);
}
function Or(r) {
  const e = r >> 10;
  return Jn.uint32View[0] = Jn.mantissaTable[Jn.offsetTable[e] + (r & 1023)] + Jn.exponentTable[e], Jn.floatView[0];
}
const Nr = {
  toHalfFloat: Yt,
  fromHalfFloat: Or
}, At = /* @__PURE__ */ new w(), Ao = /* @__PURE__ */ new j();
class rt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Yr, this.updateRange = { offset: 0, count: -1 }, this.gpuType = Qt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ao.fromBufferAttribute(this, t), Ao.applyMatrix3(e), this.setXY(t, Ao.x, Ao.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        At.fromBufferAttribute(this, t), At.applyMatrix3(e), this.setXYZ(t, At.x, At.y, At.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      At.fromBufferAttribute(this, t), At.applyMatrix4(e), this.setXYZ(t, At.x, At.y, At.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      At.fromBufferAttribute(this, t), At.applyNormalMatrix(e), this.setXYZ(t, At.x, At.y, At.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      At.fromBufferAttribute(this, t), At.transformDirection(e), this.setXYZ(t, At.x, At.y, At.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = $t(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ge(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array), s = Ge(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Yr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class wg extends rt {
  constructor(e, t, n) {
    super(new Int8Array(e), t, n);
  }
}
class Rg extends rt {
  constructor(e, t, n) {
    super(new Uint8Array(e), t, n);
  }
}
class Cg extends rt {
  constructor(e, t, n) {
    super(new Uint8ClampedArray(e), t, n);
  }
}
class Lg extends rt {
  constructor(e, t, n) {
    super(new Int16Array(e), t, n);
  }
}
class dh extends rt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Pg extends rt {
  constructor(e, t, n) {
    super(new Int32Array(e), t, n);
  }
}
class fh extends rt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ig extends rt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n), this.isFloat16BufferAttribute = !0;
  }
  getX(e) {
    let t = Or(this.array[e * this.itemSize]);
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize] = Yt(t), this;
  }
  getY(e) {
    let t = Or(this.array[e * this.itemSize + 1]);
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 1] = Yt(t), this;
  }
  getZ(e) {
    let t = Or(this.array[e * this.itemSize + 2]);
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 2] = Yt(t), this;
  }
  getW(e) {
    let t = Or(this.array[e * this.itemSize + 3]);
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 3] = Yt(t), this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array)), this.array[e + 0] = Yt(t), this.array[e + 1] = Yt(n), this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array)), this.array[e + 0] = Yt(t), this.array[e + 1] = Yt(n), this.array[e + 2] = Yt(i), this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array), s = Ge(s, this.array)), this.array[e + 0] = Yt(t), this.array[e + 1] = Yt(n), this.array[e + 2] = Yt(i), this.array[e + 3] = Yt(s), this;
  }
}
class xe extends rt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
class Ug extends rt {
  constructor(e, t, n) {
    super(new Float64Array(e), t, n);
  }
}
let Dg = 0;
const rn = /* @__PURE__ */ new Ie(), Ac = /* @__PURE__ */ new ze(), bs = /* @__PURE__ */ new w(), Jt = /* @__PURE__ */ new bn(), Mr = /* @__PURE__ */ new bn(), Pt = /* @__PURE__ */ new w();
class Ye extends ai {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Dg++ }), this.uuid = tn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (jf(e) ? fh : dh)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Xe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return rn.makeRotationFromQuaternion(e), this.applyMatrix4(rn), this;
  }
  rotateX(e) {
    return rn.makeRotationX(e), this.applyMatrix4(rn), this;
  }
  rotateY(e) {
    return rn.makeRotationY(e), this.applyMatrix4(rn), this;
  }
  rotateZ(e) {
    return rn.makeRotationZ(e), this.applyMatrix4(rn), this;
  }
  translate(e, t, n) {
    return rn.makeTranslation(e, t, n), this.applyMatrix4(rn), this;
  }
  scale(e, t, n) {
    return rn.makeScale(e, t, n), this.applyMatrix4(rn), this;
  }
  lookAt(e) {
    return Ac.lookAt(e), Ac.updateMatrix(), this.applyMatrix4(Ac.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(bs).negate(), this.translate(bs.x, bs.y, bs.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new xe(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new bn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new w(-1 / 0, -1 / 0, -1 / 0),
        new w(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Jt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Pt.addVectors(this.boundingBox.min, Jt.min), this.boundingBox.expandByPoint(Pt), Pt.addVectors(this.boundingBox.max, Jt.max), this.boundingBox.expandByPoint(Pt)) : (this.boundingBox.expandByPoint(Jt.min), this.boundingBox.expandByPoint(Jt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new gn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new w(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Jt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Mr.setFromBufferAttribute(a), this.morphTargetsRelative ? (Pt.addVectors(Jt.min, Mr.min), Jt.expandByPoint(Pt), Pt.addVectors(Jt.max, Mr.max), Jt.expandByPoint(Pt)) : (Jt.expandByPoint(Mr.min), Jt.expandByPoint(Mr.max));
        }
      Jt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        Pt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Pt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            Pt.fromBufferAttribute(a, l), c && (bs.fromBufferAttribute(e, l), Pt.add(bs)), i = Math.max(i, n.distanceToSquared(Pt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, o = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new rt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let b = 0; b < a; b++)
      l[b] = new w(), h[b] = new w();
    const u = new w(), d = new w(), f = new w(), m = new j(), _ = new j(), g = new j(), p = new w(), v = new w();
    function x(b, U, k) {
      u.fromArray(i, b * 3), d.fromArray(i, U * 3), f.fromArray(i, k * 3), m.fromArray(o, b * 2), _.fromArray(o, U * 2), g.fromArray(o, k * 2), d.sub(u), f.sub(u), _.sub(m), g.sub(m);
      const D = 1 / (_.x * g.y - g.x * _.y);
      !isFinite(D) || (p.copy(d).multiplyScalar(g.y).addScaledVector(f, -_.y).multiplyScalar(D), v.copy(f).multiplyScalar(_.x).addScaledVector(d, -g.x).multiplyScalar(D), l[b].add(p), l[U].add(p), l[k].add(p), h[b].add(v), h[U].add(v), h[k].add(v));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: n.length
    }]);
    for (let b = 0, U = y.length; b < U; ++b) {
      const k = y[b], D = k.start, F = k.count;
      for (let N = D, K = D + F; N < K; N += 3)
        x(
          n[N + 0],
          n[N + 1],
          n[N + 2]
        );
    }
    const S = new w(), E = new w(), T = new w(), R = new w();
    function M(b) {
      T.fromArray(s, b * 3), R.copy(T);
      const U = l[b];
      S.copy(U), S.sub(T.multiplyScalar(T.dot(U))).normalize(), E.crossVectors(R, U);
      const D = E.dot(h[b]) < 0 ? -1 : 1;
      c[b * 4] = S.x, c[b * 4 + 1] = S.y, c[b * 4 + 2] = S.z, c[b * 4 + 3] = D;
    }
    for (let b = 0, U = y.length; b < U; ++b) {
      const k = y[b], D = k.start, F = k.count;
      for (let N = D, K = D + F; N < K; N += 3)
        M(n[N + 0]), M(n[N + 1]), M(n[N + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new rt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, f = n.count; d < f; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new w(), s = new w(), o = new w(), a = new w(), c = new w(), l = new w(), h = new w(), u = new w();
      if (e)
        for (let d = 0, f = e.count; d < f; d += 3) {
          const m = e.getX(d + 0), _ = e.getX(d + 1), g = e.getX(d + 2);
          i.fromBufferAttribute(t, m), s.fromBufferAttribute(t, _), o.fromBufferAttribute(t, g), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), a.fromBufferAttribute(n, m), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), a.add(h), c.add(h), l.add(h), n.setXYZ(m, a.x, a.y, a.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(g, l.x, l.y, l.z);
        }
      else
        for (let d = 0, f = t.count; d < f; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Pt.fromBufferAttribute(e, t), Pt.normalize(), e.setXYZ(t, Pt.x, Pt.y, Pt.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, h = a.itemSize, u = a.normalized, d = new l.constructor(c.length * h);
      let f = 0, m = 0;
      for (let _ = 0, g = c.length; _ < g; _++) {
        a.isInterleavedBufferAttribute ? f = c[_] * a.data.stride + a.offset : f = c[_] * h;
        for (let p = 0; p < h; p++)
          d[m++] = l[f++];
      }
      return new rt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ye(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], f = e(d, n);
        c.push(f);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, f = u.length; d < f; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const u = o[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const uu = /* @__PURE__ */ new Ie(), Ni = /* @__PURE__ */ new hr(), wo = /* @__PURE__ */ new gn(), du = /* @__PURE__ */ new w(), As = /* @__PURE__ */ new w(), ws = /* @__PURE__ */ new w(), Rs = /* @__PURE__ */ new w(), wc = /* @__PURE__ */ new w(), Ro = /* @__PURE__ */ new w(), Co = /* @__PURE__ */ new j(), Lo = /* @__PURE__ */ new j(), Po = /* @__PURE__ */ new j(), fu = /* @__PURE__ */ new w(), pu = /* @__PURE__ */ new w(), mu = /* @__PURE__ */ new w(), Io = /* @__PURE__ */ new w(), Uo = /* @__PURE__ */ new w();
class St extends ze {
  constructor(e = new Ye(), t = new en()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Ro.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = a[c], u = s[c];
        h !== 0 && (wc.fromBufferAttribute(u, e), o ? Ro.addScaledVector(wc, h) : Ro.addScaledVector(wc.sub(t), h));
      }
      t.add(Ro);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), wo.copy(n.boundingSphere), wo.applyMatrix4(s), Ni.copy(e.ray).recast(e.near), !(wo.containsPoint(Ni.origin) === !1 && (Ni.intersectSphere(wo, du) === null || Ni.origin.distanceToSquared(du) > (e.far - e.near) ** 2)) && (uu.copy(s).invert(), Ni.copy(e.ray).applyMatrix4(uu), !(n.boundingBox !== null && Ni.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Ni)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, o = this.material, a = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let m = 0, _ = d.length; m < _; m++) {
          const g = d[m], p = o[g.materialIndex], v = Math.max(g.start, f.start), x = Math.min(a.count, Math.min(g.start + g.count, f.start + f.count));
          for (let y = v, S = x; y < S; y += 3) {
            const E = a.getX(y), T = a.getX(y + 1), R = a.getX(y + 2);
            i = Do(this, p, e, n, l, h, u, E, T, R), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = g.materialIndex, t.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          const v = a.getX(g), x = a.getX(g + 1), y = a.getX(g + 2);
          i = Do(this, o, e, n, l, h, u, v, x, y), i && (i.faceIndex = Math.floor(g / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(o))
        for (let m = 0, _ = d.length; m < _; m++) {
          const g = d[m], p = o[g.materialIndex], v = Math.max(g.start, f.start), x = Math.min(c.count, Math.min(g.start + g.count, f.start + f.count));
          for (let y = v, S = x; y < S; y += 3) {
            const E = y, T = y + 1, R = y + 2;
            i = Do(this, p, e, n, l, h, u, E, T, R), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = g.materialIndex, t.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), _ = Math.min(c.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          const v = g, x = g + 1, y = g + 2;
          i = Do(this, o, e, n, l, h, u, v, x, y), i && (i.faceIndex = Math.floor(g / 3), t.push(i));
        }
      }
  }
}
function Og(r, e, t, n, i, s, o, a) {
  let c;
  if (e.side === Wt ? c = n.intersectTriangle(o, s, i, !0, a) : c = n.intersectTriangle(i, s, o, e.side === Sn, a), c === null)
    return null;
  Uo.copy(a), Uo.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(Uo);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Uo.clone(),
    object: r
  };
}
function Do(r, e, t, n, i, s, o, a, c, l) {
  r.getVertexPosition(a, As), r.getVertexPosition(c, ws), r.getVertexPosition(l, Rs);
  const h = Og(r, e, t, n, As, ws, Rs, Io);
  if (h) {
    i && (Co.fromBufferAttribute(i, a), Lo.fromBufferAttribute(i, c), Po.fromBufferAttribute(i, l), h.uv = qt.getInterpolation(Io, As, ws, Rs, Co, Lo, Po, new j())), s && (Co.fromBufferAttribute(s, a), Lo.fromBufferAttribute(s, c), Po.fromBufferAttribute(s, l), h.uv1 = qt.getInterpolation(Io, As, ws, Rs, Co, Lo, Po, new j()), h.uv2 = h.uv1), o && (fu.fromBufferAttribute(o, a), pu.fromBufferAttribute(o, c), mu.fromBufferAttribute(o, l), h.normal = qt.getInterpolation(Io, As, ws, Rs, fu, pu, mu, new w()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a,
      b: c,
      c: l,
      normal: new w(),
      materialIndex: 0
    };
    qt.getNormal(As, ws, Rs, u.normal), h.face = u;
  }
  return h;
}
class Ci extends Ye {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], h = [], u = [];
    let d = 0, f = 0;
    m("z", "y", "x", -1, -1, n, t, e, o, s, 0), m("z", "y", "x", 1, -1, n, t, -e, o, s, 1), m("x", "z", "y", 1, 1, e, n, t, i, o, 2), m("x", "z", "y", 1, -1, e, n, -t, i, o, 3), m("x", "y", "z", 1, -1, e, t, n, i, s, 4), m("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new xe(l, 3)), this.setAttribute("normal", new xe(h, 3)), this.setAttribute("uv", new xe(u, 2));
    function m(_, g, p, v, x, y, S, E, T, R, M) {
      const b = y / T, U = S / R, k = y / 2, D = S / 2, F = E / 2, N = T + 1, K = R + 1;
      let W = 0, Y = 0;
      const ee = new w();
      for (let Q = 0; Q < K; Q++) {
        const z = Q * U - D;
        for (let X = 0; X < N; X++) {
          const ue = X * b - k;
          ee[_] = ue * v, ee[g] = z * x, ee[p] = F, l.push(ee.x, ee.y, ee.z), ee[_] = 0, ee[g] = 0, ee[p] = E > 0 ? 1 : -1, h.push(ee.x, ee.y, ee.z), u.push(X / T), u.push(1 - Q / R), W += 1;
        }
      }
      for (let Q = 0; Q < R; Q++)
        for (let z = 0; z < T; z++) {
          const X = d + z + N * Q, ue = d + z + N * (Q + 1), fe = d + (z + 1) + N * (Q + 1), me = d + (z + 1) + N * Q;
          c.push(X, ue, me), c.push(ue, fe, me), Y += 6;
        }
      a.addGroup(f, Y, M), f += Y, d += W;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ci(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function er(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Gt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = er(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Ng(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function tp(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : fn;
}
const Sa = { clone: er, merge: Gt };
var Fg = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Bg = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class En extends Rt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Fg, this.fragmentShader = Bg, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = er(e.uniforms), this.uniformsGroups = Ng(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Da extends ze {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ie(), this.projectionMatrix = new Ie(), this.projectionMatrixInverse = new Ie(), this.coordinateSystem = On;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wt extends Da {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Qs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ts * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Qs * 2 * Math.atan(
      Math.tan(ts * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ts * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Cs = -90, Ls = 1;
class np extends ze {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null;
    const i = new wt(Cs, Ls, e, t);
    i.layers = this.layers, this.add(i);
    const s = new wt(Cs, Ls, e, t);
    s.layers = this.layers, this.add(s);
    const o = new wt(Cs, Ls, e, t);
    o.layers = this.layers, this.add(o);
    const a = new wt(Cs, Ls, e, t);
    a.layers = this.layers, this.add(a);
    const c = new wt(Cs, Ls, e, t);
    c.layers = this.layers, this.add(c);
    const l = new wt(Cs, Ls, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, o, a, c] = t;
    for (const l of t)
      this.remove(l);
    if (e === On)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === qr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [i, s, o, a, c, l] = this.children, h = e.getRenderTarget(), u = e.xr.enabled;
    e.xr.enabled = !1;
    const d = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
  }
}
class ao extends ft {
  constructor(e, t, n, i, s, o, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ii, super(e, t, n, i, s, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ip extends pn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Ei ? De : Ti), this.texture = new ao(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : lt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new Ci(5, 5, 5), s = new En({
      name: "CubemapFromEquirect",
      uniforms: er(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Wt,
      blending: ei
    });
    s.uniforms.tEquirect.value = t;
    const o = new St(i, s), a = t.minFilter;
    return t.minFilter === Bn && (t.minFilter = lt), new np(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Rc = /* @__PURE__ */ new w(), zg = /* @__PURE__ */ new w(), Hg = /* @__PURE__ */ new Xe();
class Kn {
  constructor(e = new w(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Rc.subVectors(n, t).cross(zg.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Rc), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Hg.getNormalMatrix(e), i = this.coplanarPoint(Rc).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Fi = /* @__PURE__ */ new gn(), Oo = /* @__PURE__ */ new w();
class Oa {
  constructor(e = new Kn(), t = new Kn(), n = new Kn(), i = new Kn(), s = new Kn(), o = new Kn()) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = On) {
    const n = this.planes, i = e.elements, s = i[0], o = i[1], a = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], f = i[8], m = i[9], _ = i[10], g = i[11], p = i[12], v = i[13], x = i[14], y = i[15];
    if (n[0].setComponents(c - s, d - l, g - f, y - p).normalize(), n[1].setComponents(c + s, d + l, g + f, y + p).normalize(), n[2].setComponents(c + o, d + h, g + m, y + v).normalize(), n[3].setComponents(c - o, d - h, g - m, y - v).normalize(), n[4].setComponents(c - a, d - u, g - _, y - x).normalize(), t === On)
      n[5].setComponents(c + a, d + u, g + _, y + x).normalize();
    else if (t === qr)
      n[5].setComponents(a, u, _, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Fi);
  }
  intersectsSprite(e) {
    return Fi.center.set(0, 0, 0), Fi.radius = 0.7071067811865476, Fi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Fi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Oo.x = i.normal.x > 0 ? e.max.x : e.min.x, Oo.y = i.normal.y > 0 ? e.max.y : e.min.y, Oo.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Oo) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function sp() {
  let r = null, e = !1, t = null, n = null;
  function i(s, o) {
    t(s, o), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function kg(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, d = l.usage, f = r.createBuffer();
    r.bindBuffer(h, f), r.bufferData(h, u, d), l.onUploadCallback();
    let m;
    if (u instanceof Float32Array)
      m = r.FLOAT;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          m = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        m = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      m = r.SHORT;
    else if (u instanceof Uint32Array)
      m = r.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      m = r.INT;
    else if (u instanceof Int8Array)
      m = r.BYTE;
    else if (u instanceof Uint8Array)
      m = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      m = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: f,
      type: m,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, u) {
    const d = h.array, f = h.updateRange;
    r.bindBuffer(u, l), f.count === -1 ? r.bufferSubData(u, 0, d) : (t ? r.bufferSubData(
      u,
      f.offset * d.BYTES_PER_ELEMENT,
      d,
      f.offset,
      f.count
    ) : r.bufferSubData(
      u,
      f.offset * d.BYTES_PER_ELEMENT,
      d.subarray(f.offset, f.offset + f.count)
    ), f.count = -1), h.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (r.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u === void 0 ? n.set(l, i(l, h)) : u.version < l.version && (s(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class ur extends Ye {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, u = e / a, d = t / c, f = [], m = [], _ = [], g = [];
    for (let p = 0; p < h; p++) {
      const v = p * d - o;
      for (let x = 0; x < l; x++) {
        const y = x * u - s;
        m.push(y, -v, 0), _.push(0, 0, 1), g.push(x / a), g.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let v = 0; v < a; v++) {
        const x = v + l * p, y = v + l * (p + 1), S = v + 1 + l * (p + 1), E = v + 1 + l * p;
        f.push(x, y, E), f.push(y, S, E);
      }
    this.setIndex(f), this.setAttribute("position", new xe(m, 3)), this.setAttribute("normal", new xe(_, 3)), this.setAttribute("uv", new xe(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ur(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Vg = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Gg = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Wg = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Xg = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Yg = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, qg = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, $g = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Zg = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Kg = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Jg = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, jg = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Qg = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, e_ = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, t_ = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, n_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, i_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, s_ = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, r_ = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, o_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, a_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, c_ = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, l_ = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, h_ = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, u_ = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, d_ = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, f_ = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, p_ = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, m_ = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, g_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );", __ = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, y_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, x_ = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, v_ = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, M_ = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, S_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, E_ = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, T_ = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, b_ = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, A_ = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, w_ = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, R_ = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, C_ = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, L_ = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, P_ = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, I_ = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, U_ = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, D_ = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, O_ = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, N_ = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, F_ = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, B_ = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`, z_ = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, H_ = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, k_ = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, V_ = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, G_ = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, W_ = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, X_ = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Y_ = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, q_ = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, $_ = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Z_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, K_ = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, J_ = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, j_ = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Q_ = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, e0 = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, t0 = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, n0 = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, i0 = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`, s0 = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, r0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, o0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, a0 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, c0 = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, l0 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, h0 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, u0 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, d0 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, f0 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, p0 = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, m0 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, g0 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, _0 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, y0 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, x0 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, v0 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, M0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, S0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, E0 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, T0 = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, b0 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, A0 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, w0 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, R0 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, C0 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, L0 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, P0 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, I0 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, U0 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, D0 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, O0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, N0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, F0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, B0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const z0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, H0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, k0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, V0 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, G0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, W0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, X0 = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Y0 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, q0 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, $0 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Z0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, K0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, J0 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, j0 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Q0 = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, ey = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ty = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ny = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, iy = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, sy = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ry = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, oy = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, ay = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, cy = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ly = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, hy = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, uy = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, dy = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, fy = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, py = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, my = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, gy = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, _y = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, yy = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ve = {
  alphahash_fragment: Vg,
  alphahash_pars_fragment: Gg,
  alphamap_fragment: Wg,
  alphamap_pars_fragment: Xg,
  alphatest_fragment: Yg,
  alphatest_pars_fragment: qg,
  aomap_fragment: $g,
  aomap_pars_fragment: Zg,
  begin_vertex: Kg,
  beginnormal_vertex: Jg,
  bsdfs: jg,
  iridescence_fragment: Qg,
  bumpmap_pars_fragment: e_,
  clipping_planes_fragment: t_,
  clipping_planes_pars_fragment: n_,
  clipping_planes_pars_vertex: i_,
  clipping_planes_vertex: s_,
  color_fragment: r_,
  color_pars_fragment: o_,
  color_pars_vertex: a_,
  color_vertex: c_,
  common: l_,
  cube_uv_reflection_fragment: h_,
  defaultnormal_vertex: u_,
  displacementmap_pars_vertex: d_,
  displacementmap_vertex: f_,
  emissivemap_fragment: p_,
  emissivemap_pars_fragment: m_,
  colorspace_fragment: g_,
  colorspace_pars_fragment: __,
  envmap_fragment: y_,
  envmap_common_pars_fragment: x_,
  envmap_pars_fragment: v_,
  envmap_pars_vertex: M_,
  envmap_physical_pars_fragment: U_,
  envmap_vertex: S_,
  fog_vertex: E_,
  fog_pars_vertex: T_,
  fog_fragment: b_,
  fog_pars_fragment: A_,
  gradientmap_pars_fragment: w_,
  lightmap_fragment: R_,
  lightmap_pars_fragment: C_,
  lights_lambert_fragment: L_,
  lights_lambert_pars_fragment: P_,
  lights_pars_begin: I_,
  lights_toon_fragment: D_,
  lights_toon_pars_fragment: O_,
  lights_phong_fragment: N_,
  lights_phong_pars_fragment: F_,
  lights_physical_fragment: B_,
  lights_physical_pars_fragment: z_,
  lights_fragment_begin: H_,
  lights_fragment_maps: k_,
  lights_fragment_end: V_,
  logdepthbuf_fragment: G_,
  logdepthbuf_pars_fragment: W_,
  logdepthbuf_pars_vertex: X_,
  logdepthbuf_vertex: Y_,
  map_fragment: q_,
  map_pars_fragment: $_,
  map_particle_fragment: Z_,
  map_particle_pars_fragment: K_,
  metalnessmap_fragment: J_,
  metalnessmap_pars_fragment: j_,
  morphcolor_vertex: Q_,
  morphnormal_vertex: e0,
  morphtarget_pars_vertex: t0,
  morphtarget_vertex: n0,
  normal_fragment_begin: i0,
  normal_fragment_maps: s0,
  normal_pars_fragment: r0,
  normal_pars_vertex: o0,
  normal_vertex: a0,
  normalmap_pars_fragment: c0,
  clearcoat_normal_fragment_begin: l0,
  clearcoat_normal_fragment_maps: h0,
  clearcoat_pars_fragment: u0,
  iridescence_pars_fragment: d0,
  opaque_fragment: f0,
  packing: p0,
  premultiplied_alpha_fragment: m0,
  project_vertex: g0,
  dithering_fragment: _0,
  dithering_pars_fragment: y0,
  roughnessmap_fragment: x0,
  roughnessmap_pars_fragment: v0,
  shadowmap_pars_fragment: M0,
  shadowmap_pars_vertex: S0,
  shadowmap_vertex: E0,
  shadowmask_pars_fragment: T0,
  skinbase_vertex: b0,
  skinning_pars_vertex: A0,
  skinning_vertex: w0,
  skinnormal_vertex: R0,
  specularmap_fragment: C0,
  specularmap_pars_fragment: L0,
  tonemapping_fragment: P0,
  tonemapping_pars_fragment: I0,
  transmission_fragment: U0,
  transmission_pars_fragment: D0,
  uv_pars_fragment: O0,
  uv_pars_vertex: N0,
  uv_vertex: F0,
  worldpos_vertex: B0,
  background_vert: z0,
  background_frag: H0,
  backgroundCube_vert: k0,
  backgroundCube_frag: V0,
  cube_vert: G0,
  cube_frag: W0,
  depth_vert: X0,
  depth_frag: Y0,
  distanceRGBA_vert: q0,
  distanceRGBA_frag: $0,
  equirect_vert: Z0,
  equirect_frag: K0,
  linedashed_vert: J0,
  linedashed_frag: j0,
  meshbasic_vert: Q0,
  meshbasic_frag: ey,
  meshlambert_vert: ty,
  meshlambert_frag: ny,
  meshmatcap_vert: iy,
  meshmatcap_frag: sy,
  meshnormal_vert: ry,
  meshnormal_frag: oy,
  meshphong_vert: ay,
  meshphong_frag: cy,
  meshphysical_vert: ly,
  meshphysical_frag: hy,
  meshtoon_vert: uy,
  meshtoon_frag: dy,
  points_vert: fy,
  points_frag: py,
  shadow_vert: my,
  shadow_frag: gy,
  sprite_vert: _y,
  sprite_frag: yy
}, le = {
  common: {
    diffuse: { value: /* @__PURE__ */ new he(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Xe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Xe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Xe() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Xe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Xe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Xe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Xe() },
    normalScale: { value: /* @__PURE__ */ new j(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Xe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Xe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Xe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Xe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new he(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new he(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Xe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Xe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new he(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new j(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Xe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Xe() },
    alphaTest: { value: 0 }
  }
}, vn = {
  basic: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.specularmap,
      le.envmap,
      le.aomap,
      le.lightmap,
      le.fog
    ]),
    vertexShader: Ve.meshbasic_vert,
    fragmentShader: Ve.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.specularmap,
      le.envmap,
      le.aomap,
      le.lightmap,
      le.emissivemap,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.fog,
      le.lights,
      {
        emissive: { value: /* @__PURE__ */ new he(0) }
      }
    ]),
    vertexShader: Ve.meshlambert_vert,
    fragmentShader: Ve.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.specularmap,
      le.envmap,
      le.aomap,
      le.lightmap,
      le.emissivemap,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.fog,
      le.lights,
      {
        emissive: { value: /* @__PURE__ */ new he(0) },
        specular: { value: /* @__PURE__ */ new he(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ve.meshphong_vert,
    fragmentShader: Ve.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.envmap,
      le.aomap,
      le.lightmap,
      le.emissivemap,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.roughnessmap,
      le.metalnessmap,
      le.fog,
      le.lights,
      {
        emissive: { value: /* @__PURE__ */ new he(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ve.meshphysical_vert,
    fragmentShader: Ve.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.aomap,
      le.lightmap,
      le.emissivemap,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.gradientmap,
      le.fog,
      le.lights,
      {
        emissive: { value: /* @__PURE__ */ new he(0) }
      }
    ]),
    vertexShader: Ve.meshtoon_vert,
    fragmentShader: Ve.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      le.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ve.meshmatcap_vert,
    fragmentShader: Ve.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Gt([
      le.points,
      le.fog
    ]),
    vertexShader: Ve.points_vert,
    fragmentShader: Ve.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ve.linedashed_vert,
    fragmentShader: Ve.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.displacementmap
    ]),
    vertexShader: Ve.depth_vert,
    fragmentShader: Ve.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.bumpmap,
      le.normalmap,
      le.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ve.meshnormal_vert,
    fragmentShader: Ve.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Gt([
      le.sprite,
      le.fog
    ]),
    vertexShader: Ve.sprite_vert,
    fragmentShader: Ve.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Xe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ve.background_vert,
    fragmentShader: Ve.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ve.backgroundCube_vert,
    fragmentShader: Ve.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ve.cube_vert,
    fragmentShader: Ve.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ve.equirect_vert,
    fragmentShader: Ve.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Gt([
      le.common,
      le.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new w() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ve.distanceRGBA_vert,
    fragmentShader: Ve.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Gt([
      le.lights,
      le.fog,
      {
        color: { value: /* @__PURE__ */ new he(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ve.shadow_vert,
    fragmentShader: Ve.shadow_frag
  }
};
vn.physical = {
  uniforms: /* @__PURE__ */ Gt([
    vn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Xe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Xe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new j(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Xe() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Xe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Xe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new he(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Xe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Xe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Xe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new j() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Xe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new he(0) },
      specularColor: { value: /* @__PURE__ */ new he(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Xe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Xe() },
      anisotropyVector: { value: /* @__PURE__ */ new j() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Xe() }
    }
  ]),
  vertexShader: Ve.meshphysical_vert,
  fragmentShader: Ve.meshphysical_frag
};
const No = { r: 0, b: 0, g: 0 };
function xy(r, e, t, n, i, s, o) {
  const a = new he(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, f = null;
  function m(g, p) {
    let v = !1, x = p.isScene === !0 ? p.background : null;
    switch (x && x.isTexture && (x = (p.backgroundBlurriness > 0 ? t : e).get(x)), x === null ? _(a, c) : x && x.isColor && (_(x, 1), v = !0), r.xr.getEnvironmentBlendMode()) {
      case "opaque":
        v = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, o), v = !0;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, o), v = !0;
        break;
    }
    (r.autoClear || v) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), x && (x.isCubeTexture || x.mapping === lr) ? (h === void 0 && (h = new St(
      new Ci(1, 1, 1),
      new En({
        name: "BackgroundCubeMaterial",
        uniforms: er(vn.backgroundCube.uniforms),
        vertexShader: vn.backgroundCube.vertexShader,
        fragmentShader: vn.backgroundCube.fragmentShader,
        side: Wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(E, T, R) {
      this.matrixWorld.copyPosition(R.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = x.colorSpace !== De, (u !== x || d !== x.version || f !== r.toneMapping) && (h.material.needsUpdate = !0, u = x, d = x.version, f = r.toneMapping), h.layers.enableAll(), g.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new St(
      new ur(2, 2),
      new En({
        name: "BackgroundMaterial",
        uniforms: er(vn.background.uniforms),
        vertexShader: vn.background.vertexShader,
        fragmentShader: vn.background.fragmentShader,
        side: Sn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, l.material.toneMapped = x.colorSpace !== De, x.matrixAutoUpdate === !0 && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || d !== x.version || f !== r.toneMapping) && (l.material.needsUpdate = !0, u = x, d = x.version, f = r.toneMapping), l.layers.enableAll(), g.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function _(g, p) {
    g.getRGB(No, tp(r)), n.buffers.color.setClear(No.r, No.g, No.b, p, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(g, p = 1) {
      a.set(g), c = p, _(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(g) {
      c = g, _(a, c);
    },
    render: m
  };
}
function vy(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = g(null);
  let l = c, h = !1;
  function u(F, N, K, W, Y) {
    let ee = !1;
    if (o) {
      const Q = _(W, K, N);
      l !== Q && (l = Q, f(l.object)), ee = p(F, W, K, Y), ee && v(F, W, K, Y);
    } else {
      const Q = N.wireframe === !0;
      (l.geometry !== W.id || l.program !== K.id || l.wireframe !== Q) && (l.geometry = W.id, l.program = K.id, l.wireframe = Q, ee = !0);
    }
    Y !== null && t.update(Y, r.ELEMENT_ARRAY_BUFFER), (ee || h) && (h = !1, R(F, N, K, W), Y !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function f(F) {
    return n.isWebGL2 ? r.bindVertexArray(F) : s.bindVertexArrayOES(F);
  }
  function m(F) {
    return n.isWebGL2 ? r.deleteVertexArray(F) : s.deleteVertexArrayOES(F);
  }
  function _(F, N, K) {
    const W = K.wireframe === !0;
    let Y = a[F.id];
    Y === void 0 && (Y = {}, a[F.id] = Y);
    let ee = Y[N.id];
    ee === void 0 && (ee = {}, Y[N.id] = ee);
    let Q = ee[W];
    return Q === void 0 && (Q = g(d()), ee[W] = Q), Q;
  }
  function g(F) {
    const N = [], K = [], W = [];
    for (let Y = 0; Y < i; Y++)
      N[Y] = 0, K[Y] = 0, W[Y] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: N,
      enabledAttributes: K,
      attributeDivisors: W,
      object: F,
      attributes: {},
      index: null
    };
  }
  function p(F, N, K, W) {
    const Y = l.attributes, ee = N.attributes;
    let Q = 0;
    const z = K.getAttributes();
    for (const X in z)
      if (z[X].location >= 0) {
        const fe = Y[X];
        let me = ee[X];
        if (me === void 0 && (X === "instanceMatrix" && F.instanceMatrix && (me = F.instanceMatrix), X === "instanceColor" && F.instanceColor && (me = F.instanceColor)), fe === void 0 || fe.attribute !== me || me && fe.data !== me.data)
          return !0;
        Q++;
      }
    return l.attributesNum !== Q || l.index !== W;
  }
  function v(F, N, K, W) {
    const Y = {}, ee = N.attributes;
    let Q = 0;
    const z = K.getAttributes();
    for (const X in z)
      if (z[X].location >= 0) {
        let fe = ee[X];
        fe === void 0 && (X === "instanceMatrix" && F.instanceMatrix && (fe = F.instanceMatrix), X === "instanceColor" && F.instanceColor && (fe = F.instanceColor));
        const me = {};
        me.attribute = fe, fe && fe.data && (me.data = fe.data), Y[X] = me, Q++;
      }
    l.attributes = Y, l.attributesNum = Q, l.index = W;
  }
  function x() {
    const F = l.newAttributes;
    for (let N = 0, K = F.length; N < K; N++)
      F[N] = 0;
  }
  function y(F) {
    S(F, 0);
  }
  function S(F, N) {
    const K = l.newAttributes, W = l.enabledAttributes, Y = l.attributeDivisors;
    K[F] = 1, W[F] === 0 && (r.enableVertexAttribArray(F), W[F] = 1), Y[F] !== N && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](F, N), Y[F] = N);
  }
  function E() {
    const F = l.newAttributes, N = l.enabledAttributes;
    for (let K = 0, W = N.length; K < W; K++)
      N[K] !== F[K] && (r.disableVertexAttribArray(K), N[K] = 0);
  }
  function T(F, N, K, W, Y, ee, Q) {
    Q === !0 ? r.vertexAttribIPointer(F, N, K, Y, ee) : r.vertexAttribPointer(F, N, K, W, Y, ee);
  }
  function R(F, N, K, W) {
    if (n.isWebGL2 === !1 && (F.isInstancedMesh || W.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const Y = W.attributes, ee = K.getAttributes(), Q = N.defaultAttributeValues;
    for (const z in ee) {
      const X = ee[z];
      if (X.location >= 0) {
        let ue = Y[z];
        if (ue === void 0 && (z === "instanceMatrix" && F.instanceMatrix && (ue = F.instanceMatrix), z === "instanceColor" && F.instanceColor && (ue = F.instanceColor)), ue !== void 0) {
          const fe = ue.normalized, me = ue.itemSize, be = t.get(ue);
          if (be === void 0)
            continue;
          const Ae = be.buffer, we = be.type, nt = be.bytesPerElement, ht = n.isWebGL2 === !0 && (we === r.INT || we === r.UNSIGNED_INT || ue.gpuType === Ql);
          if (ue.isInterleavedBufferAttribute) {
            const Ue = ue.data, P = Ue.stride, ae = ue.offset;
            if (Ue.isInstancedInterleavedBuffer) {
              for (let J = 0; J < X.locationSize; J++)
                S(X.location + J, Ue.meshPerAttribute);
              F.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = Ue.meshPerAttribute * Ue.count);
            } else
              for (let J = 0; J < X.locationSize; J++)
                y(X.location + J);
            r.bindBuffer(r.ARRAY_BUFFER, Ae);
            for (let J = 0; J < X.locationSize; J++)
              T(
                X.location + J,
                me / X.locationSize,
                we,
                fe,
                P * nt,
                (ae + me / X.locationSize * J) * nt,
                ht
              );
          } else {
            if (ue.isInstancedBufferAttribute) {
              for (let Ue = 0; Ue < X.locationSize; Ue++)
                S(X.location + Ue, ue.meshPerAttribute);
              F.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let Ue = 0; Ue < X.locationSize; Ue++)
                y(X.location + Ue);
            r.bindBuffer(r.ARRAY_BUFFER, Ae);
            for (let Ue = 0; Ue < X.locationSize; Ue++)
              T(
                X.location + Ue,
                me / X.locationSize,
                we,
                fe,
                me * nt,
                me / X.locationSize * Ue * nt,
                ht
              );
          }
        } else if (Q !== void 0) {
          const fe = Q[z];
          if (fe !== void 0)
            switch (fe.length) {
              case 2:
                r.vertexAttrib2fv(X.location, fe);
                break;
              case 3:
                r.vertexAttrib3fv(X.location, fe);
                break;
              case 4:
                r.vertexAttrib4fv(X.location, fe);
                break;
              default:
                r.vertexAttrib1fv(X.location, fe);
            }
        }
      }
    }
    E();
  }
  function M() {
    k();
    for (const F in a) {
      const N = a[F];
      for (const K in N) {
        const W = N[K];
        for (const Y in W)
          m(W[Y].object), delete W[Y];
        delete N[K];
      }
      delete a[F];
    }
  }
  function b(F) {
    if (a[F.id] === void 0)
      return;
    const N = a[F.id];
    for (const K in N) {
      const W = N[K];
      for (const Y in W)
        m(W[Y].object), delete W[Y];
      delete N[K];
    }
    delete a[F.id];
  }
  function U(F) {
    for (const N in a) {
      const K = a[N];
      if (K[F.id] === void 0)
        continue;
      const W = K[F.id];
      for (const Y in W)
        m(W[Y].object), delete W[Y];
      delete K[F.id];
    }
  }
  function k() {
    D(), h = !0, l !== c && (l = c, f(l.object));
  }
  function D() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: k,
    resetDefaultState: D,
    dispose: M,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: U,
    initAttributes: x,
    enableAttribute: y,
    disableUnusedAttributes: E
  };
}
function My(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function a(l, h) {
    r.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0)
      return;
    let d, f;
    if (i)
      d = r, f = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[f](s, l, h, u), t.update(h, s, u);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function Sy(r, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const T = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(T) {
    if (T === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      T = "mediump";
    }
    return T === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), f = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), _ = r.getParameter(r.MAX_VERTEX_ATTRIBS), g = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), p = r.getParameter(r.MAX_VARYING_VECTORS), v = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), x = d > 0, y = o || e.has("OES_texture_float"), S = x && y, E = o ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: f,
    maxCubemapSize: m,
    maxAttributes: _,
    maxVertexUniforms: g,
    maxVaryings: p,
    maxFragmentUniforms: v,
    vertexTextures: x,
    floatFragmentTextures: y,
    floatVertexTextures: S,
    maxSamples: E
  };
}
function Ey(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new Kn(), a = new Xe(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const m = u.clippingPlanes, _ = u.clipIntersection, g = u.clipShadows, p = r.get(u);
    if (!i || m === null || m.length === 0 || s && !g)
      s ? h(null) : l();
    else {
      const v = s ? 0 : n, x = v * 4;
      let y = p.clippingState || null;
      c.value = y, y = h(m, d, x, f);
      for (let S = 0; S !== x; ++S)
        y[S] = t[S];
      p.clippingState = y, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += v;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, f, m) {
    const _ = u !== null ? u.length : 0;
    let g = null;
    if (_ !== 0) {
      if (g = c.value, m !== !0 || g === null) {
        const p = f + _ * 4, v = d.matrixWorldInverse;
        a.getNormalMatrix(v), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let x = 0, y = f; x !== _; ++x, y += 4)
          o.copy(u[x]).applyMatrix4(v, a), o.normal.toArray(g, y), g[y + 3] = o.constant;
      }
      c.value = g, c.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, g;
  }
}
function Ty(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Vr ? o.mapping = ii : a === Gr && (o.mapping = bi), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Vr || a === Gr)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new ip(c.height / 2);
            return l.fromEquirectangularTexture(r, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class dr extends Da {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Ws = 4, gu = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Zi = 20, Cc = /* @__PURE__ */ new dr(), _u = /* @__PURE__ */ new he();
let Lc = null;
const qi = (1 + Math.sqrt(5)) / 2, Ps = 1 / qi, yu = [
  /* @__PURE__ */ new w(1, 1, 1),
  /* @__PURE__ */ new w(-1, 1, 1),
  /* @__PURE__ */ new w(1, 1, -1),
  /* @__PURE__ */ new w(-1, 1, -1),
  /* @__PURE__ */ new w(0, qi, Ps),
  /* @__PURE__ */ new w(0, qi, -Ps),
  /* @__PURE__ */ new w(Ps, 0, qi),
  /* @__PURE__ */ new w(-Ps, 0, qi),
  /* @__PURE__ */ new w(qi, Ps, 0),
  /* @__PURE__ */ new w(-qi, Ps, 0)
];
class Ea {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Lc = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Mu(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = vu(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Lc), e.scissorTest = !1, Fo(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ii || e.mapping === bi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Lc = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: lt,
      minFilter: lt,
      generateMipmaps: !1,
      type: Dn,
      format: jt,
      colorSpace: fn,
      depthBuffer: !1
    }, i = xu(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = xu(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = by(s)), this._blurMaterial = Ay(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new St(this._lodPlanes[0], e);
    this._renderer.compile(t, Cc);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new wt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(_u), h.toneMapping = ti, h.autoClear = !1;
    const f = new en({
      name: "PMREM.Background",
      side: Wt,
      depthWrite: !1,
      depthTest: !1
    }), m = new St(new Ci(), f);
    let _ = !1;
    const g = e.background;
    g ? g.isColor && (f.color.copy(g), e.background = null, _ = !0) : (f.color.copy(_u), _ = !0);
    for (let p = 0; p < 6; p++) {
      const v = p % 3;
      v === 0 ? (a.up.set(0, c[p], 0), a.lookAt(l[p], 0, 0)) : v === 1 ? (a.up.set(0, 0, c[p]), a.lookAt(0, l[p], 0)) : (a.up.set(0, c[p], 0), a.lookAt(0, 0, l[p]));
      const x = this._cubeSize;
      Fo(i, v * x, p > 2 ? x : 0, x, x), h.setRenderTarget(i), _ && h.render(m, a), h.render(e, a);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = g;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === ii || e.mapping === bi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Mu()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = vu());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new St(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Fo(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Cc);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = yu[(i - 1) % yu.length];
      this._blur(e, i - 1, i, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new St(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, m = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Zi - 1), _ = s / m, g = isFinite(s) ? 1 + Math.floor(h * _) : Zi;
    g > Zi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);
    const p = [];
    let v = 0;
    for (let T = 0; T < Zi; ++T) {
      const R = T / _, M = Math.exp(-R * R / 2);
      p.push(M), T === 0 ? v += M : T < g && (v += 2 * M);
    }
    for (let T = 0; T < p.length; T++)
      p[T] = p[T] / v;
    d.envMap.value = e.texture, d.samples.value = g, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: x } = this;
    d.dTheta.value = m, d.mipInt.value = x - n;
    const y = this._sizeLods[i], S = 3 * y * (i > x - Ws ? i - x + Ws : 0), E = 4 * (this._cubeSize - y);
    Fo(t, S, E, 3 * y, 2 * y), c.setRenderTarget(t), c.render(u, Cc);
  }
}
function by(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - Ws + 1 + gu.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > r - Ws ? c = gu[o - r + Ws - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, m = 6, _ = 3, g = 2, p = 1, v = new Float32Array(_ * m * f), x = new Float32Array(g * m * f), y = new Float32Array(p * m * f);
    for (let E = 0; E < f; E++) {
      const T = E % 3 * 2 / 3 - 1, R = E > 2 ? 0 : -1, M = [
        T,
        R,
        0,
        T + 2 / 3,
        R,
        0,
        T + 2 / 3,
        R + 1,
        0,
        T,
        R,
        0,
        T + 2 / 3,
        R + 1,
        0,
        T,
        R + 1,
        0
      ];
      v.set(M, _ * m * E), x.set(d, g * m * E);
      const b = [E, E, E, E, E, E];
      y.set(b, p * m * E);
    }
    const S = new Ye();
    S.setAttribute("position", new rt(v, _)), S.setAttribute("uv", new rt(x, g)), S.setAttribute("faceIndex", new rt(y, p)), e.push(S), i > Ws && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function xu(r, e, t) {
  const n = new pn(r, e, t);
  return n.texture.mapping = lr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Fo(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Ay(r, e, t) {
  const n = new Float32Array(Zi), i = new w(0, 1, 0);
  return new En({
    name: "SphericalGaussianBlur",
    defines: {
      n: Zi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: ph(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: ei,
    depthTest: !1,
    depthWrite: !1
  });
}
function vu() {
  return new En({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ph(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: ei,
    depthTest: !1,
    depthWrite: !1
  });
}
function Mu() {
  return new En({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ph(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: ei,
    depthTest: !1,
    depthWrite: !1
  });
}
function ph() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function wy(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Vr || c === Gr, h = c === ii || c === bi;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new Ea(r)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new Ea(r));
              const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      a[h] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function Ry(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Cy(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const m in d.attributes)
      e.remove(d.attributes[m]);
    for (const m in d.morphAttributes) {
      const _ = d.morphAttributes[m];
      for (let g = 0, p = _.length; g < p; g++)
        e.remove(_[g]);
    }
    d.removeEventListener("dispose", o), delete i[d.id];
    const f = s.get(d);
    f && (e.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const m in d)
      e.update(d[m], r.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const m in f) {
      const _ = f[m];
      for (let g = 0, p = _.length; g < p; g++)
        e.update(_[g], r.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], f = u.index, m = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const v = f.array;
      _ = f.version;
      for (let x = 0, y = v.length; x < y; x += 3) {
        const S = v[x + 0], E = v[x + 1], T = v[x + 2];
        d.push(S, E, E, T, T, S);
      }
    } else if (m !== void 0) {
      const v = m.array;
      _ = m.version;
      for (let x = 0, y = v.length / 3 - 1; x < y; x += 3) {
        const S = x + 0, E = x + 1, T = x + 2;
        d.push(S, E, E, T, T, S);
      }
    } else
      return;
    const g = new (jf(d) ? fh : dh)(d, 1);
    g.version = _;
    const p = s.get(u);
    p && e.remove(p), s.set(u, g);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function Ly(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let a, c;
  function l(d) {
    a = d.type, c = d.bytesPerElement;
  }
  function h(d, f) {
    r.drawElements(s, f, a, d * c), t.update(f, s, 1);
  }
  function u(d, f, m) {
    if (m === 0)
      return;
    let _, g;
    if (i)
      _ = r, g = "drawElementsInstanced";
    else if (_ = e.get("ANGLE_instanced_arrays"), g = "drawElementsInstancedANGLE", _ === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    _[g](s, f, a, d * c, m), t.update(f, s, m);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function Py(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case r.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case r.LINES:
        t.lines += a * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += a * s;
        break;
      case r.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function Iy(r, e) {
  return r[0] - e[0];
}
function Uy(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function Dy(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new it(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, u) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, _ = m !== void 0 ? m.length : 0;
      let g = s.get(h);
      if (g === void 0 || g.count !== _) {
        let N = function() {
          D.dispose(), s.delete(h), h.removeEventListener("dispose", N);
        };
        var f = N;
        g !== void 0 && g.texture.dispose();
        const x = h.morphAttributes.position !== void 0, y = h.morphAttributes.normal !== void 0, S = h.morphAttributes.color !== void 0, E = h.morphAttributes.position || [], T = h.morphAttributes.normal || [], R = h.morphAttributes.color || [];
        let M = 0;
        x === !0 && (M = 1), y === !0 && (M = 2), S === !0 && (M = 3);
        let b = h.attributes.position.count * M, U = 1;
        b > e.maxTextureSize && (U = Math.ceil(b / e.maxTextureSize), b = e.maxTextureSize);
        const k = new Float32Array(b * U * 4 * _), D = new Ia(k, b, U, _);
        D.type = Qt, D.needsUpdate = !0;
        const F = M * 4;
        for (let K = 0; K < _; K++) {
          const W = E[K], Y = T[K], ee = R[K], Q = b * U * 4 * K;
          for (let z = 0; z < W.count; z++) {
            const X = z * F;
            x === !0 && (o.fromBufferAttribute(W, z), k[Q + X + 0] = o.x, k[Q + X + 1] = o.y, k[Q + X + 2] = o.z, k[Q + X + 3] = 0), y === !0 && (o.fromBufferAttribute(Y, z), k[Q + X + 4] = o.x, k[Q + X + 5] = o.y, k[Q + X + 6] = o.z, k[Q + X + 7] = 0), S === !0 && (o.fromBufferAttribute(ee, z), k[Q + X + 8] = o.x, k[Q + X + 9] = o.y, k[Q + X + 10] = o.z, k[Q + X + 11] = ee.itemSize === 4 ? o.w : 1);
          }
        }
        g = {
          count: _,
          texture: D,
          size: new j(b, U)
        }, s.set(h, g), h.addEventListener("dispose", N);
      }
      let p = 0;
      for (let x = 0; x < d.length; x++)
        p += d[x];
      const v = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", v), u.getUniforms().setValue(r, "morphTargetInfluences", d), u.getUniforms().setValue(r, "morphTargetsTexture", g.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", g.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let _ = n[h.id];
      if (_ === void 0 || _.length !== m) {
        _ = [];
        for (let y = 0; y < m; y++)
          _[y] = [y, 0];
        n[h.id] = _;
      }
      for (let y = 0; y < m; y++) {
        const S = _[y];
        S[0] = y, S[1] = d[y];
      }
      _.sort(Uy);
      for (let y = 0; y < 8; y++)
        y < m && _[y][1] ? (a[y][0] = _[y][0], a[y][1] = _[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
      a.sort(Iy);
      const g = h.morphAttributes.position, p = h.morphAttributes.normal;
      let v = 0;
      for (let y = 0; y < 8; y++) {
        const S = a[y], E = S[0], T = S[1];
        E !== Number.MAX_SAFE_INTEGER && T ? (g && h.getAttribute("morphTarget" + y) !== g[E] && h.setAttribute("morphTarget" + y, g[E]), p && h.getAttribute("morphNormal" + y) !== p[E] && h.setAttribute("morphNormal" + y, p[E]), i[y] = T, v += T) : (g && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), p && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), i[y] = 0);
      }
      const x = h.morphTargetsRelative ? 1 : 1 - v;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", x), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function Oy(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    if (i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), i.get(c) !== l && (t.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const rp = /* @__PURE__ */ new ft(), op = /* @__PURE__ */ new Ia(), ap = /* @__PURE__ */ new uh(), cp = /* @__PURE__ */ new ao(), Su = [], Eu = [], Tu = new Float32Array(16), bu = new Float32Array(9), Au = new Float32Array(4);
function fr(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0)
    return r;
  const i = e * t;
  let s = Su[i];
  if (s === void 0 && (s = new Float32Array(i), Su[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, r[o].toArray(s, a);
  }
  return s;
}
function Ct(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Lt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function Na(r, e) {
  let t = Eu[e];
  t === void 0 && (t = new Int32Array(e), Eu[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function Ny(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function Fy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ct(t, e))
      return;
    r.uniform2fv(this.addr, e), Lt(t, e);
  }
}
function By(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Ct(t, e))
      return;
    r.uniform3fv(this.addr, e), Lt(t, e);
  }
}
function zy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ct(t, e))
      return;
    r.uniform4fv(this.addr, e), Lt(t, e);
  }
}
function Hy(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ct(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Ct(t, n))
      return;
    Au.set(n), r.uniformMatrix2fv(this.addr, !1, Au), Lt(t, n);
  }
}
function ky(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ct(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Ct(t, n))
      return;
    bu.set(n), r.uniformMatrix3fv(this.addr, !1, bu), Lt(t, n);
  }
}
function Vy(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ct(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e), Lt(t, e);
  } else {
    if (Ct(t, n))
      return;
    Tu.set(n), r.uniformMatrix4fv(this.addr, !1, Tu), Lt(t, n);
  }
}
function Gy(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Wy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ct(t, e))
      return;
    r.uniform2iv(this.addr, e), Lt(t, e);
  }
}
function Xy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ct(t, e))
      return;
    r.uniform3iv(this.addr, e), Lt(t, e);
  }
}
function Yy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ct(t, e))
      return;
    r.uniform4iv(this.addr, e), Lt(t, e);
  }
}
function qy(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function $y(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ct(t, e))
      return;
    r.uniform2uiv(this.addr, e), Lt(t, e);
  }
}
function Zy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ct(t, e))
      return;
    r.uniform3uiv(this.addr, e), Lt(t, e);
  }
}
function Ky(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ct(t, e))
      return;
    r.uniform4uiv(this.addr, e), Lt(t, e);
  }
}
function Jy(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || rp, i);
}
function jy(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || ap, i);
}
function Qy(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || cp, i);
}
function ex(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || op, i);
}
function tx(r) {
  switch (r) {
    case 5126:
      return Ny;
    case 35664:
      return Fy;
    case 35665:
      return By;
    case 35666:
      return zy;
    case 35674:
      return Hy;
    case 35675:
      return ky;
    case 35676:
      return Vy;
    case 5124:
    case 35670:
      return Gy;
    case 35667:
    case 35671:
      return Wy;
    case 35668:
    case 35672:
      return Xy;
    case 35669:
    case 35673:
      return Yy;
    case 5125:
      return qy;
    case 36294:
      return $y;
    case 36295:
      return Zy;
    case 36296:
      return Ky;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Jy;
    case 35679:
    case 36299:
    case 36307:
      return jy;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qy;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ex;
  }
}
function nx(r, e) {
  r.uniform1fv(this.addr, e);
}
function ix(r, e) {
  const t = fr(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function sx(r, e) {
  const t = fr(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function rx(r, e) {
  const t = fr(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function ox(r, e) {
  const t = fr(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function ax(r, e) {
  const t = fr(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function cx(r, e) {
  const t = fr(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function lx(r, e) {
  r.uniform1iv(this.addr, e);
}
function hx(r, e) {
  r.uniform2iv(this.addr, e);
}
function ux(r, e) {
  r.uniform3iv(this.addr, e);
}
function dx(r, e) {
  r.uniform4iv(this.addr, e);
}
function fx(r, e) {
  r.uniform1uiv(this.addr, e);
}
function px(r, e) {
  r.uniform2uiv(this.addr, e);
}
function mx(r, e) {
  r.uniform3uiv(this.addr, e);
}
function gx(r, e) {
  r.uniform4uiv(this.addr, e);
}
function _x(r, e, t) {
  const n = this.cache, i = e.length, s = Na(t, i);
  Ct(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || rp, s[o]);
}
function yx(r, e, t) {
  const n = this.cache, i = e.length, s = Na(t, i);
  Ct(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || ap, s[o]);
}
function xx(r, e, t) {
  const n = this.cache, i = e.length, s = Na(t, i);
  Ct(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || cp, s[o]);
}
function vx(r, e, t) {
  const n = this.cache, i = e.length, s = Na(t, i);
  Ct(n, s) || (r.uniform1iv(this.addr, s), Lt(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || op, s[o]);
}
function Mx(r) {
  switch (r) {
    case 5126:
      return nx;
    case 35664:
      return ix;
    case 35665:
      return sx;
    case 35666:
      return rx;
    case 35674:
      return ox;
    case 35675:
      return ax;
    case 35676:
      return cx;
    case 5124:
    case 35670:
      return lx;
    case 35667:
    case 35671:
      return hx;
    case 35668:
    case 35672:
      return ux;
    case 35669:
    case 35673:
      return dx;
    case 5125:
      return fx;
    case 36294:
      return px;
    case 36295:
      return mx;
    case 36296:
      return gx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return _x;
    case 35679:
    case 36299:
    case 36307:
      return yx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return xx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vx;
  }
}
class Sx {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = tx(t.type);
  }
}
class Ex {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Mx(t.type);
  }
}
class Tx {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Pc = /(\w+)(\])?(\[|\.)?/g;
function wu(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function bx(r, e, t) {
  const n = r.name, i = n.length;
  for (Pc.lastIndex = 0; ; ) {
    const s = Pc.exec(n), o = Pc.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      wu(t, l === void 0 ? new Sx(a, r, e) : new Ex(a, r, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new Tx(a), wu(t, u)), t = u;
    }
  }
}
class ga {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      bx(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Ru(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Ax = 0;
function wx(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Rx(r) {
  switch (r) {
    case fn:
      return ["Linear", "( value )"];
    case De:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), ["Linear", "( value )"];
  }
}
function Cu(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + wx(r.getShaderSource(e), o);
  } else
    return i;
}
function Cx(r, e) {
  const t = Rx(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Lx(r, e) {
  let t;
  switch (e) {
    case Mf:
      t = "Linear";
      break;
    case Sf:
      t = "Reinhard";
      break;
    case Ef:
      t = "OptimizedCineon";
      break;
    case jl:
      t = "ACESFilmic";
      break;
    case Tf:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Px(r) {
  return [
    r.extensionDerivatives || !!r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Fr).join(`
`);
}
function Ix(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Ux(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), o = s.name;
    let a = 1;
    s.type === r.FLOAT_MAT2 && (a = 2), s.type === r.FLOAT_MAT3 && (a = 3), s.type === r.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: r.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function Fr(r) {
  return r !== "";
}
function Lu(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Pu(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Dx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Bl(r) {
  return r.replace(Dx, Nx);
}
const Ox = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"]
]);
function Nx(r, e) {
  let t = Ve[e];
  if (t === void 0) {
    const n = Ox.get(e);
    if (n !== void 0)
      t = Ve[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Bl(t);
}
const Fx = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Iu(r) {
  return r.replace(Fx, Bx);
}
function Bx(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Uu(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function zx(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === $l ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Zl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Un && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Hx(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case ii:
      case bi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case lr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function kx(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case bi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Vx(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case ro:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case xf:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case vf:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Gx(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Wx(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = zx(t), l = Hx(t), h = kx(t), u = Vx(t), d = Gx(t), f = t.isWebGL2 ? "" : Px(t), m = Ix(s), _ = i.createProgram();
  let g, p, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m
  ].filter(Fr).join(`
`), g.length > 0 && (g += `
`), p = [
    f,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m
  ].filter(Fr).join(`
`), p.length > 0 && (p += `
`)) : (g = [
    Uu(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Fr).join(`
`), p = [
    f,
    Uu(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== ti ? "#define TONE_MAPPING" : "",
    t.toneMapping !== ti ? Ve.tonemapping_pars_fragment : "",
    t.toneMapping !== ti ? Lx("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ve.colorspace_pars_fragment,
    Cx("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Fr).join(`
`)), o = Bl(o), o = Lu(o, t), o = Pu(o, t), a = Bl(a), a = Lu(a, t), a = Pu(a, t), o = Iu(o), a = Iu(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, g = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, p = [
    "#define varying in",
    t.glslVersion === Nl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Nl ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + p);
  const x = v + g + o, y = v + p + a, S = Ru(i, i.VERTEX_SHADER, x), E = Ru(i, i.FRAGMENT_SHADER, y);
  if (i.attachShader(_, S), i.attachShader(_, E), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_), r.debug.checkShaderErrors) {
    const M = i.getProgramInfoLog(_).trim(), b = i.getShaderInfoLog(S).trim(), U = i.getShaderInfoLog(E).trim();
    let k = !0, D = !0;
    if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
      if (k = !1, typeof r.debug.onShaderError == "function")
        r.debug.onShaderError(i, _, S, E);
      else {
        const F = Cu(i, S, "vertex"), N = Cu(i, E, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Program Info Log: ` + M + `
` + F + `
` + N
        );
      }
    else
      M !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", M) : (b === "" || U === "") && (D = !1);
    D && (this.diagnostics = {
      runnable: k,
      programLog: M,
      vertexShader: {
        log: b,
        prefix: g
      },
      fragmentShader: {
        log: U,
        prefix: p
      }
    });
  }
  i.deleteShader(S), i.deleteShader(E);
  let T;
  this.getUniforms = function() {
    return T === void 0 && (T = new ga(i, _)), T;
  };
  let R;
  return this.getAttributes = function() {
    return R === void 0 && (R = Ux(i, _)), R;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Ax++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = S, this.fragmentShader = E, this;
}
let Xx = 0;
class Yx {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new qx(e), t.set(e, n)), n;
  }
}
class qx {
  constructor(e) {
    this.id = Xx++, this.code = e, this.usedTimes = 0;
  }
}
function $x(r, e, t, n, i, s, o) {
  const a = new Ua(), c = new Yx(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let f = i.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(M) {
    return M === 0 ? "uv" : `uv${M}`;
  }
  function g(M, b, U, k, D) {
    const F = k.fog, N = D.geometry, K = M.isMeshStandardMaterial ? k.environment : null, W = (M.isMeshStandardMaterial ? t : e).get(M.envMap || K), Y = !!W && W.mapping === lr ? W.image.height : null, ee = m[M.type];
    M.precision !== null && (f = i.getMaxPrecision(M.precision), f !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", f, "instead."));
    const Q = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, z = Q !== void 0 ? Q.length : 0;
    let X = 0;
    N.morphAttributes.position !== void 0 && (X = 1), N.morphAttributes.normal !== void 0 && (X = 2), N.morphAttributes.color !== void 0 && (X = 3);
    let ue, fe, me, be;
    if (ee) {
      const ct = vn[ee];
      ue = ct.vertexShader, fe = ct.fragmentShader;
    } else
      ue = M.vertexShader, fe = M.fragmentShader, c.update(M), me = c.getVertexShaderID(M), be = c.getFragmentShaderID(M);
    const Ae = r.getRenderTarget(), we = D.isInstancedMesh === !0, nt = !!M.map, ht = !!M.matcap, Ue = !!W, P = !!M.aoMap, ae = !!M.lightMap, J = !!M.bumpMap, re = !!M.normalMap, te = !!M.displacementMap, Ee = !!M.emissiveMap, ge = !!M.metalnessMap, ye = !!M.roughnessMap, He = M.anisotropy > 0, Je = M.clearcoat > 0, pt = M.iridescence > 0, L = M.sheen > 0, A = M.transmission > 0, H = He && !!M.anisotropyMap, ie = Je && !!M.clearcoatMap, ne = Je && !!M.clearcoatNormalMap, se = Je && !!M.clearcoatRoughnessMap, Se = pt && !!M.iridescenceMap, oe = pt && !!M.iridescenceThicknessMap, V = L && !!M.sheenColorMap, Ce = L && !!M.sheenRoughnessMap, Te = !!M.specularMap, Re = !!M.specularColorMap, ve = !!M.specularIntensityMap, Me = A && !!M.transmissionMap, qe = A && !!M.thicknessMap, ot = !!M.gradientMap, I = !!M.alphaMap, de = M.alphaTest > 0, G = !!M.alphaHash, ce = !!M.extensions, pe = !!N.attributes.uv1, et = !!N.attributes.uv2, ut = !!N.attributes.uv3;
    let Et = ti;
    return M.toneMapped && (Ae === null || Ae.isXRRenderTarget === !0) && (Et = r.toneMapping), {
      isWebGL2: h,
      shaderID: ee,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: ue,
      fragmentShader: fe,
      defines: M.defines,
      customVertexShaderID: me,
      customFragmentShaderID: be,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: f,
      instancing: we,
      instancingColor: we && D.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: Ae === null ? r.outputColorSpace : Ae.isXRRenderTarget === !0 ? Ae.texture.colorSpace : fn,
      map: nt,
      matcap: ht,
      envMap: Ue,
      envMapMode: Ue && W.mapping,
      envMapCubeUVHeight: Y,
      aoMap: P,
      lightMap: ae,
      bumpMap: J,
      normalMap: re,
      displacementMap: d && te,
      emissiveMap: Ee,
      normalMapObjectSpace: re && M.normalMapType === Hf,
      normalMapTangentSpace: re && M.normalMapType === Ri,
      metalnessMap: ge,
      roughnessMap: ye,
      anisotropy: He,
      anisotropyMap: H,
      clearcoat: Je,
      clearcoatMap: ie,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: se,
      iridescence: pt,
      iridescenceMap: Se,
      iridescenceThicknessMap: oe,
      sheen: L,
      sheenColorMap: V,
      sheenRoughnessMap: Ce,
      specularMap: Te,
      specularColorMap: Re,
      specularIntensityMap: ve,
      transmission: A,
      transmissionMap: Me,
      thicknessMap: qe,
      gradientMap: ot,
      opaque: M.transparent === !1 && M.blending === es,
      alphaMap: I,
      alphaTest: de,
      alphaHash: G,
      combine: M.combine,
      mapUv: nt && _(M.map.channel),
      aoMapUv: P && _(M.aoMap.channel),
      lightMapUv: ae && _(M.lightMap.channel),
      bumpMapUv: J && _(M.bumpMap.channel),
      normalMapUv: re && _(M.normalMap.channel),
      displacementMapUv: te && _(M.displacementMap.channel),
      emissiveMapUv: Ee && _(M.emissiveMap.channel),
      metalnessMapUv: ge && _(M.metalnessMap.channel),
      roughnessMapUv: ye && _(M.roughnessMap.channel),
      anisotropyMapUv: H && _(M.anisotropyMap.channel),
      clearcoatMapUv: ie && _(M.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && _(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: se && _(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Se && _(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: oe && _(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: V && _(M.sheenColorMap.channel),
      sheenRoughnessMapUv: Ce && _(M.sheenRoughnessMap.channel),
      specularMapUv: Te && _(M.specularMap.channel),
      specularColorMapUv: Re && _(M.specularColorMap.channel),
      specularIntensityMapUv: ve && _(M.specularIntensityMap.channel),
      transmissionMapUv: Me && _(M.transmissionMap.channel),
      thicknessMapUv: qe && _(M.thicknessMap.channel),
      alphaMapUv: I && _(M.alphaMap.channel),
      vertexTangents: !!N.attributes.tangent && (re || He),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
      vertexUv1s: pe,
      vertexUv2s: et,
      vertexUv3s: ut,
      pointsUvs: D.isPoints === !0 && !!N.attributes.uv && (nt || I),
      fog: !!F,
      useFog: M.fog === !0,
      fogExp2: F && F.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: D.isSkinnedMesh === !0,
      morphTargets: N.morphAttributes.position !== void 0,
      morphNormals: N.morphAttributes.normal !== void 0,
      morphColors: N.morphAttributes.color !== void 0,
      morphTargetsCount: z,
      morphTextureStride: X,
      numDirLights: b.directional.length,
      numPointLights: b.point.length,
      numSpotLights: b.spot.length,
      numSpotLightMaps: b.spotLightMap.length,
      numRectAreaLights: b.rectArea.length,
      numHemiLights: b.hemi.length,
      numDirLightShadows: b.directionalShadowMap.length,
      numPointLightShadows: b.pointShadowMap.length,
      numSpotLightShadows: b.spotShadowMap.length,
      numSpotLightShadowsWithMaps: b.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: r.shadowMap.enabled && U.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Et,
      useLegacyLights: r._useLegacyLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === Mn,
      flipSided: M.side === Wt,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: ce && M.extensions.derivatives === !0,
      extensionFragDepth: ce && M.extensions.fragDepth === !0,
      extensionDrawBuffers: ce && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ce && M.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
  }
  function p(M) {
    const b = [];
    if (M.shaderID ? b.push(M.shaderID) : (b.push(M.customVertexShaderID), b.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const U in M.defines)
        b.push(U), b.push(M.defines[U]);
    return M.isRawShaderMaterial === !1 && (v(b, M), x(b, M), b.push(r.outputColorSpace)), b.push(M.customProgramCacheKey), b.join();
  }
  function v(M, b) {
    M.push(b.precision), M.push(b.outputColorSpace), M.push(b.envMapMode), M.push(b.envMapCubeUVHeight), M.push(b.mapUv), M.push(b.alphaMapUv), M.push(b.lightMapUv), M.push(b.aoMapUv), M.push(b.bumpMapUv), M.push(b.normalMapUv), M.push(b.displacementMapUv), M.push(b.emissiveMapUv), M.push(b.metalnessMapUv), M.push(b.roughnessMapUv), M.push(b.anisotropyMapUv), M.push(b.clearcoatMapUv), M.push(b.clearcoatNormalMapUv), M.push(b.clearcoatRoughnessMapUv), M.push(b.iridescenceMapUv), M.push(b.iridescenceThicknessMapUv), M.push(b.sheenColorMapUv), M.push(b.sheenRoughnessMapUv), M.push(b.specularMapUv), M.push(b.specularColorMapUv), M.push(b.specularIntensityMapUv), M.push(b.transmissionMapUv), M.push(b.thicknessMapUv), M.push(b.combine), M.push(b.fogExp2), M.push(b.sizeAttenuation), M.push(b.morphTargetsCount), M.push(b.morphAttributeCount), M.push(b.numDirLights), M.push(b.numPointLights), M.push(b.numSpotLights), M.push(b.numSpotLightMaps), M.push(b.numHemiLights), M.push(b.numRectAreaLights), M.push(b.numDirLightShadows), M.push(b.numPointLightShadows), M.push(b.numSpotLightShadows), M.push(b.numSpotLightShadowsWithMaps), M.push(b.shadowMapType), M.push(b.toneMapping), M.push(b.numClippingPlanes), M.push(b.numClipIntersection), M.push(b.depthPacking);
  }
  function x(M, b) {
    a.disableAll(), b.isWebGL2 && a.enable(0), b.supportsVertexTextures && a.enable(1), b.instancing && a.enable(2), b.instancingColor && a.enable(3), b.matcap && a.enable(4), b.envMap && a.enable(5), b.normalMapObjectSpace && a.enable(6), b.normalMapTangentSpace && a.enable(7), b.clearcoat && a.enable(8), b.iridescence && a.enable(9), b.alphaTest && a.enable(10), b.vertexColors && a.enable(11), b.vertexAlphas && a.enable(12), b.vertexUv1s && a.enable(13), b.vertexUv2s && a.enable(14), b.vertexUv3s && a.enable(15), b.vertexTangents && a.enable(16), b.anisotropy && a.enable(17), M.push(a.mask), a.disableAll(), b.fog && a.enable(0), b.useFog && a.enable(1), b.flatShading && a.enable(2), b.logarithmicDepthBuffer && a.enable(3), b.skinning && a.enable(4), b.morphTargets && a.enable(5), b.morphNormals && a.enable(6), b.morphColors && a.enable(7), b.premultipliedAlpha && a.enable(8), b.shadowMapEnabled && a.enable(9), b.useLegacyLights && a.enable(10), b.doubleSided && a.enable(11), b.flipSided && a.enable(12), b.useDepthPacking && a.enable(13), b.dithering && a.enable(14), b.transmission && a.enable(15), b.sheen && a.enable(16), b.opaque && a.enable(17), b.pointsUvs && a.enable(18), M.push(a.mask);
  }
  function y(M) {
    const b = m[M.type];
    let U;
    if (b) {
      const k = vn[b];
      U = Sa.clone(k.uniforms);
    } else
      U = M.uniforms;
    return U;
  }
  function S(M, b) {
    let U;
    for (let k = 0, D = l.length; k < D; k++) {
      const F = l[k];
      if (F.cacheKey === b) {
        U = F, ++U.usedTimes;
        break;
      }
    }
    return U === void 0 && (U = new Wx(r, b, M, s), l.push(U)), U;
  }
  function E(M) {
    if (--M.usedTimes === 0) {
      const b = l.indexOf(M);
      l[b] = l[l.length - 1], l.pop(), M.destroy();
    }
  }
  function T(M) {
    c.remove(M);
  }
  function R() {
    c.dispose();
  }
  return {
    getParameters: g,
    getProgramCacheKey: p,
    getUniforms: y,
    acquireProgram: S,
    releaseProgram: E,
    releaseShaderCache: T,
    programs: l,
    dispose: R
  };
}
function Zx() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = r.get(s);
    return o === void 0 && (o = {}, r.set(s, o)), o;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, o, a) {
    r.get(s)[o] = a;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Kx(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Du(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Ou() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, f, m, _, g) {
    let p = r[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: d,
      material: f,
      groupOrder: m,
      renderOrder: u.renderOrder,
      z: _,
      group: g
    }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = m, p.renderOrder = u.renderOrder, p.z = _, p.group = g), e++, p;
  }
  function a(u, d, f, m, _, g) {
    const p = o(u, d, f, m, _, g);
    f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : t.push(p);
  }
  function c(u, d, f, m, _, g) {
    const p = o(u, d, f, m, _, g);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || Kx), n.length > 1 && n.sort(d || Du), i.length > 1 && i.sort(d || Du);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const f = r[u];
      if (f.id === null)
        break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Jx() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? (o = new Ou(), r.set(n, [o])) : i >= s.length ? (o = new Ou(), s.push(o)) : o = s[i], o;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function jx() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new w(),
            color: new he()
          };
          break;
        case "SpotLight":
          t = {
            position: new w(),
            direction: new w(),
            color: new he(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new w(),
            color: new he(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new w(),
            skyColor: new he(),
            groundColor: new he()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new he(),
            position: new w(),
            halfWidth: new w(),
            halfHeight: new w()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function Qx() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let ev = 0;
function tv(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function nv(r, e) {
  const t = new jx(), n = Qx(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++)
    i.probe.push(new w());
  const s = new w(), o = new Ie(), a = new Ie();
  function c(h, u) {
    let d = 0, f = 0, m = 0;
    for (let U = 0; U < 9; U++)
      i.probe[U].set(0, 0, 0);
    let _ = 0, g = 0, p = 0, v = 0, x = 0, y = 0, S = 0, E = 0, T = 0, R = 0;
    h.sort(tv);
    const M = u === !0 ? Math.PI : 1;
    for (let U = 0, k = h.length; U < k; U++) {
      const D = h[U], F = D.color, N = D.intensity, K = D.distance, W = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        d += F.r * N * M, f += F.g * N * M, m += F.b * N * M;
      else if (D.isLightProbe)
        for (let Y = 0; Y < 9; Y++)
          i.probe[Y].addScaledVector(D.sh.coefficients[Y], N);
      else if (D.isDirectionalLight) {
        const Y = t.get(D);
        if (Y.color.copy(D.color).multiplyScalar(D.intensity * M), D.castShadow) {
          const ee = D.shadow, Q = n.get(D);
          Q.shadowBias = ee.bias, Q.shadowNormalBias = ee.normalBias, Q.shadowRadius = ee.radius, Q.shadowMapSize = ee.mapSize, i.directionalShadow[_] = Q, i.directionalShadowMap[_] = W, i.directionalShadowMatrix[_] = D.shadow.matrix, y++;
        }
        i.directional[_] = Y, _++;
      } else if (D.isSpotLight) {
        const Y = t.get(D);
        Y.position.setFromMatrixPosition(D.matrixWorld), Y.color.copy(F).multiplyScalar(N * M), Y.distance = K, Y.coneCos = Math.cos(D.angle), Y.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), Y.decay = D.decay, i.spot[p] = Y;
        const ee = D.shadow;
        if (D.map && (i.spotLightMap[T] = D.map, T++, ee.updateMatrices(D), D.castShadow && R++), i.spotLightMatrix[p] = ee.matrix, D.castShadow) {
          const Q = n.get(D);
          Q.shadowBias = ee.bias, Q.shadowNormalBias = ee.normalBias, Q.shadowRadius = ee.radius, Q.shadowMapSize = ee.mapSize, i.spotShadow[p] = Q, i.spotShadowMap[p] = W, E++;
        }
        p++;
      } else if (D.isRectAreaLight) {
        const Y = t.get(D);
        Y.color.copy(F).multiplyScalar(N), Y.halfWidth.set(D.width * 0.5, 0, 0), Y.halfHeight.set(0, D.height * 0.5, 0), i.rectArea[v] = Y, v++;
      } else if (D.isPointLight) {
        const Y = t.get(D);
        if (Y.color.copy(D.color).multiplyScalar(D.intensity * M), Y.distance = D.distance, Y.decay = D.decay, D.castShadow) {
          const ee = D.shadow, Q = n.get(D);
          Q.shadowBias = ee.bias, Q.shadowNormalBias = ee.normalBias, Q.shadowRadius = ee.radius, Q.shadowMapSize = ee.mapSize, Q.shadowCameraNear = ee.camera.near, Q.shadowCameraFar = ee.camera.far, i.pointShadow[g] = Q, i.pointShadowMap[g] = W, i.pointShadowMatrix[g] = D.shadow.matrix, S++;
        }
        i.point[g] = Y, g++;
      } else if (D.isHemisphereLight) {
        const Y = t.get(D);
        Y.skyColor.copy(D.color).multiplyScalar(N * M), Y.groundColor.copy(D.groundColor).multiplyScalar(N * M), i.hemi[x] = Y, x++;
      }
    }
    v > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = le.LTC_FLOAT_1, i.rectAreaLTC2 = le.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = le.LTC_HALF_1, i.rectAreaLTC2 = le.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = m;
    const b = i.hash;
    (b.directionalLength !== _ || b.pointLength !== g || b.spotLength !== p || b.rectAreaLength !== v || b.hemiLength !== x || b.numDirectionalShadows !== y || b.numPointShadows !== S || b.numSpotShadows !== E || b.numSpotMaps !== T) && (i.directional.length = _, i.spot.length = p, i.rectArea.length = v, i.point.length = g, i.hemi.length = x, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = S, i.pointShadowMap.length = S, i.spotShadow.length = E, i.spotShadowMap.length = E, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = S, i.spotLightMatrix.length = E + T - R, i.spotLightMap.length = T, i.numSpotLightShadowsWithMaps = R, b.directionalLength = _, b.pointLength = g, b.spotLength = p, b.rectAreaLength = v, b.hemiLength = x, b.numDirectionalShadows = y, b.numPointShadows = S, b.numSpotShadows = E, b.numSpotMaps = T, i.version = ev++);
  }
  function l(h, u) {
    let d = 0, f = 0, m = 0, _ = 0, g = 0;
    const p = u.matrixWorldInverse;
    for (let v = 0, x = h.length; v < x; v++) {
      const y = h[v];
      if (y.isDirectionalLight) {
        const S = i.directional[d];
        S.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(p), d++;
      } else if (y.isSpotLight) {
        const S = i.spot[m];
        S.position.setFromMatrixPosition(y.matrixWorld), S.position.applyMatrix4(p), S.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(p), m++;
      } else if (y.isRectAreaLight) {
        const S = i.rectArea[_];
        S.position.setFromMatrixPosition(y.matrixWorld), S.position.applyMatrix4(p), a.identity(), o.copy(y.matrixWorld), o.premultiply(p), a.extractRotation(o), S.halfWidth.set(y.width * 0.5, 0, 0), S.halfHeight.set(0, y.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), _++;
      } else if (y.isPointLight) {
        const S = i.point[f];
        S.position.setFromMatrixPosition(y.matrixWorld), S.position.applyMatrix4(p), f++;
      } else if (y.isHemisphereLight) {
        const S = i.hemi[g];
        S.direction.setFromMatrixPosition(y.matrixWorld), S.direction.transformDirection(p), g++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Nu(r, e) {
  const t = new nv(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
    i.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: a
  };
}
function iv(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new Nu(r, e), t.set(s, [c])) : o >= a.length ? (c = new Nu(r, e), a.push(c)) : c = a[o], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class mh extends Rt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Bf, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class gh extends Rt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const sv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, rv = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function ov(r, e, t) {
  let n = new Oa();
  const i = new j(), s = new j(), o = new it(), a = new mh({ depthPacking: zf }), c = new gh(), l = {}, h = t.maxTextureSize, u = { [Sn]: Wt, [Wt]: Sn, [Mn]: Mn }, d = new En({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new j() },
      radius: { value: 4 }
    },
    vertexShader: sv,
    fragmentShader: rv
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new Ye();
  m.setAttribute(
    "position",
    new rt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new St(m, d), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = $l;
  let p = this.type;
  this.render = function(S, E, T) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || S.length === 0)
      return;
    const R = r.getRenderTarget(), M = r.getActiveCubeFace(), b = r.getActiveMipmapLevel(), U = r.state;
    U.setBlending(ei), U.buffers.color.setClear(1, 1, 1, 1), U.buffers.depth.setTest(!0), U.setScissorTest(!1);
    const k = p !== Un && this.type === Un, D = p === Un && this.type !== Un;
    for (let F = 0, N = S.length; F < N; F++) {
      const K = S[F], W = K.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1)
        continue;
      i.copy(W.mapSize);
      const Y = W.getFrameExtents();
      if (i.multiply(Y), s.copy(W.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / Y.x), i.x = s.x * Y.x, W.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / Y.y), i.y = s.y * Y.y, W.mapSize.y = s.y)), W.map === null || k === !0 || D === !0) {
        const Q = this.type !== Un ? { minFilter: _t, magFilter: _t } : {};
        W.map !== null && W.map.dispose(), W.map = new pn(i.x, i.y, Q), W.map.texture.name = K.name + ".shadowMap", W.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(W.map), r.clear();
      const ee = W.getViewportCount();
      for (let Q = 0; Q < ee; Q++) {
        const z = W.getViewport(Q);
        o.set(
          s.x * z.x,
          s.y * z.y,
          s.x * z.z,
          s.y * z.w
        ), U.viewport(o), W.updateMatrices(K, Q), n = W.getFrustum(), y(E, T, W.camera, K, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === Un && v(W, T), W.needsUpdate = !1;
    }
    p = this.type, g.needsUpdate = !1, r.setRenderTarget(R, M, b);
  };
  function v(S, E) {
    const T = e.update(_);
    d.defines.VSM_SAMPLES !== S.blurSamples && (d.defines.VSM_SAMPLES = S.blurSamples, f.defines.VSM_SAMPLES = S.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), S.mapPass === null && (S.mapPass = new pn(i.x, i.y)), d.uniforms.shadow_pass.value = S.map.texture, d.uniforms.resolution.value = S.mapSize, d.uniforms.radius.value = S.radius, r.setRenderTarget(S.mapPass), r.clear(), r.renderBufferDirect(E, null, T, d, _, null), f.uniforms.shadow_pass.value = S.mapPass.texture, f.uniforms.resolution.value = S.mapSize, f.uniforms.radius.value = S.radius, r.setRenderTarget(S.map), r.clear(), r.renderBufferDirect(E, null, T, f, _, null);
  }
  function x(S, E, T, R) {
    let M = null;
    const b = T.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
    if (b !== void 0)
      M = b;
    else if (M = T.isPointLight === !0 ? c : a, r.localClippingEnabled && E.clipShadows === !0 && Array.isArray(E.clippingPlanes) && E.clippingPlanes.length !== 0 || E.displacementMap && E.displacementScale !== 0 || E.alphaMap && E.alphaTest > 0 || E.map && E.alphaTest > 0) {
      const U = M.uuid, k = E.uuid;
      let D = l[U];
      D === void 0 && (D = {}, l[U] = D);
      let F = D[k];
      F === void 0 && (F = M.clone(), D[k] = F), M = F;
    }
    if (M.visible = E.visible, M.wireframe = E.wireframe, R === Un ? M.side = E.shadowSide !== null ? E.shadowSide : E.side : M.side = E.shadowSide !== null ? E.shadowSide : u[E.side], M.alphaMap = E.alphaMap, M.alphaTest = E.alphaTest, M.map = E.map, M.clipShadows = E.clipShadows, M.clippingPlanes = E.clippingPlanes, M.clipIntersection = E.clipIntersection, M.displacementMap = E.displacementMap, M.displacementScale = E.displacementScale, M.displacementBias = E.displacementBias, M.wireframeLinewidth = E.wireframeLinewidth, M.linewidth = E.linewidth, T.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const U = r.properties.get(M);
      U.light = T;
    }
    return M;
  }
  function y(S, E, T, R, M) {
    if (S.visible === !1)
      return;
    if (S.layers.test(E.layers) && (S.isMesh || S.isLine || S.isPoints) && (S.castShadow || S.receiveShadow && M === Un) && (!S.frustumCulled || n.intersectsObject(S))) {
      S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, S.matrixWorld);
      const k = e.update(S), D = S.material;
      if (Array.isArray(D)) {
        const F = k.groups;
        for (let N = 0, K = F.length; N < K; N++) {
          const W = F[N], Y = D[W.materialIndex];
          if (Y && Y.visible) {
            const ee = x(S, Y, R, M);
            r.renderBufferDirect(T, null, k, ee, S, W);
          }
        }
      } else if (D.visible) {
        const F = x(S, D, R, M);
        r.renderBufferDirect(T, null, k, F, S, null);
      }
    }
    const U = S.children;
    for (let k = 0, D = U.length; k < D; k++)
      y(U[k], E, T, R, M);
  }
}
function av(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let I = !1;
    const de = new it();
    let G = null;
    const ce = new it(0, 0, 0, 0);
    return {
      setMask: function(pe) {
        G !== pe && !I && (r.colorMask(pe, pe, pe, pe), G = pe);
      },
      setLocked: function(pe) {
        I = pe;
      },
      setClear: function(pe, et, ut, Et, ui) {
        ui === !0 && (pe *= Et, et *= Et, ut *= Et), de.set(pe, et, ut, Et), ce.equals(de) === !1 && (r.clearColor(pe, et, ut, Et), ce.copy(de));
      },
      reset: function() {
        I = !1, G = null, ce.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let I = !1, de = null, G = null, ce = null;
    return {
      setTest: function(pe) {
        pe ? Ae(r.DEPTH_TEST) : we(r.DEPTH_TEST);
      },
      setMask: function(pe) {
        de !== pe && !I && (r.depthMask(pe), de = pe);
      },
      setFunc: function(pe) {
        if (G !== pe) {
          switch (pe) {
            case df:
              r.depthFunc(r.NEVER);
              break;
            case ff:
              r.depthFunc(r.ALWAYS);
              break;
            case pf:
              r.depthFunc(r.LESS);
              break;
            case ya:
              r.depthFunc(r.LEQUAL);
              break;
            case mf:
              r.depthFunc(r.EQUAL);
              break;
            case gf:
              r.depthFunc(r.GEQUAL);
              break;
            case _f:
              r.depthFunc(r.GREATER);
              break;
            case yf:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          G = pe;
        }
      },
      setLocked: function(pe) {
        I = pe;
      },
      setClear: function(pe) {
        ce !== pe && (r.clearDepth(pe), ce = pe);
      },
      reset: function() {
        I = !1, de = null, G = null, ce = null;
      }
    };
  }
  function o() {
    let I = !1, de = null, G = null, ce = null, pe = null, et = null, ut = null, Et = null, ui = null;
    return {
      setTest: function(ct) {
        I || (ct ? Ae(r.STENCIL_TEST) : we(r.STENCIL_TEST));
      },
      setMask: function(ct) {
        de !== ct && !I && (r.stencilMask(ct), de = ct);
      },
      setFunc: function(ct, Cn, Ht) {
        (G !== ct || ce !== Cn || pe !== Ht) && (r.stencilFunc(ct, Cn, Ht), G = ct, ce = Cn, pe = Ht);
      },
      setOp: function(ct, Cn, Ht) {
        (et !== ct || ut !== Cn || Et !== Ht) && (r.stencilOp(ct, Cn, Ht), et = ct, ut = Cn, Et = Ht);
      },
      setLocked: function(ct) {
        I = ct;
      },
      setClear: function(ct) {
        ui !== ct && (r.clearStencil(ct), ui = ct);
      },
      reset: function() {
        I = !1, de = null, G = null, ce = null, pe = null, et = null, ut = null, Et = null, ui = null;
      }
    };
  }
  const a = new i(), c = new s(), l = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, f = {}, m = /* @__PURE__ */ new WeakMap(), _ = [], g = null, p = !1, v = null, x = null, y = null, S = null, E = null, T = null, R = null, M = !1, b = null, U = null, k = null, D = null, F = null;
  const N = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1, W = 0;
  const Y = r.getParameter(r.VERSION);
  Y.indexOf("WebGL") !== -1 ? (W = parseFloat(/^WebGL (\d)/.exec(Y)[1]), K = W >= 1) : Y.indexOf("OpenGL ES") !== -1 && (W = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), K = W >= 2);
  let ee = null, Q = {};
  const z = r.getParameter(r.SCISSOR_BOX), X = r.getParameter(r.VIEWPORT), ue = new it().fromArray(z), fe = new it().fromArray(X);
  function me(I, de, G, ce) {
    const pe = new Uint8Array(4), et = r.createTexture();
    r.bindTexture(I, et), r.texParameteri(I, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(I, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let ut = 0; ut < G; ut++)
      n && (I === r.TEXTURE_3D || I === r.TEXTURE_2D_ARRAY) ? r.texImage3D(de, 0, r.RGBA, 1, 1, ce, 0, r.RGBA, r.UNSIGNED_BYTE, pe) : r.texImage2D(de + ut, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, pe);
    return et;
  }
  const be = {};
  be[r.TEXTURE_2D] = me(r.TEXTURE_2D, r.TEXTURE_2D, 1), be[r.TEXTURE_CUBE_MAP] = me(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (be[r.TEXTURE_2D_ARRAY] = me(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), be[r.TEXTURE_3D] = me(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Ae(r.DEPTH_TEST), c.setFunc(ya), te(!1), Ee(al), Ae(r.CULL_FACE), J(ei);
  function Ae(I) {
    d[I] !== !0 && (r.enable(I), d[I] = !0);
  }
  function we(I) {
    d[I] !== !1 && (r.disable(I), d[I] = !1);
  }
  function nt(I, de) {
    return f[I] !== de ? (r.bindFramebuffer(I, de), f[I] = de, n && (I === r.DRAW_FRAMEBUFFER && (f[r.FRAMEBUFFER] = de), I === r.FRAMEBUFFER && (f[r.DRAW_FRAMEBUFFER] = de)), !0) : !1;
  }
  function ht(I, de) {
    let G = _, ce = !1;
    if (I)
      if (G = m.get(de), G === void 0 && (G = [], m.set(de, G)), I.isWebGLMultipleRenderTargets) {
        const pe = I.texture;
        if (G.length !== pe.length || G[0] !== r.COLOR_ATTACHMENT0) {
          for (let et = 0, ut = pe.length; et < ut; et++)
            G[et] = r.COLOR_ATTACHMENT0 + et;
          G.length = pe.length, ce = !0;
        }
      } else
        G[0] !== r.COLOR_ATTACHMENT0 && (G[0] = r.COLOR_ATTACHMENT0, ce = !0);
    else
      G[0] !== r.BACK && (G[0] = r.BACK, ce = !0);
    ce && (t.isWebGL2 ? r.drawBuffers(G) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G));
  }
  function Ue(I) {
    return g !== I ? (r.useProgram(I), g = I, !0) : !1;
  }
  const P = {
    [$i]: r.FUNC_ADD,
    [ef]: r.FUNC_SUBTRACT,
    [tf]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    P[ul] = r.MIN, P[dl] = r.MAX;
  else {
    const I = e.get("EXT_blend_minmax");
    I !== null && (P[ul] = I.MIN_EXT, P[dl] = I.MAX_EXT);
  }
  const ae = {
    [nf]: r.ZERO,
    [sf]: r.ONE,
    [rf]: r.SRC_COLOR,
    [Kl]: r.SRC_ALPHA,
    [uf]: r.SRC_ALPHA_SATURATE,
    [lf]: r.DST_COLOR,
    [af]: r.DST_ALPHA,
    [of]: r.ONE_MINUS_SRC_COLOR,
    [Jl]: r.ONE_MINUS_SRC_ALPHA,
    [hf]: r.ONE_MINUS_DST_COLOR,
    [cf]: r.ONE_MINUS_DST_ALPHA
  };
  function J(I, de, G, ce, pe, et, ut, Et) {
    if (I === ei) {
      p === !0 && (we(r.BLEND), p = !1);
      return;
    }
    if (p === !1 && (Ae(r.BLEND), p = !0), I !== Qd) {
      if (I !== v || Et !== M) {
        if ((x !== $i || E !== $i) && (r.blendEquation(r.FUNC_ADD), x = $i, E = $i), Et)
          switch (I) {
            case es:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case cl:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case ll:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case hl:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case es:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case cl:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case ll:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case hl:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        y = null, S = null, T = null, R = null, v = I, M = Et;
      }
      return;
    }
    pe = pe || de, et = et || G, ut = ut || ce, (de !== x || pe !== E) && (r.blendEquationSeparate(P[de], P[pe]), x = de, E = pe), (G !== y || ce !== S || et !== T || ut !== R) && (r.blendFuncSeparate(ae[G], ae[ce], ae[et], ae[ut]), y = G, S = ce, T = et, R = ut), v = I, M = !1;
  }
  function re(I, de) {
    I.side === Mn ? we(r.CULL_FACE) : Ae(r.CULL_FACE);
    let G = I.side === Wt;
    de && (G = !G), te(G), I.blending === es && I.transparent === !1 ? J(ei) : J(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.premultipliedAlpha), c.setFunc(I.depthFunc), c.setTest(I.depthTest), c.setMask(I.depthWrite), a.setMask(I.colorWrite);
    const ce = I.stencilWrite;
    l.setTest(ce), ce && (l.setMask(I.stencilWriteMask), l.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), l.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), ye(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === !0 ? Ae(r.SAMPLE_ALPHA_TO_COVERAGE) : we(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function te(I) {
    b !== I && (I ? r.frontFace(r.CW) : r.frontFace(r.CCW), b = I);
  }
  function Ee(I) {
    I !== Jd ? (Ae(r.CULL_FACE), I !== U && (I === al ? r.cullFace(r.BACK) : I === jd ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : we(r.CULL_FACE), U = I;
  }
  function ge(I) {
    I !== k && (K && r.lineWidth(I), k = I);
  }
  function ye(I, de, G) {
    I ? (Ae(r.POLYGON_OFFSET_FILL), (D !== de || F !== G) && (r.polygonOffset(de, G), D = de, F = G)) : we(r.POLYGON_OFFSET_FILL);
  }
  function He(I) {
    I ? Ae(r.SCISSOR_TEST) : we(r.SCISSOR_TEST);
  }
  function Je(I) {
    I === void 0 && (I = r.TEXTURE0 + N - 1), ee !== I && (r.activeTexture(I), ee = I);
  }
  function pt(I, de, G) {
    G === void 0 && (ee === null ? G = r.TEXTURE0 + N - 1 : G = ee);
    let ce = Q[G];
    ce === void 0 && (ce = { type: void 0, texture: void 0 }, Q[G] = ce), (ce.type !== I || ce.texture !== de) && (ee !== G && (r.activeTexture(G), ee = G), r.bindTexture(I, de || be[I]), ce.type = I, ce.texture = de);
  }
  function L() {
    const I = Q[ee];
    I !== void 0 && I.type !== void 0 && (r.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
  }
  function A() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function H() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ie() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ne() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function se() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Se() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function oe() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function V() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Ce() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Te() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Re(I) {
    ue.equals(I) === !1 && (r.scissor(I.x, I.y, I.z, I.w), ue.copy(I));
  }
  function ve(I) {
    fe.equals(I) === !1 && (r.viewport(I.x, I.y, I.z, I.w), fe.copy(I));
  }
  function Me(I, de) {
    let G = u.get(de);
    G === void 0 && (G = /* @__PURE__ */ new WeakMap(), u.set(de, G));
    let ce = G.get(I);
    ce === void 0 && (ce = r.getUniformBlockIndex(de, I.name), G.set(I, ce));
  }
  function qe(I, de) {
    const ce = u.get(de).get(I);
    h.get(de) !== ce && (r.uniformBlockBinding(de, ce, I.__bindingPointIndex), h.set(de, ce));
  }
  function ot() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, ee = null, Q = {}, f = {}, m = /* @__PURE__ */ new WeakMap(), _ = [], g = null, p = !1, v = null, x = null, y = null, S = null, E = null, T = null, R = null, M = !1, b = null, U = null, k = null, D = null, F = null, ue.set(0, 0, r.canvas.width, r.canvas.height), fe.set(0, 0, r.canvas.width, r.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: Ae,
    disable: we,
    bindFramebuffer: nt,
    drawBuffers: ht,
    useProgram: Ue,
    setBlending: J,
    setMaterial: re,
    setFlipSided: te,
    setCullFace: Ee,
    setLineWidth: ge,
    setPolygonOffset: ye,
    setScissorTest: He,
    activeTexture: Je,
    bindTexture: pt,
    unbindTexture: L,
    compressedTexImage2D: A,
    compressedTexImage3D: H,
    texImage2D: Ce,
    texImage3D: Te,
    updateUBOMapping: Me,
    uniformBlockBinding: qe,
    texStorage2D: oe,
    texStorage3D: V,
    texSubImage2D: ie,
    texSubImage3D: ne,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: Se,
    scissor: Re,
    viewport: ve,
    reset: ot
  };
}
function cv(r, e, t, n, i, s, o) {
  const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, f = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), m = /* @__PURE__ */ new WeakMap();
  let _;
  const g = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(L, A) {
    return p ? new OffscreenCanvas(L, A) : $r("canvas");
  }
  function x(L, A, H, ie) {
    let ne = 1;
    if ((L.width > ie || L.height > ie) && (ne = ie / Math.max(L.width, L.height)), ne < 1 || A === !0)
      if (typeof HTMLImageElement < "u" && L instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && L instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && L instanceof ImageBitmap) {
        const se = A ? Ma : Math.floor, Se = se(ne * L.width), oe = se(ne * L.height);
        _ === void 0 && (_ = v(Se, oe));
        const V = H ? v(Se, oe) : _;
        return V.width = Se, V.height = oe, V.getContext("2d").drawImage(L, 0, 0, Se, oe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + L.width + "x" + L.height + ") to (" + Se + "x" + oe + ")."), V;
      } else
        return "data" in L && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + L.width + "x" + L.height + ")."), L;
    return L;
  }
  function y(L) {
    return Fl(L.width) && Fl(L.height);
  }
  function S(L) {
    return a ? !1 : L.wrapS !== Dt || L.wrapT !== Dt || L.minFilter !== _t && L.minFilter !== lt;
  }
  function E(L, A) {
    return L.generateMipmaps && A && L.minFilter !== _t && L.minFilter !== lt;
  }
  function T(L) {
    r.generateMipmap(L);
  }
  function R(L, A, H, ie, ne = !1) {
    if (a === !1)
      return A;
    if (L !== null) {
      if (r[L] !== void 0)
        return r[L];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + L + "'");
    }
    let se = A;
    return A === r.RED && (H === r.FLOAT && (se = r.R32F), H === r.HALF_FLOAT && (se = r.R16F), H === r.UNSIGNED_BYTE && (se = r.R8)), A === r.RED_INTEGER && (H === r.UNSIGNED_BYTE && (se = r.R8UI), H === r.UNSIGNED_SHORT && (se = r.R16UI), H === r.UNSIGNED_INT && (se = r.R32UI), H === r.BYTE && (se = r.R8I), H === r.SHORT && (se = r.R16I), H === r.INT && (se = r.R32I)), A === r.RG && (H === r.FLOAT && (se = r.RG32F), H === r.HALF_FLOAT && (se = r.RG16F), H === r.UNSIGNED_BYTE && (se = r.RG8)), A === r.RGBA && (H === r.FLOAT && (se = r.RGBA32F), H === r.HALF_FLOAT && (se = r.RGBA16F), H === r.UNSIGNED_BYTE && (se = ie === De && ne === !1 ? r.SRGB8_ALPHA8 : r.RGBA8), H === r.UNSIGNED_SHORT_4_4_4_4 && (se = r.RGBA4), H === r.UNSIGNED_SHORT_5_5_5_1 && (se = r.RGB5_A1)), (se === r.R16F || se === r.R32F || se === r.RG16F || se === r.RG32F || se === r.RGBA16F || se === r.RGBA32F) && e.get("EXT_color_buffer_float"), se;
  }
  function M(L, A, H) {
    return E(L, H) === !0 || L.isFramebufferTexture && L.minFilter !== _t && L.minFilter !== lt ? Math.log2(Math.max(A.width, A.height)) + 1 : L.mipmaps !== void 0 && L.mipmaps.length > 0 ? L.mipmaps.length : L.isCompressedTexture && Array.isArray(L.image) ? A.mipmaps.length : 1;
  }
  function b(L) {
    return L === _t || L === Wr || L === Ys ? r.NEAREST : r.LINEAR;
  }
  function U(L) {
    const A = L.target;
    A.removeEventListener("dispose", U), D(A), A.isVideoTexture && m.delete(A);
  }
  function k(L) {
    const A = L.target;
    A.removeEventListener("dispose", k), N(A);
  }
  function D(L) {
    const A = n.get(L);
    if (A.__webglInit === void 0)
      return;
    const H = L.source, ie = g.get(H);
    if (ie) {
      const ne = ie[A.__cacheKey];
      ne.usedTimes--, ne.usedTimes === 0 && F(L), Object.keys(ie).length === 0 && g.delete(H);
    }
    n.remove(L);
  }
  function F(L) {
    const A = n.get(L);
    r.deleteTexture(A.__webglTexture);
    const H = L.source, ie = g.get(H);
    delete ie[A.__cacheKey], o.memory.textures--;
  }
  function N(L) {
    const A = L.texture, H = n.get(L), ie = n.get(A);
    if (ie.__webglTexture !== void 0 && (r.deleteTexture(ie.__webglTexture), o.memory.textures--), L.depthTexture && L.depthTexture.dispose(), L.isWebGLCubeRenderTarget)
      for (let ne = 0; ne < 6; ne++) {
        if (Array.isArray(H.__webglFramebuffer[ne]))
          for (let se = 0; se < H.__webglFramebuffer[ne].length; se++)
            r.deleteFramebuffer(H.__webglFramebuffer[ne][se]);
        else
          r.deleteFramebuffer(H.__webglFramebuffer[ne]);
        H.__webglDepthbuffer && r.deleteRenderbuffer(H.__webglDepthbuffer[ne]);
      }
    else {
      if (Array.isArray(H.__webglFramebuffer))
        for (let ne = 0; ne < H.__webglFramebuffer.length; ne++)
          r.deleteFramebuffer(H.__webglFramebuffer[ne]);
      else
        r.deleteFramebuffer(H.__webglFramebuffer);
      if (H.__webglDepthbuffer && r.deleteRenderbuffer(H.__webglDepthbuffer), H.__webglMultisampledFramebuffer && r.deleteFramebuffer(H.__webglMultisampledFramebuffer), H.__webglColorRenderbuffer)
        for (let ne = 0; ne < H.__webglColorRenderbuffer.length; ne++)
          H.__webglColorRenderbuffer[ne] && r.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);
      H.__webglDepthRenderbuffer && r.deleteRenderbuffer(H.__webglDepthRenderbuffer);
    }
    if (L.isWebGLMultipleRenderTargets)
      for (let ne = 0, se = A.length; ne < se; ne++) {
        const Se = n.get(A[ne]);
        Se.__webglTexture && (r.deleteTexture(Se.__webglTexture), o.memory.textures--), n.remove(A[ne]);
      }
    n.remove(A), n.remove(L);
  }
  let K = 0;
  function W() {
    K = 0;
  }
  function Y() {
    const L = K;
    return L >= c && console.warn("THREE.WebGLTextures: Trying to use " + L + " texture units while this GPU supports only " + c), K += 1, L;
  }
  function ee(L) {
    const A = [];
    return A.push(L.wrapS), A.push(L.wrapT), A.push(L.wrapR || 0), A.push(L.magFilter), A.push(L.minFilter), A.push(L.anisotropy), A.push(L.internalFormat), A.push(L.format), A.push(L.type), A.push(L.generateMipmaps), A.push(L.premultiplyAlpha), A.push(L.flipY), A.push(L.unpackAlignment), A.push(L.colorSpace), A.join();
  }
  function Q(L, A) {
    const H = n.get(L);
    if (L.isVideoTexture && Je(L), L.isRenderTargetTexture === !1 && L.version > 0 && H.__version !== L.version) {
      const ie = L.image;
      if (ie === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ie.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        nt(H, L, A);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, H.__webglTexture, r.TEXTURE0 + A);
  }
  function z(L, A) {
    const H = n.get(L);
    if (L.version > 0 && H.__version !== L.version) {
      nt(H, L, A);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, H.__webglTexture, r.TEXTURE0 + A);
  }
  function X(L, A) {
    const H = n.get(L);
    if (L.version > 0 && H.__version !== L.version) {
      nt(H, L, A);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, H.__webglTexture, r.TEXTURE0 + A);
  }
  function ue(L, A) {
    const H = n.get(L);
    if (L.version > 0 && H.__version !== L.version) {
      ht(H, L, A);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, H.__webglTexture, r.TEXTURE0 + A);
  }
  const fe = {
    [si]: r.REPEAT,
    [Dt]: r.CLAMP_TO_EDGE,
    [Js]: r.MIRRORED_REPEAT
  }, me = {
    [_t]: r.NEAREST,
    [Wr]: r.NEAREST_MIPMAP_NEAREST,
    [Ys]: r.NEAREST_MIPMAP_LINEAR,
    [lt]: r.LINEAR,
    [Ca]: r.LINEAR_MIPMAP_NEAREST,
    [Bn]: r.LINEAR_MIPMAP_LINEAR
  }, be = {
    [Vf]: r.NEVER,
    [Zf]: r.ALWAYS,
    [Gf]: r.LESS,
    [Xf]: r.LEQUAL,
    [Wf]: r.EQUAL,
    [$f]: r.GEQUAL,
    [Yf]: r.GREATER,
    [qf]: r.NOTEQUAL
  };
  function Ae(L, A, H) {
    if (H ? (r.texParameteri(L, r.TEXTURE_WRAP_S, fe[A.wrapS]), r.texParameteri(L, r.TEXTURE_WRAP_T, fe[A.wrapT]), (L === r.TEXTURE_3D || L === r.TEXTURE_2D_ARRAY) && r.texParameteri(L, r.TEXTURE_WRAP_R, fe[A.wrapR]), r.texParameteri(L, r.TEXTURE_MAG_FILTER, me[A.magFilter]), r.texParameteri(L, r.TEXTURE_MIN_FILTER, me[A.minFilter])) : (r.texParameteri(L, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(L, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (L === r.TEXTURE_3D || L === r.TEXTURE_2D_ARRAY) && r.texParameteri(L, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (A.wrapS !== Dt || A.wrapT !== Dt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(L, r.TEXTURE_MAG_FILTER, b(A.magFilter)), r.texParameteri(L, r.TEXTURE_MIN_FILTER, b(A.minFilter)), A.minFilter !== _t && A.minFilter !== lt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), A.compareFunction && (r.texParameteri(L, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(L, r.TEXTURE_COMPARE_FUNC, be[A.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const ie = e.get("EXT_texture_filter_anisotropic");
      if (A.magFilter === _t || A.minFilter !== Ys && A.minFilter !== Bn || A.type === Qt && e.has("OES_texture_float_linear") === !1 || a === !1 && A.type === Dn && e.has("OES_texture_half_float_linear") === !1)
        return;
      (A.anisotropy > 1 || n.get(A).__currentAnisotropy) && (r.texParameterf(L, ie.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(A.anisotropy, i.getMaxAnisotropy())), n.get(A).__currentAnisotropy = A.anisotropy);
    }
  }
  function we(L, A) {
    let H = !1;
    L.__webglInit === void 0 && (L.__webglInit = !0, A.addEventListener("dispose", U));
    const ie = A.source;
    let ne = g.get(ie);
    ne === void 0 && (ne = {}, g.set(ie, ne));
    const se = ee(A);
    if (se !== L.__cacheKey) {
      ne[se] === void 0 && (ne[se] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, H = !0), ne[se].usedTimes++;
      const Se = ne[L.__cacheKey];
      Se !== void 0 && (ne[L.__cacheKey].usedTimes--, Se.usedTimes === 0 && F(A)), L.__cacheKey = se, L.__webglTexture = ne[se].texture;
    }
    return H;
  }
  function nt(L, A, H) {
    let ie = r.TEXTURE_2D;
    (A.isDataArrayTexture || A.isCompressedArrayTexture) && (ie = r.TEXTURE_2D_ARRAY), A.isData3DTexture && (ie = r.TEXTURE_3D);
    const ne = we(L, A), se = A.source;
    t.bindTexture(ie, L.__webglTexture, r.TEXTURE0 + H);
    const Se = n.get(se);
    if (se.version !== Se.__version || ne === !0) {
      t.activeTexture(r.TEXTURE0 + H), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, A.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, A.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const oe = S(A) && y(A.image) === !1;
      let V = x(A.image, oe, !1, h);
      V = pt(A, V);
      const Ce = y(V) || a, Te = s.convert(A.format, A.colorSpace);
      let Re = s.convert(A.type), ve = R(A.internalFormat, Te, Re, A.colorSpace);
      Ae(ie, A, Ce);
      let Me;
      const qe = A.mipmaps, ot = a && A.isVideoTexture !== !0, I = Se.__version === void 0 || ne === !0, de = M(A, V, Ce);
      if (A.isDepthTexture)
        ve = r.DEPTH_COMPONENT, a ? A.type === Qt ? ve = r.DEPTH_COMPONENT32F : A.type === jn ? ve = r.DEPTH_COMPONENT24 : A.type === Mi ? ve = r.DEPTH24_STENCIL8 : ve = r.DEPTH_COMPONENT16 : A.type === Qt && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), A.format === Si && ve === r.DEPTH_COMPONENT && A.type !== La && A.type !== jn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), A.type = jn, Re = s.convert(A.type)), A.format === is && ve === r.DEPTH_COMPONENT && (ve = r.DEPTH_STENCIL, A.type !== Mi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), A.type = Mi, Re = s.convert(A.type))), I && (ot ? t.texStorage2D(r.TEXTURE_2D, 1, ve, V.width, V.height) : t.texImage2D(r.TEXTURE_2D, 0, ve, V.width, V.height, 0, Te, Re, null));
      else if (A.isDataTexture)
        if (qe.length > 0 && Ce) {
          ot && I && t.texStorage2D(r.TEXTURE_2D, de, ve, qe[0].width, qe[0].height);
          for (let G = 0, ce = qe.length; G < ce; G++)
            Me = qe[G], ot ? t.texSubImage2D(r.TEXTURE_2D, G, 0, 0, Me.width, Me.height, Te, Re, Me.data) : t.texImage2D(r.TEXTURE_2D, G, ve, Me.width, Me.height, 0, Te, Re, Me.data);
          A.generateMipmaps = !1;
        } else
          ot ? (I && t.texStorage2D(r.TEXTURE_2D, de, ve, V.width, V.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, V.width, V.height, Te, Re, V.data)) : t.texImage2D(r.TEXTURE_2D, 0, ve, V.width, V.height, 0, Te, Re, V.data);
      else if (A.isCompressedTexture)
        if (A.isCompressedArrayTexture) {
          ot && I && t.texStorage3D(r.TEXTURE_2D_ARRAY, de, ve, qe[0].width, qe[0].height, V.depth);
          for (let G = 0, ce = qe.length; G < ce; G++)
            Me = qe[G], A.format !== jt ? Te !== null ? ot ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, G, 0, 0, 0, Me.width, Me.height, V.depth, Te, Me.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, G, ve, Me.width, Me.height, V.depth, 0, Me.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ot ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, G, 0, 0, 0, Me.width, Me.height, V.depth, Te, Re, Me.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, G, ve, Me.width, Me.height, V.depth, 0, Te, Re, Me.data);
        } else {
          ot && I && t.texStorage2D(r.TEXTURE_2D, de, ve, qe[0].width, qe[0].height);
          for (let G = 0, ce = qe.length; G < ce; G++)
            Me = qe[G], A.format !== jt ? Te !== null ? ot ? t.compressedTexSubImage2D(r.TEXTURE_2D, G, 0, 0, Me.width, Me.height, Te, Me.data) : t.compressedTexImage2D(r.TEXTURE_2D, G, ve, Me.width, Me.height, 0, Me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ot ? t.texSubImage2D(r.TEXTURE_2D, G, 0, 0, Me.width, Me.height, Te, Re, Me.data) : t.texImage2D(r.TEXTURE_2D, G, ve, Me.width, Me.height, 0, Te, Re, Me.data);
        }
      else if (A.isDataArrayTexture)
        ot ? (I && t.texStorage3D(r.TEXTURE_2D_ARRAY, de, ve, V.width, V.height, V.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, V.width, V.height, V.depth, Te, Re, V.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, ve, V.width, V.height, V.depth, 0, Te, Re, V.data);
      else if (A.isData3DTexture)
        ot ? (I && t.texStorage3D(r.TEXTURE_3D, de, ve, V.width, V.height, V.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, V.width, V.height, V.depth, Te, Re, V.data)) : t.texImage3D(r.TEXTURE_3D, 0, ve, V.width, V.height, V.depth, 0, Te, Re, V.data);
      else if (A.isFramebufferTexture) {
        if (I)
          if (ot)
            t.texStorage2D(r.TEXTURE_2D, de, ve, V.width, V.height);
          else {
            let G = V.width, ce = V.height;
            for (let pe = 0; pe < de; pe++)
              t.texImage2D(r.TEXTURE_2D, pe, ve, G, ce, 0, Te, Re, null), G >>= 1, ce >>= 1;
          }
      } else if (qe.length > 0 && Ce) {
        ot && I && t.texStorage2D(r.TEXTURE_2D, de, ve, qe[0].width, qe[0].height);
        for (let G = 0, ce = qe.length; G < ce; G++)
          Me = qe[G], ot ? t.texSubImage2D(r.TEXTURE_2D, G, 0, 0, Te, Re, Me) : t.texImage2D(r.TEXTURE_2D, G, ve, Te, Re, Me);
        A.generateMipmaps = !1;
      } else
        ot ? (I && t.texStorage2D(r.TEXTURE_2D, de, ve, V.width, V.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Te, Re, V)) : t.texImage2D(r.TEXTURE_2D, 0, ve, Te, Re, V);
      E(A, Ce) && T(ie), Se.__version = se.version, A.onUpdate && A.onUpdate(A);
    }
    L.__version = A.version;
  }
  function ht(L, A, H) {
    if (A.image.length !== 6)
      return;
    const ie = we(L, A), ne = A.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, L.__webglTexture, r.TEXTURE0 + H);
    const se = n.get(ne);
    if (ne.version !== se.__version || ie === !0) {
      t.activeTexture(r.TEXTURE0 + H), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, A.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, A.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const Se = A.isCompressedTexture || A.image[0].isCompressedTexture, oe = A.image[0] && A.image[0].isDataTexture, V = [];
      for (let G = 0; G < 6; G++)
        !Se && !oe ? V[G] = x(A.image[G], !1, !0, l) : V[G] = oe ? A.image[G].image : A.image[G], V[G] = pt(A, V[G]);
      const Ce = V[0], Te = y(Ce) || a, Re = s.convert(A.format, A.colorSpace), ve = s.convert(A.type), Me = R(A.internalFormat, Re, ve, A.colorSpace), qe = a && A.isVideoTexture !== !0, ot = se.__version === void 0 || ie === !0;
      let I = M(A, Ce, Te);
      Ae(r.TEXTURE_CUBE_MAP, A, Te);
      let de;
      if (Se) {
        qe && ot && t.texStorage2D(r.TEXTURE_CUBE_MAP, I, Me, Ce.width, Ce.height);
        for (let G = 0; G < 6; G++) {
          de = V[G].mipmaps;
          for (let ce = 0; ce < de.length; ce++) {
            const pe = de[ce];
            A.format !== jt ? Re !== null ? qe ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, ce, 0, 0, pe.width, pe.height, Re, pe.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, ce, Me, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, ce, 0, 0, pe.width, pe.height, Re, ve, pe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, ce, Me, pe.width, pe.height, 0, Re, ve, pe.data);
          }
        }
      } else {
        de = A.mipmaps, qe && ot && (de.length > 0 && I++, t.texStorage2D(r.TEXTURE_CUBE_MAP, I, Me, V[0].width, V[0].height));
        for (let G = 0; G < 6; G++)
          if (oe) {
            qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, 0, 0, V[G].width, V[G].height, Re, ve, V[G].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, Me, V[G].width, V[G].height, 0, Re, ve, V[G].data);
            for (let ce = 0; ce < de.length; ce++) {
              const et = de[ce].image[G].image;
              qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, ce + 1, 0, 0, et.width, et.height, Re, ve, et.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, ce + 1, Me, et.width, et.height, 0, Re, ve, et.data);
            }
          } else {
            qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, 0, 0, Re, ve, V[G]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, 0, Me, Re, ve, V[G]);
            for (let ce = 0; ce < de.length; ce++) {
              const pe = de[ce];
              qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, ce + 1, 0, 0, Re, ve, pe.image[G]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + G, ce + 1, Me, Re, ve, pe.image[G]);
            }
          }
      }
      E(A, Te) && T(r.TEXTURE_CUBE_MAP), se.__version = ne.version, A.onUpdate && A.onUpdate(A);
    }
    L.__version = A.version;
  }
  function Ue(L, A, H, ie, ne, se) {
    const Se = s.convert(H.format, H.colorSpace), oe = s.convert(H.type), V = R(H.internalFormat, Se, oe, H.colorSpace);
    if (!n.get(A).__hasExternalTextures) {
      const Te = Math.max(1, A.width >> se), Re = Math.max(1, A.height >> se);
      ne === r.TEXTURE_3D || ne === r.TEXTURE_2D_ARRAY ? t.texImage3D(ne, se, V, Te, Re, A.depth, 0, Se, oe, null) : t.texImage2D(ne, se, V, Te, Re, 0, Se, oe, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, L), He(A) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, ie, ne, n.get(H).__webglTexture, 0, ye(A)) : (ne === r.TEXTURE_2D || ne >= r.TEXTURE_CUBE_MAP_POSITIVE_X && ne <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, ie, ne, n.get(H).__webglTexture, se), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function P(L, A, H) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, L), A.depthBuffer && !A.stencilBuffer) {
      let ie = r.DEPTH_COMPONENT16;
      if (H || He(A)) {
        const ne = A.depthTexture;
        ne && ne.isDepthTexture && (ne.type === Qt ? ie = r.DEPTH_COMPONENT32F : ne.type === jn && (ie = r.DEPTH_COMPONENT24));
        const se = ye(A);
        He(A) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, se, ie, A.width, A.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, se, ie, A.width, A.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, ie, A.width, A.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, L);
    } else if (A.depthBuffer && A.stencilBuffer) {
      const ie = ye(A);
      H && He(A) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ie, r.DEPTH24_STENCIL8, A.width, A.height) : He(A) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ie, r.DEPTH24_STENCIL8, A.width, A.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, A.width, A.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, L);
    } else {
      const ie = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture];
      for (let ne = 0; ne < ie.length; ne++) {
        const se = ie[ne], Se = s.convert(se.format, se.colorSpace), oe = s.convert(se.type), V = R(se.internalFormat, Se, oe, se.colorSpace), Ce = ye(A);
        H && He(A) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Ce, V, A.width, A.height) : He(A) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Ce, V, A.width, A.height) : r.renderbufferStorage(r.RENDERBUFFER, V, A.width, A.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function ae(L, A) {
    if (A && A.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, L), !(A.depthTexture && A.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(A.depthTexture).__webglTexture || A.depthTexture.image.width !== A.width || A.depthTexture.image.height !== A.height) && (A.depthTexture.image.width = A.width, A.depthTexture.image.height = A.height, A.depthTexture.needsUpdate = !0), Q(A.depthTexture, 0);
    const ie = n.get(A.depthTexture).__webglTexture, ne = ye(A);
    if (A.depthTexture.format === Si)
      He(A) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, ie, 0, ne) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, ie, 0);
    else if (A.depthTexture.format === is)
      He(A) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, ie, 0, ne) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, ie, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function J(L) {
    const A = n.get(L), H = L.isWebGLCubeRenderTarget === !0;
    if (L.depthTexture && !A.__autoAllocateDepthBuffer) {
      if (H)
        throw new Error("target.depthTexture not supported in Cube render targets");
      ae(A.__webglFramebuffer, L);
    } else if (H) {
      A.__webglDepthbuffer = [];
      for (let ie = 0; ie < 6; ie++)
        t.bindFramebuffer(r.FRAMEBUFFER, A.__webglFramebuffer[ie]), A.__webglDepthbuffer[ie] = r.createRenderbuffer(), P(A.__webglDepthbuffer[ie], L, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, A.__webglFramebuffer), A.__webglDepthbuffer = r.createRenderbuffer(), P(A.__webglDepthbuffer, L, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function re(L, A, H) {
    const ie = n.get(L);
    A !== void 0 && Ue(ie.__webglFramebuffer, L, L.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), H !== void 0 && J(L);
  }
  function te(L) {
    const A = L.texture, H = n.get(L), ie = n.get(A);
    L.addEventListener("dispose", k), L.isWebGLMultipleRenderTargets !== !0 && (ie.__webglTexture === void 0 && (ie.__webglTexture = r.createTexture()), ie.__version = A.version, o.memory.textures++);
    const ne = L.isWebGLCubeRenderTarget === !0, se = L.isWebGLMultipleRenderTargets === !0, Se = y(L) || a;
    if (ne) {
      H.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++)
        if (a && A.mipmaps && A.mipmaps.length > 0) {
          H.__webglFramebuffer[oe] = [];
          for (let V = 0; V < A.mipmaps.length; V++)
            H.__webglFramebuffer[oe][V] = r.createFramebuffer();
        } else
          H.__webglFramebuffer[oe] = r.createFramebuffer();
    } else {
      if (a && A.mipmaps && A.mipmaps.length > 0) {
        H.__webglFramebuffer = [];
        for (let oe = 0; oe < A.mipmaps.length; oe++)
          H.__webglFramebuffer[oe] = r.createFramebuffer();
      } else
        H.__webglFramebuffer = r.createFramebuffer();
      if (se)
        if (i.drawBuffers) {
          const oe = L.texture;
          for (let V = 0, Ce = oe.length; V < Ce; V++) {
            const Te = n.get(oe[V]);
            Te.__webglTexture === void 0 && (Te.__webglTexture = r.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && L.samples > 0 && He(L) === !1) {
        const oe = se ? A : [A];
        H.__webglMultisampledFramebuffer = r.createFramebuffer(), H.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, H.__webglMultisampledFramebuffer);
        for (let V = 0; V < oe.length; V++) {
          const Ce = oe[V];
          H.__webglColorRenderbuffer[V] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, H.__webglColorRenderbuffer[V]);
          const Te = s.convert(Ce.format, Ce.colorSpace), Re = s.convert(Ce.type), ve = R(Ce.internalFormat, Te, Re, Ce.colorSpace, L.isXRRenderTarget === !0), Me = ye(L);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Me, ve, L.width, L.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + V, r.RENDERBUFFER, H.__webglColorRenderbuffer[V]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), L.depthBuffer && (H.__webglDepthRenderbuffer = r.createRenderbuffer(), P(H.__webglDepthRenderbuffer, L, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (ne) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, ie.__webglTexture), Ae(r.TEXTURE_CUBE_MAP, A, Se);
      for (let oe = 0; oe < 6; oe++)
        if (a && A.mipmaps && A.mipmaps.length > 0)
          for (let V = 0; V < A.mipmaps.length; V++)
            Ue(H.__webglFramebuffer[oe][V], L, A, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, V);
        else
          Ue(H.__webglFramebuffer[oe], L, A, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
      E(A, Se) && T(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (se) {
      const oe = L.texture;
      for (let V = 0, Ce = oe.length; V < Ce; V++) {
        const Te = oe[V], Re = n.get(Te);
        t.bindTexture(r.TEXTURE_2D, Re.__webglTexture), Ae(r.TEXTURE_2D, Te, Se), Ue(H.__webglFramebuffer, L, Te, r.COLOR_ATTACHMENT0 + V, r.TEXTURE_2D, 0), E(Te, Se) && T(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let oe = r.TEXTURE_2D;
      if ((L.isWebGL3DRenderTarget || L.isWebGLArrayRenderTarget) && (a ? oe = L.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(oe, ie.__webglTexture), Ae(oe, A, Se), a && A.mipmaps && A.mipmaps.length > 0)
        for (let V = 0; V < A.mipmaps.length; V++)
          Ue(H.__webglFramebuffer[V], L, A, r.COLOR_ATTACHMENT0, oe, V);
      else
        Ue(H.__webglFramebuffer, L, A, r.COLOR_ATTACHMENT0, oe, 0);
      E(A, Se) && T(oe), t.unbindTexture();
    }
    L.depthBuffer && J(L);
  }
  function Ee(L) {
    const A = y(L) || a, H = L.isWebGLMultipleRenderTargets === !0 ? L.texture : [L.texture];
    for (let ie = 0, ne = H.length; ie < ne; ie++) {
      const se = H[ie];
      if (E(se, A)) {
        const Se = L.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, oe = n.get(se).__webglTexture;
        t.bindTexture(Se, oe), T(Se), t.unbindTexture();
      }
    }
  }
  function ge(L) {
    if (a && L.samples > 0 && He(L) === !1) {
      const A = L.isWebGLMultipleRenderTargets ? L.texture : [L.texture], H = L.width, ie = L.height;
      let ne = r.COLOR_BUFFER_BIT;
      const se = [], Se = L.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, oe = n.get(L), V = L.isWebGLMultipleRenderTargets === !0;
      if (V)
        for (let Ce = 0; Ce < A.length; Ce++)
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ce, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ce, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, oe.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, oe.__webglFramebuffer);
      for (let Ce = 0; Ce < A.length; Ce++) {
        se.push(r.COLOR_ATTACHMENT0 + Ce), L.depthBuffer && se.push(Se);
        const Te = oe.__ignoreDepthValues !== void 0 ? oe.__ignoreDepthValues : !1;
        if (Te === !1 && (L.depthBuffer && (ne |= r.DEPTH_BUFFER_BIT), L.stencilBuffer && (ne |= r.STENCIL_BUFFER_BIT)), V && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, oe.__webglColorRenderbuffer[Ce]), Te === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [Se]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [Se])), V) {
          const Re = n.get(A[Ce]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Re, 0);
        }
        r.blitFramebuffer(0, 0, H, ie, 0, 0, H, ie, ne, r.NEAREST), f && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, se);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), V)
        for (let Ce = 0; Ce < A.length; Ce++) {
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ce, r.RENDERBUFFER, oe.__webglColorRenderbuffer[Ce]);
          const Te = n.get(A[Ce]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ce, r.TEXTURE_2D, Te, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, oe.__webglMultisampledFramebuffer);
    }
  }
  function ye(L) {
    return Math.min(u, L.samples);
  }
  function He(L) {
    const A = n.get(L);
    return a && L.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && A.__useRenderToTexture !== !1;
  }
  function Je(L) {
    const A = o.render.frame;
    m.get(L) !== A && (m.set(L, A), L.update());
  }
  function pt(L, A) {
    const H = L.colorSpace, ie = L.format, ne = L.type;
    return L.isCompressedTexture === !0 || L.format === va || H !== fn && H !== Ti && (H === De ? a === !1 ? e.has("EXT_sRGB") === !0 && ie === jt ? (L.format = va, L.minFilter = lt, L.generateMipmaps = !1) : A = hh.sRGBToLinear(A) : (ie !== jt || ne !== ni) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", H)), A;
  }
  this.allocateTextureUnit = Y, this.resetTextureUnits = W, this.setTexture2D = Q, this.setTexture2DArray = z, this.setTexture3D = X, this.setTextureCube = ue, this.rebindTextures = re, this.setupRenderTarget = te, this.updateRenderTargetMipmap = Ee, this.updateMultisampleRenderTarget = ge, this.setupDepthRenderbuffer = J, this.setupFrameBufferTexture = Ue, this.useMultisampledRTT = He;
}
function lp(r, e, t) {
  const n = t.isWebGL2;
  function i(s, o = Ti) {
    let a;
    if (s === ni)
      return r.UNSIGNED_BYTE;
    if (s === eh)
      return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === th)
      return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === bf)
      return r.BYTE;
    if (s === Af)
      return r.SHORT;
    if (s === La)
      return r.UNSIGNED_SHORT;
    if (s === Ql)
      return r.INT;
    if (s === jn)
      return r.UNSIGNED_INT;
    if (s === Qt)
      return r.FLOAT;
    if (s === Dn)
      return n ? r.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === wf)
      return r.ALPHA;
    if (s === jt)
      return r.RGBA;
    if (s === Rf)
      return r.LUMINANCE;
    if (s === Cf)
      return r.LUMINANCE_ALPHA;
    if (s === Si)
      return r.DEPTH_COMPONENT;
    if (s === is)
      return r.DEPTH_STENCIL;
    if (s === va)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Lf)
      return r.RED;
    if (s === nh)
      return r.RED_INTEGER;
    if (s === Pf)
      return r.RG;
    if (s === ih)
      return r.RG_INTEGER;
    if (s === sh)
      return r.RGBA_INTEGER;
    if (s === la || s === ha || s === ua || s === da)
      if (o === De)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === la)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === ha)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === ua)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === da)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === la)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === ha)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === ua)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === da)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === fl || s === pl || s === ml || s === gl)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === fl)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === pl)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === ml)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === gl)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === If)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === _l || s === yl)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === _l)
          return o === De ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === yl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === xl || s === vl || s === Ml || s === Sl || s === El || s === Tl || s === bl || s === Al || s === wl || s === Rl || s === Cl || s === Ll || s === Pl || s === Il)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === xl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === vl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Ml)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Sl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === El)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Tl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === bl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Al)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === wl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Rl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Cl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ll)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Pl)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Il)
          return o === De ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === fa)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === fa)
          return o === De ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === Uf || s === Ul || s === Dl || s === Ol)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === fa)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === Ul)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Dl)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Ol)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Mi ? n ? r.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class hp extends wt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Qn extends ze {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const lv = { type: "move" };
class Ic {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Qn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Qn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new w(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new w()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Qn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new w(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new w()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const _ of e.hand.values()) {
          const g = t.getJointPose(_, n), p = this._getHandJoint(l, _);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = g.radius), p.visible = g !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, m = 5e-3;
        l.inputState.pinching && d > f + m ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= f - m && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(lv)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Qn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class up extends ft {
  constructor(e, t, n, i, s, o, a, c, l, h) {
    if (h = h !== void 0 ? h : Si, h !== Si && h !== is)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Si && (n = jn), n === void 0 && h === is && (n = Mi), super(null, i, s, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : _t, this.minFilter = c !== void 0 ? c : _t, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class hv extends ai {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, a = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, m = null;
    const _ = t.getContextAttributes();
    let g = null, p = null;
    const v = [], x = [], y = new wt();
    y.layers.enable(1), y.viewport = new it();
    const S = new wt();
    S.layers.enable(2), S.viewport = new it();
    const E = [y, S], T = new hp();
    T.layers.enable(1), T.layers.enable(2);
    let R = null, M = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(z) {
      let X = v[z];
      return X === void 0 && (X = new Ic(), v[z] = X), X.getTargetRaySpace();
    }, this.getControllerGrip = function(z) {
      let X = v[z];
      return X === void 0 && (X = new Ic(), v[z] = X), X.getGripSpace();
    }, this.getHand = function(z) {
      let X = v[z];
      return X === void 0 && (X = new Ic(), v[z] = X), X.getHandSpace();
    };
    function b(z) {
      const X = x.indexOf(z.inputSource);
      if (X === -1)
        return;
      const ue = v[X];
      ue !== void 0 && (ue.update(z.inputSource, z.frame, l || o), ue.dispatchEvent({ type: z.type, data: z.inputSource }));
    }
    function U() {
      i.removeEventListener("select", b), i.removeEventListener("selectstart", b), i.removeEventListener("selectend", b), i.removeEventListener("squeeze", b), i.removeEventListener("squeezestart", b), i.removeEventListener("squeezeend", b), i.removeEventListener("end", U), i.removeEventListener("inputsourceschange", k);
      for (let z = 0; z < v.length; z++) {
        const X = x[z];
        X !== null && (x[z] = null, v[z].disconnect(X));
      }
      R = null, M = null, e.setRenderTarget(g), f = null, d = null, u = null, i = null, p = null, Q.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(z) {
      s = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(z) {
      a = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(z) {
      l = z;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(z) {
      if (i = z, i !== null) {
        if (g = e.getRenderTarget(), i.addEventListener("select", b), i.addEventListener("selectstart", b), i.addEventListener("selectend", b), i.addEventListener("squeeze", b), i.addEventListener("squeezestart", b), i.addEventListener("squeezeend", b), i.addEventListener("end", U), i.addEventListener("inputsourceschange", k), _.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const X = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(i, t, X), i.updateRenderState({ baseLayer: f }), p = new pn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: jt,
              type: ni,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let X = null, ue = null, fe = null;
          _.depth && (fe = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, X = _.stencil ? is : Si, ue = _.stencil ? Mi : jn);
          const me = {
            colorFormat: t.RGBA8,
            depthFormat: fe,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(me), i.updateRenderState({ layers: [d] }), p = new pn(
            d.textureWidth,
            d.textureHeight,
            {
              format: jt,
              type: ni,
              depthTexture: new up(d.textureWidth, d.textureHeight, ue, void 0, void 0, void 0, void 0, void 0, void 0, X),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const be = e.properties.get(p);
          be.__ignoreDepthValues = d.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await i.requestReferenceSpace(a), Q.setContext(i), Q.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function k(z) {
      for (let X = 0; X < z.removed.length; X++) {
        const ue = z.removed[X], fe = x.indexOf(ue);
        fe >= 0 && (x[fe] = null, v[fe].disconnect(ue));
      }
      for (let X = 0; X < z.added.length; X++) {
        const ue = z.added[X];
        let fe = x.indexOf(ue);
        if (fe === -1) {
          for (let be = 0; be < v.length; be++)
            if (be >= x.length) {
              x.push(ue), fe = be;
              break;
            } else if (x[be] === null) {
              x[be] = ue, fe = be;
              break;
            }
          if (fe === -1)
            break;
        }
        const me = v[fe];
        me && me.connect(ue);
      }
    }
    const D = new w(), F = new w();
    function N(z, X, ue) {
      D.setFromMatrixPosition(X.matrixWorld), F.setFromMatrixPosition(ue.matrixWorld);
      const fe = D.distanceTo(F), me = X.projectionMatrix.elements, be = ue.projectionMatrix.elements, Ae = me[14] / (me[10] - 1), we = me[14] / (me[10] + 1), nt = (me[9] + 1) / me[5], ht = (me[9] - 1) / me[5], Ue = (me[8] - 1) / me[0], P = (be[8] + 1) / be[0], ae = Ae * Ue, J = Ae * P, re = fe / (-Ue + P), te = re * -Ue;
      X.matrixWorld.decompose(z.position, z.quaternion, z.scale), z.translateX(te), z.translateZ(re), z.matrixWorld.compose(z.position, z.quaternion, z.scale), z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const Ee = Ae + re, ge = we + re, ye = ae - te, He = J + (fe - te), Je = nt * we / ge * Ee, pt = ht * we / ge * Ee;
      z.projectionMatrix.makePerspective(ye, He, Je, pt, Ee, ge), z.projectionMatrixInverse.copy(z.projectionMatrix).invert();
    }
    function K(z, X) {
      X === null ? z.matrixWorld.copy(z.matrix) : z.matrixWorld.multiplyMatrices(X.matrixWorld, z.matrix), z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    this.updateCamera = function(z) {
      if (i === null)
        return;
      T.near = S.near = y.near = z.near, T.far = S.far = y.far = z.far, (R !== T.near || M !== T.far) && (i.updateRenderState({
        depthNear: T.near,
        depthFar: T.far
      }), R = T.near, M = T.far);
      const X = z.parent, ue = T.cameras;
      K(T, X);
      for (let fe = 0; fe < ue.length; fe++)
        K(ue[fe], X);
      ue.length === 2 ? N(T, y, S) : T.projectionMatrix.copy(y.projectionMatrix), W(z, T, X);
    };
    function W(z, X, ue) {
      ue === null ? z.matrix.copy(X.matrixWorld) : (z.matrix.copy(ue.matrixWorld), z.matrix.invert(), z.matrix.multiply(X.matrixWorld)), z.matrix.decompose(z.position, z.quaternion, z.scale), z.updateMatrixWorld(!0);
      const fe = z.children;
      for (let me = 0, be = fe.length; me < be; me++)
        fe[me].updateMatrixWorld(!0);
      z.projectionMatrix.copy(X.projectionMatrix), z.projectionMatrixInverse.copy(X.projectionMatrixInverse), z.isPerspectiveCamera && (z.fov = Qs * 2 * Math.atan(1 / z.projectionMatrix.elements[5]), z.zoom = 1);
    }
    this.getCamera = function() {
      return T;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return c;
    }, this.setFoveation = function(z) {
      c = z, d !== null && (d.fixedFoveation = z), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = z);
    };
    let Y = null;
    function ee(z, X) {
      if (h = X.getViewerPose(l || o), m = X, h !== null) {
        const ue = h.views;
        f !== null && (e.setRenderTargetFramebuffer(p, f.framebuffer), e.setRenderTarget(p));
        let fe = !1;
        ue.length !== T.cameras.length && (T.cameras.length = 0, fe = !0);
        for (let me = 0; me < ue.length; me++) {
          const be = ue[me];
          let Ae = null;
          if (f !== null)
            Ae = f.getViewport(be);
          else {
            const nt = u.getViewSubImage(d, be);
            Ae = nt.viewport, me === 0 && (e.setRenderTargetTextures(
              p,
              nt.colorTexture,
              d.ignoreDepthValues ? void 0 : nt.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let we = E[me];
          we === void 0 && (we = new wt(), we.layers.enable(me), we.viewport = new it(), E[me] = we), we.matrix.fromArray(be.transform.matrix), we.matrix.decompose(we.position, we.quaternion, we.scale), we.projectionMatrix.fromArray(be.projectionMatrix), we.projectionMatrixInverse.copy(we.projectionMatrix).invert(), we.viewport.set(Ae.x, Ae.y, Ae.width, Ae.height), me === 0 && (T.matrix.copy(we.matrix), T.matrix.decompose(T.position, T.quaternion, T.scale)), fe === !0 && T.cameras.push(we);
        }
      }
      for (let ue = 0; ue < v.length; ue++) {
        const fe = x[ue], me = v[ue];
        fe !== null && me !== void 0 && me.update(fe, X, l || o);
      }
      Y && Y(z, X), X.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: X }), m = null;
    }
    const Q = new sp();
    Q.setAnimationLoop(ee), this.setAnimationLoop = function(z) {
      Y = z;
    }, this.dispose = function() {
    };
  }
}
function uv(r, e) {
  function t(g, p) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function n(g, p) {
    p.color.getRGB(g.fogColor.value, tp(r)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function i(g, p, v, x, y) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(g, p) : p.isMeshToonMaterial ? (s(g, p), u(g, p)) : p.isMeshPhongMaterial ? (s(g, p), h(g, p)) : p.isMeshStandardMaterial ? (s(g, p), d(g, p), p.isMeshPhysicalMaterial && f(g, p, y)) : p.isMeshMatcapMaterial ? (s(g, p), m(g, p)) : p.isMeshDepthMaterial ? s(g, p) : p.isMeshDistanceMaterial ? (s(g, p), _(g, p)) : p.isMeshNormalMaterial ? s(g, p) : p.isLineBasicMaterial ? (o(g, p), p.isLineDashedMaterial && a(g, p)) : p.isPointsMaterial ? c(g, p, v, x) : p.isSpriteMaterial ? l(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, t(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === Wt && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, t(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === Wt && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, t(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, t(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    const v = e.get(p).envMap;
    if (v && (g.envMap.value = v, g.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap) {
      g.lightMap.value = p.lightMap;
      const x = r._useLegacyLights === !0 ? Math.PI : 1;
      g.lightMapIntensity.value = p.lightMapIntensity * x, t(p.lightMap, g.lightMapTransform);
    }
    p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, g.aoMapTransform));
  }
  function o(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, t(p.map, g.mapTransform));
  }
  function a(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function c(g, p, v, x) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * v, g.scale.value = x * 0.5, p.map && (g.map.value = p.map, t(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function l(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, t(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, t(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function h(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function d(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, g.roughnessMapTransform)), e.get(p).envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function f(g, p, v) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Wt && g.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = v.texture, g.transmissionSamplerSize.value.set(v.width, v.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function _(g, p) {
    const v = e.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(v.matrixWorld), g.nearDistance.value = v.shadow.camera.near, g.farDistance.value = v.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function dv(r, e, t, n) {
  let i = {}, s = {}, o = [];
  const a = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(v, x) {
    const y = x.program;
    n.uniformBlockBinding(v, y);
  }
  function l(v, x) {
    let y = i[v.id];
    y === void 0 && (m(v), y = h(v), i[v.id] = y, v.addEventListener("dispose", g));
    const S = x.program;
    n.updateUBOMapping(v, S);
    const E = e.render.frame;
    s[v.id] !== E && (d(v), s[v.id] = E);
  }
  function h(v) {
    const x = u();
    v.__bindingPointIndex = x;
    const y = r.createBuffer(), S = v.__size, E = v.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, y), r.bufferData(r.UNIFORM_BUFFER, S, E), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, x, y), y;
  }
  function u() {
    for (let v = 0; v < a; v++)
      if (o.indexOf(v) === -1)
        return o.push(v), v;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(v) {
    const x = i[v.id], y = v.uniforms, S = v.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, x);
    for (let E = 0, T = y.length; E < T; E++) {
      const R = y[E];
      if (f(R, E, S) === !0) {
        const M = R.__offset, b = Array.isArray(R.value) ? R.value : [R.value];
        let U = 0;
        for (let k = 0; k < b.length; k++) {
          const D = b[k], F = _(D);
          typeof D == "number" ? (R.__data[0] = D, r.bufferSubData(r.UNIFORM_BUFFER, M + U, R.__data)) : D.isMatrix3 ? (R.__data[0] = D.elements[0], R.__data[1] = D.elements[1], R.__data[2] = D.elements[2], R.__data[3] = D.elements[0], R.__data[4] = D.elements[3], R.__data[5] = D.elements[4], R.__data[6] = D.elements[5], R.__data[7] = D.elements[0], R.__data[8] = D.elements[6], R.__data[9] = D.elements[7], R.__data[10] = D.elements[8], R.__data[11] = D.elements[0]) : (D.toArray(R.__data, U), U += F.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(r.UNIFORM_BUFFER, M, R.__data);
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function f(v, x, y) {
    const S = v.value;
    if (y[x] === void 0) {
      if (typeof S == "number")
        y[x] = S;
      else {
        const E = Array.isArray(S) ? S : [S], T = [];
        for (let R = 0; R < E.length; R++)
          T.push(E[R].clone());
        y[x] = T;
      }
      return !0;
    } else if (typeof S == "number") {
      if (y[x] !== S)
        return y[x] = S, !0;
    } else {
      const E = Array.isArray(y[x]) ? y[x] : [y[x]], T = Array.isArray(S) ? S : [S];
      for (let R = 0; R < E.length; R++) {
        const M = E[R];
        if (M.equals(T[R]) === !1)
          return M.copy(T[R]), !0;
      }
    }
    return !1;
  }
  function m(v) {
    const x = v.uniforms;
    let y = 0;
    const S = 16;
    let E = 0;
    for (let T = 0, R = x.length; T < R; T++) {
      const M = x[T], b = {
        boundary: 0,
        storage: 0
      }, U = Array.isArray(M.value) ? M.value : [M.value];
      for (let k = 0, D = U.length; k < D; k++) {
        const F = U[k], N = _(F);
        b.boundary += N.boundary, b.storage += N.storage;
      }
      if (M.__data = new Float32Array(b.storage / Float32Array.BYTES_PER_ELEMENT), M.__offset = y, T > 0) {
        E = y % S;
        const k = S - E;
        E !== 0 && k - b.boundary < 0 && (y += S - E, M.__offset = y);
      }
      y += b.storage;
    }
    return E = y % S, E > 0 && (y += S - E), v.__size = y, v.__cache = {}, this;
  }
  function _(v) {
    const x = {
      boundary: 0,
      storage: 0
    };
    return typeof v == "number" ? (x.boundary = 4, x.storage = 4) : v.isVector2 ? (x.boundary = 8, x.storage = 8) : v.isVector3 || v.isColor ? (x.boundary = 16, x.storage = 12) : v.isVector4 ? (x.boundary = 16, x.storage = 16) : v.isMatrix3 ? (x.boundary = 48, x.storage = 48) : v.isMatrix4 ? (x.boundary = 64, x.storage = 64) : v.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", v), x;
  }
  function g(v) {
    const x = v.target;
    x.removeEventListener("dispose", g);
    const y = o.indexOf(x.__bindingPointIndex);
    o.splice(y, 1), r.deleteBuffer(i[x.id]), delete i[x.id], delete s[x.id];
  }
  function p() {
    for (const v in i)
      r.deleteBuffer(i[v]);
    o = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
function fv() {
  const r = $r("canvas");
  return r.style.display = "block", r;
}
class _h {
  constructor(e = {}) {
    const {
      canvas: t = fv(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = o;
    const f = new Uint32Array(4), m = new Int32Array(4);
    let _ = null, g = null;
    const p = [], v = [];
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = De, this._useLegacyLights = !1, this.toneMapping = ti, this.toneMappingExposure = 1;
    const x = this;
    let y = !1, S = 0, E = 0, T = null, R = -1, M = null;
    const b = new it(), U = new it();
    let k = null;
    const D = new he(0);
    let F = 0, N = t.width, K = t.height, W = 1, Y = null, ee = null;
    const Q = new it(0, 0, N, K), z = new it(0, 0, N, K);
    let X = !1;
    const ue = new Oa();
    let fe = !1, me = !1, be = null;
    const Ae = new Ie(), we = new j(), nt = new w(), ht = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ue() {
      return T === null ? W : 1;
    }
    let P = n;
    function ae(C, B) {
      for (let $ = 0; $ < C.length; $++) {
        const O = C[$], q = t.getContext(O, B);
        if (q !== null)
          return q;
      }
      return null;
    }
    try {
      const C = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${wa}`), t.addEventListener("webglcontextlost", de, !1), t.addEventListener("webglcontextrestored", G, !1), t.addEventListener("webglcontextcreationerror", ce, !1), P === null) {
        const B = ["webgl2", "webgl", "experimental-webgl"];
        if (x.isWebGL1Renderer === !0 && B.shift(), P = ae(B, C), P === null)
          throw ae(B) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && P instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), P.getShaderPrecisionFormat === void 0 && (P.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (C) {
      throw console.error("THREE.WebGLRenderer: " + C.message), C;
    }
    let J, re, te, Ee, ge, ye, He, Je, pt, L, A, H, ie, ne, se, Se, oe, V, Ce, Te, Re, ve, Me, qe;
    function ot() {
      J = new Ry(P), re = new Sy(P, J, e), J.init(re), ve = new lp(P, J, re), te = new av(P, J, re), Ee = new Py(P), ge = new Zx(), ye = new cv(P, J, te, ge, re, ve, Ee), He = new Ty(x), Je = new wy(x), pt = new kg(P, re), Me = new vy(P, J, pt, re), L = new Cy(P, pt, Ee, Me), A = new Oy(P, L, pt, Ee), Ce = new Dy(P, re, ye), Se = new Ey(ge), H = new $x(x, He, Je, J, re, Me, Se), ie = new uv(x, ge), ne = new Jx(), se = new iv(J, re), V = new xy(x, He, Je, te, A, d, c), oe = new ov(x, A, re), qe = new dv(P, Ee, re, te), Te = new My(P, J, Ee, re), Re = new Ly(P, J, Ee, re), Ee.programs = H.programs, x.capabilities = re, x.extensions = J, x.properties = ge, x.renderLists = ne, x.shadowMap = oe, x.state = te, x.info = Ee;
    }
    ot();
    const I = new hv(x, P);
    this.xr = I, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const C = J.get("WEBGL_lose_context");
      C && C.loseContext();
    }, this.forceContextRestore = function() {
      const C = J.get("WEBGL_lose_context");
      C && C.restoreContext();
    }, this.getPixelRatio = function() {
      return W;
    }, this.setPixelRatio = function(C) {
      C !== void 0 && (W = C, this.setSize(N, K, !1));
    }, this.getSize = function(C) {
      return C.set(N, K);
    }, this.setSize = function(C, B, $ = !0) {
      if (I.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      N = C, K = B, t.width = Math.floor(C * W), t.height = Math.floor(B * W), $ === !0 && (t.style.width = C + "px", t.style.height = B + "px"), this.setViewport(0, 0, C, B);
    }, this.getDrawingBufferSize = function(C) {
      return C.set(N * W, K * W).floor();
    }, this.setDrawingBufferSize = function(C, B, $) {
      N = C, K = B, W = $, t.width = Math.floor(C * $), t.height = Math.floor(B * $), this.setViewport(0, 0, C, B);
    }, this.getCurrentViewport = function(C) {
      return C.copy(b);
    }, this.getViewport = function(C) {
      return C.copy(Q);
    }, this.setViewport = function(C, B, $, O) {
      C.isVector4 ? Q.set(C.x, C.y, C.z, C.w) : Q.set(C, B, $, O), te.viewport(b.copy(Q).multiplyScalar(W).floor());
    }, this.getScissor = function(C) {
      return C.copy(z);
    }, this.setScissor = function(C, B, $, O) {
      C.isVector4 ? z.set(C.x, C.y, C.z, C.w) : z.set(C, B, $, O), te.scissor(U.copy(z).multiplyScalar(W).floor());
    }, this.getScissorTest = function() {
      return X;
    }, this.setScissorTest = function(C) {
      te.setScissorTest(X = C);
    }, this.setOpaqueSort = function(C) {
      Y = C;
    }, this.setTransparentSort = function(C) {
      ee = C;
    }, this.getClearColor = function(C) {
      return C.copy(V.getClearColor());
    }, this.setClearColor = function() {
      V.setClearColor.apply(V, arguments);
    }, this.getClearAlpha = function() {
      return V.getClearAlpha();
    }, this.setClearAlpha = function() {
      V.setClearAlpha.apply(V, arguments);
    }, this.clear = function(C = !0, B = !0, $ = !0) {
      let O = 0;
      if (C) {
        let q = !1;
        if (T !== null) {
          const _e = T.texture.format;
          q = _e === sh || _e === ih || _e === nh;
        }
        if (q) {
          const _e = T.texture.type, Le = _e === ni || _e === jn || _e === La || _e === Mi || _e === eh || _e === th, Fe = V.getClearColor(), Be = V.getClearAlpha(), $e = Fe.r, Ne = Fe.g, We = Fe.b;
          Le ? (f[0] = $e, f[1] = Ne, f[2] = We, f[3] = Be, P.clearBufferuiv(P.COLOR, 0, f)) : (m[0] = $e, m[1] = Ne, m[2] = We, m[3] = Be, P.clearBufferiv(P.COLOR, 0, m));
        } else
          O |= P.COLOR_BUFFER_BIT;
      }
      B && (O |= P.DEPTH_BUFFER_BIT), $ && (O |= P.STENCIL_BUFFER_BIT), P.clear(O);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", de, !1), t.removeEventListener("webglcontextrestored", G, !1), t.removeEventListener("webglcontextcreationerror", ce, !1), ne.dispose(), se.dispose(), ge.dispose(), He.dispose(), Je.dispose(), A.dispose(), Me.dispose(), qe.dispose(), H.dispose(), I.dispose(), I.removeEventListener("sessionstart", ct), I.removeEventListener("sessionend", Cn), be && (be.dispose(), be = null), Ht.stop();
    };
    function de(C) {
      C.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function G() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const C = Ee.autoReset, B = oe.enabled, $ = oe.autoUpdate, O = oe.needsUpdate, q = oe.type;
      ot(), Ee.autoReset = C, oe.enabled = B, oe.autoUpdate = $, oe.needsUpdate = O, oe.type = q;
    }
    function ce(C) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", C.statusMessage);
    }
    function pe(C) {
      const B = C.target;
      B.removeEventListener("dispose", pe), et(B);
    }
    function et(C) {
      ut(C), ge.remove(C);
    }
    function ut(C) {
      const B = ge.get(C).programs;
      B !== void 0 && (B.forEach(function($) {
        H.releaseProgram($);
      }), C.isShaderMaterial && H.releaseShaderCache(C));
    }
    this.renderBufferDirect = function(C, B, $, O, q, _e) {
      B === null && (B = ht);
      const Le = q.isMesh && q.matrixWorld.determinant() < 0, Fe = um(C, B, $, O, q);
      te.setMaterial(O, Le);
      let Be = $.index, $e = 1;
      if (O.wireframe === !0) {
        if (Be = L.getWireframeAttribute($), Be === void 0)
          return;
        $e = 2;
      }
      const Ne = $.drawRange, We = $.attributes.position;
      let mt = Ne.start * $e, xt = (Ne.start + Ne.count) * $e;
      _e !== null && (mt = Math.max(mt, _e.start * $e), xt = Math.min(xt, (_e.start + _e.count) * $e)), Be !== null ? (mt = Math.max(mt, 0), xt = Math.min(xt, Be.count)) : We != null && (mt = Math.max(mt, 0), xt = Math.min(xt, We.count));
      const sn = xt - mt;
      if (sn < 0 || sn === 1 / 0)
        return;
      Me.setup(q, O, Fe, $, Be);
      let Vn, Tt = Te;
      if (Be !== null && (Vn = pt.get(Be), Tt = Re, Tt.setIndex(Vn)), q.isMesh)
        O.wireframe === !0 ? (te.setLineWidth(O.wireframeLinewidth * Ue()), Tt.setMode(P.LINES)) : Tt.setMode(P.TRIANGLES);
      else if (q.isLine) {
        let Ke = O.linewidth;
        Ke === void 0 && (Ke = 1), te.setLineWidth(Ke * Ue()), q.isLineSegments ? Tt.setMode(P.LINES) : q.isLineLoop ? Tt.setMode(P.LINE_LOOP) : Tt.setMode(P.LINE_STRIP);
      } else
        q.isPoints ? Tt.setMode(P.POINTS) : q.isSprite && Tt.setMode(P.TRIANGLES);
      if (q.isInstancedMesh)
        Tt.renderInstances(mt, sn, q.count);
      else if ($.isInstancedBufferGeometry) {
        const Ke = $._maxInstanceCount !== void 0 ? $._maxInstanceCount : 1 / 0, cc = Math.min($.instanceCount, Ke);
        Tt.renderInstances(mt, sn, cc);
      } else
        Tt.render(mt, sn);
    }, this.compile = function(C, B) {
      function $(O, q, _e) {
        O.transparent === !0 && O.side === Mn && O.forceSinglePass === !1 ? (O.side = Wt, O.needsUpdate = !0, _o(O, q, _e), O.side = Sn, O.needsUpdate = !0, _o(O, q, _e), O.side = Mn) : _o(O, q, _e);
      }
      g = se.get(C), g.init(), v.push(g), C.traverseVisible(function(O) {
        O.isLight && O.layers.test(B.layers) && (g.pushLight(O), O.castShadow && g.pushShadow(O));
      }), g.setupLights(x._useLegacyLights), C.traverse(function(O) {
        const q = O.material;
        if (q)
          if (Array.isArray(q))
            for (let _e = 0; _e < q.length; _e++) {
              const Le = q[_e];
              $(Le, C, O);
            }
          else
            $(q, C, O);
      }), v.pop(), g = null;
    };
    let Et = null;
    function ui(C) {
      Et && Et(C);
    }
    function ct() {
      Ht.stop();
    }
    function Cn() {
      Ht.start();
    }
    const Ht = new sp();
    Ht.setAnimationLoop(ui), typeof self < "u" && Ht.setContext(self), this.setAnimationLoop = function(C) {
      Et = C, I.setAnimationLoop(C), C === null ? Ht.stop() : Ht.start();
    }, I.addEventListener("sessionstart", ct), I.addEventListener("sessionend", Cn), this.render = function(C, B) {
      if (B !== void 0 && B.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0)
        return;
      C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(), B.parent === null && B.matrixWorldAutoUpdate === !0 && B.updateMatrixWorld(), I.enabled === !0 && I.isPresenting === !0 && (I.cameraAutoUpdate === !0 && I.updateCamera(B), B = I.getCamera()), C.isScene === !0 && C.onBeforeRender(x, C, B, T), g = se.get(C, v.length), g.init(), v.push(g), Ae.multiplyMatrices(B.projectionMatrix, B.matrixWorldInverse), ue.setFromProjectionMatrix(Ae), me = this.localClippingEnabled, fe = Se.init(this.clippingPlanes, me), _ = ne.get(C, p.length), _.init(), p.push(_), $h(C, B, 0, x.sortObjects), _.finish(), x.sortObjects === !0 && _.sort(Y, ee), this.info.render.frame++, fe === !0 && Se.beginShadows();
      const $ = g.state.shadowsArray;
      if (oe.render($, C, B), fe === !0 && Se.endShadows(), this.info.autoReset === !0 && this.info.reset(), V.render(_, C), g.setupLights(x._useLegacyLights), B.isArrayCamera) {
        const O = B.cameras;
        for (let q = 0, _e = O.length; q < _e; q++) {
          const Le = O[q];
          Zh(_, C, Le, Le.viewport);
        }
      } else
        Zh(_, C, B);
      T !== null && (ye.updateMultisampleRenderTarget(T), ye.updateRenderTargetMipmap(T)), C.isScene === !0 && C.onAfterRender(x, C, B), Me.resetDefaultState(), R = -1, M = null, v.pop(), v.length > 0 ? g = v[v.length - 1] : g = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function $h(C, B, $, O) {
      if (C.visible === !1)
        return;
      if (C.layers.test(B.layers)) {
        if (C.isGroup)
          $ = C.renderOrder;
        else if (C.isLOD)
          C.autoUpdate === !0 && C.update(B);
        else if (C.isLight)
          g.pushLight(C), C.castShadow && g.pushShadow(C);
        else if (C.isSprite) {
          if (!C.frustumCulled || ue.intersectsSprite(C)) {
            O && nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);
            const Le = A.update(C), Fe = C.material;
            Fe.visible && _.push(C, Le, Fe, $, nt.z, null);
          }
        } else if ((C.isMesh || C.isLine || C.isPoints) && (!C.frustumCulled || ue.intersectsObject(C))) {
          const Le = A.update(C), Fe = C.material;
          if (O && (C.boundingSphere !== void 0 ? (C.boundingSphere === null && C.computeBoundingSphere(), nt.copy(C.boundingSphere.center)) : (Le.boundingSphere === null && Le.computeBoundingSphere(), nt.copy(Le.boundingSphere.center)), nt.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)), Array.isArray(Fe)) {
            const Be = Le.groups;
            for (let $e = 0, Ne = Be.length; $e < Ne; $e++) {
              const We = Be[$e], mt = Fe[We.materialIndex];
              mt && mt.visible && _.push(C, Le, mt, $, nt.z, We);
            }
          } else
            Fe.visible && _.push(C, Le, Fe, $, nt.z, null);
        }
      }
      const _e = C.children;
      for (let Le = 0, Fe = _e.length; Le < Fe; Le++)
        $h(_e[Le], B, $, O);
    }
    function Zh(C, B, $, O) {
      const q = C.opaque, _e = C.transmissive, Le = C.transparent;
      g.setupLightsView($), fe === !0 && Se.setGlobalState(x.clippingPlanes, $), _e.length > 0 && hm(q, _e, B, $), O && te.viewport(b.copy(O)), q.length > 0 && go(q, B, $), _e.length > 0 && go(_e, B, $), Le.length > 0 && go(Le, B, $), te.buffers.depth.setTest(!0), te.buffers.depth.setMask(!0), te.buffers.color.setMask(!0), te.setPolygonOffset(!1);
    }
    function hm(C, B, $, O) {
      const q = re.isWebGL2;
      be === null && (be = new pn(1, 1, {
        generateMipmaps: !0,
        type: J.has("EXT_color_buffer_half_float") ? Dn : ni,
        minFilter: Bn,
        samples: q ? 4 : 0
      })), x.getDrawingBufferSize(we), q ? be.setSize(we.x, we.y) : be.setSize(Ma(we.x), Ma(we.y));
      const _e = x.getRenderTarget();
      x.setRenderTarget(be), x.getClearColor(D), F = x.getClearAlpha(), F < 1 && x.setClearColor(16777215, 0.5), x.clear();
      const Le = x.toneMapping;
      x.toneMapping = ti, go(C, $, O), ye.updateMultisampleRenderTarget(be), ye.updateRenderTargetMipmap(be);
      let Fe = !1;
      for (let Be = 0, $e = B.length; Be < $e; Be++) {
        const Ne = B[Be], We = Ne.object, mt = Ne.geometry, xt = Ne.material, sn = Ne.group;
        if (xt.side === Mn && We.layers.test(O.layers)) {
          const Vn = xt.side;
          xt.side = Wt, xt.needsUpdate = !0, Kh(We, $, O, mt, xt, sn), xt.side = Vn, xt.needsUpdate = !0, Fe = !0;
        }
      }
      Fe === !0 && (ye.updateMultisampleRenderTarget(be), ye.updateRenderTargetMipmap(be)), x.setRenderTarget(_e), x.setClearColor(D, F), x.toneMapping = Le;
    }
    function go(C, B, $) {
      const O = B.isScene === !0 ? B.overrideMaterial : null;
      for (let q = 0, _e = C.length; q < _e; q++) {
        const Le = C[q], Fe = Le.object, Be = Le.geometry, $e = O === null ? Le.material : O, Ne = Le.group;
        Fe.layers.test($.layers) && Kh(Fe, B, $, Be, $e, Ne);
      }
    }
    function Kh(C, B, $, O, q, _e) {
      C.onBeforeRender(x, B, $, O, q, _e), C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse, C.matrixWorld), C.normalMatrix.getNormalMatrix(C.modelViewMatrix), q.onBeforeRender(x, B, $, O, C, _e), q.transparent === !0 && q.side === Mn && q.forceSinglePass === !1 ? (q.side = Wt, q.needsUpdate = !0, x.renderBufferDirect($, B, O, q, C, _e), q.side = Sn, q.needsUpdate = !0, x.renderBufferDirect($, B, O, q, C, _e), q.side = Mn) : x.renderBufferDirect($, B, O, q, C, _e), C.onAfterRender(x, B, $, O, q, _e);
    }
    function _o(C, B, $) {
      B.isScene !== !0 && (B = ht);
      const O = ge.get(C), q = g.state.lights, _e = g.state.shadowsArray, Le = q.state.version, Fe = H.getParameters(C, q.state, _e, B, $), Be = H.getProgramCacheKey(Fe);
      let $e = O.programs;
      O.environment = C.isMeshStandardMaterial ? B.environment : null, O.fog = B.fog, O.envMap = (C.isMeshStandardMaterial ? Je : He).get(C.envMap || O.environment), $e === void 0 && (C.addEventListener("dispose", pe), $e = /* @__PURE__ */ new Map(), O.programs = $e);
      let Ne = $e.get(Be);
      if (Ne !== void 0) {
        if (O.currentProgram === Ne && O.lightsStateVersion === Le)
          return Jh(C, Fe), Ne;
      } else
        Fe.uniforms = H.getUniforms(C), C.onBuild($, Fe, x), C.onBeforeCompile(Fe, x), Ne = H.acquireProgram(Fe, Be), $e.set(Be, Ne), O.uniforms = Fe.uniforms;
      const We = O.uniforms;
      (!C.isShaderMaterial && !C.isRawShaderMaterial || C.clipping === !0) && (We.clippingPlanes = Se.uniform), Jh(C, Fe), O.needsLights = fm(C), O.lightsStateVersion = Le, O.needsLights && (We.ambientLightColor.value = q.state.ambient, We.lightProbe.value = q.state.probe, We.directionalLights.value = q.state.directional, We.directionalLightShadows.value = q.state.directionalShadow, We.spotLights.value = q.state.spot, We.spotLightShadows.value = q.state.spotShadow, We.rectAreaLights.value = q.state.rectArea, We.ltc_1.value = q.state.rectAreaLTC1, We.ltc_2.value = q.state.rectAreaLTC2, We.pointLights.value = q.state.point, We.pointLightShadows.value = q.state.pointShadow, We.hemisphereLights.value = q.state.hemi, We.directionalShadowMap.value = q.state.directionalShadowMap, We.directionalShadowMatrix.value = q.state.directionalShadowMatrix, We.spotShadowMap.value = q.state.spotShadowMap, We.spotLightMatrix.value = q.state.spotLightMatrix, We.spotLightMap.value = q.state.spotLightMap, We.pointShadowMap.value = q.state.pointShadowMap, We.pointShadowMatrix.value = q.state.pointShadowMatrix);
      const mt = Ne.getUniforms(), xt = ga.seqWithValue(mt.seq, We);
      return O.currentProgram = Ne, O.uniformsList = xt, Ne;
    }
    function Jh(C, B) {
      const $ = ge.get(C);
      $.outputColorSpace = B.outputColorSpace, $.instancing = B.instancing, $.instancingColor = B.instancingColor, $.skinning = B.skinning, $.morphTargets = B.morphTargets, $.morphNormals = B.morphNormals, $.morphColors = B.morphColors, $.morphTargetsCount = B.morphTargetsCount, $.numClippingPlanes = B.numClippingPlanes, $.numIntersection = B.numClipIntersection, $.vertexAlphas = B.vertexAlphas, $.vertexTangents = B.vertexTangents, $.toneMapping = B.toneMapping;
    }
    function um(C, B, $, O, q) {
      B.isScene !== !0 && (B = ht), ye.resetTextureUnits();
      const _e = B.fog, Le = O.isMeshStandardMaterial ? B.environment : null, Fe = T === null ? x.outputColorSpace : T.isXRRenderTarget === !0 ? T.texture.colorSpace : fn, Be = (O.isMeshStandardMaterial ? Je : He).get(O.envMap || Le), $e = O.vertexColors === !0 && !!$.attributes.color && $.attributes.color.itemSize === 4, Ne = !!$.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), We = !!$.morphAttributes.position, mt = !!$.morphAttributes.normal, xt = !!$.morphAttributes.color;
      let sn = ti;
      O.toneMapped && (T === null || T.isXRRenderTarget === !0) && (sn = x.toneMapping);
      const Vn = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, Tt = Vn !== void 0 ? Vn.length : 0, Ke = ge.get(O), cc = g.state.lights;
      if (fe === !0 && (me === !0 || C !== M)) {
        const Zt = C === M && O.id === R;
        Se.setState(O, C, Zt);
      }
      let bt = !1;
      O.version === Ke.__version ? (Ke.needsLights && Ke.lightsStateVersion !== cc.state.version || Ke.outputColorSpace !== Fe || q.isInstancedMesh && Ke.instancing === !1 || !q.isInstancedMesh && Ke.instancing === !0 || q.isSkinnedMesh && Ke.skinning === !1 || !q.isSkinnedMesh && Ke.skinning === !0 || q.isInstancedMesh && Ke.instancingColor === !0 && q.instanceColor === null || q.isInstancedMesh && Ke.instancingColor === !1 && q.instanceColor !== null || Ke.envMap !== Be || O.fog === !0 && Ke.fog !== _e || Ke.numClippingPlanes !== void 0 && (Ke.numClippingPlanes !== Se.numPlanes || Ke.numIntersection !== Se.numIntersection) || Ke.vertexAlphas !== $e || Ke.vertexTangents !== Ne || Ke.morphTargets !== We || Ke.morphNormals !== mt || Ke.morphColors !== xt || Ke.toneMapping !== sn || re.isWebGL2 === !0 && Ke.morphTargetsCount !== Tt) && (bt = !0) : (bt = !0, Ke.__version = O.version);
      let Ii = Ke.currentProgram;
      bt === !0 && (Ii = _o(O, B, q));
      let jh = !1, _r = !1, lc = !1;
      const kt = Ii.getUniforms(), Ui = Ke.uniforms;
      if (te.useProgram(Ii.program) && (jh = !0, _r = !0, lc = !0), O.id !== R && (R = O.id, _r = !0), jh || M !== C) {
        if (kt.setValue(P, "projectionMatrix", C.projectionMatrix), re.logarithmicDepthBuffer && kt.setValue(
          P,
          "logDepthBufFC",
          2 / (Math.log(C.far + 1) / Math.LN2)
        ), M !== C && (M = C, _r = !0, lc = !0), O.isShaderMaterial || O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshStandardMaterial || O.envMap) {
          const Zt = kt.map.cameraPosition;
          Zt !== void 0 && Zt.setValue(
            P,
            nt.setFromMatrixPosition(C.matrixWorld)
          );
        }
        (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && kt.setValue(P, "isOrthographic", C.isOrthographicCamera === !0), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial || O.isShadowMaterial || q.isSkinnedMesh) && kt.setValue(P, "viewMatrix", C.matrixWorldInverse);
      }
      if (q.isSkinnedMesh) {
        kt.setOptional(P, q, "bindMatrix"), kt.setOptional(P, q, "bindMatrixInverse");
        const Zt = q.skeleton;
        Zt && (re.floatVertexTextures ? (Zt.boneTexture === null && Zt.computeBoneTexture(), kt.setValue(P, "boneTexture", Zt.boneTexture, ye), kt.setValue(P, "boneTextureSize", Zt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const hc = $.morphAttributes;
      if ((hc.position !== void 0 || hc.normal !== void 0 || hc.color !== void 0 && re.isWebGL2 === !0) && Ce.update(q, $, Ii), (_r || Ke.receiveShadow !== q.receiveShadow) && (Ke.receiveShadow = q.receiveShadow, kt.setValue(P, "receiveShadow", q.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (Ui.envMap.value = Be, Ui.flipEnvMap.value = Be.isCubeTexture && Be.isRenderTargetTexture === !1 ? -1 : 1), _r && (kt.setValue(P, "toneMappingExposure", x.toneMappingExposure), Ke.needsLights && dm(Ui, lc), _e && O.fog === !0 && ie.refreshFogUniforms(Ui, _e), ie.refreshMaterialUniforms(Ui, O, W, K, be), ga.upload(P, Ke.uniformsList, Ui, ye)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (ga.upload(P, Ke.uniformsList, Ui, ye), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && kt.setValue(P, "center", q.center), kt.setValue(P, "modelViewMatrix", q.modelViewMatrix), kt.setValue(P, "normalMatrix", q.normalMatrix), kt.setValue(P, "modelMatrix", q.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
        const Zt = O.uniformsGroups;
        for (let uc = 0, pm = Zt.length; uc < pm; uc++)
          if (re.isWebGL2) {
            const Qh = Zt[uc];
            qe.update(Qh, Ii), qe.bind(Qh, Ii);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Ii;
    }
    function dm(C, B) {
      C.ambientLightColor.needsUpdate = B, C.lightProbe.needsUpdate = B, C.directionalLights.needsUpdate = B, C.directionalLightShadows.needsUpdate = B, C.pointLights.needsUpdate = B, C.pointLightShadows.needsUpdate = B, C.spotLights.needsUpdate = B, C.spotLightShadows.needsUpdate = B, C.rectAreaLights.needsUpdate = B, C.hemisphereLights.needsUpdate = B;
    }
    function fm(C) {
      return C.isMeshLambertMaterial || C.isMeshToonMaterial || C.isMeshPhongMaterial || C.isMeshStandardMaterial || C.isShadowMaterial || C.isShaderMaterial && C.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return S;
    }, this.getActiveMipmapLevel = function() {
      return E;
    }, this.getRenderTarget = function() {
      return T;
    }, this.setRenderTargetTextures = function(C, B, $) {
      ge.get(C.texture).__webglTexture = B, ge.get(C.depthTexture).__webglTexture = $;
      const O = ge.get(C);
      O.__hasExternalTextures = !0, O.__hasExternalTextures && (O.__autoAllocateDepthBuffer = $ === void 0, O.__autoAllocateDepthBuffer || J.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), O.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(C, B) {
      const $ = ge.get(C);
      $.__webglFramebuffer = B, $.__useDefaultFramebuffer = B === void 0;
    }, this.setRenderTarget = function(C, B = 0, $ = 0) {
      T = C, S = B, E = $;
      let O = !0, q = null, _e = !1, Le = !1;
      if (C) {
        const Be = ge.get(C);
        Be.__useDefaultFramebuffer !== void 0 ? (te.bindFramebuffer(P.FRAMEBUFFER, null), O = !1) : Be.__webglFramebuffer === void 0 ? ye.setupRenderTarget(C) : Be.__hasExternalTextures && ye.rebindTextures(C, ge.get(C.texture).__webglTexture, ge.get(C.depthTexture).__webglTexture);
        const $e = C.texture;
        ($e.isData3DTexture || $e.isDataArrayTexture || $e.isCompressedArrayTexture) && (Le = !0);
        const Ne = ge.get(C).__webglFramebuffer;
        C.isWebGLCubeRenderTarget ? (Array.isArray(Ne[B]) ? q = Ne[B][$] : q = Ne[B], _e = !0) : re.isWebGL2 && C.samples > 0 && ye.useMultisampledRTT(C) === !1 ? q = ge.get(C).__webglMultisampledFramebuffer : Array.isArray(Ne) ? q = Ne[$] : q = Ne, b.copy(C.viewport), U.copy(C.scissor), k = C.scissorTest;
      } else
        b.copy(Q).multiplyScalar(W).floor(), U.copy(z).multiplyScalar(W).floor(), k = X;
      if (te.bindFramebuffer(P.FRAMEBUFFER, q) && re.drawBuffers && O && te.drawBuffers(C, q), te.viewport(b), te.scissor(U), te.setScissorTest(k), _e) {
        const Be = ge.get(C.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + B, Be.__webglTexture, $);
      } else if (Le) {
        const Be = ge.get(C.texture), $e = B || 0;
        P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, Be.__webglTexture, $ || 0, $e);
      }
      R = -1;
    }, this.readRenderTargetPixels = function(C, B, $, O, q, _e, Le) {
      if (!(C && C.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Fe = ge.get(C).__webglFramebuffer;
      if (C.isWebGLCubeRenderTarget && Le !== void 0 && (Fe = Fe[Le]), Fe) {
        te.bindFramebuffer(P.FRAMEBUFFER, Fe);
        try {
          const Be = C.texture, $e = Be.format, Ne = Be.type;
          if ($e !== jt && ve.convert($e) !== P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const We = Ne === Dn && (J.has("EXT_color_buffer_half_float") || re.isWebGL2 && J.has("EXT_color_buffer_float"));
          if (Ne !== ni && ve.convert(Ne) !== P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE) && !(Ne === Qt && (re.isWebGL2 || J.has("OES_texture_float") || J.has("WEBGL_color_buffer_float"))) && !We) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          B >= 0 && B <= C.width - O && $ >= 0 && $ <= C.height - q && P.readPixels(B, $, O, q, ve.convert($e), ve.convert(Ne), _e);
        } finally {
          const Be = T !== null ? ge.get(T).__webglFramebuffer : null;
          te.bindFramebuffer(P.FRAMEBUFFER, Be);
        }
      }
    }, this.copyFramebufferToTexture = function(C, B, $ = 0) {
      const O = Math.pow(2, -$), q = Math.floor(B.image.width * O), _e = Math.floor(B.image.height * O);
      ye.setTexture2D(B, 0), P.copyTexSubImage2D(P.TEXTURE_2D, $, 0, 0, C.x, C.y, q, _e), te.unbindTexture();
    }, this.copyTextureToTexture = function(C, B, $, O = 0) {
      const q = B.image.width, _e = B.image.height, Le = ve.convert($.format), Fe = ve.convert($.type);
      ye.setTexture2D($, 0), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, $.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, $.unpackAlignment), B.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, O, C.x, C.y, q, _e, Le, Fe, B.image.data) : B.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, O, C.x, C.y, B.mipmaps[0].width, B.mipmaps[0].height, Le, B.mipmaps[0].data) : P.texSubImage2D(P.TEXTURE_2D, O, C.x, C.y, Le, Fe, B.image), O === 0 && $.generateMipmaps && P.generateMipmap(P.TEXTURE_2D), te.unbindTexture();
    }, this.copyTextureToTexture3D = function(C, B, $, O, q = 0) {
      if (x.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const _e = C.max.x - C.min.x + 1, Le = C.max.y - C.min.y + 1, Fe = C.max.z - C.min.z + 1, Be = ve.convert(O.format), $e = ve.convert(O.type);
      let Ne;
      if (O.isData3DTexture)
        ye.setTexture3D(O, 0), Ne = P.TEXTURE_3D;
      else if (O.isDataArrayTexture)
        ye.setTexture2DArray(O, 0), Ne = P.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, O.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, O.unpackAlignment);
      const We = P.getParameter(P.UNPACK_ROW_LENGTH), mt = P.getParameter(P.UNPACK_IMAGE_HEIGHT), xt = P.getParameter(P.UNPACK_SKIP_PIXELS), sn = P.getParameter(P.UNPACK_SKIP_ROWS), Vn = P.getParameter(P.UNPACK_SKIP_IMAGES), Tt = $.isCompressedTexture ? $.mipmaps[0] : $.image;
      P.pixelStorei(P.UNPACK_ROW_LENGTH, Tt.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, Tt.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, C.min.x), P.pixelStorei(P.UNPACK_SKIP_ROWS, C.min.y), P.pixelStorei(P.UNPACK_SKIP_IMAGES, C.min.z), $.isDataTexture || $.isData3DTexture ? P.texSubImage3D(Ne, q, B.x, B.y, B.z, _e, Le, Fe, Be, $e, Tt.data) : $.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), P.compressedTexSubImage3D(Ne, q, B.x, B.y, B.z, _e, Le, Fe, Be, Tt.data)) : P.texSubImage3D(Ne, q, B.x, B.y, B.z, _e, Le, Fe, Be, $e, Tt), P.pixelStorei(P.UNPACK_ROW_LENGTH, We), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, mt), P.pixelStorei(P.UNPACK_SKIP_PIXELS, xt), P.pixelStorei(P.UNPACK_SKIP_ROWS, sn), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Vn), q === 0 && O.generateMipmaps && P.generateMipmap(Ne), te.unbindTexture();
    }, this.initTexture = function(C) {
      C.isCubeTexture ? ye.setTextureCube(C, 0) : C.isData3DTexture ? ye.setTexture3D(C, 0) : C.isDataArrayTexture || C.isCompressedArrayTexture ? ye.setTexture2DArray(C, 0) : ye.setTexture2D(C, 0), te.unbindTexture();
    }, this.resetState = function() {
      S = 0, E = 0, T = null, te.reset(), Me.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return On;
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === De ? Ei : ah;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Ei ? De : fn;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class dp extends _h {
}
dp.prototype.isWebGL1Renderer = !0;
class Fa {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new he(e), this.density = t;
  }
  clone() {
    return new Fa(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class Ba {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new he(e), this.near = t, this.far = n;
  }
  clone() {
    return new Ba(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class za extends ze {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class co {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Yr, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = tn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = tn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = tn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Vt = /* @__PURE__ */ new w();
class Ai {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Vt.fromBufferAttribute(this, t), Vt.applyMatrix4(e), this.setXYZ(t, Vt.x, Vt.y, Vt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Vt.fromBufferAttribute(this, t), Vt.applyNormalMatrix(e), this.setXYZ(t, Vt.x, Vt.y, Vt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Vt.fromBufferAttribute(this, t), Vt.transformDirection(e), this.setXYZ(t, Vt.x, Vt.y, Vt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ge(t, this.array), n = Ge(n, this.array), i = Ge(i, this.array), s = Ge(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new rt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Ai(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class yh extends Rt {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new he(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let Is;
const Sr = /* @__PURE__ */ new w(), Us = /* @__PURE__ */ new w(), Ds = /* @__PURE__ */ new w(), Os = /* @__PURE__ */ new j(), Er = /* @__PURE__ */ new j(), fp = /* @__PURE__ */ new Ie(), Bo = /* @__PURE__ */ new w(), Tr = /* @__PURE__ */ new w(), zo = /* @__PURE__ */ new w(), Fu = /* @__PURE__ */ new j(), Uc = /* @__PURE__ */ new j(), Bu = /* @__PURE__ */ new j();
class pp extends ze {
  constructor(e) {
    if (super(), this.isSprite = !0, this.type = "Sprite", Is === void 0) {
      Is = new Ye();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new co(t, 5);
      Is.setIndex([0, 1, 2, 0, 2, 3]), Is.setAttribute("position", new Ai(n, 3, 0, !1)), Is.setAttribute("uv", new Ai(n, 2, 3, !1));
    }
    this.geometry = Is, this.material = e !== void 0 ? e : new yh(), this.center = new j(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Us.setFromMatrixScale(this.matrixWorld), fp.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ds.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Us.multiplyScalar(-Ds.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    Ho(Bo.set(-0.5, -0.5, 0), Ds, o, Us, i, s), Ho(Tr.set(0.5, -0.5, 0), Ds, o, Us, i, s), Ho(zo.set(0.5, 0.5, 0), Ds, o, Us, i, s), Fu.set(0, 0), Uc.set(1, 0), Bu.set(1, 1);
    let a = e.ray.intersectTriangle(Bo, Tr, zo, !1, Sr);
    if (a === null && (Ho(Tr.set(-0.5, 0.5, 0), Ds, o, Us, i, s), Uc.set(0, 1), a = e.ray.intersectTriangle(Bo, zo, Tr, !1, Sr), a === null))
      return;
    const c = e.ray.origin.distanceTo(Sr);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: Sr.clone(),
      uv: qt.getInterpolation(Sr, Bo, Tr, zo, Fu, Uc, Bu, new j()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Ho(r, e, t, n, i, s) {
  Os.subVectors(r, t).addScalar(0.5).multiply(n), i !== void 0 ? (Er.x = s * Os.x - i * Os.y, Er.y = i * Os.x + s * Os.y) : Er.copy(Os), r.copy(e), r.x += Er.x, r.y += Er.y, r.applyMatrix4(fp);
}
const ko = /* @__PURE__ */ new w(), zu = /* @__PURE__ */ new w();
class mp extends ze {
  constructor() {
    super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      },
      isLOD: {
        value: !0
      }
    }), this.autoUpdate = !0;
  }
  copy(e) {
    super.copy(e, !1);
    const t = e.levels;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      this.addLevel(s.object.clone(), s.distance, s.hysteresis);
    }
    return this.autoUpdate = e.autoUpdate, this;
  }
  addLevel(e, t = 0, n = 0) {
    t = Math.abs(t);
    const i = this.levels;
    let s;
    for (s = 0; s < i.length && !(t < i[s].distance); s++)
      ;
    return i.splice(s, 0, { distance: t, hysteresis: n, object: e }), this.add(e), this;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(e) {
    const t = this.levels;
    if (t.length > 0) {
      let n, i;
      for (n = 1, i = t.length; n < i; n++) {
        let s = t[n].distance;
        if (t[n].object.visible && (s -= s * t[n].hysteresis), e < s)
          break;
      }
      return t[n - 1].object;
    }
    return null;
  }
  raycast(e, t) {
    if (this.levels.length > 0) {
      ko.setFromMatrixPosition(this.matrixWorld);
      const i = e.ray.origin.distanceTo(ko);
      this.getObjectForDistance(i).raycast(e, t);
    }
  }
  update(e) {
    const t = this.levels;
    if (t.length > 1) {
      ko.setFromMatrixPosition(e.matrixWorld), zu.setFromMatrixPosition(this.matrixWorld);
      const n = ko.distanceTo(zu) / e.zoom;
      t[0].object.visible = !0;
      let i, s;
      for (i = 1, s = t.length; i < s; i++) {
        let o = t[i].distance;
        if (t[i].object.visible && (o -= o * t[i].hysteresis), n >= o)
          t[i - 1].object.visible = !1, t[i].object.visible = !0;
        else
          break;
      }
      for (this._currentLevel = i - 1; i < s; i++)
        t[i].object.visible = !1;
    }
  }
  toJSON(e) {
    const t = super.toJSON(e);
    this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
    const n = this.levels;
    for (let i = 0, s = n.length; i < s; i++) {
      const o = n[i];
      t.object.levels.push({
        object: o.object.uuid,
        distance: o.distance,
        hysteresis: o.hysteresis
      });
    }
    return t;
  }
}
const Hu = /* @__PURE__ */ new w(), ku = /* @__PURE__ */ new it(), Vu = /* @__PURE__ */ new it(), pv = /* @__PURE__ */ new w(), Gu = /* @__PURE__ */ new Ie(), Ns = /* @__PURE__ */ new w(), Dc = /* @__PURE__ */ new gn(), Wu = /* @__PURE__ */ new Ie(), Oc = /* @__PURE__ */ new hr();
class xh extends St {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ie(), this.bindMatrixInverse = new Ie(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new bn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      Ns.fromBufferAttribute(t, n), this.applyBoneTransform(n, Ns), this.boundingBox.expandByPoint(Ns);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new gn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      Ns.fromBufferAttribute(t, n), this.applyBoneTransform(n, Ns), this.boundingSphere.expandByPoint(Ns);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Dc.copy(this.boundingSphere), Dc.applyMatrix4(i), e.ray.intersectsSphere(Dc) !== !1 && (Wu.copy(i).invert(), Oc.copy(e.ray).applyMatrix4(Wu), !(this.boundingBox !== null && Oc.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Oc)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new it(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    ku.fromBufferAttribute(i.attributes.skinIndex, e), Vu.fromBufferAttribute(i.attributes.skinWeight, e), Hu.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const o = Vu.getComponent(s);
      if (o !== 0) {
        const a = ku.getComponent(s);
        Gu.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(pv.copy(Hu).applyMatrix4(Gu), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class Ha extends ze {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class $s extends ft {
  constructor(e = null, t = 1, n = 1, i, s, o, a, c, l = _t, h = _t, u, d) {
    super(null, o, a, c, l, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Xu = /* @__PURE__ */ new Ie(), mv = /* @__PURE__ */ new Ie();
class lo {
  constructor(e = [], t = []) {
    this.uuid = tn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ie());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ie();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s] ? e[s].matrixWorld : mv;
      Xu.multiplyMatrices(a, t[s]), Xu.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new lo(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Kf(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new $s(t, e, e, jt, Qt);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let o = t[s];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), o = new Ha()), this.bones.push(o), this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const o = t[i];
      e.bones.push(o.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class tr extends rt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const Fs = /* @__PURE__ */ new Ie(), Yu = /* @__PURE__ */ new Ie(), Vo = [], qu = /* @__PURE__ */ new bn(), gv = /* @__PURE__ */ new Ie(), br = /* @__PURE__ */ new St(), Ar = /* @__PURE__ */ new gn();
class vh extends St {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new tr(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, gv);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new bn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Fs), qu.copy(e.boundingBox).applyMatrix4(Fs), this.boundingBox.union(qu);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new gn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Fs), Ar.copy(e.boundingSphere).applyMatrix4(Fs), this.boundingSphere.union(Ar);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (br.geometry = this.geometry, br.material = this.material, br.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ar.copy(this.boundingSphere), Ar.applyMatrix4(n), e.ray.intersectsSphere(Ar) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Fs), Yu.multiplyMatrices(n, Fs), br.matrixWorld = Yu, br.raycast(e, Vo);
        for (let o = 0, a = Vo.length; o < a; o++) {
          const c = Vo[o];
          c.instanceId = s, c.object = this, t.push(c);
        }
        Vo.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new tr(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Bt extends Rt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new he(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const $u = /* @__PURE__ */ new w(), Zu = /* @__PURE__ */ new w(), Ku = /* @__PURE__ */ new Ie(), Nc = /* @__PURE__ */ new hr(), Go = /* @__PURE__ */ new gn();
class ri extends ze {
  constructor(e = new Ye(), t = new Bt()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        $u.fromBufferAttribute(t, i - 1), Zu.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += $u.distanceTo(Zu);
      e.setAttribute("lineDistance", new xe(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Go.copy(n.boundingSphere), Go.applyMatrix4(i), Go.radius += s, e.ray.intersectsSphere(Go) === !1)
      return;
    Ku.copy(i).invert(), Nc.copy(e.ray).applyMatrix4(Ku);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new w(), h = new w(), u = new w(), d = new w(), f = this.isLineSegments ? 2 : 1, m = n.index, g = n.attributes.position;
    if (m !== null) {
      const p = Math.max(0, o.start), v = Math.min(m.count, o.start + o.count);
      for (let x = p, y = v - 1; x < y; x += f) {
        const S = m.getX(x), E = m.getX(x + 1);
        if (l.fromBufferAttribute(g, S), h.fromBufferAttribute(g, E), Nc.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const R = e.ray.origin.distanceTo(d);
        R < e.near || R > e.far || t.push({
          distance: R,
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const p = Math.max(0, o.start), v = Math.min(g.count, o.start + o.count);
      for (let x = p, y = v - 1; x < y; x += f) {
        if (l.fromBufferAttribute(g, x), h.fromBufferAttribute(g, x + 1), Nc.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const E = e.ray.origin.distanceTo(d);
        E < e.near || E > e.far || t.push({
          distance: E,
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const Ju = /* @__PURE__ */ new w(), ju = /* @__PURE__ */ new w();
class An extends ri {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Ju.fromBufferAttribute(t, i), ju.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Ju.distanceTo(ju);
      e.setAttribute("lineDistance", new xe(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Mh extends ri {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class ka extends Rt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new he(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Qu = /* @__PURE__ */ new Ie(), zl = /* @__PURE__ */ new hr(), Wo = /* @__PURE__ */ new gn(), Xo = /* @__PURE__ */ new w();
class Sh extends ze {
  constructor(e = new Ye(), t = new ka()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Wo.copy(n.boundingSphere), Wo.applyMatrix4(i), Wo.radius += s, e.ray.intersectsSphere(Wo) === !1)
      return;
    Qu.copy(i).invert(), zl.copy(e.ray).applyMatrix4(Qu);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, o.start), f = Math.min(l.count, o.start + o.count);
      for (let m = d, _ = f; m < _; m++) {
        const g = l.getX(m);
        Xo.fromBufferAttribute(u, g), ed(Xo, g, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let m = d, _ = f; m < _; m++)
        Xo.fromBufferAttribute(u, m), ed(Xo, m, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function ed(r, e, t, n, i, s, o) {
  const a = zl.distanceSqToPoint(r);
  if (a < t) {
    const c = new w();
    zl.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far)
      return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(a),
      point: c,
      index: e,
      face: null,
      object: o
    });
  }
}
class _v extends ft {
  constructor(e, t, n, i, s, o, a, c, l) {
    super(e, t, n, i, s, o, a, c, l), this.isVideoTexture = !0, this.minFilter = o !== void 0 ? o : lt, this.magFilter = s !== void 0 ? s : lt, this.generateMipmaps = !1;
    const h = this;
    function u() {
      h.needsUpdate = !0, e.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
class yv extends ft {
  constructor(e, t) {
    super({ width: e, height: t }), this.isFramebufferTexture = !0, this.magFilter = _t, this.minFilter = _t, this.generateMipmaps = !1, this.needsUpdate = !0;
  }
}
class Va extends ft {
  constructor(e, t, n, i, s, o, a, c, l, h, u, d) {
    super(null, o, a, c, l, h, i, s, u, d), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class xv extends Va {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, s, o), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = Dt;
  }
}
class vv extends Va {
  constructor(e, t, n) {
    super(void 0, e[0].width, e[0].height, t, n, ii), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e;
  }
}
class Mv extends ft {
  constructor(e, t, n, i, s, o, a, c, l) {
    super(e, t, n, i, s, o, a, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class wn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      n = this.getPoint(o / e), s += n.distanceTo(i), t.push(s), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let o;
    t ? o = t : o = e * n[s - 1];
    let a = 0, c = s - 1, l;
    for (; a <= c; )
      if (i = Math.floor(a + (c - a) / 2), l = n[i] - o, l < 0)
        a = i + 1;
      else if (l > 0)
        c = i - 1;
      else {
        c = i;
        break;
      }
    if (i = c, n[i] === o)
      return i / (s - 1);
    const h = n[i], d = n[i + 1] - h, f = (o - h) / d;
    return (i + f) / (s - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4, s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const o = this.getPoint(i), a = this.getPoint(s), c = t || (o.isVector2 ? new j() : new w());
    return c.copy(a).sub(o).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new w(), i = [], s = [], o = [], a = new w(), c = new Ie();
    for (let f = 0; f <= e; f++) {
      const m = f / e;
      i[f] = this.getTangentAt(m, new w());
    }
    s[0] = new w(), o[0] = new w();
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), o[0].crossVectors(i[0], s[0]);
    for (let f = 1; f <= e; f++) {
      if (s[f] = s[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) {
        a.normalize();
        const m = Math.acos(yt(i[f - 1].dot(i[f]), -1, 1));
        s[f].applyMatrix4(c.makeRotationAxis(a, m));
      }
      o[f].crossVectors(i[f], s[f]);
    }
    if (t === !0) {
      let f = Math.acos(yt(s[0].dot(s[e]), -1, 1));
      f /= e, i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (f = -f);
      for (let m = 1; m <= e; m++)
        s[m].applyMatrix4(c.makeRotationAxis(i[m], f * m)), o[m].crossVectors(i[m], s[m]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: o
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class Ga extends wn {
  constructor(e = 0, t = 0, n = 1, i = 1, s = 0, o = Math.PI * 2, a = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c;
  }
  getPoint(e, t) {
    const n = t || new j(), i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; )
      s += i;
    for (; s > i; )
      s -= i;
    s < Number.EPSILON && (o ? s = 0 : s = i), this.aClockwise === !0 && !o && (s === i ? s = -i : s = s - i);
    const a = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, f = l - this.aY;
      c = d * h - f * u + this.aX, l = d * u + f * h + this.aY;
    }
    return n.set(c, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class gp extends Ga {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, n, i, s, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function Eh() {
  let r = 0, e = 0, t = 0, n = 0;
  function i(s, o, a, c) {
    r = s, e = a, t = -3 * s + 3 * o - 2 * a - c, n = 2 * s - 2 * o + a + c;
  }
  return {
    initCatmullRom: function(s, o, a, c, l) {
      i(o, a, l * (a - s), l * (c - o));
    },
    initNonuniformCatmullRom: function(s, o, a, c, l, h, u) {
      let d = (o - s) / l - (a - s) / (l + h) + (a - o) / h, f = (a - o) / h - (c - o) / (h + u) + (c - a) / u;
      d *= h, f *= h, i(o, a, d, f);
    },
    calc: function(s) {
      const o = s * s, a = o * s;
      return r + e * s + t * o + n * a;
    }
  };
}
const Yo = /* @__PURE__ */ new w(), Fc = /* @__PURE__ */ new Eh(), Bc = /* @__PURE__ */ new Eh(), zc = /* @__PURE__ */ new Eh();
class _p extends wn {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.points, s = i.length, o = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), c = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1);
    let l, h;
    this.closed || a > 0 ? l = i[(a - 1) % s] : (Yo.subVectors(i[0], i[1]).add(i[0]), l = Yo);
    const u = i[a % s], d = i[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = i[(a + 2) % s] : (Yo.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = Yo), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(l.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), g = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), Fc.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, m, _, g), Bc.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, m, _, g), zc.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, m, _, g);
    } else
      this.curveType === "catmullrom" && (Fc.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), Bc.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), zc.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      Fc.calc(c),
      Bc.calc(c),
      zc.calc(c)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new w().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function td(r, e, t, n, i) {
  const s = (n - e) * 0.5, o = (i - t) * 0.5, a = r * r, c = r * a;
  return (2 * t - 2 * n + s + o) * c + (-3 * t + 3 * n - 2 * s - o) * a + s * r + t;
}
function Sv(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function Ev(r, e) {
  return 2 * (1 - r) * r * e;
}
function Tv(r, e) {
  return r * r * e;
}
function Hr(r, e, t, n) {
  return Sv(r, e) + Ev(r, t) + Tv(r, n);
}
function bv(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function Av(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function wv(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function Rv(r, e) {
  return r * r * r * e;
}
function kr(r, e, t, n, i) {
  return bv(r, e) + Av(r, t) + wv(r, n) + Rv(r, i);
}
class Th extends wn {
  constructor(e = new j(), t = new j(), n = new j(), i = new j()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      kr(e, i.x, s.x, o.x, a.x),
      kr(e, i.y, s.y, o.y, a.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class yp extends wn {
  constructor(e = new w(), t = new w(), n = new w(), i = new w()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      kr(e, i.x, s.x, o.x, a.x),
      kr(e, i.y, s.y, o.y, a.y),
      kr(e, i.z, s.z, o.z, a.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Wa extends wn {
  constructor(e = new j(), t = new j()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new j()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new j()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class xp extends wn {
  constructor(e = new w(), t = new w()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new w()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new w()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class bh extends wn {
  constructor(e = new j(), t = new j(), n = new j()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Hr(e, i.x, s.x, o.x),
      Hr(e, i.y, s.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Ah extends wn {
  constructor(e = new w(), t = new w(), n = new w()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Hr(e, i.x, s.x, o.x),
      Hr(e, i.y, s.y, o.y),
      Hr(e, i.z, s.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class wh extends wn {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.points, s = (i.length - 1) * e, o = Math.floor(s), a = s - o, c = i[o === 0 ? o : o - 1], l = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(
      td(a, c.x, l.x, h.x, u.x),
      td(a, c.y, l.y, h.y, u.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new j().fromArray(i));
    }
    return this;
  }
}
var Rh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: gp,
  CatmullRomCurve3: _p,
  CubicBezierCurve: Th,
  CubicBezierCurve3: yp,
  EllipseCurve: Ga,
  LineCurve: Wa,
  LineCurve3: xp,
  QuadraticBezierCurve: bh,
  QuadraticBezierCurve3: Ah,
  SplineCurve: wh
});
class vp extends wn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Wa(t, e));
  }
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let s = 0;
    for (; s < i.length; ) {
      if (i[s] >= n) {
        const o = i[s] - n, a = this.curves[s], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c;
        return a.getPointAt(l, t);
      }
      s++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const o = s[i], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, c = o.getPoints(a);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
        n && n.equals(h) || (t.push(h), n = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new Rh[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Zr extends vp {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new j(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new Wa(this.currentPoint.clone(), new j(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new bh(
      this.currentPoint.clone(),
      new j(e, t),
      new j(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, o) {
    const a = new Th(
      this.currentPoint.clone(),
      new j(e, t),
      new j(n, i),
      new j(s, o)
    );
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new wh(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, o) {
    const a = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      e + a,
      t + c,
      n,
      i,
      s,
      o
    ), this;
  }
  absarc(e, t, n, i, s, o) {
    return this.absellipse(e, t, n, n, i, s, o), this;
  }
  ellipse(e, t, n, i, s, o, a, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, n, i, s, o, a, c), this;
  }
  absellipse(e, t, n, i, s, o, a, c) {
    const l = new Ga(e, t, n, i, s, o, a, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class ho extends Ye {
  constructor(e = [new j(0, -0.5), new j(0.5, 0), new j(0, 0.5)], t = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: i
    }, t = Math.floor(t), i = yt(i, 0, Math.PI * 2);
    const s = [], o = [], a = [], c = [], l = [], h = 1 / t, u = new w(), d = new j(), f = new w(), m = new w(), _ = new w();
    let g = 0, p = 0;
    for (let v = 0; v <= e.length - 1; v++)
      switch (v) {
        case 0:
          g = e[v + 1].x - e[v].x, p = e[v + 1].y - e[v].y, f.x = p * 1, f.y = -g, f.z = p * 0, _.copy(f), f.normalize(), c.push(f.x, f.y, f.z);
          break;
        case e.length - 1:
          c.push(_.x, _.y, _.z);
          break;
        default:
          g = e[v + 1].x - e[v].x, p = e[v + 1].y - e[v].y, f.x = p * 1, f.y = -g, f.z = p * 0, m.copy(f), f.x += _.x, f.y += _.y, f.z += _.z, f.normalize(), c.push(f.x, f.y, f.z), _.copy(m);
      }
    for (let v = 0; v <= t; v++) {
      const x = n + v * h * i, y = Math.sin(x), S = Math.cos(x);
      for (let E = 0; E <= e.length - 1; E++) {
        u.x = e[E].x * y, u.y = e[E].y, u.z = e[E].x * S, o.push(u.x, u.y, u.z), d.x = v / t, d.y = E / (e.length - 1), a.push(d.x, d.y);
        const T = c[3 * E + 0] * y, R = c[3 * E + 1], M = c[3 * E + 0] * S;
        l.push(T, R, M);
      }
    }
    for (let v = 0; v < t; v++)
      for (let x = 0; x < e.length - 1; x++) {
        const y = x + v * e.length, S = y, E = y + e.length, T = y + e.length + 1, R = y + 1;
        s.push(S, E, R), s.push(T, R, E);
      }
    this.setIndex(s), this.setAttribute("position", new xe(o, 3)), this.setAttribute("uv", new xe(a, 2)), this.setAttribute("normal", new xe(l, 3));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ho(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class Xa extends ho {
  constructor(e = 1, t = 1, n = 4, i = 8) {
    const s = new Zr();
    s.absarc(0, -t / 2, e, Math.PI * 1.5, 0), s.absarc(0, t / 2, e, 0, Math.PI * 0.5), super(s.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
      radius: e,
      length: t,
      capSegments: n,
      radialSegments: i
    };
  }
  static fromJSON(e) {
    return new Xa(e.radius, e.length, e.capSegments, e.radialSegments);
  }
}
class Ya extends Ye {
  constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: i
    }, t = Math.max(3, t);
    const s = [], o = [], a = [], c = [], l = new w(), h = new j();
    o.push(0, 0, 0), a.push(0, 0, 1), c.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= t; u++, d += 3) {
      const f = n + u / t * i;
      l.x = e * Math.cos(f), l.y = e * Math.sin(f), o.push(l.x, l.y, l.z), a.push(0, 0, 1), h.x = (o[d] / e + 1) / 2, h.y = (o[d + 1] / e + 1) / 2, c.push(h.x, h.y);
    }
    for (let u = 1; u <= t; u++)
      s.push(u, u + 1, 0);
    this.setIndex(s), this.setAttribute("position", new xe(o, 3)), this.setAttribute("normal", new xe(a, 3)), this.setAttribute("uv", new xe(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ya(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class pr extends Ye {
  constructor(e = 1, t = 1, n = 1, i = 32, s = 1, o = !1, a = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: s,
      openEnded: o,
      thetaStart: a,
      thetaLength: c
    };
    const l = this;
    i = Math.floor(i), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let m = 0;
    const _ = [], g = n / 2;
    let p = 0;
    v(), o === !1 && (e > 0 && x(!0), t > 0 && x(!1)), this.setIndex(h), this.setAttribute("position", new xe(u, 3)), this.setAttribute("normal", new xe(d, 3)), this.setAttribute("uv", new xe(f, 2));
    function v() {
      const y = new w(), S = new w();
      let E = 0;
      const T = (t - e) / n;
      for (let R = 0; R <= s; R++) {
        const M = [], b = R / s, U = b * (t - e) + e;
        for (let k = 0; k <= i; k++) {
          const D = k / i, F = D * c + a, N = Math.sin(F), K = Math.cos(F);
          S.x = U * N, S.y = -b * n + g, S.z = U * K, u.push(S.x, S.y, S.z), y.set(N, T, K).normalize(), d.push(y.x, y.y, y.z), f.push(D, 1 - b), M.push(m++);
        }
        _.push(M);
      }
      for (let R = 0; R < i; R++)
        for (let M = 0; M < s; M++) {
          const b = _[M][R], U = _[M + 1][R], k = _[M + 1][R + 1], D = _[M][R + 1];
          h.push(b, U, D), h.push(U, k, D), E += 6;
        }
      l.addGroup(p, E, 0), p += E;
    }
    function x(y) {
      const S = m, E = new j(), T = new w();
      let R = 0;
      const M = y === !0 ? e : t, b = y === !0 ? 1 : -1;
      for (let k = 1; k <= i; k++)
        u.push(0, g * b, 0), d.push(0, b, 0), f.push(0.5, 0.5), m++;
      const U = m;
      for (let k = 0; k <= i; k++) {
        const F = k / i * c + a, N = Math.cos(F), K = Math.sin(F);
        T.x = M * K, T.y = g * b, T.z = M * N, u.push(T.x, T.y, T.z), d.push(0, b, 0), E.x = N * 0.5 + 0.5, E.y = K * 0.5 * b + 0.5, f.push(E.x, E.y), m++;
      }
      for (let k = 0; k < i; k++) {
        const D = S + k, F = U + k;
        y === !0 ? h.push(F, F + 1, D) : h.push(F + 1, F, D), R += 3;
      }
      l.addGroup(p, R, y === !0 ? 1 : 2), p += R;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new pr(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class qa extends pr {
  constructor(e = 1, t = 1, n = 32, i = 1, s = !1, o = 0, a = Math.PI * 2) {
    super(0, e, t, n, i, s, o, a), this.type = "ConeGeometry", this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: i,
      openEnded: s,
      thetaStart: o,
      thetaLength: a
    };
  }
  static fromJSON(e) {
    return new qa(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Li extends Ye {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    };
    const s = [], o = [];
    a(i), l(n), h(), this.setAttribute("position", new xe(s, 3)), this.setAttribute("normal", new xe(s.slice(), 3)), this.setAttribute("uv", new xe(o, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(v) {
      const x = new w(), y = new w(), S = new w();
      for (let E = 0; E < t.length; E += 3)
        f(t[E + 0], x), f(t[E + 1], y), f(t[E + 2], S), c(x, y, S, v);
    }
    function c(v, x, y, S) {
      const E = S + 1, T = [];
      for (let R = 0; R <= E; R++) {
        T[R] = [];
        const M = v.clone().lerp(y, R / E), b = x.clone().lerp(y, R / E), U = E - R;
        for (let k = 0; k <= U; k++)
          k === 0 && R === E ? T[R][k] = M : T[R][k] = M.clone().lerp(b, k / U);
      }
      for (let R = 0; R < E; R++)
        for (let M = 0; M < 2 * (E - R) - 1; M++) {
          const b = Math.floor(M / 2);
          M % 2 === 0 ? (d(T[R][b + 1]), d(T[R + 1][b]), d(T[R][b])) : (d(T[R][b + 1]), d(T[R + 1][b + 1]), d(T[R + 1][b]));
        }
    }
    function l(v) {
      const x = new w();
      for (let y = 0; y < s.length; y += 3)
        x.x = s[y + 0], x.y = s[y + 1], x.z = s[y + 2], x.normalize().multiplyScalar(v), s[y + 0] = x.x, s[y + 1] = x.y, s[y + 2] = x.z;
    }
    function h() {
      const v = new w();
      for (let x = 0; x < s.length; x += 3) {
        v.x = s[x + 0], v.y = s[x + 1], v.z = s[x + 2];
        const y = g(v) / 2 / Math.PI + 0.5, S = p(v) / Math.PI + 0.5;
        o.push(y, 1 - S);
      }
      m(), u();
    }
    function u() {
      for (let v = 0; v < o.length; v += 6) {
        const x = o[v + 0], y = o[v + 2], S = o[v + 4], E = Math.max(x, y, S), T = Math.min(x, y, S);
        E > 0.9 && T < 0.1 && (x < 0.2 && (o[v + 0] += 1), y < 0.2 && (o[v + 2] += 1), S < 0.2 && (o[v + 4] += 1));
      }
    }
    function d(v) {
      s.push(v.x, v.y, v.z);
    }
    function f(v, x) {
      const y = v * 3;
      x.x = e[y + 0], x.y = e[y + 1], x.z = e[y + 2];
    }
    function m() {
      const v = new w(), x = new w(), y = new w(), S = new w(), E = new j(), T = new j(), R = new j();
      for (let M = 0, b = 0; M < s.length; M += 9, b += 6) {
        v.set(s[M + 0], s[M + 1], s[M + 2]), x.set(s[M + 3], s[M + 4], s[M + 5]), y.set(s[M + 6], s[M + 7], s[M + 8]), E.set(o[b + 0], o[b + 1]), T.set(o[b + 2], o[b + 3]), R.set(o[b + 4], o[b + 5]), S.copy(v).add(x).add(y).divideScalar(3);
        const U = g(S);
        _(E, b + 0, v, U), _(T, b + 2, x, U), _(R, b + 4, y, U);
      }
    }
    function _(v, x, y, S) {
      S < 0 && v.x === 1 && (o[x] = v.x - 1), y.x === 0 && y.z === 0 && (o[x] = S / 2 / Math.PI + 0.5);
    }
    function g(v) {
      return Math.atan2(v.z, -v.x);
    }
    function p(v) {
      return Math.atan2(-v.y, Math.sqrt(v.x * v.x + v.z * v.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Li(e.vertices, e.indices, e.radius, e.details);
  }
}
class $a extends Li {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, s = [
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      0,
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      0,
      -n,
      0,
      -i,
      n,
      0,
      -i,
      -n,
      0,
      i,
      n,
      0,
      i
    ], o = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(s, o, e, t), this.type = "DodecahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new $a(e.radius, e.detail);
  }
}
const qo = /* @__PURE__ */ new w(), $o = /* @__PURE__ */ new w(), Hc = /* @__PURE__ */ new w(), Zo = /* @__PURE__ */ new qt();
class Mp extends Ye {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const i = Math.pow(10, 4), s = Math.cos(ts * t), o = e.getIndex(), a = e.getAttribute("position"), c = o ? o.count : a.count, l = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let m = 0; m < c; m += 3) {
        o ? (l[0] = o.getX(m), l[1] = o.getX(m + 1), l[2] = o.getX(m + 2)) : (l[0] = m, l[1] = m + 1, l[2] = m + 2);
        const { a: _, b: g, c: p } = Zo;
        if (_.fromBufferAttribute(a, l[0]), g.fromBufferAttribute(a, l[1]), p.fromBufferAttribute(a, l[2]), Zo.getNormal(Hc), u[0] = `${Math.round(_.x * i)},${Math.round(_.y * i)},${Math.round(_.z * i)}`, u[1] = `${Math.round(g.x * i)},${Math.round(g.y * i)},${Math.round(g.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let v = 0; v < 3; v++) {
            const x = (v + 1) % 3, y = u[v], S = u[x], E = Zo[h[v]], T = Zo[h[x]], R = `${y}_${S}`, M = `${S}_${y}`;
            M in d && d[M] ? (Hc.dot(d[M].normal) <= s && (f.push(E.x, E.y, E.z), f.push(T.x, T.y, T.z)), d[M] = null) : R in d || (d[R] = {
              index0: l[v],
              index1: l[x],
              normal: Hc.clone()
            });
          }
      }
      for (const m in d)
        if (d[m]) {
          const { index0: _, index1: g } = d[m];
          qo.fromBufferAttribute(a, _), $o.fromBufferAttribute(a, g), f.push(qo.x, qo.y, qo.z), f.push($o.x, $o.y, $o.z);
        }
      this.setAttribute("position", new xe(f, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class ns extends Zr {
  constructor(e) {
    super(e), this.uuid = tn(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new Zr().fromJSON(i));
    }
    return this;
  }
}
const Cv = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = Sp(r, 0, i, t, !0);
    const o = [];
    if (!s || s.next === s.prev)
      return o;
    let a, c, l, h, u, d, f;
    if (n && (s = Dv(r, e, s, t)), r.length > 80 * t) {
      a = l = r[0], c = h = r[1];
      for (let m = t; m < i; m += t)
        u = r[m], d = r[m + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      f = Math.max(l - a, h - c), f = f !== 0 ? 32767 / f : 0;
    }
    return Kr(s, o, t, a, c, f, 0), o;
  }
};
function Sp(r, e, t, n, i) {
  let s, o;
  if (i === Xv(r, e, t, n) > 0)
    for (s = e; s < t; s += n)
      o = nd(s, r[s], r[s + 1], o);
  else
    for (s = t - n; s >= e; s -= n)
      o = nd(s, r[s], r[s + 1], o);
  return o && Za(o, o.next) && (jr(o), o = o.next), o;
}
function rs(r, e) {
  if (!r)
    return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (Za(t, t.next) || dt(t.prev, t, t.next) === 0)) {
      if (jr(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Kr(r, e, t, n, i, s, o) {
  if (!r)
    return;
  !o && s && zv(r, n, i, s);
  let a = r, c, l;
  for (; r.prev !== r.next; ) {
    if (c = r.prev, l = r.next, s ? Pv(r, n, i, s) : Lv(r)) {
      e.push(c.i / t | 0), e.push(r.i / t | 0), e.push(l.i / t | 0), jr(r), r = l.next, a = l.next;
      continue;
    }
    if (r = l, r === a) {
      o ? o === 1 ? (r = Iv(rs(r), e, t), Kr(r, e, t, n, i, s, 2)) : o === 2 && Uv(r, e, t, n, i, s) : Kr(rs(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function Lv(r) {
  const e = r.prev, t = r, n = r.next;
  if (dt(e, t, n) >= 0)
    return !1;
  const i = e.x, s = t.x, o = n.x, a = e.y, c = t.y, l = n.y, h = i < s ? i < o ? i : o : s < o ? s : o, u = a < c ? a < l ? a : l : c < l ? c : l, d = i > s ? i > o ? i : o : s > o ? s : o, f = a > c ? a > l ? a : l : c > l ? c : l;
  let m = n.next;
  for (; m !== e; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= f && Xs(i, a, s, c, o, l, m.x, m.y) && dt(m.prev, m, m.next) >= 0)
      return !1;
    m = m.next;
  }
  return !0;
}
function Pv(r, e, t, n) {
  const i = r.prev, s = r, o = r.next;
  if (dt(i, s, o) >= 0)
    return !1;
  const a = i.x, c = s.x, l = o.x, h = i.y, u = s.y, d = o.y, f = a < c ? a < l ? a : l : c < l ? c : l, m = h < u ? h < d ? h : d : u < d ? u : d, _ = a > c ? a > l ? a : l : c > l ? c : l, g = h > u ? h > d ? h : d : u > d ? u : d, p = Hl(f, m, e, t, n), v = Hl(_, g, e, t, n);
  let x = r.prevZ, y = r.nextZ;
  for (; x && x.z >= p && y && y.z <= v; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== o && Xs(a, h, c, u, l, d, x.x, x.y) && dt(x.prev, x, x.next) >= 0 || (x = x.prevZ, y.x >= f && y.x <= _ && y.y >= m && y.y <= g && y !== i && y !== o && Xs(a, h, c, u, l, d, y.x, y.y) && dt(y.prev, y, y.next) >= 0))
      return !1;
    y = y.nextZ;
  }
  for (; x && x.z >= p; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== o && Xs(a, h, c, u, l, d, x.x, x.y) && dt(x.prev, x, x.next) >= 0)
      return !1;
    x = x.prevZ;
  }
  for (; y && y.z <= v; ) {
    if (y.x >= f && y.x <= _ && y.y >= m && y.y <= g && y !== i && y !== o && Xs(a, h, c, u, l, d, y.x, y.y) && dt(y.prev, y, y.next) >= 0)
      return !1;
    y = y.nextZ;
  }
  return !0;
}
function Iv(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Za(i, s) && Ep(i, n, n.next, s) && Jr(i, s) && Jr(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), jr(n), jr(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return rs(n);
}
function Uv(r, e, t, n, i, s) {
  let o = r;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Vv(o, a)) {
        let c = Tp(o, a);
        o = rs(o, o.next), c = rs(c, c.next), Kr(o, e, t, n, i, s, 0), Kr(c, e, t, n, i, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== r);
}
function Dv(r, e, t, n) {
  const i = [];
  let s, o, a, c, l;
  for (s = 0, o = e.length; s < o; s++)
    a = e[s] * n, c = s < o - 1 ? e[s + 1] * n : r.length, l = Sp(r, a, c, n, !1), l === l.next && (l.steiner = !0), i.push(kv(l));
  for (i.sort(Ov), s = 0; s < i.length; s++)
    t = Nv(i[s], t);
  return t;
}
function Ov(r, e) {
  return r.x - e.x;
}
function Nv(r, e) {
  const t = Fv(r, e);
  if (!t)
    return e;
  const n = Tp(t, r);
  return rs(n, n.next), rs(t, t.next);
}
function Fv(r, e) {
  let t = e, n = -1 / 0, i;
  const s = r.x, o = r.y;
  do {
    if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
      const d = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (d <= s && d > n && (n = d, i = t.x < t.next.x ? t : t.next, d === s))
        return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i)
    return null;
  const a = i, c = i.x, l = i.y;
  let h = 1 / 0, u;
  t = i;
  do
    s >= t.x && t.x >= c && s !== t.x && Xs(o < l ? s : n, o, c, l, o < l ? n : s, o, t.x, t.y) && (u = Math.abs(o - t.y) / (s - t.x), Jr(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && Bv(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== a);
  return i;
}
function Bv(r, e) {
  return dt(r.prev, r, e.prev) < 0 && dt(e.next, r, r.next) < 0;
}
function zv(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = Hl(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, Hv(i);
}
function Hv(r) {
  let e, t, n, i, s, o, a, c, l = 1;
  do {
    for (t = r, r = null, s = null, o = 0; t; ) {
      for (o++, n = t, a = 0, e = 0; e < l && (a++, n = n.nextZ, !!n); e++)
        ;
      for (c = l; a > 0 || c > 0 && n; )
        a !== 0 && (c === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, c--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, l *= 2;
  } while (o > 1);
  return r;
}
function Hl(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function kv(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function Xs(r, e, t, n, i, s, o, a) {
  return (i - o) * (e - a) >= (r - o) * (s - a) && (r - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (i - o) * (n - a);
}
function Vv(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !Gv(r, e) && (Jr(r, e) && Jr(e, r) && Wv(r, e) && (dt(r.prev, r, e.prev) || dt(r, e.prev, e)) || Za(r, e) && dt(r.prev, r, r.next) > 0 && dt(e.prev, e, e.next) > 0);
}
function dt(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function Za(r, e) {
  return r.x === e.x && r.y === e.y;
}
function Ep(r, e, t, n) {
  const i = Jo(dt(r, e, t)), s = Jo(dt(r, e, n)), o = Jo(dt(t, n, r)), a = Jo(dt(t, n, e));
  return !!(i !== s && o !== a || i === 0 && Ko(r, t, e) || s === 0 && Ko(r, n, e) || o === 0 && Ko(t, r, n) || a === 0 && Ko(t, e, n));
}
function Ko(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function Jo(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Gv(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Ep(t, t.next, r, e))
      return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function Jr(r, e) {
  return dt(r.prev, r, r.next) < 0 ? dt(r, e, r.next) >= 0 && dt(r, r.prev, e) >= 0 : dt(r, e, r.prev) < 0 || dt(r, r.next, e) < 0;
}
function Wv(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function Tp(r, e) {
  const t = new kl(r.i, r.x, r.y), n = new kl(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function nd(r, e, t, n) {
  const i = new kl(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function jr(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function kl(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Xv(r, e, t, n) {
  let i = 0;
  for (let s = e, o = t - n; s < t; s += n)
    i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
  return i;
}
class Nn {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Nn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    id(e), sd(n, e);
    let o = e.length;
    t.forEach(id);
    for (let c = 0; c < t.length; c++)
      i.push(o), o += t[c].length, sd(n, t[c]);
    const a = Cv.triangulate(n, i);
    for (let c = 0; c < a.length; c += 3)
      s.push(a.slice(c, c + 3));
    return s;
  }
}
function id(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function sd(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class uo extends Ye {
  constructor(e = new ns([new j(0.5, 0.5), new j(-0.5, 0.5), new j(-0.5, -0.5), new j(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, i = [], s = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a];
      o(l);
    }
    this.setAttribute("position", new xe(i, 3)), this.setAttribute("uv", new xe(s, 2)), this.computeVertexNormals();
    function o(a) {
      const c = [], l = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, m = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, _ = t.bevelOffset !== void 0 ? t.bevelOffset : 0, g = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, v = t.UVGenerator !== void 0 ? t.UVGenerator : Yv;
      let x, y = !1, S, E, T, R;
      p && (x = p.getSpacedPoints(h), y = !0, d = !1, S = p.computeFrenetFrames(h, !1), E = new w(), T = new w(), R = new w()), d || (g = 0, f = 0, m = 0, _ = 0);
      const M = a.extractPoints(l);
      let b = M.shape;
      const U = M.holes;
      if (!Nn.isClockWise(b)) {
        b = b.reverse();
        for (let P = 0, ae = U.length; P < ae; P++) {
          const J = U[P];
          Nn.isClockWise(J) && (U[P] = J.reverse());
        }
      }
      const D = Nn.triangulateShape(b, U), F = b;
      for (let P = 0, ae = U.length; P < ae; P++) {
        const J = U[P];
        b = b.concat(J);
      }
      function N(P, ae, J) {
        return ae || console.error("THREE.ExtrudeGeometry: vec does not exist"), P.clone().addScaledVector(ae, J);
      }
      const K = b.length, W = D.length;
      function Y(P, ae, J) {
        let re, te, Ee;
        const ge = P.x - ae.x, ye = P.y - ae.y, He = J.x - P.x, Je = J.y - P.y, pt = ge * ge + ye * ye, L = ge * Je - ye * He;
        if (Math.abs(L) > Number.EPSILON) {
          const A = Math.sqrt(pt), H = Math.sqrt(He * He + Je * Je), ie = ae.x - ye / A, ne = ae.y + ge / A, se = J.x - Je / H, Se = J.y + He / H, oe = ((se - ie) * Je - (Se - ne) * He) / (ge * Je - ye * He);
          re = ie + ge * oe - P.x, te = ne + ye * oe - P.y;
          const V = re * re + te * te;
          if (V <= 2)
            return new j(re, te);
          Ee = Math.sqrt(V / 2);
        } else {
          let A = !1;
          ge > Number.EPSILON ? He > Number.EPSILON && (A = !0) : ge < -Number.EPSILON ? He < -Number.EPSILON && (A = !0) : Math.sign(ye) === Math.sign(Je) && (A = !0), A ? (re = -ye, te = ge, Ee = Math.sqrt(pt)) : (re = ge, te = ye, Ee = Math.sqrt(pt / 2));
        }
        return new j(re / Ee, te / Ee);
      }
      const ee = [];
      for (let P = 0, ae = F.length, J = ae - 1, re = P + 1; P < ae; P++, J++, re++)
        J === ae && (J = 0), re === ae && (re = 0), ee[P] = Y(F[P], F[J], F[re]);
      const Q = [];
      let z, X = ee.concat();
      for (let P = 0, ae = U.length; P < ae; P++) {
        const J = U[P];
        z = [];
        for (let re = 0, te = J.length, Ee = te - 1, ge = re + 1; re < te; re++, Ee++, ge++)
          Ee === te && (Ee = 0), ge === te && (ge = 0), z[re] = Y(J[re], J[Ee], J[ge]);
        Q.push(z), X = X.concat(z);
      }
      for (let P = 0; P < g; P++) {
        const ae = P / g, J = f * Math.cos(ae * Math.PI / 2), re = m * Math.sin(ae * Math.PI / 2) + _;
        for (let te = 0, Ee = F.length; te < Ee; te++) {
          const ge = N(F[te], ee[te], re);
          Ae(ge.x, ge.y, -J);
        }
        for (let te = 0, Ee = U.length; te < Ee; te++) {
          const ge = U[te];
          z = Q[te];
          for (let ye = 0, He = ge.length; ye < He; ye++) {
            const Je = N(ge[ye], z[ye], re);
            Ae(Je.x, Je.y, -J);
          }
        }
      }
      const ue = m + _;
      for (let P = 0; P < K; P++) {
        const ae = d ? N(b[P], X[P], ue) : b[P];
        y ? (T.copy(S.normals[0]).multiplyScalar(ae.x), E.copy(S.binormals[0]).multiplyScalar(ae.y), R.copy(x[0]).add(T).add(E), Ae(R.x, R.y, R.z)) : Ae(ae.x, ae.y, 0);
      }
      for (let P = 1; P <= h; P++)
        for (let ae = 0; ae < K; ae++) {
          const J = d ? N(b[ae], X[ae], ue) : b[ae];
          y ? (T.copy(S.normals[P]).multiplyScalar(J.x), E.copy(S.binormals[P]).multiplyScalar(J.y), R.copy(x[P]).add(T).add(E), Ae(R.x, R.y, R.z)) : Ae(J.x, J.y, u / h * P);
        }
      for (let P = g - 1; P >= 0; P--) {
        const ae = P / g, J = f * Math.cos(ae * Math.PI / 2), re = m * Math.sin(ae * Math.PI / 2) + _;
        for (let te = 0, Ee = F.length; te < Ee; te++) {
          const ge = N(F[te], ee[te], re);
          Ae(ge.x, ge.y, u + J);
        }
        for (let te = 0, Ee = U.length; te < Ee; te++) {
          const ge = U[te];
          z = Q[te];
          for (let ye = 0, He = ge.length; ye < He; ye++) {
            const Je = N(ge[ye], z[ye], re);
            y ? Ae(Je.x, Je.y + x[h - 1].y, x[h - 1].x + J) : Ae(Je.x, Je.y, u + J);
          }
        }
      }
      fe(), me();
      function fe() {
        const P = i.length / 3;
        if (d) {
          let ae = 0, J = K * ae;
          for (let re = 0; re < W; re++) {
            const te = D[re];
            we(te[2] + J, te[1] + J, te[0] + J);
          }
          ae = h + g * 2, J = K * ae;
          for (let re = 0; re < W; re++) {
            const te = D[re];
            we(te[0] + J, te[1] + J, te[2] + J);
          }
        } else {
          for (let ae = 0; ae < W; ae++) {
            const J = D[ae];
            we(J[2], J[1], J[0]);
          }
          for (let ae = 0; ae < W; ae++) {
            const J = D[ae];
            we(J[0] + K * h, J[1] + K * h, J[2] + K * h);
          }
        }
        n.addGroup(P, i.length / 3 - P, 0);
      }
      function me() {
        const P = i.length / 3;
        let ae = 0;
        be(F, ae), ae += F.length;
        for (let J = 0, re = U.length; J < re; J++) {
          const te = U[J];
          be(te, ae), ae += te.length;
        }
        n.addGroup(P, i.length / 3 - P, 1);
      }
      function be(P, ae) {
        let J = P.length;
        for (; --J >= 0; ) {
          const re = J;
          let te = J - 1;
          te < 0 && (te = P.length - 1);
          for (let Ee = 0, ge = h + g * 2; Ee < ge; Ee++) {
            const ye = K * Ee, He = K * (Ee + 1), Je = ae + re + ye, pt = ae + te + ye, L = ae + te + He, A = ae + re + He;
            nt(Je, pt, L, A);
          }
        }
      }
      function Ae(P, ae, J) {
        c.push(P), c.push(ae), c.push(J);
      }
      function we(P, ae, J) {
        ht(P), ht(ae), ht(J);
        const re = i.length / 3, te = v.generateTopUV(n, i, re - 3, re - 2, re - 1);
        Ue(te[0]), Ue(te[1]), Ue(te[2]);
      }
      function nt(P, ae, J, re) {
        ht(P), ht(ae), ht(re), ht(ae), ht(J), ht(re);
        const te = i.length / 3, Ee = v.generateSideWallUV(n, i, te - 6, te - 3, te - 2, te - 1);
        Ue(Ee[0]), Ue(Ee[1]), Ue(Ee[3]), Ue(Ee[1]), Ue(Ee[2]), Ue(Ee[3]);
      }
      function ht(P) {
        i.push(c[P * 3 + 0]), i.push(c[P * 3 + 1]), i.push(c[P * 3 + 2]);
      }
      function Ue(P) {
        s.push(P.x), s.push(P.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return qv(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, o = e.shapes.length; s < o; s++) {
      const a = t[e.shapes[s]];
      n.push(a);
    }
    const i = e.options.extrudePath;
    return i !== void 0 && (e.options.extrudePath = new Rh[i.type]().fromJSON(i)), new uo(n, e.options);
  }
}
const Yv = {
  generateTopUV: function(r, e, t, n, i) {
    const s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], c = e[n * 3 + 1], l = e[i * 3], h = e[i * 3 + 1];
    return [
      new j(s, o),
      new j(a, c),
      new j(l, h)
    ];
  },
  generateSideWallUV: function(r, e, t, n, i, s) {
    const o = e[t * 3], a = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], m = e[i * 3 + 2], _ = e[s * 3], g = e[s * 3 + 1], p = e[s * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - l) ? [
      new j(o, 1 - c),
      new j(l, 1 - u),
      new j(d, 1 - m),
      new j(_, 1 - p)
    ] : [
      new j(a, 1 - c),
      new j(h, 1 - u),
      new j(f, 1 - m),
      new j(g, 1 - p)
    ];
  }
};
function qv(r, e, t) {
  if (t.shapes = [], Array.isArray(r))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(r.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Ka extends Li {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ], s = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(i, s, e, t), this.type = "IcosahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new Ka(e.radius, e.detail);
  }
}
class fo extends Li {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1
    ], i = [
      0,
      2,
      4,
      0,
      4,
      3,
      0,
      3,
      5,
      0,
      5,
      2,
      1,
      2,
      5,
      1,
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      2
    ];
    super(n, i, e, t), this.type = "OctahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new fo(e.radius, e.detail);
  }
}
class Ja extends Ye {
  constructor(e = 0.5, t = 1, n = 32, i = 1, s = 0, o = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: s,
      thetaLength: o
    }, n = Math.max(3, n), i = Math.max(1, i);
    const a = [], c = [], l = [], h = [];
    let u = e;
    const d = (t - e) / i, f = new w(), m = new j();
    for (let _ = 0; _ <= i; _++) {
      for (let g = 0; g <= n; g++) {
        const p = s + g / n * o;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), c.push(f.x, f.y, f.z), l.push(0, 0, 1), m.x = (f.x / t + 1) / 2, m.y = (f.y / t + 1) / 2, h.push(m.x, m.y);
      }
      u += d;
    }
    for (let _ = 0; _ < i; _++) {
      const g = _ * (n + 1);
      for (let p = 0; p < n; p++) {
        const v = p + g, x = v, y = v + n + 1, S = v + n + 2, E = v + 1;
        a.push(x, y, E), a.push(y, S, E);
      }
    }
    this.setIndex(a), this.setAttribute("position", new xe(c, 3)), this.setAttribute("normal", new xe(l, 3)), this.setAttribute("uv", new xe(h, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ja(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class ja extends Ye {
  constructor(e = new ns([new j(0, 0.5), new j(-0.5, -0.5), new j(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: e,
      curveSegments: t
    };
    const n = [], i = [], s = [], o = [];
    let a = 0, c = 0;
    if (Array.isArray(e) === !1)
      l(e);
    else
      for (let h = 0; h < e.length; h++)
        l(e[h]), this.addGroup(a, c, h), a += c, c = 0;
    this.setIndex(n), this.setAttribute("position", new xe(i, 3)), this.setAttribute("normal", new xe(s, 3)), this.setAttribute("uv", new xe(o, 2));
    function l(h) {
      const u = i.length / 3, d = h.extractPoints(t);
      let f = d.shape;
      const m = d.holes;
      Nn.isClockWise(f) === !1 && (f = f.reverse());
      for (let g = 0, p = m.length; g < p; g++) {
        const v = m[g];
        Nn.isClockWise(v) === !0 && (m[g] = v.reverse());
      }
      const _ = Nn.triangulateShape(f, m);
      for (let g = 0, p = m.length; g < p; g++) {
        const v = m[g];
        f = f.concat(v);
      }
      for (let g = 0, p = f.length; g < p; g++) {
        const v = f[g];
        i.push(v.x, v.y, 0), s.push(0, 0, 1), o.push(v.x, v.y);
      }
      for (let g = 0, p = _.length; g < p; g++) {
        const v = _[g], x = v[0] + u, y = v[1] + u, S = v[2] + u;
        n.push(x, y, S), c += 3;
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return $v(t, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let i = 0, s = e.shapes.length; i < s; i++) {
      const o = t[e.shapes[i]];
      n.push(o);
    }
    return new ja(n, e.curveSegments);
  }
}
function $v(r, e) {
  if (e.shapes = [], Array.isArray(r))
    for (let t = 0, n = r.length; t < n; t++) {
      const i = r[t];
      e.shapes.push(i.uuid);
    }
  else
    e.shapes.push(r.uuid);
  return e;
}
class po extends Ye {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: o,
      thetaLength: a
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(o + a, Math.PI);
    let l = 0;
    const h = [], u = new w(), d = new w(), f = [], m = [], _ = [], g = [];
    for (let p = 0; p <= n; p++) {
      const v = [], x = p / n;
      let y = 0;
      p === 0 && o === 0 ? y = 0.5 / t : p === n && c === Math.PI && (y = -0.5 / t);
      for (let S = 0; S <= t; S++) {
        const E = S / t;
        u.x = -e * Math.cos(i + E * s) * Math.sin(o + x * a), u.y = e * Math.cos(o + x * a), u.z = e * Math.sin(i + E * s) * Math.sin(o + x * a), m.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), g.push(E + y, 1 - x), v.push(l++);
      }
      h.push(v);
    }
    for (let p = 0; p < n; p++)
      for (let v = 0; v < t; v++) {
        const x = h[p][v + 1], y = h[p][v], S = h[p + 1][v], E = h[p + 1][v + 1];
        (p !== 0 || o > 0) && f.push(x, y, E), (p !== n - 1 || c < Math.PI) && f.push(y, S, E);
      }
    this.setIndex(f), this.setAttribute("position", new xe(m, 3)), this.setAttribute("normal", new xe(_, 3)), this.setAttribute("uv", new xe(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new po(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Qa extends Li {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      1,
      -1,
      -1
    ], i = [
      2,
      1,
      0,
      0,
      3,
      2,
      1,
      3,
      0,
      2,
      3,
      1
    ];
    super(n, i, e, t), this.type = "TetrahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new Qa(e.radius, e.detail);
  }
}
class ec extends Ye {
  constructor(e = 1, t = 0.4, n = 12, i = 48, s = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: i,
      arc: s
    }, n = Math.floor(n), i = Math.floor(i);
    const o = [], a = [], c = [], l = [], h = new w(), u = new w(), d = new w();
    for (let f = 0; f <= n; f++)
      for (let m = 0; m <= i; m++) {
        const _ = m / i * s, g = f / n * Math.PI * 2;
        u.x = (e + t * Math.cos(g)) * Math.cos(_), u.y = (e + t * Math.cos(g)) * Math.sin(_), u.z = t * Math.sin(g), a.push(u.x, u.y, u.z), h.x = e * Math.cos(_), h.y = e * Math.sin(_), d.subVectors(u, h).normalize(), c.push(d.x, d.y, d.z), l.push(m / i), l.push(f / n);
      }
    for (let f = 1; f <= n; f++)
      for (let m = 1; m <= i; m++) {
        const _ = (i + 1) * f + m - 1, g = (i + 1) * (f - 1) + m - 1, p = (i + 1) * (f - 1) + m, v = (i + 1) * f + m;
        o.push(_, g, v), o.push(g, p, v);
      }
    this.setIndex(o), this.setAttribute("position", new xe(a, 3)), this.setAttribute("normal", new xe(c, 3)), this.setAttribute("uv", new xe(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ec(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class tc extends Ye {
  constructor(e = 1, t = 0.4, n = 64, i = 8, s = 2, o = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = {
      radius: e,
      tube: t,
      tubularSegments: n,
      radialSegments: i,
      p: s,
      q: o
    }, n = Math.floor(n), i = Math.floor(i);
    const a = [], c = [], l = [], h = [], u = new w(), d = new w(), f = new w(), m = new w(), _ = new w(), g = new w(), p = new w();
    for (let x = 0; x <= n; ++x) {
      const y = x / n * s * Math.PI * 2;
      v(y, s, o, e, f), v(y + 0.01, s, o, e, m), g.subVectors(m, f), p.addVectors(m, f), _.crossVectors(g, p), p.crossVectors(_, g), _.normalize(), p.normalize();
      for (let S = 0; S <= i; ++S) {
        const E = S / i * Math.PI * 2, T = -t * Math.cos(E), R = t * Math.sin(E);
        u.x = f.x + (T * p.x + R * _.x), u.y = f.y + (T * p.y + R * _.y), u.z = f.z + (T * p.z + R * _.z), c.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), l.push(d.x, d.y, d.z), h.push(x / n), h.push(S / i);
      }
    }
    for (let x = 1; x <= n; x++)
      for (let y = 1; y <= i; y++) {
        const S = (i + 1) * (x - 1) + (y - 1), E = (i + 1) * x + (y - 1), T = (i + 1) * x + y, R = (i + 1) * (x - 1) + y;
        a.push(S, E, R), a.push(E, T, R);
      }
    this.setIndex(a), this.setAttribute("position", new xe(c, 3)), this.setAttribute("normal", new xe(l, 3)), this.setAttribute("uv", new xe(h, 2));
    function v(x, y, S, E, T) {
      const R = Math.cos(x), M = Math.sin(x), b = S / y * x, U = Math.cos(b);
      T.x = E * (2 + U) * 0.5 * R, T.y = E * (2 + U) * M * 0.5, T.z = E * Math.sin(b) * 0.5;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new tc(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
  }
}
class nc extends Ye {
  constructor(e = new Ah(new w(-1, -1, 0), new w(-1, 1, 0), new w(1, 1, 0)), t = 64, n = 1, i = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: e,
      tubularSegments: t,
      radius: n,
      radialSegments: i,
      closed: s
    };
    const o = e.computeFrenetFrames(t, s);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
    const a = new w(), c = new w(), l = new j();
    let h = new w();
    const u = [], d = [], f = [], m = [];
    _(), this.setIndex(m), this.setAttribute("position", new xe(u, 3)), this.setAttribute("normal", new xe(d, 3)), this.setAttribute("uv", new xe(f, 2));
    function _() {
      for (let x = 0; x < t; x++)
        g(x);
      g(s === !1 ? t : 0), v(), p();
    }
    function g(x) {
      h = e.getPointAt(x / t, h);
      const y = o.normals[x], S = o.binormals[x];
      for (let E = 0; E <= i; E++) {
        const T = E / i * Math.PI * 2, R = Math.sin(T), M = -Math.cos(T);
        c.x = M * y.x + R * S.x, c.y = M * y.y + R * S.y, c.z = M * y.z + R * S.z, c.normalize(), d.push(c.x, c.y, c.z), a.x = h.x + n * c.x, a.y = h.y + n * c.y, a.z = h.z + n * c.z, u.push(a.x, a.y, a.z);
      }
    }
    function p() {
      for (let x = 1; x <= t; x++)
        for (let y = 1; y <= i; y++) {
          const S = (i + 1) * (x - 1) + (y - 1), E = (i + 1) * x + (y - 1), T = (i + 1) * x + y, R = (i + 1) * (x - 1) + y;
          m.push(S, E, R), m.push(E, T, R);
        }
    }
    function v() {
      for (let x = 0; x <= t; x++)
        for (let y = 0; y <= i; y++)
          l.x = x / t, l.y = y / i, f.push(l.x, l.y);
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.path = this.parameters.path.toJSON(), e;
  }
  static fromJSON(e) {
    return new nc(
      new Rh[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
class bp extends Ye {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: e
    }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), i = new w(), s = new w();
      if (e.index !== null) {
        const o = e.attributes.position, a = e.index;
        let c = e.groups;
        c.length === 0 && (c = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let l = 0, h = c.length; l < h; ++l) {
          const u = c[l], d = u.start, f = u.count;
          for (let m = d, _ = d + f; m < _; m += 3)
            for (let g = 0; g < 3; g++) {
              const p = a.getX(m + g), v = a.getX(m + (g + 1) % 3);
              i.fromBufferAttribute(o, p), s.fromBufferAttribute(o, v), rd(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
            }
        }
      } else {
        const o = e.attributes.position;
        for (let a = 0, c = o.count / 3; a < c; a++)
          for (let l = 0; l < 3; l++) {
            const h = 3 * a + l, u = 3 * a + (l + 1) % 3;
            i.fromBufferAttribute(o, h), s.fromBufferAttribute(o, u), rd(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
          }
      }
      this.setAttribute("position", new xe(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function rd(r, e, t) {
  const n = `${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;
  return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n), t.add(i), !0);
}
var od = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BoxGeometry: Ci,
  CapsuleGeometry: Xa,
  CircleGeometry: Ya,
  ConeGeometry: qa,
  CylinderGeometry: pr,
  DodecahedronGeometry: $a,
  EdgesGeometry: Mp,
  ExtrudeGeometry: uo,
  IcosahedronGeometry: Ka,
  LatheGeometry: ho,
  OctahedronGeometry: fo,
  PlaneGeometry: ur,
  PolyhedronGeometry: Li,
  RingGeometry: Ja,
  ShapeGeometry: ja,
  SphereGeometry: po,
  TetrahedronGeometry: Qa,
  TorusGeometry: ec,
  TorusKnotGeometry: tc,
  TubeGeometry: nc,
  WireframeGeometry: bp
});
class Ap extends Rt {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new he(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class wp extends En {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class ds extends Rt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new he(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ri, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Hn extends ds {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new j(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return yt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new he(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new he(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new he(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class Rp extends Rt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new he(16777215), this.specular = new he(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ri, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ro, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Cp extends Rt {
  constructor(e) {
    super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new he(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ri, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
class Lp extends Rt {
  constructor(e) {
    super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ri, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class Pp extends Rt {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new he(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ri, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ro, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Ip extends Rt {
  constructor(e) {
    super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new he(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ri, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Up extends Bt {
  constructor(e) {
    super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
  }
}
function hn(r, e, t) {
  return Ch(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t);
}
function Qi(r, e, t) {
  return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function Ch(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Dp(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function Vl(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, o = 0; o !== n; ++s) {
    const a = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[o++] = r[a + c];
  }
  return i;
}
function Lh(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0)
    return;
  let o = s[n];
  if (o !== void 0)
    if (Array.isArray(o))
      do
        o = s[n], o !== void 0 && (e.push(s.time), t.push.apply(t, o)), s = r[i++];
      while (s !== void 0);
    else if (o.toArray !== void 0)
      do
        o = s[n], o !== void 0 && (e.push(s.time), o.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        o = s[n], o !== void 0 && (e.push(s.time), t.push(o)), s = r[i++];
      while (s !== void 0);
}
function Zv(r, e, t, n, i = 30) {
  const s = r.clone();
  s.name = e;
  const o = [];
  for (let c = 0; c < s.tracks.length; ++c) {
    const l = s.tracks[c], h = l.getValueSize(), u = [], d = [];
    for (let f = 0; f < l.times.length; ++f) {
      const m = l.times[f] * i;
      if (!(m < t || m >= n)) {
        u.push(l.times[f]);
        for (let _ = 0; _ < h; ++_)
          d.push(l.values[f * h + _]);
      }
    }
    u.length !== 0 && (l.times = Qi(u, l.times.constructor), l.values = Qi(d, l.values.constructor), o.push(l));
  }
  s.tracks = o;
  let a = 1 / 0;
  for (let c = 0; c < s.tracks.length; ++c)
    a > s.tracks[c].times[0] && (a = s.tracks[c].times[0]);
  for (let c = 0; c < s.tracks.length; ++c)
    s.tracks[c].shift(-1 * a);
  return s.resetDuration(), s;
}
function Kv(r, e = 0, t = r, n = 30) {
  n <= 0 && (n = 30);
  const i = t.tracks.length, s = e / n;
  for (let o = 0; o < i; ++o) {
    const a = t.tracks[o], c = a.ValueTypeName;
    if (c === "bool" || c === "string")
      continue;
    const l = r.tracks.find(function(p) {
      return p.name === a.name && p.ValueTypeName === c;
    });
    if (l === void 0)
      continue;
    let h = 0;
    const u = a.getValueSize();
    a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3);
    let d = 0;
    const f = l.getValueSize();
    l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
    const m = a.times.length - 1;
    let _;
    if (s <= a.times[0]) {
      const p = h, v = u - h;
      _ = hn(a.values, p, v);
    } else if (s >= a.times[m]) {
      const p = m * u + h, v = p + u - h;
      _ = hn(a.values, p, v);
    } else {
      const p = a.createInterpolant(), v = h, x = u - h;
      p.evaluate(s), _ = hn(p.resultBuffer, v, x);
    }
    c === "quaternion" && new Ft().fromArray(_).normalize().conjugate().toArray(_);
    const g = l.times.length;
    for (let p = 0; p < g; ++p) {
      const v = p * f + d;
      if (c === "quaternion")
        Ft.multiplyQuaternionsFlat(
          l.values,
          v,
          _,
          0,
          l.values,
          v
        );
      else {
        const x = f - d * 2;
        for (let y = 0; y < x; ++y)
          l.values[v + y] -= _[y];
      }
    }
  }
  return r.blendMode = rh, r;
}
const Jv = {
  arraySlice: hn,
  convertArray: Qi,
  isTypedArray: Ch,
  getKeyframeOrder: Dp,
  sortedArray: Vl,
  flattenJSON: Lh,
  subclip: Zv,
  makeClipAdditive: Kv
};
class mr {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    e: {
      t: {
        let o;
        n: {
          i:
            if (!(e < i)) {
              for (let a = n + 2; ; ) {
                if (i === void 0) {
                  if (e < s)
                    break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === a)
                  break;
                if (s = i, i = t[++n], e < i)
                  break t;
              }
              o = t.length;
              break n;
            }
          if (!(e >= s)) {
            const a = t[1];
            e < a && (n = 2, s = a);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c)
                break;
              if (i = s, s = t[--n - 1], e >= s)
                break t;
            }
            o = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          e < t[a] ? o = a : n = a + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let o = 0; o !== i; ++o)
      t[o] = n[s + o];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Op extends mr {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Ki,
      endingEnd: Ki
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, o = e + 1, a = i[s], c = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case Ji:
          s = e, a = 2 * t - n;
          break;
        case Xr:
          s = i.length - 2, a = t + i[s] - i[s + 1];
          break;
        default:
          s = e, a = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Ji:
          o = e, c = 2 * n - t;
          break;
        case Xr:
          o = 1, c = n + i[1] - i[0];
          break;
        default:
          o = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = o * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (n - t) / (i - t), _ = m * m, g = _ * m, p = -d * g + 2 * d * _ - d * m, v = (1 + d) * g + (-1.5 - 2 * d) * _ + (-0.5 + d) * m + 1, x = (-1 - f) * g + (1.5 + f) * _ + 0.5 * m, y = f * g - f * _;
    for (let S = 0; S !== a; ++S)
      s[S] = p * o[h + S] + v * o[l + S] + x * o[c + S] + y * o[u + S];
    return s;
  }
}
class Ph extends mr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== a; ++d)
      s[d] = o[l + d] * u + o[c + d] * h;
    return s;
  }
}
class Np extends mr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Rn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Qi(t, this.TimeBufferType), this.values = Qi(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Qi(e.times, Array),
        values: Qi(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Np(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Ph(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Op(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case js:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case ss:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case pa:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return js;
      case this.InterpolantFactoryMethodLinear:
        return ss;
      case this.InterpolantFactoryMethodSmooth:
        return pa;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, o = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; o !== -1 && n[o] > t; )
      --o;
    if (++o, s !== 0 || o !== i) {
      s >= o && (o = Math.max(o, 1), s = o - 1);
      const a = this.getValueSize();
      this.times = hn(n, s, o), this.values = hn(this.values, s * a, o * a);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let o = null;
    for (let a = 0; a !== s; a++) {
      const c = n[a];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c), e = !1;
        break;
      }
      if (o !== null && o > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, o), e = !1;
        break;
      }
      o = c;
    }
    if (i !== void 0 && Ch(i))
      for (let a = 0, c = i.length; a !== c; ++a) {
        const l = i[a];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = hn(this.times), t = hn(this.values), n = this.getValueSize(), i = this.getInterpolation() === pa, s = e.length - 1;
    let o = 1;
    for (let a = 1; a < s; ++a) {
      let c = !1;
      const l = e[a], h = e[a + 1];
      if (l !== h && (a !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const u = a * n, d = u - n, f = u + n;
          for (let m = 0; m !== n; ++m) {
            const _ = t[u + m];
            if (_ !== t[d + m] || _ !== t[f + m]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (a !== o) {
          e[o] = e[a];
          const u = a * n, d = o * n;
          for (let f = 0; f !== n; ++f)
            t[d + f] = t[u + f];
        }
        ++o;
      }
    }
    if (s > 0) {
      e[o] = e[s];
      for (let a = s * n, c = o * n, l = 0; l !== n; ++l)
        t[c + l] = t[a + l];
      ++o;
    }
    return o !== e.length ? (this.times = hn(e, 0, o), this.values = hn(t, 0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = hn(this.times, 0), t = hn(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Rn.prototype.TimeBufferType = Float32Array;
Rn.prototype.ValueBufferType = Float32Array;
Rn.prototype.DefaultInterpolation = ss;
class fs extends Rn {
}
fs.prototype.ValueTypeName = "bool";
fs.prototype.ValueBufferType = Array;
fs.prototype.DefaultInterpolation = js;
fs.prototype.InterpolantFactoryMethodLinear = void 0;
fs.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ih extends Rn {
}
Ih.prototype.ValueTypeName = "color";
class os extends Rn {
}
os.prototype.ValueTypeName = "number";
class Fp extends mr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = (n - t) / (i - t);
    let l = e * a;
    for (let h = l + a; l !== h; l += 4)
      Ft.slerpFlat(s, 0, o, l - a, o, l, c);
    return s;
  }
}
class wi extends Rn {
  InterpolantFactoryMethodLinear(e) {
    return new Fp(this.times, this.values, this.getValueSize(), e);
  }
}
wi.prototype.ValueTypeName = "quaternion";
wi.prototype.DefaultInterpolation = ss;
wi.prototype.InterpolantFactoryMethodSmooth = void 0;
class ps extends Rn {
}
ps.prototype.ValueTypeName = "string";
ps.prototype.ValueBufferType = Array;
ps.prototype.DefaultInterpolation = js;
ps.prototype.InterpolantFactoryMethodLinear = void 0;
ps.prototype.InterpolantFactoryMethodSmooth = void 0;
class as extends Rn {
}
as.prototype.ValueTypeName = "vector";
class nr {
  constructor(e, t = -1, n, i = Pa) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = tn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(Qv(n[o]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, o = n.length; s !== o; ++s)
      t.push(Rn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, o = [];
    for (let a = 0; a < s; a++) {
      let c = [], l = [];
      c.push(
        (a + s - 1) % s,
        a,
        (a + 1) % s
      ), l.push(0, 1, 0);
      const h = Dp(c);
      c = Vl(c, 1, h), l = Vl(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), o.push(
        new os(
          ".morphTargetInfluences[" + t[a].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = l.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(l);
      }
    }
    const o = [];
    for (const a in i)
      o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return o;
  }
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, f, m, _) {
      if (f.length !== 0) {
        const g = [], p = [];
        Lh(f, g, p, m), g.length !== 0 && _.push(new u(d, g, p));
      }
    }, i = [], s = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const f = {};
          let m;
          for (m = 0; m < d.length; m++)
            if (d[m].morphTargets)
              for (let _ = 0; _ < d[m].morphTargets.length; _++)
                f[d[m].morphTargets[_]] = -1;
          for (const _ in f) {
            const g = [], p = [];
            for (let v = 0; v !== d[m].morphTargets.length; ++v) {
              const x = d[m];
              g.push(x.time), p.push(x.morphTarget === _ ? 1 : 0);
            }
            i.push(new os(".morphTargetInfluence[" + _ + "]", g, p));
          }
          c = f.length * o;
        } else {
          const f = ".bones[" + t[u].name + "]";
          n(
            as,
            f + ".position",
            d,
            "pos",
            i
          ), n(
            wi,
            f + ".quaternion",
            d,
            "rot",
            i
          ), n(
            as,
            f + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function jv(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return os;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return as;
    case "color":
      return Ih;
    case "quaternion":
      return wi;
    case "bool":
    case "boolean":
      return fs;
    case "string":
      return ps;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Qv(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = jv(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    Lh(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const cs = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Uh {
  constructor(e, t, n) {
    const i = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && i.onStart !== void 0 && i.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const f = l[u], m = l[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return m;
      }
      return null;
    };
  }
}
const Bp = /* @__PURE__ */ new Uh();
class zt {
  constructor(e) {
    this.manager = e !== void 0 ? e : Bp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
zt.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Zn = {};
class eM extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class mn extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = cs.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Zn[e] !== void 0) {
      Zn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Zn[e] = [], Zn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), a = this.mimeType, c = this.responseType;
    fetch(o).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = Zn[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), f = d ? parseInt(d) : 0, m = f !== 0;
        let _ = 0;
        const g = new ReadableStream({
          start(p) {
            v();
            function v() {
              u.read().then(({ done: x, value: y }) => {
                if (x)
                  p.close();
                else {
                  _ += y.byteLength;
                  const S = new ProgressEvent("progress", { lengthComputable: m, loaded: _, total: f });
                  for (let E = 0, T = h.length; E < T; E++) {
                    const R = h[E];
                    R.onProgress && R.onProgress(S);
                  }
                  p.enqueue(y), v();
                }
              });
            }
          }
        });
        return new Response(g);
      } else
        throw new eM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return l.json();
        default:
          if (a === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return l.arrayBuffer().then((m) => f.decode(m));
          }
      }
    }).then((l) => {
      cs.add(e, l);
      const h = Zn[e];
      delete Zn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(l);
      }
    }).catch((l) => {
      const h = Zn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Zn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class tM extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new mn(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const i = nr.parse(e[n]);
      t.push(i);
    }
    return t;
  }
}
class nM extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = [], a = new Va(), c = new mn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(s.withCredentials);
    let l = 0;
    function h(u) {
      c.load(e[u], function(d) {
        const f = s.parse(d, !0);
        o[u] = {
          width: f.width,
          height: f.height,
          format: f.format,
          mipmaps: f.mipmaps
        }, l += 1, l === 6 && (f.mipmapCount === 1 && (a.minFilter = lt), a.image = o, a.format = f.format, a.needsUpdate = !0, t && t(a));
      }, n, i);
    }
    if (Array.isArray(e))
      for (let u = 0, d = e.length; u < d; ++u)
        h(u);
    else
      c.load(e, function(u) {
        const d = s.parse(u, !0);
        if (d.isCubemap) {
          const f = d.mipmaps.length / d.mipmapCount;
          for (let m = 0; m < f; m++) {
            o[m] = { mipmaps: [] };
            for (let _ = 0; _ < d.mipmapCount; _++)
              o[m].mipmaps.push(d.mipmaps[m * d.mipmapCount + _]), o[m].format = d.format, o[m].width = d.width, o[m].height = d.height;
          }
          a.image = o;
        } else
          a.image.width = d.width, a.image.height = d.height, a.mipmaps = d.mipmaps;
        d.mipmapCount === 1 && (a.minFilter = lt), a.format = d.format, a.needsUpdate = !0, t && t(a);
      }, n, i);
    return a;
  }
}
class Qr extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = cs.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = $r("img");
    function c() {
      h(), cs.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class iM extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ao();
    s.colorSpace = De;
    const o = new Qr(this.manager);
    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
    let a = 0;
    function c(l) {
      o.load(e[l], function(h) {
        s.images[l] = h, a++, a === 6 && (s.needsUpdate = !0, t && t(s));
      }, void 0, i);
    }
    for (let l = 0; l < e.length; ++l)
      c(l);
    return s;
  }
}
class zp extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new $s(), a = new mn(this.manager);
    return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(s.withCredentials), a.load(e, function(c) {
      let l;
      try {
        l = s.parse(c);
      } catch (h) {
        if (i !== void 0)
          i(h);
        else {
          console.error(h);
          return;
        }
      }
      if (!l)
        return i();
      l.image !== void 0 ? o.image = l.image : l.data !== void 0 && (o.image.width = l.width, o.image.height = l.height, o.image.data = l.data), o.wrapS = l.wrapS !== void 0 ? l.wrapS : Dt, o.wrapT = l.wrapT !== void 0 ? l.wrapT : Dt, o.magFilter = l.magFilter !== void 0 ? l.magFilter : lt, o.minFilter = l.minFilter !== void 0 ? l.minFilter : lt, o.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 ? o.colorSpace = l.colorSpace : l.encoding !== void 0 && (o.encoding = l.encoding), l.flipY !== void 0 && (o.flipY = l.flipY), l.format !== void 0 && (o.format = l.format), l.type !== void 0 && (o.type = l.type), l.mipmaps !== void 0 && (o.mipmaps = l.mipmaps, o.minFilter = Bn), l.mipmapCount === 1 && (o.minFilter = lt), l.generateMipmaps !== void 0 && (o.generateMipmaps = l.generateMipmaps), o.needsUpdate = !0, t && t(o, l);
    }, n, i), o;
  }
}
class Dh extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ft(), o = new Qr(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class Pi extends ze {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new he(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class Hp extends Pi {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(ze.DEFAULT_UP), this.updateMatrix(), this.groundColor = new he(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const kc = /* @__PURE__ */ new Ie(), ad = /* @__PURE__ */ new w(), cd = /* @__PURE__ */ new w();
class Oh {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new j(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ie(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Oa(), this._frameExtents = new j(1, 1), this._viewportCount = 1, this._viewports = [
      new it(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    ad.setFromMatrixPosition(e.matrixWorld), t.position.copy(ad), cd.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(cd), t.updateMatrixWorld(), kc.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(kc), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(kc);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class sM extends Oh {
  constructor() {
    super(new wt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Qs * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Nh extends Pi {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ze.DEFAULT_UP), this.updateMatrix(), this.target = new ze(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new sM();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const ld = /* @__PURE__ */ new Ie(), wr = /* @__PURE__ */ new w(), Vc = /* @__PURE__ */ new w();
class rM extends Oh {
  constructor() {
    super(new wt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new j(4, 2), this._viewportCount = 6, this._viewports = [
      new it(2, 1, 1, 1),
      new it(0, 1, 1, 1),
      new it(3, 1, 1, 1),
      new it(1, 1, 1, 1),
      new it(3, 0, 1, 1),
      new it(1, 0, 1, 1)
    ], this._cubeDirections = [
      new w(1, 0, 0),
      new w(-1, 0, 0),
      new w(0, 0, 1),
      new w(0, 0, -1),
      new w(0, 1, 0),
      new w(0, -1, 0)
    ], this._cubeUps = [
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 0, 1),
      new w(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), wr.setFromMatrixPosition(e.matrixWorld), n.position.copy(wr), Vc.copy(n.position), Vc.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Vc), n.updateMatrixWorld(), i.makeTranslation(-wr.x, -wr.y, -wr.z), ld.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ld);
  }
}
class Fh extends Pi {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new rM();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class oM extends Oh {
  constructor() {
    super(new dr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Bh extends Pi {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ze.DEFAULT_UP), this.updateMatrix(), this.target = new ze(), this.shadow = new oM();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class zh extends Pi {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class kp extends Pi {
  constructor(e, t, n = 10, i = 10) {
    super(e, t), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return super.copy(e), this.width = e.width, this.height = e.height, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
}
class Vp {
  constructor() {
    this.isSphericalHarmonics3 = !0, this.coefficients = [];
    for (let e = 0; e < 9; e++)
      this.coefficients.push(new w());
  }
  set(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    const n = e.x, i = e.y, s = e.z, o = this.coefficients;
    return t.copy(o[0]).multiplyScalar(0.282095), t.addScaledVector(o[1], 0.488603 * i), t.addScaledVector(o[2], 0.488603 * s), t.addScaledVector(o[3], 0.488603 * n), t.addScaledVector(o[4], 1.092548 * (n * i)), t.addScaledVector(o[5], 1.092548 * (i * s)), t.addScaledVector(o[6], 0.315392 * (3 * s * s - 1)), t.addScaledVector(o[7], 1.092548 * (n * s)), t.addScaledVector(o[8], 0.546274 * (n * n - i * i)), t;
  }
  getIrradianceAt(e, t) {
    const n = e.x, i = e.y, s = e.z, o = this.coefficients;
    return t.copy(o[0]).multiplyScalar(0.886227), t.addScaledVector(o[1], 2 * 0.511664 * i), t.addScaledVector(o[2], 2 * 0.511664 * s), t.addScaledVector(o[3], 2 * 0.511664 * n), t.addScaledVector(o[4], 2 * 0.429043 * n * i), t.addScaledVector(o[5], 2 * 0.429043 * i * s), t.addScaledVector(o[6], 0.743125 * s * s - 0.247708), t.addScaledVector(o[7], 2 * 0.429043 * n * s), t.addScaledVector(o[8], 0.429043 * (n * n - i * i)), t;
  }
  add(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t]))
        return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(e, t + i * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(e, t + i * 3);
    return e;
  }
  static getBasisAt(e, t) {
    const n = e.x, i = e.y, s = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * i, t[2] = 0.488603 * s, t[3] = 0.488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = 0.315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = 0.546274 * (n * n - i * i);
  }
}
class ic extends Pi {
  constructor(e = new Vp(), t = 1) {
    super(void 0, t), this.isLightProbe = !0, this.sh = e;
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.sh = this.sh.toArray(), t;
  }
}
class sc extends zt {
  constructor(e) {
    super(e), this.textures = {};
  }
  load(e, t, n, i) {
    const s = this, o = new mn(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = this.textures;
    function n(s) {
      return t[s] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", s), t[s];
    }
    const i = sc.createMaterialFromType(e.type);
    if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = e.sheen), e.sheenColor !== void 0 && (i.sheenColor = new he().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (i.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(e.specular), e.specularIntensity !== void 0 && (i.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.iridescence !== void 0 && (i.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (i.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (i.transmission = e.transmission), e.thickness !== void 0 && (i.thickness = e.thickness), e.attenuationDistance !== void 0 && (i.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (i.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (i.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.shadowSide !== void 0 && (i.shadowSide = e.shadowSide), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (i.alphaHash = e.alphaHash), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== 1 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (i.dithering = e.dithering), e.alphaToCoverage !== void 0 && (i.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (i.forceSinglePass = e.forceSinglePass), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0)
      for (const s in e.uniforms) {
        const o = e.uniforms[s];
        switch (i.uniforms[s] = {}, o.type) {
          case "t":
            i.uniforms[s].value = n(o.value);
            break;
          case "c":
            i.uniforms[s].value = new he().setHex(o.value);
            break;
          case "v2":
            i.uniforms[s].value = new j().fromArray(o.value);
            break;
          case "v3":
            i.uniforms[s].value = new w().fromArray(o.value);
            break;
          case "v4":
            i.uniforms[s].value = new it().fromArray(o.value);
            break;
          case "m3":
            i.uniforms[s].value = new Xe().fromArray(o.value);
            break;
          case "m4":
            i.uniforms[s].value = new Ie().fromArray(o.value);
            break;
          default:
            i.uniforms[s].value = o.value;
        }
      }
    if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (i.glslVersion = e.glslVersion), e.extensions !== void 0)
      for (const s in e.extensions)
        i.extensions[s] = e.extensions[s];
    if (e.lights !== void 0 && (i.lights = e.lights), e.clipping !== void 0 && (i.clipping = e.clipping), e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let s = e.normalScale;
      Array.isArray(s) === !1 && (s = [s, s]), i.normalScale = new j().fromArray(s);
    }
    return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new j().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (i.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.anisotropyMap !== void 0 && (i.anisotropyMap = n(e.anisotropyMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i;
  }
  setTextures(e) {
    return this.textures = e, this;
  }
  static createMaterialFromType(e) {
    const t = {
      ShadowMaterial: Ap,
      SpriteMaterial: yh,
      RawShaderMaterial: wp,
      ShaderMaterial: En,
      PointsMaterial: ka,
      MeshPhysicalMaterial: Hn,
      MeshStandardMaterial: ds,
      MeshPhongMaterial: Rp,
      MeshToonMaterial: Cp,
      MeshNormalMaterial: Lp,
      MeshLambertMaterial: Pp,
      MeshDepthMaterial: mh,
      MeshDistanceMaterial: gh,
      MeshBasicMaterial: en,
      MeshMatcapMaterial: Ip,
      LineDashedMaterial: Up,
      LineBasicMaterial: Bt,
      Material: Rt
    };
    return new t[e]();
  }
}
class ir {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Gp extends Ye {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
class Wp extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new mn(s.manager);
    o.setPath(s.path), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(a) {
      try {
        t(s.parse(JSON.parse(a)));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = {}, n = {};
    function i(f, m) {
      if (t[m] !== void 0)
        return t[m];
      const g = f.interleavedBuffers[m], p = s(f, g.buffer), v = Gs(g.type, p), x = new co(v, g.stride);
      return x.uuid = g.uuid, t[m] = x, x;
    }
    function s(f, m) {
      if (n[m] !== void 0)
        return n[m];
      const g = f.arrayBuffers[m], p = new Uint32Array(g).buffer;
      return n[m] = p, p;
    }
    const o = e.isInstancedBufferGeometry ? new Gp() : new Ye(), a = e.data.index;
    if (a !== void 0) {
      const f = Gs(a.type, a.array);
      o.setIndex(new rt(f, 1));
    }
    const c = e.data.attributes;
    for (const f in c) {
      const m = c[f];
      let _;
      if (m.isInterleavedBufferAttribute) {
        const g = i(e.data, m.data);
        _ = new Ai(g, m.itemSize, m.offset, m.normalized);
      } else {
        const g = Gs(m.type, m.array), p = m.isInstancedBufferAttribute ? tr : rt;
        _ = new p(g, m.itemSize, m.normalized);
      }
      m.name !== void 0 && (_.name = m.name), m.usage !== void 0 && _.setUsage(m.usage), m.updateRange !== void 0 && (_.updateRange.offset = m.updateRange.offset, _.updateRange.count = m.updateRange.count), o.setAttribute(f, _);
    }
    const l = e.data.morphAttributes;
    if (l)
      for (const f in l) {
        const m = l[f], _ = [];
        for (let g = 0, p = m.length; g < p; g++) {
          const v = m[g];
          let x;
          if (v.isInterleavedBufferAttribute) {
            const y = i(e.data, v.data);
            x = new Ai(y, v.itemSize, v.offset, v.normalized);
          } else {
            const y = Gs(v.type, v.array);
            x = new rt(y, v.itemSize, v.normalized);
          }
          v.name !== void 0 && (x.name = v.name), _.push(x);
        }
        o.morphAttributes[f] = _;
      }
    e.data.morphTargetsRelative && (o.morphTargetsRelative = !0);
    const u = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (u !== void 0)
      for (let f = 0, m = u.length; f !== m; ++f) {
        const _ = u[f];
        o.addGroup(_.start, _.count, _.materialIndex);
      }
    const d = e.data.boundingSphere;
    if (d !== void 0) {
      const f = new w();
      d.center !== void 0 && f.fromArray(d.center), o.boundingSphere = new gn(f, d.radius);
    }
    return e.name && (o.name = e.name), e.userData && (o.userData = e.userData), o;
  }
}
class aM extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = this.path === "" ? ir.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || o;
    const a = new mn(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(c) {
      let l = null;
      try {
        l = JSON.parse(c);
      } catch (u) {
        i !== void 0 && i(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message);
        return;
      }
      const h = l.metadata;
      if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") {
        i !== void 0 && i(new Error("THREE.ObjectLoader: Can't load " + e)), console.error("THREE.ObjectLoader: Can't load " + e);
        return;
      }
      s.parse(l, t);
    }, n, i);
  }
  async loadAsync(e, t) {
    const n = this, i = this.path === "" ? ir.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || i;
    const s = new mn(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials);
    const o = await s.loadAsync(e, t), a = JSON.parse(o), c = a.metadata;
    if (c === void 0 || c.type === void 0 || c.type.toLowerCase() === "geometry")
      throw new Error("THREE.ObjectLoader: Can't load " + e);
    return await n.parseAsync(a);
  }
  parse(e, t) {
    const n = this.parseAnimations(e.animations), i = this.parseShapes(e.shapes), s = this.parseGeometries(e.geometries, i), o = this.parseImages(e.images, function() {
      t !== void 0 && t(l);
    }), a = this.parseTextures(e.textures, o), c = this.parseMaterials(e.materials, a), l = this.parseObject(e.object, s, c, a, n), h = this.parseSkeletons(e.skeletons, l);
    if (this.bindSkeletons(l, h), t !== void 0) {
      let u = !1;
      for (const d in o)
        if (o[d].data instanceof HTMLImageElement) {
          u = !0;
          break;
        }
      u === !1 && t(l);
    }
    return l;
  }
  async parseAsync(e) {
    const t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, n), s = await this.parseImagesAsync(e.images), o = this.parseTextures(e.textures, s), a = this.parseMaterials(e.materials, o), c = this.parseObject(e.object, i, a, o, t), l = this.parseSkeletons(e.skeletons, c);
    return this.bindSkeletons(c, l), c;
  }
  parseShapes(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0, i = e.length; n < i; n++) {
        const s = new ns().fromJSON(e[n]);
        t[s.uuid] = s;
      }
    return t;
  }
  parseSkeletons(e, t) {
    const n = {}, i = {};
    if (t.traverse(function(s) {
      s.isBone && (i[s.uuid] = s);
    }), e !== void 0)
      for (let s = 0, o = e.length; s < o; s++) {
        const a = new lo().fromJSON(e[s], i);
        n[a.uuid] = a;
      }
    return n;
  }
  parseGeometries(e, t) {
    const n = {};
    if (e !== void 0) {
      const i = new Wp();
      for (let s = 0, o = e.length; s < o; s++) {
        let a;
        const c = e[s];
        switch (c.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            a = i.parse(c);
            break;
          default:
            c.type in od ? a = od[c.type].fromJSON(c, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`);
        }
        a.uuid = c.uuid, c.name !== void 0 && (a.name = c.name), c.userData !== void 0 && (a.userData = c.userData), n[c.uuid] = a;
      }
    }
    return n;
  }
  parseMaterials(e, t) {
    const n = {}, i = {};
    if (e !== void 0) {
      const s = new sc();
      s.setTextures(t);
      for (let o = 0, a = e.length; o < a; o++) {
        const c = e[o];
        n[c.uuid] === void 0 && (n[c.uuid] = s.parse(c)), i[c.uuid] = n[c.uuid];
      }
    }
    return i;
  }
  parseAnimations(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0; n < e.length; n++) {
        const i = e[n], s = nr.parse(i);
        t[s.uuid] = s;
      }
    return t;
  }
  parseImages(e, t) {
    const n = this, i = {};
    let s;
    function o(c) {
      return n.manager.itemStart(c), s.load(c, function() {
        n.manager.itemEnd(c);
      }, void 0, function() {
        n.manager.itemError(c), n.manager.itemEnd(c);
      });
    }
    function a(c) {
      if (typeof c == "string") {
        const l = c, h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l) ? l : n.resourcePath + l;
        return o(h);
      } else
        return c.data ? {
          data: Gs(c.type, c.data),
          width: c.width,
          height: c.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      const c = new Uh(t);
      s = new Qr(c), s.setCrossOrigin(this.crossOrigin);
      for (let l = 0, h = e.length; l < h; l++) {
        const u = e[l], d = u.url;
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m], p = a(g);
            p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new $s(p.data, p.width, p.height)));
          }
          i[u.uuid] = new ji(f);
        } else {
          const f = a(u.url);
          i[u.uuid] = new ji(f);
        }
      }
    }
    return i;
  }
  async parseImagesAsync(e) {
    const t = this, n = {};
    let i;
    async function s(o) {
      if (typeof o == "string") {
        const a = o, c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(a) ? a : t.resourcePath + a;
        return await i.loadAsync(c);
      } else
        return o.data ? {
          data: Gs(o.type, o.data),
          width: o.width,
          height: o.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      i = new Qr(this.manager), i.setCrossOrigin(this.crossOrigin);
      for (let o = 0, a = e.length; o < a; o++) {
        const c = e[o], l = c.url;
        if (Array.isArray(l)) {
          const h = [];
          for (let u = 0, d = l.length; u < d; u++) {
            const f = l[u], m = await s(f);
            m !== null && (m instanceof HTMLImageElement ? h.push(m) : h.push(new $s(m.data, m.width, m.height)));
          }
          n[c.uuid] = new ji(h);
        } else {
          const h = await s(c.url);
          n[c.uuid] = new ji(h);
        }
      }
    }
    return n;
  }
  parseTextures(e, t) {
    function n(s, o) {
      return typeof s == "number" ? s : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", s), o[s]);
    }
    const i = {};
    if (e !== void 0)
      for (let s = 0, o = e.length; s < o; s++) {
        const a = e[s];
        a.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), t[a.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", a.image);
        const c = t[a.image], l = c.data;
        let h;
        Array.isArray(l) ? (h = new ao(), l.length === 6 && (h.needsUpdate = !0)) : (l && l.data ? h = new $s() : h = new ft(), l && (h.needsUpdate = !0)), h.source = c, h.uuid = a.uuid, a.name !== void 0 && (h.name = a.name), a.mapping !== void 0 && (h.mapping = n(a.mapping, cM)), a.channel !== void 0 && (h.channel = a.channel), a.offset !== void 0 && h.offset.fromArray(a.offset), a.repeat !== void 0 && h.repeat.fromArray(a.repeat), a.center !== void 0 && h.center.fromArray(a.center), a.rotation !== void 0 && (h.rotation = a.rotation), a.wrap !== void 0 && (h.wrapS = n(a.wrap[0], hd), h.wrapT = n(a.wrap[1], hd)), a.format !== void 0 && (h.format = a.format), a.internalFormat !== void 0 && (h.internalFormat = a.internalFormat), a.type !== void 0 && (h.type = a.type), a.colorSpace !== void 0 && (h.colorSpace = a.colorSpace), a.encoding !== void 0 && (h.encoding = a.encoding), a.minFilter !== void 0 && (h.minFilter = n(a.minFilter, ud)), a.magFilter !== void 0 && (h.magFilter = n(a.magFilter, ud)), a.anisotropy !== void 0 && (h.anisotropy = a.anisotropy), a.flipY !== void 0 && (h.flipY = a.flipY), a.generateMipmaps !== void 0 && (h.generateMipmaps = a.generateMipmaps), a.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (h.unpackAlignment = a.unpackAlignment), a.compareFunction !== void 0 && (h.compareFunction = a.compareFunction), a.userData !== void 0 && (h.userData = a.userData), i[a.uuid] = h;
      }
    return i;
  }
  parseObject(e, t, n, i, s) {
    let o;
    function a(d) {
      return t[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), t[d];
    }
    function c(d) {
      if (d !== void 0) {
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m];
            n[g] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", g), f.push(n[g]);
          }
          return f;
        }
        return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d];
      }
    }
    function l(d) {
      return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d];
    }
    let h, u;
    switch (e.type) {
      case "Scene":
        o = new za(), e.background !== void 0 && (Number.isInteger(e.background) ? o.background = new he(e.background) : o.background = l(e.background)), e.environment !== void 0 && (o.environment = l(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? o.fog = new Ba(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (o.fog = new Fa(e.fog.color, e.fog.density))), e.backgroundBlurriness !== void 0 && (o.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (o.backgroundIntensity = e.backgroundIntensity);
        break;
      case "PerspectiveCamera":
        o = new wt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (o.focus = e.focus), e.zoom !== void 0 && (o.zoom = e.zoom), e.filmGauge !== void 0 && (o.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (o.filmOffset = e.filmOffset), e.view !== void 0 && (o.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        o = new dr(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (o.zoom = e.zoom), e.view !== void 0 && (o.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        o = new zh(e.color, e.intensity);
        break;
      case "DirectionalLight":
        o = new Bh(e.color, e.intensity);
        break;
      case "PointLight":
        o = new Fh(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        o = new kp(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        o = new Nh(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        o = new Hp(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        o = new ic().fromJSON(e);
        break;
      case "SkinnedMesh":
        h = a(e.geometry), u = c(e.material), o = new xh(h, u), e.bindMode !== void 0 && (o.bindMode = e.bindMode), e.bindMatrix !== void 0 && o.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (o.skeleton = e.skeleton);
        break;
      case "Mesh":
        h = a(e.geometry), u = c(e.material), o = new St(h, u);
        break;
      case "InstancedMesh":
        h = a(e.geometry), u = c(e.material);
        const d = e.count, f = e.instanceMatrix, m = e.instanceColor;
        o = new vh(h, u, d), o.instanceMatrix = new tr(new Float32Array(f.array), 16), m !== void 0 && (o.instanceColor = new tr(new Float32Array(m.array), m.itemSize));
        break;
      case "LOD":
        o = new mp();
        break;
      case "Line":
        o = new ri(a(e.geometry), c(e.material));
        break;
      case "LineLoop":
        o = new Mh(a(e.geometry), c(e.material));
        break;
      case "LineSegments":
        o = new An(a(e.geometry), c(e.material));
        break;
      case "PointCloud":
      case "Points":
        o = new Sh(a(e.geometry), c(e.material));
        break;
      case "Sprite":
        o = new pp(c(e.material));
        break;
      case "Group":
        o = new Qn();
        break;
      case "Bone":
        o = new Ha();
        break;
      default:
        o = new ze();
    }
    if (o.uuid = e.uuid, e.name !== void 0 && (o.name = e.name), e.matrix !== void 0 ? (o.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (o.matrixAutoUpdate = e.matrixAutoUpdate), o.matrixAutoUpdate && o.matrix.decompose(o.position, o.quaternion, o.scale)) : (e.position !== void 0 && o.position.fromArray(e.position), e.rotation !== void 0 && o.rotation.fromArray(e.rotation), e.quaternion !== void 0 && o.quaternion.fromArray(e.quaternion), e.scale !== void 0 && o.scale.fromArray(e.scale)), e.up !== void 0 && o.up.fromArray(e.up), e.castShadow !== void 0 && (o.castShadow = e.castShadow), e.receiveShadow !== void 0 && (o.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (o.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (o.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (o.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && o.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (o.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (o.visible = e.visible), e.frustumCulled !== void 0 && (o.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (o.renderOrder = e.renderOrder), e.userData !== void 0 && (o.userData = e.userData), e.layers !== void 0 && (o.layers.mask = e.layers), e.children !== void 0) {
      const d = e.children;
      for (let f = 0; f < d.length; f++)
        o.add(this.parseObject(d[f], t, n, i, s));
    }
    if (e.animations !== void 0) {
      const d = e.animations;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        o.animations.push(s[m]);
      }
    }
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (o.autoUpdate = e.autoUpdate);
      const d = e.levels;
      for (let f = 0; f < d.length; f++) {
        const m = d[f], _ = o.getObjectByProperty("uuid", m.object);
        _ !== void 0 && o.addLevel(_, m.distance, m.hysteresis);
      }
    }
    return o;
  }
  bindSkeletons(e, t) {
    Object.keys(t).length !== 0 && e.traverse(function(n) {
      if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) {
        const i = t[n.skeleton];
        i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix);
      }
    });
  }
}
const cM = {
  UVMapping: Ra,
  CubeReflectionMapping: ii,
  CubeRefractionMapping: bi,
  EquirectangularReflectionMapping: Vr,
  EquirectangularRefractionMapping: Gr,
  CubeUVReflectionMapping: lr
}, hd = {
  RepeatWrapping: si,
  ClampToEdgeWrapping: Dt,
  MirroredRepeatWrapping: Js
}, ud = {
  NearestFilter: _t,
  NearestMipmapNearestFilter: Wr,
  NearestMipmapLinearFilter: Ys,
  LinearFilter: lt,
  LinearMipmapNearestFilter: Ca,
  LinearMipmapLinearFilter: Bn
};
class Xp extends zt {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = cs.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      cs.add(e, c), t && t(c), s.manager.itemEnd(e);
    }).catch(function(c) {
      i && i(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
let jo;
class Hh {
  static getContext() {
    return jo === void 0 && (jo = new (window.AudioContext || window.webkitAudioContext)()), jo;
  }
  static setContext(e) {
    jo = e;
  }
}
class lM extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new mn(this.manager);
    o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(c) {
      try {
        const l = c.slice(0);
        Hh.getContext().decodeAudioData(l, function(u) {
          t(u);
        }, a);
      } catch (l) {
        a(l);
      }
    }, n, i);
    function a(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e);
    }
  }
}
class hM extends ic {
  constructor(e, t, n = 1) {
    super(void 0, n), this.isHemisphereLightProbe = !0;
    const i = new he().set(e), s = new he().set(t), o = new w(i.r, i.g, i.b), a = new w(s.r, s.g, s.b), c = Math.sqrt(Math.PI), l = c * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c), this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l);
  }
}
class uM extends ic {
  constructor(e, t = 1) {
    super(void 0, t), this.isAmbientLightProbe = !0;
    const n = new he().set(e);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
const dd = /* @__PURE__ */ new Ie(), fd = /* @__PURE__ */ new Ie(), Bi = /* @__PURE__ */ new Ie();
class dM {
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new wt(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new wt(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }
  update(e) {
    const t = this._cache;
    if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, Bi.copy(e.projectionMatrix);
      const i = t.eyeSep / 2, s = i * t.near / t.focus, o = t.near * Math.tan(ts * t.fov * 0.5) / t.zoom;
      let a, c;
      fd.elements[12] = -i, dd.elements[12] = i, a = -o * t.aspect + s, c = o * t.aspect + s, Bi.elements[0] = 2 * t.near / (c - a), Bi.elements[8] = (c + a) / (c - a), this.cameraL.projectionMatrix.copy(Bi), a = -o * t.aspect - s, c = o * t.aspect - s, Bi.elements[0] = 2 * t.near / (c - a), Bi.elements[8] = (c + a) / (c - a), this.cameraR.projectionMatrix.copy(Bi);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(fd), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(dd);
  }
}
class kh {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = pd(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = pd();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function pd() {
  return (typeof performance > "u" ? Date : performance).now();
}
const zi = /* @__PURE__ */ new w(), md = /* @__PURE__ */ new Ft(), fM = /* @__PURE__ */ new w(), Hi = /* @__PURE__ */ new w();
class pM extends ze {
  constructor() {
    super(), this.type = "AudioListener", this.context = Hh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new kh();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(zi, md, fM), Hi.set(0, 0, -1).applyQuaternion(md), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(zi.x, i), t.positionY.linearRampToValueAtTime(zi.y, i), t.positionZ.linearRampToValueAtTime(zi.z, i), t.forwardX.linearRampToValueAtTime(Hi.x, i), t.forwardY.linearRampToValueAtTime(Hi.y, i), t.forwardZ.linearRampToValueAtTime(Hi.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else
      t.setPosition(zi.x, zi.y, zi.z), t.setOrientation(Hi.x, Hi.y, Hi.z, n.x, n.y, n.z);
  }
}
class Yp extends ze {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(), this.source.onended = null), this.isPlaying = !1, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this._connected = !0, this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else
      this.source.disconnect(this.getOutput());
    return this._connected = !1, this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    if (this.detune = e, this.source.detune !== void 0)
      return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
}
const ki = /* @__PURE__ */ new w(), gd = /* @__PURE__ */ new Ft(), mM = /* @__PURE__ */ new w(), Vi = /* @__PURE__ */ new w();
class gM extends Yp {
  constructor(e) {
    super(e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return this.panner.refDistance = e, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return this.panner.rolloffFactor = e, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return this.panner.distanceModel = e, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return this.panner.maxDistance = e, this;
  }
  setDirectionalCone(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.hasPlaybackControl === !0 && this.isPlaying === !1)
      return;
    this.matrixWorld.decompose(ki, gd, mM), Vi.set(0, 0, 1).applyQuaternion(gd);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(ki.x, n), t.positionY.linearRampToValueAtTime(ki.y, n), t.positionZ.linearRampToValueAtTime(ki.z, n), t.orientationX.linearRampToValueAtTime(Vi.x, n), t.orientationY.linearRampToValueAtTime(Vi.y, n), t.orientationZ.linearRampToValueAtTime(Vi.z, n);
    } else
      t.setPosition(ki.x, ki.y, ki.z), t.setOrientation(Vi.x, Vi.y, Vi.z);
  }
}
class _M {
  constructor(e, t = 2048) {
    this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let e = 0;
    const t = this.getFrequencyData();
    for (let n = 0; n < t.length; n++)
      e += t[n];
    return e / t.length;
  }
}
class qp {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, s, o;
    switch (t) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, s = e * i + i;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== i; ++a)
        n[s + a] = n[a];
      o = t;
    } else {
      o += t;
      const a = t / o;
      this._mixBufferRegion(n, s, 0, a, i);
    }
    this.cumulativeWeight = o;
  }
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const c = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        c,
        1 - s,
        t
      );
    }
    o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let c = t, l = t + t; c !== l; ++c)
      if (n[c] !== n[c + t]) {
        a.setValue(n, i);
        break;
      }
  }
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, o = i; s !== o; ++s)
      t[s] = t[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  _select(e, t, n, i, s) {
    if (i >= 0.5)
      for (let o = 0; o !== s; ++o)
        e[t + o] = e[n + o];
  }
  _slerp(e, t, n, i) {
    Ft.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const o = this._workIndex * s;
    Ft.multiplyQuaternionsFlat(e, o, e, t, e, n), Ft.slerpFlat(e, t, e, t, e, o, i);
  }
  _lerp(e, t, n, i, s) {
    const o = 1 - i;
    for (let a = 0; a !== s; ++a) {
      const c = t + a;
      e[c] = e[c] * o + e[n + a] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let o = 0; o !== s; ++o) {
      const a = t + o;
      e[a] = e[a] + e[n + o] * i;
    }
  }
}
const Vh = "\\[\\]\\.:\\/", yM = new RegExp("[" + Vh + "]", "g"), Gh = "[^" + Vh + "]", xM = "[^" + Vh.replace("\\.", "") + "]", vM = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Gh), MM = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", xM), SM = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Gh), EM = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Gh), TM = new RegExp(
  "^" + vM + MM + SM + EM + "$"
), bM = ["material", "materials", "bones", "map"];
class AM {
  constructor(e, t, n) {
    const i = n || Qe.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Qe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Qe.parseTrackName(t), this.node = Qe.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Qe.Composite(e, t, n) : new Qe(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(yM, "");
  }
  static parseTrackName(e) {
    const t = TM.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      bM.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let o = 0; o < s.length; o++) {
          const a = s[o];
          if (a.name === t || a.uuid === t)
            return a;
          const c = n(a.children);
          if (c)
            return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Qe.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const o = e[i];
    if (o === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = s;
    } else
      o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Qe.Composite = AM;
Qe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Qe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Qe.prototype.GetterByBindingType = [
  Qe.prototype._getValue_direct,
  Qe.prototype._getValue_array,
  Qe.prototype._getValue_arrayElement,
  Qe.prototype._getValue_toArray
];
Qe.prototype.SetterByBindingTypeAndVersioning = [
  [
    Qe.prototype._setValue_direct,
    Qe.prototype._setValue_direct_setNeedsUpdate,
    Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    Qe.prototype._setValue_array,
    Qe.prototype._setValue_array_setNeedsUpdate,
    Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    Qe.prototype._setValue_arrayElement,
    Qe.prototype._setValue_arrayElement_setNeedsUpdate,
    Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    Qe.prototype._setValue_fromArray,
    Qe.prototype._setValue_fromArray_setNeedsUpdate,
    Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class wM {
  constructor() {
    this.isAnimationObjectGroup = !0, this.uuid = tn(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    const e = {};
    this._indicesByUUID = e;
    for (let n = 0, i = arguments.length; n !== i; ++n)
      e[arguments[n].uuid] = n;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    const t = this;
    this.stats = {
      objects: {
        get total() {
          return t._objects.length;
        },
        get inUse() {
          return this.total - t.nCachedObjects_;
        }
      },
      get bindingsPerObject() {
        return t._bindings.length;
      }
    };
  }
  add() {
    const e = this._objects, t = this._indicesByUUID, n = this._paths, i = this._parsedPaths, s = this._bindings, o = s.length;
    let a, c = e.length, l = this.nCachedObjects_;
    for (let h = 0, u = arguments.length; h !== u; ++h) {
      const d = arguments[h], f = d.uuid;
      let m = t[f];
      if (m === void 0) {
        m = c++, t[f] = m, e.push(d);
        for (let _ = 0, g = o; _ !== g; ++_)
          s[_].push(new Qe(d, n[_], i[_]));
      } else if (m < l) {
        a = e[m];
        const _ = --l, g = e[_];
        t[g.uuid] = m, e[m] = g, t[f] = _, e[_] = d;
        for (let p = 0, v = o; p !== v; ++p) {
          const x = s[p], y = x[_];
          let S = x[m];
          x[m] = y, S === void 0 && (S = new Qe(d, n[p], i[p])), x[_] = S;
        }
      } else
        e[m] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = l;
  }
  remove() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_;
    for (let o = 0, a = arguments.length; o !== a; ++o) {
      const c = arguments[o], l = c.uuid, h = t[l];
      if (h !== void 0 && h >= s) {
        const u = s++, d = e[u];
        t[d.uuid] = h, e[h] = d, t[l] = u, e[u] = c;
        for (let f = 0, m = i; f !== m; ++f) {
          const _ = n[f], g = _[u], p = _[h];
          _[h] = g, _[u] = p;
        }
      }
    }
    this.nCachedObjects_ = s;
  }
  uncache() {
    const e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length;
    let s = this.nCachedObjects_, o = e.length;
    for (let a = 0, c = arguments.length; a !== c; ++a) {
      const l = arguments[a], h = l.uuid, u = t[h];
      if (u !== void 0)
        if (delete t[h], u < s) {
          const d = --s, f = e[d], m = --o, _ = e[m];
          t[f.uuid] = u, e[u] = f, t[_.uuid] = d, e[d] = _, e.pop();
          for (let g = 0, p = i; g !== p; ++g) {
            const v = n[g], x = v[d], y = v[m];
            v[u] = x, v[d] = y, v.pop();
          }
        } else {
          const d = --o, f = e[d];
          d > 0 && (t[f.uuid] = u), e[u] = f, e.pop();
          for (let m = 0, _ = i; m !== _; ++m) {
            const g = n[m];
            g[u] = g[d], g.pop();
          }
        }
    }
    this.nCachedObjects_ = s;
  }
  subscribe_(e, t) {
    const n = this._bindingsIndicesByPath;
    let i = n[e];
    const s = this._bindings;
    if (i !== void 0)
      return s[i];
    const o = this._paths, a = this._parsedPaths, c = this._objects, l = c.length, h = this.nCachedObjects_, u = new Array(l);
    i = s.length, n[e] = i, o.push(e), a.push(t), s.push(u);
    for (let d = h, f = c.length; d !== f; ++d) {
      const m = c[d];
      u[d] = new Qe(m, e, t);
    }
    return u;
  }
  unsubscribe_(e) {
    const t = this._bindingsIndicesByPath, n = t[e];
    if (n !== void 0) {
      const i = this._paths, s = this._parsedPaths, o = this._bindings, a = o.length - 1, c = o[a], l = e[a];
      t[l] = n, o[n] = c, o.pop(), s[n] = s[a], s.pop(), i[n] = i[a], i.pop();
    }
  }
}
class $p {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, o = s.length, a = new Array(o), c = {
      endingStart: Ki,
      endingEnd: Ki
    };
    for (let l = 0; l !== o; ++l) {
      const h = s[l].createInterpolant(null);
      a[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Of, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, s = e._clip.duration, o = s / i, a = i / s;
      e.warp(1, o, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, s = i.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const c = a.parameterPositions, l = a.sampleValues;
    return c[0] = s, c[1] = s + n, l[0] = e / o, l[1] = t / o, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const c = (e - s) * n;
      c < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * c);
    }
    t *= this._updateTimeScale(e);
    const o = this._updateTime(t), a = this._updateWeight(e);
    if (a > 0) {
      const c = this._interpolants, l = this._propertyBindings;
      switch (this.blendMode) {
        case rh:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(o), l[h].accumulateAdditive(a);
          break;
        case Pa:
        default:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(o), l[h].accumulate(i, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, s = this._loopCount;
    const o = n === Nf;
    if (e === 0)
      return s === -1 ? i : o && (s & 1) === 1 ? t - i : i;
    if (n === Df) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), i >= t || i < 0) {
        const a = Math.floor(i / t);
        i -= t * a, s += Math.abs(a);
        const c = this.repetitions - s;
        if (c <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (c === 1) {
            const l = e < 0;
            this._setEndings(l, !l, o);
          } else
            this._setEndings(!1, !1, o);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: a
          });
        }
      } else
        this.time = i;
      if (o && (s & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = Ji, i.endingEnd = Ji) : (e ? i.endingStart = this.zeroSlopeAtStart ? Ji : Ki : i.endingStart = Xr, t ? i.endingEnd = this.zeroSlopeAtEnd ? Ji : Ki : i.endingEnd = Xr);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let o = this._weightInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, c = o.sampleValues;
    return a[0] = s, c[0] = t, a[1] = s + e, c[1] = n, this;
  }
}
const RM = new Float32Array(1);
class CM extends ai {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, o = e._propertyBindings, a = e._interpolants, c = n.uuid, l = this._bindingsByRootAndName;
    let h = l[c];
    h === void 0 && (h = {}, l[c] = h);
    for (let u = 0; u !== s; ++u) {
      const d = i[u], f = d.name;
      let m = h[f];
      if (m !== void 0)
        ++m.referenceCount, o[u] = m;
      else {
        if (m = o[u], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, c, f));
          continue;
        }
        const _ = t && t._propertyBindings[u].binding.parsedPath;
        m = new qp(
          Qe.create(n, f, _),
          d.ValueTypeName,
          d.getValueSize()
        ), ++m.referenceCount, this._addInactiveBinding(m, c, f), o[u] = m;
      }
      a[u].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          e,
          s && s.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, s = this._actionsByClip;
    let o = s[t];
    if (o === void 0)
      o = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, s[t] = o;
    else {
      const a = o.knownActions;
      e._byClipCacheIndex = a.length, a.push(e);
    }
    e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, o = this._actionsByClip, a = o[s], c = a.knownActions, l = c[c.length - 1], h = e._byClipCacheIndex;
    l._byClipCacheIndex = h, c[h] = l, c.pop(), e._byClipCacheIndex = null;
    const u = a.actionByRoot, d = (e._localRoot || this._root).uuid;
    delete u[d], c.length === 0 && delete o[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let o = i[t];
    o === void 0 && (o = {}, i[t] = o), o[n] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, o = this._bindingsByRootAndName, a = o[i], c = t[t.length - 1], l = e._cacheIndex;
    c._cacheIndex = l, t[l] = c, t.pop(), delete a[s], Object.keys(a).length === 0 && delete o[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new Ph(
      new Float32Array(2),
      new Float32Array(2),
      1,
      RM
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let o = typeof e == "string" ? nr.findByName(i, e) : e;
    const a = o !== null ? o.uuid : e, c = this._actionsByClip[a];
    let l = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = Pa), c !== void 0) {
      const u = c.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n)
        return u;
      l = c.knownActions[0], o === null && (o = l._clip);
    }
    if (o === null)
      return null;
    const h = new $p(this, o, t, n);
    return this._bindAction(h, l), this._addInactiveAction(h, a, s), h;
  }
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? nr.findByName(n, e) : e, o = s ? s.uuid : e, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[i] || null;
  }
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), o = this._accuIndex ^= 1;
    for (let l = 0; l !== n; ++l)
      t[l]._update(i, e, s, o);
    const a = this._bindings, c = this._nActiveBindings;
    for (let l = 0; l !== c; ++l)
      a[l].apply(o);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const o = s.knownActions;
      for (let a = 0, c = o.length; a !== c; ++a) {
        const l = o[a];
        this._deactivateAction(l);
        const h = l._cacheIndex, u = t[t.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(l);
      }
      delete i[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const o in n) {
      const a = n[o].actionByRoot, c = a[t];
      c !== void 0 && (this._deactivateAction(c), this._removeInactiveAction(c));
    }
    const i = this._bindingsByRootAndName, s = i[t];
    if (s !== void 0)
      for (const o in s) {
        const a = s[o];
        a.restoreOriginalState(), this._removeInactiveBinding(a);
      }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class Wh {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Wh(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
let LM = 0;
class PM extends ai {
  constructor() {
    super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: LM++ }), this.name = "", this.usage = Yr, this.uniforms = [];
  }
  add(e) {
    return this.uniforms.push(e), this;
  }
  remove(e) {
    const t = this.uniforms.indexOf(e);
    return t !== -1 && this.uniforms.splice(t, 1), this;
  }
  setName(e) {
    return this.name = e, this;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this;
  }
  copy(e) {
    this.name = e.name, this.usage = e.usage;
    const t = e.uniforms;
    this.uniforms.length = 0;
    for (let n = 0, i = t.length; n < i; n++)
      this.uniforms.push(t[n].clone());
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class IM extends co {
  constructor(e, t, n = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
class UM {
  constructor(e, t, n, i, s) {
    this.isGLBufferAttribute = !0, this.name = "", this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = i, this.count = s, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setBuffer(e) {
    return this.buffer = e, this;
  }
  setType(e, t) {
    return this.type = e, this.elementSize = t, this;
  }
  setItemSize(e) {
    return this.itemSize = e, this;
  }
  setCount(e) {
    return this.count = e, this;
  }
}
class Zp {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new hr(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Ua(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Gl(e, this, n, t), n.sort(_d), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      Gl(e[i], this, n, t);
    return n.sort(_d), n;
  }
}
function _d(r, e) {
  return r.distance - e.distance;
}
function Gl(r, e, t, n) {
  if (r.layers.test(e.layers) && r.raycast(e, t), n === !0) {
    const i = r.children;
    for (let s = 0, o = i.length; s < o; s++)
      Gl(i[s], e, t, !0);
  }
}
class DM {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(yt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class OM {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.theta = t, this.y = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.theta = t, this.y = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const yd = /* @__PURE__ */ new j();
class NM {
  constructor(e = new j(1 / 0, 1 / 0), t = new j(-1 / 0, -1 / 0)) {
    this.isBox2 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = yd.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, yd).distanceTo(e);
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const xd = /* @__PURE__ */ new w(), Qo = /* @__PURE__ */ new w();
class FM {
  constructor(e = new w(), t = new w()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    xd.subVectors(e, this.start), Qo.subVectors(this.end, this.start);
    const n = Qo.dot(Qo);
    let s = Qo.dot(xd) / n;
    return t && (s = yt(s, 0, 1)), s;
  }
  closestPointToPoint(e, t, n) {
    const i = this.closestPointToPointParameter(e, t);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vd = /* @__PURE__ */ new w();
class BM extends ze {
  constructor(e, t) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t, this.type = "SpotLightHelper";
    const n = new Ye(), i = [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      -1,
      1
    ];
    for (let o = 0, a = 1, c = 32; o < c; o++, a++) {
      const l = o / c * Math.PI * 2, h = a / c * Math.PI * 2;
      i.push(
        Math.cos(l),
        Math.sin(l),
        1,
        Math.cos(h),
        Math.sin(h),
        1
      );
    }
    n.setAttribute("position", new xe(i, 3));
    const s = new Bt({ fog: !1, toneMapped: !1 });
    this.cone = new An(n, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1);
    const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), vd.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(vd), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
const gi = /* @__PURE__ */ new w(), ea = /* @__PURE__ */ new Ie(), Gc = /* @__PURE__ */ new Ie();
class zM extends An {
  constructor(e) {
    const t = Kp(e), n = new Ye(), i = [], s = [], o = new he(0, 0, 1), a = new he(0, 1, 0);
    for (let l = 0; l < t.length; l++) {
      const h = t[l];
      h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(o.r, o.g, o.b), s.push(a.r, a.g, a.b));
    }
    n.setAttribute("position", new xe(i, 3)), n.setAttribute("color", new xe(s, 3));
    const c = new Bt({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
    super(n, c), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
  }
  updateMatrixWorld(e) {
    const t = this.bones, n = this.geometry, i = n.getAttribute("position");
    Gc.copy(this.root.matrixWorld).invert();
    for (let s = 0, o = 0; s < t.length; s++) {
      const a = t[s];
      a.parent && a.parent.isBone && (ea.multiplyMatrices(Gc, a.matrixWorld), gi.setFromMatrixPosition(ea), i.setXYZ(o, gi.x, gi.y, gi.z), ea.multiplyMatrices(Gc, a.parent.matrixWorld), gi.setFromMatrixPosition(ea), i.setXYZ(o + 1, gi.x, gi.y, gi.z), o += 2);
    }
    n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function Kp(r) {
  const e = [];
  r.isBone === !0 && e.push(r);
  for (let t = 0; t < r.children.length; t++)
    e.push.apply(e, Kp(r.children[t]));
  return e;
}
class HM extends St {
  constructor(e, t, n) {
    const i = new po(t, 4, 2), s = new en({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(i, s), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const kM = /* @__PURE__ */ new w(), Md = /* @__PURE__ */ new he(), Sd = /* @__PURE__ */ new he();
class VM extends ze {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const i = new fo(t);
    i.rotateY(Math.PI * 0.5), this.material = new en({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const s = i.getAttribute("position"), o = new Float32Array(s.count * 3);
    i.setAttribute("color", new rt(o, 3)), this.add(new St(i, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0)
      this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      Md.copy(this.light.color), Sd.copy(this.light.groundColor);
      for (let n = 0, i = t.count; n < i; n++) {
        const s = n < i / 2 ? Md : Sd;
        t.setXYZ(n, s.r, s.g, s.b);
      }
      t.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), e.lookAt(kM.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class GM extends An {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    n = new he(n), i = new he(i);
    const s = t / 2, o = e / t, a = e / 2, c = [], l = [];
    for (let d = 0, f = 0, m = -a; d <= t; d++, m += o) {
      c.push(-a, 0, m, a, 0, m), c.push(m, 0, -a, m, 0, a);
      const _ = d === s ? n : i;
      _.toArray(l, f), f += 3, _.toArray(l, f), f += 3, _.toArray(l, f), f += 3, _.toArray(l, f), f += 3;
    }
    const h = new Ye();
    h.setAttribute("position", new xe(c, 3)), h.setAttribute("color", new xe(l, 3));
    const u = new Bt({ vertexColors: !0, toneMapped: !1 });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class WM extends An {
  constructor(e = 10, t = 16, n = 8, i = 64, s = 4473924, o = 8947848) {
    s = new he(s), o = new he(o);
    const a = [], c = [];
    if (t > 1)
      for (let u = 0; u < t; u++) {
        const d = u / t * (Math.PI * 2), f = Math.sin(d) * e, m = Math.cos(d) * e;
        a.push(0, 0, 0), a.push(f, 0, m);
        const _ = u & 1 ? s : o;
        c.push(_.r, _.g, _.b), c.push(_.r, _.g, _.b);
      }
    for (let u = 0; u < n; u++) {
      const d = u & 1 ? s : o, f = e - e / n * u;
      for (let m = 0; m < i; m++) {
        let _ = m / i * (Math.PI * 2), g = Math.sin(_) * f, p = Math.cos(_) * f;
        a.push(g, 0, p), c.push(d.r, d.g, d.b), _ = (m + 1) / i * (Math.PI * 2), g = Math.sin(_) * f, p = Math.cos(_) * f, a.push(g, 0, p), c.push(d.r, d.g, d.b);
      }
    }
    const l = new Ye();
    l.setAttribute("position", new xe(a, 3)), l.setAttribute("color", new xe(c, 3));
    const h = new Bt({ vertexColors: !0, toneMapped: !1 });
    super(l, h), this.type = "PolarGridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const Ed = /* @__PURE__ */ new w(), ta = /* @__PURE__ */ new w(), Td = /* @__PURE__ */ new w();
class XM extends ze {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let i = new Ye();
    i.setAttribute("position", new xe([
      -t,
      t,
      0,
      t,
      t,
      0,
      t,
      -t,
      0,
      -t,
      -t,
      0,
      -t,
      t,
      0
    ], 3));
    const s = new Bt({ fog: !1, toneMapped: !1 });
    this.lightPlane = new ri(i, s), this.add(this.lightPlane), i = new Ye(), i.setAttribute("position", new xe([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new ri(i, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), Ed.setFromMatrixPosition(this.light.matrixWorld), ta.setFromMatrixPosition(this.light.target.matrixWorld), Td.subVectors(ta, Ed), this.lightPlane.lookAt(ta), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(ta), this.targetLine.scale.z = Td.length();
  }
}
const na = /* @__PURE__ */ new w(), gt = /* @__PURE__ */ new Da();
class YM extends An {
  constructor(e) {
    const t = new Ye(), n = new Bt({ color: 16777215, vertexColors: !0, toneMapped: !1 }), i = [], s = [], o = {};
    a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4");
    function a(m, _) {
      c(m), c(_);
    }
    function c(m) {
      i.push(0, 0, 0), s.push(0, 0, 0), o[m] === void 0 && (o[m] = []), o[m].push(i.length / 3 - 1);
    }
    t.setAttribute("position", new xe(i, 3)), t.setAttribute("color", new xe(s, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update();
    const l = new he(16755200), h = new he(16711680), u = new he(43775), d = new he(16777215), f = new he(3355443);
    this.setColors(l, h, u, d, f);
  }
  setColors(e, t, n, i, s) {
    const a = this.geometry.getAttribute("color");
    a.setXYZ(0, e.r, e.g, e.b), a.setXYZ(1, e.r, e.g, e.b), a.setXYZ(2, e.r, e.g, e.b), a.setXYZ(3, e.r, e.g, e.b), a.setXYZ(4, e.r, e.g, e.b), a.setXYZ(5, e.r, e.g, e.b), a.setXYZ(6, e.r, e.g, e.b), a.setXYZ(7, e.r, e.g, e.b), a.setXYZ(8, e.r, e.g, e.b), a.setXYZ(9, e.r, e.g, e.b), a.setXYZ(10, e.r, e.g, e.b), a.setXYZ(11, e.r, e.g, e.b), a.setXYZ(12, e.r, e.g, e.b), a.setXYZ(13, e.r, e.g, e.b), a.setXYZ(14, e.r, e.g, e.b), a.setXYZ(15, e.r, e.g, e.b), a.setXYZ(16, e.r, e.g, e.b), a.setXYZ(17, e.r, e.g, e.b), a.setXYZ(18, e.r, e.g, e.b), a.setXYZ(19, e.r, e.g, e.b), a.setXYZ(20, e.r, e.g, e.b), a.setXYZ(21, e.r, e.g, e.b), a.setXYZ(22, e.r, e.g, e.b), a.setXYZ(23, e.r, e.g, e.b), a.setXYZ(24, t.r, t.g, t.b), a.setXYZ(25, t.r, t.g, t.b), a.setXYZ(26, t.r, t.g, t.b), a.setXYZ(27, t.r, t.g, t.b), a.setXYZ(28, t.r, t.g, t.b), a.setXYZ(29, t.r, t.g, t.b), a.setXYZ(30, t.r, t.g, t.b), a.setXYZ(31, t.r, t.g, t.b), a.setXYZ(32, n.r, n.g, n.b), a.setXYZ(33, n.r, n.g, n.b), a.setXYZ(34, n.r, n.g, n.b), a.setXYZ(35, n.r, n.g, n.b), a.setXYZ(36, n.r, n.g, n.b), a.setXYZ(37, n.r, n.g, n.b), a.setXYZ(38, i.r, i.g, i.b), a.setXYZ(39, i.r, i.g, i.b), a.setXYZ(40, s.r, s.g, s.b), a.setXYZ(41, s.r, s.g, s.b), a.setXYZ(42, s.r, s.g, s.b), a.setXYZ(43, s.r, s.g, s.b), a.setXYZ(44, s.r, s.g, s.b), a.setXYZ(45, s.r, s.g, s.b), a.setXYZ(46, s.r, s.g, s.b), a.setXYZ(47, s.r, s.g, s.b), a.setXYZ(48, s.r, s.g, s.b), a.setXYZ(49, s.r, s.g, s.b), a.needsUpdate = !0;
  }
  update() {
    const e = this.geometry, t = this.pointMap, n = 1, i = 1;
    gt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), vt("c", t, e, gt, 0, 0, -1), vt("t", t, e, gt, 0, 0, 1), vt("n1", t, e, gt, -n, -i, -1), vt("n2", t, e, gt, n, -i, -1), vt("n3", t, e, gt, -n, i, -1), vt("n4", t, e, gt, n, i, -1), vt("f1", t, e, gt, -n, -i, 1), vt("f2", t, e, gt, n, -i, 1), vt("f3", t, e, gt, -n, i, 1), vt("f4", t, e, gt, n, i, 1), vt("u1", t, e, gt, n * 0.7, i * 1.1, -1), vt("u2", t, e, gt, -n * 0.7, i * 1.1, -1), vt("u3", t, e, gt, 0, i * 2, -1), vt("cf1", t, e, gt, -n, 0, 1), vt("cf2", t, e, gt, n, 0, 1), vt("cf3", t, e, gt, 0, -i, 1), vt("cf4", t, e, gt, 0, i, 1), vt("cn1", t, e, gt, -n, 0, -1), vt("cn2", t, e, gt, n, 0, -1), vt("cn3", t, e, gt, 0, -i, -1), vt("cn4", t, e, gt, 0, i, -1), e.getAttribute("position").needsUpdate = !0;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function vt(r, e, t, n, i, s, o) {
  na.set(i, s, o).unproject(n);
  const a = e[r];
  if (a !== void 0) {
    const c = t.getAttribute("position");
    for (let l = 0, h = a.length; l < h; l++)
      c.setXYZ(a[l], na.x, na.y, na.z);
  }
}
const ia = /* @__PURE__ */ new bn();
class qM extends An {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new Float32Array(8 * 3), s = new Ye();
    s.setIndex(new rt(n, 1)), s.setAttribute("position", new rt(i, 3)), super(s, new Bt({ color: t, toneMapped: !1 })), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
  }
  update(e) {
    if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && ia.setFromObject(this.object), ia.isEmpty())
      return;
    const t = ia.min, n = ia.max, i = this.geometry.attributes.position, s = i.array;
    s[0] = n.x, s[1] = n.y, s[2] = n.z, s[3] = t.x, s[4] = n.y, s[5] = n.z, s[6] = t.x, s[7] = t.y, s[8] = n.z, s[9] = n.x, s[10] = t.y, s[11] = n.z, s[12] = n.x, s[13] = n.y, s[14] = t.z, s[15] = t.x, s[16] = n.y, s[17] = t.z, s[18] = t.x, s[19] = t.y, s[20] = t.z, s[21] = n.x, s[22] = t.y, s[23] = t.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
  }
  setFromObject(e) {
    return this.object = e, this.update(), this;
  }
  copy(e, t) {
    return super.copy(e, t), this.object = e.object, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class $M extends An {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], s = new Ye();
    s.setIndex(new rt(n, 1)), s.setAttribute("position", new xe(i, 3)), super(s, new Bt({ color: t, toneMapped: !1 })), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    const t = this.box;
    t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(e));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class ZM extends ri {
  constructor(e, t = 1, n = 16776960) {
    const i = n, s = [1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], o = new Ye();
    o.setAttribute("position", new xe(s, 3)), o.computeBoundingSphere(), super(o, new Bt({ color: i, toneMapped: !1 })), this.type = "PlaneHelper", this.plane = e, this.size = t;
    const a = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], c = new Ye();
    c.setAttribute("position", new xe(a, 3)), c.computeBoundingSphere(), this.add(new St(c, new en({ color: i, opacity: 0.2, transparent: !0, depthWrite: !1, toneMapped: !1 })));
  }
  updateMatrixWorld(e) {
    this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
}
const bd = /* @__PURE__ */ new w();
let sa, Wc;
class KM extends ze {
  constructor(e = new w(0, 0, 1), t = new w(0, 0, 0), n = 1, i = 16776960, s = n * 0.2, o = s * 0.2) {
    super(), this.type = "ArrowHelper", sa === void 0 && (sa = new Ye(), sa.setAttribute("position", new xe([0, 0, 0, 0, 1, 0], 3)), Wc = new pr(0, 0.5, 1, 5, 1), Wc.translate(0, -0.5, 0)), this.position.copy(t), this.line = new ri(sa, new Bt({ color: i, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new St(Wc, new en({ color: i, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, s, o);
  }
  setDirection(e) {
    if (e.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      bd.set(e.z, 0, -e.x).normalize();
      const t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(bd, t);
    }
  }
  setLength(e, t = e * 0.2, n = t * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
  }
  setColor(e) {
    this.line.material.color.set(e), this.cone.material.color.set(e);
  }
  copy(e) {
    return super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class JM extends An {
  constructor(e = 1) {
    const t = [
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      0,
      0,
      e
    ], n = [
      1,
      0,
      0,
      1,
      0.6,
      0,
      0,
      1,
      0,
      0.6,
      1,
      0,
      0,
      0,
      1,
      0,
      0.6,
      1
    ], i = new Ye();
    i.setAttribute("position", new xe(t, 3)), i.setAttribute("color", new xe(n, 3));
    const s = new Bt({ vertexColors: !0, toneMapped: !1 });
    super(i, s), this.type = "AxesHelper";
  }
  setColors(e, t, n) {
    const i = new he(), s = this.geometry.attributes.color.array;
    return i.set(e), i.toArray(s, 0), i.toArray(s, 3), i.set(t), i.toArray(s, 6), i.toArray(s, 9), i.set(n), i.toArray(s, 12), i.toArray(s, 15), this.geometry.attributes.color.needsUpdate = !0, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Jp {
  constructor() {
    this.type = "ShapePath", this.color = new he(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new Zr(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, o) {
    return this.currentPath.bezierCurveTo(e, t, n, i, s, o), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(p) {
      const v = [];
      for (let x = 0, y = p.length; x < y; x++) {
        const S = p[x], E = new ns();
        E.curves = S.curves, v.push(E);
      }
      return v;
    }
    function n(p, v) {
      const x = v.length;
      let y = !1;
      for (let S = x - 1, E = 0; E < x; S = E++) {
        let T = v[S], R = v[E], M = R.x - T.x, b = R.y - T.y;
        if (Math.abs(b) > Number.EPSILON) {
          if (b < 0 && (T = v[E], M = -M, R = v[S], b = -b), p.y < T.y || p.y > R.y)
            continue;
          if (p.y === T.y) {
            if (p.x === T.x)
              return !0;
          } else {
            const U = b * (p.x - T.x) - M * (p.y - T.y);
            if (U === 0)
              return !0;
            if (U < 0)
              continue;
            y = !y;
          }
        } else {
          if (p.y !== T.y)
            continue;
          if (R.x <= p.x && p.x <= T.x || T.x <= p.x && p.x <= R.x)
            return !0;
        }
      }
      return y;
    }
    const i = Nn.isClockWise, s = this.subPaths;
    if (s.length === 0)
      return [];
    let o, a, c;
    const l = [];
    if (s.length === 1)
      return a = s[0], c = new ns(), c.curves = a.curves, l.push(c), l;
    let h = !i(s[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let f = [], m = 0, _;
    d[m] = void 0, f[m] = [];
    for (let p = 0, v = s.length; p < v; p++)
      a = s[p], _ = a.getPoints(), o = i(_), o = e ? !o : o, o ? (!h && d[m] && m++, d[m] = { s: new ns(), p: _ }, d[m].s.curves = a.curves, h && m++, f[m] = []) : f[m].push({ h: a, p: _[0] });
    if (!d[0])
      return t(s);
    if (d.length > 1) {
      let p = !1, v = 0;
      for (let x = 0, y = d.length; x < y; x++)
        u[x] = [];
      for (let x = 0, y = d.length; x < y; x++) {
        const S = f[x];
        for (let E = 0; E < S.length; E++) {
          const T = S[E];
          let R = !0;
          for (let M = 0; M < d.length; M++)
            n(T.p, d[M].p) && (x !== M && v++, R ? (R = !1, u[M].push(T)) : p = !0);
          R && u[x].push(T);
        }
      }
      v > 0 && p === !1 && (f = u);
    }
    let g;
    for (let p = 0, v = d.length; p < v; p++) {
      c = d[p].s, l.push(c), g = f[p];
      for (let x = 0, y = g.length; x < y; x++)
        c.holes.push(g[x].h);
    }
    return l;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: wa
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = wa);
const jM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACESFilmicToneMapping: jl,
  AddEquation: $i,
  AddOperation: vf,
  AdditiveAnimationBlendMode: rh,
  AdditiveBlending: cl,
  AlphaFormat: wf,
  AlwaysCompare: Zf,
  AlwaysDepth: ff,
  AlwaysStencilFunc: kf,
  AmbientLight: zh,
  AmbientLightProbe: uM,
  AnimationAction: $p,
  AnimationClip: nr,
  AnimationLoader: tM,
  AnimationMixer: CM,
  AnimationObjectGroup: wM,
  AnimationUtils: Jv,
  ArcCurve: gp,
  ArrayCamera: hp,
  ArrowHelper: KM,
  Audio: Yp,
  AudioAnalyser: _M,
  AudioContext: Hh,
  AudioListener: pM,
  AudioLoader: lM,
  AxesHelper: JM,
  BackSide: Wt,
  BasicDepthPacking: Bf,
  BasicShadowMap: ym,
  Bone: Ha,
  BooleanKeyframeTrack: fs,
  Box2: NM,
  Box3: bn,
  Box3Helper: $M,
  BoxGeometry: Ci,
  BoxHelper: qM,
  BufferAttribute: rt,
  BufferGeometry: Ye,
  BufferGeometryLoader: Wp,
  ByteType: bf,
  Cache: cs,
  Camera: Da,
  CameraHelper: YM,
  CanvasTexture: Mv,
  CapsuleGeometry: Xa,
  CatmullRomCurve3: _p,
  CineonToneMapping: Ef,
  CircleGeometry: Ya,
  ClampToEdgeWrapping: Dt,
  Clock: kh,
  Color: he,
  ColorKeyframeTrack: Ih,
  ColorManagement: an,
  CompressedArrayTexture: xv,
  CompressedCubeTexture: vv,
  CompressedTexture: Va,
  CompressedTextureLoader: nM,
  ConeGeometry: qa,
  CubeCamera: np,
  CubeReflectionMapping: ii,
  CubeRefractionMapping: bi,
  CubeTexture: ao,
  CubeTextureLoader: iM,
  CubeUVReflectionMapping: lr,
  CubicBezierCurve: Th,
  CubicBezierCurve3: yp,
  CubicInterpolant: Op,
  CullFaceBack: al,
  CullFaceFront: jd,
  CullFaceFrontBack: _m,
  CullFaceNone: Jd,
  Curve: wn,
  CurvePath: vp,
  CustomBlending: Qd,
  CustomToneMapping: Tf,
  CylinderGeometry: pr,
  Cylindrical: OM,
  Data3DTexture: uh,
  DataArrayTexture: Ia,
  DataTexture: $s,
  DataTextureLoader: zp,
  DataUtils: Nr,
  DecrementStencilOp: wm,
  DecrementWrapStencilOp: Cm,
  DefaultLoadingManager: Bp,
  DepthFormat: Si,
  DepthStencilFormat: is,
  DepthTexture: up,
  DirectionalLight: Bh,
  DirectionalLightHelper: XM,
  DiscreteInterpolant: Np,
  DisplayP3ColorSpace: ch,
  DodecahedronGeometry: $a,
  DoubleSide: Mn,
  DstAlphaFactor: af,
  DstColorFactor: lf,
  DynamicCopyUsage: Wm,
  DynamicDrawUsage: Bm,
  DynamicReadUsage: km,
  EdgesGeometry: Mp,
  EllipseCurve: Ga,
  EqualCompare: Wf,
  EqualDepth: mf,
  EqualStencilFunc: Um,
  EquirectangularReflectionMapping: Vr,
  EquirectangularRefractionMapping: Gr,
  Euler: oo,
  EventDispatcher: ai,
  ExtrudeGeometry: uo,
  FileLoader: mn,
  Float16BufferAttribute: Ig,
  Float32BufferAttribute: xe,
  Float64BufferAttribute: Ug,
  FloatType: Qt,
  Fog: Ba,
  FogExp2: Fa,
  FramebufferTexture: yv,
  FrontSide: Sn,
  Frustum: Oa,
  GLBufferAttribute: UM,
  GLSL1: Ym,
  GLSL3: Nl,
  GreaterCompare: Yf,
  GreaterDepth: _f,
  GreaterEqualCompare: $f,
  GreaterEqualDepth: gf,
  GreaterEqualStencilFunc: Fm,
  GreaterStencilFunc: Om,
  GridHelper: GM,
  Group: Qn,
  HalfFloatType: Dn,
  HemisphereLight: Hp,
  HemisphereLightHelper: VM,
  HemisphereLightProbe: hM,
  IcosahedronGeometry: Ka,
  ImageBitmapLoader: Xp,
  ImageLoader: Qr,
  ImageUtils: hh,
  IncrementStencilOp: Am,
  IncrementWrapStencilOp: Rm,
  InstancedBufferAttribute: tr,
  InstancedBufferGeometry: Gp,
  InstancedInterleavedBuffer: IM,
  InstancedMesh: vh,
  Int16BufferAttribute: Lg,
  Int32BufferAttribute: Pg,
  Int8BufferAttribute: wg,
  IntType: Ql,
  InterleavedBuffer: co,
  InterleavedBufferAttribute: Ai,
  Interpolant: mr,
  InterpolateDiscrete: js,
  InterpolateLinear: ss,
  InterpolateSmooth: pa,
  InvertStencilOp: Lm,
  KeepStencilOp: ma,
  KeyframeTrack: Rn,
  LOD: mp,
  LatheGeometry: ho,
  Layers: Ua,
  LessCompare: Gf,
  LessDepth: pf,
  LessEqualCompare: Xf,
  LessEqualDepth: ya,
  LessEqualStencilFunc: Dm,
  LessStencilFunc: Im,
  Light: Pi,
  LightProbe: ic,
  Line: ri,
  Line3: FM,
  LineBasicMaterial: Bt,
  LineCurve: Wa,
  LineCurve3: xp,
  LineDashedMaterial: Up,
  LineLoop: Mh,
  LineSegments: An,
  LinearEncoding: ah,
  LinearFilter: lt,
  LinearInterpolant: Ph,
  LinearMipMapLinearFilter: Em,
  LinearMipMapNearestFilter: Sm,
  LinearMipmapLinearFilter: Bn,
  LinearMipmapNearestFilter: Ca,
  LinearSRGBColorSpace: fn,
  LinearToneMapping: Mf,
  Loader: zt,
  LoaderUtils: ir,
  LoadingManager: Uh,
  LoopOnce: Df,
  LoopPingPong: Nf,
  LoopRepeat: Of,
  LuminanceAlphaFormat: Cf,
  LuminanceFormat: Rf,
  MOUSE: mm,
  Material: Rt,
  MaterialLoader: sc,
  MathUtils: Jf,
  Matrix3: Xe,
  Matrix4: Ie,
  MaxEquation: dl,
  Mesh: St,
  MeshBasicMaterial: en,
  MeshDepthMaterial: mh,
  MeshDistanceMaterial: gh,
  MeshLambertMaterial: Pp,
  MeshMatcapMaterial: Ip,
  MeshNormalMaterial: Lp,
  MeshPhongMaterial: Rp,
  MeshPhysicalMaterial: Hn,
  MeshStandardMaterial: ds,
  MeshToonMaterial: Cp,
  MinEquation: ul,
  MirroredRepeatWrapping: Js,
  MixOperation: xf,
  MultiplyBlending: hl,
  MultiplyOperation: ro,
  NearestFilter: _t,
  NearestMipMapLinearFilter: Mm,
  NearestMipMapNearestFilter: vm,
  NearestMipmapLinearFilter: Ys,
  NearestMipmapNearestFilter: Wr,
  NeverCompare: Vf,
  NeverDepth: df,
  NeverStencilFunc: Pm,
  NoBlending: ei,
  NoColorSpace: Ti,
  NoToneMapping: ti,
  NormalAnimationBlendMode: Pa,
  NormalBlending: es,
  NotEqualCompare: qf,
  NotEqualDepth: yf,
  NotEqualStencilFunc: Nm,
  NumberKeyframeTrack: os,
  Object3D: ze,
  ObjectLoader: aM,
  ObjectSpaceNormalMap: Hf,
  OctahedronGeometry: fo,
  OneFactor: sf,
  OneMinusDstAlphaFactor: cf,
  OneMinusDstColorFactor: hf,
  OneMinusSrcAlphaFactor: Jl,
  OneMinusSrcColorFactor: of,
  OrthographicCamera: dr,
  PCFShadowMap: $l,
  PCFSoftShadowMap: Zl,
  PMREMGenerator: Ea,
  Path: Zr,
  PerspectiveCamera: wt,
  Plane: Kn,
  PlaneGeometry: ur,
  PlaneHelper: ZM,
  PointLight: Fh,
  PointLightHelper: HM,
  Points: Sh,
  PointsMaterial: ka,
  PolarGridHelper: WM,
  PolyhedronGeometry: Li,
  PositionalAudio: gM,
  PropertyBinding: Qe,
  PropertyMixer: qp,
  QuadraticBezierCurve: bh,
  QuadraticBezierCurve3: Ah,
  Quaternion: Ft,
  QuaternionKeyframeTrack: wi,
  QuaternionLinearInterpolant: Fp,
  RED_GREEN_RGTC2_Format: Dl,
  RED_RGTC1_Format: Uf,
  REVISION: wa,
  RGBADepthPacking: zf,
  RGBAFormat: jt,
  RGBAIntegerFormat: sh,
  RGBA_ASTC_10x10_Format: Ll,
  RGBA_ASTC_10x5_Format: wl,
  RGBA_ASTC_10x6_Format: Rl,
  RGBA_ASTC_10x8_Format: Cl,
  RGBA_ASTC_12x10_Format: Pl,
  RGBA_ASTC_12x12_Format: Il,
  RGBA_ASTC_4x4_Format: xl,
  RGBA_ASTC_5x4_Format: vl,
  RGBA_ASTC_5x5_Format: Ml,
  RGBA_ASTC_6x5_Format: Sl,
  RGBA_ASTC_6x6_Format: El,
  RGBA_ASTC_8x5_Format: Tl,
  RGBA_ASTC_8x6_Format: bl,
  RGBA_ASTC_8x8_Format: Al,
  RGBA_BPTC_Format: fa,
  RGBA_ETC2_EAC_Format: yl,
  RGBA_PVRTC_2BPPV1_Format: gl,
  RGBA_PVRTC_4BPPV1_Format: ml,
  RGBA_S3TC_DXT1_Format: ha,
  RGBA_S3TC_DXT3_Format: ua,
  RGBA_S3TC_DXT5_Format: da,
  RGB_ETC1_Format: If,
  RGB_ETC2_Format: _l,
  RGB_PVRTC_2BPPV1_Format: pl,
  RGB_PVRTC_4BPPV1_Format: fl,
  RGB_S3TC_DXT1_Format: la,
  RGFormat: Pf,
  RGIntegerFormat: ih,
  RawShaderMaterial: wp,
  Ray: hr,
  Raycaster: Zp,
  RectAreaLight: kp,
  RedFormat: Lf,
  RedIntegerFormat: nh,
  ReinhardToneMapping: Sf,
  RenderTarget: Qf,
  RepeatWrapping: si,
  ReplaceStencilOp: bm,
  ReverseSubtractEquation: tf,
  RingGeometry: Ja,
  SIGNED_RED_GREEN_RGTC2_Format: Ol,
  SIGNED_RED_RGTC1_Format: Ul,
  SRGBColorSpace: De,
  Scene: za,
  ShaderChunk: Ve,
  ShaderLib: vn,
  ShaderMaterial: En,
  ShadowMaterial: Ap,
  Shape: ns,
  ShapeGeometry: ja,
  ShapePath: Jp,
  ShapeUtils: Nn,
  ShortType: Af,
  Skeleton: lo,
  SkeletonHelper: zM,
  SkinnedMesh: xh,
  Source: ji,
  Sphere: gn,
  SphereGeometry: po,
  Spherical: DM,
  SphericalHarmonics3: Vp,
  SplineCurve: wh,
  SpotLight: Nh,
  SpotLightHelper: BM,
  Sprite: pp,
  SpriteMaterial: yh,
  SrcAlphaFactor: Kl,
  SrcAlphaSaturateFactor: uf,
  SrcColorFactor: rf,
  StaticCopyUsage: Gm,
  StaticDrawUsage: Yr,
  StaticReadUsage: Hm,
  StereoCamera: dM,
  StreamCopyUsage: Xm,
  StreamDrawUsage: zm,
  StreamReadUsage: Vm,
  StringKeyframeTrack: ps,
  SubtractEquation: ef,
  SubtractiveBlending: ll,
  TOUCH: gm,
  TangentSpaceNormalMap: Ri,
  TetrahedronGeometry: Qa,
  Texture: ft,
  TextureLoader: Dh,
  TorusGeometry: ec,
  TorusKnotGeometry: tc,
  Triangle: qt,
  TriangleFanDrawMode: xa,
  TriangleStripDrawMode: oh,
  TrianglesDrawMode: Ff,
  TubeGeometry: nc,
  TwoPassDoubleSide: xm,
  UVMapping: Ra,
  Uint16BufferAttribute: dh,
  Uint32BufferAttribute: fh,
  Uint8BufferAttribute: Rg,
  Uint8ClampedBufferAttribute: Cg,
  Uniform: Wh,
  UniformsGroup: PM,
  UniformsLib: le,
  UniformsUtils: Sa,
  UnsignedByteType: ni,
  UnsignedInt248Type: Mi,
  UnsignedIntType: jn,
  UnsignedShort4444Type: eh,
  UnsignedShort5551Type: th,
  UnsignedShortType: La,
  VSMShadowMap: Un,
  Vector2: j,
  Vector3: w,
  Vector4: it,
  VectorKeyframeTrack: as,
  VideoTexture: _v,
  WebGL1Renderer: dp,
  WebGL3DRenderTarget: gg,
  WebGLArrayRenderTarget: mg,
  WebGLCoordinateSystem: On,
  WebGLCubeRenderTarget: ip,
  WebGLMultipleRenderTargets: _g,
  WebGLRenderTarget: pn,
  WebGLRenderer: _h,
  WebGLUtils: lp,
  WebGPUCoordinateSystem: qr,
  WireframeGeometry: bp,
  WrapAroundEnding: Xr,
  ZeroCurvatureEnding: Ki,
  ZeroFactor: nf,
  ZeroSlopeEnding: Ji,
  ZeroStencilOp: Tm,
  _SRGBAFormat: va,
  sRGBEncoding: Ei
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * camera-controls
 * https://github.com/yomotsu/camera-controls
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */
const Oe = {
  LEFT: 1,
  RIGHT: 2,
  MIDDLE: 4
}, Z = Object.freeze({
  NONE: 0,
  ROTATE: 1,
  TRUCK: 2,
  OFFSET: 4,
  DOLLY: 8,
  ZOOM: 16,
  TOUCH_ROTATE: 32,
  TOUCH_TRUCK: 64,
  TOUCH_OFFSET: 128,
  TOUCH_DOLLY: 256,
  TOUCH_ZOOM: 512,
  TOUCH_DOLLY_TRUCK: 1024,
  TOUCH_DOLLY_OFFSET: 2048,
  TOUCH_DOLLY_ROTATE: 4096,
  TOUCH_ZOOM_TRUCK: 8192,
  TOUCH_ZOOM_OFFSET: 16384,
  TOUCH_ZOOM_ROTATE: 32768
}), Bs = {
  NONE: 0,
  IN: 1,
  OUT: -1
};
function Gi(r) {
  return r.isPerspectiveCamera;
}
function yi(r) {
  return r.isOrthographicCamera;
}
const zs = Math.PI * 2, Ad = Math.PI / 2, jp = 1e-5, Rr = Math.PI / 180;
function In(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function at(r, e = jp) {
  return Math.abs(r) < e;
}
function st(r, e, t = jp) {
  return at(r - e, t);
}
function wd(r, e) {
  return Math.round(r / e) * e;
}
function Cr(r) {
  return isFinite(r) ? r : r < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function Lr(r) {
  return Math.abs(r) < Number.MAX_VALUE ? r : r * (1 / 0);
}
function ra(r, e, t, n, i = 1 / 0, s) {
  n = Math.max(1e-4, n);
  const o = 2 / n, a = o * s, c = 1 / (1 + a + 0.48 * a * a + 0.235 * a * a * a);
  let l = r - e;
  const h = e, u = i * n;
  l = In(l, -u, u), e = r - l;
  const d = (t.value + o * l) * s;
  t.value = (t.value - o * d) * c;
  let f = e + (l + d) * c;
  return h - r > 0 == f > h && (f = h, t.value = (f - h) / s), f;
}
function Rd(r, e, t, n, i = 1 / 0, s, o) {
  n = Math.max(1e-4, n);
  const a = 2 / n, c = a * s, l = 1 / (1 + c + 0.48 * c * c + 0.235 * c * c * c);
  let h = e.x, u = e.y, d = e.z, f = r.x - h, m = r.y - u, _ = r.z - d;
  const g = h, p = u, v = d, x = i * n, y = x * x, S = f * f + m * m + _ * _;
  if (S > y) {
    const N = Math.sqrt(S);
    f = f / N * x, m = m / N * x, _ = _ / N * x;
  }
  h = r.x - f, u = r.y - m, d = r.z - _;
  const E = (t.x + a * f) * s, T = (t.y + a * m) * s, R = (t.z + a * _) * s;
  t.x = (t.x - a * E) * l, t.y = (t.y - a * T) * l, t.z = (t.z - a * R) * l, o.x = h + (f + E) * l, o.y = u + (m + T) * l, o.z = d + (_ + R) * l;
  const M = g - r.x, b = p - r.y, U = v - r.z, k = o.x - g, D = o.y - p, F = o.z - v;
  return M * k + b * D + U * F > 0 && (o.x = g, o.y = p, o.z = v, t.x = (o.x - g) / s, t.y = (o.y - p) / s, t.z = (o.z - v) / s), o;
}
function Xc(r, e) {
  e.set(0, 0), r.forEach((t) => {
    e.x += t.clientX, e.y += t.clientY;
  }), e.x /= r.length, e.y /= r.length;
}
function Yc(r, e) {
  return yi(r) ? (console.warn(`${e} is not supported in OrthographicCamera`), !0) : !1;
}
class QM {
  constructor() {
    this._listeners = {};
  }
  addEventListener(e, t) {
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  removeAllEventListeners(e) {
    if (!e) {
      this._listeners = {};
      return;
    }
    Array.isArray(this._listeners[e]) && (this._listeners[e].length = 0);
  }
  dispatchEvent(e) {
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++)
        i[s].call(this, e);
    }
  }
}
const eS = "2.7.0", oa = 1 / 8, Qp = typeof window < "u", tS = Qp && /Mac/.test(navigator.platform), nS = !(Qp && "PointerEvent" in window);
let Pe, Cd, aa, qc, Xt, ke, tt, Hs, Pr, Ln, Pn, Wi, Ld, Pd, on, Ir, ks, Id, $c, Ud, Zc, Kc, ca;
class un extends QM {
  static install(e) {
    Pe = e.THREE, Cd = Object.freeze(new Pe.Vector3(0, 0, 0)), aa = Object.freeze(new Pe.Vector3(0, 1, 0)), qc = Object.freeze(new Pe.Vector3(0, 0, 1)), Xt = new Pe.Vector2(), ke = new Pe.Vector3(), tt = new Pe.Vector3(), Hs = new Pe.Vector3(), Pr = new Pe.Vector3(), Ln = new Pe.Vector3(), Pn = new Pe.Vector3(), Wi = new Pe.Vector3(), Ld = new Pe.Vector3(), Pd = new Pe.Vector3(), on = new Pe.Spherical(), Ir = new Pe.Spherical(), ks = new Pe.Box3(), Id = new Pe.Box3(), $c = new Pe.Sphere(), Ud = new Pe.Quaternion(), Zc = new Pe.Quaternion(), Kc = new Pe.Matrix4(), ca = new Pe.Raycaster();
  }
  static get ACTION() {
    return Z;
  }
  constructor(e, t) {
    super(), this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.minDistance = Number.EPSILON, this.maxDistance = 1 / 0, this.infinityDolly = !1, this.minZoom = 0.01, this.maxZoom = 1 / 0, this.smoothTime = 0.25, this.draggingSmoothTime = 0.125, this.maxSpeed = 1 / 0, this.azimuthRotateSpeed = 1, this.polarRotateSpeed = 1, this.dollySpeed = 1, this.dollyDragInverted = !1, this.truckSpeed = 2, this.dollyToCursor = !1, this.dragToOffset = !1, this.verticalDragToForward = !1, this.boundaryFriction = 0, this.restThreshold = 0.01, this.colliderMeshes = [], this.cancel = () => {
    }, this._enabled = !0, this._state = Z.NONE, this._viewport = null, this._changedDolly = 0, this._changedZoom = 0, this._hasRested = !0, this._boundaryEnclosesCamera = !1, this._needsUpdate = !0, this._updatedLastTime = !1, this._elementRect = new DOMRect(), this._isDragging = !1, this._activePointers = [], this._lockedPointer = null, this._interactiveArea = new DOMRect(0, 0, 1, 1), this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._isUserControllingOffset = !1, this._isUserControllingZoom = !1, this._lastDollyDirection = Bs.NONE, this._thetaVelocity = { value: 0 }, this._phiVelocity = { value: 0 }, this._radiusVelocity = { value: 0 }, this._targetVelocity = new Pe.Vector3(), this._focalOffsetVelocity = new Pe.Vector3(), this._zoomVelocity = { value: 0 }, this._truckInternal = (y, S, E) => {
      let T, R;
      if (Gi(this._camera)) {
        const M = ke.copy(this._camera.position).sub(this._target), b = this._camera.getEffectiveFOV() * Rr, U = M.length() * Math.tan(b * 0.5);
        T = this.truckSpeed * y * U / this._elementRect.height, R = this.truckSpeed * S * U / this._elementRect.height;
      } else if (yi(this._camera)) {
        const M = this._camera;
        T = y * (M.right - M.left) / M.zoom / this._elementRect.width, R = S * (M.top - M.bottom) / M.zoom / this._elementRect.height;
      } else
        return;
      this.verticalDragToForward ? (E ? this.setFocalOffset(this._focalOffsetEnd.x + T, this._focalOffsetEnd.y, this._focalOffsetEnd.z, !0) : this.truck(T, 0, !0), this.forward(-R, !0)) : E ? this.setFocalOffset(this._focalOffsetEnd.x + T, this._focalOffsetEnd.y + R, this._focalOffsetEnd.z, !0) : this.truck(T, R, !0);
    }, this._rotateInternal = (y, S) => {
      const E = zs * this.azimuthRotateSpeed * y / this._elementRect.height, T = zs * this.polarRotateSpeed * S / this._elementRect.height;
      this.rotate(E, T, !0);
    }, this._dollyInternal = (y, S, E) => {
      const T = Math.pow(0.95, -y * this.dollySpeed), R = this._sphericalEnd.radius, M = this._sphericalEnd.radius * T, b = Pe.MathUtils.clamp(M, this.minDistance, this.maxDistance), U = b - M;
      this.infinityDolly && this.dollyToCursor ? this._dollyToNoClamp(M, !0) : this.infinityDolly && !this.dollyToCursor ? (this.dollyInFixed(U, !0), this._dollyToNoClamp(b, !0)) : this._dollyToNoClamp(b, !0), this.dollyToCursor && (this._changedDolly += (this.infinityDolly ? M : b) - R, this._dollyControlCoord.set(S, E)), this._lastDollyDirection = Math.sign(-y);
    }, this._zoomInternal = (y, S, E) => {
      const T = Math.pow(0.95, y * this.dollySpeed), R = this._zoom, M = this._zoom * T;
      this.zoomTo(M, !0), this.dollyToCursor && (this._changedZoom += M - R, this._dollyControlCoord.set(S, E));
    }, typeof Pe > "u" && console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."), this._camera = e, this._yAxisUpSpace = new Pe.Quaternion().setFromUnitVectors(this._camera.up, aa), this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert(), this._state = Z.NONE, this._target = new Pe.Vector3(), this._targetEnd = this._target.clone(), this._focalOffset = new Pe.Vector3(), this._focalOffsetEnd = this._focalOffset.clone(), this._spherical = new Pe.Spherical().setFromVector3(ke.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)), this._sphericalEnd = this._spherical.clone(), this._lastDistance = this._spherical.radius, this._zoom = this._camera.zoom, this._zoomEnd = this._zoom, this._lastZoom = this._zoom, this._nearPlaneCorners = [
      new Pe.Vector3(),
      new Pe.Vector3(),
      new Pe.Vector3(),
      new Pe.Vector3()
    ], this._updateNearPlaneCorners(), this._boundary = new Pe.Box3(new Pe.Vector3(-1 / 0, -1 / 0, -1 / 0), new Pe.Vector3(1 / 0, 1 / 0, 1 / 0)), this._cameraUp0 = this._camera.up.clone(), this._target0 = this._target.clone(), this._position0 = this._camera.position.clone(), this._zoom0 = this._zoom, this._focalOffset0 = this._focalOffset.clone(), this._dollyControlCoord = new Pe.Vector2(), this.mouseButtons = {
      left: Z.ROTATE,
      middle: Z.DOLLY,
      right: Z.TRUCK,
      wheel: Gi(this._camera) ? Z.DOLLY : yi(this._camera) ? Z.ZOOM : Z.NONE
    }, this.touches = {
      one: Z.TOUCH_ROTATE,
      two: Gi(this._camera) ? Z.TOUCH_DOLLY_TRUCK : yi(this._camera) ? Z.TOUCH_ZOOM_TRUCK : Z.NONE,
      three: Z.TOUCH_TRUCK
    };
    const n = new Pe.Vector2(), i = new Pe.Vector2(), s = new Pe.Vector2(), o = (y) => {
      if (!this._enabled || !this._domElement)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const T = this._domElement.getBoundingClientRect(), R = y.clientX / T.width, M = y.clientY / T.height;
        if (R < this._interactiveArea.left || R > this._interactiveArea.right || M < this._interactiveArea.top || M > this._interactiveArea.bottom)
          return;
      }
      const S = y.pointerType !== "mouse" ? null : (y.buttons & Oe.LEFT) === Oe.LEFT ? Oe.LEFT : (y.buttons & Oe.MIDDLE) === Oe.MIDDLE ? Oe.MIDDLE : (y.buttons & Oe.RIGHT) === Oe.RIGHT ? Oe.RIGHT : null;
      if (S !== null) {
        const T = this._findPointerByMouseButton(S);
        T && this._disposePointer(T);
      }
      if ((y.buttons & Oe.LEFT) === Oe.LEFT && this._lockedPointer)
        return;
      const E = {
        pointerId: y.pointerId,
        clientX: y.clientX,
        clientY: y.clientY,
        deltaX: 0,
        deltaY: 0,
        mouseButton: S
      };
      this._activePointers.push(E), this._domElement.ownerDocument.removeEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", h), this._domElement.ownerDocument.addEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.addEventListener("pointerup", h), this._isDragging = !0, _(y);
    }, a = (y) => {
      if (!this._enabled || !this._domElement || this._lockedPointer)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const T = this._domElement.getBoundingClientRect(), R = y.clientX / T.width, M = y.clientY / T.height;
        if (R < this._interactiveArea.left || R > this._interactiveArea.right || M < this._interactiveArea.top || M > this._interactiveArea.bottom)
          return;
      }
      const S = (y.buttons & Oe.LEFT) === Oe.LEFT ? Oe.LEFT : (y.buttons & Oe.MIDDLE) === Oe.MIDDLE ? Oe.MIDDLE : (y.buttons & Oe.RIGHT) === Oe.RIGHT ? Oe.RIGHT : null;
      if (S !== null) {
        const T = this._findPointerByMouseButton(S);
        T && this._disposePointer(T);
      }
      const E = {
        pointerId: 1,
        clientX: y.clientX,
        clientY: y.clientY,
        deltaX: 0,
        deltaY: 0,
        mouseButton: (y.buttons & Oe.LEFT) === Oe.LEFT ? Oe.LEFT : (y.buttons & Oe.MIDDLE) === Oe.LEFT ? Oe.MIDDLE : (y.buttons & Oe.RIGHT) === Oe.LEFT ? Oe.RIGHT : null
      };
      this._activePointers.push(E), this._domElement.ownerDocument.removeEventListener("mousemove", l), this._domElement.ownerDocument.removeEventListener("mouseup", u), this._domElement.ownerDocument.addEventListener("mousemove", l), this._domElement.ownerDocument.addEventListener("mouseup", u), this._isDragging = !0, _(y);
    }, c = (y) => {
      y.cancelable && y.preventDefault();
      const S = y.pointerId, E = this._lockedPointer || this._findPointerById(S);
      if (!!E) {
        if (E.clientX = y.clientX, E.clientY = y.clientY, E.deltaX = y.movementX, E.deltaY = y.movementY, this._state = 0, y.pointerType === "touch")
          switch (this._activePointers.length) {
            case 1:
              this._state = this.touches.one;
              break;
            case 2:
              this._state = this.touches.two;
              break;
            case 3:
              this._state = this.touches.three;
              break;
          }
        else
          (!this._isDragging && this._lockedPointer || this._isDragging && (y.buttons & Oe.LEFT) === Oe.LEFT) && (this._state = this._state | this.mouseButtons.left), this._isDragging && (y.buttons & Oe.MIDDLE) === Oe.MIDDLE && (this._state = this._state | this.mouseButtons.middle), this._isDragging && (y.buttons & Oe.RIGHT) === Oe.RIGHT && (this._state = this._state | this.mouseButtons.right);
        g();
      }
    }, l = (y) => {
      const S = this._lockedPointer || this._findPointerById(1);
      !S || (S.clientX = y.clientX, S.clientY = y.clientY, S.deltaX = y.movementX, S.deltaY = y.movementY, this._state = 0, (this._lockedPointer || (y.buttons & Oe.LEFT) === Oe.LEFT) && (this._state = this._state | this.mouseButtons.left), (y.buttons & Oe.MIDDLE) === Oe.MIDDLE && (this._state = this._state | this.mouseButtons.middle), (y.buttons & Oe.RIGHT) === Oe.RIGHT && (this._state = this._state | this.mouseButtons.right), g());
    }, h = (y) => {
      const S = this._findPointerById(y.pointerId);
      if (!(S && S === this._lockedPointer)) {
        if (S && this._disposePointer(S), y.pointerType === "touch")
          switch (this._activePointers.length) {
            case 0:
              this._state = Z.NONE;
              break;
            case 1:
              this._state = this.touches.one;
              break;
            case 2:
              this._state = this.touches.two;
              break;
            case 3:
              this._state = this.touches.three;
              break;
          }
        else
          this._state = Z.NONE;
        p();
      }
    }, u = () => {
      const y = this._findPointerById(1);
      y && y === this._lockedPointer || (y && this._disposePointer(y), this._state = Z.NONE, p());
    };
    let d = -1;
    const f = (y) => {
      if (!this._domElement || !this._enabled || this.mouseButtons.wheel === Z.NONE)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const M = this._domElement.getBoundingClientRect(), b = y.clientX / M.width, U = y.clientY / M.height;
        if (b < this._interactiveArea.left || b > this._interactiveArea.right || U < this._interactiveArea.top || U > this._interactiveArea.bottom)
          return;
      }
      if (y.preventDefault(), this.dollyToCursor || this.mouseButtons.wheel === Z.ROTATE || this.mouseButtons.wheel === Z.TRUCK) {
        const M = performance.now();
        d - M < 1e3 && this._getClientRect(this._elementRect), d = M;
      }
      const S = tS ? -1 : -3, E = y.deltaMode === 1 ? y.deltaY / S : y.deltaY / (S * 10), T = this.dollyToCursor ? (y.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, R = this.dollyToCursor ? (y.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
      switch (this.mouseButtons.wheel) {
        case Z.ROTATE: {
          this._rotateInternal(y.deltaX, y.deltaY), this._isUserControllingRotate = !0;
          break;
        }
        case Z.TRUCK: {
          this._truckInternal(y.deltaX, y.deltaY, !1), this._isUserControllingTruck = !0;
          break;
        }
        case Z.OFFSET: {
          this._truckInternal(y.deltaX, y.deltaY, !0), this._isUserControllingOffset = !0;
          break;
        }
        case Z.DOLLY: {
          this._dollyInternal(-E, T, R), this._isUserControllingDolly = !0;
          break;
        }
        case Z.ZOOM: {
          this._zoomInternal(-E, T, R), this._isUserControllingZoom = !0;
          break;
        }
      }
      this.dispatchEvent({ type: "control" });
    }, m = (y) => {
      if (!(!this._domElement || !this._enabled)) {
        if (this.mouseButtons.right === un.ACTION.NONE) {
          const S = y instanceof PointerEvent ? y.pointerId : (y instanceof MouseEvent, 0), E = this._findPointerById(S);
          E && this._disposePointer(E), this._domElement.ownerDocument.removeEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", h), this._domElement.ownerDocument.removeEventListener("mousemove", l), this._domElement.ownerDocument.removeEventListener("mouseup", u);
          return;
        }
        y.preventDefault();
      }
    }, _ = (y) => {
      if (!this._enabled)
        return;
      if (Xc(this._activePointers, Xt), this._getClientRect(this._elementRect), n.copy(Xt), i.copy(Xt), this._activePointers.length >= 2) {
        const E = Xt.x - this._activePointers[1].clientX, T = Xt.y - this._activePointers[1].clientY, R = Math.sqrt(E * E + T * T);
        s.set(0, R);
        const M = (this._activePointers[0].clientX + this._activePointers[1].clientX) * 0.5, b = (this._activePointers[0].clientY + this._activePointers[1].clientY) * 0.5;
        i.set(M, b);
      }
      if (this._state = 0, !y)
        this._lockedPointer && (this._state = this._state | this.mouseButtons.left);
      else if ("pointerType" in y && y.pointerType === "touch")
        switch (this._activePointers.length) {
          case 1:
            this._state = this.touches.one;
            break;
          case 2:
            this._state = this.touches.two;
            break;
          case 3:
            this._state = this.touches.three;
            break;
        }
      else
        !this._lockedPointer && (y.buttons & Oe.LEFT) === Oe.LEFT && (this._state = this._state | this.mouseButtons.left), (y.buttons & Oe.MIDDLE) === Oe.MIDDLE && (this._state = this._state | this.mouseButtons.middle), (y.buttons & Oe.RIGHT) === Oe.RIGHT && (this._state = this._state | this.mouseButtons.right);
      ((this._state & Z.ROTATE) === Z.ROTATE || (this._state & Z.TOUCH_ROTATE) === Z.TOUCH_ROTATE || (this._state & Z.TOUCH_DOLLY_ROTATE) === Z.TOUCH_DOLLY_ROTATE || (this._state & Z.TOUCH_ZOOM_ROTATE) === Z.TOUCH_ZOOM_ROTATE) && (this._sphericalEnd.theta = this._spherical.theta, this._sphericalEnd.phi = this._spherical.phi, this._thetaVelocity.value = 0, this._phiVelocity.value = 0), ((this._state & Z.TRUCK) === Z.TRUCK || (this._state & Z.TOUCH_TRUCK) === Z.TOUCH_TRUCK || (this._state & Z.TOUCH_DOLLY_TRUCK) === Z.TOUCH_DOLLY_TRUCK || (this._state & Z.TOUCH_ZOOM_TRUCK) === Z.TOUCH_ZOOM_TRUCK) && (this._targetEnd.copy(this._target), this._targetVelocity.set(0, 0, 0)), ((this._state & Z.DOLLY) === Z.DOLLY || (this._state & Z.TOUCH_DOLLY) === Z.TOUCH_DOLLY || (this._state & Z.TOUCH_DOLLY_TRUCK) === Z.TOUCH_DOLLY_TRUCK || (this._state & Z.TOUCH_DOLLY_OFFSET) === Z.TOUCH_DOLLY_OFFSET || (this._state & Z.TOUCH_DOLLY_ROTATE) === Z.TOUCH_DOLLY_ROTATE) && (this._sphericalEnd.radius = this._spherical.radius, this._radiusVelocity.value = 0), ((this._state & Z.ZOOM) === Z.ZOOM || (this._state & Z.TOUCH_ZOOM) === Z.TOUCH_ZOOM || (this._state & Z.TOUCH_ZOOM_TRUCK) === Z.TOUCH_ZOOM_TRUCK || (this._state & Z.TOUCH_ZOOM_OFFSET) === Z.TOUCH_ZOOM_OFFSET || (this._state & Z.TOUCH_ZOOM_ROTATE) === Z.TOUCH_ZOOM_ROTATE) && (this._zoomEnd = this._zoom, this._zoomVelocity.value = 0), ((this._state & Z.OFFSET) === Z.OFFSET || (this._state & Z.TOUCH_OFFSET) === Z.TOUCH_OFFSET || (this._state & Z.TOUCH_DOLLY_OFFSET) === Z.TOUCH_DOLLY_OFFSET || (this._state & Z.TOUCH_ZOOM_OFFSET) === Z.TOUCH_ZOOM_OFFSET) && (this._focalOffsetEnd.copy(this._focalOffset), this._focalOffsetVelocity.set(0, 0, 0)), this.dispatchEvent({ type: "controlstart" });
    }, g = () => {
      if (!this._enabled)
        return;
      Xc(this._activePointers, Xt);
      const S = this._domElement && document.pointerLockElement === this._domElement ? this._lockedPointer || this._activePointers[0] : null, E = S ? -S.deltaX : i.x - Xt.x, T = S ? -S.deltaY : i.y - Xt.y;
      if (i.copy(Xt), ((this._state & Z.ROTATE) === Z.ROTATE || (this._state & Z.TOUCH_ROTATE) === Z.TOUCH_ROTATE || (this._state & Z.TOUCH_DOLLY_ROTATE) === Z.TOUCH_DOLLY_ROTATE || (this._state & Z.TOUCH_ZOOM_ROTATE) === Z.TOUCH_ZOOM_ROTATE) && (this._rotateInternal(E, T), this._isUserControllingRotate = !0), (this._state & Z.DOLLY) === Z.DOLLY || (this._state & Z.ZOOM) === Z.ZOOM) {
        const R = this.dollyToCursor ? (n.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, M = this.dollyToCursor ? (n.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0, b = this.dollyDragInverted ? -1 : 1;
        (this._state & Z.DOLLY) === Z.DOLLY ? (this._dollyInternal(b * T * oa, R, M), this._isUserControllingDolly = !0) : (this._zoomInternal(b * T * oa, R, M), this._isUserControllingZoom = !0);
      }
      if ((this._state & Z.TOUCH_DOLLY) === Z.TOUCH_DOLLY || (this._state & Z.TOUCH_ZOOM) === Z.TOUCH_ZOOM || (this._state & Z.TOUCH_DOLLY_TRUCK) === Z.TOUCH_DOLLY_TRUCK || (this._state & Z.TOUCH_ZOOM_TRUCK) === Z.TOUCH_ZOOM_TRUCK || (this._state & Z.TOUCH_DOLLY_OFFSET) === Z.TOUCH_DOLLY_OFFSET || (this._state & Z.TOUCH_ZOOM_OFFSET) === Z.TOUCH_ZOOM_OFFSET || (this._state & Z.TOUCH_DOLLY_ROTATE) === Z.TOUCH_DOLLY_ROTATE || (this._state & Z.TOUCH_ZOOM_ROTATE) === Z.TOUCH_ZOOM_ROTATE) {
        const R = Xt.x - this._activePointers[1].clientX, M = Xt.y - this._activePointers[1].clientY, b = Math.sqrt(R * R + M * M), U = s.y - b;
        s.set(0, b);
        const k = this.dollyToCursor ? (i.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, D = this.dollyToCursor ? (i.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
        (this._state & Z.TOUCH_DOLLY) === Z.TOUCH_DOLLY || (this._state & Z.TOUCH_DOLLY_ROTATE) === Z.TOUCH_DOLLY_ROTATE || (this._state & Z.TOUCH_DOLLY_TRUCK) === Z.TOUCH_DOLLY_TRUCK || (this._state & Z.TOUCH_DOLLY_OFFSET) === Z.TOUCH_DOLLY_OFFSET ? (this._dollyInternal(U * oa, k, D), this._isUserControllingDolly = !0) : (this._zoomInternal(U * oa, k, D), this._isUserControllingZoom = !0);
      }
      ((this._state & Z.TRUCK) === Z.TRUCK || (this._state & Z.TOUCH_TRUCK) === Z.TOUCH_TRUCK || (this._state & Z.TOUCH_DOLLY_TRUCK) === Z.TOUCH_DOLLY_TRUCK || (this._state & Z.TOUCH_ZOOM_TRUCK) === Z.TOUCH_ZOOM_TRUCK) && (this._truckInternal(E, T, !1), this._isUserControllingTruck = !0), ((this._state & Z.OFFSET) === Z.OFFSET || (this._state & Z.TOUCH_OFFSET) === Z.TOUCH_OFFSET || (this._state & Z.TOUCH_DOLLY_OFFSET) === Z.TOUCH_DOLLY_OFFSET || (this._state & Z.TOUCH_ZOOM_OFFSET) === Z.TOUCH_ZOOM_OFFSET) && (this._truckInternal(E, T, !0), this._isUserControllingOffset = !0), this.dispatchEvent({ type: "control" });
    }, p = () => {
      Xc(this._activePointers, Xt), i.copy(Xt), (this._activePointers.length === 0 || this._activePointers.length === 1 && this._activePointers[0] === this._lockedPointer) && (this._isDragging = !1), this._activePointers.length === 0 && this._domElement && (this._domElement.ownerDocument.removeEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("mousemove", l), this._domElement.ownerDocument.removeEventListener("pointerup", h), this._domElement.ownerDocument.removeEventListener("mouseup", u), this.dispatchEvent({ type: "controlend" }));
    };
    this.lockPointer = () => {
      !this._enabled || !this._domElement || (this.cancel(), this._lockedPointer = {
        pointerId: -1,
        clientX: 0,
        clientY: 0,
        deltaX: 0,
        deltaY: 0,
        mouseButton: null
      }, this._activePointers.push(this._lockedPointer), this._domElement.ownerDocument.removeEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", h), this._domElement.requestPointerLock(), this._domElement.ownerDocument.addEventListener("pointerlockchange", v), this._domElement.ownerDocument.addEventListener("pointerlockerror", x), this._domElement.ownerDocument.addEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.addEventListener("pointerup", h), _());
    }, this.unlockPointer = () => {
      this._lockedPointer !== null && (this._disposePointer(this._lockedPointer), this._lockedPointer = null), document.exitPointerLock(), this.cancel(), this._domElement && (this._domElement.ownerDocument.removeEventListener("pointerlockchange", v), this._domElement.ownerDocument.removeEventListener("pointerlockerror", x));
    };
    const v = () => {
      this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement || this.unlockPointer();
    }, x = () => {
      this.unlockPointer();
    };
    this._addAllEventListeners = (y) => {
      this._domElement = y, this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none", this._domElement.addEventListener("pointerdown", o), nS && this._domElement.addEventListener("mousedown", a), this._domElement.addEventListener("pointercancel", h), this._domElement.addEventListener("wheel", f, { passive: !1 }), this._domElement.addEventListener("contextmenu", m);
    }, this._removeAllEventListeners = () => {
      !this._domElement || (this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = "", this._domElement.removeEventListener("pointerdown", o), this._domElement.removeEventListener("mousedown", a), this._domElement.removeEventListener("pointercancel", h), this._domElement.removeEventListener("wheel", f, { passive: !1 }), this._domElement.removeEventListener("contextmenu", m), this._domElement.ownerDocument.removeEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("mousemove", l), this._domElement.ownerDocument.removeEventListener("pointerup", h), this._domElement.ownerDocument.removeEventListener("mouseup", u), this._domElement.ownerDocument.removeEventListener("pointerlockchange", v), this._domElement.ownerDocument.removeEventListener("pointerlockerror", x));
    }, this.cancel = () => {
      this._state !== Z.NONE && (this._state = Z.NONE, this._activePointers.length = 0, p());
    }, t && this.connect(t), this.update(0);
  }
  get camera() {
    return this._camera;
  }
  set camera(e) {
    this._camera = e, this.updateCameraUp(), this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = !0;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    this._enabled = e, this._domElement && (e ? (this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none") : (this.cancel(), this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = ""));
  }
  get active() {
    return !this._hasRested;
  }
  get currentAction() {
    return this._state;
  }
  get distance() {
    return this._spherical.radius;
  }
  set distance(e) {
    this._spherical.radius === e && this._sphericalEnd.radius === e || (this._spherical.radius = e, this._sphericalEnd.radius = e, this._needsUpdate = !0);
  }
  get azimuthAngle() {
    return this._spherical.theta;
  }
  set azimuthAngle(e) {
    this._spherical.theta === e && this._sphericalEnd.theta === e || (this._spherical.theta = e, this._sphericalEnd.theta = e, this._needsUpdate = !0);
  }
  get polarAngle() {
    return this._spherical.phi;
  }
  set polarAngle(e) {
    this._spherical.phi === e && this._sphericalEnd.phi === e || (this._spherical.phi = e, this._sphericalEnd.phi = e, this._needsUpdate = !0);
  }
  get boundaryEnclosesCamera() {
    return this._boundaryEnclosesCamera;
  }
  set boundaryEnclosesCamera(e) {
    this._boundaryEnclosesCamera = e, this._needsUpdate = !0;
  }
  set interactiveArea(e) {
    this._interactiveArea.width = In(e.width, 0, 1), this._interactiveArea.height = In(e.height, 0, 1), this._interactiveArea.x = In(e.x, 0, 1 - this._interactiveArea.width), this._interactiveArea.y = In(e.x, 0, 1 - this._interactiveArea.height);
  }
  addEventListener(e, t) {
    super.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    super.removeEventListener(e, t);
  }
  rotate(e, t, n = !1) {
    return this.rotateTo(this._sphericalEnd.theta + e, this._sphericalEnd.phi + t, n);
  }
  rotateAzimuthTo(e, t = !1) {
    return this.rotateTo(e, this._sphericalEnd.phi, t);
  }
  rotatePolarTo(e, t = !1) {
    return this.rotateTo(this._sphericalEnd.theta, e, t);
  }
  rotateTo(e, t, n = !1) {
    this._isUserControllingRotate = !1;
    const i = In(e, this.minAzimuthAngle, this.maxAzimuthAngle), s = In(t, this.minPolarAngle, this.maxPolarAngle);
    this._sphericalEnd.theta = i, this._sphericalEnd.phi = s, this._sphericalEnd.makeSafe(), this._needsUpdate = !0, n || (this._spherical.theta = this._sphericalEnd.theta, this._spherical.phi = this._sphericalEnd.phi);
    const o = !n || st(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && st(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
    return this._createOnRestPromise(o);
  }
  dolly(e, t = !1) {
    return this.dollyTo(this._sphericalEnd.radius - e, t);
  }
  dollyTo(e, t = !1) {
    return this._isUserControllingDolly = !1, this._lastDollyDirection = Bs.NONE, this._changedDolly = 0, this._dollyToNoClamp(In(e, this.minDistance, this.maxDistance), t);
  }
  _dollyToNoClamp(e, t = !1) {
    const n = this._sphericalEnd.radius;
    if (this.colliderMeshes.length >= 1) {
      const o = this._collisionTest(), a = st(o, this._spherical.radius);
      if (!(n > e) && a)
        return Promise.resolve();
      this._sphericalEnd.radius = Math.min(e, o);
    } else
      this._sphericalEnd.radius = e;
    this._needsUpdate = !0, t || (this._spherical.radius = this._sphericalEnd.radius);
    const s = !t || st(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(s);
  }
  dollyInFixed(e, t = !1) {
    this._targetEnd.add(this._getCameraDirection(Pr).multiplyScalar(e)), t || this._target.copy(this._targetEnd);
    const n = !t || st(this._target.x, this._targetEnd.x, this.restThreshold) && st(this._target.y, this._targetEnd.y, this.restThreshold) && st(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(n);
  }
  zoom(e, t = !1) {
    return this.zoomTo(this._zoomEnd + e, t);
  }
  zoomTo(e, t = !1) {
    this._isUserControllingZoom = !1, this._zoomEnd = In(e, this.minZoom, this.maxZoom), this._needsUpdate = !0, t || (this._zoom = this._zoomEnd);
    const n = !t || st(this._zoom, this._zoomEnd, this.restThreshold);
    return this._changedZoom = 0, this._createOnRestPromise(n);
  }
  pan(e, t, n = !1) {
    return console.warn("`pan` has been renamed to `truck`"), this.truck(e, t, n);
  }
  truck(e, t, n = !1) {
    this._camera.updateMatrix(), Ln.setFromMatrixColumn(this._camera.matrix, 0), Pn.setFromMatrixColumn(this._camera.matrix, 1), Ln.multiplyScalar(e), Pn.multiplyScalar(-t);
    const i = ke.copy(Ln).add(Pn), s = tt.copy(this._targetEnd).add(i);
    return this.moveTo(s.x, s.y, s.z, n);
  }
  forward(e, t = !1) {
    ke.setFromMatrixColumn(this._camera.matrix, 0), ke.crossVectors(this._camera.up, ke), ke.multiplyScalar(e);
    const n = tt.copy(this._targetEnd).add(ke);
    return this.moveTo(n.x, n.y, n.z, t);
  }
  elevate(e, t = !1) {
    return ke.copy(this._camera.up).multiplyScalar(e), this.moveTo(this._targetEnd.x + ke.x, this._targetEnd.y + ke.y, this._targetEnd.z + ke.z, t);
  }
  moveTo(e, t, n, i = !1) {
    this._isUserControllingTruck = !1;
    const s = ke.set(e, t, n).sub(this._targetEnd);
    this._encloseToBoundary(this._targetEnd, s, this.boundaryFriction), this._needsUpdate = !0, i || this._target.copy(this._targetEnd);
    const o = !i || st(this._target.x, this._targetEnd.x, this.restThreshold) && st(this._target.y, this._targetEnd.y, this.restThreshold) && st(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(o);
  }
  lookInDirectionOf(e, t, n, i = !1) {
    const a = ke.set(e, t, n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius);
    return this.setPosition(a.x, a.y, a.z, i);
  }
  fitToBox(e, t, { cover: n = !1, paddingLeft: i = 0, paddingRight: s = 0, paddingBottom: o = 0, paddingTop: a = 0 } = {}) {
    const c = [], l = e.isBox3 ? ks.copy(e) : ks.setFromObject(e);
    l.isEmpty() && (console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"), Promise.resolve());
    const h = wd(this._sphericalEnd.theta, Ad), u = wd(this._sphericalEnd.phi, Ad);
    c.push(this.rotateTo(h, u, t));
    const d = ke.setFromSpherical(this._sphericalEnd).normalize(), f = Ud.setFromUnitVectors(d, qc), m = st(Math.abs(d.y), 1);
    m && f.multiply(Zc.setFromAxisAngle(aa, h)), f.multiply(this._yAxisUpSpaceInverse);
    const _ = Id.makeEmpty();
    tt.copy(l.min).applyQuaternion(f), _.expandByPoint(tt), tt.copy(l.min).setX(l.max.x).applyQuaternion(f), _.expandByPoint(tt), tt.copy(l.min).setY(l.max.y).applyQuaternion(f), _.expandByPoint(tt), tt.copy(l.max).setZ(l.min.z).applyQuaternion(f), _.expandByPoint(tt), tt.copy(l.min).setZ(l.max.z).applyQuaternion(f), _.expandByPoint(tt), tt.copy(l.max).setY(l.min.y).applyQuaternion(f), _.expandByPoint(tt), tt.copy(l.max).setX(l.min.x).applyQuaternion(f), _.expandByPoint(tt), tt.copy(l.max).applyQuaternion(f), _.expandByPoint(tt), _.min.x -= i, _.min.y -= o, _.max.x += s, _.max.y += a, f.setFromUnitVectors(qc, d), m && f.premultiply(Zc.invert()), f.premultiply(this._yAxisUpSpace);
    const g = _.getSize(ke), p = _.getCenter(tt).applyQuaternion(f);
    if (Gi(this._camera)) {
      const v = this.getDistanceToFitBox(g.x, g.y, g.z, n);
      c.push(this.moveTo(p.x, p.y, p.z, t)), c.push(this.dollyTo(v, t)), c.push(this.setFocalOffset(0, 0, 0, t));
    } else if (yi(this._camera)) {
      const v = this._camera, x = v.right - v.left, y = v.top - v.bottom, S = n ? Math.max(x / g.x, y / g.y) : Math.min(x / g.x, y / g.y);
      c.push(this.moveTo(p.x, p.y, p.z, t)), c.push(this.zoomTo(S, t)), c.push(this.setFocalOffset(0, 0, 0, t));
    }
    return Promise.all(c);
  }
  fitToSphere(e, t) {
    const n = [], s = e instanceof Pe.Sphere ? $c.copy(e) : un.createBoundingSphere(e, $c);
    if (n.push(this.moveTo(s.center.x, s.center.y, s.center.z, t)), Gi(this._camera)) {
      const o = this.getDistanceToFitSphere(s.radius);
      n.push(this.dollyTo(o, t));
    } else if (yi(this._camera)) {
      const o = this._camera.right - this._camera.left, a = this._camera.top - this._camera.bottom, c = 2 * s.radius, l = Math.min(o / c, a / c);
      n.push(this.zoomTo(l, t));
    }
    return n.push(this.setFocalOffset(0, 0, 0, t)), Promise.all(n);
  }
  setLookAt(e, t, n, i, s, o, a = !1) {
    this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = Bs.NONE, this._changedDolly = 0;
    const c = tt.set(i, s, o), l = ke.set(e, t, n);
    this._targetEnd.copy(c), this._sphericalEnd.setFromVector3(l.sub(c).applyQuaternion(this._yAxisUpSpace)), this.normalizeRotations(), this._needsUpdate = !0, a || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
    const h = !a || st(this._target.x, this._targetEnd.x, this.restThreshold) && st(this._target.y, this._targetEnd.y, this.restThreshold) && st(this._target.z, this._targetEnd.z, this.restThreshold) && st(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && st(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && st(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(h);
  }
  lerpLookAt(e, t, n, i, s, o, a, c, l, h, u, d, f, m = !1) {
    this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = Bs.NONE, this._changedDolly = 0;
    const _ = ke.set(i, s, o), g = tt.set(e, t, n);
    on.setFromVector3(g.sub(_).applyQuaternion(this._yAxisUpSpace));
    const p = Hs.set(h, u, d), v = tt.set(a, c, l);
    Ir.setFromVector3(v.sub(p).applyQuaternion(this._yAxisUpSpace)), this._targetEnd.copy(_.lerp(p, f));
    const x = Ir.theta - on.theta, y = Ir.phi - on.phi, S = Ir.radius - on.radius;
    this._sphericalEnd.set(on.radius + S * f, on.phi + y * f, on.theta + x * f), this.normalizeRotations(), this._needsUpdate = !0, m || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
    const E = !m || st(this._target.x, this._targetEnd.x, this.restThreshold) && st(this._target.y, this._targetEnd.y, this.restThreshold) && st(this._target.z, this._targetEnd.z, this.restThreshold) && st(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && st(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && st(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(E);
  }
  setPosition(e, t, n, i = !1) {
    return this.setLookAt(e, t, n, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, i);
  }
  setTarget(e, t, n, i = !1) {
    const s = this.getPosition(ke), o = this.setLookAt(s.x, s.y, s.z, e, t, n, i);
    return this._sphericalEnd.phi = In(this._sphericalEnd.phi, this.minPolarAngle, this.maxPolarAngle), o;
  }
  setFocalOffset(e, t, n, i = !1) {
    this._isUserControllingOffset = !1, this._focalOffsetEnd.set(e, t, n), this._needsUpdate = !0, i || this._focalOffset.copy(this._focalOffsetEnd);
    const s = !i || st(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && st(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && st(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
    return this._createOnRestPromise(s);
  }
  setOrbitPoint(e, t, n) {
    this._camera.updateMatrixWorld(), Ln.setFromMatrixColumn(this._camera.matrixWorldInverse, 0), Pn.setFromMatrixColumn(this._camera.matrixWorldInverse, 1), Wi.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
    const i = ke.set(e, t, n), s = i.distanceTo(this._camera.position), o = i.sub(this._camera.position);
    Ln.multiplyScalar(o.x), Pn.multiplyScalar(o.y), Wi.multiplyScalar(o.z), ke.copy(Ln).add(Pn).add(Wi), ke.z = ke.z + s, this.dollyTo(s, !1), this.setFocalOffset(-ke.x, ke.y, -ke.z, !1), this.moveTo(e, t, n, !1);
  }
  setBoundary(e) {
    if (!e) {
      this._boundary.min.set(-1 / 0, -1 / 0, -1 / 0), this._boundary.max.set(1 / 0, 1 / 0, 1 / 0), this._needsUpdate = !0;
      return;
    }
    this._boundary.copy(e), this._boundary.clampPoint(this._targetEnd, this._targetEnd), this._needsUpdate = !0;
  }
  setViewport(e, t, n, i) {
    if (e === null) {
      this._viewport = null;
      return;
    }
    this._viewport = this._viewport || new Pe.Vector4(), typeof e == "number" ? this._viewport.set(e, t, n, i) : this._viewport.copy(e);
  }
  getDistanceToFitBox(e, t, n, i = !1) {
    if (Yc(this._camera, "getDistanceToFitBox"))
      return this._spherical.radius;
    const s = e / t, o = this._camera.getEffectiveFOV() * Rr, a = this._camera.aspect;
    return ((i ? s > a : s < a) ? t : e / a) * 0.5 / Math.tan(o * 0.5) + n * 0.5;
  }
  getDistanceToFitSphere(e) {
    if (Yc(this._camera, "getDistanceToFitSphere"))
      return this._spherical.radius;
    const t = this._camera.getEffectiveFOV() * Rr, n = Math.atan(Math.tan(t * 0.5) * this._camera.aspect) * 2, i = 1 < this._camera.aspect ? t : n;
    return e / Math.sin(i * 0.5);
  }
  getTarget(e, t = !0) {
    return (!!e && e.isVector3 ? e : new Pe.Vector3()).copy(t ? this._targetEnd : this._target);
  }
  getPosition(e, t = !0) {
    return (!!e && e.isVector3 ? e : new Pe.Vector3()).setFromSpherical(t ? this._sphericalEnd : this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t ? this._targetEnd : this._target);
  }
  getSpherical(e, t = !0) {
    return (!!e && e instanceof Pe.Spherical ? e : new Pe.Spherical()).copy(t ? this._sphericalEnd : this._spherical);
  }
  getFocalOffset(e, t = !0) {
    return (!!e && e.isVector3 ? e : new Pe.Vector3()).copy(t ? this._focalOffsetEnd : this._focalOffset);
  }
  normalizeRotations() {
    this._sphericalEnd.theta = this._sphericalEnd.theta % zs, this._sphericalEnd.theta < 0 && (this._sphericalEnd.theta += zs), this._spherical.theta += zs * Math.round((this._sphericalEnd.theta - this._spherical.theta) / zs);
  }
  reset(e = !1) {
    if (!st(this._camera.up.x, this._cameraUp0.x) || !st(this._camera.up.y, this._cameraUp0.y) || !st(this._camera.up.z, this._cameraUp0.z)) {
      this._camera.up.copy(this._cameraUp0);
      const n = this.getPosition(ke);
      this.updateCameraUp(), this.setPosition(n.x, n.y, n.z);
    }
    const t = [
      this.setLookAt(this._position0.x, this._position0.y, this._position0.z, this._target0.x, this._target0.y, this._target0.z, e),
      this.setFocalOffset(this._focalOffset0.x, this._focalOffset0.y, this._focalOffset0.z, e),
      this.zoomTo(this._zoom0, e)
    ];
    return Promise.all(t);
  }
  saveState() {
    this._cameraUp0.copy(this._camera.up), this.getTarget(this._target0), this.getPosition(this._position0), this._zoom0 = this._zoom, this._focalOffset0.copy(this._focalOffset);
  }
  updateCameraUp() {
    this._yAxisUpSpace.setFromUnitVectors(this._camera.up, aa), this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
  }
  applyCameraUp() {
    const e = ke.subVectors(this._target, this._camera.position).normalize(), t = tt.crossVectors(e, this._camera.up);
    this._camera.up.crossVectors(t, e), this._camera.updateMatrixWorld();
    const n = this.getPosition(ke);
    this.updateCameraUp(), this.setPosition(n.x, n.y, n.z);
  }
  update(e) {
    const t = this._sphericalEnd.theta - this._spherical.theta, n = this._sphericalEnd.phi - this._spherical.phi, i = this._sphericalEnd.radius - this._spherical.radius, s = Ld.subVectors(this._targetEnd, this._target), o = Pd.subVectors(this._focalOffsetEnd, this._focalOffset), a = this._zoomEnd - this._zoom;
    if (at(t))
      this._thetaVelocity.value = 0, this._spherical.theta = this._sphericalEnd.theta;
    else {
      const u = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.theta = ra(this._spherical.theta, this._sphericalEnd.theta, this._thetaVelocity, u, 1 / 0, e), this._needsUpdate = !0;
    }
    if (at(n))
      this._phiVelocity.value = 0, this._spherical.phi = this._sphericalEnd.phi;
    else {
      const u = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.phi = ra(this._spherical.phi, this._sphericalEnd.phi, this._phiVelocity, u, 1 / 0, e), this._needsUpdate = !0;
    }
    if (at(i))
      this._radiusVelocity.value = 0, this._spherical.radius = this._sphericalEnd.radius;
    else {
      const u = this._isUserControllingDolly ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.radius = ra(this._spherical.radius, this._sphericalEnd.radius, this._radiusVelocity, u, this.maxSpeed, e), this._needsUpdate = !0;
    }
    if (at(s.x) && at(s.y) && at(s.z))
      this._targetVelocity.set(0, 0, 0), this._target.copy(this._targetEnd);
    else {
      const u = this._isUserControllingTruck ? this.draggingSmoothTime : this.smoothTime;
      Rd(this._target, this._targetEnd, this._targetVelocity, u, this.maxSpeed, e, this._target), this._needsUpdate = !0;
    }
    if (at(o.x) && at(o.y) && at(o.z))
      this._focalOffsetVelocity.set(0, 0, 0), this._focalOffset.copy(this._focalOffsetEnd);
    else {
      const u = this._isUserControllingOffset ? this.draggingSmoothTime : this.smoothTime;
      Rd(this._focalOffset, this._focalOffsetEnd, this._focalOffsetVelocity, u, this.maxSpeed, e, this._focalOffset), this._needsUpdate = !0;
    }
    if (at(a))
      this._zoomVelocity.value = 0, this._zoom = this._zoomEnd;
    else {
      const u = this._isUserControllingZoom ? this.draggingSmoothTime : this.smoothTime;
      this._zoom = ra(this._zoom, this._zoomEnd, this._zoomVelocity, u, 1 / 0, e);
    }
    if (this.dollyToCursor) {
      if (Gi(this._camera) && this._changedDolly !== 0) {
        const u = this._spherical.radius - this._lastDistance, d = this._camera, f = this._getCameraDirection(Pr), m = ke.copy(f).cross(d.up).normalize();
        m.lengthSq() === 0 && (m.x = 1);
        const _ = tt.crossVectors(m, f), g = this._sphericalEnd.radius * Math.tan(d.getEffectiveFOV() * Rr * 0.5), v = (this._sphericalEnd.radius - u - this._sphericalEnd.radius) / this._sphericalEnd.radius, x = Hs.copy(this._targetEnd).add(m.multiplyScalar(this._dollyControlCoord.x * g * d.aspect)).add(_.multiplyScalar(this._dollyControlCoord.y * g)), y = ke.copy(this._targetEnd).lerp(x, v), S = this._lastDollyDirection === Bs.IN && this._spherical.radius <= this.minDistance, E = this._lastDollyDirection === Bs.OUT && this.maxDistance <= this._spherical.radius;
        if (this.infinityDolly && (S || E)) {
          this._sphericalEnd.radius -= u, this._spherical.radius -= u;
          const R = tt.copy(f).multiplyScalar(-u);
          y.add(R);
        }
        this._boundary.clampPoint(y, y);
        const T = tt.subVectors(y, this._targetEnd);
        this._targetEnd.copy(y), this._target.add(T), this._changedDolly -= u, at(this._changedDolly) && (this._changedDolly = 0);
      } else if (yi(this._camera) && this._changedZoom !== 0) {
        const u = this._zoom - this._lastZoom, d = this._camera, f = ke.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (d.near + d.far) / (d.near - d.far)).unproject(d), m = tt.set(0, 0, -1).applyQuaternion(d.quaternion), _ = Hs.copy(f).add(m.multiplyScalar(-f.dot(d.up))), p = -(this._zoom - u - this._zoom) / this._zoom, v = this._getCameraDirection(Pr), x = this._targetEnd.dot(v), y = ke.copy(this._targetEnd).lerp(_, p), S = y.dot(v), E = v.multiplyScalar(S - x);
        y.sub(E), this._boundary.clampPoint(y, y);
        const T = tt.subVectors(y, this._targetEnd);
        this._targetEnd.copy(y), this._target.add(T), this._changedZoom -= u, at(this._changedZoom) && (this._changedZoom = 0);
      }
    }
    this._camera.zoom !== this._zoom && (this._camera.zoom = this._zoom, this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = !0);
    const c = this._collisionTest();
    this._spherical.radius = Math.min(this._spherical.radius, c), this._spherical.makeSafe(), this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target), this._camera.lookAt(this._target), (!at(this._focalOffset.x) || !at(this._focalOffset.y) || !at(this._focalOffset.z)) && (this._camera.updateMatrixWorld(), Ln.setFromMatrixColumn(this._camera.matrix, 0), Pn.setFromMatrixColumn(this._camera.matrix, 1), Wi.setFromMatrixColumn(this._camera.matrix, 2), Ln.multiplyScalar(this._focalOffset.x), Pn.multiplyScalar(-this._focalOffset.y), Wi.multiplyScalar(this._focalOffset.z), ke.copy(Ln).add(Pn).add(Wi), this._camera.position.add(ke)), this._boundaryEnclosesCamera && this._encloseToBoundary(this._camera.position.copy(this._target), ke.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
    const h = this._needsUpdate;
    return h && !this._updatedLastTime ? (this._hasRested = !1, this.dispatchEvent({ type: "wake" }), this.dispatchEvent({ type: "update" })) : h ? (this.dispatchEvent({ type: "update" }), at(t, this.restThreshold) && at(n, this.restThreshold) && at(i, this.restThreshold) && at(s.x, this.restThreshold) && at(s.y, this.restThreshold) && at(s.z, this.restThreshold) && at(o.x, this.restThreshold) && at(o.y, this.restThreshold) && at(o.z, this.restThreshold) && at(a, this.restThreshold) && !this._hasRested && (this._hasRested = !0, this.dispatchEvent({ type: "rest" }))) : !h && this._updatedLastTime && this.dispatchEvent({ type: "sleep" }), this._lastDistance = this._spherical.radius, this._lastZoom = this._zoom, this._updatedLastTime = h, this._needsUpdate = !1, h;
  }
  toJSON() {
    return JSON.stringify({
      enabled: this._enabled,
      minDistance: this.minDistance,
      maxDistance: Cr(this.maxDistance),
      minZoom: this.minZoom,
      maxZoom: Cr(this.maxZoom),
      minPolarAngle: this.minPolarAngle,
      maxPolarAngle: Cr(this.maxPolarAngle),
      minAzimuthAngle: Cr(this.minAzimuthAngle),
      maxAzimuthAngle: Cr(this.maxAzimuthAngle),
      smoothTime: this.smoothTime,
      draggingSmoothTime: this.draggingSmoothTime,
      dollySpeed: this.dollySpeed,
      truckSpeed: this.truckSpeed,
      dollyToCursor: this.dollyToCursor,
      verticalDragToForward: this.verticalDragToForward,
      target: this._targetEnd.toArray(),
      position: ke.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),
      zoom: this._zoomEnd,
      focalOffset: this._focalOffsetEnd.toArray(),
      target0: this._target0.toArray(),
      position0: this._position0.toArray(),
      zoom0: this._zoom0,
      focalOffset0: this._focalOffset0.toArray()
    });
  }
  fromJSON(e, t = !1) {
    const n = JSON.parse(e);
    this.enabled = n.enabled, this.minDistance = n.minDistance, this.maxDistance = Lr(n.maxDistance), this.minZoom = n.minZoom, this.maxZoom = Lr(n.maxZoom), this.minPolarAngle = n.minPolarAngle, this.maxPolarAngle = Lr(n.maxPolarAngle), this.minAzimuthAngle = Lr(n.minAzimuthAngle), this.maxAzimuthAngle = Lr(n.maxAzimuthAngle), this.smoothTime = n.smoothTime, this.draggingSmoothTime = n.draggingSmoothTime, this.dollySpeed = n.dollySpeed, this.truckSpeed = n.truckSpeed, this.dollyToCursor = n.dollyToCursor, this.verticalDragToForward = n.verticalDragToForward, this._target0.fromArray(n.target0), this._position0.fromArray(n.position0), this._zoom0 = n.zoom0, this._focalOffset0.fromArray(n.focalOffset0), this.moveTo(n.target[0], n.target[1], n.target[2], t), on.setFromVector3(ke.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)), this.rotateTo(on.theta, on.phi, t), this.dollyTo(on.radius, t), this.zoomTo(n.zoom, t), this.setFocalOffset(n.focalOffset[0], n.focalOffset[1], n.focalOffset[2], t), this._needsUpdate = !0;
  }
  connect(e) {
    if (this._domElement) {
      console.warn("camera-controls is already connected.");
      return;
    }
    e.setAttribute("data-camera-controls-version", eS), this._addAllEventListeners(e);
  }
  disconnect() {
    this.cancel(), this._removeAllEventListeners(), this._domElement && (this._domElement.removeAttribute("data-camera-controls-version"), this._domElement = void 0);
  }
  dispose() {
    this.removeAllEventListeners(), this.disconnect();
  }
  _getTargetDirection(e) {
    return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse);
  }
  _getCameraDirection(e) {
    return this._getTargetDirection(e).negate();
  }
  _findPointerById(e) {
    return this._activePointers.find((t) => t.pointerId === e);
  }
  _findPointerByMouseButton(e) {
    return this._activePointers.find((t) => t.mouseButton === e);
  }
  _disposePointer(e) {
    this._activePointers.splice(this._activePointers.indexOf(e), 1);
  }
  _encloseToBoundary(e, t, n) {
    const i = t.lengthSq();
    if (i === 0)
      return e;
    const s = tt.copy(t).add(e), a = this._boundary.clampPoint(s, Hs).sub(s), c = a.lengthSq();
    if (c === 0)
      return e.add(t);
    if (c === i)
      return e;
    if (n === 0)
      return e.add(t).add(a);
    {
      const l = 1 + n * c / t.dot(a);
      return e.add(tt.copy(t).multiplyScalar(l)).add(a.multiplyScalar(1 - n));
    }
  }
  _updateNearPlaneCorners() {
    if (Gi(this._camera)) {
      const e = this._camera, t = e.near, n = e.getEffectiveFOV() * Rr, i = Math.tan(n * 0.5) * t, s = i * e.aspect;
      this._nearPlaneCorners[0].set(-s, -i, 0), this._nearPlaneCorners[1].set(s, -i, 0), this._nearPlaneCorners[2].set(s, i, 0), this._nearPlaneCorners[3].set(-s, i, 0);
    } else if (yi(this._camera)) {
      const e = this._camera, t = 1 / e.zoom, n = e.left * t, i = e.right * t, s = e.top * t, o = e.bottom * t;
      this._nearPlaneCorners[0].set(n, s, 0), this._nearPlaneCorners[1].set(i, s, 0), this._nearPlaneCorners[2].set(i, o, 0), this._nearPlaneCorners[3].set(n, o, 0);
    }
  }
  _collisionTest() {
    let e = 1 / 0;
    if (!(this.colliderMeshes.length >= 1) || Yc(this._camera, "_collisionTest"))
      return e;
    const n = this._getTargetDirection(Pr);
    Kc.lookAt(Cd, n, this._camera.up);
    for (let i = 0; i < 4; i++) {
      const s = tt.copy(this._nearPlaneCorners[i]);
      s.applyMatrix4(Kc);
      const o = Hs.addVectors(this._target, s);
      ca.set(o, n), ca.far = this._spherical.radius + 1;
      const a = ca.intersectObjects(this.colliderMeshes);
      a.length !== 0 && a[0].distance < e && (e = a[0].distance);
    }
    return e;
  }
  _getClientRect(e) {
    if (!this._domElement)
      return;
    const t = this._domElement.getBoundingClientRect();
    return e.x = t.left, e.y = t.top, this._viewport ? (e.x += this._viewport.x, e.y += t.height - this._viewport.w - this._viewport.y, e.width = this._viewport.z, e.height = this._viewport.w) : (e.width = t.width, e.height = t.height), e;
  }
  _createOnRestPromise(e) {
    return e ? Promise.resolve() : (this._hasRested = !1, this.dispatchEvent({ type: "transitionstart" }), new Promise((t) => {
      const n = () => {
        this.removeEventListener("rest", n), t();
      };
      this.addEventListener("rest", n);
    }));
  }
  _addAllEventListeners(e) {
  }
  _removeAllEventListeners() {
  }
  get dampingFactor() {
    return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."), 0;
  }
  set dampingFactor(e) {
    console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.");
  }
  get draggingDampingFactor() {
    return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."), 0;
  }
  set draggingDampingFactor(e) {
    console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.");
  }
  static createBoundingSphere(e, t = new Pe.Sphere()) {
    const n = t, i = n.center;
    ks.makeEmpty(), e.traverseVisible((o) => {
      !o.isMesh || ks.expandByObject(o);
    }), ks.getCenter(i);
    let s = 0;
    return e.traverseVisible((o) => {
      if (!o.isMesh)
        return;
      const a = o, c = a.geometry.clone();
      c.applyMatrix4(a.matrixWorld);
      const h = c.attributes.position;
      for (let u = 0, d = h.count; u < d; u++)
        ke.fromBufferAttribute(h, u), s = Math.max(s, i.distanceToSquared(ke));
    }), n.radius = Math.sqrt(s), n;
  }
}
un.install({ THREE: jM });
const iS = new kh();
let ls, sr, Mt, Ut;
const sS = new za();
let cn;
function rS() {
  const r = document.createElement("div");
  document.body.appendChild(r), sr = new za(), ls = new wt(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    2e3
  );
  const e = window.innerWidth, t = window.innerHeight, n = e / t;
  cn = new dr(-n, n, 1, -1, 0, 1e5), cn.position.z = 1, Mt = new _h({
    antialias: !0,
    alpha: !0,
    preserveDrawingBuffer: !0
  }), Mt.autoClearColor = !1, Mt.useLegacyLights = !1, Mt.outputColorSpace = De, Mt.toneMapping = jl, Mt.toneMappingExposure = 1, Mt.shadowMap.enabled = !0, Mt.shadowMap.type = Zl, Mt.setPixelRatio(window.devicePixelRatio), Mt.setSize(window.innerWidth, window.innerHeight), Mt.xr.enabled = !0, r.appendChild(Mt.domElement), Ut = new un(ls, Mt.domElement), Ut.mouseButtons.left = un.ACTION.TRUCK, Ut.mouseButtons.right = un.ACTION.ROTATE, Ut.mouseButtons.wheel = un.ACTION.DOLLY, Ut.mouseButtons.middle = un.ACTION.TRUCK, Ut.maxDistance = 10, Ut.minDistance = 0.01, Ut.maxPolarAngle = Math.PI / 2, Ut.verticalDragToForward = !0, Ut.infinityDolly = !1, window.addEventListener("resize", oS);
}
function oS() {
  const r = window.innerWidth, e = window.innerHeight;
  ls.aspect = r / e, ls.updateProjectionMatrix();
  const t = r / e;
  t > 1 ? (cn.left = -t, cn.right = t, cn.top = 1, cn.bottom = -1) : (cn.left = -1, cn.right = 1, cn.top = 1 / t, cn.bottom = -1 / t), cn.updateProjectionMatrix(), Mt.setSize(window.innerWidth, window.innerHeight);
}
function aS() {
  Mt.setAnimationLoop(cS);
}
const dn = {
  shiftRight: !1,
  shiftLeft: !1,
  controlRight: !1,
  controlLeft: !1
}, em = () => {
  dn.shiftRight || dn.shiftLeft ? Ut.mouseButtons.left = un.ACTION.ROTATE : dn.controlRight || dn.controlLeft ? Ut.mouseButtons.left = un.ACTION.DOLLY : Ut.mouseButtons.left = un.ACTION.TRUCK;
};
document.addEventListener("keydown", (r) => {
  r.code === "ShiftRight" && (dn.shiftRight = !0), r.code === "ShiftLeft" && (dn.shiftLeft = !0), r.code === "ControlRight" && (dn.controlRight = !0), r.code === "ControlLeft" && (dn.controlLeft = !0), em();
});
document.addEventListener("keyup", (r) => {
  r.code === "ShiftRight" && (dn.shiftRight = !1), r.code === "ShiftLeft" && (dn.shiftLeft = !1), r.code === "ControlRight" && (dn.controlRight = !1), r.code === "ControlLeft" && (dn.controlLeft = !1), em();
});
function cS() {
  Mt.setClearColor(1447453, 1);
  const r = iS.getDelta();
  Ut.update(r), Mt.render(sr, ls), Mt.clearDepth(), Mt.render(sS, cn);
}
class lS {
  constructor(e) {
    this.registeredListeners = /* @__PURE__ */ new Map(), this.scene = e;
    const t = new Zp(), n = new j();
    if (hS()) {
      const i = (o, a) => {
        const c = a.getBoundingClientRect(), l = o.clientX - c.left, h = o.clientY - c.top;
        n.x = l / c.width * 2 - 1, n.y = -(h / c.height) * 2 + 1;
      }, s = (o, a, c) => {
        const l = o.touches[0];
        i(l, a), t.setFromCamera(n, c);
        const h = Array.from(this.registeredListeners.keys());
        return t.intersectObjects(h);
      };
      window.addEventListener("touchstart", (o) => {
        const a = s(o, Mt.domElement, ls);
        for (const c of a) {
          const l = c.object, h = this.registeredListeners.get(l);
          if (h)
            h();
          else {
            let u = l.parent;
            for (; u !== null; ) {
              const d = this.registeredListeners.get(u);
              if (d) {
                d();
                break;
              }
              u = u.parent;
            }
          }
        }
      });
    } else {
      const i = (s) => {
        n.x = s.clientX / window.innerWidth * 2 - 1, n.y = -(s.clientY / window.innerHeight) * 2 + 1, t.setFromCamera(n, ls);
        const o = this.registeredListeners.keys();
        return t.intersectObjects(Array.from(o));
      };
      window.addEventListener("click", (s) => {
        const o = i(s);
        for (const a of o) {
          const c = a.object, l = this.registeredListeners.get(c);
          if (l)
            l();
          else {
            let h = c.parent;
            for (; h !== null; ) {
              const u = this.registeredListeners.get(h);
              if (u) {
                u();
                break;
              }
              h = h.parent;
            }
          }
        }
      });
    }
  }
  moveCameraAndLook(e, t) {
    Ut.setLookAt(
      e.x,
      e.y,
      e.z,
      t.x,
      t.y,
      t.z,
      !0
    );
  }
  addWorldInfoToForm(e) {
    const t = new w(), n = new w();
    Ut.getTarget(n), Ut.getPosition(t), e["metaverse-camera-position"] = `${t.x},${t.y},${t.z}`, e["metaverse-camera-lookat"] = `${n.x},${n.y},${n.z}`;
  }
  registerInteractiveObject(e, t) {
    this.registeredListeners.set(e, t);
  }
  setHDRITexture(e, t) {
    const n = new Ea(Mt), i = n.fromEquirectangular(e).texture;
    sr.environment = i, t && (sr.background = i), e.dispose(), n.dispose();
  }
}
let Jc;
function Fn() {
  return sr || (rS(), aS()), Jc || (Jc = new lS(sr)), Jc;
}
function hS() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _a = window, Xh = _a.ShadowRoot && (_a.ShadyCSS === void 0 || _a.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, tm = Symbol(), Dd = /* @__PURE__ */ new WeakMap();
class uS {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== tm)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Xh && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Dd.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Dd.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}
const dS = (r) => new uS(typeof r == "string" ? r : r + "", void 0, tm), fS = (r, e) => {
  Xh ? r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach((t) => {
    const n = document.createElement("style"), i = _a.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, r.appendChild(n);
  });
}, Od = Xh ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules)
    t += n.cssText;
  return dS(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var jc;
const Ta = window, Nd = Ta.trustedTypes, pS = Nd ? Nd.emptyScript : "", Fd = Ta.reactiveElementPolyfillSupport, Wl = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? pS : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, nm = (r, e) => e !== r && (e == e || r == r), Qc = { attribute: !0, type: String, converter: Wl, reflect: !1, hasChanged: nm };
class Vs extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(e) {
    var t;
    (t = this.h) !== null && t !== void 0 || (this.h = []), this.h.push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, n) => {
      const i = this._$Ep(n, t);
      i !== void 0 && (this._$Ev.set(i, n), e.push(i));
    }), e;
  }
  static createProperty(e, t = Qc) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const n = typeof e == "symbol" ? Symbol() : "__" + e, i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && Object.defineProperty(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    return { get() {
      return this[t];
    }, set(i) {
      const s = this[e];
      this[t] = i, this.requestUpdate(e, s, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || Qc;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties, n = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const i of n)
        this.createProperty(i, t[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n)
        t.unshift(Od(i));
    } else
      e !== void 0 && t.push(Od(e));
    return t;
  }
  static _$Ep(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  u() {
    var e;
    this._$E_ = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((t) => t(this));
  }
  addController(e) {
    var t, n;
    ((t = this._$ES) !== null && t !== void 0 ? t : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) === null || n === void 0 || n.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return fS(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) === null || n === void 0 ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) === null || n === void 0 ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$EO(e, t, n = Qc) {
    var i;
    const s = this.constructor._$Ep(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const o = (((i = n.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? n.converter : Wl).toAttribute(t, n.type);
      this._$El = e, o == null ? this.removeAttribute(s) : this.setAttribute(s, o), this._$El = null;
    }
  }
  _$AK(e, t) {
    var n;
    const i = this.constructor, s = i._$Ev.get(e);
    if (s !== void 0 && this._$El !== s) {
      const o = i.getPropertyOptions(s), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0 ? o.converter : Wl;
      this._$El = s, this[s] = a.fromAttribute(t, o.type), this._$El = null;
    }
  }
  requestUpdate(e, t, n) {
    let i = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || nm)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, n))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, s) => this[s] = i), this._$Ei = void 0);
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n), t ? (this.willUpdate(n), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
        var s;
        return (s = i.hostUpdate) === null || s === void 0 ? void 0 : s.call(i);
      }), this.update(n)) : this._$Ek();
    } catch (i) {
      throw t = !1, this._$Ek(), i;
    }
    t && this._$AE(n);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((n) => {
      var i;
      return (i = n.hostUpdated) === null || i === void 0 ? void 0 : i.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((t, n) => this._$EO(n, this[n], t)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
Vs.finalized = !0, Vs.elementProperties = /* @__PURE__ */ new Map(), Vs.elementStyles = [], Vs.shadowRootOptions = { mode: "open" }, Fd == null || Fd({ ReactiveElement: Vs }), ((jc = Ta.reactiveElementVersions) !== null && jc !== void 0 ? jc : Ta.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var el;
const ba = window, rr = ba.trustedTypes, Bd = rr ? rr.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, vi = `lit$${(Math.random() + "").slice(9)}$`, im = "?" + vi, mS = `<${im}>`, or = document, eo = (r = "") => or.createComment(r), to = (r) => r === null || typeof r != "object" && typeof r != "function", sm = Array.isArray, gS = (r) => sm(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Ur = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, zd = /-->/g, Hd = />/g, Xi = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), kd = /'/g, Vd = /"/g, rm = /^(?:script|style|textarea|title)$/i, _S = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ci = _S(1), ar = Symbol.for("lit-noChange"), It = Symbol.for("lit-nothing"), Gd = /* @__PURE__ */ new WeakMap(), Zs = or.createTreeWalker(or, 129, null, !1), yS = (r, e) => {
  const t = r.length - 1, n = [];
  let i, s = e === 2 ? "<svg>" : "", o = Ur;
  for (let c = 0; c < t; c++) {
    const l = r[c];
    let h, u, d = -1, f = 0;
    for (; f < l.length && (o.lastIndex = f, u = o.exec(l), u !== null); )
      f = o.lastIndex, o === Ur ? u[1] === "!--" ? o = zd : u[1] !== void 0 ? o = Hd : u[2] !== void 0 ? (rm.test(u[2]) && (i = RegExp("</" + u[2], "g")), o = Xi) : u[3] !== void 0 && (o = Xi) : o === Xi ? u[0] === ">" ? (o = i != null ? i : Ur, d = -1) : u[1] === void 0 ? d = -2 : (d = o.lastIndex - u[2].length, h = u[1], o = u[3] === void 0 ? Xi : u[3] === '"' ? Vd : kd) : o === Vd || o === kd ? o = Xi : o === zd || o === Hd ? o = Ur : (o = Xi, i = void 0);
    const m = o === Xi && r[c + 1].startsWith("/>") ? " " : "";
    s += o === Ur ? l + mS : d >= 0 ? (n.push(h), l.slice(0, d) + "$lit$" + l.slice(d) + vi + m) : l + vi + (d === -2 ? (n.push(void 0), c) : m);
  }
  const a = s + (r[t] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [Bd !== void 0 ? Bd.createHTML(a) : a, n];
};
class no {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let s = 0, o = 0;
    const a = e.length - 1, c = this.parts, [l, h] = yS(e, t);
    if (this.el = no.createElement(l, n), Zs.currentNode = this.el.content, t === 2) {
      const u = this.el.content, d = u.firstChild;
      d.remove(), u.append(...d.childNodes);
    }
    for (; (i = Zs.nextNode()) !== null && c.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const u = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(vi)) {
              const f = h[o++];
              if (u.push(d), f !== void 0) {
                const m = i.getAttribute(f.toLowerCase() + "$lit$").split(vi), _ = /([.?@])?(.*)/.exec(f);
                c.push({ type: 1, index: s, name: _[2], strings: m, ctor: _[1] === "." ? vS : _[1] === "?" ? SS : _[1] === "@" ? ES : rc });
              } else
                c.push({ type: 6, index: s });
            }
          for (const d of u)
            i.removeAttribute(d);
        }
        if (rm.test(i.tagName)) {
          const u = i.textContent.split(vi), d = u.length - 1;
          if (d > 0) {
            i.textContent = rr ? rr.emptyScript : "";
            for (let f = 0; f < d; f++)
              i.append(u[f], eo()), Zs.nextNode(), c.push({ type: 2, index: ++s });
            i.append(u[d], eo());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === im)
          c.push({ type: 2, index: s });
        else {
          let u = -1;
          for (; (u = i.data.indexOf(vi, u + 1)) !== -1; )
            c.push({ type: 7, index: s }), u += vi.length - 1;
        }
      s++;
    }
  }
  static createElement(e, t) {
    const n = or.createElement("template");
    return n.innerHTML = e, n;
  }
}
function cr(r, e, t = r, n) {
  var i, s, o, a;
  if (e === ar)
    return e;
  let c = n !== void 0 ? (i = t._$Co) === null || i === void 0 ? void 0 : i[n] : t._$Cl;
  const l = to(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== l && ((s = c == null ? void 0 : c._$AO) === null || s === void 0 || s.call(c, !1), l === void 0 ? c = void 0 : (c = new l(r), c._$AT(r, t, n)), n !== void 0 ? ((o = (a = t)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[n] = c : t._$Cl = c), c !== void 0 && (e = cr(r, c._$AS(r, e.values), c, n)), e;
}
class xS {
  constructor(e, t) {
    this.u = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(e) {
    var t;
    const { el: { content: n }, parts: i } = this._$AD, s = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : or).importNode(n, !0);
    Zs.currentNode = s;
    let o = Zs.nextNode(), a = 0, c = 0, l = i[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let h;
        l.type === 2 ? h = new mo(o, o.nextSibling, this, e) : l.type === 1 ? h = new l.ctor(o, l.name, l.strings, this, e) : l.type === 6 && (h = new TS(o, this, e)), this.u.push(h), l = i[++c];
      }
      a !== (l == null ? void 0 : l.index) && (o = Zs.nextNode(), a++);
    }
    return s;
  }
  p(e) {
    let t = 0;
    for (const n of this.u)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class mo {
  constructor(e, t, n, i) {
    var s;
    this.type = 2, this._$AH = It, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cm = (s = i == null ? void 0 : i.isConnected) === null || s === void 0 || s;
  }
  get _$AU() {
    var e, t;
    return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0 ? t : this._$Cm;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = cr(this, e, t), to(e) ? e === It || e == null || e === "" ? (this._$AH !== It && this._$AR(), this._$AH = It) : e !== this._$AH && e !== ar && this.g(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : gS(e) ? this.k(e) : this.g(e);
  }
  O(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  g(e) {
    this._$AH !== It && to(this._$AH) ? this._$AA.nextSibling.data = e : this.T(or.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var t;
    const { values: n, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = no.createElement(i.h, this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s)
      this._$AH.p(n);
    else {
      const o = new xS(s, this), a = o.v(this.options);
      o.p(n), this.T(a), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Gd.get(e.strings);
    return t === void 0 && Gd.set(e.strings, t = new no(e)), t;
  }
  k(e) {
    sm(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const s of e)
      i === t.length ? t.push(n = new mo(this.O(eo()), this.O(eo()), this, this.options)) : n = t[i], n._$AI(s), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cm = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
}
class rc {
  constructor(e, t, n, i, s) {
    this.type = 1, this._$AH = It, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = It;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, n, i) {
    const s = this.strings;
    let o = !1;
    if (s === void 0)
      e = cr(this, e, t, 0), o = !to(e) || e !== this._$AH && e !== ar, o && (this._$AH = e);
    else {
      const a = e;
      let c, l;
      for (e = s[0], c = 0; c < s.length - 1; c++)
        l = cr(this, a[n + c], t, c), l === ar && (l = this._$AH[c]), o || (o = !to(l) || l !== this._$AH[c]), l === It ? e = It : e !== It && (e += (l != null ? l : "") + s[c + 1]), this._$AH[c] = l;
    }
    o && !i && this.j(e);
  }
  j(e) {
    e === It ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "");
  }
}
class vS extends rc {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === It ? void 0 : e;
  }
}
const MS = rr ? rr.emptyScript : "";
class SS extends rc {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== It ? this.element.setAttribute(this.name, MS) : this.element.removeAttribute(this.name);
  }
}
class ES extends rc {
  constructor(e, t, n, i, s) {
    super(e, t, n, i, s), this.type = 5;
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = cr(this, e, t, 0)) !== null && n !== void 0 ? n : It) === ar)
      return;
    const i = this._$AH, s = e === It && i !== It || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, o = e !== It && (i === It || s);
    s && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
}
class TS {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    cr(this, e);
  }
}
const Wd = ba.litHtmlPolyfillSupport;
Wd == null || Wd(no, mo), ((el = ba.litHtmlVersions) !== null && el !== void 0 ? el : ba.litHtmlVersions = []).push("2.4.0");
const bS = (r, e, t) => {
  var n, i;
  const s = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
  let o = s._$litPart$;
  if (o === void 0) {
    const a = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
    s._$litPart$ = o = new mo(e.insertBefore(eo(), a), a, void 0, t != null ? t : {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tl, nl;
class nn extends Vs {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, t;
    const n = super.createRenderRoot();
    return (e = (t = this.renderOptions).renderBefore) !== null && e !== void 0 || (t.renderBefore = n.firstChild), n;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = bS(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return ar;
  }
}
nn.finalized = !0, nn._$litElement$ = !0, (tl = globalThis.litElementHydrateSupport) === null || tl === void 0 || tl.call(globalThis, { LitElement: nn });
const Xd = globalThis.litElementPolyfillSupport;
Xd == null || Xd({ LitElement: nn });
((nl = globalThis.litElementVersions) !== null && nl !== void 0 ? nl : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const li = (r) => (e) => typeof e == "function" ? ((t, n) => (customElements.define(t, n), n))(r, e) : ((t, n) => {
  const { kind: i, elements: s } = n;
  return { kind: i, elements: s, finisher(o) {
    customElements.define(t, o);
  } };
})(r, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const AS = (r, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(t) {
  t.createProperty(e.key, r);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(t) {
  t.createProperty(e.key, r);
} };
function Ze(r) {
  return (e, t) => t !== void 0 ? ((n, i, s) => {
    i.constructor.createProperty(s, n);
  })(r, e, t) : AS(r, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var il;
((il = window.HTMLSlotElement) === null || il === void 0 ? void 0 : il.prototype.assignedElements) != null;
var wS = Object.defineProperty, RS = Object.getOwnPropertyDescriptor, om = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? RS(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && wS(e, t, i), i;
};
let hs = class extends nn {
  constructor() {
    super(...arguments), this.space = new ze();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), Fn().scene.add(this.space);
  }
  render() {
    return Fn(), ci``;
  }
};
om([
  Ze({ type: ze })
], hs.prototype, "space", 2);
hs = om([
  li("mv-space")
], hs);
function Yd(r, e) {
  if (e === Ff)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === xa || e === oh) {
    let t = r.getIndex();
    if (t === null) {
      const o = [], a = r.getAttribute("position");
      if (a !== void 0) {
        for (let c = 0; c < a.count; c++)
          o.push(c);
        r.setIndex(o), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === xa)
      for (let o = 1; o <= n; o++)
        i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
    else
      for (let o = 0; o < n; o++)
        o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class CS extends zt {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new DS(t);
    }), this.register(function(t) {
      return new VS(t);
    }), this.register(function(t) {
      return new GS(t);
    }), this.register(function(t) {
      return new WS(t);
    }), this.register(function(t) {
      return new NS(t);
    }), this.register(function(t) {
      return new FS(t);
    }), this.register(function(t) {
      return new BS(t);
    }), this.register(function(t) {
      return new zS(t);
    }), this.register(function(t) {
      return new US(t);
    }), this.register(function(t) {
      return new HS(t);
    }), this.register(function(t) {
      return new OS(t);
    }), this.register(function(t) {
      return new kS(t);
    }), this.register(function(t) {
      return new PS(t);
    }), this.register(function(t) {
      return new XS(t);
    }), this.register(function(t) {
      return new YS(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = ir.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new mn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, o, function(h) {
          t(h), s.manager.itemEnd(e);
        }, a);
      } catch (h) {
        a(h);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const o = {}, a = {}, c = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === am) {
        try {
          o[je.KHR_BINARY_GLTF] = new qS(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(o[je.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new oE(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      a[u.name] = u, o[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const u = s.extensionsUsed[h], d = s.extensionsRequired || [];
        switch (u) {
          case je.KHR_MATERIALS_UNLIT:
            o[u] = new IS();
            break;
          case je.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new $S(s, this.dracoLoader);
            break;
          case je.KHR_TEXTURE_TRANSFORM:
            o[u] = new ZS();
            break;
          case je.KHR_MESH_QUANTIZATION:
            o[u] = new KS();
            break;
          default:
            d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(o), l.setPlugins(a), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function LS() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const je = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class PS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i)
      return i;
    const s = t.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new he(16777215);
    c.color !== void 0 && h.fromArray(c.color);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Bh(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Fh(h), l.distance = u;
        break;
      case "spot":
        l = new Nh(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, xi(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], a = (s.extensions && s.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(c) {
      return n._getNodeRef(t.cache, a, c);
    });
  }
}
class IS {
  constructor() {
    this.name = je.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return en;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new he(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const o = s.baseColorFactor;
        e.color.fromArray(o), e.opacity = o[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, De));
    }
    return Promise.all(i);
  }
}
class US {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class DS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new j(a, a);
    }
    return Promise.all(s);
  }
}
class OS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class NS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new he(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, De)), o.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(s);
  }
}
class FS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(s);
  }
}
class BS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new he(a[0], a[1], a[2]), Promise.all(s);
  }
}
class zS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class HS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new he(a[0], a[1], a[2]), o.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, De)), Promise.all(s);
  }
}
class kS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(s);
  }
}
class VS {
  constructor(e) {
    this.parser = e, this.name = je.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, o);
  }
}
class GS {
  constructor(e) {
    this.parser = e, this.name = je.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const o = s.extensions[t], a = i.images[o.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l)
        return n.loadTextureImage(e, o.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class WS {
  constructor(e) {
    this.parser = e, this.name = je.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const o = s.extensions[t], a = i.images[o.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l)
        return n.loadTextureImage(e, o.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class XS {
  constructor(e) {
    this.name = je.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(a) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, c, l);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(f) {
          return f.buffer;
        }) : o.ready.then(function() {
          const f = new ArrayBuffer(h * u);
          return o.decodeGltfBuffer(new Uint8Array(f), h, u, d, i.mode, i.filter), f;
        });
      });
    } else
      return null;
  }
}
class YS {
  constructor(e) {
    this.name = je.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== ln.TRIANGLES && l.mode !== ln.TRIANGLE_STRIP && l.mode !== ln.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], c = {};
    for (const l in o)
      a.push(this.parser.getDependency("accessor", o[l]).then((h) => (c[l] = h, c[l])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, f = [];
      for (const m of u) {
        const _ = new Ie(), g = new w(), p = new Ft(), v = new w(1, 1, 1), x = new vh(m.geometry, m.material, d);
        for (let y = 0; y < d; y++)
          c.TRANSLATION && g.fromBufferAttribute(c.TRANSLATION, y), c.ROTATION && p.fromBufferAttribute(c.ROTATION, y), c.SCALE && v.fromBufferAttribute(c.SCALE, y), x.setMatrixAt(y, _.compose(g, p, v));
        for (const y in c)
          y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && m.geometry.setAttribute(y, c[y]);
        ze.prototype.copy.call(x, m), this.parser.assignFinalMaterial(x), f.push(x);
      }
      return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
    }));
  }
}
const am = "glTF", Dr = 12, qd = { JSON: 1313821514, BIN: 5130562 };
class qS {
  constructor(e) {
    this.name = je.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Dr), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== am)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Dr, s = new DataView(e, Dr);
    let o = 0;
    for (; o < i; ) {
      const a = s.getUint32(o, !0);
      o += 4;
      const c = s.getUint32(o, !0);
      if (o += 4, c === qd.JSON) {
        const l = new Uint8Array(e, Dr + o, a);
        this.content = n.decode(l);
      } else if (c === qd.BIN) {
        const l = Dr + o;
        this.body = e.slice(l, l + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class $S {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = je.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, c = {}, l = {};
    for (const h in o) {
      const u = Xl[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in e.attributes) {
      const u = Xl[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], f = Ks[d.componentType];
        l[u] = f.name, c[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u) {
        i.decodeDracoFile(h, function(d) {
          for (const f in d.attributes) {
            const m = d.attributes[f], _ = c[f];
            _ !== void 0 && (m.normalized = _);
          }
          u(d);
        }, a, l);
      });
    });
  }
}
class ZS {
  constructor() {
    this.name = je.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class KS {
  constructor() {
    this.name = je.KHR_MESH_QUANTIZATION;
  }
}
class cm extends mr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let o = 0; o !== i; o++)
      t[o] = n[s + o];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = a * 2, l = a * 3, h = i - t, u = (n - t) / h, d = u * u, f = d * u, m = e * l, _ = m - l, g = -2 * f + 3 * d, p = f - d, v = 1 - g, x = p - d + u;
    for (let y = 0; y !== a; y++) {
      const S = o[_ + y + a], E = o[_ + y + c] * h, T = o[m + y + a], R = o[m + y] * h;
      s[y] = v * S + x * E + g * T + p * R;
    }
    return s;
  }
}
const JS = new Ft();
class jS extends cm {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return JS.fromArray(s).normalize().toArray(s), s;
  }
}
const ln = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, Ks = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, $d = {
  9728: _t,
  9729: lt,
  9984: Wr,
  9985: Ca,
  9986: Ys,
  9987: Bn
}, Zd = {
  33071: Dt,
  33648: Js,
  10497: si
}, sl = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Xl = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, _i = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, QS = {
  CUBICSPLINE: void 0,
  LINEAR: ss,
  STEP: js
}, rl = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function eE(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new ds({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Sn
  })), r.DefaultMaterial;
}
function Yi(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function xi(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function tE(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s)
      break;
  }
  if (!n && !i && !s)
    return Promise.resolve(r);
  const o = [], a = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      o.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      a.push(d);
    }
    if (s) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], u = l[1], d = l[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r;
  });
}
function nE(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function iE(r) {
  let e;
  const t = r.extensions && r.extensions[je.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ol(t.attributes) : e = r.indices + ":" + ol(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + ol(r.targets[n]);
  return e;
}
function ol(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function Yl(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function sE(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const rE = new Ie();
class oE {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new LS(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Dh(this.options.manager) : this.textureLoader = new Xp(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new mn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(o) {
      const a = {
        scene: o[0][i.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      Yi(s, a, i), xi(a, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const o = t[i].joints;
      for (let a = 0, c = o.length; a < c; a++)
        e[o[a]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const i = n.clone(), s = (o, a) => {
      const c = this.associations.get(o);
      c != null && this.associations.set(a, c);
      for (const [l, h] of o.children.entries())
        s(h, a.children[l]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i)
        return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, o) {
      n.load(ir.resolveURL(t.uri, i.path), s, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = sl[i.type], a = Ks[i.componentType], c = i.normalized === !0, l = new a(i.count * o);
      return Promise.resolve(new rt(l, o, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(o) {
      const a = o[0], c = sl[i.type], l = Ks[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, m = i.normalized === !0;
      let _, g;
      if (f && f !== u) {
        const p = Math.floor(d / f), v = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let x = t.cache.get(v);
        x || (_ = new l(a, p * f, i.count * f / h), x = new co(_, f / h), t.cache.add(v, x)), g = new Ai(x, c, d % f / h, m);
      } else
        a === null ? _ = new l(i.count * c) : _ = new l(a, d, i.count * c), g = new rt(_, c, m);
      if (i.sparse !== void 0) {
        const p = sl.SCALAR, v = Ks[i.sparse.indices.componentType], x = i.sparse.indices.byteOffset || 0, y = i.sparse.values.byteOffset || 0, S = new v(o[1], x, i.sparse.count * p), E = new l(o[2], y, i.sparse.count * c);
        a !== null && (g = new rt(g.array.slice(), g.itemSize, g.normalized));
        for (let T = 0, R = S.length; T < R; T++) {
          const M = S[T];
          if (g.setX(M, E[T * c]), c >= 2 && g.setY(M, E[T * c + 1]), c >= 3 && g.setZ(M, E[T * c + 2]), c >= 4 && g.setW(M, E[T * c + 3]), c >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return g;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, o = t.images[s];
    let a = this.textureLoader;
    if (o.uri) {
      const c = n.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return this.loadTextureImage(e, s, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, o = s.textures[e], a = s.images[t], c = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri);
      const d = (s.samplers || {})[o.sampler] || {};
      return h.magFilter = $d[d.magFilter] || lt, h.minFilter = $d[d.minFilter] || Bn, h.wrapS = Zd[d.wrapS] || si, h.wrapT = Zd[d.wrapT] || si, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const o = i.images[e], a = self.URL || self.webkitURL;
    let c = o.uri || "", l = !1;
    if (o.bufferView !== void 0)
      c = n.getDependency("bufferView", o.bufferView).then(function(u) {
        l = !0;
        const d = new Blob([u], { type: o.mimeType });
        return c = a.createObjectURL(d), c;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(u) {
      return new Promise(function(d, f) {
        let m = d;
        t.isImageBitmapLoader === !0 && (m = function(_) {
          const g = new ft(_);
          g.needsUpdate = !0, d(g);
        }), t.load(ir.resolveURL(u, s.path), m, void 0, f);
      });
    }).then(function(u) {
      return l === !0 && a.revokeObjectURL(c), u.userData.mimeType = o.mimeType || sE(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o)
        return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), s.extensions[je.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[je.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const c = s.associations.get(o);
          o = s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), s.associations.set(o, c);
        }
      }
      return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new ka(), Rt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new Bt(), Rt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(a, c)), n = c;
    }
    if (i || s || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let c = this.cache.get(a);
      c || (c = n.clone(), s && (c.vertexColors = !0), o && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return ds;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let o;
    const a = {}, c = s.extensions || {}, l = [];
    if (c[je.KHR_MATERIALS_UNLIT]) {
      const u = i[je.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), l.push(u.extendParams(a, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (a.color = new he(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, De)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    s.doubleSided === !0 && (a.side = Mn);
    const h = s.alphaMode || rl.OPAQUE;
    if (h === rl.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === rl.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && o !== en && (l.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new j(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return s.occlusionTexture !== void 0 && o !== en && (l.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && o !== en && (a.emissive = new he().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && o !== en && l.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, De)), Promise.all(l).then(function() {
      const u = new o(a);
      return s.name && (u.name = s.name), xi(u, s), t.associations.set(u, { materials: e }), s.extensions && Yi(i, u, s), u;
    });
  }
  createUniqueName(e) {
    const t = Qe.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(a) {
      return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(c) {
        return Kd(c, a, t);
      });
    }
    const o = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = iE(l), u = i[h];
      if (u)
        o.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[je.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = Kd(new Ye(), l, t), i[h] = { primitive: l, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], o = s.primitives, a = [];
    for (let c = 0, l = o.length; c < l; c++) {
      const h = o[c].material === void 0 ? eE(this.cache) : this.getDependency("material", o[c].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let f = 0, m = h.length; f < m; f++) {
        const _ = h[f], g = o[f];
        let p;
        const v = l[f];
        if (g.mode === ln.TRIANGLES || g.mode === ln.TRIANGLE_STRIP || g.mode === ln.TRIANGLE_FAN || g.mode === void 0)
          p = s.isSkinnedMesh === !0 ? new xh(_, v) : new St(_, v), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), g.mode === ln.TRIANGLE_STRIP ? p.geometry = Yd(p.geometry, oh) : g.mode === ln.TRIANGLE_FAN && (p.geometry = Yd(p.geometry, xa));
        else if (g.mode === ln.LINES)
          p = new An(_, v);
        else if (g.mode === ln.LINE_STRIP)
          p = new ri(_, v);
        else if (g.mode === ln.LINE_LOOP)
          p = new Mh(_, v);
        else if (g.mode === ln.POINTS)
          p = new Sh(_, v);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && nE(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), xi(p, s), g.extensions && Yi(i, p, g), t.assignFinalMaterial(p), u.push(p);
      }
      for (let f = 0, m = u.length; f < m; f++)
        t.associations.set(u[f], {
          meshes: e,
          primitives: f
        });
      if (u.length === 1)
        return s.extensions && Yi(i, u[0], s), u[0];
      const d = new Qn();
      s.extensions && Yi(i, d, s), t.associations.set(d, { meshes: e });
      for (let f = 0, m = u.length; f < m; f++)
        d.add(u[f]);
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new wt(Jf.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new dr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), xi(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), o = i, a = [], c = [];
      for (let l = 0, h = o.length; l < h; l++) {
        const u = o[l];
        if (u) {
          a.push(u);
          const d = new Ie();
          s !== null && d.fromArray(s.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new lo(a, c);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, o = [], a = [], c = [], l = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const f = i.channels[u], m = i.samplers[f.sampler], _ = f.target, g = _.node, p = i.parameters !== void 0 ? i.parameters[m.input] : m.input, v = i.parameters !== void 0 ? i.parameters[m.output] : m.output;
      _.node !== void 0 && (o.push(this.getDependency("node", g)), a.push(this.getDependency("accessor", p)), c.push(this.getDependency("accessor", v)), l.push(m), h.push(_));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(u) {
      const d = u[0], f = u[1], m = u[2], _ = u[3], g = u[4], p = [];
      for (let v = 0, x = d.length; v < x; v++) {
        const y = d[v], S = f[v], E = m[v], T = _[v], R = g[v];
        if (y === void 0)
          continue;
        y.updateMatrix && y.updateMatrix();
        const M = n._createAnimationTracks(y, S, E, T, R);
        if (M)
          for (let b = 0; b < M.length; b++)
            p.push(M[b]);
      }
      return new nr(s, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const o = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (!!a.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            a.morphTargetInfluences[c] = i.weights[c];
      }), o;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let l = 0, h = a.length; l < h; l++)
      o.push(n.getDependency("node", a[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(o),
      c
    ]).then(function(l) {
      const h = l[0], u = l[1], d = l[2];
      d !== null && h.traverse(function(f) {
        !f.isSkinnedMesh || f.bind(d, rE);
      });
      for (let f = 0, m = u.length; f < m; f++)
        h.add(u[f]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], o = s.name ? i.createUniqueName(s.name) : "", a = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && a.push(c), s.camera !== void 0 && a.push(i.getDependency("camera", s.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, s.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      a.push(l);
    }), this.nodeCache[e] = Promise.all(a).then(function(l) {
      let h;
      if (s.isBone === !0 ? h = new Ha() : l.length > 1 ? h = new Qn() : l.length === 1 ? h = l[0] : h = new ze(), h !== l[0])
        for (let u = 0, d = l.length; u < d; u++)
          h.add(l[u]);
      if (s.name && (h.userData.name = s.name, h.name = o), xi(h, s), s.extensions && Yi(n, h, s), s.matrix !== void 0) {
        const u = new Ie();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Qn();
    n.name && (s.name = i.createUniqueName(n.name)), xi(s, n), n.extensions && Yi(t, s, n);
    const o = n.nodes || [], a = [];
    for (let c = 0, l = o.length; c < l; c++)
      a.push(i.getDependency("node", o[c]));
    return Promise.all(a).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        s.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations)
          (d instanceof Rt || d instanceof ft) && u.set(d, f);
        return h.traverse((d) => {
          const f = i.associations.get(d);
          f != null && u.set(d, f);
        }), u;
      };
      return i.associations = l(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const o = [], a = e.name ? e.name : e.uuid, c = [];
    _i[s.path] === _i.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
    }) : c.push(a);
    let l;
    switch (_i[s.path]) {
      case _i.weights:
        l = os;
        break;
      case _i.rotation:
        l = wi;
        break;
      case _i.position:
      case _i.scale:
        l = as;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = os;
            break;
          case 2:
          case 3:
          default:
            l = as;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? QS[i.interpolation] : ss, u = this._getArrayFromAccessor(n);
    for (let d = 0, f = c.length; d < f; d++) {
      const m = new l(
        c[d] + "." + _i[s.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), o.push(m);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Yl(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, o = t.length; s < o; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof wi ? jS : cm;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function aE(r, e, t) {
  const n = e.attributes, i = new bn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], c = a.min, l = a.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new w(c[0], c[1], c[2]),
        new w(l[0], l[1], l[2])
      ), a.normalized) {
        const h = Yl(Ks[a.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const a = new w(), c = new w();
    for (let l = 0, h = s.length; l < h; l++) {
      const u = s[l];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], f = d.min, m = d.max;
        if (f !== void 0 && m !== void 0) {
          if (c.setX(Math.max(Math.abs(f[0]), Math.abs(m[0]))), c.setY(Math.max(Math.abs(f[1]), Math.abs(m[1]))), c.setZ(Math.max(Math.abs(f[2]), Math.abs(m[2]))), d.normalized) {
            const _ = Yl(Ks[d.componentType]);
            c.multiplyScalar(_);
          }
          a.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  r.boundingBox = i;
  const o = new gn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = o;
}
function Kd(r, e, t) {
  const n = e.attributes, i = [];
  function s(o, a) {
    return t.getDependency("accessor", o).then(function(c) {
      r.setAttribute(a, c);
    });
  }
  for (const o in n) {
    const a = Xl[o] || o.toLowerCase();
    a in r.attributes || i.push(s(n[o], a));
  }
  if (e.indices !== void 0 && !r.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      r.setIndex(a);
    });
    i.push(o);
  }
  return xi(r, e), aE(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? tE(r, e.targets, t) : r;
  });
}
function oc(r, e) {
  let t = r.parentElement;
  for (; t !== null; ) {
    if (e(t))
      return t;
    t = t.parentElement;
  }
  return null;
}
var cE = Object.defineProperty, lE = Object.getOwnPropertyDescriptor, ms = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? lE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && cE(e, t, i), i;
};
let oi = class extends nn {
  constructor() {
    super(...arguments), this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new ze();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: r } = this, e = oc(
      this,
      (f) => f instanceof hs
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space;
    new CS().load(this.src, (f) => {
      r.add(f.scene), this.isLoaded = !0, this.dispatchEvent(
        new CustomEvent("loaded", {
          detail: { model: f.scene }
        })
      );
    });
    const [i, s, o] = this.positon.split(",").map((f) => parseFloat(f)), [a, c, l] = this.rotation.split(",").map((f) => parseFloat(f)), [h, u, d] = this.scale.split(",").map((f) => parseFloat(f));
    r.position.x = i, r.position.y = s, r.position.z = o, r.rotation.x = a, r.rotation.y = c, r.rotation.z = l, r.scale.x = h, r.scale.y = u, r.scale.z = d, t.add(r);
  }
  render() {
    return ci``;
  }
};
ms([
  Ze({ type: String, attribute: "src" })
], oi.prototype, "src", 2);
ms([
  Ze({ type: String, attribute: "position" })
], oi.prototype, "positon", 2);
ms([
  Ze({ type: String, attribute: "rotation" })
], oi.prototype, "rotation", 2);
ms([
  Ze({ type: String, attribute: "scale" })
], oi.prototype, "scale", 2);
ms([
  Ze({ type: Boolean })
], oi.prototype, "isLoaded", 2);
ms([
  Ze({ type: ze })
], oi.prototype, "space", 2);
oi = ms([
  li("mv-model")
], oi);
var hE = Object.defineProperty, uE = Object.getOwnPropertyDescriptor, lm = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? uE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && hE(e, t, i), i;
};
let ql = class extends nn {
  constructor() {
    super(...arguments), this.href = "", this.onNavigate = () => {
      window.location.href = this.href;
    };
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const r = this.children, e = Fn();
    for (let t = 0; t < r.length; t++) {
      const n = r[t];
      n instanceof oi && n.addEventListener("loaded", (i) => {
        const s = i.detail.model;
        e.registerInteractiveObject(s, this.onNavigate);
      });
    }
  }
  render() {
    return ci``;
  }
};
lm([
  Ze({ type: String, attribute: "href" })
], ql.prototype, "href", 2);
ql = lm([
  li("mv-link")
], ql);
var dE = Object.defineProperty, fE = Object.getOwnPropertyDescriptor, Yh = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? fE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && dE(e, t, i), i;
};
let io = class extends nn {
  constructor() {
    super(...arguments), this.action = "", this.method = "", this.inputs = [];
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return ci``;
  }
  registerInput(r) {
    this.inputs.push(r);
  }
  submit() {
    const r = this.inputs.reduce((t, n) => (n.name === "" || (t[n.name] = n.value), t), {});
    Fn().addWorldInfoToForm(r);
    const e = document.createElement("form");
    e.style.display = "none", e.method = this.method, e.action = this.action;
    for (const t in r) {
      const n = r[t], i = document.createElement("input");
      i.type = "hidden", i.name = t, i.value = n, e.appendChild(i);
    }
    document.body.appendChild(e), e.submit();
  }
};
Yh([
  Ze({ type: String, attribute: "action" })
], io.prototype, "action", 2);
Yh([
  Ze({ type: String, attribute: "method" })
], io.prototype, "method", 2);
io = Yh([
  li("mv-form")
], io);
var pE = Object.defineProperty, mE = Object.getOwnPropertyDescriptor, kn = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? mE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && pE(e, t, i), i;
};
let Tn = class extends nn {
  constructor() {
    super(...arguments), this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new ze(), this.type = "submit", this.name = "", this.value = "";
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: r } = this;
    let e = null, t = this.parentElement;
    for (; t !== null; ) {
      if (t instanceof hs) {
        e = t.space;
        break;
      }
      t = t.parentElement;
    }
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const n = new St(
      new Ci(1, 1, 1),
      new ds({
        color: this.value === "true" ? 268435455 : 6710886
      })
    );
    r.add(n), this.isLoaded = !0, this.dispatchEvent(
      new CustomEvent("loaded", {
        detail: { model: n }
      })
    );
    const [i, s, o] = this.positon.split(",").map((m) => parseFloat(m)), [a, c, l] = this.rotation.split(",").map((m) => parseFloat(m)), [h, u, d] = this.scale.split(",").map((m) => parseFloat(m));
    r.position.x = i, r.position.y = s, r.position.z = o, r.rotation.x = a, r.rotation.y = c, r.rotation.z = l, r.scale.x = h, r.scale.y = u, r.scale.z = d, e.add(r);
    const f = oc(
      this,
      (m) => m instanceof io
    );
    if (f === null)
      throw new Error("No parent form found for mv-model");
    this.type === "submit" ? Fn().registerInteractiveObject(n, () => {
      f.submit();
    }) : this.type === "checkbox" ? (this.value === "" && (this.value = "false"), Fn().registerInteractiveObject(n, () => {
      this.value === "true" ? (this.value = "false", n.material.color.setHex(6710886)) : (this.value = "true", n.material.color.setHex(16777215));
    }), f.registerInput(this)) : this.type === "text" && (Fn().registerInteractiveObject(n, () => {
      var m;
      this.value = (m = window.prompt("Enter text", this.value)) != null ? m : "", this.value === "" ? n.material.color.setHex(6710886) : n.material.color.setHex(16777215);
    }), f.registerInput(this));
  }
  render() {
    return ci``;
  }
};
kn([
  Ze({ type: String, attribute: "src" })
], Tn.prototype, "src", 2);
kn([
  Ze({ type: String, attribute: "position" })
], Tn.prototype, "positon", 2);
kn([
  Ze({ type: String, attribute: "rotation" })
], Tn.prototype, "rotation", 2);
kn([
  Ze({ type: String, attribute: "scale" })
], Tn.prototype, "scale", 2);
kn([
  Ze({ type: Boolean })
], Tn.prototype, "isLoaded", 2);
kn([
  Ze({ type: ze })
], Tn.prototype, "space", 2);
kn([
  Ze({ type: String, attribute: "type" })
], Tn.prototype, "type", 2);
kn([
  Ze({ type: String, attribute: "name" })
], Tn.prototype, "name", 2);
kn([
  Ze({ type: String, attribute: "value" })
], Tn.prototype, "value", 2);
Tn = kn([
  li("mv-input")
], Tn);
class gE extends uo {
  constructor(e, t = {}) {
    const n = t.font;
    if (n === void 0)
      super();
    else {
      const i = n.generateShapes(e, t.size);
      t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), super(i, t);
    }
    this.type = "TextGeometry";
  }
}
class _E extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new mn(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      const c = s.parse(JSON.parse(a));
      t && t(c);
    }, n, i);
  }
  parse(e) {
    return new yE(e);
  }
}
class yE {
  constructor(e) {
    this.isFont = !0, this.type = "Font", this.data = e;
  }
  generateShapes(e, t = 100) {
    const n = [], i = xE(e, t, this.data);
    for (let s = 0, o = i.length; s < o; s++)
      n.push(...i[s].toShapes());
    return n;
  }
}
function xE(r, e, t) {
  const n = Array.from(r), i = e / t.resolution, s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = [];
  let a = 0, c = 0;
  for (let l = 0; l < n.length; l++) {
    const h = n[l];
    if (h === `
`)
      a = 0, c -= s;
    else {
      const u = vE(h, i, a, c, t);
      a += u.offsetX, o.push(u.path);
    }
  }
  return o;
}
function vE(r, e, t, n, i) {
  const s = i.glyphs[r] || i.glyphs["?"];
  if (!s) {
    console.error('THREE.Font: character "' + r + '" does not exists in font family ' + i.familyName + ".");
    return;
  }
  const o = new Jp();
  let a, c, l, h, u, d, f, m;
  if (s.o) {
    const _ = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
    for (let g = 0, p = _.length; g < p; )
      switch (_[g++]) {
        case "m":
          a = _[g++] * e + t, c = _[g++] * e + n, o.moveTo(a, c);
          break;
        case "l":
          a = _[g++] * e + t, c = _[g++] * e + n, o.lineTo(a, c);
          break;
        case "q":
          l = _[g++] * e + t, h = _[g++] * e + n, u = _[g++] * e + t, d = _[g++] * e + n, o.quadraticCurveTo(u, d, l, h);
          break;
        case "b":
          l = _[g++] * e + t, h = _[g++] * e + n, u = _[g++] * e + t, d = _[g++] * e + n, f = _[g++] * e + t, m = _[g++] * e + n, o.bezierCurveTo(u, d, f, m, l, h);
          break;
      }
  }
  return { offsetX: s.ha * e, path: o };
}
var ME = Object.defineProperty, SE = Object.getOwnPropertyDescriptor, hi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? SE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && ME(e, t, i), i;
};
let zn = class extends nn {
  constructor() {
    super(...arguments), this.for = "", this.text = "", this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new ze();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: r } = this, e = oc(
      this,
      (f) => f instanceof hs
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space;
    new _E().load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (f) => {
        const m = new gE(this.text, {
          font: f,
          size: 1,
          height: 0.01
        }), _ = new ds({
          color: 16777215
        }), g = new St(m, _);
        g.position.y = -0.5, r.add(g);
      }
    );
    const [i, s, o] = this.positon.split(",").map((f) => parseFloat(f)), [a, c, l] = this.rotation.split(",").map((f) => parseFloat(f)), [h, u, d] = this.scale.split(",").map((f) => parseFloat(f));
    r.position.x = i, r.position.y = s, r.position.z = o, r.rotation.x = a, r.rotation.y = c, r.rotation.z = l, r.scale.x = h, r.scale.y = u, r.scale.z = d, t.add(r);
  }
  render() {
    return ci``;
  }
};
hi([
  Ze({ type: String, attribute: "for" })
], zn.prototype, "for", 2);
hi([
  Ze({ type: String, attribute: "text" })
], zn.prototype, "text", 2);
hi([
  Ze({ type: String, attribute: "src" })
], zn.prototype, "src", 2);
hi([
  Ze({ type: String, attribute: "position" })
], zn.prototype, "positon", 2);
hi([
  Ze({ type: String, attribute: "rotation" })
], zn.prototype, "rotation", 2);
hi([
  Ze({ type: String, attribute: "scale" })
], zn.prototype, "scale", 2);
hi([
  Ze({ type: Boolean })
], zn.prototype, "isLoaded", 2);
hi([
  Ze({ type: ze })
], zn.prototype, "space", 2);
zn = hi([
  li("mv-label")
], zn);
class EE extends zp {
  constructor(e) {
    super(e), this.type = Dn;
  }
  parse(e) {
    const a = function(x, y) {
      switch (x) {
        case 1:
          console.error("THREE.RGBELoader Read Error: " + (y || ""));
          break;
        case 2:
          console.error("THREE.RGBELoader Write Error: " + (y || ""));
          break;
        case 3:
          console.error("THREE.RGBELoader Bad File Format: " + (y || ""));
          break;
        default:
        case 4:
          console.error("THREE.RGBELoader: Error: " + (y || ""));
      }
      return -1;
    }, u = `
`, d = function(x, y, S) {
      y = y || 1024;
      let T = x.pos, R = -1, M = 0, b = "", U = String.fromCharCode.apply(null, new Uint16Array(x.subarray(T, T + 128)));
      for (; 0 > (R = U.indexOf(u)) && M < y && T < x.byteLength; )
        b += U, M += U.length, T += 128, U += String.fromCharCode.apply(null, new Uint16Array(x.subarray(T, T + 128)));
      return -1 < R ? (S !== !1 && (x.pos += M + R + 1), b + U.slice(0, R)) : !1;
    }, f = function(x) {
      const y = /^#\?(\S+)/, S = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, E = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, T = /^\s*FORMAT=(\S+)\s*$/, R = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, M = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let b, U;
      if (x.pos >= x.byteLength || !(b = d(x)))
        return a(1, "no header found");
      if (!(U = b.match(y)))
        return a(3, "bad initial token");
      for (M.valid |= 1, M.programtype = U[1], M.string += b + `
`; b = d(x), b !== !1; ) {
        if (M.string += b + `
`, b.charAt(0) === "#") {
          M.comments += b + `
`;
          continue;
        }
        if ((U = b.match(S)) && (M.gamma = parseFloat(U[1])), (U = b.match(E)) && (M.exposure = parseFloat(U[1])), (U = b.match(T)) && (M.valid |= 2, M.format = U[1]), (U = b.match(R)) && (M.valid |= 4, M.height = parseInt(U[1], 10), M.width = parseInt(U[2], 10)), M.valid & 2 && M.valid & 4)
          break;
      }
      return M.valid & 2 ? M.valid & 4 ? M : a(3, "missing image size specifier") : a(3, "missing format specifier");
    }, m = function(x, y, S) {
      const E = y;
      if (E < 8 || E > 32767 || x[0] !== 2 || x[1] !== 2 || x[2] & 128)
        return new Uint8Array(x);
      if (E !== (x[2] << 8 | x[3]))
        return a(3, "wrong scanline width");
      const T = new Uint8Array(4 * y * S);
      if (!T.length)
        return a(4, "unable to allocate buffer space");
      let R = 0, M = 0;
      const b = 4 * E, U = new Uint8Array(4), k = new Uint8Array(b);
      let D = S;
      for (; D > 0 && M < x.byteLength; ) {
        if (M + 4 > x.byteLength)
          return a(1);
        if (U[0] = x[M++], U[1] = x[M++], U[2] = x[M++], U[3] = x[M++], U[0] != 2 || U[1] != 2 || (U[2] << 8 | U[3]) != E)
          return a(3, "bad rgbe scanline format");
        let F = 0, N;
        for (; F < b && M < x.byteLength; ) {
          N = x[M++];
          const W = N > 128;
          if (W && (N -= 128), N === 0 || F + N > b)
            return a(3, "bad scanline data");
          if (W) {
            const Y = x[M++];
            for (let ee = 0; ee < N; ee++)
              k[F++] = Y;
          } else
            k.set(x.subarray(M, M + N), F), F += N, M += N;
        }
        const K = E;
        for (let W = 0; W < K; W++) {
          let Y = 0;
          T[R] = k[W + Y], Y += E, T[R + 1] = k[W + Y], Y += E, T[R + 2] = k[W + Y], Y += E, T[R + 3] = k[W + Y], R += 4;
        }
        D--;
      }
      return T;
    }, _ = function(x, y, S, E) {
      const T = x[y + 3], R = Math.pow(2, T - 128) / 255;
      S[E + 0] = x[y + 0] * R, S[E + 1] = x[y + 1] * R, S[E + 2] = x[y + 2] * R, S[E + 3] = 1;
    }, g = function(x, y, S, E) {
      const T = x[y + 3], R = Math.pow(2, T - 128) / 255;
      S[E + 0] = Nr.toHalfFloat(Math.min(x[y + 0] * R, 65504)), S[E + 1] = Nr.toHalfFloat(Math.min(x[y + 1] * R, 65504)), S[E + 2] = Nr.toHalfFloat(Math.min(x[y + 2] * R, 65504)), S[E + 3] = Nr.toHalfFloat(1);
    }, p = new Uint8Array(e);
    p.pos = 0;
    const v = f(p);
    if (v !== -1) {
      const x = v.width, y = v.height, S = m(p.subarray(p.pos), x, y);
      if (S !== -1) {
        let E, T, R;
        switch (this.type) {
          case Qt:
            R = S.length / 4;
            const M = new Float32Array(R * 4);
            for (let U = 0; U < R; U++)
              _(S, U * 4, M, U * 4);
            E = M, T = Qt;
            break;
          case Dn:
            R = S.length / 4;
            const b = new Uint16Array(R * 4);
            for (let U = 0; U < R; U++)
              g(S, U * 4, b, U * 4);
            E = b, T = Dn;
            break;
          default:
            console.error("THREE.RGBELoader: unsupported type: ", this.type);
            break;
        }
        return {
          width: x,
          height: y,
          data: E,
          header: v.string,
          gamma: v.gamma,
          exposure: v.exposure,
          type: T
        };
      }
    }
    return null;
  }
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, n, i) {
    function s(o, a) {
      switch (o.type) {
        case Qt:
        case Dn:
          o.colorSpace = fn, o.minFilter = lt, o.magFilter = lt, o.generateMipmaps = !1, o.flipY = !0;
          break;
      }
      t && t(o, a);
    }
    return super.load(e, s, n, i);
  }
}
var TE = Object.defineProperty, bE = Object.getOwnPropertyDescriptor, gr = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? bE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && TE(e, t, i), i;
};
let us = class extends nn {
  constructor() {
    super(...arguments), this.type = "", this.color = "", this.intensity = 1, this.src = "", this.background = "true";
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    if (super.connectedCallback(), this.type === "ambient") {
      const r = Fn().scene, e = new zh(this.color, this.intensity);
      r.add(e);
    } else
      this.type == "hdri" && this.src !== "" && new EE().load(this.src, (r) => {
        Fn().setHDRITexture(r, this.background === "true");
      });
  }
  render() {
    return ci``;
  }
};
gr([
  Ze({ type: String, attribute: "type" })
], us.prototype, "type", 2);
gr([
  Ze({ type: String, attribute: "color" })
], us.prototype, "color", 2);
gr([
  Ze({ type: String, attribute: "intensity" })
], us.prototype, "intensity", 2);
gr([
  Ze({ type: String, attribute: "src" })
], us.prototype, "src", 2);
gr([
  Ze({ type: String, attribute: "background" })
], us.prototype, "background", 2);
us = gr([
  li("mv-light")
], us);
var AE = Object.defineProperty, wE = Object.getOwnPropertyDescriptor, qh = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? wE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && AE(e, t, i), i;
};
let Aa = class extends nn {
  constructor() {
    super(...arguments), this.lookat = "", this.position = "";
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    let r = new w(0, 0, 0), e = new w(0, 0, 0);
    if (this.position !== "") {
      const [t, n, i] = this.position.split(",").map((s) => parseFloat(s));
      r = new w(t, n, i);
    }
    if (this.lookat !== "") {
      const [t, n, i] = this.lookat.split(",").map((s) => parseFloat(s));
      e = new w(t, n, i);
    }
    Fn().moveCameraAndLook(r, e);
  }
  render() {
    return ci``;
  }
};
qh([
  Ze({ type: String, attribute: "lookat" })
], Aa.prototype, "lookat", 2);
qh([
  Ze({ type: String, attribute: "position" })
], Aa.prototype, "position", 2);
Aa = qh([
  li("mv-camera")
], Aa);
class RE extends St {
  constructor(e, t = {}) {
    super(e), this.isWater = !0;
    const n = this, i = t.textureWidth !== void 0 ? t.textureWidth : 512, s = t.textureHeight !== void 0 ? t.textureHeight : 512, o = t.clipBias !== void 0 ? t.clipBias : 0, a = t.alpha !== void 0 ? t.alpha : 1, c = t.time !== void 0 ? t.time : 0, l = t.waterNormals !== void 0 ? t.waterNormals : null, h = t.sunDirection !== void 0 ? t.sunDirection : new w(0.70707, 0.70707, 0), u = new he(t.sunColor !== void 0 ? t.sunColor : 16777215), d = new he(t.waterColor !== void 0 ? t.waterColor : 8355711), f = t.eye !== void 0 ? t.eye : new w(0, 0, 0), m = t.distortionScale !== void 0 ? t.distortionScale : 20, _ = t.side !== void 0 ? t.side : Sn, g = t.fog !== void 0 ? t.fog : !1, p = new Kn(), v = new w(), x = new w(), y = new w(), S = new Ie(), E = new w(0, 0, -1), T = new it(), R = new w(), M = new w(), b = new it(), U = new Ie(), k = new wt(), D = new pn(i, s), F = {
      uniforms: Sa.merge([
        le.fog,
        le.lights,
        {
          normalSampler: { value: null },
          mirrorSampler: { value: null },
          alpha: { value: 1 },
          time: { value: 0 },
          size: { value: 1 },
          distortionScale: { value: 20 },
          textureMatrix: { value: new Ie() },
          sunColor: { value: new he(8355711) },
          sunDirection: { value: new w(0.70707, 0.70707, 0) },
          eye: { value: new w() },
          waterColor: { value: new he(5592405) }
        }
      ]),
      vertexShader: `
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,
      fragmentShader: `
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`
    }, N = new En({
      fragmentShader: F.fragmentShader,
      vertexShader: F.vertexShader,
      uniforms: Sa.clone(F.uniforms),
      lights: !0,
      side: _,
      fog: g
    });
    N.uniforms.mirrorSampler.value = D.texture, N.uniforms.textureMatrix.value = U, N.uniforms.alpha.value = a, N.uniforms.time.value = c, N.uniforms.normalSampler.value = l, N.uniforms.sunColor.value = u, N.uniforms.waterColor.value = d, N.uniforms.sunDirection.value = h, N.uniforms.distortionScale.value = m, N.uniforms.eye.value = f, n.material = N, n.onBeforeRender = function(K, W, Y) {
      if (x.setFromMatrixPosition(n.matrixWorld), y.setFromMatrixPosition(Y.matrixWorld), S.extractRotation(n.matrixWorld), v.set(0, 0, 1), v.applyMatrix4(S), R.subVectors(x, y), R.dot(v) > 0)
        return;
      R.reflect(v).negate(), R.add(x), S.extractRotation(Y.matrixWorld), E.set(0, 0, -1), E.applyMatrix4(S), E.add(y), M.subVectors(x, E), M.reflect(v).negate(), M.add(x), k.position.copy(R), k.up.set(0, 1, 0), k.up.applyMatrix4(S), k.up.reflect(v), k.lookAt(M), k.far = Y.far, k.updateMatrixWorld(), k.projectionMatrix.copy(Y.projectionMatrix), U.set(
        0.5,
        0,
        0,
        0.5,
        0,
        0.5,
        0,
        0.5,
        0,
        0,
        0.5,
        0.5,
        0,
        0,
        0,
        1
      ), U.multiply(k.projectionMatrix), U.multiply(k.matrixWorldInverse), p.setFromNormalAndCoplanarPoint(v, x), p.applyMatrix4(k.matrixWorldInverse), T.set(p.normal.x, p.normal.y, p.normal.z, p.constant);
      const ee = k.projectionMatrix;
      b.x = (Math.sign(T.x) + ee.elements[8]) / ee.elements[0], b.y = (Math.sign(T.y) + ee.elements[9]) / ee.elements[5], b.z = -1, b.w = (1 + ee.elements[10]) / ee.elements[14], T.multiplyScalar(2 / T.dot(b)), ee.elements[2] = T.x, ee.elements[6] = T.y, ee.elements[10] = T.z + 1 - o, ee.elements[14] = T.w, f.setFromMatrixPosition(Y.matrixWorld);
      const Q = K.getRenderTarget(), z = K.xr.enabled, X = K.shadowMap.autoUpdate;
      n.visible = !1, K.xr.enabled = !1, K.shadowMap.autoUpdate = !1, K.setRenderTarget(D), K.state.buffers.depth.setMask(!0), K.autoClear === !1 && K.clear(), K.render(W, k), n.visible = !0, K.xr.enabled = z, K.shadowMap.autoUpdate = X, K.setRenderTarget(Q);
      const ue = Y.viewport;
      ue !== void 0 && K.state.viewport(ue);
    };
  }
}
var CE = Object.defineProperty, LE = Object.getOwnPropertyDescriptor, ac = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? LE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && CE(e, t, i), i;
};
let so = class extends nn {
  constructor() {
    super(...arguments), this.positon = "0,0,0", this.isLoaded = !1, this.space = new ze();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: r } = this, e = oc(
      this,
      (l) => l instanceof hs
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space, n = new ur(1e4, 1e4), i = new RE(n, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new Dh().load(
        "https://richardanaya.github.io/hypershape/dist/assets/waternormals.jpg",
        function(l) {
          l.wrapS = l.wrapT = si;
        }
      ),
      sunDirection: new w(),
      sunColor: 16777215,
      waterColor: 7695,
      distortionScale: 3.7
    });
    i.rotation.x = -Math.PI / 2, i.material.uniforms.distortionScale.value = 0.1, i.material.uniforms.size.value = 10;
    const s = () => {
      i.material.uniforms.time.value += 3e-4;
    };
    window.setInterval(s, 1e3 / 60), r.add(i);
    const [o, a, c] = this.positon.split(",").map((l) => parseFloat(l));
    r.position.x = o, r.position.y = a, r.position.z = c, t.add(r);
  }
  render() {
    return ci``;
  }
};
ac([
  Ze({ type: String, attribute: "position" })
], so.prototype, "positon", 2);
ac([
  Ze({ type: Boolean })
], so.prototype, "isLoaded", 2);
ac([
  Ze({ type: ze })
], so.prototype, "space", 2);
so = ac([
  li("mv-water")
], so);
