import {
  ArrayList_init_$Create$1jemgvhi5v0js as ArrayList_init_$Create$,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$2429fvs1h56dm as IllegalStateException_init_$Create$,
  isInterface3d6p8outrmvmk as isInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException_init_$Create$1j1aj36nbo0wg as IllegalArgumentException_init_$Create$,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_instance3sox3h548pjra as StringCompanionObject_instance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3ivpeip4ouddx as ArrayList_init_$Create$_0,
  HashSet_init_$Create$33p49hmosnvr4 as HashSet_init_$Create$,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  KSerializerzf77vz1967fq as KSerializer,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
  TextContent1rb6ftlpvl1d2 as TextContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull2i7tb1ukmw7gz as firstOrNull_0,
} from './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.mjs';
import {
  discard2nktejhnnvzvk as discard,
  readBytes2b47ed7nra7rg as readBytes,
  readText3x4cv5p7hylp as readText,
} from './ktor-ktor-io.mjs';
import {
  JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException,
  ContentConverteryzo4k0ursexh as ContentConverter,
} from './ktor-ktor-serialization.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForLambda(KotlinxSerializationConverter$serializeNullable$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$_0, CoroutineImpl);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(KotlinxSerializationConverter$serializeNullable$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$serializeNullable$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter$deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($serializeNullableCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($deserializeCOROUTINE$, CoroutineImpl);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, [ContentConverter], [4, 3]);
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = get_providers();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    var tmp0_safe_receiver = element.l3b(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.x(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.f39(contentType, new KotlinxSerializationConverter(format));
}
function KotlinxSerializationConverter$serializeNullable$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  this.u3b_1 = $$this$unsafeFlow;
  this.v3b_1 = $contentType;
  this.w3b_1 = $charset;
  this.x3b_1 = $typeInfo;
  this.y3b_1 = $value;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).k3a = function (value, $completion) {
  var tmp = this.l3a(value, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).z8 = function (p1, $completion) {
  return this.k3a((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          var tmp0 = this.u3b_1;
          var tmp2 = this.z3b_1;
          this.a3c_1 = tmp0;
          this.i8_1 = 1;
          suspendResult = tmp2.b3c(this.v3b_1, this.w3b_1, this.x3b_1, this.y3b_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.i8_1 = 2;
          suspendResult = this.a3c_1.k1x(ARGUMENT, this);
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
protoOf(KotlinxSerializationConverter$serializeNullable$o$collect$slambda).l3a = function (value, completion) {
  var i = new KotlinxSerializationConverter$serializeNullable$o$collect$slambda(this.u3b_1, this.v3b_1, this.w3b_1, this.x3b_1, this.y3b_1, completion);
  i.z3b_1 = value;
  return i;
};
function KotlinxSerializationConverter$serializeNullable$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  var i = new KotlinxSerializationConverter$serializeNullable$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
  var l = function (value, $completion) {
    return i.k3a(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.k3c_1 = _this__u8e3s4;
  this.l3c_1 = collector;
}
protoOf($collectCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          var $this$unsafeFlow = this.l3c_1;
          this.i8_1 = 1;
          var tmp_0 = KotlinxSerializationConverter$serializeNullable$o$collect$slambda_0($this$unsafeFlow, this.k3c_1.n3c_1, this.k3c_1.o3c_1, this.k3c_1.p3c_1, this.k3c_1.q3c_1, null);
          suspendResult = this.k3c_1.m3c_1.w1w(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  this.z3c_1 = $$this$unsafeFlow;
  this.a3d_1 = $charset;
  this.b3d_1 = $typeInfo;
  this.c3d_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).k3a = function (value, $completion) {
  var tmp = this.l3a(value, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).z8 = function (p1, $completion) {
  return this.k3a((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          var tmp0 = this.z3c_1;
          var tmp2 = this.d3d_1;
          this.e3d_1 = tmp0;
          this.i8_1 = 1;
          suspendResult = tmp2.i39(this.a3d_1, this.b3d_1, this.c3d_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.i8_1 = 2;
          suspendResult = this.e3d_1.k1x(ARGUMENT, this);
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
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).l3a = function (value, completion) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.z3c_1, this.a3d_1, this.b3d_1, this.c3d_1, completion);
  i.d3d_1 = value;
  return i;
};
function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
  var l = function (value, $completion) {
    return i.k3a(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$_0(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.n3d_1 = _this__u8e3s4;
  this.o3d_1 = collector;
}
protoOf($collectCOROUTINE$_0).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          var $this$unsafeFlow = this.o3d_1;
          this.i8_1 = 1;
          var tmp_0 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0($this$unsafeFlow, this.n3d_1.q3d_1, this.n3d_1.r3d_1, this.n3d_1.s3d_1, null);
          suspendResult = this.n3d_1.p3d_1.w1w(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.sm(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.vm(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new ByteArrayContent(content_0, contentType);
    } else {
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  return tmp;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.t3d_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).k1x = function (value, $completion) {
  return this.t3d_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).d3 = function () {
  return this.t3d_1;
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
function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
  this.u3d_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).k1x = function (value, $completion) {
  return this.u3d_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).d3 = function () {
  return this.u3d_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
  return hashCode(this.d3());
};
function KotlinxSerializationConverter$serializeNullable$$inlined$map$1($this, $contentType, $charset, $typeInfo, $value) {
  this.m3c_1 = $this;
  this.n3c_1 = $contentType;
  this.o3c_1 = $charset;
  this.p3c_1 = $typeInfo;
  this.q3c_1 = $value;
}
protoOf(KotlinxSerializationConverter$serializeNullable$$inlined$map$1).l1x = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$(this, collector, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(KotlinxSerializationConverter$serializeNullable$$inlined$map$1).w1w = function (collector, $completion) {
  return this.l1x(collector, $completion);
};
function KotlinxSerializationConverter$serializeNullable$slambda(resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serializeNullable$slambda).e3e = function (it, $completion) {
  var tmp = this.f3e(it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(KotlinxSerializationConverter$serializeNullable$slambda).z8 = function (p1, $completion) {
  return this.e3e((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serializeNullable$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      if (tmp === 0) {
        this.j8_1 = 1;
        return !(this.d3e_1 == null);
      } else if (tmp === 1) {
        throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$serializeNullable$slambda).f3e = function (it, completion) {
  var i = new KotlinxSerializationConverter$serializeNullable$slambda(completion);
  i.d3e_1 = it;
  return i;
};
function KotlinxSerializationConverter$serializeNullable$slambda_0(resultContinuation) {
  var i = new KotlinxSerializationConverter$serializeNullable$slambda(resultContinuation);
  var l = function (it, $completion) {
    return i.e3e(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function KotlinxSerializationConverter$deserialize$$inlined$map$1($this, $charset, $typeInfo, $content) {
  this.p3d_1 = $this;
  this.q3d_1 = $charset;
  this.r3d_1 = $typeInfo;
  this.s3d_1 = $content;
}
protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).l1x = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$_0(this, collector, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).w1w = function (collector, $completion) {
  return this.l1x(collector, $completion);
};
function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
  this.o3e_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$slambda).k3b = function (it, $completion) {
  var tmp = this.l3a(it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).z8 = function (p1, $completion) {
  return this.k3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      if (tmp === 0) {
        this.j8_1 = 1;
        return !(this.p3e_1 == null) || this.o3e_1.t2b();
      } else if (tmp === 1) {
        throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).l3a = function (it, completion) {
  var i = new KotlinxSerializationConverter$deserialize$slambda(this.o3e_1, completion);
  i.p3e_1 = it;
  return i;
};
function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
  var l = function (it, $completion) {
    return i.k3b(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $serializeNullableCOROUTINE$(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.y3e_1 = _this__u8e3s4;
  this.z3e_1 = contentType;
  this.a3f_1 = charset;
  this.b3f_1 = typeInfo;
  this.c3f_1 = value;
}
protoOf($serializeNullableCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          this.i8_1 = 1;
          var this_0 = asFlow(this.y3e_1.e3f_1);
          var tmp_0 = new KotlinxSerializationConverter$serializeNullable$$inlined$map$1(this_0, this.z3e_1, this.a3f_1, this.b3f_1, this.c3f_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$serializeNullable$slambda_0(null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var fromExtension = suspendResult;
          if (!(fromExtension == null))
            return fromExtension;
          var tmp_1;
          try {
            tmp_1 = serializerForTypeInfo(this.y3e_1.d3f_1.um(), this.b3f_1);
          } catch ($p) {
            var tmp_2;
            if ($p instanceof SerializationException) {
              var cause = $p;
              tmp_2 = guessSerializer(this.c3f_1, this.y3e_1.d3f_1.um());
            } else {
              throw $p;
            }
            tmp_1 = tmp_2;
          }

          var serializer = tmp_1;
          return serializeContent(this.y3e_1, serializer, this.y3e_1.d3f_1, this.c3f_1, this.z3e_1, this.a3f_1);
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
function $deserializeCOROUTINE$(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.n3f_1 = _this__u8e3s4;
  this.o3f_1 = charset;
  this.p3f_1 = typeInfo;
  this.q3f_1 = content;
}
protoOf($deserializeCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 5;
          this.i8_1 = 1;
          var this_0 = asFlow(this.n3f_1.e3f_1);
          var tmp_0 = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, this.o3f_1, this.p3f_1, this.q3f_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.q3f_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var fromExtension = suspendResult;
          var tmp_1;
          if (!this.n3f_1.e3f_1.r()) {
            tmp_1 = !(fromExtension == null) || this.q3f_1.t2b();
          } else {
            tmp_1 = false;
          }

          if (tmp_1)
            return fromExtension;
          this.r3f_1 = serializerForTypeInfo(this.n3f_1.d3f_1.um(), this.p3f_1);
          this.i8_1 = 2;
          suspendResult = this.q3f_1.k2h(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var contentPacket = suspendResult;
          this.j8_1 = 3;
          var tmp0_subject = this.n3f_1.d3f_1;
          var tmp_2;
          if (isInterface(tmp0_subject, StringFormat)) {
            tmp_2 = this.n3f_1.d3f_1.tm(this.r3f_1, readText(contentPacket, this.o3f_1));
          } else {
            if (isInterface(tmp0_subject, BinaryFormat)) {
              tmp_2 = this.n3f_1.d3f_1.wm(this.r3f_1, readBytes(contentPacket));
            } else {
              discard(contentPacket);
              var message = 'Unsupported format ' + toString(this.n3f_1.d3f_1);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }

          return tmp_2;
        case 3:
          this.j8_1 = 5;
          var tmp_3 = this.l8_1;
          if (tmp_3 instanceof Error) {
            var cause = this.l8_1;
            throw new JsonConvertException('Illegal input: ' + cause.message, cause);
          } else {
            throw this.l8_1;
          }

        case 4:
          this.j8_1 = 5;
          return Unit_instance;
        case 5:
          throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 5) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
function KotlinxSerializationConverter(format) {
  this.d3f_1 = format;
  this.e3f_1 = extensions(this.d3f_1);
  var tmp;
  var tmp_0 = this.d3f_1;
  if (isInterface(tmp_0, BinaryFormat)) {
    tmp = true;
  } else {
    var tmp_1 = this.d3f_1;
    tmp = isInterface(tmp_1, StringFormat);
  }
  // Inline function 'kotlin.require' call
  if (!tmp) {
    var message = 'Only binary and string formats are supported, ' + toString(this.d3f_1) + ' is not supported.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
}
protoOf(KotlinxSerializationConverter).s3f = function (contentType, charset, typeInfo, value, $completion) {
  return this.t3f(contentType, charset, typeInfo, value, $completion);
};
protoOf(KotlinxSerializationConverter).g39 = function (contentType, charset, typeInfo, value, $completion) {
  return this.s3f(contentType, charset, typeInfo, value, $completion);
};
protoOf(KotlinxSerializationConverter).t3f = function (contentType, charset, typeInfo, value, $completion) {
  var tmp = new $serializeNullableCOROUTINE$(this, contentType, charset, typeInfo, value, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(KotlinxSerializationConverter).h39 = function (contentType, charset, typeInfo, value, $completion) {
  return this.t3f(contentType, charset, typeInfo, value, $completion);
};
protoOf(KotlinxSerializationConverter).i39 = function (charset, typeInfo, content, $completion) {
  var tmp = new $deserializeCOROUTINE$(this, charset, typeInfo, content, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.h2x_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (tmp0_safe_receiver.k().r()) {
      tmp_0 = null;
    } else {
      tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
    }
    tmp = tmp_0;
  }
  var tmp2_elvis_lhs = tmp;
  var tmp_1;
  if (tmp2_elvis_lhs == null) {
    var tmp1_safe_receiver = module_0.zm(typeInfo.f2x_1);
    tmp_1 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp2_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.f2x_1), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_instance));
  } else {
    if (!(value == null) ? isInterface(value, KtList) : false) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (!(value == null) ? isArray(value) : false) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
      } else {
        if (!(value == null) ? isInterface(value, KtSet) : false) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (!(value == null) ? isInterface(value, KtMap) : false) {
            var keySerializer = elementSerializer(value.k2(), module_0);
            var valueSerializer = elementSerializer(value.l2(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.zm(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.h2x_1;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.t();
  while (_iterator__ex2g4s.u()) {
    var item = _iterator__ex2g4s.v();
    var tmp$ret$0 = guessSerializer(item, module_0);
    destination.x(tmp$ret$0);
  }
  // Inline function 'kotlin.collections.distinctBy' call
  var set = HashSet_init_$Create$();
  var list = ArrayList_init_$Create$();
  var _iterator__ex2g4s_0 = destination.t();
  while (_iterator__ex2g4s_0.u()) {
    var e = _iterator__ex2g4s_0.v();
    var key = e.zl().jn();
    if (set.x(key)) {
      list.x(e);
    }
  }
  var serializers = list;
  if (serializers.z() > 1) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
    var _iterator__ex2g4s_1 = serializers.t();
    while (_iterator__ex2g4s_1.u()) {
      var item_0 = _iterator__ex2g4s_1.v();
      var tmp$ret$5 = item_0.zl().jn();
      destination_0.x(tmp$ret$5);
    }
    // Inline function 'kotlin.error' call
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
  if (selected.zl().cn()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$8;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.r();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$8 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s_2 = _this__u8e3s4.t();
    while (_iterator__ex2g4s_2.u()) {
      var element = _iterator__ex2g4s_2.v();
      if (element == null) {
        tmp$ret$8 = true;
        break $l$block_0;
      }
    }
    tmp$ret$8 = false;
  }
  if (tmp$ret$8) {
    return get_nullable(selected);
  }
  return selected;
}
function get_providers() {
  return emptyList();
}
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion
