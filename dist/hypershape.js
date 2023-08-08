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
const Ma = "155", hm = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, um = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Xd = 0, Qc = 1, Yd = 2, dm = 3, fm = 0, kl = 1, Vl = 2, Cn = 3, Un = 0, Wt = 1, _n = 2, pm = 2, Kn = 0, ji = 1, el = 2, tl = 3, nl = 4, qd = 5, Yi = 100, $d = 101, Zd = 102, il = 103, sl = 104, Kd = 200, Jd = 201, jd = 202, Qd = 203, Gl = 204, Wl = 205, ef = 206, tf = 207, nf = 208, sf = 209, rf = 210, of = 0, af = 1, cf = 2, fa = 3, lf = 4, hf = 5, uf = 6, df = 7, jr = 0, ff = 1, pf = 2, Jn = 0, mf = 1, gf = 2, _f = 3, Xl = 4, yf = 5, Sa = 300, ei = 301, vi = 302, Dr = 303, Nr = 304, or = 306, Mi = 1e3, Ot = 1001, qs = 1002, _t = 1003, Fr = 1004, mm = 1004, Vs = 1005, gm = 1005, ut = 1006, Ea = 1007, _m = 1007, On = 1008, ym = 1008, jn = 1009, xf = 1010, vf = 1011, Ta = 1012, Yl = 1013, $n = 1014, Ln = 1015, $s = 1016, ql = 1017, $l = 1018, gi = 1020, Mf = 1021, jt = 1023, Sf = 1024, Ef = 1025, _i = 1026, ts = 1027, Tf = 1028, Zl = 1029, bf = 1030, Kl = 1031, Jl = 1033, sa = 33776, ra = 33777, oa = 33778, aa = 33779, rl = 35840, ol = 35841, al = 35842, cl = 35843, Af = 36196, ll = 37492, hl = 37496, ul = 37808, dl = 37809, fl = 37810, pl = 37811, ml = 37812, gl = 37813, _l = 37814, yl = 37815, xl = 37816, vl = 37817, Ml = 37818, Sl = 37819, El = 37820, Tl = 37821, ca = 36492, wf = 36283, bl = 36284, Al = 36285, wl = 36286, Rf = 2200, Cf = 2201, Lf = 2202, Zs = 2300, ns = 2301, la = 2302, $i = 2400, Zi = 2401, Br = 2402, ba = 2500, jl = 2501, Pf = 0, Ql = 1, pa = 2, eh = 3e3, yi = 3001, If = 3200, Uf = 3201, Ti = 0, Of = 1, xi = "", Ue = "srgb", yn = "srgb-linear", th = "display-p3", xm = 0, ha = 7680, vm = 7681, Mm = 7682, Sm = 7683, Em = 34055, Tm = 34056, bm = 5386, Am = 512, wm = 513, Rm = 514, Cm = 515, Lm = 516, Pm = 517, Im = 518, Df = 519, Nf = 512, Ff = 513, Bf = 514, zf = 515, Hf = 516, kf = 517, Vf = 518, Gf = 519, zr = 35044, Um = 35048, Om = 35040, Dm = 35045, Nm = 35049, Fm = 35041, Bm = 35046, zm = 35050, Hm = 35042, km = "100", Rl = "300 es", ma = 1035, Pn = 2e3, Hr = 2001;
class ii {
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
const Dt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let $h = 1234567;
const Qi = Math.PI / 180, Ks = 180 / Math.PI;
function en() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Dt[r & 255] + Dt[r >> 8 & 255] + Dt[r >> 16 & 255] + Dt[r >> 24 & 255] + "-" + Dt[e & 255] + Dt[e >> 8 & 255] + "-" + Dt[e >> 16 & 15 | 64] + Dt[e >> 24 & 255] + "-" + Dt[t & 63 | 128] + Dt[t >> 8 & 255] + "-" + Dt[t >> 16 & 255] + Dt[t >> 24 & 255] + Dt[n & 255] + Dt[n >> 8 & 255] + Dt[n >> 16 & 255] + Dt[n >> 24 & 255]).toLowerCase();
}
function yt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function nh(r, e) {
  return (r % e + e) % e;
}
function Vm(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function Gm(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Pr(r, e, t) {
  return (1 - t) * r + t * e;
}
function Wm(r, e, t, n) {
  return Pr(r, e, 1 - Math.exp(-t * n));
}
function Xm(r, e = 1) {
  return e - Math.abs(nh(r, e * 2) - e);
}
function Ym(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function qm(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function $m(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Zm(r, e) {
  return r + Math.random() * (e - r);
}
function Km(r) {
  return r * (0.5 - Math.random());
}
function Jm(r) {
  r !== void 0 && ($h = r);
  let e = $h += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function jm(r) {
  return r * Qi;
}
function Qm(r) {
  return r * Ks;
}
function Cl(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Wf(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function ga(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function eg(r, e, t, n, i) {
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
const Xf = {
  DEG2RAD: Qi,
  RAD2DEG: Ks,
  generateUUID: en,
  clamp: yt,
  euclideanModulo: nh,
  mapLinear: Vm,
  inverseLerp: Gm,
  lerp: Pr,
  damp: Wm,
  pingpong: Xm,
  smoothstep: Ym,
  smootherstep: qm,
  randInt: $m,
  randFloat: Zm,
  randFloatSpread: Km,
  seededRandom: Jm,
  degToRad: jm,
  radToDeg: Qm,
  isPowerOfTwo: Cl,
  ceilPowerOfTwo: Wf,
  floorPowerOfTwo: ga,
  setQuaternionFromProperEuler: eg,
  normalize: Ge,
  denormalize: $t
};
class J {
  constructor(e = 0, t = 0) {
    J.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], m = n[8], _ = i[0], g = i[3], p = i[6], v = i[1], x = i[4], y = i[7], S = i[2], E = i[5], b = i[8];
    return s[0] = o * _ + a * v + c * S, s[3] = o * g + a * x + c * E, s[6] = o * p + a * y + c * b, s[1] = l * _ + h * v + u * S, s[4] = l * g + h * x + u * E, s[7] = l * p + h * y + u * b, s[2] = d * _ + f * v + m * S, s[5] = d * g + f * x + m * E, s[8] = d * p + f * y + m * b, this;
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
    return this.premultiply(sc.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(sc.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(sc.makeTranslation(e, t)), this;
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
const sc = /* @__PURE__ */ new Xe();
function Yf(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1;
}
const tg = {
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
function zs(r, e) {
  return new tg[r](e);
}
function kr(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
const Zh = {};
function Ir(r) {
  r in Zh || (Zh[r] = !0, console.warn(r));
}
function Gs(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function rc(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const ng = /* @__PURE__ */ new Xe().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), ig = /* @__PURE__ */ new Xe().fromArray([
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
function sg(r) {
  return r.convertSRGBToLinear().applyMatrix3(ig);
}
function rg(r) {
  return r.applyMatrix3(ng).convertLinearToSRGB();
}
const og = {
  [yn]: (r) => r,
  [Ue]: (r) => r.convertSRGBToLinear(),
  [th]: sg
}, ag = {
  [yn]: (r) => r,
  [Ue]: (r) => r.convertLinearToSRGB(),
  [th]: rg
}, rn = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(r) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !r;
  },
  get workingColorSpace() {
    return yn;
  },
  set workingColorSpace(r) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = og[e], i = ag[t];
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
let ds;
class ih {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      ds === void 0 && (ds = kr("canvas")), ds.width = e.width, ds.height = e.height;
      const n = ds.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ds;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = kr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Gs(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Gs(t[n] / 255) * 255) : t[n] = Gs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let cg = 0;
class Ki {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: cg++ }), this.uuid = en(), this.data = e, this.version = 0;
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
          i[o].isDataTexture ? s.push(oc(i[o].image)) : s.push(oc(i[o]));
      } else
        s = oc(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function oc(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? ih.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let lg = 0;
class ft extends ii {
  constructor(e = ft.DEFAULT_IMAGE, t = ft.DEFAULT_MAPPING, n = Ot, i = Ot, s = ut, o = On, a = jt, c = jn, l = ft.DEFAULT_ANISOTROPY, h = xi) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: lg++ }), this.uuid = en(), this.name = "", this.source = new Ki(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new J(0, 0), this.repeat = new J(1, 1), this.center = new J(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Xe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === yi ? Ue : xi), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== Sa)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Mi:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ot:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case qs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Mi:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ot:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case qs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Ue ? yi : eh;
  }
  set encoding(e) {
    Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === yi ? Ue : xi;
  }
}
ft.DEFAULT_IMAGE = null;
ft.DEFAULT_MAPPING = Sa;
ft.DEFAULT_ANISOTROPY = 1;
class rt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    rt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
      const x = (l + 1) / 2, y = (f + 1) / 2, S = (p + 1) / 2, E = (h + d) / 4, b = (u + _) / 4, L = (m + g) / 4;
      return x > y && x > S ? x < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), i = E / n, s = b / n) : y > S ? y < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(y), n = E / i, s = L / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(S), n = b / s, i = L / s), this.set(n, i, s, t), this;
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
class qf extends ii {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new rt(0, 0, e, t), this.scissorTest = !1, this.viewport = new rt(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === yi ? Ue : xi), this.texture = new ft(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ut, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
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
    return this.texture.source = new Ki(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class xn extends qf {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Aa extends ft {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = _t, this.minFilter = _t, this.wrapR = Ot, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class hg extends xn {
  constructor(e = 1, t = 1, n = 1) {
    super(e, t), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new Aa(null, e, t, n), this.texture.isRenderTargetTexture = !0;
  }
}
class sh extends ft {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = _t, this.minFilter = _t, this.wrapR = Ot, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ug extends xn {
  constructor(e = 1, t = 1, n = 1) {
    super(e, t), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new sh(null, e, t, n), this.texture.isRenderTargetTexture = !0;
  }
}
class dg extends xn {
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
    return this.applyQuaternion(Kh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Kh.setFromAxisAngle(e, t));
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
    return ac.copy(this).projectOnVector(e), this.sub(ac);
  }
  reflect(e) {
    return this.sub(ac.copy(e).multiplyScalar(2 * this.dot(e)));
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
const ac = /* @__PURE__ */ new w(), Kh = /* @__PURE__ */ new Ft();
class Mn {
  constructor(e = new w(1 / 0, 1 / 0, 1 / 0), t = new w(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(kn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(kn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = kn.copy(t).multiplyScalar(0.5);
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
      e.boundingBox === null && e.computeBoundingBox(), fs.copy(e.boundingBox), fs.applyMatrix4(e.matrixWorld), this.union(fs);
    else {
      const i = e.geometry;
      if (i !== void 0)
        if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
          const s = i.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            kn.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(kn);
        } else
          i.boundingBox === null && i.computeBoundingBox(), fs.copy(i.boundingBox), fs.applyMatrix4(e.matrixWorld), this.union(fs);
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
    return this.clampPoint(e.center, kn), kn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(dr), fo.subVectors(this.max, dr), ps.subVectors(e.a, dr), ms.subVectors(e.b, dr), gs.subVectors(e.c, dr), oi.subVectors(ms, ps), ai.subVectors(gs, ms), Ii.subVectors(ps, gs);
    let t = [
      0,
      -oi.z,
      oi.y,
      0,
      -ai.z,
      ai.y,
      0,
      -Ii.z,
      Ii.y,
      oi.z,
      0,
      -oi.x,
      ai.z,
      0,
      -ai.x,
      Ii.z,
      0,
      -Ii.x,
      -oi.y,
      oi.x,
      0,
      -ai.y,
      ai.x,
      0,
      -Ii.y,
      Ii.x,
      0
    ];
    return !cc(t, ps, ms, gs, fo) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !cc(t, ps, ms, gs, fo)) ? !1 : (po.crossVectors(oi, ai), t = [po.x, po.y, po.z], cc(t, ps, ms, gs, fo));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, kn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(kn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Hn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Hn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Hn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Hn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Hn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Hn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Hn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Hn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Hn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Hn = [
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w()
], kn = /* @__PURE__ */ new w(), fs = /* @__PURE__ */ new Mn(), ps = /* @__PURE__ */ new w(), ms = /* @__PURE__ */ new w(), gs = /* @__PURE__ */ new w(), oi = /* @__PURE__ */ new w(), ai = /* @__PURE__ */ new w(), Ii = /* @__PURE__ */ new w(), dr = /* @__PURE__ */ new w(), fo = /* @__PURE__ */ new w(), po = /* @__PURE__ */ new w(), Ui = /* @__PURE__ */ new w();
function cc(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    Ui.fromArray(r, s);
    const a = i.x * Math.abs(Ui.x) + i.y * Math.abs(Ui.y) + i.z * Math.abs(Ui.z), c = e.dot(Ui), l = t.dot(Ui), h = n.dot(Ui);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const fg = /* @__PURE__ */ new Mn(), fr = /* @__PURE__ */ new w(), lc = /* @__PURE__ */ new w();
class dn {
  constructor(e = new w(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : fg.setFromPoints(e).getCenter(n);
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
    fr.subVectors(e, this.center);
    const t = fr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(fr, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (lc.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(fr.copy(e.center).add(lc)), this.expandByPoint(fr.copy(e.center).sub(lc))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vn = /* @__PURE__ */ new w(), hc = /* @__PURE__ */ new w(), mo = /* @__PURE__ */ new w(), ci = /* @__PURE__ */ new w(), uc = /* @__PURE__ */ new w(), go = /* @__PURE__ */ new w(), dc = /* @__PURE__ */ new w();
class ar {
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
    return this.origin.copy(this.at(e, Vn)), this;
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
    const t = Vn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Vn.copy(this.origin).addScaledVector(this.direction, t), Vn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    hc.copy(e).add(t).multiplyScalar(0.5), mo.copy(t).sub(e).normalize(), ci.copy(this.origin).sub(hc);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(mo), a = ci.dot(this.direction), c = -ci.dot(mo), l = ci.lengthSq(), h = Math.abs(1 - o * o);
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
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(hc).addScaledVector(mo, d), f;
  }
  intersectSphere(e, t) {
    Vn.subVectors(e.center, this.origin);
    const n = Vn.dot(this.direction), i = Vn.dot(Vn) - n * n, s = e.radius * e.radius;
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
    return this.intersectBox(e, Vn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    uc.subVectors(t, e), go.subVectors(n, e), dc.crossVectors(uc, go);
    let o = this.direction.dot(dc), a;
    if (o > 0) {
      if (i)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    ci.subVectors(this.origin, e);
    const c = a * this.direction.dot(go.crossVectors(ci, go));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(uc.cross(ci));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * ci.dot(dc);
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
class De {
  constructor(e, t, n, i, s, o, a, c, l, h, u, d, f, m, _, g) {
    De.prototype.isMatrix4 = !0, this.elements = [
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
    return new De().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / _s.setFromMatrixColumn(e, 0).length(), s = 1 / _s.setFromMatrixColumn(e, 1).length(), o = 1 / _s.setFromMatrixColumn(e, 2).length();
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
    return this.compose(pg, e, mg);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Kt.subVectors(e, t), Kt.lengthSq() === 0 && (Kt.z = 1), Kt.normalize(), li.crossVectors(n, Kt), li.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Kt.x += 1e-4 : Kt.z += 1e-4, Kt.normalize(), li.crossVectors(n, Kt)), li.normalize(), _o.crossVectors(Kt, li), i[0] = li.x, i[4] = _o.x, i[8] = Kt.x, i[1] = li.y, i[5] = _o.y, i[9] = Kt.y, i[2] = li.z, i[6] = _o.z, i[10] = Kt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], m = n[2], _ = n[6], g = n[10], p = n[14], v = n[3], x = n[7], y = n[11], S = n[15], E = i[0], b = i[4], L = i[8], M = i[12], A = i[1], z = i[5], $ = i[9], O = i[13], N = i[2], H = i[6], j = i[10], q = i[14], K = i[3], ne = i[7], Q = i[11], F = i[15];
    return s[0] = o * E + a * A + c * N + l * K, s[4] = o * b + a * z + c * H + l * ne, s[8] = o * L + a * $ + c * j + l * Q, s[12] = o * M + a * O + c * q + l * F, s[1] = h * E + u * A + d * N + f * K, s[5] = h * b + u * z + d * H + f * ne, s[9] = h * L + u * $ + d * j + f * Q, s[13] = h * M + u * O + d * q + f * F, s[2] = m * E + _ * A + g * N + p * K, s[6] = m * b + _ * z + g * H + p * ne, s[10] = m * L + _ * $ + g * j + p * Q, s[14] = m * M + _ * O + g * q + p * F, s[3] = v * E + x * A + y * N + S * K, s[7] = v * b + x * z + y * H + S * ne, s[11] = v * L + x * $ + y * j + S * Q, s[15] = v * M + x * O + y * q + S * F, this;
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
    const b = 1 / E;
    return e[0] = v * b, e[1] = (_ * d * s - u * g * s - _ * i * f + n * g * f + u * i * p - n * d * p) * b, e[2] = (a * g * s - _ * c * s + _ * i * l - n * g * l - a * i * p + n * c * p) * b, e[3] = (u * c * s - a * d * s - u * i * l + n * d * l + a * i * f - n * c * f) * b, e[4] = x * b, e[5] = (h * g * s - m * d * s + m * i * f - t * g * f - h * i * p + t * d * p) * b, e[6] = (m * c * s - o * g * s - m * i * l + t * g * l + o * i * p - t * c * p) * b, e[7] = (o * d * s - h * c * s + h * i * l - t * d * l - o * i * f + t * c * f) * b, e[8] = y * b, e[9] = (m * u * s - h * _ * s - m * n * f + t * _ * f + h * n * p - t * u * p) * b, e[10] = (o * _ * s - m * a * s + m * n * l - t * _ * l - o * n * p + t * a * p) * b, e[11] = (h * a * s - o * u * s - h * n * l + t * u * l + o * n * f - t * a * f) * b, e[12] = S * b, e[13] = (h * _ * i - m * u * i + m * n * d - t * _ * d - h * n * g + t * u * g) * b, e[14] = (m * a * i - o * _ * i - m * n * c + t * _ * c + o * n * g - t * a * g) * b, e[15] = (o * u * i - h * a * i + h * n * c - t * u * c - o * n * d + t * a * d) * b, this;
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
    const i = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, h = o + o, u = a + a, d = s * l, f = s * h, m = s * u, _ = o * h, g = o * u, p = a * u, v = c * l, x = c * h, y = c * u, S = n.x, E = n.y, b = n.z;
    return i[0] = (1 - (_ + p)) * S, i[1] = (f + y) * S, i[2] = (m - x) * S, i[3] = 0, i[4] = (f - y) * E, i[5] = (1 - (d + p)) * E, i[6] = (g + v) * E, i[7] = 0, i[8] = (m + x) * b, i[9] = (g - v) * b, i[10] = (1 - (d + _)) * b, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = _s.set(i[0], i[1], i[2]).length();
    const o = _s.set(i[4], i[5], i[6]).length(), a = _s.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], fn.copy(this);
    const l = 1 / s, h = 1 / o, u = 1 / a;
    return fn.elements[0] *= l, fn.elements[1] *= l, fn.elements[2] *= l, fn.elements[4] *= h, fn.elements[5] *= h, fn.elements[6] *= h, fn.elements[8] *= u, fn.elements[9] *= u, fn.elements[10] *= u, t.setFromRotationMatrix(fn), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, s, o, a = Pn) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let f, m;
    if (a === Pn)
      f = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    else if (a === Hr)
      f = -o / (o - s), m = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o, a = Pn) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - s), d = (t + e) * l, f = (n + i) * h;
    let m, _;
    if (a === Pn)
      m = (o + s) * u, _ = -2 * u;
    else if (a === Hr)
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
const _s = /* @__PURE__ */ new w(), fn = /* @__PURE__ */ new De(), pg = /* @__PURE__ */ new w(0, 0, 0), mg = /* @__PURE__ */ new w(1, 1, 1), li = /* @__PURE__ */ new w(), _o = /* @__PURE__ */ new w(), Kt = /* @__PURE__ */ new w(), Jh = /* @__PURE__ */ new De(), jh = /* @__PURE__ */ new Ft();
class Qr {
  constructor(e = 0, t = 0, n = 0, i = Qr.DEFAULT_ORDER) {
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
    return Jh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Jh, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return jh.setFromEuler(this), this.setFromQuaternion(jh, e);
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
Qr.DEFAULT_ORDER = "XYZ";
class wa {
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
let gg = 0;
const Qh = /* @__PURE__ */ new w(), ys = /* @__PURE__ */ new Ft(), Gn = /* @__PURE__ */ new De(), yo = /* @__PURE__ */ new w(), pr = /* @__PURE__ */ new w(), _g = /* @__PURE__ */ new w(), yg = /* @__PURE__ */ new Ft(), eu = /* @__PURE__ */ new w(1, 0, 0), tu = /* @__PURE__ */ new w(0, 1, 0), nu = /* @__PURE__ */ new w(0, 0, 1), xg = { type: "added" }, iu = { type: "removed" };
class He extends ii {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: gg++ }), this.uuid = en(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = He.DEFAULT_UP.clone();
    const e = new w(), t = new Qr(), n = new Ft(), i = new w(1, 1, 1);
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
        value: new De()
      },
      normalMatrix: {
        value: new Xe()
      }
    }), this.matrix = new De(), this.matrixWorld = new De(), this.matrixAutoUpdate = He.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new wa(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return ys.setFromAxisAngle(e, t), this.quaternion.multiply(ys), this;
  }
  rotateOnWorldAxis(e, t) {
    return ys.setFromAxisAngle(e, t), this.quaternion.premultiply(ys), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(eu, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(tu, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(nu, e);
  }
  translateOnAxis(e, t) {
    return Qh.copy(e).applyQuaternion(this.quaternion), this.position.add(Qh.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(eu, e);
  }
  translateY(e) {
    return this.translateOnAxis(tu, e);
  }
  translateZ(e) {
    return this.translateOnAxis(nu, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Gn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? yo.copy(e) : yo.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), pr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Gn.lookAt(pr, yo, this.up) : Gn.lookAt(yo, pr, this.up), this.quaternion.setFromRotationMatrix(Gn), i && (Gn.extractRotation(i.matrixWorld), ys.setFromRotationMatrix(Gn), this.quaternion.premultiply(ys.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(xg)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(iu)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(iu);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Gn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Gn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Gn), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pr, e, _g), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pr, yg, e), e;
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
He.DEFAULT_UP = /* @__PURE__ */ new w(0, 1, 0);
He.DEFAULT_MATRIX_AUTO_UPDATE = !0;
He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const pn = /* @__PURE__ */ new w(), Wn = /* @__PURE__ */ new w(), fc = /* @__PURE__ */ new w(), Xn = /* @__PURE__ */ new w(), xs = /* @__PURE__ */ new w(), vs = /* @__PURE__ */ new w(), su = /* @__PURE__ */ new w(), pc = /* @__PURE__ */ new w(), mc = /* @__PURE__ */ new w(), gc = /* @__PURE__ */ new w();
let xo = !1;
class qt {
  constructor(e = new w(), t = new w(), n = new w()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), pn.subVectors(e, t), i.cross(pn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    pn.subVectors(i, t), Wn.subVectors(n, t), fc.subVectors(e, t);
    const o = pn.dot(pn), a = pn.dot(Wn), c = pn.dot(fc), l = Wn.dot(Wn), h = Wn.dot(fc), u = o * l - a * a;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, f = (l * c - a * h) * d, m = (o * h - a * c) * d;
    return s.set(1 - f - m, m, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Xn), Xn.x >= 0 && Xn.y >= 0 && Xn.x + Xn.y <= 1;
  }
  static getUV(e, t, n, i, s, o, a, c) {
    return xo === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), xo = !0), this.getInterpolation(e, t, n, i, s, o, a, c);
  }
  static getInterpolation(e, t, n, i, s, o, a, c) {
    return this.getBarycoord(e, t, n, i, Xn), c.setScalar(0), c.addScaledVector(s, Xn.x), c.addScaledVector(o, Xn.y), c.addScaledVector(a, Xn.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return pn.subVectors(n, t), Wn.subVectors(e, t), pn.cross(Wn).dot(i) < 0;
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
    return pn.subVectors(this.c, this.b), Wn.subVectors(this.a, this.b), pn.cross(Wn).length() * 0.5;
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
    return xo === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), xo = !0), qt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
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
    xs.subVectors(i, n), vs.subVectors(s, n), pc.subVectors(e, n);
    const c = xs.dot(pc), l = vs.dot(pc);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    mc.subVectors(e, i);
    const h = xs.dot(mc), u = vs.dot(mc);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(xs, o);
    gc.subVectors(e, s);
    const f = xs.dot(gc), m = vs.dot(gc);
    if (m >= 0 && f <= m)
      return t.copy(s);
    const _ = f * l - c * m;
    if (_ <= 0 && l >= 0 && m <= 0)
      return a = l / (l - m), t.copy(n).addScaledVector(vs, a);
    const g = h * m - f * u;
    if (g <= 0 && u - h >= 0 && f - m >= 0)
      return su.subVectors(s, i), a = (u - h) / (u - h + (f - m)), t.copy(i).addScaledVector(su, a);
    const p = 1 / (g + _ + d);
    return o = _ * p, a = d * p, t.copy(n).addScaledVector(xs, o).addScaledVector(vs, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let vg = 0;
class wt extends ii {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: vg++ }), this.uuid = en(), this.name = "", this.type = "Material", this.blending = ji, this.side = Un, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Gl, this.blendDst = Wl, this.blendEquation = Yi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = fa, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Df, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ha, this.stencilZFail = ha, this.stencilZPass = ha, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ji && (n.blending = this.blending), this.side !== Un && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = this.alphaHash), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
const $f = {
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
}, mn = { h: 0, s: 0, l: 0 }, vo = { h: 0, s: 0, l: 0 };
function _c(r, e, t) {
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
  setHex(e, t = Ue) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, rn.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = rn.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, rn.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = rn.workingColorSpace) {
    if (e = nh(e, 1), t = yt(t, 0, 1), n = yt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = _c(o, s, e + 1 / 3), this.g = _c(o, s, e), this.b = _c(o, s, e - 1 / 3);
    }
    return rn.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ue) {
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
  setColorName(e, t = Ue) {
    const n = $f[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Gs(e.r), this.g = Gs(e.g), this.b = Gs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = rc(e.r), this.g = rc(e.g), this.b = rc(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ue) {
    return rn.fromWorkingColorSpace(Nt.copy(this), e), Math.round(yt(Nt.r * 255, 0, 255)) * 65536 + Math.round(yt(Nt.g * 255, 0, 255)) * 256 + Math.round(yt(Nt.b * 255, 0, 255));
  }
  getHexString(e = Ue) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = rn.workingColorSpace) {
    rn.fromWorkingColorSpace(Nt.copy(this), t);
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
  getRGB(e, t = rn.workingColorSpace) {
    return rn.fromWorkingColorSpace(Nt.copy(this), t), e.r = Nt.r, e.g = Nt.g, e.b = Nt.b, e;
  }
  getStyle(e = Ue) {
    rn.fromWorkingColorSpace(Nt.copy(this), e);
    const t = Nt.r, n = Nt.g, i = Nt.b;
    return e !== Ue ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(mn), mn.h += e, mn.s += t, mn.l += n, this.setHSL(mn.h, mn.s, mn.l), this;
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
    this.getHSL(mn), e.getHSL(vo);
    const n = Pr(mn.h, vo.h, t), i = Pr(mn.s, vo.s, t), s = Pr(mn.l, vo.l, t);
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
he.NAMES = $f;
class Qt extends wt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new he(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = jr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const qn = /* @__PURE__ */ Mg();
function Mg() {
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
  Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), r = yt(r, -65504, 65504), qn.floatView[0] = r;
  const e = qn.uint32View[0], t = e >> 23 & 511;
  return qn.baseTable[t] + ((e & 8388607) >> qn.shiftTable[t]);
}
function Cr(r) {
  const e = r >> 10;
  return qn.uint32View[0] = qn.mantissaTable[qn.offsetTable[e] + (r & 1023)] + qn.exponentTable[e], qn.floatView[0];
}
const Sg = {
  toHalfFloat: Yt,
  fromHalfFloat: Cr
}, Tt = /* @__PURE__ */ new w(), Mo = /* @__PURE__ */ new J();
class st {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = zr, this.updateRange = { offset: 0, count: -1 }, this.gpuType = Ln, this.version = 0;
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
        Mo.fromBufferAttribute(this, t), Mo.applyMatrix3(e), this.setXY(t, Mo.x, Mo.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Tt.fromBufferAttribute(this, t), Tt.applyMatrix3(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyMatrix4(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyNormalMatrix(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.transformDirection(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
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
    return this.name !== "" && (e.name = this.name), this.usage !== zr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class Eg extends st {
  constructor(e, t, n) {
    super(new Int8Array(e), t, n);
  }
}
class Tg extends st {
  constructor(e, t, n) {
    super(new Uint8Array(e), t, n);
  }
}
class bg extends st {
  constructor(e, t, n) {
    super(new Uint8ClampedArray(e), t, n);
  }
}
class Ag extends st {
  constructor(e, t, n) {
    super(new Int16Array(e), t, n);
  }
}
class rh extends st {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class wg extends st {
  constructor(e, t, n) {
    super(new Int32Array(e), t, n);
  }
}
class oh extends st {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Rg extends st {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n), this.isFloat16BufferAttribute = !0;
  }
  getX(e) {
    let t = Cr(this.array[e * this.itemSize]);
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize] = Yt(t), this;
  }
  getY(e) {
    let t = Cr(this.array[e * this.itemSize + 1]);
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 1] = Yt(t), this;
  }
  getZ(e) {
    let t = Cr(this.array[e * this.itemSize + 2]);
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ge(t, this.array)), this.array[e * this.itemSize + 2] = Yt(t), this;
  }
  getW(e) {
    let t = Cr(this.array[e * this.itemSize + 3]);
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
class xe extends st {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
class Cg extends st {
  constructor(e, t, n) {
    super(new Float64Array(e), t, n);
  }
}
let Lg = 0;
const nn = /* @__PURE__ */ new De(), yc = /* @__PURE__ */ new He(), Ms = /* @__PURE__ */ new w(), Jt = /* @__PURE__ */ new Mn(), mr = /* @__PURE__ */ new Mn(), Lt = /* @__PURE__ */ new w();
class Ye extends ii {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Lg++ }), this.uuid = en(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Yf(e) ? oh : rh)(e, 1) : this.index = e, this;
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
    return nn.makeRotationFromQuaternion(e), this.applyMatrix4(nn), this;
  }
  rotateX(e) {
    return nn.makeRotationX(e), this.applyMatrix4(nn), this;
  }
  rotateY(e) {
    return nn.makeRotationY(e), this.applyMatrix4(nn), this;
  }
  rotateZ(e) {
    return nn.makeRotationZ(e), this.applyMatrix4(nn), this;
  }
  translate(e, t, n) {
    return nn.makeTranslation(e, t, n), this.applyMatrix4(nn), this;
  }
  scale(e, t, n) {
    return nn.makeScale(e, t, n), this.applyMatrix4(nn), this;
  }
  lookAt(e) {
    return yc.lookAt(e), yc.updateMatrix(), this.applyMatrix4(yc.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ms).negate(), this.translate(Ms.x, Ms.y, Ms.z), this;
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
    this.boundingBox === null && (this.boundingBox = new Mn());
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
          Jt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Lt.addVectors(this.boundingBox.min, Jt.min), this.boundingBox.expandByPoint(Lt), Lt.addVectors(this.boundingBox.max, Jt.max), this.boundingBox.expandByPoint(Lt)) : (this.boundingBox.expandByPoint(Jt.min), this.boundingBox.expandByPoint(Jt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new dn());
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
          mr.setFromBufferAttribute(a), this.morphTargetsRelative ? (Lt.addVectors(Jt.min, mr.min), Jt.expandByPoint(Lt), Lt.addVectors(Jt.max, mr.max), Jt.expandByPoint(Lt)) : (Jt.expandByPoint(mr.min), Jt.expandByPoint(mr.max));
        }
      Jt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        Lt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Lt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            Lt.fromBufferAttribute(a, l), c && (Ms.fromBufferAttribute(e, l), Lt.add(Ms)), i = Math.max(i, n.distanceToSquared(Lt));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new st(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let A = 0; A < a; A++)
      l[A] = new w(), h[A] = new w();
    const u = new w(), d = new w(), f = new w(), m = new J(), _ = new J(), g = new J(), p = new w(), v = new w();
    function x(A, z, $) {
      u.fromArray(i, A * 3), d.fromArray(i, z * 3), f.fromArray(i, $ * 3), m.fromArray(o, A * 2), _.fromArray(o, z * 2), g.fromArray(o, $ * 2), d.sub(u), f.sub(u), _.sub(m), g.sub(m);
      const O = 1 / (_.x * g.y - g.x * _.y);
      !isFinite(O) || (p.copy(d).multiplyScalar(g.y).addScaledVector(f, -_.y).multiplyScalar(O), v.copy(f).multiplyScalar(_.x).addScaledVector(d, -g.x).multiplyScalar(O), l[A].add(p), l[z].add(p), l[$].add(p), h[A].add(v), h[z].add(v), h[$].add(v));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, z = y.length; A < z; ++A) {
      const $ = y[A], O = $.start, N = $.count;
      for (let H = O, j = O + N; H < j; H += 3)
        x(
          n[H + 0],
          n[H + 1],
          n[H + 2]
        );
    }
    const S = new w(), E = new w(), b = new w(), L = new w();
    function M(A) {
      b.fromArray(s, A * 3), L.copy(b);
      const z = l[A];
      S.copy(z), S.sub(b.multiplyScalar(b.dot(z))).normalize(), E.crossVectors(L, z);
      const O = E.dot(h[A]) < 0 ? -1 : 1;
      c[A * 4] = S.x, c[A * 4 + 1] = S.y, c[A * 4 + 2] = S.z, c[A * 4 + 3] = O;
    }
    for (let A = 0, z = y.length; A < z; ++A) {
      const $ = y[A], O = $.start, N = $.count;
      for (let H = O, j = O + N; H < j; H += 3)
        M(n[H + 0]), M(n[H + 1]), M(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new st(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
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
      Lt.fromBufferAttribute(e, t), Lt.normalize(), e.setXYZ(t, Lt.x, Lt.y, Lt.z);
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
      return new st(d, h, u);
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
const ru = /* @__PURE__ */ new De(), Oi = /* @__PURE__ */ new ar(), So = /* @__PURE__ */ new dn(), ou = /* @__PURE__ */ new w(), Ss = /* @__PURE__ */ new w(), Es = /* @__PURE__ */ new w(), Ts = /* @__PURE__ */ new w(), xc = /* @__PURE__ */ new w(), Eo = /* @__PURE__ */ new w(), To = /* @__PURE__ */ new J(), bo = /* @__PURE__ */ new J(), Ao = /* @__PURE__ */ new J(), au = /* @__PURE__ */ new w(), cu = /* @__PURE__ */ new w(), lu = /* @__PURE__ */ new w(), wo = /* @__PURE__ */ new w(), Ro = /* @__PURE__ */ new w();
class bt extends He {
  constructor(e = new Ye(), t = new Qt()) {
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
      Eo.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = a[c], u = s[c];
        h !== 0 && (xc.fromBufferAttribute(u, e), o ? Eo.addScaledVector(xc, h) : Eo.addScaledVector(xc.sub(t), h));
      }
      t.add(Eo);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), So.copy(n.boundingSphere), So.applyMatrix4(s), Oi.copy(e.ray).recast(e.near), !(So.containsPoint(Oi.origin) === !1 && (Oi.intersectSphere(So, ou) === null || Oi.origin.distanceToSquared(ou) > (e.far - e.near) ** 2)) && (ru.copy(s).invert(), Oi.copy(e.ray).applyMatrix4(ru), !(n.boundingBox !== null && Oi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Oi)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, o = this.material, a = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let m = 0, _ = d.length; m < _; m++) {
          const g = d[m], p = o[g.materialIndex], v = Math.max(g.start, f.start), x = Math.min(a.count, Math.min(g.start + g.count, f.start + f.count));
          for (let y = v, S = x; y < S; y += 3) {
            const E = a.getX(y), b = a.getX(y + 1), L = a.getX(y + 2);
            i = Co(this, p, e, n, l, h, u, E, b, L), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = g.materialIndex, t.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          const v = a.getX(g), x = a.getX(g + 1), y = a.getX(g + 2);
          i = Co(this, o, e, n, l, h, u, v, x, y), i && (i.faceIndex = Math.floor(g / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(o))
        for (let m = 0, _ = d.length; m < _; m++) {
          const g = d[m], p = o[g.materialIndex], v = Math.max(g.start, f.start), x = Math.min(c.count, Math.min(g.start + g.count, f.start + f.count));
          for (let y = v, S = x; y < S; y += 3) {
            const E = y, b = y + 1, L = y + 2;
            i = Co(this, p, e, n, l, h, u, E, b, L), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = g.materialIndex, t.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), _ = Math.min(c.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          const v = g, x = g + 1, y = g + 2;
          i = Co(this, o, e, n, l, h, u, v, x, y), i && (i.faceIndex = Math.floor(g / 3), t.push(i));
        }
      }
  }
}
function Pg(r, e, t, n, i, s, o, a) {
  let c;
  if (e.side === Wt ? c = n.intersectTriangle(o, s, i, !0, a) : c = n.intersectTriangle(i, s, o, e.side === Un, a), c === null)
    return null;
  Ro.copy(a), Ro.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(Ro);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Ro.clone(),
    object: r
  };
}
function Co(r, e, t, n, i, s, o, a, c, l) {
  r.getVertexPosition(a, Ss), r.getVertexPosition(c, Es), r.getVertexPosition(l, Ts);
  const h = Pg(r, e, t, n, Ss, Es, Ts, wo);
  if (h) {
    i && (To.fromBufferAttribute(i, a), bo.fromBufferAttribute(i, c), Ao.fromBufferAttribute(i, l), h.uv = qt.getInterpolation(wo, Ss, Es, Ts, To, bo, Ao, new J())), s && (To.fromBufferAttribute(s, a), bo.fromBufferAttribute(s, c), Ao.fromBufferAttribute(s, l), h.uv1 = qt.getInterpolation(wo, Ss, Es, Ts, To, bo, Ao, new J()), h.uv2 = h.uv1), o && (au.fromBufferAttribute(o, a), cu.fromBufferAttribute(o, c), lu.fromBufferAttribute(o, l), h.normal = qt.getInterpolation(wo, Ss, Es, Ts, au, cu, lu, new w()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a,
      b: c,
      c: l,
      normal: new w(),
      materialIndex: 0
    };
    qt.getNormal(Ss, Es, Ts, u.normal), h.face = u;
  }
  return h;
}
class bi extends Ye {
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
    function m(_, g, p, v, x, y, S, E, b, L, M) {
      const A = y / b, z = S / L, $ = y / 2, O = S / 2, N = E / 2, H = b + 1, j = L + 1;
      let q = 0, K = 0;
      const ne = new w();
      for (let Q = 0; Q < j; Q++) {
        const F = Q * z - O;
        for (let G = 0; G < H; G++) {
          const ue = G * A - $;
          ne[_] = ue * v, ne[g] = F * x, ne[p] = N, l.push(ne.x, ne.y, ne.z), ne[_] = 0, ne[g] = 0, ne[p] = E > 0 ? 1 : -1, h.push(ne.x, ne.y, ne.z), u.push(G / b), u.push(1 - Q / L), q += 1;
        }
      }
      for (let Q = 0; Q < L; Q++)
        for (let F = 0; F < b; F++) {
          const G = d + F + H * Q, ue = d + F + H * (Q + 1), fe = d + (F + 1) + H * (Q + 1), me = d + (F + 1) + H * Q;
          c.push(G, ue, me), c.push(ue, fe, me), K += 6;
        }
      a.addGroup(f, K, M), f += K, d += q;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new bi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Js(r) {
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
    const n = Js(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Ig(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function Zf(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : yn;
}
const Kf = { clone: Js, merge: Gt };
var Ug = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Og = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Dn extends wt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ug, this.fragmentShader = Og, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Js(e.uniforms), this.uniformsGroups = Ig(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class Ra extends He {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new De(), this.projectionMatrix = new De(), this.projectionMatrixInverse = new De(), this.coordinateSystem = Pn;
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
class At extends Ra {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ks * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Qi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ks * 2 * Math.atan(
      Math.tan(Qi * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(Qi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
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
const bs = -90, As = 1;
class Jf extends He {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null;
    const i = new At(bs, As, e, t);
    i.layers = this.layers, this.add(i);
    const s = new At(bs, As, e, t);
    s.layers = this.layers, this.add(s);
    const o = new At(bs, As, e, t);
    o.layers = this.layers, this.add(o);
    const a = new At(bs, As, e, t);
    a.layers = this.layers, this.add(a);
    const c = new At(bs, As, e, t);
    c.layers = this.layers, this.add(c);
    const l = new At(bs, As, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, o, a, c] = t;
    for (const l of t)
      this.remove(l);
    if (e === Pn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Hr)
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
class eo extends ft {
  constructor(e, t, n, i, s, o, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ei, super(e, t, n, i, s, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class jf extends xn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === yi ? Ue : xi), this.texture = new eo(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : ut;
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
    }, i = new bi(5, 5, 5), s = new Dn({
      name: "CubemapFromEquirect",
      uniforms: Js(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Wt,
      blending: Kn
    });
    s.uniforms.tEquirect.value = t;
    const o = new bt(i, s), a = t.minFilter;
    return t.minFilter === On && (t.minFilter = ut), new Jf(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const vc = /* @__PURE__ */ new w(), Dg = /* @__PURE__ */ new w(), Ng = /* @__PURE__ */ new Xe();
class fi {
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
    const i = vc.subVectors(n, t).cross(Dg.subVectors(e, t)).normalize();
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
    const n = e.delta(vc), i = this.normal.dot(n);
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
    const n = t || Ng.getNormalMatrix(e), i = this.coplanarPoint(vc).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Di = /* @__PURE__ */ new dn(), Lo = /* @__PURE__ */ new w();
class Ca {
  constructor(e = new fi(), t = new fi(), n = new fi(), i = new fi(), s = new fi(), o = new fi()) {
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
  setFromProjectionMatrix(e, t = Pn) {
    const n = this.planes, i = e.elements, s = i[0], o = i[1], a = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], f = i[8], m = i[9], _ = i[10], g = i[11], p = i[12], v = i[13], x = i[14], y = i[15];
    if (n[0].setComponents(c - s, d - l, g - f, y - p).normalize(), n[1].setComponents(c + s, d + l, g + f, y + p).normalize(), n[2].setComponents(c + o, d + h, g + m, y + v).normalize(), n[3].setComponents(c - o, d - h, g - m, y - v).normalize(), n[4].setComponents(c - a, d - u, g - _, y - x).normalize(), t === Pn)
      n[5].setComponents(c + a, d + u, g + _, y + x).normalize();
    else if (t === Hr)
      n[5].setComponents(a, u, _, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Di);
  }
  intersectsSprite(e) {
    return Di.center.set(0, 0, 0), Di.radius = 0.7071067811865476, Di.applyMatrix4(e.matrixWorld), this.intersectsSphere(Di);
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
      if (Lo.x = i.normal.x > 0 ? e.max.x : e.min.x, Lo.y = i.normal.y > 0 ? e.max.y : e.min.y, Lo.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Lo) < 0)
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
function Qf() {
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
function Fg(r, e) {
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
class to extends Ye {
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
    return new to(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Bg = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, zg = `#ifdef USE_ALPHAHASH
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
#endif`, Hg = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, kg = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Vg = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Gg = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Wg = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Xg = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Yg = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, qg = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, $g = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Zg = `#ifdef USE_IRIDESCENCE
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
#endif`, Kg = `#ifdef USE_BUMPMAP
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
#endif`, Jg = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, jg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Qg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, e_ = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, t_ = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, n_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, i_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, s_ = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, r_ = `#define PI 3.141592653589793
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
} // validated`, o_ = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, a_ = `vec3 transformedNormal = objectNormal;
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
#endif`, c_ = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, l_ = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, h_ = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, u_ = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, d_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );", f_ = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, p_ = `#ifdef USE_ENVMAP
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
#endif`, m_ = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, g_ = `#ifdef USE_ENVMAP
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
#endif`, __ = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, y_ = `#ifdef USE_ENVMAP
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
#endif`, x_ = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, v_ = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, M_ = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, S_ = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, E_ = `#ifdef USE_GRADIENTMAP
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
}`, T_ = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, b_ = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, A_ = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, w_ = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, R_ = `uniform bool receiveShadow;
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
#endif`, C_ = `#ifdef USE_ENVMAP
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
#endif`, L_ = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, P_ = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, I_ = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, U_ = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, O_ = `PhysicalMaterial material;
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
#endif`, D_ = `struct PhysicalMaterial {
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
}`, N_ = `
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
#endif`, F_ = `#if defined( RE_IndirectDiffuse )
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
#endif`, B_ = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, z_ = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, H_ = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, k_ = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, V_ = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, G_ = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, W_ = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, X_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Y_ = `#if defined( USE_POINTS_UV )
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
#endif`, q_ = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, $_ = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Z_ = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, K_ = `#ifdef USE_MORPHNORMALS
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
#endif`, J_ = `#ifdef USE_MORPHTARGETS
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
#endif`, j_ = `#ifdef USE_MORPHTARGETS
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
#endif`, Q_ = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, e0 = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, t0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, n0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, i0 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, s0 = `#ifdef USE_NORMALMAP
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
#endif`, r0 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, o0 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, a0 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, c0 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, l0 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, h0 = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, u0 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, d0 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, f0 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, p0 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, m0 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, g0 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, _0 = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, y0 = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, x0 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, v0 = `float getShadowMask() {
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
}`, M0 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, S0 = `#ifdef USE_SKINNING
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
#endif`, E0 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, T0 = `#ifdef USE_SKINNING
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
#endif`, b0 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, A0 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, w0 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, R0 = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, C0 = `#ifdef USE_TRANSMISSION
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
#endif`, L0 = `#ifdef USE_TRANSMISSION
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
#endif`, P0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, I0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, U0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, O0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const D0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, N0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, F0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, B0 = `#ifdef ENVMAP_TYPE_CUBE
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
}`, z0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, H0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, k0 = `#include <common>
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
}`, V0 = `#if DEPTH_PACKING == 3200
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
}`, G0 = `#define DISTANCE
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
}`, W0 = `#define DISTANCE
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
}`, X0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Y0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, q0 = `uniform float scale;
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
}`, $0 = `uniform vec3 diffuse;
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
}`, Z0 = `#include <common>
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
}`, K0 = `uniform vec3 diffuse;
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
}`, J0 = `#define LAMBERT
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
}`, j0 = `#define LAMBERT
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
}`, Q0 = `#define MATCAP
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
}`, ey = `#define MATCAP
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
}`, ty = `#define NORMAL
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
}`, ny = `#define NORMAL
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
}`, iy = `#define PHONG
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
}`, sy = `#define PHONG
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
}`, ry = `#define STANDARD
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
}`, oy = `#define STANDARD
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
}`, ay = `#define TOON
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
}`, cy = `#define TOON
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
}`, ly = `uniform float size;
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
}`, hy = `uniform vec3 diffuse;
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
}`, uy = `#include <common>
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
}`, dy = `uniform vec3 color;
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
}`, fy = `uniform float rotation;
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
}`, py = `uniform vec3 diffuse;
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
  alphahash_fragment: Bg,
  alphahash_pars_fragment: zg,
  alphamap_fragment: Hg,
  alphamap_pars_fragment: kg,
  alphatest_fragment: Vg,
  alphatest_pars_fragment: Gg,
  aomap_fragment: Wg,
  aomap_pars_fragment: Xg,
  begin_vertex: Yg,
  beginnormal_vertex: qg,
  bsdfs: $g,
  iridescence_fragment: Zg,
  bumpmap_pars_fragment: Kg,
  clipping_planes_fragment: Jg,
  clipping_planes_pars_fragment: jg,
  clipping_planes_pars_vertex: Qg,
  clipping_planes_vertex: e_,
  color_fragment: t_,
  color_pars_fragment: n_,
  color_pars_vertex: i_,
  color_vertex: s_,
  common: r_,
  cube_uv_reflection_fragment: o_,
  defaultnormal_vertex: a_,
  displacementmap_pars_vertex: c_,
  displacementmap_vertex: l_,
  emissivemap_fragment: h_,
  emissivemap_pars_fragment: u_,
  colorspace_fragment: d_,
  colorspace_pars_fragment: f_,
  envmap_fragment: p_,
  envmap_common_pars_fragment: m_,
  envmap_pars_fragment: g_,
  envmap_pars_vertex: __,
  envmap_physical_pars_fragment: C_,
  envmap_vertex: y_,
  fog_vertex: x_,
  fog_pars_vertex: v_,
  fog_fragment: M_,
  fog_pars_fragment: S_,
  gradientmap_pars_fragment: E_,
  lightmap_fragment: T_,
  lightmap_pars_fragment: b_,
  lights_lambert_fragment: A_,
  lights_lambert_pars_fragment: w_,
  lights_pars_begin: R_,
  lights_toon_fragment: L_,
  lights_toon_pars_fragment: P_,
  lights_phong_fragment: I_,
  lights_phong_pars_fragment: U_,
  lights_physical_fragment: O_,
  lights_physical_pars_fragment: D_,
  lights_fragment_begin: N_,
  lights_fragment_maps: F_,
  lights_fragment_end: B_,
  logdepthbuf_fragment: z_,
  logdepthbuf_pars_fragment: H_,
  logdepthbuf_pars_vertex: k_,
  logdepthbuf_vertex: V_,
  map_fragment: G_,
  map_pars_fragment: W_,
  map_particle_fragment: X_,
  map_particle_pars_fragment: Y_,
  metalnessmap_fragment: q_,
  metalnessmap_pars_fragment: $_,
  morphcolor_vertex: Z_,
  morphnormal_vertex: K_,
  morphtarget_pars_vertex: J_,
  morphtarget_vertex: j_,
  normal_fragment_begin: Q_,
  normal_fragment_maps: e0,
  normal_pars_fragment: t0,
  normal_pars_vertex: n0,
  normal_vertex: i0,
  normalmap_pars_fragment: s0,
  clearcoat_normal_fragment_begin: r0,
  clearcoat_normal_fragment_maps: o0,
  clearcoat_pars_fragment: a0,
  iridescence_pars_fragment: c0,
  opaque_fragment: l0,
  packing: h0,
  premultiplied_alpha_fragment: u0,
  project_vertex: d0,
  dithering_fragment: f0,
  dithering_pars_fragment: p0,
  roughnessmap_fragment: m0,
  roughnessmap_pars_fragment: g0,
  shadowmap_pars_fragment: _0,
  shadowmap_pars_vertex: y0,
  shadowmap_vertex: x0,
  shadowmask_pars_fragment: v0,
  skinbase_vertex: M0,
  skinning_pars_vertex: S0,
  skinning_vertex: E0,
  skinnormal_vertex: T0,
  specularmap_fragment: b0,
  specularmap_pars_fragment: A0,
  tonemapping_fragment: w0,
  tonemapping_pars_fragment: R0,
  transmission_fragment: C0,
  transmission_pars_fragment: L0,
  uv_pars_fragment: P0,
  uv_pars_vertex: I0,
  uv_vertex: U0,
  worldpos_vertex: O0,
  background_vert: D0,
  background_frag: N0,
  backgroundCube_vert: F0,
  backgroundCube_frag: B0,
  cube_vert: z0,
  cube_frag: H0,
  depth_vert: k0,
  depth_frag: V0,
  distanceRGBA_vert: G0,
  distanceRGBA_frag: W0,
  equirect_vert: X0,
  equirect_frag: Y0,
  linedashed_vert: q0,
  linedashed_frag: $0,
  meshbasic_vert: Z0,
  meshbasic_frag: K0,
  meshlambert_vert: J0,
  meshlambert_frag: j0,
  meshmatcap_vert: Q0,
  meshmatcap_frag: ey,
  meshnormal_vert: ty,
  meshnormal_frag: ny,
  meshphong_vert: iy,
  meshphong_frag: sy,
  meshphysical_vert: ry,
  meshphysical_frag: oy,
  meshtoon_vert: ay,
  meshtoon_frag: cy,
  points_vert: ly,
  points_frag: hy,
  shadow_vert: uy,
  shadow_frag: dy,
  sprite_vert: fy,
  sprite_frag: py
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
    normalScale: { value: /* @__PURE__ */ new J(1, 1) }
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
    center: { value: /* @__PURE__ */ new J(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Xe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Xe() },
    alphaTest: { value: 0 }
  }
}, gn = {
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
gn.physical = {
  uniforms: /* @__PURE__ */ Gt([
    gn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Xe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Xe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new J(1, 1) },
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
      transmissionSamplerSize: { value: /* @__PURE__ */ new J() },
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
      anisotropyVector: { value: /* @__PURE__ */ new J() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Xe() }
    }
  ]),
  vertexShader: Ve.meshphysical_vert,
  fragmentShader: Ve.meshphysical_frag
};
const Po = { r: 0, b: 0, g: 0 };
function my(r, e, t, n, i, s, o) {
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
    (r.autoClear || v) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), x && (x.isCubeTexture || x.mapping === or) ? (h === void 0 && (h = new bt(
      new bi(1, 1, 1),
      new Dn({
        name: "BackgroundCubeMaterial",
        uniforms: Js(gn.backgroundCube.uniforms),
        vertexShader: gn.backgroundCube.vertexShader,
        fragmentShader: gn.backgroundCube.fragmentShader,
        side: Wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(E, b, L) {
      this.matrixWorld.copyPosition(L.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = x.colorSpace !== Ue, (u !== x || d !== x.version || f !== r.toneMapping) && (h.material.needsUpdate = !0, u = x, d = x.version, f = r.toneMapping), h.layers.enableAll(), g.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new bt(
      new to(2, 2),
      new Dn({
        name: "BackgroundMaterial",
        uniforms: Js(gn.background.uniforms),
        vertexShader: gn.background.vertexShader,
        fragmentShader: gn.background.fragmentShader,
        side: Un,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, l.material.toneMapped = x.colorSpace !== Ue, x.matrixAutoUpdate === !0 && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || d !== x.version || f !== r.toneMapping) && (l.material.needsUpdate = !0, u = x, d = x.version, f = r.toneMapping), l.layers.enableAll(), g.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function _(g, p) {
    g.getRGB(Po, Zf(r)), n.buffers.color.setClear(Po.r, Po.g, Po.b, p, o);
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
function gy(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = g(null);
  let l = c, h = !1;
  function u(N, H, j, q, K) {
    let ne = !1;
    if (o) {
      const Q = _(q, j, H);
      l !== Q && (l = Q, f(l.object)), ne = p(N, q, j, K), ne && v(N, q, j, K);
    } else {
      const Q = H.wireframe === !0;
      (l.geometry !== q.id || l.program !== j.id || l.wireframe !== Q) && (l.geometry = q.id, l.program = j.id, l.wireframe = Q, ne = !0);
    }
    K !== null && t.update(K, r.ELEMENT_ARRAY_BUFFER), (ne || h) && (h = !1, L(N, H, j, q), K !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(K).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function f(N) {
    return n.isWebGL2 ? r.bindVertexArray(N) : s.bindVertexArrayOES(N);
  }
  function m(N) {
    return n.isWebGL2 ? r.deleteVertexArray(N) : s.deleteVertexArrayOES(N);
  }
  function _(N, H, j) {
    const q = j.wireframe === !0;
    let K = a[N.id];
    K === void 0 && (K = {}, a[N.id] = K);
    let ne = K[H.id];
    ne === void 0 && (ne = {}, K[H.id] = ne);
    let Q = ne[q];
    return Q === void 0 && (Q = g(d()), ne[q] = Q), Q;
  }
  function g(N) {
    const H = [], j = [], q = [];
    for (let K = 0; K < i; K++)
      H[K] = 0, j[K] = 0, q[K] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: j,
      attributeDivisors: q,
      object: N,
      attributes: {},
      index: null
    };
  }
  function p(N, H, j, q) {
    const K = l.attributes, ne = H.attributes;
    let Q = 0;
    const F = j.getAttributes();
    for (const G in F)
      if (F[G].location >= 0) {
        const fe = K[G];
        let me = ne[G];
        if (me === void 0 && (G === "instanceMatrix" && N.instanceMatrix && (me = N.instanceMatrix), G === "instanceColor" && N.instanceColor && (me = N.instanceColor)), fe === void 0 || fe.attribute !== me || me && fe.data !== me.data)
          return !0;
        Q++;
      }
    return l.attributesNum !== Q || l.index !== q;
  }
  function v(N, H, j, q) {
    const K = {}, ne = H.attributes;
    let Q = 0;
    const F = j.getAttributes();
    for (const G in F)
      if (F[G].location >= 0) {
        let fe = ne[G];
        fe === void 0 && (G === "instanceMatrix" && N.instanceMatrix && (fe = N.instanceMatrix), G === "instanceColor" && N.instanceColor && (fe = N.instanceColor));
        const me = {};
        me.attribute = fe, fe && fe.data && (me.data = fe.data), K[G] = me, Q++;
      }
    l.attributes = K, l.attributesNum = Q, l.index = q;
  }
  function x() {
    const N = l.newAttributes;
    for (let H = 0, j = N.length; H < j; H++)
      N[H] = 0;
  }
  function y(N) {
    S(N, 0);
  }
  function S(N, H) {
    const j = l.newAttributes, q = l.enabledAttributes, K = l.attributeDivisors;
    j[N] = 1, q[N] === 0 && (r.enableVertexAttribArray(N), q[N] = 1), K[N] !== H && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](N, H), K[N] = H);
  }
  function E() {
    const N = l.newAttributes, H = l.enabledAttributes;
    for (let j = 0, q = H.length; j < q; j++)
      H[j] !== N[j] && (r.disableVertexAttribArray(j), H[j] = 0);
  }
  function b(N, H, j, q, K, ne, Q) {
    Q === !0 ? r.vertexAttribIPointer(N, H, j, K, ne) : r.vertexAttribPointer(N, H, j, q, K, ne);
  }
  function L(N, H, j, q) {
    if (n.isWebGL2 === !1 && (N.isInstancedMesh || q.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const K = q.attributes, ne = j.getAttributes(), Q = H.defaultAttributeValues;
    for (const F in ne) {
      const G = ne[F];
      if (G.location >= 0) {
        let ue = K[F];
        if (ue === void 0 && (F === "instanceMatrix" && N.instanceMatrix && (ue = N.instanceMatrix), F === "instanceColor" && N.instanceColor && (ue = N.instanceColor)), ue !== void 0) {
          const fe = ue.normalized, me = ue.itemSize, be = t.get(ue);
          if (be === void 0)
            continue;
          const Ae = be.buffer, we = be.type, nt = be.bytesPerElement, lt = n.isWebGL2 === !0 && (we === r.INT || we === r.UNSIGNED_INT || ue.gpuType === Yl);
          if (ue.isInterleavedBufferAttribute) {
            const Ie = ue.data, P = Ie.stride, ae = ue.offset;
            if (Ie.isInstancedInterleavedBuffer) {
              for (let Z = 0; Z < G.locationSize; Z++)
                S(G.location + Z, Ie.meshPerAttribute);
              N.isInstancedMesh !== !0 && q._maxInstanceCount === void 0 && (q._maxInstanceCount = Ie.meshPerAttribute * Ie.count);
            } else
              for (let Z = 0; Z < G.locationSize; Z++)
                y(G.location + Z);
            r.bindBuffer(r.ARRAY_BUFFER, Ae);
            for (let Z = 0; Z < G.locationSize; Z++)
              b(
                G.location + Z,
                me / G.locationSize,
                we,
                fe,
                P * nt,
                (ae + me / G.locationSize * Z) * nt,
                lt
              );
          } else {
            if (ue.isInstancedBufferAttribute) {
              for (let Ie = 0; Ie < G.locationSize; Ie++)
                S(G.location + Ie, ue.meshPerAttribute);
              N.isInstancedMesh !== !0 && q._maxInstanceCount === void 0 && (q._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let Ie = 0; Ie < G.locationSize; Ie++)
                y(G.location + Ie);
            r.bindBuffer(r.ARRAY_BUFFER, Ae);
            for (let Ie = 0; Ie < G.locationSize; Ie++)
              b(
                G.location + Ie,
                me / G.locationSize,
                we,
                fe,
                me * nt,
                me / G.locationSize * Ie * nt,
                lt
              );
          }
        } else if (Q !== void 0) {
          const fe = Q[F];
          if (fe !== void 0)
            switch (fe.length) {
              case 2:
                r.vertexAttrib2fv(G.location, fe);
                break;
              case 3:
                r.vertexAttrib3fv(G.location, fe);
                break;
              case 4:
                r.vertexAttrib4fv(G.location, fe);
                break;
              default:
                r.vertexAttrib1fv(G.location, fe);
            }
        }
      }
    }
    E();
  }
  function M() {
    $();
    for (const N in a) {
      const H = a[N];
      for (const j in H) {
        const q = H[j];
        for (const K in q)
          m(q[K].object), delete q[K];
        delete H[j];
      }
      delete a[N];
    }
  }
  function A(N) {
    if (a[N.id] === void 0)
      return;
    const H = a[N.id];
    for (const j in H) {
      const q = H[j];
      for (const K in q)
        m(q[K].object), delete q[K];
      delete H[j];
    }
    delete a[N.id];
  }
  function z(N) {
    for (const H in a) {
      const j = a[H];
      if (j[N.id] === void 0)
        continue;
      const q = j[N.id];
      for (const K in q)
        m(q[K].object), delete q[K];
      delete j[N.id];
    }
  }
  function $() {
    O(), h = !0, l !== c && (l = c, f(l.object));
  }
  function O() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: $,
    resetDefaultState: O,
    dispose: M,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: z,
    initAttributes: x,
    enableAttribute: y,
    disableUnusedAttributes: E
  };
}
function _y(r, e, t, n) {
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
function yy(r, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const b = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(b) {
    if (b === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      b = "mediump";
    }
    return b === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
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
function xy(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new fi(), a = new Xe(), c = { value: null, needsUpdate: !1 };
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
function vy(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Dr ? o.mapping = ei : a === Nr && (o.mapping = vi), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Dr || a === Nr)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new jf(c.height / 2);
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
class no extends Ra {
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
const Hs = 4, hu = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], qi = 20, Mc = /* @__PURE__ */ new no(), uu = /* @__PURE__ */ new he();
let Sc = null;
const Xi = (1 + Math.sqrt(5)) / 2, ws = 1 / Xi, du = [
  /* @__PURE__ */ new w(1, 1, 1),
  /* @__PURE__ */ new w(-1, 1, 1),
  /* @__PURE__ */ new w(1, 1, -1),
  /* @__PURE__ */ new w(-1, 1, -1),
  /* @__PURE__ */ new w(0, Xi, ws),
  /* @__PURE__ */ new w(0, Xi, -ws),
  /* @__PURE__ */ new w(ws, 0, Xi),
  /* @__PURE__ */ new w(-ws, 0, Xi),
  /* @__PURE__ */ new w(Xi, ws, 0),
  /* @__PURE__ */ new w(-Xi, ws, 0)
];
class Ll {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Sc = this._renderer.getRenderTarget(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = mu(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = pu(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Sc), e.scissorTest = !1, Io(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ei || e.mapping === vi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Sc = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: ut,
      minFilter: ut,
      generateMipmaps: !1,
      type: $s,
      format: jt,
      colorSpace: yn,
      depthBuffer: !1
    }, i = fu(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = fu(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = My(s)), this._blurMaterial = Sy(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new bt(this._lodPlanes[0], e);
    this._renderer.compile(t, Mc);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new At(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(uu), h.toneMapping = Jn, h.autoClear = !1;
    const f = new Qt({
      name: "PMREM.Background",
      side: Wt,
      depthWrite: !1,
      depthTest: !1
    }), m = new bt(new bi(), f);
    let _ = !1;
    const g = e.background;
    g ? g.isColor && (f.color.copy(g), e.background = null, _ = !0) : (f.color.copy(uu), _ = !0);
    for (let p = 0; p < 6; p++) {
      const v = p % 3;
      v === 0 ? (a.up.set(0, c[p], 0), a.lookAt(l[p], 0, 0)) : v === 1 ? (a.up.set(0, 0, c[p]), a.lookAt(0, l[p], 0)) : (a.up.set(0, c[p], 0), a.lookAt(0, 0, l[p]));
      const x = this._cubeSize;
      Io(i, v * x, p > 2 ? x : 0, x, x), h.setRenderTarget(i), _ && h.render(m, a), h.render(e, a);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = g;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === ei || e.mapping === vi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = mu()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = pu());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new bt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Io(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Mc);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = du[(i - 1) % du.length];
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
    const h = 3, u = new bt(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, m = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * qi - 1), _ = s / m, g = isFinite(s) ? 1 + Math.floor(h * _) : qi;
    g > qi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);
    const p = [];
    let v = 0;
    for (let b = 0; b < qi; ++b) {
      const L = b / _, M = Math.exp(-L * L / 2);
      p.push(M), b === 0 ? v += M : b < g && (v += 2 * M);
    }
    for (let b = 0; b < p.length; b++)
      p[b] = p[b] / v;
    d.envMap.value = e.texture, d.samples.value = g, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: x } = this;
    d.dTheta.value = m, d.mipInt.value = x - n;
    const y = this._sizeLods[i], S = 3 * y * (i > x - Hs ? i - x + Hs : 0), E = 4 * (this._cubeSize - y);
    Io(t, S, E, 3 * y, 2 * y), c.setRenderTarget(t), c.render(u, Mc);
  }
}
function My(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - Hs + 1 + hu.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > r - Hs ? c = hu[o - r + Hs - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, m = 6, _ = 3, g = 2, p = 1, v = new Float32Array(_ * m * f), x = new Float32Array(g * m * f), y = new Float32Array(p * m * f);
    for (let E = 0; E < f; E++) {
      const b = E % 3 * 2 / 3 - 1, L = E > 2 ? 0 : -1, M = [
        b,
        L,
        0,
        b + 2 / 3,
        L,
        0,
        b + 2 / 3,
        L + 1,
        0,
        b,
        L,
        0,
        b + 2 / 3,
        L + 1,
        0,
        b,
        L + 1,
        0
      ];
      v.set(M, _ * m * E), x.set(d, g * m * E);
      const A = [E, E, E, E, E, E];
      y.set(A, p * m * E);
    }
    const S = new Ye();
    S.setAttribute("position", new st(v, _)), S.setAttribute("uv", new st(x, g)), S.setAttribute("faceIndex", new st(y, p)), e.push(S), i > Hs && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function fu(r, e, t) {
  const n = new xn(r, e, t);
  return n.texture.mapping = or, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Io(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Sy(r, e, t) {
  const n = new Float32Array(qi), i = new w(0, 1, 0);
  return new Dn({
    name: "SphericalGaussianBlur",
    defines: {
      n: qi,
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
    vertexShader: ah(),
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
    blending: Kn,
    depthTest: !1,
    depthWrite: !1
  });
}
function pu() {
  return new Dn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ah(),
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
    blending: Kn,
    depthTest: !1,
    depthWrite: !1
  });
}
function mu() {
  return new Dn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ah(),
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
    blending: Kn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ah() {
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
function Ey(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Dr || c === Nr, h = c === ei || c === vi;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new Ll(r)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new Ll(r));
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
function Ty(r) {
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
function by(r, e, t, n) {
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
        const S = v[x + 0], E = v[x + 1], b = v[x + 2];
        d.push(S, E, E, b, b, S);
      }
    } else if (m !== void 0) {
      const v = m.array;
      _ = m.version;
      for (let x = 0, y = v.length / 3 - 1; x < y; x += 3) {
        const S = x + 0, E = x + 1, b = x + 2;
        d.push(S, E, E, b, b, S);
      }
    } else
      return;
    const g = new (Yf(d) ? oh : rh)(d, 1);
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
function Ay(r, e, t, n) {
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
function wy(r) {
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
function Ry(r, e) {
  return r[0] - e[0];
}
function Cy(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function Ly(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new rt(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, u) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, _ = m !== void 0 ? m.length : 0;
      let g = s.get(h);
      if (g === void 0 || g.count !== _) {
        let H = function() {
          O.dispose(), s.delete(h), h.removeEventListener("dispose", H);
        };
        var f = H;
        g !== void 0 && g.texture.dispose();
        const x = h.morphAttributes.position !== void 0, y = h.morphAttributes.normal !== void 0, S = h.morphAttributes.color !== void 0, E = h.morphAttributes.position || [], b = h.morphAttributes.normal || [], L = h.morphAttributes.color || [];
        let M = 0;
        x === !0 && (M = 1), y === !0 && (M = 2), S === !0 && (M = 3);
        let A = h.attributes.position.count * M, z = 1;
        A > e.maxTextureSize && (z = Math.ceil(A / e.maxTextureSize), A = e.maxTextureSize);
        const $ = new Float32Array(A * z * 4 * _), O = new Aa($, A, z, _);
        O.type = Ln, O.needsUpdate = !0;
        const N = M * 4;
        for (let j = 0; j < _; j++) {
          const q = E[j], K = b[j], ne = L[j], Q = A * z * 4 * j;
          for (let F = 0; F < q.count; F++) {
            const G = F * N;
            x === !0 && (o.fromBufferAttribute(q, F), $[Q + G + 0] = o.x, $[Q + G + 1] = o.y, $[Q + G + 2] = o.z, $[Q + G + 3] = 0), y === !0 && (o.fromBufferAttribute(K, F), $[Q + G + 4] = o.x, $[Q + G + 5] = o.y, $[Q + G + 6] = o.z, $[Q + G + 7] = 0), S === !0 && (o.fromBufferAttribute(ne, F), $[Q + G + 8] = o.x, $[Q + G + 9] = o.y, $[Q + G + 10] = o.z, $[Q + G + 11] = ne.itemSize === 4 ? o.w : 1);
          }
        }
        g = {
          count: _,
          texture: O,
          size: new J(A, z)
        }, s.set(h, g), h.addEventListener("dispose", H);
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
      _.sort(Cy);
      for (let y = 0; y < 8; y++)
        y < m && _[y][1] ? (a[y][0] = _[y][0], a[y][1] = _[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
      a.sort(Ry);
      const g = h.morphAttributes.position, p = h.morphAttributes.normal;
      let v = 0;
      for (let y = 0; y < 8; y++) {
        const S = a[y], E = S[0], b = S[1];
        E !== Number.MAX_SAFE_INTEGER && b ? (g && h.getAttribute("morphTarget" + y) !== g[E] && h.setAttribute("morphTarget" + y, g[E]), p && h.getAttribute("morphNormal" + y) !== p[E] && h.setAttribute("morphNormal" + y, p[E]), i[y] = b, v += b) : (g && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), p && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), i[y] = 0);
      }
      const x = h.morphTargetsRelative ? 1 : 1 - v;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", x), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function Py(r, e, t, n) {
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
const ep = /* @__PURE__ */ new ft(), tp = /* @__PURE__ */ new Aa(), np = /* @__PURE__ */ new sh(), ip = /* @__PURE__ */ new eo(), gu = [], _u = [], yu = new Float32Array(16), xu = new Float32Array(9), vu = new Float32Array(4);
function cr(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0)
    return r;
  const i = e * t;
  let s = gu[i];
  if (s === void 0 && (s = new Float32Array(i), gu[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, r[o].toArray(s, a);
  }
  return s;
}
function Rt(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Ct(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function La(r, e) {
  let t = _u[e];
  t === void 0 && (t = new Int32Array(e), _u[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function Iy(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function Uy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Rt(t, e))
      return;
    r.uniform2fv(this.addr, e), Ct(t, e);
  }
}
function Oy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Rt(t, e))
      return;
    r.uniform3fv(this.addr, e), Ct(t, e);
  }
}
function Dy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Rt(t, e))
      return;
    r.uniform4fv(this.addr, e), Ct(t, e);
  }
}
function Ny(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Rt(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e), Ct(t, e);
  } else {
    if (Rt(t, n))
      return;
    vu.set(n), r.uniformMatrix2fv(this.addr, !1, vu), Ct(t, n);
  }
}
function Fy(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Rt(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e), Ct(t, e);
  } else {
    if (Rt(t, n))
      return;
    xu.set(n), r.uniformMatrix3fv(this.addr, !1, xu), Ct(t, n);
  }
}
function By(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Rt(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e), Ct(t, e);
  } else {
    if (Rt(t, n))
      return;
    yu.set(n), r.uniformMatrix4fv(this.addr, !1, yu), Ct(t, n);
  }
}
function zy(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Hy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Rt(t, e))
      return;
    r.uniform2iv(this.addr, e), Ct(t, e);
  }
}
function ky(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Rt(t, e))
      return;
    r.uniform3iv(this.addr, e), Ct(t, e);
  }
}
function Vy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Rt(t, e))
      return;
    r.uniform4iv(this.addr, e), Ct(t, e);
  }
}
function Gy(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function Wy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Rt(t, e))
      return;
    r.uniform2uiv(this.addr, e), Ct(t, e);
  }
}
function Xy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Rt(t, e))
      return;
    r.uniform3uiv(this.addr, e), Ct(t, e);
  }
}
function Yy(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Rt(t, e))
      return;
    r.uniform4uiv(this.addr, e), Ct(t, e);
  }
}
function qy(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || ep, i);
}
function $y(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || np, i);
}
function Zy(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || ip, i);
}
function Ky(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || tp, i);
}
function Jy(r) {
  switch (r) {
    case 5126:
      return Iy;
    case 35664:
      return Uy;
    case 35665:
      return Oy;
    case 35666:
      return Dy;
    case 35674:
      return Ny;
    case 35675:
      return Fy;
    case 35676:
      return By;
    case 5124:
    case 35670:
      return zy;
    case 35667:
    case 35671:
      return Hy;
    case 35668:
    case 35672:
      return ky;
    case 35669:
    case 35673:
      return Vy;
    case 5125:
      return Gy;
    case 36294:
      return Wy;
    case 36295:
      return Xy;
    case 36296:
      return Yy;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return qy;
    case 35679:
    case 36299:
    case 36307:
      return $y;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Zy;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ky;
  }
}
function jy(r, e) {
  r.uniform1fv(this.addr, e);
}
function Qy(r, e) {
  const t = cr(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function ex(r, e) {
  const t = cr(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function tx(r, e) {
  const t = cr(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function nx(r, e) {
  const t = cr(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function ix(r, e) {
  const t = cr(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function sx(r, e) {
  const t = cr(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function rx(r, e) {
  r.uniform1iv(this.addr, e);
}
function ox(r, e) {
  r.uniform2iv(this.addr, e);
}
function ax(r, e) {
  r.uniform3iv(this.addr, e);
}
function cx(r, e) {
  r.uniform4iv(this.addr, e);
}
function lx(r, e) {
  r.uniform1uiv(this.addr, e);
}
function hx(r, e) {
  r.uniform2uiv(this.addr, e);
}
function ux(r, e) {
  r.uniform3uiv(this.addr, e);
}
function dx(r, e) {
  r.uniform4uiv(this.addr, e);
}
function fx(r, e, t) {
  const n = this.cache, i = e.length, s = La(t, i);
  Rt(n, s) || (r.uniform1iv(this.addr, s), Ct(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || ep, s[o]);
}
function px(r, e, t) {
  const n = this.cache, i = e.length, s = La(t, i);
  Rt(n, s) || (r.uniform1iv(this.addr, s), Ct(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || np, s[o]);
}
function mx(r, e, t) {
  const n = this.cache, i = e.length, s = La(t, i);
  Rt(n, s) || (r.uniform1iv(this.addr, s), Ct(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || ip, s[o]);
}
function gx(r, e, t) {
  const n = this.cache, i = e.length, s = La(t, i);
  Rt(n, s) || (r.uniform1iv(this.addr, s), Ct(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || tp, s[o]);
}
function _x(r) {
  switch (r) {
    case 5126:
      return jy;
    case 35664:
      return Qy;
    case 35665:
      return ex;
    case 35666:
      return tx;
    case 35674:
      return nx;
    case 35675:
      return ix;
    case 35676:
      return sx;
    case 5124:
    case 35670:
      return rx;
    case 35667:
    case 35671:
      return ox;
    case 35668:
    case 35672:
      return ax;
    case 35669:
    case 35673:
      return cx;
    case 5125:
      return lx;
    case 36294:
      return hx;
    case 36295:
      return ux;
    case 36296:
      return dx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return fx;
    case 35679:
    case 36299:
    case 36307:
      return px;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return mx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return gx;
  }
}
class yx {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Jy(t.type);
  }
}
class xx {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = _x(t.type);
  }
}
class vx {
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
const Ec = /(\w+)(\])?(\[|\.)?/g;
function Mu(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Mx(r, e, t) {
  const n = r.name, i = n.length;
  for (Ec.lastIndex = 0; ; ) {
    const s = Ec.exec(n), o = Ec.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      Mu(t, l === void 0 ? new yx(a, r, e) : new xx(a, r, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new vx(a), Mu(t, u)), t = u;
    }
  }
}
class ua {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      Mx(s, o, this);
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
function Su(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Sx = 0;
function Ex(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Tx(r) {
  switch (r) {
    case yn:
      return ["Linear", "( value )"];
    case Ue:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), ["Linear", "( value )"];
  }
}
function Eu(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Ex(r.getShaderSource(e), o);
  } else
    return i;
}
function bx(r, e) {
  const t = Tx(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Ax(r, e) {
  let t;
  switch (e) {
    case mf:
      t = "Linear";
      break;
    case gf:
      t = "Reinhard";
      break;
    case _f:
      t = "OptimizedCineon";
      break;
    case Xl:
      t = "ACESFilmic";
      break;
    case yf:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function wx(r) {
  return [
    r.extensionDerivatives || !!r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Lr).join(`
`);
}
function Rx(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Cx(r, e) {
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
function Lr(r) {
  return r !== "";
}
function Tu(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function bu(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Lx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Pl(r) {
  return r.replace(Lx, Ix);
}
const Px = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"]
]);
function Ix(r, e) {
  let t = Ve[e];
  if (t === void 0) {
    const n = Px.get(e);
    if (n !== void 0)
      t = Ve[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Pl(t);
}
const Ux = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Au(r) {
  return r.replace(Ux, Ox);
}
function Ox(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function wu(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Dx(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === kl ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Vl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Cn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Nx(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case ei:
      case vi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case or:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Fx(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case vi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Bx(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case jr:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ff:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case pf:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function zx(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Hx(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = Dx(t), l = Nx(t), h = Fx(t), u = Bx(t), d = zx(t), f = t.isWebGL2 ? "" : wx(t), m = Rx(s), _ = i.createProgram();
  let g, p, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m
  ].filter(Lr).join(`
`), g.length > 0 && (g += `
`), p = [
    f,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    m
  ].filter(Lr).join(`
`), p.length > 0 && (p += `
`)) : (g = [
    wu(t),
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
  ].filter(Lr).join(`
`), p = [
    f,
    wu(t),
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
    t.toneMapping !== Jn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Jn ? Ve.tonemapping_pars_fragment : "",
    t.toneMapping !== Jn ? Ax("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ve.colorspace_pars_fragment,
    bx("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Lr).join(`
`)), o = Pl(o), o = Tu(o, t), o = bu(o, t), a = Pl(a), a = Tu(a, t), a = bu(a, t), o = Au(o), a = Au(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, g = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, p = [
    "#define varying in",
    t.glslVersion === Rl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Rl ? "" : "#define gl_FragColor pc_fragColor",
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
  const x = v + g + o, y = v + p + a, S = Su(i, i.VERTEX_SHADER, x), E = Su(i, i.FRAGMENT_SHADER, y);
  if (i.attachShader(_, S), i.attachShader(_, E), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_), r.debug.checkShaderErrors) {
    const M = i.getProgramInfoLog(_).trim(), A = i.getShaderInfoLog(S).trim(), z = i.getShaderInfoLog(E).trim();
    let $ = !0, O = !0;
    if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
      if ($ = !1, typeof r.debug.onShaderError == "function")
        r.debug.onShaderError(i, _, S, E);
      else {
        const N = Eu(i, S, "vertex"), H = Eu(i, E, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Program Info Log: ` + M + `
` + N + `
` + H
        );
      }
    else
      M !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", M) : (A === "" || z === "") && (O = !1);
    O && (this.diagnostics = {
      runnable: $,
      programLog: M,
      vertexShader: {
        log: A,
        prefix: g
      },
      fragmentShader: {
        log: z,
        prefix: p
      }
    });
  }
  i.deleteShader(S), i.deleteShader(E);
  let b;
  this.getUniforms = function() {
    return b === void 0 && (b = new ua(i, _)), b;
  };
  let L;
  return this.getAttributes = function() {
    return L === void 0 && (L = Cx(i, _)), L;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Sx++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = S, this.fragmentShader = E, this;
}
let kx = 0;
class Vx {
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
    return n === void 0 && (n = new Gx(e), t.set(e, n)), n;
  }
}
class Gx {
  constructor(e) {
    this.id = kx++, this.code = e, this.usedTimes = 0;
  }
}
function Wx(r, e, t, n, i, s, o) {
  const a = new wa(), c = new Vx(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
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
  function g(M, A, z, $, O) {
    const N = $.fog, H = O.geometry, j = M.isMeshStandardMaterial ? $.environment : null, q = (M.isMeshStandardMaterial ? t : e).get(M.envMap || j), K = !!q && q.mapping === or ? q.image.height : null, ne = m[M.type];
    M.precision !== null && (f = i.getMaxPrecision(M.precision), f !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", f, "instead."));
    const Q = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, F = Q !== void 0 ? Q.length : 0;
    let G = 0;
    H.morphAttributes.position !== void 0 && (G = 1), H.morphAttributes.normal !== void 0 && (G = 2), H.morphAttributes.color !== void 0 && (G = 3);
    let ue, fe, me, be;
    if (ne) {
      const ct = gn[ne];
      ue = ct.vertexShader, fe = ct.fragmentShader;
    } else
      ue = M.vertexShader, fe = M.fragmentShader, c.update(M), me = c.getVertexShaderID(M), be = c.getFragmentShaderID(M);
    const Ae = r.getRenderTarget(), we = O.isInstancedMesh === !0, nt = !!M.map, lt = !!M.matcap, Ie = !!q, P = !!M.aoMap, ae = !!M.lightMap, Z = !!M.bumpMap, re = !!M.normalMap, ee = !!M.displacementMap, Ee = !!M.emissiveMap, ge = !!M.metalnessMap, ye = !!M.roughnessMap, ze = M.anisotropy > 0, Ke = M.clearcoat > 0, pt = M.iridescence > 0, C = M.sheen > 0, T = M.transmission > 0, B = ze && !!M.anisotropyMap, ie = Ke && !!M.clearcoatMap, te = Ke && !!M.clearcoatNormalMap, se = Ke && !!M.clearcoatRoughnessMap, Se = pt && !!M.iridescenceMap, oe = pt && !!M.iridescenceThicknessMap, k = C && !!M.sheenColorMap, Ce = C && !!M.sheenRoughnessMap, Te = !!M.specularMap, Re = !!M.specularColorMap, ve = !!M.specularIntensityMap, Me = T && !!M.transmissionMap, qe = T && !!M.thicknessMap, ot = !!M.gradientMap, I = !!M.alphaMap, de = M.alphaTest > 0, V = !!M.alphaHash, ce = !!M.extensions, pe = !!H.attributes.uv1, Qe = !!H.attributes.uv2, ht = !!H.attributes.uv3;
    let Mt = Jn;
    return M.toneMapped && (Ae === null || Ae.isXRRenderTarget === !0) && (Mt = r.toneMapping), {
      isWebGL2: h,
      shaderID: ne,
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
      instancingColor: we && O.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: Ae === null ? r.outputColorSpace : Ae.isXRRenderTarget === !0 ? Ae.texture.colorSpace : yn,
      map: nt,
      matcap: lt,
      envMap: Ie,
      envMapMode: Ie && q.mapping,
      envMapCubeUVHeight: K,
      aoMap: P,
      lightMap: ae,
      bumpMap: Z,
      normalMap: re,
      displacementMap: d && ee,
      emissiveMap: Ee,
      normalMapObjectSpace: re && M.normalMapType === Of,
      normalMapTangentSpace: re && M.normalMapType === Ti,
      metalnessMap: ge,
      roughnessMap: ye,
      anisotropy: ze,
      anisotropyMap: B,
      clearcoat: Ke,
      clearcoatMap: ie,
      clearcoatNormalMap: te,
      clearcoatRoughnessMap: se,
      iridescence: pt,
      iridescenceMap: Se,
      iridescenceThicknessMap: oe,
      sheen: C,
      sheenColorMap: k,
      sheenRoughnessMap: Ce,
      specularMap: Te,
      specularColorMap: Re,
      specularIntensityMap: ve,
      transmission: T,
      transmissionMap: Me,
      thicknessMap: qe,
      gradientMap: ot,
      opaque: M.transparent === !1 && M.blending === ji,
      alphaMap: I,
      alphaTest: de,
      alphaHash: V,
      combine: M.combine,
      mapUv: nt && _(M.map.channel),
      aoMapUv: P && _(M.aoMap.channel),
      lightMapUv: ae && _(M.lightMap.channel),
      bumpMapUv: Z && _(M.bumpMap.channel),
      normalMapUv: re && _(M.normalMap.channel),
      displacementMapUv: ee && _(M.displacementMap.channel),
      emissiveMapUv: Ee && _(M.emissiveMap.channel),
      metalnessMapUv: ge && _(M.metalnessMap.channel),
      roughnessMapUv: ye && _(M.roughnessMap.channel),
      anisotropyMapUv: B && _(M.anisotropyMap.channel),
      clearcoatMapUv: ie && _(M.clearcoatMap.channel),
      clearcoatNormalMapUv: te && _(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: se && _(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Se && _(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: oe && _(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: k && _(M.sheenColorMap.channel),
      sheenRoughnessMapUv: Ce && _(M.sheenRoughnessMap.channel),
      specularMapUv: Te && _(M.specularMap.channel),
      specularColorMapUv: Re && _(M.specularColorMap.channel),
      specularIntensityMapUv: ve && _(M.specularIntensityMap.channel),
      transmissionMapUv: Me && _(M.transmissionMap.channel),
      thicknessMapUv: qe && _(M.thicknessMap.channel),
      alphaMapUv: I && _(M.alphaMap.channel),
      vertexTangents: !!H.attributes.tangent && (re || ze),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4,
      vertexUv1s: pe,
      vertexUv2s: Qe,
      vertexUv3s: ht,
      pointsUvs: O.isPoints === !0 && !!H.attributes.uv && (nt || I),
      fog: !!N,
      useFog: M.fog === !0,
      fogExp2: N && N.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: O.isSkinnedMesh === !0,
      morphTargets: H.morphAttributes.position !== void 0,
      morphNormals: H.morphAttributes.normal !== void 0,
      morphColors: H.morphAttributes.color !== void 0,
      morphTargetsCount: F,
      morphTextureStride: G,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: r.shadowMap.enabled && z.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Mt,
      useLegacyLights: r._useLegacyLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === _n,
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
    const A = [];
    if (M.shaderID ? A.push(M.shaderID) : (A.push(M.customVertexShaderID), A.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const z in M.defines)
        A.push(z), A.push(M.defines[z]);
    return M.isRawShaderMaterial === !1 && (v(A, M), x(A, M), A.push(r.outputColorSpace)), A.push(M.customProgramCacheKey), A.join();
  }
  function v(M, A) {
    M.push(A.precision), M.push(A.outputColorSpace), M.push(A.envMapMode), M.push(A.envMapCubeUVHeight), M.push(A.mapUv), M.push(A.alphaMapUv), M.push(A.lightMapUv), M.push(A.aoMapUv), M.push(A.bumpMapUv), M.push(A.normalMapUv), M.push(A.displacementMapUv), M.push(A.emissiveMapUv), M.push(A.metalnessMapUv), M.push(A.roughnessMapUv), M.push(A.anisotropyMapUv), M.push(A.clearcoatMapUv), M.push(A.clearcoatNormalMapUv), M.push(A.clearcoatRoughnessMapUv), M.push(A.iridescenceMapUv), M.push(A.iridescenceThicknessMapUv), M.push(A.sheenColorMapUv), M.push(A.sheenRoughnessMapUv), M.push(A.specularMapUv), M.push(A.specularColorMapUv), M.push(A.specularIntensityMapUv), M.push(A.transmissionMapUv), M.push(A.thicknessMapUv), M.push(A.combine), M.push(A.fogExp2), M.push(A.sizeAttenuation), M.push(A.morphTargetsCount), M.push(A.morphAttributeCount), M.push(A.numDirLights), M.push(A.numPointLights), M.push(A.numSpotLights), M.push(A.numSpotLightMaps), M.push(A.numHemiLights), M.push(A.numRectAreaLights), M.push(A.numDirLightShadows), M.push(A.numPointLightShadows), M.push(A.numSpotLightShadows), M.push(A.numSpotLightShadowsWithMaps), M.push(A.shadowMapType), M.push(A.toneMapping), M.push(A.numClippingPlanes), M.push(A.numClipIntersection), M.push(A.depthPacking);
  }
  function x(M, A) {
    a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.matcap && a.enable(4), A.envMap && a.enable(5), A.normalMapObjectSpace && a.enable(6), A.normalMapTangentSpace && a.enable(7), A.clearcoat && a.enable(8), A.iridescence && a.enable(9), A.alphaTest && a.enable(10), A.vertexColors && a.enable(11), A.vertexAlphas && a.enable(12), A.vertexUv1s && a.enable(13), A.vertexUv2s && a.enable(14), A.vertexUv3s && a.enable(15), A.vertexTangents && a.enable(16), A.anisotropy && a.enable(17), M.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.skinning && a.enable(4), A.morphTargets && a.enable(5), A.morphNormals && a.enable(6), A.morphColors && a.enable(7), A.premultipliedAlpha && a.enable(8), A.shadowMapEnabled && a.enable(9), A.useLegacyLights && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), M.push(a.mask);
  }
  function y(M) {
    const A = m[M.type];
    let z;
    if (A) {
      const $ = gn[A];
      z = Kf.clone($.uniforms);
    } else
      z = M.uniforms;
    return z;
  }
  function S(M, A) {
    let z;
    for (let $ = 0, O = l.length; $ < O; $++) {
      const N = l[$];
      if (N.cacheKey === A) {
        z = N, ++z.usedTimes;
        break;
      }
    }
    return z === void 0 && (z = new Hx(r, A, M, s), l.push(z)), z;
  }
  function E(M) {
    if (--M.usedTimes === 0) {
      const A = l.indexOf(M);
      l[A] = l[l.length - 1], l.pop(), M.destroy();
    }
  }
  function b(M) {
    c.remove(M);
  }
  function L() {
    c.dispose();
  }
  return {
    getParameters: g,
    getProgramCacheKey: p,
    getUniforms: y,
    acquireProgram: S,
    releaseProgram: E,
    releaseShaderCache: b,
    programs: l,
    dispose: L
  };
}
function Xx() {
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
function Yx(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Ru(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Cu() {
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
    t.length > 1 && t.sort(u || Yx), n.length > 1 && n.sort(d || Ru), i.length > 1 && i.sort(d || Ru);
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
function qx() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? (o = new Cu(), r.set(n, [o])) : i >= s.length ? (o = new Cu(), s.push(o)) : o = s[i], o;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function $x() {
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
function Zx() {
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
            shadowMapSize: new J()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new J()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new J(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let Kx = 0;
function Jx(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function jx(r, e) {
  const t = new $x(), n = Zx(), i = {
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
  const s = new w(), o = new De(), a = new De();
  function c(h, u) {
    let d = 0, f = 0, m = 0;
    for (let z = 0; z < 9; z++)
      i.probe[z].set(0, 0, 0);
    let _ = 0, g = 0, p = 0, v = 0, x = 0, y = 0, S = 0, E = 0, b = 0, L = 0;
    h.sort(Jx);
    const M = u === !0 ? Math.PI : 1;
    for (let z = 0, $ = h.length; z < $; z++) {
      const O = h[z], N = O.color, H = O.intensity, j = O.distance, q = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        d += N.r * H * M, f += N.g * H * M, m += N.b * H * M;
      else if (O.isLightProbe)
        for (let K = 0; K < 9; K++)
          i.probe[K].addScaledVector(O.sh.coefficients[K], H);
      else if (O.isDirectionalLight) {
        const K = t.get(O);
        if (K.color.copy(O.color).multiplyScalar(O.intensity * M), O.castShadow) {
          const ne = O.shadow, Q = n.get(O);
          Q.shadowBias = ne.bias, Q.shadowNormalBias = ne.normalBias, Q.shadowRadius = ne.radius, Q.shadowMapSize = ne.mapSize, i.directionalShadow[_] = Q, i.directionalShadowMap[_] = q, i.directionalShadowMatrix[_] = O.shadow.matrix, y++;
        }
        i.directional[_] = K, _++;
      } else if (O.isSpotLight) {
        const K = t.get(O);
        K.position.setFromMatrixPosition(O.matrixWorld), K.color.copy(N).multiplyScalar(H * M), K.distance = j, K.coneCos = Math.cos(O.angle), K.penumbraCos = Math.cos(O.angle * (1 - O.penumbra)), K.decay = O.decay, i.spot[p] = K;
        const ne = O.shadow;
        if (O.map && (i.spotLightMap[b] = O.map, b++, ne.updateMatrices(O), O.castShadow && L++), i.spotLightMatrix[p] = ne.matrix, O.castShadow) {
          const Q = n.get(O);
          Q.shadowBias = ne.bias, Q.shadowNormalBias = ne.normalBias, Q.shadowRadius = ne.radius, Q.shadowMapSize = ne.mapSize, i.spotShadow[p] = Q, i.spotShadowMap[p] = q, E++;
        }
        p++;
      } else if (O.isRectAreaLight) {
        const K = t.get(O);
        K.color.copy(N).multiplyScalar(H), K.halfWidth.set(O.width * 0.5, 0, 0), K.halfHeight.set(0, O.height * 0.5, 0), i.rectArea[v] = K, v++;
      } else if (O.isPointLight) {
        const K = t.get(O);
        if (K.color.copy(O.color).multiplyScalar(O.intensity * M), K.distance = O.distance, K.decay = O.decay, O.castShadow) {
          const ne = O.shadow, Q = n.get(O);
          Q.shadowBias = ne.bias, Q.shadowNormalBias = ne.normalBias, Q.shadowRadius = ne.radius, Q.shadowMapSize = ne.mapSize, Q.shadowCameraNear = ne.camera.near, Q.shadowCameraFar = ne.camera.far, i.pointShadow[g] = Q, i.pointShadowMap[g] = q, i.pointShadowMatrix[g] = O.shadow.matrix, S++;
        }
        i.point[g] = K, g++;
      } else if (O.isHemisphereLight) {
        const K = t.get(O);
        K.skyColor.copy(O.color).multiplyScalar(H * M), K.groundColor.copy(O.groundColor).multiplyScalar(H * M), i.hemi[x] = K, x++;
      }
    }
    v > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = le.LTC_FLOAT_1, i.rectAreaLTC2 = le.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = le.LTC_HALF_1, i.rectAreaLTC2 = le.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = m;
    const A = i.hash;
    (A.directionalLength !== _ || A.pointLength !== g || A.spotLength !== p || A.rectAreaLength !== v || A.hemiLength !== x || A.numDirectionalShadows !== y || A.numPointShadows !== S || A.numSpotShadows !== E || A.numSpotMaps !== b) && (i.directional.length = _, i.spot.length = p, i.rectArea.length = v, i.point.length = g, i.hemi.length = x, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = S, i.pointShadowMap.length = S, i.spotShadow.length = E, i.spotShadowMap.length = E, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = S, i.spotLightMatrix.length = E + b - L, i.spotLightMap.length = b, i.numSpotLightShadowsWithMaps = L, A.directionalLength = _, A.pointLength = g, A.spotLength = p, A.rectAreaLength = v, A.hemiLength = x, A.numDirectionalShadows = y, A.numPointShadows = S, A.numSpotShadows = E, A.numSpotMaps = b, i.version = Kx++);
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
function Lu(r, e) {
  const t = new jx(r, e), n = [], i = [];
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
function Qx(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new Lu(r, e), t.set(s, [c])) : o >= a.length ? (c = new Lu(r, e), a.push(c)) : c = a[o], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class ch extends wt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = If, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class lh extends wt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ev = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, tv = `uniform sampler2D shadow_pass;
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
function nv(r, e, t) {
  let n = new Ca();
  const i = new J(), s = new J(), o = new rt(), a = new ch({ depthPacking: Uf }), c = new lh(), l = {}, h = t.maxTextureSize, u = { [Un]: Wt, [Wt]: Un, [_n]: _n }, d = new Dn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new J() },
      radius: { value: 4 }
    },
    vertexShader: ev,
    fragmentShader: tv
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new Ye();
  m.setAttribute(
    "position",
    new st(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new bt(m, d), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = kl;
  let p = this.type;
  this.render = function(S, E, b) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || S.length === 0)
      return;
    const L = r.getRenderTarget(), M = r.getActiveCubeFace(), A = r.getActiveMipmapLevel(), z = r.state;
    z.setBlending(Kn), z.buffers.color.setClear(1, 1, 1, 1), z.buffers.depth.setTest(!0), z.setScissorTest(!1);
    const $ = p !== Cn && this.type === Cn, O = p === Cn && this.type !== Cn;
    for (let N = 0, H = S.length; N < H; N++) {
      const j = S[N], q = j.shadow;
      if (q === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (q.autoUpdate === !1 && q.needsUpdate === !1)
        continue;
      i.copy(q.mapSize);
      const K = q.getFrameExtents();
      if (i.multiply(K), s.copy(q.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / K.x), i.x = s.x * K.x, q.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / K.y), i.y = s.y * K.y, q.mapSize.y = s.y)), q.map === null || $ === !0 || O === !0) {
        const Q = this.type !== Cn ? { minFilter: _t, magFilter: _t } : {};
        q.map !== null && q.map.dispose(), q.map = new xn(i.x, i.y, Q), q.map.texture.name = j.name + ".shadowMap", q.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(q.map), r.clear();
      const ne = q.getViewportCount();
      for (let Q = 0; Q < ne; Q++) {
        const F = q.getViewport(Q);
        o.set(
          s.x * F.x,
          s.y * F.y,
          s.x * F.z,
          s.y * F.w
        ), z.viewport(o), q.updateMatrices(j, Q), n = q.getFrustum(), y(E, b, q.camera, j, this.type);
      }
      q.isPointLightShadow !== !0 && this.type === Cn && v(q, b), q.needsUpdate = !1;
    }
    p = this.type, g.needsUpdate = !1, r.setRenderTarget(L, M, A);
  };
  function v(S, E) {
    const b = e.update(_);
    d.defines.VSM_SAMPLES !== S.blurSamples && (d.defines.VSM_SAMPLES = S.blurSamples, f.defines.VSM_SAMPLES = S.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), S.mapPass === null && (S.mapPass = new xn(i.x, i.y)), d.uniforms.shadow_pass.value = S.map.texture, d.uniforms.resolution.value = S.mapSize, d.uniforms.radius.value = S.radius, r.setRenderTarget(S.mapPass), r.clear(), r.renderBufferDirect(E, null, b, d, _, null), f.uniforms.shadow_pass.value = S.mapPass.texture, f.uniforms.resolution.value = S.mapSize, f.uniforms.radius.value = S.radius, r.setRenderTarget(S.map), r.clear(), r.renderBufferDirect(E, null, b, f, _, null);
  }
  function x(S, E, b, L) {
    let M = null;
    const A = b.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
    if (A !== void 0)
      M = A;
    else if (M = b.isPointLight === !0 ? c : a, r.localClippingEnabled && E.clipShadows === !0 && Array.isArray(E.clippingPlanes) && E.clippingPlanes.length !== 0 || E.displacementMap && E.displacementScale !== 0 || E.alphaMap && E.alphaTest > 0 || E.map && E.alphaTest > 0) {
      const z = M.uuid, $ = E.uuid;
      let O = l[z];
      O === void 0 && (O = {}, l[z] = O);
      let N = O[$];
      N === void 0 && (N = M.clone(), O[$] = N), M = N;
    }
    if (M.visible = E.visible, M.wireframe = E.wireframe, L === Cn ? M.side = E.shadowSide !== null ? E.shadowSide : E.side : M.side = E.shadowSide !== null ? E.shadowSide : u[E.side], M.alphaMap = E.alphaMap, M.alphaTest = E.alphaTest, M.map = E.map, M.clipShadows = E.clipShadows, M.clippingPlanes = E.clippingPlanes, M.clipIntersection = E.clipIntersection, M.displacementMap = E.displacementMap, M.displacementScale = E.displacementScale, M.displacementBias = E.displacementBias, M.wireframeLinewidth = E.wireframeLinewidth, M.linewidth = E.linewidth, b.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const z = r.properties.get(M);
      z.light = b;
    }
    return M;
  }
  function y(S, E, b, L, M) {
    if (S.visible === !1)
      return;
    if (S.layers.test(E.layers) && (S.isMesh || S.isLine || S.isPoints) && (S.castShadow || S.receiveShadow && M === Cn) && (!S.frustumCulled || n.intersectsObject(S))) {
      S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, S.matrixWorld);
      const $ = e.update(S), O = S.material;
      if (Array.isArray(O)) {
        const N = $.groups;
        for (let H = 0, j = N.length; H < j; H++) {
          const q = N[H], K = O[q.materialIndex];
          if (K && K.visible) {
            const ne = x(S, K, L, M);
            r.renderBufferDirect(b, null, $, ne, S, q);
          }
        }
      } else if (O.visible) {
        const N = x(S, O, L, M);
        r.renderBufferDirect(b, null, $, N, S, null);
      }
    }
    const z = S.children;
    for (let $ = 0, O = z.length; $ < O; $++)
      y(z[$], E, b, L, M);
  }
}
function iv(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let I = !1;
    const de = new rt();
    let V = null;
    const ce = new rt(0, 0, 0, 0);
    return {
      setMask: function(pe) {
        V !== pe && !I && (r.colorMask(pe, pe, pe, pe), V = pe);
      },
      setLocked: function(pe) {
        I = pe;
      },
      setClear: function(pe, Qe, ht, Mt, ri) {
        ri === !0 && (pe *= Mt, Qe *= Mt, ht *= Mt), de.set(pe, Qe, ht, Mt), ce.equals(de) === !1 && (r.clearColor(pe, Qe, ht, Mt), ce.copy(de));
      },
      reset: function() {
        I = !1, V = null, ce.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let I = !1, de = null, V = null, ce = null;
    return {
      setTest: function(pe) {
        pe ? Ae(r.DEPTH_TEST) : we(r.DEPTH_TEST);
      },
      setMask: function(pe) {
        de !== pe && !I && (r.depthMask(pe), de = pe);
      },
      setFunc: function(pe) {
        if (V !== pe) {
          switch (pe) {
            case of:
              r.depthFunc(r.NEVER);
              break;
            case af:
              r.depthFunc(r.ALWAYS);
              break;
            case cf:
              r.depthFunc(r.LESS);
              break;
            case fa:
              r.depthFunc(r.LEQUAL);
              break;
            case lf:
              r.depthFunc(r.EQUAL);
              break;
            case hf:
              r.depthFunc(r.GEQUAL);
              break;
            case uf:
              r.depthFunc(r.GREATER);
              break;
            case df:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          V = pe;
        }
      },
      setLocked: function(pe) {
        I = pe;
      },
      setClear: function(pe) {
        ce !== pe && (r.clearDepth(pe), ce = pe);
      },
      reset: function() {
        I = !1, de = null, V = null, ce = null;
      }
    };
  }
  function o() {
    let I = !1, de = null, V = null, ce = null, pe = null, Qe = null, ht = null, Mt = null, ri = null;
    return {
      setTest: function(ct) {
        I || (ct ? Ae(r.STENCIL_TEST) : we(r.STENCIL_TEST));
      },
      setMask: function(ct) {
        de !== ct && !I && (r.stencilMask(ct), de = ct);
      },
      setFunc: function(ct, bn, Ht) {
        (V !== ct || ce !== bn || pe !== Ht) && (r.stencilFunc(ct, bn, Ht), V = ct, ce = bn, pe = Ht);
      },
      setOp: function(ct, bn, Ht) {
        (Qe !== ct || ht !== bn || Mt !== Ht) && (r.stencilOp(ct, bn, Ht), Qe = ct, ht = bn, Mt = Ht);
      },
      setLocked: function(ct) {
        I = ct;
      },
      setClear: function(ct) {
        ri !== ct && (r.clearStencil(ct), ri = ct);
      },
      reset: function() {
        I = !1, de = null, V = null, ce = null, pe = null, Qe = null, ht = null, Mt = null, ri = null;
      }
    };
  }
  const a = new i(), c = new s(), l = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, f = {}, m = /* @__PURE__ */ new WeakMap(), _ = [], g = null, p = !1, v = null, x = null, y = null, S = null, E = null, b = null, L = null, M = !1, A = null, z = null, $ = null, O = null, N = null;
  const H = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let j = !1, q = 0;
  const K = r.getParameter(r.VERSION);
  K.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(K)[1]), j = q >= 1) : K.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), j = q >= 2);
  let ne = null, Q = {};
  const F = r.getParameter(r.SCISSOR_BOX), G = r.getParameter(r.VIEWPORT), ue = new rt().fromArray(F), fe = new rt().fromArray(G);
  function me(I, de, V, ce) {
    const pe = new Uint8Array(4), Qe = r.createTexture();
    r.bindTexture(I, Qe), r.texParameteri(I, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(I, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let ht = 0; ht < V; ht++)
      n && (I === r.TEXTURE_3D || I === r.TEXTURE_2D_ARRAY) ? r.texImage3D(de, 0, r.RGBA, 1, 1, ce, 0, r.RGBA, r.UNSIGNED_BYTE, pe) : r.texImage2D(de + ht, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, pe);
    return Qe;
  }
  const be = {};
  be[r.TEXTURE_2D] = me(r.TEXTURE_2D, r.TEXTURE_2D, 1), be[r.TEXTURE_CUBE_MAP] = me(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (be[r.TEXTURE_2D_ARRAY] = me(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), be[r.TEXTURE_3D] = me(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Ae(r.DEPTH_TEST), c.setFunc(fa), ee(!1), Ee(Qc), Ae(r.CULL_FACE), Z(Kn);
  function Ae(I) {
    d[I] !== !0 && (r.enable(I), d[I] = !0);
  }
  function we(I) {
    d[I] !== !1 && (r.disable(I), d[I] = !1);
  }
  function nt(I, de) {
    return f[I] !== de ? (r.bindFramebuffer(I, de), f[I] = de, n && (I === r.DRAW_FRAMEBUFFER && (f[r.FRAMEBUFFER] = de), I === r.FRAMEBUFFER && (f[r.DRAW_FRAMEBUFFER] = de)), !0) : !1;
  }
  function lt(I, de) {
    let V = _, ce = !1;
    if (I)
      if (V = m.get(de), V === void 0 && (V = [], m.set(de, V)), I.isWebGLMultipleRenderTargets) {
        const pe = I.texture;
        if (V.length !== pe.length || V[0] !== r.COLOR_ATTACHMENT0) {
          for (let Qe = 0, ht = pe.length; Qe < ht; Qe++)
            V[Qe] = r.COLOR_ATTACHMENT0 + Qe;
          V.length = pe.length, ce = !0;
        }
      } else
        V[0] !== r.COLOR_ATTACHMENT0 && (V[0] = r.COLOR_ATTACHMENT0, ce = !0);
    else
      V[0] !== r.BACK && (V[0] = r.BACK, ce = !0);
    ce && (t.isWebGL2 ? r.drawBuffers(V) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V));
  }
  function Ie(I) {
    return g !== I ? (r.useProgram(I), g = I, !0) : !1;
  }
  const P = {
    [Yi]: r.FUNC_ADD,
    [$d]: r.FUNC_SUBTRACT,
    [Zd]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    P[il] = r.MIN, P[sl] = r.MAX;
  else {
    const I = e.get("EXT_blend_minmax");
    I !== null && (P[il] = I.MIN_EXT, P[sl] = I.MAX_EXT);
  }
  const ae = {
    [Kd]: r.ZERO,
    [Jd]: r.ONE,
    [jd]: r.SRC_COLOR,
    [Gl]: r.SRC_ALPHA,
    [rf]: r.SRC_ALPHA_SATURATE,
    [nf]: r.DST_COLOR,
    [ef]: r.DST_ALPHA,
    [Qd]: r.ONE_MINUS_SRC_COLOR,
    [Wl]: r.ONE_MINUS_SRC_ALPHA,
    [sf]: r.ONE_MINUS_DST_COLOR,
    [tf]: r.ONE_MINUS_DST_ALPHA
  };
  function Z(I, de, V, ce, pe, Qe, ht, Mt) {
    if (I === Kn) {
      p === !0 && (we(r.BLEND), p = !1);
      return;
    }
    if (p === !1 && (Ae(r.BLEND), p = !0), I !== qd) {
      if (I !== v || Mt !== M) {
        if ((x !== Yi || E !== Yi) && (r.blendEquation(r.FUNC_ADD), x = Yi, E = Yi), Mt)
          switch (I) {
            case ji:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case el:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case tl:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case nl:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case ji:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case el:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case tl:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case nl:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        y = null, S = null, b = null, L = null, v = I, M = Mt;
      }
      return;
    }
    pe = pe || de, Qe = Qe || V, ht = ht || ce, (de !== x || pe !== E) && (r.blendEquationSeparate(P[de], P[pe]), x = de, E = pe), (V !== y || ce !== S || Qe !== b || ht !== L) && (r.blendFuncSeparate(ae[V], ae[ce], ae[Qe], ae[ht]), y = V, S = ce, b = Qe, L = ht), v = I, M = !1;
  }
  function re(I, de) {
    I.side === _n ? we(r.CULL_FACE) : Ae(r.CULL_FACE);
    let V = I.side === Wt;
    de && (V = !V), ee(V), I.blending === ji && I.transparent === !1 ? Z(Kn) : Z(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.premultipliedAlpha), c.setFunc(I.depthFunc), c.setTest(I.depthTest), c.setMask(I.depthWrite), a.setMask(I.colorWrite);
    const ce = I.stencilWrite;
    l.setTest(ce), ce && (l.setMask(I.stencilWriteMask), l.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), l.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), ye(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === !0 ? Ae(r.SAMPLE_ALPHA_TO_COVERAGE) : we(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ee(I) {
    A !== I && (I ? r.frontFace(r.CW) : r.frontFace(r.CCW), A = I);
  }
  function Ee(I) {
    I !== Xd ? (Ae(r.CULL_FACE), I !== z && (I === Qc ? r.cullFace(r.BACK) : I === Yd ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : we(r.CULL_FACE), z = I;
  }
  function ge(I) {
    I !== $ && (j && r.lineWidth(I), $ = I);
  }
  function ye(I, de, V) {
    I ? (Ae(r.POLYGON_OFFSET_FILL), (O !== de || N !== V) && (r.polygonOffset(de, V), O = de, N = V)) : we(r.POLYGON_OFFSET_FILL);
  }
  function ze(I) {
    I ? Ae(r.SCISSOR_TEST) : we(r.SCISSOR_TEST);
  }
  function Ke(I) {
    I === void 0 && (I = r.TEXTURE0 + H - 1), ne !== I && (r.activeTexture(I), ne = I);
  }
  function pt(I, de, V) {
    V === void 0 && (ne === null ? V = r.TEXTURE0 + H - 1 : V = ne);
    let ce = Q[V];
    ce === void 0 && (ce = { type: void 0, texture: void 0 }, Q[V] = ce), (ce.type !== I || ce.texture !== de) && (ne !== V && (r.activeTexture(V), ne = V), r.bindTexture(I, de || be[I]), ce.type = I, ce.texture = de);
  }
  function C() {
    const I = Q[ne];
    I !== void 0 && I.type !== void 0 && (r.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
  }
  function T() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function B() {
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
  function te() {
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
  function k() {
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
    let V = u.get(de);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), u.set(de, V));
    let ce = V.get(I);
    ce === void 0 && (ce = r.getUniformBlockIndex(de, I.name), V.set(I, ce));
  }
  function qe(I, de) {
    const ce = u.get(de).get(I);
    h.get(de) !== ce && (r.uniformBlockBinding(de, ce, I.__bindingPointIndex), h.set(de, ce));
  }
  function ot() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, ne = null, Q = {}, f = {}, m = /* @__PURE__ */ new WeakMap(), _ = [], g = null, p = !1, v = null, x = null, y = null, S = null, E = null, b = null, L = null, M = !1, A = null, z = null, $ = null, O = null, N = null, ue.set(0, 0, r.canvas.width, r.canvas.height), fe.set(0, 0, r.canvas.width, r.canvas.height), a.reset(), c.reset(), l.reset();
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
    drawBuffers: lt,
    useProgram: Ie,
    setBlending: Z,
    setMaterial: re,
    setFlipSided: ee,
    setCullFace: Ee,
    setLineWidth: ge,
    setPolygonOffset: ye,
    setScissorTest: ze,
    activeTexture: Ke,
    bindTexture: pt,
    unbindTexture: C,
    compressedTexImage2D: T,
    compressedTexImage3D: B,
    texImage2D: Ce,
    texImage3D: Te,
    updateUBOMapping: Me,
    uniformBlockBinding: qe,
    texStorage2D: oe,
    texStorage3D: k,
    texSubImage2D: ie,
    texSubImage3D: te,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: Se,
    scissor: Re,
    viewport: ve,
    reset: ot
  };
}
function sv(r, e, t, n, i, s, o) {
  const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, f = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), m = /* @__PURE__ */ new WeakMap();
  let _;
  const g = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(C, T) {
    return p ? new OffscreenCanvas(C, T) : kr("canvas");
  }
  function x(C, T, B, ie) {
    let te = 1;
    if ((C.width > ie || C.height > ie) && (te = ie / Math.max(C.width, C.height)), te < 1 || T === !0)
      if (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && C instanceof ImageBitmap) {
        const se = T ? ga : Math.floor, Se = se(te * C.width), oe = se(te * C.height);
        _ === void 0 && (_ = v(Se, oe));
        const k = B ? v(Se, oe) : _;
        return k.width = Se, k.height = oe, k.getContext("2d").drawImage(C, 0, 0, Se, oe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + C.width + "x" + C.height + ") to (" + Se + "x" + oe + ")."), k;
      } else
        return "data" in C && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + C.width + "x" + C.height + ")."), C;
    return C;
  }
  function y(C) {
    return Cl(C.width) && Cl(C.height);
  }
  function S(C) {
    return a ? !1 : C.wrapS !== Ot || C.wrapT !== Ot || C.minFilter !== _t && C.minFilter !== ut;
  }
  function E(C, T) {
    return C.generateMipmaps && T && C.minFilter !== _t && C.minFilter !== ut;
  }
  function b(C) {
    r.generateMipmap(C);
  }
  function L(C, T, B, ie, te = !1) {
    if (a === !1)
      return T;
    if (C !== null) {
      if (r[C] !== void 0)
        return r[C];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'");
    }
    let se = T;
    return T === r.RED && (B === r.FLOAT && (se = r.R32F), B === r.HALF_FLOAT && (se = r.R16F), B === r.UNSIGNED_BYTE && (se = r.R8)), T === r.RED_INTEGER && (B === r.UNSIGNED_BYTE && (se = r.R8UI), B === r.UNSIGNED_SHORT && (se = r.R16UI), B === r.UNSIGNED_INT && (se = r.R32UI), B === r.BYTE && (se = r.R8I), B === r.SHORT && (se = r.R16I), B === r.INT && (se = r.R32I)), T === r.RG && (B === r.FLOAT && (se = r.RG32F), B === r.HALF_FLOAT && (se = r.RG16F), B === r.UNSIGNED_BYTE && (se = r.RG8)), T === r.RGBA && (B === r.FLOAT && (se = r.RGBA32F), B === r.HALF_FLOAT && (se = r.RGBA16F), B === r.UNSIGNED_BYTE && (se = ie === Ue && te === !1 ? r.SRGB8_ALPHA8 : r.RGBA8), B === r.UNSIGNED_SHORT_4_4_4_4 && (se = r.RGBA4), B === r.UNSIGNED_SHORT_5_5_5_1 && (se = r.RGB5_A1)), (se === r.R16F || se === r.R32F || se === r.RG16F || se === r.RG32F || se === r.RGBA16F || se === r.RGBA32F) && e.get("EXT_color_buffer_float"), se;
  }
  function M(C, T, B) {
    return E(C, B) === !0 || C.isFramebufferTexture && C.minFilter !== _t && C.minFilter !== ut ? Math.log2(Math.max(T.width, T.height)) + 1 : C.mipmaps !== void 0 && C.mipmaps.length > 0 ? C.mipmaps.length : C.isCompressedTexture && Array.isArray(C.image) ? T.mipmaps.length : 1;
  }
  function A(C) {
    return C === _t || C === Fr || C === Vs ? r.NEAREST : r.LINEAR;
  }
  function z(C) {
    const T = C.target;
    T.removeEventListener("dispose", z), O(T), T.isVideoTexture && m.delete(T);
  }
  function $(C) {
    const T = C.target;
    T.removeEventListener("dispose", $), H(T);
  }
  function O(C) {
    const T = n.get(C);
    if (T.__webglInit === void 0)
      return;
    const B = C.source, ie = g.get(B);
    if (ie) {
      const te = ie[T.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && N(C), Object.keys(ie).length === 0 && g.delete(B);
    }
    n.remove(C);
  }
  function N(C) {
    const T = n.get(C);
    r.deleteTexture(T.__webglTexture);
    const B = C.source, ie = g.get(B);
    delete ie[T.__cacheKey], o.memory.textures--;
  }
  function H(C) {
    const T = C.texture, B = n.get(C), ie = n.get(T);
    if (ie.__webglTexture !== void 0 && (r.deleteTexture(ie.__webglTexture), o.memory.textures--), C.depthTexture && C.depthTexture.dispose(), C.isWebGLCubeRenderTarget)
      for (let te = 0; te < 6; te++) {
        if (Array.isArray(B.__webglFramebuffer[te]))
          for (let se = 0; se < B.__webglFramebuffer[te].length; se++)
            r.deleteFramebuffer(B.__webglFramebuffer[te][se]);
        else
          r.deleteFramebuffer(B.__webglFramebuffer[te]);
        B.__webglDepthbuffer && r.deleteRenderbuffer(B.__webglDepthbuffer[te]);
      }
    else {
      if (Array.isArray(B.__webglFramebuffer))
        for (let te = 0; te < B.__webglFramebuffer.length; te++)
          r.deleteFramebuffer(B.__webglFramebuffer[te]);
      else
        r.deleteFramebuffer(B.__webglFramebuffer);
      if (B.__webglDepthbuffer && r.deleteRenderbuffer(B.__webglDepthbuffer), B.__webglMultisampledFramebuffer && r.deleteFramebuffer(B.__webglMultisampledFramebuffer), B.__webglColorRenderbuffer)
        for (let te = 0; te < B.__webglColorRenderbuffer.length; te++)
          B.__webglColorRenderbuffer[te] && r.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);
      B.__webglDepthRenderbuffer && r.deleteRenderbuffer(B.__webglDepthRenderbuffer);
    }
    if (C.isWebGLMultipleRenderTargets)
      for (let te = 0, se = T.length; te < se; te++) {
        const Se = n.get(T[te]);
        Se.__webglTexture && (r.deleteTexture(Se.__webglTexture), o.memory.textures--), n.remove(T[te]);
      }
    n.remove(T), n.remove(C);
  }
  let j = 0;
  function q() {
    j = 0;
  }
  function K() {
    const C = j;
    return C >= c && console.warn("THREE.WebGLTextures: Trying to use " + C + " texture units while this GPU supports only " + c), j += 1, C;
  }
  function ne(C) {
    const T = [];
    return T.push(C.wrapS), T.push(C.wrapT), T.push(C.wrapR || 0), T.push(C.magFilter), T.push(C.minFilter), T.push(C.anisotropy), T.push(C.internalFormat), T.push(C.format), T.push(C.type), T.push(C.generateMipmaps), T.push(C.premultiplyAlpha), T.push(C.flipY), T.push(C.unpackAlignment), T.push(C.colorSpace), T.join();
  }
  function Q(C, T) {
    const B = n.get(C);
    if (C.isVideoTexture && Ke(C), C.isRenderTargetTexture === !1 && C.version > 0 && B.__version !== C.version) {
      const ie = C.image;
      if (ie === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ie.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        nt(B, C, T);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, B.__webglTexture, r.TEXTURE0 + T);
  }
  function F(C, T) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      nt(B, C, T);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, B.__webglTexture, r.TEXTURE0 + T);
  }
  function G(C, T) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      nt(B, C, T);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, B.__webglTexture, r.TEXTURE0 + T);
  }
  function ue(C, T) {
    const B = n.get(C);
    if (C.version > 0 && B.__version !== C.version) {
      lt(B, C, T);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, B.__webglTexture, r.TEXTURE0 + T);
  }
  const fe = {
    [Mi]: r.REPEAT,
    [Ot]: r.CLAMP_TO_EDGE,
    [qs]: r.MIRRORED_REPEAT
  }, me = {
    [_t]: r.NEAREST,
    [Fr]: r.NEAREST_MIPMAP_NEAREST,
    [Vs]: r.NEAREST_MIPMAP_LINEAR,
    [ut]: r.LINEAR,
    [Ea]: r.LINEAR_MIPMAP_NEAREST,
    [On]: r.LINEAR_MIPMAP_LINEAR
  }, be = {
    [Nf]: r.NEVER,
    [Gf]: r.ALWAYS,
    [Ff]: r.LESS,
    [zf]: r.LEQUAL,
    [Bf]: r.EQUAL,
    [Vf]: r.GEQUAL,
    [Hf]: r.GREATER,
    [kf]: r.NOTEQUAL
  };
  function Ae(C, T, B) {
    if (B ? (r.texParameteri(C, r.TEXTURE_WRAP_S, fe[T.wrapS]), r.texParameteri(C, r.TEXTURE_WRAP_T, fe[T.wrapT]), (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) && r.texParameteri(C, r.TEXTURE_WRAP_R, fe[T.wrapR]), r.texParameteri(C, r.TEXTURE_MAG_FILTER, me[T.magFilter]), r.texParameteri(C, r.TEXTURE_MIN_FILTER, me[T.minFilter])) : (r.texParameteri(C, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(C, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) && r.texParameteri(C, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (T.wrapS !== Ot || T.wrapT !== Ot) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(C, r.TEXTURE_MAG_FILTER, A(T.magFilter)), r.texParameteri(C, r.TEXTURE_MIN_FILTER, A(T.minFilter)), T.minFilter !== _t && T.minFilter !== ut && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), T.compareFunction && (r.texParameteri(C, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(C, r.TEXTURE_COMPARE_FUNC, be[T.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const ie = e.get("EXT_texture_filter_anisotropic");
      if (T.magFilter === _t || T.minFilter !== Vs && T.minFilter !== On || T.type === Ln && e.has("OES_texture_float_linear") === !1 || a === !1 && T.type === $s && e.has("OES_texture_half_float_linear") === !1)
        return;
      (T.anisotropy > 1 || n.get(T).__currentAnisotropy) && (r.texParameterf(C, ie.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(T.anisotropy, i.getMaxAnisotropy())), n.get(T).__currentAnisotropy = T.anisotropy);
    }
  }
  function we(C, T) {
    let B = !1;
    C.__webglInit === void 0 && (C.__webglInit = !0, T.addEventListener("dispose", z));
    const ie = T.source;
    let te = g.get(ie);
    te === void 0 && (te = {}, g.set(ie, te));
    const se = ne(T);
    if (se !== C.__cacheKey) {
      te[se] === void 0 && (te[se] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, B = !0), te[se].usedTimes++;
      const Se = te[C.__cacheKey];
      Se !== void 0 && (te[C.__cacheKey].usedTimes--, Se.usedTimes === 0 && N(T)), C.__cacheKey = se, C.__webglTexture = te[se].texture;
    }
    return B;
  }
  function nt(C, T, B) {
    let ie = r.TEXTURE_2D;
    (T.isDataArrayTexture || T.isCompressedArrayTexture) && (ie = r.TEXTURE_2D_ARRAY), T.isData3DTexture && (ie = r.TEXTURE_3D);
    const te = we(C, T), se = T.source;
    t.bindTexture(ie, C.__webglTexture, r.TEXTURE0 + B);
    const Se = n.get(se);
    if (se.version !== Se.__version || te === !0) {
      t.activeTexture(r.TEXTURE0 + B), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, T.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, T.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const oe = S(T) && y(T.image) === !1;
      let k = x(T.image, oe, !1, h);
      k = pt(T, k);
      const Ce = y(k) || a, Te = s.convert(T.format, T.colorSpace);
      let Re = s.convert(T.type), ve = L(T.internalFormat, Te, Re, T.colorSpace);
      Ae(ie, T, Ce);
      let Me;
      const qe = T.mipmaps, ot = a && T.isVideoTexture !== !0, I = Se.__version === void 0 || te === !0, de = M(T, k, Ce);
      if (T.isDepthTexture)
        ve = r.DEPTH_COMPONENT, a ? T.type === Ln ? ve = r.DEPTH_COMPONENT32F : T.type === $n ? ve = r.DEPTH_COMPONENT24 : T.type === gi ? ve = r.DEPTH24_STENCIL8 : ve = r.DEPTH_COMPONENT16 : T.type === Ln && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), T.format === _i && ve === r.DEPTH_COMPONENT && T.type !== Ta && T.type !== $n && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), T.type = $n, Re = s.convert(T.type)), T.format === ts && ve === r.DEPTH_COMPONENT && (ve = r.DEPTH_STENCIL, T.type !== gi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), T.type = gi, Re = s.convert(T.type))), I && (ot ? t.texStorage2D(r.TEXTURE_2D, 1, ve, k.width, k.height) : t.texImage2D(r.TEXTURE_2D, 0, ve, k.width, k.height, 0, Te, Re, null));
      else if (T.isDataTexture)
        if (qe.length > 0 && Ce) {
          ot && I && t.texStorage2D(r.TEXTURE_2D, de, ve, qe[0].width, qe[0].height);
          for (let V = 0, ce = qe.length; V < ce; V++)
            Me = qe[V], ot ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, Me.width, Me.height, Te, Re, Me.data) : t.texImage2D(r.TEXTURE_2D, V, ve, Me.width, Me.height, 0, Te, Re, Me.data);
          T.generateMipmaps = !1;
        } else
          ot ? (I && t.texStorage2D(r.TEXTURE_2D, de, ve, k.width, k.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, k.width, k.height, Te, Re, k.data)) : t.texImage2D(r.TEXTURE_2D, 0, ve, k.width, k.height, 0, Te, Re, k.data);
      else if (T.isCompressedTexture)
        if (T.isCompressedArrayTexture) {
          ot && I && t.texStorage3D(r.TEXTURE_2D_ARRAY, de, ve, qe[0].width, qe[0].height, k.depth);
          for (let V = 0, ce = qe.length; V < ce; V++)
            Me = qe[V], T.format !== jt ? Te !== null ? ot ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, V, 0, 0, 0, Me.width, Me.height, k.depth, Te, Me.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, V, ve, Me.width, Me.height, k.depth, 0, Me.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ot ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, V, 0, 0, 0, Me.width, Me.height, k.depth, Te, Re, Me.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, V, ve, Me.width, Me.height, k.depth, 0, Te, Re, Me.data);
        } else {
          ot && I && t.texStorage2D(r.TEXTURE_2D, de, ve, qe[0].width, qe[0].height);
          for (let V = 0, ce = qe.length; V < ce; V++)
            Me = qe[V], T.format !== jt ? Te !== null ? ot ? t.compressedTexSubImage2D(r.TEXTURE_2D, V, 0, 0, Me.width, Me.height, Te, Me.data) : t.compressedTexImage2D(r.TEXTURE_2D, V, ve, Me.width, Me.height, 0, Me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ot ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, Me.width, Me.height, Te, Re, Me.data) : t.texImage2D(r.TEXTURE_2D, V, ve, Me.width, Me.height, 0, Te, Re, Me.data);
        }
      else if (T.isDataArrayTexture)
        ot ? (I && t.texStorage3D(r.TEXTURE_2D_ARRAY, de, ve, k.width, k.height, k.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, k.width, k.height, k.depth, Te, Re, k.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, ve, k.width, k.height, k.depth, 0, Te, Re, k.data);
      else if (T.isData3DTexture)
        ot ? (I && t.texStorage3D(r.TEXTURE_3D, de, ve, k.width, k.height, k.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, k.width, k.height, k.depth, Te, Re, k.data)) : t.texImage3D(r.TEXTURE_3D, 0, ve, k.width, k.height, k.depth, 0, Te, Re, k.data);
      else if (T.isFramebufferTexture) {
        if (I)
          if (ot)
            t.texStorage2D(r.TEXTURE_2D, de, ve, k.width, k.height);
          else {
            let V = k.width, ce = k.height;
            for (let pe = 0; pe < de; pe++)
              t.texImage2D(r.TEXTURE_2D, pe, ve, V, ce, 0, Te, Re, null), V >>= 1, ce >>= 1;
          }
      } else if (qe.length > 0 && Ce) {
        ot && I && t.texStorage2D(r.TEXTURE_2D, de, ve, qe[0].width, qe[0].height);
        for (let V = 0, ce = qe.length; V < ce; V++)
          Me = qe[V], ot ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, Te, Re, Me) : t.texImage2D(r.TEXTURE_2D, V, ve, Te, Re, Me);
        T.generateMipmaps = !1;
      } else
        ot ? (I && t.texStorage2D(r.TEXTURE_2D, de, ve, k.width, k.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Te, Re, k)) : t.texImage2D(r.TEXTURE_2D, 0, ve, Te, Re, k);
      E(T, Ce) && b(ie), Se.__version = se.version, T.onUpdate && T.onUpdate(T);
    }
    C.__version = T.version;
  }
  function lt(C, T, B) {
    if (T.image.length !== 6)
      return;
    const ie = we(C, T), te = T.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, C.__webglTexture, r.TEXTURE0 + B);
    const se = n.get(te);
    if (te.version !== se.__version || ie === !0) {
      t.activeTexture(r.TEXTURE0 + B), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, T.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, T.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const Se = T.isCompressedTexture || T.image[0].isCompressedTexture, oe = T.image[0] && T.image[0].isDataTexture, k = [];
      for (let V = 0; V < 6; V++)
        !Se && !oe ? k[V] = x(T.image[V], !1, !0, l) : k[V] = oe ? T.image[V].image : T.image[V], k[V] = pt(T, k[V]);
      const Ce = k[0], Te = y(Ce) || a, Re = s.convert(T.format, T.colorSpace), ve = s.convert(T.type), Me = L(T.internalFormat, Re, ve, T.colorSpace), qe = a && T.isVideoTexture !== !0, ot = se.__version === void 0 || ie === !0;
      let I = M(T, Ce, Te);
      Ae(r.TEXTURE_CUBE_MAP, T, Te);
      let de;
      if (Se) {
        qe && ot && t.texStorage2D(r.TEXTURE_CUBE_MAP, I, Me, Ce.width, Ce.height);
        for (let V = 0; V < 6; V++) {
          de = k[V].mipmaps;
          for (let ce = 0; ce < de.length; ce++) {
            const pe = de[ce];
            T.format !== jt ? Re !== null ? qe ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce, 0, 0, pe.width, pe.height, Re, pe.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce, Me, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce, 0, 0, pe.width, pe.height, Re, ve, pe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce, Me, pe.width, pe.height, 0, Re, ve, pe.data);
          }
        }
      } else {
        de = T.mipmaps, qe && ot && (de.length > 0 && I++, t.texStorage2D(r.TEXTURE_CUBE_MAP, I, Me, k[0].width, k[0].height));
        for (let V = 0; V < 6; V++)
          if (oe) {
            qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, k[V].width, k[V].height, Re, ve, k[V].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, Me, k[V].width, k[V].height, 0, Re, ve, k[V].data);
            for (let ce = 0; ce < de.length; ce++) {
              const Qe = de[ce].image[V].image;
              qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce + 1, 0, 0, Qe.width, Qe.height, Re, ve, Qe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce + 1, Me, Qe.width, Qe.height, 0, Re, ve, Qe.data);
            }
          } else {
            qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, Re, ve, k[V]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, Me, Re, ve, k[V]);
            for (let ce = 0; ce < de.length; ce++) {
              const pe = de[ce];
              qe ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce + 1, 0, 0, Re, ve, pe.image[V]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, ce + 1, Me, Re, ve, pe.image[V]);
            }
          }
      }
      E(T, Te) && b(r.TEXTURE_CUBE_MAP), se.__version = te.version, T.onUpdate && T.onUpdate(T);
    }
    C.__version = T.version;
  }
  function Ie(C, T, B, ie, te, se) {
    const Se = s.convert(B.format, B.colorSpace), oe = s.convert(B.type), k = L(B.internalFormat, Se, oe, B.colorSpace);
    if (!n.get(T).__hasExternalTextures) {
      const Te = Math.max(1, T.width >> se), Re = Math.max(1, T.height >> se);
      te === r.TEXTURE_3D || te === r.TEXTURE_2D_ARRAY ? t.texImage3D(te, se, k, Te, Re, T.depth, 0, Se, oe, null) : t.texImage2D(te, se, k, Te, Re, 0, Se, oe, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, C), ze(T) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, ie, te, n.get(B).__webglTexture, 0, ye(T)) : (te === r.TEXTURE_2D || te >= r.TEXTURE_CUBE_MAP_POSITIVE_X && te <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, ie, te, n.get(B).__webglTexture, se), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function P(C, T, B) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, C), T.depthBuffer && !T.stencilBuffer) {
      let ie = r.DEPTH_COMPONENT16;
      if (B || ze(T)) {
        const te = T.depthTexture;
        te && te.isDepthTexture && (te.type === Ln ? ie = r.DEPTH_COMPONENT32F : te.type === $n && (ie = r.DEPTH_COMPONENT24));
        const se = ye(T);
        ze(T) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, se, ie, T.width, T.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, se, ie, T.width, T.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, ie, T.width, T.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, C);
    } else if (T.depthBuffer && T.stencilBuffer) {
      const ie = ye(T);
      B && ze(T) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ie, r.DEPTH24_STENCIL8, T.width, T.height) : ze(T) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ie, r.DEPTH24_STENCIL8, T.width, T.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, T.width, T.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, C);
    } else {
      const ie = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
      for (let te = 0; te < ie.length; te++) {
        const se = ie[te], Se = s.convert(se.format, se.colorSpace), oe = s.convert(se.type), k = L(se.internalFormat, Se, oe, se.colorSpace), Ce = ye(T);
        B && ze(T) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Ce, k, T.width, T.height) : ze(T) ? d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Ce, k, T.width, T.height) : r.renderbufferStorage(r.RENDERBUFFER, k, T.width, T.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function ae(C, T) {
    if (T && T.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, C), !(T.depthTexture && T.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(T.depthTexture).__webglTexture || T.depthTexture.image.width !== T.width || T.depthTexture.image.height !== T.height) && (T.depthTexture.image.width = T.width, T.depthTexture.image.height = T.height, T.depthTexture.needsUpdate = !0), Q(T.depthTexture, 0);
    const ie = n.get(T.depthTexture).__webglTexture, te = ye(T);
    if (T.depthTexture.format === _i)
      ze(T) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, ie, 0, te) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, ie, 0);
    else if (T.depthTexture.format === ts)
      ze(T) ? d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, ie, 0, te) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, ie, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Z(C) {
    const T = n.get(C), B = C.isWebGLCubeRenderTarget === !0;
    if (C.depthTexture && !T.__autoAllocateDepthBuffer) {
      if (B)
        throw new Error("target.depthTexture not supported in Cube render targets");
      ae(T.__webglFramebuffer, C);
    } else if (B) {
      T.__webglDepthbuffer = [];
      for (let ie = 0; ie < 6; ie++)
        t.bindFramebuffer(r.FRAMEBUFFER, T.__webglFramebuffer[ie]), T.__webglDepthbuffer[ie] = r.createRenderbuffer(), P(T.__webglDepthbuffer[ie], C, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, T.__webglFramebuffer), T.__webglDepthbuffer = r.createRenderbuffer(), P(T.__webglDepthbuffer, C, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function re(C, T, B) {
    const ie = n.get(C);
    T !== void 0 && Ie(ie.__webglFramebuffer, C, C.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), B !== void 0 && Z(C);
  }
  function ee(C) {
    const T = C.texture, B = n.get(C), ie = n.get(T);
    C.addEventListener("dispose", $), C.isWebGLMultipleRenderTargets !== !0 && (ie.__webglTexture === void 0 && (ie.__webglTexture = r.createTexture()), ie.__version = T.version, o.memory.textures++);
    const te = C.isWebGLCubeRenderTarget === !0, se = C.isWebGLMultipleRenderTargets === !0, Se = y(C) || a;
    if (te) {
      B.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++)
        if (a && T.mipmaps && T.mipmaps.length > 0) {
          B.__webglFramebuffer[oe] = [];
          for (let k = 0; k < T.mipmaps.length; k++)
            B.__webglFramebuffer[oe][k] = r.createFramebuffer();
        } else
          B.__webglFramebuffer[oe] = r.createFramebuffer();
    } else {
      if (a && T.mipmaps && T.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let oe = 0; oe < T.mipmaps.length; oe++)
          B.__webglFramebuffer[oe] = r.createFramebuffer();
      } else
        B.__webglFramebuffer = r.createFramebuffer();
      if (se)
        if (i.drawBuffers) {
          const oe = C.texture;
          for (let k = 0, Ce = oe.length; k < Ce; k++) {
            const Te = n.get(oe[k]);
            Te.__webglTexture === void 0 && (Te.__webglTexture = r.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && C.samples > 0 && ze(C) === !1) {
        const oe = se ? T : [T];
        B.__webglMultisampledFramebuffer = r.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let k = 0; k < oe.length; k++) {
          const Ce = oe[k];
          B.__webglColorRenderbuffer[k] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, B.__webglColorRenderbuffer[k]);
          const Te = s.convert(Ce.format, Ce.colorSpace), Re = s.convert(Ce.type), ve = L(Ce.internalFormat, Te, Re, Ce.colorSpace, C.isXRRenderTarget === !0), Me = ye(C);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Me, ve, C.width, C.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + k, r.RENDERBUFFER, B.__webglColorRenderbuffer[k]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), C.depthBuffer && (B.__webglDepthRenderbuffer = r.createRenderbuffer(), P(B.__webglDepthRenderbuffer, C, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (te) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, ie.__webglTexture), Ae(r.TEXTURE_CUBE_MAP, T, Se);
      for (let oe = 0; oe < 6; oe++)
        if (a && T.mipmaps && T.mipmaps.length > 0)
          for (let k = 0; k < T.mipmaps.length; k++)
            Ie(B.__webglFramebuffer[oe][k], C, T, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, k);
        else
          Ie(B.__webglFramebuffer[oe], C, T, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
      E(T, Se) && b(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (se) {
      const oe = C.texture;
      for (let k = 0, Ce = oe.length; k < Ce; k++) {
        const Te = oe[k], Re = n.get(Te);
        t.bindTexture(r.TEXTURE_2D, Re.__webglTexture), Ae(r.TEXTURE_2D, Te, Se), Ie(B.__webglFramebuffer, C, Te, r.COLOR_ATTACHMENT0 + k, r.TEXTURE_2D, 0), E(Te, Se) && b(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let oe = r.TEXTURE_2D;
      if ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (a ? oe = C.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(oe, ie.__webglTexture), Ae(oe, T, Se), a && T.mipmaps && T.mipmaps.length > 0)
        for (let k = 0; k < T.mipmaps.length; k++)
          Ie(B.__webglFramebuffer[k], C, T, r.COLOR_ATTACHMENT0, oe, k);
      else
        Ie(B.__webglFramebuffer, C, T, r.COLOR_ATTACHMENT0, oe, 0);
      E(T, Se) && b(oe), t.unbindTexture();
    }
    C.depthBuffer && Z(C);
  }
  function Ee(C) {
    const T = y(C) || a, B = C.isWebGLMultipleRenderTargets === !0 ? C.texture : [C.texture];
    for (let ie = 0, te = B.length; ie < te; ie++) {
      const se = B[ie];
      if (E(se, T)) {
        const Se = C.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, oe = n.get(se).__webglTexture;
        t.bindTexture(Se, oe), b(Se), t.unbindTexture();
      }
    }
  }
  function ge(C) {
    if (a && C.samples > 0 && ze(C) === !1) {
      const T = C.isWebGLMultipleRenderTargets ? C.texture : [C.texture], B = C.width, ie = C.height;
      let te = r.COLOR_BUFFER_BIT;
      const se = [], Se = C.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, oe = n.get(C), k = C.isWebGLMultipleRenderTargets === !0;
      if (k)
        for (let Ce = 0; Ce < T.length; Ce++)
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ce, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ce, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, oe.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, oe.__webglFramebuffer);
      for (let Ce = 0; Ce < T.length; Ce++) {
        se.push(r.COLOR_ATTACHMENT0 + Ce), C.depthBuffer && se.push(Se);
        const Te = oe.__ignoreDepthValues !== void 0 ? oe.__ignoreDepthValues : !1;
        if (Te === !1 && (C.depthBuffer && (te |= r.DEPTH_BUFFER_BIT), C.stencilBuffer && (te |= r.STENCIL_BUFFER_BIT)), k && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, oe.__webglColorRenderbuffer[Ce]), Te === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [Se]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [Se])), k) {
          const Re = n.get(T[Ce]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Re, 0);
        }
        r.blitFramebuffer(0, 0, B, ie, 0, 0, B, ie, te, r.NEAREST), f && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, se);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), k)
        for (let Ce = 0; Ce < T.length; Ce++) {
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ce, r.RENDERBUFFER, oe.__webglColorRenderbuffer[Ce]);
          const Te = n.get(T[Ce]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ce, r.TEXTURE_2D, Te, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, oe.__webglMultisampledFramebuffer);
    }
  }
  function ye(C) {
    return Math.min(u, C.samples);
  }
  function ze(C) {
    const T = n.get(C);
    return a && C.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && T.__useRenderToTexture !== !1;
  }
  function Ke(C) {
    const T = o.render.frame;
    m.get(C) !== T && (m.set(C, T), C.update());
  }
  function pt(C, T) {
    const B = C.colorSpace, ie = C.format, te = C.type;
    return C.isCompressedTexture === !0 || C.format === ma || B !== yn && B !== xi && (B === Ue ? a === !1 ? e.has("EXT_sRGB") === !0 && ie === jt ? (C.format = ma, C.minFilter = ut, C.generateMipmaps = !1) : T = ih.sRGBToLinear(T) : (ie !== jt || te !== jn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), T;
  }
  this.allocateTextureUnit = K, this.resetTextureUnits = q, this.setTexture2D = Q, this.setTexture2DArray = F, this.setTexture3D = G, this.setTextureCube = ue, this.rebindTextures = re, this.setupRenderTarget = ee, this.updateRenderTargetMipmap = Ee, this.updateMultisampleRenderTarget = ge, this.setupDepthRenderbuffer = Z, this.setupFrameBufferTexture = Ie, this.useMultisampledRTT = ze;
}
function sp(r, e, t) {
  const n = t.isWebGL2;
  function i(s, o = xi) {
    let a;
    if (s === jn)
      return r.UNSIGNED_BYTE;
    if (s === ql)
      return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === $l)
      return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === xf)
      return r.BYTE;
    if (s === vf)
      return r.SHORT;
    if (s === Ta)
      return r.UNSIGNED_SHORT;
    if (s === Yl)
      return r.INT;
    if (s === $n)
      return r.UNSIGNED_INT;
    if (s === Ln)
      return r.FLOAT;
    if (s === $s)
      return n ? r.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Mf)
      return r.ALPHA;
    if (s === jt)
      return r.RGBA;
    if (s === Sf)
      return r.LUMINANCE;
    if (s === Ef)
      return r.LUMINANCE_ALPHA;
    if (s === _i)
      return r.DEPTH_COMPONENT;
    if (s === ts)
      return r.DEPTH_STENCIL;
    if (s === ma)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Tf)
      return r.RED;
    if (s === Zl)
      return r.RED_INTEGER;
    if (s === bf)
      return r.RG;
    if (s === Kl)
      return r.RG_INTEGER;
    if (s === Jl)
      return r.RGBA_INTEGER;
    if (s === sa || s === ra || s === oa || s === aa)
      if (o === Ue)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === sa)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === ra)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === oa)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === aa)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === sa)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === ra)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === oa)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === aa)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === rl || s === ol || s === al || s === cl)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === rl)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === ol)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === al)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === cl)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Af)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === ll || s === hl)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === ll)
          return o === Ue ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === hl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === ul || s === dl || s === fl || s === pl || s === ml || s === gl || s === _l || s === yl || s === xl || s === vl || s === Ml || s === Sl || s === El || s === Tl)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === ul)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === dl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === fl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === pl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === ml)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === gl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === _l)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === yl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === xl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === vl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Ml)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Sl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === El)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Tl)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === ca)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === ca)
          return o === Ue ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === wf || s === bl || s === Al || s === wl)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === ca)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === bl)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Al)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === wl)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === gi ? n ? r.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class rp extends At {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Zn extends He {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const rv = { type: "move" };
class Tc {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Zn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Zn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new w(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new w()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Zn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new w(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new w()), this._grip;
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
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(rv)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Zn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class op extends ft {
  constructor(e, t, n, i, s, o, a, c, l, h) {
    if (h = h !== void 0 ? h : _i, h !== _i && h !== ts)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === _i && (n = $n), n === void 0 && h === ts && (n = gi), super(null, i, s, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : _t, this.minFilter = c !== void 0 ? c : _t, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class ov extends ii {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, a = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, m = null;
    const _ = t.getContextAttributes();
    let g = null, p = null;
    const v = [], x = [], y = new At();
    y.layers.enable(1), y.viewport = new rt();
    const S = new At();
    S.layers.enable(2), S.viewport = new rt();
    const E = [y, S], b = new rp();
    b.layers.enable(1), b.layers.enable(2);
    let L = null, M = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(F) {
      let G = v[F];
      return G === void 0 && (G = new Tc(), v[F] = G), G.getTargetRaySpace();
    }, this.getControllerGrip = function(F) {
      let G = v[F];
      return G === void 0 && (G = new Tc(), v[F] = G), G.getGripSpace();
    }, this.getHand = function(F) {
      let G = v[F];
      return G === void 0 && (G = new Tc(), v[F] = G), G.getHandSpace();
    };
    function A(F) {
      const G = x.indexOf(F.inputSource);
      if (G === -1)
        return;
      const ue = v[G];
      ue !== void 0 && (ue.update(F.inputSource, F.frame, l || o), ue.dispatchEvent({ type: F.type, data: F.inputSource }));
    }
    function z() {
      i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", z), i.removeEventListener("inputsourceschange", $);
      for (let F = 0; F < v.length; F++) {
        const G = x[F];
        G !== null && (x[F] = null, v[F].disconnect(G));
      }
      L = null, M = null, e.setRenderTarget(g), f = null, d = null, u = null, i = null, p = null, Q.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(F) {
      s = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(F) {
      a = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(F) {
      l = F;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(F) {
      if (i = F, i !== null) {
        if (g = e.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", z), i.addEventListener("inputsourceschange", $), _.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const G = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(i, t, G), i.updateRenderState({ baseLayer: f }), p = new xn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: jt,
              type: jn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let G = null, ue = null, fe = null;
          _.depth && (fe = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, G = _.stencil ? ts : _i, ue = _.stencil ? gi : $n);
          const me = {
            colorFormat: t.RGBA8,
            depthFormat: fe,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(me), i.updateRenderState({ layers: [d] }), p = new xn(
            d.textureWidth,
            d.textureHeight,
            {
              format: jt,
              type: jn,
              depthTexture: new op(d.textureWidth, d.textureHeight, ue, void 0, void 0, void 0, void 0, void 0, void 0, G),
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
    function $(F) {
      for (let G = 0; G < F.removed.length; G++) {
        const ue = F.removed[G], fe = x.indexOf(ue);
        fe >= 0 && (x[fe] = null, v[fe].disconnect(ue));
      }
      for (let G = 0; G < F.added.length; G++) {
        const ue = F.added[G];
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
    const O = new w(), N = new w();
    function H(F, G, ue) {
      O.setFromMatrixPosition(G.matrixWorld), N.setFromMatrixPosition(ue.matrixWorld);
      const fe = O.distanceTo(N), me = G.projectionMatrix.elements, be = ue.projectionMatrix.elements, Ae = me[14] / (me[10] - 1), we = me[14] / (me[10] + 1), nt = (me[9] + 1) / me[5], lt = (me[9] - 1) / me[5], Ie = (me[8] - 1) / me[0], P = (be[8] + 1) / be[0], ae = Ae * Ie, Z = Ae * P, re = fe / (-Ie + P), ee = re * -Ie;
      G.matrixWorld.decompose(F.position, F.quaternion, F.scale), F.translateX(ee), F.translateZ(re), F.matrixWorld.compose(F.position, F.quaternion, F.scale), F.matrixWorldInverse.copy(F.matrixWorld).invert();
      const Ee = Ae + re, ge = we + re, ye = ae - ee, ze = Z + (fe - ee), Ke = nt * we / ge * Ee, pt = lt * we / ge * Ee;
      F.projectionMatrix.makePerspective(ye, ze, Ke, pt, Ee, ge), F.projectionMatrixInverse.copy(F.projectionMatrix).invert();
    }
    function j(F, G) {
      G === null ? F.matrixWorld.copy(F.matrix) : F.matrixWorld.multiplyMatrices(G.matrixWorld, F.matrix), F.matrixWorldInverse.copy(F.matrixWorld).invert();
    }
    this.updateCamera = function(F) {
      if (i === null)
        return;
      b.near = S.near = y.near = F.near, b.far = S.far = y.far = F.far, (L !== b.near || M !== b.far) && (i.updateRenderState({
        depthNear: b.near,
        depthFar: b.far
      }), L = b.near, M = b.far);
      const G = F.parent, ue = b.cameras;
      j(b, G);
      for (let fe = 0; fe < ue.length; fe++)
        j(ue[fe], G);
      ue.length === 2 ? H(b, y, S) : b.projectionMatrix.copy(y.projectionMatrix), q(F, b, G);
    };
    function q(F, G, ue) {
      ue === null ? F.matrix.copy(G.matrixWorld) : (F.matrix.copy(ue.matrixWorld), F.matrix.invert(), F.matrix.multiply(G.matrixWorld)), F.matrix.decompose(F.position, F.quaternion, F.scale), F.updateMatrixWorld(!0);
      const fe = F.children;
      for (let me = 0, be = fe.length; me < be; me++)
        fe[me].updateMatrixWorld(!0);
      F.projectionMatrix.copy(G.projectionMatrix), F.projectionMatrixInverse.copy(G.projectionMatrixInverse), F.isPerspectiveCamera && (F.fov = Ks * 2 * Math.atan(1 / F.projectionMatrix.elements[5]), F.zoom = 1);
    }
    this.getCamera = function() {
      return b;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return c;
    }, this.setFoveation = function(F) {
      c = F, d !== null && (d.fixedFoveation = F), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = F);
    };
    let K = null;
    function ne(F, G) {
      if (h = G.getViewerPose(l || o), m = G, h !== null) {
        const ue = h.views;
        f !== null && (e.setRenderTargetFramebuffer(p, f.framebuffer), e.setRenderTarget(p));
        let fe = !1;
        ue.length !== b.cameras.length && (b.cameras.length = 0, fe = !0);
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
          we === void 0 && (we = new At(), we.layers.enable(me), we.viewport = new rt(), E[me] = we), we.matrix.fromArray(be.transform.matrix), we.matrix.decompose(we.position, we.quaternion, we.scale), we.projectionMatrix.fromArray(be.projectionMatrix), we.projectionMatrixInverse.copy(we.projectionMatrix).invert(), we.viewport.set(Ae.x, Ae.y, Ae.width, Ae.height), me === 0 && (b.matrix.copy(we.matrix), b.matrix.decompose(b.position, b.quaternion, b.scale)), fe === !0 && b.cameras.push(we);
        }
      }
      for (let ue = 0; ue < v.length; ue++) {
        const fe = x[ue], me = v[ue];
        fe !== null && me !== void 0 && me.update(fe, G, l || o);
      }
      K && K(F, G), G.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: G }), m = null;
    }
    const Q = new Qf();
    Q.setAnimationLoop(ne), this.setAnimationLoop = function(F) {
      K = F;
    }, this.dispose = function() {
    };
  }
}
function av(r, e) {
  function t(g, p) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function n(g, p) {
    p.color.getRGB(g.fogColor.value, Zf(r)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
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
function cv(r, e, t, n) {
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
    for (let E = 0, b = y.length; E < b; E++) {
      const L = y[E];
      if (f(L, E, S) === !0) {
        const M = L.__offset, A = Array.isArray(L.value) ? L.value : [L.value];
        let z = 0;
        for (let $ = 0; $ < A.length; $++) {
          const O = A[$], N = _(O);
          typeof O == "number" ? (L.__data[0] = O, r.bufferSubData(r.UNIFORM_BUFFER, M + z, L.__data)) : O.isMatrix3 ? (L.__data[0] = O.elements[0], L.__data[1] = O.elements[1], L.__data[2] = O.elements[2], L.__data[3] = O.elements[0], L.__data[4] = O.elements[3], L.__data[5] = O.elements[4], L.__data[6] = O.elements[5], L.__data[7] = O.elements[0], L.__data[8] = O.elements[6], L.__data[9] = O.elements[7], L.__data[10] = O.elements[8], L.__data[11] = O.elements[0]) : (O.toArray(L.__data, z), z += N.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(r.UNIFORM_BUFFER, M, L.__data);
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
        const E = Array.isArray(S) ? S : [S], b = [];
        for (let L = 0; L < E.length; L++)
          b.push(E[L].clone());
        y[x] = b;
      }
      return !0;
    } else if (typeof S == "number") {
      if (y[x] !== S)
        return y[x] = S, !0;
    } else {
      const E = Array.isArray(y[x]) ? y[x] : [y[x]], b = Array.isArray(S) ? S : [S];
      for (let L = 0; L < E.length; L++) {
        const M = E[L];
        if (M.equals(b[L]) === !1)
          return M.copy(b[L]), !0;
      }
    }
    return !1;
  }
  function m(v) {
    const x = v.uniforms;
    let y = 0;
    const S = 16;
    let E = 0;
    for (let b = 0, L = x.length; b < L; b++) {
      const M = x[b], A = {
        boundary: 0,
        storage: 0
      }, z = Array.isArray(M.value) ? M.value : [M.value];
      for (let $ = 0, O = z.length; $ < O; $++) {
        const N = z[$], H = _(N);
        A.boundary += H.boundary, A.storage += H.storage;
      }
      if (M.__data = new Float32Array(A.storage / Float32Array.BYTES_PER_ELEMENT), M.__offset = y, b > 0) {
        E = y % S;
        const $ = S - E;
        E !== 0 && $ - A.boundary < 0 && (y += S - E, M.__offset = y);
      }
      y += A.storage;
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
function lv() {
  const r = kr("canvas");
  return r.style.display = "block", r;
}
class hh {
  constructor(e = {}) {
    const {
      canvas: t = lv(),
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = Ue, this._useLegacyLights = !1, this.toneMapping = Jn, this.toneMappingExposure = 1;
    const x = this;
    let y = !1, S = 0, E = 0, b = null, L = -1, M = null;
    const A = new rt(), z = new rt();
    let $ = null;
    const O = new he(0);
    let N = 0, H = t.width, j = t.height, q = 1, K = null, ne = null;
    const Q = new rt(0, 0, H, j), F = new rt(0, 0, H, j);
    let G = !1;
    const ue = new Ca();
    let fe = !1, me = !1, be = null;
    const Ae = new De(), we = new J(), nt = new w(), lt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ie() {
      return b === null ? q : 1;
    }
    let P = n;
    function ae(R, D) {
      for (let X = 0; X < R.length; X++) {
        const U = R[X], W = t.getContext(U, D);
        if (W !== null)
          return W;
      }
      return null;
    }
    try {
      const R = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ma}`), t.addEventListener("webglcontextlost", de, !1), t.addEventListener("webglcontextrestored", V, !1), t.addEventListener("webglcontextcreationerror", ce, !1), P === null) {
        const D = ["webgl2", "webgl", "experimental-webgl"];
        if (x.isWebGL1Renderer === !0 && D.shift(), P = ae(D, R), P === null)
          throw ae(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && P instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), P.getShaderPrecisionFormat === void 0 && (P.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (R) {
      throw console.error("THREE.WebGLRenderer: " + R.message), R;
    }
    let Z, re, ee, Ee, ge, ye, ze, Ke, pt, C, T, B, ie, te, se, Se, oe, k, Ce, Te, Re, ve, Me, qe;
    function ot() {
      Z = new Ty(P), re = new yy(P, Z, e), Z.init(re), ve = new sp(P, Z, re), ee = new iv(P, Z, re), Ee = new wy(P), ge = new Xx(), ye = new sv(P, Z, ee, ge, re, ve, Ee), ze = new vy(x), Ke = new Ey(x), pt = new Fg(P, re), Me = new gy(P, Z, pt, re), C = new by(P, pt, Ee, Me), T = new Py(P, C, pt, Ee), Ce = new Ly(P, re, ye), Se = new xy(ge), B = new Wx(x, ze, Ke, Z, re, Me, Se), ie = new av(x, ge), te = new qx(), se = new Qx(Z, re), k = new my(x, ze, Ke, ee, T, d, c), oe = new nv(x, T, re), qe = new cv(P, Ee, re, ee), Te = new _y(P, Z, Ee, re), Re = new Ay(P, Z, Ee, re), Ee.programs = B.programs, x.capabilities = re, x.extensions = Z, x.properties = ge, x.renderLists = te, x.shadowMap = oe, x.state = ee, x.info = Ee;
    }
    ot();
    const I = new ov(x, P);
    this.xr = I, this.getContext = function() {
      return P;
    }, this.getContextAttributes = function() {
      return P.getContextAttributes();
    }, this.forceContextLoss = function() {
      const R = Z.get("WEBGL_lose_context");
      R && R.loseContext();
    }, this.forceContextRestore = function() {
      const R = Z.get("WEBGL_lose_context");
      R && R.restoreContext();
    }, this.getPixelRatio = function() {
      return q;
    }, this.setPixelRatio = function(R) {
      R !== void 0 && (q = R, this.setSize(H, j, !1));
    }, this.getSize = function(R) {
      return R.set(H, j);
    }, this.setSize = function(R, D, X = !0) {
      if (I.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = R, j = D, t.width = Math.floor(R * q), t.height = Math.floor(D * q), X === !0 && (t.style.width = R + "px", t.style.height = D + "px"), this.setViewport(0, 0, R, D);
    }, this.getDrawingBufferSize = function(R) {
      return R.set(H * q, j * q).floor();
    }, this.setDrawingBufferSize = function(R, D, X) {
      H = R, j = D, q = X, t.width = Math.floor(R * X), t.height = Math.floor(D * X), this.setViewport(0, 0, R, D);
    }, this.getCurrentViewport = function(R) {
      return R.copy(A);
    }, this.getViewport = function(R) {
      return R.copy(Q);
    }, this.setViewport = function(R, D, X, U) {
      R.isVector4 ? Q.set(R.x, R.y, R.z, R.w) : Q.set(R, D, X, U), ee.viewport(A.copy(Q).multiplyScalar(q).floor());
    }, this.getScissor = function(R) {
      return R.copy(F);
    }, this.setScissor = function(R, D, X, U) {
      R.isVector4 ? F.set(R.x, R.y, R.z, R.w) : F.set(R, D, X, U), ee.scissor(z.copy(F).multiplyScalar(q).floor());
    }, this.getScissorTest = function() {
      return G;
    }, this.setScissorTest = function(R) {
      ee.setScissorTest(G = R);
    }, this.setOpaqueSort = function(R) {
      K = R;
    }, this.setTransparentSort = function(R) {
      ne = R;
    }, this.getClearColor = function(R) {
      return R.copy(k.getClearColor());
    }, this.setClearColor = function() {
      k.setClearColor.apply(k, arguments);
    }, this.getClearAlpha = function() {
      return k.getClearAlpha();
    }, this.setClearAlpha = function() {
      k.setClearAlpha.apply(k, arguments);
    }, this.clear = function(R = !0, D = !0, X = !0) {
      let U = 0;
      if (R) {
        let W = !1;
        if (b !== null) {
          const _e = b.texture.format;
          W = _e === Jl || _e === Kl || _e === Zl;
        }
        if (W) {
          const _e = b.texture.type, Le = _e === jn || _e === $n || _e === Ta || _e === gi || _e === ql || _e === $l, Fe = k.getClearColor(), Be = k.getClearAlpha(), $e = Fe.r, Ne = Fe.g, We = Fe.b;
          Le ? (f[0] = $e, f[1] = Ne, f[2] = We, f[3] = Be, P.clearBufferuiv(P.COLOR, 0, f)) : (m[0] = $e, m[1] = Ne, m[2] = We, m[3] = Be, P.clearBufferiv(P.COLOR, 0, m));
        } else
          U |= P.COLOR_BUFFER_BIT;
      }
      D && (U |= P.DEPTH_BUFFER_BIT), X && (U |= P.STENCIL_BUFFER_BIT), P.clear(U);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", de, !1), t.removeEventListener("webglcontextrestored", V, !1), t.removeEventListener("webglcontextcreationerror", ce, !1), te.dispose(), se.dispose(), ge.dispose(), ze.dispose(), Ke.dispose(), T.dispose(), Me.dispose(), qe.dispose(), B.dispose(), I.dispose(), I.removeEventListener("sessionstart", ct), I.removeEventListener("sessionend", bn), be && (be.dispose(), be = null), Ht.stop();
    };
    function de(R) {
      R.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function V() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const R = Ee.autoReset, D = oe.enabled, X = oe.autoUpdate, U = oe.needsUpdate, W = oe.type;
      ot(), Ee.autoReset = R, oe.enabled = D, oe.autoUpdate = X, oe.needsUpdate = U, oe.type = W;
    }
    function ce(R) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", R.statusMessage);
    }
    function pe(R) {
      const D = R.target;
      D.removeEventListener("dispose", pe), Qe(D);
    }
    function Qe(R) {
      ht(R), ge.remove(R);
    }
    function ht(R) {
      const D = ge.get(R).programs;
      D !== void 0 && (D.forEach(function(X) {
        B.releaseProgram(X);
      }), R.isShaderMaterial && B.releaseShaderCache(R));
    }
    this.renderBufferDirect = function(R, D, X, U, W, _e) {
      D === null && (D = lt);
      const Le = W.isMesh && W.matrixWorld.determinant() < 0, Fe = om(R, D, X, U, W);
      ee.setMaterial(U, Le);
      let Be = X.index, $e = 1;
      if (U.wireframe === !0) {
        if (Be = C.getWireframeAttribute(X), Be === void 0)
          return;
        $e = 2;
      }
      const Ne = X.drawRange, We = X.attributes.position;
      let mt = Ne.start * $e, xt = (Ne.start + Ne.count) * $e;
      _e !== null && (mt = Math.max(mt, _e.start * $e), xt = Math.min(xt, (_e.start + _e.count) * $e)), Be !== null ? (mt = Math.max(mt, 0), xt = Math.min(xt, Be.count)) : We != null && (mt = Math.max(mt, 0), xt = Math.min(xt, We.count));
      const tn = xt - mt;
      if (tn < 0 || tn === 1 / 0)
        return;
      Me.setup(W, U, Fe, X, Be);
      let zn, St = Te;
      if (Be !== null && (zn = pt.get(Be), St = Re, St.setIndex(zn)), W.isMesh)
        U.wireframe === !0 ? (ee.setLineWidth(U.wireframeLinewidth * Ie()), St.setMode(P.LINES)) : St.setMode(P.TRIANGLES);
      else if (W.isLine) {
        let Ze = U.linewidth;
        Ze === void 0 && (Ze = 1), ee.setLineWidth(Ze * Ie()), W.isLineSegments ? St.setMode(P.LINES) : W.isLineLoop ? St.setMode(P.LINE_LOOP) : St.setMode(P.LINE_STRIP);
      } else
        W.isPoints ? St.setMode(P.POINTS) : W.isSprite && St.setMode(P.TRIANGLES);
      if (W.isInstancedMesh)
        St.renderInstances(mt, tn, W.count);
      else if (X.isInstancedBufferGeometry) {
        const Ze = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, ec = Math.min(X.instanceCount, Ze);
        St.renderInstances(mt, tn, ec);
      } else
        St.render(mt, tn);
    }, this.compile = function(R, D) {
      function X(U, W, _e) {
        U.transparent === !0 && U.side === _n && U.forceSinglePass === !1 ? (U.side = Wt, U.needsUpdate = !0, uo(U, W, _e), U.side = Un, U.needsUpdate = !0, uo(U, W, _e), U.side = _n) : uo(U, W, _e);
      }
      g = se.get(R), g.init(), v.push(g), R.traverseVisible(function(U) {
        U.isLight && U.layers.test(D.layers) && (g.pushLight(U), U.castShadow && g.pushShadow(U));
      }), g.setupLights(x._useLegacyLights), R.traverse(function(U) {
        const W = U.material;
        if (W)
          if (Array.isArray(W))
            for (let _e = 0; _e < W.length; _e++) {
              const Le = W[_e];
              X(Le, R, U);
            }
          else
            X(W, R, U);
      }), v.pop(), g = null;
    };
    let Mt = null;
    function ri(R) {
      Mt && Mt(R);
    }
    function ct() {
      Ht.stop();
    }
    function bn() {
      Ht.start();
    }
    const Ht = new Qf();
    Ht.setAnimationLoop(ri), typeof self < "u" && Ht.setContext(self), this.setAnimationLoop = function(R) {
      Mt = R, I.setAnimationLoop(R), R === null ? Ht.stop() : Ht.start();
    }, I.addEventListener("sessionstart", ct), I.addEventListener("sessionend", bn), this.render = function(R, D) {
      if (D !== void 0 && D.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0)
        return;
      R.matrixWorldAutoUpdate === !0 && R.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), I.enabled === !0 && I.isPresenting === !0 && (I.cameraAutoUpdate === !0 && I.updateCamera(D), D = I.getCamera()), R.isScene === !0 && R.onBeforeRender(x, R, D, b), g = se.get(R, v.length), g.init(), v.push(g), Ae.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), ue.setFromProjectionMatrix(Ae), me = this.localClippingEnabled, fe = Se.init(this.clippingPlanes, me), _ = te.get(R, p.length), _.init(), p.push(_), Vh(R, D, 0, x.sortObjects), _.finish(), x.sortObjects === !0 && _.sort(K, ne), this.info.render.frame++, fe === !0 && Se.beginShadows();
      const X = g.state.shadowsArray;
      if (oe.render(X, R, D), fe === !0 && Se.endShadows(), this.info.autoReset === !0 && this.info.reset(), k.render(_, R), g.setupLights(x._useLegacyLights), D.isArrayCamera) {
        const U = D.cameras;
        for (let W = 0, _e = U.length; W < _e; W++) {
          const Le = U[W];
          Gh(_, R, Le, Le.viewport);
        }
      } else
        Gh(_, R, D);
      b !== null && (ye.updateMultisampleRenderTarget(b), ye.updateRenderTargetMipmap(b)), R.isScene === !0 && R.onAfterRender(x, R, D), Me.resetDefaultState(), L = -1, M = null, v.pop(), v.length > 0 ? g = v[v.length - 1] : g = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function Vh(R, D, X, U) {
      if (R.visible === !1)
        return;
      if (R.layers.test(D.layers)) {
        if (R.isGroup)
          X = R.renderOrder;
        else if (R.isLOD)
          R.autoUpdate === !0 && R.update(D);
        else if (R.isLight)
          g.pushLight(R), R.castShadow && g.pushShadow(R);
        else if (R.isSprite) {
          if (!R.frustumCulled || ue.intersectsSprite(R)) {
            U && nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);
            const Le = T.update(R), Fe = R.material;
            Fe.visible && _.push(R, Le, Fe, X, nt.z, null);
          }
        } else if ((R.isMesh || R.isLine || R.isPoints) && (!R.frustumCulled || ue.intersectsObject(R))) {
          const Le = T.update(R), Fe = R.material;
          if (U && (R.boundingSphere !== void 0 ? (R.boundingSphere === null && R.computeBoundingSphere(), nt.copy(R.boundingSphere.center)) : (Le.boundingSphere === null && Le.computeBoundingSphere(), nt.copy(Le.boundingSphere.center)), nt.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)), Array.isArray(Fe)) {
            const Be = Le.groups;
            for (let $e = 0, Ne = Be.length; $e < Ne; $e++) {
              const We = Be[$e], mt = Fe[We.materialIndex];
              mt && mt.visible && _.push(R, Le, mt, X, nt.z, We);
            }
          } else
            Fe.visible && _.push(R, Le, Fe, X, nt.z, null);
        }
      }
      const _e = R.children;
      for (let Le = 0, Fe = _e.length; Le < Fe; Le++)
        Vh(_e[Le], D, X, U);
    }
    function Gh(R, D, X, U) {
      const W = R.opaque, _e = R.transmissive, Le = R.transparent;
      g.setupLightsView(X), fe === !0 && Se.setGlobalState(x.clippingPlanes, X), _e.length > 0 && rm(W, _e, D, X), U && ee.viewport(A.copy(U)), W.length > 0 && ho(W, D, X), _e.length > 0 && ho(_e, D, X), Le.length > 0 && ho(Le, D, X), ee.buffers.depth.setTest(!0), ee.buffers.depth.setMask(!0), ee.buffers.color.setMask(!0), ee.setPolygonOffset(!1);
    }
    function rm(R, D, X, U) {
      const W = re.isWebGL2;
      be === null && (be = new xn(1, 1, {
        generateMipmaps: !0,
        type: Z.has("EXT_color_buffer_half_float") ? $s : jn,
        minFilter: On,
        samples: W ? 4 : 0
      })), x.getDrawingBufferSize(we), W ? be.setSize(we.x, we.y) : be.setSize(ga(we.x), ga(we.y));
      const _e = x.getRenderTarget();
      x.setRenderTarget(be), x.getClearColor(O), N = x.getClearAlpha(), N < 1 && x.setClearColor(16777215, 0.5), x.clear();
      const Le = x.toneMapping;
      x.toneMapping = Jn, ho(R, X, U), ye.updateMultisampleRenderTarget(be), ye.updateRenderTargetMipmap(be);
      let Fe = !1;
      for (let Be = 0, $e = D.length; Be < $e; Be++) {
        const Ne = D[Be], We = Ne.object, mt = Ne.geometry, xt = Ne.material, tn = Ne.group;
        if (xt.side === _n && We.layers.test(U.layers)) {
          const zn = xt.side;
          xt.side = Wt, xt.needsUpdate = !0, Wh(We, X, U, mt, xt, tn), xt.side = zn, xt.needsUpdate = !0, Fe = !0;
        }
      }
      Fe === !0 && (ye.updateMultisampleRenderTarget(be), ye.updateRenderTargetMipmap(be)), x.setRenderTarget(_e), x.setClearColor(O, N), x.toneMapping = Le;
    }
    function ho(R, D, X) {
      const U = D.isScene === !0 ? D.overrideMaterial : null;
      for (let W = 0, _e = R.length; W < _e; W++) {
        const Le = R[W], Fe = Le.object, Be = Le.geometry, $e = U === null ? Le.material : U, Ne = Le.group;
        Fe.layers.test(X.layers) && Wh(Fe, D, X, Be, $e, Ne);
      }
    }
    function Wh(R, D, X, U, W, _e) {
      R.onBeforeRender(x, D, X, U, W, _e), R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, R.matrixWorld), R.normalMatrix.getNormalMatrix(R.modelViewMatrix), W.onBeforeRender(x, D, X, U, R, _e), W.transparent === !0 && W.side === _n && W.forceSinglePass === !1 ? (W.side = Wt, W.needsUpdate = !0, x.renderBufferDirect(X, D, U, W, R, _e), W.side = Un, W.needsUpdate = !0, x.renderBufferDirect(X, D, U, W, R, _e), W.side = _n) : x.renderBufferDirect(X, D, U, W, R, _e), R.onAfterRender(x, D, X, U, W, _e);
    }
    function uo(R, D, X) {
      D.isScene !== !0 && (D = lt);
      const U = ge.get(R), W = g.state.lights, _e = g.state.shadowsArray, Le = W.state.version, Fe = B.getParameters(R, W.state, _e, D, X), Be = B.getProgramCacheKey(Fe);
      let $e = U.programs;
      U.environment = R.isMeshStandardMaterial ? D.environment : null, U.fog = D.fog, U.envMap = (R.isMeshStandardMaterial ? Ke : ze).get(R.envMap || U.environment), $e === void 0 && (R.addEventListener("dispose", pe), $e = /* @__PURE__ */ new Map(), U.programs = $e);
      let Ne = $e.get(Be);
      if (Ne !== void 0) {
        if (U.currentProgram === Ne && U.lightsStateVersion === Le)
          return Xh(R, Fe), Ne;
      } else
        Fe.uniforms = B.getUniforms(R), R.onBuild(X, Fe, x), R.onBeforeCompile(Fe, x), Ne = B.acquireProgram(Fe, Be), $e.set(Be, Ne), U.uniforms = Fe.uniforms;
      const We = U.uniforms;
      (!R.isShaderMaterial && !R.isRawShaderMaterial || R.clipping === !0) && (We.clippingPlanes = Se.uniform), Xh(R, Fe), U.needsLights = cm(R), U.lightsStateVersion = Le, U.needsLights && (We.ambientLightColor.value = W.state.ambient, We.lightProbe.value = W.state.probe, We.directionalLights.value = W.state.directional, We.directionalLightShadows.value = W.state.directionalShadow, We.spotLights.value = W.state.spot, We.spotLightShadows.value = W.state.spotShadow, We.rectAreaLights.value = W.state.rectArea, We.ltc_1.value = W.state.rectAreaLTC1, We.ltc_2.value = W.state.rectAreaLTC2, We.pointLights.value = W.state.point, We.pointLightShadows.value = W.state.pointShadow, We.hemisphereLights.value = W.state.hemi, We.directionalShadowMap.value = W.state.directionalShadowMap, We.directionalShadowMatrix.value = W.state.directionalShadowMatrix, We.spotShadowMap.value = W.state.spotShadowMap, We.spotLightMatrix.value = W.state.spotLightMatrix, We.spotLightMap.value = W.state.spotLightMap, We.pointShadowMap.value = W.state.pointShadowMap, We.pointShadowMatrix.value = W.state.pointShadowMatrix);
      const mt = Ne.getUniforms(), xt = ua.seqWithValue(mt.seq, We);
      return U.currentProgram = Ne, U.uniformsList = xt, Ne;
    }
    function Xh(R, D) {
      const X = ge.get(R);
      X.outputColorSpace = D.outputColorSpace, X.instancing = D.instancing, X.instancingColor = D.instancingColor, X.skinning = D.skinning, X.morphTargets = D.morphTargets, X.morphNormals = D.morphNormals, X.morphColors = D.morphColors, X.morphTargetsCount = D.morphTargetsCount, X.numClippingPlanes = D.numClippingPlanes, X.numIntersection = D.numClipIntersection, X.vertexAlphas = D.vertexAlphas, X.vertexTangents = D.vertexTangents, X.toneMapping = D.toneMapping;
    }
    function om(R, D, X, U, W) {
      D.isScene !== !0 && (D = lt), ye.resetTextureUnits();
      const _e = D.fog, Le = U.isMeshStandardMaterial ? D.environment : null, Fe = b === null ? x.outputColorSpace : b.isXRRenderTarget === !0 ? b.texture.colorSpace : yn, Be = (U.isMeshStandardMaterial ? Ke : ze).get(U.envMap || Le), $e = U.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, Ne = !!X.attributes.tangent && (!!U.normalMap || U.anisotropy > 0), We = !!X.morphAttributes.position, mt = !!X.morphAttributes.normal, xt = !!X.morphAttributes.color;
      let tn = Jn;
      U.toneMapped && (b === null || b.isXRRenderTarget === !0) && (tn = x.toneMapping);
      const zn = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, St = zn !== void 0 ? zn.length : 0, Ze = ge.get(U), ec = g.state.lights;
      if (fe === !0 && (me === !0 || R !== M)) {
        const Zt = R === M && U.id === L;
        Se.setState(U, R, Zt);
      }
      let Et = !1;
      U.version === Ze.__version ? (Ze.needsLights && Ze.lightsStateVersion !== ec.state.version || Ze.outputColorSpace !== Fe || W.isInstancedMesh && Ze.instancing === !1 || !W.isInstancedMesh && Ze.instancing === !0 || W.isSkinnedMesh && Ze.skinning === !1 || !W.isSkinnedMesh && Ze.skinning === !0 || W.isInstancedMesh && Ze.instancingColor === !0 && W.instanceColor === null || W.isInstancedMesh && Ze.instancingColor === !1 && W.instanceColor !== null || Ze.envMap !== Be || U.fog === !0 && Ze.fog !== _e || Ze.numClippingPlanes !== void 0 && (Ze.numClippingPlanes !== Se.numPlanes || Ze.numIntersection !== Se.numIntersection) || Ze.vertexAlphas !== $e || Ze.vertexTangents !== Ne || Ze.morphTargets !== We || Ze.morphNormals !== mt || Ze.morphColors !== xt || Ze.toneMapping !== tn || re.isWebGL2 === !0 && Ze.morphTargetsCount !== St) && (Et = !0) : (Et = !0, Ze.__version = U.version);
      let Li = Ze.currentProgram;
      Et === !0 && (Li = uo(U, D, W));
      let Yh = !1, ur = !1, tc = !1;
      const kt = Li.getUniforms(), Pi = Ze.uniforms;
      if (ee.useProgram(Li.program) && (Yh = !0, ur = !0, tc = !0), U.id !== L && (L = U.id, ur = !0), Yh || M !== R) {
        if (kt.setValue(P, "projectionMatrix", R.projectionMatrix), re.logarithmicDepthBuffer && kt.setValue(
          P,
          "logDepthBufFC",
          2 / (Math.log(R.far + 1) / Math.LN2)
        ), M !== R && (M = R, ur = !0, tc = !0), U.isShaderMaterial || U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshStandardMaterial || U.envMap) {
          const Zt = kt.map.cameraPosition;
          Zt !== void 0 && Zt.setValue(
            P,
            nt.setFromMatrixPosition(R.matrixWorld)
          );
        }
        (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial) && kt.setValue(P, "isOrthographic", R.isOrthographicCamera === !0), (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial || U.isShadowMaterial || W.isSkinnedMesh) && kt.setValue(P, "viewMatrix", R.matrixWorldInverse);
      }
      if (W.isSkinnedMesh) {
        kt.setOptional(P, W, "bindMatrix"), kt.setOptional(P, W, "bindMatrixInverse");
        const Zt = W.skeleton;
        Zt && (re.floatVertexTextures ? (Zt.boneTexture === null && Zt.computeBoneTexture(), kt.setValue(P, "boneTexture", Zt.boneTexture, ye), kt.setValue(P, "boneTextureSize", Zt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const nc = X.morphAttributes;
      if ((nc.position !== void 0 || nc.normal !== void 0 || nc.color !== void 0 && re.isWebGL2 === !0) && Ce.update(W, X, Li), (ur || Ze.receiveShadow !== W.receiveShadow) && (Ze.receiveShadow = W.receiveShadow, kt.setValue(P, "receiveShadow", W.receiveShadow)), U.isMeshGouraudMaterial && U.envMap !== null && (Pi.envMap.value = Be, Pi.flipEnvMap.value = Be.isCubeTexture && Be.isRenderTargetTexture === !1 ? -1 : 1), ur && (kt.setValue(P, "toneMappingExposure", x.toneMappingExposure), Ze.needsLights && am(Pi, tc), _e && U.fog === !0 && ie.refreshFogUniforms(Pi, _e), ie.refreshMaterialUniforms(Pi, U, q, j, be), ua.upload(P, Ze.uniformsList, Pi, ye)), U.isShaderMaterial && U.uniformsNeedUpdate === !0 && (ua.upload(P, Ze.uniformsList, Pi, ye), U.uniformsNeedUpdate = !1), U.isSpriteMaterial && kt.setValue(P, "center", W.center), kt.setValue(P, "modelViewMatrix", W.modelViewMatrix), kt.setValue(P, "normalMatrix", W.normalMatrix), kt.setValue(P, "modelMatrix", W.matrixWorld), U.isShaderMaterial || U.isRawShaderMaterial) {
        const Zt = U.uniformsGroups;
        for (let ic = 0, lm = Zt.length; ic < lm; ic++)
          if (re.isWebGL2) {
            const qh = Zt[ic];
            qe.update(qh, Li), qe.bind(qh, Li);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Li;
    }
    function am(R, D) {
      R.ambientLightColor.needsUpdate = D, R.lightProbe.needsUpdate = D, R.directionalLights.needsUpdate = D, R.directionalLightShadows.needsUpdate = D, R.pointLights.needsUpdate = D, R.pointLightShadows.needsUpdate = D, R.spotLights.needsUpdate = D, R.spotLightShadows.needsUpdate = D, R.rectAreaLights.needsUpdate = D, R.hemisphereLights.needsUpdate = D;
    }
    function cm(R) {
      return R.isMeshLambertMaterial || R.isMeshToonMaterial || R.isMeshPhongMaterial || R.isMeshStandardMaterial || R.isShadowMaterial || R.isShaderMaterial && R.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return S;
    }, this.getActiveMipmapLevel = function() {
      return E;
    }, this.getRenderTarget = function() {
      return b;
    }, this.setRenderTargetTextures = function(R, D, X) {
      ge.get(R.texture).__webglTexture = D, ge.get(R.depthTexture).__webglTexture = X;
      const U = ge.get(R);
      U.__hasExternalTextures = !0, U.__hasExternalTextures && (U.__autoAllocateDepthBuffer = X === void 0, U.__autoAllocateDepthBuffer || Z.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), U.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(R, D) {
      const X = ge.get(R);
      X.__webglFramebuffer = D, X.__useDefaultFramebuffer = D === void 0;
    }, this.setRenderTarget = function(R, D = 0, X = 0) {
      b = R, S = D, E = X;
      let U = !0, W = null, _e = !1, Le = !1;
      if (R) {
        const Be = ge.get(R);
        Be.__useDefaultFramebuffer !== void 0 ? (ee.bindFramebuffer(P.FRAMEBUFFER, null), U = !1) : Be.__webglFramebuffer === void 0 ? ye.setupRenderTarget(R) : Be.__hasExternalTextures && ye.rebindTextures(R, ge.get(R.texture).__webglTexture, ge.get(R.depthTexture).__webglTexture);
        const $e = R.texture;
        ($e.isData3DTexture || $e.isDataArrayTexture || $e.isCompressedArrayTexture) && (Le = !0);
        const Ne = ge.get(R).__webglFramebuffer;
        R.isWebGLCubeRenderTarget ? (Array.isArray(Ne[D]) ? W = Ne[D][X] : W = Ne[D], _e = !0) : re.isWebGL2 && R.samples > 0 && ye.useMultisampledRTT(R) === !1 ? W = ge.get(R).__webglMultisampledFramebuffer : Array.isArray(Ne) ? W = Ne[X] : W = Ne, A.copy(R.viewport), z.copy(R.scissor), $ = R.scissorTest;
      } else
        A.copy(Q).multiplyScalar(q).floor(), z.copy(F).multiplyScalar(q).floor(), $ = G;
      if (ee.bindFramebuffer(P.FRAMEBUFFER, W) && re.drawBuffers && U && ee.drawBuffers(R, W), ee.viewport(A), ee.scissor(z), ee.setScissorTest($), _e) {
        const Be = ge.get(R.texture);
        P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + D, Be.__webglTexture, X);
      } else if (Le) {
        const Be = ge.get(R.texture), $e = D || 0;
        P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, Be.__webglTexture, X || 0, $e);
      }
      L = -1;
    }, this.readRenderTargetPixels = function(R, D, X, U, W, _e, Le) {
      if (!(R && R.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Fe = ge.get(R).__webglFramebuffer;
      if (R.isWebGLCubeRenderTarget && Le !== void 0 && (Fe = Fe[Le]), Fe) {
        ee.bindFramebuffer(P.FRAMEBUFFER, Fe);
        try {
          const Be = R.texture, $e = Be.format, Ne = Be.type;
          if ($e !== jt && ve.convert($e) !== P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const We = Ne === $s && (Z.has("EXT_color_buffer_half_float") || re.isWebGL2 && Z.has("EXT_color_buffer_float"));
          if (Ne !== jn && ve.convert(Ne) !== P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE) && !(Ne === Ln && (re.isWebGL2 || Z.has("OES_texture_float") || Z.has("WEBGL_color_buffer_float"))) && !We) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= R.width - U && X >= 0 && X <= R.height - W && P.readPixels(D, X, U, W, ve.convert($e), ve.convert(Ne), _e);
        } finally {
          const Be = b !== null ? ge.get(b).__webglFramebuffer : null;
          ee.bindFramebuffer(P.FRAMEBUFFER, Be);
        }
      }
    }, this.copyFramebufferToTexture = function(R, D, X = 0) {
      const U = Math.pow(2, -X), W = Math.floor(D.image.width * U), _e = Math.floor(D.image.height * U);
      ye.setTexture2D(D, 0), P.copyTexSubImage2D(P.TEXTURE_2D, X, 0, 0, R.x, R.y, W, _e), ee.unbindTexture();
    }, this.copyTextureToTexture = function(R, D, X, U = 0) {
      const W = D.image.width, _e = D.image.height, Le = ve.convert(X.format), Fe = ve.convert(X.type);
      ye.setTexture2D(X, 0), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, X.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, X.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, X.unpackAlignment), D.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, U, R.x, R.y, W, _e, Le, Fe, D.image.data) : D.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, U, R.x, R.y, D.mipmaps[0].width, D.mipmaps[0].height, Le, D.mipmaps[0].data) : P.texSubImage2D(P.TEXTURE_2D, U, R.x, R.y, Le, Fe, D.image), U === 0 && X.generateMipmaps && P.generateMipmap(P.TEXTURE_2D), ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(R, D, X, U, W = 0) {
      if (x.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const _e = R.max.x - R.min.x + 1, Le = R.max.y - R.min.y + 1, Fe = R.max.z - R.min.z + 1, Be = ve.convert(U.format), $e = ve.convert(U.type);
      let Ne;
      if (U.isData3DTexture)
        ye.setTexture3D(U, 0), Ne = P.TEXTURE_3D;
      else if (U.isDataArrayTexture)
        ye.setTexture2DArray(U, 0), Ne = P.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, U.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, U.unpackAlignment);
      const We = P.getParameter(P.UNPACK_ROW_LENGTH), mt = P.getParameter(P.UNPACK_IMAGE_HEIGHT), xt = P.getParameter(P.UNPACK_SKIP_PIXELS), tn = P.getParameter(P.UNPACK_SKIP_ROWS), zn = P.getParameter(P.UNPACK_SKIP_IMAGES), St = X.isCompressedTexture ? X.mipmaps[0] : X.image;
      P.pixelStorei(P.UNPACK_ROW_LENGTH, St.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, St.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, R.min.x), P.pixelStorei(P.UNPACK_SKIP_ROWS, R.min.y), P.pixelStorei(P.UNPACK_SKIP_IMAGES, R.min.z), X.isDataTexture || X.isData3DTexture ? P.texSubImage3D(Ne, W, D.x, D.y, D.z, _e, Le, Fe, Be, $e, St.data) : X.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), P.compressedTexSubImage3D(Ne, W, D.x, D.y, D.z, _e, Le, Fe, Be, St.data)) : P.texSubImage3D(Ne, W, D.x, D.y, D.z, _e, Le, Fe, Be, $e, St), P.pixelStorei(P.UNPACK_ROW_LENGTH, We), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, mt), P.pixelStorei(P.UNPACK_SKIP_PIXELS, xt), P.pixelStorei(P.UNPACK_SKIP_ROWS, tn), P.pixelStorei(P.UNPACK_SKIP_IMAGES, zn), W === 0 && U.generateMipmaps && P.generateMipmap(Ne), ee.unbindTexture();
    }, this.initTexture = function(R) {
      R.isCubeTexture ? ye.setTextureCube(R, 0) : R.isData3DTexture ? ye.setTexture3D(R, 0) : R.isDataArrayTexture || R.isCompressedArrayTexture ? ye.setTexture2DArray(R, 0) : ye.setTexture2D(R, 0), ee.unbindTexture();
    }, this.resetState = function() {
      S = 0, E = 0, b = null, ee.reset(), Me.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Pn;
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Ue ? yi : eh;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === yi ? Ue : yn;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class ap extends hh {
}
ap.prototype.isWebGL1Renderer = !0;
class Pa {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new he(e), this.density = t;
  }
  clone() {
    return new Pa(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class Ia {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new he(e), this.near = t, this.far = n;
  }
  clone() {
    return new Ia(this.color, this.near, this.far);
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
class uh extends He {
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
class io {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = zr, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = en();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = en()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = en()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Vt = /* @__PURE__ */ new w();
class Si {
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
      return new st(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Si(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
class dh extends wt {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new he(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let Rs;
const gr = /* @__PURE__ */ new w(), Cs = /* @__PURE__ */ new w(), Ls = /* @__PURE__ */ new w(), Ps = /* @__PURE__ */ new J(), _r = /* @__PURE__ */ new J(), cp = /* @__PURE__ */ new De(), Uo = /* @__PURE__ */ new w(), yr = /* @__PURE__ */ new w(), Oo = /* @__PURE__ */ new w(), Pu = /* @__PURE__ */ new J(), bc = /* @__PURE__ */ new J(), Iu = /* @__PURE__ */ new J();
class lp extends He {
  constructor(e) {
    if (super(), this.isSprite = !0, this.type = "Sprite", Rs === void 0) {
      Rs = new Ye();
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
      ]), n = new io(t, 5);
      Rs.setIndex([0, 1, 2, 0, 2, 3]), Rs.setAttribute("position", new Si(n, 3, 0, !1)), Rs.setAttribute("uv", new Si(n, 2, 3, !1));
    }
    this.geometry = Rs, this.material = e !== void 0 ? e : new dh(), this.center = new J(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Cs.setFromMatrixScale(this.matrixWorld), cp.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ls.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Cs.multiplyScalar(-Ls.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    Do(Uo.set(-0.5, -0.5, 0), Ls, o, Cs, i, s), Do(yr.set(0.5, -0.5, 0), Ls, o, Cs, i, s), Do(Oo.set(0.5, 0.5, 0), Ls, o, Cs, i, s), Pu.set(0, 0), bc.set(1, 0), Iu.set(1, 1);
    let a = e.ray.intersectTriangle(Uo, yr, Oo, !1, gr);
    if (a === null && (Do(yr.set(-0.5, 0.5, 0), Ls, o, Cs, i, s), bc.set(0, 1), a = e.ray.intersectTriangle(Uo, Oo, yr, !1, gr), a === null))
      return;
    const c = e.ray.origin.distanceTo(gr);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: gr.clone(),
      uv: qt.getInterpolation(gr, Uo, yr, Oo, Pu, bc, Iu, new J()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Do(r, e, t, n, i, s) {
  Ps.subVectors(r, t).addScalar(0.5).multiply(n), i !== void 0 ? (_r.x = s * Ps.x - i * Ps.y, _r.y = i * Ps.x + s * Ps.y) : _r.copy(Ps), r.copy(e), r.x += _r.x, r.y += _r.y, r.applyMatrix4(cp);
}
const No = /* @__PURE__ */ new w(), Uu = /* @__PURE__ */ new w();
class hp extends He {
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
      No.setFromMatrixPosition(this.matrixWorld);
      const i = e.ray.origin.distanceTo(No);
      this.getObjectForDistance(i).raycast(e, t);
    }
  }
  update(e) {
    const t = this.levels;
    if (t.length > 1) {
      No.setFromMatrixPosition(e.matrixWorld), Uu.setFromMatrixPosition(this.matrixWorld);
      const n = No.distanceTo(Uu) / e.zoom;
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
const Ou = /* @__PURE__ */ new w(), Du = /* @__PURE__ */ new rt(), Nu = /* @__PURE__ */ new rt(), hv = /* @__PURE__ */ new w(), Fu = /* @__PURE__ */ new De(), Is = /* @__PURE__ */ new w(), Ac = /* @__PURE__ */ new dn(), Bu = /* @__PURE__ */ new De(), wc = /* @__PURE__ */ new ar();
class fh extends bt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new De(), this.bindMatrixInverse = new De(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Mn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      Is.fromBufferAttribute(t, n), this.applyBoneTransform(n, Is), this.boundingBox.expandByPoint(Is);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new dn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      Is.fromBufferAttribute(t, n), this.applyBoneTransform(n, Is), this.boundingSphere.expandByPoint(Is);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ac.copy(this.boundingSphere), Ac.applyMatrix4(i), e.ray.intersectsSphere(Ac) !== !1 && (Bu.copy(i).invert(), wc.copy(e.ray).applyMatrix4(Bu), !(this.boundingBox !== null && wc.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, wc)));
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
    const e = new rt(), t = this.geometry.attributes.skinWeight;
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
    Du.fromBufferAttribute(i.attributes.skinIndex, e), Nu.fromBufferAttribute(i.attributes.skinWeight, e), Ou.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const o = Nu.getComponent(s);
      if (o !== 0) {
        const a = Du.getComponent(s);
        Fu.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(hv.copy(Ou).applyMatrix4(Fu), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class Ua extends He {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Ws extends ft {
  constructor(e = null, t = 1, n = 1, i, s, o, a, c, l = _t, h = _t, u, d) {
    super(null, o, a, c, l, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const zu = /* @__PURE__ */ new De(), uv = /* @__PURE__ */ new De();
class so {
  constructor(e = [], t = []) {
    this.uuid = en(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new De());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new De();
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
      const a = e[s] ? e[s].matrixWorld : uv;
      zu.multiplyMatrices(a, t[s]), zu.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new so(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Wf(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Ws(t, e, e, jt, Ln);
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
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), o = new Ua()), this.bones.push(o), this.boneInverses.push(new De().fromArray(e.boneInverses[n]));
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
class js extends st {
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
const Us = /* @__PURE__ */ new De(), Hu = /* @__PURE__ */ new De(), Fo = [], ku = /* @__PURE__ */ new Mn(), dv = /* @__PURE__ */ new De(), xr = /* @__PURE__ */ new bt(), vr = /* @__PURE__ */ new dn();
class ph extends bt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new js(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, dv);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Mn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Us), ku.copy(e.boundingBox).applyMatrix4(Us), this.boundingBox.union(ku);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new dn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Us), vr.copy(e.boundingSphere).applyMatrix4(Us), this.boundingSphere.union(vr);
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
    if (xr.geometry = this.geometry, xr.material = this.material, xr.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), vr.copy(this.boundingSphere), vr.applyMatrix4(n), e.ray.intersectsSphere(vr) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Us), Hu.multiplyMatrices(n, Us), xr.matrixWorld = Hu, xr.raycast(e, Fo);
        for (let o = 0, a = Fo.length; o < a; o++) {
          const c = Fo[o];
          c.instanceId = s, c.object = this, t.push(c);
        }
        Fo.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new js(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class Bt extends wt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new he(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Vu = /* @__PURE__ */ new w(), Gu = /* @__PURE__ */ new w(), Wu = /* @__PURE__ */ new De(), Rc = /* @__PURE__ */ new ar(), Bo = /* @__PURE__ */ new dn();
class ti extends He {
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
        Vu.fromBufferAttribute(t, i - 1), Gu.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Vu.distanceTo(Gu);
      e.setAttribute("lineDistance", new xe(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Bo.copy(n.boundingSphere), Bo.applyMatrix4(i), Bo.radius += s, e.ray.intersectsSphere(Bo) === !1)
      return;
    Wu.copy(i).invert(), Rc.copy(e.ray).applyMatrix4(Wu);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new w(), h = new w(), u = new w(), d = new w(), f = this.isLineSegments ? 2 : 1, m = n.index, g = n.attributes.position;
    if (m !== null) {
      const p = Math.max(0, o.start), v = Math.min(m.count, o.start + o.count);
      for (let x = p, y = v - 1; x < y; x += f) {
        const S = m.getX(x), E = m.getX(x + 1);
        if (l.fromBufferAttribute(g, S), h.fromBufferAttribute(g, E), Rc.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(d);
        L < e.near || L > e.far || t.push({
          distance: L,
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
        if (l.fromBufferAttribute(g, x), h.fromBufferAttribute(g, x + 1), Rc.distanceSqToSegment(l, h, d, u) > c)
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
const Xu = /* @__PURE__ */ new w(), Yu = /* @__PURE__ */ new w();
class Sn extends ti {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Xu.fromBufferAttribute(t, i), Yu.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Xu.distanceTo(Yu);
      e.setAttribute("lineDistance", new xe(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class mh extends ti {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Oa extends wt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new he(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const qu = /* @__PURE__ */ new De(), Il = /* @__PURE__ */ new ar(), zo = /* @__PURE__ */ new dn(), Ho = /* @__PURE__ */ new w();
class gh extends He {
  constructor(e = new Ye(), t = new Oa()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), zo.copy(n.boundingSphere), zo.applyMatrix4(i), zo.radius += s, e.ray.intersectsSphere(zo) === !1)
      return;
    qu.copy(i).invert(), Il.copy(e.ray).applyMatrix4(qu);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, o.start), f = Math.min(l.count, o.start + o.count);
      for (let m = d, _ = f; m < _; m++) {
        const g = l.getX(m);
        Ho.fromBufferAttribute(u, g), $u(Ho, g, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let m = d, _ = f; m < _; m++)
        Ho.fromBufferAttribute(u, m), $u(Ho, m, c, i, e, t, this);
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
function $u(r, e, t, n, i, s, o) {
  const a = Il.distanceSqToPoint(r);
  if (a < t) {
    const c = new w();
    Il.closestPointToPoint(r, c), c.applyMatrix4(n);
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
class fv extends ft {
  constructor(e, t, n, i, s, o, a, c, l) {
    super(e, t, n, i, s, o, a, c, l), this.isVideoTexture = !0, this.minFilter = o !== void 0 ? o : ut, this.magFilter = s !== void 0 ? s : ut, this.generateMipmaps = !1;
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
class pv extends ft {
  constructor(e, t) {
    super({ width: e, height: t }), this.isFramebufferTexture = !0, this.magFilter = _t, this.minFilter = _t, this.generateMipmaps = !1, this.needsUpdate = !0;
  }
}
class Da extends ft {
  constructor(e, t, n, i, s, o, a, c, l, h, u, d) {
    super(null, o, a, c, l, h, i, s, u, d), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class mv extends Da {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, s, o), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = Ot;
  }
}
class gv extends Da {
  constructor(e, t, n) {
    super(void 0, e[0].width, e[0].height, t, n, ei), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e;
  }
}
class _v extends ft {
  constructor(e, t, n, i, s, o, a, c, l) {
    super(e, t, n, i, s, o, a, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class En {
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
    const o = this.getPoint(i), a = this.getPoint(s), c = t || (o.isVector2 ? new J() : new w());
    return c.copy(a).sub(o).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new w(), i = [], s = [], o = [], a = new w(), c = new De();
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
class Na extends En {
  constructor(e = 0, t = 0, n = 1, i = 1, s = 0, o = Math.PI * 2, a = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c;
  }
  getPoint(e, t) {
    const n = t || new J(), i = Math.PI * 2;
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
class up extends Na {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, n, i, s, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function _h() {
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
const ko = /* @__PURE__ */ new w(), Cc = /* @__PURE__ */ new _h(), Lc = /* @__PURE__ */ new _h(), Pc = /* @__PURE__ */ new _h();
class dp extends En {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.points, s = i.length, o = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), c = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1);
    let l, h;
    this.closed || a > 0 ? l = i[(a - 1) % s] : (ko.subVectors(i[0], i[1]).add(i[0]), l = ko);
    const u = i[a % s], d = i[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = i[(a + 2) % s] : (ko.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = ko), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(l.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), g = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), Cc.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, m, _, g), Lc.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, m, _, g), Pc.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, m, _, g);
    } else
      this.curveType === "catmullrom" && (Cc.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), Lc.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), Pc.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      Cc.calc(c),
      Lc.calc(c),
      Pc.calc(c)
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
function Zu(r, e, t, n, i) {
  const s = (n - e) * 0.5, o = (i - t) * 0.5, a = r * r, c = r * a;
  return (2 * t - 2 * n + s + o) * c + (-3 * t + 3 * n - 2 * s - o) * a + s * r + t;
}
function yv(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function xv(r, e) {
  return 2 * (1 - r) * r * e;
}
function vv(r, e) {
  return r * r * e;
}
function Ur(r, e, t, n) {
  return yv(r, e) + xv(r, t) + vv(r, n);
}
function Mv(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function Sv(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function Ev(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function Tv(r, e) {
  return r * r * r * e;
}
function Or(r, e, t, n, i) {
  return Mv(r, e) + Sv(r, t) + Ev(r, n) + Tv(r, i);
}
class yh extends En {
  constructor(e = new J(), t = new J(), n = new J(), i = new J()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new J()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      Or(e, i.x, s.x, o.x, a.x),
      Or(e, i.y, s.y, o.y, a.y)
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
class fp extends En {
  constructor(e = new w(), t = new w(), n = new w(), i = new w()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      Or(e, i.x, s.x, o.x, a.x),
      Or(e, i.y, s.y, o.y, a.y),
      Or(e, i.z, s.z, o.z, a.z)
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
class Fa extends En {
  constructor(e = new J(), t = new J()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new J()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new J()) {
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
class pp extends En {
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
class xh extends En {
  constructor(e = new J(), t = new J(), n = new J()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new J()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Ur(e, i.x, s.x, o.x),
      Ur(e, i.y, s.y, o.y)
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
class vh extends En {
  constructor(e = new w(), t = new w(), n = new w()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new w()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Ur(e, i.x, s.x, o.x),
      Ur(e, i.y, s.y, o.y),
      Ur(e, i.z, s.z, o.z)
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
class Mh extends En {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new J()) {
    const n = t, i = this.points, s = (i.length - 1) * e, o = Math.floor(s), a = s - o, c = i[o === 0 ? o : o - 1], l = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(
      Zu(a, c.x, l.x, h.x, u.x),
      Zu(a, c.y, l.y, h.y, u.y)
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
      this.points.push(new J().fromArray(i));
    }
    return this;
  }
}
var Sh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: up,
  CatmullRomCurve3: dp,
  CubicBezierCurve: yh,
  CubicBezierCurve3: fp,
  EllipseCurve: Na,
  LineCurve: Fa,
  LineCurve3: pp,
  QuadraticBezierCurve: xh,
  QuadraticBezierCurve3: vh,
  SplineCurve: Mh
});
class mp extends En {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Fa(t, e));
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
      this.curves.push(new Sh[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Vr extends mp {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new J(), e && this.setFromPoints(e);
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
    const n = new Fa(this.currentPoint.clone(), new J(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new xh(
      this.currentPoint.clone(),
      new J(e, t),
      new J(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, o) {
    const a = new yh(
      this.currentPoint.clone(),
      new J(e, t),
      new J(n, i),
      new J(s, o)
    );
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new Mh(t);
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
    const l = new Na(e, t, n, i, s, o, a, c);
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
class ro extends Ye {
  constructor(e = [new J(0, -0.5), new J(0.5, 0), new J(0, 0.5)], t = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: i
    }, t = Math.floor(t), i = yt(i, 0, Math.PI * 2);
    const s = [], o = [], a = [], c = [], l = [], h = 1 / t, u = new w(), d = new J(), f = new w(), m = new w(), _ = new w();
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
        const b = c[3 * E + 0] * y, L = c[3 * E + 1], M = c[3 * E + 0] * S;
        l.push(b, L, M);
      }
    }
    for (let v = 0; v < t; v++)
      for (let x = 0; x < e.length - 1; x++) {
        const y = x + v * e.length, S = y, E = y + e.length, b = y + e.length + 1, L = y + 1;
        s.push(S, E, L), s.push(b, L, E);
      }
    this.setIndex(s), this.setAttribute("position", new xe(o, 3)), this.setAttribute("uv", new xe(a, 2)), this.setAttribute("normal", new xe(l, 3));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ro(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class Ba extends ro {
  constructor(e = 1, t = 1, n = 4, i = 8) {
    const s = new Vr();
    s.absarc(0, -t / 2, e, Math.PI * 1.5, 0), s.absarc(0, t / 2, e, 0, Math.PI * 0.5), super(s.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
      radius: e,
      length: t,
      capSegments: n,
      radialSegments: i
    };
  }
  static fromJSON(e) {
    return new Ba(e.radius, e.length, e.capSegments, e.radialSegments);
  }
}
class za extends Ye {
  constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: i
    }, t = Math.max(3, t);
    const s = [], o = [], a = [], c = [], l = new w(), h = new J();
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
    return new za(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class lr extends Ye {
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
      const b = (t - e) / n;
      for (let L = 0; L <= s; L++) {
        const M = [], A = L / s, z = A * (t - e) + e;
        for (let $ = 0; $ <= i; $++) {
          const O = $ / i, N = O * c + a, H = Math.sin(N), j = Math.cos(N);
          S.x = z * H, S.y = -A * n + g, S.z = z * j, u.push(S.x, S.y, S.z), y.set(H, b, j).normalize(), d.push(y.x, y.y, y.z), f.push(O, 1 - A), M.push(m++);
        }
        _.push(M);
      }
      for (let L = 0; L < i; L++)
        for (let M = 0; M < s; M++) {
          const A = _[M][L], z = _[M + 1][L], $ = _[M + 1][L + 1], O = _[M][L + 1];
          h.push(A, z, O), h.push(z, $, O), E += 6;
        }
      l.addGroup(p, E, 0), p += E;
    }
    function x(y) {
      const S = m, E = new J(), b = new w();
      let L = 0;
      const M = y === !0 ? e : t, A = y === !0 ? 1 : -1;
      for (let $ = 1; $ <= i; $++)
        u.push(0, g * A, 0), d.push(0, A, 0), f.push(0.5, 0.5), m++;
      const z = m;
      for (let $ = 0; $ <= i; $++) {
        const N = $ / i * c + a, H = Math.cos(N), j = Math.sin(N);
        b.x = M * j, b.y = g * A, b.z = M * H, u.push(b.x, b.y, b.z), d.push(0, A, 0), E.x = H * 0.5 + 0.5, E.y = j * 0.5 * A + 0.5, f.push(E.x, E.y), m++;
      }
      for (let $ = 0; $ < i; $++) {
        const O = S + $, N = z + $;
        y === !0 ? h.push(N, N + 1, O) : h.push(N + 1, N, O), L += 3;
      }
      l.addGroup(p, L, y === !0 ? 1 : 2), p += L;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new lr(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ha extends lr {
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
    return new Ha(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ai extends Ye {
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
      const E = S + 1, b = [];
      for (let L = 0; L <= E; L++) {
        b[L] = [];
        const M = v.clone().lerp(y, L / E), A = x.clone().lerp(y, L / E), z = E - L;
        for (let $ = 0; $ <= z; $++)
          $ === 0 && L === E ? b[L][$] = M : b[L][$] = M.clone().lerp(A, $ / z);
      }
      for (let L = 0; L < E; L++)
        for (let M = 0; M < 2 * (E - L) - 1; M++) {
          const A = Math.floor(M / 2);
          M % 2 === 0 ? (d(b[L][A + 1]), d(b[L + 1][A]), d(b[L][A])) : (d(b[L][A + 1]), d(b[L + 1][A + 1]), d(b[L + 1][A]));
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
        const x = o[v + 0], y = o[v + 2], S = o[v + 4], E = Math.max(x, y, S), b = Math.min(x, y, S);
        E > 0.9 && b < 0.1 && (x < 0.2 && (o[v + 0] += 1), y < 0.2 && (o[v + 2] += 1), S < 0.2 && (o[v + 4] += 1));
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
      const v = new w(), x = new w(), y = new w(), S = new w(), E = new J(), b = new J(), L = new J();
      for (let M = 0, A = 0; M < s.length; M += 9, A += 6) {
        v.set(s[M + 0], s[M + 1], s[M + 2]), x.set(s[M + 3], s[M + 4], s[M + 5]), y.set(s[M + 6], s[M + 7], s[M + 8]), E.set(o[A + 0], o[A + 1]), b.set(o[A + 2], o[A + 3]), L.set(o[A + 4], o[A + 5]), S.copy(v).add(x).add(y).divideScalar(3);
        const z = g(S);
        _(E, A + 0, v, z), _(b, A + 2, x, z), _(L, A + 4, y, z);
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
    return new Ai(e.vertices, e.indices, e.radius, e.details);
  }
}
class ka extends Ai {
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
    return new ka(e.radius, e.detail);
  }
}
const Vo = /* @__PURE__ */ new w(), Go = /* @__PURE__ */ new w(), Ic = /* @__PURE__ */ new w(), Wo = /* @__PURE__ */ new qt();
class gp extends Ye {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const i = Math.pow(10, 4), s = Math.cos(Qi * t), o = e.getIndex(), a = e.getAttribute("position"), c = o ? o.count : a.count, l = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let m = 0; m < c; m += 3) {
        o ? (l[0] = o.getX(m), l[1] = o.getX(m + 1), l[2] = o.getX(m + 2)) : (l[0] = m, l[1] = m + 1, l[2] = m + 2);
        const { a: _, b: g, c: p } = Wo;
        if (_.fromBufferAttribute(a, l[0]), g.fromBufferAttribute(a, l[1]), p.fromBufferAttribute(a, l[2]), Wo.getNormal(Ic), u[0] = `${Math.round(_.x * i)},${Math.round(_.y * i)},${Math.round(_.z * i)}`, u[1] = `${Math.round(g.x * i)},${Math.round(g.y * i)},${Math.round(g.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let v = 0; v < 3; v++) {
            const x = (v + 1) % 3, y = u[v], S = u[x], E = Wo[h[v]], b = Wo[h[x]], L = `${y}_${S}`, M = `${S}_${y}`;
            M in d && d[M] ? (Ic.dot(d[M].normal) <= s && (f.push(E.x, E.y, E.z), f.push(b.x, b.y, b.z)), d[M] = null) : L in d || (d[L] = {
              index0: l[v],
              index1: l[x],
              normal: Ic.clone()
            });
          }
      }
      for (const m in d)
        if (d[m]) {
          const { index0: _, index1: g } = d[m];
          Vo.fromBufferAttribute(a, _), Go.fromBufferAttribute(a, g), f.push(Vo.x, Vo.y, Vo.z), f.push(Go.x, Go.y, Go.z);
        }
      this.setAttribute("position", new xe(f, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class es extends Vr {
  constructor(e) {
    super(e), this.uuid = en(), this.type = "Shape", this.holes = [];
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
      this.holes.push(new Vr().fromJSON(i));
    }
    return this;
  }
}
const bv = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = _p(r, 0, i, t, !0);
    const o = [];
    if (!s || s.next === s.prev)
      return o;
    let a, c, l, h, u, d, f;
    if (n && (s = Lv(r, e, s, t)), r.length > 80 * t) {
      a = l = r[0], c = h = r[1];
      for (let m = t; m < i; m += t)
        u = r[m], d = r[m + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      f = Math.max(l - a, h - c), f = f !== 0 ? 32767 / f : 0;
    }
    return Gr(s, o, t, a, c, f, 0), o;
  }
};
function _p(r, e, t, n, i) {
  let s, o;
  if (i === kv(r, e, t, n) > 0)
    for (s = e; s < t; s += n)
      o = Ku(s, r[s], r[s + 1], o);
  else
    for (s = t - n; s >= e; s -= n)
      o = Ku(s, r[s], r[s + 1], o);
  return o && Va(o, o.next) && (Xr(o), o = o.next), o;
}
function is(r, e) {
  if (!r)
    return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (Va(t, t.next) || dt(t.prev, t, t.next) === 0)) {
      if (Xr(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Gr(r, e, t, n, i, s, o) {
  if (!r)
    return;
  !o && s && Dv(r, n, i, s);
  let a = r, c, l;
  for (; r.prev !== r.next; ) {
    if (c = r.prev, l = r.next, s ? wv(r, n, i, s) : Av(r)) {
      e.push(c.i / t | 0), e.push(r.i / t | 0), e.push(l.i / t | 0), Xr(r), r = l.next, a = l.next;
      continue;
    }
    if (r = l, r === a) {
      o ? o === 1 ? (r = Rv(is(r), e, t), Gr(r, e, t, n, i, s, 2)) : o === 2 && Cv(r, e, t, n, i, s) : Gr(is(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function Av(r) {
  const e = r.prev, t = r, n = r.next;
  if (dt(e, t, n) >= 0)
    return !1;
  const i = e.x, s = t.x, o = n.x, a = e.y, c = t.y, l = n.y, h = i < s ? i < o ? i : o : s < o ? s : o, u = a < c ? a < l ? a : l : c < l ? c : l, d = i > s ? i > o ? i : o : s > o ? s : o, f = a > c ? a > l ? a : l : c > l ? c : l;
  let m = n.next;
  for (; m !== e; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= f && ks(i, a, s, c, o, l, m.x, m.y) && dt(m.prev, m, m.next) >= 0)
      return !1;
    m = m.next;
  }
  return !0;
}
function wv(r, e, t, n) {
  const i = r.prev, s = r, o = r.next;
  if (dt(i, s, o) >= 0)
    return !1;
  const a = i.x, c = s.x, l = o.x, h = i.y, u = s.y, d = o.y, f = a < c ? a < l ? a : l : c < l ? c : l, m = h < u ? h < d ? h : d : u < d ? u : d, _ = a > c ? a > l ? a : l : c > l ? c : l, g = h > u ? h > d ? h : d : u > d ? u : d, p = Ul(f, m, e, t, n), v = Ul(_, g, e, t, n);
  let x = r.prevZ, y = r.nextZ;
  for (; x && x.z >= p && y && y.z <= v; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== o && ks(a, h, c, u, l, d, x.x, x.y) && dt(x.prev, x, x.next) >= 0 || (x = x.prevZ, y.x >= f && y.x <= _ && y.y >= m && y.y <= g && y !== i && y !== o && ks(a, h, c, u, l, d, y.x, y.y) && dt(y.prev, y, y.next) >= 0))
      return !1;
    y = y.nextZ;
  }
  for (; x && x.z >= p; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== o && ks(a, h, c, u, l, d, x.x, x.y) && dt(x.prev, x, x.next) >= 0)
      return !1;
    x = x.prevZ;
  }
  for (; y && y.z <= v; ) {
    if (y.x >= f && y.x <= _ && y.y >= m && y.y <= g && y !== i && y !== o && ks(a, h, c, u, l, d, y.x, y.y) && dt(y.prev, y, y.next) >= 0)
      return !1;
    y = y.nextZ;
  }
  return !0;
}
function Rv(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Va(i, s) && yp(i, n, n.next, s) && Wr(i, s) && Wr(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), Xr(n), Xr(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return is(n);
}
function Cv(r, e, t, n, i, s) {
  let o = r;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Bv(o, a)) {
        let c = xp(o, a);
        o = is(o, o.next), c = is(c, c.next), Gr(o, e, t, n, i, s, 0), Gr(c, e, t, n, i, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== r);
}
function Lv(r, e, t, n) {
  const i = [];
  let s, o, a, c, l;
  for (s = 0, o = e.length; s < o; s++)
    a = e[s] * n, c = s < o - 1 ? e[s + 1] * n : r.length, l = _p(r, a, c, n, !1), l === l.next && (l.steiner = !0), i.push(Fv(l));
  for (i.sort(Pv), s = 0; s < i.length; s++)
    t = Iv(i[s], t);
  return t;
}
function Pv(r, e) {
  return r.x - e.x;
}
function Iv(r, e) {
  const t = Uv(r, e);
  if (!t)
    return e;
  const n = xp(t, r);
  return is(n, n.next), is(t, t.next);
}
function Uv(r, e) {
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
    s >= t.x && t.x >= c && s !== t.x && ks(o < l ? s : n, o, c, l, o < l ? n : s, o, t.x, t.y) && (u = Math.abs(o - t.y) / (s - t.x), Wr(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && Ov(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== a);
  return i;
}
function Ov(r, e) {
  return dt(r.prev, r, e.prev) < 0 && dt(e.next, r, r.next) < 0;
}
function Dv(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = Ul(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, Nv(i);
}
function Nv(r) {
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
function Ul(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function Fv(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function ks(r, e, t, n, i, s, o, a) {
  return (i - o) * (e - a) >= (r - o) * (s - a) && (r - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (i - o) * (n - a);
}
function Bv(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !zv(r, e) && (Wr(r, e) && Wr(e, r) && Hv(r, e) && (dt(r.prev, r, e.prev) || dt(r, e.prev, e)) || Va(r, e) && dt(r.prev, r, r.next) > 0 && dt(e.prev, e, e.next) > 0);
}
function dt(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function Va(r, e) {
  return r.x === e.x && r.y === e.y;
}
function yp(r, e, t, n) {
  const i = Yo(dt(r, e, t)), s = Yo(dt(r, e, n)), o = Yo(dt(t, n, r)), a = Yo(dt(t, n, e));
  return !!(i !== s && o !== a || i === 0 && Xo(r, t, e) || s === 0 && Xo(r, n, e) || o === 0 && Xo(t, r, n) || a === 0 && Xo(t, e, n));
}
function Xo(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function Yo(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function zv(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && yp(t, t.next, r, e))
      return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function Wr(r, e) {
  return dt(r.prev, r, r.next) < 0 ? dt(r, e, r.next) >= 0 && dt(r, r.prev, e) >= 0 : dt(r, e, r.prev) < 0 || dt(r, r.next, e) < 0;
}
function Hv(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function xp(r, e) {
  const t = new Ol(r.i, r.x, r.y), n = new Ol(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function Ku(r, e, t, n) {
  const i = new Ol(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Xr(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function Ol(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function kv(r, e, t, n) {
  let i = 0;
  for (let s = e, o = t - n; s < t; s += n)
    i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
  return i;
}
class In {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return In.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    Ju(e), ju(n, e);
    let o = e.length;
    t.forEach(Ju);
    for (let c = 0; c < t.length; c++)
      i.push(o), o += t[c].length, ju(n, t[c]);
    const a = bv.triangulate(n, i);
    for (let c = 0; c < a.length; c += 3)
      s.push(a.slice(c, c + 3));
    return s;
  }
}
function Ju(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function ju(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class oo extends Ye {
  constructor(e = new es([new J(0.5, 0.5), new J(-0.5, 0.5), new J(-0.5, -0.5), new J(0.5, -0.5)]), t = {}) {
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
      const p = t.extrudePath, v = t.UVGenerator !== void 0 ? t.UVGenerator : Vv;
      let x, y = !1, S, E, b, L;
      p && (x = p.getSpacedPoints(h), y = !0, d = !1, S = p.computeFrenetFrames(h, !1), E = new w(), b = new w(), L = new w()), d || (g = 0, f = 0, m = 0, _ = 0);
      const M = a.extractPoints(l);
      let A = M.shape;
      const z = M.holes;
      if (!In.isClockWise(A)) {
        A = A.reverse();
        for (let P = 0, ae = z.length; P < ae; P++) {
          const Z = z[P];
          In.isClockWise(Z) && (z[P] = Z.reverse());
        }
      }
      const O = In.triangulateShape(A, z), N = A;
      for (let P = 0, ae = z.length; P < ae; P++) {
        const Z = z[P];
        A = A.concat(Z);
      }
      function H(P, ae, Z) {
        return ae || console.error("THREE.ExtrudeGeometry: vec does not exist"), P.clone().addScaledVector(ae, Z);
      }
      const j = A.length, q = O.length;
      function K(P, ae, Z) {
        let re, ee, Ee;
        const ge = P.x - ae.x, ye = P.y - ae.y, ze = Z.x - P.x, Ke = Z.y - P.y, pt = ge * ge + ye * ye, C = ge * Ke - ye * ze;
        if (Math.abs(C) > Number.EPSILON) {
          const T = Math.sqrt(pt), B = Math.sqrt(ze * ze + Ke * Ke), ie = ae.x - ye / T, te = ae.y + ge / T, se = Z.x - Ke / B, Se = Z.y + ze / B, oe = ((se - ie) * Ke - (Se - te) * ze) / (ge * Ke - ye * ze);
          re = ie + ge * oe - P.x, ee = te + ye * oe - P.y;
          const k = re * re + ee * ee;
          if (k <= 2)
            return new J(re, ee);
          Ee = Math.sqrt(k / 2);
        } else {
          let T = !1;
          ge > Number.EPSILON ? ze > Number.EPSILON && (T = !0) : ge < -Number.EPSILON ? ze < -Number.EPSILON && (T = !0) : Math.sign(ye) === Math.sign(Ke) && (T = !0), T ? (re = -ye, ee = ge, Ee = Math.sqrt(pt)) : (re = ge, ee = ye, Ee = Math.sqrt(pt / 2));
        }
        return new J(re / Ee, ee / Ee);
      }
      const ne = [];
      for (let P = 0, ae = N.length, Z = ae - 1, re = P + 1; P < ae; P++, Z++, re++)
        Z === ae && (Z = 0), re === ae && (re = 0), ne[P] = K(N[P], N[Z], N[re]);
      const Q = [];
      let F, G = ne.concat();
      for (let P = 0, ae = z.length; P < ae; P++) {
        const Z = z[P];
        F = [];
        for (let re = 0, ee = Z.length, Ee = ee - 1, ge = re + 1; re < ee; re++, Ee++, ge++)
          Ee === ee && (Ee = 0), ge === ee && (ge = 0), F[re] = K(Z[re], Z[Ee], Z[ge]);
        Q.push(F), G = G.concat(F);
      }
      for (let P = 0; P < g; P++) {
        const ae = P / g, Z = f * Math.cos(ae * Math.PI / 2), re = m * Math.sin(ae * Math.PI / 2) + _;
        for (let ee = 0, Ee = N.length; ee < Ee; ee++) {
          const ge = H(N[ee], ne[ee], re);
          Ae(ge.x, ge.y, -Z);
        }
        for (let ee = 0, Ee = z.length; ee < Ee; ee++) {
          const ge = z[ee];
          F = Q[ee];
          for (let ye = 0, ze = ge.length; ye < ze; ye++) {
            const Ke = H(ge[ye], F[ye], re);
            Ae(Ke.x, Ke.y, -Z);
          }
        }
      }
      const ue = m + _;
      for (let P = 0; P < j; P++) {
        const ae = d ? H(A[P], G[P], ue) : A[P];
        y ? (b.copy(S.normals[0]).multiplyScalar(ae.x), E.copy(S.binormals[0]).multiplyScalar(ae.y), L.copy(x[0]).add(b).add(E), Ae(L.x, L.y, L.z)) : Ae(ae.x, ae.y, 0);
      }
      for (let P = 1; P <= h; P++)
        for (let ae = 0; ae < j; ae++) {
          const Z = d ? H(A[ae], G[ae], ue) : A[ae];
          y ? (b.copy(S.normals[P]).multiplyScalar(Z.x), E.copy(S.binormals[P]).multiplyScalar(Z.y), L.copy(x[P]).add(b).add(E), Ae(L.x, L.y, L.z)) : Ae(Z.x, Z.y, u / h * P);
        }
      for (let P = g - 1; P >= 0; P--) {
        const ae = P / g, Z = f * Math.cos(ae * Math.PI / 2), re = m * Math.sin(ae * Math.PI / 2) + _;
        for (let ee = 0, Ee = N.length; ee < Ee; ee++) {
          const ge = H(N[ee], ne[ee], re);
          Ae(ge.x, ge.y, u + Z);
        }
        for (let ee = 0, Ee = z.length; ee < Ee; ee++) {
          const ge = z[ee];
          F = Q[ee];
          for (let ye = 0, ze = ge.length; ye < ze; ye++) {
            const Ke = H(ge[ye], F[ye], re);
            y ? Ae(Ke.x, Ke.y + x[h - 1].y, x[h - 1].x + Z) : Ae(Ke.x, Ke.y, u + Z);
          }
        }
      }
      fe(), me();
      function fe() {
        const P = i.length / 3;
        if (d) {
          let ae = 0, Z = j * ae;
          for (let re = 0; re < q; re++) {
            const ee = O[re];
            we(ee[2] + Z, ee[1] + Z, ee[0] + Z);
          }
          ae = h + g * 2, Z = j * ae;
          for (let re = 0; re < q; re++) {
            const ee = O[re];
            we(ee[0] + Z, ee[1] + Z, ee[2] + Z);
          }
        } else {
          for (let ae = 0; ae < q; ae++) {
            const Z = O[ae];
            we(Z[2], Z[1], Z[0]);
          }
          for (let ae = 0; ae < q; ae++) {
            const Z = O[ae];
            we(Z[0] + j * h, Z[1] + j * h, Z[2] + j * h);
          }
        }
        n.addGroup(P, i.length / 3 - P, 0);
      }
      function me() {
        const P = i.length / 3;
        let ae = 0;
        be(N, ae), ae += N.length;
        for (let Z = 0, re = z.length; Z < re; Z++) {
          const ee = z[Z];
          be(ee, ae), ae += ee.length;
        }
        n.addGroup(P, i.length / 3 - P, 1);
      }
      function be(P, ae) {
        let Z = P.length;
        for (; --Z >= 0; ) {
          const re = Z;
          let ee = Z - 1;
          ee < 0 && (ee = P.length - 1);
          for (let Ee = 0, ge = h + g * 2; Ee < ge; Ee++) {
            const ye = j * Ee, ze = j * (Ee + 1), Ke = ae + re + ye, pt = ae + ee + ye, C = ae + ee + ze, T = ae + re + ze;
            nt(Ke, pt, C, T);
          }
        }
      }
      function Ae(P, ae, Z) {
        c.push(P), c.push(ae), c.push(Z);
      }
      function we(P, ae, Z) {
        lt(P), lt(ae), lt(Z);
        const re = i.length / 3, ee = v.generateTopUV(n, i, re - 3, re - 2, re - 1);
        Ie(ee[0]), Ie(ee[1]), Ie(ee[2]);
      }
      function nt(P, ae, Z, re) {
        lt(P), lt(ae), lt(re), lt(ae), lt(Z), lt(re);
        const ee = i.length / 3, Ee = v.generateSideWallUV(n, i, ee - 6, ee - 3, ee - 2, ee - 1);
        Ie(Ee[0]), Ie(Ee[1]), Ie(Ee[3]), Ie(Ee[1]), Ie(Ee[2]), Ie(Ee[3]);
      }
      function lt(P) {
        i.push(c[P * 3 + 0]), i.push(c[P * 3 + 1]), i.push(c[P * 3 + 2]);
      }
      function Ie(P) {
        s.push(P.x), s.push(P.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return Gv(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, o = e.shapes.length; s < o; s++) {
      const a = t[e.shapes[s]];
      n.push(a);
    }
    const i = e.options.extrudePath;
    return i !== void 0 && (e.options.extrudePath = new Sh[i.type]().fromJSON(i)), new oo(n, e.options);
  }
}
const Vv = {
  generateTopUV: function(r, e, t, n, i) {
    const s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], c = e[n * 3 + 1], l = e[i * 3], h = e[i * 3 + 1];
    return [
      new J(s, o),
      new J(a, c),
      new J(l, h)
    ];
  },
  generateSideWallUV: function(r, e, t, n, i, s) {
    const o = e[t * 3], a = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], m = e[i * 3 + 2], _ = e[s * 3], g = e[s * 3 + 1], p = e[s * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - l) ? [
      new J(o, 1 - c),
      new J(l, 1 - u),
      new J(d, 1 - m),
      new J(_, 1 - p)
    ] : [
      new J(a, 1 - c),
      new J(h, 1 - u),
      new J(f, 1 - m),
      new J(g, 1 - p)
    ];
  }
};
function Gv(r, e, t) {
  if (t.shapes = [], Array.isArray(r))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(r.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Ga extends Ai {
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
    return new Ga(e.radius, e.detail);
  }
}
class ao extends Ai {
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
    return new ao(e.radius, e.detail);
  }
}
class Wa extends Ye {
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
    const d = (t - e) / i, f = new w(), m = new J();
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
    return new Wa(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class Xa extends Ye {
  constructor(e = new es([new J(0, 0.5), new J(-0.5, -0.5), new J(0.5, -0.5)]), t = 12) {
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
      In.isClockWise(f) === !1 && (f = f.reverse());
      for (let g = 0, p = m.length; g < p; g++) {
        const v = m[g];
        In.isClockWise(v) === !0 && (m[g] = v.reverse());
      }
      const _ = In.triangulateShape(f, m);
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
    return Wv(t, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let i = 0, s = e.shapes.length; i < s; i++) {
      const o = t[e.shapes[i]];
      n.push(o);
    }
    return new Xa(n, e.curveSegments);
  }
}
function Wv(r, e) {
  if (e.shapes = [], Array.isArray(r))
    for (let t = 0, n = r.length; t < n; t++) {
      const i = r[t];
      e.shapes.push(i.uuid);
    }
  else
    e.shapes.push(r.uuid);
  return e;
}
class co extends Ye {
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
    return new co(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Ya extends Ai {
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
    return new Ya(e.radius, e.detail);
  }
}
class qa extends Ye {
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
    return new qa(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class $a extends Ye {
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
        const E = S / i * Math.PI * 2, b = -t * Math.cos(E), L = t * Math.sin(E);
        u.x = f.x + (b * p.x + L * _.x), u.y = f.y + (b * p.y + L * _.y), u.z = f.z + (b * p.z + L * _.z), c.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), l.push(d.x, d.y, d.z), h.push(x / n), h.push(S / i);
      }
    }
    for (let x = 1; x <= n; x++)
      for (let y = 1; y <= i; y++) {
        const S = (i + 1) * (x - 1) + (y - 1), E = (i + 1) * x + (y - 1), b = (i + 1) * x + y, L = (i + 1) * (x - 1) + y;
        a.push(S, E, L), a.push(E, b, L);
      }
    this.setIndex(a), this.setAttribute("position", new xe(c, 3)), this.setAttribute("normal", new xe(l, 3)), this.setAttribute("uv", new xe(h, 2));
    function v(x, y, S, E, b) {
      const L = Math.cos(x), M = Math.sin(x), A = S / y * x, z = Math.cos(A);
      b.x = E * (2 + z) * 0.5 * L, b.y = E * (2 + z) * M * 0.5, b.z = E * Math.sin(A) * 0.5;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new $a(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
  }
}
class Za extends Ye {
  constructor(e = new vh(new w(-1, -1, 0), new w(-1, 1, 0), new w(1, 1, 0)), t = 64, n = 1, i = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: e,
      tubularSegments: t,
      radius: n,
      radialSegments: i,
      closed: s
    };
    const o = e.computeFrenetFrames(t, s);
    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
    const a = new w(), c = new w(), l = new J();
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
        const b = E / i * Math.PI * 2, L = Math.sin(b), M = -Math.cos(b);
        c.x = M * y.x + L * S.x, c.y = M * y.y + L * S.y, c.z = M * y.z + L * S.z, c.normalize(), d.push(c.x, c.y, c.z), a.x = h.x + n * c.x, a.y = h.y + n * c.y, a.z = h.z + n * c.z, u.push(a.x, a.y, a.z);
      }
    }
    function p() {
      for (let x = 1; x <= t; x++)
        for (let y = 1; y <= i; y++) {
          const S = (i + 1) * (x - 1) + (y - 1), E = (i + 1) * x + (y - 1), b = (i + 1) * x + y, L = (i + 1) * (x - 1) + y;
          m.push(S, E, L), m.push(E, b, L);
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
    return new Za(
      new Sh[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
class vp extends Ye {
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
              i.fromBufferAttribute(o, p), s.fromBufferAttribute(o, v), Qu(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
            }
        }
      } else {
        const o = e.attributes.position;
        for (let a = 0, c = o.count / 3; a < c; a++)
          for (let l = 0; l < 3; l++) {
            const h = 3 * a + l, u = 3 * a + (l + 1) % 3;
            i.fromBufferAttribute(o, h), s.fromBufferAttribute(o, u), Qu(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
          }
      }
      this.setAttribute("position", new xe(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function Qu(r, e, t) {
  const n = `${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;
  return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n), t.add(i), !0);
}
var ed = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BoxGeometry: bi,
  CapsuleGeometry: Ba,
  CircleGeometry: za,
  ConeGeometry: Ha,
  CylinderGeometry: lr,
  DodecahedronGeometry: ka,
  EdgesGeometry: gp,
  ExtrudeGeometry: oo,
  IcosahedronGeometry: Ga,
  LatheGeometry: ro,
  OctahedronGeometry: ao,
  PlaneGeometry: to,
  PolyhedronGeometry: Ai,
  RingGeometry: Wa,
  ShapeGeometry: Xa,
  SphereGeometry: co,
  TetrahedronGeometry: Ya,
  TorusGeometry: qa,
  TorusKnotGeometry: $a,
  TubeGeometry: Za,
  WireframeGeometry: vp
});
class Mp extends wt {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new he(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class Sp extends Dn {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class cs extends wt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new he(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Fn extends cs {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new J(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
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
class Ep extends wt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new he(16777215), this.specular = new he(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = jr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Tp extends wt {
  constructor(e) {
    super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new he(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
class bp extends wt {
  constructor(e) {
    super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class Ap extends wt {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new he(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new he(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = jr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class wp extends wt {
  constructor(e) {
    super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new he(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Rp extends Bt {
  constructor(e) {
    super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
  }
}
function an(r, e, t) {
  return Eh(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t);
}
function Ji(r, e, t) {
  return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function Eh(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Cp(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function Dl(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, o = 0; o !== n; ++s) {
    const a = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[o++] = r[a + c];
  }
  return i;
}
function Th(r, e, t, n) {
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
function Xv(r, e, t, n, i = 30) {
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
    u.length !== 0 && (l.times = Ji(u, l.times.constructor), l.values = Ji(d, l.values.constructor), o.push(l));
  }
  s.tracks = o;
  let a = 1 / 0;
  for (let c = 0; c < s.tracks.length; ++c)
    a > s.tracks[c].times[0] && (a = s.tracks[c].times[0]);
  for (let c = 0; c < s.tracks.length; ++c)
    s.tracks[c].shift(-1 * a);
  return s.resetDuration(), s;
}
function Yv(r, e = 0, t = r, n = 30) {
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
      _ = an(a.values, p, v);
    } else if (s >= a.times[m]) {
      const p = m * u + h, v = p + u - h;
      _ = an(a.values, p, v);
    } else {
      const p = a.createInterpolant(), v = h, x = u - h;
      p.evaluate(s), _ = an(p.resultBuffer, v, x);
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
  return r.blendMode = jl, r;
}
const qv = {
  arraySlice: an,
  convertArray: Ji,
  isTypedArray: Eh,
  getKeyframeOrder: Cp,
  sortedArray: Dl,
  flattenJSON: Th,
  subclip: Xv,
  makeClipAdditive: Yv
};
class hr {
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
class Lp extends hr {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: $i,
      endingEnd: $i
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, o = e + 1, a = i[s], c = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case Zi:
          s = e, a = 2 * t - n;
          break;
        case Br:
          s = i.length - 2, a = t + i[s] - i[s + 1];
          break;
        default:
          s = e, a = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Zi:
          o = e, c = 2 * n - t;
          break;
        case Br:
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
class bh extends hr {
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
class Pp extends hr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Tn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Ji(t, this.TimeBufferType), this.values = Ji(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Ji(e.times, Array),
        values: Ji(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Pp(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new bh(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Lp(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Zs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case ns:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case la:
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
        return Zs;
      case this.InterpolantFactoryMethodLinear:
        return ns;
      case this.InterpolantFactoryMethodSmooth:
        return la;
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
      this.times = an(n, s, o), this.values = an(this.values, s * a, o * a);
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
    if (i !== void 0 && Eh(i))
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
    const e = an(this.times), t = an(this.values), n = this.getValueSize(), i = this.getInterpolation() === la, s = e.length - 1;
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
    return o !== e.length ? (this.times = an(e, 0, o), this.values = an(t, 0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = an(this.times, 0), t = an(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Tn.prototype.TimeBufferType = Float32Array;
Tn.prototype.ValueBufferType = Float32Array;
Tn.prototype.DefaultInterpolation = ns;
class ls extends Tn {
}
ls.prototype.ValueTypeName = "bool";
ls.prototype.ValueBufferType = Array;
ls.prototype.DefaultInterpolation = Zs;
ls.prototype.InterpolantFactoryMethodLinear = void 0;
ls.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ah extends Tn {
}
Ah.prototype.ValueTypeName = "color";
class ss extends Tn {
}
ss.prototype.ValueTypeName = "number";
class Ip extends hr {
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
class Ei extends Tn {
  InterpolantFactoryMethodLinear(e) {
    return new Ip(this.times, this.values, this.getValueSize(), e);
  }
}
Ei.prototype.ValueTypeName = "quaternion";
Ei.prototype.DefaultInterpolation = ns;
Ei.prototype.InterpolantFactoryMethodSmooth = void 0;
class hs extends Tn {
}
hs.prototype.ValueTypeName = "string";
hs.prototype.ValueBufferType = Array;
hs.prototype.DefaultInterpolation = Zs;
hs.prototype.InterpolantFactoryMethodLinear = void 0;
hs.prototype.InterpolantFactoryMethodSmooth = void 0;
class rs extends Tn {
}
rs.prototype.ValueTypeName = "vector";
class Qs {
  constructor(e, t = -1, n, i = ba) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = en(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(Zv(n[o]).scale(i));
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
      t.push(Tn.toJSON(n[s]));
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
      const h = Cp(c);
      c = Dl(c, 1, h), l = Dl(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), o.push(
        new ss(
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
        Th(f, g, p, m), g.length !== 0 && _.push(new u(d, g, p));
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
            i.push(new ss(".morphTargetInfluence[" + _ + "]", g, p));
          }
          c = f.length * o;
        } else {
          const f = ".bones[" + t[u].name + "]";
          n(
            rs,
            f + ".position",
            d,
            "pos",
            i
          ), n(
            Ei,
            f + ".quaternion",
            d,
            "rot",
            i
          ), n(
            rs,
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
function $v(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ss;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return rs;
    case "color":
      return Ah;
    case "quaternion":
      return Ei;
    case "bool":
    case "boolean":
      return ls;
    case "string":
      return hs;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Zv(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = $v(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    Th(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const os = {
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
class wh {
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
const Up = /* @__PURE__ */ new wh();
class zt {
  constructor(e) {
    this.manager = e !== void 0 ? e : Up, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
const Yn = {};
class Kv extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class un extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = os.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Yn[e] !== void 0) {
      Yn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Yn[e] = [], Yn[e].push({
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
        const h = Yn[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), f = d ? parseInt(d) : 0, m = f !== 0;
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
                  for (let E = 0, b = h.length; E < b; E++) {
                    const L = h[E];
                    L.onProgress && L.onProgress(S);
                  }
                  p.enqueue(y), v();
                }
              });
            }
          }
        });
        return new Response(g);
      } else
        throw new Kv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
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
      os.add(e, l);
      const h = Yn[e];
      delete Yn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(l);
      }
    }).catch((l) => {
      const h = Yn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Yn[e];
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
class Jv extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new un(this.manager);
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
      const i = Qs.parse(e[n]);
      t.push(i);
    }
    return t;
  }
}
class jv extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = [], a = new Da(), c = new un(this.manager);
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
        }, l += 1, l === 6 && (f.mipmapCount === 1 && (a.minFilter = ut), a.image = o, a.format = f.format, a.needsUpdate = !0, t && t(a));
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
        d.mipmapCount === 1 && (a.minFilter = ut), a.format = d.format, a.needsUpdate = !0, t && t(a);
      }, n, i);
    return a;
  }
}
class Yr extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = os.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = kr("img");
    function c() {
      h(), os.add(e, this), t && t(this), s.manager.itemEnd(e);
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
class Qv extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new eo();
    s.colorSpace = Ue;
    const o = new Yr(this.manager);
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
class eM extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new Ws(), a = new un(this.manager);
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
      l.image !== void 0 ? o.image = l.image : l.data !== void 0 && (o.image.width = l.width, o.image.height = l.height, o.image.data = l.data), o.wrapS = l.wrapS !== void 0 ? l.wrapS : Ot, o.wrapT = l.wrapT !== void 0 ? l.wrapT : Ot, o.magFilter = l.magFilter !== void 0 ? l.magFilter : ut, o.minFilter = l.minFilter !== void 0 ? l.minFilter : ut, o.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 ? o.colorSpace = l.colorSpace : l.encoding !== void 0 && (o.encoding = l.encoding), l.flipY !== void 0 && (o.flipY = l.flipY), l.format !== void 0 && (o.format = l.format), l.type !== void 0 && (o.type = l.type), l.mipmaps !== void 0 && (o.mipmaps = l.mipmaps, o.minFilter = On), l.mipmapCount === 1 && (o.minFilter = ut), l.generateMipmaps !== void 0 && (o.generateMipmaps = l.generateMipmaps), o.needsUpdate = !0, t && t(o, l);
    }, n, i), o;
  }
}
class Op extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ft(), o = new Yr(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class wi extends He {
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
class Dp extends wi {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(He.DEFAULT_UP), this.updateMatrix(), this.groundColor = new he(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Uc = /* @__PURE__ */ new De(), td = /* @__PURE__ */ new w(), nd = /* @__PURE__ */ new w();
class Rh {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new J(512, 512), this.map = null, this.mapPass = null, this.matrix = new De(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ca(), this._frameExtents = new J(1, 1), this._viewportCount = 1, this._viewports = [
      new rt(0, 0, 1, 1)
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
    td.setFromMatrixPosition(e.matrixWorld), t.position.copy(td), nd.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(nd), t.updateMatrixWorld(), Uc.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Uc), n.set(
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
    ), n.multiply(Uc);
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
class tM extends Rh {
  constructor() {
    super(new At(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Ks * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Ch extends wi {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(He.DEFAULT_UP), this.updateMatrix(), this.target = new He(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new tM();
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
const id = /* @__PURE__ */ new De(), Mr = /* @__PURE__ */ new w(), Oc = /* @__PURE__ */ new w();
class nM extends Rh {
  constructor() {
    super(new At(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new J(4, 2), this._viewportCount = 6, this._viewports = [
      new rt(2, 1, 1, 1),
      new rt(0, 1, 1, 1),
      new rt(3, 1, 1, 1),
      new rt(1, 1, 1, 1),
      new rt(3, 0, 1, 1),
      new rt(1, 0, 1, 1)
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
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Mr.setFromMatrixPosition(e.matrixWorld), n.position.copy(Mr), Oc.copy(n.position), Oc.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Oc), n.updateMatrixWorld(), i.makeTranslation(-Mr.x, -Mr.y, -Mr.z), id.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(id);
  }
}
class Lh extends wi {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new nM();
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
class iM extends Rh {
  constructor() {
    super(new no(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Ph extends wi {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(He.DEFAULT_UP), this.updateMatrix(), this.target = new He(), this.shadow = new iM();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Ih extends wi {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Np extends wi {
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
class Fp {
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
class Ka extends wi {
  constructor(e = new Fp(), t = 1) {
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
class Ja extends zt {
  constructor(e) {
    super(e), this.textures = {};
  }
  load(e, t, n, i) {
    const s = this, o = new un(s.manager);
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
    const i = Ja.createMaterialFromType(e.type);
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
            i.uniforms[s].value = new J().fromArray(o.value);
            break;
          case "v3":
            i.uniforms[s].value = new w().fromArray(o.value);
            break;
          case "v4":
            i.uniforms[s].value = new rt().fromArray(o.value);
            break;
          case "m3":
            i.uniforms[s].value = new Xe().fromArray(o.value);
            break;
          case "m4":
            i.uniforms[s].value = new De().fromArray(o.value);
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
      Array.isArray(s) === !1 && (s = [s, s]), i.normalScale = new J().fromArray(s);
    }
    return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new J().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (i.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.anisotropyMap !== void 0 && (i.anisotropyMap = n(e.anisotropyMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i;
  }
  setTextures(e) {
    return this.textures = e, this;
  }
  static createMaterialFromType(e) {
    const t = {
      ShadowMaterial: Mp,
      SpriteMaterial: dh,
      RawShaderMaterial: Sp,
      ShaderMaterial: Dn,
      PointsMaterial: Oa,
      MeshPhysicalMaterial: Fn,
      MeshStandardMaterial: cs,
      MeshPhongMaterial: Ep,
      MeshToonMaterial: Tp,
      MeshNormalMaterial: bp,
      MeshLambertMaterial: Ap,
      MeshDepthMaterial: ch,
      MeshDistanceMaterial: lh,
      MeshBasicMaterial: Qt,
      MeshMatcapMaterial: wp,
      LineDashedMaterial: Rp,
      LineBasicMaterial: Bt,
      Material: wt
    };
    return new t[e]();
  }
}
class er {
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
class Bp extends Ye {
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
class zp extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new un(s.manager);
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
      const g = f.interleavedBuffers[m], p = s(f, g.buffer), v = zs(g.type, p), x = new io(v, g.stride);
      return x.uuid = g.uuid, t[m] = x, x;
    }
    function s(f, m) {
      if (n[m] !== void 0)
        return n[m];
      const g = f.arrayBuffers[m], p = new Uint32Array(g).buffer;
      return n[m] = p, p;
    }
    const o = e.isInstancedBufferGeometry ? new Bp() : new Ye(), a = e.data.index;
    if (a !== void 0) {
      const f = zs(a.type, a.array);
      o.setIndex(new st(f, 1));
    }
    const c = e.data.attributes;
    for (const f in c) {
      const m = c[f];
      let _;
      if (m.isInterleavedBufferAttribute) {
        const g = i(e.data, m.data);
        _ = new Si(g, m.itemSize, m.offset, m.normalized);
      } else {
        const g = zs(m.type, m.array), p = m.isInstancedBufferAttribute ? js : st;
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
            x = new Si(y, v.itemSize, v.offset, v.normalized);
          } else {
            const y = zs(v.type, v.array);
            x = new st(y, v.itemSize, v.normalized);
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
      d.center !== void 0 && f.fromArray(d.center), o.boundingSphere = new dn(f, d.radius);
    }
    return e.name && (o.name = e.name), e.userData && (o.userData = e.userData), o;
  }
}
class sM extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = this.path === "" ? er.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || o;
    const a = new un(this.manager);
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
    const n = this, i = this.path === "" ? er.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || i;
    const s = new un(this.manager);
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
        const s = new es().fromJSON(e[n]);
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
        const a = new so().fromJSON(e[s], i);
        n[a.uuid] = a;
      }
    return n;
  }
  parseGeometries(e, t) {
    const n = {};
    if (e !== void 0) {
      const i = new zp();
      for (let s = 0, o = e.length; s < o; s++) {
        let a;
        const c = e[s];
        switch (c.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            a = i.parse(c);
            break;
          default:
            c.type in ed ? a = ed[c.type].fromJSON(c, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`);
        }
        a.uuid = c.uuid, c.name !== void 0 && (a.name = c.name), c.userData !== void 0 && (a.userData = c.userData), n[c.uuid] = a;
      }
    }
    return n;
  }
  parseMaterials(e, t) {
    const n = {}, i = {};
    if (e !== void 0) {
      const s = new Ja();
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
        const i = e[n], s = Qs.parse(i);
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
          data: zs(c.type, c.data),
          width: c.width,
          height: c.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      const c = new wh(t);
      s = new Yr(c), s.setCrossOrigin(this.crossOrigin);
      for (let l = 0, h = e.length; l < h; l++) {
        const u = e[l], d = u.url;
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m], p = a(g);
            p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new Ws(p.data, p.width, p.height)));
          }
          i[u.uuid] = new Ki(f);
        } else {
          const f = a(u.url);
          i[u.uuid] = new Ki(f);
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
          data: zs(o.type, o.data),
          width: o.width,
          height: o.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      i = new Yr(this.manager), i.setCrossOrigin(this.crossOrigin);
      for (let o = 0, a = e.length; o < a; o++) {
        const c = e[o], l = c.url;
        if (Array.isArray(l)) {
          const h = [];
          for (let u = 0, d = l.length; u < d; u++) {
            const f = l[u], m = await s(f);
            m !== null && (m instanceof HTMLImageElement ? h.push(m) : h.push(new Ws(m.data, m.width, m.height)));
          }
          n[c.uuid] = new Ki(h);
        } else {
          const h = await s(c.url);
          n[c.uuid] = new Ki(h);
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
        Array.isArray(l) ? (h = new eo(), l.length === 6 && (h.needsUpdate = !0)) : (l && l.data ? h = new Ws() : h = new ft(), l && (h.needsUpdate = !0)), h.source = c, h.uuid = a.uuid, a.name !== void 0 && (h.name = a.name), a.mapping !== void 0 && (h.mapping = n(a.mapping, rM)), a.channel !== void 0 && (h.channel = a.channel), a.offset !== void 0 && h.offset.fromArray(a.offset), a.repeat !== void 0 && h.repeat.fromArray(a.repeat), a.center !== void 0 && h.center.fromArray(a.center), a.rotation !== void 0 && (h.rotation = a.rotation), a.wrap !== void 0 && (h.wrapS = n(a.wrap[0], sd), h.wrapT = n(a.wrap[1], sd)), a.format !== void 0 && (h.format = a.format), a.internalFormat !== void 0 && (h.internalFormat = a.internalFormat), a.type !== void 0 && (h.type = a.type), a.colorSpace !== void 0 && (h.colorSpace = a.colorSpace), a.encoding !== void 0 && (h.encoding = a.encoding), a.minFilter !== void 0 && (h.minFilter = n(a.minFilter, rd)), a.magFilter !== void 0 && (h.magFilter = n(a.magFilter, rd)), a.anisotropy !== void 0 && (h.anisotropy = a.anisotropy), a.flipY !== void 0 && (h.flipY = a.flipY), a.generateMipmaps !== void 0 && (h.generateMipmaps = a.generateMipmaps), a.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (h.unpackAlignment = a.unpackAlignment), a.compareFunction !== void 0 && (h.compareFunction = a.compareFunction), a.userData !== void 0 && (h.userData = a.userData), i[a.uuid] = h;
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
        o = new uh(), e.background !== void 0 && (Number.isInteger(e.background) ? o.background = new he(e.background) : o.background = l(e.background)), e.environment !== void 0 && (o.environment = l(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? o.fog = new Ia(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (o.fog = new Pa(e.fog.color, e.fog.density))), e.backgroundBlurriness !== void 0 && (o.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (o.backgroundIntensity = e.backgroundIntensity);
        break;
      case "PerspectiveCamera":
        o = new At(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (o.focus = e.focus), e.zoom !== void 0 && (o.zoom = e.zoom), e.filmGauge !== void 0 && (o.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (o.filmOffset = e.filmOffset), e.view !== void 0 && (o.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        o = new no(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (o.zoom = e.zoom), e.view !== void 0 && (o.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        o = new Ih(e.color, e.intensity);
        break;
      case "DirectionalLight":
        o = new Ph(e.color, e.intensity);
        break;
      case "PointLight":
        o = new Lh(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        o = new Np(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        o = new Ch(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        o = new Dp(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        o = new Ka().fromJSON(e);
        break;
      case "SkinnedMesh":
        h = a(e.geometry), u = c(e.material), o = new fh(h, u), e.bindMode !== void 0 && (o.bindMode = e.bindMode), e.bindMatrix !== void 0 && o.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (o.skeleton = e.skeleton);
        break;
      case "Mesh":
        h = a(e.geometry), u = c(e.material), o = new bt(h, u);
        break;
      case "InstancedMesh":
        h = a(e.geometry), u = c(e.material);
        const d = e.count, f = e.instanceMatrix, m = e.instanceColor;
        o = new ph(h, u, d), o.instanceMatrix = new js(new Float32Array(f.array), 16), m !== void 0 && (o.instanceColor = new js(new Float32Array(m.array), m.itemSize));
        break;
      case "LOD":
        o = new hp();
        break;
      case "Line":
        o = new ti(a(e.geometry), c(e.material));
        break;
      case "LineLoop":
        o = new mh(a(e.geometry), c(e.material));
        break;
      case "LineSegments":
        o = new Sn(a(e.geometry), c(e.material));
        break;
      case "PointCloud":
      case "Points":
        o = new gh(a(e.geometry), c(e.material));
        break;
      case "Sprite":
        o = new lp(c(e.material));
        break;
      case "Group":
        o = new Zn();
        break;
      case "Bone":
        o = new Ua();
        break;
      default:
        o = new He();
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
const rM = {
  UVMapping: Sa,
  CubeReflectionMapping: ei,
  CubeRefractionMapping: vi,
  EquirectangularReflectionMapping: Dr,
  EquirectangularRefractionMapping: Nr,
  CubeUVReflectionMapping: or
}, sd = {
  RepeatWrapping: Mi,
  ClampToEdgeWrapping: Ot,
  MirroredRepeatWrapping: qs
}, rd = {
  NearestFilter: _t,
  NearestMipmapNearestFilter: Fr,
  NearestMipmapLinearFilter: Vs,
  LinearFilter: ut,
  LinearMipmapNearestFilter: Ea,
  LinearMipmapLinearFilter: On
};
class Hp extends zt {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = os.get(e);
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
      os.add(e, c), t && t(c), s.manager.itemEnd(e);
    }).catch(function(c) {
      i && i(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
let qo;
class Uh {
  static getContext() {
    return qo === void 0 && (qo = new (window.AudioContext || window.webkitAudioContext)()), qo;
  }
  static setContext(e) {
    qo = e;
  }
}
class oM extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new un(this.manager);
    o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(c) {
      try {
        const l = c.slice(0);
        Uh.getContext().decodeAudioData(l, function(u) {
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
class aM extends Ka {
  constructor(e, t, n = 1) {
    super(void 0, n), this.isHemisphereLightProbe = !0;
    const i = new he().set(e), s = new he().set(t), o = new w(i.r, i.g, i.b), a = new w(s.r, s.g, s.b), c = Math.sqrt(Math.PI), l = c * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c), this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l);
  }
}
class cM extends Ka {
  constructor(e, t = 1) {
    super(void 0, t), this.isAmbientLightProbe = !0;
    const n = new he().set(e);
    this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
const od = /* @__PURE__ */ new De(), ad = /* @__PURE__ */ new De(), Ni = /* @__PURE__ */ new De();
class lM {
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new At(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new At(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
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
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, Ni.copy(e.projectionMatrix);
      const i = t.eyeSep / 2, s = i * t.near / t.focus, o = t.near * Math.tan(Qi * t.fov * 0.5) / t.zoom;
      let a, c;
      ad.elements[12] = -i, od.elements[12] = i, a = -o * t.aspect + s, c = o * t.aspect + s, Ni.elements[0] = 2 * t.near / (c - a), Ni.elements[8] = (c + a) / (c - a), this.cameraL.projectionMatrix.copy(Ni), a = -o * t.aspect - s, c = o * t.aspect - s, Ni.elements[0] = 2 * t.near / (c - a), Ni.elements[8] = (c + a) / (c - a), this.cameraR.projectionMatrix.copy(Ni);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(ad), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(od);
  }
}
class Oh {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = cd(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = cd();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function cd() {
  return (typeof performance > "u" ? Date : performance).now();
}
const Fi = /* @__PURE__ */ new w(), ld = /* @__PURE__ */ new Ft(), hM = /* @__PURE__ */ new w(), Bi = /* @__PURE__ */ new w();
class uM extends He {
  constructor() {
    super(), this.type = "AudioListener", this.context = Uh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Oh();
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
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Fi, ld, hM), Bi.set(0, 0, -1).applyQuaternion(ld), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(Fi.x, i), t.positionY.linearRampToValueAtTime(Fi.y, i), t.positionZ.linearRampToValueAtTime(Fi.z, i), t.forwardX.linearRampToValueAtTime(Bi.x, i), t.forwardY.linearRampToValueAtTime(Bi.y, i), t.forwardZ.linearRampToValueAtTime(Bi.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else
      t.setPosition(Fi.x, Fi.y, Fi.z), t.setOrientation(Bi.x, Bi.y, Bi.z, n.x, n.y, n.z);
  }
}
class kp extends He {
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
const zi = /* @__PURE__ */ new w(), hd = /* @__PURE__ */ new Ft(), dM = /* @__PURE__ */ new w(), Hi = /* @__PURE__ */ new w();
class fM extends kp {
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
    this.matrixWorld.decompose(zi, hd, dM), Hi.set(0, 0, 1).applyQuaternion(hd);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(zi.x, n), t.positionY.linearRampToValueAtTime(zi.y, n), t.positionZ.linearRampToValueAtTime(zi.z, n), t.orientationX.linearRampToValueAtTime(Hi.x, n), t.orientationY.linearRampToValueAtTime(Hi.y, n), t.orientationZ.linearRampToValueAtTime(Hi.z, n);
    } else
      t.setPosition(zi.x, zi.y, zi.z), t.setOrientation(Hi.x, Hi.y, Hi.z);
  }
}
class pM {
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
class Vp {
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
const Dh = "\\[\\]\\.:\\/", mM = new RegExp("[" + Dh + "]", "g"), Nh = "[^" + Dh + "]", gM = "[^" + Dh.replace("\\.", "") + "]", _M = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Nh), yM = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", gM), xM = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Nh), vM = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Nh), MM = new RegExp(
  "^" + _M + yM + xM + vM + "$"
), SM = ["material", "materials", "bones", "map"];
class EM {
  constructor(e, t, n) {
    const i = n || je.parseTrackName(t);
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
class je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || je.parseTrackName(t), this.node = je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new je.Composite(e, t, n) : new je(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(mM, "");
  }
  static parseTrackName(e) {
    const t = MM.exec(e);
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
      SM.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
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
    if (e || (e = je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
je.Composite = EM;
je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
je.prototype.GetterByBindingType = [
  je.prototype._getValue_direct,
  je.prototype._getValue_array,
  je.prototype._getValue_arrayElement,
  je.prototype._getValue_toArray
];
je.prototype.SetterByBindingTypeAndVersioning = [
  [
    je.prototype._setValue_direct,
    je.prototype._setValue_direct_setNeedsUpdate,
    je.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    je.prototype._setValue_array,
    je.prototype._setValue_array_setNeedsUpdate,
    je.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    je.prototype._setValue_arrayElement,
    je.prototype._setValue_arrayElement_setNeedsUpdate,
    je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    je.prototype._setValue_fromArray,
    je.prototype._setValue_fromArray_setNeedsUpdate,
    je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class TM {
  constructor() {
    this.isAnimationObjectGroup = !0, this.uuid = en(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
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
          s[_].push(new je(d, n[_], i[_]));
      } else if (m < l) {
        a = e[m];
        const _ = --l, g = e[_];
        t[g.uuid] = m, e[m] = g, t[f] = _, e[_] = d;
        for (let p = 0, v = o; p !== v; ++p) {
          const x = s[p], y = x[_];
          let S = x[m];
          x[m] = y, S === void 0 && (S = new je(d, n[p], i[p])), x[_] = S;
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
      u[d] = new je(m, e, t);
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
class Gp {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, o = s.length, a = new Array(o), c = {
      endingStart: $i,
      endingEnd: $i
    };
    for (let l = 0; l !== o; ++l) {
      const h = s[l].createInterpolant(null);
      a[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Cf, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
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
        case jl:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(o), l[h].accumulateAdditive(a);
          break;
        case ba:
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
    const o = n === Lf;
    if (e === 0)
      return s === -1 ? i : o && (s & 1) === 1 ? t - i : i;
    if (n === Rf) {
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
    n ? (i.endingStart = Zi, i.endingEnd = Zi) : (e ? i.endingStart = this.zeroSlopeAtStart ? Zi : $i : i.endingStart = Br, t ? i.endingEnd = this.zeroSlopeAtEnd ? Zi : $i : i.endingEnd = Br);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let o = this._weightInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, c = o.sampleValues;
    return a[0] = s, c[0] = t, a[1] = s + e, c[1] = n, this;
  }
}
const bM = new Float32Array(1);
class AM extends ii {
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
        m = new Vp(
          je.create(n, f, _),
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
    return n === void 0 && (n = new bh(
      new Float32Array(2),
      new Float32Array(2),
      1,
      bM
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let o = typeof e == "string" ? Qs.findByName(i, e) : e;
    const a = o !== null ? o.uuid : e, c = this._actionsByClip[a];
    let l = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = ba), c !== void 0) {
      const u = c.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n)
        return u;
      l = c.knownActions[0], o === null && (o = l._clip);
    }
    if (o === null)
      return null;
    const h = new Gp(this, o, t, n);
    return this._bindAction(h, l), this._addInactiveAction(h, a, s), h;
  }
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? Qs.findByName(n, e) : e, o = s ? s.uuid : e, a = this._actionsByClip[o];
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
class Fh {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Fh(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
let wM = 0;
class RM extends ii {
  constructor() {
    super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: wM++ }), this.name = "", this.usage = zr, this.uniforms = [];
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
class CM extends io {
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
class LM {
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
class Wp {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new ar(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new wa(), this.params = {
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
    return Nl(e, this, n, t), n.sort(ud), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      Nl(e[i], this, n, t);
    return n.sort(ud), n;
  }
}
function ud(r, e) {
  return r.distance - e.distance;
}
function Nl(r, e, t, n) {
  if (r.layers.test(e.layers) && r.raycast(e, t), n === !0) {
    const i = r.children;
    for (let s = 0, o = i.length; s < o; s++)
      Nl(i[s], e, t, !0);
  }
}
class PM {
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
class IM {
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
const dd = /* @__PURE__ */ new J();
class UM {
  constructor(e = new J(1 / 0, 1 / 0), t = new J(-1 / 0, -1 / 0)) {
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
    const n = dd.copy(t).multiplyScalar(0.5);
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
    return this.clampPoint(e, dd).distanceTo(e);
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
const fd = /* @__PURE__ */ new w(), $o = /* @__PURE__ */ new w();
class OM {
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
    fd.subVectors(e, this.start), $o.subVectors(this.end, this.start);
    const n = $o.dot($o);
    let s = $o.dot(fd) / n;
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
const pd = /* @__PURE__ */ new w();
class DM extends He {
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
    this.cone = new Sn(n, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1);
    const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), pd.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(pd), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
const hi = /* @__PURE__ */ new w(), Zo = /* @__PURE__ */ new De(), Dc = /* @__PURE__ */ new De();
class NM extends Sn {
  constructor(e) {
    const t = Xp(e), n = new Ye(), i = [], s = [], o = new he(0, 0, 1), a = new he(0, 1, 0);
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
    Dc.copy(this.root.matrixWorld).invert();
    for (let s = 0, o = 0; s < t.length; s++) {
      const a = t[s];
      a.parent && a.parent.isBone && (Zo.multiplyMatrices(Dc, a.matrixWorld), hi.setFromMatrixPosition(Zo), i.setXYZ(o, hi.x, hi.y, hi.z), Zo.multiplyMatrices(Dc, a.parent.matrixWorld), hi.setFromMatrixPosition(Zo), i.setXYZ(o + 1, hi.x, hi.y, hi.z), o += 2);
    }
    n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function Xp(r) {
  const e = [];
  r.isBone === !0 && e.push(r);
  for (let t = 0; t < r.children.length; t++)
    e.push.apply(e, Xp(r.children[t]));
  return e;
}
class FM extends bt {
  constructor(e, t, n) {
    const i = new co(t, 4, 2), s = new Qt({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(i, s), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const BM = /* @__PURE__ */ new w(), md = /* @__PURE__ */ new he(), gd = /* @__PURE__ */ new he();
class zM extends He {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const i = new ao(t);
    i.rotateY(Math.PI * 0.5), this.material = new Qt({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const s = i.getAttribute("position"), o = new Float32Array(s.count * 3);
    i.setAttribute("color", new st(o, 3)), this.add(new bt(i, this.material)), this.update();
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
      md.copy(this.light.color), gd.copy(this.light.groundColor);
      for (let n = 0, i = t.count; n < i; n++) {
        const s = n < i / 2 ? md : gd;
        t.setXYZ(n, s.r, s.g, s.b);
      }
      t.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), e.lookAt(BM.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class HM extends Sn {
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
class kM extends Sn {
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
const _d = /* @__PURE__ */ new w(), Ko = /* @__PURE__ */ new w(), yd = /* @__PURE__ */ new w();
class VM extends He {
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
    this.lightPlane = new ti(i, s), this.add(this.lightPlane), i = new Ye(), i.setAttribute("position", new xe([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new ti(i, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), _d.setFromMatrixPosition(this.light.matrixWorld), Ko.setFromMatrixPosition(this.light.target.matrixWorld), yd.subVectors(Ko, _d), this.lightPlane.lookAt(Ko), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Ko), this.targetLine.scale.z = yd.length();
  }
}
const Jo = /* @__PURE__ */ new w(), gt = /* @__PURE__ */ new Ra();
class GM extends Sn {
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
  Jo.set(i, s, o).unproject(n);
  const a = e[r];
  if (a !== void 0) {
    const c = t.getAttribute("position");
    for (let l = 0, h = a.length; l < h; l++)
      c.setXYZ(a[l], Jo.x, Jo.y, Jo.z);
  }
}
const jo = /* @__PURE__ */ new Mn();
class WM extends Sn {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new Float32Array(8 * 3), s = new Ye();
    s.setIndex(new st(n, 1)), s.setAttribute("position", new st(i, 3)), super(s, new Bt({ color: t, toneMapped: !1 })), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
  }
  update(e) {
    if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && jo.setFromObject(this.object), jo.isEmpty())
      return;
    const t = jo.min, n = jo.max, i = this.geometry.attributes.position, s = i.array;
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
class XM extends Sn {
  constructor(e, t = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], s = new Ye();
    s.setIndex(new st(n, 1)), s.setAttribute("position", new xe(i, 3)), super(s, new Bt({ color: t, toneMapped: !1 })), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    const t = this.box;
    t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(e));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class YM extends ti {
  constructor(e, t = 1, n = 16776960) {
    const i = n, s = [1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], o = new Ye();
    o.setAttribute("position", new xe(s, 3)), o.computeBoundingSphere(), super(o, new Bt({ color: i, toneMapped: !1 })), this.type = "PlaneHelper", this.plane = e, this.size = t;
    const a = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], c = new Ye();
    c.setAttribute("position", new xe(a, 3)), c.computeBoundingSphere(), this.add(new bt(c, new Qt({ color: i, opacity: 0.2, transparent: !0, depthWrite: !1, toneMapped: !1 })));
  }
  updateMatrixWorld(e) {
    this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(e);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
}
const xd = /* @__PURE__ */ new w();
let Qo, Nc;
class qM extends He {
  constructor(e = new w(0, 0, 1), t = new w(0, 0, 0), n = 1, i = 16776960, s = n * 0.2, o = s * 0.2) {
    super(), this.type = "ArrowHelper", Qo === void 0 && (Qo = new Ye(), Qo.setAttribute("position", new xe([0, 0, 0, 0, 1, 0], 3)), Nc = new lr(0, 0.5, 1, 5, 1), Nc.translate(0, -0.5, 0)), this.position.copy(t), this.line = new ti(Qo, new Bt({ color: i, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new bt(Nc, new Qt({ color: i, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, s, o);
  }
  setDirection(e) {
    if (e.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      xd.set(e.z, 0, -e.x).normalize();
      const t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(xd, t);
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
class $M extends Sn {
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
class Yp {
  constructor() {
    this.type = "ShapePath", this.color = new he(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new Vr(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
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
        const S = p[x], E = new es();
        E.curves = S.curves, v.push(E);
      }
      return v;
    }
    function n(p, v) {
      const x = v.length;
      let y = !1;
      for (let S = x - 1, E = 0; E < x; S = E++) {
        let b = v[S], L = v[E], M = L.x - b.x, A = L.y - b.y;
        if (Math.abs(A) > Number.EPSILON) {
          if (A < 0 && (b = v[E], M = -M, L = v[S], A = -A), p.y < b.y || p.y > L.y)
            continue;
          if (p.y === b.y) {
            if (p.x === b.x)
              return !0;
          } else {
            const z = A * (p.x - b.x) - M * (p.y - b.y);
            if (z === 0)
              return !0;
            if (z < 0)
              continue;
            y = !y;
          }
        } else {
          if (p.y !== b.y)
            continue;
          if (L.x <= p.x && p.x <= b.x || b.x <= p.x && p.x <= L.x)
            return !0;
        }
      }
      return y;
    }
    const i = In.isClockWise, s = this.subPaths;
    if (s.length === 0)
      return [];
    let o, a, c;
    const l = [];
    if (s.length === 1)
      return a = s[0], c = new es(), c.curves = a.curves, l.push(c), l;
    let h = !i(s[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let f = [], m = 0, _;
    d[m] = void 0, f[m] = [];
    for (let p = 0, v = s.length; p < v; p++)
      a = s[p], _ = a.getPoints(), o = i(_), o = e ? !o : o, o ? (!h && d[m] && m++, d[m] = { s: new es(), p: _ }, d[m].s.curves = a.curves, h && m++, f[m] = []) : f[m].push({ h: a, p: _[0] });
    if (!d[0])
      return t(s);
    if (d.length > 1) {
      let p = !1, v = 0;
      for (let x = 0, y = d.length; x < y; x++)
        u[x] = [];
      for (let x = 0, y = d.length; x < y; x++) {
        const S = f[x];
        for (let E = 0; E < S.length; E++) {
          const b = S[E];
          let L = !0;
          for (let M = 0; M < d.length; M++)
            n(b.p, d[M].p) && (x !== M && v++, L ? (L = !1, u[M].push(b)) : p = !0);
          L && u[x].push(b);
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
  revision: Ma
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ma);
const ZM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACESFilmicToneMapping: Xl,
  AddEquation: Yi,
  AddOperation: pf,
  AdditiveAnimationBlendMode: jl,
  AdditiveBlending: el,
  AlphaFormat: Mf,
  AlwaysCompare: Gf,
  AlwaysDepth: af,
  AlwaysStencilFunc: Df,
  AmbientLight: Ih,
  AmbientLightProbe: cM,
  AnimationAction: Gp,
  AnimationClip: Qs,
  AnimationLoader: Jv,
  AnimationMixer: AM,
  AnimationObjectGroup: TM,
  AnimationUtils: qv,
  ArcCurve: up,
  ArrayCamera: rp,
  ArrowHelper: qM,
  Audio: kp,
  AudioAnalyser: pM,
  AudioContext: Uh,
  AudioListener: uM,
  AudioLoader: oM,
  AxesHelper: $M,
  BackSide: Wt,
  BasicDepthPacking: If,
  BasicShadowMap: fm,
  Bone: Ua,
  BooleanKeyframeTrack: ls,
  Box2: UM,
  Box3: Mn,
  Box3Helper: XM,
  BoxGeometry: bi,
  BoxHelper: WM,
  BufferAttribute: st,
  BufferGeometry: Ye,
  BufferGeometryLoader: zp,
  ByteType: xf,
  Cache: os,
  Camera: Ra,
  CameraHelper: GM,
  CanvasTexture: _v,
  CapsuleGeometry: Ba,
  CatmullRomCurve3: dp,
  CineonToneMapping: _f,
  CircleGeometry: za,
  ClampToEdgeWrapping: Ot,
  Clock: Oh,
  Color: he,
  ColorKeyframeTrack: Ah,
  ColorManagement: rn,
  CompressedArrayTexture: mv,
  CompressedCubeTexture: gv,
  CompressedTexture: Da,
  CompressedTextureLoader: jv,
  ConeGeometry: Ha,
  CubeCamera: Jf,
  CubeReflectionMapping: ei,
  CubeRefractionMapping: vi,
  CubeTexture: eo,
  CubeTextureLoader: Qv,
  CubeUVReflectionMapping: or,
  CubicBezierCurve: yh,
  CubicBezierCurve3: fp,
  CubicInterpolant: Lp,
  CullFaceBack: Qc,
  CullFaceFront: Yd,
  CullFaceFrontBack: dm,
  CullFaceNone: Xd,
  Curve: En,
  CurvePath: mp,
  CustomBlending: qd,
  CustomToneMapping: yf,
  CylinderGeometry: lr,
  Cylindrical: IM,
  Data3DTexture: sh,
  DataArrayTexture: Aa,
  DataTexture: Ws,
  DataTextureLoader: eM,
  DataUtils: Sg,
  DecrementStencilOp: Sm,
  DecrementWrapStencilOp: Tm,
  DefaultLoadingManager: Up,
  DepthFormat: _i,
  DepthStencilFormat: ts,
  DepthTexture: op,
  DirectionalLight: Ph,
  DirectionalLightHelper: VM,
  DiscreteInterpolant: Pp,
  DisplayP3ColorSpace: th,
  DodecahedronGeometry: ka,
  DoubleSide: _n,
  DstAlphaFactor: ef,
  DstColorFactor: nf,
  DynamicCopyUsage: zm,
  DynamicDrawUsage: Um,
  DynamicReadUsage: Nm,
  EdgesGeometry: gp,
  EllipseCurve: Na,
  EqualCompare: Bf,
  EqualDepth: lf,
  EqualStencilFunc: Rm,
  EquirectangularReflectionMapping: Dr,
  EquirectangularRefractionMapping: Nr,
  Euler: Qr,
  EventDispatcher: ii,
  ExtrudeGeometry: oo,
  FileLoader: un,
  Float16BufferAttribute: Rg,
  Float32BufferAttribute: xe,
  Float64BufferAttribute: Cg,
  FloatType: Ln,
  Fog: Ia,
  FogExp2: Pa,
  FramebufferTexture: pv,
  FrontSide: Un,
  Frustum: Ca,
  GLBufferAttribute: LM,
  GLSL1: km,
  GLSL3: Rl,
  GreaterCompare: Hf,
  GreaterDepth: uf,
  GreaterEqualCompare: Vf,
  GreaterEqualDepth: hf,
  GreaterEqualStencilFunc: Im,
  GreaterStencilFunc: Lm,
  GridHelper: HM,
  Group: Zn,
  HalfFloatType: $s,
  HemisphereLight: Dp,
  HemisphereLightHelper: zM,
  HemisphereLightProbe: aM,
  IcosahedronGeometry: Ga,
  ImageBitmapLoader: Hp,
  ImageLoader: Yr,
  ImageUtils: ih,
  IncrementStencilOp: Mm,
  IncrementWrapStencilOp: Em,
  InstancedBufferAttribute: js,
  InstancedBufferGeometry: Bp,
  InstancedInterleavedBuffer: CM,
  InstancedMesh: ph,
  Int16BufferAttribute: Ag,
  Int32BufferAttribute: wg,
  Int8BufferAttribute: Eg,
  IntType: Yl,
  InterleavedBuffer: io,
  InterleavedBufferAttribute: Si,
  Interpolant: hr,
  InterpolateDiscrete: Zs,
  InterpolateLinear: ns,
  InterpolateSmooth: la,
  InvertStencilOp: bm,
  KeepStencilOp: ha,
  KeyframeTrack: Tn,
  LOD: hp,
  LatheGeometry: ro,
  Layers: wa,
  LessCompare: Ff,
  LessDepth: cf,
  LessEqualCompare: zf,
  LessEqualDepth: fa,
  LessEqualStencilFunc: Cm,
  LessStencilFunc: wm,
  Light: wi,
  LightProbe: Ka,
  Line: ti,
  Line3: OM,
  LineBasicMaterial: Bt,
  LineCurve: Fa,
  LineCurve3: pp,
  LineDashedMaterial: Rp,
  LineLoop: mh,
  LineSegments: Sn,
  LinearEncoding: eh,
  LinearFilter: ut,
  LinearInterpolant: bh,
  LinearMipMapLinearFilter: ym,
  LinearMipMapNearestFilter: _m,
  LinearMipmapLinearFilter: On,
  LinearMipmapNearestFilter: Ea,
  LinearSRGBColorSpace: yn,
  LinearToneMapping: mf,
  Loader: zt,
  LoaderUtils: er,
  LoadingManager: wh,
  LoopOnce: Rf,
  LoopPingPong: Lf,
  LoopRepeat: Cf,
  LuminanceAlphaFormat: Ef,
  LuminanceFormat: Sf,
  MOUSE: hm,
  Material: wt,
  MaterialLoader: Ja,
  MathUtils: Xf,
  Matrix3: Xe,
  Matrix4: De,
  MaxEquation: sl,
  Mesh: bt,
  MeshBasicMaterial: Qt,
  MeshDepthMaterial: ch,
  MeshDistanceMaterial: lh,
  MeshLambertMaterial: Ap,
  MeshMatcapMaterial: wp,
  MeshNormalMaterial: bp,
  MeshPhongMaterial: Ep,
  MeshPhysicalMaterial: Fn,
  MeshStandardMaterial: cs,
  MeshToonMaterial: Tp,
  MinEquation: il,
  MirroredRepeatWrapping: qs,
  MixOperation: ff,
  MultiplyBlending: nl,
  MultiplyOperation: jr,
  NearestFilter: _t,
  NearestMipMapLinearFilter: gm,
  NearestMipMapNearestFilter: mm,
  NearestMipmapLinearFilter: Vs,
  NearestMipmapNearestFilter: Fr,
  NeverCompare: Nf,
  NeverDepth: of,
  NeverStencilFunc: Am,
  NoBlending: Kn,
  NoColorSpace: xi,
  NoToneMapping: Jn,
  NormalAnimationBlendMode: ba,
  NormalBlending: ji,
  NotEqualCompare: kf,
  NotEqualDepth: df,
  NotEqualStencilFunc: Pm,
  NumberKeyframeTrack: ss,
  Object3D: He,
  ObjectLoader: sM,
  ObjectSpaceNormalMap: Of,
  OctahedronGeometry: ao,
  OneFactor: Jd,
  OneMinusDstAlphaFactor: tf,
  OneMinusDstColorFactor: sf,
  OneMinusSrcAlphaFactor: Wl,
  OneMinusSrcColorFactor: Qd,
  OrthographicCamera: no,
  PCFShadowMap: kl,
  PCFSoftShadowMap: Vl,
  PMREMGenerator: Ll,
  Path: Vr,
  PerspectiveCamera: At,
  Plane: fi,
  PlaneGeometry: to,
  PlaneHelper: YM,
  PointLight: Lh,
  PointLightHelper: FM,
  Points: gh,
  PointsMaterial: Oa,
  PolarGridHelper: kM,
  PolyhedronGeometry: Ai,
  PositionalAudio: fM,
  PropertyBinding: je,
  PropertyMixer: Vp,
  QuadraticBezierCurve: xh,
  QuadraticBezierCurve3: vh,
  Quaternion: Ft,
  QuaternionKeyframeTrack: Ei,
  QuaternionLinearInterpolant: Ip,
  RED_GREEN_RGTC2_Format: Al,
  RED_RGTC1_Format: wf,
  REVISION: Ma,
  RGBADepthPacking: Uf,
  RGBAFormat: jt,
  RGBAIntegerFormat: Jl,
  RGBA_ASTC_10x10_Format: Sl,
  RGBA_ASTC_10x5_Format: xl,
  RGBA_ASTC_10x6_Format: vl,
  RGBA_ASTC_10x8_Format: Ml,
  RGBA_ASTC_12x10_Format: El,
  RGBA_ASTC_12x12_Format: Tl,
  RGBA_ASTC_4x4_Format: ul,
  RGBA_ASTC_5x4_Format: dl,
  RGBA_ASTC_5x5_Format: fl,
  RGBA_ASTC_6x5_Format: pl,
  RGBA_ASTC_6x6_Format: ml,
  RGBA_ASTC_8x5_Format: gl,
  RGBA_ASTC_8x6_Format: _l,
  RGBA_ASTC_8x8_Format: yl,
  RGBA_BPTC_Format: ca,
  RGBA_ETC2_EAC_Format: hl,
  RGBA_PVRTC_2BPPV1_Format: cl,
  RGBA_PVRTC_4BPPV1_Format: al,
  RGBA_S3TC_DXT1_Format: ra,
  RGBA_S3TC_DXT3_Format: oa,
  RGBA_S3TC_DXT5_Format: aa,
  RGB_ETC1_Format: Af,
  RGB_ETC2_Format: ll,
  RGB_PVRTC_2BPPV1_Format: ol,
  RGB_PVRTC_4BPPV1_Format: rl,
  RGB_S3TC_DXT1_Format: sa,
  RGFormat: bf,
  RGIntegerFormat: Kl,
  RawShaderMaterial: Sp,
  Ray: ar,
  Raycaster: Wp,
  RectAreaLight: Np,
  RedFormat: Tf,
  RedIntegerFormat: Zl,
  ReinhardToneMapping: gf,
  RenderTarget: qf,
  RepeatWrapping: Mi,
  ReplaceStencilOp: vm,
  ReverseSubtractEquation: Zd,
  RingGeometry: Wa,
  SIGNED_RED_GREEN_RGTC2_Format: wl,
  SIGNED_RED_RGTC1_Format: bl,
  SRGBColorSpace: Ue,
  Scene: uh,
  ShaderChunk: Ve,
  ShaderLib: gn,
  ShaderMaterial: Dn,
  ShadowMaterial: Mp,
  Shape: es,
  ShapeGeometry: Xa,
  ShapePath: Yp,
  ShapeUtils: In,
  ShortType: vf,
  Skeleton: so,
  SkeletonHelper: NM,
  SkinnedMesh: fh,
  Source: Ki,
  Sphere: dn,
  SphereGeometry: co,
  Spherical: PM,
  SphericalHarmonics3: Fp,
  SplineCurve: Mh,
  SpotLight: Ch,
  SpotLightHelper: DM,
  Sprite: lp,
  SpriteMaterial: dh,
  SrcAlphaFactor: Gl,
  SrcAlphaSaturateFactor: rf,
  SrcColorFactor: jd,
  StaticCopyUsage: Bm,
  StaticDrawUsage: zr,
  StaticReadUsage: Dm,
  StereoCamera: lM,
  StreamCopyUsage: Hm,
  StreamDrawUsage: Om,
  StreamReadUsage: Fm,
  StringKeyframeTrack: hs,
  SubtractEquation: $d,
  SubtractiveBlending: tl,
  TOUCH: um,
  TangentSpaceNormalMap: Ti,
  TetrahedronGeometry: Ya,
  Texture: ft,
  TextureLoader: Op,
  TorusGeometry: qa,
  TorusKnotGeometry: $a,
  Triangle: qt,
  TriangleFanDrawMode: pa,
  TriangleStripDrawMode: Ql,
  TrianglesDrawMode: Pf,
  TubeGeometry: Za,
  TwoPassDoubleSide: pm,
  UVMapping: Sa,
  Uint16BufferAttribute: rh,
  Uint32BufferAttribute: oh,
  Uint8BufferAttribute: Tg,
  Uint8ClampedBufferAttribute: bg,
  Uniform: Fh,
  UniformsGroup: RM,
  UniformsLib: le,
  UniformsUtils: Kf,
  UnsignedByteType: jn,
  UnsignedInt248Type: gi,
  UnsignedIntType: $n,
  UnsignedShort4444Type: ql,
  UnsignedShort5551Type: $l,
  UnsignedShortType: Ta,
  VSMShadowMap: Cn,
  Vector2: J,
  Vector3: w,
  Vector4: rt,
  VectorKeyframeTrack: rs,
  VideoTexture: fv,
  WebGL1Renderer: ap,
  WebGL3DRenderTarget: ug,
  WebGLArrayRenderTarget: hg,
  WebGLCoordinateSystem: Pn,
  WebGLCubeRenderTarget: jf,
  WebGLMultipleRenderTargets: dg,
  WebGLRenderTarget: xn,
  WebGLRenderer: hh,
  WebGLUtils: sp,
  WebGPUCoordinateSystem: Hr,
  WireframeGeometry: vp,
  WrapAroundEnding: Br,
  ZeroCurvatureEnding: $i,
  ZeroFactor: Kd,
  ZeroSlopeEnding: Zi,
  ZeroStencilOp: xm,
  _SRGBAFormat: ma,
  sRGBEncoding: yi
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
}, Y = Object.freeze({
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
}), Os = {
  NONE: 0,
  IN: 1,
  OUT: -1
};
function ki(r) {
  return r.isPerspectiveCamera;
}
function di(r) {
  return r.isOrthographicCamera;
}
const Ds = Math.PI * 2, vd = Math.PI / 2, qp = 1e-5, Sr = Math.PI / 180;
function Rn(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function at(r, e = qp) {
  return Math.abs(r) < e;
}
function it(r, e, t = qp) {
  return at(r - e, t);
}
function Md(r, e) {
  return Math.round(r / e) * e;
}
function Er(r) {
  return isFinite(r) ? r : r < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function Tr(r) {
  return Math.abs(r) < Number.MAX_VALUE ? r : r * (1 / 0);
}
function ea(r, e, t, n, i = 1 / 0, s) {
  n = Math.max(1e-4, n);
  const o = 2 / n, a = o * s, c = 1 / (1 + a + 0.48 * a * a + 0.235 * a * a * a);
  let l = r - e;
  const h = e, u = i * n;
  l = Rn(l, -u, u), e = r - l;
  const d = (t.value + o * l) * s;
  t.value = (t.value - o * d) * c;
  let f = e + (l + d) * c;
  return h - r > 0 == f > h && (f = h, t.value = (f - h) / s), f;
}
function Sd(r, e, t, n, i = 1 / 0, s, o) {
  n = Math.max(1e-4, n);
  const a = 2 / n, c = a * s, l = 1 / (1 + c + 0.48 * c * c + 0.235 * c * c * c);
  let h = e.x, u = e.y, d = e.z, f = r.x - h, m = r.y - u, _ = r.z - d;
  const g = h, p = u, v = d, x = i * n, y = x * x, S = f * f + m * m + _ * _;
  if (S > y) {
    const H = Math.sqrt(S);
    f = f / H * x, m = m / H * x, _ = _ / H * x;
  }
  h = r.x - f, u = r.y - m, d = r.z - _;
  const E = (t.x + a * f) * s, b = (t.y + a * m) * s, L = (t.z + a * _) * s;
  t.x = (t.x - a * E) * l, t.y = (t.y - a * b) * l, t.z = (t.z - a * L) * l, o.x = h + (f + E) * l, o.y = u + (m + b) * l, o.z = d + (_ + L) * l;
  const M = g - r.x, A = p - r.y, z = v - r.z, $ = o.x - g, O = o.y - p, N = o.z - v;
  return M * $ + A * O + z * N > 0 && (o.x = g, o.y = p, o.z = v, t.x = (o.x - g) / s, t.y = (o.y - p) / s, t.z = (o.z - v) / s), o;
}
function Fc(r, e) {
  e.set(0, 0), r.forEach((t) => {
    e.x += t.clientX, e.y += t.clientY;
  }), e.x /= r.length, e.y /= r.length;
}
function Bc(r, e) {
  return di(r) ? (console.warn(`${e} is not supported in OrthographicCamera`), !0) : !1;
}
class KM {
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
const JM = "2.7.0", ta = 1 / 8, $p = typeof window < "u", jM = $p && /Mac/.test(navigator.platform), QM = !($p && "PointerEvent" in window);
let Pe, Ed, na, zc, Xt, ke, et, Ns, br, An, wn, Vi, Td, bd, sn, Ar, Fs, Ad, Hc, wd, kc, Vc, ia;
class cn extends KM {
  static install(e) {
    Pe = e.THREE, Ed = Object.freeze(new Pe.Vector3(0, 0, 0)), na = Object.freeze(new Pe.Vector3(0, 1, 0)), zc = Object.freeze(new Pe.Vector3(0, 0, 1)), Xt = new Pe.Vector2(), ke = new Pe.Vector3(), et = new Pe.Vector3(), Ns = new Pe.Vector3(), br = new Pe.Vector3(), An = new Pe.Vector3(), wn = new Pe.Vector3(), Vi = new Pe.Vector3(), Td = new Pe.Vector3(), bd = new Pe.Vector3(), sn = new Pe.Spherical(), Ar = new Pe.Spherical(), Fs = new Pe.Box3(), Ad = new Pe.Box3(), Hc = new Pe.Sphere(), wd = new Pe.Quaternion(), kc = new Pe.Quaternion(), Vc = new Pe.Matrix4(), ia = new Pe.Raycaster();
  }
  static get ACTION() {
    return Y;
  }
  constructor(e, t) {
    super(), this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.minDistance = Number.EPSILON, this.maxDistance = 1 / 0, this.infinityDolly = !1, this.minZoom = 0.01, this.maxZoom = 1 / 0, this.smoothTime = 0.25, this.draggingSmoothTime = 0.125, this.maxSpeed = 1 / 0, this.azimuthRotateSpeed = 1, this.polarRotateSpeed = 1, this.dollySpeed = 1, this.dollyDragInverted = !1, this.truckSpeed = 2, this.dollyToCursor = !1, this.dragToOffset = !1, this.verticalDragToForward = !1, this.boundaryFriction = 0, this.restThreshold = 0.01, this.colliderMeshes = [], this.cancel = () => {
    }, this._enabled = !0, this._state = Y.NONE, this._viewport = null, this._changedDolly = 0, this._changedZoom = 0, this._hasRested = !0, this._boundaryEnclosesCamera = !1, this._needsUpdate = !0, this._updatedLastTime = !1, this._elementRect = new DOMRect(), this._isDragging = !1, this._activePointers = [], this._lockedPointer = null, this._interactiveArea = new DOMRect(0, 0, 1, 1), this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._isUserControllingOffset = !1, this._isUserControllingZoom = !1, this._lastDollyDirection = Os.NONE, this._thetaVelocity = { value: 0 }, this._phiVelocity = { value: 0 }, this._radiusVelocity = { value: 0 }, this._targetVelocity = new Pe.Vector3(), this._focalOffsetVelocity = new Pe.Vector3(), this._zoomVelocity = { value: 0 }, this._truckInternal = (y, S, E) => {
      let b, L;
      if (ki(this._camera)) {
        const M = ke.copy(this._camera.position).sub(this._target), A = this._camera.getEffectiveFOV() * Sr, z = M.length() * Math.tan(A * 0.5);
        b = this.truckSpeed * y * z / this._elementRect.height, L = this.truckSpeed * S * z / this._elementRect.height;
      } else if (di(this._camera)) {
        const M = this._camera;
        b = y * (M.right - M.left) / M.zoom / this._elementRect.width, L = S * (M.top - M.bottom) / M.zoom / this._elementRect.height;
      } else
        return;
      this.verticalDragToForward ? (E ? this.setFocalOffset(this._focalOffsetEnd.x + b, this._focalOffsetEnd.y, this._focalOffsetEnd.z, !0) : this.truck(b, 0, !0), this.forward(-L, !0)) : E ? this.setFocalOffset(this._focalOffsetEnd.x + b, this._focalOffsetEnd.y + L, this._focalOffsetEnd.z, !0) : this.truck(b, L, !0);
    }, this._rotateInternal = (y, S) => {
      const E = Ds * this.azimuthRotateSpeed * y / this._elementRect.height, b = Ds * this.polarRotateSpeed * S / this._elementRect.height;
      this.rotate(E, b, !0);
    }, this._dollyInternal = (y, S, E) => {
      const b = Math.pow(0.95, -y * this.dollySpeed), L = this._sphericalEnd.radius, M = this._sphericalEnd.radius * b, A = Pe.MathUtils.clamp(M, this.minDistance, this.maxDistance), z = A - M;
      this.infinityDolly && this.dollyToCursor ? this._dollyToNoClamp(M, !0) : this.infinityDolly && !this.dollyToCursor ? (this.dollyInFixed(z, !0), this._dollyToNoClamp(A, !0)) : this._dollyToNoClamp(A, !0), this.dollyToCursor && (this._changedDolly += (this.infinityDolly ? M : A) - L, this._dollyControlCoord.set(S, E)), this._lastDollyDirection = Math.sign(-y);
    }, this._zoomInternal = (y, S, E) => {
      const b = Math.pow(0.95, y * this.dollySpeed), L = this._zoom, M = this._zoom * b;
      this.zoomTo(M, !0), this.dollyToCursor && (this._changedZoom += M - L, this._dollyControlCoord.set(S, E));
    }, typeof Pe > "u" && console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."), this._camera = e, this._yAxisUpSpace = new Pe.Quaternion().setFromUnitVectors(this._camera.up, na), this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert(), this._state = Y.NONE, this._target = new Pe.Vector3(), this._targetEnd = this._target.clone(), this._focalOffset = new Pe.Vector3(), this._focalOffsetEnd = this._focalOffset.clone(), this._spherical = new Pe.Spherical().setFromVector3(ke.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)), this._sphericalEnd = this._spherical.clone(), this._lastDistance = this._spherical.radius, this._zoom = this._camera.zoom, this._zoomEnd = this._zoom, this._lastZoom = this._zoom, this._nearPlaneCorners = [
      new Pe.Vector3(),
      new Pe.Vector3(),
      new Pe.Vector3(),
      new Pe.Vector3()
    ], this._updateNearPlaneCorners(), this._boundary = new Pe.Box3(new Pe.Vector3(-1 / 0, -1 / 0, -1 / 0), new Pe.Vector3(1 / 0, 1 / 0, 1 / 0)), this._cameraUp0 = this._camera.up.clone(), this._target0 = this._target.clone(), this._position0 = this._camera.position.clone(), this._zoom0 = this._zoom, this._focalOffset0 = this._focalOffset.clone(), this._dollyControlCoord = new Pe.Vector2(), this.mouseButtons = {
      left: Y.ROTATE,
      middle: Y.DOLLY,
      right: Y.TRUCK,
      wheel: ki(this._camera) ? Y.DOLLY : di(this._camera) ? Y.ZOOM : Y.NONE
    }, this.touches = {
      one: Y.TOUCH_ROTATE,
      two: ki(this._camera) ? Y.TOUCH_DOLLY_TRUCK : di(this._camera) ? Y.TOUCH_ZOOM_TRUCK : Y.NONE,
      three: Y.TOUCH_TRUCK
    };
    const n = new Pe.Vector2(), i = new Pe.Vector2(), s = new Pe.Vector2(), o = (y) => {
      if (!this._enabled || !this._domElement)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const b = this._domElement.getBoundingClientRect(), L = y.clientX / b.width, M = y.clientY / b.height;
        if (L < this._interactiveArea.left || L > this._interactiveArea.right || M < this._interactiveArea.top || M > this._interactiveArea.bottom)
          return;
      }
      const S = y.pointerType !== "mouse" ? null : (y.buttons & Oe.LEFT) === Oe.LEFT ? Oe.LEFT : (y.buttons & Oe.MIDDLE) === Oe.MIDDLE ? Oe.MIDDLE : (y.buttons & Oe.RIGHT) === Oe.RIGHT ? Oe.RIGHT : null;
      if (S !== null) {
        const b = this._findPointerByMouseButton(S);
        b && this._disposePointer(b);
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
        const b = this._domElement.getBoundingClientRect(), L = y.clientX / b.width, M = y.clientY / b.height;
        if (L < this._interactiveArea.left || L > this._interactiveArea.right || M < this._interactiveArea.top || M > this._interactiveArea.bottom)
          return;
      }
      const S = (y.buttons & Oe.LEFT) === Oe.LEFT ? Oe.LEFT : (y.buttons & Oe.MIDDLE) === Oe.MIDDLE ? Oe.MIDDLE : (y.buttons & Oe.RIGHT) === Oe.RIGHT ? Oe.RIGHT : null;
      if (S !== null) {
        const b = this._findPointerByMouseButton(S);
        b && this._disposePointer(b);
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
              this._state = Y.NONE;
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
          this._state = Y.NONE;
        p();
      }
    }, u = () => {
      const y = this._findPointerById(1);
      y && y === this._lockedPointer || (y && this._disposePointer(y), this._state = Y.NONE, p());
    };
    let d = -1;
    const f = (y) => {
      if (!this._domElement || !this._enabled || this.mouseButtons.wheel === Y.NONE)
        return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        const M = this._domElement.getBoundingClientRect(), A = y.clientX / M.width, z = y.clientY / M.height;
        if (A < this._interactiveArea.left || A > this._interactiveArea.right || z < this._interactiveArea.top || z > this._interactiveArea.bottom)
          return;
      }
      if (y.preventDefault(), this.dollyToCursor || this.mouseButtons.wheel === Y.ROTATE || this.mouseButtons.wheel === Y.TRUCK) {
        const M = performance.now();
        d - M < 1e3 && this._getClientRect(this._elementRect), d = M;
      }
      const S = jM ? -1 : -3, E = y.deltaMode === 1 ? y.deltaY / S : y.deltaY / (S * 10), b = this.dollyToCursor ? (y.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, L = this.dollyToCursor ? (y.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
      switch (this.mouseButtons.wheel) {
        case Y.ROTATE: {
          this._rotateInternal(y.deltaX, y.deltaY), this._isUserControllingRotate = !0;
          break;
        }
        case Y.TRUCK: {
          this._truckInternal(y.deltaX, y.deltaY, !1), this._isUserControllingTruck = !0;
          break;
        }
        case Y.OFFSET: {
          this._truckInternal(y.deltaX, y.deltaY, !0), this._isUserControllingOffset = !0;
          break;
        }
        case Y.DOLLY: {
          this._dollyInternal(-E, b, L), this._isUserControllingDolly = !0;
          break;
        }
        case Y.ZOOM: {
          this._zoomInternal(-E, b, L), this._isUserControllingZoom = !0;
          break;
        }
      }
      this.dispatchEvent({ type: "control" });
    }, m = (y) => {
      if (!(!this._domElement || !this._enabled)) {
        if (this.mouseButtons.right === cn.ACTION.NONE) {
          const S = y instanceof PointerEvent ? y.pointerId : (y instanceof MouseEvent, 0), E = this._findPointerById(S);
          E && this._disposePointer(E), this._domElement.ownerDocument.removeEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", h), this._domElement.ownerDocument.removeEventListener("mousemove", l), this._domElement.ownerDocument.removeEventListener("mouseup", u);
          return;
        }
        y.preventDefault();
      }
    }, _ = (y) => {
      if (!this._enabled)
        return;
      if (Fc(this._activePointers, Xt), this._getClientRect(this._elementRect), n.copy(Xt), i.copy(Xt), this._activePointers.length >= 2) {
        const E = Xt.x - this._activePointers[1].clientX, b = Xt.y - this._activePointers[1].clientY, L = Math.sqrt(E * E + b * b);
        s.set(0, L);
        const M = (this._activePointers[0].clientX + this._activePointers[1].clientX) * 0.5, A = (this._activePointers[0].clientY + this._activePointers[1].clientY) * 0.5;
        i.set(M, A);
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
      ((this._state & Y.ROTATE) === Y.ROTATE || (this._state & Y.TOUCH_ROTATE) === Y.TOUCH_ROTATE || (this._state & Y.TOUCH_DOLLY_ROTATE) === Y.TOUCH_DOLLY_ROTATE || (this._state & Y.TOUCH_ZOOM_ROTATE) === Y.TOUCH_ZOOM_ROTATE) && (this._sphericalEnd.theta = this._spherical.theta, this._sphericalEnd.phi = this._spherical.phi, this._thetaVelocity.value = 0, this._phiVelocity.value = 0), ((this._state & Y.TRUCK) === Y.TRUCK || (this._state & Y.TOUCH_TRUCK) === Y.TOUCH_TRUCK || (this._state & Y.TOUCH_DOLLY_TRUCK) === Y.TOUCH_DOLLY_TRUCK || (this._state & Y.TOUCH_ZOOM_TRUCK) === Y.TOUCH_ZOOM_TRUCK) && (this._targetEnd.copy(this._target), this._targetVelocity.set(0, 0, 0)), ((this._state & Y.DOLLY) === Y.DOLLY || (this._state & Y.TOUCH_DOLLY) === Y.TOUCH_DOLLY || (this._state & Y.TOUCH_DOLLY_TRUCK) === Y.TOUCH_DOLLY_TRUCK || (this._state & Y.TOUCH_DOLLY_OFFSET) === Y.TOUCH_DOLLY_OFFSET || (this._state & Y.TOUCH_DOLLY_ROTATE) === Y.TOUCH_DOLLY_ROTATE) && (this._sphericalEnd.radius = this._spherical.radius, this._radiusVelocity.value = 0), ((this._state & Y.ZOOM) === Y.ZOOM || (this._state & Y.TOUCH_ZOOM) === Y.TOUCH_ZOOM || (this._state & Y.TOUCH_ZOOM_TRUCK) === Y.TOUCH_ZOOM_TRUCK || (this._state & Y.TOUCH_ZOOM_OFFSET) === Y.TOUCH_ZOOM_OFFSET || (this._state & Y.TOUCH_ZOOM_ROTATE) === Y.TOUCH_ZOOM_ROTATE) && (this._zoomEnd = this._zoom, this._zoomVelocity.value = 0), ((this._state & Y.OFFSET) === Y.OFFSET || (this._state & Y.TOUCH_OFFSET) === Y.TOUCH_OFFSET || (this._state & Y.TOUCH_DOLLY_OFFSET) === Y.TOUCH_DOLLY_OFFSET || (this._state & Y.TOUCH_ZOOM_OFFSET) === Y.TOUCH_ZOOM_OFFSET) && (this._focalOffsetEnd.copy(this._focalOffset), this._focalOffsetVelocity.set(0, 0, 0)), this.dispatchEvent({ type: "controlstart" });
    }, g = () => {
      if (!this._enabled)
        return;
      Fc(this._activePointers, Xt);
      const S = this._domElement && document.pointerLockElement === this._domElement ? this._lockedPointer || this._activePointers[0] : null, E = S ? -S.deltaX : i.x - Xt.x, b = S ? -S.deltaY : i.y - Xt.y;
      if (i.copy(Xt), ((this._state & Y.ROTATE) === Y.ROTATE || (this._state & Y.TOUCH_ROTATE) === Y.TOUCH_ROTATE || (this._state & Y.TOUCH_DOLLY_ROTATE) === Y.TOUCH_DOLLY_ROTATE || (this._state & Y.TOUCH_ZOOM_ROTATE) === Y.TOUCH_ZOOM_ROTATE) && (this._rotateInternal(E, b), this._isUserControllingRotate = !0), (this._state & Y.DOLLY) === Y.DOLLY || (this._state & Y.ZOOM) === Y.ZOOM) {
        const L = this.dollyToCursor ? (n.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, M = this.dollyToCursor ? (n.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0, A = this.dollyDragInverted ? -1 : 1;
        (this._state & Y.DOLLY) === Y.DOLLY ? (this._dollyInternal(A * b * ta, L, M), this._isUserControllingDolly = !0) : (this._zoomInternal(A * b * ta, L, M), this._isUserControllingZoom = !0);
      }
      if ((this._state & Y.TOUCH_DOLLY) === Y.TOUCH_DOLLY || (this._state & Y.TOUCH_ZOOM) === Y.TOUCH_ZOOM || (this._state & Y.TOUCH_DOLLY_TRUCK) === Y.TOUCH_DOLLY_TRUCK || (this._state & Y.TOUCH_ZOOM_TRUCK) === Y.TOUCH_ZOOM_TRUCK || (this._state & Y.TOUCH_DOLLY_OFFSET) === Y.TOUCH_DOLLY_OFFSET || (this._state & Y.TOUCH_ZOOM_OFFSET) === Y.TOUCH_ZOOM_OFFSET || (this._state & Y.TOUCH_DOLLY_ROTATE) === Y.TOUCH_DOLLY_ROTATE || (this._state & Y.TOUCH_ZOOM_ROTATE) === Y.TOUCH_ZOOM_ROTATE) {
        const L = Xt.x - this._activePointers[1].clientX, M = Xt.y - this._activePointers[1].clientY, A = Math.sqrt(L * L + M * M), z = s.y - A;
        s.set(0, A);
        const $ = this.dollyToCursor ? (i.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, O = this.dollyToCursor ? (i.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
        (this._state & Y.TOUCH_DOLLY) === Y.TOUCH_DOLLY || (this._state & Y.TOUCH_DOLLY_ROTATE) === Y.TOUCH_DOLLY_ROTATE || (this._state & Y.TOUCH_DOLLY_TRUCK) === Y.TOUCH_DOLLY_TRUCK || (this._state & Y.TOUCH_DOLLY_OFFSET) === Y.TOUCH_DOLLY_OFFSET ? (this._dollyInternal(z * ta, $, O), this._isUserControllingDolly = !0) : (this._zoomInternal(z * ta, $, O), this._isUserControllingZoom = !0);
      }
      ((this._state & Y.TRUCK) === Y.TRUCK || (this._state & Y.TOUCH_TRUCK) === Y.TOUCH_TRUCK || (this._state & Y.TOUCH_DOLLY_TRUCK) === Y.TOUCH_DOLLY_TRUCK || (this._state & Y.TOUCH_ZOOM_TRUCK) === Y.TOUCH_ZOOM_TRUCK) && (this._truckInternal(E, b, !1), this._isUserControllingTruck = !0), ((this._state & Y.OFFSET) === Y.OFFSET || (this._state & Y.TOUCH_OFFSET) === Y.TOUCH_OFFSET || (this._state & Y.TOUCH_DOLLY_OFFSET) === Y.TOUCH_DOLLY_OFFSET || (this._state & Y.TOUCH_ZOOM_OFFSET) === Y.TOUCH_ZOOM_OFFSET) && (this._truckInternal(E, b, !0), this._isUserControllingOffset = !0), this.dispatchEvent({ type: "control" });
    }, p = () => {
      Fc(this._activePointers, Xt), i.copy(Xt), (this._activePointers.length === 0 || this._activePointers.length === 1 && this._activePointers[0] === this._lockedPointer) && (this._isDragging = !1), this._activePointers.length === 0 && this._domElement && (this._domElement.ownerDocument.removeEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("mousemove", l), this._domElement.ownerDocument.removeEventListener("pointerup", h), this._domElement.ownerDocument.removeEventListener("mouseup", u), this.dispatchEvent({ type: "controlend" }));
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
      this._domElement = y, this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none", this._domElement.addEventListener("pointerdown", o), QM && this._domElement.addEventListener("mousedown", a), this._domElement.addEventListener("pointercancel", h), this._domElement.addEventListener("wheel", f, { passive: !1 }), this._domElement.addEventListener("contextmenu", m);
    }, this._removeAllEventListeners = () => {
      !this._domElement || (this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = "", this._domElement.removeEventListener("pointerdown", o), this._domElement.removeEventListener("mousedown", a), this._domElement.removeEventListener("pointercancel", h), this._domElement.removeEventListener("wheel", f, { passive: !1 }), this._domElement.removeEventListener("contextmenu", m), this._domElement.ownerDocument.removeEventListener("pointermove", c, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("mousemove", l), this._domElement.ownerDocument.removeEventListener("pointerup", h), this._domElement.ownerDocument.removeEventListener("mouseup", u), this._domElement.ownerDocument.removeEventListener("pointerlockchange", v), this._domElement.ownerDocument.removeEventListener("pointerlockerror", x));
    }, this.cancel = () => {
      this._state !== Y.NONE && (this._state = Y.NONE, this._activePointers.length = 0, p());
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
    this._interactiveArea.width = Rn(e.width, 0, 1), this._interactiveArea.height = Rn(e.height, 0, 1), this._interactiveArea.x = Rn(e.x, 0, 1 - this._interactiveArea.width), this._interactiveArea.y = Rn(e.x, 0, 1 - this._interactiveArea.height);
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
    const i = Rn(e, this.minAzimuthAngle, this.maxAzimuthAngle), s = Rn(t, this.minPolarAngle, this.maxPolarAngle);
    this._sphericalEnd.theta = i, this._sphericalEnd.phi = s, this._sphericalEnd.makeSafe(), this._needsUpdate = !0, n || (this._spherical.theta = this._sphericalEnd.theta, this._spherical.phi = this._sphericalEnd.phi);
    const o = !n || it(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && it(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
    return this._createOnRestPromise(o);
  }
  dolly(e, t = !1) {
    return this.dollyTo(this._sphericalEnd.radius - e, t);
  }
  dollyTo(e, t = !1) {
    return this._isUserControllingDolly = !1, this._lastDollyDirection = Os.NONE, this._changedDolly = 0, this._dollyToNoClamp(Rn(e, this.minDistance, this.maxDistance), t);
  }
  _dollyToNoClamp(e, t = !1) {
    const n = this._sphericalEnd.radius;
    if (this.colliderMeshes.length >= 1) {
      const o = this._collisionTest(), a = it(o, this._spherical.radius);
      if (!(n > e) && a)
        return Promise.resolve();
      this._sphericalEnd.radius = Math.min(e, o);
    } else
      this._sphericalEnd.radius = e;
    this._needsUpdate = !0, t || (this._spherical.radius = this._sphericalEnd.radius);
    const s = !t || it(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(s);
  }
  dollyInFixed(e, t = !1) {
    this._targetEnd.add(this._getCameraDirection(br).multiplyScalar(e)), t || this._target.copy(this._targetEnd);
    const n = !t || it(this._target.x, this._targetEnd.x, this.restThreshold) && it(this._target.y, this._targetEnd.y, this.restThreshold) && it(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(n);
  }
  zoom(e, t = !1) {
    return this.zoomTo(this._zoomEnd + e, t);
  }
  zoomTo(e, t = !1) {
    this._isUserControllingZoom = !1, this._zoomEnd = Rn(e, this.minZoom, this.maxZoom), this._needsUpdate = !0, t || (this._zoom = this._zoomEnd);
    const n = !t || it(this._zoom, this._zoomEnd, this.restThreshold);
    return this._changedZoom = 0, this._createOnRestPromise(n);
  }
  pan(e, t, n = !1) {
    return console.warn("`pan` has been renamed to `truck`"), this.truck(e, t, n);
  }
  truck(e, t, n = !1) {
    this._camera.updateMatrix(), An.setFromMatrixColumn(this._camera.matrix, 0), wn.setFromMatrixColumn(this._camera.matrix, 1), An.multiplyScalar(e), wn.multiplyScalar(-t);
    const i = ke.copy(An).add(wn), s = et.copy(this._targetEnd).add(i);
    return this.moveTo(s.x, s.y, s.z, n);
  }
  forward(e, t = !1) {
    ke.setFromMatrixColumn(this._camera.matrix, 0), ke.crossVectors(this._camera.up, ke), ke.multiplyScalar(e);
    const n = et.copy(this._targetEnd).add(ke);
    return this.moveTo(n.x, n.y, n.z, t);
  }
  elevate(e, t = !1) {
    return ke.copy(this._camera.up).multiplyScalar(e), this.moveTo(this._targetEnd.x + ke.x, this._targetEnd.y + ke.y, this._targetEnd.z + ke.z, t);
  }
  moveTo(e, t, n, i = !1) {
    this._isUserControllingTruck = !1;
    const s = ke.set(e, t, n).sub(this._targetEnd);
    this._encloseToBoundary(this._targetEnd, s, this.boundaryFriction), this._needsUpdate = !0, i || this._target.copy(this._targetEnd);
    const o = !i || it(this._target.x, this._targetEnd.x, this.restThreshold) && it(this._target.y, this._targetEnd.y, this.restThreshold) && it(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(o);
  }
  lookInDirectionOf(e, t, n, i = !1) {
    const a = ke.set(e, t, n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius);
    return this.setPosition(a.x, a.y, a.z, i);
  }
  fitToBox(e, t, { cover: n = !1, paddingLeft: i = 0, paddingRight: s = 0, paddingBottom: o = 0, paddingTop: a = 0 } = {}) {
    const c = [], l = e.isBox3 ? Fs.copy(e) : Fs.setFromObject(e);
    l.isEmpty() && (console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"), Promise.resolve());
    const h = Md(this._sphericalEnd.theta, vd), u = Md(this._sphericalEnd.phi, vd);
    c.push(this.rotateTo(h, u, t));
    const d = ke.setFromSpherical(this._sphericalEnd).normalize(), f = wd.setFromUnitVectors(d, zc), m = it(Math.abs(d.y), 1);
    m && f.multiply(kc.setFromAxisAngle(na, h)), f.multiply(this._yAxisUpSpaceInverse);
    const _ = Ad.makeEmpty();
    et.copy(l.min).applyQuaternion(f), _.expandByPoint(et), et.copy(l.min).setX(l.max.x).applyQuaternion(f), _.expandByPoint(et), et.copy(l.min).setY(l.max.y).applyQuaternion(f), _.expandByPoint(et), et.copy(l.max).setZ(l.min.z).applyQuaternion(f), _.expandByPoint(et), et.copy(l.min).setZ(l.max.z).applyQuaternion(f), _.expandByPoint(et), et.copy(l.max).setY(l.min.y).applyQuaternion(f), _.expandByPoint(et), et.copy(l.max).setX(l.min.x).applyQuaternion(f), _.expandByPoint(et), et.copy(l.max).applyQuaternion(f), _.expandByPoint(et), _.min.x -= i, _.min.y -= o, _.max.x += s, _.max.y += a, f.setFromUnitVectors(zc, d), m && f.premultiply(kc.invert()), f.premultiply(this._yAxisUpSpace);
    const g = _.getSize(ke), p = _.getCenter(et).applyQuaternion(f);
    if (ki(this._camera)) {
      const v = this.getDistanceToFitBox(g.x, g.y, g.z, n);
      c.push(this.moveTo(p.x, p.y, p.z, t)), c.push(this.dollyTo(v, t)), c.push(this.setFocalOffset(0, 0, 0, t));
    } else if (di(this._camera)) {
      const v = this._camera, x = v.right - v.left, y = v.top - v.bottom, S = n ? Math.max(x / g.x, y / g.y) : Math.min(x / g.x, y / g.y);
      c.push(this.moveTo(p.x, p.y, p.z, t)), c.push(this.zoomTo(S, t)), c.push(this.setFocalOffset(0, 0, 0, t));
    }
    return Promise.all(c);
  }
  fitToSphere(e, t) {
    const n = [], s = e instanceof Pe.Sphere ? Hc.copy(e) : cn.createBoundingSphere(e, Hc);
    if (n.push(this.moveTo(s.center.x, s.center.y, s.center.z, t)), ki(this._camera)) {
      const o = this.getDistanceToFitSphere(s.radius);
      n.push(this.dollyTo(o, t));
    } else if (di(this._camera)) {
      const o = this._camera.right - this._camera.left, a = this._camera.top - this._camera.bottom, c = 2 * s.radius, l = Math.min(o / c, a / c);
      n.push(this.zoomTo(l, t));
    }
    return n.push(this.setFocalOffset(0, 0, 0, t)), Promise.all(n);
  }
  setLookAt(e, t, n, i, s, o, a = !1) {
    this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = Os.NONE, this._changedDolly = 0;
    const c = et.set(i, s, o), l = ke.set(e, t, n);
    this._targetEnd.copy(c), this._sphericalEnd.setFromVector3(l.sub(c).applyQuaternion(this._yAxisUpSpace)), this.normalizeRotations(), this._needsUpdate = !0, a || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
    const h = !a || it(this._target.x, this._targetEnd.x, this.restThreshold) && it(this._target.y, this._targetEnd.y, this.restThreshold) && it(this._target.z, this._targetEnd.z, this.restThreshold) && it(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && it(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && it(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(h);
  }
  lerpLookAt(e, t, n, i, s, o, a, c, l, h, u, d, f, m = !1) {
    this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = Os.NONE, this._changedDolly = 0;
    const _ = ke.set(i, s, o), g = et.set(e, t, n);
    sn.setFromVector3(g.sub(_).applyQuaternion(this._yAxisUpSpace));
    const p = Ns.set(h, u, d), v = et.set(a, c, l);
    Ar.setFromVector3(v.sub(p).applyQuaternion(this._yAxisUpSpace)), this._targetEnd.copy(_.lerp(p, f));
    const x = Ar.theta - sn.theta, y = Ar.phi - sn.phi, S = Ar.radius - sn.radius;
    this._sphericalEnd.set(sn.radius + S * f, sn.phi + y * f, sn.theta + x * f), this.normalizeRotations(), this._needsUpdate = !0, m || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
    const E = !m || it(this._target.x, this._targetEnd.x, this.restThreshold) && it(this._target.y, this._targetEnd.y, this.restThreshold) && it(this._target.z, this._targetEnd.z, this.restThreshold) && it(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && it(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && it(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(E);
  }
  setPosition(e, t, n, i = !1) {
    return this.setLookAt(e, t, n, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, i);
  }
  setTarget(e, t, n, i = !1) {
    const s = this.getPosition(ke), o = this.setLookAt(s.x, s.y, s.z, e, t, n, i);
    return this._sphericalEnd.phi = Rn(this._sphericalEnd.phi, this.minPolarAngle, this.maxPolarAngle), o;
  }
  setFocalOffset(e, t, n, i = !1) {
    this._isUserControllingOffset = !1, this._focalOffsetEnd.set(e, t, n), this._needsUpdate = !0, i || this._focalOffset.copy(this._focalOffsetEnd);
    const s = !i || it(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && it(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && it(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
    return this._createOnRestPromise(s);
  }
  setOrbitPoint(e, t, n) {
    this._camera.updateMatrixWorld(), An.setFromMatrixColumn(this._camera.matrixWorldInverse, 0), wn.setFromMatrixColumn(this._camera.matrixWorldInverse, 1), Vi.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
    const i = ke.set(e, t, n), s = i.distanceTo(this._camera.position), o = i.sub(this._camera.position);
    An.multiplyScalar(o.x), wn.multiplyScalar(o.y), Vi.multiplyScalar(o.z), ke.copy(An).add(wn).add(Vi), ke.z = ke.z + s, this.dollyTo(s, !1), this.setFocalOffset(-ke.x, ke.y, -ke.z, !1), this.moveTo(e, t, n, !1);
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
    if (Bc(this._camera, "getDistanceToFitBox"))
      return this._spherical.radius;
    const s = e / t, o = this._camera.getEffectiveFOV() * Sr, a = this._camera.aspect;
    return ((i ? s > a : s < a) ? t : e / a) * 0.5 / Math.tan(o * 0.5) + n * 0.5;
  }
  getDistanceToFitSphere(e) {
    if (Bc(this._camera, "getDistanceToFitSphere"))
      return this._spherical.radius;
    const t = this._camera.getEffectiveFOV() * Sr, n = Math.atan(Math.tan(t * 0.5) * this._camera.aspect) * 2, i = 1 < this._camera.aspect ? t : n;
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
    this._sphericalEnd.theta = this._sphericalEnd.theta % Ds, this._sphericalEnd.theta < 0 && (this._sphericalEnd.theta += Ds), this._spherical.theta += Ds * Math.round((this._sphericalEnd.theta - this._spherical.theta) / Ds);
  }
  reset(e = !1) {
    if (!it(this._camera.up.x, this._cameraUp0.x) || !it(this._camera.up.y, this._cameraUp0.y) || !it(this._camera.up.z, this._cameraUp0.z)) {
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
    this._yAxisUpSpace.setFromUnitVectors(this._camera.up, na), this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
  }
  applyCameraUp() {
    const e = ke.subVectors(this._target, this._camera.position).normalize(), t = et.crossVectors(e, this._camera.up);
    this._camera.up.crossVectors(t, e), this._camera.updateMatrixWorld();
    const n = this.getPosition(ke);
    this.updateCameraUp(), this.setPosition(n.x, n.y, n.z);
  }
  update(e) {
    const t = this._sphericalEnd.theta - this._spherical.theta, n = this._sphericalEnd.phi - this._spherical.phi, i = this._sphericalEnd.radius - this._spherical.radius, s = Td.subVectors(this._targetEnd, this._target), o = bd.subVectors(this._focalOffsetEnd, this._focalOffset), a = this._zoomEnd - this._zoom;
    if (at(t))
      this._thetaVelocity.value = 0, this._spherical.theta = this._sphericalEnd.theta;
    else {
      const u = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.theta = ea(this._spherical.theta, this._sphericalEnd.theta, this._thetaVelocity, u, 1 / 0, e), this._needsUpdate = !0;
    }
    if (at(n))
      this._phiVelocity.value = 0, this._spherical.phi = this._sphericalEnd.phi;
    else {
      const u = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.phi = ea(this._spherical.phi, this._sphericalEnd.phi, this._phiVelocity, u, 1 / 0, e), this._needsUpdate = !0;
    }
    if (at(i))
      this._radiusVelocity.value = 0, this._spherical.radius = this._sphericalEnd.radius;
    else {
      const u = this._isUserControllingDolly ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.radius = ea(this._spherical.radius, this._sphericalEnd.radius, this._radiusVelocity, u, this.maxSpeed, e), this._needsUpdate = !0;
    }
    if (at(s.x) && at(s.y) && at(s.z))
      this._targetVelocity.set(0, 0, 0), this._target.copy(this._targetEnd);
    else {
      const u = this._isUserControllingTruck ? this.draggingSmoothTime : this.smoothTime;
      Sd(this._target, this._targetEnd, this._targetVelocity, u, this.maxSpeed, e, this._target), this._needsUpdate = !0;
    }
    if (at(o.x) && at(o.y) && at(o.z))
      this._focalOffsetVelocity.set(0, 0, 0), this._focalOffset.copy(this._focalOffsetEnd);
    else {
      const u = this._isUserControllingOffset ? this.draggingSmoothTime : this.smoothTime;
      Sd(this._focalOffset, this._focalOffsetEnd, this._focalOffsetVelocity, u, this.maxSpeed, e, this._focalOffset), this._needsUpdate = !0;
    }
    if (at(a))
      this._zoomVelocity.value = 0, this._zoom = this._zoomEnd;
    else {
      const u = this._isUserControllingZoom ? this.draggingSmoothTime : this.smoothTime;
      this._zoom = ea(this._zoom, this._zoomEnd, this._zoomVelocity, u, 1 / 0, e);
    }
    if (this.dollyToCursor) {
      if (ki(this._camera) && this._changedDolly !== 0) {
        const u = this._spherical.radius - this._lastDistance, d = this._camera, f = this._getCameraDirection(br), m = ke.copy(f).cross(d.up).normalize();
        m.lengthSq() === 0 && (m.x = 1);
        const _ = et.crossVectors(m, f), g = this._sphericalEnd.radius * Math.tan(d.getEffectiveFOV() * Sr * 0.5), v = (this._sphericalEnd.radius - u - this._sphericalEnd.radius) / this._sphericalEnd.radius, x = Ns.copy(this._targetEnd).add(m.multiplyScalar(this._dollyControlCoord.x * g * d.aspect)).add(_.multiplyScalar(this._dollyControlCoord.y * g)), y = ke.copy(this._targetEnd).lerp(x, v), S = this._lastDollyDirection === Os.IN && this._spherical.radius <= this.minDistance, E = this._lastDollyDirection === Os.OUT && this.maxDistance <= this._spherical.radius;
        if (this.infinityDolly && (S || E)) {
          this._sphericalEnd.radius -= u, this._spherical.radius -= u;
          const L = et.copy(f).multiplyScalar(-u);
          y.add(L);
        }
        this._boundary.clampPoint(y, y);
        const b = et.subVectors(y, this._targetEnd);
        this._targetEnd.copy(y), this._target.add(b), this._changedDolly -= u, at(this._changedDolly) && (this._changedDolly = 0);
      } else if (di(this._camera) && this._changedZoom !== 0) {
        const u = this._zoom - this._lastZoom, d = this._camera, f = ke.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (d.near + d.far) / (d.near - d.far)).unproject(d), m = et.set(0, 0, -1).applyQuaternion(d.quaternion), _ = Ns.copy(f).add(m.multiplyScalar(-f.dot(d.up))), p = -(this._zoom - u - this._zoom) / this._zoom, v = this._getCameraDirection(br), x = this._targetEnd.dot(v), y = ke.copy(this._targetEnd).lerp(_, p), S = y.dot(v), E = v.multiplyScalar(S - x);
        y.sub(E), this._boundary.clampPoint(y, y);
        const b = et.subVectors(y, this._targetEnd);
        this._targetEnd.copy(y), this._target.add(b), this._changedZoom -= u, at(this._changedZoom) && (this._changedZoom = 0);
      }
    }
    this._camera.zoom !== this._zoom && (this._camera.zoom = this._zoom, this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = !0);
    const c = this._collisionTest();
    this._spherical.radius = Math.min(this._spherical.radius, c), this._spherical.makeSafe(), this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target), this._camera.lookAt(this._target), (!at(this._focalOffset.x) || !at(this._focalOffset.y) || !at(this._focalOffset.z)) && (this._camera.updateMatrixWorld(), An.setFromMatrixColumn(this._camera.matrix, 0), wn.setFromMatrixColumn(this._camera.matrix, 1), Vi.setFromMatrixColumn(this._camera.matrix, 2), An.multiplyScalar(this._focalOffset.x), wn.multiplyScalar(-this._focalOffset.y), Vi.multiplyScalar(this._focalOffset.z), ke.copy(An).add(wn).add(Vi), this._camera.position.add(ke)), this._boundaryEnclosesCamera && this._encloseToBoundary(this._camera.position.copy(this._target), ke.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
    const h = this._needsUpdate;
    return h && !this._updatedLastTime ? (this._hasRested = !1, this.dispatchEvent({ type: "wake" }), this.dispatchEvent({ type: "update" })) : h ? (this.dispatchEvent({ type: "update" }), at(t, this.restThreshold) && at(n, this.restThreshold) && at(i, this.restThreshold) && at(s.x, this.restThreshold) && at(s.y, this.restThreshold) && at(s.z, this.restThreshold) && at(o.x, this.restThreshold) && at(o.y, this.restThreshold) && at(o.z, this.restThreshold) && at(a, this.restThreshold) && !this._hasRested && (this._hasRested = !0, this.dispatchEvent({ type: "rest" }))) : !h && this._updatedLastTime && this.dispatchEvent({ type: "sleep" }), this._lastDistance = this._spherical.radius, this._lastZoom = this._zoom, this._updatedLastTime = h, this._needsUpdate = !1, h;
  }
  toJSON() {
    return JSON.stringify({
      enabled: this._enabled,
      minDistance: this.minDistance,
      maxDistance: Er(this.maxDistance),
      minZoom: this.minZoom,
      maxZoom: Er(this.maxZoom),
      minPolarAngle: this.minPolarAngle,
      maxPolarAngle: Er(this.maxPolarAngle),
      minAzimuthAngle: Er(this.minAzimuthAngle),
      maxAzimuthAngle: Er(this.maxAzimuthAngle),
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
    this.enabled = n.enabled, this.minDistance = n.minDistance, this.maxDistance = Tr(n.maxDistance), this.minZoom = n.minZoom, this.maxZoom = Tr(n.maxZoom), this.minPolarAngle = n.minPolarAngle, this.maxPolarAngle = Tr(n.maxPolarAngle), this.minAzimuthAngle = Tr(n.minAzimuthAngle), this.maxAzimuthAngle = Tr(n.maxAzimuthAngle), this.smoothTime = n.smoothTime, this.draggingSmoothTime = n.draggingSmoothTime, this.dollySpeed = n.dollySpeed, this.truckSpeed = n.truckSpeed, this.dollyToCursor = n.dollyToCursor, this.verticalDragToForward = n.verticalDragToForward, this._target0.fromArray(n.target0), this._position0.fromArray(n.position0), this._zoom0 = n.zoom0, this._focalOffset0.fromArray(n.focalOffset0), this.moveTo(n.target[0], n.target[1], n.target[2], t), sn.setFromVector3(ke.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)), this.rotateTo(sn.theta, sn.phi, t), this.dollyTo(sn.radius, t), this.zoomTo(n.zoom, t), this.setFocalOffset(n.focalOffset[0], n.focalOffset[1], n.focalOffset[2], t), this._needsUpdate = !0;
  }
  connect(e) {
    if (this._domElement) {
      console.warn("camera-controls is already connected.");
      return;
    }
    e.setAttribute("data-camera-controls-version", JM), this._addAllEventListeners(e);
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
    const s = et.copy(t).add(e), a = this._boundary.clampPoint(s, Ns).sub(s), c = a.lengthSq();
    if (c === 0)
      return e.add(t);
    if (c === i)
      return e;
    if (n === 0)
      return e.add(t).add(a);
    {
      const l = 1 + n * c / t.dot(a);
      return e.add(et.copy(t).multiplyScalar(l)).add(a.multiplyScalar(1 - n));
    }
  }
  _updateNearPlaneCorners() {
    if (ki(this._camera)) {
      const e = this._camera, t = e.near, n = e.getEffectiveFOV() * Sr, i = Math.tan(n * 0.5) * t, s = i * e.aspect;
      this._nearPlaneCorners[0].set(-s, -i, 0), this._nearPlaneCorners[1].set(s, -i, 0), this._nearPlaneCorners[2].set(s, i, 0), this._nearPlaneCorners[3].set(-s, i, 0);
    } else if (di(this._camera)) {
      const e = this._camera, t = 1 / e.zoom, n = e.left * t, i = e.right * t, s = e.top * t, o = e.bottom * t;
      this._nearPlaneCorners[0].set(n, s, 0), this._nearPlaneCorners[1].set(i, s, 0), this._nearPlaneCorners[2].set(i, o, 0), this._nearPlaneCorners[3].set(n, o, 0);
    }
  }
  _collisionTest() {
    let e = 1 / 0;
    if (!(this.colliderMeshes.length >= 1) || Bc(this._camera, "_collisionTest"))
      return e;
    const n = this._getTargetDirection(br);
    Vc.lookAt(Ed, n, this._camera.up);
    for (let i = 0; i < 4; i++) {
      const s = et.copy(this._nearPlaneCorners[i]);
      s.applyMatrix4(Vc);
      const o = Ns.addVectors(this._target, s);
      ia.set(o, n), ia.far = this._spherical.radius + 1;
      const a = ia.intersectObjects(this.colliderMeshes);
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
    Fs.makeEmpty(), e.traverseVisible((o) => {
      !o.isMesh || Fs.expandByObject(o);
    }), Fs.getCenter(i);
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
cn.install({ THREE: ZM });
const eS = new Oh();
let as, _a, It, Ut;
function tS() {
  const r = document.createElement("div");
  document.body.appendChild(r), _a = new uh(), as = new At(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    20
  ), It = new hh({
    antialias: !0,
    alpha: !0
  }), It.useLegacyLights = !1, It.outputColorSpace = Ue, It.toneMapping = Xl, It.toneMappingExposure = 1, It.shadowMap.enabled = !0, It.shadowMap.type = Vl, It.setPixelRatio(window.devicePixelRatio), It.setSize(window.innerWidth, window.innerHeight), It.xr.enabled = !0, It.setClearColor(1447453, 1), r.appendChild(It.domElement), Ut = new cn(as, It.domElement), Ut.mouseButtons.left = cn.ACTION.TRUCK, Ut.mouseButtons.right = cn.ACTION.ROTATE, Ut.mouseButtons.wheel = cn.ACTION.DOLLY, Ut.mouseButtons.middle = cn.ACTION.TRUCK, Ut.maxDistance = 10, Ut.minDistance = 0.01, Ut.maxPolarAngle = Math.PI / 2, Ut.verticalDragToForward = !0, Ut.infinityDolly = !1, window.addEventListener("resize", nS);
}
function nS() {
  as.aspect = window.innerWidth / window.innerHeight, as.updateProjectionMatrix(), It.setSize(window.innerWidth, window.innerHeight);
}
function iS() {
  It.setAnimationLoop(sS);
}
const ln = {
  shiftRight: !1,
  shiftLeft: !1,
  controlRight: !1,
  controlLeft: !1
}, Zp = () => {
  ln.shiftRight || ln.shiftLeft ? Ut.mouseButtons.left = cn.ACTION.ROTATE : ln.controlRight || ln.controlLeft ? Ut.mouseButtons.left = cn.ACTION.DOLLY : Ut.mouseButtons.left = cn.ACTION.TRUCK;
};
document.addEventListener("keydown", (r) => {
  r.code === "ShiftRight" && (ln.shiftRight = !0), r.code === "ShiftLeft" && (ln.shiftLeft = !0), r.code === "ControlRight" && (ln.controlRight = !0), r.code === "ControlLeft" && (ln.controlLeft = !0), Zp();
});
document.addEventListener("keyup", (r) => {
  r.code === "ShiftRight" && (ln.shiftRight = !1), r.code === "ShiftLeft" && (ln.shiftLeft = !1), r.code === "ControlRight" && (ln.controlRight = !1), r.code === "ControlLeft" && (ln.controlLeft = !1), Zp();
});
function sS() {
  const r = eS.getDelta();
  Ut.update(r), It.render(_a, as);
}
class rS {
  constructor(e) {
    this.registeredListeners = /* @__PURE__ */ new Map(), this.scene = e;
    const t = new Wp(), n = new J();
    if (oS()) {
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
        debugger;
        const a = s(o, It.domElement, as);
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
        n.x = s.clientX / window.innerWidth * 2 - 1, n.y = -(s.clientY / window.innerHeight) * 2 + 1, t.setFromCamera(n, as);
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
}
let Gc;
function Qn() {
  return _a || (tS(), iS()), Gc || (Gc = new rS(_a)), Gc;
}
function oS() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const da = window, Bh = da.ShadowRoot && (da.ShadyCSS === void 0 || da.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Kp = Symbol(), Rd = /* @__PURE__ */ new WeakMap();
class aS {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Kp)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Bh && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Rd.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Rd.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}
const cS = (r) => new aS(typeof r == "string" ? r : r + "", void 0, Kp), lS = (r, e) => {
  Bh ? r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach((t) => {
    const n = document.createElement("style"), i = da.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, r.appendChild(n);
  });
}, Cd = Bh ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules)
    t += n.cssText;
  return cS(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Wc;
const ya = window, Ld = ya.trustedTypes, hS = Ld ? Ld.emptyScript : "", Pd = ya.reactiveElementPolyfillSupport, Fl = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? hS : null;
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
} }, Jp = (r, e) => e !== r && (e == e || r == r), Xc = { attribute: !0, type: String, converter: Fl, reflect: !1, hasChanged: Jp };
class Bs extends HTMLElement {
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
  static createProperty(e, t = Xc) {
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
    return this.elementProperties.get(e) || Xc;
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
        t.unshift(Cd(i));
    } else
      e !== void 0 && t.push(Cd(e));
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
    return lS(t, this.constructor.elementStyles), t;
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
  _$EO(e, t, n = Xc) {
    var i;
    const s = this.constructor._$Ep(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const o = (((i = n.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? n.converter : Fl).toAttribute(t, n.type);
      this._$El = e, o == null ? this.removeAttribute(s) : this.setAttribute(s, o), this._$El = null;
    }
  }
  _$AK(e, t) {
    var n;
    const i = this.constructor, s = i._$Ev.get(e);
    if (s !== void 0 && this._$El !== s) {
      const o = i.getPropertyOptions(s), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0 ? o.converter : Fl;
      this._$El = s, this[s] = a.fromAttribute(t, o.type), this._$El = null;
    }
  }
  requestUpdate(e, t, n) {
    let i = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || Jp)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, n))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
Bs.finalized = !0, Bs.elementProperties = /* @__PURE__ */ new Map(), Bs.elementStyles = [], Bs.shadowRootOptions = { mode: "open" }, Pd == null || Pd({ ReactiveElement: Bs }), ((Wc = ya.reactiveElementVersions) !== null && Wc !== void 0 ? Wc : ya.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Yc;
const xa = window, tr = xa.trustedTypes, Id = tr ? tr.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, mi = `lit$${(Math.random() + "").slice(9)}$`, jp = "?" + mi, uS = `<${jp}>`, nr = document, qr = (r = "") => nr.createComment(r), $r = (r) => r === null || typeof r != "object" && typeof r != "function", Qp = Array.isArray, dS = (r) => Qp(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", wr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ud = /-->/g, Od = />/g, Gi = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Dd = /'/g, Nd = /"/g, em = /^(?:script|style|textarea|title)$/i, fS = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Ri = fS(1), ir = Symbol.for("lit-noChange"), Pt = Symbol.for("lit-nothing"), Fd = /* @__PURE__ */ new WeakMap(), Xs = nr.createTreeWalker(nr, 129, null, !1), pS = (r, e) => {
  const t = r.length - 1, n = [];
  let i, s = e === 2 ? "<svg>" : "", o = wr;
  for (let c = 0; c < t; c++) {
    const l = r[c];
    let h, u, d = -1, f = 0;
    for (; f < l.length && (o.lastIndex = f, u = o.exec(l), u !== null); )
      f = o.lastIndex, o === wr ? u[1] === "!--" ? o = Ud : u[1] !== void 0 ? o = Od : u[2] !== void 0 ? (em.test(u[2]) && (i = RegExp("</" + u[2], "g")), o = Gi) : u[3] !== void 0 && (o = Gi) : o === Gi ? u[0] === ">" ? (o = i != null ? i : wr, d = -1) : u[1] === void 0 ? d = -2 : (d = o.lastIndex - u[2].length, h = u[1], o = u[3] === void 0 ? Gi : u[3] === '"' ? Nd : Dd) : o === Nd || o === Dd ? o = Gi : o === Ud || o === Od ? o = wr : (o = Gi, i = void 0);
    const m = o === Gi && r[c + 1].startsWith("/>") ? " " : "";
    s += o === wr ? l + uS : d >= 0 ? (n.push(h), l.slice(0, d) + "$lit$" + l.slice(d) + mi + m) : l + mi + (d === -2 ? (n.push(void 0), c) : m);
  }
  const a = s + (r[t] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [Id !== void 0 ? Id.createHTML(a) : a, n];
};
class Zr {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let s = 0, o = 0;
    const a = e.length - 1, c = this.parts, [l, h] = pS(e, t);
    if (this.el = Zr.createElement(l, n), Xs.currentNode = this.el.content, t === 2) {
      const u = this.el.content, d = u.firstChild;
      d.remove(), u.append(...d.childNodes);
    }
    for (; (i = Xs.nextNode()) !== null && c.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const u = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(mi)) {
              const f = h[o++];
              if (u.push(d), f !== void 0) {
                const m = i.getAttribute(f.toLowerCase() + "$lit$").split(mi), _ = /([.?@])?(.*)/.exec(f);
                c.push({ type: 1, index: s, name: _[2], strings: m, ctor: _[1] === "." ? gS : _[1] === "?" ? yS : _[1] === "@" ? xS : ja });
              } else
                c.push({ type: 6, index: s });
            }
          for (const d of u)
            i.removeAttribute(d);
        }
        if (em.test(i.tagName)) {
          const u = i.textContent.split(mi), d = u.length - 1;
          if (d > 0) {
            i.textContent = tr ? tr.emptyScript : "";
            for (let f = 0; f < d; f++)
              i.append(u[f], qr()), Xs.nextNode(), c.push({ type: 2, index: ++s });
            i.append(u[d], qr());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === jp)
          c.push({ type: 2, index: s });
        else {
          let u = -1;
          for (; (u = i.data.indexOf(mi, u + 1)) !== -1; )
            c.push({ type: 7, index: s }), u += mi.length - 1;
        }
      s++;
    }
  }
  static createElement(e, t) {
    const n = nr.createElement("template");
    return n.innerHTML = e, n;
  }
}
function sr(r, e, t = r, n) {
  var i, s, o, a;
  if (e === ir)
    return e;
  let c = n !== void 0 ? (i = t._$Co) === null || i === void 0 ? void 0 : i[n] : t._$Cl;
  const l = $r(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== l && ((s = c == null ? void 0 : c._$AO) === null || s === void 0 || s.call(c, !1), l === void 0 ? c = void 0 : (c = new l(r), c._$AT(r, t, n)), n !== void 0 ? ((o = (a = t)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[n] = c : t._$Cl = c), c !== void 0 && (e = sr(r, c._$AS(r, e.values), c, n)), e;
}
class mS {
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
    const { el: { content: n }, parts: i } = this._$AD, s = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : nr).importNode(n, !0);
    Xs.currentNode = s;
    let o = Xs.nextNode(), a = 0, c = 0, l = i[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let h;
        l.type === 2 ? h = new lo(o, o.nextSibling, this, e) : l.type === 1 ? h = new l.ctor(o, l.name, l.strings, this, e) : l.type === 6 && (h = new vS(o, this, e)), this.u.push(h), l = i[++c];
      }
      a !== (l == null ? void 0 : l.index) && (o = Xs.nextNode(), a++);
    }
    return s;
  }
  p(e) {
    let t = 0;
    for (const n of this.u)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class lo {
  constructor(e, t, n, i) {
    var s;
    this.type = 2, this._$AH = Pt, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cm = (s = i == null ? void 0 : i.isConnected) === null || s === void 0 || s;
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
    e = sr(this, e, t), $r(e) ? e === Pt || e == null || e === "" ? (this._$AH !== Pt && this._$AR(), this._$AH = Pt) : e !== this._$AH && e !== ir && this.g(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : dS(e) ? this.k(e) : this.g(e);
  }
  O(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  g(e) {
    this._$AH !== Pt && $r(this._$AH) ? this._$AA.nextSibling.data = e : this.T(nr.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var t;
    const { values: n, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Zr.createElement(i.h, this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s)
      this._$AH.p(n);
    else {
      const o = new mS(s, this), a = o.v(this.options);
      o.p(n), this.T(a), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Fd.get(e.strings);
    return t === void 0 && Fd.set(e.strings, t = new Zr(e)), t;
  }
  k(e) {
    Qp(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const s of e)
      i === t.length ? t.push(n = new lo(this.O(qr()), this.O(qr()), this, this.options)) : n = t[i], n._$AI(s), i++;
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
class ja {
  constructor(e, t, n, i, s) {
    this.type = 1, this._$AH = Pt, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Pt;
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
      e = sr(this, e, t, 0), o = !$r(e) || e !== this._$AH && e !== ir, o && (this._$AH = e);
    else {
      const a = e;
      let c, l;
      for (e = s[0], c = 0; c < s.length - 1; c++)
        l = sr(this, a[n + c], t, c), l === ir && (l = this._$AH[c]), o || (o = !$r(l) || l !== this._$AH[c]), l === Pt ? e = Pt : e !== Pt && (e += (l != null ? l : "") + s[c + 1]), this._$AH[c] = l;
    }
    o && !i && this.j(e);
  }
  j(e) {
    e === Pt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "");
  }
}
class gS extends ja {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === Pt ? void 0 : e;
  }
}
const _S = tr ? tr.emptyScript : "";
class yS extends ja {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== Pt ? this.element.setAttribute(this.name, _S) : this.element.removeAttribute(this.name);
  }
}
class xS extends ja {
  constructor(e, t, n, i, s) {
    super(e, t, n, i, s), this.type = 5;
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = sr(this, e, t, 0)) !== null && n !== void 0 ? n : Pt) === ir)
      return;
    const i = this._$AH, s = e === Pt && i !== Pt || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, o = e !== Pt && (i === Pt || s);
    s && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
}
class vS {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    sr(this, e);
  }
}
const Bd = xa.litHtmlPolyfillSupport;
Bd == null || Bd(Zr, lo), ((Yc = xa.litHtmlVersions) !== null && Yc !== void 0 ? Yc : xa.litHtmlVersions = []).push("2.4.0");
const MS = (r, e, t) => {
  var n, i;
  const s = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
  let o = s._$litPart$;
  if (o === void 0) {
    const a = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
    s._$litPart$ = o = new lo(e.insertBefore(qr(), a), a, void 0, t != null ? t : {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var qc, $c;
class hn extends Bs {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = MS(t, this.renderRoot, this.renderOptions);
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
    return ir;
  }
}
hn.finalized = !0, hn._$litElement$ = !0, (qc = globalThis.litElementHydrateSupport) === null || qc === void 0 || qc.call(globalThis, { LitElement: hn });
const zd = globalThis.litElementPolyfillSupport;
zd == null || zd({ LitElement: hn });
(($c = globalThis.litElementVersions) !== null && $c !== void 0 ? $c : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ci = (r) => (e) => typeof e == "function" ? ((t, n) => (customElements.define(t, n), n))(r, e) : ((t, n) => {
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
const SS = (r, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(t) {
  t.createProperty(e.key, r);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(t) {
  t.createProperty(e.key, r);
} };
function tt(r) {
  return (e, t) => t !== void 0 ? ((n, i, s) => {
    i.constructor.createProperty(s, n);
  })(r, e, t) : SS(r, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Zc;
((Zc = window.HTMLSlotElement) === null || Zc === void 0 ? void 0 : Zc.prototype.assignedElements) != null;
var ES = Object.defineProperty, TS = Object.getOwnPropertyDescriptor, tm = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? TS(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && ES(e, t, i), i;
};
let rr = class extends hn {
  constructor() {
    super(...arguments), this.space = new He();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), Qn().scene.add(this.space);
  }
  render() {
    return Qn(), Ri``;
  }
};
tm([
  tt({ type: He })
], rr.prototype, "space", 2);
rr = tm([
  Ci("mv-space")
], rr);
function Hd(r, e) {
  if (e === Pf)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === pa || e === Ql) {
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
    if (e === pa)
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
class bS extends zt {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new LS(t);
    }), this.register(function(t) {
      return new BS(t);
    }), this.register(function(t) {
      return new zS(t);
    }), this.register(function(t) {
      return new HS(t);
    }), this.register(function(t) {
      return new IS(t);
    }), this.register(function(t) {
      return new US(t);
    }), this.register(function(t) {
      return new OS(t);
    }), this.register(function(t) {
      return new DS(t);
    }), this.register(function(t) {
      return new CS(t);
    }), this.register(function(t) {
      return new NS(t);
    }), this.register(function(t) {
      return new PS(t);
    }), this.register(function(t) {
      return new FS(t);
    }), this.register(function(t) {
      return new wS(t);
    }), this.register(function(t) {
      return new kS(t);
    }), this.register(function(t) {
      return new VS(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = er.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new un(this.manager);
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
      if (c.decode(new Uint8Array(e, 0, 4)) === nm) {
        try {
          o[Je.KHR_BINARY_GLTF] = new GS(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(o[Je.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new nE(s, {
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
          case Je.KHR_MATERIALS_UNLIT:
            o[u] = new RS();
            break;
          case Je.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new WS(s, this.dracoLoader);
            break;
          case Je.KHR_TEXTURE_TRANSFORM:
            o[u] = new XS();
            break;
          case Je.KHR_MESH_QUANTIZATION:
            o[u] = new YS();
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
function AS() {
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
const Je = {
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
class wS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
        l = new Ph(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Lh(h), l.distance = u;
        break;
      case "spot":
        l = new Ch(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, pi(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
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
class RS {
  constructor() {
    this.name = Je.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Qt;
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
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, Ue));
    }
    return Promise.all(i);
  }
}
class CS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class LS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Fn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new J(a, a);
    }
    return Promise.all(s);
  }
}
class PS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Fn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class IS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Fn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new he(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Ue)), o.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(s);
  }
}
class US {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Fn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(s);
  }
}
class OS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Fn;
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
class DS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Fn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class NS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Fn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new he(a[0], a[1], a[2]), o.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Ue)), Promise.all(s);
  }
}
class FS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Fn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(s);
  }
}
class BS {
  constructor(e) {
    this.parser = e, this.name = Je.KHR_TEXTURE_BASISU;
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
class zS {
  constructor(e) {
    this.parser = e, this.name = Je.EXT_TEXTURE_WEBP, this.isSupported = null;
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
class HS {
  constructor(e) {
    this.parser = e, this.name = Je.EXT_TEXTURE_AVIF, this.isSupported = null;
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
class kS {
  constructor(e) {
    this.name = Je.EXT_MESHOPT_COMPRESSION, this.parser = e;
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
class VS {
  constructor(e) {
    this.name = Je.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== on.TRIANGLES && l.mode !== on.TRIANGLE_STRIP && l.mode !== on.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], c = {};
    for (const l in o)
      a.push(this.parser.getDependency("accessor", o[l]).then((h) => (c[l] = h, c[l])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, f = [];
      for (const m of u) {
        const _ = new De(), g = new w(), p = new Ft(), v = new w(1, 1, 1), x = new ph(m.geometry, m.material, d);
        for (let y = 0; y < d; y++)
          c.TRANSLATION && g.fromBufferAttribute(c.TRANSLATION, y), c.ROTATION && p.fromBufferAttribute(c.ROTATION, y), c.SCALE && v.fromBufferAttribute(c.SCALE, y), x.setMatrixAt(y, _.compose(g, p, v));
        for (const y in c)
          y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && m.geometry.setAttribute(y, c[y]);
        He.prototype.copy.call(x, m), this.parser.assignFinalMaterial(x), f.push(x);
      }
      return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
    }));
  }
}
const nm = "glTF", Rr = 12, kd = { JSON: 1313821514, BIN: 5130562 };
class GS {
  constructor(e) {
    this.name = Je.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Rr), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== nm)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Rr, s = new DataView(e, Rr);
    let o = 0;
    for (; o < i; ) {
      const a = s.getUint32(o, !0);
      o += 4;
      const c = s.getUint32(o, !0);
      if (o += 4, c === kd.JSON) {
        const l = new Uint8Array(e, Rr + o, a);
        this.content = n.decode(l);
      } else if (c === kd.BIN) {
        const l = Rr + o;
        this.body = e.slice(l, l + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class WS {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Je.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, c = {}, l = {};
    for (const h in o) {
      const u = Bl[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in e.attributes) {
      const u = Bl[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], f = Ys[d.componentType];
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
class XS {
  constructor() {
    this.name = Je.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class YS {
  constructor() {
    this.name = Je.KHR_MESH_QUANTIZATION;
  }
}
class im extends hr {
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
      const S = o[_ + y + a], E = o[_ + y + c] * h, b = o[m + y + a], L = o[m + y] * h;
      s[y] = v * S + x * E + g * b + p * L;
    }
    return s;
  }
}
const qS = new Ft();
class $S extends im {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return qS.fromArray(s).normalize().toArray(s), s;
  }
}
const on = {
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
}, Ys = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Vd = {
  9728: _t,
  9729: ut,
  9984: Fr,
  9985: Ea,
  9986: Vs,
  9987: On
}, Gd = {
  33071: Ot,
  33648: qs,
  10497: Mi
}, Kc = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Bl = {
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
}, ui = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, ZS = {
  CUBICSPLINE: void 0,
  LINEAR: ns,
  STEP: Zs
}, Jc = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function KS(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new cs({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Un
  })), r.DefaultMaterial;
}
function Wi(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function pi(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function JS(r, e, t) {
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
function jS(r, e) {
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
function QS(r) {
  let e;
  const t = r.extensions && r.extensions[Je.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + jc(t.attributes) : e = r.indices + ":" + jc(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + jc(r.targets[n]);
  return e;
}
function jc(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function zl(r) {
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
function eE(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const tE = new De();
class nE {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new AS(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Op(this.options.manager) : this.textureLoader = new Hp(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new un(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      Wi(s, a, i), pi(a, i), Promise.all(n._invokeAll(function(c) {
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
      return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, o) {
      n.load(er.resolveURL(t.uri, i.path), s, void 0, function() {
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
      const o = Kc[i.type], a = Ys[i.componentType], c = i.normalized === !0, l = new a(i.count * o);
      return Promise.resolve(new st(l, o, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(o) {
      const a = o[0], c = Kc[i.type], l = Ys[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, m = i.normalized === !0;
      let _, g;
      if (f && f !== u) {
        const p = Math.floor(d / f), v = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let x = t.cache.get(v);
        x || (_ = new l(a, p * f, i.count * f / h), x = new io(_, f / h), t.cache.add(v, x)), g = new Si(x, c, d % f / h, m);
      } else
        a === null ? _ = new l(i.count * c) : _ = new l(a, d, i.count * c), g = new st(_, c, m);
      if (i.sparse !== void 0) {
        const p = Kc.SCALAR, v = Ys[i.sparse.indices.componentType], x = i.sparse.indices.byteOffset || 0, y = i.sparse.values.byteOffset || 0, S = new v(o[1], x, i.sparse.count * p), E = new l(o[2], y, i.sparse.count * c);
        a !== null && (g = new st(g.array.slice(), g.itemSize, g.normalized));
        for (let b = 0, L = S.length; b < L; b++) {
          const M = S[b];
          if (g.setX(M, E[b * c]), c >= 2 && g.setY(M, E[b * c + 1]), c >= 3 && g.setZ(M, E[b * c + 2]), c >= 4 && g.setW(M, E[b * c + 3]), c >= 5)
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
      return h.magFilter = Vd[d.magFilter] || ut, h.minFilter = Vd[d.minFilter] || On, h.wrapS = Gd[d.wrapS] || Mi, h.wrapT = Gd[d.wrapT] || Mi, i.associations.set(h, { textures: e }), h;
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
        }), t.load(er.resolveURL(u, s.path), m, void 0, f);
      });
    }).then(function(u) {
      return l === !0 && a.revokeObjectURL(c), u.userData.mimeType = o.mimeType || eE(o.uri), u;
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
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), s.extensions[Je.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Je.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const c = s.associations.get(o);
          o = s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), s.associations.set(o, c);
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
      c || (c = new Oa(), wt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new Bt(), wt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(a, c)), n = c;
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
    return cs;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let o;
    const a = {}, c = s.extensions || {}, l = [];
    if (c[Je.KHR_MATERIALS_UNLIT]) {
      const u = i[Je.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), l.push(u.extendParams(a, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (a.color = new he(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, Ue)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    s.doubleSided === !0 && (a.side = _n);
    const h = s.alphaMode || Jc.OPAQUE;
    if (h === Jc.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === Jc.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && o !== Qt && (l.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new J(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return s.occlusionTexture !== void 0 && o !== Qt && (l.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && o !== Qt && (a.emissive = new he().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && o !== Qt && l.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, Ue)), Promise.all(l).then(function() {
      const u = new o(a);
      return s.name && (u.name = s.name), pi(u, s), t.associations.set(u, { materials: e }), s.extensions && Wi(i, u, s), u;
    });
  }
  createUniqueName(e) {
    const t = je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(a) {
      return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(c) {
        return Wd(c, a, t);
      });
    }
    const o = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = QS(l), u = i[h];
      if (u)
        o.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[Je.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = Wd(new Ye(), l, t), i[h] = { primitive: l, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], o = s.primitives, a = [];
    for (let c = 0, l = o.length; c < l; c++) {
      const h = o[c].material === void 0 ? KS(this.cache) : this.getDependency("material", o[c].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let f = 0, m = h.length; f < m; f++) {
        const _ = h[f], g = o[f];
        let p;
        const v = l[f];
        if (g.mode === on.TRIANGLES || g.mode === on.TRIANGLE_STRIP || g.mode === on.TRIANGLE_FAN || g.mode === void 0)
          p = s.isSkinnedMesh === !0 ? new fh(_, v) : new bt(_, v), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), g.mode === on.TRIANGLE_STRIP ? p.geometry = Hd(p.geometry, Ql) : g.mode === on.TRIANGLE_FAN && (p.geometry = Hd(p.geometry, pa));
        else if (g.mode === on.LINES)
          p = new Sn(_, v);
        else if (g.mode === on.LINE_STRIP)
          p = new ti(_, v);
        else if (g.mode === on.LINE_LOOP)
          p = new mh(_, v);
        else if (g.mode === on.POINTS)
          p = new gh(_, v);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && jS(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), pi(p, s), g.extensions && Wi(i, p, g), t.assignFinalMaterial(p), u.push(p);
      }
      for (let f = 0, m = u.length; f < m; f++)
        t.associations.set(u[f], {
          meshes: e,
          primitives: f
        });
      if (u.length === 1)
        return s.extensions && Wi(i, u[0], s), u[0];
      const d = new Zn();
      s.extensions && Wi(i, d, s), t.associations.set(d, { meshes: e });
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
    return n.type === "perspective" ? t = new At(Xf.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new no(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), pi(t, n), Promise.resolve(t);
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
          const d = new De();
          s !== null && d.fromArray(s.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new so(a, c);
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
        const y = d[v], S = f[v], E = m[v], b = _[v], L = g[v];
        if (y === void 0)
          continue;
        y.updateMatrix && y.updateMatrix();
        const M = n._createAnimationTracks(y, S, E, b, L);
        if (M)
          for (let A = 0; A < M.length; A++)
            p.push(M[A]);
      }
      return new Qs(s, void 0, p);
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
        !f.isSkinnedMesh || f.bind(d, tE);
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
      if (s.isBone === !0 ? h = new Ua() : l.length > 1 ? h = new Zn() : l.length === 1 ? h = l[0] : h = new He(), h !== l[0])
        for (let u = 0, d = l.length; u < d; u++)
          h.add(l[u]);
      if (s.name && (h.userData.name = s.name, h.name = o), pi(h, s), s.extensions && Wi(n, h, s), s.matrix !== void 0) {
        const u = new De();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Zn();
    n.name && (s.name = i.createUniqueName(n.name)), pi(s, n), n.extensions && Wi(t, s, n);
    const o = n.nodes || [], a = [];
    for (let c = 0, l = o.length; c < l; c++)
      a.push(i.getDependency("node", o[c]));
    return Promise.all(a).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        s.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations)
          (d instanceof wt || d instanceof ft) && u.set(d, f);
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
    ui[s.path] === ui.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
    }) : c.push(a);
    let l;
    switch (ui[s.path]) {
      case ui.weights:
        l = ss;
        break;
      case ui.rotation:
        l = Ei;
        break;
      case ui.position:
      case ui.scale:
        l = rs;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = ss;
            break;
          case 2:
          case 3:
          default:
            l = rs;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? ZS[i.interpolation] : ns, u = this._getArrayFromAccessor(n);
    for (let d = 0, f = c.length; d < f; d++) {
      const m = new l(
        c[d] + "." + ui[s.path],
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
      const n = zl(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, o = t.length; s < o; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Ei ? $S : im;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function iE(r, e, t) {
  const n = e.attributes, i = new Mn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], c = a.min, l = a.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new w(c[0], c[1], c[2]),
        new w(l[0], l[1], l[2])
      ), a.normalized) {
        const h = zl(Ys[a.componentType]);
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
            const _ = zl(Ys[d.componentType]);
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
  const o = new dn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = o;
}
function Wd(r, e, t) {
  const n = e.attributes, i = [];
  function s(o, a) {
    return t.getDependency("accessor", o).then(function(c) {
      r.setAttribute(a, c);
    });
  }
  for (const o in n) {
    const a = Bl[o] || o.toLowerCase();
    a in r.attributes || i.push(s(n[o], a));
  }
  if (e.indices !== void 0 && !r.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      r.setIndex(a);
    });
    i.push(o);
  }
  return pi(r, e), iE(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? JS(r, e.targets, t) : r;
  });
}
function zh(r, e) {
  let t = r.parentElement;
  for (; t !== null; ) {
    if (e(t))
      return t;
    t = t.parentElement;
  }
  return null;
}
var sE = Object.defineProperty, rE = Object.getOwnPropertyDescriptor, us = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? rE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && sE(e, t, i), i;
};
let ni = class extends hn {
  constructor() {
    super(...arguments), this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new He();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: r } = this, e = zh(
      this,
      (f) => f instanceof rr
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space;
    new bS().load(this.src, (f) => {
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
    return Ri``;
  }
};
us([
  tt({ type: String, attribute: "src" })
], ni.prototype, "src", 2);
us([
  tt({ type: String, attribute: "position" })
], ni.prototype, "positon", 2);
us([
  tt({ type: String, attribute: "rotation" })
], ni.prototype, "rotation", 2);
us([
  tt({ type: String, attribute: "scale" })
], ni.prototype, "scale", 2);
us([
  tt({ type: Boolean })
], ni.prototype, "isLoaded", 2);
us([
  tt({ type: He })
], ni.prototype, "space", 2);
ni = us([
  Ci("mv-model")
], ni);
var oE = Object.defineProperty, aE = Object.getOwnPropertyDescriptor, sm = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? aE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && oE(e, t, i), i;
};
let Hl = class extends hn {
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
    const r = this.children, e = Qn();
    for (let t = 0; t < r.length; t++) {
      const n = r[t];
      n instanceof ni && n.addEventListener("loaded", (i) => {
        const s = i.detail.model;
        e.registerInteractiveObject(s, this.onNavigate);
      });
    }
  }
  render() {
    return Ri``;
  }
};
sm([
  tt({ type: String, attribute: "href" })
], Hl.prototype, "href", 2);
Hl = sm([
  Ci("mv-link")
], Hl);
var cE = Object.defineProperty, lE = Object.getOwnPropertyDescriptor, Hh = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? lE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && cE(e, t, i), i;
};
let Kr = class extends hn {
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
    return Ri``;
  }
  registerInput(r) {
    this.inputs.push(r);
  }
  submit() {
    const r = this.inputs.reduce((t, n) => (n.name === "" || (t[n.name] = n.value), t), {});
    Qn().addWorldInfoToForm(r);
    const e = document.createElement("form");
    e.style.display = "none", e.method = this.method, e.action = this.action;
    for (const t in r) {
      const n = r[t], i = document.createElement("input");
      i.type = "hidden", i.name = t, i.value = n, e.appendChild(i);
    }
    document.body.appendChild(e), e.submit();
  }
};
Hh([
  tt({ type: String, attribute: "action" })
], Kr.prototype, "action", 2);
Hh([
  tt({ type: String, attribute: "method" })
], Kr.prototype, "method", 2);
Kr = Hh([
  Ci("mv-form")
], Kr);
var hE = Object.defineProperty, uE = Object.getOwnPropertyDescriptor, Bn = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? uE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && hE(e, t, i), i;
};
let vn = class extends hn {
  constructor() {
    super(...arguments), this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new He(), this.type = "submit", this.name = "", this.value = "";
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: r } = this;
    let e = null, t = this.parentElement;
    for (; t !== null; ) {
      if (t instanceof rr) {
        e = t.space;
        break;
      }
      t = t.parentElement;
    }
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const n = new bt(
      new bi(1, 1, 1),
      new cs({
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
    const f = zh(
      this,
      (m) => m instanceof Kr
    );
    if (f === null)
      throw new Error("No parent form found for mv-model");
    this.type === "submit" ? Qn().registerInteractiveObject(n, () => {
      f.submit();
    }) : this.type === "checkbox" ? (this.value === "" && (this.value = "false"), Qn().registerInteractiveObject(n, () => {
      this.value === "true" ? (this.value = "false", n.material.color.setHex(6710886)) : (this.value = "true", n.material.color.setHex(16777215));
    }), f.registerInput(this)) : this.type === "text" && (Qn().registerInteractiveObject(n, () => {
      var m;
      this.value = (m = window.prompt("Enter text", this.value)) != null ? m : "", this.value === "" ? n.material.color.setHex(6710886) : n.material.color.setHex(16777215);
    }), f.registerInput(this));
  }
  render() {
    return Ri``;
  }
};
Bn([
  tt({ type: String, attribute: "src" })
], vn.prototype, "src", 2);
Bn([
  tt({ type: String, attribute: "position" })
], vn.prototype, "positon", 2);
Bn([
  tt({ type: String, attribute: "rotation" })
], vn.prototype, "rotation", 2);
Bn([
  tt({ type: String, attribute: "scale" })
], vn.prototype, "scale", 2);
Bn([
  tt({ type: Boolean })
], vn.prototype, "isLoaded", 2);
Bn([
  tt({ type: He })
], vn.prototype, "space", 2);
Bn([
  tt({ type: String, attribute: "type" })
], vn.prototype, "type", 2);
Bn([
  tt({ type: String, attribute: "name" })
], vn.prototype, "name", 2);
Bn([
  tt({ type: String, attribute: "value" })
], vn.prototype, "value", 2);
vn = Bn([
  Ci("mv-input")
], vn);
class dE extends oo {
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
class fE extends zt {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new un(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      const c = s.parse(JSON.parse(a));
      t && t(c);
    }, n, i);
  }
  parse(e) {
    return new pE(e);
  }
}
class pE {
  constructor(e) {
    this.isFont = !0, this.type = "Font", this.data = e;
  }
  generateShapes(e, t = 100) {
    const n = [], i = mE(e, t, this.data);
    for (let s = 0, o = i.length; s < o; s++)
      n.push(...i[s].toShapes());
    return n;
  }
}
function mE(r, e, t) {
  const n = Array.from(r), i = e / t.resolution, s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = [];
  let a = 0, c = 0;
  for (let l = 0; l < n.length; l++) {
    const h = n[l];
    if (h === `
`)
      a = 0, c -= s;
    else {
      const u = gE(h, i, a, c, t);
      a += u.offsetX, o.push(u.path);
    }
  }
  return o;
}
function gE(r, e, t, n, i) {
  const s = i.glyphs[r] || i.glyphs["?"];
  if (!s) {
    console.error('THREE.Font: character "' + r + '" does not exists in font family ' + i.familyName + ".");
    return;
  }
  const o = new Yp();
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
var _E = Object.defineProperty, yE = Object.getOwnPropertyDescriptor, si = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? yE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && _E(e, t, i), i;
};
let Nn = class extends hn {
  constructor() {
    super(...arguments), this.for = "", this.text = "", this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new He();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: r } = this, e = zh(
      this,
      (f) => f instanceof rr
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space;
    new fE().load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (f) => {
        const m = new dE(this.text, {
          font: f,
          size: 1,
          height: 0.01
        }), _ = new cs({
          color: 16777215
        }), g = new bt(m, _);
        g.position.y = -0.5, r.add(g);
      }
    );
    const [i, s, o] = this.positon.split(",").map((f) => parseFloat(f)), [a, c, l] = this.rotation.split(",").map((f) => parseFloat(f)), [h, u, d] = this.scale.split(",").map((f) => parseFloat(f));
    r.position.x = i, r.position.y = s, r.position.z = o, r.rotation.x = a, r.rotation.y = c, r.rotation.z = l, r.scale.x = h, r.scale.y = u, r.scale.z = d, t.add(r);
  }
  render() {
    return Ri``;
  }
};
si([
  tt({ type: String, attribute: "for" })
], Nn.prototype, "for", 2);
si([
  tt({ type: String, attribute: "text" })
], Nn.prototype, "text", 2);
si([
  tt({ type: String, attribute: "src" })
], Nn.prototype, "src", 2);
si([
  tt({ type: String, attribute: "position" })
], Nn.prototype, "positon", 2);
si([
  tt({ type: String, attribute: "rotation" })
], Nn.prototype, "rotation", 2);
si([
  tt({ type: String, attribute: "scale" })
], Nn.prototype, "scale", 2);
si([
  tt({ type: Boolean })
], Nn.prototype, "isLoaded", 2);
si([
  tt({ type: He })
], Nn.prototype, "space", 2);
Nn = si([
  Ci("mv-label")
], Nn);
var xE = Object.defineProperty, vE = Object.getOwnPropertyDescriptor, Qa = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? vE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && xE(e, t, i), i;
};
let Jr = class extends hn {
  constructor() {
    super(...arguments), this.type = "", this.color = "", this.intensity = 1;
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    if (super.connectedCallback(), this.type === "ambient") {
      const r = Qn().scene, e = new Ih(this.color, this.intensity);
      r.add(e);
    }
  }
  render() {
    return Ri``;
  }
};
Qa([
  tt({ type: String, attribute: "type" })
], Jr.prototype, "type", 2);
Qa([
  tt({ type: String, attribute: "color" })
], Jr.prototype, "color", 2);
Qa([
  tt({ type: String, attribute: "intensity" })
], Jr.prototype, "intensity", 2);
Jr = Qa([
  Ci("mv-light")
], Jr);
var ME = Object.defineProperty, SE = Object.getOwnPropertyDescriptor, kh = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? SE(e, t) : e, s = r.length - 1, o; s >= 0; s--)
    (o = r[s]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && ME(e, t, i), i;
};
let va = class extends hn {
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
    Qn().moveCameraAndLook(r, e);
  }
  render() {
    return Ri``;
  }
};
kh([
  tt({ type: String, attribute: "lookat" })
], va.prototype, "lookat", 2);
kh([
  tt({ type: String, attribute: "position" })
], va.prototype, "position", 2);
va = kh([
  Ci("mv-camera")
], va);
