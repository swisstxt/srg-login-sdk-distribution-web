import {
  protoOf180f3jzyo7rfj as protoOf,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$1j1aj36nbo0wg as IllegalArgumentException_init_$Create$,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  hashCodeq5arwsb9dgti as hashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Final_1, 'Final');
initMetadataForClass(Final, 'Final', VOID, Final_1);
initMetadataForClass(Final_0, 'Final', VOID, Final_1);
initMetadataForClass(Counter, 'Counter');
initMetadataForClass(Bit32, 'Bit32', VOID, Counter);
initMetadataForClass(Bit64, 'Bit64', VOID, Counter);
//endregion
function Final_init_$Init$(lo, hi, $this) {
  Final.call($this, lo, hi, false);
  return $this;
}
function Final_init_$Create$(lo, hi) {
  return Final_init_$Init$(lo, hi, objectCreate(protoOf(Final)));
}
function Companion() {
  this.d41_1 = 1048576;
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function Bit32_init_$Init$(lo, hi, incrementBy, $this) {
  Counter.call($this);
  Bit32.call($this);
  // Inline function 'kotlin.require' call
  if (!(incrementBy > 0)) {
    var message = 'incrementBy[' + incrementBy + '] must be greater than 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(incrementBy <= 1048576)) {
    var message_0 = 'incrementBy[' + incrementBy + '] must be less than or equal to 1048576';
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  // Inline function 'kotlin.require' call
  if (!((incrementBy % 8 | 0) === 0)) {
    var message_1 = 'incrementBy[' + incrementBy + '] must be a factor of 8';
    throw IllegalArgumentException_init_$Create$(toString(message_1));
  }
  // Inline function 'kotlin.require' call
  if (!((-2147483648 % incrementBy | 0) === 0)) {
    var message_2 = 'Int.MIN_VALUE % incrementBy[' + incrementBy + '] != 0';
    throw IllegalArgumentException_init_$Create$(toString(message_2));
  }
  // Inline function 'kotlin.require' call
  if (!((lo % incrementBy | 0) === 0)) {
    var message_3 = 'lo must be a factor of incrementBy[' + incrementBy + ']';
    throw IllegalArgumentException_init_$Create$(toString(message_3));
  }
  $this.f41_1 = incrementBy;
  $this.g41_1 = lo;
  $this.h41_1 = hi;
  return $this;
}
function Bit32_init_$Init$_0(incrementBy, $this) {
  Bit32_init_$Init$(0, 0, incrementBy, $this);
  return $this;
}
function Bit32_init_$Create$(incrementBy) {
  return Bit32_init_$Init$_0(incrementBy, objectCreate(protoOf(Bit32)));
}
function Final(lo, hi, isBits) {
  Final_1.call(this, isBits);
  this.j41_1 = lo;
  this.k41_1 = hi;
}
protoOf(Final).re = function () {
  return this.j41_1;
};
protoOf(Final).se = function () {
  return this.k41_1;
};
protoOf(Final).l41 = function () {
  if (this.m41_1)
    return this;
  return new Final(this.j41_1 << 3, this.k41_1 << 3 | (this.j41_1 >>> 29 | 0), true);
};
function Final_0() {
}
protoOf(Bit32).n41 = function () {
  this.g41_1 = this.g41_1 + this.f41_1 | 0;
  if (this.g41_1 === 0) {
    this.h41_1 = this.h41_1 + 1 | 0;
  }
};
protoOf(Bit32).o41 = function (additional) {
  var lo = this.g41_1;
  var hi = this.h41_1;
  var lt0 = lo < 0;
  lo = lo + additional | 0;
  if (lt0 && lo >= 0) {
    hi = hi + 1 | 0;
  }
  return Final_init_$Create$(lo, hi);
};
protoOf(Bit32).d2j = function () {
  this.g41_1 = 0;
  this.h41_1 = 0;
};
function Bit32() {
}
function Bit64() {
}
function Final_1(isBits) {
  this.m41_1 = isBits;
}
protoOf(Final_1).equals = function (other) {
  var tmp;
  if (other instanceof Final_1) {
    tmp = hashCode(other) === this.hashCode();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(Final_1).hashCode = function () {
  var result = 17;
  if (this instanceof Final) {
    result = imul(result, 31) + this.j41_1 | 0;
    result = imul(result, 31) + this.k41_1 | 0;
  } else {
    if (this instanceof Final_0) {
      result = imul(result, 31) + this.q41_1.hashCode() | 0;
      result = imul(result, 31) + this.r41_1.hashCode() | 0;
    }
  }
  result = imul(result, 31) + getBooleanHashCode(this.m41_1) | 0;
  return result;
};
protoOf(Final_1).toString = function () {
  var tmp;
  if (this instanceof Final) {
    tmp = 'Counter.Bit32.Final[lo=' + this.j41_1 + ', hi=' + this.k41_1 + ']';
  } else {
    if (this instanceof Final_0) {
      tmp = 'Counter.Bit64.Final[lo=' + this.q41_1.toString() + ', hi=' + this.r41_1.toString() + ']';
    } else {
      noWhenBranchMatchedException();
    }
  }
  return tmp;
};
function Counter() {
  this.s41_1 = new Object();
}
protoOf(Counter).equals = function (other) {
  var tmp;
  if (other instanceof Counter) {
    tmp = hashCode(other) === this.hashCode();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(Counter).hashCode = function () {
  return 527 + hashCode(this.s41_1) | 0;
};
protoOf(Counter).toString = function () {
  var tmp;
  if (this instanceof Bit32) {
    tmp = 'Bit32[lo=' + this.g41_1 + ', hi=' + this.h41_1 + ', incrementBy=' + this.f41_1 + ']';
  } else {
    if (this instanceof Bit64) {
      tmp = 'Bit64[lo=' + this.v41_1.toString() + ', hi=' + this.w41_1.toString() + ', incrementBy=' + this.u41_1.toString() + ']';
    } else {
      noWhenBranchMatchedException();
    }
  }
  // Inline function 'kotlin.let' call
  return 'Counter.' + tmp + '@' + this.hashCode();
};
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  Bit32_init_$Create$ as Bit32_init_$Create$3f9ts7cxm1oxt,
};
//endregion
