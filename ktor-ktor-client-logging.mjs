import {
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toString1pkumu07cwy4m as toString,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  StringBuilder_init_$Create$322n630qt3r8c as StringBuilder_init_$Create$,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  println2shhhgwwt4c61 as println,
  ArrayList_init_$Create$1jemgvhi5v0js as ArrayList_init_$Create$,
  toString30pk9tzaqopn as toString_0,
  Collection1k04j3hzsbod0 as Collection,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  emptyList1g2z5xcrvp2zy as emptyList,
  toList3jhuyej2anx2q as toList,
  sortedWith2csnbbb21k0lg as sortedWith,
  joinToString1cxrrlmo0chqs as joinToString,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  Comparator2b3maoeh98xtg as Comparator,
  hashCodeq5arwsb9dgti as hashCode,
  compareValues1n2ayl87ihzfk as compareValues,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Job13y4jkazwjho0 as Job,
  GlobalScope_instance1goye8260az8c as GlobalScope_instance,
  Dispatchers_getInstancewbokwrm9sosb as Dispatchers_getInstance,
  launch1c91vkjzdi9sd as launch,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
} from './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.mjs';
import { atomic$boolean$1iggki4z65a2h as atomic$boolean$1 } from './88b0986a7186d029-atomicfu-js-ir.mjs';
import {
  ReadChannelContentz1amb4hnpqp4 as ReadChannelContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  Url2829xxbhyjpua as Url,
  HttpHeaders_getInstance1z5nmwg0t7mku as HttpHeaders_getInstance,
  charset1dribv3ku48b1 as charset,
  contentType317fn4f991q9a as contentType,
  WriteChannelContent1d7f40hsfcaxg as WriteChannelContent,
  ByteArrayContent2n0wb43y6ugs1 as ByteArrayContent,
} from './ktor-ktor-http.mjs';
import {
  Phases_getInstance16mtoo1oa3tq as Phases_getInstance,
  Phases_getInstance28e8qkhwmygkk as Phases_getInstance_0,
  Phases_getInstance3j81i0dosd478 as Phases_getInstance_1,
  Plugin_getInstance3as3q11myteya as Plugin_getInstance,
  ResponseObserver69e7bll10ek6 as ResponseObserver,
  HttpClientPlugin3rce8c1crrw1q as HttpClientPlugin,
  HttpResponse1532ob1hsse1y as HttpResponse,
  HttpResponseContainer3r9yzy4mwwvc9 as HttpResponseContainer,
} from './ktor-ktor-client-core.mjs';
import {
  Charsets_getInstanceq0o82sizm30g as Charsets_getInstance,
  ByteChannelgfqke9q216t7 as ByteChannel,
  readText3x4cv5p7hylp as readText,
  writer1eia5its2a1fh as writer,
  WriterScope3b0bo1enaee6b as WriterScope,
  closeqm43o3junf8o as close,
  writeFullyk99j76vpom59 as writeFully,
} from './ktor-ktor-io.mjs';
import {
  AttributeKey3aq8ytwgx54f7 as AttributeKey,
  PipelineContext34fsb0mycu471 as PipelineContext,
  copyToBoth3ldmovxh3mg5n as copyToBoth,
} from './ktor-ktor-utils.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForCoroutine($logResponseExceptionCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($logResponseBodyCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($closeResponseLogCOROUTINE$, CoroutineImpl);
initMetadataForClass(HttpClientCallLogger, 'HttpClientCallLogger', VOID, VOID, VOID, [1, 0]);
initMetadataForClass(LogLevel, 'LogLevel', VOID, Enum);
initMetadataForClass(LoggedContent, 'LoggedContent', VOID, ReadChannelContent);
initMetadataForCompanion(Companion);
initMetadataForClass(SimpleLogger, 'SimpleLogger', SimpleLogger);
initMetadataForClass(Config, 'Config', Config);
initMetadataForCompanion(Companion_0, VOID, [HttpClientPlugin]);
initMetadataForLambda(Logging$setupRequestLogging$slambda, CoroutineImpl, VOID, [2]);
initMetadataForLambda(Logging$logRequestBody$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(Logging$setupResponseLogging$slambda, CoroutineImpl, VOID, [2]);
initMetadataForLambda(Logging$setupResponseLogging$slambda_1, CoroutineImpl, VOID, [2]);
initMetadataForLambda(Logging$setupResponseLogging$slambda_3, CoroutineImpl, VOID, [1]);
initMetadataForClass(Logging, 'Logging', VOID, VOID, VOID, [1, 2]);
initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
initMetadataForCoroutine($logResponseBodyCOROUTINE$_0, CoroutineImpl);
initMetadataForLambda(toReadChannel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($observeCOROUTINE$, CoroutineImpl);
//endregion
function $logResponseExceptionCOROUTINE$(_this__u8e3s4, message, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.u53_1 = _this__u8e3s4;
  this.v53_1 = message;
}
protoOf($logResponseExceptionCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = this.u53_1.z53_1.n1h(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var this_0 = this.v53_1;
          this.u53_1.w53_1.p40(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())));
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
function $logResponseBodyCOROUTINE$(_this__u8e3s4, message, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.l54_1 = _this__u8e3s4;
  this.m54_1 = message;
}
protoOf($logResponseBodyCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = this.l54_1.a54_1.n1h(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.l54_1.y53_1.q(this.m54_1);
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
function $closeResponseLogCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.v54_1 = _this__u8e3s4;
}
protoOf($closeResponseLogCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          if (!this.v54_1.c54_1.atomicfu$compareAndSet(false, true))
            return Unit_instance;
          this.i8_1 = 1;
          suspendResult = this.v54_1.z53_1.n1h(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var message = toString(trim(this.v54_1.y53_1));
          if (charSequenceLength(message) > 0) {
            this.v54_1.w53_1.p40(message);
          }

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
function HttpClientCallLogger(logger) {
  this.w53_1 = logger;
  this.x53_1 = StringBuilder_init_$Create$();
  this.y53_1 = StringBuilder_init_$Create$();
  this.z53_1 = Job();
  this.a54_1 = Job();
  this.b54_1 = atomic$boolean$1(false);
  this.c54_1 = atomic$boolean$1(false);
}
protoOf(HttpClientCallLogger).w54 = function (message) {
  var tmp0 = this.x53_1;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.appendLine' call
  var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
  // Inline function 'kotlin.text.appendLine' call
  tmp0.q(value).s(_Char___init__impl__6a9atx(10));
};
protoOf(HttpClientCallLogger).x54 = function (message) {
  var tmp0 = this.y53_1;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.appendLine' call
  var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
  // Inline function 'kotlin.text.appendLine' call
  tmp0.q(value).s(_Char___init__impl__6a9atx(10));
  this.a54_1.v1n();
};
protoOf(HttpClientCallLogger).y54 = function (message, $completion) {
  var tmp = new $logResponseExceptionCOROUTINE$(this, message, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(HttpClientCallLogger).z54 = function (message, $completion) {
  var tmp = new $logResponseBodyCOROUTINE$(this, message, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(HttpClientCallLogger).a55 = function () {
  if (!this.b54_1.atomicfu$compareAndSet(false, true))
    return Unit_instance;
  try {
    var message = toString(trim(this.x53_1));
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(message) > 0) {
      this.w53_1.p40(message);
    }
  }finally {
    this.z53_1.v1n();
  }
};
protoOf(HttpClientCallLogger).b55 = function ($completion) {
  var tmp = new $closeResponseLogCOROUTINE$(this, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
var LogLevel_ALL_instance;
var LogLevel_HEADERS_instance;
var LogLevel_BODY_instance;
var LogLevel_INFO_instance;
var LogLevel_NONE_instance;
var LogLevel_entriesInitialized;
function LogLevel_initEntries() {
  if (LogLevel_entriesInitialized)
    return Unit_instance;
  LogLevel_entriesInitialized = true;
  LogLevel_ALL_instance = new LogLevel('ALL', 0, true, true, true);
  LogLevel_HEADERS_instance = new LogLevel('HEADERS', 1, true, true, false);
  LogLevel_BODY_instance = new LogLevel('BODY', 2, true, false, true);
  LogLevel_INFO_instance = new LogLevel('INFO', 3, true, false, false);
  LogLevel_NONE_instance = new LogLevel('NONE', 4, false, false, false);
}
function LogLevel(name, ordinal, info, headers, body) {
  Enum.call(this, name, ordinal);
  this.e55_1 = info;
  this.f55_1 = headers;
  this.g55_1 = body;
}
function LogLevel_HEADERS_getInstance() {
  LogLevel_initEntries();
  return LogLevel_HEADERS_instance;
}
function LogLevel_INFO_getInstance() {
  LogLevel_initEntries();
  return LogLevel_INFO_instance;
}
function LogLevel_NONE_getInstance() {
  LogLevel_initEntries();
  return LogLevel_NONE_instance;
}
function LoggedContent(originalContent, channel) {
  ReadChannelContent.call(this);
  this.i55_1 = originalContent;
  this.j55_1 = channel;
  this.k55_1 = this.i55_1.p38();
  this.l55_1 = this.i55_1.r38();
  this.m55_1 = this.i55_1.q38();
  this.n55_1 = this.i55_1.n33();
}
protoOf(LoggedContent).p38 = function () {
  return this.k55_1;
};
protoOf(LoggedContent).r38 = function () {
  return this.l55_1;
};
protoOf(LoggedContent).q38 = function () {
  return this.m55_1;
};
protoOf(LoggedContent).n33 = function () {
  return this.n55_1;
};
protoOf(LoggedContent).v38 = function () {
  return this.j55_1;
};
function Companion() {
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function get_SIMPLE(_this__u8e3s4) {
  return new SimpleLogger();
}
function SimpleLogger() {
}
protoOf(SimpleLogger).p40 = function (message) {
  println('HttpClient: ' + message);
};
function get_ClientCallLogger() {
  _init_properties_Logging_kt__66pui5();
  return ClientCallLogger;
}
var ClientCallLogger;
function get_DisableLogging() {
  _init_properties_Logging_kt__66pui5();
  return DisableLogging;
}
var DisableLogging;
function Config() {
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.o55_1 = ArrayList_init_$Create$();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_0.p55_1 = ArrayList_init_$Create$();
  this.q55_1 = null;
  this.r55_1 = LogLevel_HEADERS_getInstance();
}
protoOf(Config).s55 = function (value) {
  this.q55_1 = value;
};
protoOf(Config).t55 = function () {
  var tmp0_elvis_lhs = this.q55_1;
  return tmp0_elvis_lhs == null ? get_DEFAULT(Companion_instance) : tmp0_elvis_lhs;
};
function setupRequestLogging($this, client) {
  var tmp = Phases_getInstance().l46_1;
  client.x43_1.s2w(tmp, Logging$setupRequestLogging$slambda_0($this, null));
}
function logRequest($this, request, $completion) {
  var tmp = request.x45_1;
  var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
  var logger = new HttpClientCallLogger($this.u55_1);
  request.z45_1.v2p(get_ClientCallLogger(), logger);
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  if ($this.v55_1.e55_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value = 'REQUEST: ' + Url(request.u45_1).toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.q(value).s(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'METHOD: ' + request.v45_1.toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.q(value_0).s(_Char___init__impl__6a9atx(10));
  }
  if ($this.v55_1.f55_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = 'COMMON HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    this_0.q(value_1).s(_Char___init__impl__6a9atx(10));
    logHeaders(this_0, request.w45_1.l2t(), $this.x55_1);
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = 'CONTENT HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    this_0.q(value_2).s(_Char___init__impl__6a9atx(10));
    var tmp0 = $this.x55_1;
    var tmp$ret$9;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element.z55_1(HttpHeaders_getInstance().z2z_1)) {
          tmp$ret$9 = element;
          break $l$block;
        }
      }
      tmp$ret$9 = null;
    }
    var tmp0_safe_receiver = tmp$ret$9;
    var contentLengthPlaceholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y55_1;
    var tmp0_0 = $this.x55_1;
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = tmp0_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (element_0.z55_1(HttpHeaders_getInstance().c30_1)) {
          tmp$ret$11 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$11 = null;
    }
    var tmp1_safe_receiver = tmp$ret$11;
    var contentTypePlaceholder = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y55_1;
    var tmp2_safe_receiver = content.r38();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = HttpHeaders_getInstance().z2z_1;
      logHeader(this_0, tmp_0, contentLengthPlaceholder == null ? tmp2_safe_receiver.toString() : contentLengthPlaceholder);
    }
    var tmp3_safe_receiver = content.p38();
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_1 = HttpHeaders_getInstance().c30_1;
      logHeader(this_0, tmp_1, contentTypePlaceholder == null ? tmp3_safe_receiver.toString() : contentTypePlaceholder);
    }
    logHeaders(this_0, content.n33().l2t(), $this.x55_1);
  }
  var message = this_0.toString();
  // Inline function 'kotlin.text.isNotEmpty' call
  if (charSequenceLength(message) > 0) {
    logger.w54(message);
  }
  var tmp_2;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(message) === 0) {
    tmp_2 = true;
  } else {
    tmp_2 = !$this.v55_1.g55_1;
  }
  if (tmp_2) {
    logger.a55();
    return null;
  }
  return logRequestBody($this, content, logger, $completion);
}
function logRequestBody($this, content, logger, $completion) {
  var requestLog = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = 'BODY Content-Type: ' + toString_0(content.p38());
  // Inline function 'kotlin.text.appendLine' call
  requestLog.q(value).s(_Char___init__impl__6a9atx(10));
  var tmp0_safe_receiver = content.p38();
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().a2m_1 : tmp1_elvis_lhs;
  var channel = ByteChannel();
  var tmp = GlobalScope_instance;
  var tmp_0 = Dispatchers_getInstance().t1r_1;
  var tmp_1 = launch(tmp, tmp_0, VOID, Logging$logRequestBody$slambda_0(channel, charset_0, requestLog, null));
  tmp_1.k1h(Logging$logRequestBody$lambda(logger, requestLog));
  return observe(content, channel, $completion);
}
function logRequestException($this, context, cause) {
  if ($this.v55_1.e55_1) {
    $this.u55_1.p40('REQUEST ' + Url(context.u45_1).toString() + ' failed with exception: ' + cause.toString());
  }
}
function setupResponseLogging($this, client) {
  var tmp = Phases_getInstance_0().n4c_1;
  client.y43_1.s2w(tmp, Logging$setupResponseLogging$slambda_0($this, null));
  var tmp_0 = Phases_getInstance_1().r46_1;
  client.w43_1.s2w(tmp_0, Logging$setupResponseLogging$slambda_2($this, null));
  if (!$this.v55_1.g55_1)
    return Unit_instance;
  var observer = Logging$setupResponseLogging$slambda_4($this, null);
  Plugin_getInstance().j4r(new ResponseObserver(observer), client);
}
function logResponseException($this, log, request, cause) {
  if (!$this.v55_1.e55_1)
    return Unit_instance;
  log.q('RESPONSE ' + request.d48().toString() + ' failed with exception: ' + cause.toString());
}
function Companion_0() {
  Companion_instance_0 = this;
  this.a56_1 = new AttributeKey('ClientLogging');
}
protoOf(Companion_0).i1 = function () {
  return this.a56_1;
};
protoOf(Companion_0).b56 = function (block) {
  // Inline function 'kotlin.apply' call
  var this_0 = new Config();
  block(this_0);
  var config = this_0;
  return new Logging(config.t55(), config.r55_1, config.o55_1, config.p55_1);
};
protoOf(Companion_0).z46 = function (block) {
  return this.b56(block);
};
protoOf(Companion_0).c56 = function (plugin, scope) {
  setupRequestLogging(plugin, scope);
  setupResponseLogging(plugin, scope);
};
protoOf(Companion_0).a47 = function (plugin, scope) {
  return this.c56(plugin instanceof Logging ? plugin : THROW_CCE(), scope);
};
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function shouldBeLogged($this, request) {
  var tmp;
  if ($this.w55_1.r()) {
    tmp = true;
  } else {
    var tmp0 = $this.w55_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.r();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element(request)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function Logging$setupRequestLogging$slambda(this$0, resultContinuation) {
  this.l56_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$setupRequestLogging$slambda).o44 = function ($this$intercept, it, $completion) {
  var tmp = this.p44($this$intercept, it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$setupRequestLogging$slambda).y8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.o44(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$setupRequestLogging$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 8;
          if (!shouldBeLogged(this.l56_1, this.m56_1.o2w_1)) {
            this.m56_1.o2w_1.z45_1.v2p(get_DisableLogging(), Unit_instance);
            return Unit_instance;
          }

          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = logRequest(this.l56_1, this.m56_1.o2w_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.p56_1 = suspendResult;
          this.j8_1 = 8;
          this.i8_1 = 3;
          continue $sm;
        case 2:
          this.j8_1 = 8;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            var _ = this.l8_1;
            var tmp_1 = this;
            tmp_1.p56_1 = null;
            this.i8_1 = 3;
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 3:
          this.j8_1 = 8;
          this.o56_1 = this.p56_1;
          this.i8_1 = 4;
          continue $sm;
        case 4:
          this.j8_1 = 7;
          this.j8_1 = 6;
          this.i8_1 = 5;
          var tmp0_elvis_lhs = this.o56_1;
          suspendResult = this.m56_1.s2v(tmp0_elvis_lhs == null ? this.m56_1.r2v() : tmp0_elvis_lhs, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.j8_1 = 8;
          this.i8_1 = 9;
          continue $sm;
        case 6:
          this.j8_1 = 7;
          var tmp_2 = this.l8_1;
          if (tmp_2 instanceof Error) {
            var cause = this.l8_1;
            logRequestException(this.l56_1, this.m56_1.o2w_1, cause);
            throw cause;
          } else {
            throw this.l8_1;
          }

        case 7:
          this.j8_1 = 8;
          var t = this.l8_1;
          throw t;
        case 8:
          throw this.l8_1;
        case 9:
          this.j8_1 = 8;
          return Unit_instance;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 8) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$setupRequestLogging$slambda).p44 = function ($this$intercept, it, completion) {
  var i = new Logging$setupRequestLogging$slambda(this.l56_1, completion);
  i.m56_1 = $this$intercept;
  i.n56_1 = it;
  return i;
};
function Logging$setupRequestLogging$slambda_0(this$0, resultContinuation) {
  var i = new Logging$setupRequestLogging$slambda(this$0, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.o44($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$logRequestBody$slambda($channel, $charset, $requestLog, resultContinuation) {
  this.y56_1 = $channel;
  this.z56_1 = $charset;
  this.a57_1 = $requestLog;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$logRequestBody$slambda).k2i = function ($this$launch, $completion) {
  var tmp = this.l2i($this$launch, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$logRequestBody$slambda).z8 = function (p1, $completion) {
  return this.k2i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(Logging$logRequestBody$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          var tmp0 = this.y56_1;
          this.d57_1 = this.z56_1;
          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = tmp0.k2h(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.c57_1 = readText(ARGUMENT, this.d57_1);
          this.j8_1 = 3;
          this.i8_1 = 4;
          continue $sm;
        case 2:
          this.j8_1 = 3;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            var cause = this.l8_1;
            var tmp_1 = this;
            tmp_1.c57_1 = null;
            this.i8_1 = 4;
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 3:
          throw this.l8_1;
        case 4:
          this.j8_1 = 3;
          var tmp0_elvis_lhs = this.c57_1;
          var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
          var tmp0_0 = this.a57_1;
          var value = 'BODY START';
          tmp0_0.q(value).s(_Char___init__impl__6a9atx(10));
          this.a57_1.q(text).s(_Char___init__impl__6a9atx(10));
          this.a57_1.q('BODY END');
          return Unit_instance;
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
protoOf(Logging$logRequestBody$slambda).l2i = function ($this$launch, completion) {
  var i = new Logging$logRequestBody$slambda(this.y56_1, this.z56_1, this.a57_1, completion);
  i.b57_1 = $this$launch;
  return i;
};
function Logging$logRequestBody$slambda_0($channel, $charset, $requestLog, resultContinuation) {
  var i = new Logging$logRequestBody$slambda($channel, $charset, $requestLog, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.k2i($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
function Logging$logRequestBody$lambda($logger, $requestLog) {
  return function (it) {
    $logger.w54($requestLog.toString());
    $logger.a55();
    return Unit_instance;
  };
}
function Logging$setupResponseLogging$slambda(this$0, resultContinuation) {
  this.m57_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$setupResponseLogging$slambda).m4d = function ($this$intercept, response, $completion) {
  var tmp = this.n4d($this$intercept, response, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$setupResponseLogging$slambda).y8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.m4d(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$setupResponseLogging$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 10;
          if (this.m57_1.v55_1.equals(LogLevel_NONE_getInstance()) || this.o57_1.y48().j47().u2p(get_DisableLogging()))
            return Unit_instance;
          this.p57_1 = this.o57_1.y48().j47().s2p(get_ClientCallLogger());
          this.r57_1 = StringBuilder_init_$Create$();
          this.q57_1 = false;
          this.i8_1 = 1;
          continue $sm;
        case 1:
          this.j8_1 = 4;
          this.j8_1 = 3;
          logResponseHeader(this.r57_1, this.o57_1.y48().v44(), this.m57_1.v55_1, this.m57_1.x55_1);
          this.i8_1 = 2;
          suspendResult = this.n57_1.s2v(this.n57_1.r2v(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.j8_1 = 10;
          this.i8_1 = 7;
          continue $sm;
        case 3:
          this.j8_1 = 4;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            var cause = this.l8_1;
            logResponseException(this.m57_1, this.r57_1, this.o57_1.y48().b48(), cause);
            this.q57_1 = true;
            throw cause;
          } else {
            throw this.l8_1;
          }

        case 4:
          this.j8_1 = 10;
          this.s57_1 = this.l8_1;
          this.p57_1.x54(this.r57_1.toString());
          if (this.q57_1 || !this.m57_1.v55_1.g55_1) {
            this.i8_1 = 5;
            suspendResult = this.p57_1.b55(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.i8_1 = 6;
            continue $sm;
          }

        case 5:
          this.i8_1 = 6;
          continue $sm;
        case 6:
          throw this.s57_1;
        case 7:
          this.j8_1 = 10;
          this.p57_1.x54(this.r57_1.toString());
          if (this.q57_1 || !this.m57_1.v55_1.g55_1) {
            this.i8_1 = 8;
            suspendResult = this.p57_1.b55(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.i8_1 = 9;
            continue $sm;
          }

        case 8:
          this.i8_1 = 9;
          continue $sm;
        case 9:
          return Unit_instance;
        case 10:
          throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 10) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$setupResponseLogging$slambda).n4d = function ($this$intercept, response, completion) {
  var i = new Logging$setupResponseLogging$slambda(this.m57_1, completion);
  i.n57_1 = $this$intercept;
  i.o57_1 = response;
  return i;
};
function Logging$setupResponseLogging$slambda_0(this$0, resultContinuation) {
  var i = new Logging$setupResponseLogging$slambda(this$0, resultContinuation);
  var l = function ($this$intercept, response, $completion) {
    return i.m4d($this$intercept, response, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$setupResponseLogging$slambda_1(this$0, resultContinuation) {
  this.b58_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$setupResponseLogging$slambda_1).i45 = function ($this$intercept, it, $completion) {
  var tmp = this.j45($this$intercept, it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$setupResponseLogging$slambda_1).y8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.i45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$setupResponseLogging$slambda_1).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 6;
          if (this.b58_1.v55_1.equals(LogLevel_NONE_getInstance()) || this.c58_1.o2w_1.j47().u2p(get_DisableLogging())) {
            return Unit_instance;
          }

          this.j8_1 = 3;
          this.i8_1 = 1;
          suspendResult = this.c58_1.t2v(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.j8_1 = 6;
          this.i8_1 = 2;
          continue $sm;
        case 2:
          this.j8_1 = 6;
          return Unit_instance;
        case 3:
          this.j8_1 = 6;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            this.e58_1 = this.l8_1;
            var log = StringBuilder_init_$Create$();
            this.f58_1 = this.c58_1.o2w_1.j47().s2p(get_ClientCallLogger());
            logResponseException(this.b58_1, log, this.c58_1.o2w_1.b48(), this.e58_1);
            this.i8_1 = 4;
            suspendResult = this.f58_1.y54(log.toString(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 4:
          this.i8_1 = 5;
          suspendResult = this.f58_1.b55(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          throw this.e58_1;
        case 6:
          throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 6) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$setupResponseLogging$slambda_1).j45 = function ($this$intercept, it, completion) {
  var i = new Logging$setupResponseLogging$slambda_1(this.b58_1, completion);
  i.c58_1 = $this$intercept;
  i.d58_1 = it;
  return i;
};
function Logging$setupResponseLogging$slambda_2(this$0, resultContinuation) {
  var i = new Logging$setupResponseLogging$slambda_1(this$0, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.i45($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$setupResponseLogging$slambda_3(this$0, resultContinuation) {
  this.o58_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$setupResponseLogging$slambda_3).h4e = function (it, $completion) {
  var tmp = this.i4e(it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$setupResponseLogging$slambda_3).z8 = function (p1, $completion) {
  return this.h4e(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
};
protoOf(Logging$setupResponseLogging$slambda_3).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 10;
          if (this.o58_1.v55_1.equals(LogLevel_NONE_getInstance()) || this.p58_1.y48().j47().u2p(get_DisableLogging())) {
            return Unit_instance;
          }

          this.q58_1 = this.p58_1.y48().j47().s2p(get_ClientCallLogger());
          this.r58_1 = StringBuilder_init_$Create$();
          this.i8_1 = 1;
          continue $sm;
        case 1:
          this.j8_1 = 4;
          this.j8_1 = 3;
          this.i8_1 = 2;
          suspendResult = logResponseBody(this.r58_1, contentType(this.p58_1), this.p58_1.c17(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          this.j8_1 = 10;
          this.i8_1 = 7;
          continue $sm;
        case 3:
          this.j8_1 = 4;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            var _ = this.l8_1;
            this.j8_1 = 10;
            this.i8_1 = 7;
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 4:
          this.j8_1 = 10;
          this.s58_1 = this.l8_1;
          this.i8_1 = 5;
          var this_0 = this.r58_1.toString();
          suspendResult = this.q58_1.z54(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.i8_1 = 6;
          suspendResult = this.q58_1.b55(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 6:
          throw this.s58_1;
        case 7:
          this.j8_1 = 10;
          this.i8_1 = 8;
          var this_1 = this.r58_1.toString();
          suspendResult = this.q58_1.z54(toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE())), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 8:
          this.i8_1 = 9;
          suspendResult = this.q58_1.b55(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 9:
          return Unit_instance;
        case 10:
          throw this.l8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.j8_1 === 10) {
        throw e;
      } else {
        this.i8_1 = this.j8_1;
        this.l8_1 = e;
      }
    }
   while (true);
};
protoOf(Logging$setupResponseLogging$slambda_3).i4e = function (it, completion) {
  var i = new Logging$setupResponseLogging$slambda_3(this.o58_1, completion);
  i.p58_1 = it;
  return i;
};
function Logging$setupResponseLogging$slambda_4(this$0, resultContinuation) {
  var i = new Logging$setupResponseLogging$slambda_3(this$0, resultContinuation);
  var l = function (it, $completion) {
    return i.h4e(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function Logging(logger, level, filters, sanitizedHeaders) {
  Companion_getInstance_0();
  filters = filters === VOID ? emptyList() : filters;
  this.u55_1 = logger;
  this.v55_1 = level;
  this.w55_1 = filters;
  this.x55_1 = sanitizedHeaders;
}
var properties_initialized_Logging_kt_588vu7;
function _init_properties_Logging_kt__66pui5() {
  if (!properties_initialized_Logging_kt_588vu7) {
    properties_initialized_Logging_kt_588vu7 = true;
    ClientCallLogger = new AttributeKey('CallLogger');
    DisableLogging = new AttributeKey('DisableLogging');
  }
}
function logHeaders(_this__u8e3s4, headers, sanitizedHeaders) {
  // Inline function 'kotlin.collections.sortedBy' call
  var this_0 = toList(headers);
  // Inline function 'kotlin.comparisons.compareBy' call
  var tmp = logHeaders$lambda;
  var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
  var sortedHeaders = sortedWith(this_0, tmp$ret$0);
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = sortedHeaders.t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    // Inline function 'kotlin.collections.component1' call
    var key = element.i1();
    // Inline function 'kotlin.collections.component2' call
    var values = element.j1();
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = sanitizedHeaders.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (element_0.z55_1(key)) {
          tmp$ret$5 = element_0;
          break $l$block;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp0_safe_receiver = tmp$ret$5;
    var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y55_1;
    logHeader(_this__u8e3s4, key, placeholder == null ? joinToString(values, '; ') : placeholder);
  }
}
function logHeader(_this__u8e3s4, key, value) {
  // Inline function 'kotlin.text.appendLine' call
  var value_0 = '-> ' + key + ': ' + value;
  // Inline function 'kotlin.text.appendLine' call
  _this__u8e3s4.y(value_0).s(_Char___init__impl__6a9atx(10));
}
function logResponseHeader(log, response, level, sanitizedHeaders) {
  // Inline function 'kotlin.with' call
  if (level.e55_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value = 'RESPONSE: ' + response.q38().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.q(value).s(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'METHOD: ' + response.y48().b48().z48().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.q(value_0).s(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = 'FROM: ' + response.y48().b48().d48().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.q(value_1).s(_Char___init__impl__6a9atx(10));
  }
  if (level.f55_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = 'COMMON HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    log.q(value_2).s(_Char___init__impl__6a9atx(10));
    logHeaders(log, response.n33().l2t(), sanitizedHeaders);
  }
}
function logResponseBody(log, contentType, content, $completion) {
  var tmp = new $logResponseBodyCOROUTINE$_0(log, contentType, content, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
}
function sam$kotlin_Comparator$0(function_0) {
  this.h59_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0).tc = function (a, b) {
  return this.h59_1(a, b);
};
protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
  return this.tc(a, b);
};
protoOf(sam$kotlin_Comparator$0).d3 = function () {
  return this.h59_1;
};
protoOf(sam$kotlin_Comparator$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Comparator) : false) {
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
protoOf(sam$kotlin_Comparator$0).hashCode = function () {
  return hashCode(this.d3());
};
function logHeaders$lambda(a, b) {
  // Inline function 'kotlin.comparisons.compareValuesBy' call
  var tmp = a.i1();
  var tmp$ret$1 = b.i1();
  return compareValues(tmp, tmp$ret$1);
}
function $logResponseBodyCOROUTINE$_0(log, contentType, content, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.b59_1 = log;
  this.c59_1 = contentType;
  this.d59_1 = content;
}
protoOf($logResponseBodyCOROUTINE$_0).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          this.e59_1 = this.b59_1;
          var tmp0 = this.e59_1;
          var value = 'BODY Content-Type: ' + toString_0(this.c59_1);
          tmp0.q(value).s(_Char___init__impl__6a9atx(10));
          var tmp0_0 = this.e59_1;
          var value_0 = 'BODY START';
          tmp0_0.q(value_0).s(_Char___init__impl__6a9atx(10));
          var tmp0_1 = this.d59_1;
          var tmp0_safe_receiver = this.c59_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
          this.g59_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().a2m_1 : tmp1_elvis_lhs;
          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = tmp0_1.k2h(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.f59_1 = readText(ARGUMENT, this.g59_1);
          this.j8_1 = 3;
          this.i8_1 = 4;
          continue $sm;
        case 2:
          this.j8_1 = 3;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            var cause = this.l8_1;
            var tmp_1 = this;
            tmp_1.f59_1 = null;
            this.i8_1 = 4;
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 3:
          throw this.l8_1;
        case 4:
          this.j8_1 = 3;
          var tmp2_elvis_lhs = this.f59_1;
          var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
          this.e59_1.q(message).s(_Char___init__impl__6a9atx(10));
          this.e59_1.q('BODY END');
          return Unit_instance;
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
function observe(_this__u8e3s4, log, $completion) {
  var tmp = new $observeCOROUTINE$(_this__u8e3s4, log, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
}
function toReadChannel(_this__u8e3s4) {
  var tmp = GlobalScope_instance;
  var tmp_0 = Dispatchers_getInstance().s1r_1;
  return writer(tmp, tmp_0, VOID, toReadChannel$slambda_0(_this__u8e3s4, null)).j1s();
}
function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
  this.b5a_1 = $this_toReadChannel;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(toReadChannel$slambda).w49 = function ($this$writer, $completion) {
  var tmp = this.x49($this$writer, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(toReadChannel$slambda).z8 = function (p1, $completion) {
  return this.w49((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(toReadChannel$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = this.b5a_1.x38(this.c5a_1.j1s(), this);
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
protoOf(toReadChannel$slambda).x49 = function ($this$writer, completion) {
  var i = new toReadChannel$slambda(this.b5a_1, completion);
  i.c5a_1 = $this$writer;
  return i;
};
function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
  var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
  var l = function ($this$writer, $completion) {
    return i.w49($this$writer, $completion);
  };
  l.$arity = 1;
  return l;
}
function $observeCOROUTINE$(_this__u8e3s4, log, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.q59_1 = _this__u8e3s4;
  this.r59_1 = log;
}
protoOf($observeCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          var tmp0_subject = this.q59_1;
          if (tmp0_subject instanceof ByteArrayContent) {
            this.i8_1 = 1;
            suspendResult = writeFully(this.r59_1, this.q59_1.s38(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            if (tmp0_subject instanceof ReadChannelContent) {
              var tmp_0 = this;
              var responseChannel = ByteChannel();
              var content = this.q59_1.v38();
              copyToBoth(content, this.r59_1, responseChannel);
              tmp_0.s59_1 = new LoggedContent(this.q59_1, responseChannel);
              this.i8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject instanceof WriteChannelContent) {
                var tmp_1 = this;
                var responseChannel_0 = ByteChannel();
                var content_0 = toReadChannel(this.q59_1);
                copyToBoth(content_0, this.r59_1, responseChannel_0);
                tmp_1.s59_1 = new LoggedContent(this.q59_1, responseChannel_0);
                this.i8_1 = 2;
                continue $sm;
              } else {
                var tmp_2 = this;
                close(this.r59_1);
                tmp_2.s59_1 = this.q59_1;
                this.i8_1 = 2;
                continue $sm;
              }
            }
          }

        case 1:
          close(this.r59_1);
          this.s59_1 = this.q59_1;
          this.i8_1 = 2;
          continue $sm;
        case 2:
          return this.s59_1;
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
function get_DEFAULT(_this__u8e3s4) {
  return get_SIMPLE(_this__u8e3s4);
}
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  LogLevel_INFO_getInstance as LogLevel_INFO_getInstance3sh3dgfxmixei,
  Companion_getInstance_0 as Companion_getInstance2gnxf515mehql,
};
//endregion
