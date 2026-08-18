import {
  Digest_init_$Init$oh8vbjf23gs6 as Digest_init_$Init$,
  Digest1vc95ftpmqvn1 as Digest,
} from './core-library-digest.mjs';
import { Bit32_init_$Create$3f9ts7cxm1oxt as Bit32_init_$Create$ } from './bitops-library-bits.mjs';
import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  fill3lmv1pckd4inv as fill,
  fill2542d4m9l93pn as fill_0,
  arrayCopytctsywo3h7gj as arrayCopy,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  objectCreate1ve4bgxiu4x98 as objectCreate,
} from './kotlin-kotlin-stdlib.mjs';
import { Big_getInstancetk58sur73ues as Big_getInstance } from './bitops-library-endian.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Bit32Digest, 'Bit32Digest', VOID, Digest);
initMetadataForCompanion(Companion_0);
initMetadataForClass(SHA256, 'SHA256', SHA256_init_$Create$, Bit32Digest);
//endregion
function Bit32Digest_init_$Init$(bitStrength, h, $this) {
  Digest_init_$Init$('SHA-' + bitStrength, 64, bitStrength / 8 | 0, $this);
  Bit32Digest.call($this);
  $this.e42_1 = h;
  $this.f42_1 = new Int32Array(64);
  var tmp = $this;
  // Inline function 'kotlin.collections.copyOf' call
  // Inline function 'kotlin.js.asDynamic' call
  tmp.g42_1 = h.slice();
  $this.h42_1 = Bit32_init_$Create$(64);
  return $this;
}
function Companion() {
  Companion_instance = this;
  this.i42_1 = 64;
  var tmp = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp.j42_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance == null)
    new Companion();
  return Companion_instance;
}
protoOf(Bit32Digest).c41 = function (input, offset) {
  var x = this.f42_1;
  Big_getInstance();
  // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
  var sourceIndexEnd = offset + 64 | 0;
  Big_getInstance().z41(input, x, 0, offset, sourceIndexEnd);
  var inductionVariable = 16;
  if (inductionVariable < 64)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var x15 = x[i - 15 | 0];
      var s0 = (x15 >>> 7 | 0 | x15 << 25) ^ (x15 >>> 18 | 0 | x15 << 14) ^ (x15 >>> 3 | 0);
      var x2 = x[i - 2 | 0];
      var s1 = (x2 >>> 17 | 0 | x2 << 15) ^ (x2 >>> 19 | 0 | x2 << 13) ^ (x2 >>> 10 | 0);
      var x16 = x[i - 16 | 0];
      var x7 = x[i - 7 | 0];
      x[i] = ((x16 + s0 | 0) + x7 | 0) + s1 | 0;
    }
     while (inductionVariable < 64);
  var k = Companion_getInstance().j42_1;
  var state = this.g42_1;
  var a = state[0];
  var b = state[1];
  var c = state[2];
  var d = state[3];
  var e = state[4];
  var f = state[5];
  var g = state[6];
  var h = state[7];
  var inductionVariable_0 = 0;
  if (inductionVariable_0 < 64)
    do {
      var i_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var s0_0 = (a >>> 2 | 0 | a << 30) ^ (a >>> 13 | 0 | a << 19) ^ (a >>> 22 | 0 | a << 10);
      var s1_0 = (e >>> 6 | 0 | e << 26) ^ (e >>> 11 | 0 | e << 21) ^ (e >>> 25 | 0 | e << 7);
      var ch = e & f ^ ~e & g;
      var maj = a & b ^ a & c ^ b & c;
      var t1 = (((h + s1_0 | 0) + ch | 0) + k[i_0] | 0) + x[i_0] | 0;
      var t2 = s0_0 + maj | 0;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
     while (inductionVariable_0 < 64);
  state[0] = state[0] + a | 0;
  state[1] = state[1] + b | 0;
  state[2] = state[2] + c | 0;
  state[3] = state[3] + d | 0;
  state[4] = state[4] + e | 0;
  state[5] = state[5] + f | 0;
  state[6] = state[6] + g | 0;
  state[7] = state[7] + h | 0;
  this.h42_1.n41();
};
protoOf(Bit32Digest).a41 = function (buf, bufPos) {
  var digest = new Int8Array(this.w40());
  this.k42(digest, 0, buf, bufPos);
  return digest;
};
protoOf(Bit32Digest).k42 = function (dest, destOffset, buf, bufPos) {
  var tmp0_container = this.h42_1.o41(bufPos).l41();
  var bitsLo = tmp0_container.re();
  var bitsHi = tmp0_container.se();
  buf[bufPos] = -128;
  if ((bufPos + 1 | 0) > 56) {
    this.c41(buf, 0);
    fill(buf, 0, 0, 56);
  }
  // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
  Big_getInstance();
  Big_getInstance().x41(bitsHi, buf, 56);
  // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
  Big_getInstance();
  Big_getInstance().x41(bitsLo, buf, 60);
  this.c41(buf, 0);
  Big_getInstance();
  var tmp2 = this.g42_1;
  // Inline function 'org.kotlincrypto.bitops.endian.Big.bePackIntoUnsafe' call
  var sourceIndexEnd = this.w40() / 4 | 0;
  Big_getInstance().y41(tmp2, dest, destOffset, 0, sourceIndexEnd);
};
protoOf(Bit32Digest).b41 = function () {
  fill_0(this.f42_1, 0);
  var tmp0 = this.e42_1;
  // Inline function 'kotlin.collections.copyInto' call
  var destination = this.g42_1;
  var endIndex = tmp0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, destination, 0, 0, endIndex);
  this.h42_1.d2j();
};
function Bit32Digest() {
  Companion_getInstance();
}
function SHA256_init_$Init$($this) {
  Bit32Digest_init_$Init$(256, Companion_getInstance_0().l42_1, $this);
  SHA256.call($this);
  return $this;
}
function SHA256_init_$Create$() {
  return SHA256_init_$Init$(objectCreate(protoOf(SHA256)));
}
function Companion_0() {
  Companion_instance_0 = this;
  var tmp = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp.l42_1 = new Int32Array([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]);
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function SHA256() {
  Companion_getInstance_0();
}
//region block: exports
export {
  SHA256_init_$Create$ as SHA256_init_$Create$2bjw9a5h2ibld,
};
//endregion
