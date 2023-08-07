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
const ko = "155", Rh = 0, ma = 1, Ch = 2, yc = 1, Mc = 2, dn = 3, mn = 0, wt = 1, qt = 2, Cn = 0, wi = 1, ga = 2, _a = 3, va = 4, Lh = 5, Ei = 100, Ph = 101, Ih = 102, xa = 103, ya = 104, Uh = 200, Dh = 201, Nh = 202, Oh = 203, Sc = 204, Ec = 205, Fh = 206, Bh = 207, zh = 208, Hh = 209, Gh = 210, kh = 0, Vh = 1, Wh = 2, Eo = 3, Xh = 4, $h = 5, qh = 6, Yh = 7, Tc = 0, jh = 1, Kh = 2, Ln = 0, Zh = 1, Jh = 2, Qh = 3, Ac = 4, eu = 5, bc = 300, Ui = 301, Di = 302, To = 303, Ao = 304, _r = 306, Ni = 1e3, Dt = 1001, dr = 1002, dt = 1003, bo = 1004, lr = 1005, At = 1006, wc = 1007, Jn = 1008, Pn = 1009, tu = 1010, nu = 1011, Vo = 1012, Rc = 1013, Rn = 1014, fn = 1015, _s = 1016, Cc = 1017, Lc = 1018, jn = 1020, iu = 1021, Nt = 1023, su = 1024, ru = 1025, Kn = 1026, Oi = 1027, ou = 1028, Pc = 1029, au = 1030, Ic = 1031, Uc = 1033, Rr = 33776, Cr = 33777, Lr = 33778, Pr = 33779, Ma = 35840, Sa = 35841, Ea = 35842, Ta = 35843, lu = 36196, Aa = 37492, ba = 37496, wa = 37808, Ra = 37809, Ca = 37810, La = 37811, Pa = 37812, Ia = 37813, Ua = 37814, Da = 37815, Na = 37816, Oa = 37817, Fa = 37818, Ba = 37819, za = 37820, Ha = 37821, Ir = 36492, cu = 36283, Ga = 36284, ka = 36285, Va = 36286, vs = 2300, Fi = 2301, Ur = 2302, Wa = 2400, Xa = 2401, $a = 2402, hu = 2500, uu = 0, Dc = 1, wo = 2, Nc = 3e3, In = 3001, du = 3200, fu = 3201, Oc = 0, pu = 1, Zn = "", Ie = "srgb", Zt = "srgb-linear", Fc = "display-p3", Dr = 7680, mu = 519, gu = 512, _u = 513, vu = 514, xu = 515, yu = 516, Mu = 517, Su = 518, Eu = 519, Ro = 35044, qa = "300 es", Co = 1035, pn = 2e3, fr = 2001;
class Yi {
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
const _t = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ya = 1234567;
const ds = Math.PI / 180, Bi = 180 / Math.PI;
function Ot() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (_t[s & 255] + _t[s >> 8 & 255] + _t[s >> 16 & 255] + _t[s >> 24 & 255] + "-" + _t[e & 255] + _t[e >> 8 & 255] + "-" + _t[e >> 16 & 15 | 64] + _t[e >> 24 & 255] + "-" + _t[t & 63 | 128] + _t[t >> 8 & 255] + "-" + _t[t >> 16 & 255] + _t[t >> 24 & 255] + _t[n & 255] + _t[n >> 8 & 255] + _t[n >> 16 & 255] + _t[n >> 24 & 255]).toLowerCase();
}
function ft(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Wo(s, e) {
  return (s % e + e) % e;
}
function Tu(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Au(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function fs(s, e, t) {
  return (1 - t) * s + t * e;
}
function bu(s, e, t, n) {
  return fs(s, e, 1 - Math.exp(-t * n));
}
function wu(s, e = 1) {
  return e - Math.abs(Wo(s, e * 2) - e);
}
function Ru(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function Cu(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Lu(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Pu(s, e) {
  return s + Math.random() * (e - s);
}
function Iu(s) {
  return s * (0.5 - Math.random());
}
function Uu(s) {
  s !== void 0 && (Ya = s);
  let e = Ya += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Du(s) {
  return s * ds;
}
function Nu(s) {
  return s * Bi;
}
function Lo(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Bc(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function pr(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Ou(s, e, t, n, i) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + n) / 2), h = o((e + n) / 2), u = r((e - n) / 2), d = o((e - n) / 2), f = r((n - e) / 2), g = o((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(a * h, l * u, l * d, a * c);
      break;
    case "YZY":
      s.set(l * d, a * h, l * u, a * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, a * h, a * c);
      break;
    case "XZX":
      s.set(a * h, l * g, l * f, a * c);
      break;
    case "YXY":
      s.set(l * f, a * h, l * g, a * c);
      break;
    case "ZYZ":
      s.set(l * g, l * f, a * h, a * c);
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
function Ye(s, e) {
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
const Fu = {
  DEG2RAD: ds,
  RAD2DEG: Bi,
  generateUUID: Ot,
  clamp: ft,
  euclideanModulo: Wo,
  mapLinear: Tu,
  inverseLerp: Au,
  lerp: fs,
  damp: bu,
  pingpong: wu,
  smoothstep: Ru,
  smootherstep: Cu,
  randInt: Lu,
  randFloat: Pu,
  randFloatSpread: Iu,
  seededRandom: Uu,
  degToRad: Du,
  radToDeg: Nu,
  isPowerOfTwo: Lo,
  ceilPowerOfTwo: Bc,
  floorPowerOfTwo: pr,
  setQuaternionFromProperEuler: Ou,
  normalize: Ye,
  denormalize: Yt
};
class le {
  constructor(e = 0, t = 0) {
    le.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    return Math.acos(ft(n, -1, 1));
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
class Be {
  constructor(e, t, n, i, r, o, a, l, c) {
    Be.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c);
  }
  set(e, t, n, i, r, o, a, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
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
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], f = n[5], g = n[8], _ = i[0], m = i[3], p = i[6], E = i[1], v = i[4], y = i[7], b = i[2], C = i[5], w = i[8];
    return r[0] = o * _ + a * E + l * b, r[3] = o * m + a * v + l * C, r[6] = o * p + a * y + l * w, r[1] = c * _ + h * E + u * b, r[4] = c * m + h * v + u * C, r[7] = c * p + h * y + u * w, r[2] = d * _ + f * E + g * b, r[5] = d * m + f * v + g * C, r[8] = d * p + f * y + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * a * c - n * r * h + n * a * l + i * r * c - i * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = h * o - a * c, d = a * l - h * r, f = c * r - o * l, g = t * u + n * d + i * f;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * c - h * n) * _, e[2] = (a * n - i * o) * _, e[3] = d * _, e[4] = (h * t - i * l) * _, e[5] = (i * r - a * t) * _, e[6] = f * _, e[7] = (n * l - c * t) * _, e[8] = (o * t - n * r) * _, this;
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
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -i * c,
      i * l,
      -i * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    return this.premultiply(Nr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Nr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Nr.makeTranslation(e, t)), this;
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
const Nr = /* @__PURE__ */ new Be();
function zc(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535)
      return !0;
  return !1;
}
function xs(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
const ja = {};
function ps(s) {
  s in ja || (ja[s] = !0, console.warn(s));
}
function Ri(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Or(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const Bu = /* @__PURE__ */ new Be().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), zu = /* @__PURE__ */ new Be().fromArray([
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
function Hu(s) {
  return s.convertSRGBToLinear().applyMatrix3(zu);
}
function Gu(s) {
  return s.applyMatrix3(Bu).convertLinearToSRGB();
}
const ku = {
  [Zt]: (s) => s,
  [Ie]: (s) => s.convertSRGBToLinear(),
  [Fc]: Hu
}, Vu = {
  [Zt]: (s) => s,
  [Ie]: (s) => s.convertLinearToSRGB(),
  [Fc]: Gu
}, Bt = {
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
    const n = ku[e], i = Vu[t];
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
let ri;
class Hc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      ri === void 0 && (ri = xs("canvas")), ri.width = e.width, ri.height = e.height;
      const n = ri.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ri;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = xs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++)
        r[o] = Ri(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ri(t[n] / 255) * 255) : t[n] = Ri(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Wu = 0;
class Gc {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Wu++ }), this.uuid = Ot(), this.data = e, this.version = 0;
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
          i[o].isDataTexture ? r.push(Fr(i[o].image)) : r.push(Fr(i[o]));
      } else
        r = Fr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Fr(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Hc.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Xu = 0;
class gt extends Yi {
  constructor(e = gt.DEFAULT_IMAGE, t = gt.DEFAULT_MAPPING, n = Dt, i = Dt, r = At, o = Jn, a = Nt, l = Pn, c = gt.DEFAULT_ANISOTROPY, h = Zn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Xu++ }), this.uuid = Ot(), this.name = "", this.source = new Gc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new le(0, 0), this.repeat = new le(1, 1), this.center = new le(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === In ? Ie : Zn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== bc)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ni:
          e.x = e.x - Math.floor(e.x);
          break;
        case Dt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case dr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ni:
          e.y = e.y - Math.floor(e.y);
          break;
        case Dt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case dr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Ie ? In : Nc;
  }
  set encoding(e) {
    ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === In ? Ie : Zn;
  }
}
gt.DEFAULT_IMAGE = null;
gt.DEFAULT_MAPPING = bc;
gt.DEFAULT_ANISOTROPY = 1;
class je {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    je.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], f = l[5], g = l[9], _ = l[2], m = l[6], p = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, y = (f + 1) / 2, b = (p + 1) / 2, C = (h + d) / 4, w = (u + _) / 4, N = (g + m) / 4;
      return v > y && v > b ? v < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(v), i = C / n, r = w / n) : y > b ? y < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(y), n = C / i, r = N / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(b), n = w / r, i = N / r), this.set(n, i, r, t), this;
    }
    let E = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(E) < 1e-3 && (E = 1), this.x = (m - g) / E, this.y = (u - _) / E, this.z = (d - h) / E, this.w = Math.acos((c + f + p - 1) / 2), this;
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
class $u extends Yi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new je(0, 0, e, t), this.scissorTest = !1, this.viewport = new je(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === In ? Ie : Zn), this.texture = new gt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : At, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
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
    return this.texture.source = new Gc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Qn extends $u {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class kc extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = dt, this.minFilter = dt, this.wrapR = Dt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class qu extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = dt, this.minFilter = dt, this.wrapR = Dt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Un {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[o + 0], f = r[o + 1], g = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = f, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== f || h !== g) {
      let m = 1 - a;
      const p = l * d + c * f + h * g + u * _, E = p >= 0 ? 1 : -1, v = 1 - p * p;
      if (v > Number.EPSILON) {
        const b = Math.sqrt(v), C = Math.atan2(b, p * E);
        m = Math.sin(m * C) / b, a = Math.sin(a * C) / b;
      }
      const y = a * E;
      if (l = l * m + d * y, c = c * m + f * y, h = h * m + g * y, u = u * m + _ * y, m === 1 - a) {
        const b = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= b, c *= b, h *= b, u *= b;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], f = r[o + 2], g = r[o + 3];
    return e[t] = a * g + h * u + l * f - c * d, e[t + 1] = l * g + h * d + c * u - a * f, e[t + 2] = c * g + h * f + a * d - l * u, e[t + 3] = h * g - a * u - l * d - c * f, e;
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
    const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(i / 2), u = a(r / 2), d = l(n / 2), f = l(i / 2), g = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u - d * f * g;
        break;
      case "YXZ":
        this._x = d * h * u + c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u + d * f * g;
        break;
      case "ZXY":
        this._x = d * h * u - c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u - d * f * g;
        break;
      case "ZYX":
        this._x = d * h * u - c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u + d * f * g;
        break;
      case "YZX":
        this._x = d * h * u + c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u - d * f * g;
        break;
      case "XZY":
        this._x = d * h * u - c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u + d * f * g;
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
    const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - l) * f, this._y = (r - c) * f, this._z = (o - i) * f;
    } else if (n > a && n > u) {
      const f = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - l) / f, this._x = 0.25 * f, this._y = (i + o) / f, this._z = (r + c) / f;
    } else if (a > u) {
      const f = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - c) / f, this._x = (i + o) / f, this._y = 0.25 * f, this._z = (l + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / f, this._x = (r + c) / f, this._y = (l + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ft(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + o * a + i * c - r * l, this._y = i * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - r * c, this._onChangeCallback(), this;
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
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const f = 1 - t;
      return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
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
class L {
  constructor(e = 0, t = 0, n = 0) {
    L.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(Ka.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ka.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = l * t + o * i - a * n, h = l * n + a * t - r * i, u = l * i + r * n - o * t, d = -r * t - o * n - a * i;
    return this.x = c * l + d * -r + h * -a - u * -o, this.y = h * l + d * -o + u * -r - c * -a, this.z = u * l + d * -a + c * -o - h * -r, this;
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
    const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Br.copy(this).projectOnVector(e), this.sub(Br);
  }
  reflect(e) {
    return this.sub(Br.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ft(n, -1, 1));
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
const Br = /* @__PURE__ */ new L(), Ka = /* @__PURE__ */ new Un();
class _n {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(on.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(on.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = on.copy(t).multiplyScalar(0.5);
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
      e.boundingBox === null && e.computeBoundingBox(), oi.copy(e.boundingBox), oi.applyMatrix4(e.matrixWorld), this.union(oi);
    else {
      const i = e.geometry;
      if (i !== void 0)
        if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
          const r = i.attributes.position;
          for (let o = 0, a = r.count; o < a; o++)
            on.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld), this.expandByPoint(on);
        } else
          i.boundingBox === null && i.computeBoundingBox(), oi.copy(i.boundingBox), oi.applyMatrix4(e.matrixWorld), this.union(oi);
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
    return this.clampPoint(e.center, on), on.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ns), Ds.subVectors(this.max, ns), ai.subVectors(e.a, ns), li.subVectors(e.b, ns), ci.subVectors(e.c, ns), yn.subVectors(li, ai), Mn.subVectors(ci, li), Fn.subVectors(ai, ci);
    let t = [
      0,
      -yn.z,
      yn.y,
      0,
      -Mn.z,
      Mn.y,
      0,
      -Fn.z,
      Fn.y,
      yn.z,
      0,
      -yn.x,
      Mn.z,
      0,
      -Mn.x,
      Fn.z,
      0,
      -Fn.x,
      -yn.y,
      yn.x,
      0,
      -Mn.y,
      Mn.x,
      0,
      -Fn.y,
      Fn.x,
      0
    ];
    return !zr(t, ai, li, ci, Ds) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !zr(t, ai, li, ci, Ds)) ? !1 : (Ns.crossVectors(yn, Mn), t = [Ns.x, Ns.y, Ns.z], zr(t, ai, li, ci, Ds));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, on).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(on).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (rn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), rn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), rn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), rn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), rn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), rn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), rn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), rn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(rn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const rn = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], on = /* @__PURE__ */ new L(), oi = /* @__PURE__ */ new _n(), ai = /* @__PURE__ */ new L(), li = /* @__PURE__ */ new L(), ci = /* @__PURE__ */ new L(), yn = /* @__PURE__ */ new L(), Mn = /* @__PURE__ */ new L(), Fn = /* @__PURE__ */ new L(), ns = /* @__PURE__ */ new L(), Ds = /* @__PURE__ */ new L(), Ns = /* @__PURE__ */ new L(), Bn = /* @__PURE__ */ new L();
function zr(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    Bn.fromArray(s, r);
    const a = i.x * Math.abs(Bn.x) + i.y * Math.abs(Bn.y) + i.z * Math.abs(Bn.z), l = e.dot(Bn), c = t.dot(Bn), h = n.dot(Bn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
      return !1;
  }
  return !0;
}
const Yu = /* @__PURE__ */ new _n(), is = /* @__PURE__ */ new L(), Hr = /* @__PURE__ */ new L();
class Qt {
  constructor(e = new L(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Yu.setFromPoints(e).getCenter(n);
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
    is.subVectors(e, this.center);
    const t = is.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(is, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Hr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(is.copy(e.center).add(Hr)), this.expandByPoint(is.copy(e.center).sub(Hr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const an = /* @__PURE__ */ new L(), Gr = /* @__PURE__ */ new L(), Os = /* @__PURE__ */ new L(), Sn = /* @__PURE__ */ new L(), kr = /* @__PURE__ */ new L(), Fs = /* @__PURE__ */ new L(), Vr = /* @__PURE__ */ new L();
class Rs {
  constructor(e = new L(), t = new L(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, an)), this;
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
    const t = an.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (an.copy(this.origin).addScaledVector(this.direction, t), an.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Gr.copy(e).add(t).multiplyScalar(0.5), Os.copy(t).sub(e).normalize(), Sn.copy(this.origin).sub(Gr);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(Os), a = Sn.dot(this.direction), l = -Sn.dot(Os), c = Sn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, f, g;
    if (h > 0)
      if (u = o * l - a, d = o * a - l, g = r * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / h;
            u *= _, d *= _, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c;
          } else
            d = r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
        else
          d = -r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
      else
        d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), f = -u * u + d * (d + 2 * l) + c);
    else
      d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Gr).addScaledVector(Os, d), f;
  }
  intersectSphere(e, t) {
    an.subVectors(e.center, this.origin);
    const n = an.dot(this.direction), i = an.dot(an) - n * n, r = e.radius * e.radius;
    if (i > r)
      return null;
    const o = Math.sqrt(r - i), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
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
    let n, i, r, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, an) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    kr.subVectors(t, e), Fs.subVectors(n, e), Vr.crossVectors(kr, Fs);
    let o = this.direction.dot(Vr), a;
    if (o > 0) {
      if (i)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Sn.subVectors(this.origin, e);
    const l = a * this.direction.dot(Fs.crossVectors(Sn, Fs));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(kr.cross(Sn));
    if (c < 0 || l + c > o)
      return null;
    const h = -a * Sn.dot(Vr);
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
class Fe {
  constructor(e, t, n, i, r, o, a, l, c, h, u, d, f, g, _, m) {
    Fe.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c, h, u, d, f, g, _, m);
  }
  set(e, t, n, i, r, o, a, l, c, h, u, d, f, g, _, m) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = r, p[5] = o, p[9] = a, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = g, p[11] = _, p[15] = m, this;
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
    return new Fe().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / hi.setFromMatrixColumn(e, 0).length(), r = 1 / hi.setFromMatrixColumn(e, 1).length(), o = 1 / hi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = o * h, f = o * u, g = a * h, _ = a * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = f + g * c, t[5] = d - _ * c, t[9] = -a * l, t[2] = _ - d * c, t[6] = g + f * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * h, f = l * u, g = c * h, _ = c * u;
      t[0] = d + _ * a, t[4] = g * a - f, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = f * a - g, t[6] = _ + d * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * h, f = l * u, g = c * h, _ = c * u;
      t[0] = d - _ * a, t[4] = -o * u, t[8] = g + f * a, t[1] = f + g * a, t[5] = o * h, t[9] = _ - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * h, f = o * u, g = a * h, _ = a * u;
      t[0] = l * h, t[4] = g * c - f, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = f * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, f = o * c, g = a * l, _ = a * c;
      t[0] = l * h, t[4] = _ - d * u, t[8] = g * u + f, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = f * u + g, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = o * l, f = o * c, g = a * l, _ = a * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = o * h, t[9] = f * u - g, t[2] = g * u - f, t[6] = a * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(ju, e, Ku);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Ct.subVectors(e, t), Ct.lengthSq() === 0 && (Ct.z = 1), Ct.normalize(), En.crossVectors(n, Ct), En.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ct.x += 1e-4 : Ct.z += 1e-4, Ct.normalize(), En.crossVectors(n, Ct)), En.normalize(), Bs.crossVectors(Ct, En), i[0] = En.x, i[4] = Bs.x, i[8] = Ct.x, i[1] = En.y, i[5] = Bs.y, i[9] = Ct.y, i[2] = En.z, i[6] = Bs.z, i[10] = Ct.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], f = n[13], g = n[2], _ = n[6], m = n[10], p = n[14], E = n[3], v = n[7], y = n[11], b = n[15], C = i[0], w = i[4], N = i[8], M = i[12], A = i[1], Y = i[5], ee = i[9], F = i[13], H = i[2], k = i[6], K = i[10], X = i[14], q = i[3], Q = i[7], j = i[11], D = i[15];
    return r[0] = o * C + a * A + l * H + c * q, r[4] = o * w + a * Y + l * k + c * Q, r[8] = o * N + a * ee + l * K + c * j, r[12] = o * M + a * F + l * X + c * D, r[1] = h * C + u * A + d * H + f * q, r[5] = h * w + u * Y + d * k + f * Q, r[9] = h * N + u * ee + d * K + f * j, r[13] = h * M + u * F + d * X + f * D, r[2] = g * C + _ * A + m * H + p * q, r[6] = g * w + _ * Y + m * k + p * Q, r[10] = g * N + _ * ee + m * K + p * j, r[14] = g * M + _ * F + m * X + p * D, r[3] = E * C + v * A + y * H + b * q, r[7] = E * w + v * Y + y * k + b * Q, r[11] = E * N + v * ee + y * K + b * j, r[15] = E * M + v * F + y * X + b * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], f = e[14], g = e[3], _ = e[7], m = e[11], p = e[15];
    return g * (+r * l * u - i * c * u - r * a * d + n * c * d + i * a * f - n * l * f) + _ * (+t * l * f - t * c * d + r * o * d - i * o * f + i * c * h - r * l * h) + m * (+t * c * u - t * a * f - r * o * u + n * o * f + r * a * h - n * c * h) + p * (-i * a * h - t * l * u + t * a * d + i * o * u - n * o * d + n * l * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], f = e[11], g = e[12], _ = e[13], m = e[14], p = e[15], E = u * m * c - _ * d * c + _ * l * f - a * m * f - u * l * p + a * d * p, v = g * d * c - h * m * c - g * l * f + o * m * f + h * l * p - o * d * p, y = h * _ * c - g * u * c + g * a * f - o * _ * f - h * a * p + o * u * p, b = g * u * l - h * _ * l - g * a * d + o * _ * d + h * a * m - o * u * m, C = t * E + n * v + i * y + r * b;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / C;
    return e[0] = E * w, e[1] = (_ * d * r - u * m * r - _ * i * f + n * m * f + u * i * p - n * d * p) * w, e[2] = (a * m * r - _ * l * r + _ * i * c - n * m * c - a * i * p + n * l * p) * w, e[3] = (u * l * r - a * d * r - u * i * c + n * d * c + a * i * f - n * l * f) * w, e[4] = v * w, e[5] = (h * m * r - g * d * r + g * i * f - t * m * f - h * i * p + t * d * p) * w, e[6] = (g * l * r - o * m * r - g * i * c + t * m * c + o * i * p - t * l * p) * w, e[7] = (o * d * r - h * l * r + h * i * c - t * d * c - o * i * f + t * l * f) * w, e[8] = y * w, e[9] = (g * u * r - h * _ * r - g * n * f + t * _ * f + h * n * p - t * u * p) * w, e[10] = (o * _ * r - g * a * r + g * n * c - t * _ * c - o * n * p + t * a * p) * w, e[11] = (h * a * r - o * u * r - h * n * c + t * u * c + o * n * f - t * a * f) * w, e[12] = b * w, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * m + t * u * m) * w, e[14] = (g * a * i - o * _ * i - g * n * l + t * _ * l + o * n * m - t * a * m) * w, e[15] = (o * u * i - h * a * i + h * n * l - t * u * l - o * n * d + t * a * d) * w, this;
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
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, h = r * a;
    return this.set(
      c * o + n,
      c * a - i * l,
      c * l + i * a,
      0,
      c * a + i * l,
      h * a + n,
      h * l - i * o,
      0,
      c * l - i * a,
      h * l + i * o,
      r * l * l + n,
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
    const i = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, h = o + o, u = a + a, d = r * c, f = r * h, g = r * u, _ = o * h, m = o * u, p = a * u, E = l * c, v = l * h, y = l * u, b = n.x, C = n.y, w = n.z;
    return i[0] = (1 - (_ + p)) * b, i[1] = (f + y) * b, i[2] = (g - v) * b, i[3] = 0, i[4] = (f - y) * C, i[5] = (1 - (d + p)) * C, i[6] = (m + E) * C, i[7] = 0, i[8] = (g + v) * w, i[9] = (m - E) * w, i[10] = (1 - (d + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = hi.set(i[0], i[1], i[2]).length();
    const o = hi.set(i[4], i[5], i[6]).length(), a = hi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], zt.copy(this);
    const c = 1 / r, h = 1 / o, u = 1 / a;
    return zt.elements[0] *= c, zt.elements[1] *= c, zt.elements[2] *= c, zt.elements[4] *= h, zt.elements[5] *= h, zt.elements[6] *= h, zt.elements[8] *= u, zt.elements[9] *= u, zt.elements[10] *= u, t.setFromRotationMatrix(zt), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o, a = pn) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let f, g;
    if (a === pn)
      f = -(o + r) / (o - r), g = -2 * o * r / (o - r);
    else if (a === fr)
      f = -o / (o - r), g = -o * r / (o - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o, a = pn) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - r), d = (t + e) * c, f = (n + i) * h;
    let g, _;
    if (a === pn)
      g = (o + r) * u, _ = -2 * u;
    else if (a === fr)
      g = r * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const hi = /* @__PURE__ */ new L(), zt = /* @__PURE__ */ new Fe(), ju = /* @__PURE__ */ new L(0, 0, 0), Ku = /* @__PURE__ */ new L(1, 1, 1), En = /* @__PURE__ */ new L(), Bs = /* @__PURE__ */ new L(), Ct = /* @__PURE__ */ new L(), Za = /* @__PURE__ */ new Fe(), Ja = /* @__PURE__ */ new Un();
class vr {
  constructor(e = 0, t = 0, n = 0, i = vr.DEFAULT_ORDER) {
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
    const i = e.elements, r = i[0], o = i[4], a = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ft(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ft(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ft(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-ft(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(ft(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-ft(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Za.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Za, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ja.setFromEuler(this), this.setFromQuaternion(Ja, e);
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
vr.DEFAULT_ORDER = "XYZ";
class Xo {
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
let Zu = 0;
const Qa = /* @__PURE__ */ new L(), ui = /* @__PURE__ */ new Un(), ln = /* @__PURE__ */ new Fe(), zs = /* @__PURE__ */ new L(), ss = /* @__PURE__ */ new L(), Ju = /* @__PURE__ */ new L(), Qu = /* @__PURE__ */ new Un(), el = /* @__PURE__ */ new L(1, 0, 0), tl = /* @__PURE__ */ new L(0, 1, 0), nl = /* @__PURE__ */ new L(0, 0, 1), ed = { type: "added" }, il = { type: "removed" };
class Xe extends Yi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Zu++ }), this.uuid = Ot(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Xe.DEFAULT_UP.clone();
    const e = new L(), t = new vr(), n = new Un(), i = new L(1, 1, 1);
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
        value: new Fe()
      },
      normalMatrix: {
        value: new Be()
      }
    }), this.matrix = new Fe(), this.matrixWorld = new Fe(), this.matrixAutoUpdate = Xe.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Xo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return ui.setFromAxisAngle(e, t), this.quaternion.multiply(ui), this;
  }
  rotateOnWorldAxis(e, t) {
    return ui.setFromAxisAngle(e, t), this.quaternion.premultiply(ui), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(el, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(tl, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(nl, e);
  }
  translateOnAxis(e, t) {
    return Qa.copy(e).applyQuaternion(this.quaternion), this.position.add(Qa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(el, e);
  }
  translateY(e) {
    return this.translateOnAxis(tl, e);
  }
  translateZ(e) {
    return this.translateOnAxis(nl, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(ln.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? zs.copy(e) : zs.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ss.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ln.lookAt(ss, zs, this.up) : ln.lookAt(zs, ss, this.up), this.quaternion.setFromRotationMatrix(ln), i && (ln.extractRotation(i.matrixWorld), ui.setFromRotationMatrix(ln), this.quaternion.premultiply(ui.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(ed)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(il)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(il);
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ss, e, Ju), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ss, Qu, e), e;
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
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(e.shapes, u);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(r(e.materials, this.material[l]));
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
        const l = this.animations[a];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), f = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
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
Xe.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
Xe.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ht = /* @__PURE__ */ new L(), cn = /* @__PURE__ */ new L(), Wr = /* @__PURE__ */ new L(), hn = /* @__PURE__ */ new L(), di = /* @__PURE__ */ new L(), fi = /* @__PURE__ */ new L(), sl = /* @__PURE__ */ new L(), Xr = /* @__PURE__ */ new L(), $r = /* @__PURE__ */ new L(), qr = /* @__PURE__ */ new L();
let Hs = !1;
class kt {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Ht.subVectors(e, t), i.cross(Ht);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Ht.subVectors(i, t), cn.subVectors(n, t), Wr.subVectors(e, t);
    const o = Ht.dot(Ht), a = Ht.dot(cn), l = Ht.dot(Wr), c = cn.dot(cn), h = cn.dot(Wr), u = o * c - a * a;
    if (u === 0)
      return r.set(-2, -1, -1);
    const d = 1 / u, f = (c * l - a * h) * d, g = (o * h - a * l) * d;
    return r.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, hn), hn.x >= 0 && hn.y >= 0 && hn.x + hn.y <= 1;
  }
  static getUV(e, t, n, i, r, o, a, l) {
    return Hs === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Hs = !0), this.getInterpolation(e, t, n, i, r, o, a, l);
  }
  static getInterpolation(e, t, n, i, r, o, a, l) {
    return this.getBarycoord(e, t, n, i, hn), l.setScalar(0), l.addScaledVector(r, hn.x), l.addScaledVector(o, hn.y), l.addScaledVector(a, hn.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return Ht.subVectors(n, t), cn.subVectors(e, t), Ht.cross(cn).dot(i) < 0;
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
    return Ht.subVectors(this.c, this.b), cn.subVectors(this.a, this.b), Ht.cross(cn).length() * 0.5;
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
    return Hs === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Hs = !0), kt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
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
    di.subVectors(i, n), fi.subVectors(r, n), Xr.subVectors(e, n);
    const l = di.dot(Xr), c = fi.dot(Xr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    $r.subVectors(e, i);
    const h = di.dot($r), u = fi.dot($r);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), t.copy(n).addScaledVector(di, o);
    qr.subVectors(e, r);
    const f = di.dot(qr), g = fi.dot(qr);
    if (g >= 0 && f <= g)
      return t.copy(r);
    const _ = f * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(fi, a);
    const m = h * g - f * u;
    if (m <= 0 && u - h >= 0 && f - g >= 0)
      return sl.subVectors(r, i), a = (u - h) / (u - h + (f - g)), t.copy(i).addScaledVector(sl, a);
    const p = 1 / (m + _ + d);
    return o = _ * p, a = d * p, t.copy(n).addScaledVector(di, o).addScaledVector(fi, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let td = 0;
class jt extends Yi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: td++ }), this.uuid = Ot(), this.name = "", this.type = "Material", this.blending = wi, this.side = mn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Sc, this.blendDst = Ec, this.blendEquation = Ei, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Eo, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = mu, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Dr, this.stencilZFail = Dr, this.stencilZPass = Dr, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== wi && (n.blending = this.blending), this.side !== mn && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = this.alphaHash), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
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
const Vc = {
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
}, Gt = { h: 0, s: 0, l: 0 }, Gs = { h: 0, s: 0, l: 0 };
function Yr(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class De {
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
  setHex(e, t = Ie) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Bt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Bt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Bt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Bt.workingColorSpace) {
    if (e = Wo(e, 1), t = ft(t, 0, 1), n = ft(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = Yr(o, r, e + 1 / 3), this.g = Yr(o, r, e), this.b = Yr(o, r, e - 1 / 3);
    }
    return Bt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ie) {
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
  setColorName(e, t = Ie) {
    const n = Vc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ri(e.r), this.g = Ri(e.g), this.b = Ri(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Or(e.r), this.g = Or(e.g), this.b = Or(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ie) {
    return Bt.fromWorkingColorSpace(vt.copy(this), e), Math.round(ft(vt.r * 255, 0, 255)) * 65536 + Math.round(ft(vt.g * 255, 0, 255)) * 256 + Math.round(ft(vt.b * 255, 0, 255));
  }
  getHexString(e = Ie) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Bt.workingColorSpace) {
    Bt.fromWorkingColorSpace(vt.copy(this), t);
    const n = vt.r, i = vt.g, r = vt.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let l, c;
    const h = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Bt.workingColorSpace) {
    return Bt.fromWorkingColorSpace(vt.copy(this), t), e.r = vt.r, e.g = vt.g, e.b = vt.b, e;
  }
  getStyle(e = Ie) {
    Bt.fromWorkingColorSpace(vt.copy(this), e);
    const t = vt.r, n = vt.g, i = vt.b;
    return e !== Ie ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Gt), Gt.h += e, Gt.s += t, Gt.l += n, this.setHSL(Gt.h, Gt.s, Gt.l), this;
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
    this.getHSL(Gt), e.getHSL(Gs);
    const n = fs(Gt.h, Gs.h, t), i = fs(Gt.s, Gs.s, t), r = fs(Gt.l, Gs.l, t);
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
const vt = /* @__PURE__ */ new De();
De.NAMES = Vc;
class $n extends jt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new De(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Tc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const lt = /* @__PURE__ */ new L(), ks = /* @__PURE__ */ new le();
class Tt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ro, this.updateRange = { offset: 0, count: -1 }, this.gpuType = fn, this.version = 0;
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
        ks.fromBufferAttribute(this, t), ks.applyMatrix3(e), this.setXY(t, ks.x, ks.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        lt.fromBufferAttribute(this, t), lt.applyMatrix3(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.applyMatrix4(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.applyNormalMatrix(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.transformDirection(e), this.setXYZ(t, lt.x, lt.y, lt.z);
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
    return this.normalized && (n = Ye(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Yt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array), i = Ye(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array), i = Ye(i, this.array), r = Ye(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Ro && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class Wc extends Tt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Xc extends Tt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Vt extends Tt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let nd = 0;
const It = /* @__PURE__ */ new Fe(), jr = /* @__PURE__ */ new Xe(), pi = /* @__PURE__ */ new L(), Lt = /* @__PURE__ */ new _n(), rs = /* @__PURE__ */ new _n(), ut = /* @__PURE__ */ new L();
class Ft extends Yi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: nd++ }), this.uuid = Ot(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (zc(e) ? Xc : Wc)(e, 1) : this.index = e, this;
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
      const r = new Be().getNormalMatrix(e);
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
    return jr.lookAt(e), jr.updateMatrix(), this.applyMatrix4(jr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(pi).negate(), this.translate(pi.x, pi.y, pi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Vt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new _n());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Lt.setFromBufferAttribute(r), this.morphTargetsRelative ? (ut.addVectors(this.boundingBox.min, Lt.min), this.boundingBox.expandByPoint(ut), ut.addVectors(this.boundingBox.max, Lt.max), this.boundingBox.expandByPoint(ut)) : (this.boundingBox.expandByPoint(Lt.min), this.boundingBox.expandByPoint(Lt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Qt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Lt.setFromBufferAttribute(e), t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          rs.setFromBufferAttribute(a), this.morphTargetsRelative ? (ut.addVectors(Lt.min, rs.min), Lt.expandByPoint(ut), ut.addVectors(Lt.max, rs.max), Lt.expandByPoint(ut)) : (Lt.expandByPoint(rs.min), Lt.expandByPoint(rs.max));
        }
      Lt.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        ut.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(ut));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            ut.fromBufferAttribute(a, c), l && (pi.fromBufferAttribute(e, c), ut.add(pi)), i = Math.max(i, n.distanceToSquared(ut));
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
    const l = this.getAttribute("tangent").array, c = [], h = [];
    for (let A = 0; A < a; A++)
      c[A] = new L(), h[A] = new L();
    const u = new L(), d = new L(), f = new L(), g = new le(), _ = new le(), m = new le(), p = new L(), E = new L();
    function v(A, Y, ee) {
      u.fromArray(i, A * 3), d.fromArray(i, Y * 3), f.fromArray(i, ee * 3), g.fromArray(o, A * 2), _.fromArray(o, Y * 2), m.fromArray(o, ee * 2), d.sub(u), f.sub(u), _.sub(g), m.sub(g);
      const F = 1 / (_.x * m.y - m.x * _.y);
      !isFinite(F) || (p.copy(d).multiplyScalar(m.y).addScaledVector(f, -_.y).multiplyScalar(F), E.copy(f).multiplyScalar(_.x).addScaledVector(d, -m.x).multiplyScalar(F), c[A].add(p), c[Y].add(p), c[ee].add(p), h[A].add(E), h[Y].add(E), h[ee].add(E));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, Y = y.length; A < Y; ++A) {
      const ee = y[A], F = ee.start, H = ee.count;
      for (let k = F, K = F + H; k < K; k += 3)
        v(
          n[k + 0],
          n[k + 1],
          n[k + 2]
        );
    }
    const b = new L(), C = new L(), w = new L(), N = new L();
    function M(A) {
      w.fromArray(r, A * 3), N.copy(w);
      const Y = c[A];
      b.copy(Y), b.sub(w.multiplyScalar(w.dot(Y))).normalize(), C.crossVectors(N, Y);
      const F = C.dot(h[A]) < 0 ? -1 : 1;
      l[A * 4] = b.x, l[A * 4 + 1] = b.y, l[A * 4 + 2] = b.z, l[A * 4 + 3] = F;
    }
    for (let A = 0, Y = y.length; A < Y; ++A) {
      const ee = y[A], F = ee.start, H = ee.count;
      for (let k = F, K = F + H; k < K; k += 3)
        M(n[k + 0]), M(n[k + 1]), M(n[k + 2]);
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
      const i = new L(), r = new L(), o = new L(), a = new L(), l = new L(), c = new L(), h = new L(), u = new L();
      if (e)
        for (let d = 0, f = e.count; d < f; d += 3) {
          const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, m), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
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
      ut.fromBufferAttribute(e, t), ut.normalize(), e.setXYZ(t, ut.x, ut.y, ut.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, d = new c.constructor(l.length * h);
      let f = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        a.isInterleavedBufferAttribute ? f = l[_] * a.data.stride + a.offset : f = l[_] * h;
        for (let p = 0; p < h; p++)
          d[g++] = c[f++];
      }
      return new Tt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ft(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const l = i[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], f = e(d, n);
        l.push(f);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
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
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, r = !0);
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
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let d = 0, f = u.length; d < f; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const rl = /* @__PURE__ */ new Fe(), zn = /* @__PURE__ */ new Rs(), Vs = /* @__PURE__ */ new Qt(), ol = /* @__PURE__ */ new L(), mi = /* @__PURE__ */ new L(), gi = /* @__PURE__ */ new L(), _i = /* @__PURE__ */ new L(), Kr = /* @__PURE__ */ new L(), Ws = /* @__PURE__ */ new L(), Xs = /* @__PURE__ */ new le(), $s = /* @__PURE__ */ new le(), qs = /* @__PURE__ */ new le(), al = /* @__PURE__ */ new L(), ll = /* @__PURE__ */ new L(), cl = /* @__PURE__ */ new L(), Ys = /* @__PURE__ */ new L(), js = /* @__PURE__ */ new L();
class bt extends Xe {
  constructor(e = new Ft(), t = new $n()) {
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
      Ws.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = a[l], u = r[l];
        h !== 0 && (Kr.fromBufferAttribute(u, e), o ? Ws.addScaledVector(Kr, h) : Ws.addScaledVector(Kr.sub(t), h));
      }
      t.add(Ws);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Vs.copy(n.boundingSphere), Vs.applyMatrix4(r), zn.copy(e.ray).recast(e.near), !(Vs.containsPoint(zn.origin) === !1 && (zn.intersectSphere(Vs, ol) === null || zn.origin.distanceToSquared(ol) > (e.far - e.near) ** 2)) && (rl.copy(r).invert(), zn.copy(e.ray).applyMatrix4(rl), !(n.boundingBox !== null && zn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, zn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, _ = d.length; g < _; g++) {
          const m = d[g], p = o[m.materialIndex], E = Math.max(m.start, f.start), v = Math.min(a.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = E, b = v; y < b; y += 3) {
            const C = a.getX(y), w = a.getX(y + 1), N = a.getX(y + 2);
            i = Ks(this, p, e, n, c, h, u, C, w, N), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
        for (let m = g, p = _; m < p; m += 3) {
          const E = a.getX(m), v = a.getX(m + 1), y = a.getX(m + 2);
          i = Ks(this, o, e, n, c, h, u, E, v, y), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, _ = d.length; g < _; g++) {
          const m = d[g], p = o[m.materialIndex], E = Math.max(m.start, f.start), v = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = E, b = v; y < b; y += 3) {
            const C = y, w = y + 1, N = y + 2;
            i = Ks(this, p, e, n, c, h, u, C, w, N), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count);
        for (let m = g, p = _; m < p; m += 3) {
          const E = m, v = m + 1, y = m + 2;
          i = Ks(this, o, e, n, c, h, u, E, v, y), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function id(s, e, t, n, i, r, o, a) {
  let l;
  if (e.side === wt ? l = n.intersectTriangle(o, r, i, !0, a) : l = n.intersectTriangle(i, r, o, e.side === mn, a), l === null)
    return null;
  js.copy(a), js.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(js);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: js.clone(),
    object: s
  };
}
function Ks(s, e, t, n, i, r, o, a, l, c) {
  s.getVertexPosition(a, mi), s.getVertexPosition(l, gi), s.getVertexPosition(c, _i);
  const h = id(s, e, t, n, mi, gi, _i, Ys);
  if (h) {
    i && (Xs.fromBufferAttribute(i, a), $s.fromBufferAttribute(i, l), qs.fromBufferAttribute(i, c), h.uv = kt.getInterpolation(Ys, mi, gi, _i, Xs, $s, qs, new le())), r && (Xs.fromBufferAttribute(r, a), $s.fromBufferAttribute(r, l), qs.fromBufferAttribute(r, c), h.uv1 = kt.getInterpolation(Ys, mi, gi, _i, Xs, $s, qs, new le()), h.uv2 = h.uv1), o && (al.fromBufferAttribute(o, a), ll.fromBufferAttribute(o, l), cl.fromBufferAttribute(o, c), h.normal = kt.getInterpolation(Ys, mi, gi, _i, al, ll, cl, new L()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a,
      b: l,
      c,
      normal: new L(),
      materialIndex: 0
    };
    kt.getNormal(mi, gi, _i, u.normal), h.face = u;
  }
  return h;
}
class ji extends Ft {
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
    const l = [], c = [], h = [], u = [];
    let d = 0, f = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Vt(c, 3)), this.setAttribute("normal", new Vt(h, 3)), this.setAttribute("uv", new Vt(u, 2));
    function g(_, m, p, E, v, y, b, C, w, N, M) {
      const A = y / w, Y = b / N, ee = y / 2, F = b / 2, H = C / 2, k = w + 1, K = N + 1;
      let X = 0, q = 0;
      const Q = new L();
      for (let j = 0; j < K; j++) {
        const D = j * Y - F;
        for (let G = 0; G < k; G++) {
          const ce = G * A - ee;
          Q[_] = ce * E, Q[m] = D * v, Q[p] = H, c.push(Q.x, Q.y, Q.z), Q[_] = 0, Q[m] = 0, Q[p] = C > 0 ? 1 : -1, h.push(Q.x, Q.y, Q.z), u.push(G / w), u.push(1 - j / N), X += 1;
        }
      }
      for (let j = 0; j < N; j++)
        for (let D = 0; D < w; D++) {
          const G = d + D + k * j, ce = d + D + k * (j + 1), ue = d + (D + 1) + k * (j + 1), fe = d + (D + 1) + k * j;
          l.push(G, ce, fe), l.push(ce, ue, fe), q += 6;
        }
      a.addGroup(f, q, M), f += q, d += X;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ji(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function zi(s) {
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
function St(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = zi(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function sd(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function $c(s) {
  return s.getRenderTarget() === null ? s.outputColorSpace : Zt;
}
const rd = { clone: zi, merge: St };
var od = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ad = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ei extends jt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = od, this.fragmentShader = ad, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = zi(e.uniforms), this.uniformsGroups = sd(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class qc extends Xe {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Fe(), this.projectionMatrix = new Fe(), this.projectionMatrixInverse = new Fe(), this.coordinateSystem = pn;
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
class Et extends qc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Bi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ds * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Bi * 2 * Math.atan(
      Math.tan(ds * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(ds * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const vi = -90, xi = 1;
class ld extends Xe {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null;
    const i = new Et(vi, xi, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Et(vi, xi, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Et(vi, xi, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Et(vi, xi, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Et(vi, xi, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Et(vi, xi, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, l] = t;
    for (const c of t)
      this.remove(c);
    if (e === pn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === fr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [i, r, o, a, l, c] = this.children, h = e.getRenderTarget(), u = e.xr.enabled;
    e.xr.enabled = !1;
    const d = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(h), e.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
  }
}
class Yc extends gt {
  constructor(e, t, n, i, r, o, a, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Ui, super(e, t, n, i, r, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class cd extends Qn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === In ? Ie : Zn), this.texture = new Yc(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : At;
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
    }, i = new ji(5, 5, 5), r = new ei({
      name: "CubemapFromEquirect",
      uniforms: zi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: wt,
      blending: Cn
    });
    r.uniforms.tEquirect.value = t;
    const o = new bt(i, r), a = t.minFilter;
    return t.minFilter === Jn && (t.minFilter = At), new ld(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Zr = /* @__PURE__ */ new L(), hd = /* @__PURE__ */ new L(), ud = /* @__PURE__ */ new Be();
class Vn {
  constructor(e = new L(1, 0, 0), t = 0) {
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
    const i = Zr.subVectors(n, t).cross(hd.subVectors(e, t)).normalize();
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
    const n = e.delta(Zr), i = this.normal.dot(n);
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
    const n = t || ud.getNormalMatrix(e), i = this.coplanarPoint(Zr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
const Hn = /* @__PURE__ */ new Qt(), Zs = /* @__PURE__ */ new L();
class $o {
  constructor(e = new Vn(), t = new Vn(), n = new Vn(), i = new Vn(), r = new Vn(), o = new Vn()) {
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
  setFromProjectionMatrix(e, t = pn) {
    const n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], f = i[8], g = i[9], _ = i[10], m = i[11], p = i[12], E = i[13], v = i[14], y = i[15];
    if (n[0].setComponents(l - r, d - c, m - f, y - p).normalize(), n[1].setComponents(l + r, d + c, m + f, y + p).normalize(), n[2].setComponents(l + o, d + h, m + g, y + E).normalize(), n[3].setComponents(l - o, d - h, m - g, y - E).normalize(), n[4].setComponents(l - a, d - u, m - _, y - v).normalize(), t === pn)
      n[5].setComponents(l + a, d + u, m + _, y + v).normalize();
    else if (t === fr)
      n[5].setComponents(a, u, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Hn);
  }
  intersectsSprite(e) {
    return Hn.center.set(0, 0, 0), Hn.radius = 0.7071067811865476, Hn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Hn);
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
      if (Zs.x = i.normal.x > 0 ? e.max.x : e.min.x, Zs.y = i.normal.y > 0 ? e.max.y : e.min.y, Zs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Zs) < 0)
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
function jc() {
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
function dd(s, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, h) {
    const u = c.array, d = c.usage, f = s.createBuffer();
    s.bindBuffer(h, f), s.bufferData(h, u, d), c.onUploadCallback();
    let g;
    if (u instanceof Float32Array)
      g = s.FLOAT;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
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
      version: c.version
    };
  }
  function r(c, h, u) {
    const d = h.array, f = h.updateRange;
    s.bindBuffer(u, c), f.count === -1 ? s.bufferSubData(u, 0, d) : (t ? s.bufferSubData(
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
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (s.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0 ? n.set(c, i(c, h)) : u.version < c.version && (r(u.buffer, c, h), u.version = c.version);
  }
  return {
    get: o,
    remove: a,
    update: l
  };
}
class qo extends Ft {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, h = l + 1, u = e / a, d = t / l, f = [], g = [], _ = [], m = [];
    for (let p = 0; p < h; p++) {
      const E = p * d - o;
      for (let v = 0; v < c; v++) {
        const y = v * u - r;
        g.push(y, -E, 0), _.push(0, 0, 1), m.push(v / a), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let E = 0; E < a; E++) {
        const v = E + c * p, y = E + c * (p + 1), b = E + 1 + c * (p + 1), C = E + 1 + c * p;
        f.push(v, y, C), f.push(y, b, C);
      }
    this.setIndex(f), this.setAttribute("position", new Vt(g, 3)), this.setAttribute("normal", new Vt(_, 3)), this.setAttribute("uv", new Vt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new qo(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var fd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, pd = `#ifdef USE_ALPHAHASH
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
#endif`, md = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, gd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _d = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, vd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, xd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, yd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Md = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Sd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ed = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Td = `#ifdef USE_IRIDESCENCE
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
#endif`, Ad = `#ifdef USE_BUMPMAP
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
#endif`, bd = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, wd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Rd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Cd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ld = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Pd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Id = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ud = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Dd = `#define PI 3.141592653589793
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
} // validated`, Nd = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Od = `vec3 transformedNormal = objectNormal;
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
#endif`, Fd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Bd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, zd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Hd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Gd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", kd = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Vd = `#ifdef USE_ENVMAP
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
#endif`, Wd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Xd = `#ifdef USE_ENVMAP
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
#endif`, $d = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, qd = `#ifdef USE_ENVMAP
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
#endif`, Yd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, jd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Kd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Zd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Jd = `#ifdef USE_GRADIENTMAP
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
}`, Qd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, ef = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, tf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, nf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, sf = `uniform bool receiveShadow;
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
#endif`, rf = `#ifdef USE_ENVMAP
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
#endif`, of = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, af = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, lf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, cf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, hf = `PhysicalMaterial material;
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
#endif`, uf = `struct PhysicalMaterial {
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
}`, df = `
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
#endif`, ff = `#if defined( RE_IndirectDiffuse )
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
#endif`, pf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, mf = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, gf = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _f = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, vf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, xf = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, yf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Mf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Sf = `#if defined( USE_POINTS_UV )
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
#endif`, Ef = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Tf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Af = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, bf = `#ifdef USE_MORPHNORMALS
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
#endif`, wf = `#ifdef USE_MORPHTARGETS
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
#endif`, Rf = `#ifdef USE_MORPHTARGETS
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
#endif`, Cf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, Lf = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Pf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, If = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Uf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Df = `#ifdef USE_NORMALMAP
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
#endif`, Nf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Of = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ff = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Bf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, zf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Hf = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Gf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, kf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Vf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Wf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Xf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, $f = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, qf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Yf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, jf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Kf = `float getShadowMask() {
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
}`, Zf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Jf = `#ifdef USE_SKINNING
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
#endif`, Qf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ep = `#ifdef USE_SKINNING
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
#endif`, tp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, np = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ip = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, sp = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, rp = `#ifdef USE_TRANSMISSION
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
#endif`, op = `#ifdef USE_TRANSMISSION
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
#endif`, ap = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, lp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, cp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, hp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const up = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, dp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, pp = `#ifdef ENVMAP_TYPE_CUBE
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
}`, mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, gp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, _p = `#include <common>
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
}`, vp = `#if DEPTH_PACKING == 3200
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
}`, xp = `#define DISTANCE
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
}`, yp = `#define DISTANCE
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
}`, Mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Sp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ep = `uniform float scale;
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
}`, Tp = `uniform vec3 diffuse;
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
}`, Ap = `#include <common>
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
}`, bp = `uniform vec3 diffuse;
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
}`, wp = `#define LAMBERT
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
}`, Rp = `#define LAMBERT
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
}`, Cp = `#define MATCAP
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
}`, Lp = `#define MATCAP
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
}`, Pp = `#define NORMAL
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
}`, Ip = `#define NORMAL
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
}`, Up = `#define PHONG
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
}`, Dp = `#define PHONG
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
}`, Np = `#define STANDARD
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
}`, Op = `#define STANDARD
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
}`, Fp = `#define TOON
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
}`, Bp = `#define TOON
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
}`, zp = `uniform float size;
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
}`, Hp = `uniform vec3 diffuse;
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
}`, Gp = `#include <common>
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
}`, kp = `uniform vec3 color;
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
}`, Vp = `uniform float rotation;
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
}`, Wp = `uniform vec3 diffuse;
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
}`, Oe = {
  alphahash_fragment: fd,
  alphahash_pars_fragment: pd,
  alphamap_fragment: md,
  alphamap_pars_fragment: gd,
  alphatest_fragment: _d,
  alphatest_pars_fragment: vd,
  aomap_fragment: xd,
  aomap_pars_fragment: yd,
  begin_vertex: Md,
  beginnormal_vertex: Sd,
  bsdfs: Ed,
  iridescence_fragment: Td,
  bumpmap_pars_fragment: Ad,
  clipping_planes_fragment: bd,
  clipping_planes_pars_fragment: wd,
  clipping_planes_pars_vertex: Rd,
  clipping_planes_vertex: Cd,
  color_fragment: Ld,
  color_pars_fragment: Pd,
  color_pars_vertex: Id,
  color_vertex: Ud,
  common: Dd,
  cube_uv_reflection_fragment: Nd,
  defaultnormal_vertex: Od,
  displacementmap_pars_vertex: Fd,
  displacementmap_vertex: Bd,
  emissivemap_fragment: zd,
  emissivemap_pars_fragment: Hd,
  colorspace_fragment: Gd,
  colorspace_pars_fragment: kd,
  envmap_fragment: Vd,
  envmap_common_pars_fragment: Wd,
  envmap_pars_fragment: Xd,
  envmap_pars_vertex: $d,
  envmap_physical_pars_fragment: rf,
  envmap_vertex: qd,
  fog_vertex: Yd,
  fog_pars_vertex: jd,
  fog_fragment: Kd,
  fog_pars_fragment: Zd,
  gradientmap_pars_fragment: Jd,
  lightmap_fragment: Qd,
  lightmap_pars_fragment: ef,
  lights_lambert_fragment: tf,
  lights_lambert_pars_fragment: nf,
  lights_pars_begin: sf,
  lights_toon_fragment: of,
  lights_toon_pars_fragment: af,
  lights_phong_fragment: lf,
  lights_phong_pars_fragment: cf,
  lights_physical_fragment: hf,
  lights_physical_pars_fragment: uf,
  lights_fragment_begin: df,
  lights_fragment_maps: ff,
  lights_fragment_end: pf,
  logdepthbuf_fragment: mf,
  logdepthbuf_pars_fragment: gf,
  logdepthbuf_pars_vertex: _f,
  logdepthbuf_vertex: vf,
  map_fragment: xf,
  map_pars_fragment: yf,
  map_particle_fragment: Mf,
  map_particle_pars_fragment: Sf,
  metalnessmap_fragment: Ef,
  metalnessmap_pars_fragment: Tf,
  morphcolor_vertex: Af,
  morphnormal_vertex: bf,
  morphtarget_pars_vertex: wf,
  morphtarget_vertex: Rf,
  normal_fragment_begin: Cf,
  normal_fragment_maps: Lf,
  normal_pars_fragment: Pf,
  normal_pars_vertex: If,
  normal_vertex: Uf,
  normalmap_pars_fragment: Df,
  clearcoat_normal_fragment_begin: Nf,
  clearcoat_normal_fragment_maps: Of,
  clearcoat_pars_fragment: Ff,
  iridescence_pars_fragment: Bf,
  opaque_fragment: zf,
  packing: Hf,
  premultiplied_alpha_fragment: Gf,
  project_vertex: kf,
  dithering_fragment: Vf,
  dithering_pars_fragment: Wf,
  roughnessmap_fragment: Xf,
  roughnessmap_pars_fragment: $f,
  shadowmap_pars_fragment: qf,
  shadowmap_pars_vertex: Yf,
  shadowmap_vertex: jf,
  shadowmask_pars_fragment: Kf,
  skinbase_vertex: Zf,
  skinning_pars_vertex: Jf,
  skinning_vertex: Qf,
  skinnormal_vertex: ep,
  specularmap_fragment: tp,
  specularmap_pars_fragment: np,
  tonemapping_fragment: ip,
  tonemapping_pars_fragment: sp,
  transmission_fragment: rp,
  transmission_pars_fragment: op,
  uv_pars_fragment: ap,
  uv_pars_vertex: lp,
  uv_vertex: cp,
  worldpos_vertex: hp,
  background_vert: up,
  background_frag: dp,
  backgroundCube_vert: fp,
  backgroundCube_frag: pp,
  cube_vert: mp,
  cube_frag: gp,
  depth_vert: _p,
  depth_frag: vp,
  distanceRGBA_vert: xp,
  distanceRGBA_frag: yp,
  equirect_vert: Mp,
  equirect_frag: Sp,
  linedashed_vert: Ep,
  linedashed_frag: Tp,
  meshbasic_vert: Ap,
  meshbasic_frag: bp,
  meshlambert_vert: wp,
  meshlambert_frag: Rp,
  meshmatcap_vert: Cp,
  meshmatcap_frag: Lp,
  meshnormal_vert: Pp,
  meshnormal_frag: Ip,
  meshphong_vert: Up,
  meshphong_frag: Dp,
  meshphysical_vert: Np,
  meshphysical_frag: Op,
  meshtoon_vert: Fp,
  meshtoon_frag: Bp,
  points_vert: zp,
  points_frag: Hp,
  shadow_vert: Gp,
  shadow_frag: kp,
  sprite_vert: Vp,
  sprite_frag: Wp
}, ae = {
  common: {
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Be() }
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
    aoMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Be() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Be() },
    normalScale: { value: /* @__PURE__ */ new le(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Be() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new De(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Be() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new De(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new le(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  }
}, $t = {
  basic: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.fog
    ]),
    vertexShader: Oe.meshbasic_vert,
    fragmentShader: Oe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) }
      }
    ]),
    vertexShader: Oe.meshlambert_vert,
    fragmentShader: Oe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) },
        specular: { value: /* @__PURE__ */ new De(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Oe.meshphong_vert,
    fragmentShader: Oe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.roughnessmap,
      ae.metalnessmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.gradientmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new De(0) }
      }
    ]),
    vertexShader: Oe.meshtoon_vert,
    fragmentShader: Oe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Oe.meshmatcap_vert,
    fragmentShader: Oe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ St([
      ae.points,
      ae.fog
    ]),
    vertexShader: Oe.points_vert,
    fragmentShader: Oe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Oe.linedashed_vert,
    fragmentShader: Oe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.displacementmap
    ]),
    vertexShader: Oe.depth_vert,
    fragmentShader: Oe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshnormal_vert,
    fragmentShader: Oe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ St([
      ae.sprite,
      ae.fog
    ]),
    vertexShader: Oe.sprite_vert,
    fragmentShader: Oe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Be() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.background_vert,
    fragmentShader: Oe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.backgroundCube_vert,
    fragmentShader: Oe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Oe.cube_vert,
    fragmentShader: Oe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Oe.equirect_vert,
    fragmentShader: Oe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ St([
      ae.common,
      ae.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Oe.distanceRGBA_vert,
    fragmentShader: Oe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ St([
      ae.lights,
      ae.fog,
      {
        color: { value: /* @__PURE__ */ new De(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.shadow_vert,
    fragmentShader: Oe.shadow_frag
  }
};
$t.physical = {
  uniforms: /* @__PURE__ */ St([
    $t.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new le(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Be() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new De(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Be() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Be() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new le() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new De(0) },
      specularColor: { value: /* @__PURE__ */ new De(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Be() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Be() },
      anisotropyVector: { value: /* @__PURE__ */ new le() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Be() }
    }
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag
};
const Js = { r: 0, b: 0, g: 0 };
function Xp(s, e, t, n, i, r, o) {
  const a = new De(0);
  let l = r === !0 ? 0 : 1, c, h, u = null, d = 0, f = null;
  function g(m, p) {
    let E = !1, v = p.isScene === !0 ? p.background : null;
    switch (v && v.isTexture && (v = (p.backgroundBlurriness > 0 ? t : e).get(v)), v === null ? _(a, l) : v && v.isColor && (_(v, 1), E = !0), s.xr.getEnvironmentBlendMode()) {
      case "opaque":
        E = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, o), E = !0;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, o), E = !0;
        break;
    }
    (s.autoClear || E) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), v && (v.isCubeTexture || v.mapping === _r) ? (h === void 0 && (h = new bt(
      new ji(1, 1, 1),
      new ei({
        name: "BackgroundCubeMaterial",
        uniforms: zi($t.backgroundCube.uniforms),
        vertexShader: $t.backgroundCube.vertexShader,
        fragmentShader: $t.backgroundCube.fragmentShader,
        side: wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, w, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = v.colorSpace !== Ie, (u !== v || d !== v.version || f !== s.toneMapping) && (h.material.needsUpdate = !0, u = v, d = v.version, f = s.toneMapping), h.layers.enableAll(), m.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new bt(
      new qo(2, 2),
      new ei({
        name: "BackgroundMaterial",
        uniforms: zi($t.background.uniforms),
        vertexShader: $t.background.vertexShader,
        fragmentShader: $t.background.fragmentShader,
        side: mn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, c.material.toneMapped = v.colorSpace !== Ie, v.matrixAutoUpdate === !0 && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || f !== s.toneMapping) && (c.material.needsUpdate = !0, u = v, d = v.version, f = s.toneMapping), c.layers.enableAll(), m.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function _(m, p) {
    m.getRGB(Js, $c(s)), n.buffers.color.setClear(Js.r, Js.g, Js.b, p, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(m, p = 1) {
      a.set(m), l = p, _(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(m) {
      l = m, _(a, l);
    },
    render: g
  };
}
function $p(s, e, t, n) {
  const i = s.getParameter(s.MAX_VERTEX_ATTRIBS), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, l = m(null);
  let c = l, h = !1;
  function u(H, k, K, X, q) {
    let Q = !1;
    if (o) {
      const j = _(X, K, k);
      c !== j && (c = j, f(c.object)), Q = p(H, X, K, q), Q && E(H, X, K, q);
    } else {
      const j = k.wireframe === !0;
      (c.geometry !== X.id || c.program !== K.id || c.wireframe !== j) && (c.geometry = X.id, c.program = K.id, c.wireframe = j, Q = !0);
    }
    q !== null && t.update(q, s.ELEMENT_ARRAY_BUFFER), (Q || h) && (h = !1, N(H, k, K, X), q !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(q).buffer));
  }
  function d() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function f(H) {
    return n.isWebGL2 ? s.bindVertexArray(H) : r.bindVertexArrayOES(H);
  }
  function g(H) {
    return n.isWebGL2 ? s.deleteVertexArray(H) : r.deleteVertexArrayOES(H);
  }
  function _(H, k, K) {
    const X = K.wireframe === !0;
    let q = a[H.id];
    q === void 0 && (q = {}, a[H.id] = q);
    let Q = q[k.id];
    Q === void 0 && (Q = {}, q[k.id] = Q);
    let j = Q[X];
    return j === void 0 && (j = m(d()), Q[X] = j), j;
  }
  function m(H) {
    const k = [], K = [], X = [];
    for (let q = 0; q < i; q++)
      k[q] = 0, K[q] = 0, X[q] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: k,
      enabledAttributes: K,
      attributeDivisors: X,
      object: H,
      attributes: {},
      index: null
    };
  }
  function p(H, k, K, X) {
    const q = c.attributes, Q = k.attributes;
    let j = 0;
    const D = K.getAttributes();
    for (const G in D)
      if (D[G].location >= 0) {
        const ue = q[G];
        let fe = Q[G];
        if (fe === void 0 && (G === "instanceMatrix" && H.instanceMatrix && (fe = H.instanceMatrix), G === "instanceColor" && H.instanceColor && (fe = H.instanceColor)), ue === void 0 || ue.attribute !== fe || fe && ue.data !== fe.data)
          return !0;
        j++;
      }
    return c.attributesNum !== j || c.index !== X;
  }
  function E(H, k, K, X) {
    const q = {}, Q = k.attributes;
    let j = 0;
    const D = K.getAttributes();
    for (const G in D)
      if (D[G].location >= 0) {
        let ue = Q[G];
        ue === void 0 && (G === "instanceMatrix" && H.instanceMatrix && (ue = H.instanceMatrix), G === "instanceColor" && H.instanceColor && (ue = H.instanceColor));
        const fe = {};
        fe.attribute = ue, ue && ue.data && (fe.data = ue.data), q[G] = fe, j++;
      }
    c.attributes = q, c.attributesNum = j, c.index = X;
  }
  function v() {
    const H = c.newAttributes;
    for (let k = 0, K = H.length; k < K; k++)
      H[k] = 0;
  }
  function y(H) {
    b(H, 0);
  }
  function b(H, k) {
    const K = c.newAttributes, X = c.enabledAttributes, q = c.attributeDivisors;
    K[H] = 1, X[H] === 0 && (s.enableVertexAttribArray(H), X[H] = 1), q[H] !== k && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](H, k), q[H] = k);
  }
  function C() {
    const H = c.newAttributes, k = c.enabledAttributes;
    for (let K = 0, X = k.length; K < X; K++)
      k[K] !== H[K] && (s.disableVertexAttribArray(K), k[K] = 0);
  }
  function w(H, k, K, X, q, Q, j) {
    j === !0 ? s.vertexAttribIPointer(H, k, K, q, Q) : s.vertexAttribPointer(H, k, K, X, q, Q);
  }
  function N(H, k, K, X) {
    if (n.isWebGL2 === !1 && (H.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    v();
    const q = X.attributes, Q = K.getAttributes(), j = k.defaultAttributeValues;
    for (const D in Q) {
      const G = Q[D];
      if (G.location >= 0) {
        let ce = q[D];
        if (ce === void 0 && (D === "instanceMatrix" && H.instanceMatrix && (ce = H.instanceMatrix), D === "instanceColor" && H.instanceColor && (ce = H.instanceColor)), ce !== void 0) {
          const ue = ce.normalized, fe = ce.itemSize, Se = t.get(ce);
          if (Se === void 0)
            continue;
          const Ee = Se.buffer, Te = Se.type, $e = Se.bytesPerElement, Qe = n.isWebGL2 === !0 && (Te === s.INT || Te === s.UNSIGNED_INT || ce.gpuType === Rc);
          if (ce.isInterleavedBufferAttribute) {
            const Re = ce.data, R = Re.stride, re = ce.offset;
            if (Re.isInstancedInterleavedBuffer) {
              for (let $ = 0; $ < G.locationSize; $++)
                b(G.location + $, Re.meshPerAttribute);
              H.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = Re.meshPerAttribute * Re.count);
            } else
              for (let $ = 0; $ < G.locationSize; $++)
                y(G.location + $);
            s.bindBuffer(s.ARRAY_BUFFER, Ee);
            for (let $ = 0; $ < G.locationSize; $++)
              w(
                G.location + $,
                fe / G.locationSize,
                Te,
                ue,
                R * $e,
                (re + fe / G.locationSize * $) * $e,
                Qe
              );
          } else {
            if (ce.isInstancedBufferAttribute) {
              for (let Re = 0; Re < G.locationSize; Re++)
                b(G.location + Re, ce.meshPerAttribute);
              H.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ce.meshPerAttribute * ce.count);
            } else
              for (let Re = 0; Re < G.locationSize; Re++)
                y(G.location + Re);
            s.bindBuffer(s.ARRAY_BUFFER, Ee);
            for (let Re = 0; Re < G.locationSize; Re++)
              w(
                G.location + Re,
                fe / G.locationSize,
                Te,
                ue,
                fe * $e,
                fe / G.locationSize * Re * $e,
                Qe
              );
          }
        } else if (j !== void 0) {
          const ue = j[D];
          if (ue !== void 0)
            switch (ue.length) {
              case 2:
                s.vertexAttrib2fv(G.location, ue);
                break;
              case 3:
                s.vertexAttrib3fv(G.location, ue);
                break;
              case 4:
                s.vertexAttrib4fv(G.location, ue);
                break;
              default:
                s.vertexAttrib1fv(G.location, ue);
            }
        }
      }
    }
    C();
  }
  function M() {
    ee();
    for (const H in a) {
      const k = a[H];
      for (const K in k) {
        const X = k[K];
        for (const q in X)
          g(X[q].object), delete X[q];
        delete k[K];
      }
      delete a[H];
    }
  }
  function A(H) {
    if (a[H.id] === void 0)
      return;
    const k = a[H.id];
    for (const K in k) {
      const X = k[K];
      for (const q in X)
        g(X[q].object), delete X[q];
      delete k[K];
    }
    delete a[H.id];
  }
  function Y(H) {
    for (const k in a) {
      const K = a[k];
      if (K[H.id] === void 0)
        continue;
      const X = K[H.id];
      for (const q in X)
        g(X[q].object), delete X[q];
      delete K[H.id];
    }
  }
  function ee() {
    F(), h = !0, c !== l && (c = l, f(c.object));
  }
  function F() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: u,
    reset: ee,
    resetDefaultState: F,
    dispose: M,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: Y,
    initAttributes: v,
    enableAttribute: y,
    disableUnusedAttributes: C
  };
}
function qp(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(c) {
    r = c;
  }
  function a(c, h) {
    s.drawArrays(r, c, h), t.update(h, r, 1);
  }
  function l(c, h, u) {
    if (u === 0)
      return;
    let d, f;
    if (i)
      d = s, f = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[f](r, c, h, u), t.update(h, r, u);
  }
  this.setMode = o, this.render = a, this.renderInstances = l;
}
function Yp(s, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(w) {
    if (w === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && s.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = r(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), d = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), f = s.getParameter(s.MAX_TEXTURE_SIZE), g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), _ = s.getParameter(s.MAX_VERTEX_ATTRIBS), m = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), p = s.getParameter(s.MAX_VARYING_VECTORS), E = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), v = d > 0, y = o || e.has("OES_texture_float"), b = v && y, C = o ? s.getParameter(s.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
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
    maxFragmentUniforms: E,
    vertexTextures: v,
    floatFragmentTextures: y,
    floatVertexTextures: b,
    maxSamples: C
  };
}
function jp(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const o = new Vn(), a = new Be(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
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
      r ? h(null) : c();
    else {
      const E = r ? 0 : n, v = E * 4;
      let y = p.clippingState || null;
      l.value = y, y = h(g, d, v, f);
      for (let b = 0; b !== v; ++b)
        y[b] = t[b];
      p.clippingState = y, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += E;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, f, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = l.value, g !== !0 || m === null) {
        const p = f + _ * 4, E = d.matrixWorldInverse;
        a.getNormalMatrix(E), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let v = 0, y = f; v !== _; ++v, y += 4)
          o.copy(u[v]).applyMatrix4(E, a), o.normal.toArray(m, y), m[y + 3] = o.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function Kp(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === To ? o.mapping = Ui : a === Ao && (o.mapping = Di), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === To || a === Ao)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new cd(l.height / 2);
            return c.fromEquirectangularTexture(s, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Yo extends qc {
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
    let r = n - e, o = n + e, a = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Ai = 4, hl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Xn = 20, Jr = /* @__PURE__ */ new Yo(), ul = /* @__PURE__ */ new De();
let Qr = null;
const Wn = (1 + Math.sqrt(5)) / 2, yi = 1 / Wn, dl = [
  /* @__PURE__ */ new L(1, 1, 1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(0, Wn, yi),
  /* @__PURE__ */ new L(0, Wn, -yi),
  /* @__PURE__ */ new L(yi, 0, Wn),
  /* @__PURE__ */ new L(-yi, 0, Wn),
  /* @__PURE__ */ new L(Wn, yi, 0),
  /* @__PURE__ */ new L(-Wn, yi, 0)
];
class fl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Qr = this._renderer.getRenderTarget(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = gl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ml(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Qr), e.scissorTest = !1, Qs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ui || e.mapping === Di ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Qr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: At,
      minFilter: At,
      generateMipmaps: !1,
      type: _s,
      format: Nt,
      colorSpace: Zt,
      depthBuffer: !1
    }, i = pl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = pl(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Zp(r)), this._blurMaterial = Jp(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new bt(this._lodPlanes[0], e);
    this._renderer.compile(t, Jr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Et(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(ul), h.toneMapping = Ln, h.autoClear = !1;
    const f = new $n({
      name: "PMREM.Background",
      side: wt,
      depthWrite: !1,
      depthTest: !1
    }), g = new bt(new ji(), f);
    let _ = !1;
    const m = e.background;
    m ? m.isColor && (f.color.copy(m), e.background = null, _ = !0) : (f.color.copy(ul), _ = !0);
    for (let p = 0; p < 6; p++) {
      const E = p % 3;
      E === 0 ? (a.up.set(0, l[p], 0), a.lookAt(c[p], 0, 0)) : E === 1 ? (a.up.set(0, 0, l[p]), a.lookAt(0, c[p], 0)) : (a.up.set(0, l[p], 0), a.lookAt(0, 0, c[p]));
      const v = this._cubeSize;
      Qs(i, E * v, p > 2 ? v : 0, v, v), h.setRenderTarget(i), _ && h.render(g, a), h.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Ui || e.mapping === Di;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = gl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ml());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new bt(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Qs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Jr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = dl[(i - 1) % dl.length];
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
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new bt(this._lodPlanes[i], c), d = c.uniforms, f = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Xn - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(h * _) : Xn;
    m > Xn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);
    const p = [];
    let E = 0;
    for (let w = 0; w < Xn; ++w) {
      const N = w / _, M = Math.exp(-N * N / 2);
      p.push(M), w === 0 ? E += M : w < m && (E += 2 * M);
    }
    for (let w = 0; w < p.length; w++)
      p[w] = p[w] / E;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: v } = this;
    d.dTheta.value = g, d.mipInt.value = v - n;
    const y = this._sizeLods[i], b = 3 * y * (i > v - Ai ? i - v + Ai : 0), C = 4 * (this._cubeSize - y);
    Qs(t, b, C, 3 * y, 2 * y), l.setRenderTarget(t), l.render(u, Jr);
  }
}
function Zp(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - Ai + 1 + hl.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > s - Ai ? l = hl[o - s + Ai - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, g = 6, _ = 3, m = 2, p = 1, E = new Float32Array(_ * g * f), v = new Float32Array(m * g * f), y = new Float32Array(p * g * f);
    for (let C = 0; C < f; C++) {
      const w = C % 3 * 2 / 3 - 1, N = C > 2 ? 0 : -1, M = [
        w,
        N,
        0,
        w + 2 / 3,
        N,
        0,
        w + 2 / 3,
        N + 1,
        0,
        w,
        N,
        0,
        w + 2 / 3,
        N + 1,
        0,
        w,
        N + 1,
        0
      ];
      E.set(M, _ * g * C), v.set(d, m * g * C);
      const A = [C, C, C, C, C, C];
      y.set(A, p * g * C);
    }
    const b = new Ft();
    b.setAttribute("position", new Tt(E, _)), b.setAttribute("uv", new Tt(v, m)), b.setAttribute("faceIndex", new Tt(y, p)), e.push(b), i > Ai && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function pl(s, e, t) {
  const n = new Qn(s, e, t);
  return n.texture.mapping = _r, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Qs(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Jp(s, e, t) {
  const n = new Float32Array(Xn), i = new L(0, 1, 0);
  return new ei({
    name: "SphericalGaussianBlur",
    defines: {
      n: Xn,
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
    vertexShader: jo(),
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
    blending: Cn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ml() {
  return new ei({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: jo(),
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
    blending: Cn,
    depthTest: !1,
    depthWrite: !1
  });
}
function gl() {
  return new ei({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: jo(),
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
    blending: Cn,
    depthTest: !1,
    depthWrite: !1
  });
}
function jo() {
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
function Qp(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === To || l === Ao, h = l === Ui || l === Di;
      if (c || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new fl(s)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (c && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new fl(s));
              const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", r), d.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      a[h] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function em(s) {
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
function tm(s, e, t, n) {
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
  function l(u) {
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
  function c(u) {
    const d = [], f = u.index, g = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const E = f.array;
      _ = f.version;
      for (let v = 0, y = E.length; v < y; v += 3) {
        const b = E[v + 0], C = E[v + 1], w = E[v + 2];
        d.push(b, C, C, w, w, b);
      }
    } else if (g !== void 0) {
      const E = g.array;
      _ = g.version;
      for (let v = 0, y = E.length / 3 - 1; v < y; v += 3) {
        const b = v + 0, C = v + 1, w = v + 2;
        d.push(b, C, C, w, w, b);
      }
    } else
      return;
    const m = new (zc(d) ? Xc : Wc)(d, 1);
    m.version = _;
    const p = r.get(u);
    p && e.remove(p), r.set(u, m);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && c(u);
    } else
      c(u);
    return r.get(u);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: h
  };
}
function nm(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(d) {
    r = d;
  }
  let a, l;
  function c(d) {
    a = d.type, l = d.bytesPerElement;
  }
  function h(d, f) {
    s.drawElements(r, f, a, d * l), t.update(f, r, 1);
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
    _[m](r, f, a, d * l, g), t.update(f, r, g);
  }
  this.setMode = o, this.setIndex = c, this.render = h, this.renderInstances = u;
}
function im(s) {
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
function sm(s, e) {
  return s[0] - e[0];
}
function rm(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function om(s, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new je(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, h, u) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, _ = g !== void 0 ? g.length : 0;
      let m = r.get(h);
      if (m === void 0 || m.count !== _) {
        let k = function() {
          F.dispose(), r.delete(h), h.removeEventListener("dispose", k);
        };
        var f = k;
        m !== void 0 && m.texture.dispose();
        const v = h.morphAttributes.position !== void 0, y = h.morphAttributes.normal !== void 0, b = h.morphAttributes.color !== void 0, C = h.morphAttributes.position || [], w = h.morphAttributes.normal || [], N = h.morphAttributes.color || [];
        let M = 0;
        v === !0 && (M = 1), y === !0 && (M = 2), b === !0 && (M = 3);
        let A = h.attributes.position.count * M, Y = 1;
        A > e.maxTextureSize && (Y = Math.ceil(A / e.maxTextureSize), A = e.maxTextureSize);
        const ee = new Float32Array(A * Y * 4 * _), F = new kc(ee, A, Y, _);
        F.type = fn, F.needsUpdate = !0;
        const H = M * 4;
        for (let K = 0; K < _; K++) {
          const X = C[K], q = w[K], Q = N[K], j = A * Y * 4 * K;
          for (let D = 0; D < X.count; D++) {
            const G = D * H;
            v === !0 && (o.fromBufferAttribute(X, D), ee[j + G + 0] = o.x, ee[j + G + 1] = o.y, ee[j + G + 2] = o.z, ee[j + G + 3] = 0), y === !0 && (o.fromBufferAttribute(q, D), ee[j + G + 4] = o.x, ee[j + G + 5] = o.y, ee[j + G + 6] = o.z, ee[j + G + 7] = 0), b === !0 && (o.fromBufferAttribute(Q, D), ee[j + G + 8] = o.x, ee[j + G + 9] = o.y, ee[j + G + 10] = o.z, ee[j + G + 11] = Q.itemSize === 4 ? o.w : 1);
          }
        }
        m = {
          count: _,
          texture: F,
          size: new le(A, Y)
        }, r.set(h, m), h.addEventListener("dispose", k);
      }
      let p = 0;
      for (let v = 0; v < d.length; v++)
        p += d[v];
      const E = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(s, "morphTargetBaseInfluence", E), u.getUniforms().setValue(s, "morphTargetInfluences", d), u.getUniforms().setValue(s, "morphTargetsTexture", m.texture, t), u.getUniforms().setValue(s, "morphTargetsTextureSize", m.size);
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
        const b = _[y];
        b[0] = y, b[1] = d[y];
      }
      _.sort(rm);
      for (let y = 0; y < 8; y++)
        y < g && _[y][1] ? (a[y][0] = _[y][0], a[y][1] = _[y][1]) : (a[y][0] = Number.MAX_SAFE_INTEGER, a[y][1] = 0);
      a.sort(sm);
      const m = h.morphAttributes.position, p = h.morphAttributes.normal;
      let E = 0;
      for (let y = 0; y < 8; y++) {
        const b = a[y], C = b[0], w = b[1];
        C !== Number.MAX_SAFE_INTEGER && w ? (m && h.getAttribute("morphTarget" + y) !== m[C] && h.setAttribute("morphTarget" + y, m[C]), p && h.getAttribute("morphNormal" + y) !== p[C] && h.setAttribute("morphNormal" + y, p[C]), i[y] = w, E += w) : (m && h.hasAttribute("morphTarget" + y) === !0 && h.deleteAttribute("morphTarget" + y), p && h.hasAttribute("morphNormal" + y) === !0 && h.deleteAttribute("morphNormal" + y), i[y] = 0);
      }
      const v = h.morphTargetsRelative ? 1 : 1 - E;
      u.getUniforms().setValue(s, "morphTargetBaseInfluence", v), u.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function am(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: o
  };
}
const Kc = /* @__PURE__ */ new gt(), Zc = /* @__PURE__ */ new kc(), Jc = /* @__PURE__ */ new qu(), Qc = /* @__PURE__ */ new Yc(), _l = [], vl = [], xl = new Float32Array(16), yl = new Float32Array(9), Ml = new Float32Array(4);
function Ki(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0)
    return s;
  const i = e * t;
  let r = _l[i];
  if (r === void 0 && (r = new Float32Array(i), _l[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, s[o].toArray(r, a);
  }
  return r;
}
function ct(s, e) {
  if (s.length !== e.length)
    return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t])
      return !1;
  return !0;
}
function ht(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function xr(s, e) {
  let t = vl[e];
  t === void 0 && (t = new Int32Array(e), vl[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function lm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function cm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e))
      return;
    s.uniform2fv(this.addr, e), ht(t, e);
  }
}
function hm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ct(t, e))
      return;
    s.uniform3fv(this.addr, e), ht(t, e);
  }
}
function um(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e))
      return;
    s.uniform4fv(this.addr, e), ht(t, e);
  }
}
function dm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e))
      return;
    s.uniformMatrix2fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n))
      return;
    Ml.set(n), s.uniformMatrix2fv(this.addr, !1, Ml), ht(t, n);
  }
}
function fm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e))
      return;
    s.uniformMatrix3fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n))
      return;
    yl.set(n), s.uniformMatrix3fv(this.addr, !1, yl), ht(t, n);
  }
}
function pm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e))
      return;
    s.uniformMatrix4fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n))
      return;
    xl.set(n), s.uniformMatrix4fv(this.addr, !1, xl), ht(t, n);
  }
}
function mm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function gm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e))
      return;
    s.uniform2iv(this.addr, e), ht(t, e);
  }
}
function _m(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ct(t, e))
      return;
    s.uniform3iv(this.addr, e), ht(t, e);
  }
}
function vm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e))
      return;
    s.uniform4iv(this.addr, e), ht(t, e);
  }
}
function xm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function ym(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e))
      return;
    s.uniform2uiv(this.addr, e), ht(t, e);
  }
}
function Mm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ct(t, e))
      return;
    s.uniform3uiv(this.addr, e), ht(t, e);
  }
}
function Sm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e))
      return;
    s.uniform4uiv(this.addr, e), ht(t, e);
  }
}
function Em(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Kc, i);
}
function Tm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Jc, i);
}
function Am(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Qc, i);
}
function bm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Zc, i);
}
function wm(s) {
  switch (s) {
    case 5126:
      return lm;
    case 35664:
      return cm;
    case 35665:
      return hm;
    case 35666:
      return um;
    case 35674:
      return dm;
    case 35675:
      return fm;
    case 35676:
      return pm;
    case 5124:
    case 35670:
      return mm;
    case 35667:
    case 35671:
      return gm;
    case 35668:
    case 35672:
      return _m;
    case 35669:
    case 35673:
      return vm;
    case 5125:
      return xm;
    case 36294:
      return ym;
    case 36295:
      return Mm;
    case 36296:
      return Sm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Em;
    case 35679:
    case 36299:
    case 36307:
      return Tm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Am;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return bm;
  }
}
function Rm(s, e) {
  s.uniform1fv(this.addr, e);
}
function Cm(s, e) {
  const t = Ki(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Lm(s, e) {
  const t = Ki(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Pm(s, e) {
  const t = Ki(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Im(s, e) {
  const t = Ki(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function Um(s, e) {
  const t = Ki(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Dm(s, e) {
  const t = Ki(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Nm(s, e) {
  s.uniform1iv(this.addr, e);
}
function Om(s, e) {
  s.uniform2iv(this.addr, e);
}
function Fm(s, e) {
  s.uniform3iv(this.addr, e);
}
function Bm(s, e) {
  s.uniform4iv(this.addr, e);
}
function zm(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Hm(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Gm(s, e) {
  s.uniform3uiv(this.addr, e);
}
function km(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Vm(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  ct(n, r) || (s.uniform1iv(this.addr, r), ht(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || Kc, r[o]);
}
function Wm(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  ct(n, r) || (s.uniform1iv(this.addr, r), ht(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || Jc, r[o]);
}
function Xm(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  ct(n, r) || (s.uniform1iv(this.addr, r), ht(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || Qc, r[o]);
}
function $m(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  ct(n, r) || (s.uniform1iv(this.addr, r), ht(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || Zc, r[o]);
}
function qm(s) {
  switch (s) {
    case 5126:
      return Rm;
    case 35664:
      return Cm;
    case 35665:
      return Lm;
    case 35666:
      return Pm;
    case 35674:
      return Im;
    case 35675:
      return Um;
    case 35676:
      return Dm;
    case 5124:
    case 35670:
      return Nm;
    case 35667:
    case 35671:
      return Om;
    case 35668:
    case 35672:
      return Fm;
    case 35669:
    case 35673:
      return Bm;
    case 5125:
      return zm;
    case 36294:
      return Hm;
    case 36295:
      return Gm;
    case 36296:
      return km;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Vm;
    case 35679:
    case 36299:
    case 36307:
      return Wm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Xm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $m;
  }
}
class Ym {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = wm(t.type);
  }
}
class jm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = qm(t.type);
  }
}
class Km {
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
const eo = /(\w+)(\])?(\[|\.)?/g;
function Sl(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function Zm(s, e, t) {
  const n = s.name, i = n.length;
  for (eo.lastIndex = 0; ; ) {
    const r = eo.exec(n), o = eo.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
      Sl(t, c === void 0 ? new Ym(a, s, e) : new jm(a, s, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new Km(a), Sl(t, u)), t = u;
    }
  }
}
class cr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      Zm(r, o, this);
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
      const a = t[r], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, i);
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
function El(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
let Jm = 0;
function Qm(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function eg(s) {
  switch (s) {
    case Zt:
      return ["Linear", "( value )"];
    case Ie:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), ["Linear", "( value )"];
  }
}
function Tl(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + Qm(s.getShaderSource(e), o);
  } else
    return i;
}
function tg(s, e) {
  const t = eg(e);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function ng(s, e) {
  let t;
  switch (e) {
    case Zh:
      t = "Linear";
      break;
    case Jh:
      t = "Reinhard";
      break;
    case Qh:
      t = "OptimizedCineon";
      break;
    case Ac:
      t = "ACESFilmic";
      break;
    case eu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function ig(s) {
  return [
    s.extensionDerivatives || !!s.envMapCubeUVHeight || s.bumpMap || s.normalMapTangentSpace || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(us).join(`
`);
}
function sg(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function rg(s, e) {
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
function us(s) {
  return s !== "";
}
function Al(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function bl(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const og = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Po(s) {
  return s.replace(og, lg);
}
const ag = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"]
]);
function lg(s, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = ag.get(e);
    if (n !== void 0)
      t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Po(t);
}
const cg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function wl(s) {
  return s.replace(cg, hg);
}
function hg(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Rl(s) {
  let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function ug(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === yc ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Mc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === dn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function dg(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Ui:
      case Di:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case _r:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function fg(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Di:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function pg(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Tc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case jh:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Kh:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function mg(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function gg(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = ug(t), c = dg(t), h = fg(t), u = pg(t), d = mg(t), f = t.isWebGL2 ? "" : ig(t), g = sg(r), _ = i.createProgram();
  let m, p, E = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(us).join(`
`), m.length > 0 && (m += `
`), p = [
    f,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(us).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    Rl(t),
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
    t.shadowMapEnabled ? "#define " + l : "",
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
  ].filter(us).join(`
`), p = [
    f,
    Rl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
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
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Ln ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Ln ? Oe.tonemapping_pars_fragment : "",
    t.toneMapping !== Ln ? ng("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Oe.colorspace_pars_fragment,
    tg("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(us).join(`
`)), o = Po(o), o = Al(o, t), o = bl(o, t), a = Po(a), a = Al(a, t), a = bl(a, t), o = wl(o), a = wl(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (E = `#version 300 es
`, m = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    t.glslVersion === qa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === qa ? "" : "#define gl_FragColor pc_fragColor",
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
  const v = E + m + o, y = E + p + a, b = El(i, i.VERTEX_SHADER, v), C = El(i, i.FRAGMENT_SHADER, y);
  if (i.attachShader(_, b), i.attachShader(_, C), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_), s.debug.checkShaderErrors) {
    const M = i.getProgramInfoLog(_).trim(), A = i.getShaderInfoLog(b).trim(), Y = i.getShaderInfoLog(C).trim();
    let ee = !0, F = !0;
    if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
      if (ee = !1, typeof s.debug.onShaderError == "function")
        s.debug.onShaderError(i, _, b, C);
      else {
        const H = Tl(i, b, "vertex"), k = Tl(i, C, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Program Info Log: ` + M + `
` + H + `
` + k
        );
      }
    else
      M !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", M) : (A === "" || Y === "") && (F = !1);
    F && (this.diagnostics = {
      runnable: ee,
      programLog: M,
      vertexShader: {
        log: A,
        prefix: m
      },
      fragmentShader: {
        log: Y,
        prefix: p
      }
    });
  }
  i.deleteShader(b), i.deleteShader(C);
  let w;
  this.getUniforms = function() {
    return w === void 0 && (w = new cr(i, _)), w;
  };
  let N;
  return this.getAttributes = function() {
    return N === void 0 && (N = rg(i, _)), N;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Jm++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = b, this.fragmentShader = C, this;
}
let _g = 0;
class vg {
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
    return n === void 0 && (n = new xg(e), t.set(e, n)), n;
  }
}
class xg {
  constructor(e) {
    this.id = _g++, this.code = e, this.usedTimes = 0;
  }
}
function yg(s, e, t, n, i, r, o) {
  const a = new Xo(), l = new vg(), c = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
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
  function m(M, A, Y, ee, F) {
    const H = ee.fog, k = F.geometry, K = M.isMeshStandardMaterial ? ee.environment : null, X = (M.isMeshStandardMaterial ? t : e).get(M.envMap || K), q = !!X && X.mapping === _r ? X.image.height : null, Q = g[M.type];
    M.precision !== null && (f = i.getMaxPrecision(M.precision), f !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", f, "instead."));
    const j = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, D = j !== void 0 ? j.length : 0;
    let G = 0;
    k.morphAttributes.position !== void 0 && (G = 1), k.morphAttributes.normal !== void 0 && (G = 2), k.morphAttributes.color !== void 0 && (G = 3);
    let ce, ue, fe, Se;
    if (Q) {
      const Je = $t[Q];
      ce = Je.vertexShader, ue = Je.fragmentShader;
    } else
      ce = M.vertexShader, ue = M.fragmentShader, l.update(M), fe = l.getVertexShaderID(M), Se = l.getFragmentShaderID(M);
    const Ee = s.getRenderTarget(), Te = F.isInstancedMesh === !0, $e = !!M.map, Qe = !!M.matcap, Re = !!X, R = !!M.aoMap, re = !!M.lightMap, $ = !!M.bumpMap, ie = !!M.normalMap, Z = !!M.displacementMap, ye = !!M.emissiveMap, pe = !!M.metalnessMap, ge = !!M.roughnessMap, Ue = M.anisotropy > 0, ke = M.clearcoat > 0, nt = M.iridescence > 0, T = M.sheen > 0, x = M.transmission > 0, O = Ue && !!M.anisotropyMap, te = ke && !!M.clearcoatMap, J = ke && !!M.clearcoatNormalMap, ne = ke && !!M.clearcoatRoughnessMap, xe = nt && !!M.iridescenceMap, se = nt && !!M.iridescenceThicknessMap, B = T && !!M.sheenColorMap, be = T && !!M.sheenRoughnessMap, Me = !!M.specularMap, Ae = !!M.specularColorMap, _e = !!M.specularIntensityMap, ve = x && !!M.transmissionMap, ze = x && !!M.thicknessMap, Ze = !!M.gradientMap, P = !!M.alphaMap, he = M.alphaTest > 0, z = !!M.alphaHash, oe = !!M.extensions, de = !!k.attributes.uv1, We = !!k.attributes.uv2, et = !!k.attributes.uv3;
    let rt = Ln;
    return M.toneMapped && (Ee === null || Ee.isXRRenderTarget === !0) && (rt = s.toneMapping), {
      isWebGL2: h,
      shaderID: Q,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: ce,
      fragmentShader: ue,
      defines: M.defines,
      customVertexShaderID: fe,
      customFragmentShaderID: Se,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: f,
      instancing: Te,
      instancingColor: Te && F.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: Ee === null ? s.outputColorSpace : Ee.isXRRenderTarget === !0 ? Ee.texture.colorSpace : Zt,
      map: $e,
      matcap: Qe,
      envMap: Re,
      envMapMode: Re && X.mapping,
      envMapCubeUVHeight: q,
      aoMap: R,
      lightMap: re,
      bumpMap: $,
      normalMap: ie,
      displacementMap: d && Z,
      emissiveMap: ye,
      normalMapObjectSpace: ie && M.normalMapType === pu,
      normalMapTangentSpace: ie && M.normalMapType === Oc,
      metalnessMap: pe,
      roughnessMap: ge,
      anisotropy: Ue,
      anisotropyMap: O,
      clearcoat: ke,
      clearcoatMap: te,
      clearcoatNormalMap: J,
      clearcoatRoughnessMap: ne,
      iridescence: nt,
      iridescenceMap: xe,
      iridescenceThicknessMap: se,
      sheen: T,
      sheenColorMap: B,
      sheenRoughnessMap: be,
      specularMap: Me,
      specularColorMap: Ae,
      specularIntensityMap: _e,
      transmission: x,
      transmissionMap: ve,
      thicknessMap: ze,
      gradientMap: Ze,
      opaque: M.transparent === !1 && M.blending === wi,
      alphaMap: P,
      alphaTest: he,
      alphaHash: z,
      combine: M.combine,
      mapUv: $e && _(M.map.channel),
      aoMapUv: R && _(M.aoMap.channel),
      lightMapUv: re && _(M.lightMap.channel),
      bumpMapUv: $ && _(M.bumpMap.channel),
      normalMapUv: ie && _(M.normalMap.channel),
      displacementMapUv: Z && _(M.displacementMap.channel),
      emissiveMapUv: ye && _(M.emissiveMap.channel),
      metalnessMapUv: pe && _(M.metalnessMap.channel),
      roughnessMapUv: ge && _(M.roughnessMap.channel),
      anisotropyMapUv: O && _(M.anisotropyMap.channel),
      clearcoatMapUv: te && _(M.clearcoatMap.channel),
      clearcoatNormalMapUv: J && _(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ne && _(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xe && _(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: se && _(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: B && _(M.sheenColorMap.channel),
      sheenRoughnessMapUv: be && _(M.sheenRoughnessMap.channel),
      specularMapUv: Me && _(M.specularMap.channel),
      specularColorMapUv: Ae && _(M.specularColorMap.channel),
      specularIntensityMapUv: _e && _(M.specularIntensityMap.channel),
      transmissionMapUv: ve && _(M.transmissionMap.channel),
      thicknessMapUv: ze && _(M.thicknessMap.channel),
      alphaMapUv: P && _(M.alphaMap.channel),
      vertexTangents: !!k.attributes.tangent && (ie || Ue),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4,
      vertexUv1s: de,
      vertexUv2s: We,
      vertexUv3s: et,
      pointsUvs: F.isPoints === !0 && !!k.attributes.uv && ($e || P),
      fog: !!H,
      useFog: M.fog === !0,
      fogExp2: H && H.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: F.isSkinnedMesh === !0,
      morphTargets: k.morphAttributes.position !== void 0,
      morphNormals: k.morphAttributes.normal !== void 0,
      morphColors: k.morphAttributes.color !== void 0,
      morphTargetsCount: D,
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
      shadowMapEnabled: s.shadowMap.enabled && Y.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: rt,
      useLegacyLights: s._useLegacyLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === qt,
      flipSided: M.side === wt,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: oe && M.extensions.derivatives === !0,
      extensionFragDepth: oe && M.extensions.fragDepth === !0,
      extensionDrawBuffers: oe && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: oe && M.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
  }
  function p(M) {
    const A = [];
    if (M.shaderID ? A.push(M.shaderID) : (A.push(M.customVertexShaderID), A.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const Y in M.defines)
        A.push(Y), A.push(M.defines[Y]);
    return M.isRawShaderMaterial === !1 && (E(A, M), v(A, M), A.push(s.outputColorSpace)), A.push(M.customProgramCacheKey), A.join();
  }
  function E(M, A) {
    M.push(A.precision), M.push(A.outputColorSpace), M.push(A.envMapMode), M.push(A.envMapCubeUVHeight), M.push(A.mapUv), M.push(A.alphaMapUv), M.push(A.lightMapUv), M.push(A.aoMapUv), M.push(A.bumpMapUv), M.push(A.normalMapUv), M.push(A.displacementMapUv), M.push(A.emissiveMapUv), M.push(A.metalnessMapUv), M.push(A.roughnessMapUv), M.push(A.anisotropyMapUv), M.push(A.clearcoatMapUv), M.push(A.clearcoatNormalMapUv), M.push(A.clearcoatRoughnessMapUv), M.push(A.iridescenceMapUv), M.push(A.iridescenceThicknessMapUv), M.push(A.sheenColorMapUv), M.push(A.sheenRoughnessMapUv), M.push(A.specularMapUv), M.push(A.specularColorMapUv), M.push(A.specularIntensityMapUv), M.push(A.transmissionMapUv), M.push(A.thicknessMapUv), M.push(A.combine), M.push(A.fogExp2), M.push(A.sizeAttenuation), M.push(A.morphTargetsCount), M.push(A.morphAttributeCount), M.push(A.numDirLights), M.push(A.numPointLights), M.push(A.numSpotLights), M.push(A.numSpotLightMaps), M.push(A.numHemiLights), M.push(A.numRectAreaLights), M.push(A.numDirLightShadows), M.push(A.numPointLightShadows), M.push(A.numSpotLightShadows), M.push(A.numSpotLightShadowsWithMaps), M.push(A.shadowMapType), M.push(A.toneMapping), M.push(A.numClippingPlanes), M.push(A.numClipIntersection), M.push(A.depthPacking);
  }
  function v(M, A) {
    a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.matcap && a.enable(4), A.envMap && a.enable(5), A.normalMapObjectSpace && a.enable(6), A.normalMapTangentSpace && a.enable(7), A.clearcoat && a.enable(8), A.iridescence && a.enable(9), A.alphaTest && a.enable(10), A.vertexColors && a.enable(11), A.vertexAlphas && a.enable(12), A.vertexUv1s && a.enable(13), A.vertexUv2s && a.enable(14), A.vertexUv3s && a.enable(15), A.vertexTangents && a.enable(16), A.anisotropy && a.enable(17), M.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.skinning && a.enable(4), A.morphTargets && a.enable(5), A.morphNormals && a.enable(6), A.morphColors && a.enable(7), A.premultipliedAlpha && a.enable(8), A.shadowMapEnabled && a.enable(9), A.useLegacyLights && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), M.push(a.mask);
  }
  function y(M) {
    const A = g[M.type];
    let Y;
    if (A) {
      const ee = $t[A];
      Y = rd.clone(ee.uniforms);
    } else
      Y = M.uniforms;
    return Y;
  }
  function b(M, A) {
    let Y;
    for (let ee = 0, F = c.length; ee < F; ee++) {
      const H = c[ee];
      if (H.cacheKey === A) {
        Y = H, ++Y.usedTimes;
        break;
      }
    }
    return Y === void 0 && (Y = new gg(s, A, M, r), c.push(Y)), Y;
  }
  function C(M) {
    if (--M.usedTimes === 0) {
      const A = c.indexOf(M);
      c[A] = c[c.length - 1], c.pop(), M.destroy();
    }
  }
  function w(M) {
    l.remove(M);
  }
  function N() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: y,
    acquireProgram: b,
    releaseProgram: C,
    releaseShaderCache: w,
    programs: c,
    dispose: N
  };
}
function Mg() {
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
function Sg(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Cl(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Ll() {
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
  function l(u, d, f, g, _, m) {
    const p = o(u, d, f, g, _, m);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Sg), n.length > 1 && n.sort(d || Cl), i.length > 1 && i.sort(d || Cl);
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
    unshift: l,
    finish: h,
    sort: c
  };
}
function Eg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new Ll(), s.set(n, [o])) : i >= r.length ? (o = new Ll(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Tg() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new L(),
            color: new De()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new De(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new De(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new De(),
            groundColor: new De()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new De(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
function Ag() {
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
            shadowMapSize: new le()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new le()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new le(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let bg = 0;
function wg(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function Rg(s, e) {
  const t = new Tg(), n = Ag(), i = {
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
    i.probe.push(new L());
  const r = new L(), o = new Fe(), a = new Fe();
  function l(h, u) {
    let d = 0, f = 0, g = 0;
    for (let Y = 0; Y < 9; Y++)
      i.probe[Y].set(0, 0, 0);
    let _ = 0, m = 0, p = 0, E = 0, v = 0, y = 0, b = 0, C = 0, w = 0, N = 0;
    h.sort(wg);
    const M = u === !0 ? Math.PI : 1;
    for (let Y = 0, ee = h.length; Y < ee; Y++) {
      const F = h[Y], H = F.color, k = F.intensity, K = F.distance, X = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
      if (F.isAmbientLight)
        d += H.r * k * M, f += H.g * k * M, g += H.b * k * M;
      else if (F.isLightProbe)
        for (let q = 0; q < 9; q++)
          i.probe[q].addScaledVector(F.sh.coefficients[q], k);
      else if (F.isDirectionalLight) {
        const q = t.get(F);
        if (q.color.copy(F.color).multiplyScalar(F.intensity * M), F.castShadow) {
          const Q = F.shadow, j = n.get(F);
          j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, i.directionalShadow[_] = j, i.directionalShadowMap[_] = X, i.directionalShadowMatrix[_] = F.shadow.matrix, y++;
        }
        i.directional[_] = q, _++;
      } else if (F.isSpotLight) {
        const q = t.get(F);
        q.position.setFromMatrixPosition(F.matrixWorld), q.color.copy(H).multiplyScalar(k * M), q.distance = K, q.coneCos = Math.cos(F.angle), q.penumbraCos = Math.cos(F.angle * (1 - F.penumbra)), q.decay = F.decay, i.spot[p] = q;
        const Q = F.shadow;
        if (F.map && (i.spotLightMap[w] = F.map, w++, Q.updateMatrices(F), F.castShadow && N++), i.spotLightMatrix[p] = Q.matrix, F.castShadow) {
          const j = n.get(F);
          j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, i.spotShadow[p] = j, i.spotShadowMap[p] = X, C++;
        }
        p++;
      } else if (F.isRectAreaLight) {
        const q = t.get(F);
        q.color.copy(H).multiplyScalar(k), q.halfWidth.set(F.width * 0.5, 0, 0), q.halfHeight.set(0, F.height * 0.5, 0), i.rectArea[E] = q, E++;
      } else if (F.isPointLight) {
        const q = t.get(F);
        if (q.color.copy(F.color).multiplyScalar(F.intensity * M), q.distance = F.distance, q.decay = F.decay, F.castShadow) {
          const Q = F.shadow, j = n.get(F);
          j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, j.shadowCameraNear = Q.camera.near, j.shadowCameraFar = Q.camera.far, i.pointShadow[m] = j, i.pointShadowMap[m] = X, i.pointShadowMatrix[m] = F.shadow.matrix, b++;
        }
        i.point[m] = q, m++;
      } else if (F.isHemisphereLight) {
        const q = t.get(F);
        q.skyColor.copy(F.color).multiplyScalar(k * M), q.groundColor.copy(F.groundColor).multiplyScalar(k * M), i.hemi[v] = q, v++;
      }
    }
    E > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ae.LTC_FLOAT_1, i.rectAreaLTC2 = ae.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ae.LTC_HALF_1, i.rectAreaLTC2 = ae.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = g;
    const A = i.hash;
    (A.directionalLength !== _ || A.pointLength !== m || A.spotLength !== p || A.rectAreaLength !== E || A.hemiLength !== v || A.numDirectionalShadows !== y || A.numPointShadows !== b || A.numSpotShadows !== C || A.numSpotMaps !== w) && (i.directional.length = _, i.spot.length = p, i.rectArea.length = E, i.point.length = m, i.hemi.length = v, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = C, i.spotShadowMap.length = C, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = b, i.spotLightMatrix.length = C + w - N, i.spotLightMap.length = w, i.numSpotLightShadowsWithMaps = N, A.directionalLength = _, A.pointLength = m, A.spotLength = p, A.rectAreaLength = E, A.hemiLength = v, A.numDirectionalShadows = y, A.numPointShadows = b, A.numSpotShadows = C, A.numSpotMaps = w, i.version = bg++);
  }
  function c(h, u) {
    let d = 0, f = 0, g = 0, _ = 0, m = 0;
    const p = u.matrixWorldInverse;
    for (let E = 0, v = h.length; E < v; E++) {
      const y = h[E];
      if (y.isDirectionalLight) {
        const b = i.directional[d];
        b.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(p), d++;
      } else if (y.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(p), b.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(p), g++;
      } else if (y.isRectAreaLight) {
        const b = i.rectArea[_];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(p), a.identity(), o.copy(y.matrixWorld), o.premultiply(p), a.extractRotation(o), b.halfWidth.set(y.width * 0.5, 0, 0), b.halfHeight.set(0, y.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), _++;
      } else if (y.isPointLight) {
        const b = i.point[f];
        b.position.setFromMatrixPosition(y.matrixWorld), b.position.applyMatrix4(p), f++;
      } else if (y.isHemisphereLight) {
        const b = i.hemi[m];
        b.direction.setFromMatrixPosition(y.matrixWorld), b.direction.transformDirection(p), m++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function Pl(s, e) {
  const t = new Rg(s, e), n = [], i = [];
  function r() {
    n.length = 0, i.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
    i.push(u);
  }
  function l(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a
  };
}
function Cg(s, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let l;
    return a === void 0 ? (l = new Pl(s, e), t.set(r, [l])) : o >= a.length ? (l = new Pl(s, e), a.push(l)) : l = a[o], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Lg extends jt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = du, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Pg extends jt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Ig = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ug = `uniform sampler2D shadow_pass;
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
function Dg(s, e, t) {
  let n = new $o();
  const i = new le(), r = new le(), o = new je(), a = new Lg({ depthPacking: fu }), l = new Pg(), c = {}, h = t.maxTextureSize, u = { [mn]: wt, [wt]: mn, [qt]: qt }, d = new ei({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new le() },
      radius: { value: 4 }
    },
    vertexShader: Ig,
    fragmentShader: Ug
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new Ft();
  g.setAttribute(
    "position",
    new Tt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new bt(g, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = yc;
  let p = this.type;
  this.render = function(b, C, w) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || b.length === 0)
      return;
    const N = s.getRenderTarget(), M = s.getActiveCubeFace(), A = s.getActiveMipmapLevel(), Y = s.state;
    Y.setBlending(Cn), Y.buffers.color.setClear(1, 1, 1, 1), Y.buffers.depth.setTest(!0), Y.setScissorTest(!1);
    const ee = p !== dn && this.type === dn, F = p === dn && this.type !== dn;
    for (let H = 0, k = b.length; H < k; H++) {
      const K = b[H], X = K.shadow;
      if (X === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === !1 && X.needsUpdate === !1)
        continue;
      i.copy(X.mapSize);
      const q = X.getFrameExtents();
      if (i.multiply(q), r.copy(X.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / q.x), i.x = r.x * q.x, X.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / q.y), i.y = r.y * q.y, X.mapSize.y = r.y)), X.map === null || ee === !0 || F === !0) {
        const j = this.type !== dn ? { minFilter: dt, magFilter: dt } : {};
        X.map !== null && X.map.dispose(), X.map = new Qn(i.x, i.y, j), X.map.texture.name = K.name + ".shadowMap", X.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(X.map), s.clear();
      const Q = X.getViewportCount();
      for (let j = 0; j < Q; j++) {
        const D = X.getViewport(j);
        o.set(
          r.x * D.x,
          r.y * D.y,
          r.x * D.z,
          r.y * D.w
        ), Y.viewport(o), X.updateMatrices(K, j), n = X.getFrustum(), y(C, w, X.camera, K, this.type);
      }
      X.isPointLightShadow !== !0 && this.type === dn && E(X, w), X.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, s.setRenderTarget(N, M, A);
  };
  function E(b, C) {
    const w = e.update(_);
    d.defines.VSM_SAMPLES !== b.blurSamples && (d.defines.VSM_SAMPLES = b.blurSamples, f.defines.VSM_SAMPLES = b.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), b.mapPass === null && (b.mapPass = new Qn(i.x, i.y)), d.uniforms.shadow_pass.value = b.map.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, s.setRenderTarget(b.mapPass), s.clear(), s.renderBufferDirect(C, null, w, d, _, null), f.uniforms.shadow_pass.value = b.mapPass.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, s.setRenderTarget(b.map), s.clear(), s.renderBufferDirect(C, null, w, f, _, null);
  }
  function v(b, C, w, N) {
    let M = null;
    const A = w.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (A !== void 0)
      M = A;
    else if (M = w.isPointLight === !0 ? l : a, s.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const Y = M.uuid, ee = C.uuid;
      let F = c[Y];
      F === void 0 && (F = {}, c[Y] = F);
      let H = F[ee];
      H === void 0 && (H = M.clone(), F[ee] = H), M = H;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, N === dn ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : u[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, w.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const Y = s.properties.get(M);
      Y.light = w;
    }
    return M;
  }
  function y(b, C, w, N, M) {
    if (b.visible === !1)
      return;
    if (b.layers.test(C.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && M === dn) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse, b.matrixWorld);
      const ee = e.update(b), F = b.material;
      if (Array.isArray(F)) {
        const H = ee.groups;
        for (let k = 0, K = H.length; k < K; k++) {
          const X = H[k], q = F[X.materialIndex];
          if (q && q.visible) {
            const Q = v(b, q, N, M);
            s.renderBufferDirect(w, null, ee, Q, b, X);
          }
        }
      } else if (F.visible) {
        const H = v(b, F, N, M);
        s.renderBufferDirect(w, null, ee, H, b, null);
      }
    }
    const Y = b.children;
    for (let ee = 0, F = Y.length; ee < F; ee++)
      y(Y[ee], C, w, N, M);
  }
}
function Ng(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let P = !1;
    const he = new je();
    let z = null;
    const oe = new je(0, 0, 0, 0);
    return {
      setMask: function(de) {
        z !== de && !P && (s.colorMask(de, de, de, de), z = de);
      },
      setLocked: function(de) {
        P = de;
      },
      setClear: function(de, We, et, rt, xn) {
        xn === !0 && (de *= rt, We *= rt, et *= rt), he.set(de, We, et, rt), oe.equals(he) === !1 && (s.clearColor(de, We, et, rt), oe.copy(he));
      },
      reset: function() {
        P = !1, z = null, oe.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let P = !1, he = null, z = null, oe = null;
    return {
      setTest: function(de) {
        de ? Ee(s.DEPTH_TEST) : Te(s.DEPTH_TEST);
      },
      setMask: function(de) {
        he !== de && !P && (s.depthMask(de), he = de);
      },
      setFunc: function(de) {
        if (z !== de) {
          switch (de) {
            case kh:
              s.depthFunc(s.NEVER);
              break;
            case Vh:
              s.depthFunc(s.ALWAYS);
              break;
            case Wh:
              s.depthFunc(s.LESS);
              break;
            case Eo:
              s.depthFunc(s.LEQUAL);
              break;
            case Xh:
              s.depthFunc(s.EQUAL);
              break;
            case $h:
              s.depthFunc(s.GEQUAL);
              break;
            case qh:
              s.depthFunc(s.GREATER);
              break;
            case Yh:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          z = de;
        }
      },
      setLocked: function(de) {
        P = de;
      },
      setClear: function(de) {
        oe !== de && (s.clearDepth(de), oe = de);
      },
      reset: function() {
        P = !1, he = null, z = null, oe = null;
      }
    };
  }
  function o() {
    let P = !1, he = null, z = null, oe = null, de = null, We = null, et = null, rt = null, xn = null;
    return {
      setTest: function(Je) {
        P || (Je ? Ee(s.STENCIL_TEST) : Te(s.STENCIL_TEST));
      },
      setMask: function(Je) {
        he !== Je && !P && (s.stencilMask(Je), he = Je);
      },
      setFunc: function(Je, Xt, xt) {
        (z !== Je || oe !== Xt || de !== xt) && (s.stencilFunc(Je, Xt, xt), z = Je, oe = Xt, de = xt);
      },
      setOp: function(Je, Xt, xt) {
        (We !== Je || et !== Xt || rt !== xt) && (s.stencilOp(Je, Xt, xt), We = Je, et = Xt, rt = xt);
      },
      setLocked: function(Je) {
        P = Je;
      },
      setClear: function(Je) {
        xn !== Je && (s.clearStencil(Je), xn = Je);
      },
      reset: function() {
        P = !1, he = null, z = null, oe = null, de = null, We = null, et = null, rt = null, xn = null;
      }
    };
  }
  const a = new i(), l = new r(), c = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, f = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], m = null, p = !1, E = null, v = null, y = null, b = null, C = null, w = null, N = null, M = !1, A = null, Y = null, ee = null, F = null, H = null;
  const k = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1, X = 0;
  const q = s.getParameter(s.VERSION);
  q.indexOf("WebGL") !== -1 ? (X = parseFloat(/^WebGL (\d)/.exec(q)[1]), K = X >= 1) : q.indexOf("OpenGL ES") !== -1 && (X = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), K = X >= 2);
  let Q = null, j = {};
  const D = s.getParameter(s.SCISSOR_BOX), G = s.getParameter(s.VIEWPORT), ce = new je().fromArray(D), ue = new je().fromArray(G);
  function fe(P, he, z, oe) {
    const de = new Uint8Array(4), We = s.createTexture();
    s.bindTexture(P, We), s.texParameteri(P, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(P, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let et = 0; et < z; et++)
      n && (P === s.TEXTURE_3D || P === s.TEXTURE_2D_ARRAY) ? s.texImage3D(he, 0, s.RGBA, 1, 1, oe, 0, s.RGBA, s.UNSIGNED_BYTE, de) : s.texImage2D(he + et, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, de);
    return We;
  }
  const Se = {};
  Se[s.TEXTURE_2D] = fe(s.TEXTURE_2D, s.TEXTURE_2D, 1), Se[s.TEXTURE_CUBE_MAP] = fe(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Se[s.TEXTURE_2D_ARRAY] = fe(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), Se[s.TEXTURE_3D] = fe(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ee(s.DEPTH_TEST), l.setFunc(Eo), Z(!1), ye(ma), Ee(s.CULL_FACE), $(Cn);
  function Ee(P) {
    d[P] !== !0 && (s.enable(P), d[P] = !0);
  }
  function Te(P) {
    d[P] !== !1 && (s.disable(P), d[P] = !1);
  }
  function $e(P, he) {
    return f[P] !== he ? (s.bindFramebuffer(P, he), f[P] = he, n && (P === s.DRAW_FRAMEBUFFER && (f[s.FRAMEBUFFER] = he), P === s.FRAMEBUFFER && (f[s.DRAW_FRAMEBUFFER] = he)), !0) : !1;
  }
  function Qe(P, he) {
    let z = _, oe = !1;
    if (P)
      if (z = g.get(he), z === void 0 && (z = [], g.set(he, z)), P.isWebGLMultipleRenderTargets) {
        const de = P.texture;
        if (z.length !== de.length || z[0] !== s.COLOR_ATTACHMENT0) {
          for (let We = 0, et = de.length; We < et; We++)
            z[We] = s.COLOR_ATTACHMENT0 + We;
          z.length = de.length, oe = !0;
        }
      } else
        z[0] !== s.COLOR_ATTACHMENT0 && (z[0] = s.COLOR_ATTACHMENT0, oe = !0);
    else
      z[0] !== s.BACK && (z[0] = s.BACK, oe = !0);
    oe && (t.isWebGL2 ? s.drawBuffers(z) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z));
  }
  function Re(P) {
    return m !== P ? (s.useProgram(P), m = P, !0) : !1;
  }
  const R = {
    [Ei]: s.FUNC_ADD,
    [Ph]: s.FUNC_SUBTRACT,
    [Ih]: s.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    R[xa] = s.MIN, R[ya] = s.MAX;
  else {
    const P = e.get("EXT_blend_minmax");
    P !== null && (R[xa] = P.MIN_EXT, R[ya] = P.MAX_EXT);
  }
  const re = {
    [Uh]: s.ZERO,
    [Dh]: s.ONE,
    [Nh]: s.SRC_COLOR,
    [Sc]: s.SRC_ALPHA,
    [Gh]: s.SRC_ALPHA_SATURATE,
    [zh]: s.DST_COLOR,
    [Fh]: s.DST_ALPHA,
    [Oh]: s.ONE_MINUS_SRC_COLOR,
    [Ec]: s.ONE_MINUS_SRC_ALPHA,
    [Hh]: s.ONE_MINUS_DST_COLOR,
    [Bh]: s.ONE_MINUS_DST_ALPHA
  };
  function $(P, he, z, oe, de, We, et, rt) {
    if (P === Cn) {
      p === !0 && (Te(s.BLEND), p = !1);
      return;
    }
    if (p === !1 && (Ee(s.BLEND), p = !0), P !== Lh) {
      if (P !== E || rt !== M) {
        if ((v !== Ei || C !== Ei) && (s.blendEquation(s.FUNC_ADD), v = Ei, C = Ei), rt)
          switch (P) {
            case wi:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case ga:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case _a:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case va:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case wi:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case ga:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case _a:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case va:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        y = null, b = null, w = null, N = null, E = P, M = rt;
      }
      return;
    }
    de = de || he, We = We || z, et = et || oe, (he !== v || de !== C) && (s.blendEquationSeparate(R[he], R[de]), v = he, C = de), (z !== y || oe !== b || We !== w || et !== N) && (s.blendFuncSeparate(re[z], re[oe], re[We], re[et]), y = z, b = oe, w = We, N = et), E = P, M = !1;
  }
  function ie(P, he) {
    P.side === qt ? Te(s.CULL_FACE) : Ee(s.CULL_FACE);
    let z = P.side === wt;
    he && (z = !z), Z(z), P.blending === wi && P.transparent === !1 ? $(Cn) : $(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.premultipliedAlpha), l.setFunc(P.depthFunc), l.setTest(P.depthTest), l.setMask(P.depthWrite), a.setMask(P.colorWrite);
    const oe = P.stencilWrite;
    c.setTest(oe), oe && (c.setMask(P.stencilWriteMask), c.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), c.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), ge(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? Ee(s.SAMPLE_ALPHA_TO_COVERAGE) : Te(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Z(P) {
    A !== P && (P ? s.frontFace(s.CW) : s.frontFace(s.CCW), A = P);
  }
  function ye(P) {
    P !== Rh ? (Ee(s.CULL_FACE), P !== Y && (P === ma ? s.cullFace(s.BACK) : P === Ch ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : Te(s.CULL_FACE), Y = P;
  }
  function pe(P) {
    P !== ee && (K && s.lineWidth(P), ee = P);
  }
  function ge(P, he, z) {
    P ? (Ee(s.POLYGON_OFFSET_FILL), (F !== he || H !== z) && (s.polygonOffset(he, z), F = he, H = z)) : Te(s.POLYGON_OFFSET_FILL);
  }
  function Ue(P) {
    P ? Ee(s.SCISSOR_TEST) : Te(s.SCISSOR_TEST);
  }
  function ke(P) {
    P === void 0 && (P = s.TEXTURE0 + k - 1), Q !== P && (s.activeTexture(P), Q = P);
  }
  function nt(P, he, z) {
    z === void 0 && (Q === null ? z = s.TEXTURE0 + k - 1 : z = Q);
    let oe = j[z];
    oe === void 0 && (oe = { type: void 0, texture: void 0 }, j[z] = oe), (oe.type !== P || oe.texture !== he) && (Q !== z && (s.activeTexture(z), Q = z), s.bindTexture(P, he || Se[P]), oe.type = P, oe.texture = he);
  }
  function T() {
    const P = j[Q];
    P !== void 0 && P.type !== void 0 && (s.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function x() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function O() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function te() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function J() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ne() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function xe() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function se() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function B() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function be() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Me() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Ae(P) {
    ce.equals(P) === !1 && (s.scissor(P.x, P.y, P.z, P.w), ce.copy(P));
  }
  function _e(P) {
    ue.equals(P) === !1 && (s.viewport(P.x, P.y, P.z, P.w), ue.copy(P));
  }
  function ve(P, he) {
    let z = u.get(he);
    z === void 0 && (z = /* @__PURE__ */ new WeakMap(), u.set(he, z));
    let oe = z.get(P);
    oe === void 0 && (oe = s.getUniformBlockIndex(he, P.name), z.set(P, oe));
  }
  function ze(P, he) {
    const oe = u.get(he).get(P);
    h.get(he) !== oe && (s.uniformBlockBinding(he, oe, P.__bindingPointIndex), h.set(he, oe));
  }
  function Ze() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), n === !0 && (s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), d = {}, Q = null, j = {}, f = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], m = null, p = !1, E = null, v = null, y = null, b = null, C = null, w = null, N = null, M = !1, A = null, Y = null, ee = null, F = null, H = null, ce.set(0, 0, s.canvas.width, s.canvas.height), ue.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: Ee,
    disable: Te,
    bindFramebuffer: $e,
    drawBuffers: Qe,
    useProgram: Re,
    setBlending: $,
    setMaterial: ie,
    setFlipSided: Z,
    setCullFace: ye,
    setLineWidth: pe,
    setPolygonOffset: ge,
    setScissorTest: Ue,
    activeTexture: ke,
    bindTexture: nt,
    unbindTexture: T,
    compressedTexImage2D: x,
    compressedTexImage3D: O,
    texImage2D: be,
    texImage3D: Me,
    updateUBOMapping: ve,
    uniformBlockBinding: ze,
    texStorage2D: se,
    texStorage3D: B,
    texSubImage2D: te,
    texSubImage3D: J,
    compressedTexSubImage2D: ne,
    compressedTexSubImage3D: xe,
    scissor: Ae,
    viewport: _e,
    reset: Ze
  };
}
function Og(s, e, t, n, i, r, o) {
  const a = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, f = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let _;
  const m = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function E(T, x) {
    return p ? new OffscreenCanvas(T, x) : xs("canvas");
  }
  function v(T, x, O, te) {
    let J = 1;
    if ((T.width > te || T.height > te) && (J = te / Math.max(T.width, T.height)), J < 1 || x === !0)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap) {
        const ne = x ? pr : Math.floor, xe = ne(J * T.width), se = ne(J * T.height);
        _ === void 0 && (_ = E(xe, se));
        const B = O ? E(xe, se) : _;
        return B.width = xe, B.height = se, B.getContext("2d").drawImage(T, 0, 0, xe, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + T.width + "x" + T.height + ") to (" + xe + "x" + se + ")."), B;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + T.width + "x" + T.height + ")."), T;
    return T;
  }
  function y(T) {
    return Lo(T.width) && Lo(T.height);
  }
  function b(T) {
    return a ? !1 : T.wrapS !== Dt || T.wrapT !== Dt || T.minFilter !== dt && T.minFilter !== At;
  }
  function C(T, x) {
    return T.generateMipmaps && x && T.minFilter !== dt && T.minFilter !== At;
  }
  function w(T) {
    s.generateMipmap(T);
  }
  function N(T, x, O, te, J = !1) {
    if (a === !1)
      return x;
    if (T !== null) {
      if (s[T] !== void 0)
        return s[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let ne = x;
    return x === s.RED && (O === s.FLOAT && (ne = s.R32F), O === s.HALF_FLOAT && (ne = s.R16F), O === s.UNSIGNED_BYTE && (ne = s.R8)), x === s.RED_INTEGER && (O === s.UNSIGNED_BYTE && (ne = s.R8UI), O === s.UNSIGNED_SHORT && (ne = s.R16UI), O === s.UNSIGNED_INT && (ne = s.R32UI), O === s.BYTE && (ne = s.R8I), O === s.SHORT && (ne = s.R16I), O === s.INT && (ne = s.R32I)), x === s.RG && (O === s.FLOAT && (ne = s.RG32F), O === s.HALF_FLOAT && (ne = s.RG16F), O === s.UNSIGNED_BYTE && (ne = s.RG8)), x === s.RGBA && (O === s.FLOAT && (ne = s.RGBA32F), O === s.HALF_FLOAT && (ne = s.RGBA16F), O === s.UNSIGNED_BYTE && (ne = te === Ie && J === !1 ? s.SRGB8_ALPHA8 : s.RGBA8), O === s.UNSIGNED_SHORT_4_4_4_4 && (ne = s.RGBA4), O === s.UNSIGNED_SHORT_5_5_5_1 && (ne = s.RGB5_A1)), (ne === s.R16F || ne === s.R32F || ne === s.RG16F || ne === s.RG32F || ne === s.RGBA16F || ne === s.RGBA32F) && e.get("EXT_color_buffer_float"), ne;
  }
  function M(T, x, O) {
    return C(T, O) === !0 || T.isFramebufferTexture && T.minFilter !== dt && T.minFilter !== At ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1;
  }
  function A(T) {
    return T === dt || T === bo || T === lr ? s.NEAREST : s.LINEAR;
  }
  function Y(T) {
    const x = T.target;
    x.removeEventListener("dispose", Y), F(x), x.isVideoTexture && g.delete(x);
  }
  function ee(T) {
    const x = T.target;
    x.removeEventListener("dispose", ee), k(x);
  }
  function F(T) {
    const x = n.get(T);
    if (x.__webglInit === void 0)
      return;
    const O = T.source, te = m.get(O);
    if (te) {
      const J = te[x.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && H(T), Object.keys(te).length === 0 && m.delete(O);
    }
    n.remove(T);
  }
  function H(T) {
    const x = n.get(T);
    s.deleteTexture(x.__webglTexture);
    const O = T.source, te = m.get(O);
    delete te[x.__cacheKey], o.memory.textures--;
  }
  function k(T) {
    const x = T.texture, O = n.get(T), te = n.get(x);
    if (te.__webglTexture !== void 0 && (s.deleteTexture(te.__webglTexture), o.memory.textures--), T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
      for (let J = 0; J < 6; J++) {
        if (Array.isArray(O.__webglFramebuffer[J]))
          for (let ne = 0; ne < O.__webglFramebuffer[J].length; ne++)
            s.deleteFramebuffer(O.__webglFramebuffer[J][ne]);
        else
          s.deleteFramebuffer(O.__webglFramebuffer[J]);
        O.__webglDepthbuffer && s.deleteRenderbuffer(O.__webglDepthbuffer[J]);
      }
    else {
      if (Array.isArray(O.__webglFramebuffer))
        for (let J = 0; J < O.__webglFramebuffer.length; J++)
          s.deleteFramebuffer(O.__webglFramebuffer[J]);
      else
        s.deleteFramebuffer(O.__webglFramebuffer);
      if (O.__webglDepthbuffer && s.deleteRenderbuffer(O.__webglDepthbuffer), O.__webglMultisampledFramebuffer && s.deleteFramebuffer(O.__webglMultisampledFramebuffer), O.__webglColorRenderbuffer)
        for (let J = 0; J < O.__webglColorRenderbuffer.length; J++)
          O.__webglColorRenderbuffer[J] && s.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);
      O.__webglDepthRenderbuffer && s.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    }
    if (T.isWebGLMultipleRenderTargets)
      for (let J = 0, ne = x.length; J < ne; J++) {
        const xe = n.get(x[J]);
        xe.__webglTexture && (s.deleteTexture(xe.__webglTexture), o.memory.textures--), n.remove(x[J]);
      }
    n.remove(x), n.remove(T);
  }
  let K = 0;
  function X() {
    K = 0;
  }
  function q() {
    const T = K;
    return T >= l && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + l), K += 1, T;
  }
  function Q(T) {
    const x = [];
    return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join();
  }
  function j(T, x) {
    const O = n.get(T);
    if (T.isVideoTexture && ke(T), T.isRenderTargetTexture === !1 && T.version > 0 && O.__version !== T.version) {
      const te = T.image;
      if (te === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        $e(O, T, x);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, O.__webglTexture, s.TEXTURE0 + x);
  }
  function D(T, x) {
    const O = n.get(T);
    if (T.version > 0 && O.__version !== T.version) {
      $e(O, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, O.__webglTexture, s.TEXTURE0 + x);
  }
  function G(T, x) {
    const O = n.get(T);
    if (T.version > 0 && O.__version !== T.version) {
      $e(O, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, O.__webglTexture, s.TEXTURE0 + x);
  }
  function ce(T, x) {
    const O = n.get(T);
    if (T.version > 0 && O.__version !== T.version) {
      Qe(O, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, O.__webglTexture, s.TEXTURE0 + x);
  }
  const ue = {
    [Ni]: s.REPEAT,
    [Dt]: s.CLAMP_TO_EDGE,
    [dr]: s.MIRRORED_REPEAT
  }, fe = {
    [dt]: s.NEAREST,
    [bo]: s.NEAREST_MIPMAP_NEAREST,
    [lr]: s.NEAREST_MIPMAP_LINEAR,
    [At]: s.LINEAR,
    [wc]: s.LINEAR_MIPMAP_NEAREST,
    [Jn]: s.LINEAR_MIPMAP_LINEAR
  }, Se = {
    [gu]: s.NEVER,
    [Eu]: s.ALWAYS,
    [_u]: s.LESS,
    [xu]: s.LEQUAL,
    [vu]: s.EQUAL,
    [Su]: s.GEQUAL,
    [yu]: s.GREATER,
    [Mu]: s.NOTEQUAL
  };
  function Ee(T, x, O) {
    if (O ? (s.texParameteri(T, s.TEXTURE_WRAP_S, ue[x.wrapS]), s.texParameteri(T, s.TEXTURE_WRAP_T, ue[x.wrapT]), (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) && s.texParameteri(T, s.TEXTURE_WRAP_R, ue[x.wrapR]), s.texParameteri(T, s.TEXTURE_MAG_FILTER, fe[x.magFilter]), s.texParameteri(T, s.TEXTURE_MIN_FILTER, fe[x.minFilter])) : (s.texParameteri(T, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(T, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) && s.texParameteri(T, s.TEXTURE_WRAP_R, s.CLAMP_TO_EDGE), (x.wrapS !== Dt || x.wrapT !== Dt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(T, s.TEXTURE_MAG_FILTER, A(x.magFilter)), s.texParameteri(T, s.TEXTURE_MIN_FILTER, A(x.minFilter)), x.minFilter !== dt && x.minFilter !== At && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), x.compareFunction && (s.texParameteri(T, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(T, s.TEXTURE_COMPARE_FUNC, Se[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (x.magFilter === dt || x.minFilter !== lr && x.minFilter !== Jn || x.type === fn && e.has("OES_texture_float_linear") === !1 || a === !1 && x.type === _s && e.has("OES_texture_half_float_linear") === !1)
        return;
      (x.anisotropy > 1 || n.get(x).__currentAnisotropy) && (s.texParameterf(T, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy);
    }
  }
  function Te(T, x) {
    let O = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, x.addEventListener("dispose", Y));
    const te = x.source;
    let J = m.get(te);
    J === void 0 && (J = {}, m.set(te, J));
    const ne = Q(x);
    if (ne !== T.__cacheKey) {
      J[ne] === void 0 && (J[ne] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, O = !0), J[ne].usedTimes++;
      const xe = J[T.__cacheKey];
      xe !== void 0 && (J[T.__cacheKey].usedTimes--, xe.usedTimes === 0 && H(x)), T.__cacheKey = ne, T.__webglTexture = J[ne].texture;
    }
    return O;
  }
  function $e(T, x, O) {
    let te = s.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (te = s.TEXTURE_2D_ARRAY), x.isData3DTexture && (te = s.TEXTURE_3D);
    const J = Te(T, x), ne = x.source;
    t.bindTexture(te, T.__webglTexture, s.TEXTURE0 + O);
    const xe = n.get(ne);
    if (ne.version !== xe.__version || J === !0) {
      t.activeTexture(s.TEXTURE0 + O), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, s.NONE);
      const se = b(x) && y(x.image) === !1;
      let B = v(x.image, se, !1, h);
      B = nt(x, B);
      const be = y(B) || a, Me = r.convert(x.format, x.colorSpace);
      let Ae = r.convert(x.type), _e = N(x.internalFormat, Me, Ae, x.colorSpace);
      Ee(te, x, be);
      let ve;
      const ze = x.mipmaps, Ze = a && x.isVideoTexture !== !0, P = xe.__version === void 0 || J === !0, he = M(x, B, be);
      if (x.isDepthTexture)
        _e = s.DEPTH_COMPONENT, a ? x.type === fn ? _e = s.DEPTH_COMPONENT32F : x.type === Rn ? _e = s.DEPTH_COMPONENT24 : x.type === jn ? _e = s.DEPTH24_STENCIL8 : _e = s.DEPTH_COMPONENT16 : x.type === fn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), x.format === Kn && _e === s.DEPTH_COMPONENT && x.type !== Vo && x.type !== Rn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), x.type = Rn, Ae = r.convert(x.type)), x.format === Oi && _e === s.DEPTH_COMPONENT && (_e = s.DEPTH_STENCIL, x.type !== jn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), x.type = jn, Ae = r.convert(x.type))), P && (Ze ? t.texStorage2D(s.TEXTURE_2D, 1, _e, B.width, B.height) : t.texImage2D(s.TEXTURE_2D, 0, _e, B.width, B.height, 0, Me, Ae, null));
      else if (x.isDataTexture)
        if (ze.length > 0 && be) {
          Ze && P && t.texStorage2D(s.TEXTURE_2D, he, _e, ze[0].width, ze[0].height);
          for (let z = 0, oe = ze.length; z < oe; z++)
            ve = ze[z], Ze ? t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, ve.width, ve.height, Me, Ae, ve.data) : t.texImage2D(s.TEXTURE_2D, z, _e, ve.width, ve.height, 0, Me, Ae, ve.data);
          x.generateMipmaps = !1;
        } else
          Ze ? (P && t.texStorage2D(s.TEXTURE_2D, he, _e, B.width, B.height), t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, B.width, B.height, Me, Ae, B.data)) : t.texImage2D(s.TEXTURE_2D, 0, _e, B.width, B.height, 0, Me, Ae, B.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Ze && P && t.texStorage3D(s.TEXTURE_2D_ARRAY, he, _e, ze[0].width, ze[0].height, B.depth);
          for (let z = 0, oe = ze.length; z < oe; z++)
            ve = ze[z], x.format !== Nt ? Me !== null ? Ze ? t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, z, 0, 0, 0, ve.width, ve.height, B.depth, Me, ve.data, 0, 0) : t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, z, _e, ve.width, ve.height, B.depth, 0, ve.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ze ? t.texSubImage3D(s.TEXTURE_2D_ARRAY, z, 0, 0, 0, ve.width, ve.height, B.depth, Me, Ae, ve.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, z, _e, ve.width, ve.height, B.depth, 0, Me, Ae, ve.data);
        } else {
          Ze && P && t.texStorage2D(s.TEXTURE_2D, he, _e, ze[0].width, ze[0].height);
          for (let z = 0, oe = ze.length; z < oe; z++)
            ve = ze[z], x.format !== Nt ? Me !== null ? Ze ? t.compressedTexSubImage2D(s.TEXTURE_2D, z, 0, 0, ve.width, ve.height, Me, ve.data) : t.compressedTexImage2D(s.TEXTURE_2D, z, _e, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ze ? t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, ve.width, ve.height, Me, Ae, ve.data) : t.texImage2D(s.TEXTURE_2D, z, _e, ve.width, ve.height, 0, Me, Ae, ve.data);
        }
      else if (x.isDataArrayTexture)
        Ze ? (P && t.texStorage3D(s.TEXTURE_2D_ARRAY, he, _e, B.width, B.height, B.depth), t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, B.width, B.height, B.depth, Me, Ae, B.data)) : t.texImage3D(s.TEXTURE_2D_ARRAY, 0, _e, B.width, B.height, B.depth, 0, Me, Ae, B.data);
      else if (x.isData3DTexture)
        Ze ? (P && t.texStorage3D(s.TEXTURE_3D, he, _e, B.width, B.height, B.depth), t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, B.width, B.height, B.depth, Me, Ae, B.data)) : t.texImage3D(s.TEXTURE_3D, 0, _e, B.width, B.height, B.depth, 0, Me, Ae, B.data);
      else if (x.isFramebufferTexture) {
        if (P)
          if (Ze)
            t.texStorage2D(s.TEXTURE_2D, he, _e, B.width, B.height);
          else {
            let z = B.width, oe = B.height;
            for (let de = 0; de < he; de++)
              t.texImage2D(s.TEXTURE_2D, de, _e, z, oe, 0, Me, Ae, null), z >>= 1, oe >>= 1;
          }
      } else if (ze.length > 0 && be) {
        Ze && P && t.texStorage2D(s.TEXTURE_2D, he, _e, ze[0].width, ze[0].height);
        for (let z = 0, oe = ze.length; z < oe; z++)
          ve = ze[z], Ze ? t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, Me, Ae, ve) : t.texImage2D(s.TEXTURE_2D, z, _e, Me, Ae, ve);
        x.generateMipmaps = !1;
      } else
        Ze ? (P && t.texStorage2D(s.TEXTURE_2D, he, _e, B.width, B.height), t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, Me, Ae, B)) : t.texImage2D(s.TEXTURE_2D, 0, _e, Me, Ae, B);
      C(x, be) && w(te), xe.__version = ne.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function Qe(T, x, O) {
    if (x.image.length !== 6)
      return;
    const te = Te(T, x), J = x.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, T.__webglTexture, s.TEXTURE0 + O);
    const ne = n.get(J);
    if (J.version !== ne.__version || te === !0) {
      t.activeTexture(s.TEXTURE0 + O), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, s.NONE);
      const xe = x.isCompressedTexture || x.image[0].isCompressedTexture, se = x.image[0] && x.image[0].isDataTexture, B = [];
      for (let z = 0; z < 6; z++)
        !xe && !se ? B[z] = v(x.image[z], !1, !0, c) : B[z] = se ? x.image[z].image : x.image[z], B[z] = nt(x, B[z]);
      const be = B[0], Me = y(be) || a, Ae = r.convert(x.format, x.colorSpace), _e = r.convert(x.type), ve = N(x.internalFormat, Ae, _e, x.colorSpace), ze = a && x.isVideoTexture !== !0, Ze = ne.__version === void 0 || te === !0;
      let P = M(x, be, Me);
      Ee(s.TEXTURE_CUBE_MAP, x, Me);
      let he;
      if (xe) {
        ze && Ze && t.texStorage2D(s.TEXTURE_CUBE_MAP, P, ve, be.width, be.height);
        for (let z = 0; z < 6; z++) {
          he = B[z].mipmaps;
          for (let oe = 0; oe < he.length; oe++) {
            const de = he[oe];
            x.format !== Nt ? Ae !== null ? ze ? t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, oe, 0, 0, de.width, de.height, Ae, de.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, oe, ve, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ze ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, oe, 0, 0, de.width, de.height, Ae, _e, de.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, oe, ve, de.width, de.height, 0, Ae, _e, de.data);
          }
        }
      } else {
        he = x.mipmaps, ze && Ze && (he.length > 0 && P++, t.texStorage2D(s.TEXTURE_CUBE_MAP, P, ve, B[0].width, B[0].height));
        for (let z = 0; z < 6; z++)
          if (se) {
            ze ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, 0, 0, B[z].width, B[z].height, Ae, _e, B[z].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, ve, B[z].width, B[z].height, 0, Ae, _e, B[z].data);
            for (let oe = 0; oe < he.length; oe++) {
              const We = he[oe].image[z].image;
              ze ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, oe + 1, 0, 0, We.width, We.height, Ae, _e, We.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, oe + 1, ve, We.width, We.height, 0, Ae, _e, We.data);
            }
          } else {
            ze ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, 0, 0, Ae, _e, B[z]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, ve, Ae, _e, B[z]);
            for (let oe = 0; oe < he.length; oe++) {
              const de = he[oe];
              ze ? t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, oe + 1, 0, 0, Ae, _e, de.image[z]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + z, oe + 1, ve, Ae, _e, de.image[z]);
            }
          }
      }
      C(x, Me) && w(s.TEXTURE_CUBE_MAP), ne.__version = J.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function Re(T, x, O, te, J, ne) {
    const xe = r.convert(O.format, O.colorSpace), se = r.convert(O.type), B = N(O.internalFormat, xe, se, O.colorSpace);
    if (!n.get(x).__hasExternalTextures) {
      const Me = Math.max(1, x.width >> ne), Ae = Math.max(1, x.height >> ne);
      J === s.TEXTURE_3D || J === s.TEXTURE_2D_ARRAY ? t.texImage3D(J, ne, B, Me, Ae, x.depth, 0, xe, se, null) : t.texImage2D(J, ne, B, Me, Ae, 0, xe, se, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, T), Ue(x) ? d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, te, J, n.get(O).__webglTexture, 0, ge(x)) : (J === s.TEXTURE_2D || J >= s.TEXTURE_CUBE_MAP_POSITIVE_X && J <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, te, J, n.get(O).__webglTexture, ne), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function R(T, x, O) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, T), x.depthBuffer && !x.stencilBuffer) {
      let te = s.DEPTH_COMPONENT16;
      if (O || Ue(x)) {
        const J = x.depthTexture;
        J && J.isDepthTexture && (J.type === fn ? te = s.DEPTH_COMPONENT32F : J.type === Rn && (te = s.DEPTH_COMPONENT24));
        const ne = ge(x);
        Ue(x) ? d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ne, te, x.width, x.height) : s.renderbufferStorageMultisample(s.RENDERBUFFER, ne, te, x.width, x.height);
      } else
        s.renderbufferStorage(s.RENDERBUFFER, te, x.width, x.height);
      s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, T);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const te = ge(x);
      O && Ue(x) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, te, s.DEPTH24_STENCIL8, x.width, x.height) : Ue(x) ? d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, te, s.DEPTH24_STENCIL8, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, T);
    } else {
      const te = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
      for (let J = 0; J < te.length; J++) {
        const ne = te[J], xe = r.convert(ne.format, ne.colorSpace), se = r.convert(ne.type), B = N(ne.internalFormat, xe, se, ne.colorSpace), be = ge(x);
        O && Ue(x) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, be, B, x.width, x.height) : Ue(x) ? d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, be, B, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, B, x.width, x.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function re(T, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), j(x.depthTexture, 0);
    const te = n.get(x.depthTexture).__webglTexture, J = ge(x);
    if (x.depthTexture.format === Kn)
      Ue(x) ? d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, te, 0, J) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, te, 0);
    else if (x.depthTexture.format === Oi)
      Ue(x) ? d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, te, 0, J) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, te, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function $(T) {
    const x = n.get(T), O = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error("target.depthTexture not supported in Cube render targets");
      re(x.__webglFramebuffer, T);
    } else if (O) {
      x.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[te]), x.__webglDepthbuffer[te] = s.createRenderbuffer(), R(x.__webglDepthbuffer[te], T, !1);
    } else
      t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer = s.createRenderbuffer(), R(x.__webglDepthbuffer, T, !1);
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ie(T, x, O) {
    const te = n.get(T);
    x !== void 0 && Re(te.__webglFramebuffer, T, T.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), O !== void 0 && $(T);
  }
  function Z(T) {
    const x = T.texture, O = n.get(T), te = n.get(x);
    T.addEventListener("dispose", ee), T.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture === void 0 && (te.__webglTexture = s.createTexture()), te.__version = x.version, o.memory.textures++);
    const J = T.isWebGLCubeRenderTarget === !0, ne = T.isWebGLMultipleRenderTargets === !0, xe = y(T) || a;
    if (J) {
      O.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (a && x.mipmaps && x.mipmaps.length > 0) {
          O.__webglFramebuffer[se] = [];
          for (let B = 0; B < x.mipmaps.length; B++)
            O.__webglFramebuffer[se][B] = s.createFramebuffer();
        } else
          O.__webglFramebuffer[se] = s.createFramebuffer();
    } else {
      if (a && x.mipmaps && x.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let se = 0; se < x.mipmaps.length; se++)
          O.__webglFramebuffer[se] = s.createFramebuffer();
      } else
        O.__webglFramebuffer = s.createFramebuffer();
      if (ne)
        if (i.drawBuffers) {
          const se = T.texture;
          for (let B = 0, be = se.length; B < be; B++) {
            const Me = n.get(se[B]);
            Me.__webglTexture === void 0 && (Me.__webglTexture = s.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && T.samples > 0 && Ue(T) === !1) {
        const se = ne ? x : [x];
        O.__webglMultisampledFramebuffer = s.createFramebuffer(), O.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let B = 0; B < se.length; B++) {
          const be = se[B];
          O.__webglColorRenderbuffer[B] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, O.__webglColorRenderbuffer[B]);
          const Me = r.convert(be.format, be.colorSpace), Ae = r.convert(be.type), _e = N(be.internalFormat, Me, Ae, be.colorSpace, T.isXRRenderTarget === !0), ve = ge(T);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, ve, _e, T.width, T.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + B, s.RENDERBUFFER, O.__webglColorRenderbuffer[B]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), T.depthBuffer && (O.__webglDepthRenderbuffer = s.createRenderbuffer(), R(O.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (J) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, te.__webglTexture), Ee(s.TEXTURE_CUBE_MAP, x, xe);
      for (let se = 0; se < 6; se++)
        if (a && x.mipmaps && x.mipmaps.length > 0)
          for (let B = 0; B < x.mipmaps.length; B++)
            Re(O.__webglFramebuffer[se][B], T, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + se, B);
        else
          Re(O.__webglFramebuffer[se], T, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      C(x, xe) && w(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ne) {
      const se = T.texture;
      for (let B = 0, be = se.length; B < be; B++) {
        const Me = se[B], Ae = n.get(Me);
        t.bindTexture(s.TEXTURE_2D, Ae.__webglTexture), Ee(s.TEXTURE_2D, Me, xe), Re(O.__webglFramebuffer, T, Me, s.COLOR_ATTACHMENT0 + B, s.TEXTURE_2D, 0), C(Me, xe) && w(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = s.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (a ? se = T.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, te.__webglTexture), Ee(se, x, xe), a && x.mipmaps && x.mipmaps.length > 0)
        for (let B = 0; B < x.mipmaps.length; B++)
          Re(O.__webglFramebuffer[B], T, x, s.COLOR_ATTACHMENT0, se, B);
      else
        Re(O.__webglFramebuffer, T, x, s.COLOR_ATTACHMENT0, se, 0);
      C(x, xe) && w(se), t.unbindTexture();
    }
    T.depthBuffer && $(T);
  }
  function ye(T) {
    const x = y(T) || a, O = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
    for (let te = 0, J = O.length; te < J; te++) {
      const ne = O[te];
      if (C(ne, x)) {
        const xe = T.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, se = n.get(ne).__webglTexture;
        t.bindTexture(xe, se), w(xe), t.unbindTexture();
      }
    }
  }
  function pe(T) {
    if (a && T.samples > 0 && Ue(T) === !1) {
      const x = T.isWebGLMultipleRenderTargets ? T.texture : [T.texture], O = T.width, te = T.height;
      let J = s.COLOR_BUFFER_BIT;
      const ne = [], xe = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, se = n.get(T), B = T.isWebGLMultipleRenderTargets === !0;
      if (B)
        for (let be = 0; be < x.length; be++)
          t.bindFramebuffer(s.FRAMEBUFFER, se.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + be, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, se.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + be, s.TEXTURE_2D, null, 0);
      t.bindFramebuffer(s.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
      for (let be = 0; be < x.length; be++) {
        ne.push(s.COLOR_ATTACHMENT0 + be), T.depthBuffer && ne.push(xe);
        const Me = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (Me === !1 && (T.depthBuffer && (J |= s.DEPTH_BUFFER_BIT), T.stencilBuffer && (J |= s.STENCIL_BUFFER_BIT)), B && s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, se.__webglColorRenderbuffer[be]), Me === !0 && (s.invalidateFramebuffer(s.READ_FRAMEBUFFER, [xe]), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [xe])), B) {
          const Ae = n.get(x[be]).__webglTexture;
          s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Ae, 0);
        }
        s.blitFramebuffer(0, 0, O, te, 0, 0, O, te, J, s.NEAREST), f && s.invalidateFramebuffer(s.READ_FRAMEBUFFER, ne);
      }
      if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), B)
        for (let be = 0; be < x.length; be++) {
          t.bindFramebuffer(s.FRAMEBUFFER, se.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + be, s.RENDERBUFFER, se.__webglColorRenderbuffer[be]);
          const Me = n.get(x[be]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, se.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + be, s.TEXTURE_2D, Me, 0);
        }
      t.bindFramebuffer(s.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
    }
  }
  function ge(T) {
    return Math.min(u, T.samples);
  }
  function Ue(T) {
    const x = n.get(T);
    return a && T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function ke(T) {
    const x = o.render.frame;
    g.get(T) !== x && (g.set(T, x), T.update());
  }
  function nt(T, x) {
    const O = T.colorSpace, te = T.format, J = T.type;
    return T.isCompressedTexture === !0 || T.format === Co || O !== Zt && O !== Zn && (O === Ie ? a === !1 ? e.has("EXT_sRGB") === !0 && te === Nt ? (T.format = Co, T.minFilter = At, T.generateMipmaps = !1) : x = Hc.sRGBToLinear(x) : (te !== Nt || J !== Pn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), x;
  }
  this.allocateTextureUnit = q, this.resetTextureUnits = X, this.setTexture2D = j, this.setTexture2DArray = D, this.setTexture3D = G, this.setTextureCube = ce, this.rebindTextures = ie, this.setupRenderTarget = Z, this.updateRenderTargetMipmap = ye, this.updateMultisampleRenderTarget = pe, this.setupDepthRenderbuffer = $, this.setupFrameBufferTexture = Re, this.useMultisampledRTT = Ue;
}
function Fg(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = Zn) {
    let a;
    if (r === Pn)
      return s.UNSIGNED_BYTE;
    if (r === Cc)
      return s.UNSIGNED_SHORT_4_4_4_4;
    if (r === Lc)
      return s.UNSIGNED_SHORT_5_5_5_1;
    if (r === tu)
      return s.BYTE;
    if (r === nu)
      return s.SHORT;
    if (r === Vo)
      return s.UNSIGNED_SHORT;
    if (r === Rc)
      return s.INT;
    if (r === Rn)
      return s.UNSIGNED_INT;
    if (r === fn)
      return s.FLOAT;
    if (r === _s)
      return n ? s.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === iu)
      return s.ALPHA;
    if (r === Nt)
      return s.RGBA;
    if (r === su)
      return s.LUMINANCE;
    if (r === ru)
      return s.LUMINANCE_ALPHA;
    if (r === Kn)
      return s.DEPTH_COMPONENT;
    if (r === Oi)
      return s.DEPTH_STENCIL;
    if (r === Co)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === ou)
      return s.RED;
    if (r === Pc)
      return s.RED_INTEGER;
    if (r === au)
      return s.RG;
    if (r === Ic)
      return s.RG_INTEGER;
    if (r === Uc)
      return s.RGBA_INTEGER;
    if (r === Rr || r === Cr || r === Lr || r === Pr)
      if (o === Ie)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === Rr)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Cr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Lr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === Pr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === Rr)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Cr)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Lr)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Pr)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === Ma || r === Sa || r === Ea || r === Ta)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === Ma)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Sa)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Ea)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Ta)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === lu)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === Aa || r === ba)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === Aa)
          return o === Ie ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === ba)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === wa || r === Ra || r === Ca || r === La || r === Pa || r === Ia || r === Ua || r === Da || r === Na || r === Oa || r === Fa || r === Ba || r === za || r === Ha)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === wa)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Ra)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Ca)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === La)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Pa)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Ia)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Ua)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Da)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Na)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Oa)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Fa)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Ba)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === za)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Ha)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === Ir)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === Ir)
          return o === Ie ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (r === cu || r === Ga || r === ka || r === Va)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (r === Ir)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (r === Ga)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === ka)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === Va)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return r === jn ? n ? s.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null;
  }
  return { convert: i };
}
class Bg extends Et {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class qn extends Xe {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const zg = { type: "move" };
class to {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new qn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new qn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new qn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
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
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n), p = this._getHandJoint(c, _);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, g = 5e-3;
        c.inputState.pinching && d > f + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= f - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(zg)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new qn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Hg extends gt {
  constructor(e, t, n, i, r, o, a, l, c, h) {
    if (h = h !== void 0 ? h : Kn, h !== Kn && h !== Oi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Kn && (n = Rn), n === void 0 && h === Oi && (n = jn), super(null, i, r, o, a, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : dt, this.minFilter = l !== void 0 ? l : dt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Gg extends Yi {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, d = null, f = null, g = null;
    const _ = t.getContextAttributes();
    let m = null, p = null;
    const E = [], v = [], y = new Et();
    y.layers.enable(1), y.viewport = new je();
    const b = new Et();
    b.layers.enable(2), b.viewport = new je();
    const C = [y, b], w = new Bg();
    w.layers.enable(1), w.layers.enable(2);
    let N = null, M = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(D) {
      let G = E[D];
      return G === void 0 && (G = new to(), E[D] = G), G.getTargetRaySpace();
    }, this.getControllerGrip = function(D) {
      let G = E[D];
      return G === void 0 && (G = new to(), E[D] = G), G.getGripSpace();
    }, this.getHand = function(D) {
      let G = E[D];
      return G === void 0 && (G = new to(), E[D] = G), G.getHandSpace();
    };
    function A(D) {
      const G = v.indexOf(D.inputSource);
      if (G === -1)
        return;
      const ce = E[G];
      ce !== void 0 && (ce.update(D.inputSource, D.frame, c || o), ce.dispatchEvent({ type: D.type, data: D.inputSource }));
    }
    function Y() {
      i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", Y), i.removeEventListener("inputsourceschange", ee);
      for (let D = 0; D < E.length; D++) {
        const G = v[D];
        G !== null && (v[D] = null, E[D].disconnect(G));
      }
      N = null, M = null, e.setRenderTarget(m), f = null, d = null, u = null, i = null, p = null, j.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(D) {
      r = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(D) {
      a = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(D) {
      c = D;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(D) {
      if (i = D, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", Y), i.addEventListener("inputsourceschange", ee), _.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const G = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(i, t, G), i.updateRenderState({ baseLayer: f }), p = new Qn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: Nt,
              type: Pn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let G = null, ce = null, ue = null;
          _.depth && (ue = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, G = _.stencil ? Oi : Kn, ce = _.stencil ? jn : Rn);
          const fe = {
            colorFormat: t.RGBA8,
            depthFormat: ue,
            scaleFactor: r
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(fe), i.updateRenderState({ layers: [d] }), p = new Qn(
            d.textureWidth,
            d.textureHeight,
            {
              format: Nt,
              type: Pn,
              depthTexture: new Hg(d.textureWidth, d.textureHeight, ce, void 0, void 0, void 0, void 0, void 0, void 0, G),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const Se = e.properties.get(p);
          Se.__ignoreDepthValues = d.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), j.setContext(i), j.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function ee(D) {
      for (let G = 0; G < D.removed.length; G++) {
        const ce = D.removed[G], ue = v.indexOf(ce);
        ue >= 0 && (v[ue] = null, E[ue].disconnect(ce));
      }
      for (let G = 0; G < D.added.length; G++) {
        const ce = D.added[G];
        let ue = v.indexOf(ce);
        if (ue === -1) {
          for (let Se = 0; Se < E.length; Se++)
            if (Se >= v.length) {
              v.push(ce), ue = Se;
              break;
            } else if (v[Se] === null) {
              v[Se] = ce, ue = Se;
              break;
            }
          if (ue === -1)
            break;
        }
        const fe = E[ue];
        fe && fe.connect(ce);
      }
    }
    const F = new L(), H = new L();
    function k(D, G, ce) {
      F.setFromMatrixPosition(G.matrixWorld), H.setFromMatrixPosition(ce.matrixWorld);
      const ue = F.distanceTo(H), fe = G.projectionMatrix.elements, Se = ce.projectionMatrix.elements, Ee = fe[14] / (fe[10] - 1), Te = fe[14] / (fe[10] + 1), $e = (fe[9] + 1) / fe[5], Qe = (fe[9] - 1) / fe[5], Re = (fe[8] - 1) / fe[0], R = (Se[8] + 1) / Se[0], re = Ee * Re, $ = Ee * R, ie = ue / (-Re + R), Z = ie * -Re;
      G.matrixWorld.decompose(D.position, D.quaternion, D.scale), D.translateX(Z), D.translateZ(ie), D.matrixWorld.compose(D.position, D.quaternion, D.scale), D.matrixWorldInverse.copy(D.matrixWorld).invert();
      const ye = Ee + ie, pe = Te + ie, ge = re - Z, Ue = $ + (ue - Z), ke = $e * Te / pe * ye, nt = Qe * Te / pe * ye;
      D.projectionMatrix.makePerspective(ge, Ue, ke, nt, ye, pe), D.projectionMatrixInverse.copy(D.projectionMatrix).invert();
    }
    function K(D, G) {
      G === null ? D.matrixWorld.copy(D.matrix) : D.matrixWorld.multiplyMatrices(G.matrixWorld, D.matrix), D.matrixWorldInverse.copy(D.matrixWorld).invert();
    }
    this.updateCamera = function(D) {
      if (i === null)
        return;
      w.near = b.near = y.near = D.near, w.far = b.far = y.far = D.far, (N !== w.near || M !== w.far) && (i.updateRenderState({
        depthNear: w.near,
        depthFar: w.far
      }), N = w.near, M = w.far);
      const G = D.parent, ce = w.cameras;
      K(w, G);
      for (let ue = 0; ue < ce.length; ue++)
        K(ce[ue], G);
      ce.length === 2 ? k(w, y, b) : w.projectionMatrix.copy(y.projectionMatrix), X(D, w, G);
    };
    function X(D, G, ce) {
      ce === null ? D.matrix.copy(G.matrixWorld) : (D.matrix.copy(ce.matrixWorld), D.matrix.invert(), D.matrix.multiply(G.matrixWorld)), D.matrix.decompose(D.position, D.quaternion, D.scale), D.updateMatrixWorld(!0);
      const ue = D.children;
      for (let fe = 0, Se = ue.length; fe < Se; fe++)
        ue[fe].updateMatrixWorld(!0);
      D.projectionMatrix.copy(G.projectionMatrix), D.projectionMatrixInverse.copy(G.projectionMatrixInverse), D.isPerspectiveCamera && (D.fov = Bi * 2 * Math.atan(1 / D.projectionMatrix.elements[5]), D.zoom = 1);
    }
    this.getCamera = function() {
      return w;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return l;
    }, this.setFoveation = function(D) {
      l = D, d !== null && (d.fixedFoveation = D), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = D);
    };
    let q = null;
    function Q(D, G) {
      if (h = G.getViewerPose(c || o), g = G, h !== null) {
        const ce = h.views;
        f !== null && (e.setRenderTargetFramebuffer(p, f.framebuffer), e.setRenderTarget(p));
        let ue = !1;
        ce.length !== w.cameras.length && (w.cameras.length = 0, ue = !0);
        for (let fe = 0; fe < ce.length; fe++) {
          const Se = ce[fe];
          let Ee = null;
          if (f !== null)
            Ee = f.getViewport(Se);
          else {
            const $e = u.getViewSubImage(d, Se);
            Ee = $e.viewport, fe === 0 && (e.setRenderTargetTextures(
              p,
              $e.colorTexture,
              d.ignoreDepthValues ? void 0 : $e.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let Te = C[fe];
          Te === void 0 && (Te = new Et(), Te.layers.enable(fe), Te.viewport = new je(), C[fe] = Te), Te.matrix.fromArray(Se.transform.matrix), Te.matrix.decompose(Te.position, Te.quaternion, Te.scale), Te.projectionMatrix.fromArray(Se.projectionMatrix), Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(), Te.viewport.set(Ee.x, Ee.y, Ee.width, Ee.height), fe === 0 && (w.matrix.copy(Te.matrix), w.matrix.decompose(w.position, w.quaternion, w.scale)), ue === !0 && w.cameras.push(Te);
        }
      }
      for (let ce = 0; ce < E.length; ce++) {
        const ue = v[ce], fe = E[ce];
        ue !== null && fe !== void 0 && fe.update(ue, G, c || o);
      }
      q && q(D, G), G.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: G }), g = null;
    }
    const j = new jc();
    j.setAnimationLoop(Q), this.setAnimationLoop = function(D) {
      q = D;
    }, this.dispose = function() {
    };
  }
}
function kg(s, e) {
  function t(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, $c(s)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function i(m, p, E, v, y) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), u(m, p)) : p.isMeshPhongMaterial ? (r(m, p), h(m, p)) : p.isMeshStandardMaterial ? (r(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, y)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), _(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (o(m, p), p.isLineDashedMaterial && a(m, p)) : p.isPointsMaterial ? l(m, p, E, v) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === wt && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === wt && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const E = e.get(p).envMap;
    if (E && (m.envMap.value = E, m.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap) {
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
  function l(m, p, E, v) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * E, m.scale.value = v * 0.5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
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
  function f(m, p, E) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === wt && m.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = E.texture, m.transmissionSamplerSize.value.set(E.width, E.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function _(m, p) {
    const E = e.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(E.matrixWorld), m.nearDistance.value = E.shadow.camera.near, m.farDistance.value = E.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Vg(s, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = t.isWebGL2 ? s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(E, v) {
    const y = v.program;
    n.uniformBlockBinding(E, y);
  }
  function c(E, v) {
    let y = i[E.id];
    y === void 0 && (g(E), y = h(E), i[E.id] = y, E.addEventListener("dispose", m));
    const b = v.program;
    n.updateUBOMapping(E, b);
    const C = e.render.frame;
    r[E.id] !== C && (d(E), r[E.id] = C);
  }
  function h(E) {
    const v = u();
    E.__bindingPointIndex = v;
    const y = s.createBuffer(), b = E.__size, C = E.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, y), s.bufferData(s.UNIFORM_BUFFER, b, C), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, v, y), y;
  }
  function u() {
    for (let E = 0; E < a; E++)
      if (o.indexOf(E) === -1)
        return o.push(E), E;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(E) {
    const v = i[E.id], y = E.uniforms, b = E.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, v);
    for (let C = 0, w = y.length; C < w; C++) {
      const N = y[C];
      if (f(N, C, b) === !0) {
        const M = N.__offset, A = Array.isArray(N.value) ? N.value : [N.value];
        let Y = 0;
        for (let ee = 0; ee < A.length; ee++) {
          const F = A[ee], H = _(F);
          typeof F == "number" ? (N.__data[0] = F, s.bufferSubData(s.UNIFORM_BUFFER, M + Y, N.__data)) : F.isMatrix3 ? (N.__data[0] = F.elements[0], N.__data[1] = F.elements[1], N.__data[2] = F.elements[2], N.__data[3] = F.elements[0], N.__data[4] = F.elements[3], N.__data[5] = F.elements[4], N.__data[6] = F.elements[5], N.__data[7] = F.elements[0], N.__data[8] = F.elements[6], N.__data[9] = F.elements[7], N.__data[10] = F.elements[8], N.__data[11] = F.elements[0]) : (F.toArray(N.__data, Y), Y += H.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        s.bufferSubData(s.UNIFORM_BUFFER, M, N.__data);
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function f(E, v, y) {
    const b = E.value;
    if (y[v] === void 0) {
      if (typeof b == "number")
        y[v] = b;
      else {
        const C = Array.isArray(b) ? b : [b], w = [];
        for (let N = 0; N < C.length; N++)
          w.push(C[N].clone());
        y[v] = w;
      }
      return !0;
    } else if (typeof b == "number") {
      if (y[v] !== b)
        return y[v] = b, !0;
    } else {
      const C = Array.isArray(y[v]) ? y[v] : [y[v]], w = Array.isArray(b) ? b : [b];
      for (let N = 0; N < C.length; N++) {
        const M = C[N];
        if (M.equals(w[N]) === !1)
          return M.copy(w[N]), !0;
      }
    }
    return !1;
  }
  function g(E) {
    const v = E.uniforms;
    let y = 0;
    const b = 16;
    let C = 0;
    for (let w = 0, N = v.length; w < N; w++) {
      const M = v[w], A = {
        boundary: 0,
        storage: 0
      }, Y = Array.isArray(M.value) ? M.value : [M.value];
      for (let ee = 0, F = Y.length; ee < F; ee++) {
        const H = Y[ee], k = _(H);
        A.boundary += k.boundary, A.storage += k.storage;
      }
      if (M.__data = new Float32Array(A.storage / Float32Array.BYTES_PER_ELEMENT), M.__offset = y, w > 0) {
        C = y % b;
        const ee = b - C;
        C !== 0 && ee - A.boundary < 0 && (y += b - C, M.__offset = y);
      }
      y += A.storage;
    }
    return C = y % b, C > 0 && (y += b - C), E.__size = y, E.__cache = {}, this;
  }
  function _(E) {
    const v = {
      boundary: 0,
      storage: 0
    };
    return typeof E == "number" ? (v.boundary = 4, v.storage = 4) : E.isVector2 ? (v.boundary = 8, v.storage = 8) : E.isVector3 || E.isColor ? (v.boundary = 16, v.storage = 12) : E.isVector4 ? (v.boundary = 16, v.storage = 16) : E.isMatrix3 ? (v.boundary = 48, v.storage = 48) : E.isMatrix4 ? (v.boundary = 64, v.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), v;
  }
  function m(E) {
    const v = E.target;
    v.removeEventListener("dispose", m);
    const y = o.indexOf(v.__bindingPointIndex);
    o.splice(y, 1), s.deleteBuffer(i[v.id]), delete i[v.id], delete r[v.id];
  }
  function p() {
    for (const E in i)
      s.deleteBuffer(i[E]);
    o = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
function Wg() {
  const s = xs("canvas");
  return s.style.display = "block", s;
}
class eh {
  constructor(e = {}) {
    const {
      canvas: t = Wg(),
      context: n = null,
      depth: i = !0,
      stencil: r = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = o;
    const f = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, m = null;
    const p = [], E = [];
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = Ie, this._useLegacyLights = !1, this.toneMapping = Ln, this.toneMappingExposure = 1;
    const v = this;
    let y = !1, b = 0, C = 0, w = null, N = -1, M = null;
    const A = new je(), Y = new je();
    let ee = null;
    const F = new De(0);
    let H = 0, k = t.width, K = t.height, X = 1, q = null, Q = null;
    const j = new je(0, 0, k, K), D = new je(0, 0, k, K);
    let G = !1;
    const ce = new $o();
    let ue = !1, fe = !1, Se = null;
    const Ee = new Fe(), Te = new le(), $e = new L(), Qe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Re() {
      return w === null ? X : 1;
    }
    let R = n;
    function re(S, U) {
      for (let W = 0; W < S.length; W++) {
        const I = S[W], V = t.getContext(I, U);
        if (V !== null)
          return V;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ko}`), t.addEventListener("webglcontextlost", he, !1), t.addEventListener("webglcontextrestored", z, !1), t.addEventListener("webglcontextcreationerror", oe, !1), R === null) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if (v.isWebGL1Renderer === !0 && U.shift(), R = re(U, S), R === null)
          throw re(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && R instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), R.getShaderPrecisionFormat === void 0 && (R.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let $, ie, Z, ye, pe, ge, Ue, ke, nt, T, x, O, te, J, ne, xe, se, B, be, Me, Ae, _e, ve, ze;
    function Ze() {
      $ = new em(R), ie = new Yp(R, $, e), $.init(ie), _e = new Fg(R, $, ie), Z = new Ng(R, $, ie), ye = new im(R), pe = new Mg(), ge = new Og(R, $, Z, pe, ie, _e, ye), Ue = new Kp(v), ke = new Qp(v), nt = new dd(R, ie), ve = new $p(R, $, nt, ie), T = new tm(R, nt, ye, ve), x = new am(R, T, nt, ye), be = new om(R, ie, ge), xe = new jp(pe), O = new yg(v, Ue, ke, $, ie, ve, xe), te = new kg(v, pe), J = new Eg(), ne = new Cg($, ie), B = new Xp(v, Ue, ke, Z, x, d, l), se = new Dg(v, x, ie), ze = new Vg(R, ye, ie, Z), Me = new qp(R, $, ye, ie), Ae = new nm(R, $, ye, ie), ye.programs = O.programs, v.capabilities = ie, v.extensions = $, v.properties = pe, v.renderLists = J, v.shadowMap = se, v.state = Z, v.info = ye;
    }
    Ze();
    const P = new Gg(v, R);
    this.xr = P, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = $.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = $.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return X;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (X = S, this.setSize(k, K, !1));
    }, this.getSize = function(S) {
      return S.set(k, K);
    }, this.setSize = function(S, U, W = !0) {
      if (P.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      k = S, K = U, t.width = Math.floor(S * X), t.height = Math.floor(U * X), W === !0 && (t.style.width = S + "px", t.style.height = U + "px"), this.setViewport(0, 0, S, U);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(k * X, K * X).floor();
    }, this.setDrawingBufferSize = function(S, U, W) {
      k = S, K = U, X = W, t.width = Math.floor(S * W), t.height = Math.floor(U * W), this.setViewport(0, 0, S, U);
    }, this.getCurrentViewport = function(S) {
      return S.copy(A);
    }, this.getViewport = function(S) {
      return S.copy(j);
    }, this.setViewport = function(S, U, W, I) {
      S.isVector4 ? j.set(S.x, S.y, S.z, S.w) : j.set(S, U, W, I), Z.viewport(A.copy(j).multiplyScalar(X).floor());
    }, this.getScissor = function(S) {
      return S.copy(D);
    }, this.setScissor = function(S, U, W, I) {
      S.isVector4 ? D.set(S.x, S.y, S.z, S.w) : D.set(S, U, W, I), Z.scissor(Y.copy(D).multiplyScalar(X).floor());
    }, this.getScissorTest = function() {
      return G;
    }, this.setScissorTest = function(S) {
      Z.setScissorTest(G = S);
    }, this.setOpaqueSort = function(S) {
      q = S;
    }, this.setTransparentSort = function(S) {
      Q = S;
    }, this.getClearColor = function(S) {
      return S.copy(B.getClearColor());
    }, this.setClearColor = function() {
      B.setClearColor.apply(B, arguments);
    }, this.getClearAlpha = function() {
      return B.getClearAlpha();
    }, this.setClearAlpha = function() {
      B.setClearAlpha.apply(B, arguments);
    }, this.clear = function(S = !0, U = !0, W = !0) {
      let I = 0;
      if (S) {
        let V = !1;
        if (w !== null) {
          const me = w.texture.format;
          V = me === Uc || me === Ic || me === Pc;
        }
        if (V) {
          const me = w.texture.type, we = me === Pn || me === Rn || me === Vo || me === jn || me === Cc || me === Lc, Le = B.getClearColor(), Pe = B.getClearAlpha(), He = Le.r, Ce = Le.g, Ne = Le.b;
          we ? (f[0] = He, f[1] = Ce, f[2] = Ne, f[3] = Pe, R.clearBufferuiv(R.COLOR, 0, f)) : (g[0] = He, g[1] = Ce, g[2] = Ne, g[3] = Pe, R.clearBufferiv(R.COLOR, 0, g));
        } else
          I |= R.COLOR_BUFFER_BIT;
      }
      U && (I |= R.DEPTH_BUFFER_BIT), W && (I |= R.STENCIL_BUFFER_BIT), R.clear(I);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", he, !1), t.removeEventListener("webglcontextrestored", z, !1), t.removeEventListener("webglcontextcreationerror", oe, !1), J.dispose(), ne.dispose(), pe.dispose(), Ue.dispose(), ke.dispose(), x.dispose(), ve.dispose(), ze.dispose(), O.dispose(), P.dispose(), P.removeEventListener("sessionstart", Je), P.removeEventListener("sessionend", Xt), Se && (Se.dispose(), Se = null), xt.stop();
    };
    function he(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function z() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const S = ye.autoReset, U = se.enabled, W = se.autoUpdate, I = se.needsUpdate, V = se.type;
      Ze(), ye.autoReset = S, se.enabled = U, se.autoUpdate = W, se.needsUpdate = I, se.type = V;
    }
    function oe(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function de(S) {
      const U = S.target;
      U.removeEventListener("dispose", de), We(U);
    }
    function We(S) {
      et(S), pe.remove(S);
    }
    function et(S) {
      const U = pe.get(S).programs;
      U !== void 0 && (U.forEach(function(W) {
        O.releaseProgram(W);
      }), S.isShaderMaterial && O.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, U, W, I, V, me) {
      U === null && (U = Qe);
      const we = V.isMesh && V.matrixWorld.determinant() < 0, Le = Th(S, U, W, I, V);
      Z.setMaterial(I, we);
      let Pe = W.index, He = 1;
      if (I.wireframe === !0) {
        if (Pe = T.getWireframeAttribute(W), Pe === void 0)
          return;
        He = 2;
      }
      const Ce = W.drawRange, Ne = W.attributes.position;
      let it = Ce.start * He, st = (Ce.start + Ce.count) * He;
      me !== null && (it = Math.max(it, me.start * He), st = Math.min(st, (me.start + me.count) * He)), Pe !== null ? (it = Math.max(it, 0), st = Math.min(st, Pe.count)) : Ne != null && (it = Math.max(it, 0), st = Math.min(st, Ne.count));
      const Pt = st - it;
      if (Pt < 0 || Pt === 1 / 0)
        return;
      ve.setup(V, I, Le, W, Pe);
      let sn, ot = Me;
      if (Pe !== null && (sn = nt.get(Pe), ot = Ae, ot.setIndex(sn)), V.isMesh)
        I.wireframe === !0 ? (Z.setLineWidth(I.wireframeLinewidth * Re()), ot.setMode(R.LINES)) : ot.setMode(R.TRIANGLES);
      else if (V.isLine) {
        let Ge = I.linewidth;
        Ge === void 0 && (Ge = 1), Z.setLineWidth(Ge * Re()), V.isLineSegments ? ot.setMode(R.LINES) : V.isLineLoop ? ot.setMode(R.LINE_LOOP) : ot.setMode(R.LINE_STRIP);
      } else
        V.isPoints ? ot.setMode(R.POINTS) : V.isSprite && ot.setMode(R.TRIANGLES);
      if (V.isInstancedMesh)
        ot.renderInstances(it, Pt, V.count);
      else if (W.isInstancedBufferGeometry) {
        const Ge = W._maxInstanceCount !== void 0 ? W._maxInstanceCount : 1 / 0, Tr = Math.min(W.instanceCount, Ge);
        ot.renderInstances(it, Pt, Tr);
      } else
        ot.render(it, Pt);
    }, this.compile = function(S, U) {
      function W(I, V, me) {
        I.transparent === !0 && I.side === qt && I.forceSinglePass === !1 ? (I.side = wt, I.needsUpdate = !0, Us(I, V, me), I.side = mn, I.needsUpdate = !0, Us(I, V, me), I.side = qt) : Us(I, V, me);
      }
      m = ne.get(S), m.init(), E.push(m), S.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (m.pushLight(I), I.castShadow && m.pushShadow(I));
      }), m.setupLights(v._useLegacyLights), S.traverse(function(I) {
        const V = I.material;
        if (V)
          if (Array.isArray(V))
            for (let me = 0; me < V.length; me++) {
              const we = V[me];
              W(we, S, I);
            }
          else
            W(V, S, I);
      }), E.pop(), m = null;
    };
    let rt = null;
    function xn(S) {
      rt && rt(S);
    }
    function Je() {
      xt.stop();
    }
    function Xt() {
      xt.start();
    }
    const xt = new jc();
    xt.setAnimationLoop(xn), typeof self < "u" && xt.setContext(self), this.setAnimationLoop = function(S) {
      rt = S, P.setAnimationLoop(S), S === null ? xt.stop() : xt.start();
    }, P.addEventListener("sessionstart", Je), P.addEventListener("sessionend", Xt), this.render = function(S, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0)
        return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), P.enabled === !0 && P.isPresenting === !0 && (P.cameraAutoUpdate === !0 && P.updateCamera(U), U = P.getCamera()), S.isScene === !0 && S.onBeforeRender(v, S, U, w), m = ne.get(S, E.length), m.init(), E.push(m), Ee.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), ce.setFromProjectionMatrix(Ee), fe = this.localClippingEnabled, ue = xe.init(this.clippingPlanes, fe), _ = J.get(S, p.length), _.init(), p.push(_), ca(S, U, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(q, Q), this.info.render.frame++, ue === !0 && xe.beginShadows();
      const W = m.state.shadowsArray;
      if (se.render(W, S, U), ue === !0 && xe.endShadows(), this.info.autoReset === !0 && this.info.reset(), B.render(_, S), m.setupLights(v._useLegacyLights), U.isArrayCamera) {
        const I = U.cameras;
        for (let V = 0, me = I.length; V < me; V++) {
          const we = I[V];
          ha(_, S, we, we.viewport);
        }
      } else
        ha(_, S, U);
      w !== null && (ge.updateMultisampleRenderTarget(w), ge.updateRenderTargetMipmap(w)), S.isScene === !0 && S.onAfterRender(v, S, U), ve.resetDefaultState(), N = -1, M = null, E.pop(), E.length > 0 ? m = E[E.length - 1] : m = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function ca(S, U, W, I) {
      if (S.visible === !1)
        return;
      if (S.layers.test(U.layers)) {
        if (S.isGroup)
          W = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(U);
        else if (S.isLight)
          m.pushLight(S), S.castShadow && m.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || ce.intersectsSprite(S)) {
            I && $e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ee);
            const we = x.update(S), Le = S.material;
            Le.visible && _.push(S, we, Le, W, $e.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || ce.intersectsObject(S))) {
          const we = x.update(S), Le = S.material;
          if (I && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), $e.copy(S.boundingSphere.center)) : (we.boundingSphere === null && we.computeBoundingSphere(), $e.copy(we.boundingSphere.center)), $e.applyMatrix4(S.matrixWorld).applyMatrix4(Ee)), Array.isArray(Le)) {
            const Pe = we.groups;
            for (let He = 0, Ce = Pe.length; He < Ce; He++) {
              const Ne = Pe[He], it = Le[Ne.materialIndex];
              it && it.visible && _.push(S, we, it, W, $e.z, Ne);
            }
          } else
            Le.visible && _.push(S, we, Le, W, $e.z, null);
        }
      }
      const me = S.children;
      for (let we = 0, Le = me.length; we < Le; we++)
        ca(me[we], U, W, I);
    }
    function ha(S, U, W, I) {
      const V = S.opaque, me = S.transmissive, we = S.transparent;
      m.setupLightsView(W), ue === !0 && xe.setGlobalState(v.clippingPlanes, W), me.length > 0 && Eh(V, me, U, W), I && Z.viewport(A.copy(I)), V.length > 0 && Is(V, U, W), me.length > 0 && Is(me, U, W), we.length > 0 && Is(we, U, W), Z.buffers.depth.setTest(!0), Z.buffers.depth.setMask(!0), Z.buffers.color.setMask(!0), Z.setPolygonOffset(!1);
    }
    function Eh(S, U, W, I) {
      const V = ie.isWebGL2;
      Se === null && (Se = new Qn(1, 1, {
        generateMipmaps: !0,
        type: $.has("EXT_color_buffer_half_float") ? _s : Pn,
        minFilter: Jn,
        samples: V ? 4 : 0
      })), v.getDrawingBufferSize(Te), V ? Se.setSize(Te.x, Te.y) : Se.setSize(pr(Te.x), pr(Te.y));
      const me = v.getRenderTarget();
      v.setRenderTarget(Se), v.getClearColor(F), H = v.getClearAlpha(), H < 1 && v.setClearColor(16777215, 0.5), v.clear();
      const we = v.toneMapping;
      v.toneMapping = Ln, Is(S, W, I), ge.updateMultisampleRenderTarget(Se), ge.updateRenderTargetMipmap(Se);
      let Le = !1;
      for (let Pe = 0, He = U.length; Pe < He; Pe++) {
        const Ce = U[Pe], Ne = Ce.object, it = Ce.geometry, st = Ce.material, Pt = Ce.group;
        if (st.side === qt && Ne.layers.test(I.layers)) {
          const sn = st.side;
          st.side = wt, st.needsUpdate = !0, ua(Ne, W, I, it, st, Pt), st.side = sn, st.needsUpdate = !0, Le = !0;
        }
      }
      Le === !0 && (ge.updateMultisampleRenderTarget(Se), ge.updateRenderTargetMipmap(Se)), v.setRenderTarget(me), v.setClearColor(F, H), v.toneMapping = we;
    }
    function Is(S, U, W) {
      const I = U.isScene === !0 ? U.overrideMaterial : null;
      for (let V = 0, me = S.length; V < me; V++) {
        const we = S[V], Le = we.object, Pe = we.geometry, He = I === null ? we.material : I, Ce = we.group;
        Le.layers.test(W.layers) && ua(Le, U, W, Pe, He, Ce);
      }
    }
    function ua(S, U, W, I, V, me) {
      S.onBeforeRender(v, U, W, I, V, me), S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), V.onBeforeRender(v, U, W, I, S, me), V.transparent === !0 && V.side === qt && V.forceSinglePass === !1 ? (V.side = wt, V.needsUpdate = !0, v.renderBufferDirect(W, U, I, V, S, me), V.side = mn, V.needsUpdate = !0, v.renderBufferDirect(W, U, I, V, S, me), V.side = qt) : v.renderBufferDirect(W, U, I, V, S, me), S.onAfterRender(v, U, W, I, V, me);
    }
    function Us(S, U, W) {
      U.isScene !== !0 && (U = Qe);
      const I = pe.get(S), V = m.state.lights, me = m.state.shadowsArray, we = V.state.version, Le = O.getParameters(S, V.state, me, U, W), Pe = O.getProgramCacheKey(Le);
      let He = I.programs;
      I.environment = S.isMeshStandardMaterial ? U.environment : null, I.fog = U.fog, I.envMap = (S.isMeshStandardMaterial ? ke : Ue).get(S.envMap || I.environment), He === void 0 && (S.addEventListener("dispose", de), He = /* @__PURE__ */ new Map(), I.programs = He);
      let Ce = He.get(Pe);
      if (Ce !== void 0) {
        if (I.currentProgram === Ce && I.lightsStateVersion === we)
          return da(S, Le), Ce;
      } else
        Le.uniforms = O.getUniforms(S), S.onBuild(W, Le, v), S.onBeforeCompile(Le, v), Ce = O.acquireProgram(Le, Pe), He.set(Pe, Ce), I.uniforms = Le.uniforms;
      const Ne = I.uniforms;
      (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ne.clippingPlanes = xe.uniform), da(S, Le), I.needsLights = bh(S), I.lightsStateVersion = we, I.needsLights && (Ne.ambientLightColor.value = V.state.ambient, Ne.lightProbe.value = V.state.probe, Ne.directionalLights.value = V.state.directional, Ne.directionalLightShadows.value = V.state.directionalShadow, Ne.spotLights.value = V.state.spot, Ne.spotLightShadows.value = V.state.spotShadow, Ne.rectAreaLights.value = V.state.rectArea, Ne.ltc_1.value = V.state.rectAreaLTC1, Ne.ltc_2.value = V.state.rectAreaLTC2, Ne.pointLights.value = V.state.point, Ne.pointLightShadows.value = V.state.pointShadow, Ne.hemisphereLights.value = V.state.hemi, Ne.directionalShadowMap.value = V.state.directionalShadowMap, Ne.directionalShadowMatrix.value = V.state.directionalShadowMatrix, Ne.spotShadowMap.value = V.state.spotShadowMap, Ne.spotLightMatrix.value = V.state.spotLightMatrix, Ne.spotLightMap.value = V.state.spotLightMap, Ne.pointShadowMap.value = V.state.pointShadowMap, Ne.pointShadowMatrix.value = V.state.pointShadowMatrix);
      const it = Ce.getUniforms(), st = cr.seqWithValue(it.seq, Ne);
      return I.currentProgram = Ce, I.uniformsList = st, Ce;
    }
    function da(S, U) {
      const W = pe.get(S);
      W.outputColorSpace = U.outputColorSpace, W.instancing = U.instancing, W.instancingColor = U.instancingColor, W.skinning = U.skinning, W.morphTargets = U.morphTargets, W.morphNormals = U.morphNormals, W.morphColors = U.morphColors, W.morphTargetsCount = U.morphTargetsCount, W.numClippingPlanes = U.numClippingPlanes, W.numIntersection = U.numClipIntersection, W.vertexAlphas = U.vertexAlphas, W.vertexTangents = U.vertexTangents, W.toneMapping = U.toneMapping;
    }
    function Th(S, U, W, I, V) {
      U.isScene !== !0 && (U = Qe), ge.resetTextureUnits();
      const me = U.fog, we = I.isMeshStandardMaterial ? U.environment : null, Le = w === null ? v.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : Zt, Pe = (I.isMeshStandardMaterial ? ke : Ue).get(I.envMap || we), He = I.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4, Ce = !!W.attributes.tangent && (!!I.normalMap || I.anisotropy > 0), Ne = !!W.morphAttributes.position, it = !!W.morphAttributes.normal, st = !!W.morphAttributes.color;
      let Pt = Ln;
      I.toneMapped && (w === null || w.isXRRenderTarget === !0) && (Pt = v.toneMapping);
      const sn = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, ot = sn !== void 0 ? sn.length : 0, Ge = pe.get(I), Tr = m.state.lights;
      if (ue === !0 && (fe === !0 || S !== M)) {
        const Rt = S === M && I.id === N;
        xe.setState(I, S, Rt);
      }
      let at = !1;
      I.version === Ge.__version ? (Ge.needsLights && Ge.lightsStateVersion !== Tr.state.version || Ge.outputColorSpace !== Le || V.isInstancedMesh && Ge.instancing === !1 || !V.isInstancedMesh && Ge.instancing === !0 || V.isSkinnedMesh && Ge.skinning === !1 || !V.isSkinnedMesh && Ge.skinning === !0 || V.isInstancedMesh && Ge.instancingColor === !0 && V.instanceColor === null || V.isInstancedMesh && Ge.instancingColor === !1 && V.instanceColor !== null || Ge.envMap !== Pe || I.fog === !0 && Ge.fog !== me || Ge.numClippingPlanes !== void 0 && (Ge.numClippingPlanes !== xe.numPlanes || Ge.numIntersection !== xe.numIntersection) || Ge.vertexAlphas !== He || Ge.vertexTangents !== Ce || Ge.morphTargets !== Ne || Ge.morphNormals !== it || Ge.morphColors !== st || Ge.toneMapping !== Pt || ie.isWebGL2 === !0 && Ge.morphTargetsCount !== ot) && (at = !0) : (at = !0, Ge.__version = I.version);
      let Nn = Ge.currentProgram;
      at === !0 && (Nn = Us(I, U, V));
      let fa = !1, ts = !1, Ar = !1;
      const yt = Nn.getUniforms(), On = Ge.uniforms;
      if (Z.useProgram(Nn.program) && (fa = !0, ts = !0, Ar = !0), I.id !== N && (N = I.id, ts = !0), fa || M !== S) {
        if (yt.setValue(R, "projectionMatrix", S.projectionMatrix), ie.logarithmicDepthBuffer && yt.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), M !== S && (M = S, ts = !0, Ar = !0), I.isShaderMaterial || I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshStandardMaterial || I.envMap) {
          const Rt = yt.map.cameraPosition;
          Rt !== void 0 && Rt.setValue(
            R,
            $e.setFromMatrixPosition(S.matrixWorld)
          );
        }
        (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial) && yt.setValue(R, "isOrthographic", S.isOrthographicCamera === !0), (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial || I.isShadowMaterial || V.isSkinnedMesh) && yt.setValue(R, "viewMatrix", S.matrixWorldInverse);
      }
      if (V.isSkinnedMesh) {
        yt.setOptional(R, V, "bindMatrix"), yt.setOptional(R, V, "bindMatrixInverse");
        const Rt = V.skeleton;
        Rt && (ie.floatVertexTextures ? (Rt.boneTexture === null && Rt.computeBoneTexture(), yt.setValue(R, "boneTexture", Rt.boneTexture, ge), yt.setValue(R, "boneTextureSize", Rt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const br = W.morphAttributes;
      if ((br.position !== void 0 || br.normal !== void 0 || br.color !== void 0 && ie.isWebGL2 === !0) && be.update(V, W, Nn), (ts || Ge.receiveShadow !== V.receiveShadow) && (Ge.receiveShadow = V.receiveShadow, yt.setValue(R, "receiveShadow", V.receiveShadow)), I.isMeshGouraudMaterial && I.envMap !== null && (On.envMap.value = Pe, On.flipEnvMap.value = Pe.isCubeTexture && Pe.isRenderTargetTexture === !1 ? -1 : 1), ts && (yt.setValue(R, "toneMappingExposure", v.toneMappingExposure), Ge.needsLights && Ah(On, Ar), me && I.fog === !0 && te.refreshFogUniforms(On, me), te.refreshMaterialUniforms(On, I, X, K, Se), cr.upload(R, Ge.uniformsList, On, ge)), I.isShaderMaterial && I.uniformsNeedUpdate === !0 && (cr.upload(R, Ge.uniformsList, On, ge), I.uniformsNeedUpdate = !1), I.isSpriteMaterial && yt.setValue(R, "center", V.center), yt.setValue(R, "modelViewMatrix", V.modelViewMatrix), yt.setValue(R, "normalMatrix", V.normalMatrix), yt.setValue(R, "modelMatrix", V.matrixWorld), I.isShaderMaterial || I.isRawShaderMaterial) {
        const Rt = I.uniformsGroups;
        for (let wr = 0, wh = Rt.length; wr < wh; wr++)
          if (ie.isWebGL2) {
            const pa = Rt[wr];
            ze.update(pa, Nn), ze.bind(pa, Nn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Nn;
    }
    function Ah(S, U) {
      S.ambientLightColor.needsUpdate = U, S.lightProbe.needsUpdate = U, S.directionalLights.needsUpdate = U, S.directionalLightShadows.needsUpdate = U, S.pointLights.needsUpdate = U, S.pointLightShadows.needsUpdate = U, S.spotLights.needsUpdate = U, S.spotLightShadows.needsUpdate = U, S.rectAreaLights.needsUpdate = U, S.hemisphereLights.needsUpdate = U;
    }
    function bh(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return b;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(S, U, W) {
      pe.get(S.texture).__webglTexture = U, pe.get(S.depthTexture).__webglTexture = W;
      const I = pe.get(S);
      I.__hasExternalTextures = !0, I.__hasExternalTextures && (I.__autoAllocateDepthBuffer = W === void 0, I.__autoAllocateDepthBuffer || $.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), I.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, U) {
      const W = pe.get(S);
      W.__webglFramebuffer = U, W.__useDefaultFramebuffer = U === void 0;
    }, this.setRenderTarget = function(S, U = 0, W = 0) {
      w = S, b = U, C = W;
      let I = !0, V = null, me = !1, we = !1;
      if (S) {
        const Pe = pe.get(S);
        Pe.__useDefaultFramebuffer !== void 0 ? (Z.bindFramebuffer(R.FRAMEBUFFER, null), I = !1) : Pe.__webglFramebuffer === void 0 ? ge.setupRenderTarget(S) : Pe.__hasExternalTextures && ge.rebindTextures(S, pe.get(S.texture).__webglTexture, pe.get(S.depthTexture).__webglTexture);
        const He = S.texture;
        (He.isData3DTexture || He.isDataArrayTexture || He.isCompressedArrayTexture) && (we = !0);
        const Ce = pe.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Ce[U]) ? V = Ce[U][W] : V = Ce[U], me = !0) : ie.isWebGL2 && S.samples > 0 && ge.useMultisampledRTT(S) === !1 ? V = pe.get(S).__webglMultisampledFramebuffer : Array.isArray(Ce) ? V = Ce[W] : V = Ce, A.copy(S.viewport), Y.copy(S.scissor), ee = S.scissorTest;
      } else
        A.copy(j).multiplyScalar(X).floor(), Y.copy(D).multiplyScalar(X).floor(), ee = G;
      if (Z.bindFramebuffer(R.FRAMEBUFFER, V) && ie.drawBuffers && I && Z.drawBuffers(S, V), Z.viewport(A), Z.scissor(Y), Z.setScissorTest(ee), me) {
        const Pe = pe.get(S.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + U, Pe.__webglTexture, W);
      } else if (we) {
        const Pe = pe.get(S.texture), He = U || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, Pe.__webglTexture, W || 0, He);
      }
      N = -1;
    }, this.readRenderTargetPixels = function(S, U, W, I, V, me, we) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Le = pe.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && we !== void 0 && (Le = Le[we]), Le) {
        Z.bindFramebuffer(R.FRAMEBUFFER, Le);
        try {
          const Pe = S.texture, He = Pe.format, Ce = Pe.type;
          if (He !== Nt && _e.convert(He) !== R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ne = Ce === _s && ($.has("EXT_color_buffer_half_float") || ie.isWebGL2 && $.has("EXT_color_buffer_float"));
          if (Ce !== Pn && _e.convert(Ce) !== R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE) && !(Ce === fn && (ie.isWebGL2 || $.has("OES_texture_float") || $.has("WEBGL_color_buffer_float"))) && !Ne) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= S.width - I && W >= 0 && W <= S.height - V && R.readPixels(U, W, I, V, _e.convert(He), _e.convert(Ce), me);
        } finally {
          const Pe = w !== null ? pe.get(w).__webglFramebuffer : null;
          Z.bindFramebuffer(R.FRAMEBUFFER, Pe);
        }
      }
    }, this.copyFramebufferToTexture = function(S, U, W = 0) {
      const I = Math.pow(2, -W), V = Math.floor(U.image.width * I), me = Math.floor(U.image.height * I);
      ge.setTexture2D(U, 0), R.copyTexSubImage2D(R.TEXTURE_2D, W, 0, 0, S.x, S.y, V, me), Z.unbindTexture();
    }, this.copyTextureToTexture = function(S, U, W, I = 0) {
      const V = U.image.width, me = U.image.height, we = _e.convert(W.format), Le = _e.convert(W.type);
      ge.setTexture2D(W, 0), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, W.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, W.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, W.unpackAlignment), U.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, I, S.x, S.y, V, me, we, Le, U.image.data) : U.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, I, S.x, S.y, U.mipmaps[0].width, U.mipmaps[0].height, we, U.mipmaps[0].data) : R.texSubImage2D(R.TEXTURE_2D, I, S.x, S.y, we, Le, U.image), I === 0 && W.generateMipmaps && R.generateMipmap(R.TEXTURE_2D), Z.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, U, W, I, V = 0) {
      if (v.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const me = S.max.x - S.min.x + 1, we = S.max.y - S.min.y + 1, Le = S.max.z - S.min.z + 1, Pe = _e.convert(I.format), He = _e.convert(I.type);
      let Ce;
      if (I.isData3DTexture)
        ge.setTexture3D(I, 0), Ce = R.TEXTURE_3D;
      else if (I.isDataArrayTexture)
        ge.setTexture2DArray(I, 0), Ce = R.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, I.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Ne = R.getParameter(R.UNPACK_ROW_LENGTH), it = R.getParameter(R.UNPACK_IMAGE_HEIGHT), st = R.getParameter(R.UNPACK_SKIP_PIXELS), Pt = R.getParameter(R.UNPACK_SKIP_ROWS), sn = R.getParameter(R.UNPACK_SKIP_IMAGES), ot = W.isCompressedTexture ? W.mipmaps[0] : W.image;
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ot.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, S.min.x), R.pixelStorei(R.UNPACK_SKIP_ROWS, S.min.y), R.pixelStorei(R.UNPACK_SKIP_IMAGES, S.min.z), W.isDataTexture || W.isData3DTexture ? R.texSubImage3D(Ce, V, U.x, U.y, U.z, me, we, Le, Pe, He, ot.data) : W.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), R.compressedTexSubImage3D(Ce, V, U.x, U.y, U.z, me, we, Le, Pe, ot.data)) : R.texSubImage3D(Ce, V, U.x, U.y, U.z, me, we, Le, Pe, He, ot), R.pixelStorei(R.UNPACK_ROW_LENGTH, Ne), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, it), R.pixelStorei(R.UNPACK_SKIP_PIXELS, st), R.pixelStorei(R.UNPACK_SKIP_ROWS, Pt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, sn), V === 0 && I.generateMipmaps && R.generateMipmap(Ce), Z.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? ge.setTextureCube(S, 0) : S.isData3DTexture ? ge.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? ge.setTexture2DArray(S, 0) : ge.setTexture2D(S, 0), Z.unbindTexture();
    }, this.resetState = function() {
      b = 0, C = 0, w = null, Z.reset(), ve.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return pn;
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Ie ? In : Nc;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === In ? Ie : Zt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Xg extends eh {
}
Xg.prototype.isWebGL1Renderer = !0;
class $g extends Xe {
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
class qg {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ro, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Ot();
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
const Mt = /* @__PURE__ */ new L();
class Ko {
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
      Mt.fromBufferAttribute(this, t), Mt.applyMatrix4(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Mt.fromBufferAttribute(this, t), Mt.applyNormalMatrix(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Mt.fromBufferAttribute(this, t), Mt.transformDirection(e), this.setXYZ(t, Mt.x, Mt.y, Mt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ye(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
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
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array), i = Ye(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ye(t, this.array), n = Ye(n, this.array), i = Ye(i, this.array), r = Ye(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
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
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Ko(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const Il = /* @__PURE__ */ new L(), Ul = /* @__PURE__ */ new je(), Dl = /* @__PURE__ */ new je(), Yg = /* @__PURE__ */ new L(), Nl = /* @__PURE__ */ new Fe(), Mi = /* @__PURE__ */ new L(), no = /* @__PURE__ */ new Qt(), Ol = /* @__PURE__ */ new Fe(), io = /* @__PURE__ */ new Rs();
class jg extends bt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Fe(), this.bindMatrixInverse = new Fe(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new _n()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      Mi.fromBufferAttribute(t, n), this.applyBoneTransform(n, Mi), this.boundingBox.expandByPoint(Mi);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Qt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      Mi.fromBufferAttribute(t, n), this.applyBoneTransform(n, Mi), this.boundingSphere.expandByPoint(Mi);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), no.copy(this.boundingSphere), no.applyMatrix4(i), e.ray.intersectsSphere(no) !== !1 && (Ol.copy(i).invert(), io.copy(e.ray).applyMatrix4(Ol), !(this.boundingBox !== null && io.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, io)));
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
    const e = new je(), t = this.geometry.attributes.skinWeight;
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
    Ul.fromBufferAttribute(i.attributes.skinIndex, e), Dl.fromBufferAttribute(i.attributes.skinWeight, e), Il.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = Dl.getComponent(r);
      if (o !== 0) {
        const a = Ul.getComponent(r);
        Nl.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Yg.copy(Il).applyMatrix4(Nl), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class th extends Xe {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Kg extends gt {
  constructor(e = null, t = 1, n = 1, i, r, o, a, l, c = dt, h = dt, u, d) {
    super(null, o, a, l, c, h, i, r, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Fl = /* @__PURE__ */ new Fe(), Zg = /* @__PURE__ */ new Fe();
class Zo {
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
        this.boneInverses.push(new Fe());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Fe();
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
      const a = e[r] ? e[r].matrixWorld : Zg;
      Fl.multiplyMatrices(a, t[r]), Fl.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Zo(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Bc(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Kg(t, e, e, Nt, fn);
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
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new th()), this.bones.push(o), this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]));
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
class Bl extends Tt {
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
const Si = /* @__PURE__ */ new Fe(), zl = /* @__PURE__ */ new Fe(), er = [], Hl = /* @__PURE__ */ new _n(), Jg = /* @__PURE__ */ new Fe(), os = /* @__PURE__ */ new bt(), as = /* @__PURE__ */ new Qt();
class Qg extends bt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Bl(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Jg);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new _n()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Si), Hl.copy(e.boundingBox).applyMatrix4(Si), this.boundingBox.union(Hl);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Qt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Si), as.copy(e.boundingSphere).applyMatrix4(Si), this.boundingSphere.union(as);
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
    if (os.geometry = this.geometry, os.material = this.material, os.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), as.copy(this.boundingSphere), as.applyMatrix4(n), e.ray.intersectsSphere(as) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Si), zl.multiplyMatrices(n, Si), os.matrixWorld = zl, os.raycast(e, er);
        for (let o = 0, a = er.length; o < a; o++) {
          const l = er[o];
          l.instanceId = r, l.object = this, t.push(l);
        }
        er.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Bl(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class nh extends jt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new De(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Gl = /* @__PURE__ */ new L(), kl = /* @__PURE__ */ new L(), Vl = /* @__PURE__ */ new Fe(), so = /* @__PURE__ */ new Rs(), tr = /* @__PURE__ */ new Qt();
class yr extends Xe {
  constructor(e = new Ft(), t = new nh()) {
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
        Gl.fromBufferAttribute(t, i - 1), kl.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Gl.distanceTo(kl);
      e.setAttribute("lineDistance", new Vt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), tr.copy(n.boundingSphere), tr.applyMatrix4(i), tr.radius += r, e.ray.intersectsSphere(tr) === !1)
      return;
    Vl.copy(i).invert(), so.copy(e.ray).applyMatrix4(Vl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new L(), h = new L(), u = new L(), d = new L(), f = this.isLineSegments ? 2 : 1, g = n.index, m = n.attributes.position;
    if (g !== null) {
      const p = Math.max(0, o.start), E = Math.min(g.count, o.start + o.count);
      for (let v = p, y = E - 1; v < y; v += f) {
        const b = g.getX(v), C = g.getX(v + 1);
        if (c.fromBufferAttribute(m, b), h.fromBufferAttribute(m, C), so.distanceSqToSegment(c, h, d, u) > l)
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
      const p = Math.max(0, o.start), E = Math.min(m.count, o.start + o.count);
      for (let v = p, y = E - 1; v < y; v += f) {
        if (c.fromBufferAttribute(m, v), h.fromBufferAttribute(m, v + 1), so.distanceSqToSegment(c, h, d, u) > l)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const C = e.ray.origin.distanceTo(d);
        C < e.near || C > e.far || t.push({
          distance: C,
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
const Wl = /* @__PURE__ */ new L(), Xl = /* @__PURE__ */ new L();
class e_ extends yr {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Wl.fromBufferAttribute(t, i), Xl.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Wl.distanceTo(Xl);
      e.setAttribute("lineDistance", new Vt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class t_ extends yr {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class ih extends jt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new De(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const $l = /* @__PURE__ */ new Fe(), Io = /* @__PURE__ */ new Rs(), nr = /* @__PURE__ */ new Qt(), ir = /* @__PURE__ */ new L();
class n_ extends Xe {
  constructor(e = new Ft(), t = new ih()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), nr.copy(n.boundingSphere), nr.applyMatrix4(i), nr.radius += r, e.ray.intersectsSphere(nr) === !1)
      return;
    $l.copy(i).invert(), Io.copy(e.ray).applyMatrix4($l);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
      for (let g = d, _ = f; g < _; g++) {
        const m = c.getX(g);
        ir.fromBufferAttribute(u, m), ql(ir, m, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let g = d, _ = f; g < _; g++)
        ir.fromBufferAttribute(u, g), ql(ir, g, l, i, e, t, this);
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
function ql(s, e, t, n, i, r, o) {
  const a = Io.distanceSqToPoint(s);
  if (a < t) {
    const l = new L();
    Io.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far)
      return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: e,
      face: null,
      object: o
    });
  }
}
class en {
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
    let a = 0, l = r - 1, c;
    for (; a <= l; )
      if (i = Math.floor(a + (l - a) / 2), c = n[i] - o, c < 0)
        a = i + 1;
      else if (c > 0)
        l = i - 1;
      else {
        l = i;
        break;
      }
    if (i = l, n[i] === o)
      return i / (r - 1);
    const h = n[i], d = n[i + 1] - h, f = (o - h) / d;
    return (i + f) / (r - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4, r = e + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const o = this.getPoint(i), a = this.getPoint(r), l = t || (o.isVector2 ? new le() : new L());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new L(), i = [], r = [], o = [], a = new L(), l = new Fe();
    for (let f = 0; f <= e; f++) {
      const g = f / e;
      i[f] = this.getTangentAt(g, new L());
    }
    r[0] = new L(), o[0] = new L();
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), o[0].crossVectors(i[0], r[0]);
    for (let f = 1; f <= e; f++) {
      if (r[f] = r[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) {
        a.normalize();
        const g = Math.acos(ft(i[f - 1].dot(i[f]), -1, 1));
        r[f].applyMatrix4(l.makeRotationAxis(a, g));
      }
      o[f].crossVectors(i[f], r[f]);
    }
    if (t === !0) {
      let f = Math.acos(ft(r[0].dot(r[e]), -1, 1));
      f /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (f = -f);
      for (let g = 1; g <= e; g++)
        r[g].applyMatrix4(l.makeRotationAxis(i[g], f * g)), o[g].crossVectors(i[g], r[g]);
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
class Jo extends en {
  constructor(e = 0, t = 0, n = 1, i = 1, r = 0, o = Math.PI * 2, a = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
  }
  getPoint(e, t) {
    const n = t || new le(), i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(r) < Number.EPSILON;
    for (; r < 0; )
      r += i;
    for (; r > i; )
      r -= i;
    r < Number.EPSILON && (o ? r = 0 : r = i), this.aClockwise === !0 && !o && (r === i ? r = -i : r = r - i);
    const a = this.aStartAngle + e * r;
    let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
      l = d * h - f * u + this.aX, c = d * u + f * h + this.aY;
    }
    return n.set(l, c);
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
class i_ extends Jo {
  constructor(e, t, n, i, r, o) {
    super(e, t, n, n, i, r, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function Qo() {
  let s = 0, e = 0, t = 0, n = 0;
  function i(r, o, a, l) {
    s = r, e = a, t = -3 * r + 3 * o - 2 * a - l, n = 2 * r - 2 * o + a + l;
  }
  return {
    initCatmullRom: function(r, o, a, l, c) {
      i(o, a, c * (a - r), c * (l - o));
    },
    initNonuniformCatmullRom: function(r, o, a, l, c, h, u) {
      let d = (o - r) / c - (a - r) / (c + h) + (a - o) / h, f = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
      d *= h, f *= h, i(o, a, d, f);
    },
    calc: function(r) {
      const o = r * r, a = o * r;
      return s + e * r + t * o + n * a;
    }
  };
}
const sr = /* @__PURE__ */ new L(), ro = /* @__PURE__ */ new Qo(), oo = /* @__PURE__ */ new Qo(), ao = /* @__PURE__ */ new Qo();
class s_ extends en {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.points, r = i.length, o = (r - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), l = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : l === 0 && a === r - 1 && (a = r - 2, l = 1);
    let c, h;
    this.closed || a > 0 ? c = i[(a - 1) % r] : (sr.subVectors(i[0], i[1]).add(i[0]), c = sr);
    const u = i[a % r], d = i[(a + 1) % r];
    if (this.closed || a + 2 < r ? h = i[(a + 2) % r] : (sr.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = sr), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), m = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), g < 1e-4 && (g = _), m < 1e-4 && (m = _), ro.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, g, _, m), oo.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, g, _, m), ao.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, g, _, m);
    } else
      this.curveType === "catmullrom" && (ro.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), oo.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), ao.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
    return n.set(
      ro.calc(l),
      oo.calc(l),
      ao.calc(l)
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
      this.points.push(new L().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function Yl(s, e, t, n, i) {
  const r = (n - e) * 0.5, o = (i - t) * 0.5, a = s * s, l = s * a;
  return (2 * t - 2 * n + r + o) * l + (-3 * t + 3 * n - 2 * r - o) * a + r * s + t;
}
function r_(s, e) {
  const t = 1 - s;
  return t * t * e;
}
function o_(s, e) {
  return 2 * (1 - s) * s * e;
}
function a_(s, e) {
  return s * s * e;
}
function ms(s, e, t, n) {
  return r_(s, e) + o_(s, t) + a_(s, n);
}
function l_(s, e) {
  const t = 1 - s;
  return t * t * t * e;
}
function c_(s, e) {
  const t = 1 - s;
  return 3 * t * t * s * e;
}
function h_(s, e) {
  return 3 * (1 - s) * s * s * e;
}
function u_(s, e) {
  return s * s * s * e;
}
function gs(s, e, t, n, i) {
  return l_(s, e) + c_(s, t) + h_(s, n) + u_(s, i);
}
class sh extends en {
  constructor(e = new le(), t = new le(), n = new le(), i = new le()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new le()) {
    const n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return n.set(
      gs(e, i.x, r.x, o.x, a.x),
      gs(e, i.y, r.y, o.y, a.y)
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
class d_ extends en {
  constructor(e = new L(), t = new L(), n = new L(), i = new L()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3;
    return n.set(
      gs(e, i.x, r.x, o.x, a.x),
      gs(e, i.y, r.y, o.y, a.y),
      gs(e, i.z, r.z, o.z, a.z)
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
class ea extends en {
  constructor(e = new le(), t = new le()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new le()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new le()) {
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
class f_ extends en {
  constructor(e = new L(), t = new L()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new L()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new L()) {
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
class rh extends en {
  constructor(e = new le(), t = new le(), n = new le()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new le()) {
    const n = t, i = this.v0, r = this.v1, o = this.v2;
    return n.set(
      ms(e, i.x, r.x, o.x),
      ms(e, i.y, r.y, o.y)
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
class p_ extends en {
  constructor(e = new L(), t = new L(), n = new L()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.v0, r = this.v1, o = this.v2;
    return n.set(
      ms(e, i.x, r.x, o.x),
      ms(e, i.y, r.y, o.y),
      ms(e, i.z, r.z, o.z)
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
class oh extends en {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new le()) {
    const n = t, i = this.points, r = (i.length - 1) * e, o = Math.floor(r), a = r - o, l = i[o === 0 ? o : o - 1], c = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(
      Yl(a, l.x, c.x, h.x, u.x),
      Yl(a, l.y, c.y, h.y, u.y)
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
      this.points.push(new le().fromArray(i));
    }
    return this;
  }
}
var ah = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: i_,
  CatmullRomCurve3: s_,
  CubicBezierCurve: sh,
  CubicBezierCurve3: d_,
  EllipseCurve: Jo,
  LineCurve: ea,
  LineCurve3: f_,
  QuadraticBezierCurve: rh,
  QuadraticBezierCurve3: p_,
  SplineCurve: oh
});
class m_ extends en {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new ea(t, e));
  }
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const o = i[r] - n, a = this.curves[r], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, t);
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
      const o = r[i], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
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
      this.curves.push(new ah[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Uo extends m_ {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new le(), e && this.setFromPoints(e);
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
    const n = new ea(this.currentPoint.clone(), new le(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const r = new rh(
      this.currentPoint.clone(),
      new le(e, t),
      new le(n, i)
    );
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, o) {
    const a = new sh(
      this.currentPoint.clone(),
      new le(e, t),
      new le(n, i),
      new le(r, o)
    );
    return this.curves.push(a), this.currentPoint.set(r, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new oh(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, r, o) {
    const a = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      e + a,
      t + l,
      n,
      i,
      r,
      o
    ), this;
  }
  absarc(e, t, n, i, r, o) {
    return this.absellipse(e, t, n, n, i, r, o), this;
  }
  ellipse(e, t, n, i, r, o, a, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + c, t + h, n, i, r, o, a, l), this;
  }
  absellipse(e, t, n, i, r, o, a, l) {
    const c = new Jo(e, t, n, i, r, o, a, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
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
class hr extends Uo {
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
      this.holes.push(new Uo().fromJSON(i));
    }
    return this;
  }
}
const g_ = {
  triangulate: function(s, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : s.length;
    let r = lh(s, 0, i, t, !0);
    const o = [];
    if (!r || r.next === r.prev)
      return o;
    let a, l, c, h, u, d, f;
    if (n && (r = M_(s, e, r, t)), s.length > 80 * t) {
      a = c = s[0], l = h = s[1];
      for (let g = t; g < i; g += t)
        u = s[g], d = s[g + 1], u < a && (a = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
      f = Math.max(c - a, h - l), f = f !== 0 ? 32767 / f : 0;
    }
    return ys(r, o, t, a, l, f, 0), o;
  }
};
function lh(s, e, t, n, i) {
  let r, o;
  if (i === I_(s, e, t, n) > 0)
    for (r = e; r < t; r += n)
      o = jl(r, s[r], s[r + 1], o);
  else
    for (r = t - n; r >= e; r -= n)
      o = jl(r, s[r], s[r + 1], o);
  return o && Mr(o, o.next) && (Ss(o), o = o.next), o;
}
function ti(s, e) {
  if (!s)
    return s;
  e || (e = s);
  let t = s, n;
  do
    if (n = !1, !t.steiner && (Mr(t, t.next) || tt(t.prev, t, t.next) === 0)) {
      if (Ss(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function ys(s, e, t, n, i, r, o) {
  if (!s)
    return;
  !o && r && b_(s, n, i, r);
  let a = s, l, c;
  for (; s.prev !== s.next; ) {
    if (l = s.prev, c = s.next, r ? v_(s, n, i, r) : __(s)) {
      e.push(l.i / t | 0), e.push(s.i / t | 0), e.push(c.i / t | 0), Ss(s), s = c.next, a = c.next;
      continue;
    }
    if (s = c, s === a) {
      o ? o === 1 ? (s = x_(ti(s), e, t), ys(s, e, t, n, i, r, 2)) : o === 2 && y_(s, e, t, n, i, r) : ys(ti(s), e, t, n, i, r, 1);
      break;
    }
  }
}
function __(s) {
  const e = s.prev, t = s, n = s.next;
  if (tt(e, t, n) >= 0)
    return !1;
  const i = e.x, r = t.x, o = n.x, a = e.y, l = t.y, c = n.y, h = i < r ? i < o ? i : o : r < o ? r : o, u = a < l ? a < c ? a : c : l < c ? l : c, d = i > r ? i > o ? i : o : r > o ? r : o, f = a > l ? a > c ? a : c : l > c ? l : c;
  let g = n.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= d && g.y >= u && g.y <= f && bi(i, a, r, l, o, c, g.x, g.y) && tt(g.prev, g, g.next) >= 0)
      return !1;
    g = g.next;
  }
  return !0;
}
function v_(s, e, t, n) {
  const i = s.prev, r = s, o = s.next;
  if (tt(i, r, o) >= 0)
    return !1;
  const a = i.x, l = r.x, c = o.x, h = i.y, u = r.y, d = o.y, f = a < l ? a < c ? a : c : l < c ? l : c, g = h < u ? h < d ? h : d : u < d ? u : d, _ = a > l ? a > c ? a : c : l > c ? l : c, m = h > u ? h > d ? h : d : u > d ? u : d, p = Do(f, g, e, t, n), E = Do(_, m, e, t, n);
  let v = s.prevZ, y = s.nextZ;
  for (; v && v.z >= p && y && y.z <= E; ) {
    if (v.x >= f && v.x <= _ && v.y >= g && v.y <= m && v !== i && v !== o && bi(a, h, l, u, c, d, v.x, v.y) && tt(v.prev, v, v.next) >= 0 || (v = v.prevZ, y.x >= f && y.x <= _ && y.y >= g && y.y <= m && y !== i && y !== o && bi(a, h, l, u, c, d, y.x, y.y) && tt(y.prev, y, y.next) >= 0))
      return !1;
    y = y.nextZ;
  }
  for (; v && v.z >= p; ) {
    if (v.x >= f && v.x <= _ && v.y >= g && v.y <= m && v !== i && v !== o && bi(a, h, l, u, c, d, v.x, v.y) && tt(v.prev, v, v.next) >= 0)
      return !1;
    v = v.prevZ;
  }
  for (; y && y.z <= E; ) {
    if (y.x >= f && y.x <= _ && y.y >= g && y.y <= m && y !== i && y !== o && bi(a, h, l, u, c, d, y.x, y.y) && tt(y.prev, y, y.next) >= 0)
      return !1;
    y = y.nextZ;
  }
  return !0;
}
function x_(s, e, t) {
  let n = s;
  do {
    const i = n.prev, r = n.next.next;
    !Mr(i, r) && ch(i, n, n.next, r) && Ms(i, r) && Ms(r, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(r.i / t | 0), Ss(n), Ss(n.next), n = s = r), n = n.next;
  } while (n !== s);
  return ti(n);
}
function y_(s, e, t, n, i, r) {
  let o = s;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && C_(o, a)) {
        let l = hh(o, a);
        o = ti(o, o.next), l = ti(l, l.next), ys(o, e, t, n, i, r, 0), ys(l, e, t, n, i, r, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== s);
}
function M_(s, e, t, n) {
  const i = [];
  let r, o, a, l, c;
  for (r = 0, o = e.length; r < o; r++)
    a = e[r] * n, l = r < o - 1 ? e[r + 1] * n : s.length, c = lh(s, a, l, n, !1), c === c.next && (c.steiner = !0), i.push(R_(c));
  for (i.sort(S_), r = 0; r < i.length; r++)
    t = E_(i[r], t);
  return t;
}
function S_(s, e) {
  return s.x - e.x;
}
function E_(s, e) {
  const t = T_(s, e);
  if (!t)
    return e;
  const n = hh(t, s);
  return ti(n, n.next), ti(t, t.next);
}
function T_(s, e) {
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
  const a = i, l = i.x, c = i.y;
  let h = 1 / 0, u;
  t = i;
  do
    r >= t.x && t.x >= l && r !== t.x && bi(o < c ? r : n, o, l, c, o < c ? n : r, o, t.x, t.y) && (u = Math.abs(o - t.y) / (r - t.x), Ms(t, s) && (u < h || u === h && (t.x > i.x || t.x === i.x && A_(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== a);
  return i;
}
function A_(s, e) {
  return tt(s.prev, s, e.prev) < 0 && tt(e.next, s, s.next) < 0;
}
function b_(s, e, t, n) {
  let i = s;
  do
    i.z === 0 && (i.z = Do(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== s);
  i.prevZ.nextZ = null, i.prevZ = null, w_(i);
}
function w_(s) {
  let e, t, n, i, r, o, a, l, c = 1;
  do {
    for (t = s, s = null, r = null, o = 0; t; ) {
      for (o++, n = t, a = 0, e = 0; e < c && (a++, n = n.nextZ, !!n); e++)
        ;
      for (l = c; a > 0 || l > 0 && n; )
        a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), r ? r.nextZ = i : s = i, i.prevZ = r, r = i;
      t = n;
    }
    r.nextZ = null, c *= 2;
  } while (o > 1);
  return s;
}
function Do(s, e, t, n, i) {
  return s = (s - t) * i | 0, e = (e - n) * i | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, s | e << 1;
}
function R_(s) {
  let e = s, t = s;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== s);
  return t;
}
function bi(s, e, t, n, i, r, o, a) {
  return (i - o) * (e - a) >= (s - o) * (r - a) && (s - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (r - a) >= (i - o) * (n - a);
}
function C_(s, e) {
  return s.next.i !== e.i && s.prev.i !== e.i && !L_(s, e) && (Ms(s, e) && Ms(e, s) && P_(s, e) && (tt(s.prev, s, e.prev) || tt(s, e.prev, e)) || Mr(s, e) && tt(s.prev, s, s.next) > 0 && tt(e.prev, e, e.next) > 0);
}
function tt(s, e, t) {
  return (e.y - s.y) * (t.x - e.x) - (e.x - s.x) * (t.y - e.y);
}
function Mr(s, e) {
  return s.x === e.x && s.y === e.y;
}
function ch(s, e, t, n) {
  const i = or(tt(s, e, t)), r = or(tt(s, e, n)), o = or(tt(t, n, s)), a = or(tt(t, n, e));
  return !!(i !== r && o !== a || i === 0 && rr(s, t, e) || r === 0 && rr(s, n, e) || o === 0 && rr(t, s, n) || a === 0 && rr(t, e, n));
}
function rr(s, e, t) {
  return e.x <= Math.max(s.x, t.x) && e.x >= Math.min(s.x, t.x) && e.y <= Math.max(s.y, t.y) && e.y >= Math.min(s.y, t.y);
}
function or(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function L_(s, e) {
  let t = s;
  do {
    if (t.i !== s.i && t.next.i !== s.i && t.i !== e.i && t.next.i !== e.i && ch(t, t.next, s, e))
      return !0;
    t = t.next;
  } while (t !== s);
  return !1;
}
function Ms(s, e) {
  return tt(s.prev, s, s.next) < 0 ? tt(s, e, s.next) >= 0 && tt(s, s.prev, e) >= 0 : tt(s, e, s.prev) < 0 || tt(s, s.next, e) < 0;
}
function P_(s, e) {
  let t = s, n = !1;
  const i = (s.x + e.x) / 2, r = (s.y + e.y) / 2;
  do
    t.y > r != t.next.y > r && t.next.y !== t.y && i < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== s);
  return n;
}
function hh(s, e) {
  const t = new No(s.i, s.x, s.y), n = new No(e.i, e.x, e.y), i = s.next, r = e.prev;
  return s.next = e, e.prev = s, t.next = i, i.prev = t, n.next = t, t.prev = n, r.next = n, n.prev = r, n;
}
function jl(s, e, t, n) {
  const i = new No(s, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Ss(s) {
  s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function No(s, e, t) {
  this.i = s, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function I_(s, e, t, n) {
  let i = 0;
  for (let r = e, o = t - n; r < t; r += n)
    i += (s[o] - s[r]) * (s[r + 1] + s[o + 1]), o = r;
  return i;
}
class Ci {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, r = 0; r < t; i = r++)
      n += e[i].x * e[r].y - e[r].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Ci.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], r = [];
    Kl(e), Zl(n, e);
    let o = e.length;
    t.forEach(Kl);
    for (let l = 0; l < t.length; l++)
      i.push(o), o += t[l].length, Zl(n, t[l]);
    const a = g_.triangulate(n, i);
    for (let l = 0; l < a.length; l += 3)
      r.push(a.slice(l, l + 3));
    return r;
  }
}
function Kl(s) {
  const e = s.length;
  e > 2 && s[e - 1].equals(s[0]) && s.pop();
}
function Zl(s, e) {
  for (let t = 0; t < e.length; t++)
    s.push(e[t].x), s.push(e[t].y);
}
class ta extends Ft {
  constructor(e = new hr([new le(0.5, 0.5), new le(-0.5, 0.5), new le(-0.5, -0.5), new le(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, i = [], r = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a];
      o(c);
    }
    this.setAttribute("position", new Vt(i, 3)), this.setAttribute("uv", new Vt(r, 2)), this.computeVertexNormals();
    function o(a) {
      const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, g = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, _ = t.bevelOffset !== void 0 ? t.bevelOffset : 0, m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const p = t.extrudePath, E = t.UVGenerator !== void 0 ? t.UVGenerator : U_;
      let v, y = !1, b, C, w, N;
      p && (v = p.getSpacedPoints(h), y = !0, d = !1, b = p.computeFrenetFrames(h, !1), C = new L(), w = new L(), N = new L()), d || (m = 0, f = 0, g = 0, _ = 0);
      const M = a.extractPoints(c);
      let A = M.shape;
      const Y = M.holes;
      if (!Ci.isClockWise(A)) {
        A = A.reverse();
        for (let R = 0, re = Y.length; R < re; R++) {
          const $ = Y[R];
          Ci.isClockWise($) && (Y[R] = $.reverse());
        }
      }
      const F = Ci.triangulateShape(A, Y), H = A;
      for (let R = 0, re = Y.length; R < re; R++) {
        const $ = Y[R];
        A = A.concat($);
      }
      function k(R, re, $) {
        return re || console.error("THREE.ExtrudeGeometry: vec does not exist"), R.clone().addScaledVector(re, $);
      }
      const K = A.length, X = F.length;
      function q(R, re, $) {
        let ie, Z, ye;
        const pe = R.x - re.x, ge = R.y - re.y, Ue = $.x - R.x, ke = $.y - R.y, nt = pe * pe + ge * ge, T = pe * ke - ge * Ue;
        if (Math.abs(T) > Number.EPSILON) {
          const x = Math.sqrt(nt), O = Math.sqrt(Ue * Ue + ke * ke), te = re.x - ge / x, J = re.y + pe / x, ne = $.x - ke / O, xe = $.y + Ue / O, se = ((ne - te) * ke - (xe - J) * Ue) / (pe * ke - ge * Ue);
          ie = te + pe * se - R.x, Z = J + ge * se - R.y;
          const B = ie * ie + Z * Z;
          if (B <= 2)
            return new le(ie, Z);
          ye = Math.sqrt(B / 2);
        } else {
          let x = !1;
          pe > Number.EPSILON ? Ue > Number.EPSILON && (x = !0) : pe < -Number.EPSILON ? Ue < -Number.EPSILON && (x = !0) : Math.sign(ge) === Math.sign(ke) && (x = !0), x ? (ie = -ge, Z = pe, ye = Math.sqrt(nt)) : (ie = pe, Z = ge, ye = Math.sqrt(nt / 2));
        }
        return new le(ie / ye, Z / ye);
      }
      const Q = [];
      for (let R = 0, re = H.length, $ = re - 1, ie = R + 1; R < re; R++, $++, ie++)
        $ === re && ($ = 0), ie === re && (ie = 0), Q[R] = q(H[R], H[$], H[ie]);
      const j = [];
      let D, G = Q.concat();
      for (let R = 0, re = Y.length; R < re; R++) {
        const $ = Y[R];
        D = [];
        for (let ie = 0, Z = $.length, ye = Z - 1, pe = ie + 1; ie < Z; ie++, ye++, pe++)
          ye === Z && (ye = 0), pe === Z && (pe = 0), D[ie] = q($[ie], $[ye], $[pe]);
        j.push(D), G = G.concat(D);
      }
      for (let R = 0; R < m; R++) {
        const re = R / m, $ = f * Math.cos(re * Math.PI / 2), ie = g * Math.sin(re * Math.PI / 2) + _;
        for (let Z = 0, ye = H.length; Z < ye; Z++) {
          const pe = k(H[Z], Q[Z], ie);
          Ee(pe.x, pe.y, -$);
        }
        for (let Z = 0, ye = Y.length; Z < ye; Z++) {
          const pe = Y[Z];
          D = j[Z];
          for (let ge = 0, Ue = pe.length; ge < Ue; ge++) {
            const ke = k(pe[ge], D[ge], ie);
            Ee(ke.x, ke.y, -$);
          }
        }
      }
      const ce = g + _;
      for (let R = 0; R < K; R++) {
        const re = d ? k(A[R], G[R], ce) : A[R];
        y ? (w.copy(b.normals[0]).multiplyScalar(re.x), C.copy(b.binormals[0]).multiplyScalar(re.y), N.copy(v[0]).add(w).add(C), Ee(N.x, N.y, N.z)) : Ee(re.x, re.y, 0);
      }
      for (let R = 1; R <= h; R++)
        for (let re = 0; re < K; re++) {
          const $ = d ? k(A[re], G[re], ce) : A[re];
          y ? (w.copy(b.normals[R]).multiplyScalar($.x), C.copy(b.binormals[R]).multiplyScalar($.y), N.copy(v[R]).add(w).add(C), Ee(N.x, N.y, N.z)) : Ee($.x, $.y, u / h * R);
        }
      for (let R = m - 1; R >= 0; R--) {
        const re = R / m, $ = f * Math.cos(re * Math.PI / 2), ie = g * Math.sin(re * Math.PI / 2) + _;
        for (let Z = 0, ye = H.length; Z < ye; Z++) {
          const pe = k(H[Z], Q[Z], ie);
          Ee(pe.x, pe.y, u + $);
        }
        for (let Z = 0, ye = Y.length; Z < ye; Z++) {
          const pe = Y[Z];
          D = j[Z];
          for (let ge = 0, Ue = pe.length; ge < Ue; ge++) {
            const ke = k(pe[ge], D[ge], ie);
            y ? Ee(ke.x, ke.y + v[h - 1].y, v[h - 1].x + $) : Ee(ke.x, ke.y, u + $);
          }
        }
      }
      ue(), fe();
      function ue() {
        const R = i.length / 3;
        if (d) {
          let re = 0, $ = K * re;
          for (let ie = 0; ie < X; ie++) {
            const Z = F[ie];
            Te(Z[2] + $, Z[1] + $, Z[0] + $);
          }
          re = h + m * 2, $ = K * re;
          for (let ie = 0; ie < X; ie++) {
            const Z = F[ie];
            Te(Z[0] + $, Z[1] + $, Z[2] + $);
          }
        } else {
          for (let re = 0; re < X; re++) {
            const $ = F[re];
            Te($[2], $[1], $[0]);
          }
          for (let re = 0; re < X; re++) {
            const $ = F[re];
            Te($[0] + K * h, $[1] + K * h, $[2] + K * h);
          }
        }
        n.addGroup(R, i.length / 3 - R, 0);
      }
      function fe() {
        const R = i.length / 3;
        let re = 0;
        Se(H, re), re += H.length;
        for (let $ = 0, ie = Y.length; $ < ie; $++) {
          const Z = Y[$];
          Se(Z, re), re += Z.length;
        }
        n.addGroup(R, i.length / 3 - R, 1);
      }
      function Se(R, re) {
        let $ = R.length;
        for (; --$ >= 0; ) {
          const ie = $;
          let Z = $ - 1;
          Z < 0 && (Z = R.length - 1);
          for (let ye = 0, pe = h + m * 2; ye < pe; ye++) {
            const ge = K * ye, Ue = K * (ye + 1), ke = re + ie + ge, nt = re + Z + ge, T = re + Z + Ue, x = re + ie + Ue;
            $e(ke, nt, T, x);
          }
        }
      }
      function Ee(R, re, $) {
        l.push(R), l.push(re), l.push($);
      }
      function Te(R, re, $) {
        Qe(R), Qe(re), Qe($);
        const ie = i.length / 3, Z = E.generateTopUV(n, i, ie - 3, ie - 2, ie - 1);
        Re(Z[0]), Re(Z[1]), Re(Z[2]);
      }
      function $e(R, re, $, ie) {
        Qe(R), Qe(re), Qe(ie), Qe(re), Qe($), Qe(ie);
        const Z = i.length / 3, ye = E.generateSideWallUV(n, i, Z - 6, Z - 3, Z - 2, Z - 1);
        Re(ye[0]), Re(ye[1]), Re(ye[3]), Re(ye[1]), Re(ye[2]), Re(ye[3]);
      }
      function Qe(R) {
        i.push(l[R * 3 + 0]), i.push(l[R * 3 + 1]), i.push(l[R * 3 + 2]);
      }
      function Re(R) {
        r.push(R.x), r.push(R.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return D_(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let r = 0, o = e.shapes.length; r < o; r++) {
      const a = t[e.shapes[r]];
      n.push(a);
    }
    const i = e.options.extrudePath;
    return i !== void 0 && (e.options.extrudePath = new ah[i.type]().fromJSON(i)), new ta(n, e.options);
  }
}
const U_ = {
  generateTopUV: function(s, e, t, n, i) {
    const r = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], h = e[i * 3 + 1];
    return [
      new le(r, o),
      new le(a, l),
      new le(c, h)
    ];
  },
  generateSideWallUV: function(s, e, t, n, i, r) {
    const o = e[t * 3], a = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], g = e[i * 3 + 2], _ = e[r * 3], m = e[r * 3 + 1], p = e[r * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - c) ? [
      new le(o, 1 - l),
      new le(c, 1 - u),
      new le(d, 1 - g),
      new le(_, 1 - p)
    ] : [
      new le(a, 1 - l),
      new le(h, 1 - u),
      new le(f, 1 - g),
      new le(m, 1 - p)
    ];
  }
};
function D_(s, e, t) {
  if (t.shapes = [], Array.isArray(s))
    for (let n = 0, i = s.length; n < i; n++) {
      const r = s[n];
      t.shapes.push(r.uuid);
    }
  else
    t.shapes.push(s.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Cs extends jt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new De(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Oc, this.normalScale = new le(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Dn extends Cs {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new le(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return ft(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new De(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new De(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new De(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
function Tn(s, e, t) {
  return uh(s) ? new s.constructor(s.subarray(e, t !== void 0 ? t : s.length)) : s.slice(e, t);
}
function ar(s, e, t) {
  return !s || !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function uh(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function N_(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function Jl(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[o++] = s[a + l];
  }
  return i;
}
function dh(s, e, t, n) {
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
class Ls {
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
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l)
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
class O_ extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Wa,
      endingEnd: Wa
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, o = e + 1, a = i[r], l = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case Xa:
          r = e, a = 2 * t - n;
          break;
        case $a:
          r = i.length - 2, a = t + i[r] - i[r + 1];
          break;
        default:
          r = e, a = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case Xa:
          o = e, l = 2 * n - t;
          break;
        case $a:
          o = 1, l = n + i[1] - i[0];
          break;
        default:
          o = e - 1, l = t;
      }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = o * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, p = -d * m + 2 * d * _ - d * g, E = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, v = (-1 - f) * m + (1.5 + f) * _ + 0.5 * g, y = f * m - f * _;
    for (let b = 0; b !== a; ++b)
      r[b] = p * o[h + b] + E * o[c + b] + v * o[l + b] + y * o[u + b];
    return r;
  }
}
class F_ extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== a; ++d)
      r[d] = o[c + d] * u + o[l + d] * h;
    return r;
  }
}
class B_ extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class tn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = ar(t, this.TimeBufferType), this.values = ar(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: ar(e.times, Array),
        values: ar(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new B_(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new F_(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new O_(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case vs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Fi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ur:
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
        return vs;
      case this.InterpolantFactoryMethodLinear:
        return Fi;
      case this.InterpolantFactoryMethodSmooth:
        return Ur;
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
      this.times = Tn(n, r, o), this.values = Tn(this.values, r * a, o * a);
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
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1;
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = !1;
        break;
      }
      o = l;
    }
    if (i !== void 0 && uh(i))
      for (let a = 0, l = i.length; a !== l; ++a) {
        const c = i[a];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = Tn(this.times), t = Tn(this.values), n = this.getValueSize(), i = this.getInterpolation() === Ur, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = !1;
      const c = e[a], h = e[a + 1];
      if (c !== h && (a !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const u = a * n, d = u - n, f = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[d + g] || _ !== t[f + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
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
      for (let a = r * n, l = o * n, c = 0; c !== n; ++c)
        t[l + c] = t[a + c];
      ++o;
    }
    return o !== e.length ? (this.times = Tn(e, 0, o), this.values = Tn(t, 0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = Tn(this.times, 0), t = Tn(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
tn.prototype.TimeBufferType = Float32Array;
tn.prototype.ValueBufferType = Float32Array;
tn.prototype.DefaultInterpolation = Fi;
class Zi extends tn {
}
Zi.prototype.ValueTypeName = "bool";
Zi.prototype.ValueBufferType = Array;
Zi.prototype.DefaultInterpolation = vs;
Zi.prototype.InterpolantFactoryMethodLinear = void 0;
Zi.prototype.InterpolantFactoryMethodSmooth = void 0;
class fh extends tn {
}
fh.prototype.ValueTypeName = "color";
class Hi extends tn {
}
Hi.prototype.ValueTypeName = "number";
class z_ extends Ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
    let c = e * a;
    for (let h = c + a; c !== h; c += 4)
      Un.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class ni extends tn {
  InterpolantFactoryMethodLinear(e) {
    return new z_(this.times, this.values, this.getValueSize(), e);
  }
}
ni.prototype.ValueTypeName = "quaternion";
ni.prototype.DefaultInterpolation = Fi;
ni.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ji extends tn {
}
Ji.prototype.ValueTypeName = "string";
Ji.prototype.ValueBufferType = Array;
Ji.prototype.DefaultInterpolation = vs;
Ji.prototype.InterpolantFactoryMethodLinear = void 0;
Ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class Gi extends tn {
}
Gi.prototype.ValueTypeName = "vector";
class H_ {
  constructor(e, t = -1, n, i = hu) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Ot(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(k_(n[o]).scale(i));
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
      t.push(tn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push(
        (a + r - 1) % r,
        a,
        (a + 1) % r
      ), c.push(0, 1, 0);
      const h = N_(l);
      l = Jl(l, 1, h), c = Jl(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(
        new Hi(
          ".morphTargetInfluences[" + t[a].name + "]",
          l,
          c
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
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
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
        dh(f, m, p, g), m.length !== 0 && _.push(new u(d, m, p));
      }
    }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
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
            for (let E = 0; E !== d[g].morphTargets.length; ++E) {
              const v = d[g];
              m.push(v.time), p.push(v.morphTarget === _ ? 1 : 0);
            }
            i.push(new Hi(".morphTargetInfluence[" + _ + "]", m, p));
          }
          l = f.length * o;
        } else {
          const f = ".bones[" + t[u].name + "]";
          n(
            Gi,
            f + ".position",
            d,
            "pos",
            i
          ), n(
            ni,
            f + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Gi,
            f + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, l, i, a);
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
function G_(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Hi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Gi;
    case "color":
      return fh;
    case "quaternion":
      return ni;
    case "bool":
    case "boolean":
      return Zi;
    case "string":
      return Ji;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function k_(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = G_(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    dh(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const ki = {
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
class V_ {
  constructor(e, t, n) {
    const i = this;
    let r = !1, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, r === !1 && i.onStart !== void 0 && i.onStart(h, o, a), r = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const f = c[u], g = c[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return g;
      }
      return null;
    };
  }
}
const W_ = /* @__PURE__ */ new V_();
class ii {
  constructor(e) {
    this.manager = e !== void 0 ? e : W_, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
ii.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const un = {};
class X_ extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class na extends ii {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = ki.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (un[e] !== void 0) {
      un[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    un[e] = [], un[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const h = un[e], u = c.body.getReader(), d = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), f = d ? parseInt(d) : 0, g = f !== 0;
        let _ = 0;
        const m = new ReadableStream({
          start(p) {
            E();
            function E() {
              u.read().then(({ done: v, value: y }) => {
                if (v)
                  p.close();
                else {
                  _ += y.byteLength;
                  const b = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: f });
                  for (let C = 0, w = h.length; C < w; C++) {
                    const N = h[C];
                    N.onProgress && N.onProgress(b);
                  }
                  p.enqueue(y), E();
                }
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new X_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return c.json();
        default:
          if (a === void 0)
            return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return c.arrayBuffer().then((g) => f.decode(g));
          }
      }
    }).then((c) => {
      ki.add(e, c);
      const h = un[e];
      delete un[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(c);
      }
    }).catch((c) => {
      const h = un[e];
      if (h === void 0)
        throw this.manager.itemError(e), c;
      delete un[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(c);
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
class $_ extends ii {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = ki.get(e);
    if (o !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    const a = xs("img");
    function l() {
      h(), ki.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class q_ extends ii {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new gt(), o = new $_(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class Sr extends Xe {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new De(e), this.intensity = t;
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
class Y_ extends Sr {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Xe.DEFAULT_UP), this.updateMatrix(), this.groundColor = new De(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const lo = /* @__PURE__ */ new Fe(), Ql = /* @__PURE__ */ new L(), ec = /* @__PURE__ */ new L();
class ia {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new le(512, 512), this.map = null, this.mapPass = null, this.matrix = new Fe(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new $o(), this._frameExtents = new le(1, 1), this._viewportCount = 1, this._viewports = [
      new je(0, 0, 1, 1)
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
    Ql.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ql), ec.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ec), t.updateMatrixWorld(), lo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(lo), n.set(
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
    ), n.multiply(lo);
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
class j_ extends ia {
  constructor() {
    super(new Et(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Bi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class K_ extends Sr {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Xe.DEFAULT_UP), this.updateMatrix(), this.target = new Xe(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new j_();
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
const tc = /* @__PURE__ */ new Fe(), ls = /* @__PURE__ */ new L(), co = /* @__PURE__ */ new L();
class Z_ extends ia {
  constructor() {
    super(new Et(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new le(4, 2), this._viewportCount = 6, this._viewports = [
      new je(2, 1, 1, 1),
      new je(0, 1, 1, 1),
      new je(3, 1, 1, 1),
      new je(1, 1, 1, 1),
      new je(3, 0, 1, 1),
      new je(1, 0, 1, 1)
    ], this._cubeDirections = [
      new L(1, 0, 0),
      new L(-1, 0, 0),
      new L(0, 0, 1),
      new L(0, 0, -1),
      new L(0, 1, 0),
      new L(0, -1, 0)
    ], this._cubeUps = [
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 0, 1),
      new L(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), ls.setFromMatrixPosition(e.matrixWorld), n.position.copy(ls), co.copy(n.position), co.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(co), n.updateMatrixWorld(), i.makeTranslation(-ls.x, -ls.y, -ls.z), tc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(tc);
  }
}
class J_ extends Sr {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Z_();
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
class Q_ extends ia {
  constructor() {
    super(new Yo(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ev extends Sr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Xe.DEFAULT_UP), this.updateMatrix(), this.target = new Xe(), this.shadow = new Q_();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Oo {
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
class tv extends ii {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = ki.get(e);
    if (o !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      ki.add(e, l), t && t(l), r.manager.itemEnd(e);
    }).catch(function(l) {
      i && i(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }), r.manager.itemStart(e);
  }
}
const sa = "\\[\\]\\.:\\/", nv = new RegExp("[" + sa + "]", "g"), ra = "[^" + sa + "]", iv = "[^" + sa.replace("\\.", "") + "]", sv = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", ra), rv = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", iv), ov = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ra), av = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ra), lv = new RegExp(
  "^" + sv + rv + ov + av + "$"
), cv = ["material", "materials", "bones", "map"];
class hv {
  constructor(e, t, n) {
    const i = n || qe.parseTrackName(t);
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
class qe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || qe.parseTrackName(t), this.node = qe.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new qe.Composite(e, t, n) : new qe(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(nv, "");
  }
  static parseTrackName(e) {
    const t = lv.exec(e);
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
      cv.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
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
          const l = n(a.children);
          if (l)
            return l;
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
    if (e || (e = qe.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
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
            if (e[h].name === c) {
              c = h;
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
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const o = e[i];
    if (o === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
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
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else
      o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
qe.Composite = hv;
qe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
qe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
qe.prototype.GetterByBindingType = [
  qe.prototype._getValue_direct,
  qe.prototype._getValue_array,
  qe.prototype._getValue_arrayElement,
  qe.prototype._getValue_toArray
];
qe.prototype.SetterByBindingTypeAndVersioning = [
  [
    qe.prototype._setValue_direct,
    qe.prototype._setValue_direct_setNeedsUpdate,
    qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    qe.prototype._setValue_array,
    qe.prototype._setValue_array_setNeedsUpdate,
    qe.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    qe.prototype._setValue_arrayElement,
    qe.prototype._setValue_arrayElement_setNeedsUpdate,
    qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    qe.prototype._setValue_fromArray,
    qe.prototype._setValue_fromArray_setNeedsUpdate,
    qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class uv {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Rs(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Xo(), this.params = {
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
    return Fo(e, this, n, t), n.sort(nc), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, r = e.length; i < r; i++)
      Fo(e[i], this, n, t);
    return n.sort(nc), n;
  }
}
function nc(s, e) {
  return s.distance - e.distance;
}
function Fo(s, e, t, n) {
  if (s.layers.test(e.layers) && s.raycast(e, t), n === !0) {
    const i = s.children;
    for (let r = 0, o = i.length; r < o; r++)
      Fo(i[r], e, t, !0);
  }
}
class dv {
  constructor() {
    this.type = "ShapePath", this.color = new De(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new Uo(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
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
      const E = [];
      for (let v = 0, y = p.length; v < y; v++) {
        const b = p[v], C = new hr();
        C.curves = b.curves, E.push(C);
      }
      return E;
    }
    function n(p, E) {
      const v = E.length;
      let y = !1;
      for (let b = v - 1, C = 0; C < v; b = C++) {
        let w = E[b], N = E[C], M = N.x - w.x, A = N.y - w.y;
        if (Math.abs(A) > Number.EPSILON) {
          if (A < 0 && (w = E[C], M = -M, N = E[b], A = -A), p.y < w.y || p.y > N.y)
            continue;
          if (p.y === w.y) {
            if (p.x === w.x)
              return !0;
          } else {
            const Y = A * (p.x - w.x) - M * (p.y - w.y);
            if (Y === 0)
              return !0;
            if (Y < 0)
              continue;
            y = !y;
          }
        } else {
          if (p.y !== w.y)
            continue;
          if (N.x <= p.x && p.x <= w.x || w.x <= p.x && p.x <= N.x)
            return !0;
        }
      }
      return y;
    }
    const i = Ci.isClockWise, r = this.subPaths;
    if (r.length === 0)
      return [];
    let o, a, l;
    const c = [];
    if (r.length === 1)
      return a = r[0], l = new hr(), l.curves = a.curves, c.push(l), c;
    let h = !i(r[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let f = [], g = 0, _;
    d[g] = void 0, f[g] = [];
    for (let p = 0, E = r.length; p < E; p++)
      a = r[p], _ = a.getPoints(), o = i(_), o = e ? !o : o, o ? (!h && d[g] && g++, d[g] = { s: new hr(), p: _ }, d[g].s.curves = a.curves, h && g++, f[g] = []) : f[g].push({ h: a, p: _[0] });
    if (!d[0])
      return t(r);
    if (d.length > 1) {
      let p = !1, E = 0;
      for (let v = 0, y = d.length; v < y; v++)
        u[v] = [];
      for (let v = 0, y = d.length; v < y; v++) {
        const b = f[v];
        for (let C = 0; C < b.length; C++) {
          const w = b[C];
          let N = !0;
          for (let M = 0; M < d.length; M++)
            n(w.p, d[M].p) && (v !== M && E++, N ? (N = !1, u[M].push(w)) : p = !0);
          N && u[v].push(w);
        }
      }
      E > 0 && p === !1 && (f = u);
    }
    let m;
    for (let p = 0, E = d.length; p < E; p++) {
      l = d[p].s, c.push(l), m = f[p];
      for (let v = 0, y = m.length; v < y; v++)
        l.holes.push(m[v].h);
    }
    return c;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ko
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ko);
class fv {
  static createButton(e, t = {}) {
    const n = document.createElement("button");
    function i() {
      if (t.domOverlay === void 0) {
        const d = document.createElement("div");
        d.style.display = "none", document.body.appendChild(d);
        const f = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        f.setAttribute("width", 38), f.setAttribute("height", 38), f.style.position = "absolute", f.style.right = "20px", f.style.top = "20px", f.addEventListener("click", function() {
          c.end();
        }), d.appendChild(f);
        const g = document.createElementNS("http://www.w3.org/2000/svg", "path");
        g.setAttribute("d", "M 12,12 L 28,28 M 28,12 12,28"), g.setAttribute("stroke", "#fff"), g.setAttribute("stroke-width", 2), f.appendChild(g), t.optionalFeatures === void 0 && (t.optionalFeatures = []), t.optionalFeatures.push("dom-overlay"), t.domOverlay = { root: d };
      }
      let c = null;
      async function h(d) {
        d.addEventListener("end", u), e.xr.setReferenceSpaceType("local"), await e.xr.setSession(d), n.textContent = "STOP AR", t.domOverlay.root.style.display = "", c = d;
      }
      function u() {
        c.removeEventListener("end", u), n.textContent = "START AR", t.domOverlay.root.style.display = "none", c = null;
      }
      n.style.display = "", n.style.cursor = "pointer", n.style.left = "calc(50% - 50px)", n.style.width = "100px", n.textContent = "START AR", n.onmouseenter = function() {
        n.style.opacity = "1.0";
      }, n.onmouseleave = function() {
        n.style.opacity = "0.5";
      }, n.onclick = function() {
        c === null ? navigator.xr.requestSession("immersive-ar", t).then(h) : c.end();
      };
    }
    function r() {
      n.style.display = "", n.style.cursor = "auto", n.style.left = "calc(50% - 75px)", n.style.width = "150px", n.onmouseenter = null, n.onmouseleave = null, n.onclick = null;
    }
    function o() {
      r(), n.textContent = "AR NOT SUPPORTED";
    }
    function a(c) {
      r(), console.warn("Exception when trying to call xr.isSessionSupported", c), n.textContent = "AR NOT ALLOWED";
    }
    function l(c) {
      c.style.position = "absolute", c.style.bottom = "20px", c.style.padding = "12px 6px", c.style.border = "1px solid #fff", c.style.borderRadius = "4px", c.style.background = "rgba(0,0,0,0.1)", c.style.color = "#fff", c.style.font = "normal 13px sans-serif", c.style.textAlign = "center", c.style.opacity = "0.5", c.style.outline = "none", c.style.zIndex = "999";
    }
    if ("xr" in navigator)
      return n.id = "ARButton", n.style.display = "none", l(n), navigator.xr.isSessionSupported("immersive-ar").then(function(c) {
        c ? i() : o();
      }).catch(a), n;
    {
      const c = document.createElement("a");
      return window.isSecureContext === !1 ? (c.href = document.location.href.replace(/^http:/, "https:"), c.innerHTML = "WEBXR NEEDS HTTPS") : (c.href = "https://immersiveweb.dev/", c.innerHTML = "WEBXR NOT AVAILABLE"), c.style.left = "calc(50% - 90px)", c.style.width = "180px", c.style.textDecoration = "none", l(c), c;
    }
  }
}
let ho, uo, Es, Yn, mt;
function pv() {
  const s = document.createElement("div");
  document.body.appendChild(s), Yn = new $g(), Es = new Et(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    20
  );
  const e = new Y_(16777215, 12303359, 1);
  e.position.set(0.5, 1, 0.25), Yn.add(e), mt = new eh({ antialias: !0, alpha: !0 }), mt.physicallyCorrectLights = !0, mt.outputEncoding = In, mt.toneMapping = Ac, mt.toneMappingExposure = 1, mt.shadowMap.enabled = !0, mt.shadowMap.type = Mc, mt.setPixelRatio(window.devicePixelRatio), mt.setSize(window.innerWidth, window.innerHeight), mt.xr.enabled = !0, s.appendChild(mt.domElement), document.body.appendChild(fv.createButton(mt)), ho = mt.xr.getController(0), Yn.add(ho), uo = mt.xr.getController(1), Yn.add(uo);
  const t = new Ft().setFromPoints([
    new L(0, 0, 0),
    new L(0, 0, -1)
  ]), n = new yr(t);
  n.name = "line", n.scale.z = 5, ho.add(n.clone()), uo.add(n.clone()), window.addEventListener("resize", mv);
}
function mv() {
  Es.aspect = window.innerWidth / window.innerHeight, Es.updateProjectionMatrix(), mt.setSize(window.innerWidth, window.innerHeight);
}
function gv() {
  mt.setAnimationLoop(_v);
}
function _v() {
  mt.render(Yn, Es);
}
class vv {
  constructor(e) {
    this.registeredListeners = /* @__PURE__ */ new Map(), this.scene = e;
    const t = new uv(), n = new le(), i = (r) => {
      n.x = r.clientX / window.innerWidth * 2 - 1, n.y = -(r.clientY / window.innerHeight) * 2 + 1, t.setFromCamera(n, Es);
      const o = this.registeredListeners.keys();
      return t.intersectObjects(Array.from(o));
    };
    window.addEventListener("click", (r) => {
      const o = i(r);
      for (const a of o) {
        const l = a.object, c = this.registeredListeners.get(l);
        if (c)
          c();
        else {
          let h = l.parent;
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
let fo;
function Li() {
  return Yn || (pv(), gv()), fo || (fo = new vv(Yn)), fo;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = window, oa = ur.ShadowRoot && (ur.ShadyCSS === void 0 || ur.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ph = Symbol(), ic = /* @__PURE__ */ new WeakMap();
class xv {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== ph)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (oa && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = ic.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && ic.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}
const yv = (s) => new xv(typeof s == "string" ? s : s + "", void 0, ph), Mv = (s, e) => {
  oa ? s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach((t) => {
    const n = document.createElement("style"), i = ur.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, s.appendChild(n);
  });
}, sc = oa ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules)
    t += n.cssText;
  return yv(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var po;
const mr = window, rc = mr.trustedTypes, Sv = rc ? rc.emptyScript : "", oc = mr.reactiveElementPolyfillSupport, Bo = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? Sv : null;
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
} }, mh = (s, e) => e !== s && (e == e || s == s), mo = { attribute: !0, type: String, converter: Bo, reflect: !1, hasChanged: mh };
class Ti extends HTMLElement {
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
  static createProperty(e, t = mo) {
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
    return this.elementProperties.get(e) || mo;
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
        t.unshift(sc(i));
    } else
      e !== void 0 && t.push(sc(e));
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
    return Mv(t, this.constructor.elementStyles), t;
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
  _$EO(e, t, n = mo) {
    var i;
    const r = this.constructor._$Ep(e, n);
    if (r !== void 0 && n.reflect === !0) {
      const o = (((i = n.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? n.converter : Bo).toAttribute(t, n.type);
      this._$El = e, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$El = null;
    }
  }
  _$AK(e, t) {
    var n;
    const i = this.constructor, r = i._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const o = i.getPropertyOptions(r), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0 ? o.converter : Bo;
      this._$El = r, this[r] = a.fromAttribute(t, o.type), this._$El = null;
    }
  }
  requestUpdate(e, t, n) {
    let i = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || mh)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, n))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
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
Ti.finalized = !0, Ti.elementProperties = /* @__PURE__ */ new Map(), Ti.elementStyles = [], Ti.shadowRootOptions = { mode: "open" }, oc == null || oc({ ReactiveElement: Ti }), ((po = mr.reactiveElementVersions) !== null && po !== void 0 ? po : mr.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var go;
const gr = window, Vi = gr.trustedTypes, ac = Vi ? Vi.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, wn = `lit$${(Math.random() + "").slice(9)}$`, gh = "?" + wn, Ev = `<${gh}>`, Wi = document, Ts = (s = "") => Wi.createComment(s), As = (s) => s === null || typeof s != "object" && typeof s != "function", _h = Array.isArray, Tv = (s) => _h(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", cs = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, lc = /-->/g, cc = />/g, Gn = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), hc = /'/g, uc = /"/g, vh = /^(?:script|style|textarea|title)$/i, Av = (s) => (e, ...t) => ({ _$litType$: s, strings: e, values: t }), Qi = Av(1), Xi = Symbol.for("lit-noChange"), pt = Symbol.for("lit-nothing"), dc = /* @__PURE__ */ new WeakMap(), Pi = Wi.createTreeWalker(Wi, 129, null, !1), bv = (s, e) => {
  const t = s.length - 1, n = [];
  let i, r = e === 2 ? "<svg>" : "", o = cs;
  for (let l = 0; l < t; l++) {
    const c = s[l];
    let h, u, d = -1, f = 0;
    for (; f < c.length && (o.lastIndex = f, u = o.exec(c), u !== null); )
      f = o.lastIndex, o === cs ? u[1] === "!--" ? o = lc : u[1] !== void 0 ? o = cc : u[2] !== void 0 ? (vh.test(u[2]) && (i = RegExp("</" + u[2], "g")), o = Gn) : u[3] !== void 0 && (o = Gn) : o === Gn ? u[0] === ">" ? (o = i != null ? i : cs, d = -1) : u[1] === void 0 ? d = -2 : (d = o.lastIndex - u[2].length, h = u[1], o = u[3] === void 0 ? Gn : u[3] === '"' ? uc : hc) : o === uc || o === hc ? o = Gn : o === lc || o === cc ? o = cs : (o = Gn, i = void 0);
    const g = o === Gn && s[l + 1].startsWith("/>") ? " " : "";
    r += o === cs ? c + Ev : d >= 0 ? (n.push(h), c.slice(0, d) + "$lit$" + c.slice(d) + wn + g) : c + wn + (d === -2 ? (n.push(void 0), l) : g);
  }
  const a = r + (s[t] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(s) || !s.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [ac !== void 0 ? ac.createHTML(a) : a, n];
};
class bs {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let r = 0, o = 0;
    const a = e.length - 1, l = this.parts, [c, h] = bv(e, t);
    if (this.el = bs.createElement(c, n), Pi.currentNode = this.el.content, t === 2) {
      const u = this.el.content, d = u.firstChild;
      d.remove(), u.append(...d.childNodes);
    }
    for (; (i = Pi.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const u = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(wn)) {
              const f = h[o++];
              if (u.push(d), f !== void 0) {
                const g = i.getAttribute(f.toLowerCase() + "$lit$").split(wn), _ = /([.?@])?(.*)/.exec(f);
                l.push({ type: 1, index: r, name: _[2], strings: g, ctor: _[1] === "." ? Rv : _[1] === "?" ? Lv : _[1] === "@" ? Pv : Er });
              } else
                l.push({ type: 6, index: r });
            }
          for (const d of u)
            i.removeAttribute(d);
        }
        if (vh.test(i.tagName)) {
          const u = i.textContent.split(wn), d = u.length - 1;
          if (d > 0) {
            i.textContent = Vi ? Vi.emptyScript : "";
            for (let f = 0; f < d; f++)
              i.append(u[f], Ts()), Pi.nextNode(), l.push({ type: 2, index: ++r });
            i.append(u[d], Ts());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === gh)
          l.push({ type: 2, index: r });
        else {
          let u = -1;
          for (; (u = i.data.indexOf(wn, u + 1)) !== -1; )
            l.push({ type: 7, index: r }), u += wn.length - 1;
        }
      r++;
    }
  }
  static createElement(e, t) {
    const n = Wi.createElement("template");
    return n.innerHTML = e, n;
  }
}
function $i(s, e, t = s, n) {
  var i, r, o, a;
  if (e === Xi)
    return e;
  let l = n !== void 0 ? (i = t._$Co) === null || i === void 0 ? void 0 : i[n] : t._$Cl;
  const c = As(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== c && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), c === void 0 ? l = void 0 : (l = new c(s), l._$AT(s, t, n)), n !== void 0 ? ((o = (a = t)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[n] = l : t._$Cl = l), l !== void 0 && (e = $i(s, l._$AS(s, e.values), l, n)), e;
}
class wv {
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
    const { el: { content: n }, parts: i } = this._$AD, r = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : Wi).importNode(n, !0);
    Pi.currentNode = r;
    let o = Pi.nextNode(), a = 0, l = 0, c = i[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let h;
        c.type === 2 ? h = new Ps(o, o.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(o, c.name, c.strings, this, e) : c.type === 6 && (h = new Iv(o, this, e)), this.u.push(h), c = i[++l];
      }
      a !== (c == null ? void 0 : c.index) && (o = Pi.nextNode(), a++);
    }
    return r;
  }
  p(e) {
    let t = 0;
    for (const n of this.u)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class Ps {
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
    e = $i(this, e, t), As(e) ? e === pt || e == null || e === "" ? (this._$AH !== pt && this._$AR(), this._$AH = pt) : e !== this._$AH && e !== Xi && this.g(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Tv(e) ? this.k(e) : this.g(e);
  }
  O(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  g(e) {
    this._$AH !== pt && As(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Wi.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var t;
    const { values: n, _$litType$: i } = e, r = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = bs.createElement(i.h, this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === r)
      this._$AH.p(n);
    else {
      const o = new wv(r, this), a = o.v(this.options);
      o.p(n), this.T(a), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = dc.get(e.strings);
    return t === void 0 && dc.set(e.strings, t = new bs(e)), t;
  }
  k(e) {
    _h(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const r of e)
      i === t.length ? t.push(n = new Ps(this.O(Ts()), this.O(Ts()), this, this.options)) : n = t[i], n._$AI(r), i++;
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
class Er {
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
      e = $i(this, e, t, 0), o = !As(e) || e !== this._$AH && e !== Xi, o && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = r[0], l = 0; l < r.length - 1; l++)
        c = $i(this, a[n + l], t, l), c === Xi && (c = this._$AH[l]), o || (o = !As(c) || c !== this._$AH[l]), c === pt ? e = pt : e !== pt && (e += (c != null ? c : "") + r[l + 1]), this._$AH[l] = c;
    }
    o && !i && this.j(e);
  }
  j(e) {
    e === pt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "");
  }
}
class Rv extends Er {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === pt ? void 0 : e;
  }
}
const Cv = Vi ? Vi.emptyScript : "";
class Lv extends Er {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== pt ? this.element.setAttribute(this.name, Cv) : this.element.removeAttribute(this.name);
  }
}
class Pv extends Er {
  constructor(e, t, n, i, r) {
    super(e, t, n, i, r), this.type = 5;
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = $i(this, e, t, 0)) !== null && n !== void 0 ? n : pt) === Xi)
      return;
    const i = this._$AH, r = e === pt && i !== pt || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, o = e !== pt && (i === pt || r);
    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Iv {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    $i(this, e);
  }
}
const fc = gr.litHtmlPolyfillSupport;
fc == null || fc(bs, Ps), ((go = gr.litHtmlVersions) !== null && go !== void 0 ? go : gr.litHtmlVersions = []).push("2.4.0");
const Uv = (s, e, t) => {
  var n, i;
  const r = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
  let o = r._$litPart$;
  if (o === void 0) {
    const a = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
    r._$litPart$ = o = new Ps(e.insertBefore(Ts(), a), a, void 0, t != null ? t : {});
  }
  return o._$AI(s), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _o, vo;
class Kt extends Ti {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Uv(t, this.renderRoot, this.renderOptions);
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
    return Xi;
  }
}
Kt.finalized = !0, Kt._$litElement$ = !0, (_o = globalThis.litElementHydrateSupport) === null || _o === void 0 || _o.call(globalThis, { LitElement: Kt });
const pc = globalThis.litElementPolyfillSupport;
pc == null || pc({ LitElement: Kt });
((vo = globalThis.litElementVersions) !== null && vo !== void 0 ? vo : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const es = (s) => (e) => typeof e == "function" ? ((t, n) => (customElements.define(t, n), n))(s, e) : ((t, n) => {
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
const Dv = (s, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(t) {
  t.createProperty(e.key, s);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(t) {
  t.createProperty(e.key, s);
} };
function Ke(s) {
  return (e, t) => t !== void 0 ? ((n, i, r) => {
    i.constructor.createProperty(r, n);
  })(s, e, t) : Dv(s, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var xo;
((xo = window.HTMLSlotElement) === null || xo === void 0 ? void 0 : xo.prototype.assignedElements) != null;
var Nv = Object.defineProperty, Ov = Object.getOwnPropertyDescriptor, xh = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ov(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && Nv(e, t, i), i;
};
let qi = class extends Kt {
  constructor() {
    super(...arguments), this.space = new Xe();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), Li().scene.add(this.space);
  }
  render() {
    return Li(), Qi``;
  }
};
xh([
  Ke({ type: Xe })
], qi.prototype, "space", 2);
qi = xh([
  es("mv-space")
], qi);
function mc(s, e) {
  if (e === uu)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === wo || e === Dc) {
    let t = s.getIndex();
    if (t === null) {
      const o = [], a = s.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++)
          o.push(l);
        s.setIndex(o), t = s.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === wo)
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
class Fv extends ii {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new kv(t);
    }), this.register(function(t) {
      return new Kv(t);
    }), this.register(function(t) {
      return new Zv(t);
    }), this.register(function(t) {
      return new Jv(t);
    }), this.register(function(t) {
      return new Wv(t);
    }), this.register(function(t) {
      return new Xv(t);
    }), this.register(function(t) {
      return new $v(t);
    }), this.register(function(t) {
      return new qv(t);
    }), this.register(function(t) {
      return new Gv(t);
    }), this.register(function(t) {
      return new Yv(t);
    }), this.register(function(t) {
      return new Vv(t);
    }), this.register(function(t) {
      return new jv(t);
    }), this.register(function(t) {
      return new zv(t);
    }), this.register(function(t) {
      return new Qv(t);
    }), this.register(function(t) {
      return new ex(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = Oo.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new na(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, o, function(h) {
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
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === yh) {
        try {
          o[Ve.KHR_BINARY_GLTF] = new tx(e);
        } catch (u) {
          i && i(u);
          return;
        }
        r = JSON.parse(o[Ve.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(l.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new px(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      a[u.name] = u, o[u.name] = !0;
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
        switch (u) {
          case Ve.KHR_MATERIALS_UNLIT:
            o[u] = new Hv();
            break;
          case Ve.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new nx(r, this.dracoLoader);
            break;
          case Ve.KHR_TEXTURE_TRANSFORM:
            o[u] = new ix();
            break;
          case Ve.KHR_MESH_QUANTIZATION:
            o[u] = new sx();
            break;
          default:
            d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(o), c.setPlugins(a), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function Bv() {
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
const Ve = {
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
class zv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new De(16777215);
    l.color !== void 0 && h.fromArray(l.color);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new ev(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new J_(h), c.distance = u;
        break;
      case "spot":
        c = new K_(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, bn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class Hv {
  constructor() {
    this.name = Ve.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return $n;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new De(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.fromArray(o), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, Ie));
    }
    return Promise.all(i);
  }
}
class Gv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class kv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new le(a, a);
    }
    return Promise.all(r);
  }
}
class Vv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class Wv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new De(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Ie)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class Xv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class $v {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new De(a[0], a[1], a[2]), Promise.all(r);
  }
}
class qv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class Yv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new De(a[0], a[1], a[2]), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Ie)), Promise.all(r);
  }
}
class jv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class Kv {
  constructor(e) {
    this.parser = e, this.name = Ve.KHR_TEXTURE_BASISU;
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
class Zv {
  constructor(e) {
    this.parser = e, this.name = Ve.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const o = r.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, o.source, l);
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
class Jv {
  constructor(e) {
    this.parser = e, this.name = Ve.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const o = r.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, o.source, l);
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
class Qv {
  constructor(e) {
    this.name = Ve.EXT_MESHOPT_COMPRESSION, this.parser = e;
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
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, l, c);
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
class ex {
  constructor(e) {
    this.name = Ve.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== Ut.TRIANGLES && c.mode !== Ut.TRIANGLE_STRIP && c.mode !== Ut.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in o)
      a.push(this.parser.getDependency("accessor", o[c]).then((h) => (l[c] = h, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, f = [];
      for (const g of u) {
        const _ = new Fe(), m = new L(), p = new Un(), E = new L(1, 1, 1), v = new Qg(g.geometry, g.material, d);
        for (let y = 0; y < d; y++)
          l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, y), l.ROTATION && p.fromBufferAttribute(l.ROTATION, y), l.SCALE && E.fromBufferAttribute(l.SCALE, y), v.setMatrixAt(y, _.compose(m, p, E));
        for (const y in l)
          y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && g.geometry.setAttribute(y, l[y]);
        Xe.prototype.copy.call(v, g), this.parser.assignFinalMaterial(v), f.push(v);
      }
      return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
    }));
  }
}
const yh = "glTF", hs = 12, gc = { JSON: 1313821514, BIN: 5130562 };
class tx {
  constructor(e) {
    this.name = Ve.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, hs), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== yh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - hs, r = new DataView(e, hs);
    let o = 0;
    for (; o < i; ) {
      const a = r.getUint32(o, !0);
      o += 4;
      const l = r.getUint32(o, !0);
      if (o += 4, l === gc.JSON) {
        const c = new Uint8Array(e, hs + o, a);
        this.content = n.decode(c);
      } else if (l === gc.BIN) {
        const c = hs + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class nx {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ve.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const h in o) {
      const u = zo[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in e.attributes) {
      const u = zo[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], f = Ii[d.componentType];
        c[u] = f.name, l[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u) {
        i.decodeDracoFile(h, function(d) {
          for (const f in d.attributes) {
            const g = d.attributes[f], _ = l[f];
            _ !== void 0 && (g.normalized = _);
          }
          u(d);
        }, a, c);
      });
    });
  }
}
class ix {
  constructor() {
    this.name = Ve.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class sx {
  constructor() {
    this.name = Ve.KHR_MESH_QUANTIZATION;
  }
}
class Mh extends Ls {
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
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, h = i - t, u = (n - t) / h, d = u * u, f = d * u, g = e * c, _ = g - c, m = -2 * f + 3 * d, p = f - d, E = 1 - m, v = p - d + u;
    for (let y = 0; y !== a; y++) {
      const b = o[_ + y + a], C = o[_ + y + l] * h, w = o[g + y + a], N = o[g + y] * h;
      r[y] = E * b + v * C + m * w + p * N;
    }
    return r;
  }
}
const rx = new Un();
class ox extends Mh {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return rx.fromArray(r).normalize().toArray(r), r;
  }
}
const Ut = {
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
}, Ii = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, _c = {
  9728: dt,
  9729: At,
  9984: bo,
  9985: wc,
  9986: lr,
  9987: Jn
}, vc = {
  33071: Dt,
  33648: dr,
  10497: Ni
}, yo = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, zo = {
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
}, An = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, ax = {
  CUBICSPLINE: void 0,
  LINEAR: Fi,
  STEP: vs
}, Mo = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function lx(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Cs({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: mn
  })), s.DefaultMaterial;
}
function kn(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function bn(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function cx(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (r = !0), n && i && r)
      break;
  }
  if (!n && !i && !r)
    return Promise.resolve(s);
  const o = [], a = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
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
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = !0, s;
  });
}
function hx(s, e) {
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
function ux(s) {
  let e;
  const t = s.extensions && s.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + So(t.attributes) : e = s.indices + ":" + So(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + So(s.targets[n]);
  return e;
}
function So(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function Ho(s) {
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
function dx(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const fx = new Fe();
class px {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Bv(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, r = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new q_(this.options.manager) : this.textureLoader = new tv(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new na(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      kn(r, a, i), bn(a, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i].joints;
      for (let a = 0, l = o.length; a < l; a++)
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
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, h] of o.children.entries())
        r(h, a.children[c]);
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
      return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, o) {
      n.load(Oo.resolveURL(t.uri, i.path), r, void 0, function() {
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
      const o = yo[i.type], a = Ii[i.componentType], l = i.normalized === !0, c = new a(i.count * o);
      return Promise.resolve(new Tt(c, o, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = yo[i.type], c = Ii[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, m;
      if (f && f !== u) {
        const p = Math.floor(d / f), E = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let v = t.cache.get(E);
        v || (_ = new c(a, p * f, i.count * f / h), v = new qg(_, f / h), t.cache.add(E, v)), m = new Ko(v, l, d % f / h, g);
      } else
        a === null ? _ = new c(i.count * l) : _ = new c(a, d, i.count * l), m = new Tt(_, l, g);
      if (i.sparse !== void 0) {
        const p = yo.SCALAR, E = Ii[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, y = i.sparse.values.byteOffset || 0, b = new E(o[1], v, i.sparse.count * p), C = new c(o[2], y, i.sparse.count * l);
        a !== null && (m = new Tt(m.array.slice(), m.itemSize, m.normalized));
        for (let w = 0, N = b.length; w < N; w++) {
          const M = b[w];
          if (m.setX(M, C[w * l]), l >= 2 && m.setY(M, C[w * l + 1]), l >= 3 && m.setZ(M, C[w * l + 2]), l >= 4 && m.setW(M, C[w * l + 3]), l >= 5)
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
      const l = n.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri);
      const d = (r.samplers || {})[o.sampler] || {};
      return h.magFilter = _c[d.magFilter] || At, h.minFilter = _c[d.minFilter] || Jn, h.wrapS = vc[d.wrapS] || Ni, h.wrapT = vc[d.wrapT] || Ni, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const o = i.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = !1;
    if (o.bufferView !== void 0)
      l = n.getDependency("bufferView", o.bufferView).then(function(u) {
        c = !0;
        const d = new Blob([u], { type: o.mimeType });
        return l = a.createObjectURL(d), l;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, f) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const m = new gt(_);
          m.needsUpdate = !0, d(m);
        }), t.load(Oo.resolveURL(u, r.path), g, void 0, f);
      });
    }).then(function(u) {
      return c === !0 && a.revokeObjectURL(l), u.userData.mimeType = o.mimeType || dx(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o)
        return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[Ve.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Ve.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(o);
          o = r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
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
      let l = this.cache.get(a);
      l || (l = new ih(), jt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new nh(), jt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (i || r || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), r && (l.vertexColors = !0), o && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return Cs;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let o;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[Ve.KHR_MATERIALS_UNLIT]) {
      const u = i[Ve.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), c.push(u.extendParams(a, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (a.color = new De(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", u.baseColorTexture, Ie)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = qt);
    const h = r.alphaMode || Mo.OPAQUE;
    if (h === Mo.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === Mo.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== $n && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new le(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return r.occlusionTexture !== void 0 && o !== $n && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== $n && (a.emissive = new De().fromArray(r.emissiveFactor)), r.emissiveTexture !== void 0 && o !== $n && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Ie)), Promise.all(c).then(function() {
      const u = new o(a);
      return r.name && (u.name = r.name), bn(u, r), t.associations.set(u, { materials: e }), r.extensions && kn(i, u, r), u;
    });
  }
  createUniqueName(e) {
    const t = qe.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return xc(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = ux(c), u = i[h];
      if (u)
        o.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = xc(new Ft(), c, t), i[h] = { primitive: c, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const h = o[l].material === void 0 ? lx(this.cache) : this.getDependency("material", o[l].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let f = 0, g = h.length; f < g; f++) {
        const _ = h[f], m = o[f];
        let p;
        const E = c[f];
        if (m.mode === Ut.TRIANGLES || m.mode === Ut.TRIANGLE_STRIP || m.mode === Ut.TRIANGLE_FAN || m.mode === void 0)
          p = r.isSkinnedMesh === !0 ? new jg(_, E) : new bt(_, E), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), m.mode === Ut.TRIANGLE_STRIP ? p.geometry = mc(p.geometry, Dc) : m.mode === Ut.TRIANGLE_FAN && (p.geometry = mc(p.geometry, wo));
        else if (m.mode === Ut.LINES)
          p = new e_(_, E);
        else if (m.mode === Ut.LINE_STRIP)
          p = new yr(_, E);
        else if (m.mode === Ut.LINE_LOOP)
          p = new t_(_, E);
        else if (m.mode === Ut.POINTS)
          p = new n_(_, E);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && hx(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), bn(p, r), m.extensions && kn(i, p, m), t.assignFinalMaterial(p), u.push(p);
      }
      for (let f = 0, g = u.length; f < g; f++)
        t.associations.set(u[f], {
          meshes: e,
          primitives: f
        });
      if (u.length === 1)
        return r.extensions && kn(i, u[0], r), u[0];
      const d = new qn();
      r.extensions && kn(i, d, r), t.associations.set(d, { meshes: e });
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
    return n.type === "perspective" ? t = new Et(Fu.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Yo(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), bn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), o = i, a = [], l = [];
      for (let c = 0, h = o.length; c < h; c++) {
        const u = o[c];
        if (u) {
          a.push(u);
          const d = new Fe();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Zo(a, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], l = [], c = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const f = i.channels[u], g = i.samplers[f.sampler], _ = f.target, m = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, E = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", E)), c.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h)
    ]).then(function(u) {
      const d = u[0], f = u[1], g = u[2], _ = u[3], m = u[4], p = [];
      for (let E = 0, v = d.length; E < v; E++) {
        const y = d[E], b = f[E], C = g[E], w = _[E], N = m[E];
        if (y === void 0)
          continue;
        y.updateMatrix && y.updateMatrix();
        const M = n._createAnimationTracks(y, b, C, w, N);
        if (M)
          for (let A = 0; A < M.length; A++)
            p.push(M[A]);
      }
      return new H_(r, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const o = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (!!a.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = i.weights[l];
      }), o;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let c = 0, h = a.length; c < h; c++)
      o.push(n.getDependency("node", a[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(o),
      l
    ]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(f) {
        !f.isSkinnedMesh || f.bind(d, fx);
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
    const r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let h;
      if (r.isBone === !0 ? h = new th() : c.length > 1 ? h = new qn() : c.length === 1 ? h = c[0] : h = new Xe(), h !== c[0])
        for (let u = 0, d = c.length; u < d; u++)
          h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = o), bn(h, r), r.extensions && kn(n, h, r), r.matrix !== void 0) {
        const u = new Fe();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else
        r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new qn();
    n.name && (r.name = i.createUniqueName(n.name)), bn(r, n), n.extensions && kn(t, r, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++)
      a.push(i.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++)
        r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations)
          (d instanceof jt || d instanceof gt) && u.set(d, f);
        return h.traverse((d) => {
          const f = i.associations.get(d);
          f != null && u.set(d, f);
        }), u;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    An[r.path] === An.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(a);
    let c;
    switch (An[r.path]) {
      case An.weights:
        c = Hi;
        break;
      case An.rotation:
        c = ni;
        break;
      case An.position:
      case An.scale:
        c = Gi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Hi;
            break;
          case 2:
          case 3:
          default:
            c = Gi;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? ax[i.interpolation] : Fi, u = this._getArrayFromAccessor(n);
    for (let d = 0, f = l.length; d < f; d++) {
      const g = new c(
        l[d] + "." + An[r.path],
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
      const n = Ho(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof ni ? ox : Mh;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function mx(s, e, t) {
  const n = e.attributes, i = new _n();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new L(l[0], l[1], l[2]),
        new L(c[0], c[1], c[2])
      ), a.normalized) {
        const h = Ho(Ii[a.componentType]);
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
    const a = new L(), l = new L();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], f = d.min, g = d.max;
        if (f !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), d.normalized) {
            const _ = Ho(Ii[d.componentType]);
            l.multiplyScalar(_);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  s.boundingBox = i;
  const o = new Qt();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o;
}
function xc(s, e, t) {
  const n = e.attributes, i = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      s.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = zo[o] || o.toLowerCase();
    a in s.attributes || i.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !s.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      s.setIndex(a);
    });
    i.push(o);
  }
  return bn(s, e), mx(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? cx(s, e.targets, t) : s;
  });
}
function aa(s, e) {
  let t = s.parentElement;
  for (; t !== null; ) {
    if (e(t))
      return t;
    t = t.parentElement;
  }
  return null;
}
var gx = Object.defineProperty, _x = Object.getOwnPropertyDescriptor, si = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? _x(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && gx(e, t, i), i;
};
let gn = class extends Kt {
  constructor() {
    super(...arguments), this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new Xe();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: s } = this, e = aa(
      this,
      (f) => f instanceof qi
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space;
    new Fv().load(this.src, (f) => {
      s.add(f.scene), this.isLoaded = !0, this.dispatchEvent(
        new CustomEvent("loaded", {
          detail: { model: f.scene }
        })
      );
    });
    const [i, r, o] = this.positon.split(",").map((f) => parseFloat(f)), [a, l, c] = this.rotation.split(",").map((f) => parseFloat(f)), [h, u, d] = this.scale.split(",").map((f) => parseFloat(f));
    s.position.x = i, s.position.y = r, s.position.z = o, s.rotation.x = a, s.rotation.y = l, s.rotation.z = c, s.scale.x = h, s.scale.y = u, s.scale.z = d, t.add(s);
  }
  render() {
    return Qi``;
  }
};
si([
  Ke({ type: String, attribute: "src" })
], gn.prototype, "src", 2);
si([
  Ke({ type: String, attribute: "position" })
], gn.prototype, "positon", 2);
si([
  Ke({ type: String, attribute: "rotation" })
], gn.prototype, "rotation", 2);
si([
  Ke({ type: String, attribute: "scale" })
], gn.prototype, "scale", 2);
si([
  Ke({ type: Boolean })
], gn.prototype, "isLoaded", 2);
si([
  Ke({ type: Xe })
], gn.prototype, "space", 2);
gn = si([
  es("mv-model")
], gn);
var vx = Object.defineProperty, xx = Object.getOwnPropertyDescriptor, Sh = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? xx(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && vx(e, t, i), i;
};
let Go = class extends Kt {
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
    const s = this.children, e = Li();
    for (let t = 0; t < s.length; t++) {
      const n = s[t];
      n instanceof gn && n.addEventListener("loaded", (i) => {
        const r = i.detail.model;
        e.registerInteractiveObject(r, this.onNavigate);
      });
    }
  }
  render() {
    return Qi``;
  }
};
Sh([
  Ke({ type: String, attribute: "href" })
], Go.prototype, "href", 2);
Go = Sh([
  es("mv-link")
], Go);
var yx = Object.defineProperty, Mx = Object.getOwnPropertyDescriptor, la = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Mx(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && yx(e, t, i), i;
};
let ws = class extends Kt {
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
    return Qi``;
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
la([
  Ke({ type: String, attribute: "action" })
], ws.prototype, "action", 2);
la([
  Ke({ type: String, attribute: "method" })
], ws.prototype, "method", 2);
ws = la([
  es("mv-form")
], ws);
var Sx = Object.defineProperty, Ex = Object.getOwnPropertyDescriptor, nn = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ex(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && Sx(e, t, i), i;
};
let Wt = class extends Kt {
  constructor() {
    super(...arguments), this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new Xe(), this.type = "submit", this.name = "", this.value = "";
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: s } = this;
    let e = null, t = this.parentElement;
    for (; t !== null; ) {
      if (t instanceof qi) {
        e = t.space;
        break;
      }
      t = t.parentElement;
    }
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const n = new bt(
      new ji(1, 1, 1),
      new Cs({
        color: this.value === "true" ? 268435455 : 3355443
      })
    );
    s.add(n), this.isLoaded = !0, this.dispatchEvent(
      new CustomEvent("loaded", {
        detail: { model: n }
      })
    );
    const [i, r, o] = this.positon.split(",").map((g) => parseFloat(g)), [a, l, c] = this.rotation.split(",").map((g) => parseFloat(g)), [h, u, d] = this.scale.split(",").map((g) => parseFloat(g));
    s.position.x = i, s.position.y = r, s.position.z = o, s.rotation.x = a, s.rotation.y = l, s.rotation.z = c, s.scale.x = h, s.scale.y = u, s.scale.z = d, e.add(s);
    const f = aa(
      this,
      (g) => g instanceof ws
    );
    if (f === null)
      throw new Error("No parent form found for mv-model");
    this.type === "submit" ? Li().registerInteractiveObject(n, () => {
      f.submit();
    }) : this.type === "checkbox" ? (Li().registerInteractiveObject(n, () => {
      this.value === "true" ? (this.value = "false", n.material.color.setHex(3355443)) : (this.value = "true", n.material.color.setHex(16777215));
    }), f.registerInput(this)) : this.type === "text" && (Li().registerInteractiveObject(n, () => {
      var g;
      this.value = (g = window.prompt("Enter text", this.value)) != null ? g : "";
    }), f.registerInput(this));
  }
  render() {
    return Qi``;
  }
};
nn([
  Ke({ type: String, attribute: "src" })
], Wt.prototype, "src", 2);
nn([
  Ke({ type: String, attribute: "position" })
], Wt.prototype, "positon", 2);
nn([
  Ke({ type: String, attribute: "rotation" })
], Wt.prototype, "rotation", 2);
nn([
  Ke({ type: String, attribute: "scale" })
], Wt.prototype, "scale", 2);
nn([
  Ke({ type: Boolean })
], Wt.prototype, "isLoaded", 2);
nn([
  Ke({ type: Xe })
], Wt.prototype, "space", 2);
nn([
  Ke({ type: String, attribute: "type" })
], Wt.prototype, "type", 2);
nn([
  Ke({ type: String, attribute: "name" })
], Wt.prototype, "name", 2);
nn([
  Ke({ type: String, attribute: "value" })
], Wt.prototype, "value", 2);
Wt = nn([
  es("mv-input")
], Wt);
class Tx extends ta {
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
class Ax extends ii {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, o = new na(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      const l = r.parse(JSON.parse(a));
      t && t(l);
    }, n, i);
  }
  parse(e) {
    return new bx(e);
  }
}
class bx {
  constructor(e) {
    this.isFont = !0, this.type = "Font", this.data = e;
  }
  generateShapes(e, t = 100) {
    const n = [], i = wx(e, t, this.data);
    for (let r = 0, o = i.length; r < o; r++)
      n.push(...i[r].toShapes());
    return n;
  }
}
function wx(s, e, t) {
  const n = Array.from(s), i = e / t.resolution, r = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = [];
  let a = 0, l = 0;
  for (let c = 0; c < n.length; c++) {
    const h = n[c];
    if (h === `
`)
      a = 0, l -= r;
    else {
      const u = Rx(h, i, a, l, t);
      a += u.offsetX, o.push(u.path);
    }
  }
  return o;
}
function Rx(s, e, t, n, i) {
  const r = i.glyphs[s] || i.glyphs["?"];
  if (!r) {
    console.error('THREE.Font: character "' + s + '" does not exists in font family ' + i.familyName + ".");
    return;
  }
  const o = new dv();
  let a, l, c, h, u, d, f, g;
  if (r.o) {
    const _ = r._cachedOutline || (r._cachedOutline = r.o.split(" "));
    for (let m = 0, p = _.length; m < p; )
      switch (_[m++]) {
        case "m":
          a = _[m++] * e + t, l = _[m++] * e + n, o.moveTo(a, l);
          break;
        case "l":
          a = _[m++] * e + t, l = _[m++] * e + n, o.lineTo(a, l);
          break;
        case "q":
          c = _[m++] * e + t, h = _[m++] * e + n, u = _[m++] * e + t, d = _[m++] * e + n, o.quadraticCurveTo(u, d, c, h);
          break;
        case "b":
          c = _[m++] * e + t, h = _[m++] * e + n, u = _[m++] * e + t, d = _[m++] * e + n, f = _[m++] * e + t, g = _[m++] * e + n, o.bezierCurveTo(u, d, f, g, c, h);
          break;
      }
  }
  return { offsetX: r.ha * e, path: o };
}
var Cx = Object.defineProperty, Lx = Object.getOwnPropertyDescriptor, vn = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Lx(e, t) : e, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (i = (n ? o(e, t, i) : o(i)) || i);
  return n && i && Cx(e, t, i), i;
};
let Jt = class extends Kt {
  constructor() {
    super(...arguments), this.for = "", this.text = "", this.src = "", this.positon = "0,0,0", this.rotation = "0,0,0", this.scale = "1,1,1", this.isLoaded = !1, this.space = new Xe();
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { space: s } = this, e = aa(
      this,
      (f) => f instanceof qi
    );
    if (e === null)
      throw new Error("No parent space found for mv-model");
    const t = e.space;
    new Ax().load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (f) => {
        const g = new Tx(this.text, {
          font: f,
          size: 1,
          height: 0.01
        }), _ = new Cs({
          color: 16777215
        }), m = new bt(g, _);
        m.position.y = -0.5, s.add(m);
      }
    );
    const [i, r, o] = this.positon.split(",").map((f) => parseFloat(f)), [a, l, c] = this.rotation.split(",").map((f) => parseFloat(f)), [h, u, d] = this.scale.split(",").map((f) => parseFloat(f));
    s.position.x = i, s.position.y = r, s.position.z = o, s.rotation.x = a, s.rotation.y = l, s.rotation.z = c, s.scale.x = h, s.scale.y = u, s.scale.z = d, t.add(s);
  }
  render() {
    return Qi``;
  }
};
vn([
  Ke({ type: String, attribute: "for" })
], Jt.prototype, "for", 2);
vn([
  Ke({ type: String, attribute: "text" })
], Jt.prototype, "text", 2);
vn([
  Ke({ type: String, attribute: "src" })
], Jt.prototype, "src", 2);
vn([
  Ke({ type: String, attribute: "position" })
], Jt.prototype, "positon", 2);
vn([
  Ke({ type: String, attribute: "rotation" })
], Jt.prototype, "rotation", 2);
vn([
  Ke({ type: String, attribute: "scale" })
], Jt.prototype, "scale", 2);
vn([
  Ke({ type: Boolean })
], Jt.prototype, "isLoaded", 2);
vn([
  Ke({ type: Xe })
], Jt.prototype, "space", 2);
Jt = vn([
  es("mv-label")
], Jt);
