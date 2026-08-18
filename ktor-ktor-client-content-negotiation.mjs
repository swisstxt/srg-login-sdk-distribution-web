import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID3gxj6tk5isa35 as VOID,
  plus1ogy4liedzq5j as plus,
  toMutableSetjdpdbr9jsqq8 as toMutableSet,
  ArrayList_init_$Create$1jemgvhi5v0js as ArrayList_init_$Create$,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString1pkumu07cwy4m as toString,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  Unitkvevlwgzwiuc as Unit,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  joinToString1cxrrlmo0chqs as joinToString,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3ivpeip4ouddx as ArrayList_init_$Create$_0,
  Exceptiondt2hlxn7j7vw as Exception,
  Exception_init_$Init$2jymvyiuv5u42 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  PrimitiveClasses_getInstance6p7zmos9nw3c as PrimitiveClasses_getInstance,
  getKClass3t8tygqu4lcxf as getKClass,
  setOf45ia9pnfhe90 as setOf,
  startsWith26w8qjqapeeq6 as startsWith,
  endsWith3cq61xxngobwh as endsWith,
  LinkedHashSet_init_$Create$2lru2gvxodydo as LinkedHashSet_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
import {
  PipelineContext34fsb0mycu471 as PipelineContext,
  AttributeKey3aq8ytwgx54f7 as AttributeKey,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
} from './ktor-ktor-utils.mjs';
import {
  HttpResponseContainer3r9yzy4mwwvc9 as HttpResponseContainer,
  Phases_getInstance153dg9ipormlv as Phases_getInstance,
  Phases_getInstance3j81i0dosd478 as Phases_getInstance_0,
  HttpClientPlugin3rce8c1crrw1q as HttpClientPlugin,
  accept2gi3b7wj4jds9 as accept,
  EmptyContent_getInstance55lf7d2oew98 as EmptyContent_getInstance,
} from './ktor-ktor-client-core.mjs';
import {
  contentType317fn4f991q9a as contentType,
  Application_getInstanceueakgx5l255p as Application_getInstance,
  HttpHeaders_getInstance1z5nmwg0t7mku as HttpHeaders_getInstance,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  contentType2zzm38yxo3syt as contentType_0,
  charset1dribv3ku48b1 as charset,
  NullBody_instanceoz9dr731l81q as NullBody_instance,
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
} from './ktor-ktor-http.mjs';
import {
  suitableCharset1jgdcpdzbzgzn as suitableCharset,
  register$default3bjg8fus08vmt as register$default,
  Configuration20xgygxdzhlk5 as Configuration,
  deserializew5ebvcgde1j8 as deserialize,
} from './ktor-ktor-serialization.mjs';
import {
  Charsets_getInstanceq0o82sizm30g as Charsets_getInstance,
  ByteReadChannel2wzou76jce72d as ByteReadChannel,
} from './ktor-ktor-io.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
initMetadataForClass(ContentNegotiation$Config$defaultMatcher$1);
initMetadataForLambda(ContentNegotiation$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
initMetadataForLambda(ContentNegotiation$Plugin$install$slambda_1, CoroutineImpl, VOID, [2]);
initMetadataForClass(Config, 'Config', Config, VOID, [Configuration]);
initMetadataForObject(Plugin, 'Plugin', VOID, VOID, [HttpClientPlugin]);
initMetadataForCoroutine($convertRequestCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($convertResponseCOROUTINE$, CoroutineImpl);
initMetadataForClass(ContentNegotiation, 'ContentNegotiation', VOID, VOID, VOID, [2, 5]);
initMetadataForClass(ContentConverterException, 'ContentConverterException', VOID, Exception);
initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher');
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
  this.r50_1 = converter;
  this.s50_1 = contentTypeToSend;
  this.t50_1 = contentTypeMatcher;
}
function defaultMatcher($this, pattern) {
  return new ContentNegotiation$Config$defaultMatcher$1(pattern);
}
function ContentNegotiation$Config$defaultMatcher$1($pattern) {
  this.u50_1 = $pattern;
}
protoOf(ContentNegotiation$Config$defaultMatcher$1).v50 = function (contentType) {
  return contentType.e2z(this.u50_1);
};
function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
  this.e51_1 = $plugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$Plugin$install$slambda).m44 = function ($this$intercept, it, $completion) {
  var tmp = this.n44($this$intercept, it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(ContentNegotiation$Plugin$install$slambda).y8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.m44(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$Plugin$install$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          this.i8_1 = 1;
          suspendResult = this.e51_1.j51(this.f51_1.n2w_1, this.f51_1.q2v(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var tmp0_elvis_lhs = suspendResult;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }

          var result = tmp_0;
          this.i8_1 = 2;
          suspendResult = this.f51_1.r2v(result, this);
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
protoOf(ContentNegotiation$Plugin$install$slambda).n44 = function ($this$intercept, it, completion) {
  var i = new ContentNegotiation$Plugin$install$slambda(this.e51_1, completion);
  i.f51_1 = $this$intercept;
  i.g51_1 = it;
  return i;
};
function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
  var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.m44($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
  this.s51_1 = $plugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$Plugin$install$slambda_1).g45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
  var tmp = this.h45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(ContentNegotiation$Plugin$install$slambda_1).y8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.g45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$Plugin$install$slambda_1).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          this.v51_1 = this.u51_1.re();
          var body = this.u51_1.se();
          var tmp0_elvis_lhs = contentType(this.t51_1.n2w_1.t44());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            this.t51_1;
            get_LOGGER().j2x('Response doesn\'t have "Content-Type" header, skipping ContentNegotiation plugin');
            return Unit_instance;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }

          var contentType_0 = tmp_0;
          var charset = suitableCharset(this.t51_1.n2w_1.y47().m33());
          this.i8_1 = 1;
          suspendResult = this.s51_1.w51(this.t51_1.n2w_1.y47().a48(), this.v51_1, body, contentType_0, charset, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var tmp1_elvis_lhs = suspendResult;
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }

          var deserializedBody = tmp_1;
          var result = new HttpResponseContainer(this.v51_1, deserializedBody);
          this.i8_1 = 2;
          suspendResult = this.t51_1.r2v(result, this);
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
protoOf(ContentNegotiation$Plugin$install$slambda_1).h45 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
  var i = new ContentNegotiation$Plugin$install$slambda_1(this.s51_1, completion);
  i.t51_1 = $this$intercept;
  i.u51_1 = _name_for_destructuring_parameter_0__wldtmu;
  return i;
};
function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
  var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
  var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion) {
    return i.g45($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $completion);
  };
  l.$arity = 2;
  return l;
}
function Config() {
  this.x51_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.y51_1 = ArrayList_init_$Create$();
}
protoOf(Config).c39 = function (contentType, converter, configuration) {
  var matcher = contentType.equals(Application_getInstance().x2x_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
  this.z51(contentType, converter, matcher, configuration);
};
protoOf(Config).z51 = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
  // Inline function 'kotlin.apply' call
  configuration(converter);
  var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
  this.y51_1.x(registration);
};
function Plugin() {
  Plugin_instance = this;
  this.a52_1 = new AttributeKey('ContentNegotiation');
}
protoOf(Plugin).i1 = function () {
  return this.a52_1;
};
protoOf(Plugin).b52 = function (block) {
  // Inline function 'kotlin.apply' call
  var this_0 = new Config();
  block(this_0);
  var config = this_0;
  return new ContentNegotiation(config.y51_1, config.x51_1);
};
protoOf(Plugin).w46 = function (block) {
  return this.b52(block);
};
protoOf(Plugin).c52 = function (plugin, scope) {
  var tmp = Phases_getInstance().g4c_1;
  scope.t43_1.r2w(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
  var tmp_0 = Phases_getInstance_0().r46_1;
  scope.u43_1.r2w(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
};
protoOf(Plugin).x46 = function (plugin, scope) {
  return this.c52(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
};
var Plugin_instance;
function Plugin_getInstance() {
  if (Plugin_instance == null)
    new Plugin();
  return Plugin_instance;
}
function ContentNegotiation$convertRequest$lambda(it) {
  return toString(it.r50_1);
}
function $convertRequestCOROUTINE$(_this__u8e3s4, request, body, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.l52_1 = _this__u8e3s4;
  this.m52_1 = request;
  this.n52_1 = body;
}
protoOf($convertRequestCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 7;
          var _iterator__ex2g4s = this.l52_1.h51_1.t();
          while (_iterator__ex2g4s.u()) {
            var element = _iterator__ex2g4s.v();
            l$ret$1: do {
              get_LOGGER().j2x('Adding Accept=' + element.s50_1.a2z_1 + ' header for ' + this.m52_1.s45_1.toString());
              if (this.m52_1.u45_1.t2t(HttpHeaders_getInstance().j2z_1, element.s50_1.toString())) {
                break l$ret$1;
              }
              accept(this.m52_1, element.s50_1);
            }
             while (false);
          }

          var tmp_0;
          var tmp_1 = this.n52_1;
          if (tmp_1 instanceof OutgoingContent) {
            tmp_0 = true;
          } else {
            var tmp0 = this.l52_1.i51_1;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp_2;
              if (isInterface(tmp0, Collection)) {
                tmp_2 = tmp0.r();
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                tmp$ret$2 = false;
                break l$ret$3;
              }
              var _iterator__ex2g4s_0 = tmp0.t();
              while (_iterator__ex2g4s_0.u()) {
                var element_0 = _iterator__ex2g4s_0.v();
                if (element_0.u9(this.n52_1)) {
                  tmp$ret$2 = true;
                  break l$ret$3;
                }
              }
              tmp$ret$2 = false;
            }
             while (false);
            tmp_0 = tmp$ret$2;
          }

          if (tmp_0) {
            get_LOGGER().j2x('Body type ' + toString(getKClassFromExpression(this.n52_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.m52_1.s45_1.toString() + '.'));
            return null;
          }

          var tmp_3 = this;
          var tmp0_elvis_lhs = contentType_0(this.m52_1);
          var tmp_4;
          if (tmp0_elvis_lhs == null) {
            this.l52_1;
            get_LOGGER().j2x("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.m52_1.s45_1.toString() + '.');
            return null;
          } else {
            tmp_4 = tmp0_elvis_lhs;
          }

          tmp_3.p52_1 = tmp_4;
          var tmp_5 = this.n52_1;
          if (tmp_5 instanceof Unit) {
            get_LOGGER().j2x('Sending empty body for ' + this.m52_1.s45_1.toString());
            this.m52_1.u45_1.y2t(HttpHeaders_getInstance().b30_1);
            return EmptyContent_getInstance();
          }

          var tmp_6 = this;
          var tmp0_0 = this.l52_1.h51_1;
          var destination = ArrayList_init_$Create$();
          var _iterator__ex2g4s_1 = tmp0_0.t();
          while (_iterator__ex2g4s_1.u()) {
            var element_1 = _iterator__ex2g4s_1.v();
            if (element_1.t50_1.v50(this.p52_1)) {
              destination.x(element_1);
            }
          }

          var tmp_7;
          if (!destination.r()) {
            tmp_7 = destination;
          } else {
            tmp_7 = null;
          }

          var tmp1_elvis_lhs = tmp_7;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            this.l52_1;
            get_LOGGER().j2x('None of the registered converters match request Content-Type=' + this.p52_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.m52_1.s45_1.toString() + '.'));
            return null;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }

          tmp_6.o52_1 = tmp_8;
          if (this.m52_1.n4r() == null) {
            get_LOGGER().j2x('Request has unknown body type. Skipping ContentNegotiation for ' + this.m52_1.s45_1.toString() + '.');
            return null;
          }

          this.m52_1.u45_1.y2t(HttpHeaders_getInstance().b30_1);
          this.t52_1 = this.o52_1;
          this.i8_1 = 1;
          continue $sm;
        case 1:
          this.s52_1 = this.t52_1.t();
          this.i8_1 = 2;
          continue $sm;
        case 2:
          if (!this.s52_1.u()) {
            this.i8_1 = 5;
            continue $sm;
          }

          var element_2 = this.s52_1.v();
          this.r52_1 = element_2;
          this.i8_1 = 3;
          var tmp0_elvis_lhs_0 = charset(this.p52_1);
          var tmp_9 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().z2l_1 : tmp0_elvis_lhs_0;
          var tmp_10 = ensureNotNull(this.m52_1.n4r());
          var this_0 = this.n52_1;
          var tmp_11;
          if (!equals(this_0, NullBody_instance)) {
            tmp_11 = this_0;
          } else {
            tmp_11 = null;
          }

          suspendResult = this.r52_1.r50_1.f39(this.p52_1, tmp_9, tmp_10, tmp_11, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          var result = suspendResult;
          if (!(result == null)) {
            get_LOGGER().j2x('Converted request body using ' + toString(this.r52_1.r50_1) + ' for ' + this.m52_1.s45_1.toString());
          }

          var result_0 = result;
          if (!(result_0 == null)) {
            this.q52_1 = result_0;
            this.i8_1 = 6;
            continue $sm;
          } else {
            this.i8_1 = 4;
            continue $sm;
          }

        case 4:
          this.i8_1 = 2;
          continue $sm;
        case 5:
          this.q52_1 = null;
          if (false) {
            this.i8_1 = 1;
            continue $sm;
          }

          this.i8_1 = 6;
          continue $sm;
        case 6:
          var tmp2_elvis_lhs = this.q52_1;
          var tmp_12;
          if (tmp2_elvis_lhs == null) {
            var tmp_13 = "Can't convert " + toString(this.n52_1) + ' with contentType ' + this.p52_1.toString() + ' using converters ';
            throw new ContentConverterException(tmp_13 + joinToString(this.o52_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$convertRequest$lambda));
          } else {
            tmp_12 = tmp2_elvis_lhs;
          }

          var serializedContent = tmp_12;
          return serializedContent;
        case 7:
          throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 7) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
function $convertResponseCOROUTINE$(_this__u8e3s4, requestUrl, info, body, responseContentType, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.c53_1 = _this__u8e3s4;
  this.d53_1 = requestUrl;
  this.e53_1 = info;
  this.f53_1 = body;
  this.g53_1 = responseContentType;
  this.h53_1 = charset;
}
protoOf($convertResponseCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          var tmp_0 = this.f53_1;
          if (!isInterface(tmp_0, ByteReadChannel)) {
            get_LOGGER().j2x('Response body is already transformed. Skipping ContentNegotiation for ' + this.d53_1.toString() + '.');
            return null;
          }

          if (this.c53_1.i51_1.e2(this.e53_1.e2x_1)) {
            get_LOGGER().j2x('Response body type ' + toString(this.e53_1.e2x_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.d53_1.toString() + '.'));
            return null;
          }

          var tmp0 = this.c53_1.h51_1;
          var destination = ArrayList_init_$Create$();
          var _iterator__ex2g4s = tmp0.t();
          while (_iterator__ex2g4s.u()) {
            var element = _iterator__ex2g4s.v();
            if (element.t50_1.v50(this.g53_1)) {
              destination.x(element);
            }
          }

          var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
          var _iterator__ex2g4s_0 = destination.t();
          while (_iterator__ex2g4s_0.u()) {
            var item = _iterator__ex2g4s_0.v();
            destination_0.x(item.r50_1);
          }

          var tmp_1;
          if (!destination_0.r()) {
            tmp_1 = destination_0;
          } else {
            tmp_1 = null;
          }

          var tmp0_elvis_lhs = tmp_1;
          var tmp_2;
          if (tmp0_elvis_lhs == null) {
            this.c53_1;
            get_LOGGER().j2x('None of the registered converters match response with Content-Type=' + this.g53_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.d53_1.toString() + '.'));
            return null;
          } else {
            tmp_2 = tmp0_elvis_lhs;
          }

          var suitableConverters = tmp_2;
          this.i8_1 = 1;
          suspendResult = deserialize(suitableConverters, this.f53_1, this.e53_1, this.h53_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          if (!isInterface(result, ByteReadChannel)) {
            get_LOGGER().j2x('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.d53_1.toString() + '.');
          }

          return result;
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
function ContentNegotiation(registrations, ignoredTypes) {
  Plugin_getInstance();
  this.h51_1 = registrations;
  this.i51_1 = ignoredTypes;
}
protoOf(ContentNegotiation).j51 = function (request, body, $completion) {
  var tmp = new $convertRequestCOROUTINE$(this, request, body, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(ContentNegotiation).w51 = function (requestUrl, info, body, responseContentType, charset, $completion) {
  var tmp = new $convertResponseCOROUTINE$(this, requestUrl, info, body, responseContentType, charset, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
function ContentConverterException(message) {
  Exception_init_$Init$(message, this);
  captureStack(this, ContentConverterException);
}
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().sa(), PrimitiveClasses_getInstance().oa(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
  }
}
function JsonContentTypeMatcher() {
}
protoOf(JsonContentTypeMatcher).v50 = function (contentType) {
  if (contentType.e2z(Application_getInstance().x2x_1)) {
    return true;
  }
  var value = contentType.d2z().toString();
  return startsWith(value, 'application/') && endsWith(value, '+json');
};
var JsonContentTypeMatcher_instance;
function JsonContentTypeMatcher_getInstance() {
  return JsonContentTypeMatcher_instance;
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
  if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
  }
}
//region block: post-declaration
protoOf(Config).d39 = register$default;
//endregion
//region block: init
JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
//endregion
//region block: exports
export {
  Plugin_getInstance as Plugin_getInstanceeejthkpca6y0,
};
//endregion
