(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? r.credentials = "include" : i.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const $o = "155", pn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Rn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Bh = 0, ya = 1, zh = 2, Cl = 1, Ll = 2, fn = 3, _n = 0, wt = 1, jt = 2, Dn = 0, Di = 1, Ma = 2, Sa = 3, Ea = 4, Hh = 5, Ci = 100, kh = 101, Gh = 102, Ta = 103, Aa = 104, Vh = 200, Wh = 201, Xh = 202, $h = 203, Pl = 204, Il = 205, qh = 206, jh = 207, Yh = 208, Kh = 209, Zh = 210, Jh = 0, Qh = 1, eu = 2, bo = 3, tu = 4, nu = 5, iu = 6, su = 7, Dl = 0, ru = 1, ou = 2, Un = 0, au = 1, cu = 2, lu = 3, Ul = 4, hu = 5, Nl = 300, Bi = 301, zi = 302, wo = 303, Ro = 304, Mr = 306, Hi = 1e3, Ut = 1001, mr = 1002, ft = 1003, Co = 1004, ur = 1005, At = 1006, Ol = 1007, ti = 1008, Nn = 1009, uu = 1010, du = 1011, qo = 1012, Fl = 1013, In = 1014, mn = 1015, ys = 1016, Bl = 1017, zl = 1018, Yn = 1020, fu = 1021, Nt = 1023, pu = 1024, mu = 1025, Kn = 1026, ki = 1027, gu = 1028, Hl = 1029, _u = 1030, kl = 1031, Gl = 1033, Ir = 33776, Dr = 33777, Ur = 33778, Nr = 33779, ba = 35840, wa = 35841, Ra = 35842, Ca = 35843, vu = 36196, La = 37492, Pa = 37496, Ia = 37808, Da = 37809, Ua = 37810, Na = 37811, Oa = 37812, Fa = 37813, Ba = 37814, za = 37815, Ha = 37816, ka = 37817, Ga = 37818, Va = 37819, Wa = 37820, Xa = 37821, Or = 36492, xu = 36283, $a = 36284, qa = 36285, ja = 36286, Ms = 2300, Gi = 2301, Fr = 2302, Ya = 2400, Ka = 2401, Za = 2402, yu = 2500, Mu = 0, Vl = 1, Lo = 2, Wl = 3e3, Zn = 3001, Su = 3200, Eu = 3201, Xl = 0, Tu = 1, Jn = "", Pe = "srgb", Zt = "srgb-linear", $l = "display-p3", Br = 7680, Au = 519, bu = 512, wu = 513, Ru = 514, Cu = 515, Lu = 516, Pu = 517, Iu = 518, Du = 519, Po = 35044, Ja = "300 es", Io = 1035, gn = 2e3, gr = 2001;
class oi {
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
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const gt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Qa = 1234567;
const ms = Math.PI / 180, Vi = 180 / Math.PI;
function Ot() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (gt[s & 255] + gt[s >> 8 & 255] + gt[s >> 16 & 255] + gt[s >> 24 & 255] + "-" + gt[e & 255] + gt[e >> 8 & 255] + "-" + gt[e >> 16 & 15 | 64] + gt[e >> 24 & 255] + "-" + gt[t & 63 | 128] + gt[t >> 8 & 255] + "-" + gt[t >> 16 & 255] + gt[t >> 24 & 255] + gt[n & 255] + gt[n >> 8 & 255] + gt[n >> 16 & 255] + gt[n >> 24 & 255]).toLowerCase();
}
function lt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function jo(s, e) {
  return (s % e + e) % e;
}
function Uu(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Nu(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function gs(s, e, t) {
  return (1 - t) * s + t * e;
}
function Ou(s, e, t, n) {
  return gs(s, e, 1 - Math.exp(-t * n));
}
function Fu(s, e = 1) {
  return e - Math.abs(jo(s, e * 2) - e);
}
function Bu(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function zu(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Hu(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function ku(s, e) {
  return s + Math.random() * (e - s);
}
function Gu(s) {
  return s * (0.5 - Math.random());
}
function Vu(s) {
  s !== void 0 && (Qa = s);
  let e = Qa += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Wu(s) {
  return s * ms;
}
function Xu(s) {
  return s * Vi;
}
function Do(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function ql(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function _r(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function $u(s, e, t, n, i) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), c = o(t / 2), l = r((e + n) / 2), h = o((e + n) / 2), u = r((e - n) / 2), d = o((e - n) / 2), f = r((n - e) / 2), g = o((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(a * h, c * u, c * d, a * l);
      break;
    case "YZY":
      s.set(c * d, a * h, c * u, a * l);
      break;
    case "ZXZ":
      s.set(c * u, c * d, a * h, a * l);
      break;
    case "XZX":
      s.set(a * h, c * g, c * f, a * l);
      break;
    case "YXY":
      s.set(c * f, a * h, c * g, a * l);
      break;
    case "ZYZ":
      s.set(c * g, c * f, a * h, a * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Yt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ze(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const jl = {
  DEG2RAD: ms,
  RAD2DEG: Vi,
  generateUUID: Ot,
  clamp: lt,
  euclideanModulo: jo,
  mapLinear: Uu,
  inverseLerp: Nu,
  lerp: gs,
  damp: Ou,
  pingpong: Fu,
  smoothstep: Bu,
  smootherstep: zu,
  randInt: Hu,
  randFloat: ku,
  randFloatSpread: Gu,
  seededRandom: Vu,
  degToRad: Wu,
  radToDeg: Xu,
  isPowerOfTwo: Do,
  ceilPowerOfTwo: ql,
  floorPowerOfTwo: _r,
  setQuaternionFromProperEuler: $u,
  normalize: Ze,
  denormalize: Yt
};
class ce {
  constructor(e = 0, t = 0) {
    ce.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    return Math.acos(lt(n, -1, 1));
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
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class He {
  constructor(e, t, n, i, r, o, a, c, l) {
    He.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, o, a, c, l);
  }
  set(e, t, n, i, r, o, a, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
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
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], g = n[8], _ = i[0], m = i[3], p = i[6], S = i[1], v = i[4], y = i[7], w = i[2], L = i[5], A = i[8];
    return r[0] = o * _ + a * S + c * w, r[3] = o * m + a * v + c * L, r[6] = o * p + a * y + c * A, r[1] = l * _ + h * S + u * w, r[4] = l * m + h * v + u * L, r[7] = l * p + h * y + u * A, r[2] = d * _ + f * S + g * w, r[5] = d * m + f * v + g * L, r[8] = d * p + f * y + g * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
    return t * o * h - t * a * l - n * r * h + n * a * c + i * r * l - i * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = h * o - a * l, d = a * c - h * r, f = l * r - o * c, g = t * u + n * d + i * f;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * l - h * n) * _, e[2] = (a * n - i * o) * _, e[3] = d * _, e[4] = (h * t - i * c) * _, e[5] = (i * r - a * t) * _, e[6] = f * _, e[7] = (n * c - l * t) * _, e[8] = (o * t - n * r) * _, this;
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
  setUvTransform(e, t, n, i, r, o, a) {
    const c = Math.cos(r), l = Math.sin(r);
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
    return this.premultiply(zr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(zr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(zr.makeTranslation(e, t)), this;
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
const zr = /* @__PURE__ */ new He();
function Yl(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535)
      return !0;
  return !1;
}
function Ss(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
const ec = {};
function _s(s) {
  s in ec || (ec[s] = !0, console.warn(s));
}
function Ui(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Hr(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const qu = /* @__PURE__ */ new He().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), ju = /* @__PURE__ */ new He().fromArray([
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
function Yu(s) {
  return s.convertSRGBToLinear().applyMatrix3(ju);
}
function Ku(s) {
  return s.applyMatrix3(qu).convertLinearToSRGB();
}
const Zu = {
  [Zt]: (s) => s,
  [Pe]: (s) => s.convertSRGBToLinear(),
  [$l]: Yu
}, Ju = {
  [Zt]: (s) => s,
  [Pe]: (s) => s.convertLinearToSRGB(),
  [$l]: Ku
}, Ft = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(s) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !s;
  },
  get workingColorSpace() {
    return Zt;
  },
  set workingColorSpace(s) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(s, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return s;
    const n = Zu[e], i = Ju[t];
    if (n === void 0 || i === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return i(n(s));
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this.workingColorSpace);
  }
};
let ui;
class Kl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      ui === void 0 && (ui = Ss("canvas")), ui.width = e.width, ui.height = e.height;
      const n = ui.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ui;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ss("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++)
        r[o] = Ui(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ui(t[n] / 255) * 255) : t[n] = Ui(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Qu = 0;
class Zl {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Qu++ }), this.uuid = Ot(), this.data = e, this.version = 0;
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
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? r.push(kr(i[o].image)) : r.push(kr(i[o]));
      } else
        r = kr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function kr(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Kl.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ed = 0;
class mt extends oi {
  constructor(e = mt.DEFAULT_IMAGE, t = mt.DEFAULT_MAPPING, n = Ut, i = Ut, r = At, o = ti, a = Nt, c = Nn, l = mt.DEFAULT_ANISOTROPY, h = Jn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ed++ }), this.uuid = Ot(), this.name = "", this.source = new Zl(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new ce(0, 0), this.repeat = new ce(1, 1), this.center = new ce(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new He(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === Zn ? Pe : Jn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== Nl)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Hi:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ut:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case mr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Hi:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ut:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case mr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return _s("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Pe ? Zn : Wl;
  }
  set encoding(e) {
    _s("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Zn ? Pe : Jn;
  }
}
mt.DEFAULT_IMAGE = null;
mt.DEFAULT_MAPPING = Nl;
mt.DEFAULT_ANISOTROPY = 1;
class Qe {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Qe.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this;
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
    let t, n, i, r;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], g = c[9], _ = c[2], m = c[6], p = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (l + 1) / 2, y = (f + 1) / 2, w = (p + 1) / 2, L = (h + d) / 4, A = (u + _) / 4, N = (g + m) / 4;
      return v > y && v > w ? v < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(v), i = L / n, r = A / n) : y > w ? y < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(y), n = L / i, r = N / i) : w < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(w), n = A / r, i = N / r), this.set(n, i, r, t), this;
    }
    let S = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (m - g) / S, this.y = (u - _) / S, this.z = (d - h) / S, this.w = Math.acos((l + f + p - 1) / 2), this;
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
class td extends oi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Qe(0, 0, e, t), this.scissorTest = !1, this.viewport = new Qe(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (_s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Zn ? Pe : Jn), this.texture = new mt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : At, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
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
    return this.texture.source = new Zl(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ni extends td {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Jl extends mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ft, this.minFilter = ft, this.wrapR = Ut, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class nd extends mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ft, this.minFilter = ft, this.wrapR = Ut, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Jt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[o + 0], f = r[o + 1], g = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = f, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || c !== d || l !== f || h !== g) {
      let m = 1 - a;
      const p = c * d + l * f + h * g + u * _, S = p >= 0 ? 1 : -1, v = 1 - p * p;
      if (v > Number.EPSILON) {
        const w = Math.sqrt(v), L = Math.atan2(w, p * S);
        m = Math.sin(m * L) / w, a = Math.sin(a * L) / w;
      }
      const y = a * S;
      if (c = c * m + d * y, l = l * m + f * y, h = h * m + g * y, u = u * m + _ * y, m === 1 - a) {
        const w = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= w, l *= w, h *= w, u *= w;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], f = r[o + 2], g = r[o + 3];
    return e[t] = a * g + h * u + c * f - l * d, e[t + 1] = c * g + h * d + l * u - a * f, e[t + 2] = l * g + h * f + a * d - c * u, e[t + 3] = h * g - a * u - c * d - l * f, e;
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
    const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), u = a(r / 2), d = c(n / 2), f = c(i / 2), g = c(r / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "YXZ":
        this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g;
        break;
      case "ZXY":
        this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "ZYX":
        this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g;
        break;
      case "YZX":
        this._x = d * h * u + l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "XZY":
        this._x = d * h * u - l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u + d * f * g;
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
    const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - c) * f, this._y = (r - l) * f, this._z = (o - i) * f;
    } else if (n > a && n > u) {
      const f = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - c) / f, this._x = 0.25 * f, this._y = (i + o) / f, this._z = (r + l) / f;
    } else if (a > u) {
      const f = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - l) / f, this._x = (i + o) / f, this._y = 0.25 * f, this._z = (c + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / f, this._x = (r + l) / f, this._y = (c + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(lt(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * a + i * l - r * c, this._y = i * h + o * c + r * a - n * l, this._z = r * h + o * l + n * c - i * a, this._w = o * h - n * a - i * c - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, r = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = r, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
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
class P {
  constructor(e = 0, t = 0, n = 0) {
    P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(tc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(tc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * i - a * n, h = c * n + a * t - r * i, u = c * i + r * n - o * t, d = -r * t - o * n - a * i;
    return this.x = l * c + d * -r + h * -a - u * -o, this.y = h * c + d * -o + u * -r - l * -a, this.z = u * c + d * -a + l * -o - h * -r, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
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
    const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = i * c - r * a, this.y = r * o - n * c, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Gr.copy(this).projectOnVector(e), this.sub(Gr);
  }
  reflect(e) {
    return this.sub(Gr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(lt(n, -1, 1));
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
const Gr = /* @__PURE__ */ new P(), tc = /* @__PURE__ */ new Jt();
class xn {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(an.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(an.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = an.copy(t).multiplyScalar(0.5);
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
      e.boundingBox === null && e.computeBoundingBox(), di.copy(e.boundingBox), di.applyMatrix4(e.matrixWorld), this.union(di);
    else {
      const i = e.geometry;
      if (i !== void 0)
        if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
          const r = i.attributes.position;
          for (let o = 0, a = r.count; o < a; o++)
            an.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld), this.expandByPoint(an);
        } else
          i.boundingBox === null && i.computeBoundingBox(), di.copy(i.boundingBox), di.applyMatrix4(e.matrixWorld), this.union(di);
    }
    const n = e.children;
    for (let i = 0, r = n.length; i < r; i++)
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
    return this.clampPoint(e.center, an), an.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(rs), Os.subVectors(this.max, rs), fi.subVectors(e.a, rs), pi.subVectors(e.b, rs), mi.subVectors(e.c, rs), Sn.subVectors(pi, fi), En.subVectors(mi, pi), zn.subVectors(fi, mi);
    let t = [
      0,
      -Sn.z,
      Sn.y,
      0,
      -En.z,
      En.y,
      0,
      -zn.z,
      zn.y,
      Sn.z,
      0,
      -Sn.x,
      En.z,
      0,
      -En.x,
      zn.z,
      0,
      -zn.x,
      -Sn.y,
      Sn.x,
      0,
      -En.y,
      En.x,
      0,
      -zn.y,
      zn.x,
      0
    ];
    return !Vr(t, fi, pi, mi, Os) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Vr(t, fi, pi, mi, Os)) ? !1 : (Fs.crossVectors(Sn, En), t = [Fs.x, Fs.y, Fs.z], Vr(t, fi, pi, mi, Os));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, an).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(an).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (on[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), on[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), on[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), on[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), on[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), on[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), on[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), on[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(on), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const on = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], an = /* @__PURE__ */ new P(), di = /* @__PURE__ */ new xn(), fi = /* @__PURE__ */ new P(), pi = /* @__PURE__ */ new P(), mi = /* @__PURE__ */ new P(), Sn = /* @__PURE__ */ new P(), En = /* @__PURE__ */ new P(), zn = /* @__PURE__ */ new P(), rs = /* @__PURE__ */ new P(), Os = /* @__PURE__ */ new P(), Fs = /* @__PURE__ */ new P(), Hn = /* @__PURE__ */ new P();
function Vr(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    Hn.fromArray(s, r);
    const a = i.x * Math.abs(Hn.x) + i.y * Math.abs(Hn.y) + i.z * Math.abs(Hn.z), c = e.dot(Hn), l = t.dot(Hn), h = n.dot(Hn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const id = /* @__PURE__ */ new xn(), os = /* @__PURE__ */ new P(), Wr = /* @__PURE__ */ new P();
class en {
  constructor(e = new P(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : id.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
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
    os.subVectors(e, this.center);
    const t = os.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(os, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Wr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(os.copy(e.center).add(Wr)), this.expandByPoint(os.copy(e.center).sub(Wr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const cn = /* @__PURE__ */ new P(), Xr = /* @__PURE__ */ new P(), Bs = /* @__PURE__ */ new P(), Tn = /* @__PURE__ */ new P(), $r = /* @__PURE__ */ new P(), zs = /* @__PURE__ */ new P(), qr = /* @__PURE__ */ new P();
class Qi {
  constructor(e = new P(), t = new P(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, cn)), this;
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
    const t = cn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (cn.copy(this.origin).addScaledVector(this.direction, t), cn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Xr.copy(e).add(t).multiplyScalar(0.5), Bs.copy(t).sub(e).normalize(), Tn.copy(this.origin).sub(Xr);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(Bs), a = Tn.dot(this.direction), c = -Tn.dot(Bs), l = Tn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, f, g;
    if (h > 0)
      if (u = o * c - a, d = o * a - c, g = r * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / h;
            u *= _, d *= _, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * c) + l;
          } else
            d = r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
        else
          d = -r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
      else
        d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -c), r), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l);
    else
      d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Xr).addScaledVector(Bs, d), f;
  }
  intersectSphere(e, t) {
    cn.subVectors(e.center, this.origin);
    const n = cn.dot(this.direction), i = cn.dot(cn) - n * n, r = e.radius * e.radius;
    if (i > r)
      return null;
    const o = Math.sqrt(r - i), a = n - o, c = n + o;
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
    let n, i, r, o, a, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, cn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    $r.subVectors(t, e), zs.subVectors(n, e), qr.crossVectors($r, zs);
    let o = this.direction.dot(qr), a;
    if (o > 0) {
      if (i)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Tn.subVectors(this.origin, e);
    const c = a * this.direction.dot(zs.crossVectors(Tn, zs));
    if (c < 0)
      return null;
    const l = a * this.direction.dot($r.cross(Tn));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * Tn.dot(qr);
    return h < 0 ? null : this.at(h / o, r);
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
class Be {
  constructor(e, t, n, i, r, o, a, c, l, h, u, d, f, g, _, m) {
    Be.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, i, r, o, a, c, l, h, u, d, f, g, _, m);
  }
  set(e, t, n, i, r, o, a, c, l, h, u, d, f, g, _, m) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = r, p[5] = o, p[9] = a, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = g, p[11] = _, p[15] = m, this;
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
    return new Be().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / gi.setFromMatrixColumn(e, 0).length(), r = 1 / gi.setFromMatrixColumn(e, 1).length(), o = 1 / gi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = o * h, f = o * u, g = a * h, _ = a * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = f + g * l, t[5] = d - _ * l, t[9] = -a * c, t[2] = _ - d * l, t[6] = g + f * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const d = c * h, f = c * u, g = l * h, _ = l * u;
      t[0] = d + _ * a, t[4] = g * a - f, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = f * a - g, t[6] = _ + d * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const d = c * h, f = c * u, g = l * h, _ = l * u;
      t[0] = d - _ * a, t[4] = -o * u, t[8] = g + f * a, t[1] = f + g * a, t[5] = o * h, t[9] = _ - d * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const d = o * h, f = o * u, g = a * h, _ = a * u;
      t[0] = c * h, t[4] = g * l - f, t[8] = d * l + _, t[1] = c * u, t[5] = _ * l + d, t[9] = f * l - g, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const d = o * c, f = o * l, g = a * c, _ = a * l;
      t[0] = c * h, t[4] = _ - d * u, t[8] = g * u + f, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = f * u + g, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = o * c, f = o * l, g = a * c, _ = a * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + _, t[5] = o * h, t[9] = f * u - g, t[2] = g * u - f, t[6] = a * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(sd, e, rd);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Ct.subVectors(e, t), Ct.lengthSq() === 0 && (Ct.z = 1), Ct.normalize(), An.crossVectors(n, Ct), An.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ct.x += 1e-4 : Ct.z += 1e-4, Ct.normalize(), An.crossVectors(n, Ct)), An.normalize(), Hs.crossVectors(Ct, An), i[0] = An.x, i[4] = Hs.x, i[8] = Ct.x, i[1] = An.y, i[5] = Hs.y, i[9] = Ct.y, i[2] = An.z, i[6] = Hs.z, i[10] = Ct.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], g = n[2], _ = n[6], m = n[10], p = n[14], S = n[3], v = n[7], y = n[11], w = n[15], L = i[0], A = i[4], N = i[8], M = i[12], b = i[1], q = i[5], ne = i[9], B = i[13], k = i[2], G = i[6], J = i[10], $ = i[14], Y = i[3], te = i[7], K = i[11], O = i[15];
    return r[0] = o * L + a * b + c * k + l * Y, r[4] = o * A + a * q + c * G + l * te, r[8] = o * N + a * ne + c * J + l * K, r[12] = o * M + a * B + c * $ + l * O, r[1] = h * L + u * b + d * k + f * Y, r[5] = h * A + u * q + d * G + f * te, r[9] = h * N + u * ne + d * J + f * K, r[13] = h * M + u * B + d * $ + f * O, r[2] = g * L + _ * b + m * k + p * Y, r[6] = g * A + _ * q + m * G + p * te, r[10] = g * N + _ * ne + m * J + p * K, r[14] = g * M + _ * B + m * $ + p * O, r[3] = S * L + v * b + y * k + w * Y, r[7] = S * A + v * q + y * G + w * te, r[11] = S * N + v * ne + y * J + w * K, r[15] = S * M + v * B + y * $ + w * O, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], f = e[14], g = e[3], _ = e[7], m = e[11], p = e[15];
    return g * (+r * c * u - i * l * u - r * a * d + n * l * d + i * a * f - n * c * f) + _ * (+t * c * f - t * l * d + r * o * d - i * o * f + i * l * h - r * c * h) + m * (+t * l * u - t * a * f - r * o * u + n * o * f + r * a * h - n * l * h) + p * (-i * a * h - t * c * u + t * a * d + i * o * u - n * o * d + n * c * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], f = e[11], g = e[12], _ = e[13], m = e[14], p = e[15], S = u * m * l - _ * d * l + _ * c * f - a * m * f - u * c * p + a * d * p, v = g * d * l - h * m * l - g * c * f + o * m * f + h * c * p - o * d * p, y = h * _ * l - g * u * l + g * a * f - o * _ * f - h * a * p + o * u * p, w = g * u * c - h * _ * c - g * a * d + o * _ * d + h * a * m - o * u * m, L = t * S + n * v + i * y + r * w;
    if (L === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / L;
    return e[0] = S * A, e[1] = (_ * d * r - u * m * r - _ * i * f + n * m * f + u * i * p - n * d * p) * A, e[2] = (a * m * r - _ * c * r + _ * i * l - n * m * l - a * i * p + n * c * p) * A, e[3] = (u * c * r - a * d * r - u * i * l + n * d * l + a * i * f - n * c * f) * A, e[4] = v * A, e[5] = (h * m * r - g * d * r + g * i * f - t * m * f - h * i * p + t * d * p) * A, e[6] = (g * c * r - o * m * r - g * i * l + t * m * l + o * i * p - t * c * p) * A, e[7] = (o * d * r - h * c * r + h * i * l - t * d * l - o * i * f + t * c * f) * A, e[8] = y * A, e[9] = (g * u * r - h * _ * r - g * n * f + t * _ * f + h * n * p - t * u * p) * A, e[10] = (o * _ * r - g * a * r + g * n * l - t * _ * l - o * n * p + t * a * p) * A, e[11] = (h * a * r - o * u * r - h * n * l + t * u * l + o * n * f - t * a * f) * A, e[12] = w * A, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * m + t * u * m) * A, e[14] = (g * a * i - o * _ * i - g * n * c + t * _ * c + o * n * m - t * a * m) * A, e[15] = (o * u * i - h * a * i + h * n * c - t * u * c - o * n * d + t * a * d) * A, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
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
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, c = e.z, l = r * o, h = r * a;
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
      r * c * c + n,
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
  makeShear(e, t, n, i, r, o) {
    return this.set(
      1,
      n,
      r,
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
    const i = this.elements, r = t._x, o = t._y, a = t._z, c = t._w, l = r + r, h = o + o, u = a + a, d = r * l, f = r * h, g = r * u, _ = o * h, m = o * u, p = a * u, S = c * l, v = c * h, y = c * u, w = n.x, L = n.y, A = n.z;
    return i[0] = (1 - (_ + p)) * w, i[1] = (f + y) * w, i[2] = (g - v) * w, i[3] = 0, i[4] = (f - y) * L, i[5] = (1 - (d + p)) * L, i[6] = (m + S) * L, i[7] = 0, i[8] = (g + v) * A, i[9] = (m - S) * A, i[10] = (1 - (d + _)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = gi.set(i[0], i[1], i[2]).length();
    const o = gi.set(i[4], i[5], i[6]).length(), a = gi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Bt.copy(this);
    const l = 1 / r, h = 1 / o, u = 1 / a;
    return Bt.elements[0] *= l, Bt.elements[1] *= l, Bt.elements[2] *= l, Bt.elements[4] *= h, Bt.elements[5] *= h, Bt.elements[6] *= h, Bt.elements[8] *= u, Bt.elements[9] *= u, Bt.elements[10] *= u, t.setFromRotationMatrix(Bt), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o, a = gn) {
    const c = this.elements, l = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let f, g;
    if (a === gn)
      f = -(o + r) / (o - r), g = -2 * o * r / (o - r);
    else if (a === gr)
      f = -o / (o - r), g = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o, a = gn) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - r), d = (t + e) * l, f = (n + i) * h;
    let g, _;
    if (a === gn)
      g = (o + r) * u, _ = -2 * u;
    else if (a === gr)
      g = r * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -f, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
const gi = /* @__PURE__ */ new P(), Bt = /* @__PURE__ */ new Be(), sd = /* @__PURE__ */ new P(0, 0, 0), rd = /* @__PURE__ */ new P(1, 1, 1), An = /* @__PURE__ */ new P(), Hs = /* @__PURE__ */ new P(), Ct = /* @__PURE__ */ new P(), nc = /* @__PURE__ */ new Be(), ic = /* @__PURE__ */ new Jt();
class Sr {
  constructor(e = 0, t = 0, n = 0, i = Sr.DEFAULT_ORDER) {
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
    const i = e.elements, r = i[0], o = i[4], a = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(lt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-lt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(lt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-lt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(lt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-lt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return nc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(nc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ic.setFromEuler(this), this.setFromQuaternion(ic, e);
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
Sr.DEFAULT_ORDER = "XYZ";
class Yo {
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
let od = 0;
const sc = /* @__PURE__ */ new P(), _i = /* @__PURE__ */ new Jt(), ln = /* @__PURE__ */ new Be(), ks = /* @__PURE__ */ new P(), as = /* @__PURE__ */ new P(), ad = /* @__PURE__ */ new P(), cd = /* @__PURE__ */ new Jt(), rc = /* @__PURE__ */ new P(1, 0, 0), oc = /* @__PURE__ */ new P(0, 1, 0), ac = /* @__PURE__ */ new P(0, 0, 1), ld = { type: "added" }, cc = { type: "removed" };
class qe extends oi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: od++ }), this.uuid = Ot(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = qe.DEFAULT_UP.clone();
    const e = new P(), t = new Sr(), n = new Jt(), i = new P(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(o), Object.defineProperties(this, {
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
        value: new Be()
      },
      normalMatrix: {
        value: new He()
      }
    }), this.matrix = new Be(), this.matrixWorld = new Be(), this.matrixAutoUpdate = qe.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Yo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return _i.setFromAxisAngle(e, t), this.quaternion.multiply(_i), this;
  }
  rotateOnWorldAxis(e, t) {
    return _i.setFromAxisAngle(e, t), this.quaternion.premultiply(_i), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(rc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(oc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ac, e);
  }
  translateOnAxis(e, t) {
    return sc.copy(e).applyQuaternion(this.quaternion), this.position.add(sc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(rc, e);
  }
  translateY(e) {
    return this.translateOnAxis(oc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ac, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(ln.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? ks.copy(e) : ks.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), as.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ln.lookAt(as, ks, this.up) : ln.lookAt(ks, as, this.up), this.quaternion.setFromRotationMatrix(ln), i && (ln.extractRotation(i.matrixWorld), _i.setFromRotationMatrix(ln), this.quaternion.premultiply(_i.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(ld)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(cc)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(cc);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), ln.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), ln.multiply(e.parent.matrixWorld)), e.applyMatrix4(ln), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    for (let i = 0, r = this.children.length; i < r; i++) {
      const o = this.children[i].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(as, e, ad), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(as, cd, e), e;
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
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) {
        const a = i[r];
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
    function r(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            r(e.shapes, u);
          }
        else
          r(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(r(e.materials, this.material[c]));
        i.material = a;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), f = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
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
qe.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
qe.DEFAULT_MATRIX_AUTO_UPDATE = !0;
qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const zt = /* @__PURE__ */ new P(), hn = /* @__PURE__ */ new P(), jr = /* @__PURE__ */ new P(), un = /* @__PURE__ */ new P(), vi = /* @__PURE__ */ new P(), xi = /* @__PURE__ */ new P(), lc = /* @__PURE__ */ new P(), Yr = /* @__PURE__ */ new P(), Kr = /* @__PURE__ */ new P(), Zr = /* @__PURE__ */ new P();
let Gs = !1;
class kt {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), zt.subVectors(e, t), i.cross(zt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    zt.subVectors(i, t), hn.subVectors(n, t), jr.subVectors(e, t);
    const o = zt.dot(zt), a = zt.dot(hn), c = zt.dot(jr), l = hn.dot(hn), h = hn.dot(jr), u = o * l - a * a;
    if (u === 0)
      return r.set(-2, -1, -1);
    const d = 1 / u, f = (l * c - a * h) * d, g = (o * h - a * c) * d;
    return r.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, un), un.x >= 0 && un.y >= 0 && un.x + un.y <= 1;
  }
  static getUV(e, t, n, i, r, o, a, c) {
    return Gs === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Gs = !0), this.getInterpolation(e, t, n, i, r, o, a, c);
  }
  static getInterpolation(e, t, n, i, r, o, a, c) {
    return this.getBarycoord(e, t, n, i, un), c.setScalar(0), c.addScaledVector(r, un.x), c.addScaledVector(o, un.y), c.addScaledVector(a, un.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return zt.subVectors(n, t), hn.subVectors(e, t), zt.cross(hn).dot(i) < 0;
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
    return zt.subVectors(this.c, this.b), hn.subVectors(this.a, this.b), zt.cross(hn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return Gs === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Gs = !0), kt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  getInterpolation(e, t, n, i, r) {
    return kt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    vi.subVectors(i, n), xi.subVectors(r, n), Yr.subVectors(e, n);
    const c = vi.dot(Yr), l = xi.dot(Yr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Kr.subVectors(e, i);
    const h = vi.dot(Kr), u = xi.dot(Kr);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(vi, o);
    Zr.subVectors(e, r);
    const f = vi.dot(Zr), g = xi.dot(Zr);
    if (g >= 0 && f <= g)
      return t.copy(r);
    const _ = f * l - c * g;
    if (_ <= 0 && l >= 0 && g <= 0)
      return a = l / (l - g), t.copy(n).addScaledVector(xi, a);
    const m = h * g - f * u;
    if (m <= 0 && u - h >= 0 && f - g >= 0)
      return lc.subVectors(r, i), a = (u - h) / (u - h + (f - g)), t.copy(i).addScaledVector(lc, a);
    const p = 1 / (m + _ + d);
    return o = _ * p, a = d * p, t.copy(n).addScaledVector(vi, o).addScaledVector(xi, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let hd = 0;
class Kt extends oi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: hd++ }), this.uuid = Ot(), this.name = "", this.type = "Material", this.blending = Di, this.side = _n, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Pl, this.blendDst = Il, this.blendEquation = Ci, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = bo, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Au, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Br, this.stencilZFail = Br, this.stencilZPass = Br, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Di && (n.blending = this.blending), this.side !== _n && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = this.alphaHash), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const c = r[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures), o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
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
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
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
const Ql = {
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
}, Ht = { h: 0, s: 0, l: 0 }, Vs = { h: 0, s: 0, l: 0 };
function Jr(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class Ne {
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
  setHex(e, t = Pe) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ft.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Ft.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ft.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Ft.workingColorSpace) {
    if (e = jo(e, 1), t = lt(t, 0, 1), n = lt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = Jr(o, r, e + 1 / 3), this.g = Jr(o, r, e), this.b = Jr(o, r, e - 1 / 3);
    }
    return Ft.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Pe) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              t
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], o = r.length;
      if (o === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Pe) {
    const n = Ql[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ui(e.r), this.g = Ui(e.g), this.b = Ui(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Hr(e.r), this.g = Hr(e.g), this.b = Hr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Pe) {
    return Ft.fromWorkingColorSpace(_t.copy(this), e), Math.round(lt(_t.r * 255, 0, 255)) * 65536 + Math.round(lt(_t.g * 255, 0, 255)) * 256 + Math.round(lt(_t.b * 255, 0, 255));
  }
  getHexString(e = Pe) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ft.workingColorSpace) {
    Ft.fromWorkingColorSpace(_t.copy(this), t);
    const n = _t.r, i = _t.g, r = _t.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let c, l;
    const h = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const u = o - a;
      switch (l = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          c = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / u + 2;
          break;
        case r:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = Ft.workingColorSpace) {
    return Ft.fromWorkingColorSpace(_t.copy(this), t), e.r = _t.r, e.g = _t.g, e.b = _t.b, e;
  }
  getStyle(e = Pe) {
    Ft.fromWorkingColorSpace(_t.copy(this), e);
    const t = _t.r, n = _t.g, i = _t.b;
    return e !== Pe ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Ht), Ht.h += e, Ht.s += t, Ht.l += n, this.setHSL(Ht.h, Ht.s, Ht.l), this;
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
    this.getHSL(Ht), e.getHSL(Vs);
    const n = gs(Ht.h, Vs.h, t), i = gs(Ht.s, Vs.s, t), r = gs(Ht.l, Vs.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
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
const _t = /* @__PURE__ */ new Ne();
Ne.NAMES = Ql;
class qn extends Kt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ne(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Dl, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ct = /* @__PURE__ */ new P(), Ws = /* @__PURE__ */ new ce();
class Tt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Po, this.updateRange = { offset: 0, count: -1 }, this.gpuType = mn, this.version = 0;
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
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ws.fromBufferAttribute(this, t), Ws.applyMatrix3(e), this.setXY(t, Ws.x, Ws.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ct.fromBufferAttribute(this, t), ct.applyMatrix3(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.applyMatrix4(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.applyNormalMatrix(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.transformDirection(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Yt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ze(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array), i = Ze(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array), i = Ze(i, this.array), r = Ze(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Po && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class eh extends Tt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class th extends Tt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Gt extends Tt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ud = 0;
const It = /* @__PURE__ */ new Be(), Qr = /* @__PURE__ */ new qe(), yi = /* @__PURE__ */ new P(), Lt = /* @__PURE__ */ new xn(), cs = /* @__PURE__ */ new xn(), dt = /* @__PURE__ */ new P();
class Xt extends oi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: ud++ }), this.uuid = Ot(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Yl(e) ? th : eh)(e, 1) : this.index = e, this;
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
      const r = new He().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return It.makeRotationFromQuaternion(e), this.applyMatrix4(It), this;
  }
  rotateX(e) {
    return It.makeRotationX(e), this.applyMatrix4(It), this;
  }
  rotateY(e) {
    return It.makeRotationY(e), this.applyMatrix4(It), this;
  }
  rotateZ(e) {
    return It.makeRotationZ(e), this.applyMatrix4(It), this;
  }
  translate(e, t, n) {
    return It.makeTranslation(e, t, n), this.applyMatrix4(It), this;
  }
  scale(e, t, n) {
    return It.makeScale(e, t, n), this.applyMatrix4(It), this;
  }
  lookAt(e) {
    return Qr.lookAt(e), Qr.updateMatrix(), this.applyMatrix4(Qr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(yi).negate(), this.translate(yi.x, yi.y, yi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Gt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new xn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new P(-1 / 0, -1 / 0, -1 / 0),
        new P(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Lt.setFromBufferAttribute(r), this.morphTargetsRelative ? (dt.addVectors(this.boundingBox.min, Lt.min), this.boundingBox.expandByPoint(dt), dt.addVectors(this.boundingBox.max, Lt.max), this.boundingBox.expandByPoint(dt)) : (this.boundingBox.expandByPoint(Lt.min), this.boundingBox.expandByPoint(Lt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new en());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Lt.setFromBufferAttribute(e), t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          cs.setFromBufferAttribute(a), this.morphTargetsRelative ? (dt.addVectors(Lt.min, cs.min), Lt.expandByPoint(dt), dt.addVectors(Lt.max, cs.max), Lt.expandByPoint(dt)) : (Lt.expandByPoint(cs.min), Lt.expandByPoint(cs.max));
        }
      Lt.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        dt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(dt));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            dt.fromBufferAttribute(a, l), c && (yi.fromBufferAttribute(e, l), dt.add(yi)), i = Math.max(i, n.distanceToSquared(dt));
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
    const n = e.array, i = t.position.array, r = t.normal.array, o = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Tt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let b = 0; b < a; b++)
      l[b] = new P(), h[b] = new P();
    const u = new P(), d = new P(), f = new P(), g = new ce(), _ = new ce(), m = new ce(), p = new P(), S = new P();
    function v(b, q, ne) {
      u.fromArray(i, b * 3), d.fromArray(i, q * 3), f.fromArray(i, ne * 3), g.fromArray(o, b * 2), _.fromArray(o, q * 2), m.fromArray(o, ne * 2), d.sub(u), f.sub(u), _.sub(g), m.sub(g);
      const B = 1 / (_.x * m.y - m.x * _.y);
      !isFinite(B) || (p.copy(d).multiplyScalar(m.y).addScaledVector(f, -_.y).multiplyScalar(B), S.copy(f).multiplyScalar(_.x).addScaledVector(d, -m.x).multiplyScalar(B), l[b].add(p), l[q].add(p), l[ne].add(p), h[b].add(S), h[q].add(S), h[ne].add(S));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: n.length
    }]);
    for (let b = 0, q = y.length; b < q; ++b) {
      const ne = y[b], B = ne.start, k = ne.count;
      for (let G = B, J = B + k; G < J; G += 3)
        v(
          n[G + 0],
          n[G + 1],
          n[G + 2]
        );
    }
    const w = new P(), L = new P(), A = new P(), N = new P();
    function M(b) {
      A.fromArray(r, b * 3), N.copy(A);
      const q = l[b];
      w.copy(q), w.sub(A.multiplyScalar(A.dot(q))).normalize(), L.crossVectors(N, q);
      const B = L.dot(h[b]) < 0 ? -1 : 1;
      c[b * 4] = w.x, c[b * 4 + 1] = w.y, c[b * 4 + 2] = w.z, c[b * 4 + 3] = B;
    }
    for (let b = 0, q = y.length; b < q; ++b) {
      const ne = y[b], B = ne.start, k = ne.count;
      for (let G = B, J = B + k; G < J; G += 3)
        M(n[G + 0]), M(n[G + 1]), M(n[G + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Tt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, f = n.count; d < f; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new P(), r = new P(), o = new P(), a = new P(), c = new P(), l = new P(), h = new P(), u = new P();
      if (e)
        for (let d = 0, f = e.count; d < f; d += 3) {
          const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, m), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, m), a.add(h), c.add(h), l.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let d = 0, f = t.count; d < f; d += 3)
          i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      dt.fromBufferAttribute(e, t), dt.normalize(), e.setXYZ(t, dt.x, dt.y, dt.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, h = a.itemSize, u = a.normalized, d = new l.constructor(c.length * h);
      let f = 0, g = 0;
      for (let _ = 0, m = c.length; _ < m; _++) {
        a.isInterleavedBufferAttribute ? f = c[_] * a.data.stride + a.offset : f = c[_] * h;
        for (let p = 0; p < h; p++)
          d[g++] = l[f++];
      }
      return new Tt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Xt(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const c = [], l = r[a];
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
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
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
    const r = e.morphAttributes;
    for (const l in r) {
      const h = [], u = r[l];
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
const hc = /* @__PURE__ */ new Be(), kn = /* @__PURE__ */ new Qi(), Xs = /* @__PURE__ */ new en(), uc = /* @__PURE__ */ new P(), Mi = /* @__PURE__ */ new P(), Si = /* @__PURE__ */ new P(), Ei = /* @__PURE__ */ new P(), eo = /* @__PURE__ */ new P(), $s = /* @__PURE__ */ new P(), qs = /* @__PURE__ */ new ce(), js = /* @__PURE__ */ new ce(), Ys = /* @__PURE__ */ new ce(), dc = /* @__PURE__ */ new P(), fc = /* @__PURE__ */ new P(), pc = /* @__PURE__ */ new P(), Ks = /* @__PURE__ */ new P(), Zs = /* @__PURE__ */ new P();
class bt extends qe {
  constructor(e = new Xt(), t = new qn()) {
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
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      $s.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const h = a[c], u = r[c];
        h !== 0 && (eo.fromBufferAttribute(u, e), o ? $s.addScaledVector(eo, h) : $s.addScaledVector(eo.sub(t), h));
      }
      t.add($s);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Xs.copy(n.boundingSphere), Xs.applyMatrix4(r), kn.copy(e.ray).recast(e.near), !(Xs.containsPoint(kn.origin) === !1 && (kn.intersectSphere(Xs, uc) === null || kn.origin.distanceToSquared(uc) > (e.far - e.near) ** 2)) && (hc.copy(r).invert(), kn.copy(e.ray).applyMatrix4(hc), !(n.boundingBox !== null && kn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, kn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, o = this.material, a = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, _ = d.length; g < _; g++) {
          const m = d[g], p = o[m.materialIndex], S = Math.max(m.start, f.start), v = Math.min(a.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = S, w = v; y < w; y += 3) {
            const L = a.getX(y), A = a.getX(y + 1), N = a.getX(y + 2);
            i = Js(this, p, e, n, l, h, u, L, A, N), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
        for (let m = g, p = _; m < p; m += 3) {
          const S = a.getX(m), v = a.getX(m + 1), y = a.getX(m + 2);
          i = Js(this, o, e, n, l, h, u, S, v, y), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(o))
        for (let g = 0, _ = d.length; g < _; g++) {
          const m = d[g], p = o[m.materialIndex], S = Math.max(m.start, f.start), v = Math.min(c.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = S, w = v; y < w; y += 3) {
            const L = y, A = y + 1, N = y + 2;
            i = Js(this, p, e, n, l, h, u, L, A, N), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(c.count, f.start + f.count);
        for (let m = g, p = _; m < p; m += 3) {
          const S = m, v = m + 1, y = m + 2;
          i = Js(this, o, e, n, l, h, u, S, v, y), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function dd(s, e, t, n, i, r, o, a) {
  let c;
  if (e.side === wt ? c = n.intersectTriangle(o, r, i, !0, a) : c = n.intersectTriangle(i, r, o, e.side === _n, a), c === null)
    return null;
  Zs.copy(a), Zs.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(Zs);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Zs.clone(),
    object: s
  };
}
function Js(s, e, t, n, i, r, o, a, c, l) {
  s.getVertexPosition(a, Mi), s.getVertexPosition(c, Si), s.getVertexPosition(l, Ei);
  const h = dd(s, e, t, n, Mi, Si, Ei, Ks);
  if (h) {
    i && (qs.fromBufferAttribute(i, a), js.fromBufferAttribute(i, c), Ys.fromBufferAttribute(i, l), h.uv = kt.getInterpolation(Ks, Mi, Si, Ei, qs, js, Ys, new ce())), r && (qs.fromBufferAttribute(r, a), js.fromBufferAttribute(r, c), Ys.fromBufferAttribute(r, l), h.uv1 = kt.getInterpolation(Ks, Mi, Si, Ei, qs, js, Ys, new ce()), h.uv2 = h.uv1), o && (dc.fromBufferAttribute(o, a), fc.fromBufferAttribute(o, c), pc.fromBufferAttribute(o, l), h.normal = kt.getInterpolation(Ks, Mi, Si, Ei, dc, fc, pc, new P()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a,
      b: c,
      c: l,
      normal: new P(),
      materialIndex: 0
    };
    kt.getNormal(Mi, Si, Ei, u.normal), h.face = u;
  }
  return h;
}
class es extends Xt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: o
    };
    const a = this;
    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
    const c = [], l = [], h = [], u = [];
    let d = 0, f = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new Gt(l, 3)), this.setAttribute("normal", new Gt(h, 3)), this.setAttribute("uv", new Gt(u, 2));
    function g(_, m, p, S, v, y, w, L, A, N, M) {
      const b = y / A, q = w / N, ne = y / 2, B = w / 2, k = L / 2, G = A + 1, J = N + 1;
      let $ = 0, Y = 0;
      const te = new P();
      for (let K = 0; K < J; K++) {
        const O = K * q - B;
        for (let V = 0; V < G; V++) {
          const pe = V * b - ne;
          te[_] = pe * S, te[m] = O * v, te[p] = k, l.push(te.x, te.y, te.z), te[_] = 0, te[m] = 0, te[p] = L > 0 ? 1 : -1, h.push(te.x, te.y, te.z), u.push(V / A), u.push(1 - K / N), $ += 1;
        }
      }
      for (let K = 0; K < N; K++)
        for (let O = 0; O < A; O++) {
          const V = d + O + G * K, pe = d + O + G * (K + 1), me = d + (O + 1) + G * (K + 1), ve = d + (O + 1) + G * K;
          c.push(V, pe, ve), c.push(pe, me, ve), Y += 6;
        }
      a.addGroup(f, Y, M), f += Y, d += $;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new es(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Wi(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Mt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Wi(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function fd(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function nh(s) {
  return s.getRenderTarget() === null ? s.outputColorSpace : Zt;
}
const pd = { clone: Wi, merge: Mt };
var md = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, gd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ii extends Kt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = md, this.fragmentShader = gd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Wi(e.uniforms), this.uniformsGroups = fd(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class ih extends qe {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Be(), this.projectionMatrix = new Be(), this.projectionMatrixInverse = new Be(), this.coordinateSystem = gn;
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
class Et extends ih {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Vi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ms * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Vi * 2 * Math.atan(
      Math.tan(ms * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ms * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      r += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ti = -90, Ai = 1;
class _d extends qe {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null;
    const i = new Et(Ti, Ai, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Et(Ti, Ai, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Et(Ti, Ai, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Et(Ti, Ai, e, t);
    a.layers = this.layers, this.add(a);
    const c = new Et(Ti, Ai, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Et(Ti, Ai, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, c] = t;
    for (const l of t)
      this.remove(l);
    if (e === gn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === gr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [i, r, o, a, c, l] = this.children, h = e.getRenderTarget(), u = e.xr.enabled;
    e.xr.enabled = !1;
    const d = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
  }
}
class sh extends mt {
  constructor(e, t, n, i, r, o, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Bi, super(e, t, n, i, r, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class vd extends ni {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (_s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Zn ? Pe : Jn), this.texture = new sh(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : At;
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
    }, i = new es(5, 5, 5), r = new ii({
      name: "CubemapFromEquirect",
      uniforms: Wi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: wt,
      blending: Dn
    });
    r.uniforms.tEquirect.value = t;
    const o = new bt(i, r), a = t.minFilter;
    return t.minFilter === ti && (t.minFilter = At), new _d(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const to = /* @__PURE__ */ new P(), xd = /* @__PURE__ */ new P(), yd = /* @__PURE__ */ new He();
class Cn {
  constructor(e = new P(1, 0, 0), t = 0) {
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
    const i = to.subVectors(n, t).cross(xd.subVectors(e, t)).normalize();
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
    const n = e.delta(to), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
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
    const n = t || yd.getNormalMatrix(e), i = this.coplanarPoint(to).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
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
const Gn = /* @__PURE__ */ new en(), Qs = /* @__PURE__ */ new P();
class Ko {
  constructor(e = new Cn(), t = new Cn(), n = new Cn(), i = new Cn(), r = new Cn(), o = new Cn()) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = gn) {
    const n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], f = i[8], g = i[9], _ = i[10], m = i[11], p = i[12], S = i[13], v = i[14], y = i[15];
    if (n[0].setComponents(c - r, d - l, m - f, y - p).normalize(), n[1].setComponents(c + r, d + l, m + f, y + p).normalize(), n[2].setComponents(c + o, d + h, m + g, y + S).normalize(), n[3].setComponents(c - o, d - h, m - g, y - S).normalize(), n[4].setComponents(c - a, d - u, m - _, y - v).normalize(), t === gn)
      n[5].setComponents(c + a, d + u, m + _, y + v).normalize();
    else if (t === gr)
      n[5].setComponents(a, u, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Gn);
  }
  intersectsSprite(e) {
    return Gn.center.set(0, 0, 0), Gn.radius = 0.7071067811865476, Gn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Gn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Qs.x = i.normal.x > 0 ? e.max.x : e.min.x, Qs.y = i.normal.y > 0 ? e.max.y : e.min.y, Qs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Qs) < 0)
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
function rh() {
  let s = null, e = !1, t = null, n = null;
  function i(r, o) {
    t(r, o), n = s.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      s.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      s = r;
    }
  };
}
function Md(s, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, d = l.usage, f = s.createBuffer();
    s.bindBuffer(h, f), s.bufferData(h, u, d), l.onUploadCallback();
    let g;
    if (u instanceof Float32Array)
      g = s.FLOAT;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = s.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = s.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      g = s.SHORT;
    else if (u instanceof Uint32Array)
      g = s.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      g = s.INT;
    else if (u instanceof Int8Array)
      g = s.BYTE;
    else if (u instanceof Uint8Array)
      g = s.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      g = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: f,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function r(l, h, u) {
    const d = h.array, f = h.updateRange;
    s.bindBuffer(u, l), f.count === -1 ? s.bufferSubData(u, 0, d) : (t ? s.bufferSubData(
      u,
      f.offset * d.BYTES_PER_ELEMENT,
      d,
      f.offset,
      f.count
    ) : s.bufferSubData(
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
    h && (s.deleteBuffer(h.buffer), n.delete(l));
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
    u === void 0 ? n.set(l, i(l, h)) : u.version < l.version && (r(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class Zo extends Xt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, u = e / a, d = t / c, f = [], g = [], _ = [], m = [];
    for (let p = 0; p < h; p++) {
      const S = p * d - o;
      for (let v = 0; v < l; v++) {
        const y = v * u - r;
        g.push(y, -S, 0), _.push(0, 0, 1), m.push(v / a), m.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let S = 0; S < a; S++) {
        const v = S + l * p, y = S + l * (p + 1), w = S + 1 + l * (p + 1), L = S + 1 + l * p;
        f.push(v, y, L), f.push(y, w, L);
      }
    this.setIndex(f), this.setAttribute("position", new Gt(g, 3)), this.setAttribute("normal", new Gt(_, 3)), this.setAttribute("uv", new Gt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Zo(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Sd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Ed = `#ifdef USE_ALPHAHASH
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
#endif`, Td = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Ad = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, bd = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, wd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Rd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Cd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ld = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Pd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Id = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Dd = `#ifdef USE_IRIDESCENCE
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
#endif`, Ud = `#ifdef USE_BUMPMAP
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
#endif`, Nd = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Od = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Fd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Bd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, zd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Hd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, kd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Gd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Vd = `#define PI 3.141592653589793
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
} // validated`, Wd = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Xd = `vec3 transformedNormal = objectNormal;
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
#endif`, $d = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, qd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, jd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Yd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Kd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Zd = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Jd = `#ifdef USE_ENVMAP
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
#endif`, Qd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, ef = `#ifdef USE_ENVMAP
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
#endif`, tf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, nf = `#ifdef USE_ENVMAP
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
#endif`, sf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, rf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, of = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, af = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, cf = `#ifdef USE_GRADIENTMAP
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
}`, lf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, hf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, uf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, df = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ff = `uniform bool receiveShadow;
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
#endif`, pf = `#ifdef USE_ENVMAP
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
#endif`, mf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, gf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, _f = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, vf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, xf = `PhysicalMaterial material;
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
#endif`, yf = `struct PhysicalMaterial {
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
}`, Mf = `
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
#endif`, Sf = `#if defined( RE_IndirectDiffuse )
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
#endif`, Ef = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Tf = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Af = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, bf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, wf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Rf = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, Cf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Lf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Pf = `#if defined( USE_POINTS_UV )
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
#endif`, If = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Df = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Uf = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Nf = `#ifdef USE_MORPHNORMALS
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
#endif`, Of = `#ifdef USE_MORPHTARGETS
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
#endif`, Ff = `#ifdef USE_MORPHTARGETS
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
#endif`, Bf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, zf = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Hf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, kf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Gf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Vf = `#ifdef USE_NORMALMAP
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
#endif`, Wf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Xf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, $f = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, qf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, jf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Yf = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Kf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Zf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Jf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Qf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, ep = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, tp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, np = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, ip = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, sp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, rp = `float getShadowMask() {
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
}`, op = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ap = `#ifdef USE_SKINNING
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
#endif`, cp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, lp = `#ifdef USE_SKINNING
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
#endif`, hp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, up = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, dp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, fp = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, pp = `#ifdef USE_TRANSMISSION
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
#endif`, mp = `#ifdef USE_TRANSMISSION
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
#endif`, gp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, _p = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, vp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, xp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const yp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Mp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Sp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ep = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Tp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ap = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, bp = `#include <common>
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
}`, wp = `#if DEPTH_PACKING == 3200
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
}`, Rp = `#define DISTANCE
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
}`, Cp = `#define DISTANCE
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
}`, Lp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Pp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ip = `uniform float scale;
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
}`, Dp = `uniform vec3 diffuse;
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
}`, Up = `#include <common>
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
}`, Np = `uniform vec3 diffuse;
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
}`, Op = `#define LAMBERT
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
}`, Fp = `#define LAMBERT
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
}`, Bp = `#define MATCAP
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
}`, zp = `#define MATCAP
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
}`, Hp = `#define NORMAL
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
}`, kp = `#define NORMAL
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
}`, Gp = `#define PHONG
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
}`, Vp = `#define PHONG
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
}`, Wp = `#define STANDARD
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
}`, Xp = `#define STANDARD
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
}`, $p = `#define TOON
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
}`, qp = `#define TOON
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
}`, jp = `uniform float size;
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
}`, Yp = `uniform vec3 diffuse;
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
}`, Kp = `#include <common>
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
}`, Zp = `uniform vec3 color;
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
}`, Jp = `uniform float rotation;
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
}`, Qp = `uniform vec3 diffuse;
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
}`, Fe = {
  alphahash_fragment: Sd,
  alphahash_pars_fragment: Ed,
  alphamap_fragment: Td,
  alphamap_pars_fragment: Ad,
  alphatest_fragment: bd,
  alphatest_pars_fragment: wd,
  aomap_fragment: Rd,
  aomap_pars_fragment: Cd,
  begin_vertex: Ld,
  beginnormal_vertex: Pd,
  bsdfs: Id,
  iridescence_fragment: Dd,
  bumpmap_pars_fragment: Ud,
  clipping_planes_fragment: Nd,
  clipping_planes_pars_fragment: Od,
  clipping_planes_pars_vertex: Fd,
  clipping_planes_vertex: Bd,
  color_fragment: zd,
  color_pars_fragment: Hd,
  color_pars_vertex: kd,
  color_vertex: Gd,
  common: Vd,
  cube_uv_reflection_fragment: Wd,
  defaultnormal_vertex: Xd,
  displacementmap_pars_vertex: $d,
  displacementmap_vertex: qd,
  emissivemap_fragment: jd,
  emissivemap_pars_fragment: Yd,
  colorspace_fragment: Kd,
  colorspace_pars_fragment: Zd,
  envmap_fragment: Jd,
  envmap_common_pars_fragment: Qd,
  envmap_pars_fragment: ef,
  envmap_pars_vertex: tf,
  envmap_physical_pars_fragment: pf,
  envmap_vertex: nf,
  fog_vertex: sf,
  fog_pars_vertex: rf,
  fog_fragment: of,
  fog_pars_fragment: af,
  gradientmap_pars_fragment: cf,
  lightmap_fragment: lf,
  lightmap_pars_fragment: hf,
  lights_lambert_fragment: uf,
  lights_lambert_pars_fragment: df,
  lights_pars_begin: ff,
  lights_toon_fragment: mf,
  lights_toon_pars_fragment: gf,
  lights_phong_fragment: _f,
  lights_phong_pars_fragment: vf,
  lights_physical_fragment: xf,
  lights_physical_pars_fragment: yf,
  lights_fragment_begin: Mf,
  lights_fragment_maps: Sf,
  lights_fragment_end: Ef,
  logdepthbuf_fragment: Tf,
  logdepthbuf_pars_fragment: Af,
  logdepthbuf_pars_vertex: bf,
  logdepthbuf_vertex: wf,
  map_fragment: Rf,
  map_pars_fragment: Cf,
  map_particle_fragment: Lf,
  map_particle_pars_fragment: Pf,
  metalnessmap_fragment: If,
  metalnessmap_pars_fragment: Df,
  morphcolor_vertex: Uf,
  morphnormal_vertex: Nf,
  morphtarget_pars_vertex: Of,
  morphtarget_vertex: Ff,
  normal_fragment_begin: Bf,
  normal_fragment_maps: zf,
  normal_pars_fragment: Hf,
  normal_pars_vertex: kf,
  normal_vertex: Gf,
  normalmap_pars_fragment: Vf,
  clearcoat_normal_fragment_begin: Wf,
  clearcoat_normal_fragment_maps: Xf,
  clearcoat_pars_fragment: $f,
  iridescence_pars_fragment: qf,
  opaque_fragment: jf,
  packing: Yf,
  premultiplied_alpha_fragment: Kf,
  project_vertex: Zf,
  dithering_fragment: Jf,
  dithering_pars_fragment: Qf,
  roughnessmap_fragment: ep,
  roughnessmap_pars_fragment: tp,
  shadowmap_pars_fragment: np,
  shadowmap_pars_vertex: ip,
  shadowmap_vertex: sp,
  shadowmask_pars_fragment: rp,
  skinbase_vertex: op,
  skinning_pars_vertex: ap,
  skinning_vertex: cp,
  skinnormal_vertex: lp,
  specularmap_fragment: hp,
  specularmap_pars_fragment: up,
  tonemapping_fragment: dp,
  tonemapping_pars_fragment: fp,
  transmission_fragment: pp,
  transmission_pars_fragment: mp,
  uv_pars_fragment: gp,
  uv_pars_vertex: _p,
  uv_vertex: vp,
  worldpos_vertex: xp,
  background_vert: yp,
  background_frag: Mp,
  backgroundCube_vert: Sp,
  backgroundCube_frag: Ep,
  cube_vert: Tp,
  cube_frag: Ap,
  depth_vert: bp,
  depth_frag: wp,
  distanceRGBA_vert: Rp,
  distanceRGBA_frag: Cp,
  equirect_vert: Lp,
  equirect_frag: Pp,
  linedashed_vert: Ip,
  linedashed_frag: Dp,
  meshbasic_vert: Up,
  meshbasic_frag: Np,
  meshlambert_vert: Op,
  meshlambert_frag: Fp,
  meshmatcap_vert: Bp,
  meshmatcap_frag: zp,
  meshnormal_vert: Hp,
  meshnormal_frag: kp,
  meshphong_vert: Gp,
  meshphong_frag: Vp,
  meshphysical_vert: Wp,
  meshphysical_frag: Xp,
  meshtoon_vert: $p,
  meshtoon_frag: qp,
  points_vert: jp,
  points_frag: Yp,
  shadow_vert: Kp,
  shadow_frag: Zp,
  sprite_vert: Jp,
  sprite_frag: Qp
}, ue = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ne(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new He() }
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
    aoMapTransform: { value: /* @__PURE__ */ new He() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new He() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new He() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new He() },
    normalScale: { value: /* @__PURE__ */ new ce(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new He() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new He() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ne(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Ne(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new He() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ne(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ce(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  }
}, qt = {
  basic: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ne(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.specularmap,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ne(0) },
        specular: { value: /* @__PURE__ */ new Ne(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.envmap,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.roughnessmap,
      ue.metalnessmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ne(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.aomap,
      ue.lightmap,
      ue.emissivemap,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.gradientmap,
      ue.fog,
      ue.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ne(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      ue.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Mt([
      ue.points,
      ue.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Fe.linedashed_vert,
    fragmentShader: Fe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.bumpmap,
      ue.normalmap,
      ue.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Mt([
      ue.sprite,
      ue.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new He() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.background_vert,
    fragmentShader: Fe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.backgroundCube_vert,
    fragmentShader: Fe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Fe.cube_vert,
    fragmentShader: Fe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Fe.equirect_vert,
    fragmentShader: Fe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Mt([
      ue.common,
      ue.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Fe.distanceRGBA_vert,
    fragmentShader: Fe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Mt([
      ue.lights,
      ue.fog,
      {
        color: { value: /* @__PURE__ */ new Ne(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
qt.physical = {
  uniforms: /* @__PURE__ */ Mt([
    qt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ce(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new He() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new He() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ne(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new He() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new He() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ce() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new He() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ne(0) },
      specularColor: { value: /* @__PURE__ */ new Ne(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new He() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new He() },
      anisotropyVector: { value: /* @__PURE__ */ new ce() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new He() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const er = { r: 0, b: 0, g: 0 };
function em(s, e, t, n, i, r, o) {
  const a = new Ne(0);
  let c = r === !0 ? 0 : 1, l, h, u = null, d = 0, f = null;
  function g(m, p) {
    let S = !1, v = p.isScene === !0 ? p.background : null;
    switch (v && v.isTexture && (v = (p.backgroundBlurriness > 0 ? t : e).get(v)), v === null ? _(a, c) : v && v.isColor && (_(v, 1), S = !0), s.xr.getEnvironmentBlendMode()) {
      case "opaque":
        S = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, o), S = !0;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, o), S = !0;
        break;
    }
    (s.autoClear || S) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), v && (v.isCubeTexture || v.mapping === Mr) ? (h === void 0 && (h = new bt(
      new es(1, 1, 1),
      new ii({
        name: "BackgroundCubeMaterial",
        uniforms: Wi(qt.backgroundCube.uniforms),
        vertexShader: qt.backgroundCube.vertexShader,
        fragmentShader: qt.backgroundCube.fragmentShader,
        side: wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(L, A, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = v.colorSpace !== Pe, (u !== v || d !== v.version || f !== s.toneMapping) && (h.material.needsUpdate = !0, u = v, d = v.version, f = s.toneMapping), h.layers.enableAll(), m.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new bt(
      new Zo(2, 2),
      new ii({
        name: "BackgroundMaterial",
        uniforms: Wi(qt.background.uniforms),
        vertexShader: qt.background.vertexShader,
        fragmentShader: qt.background.fragmentShader,
        side: _n,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, l.material.toneMapped = v.colorSpace !== Pe, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || f !== s.toneMapping) && (l.material.needsUpdate = !0, u = v, d = v.version, f = s.toneMapping), l.layers.enableAll(), m.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function _(m, p) {
    m.getRGB(er, nh(s)), n.buffers.color.setClear(er.r, er.g, er.b, p, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(m, p = 1) {
      a.set(m), c = p, _(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(m) {
      c = m, _(a, c);
    },
    render: g
  };
}
function tm(s, e, t, n) {
  const i = s.getParameter(s.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, c = m(null);
  let l = c, h = !1;
  function u(k, G, J, $, Y) {
    let te = !1;
    if (o) {
      const K = _($, J, G);
      l !== K && (l = K, f(l.object)), te = p(k, $, J, Y), te && S(k, $, J, Y);
    } else {
      const K = G.wireframe === !0;
      (l.geometry !== $.id || l.program !== J.id || l.wireframe !== K) && (l.geometry = $.id, l.program = J.id, l.wireframe = K, te = !0);
    }
    Y !== null && t.update(Y, s.ELEMENT_ARRAY_BUFFER), (te || h) && (h = !1, N(k, G, J, $), Y !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
  }
  function d() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function f(k) {
    return n.isWebGL2 ? s.bindVertexArray(k) : r.bindVertexArrayOES(k);
  }
  function g(k) {
    return n.isWebGL2 ? s.deleteVertexArray(k) : r.deleteVertexArrayOES(k);
  }
  function _(k, G, J) {
    const $ = J.wireframe === !0;
    let Y = a[k.id];
    Y === void 0 && (Y = {}, a[k.id] = Y);
    let te = Y[G.id];
    te === void 0 && (te = {}, Y[G.id] = te);
    let K = te[$];
    return K === void 0 && (K = m(d()), te[$] = K), K;
  }
  function m(k) {
    const G = [], J = [], $ = [];
    for (let Y = 0; Y < i; Y++)
      G[Y] = 0, J[Y] = 0, $[Y] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: G,
      enabledAttributes: J,
      attributeDivisors: $,
      object: k,
      attributes: {},
      index: null
    };
  }
  function p(k, G, J, $) {
    const Y = l.attributes, te = G.attributes;
    let K = 0;
    const O = J.getAttributes();
    for (const V in O)
      if (O[V].location >= 0) {
        const me = Y[V];
        let ve = te[V];
        if (ve === void 0 && (V === "instanceMatrix" && k.instanceMatrix && (ve = k.instanceMatrix), V === "instanceColor" && k.instanceColor && (ve = k.instanceColor)), me === void 0 || me.attribute !== ve || ve && me.data !== ve.data)
          return !0;
        K++;
      }
    return l.attributesNum !== K || l.index !== $;
  }
  function S(k, G, J, $) {
    const Y = {}, te = G.attributes;
    let K = 0;
    const O = J.getAttributes();
    for (const V in O)
      if (O[V].location >= 0) {
        let me = te[V];
        me === void 0 && (V === "instanceMatrix" && k.instanceMatrix && (me = k.instanceMatrix), V === "instanceColor" && k.instanceColor && (me = k.instanceColor));
        const ve = {};
        ve.attribute = me, me && me.data && (ve.data = me.data), Y[V] = ve, K++;
      }
    l.attributes = Y, l.attributesNum = K, l.index = $;
  }
  function v() {
    const k = l.newAttributes;
    for (let G = 0, J = k.length; G < J; G++)
      k[G] = 0;
  }
  function y(k) {
    w(k, 0);
  }
  function w(k, G) {
    const J = l.newAttributes, $ = l.enabledAttributes, Y = l.attributeDivisors;
    J[k] = 1, $[k] === 0 && (s.enableVertexAttribArray(k), $[k] = 1), Y[k] !== G && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](k, G), Y[k] = G);
  }
  function L() {
    const k = l.newAttributes, G = l.enabledAttributes;
    for (let J = 0, $ = G.length; J < $; J++)
      G[J] !== k[J] && (s.disableVertexAttribArray(J), G[J] = 0);
  }
  function A(k, G, J, $, Y, te, K) {
    K === !0 ? s.vertexAttribIPointer(k, G, J, Y, te) : s.vertexAttribPointer(k, G, J, $, Y, te);
  }
  function N(k, G, J, $) {
    if (n.isWebGL2 === !1 && (k.isInstancedMesh || $.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    v();
    const Y = $.attributes, te = J.getAttributes(), K = G.defaultAttributeValues;
    for (const O in te) {
      const V = te[O];
      if (V.location >= 0) {
        let pe = Y[O];
        if (pe === void 0 && (O === "instanceMatrix" && k.instanceMatrix && (pe = k.instanceMatrix), O === "instanceColor" && k.instanceColor && (pe = k.instanceColor)), pe !== void 0) {
          const me = pe.normalized, ve = pe.itemSize, Ae = t.get(pe);
          if (Ae === void 0)
            continue;
          const be = Ae.buffer, Te = Ae.type, $e = Ae.bytesPerElement, Je = n.isWebGL2 === !0 && (Te === s.INT || Te === s.UNSIGNED_INT || pe.gpuType === Fl);
          if (pe.isInterleavedBufferAttribute) {
            const we = pe.data, R = we.stride, le = pe.offset;
            if (we.isInstancedInterleavedBuffer) {
              for (let j = 0; j < V.locationSize; j++)
                w(V.location + j, we.meshPerAttribute);
              k.isInstancedMesh !== !0 && $._maxInstanceCount === void 0 && ($._maxInstanceCount = we.meshPerAttribute * we.count);
            } else
              for (let j = 0; j < V.locationSize; j++)
                y(V.location + j);
            s.bindBuffer(s.ARRAY_BUFFER, be);
            for (let j = 0; j < V.locationSize; j++)
              A(
                V.location + j,
                ve / V.locationSize,
                Te,
                me,
                R * $e,
                (le + ve / V.locationSize * j) * $e,
                Je
              );
          } else {
            if (pe.isInstancedBufferAttribute) {
              for (let we = 0; we < V.locationSize; we++)
                w(V.location + we, pe.meshPerAttribute);
              k.isInstancedMesh !== !0 && $._maxInstanceCount === void 0 && ($._maxInstanceCount = pe.meshPerAttribute * pe.count);
            } else
              for (let we = 0; we < V.locationSize; we++)
                y(V.location + we);
            s.bindBuffer(s.ARRAY_BUFFER, be);
            for (let we = 0; we < V.locationSize; we++)
              A(
                V.location + we,
                ve / V.locationSize,
                Te,
                me,
                ve * $e,
                ve / V.locationSize * we * $e,
                Je
              );
          }
        } else if (K !== void 0) {
          const me = K[O];
          if (me !== void 0)
            switch (me.length) {
              case 2:
                s.vertexAttrib2fv(V.location, me);
                break;
              case 3:
                s.vertexAttrib3fv(V.location, me);
                break;
              case 4:
                s.vertexAttrib4fv(V.location, me);
                break;
              default:
                s.vertexAttrib1fv(V.location, me);
            }
        }
      }
    }
    L();
  }
  function M() {
    ne();
    for (const k in a) {
      const G = a[k];
      for (const J in G) {
        const $ = G[J];
        for (const Y in $)
          g($[Y].object), delete $[Y];
        delete G[J];
      }
      delete a[k];
    }
  }
  function b(k) {
    if (a[k.id] === void 0)
      return;
    const G = a[k.id];
    for (const J in G) {
      const $ = G[J];
      for (const Y in $)
        g($[Y].object), delete $[Y];
      delete G[J];
    }
    delete a[k.id];
  }
  function q(k) {
    for (const G in a) {
      const J = a[G];
      if (J[k.id] === void 0)
        continue;
      const $ = J[k.id];
      for (const Y in $)
        g($[Y].object), delete $[Y];
      delete J[k.id];
    }
  }
  function ne() {
    B(), h = !0, l !== c && (l = c, f(l.object));
  }
  function B() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: ne,
    resetDefaultState: B,
    dispose: M,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: q,
    initAttributes: v,
    enableAttribute: y,
    disableUnusedAttributes: L
  };
}
function nm(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(l) {
    r = l;
  }
  function a(l, h) {
    s.drawArrays(r, l, h), t.update(h, r, 1);
  }
  function c(l, h, u) {
    if (u === 0)
      return;
    let d, f;
    if (i)
      d = s, f = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[f](r, l, h, u), t.update(h, r, u);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function im(s, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(A) {
    if (A === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && s.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = r(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), d = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), f = s.getParameter(s.MAX_TEXTURE_SIZE), g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), _ = s.getParameter(s.MAX_VERTEX_ATTRIBS), m = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), p = s.getParameter(s.MAX_VARYING_VECTORS), S = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), v = d > 0, y = o || e.has("OES_texture_float"), w = v && y, L = o ? s.getParameter(s.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: f,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: m,
    maxVaryings: p,
    maxFragmentUniforms: S,
    vertexTextures: v,
    floatFragmentTextures: y,
    floatVertexTextures: w,
    maxSamples: L
  };
}
function sm(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const o = new Cn(), a = new He(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, p = s.get(u);
    if (!i || g === null || g.length === 0 || r && !m)
      r ? h(null) : l();
    else {
      const S = r ? 0 : n, v = S * 4;
      let y = p.clippingState || null;
      c.value = y, y = h(g, d, v, f);
      for (let w = 0; w !== v; ++w)
        y[w] = t[w];
      p.clippingState = y, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, f, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = c.value, g !== !0 || m === null) {
        const p = f + _ * 4, S = d.matrixWorldInverse;
        a.getNormalMatrix(S), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let v = 0, y = f; v !== _; ++v, y += 4)
          o.copy(u[v]).applyMatrix4(S, a), o.normal.toArray(m, y), m[y + 3] = o.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function rm(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === wo ? o.mapping = Bi : a === Ro && (o.mapping = zi), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === wo || a === Ro)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new vd(c.height / 2);
            return l.fromEquirectangularTexture(s, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
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
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Jo extends ih {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, o = n + e, a = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, o = r + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Pi = 4, mc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], $n = 20, no = /* @__PURE__ */ new Jo(), gc = /* @__PURE__ */ new Ne();
let io = null;
const Xn = (1 + Math.sqrt(5)) / 2, bi = 1 / Xn, _c = [
  /* @__PURE__ */ new P(1, 1, 1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(0, Xn, bi),
  /* @__PURE__ */ new P(0, Xn, -bi),
  /* @__PURE__ */ new P(bi, 0, Xn),
  /* @__PURE__ */ new P(-bi, 0, Xn),
  /* @__PURE__ */ new P(Xn, bi, 0),
  /* @__PURE__ */ new P(-Xn, bi, 0)
];
class vc {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    io = this._renderer.getRenderTarget(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Mc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = yc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(io), e.scissorTest = !1, tr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Bi || e.mapping === zi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), io = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: At,
      minFilter: At,
      generateMipmaps: !1,
      type: ys,
      format: Nt,
      colorSpace: Zt,
      depthBuffer: !1
    }, i = xc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = xc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = om(r)), this._blurMaterial = am(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new bt(this._lodPlanes[0], e);
    this._renderer.compile(t, no);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Et(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(gc), h.toneMapping = Un, h.autoClear = !1;
    const f = new qn({
      name: "PMREM.Background",
      side: wt,
      depthWrite: !1,
      depthTest: !1
    }), g = new bt(new es(), f);
    let _ = !1;
    const m = e.background;
    m ? m.isColor && (f.color.copy(m), e.background = null, _ = !0) : (f.color.copy(gc), _ = !0);
    for (let p = 0; p < 6; p++) {
      const S = p % 3;
      S === 0 ? (a.up.set(0, c[p], 0), a.lookAt(l[p], 0, 0)) : S === 1 ? (a.up.set(0, 0, c[p]), a.lookAt(0, l[p], 0)) : (a.up.set(0, c[p], 0), a.lookAt(0, 0, l[p]));
      const v = this._cubeSize;
      tr(i, S * v, p > 2 ? v : 0, v, v), h.setRenderTarget(i), _ && h.render(g, a), h.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Bi || e.mapping === zi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Mc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = yc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new bt(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    tr(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, no);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = _c[(i - 1) % _c.length];
      this._blur(e, i - 1, i, r, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new bt(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * $n - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(h * _) : $n;
    m > $n && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);
    const p = [];
    let S = 0;
    for (let A = 0; A < $n; ++A) {
      const N = A / _, M = Math.exp(-N * N / 2);
      p.push(M), A === 0 ? S += M : A < m && (S += 2 * M);
    }
    for (let A = 0; A < p.length; A++)
      p[A] = p[A] / S;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: v } = this;
    d.dTheta.value = g, d.mipInt.value = v - n;
    const y = this._sizeLods[i], w = 3 * y * (i > v - Pi ? i - v + Pi : 0), L = 4 * (this._cubeSize - y);
    tr(t, w, L, 3 * y, 2 * y), c.setRenderTarget(t), c.render(u, no);
  }
}
function om(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - Pi + 1 + mc.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > s - Pi ? c = mc[o - s + Pi - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, g = 6, _ = 3, m = 2, p = 1, S = new Float32Array(_ * g * f), v = new Float32Array(m * g * f), y = new Float32Array(p * g * f);
    for (let L = 0; L < f; L++) {
      const A = L % 3 * 2 / 3 - 1, N = L > 2 ? 0 : -1, M = [
        A,
        N,
        0,
        A + 2 / 3,
        N,
        0,
        A + 2 / 3,
        N + 1,
        0,
        A,
        N,
        0,
        A + 2 / 3,
        N + 1,
        0,
        A,
        N + 1,
        0
      ];
      S.set(M, _ * g * L), v.set(d, m * g * L);
      const b = [L, L, L, L, L, L];
      y.set(b, p * g * L);
    }
    const w = new Xt();
    w.setAttribute("position", new Tt(S, _)), w.setAttribute("uv", new Tt(v, m)), w.setAttribute("faceIndex", new Tt(y, p)), e.push(w), i > Pi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function xc(s, e, t) {
  const n = new ni(s, e, t);
  return n.texture.mapping = Mr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function tr(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function am(s, e, t) {
  const n = new Float32Array($n), i = new P(0, 1, 0);
  return new ii({
    name: "SphericalGaussianBlur",
    defines: {
      n: $n,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`
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
    vertexShader: Qo(),
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
    blending: Dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function yc() {
  return new ii({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Qo(),
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
    blending: Dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Mc() {
  return new ii({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Qo(),
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
    blending: Dn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Qo() {
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
function cm(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === wo || c === Ro, h = c === Bi || c === zi;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new vc(s)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new vc(s));
              const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", r), d.texture;
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
  function r(a) {
    const c = a.target;
    c.removeEventListener("dispose", r);
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
function lm(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
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
function hm(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const _ = d.morphAttributes[g];
      for (let m = 0, p = _.length; m < p; m++)
        e.remove(_[m]);
    }
    d.removeEventListener("dispose", o), delete i[d.id];
    const f = r.get(d);
    f && (e.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const g in d)
      e.update(d[g], s.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const g in f) {
      const _ = f[g];
      for (let m = 0, p = _.length; m < p; m++)
        e.update(_[m], s.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], f = u.index, g = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const S = f.array;
      _ = f.version;
      for (let v = 0, y = S.length; v < y; v += 3) {
        const w = S[v + 0], L = S[v + 1], A = S[v + 2];
        d.push(w, L, L, A, A, w);
      }
    } else if (g !== void 0) {
      const S = g.array;
      _ = g.version;
      for (let v = 0, y = S.length / 3 - 1; v < y; v += 3) {
        const w = v + 0, L = v + 1, A = v + 2;
        d.push(w, L, L, A, A, w);
      }
    } else
      return;
    const m = new (Yl(d) ? th : eh)(d, 1);
    m.version = _;
    const p = r.get(u);
    p && e.remove(p), r.set(u, m);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && l(u);
    } else
      l(u);
    return r.get(u);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function um(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(d) {
    r = d;
  }
  let a, c;
  function l(d) {
    a = d.type, c = d.bytesPerElement;
  }
  function h(d, f) {
    s.drawElements(r, f, a, d * c), t.update(f, r, 1);
  }
  function u(d, f, g) {
    if (g === 0)
      return;
    let _, m;
    if (i)
      _ = s, m = "drawElementsInstanced";
    else if (_ = e.get("ANGLE_instanced_arrays"), m = "drawElementsInstancedANGLE", _ === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    _[m](r, f, a, d * c, g), t.update(f, r, g);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function dm(s) {
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
  function n(r, o, a) {
    switch (t.calls++, o) {
      case s.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case s.LINES:
        t.lines += a * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += a * r;
        break;
      case s.POINTS:
        t.points += a * r;
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
function fm(s, e) {
  return s[0] - e[0];
}
function pm(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function mm(s, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new Qe(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, u) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, _ = g !== void 0 ? g.length : 0;
      let m = r.get(h);
      if (m === void 0 || m.count !== _) {
        let G = function() {
          B.dispose(), r.delete(h), h.removeEventListener("dispose", G);
        };
        var f = G;
        m !== void 0 && m.texture.dispose();
        const v = h.morphAttributes.position !== void 0, y = h.morphAttributes.normal !== void 0, w = h.morphAttributes.color !== void 0, L = h.morphAttributes.position || [], A = h.morphAttributes.normal || [], N = h.morphAttributes.color || [];
        let M = 0;
        v === !0 && (M = 1), y === !0 && (M = 2), w === !0 && (M = 3);
        let b = h.attributes.position.count * M, q = 1;
        b > e.maxTextureSize && (q = Math.ceil(b / e.maxTextureSize), b = e.maxTextureSize);
        const ne = new Float32Array(b * q * 4 * _), B = new Jl(ne, b, q, _);
        B.type = mn, B.needsUpdate = !0;
        const k = M * 4;
        for (let J = 0; J < _; J++) {
          const $ = L[J], Y = A[J], te = N[J], K = b * q * 4 * J;
          for (let O = 0; O < $.count; O++) {
            const V = O * k;
            v === !0 && (o.fromBufferAttribute($, O), ne[K + V + 0] = o.x, ne[K + V + 1] = o.y, ne[K + V + 2] = o.z, ne[K + V + 3] = 0), y === !0 && (o.fromBufferAttribute(Y, O), ne[K + V + 4] = o.x, ne[K + V + 5] = o.y, ne[K + V + 6] = o.z, ne[K + V + 7] = 0), w === !0 && (o.fromBufferAttribute(te, O), ne[K + V + 8] = o.x, ne[K + V + 9] = o.y, ne[K + V + 10] = o.z, ne[K + V + 11] = te.itemSize === 4 ? o.w : 1);
          }
        }
        m = {
          count: _,
          texture: B,
          size: new ce(b, q)
        }, r.set(h, m), h.addEventListener("dispose", G);
      }
      let p = 0;
      for (let v = 0; v < d.length; v++)
        p += d[v];
      const S = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(s, "morphTargetBaseInfluence", S), u.getUniforms().setValue(s, "morphTargetInfluences", d), u.getUniforms().setValue(s, "morphTargetsTexture", m.texture, t), u.getUniforms().setValue(s, "morphTargetsTextureSize", m.size);
    } else {
      const g = d === void 0 ? 0 : d.length;
      let _ = n[h.id];
      if (_ === void 0 || _.length !== g) {
        _ = [];
        for (let y = 0; y < g; y++)
          _[y] = [y, 0];
        n[h.id] = _;
      }
      for (let y = 0; y < g; y++) {
        const w = _[y];
        w[0] = y, w[1] = d[y];
      }
      _.sort(pm);
      for (let y = 0; y < 8; y++)
        y < g && _[y][1] ? (a[y][0] = _[y][0], a[y][1] = _[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
      a.sort(fm);
      const m = h.morphAttributes.position, p = h.morphAttributes.normal;
      let S = 0;
      for (let y = 0; y < 8; y++) {
        const w = a[y], L = w[0], A = w[1];
        L !== Number.MAX_SAFE_INTEGER && A ? (m && h.getAttribute("morphTarget" + y) !== m[L] && h.setAttribute("morphTarget" + y, m[L]), p && h.getAttribute("morphNormal" + y) !== p[L] && h.setAttribute("morphNormal" + y, p[L]), i[y] = A, S += A) : (m && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), p && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), i[y] = 0);
      }
      const v = h.morphTargetsRelative ? 1 : 1 - S;
      u.getUniforms().setValue(s, "morphTargetBaseInfluence", v), u.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function gm(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    if (i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), i.get(c) !== l && (t.update(c.instanceMatrix, s.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
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
    update: r,
    dispose: o
  };
}
const oh = /* @__PURE__ */ new mt(), ah = /* @__PURE__ */ new Jl(), ch = /* @__PURE__ */ new nd(), lh = /* @__PURE__ */ new sh(), Sc = [], Ec = [], Tc = new Float32Array(16), Ac = new Float32Array(9), bc = new Float32Array(4);
function ts(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0)
    return s;
  const i = e * t;
  let r = Sc[i];
  if (r === void 0 && (r = new Float32Array(i), Sc[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, s[o].toArray(r, a);
  }
  return r;
}
function ht(s, e) {
  if (s.length !== e.length)
    return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t])
      return !1;
  return !0;
}
function ut(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function Er(s, e) {
  let t = Ec[e];
  t === void 0 && (t = new Int32Array(e), Ec[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function _m(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function vm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e))
      return;
    s.uniform2fv(this.addr, e), ut(t, e);
  }
}
function xm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ht(t, e))
      return;
    s.uniform3fv(this.addr, e), ut(t, e);
  }
}
function ym(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e))
      return;
    s.uniform4fv(this.addr, e), ut(t, e);
  }
}
function Mm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    s.uniformMatrix2fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    bc.set(n), s.uniformMatrix2fv(this.addr, !1, bc), ut(t, n);
  }
}
function Sm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    s.uniformMatrix3fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    Ac.set(n), s.uniformMatrix3fv(this.addr, !1, Ac), ut(t, n);
  }
}
function Em(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    s.uniformMatrix4fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    Tc.set(n), s.uniformMatrix4fv(this.addr, !1, Tc), ut(t, n);
  }
}
function Tm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function Am(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e))
      return;
    s.uniform2iv(this.addr, e), ut(t, e);
  }
}
function bm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ht(t, e))
      return;
    s.uniform3iv(this.addr, e), ut(t, e);
  }
}
function wm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e))
      return;
    s.uniform4iv(this.addr, e), ut(t, e);
  }
}
function Rm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function Cm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e))
      return;
    s.uniform2uiv(this.addr, e), ut(t, e);
  }
}
function Lm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ht(t, e))
      return;
    s.uniform3uiv(this.addr, e), ut(t, e);
  }
}
function Pm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e))
      return;
    s.uniform4uiv(this.addr, e), ut(t, e);
  }
}
function Im(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || oh, i);
}
function Dm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || ch, i);
}
function Um(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || lh, i);
}
function Nm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ah, i);
}
function Om(s) {
  switch (s) {
    case 5126:
      return _m;
    case 35664:
      return vm;
    case 35665:
      return xm;
    case 35666:
      return ym;
    case 35674:
      return Mm;
    case 35675:
      return Sm;
    case 35676:
      return Em;
    case 5124:
    case 35670:
      return Tm;
    case 35667:
    case 35671:
      return Am;
    case 35668:
    case 35672:
      return bm;
    case 35669:
    case 35673:
      return wm;
    case 5125:
      return Rm;
    case 36294:
      return Cm;
    case 36295:
      return Lm;
    case 36296:
      return Pm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Im;
    case 35679:
    case 36299:
    case 36307:
      return Dm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Um;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Nm;
  }
}
function Fm(s, e) {
  s.uniform1fv(this.addr, e);
}
function Bm(s, e) {
  const t = ts(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function zm(s, e) {
  const t = ts(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Hm(s, e) {
  const t = ts(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function km(s, e) {
  const t = ts(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function Gm(s, e) {
  const t = ts(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Vm(s, e) {
  const t = ts(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Wm(s, e) {
  s.uniform1iv(this.addr, e);
}
function Xm(s, e) {
  s.uniform2iv(this.addr, e);
}
function $m(s, e) {
  s.uniform3iv(this.addr, e);
}
function qm(s, e) {
  s.uniform4iv(this.addr, e);
}
function jm(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Ym(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Km(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Zm(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Jm(s, e, t) {
  const n = this.cache, i = e.length, r = Er(t, i);
  ht(n, r) || (s.uniform1iv(this.addr, r), ut(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || oh, r[o]);
}
function Qm(s, e, t) {
  const n = this.cache, i = e.length, r = Er(t, i);
  ht(n, r) || (s.uniform1iv(this.addr, r), ut(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || ch, r[o]);
}
function eg(s, e, t) {
  const n = this.cache, i = e.length, r = Er(t, i);
  ht(n, r) || (s.uniform1iv(this.addr, r), ut(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || lh, r[o]);
}
function tg(s, e, t) {
  const n = this.cache, i = e.length, r = Er(t, i);
  ht(n, r) || (s.uniform1iv(this.addr, r), ut(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || ah, r[o]);
}
function ng(s) {
  switch (s) {
    case 5126:
      return Fm;
    case 35664:
      return Bm;
    case 35665:
      return zm;
    case 35666:
      return Hm;
    case 35674:
      return km;
    case 35675:
      return Gm;
    case 35676:
      return Vm;
    case 5124:
    case 35670:
      return Wm;
    case 35667:
    case 35671:
      return Xm;
    case 35668:
    case 35672:
      return $m;
    case 35669:
    case 35673:
      return qm;
    case 5125:
      return jm;
    case 36294:
      return Ym;
    case 36295:
      return Km;
    case 36296:
      return Zm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Jm;
    case 35679:
    case 36299:
    case 36307:
      return Qm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return eg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return tg;
  }
}
class ig {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Om(t.type);
  }
}
class sg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = ng(t.type);
  }
}
class rg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const so = /(\w+)(\])?(\[|\.)?/g;
function wc(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function og(s, e, t) {
  const n = s.name, i = n.length;
  for (so.lastIndex = 0; ; ) {
    const r = so.exec(n), o = so.lastIndex;
    let a = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      wc(t, l === void 0 ? new ig(a, s, e) : new sg(a, s, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new rg(a), wc(t, u)), t = u;
    }
  }
}
class dr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      og(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Rc(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
let ag = 0;
function cg(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function lg(s) {
  switch (s) {
    case Zt:
      return ["Linear", "( value )"];
    case Pe:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), ["Linear", "( value )"];
  }
}
function Cc(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + cg(s.getShaderSource(e), o);
  } else
    return i;
}
function hg(s, e) {
  const t = lg(e);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function ug(s, e) {
  let t;
  switch (e) {
    case au:
      t = "Linear";
      break;
    case cu:
      t = "Reinhard";
      break;
    case lu:
      t = "OptimizedCineon";
      break;
    case Ul:
      t = "ACESFilmic";
      break;
    case hu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function dg(s) {
  return [
    s.extensionDerivatives || !!s.envMapCubeUVHeight || s.bumpMap || s.normalMapTangentSpace || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ps).join(`
`);
}
function fg(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function pg(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), o = r.name;
    let a = 1;
    r.type === s.FLOAT_MAT2 && (a = 2), r.type === s.FLOAT_MAT3 && (a = 3), r.type === s.FLOAT_MAT4 && (a = 4), t[o] = {
      type: r.type,
      location: s.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function ps(s) {
  return s !== "";
}
function Lc(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Pc(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const mg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Uo(s) {
  return s.replace(mg, _g);
}
const gg = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"]
]);
function _g(s, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = gg.get(e);
    if (n !== void 0)
      t = Fe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Uo(t);
}
const vg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ic(s) {
  return s.replace(vg, xg);
}
function xg(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Dc(s) {
  let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function yg(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === Cl ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Ll ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === fn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Mg(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Bi:
      case zi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Mr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Sg(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case zi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Eg(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Dl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ru:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case ou:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Tg(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Ag(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = yg(t), l = Mg(t), h = Sg(t), u = Eg(t), d = Tg(t), f = t.isWebGL2 ? "" : dg(t), g = fg(r), _ = i.createProgram();
  let m, p, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ps).join(`
`), m.length > 0 && (m += `
`), p = [
    f,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(ps).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    Dc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
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
  ].filter(ps).join(`
`), p = [
    f,
    Dc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
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
    t.toneMapping !== Un ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Un ? Fe.tonemapping_pars_fragment : "",
    t.toneMapping !== Un ? ug("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.colorspace_pars_fragment,
    hg("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ps).join(`
`)), o = Uo(o), o = Lc(o, t), o = Pc(o, t), a = Uo(a), a = Lc(a, t), a = Pc(a, t), o = Ic(o), a = Ic(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, m = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    t.glslVersion === Ja ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Ja ? "" : "#define gl_FragColor pc_fragColor",
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
  const v = S + m + o, y = S + p + a, w = Rc(i, i.VERTEX_SHADER, v), L = Rc(i, i.FRAGMENT_SHADER, y);
  if (i.attachShader(_, w), i.attachShader(_, L), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_), s.debug.checkShaderErrors) {
    const M = i.getProgramInfoLog(_).trim(), b = i.getShaderInfoLog(w).trim(), q = i.getShaderInfoLog(L).trim();
    let ne = !0, B = !0;
    if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
      if (ne = !1, typeof s.debug.onShaderError == "function")
        s.debug.onShaderError(i, _, w, L);
      else {
        const k = Cc(i, w, "vertex"), G = Cc(i, L, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Program Info Log: ` + M + `
` + k + `
` + G
        );
      }
    else
      M !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", M) : (b === "" || q === "") && (B = !1);
    B && (this.diagnostics = {
      runnable: ne,
      programLog: M,
      vertexShader: {
        log: b,
        prefix: m
      },
      fragmentShader: {
        log: q,
        prefix: p
      }
    });
  }
  i.deleteShader(w), i.deleteShader(L);
  let A;
  this.getUniforms = function() {
    return A === void 0 && (A = new dr(i, _)), A;
  };
  let N;
  return this.getAttributes = function() {
    return N === void 0 && (N = pg(i, _)), N;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = ag++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = w, this.fragmentShader = L, this;
}
let bg = 0;
class wg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
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
    return n === void 0 && (n = new Rg(e), t.set(e, n)), n;
  }
}
class Rg {
  constructor(e) {
    this.id = bg++, this.code = e, this.usedTimes = 0;
  }
}
function Cg(s, e, t, n, i, r, o) {
  const a = new Yo(), c = new wg(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let f = i.precision;
  const g = {
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
  function m(M, b, q, ne, B) {
    const k = ne.fog, G = B.geometry, J = M.isMeshStandardMaterial ? ne.environment : null, $ = (M.isMeshStandardMaterial ? t : e).get(M.envMap || J), Y = !!$ && $.mapping === Mr ? $.image.height : null, te = g[M.type];
    M.precision !== null && (f = i.getMaxPrecision(M.precision), f !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", f, "instead."));
    const K = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, O = K !== void 0 ? K.length : 0;
    let V = 0;
    G.morphAttributes.position !== void 0 && (V = 1), G.morphAttributes.normal !== void 0 && (V = 2), G.morphAttributes.color !== void 0 && (V = 3);
    let pe, me, ve, Ae;
    if (te) {
      const tt = qt[te];
      pe = tt.vertexShader, me = tt.fragmentShader;
    } else
      pe = M.vertexShader, me = M.fragmentShader, c.update(M), ve = c.getVertexShaderID(M), Ae = c.getFragmentShaderID(M);
    const be = s.getRenderTarget(), Te = B.isInstancedMesh === !0, $e = !!M.map, Je = !!M.matcap, we = !!$, R = !!M.aoMap, le = !!M.lightMap, j = !!M.bumpMap, re = !!M.normalMap, Q = !!M.displacementMap, Ee = !!M.emissiveMap, xe = !!M.metalnessMap, ye = !!M.roughnessMap, Ce = M.anisotropy > 0, ke = M.clearcoat > 0, nt = M.iridescence > 0, T = M.sheen > 0, x = M.transmission > 0, F = Ce && !!M.anisotropyMap, se = ke && !!M.clearcoatMap, ee = ke && !!M.clearcoatNormalMap, oe = ke && !!M.clearcoatRoughnessMap, Se = nt && !!M.iridescenceMap, ae = nt && !!M.iridescenceThicknessMap, H = T && !!M.sheenColorMap, C = T && !!M.sheenRoughnessMap, Z = !!M.specularMap, _e = !!M.specularColorMap, he = !!M.specularIntensityMap, ge = x && !!M.transmissionMap, Ue = x && !!M.thicknessMap, We = !!M.gradientMap, I = !!M.alphaMap, de = M.alphaTest > 0, z = !!M.alphaHash, ie = !!M.extensions, fe = !!G.attributes.uv1, ze = !!G.attributes.uv2, Ye = !!G.attributes.uv3;
    let et = Un;
    return M.toneMapped && (be === null || be.isXRRenderTarget === !0) && (et = s.toneMapping), {
      isWebGL2: h,
      shaderID: te,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: pe,
      fragmentShader: me,
      defines: M.defines,
      customVertexShaderID: ve,
      customFragmentShaderID: Ae,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: f,
      instancing: Te,
      instancingColor: Te && B.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: be === null ? s.outputColorSpace : be.isXRRenderTarget === !0 ? be.texture.colorSpace : Zt,
      map: $e,
      matcap: Je,
      envMap: we,
      envMapMode: we && $.mapping,
      envMapCubeUVHeight: Y,
      aoMap: R,
      lightMap: le,
      bumpMap: j,
      normalMap: re,
      displacementMap: d && Q,
      emissiveMap: Ee,
      normalMapObjectSpace: re && M.normalMapType === Tu,
      normalMapTangentSpace: re && M.normalMapType === Xl,
      metalnessMap: xe,
      roughnessMap: ye,
      anisotropy: Ce,
      anisotropyMap: F,
      clearcoat: ke,
      clearcoatMap: se,
      clearcoatNormalMap: ee,
      clearcoatRoughnessMap: oe,
      iridescence: nt,
      iridescenceMap: Se,
      iridescenceThicknessMap: ae,
      sheen: T,
      sheenColorMap: H,
      sheenRoughnessMap: C,
      specularMap: Z,
      specularColorMap: _e,
      specularIntensityMap: he,
      transmission: x,
      transmissionMap: ge,
      thicknessMap: Ue,
      gradientMap: We,
      opaque: M.transparent === !1 && M.blending === Di,
      alphaMap: I,
      alphaTest: de,
      alphaHash: z,
      combine: M.combine,
      mapUv: $e && _(M.map.channel),
      aoMapUv: R && _(M.aoMap.channel),
      lightMapUv: le && _(M.lightMap.channel),
      bumpMapUv: j && _(M.bumpMap.channel),
      normalMapUv: re && _(M.normalMap.channel),
      displacementMapUv: Q && _(M.displacementMap.channel),
      emissiveMapUv: Ee && _(M.emissiveMap.channel),
      metalnessMapUv: xe && _(M.metalnessMap.channel),
      roughnessMapUv: ye && _(M.roughnessMap.channel),
      anisotropyMapUv: F && _(M.anisotropyMap.channel),
      clearcoatMapUv: se && _(M.clearcoatMap.channel),
      clearcoatNormalMapUv: ee && _(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: oe && _(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Se && _(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: ae && _(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: H && _(M.sheenColorMap.channel),
      sheenRoughnessMapUv: C && _(M.sheenRoughnessMap.channel),
      specularMapUv: Z && _(M.specularMap.channel),
      specularColorMapUv: _e && _(M.specularColorMap.channel),
      specularIntensityMapUv: he && _(M.specularIntensityMap.channel),
      transmissionMapUv: ge && _(M.transmissionMap.channel),
      thicknessMapUv: Ue && _(M.thicknessMap.channel),
      alphaMapUv: I && _(M.alphaMap.channel),
      vertexTangents: !!G.attributes.tangent && (re || Ce),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
      vertexUv1s: fe,
      vertexUv2s: ze,
      vertexUv3s: Ye,
      pointsUvs: B.isPoints === !0 && !!G.attributes.uv && ($e || I),
      fog: !!k,
      useFog: M.fog === !0,
      fogExp2: k && k.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: B.isSkinnedMesh === !0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: O,
      morphTextureStride: V,
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
      shadowMapEnabled: s.shadowMap.enabled && q.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: et,
      useLegacyLights: s._useLegacyLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === jt,
      flipSided: M.side === wt,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: ie && M.extensions.derivatives === !0,
      extensionFragDepth: ie && M.extensions.fragDepth === !0,
      extensionDrawBuffers: ie && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ie && M.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
  }
  function p(M) {
    const b = [];
    if (M.shaderID ? b.push(M.shaderID) : (b.push(M.customVertexShaderID), b.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const q in M.defines)
        b.push(q), b.push(M.defines[q]);
    return M.isRawShaderMaterial === !1 && (S(b, M), v(b, M), b.push(s.outputColorSpace)), b.push(M.customProgramCacheKey), b.join();
  }
  function S(M, b) {
    M.push(b.precision), M.push(b.outputColorSpace), M.push(b.envMapMode), M.push(b.envMapCubeUVHeight), M.push(b.mapUv), M.push(b.alphaMapUv), M.push(b.lightMapUv), M.push(b.aoMapUv), M.push(b.bumpMapUv), M.push(b.normalMapUv), M.push(b.displacementMapUv), M.push(b.emissiveMapUv), M.push(b.metalnessMapUv), M.push(b.roughnessMapUv), M.push(b.anisotropyMapUv), M.push(b.clearcoatMapUv), M.push(b.clearcoatNormalMapUv), M.push(b.clearcoatRoughnessMapUv), M.push(b.iridescenceMapUv), M.push(b.iridescenceThicknessMapUv), M.push(b.sheenColorMapUv), M.push(b.sheenRoughnessMapUv), M.push(b.specularMapUv), M.push(b.specularColorMapUv), M.push(b.specularIntensityMapUv), M.push(b.transmissionMapUv), M.push(b.thicknessMapUv), M.push(b.combine), M.push(b.fogExp2), M.push(b.sizeAttenuation), M.push(b.morphTargetsCount), M.push(b.morphAttributeCount), M.push(b.numDirLights), M.push(b.numPointLights), M.push(b.numSpotLights), M.push(b.numSpotLightMaps), M.push(b.numHemiLights), M.push(b.numRectAreaLights), M.push(b.numDirLightShadows), M.push(b.numPointLightShadows), M.push(b.numSpotLightShadows), M.push(b.numSpotLightShadowsWithMaps), M.push(b.shadowMapType), M.push(b.toneMapping), M.push(b.numClippingPlanes), M.push(b.numClipIntersection), M.push(b.depthPacking);
  }
  function v(M, b) {
    a.disableAll(), b.isWebGL2 && a.enable(0), b.supportsVertexTextures && a.enable(1), b.instancing && a.enable(2), b.instancingColor && a.enable(3), b.matcap && a.enable(4), b.envMap && a.enable(5), b.normalMapObjectSpace && a.enable(6), b.normalMapTangentSpace && a.enable(7), b.clearcoat && a.enable(8), b.iridescence && a.enable(9), b.alphaTest && a.enable(10), b.vertexColors && a.enable(11), b.vertexAlphas && a.enable(12), b.vertexUv1s && a.enable(13), b.vertexUv2s && a.enable(14), b.vertexUv3s && a.enable(15), b.vertexTangents && a.enable(16), b.anisotropy && a.enable(17), M.push(a.mask), a.disableAll(), b.fog && a.enable(0), b.useFog && a.enable(1), b.flatShading && a.enable(2), b.logarithmicDepthBuffer && a.enable(3), b.skinning && a.enable(4), b.morphTargets && a.enable(5), b.morphNormals && a.enable(6), b.morphColors && a.enable(7), b.premultipliedAlpha && a.enable(8), b.shadowMapEnabled && a.enable(9), b.useLegacyLights && a.enable(10), b.doubleSided && a.enable(11), b.flipSided && a.enable(12), b.useDepthPacking && a.enable(13), b.dithering && a.enable(14), b.transmission && a.enable(15), b.sheen && a.enable(16), b.opaque && a.enable(17), b.pointsUvs && a.enable(18), M.push(a.mask);
  }
  function y(M) {
    const b = g[M.type];
    let q;
    if (b) {
      const ne = qt[b];
      q = pd.clone(ne.uniforms);
    } else
      q = M.uniforms;
    return q;
  }
  function w(M, b) {
    let q;
    for (let ne = 0, B = l.length; ne < B; ne++) {
      const k = l[ne];
      if (k.cacheKey === b) {
        q = k, ++q.usedTimes;
        break;
      }
    }
    return q === void 0 && (q = new Ag(s, b, M, r), l.push(q)), q;
  }
  function L(M) {
    if (--M.usedTimes === 0) {
      const b = l.indexOf(M);
      l[b] = l[l.length - 1], l.pop(), M.destroy();
    }
  }
  function A(M) {
    c.remove(M);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: y,
    acquireProgram: w,
    releaseProgram: L,
    releaseShaderCache: A,
    programs: l,
    dispose: N
  };
}
function Lg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let o = s.get(r);
    return o === void 0 && (o = {}, s.set(r, o)), o;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, o, a) {
    s.get(r)[o] = a;
  }
  function i() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Pg(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Uc(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Nc() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, f, g, _, m) {
    let p = s[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: d,
      material: f,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: _,
      group: m
    }, s[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = _, p.group = m), e++, p;
  }
  function a(u, d, f, g, _, m) {
    const p = o(u, d, f, g, _, m);
    f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : t.push(p);
  }
  function c(u, d, f, g, _, m) {
    const p = o(u, d, f, g, _, m);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || Pg), n.length > 1 && n.sort(d || Uc), i.length > 1 && i.sort(d || Uc);
  }
  function h() {
    for (let u = e, d = s.length; u < d; u++) {
      const f = s[u];
      if (f.id === null)
        break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Ig() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new Nc(), s.set(n, [o])) : i >= r.length ? (o = new Nc(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Dg() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new P(),
            color: new Ne()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new Ne(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new Ne(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new Ne(),
            groundColor: new Ne()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ne(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P()
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
function Ug() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ce()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ce()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ce(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let Ng = 0;
function Og(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function Fg(s, e) {
  const t = new Dg(), n = Ug(), i = {
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
    i.probe.push(new P());
  const r = new P(), o = new Be(), a = new Be();
  function c(h, u) {
    let d = 0, f = 0, g = 0;
    for (let q = 0; q < 9; q++)
      i.probe[q].set(0, 0, 0);
    let _ = 0, m = 0, p = 0, S = 0, v = 0, y = 0, w = 0, L = 0, A = 0, N = 0;
    h.sort(Og);
    const M = u === !0 ? Math.PI : 1;
    for (let q = 0, ne = h.length; q < ne; q++) {
      const B = h[q], k = B.color, G = B.intensity, J = B.distance, $ = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight)
        d += k.r * G * M, f += k.g * G * M, g += k.b * G * M;
      else if (B.isLightProbe)
        for (let Y = 0; Y < 9; Y++)
          i.probe[Y].addScaledVector(B.sh.coefficients[Y], G);
      else if (B.isDirectionalLight) {
        const Y = t.get(B);
        if (Y.color.copy(B.color).multiplyScalar(B.intensity * M), B.castShadow) {
          const te = B.shadow, K = n.get(B);
          K.shadowBias = te.bias, K.shadowNormalBias = te.normalBias, K.shadowRadius = te.radius, K.shadowMapSize = te.mapSize, i.directionalShadow[_] = K, i.directionalShadowMap[_] = $, i.directionalShadowMatrix[_] = B.shadow.matrix, y++;
        }
        i.directional[_] = Y, _++;
      } else if (B.isSpotLight) {
        const Y = t.get(B);
        Y.position.setFromMatrixPosition(B.matrixWorld), Y.color.copy(k).multiplyScalar(G * M), Y.distance = J, Y.coneCos = Math.cos(B.angle), Y.penumbraCos = Math.cos(B.angle * (1 - B.penumbra)), Y.decay = B.decay, i.spot[p] = Y;
        const te = B.shadow;
        if (B.map && (i.spotLightMap[A] = B.map, A++, te.updateMatrices(B), B.castShadow && N++), i.spotLightMatrix[p] = te.matrix, B.castShadow) {
          const K = n.get(B);
          K.shadowBias = te.bias, K.shadowNormalBias = te.normalBias, K.shadowRadius = te.radius, K.shadowMapSize = te.mapSize, i.spotShadow[p] = K, i.spotShadowMap[p] = $, L++;
        }
        p++;
      } else if (B.isRectAreaLight) {
        const Y = t.get(B);
        Y.color.copy(k).multiplyScalar(G), Y.halfWidth.set(B.width * 0.5, 0, 0), Y.halfHeight.set(0, B.height * 0.5, 0), i.rectArea[S] = Y, S++;
      } else if (B.isPointLight) {
        const Y = t.get(B);
        if (Y.color.copy(B.color).multiplyScalar(B.intensity * M), Y.distance = B.distance, Y.decay = B.decay, B.castShadow) {
          const te = B.shadow, K = n.get(B);
          K.shadowBias = te.bias, K.shadowNormalBias = te.normalBias, K.shadowRadius = te.radius, K.shadowMapSize = te.mapSize, K.shadowCameraNear = te.camera.near, K.shadowCameraFar = te.camera.far, i.pointShadow[m] = K, i.pointShadowMap[m] = $, i.pointShadowMatrix[m] = B.shadow.matrix, w++;
        }
        i.point[m] = Y, m++;
      } else if (B.isHemisphereLight) {
        const Y = t.get(B);
        Y.skyColor.copy(B.color).multiplyScalar(G * M), Y.groundColor.copy(B.groundColor).multiplyScalar(G * M), i.hemi[v] = Y, v++;
      }
    }
    S > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ue.LTC_FLOAT_1, i.rectAreaLTC2 = ue.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ue.LTC_HALF_1, i.rectAreaLTC2 = ue.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = g;
    const b = i.hash;
    (b.directionalLength !== _ || b.pointLength !== m || b.spotLength !== p || b.rectAreaLength !== S || b.hemiLength !== v || b.numDirectionalShadows !== y || b.numPointShadows !== w || b.numSpotShadows !== L || b.numSpotMaps !== A) && (i.directional.length = _, i.spot.length = p, i.rectArea.length = S, i.point.length = m, i.hemi.length = v, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = L, i.spotShadowMap.length = L, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = w, i.spotLightMatrix.length = L + A - N, i.spotLightMap.length = A, i.numSpotLightShadowsWithMaps = N, b.directionalLength = _, b.pointLength = m, b.spotLength = p, b.rectAreaLength = S, b.hemiLength = v, b.numDirectionalShadows = y, b.numPointShadows = w, b.numSpotShadows = L, b.numSpotMaps = A, i.version = Ng++);
  }
  function l(h, u) {
    let d = 0, f = 0, g = 0, _ = 0, m = 0;
    const p = u.matrixWorldInverse;
    for (let S = 0, v = h.length; S < v; S++) {
      const y = h[S];
      if (y.isDirectionalLight) {
        const w = i.directional[d];
        w.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(p), d++;
      } else if (y.isSpotLight) {
        const w = i.spot[g];
        w.position.setFromMatrixPosition(y.matrixWorld), w.position.applyMatrix4(p), w.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(p), g++;
      } else if (y.isRectAreaLight) {
        const w = i.rectArea[_];
        w.position.setFromMatrixPosition(y.matrixWorld), w.position.applyMatrix4(p), a.identity(), o.copy(y.matrixWorld), o.premultiply(p), a.extractRotation(o), w.halfWidth.set(y.width * 0.5, 0, 0), w.halfHeight.set(0, y.height * 0.5, 0), w.halfWidth.applyMatrix4(a), w.halfHeight.applyMatrix4(a), _++;
      } else if (y.isPointLight) {
        const w = i.point[f];
        w.position.setFromMatrixPosition(y.matrixWorld), w.position.applyMatrix4(p), f++;
      } else if (y.isHemisphereLight) {
        const w = i.hemi[m];
        w.direction.setFromMatrixPosition(y.matrixWorld), w.direction.transformDirection(p), m++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Oc(s, e) {
  const t = new Fg(s, e), n = [], i = [];
  function r() {
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
    init: r,
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
function Bg(s, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let c;
    return a === void 0 ? (c = new Oc(s, e), t.set(r, [c])) : o >= a.length ? (c = new Oc(s, e), a.push(c)) : c = a[o], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class zg extends Kt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Su, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Hg extends Kt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const kg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Gg = `uniform sampler2D shadow_pass;
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
function Vg(s, e, t) {
  let n = new Ko();
  const i = new ce(), r = new ce(), o = new Qe(), a = new zg({ depthPacking: Eu }), c = new Hg(), l = {}, h = t.maxTextureSize, u = { [_n]: wt, [wt]: _n, [jt]: jt }, d = new ii({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ce() },
      radius: { value: 4 }
    },
    vertexShader: kg,
    fragmentShader: Gg
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new Xt();
  g.setAttribute(
    "position",
    new Tt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new bt(g, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Cl;
  let p = this.type;
  this.render = function(w, L, A) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || w.length === 0)
      return;
    const N = s.getRenderTarget(), M = s.getActiveCubeFace(), b = s.getActiveMipmapLevel(), q = s.state;
    q.setBlending(Dn), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(!0), q.setScissorTest(!1);
    const ne = p !== fn && this.type === fn, B = p === fn && this.type !== fn;
    for (let k = 0, G = w.length; k < G; k++) {
      const J = w[k], $ = J.shadow;
      if ($ === void 0) {
        console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if ($.autoUpdate === !1 && $.needsUpdate === !1)
        continue;
      i.copy($.mapSize);
      const Y = $.getFrameExtents();
      if (i.multiply(Y), r.copy($.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / Y.x), i.x = r.x * Y.x, $.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / Y.y), i.y = r.y * Y.y, $.mapSize.y = r.y)), $.map === null || ne === !0 || B === !0) {
        const K = this.type !== fn ? { minFilter: ft, magFilter: ft } : {};
        $.map !== null && $.map.dispose(), $.map = new ni(i.x, i.y, K), $.map.texture.name = J.name + ".shadowMap", $.camera.updateProjectionMatrix();
      }
      s.setRenderTarget($.map), s.clear();
      const te = $.getViewportCount();
      for (let K = 0; K < te; K++) {
        const O = $.getViewport(K);
        o.set(
          r.x * O.x,
          r.y * O.y,
          r.x * O.z,
          r.y * O.w
        ), q.viewport(o), $.updateMatrices(J, K), n = $.getFrustum(), y(L, A, $.camera, J, this.type);
      }
      $.isPointLightShadow !== !0 && this.type === fn && S($, A), $.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, s.setRenderTarget(N, M, b);
  };
  function S(w, L) {
    const A = e.update(_);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, f.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), w.mapPass === null && (w.mapPass = new ni(i.x, i.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, s.setRenderTarget(w.mapPass), s.clear(), s.renderBufferDirect(L, null, A, d, _, null), f.uniforms.shadow_pass.value = w.mapPass.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, s.setRenderTarget(w.map), s.clear(), s.renderBufferDirect(L, null, A, f, _, null);
  }
  function v(w, L, A, N) {
    let M = null;
    const b = A.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (b !== void 0)
      M = b;
    else if (M = A.isPointLight === !0 ? c : a, s.localClippingEnabled && L.clipShadows === !0 && Array.isArray(L.clippingPlanes) && L.clippingPlanes.length !== 0 || L.displacementMap && L.displacementScale !== 0 || L.alphaMap && L.alphaTest > 0 || L.map && L.alphaTest > 0) {
      const q = M.uuid, ne = L.uuid;
      let B = l[q];
      B === void 0 && (B = {}, l[q] = B);
      let k = B[ne];
      k === void 0 && (k = M.clone(), B[ne] = k), M = k;
    }
    if (M.visible = L.visible, M.wireframe = L.wireframe, N === fn ? M.side = L.shadowSide !== null ? L.shadowSide : L.side : M.side = L.shadowSide !== null ? L.shadowSide : u[L.side], M.alphaMap = L.alphaMap, M.alphaTest = L.alphaTest, M.map = L.map, M.clipShadows = L.clipShadows, M.clippingPlanes = L.clippingPlanes, M.clipIntersection = L.clipIntersection, M.displacementMap = L.displacementMap, M.displacementScale = L.displacementScale, M.displacementBias = L.displacementBias, M.wireframeLinewidth = L.wireframeLinewidth, M.linewidth = L.linewidth, A.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const q = s.properties.get(M);
      q.light = A;
    }
    return M;
  }
  function y(w, L, A, N, M) {
    if (w.visible === !1)
      return;
    if (w.layers.test(L.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === fn) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, w.matrixWorld);
      const ne = e.update(w), B = w.material;
      if (Array.isArray(B)) {
        const k = ne.groups;
        for (let G = 0, J = k.length; G < J; G++) {
          const $ = k[G], Y = B[$.materialIndex];
          if (Y && Y.visible) {
            const te = v(w, Y, N, M);
            s.renderBufferDirect(A, null, ne, te, w, $);
          }
        }
      } else if (B.visible) {
        const k = v(w, B, N, M);
        s.renderBufferDirect(A, null, ne, k, w, null);
      }
    }
    const q = w.children;
    for (let ne = 0, B = q.length; ne < B; ne++)
      y(q[ne], L, A, N, M);
  }
}
function Wg(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let I = !1;
    const de = new Qe();
    let z = null;
    const ie = new Qe(0, 0, 0, 0);
    return {
      setMask: function(fe) {
        z !== fe && !I && (s.colorMask(fe, fe, fe, fe), z = fe);
      },
      setLocked: function(fe) {
        I = fe;
      },
      setClear: function(fe, ze, Ye, et, Mn) {
        Mn === !0 && (fe *= et, ze *= et, Ye *= et), de.set(fe, ze, Ye, et), ie.equals(de) === !1 && (s.clearColor(fe, ze, Ye, et), ie.copy(de));
      },
      reset: function() {
        I = !1, z = null, ie.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let I = !1, de = null, z = null, ie = null;
    return {
      setTest: function(fe) {
        fe ? be(s.DEPTH_TEST) : Te(s.DEPTH_TEST);
      },
      setMask: function(fe) {
        de !== fe && !I && (s.depthMask(fe), de = fe);
      },
      setFunc: function(fe) {
        if (z !== fe) {
          switch (fe) {
            case Jh:
              s.depthFunc(s.NEVER);
              break;
            case Qh:
              s.depthFunc(s.ALWAYS);
              break;
            case eu:
              s.depthFunc(s.LESS);
              break;
            case bo:
              s.depthFunc(s.LEQUAL);
              break;
            case tu:
              s.depthFunc(s.EQUAL);
              break;
            case nu:
              s.depthFunc(s.GEQUAL);
              break;
            case iu:
              s.depthFunc(s.GREATER);
              break;
            case su:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          z = fe;
        }
      },
      setLocked: function(fe) {
        I = fe;
      },
      setClear: function(fe) {
        ie !== fe && (s.clearDepth(fe), ie = fe);
      },
      reset: function() {
        I = !1, de = null, z = null, ie = null;
      }
    };
  }
  function o() {
    let I = !1, de = null, z = null, ie = null, fe = null, ze = null, Ye = null, et = null, Mn = null;
    return {
      setTest: function(tt) {
        I || (tt ? be(s.STENCIL_TEST) : Te(s.STENCIL_TEST));
      },
      setMask: function(tt) {
        de !== tt && !I && (s.stencilMask(tt), de = tt);
      },
      setFunc: function(tt, $t, vt) {
        (z !== tt || ie !== $t || fe !== vt) && (s.stencilFunc(tt, $t, vt), z = tt, ie = $t, fe = vt);
      },
      setOp: function(tt, $t, vt) {
        (ze !== tt || Ye !== $t || et !== vt) && (s.stencilOp(tt, $t, vt), ze = tt, Ye = $t, et = vt);
      },
      setLocked: function(tt) {
        I = tt;
      },
      setClear: function(tt) {
        Mn !== tt && (s.clearStencil(tt), Mn = tt);
      },
      reset: function() {
        I = !1, de = null, z = null, ie = null, fe = null, ze = null, Ye = null, et = null, Mn = null;
      }
    };
  }
  const a = new i(), c = new r(), l = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, f = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], m = null, p = !1, S = null, v = null, y = null, w = null, L = null, A = null, N = null, M = !1, b = null, q = null, ne = null, B = null, k = null;
  const G = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let J = !1, $ = 0;
  const Y = s.getParameter(s.VERSION);
  Y.indexOf("WebGL") !== -1 ? ($ = parseFloat(/^WebGL (\d)/.exec(Y)[1]), J = $ >= 1) : Y.indexOf("OpenGL ES") !== -1 && ($ = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), J = $ >= 2);
  let te = null, K = {};
  const O = s.getParameter(s.SCISSOR_BOX), V = s.getParameter(s.VIEWPORT), pe = new Qe().fromArray(O), me = new Qe().fromArray(V);
  function ve(I, de, z, ie) {
    const fe = new Uint8Array(4), ze = s.createTexture();
    s.bindTexture(I, ze), s.texParameteri(I, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(I, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Ye = 0; Ye < z; Ye++)
      n && (I === s.TEXTURE_3D || I === s.TEXTURE_2D_ARRAY) ? s.texImage3D(de, 0, s.RGBA, 1, 1, ie, 0, s.RGBA, s.UNSIGNED_BYTE, fe) : s.texImage2D(de + Ye, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, fe);
    return ze;
  }
  const Ae = {};
  Ae[s.TEXTURE_2D] = ve(s.TEXTURE_2D, s.TEXTURE_2D, 1), Ae[s.TEXTURE_CUBE_MAP] = ve(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Ae[s.TEXTURE_2D_ARRAY] = ve(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), Ae[s.TEXTURE_3D] = ve(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), be(s.DEPTH_TEST), c.setFunc(bo), Q(!1), Ee(ya), be(s.CULL_FACE), j(Dn);
  function be(I) {
    d[I] !== !0 && (s.enable(I), d[I] = !0);
  }
  function Te(I) {
    d[I] !== !1 && (s.disable(I), d[I] = !1);
  }
  function $e(I, de) {
    return f[I] !== de ? (s.bindFramebuffer(I, de), f[I] = de, n && (I === s.DRAW_FRAMEBUFFER && (f[s.FRAMEBUFFER] = de), I === s.FRAMEBUFFER && (f[s.DRAW_FRAMEBUFFER] = de)), !0) : !1;
  }
  function Je(I, de) {
    let z = _, ie = !1;
    if (I)
      if (z = g.get(de), z === void 0 && (z = [], g.set(de, z)), I.isWebGLMultipleRenderTargets) {
        const fe = I.texture;
        if (z.length !== fe.length || z[0] !== s.COLOR_ATTACHMENT0) {
          for (let ze = 0, Ye = fe.length; ze < Ye; ze++)
            z[ze] = s.COLOR_ATTACHMENT0 + ze;
          z.length = fe.length, ie = !0;
        }
      } else
        z[0] !== s.COLOR_ATTACHMENT0 && (z[0] = s.COLOR_ATTACHMENT0, ie = !0);
    else
      z[0] !== s.BACK && (z[0] = s.BACK, ie = !0);
    ie && (t.isWebGL2 ? s.drawBuffers(z) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z));
  }
  function we(I) {
    return m !== I ? (s.useProgram(I), m = I, !0) : !1;
  }
  const R = {
    [Ci]: s.FUNC_ADD,
    [kh]: s.FUNC_SUBTRACT,
    [Gh]: s.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    R[Ta] = s.MIN, R[Aa] = s.MAX;
  else {
    const I = e.get("EXT_blend_minmax");
    I !== null && (R[Ta] = I.MIN_EXT, R[Aa] = I.MAX_EXT);
  }
  const le = {
    [Vh]: s.ZERO,
    [Wh]: s.ONE,
    [Xh]: s.SRC_COLOR,
    [Pl]: s.SRC_ALPHA,
    [Zh]: s.SRC_ALPHA_SATURATE,
    [Yh]: s.DST_COLOR,
    [qh]: s.DST_ALPHA,
    [$h]: s.ONE_MINUS_SRC_COLOR,
    [Il]: s.ONE_MINUS_SRC_ALPHA,
    [Kh]: s.ONE_MINUS_DST_COLOR,
    [jh]: s.ONE_MINUS_DST_ALPHA
  };
  function j(I, de, z, ie, fe, ze, Ye, et) {
    if (I === Dn) {
      p === !0 && (Te(s.BLEND), p = !1);
      return;
    }
    if (p === !1 && (be(s.BLEND), p = !0), I !== Hh) {
      if (I !== S || et !== M) {
        if ((v !== Ci || L !== Ci) && (s.blendEquation(s.FUNC_ADD), v = Ci, L = Ci), et)
          switch (I) {
            case Di:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case Ma:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case Sa:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Ea:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case Di:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case Ma:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case Sa:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Ea:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        y = null, w = null, A = null, N = null, S = I, M = et;
      }
      return;
    }
    fe = fe || de, ze = ze || z, Ye = Ye || ie, (de !== v || fe !== L) && (s.blendEquationSeparate(R[de], R[fe]), v = de, L = fe), (z !== y || ie !== w || ze !== A || Ye !== N) && (s.blendFuncSeparate(le[z], le[ie], le[ze], le[Ye]), y = z, w = ie, A = ze, N = Ye), S = I, M = !1;
  }
  function re(I, de) {
    I.side === jt ? Te(s.CULL_FACE) : be(s.CULL_FACE);
    let z = I.side === wt;
    de && (z = !z), Q(z), I.blending === Di && I.transparent === !1 ? j(Dn) : j(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.premultipliedAlpha), c.setFunc(I.depthFunc), c.setTest(I.depthTest), c.setMask(I.depthWrite), a.setMask(I.colorWrite);
    const ie = I.stencilWrite;
    l.setTest(ie), ie && (l.setMask(I.stencilWriteMask), l.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), l.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), ye(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === !0 ? be(s.SAMPLE_ALPHA_TO_COVERAGE) : Te(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Q(I) {
    b !== I && (I ? s.frontFace(s.CW) : s.frontFace(s.CCW), b = I);
  }
  function Ee(I) {
    I !== Bh ? (be(s.CULL_FACE), I !== q && (I === ya ? s.cullFace(s.BACK) : I === zh ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : Te(s.CULL_FACE), q = I;
  }
  function xe(I) {
    I !== ne && (J && s.lineWidth(I), ne = I);
  }
  function ye(I, de, z) {
    I ? (be(s.POLYGON_OFFSET_FILL), (B !== de || k !== z) && (s.polygonOffset(de, z), B = de, k = z)) : Te(s.POLYGON_OFFSET_FILL);
  }
  function Ce(I) {
    I ? be(s.SCISSOR_TEST) : Te(s.SCISSOR_TEST);
  }
  function ke(I) {
    I === void 0 && (I = s.TEXTURE0 + G - 1), te !== I && (s.activeTexture(I), te = I);
  }
  function nt(I, de, z) {
    z === void 0 && (te === null ? z = s.TEXTURE0 + G - 1 : z = te);
    let ie = K[z];
    ie === void 0 && (ie = { type: void 0, texture: void 0 }, K[z] = ie), (ie.type !== I || ie.texture !== de) && (te !== z && (s.activeTexture(z), te = z), s.bindTexture(I, de || Ae[I]), ie.type = I, ie.texture = de);
  }
  function T() {
    const I = K[te];
    I !== void 0 && I.type !== void 0 && (s.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
  }
  function x() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function F() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function se() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ee() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function oe() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Se() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ae() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function H() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function C() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Z() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function _e(I) {
    pe.equals(I) === !1 && (s.scissor(I.x, I.y, I.z, I.w), pe.copy(I));
  }
  function he(I) {
    me.equals(I) === !1 && (s.viewport(I.x, I.y, I.z, I.w), me.copy(I));
  }
  function ge(I, de) {
    let z = u.get(de);
    z === void 0 && (z = /* @__PURE__ */ new WeakMap(), u.set(de, z));
    let ie = z.get(I);
    ie === void 0 && (ie = s.getUniformBlockIndex(de, I.name), z.set(I, ie));
  }
  function Ue(I, de) {
    const ie = u.get(de).get(I);
    h.get(de) !== ie && (s.uniformBlockBinding(de, ie, I.__bindingPointIndex), h.set(de, ie));
  }
  function We() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), n === !0 && (s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), d = {}, te = null, K = {}, f = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], m = null, p = !1, S = null, v = null, y = null, w = null, L = null, A = null, N = null, M = !1, b = null, q = null, ne = null, B = null, k = null, pe.set(0, 0, s.canvas.width, s.canvas.height), me.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: be,
    disable: Te,
    bindFramebuffer: $e,
    drawBuffers: Je,
    useProgram: we,
    setBlending: j,
    setMaterial: re,
    setFlipSided: Q,
    setCullFace: Ee,
    setLineWidth: xe,
    setPolygonOffset: ye,
    setScissorTest: Ce,
    activeTexture: ke,
    bindTexture: nt,
    unbindTexture: T,
    compressedTexImage2D: x,
    compressedTexImage3D: F,
    texImage2D: C,
    texImage3D: Z,
    updateUBOMapping: ge,
    uniformBlockBinding: Ue,
    texStorage2D: ae,
    texStorage3D: H,
    texSubImage2D: se,
    texSubImage3D: ee,
    compressedTexSubImage2D: oe,
    compressedTexSubImage3D: Se,
    scissor: _e,
    viewport: he,
    reset: We
  };
}
function Xg(s, e, t, n, i, r, o) {
  const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, f = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let _;
  const m = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(T, x) {
    return p ? new OffscreenCanvas(T, x) : Ss("canvas");
  }
  function v(T, x, F, se) {
    let ee = 1;
    if ((T.width > se || T.height > se) && (ee = se / Math.max(T.width, T.height)), ee < 1 || x === !0)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap) {
        const oe = x ? _r : Math.floor, Se = oe(ee * T.width), ae = oe(ee * T.height);
        _ === void 0 && (_ = S(Se, ae));
        const H = F ? S(Se, ae) : _;
        return H.width = Se, H.height = ae, H.getContext("2d").drawImage(T, 0, 0, Se, ae), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + T.width + "x" + T.height + ") to (" + Se + "x" + ae + ")."), H;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + T.width + "x" + T.height + ")."), T;
    return T;
  }
  function y(T) {
    return Do(T.width) && Do(T.height);
  }
  function w(T) {
    return a ? !1 : T.wrapS !== Ut || T.wrapT !== Ut || T.minFilter !== ft && T.minFilter !== At;
  }
  function L(T, x) {
    return T.generateMipmaps && x && T.minFilter !== ft && T.minFilter !== At;
  }
  function A(T) {
    s.generateMipmap(T);
  }
  function N(T, x, F, se, ee = !1) {
    if (a === !1)
      return x;
    if (T !== null) {
      if (s[T] !== void 0)
        return s[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let oe = x;
    return x === s.RED && (F === s.FLOAT && (oe = s.R32F), F === s.HALF_FLOAT && (oe = s.R16F), F === s.UNSIGNED_BYTE && (oe = s.R8)), x === s.RED_INTEGER && (F === s.UNSIGNED_BYTE && (oe = s.R8UI), F === s.UNSIGNED_SHORT && (oe = s.R16UI), F === s.UNSIGNED_INT && (oe = s.R32UI), F === s.BYTE && (oe = s.R8I), F === s.SHORT && (oe = s.R16I), F === s.INT && (oe = s.R32I)), x === s.RG && (F === s.FLOAT && (oe = s.RG32F), F === s.HALF_FLOAT && (oe = s.RG16F), F === s.UNSIGNED_BYTE && (oe = s.RG8)), x === s.RGBA && (F === s.FLOAT && (oe = s.RGBA32F), F === s.HALF_FLOAT && (oe = s.RGBA16F), F === s.UNSIGNED_BYTE && (oe = se === Pe && ee === !1 ? s.SRGB8_ALPHA8 : s.RGBA8), F === s.UNSIGNED_SHORT_4_4_4_4 && (oe = s.RGBA4), F === s.UNSIGNED_SHORT_5_5_5_1 && (oe = s.RGB5_A1)), (oe === s.R16F || oe === s.R32F || oe === s.RG16F || oe === s.RG32F || oe === s.RGBA16F || oe === s.RGBA32F) && e.get("EXT_color_buffer_float"), oe;
  }
  function M(T, x, F) {
    return L(T, F) === !0 || T.isFramebufferTexture && T.minFilter !== ft && T.minFilter !== At ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1;
  }
  function b(T) {
    return T === ft || T === Co || T === ur ? s.NEAREST : s.LINEAR;
  }
  function q(T) {
    const x = T.target;
    x.removeEventListener("dispose", q), B(x), x.isVideoTexture && g.delete(x);
  }
  function ne(T) {
    const x = T.target;
    x.removeEventListener("dispose", ne), G(x);
  }
  function B(T) {
    const x = n.get(T);
    if (x.__webglInit === void 0)
      return;
    const F = T.source, se = m.get(F);
    if (se) {
      const ee = se[x.__cacheKey];
      ee.usedTimes--, ee.usedTimes === 0 && k(T), Object.keys(se).length === 0 && m.delete(F);
    }
    n.remove(T);
  }
  function k(T) {
    const x = n.get(T);
    s.deleteTexture(x.__webglTexture);
    const F = T.source, se = m.get(F);
    delete se[x.__cacheKey], o.memory.textures--;
  }
  function G(T) {
    const x = T.texture, F = n.get(T), se = n.get(x);
    if (se.__webglTexture !== void 0 && (s.deleteTexture(se.__webglTexture), o.memory.textures--), T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
      for (let ee = 0; ee < 6; ee++) {
        if (Array.isArray(F.__webglFramebuffer[ee]))
          for (let oe = 0; oe < F.__webglFramebuffer[ee].length; oe++)
            s.deleteFramebuffer(F.__webglFramebuffer[ee][oe]);
        else
          s.deleteFramebuffer(F.__webglFramebuffer[ee]);
        F.__webglDepthbuffer && s.deleteRenderbuffer(F.__webglDepthbuffer[ee]);
      }
    else {
      if (Array.isArray(F.__webglFramebuffer))
        for (let ee = 0; ee < F.__webglFramebuffer.length; ee++)
          s.deleteFramebuffer(F.__webglFramebuffer[ee]);
      else
        s.deleteFramebuffer(F.__webglFramebuffer);
      if (F.__webglDepthbuffer && s.deleteRenderbuffer(F.__webglDepthbuffer), F.__webglMultisampledFramebuffer && s.deleteFramebuffer(F.__webglMultisampledFramebuffer), F.__webglColorRenderbuffer)
        for (let ee = 0; ee < F.__webglColorRenderbuffer.length; ee++)
          F.__webglColorRenderbuffer[ee] && s.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);
      F.__webglDepthRenderbuffer && s.deleteRenderbuffer(F.__webglDepthRenderbuffer);
    }
    if (T.isWebGLMultipleRenderTargets)
      for (let ee = 0, oe = x.length; ee < oe; ee++) {
        const Se = n.get(x[ee]);
        Se.__webglTexture && (s.deleteTexture(Se.__webglTexture), o.memory.textures--), n.remove(x[ee]);
      }
    n.remove(x), n.remove(T);
  }
  let J = 0;
  function $() {
    J = 0;
  }
  function Y() {
    const T = J;
    return T >= c && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + c), J += 1, T;
  }
  function te(T) {
    const x = [];
    return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join();
  }
  function K(T, x) {
    const F = n.get(T);
    if (T.isVideoTexture && ke(T), T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) {
      const se = T.image;
      if (se === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (se.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        $e(F, T, x);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, F.__webglTexture, s.TEXTURE0 + x);
  }
  function O(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      $e(F, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, F.__webglTexture, s.TEXTURE0 + x);
  }
  function V(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      $e(F, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, F.__webglTexture, s.TEXTURE0 + x);
  }
  function pe(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Je(F, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, F.__webglTexture, s.TEXTURE0 + x);
  }
  const me = {
    [Hi]: s.REPEAT,
    [Ut]: s.CLAMP_TO_EDGE,
    [mr]: s.MIRRORED_REPEAT
  }, ve = {
    [ft]: s.NEAREST,
    [Co]: s.NEAREST_MIPMAP_NEAREST,
    [ur]: s.NEAREST_MIPMAP_LINEAR,
    [At]: s.LINEAR,
    [Ol]: s.LINEAR_MIPMAP_NEAREST,
    [ti]: s.LINEAR_MIPMAP_LINEAR
  }, Ae = {
    [bu]: s.NEVER,
    [Du]: s.ALWAYS,
    [wu]: s.LESS,
    [Cu]: s.LEQUAL,
    [Ru]: s.EQUAL,
    [Iu]: s.GEQUAL,
    [Lu]: s.GREATER,
    [Pu]: s.NOTEQUAL
  };
  function be(T, x, F) {
    if (F ? (s.texParameteri(T, s.TEXTURE_WRAP_S, me[x.wrapS]), s.texParameteri(T, s.TEXTURE_WRAP_T, me[x.wrapT]), (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) && s.texParameteri(T, s.TEXTURE_WRAP_R, me[x.wrapR]), s.texParameteri(T, s.TEXTURE_MAG_FILTER, ve[x.magFilter]), s.texParameteri(T, s.TEXTURE_MIN_FILTER, ve[x.minFilter])) : (s.texParameteri(T, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(T, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) && s.texParameteri(T, s.TEXTURE_WRAP_R, s.CLAMP_TO_EDGE), (x.wrapS !== Ut || x.wrapT !== Ut) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(T, s.TEXTURE_MAG_FILTER, b(x.magFilter)), s.texParameteri(T, s.TEXTURE_MIN_FILTER, b(x.minFilter)), x.minFilter !== ft && x.minFilter !== At && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), x.compareFunction && (s.texParameteri(T, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(T, s.TEXTURE_COMPARE_FUNC, Ae[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const se = e.get("EXT_texture_filter_anisotropic");
      if (x.magFilter === ft || x.minFilter !== ur && x.minFilter !== ti || x.type === mn && e.has("OES_texture_float_linear") === !1 || a === !1 && x.type === ys && e.has("OES_texture_half_float_linear") === !1)
        return;
      (x.anisotropy > 1 || n.get(x).__currentAnisotropy) && (s.texParameterf(T, se.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy);
    }
  }
  function Te(T, x) {
    let F = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, x.addEventListener("dispose", q));
    const se = x.source;
    let ee = m.get(se);
    ee === void 0 && (ee = {}, m.set(se, ee));
    const oe = te(x);
    if (oe !== T.__cacheKey) {
      ee[oe] === void 0 && (ee[oe] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, F = !0), ee[oe].usedTimes++;
      const Se = ee[T.__cacheKey];
      Se !== void 0 && (ee[T.__cacheKey].usedTimes--, Se.usedTimes === 0 && k(x)), T.__cacheKey = oe, T.__webglTexture = ee[oe].texture;
    }
    return F;
  }
  function $e(T, x, F) {
    let se = s.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (se = s.TEXTURE_2D_ARRAY), x.isData3DTexture && (se = s.TEXTURE_3D);
    const ee = Te(T, x), oe = x.source;
    t.bindTexture(se, T.__webglTexture, s.TEXTURE0 + F);
    const Se = n.get(oe);
    if (oe.version !== Se.__version || ee === !0) {
      t.activeTexture(s.TEXTURE0 + F), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, s.NONE);
      const ae = w(x) && y(x.image) === !1;
      let H = v(x.image, ae, !1, h);
      H = nt(x, H);
      const C = y(H) || a, Z = r.convert(x.format, x.colorSpace);
      let _e = r.convert(x.type), he = N(x.internalFormat, Z, _e, x.colorSpace);
      be(se, x, C);
      let ge;
      const Ue = x.mipmaps, We = a && x.isVideoTexture !== !0, I = Se.__version === void 0 || ee === !0, de = M(x, H, C);
      if (x.isDepthTexture)
        he = s.DEPTH_COMPONENT, a ? x.type === mn ? he = s.DEPTH_COMPONENT32F : x.type === In ? he = s.DEPTH_COMPONENT24 : x.type === Yn ? he = s.DEPTH24_STENCIL8 : he = s.DEPTH_COMPONENT16 : x.type === mn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), x.format === Kn && he === s.DEPTH_COMPONENT && x.type !== qo && x.type !== In && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), x.type = In, _e = r.convert(x.type)), x.format === ki && he === s.DEPTH_COMPONENT && (he = s.DEPTH_STENCIL, x.type !== Yn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), x.type = Yn, _e = r.convert(x.type))), I && (We ? t.texStorage2D(s.TEXTURE_2D, 1, he, H.width, H.height) : t.texImage2D(s.TEXTURE_2D, 0, he, H.width, H.height, 0, Z, _e, null));
      else if (x.isDataTexture)
        if (Ue.length > 0 && C) {
          We && I && t.texStorage2D(s.TEXTURE_2D, de, he, Ue[0].width, Ue[0].height);
          for (let z = 0, ie = Ue.length; z < ie; z++)
            ge = Ue[z], We ? t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, ge.width, ge.height, Z, _e, ge.data) : t.texImage2D(s.TEXTURE_2D, z, he, ge.width, ge.height, 0, Z, _e, ge.data);
          x.generateMipmaps = !1;
        } else
          We ? (I && t.texStorage2D(s.TEXTURE_2D, de, he, H.width, H.height), t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, H.width, H.height, Z, _e, H.data)) : t.texImage2D(s.TEXTURE_2D, 0, he, H.width, H.height, 0, Z, _e, H.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          We && I && t.texStorage3D(s.TEXTURE_2D_ARRAY, de, he, Ue[0].width, Ue[0].height, H.depth);
          for (let z = 0, ie = Ue.length; z < ie; z++)
            ge = Ue[z], x.format !== Nt ? Z !== null ? We ? t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, z, 0, 0, 0, ge.width, ge.height, H.depth, Z, ge.data, 0, 0) : t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, z, he, ge.width, ge.height, H.depth, 0, ge.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : We ? t.texSubImage3D(s.TEXTURE_2D_ARRAY, z, 0, 0, 0, ge.width, ge.height, H.depth, Z, _e, ge.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, z, he, ge.width, ge.height, H.depth, 0, Z, _e, ge.data);
        } else {
          We && I && t.texStorage2D(s.TEXTURE_2D, de, he, Ue[0].width, Ue[0].height);
          for (let z = 0, ie = Ue.length; z < ie; z++)
            ge = Ue[z], x.format !== Nt ? Z !== null ? We ? t.compressedTexSubImage2D(s.TEXTURE_2D, z, 0, 0, ge.width, ge.height, Z, ge.data) : t.compressedTexImage2D(s.TEXTURE_2D, z, he, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : We ? t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, ge.width, ge.height, Z, _e, ge.data) : t.texImage2D(s.TEXTURE_2D, z, he, ge.width, ge.height, 0, Z, _e, ge.data);
        }
      else if (x.isDataArrayTexture)
        We ? (I && t.texStorage3D(s.TEXTURE_2D_ARRAY, de, he, H.width, H.height, H.depth), t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, H.width, H.height, H.depth, Z, _e, H.data)) : t.texImage3D(s.TEXTURE_2D_ARRAY, 0, he, H.width, H.height, H.depth, 0, Z, _e, H.data);
      else if (x.isData3DTexture)
        We ? (I && t.texStorage3D(s.TEXTURE_3D, de, he, H.width, H.height, H.depth), t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, H.width, H.height, H.depth, Z, _e, H.data)) : t.texImage3D(s.TEXTURE_3D, 0, he, H.width, H.height, H.depth, 0, Z, _e, H.data);
      else if (x.isFramebufferTexture) {
        if (I)
          if (We)
            t.texStorage2D(s.TEXTURE_2D, de, he, H.width, H.height);
          else {
            let z = H.width, ie = H.height;
            for (let fe = 0; fe < de; fe++)
              t.texImage2D(s.TEXTURE_2D, fe, he, z, ie, 0, Z, _e, null), z >>= 1, ie >>= 1;
          }
      } else if (Ue.length > 0 && C) {
        We && I && t.texStorage2D(s.TEXTURE_2D, de, he, Ue[0].width, Ue[0].height);
        for (let z = 0, ie = Ue.length; z < ie; z++)
          ge = Ue[z], We ? t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, Z, _e, ge) : t.texImage2D(s.TEXTURE_2D, z, he, Z, _e, ge);
        x.generateMipmaps = !1;
      } else
        We ? (I && t.texStorage2D(s.TEXTURE_2D, de, he, H.width, H.height), t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, Z, _e, H)) : t.texImage2D(s.TEXTURE_2D, 0, he, Z, _e, H);
      L(x, C) && A(se), Se.__version = oe.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function Je(T, x, F) {
    if (x.image.length !== 6)
      return;
    const se = Te(T, x), ee = x.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, T.__webglTexture, s.TEXTURE0 + F);
    const oe = n.get(ee);
    if (ee.version !== oe.__version || se === !0) {
      t.activeTexture(s.TEXTURE0 + F), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, s.NONE);
      const Se = x.isCompressedTexture || x.image[0].isCompressedTexture, ae = x.image[0] && x.image[0].isDataTexture, H = [];
      for (let z = 0; z < 6; z++)
        !Se && !ae ? H[z] = v(x.image[z], !1, !0, l) : H[z] = ae ? x.image[z].image : x.image[z], H[z] = nt(x, H[z]);
      const C = H[0], Z = y(C) || a, _e = r.convert(x.format, x.colorSpace), he = r.convert(x.type), ge = N(x.internalFormat, _e, he, x.colorSpace), Ue = a && x.isVideoTexture !== !0, We = oe.__version === void 0 || se === !0;
      let I = M(x, C, Z);
      be(s.TEXTURE_CUBE_MAP, x, Z);
      let de;
      if (Se) {
        Ue && We && t.texStorage2D(s.TEXTURE_CUBE_MAP, I, ge, C.width, C.height);
        for (let z = 0; z < 6; z++) {
          de = H[z].mipmaps;
          for (let ie = 0; ie < de.length; ie++) {
            const fe = de[ie];
            x.format !== Nt ? _e !== null ? Ue ? t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, ie, 0, 0, fe.width, fe.height, _e, fe.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, ie, ge, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, ie, 0, 0, fe.width, fe.height, _e, he, fe.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, ie, ge, fe.width, fe.height, 0, _e, he, fe.data);
          }
        }
      } else {
        de = x.mipmaps, Ue && We && (de.length > 0 && I++, t.texStorage2D(s.TEXTURE_CUBE_MAP, I, ge, H[0].width, H[0].height));
        for (let z = 0; z < 6; z++)
          if (ae) {
            Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, 0, 0, H[z].width, H[z].height, _e, he, H[z].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, ge, H[z].width, H[z].height, 0, _e, he, H[z].data);
            for (let ie = 0; ie < de.length; ie++) {
              const ze = de[ie].image[z].image;
              Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, ie + 1, 0, 0, ze.width, ze.height, _e, he, ze.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, ie + 1, ge, ze.width, ze.height, 0, _e, he, ze.data);
            }
          } else {
            Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, 0, 0, _e, he, H[z]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, ge, _e, he, H[z]);
            for (let ie = 0; ie < de.length; ie++) {
              const fe = de[ie];
              Ue ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, ie + 1, 0, 0, _e, he, fe.image[z]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, ie + 1, ge, _e, he, fe.image[z]);
            }
          }
      }
      L(x, Z) && A(s.TEXTURE_CUBE_MAP), oe.__version = ee.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function we(T, x, F, se, ee, oe) {
    const Se = r.convert(F.format, F.colorSpace), ae = r.convert(F.type), H = N(F.internalFormat, Se, ae, F.colorSpace);
    if (!n.get(x).__hasExternalTextures) {
      const Z = Math.max(1, x.width >> oe), _e = Math.max(1, x.height >> oe);
      ee === s.TEXTURE_3D || ee === s.TEXTURE_2D_ARRAY ? t.texImage3D(ee, oe, H, Z, _e, x.depth, 0, Se, ae, null) : t.texImage2D(ee, oe, H, Z, _e, 0, Se, ae, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, T), Ce(x) ? d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, se, ee, n.get(F).__webglTexture, 0, ye(x)) : (ee === s.TEXTURE_2D || ee >= s.TEXTURE_CUBE_MAP_POSITIVE_X && ee <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, se, ee, n.get(F).__webglTexture, oe), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function R(T, x, F) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, T), x.depthBuffer && !x.stencilBuffer) {
      let se = s.DEPTH_COMPONENT16;
      if (F || Ce(x)) {
        const ee = x.depthTexture;
        ee && ee.isDepthTexture && (ee.type === mn ? se = s.DEPTH_COMPONENT32F : ee.type === In && (se = s.DEPTH_COMPONENT24));
        const oe = ye(x);
        Ce(x) ? d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, oe, se, x.width, x.height) : s.renderbufferStorageMultisample(s.RENDERBUFFER, oe, se, x.width, x.height);
      } else
        s.renderbufferStorage(s.RENDERBUFFER, se, x.width, x.height);
      s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, T);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const se = ye(x);
      F && Ce(x) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, se, s.DEPTH24_STENCIL8, x.width, x.height) : Ce(x) ? d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, se, s.DEPTH24_STENCIL8, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, T);
    } else {
      const se = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
      for (let ee = 0; ee < se.length; ee++) {
        const oe = se[ee], Se = r.convert(oe.format, oe.colorSpace), ae = r.convert(oe.type), H = N(oe.internalFormat, Se, ae, oe.colorSpace), C = ye(x);
        F && Ce(x) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, C, H, x.width, x.height) : Ce(x) ? d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, C, H, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, H, x.width, x.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function le(T, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), K(x.depthTexture, 0);
    const se = n.get(x.depthTexture).__webglTexture, ee = ye(x);
    if (x.depthTexture.format === Kn)
      Ce(x) ? d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, se, 0, ee) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, se, 0);
    else if (x.depthTexture.format === ki)
      Ce(x) ? d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, se, 0, ee) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, se, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function j(T) {
    const x = n.get(T), F = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (F)
        throw new Error("target.depthTexture not supported in Cube render targets");
      le(x.__webglFramebuffer, T);
    } else if (F) {
      x.__webglDepthbuffer = [];
      for (let se = 0; se < 6; se++)
        t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[se]), x.__webglDepthbuffer[se] = s.createRenderbuffer(), R(x.__webglDepthbuffer[se], T, !1);
    } else
      t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer = s.createRenderbuffer(), R(x.__webglDepthbuffer, T, !1);
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function re(T, x, F) {
    const se = n.get(T);
    x !== void 0 && we(se.__webglFramebuffer, T, T.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), F !== void 0 && j(T);
  }
  function Q(T) {
    const x = T.texture, F = n.get(T), se = n.get(x);
    T.addEventListener("dispose", ne), T.isWebGLMultipleRenderTargets !== !0 && (se.__webglTexture === void 0 && (se.__webglTexture = s.createTexture()), se.__version = x.version, o.memory.textures++);
    const ee = T.isWebGLCubeRenderTarget === !0, oe = T.isWebGLMultipleRenderTargets === !0, Se = y(T) || a;
    if (ee) {
      F.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (a && x.mipmaps && x.mipmaps.length > 0) {
          F.__webglFramebuffer[ae] = [];
          for (let H = 0; H < x.mipmaps.length; H++)
            F.__webglFramebuffer[ae][H] = s.createFramebuffer();
        } else
          F.__webglFramebuffer[ae] = s.createFramebuffer();
    } else {
      if (a && x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let ae = 0; ae < x.mipmaps.length; ae++)
          F.__webglFramebuffer[ae] = s.createFramebuffer();
      } else
        F.__webglFramebuffer = s.createFramebuffer();
      if (oe)
        if (i.drawBuffers) {
          const ae = T.texture;
          for (let H = 0, C = ae.length; H < C; H++) {
            const Z = n.get(ae[H]);
            Z.__webglTexture === void 0 && (Z.__webglTexture = s.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && T.samples > 0 && Ce(T) === !1) {
        const ae = oe ? x : [x];
        F.__webglMultisampledFramebuffer = s.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let H = 0; H < ae.length; H++) {
          const C = ae[H];
          F.__webglColorRenderbuffer[H] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, F.__webglColorRenderbuffer[H]);
          const Z = r.convert(C.format, C.colorSpace), _e = r.convert(C.type), he = N(C.internalFormat, Z, _e, C.colorSpace, T.isXRRenderTarget === !0), ge = ye(T);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, ge, he, T.width, T.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + H, s.RENDERBUFFER, F.__webglColorRenderbuffer[H]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = s.createRenderbuffer(), R(F.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (ee) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, se.__webglTexture), be(s.TEXTURE_CUBE_MAP, x, Se);
      for (let ae = 0; ae < 6; ae++)
        if (a && x.mipmaps && x.mipmaps.length > 0)
          for (let H = 0; H < x.mipmaps.length; H++)
            we(F.__webglFramebuffer[ae][H], T, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, H);
        else
          we(F.__webglFramebuffer[ae], T, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      L(x, Se) && A(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (oe) {
      const ae = T.texture;
      for (let H = 0, C = ae.length; H < C; H++) {
        const Z = ae[H], _e = n.get(Z);
        t.bindTexture(s.TEXTURE_2D, _e.__webglTexture), be(s.TEXTURE_2D, Z, Se), we(F.__webglFramebuffer, T, Z, s.COLOR_ATTACHMENT0 + H, s.TEXTURE_2D, 0), L(Z, Se) && A(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = s.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (a ? ae = T.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ae, se.__webglTexture), be(ae, x, Se), a && x.mipmaps && x.mipmaps.length > 0)
        for (let H = 0; H < x.mipmaps.length; H++)
          we(F.__webglFramebuffer[H], T, x, s.COLOR_ATTACHMENT0, ae, H);
      else
        we(F.__webglFramebuffer, T, x, s.COLOR_ATTACHMENT0, ae, 0);
      L(x, Se) && A(ae), t.unbindTexture();
    }
    T.depthBuffer && j(T);
  }
  function Ee(T) {
    const x = y(T) || a, F = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
    for (let se = 0, ee = F.length; se < ee; se++) {
      const oe = F[se];
      if (L(oe, x)) {
        const Se = T.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, ae = n.get(oe).__webglTexture;
        t.bindTexture(Se, ae), A(Se), t.unbindTexture();
      }
    }
  }
  function xe(T) {
    if (a && T.samples > 0 && Ce(T) === !1) {
      const x = T.isWebGLMultipleRenderTargets ? T.texture : [T.texture], F = T.width, se = T.height;
      let ee = s.COLOR_BUFFER_BIT;
      const oe = [], Se = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ae = n.get(T), H = T.isWebGLMultipleRenderTargets === !0;
      if (H)
        for (let C = 0; C < x.length; C++)
          t.bindFramebuffer(s.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + C, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, ae.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + C, s.TEXTURE_2D, null, 0);
      t.bindFramebuffer(s.READ_FRAMEBUFFER, ae.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ae.__webglFramebuffer);
      for (let C = 0; C < x.length; C++) {
        oe.push(s.COLOR_ATTACHMENT0 + C), T.depthBuffer && oe.push(Se);
        const Z = ae.__ignoreDepthValues !== void 0 ? ae.__ignoreDepthValues : !1;
        if (Z === !1 && (T.depthBuffer && (ee |= s.DEPTH_BUFFER_BIT), T.stencilBuffer && (ee |= s.STENCIL_BUFFER_BIT)), H && s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, ae.__webglColorRenderbuffer[C]), Z === !0 && (s.invalidateFramebuffer(s.READ_FRAMEBUFFER, [Se]), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [Se])), H) {
          const _e = n.get(x[C]).__webglTexture;
          s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, _e, 0);
        }
        s.blitFramebuffer(0, 0, F, se, 0, 0, F, se, ee, s.NEAREST), f && s.invalidateFramebuffer(s.READ_FRAMEBUFFER, oe);
      }
      if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), H)
        for (let C = 0; C < x.length; C++) {
          t.bindFramebuffer(s.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + C, s.RENDERBUFFER, ae.__webglColorRenderbuffer[C]);
          const Z = n.get(x[C]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, ae.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + C, s.TEXTURE_2D, Z, 0);
        }
      t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ae.__webglMultisampledFramebuffer);
    }
  }
  function ye(T) {
    return Math.min(u, T.samples);
  }
  function Ce(T) {
    const x = n.get(T);
    return a && T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function ke(T) {
    const x = o.render.frame;
    g.get(T) !== x && (g.set(T, x), T.update());
  }
  function nt(T, x) {
    const F = T.colorSpace, se = T.format, ee = T.type;
    return T.isCompressedTexture === !0 || T.format === Io || F !== Zt && F !== Jn && (F === Pe ? a === !1 ? e.has("EXT_sRGB") === !0 && se === Nt ? (T.format = Io, T.minFilter = At, T.generateMipmaps = !1) : x = Kl.sRGBToLinear(x) : (se !== Nt || ee !== Nn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), x;
  }
  this.allocateTextureUnit = Y, this.resetTextureUnits = $, this.setTexture2D = K, this.setTexture2DArray = O, this.setTexture3D = V, this.setTextureCube = pe, this.rebindTextures = re, this.setupRenderTarget = Q, this.updateRenderTargetMipmap = Ee, this.updateMultisampleRenderTarget = xe, this.setupDepthRenderbuffer = j, this.setupFrameBufferTexture = we, this.useMultisampledRTT = Ce;
}
function $g(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = Jn) {
    let a;
    if (r === Nn)
      return s.UNSIGNED_BYTE;
    if (r === Bl)
      return s.UNSIGNED_SHORT_4_4_4_4;
    if (r === zl)
      return s.UNSIGNED_SHORT_5_5_5_1;
    if (r === uu)
      return s.BYTE;
    if (r === du)
      return s.SHORT;
    if (r === qo)
      return s.UNSIGNED_SHORT;
    if (r === Fl)
      return s.INT;
    if (r === In)
      return s.UNSIGNED_INT;
    if (r === mn)
      return s.FLOAT;
    if (r === ys)
      return n ? s.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === fu)
      return s.ALPHA;
    if (r === Nt)
      return s.RGBA;
    if (r === pu)
      return s.LUMINANCE;
    if (r === mu)
      return s.LUMINANCE_ALPHA;
    if (r === Kn)
      return s.DEPTH_COMPONENT;
    if (r === ki)
      return s.DEPTH_STENCIL;
    if (r === Io)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === gu)
      return s.RED;
    if (r === Hl)
      return s.RED_INTEGER;
    if (r === _u)
      return s.RG;
    if (r === kl)
      return s.RG_INTEGER;
    if (r === Gl)
      return s.RGBA_INTEGER;
    if (r === Ir || r === Dr || r === Ur || r === Nr)
      if (o === Pe)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === Ir)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Dr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Ur)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === Nr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === Ir)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Dr)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Ur)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Nr)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === ba || r === wa || r === Ra || r === Ca)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === ba)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === wa)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Ra)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Ca)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === vu)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === La || r === Pa)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === La)
          return o === Pe ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === Pa)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === Ia || r === Da || r === Ua || r === Na || r === Oa || r === Fa || r === Ba || r === za || r === Ha || r === ka || r === Ga || r === Va || r === Wa || r === Xa)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === Ia)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Da)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Ua)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Na)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Oa)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Fa)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Ba)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === za)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Ha)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === ka)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Ga)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Va)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Wa)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Xa)
          return o === Pe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === Or)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === Or)
          return o === Pe ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (r === xu || r === $a || r === qa || r === ja)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (r === Or)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (r === $a)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === qa)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === ja)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === Yn ? n ? s.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null;
  }
  return { convert: i };
}
class qg extends Et {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class jn extends qe {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const jg = { type: "move" };
class ro {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new jn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new jn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new jn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
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
    let i = null, r = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n), p = this._getHandJoint(l, _);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, g = 5e-3;
        l.inputState.pinching && d > f + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= f - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(jg)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new jn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Yg extends mt {
  constructor(e, t, n, i, r, o, a, c, l, h) {
    if (h = h !== void 0 ? h : Kn, h !== Kn && h !== ki)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Kn && (n = In), n === void 0 && h === ki && (n = Yn), super(null, i, r, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : ft, this.minFilter = c !== void 0 ? c : ft, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Kg extends oi {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, g = null;
    const _ = t.getContextAttributes();
    let m = null, p = null;
    const S = [], v = [], y = new Et();
    y.layers.enable(1), y.viewport = new Qe();
    const w = new Et();
    w.layers.enable(2), w.viewport = new Qe();
    const L = [y, w], A = new qg();
    A.layers.enable(1), A.layers.enable(2);
    let N = null, M = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(O) {
      let V = S[O];
      return V === void 0 && (V = new ro(), S[O] = V), V.getTargetRaySpace();
    }, this.getControllerGrip = function(O) {
      let V = S[O];
      return V === void 0 && (V = new ro(), S[O] = V), V.getGripSpace();
    }, this.getHand = function(O) {
      let V = S[O];
      return V === void 0 && (V = new ro(), S[O] = V), V.getHandSpace();
    };
    function b(O) {
      const V = v.indexOf(O.inputSource);
      if (V === -1)
        return;
      const pe = S[V];
      pe !== void 0 && (pe.update(O.inputSource, O.frame, l || o), pe.dispatchEvent({ type: O.type, data: O.inputSource }));
    }
    function q() {
      i.removeEventListener("select", b), i.removeEventListener("selectstart", b), i.removeEventListener("selectend", b), i.removeEventListener("squeeze", b), i.removeEventListener("squeezestart", b), i.removeEventListener("squeezeend", b), i.removeEventListener("end", q), i.removeEventListener("inputsourceschange", ne);
      for (let O = 0; O < S.length; O++) {
        const V = v[O];
        V !== null && (v[O] = null, S[O].disconnect(V));
      }
      N = null, M = null, e.setRenderTarget(m), f = null, d = null, u = null, i = null, p = null, K.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(O) {
      r = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(O) {
      a = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(O) {
      l = O;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(O) {
      if (i = O, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", b), i.addEventListener("selectstart", b), i.addEventListener("selectend", b), i.addEventListener("squeeze", b), i.addEventListener("squeezestart", b), i.addEventListener("squeezeend", b), i.addEventListener("end", q), i.addEventListener("inputsourceschange", ne), _.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const V = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(i, t, V), i.updateRenderState({ baseLayer: f }), p = new ni(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: Nt,
              type: Nn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let V = null, pe = null, me = null;
          _.depth && (me = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, V = _.stencil ? ki : Kn, pe = _.stencil ? Yn : In);
          const ve = {
            colorFormat: t.RGBA8,
            depthFormat: me,
            scaleFactor: r
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(ve), i.updateRenderState({ layers: [d] }), p = new ni(
            d.textureWidth,
            d.textureHeight,
            {
              format: Nt,
              type: Nn,
              depthTexture: new Yg(d.textureWidth, d.textureHeight, pe, void 0, void 0, void 0, void 0, void 0, void 0, V),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const Ae = e.properties.get(p);
          Ae.__ignoreDepthValues = d.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await i.requestReferenceSpace(a), K.setContext(i), K.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function ne(O) {
      for (let V = 0; V < O.removed.length; V++) {
        const pe = O.removed[V], me = v.indexOf(pe);
        me >= 0 && (v[me] = null, S[me].disconnect(pe));
      }
      for (let V = 0; V < O.added.length; V++) {
        const pe = O.added[V];
        let me = v.indexOf(pe);
        if (me === -1) {
          for (let Ae = 0; Ae < S.length; Ae++)
            if (Ae >= v.length) {
              v.push(pe), me = Ae;
              break;
            } else if (v[Ae] === null) {
              v[Ae] = pe, me = Ae;
              break;
            }
          if (me === -1)
            break;
        }
        const ve = S[me];
        ve && ve.connect(pe);
      }
    }
    const B = new P(), k = new P();
    function G(O, V, pe) {
      B.setFromMatrixPosition(V.matrixWorld), k.setFromMatrixPosition(pe.matrixWorld);
      const me = B.distanceTo(k), ve = V.projectionMatrix.elements, Ae = pe.projectionMatrix.elements, be = ve[14] / (ve[10] - 1), Te = ve[14] / (ve[10] + 1), $e = (ve[9] + 1) / ve[5], Je = (ve[9] - 1) / ve[5], we = (ve[8] - 1) / ve[0], R = (Ae[8] + 1) / Ae[0], le = be * we, j = be * R, re = me / (-we + R), Q = re * -we;
      V.matrixWorld.decompose(O.position, O.quaternion, O.scale), O.translateX(Q), O.translateZ(re), O.matrixWorld.compose(O.position, O.quaternion, O.scale), O.matrixWorldInverse.copy(O.matrixWorld).invert();
      const Ee = be + re, xe = Te + re, ye = le - Q, Ce = j + (me - Q), ke = $e * Te / xe * Ee, nt = Je * Te / xe * Ee;
      O.projectionMatrix.makePerspective(ye, Ce, ke, nt, Ee, xe), O.projectionMatrixInverse.copy(O.projectionMatrix).invert();
    }
    function J(O, V) {
      V === null ? O.matrixWorld.copy(O.matrix) : O.matrixWorld.multiplyMatrices(V.matrixWorld, O.matrix), O.matrixWorldInverse.copy(O.matrixWorld).invert();
    }
    this.updateCamera = function(O) {
      if (i === null)
        return;
      A.near = w.near = y.near = O.near, A.far = w.far = y.far = O.far, (N !== A.near || M !== A.far) && (i.updateRenderState({
        depthNear: A.near,
        depthFar: A.far
      }), N = A.near, M = A.far);
      const V = O.parent, pe = A.cameras;
      J(A, V);
      for (let me = 0; me < pe.length; me++)
        J(pe[me], V);
      pe.length === 2 ? G(A, y, w) : A.projectionMatrix.copy(y.projectionMatrix), $(O, A, V);
    };
    function $(O, V, pe) {
      pe === null ? O.matrix.copy(V.matrixWorld) : (O.matrix.copy(pe.matrixWorld), O.matrix.invert(), O.matrix.multiply(V.matrixWorld)), O.matrix.decompose(O.position, O.quaternion, O.scale), O.updateMatrixWorld(!0);
      const me = O.children;
      for (let ve = 0, Ae = me.length; ve < Ae; ve++)
        me[ve].updateMatrixWorld(!0);
      O.projectionMatrix.copy(V.projectionMatrix), O.projectionMatrixInverse.copy(V.projectionMatrixInverse), O.isPerspectiveCamera && (O.fov = Vi * 2 * Math.atan(1 / O.projectionMatrix.elements[5]), O.zoom = 1);
    }
    this.getCamera = function() {
      return A;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return c;
    }, this.setFoveation = function(O) {
      c = O, d !== null && (d.fixedFoveation = O), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = O);
    };
    let Y = null;
    function te(O, V) {
      if (h = V.getViewerPose(l || o), g = V, h !== null) {
        const pe = h.views;
        f !== null && (e.setRenderTargetFramebuffer(p, f.framebuffer), e.setRenderTarget(p));
        let me = !1;
        pe.length !== A.cameras.length && (A.cameras.length = 0, me = !0);
        for (let ve = 0; ve < pe.length; ve++) {
          const Ae = pe[ve];
          let be = null;
          if (f !== null)
            be = f.getViewport(Ae);
          else {
            const $e = u.getViewSubImage(d, Ae);
            be = $e.viewport, ve === 0 && (e.setRenderTargetTextures(
              p,
              $e.colorTexture,
              d.ignoreDepthValues ? void 0 : $e.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let Te = L[ve];
          Te === void 0 && (Te = new Et(), Te.layers.enable(ve), Te.viewport = new Qe(), L[ve] = Te), Te.matrix.fromArray(Ae.transform.matrix), Te.matrix.decompose(Te.position, Te.quaternion, Te.scale), Te.projectionMatrix.fromArray(Ae.projectionMatrix), Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(), Te.viewport.set(be.x, be.y, be.width, be.height), ve === 0 && (A.matrix.copy(Te.matrix), A.matrix.decompose(A.position, A.quaternion, A.scale)), me === !0 && A.cameras.push(Te);
        }
      }
      for (let pe = 0; pe < S.length; pe++) {
        const me = v[pe], ve = S[pe];
        me !== null && ve !== void 0 && ve.update(me, V, l || o);
      }
      Y && Y(O, V), V.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: V }), g = null;
    }
    const K = new rh();
    K.setAnimationLoop(te), this.setAnimationLoop = function(O) {
      Y = O;
    }, this.dispose = function() {
    };
  }
}
function Zg(s, e) {
  function t(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, nh(s)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function i(m, p, S, v, y) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), u(m, p)) : p.isMeshPhongMaterial ? (r(m, p), h(m, p)) : p.isMeshStandardMaterial ? (r(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, y)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), _(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (o(m, p), p.isLineDashedMaterial && a(m, p)) : p.isPointsMaterial ? c(m, p, S, v) : p.isSpriteMaterial ? l(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === wt && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === wt && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const S = e.get(p).envMap;
    if (S && (m.envMap.value = S, m.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap) {
      m.lightMap.value = p.lightMap;
      const v = s._useLegacyLights === !0 ? Math.PI : 1;
      m.lightMapIntensity.value = p.lightMapIntensity * v, t(p.lightMap, m.lightMapTransform);
    }
    p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform));
  }
  function o(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, t(p.map, m.mapTransform));
  }
  function a(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function c(m, p, S, v) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * S, m.scale.value = v * 0.5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function l(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function d(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), e.get(p).envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function f(m, p, S) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === wt && m.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = S.texture, m.transmissionSamplerSize.value.set(S.width, S.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function _(m, p) {
    const S = e.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(S.matrixWorld), m.nearDistance.value = S.shadow.camera.near, m.farDistance.value = S.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Jg(s, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = t.isWebGL2 ? s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(S, v) {
    const y = v.program;
    n.uniformBlockBinding(S, y);
  }
  function l(S, v) {
    let y = i[S.id];
    y === void 0 && (g(S), y = h(S), i[S.id] = y, S.addEventListener("dispose", m));
    const w = v.program;
    n.updateUBOMapping(S, w);
    const L = e.render.frame;
    r[S.id] !== L && (d(S), r[S.id] = L);
  }
  function h(S) {
    const v = u();
    S.__bindingPointIndex = v;
    const y = s.createBuffer(), w = S.__size, L = S.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, y), s.bufferData(s.UNIFORM_BUFFER, w, L), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, v, y), y;
  }
  function u() {
    for (let S = 0; S < a; S++)
      if (o.indexOf(S) === -1)
        return o.push(S), S;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(S) {
    const v = i[S.id], y = S.uniforms, w = S.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, v);
    for (let L = 0, A = y.length; L < A; L++) {
      const N = y[L];
      if (f(N, L, w) === !0) {
        const M = N.__offset, b = Array.isArray(N.value) ? N.value : [N.value];
        let q = 0;
        for (let ne = 0; ne < b.length; ne++) {
          const B = b[ne], k = _(B);
          typeof B == "number" ? (N.__data[0] = B, s.bufferSubData(s.UNIFORM_BUFFER, M + q, N.__data)) : B.isMatrix3 ? (N.__data[0] = B.elements[0], N.__data[1] = B.elements[1], N.__data[2] = B.elements[2], N.__data[3] = B.elements[0], N.__data[4] = B.elements[3], N.__data[5] = B.elements[4], N.__data[6] = B.elements[5], N.__data[7] = B.elements[0], N.__data[8] = B.elements[6], N.__data[9] = B.elements[7], N.__data[10] = B.elements[8], N.__data[11] = B.elements[0]) : (B.toArray(N.__data, q), q += k.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        s.bufferSubData(s.UNIFORM_BUFFER, M, N.__data);
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function f(S, v, y) {
    const w = S.value;
    if (y[v] === void 0) {
      if (typeof w == "number")
        y[v] = w;
      else {
        const L = Array.isArray(w) ? w : [w], A = [];
        for (let N = 0; N < L.length; N++)
          A.push(L[N].clone());
        y[v] = A;
      }
      return !0;
    } else if (typeof w == "number") {
      if (y[v] !== w)
        return y[v] = w, !0;
    } else {
      const L = Array.isArray(y[v]) ? y[v] : [y[v]], A = Array.isArray(w) ? w : [w];
      for (let N = 0; N < L.length; N++) {
        const M = L[N];
        if (M.equals(A[N]) === !1)
          return M.copy(A[N]), !0;
      }
    }
    return !1;
  }
  function g(S) {
    const v = S.uniforms;
    let y = 0;
    const w = 16;
    let L = 0;
    for (let A = 0, N = v.length; A < N; A++) {
      const M = v[A], b = {
        boundary: 0,
        storage: 0
      }, q = Array.isArray(M.value) ? M.value : [M.value];
      for (let ne = 0, B = q.length; ne < B; ne++) {
        const k = q[ne], G = _(k);
        b.boundary += G.boundary, b.storage += G.storage;
      }
      if (M.__data = new Float32Array(b.storage / Float32Array.BYTES_PER_ELEMENT), M.__offset = y, A > 0) {
        L = y % w;
        const ne = w - L;
        L !== 0 && ne - b.boundary < 0 && (y += w - L, M.__offset = y);
      }
      y += b.storage;
    }
    return L = y % w, L > 0 && (y += w - L), S.__size = y, S.__cache = {}, this;
  }
  function _(S) {
    const v = {
      boundary: 0,
      storage: 0
    };
    return typeof S == "number" ? (v.boundary = 4, v.storage = 4) : S.isVector2 ? (v.boundary = 8, v.storage = 8) : S.isVector3 || S.isColor ? (v.boundary = 16, v.storage = 12) : S.isVector4 ? (v.boundary = 16, v.storage = 16) : S.isMatrix3 ? (v.boundary = 48, v.storage = 48) : S.isMatrix4 ? (v.boundary = 64, v.storage = 64) : S.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", S), v;
  }
  function m(S) {
    const v = S.target;
    v.removeEventListener("dispose", m);
    const y = o.indexOf(v.__bindingPointIndex);
    o.splice(y, 1), s.deleteBuffer(i[v.id]), delete i[v.id], delete r[v.id];
  }
  function p() {
    for (const S in i)
      s.deleteBuffer(i[S]);
    o = [], i = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
function Qg() {
  const s = Ss("canvas");
  return s.style.display = "block", s;
}
class hh {
  constructor(e = {}) {
    const {
      canvas: t = Qg(),
      context: n = null,
      depth: i = !0,
      stencil: r = !0,
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
    const f = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, m = null;
    const p = [], S = [];
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = Pe, this._useLegacyLights = !1, this.toneMapping = Un, this.toneMappingExposure = 1;
    const v = this;
    let y = !1, w = 0, L = 0, A = null, N = -1, M = null;
    const b = new Qe(), q = new Qe();
    let ne = null;
    const B = new Ne(0);
    let k = 0, G = t.width, J = t.height, $ = 1, Y = null, te = null;
    const K = new Qe(0, 0, G, J), O = new Qe(0, 0, G, J);
    let V = !1;
    const pe = new Ko();
    let me = !1, ve = !1, Ae = null;
    const be = new Be(), Te = new ce(), $e = new P(), Je = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function we() {
      return A === null ? $ : 1;
    }
    let R = n;
    function le(E, U) {
      for (let X = 0; X < E.length; X++) {
        const D = E[X], W = t.getContext(D, U);
        if (W !== null)
          return W;
      }
      return null;
    }
    try {
      const E = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${$o}`), t.addEventListener("webglcontextlost", de, !1), t.addEventListener("webglcontextrestored", z, !1), t.addEventListener("webglcontextcreationerror", ie, !1), R === null) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if (v.isWebGL1Renderer === !0 && U.shift(), R = le(U, E), R === null)
          throw le(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && R instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), R.getShaderPrecisionFormat === void 0 && (R.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (E) {
      throw console.error("THREE.WebGLRenderer: " + E.message), E;
    }
    let j, re, Q, Ee, xe, ye, Ce, ke, nt, T, x, F, se, ee, oe, Se, ae, H, C, Z, _e, he, ge, Ue;
    function We() {
      j = new lm(R), re = new im(R, j, e), j.init(re), he = new $g(R, j, re), Q = new Wg(R, j, re), Ee = new dm(R), xe = new Lg(), ye = new Xg(R, j, Q, xe, re, he, Ee), Ce = new rm(v), ke = new cm(v), nt = new Md(R, re), ge = new tm(R, j, nt, re), T = new hm(R, nt, Ee, ge), x = new gm(R, T, nt, Ee), C = new mm(R, re, ye), Se = new sm(xe), F = new Cg(v, Ce, ke, j, re, ge, Se), se = new Zg(v, xe), ee = new Ig(), oe = new Bg(j, re), H = new em(v, Ce, ke, Q, x, d, c), ae = new Vg(v, x, re), Ue = new Jg(R, Ee, re, Q), Z = new nm(R, j, Ee, re), _e = new um(R, j, Ee, re), Ee.programs = F.programs, v.capabilities = re, v.extensions = j, v.properties = xe, v.renderLists = ee, v.shadowMap = ae, v.state = Q, v.info = Ee;
    }
    We();
    const I = new Kg(v, R);
    this.xr = I, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = j.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = j.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return $;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && ($ = E, this.setSize(G, J, !1));
    }, this.getSize = function(E) {
      return E.set(G, J);
    }, this.setSize = function(E, U, X = !0) {
      if (I.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = E, J = U, t.width = Math.floor(E * $), t.height = Math.floor(U * $), X === !0 && (t.style.width = E + "px", t.style.height = U + "px"), this.setViewport(0, 0, E, U);
    }, this.getDrawingBufferSize = function(E) {
      return E.set(G * $, J * $).floor();
    }, this.setDrawingBufferSize = function(E, U, X) {
      G = E, J = U, $ = X, t.width = Math.floor(E * X), t.height = Math.floor(U * X), this.setViewport(0, 0, E, U);
    }, this.getCurrentViewport = function(E) {
      return E.copy(b);
    }, this.getViewport = function(E) {
      return E.copy(K);
    }, this.setViewport = function(E, U, X, D) {
      E.isVector4 ? K.set(E.x, E.y, E.z, E.w) : K.set(E, U, X, D), Q.viewport(b.copy(K).multiplyScalar($).floor());
    }, this.getScissor = function(E) {
      return E.copy(O);
    }, this.setScissor = function(E, U, X, D) {
      E.isVector4 ? O.set(E.x, E.y, E.z, E.w) : O.set(E, U, X, D), Q.scissor(q.copy(O).multiplyScalar($).floor());
    }, this.getScissorTest = function() {
      return V;
    }, this.setScissorTest = function(E) {
      Q.setScissorTest(V = E);
    }, this.setOpaqueSort = function(E) {
      Y = E;
    }, this.setTransparentSort = function(E) {
      te = E;
    }, this.getClearColor = function(E) {
      return E.copy(H.getClearColor());
    }, this.setClearColor = function() {
      H.setClearColor.apply(H, arguments);
    }, this.getClearAlpha = function() {
      return H.getClearAlpha();
    }, this.setClearAlpha = function() {
      H.setClearAlpha.apply(H, arguments);
    }, this.clear = function(E = !0, U = !0, X = !0) {
      let D = 0;
      if (E) {
        let W = !1;
        if (A !== null) {
          const Me = A.texture.format;
          W = Me === Gl || Me === kl || Me === Hl;
        }
        if (W) {
          const Me = A.texture.type, Re = Me === Nn || Me === In || Me === qo || Me === Yn || Me === Bl || Me === zl, Ie = H.getClearColor(), De = H.getClearAlpha(), Ge = Ie.r, Le = Ie.g, Oe = Ie.b;
          Re ? (f[0] = Ge, f[1] = Le, f[2] = Oe, f[3] = De, R.clearBufferuiv(R.COLOR, 0, f)) : (g[0] = Ge, g[1] = Le, g[2] = Oe, g[3] = De, R.clearBufferiv(R.COLOR, 0, g));
        } else
          D |= R.COLOR_BUFFER_BIT;
      }
      U && (D |= R.DEPTH_BUFFER_BIT), X && (D |= R.STENCIL_BUFFER_BIT), R.clear(D);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", de, !1), t.removeEventListener("webglcontextrestored", z, !1), t.removeEventListener("webglcontextcreationerror", ie, !1), ee.dispose(), oe.dispose(), xe.dispose(), Ce.dispose(), ke.dispose(), x.dispose(), ge.dispose(), Ue.dispose(), F.dispose(), I.dispose(), I.removeEventListener("sessionstart", tt), I.removeEventListener("sessionend", $t), Ae && (Ae.dispose(), Ae = null), vt.stop();
    };
    function de(E) {
      E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function z() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const E = Ee.autoReset, U = ae.enabled, X = ae.autoUpdate, D = ae.needsUpdate, W = ae.type;
      We(), Ee.autoReset = E, ae.enabled = U, ae.autoUpdate = X, ae.needsUpdate = D, ae.type = W;
    }
    function ie(E) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function fe(E) {
      const U = E.target;
      U.removeEventListener("dispose", fe), ze(U);
    }
    function ze(E) {
      Ye(E), xe.remove(E);
    }
    function Ye(E) {
      const U = xe.get(E).programs;
      U !== void 0 && (U.forEach(function(X) {
        F.releaseProgram(X);
      }), E.isShaderMaterial && F.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, U, X, D, W, Me) {
      U === null && (U = Je);
      const Re = W.isMesh && W.matrixWorld.determinant() < 0, Ie = Uh(E, U, X, D, W);
      Q.setMaterial(D, Re);
      let De = X.index, Ge = 1;
      if (D.wireframe === !0) {
        if (De = T.getWireframeAttribute(X), De === void 0)
          return;
        Ge = 2;
      }
      const Le = X.drawRange, Oe = X.attributes.position;
      let st = Le.start * Ge, rt = (Le.start + Le.count) * Ge;
      Me !== null && (st = Math.max(st, Me.start * Ge), rt = Math.min(rt, (Me.start + Me.count) * Ge)), De !== null ? (st = Math.max(st, 0), rt = Math.min(rt, De.count)) : Oe != null && (st = Math.max(st, 0), rt = Math.min(rt, Oe.count));
      const Pt = rt - st;
      if (Pt < 0 || Pt === 1 / 0)
        return;
      ge.setup(W, D, Ie, X, De);
      let rn, ot = Z;
      if (De !== null && (rn = nt.get(De), ot = _e, ot.setIndex(rn)), W.isMesh)
        D.wireframe === !0 ? (Q.setLineWidth(D.wireframeLinewidth * we()), ot.setMode(R.LINES)) : ot.setMode(R.TRIANGLES);
      else if (W.isLine) {
        let Ve = D.linewidth;
        Ve === void 0 && (Ve = 1), Q.setLineWidth(Ve * we()), W.isLineSegments ? ot.setMode(R.LINES) : W.isLineLoop ? ot.setMode(R.LINE_LOOP) : ot.setMode(R.LINE_STRIP);
      } else
        W.isPoints ? ot.setMode(R.POINTS) : W.isSprite && ot.setMode(R.TRIANGLES);
      if (W.isInstancedMesh)
        ot.renderInstances(st, Pt, W.count);
      else if (X.isInstancedBufferGeometry) {
        const Ve = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, Rr = Math.min(X.instanceCount, Ve);
        ot.renderInstances(st, Pt, Rr);
      } else
        ot.render(st, Pt);
    }, this.compile = function(E, U) {
      function X(D, W, Me) {
        D.transparent === !0 && D.side === jt && D.forceSinglePass === !1 ? (D.side = wt, D.needsUpdate = !0, Ns(D, W, Me), D.side = _n, D.needsUpdate = !0, Ns(D, W, Me), D.side = jt) : Ns(D, W, Me);
      }
      m = oe.get(E), m.init(), S.push(m), E.traverseVisible(function(D) {
        D.isLight && D.layers.test(U.layers) && (m.pushLight(D), D.castShadow && m.pushShadow(D));
      }), m.setupLights(v._useLegacyLights), E.traverse(function(D) {
        const W = D.material;
        if (W)
          if (Array.isArray(W))
            for (let Me = 0; Me < W.length; Me++) {
              const Re = W[Me];
              X(Re, E, D);
            }
          else
            X(W, E, D);
      }), S.pop(), m = null;
    };
    let et = null;
    function Mn(E) {
      et && et(E);
    }
    function tt() {
      vt.stop();
    }
    function $t() {
      vt.start();
    }
    const vt = new rh();
    vt.setAnimationLoop(Mn), typeof self < "u" && vt.setContext(self), this.setAnimationLoop = function(E) {
      et = E, I.setAnimationLoop(E), E === null ? vt.stop() : vt.start();
    }, I.addEventListener("sessionstart", tt), I.addEventListener("sessionend", $t), this.render = function(E, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0)
        return;
      E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), I.enabled === !0 && I.isPresenting === !0 && (I.cameraAutoUpdate === !0 && I.updateCamera(U), U = I.getCamera()), E.isScene === !0 && E.onBeforeRender(v, E, U, A), m = oe.get(E, S.length), m.init(), S.push(m), be.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), pe.setFromProjectionMatrix(be), ve = this.localClippingEnabled, me = Se.init(this.clippingPlanes, ve), _ = ee.get(E, p.length), _.init(), p.push(_), pa(E, U, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(Y, te), this.info.render.frame++, me === !0 && Se.beginShadows();
      const X = m.state.shadowsArray;
      if (ae.render(X, E, U), me === !0 && Se.endShadows(), this.info.autoReset === !0 && this.info.reset(), H.render(_, E), m.setupLights(v._useLegacyLights), U.isArrayCamera) {
        const D = U.cameras;
        for (let W = 0, Me = D.length; W < Me; W++) {
          const Re = D[W];
          ma(_, E, Re, Re.viewport);
        }
      } else
        ma(_, E, U);
      A !== null && (ye.updateMultisampleRenderTarget(A), ye.updateRenderTargetMipmap(A)), E.isScene === !0 && E.onAfterRender(v, E, U), ge.resetDefaultState(), N = -1, M = null, S.pop(), S.length > 0 ? m = S[S.length - 1] : m = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function pa(E, U, X, D) {
      if (E.visible === !1)
        return;
      if (E.layers.test(U.layers)) {
        if (E.isGroup)
          X = E.renderOrder;
        else if (E.isLOD)
          E.autoUpdate === !0 && E.update(U);
        else if (E.isLight)
          m.pushLight(E), E.castShadow && m.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || pe.intersectsSprite(E)) {
            D && $e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);
            const Re = x.update(E), Ie = E.material;
            Ie.visible && _.push(E, Re, Ie, X, $e.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || pe.intersectsObject(E))) {
          const Re = x.update(E), Ie = E.material;
          if (D && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), $e.copy(E.boundingSphere.center)) : (Re.boundingSphere === null && Re.computeBoundingSphere(), $e.copy(Re.boundingSphere.center)), $e.applyMatrix4(E.matrixWorld).applyMatrix4(be)), Array.isArray(Ie)) {
            const De = Re.groups;
            for (let Ge = 0, Le = De.length; Ge < Le; Ge++) {
              const Oe = De[Ge], st = Ie[Oe.materialIndex];
              st && st.visible && _.push(E, Re, st, X, $e.z, Oe);
            }
          } else
            Ie.visible && _.push(E, Re, Ie, X, $e.z, null);
        }
      }
      const Me = E.children;
      for (let Re = 0, Ie = Me.length; Re < Ie; Re++)
        pa(Me[Re], U, X, D);
    }
    function ma(E, U, X, D) {
      const W = E.opaque, Me = E.transmissive, Re = E.transparent;
      m.setupLightsView(X), me === !0 && Se.setGlobalState(v.clippingPlanes, X), Me.length > 0 && Dh(W, Me, U, X), D && Q.viewport(b.copy(D)), W.length > 0 && Us(W, U, X), Me.length > 0 && Us(Me, U, X), Re.length > 0 && Us(Re, U, X), Q.buffers.depth.setTest(!0), Q.buffers.depth.setMask(!0), Q.buffers.color.setMask(!0), Q.setPolygonOffset(!1);
    }
    function Dh(E, U, X, D) {
      const W = re.isWebGL2;
      Ae === null && (Ae = new ni(1, 1, {
        generateMipmaps: !0,
        type: j.has("EXT_color_buffer_half_float") ? ys : Nn,
        minFilter: ti,
        samples: W ? 4 : 0
      })), v.getDrawingBufferSize(Te), W ? Ae.setSize(Te.x, Te.y) : Ae.setSize(_r(Te.x), _r(Te.y));
      const Me = v.getRenderTarget();
      v.setRenderTarget(Ae), v.getClearColor(B), k = v.getClearAlpha(), k < 1 && v.setClearColor(16777215, 0.5), v.clear();
      const Re = v.toneMapping;
      v.toneMapping = Un, Us(E, X, D), ye.updateMultisampleRenderTarget(Ae), ye.updateRenderTargetMipmap(Ae);
      let Ie = !1;
      for (let De = 0, Ge = U.length; De < Ge; De++) {
        const Le = U[De], Oe = Le.object, st = Le.geometry, rt = Le.material, Pt = Le.group;
        if (rt.side === jt && Oe.layers.test(D.layers)) {
          const rn = rt.side;
          rt.side = wt, rt.needsUpdate = !0, ga(Oe, X, D, st, rt, Pt), rt.side = rn, rt.needsUpdate = !0, Ie = !0;
        }
      }
      Ie === !0 && (ye.updateMultisampleRenderTarget(Ae), ye.updateRenderTargetMipmap(Ae)), v.setRenderTarget(Me), v.setClearColor(B, k), v.toneMapping = Re;
    }
    function Us(E, U, X) {
      const D = U.isScene === !0 ? U.overrideMaterial : null;
      for (let W = 0, Me = E.length; W < Me; W++) {
        const Re = E[W], Ie = Re.object, De = Re.geometry, Ge = D === null ? Re.material : D, Le = Re.group;
        Ie.layers.test(X.layers) && ga(Ie, U, X, De, Ge, Le);
      }
    }
    function ga(E, U, X, D, W, Me) {
      E.onBeforeRender(v, U, X, D, W, Me), E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), W.onBeforeRender(v, U, X, D, E, Me), W.transparent === !0 && W.side === jt && W.forceSinglePass === !1 ? (W.side = wt, W.needsUpdate = !0, v.renderBufferDirect(X, U, D, W, E, Me), W.side = _n, W.needsUpdate = !0, v.renderBufferDirect(X, U, D, W, E, Me), W.side = jt) : v.renderBufferDirect(X, U, D, W, E, Me), E.onAfterRender(v, U, X, D, W, Me);
    }
    function Ns(E, U, X) {
      U.isScene !== !0 && (U = Je);
      const D = xe.get(E), W = m.state.lights, Me = m.state.shadowsArray, Re = W.state.version, Ie = F.getParameters(E, W.state, Me, U, X), De = F.getProgramCacheKey(Ie);
      let Ge = D.programs;
      D.environment = E.isMeshStandardMaterial ? U.environment : null, D.fog = U.fog, D.envMap = (E.isMeshStandardMaterial ? ke : Ce).get(E.envMap || D.environment), Ge === void 0 && (E.addEventListener("dispose", fe), Ge = /* @__PURE__ */ new Map(), D.programs = Ge);
      let Le = Ge.get(De);
      if (Le !== void 0) {
        if (D.currentProgram === Le && D.lightsStateVersion === Re)
          return _a(E, Ie), Le;
      } else
        Ie.uniforms = F.getUniforms(E), E.onBuild(X, Ie, v), E.onBeforeCompile(Ie, v), Le = F.acquireProgram(Ie, De), Ge.set(De, Le), D.uniforms = Ie.uniforms;
      const Oe = D.uniforms;
      (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Oe.clippingPlanes = Se.uniform), _a(E, Ie), D.needsLights = Oh(E), D.lightsStateVersion = Re, D.needsLights && (Oe.ambientLightColor.value = W.state.ambient, Oe.lightProbe.value = W.state.probe, Oe.directionalLights.value = W.state.directional, Oe.directionalLightShadows.value = W.state.directionalShadow, Oe.spotLights.value = W.state.spot, Oe.spotLightShadows.value = W.state.spotShadow, Oe.rectAreaLights.value = W.state.rectArea, Oe.ltc_1.value = W.state.rectAreaLTC1, Oe.ltc_2.value = W.state.rectAreaLTC2, Oe.pointLights.value = W.state.point, Oe.pointLightShadows.value = W.state.pointShadow, Oe.hemisphereLights.value = W.state.hemi, Oe.directionalShadowMap.value = W.state.directionalShadowMap, Oe.directionalShadowMatrix.value = W.state.directionalShadowMatrix, Oe.spotShadowMap.value = W.state.spotShadowMap, Oe.spotLightMatrix.value = W.state.spotLightMatrix, Oe.spotLightMap.value = W.state.spotLightMap, Oe.pointShadowMap.value = W.state.pointShadowMap, Oe.pointShadowMatrix.value = W.state.pointShadowMatrix);
      const st = Le.getUniforms(), rt = dr.seqWithValue(st.seq, Oe);
      return D.currentProgram = Le, D.uniformsList = rt, Le;
    }
    function _a(E, U) {
      const X = xe.get(E);
      X.outputColorSpace = U.outputColorSpace, X.instancing = U.instancing, X.instancingColor = U.instancingColor, X.skinning = U.skinning, X.morphTargets = U.morphTargets, X.morphNormals = U.morphNormals, X.morphColors = U.morphColors, X.morphTargetsCount = U.morphTargetsCount, X.numClippingPlanes = U.numClippingPlanes, X.numIntersection = U.numClipIntersection, X.vertexAlphas = U.vertexAlphas, X.vertexTangents = U.vertexTangents, X.toneMapping = U.toneMapping;
    }
    function Uh(E, U, X, D, W) {
      U.isScene !== !0 && (U = Je), ye.resetTextureUnits();
      const Me = U.fog, Re = D.isMeshStandardMaterial ? U.environment : null, Ie = A === null ? v.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : Zt, De = (D.isMeshStandardMaterial ? ke : Ce).get(D.envMap || Re), Ge = D.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, Le = !!X.attributes.tangent && (!!D.normalMap || D.anisotropy > 0), Oe = !!X.morphAttributes.position, st = !!X.morphAttributes.normal, rt = !!X.morphAttributes.color;
      let Pt = Un;
      D.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Pt = v.toneMapping);
      const rn = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, ot = rn !== void 0 ? rn.length : 0, Ve = xe.get(D), Rr = m.state.lights;
      if (me === !0 && (ve === !0 || E !== M)) {
        const Rt = E === M && D.id === N;
        Se.setState(D, E, Rt);
      }
      let at = !1;
      D.version === Ve.__version ? (Ve.needsLights && Ve.lightsStateVersion !== Rr.state.version || Ve.outputColorSpace !== Ie || W.isInstancedMesh && Ve.instancing === !1 || !W.isInstancedMesh && Ve.instancing === !0 || W.isSkinnedMesh && Ve.skinning === !1 || !W.isSkinnedMesh && Ve.skinning === !0 || W.isInstancedMesh && Ve.instancingColor === !0 && W.instanceColor === null || W.isInstancedMesh && Ve.instancingColor === !1 && W.instanceColor !== null || Ve.envMap !== De || D.fog === !0 && Ve.fog !== Me || Ve.numClippingPlanes !== void 0 && (Ve.numClippingPlanes !== Se.numPlanes || Ve.numIntersection !== Se.numIntersection) || Ve.vertexAlphas !== Ge || Ve.vertexTangents !== Le || Ve.morphTargets !== Oe || Ve.morphNormals !== st || Ve.morphColors !== rt || Ve.toneMapping !== Pt || re.isWebGL2 === !0 && Ve.morphTargetsCount !== ot) && (at = !0) : (at = !0, Ve.__version = D.version);
      let Fn = Ve.currentProgram;
      at === !0 && (Fn = Ns(D, U, W));
      let va = !1, ss = !1, Cr = !1;
      const xt = Fn.getUniforms(), Bn = Ve.uniforms;
      if (Q.useProgram(Fn.program) && (va = !0, ss = !0, Cr = !0), D.id !== N && (N = D.id, ss = !0), va || M !== E) {
        if (xt.setValue(R, "projectionMatrix", E.projectionMatrix), re.logarithmicDepthBuffer && xt.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(E.far + 1) / Math.LN2)
        ), M !== E && (M = E, ss = !0, Cr = !0), D.isShaderMaterial || D.isMeshPhongMaterial || D.isMeshToonMaterial || D.isMeshStandardMaterial || D.envMap) {
          const Rt = xt.map.cameraPosition;
          Rt !== void 0 && Rt.setValue(
            R,
            $e.setFromMatrixPosition(E.matrixWorld)
          );
        }
        (D.isMeshPhongMaterial || D.isMeshToonMaterial || D.isMeshLambertMaterial || D.isMeshBasicMaterial || D.isMeshStandardMaterial || D.isShaderMaterial) && xt.setValue(R, "isOrthographic", E.isOrthographicCamera === !0), (D.isMeshPhongMaterial || D.isMeshToonMaterial || D.isMeshLambertMaterial || D.isMeshBasicMaterial || D.isMeshStandardMaterial || D.isShaderMaterial || D.isShadowMaterial || W.isSkinnedMesh) && xt.setValue(R, "viewMatrix", E.matrixWorldInverse);
      }
      if (W.isSkinnedMesh) {
        xt.setOptional(R, W, "bindMatrix"), xt.setOptional(R, W, "bindMatrixInverse");
        const Rt = W.skeleton;
        Rt && (re.floatVertexTextures ? (Rt.boneTexture === null && Rt.computeBoneTexture(), xt.setValue(R, "boneTexture", Rt.boneTexture, ye), xt.setValue(R, "boneTextureSize", Rt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Lr = X.morphAttributes;
      if ((Lr.position !== void 0 || Lr.normal !== void 0 || Lr.color !== void 0 && re.isWebGL2 === !0) && C.update(W, X, Fn), (ss || Ve.receiveShadow !== W.receiveShadow) && (Ve.receiveShadow = W.receiveShadow, xt.setValue(R, "receiveShadow", W.receiveShadow)), D.isMeshGouraudMaterial && D.envMap !== null && (Bn.envMap.value = De, Bn.flipEnvMap.value = De.isCubeTexture && De.isRenderTargetTexture === !1 ? -1 : 1), ss && (xt.setValue(R, "toneMappingExposure", v.toneMappingExposure), Ve.needsLights && Nh(Bn, Cr), Me && D.fog === !0 && se.refreshFogUniforms(Bn, Me), se.refreshMaterialUniforms(Bn, D, $, J, Ae), dr.upload(R, Ve.uniformsList, Bn, ye)), D.isShaderMaterial && D.uniformsNeedUpdate === !0 && (dr.upload(R, Ve.uniformsList, Bn, ye), D.uniformsNeedUpdate = !1), D.isSpriteMaterial && xt.setValue(R, "center", W.center), xt.setValue(R, "modelViewMatrix", W.modelViewMatrix), xt.setValue(R, "normalMatrix", W.normalMatrix), xt.setValue(R, "modelMatrix", W.matrixWorld), D.isShaderMaterial || D.isRawShaderMaterial) {
        const Rt = D.uniformsGroups;
        for (let Pr = 0, Fh = Rt.length; Pr < Fh; Pr++)
          if (re.isWebGL2) {
            const xa = Rt[Pr];
            Ue.update(xa, Fn), Ue.bind(xa, Fn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Fn;
    }
    function Nh(E, U) {
      E.ambientLightColor.needsUpdate = U, E.lightProbe.needsUpdate = U, E.directionalLights.needsUpdate = U, E.directionalLightShadows.needsUpdate = U, E.pointLights.needsUpdate = U, E.pointLightShadows.needsUpdate = U, E.spotLights.needsUpdate = U, E.spotLightShadows.needsUpdate = U, E.rectAreaLights.needsUpdate = U, E.hemisphereLights.needsUpdate = U;
    }
    function Oh(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return A;
    }, this.setRenderTargetTextures = function(E, U, X) {
      xe.get(E.texture).__webglTexture = U, xe.get(E.depthTexture).__webglTexture = X;
      const D = xe.get(E);
      D.__hasExternalTextures = !0, D.__hasExternalTextures && (D.__autoAllocateDepthBuffer = X === void 0, D.__autoAllocateDepthBuffer || j.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), D.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(E, U) {
      const X = xe.get(E);
      X.__webglFramebuffer = U, X.__useDefaultFramebuffer = U === void 0;
    }, this.setRenderTarget = function(E, U = 0, X = 0) {
      A = E, w = U, L = X;
      let D = !0, W = null, Me = !1, Re = !1;
      if (E) {
        const De = xe.get(E);
        De.__useDefaultFramebuffer !== void 0 ? (Q.bindFramebuffer(R.FRAMEBUFFER, null), D = !1) : De.__webglFramebuffer === void 0 ? ye.setupRenderTarget(E) : De.__hasExternalTextures && ye.rebindTextures(E, xe.get(E.texture).__webglTexture, xe.get(E.depthTexture).__webglTexture);
        const Ge = E.texture;
        (Ge.isData3DTexture || Ge.isDataArrayTexture || Ge.isCompressedArrayTexture) && (Re = !0);
        const Le = xe.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Array.isArray(Le[U]) ? W = Le[U][X] : W = Le[U], Me = !0) : re.isWebGL2 && E.samples > 0 && ye.useMultisampledRTT(E) === !1 ? W = xe.get(E).__webglMultisampledFramebuffer : Array.isArray(Le) ? W = Le[X] : W = Le, b.copy(E.viewport), q.copy(E.scissor), ne = E.scissorTest;
      } else
        b.copy(K).multiplyScalar($).floor(), q.copy(O).multiplyScalar($).floor(), ne = V;
      if (Q.bindFramebuffer(R.FRAMEBUFFER, W) && re.drawBuffers && D && Q.drawBuffers(E, W), Q.viewport(b), Q.scissor(q), Q.setScissorTest(ne), Me) {
        const De = xe.get(E.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + U, De.__webglTexture, X);
      } else if (Re) {
        const De = xe.get(E.texture), Ge = U || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, De.__webglTexture, X || 0, Ge);
      }
      N = -1;
    }, this.readRenderTargetPixels = function(E, U, X, D, W, Me, Re) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ie = xe.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && Re !== void 0 && (Ie = Ie[Re]), Ie) {
        Q.bindFramebuffer(R.FRAMEBUFFER, Ie);
        try {
          const De = E.texture, Ge = De.format, Le = De.type;
          if (Ge !== Nt && he.convert(Ge) !== R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Oe = Le === ys && (j.has("EXT_color_buffer_half_float") || re.isWebGL2 && j.has("EXT_color_buffer_float"));
          if (Le !== Nn && he.convert(Le) !== R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE) && !(Le === mn && (re.isWebGL2 || j.has("OES_texture_float") || j.has("WEBGL_color_buffer_float"))) && !Oe) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= E.width - D && X >= 0 && X <= E.height - W && R.readPixels(U, X, D, W, he.convert(Ge), he.convert(Le), Me);
        } finally {
          const De = A !== null ? xe.get(A).__webglFramebuffer : null;
          Q.bindFramebuffer(R.FRAMEBUFFER, De);
        }
      }
    }, this.copyFramebufferToTexture = function(E, U, X = 0) {
      const D = Math.pow(2, -X), W = Math.floor(U.image.width * D), Me = Math.floor(U.image.height * D);
      ye.setTexture2D(U, 0), R.copyTexSubImage2D(R.TEXTURE_2D, X, 0, 0, E.x, E.y, W, Me), Q.unbindTexture();
    }, this.copyTextureToTexture = function(E, U, X, D = 0) {
      const W = U.image.width, Me = U.image.height, Re = he.convert(X.format), Ie = he.convert(X.type);
      ye.setTexture2D(X, 0), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, X.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, X.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, X.unpackAlignment), U.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, D, E.x, E.y, W, Me, Re, Ie, U.image.data) : U.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, D, E.x, E.y, U.mipmaps[0].width, U.mipmaps[0].height, Re, U.mipmaps[0].data) : R.texSubImage2D(R.TEXTURE_2D, D, E.x, E.y, Re, Ie, U.image), D === 0 && X.generateMipmaps && R.generateMipmap(R.TEXTURE_2D), Q.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, U, X, D, W = 0) {
      if (v.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const Me = E.max.x - E.min.x + 1, Re = E.max.y - E.min.y + 1, Ie = E.max.z - E.min.z + 1, De = he.convert(D.format), Ge = he.convert(D.type);
      let Le;
      if (D.isData3DTexture)
        ye.setTexture3D(D, 0), Le = R.TEXTURE_3D;
      else if (D.isDataArrayTexture)
        ye.setTexture2DArray(D, 0), Le = R.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, D.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, D.unpackAlignment);
      const Oe = R.getParameter(R.UNPACK_ROW_LENGTH), st = R.getParameter(R.UNPACK_IMAGE_HEIGHT), rt = R.getParameter(R.UNPACK_SKIP_PIXELS), Pt = R.getParameter(R.UNPACK_SKIP_ROWS), rn = R.getParameter(R.UNPACK_SKIP_IMAGES), ot = X.isCompressedTexture ? X.mipmaps[0] : X.image;
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ot.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, E.min.x), R.pixelStorei(R.UNPACK_SKIP_ROWS, E.min.y), R.pixelStorei(R.UNPACK_SKIP_IMAGES, E.min.z), X.isDataTexture || X.isData3DTexture ? R.texSubImage3D(Le, W, U.x, U.y, U.z, Me, Re, Ie, De, Ge, ot.data) : X.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), R.compressedTexSubImage3D(Le, W, U.x, U.y, U.z, Me, Re, Ie, De, ot.data)) : R.texSubImage3D(Le, W, U.x, U.y, U.z, Me, Re, Ie, De, Ge, ot), R.pixelStorei(R.UNPACK_ROW_LENGTH, Oe), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, st), R.pixelStorei(R.UNPACK_SKIP_PIXELS, rt), R.pixelStorei(R.UNPACK_SKIP_ROWS, Pt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, rn), W === 0 && D.generateMipmaps && R.generateMipmap(Le), Q.unbindTexture();
    }, this.initTexture = function(E) {
      E.isCubeTexture ? ye.setTextureCube(E, 0) : E.isData3DTexture ? ye.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? ye.setTexture2DArray(E, 0) : ye.setTexture2D(E, 0), Q.unbindTexture();
    }, this.resetState = function() {
      w = 0, L = 0, A = null, Q.reset(), ge.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return gn;
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Pe ? Zn : Wl;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Zn ? Pe : Zt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class e_ extends hh {
}
e_.prototype.isWebGL1Renderer = !0;
class t_ extends qe {
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
class n_ {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Po, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Ot();
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
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ot()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ot()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const yt = /* @__PURE__ */ new P();
class ea {
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
      yt.fromBufferAttribute(this, t), yt.applyMatrix4(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      yt.fromBufferAttribute(this, t), yt.applyNormalMatrix(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      yt.fromBufferAttribute(this, t), yt.transformDirection(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array), i = Ze(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array), i = Ze(i, this.array), r = Ze(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new Tt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ea(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
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
const Fc = /* @__PURE__ */ new P(), Bc = /* @__PURE__ */ new Qe(), zc = /* @__PURE__ */ new Qe(), i_ = /* @__PURE__ */ new P(), Hc = /* @__PURE__ */ new Be(), wi = /* @__PURE__ */ new P(), oo = /* @__PURE__ */ new en(), kc = /* @__PURE__ */ new Be(), ao = /* @__PURE__ */ new Qi();
class s_ extends bt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Be(), this.bindMatrixInverse = new Be(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new xn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      wi.fromBufferAttribute(t, n), this.applyBoneTransform(n, wi), this.boundingBox.expandByPoint(wi);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new en()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      wi.fromBufferAttribute(t, n), this.applyBoneTransform(n, wi), this.boundingSphere.expandByPoint(wi);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), oo.copy(this.boundingSphere), oo.applyMatrix4(i), e.ray.intersectsSphere(oo) !== !1 && (kc.copy(i).invert(), ao.copy(e.ray).applyMatrix4(kc), !(this.boundingBox !== null && ao.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, ao)));
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
    const e = new Qe(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Bc.fromBufferAttribute(i.attributes.skinIndex, e), zc.fromBufferAttribute(i.attributes.skinWeight, e), Fc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = zc.getComponent(r);
      if (o !== 0) {
        const a = Bc.getComponent(r);
        Hc.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(i_.copy(Fc).applyMatrix4(Hc), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class uh extends qe {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class r_ extends mt {
  constructor(e = null, t = 1, n = 1, i, r, o, a, c, l = ft, h = ft, u, d) {
    super(null, o, a, c, l, h, i, r, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Gc = /* @__PURE__ */ new Be(), o_ = /* @__PURE__ */ new Be();
class ta {
  constructor(e = [], t = []) {
    this.uuid = Ot(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Be());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Be();
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
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r] ? e[r].matrixWorld : o_;
      Gc.multiplyMatrices(a, t[r]), Gc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new ta(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = ql(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new r_(t, e, e, Nt, mn);
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
      const r = e.bones[n];
      let o = t[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new uh()), this.bones.push(o), this.boneInverses.push(new Be().fromArray(e.boneInverses[n]));
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
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i];
      e.bones.push(o.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class Vc extends Tt {
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
const Ri = /* @__PURE__ */ new Be(), Wc = /* @__PURE__ */ new Be(), nr = [], Xc = /* @__PURE__ */ new xn(), a_ = /* @__PURE__ */ new Be(), ls = /* @__PURE__ */ new bt(), hs = /* @__PURE__ */ new en();
class c_ extends bt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Vc(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, a_);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new xn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ri), Xc.copy(e.boundingBox).applyMatrix4(Ri), this.boundingBox.union(Xc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new en()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ri), hs.copy(e.boundingSphere).applyMatrix4(Ri), this.boundingSphere.union(hs);
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
    if (ls.geometry = this.geometry, ls.material = this.material, ls.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), hs.copy(this.boundingSphere), hs.applyMatrix4(n), e.ray.intersectsSphere(hs) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ri), Wc.multiplyMatrices(n, Ri), ls.matrixWorld = Wc, ls.raycast(e, nr);
        for (let o = 0, a = nr.length; o < a; o++) {
          const c = nr[o];
          c.instanceId = r, c.object = this, t.push(c);
        }
        nr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Vc(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class dh extends Kt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ne(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const $c = /* @__PURE__ */ new P(), qc = /* @__PURE__ */ new P(), jc = /* @__PURE__ */ new Be(), co = /* @__PURE__ */ new Qi(), ir = /* @__PURE__ */ new en();
class na extends qe {
  constructor(e = new Xt(), t = new dh()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        $c.fromBufferAttribute(t, i - 1), qc.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += $c.distanceTo(qc);
      e.setAttribute("lineDistance", new Gt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ir.copy(n.boundingSphere), ir.applyMatrix4(i), ir.radius += r, e.ray.intersectsSphere(ir) === !1)
      return;
    jc.copy(i).invert(), co.copy(e.ray).applyMatrix4(jc);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new P(), h = new P(), u = new P(), d = new P(), f = this.isLineSegments ? 2 : 1, g = n.index, m = n.attributes.position;
    if (g !== null) {
      const p = Math.max(0, o.start), S = Math.min(g.count, o.start + o.count);
      for (let v = p, y = S - 1; v < y; v += f) {
        const w = g.getX(v), L = g.getX(v + 1);
        if (l.fromBufferAttribute(m, w), h.fromBufferAttribute(m, L), co.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const N = e.ray.origin.distanceTo(d);
        N < e.near || N > e.far || t.push({
          distance: N,
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: v,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const p = Math.max(0, o.start), S = Math.min(m.count, o.start + o.count);
      for (let v = p, y = S - 1; v < y; v += f) {
        if (l.fromBufferAttribute(m, v), h.fromBufferAttribute(m, v + 1), co.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(d);
        L < e.near || L > e.far || t.push({
          distance: L,
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: v,
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
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
const Yc = /* @__PURE__ */ new P(), Kc = /* @__PURE__ */ new P();
class l_ extends na {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Yc.fromBufferAttribute(t, i), Kc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Yc.distanceTo(Kc);
      e.setAttribute("lineDistance", new Gt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class h_ extends na {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class fh extends Kt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ne(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Zc = /* @__PURE__ */ new Be(), No = /* @__PURE__ */ new Qi(), sr = /* @__PURE__ */ new en(), rr = /* @__PURE__ */ new P();
class u_ extends qe {
  constructor(e = new Xt(), t = new fh()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), sr.copy(n.boundingSphere), sr.applyMatrix4(i), sr.radius += r, e.ray.intersectsSphere(sr) === !1)
      return;
    Zc.copy(i).invert(), No.copy(e.ray).applyMatrix4(Zc);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, o.start), f = Math.min(l.count, o.start + o.count);
      for (let g = d, _ = f; g < _; g++) {
        const m = l.getX(g);
        rr.fromBufferAttribute(u, m), Jc(rr, m, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let g = d, _ = f; g < _; g++)
        rr.fromBufferAttribute(u, g), Jc(rr, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Jc(s, e, t, n, i, r, o) {
  const a = No.distanceSqToPoint(s);
  if (a < t) {
    const c = new P();
    No.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far)
      return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(a),
      point: c,
      index: e,
      face: null,
      object: o
    });
  }
}
class tn {
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
    let n, i = this.getPoint(0), r = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      n = this.getPoint(o / e), r += n.distanceTo(i), t.push(r), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let o;
    t ? o = t : o = e * n[r - 1];
    let a = 0, c = r - 1, l;
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
      return i / (r - 1);
    const h = n[i], d = n[i + 1] - h, f = (o - h) / d;
    return (i + f) / (r - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4, r = e + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const o = this.getPoint(i), a = this.getPoint(r), c = t || (o.isVector2 ? new ce() : new P());
    return c.copy(a).sub(o).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new P(), i = [], r = [], o = [], a = new P(), c = new Be();
    for (let f = 0; f <= e; f++) {
      const g = f / e;
      i[f] = this.getTangentAt(g, new P());
    }
    r[0] = new P(), o[0] = new P();
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), o[0].crossVectors(i[0], r[0]);
    for (let f = 1; f <= e; f++) {
      if (r[f] = r[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) {
        a.normalize();
        const g = Math.acos(lt(i[f - 1].dot(i[f]), -1, 1));
        r[f].applyMatrix4(c.makeRotationAxis(a, g));
      }
      o[f].crossVectors(i[f], r[f]);
    }
    if (t === !0) {
      let f = Math.acos(lt(r[0].dot(r[e]), -1, 1));
      f /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (f = -f);
      for (let g = 1; g <= e; g++)
        r[g].applyMatrix4(c.makeRotationAxis(i[g], f * g)), o[g].crossVectors(i[g], r[g]);
    }
    return {
      tangents: i,
      normals: r,
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
class ia extends tn {
  constructor(e = 0, t = 0, n = 1, i = 1, r = 0, o = Math.PI * 2, a = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c;
  }
  getPoint(e, t) {
    const n = t || new ce(), i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(r) < Number.EPSILON;
    for (; r < 0; )
      r += i;
    for (; r > i; )
      r -= i;
    r < Number.EPSILON && (o ? r = 0 : r = i), this.aClockwise === !0 && !o && (r === i ? r = -i : r = r - i);
    const a = this.aStartAngle + e * r;
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
class d_ extends ia {
  constructor(e, t, n, i, r, o) {
    super(e, t, n, n, i, r, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function sa() {
  let s = 0, e = 0, t = 0, n = 0;
  function i(r, o, a, c) {
    s = r, e = a, t = -3 * r + 3 * o - 2 * a - c, n = 2 * r - 2 * o + a + c;
  }
  return {
    initCatmullRom: function(r, o, a, c, l) {
      i(o, a, l * (a - r), l * (c - o));
    },
    initNonuniformCatmullRom: function(r, o, a, c, l, h, u) {
      let d = (o - r) / l - (a - r) / (l + h) + (a - o) / h, f = (a - o) / h - (c - o) / (h + u) + (c - a) / u;
      d *= h, f *= h, i(o, a, d, f);
    },
    calc: function(r) {
      const o = r * r, a = o * r;
      return s + e * r + t * o + n * a;
    }
  };
}
const or = /* @__PURE__ */ new P(), lo = /* @__PURE__ */ new sa(), ho = /* @__PURE__ */ new sa(), uo = /* @__PURE__ */ new sa();
class f_ extends tn {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new P()) {
    const n = t, i = this.points, r = i.length, o = (r - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), c = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : c === 0 && a === r - 1 && (a = r - 2, c = 1);
    let l, h;
    this.closed || a > 0 ? l = i[(a - 1) % r] : (or.subVectors(i[0], i[1]).add(i[0]), l = or);
    const u = i[a % r], d = i[(a + 1) % r];
    if (this.closed || a + 2 < r ? h = i[(a + 2) % r] : (or.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = or), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(l.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), m = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), g < 1e-4 && (g = _), m < 1e-4 && (m = _), lo.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, g, _, m), ho.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, g, _, m), uo.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, g, _, m);
    } else
      this.curveType === "catmullrom" && (lo.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), ho.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), uo.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      lo.calc(c),
      ho.calc(c),
      uo.calc(c)
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
      this.points.push(new P().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function Qc(s, e, t, n, i) {
  const r = (n - e) * 0.5, o = (i - t) * 0.5, a = s * s, c = s * a;
  return (2 * t - 2 * n + r + o) * c + (-3 * t + 3 * n - 2 * r - o) * a + r * s + t;
}
function p_(s, e) {
  const t = 1 - s;
  return t * t * e;
}
function m_(s, e) {
  return 2 * (1 - s) * s * e;
}
function g_(s, e) {
  return s * s * e;
}
function vs(s, e, t, n) {
  return p_(s, e) + m_(s, t) + g_(s, n);
}
function __(s, e) {
  const t = 1 - s;
  return t * t * t * e;
}
function v_(s, e) {
  const t = 1 - s;
  return 3 * t * t * s * e;
}
function x_(s, e) {
  return 3 * (1 - s) * s * s * e;
}
function y_(s, e) {
  return s * s * s * e;
}
function xs(s, e, t, n, i) {
  return __(s, e) + v_(s, t) + x_(s, n) + y_(s, i);
}
class ph extends tn {
  constructor(e = new ce(), t = new ce(), n = new ce(), i = new ce()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new ce()) {
    const n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return n.set(
      xs(e, i.x, r.x, o.x, a.x),
      xs(e, i.y, r.y, o.y, a.y)
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
class M_ extends tn {
  constructor(e = new P(), t = new P(), n = new P(), i = new P()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new P()) {
    const n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return n.set(
      xs(e, i.x, r.x, o.x, a.x),
      xs(e, i.y, r.y, o.y, a.y),
      xs(e, i.z, r.z, o.z, a.z)
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
class ra extends tn {
  constructor(e = new ce(), t = new ce()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new ce()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new ce()) {
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
class S_ extends tn {
  constructor(e = new P(), t = new P()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new P()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new P()) {
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
class mh extends tn {
  constructor(e = new ce(), t = new ce(), n = new ce()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new ce()) {
    const n = t, i = this.v0, r = this.v1, o = this.v2;
    return n.set(
      vs(e, i.x, r.x, o.x),
      vs(e, i.y, r.y, o.y)
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
class E_ extends tn {
  constructor(e = new P(), t = new P(), n = new P()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new P()) {
    const n = t, i = this.v0, r = this.v1, o = this.v2;
    return n.set(
      vs(e, i.x, r.x, o.x),
      vs(e, i.y, r.y, o.y),
      vs(e, i.z, r.z, o.z)
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
class gh extends tn {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new ce()) {
    const n = t, i = this.points, r = (i.length - 1) * e, o = Math.floor(r), a = r - o, c = i[o === 0 ? o : o - 1], l = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(
      Qc(a, c.x, l.x, h.x, u.x),
      Qc(a, c.y, l.y, h.y, u.y)
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
      this.points.push(new ce().fromArray(i));
    }
    return this;
  }
}
var _h = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: d_,
  CatmullRomCurve3: f_,
  CubicBezierCurve: ph,
  CubicBezierCurve3: M_,
  EllipseCurve: ia,
  LineCurve: ra,
  LineCurve3: S_,
  QuadraticBezierCurve: mh,
  QuadraticBezierCurve3: E_,
  SplineCurve: gh
});
class T_ extends tn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new ra(t, e));
  }
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const o = i[r] - n, a = this.curves[r], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c;
        return a.getPointAt(l, t);
      }
      r++;
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
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const o = r[i], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, c = o.getPoints(a);
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
      this.curves.push(new _h[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Oo extends T_ {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new ce(), e && this.setFromPoints(e);
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
    const n = new ra(this.currentPoint.clone(), new ce(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const r = new mh(
      this.currentPoint.clone(),
      new ce(e, t),
      new ce(n, i)
    );
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, o) {
    const a = new ph(
      this.currentPoint.clone(),
      new ce(e, t),
      new ce(n, i),
      new ce(r, o)
    );
    return this.curves.push(a), this.currentPoint.set(r, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new gh(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, r, o) {
    const a = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      e + a,
      t + c,
      n,
      i,
      r,
      o
    ), this;
  }
  absarc(e, t, n, i, r, o) {
    return this.absellipse(e, t, n, n, i, r, o), this;
  }
  ellipse(e, t, n, i, r, o, a, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, n, i, r, o, a, c), this;
  }
  absellipse(e, t, n, i, r, o, a, c) {
    const l = new ia(e, t, n, i, r, o, a, c);
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
class fr extends Oo {
  constructor(e) {
    super(e), this.uuid = Ot(), this.type = "Shape", this.holes = [];
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
      this.holes.push(new Oo().fromJSON(i));
    }
    return this;
  }
}
const A_ = {
  triangulate: function(s, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : s.length;
    let r = vh(s, 0, i, t, !0);
    const o = [];
    if (!r || r.next === r.prev)
      return o;
    let a, c, l, h, u, d, f;
    if (n && (r = L_(s, e, r, t)), s.length > 80 * t) {
      a = l = s[0], c = h = s[1];
      for (let g = t; g < i; g += t)
        u = s[g], d = s[g + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      f = Math.max(l - a, h - c), f = f !== 0 ? 32767 / f : 0;
    }
    return Es(r, o, t, a, c, f, 0), o;
  }
};
function vh(s, e, t, n, i) {
  let r, o;
  if (i === k_(s, e, t, n) > 0)
    for (r = e; r < t; r += n)
      o = el(r, s[r], s[r + 1], o);
  else
    for (r = t - n; r >= e; r -= n)
      o = el(r, s[r], s[r + 1], o);
  return o && Tr(o, o.next) && (As(o), o = o.next), o;
}
function si(s, e) {
  if (!s)
    return s;
  e || (e = s);
  let t = s, n;
  do
    if (n = !1, !t.steiner && (Tr(t, t.next) || it(t.prev, t, t.next) === 0)) {
      if (As(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Es(s, e, t, n, i, r, o) {
  if (!s)
    return;
  !o && r && N_(s, n, i, r);
  let a = s, c, l;
  for (; s.prev !== s.next; ) {
    if (c = s.prev, l = s.next, r ? w_(s, n, i, r) : b_(s)) {
      e.push(c.i / t | 0), e.push(s.i / t | 0), e.push(l.i / t | 0), As(s), s = l.next, a = l.next;
      continue;
    }
    if (s = l, s === a) {
      o ? o === 1 ? (s = R_(si(s), e, t), Es(s, e, t, n, i, r, 2)) : o === 2 && C_(s, e, t, n, i, r) : Es(si(s), e, t, n, i, r, 1);
      break;
    }
  }
}
function b_(s) {
  const e = s.prev, t = s, n = s.next;
  if (it(e, t, n) >= 0)
    return !1;
  const i = e.x, r = t.x, o = n.x, a = e.y, c = t.y, l = n.y, h = i < r ? i < o ? i : o : r < o ? r : o, u = a < c ? a < l ? a : l : c < l ? c : l, d = i > r ? i > o ? i : o : r > o ? r : o, f = a > c ? a > l ? a : l : c > l ? c : l;
  let g = n.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= d && g.y >= u && g.y <= f && Ii(i, a, r, c, o, l, g.x, g.y) && it(g.prev, g, g.next) >= 0)
      return !1;
    g = g.next;
  }
  return !0;
}
function w_(s, e, t, n) {
  const i = s.prev, r = s, o = s.next;
  if (it(i, r, o) >= 0)
    return !1;
  const a = i.x, c = r.x, l = o.x, h = i.y, u = r.y, d = o.y, f = a < c ? a < l ? a : l : c < l ? c : l, g = h < u ? h < d ? h : d : u < d ? u : d, _ = a > c ? a > l ? a : l : c > l ? c : l, m = h > u ? h > d ? h : d : u > d ? u : d, p = Fo(f, g, e, t, n), S = Fo(_, m, e, t, n);
  let v = s.prevZ, y = s.nextZ;
  for (; v && v.z >= p && y && y.z <= S; ) {
    if (v.x >= f && v.x <= _ && v.y >= g && v.y <= m && v !== i && v !== o && Ii(a, h, c, u, l, d, v.x, v.y) && it(v.prev, v, v.next) >= 0 || (v = v.prevZ, y.x >= f && y.x <= _ && y.y >= g && y.y <= m && y !== i && y !== o && Ii(a, h, c, u, l, d, y.x, y.y) && it(y.prev, y, y.next) >= 0))
      return !1;
    y = y.nextZ;
  }
  for (; v && v.z >= p; ) {
    if (v.x >= f && v.x <= _ && v.y >= g && v.y <= m && v !== i && v !== o && Ii(a, h, c, u, l, d, v.x, v.y) && it(v.prev, v, v.next) >= 0)
      return !1;
    v = v.prevZ;
  }
  for (; y && y.z <= S; ) {
    if (y.x >= f && y.x <= _ && y.y >= g && y.y <= m && y !== i && y !== o && Ii(a, h, c, u, l, d, y.x, y.y) && it(y.prev, y, y.next) >= 0)
      return !1;
    y = y.nextZ;
  }
  return !0;
}
function R_(s, e, t) {
  let n = s;
  do {
    const i = n.prev, r = n.next.next;
    !Tr(i, r) && xh(i, n, n.next, r) && Ts(i, r) && Ts(r, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(r.i / t | 0), As(n), As(n.next), n = s = r), n = n.next;
  } while (n !== s);
  return si(n);
}
function C_(s, e, t, n, i, r) {
  let o = s;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && B_(o, a)) {
        let c = yh(o, a);
        o = si(o, o.next), c = si(c, c.next), Es(o, e, t, n, i, r, 0), Es(c, e, t, n, i, r, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== s);
}
function L_(s, e, t, n) {
  const i = [];
  let r, o, a, c, l;
  for (r = 0, o = e.length; r < o; r++)
    a = e[r] * n, c = r < o - 1 ? e[r + 1] * n : s.length, l = vh(s, a, c, n, !1), l === l.next && (l.steiner = !0), i.push(F_(l));
  for (i.sort(P_), r = 0; r < i.length; r++)
    t = I_(i[r], t);
  return t;
}
function P_(s, e) {
  return s.x - e.x;
}
function I_(s, e) {
  const t = D_(s, e);
  if (!t)
    return e;
  const n = yh(t, s);
  return si(n, n.next), si(t, t.next);
}
function D_(s, e) {
  let t = e, n = -1 / 0, i;
  const r = s.x, o = s.y;
  do {
    if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
      const d = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (d <= r && d > n && (n = d, i = t.x < t.next.x ? t : t.next, d === r))
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
    r >= t.x && t.x >= c && r !== t.x && Ii(o < l ? r : n, o, c, l, o < l ? n : r, o, t.x, t.y) && (u = Math.abs(o - t.y) / (r - t.x), Ts(t, s) && (u < h || u === h && (t.x > i.x || t.x === i.x && U_(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== a);
  return i;
}
function U_(s, e) {
  return it(s.prev, s, e.prev) < 0 && it(e.next, s, s.next) < 0;
}
function N_(s, e, t, n) {
  let i = s;
  do
    i.z === 0 && (i.z = Fo(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== s);
  i.prevZ.nextZ = null, i.prevZ = null, O_(i);
}
function O_(s) {
  let e, t, n, i, r, o, a, c, l = 1;
  do {
    for (t = s, s = null, r = null, o = 0; t; ) {
      for (o++, n = t, a = 0, e = 0; e < l && (a++, n = n.nextZ, !!n); e++)
        ;
      for (c = l; a > 0 || c > 0 && n; )
        a !== 0 && (c === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, c--), r ? r.nextZ = i : s = i, i.prevZ = r, r = i;
      t = n;
    }
    r.nextZ = null, l *= 2;
  } while (o > 1);
  return s;
}
function Fo(s, e, t, n, i) {
  return s = (s - t) * i | 0, e = (e - n) * i | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, s | e << 1;
}
function F_(s) {
  let e = s, t = s;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== s);
  return t;
}
function Ii(s, e, t, n, i, r, o, a) {
  return (i - o) * (e - a) >= (s - o) * (r - a) && (s - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (r - a) >= (i - o) * (n - a);
}
function B_(s, e) {
  return s.next.i !== e.i && s.prev.i !== e.i && !z_(s, e) && (Ts(s, e) && Ts(e, s) && H_(s, e) && (it(s.prev, s, e.prev) || it(s, e.prev, e)) || Tr(s, e) && it(s.prev, s, s.next) > 0 && it(e.prev, e, e.next) > 0);
}
function it(s, e, t) {
  return (e.y - s.y) * (t.x - e.x) - (e.x - s.x) * (t.y - e.y);
}
function Tr(s, e) {
  return s.x === e.x && s.y === e.y;
}
function xh(s, e, t, n) {
  const i = cr(it(s, e, t)), r = cr(it(s, e, n)), o = cr(it(t, n, s)), a = cr(it(t, n, e));
  return !!(i !== r && o !== a || i === 0 && ar(s, t, e) || r === 0 && ar(s, n, e) || o === 0 && ar(t, s, n) || a === 0 && ar(t, e, n));
}
function ar(s, e, t) {
  return e.x <= Math.max(s.x, t.x) && e.x >= Math.min(s.x, t.x) && e.y <= Math.max(s.y, t.y) && e.y >= Math.min(s.y, t.y);
}
function cr(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function z_(s, e) {
  let t = s;
  do {
    if (t.i !== s.i && t.next.i !== s.i && t.i !== e.i && t.next.i !== e.i && xh(t, t.next, s, e))
      return !0;
    t = t.next;
  } while (t !== s);
  return !1;
}
function Ts(s, e) {
  return it(s.prev, s, s.next) < 0 ? it(s, e, s.next) >= 0 && it(s, s.prev, e) >= 0 : it(s, e, s.prev) < 0 || it(s, s.next, e) < 0;
}
function H_(s, e) {
  let t = s, n = !1;
  const i = (s.x + e.x) / 2, r = (s.y + e.y) / 2;
  do
    t.y > r != t.next.y > r && t.next.y !== t.y && i < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== s);
  return n;
}
function yh(s, e) {
  const t = new Bo(s.i, s.x, s.y), n = new Bo(e.i, e.x, e.y), i = s.next, r = e.prev;
  return s.next = e, e.prev = s, t.next = i, i.prev = t, n.next = t, t.prev = n, r.next = n, n.prev = r, n;
}
function el(s, e, t, n) {
  const i = new Bo(s, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function As(s) {
  s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function Bo(s, e, t) {
  this.i = s, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function k_(s, e, t, n) {
  let i = 0;
  for (let r = e, o = t - n; r < t; r += n)
    i += (s[o] - s[r]) * (s[r + 1] + s[o + 1]), o = r;
  return i;
}
class Ni {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, r = 0; r < t; i = r++)
      n += e[i].x * e[r].y - e[r].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Ni.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], r = [];
    tl(e), nl(n, e);
    let o = e.length;
    t.forEach(tl);
    for (let c = 0; c < t.length; c++)
      i.push(o), o += t[c].length, nl(n, t[c]);
    const a = A_.triangulate(n, i);
    for (let c = 0; c < a.length; c += 3)
      r.push(a.slice(c, c + 3));
    return r;
  }
}
function tl(s) {
  const e = s.length;
  e > 2 && s[e - 1].equals(s[0]) && s.pop();
}
function nl(s, e) {
  for (let t = 0; t < e.length; t++)
    s.push(e[t].x), s.push(e[t].y);
}
class oa extends Xt {
  constructor(e = new fr([new ce(0.5, 0.5), new ce(-0.5, 0.5), new ce(-0.5, -0.5), new ce(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, i = [], r = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a];
      o(l);
    }
    this.setAttribute("position", new Gt(i, 3)), this.setAttribute("uv", new Gt(r, 2)), this.computeVertexNormals();
    function o(a) {
      const c = [], l = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, g = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, _ = t.bevelOffset !== void 0 ? t.bevelOffset : 0, m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, S = t.UVGenerator !== void 0 ? t.UVGenerator : G_;
      let v, y = !1, w, L, A, N;
      p && (v = p.getSpacedPoints(h), y = !0, d = !1, w = p.computeFrenetFrames(h, !1), L = new P(), A = new P(), N = new P()), d || (m = 0, f = 0, g = 0, _ = 0);
      const M = a.extractPoints(l);
      let b = M.shape;
      const q = M.holes;
      if (!Ni.isClockWise(b)) {
        b = b.reverse();
        for (let R = 0, le = q.length; R < le; R++) {
          const j = q[R];
          Ni.isClockWise(j) && (q[R] = j.reverse());
        }
      }
      const B = Ni.triangulateShape(b, q), k = b;
      for (let R = 0, le = q.length; R < le; R++) {
        const j = q[R];
        b = b.concat(j);
      }
      function G(R, le, j) {
        return le || console.error("THREE.ExtrudeGeometry: vec does not exist"), R.clone().addScaledVector(le, j);
      }
      const J = b.length, $ = B.length;
      function Y(R, le, j) {
        let re, Q, Ee;
        const xe = R.x - le.x, ye = R.y - le.y, Ce = j.x - R.x, ke = j.y - R.y, nt = xe * xe + ye * ye, T = xe * ke - ye * Ce;
        if (Math.abs(T) > Number.EPSILON) {
          const x = Math.sqrt(nt), F = Math.sqrt(Ce * Ce + ke * ke), se = le.x - ye / x, ee = le.y + xe / x, oe = j.x - ke / F, Se = j.y + Ce / F, ae = ((oe - se) * ke - (Se - ee) * Ce) / (xe * ke - ye * Ce);
          re = se + xe * ae - R.x, Q = ee + ye * ae - R.y;
          const H = re * re + Q * Q;
          if (H <= 2)
            return new ce(re, Q);
          Ee = Math.sqrt(H / 2);
        } else {
          let x = !1;
          xe > Number.EPSILON ? Ce > Number.EPSILON && (x = !0) : xe < -Number.EPSILON ? Ce < -Number.EPSILON && (x = !0) : Math.sign(ye) === Math.sign(ke) && (x = !0), x ? (re = -ye, Q = xe, Ee = Math.sqrt(nt)) : (re = xe, Q = ye, Ee = Math.sqrt(nt / 2));
        }
        return new ce(re / Ee, Q / Ee);
      }
      const te = [];
      for (let R = 0, le = k.length, j = le - 1, re = R + 1; R < le; R++, j++, re++)
        j === le && (j = 0), re === le && (re = 0), te[R] = Y(k[R], k[j], k[re]);
      const K = [];
      let O, V = te.concat();
      for (let R = 0, le = q.length; R < le; R++) {
        const j = q[R];
        O = [];
        for (let re = 0, Q = j.length, Ee = Q - 1, xe = re + 1; re < Q; re++, Ee++, xe++)
          Ee === Q && (Ee = 0), xe === Q && (xe = 0), O[re] = Y(j[re], j[Ee], j[xe]);
        K.push(O), V = V.concat(O);
      }
      for (let R = 0; R < m; R++) {
        const le = R / m, j = f * Math.cos(le * Math.PI / 2), re = g * Math.sin(le * Math.PI / 2) + _;
        for (let Q = 0, Ee = k.length; Q < Ee; Q++) {
          const xe = G(k[Q], te[Q], re);
          be(xe.x, xe.y, -j);
        }
        for (let Q = 0, Ee = q.length; Q < Ee; Q++) {
          const xe = q[Q];
          O = K[Q];
          for (let ye = 0, Ce = xe.length; ye < Ce; ye++) {
            const ke = G(xe[ye], O[ye], re);
            be(ke.x, ke.y, -j);
          }
        }
      }
      const pe = g + _;
      for (let R = 0; R < J; R++) {
        const le = d ? G(b[R], V[R], pe) : b[R];
        y ? (A.copy(w.normals[0]).multiplyScalar(le.x), L.copy(w.binormals[0]).multiplyScalar(le.y), N.copy(v[0]).add(A).add(L), be(N.x, N.y, N.z)) : be(le.x, le.y, 0);
      }
      for (let R = 1; R <= h; R++)
        for (let le = 0; le < J; le++) {
          const j = d ? G(b[le], V[le], pe) : b[le];
          y ? (A.copy(w.normals[R]).multiplyScalar(j.x), L.copy(w.binormals[R]).multiplyScalar(j.y), N.copy(v[R]).add(A).add(L), be(N.x, N.y, N.z)) : be(j.x, j.y, u / h * R);
        }
      for (let R = m - 1; R >= 0; R--) {
        const le = R / m, j = f * Math.cos(le * Math.PI / 2), re = g * Math.sin(le * Math.PI / 2) + _;
        for (let Q = 0, Ee = k.length; Q < Ee; Q++) {
          const xe = G(k[Q], te[Q], re);
          be(xe.x, xe.y, u + j);
        }
        for (let Q = 0, Ee = q.length; Q < Ee; Q++) {
          const xe = q[Q];
          O = K[Q];
          for (let ye = 0, Ce = xe.length; ye < Ce; ye++) {
            const ke = G(xe[ye], O[ye], re);
            y ? be(ke.x, ke.y + v[h - 1].y, v[h - 1].x + j) : be(ke.x, ke.y, u + j);
          }
        }
      }
      me(), ve();
      function me() {
        const R = i.length / 3;
        if (d) {
          let le = 0, j = J * le;
          for (let re = 0; re < $; re++) {
            const Q = B[re];
            Te(Q[2] + j, Q[1] + j, Q[0] + j);
          }
          le = h + m * 2, j = J * le;
          for (let re = 0; re < $; re++) {
            const Q = B[re];
            Te(Q[0] + j, Q[1] + j, Q[2] + j);
          }
        } else {
          for (let le = 0; le < $; le++) {
            const j = B[le];
            Te(j[2], j[1], j[0]);
          }
          for (let le = 0; le < $; le++) {
            const j = B[le];
            Te(j[0] + J * h, j[1] + J * h, j[2] + J * h);
          }
        }
        n.addGroup(R, i.length / 3 - R, 0);
      }
      function ve() {
        const R = i.length / 3;
        let le = 0;
        Ae(k, le), le += k.length;
        for (let j = 0, re = q.length; j < re; j++) {
          const Q = q[j];
          Ae(Q, le), le += Q.length;
        }
        n.addGroup(R, i.length / 3 - R, 1);
      }
      function Ae(R, le) {
        let j = R.length;
        for (; --j >= 0; ) {
          const re = j;
          let Q = j - 1;
          Q < 0 && (Q = R.length - 1);
          for (let Ee = 0, xe = h + m * 2; Ee < xe; Ee++) {
            const ye = J * Ee, Ce = J * (Ee + 1), ke = le + re + ye, nt = le + Q + ye, T = le + Q + Ce, x = le + re + Ce;
            $e(ke, nt, T, x);
          }
        }
      }
      function be(R, le, j) {
        c.push(R), c.push(le), c.push(j);
      }
      function Te(R, le, j) {
        Je(R), Je(le), Je(j);
        const re = i.length / 3, Q = S.generateTopUV(n, i, re - 3, re - 2, re - 1);
        we(Q[0]), we(Q[1]), we(Q[2]);
      }
      function $e(R, le, j, re) {
        Je(R), Je(le), Je(re), Je(le), Je(j), Je(re);
        const Q = i.length / 3, Ee = S.generateSideWallUV(n, i, Q - 6, Q - 3, Q - 2, Q - 1);
        we(Ee[0]), we(Ee[1]), we(Ee[3]), we(Ee[1]), we(Ee[2]), we(Ee[3]);
      }
      function Je(R) {
        i.push(c[R * 3 + 0]), i.push(c[R * 3 + 1]), i.push(c[R * 3 + 2]);
      }
      function we(R) {
        r.push(R.x), r.push(R.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return V_(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let r = 0, o = e.shapes.length; r < o; r++) {
      const a = t[e.shapes[r]];
      n.push(a);
    }
    const i = e.options.extrudePath;
    return i !== void 0 && (e.options.extrudePath = new _h[i.type]().fromJSON(i)), new oa(n, e.options);
  }
}
const G_ = {
  generateTopUV: function(s, e, t, n, i) {
    const r = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], c = e[n * 3 + 1], l = e[i * 3], h = e[i * 3 + 1];
    return [
      new ce(r, o),
      new ce(a, c),
      new ce(l, h)
    ];
  },
  generateSideWallUV: function(s, e, t, n, i, r) {
    const o = e[t * 3], a = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], g = e[i * 3 + 2], _ = e[r * 3], m = e[r * 3 + 1], p = e[r * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - l) ? [
      new ce(o, 1 - c),
      new ce(l, 1 - u),
      new ce(d, 1 - g),
      new ce(_, 1 - p)
    ] : [
      new ce(a, 1 - c),
      new ce(h, 1 - u),
      new ce(f, 1 - g),
      new ce(m, 1 - p)
    ];
  }
};
function V_(s, e, t) {
  if (t.shapes = [], Array.isArray(s))
    for (let n = 0, i = s.length; n < i; n++) {
      const r = s[n];
      t.shapes.push(r.uuid);
    }
  else
    t.shapes.push(s.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Ps extends Kt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ne(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Xl, this.normalScale = new ce(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class On extends Ps {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ce(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return lt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ne(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ne(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ne(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
function bn(s, e, t) {
  return Mh(s) ? new s.constructor(s.subarray(e, t !== void 0 ? t : s.length)) : s.slice(e, t);
}
function lr(s, e, t) {
  return !s || !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function Mh(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function W_(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function il(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let c = 0; c !== e; ++c)
      i[o++] = s[a + c];
  }
  return i;
}
function Sh(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = s[i++];
  if (r === void 0)
    return;
  let o = r[n];
  if (o !== void 0)
    if (Array.isArray(o))
      do
        o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = s[i++];
      while (r !== void 0);
    else if (o.toArray !== void 0)
      do
        o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s[i++];
      while (r !== void 0);
    else
      do
        o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s[i++];
      while (r !== void 0);
}
class Is {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let o;
        t: {
          i:
            if (!(e < i)) {
              for (let a = n + 2; ; ) {
                if (i === void 0) {
                  if (e < r)
                    break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === a)
                  break;
                if (r = i, i = t[++n], e < i)
                  break e;
              }
              o = t.length;
              break t;
            }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (n = 2, r = a);
            for (let c = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c)
                break;
              if (i = r, r = t[--n - 1], e >= r)
                break e;
            }
            o = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          e < t[a] ? o = a : n = a + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let o = 0; o !== i; ++o)
      t[o] = n[r + o];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class X_ extends Is {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Ya,
      endingEnd: Ya
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, o = e + 1, a = i[r], c = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case Ka:
          r = e, a = 2 * t - n;
          break;
        case Za:
          r = i.length - 2, a = t + i[r] - i[r + 1];
          break;
        default:
          r = e, a = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Ka:
          o = e, c = 2 * n - t;
          break;
        case Za:
          o = 1, c = n + i[1] - i[0];
          break;
        default:
          o = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (c - n), this._offsetPrev = r * h, this._offsetNext = o * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, p = -d * m + 2 * d * _ - d * g, S = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, v = (-1 - f) * m + (1.5 + f) * _ + 0.5 * g, y = f * m - f * _;
    for (let w = 0; w !== a; ++w)
      r[w] = p * o[h + w] + S * o[l + w] + v * o[c + w] + y * o[u + w];
    return r;
  }
}
class $_ extends Is {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== a; ++d)
      r[d] = o[l + d] * u + o[c + d] * h;
    return r;
  }
}
class q_ extends Is {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class nn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = lr(t, this.TimeBufferType), this.values = lr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: lr(e.times, Array),
        values: lr(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new q_(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new $_(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new X_(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Ms:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Gi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Fr:
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
        return Ms;
      case this.InterpolantFactoryMethodLinear:
        return Gi;
      case this.InterpolantFactoryMethodSmooth:
        return Fr;
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
    let r = 0, o = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; o !== -1 && n[o] > t; )
      --o;
    if (++o, r !== 0 || o !== i) {
      r >= o && (o = Math.max(o, 1), r = o - 1);
      const a = this.getValueSize();
      this.times = bn(n, r, o), this.values = bn(this.values, r * a, o * a);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let o = null;
    for (let a = 0; a !== r; a++) {
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
    if (i !== void 0 && Mh(i))
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
    const e = bn(this.times), t = bn(this.values), n = this.getValueSize(), i = this.getInterpolation() === Fr, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let c = !1;
      const l = e[a], h = e[a + 1];
      if (l !== h && (a !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const u = a * n, d = u - n, f = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[d + g] || _ !== t[f + g]) {
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
    if (r > 0) {
      e[o] = e[r];
      for (let a = r * n, c = o * n, l = 0; l !== n; ++l)
        t[c + l] = t[a + l];
      ++o;
    }
    return o !== e.length ? (this.times = bn(e, 0, o), this.values = bn(t, 0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = bn(this.times, 0), t = bn(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
nn.prototype.TimeBufferType = Float32Array;
nn.prototype.ValueBufferType = Float32Array;
nn.prototype.DefaultInterpolation = Gi;
class ns extends nn {
}
ns.prototype.ValueTypeName = "bool";
ns.prototype.ValueBufferType = Array;
ns.prototype.DefaultInterpolation = Ms;
ns.prototype.InterpolantFactoryMethodLinear = void 0;
ns.prototype.InterpolantFactoryMethodSmooth = void 0;
class Eh extends nn {
}
Eh.prototype.ValueTypeName = "color";
class Xi extends nn {
}
Xi.prototype.ValueTypeName = "number";
class j_ extends Is {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = (n - t) / (i - t);
    let l = e * a;
    for (let h = l + a; l !== h; l += 4)
      Jt.slerpFlat(r, 0, o, l - a, o, l, c);
    return r;
  }
}
class ri extends nn {
  InterpolantFactoryMethodLinear(e) {
    return new j_(this.times, this.values, this.getValueSize(), e);
  }
}
ri.prototype.ValueTypeName = "quaternion";
ri.prototype.DefaultInterpolation = Gi;
ri.prototype.InterpolantFactoryMethodSmooth = void 0;
class is extends nn {
}
is.prototype.ValueTypeName = "string";
is.prototype.ValueBufferType = Array;
is.prototype.DefaultInterpolation = Ms;
is.prototype.InterpolantFactoryMethodLinear = void 0;
is.prototype.InterpolantFactoryMethodSmooth = void 0;
class $i extends nn {
}
$i.prototype.ValueTypeName = "vector";
class Y_ {
  constructor(e, t = -1, n, i = yu) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Ot(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(Z_(n[o]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, o = n.length; r !== o; ++r)
      t.push(nn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let c = [], l = [];
      c.push(
        (a + r - 1) % r,
        a,
        (a + 1) % r
      ), l.push(0, 1, 0);
      const h = W_(c);
      c = il(c, 1, h), l = il(l, 1, h), !i && c[0] === 0 && (c.push(r), l.push(l[0])), o.push(
        new Xi(
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
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = l.name.match(r);
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
    const n = function(u, d, f, g, _) {
      if (f.length !== 0) {
        const m = [], p = [];
        Sh(f, m, p, g), m.length !== 0 && _.push(new u(d, m, p));
      }
    }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const f = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let _ = 0; _ < d[g].morphTargets.length; _++)
                f[d[g].morphTargets[_]] = -1;
          for (const _ in f) {
            const m = [], p = [];
            for (let S = 0; S !== d[g].morphTargets.length; ++S) {
              const v = d[g];
              m.push(v.time), p.push(v.morphTarget === _ ? 1 : 0);
            }
            i.push(new Xi(".morphTargetInfluence[" + _ + "]", m, p));
          }
          c = f.length * o;
        } else {
          const f = ".bones[" + t[u].name + "]";
          n(
            $i,
            f + ".position",
            d,
            "pos",
            i
          ), n(
            ri,
            f + ".quaternion",
            d,
            "rot",
            i
          ), n(
            $i,
            f + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, c, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
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
function K_(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Xi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return $i;
    case "color":
      return Eh;
    case "quaternion":
      return ri;
    case "bool":
    case "boolean":
      return ns;
    case "string":
      return is;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function Z_(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = K_(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    Sh(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const qi = {
  enabled: !1,
  files: {},
  add: function(s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function(s) {
    if (this.enabled !== !1)
      return this.files[s];
  },
  remove: function(s) {
    delete this.files[s];
  },
  clear: function() {
    this.files = {};
  }
};
class J_ {
  constructor(e, t, n) {
    const i = this;
    let r = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, r === !1 && i.onStart !== void 0 && i.onStart(h, o, a), r = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad());
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
        const f = l[u], g = l[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return g;
      }
      return null;
    };
  }
}
const Q_ = /* @__PURE__ */ new J_();
class ai {
  constructor(e) {
    this.manager = e !== void 0 ? e : Q_, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
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
ai.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const dn = {};
class ev extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class aa extends ai {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = qi.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (dn[e] !== void 0) {
      dn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    dn[e] = [], dn[e].push({
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
        const h = dn[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), f = d ? parseInt(d) : 0, g = f !== 0;
        let _ = 0;
        const m = new ReadableStream({
          start(p) {
            S();
            function S() {
              u.read().then(({ done: v, value: y }) => {
                if (v)
                  p.close();
                else {
                  _ += y.byteLength;
                  const w = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: f });
                  for (let L = 0, A = h.length; L < A; L++) {
                    const N = h[L];
                    N.onProgress && N.onProgress(w);
                  }
                  p.enqueue(y), S();
                }
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new ev(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
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
            return l.arrayBuffer().then((g) => f.decode(g));
          }
      }
    }).then((l) => {
      qi.add(e, l);
      const h = dn[e];
      delete dn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(l);
      }
    }).catch((l) => {
      const h = dn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete dn[e];
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
class tv extends ai {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = qi.get(e);
    if (o !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    const a = Ss("img");
    function c() {
      h(), qi.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class nv extends ai {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new mt(), o = new tv(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class Ar extends qe {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ne(e), this.intensity = t;
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
const fo = /* @__PURE__ */ new Be(), sl = /* @__PURE__ */ new P(), rl = /* @__PURE__ */ new P();
class ca {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ce(512, 512), this.map = null, this.mapPass = null, this.matrix = new Be(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ko(), this._frameExtents = new ce(1, 1), this._viewportCount = 1, this._viewports = [
      new Qe(0, 0, 1, 1)
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
    sl.setFromMatrixPosition(e.matrixWorld), t.position.copy(sl), rl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(rl), t.updateMatrixWorld(), fo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(fo), n.set(
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
    ), n.multiply(fo);
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
class iv extends ca {
  constructor() {
    super(new Et(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Vi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class sv extends Ar {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(qe.DEFAULT_UP), this.updateMatrix(), this.target = new qe(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new iv();
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
const ol = /* @__PURE__ */ new Be(), us = /* @__PURE__ */ new P(), po = /* @__PURE__ */ new P();
class rv extends ca {
  constructor() {
    super(new Et(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ce(4, 2), this._viewportCount = 6, this._viewports = [
      new Qe(2, 1, 1, 1),
      new Qe(0, 1, 1, 1),
      new Qe(3, 1, 1, 1),
      new Qe(1, 1, 1, 1),
      new Qe(3, 0, 1, 1),
      new Qe(1, 0, 1, 1)
    ], this._cubeDirections = [
      new P(1, 0, 0),
      new P(-1, 0, 0),
      new P(0, 0, 1),
      new P(0, 0, -1),
      new P(0, 1, 0),
      new P(0, -1, 0)
    ], this._cubeUps = [
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 0, 1),
      new P(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), us.setFromMatrixPosition(e.matrixWorld), n.position.copy(us), po.copy(n.position), po.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(po), n.updateMatrixWorld(), i.makeTranslation(-us.x, -us.y, -us.z), ol.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ol);
  }
}
class ov extends Ar {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new rv();
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
class av extends ca {
  constructor() {
    super(new Jo(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class cv extends Ar {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(qe.DEFAULT_UP), this.updateMatrix(), this.target = new qe(), this.shadow = new av();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class lv extends Ar {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class zo {
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
class hv extends ai {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = qi.get(e);
    if (o !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      qi.add(e, c), t && t(c), r.manager.itemEnd(e);
    }).catch(function(c) {
      i && i(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }), r.manager.itemStart(e);
  }
}
const la = "\\[\\]\\.:\\/", uv = new RegExp("[" + la + "]", "g"), ha = "[^" + la + "]", dv = "[^" + la.replace("\\.", "") + "]", fv = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", ha), pv = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", dv), mv = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ha), gv = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ha), _v = new RegExp(
  "^" + fv + pv + mv + gv + "$"
), vv = ["material", "materials", "bones", "map"];
class xv {
  constructor(e, t, n) {
    const i = n || Ke.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
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
class Ke {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Ke.parseTrackName(t), this.node = Ke.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Ke.Composite(e, t, n) : new Ke(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(uv, "");
  }
  static parseTrackName(e) {
    const t = _v.exec(e);
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
      const r = n.nodeName.substring(i + 1);
      vv.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
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
      const n = function(r) {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
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
    for (let i = 0, r = n.length; i !== r; ++i)
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
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
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
    let r = t.propertyIndex;
    if (e || (e = Ke.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else
      o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Ke.Composite = xv;
Ke.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Ke.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Ke.prototype.GetterByBindingType = [
  Ke.prototype._getValue_direct,
  Ke.prototype._getValue_array,
  Ke.prototype._getValue_arrayElement,
  Ke.prototype._getValue_toArray
];
Ke.prototype.SetterByBindingTypeAndVersioning = [
  [
    Ke.prototype._setValue_direct,
    Ke.prototype._setValue_direct_setNeedsUpdate,
    Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    Ke.prototype._setValue_array,
    Ke.prototype._setValue_array_setNeedsUpdate,
    Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    Ke.prototype._setValue_arrayElement,
    Ke.prototype._setValue_arrayElement_setNeedsUpdate,
    Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    Ke.prototype._setValue_fromArray,
    Ke.prototype._setValue_fromArray_setNeedsUpdate,
    Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class yv {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Qi(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Yo(), this.params = {
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
    return Ho(e, this, n, t), n.sort(al), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, r = e.length; i < r; i++)
      Ho(e[i], this, n, t);
    return n.sort(al), n;
  }
}
function al(s, e) {
  return s.distance - e.distance;
}
function Ho(s, e, t, n) {
  if (s.layers.test(e.layers) && s.raycast(e, t), n === !0) {
    const i = s.children;
    for (let r = 0, o = i.length; r < o; r++)
      Ho(i[r], e, t, !0);
  }
}
class cl {
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
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(lt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Mv {
  constructor() {
    this.type = "ShapePath", this.color = new Ne(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new Oo(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, o) {
    return this.currentPath.bezierCurveTo(e, t, n, i, r, o), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(p) {
      const S = [];
      for (let v = 0, y = p.length; v < y; v++) {
        const w = p[v], L = new fr();
        L.curves = w.curves, S.push(L);
      }
      return S;
    }
    function n(p, S) {
      const v = S.length;
      let y = !1;
      for (let w = v - 1, L = 0; L < v; w = L++) {
        let A = S[w], N = S[L], M = N.x - A.x, b = N.y - A.y;
        if (Math.abs(b) > Number.EPSILON) {
          if (b < 0 && (A = S[L], M = -M, N = S[w], b = -b), p.y < A.y || p.y > N.y)
            continue;
          if (p.y === A.y) {
            if (p.x === A.x)
              return !0;
          } else {
            const q = b * (p.x - A.x) - M * (p.y - A.y);
            if (q === 0)
              return !0;
            if (q < 0)
              continue;
            y = !y;
          }
        } else {
          if (p.y !== A.y)
            continue;
          if (N.x <= p.x && p.x <= A.x || A.x <= p.x && p.x <= N.x)
            return !0;
        }
      }
      return y;
    }
    const i = Ni.isClockWise, r = this.subPaths;
    if (r.length === 0)
      return [];
    let o, a, c;
    const l = [];
    if (r.length === 1)
      return a = r[0], c = new fr(), c.curves = a.curves, l.push(c), l;
    let h = !i(r[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let f = [], g = 0, _;
    d[g] = void 0, f[g] = [];
    for (let p = 0, S = r.length; p < S; p++)
      a = r[p], _ = a.getPoints(), o = i(_), o = e ? !o : o, o ? (!h && d[g] && g++, d[g] = { s: new fr(), p: _ }, d[g].s.curves = a.curves, h && g++, f[g] = []) : f[g].push({ h: a, p: _[0] });
    if (!d[0])
      return t(r);
    if (d.length > 1) {
      let p = !1, S = 0;
      for (let v = 0, y = d.length; v < y; v++)
        u[v] = [];
      for (let v = 0, y = d.length; v < y; v++) {
        const w = f[v];
        for (let L = 0; L < w.length; L++) {
          const A = w[L];
          let N = !0;
          for (let M = 0; M < d.length; M++)
            n(A.p, d[M].p) && (v !== M && S++, N ? (N = !1, u[M].push(A)) : p = !0);
          N && u[v].push(A);
        }
      }
      S > 0 && p === !1 && (f = u);
    }
    let m;
    for (let p = 0, S = d.length; p < S; p++) {
      c = d[p].s, l.push(c), m = f[p];
      for (let v = 0, y = m.length; v < y; v++)
        c.holes.push(m[v].h);
    }
    return l;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: $o
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = $o);
const ll = { type: "change" }, mo = { type: "start" }, hl = { type: "end" }, hr = new Qi(), ul = new Cn(), Sv = Math.cos(70 * jl.DEG2RAD);
class Ev extends oi {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: pn.ROTATE, MIDDLE: pn.DOLLY, RIGHT: pn.PAN }, this.touches = { ONE: Rn.ROTATE, TWO: Rn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(C) {
      C.addEventListener("keydown", x), this._domElementKeyEvents = C;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", x), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(ll), n.update(), r = i.NONE;
    }, this.update = function() {
      const C = new P(), Z = new Jt().setFromUnitVectors(e.up, new P(0, 1, 0)), _e = Z.clone().invert(), he = new P(), ge = new Jt(), Ue = new P(), We = 2 * Math.PI;
      return function() {
        const de = n.object.position;
        C.copy(de).sub(n.target), C.applyQuaternion(Z), a.setFromVector3(C), n.autoRotate && r === i.NONE && q(M()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let z = n.minAzimuthAngle, ie = n.maxAzimuthAngle;
        isFinite(z) && isFinite(ie) && (z < -Math.PI ? z += We : z > Math.PI && (z -= We), ie < -Math.PI ? ie += We : ie > Math.PI && (ie -= We), z <= ie ? a.theta = Math.max(z, Math.min(ie, a.theta)) : a.theta = a.theta > (z + ie) / 2 ? Math.max(z, a.theta) : Math.min(ie, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.zoomToCursor && L || n.object.isOrthographicCamera ? a.radius = te(a.radius) : a.radius = te(a.radius * l), C.setFromSpherical(a), C.applyQuaternion(_e), de.copy(n.target).add(C), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0));
        let fe = !1;
        if (n.zoomToCursor && L) {
          let ze = null;
          if (n.object.isPerspectiveCamera) {
            const Ye = C.length();
            ze = te(Ye * l);
            const et = Ye - ze;
            n.object.position.addScaledVector(y, et), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const Ye = new P(w.x, w.y, 0);
            Ye.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), fe = !0;
            const et = new P(w.x, w.y, 0);
            et.unproject(n.object), n.object.position.sub(et).add(Ye), n.object.updateMatrixWorld(), ze = C.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          ze !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(ze).add(n.object.position) : (hr.origin.copy(n.object.position), hr.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(hr.direction)) < Sv ? e.lookAt(n.target) : (ul.setFromNormalAndCoplanarPoint(n.object.up, n.target), hr.intersectPlane(ul, n.target))));
        } else
          n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), fe = !0);
        return l = 1, L = !1, fe || he.distanceToSquared(n.object.position) > o || 8 * (1 - ge.dot(n.object.quaternion)) > o || Ue.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(ll), he.copy(n.object.position), ge.copy(n.object.quaternion), Ue.copy(n.target), fe = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", ee), n.domElement.removeEventListener("pointerdown", xe), n.domElement.removeEventListener("pointercancel", Ce), n.domElement.removeEventListener("wheel", T), n.domElement.removeEventListener("pointermove", ye), n.domElement.removeEventListener("pointerup", Ce), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", x), n._domElementKeyEvents = null);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let r = i.NONE;
    const o = 1e-6, a = new cl(), c = new cl();
    let l = 1;
    const h = new P(), u = new ce(), d = new ce(), f = new ce(), g = new ce(), _ = new ce(), m = new ce(), p = new ce(), S = new ce(), v = new ce(), y = new P(), w = new ce();
    let L = !1;
    const A = [], N = {};
    function M() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function b() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function q(C) {
      c.theta -= C;
    }
    function ne(C) {
      c.phi -= C;
    }
    const B = function() {
      const C = new P();
      return function(_e, he) {
        C.setFromMatrixColumn(he, 0), C.multiplyScalar(-_e), h.add(C);
      };
    }(), k = function() {
      const C = new P();
      return function(_e, he) {
        n.screenSpacePanning === !0 ? C.setFromMatrixColumn(he, 1) : (C.setFromMatrixColumn(he, 0), C.crossVectors(n.object.up, C)), C.multiplyScalar(_e), h.add(C);
      };
    }(), G = function() {
      const C = new P();
      return function(_e, he) {
        const ge = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Ue = n.object.position;
          C.copy(Ue).sub(n.target);
          let We = C.length();
          We *= Math.tan(n.object.fov / 2 * Math.PI / 180), B(2 * _e * We / ge.clientHeight, n.object.matrix), k(2 * he * We / ge.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (B(_e * (n.object.right - n.object.left) / n.object.zoom / ge.clientWidth, n.object.matrix), k(he * (n.object.top - n.object.bottom) / n.object.zoom / ge.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function J(C) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= C : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function $(C) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= C : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function Y(C) {
      if (!n.zoomToCursor)
        return;
      L = !0;
      const Z = n.domElement.getBoundingClientRect(), _e = C.clientX - Z.left, he = C.clientY - Z.top, ge = Z.width, Ue = Z.height;
      w.x = _e / ge * 2 - 1, w.y = -(he / Ue) * 2 + 1, y.set(w.x, w.y, 1).unproject(e).sub(e.position).normalize();
    }
    function te(C) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, C));
    }
    function K(C) {
      u.set(C.clientX, C.clientY);
    }
    function O(C) {
      Y(C), p.set(C.clientX, C.clientY);
    }
    function V(C) {
      g.set(C.clientX, C.clientY);
    }
    function pe(C) {
      d.set(C.clientX, C.clientY), f.subVectors(d, u).multiplyScalar(n.rotateSpeed);
      const Z = n.domElement;
      q(2 * Math.PI * f.x / Z.clientHeight), ne(2 * Math.PI * f.y / Z.clientHeight), u.copy(d), n.update();
    }
    function me(C) {
      S.set(C.clientX, C.clientY), v.subVectors(S, p), v.y > 0 ? J(b()) : v.y < 0 && $(b()), p.copy(S), n.update();
    }
    function ve(C) {
      _.set(C.clientX, C.clientY), m.subVectors(_, g).multiplyScalar(n.panSpeed), G(m.x, m.y), g.copy(_), n.update();
    }
    function Ae(C) {
      Y(C), C.deltaY < 0 ? $(b()) : C.deltaY > 0 && J(b()), n.update();
    }
    function be(C) {
      let Z = !1;
      switch (C.code) {
        case n.keys.UP:
          C.ctrlKey || C.metaKey || C.shiftKey ? ne(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(0, n.keyPanSpeed), Z = !0;
          break;
        case n.keys.BOTTOM:
          C.ctrlKey || C.metaKey || C.shiftKey ? ne(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(0, -n.keyPanSpeed), Z = !0;
          break;
        case n.keys.LEFT:
          C.ctrlKey || C.metaKey || C.shiftKey ? q(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(n.keyPanSpeed, 0), Z = !0;
          break;
        case n.keys.RIGHT:
          C.ctrlKey || C.metaKey || C.shiftKey ? q(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(-n.keyPanSpeed, 0), Z = !0;
          break;
      }
      Z && (C.preventDefault(), n.update());
    }
    function Te() {
      if (A.length === 1)
        u.set(A[0].pageX, A[0].pageY);
      else {
        const C = 0.5 * (A[0].pageX + A[1].pageX), Z = 0.5 * (A[0].pageY + A[1].pageY);
        u.set(C, Z);
      }
    }
    function $e() {
      if (A.length === 1)
        g.set(A[0].pageX, A[0].pageY);
      else {
        const C = 0.5 * (A[0].pageX + A[1].pageX), Z = 0.5 * (A[0].pageY + A[1].pageY);
        g.set(C, Z);
      }
    }
    function Je() {
      const C = A[0].pageX - A[1].pageX, Z = A[0].pageY - A[1].pageY, _e = Math.sqrt(C * C + Z * Z);
      p.set(0, _e);
    }
    function we() {
      n.enableZoom && Je(), n.enablePan && $e();
    }
    function R() {
      n.enableZoom && Je(), n.enableRotate && Te();
    }
    function le(C) {
      if (A.length == 1)
        d.set(C.pageX, C.pageY);
      else {
        const _e = H(C), he = 0.5 * (C.pageX + _e.x), ge = 0.5 * (C.pageY + _e.y);
        d.set(he, ge);
      }
      f.subVectors(d, u).multiplyScalar(n.rotateSpeed);
      const Z = n.domElement;
      q(2 * Math.PI * f.x / Z.clientHeight), ne(2 * Math.PI * f.y / Z.clientHeight), u.copy(d);
    }
    function j(C) {
      if (A.length === 1)
        _.set(C.pageX, C.pageY);
      else {
        const Z = H(C), _e = 0.5 * (C.pageX + Z.x), he = 0.5 * (C.pageY + Z.y);
        _.set(_e, he);
      }
      m.subVectors(_, g).multiplyScalar(n.panSpeed), G(m.x, m.y), g.copy(_);
    }
    function re(C) {
      const Z = H(C), _e = C.pageX - Z.x, he = C.pageY - Z.y, ge = Math.sqrt(_e * _e + he * he);
      S.set(0, ge), v.set(0, Math.pow(S.y / p.y, n.zoomSpeed)), J(v.y), p.copy(S);
    }
    function Q(C) {
      n.enableZoom && re(C), n.enablePan && j(C);
    }
    function Ee(C) {
      n.enableZoom && re(C), n.enableRotate && le(C);
    }
    function xe(C) {
      n.enabled !== !1 && (A.length === 0 && (n.domElement.setPointerCapture(C.pointerId), n.domElement.addEventListener("pointermove", ye), n.domElement.addEventListener("pointerup", Ce)), oe(C), C.pointerType === "touch" ? F(C) : ke(C));
    }
    function ye(C) {
      n.enabled !== !1 && (C.pointerType === "touch" ? se(C) : nt(C));
    }
    function Ce(C) {
      Se(C), A.length === 0 && (n.domElement.releasePointerCapture(C.pointerId), n.domElement.removeEventListener("pointermove", ye), n.domElement.removeEventListener("pointerup", Ce)), n.dispatchEvent(hl), r = i.NONE;
    }
    function ke(C) {
      let Z;
      switch (C.button) {
        case 0:
          Z = n.mouseButtons.LEFT;
          break;
        case 1:
          Z = n.mouseButtons.MIDDLE;
          break;
        case 2:
          Z = n.mouseButtons.RIGHT;
          break;
        default:
          Z = -1;
      }
      switch (Z) {
        case pn.DOLLY:
          if (n.enableZoom === !1)
            return;
          O(C), r = i.DOLLY;
          break;
        case pn.ROTATE:
          if (C.ctrlKey || C.metaKey || C.shiftKey) {
            if (n.enablePan === !1)
              return;
            V(C), r = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            K(C), r = i.ROTATE;
          }
          break;
        case pn.PAN:
          if (C.ctrlKey || C.metaKey || C.shiftKey) {
            if (n.enableRotate === !1)
              return;
            K(C), r = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            V(C), r = i.PAN;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(mo);
    }
    function nt(C) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          pe(C);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          me(C);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          ve(C);
          break;
      }
    }
    function T(C) {
      n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (C.preventDefault(), n.dispatchEvent(mo), Ae(C), n.dispatchEvent(hl));
    }
    function x(C) {
      n.enabled === !1 || n.enablePan === !1 || be(C);
    }
    function F(C) {
      switch (ae(C), A.length) {
        case 1:
          switch (n.touches.ONE) {
            case Rn.ROTATE:
              if (n.enableRotate === !1)
                return;
              Te(), r = i.TOUCH_ROTATE;
              break;
            case Rn.PAN:
              if (n.enablePan === !1)
                return;
              $e(), r = i.TOUCH_PAN;
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Rn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              we(), r = i.TOUCH_DOLLY_PAN;
              break;
            case Rn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              R(), r = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(mo);
    }
    function se(C) {
      switch (ae(C), r) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          le(C), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          j(C), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          Q(C), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          Ee(C), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function ee(C) {
      n.enabled !== !1 && C.preventDefault();
    }
    function oe(C) {
      A.push(C);
    }
    function Se(C) {
      delete N[C.pointerId];
      for (let Z = 0; Z < A.length; Z++)
        if (A[Z].pointerId == C.pointerId) {
          A.splice(Z, 1);
          return;
        }
    }
    function ae(C) {
      let Z = N[C.pointerId];
      Z === void 0 && (Z = new ce(), N[C.pointerId] = Z), Z.set(C.pageX, C.pageY);
    }
    function H(C) {
      const Z = C.pointerId === A[0].pointerId ? A[1] : A[0];
      return N[Z.pointerId];
    }
    n.domElement.addEventListener("contextmenu", ee), n.domElement.addEventListener("pointerdown", xe), n.domElement.addEventListener("pointercancel", Ce), n.domElement.addEventListener("wheel", T, { passive: !1 }), this.update();
  }
}
class Tv extends Ev {
  constructor(e, t) {
    super(e, t), this.screenSpacePanning = !1, this.mouseButtons = { LEFT: pn.PAN, MIDDLE: pn.DOLLY, RIGHT: pn.ROTATE }, this.touches = { ONE: Rn.PAN, TWO: Rn.DOLLY_ROTATE };
  }
}
let Qn, vr, St, ko;
function Av() {
  const s = document.createElement("div");
  document.body.appendChild(s), vr = new t_(), Qn = new Et(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    20
  ), St = new hh({
    antialias: !0,
    alpha: !0
  }), St.useLegacyLights = !1, St.outputColorSpace = Pe, St.toneMapping = Ul, St.toneMappingExposure = 1, St.shadowMap.enabled = !0, St.shadowMap.type = Ll, St.setPixelRatio(window.devicePixelRatio), St.setSize(window.innerWidth, window.innerHeight), St.xr.enabled = !0, s.appendChild(St.domElement), ko = new Tv(Qn, St.domElement), Qn.position.set(0, 1.75, 1.75), ko.update(), window.addEventListener("resize", bv);
}
function bv() {
  Qn.aspect = window.innerWidth / window.innerHeight, Qn.updateProjectionMatrix(), St.setSize(window.innerWidth, window.innerHeight);
}
function wv() {
  St.setAnimationLoop(Rv);
}
function Rv() {
  ko.update(), St.render(vr, Qn);
}
class Cv {
  constructor(e) {
    this.registeredListeners = /* @__PURE__ */ new Map(), this.scene = e;
    const t = new yv(), n = new ce(), i = (r) => {
      n.x = r.clientX / window.innerWidth * 2 - 1, n.y = -(r.clientY / window.innerHeight) * 2 + 1, t.setFromCamera(n, Qn);
      const o = this.registeredListeners.keys();
      return t.intersectObjects(Array.from(o));
    };
    window.addEventListener("click", (r) => {
      const o = i(r);
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
  registerInteractiveObject(e, t) {
    this.registeredListeners.set(e, t);
  }
}
let go;
function ei() {
  return vr || (Av(), wv()), go || (go = new Cv(vr)), go;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = window, ua = pr.ShadowRoot && (pr.ShadyCSS === void 0 || pr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Th = Symbol(), dl = /* @__PURE__ */ new WeakMap();
class Lv {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Th)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ua && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = dl.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && dl.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}
const Pv = (s) => new Lv(typeof s == "string" ? s : s + "", void 0, Th), Iv = (s, e) => {
  ua ? s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach((t) => {
    const n = document.createElement("style"), i = pr.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, s.appendChild(n);
  });
}, fl = ua ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules)
    t += n.cssText;
  return Pv(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _o;
const xr = window, pl = xr.trustedTypes, Dv = pl ? pl.emptyScript : "", ml = xr.reactiveElementPolyfillSupport, Go = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? Dv : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, e) {
  let t = s;
  switch (e) {
    case Boolean:
      t = s !== null;
      break;
    case Number:
      t = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(s);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ah = (s, e) => e !== s && (e == e || s == s), vo = { attribute: !0, type: String, converter: Go, reflect: !1, hasChanged: Ah };
class Li extends HTMLElement {
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
  static createProperty(e, t = vo) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const n = typeof e == "symbol" ? Symbol() : "__" + e, i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && Object.defineProperty(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    return { get() {
      return this[t];
    }, set(i) {
      const r = this[e];
      this[t] = i, this.requestUpdate(e, r, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || vo;
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
        t.unshift(fl(i));
    } else
      e !== void 0 && t.push(fl(e));
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
    return Iv(t, this.constructor.elementStyles), t;
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
  _$EO(e, t, n = vo) {
    var i;
    const r = this.constructor._$Ep(e, n);
    if (r !== void 0 && n.reflect === !0) {
      const o = (((i = n.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? n.converter : Go).toAttribute(t, n.type);
      this._$El = e, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$El = null;
    }
  }
  _$AK(e, t) {
    var n;
    const i = this.constructor, r = i._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const o = i.getPropertyOptions(r), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0 ? o.converter : Go;
      this._$El = r, this[r] = a.fromAttribute(t, o.type), this._$El = null;
    }
  }
  requestUpdate(e, t, n) {
    let i = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || Ah)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, n))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, r) => this[r] = i), this._$Ei = void 0);
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n), t ? (this.willUpdate(n), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
        var r;
        return (r = i.hostUpdate) === null || r === void 0 ? void 0 : r.call(i);
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
Li.finalized = !0, Li.elementProperties = /* @__PURE__ */ new Map(), Li.elementStyles = [], Li.shadowRootOptions = { mode: "open" }, ml == null || ml({ ReactiveElement: Li }), ((_o = xr.reactiveElementVersions) !== null && _o !== void 0 ? _o : xr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var xo;
const yr = window, ji = yr.trustedTypes, gl = ji ? ji.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, Pn = `lit$${(Math.random() + "").slice(9)}$`, bh = "?" + Pn, Uv = `<${bh}>`, Yi = document, bs = (s = "") => Yi.createComment(s), ws = (s) => s === null || typeof s != "object" && typeof s != "function", wh = Array.isArray, Nv = (s) => wh(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", ds = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _l = /-->/g, vl = />/g, Vn = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), xl = /'/g, yl = /"/g, Rh = /^(?:script|style|textarea|title)$/i, Ov = (s) => (e, ...t) => ({ _$litType$: s, strings: e, values: t }), ci = Ov(1), Ki = Symbol.for("lit-noChange"), pt = Symbol.for("lit-nothing"), Ml = /* @__PURE__ */ new WeakMap(), Oi = Yi.createTreeWalker(Yi, 129, null, !1), Fv = (s, e) => {
  const t = s.length - 1, n = [];
  let i, r = e === 2 ? "<svg>" : "", o = ds;
  for (let c = 0; c < t; c++) {
    const l = s[c];
    let h, u, d = -1, f = 0;
    for (; f < l.length && (o.lastIndex = f, u = o.exec(l), u !== null); )
      f = o.lastIndex, o === ds ? u[1] === "!--" ? o = _l : u[1] !== void 0 ? o = vl : u[2] !== void 0 ? (Rh.test(u[2]) && (i = RegExp("</" + u[2], "g")), o = Vn) : u[3] !== void 0 && (o = Vn) : o === Vn ? u[0] === ">" ? (o = i != null ? i : ds, d = -1) : u[1] === void 0 ? d = -2 : (d = o.lastIndex - u[2].length, h = u[1], o = u[3] === void 0 ? Vn : u[3] === '"' ? yl : xl) : o === yl || o === xl ? o = Vn : o === _l || o === vl ? o = ds : (o = Vn, i = void 0);
    const g = o === Vn && s[c + 1].startsWith("/>") ? " " : "";
    r += o === ds ? l + Uv : d >= 0 ? (n.push(h), l.slice(0, d) + "$lit$" + l.slice(d) + Pn + g) : l + Pn + (d === -2 ? (n.push(void 0), c) : g);
  }
  const a = r + (s[t] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(s) || !s.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [gl !== void 0 ? gl.createHTML(a) : a, n];
};
class Rs {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let r = 0, o = 0;
    const a = e.length - 1, c = this.parts, [l, h] = Fv(e, t);
    if (this.el = Rs.createElement(l, n), Oi.currentNode = this.el.content, t === 2) {
      const u = this.el.content, d = u.firstChild;
      d.remove(), u.append(...d.childNodes);
    }
    for (; (i = Oi.nextNode()) !== null && c.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const u = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(Pn)) {
              const f = h[o++];
              if (u.push(d), f !== void 0) {
                const g = i.getAttribute(f.toLowerCase() + "$lit$").split(Pn), _ = /([.?@])?(.*)/.exec(f);
                c.push({ type: 1, index: r, name: _[2], strings: g, ctor: _[1] === "." ? zv : _[1] === "?" ? kv : _[1] === "@" ? Gv : br });
              } else
                c.push({ type: 6, index: r });
            }
          for (const d of u)
            i.removeAttribute(d);
        }
        if (Rh.test(i.tagName)) {
          const u = i.textContent.split(Pn), d = u.length - 1;
          if (d > 0) {
            i.textContent = ji ? ji.emptyScript : "";
            for (let f = 0; f < d; f++)
              i.append(u[f], bs()), Oi.nextNode(), c.push({ type: 2, index: ++r });
            i.append(u[d], bs());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === bh)
          c.push({ type: 2, index: r });
        else {
          let u = -1;
          for (; (u = i.data.indexOf(Pn, u + 1)) !== -1; )
            c.push({ type: 7, index: r }), u += Pn.length - 1;
        }
      r++;
    }
  }
  static createElement(e, t) {
    const n = Yi.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Zi(s, e, t = s, n) {
  var i, r, o, a;
  if (e === Ki)
    return e;
  let c = n !== void 0 ? (i = t._$Co) === null || i === void 0 ? void 0 : i[n] : t._$Cl;
  const l = ws(e) ? void 0 : e._$litDirective$;
  return (c == null ? void 0 : c.constructor) !== l && ((r = c == null ? void 0 : c._$AO) === null || r === void 0 || r.call(c, !1), l === void 0 ? c = void 0 : (c = new l(s), c._$AT(s, t, n)), n !== void 0 ? ((o = (a = t)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[n] = c : t._$Cl = c), c !== void 0 && (e = Zi(s, c._$AS(s, e.values), c, n)), e;
}
class Bv {
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
    const { el: { content: n }, parts: i } = this._$AD, r = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : Yi).importNode(n, !0);
    Oi.currentNode = r;
    let o = Oi.nextNode(), a = 0, c = 0, l = i[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let h;
        l.type === 2 ? h = new Ds(o, o.nextSibling, this, e) : l.type === 1 ? h = new l.ctor(o, l.name, l.strings, this, e) : l.type === 6 && (h = new Vv(o, this, e)), this.u.push(h), l = i[++c];
      }
      a !== (l == null ? void 0 : l.index) && (o = Oi.nextNode(), a++);
    }
    return r;
  }
  p(e) {
    let t = 0;
    for (const n of this.u)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class Ds {
  constructor(e, t, n, i) {
    var r;
    this.type = 2, this._$AH = pt, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cm = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r;
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
    e = Zi(this, e, t), ws(e) ? e === pt || e == null || e === "" ? (this._$AH !== pt && this._$AR(), this._$AH = pt) : e !== this._$AH && e !== Ki && this.g(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Nv(e) ? this.k(e) : this.g(e);
  }
  O(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  g(e) {
    this._$AH !== pt && ws(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Yi.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var t;
    const { values: n, _$litType$: i } = e, r = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Rs.createElement(i.h, this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === r)
      this._$AH.p(n);
    else {
      const o = new Bv(r, this), a = o.v(this.options);
      o.p(n), this.T(a), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = Ml.get(e.strings);
    return t === void 0 && Ml.set(e.strings, t = new Rs(e)), t;
  }
  k(e) {
    wh(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const r of e)
      i === t.length ? t.push(n = new Ds(this.O(bs()), this.O(bs()), this, this.options)) : n = t[i], n._$AI(r), i++;
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
class br {
  constructor(e, t, n, i, r) {
    this.type = 1, this._$AH = pt, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = r, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = pt;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, n, i) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      e = Zi(this, e, t, 0), o = !ws(e) || e !== this._$AH && e !== Ki, o && (this._$AH = e);
    else {
      const a = e;
      let c, l;
      for (e = r[0], c = 0; c < r.length - 1; c++)
        l = Zi(this, a[n + c], t, c), l === Ki && (l = this._$AH[c]), o || (o = !ws(l) || l !== this._$AH[c]), l === pt ? e = pt : e !== pt && (e += (l != null ? l : "") + r[c + 1]), this._$AH[c] = l;
    }
    o && !i && this.j(e);
  }
  j(e) {
    e === pt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "");
  }
}
class zv extends br {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === pt ? void 0 : e;
  }
}
const Hv = ji ? ji.emptyScript : "";
class kv extends br {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== pt ? this.element.setAttribute(this.name, Hv) : this.element.removeAttribute(this.name);
  }
}
class Gv extends br {
  constructor(e, t, n, i, r) {
    super(e, t, n, i, r), this.type = 5;
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = Zi(this, e, t, 0)) !== null && n !== void 0 ? n : pt) === Ki)
      return;
    const i = this._$AH, r = e === pt && i !== pt || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, o = e !== pt && (i === pt || r);
    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Vv {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Zi(this, e);
  }
}
const Sl = yr.litHtmlPolyfillSupport;
Sl == null || Sl(Rs, Ds), ((xo = yr.litHtmlVersions) !== null && xo !== void 0 ? xo : yr.litHtmlVersions = []).push("2.4.0");
const Wv = (s, e, t) => {
  var n, i;
  const r = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
  let o = r._$litPart$;
  if (o === void 0) {
    const a = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
    r._$litPart$ = o = new Ds(e.insertBefore(bs(), a), a, void 0, t != null ? t : {});
  }
  return o._$AI(s), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var yo, Mo;
class Vt extends Li {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Wv(t, this.renderRoot, this.renderOptions);
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
    return Ki;
  }
}
Vt.finalized = !0, Vt._$litElement$ = !0, (yo = globalThis.litElementHydrateSupport) === null || yo === void 0 || yo.call(globalThis, { LitElement: Vt });
const El = globalThis.litElementPolyfillSupport;
El == null || El({ LitElement: Vt });
((Mo = globalThis.litElementVersions) !== null && Mo !== void 0 ? Mo : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const li = (s) => (e) => typeof e == "function" ? ((t, n) => (customElements.define(t, n), n))(s, e) : ((t, n) => {
  const { kind: i, elements: r } = n;
  return { kind: i, elements: r, finisher(o) {
    customElements.define(t, o);
  } };
})(s, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xv = (s, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(t) {
  t.createProperty(e.key, s);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(t) {
  t.createProperty(e.key, s);
} };
function je(s) {
  return (e, t) => t !== void 0 ? ((n, i, r) => {
    i.constructor.createProperty(r, n);
  })(s, e, t) : Xv(s, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var So;
((So = window.HTMLSlotElement) === null || So === void 0 ? void 0 : So.prototype.assignedElements) != null;
var $v = Object.defineProperty, qv = Object.getOwnPropertyDescriptor, Ch = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? qv(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && $v(e, t, i), i;
};
let Ji = class extends Vt {
  constructor() {
    super(...arguments), this.space = new qe();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), ei().scene.add(this.space);
  }
  render() {
    return ei(), ci``;
  }
};
Ch([
  je({ type: qe })
], Ji.prototype, "space", 2);
Ji = Ch([
  li("mv-space")
], Ji);
function Tl(s, e) {
  if (e === Mu)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === Lo || e === Vl) {
    let t = s.getIndex();
    if (t === null) {
      const o = [], a = s.getAttribute("position");
      if (a !== void 0) {
        for (let c = 0; c < a.count; c++)
          o.push(c);
        s.setIndex(o), t = s.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === Lo)
      for (let o = 1; o <= n; o++)
        i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
    else
      for (let o = 0; o < n; o++)
        o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class jv extends ai {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Qv(t);
    }), this.register(function(t) {
      return new ax(t);
    }), this.register(function(t) {
      return new cx(t);
    }), this.register(function(t) {
      return new lx(t);
    }), this.register(function(t) {
      return new tx(t);
    }), this.register(function(t) {
      return new nx(t);
    }), this.register(function(t) {
      return new ix(t);
    }), this.register(function(t) {
      return new sx(t);
    }), this.register(function(t) {
      return new Jv(t);
    }), this.register(function(t) {
      return new rx(t);
    }), this.register(function(t) {
      return new ex(t);
    }), this.register(function(t) {
      return new ox(t);
    }), this.register(function(t) {
      return new Kv(t);
    }), this.register(function(t) {
      return new hx(t);
    }), this.register(function(t) {
      return new ux(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = zo.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }, c = new aa(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        r.parse(l, o, function(h) {
          t(h), r.manager.itemEnd(e);
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
    let r;
    const o = {}, a = {}, c = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === Lh) {
        try {
          o[Xe.KHR_BINARY_GLTF] = new dx(e);
        } catch (u) {
          i && i(u);
          return;
        }
        r = JSON.parse(o[Xe.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(c.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Ax(r, {
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
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
        switch (u) {
          case Xe.KHR_MATERIALS_UNLIT:
            o[u] = new Zv();
            break;
          case Xe.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new fx(r, this.dracoLoader);
            break;
          case Xe.KHR_TEXTURE_TRANSFORM:
            o[u] = new px();
            break;
          case Xe.KHR_MESH_QUANTIZATION:
            o[u] = new mx();
            break;
          default:
            d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(o), l.setPlugins(a), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function Yv() {
  let s = {};
  return {
    get: function(e) {
      return s[e];
    },
    add: function(e, t) {
      s[e] = t;
    },
    remove: function(e) {
      delete s[e];
    },
    removeAll: function() {
      s = {};
    }
  };
}
const Xe = {
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
class Kv {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i)
      return i;
    const r = t.json, c = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new Ne(16777215);
    c.color !== void 0 && h.fromArray(c.color);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new cv(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new ov(h), l.distance = u;
        break;
      case "spot":
        l = new sv(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Ln(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(c) {
      return n._getNodeRef(t.cache, a, c);
    });
  }
}
class Zv {
  constructor() {
    this.name = Xe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return qn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ne(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.fromArray(o), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, Pe));
    }
    return Promise.all(i);
  }
}
class Jv {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class Qv {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new ce(a, a);
    }
    return Promise.all(r);
  }
}
class ex {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class tx {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new Ne(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Pe)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class nx {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class ix {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ne(a[0], a[1], a[2]), Promise.all(r);
  }
}
class sx {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class rx {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ne(a[0], a[1], a[2]), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Pe)), Promise.all(r);
  }
}
class ox {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class ax {
  constructor(e) {
    this.parser = e, this.name = Xe.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const r = i.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, o);
  }
}
class cx {
  constructor(e) {
    this.parser = e, this.name = Xe.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const o = r.extensions[t], a = i.images[o.source];
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
class lx {
  constructor(e) {
    this.parser = e, this.name = Xe.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const o = r.extensions[t], a = i.images[o.source];
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
class hx {
  constructor(e) {
    this.name = Xe.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
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
class ux {
  constructor(e) {
    this.name = Xe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== Dt.TRIANGLES && l.mode !== Dt.TRIANGLE_STRIP && l.mode !== Dt.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], c = {};
    for (const l in o)
      a.push(this.parser.getDependency("accessor", o[l]).then((h) => (c[l] = h, c[l])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, f = [];
      for (const g of u) {
        const _ = new Be(), m = new P(), p = new Jt(), S = new P(1, 1, 1), v = new c_(g.geometry, g.material, d);
        for (let y = 0; y < d; y++)
          c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, y), c.ROTATION && p.fromBufferAttribute(c.ROTATION, y), c.SCALE && S.fromBufferAttribute(c.SCALE, y), v.setMatrixAt(y, _.compose(m, p, S));
        for (const y in c)
          y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && g.geometry.setAttribute(y, c[y]);
        qe.prototype.copy.call(v, g), this.parser.assignFinalMaterial(v), f.push(v);
      }
      return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
    }));
  }
}
const Lh = "glTF", fs = 12, Al = { JSON: 1313821514, BIN: 5130562 };
class dx {
  constructor(e) {
    this.name = Xe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, fs), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Lh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - fs, r = new DataView(e, fs);
    let o = 0;
    for (; o < i; ) {
      const a = r.getUint32(o, !0);
      o += 4;
      const c = r.getUint32(o, !0);
      if (o += 4, c === Al.JSON) {
        const l = new Uint8Array(e, fs + o, a);
        this.content = n.decode(l);
      } else if (c === Al.BIN) {
        const l = fs + o;
        this.body = e.slice(l, l + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class fx {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Xe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, c = {}, l = {};
    for (const h in o) {
      const u = Vo[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in e.attributes) {
      const u = Vo[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], f = Fi[d.componentType];
        l[u] = f.name, c[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u) {
        i.decodeDracoFile(h, function(d) {
          for (const f in d.attributes) {
            const g = d.attributes[f], _ = c[f];
            _ !== void 0 && (g.normalized = _);
          }
          u(d);
        }, a, l);
      });
    });
  }
}
class px {
  constructor() {
    this.name = Xe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class mx {
  constructor() {
    this.name = Xe.KHR_MESH_QUANTIZATION;
  }
}
class Ph extends Is {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let o = 0; o !== i; o++)
      t[o] = n[r + o];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = a * 2, l = a * 3, h = i - t, u = (n - t) / h, d = u * u, f = d * u, g = e * l, _ = g - l, m = -2 * f + 3 * d, p = f - d, S = 1 - m, v = p - d + u;
    for (let y = 0; y !== a; y++) {
      const w = o[_ + y + a], L = o[_ + y + c] * h, A = o[g + y + a], N = o[g + y] * h;
      r[y] = S * w + v * L + m * A + p * N;
    }
    return r;
  }
}
const gx = new Jt();
class _x extends Ph {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return gx.fromArray(r).normalize().toArray(r), r;
  }
}
const Dt = {
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
}, Fi = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, bl = {
  9728: ft,
  9729: At,
  9984: Co,
  9985: Ol,
  9986: ur,
  9987: ti
}, wl = {
  33071: Ut,
  33648: mr,
  10497: Hi
}, Eo = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Vo = {
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
}, wn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, vx = {
  CUBICSPLINE: void 0,
  LINEAR: Gi,
  STEP: Ms
}, To = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function xx(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Ps({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: _n
  })), s.DefaultMaterial;
}
function Wn(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Ln(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function yx(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (r = !0), n && i && r)
      break;
  }
  if (!n && !i && !r)
    return Promise.resolve(s);
  const o = [], a = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s.attributes.position;
      o.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s.attributes.normal;
      a.push(d);
    }
    if (r) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], u = l[1], d = l[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = !0, s;
  });
}
function Mx(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Sx(s) {
  let e;
  const t = s.extensions && s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ao(t.attributes) : e = s.indices + ":" + Ao(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + Ao(s.targets[n]);
  return e;
}
function Ao(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function Wo(s) {
  switch (s) {
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
function Ex(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Tx = new Be();
class Ax {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Yv(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, r = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new nv(this.options.manager) : this.textureLoader = new hv(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new aa(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
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
      Wn(r, a, i), Ln(a, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i].joints;
      for (let a = 0, c = o.length; a < c; a++)
        e[o[a]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
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
    const i = n.clone(), r = (o, a) => {
      const c = this.associations.get(o);
      c != null && this.associations.set(a, c);
      for (const [l, h] of o.children.entries())
        r(h, a.children[l]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
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
      const r = e(t[i]);
      r && n.push(r);
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
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
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
      t = Promise.all(i.map(function(r, o) {
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
      return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, o) {
      n.load(zo.resolveURL(t.uri, i.path), r, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = Eo[i.type], a = Fi[i.componentType], c = i.normalized === !0, l = new a(i.count * o);
      return Promise.resolve(new Tt(l, o, c));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], c = Eo[i.type], l = Fi[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, m;
      if (f && f !== u) {
        const p = Math.floor(d / f), S = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let v = t.cache.get(S);
        v || (_ = new l(a, p * f, i.count * f / h), v = new n_(_, f / h), t.cache.add(S, v)), m = new ea(v, c, d % f / h, g);
      } else
        a === null ? _ = new l(i.count * c) : _ = new l(a, d, i.count * c), m = new Tt(_, c, g);
      if (i.sparse !== void 0) {
        const p = Eo.SCALAR, S = Fi[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, y = i.sparse.values.byteOffset || 0, w = new S(o[1], v, i.sparse.count * p), L = new l(o[2], y, i.sparse.count * c);
        a !== null && (m = new Tt(m.array.slice(), m.itemSize, m.normalized));
        for (let A = 0, N = w.length; A < N; A++) {
          const M = w[A];
          if (m.setX(M, L[A * c]), c >= 2 && m.setY(M, L[A * c + 1]), c >= 3 && m.setZ(M, L[A * c + 2]), c >= 4 && m.setW(M, L[A * c + 3]), c >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return m;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r];
    let a = this.textureLoader;
    if (o.uri) {
      const c = n.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, o = r.textures[e], a = r.images[t], c = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri);
      const d = (r.samplers || {})[o.sampler] || {};
      return h.magFilter = bl[d.magFilter] || At, h.minFilter = bl[d.minFilter] || ti, h.wrapS = wl[d.wrapS] || Hi, h.wrapT = wl[d.wrapT] || Hi, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
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
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const m = new mt(_);
          m.needsUpdate = !0, d(m);
        }), t.load(zo.resolveURL(u, r.path), g, void 0, f);
      });
    }).then(function(u) {
      return l === !0 && a.revokeObjectURL(c), u.userData.mimeType = o.mimeType || Ex(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o)
        return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[Xe.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Xe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const c = r.associations.get(o);
          o = r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, c);
        }
      }
      return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new fh(), Kt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new dh(), Kt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(a, c)), n = c;
    }
    if (i || r || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let c = this.cache.get(a);
      c || (c = n.clone(), r && (c.vertexColors = !0), o && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return Ps;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let o;
    const a = {}, c = r.extensions || {}, l = [];
    if (c[Xe.KHR_MATERIALS_UNLIT]) {
      const u = i[Xe.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), l.push(u.extendParams(a, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (a.color = new Ne(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, Pe)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = jt);
    const h = r.alphaMode || To.OPAQUE;
    if (h === To.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === To.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== qn && (l.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ce(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return r.occlusionTexture !== void 0 && o !== qn && (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== qn && (a.emissive = new Ne().fromArray(r.emissiveFactor)), r.emissiveTexture !== void 0 && o !== qn && l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Pe)), Promise.all(l).then(function() {
      const u = new o(a);
      return r.name && (u.name = r.name), Ln(u, r), t.associations.set(u, { materials: e }), r.extensions && Wn(i, u, r), u;
    });
  }
  createUniqueName(e) {
    const t = Ke.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(c) {
        return Rl(c, a, t);
      });
    }
    const o = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = Sx(l), u = i[h];
      if (u)
        o.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION] ? d = r(l) : d = Rl(new Xt(), l, t), i[h] = { primitive: l, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = [];
    for (let c = 0, l = o.length; c < l; c++) {
      const h = o[c].material === void 0 ? xx(this.cache) : this.getDependency("material", o[c].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let f = 0, g = h.length; f < g; f++) {
        const _ = h[f], m = o[f];
        let p;
        const S = l[f];
        if (m.mode === Dt.TRIANGLES || m.mode === Dt.TRIANGLE_STRIP || m.mode === Dt.TRIANGLE_FAN || m.mode === void 0)
          p = r.isSkinnedMesh === !0 ? new s_(_, S) : new bt(_, S), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), m.mode === Dt.TRIANGLE_STRIP ? p.geometry = Tl(p.geometry, Vl) : m.mode === Dt.TRIANGLE_FAN && (p.geometry = Tl(p.geometry, Lo));
        else if (m.mode === Dt.LINES)
          p = new l_(_, S);
        else if (m.mode === Dt.LINE_STRIP)
          p = new na(_, S);
        else if (m.mode === Dt.LINE_LOOP)
          p = new h_(_, S);
        else if (m.mode === Dt.POINTS)
          p = new u_(_, S);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && Mx(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), Ln(p, r), m.extensions && Wn(i, p, m), t.assignFinalMaterial(p), u.push(p);
      }
      for (let f = 0, g = u.length; f < g; f++)
        t.associations.set(u[f], {
          meshes: e,
          primitives: f
        });
      if (u.length === 1)
        return r.extensions && Wn(i, u[0], r), u[0];
      const d = new jn();
      r.extensions && Wn(i, d, r), t.associations.set(d, { meshes: e });
      for (let f = 0, g = u.length; f < g; f++)
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
    return n.type === "perspective" ? t = new Et(jl.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Jo(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Ln(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), o = i, a = [], c = [];
      for (let l = 0, h = o.length; l < h; l++) {
        const u = o[l];
        if (u) {
          a.push(u);
          const d = new Be();
          r !== null && d.fromArray(r.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new ta(a, c);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], c = [], l = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const f = i.channels[u], g = i.samplers[f.sampler], _ = f.target, m = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, S = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", p)), c.push(this.getDependency("accessor", S)), l.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(u) {
      const d = u[0], f = u[1], g = u[2], _ = u[3], m = u[4], p = [];
      for (let S = 0, v = d.length; S < v; S++) {
        const y = d[S], w = f[S], L = g[S], A = _[S], N = m[S];
        if (y === void 0)
          continue;
        y.updateMatrix && y.updateMatrix();
        const M = n._createAnimationTracks(y, w, L, A, N);
        if (M)
          for (let b = 0; b < M.length; b++)
            p.push(M[b]);
      }
      return new Y_(r, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const o = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (!!a.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            a.morphTargetInfluences[c] = i.weights[c];
      }), o;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let l = 0, h = a.length; l < h; l++)
      o.push(n.getDependency("node", a[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(o),
      c
    ]).then(function(l) {
      const h = l[0], u = l[1], d = l[2];
      d !== null && h.traverse(function(f) {
        !f.isSkinnedMesh || f.bind(d, Tx);
      });
      for (let f = 0, g = u.length; f < g; f++)
        h.add(u[f]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && a.push(c), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, r.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      a.push(l);
    }), this.nodeCache[e] = Promise.all(a).then(function(l) {
      let h;
      if (r.isBone === !0 ? h = new uh() : l.length > 1 ? h = new jn() : l.length === 1 ? h = l[0] : h = new qe(), h !== l[0])
        for (let u = 0, d = l.length; u < d; u++)
          h.add(l[u]);
      if (r.name && (h.userData.name = r.name, h.name = o), Ln(h, r), r.extensions && Wn(n, h, r), r.matrix !== void 0) {
        const u = new Be();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else
        r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new jn();
    n.name && (r.name = i.createUniqueName(n.name)), Ln(r, n), n.extensions && Wn(t, r, n);
    const o = n.nodes || [], a = [];
    for (let c = 0, l = o.length; c < l; c++)
      a.push(i.getDependency("node", o[c]));
    return Promise.all(a).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        r.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations)
          (d instanceof Kt || d instanceof mt) && u.set(d, f);
        return h.traverse((d) => {
          const f = i.associations.get(d);
          f != null && u.set(d, f);
        }), u;
      };
      return i.associations = l(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const o = [], a = e.name ? e.name : e.uuid, c = [];
    wn[r.path] === wn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
    }) : c.push(a);
    let l;
    switch (wn[r.path]) {
      case wn.weights:
        l = Xi;
        break;
      case wn.rotation:
        l = ri;
        break;
      case wn.position:
      case wn.scale:
        l = $i;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Xi;
            break;
          case 2:
          case 3:
          default:
            l = $i;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? vx[i.interpolation] : Gi, u = this._getArrayFromAccessor(n);
    for (let d = 0, f = c.length; d < f; d++) {
      const g = new l(
        c[d] + "." + wn[r.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Wo(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof ri ? _x : Ph;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function bx(s, e, t) {
  const n = e.attributes, i = new xn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], c = a.min, l = a.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new P(c[0], c[1], c[2]),
        new P(l[0], l[1], l[2])
      ), a.normalized) {
        const h = Wo(Fi[a.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new P(), c = new P();
    for (let l = 0, h = r.length; l < h; l++) {
      const u = r[l];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], f = d.min, g = d.max;
        if (f !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), d.normalized) {
            const _ = Wo(Fi[d.componentType]);
            c.multiplyScalar(_);
          }
          a.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  s.boundingBox = i;
  const o = new en();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o;
}
function Rl(s, e, t) {
  const n = e.attributes, i = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(c) {
      s.setAttribute(a, c);
    });
  }
  for (const o in n) {
    const a = Vo[o] || o.toLowerCase();
    a in s.attributes || i.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !s.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      s.setIndex(a);
    });
    i.push(o);
  }
  return Ln(s, e), bx(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? yx(s, e.targets, t) : s;
  });
}
function da(s, e) {
  let t = s.parentElement;
  for (; t !== null; ) {
    if (e(t))
      return t;
    t = t.parentElement;
  }
  return null;
}
var wx = Object.defineProperty, Rx = Object.getOwnPropertyDescriptor, hi = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Rx(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && wx(e, t, i), i;
};
let vn = class extends Vt {
  constructor() {
    super(...arguments), this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new qe();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: s } = this, e = da(
      this,
      (f) => f instanceof Ji
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space;
    new jv().load(this.src, (f) => {
      s.add(f.scene), this.isLoaded = !0, this.dispatchEvent(
        new CustomEvent("loaded", {
          detail: { model: f.scene }
        })
      );
    });
    const [i, r, o] = this.positon.split(",").map((f) => parseFloat(f)), [a, c, l] = this.rotation.split(",").map((f) => parseFloat(f)), [h, u, d] = this.scale.split(",").map((f) => parseFloat(f));
    s.position.x = i, s.position.y = r, s.position.z = o, s.rotation.x = a, s.rotation.y = c, s.rotation.z = l, s.scale.x = h, s.scale.y = u, s.scale.z = d, t.add(s);
  }
  render() {
    return ci``;
  }
};
hi([
  je({ type: String, attribute: "src" })
], vn.prototype, "src", 2);
hi([
  je({ type: String, attribute: "position" })
], vn.prototype, "positon", 2);
hi([
  je({ type: String, attribute: "rotation" })
], vn.prototype, "rotation", 2);
hi([
  je({ type: String, attribute: "scale" })
], vn.prototype, "scale", 2);
hi([
  je({ type: Boolean })
], vn.prototype, "isLoaded", 2);
hi([
  je({ type: qe })
], vn.prototype, "space", 2);
vn = hi([
  li("mv-model")
], vn);
var Cx = Object.defineProperty, Lx = Object.getOwnPropertyDescriptor, Ih = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Lx(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && Cx(e, t, i), i;
};
let Xo = class extends Vt {
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
    const s = this.children, e = ei();
    for (let t = 0; t < s.length; t++) {
      const n = s[t];
      n instanceof vn && n.addEventListener("loaded", (i) => {
        const r = i.detail.model;
        e.registerInteractiveObject(r, this.onNavigate);
      });
    }
  }
  render() {
    return ci``;
  }
};
Ih([
  je({ type: String, attribute: "href" })
], Xo.prototype, "href", 2);
Xo = Ih([
  li("mv-link")
], Xo);
var Px = Object.defineProperty, Ix = Object.getOwnPropertyDescriptor, fa = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ix(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && Px(e, t, i), i;
};
let Cs = class extends Vt {
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
  registerInput(s) {
    this.inputs.push(s);
  }
  submit() {
    const s = this.inputs.reduce((t, n) => (n.name === "" || (t[n.name] = n.value), t), {}), e = document.createElement("form");
    e.style.display = "none", e.method = this.method, e.action = this.action;
    for (const t in s) {
      const n = s[t], i = document.createElement("input");
      i.type = "hidden", i.name = t, i.value = n, e.appendChild(i);
    }
    document.body.appendChild(e), e.submit();
  }
};
fa([
  je({ type: String, attribute: "action" })
], Cs.prototype, "action", 2);
fa([
  je({ type: String, attribute: "method" })
], Cs.prototype, "method", 2);
Cs = fa([
  li("mv-form")
], Cs);
var Dx = Object.defineProperty, Ux = Object.getOwnPropertyDescriptor, sn = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ux(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && Dx(e, t, i), i;
};
let Wt = class extends Vt {
  constructor() {
    super(...arguments), this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new qe(), this.type = "submit", this.name = "", this.value = "";
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: s } = this;
    let e = null, t = this.parentElement;
    for (; t !== null; ) {
      if (t instanceof Ji) {
        e = t.space;
        break;
      }
      t = t.parentElement;
    }
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const n = new bt(
      new es(1, 1, 1),
      new Ps({
        color: this.value === "true" ? 268435455 : 3355443
      })
    );
    s.add(n), this.isLoaded = !0, this.dispatchEvent(
      new CustomEvent("loaded", {
        detail: { model: n }
      })
    );
    const [i, r, o] = this.positon.split(",").map((g) => parseFloat(g)), [a, c, l] = this.rotation.split(",").map((g) => parseFloat(g)), [h, u, d] = this.scale.split(",").map((g) => parseFloat(g));
    s.position.x = i, s.position.y = r, s.position.z = o, s.rotation.x = a, s.rotation.y = c, s.rotation.z = l, s.scale.x = h, s.scale.y = u, s.scale.z = d, e.add(s);
    const f = da(
      this,
      (g) => g instanceof Cs
    );
    if (f === null)
      throw new Error("No parent form found for mv-model");
    this.type === "submit" ? ei().registerInteractiveObject(n, () => {
      f.submit();
    }) : this.type === "checkbox" ? (ei().registerInteractiveObject(n, () => {
      this.value === "true" ? (this.value = "false", n.material.color.setHex(3355443)) : (this.value = "true", n.material.color.setHex(16777215));
    }), f.registerInput(this)) : this.type === "text" && (ei().registerInteractiveObject(n, () => {
      var g;
      this.value = (g = window.prompt("Enter text", this.value)) != null ? g : "";
    }), f.registerInput(this));
  }
  render() {
    return ci``;
  }
};
sn([
  je({ type: String, attribute: "src" })
], Wt.prototype, "src", 2);
sn([
  je({ type: String, attribute: "position" })
], Wt.prototype, "positon", 2);
sn([
  je({ type: String, attribute: "rotation" })
], Wt.prototype, "rotation", 2);
sn([
  je({ type: String, attribute: "scale" })
], Wt.prototype, "scale", 2);
sn([
  je({ type: Boolean })
], Wt.prototype, "isLoaded", 2);
sn([
  je({ type: qe })
], Wt.prototype, "space", 2);
sn([
  je({ type: String, attribute: "type" })
], Wt.prototype, "type", 2);
sn([
  je({ type: String, attribute: "name" })
], Wt.prototype, "name", 2);
sn([
  je({ type: String, attribute: "value" })
], Wt.prototype, "value", 2);
Wt = sn([
  li("mv-input")
], Wt);
class Nx extends oa {
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
class Ox extends ai {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, o = new aa(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      const c = r.parse(JSON.parse(a));
      t && t(c);
    }, n, i);
  }
  parse(e) {
    return new Fx(e);
  }
}
class Fx {
  constructor(e) {
    this.isFont = !0, this.type = "Font", this.data = e;
  }
  generateShapes(e, t = 100) {
    const n = [], i = Bx(e, t, this.data);
    for (let r = 0, o = i.length; r < o; r++)
      n.push(...i[r].toShapes());
    return n;
  }
}
function Bx(s, e, t) {
  const n = Array.from(s), i = e / t.resolution, r = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = [];
  let a = 0, c = 0;
  for (let l = 0; l < n.length; l++) {
    const h = n[l];
    if (h === `
`)
      a = 0, c -= r;
    else {
      const u = zx(h, i, a, c, t);
      a += u.offsetX, o.push(u.path);
    }
  }
  return o;
}
function zx(s, e, t, n, i) {
  const r = i.glyphs[s] || i.glyphs["?"];
  if (!r) {
    console.error('THREE.Font: character "' + s + '" does not exists in font family ' + i.familyName + ".");
    return;
  }
  const o = new Mv();
  let a, c, l, h, u, d, f, g;
  if (r.o) {
    const _ = r._cachedOutline || (r._cachedOutline = r.o.split(" "));
    for (let m = 0, p = _.length; m < p; )
      switch (_[m++]) {
        case "m":
          a = _[m++] * e + t, c = _[m++] * e + n, o.moveTo(a, c);
          break;
        case "l":
          a = _[m++] * e + t, c = _[m++] * e + n, o.lineTo(a, c);
          break;
        case "q":
          l = _[m++] * e + t, h = _[m++] * e + n, u = _[m++] * e + t, d = _[m++] * e + n, o.quadraticCurveTo(u, d, l, h);
          break;
        case "b":
          l = _[m++] * e + t, h = _[m++] * e + n, u = _[m++] * e + t, d = _[m++] * e + n, f = _[m++] * e + t, g = _[m++] * e + n, o.bezierCurveTo(u, d, f, g, l, h);
          break;
      }
  }
  return { offsetX: r.ha * e, path: o };
}
var Hx = Object.defineProperty, kx = Object.getOwnPropertyDescriptor, yn = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? kx(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && Hx(e, t, i), i;
};
let Qt = class extends Vt {
  constructor() {
    super(...arguments), this.for = "", this.text = "", this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new qe();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: s } = this, e = da(
      this,
      (f) => f instanceof Ji
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space;
    new Ox().load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (f) => {
        const g = new Nx(this.text, {
          font: f,
          size: 1,
          height: 0.01
        }), _ = new Ps({
          color: 16777215
        }), m = new bt(g, _);
        m.position.y = -0.5, s.add(m);
      }
    );
    const [i, r, o] = this.positon.split(",").map((f) => parseFloat(f)), [a, c, l] = this.rotation.split(",").map((f) => parseFloat(f)), [h, u, d] = this.scale.split(",").map((f) => parseFloat(f));
    s.position.x = i, s.position.y = r, s.position.z = o, s.rotation.x = a, s.rotation.y = c, s.rotation.z = l, s.scale.x = h, s.scale.y = u, s.scale.z = d, t.add(s);
  }
  render() {
    return ci``;
  }
};
yn([
  je({ type: String, attribute: "for" })
], Qt.prototype, "for", 2);
yn([
  je({ type: String, attribute: "text" })
], Qt.prototype, "text", 2);
yn([
  je({ type: String, attribute: "src" })
], Qt.prototype, "src", 2);
yn([
  je({ type: String, attribute: "position" })
], Qt.prototype, "positon", 2);
yn([
  je({ type: String, attribute: "rotation" })
], Qt.prototype, "rotation", 2);
yn([
  je({ type: String, attribute: "scale" })
], Qt.prototype, "scale", 2);
yn([
  je({ type: Boolean })
], Qt.prototype, "isLoaded", 2);
yn([
  je({ type: qe })
], Qt.prototype, "space", 2);
Qt = yn([
  li("mv-label")
], Qt);
var Gx = Object.defineProperty, Vx = Object.getOwnPropertyDescriptor, wr = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Vx(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && Gx(e, t, i), i;
};
let Ls = class extends Vt {
  constructor() {
    super(...arguments), this.type = "", this.color = "", this.intensity = 1;
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    if (super.connectedCallback(), this.type === "ambient") {
      const s = ei().scene, e = new lv(this.color, this.intensity);
      s.add(e);
    }
  }
  render() {
    return ci``;
  }
};
wr([
  je({ type: String, attribute: "type" })
], Ls.prototype, "type", 2);
wr([
  je({ type: String, attribute: "color" })
], Ls.prototype, "color", 2);
wr([
  je({ type: String, attribute: "intensity" })
], Ls.prototype, "intensity", 2);
Ls = wr([
  li("mv-light")
], Ls);
