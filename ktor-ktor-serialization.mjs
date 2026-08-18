import {
  Exceptiondt2hlxn7j7vw as Exception,
  VOID3gxj6tk5isa35 as VOID,
  Exception_init_$Init$gwg5c35cbjjd as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Charsets_getInstanceq0o82sizm30g as Charsets_getInstance,
  Companion_instance39ywpcf3b7irp as Companion_instance,
} from './ktor-ktor-io.mjs';
import {
  HttpHeaders_getInstance1z5nmwg0t7mku as HttpHeaders_getInstance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
  NullBody_instanceoz9dr731l81q as NullBody_instance,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull2i7tb1ukmw7gz as firstOrNull,
} from './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException', VOID, Exception);
initMetadataForClass(JsonConvertException, 'JsonConvertException', VOID, ContentConvertException);
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.c39(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.c39.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
initMetadataForInterface(Configuration, 'Configuration');
function serialize(contentType, charset, typeInfo, value, $completion) {
  return this.f39(contentType, charset, typeInfo, value, $completion);
}
function serializeNullable(contentType, charset, typeInfo, value, $completion) {
  return this.e39(contentType, charset, typeInfo, ensureNotNull(value), $completion);
}
initMetadataForInterface(ContentConverter, 'ContentConverter', VOID, VOID, VOID, [4, 3]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForLambda(deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($deserializeCOROUTINE$, CoroutineImpl);
//endregion
function ContentConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  Exception_init_$Init$(message, cause, this);
  captureStack(this, ContentConvertException);
}
function JsonConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  ContentConvertException.call(this, message, cause);
  captureStack(this, JsonConvertException);
}
function Configuration$register$lambda($this$null) {
  return Unit_instance;
}
function Configuration() {
}
function ContentConverter() {
}
function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  var tmp = new $deserializeCOROUTINE$(_this__u8e3s4, body, typeInfo, charset, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().z2l_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().z2l_1 : defaultCharset;
  var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.gc(HttpHeaders_getInstance().k2z_1)).t();
  while (tmp0_iterator.u()) {
    var charset = tmp0_iterator.v().re();
    if (charset === '*')
      return defaultCharset;
    else if (Companion_instance.a2p(charset))
      return Companion_instance.z2o(charset);
  }
  return null;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.t39_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).j1x = function (value, $completion) {
  return this.t39_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).d3 = function () {
  return this.t39_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, FlowCollector) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.d3(), other.d3());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
  return hashCode(this.d3());
};
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  this.c3a_1 = $$this$unsafeFlow;
  this.d3a_1 = $charset;
  this.e3a_1 = $typeInfo;
  this.f3a_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$o$collect$slambda).i3a = function (value, $completion) {
  var tmp = this.j3a(value, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(deserialize$o$collect$slambda).z8 = function (p1, $completion) {
  return this.i3a((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$o$collect$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          var tmp0 = this.c3a_1;
          var tmp2 = this.g3a_1;
          this.h3a_1 = tmp0;
          this.i8_1 = 1;
          suspendResult = tmp2.g39(this.d3a_1, this.e3a_1, this.f3a_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.i8_1 = 2;
          suspendResult = this.h3a_1.j1x(ARGUMENT, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          return Unit_instance;
        case 3:
          throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 3) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
protoOf(deserialize$o$collect$slambda).j3a = function (value, completion) {
  var i = new deserialize$o$collect$slambda(this.c3a_1, this.d3a_1, this.e3a_1, this.f3a_1, completion);
  i.g3a_1 = value;
  return i;
};
function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
  var l = function (value, $completion) {
    return i.i3a(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.s3a_1 = _this__u8e3s4;
  this.t3a_1 = collector;
}
protoOf($collectCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          var $this$unsafeFlow = this.t3a_1;
          this.i8_1 = 1;
          var tmp_0 = deserialize$o$collect$slambda_0($this$unsafeFlow, this.s3a_1.v3a_1, this.s3a_1.w3a_1, this.s3a_1.x3a_1, null);
          suspendResult = this.s3a_1.u3a_1.v1w(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 2) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
function deserialize$$inlined$map$1($this, $charset, $typeInfo, $body) {
  this.u3a_1 = $this;
  this.v3a_1 = $charset;
  this.w3a_1 = $typeInfo;
  this.x3a_1 = $body;
}
protoOf(deserialize$$inlined$map$1).k1x = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$(this, collector, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(deserialize$$inlined$map$1).v1w = function (collector, $completion) {
  return this.k1x(collector, $completion);
};
function deserialize$slambda($body, resultContinuation) {
  this.g3b_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$slambda).i3b = function (it, $completion) {
  var tmp = this.j3a(it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(deserialize$slambda).z8 = function (p1, $completion) {
  return this.i3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      if (tmp === 0) {
        this.j8_1 = 1;
        return !(this.h3b_1 == null) || this.g3b_1.s2b();
      } else if (tmp === 1) {
        throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(deserialize$slambda).j3a = function (it, completion) {
  var i = new deserialize$slambda(this.g3b_1, completion);
  i.h3b_1 = it;
  return i;
};
function deserialize$slambda_0($body, resultContinuation) {
  var i = new deserialize$slambda($body, resultContinuation);
  var l = function (it, $completion) {
    return i.i3b(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $deserializeCOROUTINE$(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.p39_1 = _this__u8e3s4;
  this.q39_1 = body;
  this.r39_1 = typeInfo;
  this.s39_1 = charset;
}
protoOf($deserializeCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          this.i8_1 = 1;
          var this_0 = asFlow(this.p39_1);
          var tmp_0 = new deserialize$$inlined$map$1(this_0, this.s39_1, this.r39_1, this.q39_1);
          suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.q39_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_1;
          if (!(result == null)) {
            tmp_1 = result;
          } else {
            if (!this.q39_1.s2b()) {
              tmp_1 = this.q39_1;
            } else {
              var tmp0_safe_receiver = this.r39_1.g2x_1;
              if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l()) === true) {
                tmp_1 = NullBody_instance;
              } else {
                throw new ContentConvertException('No suitable converter found for ' + this.r39_1.toString());
              }
            }
          }

          return tmp_1;
        case 2:
          throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 2) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
//region block: exports
export {
  deserialize as deserializew5ebvcgde1j8,
  register$default as register$default3bjg8fus08vmt,
  Configuration as Configuration20xgygxdzhlk5,
  ContentConverter as ContentConverteryzo4k0ursexh,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion
