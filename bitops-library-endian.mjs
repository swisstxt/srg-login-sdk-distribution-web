import {
  toByte4i43936u611k as toByte,
  protoOf180f3jzyo7rfj as protoOf,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  getKClass3t8tygqu4lcxf as getKClass,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(Endian, 'Endian');
initMetadataForObject(Big, 'Big', VOID, Endian);
initMetadataForObject(Little, 'Little', VOID, Endian);
initMetadataForCompanion(Companion);
//endregion
function Big() {
  Big_instance = this;
  Endian.call(this);
}
protoOf(Big).x41 = function (source, dest, destOffset) {
  // Inline function 'org.kotlincrypto.bitops.endian.internal.packBEInt' call
  dest[destOffset] = toByte(source >>> 24 | 0);
  dest[destOffset + 1 | 0] = toByte(source >>> 16 | 0);
  dest[destOffset + 2 | 0] = toByte(source >>> 8 | 0);
  dest[destOffset + 3 | 0] = toByte(source);
  return dest;
};
protoOf(Big).y41 = function (source, dest, destOffset, sourceIndexStart, sourceIndexEnd) {
  // Inline function 'org.kotlincrypto.bitops.endian.internal.packArray' call
  var destPos = destOffset;
  var sourcePos = sourceIndexStart;
  while (sourcePos < sourceIndexEnd) {
    var tmp0 = sourcePos;
    sourcePos = tmp0 + 1 | 0;
    var destPos_0 = destPos;
    // Inline function 'org.kotlincrypto.bitops.endian.internal.packBEInt' call
    var source_0 = source[tmp0];
    dest[destPos_0] = toByte(source_0 >>> 24 | 0);
    dest[destPos_0 + 1 | 0] = toByte(source_0 >>> 16 | 0);
    dest[destPos_0 + 2 | 0] = toByte(source_0 >>> 8 | 0);
    dest[destPos_0 + 3 | 0] = toByte(source_0);
    destPos = destPos + 4 | 0;
  }
  return dest;
};
protoOf(Big).z41 = function (source, dest, destOffset, sourceIndexStart, sourceIndexEnd) {
  // Inline function 'org.kotlincrypto.bitops.endian.internal.packArray' call
  var destPos = destOffset;
  var sourcePos = sourceIndexStart;
  while (sourcePos < sourceIndexEnd) {
    var tmp2 = sourcePos;
    var tmp0 = destPos;
    destPos = tmp0 + 1 | 0;
    // Inline function 'org.kotlincrypto.bitops.endian.internal.unpackBEInt' call
    var tmp0_0 = _B0___init__impl__6otxhp(source[tmp2]);
    var tmp2_0 = source[tmp2 + 1 | 0];
    var tmp4 = source[tmp2 + 2 | 0];
    // Inline function 'org.kotlincrypto.bitops.endian.internal.toBEInt' call
    var b3 = source[tmp2 + 3 | 0];
    dest[tmp0] = _B0___get_b0__impl__g161pk(tmp0_0) << 24 | (tmp2_0 & 255) << 16 | (tmp4 & 255) << 8 | b3 & 255;
    sourcePos = sourcePos + 4 | 0;
  }
  return dest;
};
protoOf(Big).equals = function (other) {
  return other instanceof Big;
};
protoOf(Big).hashCode = function () {
  return 527 + getKClass(Big).hashCode() | 0;
};
var Big_instance;
function Big_getInstance() {
  if (Big_instance == null)
    new Big();
  return Big_instance;
}
function Little() {
}
function Companion() {
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function Endian() {
}
protoOf(Endian).toString = function () {
  var tmp;
  if (this instanceof Big) {
    tmp = 'Endian.Big';
  } else {
    if (this instanceof Little) {
      tmp = 'Endian.Little';
    } else {
      noWhenBranchMatchedException();
    }
  }
  return tmp;
};
function _B0___init__impl__6otxhp(b0) {
  return b0;
}
function _B0___get_b0__impl__g161pk($this) {
  return $this;
}
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  Big_getInstance as Big_getInstancetk58sur73ues,
};
//endregion
