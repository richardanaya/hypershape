import { LitElement as wo, html as To } from "lit";
import { property as Ct, customElement as Eo } from "lit/decorators.js";
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const br = "146", ml = 0, kr = 1, gl = 2, Ao = 1, Co = 2, Pi = 3, In = 0, Et = 1, Jt = 2, mn = 0, ri = 1, Gr = 2, Vr = 3, Hr = 4, _l = 5, ii = 100, xl = 101, vl = 102, Wr = 103, Xr = 104, Ml = 200, yl = 201, bl = 202, Sl = 203, Lo = 204, Ro = 205, wl = 206, Tl = 207, El = 208, Al = 209, Cl = 210, Ll = 0, Rl = 1, Dl = 2, cr = 3, Pl = 4, Il = 5, Nl = 6, Fl = 7, Do = 0, Ol = 1, Ul = 2, en = 0, zl = 1, Bl = 2, kl = 3, Po = 4, Gl = 5, Io = 300, oi = 301, li = 302, ur = 303, hr = 304, bs = 306, ci = 1e3, St = 1001, vs = 1002, nt = 1003, dr = 1004, fr = 1005, ft = 1006, No = 1007, pi = 1008, Nn = 1009, Vl = 1010, Hl = 1011, Fo = 1012, Wl = 1013, An = 1014, fn = 1015, Oi = 1016, Xl = 1017, ql = 1018, ai = 1020, jl = 1021, Yl = 1022, wt = 1023, Kl = 1024, Zl = 1025, Rn = 1026, ui = 1027, $l = 1028, Jl = 1029, Ql = 1030, ec = 1031, tc = 1033, Cs = 33776, Ls = 33777, Rs = 33778, Ds = 33779, qr = 35840, jr = 35841, Yr = 35842, Kr = 35843, nc = 36196, Zr = 37492, $r = 37496, Jr = 37808, Qr = 37809, ea = 37810, ta = 37811, na = 37812, ia = 37813, sa = 37814, ra = 37815, aa = 37816, oa = 37817, la = 37818, ca = 37819, ua = 37820, ha = 37821, da = 36492, Ui = 2300, hi = 2301, Ps = 2302, fa = 2400, pa = 2401, ma = 2402, ic = 2500, sc = 1, Oo = 2, Fn = 3e3, Fe = 3001, rc = 3200, ac = 3201, Sr = 0, oc = 1, Zt = "srgb", Cn = "srgb-linear", Is = 7680, lc = 519, pr = 35044, ga = "300 es", mr = 1035;
class mi {
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
      for (let s = 0, r = i.length; s < r; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const st = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let _a = 1234567;
const Ni = Math.PI / 180, zi = 180 / Math.PI;
function It() {
  const o = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (st[o & 255] + st[o >> 8 & 255] + st[o >> 16 & 255] + st[o >> 24 & 255] + "-" + st[e & 255] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[t & 63 | 128] + st[t >> 8 & 255] + "-" + st[t >> 16 & 255] + st[t >> 24 & 255] + st[n & 255] + st[n >> 8 & 255] + st[n >> 16 & 255] + st[n >> 24 & 255]).toLowerCase();
}
function ct(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function wr(o, e) {
  return (o % e + e) % e;
}
function cc(o, e, t, n, i) {
  return n + (o - e) * (i - n) / (t - e);
}
function uc(o, e, t) {
  return o !== e ? (t - o) / (e - o) : 0;
}
function Fi(o, e, t) {
  return (1 - t) * o + t * e;
}
function hc(o, e, t, n) {
  return Fi(o, e, 1 - Math.exp(-t * n));
}
function dc(o, e = 1) {
  return e - Math.abs(wr(o, e * 2) - e);
}
function fc(o, e, t) {
  return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * (3 - 2 * o));
}
function pc(o, e, t) {
  return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * o * (o * (o * 6 - 15) + 10));
}
function mc(o, e) {
  return o + Math.floor(Math.random() * (e - o + 1));
}
function gc(o, e) {
  return o + Math.random() * (e - o);
}
function _c(o) {
  return o * (0.5 - Math.random());
}
function xc(o) {
  o !== void 0 && (_a = o);
  let e = _a += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function vc(o) {
  return o * Ni;
}
function Mc(o) {
  return o * zi;
}
function gr(o) {
  return (o & o - 1) === 0 && o !== 0;
}
function Uo(o) {
  return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2));
}
function Ms(o) {
  return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
}
function yc(o, e, t, n, i) {
  const s = Math.cos, r = Math.sin, a = s(t / 2), l = r(t / 2), c = s((e + n) / 2), u = r((e + n) / 2), h = s((e - n) / 2), d = r((e - n) / 2), m = s((n - e) / 2), g = r((n - e) / 2);
  switch (i) {
    case "XYX":
      o.set(a * u, l * h, l * d, a * c);
      break;
    case "YZY":
      o.set(l * d, a * u, l * h, a * c);
      break;
    case "ZXZ":
      o.set(l * h, l * d, a * u, a * c);
      break;
    case "XZX":
      o.set(a * u, l * g, l * m, a * c);
      break;
    case "YXY":
      o.set(l * m, a * u, l * g, a * c);
      break;
    case "ZYZ":
      o.set(l * g, l * m, a * u, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Qt(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return o / 65535;
    case Uint8Array:
      return o / 255;
    case Int16Array:
      return Math.max(o / 32767, -1);
    case Int8Array:
      return Math.max(o / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Be(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return Math.round(o * 65535);
    case Uint8Array:
      return Math.round(o * 255);
    case Int16Array:
      return Math.round(o * 32767);
    case Int8Array:
      return Math.round(o * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var bc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DEG2RAD: Ni,
  RAD2DEG: zi,
  generateUUID: It,
  clamp: ct,
  euclideanModulo: wr,
  mapLinear: cc,
  inverseLerp: uc,
  lerp: Fi,
  damp: hc,
  pingpong: dc,
  smoothstep: fc,
  smootherstep: pc,
  randInt: mc,
  randFloat: gc,
  randFloatSpread: _c,
  seededRandom: xc,
  degToRad: vc,
  radToDeg: Mc,
  isPowerOfTwo: gr,
  ceilPowerOfTwo: Uo,
  floorPowerOfTwo: Ms,
  setQuaternionFromProperEuler: yc,
  normalize: Be,
  denormalize: Qt
});
class Re {
  constructor(e = 0, t = 0) {
    Re.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, r = this.y - e.y;
    return this.x = s * n - r * i + e.x, this.y = s * i + r * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Tt {
  constructor() {
    Tt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, r, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = r, u[8] = c, this;
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
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], m = n[5], g = n[8], p = i[0], f = i[3], _ = i[6], w = i[1], b = i[4], v = i[7], T = i[2], A = i[5], D = i[8];
    return s[0] = r * p + a * w + l * T, s[3] = r * f + a * b + l * A, s[6] = r * _ + a * v + l * D, s[1] = c * p + u * w + h * T, s[4] = c * f + u * b + h * A, s[7] = c * _ + u * v + h * D, s[2] = d * p + m * w + g * T, s[5] = d * f + m * b + g * A, s[8] = d * _ + m * v + g * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * r * u - t * a * c - n * s * u + n * a * l + i * s * c - i * r * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * r - a * c, d = a * l - u * s, m = c * s - r * l, g = t * h + n * d + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return e[0] = h * p, e[1] = (i * c - u * n) * p, e[2] = (a * n - i * r) * p, e[3] = d * p, e[4] = (u * t - i * l) * p, e[5] = (i * s - a * t) * p, e[6] = m * p, e[7] = (n * l - c * t) * p, e[8] = (r * t - n * s) * p, this;
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
  setUvTransform(e, t, n, i, s, r, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * r + c * a) + r + e,
      -i * c,
      i * l,
      -i * (-c * r + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    const n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
  }
  rotate(e) {
    const t = Math.cos(e), n = Math.sin(e), i = this.elements, s = i[0], r = i[3], a = i[6], l = i[1], c = i[4], u = i[7];
    return i[0] = t * s + n * l, i[3] = t * r + n * c, i[6] = t * a + n * u, i[1] = -n * s + t * l, i[4] = -n * r + t * c, i[7] = -n * a + t * u, this;
  }
  translate(e, t) {
    const n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
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
function zo(o) {
  for (let e = o.length - 1; e >= 0; --e)
    if (o[e] >= 65535)
      return !0;
  return !1;
}
function Bi(o) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o);
}
function Dn(o) {
  return o < 0.04045 ? o * 0.0773993808 : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}
function _s(o) {
  return o < 31308e-7 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
const Ns = {
  [Zt]: { [Cn]: Dn },
  [Cn]: { [Zt]: _s }
}, Lt = {
  legacyMode: !0,
  get workingColorSpace() {
    return Cn;
  },
  set workingColorSpace(o) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(o, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return o;
    if (Ns[e] && Ns[e][t] !== void 0) {
      const n = Ns[e][t];
      return o.r = n(o.r), o.g = n(o.g), o.b = n(o.b), o;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(o, e) {
    return this.convert(o, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(o, e) {
    return this.convert(o, e, this.workingColorSpace);
  }
}, Bo = {
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
}, Ye = { r: 0, g: 0, b: 0 }, Rt = { h: 0, s: 0, l: 0 }, ji = { h: 0, s: 0, l: 0 };
function Fs(o, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
}
function Yi(o, e) {
  return e.r = o.r, e.g = o.g, e.b = o.b, e;
}
class ye {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Zt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Lt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Cn) {
    return this.r = e, this.g = t, this.b = n, Lt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Cn) {
    if (e = wr(e, 1), t = ct(t, 0, 1), n = ct(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
      this.r = Fs(r, s, e + 1 / 3), this.g = Fs(r, s, e), this.b = Fs(r, s, e - 1 / 3);
    }
    return Lt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Zt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let s;
      const r = i[1], a = i[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, Lt.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, Lt.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const l = parseFloat(s[1]) / 360, c = parseFloat(s[2]) / 100, u = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(l, c, u, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], r = s.length;
      if (r === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, Lt.toWorkingColorSpace(this, t), this;
      if (r === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, Lt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Zt) {
    const n = Bo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Dn(e.r), this.g = Dn(e.g), this.b = Dn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = _s(e.r), this.g = _s(e.g), this.b = _s(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Zt) {
    return Lt.fromWorkingColorSpace(Yi(this, Ye), e), ct(Ye.r * 255, 0, 255) << 16 ^ ct(Ye.g * 255, 0, 255) << 8 ^ ct(Ye.b * 255, 0, 255) << 0;
  }
  getHexString(e = Zt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Cn) {
    Lt.fromWorkingColorSpace(Yi(this, Ye), t);
    const n = Ye.r, i = Ye.g, s = Ye.b, r = Math.max(n, i, s), a = Math.min(n, i, s);
    let l, c;
    const u = (a + r) / 2;
    if (a === r)
      l = 0, c = 0;
    else {
      const h = r - a;
      switch (c = u <= 0.5 ? h / (r + a) : h / (2 - r - a), r) {
        case n:
          l = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Cn) {
    return Lt.fromWorkingColorSpace(Yi(this, Ye), t), e.r = Ye.r, e.g = Ye.g, e.b = Ye.b, e;
  }
  getStyle(e = Zt) {
    return Lt.fromWorkingColorSpace(Yi(this, Ye), e), e !== Zt ? `color(${e} ${Ye.r} ${Ye.g} ${Ye.b})` : `rgb(${Ye.r * 255 | 0},${Ye.g * 255 | 0},${Ye.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Rt), Rt.h += e, Rt.s += t, Rt.l += n, this.setHSL(Rt.h, Rt.s, Rt.l), this;
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
    this.getHSL(Rt), e.getHSL(ji);
    const n = Fi(Rt.h, ji.h, t), i = Fi(Rt.s, ji.s, t), s = Fi(Rt.l, ji.l, t);
    return this.setHSL(n, i, s), this;
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
ye.NAMES = Bo;
let Hn;
class ko {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Hn === void 0 && (Hn = Bi("canvas")), Hn.width = e.width, Hn.height = e.height;
      const n = Hn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Hn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Bi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let r = 0; r < s.length; r++)
        s[r] = Dn(s[r] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Dn(t[n] / 255) * 255) : t[n] = Dn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Go {
  constructor(e = null) {
    this.isSource = !0, this.uuid = It(), this.data = e, this.version = 0;
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
        for (let r = 0, a = i.length; r < a; r++)
          i[r].isDataTexture ? s.push(Os(i[r].image)) : s.push(Os(i[r]));
      } else
        s = Os(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Os(o) {
  return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? ko.getDataURL(o) : o.data ? {
    data: Array.from(o.data),
    width: o.width,
    height: o.height,
    type: o.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Sc = 0;
class ht extends mi {
  constructor(e = ht.DEFAULT_IMAGE, t = ht.DEFAULT_MAPPING, n = St, i = St, s = ft, r = pi, a = wt, l = Nn, c = 1, u = Fn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Sc++ }), this.uuid = It(), this.name = "", this.source = new Go(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = r, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Re(0, 0), this.repeat = new Re(1, 1), this.center = new Re(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Tt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Io)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case ci:
          e.x = e.x - Math.floor(e.x);
          break;
        case St:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case vs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ci:
          e.y = e.y - Math.floor(e.y);
          break;
        case St:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case vs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
ht.DEFAULT_IMAGE = null;
ht.DEFAULT_MAPPING = Io;
class ke {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ke.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const t = this.x, n = this.y, i = this.z, s = this.w, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i + r[12] * s, this.y = r[1] * t + r[5] * n + r[9] * i + r[13] * s, this.z = r[2] * t + r[6] * n + r[10] * i + r[14] * s, this.w = r[3] * t + r[7] * n + r[11] * i + r[15] * s, this;
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
    const l = e.elements, c = l[0], u = l[4], h = l[8], d = l[1], m = l[5], g = l[9], p = l[2], f = l[6], _ = l[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(h - p) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(h + p) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(c + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (c + 1) / 2, v = (m + 1) / 2, T = (_ + 1) / 2, A = (u + d) / 4, D = (h + p) / 4, x = (g + f) / 4;
      return b > v && b > T ? b < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), i = A / n, s = D / n) : v > T ? v < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(v), n = A / i, s = x / i) : T < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(T), n = D / s, i = x / s), this.set(n, i, s, t), this;
    }
    let w = Math.sqrt((f - g) * (f - g) + (h - p) * (h - p) + (d - u) * (d - u));
    return Math.abs(w) < 1e-3 && (w = 1), this.x = (f - g) / w, this.y = (h - p) / w, this.z = (d - u) / w, this.w = Math.acos((c + m + _ - 1) / 2), this;
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
class On extends mi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ke(0, 0, e, t), this.scissorTest = !1, this.viewport = new ke(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new ht(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ft, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Go(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Vo extends ht {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = nt, this.minFilter = nt, this.wrapR = St, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class wc extends ht {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = nt, this.minFilter = nt, this.wrapR = St, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class gn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, r, a) {
    let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
    const d = s[r + 0], m = s[r + 1], g = s[r + 2], p = s[r + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = p;
      return;
    }
    if (h !== p || l !== d || c !== m || u !== g) {
      let f = 1 - a;
      const _ = l * d + c * m + u * g + h * p, w = _ >= 0 ? 1 : -1, b = 1 - _ * _;
      if (b > Number.EPSILON) {
        const T = Math.sqrt(b), A = Math.atan2(T, _ * w);
        f = Math.sin(f * A) / T, a = Math.sin(a * A) / T;
      }
      const v = a * w;
      if (l = l * f + d * v, c = c * f + m * v, u = u * f + g * v, h = h * f + p * v, f === 1 - a) {
        const T = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= T, c *= T, u *= T, h *= T;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, r) {
    const a = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = s[r], d = s[r + 1], m = s[r + 2], g = s[r + 3];
    return e[t] = a * g + u * h + l * m - c * d, e[t + 1] = l * g + u * d + c * h - a * m, e[t + 2] = c * g + u * m + a * d - l * h, e[t + 3] = u * g - a * h - l * d - c * m, e;
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
    const n = e._x, i = e._y, s = e._z, r = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(i / 2), h = a(s / 2), d = l(n / 2), m = l(i / 2), g = l(s / 2);
    switch (r) {
      case "XYZ":
        this._x = d * u * h + c * m * g, this._y = c * m * h - d * u * g, this._z = c * u * g + d * m * h, this._w = c * u * h - d * m * g;
        break;
      case "YXZ":
        this._x = d * u * h + c * m * g, this._y = c * m * h - d * u * g, this._z = c * u * g - d * m * h, this._w = c * u * h + d * m * g;
        break;
      case "ZXY":
        this._x = d * u * h - c * m * g, this._y = c * m * h + d * u * g, this._z = c * u * g + d * m * h, this._w = c * u * h - d * m * g;
        break;
      case "ZYX":
        this._x = d * u * h - c * m * g, this._y = c * m * h + d * u * g, this._z = c * u * g - d * m * h, this._w = c * u * h + d * m * g;
        break;
      case "YZX":
        this._x = d * u * h + c * m * g, this._y = c * m * h + d * u * g, this._z = c * u * g - d * m * h, this._w = c * u * h - d * m * g;
        break;
      case "XZY":
        this._x = d * u * h - c * m * g, this._y = c * m * h - d * u * g, this._z = c * u * g + d * m * h, this._w = c * u * h + d * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], r = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], d = n + a + h;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (r - i) * m;
    } else if (n > a && n > h) {
      const m = 2 * Math.sqrt(1 + n - a - h);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (i + r) / m, this._z = (s + c) / m;
    } else if (a > h) {
      const m = 2 * Math.sqrt(1 + a - n - h);
      this._w = (s - c) / m, this._x = (i + r) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + h - n - a);
      this._w = (r - i) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ct(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, s = e._z, r = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + r * a + i * c - s * l, this._y = i * u + r * l + s * a - n * c, this._z = s * u + r * c + n * l - i * a, this._w = r * u - n * a - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, r = this._w;
    let a = r * e._w + n * e._x + i * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = r, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * r + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
    return this._w = r * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = s * h + this._z * d, this._onChangeCallback(), this;
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
    return this.applyQuaternion(xa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(xa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, r = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * r, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * r, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * r, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, r = e.y, a = e.z, l = e.w, c = l * t + r * i - a * n, u = l * n + a * t - s * i, h = l * i + s * n - r * t, d = -s * t - r * n - a * i;
    return this.x = c * l + d * -s + u * -a - h * -r, this.y = u * l + d * -r + h * -s - c * -a, this.z = h * l + d * -a + c * -r - u * -s, this;
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
    const n = e.x, i = e.y, s = e.z, r = t.x, a = t.y, l = t.z;
    return this.x = i * l - s * a, this.y = s * r - n * l, this.z = n * a - i * r, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Us.copy(this).projectOnVector(e), this.sub(Us);
  }
  reflect(e) {
    return this.sub(Us.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ct(n, -1, 1));
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
const Us = /* @__PURE__ */ new L(), xa = /* @__PURE__ */ new gn();
class gi {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, r = -1 / 0, a = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l], h = e[l + 1], d = e[l + 2];
      u < t && (t = u), h < n && (n = h), d < i && (i = d), u > s && (s = u), h > r && (r = h), d > a && (a = d);
    }
    return this.min.set(t, n, i), this.max.set(s, r, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, r = -1 / 0, a = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l), h = e.getY(l), d = e.getZ(l);
      u < t && (t = u), h < n && (n = h), d < i && (i = d), u > s && (s = u), h > r && (r = h), d > a && (a = d);
    }
    return this.min.set(t, n, i), this.max.set(s, r, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Mn.copy(t).multiplyScalar(0.5);
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
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let r = 0, a = s.count; r < a; r++)
          Mn.fromBufferAttribute(s, r).applyMatrix4(e.matrixWorld), this.expandByPoint(Mn);
      } else
        n.boundingBox === null && n.computeBoundingBox(), zs.copy(n.boundingBox), zs.applyMatrix4(e.matrixWorld), this.union(zs);
    const i = e.children;
    for (let s = 0, r = i.length; s < r; s++)
      this.expandByObject(i[s], t);
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
    return this.clampPoint(e.center, Mn), Mn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Si), Ki.subVectors(this.max, Si), Wn.subVectors(e.a, Si), Xn.subVectors(e.b, Si), qn.subVectors(e.c, Si), sn.subVectors(Xn, Wn), rn.subVectors(qn, Xn), yn.subVectors(Wn, qn);
    let t = [
      0,
      -sn.z,
      sn.y,
      0,
      -rn.z,
      rn.y,
      0,
      -yn.z,
      yn.y,
      sn.z,
      0,
      -sn.x,
      rn.z,
      0,
      -rn.x,
      yn.z,
      0,
      -yn.x,
      -sn.y,
      sn.x,
      0,
      -rn.y,
      rn.x,
      0,
      -yn.y,
      yn.x,
      0
    ];
    return !Bs(t, Wn, Xn, qn, Ki) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Bs(t, Wn, Xn, qn, Ki)) ? !1 : (Zi.crossVectors(sn, rn), t = [Zi.x, Zi.y, Zi.z], Bs(t, Wn, Xn, qn, Ki));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Mn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(Mn).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Wt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Wt = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Mn = /* @__PURE__ */ new L(), zs = /* @__PURE__ */ new gi(), Wn = /* @__PURE__ */ new L(), Xn = /* @__PURE__ */ new L(), qn = /* @__PURE__ */ new L(), sn = /* @__PURE__ */ new L(), rn = /* @__PURE__ */ new L(), yn = /* @__PURE__ */ new L(), Si = /* @__PURE__ */ new L(), Ki = /* @__PURE__ */ new L(), Zi = /* @__PURE__ */ new L(), bn = /* @__PURE__ */ new L();
function Bs(o, e, t, n, i) {
  for (let s = 0, r = o.length - 3; s <= r; s += 3) {
    bn.fromArray(o, s);
    const a = i.x * Math.abs(bn.x) + i.y * Math.abs(bn.y) + i.z * Math.abs(bn.z), l = e.dot(bn), c = t.dot(bn), u = n.dot(bn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const Tc = /* @__PURE__ */ new gi(), wi = /* @__PURE__ */ new L(), ks = /* @__PURE__ */ new L();
class _i {
  constructor(e = new L(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Tc.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, r = e.length; s < r; s++)
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
    wi.subVectors(e, this.center);
    const t = wi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(wi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ks.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(wi.copy(e.center).add(ks)), this.expandByPoint(wi.copy(e.center).sub(ks))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xt = /* @__PURE__ */ new L(), Gs = /* @__PURE__ */ new L(), $i = /* @__PURE__ */ new L(), an = /* @__PURE__ */ new L(), Vs = /* @__PURE__ */ new L(), Ji = /* @__PURE__ */ new L(), Hs = /* @__PURE__ */ new L();
class Tr {
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
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Xt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Xt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Xt.copy(this.direction).multiplyScalar(t).add(this.origin), Xt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Gs.copy(e).add(t).multiplyScalar(0.5), $i.copy(t).sub(e).normalize(), an.copy(this.origin).sub(Gs);
    const s = e.distanceTo(t) * 0.5, r = -this.direction.dot($i), a = an.dot(this.direction), l = -an.dot($i), c = an.lengthSq(), u = Math.abs(1 - r * r);
    let h, d, m, g;
    if (u > 0)
      if (h = r * l - a, d = r * a - l, g = s * u, h >= 0)
        if (d >= -g)
          if (d <= g) {
            const p = 1 / u;
            h *= p, d *= p, m = h * (h + r * d + 2 * a) + d * (r * h + d + 2 * l) + c;
          } else
            d = s, h = Math.max(0, -(r * d + a)), m = -h * h + d * (d + 2 * l) + c;
        else
          d = -s, h = Math.max(0, -(r * d + a)), m = -h * h + d * (d + 2 * l) + c;
      else
        d <= -g ? (h = Math.max(0, -(-r * s + a)), d = h > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -h * h + d * (d + 2 * l) + c) : d <= g ? (h = 0, d = Math.min(Math.max(-s, -l), s), m = d * (d + 2 * l) + c) : (h = Math.max(0, -(r * s + a)), d = h > 0 ? s : Math.min(Math.max(-s, -l), s), m = -h * h + d * (d + 2 * l) + c);
    else
      d = r > 0 ? -s : s, h = Math.max(0, -(r * d + a)), m = -h * h + d * (d + 2 * l) + c;
    return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy($i).multiplyScalar(d).add(Gs), m;
  }
  intersectSphere(e, t) {
    Xt.subVectors(e.center, this.origin);
    const n = Xt.dot(this.direction), i = Xt.dot(Xt) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const r = Math.sqrt(s - i), a = n - r, l = n + r;
    return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
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
    let n, i, s, r, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), u >= 0 ? (s = (e.min.y - d.y) * u, r = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, r = (e.min.y - d.y) * u), n > r || s > i || ((s > n || isNaN(n)) && (n = s), (r < i || isNaN(i)) && (i = r), h >= 0 ? (a = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (a = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Xt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Vs.subVectors(t, e), Ji.subVectors(n, e), Hs.crossVectors(Vs, Ji);
    let r = this.direction.dot(Hs), a;
    if (r > 0) {
      if (i)
        return null;
      a = 1;
    } else if (r < 0)
      a = -1, r = -r;
    else
      return null;
    an.subVectors(this.origin, e);
    const l = a * this.direction.dot(Ji.crossVectors(an, Ji));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Vs.cross(an));
    if (c < 0 || l + c > r)
      return null;
    const u = -a * an.dot(Hs);
    return u < 0 ? null : this.at(u / r, s);
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
class Ce {
  constructor() {
    Ce.prototype.isMatrix4 = !0, this.elements = [
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
    ];
  }
  set(e, t, n, i, s, r, a, l, c, u, h, d, m, g, p, f) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = s, _[5] = r, _[9] = a, _[13] = l, _[2] = c, _[6] = u, _[10] = h, _[14] = d, _[3] = m, _[7] = g, _[11] = p, _[15] = f, this;
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
    return new Ce().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / jn.setFromMatrixColumn(e, 0).length(), s = 1 / jn.setFromMatrixColumn(e, 1).length(), r = 1 / jn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, r = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(s), h = Math.sin(s);
    if (e.order === "XYZ") {
      const d = r * u, m = r * h, g = a * u, p = a * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = m + g * c, t[5] = d - p * c, t[9] = -a * l, t[2] = p - d * c, t[6] = g + m * c, t[10] = r * l;
    } else if (e.order === "YXZ") {
      const d = l * u, m = l * h, g = c * u, p = c * h;
      t[0] = d + p * a, t[4] = g * a - m, t[8] = r * c, t[1] = r * h, t[5] = r * u, t[9] = -a, t[2] = m * a - g, t[6] = p + d * a, t[10] = r * l;
    } else if (e.order === "ZXY") {
      const d = l * u, m = l * h, g = c * u, p = c * h;
      t[0] = d - p * a, t[4] = -r * h, t[8] = g + m * a, t[1] = m + g * a, t[5] = r * u, t[9] = p - d * a, t[2] = -r * c, t[6] = a, t[10] = r * l;
    } else if (e.order === "ZYX") {
      const d = r * u, m = r * h, g = a * u, p = a * h;
      t[0] = l * u, t[4] = g * c - m, t[8] = d * c + p, t[1] = l * h, t[5] = p * c + d, t[9] = m * c - g, t[2] = -c, t[6] = a * l, t[10] = r * l;
    } else if (e.order === "YZX") {
      const d = r * l, m = r * c, g = a * l, p = a * c;
      t[0] = l * u, t[4] = p - d * h, t[8] = g * h + m, t[1] = h, t[5] = r * u, t[9] = -a * u, t[2] = -c * u, t[6] = m * h + g, t[10] = d - p * h;
    } else if (e.order === "XZY") {
      const d = r * l, m = r * c, g = a * l, p = a * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = d * h + p, t[5] = r * u, t[9] = m * h - g, t[2] = g * h - m, t[6] = a * u, t[10] = p * h + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ec, e, Ac);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return gt.subVectors(e, t), gt.lengthSq() === 0 && (gt.z = 1), gt.normalize(), on.crossVectors(n, gt), on.lengthSq() === 0 && (Math.abs(n.z) === 1 ? gt.x += 1e-4 : gt.z += 1e-4, gt.normalize(), on.crossVectors(n, gt)), on.normalize(), Qi.crossVectors(gt, on), i[0] = on.x, i[4] = Qi.x, i[8] = gt.x, i[1] = on.y, i[5] = Qi.y, i[9] = gt.y, i[2] = on.z, i[6] = Qi.z, i[10] = gt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], a = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], m = n[13], g = n[2], p = n[6], f = n[10], _ = n[14], w = n[3], b = n[7], v = n[11], T = n[15], A = i[0], D = i[4], x = i[8], E = i[12], F = i[1], j = i[5], J = i[9], U = i[13], N = i[2], G = i[6], q = i[10], $ = i[14], H = i[3], P = i[7], O = i[11], te = i[15];
    return s[0] = r * A + a * F + l * N + c * H, s[4] = r * D + a * j + l * G + c * P, s[8] = r * x + a * J + l * q + c * O, s[12] = r * E + a * U + l * $ + c * te, s[1] = u * A + h * F + d * N + m * H, s[5] = u * D + h * j + d * G + m * P, s[9] = u * x + h * J + d * q + m * O, s[13] = u * E + h * U + d * $ + m * te, s[2] = g * A + p * F + f * N + _ * H, s[6] = g * D + p * j + f * G + _ * P, s[10] = g * x + p * J + f * q + _ * O, s[14] = g * E + p * U + f * $ + _ * te, s[3] = w * A + b * F + v * N + T * H, s[7] = w * D + b * j + v * G + T * P, s[11] = w * x + b * J + v * q + T * O, s[15] = w * E + b * U + v * $ + T * te, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], r = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], d = e[10], m = e[14], g = e[3], p = e[7], f = e[11], _ = e[15];
    return g * (+s * l * h - i * c * h - s * a * d + n * c * d + i * a * m - n * l * m) + p * (+t * l * m - t * c * d + s * r * d - i * r * m + i * c * u - s * l * u) + f * (+t * c * h - t * a * m - s * r * h + n * r * m + s * a * u - n * c * u) + _ * (-i * a * u - t * l * h + t * a * d + i * r * h - n * r * d + n * l * u);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], m = e[11], g = e[12], p = e[13], f = e[14], _ = e[15], w = h * f * c - p * d * c + p * l * m - a * f * m - h * l * _ + a * d * _, b = g * d * c - u * f * c - g * l * m + r * f * m + u * l * _ - r * d * _, v = u * p * c - g * h * c + g * a * m - r * p * m - u * a * _ + r * h * _, T = g * h * l - u * p * l - g * a * d + r * p * d + u * a * f - r * h * f, A = t * w + n * b + i * v + s * T;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / A;
    return e[0] = w * D, e[1] = (p * d * s - h * f * s - p * i * m + n * f * m + h * i * _ - n * d * _) * D, e[2] = (a * f * s - p * l * s + p * i * c - n * f * c - a * i * _ + n * l * _) * D, e[3] = (h * l * s - a * d * s - h * i * c + n * d * c + a * i * m - n * l * m) * D, e[4] = b * D, e[5] = (u * f * s - g * d * s + g * i * m - t * f * m - u * i * _ + t * d * _) * D, e[6] = (g * l * s - r * f * s - g * i * c + t * f * c + r * i * _ - t * l * _) * D, e[7] = (r * d * s - u * l * s + u * i * c - t * d * c - r * i * m + t * l * m) * D, e[8] = v * D, e[9] = (g * h * s - u * p * s - g * n * m + t * p * m + u * n * _ - t * h * _) * D, e[10] = (r * p * s - g * a * s + g * n * c - t * p * c - r * n * _ + t * a * _) * D, e[11] = (u * a * s - r * h * s - u * n * c + t * h * c + r * n * m - t * a * m) * D, e[12] = T * D, e[13] = (u * p * i - g * h * i + g * n * d - t * p * d - u * n * f + t * h * f) * D, e[14] = (g * a * i - r * p * i - g * n * l + t * p * l + r * n * f - t * a * f) * D, e[15] = (r * h * i - u * a * i + u * n * l - t * h * l - r * n * d + t * a * d) * D, this;
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
    return this.set(
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
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, r = e.x, a = e.y, l = e.z, c = s * r, u = s * a;
    return this.set(
      c * r + n,
      c * a - i * l,
      c * l + i * a,
      0,
      c * a + i * l,
      u * a + n,
      u * l - i * r,
      0,
      c * l - i * a,
      u * l + i * r,
      s * l * l + n,
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
  makeShear(e, t, n, i, s, r) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      r,
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
    const i = this.elements, s = t._x, r = t._y, a = t._z, l = t._w, c = s + s, u = r + r, h = a + a, d = s * c, m = s * u, g = s * h, p = r * u, f = r * h, _ = a * h, w = l * c, b = l * u, v = l * h, T = n.x, A = n.y, D = n.z;
    return i[0] = (1 - (p + _)) * T, i[1] = (m + v) * T, i[2] = (g - b) * T, i[3] = 0, i[4] = (m - v) * A, i[5] = (1 - (d + _)) * A, i[6] = (f + w) * A, i[7] = 0, i[8] = (g + b) * D, i[9] = (f - w) * D, i[10] = (1 - (d + p)) * D, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = jn.set(i[0], i[1], i[2]).length();
    const r = jn.set(i[4], i[5], i[6]).length(), a = jn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Dt.copy(this);
    const c = 1 / s, u = 1 / r, h = 1 / a;
    return Dt.elements[0] *= c, Dt.elements[1] *= c, Dt.elements[2] *= c, Dt.elements[4] *= u, Dt.elements[5] *= u, Dt.elements[6] *= u, Dt.elements[8] *= h, Dt.elements[9] *= h, Dt.elements[10] *= h, t.setFromRotationMatrix(Dt), n.x = s, n.y = r, n.z = a, this;
  }
  makePerspective(e, t, n, i, s, r) {
    const a = this.elements, l = 2 * s / (t - e), c = 2 * s / (n - i), u = (t + e) / (t - e), h = (n + i) / (n - i), d = -(r + s) / (r - s), m = -2 * r * s / (r - s);
    return a[0] = l, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = c, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = m, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, r) {
    const a = this.elements, l = 1 / (t - e), c = 1 / (n - i), u = 1 / (r - s), h = (t + e) * l, d = (n + i) * c, m = (r + s) * u;
    return a[0] = 2 * l, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * u, a[14] = -m, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
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
const jn = /* @__PURE__ */ new L(), Dt = /* @__PURE__ */ new Ce(), Ec = /* @__PURE__ */ new L(0, 0, 0), Ac = /* @__PURE__ */ new L(1, 1, 1), on = /* @__PURE__ */ new L(), Qi = /* @__PURE__ */ new L(), gt = /* @__PURE__ */ new L(), va = /* @__PURE__ */ new Ce(), Ma = /* @__PURE__ */ new gn();
class Hi {
  constructor(e = 0, t = 0, n = 0, i = Hi.DefaultOrder) {
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
    const i = e.elements, s = i[0], r = i[4], a = i[8], l = i[1], c = i[5], u = i[9], h = i[2], d = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ct(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-r, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ct(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ct(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-r, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ct(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-r, c));
        break;
      case "YZX":
        this._z = Math.asin(ct(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-ct(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return va.makeRotationFromQuaternion(e), this.setFromRotationMatrix(va, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ma.setFromEuler(this), this.setFromQuaternion(Ma, e);
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
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
Hi.DefaultOrder = "XYZ";
Hi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ho {
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
let Cc = 0;
const ya = /* @__PURE__ */ new L(), Yn = /* @__PURE__ */ new gn(), qt = /* @__PURE__ */ new Ce(), es = /* @__PURE__ */ new L(), Ti = /* @__PURE__ */ new L(), Lc = /* @__PURE__ */ new L(), Rc = /* @__PURE__ */ new gn(), ba = /* @__PURE__ */ new L(1, 0, 0), Sa = /* @__PURE__ */ new L(0, 1, 0), wa = /* @__PURE__ */ new L(0, 0, 1), Dc = { type: "added" }, Ta = { type: "removed" };
class Ve extends mi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Cc++ }), this.uuid = It(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ve.DefaultUp.clone();
    const e = new L(), t = new Hi(), n = new gn(), i = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function r() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(r), Object.defineProperties(this, {
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
        value: new Ce()
      },
      normalMatrix: {
        value: new Tt()
      }
    }), this.matrix = new Ce(), this.matrixWorld = new Ce(), this.matrixAutoUpdate = Ve.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Ve.DefaultMatrixWorldAutoUpdate, this.layers = new Ho(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Yn.setFromAxisAngle(e, t), this.quaternion.multiply(Yn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Yn.setFromAxisAngle(e, t), this.quaternion.premultiply(Yn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ba, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Sa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(wa, e);
  }
  translateOnAxis(e, t) {
    return ya.copy(e).applyQuaternion(this.quaternion), this.position.add(ya.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(ba, e);
  }
  translateY(e) {
    return this.translateOnAxis(Sa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(wa, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(qt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? es.copy(e) : es.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Ti.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? qt.lookAt(Ti, es, this.up) : qt.lookAt(es, Ti, this.up), this.quaternion.setFromRotationMatrix(qt), i && (qt.extractRotation(i.matrixWorld), Yn.setFromRotationMatrix(qt), this.quaternion.premultiply(Yn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Dc)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ta)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Ta);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), qt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), qt.multiply(e.parent.matrixWorld)), e.applyMatrix4(qt), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
      const r = this.children[n].getObjectByProperty(e, t);
      if (r !== void 0)
        return r;
    }
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ti, e, Lc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ti, Rc, e), e;
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
      for (let s = 0, r = i.length; s < r; s++) {
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
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
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
        const l = this.animations[a];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = r(e.geometries), l = r(e.materials), c = r(e.textures), u = r(e.images), h = r(e.shapes), d = r(e.skeletons), m = r(e.animations), g = r(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function r(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Ve.DefaultUp = /* @__PURE__ */ new L(0, 1, 0);
Ve.DefaultMatrixAutoUpdate = !0;
Ve.DefaultMatrixWorldAutoUpdate = !0;
const Pt = /* @__PURE__ */ new L(), jt = /* @__PURE__ */ new L(), Ws = /* @__PURE__ */ new L(), Yt = /* @__PURE__ */ new L(), Kn = /* @__PURE__ */ new L(), Zn = /* @__PURE__ */ new L(), Ea = /* @__PURE__ */ new L(), Xs = /* @__PURE__ */ new L(), qs = /* @__PURE__ */ new L(), js = /* @__PURE__ */ new L();
class $t {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Pt.subVectors(e, t), i.cross(Pt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Pt.subVectors(i, t), jt.subVectors(n, t), Ws.subVectors(e, t);
    const r = Pt.dot(Pt), a = Pt.dot(jt), l = Pt.dot(Ws), c = jt.dot(jt), u = jt.dot(Ws), h = r * c - a * a;
    if (h === 0)
      return s.set(-2, -1, -1);
    const d = 1 / h, m = (c * l - a * u) * d, g = (r * u - a * l) * d;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Yt), Yt.x >= 0 && Yt.y >= 0 && Yt.x + Yt.y <= 1;
  }
  static getUV(e, t, n, i, s, r, a, l) {
    return this.getBarycoord(e, t, n, i, Yt), l.set(0, 0), l.addScaledVector(s, Yt.x), l.addScaledVector(r, Yt.y), l.addScaledVector(a, Yt.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return Pt.subVectors(n, t), jt.subVectors(e, t), Pt.cross(jt).dot(i) < 0;
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
    return Pt.subVectors(this.c, this.b), jt.subVectors(this.a, this.b), Pt.cross(jt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return $t.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return $t.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return $t.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return $t.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return $t.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let r, a;
    Kn.subVectors(i, n), Zn.subVectors(s, n), Xs.subVectors(e, n);
    const l = Kn.dot(Xs), c = Zn.dot(Xs);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    qs.subVectors(e, i);
    const u = Kn.dot(qs), h = Zn.dot(qs);
    if (u >= 0 && h <= u)
      return t.copy(i);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return r = l / (l - u), t.copy(n).addScaledVector(Kn, r);
    js.subVectors(e, s);
    const m = Kn.dot(js), g = Zn.dot(js);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const p = m * c - l * g;
    if (p <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(Zn, a);
    const f = u * g - m * h;
    if (f <= 0 && h - u >= 0 && m - g >= 0)
      return Ea.subVectors(s, i), a = (h - u) / (h - u + (m - g)), t.copy(i).addScaledVector(Ea, a);
    const _ = 1 / (f + p + d);
    return r = p * _, a = d * _, t.copy(n).addScaledVector(Kn, r).addScaledVector(Zn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Pc = 0;
class zt extends mi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Pc++ }), this.uuid = It(), this.name = "", this.type = "Material", this.blending = ri, this.side = In, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Lo, this.blendDst = Ro, this.blendEquation = ii, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = cr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = lc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Is, this.stencilZFail = Is, this.stencilZPass = Is, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
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
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ri && (n.blending = this.blending), this.side !== In && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(s) {
      const r = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, r.push(l);
      }
      return r;
    }
    if (t) {
      const s = i(e.textures), r = i(e.images);
      s.length > 0 && (n.textures = s), r.length > 0 && (n.images = r);
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
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class pn extends zt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ye(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Do, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const je = /* @__PURE__ */ new L(), ts = /* @__PURE__ */ new Re();
class pt {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = pr, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
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
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
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
        ts.fromBufferAttribute(this, t), ts.applyMatrix3(e), this.setXY(t, ts.x, ts.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        je.fromBufferAttribute(this, t), je.applyMatrix3(e), this.setXYZ(t, je.x, je.y, je.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      je.fromBufferAttribute(this, t), je.applyMatrix4(e), this.setXYZ(t, je.x, je.y, je.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      je.fromBufferAttribute(this, t), je.applyNormalMatrix(e), this.setXYZ(t, je.x, je.y, je.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      je.fromBufferAttribute(this, t), je.transformDirection(e), this.setXYZ(t, je.x, je.y, je.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Be(t, this.array), n = Be(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Be(t, this.array), n = Be(n, this.array), i = Be(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Be(t, this.array), n = Be(n, this.array), i = Be(i, this.array), s = Be(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== pr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Wo extends pt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Xo extends pt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class tn extends pt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ic = 0;
const yt = /* @__PURE__ */ new Ce(), Ys = /* @__PURE__ */ new Ve(), $n = /* @__PURE__ */ new L(), _t = /* @__PURE__ */ new gi(), Ei = /* @__PURE__ */ new gi(), Qe = /* @__PURE__ */ new L();
class Bt extends mi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ic++ }), this.uuid = It(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (zo(e) ? Xo : Wo)(e, 1) : this.index = e, this;
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
      const s = new Tt().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return yt.makeRotationFromQuaternion(e), this.applyMatrix4(yt), this;
  }
  rotateX(e) {
    return yt.makeRotationX(e), this.applyMatrix4(yt), this;
  }
  rotateY(e) {
    return yt.makeRotationY(e), this.applyMatrix4(yt), this;
  }
  rotateZ(e) {
    return yt.makeRotationZ(e), this.applyMatrix4(yt), this;
  }
  translate(e, t, n) {
    return yt.makeTranslation(e, t, n), this.applyMatrix4(yt), this;
  }
  scale(e, t, n) {
    return yt.makeScale(e, t, n), this.applyMatrix4(yt), this;
  }
  lookAt(e) {
    return Ys.lookAt(e), Ys.updateMatrix(), this.applyMatrix4(Ys.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter($n).negate(), this.translate($n.x, $n.y, $n.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new tn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new gi());
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
          const s = t[n];
          _t.setFromBufferAttribute(s), this.morphTargetsRelative ? (Qe.addVectors(this.boundingBox.min, _t.min), this.boundingBox.expandByPoint(Qe), Qe.addVectors(this.boundingBox.max, _t.max), this.boundingBox.expandByPoint(Qe)) : (this.boundingBox.expandByPoint(_t.min), this.boundingBox.expandByPoint(_t.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new _i());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (_t.setFromBufferAttribute(e), t)
        for (let s = 0, r = t.length; s < r; s++) {
          const a = t[s];
          Ei.setFromBufferAttribute(a), this.morphTargetsRelative ? (Qe.addVectors(_t.min, Ei.min), _t.expandByPoint(Qe), Qe.addVectors(_t.max, Ei.max), _t.expandByPoint(Qe)) : (_t.expandByPoint(Ei.min), _t.expandByPoint(Ei.max));
        }
      _t.getCenter(n);
      let i = 0;
      for (let s = 0, r = e.count; s < r; s++)
        Qe.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Qe));
      if (t)
        for (let s = 0, r = t.length; s < r; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            Qe.fromBufferAttribute(a, c), l && ($n.fromBufferAttribute(e, c), Qe.add($n)), i = Math.max(i, n.distanceToSquared(Qe));
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
    const n = e.array, i = t.position.array, s = t.normal.array, r = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new pt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let F = 0; F < a; F++)
      c[F] = new L(), u[F] = new L();
    const h = new L(), d = new L(), m = new L(), g = new Re(), p = new Re(), f = new Re(), _ = new L(), w = new L();
    function b(F, j, J) {
      h.fromArray(i, F * 3), d.fromArray(i, j * 3), m.fromArray(i, J * 3), g.fromArray(r, F * 2), p.fromArray(r, j * 2), f.fromArray(r, J * 2), d.sub(h), m.sub(h), p.sub(g), f.sub(g);
      const U = 1 / (p.x * f.y - f.x * p.y);
      !isFinite(U) || (_.copy(d).multiplyScalar(f.y).addScaledVector(m, -p.y).multiplyScalar(U), w.copy(m).multiplyScalar(p.x).addScaledVector(d, -f.x).multiplyScalar(U), c[F].add(_), c[j].add(_), c[J].add(_), u[F].add(w), u[j].add(w), u[J].add(w));
    }
    let v = this.groups;
    v.length === 0 && (v = [{
      start: 0,
      count: n.length
    }]);
    for (let F = 0, j = v.length; F < j; ++F) {
      const J = v[F], U = J.start, N = J.count;
      for (let G = U, q = U + N; G < q; G += 3)
        b(
          n[G + 0],
          n[G + 1],
          n[G + 2]
        );
    }
    const T = new L(), A = new L(), D = new L(), x = new L();
    function E(F) {
      D.fromArray(s, F * 3), x.copy(D);
      const j = c[F];
      T.copy(j), T.sub(D.multiplyScalar(D.dot(j))).normalize(), A.crossVectors(x, j);
      const U = A.dot(u[F]) < 0 ? -1 : 1;
      l[F * 4] = T.x, l[F * 4 + 1] = T.y, l[F * 4 + 2] = T.z, l[F * 4 + 3] = U;
    }
    for (let F = 0, j = v.length; F < j; ++F) {
      const J = v[F], U = J.start, N = J.count;
      for (let G = U, q = U + N; G < q; G += 3)
        E(n[G + 0]), E(n[G + 1]), E(n[G + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new pt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new L(), s = new L(), r = new L(), a = new L(), l = new L(), c = new L(), u = new L(), h = new L();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), p = e.getX(d + 1), f = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), r.fromBufferAttribute(t, f), u.subVectors(r, s), h.subVectors(i, s), u.cross(h), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, p), c.fromBufferAttribute(n, f), a.add(u), l.add(u), c.add(u), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(p, l.x, l.y, l.z), n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), r.fromBufferAttribute(t, d + 2), u.subVectors(r, s), h.subVectors(i, s), u.cross(h), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Qe.fromBufferAttribute(e, t), Qe.normalize(), e.setXYZ(t, Qe.x, Qe.y, Qe.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, h = a.normalized, d = new c.constructor(l.length * u);
      let m = 0, g = 0;
      for (let p = 0, f = l.length; p < f; p++) {
        a.isInterleavedBufferAttribute ? m = l[p] * a.data.stride + a.offset : m = l[p] * u;
        for (let _ = 0; _ < u; _++)
          d[g++] = c[m++];
      }
      return new pt(d, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Bt(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const l = i[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u], m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let a = 0, l = r.length; a < l; a++) {
      const c = r[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
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
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        const m = c[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (i[l] = u, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const r = this.groups;
    r.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(r)));
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
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], h = s[c];
      for (let d = 0, m = h.length; d < m; d++)
        u.push(h[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const r = e.groups;
    for (let c = 0, u = r.length; c < u; c++) {
      const h = r[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Aa = /* @__PURE__ */ new Ce(), Jn = /* @__PURE__ */ new Tr(), Ks = /* @__PURE__ */ new _i(), ln = /* @__PURE__ */ new L(), cn = /* @__PURE__ */ new L(), un = /* @__PURE__ */ new L(), Zs = /* @__PURE__ */ new L(), $s = /* @__PURE__ */ new L(), Js = /* @__PURE__ */ new L(), ns = /* @__PURE__ */ new L(), is = /* @__PURE__ */ new L(), ss = /* @__PURE__ */ new L(), rs = /* @__PURE__ */ new Re(), as = /* @__PURE__ */ new Re(), os = /* @__PURE__ */ new Re(), Qs = /* @__PURE__ */ new L(), ls = /* @__PURE__ */ new L();
class xt extends Ve {
  constructor(e = new Bt(), t = new pn()) {
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
        for (let s = 0, r = i.length; s < r; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Ks.copy(n.boundingSphere), Ks.applyMatrix4(s), e.ray.intersectsSphere(Ks) === !1) || (Aa.copy(s).invert(), Jn.copy(e.ray).applyMatrix4(Aa), n.boundingBox !== null && Jn.intersectsBox(n.boundingBox) === !1))
      return;
    let r;
    const a = n.index, l = n.attributes.position, c = n.morphAttributes.position, u = n.morphTargetsRelative, h = n.attributes.uv, d = n.attributes.uv2, m = n.groups, g = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let p = 0, f = m.length; p < f; p++) {
          const _ = m[p], w = i[_.materialIndex], b = Math.max(_.start, g.start), v = Math.min(a.count, Math.min(_.start + _.count, g.start + g.count));
          for (let T = b, A = v; T < A; T += 3) {
            const D = a.getX(T), x = a.getX(T + 1), E = a.getX(T + 2);
            r = cs(this, w, e, Jn, l, c, u, h, d, D, x, E), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = _.materialIndex, t.push(r));
          }
        }
      else {
        const p = Math.max(0, g.start), f = Math.min(a.count, g.start + g.count);
        for (let _ = p, w = f; _ < w; _ += 3) {
          const b = a.getX(_), v = a.getX(_ + 1), T = a.getX(_ + 2);
          r = cs(this, i, e, Jn, l, c, u, h, d, b, v, T), r && (r.faceIndex = Math.floor(_ / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let p = 0, f = m.length; p < f; p++) {
          const _ = m[p], w = i[_.materialIndex], b = Math.max(_.start, g.start), v = Math.min(l.count, Math.min(_.start + _.count, g.start + g.count));
          for (let T = b, A = v; T < A; T += 3) {
            const D = T, x = T + 1, E = T + 2;
            r = cs(this, w, e, Jn, l, c, u, h, d, D, x, E), r && (r.faceIndex = Math.floor(T / 3), r.face.materialIndex = _.materialIndex, t.push(r));
          }
        }
      else {
        const p = Math.max(0, g.start), f = Math.min(l.count, g.start + g.count);
        for (let _ = p, w = f; _ < w; _ += 3) {
          const b = _, v = _ + 1, T = _ + 2;
          r = cs(this, i, e, Jn, l, c, u, h, d, b, v, T), r && (r.faceIndex = Math.floor(_ / 3), t.push(r));
        }
      }
  }
}
function Nc(o, e, t, n, i, s, r, a) {
  let l;
  if (e.side === Et ? l = n.intersectTriangle(r, s, i, !0, a) : l = n.intersectTriangle(i, s, r, e.side !== Jt, a), l === null)
    return null;
  ls.copy(a), ls.applyMatrix4(o.matrixWorld);
  const c = t.ray.origin.distanceTo(ls);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: ls.clone(),
    object: o
  };
}
function cs(o, e, t, n, i, s, r, a, l, c, u, h) {
  ln.fromBufferAttribute(i, c), cn.fromBufferAttribute(i, u), un.fromBufferAttribute(i, h);
  const d = o.morphTargetInfluences;
  if (s && d) {
    ns.set(0, 0, 0), is.set(0, 0, 0), ss.set(0, 0, 0);
    for (let g = 0, p = s.length; g < p; g++) {
      const f = d[g], _ = s[g];
      f !== 0 && (Zs.fromBufferAttribute(_, c), $s.fromBufferAttribute(_, u), Js.fromBufferAttribute(_, h), r ? (ns.addScaledVector(Zs, f), is.addScaledVector($s, f), ss.addScaledVector(Js, f)) : (ns.addScaledVector(Zs.sub(ln), f), is.addScaledVector($s.sub(cn), f), ss.addScaledVector(Js.sub(un), f)));
    }
    ln.add(ns), cn.add(is), un.add(ss);
  }
  o.isSkinnedMesh && (o.boneTransform(c, ln), o.boneTransform(u, cn), o.boneTransform(h, un));
  const m = Nc(o, e, t, n, ln, cn, un, Qs);
  if (m) {
    a && (rs.fromBufferAttribute(a, c), as.fromBufferAttribute(a, u), os.fromBufferAttribute(a, h), m.uv = $t.getUV(Qs, ln, cn, un, rs, as, os, new Re())), l && (rs.fromBufferAttribute(l, c), as.fromBufferAttribute(l, u), os.fromBufferAttribute(l, h), m.uv2 = $t.getUV(Qs, ln, cn, un, rs, as, os, new Re()));
    const g = {
      a: c,
      b: u,
      c: h,
      normal: new L(),
      materialIndex: 0
    };
    $t.getNormal(ln, cn, un, g.normal), m.face = g;
  }
  return m;
}
class xi extends Bt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, r = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: r
    };
    const a = this;
    i = Math.floor(i), s = Math.floor(s), r = Math.floor(r);
    const l = [], c = [], u = [], h = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, r, s, 0), g("z", "y", "x", 1, -1, n, t, -e, r, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, r, 2), g("x", "z", "y", 1, -1, e, n, -t, i, r, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new tn(c, 3)), this.setAttribute("normal", new tn(u, 3)), this.setAttribute("uv", new tn(h, 2));
    function g(p, f, _, w, b, v, T, A, D, x, E) {
      const F = v / D, j = T / x, J = v / 2, U = T / 2, N = A / 2, G = D + 1, q = x + 1;
      let $ = 0, H = 0;
      const P = new L();
      for (let O = 0; O < q; O++) {
        const te = O * j - U;
        for (let Y = 0; Y < G; Y++) {
          const ne = Y * F - J;
          P[p] = ne * w, P[f] = te * b, P[_] = N, c.push(P.x, P.y, P.z), P[p] = 0, P[f] = 0, P[_] = A > 0 ? 1 : -1, u.push(P.x, P.y, P.z), h.push(Y / D), h.push(1 - O / x), $ += 1;
        }
      }
      for (let O = 0; O < x; O++)
        for (let te = 0; te < D; te++) {
          const Y = d + te + G * O, ne = d + te + G * (O + 1), oe = d + (te + 1) + G * (O + 1), ve = d + (te + 1) + G * O;
          l.push(Y, ne, ve), l.push(ne, oe, ve), H += 6;
        }
      a.addGroup(m, H, E), m += H, d += $;
    }
  }
  static fromJSON(e) {
    return new xi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function di(o) {
  const e = {};
  for (const t in o) {
    e[t] = {};
    for (const n in o[t]) {
      const i = o[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function lt(o) {
  const e = {};
  for (let t = 0; t < o.length; t++) {
    const n = di(o[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Fc(o) {
  const e = [];
  for (let t = 0; t < o.length; t++)
    e.push(o[t].clone());
  return e;
}
const Oc = { clone: di, merge: lt };
var Uc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, zc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Un extends zt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Uc, this.fragmentShader = zc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = di(e.uniforms), this.uniformsGroups = Fc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const r = this.uniforms[i].value;
      r && r.isTexture ? t.uniforms[i] = {
        type: "t",
        value: r.toJSON(e).uuid
      } : r && r.isColor ? t.uniforms[i] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: r.toArray()
      } : t.uniforms[i] = {
        value: r
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class qo extends Ve {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ce(), this.projectionMatrix = new Ce(), this.projectionMatrixInverse = new Ce();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
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
class ut extends qo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = zi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ni * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return zi * 2 * Math.atan(
      Math.tan(Ni * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, r) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ni * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const r = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = r.fullWidth, c = r.fullHeight;
      s += r.offsetX * i / l, t -= r.offsetY * n / c, i *= r.width / l, n *= r.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Qn = 90, ei = 1;
class Bc extends Ve {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new ut(Qn, ei, e, t);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new L(1, 0, 0)), this.add(i);
    const s = new ut(Qn, ei, e, t);
    s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new L(-1, 0, 0)), this.add(s);
    const r = new ut(Qn, ei, e, t);
    r.layers = this.layers, r.up.set(0, 0, 1), r.lookAt(new L(0, 1, 0)), this.add(r);
    const a = new ut(Qn, ei, e, t);
    a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new L(0, -1, 0)), this.add(a);
    const l = new ut(Qn, ei, e, t);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new L(0, 0, 1)), this.add(l);
    const c = new ut(Qn, ei, e, t);
    c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new L(0, 0, -1)), this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, r, a, l, c] = this.children, u = e.getRenderTarget(), h = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = en, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, r), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(u), e.toneMapping = h, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class jo extends ht {
  constructor(e, t, n, i, s, r, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : oi, super(e, t, n, i, s, r, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class kc extends On {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new jo(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : ft;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
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
    }, i = new xi(5, 5, 5), s = new Un({
      name: "CubemapFromEquirect",
      uniforms: di(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Et,
      blending: mn
    });
    s.uniforms.tEquirect.value = t;
    const r = new xt(i, s), a = t.minFilter;
    return t.minFilter === pi && (t.minFilter = ft), new Bc(1, 10, this).update(e, r), t.minFilter = a, r.geometry.dispose(), r.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let r = 0; r < 6; r++)
      e.setRenderTarget(this, r), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const er = /* @__PURE__ */ new L(), Gc = /* @__PURE__ */ new L(), Vc = /* @__PURE__ */ new Tt();
class Sn {
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
    const i = er.subVectors(n, t).cross(Gc.subVectors(e, t)).normalize();
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
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(er), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
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
    const n = t || Vc.getNormalMatrix(e), i = this.coplanarPoint(er).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const ti = /* @__PURE__ */ new _i(), us = /* @__PURE__ */ new L();
class Er {
  constructor(e = new Sn(), t = new Sn(), n = new Sn(), i = new Sn(), s = new Sn(), r = new Sn()) {
    this.planes = [e, t, n, i, s, r];
  }
  set(e, t, n, i, s, r) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(r), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], r = n[2], a = n[3], l = n[4], c = n[5], u = n[6], h = n[7], d = n[8], m = n[9], g = n[10], p = n[11], f = n[12], _ = n[13], w = n[14], b = n[15];
    return t[0].setComponents(a - i, h - l, p - d, b - f).normalize(), t[1].setComponents(a + i, h + l, p + d, b + f).normalize(), t[2].setComponents(a + s, h + c, p + m, b + _).normalize(), t[3].setComponents(a - s, h - c, p - m, b - _).normalize(), t[4].setComponents(a - r, h - u, p - g, b - w).normalize(), t[5].setComponents(a + r, h + u, p + g, b + w).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(ti);
  }
  intersectsSprite(e) {
    return ti.center.set(0, 0, 0), ti.radius = 0.7071067811865476, ti.applyMatrix4(e.matrixWorld), this.intersectsSphere(ti);
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
      if (us.x = i.normal.x > 0 ? e.max.x : e.min.x, us.y = i.normal.y > 0 ? e.max.y : e.min.y, us.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(us) < 0)
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
function Yo() {
  let o = null, e = !1, t = null, n = null;
  function i(s, r) {
    t(s, r), n = o.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = o.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      o.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      o = s;
    }
  };
}
function Hc(o, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, u) {
    const h = c.array, d = c.usage, m = o.createBuffer();
    o.bindBuffer(u, m), o.bufferData(u, h, d), c.onUploadCallback();
    let g;
    if (h instanceof Float32Array)
      g = 5126;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (h instanceof Int16Array)
      g = 5122;
    else if (h instanceof Uint32Array)
      g = 5125;
    else if (h instanceof Int32Array)
      g = 5124;
    else if (h instanceof Int8Array)
      g = 5120;
    else if (h instanceof Uint8Array)
      g = 5121;
    else if (h instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: m,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, u, h) {
    const d = u.array, m = u.updateRange;
    o.bindBuffer(h, c), m.count === -1 ? o.bufferSubData(h, 0, d) : (t ? o.bufferSubData(
      h,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : o.bufferSubData(
      h,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1);
  }
  function r(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (o.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
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
    const h = n.get(c);
    h === void 0 ? n.set(c, i(c, u)) : h.version < c.version && (s(h.buffer, c, u), h.version = c.version);
  }
  return {
    get: r,
    remove: a,
    update: l
  };
}
class Ar extends Bt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, r = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, u = l + 1, h = e / a, d = t / l, m = [], g = [], p = [], f = [];
    for (let _ = 0; _ < u; _++) {
      const w = _ * d - r;
      for (let b = 0; b < c; b++) {
        const v = b * h - s;
        g.push(v, -w, 0), p.push(0, 0, 1), f.push(b / a), f.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let w = 0; w < a; w++) {
        const b = w + c * _, v = w + c * (_ + 1), T = w + 1 + c * (_ + 1), A = w + 1 + c * _;
        m.push(b, v, A), m.push(v, T, A);
      }
    this.setIndex(m), this.setAttribute("position", new tn(g, 3)), this.setAttribute("normal", new tn(p, 3)), this.setAttribute("uv", new tn(f, 2));
  }
  static fromJSON(e) {
    return new Ar(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Wc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Xc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, qc = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, jc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Yc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Kc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Zc = "vec3 transformed = vec3( position );", $c = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Jc = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`, Qc = `#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`, eu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
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
#endif`, tu = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, nu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, iu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, su = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, ru = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, au = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ou = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, lu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, cu = `#define PI 3.141592653589793
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
}`, uu = `#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`, hu = `vec3 transformedNormal = objectNormal;
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
#endif`, du = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, fu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, pu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, mu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, gu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", _u = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, xu = `#ifdef USE_ENVMAP
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
#endif`, vu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Mu = `#ifdef USE_ENVMAP
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
#endif`, yu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, bu = `#ifdef USE_ENVMAP
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
#endif`, Su = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, wu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Tu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Eu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Au = `#ifdef USE_GRADIENTMAP
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
}`, Cu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Lu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Ru = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Du = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`, Pu = `uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`, Iu = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, Nu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Fu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, Ou = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Uu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, zu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, Bu = `struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
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
}`, ku = `
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`, Gu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Vu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Hu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Wu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Xu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, qu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, ju = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Yu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ku = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Zu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, $u = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ju = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Qu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, eh = `#ifdef USE_MORPHNORMALS
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
#endif`, th = `#ifdef USE_MORPHTARGETS
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
#endif`, nh = `#ifdef USE_MORPHTARGETS
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
#endif`, ih = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, sh = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, rh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ah = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, oh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, lh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, ch = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, uh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, hh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, dh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, fh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ph = `vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, mh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, gh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, _h = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, xh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, vh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Mh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, yh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`, bh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Sh = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, wh = `float getShadowMask() {
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
}`, Th = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Eh = `#ifdef USE_SKINNING
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
#endif`, Ah = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Ch = `#ifdef USE_SKINNING
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
#endif`, Lh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Rh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Dh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Ph = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Ih = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, Nh = `#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, Fh = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Oh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Uh = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, zh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Bh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, kh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Gh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Vh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Hh = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Wh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Xh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
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
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, qh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, jh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Yh = `#include <common>
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
}`, Kh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Zh = `#define DISTANCE
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
}`, $h = `#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Jh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Qh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, ed = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, td = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, nd = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`, id = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, sd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`, rd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ad = `#define MATCAP
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
}`, od = `#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ld = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, cd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`, ud = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`, hd = `#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`, fd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`, md = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`, _d = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, xd = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, vd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Md = `uniform float rotation;
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
}`, yd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Se = {
  alphamap_fragment: Wc,
  alphamap_pars_fragment: Xc,
  alphatest_fragment: qc,
  alphatest_pars_fragment: jc,
  aomap_fragment: Yc,
  aomap_pars_fragment: Kc,
  begin_vertex: Zc,
  beginnormal_vertex: $c,
  bsdfs: Jc,
  iridescence_fragment: Qc,
  bumpmap_pars_fragment: eu,
  clipping_planes_fragment: tu,
  clipping_planes_pars_fragment: nu,
  clipping_planes_pars_vertex: iu,
  clipping_planes_vertex: su,
  color_fragment: ru,
  color_pars_fragment: au,
  color_pars_vertex: ou,
  color_vertex: lu,
  common: cu,
  cube_uv_reflection_fragment: uu,
  defaultnormal_vertex: hu,
  displacementmap_pars_vertex: du,
  displacementmap_vertex: fu,
  emissivemap_fragment: pu,
  emissivemap_pars_fragment: mu,
  encodings_fragment: gu,
  encodings_pars_fragment: _u,
  envmap_fragment: xu,
  envmap_common_pars_fragment: vu,
  envmap_pars_fragment: Mu,
  envmap_pars_vertex: yu,
  envmap_physical_pars_fragment: Iu,
  envmap_vertex: bu,
  fog_vertex: Su,
  fog_pars_vertex: wu,
  fog_fragment: Tu,
  fog_pars_fragment: Eu,
  gradientmap_pars_fragment: Au,
  lightmap_fragment: Cu,
  lightmap_pars_fragment: Lu,
  lights_lambert_fragment: Ru,
  lights_lambert_pars_fragment: Du,
  lights_pars_begin: Pu,
  lights_toon_fragment: Nu,
  lights_toon_pars_fragment: Fu,
  lights_phong_fragment: Ou,
  lights_phong_pars_fragment: Uu,
  lights_physical_fragment: zu,
  lights_physical_pars_fragment: Bu,
  lights_fragment_begin: ku,
  lights_fragment_maps: Gu,
  lights_fragment_end: Vu,
  logdepthbuf_fragment: Hu,
  logdepthbuf_pars_fragment: Wu,
  logdepthbuf_pars_vertex: Xu,
  logdepthbuf_vertex: qu,
  map_fragment: ju,
  map_pars_fragment: Yu,
  map_particle_fragment: Ku,
  map_particle_pars_fragment: Zu,
  metalnessmap_fragment: $u,
  metalnessmap_pars_fragment: Ju,
  morphcolor_vertex: Qu,
  morphnormal_vertex: eh,
  morphtarget_pars_vertex: th,
  morphtarget_vertex: nh,
  normal_fragment_begin: ih,
  normal_fragment_maps: sh,
  normal_pars_fragment: rh,
  normal_pars_vertex: ah,
  normal_vertex: oh,
  normalmap_pars_fragment: lh,
  clearcoat_normal_fragment_begin: ch,
  clearcoat_normal_fragment_maps: uh,
  clearcoat_pars_fragment: hh,
  iridescence_pars_fragment: dh,
  output_fragment: fh,
  packing: ph,
  premultiplied_alpha_fragment: mh,
  project_vertex: gh,
  dithering_fragment: _h,
  dithering_pars_fragment: xh,
  roughnessmap_fragment: vh,
  roughnessmap_pars_fragment: Mh,
  shadowmap_pars_fragment: yh,
  shadowmap_pars_vertex: bh,
  shadowmap_vertex: Sh,
  shadowmask_pars_fragment: wh,
  skinbase_vertex: Th,
  skinning_pars_vertex: Eh,
  skinning_vertex: Ah,
  skinnormal_vertex: Ch,
  specularmap_fragment: Lh,
  specularmap_pars_fragment: Rh,
  tonemapping_fragment: Dh,
  tonemapping_pars_fragment: Ph,
  transmission_fragment: Ih,
  transmission_pars_fragment: Nh,
  uv_pars_fragment: Fh,
  uv_pars_vertex: Oh,
  uv_vertex: Uh,
  uv2_pars_fragment: zh,
  uv2_pars_vertex: Bh,
  uv2_vertex: kh,
  worldpos_vertex: Gh,
  background_vert: Vh,
  background_frag: Hh,
  backgroundCube_vert: Wh,
  backgroundCube_frag: Xh,
  cube_vert: qh,
  cube_frag: jh,
  depth_vert: Yh,
  depth_frag: Kh,
  distanceRGBA_vert: Zh,
  distanceRGBA_frag: $h,
  equirect_vert: Jh,
  equirect_frag: Qh,
  linedashed_vert: ed,
  linedashed_frag: td,
  meshbasic_vert: nd,
  meshbasic_frag: id,
  meshlambert_vert: sd,
  meshlambert_frag: rd,
  meshmatcap_vert: ad,
  meshmatcap_frag: od,
  meshnormal_vert: ld,
  meshnormal_frag: cd,
  meshphong_vert: ud,
  meshphong_frag: hd,
  meshphysical_vert: dd,
  meshphysical_frag: fd,
  meshtoon_vert: pd,
  meshtoon_frag: md,
  points_vert: gd,
  points_frag: _d,
  shadow_vert: xd,
  shadow_frag: vd,
  sprite_vert: Md,
  sprite_frag: yd
}, ee = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new Tt() },
    uv2Transform: { value: /* @__PURE__ */ new Tt() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
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
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new Re(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ye(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Tt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Re(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Tt() }
  }
}, Ut = {
  basic: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.specularmap,
      ee.envmap,
      ee.aomap,
      ee.lightmap,
      ee.fog
    ]),
    vertexShader: Se.meshbasic_vert,
    fragmentShader: Se.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.specularmap,
      ee.envmap,
      ee.aomap,
      ee.lightmap,
      ee.emissivemap,
      ee.bumpmap,
      ee.normalmap,
      ee.displacementmap,
      ee.fog,
      ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new ye(0) }
      }
    ]),
    vertexShader: Se.meshlambert_vert,
    fragmentShader: Se.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.specularmap,
      ee.envmap,
      ee.aomap,
      ee.lightmap,
      ee.emissivemap,
      ee.bumpmap,
      ee.normalmap,
      ee.displacementmap,
      ee.fog,
      ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new ye(0) },
        specular: { value: /* @__PURE__ */ new ye(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Se.meshphong_vert,
    fragmentShader: Se.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.envmap,
      ee.aomap,
      ee.lightmap,
      ee.emissivemap,
      ee.bumpmap,
      ee.normalmap,
      ee.displacementmap,
      ee.roughnessmap,
      ee.metalnessmap,
      ee.fog,
      ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new ye(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Se.meshphysical_vert,
    fragmentShader: Se.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.aomap,
      ee.lightmap,
      ee.emissivemap,
      ee.bumpmap,
      ee.normalmap,
      ee.displacementmap,
      ee.gradientmap,
      ee.fog,
      ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new ye(0) }
      }
    ]),
    vertexShader: Se.meshtoon_vert,
    fragmentShader: Se.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.bumpmap,
      ee.normalmap,
      ee.displacementmap,
      ee.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Se.meshmatcap_vert,
    fragmentShader: Se.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ lt([
      ee.points,
      ee.fog
    ]),
    vertexShader: Se.points_vert,
    fragmentShader: Se.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Se.linedashed_vert,
    fragmentShader: Se.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.displacementmap
    ]),
    vertexShader: Se.depth_vert,
    fragmentShader: Se.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.bumpmap,
      ee.normalmap,
      ee.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Se.meshnormal_vert,
    fragmentShader: Se.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ lt([
      ee.sprite,
      ee.fog
    ]),
    vertexShader: Se.sprite_vert,
    fragmentShader: Se.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Tt() },
      t2D: { value: null }
    },
    vertexShader: Se.background_vert,
    fragmentShader: Se.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 }
    },
    vertexShader: Se.backgroundCube_vert,
    fragmentShader: Se.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Se.cube_vert,
    fragmentShader: Se.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Se.equirect_vert,
    fragmentShader: Se.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ lt([
      ee.common,
      ee.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Se.distanceRGBA_vert,
    fragmentShader: Se.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ lt([
      ee.lights,
      ee.fog,
      {
        color: { value: /* @__PURE__ */ new ye(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Se.shadow_vert,
    fragmentShader: Se.shadow_frag
  }
};
Ut.physical = {
  uniforms: /* @__PURE__ */ lt([
    Ut.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Re(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ye(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Re() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ye(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new ye(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Se.meshphysical_vert,
  fragmentShader: Se.meshphysical_frag
};
function bd(o, e, t, n, i, s, r) {
  const a = new ye(0);
  let l = s === !0 ? 0 : 1, c, u, h = null, d = 0, m = null;
  function g(f, _) {
    let w = !1, b = _.isScene === !0 ? _.background : null;
    b && b.isTexture && (b = (_.backgroundBlurriness > 0 ? t : e).get(b));
    const v = o.xr, T = v.getSession && v.getSession();
    T && T.environmentBlendMode === "additive" && (b = null), b === null ? p(a, l) : b && b.isColor && (p(b, 1), w = !0), (o.autoClear || w) && o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil), b && (b.isCubeTexture || b.mapping === bs) ? (u === void 0 && (u = new xt(
      new xi(1, 1, 1),
      new Un({
        name: "BackgroundCubeMaterial",
        uniforms: di(Ut.backgroundCube.uniforms),
        vertexShader: Ut.backgroundCube.vertexShader,
        fragmentShader: Ut.backgroundCube.fragmentShader,
        side: Et,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(A, D, x) {
      this.matrixWorld.copyPosition(x.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), u.material.uniforms.envMap.value = b, u.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, (h !== b || d !== b.version || m !== o.toneMapping) && (u.material.needsUpdate = !0, h = b, d = b.version, m = o.toneMapping), u.layers.enableAll(), f.unshift(u, u.geometry, u.material, 0, 0, null)) : b && b.isTexture && (c === void 0 && (c = new xt(
      new Ar(2, 2),
      new Un({
        name: "BackgroundMaterial",
        uniforms: di(Ut.background.uniforms),
        vertexShader: Ut.background.vertexShader,
        fragmentShader: Ut.background.fragmentShader,
        side: In,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = b, b.matrixAutoUpdate === !0 && b.updateMatrix(), c.material.uniforms.uvTransform.value.copy(b.matrix), (h !== b || d !== b.version || m !== o.toneMapping) && (c.material.needsUpdate = !0, h = b, d = b.version, m = o.toneMapping), c.layers.enableAll(), f.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(f, _) {
    n.buffers.color.setClear(f.r, f.g, f.b, _, r);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(f, _ = 1) {
      a.set(f), l = _, p(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(f) {
      l = f, p(a, l);
    },
    render: g
  };
}
function Sd(o, e, t, n) {
  const i = o.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), r = n.isWebGL2 || s !== null, a = {}, l = f(null);
  let c = l, u = !1;
  function h(N, G, q, $, H) {
    let P = !1;
    if (r) {
      const O = p($, q, G);
      c !== O && (c = O, m(c.object)), P = _(N, $, q, H), P && w(N, $, q, H);
    } else {
      const O = G.wireframe === !0;
      (c.geometry !== $.id || c.program !== q.id || c.wireframe !== O) && (c.geometry = $.id, c.program = q.id, c.wireframe = O, P = !0);
    }
    H !== null && t.update(H, 34963), (P || u) && (u = !1, x(N, G, q, $), H !== null && o.bindBuffer(34963, t.get(H).buffer));
  }
  function d() {
    return n.isWebGL2 ? o.createVertexArray() : s.createVertexArrayOES();
  }
  function m(N) {
    return n.isWebGL2 ? o.bindVertexArray(N) : s.bindVertexArrayOES(N);
  }
  function g(N) {
    return n.isWebGL2 ? o.deleteVertexArray(N) : s.deleteVertexArrayOES(N);
  }
  function p(N, G, q) {
    const $ = q.wireframe === !0;
    let H = a[N.id];
    H === void 0 && (H = {}, a[N.id] = H);
    let P = H[G.id];
    P === void 0 && (P = {}, H[G.id] = P);
    let O = P[$];
    return O === void 0 && (O = f(d()), P[$] = O), O;
  }
  function f(N) {
    const G = [], q = [], $ = [];
    for (let H = 0; H < i; H++)
      G[H] = 0, q[H] = 0, $[H] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: G,
      enabledAttributes: q,
      attributeDivisors: $,
      object: N,
      attributes: {},
      index: null
    };
  }
  function _(N, G, q, $) {
    const H = c.attributes, P = G.attributes;
    let O = 0;
    const te = q.getAttributes();
    for (const Y in te)
      if (te[Y].location >= 0) {
        const oe = H[Y];
        let ve = P[Y];
        if (ve === void 0 && (Y === "instanceMatrix" && N.instanceMatrix && (ve = N.instanceMatrix), Y === "instanceColor" && N.instanceColor && (ve = N.instanceColor)), oe === void 0 || oe.attribute !== ve || ve && oe.data !== ve.data)
          return !0;
        O++;
      }
    return c.attributesNum !== O || c.index !== $;
  }
  function w(N, G, q, $) {
    const H = {}, P = G.attributes;
    let O = 0;
    const te = q.getAttributes();
    for (const Y in te)
      if (te[Y].location >= 0) {
        let oe = P[Y];
        oe === void 0 && (Y === "instanceMatrix" && N.instanceMatrix && (oe = N.instanceMatrix), Y === "instanceColor" && N.instanceColor && (oe = N.instanceColor));
        const ve = {};
        ve.attribute = oe, oe && oe.data && (ve.data = oe.data), H[Y] = ve, O++;
      }
    c.attributes = H, c.attributesNum = O, c.index = $;
  }
  function b() {
    const N = c.newAttributes;
    for (let G = 0, q = N.length; G < q; G++)
      N[G] = 0;
  }
  function v(N) {
    T(N, 0);
  }
  function T(N, G) {
    const q = c.newAttributes, $ = c.enabledAttributes, H = c.attributeDivisors;
    q[N] = 1, $[N] === 0 && (o.enableVertexAttribArray(N), $[N] = 1), H[N] !== G && ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](N, G), H[N] = G);
  }
  function A() {
    const N = c.newAttributes, G = c.enabledAttributes;
    for (let q = 0, $ = G.length; q < $; q++)
      G[q] !== N[q] && (o.disableVertexAttribArray(q), G[q] = 0);
  }
  function D(N, G, q, $, H, P) {
    n.isWebGL2 === !0 && (q === 5124 || q === 5125) ? o.vertexAttribIPointer(N, G, q, H, P) : o.vertexAttribPointer(N, G, q, $, H, P);
  }
  function x(N, G, q, $) {
    if (n.isWebGL2 === !1 && (N.isInstancedMesh || $.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    b();
    const H = $.attributes, P = q.getAttributes(), O = G.defaultAttributeValues;
    for (const te in P) {
      const Y = P[te];
      if (Y.location >= 0) {
        let ne = H[te];
        if (ne === void 0 && (te === "instanceMatrix" && N.instanceMatrix && (ne = N.instanceMatrix), te === "instanceColor" && N.instanceColor && (ne = N.instanceColor)), ne !== void 0) {
          const oe = ne.normalized, ve = ne.itemSize, X = t.get(ne);
          if (X === void 0)
            continue;
          const Ue = X.buffer, ge = X.type, Me = X.bytesPerElement;
          if (ne.isInterleavedBufferAttribute) {
            const ae = ne.data, Ge = ae.stride, Ee = ne.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let pe = 0; pe < Y.locationSize; pe++)
                T(Y.location + pe, ae.meshPerAttribute);
              N.isInstancedMesh !== !0 && $._maxInstanceCount === void 0 && ($._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let pe = 0; pe < Y.locationSize; pe++)
                v(Y.location + pe);
            o.bindBuffer(34962, Ue);
            for (let pe = 0; pe < Y.locationSize; pe++)
              D(
                Y.location + pe,
                ve / Y.locationSize,
                ge,
                oe,
                Ge * Me,
                (Ee + ve / Y.locationSize * pe) * Me
              );
          } else {
            if (ne.isInstancedBufferAttribute) {
              for (let ae = 0; ae < Y.locationSize; ae++)
                T(Y.location + ae, ne.meshPerAttribute);
              N.isInstancedMesh !== !0 && $._maxInstanceCount === void 0 && ($._maxInstanceCount = ne.meshPerAttribute * ne.count);
            } else
              for (let ae = 0; ae < Y.locationSize; ae++)
                v(Y.location + ae);
            o.bindBuffer(34962, Ue);
            for (let ae = 0; ae < Y.locationSize; ae++)
              D(
                Y.location + ae,
                ve / Y.locationSize,
                ge,
                oe,
                ve * Me,
                ve / Y.locationSize * ae * Me
              );
          }
        } else if (O !== void 0) {
          const oe = O[te];
          if (oe !== void 0)
            switch (oe.length) {
              case 2:
                o.vertexAttrib2fv(Y.location, oe);
                break;
              case 3:
                o.vertexAttrib3fv(Y.location, oe);
                break;
              case 4:
                o.vertexAttrib4fv(Y.location, oe);
                break;
              default:
                o.vertexAttrib1fv(Y.location, oe);
            }
        }
      }
    }
    A();
  }
  function E() {
    J();
    for (const N in a) {
      const G = a[N];
      for (const q in G) {
        const $ = G[q];
        for (const H in $)
          g($[H].object), delete $[H];
        delete G[q];
      }
      delete a[N];
    }
  }
  function F(N) {
    if (a[N.id] === void 0)
      return;
    const G = a[N.id];
    for (const q in G) {
      const $ = G[q];
      for (const H in $)
        g($[H].object), delete $[H];
      delete G[q];
    }
    delete a[N.id];
  }
  function j(N) {
    for (const G in a) {
      const q = a[G];
      if (q[N.id] === void 0)
        continue;
      const $ = q[N.id];
      for (const H in $)
        g($[H].object), delete $[H];
      delete q[N.id];
    }
  }
  function J() {
    U(), u = !0, c !== l && (c = l, m(c.object));
  }
  function U() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: h,
    reset: J,
    resetDefaultState: U,
    dispose: E,
    releaseStatesOfGeometry: F,
    releaseStatesOfProgram: j,
    initAttributes: b,
    enableAttribute: v,
    disableUnusedAttributes: A
  };
}
function wd(o, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function r(c) {
    s = c;
  }
  function a(c, u) {
    o.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, h) {
    if (h === 0)
      return;
    let d, m;
    if (i)
      d = o, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](s, c, u, h), t.update(u, s, h);
  }
  this.setMode = r, this.render = a, this.renderInstances = l;
}
function Td(o, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const D = e.get("EXT_texture_filter_anisotropic");
      n = o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(D) {
    if (D === "highp") {
      if (o.getShaderPrecisionFormat(35633, 36338).precision > 0 && o.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      D = "mediump";
    }
    return D === "mediump" && o.getShaderPrecisionFormat(35633, 36337).precision > 0 && o.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const r = typeof WebGL2RenderingContext < "u" && o instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && o instanceof WebGL2ComputeRenderingContext;
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = r || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = o.getParameter(34930), d = o.getParameter(35660), m = o.getParameter(3379), g = o.getParameter(34076), p = o.getParameter(34921), f = o.getParameter(36347), _ = o.getParameter(36348), w = o.getParameter(36349), b = d > 0, v = r || e.has("OES_texture_float"), T = b && v, A = r ? o.getParameter(36183) : 0;
  return {
    isWebGL2: r,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: _,
    maxFragmentUniforms: w,
    vertexTextures: b,
    floatFragmentTextures: v,
    floatVertexTextures: T,
    maxSamples: A
  };
}
function Ed(o) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const r = new Sn(), a = new Tt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d, m) {
    const g = h.length !== 0 || d || n !== 0 || i;
    return i = d, t = u(h, m, 0), n = h.length, g;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1, c();
  }, this.setState = function(h, d, m) {
    const g = h.clippingPlanes, p = h.clipIntersection, f = h.clipShadows, _ = o.get(h);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? u(null) : c();
    else {
      const w = s ? 0 : n, b = w * 4;
      let v = _.clippingState || null;
      l.value = v, v = u(g, d, b, m);
      for (let T = 0; T !== b; ++T)
        v[T] = t[T];
      _.clippingState = v, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += w;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, d, m, g) {
    const p = h !== null ? h.length : 0;
    let f = null;
    if (p !== 0) {
      if (f = l.value, g !== !0 || f === null) {
        const _ = m + p * 4, w = d.matrixWorldInverse;
        a.getNormalMatrix(w), (f === null || f.length < _) && (f = new Float32Array(_));
        for (let b = 0, v = m; b !== p; ++b, v += 4)
          r.copy(h[b]).applyMatrix4(w, a), r.normal.toArray(f, v), f[v + 3] = r.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, f;
  }
}
function Ad(o) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, a) {
    return a === ur ? r.mapping = oi : a === hr && (r.mapping = li), r;
  }
  function n(r) {
    if (r && r.isTexture && r.isRenderTargetTexture === !1) {
      const a = r.mapping;
      if (a === ur || a === hr)
        if (e.has(r)) {
          const l = e.get(r).texture;
          return t(l, r.mapping);
        } else {
          const l = r.image;
          if (l && l.height > 0) {
            const c = new kc(l.height / 2);
            return c.fromEquirectangularTexture(o, r), e.set(r, c), r.addEventListener("dispose", i), t(c.texture, r.mapping);
          } else
            return null;
        }
    }
    return r;
  }
  function i(r) {
    const a = r.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Cr extends qo {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, r = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = r, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, r) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, r = n + e, a = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, r = s + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, r, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const si = 4, Ca = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], En = 20, tr = /* @__PURE__ */ new Cr(), La = /* @__PURE__ */ new ye();
let nr = null;
const wn = (1 + Math.sqrt(5)) / 2, ni = 1 / wn, Ra = [
  /* @__PURE__ */ new L(1, 1, 1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(0, wn, ni),
  /* @__PURE__ */ new L(0, wn, -ni),
  /* @__PURE__ */ new L(ni, 0, wn),
  /* @__PURE__ */ new L(-ni, 0, wn),
  /* @__PURE__ */ new L(wn, ni, 0),
  /* @__PURE__ */ new L(-wn, ni, 0)
];
class Da {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    nr = this._renderer.getRenderTarget(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Na(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ia(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(nr), e.scissorTest = !1, hs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === oi || e.mapping === li ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), nr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: ft,
      minFilter: ft,
      generateMipmaps: !1,
      type: Oi,
      format: wt,
      encoding: Fn,
      depthBuffer: !1
    }, i = Pa(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Pa(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Cd(s)), this._blurMaterial = Ld(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new xt(this._lodPlanes[0], e);
    this._renderer.compile(t, tr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new ut(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, d = u.toneMapping;
    u.getClearColor(La), u.toneMapping = en, u.autoClear = !1;
    const m = new pn({
      name: "PMREM.Background",
      side: Et,
      depthWrite: !1,
      depthTest: !1
    }), g = new xt(new xi(), m);
    let p = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f), e.background = null, p = !0) : (m.color.copy(La), p = !0);
    for (let _ = 0; _ < 6; _++) {
      const w = _ % 3;
      w === 0 ? (a.up.set(0, l[_], 0), a.lookAt(c[_], 0, 0)) : w === 1 ? (a.up.set(0, 0, l[_]), a.lookAt(0, c[_], 0)) : (a.up.set(0, l[_], 0), a.lookAt(0, 0, c[_]));
      const b = this._cubeSize;
      hs(i, w * b, _ > 2 ? b : 0, b, b), u.setRenderTarget(i), p && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === oi || e.mapping === li;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Na()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ia());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, r = new xt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    hs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(r, tr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), r = Ra[(i - 1) % Ra.length];
      this._blur(e, i - 1, i, s, r);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const r = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      r,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      r,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, r, a) {
    const l = this._renderer, c = this._blurMaterial;
    r !== "latitudinal" && r !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new xt(this._lodPlanes[i], c), d = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * En - 1), p = s / g, f = isFinite(s) ? 1 + Math.floor(u * p) : En;
    f > En && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`);
    const _ = [];
    let w = 0;
    for (let D = 0; D < En; ++D) {
      const x = D / p, E = Math.exp(-x * x / 2);
      _.push(E), D === 0 ? w += E : D < f && (w += 2 * E);
    }
    for (let D = 0; D < _.length; D++)
      _[D] = _[D] / w;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = _, d.latitudinal.value = r === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: b } = this;
    d.dTheta.value = g, d.mipInt.value = b - n;
    const v = this._sizeLods[i], T = 3 * v * (i > b - si ? i - b + si : 0), A = 4 * (this._cubeSize - v);
    hs(t, T, A, 3 * v, 2 * v), l.setRenderTarget(t), l.render(h, tr);
  }
}
function Cd(o) {
  const e = [], t = [], n = [];
  let i = o;
  const s = o - si + 1 + Ca.length;
  for (let r = 0; r < s; r++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    r > o - si ? l = Ca[r - o + si - 1] : r === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, h = 1 + c, d = [u, u, h, u, h, h, u, u, h, h, u, h], m = 6, g = 6, p = 3, f = 2, _ = 1, w = new Float32Array(p * g * m), b = new Float32Array(f * g * m), v = new Float32Array(_ * g * m);
    for (let A = 0; A < m; A++) {
      const D = A % 3 * 2 / 3 - 1, x = A > 2 ? 0 : -1, E = [
        D,
        x,
        0,
        D + 2 / 3,
        x,
        0,
        D + 2 / 3,
        x + 1,
        0,
        D,
        x,
        0,
        D + 2 / 3,
        x + 1,
        0,
        D,
        x + 1,
        0
      ];
      w.set(E, p * g * A), b.set(d, f * g * A);
      const F = [A, A, A, A, A, A];
      v.set(F, _ * g * A);
    }
    const T = new Bt();
    T.setAttribute("position", new pt(w, p)), T.setAttribute("uv", new pt(b, f)), T.setAttribute("faceIndex", new pt(v, _)), e.push(T), i > si && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Pa(o, e, t) {
  const n = new On(o, e, t);
  return n.texture.mapping = bs, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function hs(o, e, t, n, i) {
  o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
}
function Ld(o, e, t) {
  const n = new Float32Array(En), i = new L(0, 1, 0);
  return new Un({
    name: "SphericalGaussianBlur",
    defines: {
      n: En,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${o}.0`
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
    vertexShader: Lr(),
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
    blending: mn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ia() {
  return new Un({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Lr(),
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
    blending: mn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Na() {
  return new Un({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Lr(),
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
    blending: mn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Lr() {
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
function Rd(o) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === ur || l === hr, u = l === oi || l === li;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let h = e.get(a);
          return t === null && (t = new Da(o)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), e.set(a, h), h.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const h = a.image;
            if (c && h && h.height > 0 || u && h && i(h)) {
              t === null && (t = new Da(o));
              const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
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
    for (let u = 0; u < c; u++)
      a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: r
  };
}
function Dd(o) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = o.getExtension("WEBGL_depth_texture") || o.getExtension("MOZ_WEBGL_depth_texture") || o.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = o.getExtension("EXT_texture_filter_anisotropic") || o.getExtension("MOZ_EXT_texture_filter_anisotropic") || o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = o.getExtension("WEBGL_compressed_texture_s3tc") || o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = o.getExtension("WEBGL_compressed_texture_pvrtc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = o.getExtension(n);
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
function Pd(o, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function r(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    d.removeEventListener("dispose", r), delete i[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(h, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", r), i[d.id] = !0, t.memory.geometries++), d;
  }
  function l(h) {
    const d = h.attributes;
    for (const g in d)
      e.update(d[g], 34962);
    const m = h.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let f = 0, _ = p.length; f < _; f++)
        e.update(p[f], 34962);
    }
  }
  function c(h) {
    const d = [], m = h.index, g = h.attributes.position;
    let p = 0;
    if (m !== null) {
      const w = m.array;
      p = m.version;
      for (let b = 0, v = w.length; b < v; b += 3) {
        const T = w[b + 0], A = w[b + 1], D = w[b + 2];
        d.push(T, A, A, D, D, T);
      }
    } else {
      const w = g.array;
      p = g.version;
      for (let b = 0, v = w.length / 3 - 1; b < v; b += 3) {
        const T = b + 0, A = b + 1, D = b + 2;
        d.push(T, A, A, D, D, T);
      }
    }
    const f = new (zo(d) ? Xo : Wo)(d, 1);
    f.version = p;
    const _ = s.get(h);
    _ && e.remove(_), s.set(h, f);
  }
  function u(h) {
    const d = s.get(h);
    if (d) {
      const m = h.index;
      m !== null && d.version < m.version && c(h);
    } else
      c(h);
    return s.get(h);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: u
  };
}
function Id(o, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function r(d) {
    s = d;
  }
  let a, l;
  function c(d) {
    a = d.type, l = d.bytesPerElement;
  }
  function u(d, m) {
    o.drawElements(s, m, a, d * l), t.update(m, s, 1);
  }
  function h(d, m, g) {
    if (g === 0)
      return;
    let p, f;
    if (i)
      p = o, f = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[f](s, m, a, d * l, g), t.update(m, s, g);
  }
  this.setMode = r, this.setIndex = c, this.render = u, this.renderInstances = h;
}
function Nd(o) {
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
  function n(s, r, a) {
    switch (t.calls++, r) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", r);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
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
function Fd(o, e) {
  return o[0] - e[0];
}
function Od(o, e) {
  return Math.abs(e[1]) - Math.abs(o[1]);
}
function Ud(o, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), r = new ke(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, u, h, d) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, p = g !== void 0 ? g.length : 0;
      let f = s.get(u);
      if (f === void 0 || f.count !== p) {
        let G = function() {
          U.dispose(), s.delete(u), u.removeEventListener("dispose", G);
        };
        f !== void 0 && f.texture.dispose();
        const b = u.morphAttributes.position !== void 0, v = u.morphAttributes.normal !== void 0, T = u.morphAttributes.color !== void 0, A = u.morphAttributes.position || [], D = u.morphAttributes.normal || [], x = u.morphAttributes.color || [];
        let E = 0;
        b === !0 && (E = 1), v === !0 && (E = 2), T === !0 && (E = 3);
        let F = u.attributes.position.count * E, j = 1;
        F > e.maxTextureSize && (j = Math.ceil(F / e.maxTextureSize), F = e.maxTextureSize);
        const J = new Float32Array(F * j * 4 * p), U = new Vo(J, F, j, p);
        U.type = fn, U.needsUpdate = !0;
        const N = E * 4;
        for (let q = 0; q < p; q++) {
          const $ = A[q], H = D[q], P = x[q], O = F * j * 4 * q;
          for (let te = 0; te < $.count; te++) {
            const Y = te * N;
            b === !0 && (r.fromBufferAttribute($, te), J[O + Y + 0] = r.x, J[O + Y + 1] = r.y, J[O + Y + 2] = r.z, J[O + Y + 3] = 0), v === !0 && (r.fromBufferAttribute(H, te), J[O + Y + 4] = r.x, J[O + Y + 5] = r.y, J[O + Y + 6] = r.z, J[O + Y + 7] = 0), T === !0 && (r.fromBufferAttribute(P, te), J[O + Y + 8] = r.x, J[O + Y + 9] = r.y, J[O + Y + 10] = r.z, J[O + Y + 11] = P.itemSize === 4 ? r.w : 1);
          }
        }
        f = {
          count: p,
          texture: U,
          size: new Re(F, j)
        }, s.set(u, f), u.addEventListener("dispose", G);
      }
      let _ = 0;
      for (let b = 0; b < m.length; b++)
        _ += m[b];
      const w = u.morphTargetsRelative ? 1 : 1 - _;
      d.getUniforms().setValue(o, "morphTargetBaseInfluence", w), d.getUniforms().setValue(o, "morphTargetInfluences", m), d.getUniforms().setValue(o, "morphTargetsTexture", f.texture, t), d.getUniforms().setValue(o, "morphTargetsTextureSize", f.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let p = n[u.id];
      if (p === void 0 || p.length !== g) {
        p = [];
        for (let v = 0; v < g; v++)
          p[v] = [v, 0];
        n[u.id] = p;
      }
      for (let v = 0; v < g; v++) {
        const T = p[v];
        T[0] = v, T[1] = m[v];
      }
      p.sort(Od);
      for (let v = 0; v < 8; v++)
        v < g && p[v][1] ? (a[v][0] = p[v][0], a[v][1] = p[v][1]) : (a[v][0] = Number.MAX_SAFE_INTEGER, a[v][1] = 0);
      a.sort(Fd);
      const f = u.morphAttributes.position, _ = u.morphAttributes.normal;
      let w = 0;
      for (let v = 0; v < 8; v++) {
        const T = a[v], A = T[0], D = T[1];
        A !== Number.MAX_SAFE_INTEGER && D ? (f && u.getAttribute("morphTarget" + v) !== f[A] && u.setAttribute("morphTarget" + v, f[A]), _ && u.getAttribute("morphNormal" + v) !== _[A] && u.setAttribute("morphNormal" + v, _[A]), i[v] = D, w += D) : (f && u.hasAttribute("morphTarget" + v) === !0 && u.deleteAttribute("morphTarget" + v), _ && u.hasAttribute("morphNormal" + v) === !0 && u.deleteAttribute("morphNormal" + v), i[v] = 0);
      }
      const b = u.morphTargetsRelative ? 1 : 1 - w;
      d.getUniforms().setValue(o, "morphTargetBaseInfluence", b), d.getUniforms().setValue(o, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function zd(o, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, h = e.get(l, u);
    return i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), h;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: r
  };
}
const Ko = /* @__PURE__ */ new ht(), Zo = /* @__PURE__ */ new Vo(), $o = /* @__PURE__ */ new wc(), Jo = /* @__PURE__ */ new jo(), Fa = [], Oa = [], Ua = new Float32Array(16), za = new Float32Array(9), Ba = new Float32Array(4);
function vi(o, e, t) {
  const n = o[0];
  if (n <= 0 || n > 0)
    return o;
  const i = e * t;
  let s = Fa[i];
  if (s === void 0 && (s = new Float32Array(i), Fa[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let r = 1, a = 0; r !== e; ++r)
      a += t, o[r].toArray(s, a);
  }
  return s;
}
function Ke(o, e) {
  if (o.length !== e.length)
    return !1;
  for (let t = 0, n = o.length; t < n; t++)
    if (o[t] !== e[t])
      return !1;
  return !0;
}
function Ze(o, e) {
  for (let t = 0, n = e.length; t < n; t++)
    o[t] = e[t];
}
function Ss(o, e) {
  let t = Oa[e];
  t === void 0 && (t = new Int32Array(e), Oa[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = o.allocateTextureUnit();
  return t;
}
function Bd(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1f(this.addr, e), t[0] = e);
}
function kd(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ke(t, e))
      return;
    o.uniform2fv(this.addr, e), Ze(t, e);
  }
}
function Gd(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (o.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Ke(t, e))
      return;
    o.uniform3fv(this.addr, e), Ze(t, e);
  }
}
function Vd(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ke(t, e))
      return;
    o.uniform4fv(this.addr, e), Ze(t, e);
  }
}
function Hd(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ke(t, e))
      return;
    o.uniformMatrix2fv(this.addr, !1, e), Ze(t, e);
  } else {
    if (Ke(t, n))
      return;
    Ba.set(n), o.uniformMatrix2fv(this.addr, !1, Ba), Ze(t, n);
  }
}
function Wd(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ke(t, e))
      return;
    o.uniformMatrix3fv(this.addr, !1, e), Ze(t, e);
  } else {
    if (Ke(t, n))
      return;
    za.set(n), o.uniformMatrix3fv(this.addr, !1, za), Ze(t, n);
  }
}
function Xd(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ke(t, e))
      return;
    o.uniformMatrix4fv(this.addr, !1, e), Ze(t, e);
  } else {
    if (Ke(t, n))
      return;
    Ua.set(n), o.uniformMatrix4fv(this.addr, !1, Ua), Ze(t, n);
  }
}
function qd(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1i(this.addr, e), t[0] = e);
}
function jd(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ke(t, e))
      return;
    o.uniform2iv(this.addr, e), Ze(t, e);
  }
}
function Yd(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ke(t, e))
      return;
    o.uniform3iv(this.addr, e), Ze(t, e);
  }
}
function Kd(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ke(t, e))
      return;
    o.uniform4iv(this.addr, e), Ze(t, e);
  }
}
function Zd(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1ui(this.addr, e), t[0] = e);
}
function $d(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ke(t, e))
      return;
    o.uniform2uiv(this.addr, e), Ze(t, e);
  }
}
function Jd(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ke(t, e))
      return;
    o.uniform3uiv(this.addr, e), Ze(t, e);
  }
}
function Qd(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ke(t, e))
      return;
    o.uniform4uiv(this.addr, e), Ze(t, e);
  }
}
function ef(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Ko, i);
}
function tf(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || $o, i);
}
function nf(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Jo, i);
}
function sf(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Zo, i);
}
function rf(o) {
  switch (o) {
    case 5126:
      return Bd;
    case 35664:
      return kd;
    case 35665:
      return Gd;
    case 35666:
      return Vd;
    case 35674:
      return Hd;
    case 35675:
      return Wd;
    case 35676:
      return Xd;
    case 5124:
    case 35670:
      return qd;
    case 35667:
    case 35671:
      return jd;
    case 35668:
    case 35672:
      return Yd;
    case 35669:
    case 35673:
      return Kd;
    case 5125:
      return Zd;
    case 36294:
      return $d;
    case 36295:
      return Jd;
    case 36296:
      return Qd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ef;
    case 35679:
    case 36299:
    case 36307:
      return tf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return nf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return sf;
  }
}
function af(o, e) {
  o.uniform1fv(this.addr, e);
}
function of(o, e) {
  const t = vi(e, this.size, 2);
  o.uniform2fv(this.addr, t);
}
function lf(o, e) {
  const t = vi(e, this.size, 3);
  o.uniform3fv(this.addr, t);
}
function cf(o, e) {
  const t = vi(e, this.size, 4);
  o.uniform4fv(this.addr, t);
}
function uf(o, e) {
  const t = vi(e, this.size, 4);
  o.uniformMatrix2fv(this.addr, !1, t);
}
function hf(o, e) {
  const t = vi(e, this.size, 9);
  o.uniformMatrix3fv(this.addr, !1, t);
}
function df(o, e) {
  const t = vi(e, this.size, 16);
  o.uniformMatrix4fv(this.addr, !1, t);
}
function ff(o, e) {
  o.uniform1iv(this.addr, e);
}
function pf(o, e) {
  o.uniform2iv(this.addr, e);
}
function mf(o, e) {
  o.uniform3iv(this.addr, e);
}
function gf(o, e) {
  o.uniform4iv(this.addr, e);
}
function _f(o, e) {
  o.uniform1uiv(this.addr, e);
}
function xf(o, e) {
  o.uniform2uiv(this.addr, e);
}
function vf(o, e) {
  o.uniform3uiv(this.addr, e);
}
function Mf(o, e) {
  o.uniform4uiv(this.addr, e);
}
function yf(o, e, t) {
  const n = this.cache, i = e.length, s = Ss(t, i);
  Ke(n, s) || (o.uniform1iv(this.addr, s), Ze(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2D(e[r] || Ko, s[r]);
}
function bf(o, e, t) {
  const n = this.cache, i = e.length, s = Ss(t, i);
  Ke(n, s) || (o.uniform1iv(this.addr, s), Ze(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture3D(e[r] || $o, s[r]);
}
function Sf(o, e, t) {
  const n = this.cache, i = e.length, s = Ss(t, i);
  Ke(n, s) || (o.uniform1iv(this.addr, s), Ze(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTextureCube(e[r] || Jo, s[r]);
}
function wf(o, e, t) {
  const n = this.cache, i = e.length, s = Ss(t, i);
  Ke(n, s) || (o.uniform1iv(this.addr, s), Ze(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2DArray(e[r] || Zo, s[r]);
}
function Tf(o) {
  switch (o) {
    case 5126:
      return af;
    case 35664:
      return of;
    case 35665:
      return lf;
    case 35666:
      return cf;
    case 35674:
      return uf;
    case 35675:
      return hf;
    case 35676:
      return df;
    case 5124:
    case 35670:
      return ff;
    case 35667:
    case 35671:
      return pf;
    case 35668:
    case 35672:
      return mf;
    case 35669:
    case 35673:
      return gf;
    case 5125:
      return _f;
    case 36294:
      return xf;
    case 36295:
      return vf;
    case 36296:
      return Mf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return yf;
    case 35679:
    case 36299:
    case 36307:
      return bf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Sf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wf;
  }
}
class Ef {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = rf(t.type);
  }
}
class Af {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Tf(t.type);
  }
}
class Cf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, r = i.length; s !== r; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const ir = /(\w+)(\])?(\[|\.)?/g;
function ka(o, e) {
  o.seq.push(e), o.map[e.id] = e;
}
function Lf(o, e, t) {
  const n = o.name, i = n.length;
  for (ir.lastIndex = 0; ; ) {
    const s = ir.exec(n), r = ir.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && r + 2 === i) {
      ka(t, c === void 0 ? new Ef(a, o, e) : new Af(a, o, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && (h = new Cf(a), ka(t, h)), t = h;
    }
  }
}
class xs {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), r = e.getUniformLocation(t, s.name);
      Lf(s, r, this);
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
    for (let s = 0, r = t.length; s !== r; ++s) {
      const a = t[s], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const r = e[i];
      r.id in t && n.push(r);
    }
    return n;
  }
}
function Ga(o, e, t) {
  const n = o.createShader(e);
  return o.shaderSource(n, t), o.compileShader(n), n;
}
let Rf = 0;
function Df(o, e) {
  const t = o.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let r = i; r < s; r++) {
    const a = r + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[r]}`);
  }
  return n.join(`
`);
}
function Pf(o) {
  switch (o) {
    case Fn:
      return ["Linear", "( value )"];
    case Fe:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", o), ["Linear", "( value )"];
  }
}
function Va(o, e, t) {
  const n = o.getShaderParameter(e, 35713), i = o.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const r = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Df(o.getShaderSource(e), r);
  } else
    return i;
}
function If(o, e) {
  const t = Pf(e);
  return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Nf(o, e) {
  let t;
  switch (e) {
    case zl:
      t = "Linear";
      break;
    case Bl:
      t = "Reinhard";
      break;
    case kl:
      t = "OptimizedCineon";
      break;
    case Po:
      t = "ACESFilmic";
      break;
    case Gl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Ff(o) {
  return [
    o.extensionDerivatives || !!o.envMapCubeUVHeight || o.bumpMap || o.tangentSpaceNormalMap || o.clearcoatNormalMap || o.flatShading || o.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (o.extensionFragDepth || o.logarithmicDepthBuffer) && o.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    o.extensionDrawBuffers && o.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (o.extensionShaderTextureLOD || o.envMap || o.transmission) && o.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Ii).join(`
`);
}
function Of(o) {
  const e = [];
  for (const t in o) {
    const n = o[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Uf(o, e) {
  const t = {}, n = o.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = o.getActiveAttrib(e, i), r = s.name;
    let a = 1;
    s.type === 35674 && (a = 2), s.type === 35675 && (a = 3), s.type === 35676 && (a = 4), t[r] = {
      type: s.type,
      location: o.getAttribLocation(e, r),
      locationSize: a
    };
  }
  return t;
}
function Ii(o) {
  return o !== "";
}
function Ha(o, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return o.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Wa(o, e) {
  return o.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const zf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function _r(o) {
  return o.replace(zf, Bf);
}
function Bf(o, e) {
  const t = Se[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return _r(t);
}
const kf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xa(o) {
  return o.replace(kf, Gf);
}
function Gf(o, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function qa(o) {
  let e = "precision " + o.precision + ` float;
precision ` + o.precision + " int;";
  return o.precision === "highp" ? e += `
#define HIGH_PRECISION` : o.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : o.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Vf(o) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return o.shadowMapType === Ao ? e = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === Co ? e = "SHADOWMAP_TYPE_PCF_SOFT" : o.shadowMapType === Pi && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Hf(o) {
  let e = "ENVMAP_TYPE_CUBE";
  if (o.envMap)
    switch (o.envMapMode) {
      case oi:
      case li:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case bs:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Wf(o) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (o.envMap)
    switch (o.envMapMode) {
      case li:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Xf(o) {
  let e = "ENVMAP_BLENDING_NONE";
  if (o.envMap)
    switch (o.combine) {
      case Do:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Ol:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Ul:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function qf(o) {
  const e = o.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function jf(o, e, t, n) {
  const i = o.getContext(), s = t.defines;
  let r = t.vertexShader, a = t.fragmentShader;
  const l = Vf(t), c = Hf(t), u = Wf(t), h = Xf(t), d = qf(t), m = t.isWebGL2 ? "" : Ff(t), g = Of(s), p = i.createProgram();
  let f, _, w = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    g
  ].filter(Ii).join(`
`), f.length > 0 && (f += `
`), _ = [
    m,
    g
  ].filter(Ii).join(`
`), _.length > 0 && (_ += `
`)) : (f = [
    qa(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
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
  ].filter(Ii).join(`
`), _ = [
    m,
    qa(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== en ? "#define TONE_MAPPING" : "",
    t.toneMapping !== en ? Se.tonemapping_pars_fragment : "",
    t.toneMapping !== en ? Nf("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Se.encodings_pars_fragment,
    If("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Ii).join(`
`)), r = _r(r), r = Ha(r, t), r = Wa(r, t), a = _r(a), a = Ha(a, t), a = Wa(a, t), r = Xa(r), a = Xa(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (w = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, _ = [
    "#define varying in",
    t.glslVersion === ga ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === ga ? "" : "#define gl_FragColor pc_fragColor",
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
` + _);
  const b = w + f + r, v = w + _ + a, T = Ga(i, 35633, b), A = Ga(i, 35632, v);
  if (i.attachShader(p, T), i.attachShader(p, A), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), o.debug.checkShaderErrors) {
    const E = i.getProgramInfoLog(p).trim(), F = i.getShaderInfoLog(T).trim(), j = i.getShaderInfoLog(A).trim();
    let J = !0, U = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      J = !1;
      const N = Va(i, T, "vertex"), G = Va(i, A, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + E + `
` + N + `
` + G
      );
    } else
      E !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", E) : (F === "" || j === "") && (U = !1);
    U && (this.diagnostics = {
      runnable: J,
      programLog: E,
      vertexShader: {
        log: F,
        prefix: f
      },
      fragmentShader: {
        log: j,
        prefix: _
      }
    });
  }
  i.deleteShader(T), i.deleteShader(A);
  let D;
  this.getUniforms = function() {
    return D === void 0 && (D = new xs(i, p)), D;
  };
  let x;
  return this.getAttributes = function() {
    return x === void 0 && (x = Uf(i, p)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = Rf++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = T, this.fragmentShader = A, this;
}
let Yf = 0;
class Kf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), r = this._getShaderCacheForMaterial(e);
    return r.has(i) === !1 && (r.add(i), i.usedTimes++), r.has(s) === !1 && (r.add(s), s.usedTimes++), this;
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
    return n === void 0 && (n = new Zf(e), t.set(e, n)), n;
  }
}
class Zf {
  constructor(e) {
    this.id = Yf++, this.code = e, this.usedTimes = 0;
  }
}
function $f(o, e, t, n, i, s, r) {
  const a = new Ho(), l = new Kf(), c = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let m = i.precision;
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
  function p(x, E, F, j, J) {
    const U = j.fog, N = J.geometry, G = x.isMeshStandardMaterial ? j.environment : null, q = (x.isMeshStandardMaterial ? t : e).get(x.envMap || G), $ = !!q && q.mapping === bs ? q.image.height : null, H = g[x.type];
    x.precision !== null && (m = i.getMaxPrecision(x.precision), m !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", m, "instead."));
    const P = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, O = P !== void 0 ? P.length : 0;
    let te = 0;
    N.morphAttributes.position !== void 0 && (te = 1), N.morphAttributes.normal !== void 0 && (te = 2), N.morphAttributes.color !== void 0 && (te = 3);
    let Y, ne, oe, ve;
    if (H) {
      const Ge = Ut[H];
      Y = Ge.vertexShader, ne = Ge.fragmentShader;
    } else
      Y = x.vertexShader, ne = x.fragmentShader, l.update(x), oe = l.getVertexShaderID(x), ve = l.getFragmentShaderID(x);
    const X = o.getRenderTarget(), Ue = x.alphaTest > 0, ge = x.clearcoat > 0, Me = x.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: H,
      shaderName: x.type,
      vertexShader: Y,
      fragmentShader: ne,
      defines: x.defines,
      customVertexShaderID: oe,
      customFragmentShaderID: ve,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: J.isInstancedMesh === !0,
      instancingColor: J.isInstancedMesh === !0 && J.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: X === null ? o.outputEncoding : X.isXRRenderTarget === !0 ? X.texture.encoding : Fn,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!q,
      envMapMode: q && q.mapping,
      envMapCubeUVHeight: $,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === oc,
      tangentSpaceNormalMap: x.normalMapType === Sr,
      decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === Fe,
      clearcoat: ge,
      clearcoatMap: ge && !!x.clearcoatMap,
      clearcoatRoughnessMap: ge && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: ge && !!x.clearcoatNormalMap,
      iridescence: Me,
      iridescenceMap: Me && !!x.iridescenceMap,
      iridescenceThicknessMap: Me && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === ri,
      alphaMap: !!x.alphaMap,
      alphaTest: Ue,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!N.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
      vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap,
      uvsVertexOnly: !(!!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || x.transmission > 0 || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || x.sheen > 0 || !!x.sheenColorMap || !!x.sheenRoughnessMap) && !!x.displacementMap,
      fog: !!U,
      useFog: x.fog === !0,
      fogExp2: U && U.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: h,
      skinning: J.isSkinnedMesh === !0,
      morphTargets: N.morphAttributes.position !== void 0,
      morphNormals: N.morphAttributes.normal !== void 0,
      morphColors: N.morphAttributes.color !== void 0,
      morphTargetsCount: O,
      morphTextureStride: te,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numClippingPlanes: r.numPlanes,
      numClipIntersection: r.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: o.shadowMap.enabled && F.length > 0,
      shadowMapType: o.shadowMap.type,
      toneMapping: x.toneMapped ? o.toneMapping : en,
      physicallyCorrectLights: o.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Jt,
      flipSided: x.side === Et,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
  }
  function f(x) {
    const E = [];
    if (x.shaderID ? E.push(x.shaderID) : (E.push(x.customVertexShaderID), E.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const F in x.defines)
        E.push(F), E.push(x.defines[F]);
    return x.isRawShaderMaterial === !1 && (_(E, x), w(E, x), E.push(o.outputEncoding)), E.push(x.customProgramCacheKey), E.join();
  }
  function _(x, E) {
    x.push(E.precision), x.push(E.outputEncoding), x.push(E.envMapMode), x.push(E.envMapCubeUVHeight), x.push(E.combine), x.push(E.vertexUvs), x.push(E.fogExp2), x.push(E.sizeAttenuation), x.push(E.morphTargetsCount), x.push(E.morphAttributeCount), x.push(E.numDirLights), x.push(E.numPointLights), x.push(E.numSpotLights), x.push(E.numSpotLightMaps), x.push(E.numHemiLights), x.push(E.numRectAreaLights), x.push(E.numDirLightShadows), x.push(E.numPointLightShadows), x.push(E.numSpotLightShadows), x.push(E.numSpotLightShadowsWithMaps), x.push(E.shadowMapType), x.push(E.toneMapping), x.push(E.numClippingPlanes), x.push(E.numClipIntersection), x.push(E.depthPacking);
  }
  function w(x, E) {
    a.disableAll(), E.isWebGL2 && a.enable(0), E.supportsVertexTextures && a.enable(1), E.instancing && a.enable(2), E.instancingColor && a.enable(3), E.map && a.enable(4), E.matcap && a.enable(5), E.envMap && a.enable(6), E.lightMap && a.enable(7), E.aoMap && a.enable(8), E.emissiveMap && a.enable(9), E.bumpMap && a.enable(10), E.normalMap && a.enable(11), E.objectSpaceNormalMap && a.enable(12), E.tangentSpaceNormalMap && a.enable(13), E.clearcoat && a.enable(14), E.clearcoatMap && a.enable(15), E.clearcoatRoughnessMap && a.enable(16), E.clearcoatNormalMap && a.enable(17), E.iridescence && a.enable(18), E.iridescenceMap && a.enable(19), E.iridescenceThicknessMap && a.enable(20), E.displacementMap && a.enable(21), E.specularMap && a.enable(22), E.roughnessMap && a.enable(23), E.metalnessMap && a.enable(24), E.gradientMap && a.enable(25), E.alphaMap && a.enable(26), E.alphaTest && a.enable(27), E.vertexColors && a.enable(28), E.vertexAlphas && a.enable(29), E.vertexUvs && a.enable(30), E.vertexTangents && a.enable(31), E.uvsVertexOnly && a.enable(32), x.push(a.mask), a.disableAll(), E.fog && a.enable(0), E.useFog && a.enable(1), E.flatShading && a.enable(2), E.logarithmicDepthBuffer && a.enable(3), E.skinning && a.enable(4), E.morphTargets && a.enable(5), E.morphNormals && a.enable(6), E.morphColors && a.enable(7), E.premultipliedAlpha && a.enable(8), E.shadowMapEnabled && a.enable(9), E.physicallyCorrectLights && a.enable(10), E.doubleSided && a.enable(11), E.flipSided && a.enable(12), E.useDepthPacking && a.enable(13), E.dithering && a.enable(14), E.specularIntensityMap && a.enable(15), E.specularColorMap && a.enable(16), E.transmission && a.enable(17), E.transmissionMap && a.enable(18), E.thicknessMap && a.enable(19), E.sheen && a.enable(20), E.sheenColorMap && a.enable(21), E.sheenRoughnessMap && a.enable(22), E.decodeVideoTexture && a.enable(23), E.opaque && a.enable(24), x.push(a.mask);
  }
  function b(x) {
    const E = g[x.type];
    let F;
    if (E) {
      const j = Ut[E];
      F = Oc.clone(j.uniforms);
    } else
      F = x.uniforms;
    return F;
  }
  function v(x, E) {
    let F;
    for (let j = 0, J = c.length; j < J; j++) {
      const U = c[j];
      if (U.cacheKey === E) {
        F = U, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new jf(o, E, x, s), c.push(F)), F;
  }
  function T(x) {
    if (--x.usedTimes === 0) {
      const E = c.indexOf(x);
      c[E] = c[c.length - 1], c.pop(), x.destroy();
    }
  }
  function A(x) {
    l.remove(x);
  }
  function D() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: b,
    acquireProgram: v,
    releaseProgram: T,
    releaseShaderCache: A,
    programs: c,
    dispose: D
  };
}
function Jf() {
  let o = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let r = o.get(s);
    return r === void 0 && (r = {}, o.set(s, r)), r;
  }
  function t(s) {
    o.delete(s);
  }
  function n(s, r, a) {
    o.get(s)[r] = a;
  }
  function i() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Qf(o, e) {
  return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.material.id !== e.material.id ? o.material.id - e.material.id : o.z !== e.z ? o.z - e.z : o.id - e.id;
}
function ja(o, e) {
  return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.z !== e.z ? e.z - o.z : o.id - e.id;
}
function Ya() {
  const o = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function r(h, d, m, g, p, f) {
    let _ = o[e];
    return _ === void 0 ? (_ = {
      id: h.id,
      object: h,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: p,
      group: f
    }, o[e] = _) : (_.id = h.id, _.object = h, _.geometry = d, _.material = m, _.groupOrder = g, _.renderOrder = h.renderOrder, _.z = p, _.group = f), e++, _;
  }
  function a(h, d, m, g, p, f) {
    const _ = r(h, d, m, g, p, f);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_);
  }
  function l(h, d, m, g, p, f) {
    const _ = r(h, d, m, g, p, f);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function c(h, d) {
    t.length > 1 && t.sort(h || Qf), n.length > 1 && n.sort(d || ja), i.length > 1 && i.sort(d || ja);
  }
  function u() {
    for (let h = e, d = o.length; h < d; h++) {
      const m = o[h];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c
  };
}
function ep() {
  let o = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = o.get(n);
    let r;
    return s === void 0 ? (r = new Ya(), o.set(n, [r])) : i >= s.length ? (r = new Ya(), s.push(r)) : r = s[i], r;
  }
  function t() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function tp() {
  const o = {};
  return {
    get: function(e) {
      if (o[e.id] !== void 0)
        return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new L(),
            color: new ye()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new ye(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new ye(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new ye(),
            groundColor: new ye()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ye(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return o[e.id] = t, t;
    }
  };
}
function np() {
  const o = {};
  return {
    get: function(e) {
      if (o[e.id] !== void 0)
        return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return o[e.id] = t, t;
    }
  };
}
let ip = 0;
function sp(o, e) {
  return (e.castShadow ? 2 : 0) - (o.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (o.map ? 1 : 0);
}
function rp(o, e) {
  const t = new tp(), n = np(), i = {
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
  for (let u = 0; u < 9; u++)
    i.probe.push(new L());
  const s = new L(), r = new Ce(), a = new Ce();
  function l(u, h) {
    let d = 0, m = 0, g = 0;
    for (let j = 0; j < 9; j++)
      i.probe[j].set(0, 0, 0);
    let p = 0, f = 0, _ = 0, w = 0, b = 0, v = 0, T = 0, A = 0, D = 0, x = 0;
    u.sort(sp);
    const E = h !== !0 ? Math.PI : 1;
    for (let j = 0, J = u.length; j < J; j++) {
      const U = u[j], N = U.color, G = U.intensity, q = U.distance, $ = U.shadow && U.shadow.map ? U.shadow.map.texture : null;
      if (U.isAmbientLight)
        d += N.r * G * E, m += N.g * G * E, g += N.b * G * E;
      else if (U.isLightProbe)
        for (let H = 0; H < 9; H++)
          i.probe[H].addScaledVector(U.sh.coefficients[H], G);
      else if (U.isDirectionalLight) {
        const H = t.get(U);
        if (H.color.copy(U.color).multiplyScalar(U.intensity * E), U.castShadow) {
          const P = U.shadow, O = n.get(U);
          O.shadowBias = P.bias, O.shadowNormalBias = P.normalBias, O.shadowRadius = P.radius, O.shadowMapSize = P.mapSize, i.directionalShadow[p] = O, i.directionalShadowMap[p] = $, i.directionalShadowMatrix[p] = U.shadow.matrix, v++;
        }
        i.directional[p] = H, p++;
      } else if (U.isSpotLight) {
        const H = t.get(U);
        H.position.setFromMatrixPosition(U.matrixWorld), H.color.copy(N).multiplyScalar(G * E), H.distance = q, H.coneCos = Math.cos(U.angle), H.penumbraCos = Math.cos(U.angle * (1 - U.penumbra)), H.decay = U.decay, i.spot[_] = H;
        const P = U.shadow;
        if (U.map && (i.spotLightMap[D] = U.map, D++, P.updateMatrices(U), U.castShadow && x++), i.spotLightMatrix[_] = P.matrix, U.castShadow) {
          const O = n.get(U);
          O.shadowBias = P.bias, O.shadowNormalBias = P.normalBias, O.shadowRadius = P.radius, O.shadowMapSize = P.mapSize, i.spotShadow[_] = O, i.spotShadowMap[_] = $, A++;
        }
        _++;
      } else if (U.isRectAreaLight) {
        const H = t.get(U);
        H.color.copy(N).multiplyScalar(G), H.halfWidth.set(U.width * 0.5, 0, 0), H.halfHeight.set(0, U.height * 0.5, 0), i.rectArea[w] = H, w++;
      } else if (U.isPointLight) {
        const H = t.get(U);
        if (H.color.copy(U.color).multiplyScalar(U.intensity * E), H.distance = U.distance, H.decay = U.decay, U.castShadow) {
          const P = U.shadow, O = n.get(U);
          O.shadowBias = P.bias, O.shadowNormalBias = P.normalBias, O.shadowRadius = P.radius, O.shadowMapSize = P.mapSize, O.shadowCameraNear = P.camera.near, O.shadowCameraFar = P.camera.far, i.pointShadow[f] = O, i.pointShadowMap[f] = $, i.pointShadowMatrix[f] = U.shadow.matrix, T++;
        }
        i.point[f] = H, f++;
      } else if (U.isHemisphereLight) {
        const H = t.get(U);
        H.skyColor.copy(U.color).multiplyScalar(G * E), H.groundColor.copy(U.groundColor).multiplyScalar(G * E), i.hemi[b] = H, b++;
      }
    }
    w > 0 && (e.isWebGL2 || o.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ee.LTC_FLOAT_1, i.rectAreaLTC2 = ee.LTC_FLOAT_2) : o.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ee.LTC_HALF_1, i.rectAreaLTC2 = ee.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const F = i.hash;
    (F.directionalLength !== p || F.pointLength !== f || F.spotLength !== _ || F.rectAreaLength !== w || F.hemiLength !== b || F.numDirectionalShadows !== v || F.numPointShadows !== T || F.numSpotShadows !== A || F.numSpotMaps !== D) && (i.directional.length = p, i.spot.length = _, i.rectArea.length = w, i.point.length = f, i.hemi.length = b, i.directionalShadow.length = v, i.directionalShadowMap.length = v, i.pointShadow.length = T, i.pointShadowMap.length = T, i.spotShadow.length = A, i.spotShadowMap.length = A, i.directionalShadowMatrix.length = v, i.pointShadowMatrix.length = T, i.spotLightMatrix.length = A + D - x, i.spotLightMap.length = D, i.numSpotLightShadowsWithMaps = x, F.directionalLength = p, F.pointLength = f, F.spotLength = _, F.rectAreaLength = w, F.hemiLength = b, F.numDirectionalShadows = v, F.numPointShadows = T, F.numSpotShadows = A, F.numSpotMaps = D, i.version = ip++);
  }
  function c(u, h) {
    let d = 0, m = 0, g = 0, p = 0, f = 0;
    const _ = h.matrixWorldInverse;
    for (let w = 0, b = u.length; w < b; w++) {
      const v = u[w];
      if (v.isDirectionalLight) {
        const T = i.directional[d];
        T.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), T.direction.sub(s), T.direction.transformDirection(_), d++;
      } else if (v.isSpotLight) {
        const T = i.spot[g];
        T.position.setFromMatrixPosition(v.matrixWorld), T.position.applyMatrix4(_), T.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), T.direction.sub(s), T.direction.transformDirection(_), g++;
      } else if (v.isRectAreaLight) {
        const T = i.rectArea[p];
        T.position.setFromMatrixPosition(v.matrixWorld), T.position.applyMatrix4(_), a.identity(), r.copy(v.matrixWorld), r.premultiply(_), a.extractRotation(r), T.halfWidth.set(v.width * 0.5, 0, 0), T.halfHeight.set(0, v.height * 0.5, 0), T.halfWidth.applyMatrix4(a), T.halfHeight.applyMatrix4(a), p++;
      } else if (v.isPointLight) {
        const T = i.point[m];
        T.position.setFromMatrixPosition(v.matrixWorld), T.position.applyMatrix4(_), m++;
      } else if (v.isHemisphereLight) {
        const T = i.hemi[f];
        T.direction.setFromMatrixPosition(v.matrixWorld), T.direction.transformDirection(_), f++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function Ka(o, e) {
  const t = new rp(o, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function r(h) {
    n.push(h);
  }
  function a(h) {
    i.push(h);
  }
  function l(h) {
    t.setup(n, h);
  }
  function c(h) {
    t.setupView(n, h);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a
  };
}
function ap(o, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, r = 0) {
    const a = t.get(s);
    let l;
    return a === void 0 ? (l = new Ka(o, e), t.set(s, [l])) : r >= a.length ? (l = new Ka(o, e), a.push(l)) : l = a[r], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class op extends zt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = rc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class lp extends zt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new L(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const cp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, up = `uniform sampler2D shadow_pass;
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
function hp(o, e, t) {
  let n = new Er();
  const i = new Re(), s = new Re(), r = new ke(), a = new op({ depthPacking: ac }), l = new lp(), c = {}, u = t.maxTextureSize, h = { 0: Et, 1: In, 2: Jt }, d = new Un({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Re() },
      radius: { value: 4 }
    },
    vertexShader: cp,
    fragmentShader: up
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Bt();
  g.setAttribute(
    "position",
    new pt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new xt(g, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ao, this.render = function(v, T, A) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || v.length === 0)
      return;
    const D = o.getRenderTarget(), x = o.getActiveCubeFace(), E = o.getActiveMipmapLevel(), F = o.state;
    F.setBlending(mn), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    for (let j = 0, J = v.length; j < J; j++) {
      const U = v[j], N = U.shadow;
      if (N === void 0) {
        console.warn("THREE.WebGLShadowMap:", U, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === !1 && N.needsUpdate === !1)
        continue;
      i.copy(N.mapSize);
      const G = N.getFrameExtents();
      if (i.multiply(G), s.copy(N.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / G.x), i.x = s.x * G.x, N.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / G.y), i.y = s.y * G.y, N.mapSize.y = s.y)), N.map === null) {
        const $ = this.type !== Pi ? { minFilter: nt, magFilter: nt } : {};
        N.map = new On(i.x, i.y, $), N.map.texture.name = U.name + ".shadowMap", N.camera.updateProjectionMatrix();
      }
      o.setRenderTarget(N.map), o.clear();
      const q = N.getViewportCount();
      for (let $ = 0; $ < q; $++) {
        const H = N.getViewport($);
        r.set(
          s.x * H.x,
          s.y * H.y,
          s.x * H.z,
          s.y * H.w
        ), F.viewport(r), N.updateMatrices(U, $), n = N.getFrustum(), b(T, A, N.camera, U, this.type);
      }
      N.isPointLightShadow !== !0 && this.type === Pi && _(N, A), N.needsUpdate = !1;
    }
    f.needsUpdate = !1, o.setRenderTarget(D, x, E);
  };
  function _(v, T) {
    const A = e.update(p);
    d.defines.VSM_SAMPLES !== v.blurSamples && (d.defines.VSM_SAMPLES = v.blurSamples, m.defines.VSM_SAMPLES = v.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), v.mapPass === null && (v.mapPass = new On(i.x, i.y)), d.uniforms.shadow_pass.value = v.map.texture, d.uniforms.resolution.value = v.mapSize, d.uniforms.radius.value = v.radius, o.setRenderTarget(v.mapPass), o.clear(), o.renderBufferDirect(T, null, A, d, p, null), m.uniforms.shadow_pass.value = v.mapPass.texture, m.uniforms.resolution.value = v.mapSize, m.uniforms.radius.value = v.radius, o.setRenderTarget(v.map), o.clear(), o.renderBufferDirect(T, null, A, m, p, null);
  }
  function w(v, T, A, D, x, E) {
    let F = null;
    const j = A.isPointLight === !0 ? v.customDistanceMaterial : v.customDepthMaterial;
    if (j !== void 0 ? F = j : F = A.isPointLight === !0 ? l : a, o.localClippingEnabled && T.clipShadows === !0 && Array.isArray(T.clippingPlanes) && T.clippingPlanes.length !== 0 || T.displacementMap && T.displacementScale !== 0 || T.alphaMap && T.alphaTest > 0) {
      const J = F.uuid, U = T.uuid;
      let N = c[J];
      N === void 0 && (N = {}, c[J] = N);
      let G = N[U];
      G === void 0 && (G = F.clone(), N[U] = G), F = G;
    }
    return F.visible = T.visible, F.wireframe = T.wireframe, E === Pi ? F.side = T.shadowSide !== null ? T.shadowSide : T.side : F.side = T.shadowSide !== null ? T.shadowSide : h[T.side], F.alphaMap = T.alphaMap, F.alphaTest = T.alphaTest, F.clipShadows = T.clipShadows, F.clippingPlanes = T.clippingPlanes, F.clipIntersection = T.clipIntersection, F.displacementMap = T.displacementMap, F.displacementScale = T.displacementScale, F.displacementBias = T.displacementBias, F.wireframeLinewidth = T.wireframeLinewidth, F.linewidth = T.linewidth, A.isPointLight === !0 && F.isMeshDistanceMaterial === !0 && (F.referencePosition.setFromMatrixPosition(A.matrixWorld), F.nearDistance = D, F.farDistance = x), F;
  }
  function b(v, T, A, D, x) {
    if (v.visible === !1)
      return;
    if (v.layers.test(T.layers) && (v.isMesh || v.isLine || v.isPoints) && (v.castShadow || v.receiveShadow && x === Pi) && (!v.frustumCulled || n.intersectsObject(v))) {
      v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, v.matrixWorld);
      const j = e.update(v), J = v.material;
      if (Array.isArray(J)) {
        const U = j.groups;
        for (let N = 0, G = U.length; N < G; N++) {
          const q = U[N], $ = J[q.materialIndex];
          if ($ && $.visible) {
            const H = w(v, $, D, A.near, A.far, x);
            o.renderBufferDirect(A, null, j, H, v, q);
          }
        }
      } else if (J.visible) {
        const U = w(v, J, D, A.near, A.far, x);
        o.renderBufferDirect(A, null, j, U, v, null);
      }
    }
    const F = v.children;
    for (let j = 0, J = F.length; j < J; j++)
      b(F[j], T, A, D, x);
  }
}
function dp(o, e, t) {
  const n = t.isWebGL2;
  function i() {
    let C = !1;
    const k = new ke();
    let K = null;
    const re = new ke(0, 0, 0, 0);
    return {
      setMask: function(ce) {
        K !== ce && !C && (o.colorMask(ce, ce, ce, ce), K = ce);
      },
      setLocked: function(ce) {
        C = ce;
      },
      setClear: function(ce, Pe, Je, it, _n) {
        _n === !0 && (ce *= it, Pe *= it, Je *= it), k.set(ce, Pe, Je, it), re.equals(k) === !1 && (o.clearColor(ce, Pe, Je, it), re.copy(k));
      },
      reset: function() {
        C = !1, K = null, re.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let C = !1, k = null, K = null, re = null;
    return {
      setTest: function(ce) {
        ce ? Ue(2929) : ge(2929);
      },
      setMask: function(ce) {
        k !== ce && !C && (o.depthMask(ce), k = ce);
      },
      setFunc: function(ce) {
        if (K !== ce) {
          switch (ce) {
            case Ll:
              o.depthFunc(512);
              break;
            case Rl:
              o.depthFunc(519);
              break;
            case Dl:
              o.depthFunc(513);
              break;
            case cr:
              o.depthFunc(515);
              break;
            case Pl:
              o.depthFunc(514);
              break;
            case Il:
              o.depthFunc(518);
              break;
            case Nl:
              o.depthFunc(516);
              break;
            case Fl:
              o.depthFunc(517);
              break;
            default:
              o.depthFunc(515);
          }
          K = ce;
        }
      },
      setLocked: function(ce) {
        C = ce;
      },
      setClear: function(ce) {
        re !== ce && (o.clearDepth(ce), re = ce);
      },
      reset: function() {
        C = !1, k = null, K = null, re = null;
      }
    };
  }
  function r() {
    let C = !1, k = null, K = null, re = null, ce = null, Pe = null, Je = null, it = null, _n = null;
    return {
      setTest: function(We) {
        C || (We ? Ue(2960) : ge(2960));
      },
      setMask: function(We) {
        k !== We && !C && (o.stencilMask(We), k = We);
      },
      setFunc: function(We, Ht, vt) {
        (K !== We || re !== Ht || ce !== vt) && (o.stencilFunc(We, Ht, vt), K = We, re = Ht, ce = vt);
      },
      setOp: function(We, Ht, vt) {
        (Pe !== We || Je !== Ht || it !== vt) && (o.stencilOp(We, Ht, vt), Pe = We, Je = Ht, it = vt);
      },
      setLocked: function(We) {
        C = We;
      },
      setClear: function(We) {
        _n !== We && (o.clearStencil(We), _n = We);
      },
      reset: function() {
        C = !1, k = null, K = null, re = null, ce = null, Pe = null, Je = null, it = null, _n = null;
      }
    };
  }
  const a = new i(), l = new s(), c = new r(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, _ = !1, w = null, b = null, v = null, T = null, A = null, D = null, x = null, E = !1, F = null, j = null, J = null, U = null, N = null;
  const G = o.getParameter(35661);
  let q = !1, $ = 0;
  const H = o.getParameter(7938);
  H.indexOf("WebGL") !== -1 ? ($ = parseFloat(/^WebGL (\d)/.exec(H)[1]), q = $ >= 1) : H.indexOf("OpenGL ES") !== -1 && ($ = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), q = $ >= 2);
  let P = null, O = {};
  const te = o.getParameter(3088), Y = o.getParameter(2978), ne = new ke().fromArray(te), oe = new ke().fromArray(Y);
  function ve(C, k, K) {
    const re = new Uint8Array(4), ce = o.createTexture();
    o.bindTexture(C, ce), o.texParameteri(C, 10241, 9728), o.texParameteri(C, 10240, 9728);
    for (let Pe = 0; Pe < K; Pe++)
      o.texImage2D(k + Pe, 0, 6408, 1, 1, 0, 6408, 5121, re);
    return ce;
  }
  const X = {};
  X[3553] = ve(3553, 3553, 1), X[34067] = ve(34067, 34069, 6), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ue(2929), l.setFunc(cr), rt(!1), Ft(kr), Ue(2884), et(mn);
  function Ue(C) {
    d[C] !== !0 && (o.enable(C), d[C] = !0);
  }
  function ge(C) {
    d[C] !== !1 && (o.disable(C), d[C] = !1);
  }
  function Me(C, k) {
    return m[C] !== k ? (o.bindFramebuffer(C, k), m[C] = k, n && (C === 36009 && (m[36160] = k), C === 36160 && (m[36009] = k)), !0) : !1;
  }
  function ae(C, k) {
    let K = p, re = !1;
    if (C)
      if (K = g.get(k), K === void 0 && (K = [], g.set(k, K)), C.isWebGLMultipleRenderTargets) {
        const ce = C.texture;
        if (K.length !== ce.length || K[0] !== 36064) {
          for (let Pe = 0, Je = ce.length; Pe < Je; Pe++)
            K[Pe] = 36064 + Pe;
          K.length = ce.length, re = !0;
        }
      } else
        K[0] !== 36064 && (K[0] = 36064, re = !0);
    else
      K[0] !== 1029 && (K[0] = 1029, re = !0);
    re && (t.isWebGL2 ? o.drawBuffers(K) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K));
  }
  function Ge(C) {
    return f !== C ? (o.useProgram(C), f = C, !0) : !1;
  }
  const Ee = {
    [ii]: 32774,
    [xl]: 32778,
    [vl]: 32779
  };
  if (n)
    Ee[Wr] = 32775, Ee[Xr] = 32776;
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && (Ee[Wr] = C.MIN_EXT, Ee[Xr] = C.MAX_EXT);
  }
  const pe = {
    [Ml]: 0,
    [yl]: 1,
    [bl]: 768,
    [Lo]: 770,
    [Cl]: 776,
    [El]: 774,
    [wl]: 772,
    [Sl]: 769,
    [Ro]: 771,
    [Al]: 775,
    [Tl]: 773
  };
  function et(C, k, K, re, ce, Pe, Je, it) {
    if (C === mn) {
      _ === !0 && (ge(3042), _ = !1);
      return;
    }
    if (_ === !1 && (Ue(3042), _ = !0), C !== _l) {
      if (C !== w || it !== E) {
        if ((b !== ii || A !== ii) && (o.blendEquation(32774), b = ii, A = ii), it)
          switch (C) {
            case ri:
              o.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Gr:
              o.blendFunc(1, 1);
              break;
            case Vr:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Hr:
              o.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case ri:
              o.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Gr:
              o.blendFunc(770, 1);
              break;
            case Vr:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Hr:
              o.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        v = null, T = null, D = null, x = null, w = C, E = it;
      }
      return;
    }
    ce = ce || k, Pe = Pe || K, Je = Je || re, (k !== b || ce !== A) && (o.blendEquationSeparate(Ee[k], Ee[ce]), b = k, A = ce), (K !== v || re !== T || Pe !== D || Je !== x) && (o.blendFuncSeparate(pe[K], pe[re], pe[Pe], pe[Je]), v = K, T = re, D = Pe, x = Je), w = C, E = null;
  }
  function dt(C, k) {
    C.side === Jt ? ge(2884) : Ue(2884);
    let K = C.side === Et;
    k && (K = !K), rt(K), C.blending === ri && C.transparent === !1 ? et(mn) : et(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.premultipliedAlpha), l.setFunc(C.depthFunc), l.setTest(C.depthTest), l.setMask(C.depthWrite), a.setMask(C.colorWrite);
    const re = C.stencilWrite;
    c.setTest(re), re && (c.setMask(C.stencilWriteMask), c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), ze(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? Ue(32926) : ge(32926);
  }
  function rt(C) {
    F !== C && (C ? o.frontFace(2304) : o.frontFace(2305), F = C);
  }
  function Ft(C) {
    C !== ml ? (Ue(2884), C !== j && (C === kr ? o.cullFace(1029) : C === gl ? o.cullFace(1028) : o.cullFace(1032))) : ge(2884), j = C;
  }
  function tt(C) {
    C !== J && (q && o.lineWidth(C), J = C);
  }
  function ze(C, k, K) {
    C ? (Ue(32823), (U !== k || N !== K) && (o.polygonOffset(k, K), U = k, N = K)) : ge(32823);
  }
  function Gt(C) {
    C ? Ue(3089) : ge(3089);
  }
  function Vt(C) {
    C === void 0 && (C = 33984 + G - 1), P !== C && (o.activeTexture(C), P = C);
  }
  function S(C, k, K) {
    K === void 0 && (P === null ? K = 33984 + G - 1 : K = P);
    let re = O[K];
    re === void 0 && (re = { type: void 0, texture: void 0 }, O[K] = re), (re.type !== C || re.texture !== k) && (P !== K && (o.activeTexture(K), P = K), o.bindTexture(C, k || X[C]), re.type = C, re.texture = k);
  }
  function M() {
    const C = O[P];
    C !== void 0 && C.type !== void 0 && (o.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function B() {
    try {
      o.compressedTexImage2D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      o.compressedTexImage3D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Q() {
    try {
      o.texSubImage2D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ie() {
    try {
      o.texSubImage3D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _e() {
    try {
      o.compressedTexSubImage2D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function se() {
    try {
      o.compressedTexSubImage3D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function W() {
    try {
      o.texStorage2D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function de() {
    try {
      o.texStorage3D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function me() {
    try {
      o.texImage2D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le() {
    try {
      o.texImage3D.apply(o, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function fe(C) {
    ne.equals(C) === !1 && (o.scissor(C.x, C.y, C.z, C.w), ne.copy(C));
  }
  function ue(C) {
    oe.equals(C) === !1 && (o.viewport(C.x, C.y, C.z, C.w), oe.copy(C));
  }
  function De(C, k) {
    let K = h.get(k);
    K === void 0 && (K = /* @__PURE__ */ new WeakMap(), h.set(k, K));
    let re = K.get(C);
    re === void 0 && (re = o.getUniformBlockIndex(k, C.name), K.set(C, re));
  }
  function He(C, k) {
    const re = h.get(k).get(C);
    u.get(C) !== re && (o.uniformBlockBinding(k, re, C.__bindingPointIndex), u.set(C, re));
  }
  function $e() {
    o.disable(3042), o.disable(2884), o.disable(2929), o.disable(32823), o.disable(3089), o.disable(2960), o.disable(32926), o.blendEquation(32774), o.blendFunc(1, 0), o.blendFuncSeparate(1, 0, 1, 0), o.colorMask(!0, !0, !0, !0), o.clearColor(0, 0, 0, 0), o.depthMask(!0), o.depthFunc(513), o.clearDepth(1), o.stencilMask(4294967295), o.stencilFunc(519, 0, 4294967295), o.stencilOp(7680, 7680, 7680), o.clearStencil(0), o.cullFace(1029), o.frontFace(2305), o.polygonOffset(0, 0), o.activeTexture(33984), o.bindFramebuffer(36160, null), n === !0 && (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)), o.useProgram(null), o.lineWidth(1), o.scissor(0, 0, o.canvas.width, o.canvas.height), o.viewport(0, 0, o.canvas.width, o.canvas.height), d = {}, P = null, O = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, _ = !1, w = null, b = null, v = null, T = null, A = null, D = null, x = null, E = !1, F = null, j = null, J = null, U = null, N = null, ne.set(0, 0, o.canvas.width, o.canvas.height), oe.set(0, 0, o.canvas.width, o.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: Ue,
    disable: ge,
    bindFramebuffer: Me,
    drawBuffers: ae,
    useProgram: Ge,
    setBlending: et,
    setMaterial: dt,
    setFlipSided: rt,
    setCullFace: Ft,
    setLineWidth: tt,
    setPolygonOffset: ze,
    setScissorTest: Gt,
    activeTexture: Vt,
    bindTexture: S,
    unbindTexture: M,
    compressedTexImage2D: B,
    compressedTexImage3D: Z,
    texImage2D: me,
    texImage3D: le,
    updateUBOMapping: De,
    uniformBlockBinding: He,
    texStorage2D: W,
    texStorage3D: de,
    texSubImage2D: Q,
    texSubImage3D: ie,
    compressedTexSubImage2D: _e,
    compressedTexSubImage3D: se,
    scissor: fe,
    viewport: ue,
    reset: $e
  };
}
function fp(o, e, t, n, i, s, r) {
  const a = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = /OculusBrowser/g.test(typeof navigator > "u" ? "" : navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function w(S, M) {
    return _ ? new OffscreenCanvas(S, M) : Bi("canvas");
  }
  function b(S, M, B, Z) {
    let Q = 1;
    if ((S.width > Z || S.height > Z) && (Q = Z / Math.max(S.width, S.height)), Q < 1 || M === !0)
      if (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && S instanceof ImageBitmap) {
        const ie = M ? Ms : Math.floor, _e = ie(Q * S.width), se = ie(Q * S.height);
        p === void 0 && (p = w(_e, se));
        const W = B ? w(_e, se) : p;
        return W.width = _e, W.height = se, W.getContext("2d").drawImage(S, 0, 0, _e, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + S.width + "x" + S.height + ") to (" + _e + "x" + se + ")."), W;
      } else
        return "data" in S && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + S.width + "x" + S.height + ")."), S;
    return S;
  }
  function v(S) {
    return gr(S.width) && gr(S.height);
  }
  function T(S) {
    return a ? !1 : S.wrapS !== St || S.wrapT !== St || S.minFilter !== nt && S.minFilter !== ft;
  }
  function A(S, M) {
    return S.generateMipmaps && M && S.minFilter !== nt && S.minFilter !== ft;
  }
  function D(S) {
    o.generateMipmap(S);
  }
  function x(S, M, B, Z, Q = !1) {
    if (a === !1)
      return M;
    if (S !== null) {
      if (o[S] !== void 0)
        return o[S];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + S + "'");
    }
    let ie = M;
    return M === 6403 && (B === 5126 && (ie = 33326), B === 5131 && (ie = 33325), B === 5121 && (ie = 33321)), M === 33319 && (B === 5126 && (ie = 33328), B === 5131 && (ie = 33327), B === 5121 && (ie = 33323)), M === 6408 && (B === 5126 && (ie = 34836), B === 5131 && (ie = 34842), B === 5121 && (ie = Z === Fe && Q === !1 ? 35907 : 32856), B === 32819 && (ie = 32854), B === 32820 && (ie = 32855)), (ie === 33325 || ie === 33326 || ie === 33327 || ie === 33328 || ie === 34842 || ie === 34836) && e.get("EXT_color_buffer_float"), ie;
  }
  function E(S, M, B) {
    return A(S, B) === !0 || S.isFramebufferTexture && S.minFilter !== nt && S.minFilter !== ft ? Math.log2(Math.max(M.width, M.height)) + 1 : S.mipmaps !== void 0 && S.mipmaps.length > 0 ? S.mipmaps.length : S.isCompressedTexture && Array.isArray(S.image) ? M.mipmaps.length : 1;
  }
  function F(S) {
    return S === nt || S === dr || S === fr ? 9728 : 9729;
  }
  function j(S) {
    const M = S.target;
    M.removeEventListener("dispose", j), U(M), M.isVideoTexture && g.delete(M);
  }
  function J(S) {
    const M = S.target;
    M.removeEventListener("dispose", J), G(M);
  }
  function U(S) {
    const M = n.get(S);
    if (M.__webglInit === void 0)
      return;
    const B = S.source, Z = f.get(B);
    if (Z) {
      const Q = Z[M.__cacheKey];
      Q.usedTimes--, Q.usedTimes === 0 && N(S), Object.keys(Z).length === 0 && f.delete(B);
    }
    n.remove(S);
  }
  function N(S) {
    const M = n.get(S);
    o.deleteTexture(M.__webglTexture);
    const B = S.source, Z = f.get(B);
    delete Z[M.__cacheKey], r.memory.textures--;
  }
  function G(S) {
    const M = S.texture, B = n.get(S), Z = n.get(M);
    if (Z.__webglTexture !== void 0 && (o.deleteTexture(Z.__webglTexture), r.memory.textures--), S.depthTexture && S.depthTexture.dispose(), S.isWebGLCubeRenderTarget)
      for (let Q = 0; Q < 6; Q++)
        o.deleteFramebuffer(B.__webglFramebuffer[Q]), B.__webglDepthbuffer && o.deleteRenderbuffer(B.__webglDepthbuffer[Q]);
    else {
      if (o.deleteFramebuffer(B.__webglFramebuffer), B.__webglDepthbuffer && o.deleteRenderbuffer(B.__webglDepthbuffer), B.__webglMultisampledFramebuffer && o.deleteFramebuffer(B.__webglMultisampledFramebuffer), B.__webglColorRenderbuffer)
        for (let Q = 0; Q < B.__webglColorRenderbuffer.length; Q++)
          B.__webglColorRenderbuffer[Q] && o.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);
      B.__webglDepthRenderbuffer && o.deleteRenderbuffer(B.__webglDepthRenderbuffer);
    }
    if (S.isWebGLMultipleRenderTargets)
      for (let Q = 0, ie = M.length; Q < ie; Q++) {
        const _e = n.get(M[Q]);
        _e.__webglTexture && (o.deleteTexture(_e.__webglTexture), r.memory.textures--), n.remove(M[Q]);
      }
    n.remove(M), n.remove(S);
  }
  let q = 0;
  function $() {
    q = 0;
  }
  function H() {
    const S = q;
    return S >= l && console.warn("THREE.WebGLTextures: Trying to use " + S + " texture units while this GPU supports only " + l), q += 1, S;
  }
  function P(S) {
    const M = [];
    return M.push(S.wrapS), M.push(S.wrapT), M.push(S.wrapR || 0), M.push(S.magFilter), M.push(S.minFilter), M.push(S.anisotropy), M.push(S.internalFormat), M.push(S.format), M.push(S.type), M.push(S.generateMipmaps), M.push(S.premultiplyAlpha), M.push(S.flipY), M.push(S.unpackAlignment), M.push(S.encoding), M.join();
  }
  function O(S, M) {
    const B = n.get(S);
    if (S.isVideoTexture && Gt(S), S.isRenderTargetTexture === !1 && S.version > 0 && B.__version !== S.version) {
      const Z = S.image;
      if (Z === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Z.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ge(B, S, M);
        return;
      }
    }
    t.bindTexture(3553, B.__webglTexture, 33984 + M);
  }
  function te(S, M) {
    const B = n.get(S);
    if (S.version > 0 && B.__version !== S.version) {
      ge(B, S, M);
      return;
    }
    t.bindTexture(35866, B.__webglTexture, 33984 + M);
  }
  function Y(S, M) {
    const B = n.get(S);
    if (S.version > 0 && B.__version !== S.version) {
      ge(B, S, M);
      return;
    }
    t.bindTexture(32879, B.__webglTexture, 33984 + M);
  }
  function ne(S, M) {
    const B = n.get(S);
    if (S.version > 0 && B.__version !== S.version) {
      Me(B, S, M);
      return;
    }
    t.bindTexture(34067, B.__webglTexture, 33984 + M);
  }
  const oe = {
    [ci]: 10497,
    [St]: 33071,
    [vs]: 33648
  }, ve = {
    [nt]: 9728,
    [dr]: 9984,
    [fr]: 9986,
    [ft]: 9729,
    [No]: 9985,
    [pi]: 9987
  };
  function X(S, M, B) {
    if (B ? (o.texParameteri(S, 10242, oe[M.wrapS]), o.texParameteri(S, 10243, oe[M.wrapT]), (S === 32879 || S === 35866) && o.texParameteri(S, 32882, oe[M.wrapR]), o.texParameteri(S, 10240, ve[M.magFilter]), o.texParameteri(S, 10241, ve[M.minFilter])) : (o.texParameteri(S, 10242, 33071), o.texParameteri(S, 10243, 33071), (S === 32879 || S === 35866) && o.texParameteri(S, 32882, 33071), (M.wrapS !== St || M.wrapT !== St) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), o.texParameteri(S, 10240, F(M.magFilter)), o.texParameteri(S, 10241, F(M.minFilter)), M.minFilter !== nt && M.minFilter !== ft && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Z = e.get("EXT_texture_filter_anisotropic");
      if (M.type === fn && e.has("OES_texture_float_linear") === !1 || a === !1 && M.type === Oi && e.has("OES_texture_half_float_linear") === !1)
        return;
      (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (o.texParameterf(S, Z.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy);
    }
  }
  function Ue(S, M) {
    let B = !1;
    S.__webglInit === void 0 && (S.__webglInit = !0, M.addEventListener("dispose", j));
    const Z = M.source;
    let Q = f.get(Z);
    Q === void 0 && (Q = {}, f.set(Z, Q));
    const ie = P(M);
    if (ie !== S.__cacheKey) {
      Q[ie] === void 0 && (Q[ie] = {
        texture: o.createTexture(),
        usedTimes: 0
      }, r.memory.textures++, B = !0), Q[ie].usedTimes++;
      const _e = Q[S.__cacheKey];
      _e !== void 0 && (Q[S.__cacheKey].usedTimes--, _e.usedTimes === 0 && N(M)), S.__cacheKey = ie, S.__webglTexture = Q[ie].texture;
    }
    return B;
  }
  function ge(S, M, B) {
    let Z = 3553;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (Z = 35866), M.isData3DTexture && (Z = 32879);
    const Q = Ue(S, M), ie = M.source;
    t.bindTexture(Z, S.__webglTexture, 33984 + B);
    const _e = n.get(ie);
    if (ie.version !== _e.__version || Q === !0) {
      t.activeTexture(33984 + B), o.pixelStorei(37440, M.flipY), o.pixelStorei(37441, M.premultiplyAlpha), o.pixelStorei(3317, M.unpackAlignment), o.pixelStorei(37443, 0);
      const se = T(M) && v(M.image) === !1;
      let W = b(M.image, se, !1, u);
      W = Vt(M, W);
      const de = v(W) || a, me = s.convert(M.format, M.encoding);
      let le = s.convert(M.type), fe = x(M.internalFormat, me, le, M.encoding, M.isVideoTexture);
      X(Z, M, de);
      let ue;
      const De = M.mipmaps, He = a && M.isVideoTexture !== !0, $e = _e.__version === void 0 || Q === !0, C = E(M, W, de);
      if (M.isDepthTexture)
        fe = 6402, a ? M.type === fn ? fe = 36012 : M.type === An ? fe = 33190 : M.type === ai ? fe = 35056 : fe = 33189 : M.type === fn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === Rn && fe === 6402 && M.type !== Fo && M.type !== An && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = An, le = s.convert(M.type)), M.format === ui && fe === 6402 && (fe = 34041, M.type !== ai && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = ai, le = s.convert(M.type))), $e && (He ? t.texStorage2D(3553, 1, fe, W.width, W.height) : t.texImage2D(3553, 0, fe, W.width, W.height, 0, me, le, null));
      else if (M.isDataTexture)
        if (De.length > 0 && de) {
          He && $e && t.texStorage2D(3553, C, fe, De[0].width, De[0].height);
          for (let k = 0, K = De.length; k < K; k++)
            ue = De[k], He ? t.texSubImage2D(3553, k, 0, 0, ue.width, ue.height, me, le, ue.data) : t.texImage2D(3553, k, fe, ue.width, ue.height, 0, me, le, ue.data);
          M.generateMipmaps = !1;
        } else
          He ? ($e && t.texStorage2D(3553, C, fe, W.width, W.height), t.texSubImage2D(3553, 0, 0, 0, W.width, W.height, me, le, W.data)) : t.texImage2D(3553, 0, fe, W.width, W.height, 0, me, le, W.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          He && $e && t.texStorage3D(35866, C, fe, De[0].width, De[0].height, W.depth);
          for (let k = 0, K = De.length; k < K; k++)
            ue = De[k], M.format !== wt ? me !== null ? He ? t.compressedTexSubImage3D(35866, k, 0, 0, 0, ue.width, ue.height, W.depth, me, ue.data, 0, 0) : t.compressedTexImage3D(35866, k, fe, ue.width, ue.height, W.depth, 0, ue.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : He ? t.texSubImage3D(35866, k, 0, 0, 0, ue.width, ue.height, W.depth, me, le, ue.data) : t.texImage3D(35866, k, fe, ue.width, ue.height, W.depth, 0, me, le, ue.data);
        } else {
          He && $e && t.texStorage2D(3553, C, fe, De[0].width, De[0].height);
          for (let k = 0, K = De.length; k < K; k++)
            ue = De[k], M.format !== wt ? me !== null ? He ? t.compressedTexSubImage2D(3553, k, 0, 0, ue.width, ue.height, me, ue.data) : t.compressedTexImage2D(3553, k, fe, ue.width, ue.height, 0, ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : He ? t.texSubImage2D(3553, k, 0, 0, ue.width, ue.height, me, le, ue.data) : t.texImage2D(3553, k, fe, ue.width, ue.height, 0, me, le, ue.data);
        }
      else if (M.isDataArrayTexture)
        He ? ($e && t.texStorage3D(35866, C, fe, W.width, W.height, W.depth), t.texSubImage3D(35866, 0, 0, 0, 0, W.width, W.height, W.depth, me, le, W.data)) : t.texImage3D(35866, 0, fe, W.width, W.height, W.depth, 0, me, le, W.data);
      else if (M.isData3DTexture)
        He ? ($e && t.texStorage3D(32879, C, fe, W.width, W.height, W.depth), t.texSubImage3D(32879, 0, 0, 0, 0, W.width, W.height, W.depth, me, le, W.data)) : t.texImage3D(32879, 0, fe, W.width, W.height, W.depth, 0, me, le, W.data);
      else if (M.isFramebufferTexture) {
        if ($e)
          if (He)
            t.texStorage2D(3553, C, fe, W.width, W.height);
          else {
            let k = W.width, K = W.height;
            for (let re = 0; re < C; re++)
              t.texImage2D(3553, re, fe, k, K, 0, me, le, null), k >>= 1, K >>= 1;
          }
      } else if (De.length > 0 && de) {
        He && $e && t.texStorage2D(3553, C, fe, De[0].width, De[0].height);
        for (let k = 0, K = De.length; k < K; k++)
          ue = De[k], He ? t.texSubImage2D(3553, k, 0, 0, me, le, ue) : t.texImage2D(3553, k, fe, me, le, ue);
        M.generateMipmaps = !1;
      } else
        He ? ($e && t.texStorage2D(3553, C, fe, W.width, W.height), t.texSubImage2D(3553, 0, 0, 0, me, le, W)) : t.texImage2D(3553, 0, fe, me, le, W);
      A(M, de) && D(Z), _e.__version = ie.version, M.onUpdate && M.onUpdate(M);
    }
    S.__version = M.version;
  }
  function Me(S, M, B) {
    if (M.image.length !== 6)
      return;
    const Z = Ue(S, M), Q = M.source;
    t.bindTexture(34067, S.__webglTexture, 33984 + B);
    const ie = n.get(Q);
    if (Q.version !== ie.__version || Z === !0) {
      t.activeTexture(33984 + B), o.pixelStorei(37440, M.flipY), o.pixelStorei(37441, M.premultiplyAlpha), o.pixelStorei(3317, M.unpackAlignment), o.pixelStorei(37443, 0);
      const _e = M.isCompressedTexture || M.image[0].isCompressedTexture, se = M.image[0] && M.image[0].isDataTexture, W = [];
      for (let k = 0; k < 6; k++)
        !_e && !se ? W[k] = b(M.image[k], !1, !0, c) : W[k] = se ? M.image[k].image : M.image[k], W[k] = Vt(M, W[k]);
      const de = W[0], me = v(de) || a, le = s.convert(M.format, M.encoding), fe = s.convert(M.type), ue = x(M.internalFormat, le, fe, M.encoding), De = a && M.isVideoTexture !== !0, He = ie.__version === void 0 || Z === !0;
      let $e = E(M, de, me);
      X(34067, M, me);
      let C;
      if (_e) {
        De && He && t.texStorage2D(34067, $e, ue, de.width, de.height);
        for (let k = 0; k < 6; k++) {
          C = W[k].mipmaps;
          for (let K = 0; K < C.length; K++) {
            const re = C[K];
            M.format !== wt ? le !== null ? De ? t.compressedTexSubImage2D(34069 + k, K, 0, 0, re.width, re.height, le, re.data) : t.compressedTexImage2D(34069 + k, K, ue, re.width, re.height, 0, re.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? t.texSubImage2D(34069 + k, K, 0, 0, re.width, re.height, le, fe, re.data) : t.texImage2D(34069 + k, K, ue, re.width, re.height, 0, le, fe, re.data);
          }
        }
      } else {
        C = M.mipmaps, De && He && (C.length > 0 && $e++, t.texStorage2D(34067, $e, ue, W[0].width, W[0].height));
        for (let k = 0; k < 6; k++)
          if (se) {
            De ? t.texSubImage2D(34069 + k, 0, 0, 0, W[k].width, W[k].height, le, fe, W[k].data) : t.texImage2D(34069 + k, 0, ue, W[k].width, W[k].height, 0, le, fe, W[k].data);
            for (let K = 0; K < C.length; K++) {
              const ce = C[K].image[k].image;
              De ? t.texSubImage2D(34069 + k, K + 1, 0, 0, ce.width, ce.height, le, fe, ce.data) : t.texImage2D(34069 + k, K + 1, ue, ce.width, ce.height, 0, le, fe, ce.data);
            }
          } else {
            De ? t.texSubImage2D(34069 + k, 0, 0, 0, le, fe, W[k]) : t.texImage2D(34069 + k, 0, ue, le, fe, W[k]);
            for (let K = 0; K < C.length; K++) {
              const re = C[K];
              De ? t.texSubImage2D(34069 + k, K + 1, 0, 0, le, fe, re.image[k]) : t.texImage2D(34069 + k, K + 1, ue, le, fe, re.image[k]);
            }
          }
      }
      A(M, me) && D(34067), ie.__version = Q.version, M.onUpdate && M.onUpdate(M);
    }
    S.__version = M.version;
  }
  function ae(S, M, B, Z, Q) {
    const ie = s.convert(B.format, B.encoding), _e = s.convert(B.type), se = x(B.internalFormat, ie, _e, B.encoding);
    n.get(M).__hasExternalTextures || (Q === 32879 || Q === 35866 ? t.texImage3D(Q, 0, se, M.width, M.height, M.depth, 0, ie, _e, null) : t.texImage2D(Q, 0, se, M.width, M.height, 0, ie, _e, null)), t.bindFramebuffer(36160, S), ze(M) ? d.framebufferTexture2DMultisampleEXT(36160, Z, Q, n.get(B).__webglTexture, 0, tt(M)) : (Q === 3553 || Q >= 34069 && Q <= 34074) && o.framebufferTexture2D(36160, Z, Q, n.get(B).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Ge(S, M, B) {
    if (o.bindRenderbuffer(36161, S), M.depthBuffer && !M.stencilBuffer) {
      let Z = 33189;
      if (B || ze(M)) {
        const Q = M.depthTexture;
        Q && Q.isDepthTexture && (Q.type === fn ? Z = 36012 : Q.type === An && (Z = 33190));
        const ie = tt(M);
        ze(M) ? d.renderbufferStorageMultisampleEXT(36161, ie, Z, M.width, M.height) : o.renderbufferStorageMultisample(36161, ie, Z, M.width, M.height);
      } else
        o.renderbufferStorage(36161, Z, M.width, M.height);
      o.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (M.depthBuffer && M.stencilBuffer) {
      const Z = tt(M);
      B && ze(M) === !1 ? o.renderbufferStorageMultisample(36161, Z, 35056, M.width, M.height) : ze(M) ? d.renderbufferStorageMultisampleEXT(36161, Z, 35056, M.width, M.height) : o.renderbufferStorage(36161, 34041, M.width, M.height), o.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      const Z = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
      for (let Q = 0; Q < Z.length; Q++) {
        const ie = Z[Q], _e = s.convert(ie.format, ie.encoding), se = s.convert(ie.type), W = x(ie.internalFormat, _e, se, ie.encoding), de = tt(M);
        B && ze(M) === !1 ? o.renderbufferStorageMultisample(36161, de, W, M.width, M.height) : ze(M) ? d.renderbufferStorageMultisampleEXT(36161, de, W, M.width, M.height) : o.renderbufferStorage(36161, W, M.width, M.height);
      }
    }
    o.bindRenderbuffer(36161, null);
  }
  function Ee(S, M) {
    if (M && M.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, S), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), O(M.depthTexture, 0);
    const Z = n.get(M.depthTexture).__webglTexture, Q = tt(M);
    if (M.depthTexture.format === Rn)
      ze(M) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Z, 0, Q) : o.framebufferTexture2D(36160, 36096, 3553, Z, 0);
    else if (M.depthTexture.format === ui)
      ze(M) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Z, 0, Q) : o.framebufferTexture2D(36160, 33306, 3553, Z, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function pe(S) {
    const M = n.get(S), B = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (B)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Ee(M.__webglFramebuffer, S);
    } else if (B) {
      M.__webglDepthbuffer = [];
      for (let Z = 0; Z < 6; Z++)
        t.bindFramebuffer(36160, M.__webglFramebuffer[Z]), M.__webglDepthbuffer[Z] = o.createRenderbuffer(), Ge(M.__webglDepthbuffer[Z], S, !1);
    } else
      t.bindFramebuffer(36160, M.__webglFramebuffer), M.__webglDepthbuffer = o.createRenderbuffer(), Ge(M.__webglDepthbuffer, S, !1);
    t.bindFramebuffer(36160, null);
  }
  function et(S, M, B) {
    const Z = n.get(S);
    M !== void 0 && ae(Z.__webglFramebuffer, S, S.texture, 36064, 3553), B !== void 0 && pe(S);
  }
  function dt(S) {
    const M = S.texture, B = n.get(S), Z = n.get(M);
    S.addEventListener("dispose", J), S.isWebGLMultipleRenderTargets !== !0 && (Z.__webglTexture === void 0 && (Z.__webglTexture = o.createTexture()), Z.__version = M.version, r.memory.textures++);
    const Q = S.isWebGLCubeRenderTarget === !0, ie = S.isWebGLMultipleRenderTargets === !0, _e = v(S) || a;
    if (Q) {
      B.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        B.__webglFramebuffer[se] = o.createFramebuffer();
    } else {
      if (B.__webglFramebuffer = o.createFramebuffer(), ie)
        if (i.drawBuffers) {
          const se = S.texture;
          for (let W = 0, de = se.length; W < de; W++) {
            const me = n.get(se[W]);
            me.__webglTexture === void 0 && (me.__webglTexture = o.createTexture(), r.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && S.samples > 0 && ze(S) === !1) {
        const se = ie ? M : [M];
        B.__webglMultisampledFramebuffer = o.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, B.__webglMultisampledFramebuffer);
        for (let W = 0; W < se.length; W++) {
          const de = se[W];
          B.__webglColorRenderbuffer[W] = o.createRenderbuffer(), o.bindRenderbuffer(36161, B.__webglColorRenderbuffer[W]);
          const me = s.convert(de.format, de.encoding), le = s.convert(de.type), fe = x(de.internalFormat, me, le, de.encoding, S.isXRRenderTarget === !0), ue = tt(S);
          o.renderbufferStorageMultisample(36161, ue, fe, S.width, S.height), o.framebufferRenderbuffer(36160, 36064 + W, 36161, B.__webglColorRenderbuffer[W]);
        }
        o.bindRenderbuffer(36161, null), S.depthBuffer && (B.__webglDepthRenderbuffer = o.createRenderbuffer(), Ge(B.__webglDepthRenderbuffer, S, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (Q) {
      t.bindTexture(34067, Z.__webglTexture), X(34067, M, _e);
      for (let se = 0; se < 6; se++)
        ae(B.__webglFramebuffer[se], S, M, 36064, 34069 + se);
      A(M, _e) && D(34067), t.unbindTexture();
    } else if (ie) {
      const se = S.texture;
      for (let W = 0, de = se.length; W < de; W++) {
        const me = se[W], le = n.get(me);
        t.bindTexture(3553, le.__webglTexture), X(3553, me, _e), ae(B.__webglFramebuffer, S, me, 36064 + W, 3553), A(me, _e) && D(3553);
      }
      t.unbindTexture();
    } else {
      let se = 3553;
      (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) && (a ? se = S.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, Z.__webglTexture), X(se, M, _e), ae(B.__webglFramebuffer, S, M, 36064, se), A(M, _e) && D(se), t.unbindTexture();
    }
    S.depthBuffer && pe(S);
  }
  function rt(S) {
    const M = v(S) || a, B = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
    for (let Z = 0, Q = B.length; Z < Q; Z++) {
      const ie = B[Z];
      if (A(ie, M)) {
        const _e = S.isWebGLCubeRenderTarget ? 34067 : 3553, se = n.get(ie).__webglTexture;
        t.bindTexture(_e, se), D(_e), t.unbindTexture();
      }
    }
  }
  function Ft(S) {
    if (a && S.samples > 0 && ze(S) === !1) {
      const M = S.isWebGLMultipleRenderTargets ? S.texture : [S.texture], B = S.width, Z = S.height;
      let Q = 16384;
      const ie = [], _e = S.stencilBuffer ? 33306 : 36096, se = n.get(S), W = S.isWebGLMultipleRenderTargets === !0;
      if (W)
        for (let de = 0; de < M.length; de++)
          t.bindFramebuffer(36160, se.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + de, 36161, null), t.bindFramebuffer(36160, se.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + de, 3553, null, 0);
      t.bindFramebuffer(36008, se.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, se.__webglFramebuffer);
      for (let de = 0; de < M.length; de++) {
        ie.push(36064 + de), S.depthBuffer && ie.push(_e);
        const me = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (me === !1 && (S.depthBuffer && (Q |= 256), S.stencilBuffer && (Q |= 1024)), W && o.framebufferRenderbuffer(36008, 36064, 36161, se.__webglColorRenderbuffer[de]), me === !0 && (o.invalidateFramebuffer(36008, [_e]), o.invalidateFramebuffer(36009, [_e])), W) {
          const le = n.get(M[de]).__webglTexture;
          o.framebufferTexture2D(36009, 36064, 3553, le, 0);
        }
        o.blitFramebuffer(0, 0, B, Z, 0, 0, B, Z, Q, 9728), m && o.invalidateFramebuffer(36008, ie);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), W)
        for (let de = 0; de < M.length; de++) {
          t.bindFramebuffer(36160, se.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + de, 36161, se.__webglColorRenderbuffer[de]);
          const me = n.get(M[de]).__webglTexture;
          t.bindFramebuffer(36160, se.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + de, 3553, me, 0);
        }
      t.bindFramebuffer(36009, se.__webglMultisampledFramebuffer);
    }
  }
  function tt(S) {
    return Math.min(h, S.samples);
  }
  function ze(S) {
    const M = n.get(S);
    return a && S.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function Gt(S) {
    const M = r.render.frame;
    g.get(S) !== M && (g.set(S, M), S.update());
  }
  function Vt(S, M) {
    const B = S.encoding, Z = S.format, Q = S.type;
    return S.isCompressedTexture === !0 || S.isVideoTexture === !0 || S.format === mr || B !== Fn && (B === Fe ? a === !1 ? e.has("EXT_sRGB") === !0 && Z === wt ? (S.format = mr, S.minFilter = ft, S.generateMipmaps = !1) : M = ko.sRGBToLinear(M) : (Z !== wt || Q !== Nn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", B)), M;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = $, this.setTexture2D = O, this.setTexture2DArray = te, this.setTexture3D = Y, this.setTextureCube = ne, this.rebindTextures = et, this.setupRenderTarget = dt, this.updateRenderTargetMipmap = rt, this.updateMultisampleRenderTarget = Ft, this.setupDepthRenderbuffer = pe, this.setupFrameBufferTexture = ae, this.useMultisampledRTT = ze;
}
function pp(o, e, t) {
  const n = t.isWebGL2;
  function i(s, r = null) {
    let a;
    if (s === Nn)
      return 5121;
    if (s === Xl)
      return 32819;
    if (s === ql)
      return 32820;
    if (s === Vl)
      return 5120;
    if (s === Hl)
      return 5122;
    if (s === Fo)
      return 5123;
    if (s === Wl)
      return 5124;
    if (s === An)
      return 5125;
    if (s === fn)
      return 5126;
    if (s === Oi)
      return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === jl)
      return 6406;
    if (s === wt)
      return 6408;
    if (s === Kl)
      return 6409;
    if (s === Zl)
      return 6410;
    if (s === Rn)
      return 6402;
    if (s === ui)
      return 34041;
    if (s === $l)
      return 6403;
    if (s === Yl)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === mr)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Jl)
      return 36244;
    if (s === Ql)
      return 33319;
    if (s === ec)
      return 33320;
    if (s === tc)
      return 36249;
    if (s === Cs || s === Ls || s === Rs || s === Ds)
      if (r === Fe)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === Cs)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Ls)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Rs)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Ds)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === Cs)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Ls)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Rs)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Ds)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === qr || s === jr || s === Yr || s === Kr)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === qr)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === jr)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Yr)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Kr)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === nc)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Zr || s === $r)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === Zr)
          return r === Fe ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === $r)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Jr || s === Qr || s === ea || s === ta || s === na || s === ia || s === sa || s === ra || s === aa || s === oa || s === la || s === ca || s === ua || s === ha)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === Jr)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Qr)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === ea)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === ta)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === na)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === ia)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === sa)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === ra)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === aa)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === oa)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === la)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === ca)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ua)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === ha)
          return r === Fe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === da)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === da)
          return r === Fe ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return s === ai ? n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : o[s] !== void 0 ? o[s] : null;
  }
  return { convert: i };
}
class mp extends ut {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Ln extends Ve {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const gp = { type: "move" };
class sr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ln(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ln(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ln(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, r = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        r = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, n);
          if (c.joints[p.jointName] === void 0) {
            const w = new Ln();
            w.matrixAutoUpdate = !1, w.visible = !1, c.joints[p.jointName] = w, c.add(w);
          }
          const _ = c.joints[p.jointName];
          f !== null && (_.matrix.fromArray(f.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = f.radius), _.visible = f !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], d = u.position.distanceTo(h.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && d > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(gp)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = r !== null), this;
  }
}
class _p extends ht {
  constructor(e, t, n, i, s, r, a, l, c, u) {
    if (u = u !== void 0 ? u : Rn, u !== Rn && u !== ui)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Rn && (n = An), n === void 0 && u === ui && (n = ai), super(null, i, s, r, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : nt, this.minFilter = l !== void 0 ? l : nt, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class xp extends mi {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, r = null, a = "local-floor", l = null, c = null, u = null, h = null, d = null, m = null;
    const g = t.getContextAttributes();
    let p = null, f = null;
    const _ = [], w = [], b = new ut();
    b.layers.enable(1), b.viewport = new ke();
    const v = new ut();
    v.layers.enable(2), v.viewport = new ke();
    const T = [b, v], A = new mp();
    A.layers.enable(1), A.layers.enable(2);
    let D = null, x = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(P) {
      let O = _[P];
      return O === void 0 && (O = new sr(), _[P] = O), O.getTargetRaySpace();
    }, this.getControllerGrip = function(P) {
      let O = _[P];
      return O === void 0 && (O = new sr(), _[P] = O), O.getGripSpace();
    }, this.getHand = function(P) {
      let O = _[P];
      return O === void 0 && (O = new sr(), _[P] = O), O.getHandSpace();
    };
    function E(P) {
      const O = w.indexOf(P.inputSource);
      if (O === -1)
        return;
      const te = _[O];
      te !== void 0 && te.dispatchEvent({ type: P.type, data: P.inputSource });
    }
    function F() {
      i.removeEventListener("select", E), i.removeEventListener("selectstart", E), i.removeEventListener("selectend", E), i.removeEventListener("squeeze", E), i.removeEventListener("squeezestart", E), i.removeEventListener("squeezeend", E), i.removeEventListener("end", F), i.removeEventListener("inputsourceschange", j);
      for (let P = 0; P < _.length; P++) {
        const O = w[P];
        O !== null && (w[P] = null, _[P].disconnect(O));
      }
      D = null, x = null, e.setRenderTarget(p), d = null, h = null, u = null, i = null, f = null, H.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(P) {
      s = P, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(P) {
      a = P, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || r;
    }, this.setReferenceSpace = function(P) {
      l = P;
    }, this.getBaseLayer = function() {
      return h !== null ? h : d;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(P) {
      if (i = P, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", E), i.addEventListener("selectstart", E), i.addEventListener("selectend", E), i.addEventListener("squeeze", E), i.addEventListener("squeezestart", E), i.addEventListener("squeezeend", E), i.addEventListener("end", F), i.addEventListener("inputsourceschange", j), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const O = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, O), i.updateRenderState({ baseLayer: d }), f = new On(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: wt,
              type: Nn,
              encoding: e.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let O = null, te = null, Y = null;
          g.depth && (Y = g.stencil ? 35056 : 33190, O = g.stencil ? ui : Rn, te = g.stencil ? ai : An);
          const ne = {
            colorFormat: 32856,
            depthFormat: Y,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), h = u.createProjectionLayer(ne), i.updateRenderState({ layers: [h] }), f = new On(
            h.textureWidth,
            h.textureHeight,
            {
              format: wt,
              type: Nn,
              depthTexture: new _p(h.textureWidth, h.textureHeight, te, void 0, void 0, void 0, void 0, void 0, void 0, O),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const oe = e.properties.get(f);
          oe.__ignoreDepthValues = h.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(1), l = null, r = await i.requestReferenceSpace(a), H.setContext(i), H.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function j(P) {
      for (let O = 0; O < P.removed.length; O++) {
        const te = P.removed[O], Y = w.indexOf(te);
        Y >= 0 && (w[Y] = null, _[Y].dispatchEvent({ type: "disconnected", data: te }));
      }
      for (let O = 0; O < P.added.length; O++) {
        const te = P.added[O];
        let Y = w.indexOf(te);
        if (Y === -1) {
          for (let oe = 0; oe < _.length; oe++)
            if (oe >= w.length) {
              w.push(te), Y = oe;
              break;
            } else if (w[oe] === null) {
              w[oe] = te, Y = oe;
              break;
            }
          if (Y === -1)
            break;
        }
        const ne = _[Y];
        ne && ne.dispatchEvent({ type: "connected", data: te });
      }
    }
    const J = new L(), U = new L();
    function N(P, O, te) {
      J.setFromMatrixPosition(O.matrixWorld), U.setFromMatrixPosition(te.matrixWorld);
      const Y = J.distanceTo(U), ne = O.projectionMatrix.elements, oe = te.projectionMatrix.elements, ve = ne[14] / (ne[10] - 1), X = ne[14] / (ne[10] + 1), Ue = (ne[9] + 1) / ne[5], ge = (ne[9] - 1) / ne[5], Me = (ne[8] - 1) / ne[0], ae = (oe[8] + 1) / oe[0], Ge = ve * Me, Ee = ve * ae, pe = Y / (-Me + ae), et = pe * -Me;
      O.matrixWorld.decompose(P.position, P.quaternion, P.scale), P.translateX(et), P.translateZ(pe), P.matrixWorld.compose(P.position, P.quaternion, P.scale), P.matrixWorldInverse.copy(P.matrixWorld).invert();
      const dt = ve + pe, rt = X + pe, Ft = Ge - et, tt = Ee + (Y - et), ze = Ue * X / rt * dt, Gt = ge * X / rt * dt;
      P.projectionMatrix.makePerspective(Ft, tt, ze, Gt, dt, rt);
    }
    function G(P, O) {
      O === null ? P.matrixWorld.copy(P.matrix) : P.matrixWorld.multiplyMatrices(O.matrixWorld, P.matrix), P.matrixWorldInverse.copy(P.matrixWorld).invert();
    }
    this.updateCamera = function(P) {
      if (i === null)
        return;
      A.near = v.near = b.near = P.near, A.far = v.far = b.far = P.far, (D !== A.near || x !== A.far) && (i.updateRenderState({
        depthNear: A.near,
        depthFar: A.far
      }), D = A.near, x = A.far);
      const O = P.parent, te = A.cameras;
      G(A, O);
      for (let ne = 0; ne < te.length; ne++)
        G(te[ne], O);
      A.matrixWorld.decompose(A.position, A.quaternion, A.scale), P.matrix.copy(A.matrix), P.matrix.decompose(P.position, P.quaternion, P.scale);
      const Y = P.children;
      for (let ne = 0, oe = Y.length; ne < oe; ne++)
        Y[ne].updateMatrixWorld(!0);
      te.length === 2 ? N(A, b, v) : A.projectionMatrix.copy(b.projectionMatrix);
    }, this.getCamera = function() {
      return A;
    }, this.getFoveation = function() {
      if (h !== null)
        return h.fixedFoveation;
      if (d !== null)
        return d.fixedFoveation;
    }, this.setFoveation = function(P) {
      h !== null && (h.fixedFoveation = P), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = P);
    };
    let q = null;
    function $(P, O) {
      if (c = O.getViewerPose(l || r), m = O, c !== null) {
        const te = c.views;
        d !== null && (e.setRenderTargetFramebuffer(f, d.framebuffer), e.setRenderTarget(f));
        let Y = !1;
        te.length !== A.cameras.length && (A.cameras.length = 0, Y = !0);
        for (let ne = 0; ne < te.length; ne++) {
          const oe = te[ne];
          let ve = null;
          if (d !== null)
            ve = d.getViewport(oe);
          else {
            const Ue = u.getViewSubImage(h, oe);
            ve = Ue.viewport, ne === 0 && (e.setRenderTargetTextures(
              f,
              Ue.colorTexture,
              h.ignoreDepthValues ? void 0 : Ue.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let X = T[ne];
          X === void 0 && (X = new ut(), X.layers.enable(ne), X.viewport = new ke(), T[ne] = X), X.matrix.fromArray(oe.transform.matrix), X.projectionMatrix.fromArray(oe.projectionMatrix), X.viewport.set(ve.x, ve.y, ve.width, ve.height), ne === 0 && A.matrix.copy(X.matrix), Y === !0 && A.cameras.push(X);
        }
      }
      for (let te = 0; te < _.length; te++) {
        const Y = w[te], ne = _[te];
        Y !== null && ne !== void 0 && ne.update(Y, O, l || r);
      }
      q && q(P, O), m = null;
    }
    const H = new Yo();
    H.setAnimationLoop($), this.setAnimationLoop = function(P) {
      q = P;
    }, this.dispose = function() {
    };
  }
}
function vp(o, e) {
  function t(p, f) {
    p.fogColor.value.copy(f.color), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, _, w, b) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(p, f) : f.isMeshToonMaterial ? (i(p, f), u(p, f)) : f.isMeshPhongMaterial ? (i(p, f), c(p, f)) : f.isMeshStandardMaterial ? (i(p, f), h(p, f), f.isMeshPhysicalMaterial && d(p, f, b)) : f.isMeshMatcapMaterial ? (i(p, f), m(p, f)) : f.isMeshDepthMaterial ? i(p, f) : f.isMeshDistanceMaterial ? (i(p, f), g(p, f)) : f.isMeshNormalMaterial ? i(p, f) : f.isLineBasicMaterial ? (s(p, f), f.isLineDashedMaterial && r(p, f)) : f.isPointsMaterial ? a(p, f, _, w) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.bumpMap && (p.bumpMap.value = f.bumpMap, p.bumpScale.value = f.bumpScale, f.side === Et && (p.bumpScale.value *= -1)), f.displacementMap && (p.displacementMap.value = f.displacementMap, p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap), f.normalMap && (p.normalMap.value = f.normalMap, p.normalScale.value.copy(f.normalScale), f.side === Et && p.normalScale.value.negate()), f.specularMap && (p.specularMap.value = f.specularMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const _ = e.get(f).envMap;
    if (_ && (p.envMap.value = _, p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const v = o.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * v;
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity);
    let w;
    f.map ? w = f.map : f.specularMap ? w = f.specularMap : f.displacementMap ? w = f.displacementMap : f.normalMap ? w = f.normalMap : f.bumpMap ? w = f.bumpMap : f.roughnessMap ? w = f.roughnessMap : f.metalnessMap ? w = f.metalnessMap : f.alphaMap ? w = f.alphaMap : f.emissiveMap ? w = f.emissiveMap : f.clearcoatMap ? w = f.clearcoatMap : f.clearcoatNormalMap ? w = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? w = f.clearcoatRoughnessMap : f.iridescenceMap ? w = f.iridescenceMap : f.iridescenceThicknessMap ? w = f.iridescenceThicknessMap : f.specularIntensityMap ? w = f.specularIntensityMap : f.specularColorMap ? w = f.specularColorMap : f.transmissionMap ? w = f.transmissionMap : f.thicknessMap ? w = f.thicknessMap : f.sheenColorMap ? w = f.sheenColorMap : f.sheenRoughnessMap && (w = f.sheenRoughnessMap), w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture), w.matrixAutoUpdate === !0 && w.updateMatrix(), p.uvTransform.value.copy(w.matrix));
    let b;
    f.aoMap ? b = f.aoMap : f.lightMap && (b = f.lightMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), p.uv2Transform.value.copy(b.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity;
  }
  function r(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function a(p, f, _, w) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * _, p.scale.value = w * 0.5, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let b;
    f.map ? b = f.map : f.alphaMap && (b = f.alphaMap), b !== void 0 && (b.matrixAutoUpdate === !0 && b.updateMatrix(), p.uvTransform.value.copy(b.matrix));
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let _;
    f.map ? _ = f.map : f.alphaMap && (_ = f.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
  }
  function c(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function h(p, f) {
    p.roughness.value = f.roughness, p.metalness.value = f.metalness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap), f.metalnessMap && (p.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function d(p, f, _) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap)), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), p.clearcoatNormalMap.value = f.clearcoatNormalMap, f.side === Et && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = _.texture, p.transmissionSamplerSize.value.set(_.width, _.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
  }
  function m(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function g(p, f) {
    p.referencePosition.value.copy(f.referencePosition), p.nearDistance.value = f.nearDistance, p.farDistance.value = f.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Mp(o, e, t, n) {
  let i = {}, s = {}, r = [];
  const a = t.isWebGL2 ? o.getParameter(35375) : 0;
  function l(w, b) {
    const v = b.program;
    n.uniformBlockBinding(w, v);
  }
  function c(w, b) {
    let v = i[w.id];
    v === void 0 && (g(w), v = u(w), i[w.id] = v, w.addEventListener("dispose", f));
    const T = b.program;
    n.updateUBOMapping(w, T);
    const A = e.render.frame;
    s[w.id] !== A && (d(w), s[w.id] = A);
  }
  function u(w) {
    const b = h();
    w.__bindingPointIndex = b;
    const v = o.createBuffer(), T = w.__size, A = w.usage;
    return o.bindBuffer(35345, v), o.bufferData(35345, T, A), o.bindBuffer(35345, null), o.bindBufferBase(35345, b, v), v;
  }
  function h() {
    for (let w = 0; w < a; w++)
      if (r.indexOf(w) === -1)
        return r.push(w), w;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(w) {
    const b = i[w.id], v = w.uniforms, T = w.__cache;
    o.bindBuffer(35345, b);
    for (let A = 0, D = v.length; A < D; A++) {
      const x = v[A];
      if (m(x, A, T) === !0) {
        const E = x.value, F = x.__offset;
        typeof E == "number" ? (x.__data[0] = E, o.bufferSubData(35345, F, x.__data)) : (x.value.isMatrix3 ? (x.__data[0] = x.value.elements[0], x.__data[1] = x.value.elements[1], x.__data[2] = x.value.elements[2], x.__data[3] = x.value.elements[0], x.__data[4] = x.value.elements[3], x.__data[5] = x.value.elements[4], x.__data[6] = x.value.elements[5], x.__data[7] = x.value.elements[0], x.__data[8] = x.value.elements[6], x.__data[9] = x.value.elements[7], x.__data[10] = x.value.elements[8], x.__data[11] = x.value.elements[0]) : E.toArray(x.__data), o.bufferSubData(35345, F, x.__data));
      }
    }
    o.bindBuffer(35345, null);
  }
  function m(w, b, v) {
    const T = w.value;
    if (v[b] === void 0)
      return typeof T == "number" ? v[b] = T : v[b] = T.clone(), !0;
    if (typeof T == "number") {
      if (v[b] !== T)
        return v[b] = T, !0;
    } else {
      const A = v[b];
      if (A.equals(T) === !1)
        return A.copy(T), !0;
    }
    return !1;
  }
  function g(w) {
    const b = w.uniforms;
    let v = 0;
    const T = 16;
    let A = 0;
    for (let D = 0, x = b.length; D < x; D++) {
      const E = b[D], F = p(E);
      if (E.__data = new Float32Array(F.storage / Float32Array.BYTES_PER_ELEMENT), E.__offset = v, D > 0) {
        A = v % T;
        const j = T - A;
        A !== 0 && j - F.boundary < 0 && (v += T - A, E.__offset = v);
      }
      v += F.storage;
    }
    return A = v % T, A > 0 && (v += T - A), w.__size = v, w.__cache = {}, this;
  }
  function p(w) {
    const b = w.value, v = {
      boundary: 0,
      storage: 0
    };
    return typeof b == "number" ? (v.boundary = 4, v.storage = 4) : b.isVector2 ? (v.boundary = 8, v.storage = 8) : b.isVector3 || b.isColor ? (v.boundary = 16, v.storage = 12) : b.isVector4 ? (v.boundary = 16, v.storage = 16) : b.isMatrix3 ? (v.boundary = 48, v.storage = 48) : b.isMatrix4 ? (v.boundary = 64, v.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), v;
  }
  function f(w) {
    const b = w.target;
    b.removeEventListener("dispose", f);
    const v = r.indexOf(b.__bindingPointIndex);
    r.splice(v, 1), o.deleteBuffer(i[b.id]), delete i[b.id], delete s[b.id];
  }
  function _() {
    for (const w in i)
      o.deleteBuffer(i[w]);
    r = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: _
  };
}
function yp() {
  const o = Bi("canvas");
  return o.style.display = "block", o;
}
function Qo(o = {}) {
  this.isWebGLRenderer = !0;
  const e = o.canvas !== void 0 ? o.canvas : yp(), t = o.context !== void 0 ? o.context : null, n = o.depth !== void 0 ? o.depth : !0, i = o.stencil !== void 0 ? o.stencil : !0, s = o.antialias !== void 0 ? o.antialias : !1, r = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0, a = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1, l = o.powerPreference !== void 0 ? o.powerPreference : "default", c = o.failIfMajorPerformanceCaveat !== void 0 ? o.failIfMajorPerformanceCaveat : !1;
  let u;
  t !== null ? u = t.getContextAttributes().alpha : u = o.alpha !== void 0 ? o.alpha : !1;
  let h = null, d = null;
  const m = [], g = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Fn, this.physicallyCorrectLights = !1, this.toneMapping = en, this.toneMappingExposure = 1, Object.defineProperties(this, {
    gammaFactor: {
      get: function() {
        return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
      },
      set: function() {
        console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
      }
    }
  });
  const p = this;
  let f = !1, _ = 0, w = 0, b = null, v = -1, T = null;
  const A = new ke(), D = new ke();
  let x = null, E = e.width, F = e.height, j = 1, J = null, U = null;
  const N = new ke(0, 0, E, F), G = new ke(0, 0, E, F);
  let q = !1;
  const $ = new Er();
  let H = !1, P = !1, O = null;
  const te = new Ce(), Y = new Re(), ne = new L(), oe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ve() {
    return b === null ? j : 1;
  }
  let X = t;
  function Ue(y, I) {
    for (let z = 0; z < y.length; z++) {
      const R = y[z], V = e.getContext(R, I);
      if (V !== null)
        return V;
    }
    return null;
  }
  try {
    const y = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: r,
      preserveDrawingBuffer: a,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${br}`), e.addEventListener("webglcontextlost", fe, !1), e.addEventListener("webglcontextrestored", ue, !1), e.addEventListener("webglcontextcreationerror", De, !1), X === null) {
      const I = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && I.shift(), X = Ue(I, y), X === null)
        throw Ue(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    X.getShaderPrecisionFormat === void 0 && (X.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (y) {
    throw console.error("THREE.WebGLRenderer: " + y.message), y;
  }
  let ge, Me, ae, Ge, Ee, pe, et, dt, rt, Ft, tt, ze, Gt, Vt, S, M, B, Z, Q, ie, _e, se, W, de;
  function me() {
    ge = new Dd(X), Me = new Td(X, ge, o), ge.init(Me), se = new pp(X, ge, Me), ae = new dp(X, ge, Me), Ge = new Nd(), Ee = new Jf(), pe = new fp(X, ge, ae, Ee, Me, se, Ge), et = new Ad(p), dt = new Rd(p), rt = new Hc(X, Me), W = new Sd(X, ge, rt, Me), Ft = new Pd(X, rt, Ge, W), tt = new zd(X, Ft, rt, Ge), Q = new Ud(X, Me, pe), M = new Ed(Ee), ze = new $f(p, et, dt, ge, Me, W, M), Gt = new vp(p, Ee), Vt = new ep(), S = new ap(ge, Me), Z = new bd(p, et, dt, ae, tt, u, r), B = new hp(p, tt, Me), de = new Mp(X, Ge, Me, ae), ie = new wd(X, ge, Ge, Me), _e = new Id(X, ge, Ge, Me), Ge.programs = ze.programs, p.capabilities = Me, p.extensions = ge, p.properties = Ee, p.renderLists = Vt, p.shadowMap = B, p.state = ae, p.info = Ge;
  }
  me();
  const le = new xp(p, X);
  this.xr = le, this.getContext = function() {
    return X;
  }, this.getContextAttributes = function() {
    return X.getContextAttributes();
  }, this.forceContextLoss = function() {
    const y = ge.get("WEBGL_lose_context");
    y && y.loseContext();
  }, this.forceContextRestore = function() {
    const y = ge.get("WEBGL_lose_context");
    y && y.restoreContext();
  }, this.getPixelRatio = function() {
    return j;
  }, this.setPixelRatio = function(y) {
    y !== void 0 && (j = y, this.setSize(E, F, !1));
  }, this.getSize = function(y) {
    return y.set(E, F);
  }, this.setSize = function(y, I, z) {
    if (le.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    E = y, F = I, e.width = Math.floor(y * j), e.height = Math.floor(I * j), z !== !1 && (e.style.width = y + "px", e.style.height = I + "px"), this.setViewport(0, 0, y, I);
  }, this.getDrawingBufferSize = function(y) {
    return y.set(E * j, F * j).floor();
  }, this.setDrawingBufferSize = function(y, I, z) {
    E = y, F = I, j = z, e.width = Math.floor(y * z), e.height = Math.floor(I * z), this.setViewport(0, 0, y, I);
  }, this.getCurrentViewport = function(y) {
    return y.copy(A);
  }, this.getViewport = function(y) {
    return y.copy(N);
  }, this.setViewport = function(y, I, z, R) {
    y.isVector4 ? N.set(y.x, y.y, y.z, y.w) : N.set(y, I, z, R), ae.viewport(A.copy(N).multiplyScalar(j).floor());
  }, this.getScissor = function(y) {
    return y.copy(G);
  }, this.setScissor = function(y, I, z, R) {
    y.isVector4 ? G.set(y.x, y.y, y.z, y.w) : G.set(y, I, z, R), ae.scissor(D.copy(G).multiplyScalar(j).floor());
  }, this.getScissorTest = function() {
    return q;
  }, this.setScissorTest = function(y) {
    ae.setScissorTest(q = y);
  }, this.setOpaqueSort = function(y) {
    J = y;
  }, this.setTransparentSort = function(y) {
    U = y;
  }, this.getClearColor = function(y) {
    return y.copy(Z.getClearColor());
  }, this.setClearColor = function() {
    Z.setClearColor.apply(Z, arguments);
  }, this.getClearAlpha = function() {
    return Z.getClearAlpha();
  }, this.setClearAlpha = function() {
    Z.setClearAlpha.apply(Z, arguments);
  }, this.clear = function(y = !0, I = !0, z = !0) {
    let R = 0;
    y && (R |= 16384), I && (R |= 256), z && (R |= 1024), X.clear(R);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", fe, !1), e.removeEventListener("webglcontextrestored", ue, !1), e.removeEventListener("webglcontextcreationerror", De, !1), Vt.dispose(), S.dispose(), Ee.dispose(), et.dispose(), dt.dispose(), tt.dispose(), W.dispose(), de.dispose(), ze.dispose(), le.dispose(), le.removeEventListener("sessionstart", re), le.removeEventListener("sessionend", ce), O && (O.dispose(), O = null), Pe.stop();
  };
  function fe(y) {
    y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function ue() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const y = Ge.autoReset, I = B.enabled, z = B.autoUpdate, R = B.needsUpdate, V = B.type;
    me(), Ge.autoReset = y, B.enabled = I, B.autoUpdate = z, B.needsUpdate = R, B.type = V;
  }
  function De(y) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage);
  }
  function He(y) {
    const I = y.target;
    I.removeEventListener("dispose", He), $e(I);
  }
  function $e(y) {
    C(y), Ee.remove(y);
  }
  function C(y) {
    const I = Ee.get(y).programs;
    I !== void 0 && (I.forEach(function(z) {
      ze.releaseProgram(z);
    }), y.isShaderMaterial && ze.releaseShaderCache(y));
  }
  this.renderBufferDirect = function(y, I, z, R, V, he) {
    I === null && (I = oe);
    const xe = V.isMesh && V.matrixWorld.determinant() < 0, we = hl(y, I, z, R, V);
    ae.setMaterial(R, xe);
    let be = z.index;
    const Ie = z.attributes.position;
    if (be === null) {
      if (Ie === void 0 || Ie.count === 0)
        return;
    } else if (be.count === 0)
      return;
    let Ae = 1;
    R.wireframe === !0 && (be = Ft.getWireframeAttribute(z), Ae = 2), W.setup(V, R, we, z, be);
    let Le, Xe = ie;
    be !== null && (Le = rt.get(be), Xe = _e, Xe.setIndex(Le));
    const xn = be !== null ? be.count : Ie.count, kn = z.drawRange.start * Ae, Gn = z.drawRange.count * Ae, Ot = he !== null ? he.start * Ae : 0, Ne = he !== null ? he.count * Ae : 1 / 0, Vn = Math.max(kn, Ot), qe = Math.min(xn, kn + Gn, Ot + Ne) - 1, Mt = Math.max(0, qe - Vn + 1);
    if (Mt !== 0) {
      if (V.isMesh)
        R.wireframe === !0 ? (ae.setLineWidth(R.wireframeLinewidth * ve()), Xe.setMode(1)) : Xe.setMode(4);
      else if (V.isLine) {
        let nn = R.linewidth;
        nn === void 0 && (nn = 1), ae.setLineWidth(nn * ve()), V.isLineSegments ? Xe.setMode(1) : V.isLineLoop ? Xe.setMode(2) : Xe.setMode(3);
      } else
        V.isPoints ? Xe.setMode(0) : V.isSprite && Xe.setMode(4);
      if (V.isInstancedMesh)
        Xe.renderInstances(Vn, Mt, V.count);
      else if (z.isInstancedBufferGeometry) {
        const nn = Math.min(z.instanceCount, z._maxInstanceCount);
        Xe.renderInstances(Vn, Mt, nn);
      } else
        Xe.render(Vn, Mt);
    }
  }, this.compile = function(y, I) {
    function z(R, V, he) {
      R.transparent === !0 && R.side === Jt ? (R.side = Et, R.needsUpdate = !0, vt(R, V, he), R.side = In, R.needsUpdate = !0, vt(R, V, he), R.side = Jt) : vt(R, V, he);
    }
    d = S.get(y), d.init(), g.push(d), y.traverseVisible(function(R) {
      R.isLight && R.layers.test(I.layers) && (d.pushLight(R), R.castShadow && d.pushShadow(R));
    }), d.setupLights(p.physicallyCorrectLights), y.traverse(function(R) {
      const V = R.material;
      if (V)
        if (Array.isArray(V))
          for (let he = 0; he < V.length; he++) {
            const xe = V[he];
            z(xe, y, R);
          }
        else
          z(V, y, R);
    }), g.pop(), d = null;
  };
  let k = null;
  function K(y) {
    k && k(y);
  }
  function re() {
    Pe.stop();
  }
  function ce() {
    Pe.start();
  }
  const Pe = new Yo();
  Pe.setAnimationLoop(K), typeof self < "u" && Pe.setContext(self), this.setAnimationLoop = function(y) {
    k = y, le.setAnimationLoop(y), y === null ? Pe.stop() : Pe.start();
  }, le.addEventListener("sessionstart", re), le.addEventListener("sessionend", ce), this.render = function(y, I) {
    if (I !== void 0 && I.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0)
      return;
    y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), le.enabled === !0 && le.isPresenting === !0 && (le.cameraAutoUpdate === !0 && le.updateCamera(I), I = le.getCamera()), y.isScene === !0 && y.onBeforeRender(p, y, I, b), d = S.get(y, g.length), d.init(), g.push(d), te.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), $.setFromProjectionMatrix(te), P = this.localClippingEnabled, H = M.init(this.clippingPlanes, P, I), h = Vt.get(y, m.length), h.init(), m.push(h), Je(y, I, 0, p.sortObjects), h.finish(), p.sortObjects === !0 && h.sort(J, U), H === !0 && M.beginShadows();
    const z = d.state.shadowsArray;
    if (B.render(z, y, I), H === !0 && M.endShadows(), this.info.autoReset === !0 && this.info.reset(), Z.render(h, y), d.setupLights(p.physicallyCorrectLights), I.isArrayCamera) {
      const R = I.cameras;
      for (let V = 0, he = R.length; V < he; V++) {
        const xe = R[V];
        it(h, y, xe, xe.viewport);
      }
    } else
      it(h, y, I);
    b !== null && (pe.updateMultisampleRenderTarget(b), pe.updateRenderTargetMipmap(b)), y.isScene === !0 && y.onAfterRender(p, y, I), W.resetDefaultState(), v = -1, T = null, g.pop(), g.length > 0 ? d = g[g.length - 1] : d = null, m.pop(), m.length > 0 ? h = m[m.length - 1] : h = null;
  };
  function Je(y, I, z, R) {
    if (y.visible === !1)
      return;
    if (y.layers.test(I.layers)) {
      if (y.isGroup)
        z = y.renderOrder;
      else if (y.isLOD)
        y.autoUpdate === !0 && y.update(I);
      else if (y.isLight)
        d.pushLight(y), y.castShadow && d.pushShadow(y);
      else if (y.isSprite) {
        if (!y.frustumCulled || $.intersectsSprite(y)) {
          R && ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(te);
          const xe = tt.update(y), we = y.material;
          we.visible && h.push(y, xe, we, z, ne.z, null);
        }
      } else if ((y.isMesh || y.isLine || y.isPoints) && (y.isSkinnedMesh && y.skeleton.frame !== Ge.render.frame && (y.skeleton.update(), y.skeleton.frame = Ge.render.frame), !y.frustumCulled || $.intersectsObject(y))) {
        R && ne.setFromMatrixPosition(y.matrixWorld).applyMatrix4(te);
        const xe = tt.update(y), we = y.material;
        if (Array.isArray(we)) {
          const be = xe.groups;
          for (let Ie = 0, Ae = be.length; Ie < Ae; Ie++) {
            const Le = be[Ie], Xe = we[Le.materialIndex];
            Xe && Xe.visible && h.push(y, xe, Xe, z, ne.z, Le);
          }
        } else
          we.visible && h.push(y, xe, we, z, ne.z, null);
      }
    }
    const he = y.children;
    for (let xe = 0, we = he.length; xe < we; xe++)
      Je(he[xe], I, z, R);
  }
  function it(y, I, z, R) {
    const V = y.opaque, he = y.transmissive, xe = y.transparent;
    d.setupLightsView(z), he.length > 0 && _n(V, I, z), R && ae.viewport(A.copy(R)), V.length > 0 && We(V, I, z), he.length > 0 && We(he, I, z), xe.length > 0 && We(xe, I, z), ae.buffers.depth.setTest(!0), ae.buffers.depth.setMask(!0), ae.buffers.color.setMask(!0), ae.setPolygonOffset(!1);
  }
  function _n(y, I, z) {
    const R = Me.isWebGL2;
    O === null && (O = new On(1, 1, {
      generateMipmaps: !0,
      type: ge.has("EXT_color_buffer_half_float") ? Oi : Nn,
      minFilter: pi,
      samples: R && s === !0 ? 4 : 0
    })), p.getDrawingBufferSize(Y), R ? O.setSize(Y.x, Y.y) : O.setSize(Ms(Y.x), Ms(Y.y));
    const V = p.getRenderTarget();
    p.setRenderTarget(O), p.clear();
    const he = p.toneMapping;
    p.toneMapping = en, We(y, I, z), p.toneMapping = he, pe.updateMultisampleRenderTarget(O), pe.updateRenderTargetMipmap(O), p.setRenderTarget(V);
  }
  function We(y, I, z) {
    const R = I.isScene === !0 ? I.overrideMaterial : null;
    for (let V = 0, he = y.length; V < he; V++) {
      const xe = y[V], we = xe.object, be = xe.geometry, Ie = R === null ? xe.material : R, Ae = xe.group;
      we.layers.test(z.layers) && Ht(we, I, z, be, Ie, Ae);
    }
  }
  function Ht(y, I, z, R, V, he) {
    y.onBeforeRender(p, I, z, R, V, he), y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), V.onBeforeRender(p, I, z, R, y, he), V.transparent === !0 && V.side === Jt ? (V.side = Et, V.needsUpdate = !0, p.renderBufferDirect(z, I, R, V, y, he), V.side = In, V.needsUpdate = !0, p.renderBufferDirect(z, I, R, V, y, he), V.side = Jt) : p.renderBufferDirect(z, I, R, V, y, he), y.onAfterRender(p, I, z, R, V, he);
  }
  function vt(y, I, z) {
    I.isScene !== !0 && (I = oe);
    const R = Ee.get(y), V = d.state.lights, he = d.state.shadowsArray, xe = V.state.version, we = ze.getParameters(y, V.state, he, I, z), be = ze.getProgramCacheKey(we);
    let Ie = R.programs;
    R.environment = y.isMeshStandardMaterial ? I.environment : null, R.fog = I.fog, R.envMap = (y.isMeshStandardMaterial ? dt : et).get(y.envMap || R.environment), Ie === void 0 && (y.addEventListener("dispose", He), Ie = /* @__PURE__ */ new Map(), R.programs = Ie);
    let Ae = Ie.get(be);
    if (Ae !== void 0) {
      if (R.currentProgram === Ae && R.lightsStateVersion === xe)
        return zr(y, we), Ae;
    } else
      we.uniforms = ze.getUniforms(y), y.onBuild(z, we, p), y.onBeforeCompile(we, p), Ae = ze.acquireProgram(we, be), Ie.set(be, Ae), R.uniforms = we.uniforms;
    const Le = R.uniforms;
    (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Le.clippingPlanes = M.uniform), zr(y, we), R.needsLights = fl(y), R.lightsStateVersion = xe, R.needsLights && (Le.ambientLightColor.value = V.state.ambient, Le.lightProbe.value = V.state.probe, Le.directionalLights.value = V.state.directional, Le.directionalLightShadows.value = V.state.directionalShadow, Le.spotLights.value = V.state.spot, Le.spotLightShadows.value = V.state.spotShadow, Le.rectAreaLights.value = V.state.rectArea, Le.ltc_1.value = V.state.rectAreaLTC1, Le.ltc_2.value = V.state.rectAreaLTC2, Le.pointLights.value = V.state.point, Le.pointLightShadows.value = V.state.pointShadow, Le.hemisphereLights.value = V.state.hemi, Le.directionalShadowMap.value = V.state.directionalShadowMap, Le.directionalShadowMatrix.value = V.state.directionalShadowMatrix, Le.spotShadowMap.value = V.state.spotShadowMap, Le.spotLightMatrix.value = V.state.spotLightMatrix, Le.spotLightMap.value = V.state.spotLightMap, Le.pointShadowMap.value = V.state.pointShadowMap, Le.pointShadowMatrix.value = V.state.pointShadowMatrix);
    const Xe = Ae.getUniforms(), xn = xs.seqWithValue(Xe.seq, Le);
    return R.currentProgram = Ae, R.uniformsList = xn, Ae;
  }
  function zr(y, I) {
    const z = Ee.get(y);
    z.outputEncoding = I.outputEncoding, z.instancing = I.instancing, z.skinning = I.skinning, z.morphTargets = I.morphTargets, z.morphNormals = I.morphNormals, z.morphColors = I.morphColors, z.morphTargetsCount = I.morphTargetsCount, z.numClippingPlanes = I.numClippingPlanes, z.numIntersection = I.numClipIntersection, z.vertexAlphas = I.vertexAlphas, z.vertexTangents = I.vertexTangents, z.toneMapping = I.toneMapping;
  }
  function hl(y, I, z, R, V) {
    I.isScene !== !0 && (I = oe), pe.resetTextureUnits();
    const he = I.fog, xe = R.isMeshStandardMaterial ? I.environment : null, we = b === null ? p.outputEncoding : b.isXRRenderTarget === !0 ? b.texture.encoding : Fn, be = (R.isMeshStandardMaterial ? dt : et).get(R.envMap || xe), Ie = R.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, Ae = !!R.normalMap && !!z.attributes.tangent, Le = !!z.morphAttributes.position, Xe = !!z.morphAttributes.normal, xn = !!z.morphAttributes.color, kn = R.toneMapped ? p.toneMapping : en, Gn = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, Ot = Gn !== void 0 ? Gn.length : 0, Ne = Ee.get(R), Vn = d.state.lights;
    if (H === !0 && (P === !0 || y !== T)) {
      const mt = y === T && R.id === v;
      M.setState(R, y, mt);
    }
    let qe = !1;
    R.version === Ne.__version ? (Ne.needsLights && Ne.lightsStateVersion !== Vn.state.version || Ne.outputEncoding !== we || V.isInstancedMesh && Ne.instancing === !1 || !V.isInstancedMesh && Ne.instancing === !0 || V.isSkinnedMesh && Ne.skinning === !1 || !V.isSkinnedMesh && Ne.skinning === !0 || Ne.envMap !== be || R.fog === !0 && Ne.fog !== he || Ne.numClippingPlanes !== void 0 && (Ne.numClippingPlanes !== M.numPlanes || Ne.numIntersection !== M.numIntersection) || Ne.vertexAlphas !== Ie || Ne.vertexTangents !== Ae || Ne.morphTargets !== Le || Ne.morphNormals !== Xe || Ne.morphColors !== xn || Ne.toneMapping !== kn || Me.isWebGL2 === !0 && Ne.morphTargetsCount !== Ot) && (qe = !0) : (qe = !0, Ne.__version = R.version);
    let Mt = Ne.currentProgram;
    qe === !0 && (Mt = vt(R, I, V));
    let nn = !1, bi = !1, Ts = !1;
    const at = Mt.getUniforms(), vn = Ne.uniforms;
    if (ae.useProgram(Mt.program) && (nn = !0, bi = !0, Ts = !0), R.id !== v && (v = R.id, bi = !0), nn || T !== y) {
      if (at.setValue(X, "projectionMatrix", y.projectionMatrix), Me.logarithmicDepthBuffer && at.setValue(
        X,
        "logDepthBufFC",
        2 / (Math.log(y.far + 1) / Math.LN2)
      ), T !== y && (T = y, bi = !0, Ts = !0), R.isShaderMaterial || R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshStandardMaterial || R.envMap) {
        const mt = at.map.cameraPosition;
        mt !== void 0 && mt.setValue(
          X,
          ne.setFromMatrixPosition(y.matrixWorld)
        );
      }
      (R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshLambertMaterial || R.isMeshBasicMaterial || R.isMeshStandardMaterial || R.isShaderMaterial) && at.setValue(X, "isOrthographic", y.isOrthographicCamera === !0), (R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshLambertMaterial || R.isMeshBasicMaterial || R.isMeshStandardMaterial || R.isShaderMaterial || R.isShadowMaterial || V.isSkinnedMesh) && at.setValue(X, "viewMatrix", y.matrixWorldInverse);
    }
    if (V.isSkinnedMesh) {
      at.setOptional(X, V, "bindMatrix"), at.setOptional(X, V, "bindMatrixInverse");
      const mt = V.skeleton;
      mt && (Me.floatVertexTextures ? (mt.boneTexture === null && mt.computeBoneTexture(), at.setValue(X, "boneTexture", mt.boneTexture, pe), at.setValue(X, "boneTextureSize", mt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Es = z.morphAttributes;
    if ((Es.position !== void 0 || Es.normal !== void 0 || Es.color !== void 0 && Me.isWebGL2 === !0) && Q.update(V, z, R, Mt), (bi || Ne.receiveShadow !== V.receiveShadow) && (Ne.receiveShadow = V.receiveShadow, at.setValue(X, "receiveShadow", V.receiveShadow)), R.isMeshGouraudMaterial && R.envMap !== null && (vn.envMap.value = be, vn.flipEnvMap.value = be.isCubeTexture && be.isRenderTargetTexture === !1 ? -1 : 1), bi && (at.setValue(X, "toneMappingExposure", p.toneMappingExposure), Ne.needsLights && dl(vn, Ts), he && R.fog === !0 && Gt.refreshFogUniforms(vn, he), Gt.refreshMaterialUniforms(vn, R, j, F, O), xs.upload(X, Ne.uniformsList, vn, pe)), R.isShaderMaterial && R.uniformsNeedUpdate === !0 && (xs.upload(X, Ne.uniformsList, vn, pe), R.uniformsNeedUpdate = !1), R.isSpriteMaterial && at.setValue(X, "center", V.center), at.setValue(X, "modelViewMatrix", V.modelViewMatrix), at.setValue(X, "normalMatrix", V.normalMatrix), at.setValue(X, "modelMatrix", V.matrixWorld), R.isShaderMaterial || R.isRawShaderMaterial) {
      const mt = R.uniformsGroups;
      for (let As = 0, pl = mt.length; As < pl; As++)
        if (Me.isWebGL2) {
          const Br = mt[As];
          de.update(Br, Mt), de.bind(Br, Mt);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return Mt;
  }
  function dl(y, I) {
    y.ambientLightColor.needsUpdate = I, y.lightProbe.needsUpdate = I, y.directionalLights.needsUpdate = I, y.directionalLightShadows.needsUpdate = I, y.pointLights.needsUpdate = I, y.pointLightShadows.needsUpdate = I, y.spotLights.needsUpdate = I, y.spotLightShadows.needsUpdate = I, y.rectAreaLights.needsUpdate = I, y.hemisphereLights.needsUpdate = I;
  }
  function fl(y) {
    return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return w;
  }, this.getRenderTarget = function() {
    return b;
  }, this.setRenderTargetTextures = function(y, I, z) {
    Ee.get(y.texture).__webglTexture = I, Ee.get(y.depthTexture).__webglTexture = z;
    const R = Ee.get(y);
    R.__hasExternalTextures = !0, R.__hasExternalTextures && (R.__autoAllocateDepthBuffer = z === void 0, R.__autoAllocateDepthBuffer || ge.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), R.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(y, I) {
    const z = Ee.get(y);
    z.__webglFramebuffer = I, z.__useDefaultFramebuffer = I === void 0;
  }, this.setRenderTarget = function(y, I = 0, z = 0) {
    b = y, _ = I, w = z;
    let R = !0, V = null, he = !1, xe = !1;
    if (y) {
      const be = Ee.get(y);
      be.__useDefaultFramebuffer !== void 0 ? (ae.bindFramebuffer(36160, null), R = !1) : be.__webglFramebuffer === void 0 ? pe.setupRenderTarget(y) : be.__hasExternalTextures && pe.rebindTextures(y, Ee.get(y.texture).__webglTexture, Ee.get(y.depthTexture).__webglTexture);
      const Ie = y.texture;
      (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (xe = !0);
      const Ae = Ee.get(y).__webglFramebuffer;
      y.isWebGLCubeRenderTarget ? (V = Ae[I], he = !0) : Me.isWebGL2 && y.samples > 0 && pe.useMultisampledRTT(y) === !1 ? V = Ee.get(y).__webglMultisampledFramebuffer : V = Ae, A.copy(y.viewport), D.copy(y.scissor), x = y.scissorTest;
    } else
      A.copy(N).multiplyScalar(j).floor(), D.copy(G).multiplyScalar(j).floor(), x = q;
    if (ae.bindFramebuffer(36160, V) && Me.drawBuffers && R && ae.drawBuffers(y, V), ae.viewport(A), ae.scissor(D), ae.setScissorTest(x), he) {
      const be = Ee.get(y.texture);
      X.framebufferTexture2D(36160, 36064, 34069 + I, be.__webglTexture, z);
    } else if (xe) {
      const be = Ee.get(y.texture), Ie = I || 0;
      X.framebufferTextureLayer(36160, 36064, be.__webglTexture, z || 0, Ie);
    }
    v = -1;
  }, this.readRenderTargetPixels = function(y, I, z, R, V, he, xe) {
    if (!(y && y.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let we = Ee.get(y).__webglFramebuffer;
    if (y.isWebGLCubeRenderTarget && xe !== void 0 && (we = we[xe]), we) {
      ae.bindFramebuffer(36160, we);
      try {
        const be = y.texture, Ie = be.format, Ae = be.type;
        if (Ie !== wt && se.convert(Ie) !== X.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Le = Ae === Oi && (ge.has("EXT_color_buffer_half_float") || Me.isWebGL2 && ge.has("EXT_color_buffer_float"));
        if (Ae !== Nn && se.convert(Ae) !== X.getParameter(35738) && !(Ae === fn && (Me.isWebGL2 || ge.has("OES_texture_float") || ge.has("WEBGL_color_buffer_float"))) && !Le) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        I >= 0 && I <= y.width - R && z >= 0 && z <= y.height - V && X.readPixels(I, z, R, V, se.convert(Ie), se.convert(Ae), he);
      } finally {
        const be = b !== null ? Ee.get(b).__webglFramebuffer : null;
        ae.bindFramebuffer(36160, be);
      }
    }
  }, this.copyFramebufferToTexture = function(y, I, z = 0) {
    const R = Math.pow(2, -z), V = Math.floor(I.image.width * R), he = Math.floor(I.image.height * R);
    pe.setTexture2D(I, 0), X.copyTexSubImage2D(3553, z, 0, 0, y.x, y.y, V, he), ae.unbindTexture();
  }, this.copyTextureToTexture = function(y, I, z, R = 0) {
    const V = I.image.width, he = I.image.height, xe = se.convert(z.format), we = se.convert(z.type);
    pe.setTexture2D(z, 0), X.pixelStorei(37440, z.flipY), X.pixelStorei(37441, z.premultiplyAlpha), X.pixelStorei(3317, z.unpackAlignment), I.isDataTexture ? X.texSubImage2D(3553, R, y.x, y.y, V, he, xe, we, I.image.data) : I.isCompressedTexture ? X.compressedTexSubImage2D(3553, R, y.x, y.y, I.mipmaps[0].width, I.mipmaps[0].height, xe, I.mipmaps[0].data) : X.texSubImage2D(3553, R, y.x, y.y, xe, we, I.image), R === 0 && z.generateMipmaps && X.generateMipmap(3553), ae.unbindTexture();
  }, this.copyTextureToTexture3D = function(y, I, z, R, V = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const he = y.max.x - y.min.x + 1, xe = y.max.y - y.min.y + 1, we = y.max.z - y.min.z + 1, be = se.convert(R.format), Ie = se.convert(R.type);
    let Ae;
    if (R.isData3DTexture)
      pe.setTexture3D(R, 0), Ae = 32879;
    else if (R.isDataArrayTexture)
      pe.setTexture2DArray(R, 0), Ae = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    X.pixelStorei(37440, R.flipY), X.pixelStorei(37441, R.premultiplyAlpha), X.pixelStorei(3317, R.unpackAlignment);
    const Le = X.getParameter(3314), Xe = X.getParameter(32878), xn = X.getParameter(3316), kn = X.getParameter(3315), Gn = X.getParameter(32877), Ot = z.isCompressedTexture ? z.mipmaps[0] : z.image;
    X.pixelStorei(3314, Ot.width), X.pixelStorei(32878, Ot.height), X.pixelStorei(3316, y.min.x), X.pixelStorei(3315, y.min.y), X.pixelStorei(32877, y.min.z), z.isDataTexture || z.isData3DTexture ? X.texSubImage3D(Ae, V, I.x, I.y, I.z, he, xe, we, be, Ie, Ot.data) : z.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), X.compressedTexSubImage3D(Ae, V, I.x, I.y, I.z, he, xe, we, be, Ot.data)) : X.texSubImage3D(Ae, V, I.x, I.y, I.z, he, xe, we, be, Ie, Ot), X.pixelStorei(3314, Le), X.pixelStorei(32878, Xe), X.pixelStorei(3316, xn), X.pixelStorei(3315, kn), X.pixelStorei(32877, Gn), V === 0 && R.generateMipmaps && X.generateMipmap(Ae), ae.unbindTexture();
  }, this.initTexture = function(y) {
    y.isCubeTexture ? pe.setTextureCube(y, 0) : y.isData3DTexture ? pe.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? pe.setTexture2DArray(y, 0) : pe.setTexture2D(y, 0), ae.unbindTexture();
  }, this.resetState = function() {
    _ = 0, w = 0, b = null, ae.reset(), W.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class bp extends Qo {
}
bp.prototype.isWebGL1Renderer = !0;
class Sp extends Ve {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class wp {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = pr, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = It();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = It()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = It()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const ot = /* @__PURE__ */ new L();
class Rr {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0;
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
      ot.fromBufferAttribute(this, t), ot.applyMatrix4(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyNormalMatrix(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.transformDirection(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Be(t, this.array), n = Be(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Be(t, this.array), n = Be(n, this.array), i = Be(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Be(t, this.array), n = Be(n, this.array), i = Be(i, this.array), s = Be(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new pt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Rr(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");
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
const Za = /* @__PURE__ */ new L(), $a = /* @__PURE__ */ new ke(), Ja = /* @__PURE__ */ new ke(), Tp = /* @__PURE__ */ new L(), Qa = /* @__PURE__ */ new Ce();
class Ep extends xt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ce(), this.bindMatrixInverse = new Ce();
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new ke(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    $a.fromBufferAttribute(i.attributes.skinIndex, e), Ja.fromBufferAttribute(i.attributes.skinWeight, e), Za.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const r = Ja.getComponent(s);
      if (r !== 0) {
        const a = $a.getComponent(s);
        Qa.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Tp.copy(Za).applyMatrix4(Qa), r);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class el extends Ve {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Ap extends ht {
  constructor(e = null, t = 1, n = 1, i, s, r, a, l, c = nt, u = nt, h, d) {
    super(null, r, a, l, c, u, i, s, h, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const eo = /* @__PURE__ */ new Ce(), Cp = /* @__PURE__ */ new Ce();
class Dr {
  constructor(e = [], t = []) {
    this.uuid = It(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ce());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ce();
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
    for (let s = 0, r = e.length; s < r; s++) {
      const a = e[s] ? e[s].matrixWorld : Cp;
      eo.multiplyMatrices(a, t[s]), eo.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Dr(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Uo(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Ap(t, e, e, wt, fn);
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
      let r = t[s];
      r === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), r = new el()), this.bones.push(r), this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      e.bones.push(r.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class to extends pt {
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
const no = /* @__PURE__ */ new Ce(), io = /* @__PURE__ */ new Ce(), ds = [], Lp = /* @__PURE__ */ new Ce(), Ai = /* @__PURE__ */ new xt();
class Rp extends xt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new to(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Lp);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Ai.geometry = this.geometry, Ai.material = this.material, Ai.material !== void 0)
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, no), io.multiplyMatrices(n, no), Ai.matrixWorld = io, Ai.raycast(e, ds);
        for (let r = 0, a = ds.length; r < a; r++) {
          const l = ds[r];
          l.instanceId = s, l.object = this, t.push(l);
        }
        ds.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new to(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
class tl extends zt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ye(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const so = /* @__PURE__ */ new L(), ro = /* @__PURE__ */ new L(), ao = /* @__PURE__ */ new Ce(), rr = /* @__PURE__ */ new Tr(), fs = /* @__PURE__ */ new _i();
class Pr extends Ve {
  constructor(e = new Bt(), t = new tl()) {
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
        so.fromBufferAttribute(t, i - 1), ro.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += so.distanceTo(ro);
      e.setAttribute("lineDistance", new tn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), fs.copy(n.boundingSphere), fs.applyMatrix4(i), fs.radius += s, e.ray.intersectsSphere(fs) === !1)
      return;
    ao.copy(i).invert(), rr.copy(e.ray).applyMatrix4(ao);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new L(), u = new L(), h = new L(), d = new L(), m = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, r.start), w = Math.min(g.count, r.start + r.count);
      for (let b = _, v = w - 1; b < v; b += m) {
        const T = g.getX(b), A = g.getX(b + 1);
        if (c.fromBufferAttribute(f, T), u.fromBufferAttribute(f, A), rr.distanceSqToSegment(c, u, d, h) > l)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(d);
        x < e.near || x > e.far || t.push({
          distance: x,
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: b,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const _ = Math.max(0, r.start), w = Math.min(f.count, r.start + r.count);
      for (let b = _, v = w - 1; b < v; b += m) {
        if (c.fromBufferAttribute(f, b), u.fromBufferAttribute(f, b + 1), rr.distanceSqToSegment(c, u, d, h) > l)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const A = e.ray.origin.distanceTo(d);
        A < e.near || A > e.far || t.push({
          distance: A,
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: b,
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
        for (let s = 0, r = i.length; s < r; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const oo = /* @__PURE__ */ new L(), lo = /* @__PURE__ */ new L();
class Dp extends Pr {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        oo.fromBufferAttribute(t, i), lo.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + oo.distanceTo(lo);
      e.setAttribute("lineDistance", new tn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Pp extends Pr {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class nl extends zt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ye(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const co = /* @__PURE__ */ new Ce(), xr = /* @__PURE__ */ new Tr(), ps = /* @__PURE__ */ new _i(), ms = /* @__PURE__ */ new L();
class Ip extends Ve {
  constructor(e = new Bt(), t = new nl()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ps.copy(n.boundingSphere), ps.applyMatrix4(i), ps.radius += s, e.ray.intersectsSphere(ps) === !1)
      return;
    co.copy(i).invert(), xr.copy(e.ray).applyMatrix4(co);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, r.start), m = Math.min(c.count, r.start + r.count);
      for (let g = d, p = m; g < p; g++) {
        const f = c.getX(g);
        ms.fromBufferAttribute(h, f), uo(ms, f, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, r.start), m = Math.min(h.count, r.start + r.count);
      for (let g = d, p = m; g < p; g++)
        ms.fromBufferAttribute(h, g), uo(ms, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function uo(o, e, t, n, i, s, r) {
  const a = xr.distanceSqToPoint(o);
  if (a < t) {
    const l = new L();
    xr.closestPointToPoint(o, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far)
      return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: e,
      face: null,
      object: r
    });
  }
}
class ws extends zt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ye(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ye(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Sr, this.normalScale = new Re(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Bn extends ws {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Re(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return ct(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new ye(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ye(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ye(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
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
    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function hn(o, e, t) {
  return il(o) ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length)) : o.slice(e, t);
}
function gs(o, e, t) {
  return !o || !t && o.constructor === e ? o : typeof e.BYTES_PER_ELEMENT == "number" ? new e(o) : Array.prototype.slice.call(o);
}
function il(o) {
  return ArrayBuffer.isView(o) && !(o instanceof DataView);
}
function Np(o) {
  function e(i, s) {
    return o[i] - o[s];
  }
  const t = o.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function ho(o, e, t) {
  const n = o.length, i = new o.constructor(n);
  for (let s = 0, r = 0; r !== n; ++s) {
    const a = t[s] * e;
    for (let l = 0; l !== e; ++l)
      i[r++] = o[a + l];
  }
  return i;
}
function sl(o, e, t, n) {
  let i = 1, s = o[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = o[i++];
  if (s === void 0)
    return;
  let r = s[n];
  if (r !== void 0)
    if (Array.isArray(r))
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push.apply(t, r)), s = o[i++];
      while (s !== void 0);
    else if (r.toArray !== void 0)
      do
        r = s[n], r !== void 0 && (e.push(s.time), r.toArray(t, t.length)), s = o[i++];
      while (s !== void 0);
    else
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push(r)), s = o[i++];
      while (s !== void 0);
}
class Wi {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let r;
        t: {
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
                  break e;
              }
              r = t.length;
              break t;
            }
          if (!(e >= s)) {
            const a = t[1];
            e < a && (n = 2, s = a);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l)
                break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            r = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < r; ) {
          const a = n + r >>> 1;
          e < t[a] ? r = a : n = a + 1;
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
    for (let r = 0; r !== i; ++r)
      t[r] = n[s + r];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Fp extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: fa,
      endingEnd: fa
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, r = e + 1, a = i[s], l = i[r];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case pa:
          s = e, a = 2 * t - n;
          break;
        case ma:
          s = i.length - 2, a = t + i[s] - i[s + 1];
          break;
        default:
          s = e, a = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case pa:
          r = e, l = 2 * n - t;
          break;
        case ma:
          r = 1, l = n + i[1] - i[0];
          break;
        default:
          r = e - 1, l = t;
      }
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = s * u, this._offsetNext = r * u;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), p = g * g, f = p * g, _ = -d * f + 2 * d * p - d * g, w = (1 + d) * f + (-1.5 - 2 * d) * p + (-0.5 + d) * g + 1, b = (-1 - m) * f + (1.5 + m) * p + 0.5 * g, v = m * f - m * p;
    for (let T = 0; T !== a; ++T)
      s[T] = _ * r[u + T] + w * r[c + T] + b * r[l + T] + v * r[h + T];
    return s;
  }
}
class Op extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (n - t) / (i - t), h = 1 - u;
    for (let d = 0; d !== a; ++d)
      s[d] = r[c + d] * h + r[l + d] * u;
    return s;
  }
}
class Up extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class kt {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = gs(t, this.TimeBufferType), this.values = gs(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: gs(e.times, Array),
        values: gs(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Up(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Op(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Fp(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Ui:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case hi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ps:
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
        return Ui;
      case this.InterpolantFactoryMethodLinear:
        return hi;
      case this.InterpolantFactoryMethodSmooth:
        return Ps;
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
    let s = 0, r = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; r !== -1 && n[r] > t; )
      --r;
    if (++r, s !== 0 || r !== i) {
      s >= r && (r = Math.max(r, 1), s = r - 1);
      const a = this.getValueSize();
      this.times = hn(n, s, r), this.values = hn(this.values, s * a, r * a);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let r = null;
    for (let a = 0; a !== s; a++) {
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1;
        break;
      }
      if (r !== null && r > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, r), e = !1;
        break;
      }
      r = l;
    }
    if (i !== void 0 && il(i))
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
    const e = hn(this.times), t = hn(this.values), n = this.getValueSize(), i = this.getInterpolation() === Ps, s = e.length - 1;
    let r = 1;
    for (let a = 1; a < s; ++a) {
      let l = !1;
      const c = e[a], u = e[a + 1];
      if (c !== u && (a !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const h = a * n, d = h - n, m = h + n;
          for (let g = 0; g !== n; ++g) {
            const p = t[h + g];
            if (p !== t[d + g] || p !== t[m + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (a !== r) {
          e[r] = e[a];
          const h = a * n, d = r * n;
          for (let m = 0; m !== n; ++m)
            t[d + m] = t[h + m];
        }
        ++r;
      }
    }
    if (s > 0) {
      e[r] = e[s];
      for (let a = s * n, l = r * n, c = 0; c !== n; ++c)
        t[l + c] = t[a + c];
      ++r;
    }
    return r !== e.length ? (this.times = hn(e, 0, r), this.values = hn(t, 0, r * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = hn(this.times, 0), t = hn(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
kt.prototype.TimeBufferType = Float32Array;
kt.prototype.ValueBufferType = Float32Array;
kt.prototype.DefaultInterpolation = hi;
class Mi extends kt {
}
Mi.prototype.ValueTypeName = "bool";
Mi.prototype.ValueBufferType = Array;
Mi.prototype.DefaultInterpolation = Ui;
Mi.prototype.InterpolantFactoryMethodLinear = void 0;
Mi.prototype.InterpolantFactoryMethodSmooth = void 0;
class rl extends kt {
}
rl.prototype.ValueTypeName = "color";
class ki extends kt {
}
ki.prototype.ValueTypeName = "number";
class zp extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
    let c = e * a;
    for (let u = c + a; c !== u; c += 4)
      gn.slerpFlat(s, 0, r, c - a, r, c, l);
    return s;
  }
}
class zn extends kt {
  InterpolantFactoryMethodLinear(e) {
    return new zp(this.times, this.values, this.getValueSize(), e);
  }
}
zn.prototype.ValueTypeName = "quaternion";
zn.prototype.DefaultInterpolation = hi;
zn.prototype.InterpolantFactoryMethodSmooth = void 0;
class yi extends kt {
}
yi.prototype.ValueTypeName = "string";
yi.prototype.ValueBufferType = Array;
yi.prototype.DefaultInterpolation = Ui;
yi.prototype.InterpolantFactoryMethodLinear = void 0;
yi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Gi extends kt {
}
Gi.prototype.ValueTypeName = "vector";
class Bp {
  constructor(e, t = -1, n, i = ic) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = It(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let r = 0, a = n.length; r !== a; ++r)
      t.push(Gp(n[r]).scale(i));
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
    for (let s = 0, r = n.length; s !== r; ++s)
      t.push(kt.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, r = [];
    for (let a = 0; a < s; a++) {
      let l = [], c = [];
      l.push(
        (a + s - 1) % s,
        a,
        (a + 1) % s
      ), c.push(0, 1, 0);
      const u = Np(l);
      l = ho(l, 1, u), c = ho(c, 1, u), !i && l[0] === 0 && (l.push(s), c.push(c[0])), r.push(
        new ki(
          ".morphTargetInfluences[" + t[a].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, r);
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
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = c.name.match(s);
      if (u && u.length > 1) {
        const h = u[1];
        let d = i[h];
        d || (i[h] = d = []), d.push(c);
      }
    }
    const r = [];
    for (const a in i)
      r.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return r;
  }
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, d, m, g, p) {
      if (m.length !== 0) {
        const f = [], _ = [];
        sl(m, f, _, g), f.length !== 0 && p.push(new h(d, f, _));
      }
    }, i = [], s = e.name || "default", r = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const d = c[h].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const m = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let p = 0; p < d[g].morphTargets.length; p++)
                m[d[g].morphTargets[p]] = -1;
          for (const p in m) {
            const f = [], _ = [];
            for (let w = 0; w !== d[g].morphTargets.length; ++w) {
              const b = d[g];
              f.push(b.time), _.push(b.morphTarget === p ? 1 : 0);
            }
            i.push(new ki(".morphTargetInfluence[" + p + "]", f, _));
          }
          l = m.length * r;
        } else {
          const m = ".bones[" + t[h].name + "]";
          n(
            Gi,
            m + ".position",
            d,
            "pos",
            i
          ), n(
            zn,
            m + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Gi,
            m + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, l, i, a);
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
function kp(o) {
  switch (o.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ki;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Gi;
    case "color":
      return rl;
    case "quaternion":
      return zn;
    case "bool":
    case "boolean":
      return Mi;
    case "string":
      return yi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o);
}
function Gp(o) {
  if (o.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = kp(o.type);
  if (o.times === void 0) {
    const t = [], n = [];
    sl(o.keys, t, n, "value"), o.times = t, o.values = n;
  }
  return e.parse !== void 0 ? e.parse(o) : new e(o.name, o.times, o.values, o.interpolation);
}
const fi = {
  enabled: !1,
  files: {},
  add: function(o, e) {
    this.enabled !== !1 && (this.files[o] = e);
  },
  get: function(o) {
    if (this.enabled !== !1)
      return this.files[o];
  },
  remove: function(o) {
    delete this.files[o];
  },
  clear: function() {
    this.files = {};
  }
};
class Vp {
  constructor(e, t, n) {
    const i = this;
    let s = !1, r = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      a++, s === !1 && i.onStart !== void 0 && i.onStart(u, r, a), s = !0;
    }, this.itemEnd = function(u) {
      r++, i.onProgress !== void 0 && i.onProgress(u, r, a), r === a && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, d = c.length; h < d; h += 2) {
        const m = c[h], g = c[h + 1];
        if (m.global && (m.lastIndex = 0), m.test(u))
          return g;
      }
      return null;
    };
  }
}
const Hp = /* @__PURE__ */ new Vp();
class Xi {
  constructor(e) {
    this.manager = e !== void 0 ? e : Hp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
const Kt = {};
class Wp extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class al extends Xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = fi.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Kt[e] !== void 0) {
      Kt[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Kt[e] = [], Kt[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const r = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), a = this.mimeType, l = this.responseType;
    fetch(r).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const u = Kt[e], h = c.body.getReader(), d = c.headers.get("Content-Length"), m = d ? parseInt(d) : 0, g = m !== 0;
        let p = 0;
        const f = new ReadableStream({
          start(_) {
            w();
            function w() {
              h.read().then(({ done: b, value: v }) => {
                if (b)
                  _.close();
                else {
                  p += v.byteLength;
                  const T = new ProgressEvent("progress", { lengthComputable: g, loaded: p, total: m });
                  for (let A = 0, D = u.length; A < D; A++) {
                    const x = u[A];
                    x.onProgress && x.onProgress(T);
                  }
                  _.enqueue(v), w();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new Wp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, a));
        case "json":
          return c.json();
        default:
          if (a === void 0)
            return c.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(a), d = h && h[1] ? h[1].toLowerCase() : void 0, m = new TextDecoder(d);
            return c.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((c) => {
      fi.add(e, c);
      const u = Kt[e];
      delete Kt[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const m = u[h];
        m.onLoad && m.onLoad(c);
      }
    }).catch((c) => {
      const u = Kt[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete Kt[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const m = u[h];
        m.onError && m.onError(c);
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
class Xp extends Xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = fi.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const a = Bi("img");
    function l() {
      u(), fi.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class qp extends Xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ht(), r = new Xp(this.manager);
    return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class Ir extends Ve {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ye(e), this.intensity = t;
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
const ar = /* @__PURE__ */ new Ce(), fo = /* @__PURE__ */ new L(), po = /* @__PURE__ */ new L();
class Nr {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Re(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ce(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Er(), this._frameExtents = new Re(1, 1), this._viewportCount = 1, this._viewports = [
      new ke(0, 0, 1, 1)
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
    fo.setFromMatrixPosition(e.matrixWorld), t.position.copy(fo), po.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(po), t.updateMatrixWorld(), ar.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ar), n.set(
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
    ), n.multiply(ar);
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
class jp extends Nr {
  constructor() {
    super(new ut(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = zi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Yp extends Ir {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, r = 1) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Ve.DefaultUp), this.updateMatrix(), this.target = new Ve(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = r, this.map = null, this.shadow = new jp();
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
const mo = /* @__PURE__ */ new Ce(), Ci = /* @__PURE__ */ new L(), or = /* @__PURE__ */ new L();
class Kp extends Nr {
  constructor() {
    super(new ut(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Re(4, 2), this._viewportCount = 6, this._viewports = [
      new ke(2, 1, 1, 1),
      new ke(0, 1, 1, 1),
      new ke(3, 1, 1, 1),
      new ke(1, 1, 1, 1),
      new ke(3, 0, 1, 1),
      new ke(1, 0, 1, 1)
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
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Ci.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ci), or.copy(n.position), or.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(or), n.updateMatrixWorld(), i.makeTranslation(-Ci.x, -Ci.y, -Ci.z), mo.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(mo);
  }
}
class Zp extends Ir {
  constructor(e, t, n = 0, i = 1) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Kp();
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
class $p extends Nr {
  constructor() {
    super(new Cr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ol extends Ir {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ve.DefaultUp), this.updateMatrix(), this.target = new Ve(), this.shadow = new $p();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Pn {
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
class Jp extends Xi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = fi.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      fi.add(e, l), t && t(l), s.manager.itemEnd(e);
    }).catch(function(l) {
      i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
const Fr = "\\[\\]\\.:\\/", Qp = new RegExp("[" + Fr + "]", "g"), Or = "[^" + Fr + "]", em = "[^" + Fr.replace("\\.", "") + "]", tm = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Or), nm = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", em), im = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Or), sm = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Or), rm = new RegExp(
  "^" + tm + nm + im + sm + "$"
), am = ["material", "materials", "bones", "map"];
class om {
  constructor(e, t, n) {
    const i = n || Oe.parseTrackName(t);
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
class Oe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Oe.parseTrackName(t), this.node = Oe.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Oe.Composite(e, t, n) : new Oe(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Qp, "");
  }
  static parseTrackName(e) {
    const t = rm.exec(e);
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
      am.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
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
        for (let r = 0; r < s.length; r++) {
          const a = s[r];
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
    if (e || (e = Oe.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
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
          for (let u = 0; u < e.length; u++)
            if (e[u].name === c) {
              c = u;
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
    const r = e[i];
    if (r === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
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
      l = this.BindingType.ArrayElement, this.resolvedProperty = r, this.propertyIndex = s;
    } else
      r.fromArray !== void 0 && r.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = r) : Array.isArray(r) ? (l = this.BindingType.EntireArray, this.resolvedProperty = r) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Oe.Composite = om;
Oe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Oe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Oe.prototype.GetterByBindingType = [
  Oe.prototype._getValue_direct,
  Oe.prototype._getValue_array,
  Oe.prototype._getValue_arrayElement,
  Oe.prototype._getValue_toArray
];
Oe.prototype.SetterByBindingTypeAndVersioning = [
  [
    Oe.prototype._setValue_direct,
    Oe.prototype._setValue_direct_setNeedsUpdate,
    Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    Oe.prototype._setValue_array,
    Oe.prototype._setValue_array_setNeedsUpdate,
    Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    Oe.prototype._setValue_arrayElement,
    Oe.prototype._setValue_arrayElement_setNeedsUpdate,
    Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    Oe.prototype._setValue_fromArray,
    Oe.prototype._setValue_fromArray_setNeedsUpdate,
    Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: br
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = br);
let Li;
const qi = document.createElement("canvas");
qi.id = "canvas";
qi.width = window.innerWidth;
qi.height = window.innerHeight;
document.body.appendChild(qi);
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.backgroundColor = "#000000";
function go() {
  if (Li === void 0) {
    const o = new Qo({ canvas: qi });
    o.physicallyCorrectLights = !0, o.outputEncoding = Fe, o.toneMapping = Po, o.toneMappingExposure = 1, o.shadowMap.enabled = !0, o.shadowMap.type = Co, Li = new Sp();
    const e = new ol(16777215, 10);
    e.position.set(0, 1, 0), e.castShadow = !0, e.shadow.mapSize.width = 2048, e.shadow.mapSize.height = 2048, e.shadow.camera.near = 0.5, e.shadow.camera.far = 500, Li.add(e);
    const t = new ut(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
    t.position.z = 5;
    const n = function() {
      requestAnimationFrame(n), o.render(Li, t);
    };
    n();
  }
  return Li;
}
var lm = Object.defineProperty, cm = Object.getOwnPropertyDescriptor, Ur = (o, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? cm(e, t) : e, s = o.length - 1, r; s >= 0; s--)
    (r = o[s]) && (i = (n ? r(e, t, i) : r(i)) || i);
  return n && i && lm(e, t, i), i;
};
let ys = class extends wo {
  constructor() {
    super(...arguments), this.docsHint = "Click on the Vite and Lit logos to learn more", this.space = new Ve();
  }
  connectedCallback() {
    super.connectedCallback(), go().add(this.space);
  }
  render() {
    return console.log("space"), go(), To`
    `;
  }
};
Ur([
  Ct()
], ys.prototype, "docsHint", 2);
Ur([
  Ct({ type: Ve })
], ys.prototype, "space", 2);
ys = Ur([
  Eo("mv-space")
], ys);
class um extends Xi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new mm(t);
    }), this.register(function(t) {
      return new bm(t);
    }), this.register(function(t) {
      return new Sm(t);
    }), this.register(function(t) {
      return new _m(t);
    }), this.register(function(t) {
      return new xm(t);
    }), this.register(function(t) {
      return new vm(t);
    }), this.register(function(t) {
      return new Mm(t);
    }), this.register(function(t) {
      return new pm(t);
    }), this.register(function(t) {
      return new ym(t);
    }), this.register(function(t) {
      return new gm(t);
    }), this.register(function(t) {
      return new dm(t);
    }), this.register(function(t) {
      return new wm(t);
    }), this.register(function(t) {
      return new Tm(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let r;
    this.resourcePath !== "" ? r = this.resourcePath : this.path !== "" ? r = this.path : r = Pn.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new al(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, r, function(u) {
          t(u), s.manager.itemEnd(e);
        }, a);
      } catch (u) {
        a(u);
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
    const r = {}, a = {};
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (Pn.decodeText(new Uint8Array(e, 0, 4)) === ll) {
        try {
          r[Te.KHR_BINARY_GLTF] = new Em(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(r[Te.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(Pn.decodeText(new Uint8Array(e)));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Bm(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const u = this.pluginCallbacks[c](l);
      a[u.name] = u, r[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let c = 0; c < s.extensionsUsed.length; ++c) {
        const u = s.extensionsUsed[c], h = s.extensionsRequired || [];
        switch (u) {
          case Te.KHR_MATERIALS_UNLIT:
            r[u] = new fm();
            break;
          case Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            r[u] = new Lm();
            break;
          case Te.KHR_DRACO_MESH_COMPRESSION:
            r[u] = new Am(s, this.dracoLoader);
            break;
          case Te.KHR_TEXTURE_TRANSFORM:
            r[u] = new Cm();
            break;
          case Te.KHR_MESH_QUANTIZATION:
            r[u] = new Rm();
            break;
          default:
            h.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(r), l.setPlugins(a), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function hm() {
  let o = {};
  return {
    get: function(e) {
      return o[e];
    },
    add: function(e, t) {
      o[e] = t;
    },
    remove: function(e) {
      delete o[e];
    },
    removeAll: function() {
      o = {};
    }
  };
}
const Te = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class dm {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new ye(16777215);
    l.color !== void 0 && u.fromArray(l.color);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new ol(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Zp(u), c.distance = h;
        break;
      case "spot":
        c = new Yp(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], a = (s.extensions && s.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class fm {
  constructor() {
    this.name = Te.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return pn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new ye(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const r = s.baseColorFactor;
        e.color.fromArray(r), e.opacity = r[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, Fe));
    }
    return Promise.all(i);
  }
}
class pm {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class mm {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Bn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const a = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Re(a, a);
    }
    return Promise.all(s);
  }
}
class gm {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Bn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class _m {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Bn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new ye(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = i.extensions[this.name];
    return r.sheenColorFactor !== void 0 && t.sheenColor.fromArray(r.sheenColorFactor), r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Fe)), r.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(s);
  }
}
class xm {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Bn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(s);
  }
}
class vm {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Bn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const a = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new ye(a[0], a[1], a[2]), Promise.all(s);
  }
}
class Mm {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Bn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class ym {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Bn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const a = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new ye(a[0], a[1], a[2]), r.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", r.specularColorTexture, Fe)), Promise.all(s);
  }
}
class bm {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, r);
  }
}
class Sm {
  constructor(e) {
    this.parser = e, this.name = Te.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const r = s.extensions[t], a = i.images[r.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, r.source, l);
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
class wm {
  constructor(e) {
    this.name = Te.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(a) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, h = i.byteStride, d = new Uint8Array(a, l, c);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(u, h, d, i.mode, i.filter).then(function(m) {
          return m.buffer;
        }) : r.ready.then(function() {
          const m = new ArrayBuffer(u * h);
          return r.decodeGltfBuffer(new Uint8Array(m), u, h, d, i.mode, i.filter), m;
        });
      });
    } else
      return null;
  }
}
class Tm {
  constructor(e) {
    this.name = Te.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== bt.TRIANGLES && c.mode !== bt.TRIANGLE_STRIP && c.mode !== bt.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in r)
      a.push(this.parser.getDependency("accessor", r[c]).then((u) => (l[c] = u, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], d = c[0].count, m = [];
      for (const g of h) {
        const p = new Ce(), f = new L(), _ = new gn(), w = new L(1, 1, 1), b = new Rp(g.geometry, g.material, d);
        for (let v = 0; v < d; v++)
          l.TRANSLATION && f.fromBufferAttribute(l.TRANSLATION, v), l.ROTATION && _.fromBufferAttribute(l.ROTATION, v), l.SCALE && w.fromBufferAttribute(l.SCALE, v), b.setMatrixAt(v, p.compose(f, _, w));
        for (const v in l)
          v !== "TRANSLATION" && v !== "ROTATION" && v !== "SCALE" && g.geometry.setAttribute(v, l[v]);
        Ve.prototype.copy.call(b, g), b.frustumCulled = !1, this.parser.assignFinalMaterial(b), m.push(b);
      }
      return u.isGroup ? (u.clear(), u.add(...m), u) : m[0];
    }));
  }
}
const ll = "glTF", Ri = 12, _o = { JSON: 1313821514, BIN: 5130562 };
class Em {
  constructor(e) {
    this.name = Te.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Ri);
    if (this.header = {
      magic: Pn.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== ll)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Ri, i = new DataView(e, Ri);
    let s = 0;
    for (; s < n; ) {
      const r = i.getUint32(s, !0);
      s += 4;
      const a = i.getUint32(s, !0);
      if (s += 4, a === _o.JSON) {
        const l = new Uint8Array(e, Ri + s, r);
        this.content = Pn.decodeText(l);
      } else if (a === _o.BIN) {
        const l = Ri + s;
        this.body = e.slice(l, l + r);
      }
      s += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Am {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Te.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in r) {
      const h = Mr[u] || u.toLowerCase();
      a[h] = r[u];
    }
    for (const u in e.attributes) {
      const h = Mr[u] || u.toLowerCase();
      if (r[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], m = Vi[d.componentType];
        c[h] = m.name, l[h] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(u) {
      return new Promise(function(h) {
        i.decodeDracoFile(u, function(d) {
          for (const m in d.attributes) {
            const g = d.attributes[m], p = l[m];
            p !== void 0 && (g.normalized = p);
          }
          h(d);
        }, a, c);
      });
    });
  }
}
class Cm {
  constructor() {
    this.name = Te.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class vr extends ws {
  constructor(e) {
    super(), this.isGLTFSpecularGlossinessMaterial = !0;
    const t = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join(`
`), n = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join(`
`), i = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join(`
`), s = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join(`
`), r = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join(`
`), a = {
      specular: { value: new ye().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = a, this.onBeforeCompile = function(l) {
      for (const c in a)
        l.uniforms[c] = a[c];
      l.fragmentShader = l.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", s).replace("#include <lights_physical_fragment>", r);
    }, Object.defineProperties(this, {
      specular: {
        get: function() {
          return a.specular.value;
        },
        set: function(l) {
          a.specular.value = l;
        }
      },
      specularMap: {
        get: function() {
          return a.specularMap.value;
        },
        set: function(l) {
          a.specularMap.value = l, l ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
        }
      },
      glossiness: {
        get: function() {
          return a.glossiness.value;
        },
        set: function(l) {
          a.glossiness.value = l;
        }
      },
      glossinessMap: {
        get: function() {
          return a.glossinessMap.value;
        },
        set: function(l) {
          a.glossinessMap.value = l, l ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
        }
      }
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}
class Lm {
  constructor() {
    this.name = Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity"
    ];
  }
  getMaterialType() {
    return vr;
  }
  extendParams(e, t, n) {
    const i = t.extensions[this.name];
    e.color = new ye(1, 1, 1), e.opacity = 1;
    const s = [];
    if (Array.isArray(i.diffuseFactor)) {
      const r = i.diffuseFactor;
      e.color.fromArray(r), e.opacity = r[3];
    }
    if (i.diffuseTexture !== void 0 && s.push(n.assignTexture(e, "map", i.diffuseTexture, Fe)), e.emissive = new ye(0, 0, 0), e.glossiness = i.glossinessFactor !== void 0 ? i.glossinessFactor : 1, e.specular = new ye(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), i.specularGlossinessTexture !== void 0) {
      const r = i.specularGlossinessTexture;
      s.push(n.assignTexture(e, "glossinessMap", r)), s.push(n.assignTexture(e, "specularMap", r, Fe));
    }
    return Promise.all(s);
  }
  createMaterial(e) {
    const t = new vr(e);
    return t.fog = !0, t.color = e.color, t.map = e.map === void 0 ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = e.aoMap === void 0 ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = e.emissiveIntensity === void 0 ? 1 : e.emissiveIntensity, t.emissiveMap = e.emissiveMap === void 0 ? null : e.emissiveMap, t.bumpMap = e.bumpMap === void 0 ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = e.normalMap === void 0 ? null : e.normalMap, t.normalMapType = Sr, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = e.specularMap === void 0 ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = e.glossinessMap === void 0 ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = e.envMap === void 0 ? null : e.envMap, t.envMapIntensity = 1, t;
  }
}
class Rm {
  constructor() {
    this.name = Te.KHR_MESH_QUANTIZATION;
  }
}
class cl extends Wi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let r = 0; r !== i; r++)
      t[r] = n[s + r];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = i - t, h = (n - t) / u, d = h * h, m = d * h, g = e * c, p = g - c, f = -2 * m + 3 * d, _ = m - d, w = 1 - f, b = _ - d + h;
    for (let v = 0; v !== a; v++) {
      const T = r[p + v + a], A = r[p + v + l] * u, D = r[g + v + a], x = r[g + v] * u;
      s[v] = w * T + b * A + f * D + _ * x;
    }
    return s;
  }
}
const Dm = new gn();
class Pm extends cl {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return Dm.fromArray(s).normalize().toArray(s), s;
  }
}
const bt = {
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
}, Vi = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, xo = {
  9728: nt,
  9729: ft,
  9984: dr,
  9985: No,
  9986: fr,
  9987: pi
}, vo = {
  33071: St,
  33648: vs,
  10497: ci
}, Mo = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Mr = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, dn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Im = {
  CUBICSPLINE: void 0,
  LINEAR: hi,
  STEP: Ui
}, lr = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Nm(o) {
  return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new ws({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: In
  })), o.DefaultMaterial;
}
function Di(o, e, t) {
  for (const n in t.extensions)
    o[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Tn(o, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(o.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Fm(o, e, t) {
  let n = !1, i = !1, s = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (n = !0), h.NORMAL !== void 0 && (i = !0), h.COLOR_0 !== void 0 && (s = !0), n && i && s)
      break;
  }
  if (!n && !i && !s)
    return Promise.resolve(o);
  const r = [], a = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : o.attributes.position;
      r.push(d);
    }
    if (i) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : o.attributes.normal;
      a.push(d);
    }
    if (s) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : o.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], h = c[1], d = c[2];
    return n && (o.morphAttributes.position = u), i && (o.morphAttributes.normal = h), s && (o.morphAttributes.color = d), o.morphTargetsRelative = !0, o;
  });
}
function Om(o, e) {
  if (o.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      o.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (o.morphTargetInfluences.length === t.length) {
      o.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        o.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Um(o) {
  const e = o.extensions && o.extensions[Te.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + yo(e.attributes) : t = o.indices + ":" + yo(o.attributes) + ":" + o.mode, t;
}
function yo(o) {
  let e = "";
  const t = Object.keys(o).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + o[t[n]] + ";";
  return e;
}
function yr(o) {
  switch (o) {
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
function zm(o) {
  return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
class Bm {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new hm(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    const n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new qp(this.options.manager) : this.textureLoader = new Jp(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new al(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const a = {
        scene: r[0][i.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      Di(s, a, i), Tn(a, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i].joints;
      for (let a = 0, l = r.length; a < l; a++)
        e[r[a]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const i = n.clone(), s = (r, a) => {
      const l = this.associations.get(r);
      l != null && this.associations.set(a, l);
      for (const [c, u] of r.children.entries())
        s(u, a.children[c]);
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
          i = this.loadNode(t);
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
          throw new Error("Unknown type: " + e);
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, r) {
        return n.getDependency(e, r);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Te.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, r) {
      n.load(Pn.resolveURL(t.uri, i.path), s, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
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
    if (i.bufferView === void 0 && i.sparse === void 0)
      return Promise.resolve(null);
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(r) {
      const a = r[0], l = Mo[i.type], c = Vi[i.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, d = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let p, f;
      if (m && m !== h) {
        const _ = Math.floor(d / m), w = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + _ + ":" + i.count;
        let b = t.cache.get(w);
        b || (p = new c(a, _ * m, i.count * m / u), b = new wp(p, m / u), t.cache.add(w, b)), f = new Rr(b, l, d % m / u, g);
      } else
        a === null ? p = new c(i.count * l) : p = new c(a, d, i.count * l), f = new pt(p, l, g);
      if (i.sparse !== void 0) {
        const _ = Mo.SCALAR, w = Vi[i.sparse.indices.componentType], b = i.sparse.indices.byteOffset || 0, v = i.sparse.values.byteOffset || 0, T = new w(r[1], b, i.sparse.count * _), A = new c(r[2], v, i.sparse.count * l);
        a !== null && (f = new pt(f.array.slice(), f.itemSize, f.normalized));
        for (let D = 0, x = T.length; D < x; D++) {
          const E = T[D];
          if (f.setX(E, A[D * l]), l >= 2 && f.setY(E, A[D * l + 1]), l >= 3 && f.setZ(E, A[D * l + 2]), l >= 4 && f.setW(E, A[D * l + 3]), l >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return f;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, r = t.images[s];
    let a = this.textureLoader;
    if (r.uri) {
      const l = n.manager.getHandler(r.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, s, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, r = s.textures[e], a = s.images[t], l = (a.uri || a.bufferView) + ":" + r.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, u.name = r.name || a.name || "";
      const d = (s.samplers || {})[r.sampler] || {};
      return u.magFilter = xo[d.magFilter] || ft, u.minFilter = xo[d.minFilter] || pi, u.wrapS = vo[d.wrapS] || ci, u.wrapT = vo[d.wrapT] || ci, i.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const r = i.images[e], a = self.URL || self.webkitURL;
    let l = r.uri || "", c = !1;
    if (r.bufferView !== void 0)
      l = n.getDependency("bufferView", r.bufferView).then(function(h) {
        c = !0;
        const d = new Blob([h], { type: r.mimeType });
        return l = a.createObjectURL(d), l;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(h) {
      return new Promise(function(d, m) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(p) {
          const f = new ht(p);
          f.needsUpdate = !0, d(f);
        }), t.load(Pn.resolveURL(h, s.path), g, void 0, m);
      });
    }).then(function(h) {
      return c === !0 && a.revokeObjectURL(l), h.userData.mimeType = r.mimeType || zm(r.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
    });
    return this.sourceCache[e] = u, u;
  }
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), s.extensions[Te.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Te.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = s.associations.get(r);
          r = s.extensions[Te.KHR_TEXTURE_TRANSFORM].extendTexture(r, a), s.associations.set(r, l);
        }
      }
      return i !== void 0 && (r.encoding = i), e[t] = r, r;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new nl(), zt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new tl(), zt.prototype.copy.call(l, n), l.color.copy(n.color), this.cache.add(a, l)), n = l;
    }
    if (i || s || r) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      n.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"), i && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), r && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), s && (l.vertexColors = !0), r && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n;
  }
  getMaterialType() {
    return ws;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let r;
    const a = {}, l = s.extensions || {}, c = [];
    if (l[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const h = i[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      r = h.getMaterialType(), c.push(h.extendParams(a, s, t));
    } else if (l[Te.KHR_MATERIALS_UNLIT]) {
      const h = i[Te.KHR_MATERIALS_UNLIT];
      r = h.getMaterialType(), c.push(h.extendParams(a, s, t));
    } else {
      const h = s.pbrMetallicRoughness || {};
      if (a.color = new ye(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, Fe)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), r = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    s.doubleSided === !0 && (a.side = Jt);
    const u = s.alphaMode || lr.OPAQUE;
    if (u === lr.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === lr.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && r !== pn && (c.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new Re(1, 1), s.normalTexture.scale !== void 0)) {
      const h = s.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    return s.occlusionTexture !== void 0 && r !== pn && (c.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && r !== pn && (a.emissive = new ye().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && r !== pn && c.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, Fe)), Promise.all(c).then(function() {
      let h;
      return r === vr ? h = i[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : h = new r(a), s.name && (h.name = s.name), Tn(h, s), t.associations.set(h, { materials: e }), s.extensions && Di(i, h, s), h;
    });
  }
  createUniqueName(e) {
    const t = Oe.sanitizeNodeName(e || "");
    let n = t;
    for (let i = 1; this.nodeNamesUsed[n]; ++i)
      n = t + "_" + i;
    return this.nodeNamesUsed[n] = !0, n;
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(a) {
      return n[Te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return bo(l, a, t);
      });
    }
    const r = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = Um(c), h = i[u];
      if (h)
        r.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[Te.KHR_DRACO_MESH_COMPRESSION] ? d = s(c) : d = bo(new Bt(), c, t), i[u] = { primitive: c, promise: d }, r.push(d);
      }
    }
    return Promise.all(r);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], r = s.primitives, a = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const u = r[l].material === void 0 ? Nm(this.cache) : this.getDependency("material", r[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(r)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let m = 0, g = u.length; m < g; m++) {
        const p = u[m], f = r[m];
        let _;
        const w = c[m];
        if (f.mode === bt.TRIANGLES || f.mode === bt.TRIANGLE_STRIP || f.mode === bt.TRIANGLE_FAN || f.mode === void 0)
          _ = s.isSkinnedMesh === !0 ? new Ep(p, w) : new xt(p, w), _.isSkinnedMesh === !0 && !_.geometry.attributes.skinWeight.normalized && _.normalizeSkinWeights(), f.mode === bt.TRIANGLE_STRIP ? _.geometry = So(_.geometry, sc) : f.mode === bt.TRIANGLE_FAN && (_.geometry = So(_.geometry, Oo));
        else if (f.mode === bt.LINES)
          _ = new Dp(p, w);
        else if (f.mode === bt.LINE_STRIP)
          _ = new Pr(p, w);
        else if (f.mode === bt.LINE_LOOP)
          _ = new Pp(p, w);
        else if (f.mode === bt.POINTS)
          _ = new Ip(p, w);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(_.geometry.morphAttributes).length > 0 && Om(_, s), _.name = t.createUniqueName(s.name || "mesh_" + e), Tn(_, s), f.extensions && Di(i, _, f), t.assignFinalMaterial(_), h.push(_);
      }
      for (let m = 0, g = h.length; m < g; m++)
        t.associations.set(h[m], {
          meshes: e,
          primitives: m
        });
      if (h.length === 1)
        return h[0];
      const d = new Ln();
      t.associations.set(d, { meshes: e });
      for (let m = 0, g = h.length; m < g; m++)
        d.add(h[m]);
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
    return n.type === "perspective" ? t = new ut(bc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Cr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Tn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = { joints: t.joints };
    return t.inverseBindMatrices === void 0 ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function(i) {
      return n.inverseBindMatrices = i, n;
    });
  }
  loadAnimation(e) {
    const n = this.json.animations[e], i = [], s = [], r = [], a = [], l = [];
    for (let c = 0, u = n.channels.length; c < u; c++) {
      const h = n.channels[c], d = n.samplers[h.sampler], m = h.target, g = m.node, p = n.parameters !== void 0 ? n.parameters[d.input] : d.input, f = n.parameters !== void 0 ? n.parameters[d.output] : d.output;
      i.push(this.getDependency("node", g)), s.push(this.getDependency("accessor", p)), r.push(this.getDependency("accessor", f)), a.push(d), l.push(m);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(s),
      Promise.all(r),
      Promise.all(a),
      Promise.all(l)
    ]).then(function(c) {
      const u = c[0], h = c[1], d = c[2], m = c[3], g = c[4], p = [];
      for (let _ = 0, w = u.length; _ < w; _++) {
        const b = u[_], v = h[_], T = d[_], A = m[_], D = g[_];
        if (b === void 0)
          continue;
        b.updateMatrix();
        let x;
        switch (dn[D.path]) {
          case dn.weights:
            x = ki;
            break;
          case dn.rotation:
            x = zn;
            break;
          case dn.position:
          case dn.scale:
          default:
            x = Gi;
            break;
        }
        const E = b.name ? b.name : b.uuid, F = A.interpolation !== void 0 ? Im[A.interpolation] : hi, j = [];
        dn[D.path] === dn.weights ? b.traverse(function(U) {
          U.morphTargetInfluences && j.push(U.name ? U.name : U.uuid);
        }) : j.push(E);
        let J = T.array;
        if (T.normalized) {
          const U = yr(J.constructor), N = new Float32Array(J.length);
          for (let G = 0, q = J.length; G < q; G++)
            N[G] = J[G] * U;
          J = N;
        }
        for (let U = 0, N = j.length; U < N; U++) {
          const G = new x(
            j[U] + "." + dn[D.path],
            v.array,
            J,
            F
          );
          A.interpolation === "CUBICSPLINE" && (G.createInterpolant = function($) {
            const H = this instanceof zn ? Pm : cl;
            return new H(this.times, this.values, this.getValueSize() / 3, $);
          }, G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), p.push(G);
        }
      }
      const f = n.name ? n.name : "animation_" + e;
      return new Bp(f, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const r = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && r.traverse(function(a) {
        if (!!a.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = i.weights[l];
      }), r;
    });
  }
  loadNode(e) {
    const t = this.json, n = this.extensions, i = this, s = t.nodes[e], r = s.name ? i.createUniqueName(s.name) : "";
    return function() {
      const a = [], l = i._invokeOne(function(c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
      return l && a.push(l), s.camera !== void 0 && a.push(i.getDependency("camera", s.camera).then(function(c) {
        return i._getNodeRef(i.cameraCache, s.camera, c);
      })), i._invokeAll(function(c) {
        return c.createNodeAttachment && c.createNodeAttachment(e);
      }).forEach(function(c) {
        a.push(c);
      }), Promise.all(a);
    }().then(function(a) {
      let l;
      if (s.isBone === !0 ? l = new el() : a.length > 1 ? l = new Ln() : a.length === 1 ? l = a[0] : l = new Ve(), l !== a[0])
        for (let c = 0, u = a.length; c < u; c++)
          l.add(a[c]);
      if (s.name && (l.userData.name = s.name, l.name = r), Tn(l, s), s.extensions && Di(n, l, s), s.matrix !== void 0) {
        const c = new Ce();
        c.fromArray(s.matrix), l.applyMatrix4(c);
      } else
        s.translation !== void 0 && l.position.fromArray(s.translation), s.rotation !== void 0 && l.quaternion.fromArray(s.rotation), s.scale !== void 0 && l.scale.fromArray(s.scale);
      return i.associations.has(l) || i.associations.set(l, {}), i.associations.get(l).nodes = e, l;
    });
  }
  loadScene(e) {
    const t = this.json, n = this.extensions, i = this.json.scenes[e], s = this, r = new Ln();
    i.name && (r.name = s.createUniqueName(i.name)), Tn(r, i), i.extensions && Di(n, r, i);
    const a = i.nodes || [], l = [];
    for (let c = 0, u = a.length; c < u; c++)
      l.push(ul(a[c], r, t, s));
    return Promise.all(l).then(function() {
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, m] of s.associations)
          (d instanceof zt || d instanceof ht) && h.set(d, m);
        return u.traverse((d) => {
          const m = s.associations.get(d);
          m != null && h.set(d, m);
        }), h;
      };
      return s.associations = c(r), r;
    });
  }
}
function ul(o, e, t, n) {
  const i = t.nodes[o];
  return n.getDependency("node", o).then(function(s) {
    if (i.skin === void 0)
      return s;
    let r;
    return n.getDependency("skin", i.skin).then(function(a) {
      r = a;
      const l = [];
      for (let c = 0, u = r.joints.length; c < u; c++)
        l.push(n.getDependency("node", r.joints[c]));
      return Promise.all(l);
    }).then(function(a) {
      return s.traverse(function(l) {
        if (!l.isMesh)
          return;
        const c = [], u = [];
        for (let h = 0, d = a.length; h < d; h++) {
          const m = a[h];
          if (m) {
            c.push(m);
            const g = new Ce();
            r.inverseBindMatrices !== void 0 && g.fromArray(r.inverseBindMatrices.array, h * 16), u.push(g);
          } else
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[h]);
        }
        l.bind(new Dr(c, u), l.matrixWorld);
      }), s;
    });
  }).then(function(s) {
    e.add(s);
    const r = [];
    if (i.children) {
      const a = i.children;
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        r.push(ul(u, s, t, n));
      }
    }
    return Promise.all(r);
  });
}
function km(o, e, t) {
  const n = e.attributes, i = new gi();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new L(l[0], l[1], l[2]),
        new L(c[0], c[1], c[2])
      ), a.normalized) {
        const u = yr(Vi[a.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const a = new L(), l = new L();
    for (let c = 0, u = s.length; c < u; c++) {
      const h = s[c];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], m = d.min, g = d.max;
        if (m !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), d.normalized) {
            const p = yr(Vi[d.componentType]);
            l.multiplyScalar(p);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  o.boundingBox = i;
  const r = new _i();
  i.getCenter(r.center), r.radius = i.min.distanceTo(i.max) / 2, o.boundingSphere = r;
}
function bo(o, e, t) {
  const n = e.attributes, i = [];
  function s(r, a) {
    return t.getDependency("accessor", r).then(function(l) {
      o.setAttribute(a, l);
    });
  }
  for (const r in n) {
    const a = Mr[r] || r.toLowerCase();
    a in o.attributes || i.push(s(n[r], a));
  }
  if (e.indices !== void 0 && !o.index) {
    const r = t.getDependency("accessor", e.indices).then(function(a) {
      o.setIndex(a);
    });
    i.push(r);
  }
  return Tn(o, e), km(o, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Fm(o, e.targets, t) : o;
  });
}
function So(o, e) {
  let t = o.getIndex();
  if (t === null) {
    const r = [], a = o.getAttribute("position");
    if (a !== void 0) {
      for (let l = 0; l < a.count; l++)
        r.push(l);
      o.setIndex(r), t = o.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), o;
  }
  const n = t.count - 2, i = [];
  if (e === Oo)
    for (let r = 1; r <= n; r++)
      i.push(t.getX(0)), i.push(t.getX(r)), i.push(t.getX(r + 1));
  else
    for (let r = 0; r < n; r++)
      r % 2 === 0 ? (i.push(t.getX(r)), i.push(t.getX(r + 1)), i.push(t.getX(r + 2))) : (i.push(t.getX(r + 2)), i.push(t.getX(r + 1)), i.push(t.getX(r)));
  i.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const s = o.clone();
  return s.setIndex(i), s;
}
var Gm = Object.defineProperty, Vm = Object.getOwnPropertyDescriptor, Nt = (o, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Vm(e, t) : e, s = o.length - 1, r; s >= 0; s--)
    (r = o[s]) && (i = (n ? r(e, t, i) : r(i)) || i);
  return n && i && Gm(e, t, i), i;
};
let At = class extends wo {
  constructor() {
    super(...arguments), this.src = "", this.x = 0, this.y = 0, this.z = 0, this.rx = 0, this.ry = 0, this.rz = 0, this.sx = 1, this.sy = 1, this.sz = 1;
  }
  connectedCallback() {
    super.connectedCallback();
    const o = this.parentElement;
    if (o === null) {
      console.error("mv-object must be a child of mv-space");
      return;
    }
    if (o.tagName !== "MV-SPACE") {
      console.error("mv-object must be a child of mv-space");
      return;
    }
    const e = o.space;
    if (e === void 0) {
      console.error("mv-space must be defined");
      return;
    }
    const t = new Ve(), n = new pn({ color: Math.random() * 16777215 });
    if (this.src === "") {
      const i = new xi(), s = new xt(i, n);
      t.add(s);
    } else
      new um().load(this.src, (s) => {
        t.add(s.scene);
      });
    t.position.x = this.x, t.position.y = this.y, t.position.z = this.z, t.rotation.x = this.rx, t.rotation.y = this.ry, t.rotation.z = this.rz, t.scale.x = this.sx, t.scale.y = this.sy, t.scale.z = this.sz, e.add(t);
  }
  render() {
    return console.log("object"), To``;
  }
};
Nt([
  Ct({ type: String, attribute: "src" })
], At.prototype, "src", 2);
Nt([
  Ct({ type: Number, attribute: "x" })
], At.prototype, "x", 2);
Nt([
  Ct({ type: Number, attribute: "y" })
], At.prototype, "y", 2);
Nt([
  Ct({ type: Number, attribute: "z" })
], At.prototype, "z", 2);
Nt([
  Ct({ type: Number, attribute: "rx" })
], At.prototype, "rx", 2);
Nt([
  Ct({ type: Number, attribute: "ry" })
], At.prototype, "ry", 2);
Nt([
  Ct({ type: Number, attribute: "rz" })
], At.prototype, "rz", 2);
Nt([
  Ct({ type: Number, attribute: "sx" })
], At.prototype, "sx", 2);
Nt([
  Ct({ type: Number, attribute: "sy" })
], At.prototype, "sy", 2);
Nt([
  Ct({ type: Number, attribute: "sz" })
], At.prototype, "sz", 2);
At = Nt([
  Eo("mv-object")
], At);
