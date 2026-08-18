import {
  mapCapacity1h45rc3eh9p2l as mapCapacity,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  LinkedHashMap_init_$Create$1s75e1k23v4xj as LinkedHashMap_init_$Create$,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  toString1pkumu07cwy4m as toString,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  get_lastIndexx0qsydpfv3mu as get_lastIndex,
  compareTo3ankvs086tmwq as compareTo,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  encodeToByteArray1onwao0uakjfh as encodeToByteArray,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Charsets_getInstanceq0o82sizm30g as Charsets_getInstance,
  encodeToByteArrayomtvgs5lyogm as encodeToByteArray_0,
  BytePacketBuilder2d5pjgm948a6v as BytePacketBuilder,
  writeShort2gpvs0skw1vt as writeShort,
  writeText338krnmr85lul as writeText,
  readBytes2b47ed7nra7rg as readBytes,
} from './ktor-ktor-io.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(Codes, 'Codes', VOID, Enum);
initMetadataForClass(CloseReason, 'CloseReason');
initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
initMetadataForCompanion(Companion_0);
initMetadataForClass(FrameType, 'FrameType', VOID, Enum);
initMetadataForClass(Frame, 'Frame');
initMetadataForClass(Binary, 'Binary', VOID, Frame);
initMetadataForClass(Text, 'Text', VOID, Frame);
initMetadataForClass(Close, 'Close', Close_init_$Create$_0, Frame);
initMetadataForCompanion(Companion_1);
//endregion
var Codes_NORMAL_instance;
var Codes_GOING_AWAY_instance;
var Codes_PROTOCOL_ERROR_instance;
var Codes_CANNOT_ACCEPT_instance;
var Codes_CLOSED_ABNORMALLY_instance;
var Codes_NOT_CONSISTENT_instance;
var Codes_VIOLATED_POLICY_instance;
var Codes_TOO_BIG_instance;
var Codes_NO_EXTENSION_instance;
var Codes_INTERNAL_ERROR_instance;
var Codes_SERVICE_RESTART_instance;
var Codes_TRY_AGAIN_LATER_instance;
function Companion() {
  Companion_instance = this;
  var tmp = this;
  // Inline function 'kotlin.collections.associateBy' call
  var this_0 = values();
  var capacity = coerceAtLeast(mapCapacity(this_0.length), 16);
  // Inline function 'kotlin.collections.associateByTo' call
  var destination = LinkedHashMap_init_$Create$(capacity);
  var inductionVariable = 0;
  var last = this_0.length;
  while (inductionVariable < last) {
    var element = this_0[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp$ret$0 = element.s42_1;
    destination.m2(tmp$ret$0, element);
  }
  tmp.t42_1 = destination;
  this.u42_1 = Codes_INTERNAL_ERROR_getInstance();
}
protoOf(Companion).v42 = function (code) {
  return this.t42_1.j2(code);
};
var Companion_instance;
function Companion_getInstance() {
  Codes_initEntries();
  if (Companion_instance == null)
    new Companion();
  return Companion_instance;
}
function values() {
  return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
}
var Codes_entriesInitialized;
function Codes_initEntries() {
  if (Codes_entriesInitialized)
    return Unit_instance;
  Codes_entriesInitialized = true;
  Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
  Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
  Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
  Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
  Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
  Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
  Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
  Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
  Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
  Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
  Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
  Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
  Companion_getInstance();
}
function Codes(name, ordinal, code) {
  Enum.call(this, name, ordinal);
  this.s42_1 = code;
}
function Codes_NORMAL_getInstance() {
  Codes_initEntries();
  return Codes_NORMAL_instance;
}
function Codes_GOING_AWAY_getInstance() {
  Codes_initEntries();
  return Codes_GOING_AWAY_instance;
}
function Codes_PROTOCOL_ERROR_getInstance() {
  Codes_initEntries();
  return Codes_PROTOCOL_ERROR_instance;
}
function Codes_CANNOT_ACCEPT_getInstance() {
  Codes_initEntries();
  return Codes_CANNOT_ACCEPT_instance;
}
function Codes_CLOSED_ABNORMALLY_getInstance() {
  Codes_initEntries();
  return Codes_CLOSED_ABNORMALLY_instance;
}
function Codes_NOT_CONSISTENT_getInstance() {
  Codes_initEntries();
  return Codes_NOT_CONSISTENT_instance;
}
function Codes_VIOLATED_POLICY_getInstance() {
  Codes_initEntries();
  return Codes_VIOLATED_POLICY_instance;
}
function Codes_TOO_BIG_getInstance() {
  Codes_initEntries();
  return Codes_TOO_BIG_instance;
}
function Codes_NO_EXTENSION_getInstance() {
  Codes_initEntries();
  return Codes_NO_EXTENSION_instance;
}
function Codes_INTERNAL_ERROR_getInstance() {
  Codes_initEntries();
  return Codes_INTERNAL_ERROR_instance;
}
function Codes_SERVICE_RESTART_getInstance() {
  Codes_initEntries();
  return Codes_SERVICE_RESTART_instance;
}
function Codes_TRY_AGAIN_LATER_getInstance() {
  Codes_initEntries();
  return Codes_TRY_AGAIN_LATER_instance;
}
function CloseReason(code, message) {
  this.w42_1 = code;
  this.x42_1 = message;
}
protoOf(CloseReason).y42 = function () {
  return Companion_getInstance().v42(this.w42_1);
};
protoOf(CloseReason).toString = function () {
  var tmp0_elvis_lhs = this.y42();
  return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.w42_1 : tmp0_elvis_lhs) + ', message=' + this.x42_1 + ')';
};
protoOf(CloseReason).hashCode = function () {
  var result = this.w42_1;
  result = imul(result, 31) + getStringHashCode(this.x42_1) | 0;
  return result;
};
protoOf(CloseReason).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CloseReason))
    return false;
  var tmp0_other_with_cast = other instanceof CloseReason ? other : THROW_CCE();
  if (!(this.w42_1 === tmp0_other_with_cast.w42_1))
    return false;
  if (!(this.x42_1 === tmp0_other_with_cast.x42_1))
    return false;
  return true;
};
function NonDisposableHandle() {
}
protoOf(NonDisposableHandle).b1j = function () {
};
protoOf(NonDisposableHandle).toString = function () {
  return 'NonDisposableHandle';
};
var NonDisposableHandle_instance;
function NonDisposableHandle_getInstance() {
  return NonDisposableHandle_instance;
}
var FrameType_TEXT_instance;
var FrameType_BINARY_instance;
var FrameType_CLOSE_instance;
var FrameType_PING_instance;
var FrameType_PONG_instance;
function Companion_0() {
  Companion_instance_0 = this;
  var tmp = this;
  var tmp0 = values_0();
  var tmp$ret$1;
  $l$block_0: {
    // Inline function 'kotlin.collections.maxByOrNull' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (tmp0.length === 0) {
      tmp$ret$1 = null;
      break $l$block_0;
    }
    var maxElem = tmp0[0];
    var lastIndex = get_lastIndex(tmp0);
    if (lastIndex === 0) {
      tmp$ret$1 = maxElem;
      break $l$block_0;
    }
    var maxValue = maxElem.c43_1;
    var inductionVariable = 1;
    if (inductionVariable <= lastIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = tmp0[i];
        var v = e.c43_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (!(i === lastIndex));
    tmp$ret$1 = maxElem;
  }
  tmp.d43_1 = ensureNotNull(tmp$ret$1).c43_1;
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = this.d43_1 + 1 | 0;
  // Inline function 'kotlin.arrayOfNulls' call
  var tmp_3 = Array(tmp_2);
  while (tmp_1 < tmp_2) {
    var tmp_4 = tmp_1;
    var tmp0_0 = values_0();
    var tmp$ret$6;
    $l$block_2: {
      // Inline function 'kotlin.collections.singleOrNull' call
      var single = null;
      var found = false;
      var inductionVariable_0 = 0;
      var last = tmp0_0.length;
      while (inductionVariable_0 < last) {
        var element = tmp0_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (element.c43_1 === tmp_4) {
          if (found) {
            tmp$ret$6 = null;
            break $l$block_2;
          }
          single = element;
          found = true;
        }
      }
      if (!found) {
        tmp$ret$6 = null;
        break $l$block_2;
      }
      tmp$ret$6 = single;
    }
    tmp_3[tmp_4] = tmp$ret$6;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.e43_1 = tmp_3;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  FrameType_initEntries();
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function values_0() {
  return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
}
var FrameType_entriesInitialized;
function FrameType_initEntries() {
  if (FrameType_entriesInitialized)
    return Unit_instance;
  FrameType_entriesInitialized = true;
  FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
  FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
  FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
  FrameType_PING_instance = new FrameType('PING', 3, true, 9);
  FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
  Companion_getInstance_0();
}
function FrameType(name, ordinal, controlFrame, opcode) {
  Enum.call(this, name, ordinal);
  this.b43_1 = controlFrame;
  this.c43_1 = opcode;
}
function FrameType_TEXT_getInstance() {
  FrameType_initEntries();
  return FrameType_TEXT_instance;
}
function FrameType_BINARY_getInstance() {
  FrameType_initEntries();
  return FrameType_BINARY_instance;
}
function FrameType_CLOSE_getInstance() {
  FrameType_initEntries();
  return FrameType_CLOSE_instance;
}
function FrameType_PING_getInstance() {
  FrameType_initEntries();
  return FrameType_PING_instance;
}
function FrameType_PONG_getInstance() {
  FrameType_initEntries();
  return FrameType_PONG_instance;
}
function Binary_init_$Init$(fin, data, $this) {
  Binary.call($this, fin, data, false, false, false);
  return $this;
}
function Binary_init_$Create$(fin, data) {
  return Binary_init_$Init$(fin, data, objectCreate(protoOf(Binary)));
}
function Text_init_$Init$(fin, data, $this) {
  Text.call($this, fin, data, false, false, false);
  return $this;
}
function Text_init_$Init$_0(text, $this) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'io.ktor.utils.io.core.toByteArray' call
    var charset = Charsets_getInstance().z2l_1;
    if (charset.equals(Charsets_getInstance().z2l_1)) {
      tmp$ret$0 = encodeToByteArray(text);
      break $l$block;
    }
    tmp$ret$0 = encodeToByteArray_0(charset.d2m(), text, 0, text.length);
  }
  Text_init_$Init$(true, tmp$ret$0, $this);
  return $this;
}
function Text_init_$Create$(text) {
  return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
}
function Close_init_$Init$(reason, $this) {
  var tmp$ret$2;
  $l$block: {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    // Inline function 'kotlin.contracts.contract' call
    var builder = new BytePacketBuilder();
    try {
      writeShort(builder, reason.w42_1);
      writeText(builder, reason.x42_1);
      tmp$ret$2 = builder.t2e();
      break $l$block;
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        builder.c15();
        throw t;
      } else {
        throw $p;
      }
    }
  }
  Close_init_$Init$_0(tmp$ret$2, $this);
  return $this;
}
function Close_init_$Create$(reason) {
  return Close_init_$Init$(reason, objectCreate(protoOf(Close)));
}
function Close_init_$Init$_0(packet, $this) {
  Close.call($this, readBytes(packet));
  return $this;
}
function Close_init_$Init$_1($this) {
  Close.call($this, Companion_getInstance_1().f43_1);
  return $this;
}
function Close_init_$Create$_0() {
  return Close_init_$Init$_1(objectCreate(protoOf(Close)));
}
function Binary(fin, data, rsv1, rsv2, rsv3) {
  rsv1 = rsv1 === VOID ? false : rsv1;
  rsv2 = rsv2 === VOID ? false : rsv2;
  rsv3 = rsv3 === VOID ? false : rsv3;
  Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
}
function Text(fin, data, rsv1, rsv2, rsv3) {
  rsv1 = rsv1 === VOID ? false : rsv1;
  rsv2 = rsv2 === VOID ? false : rsv2;
  rsv3 = rsv3 === VOID ? false : rsv3;
  Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
}
function Close(data) {
  Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
}
function Companion_1() {
  Companion_instance_1 = this;
  this.f43_1 = new Int8Array(0);
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
  Companion_getInstance_1();
  disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
  rsv1 = rsv1 === VOID ? false : rsv1;
  rsv2 = rsv2 === VOID ? false : rsv2;
  rsv3 = rsv3 === VOID ? false : rsv3;
  this.g43_1 = fin;
  this.h43_1 = frameType;
  this.i43_1 = data;
  this.j43_1 = disposableHandle;
  this.k43_1 = rsv1;
  this.l43_1 = rsv2;
  this.m43_1 = rsv3;
}
protoOf(Frame).toString = function () {
  return 'Frame ' + this.h43_1.toString() + ' (fin=' + this.g43_1 + ', buffer len = ' + this.i43_1.length + ')';
};
//region block: init
NonDisposableHandle_instance = new NonDisposableHandle();
//endregion
//region block: exports
export {
  Codes_CLOSED_ABNORMALLY_getInstance as Codes_CLOSED_ABNORMALLY_getInstance18g5hbbmrws6x,
  Codes_NORMAL_getInstance as Codes_NORMAL_getInstance21orcjign6rr6,
  Binary_init_$Create$ as Binary_init_$Create$csls592kbxno,
  Close_init_$Create$ as Close_init_$Create$dozxuqp7q7sy,
  Text_init_$Create$ as Text_init_$Create$2gym5fpve8nxx,
  Companion_getInstance as Companion_getInstance3h3c6jlu8qefd,
  CloseReason as CloseReason10cphaqpp3ct7,
};
//endregion
