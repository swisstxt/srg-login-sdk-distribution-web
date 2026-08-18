import {
  hashCodeq5arwsb9dgti as hashCode,
  isBlank1dvkhjjvox3p0 as isBlank,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  toString1pkumu07cwy4m as toString,
  protoOf180f3jzyo7rfj as protoOf,
  fill3lmv1pckd4inv as fill,
  arrayCopytctsywo3h7gj as arrayCopy,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
import { InvalidParameterException_init_$Create$28it6ev1nl1bl as InvalidParameterException_init_$Create$ } from './error-library-error.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(Digest, 'Digest');
//endregion
function _Buffer___init__impl__mrnqm7(value) {
  return value;
}
function _Buffer___get_value__impl__xxr8tn($this) {
  return $this;
}
function Buffer__hashCode_impl_3ylui6($this) {
  return hashCode($this);
}
function Digest_init_$Init$(algorithm, blockSize, digestLength, $this) {
  Digest.call($this);
  var tmp = $this;
  // Inline function 'org.kotlincrypto.core.digest.internal.initializeBuffer' call
  // Inline function 'kotlin.text.isNotBlank' call
  var tmp0 = !isBlank(algorithm);
  $l$block: {
    // Inline function 'org.kotlincrypto.error.requireParam' call
    // Inline function 'kotlin.contracts.contract' call
    if (tmp0) {
      break $l$block;
    }
    var message = 'algorithm cannot be blank';
    throw InvalidParameterException_init_$Create$(toString(message));
  }
  var tmp0_0 = blockSize > 0;
  $l$block_0: {
    // Inline function 'org.kotlincrypto.error.requireParam' call
    // Inline function 'kotlin.contracts.contract' call
    if (tmp0_0) {
      break $l$block_0;
    }
    var message_0 = 'blockSize must be greater than 0';
    throw InvalidParameterException_init_$Create$(toString(message_0));
  }
  var tmp0_1 = (blockSize % 8 | 0) === 0;
  $l$block_1: {
    // Inline function 'org.kotlincrypto.error.requireParam' call
    // Inline function 'kotlin.contracts.contract' call
    if (tmp0_1) {
      break $l$block_1;
    }
    var message_1 = 'blockSize must be a factor of 8';
    throw InvalidParameterException_init_$Create$(toString(message_1));
  }
  var tmp0_2 = digestLength >= 0;
  $l$block_2: {
    // Inline function 'org.kotlincrypto.error.requireParam' call
    // Inline function 'kotlin.contracts.contract' call
    if (tmp0_2) {
      break $l$block_2;
    }
    var message_2 = 'digestLength cannot be negative';
    throw InvalidParameterException_init_$Create$(toString(message_2));
  }
  tmp.u40_1 = _Buffer___init__impl__mrnqm7(new Int8Array(blockSize));
  $this.s40_1 = algorithm;
  $this.t40_1 = digestLength;
  $this.v40_1 = 0;
  return $this;
}
protoOf(Digest).w40 = function () {
  return this.t40_1;
};
protoOf(Digest).x40 = function () {
  return this.s40_1;
};
protoOf(Digest).y40 = function (input) {
  // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
  var this_0 = this.u40_1;
  // Inline function 'kotlin.contracts.contract' call
  var p2 = input.length;
  this.z40(input, 0, p2);
  // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
  var bufPos = this.v40_1;
  // Inline function 'kotlin.contracts.contract' call
  fill(_Buffer___get_value__impl__xxr8tn(this_0), 0, bufPos);
  var p0 = _Buffer___get_value__impl__xxr8tn(this_0);
  var digest = this.a41(p0, bufPos);
  // Inline function 'org.kotlincrypto.core.digest.internal.commonReset' call
  // Inline function 'kotlin.contracts.contract' call
  fill(_Buffer___get_value__impl__xxr8tn(this_0), 0);
  this.v40_1 = 0;
  this.b41();
  return digest;
};
protoOf(Digest).z40 = function (input, offset, len) {
  var tmp0 = this.u40_1;
  var tmp8 = this.v40_1;
  $l$block: {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonUpdate' call
    // Inline function 'kotlin.contracts.contract' call
    var buf = _Buffer___get_value__impl__xxr8tn(tmp0);
    var blockSize = buf.length;
    var limitInput = offset + len | 0;
    var posInput = offset;
    var posBuf = tmp8;
    if (posBuf > 0) {
      if ((posBuf + len | 0) < blockSize) {
        var tmp4 = posBuf;
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = posInput;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = input;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, buf, tmp4, startIndex, limitInput);
        this.v40_1 = posBuf + len | 0;
        break $l$block;
      }
      var needed = blockSize - posBuf | 0;
      var tmp4_0 = posBuf;
      var tmp6 = posInput;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = posInput + needed | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = input;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, buf, tmp4_0, tmp6, endIndex);
      this.c41(buf, 0);
      posBuf = 0;
      posInput = posInput + needed | 0;
    }
    $l$loop: while (posInput < limitInput) {
      var posNext = posInput + blockSize | 0;
      if (posNext > limitInput) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex_0 = posInput;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = input;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_1, buf, 0, startIndex_0, limitInput);
        posBuf = limitInput - posInput | 0;
        break $l$loop;
      }
      var p1 = posInput;
      this.c41(input, p1);
      posInput = posNext;
    }
    this.v40_1 = posBuf;
  }
};
protoOf(Digest).equals = function (other) {
  var tmp;
  if (other instanceof Digest) {
    tmp = equals(other.u40_1, this.u40_1);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(Digest).hashCode = function () {
  return Buffer__hashCode_impl_3ylui6(this.u40_1);
};
protoOf(Digest).toString = function () {
  // Inline function 'org.kotlincrypto.core.digest.internal.commonToString' call
  return 'Digest[' + this.x40() + ']@' + this.hashCode();
};
function Digest() {
}
//region block: exports
export {
  Digest_init_$Init$ as Digest_init_$Init$oh8vbjf23gs6,
  Digest as Digest1vc95ftpmqvn1,
};
//endregion
