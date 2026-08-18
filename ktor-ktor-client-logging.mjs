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
  this.q53_1 = _this__u8e3s4;
  this.r53_1 = message;
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
          suspendResult = this.q53_1.v53_1.m1h(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var this_0 = this.r53_1;
          this.q53_1.s53_1.n40(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())));
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
  this.h54_1 = _this__u8e3s4;
  this.i54_1 = message;
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
          suspendResult = this.h54_1.w53_1.m1h(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.h54_1.u53_1.q(this.i54_1);
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
  this.r54_1 = _this__u8e3s4;
}
protoOf($closeResponseLogCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 2;
          if (!this.r54_1.y53_1.atomicfu$compareAndSet(false, true))
            return Unit_instance;
          this.i8_1 = 1;
          suspendResult = this.r54_1.v53_1.m1h(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var message = toString(trim(this.r54_1.u53_1));
          if (charSequenceLength(message) > 0) {
            this.r54_1.s53_1.n40(message);
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
  this.s53_1 = logger;
  this.t53_1 = StringBuilder_init_$Create$();
  this.u53_1 = StringBuilder_init_$Create$();
  this.v53_1 = Job();
  this.w53_1 = Job();
  this.x53_1 = atomic$boolean$1(false);
  this.y53_1 = atomic$boolean$1(false);
}
protoOf(HttpClientCallLogger).s54 = function (message) {
  var tmp0 = this.t53_1;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.appendLine' call
  var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
  // Inline function 'kotlin.text.appendLine' call
  tmp0.q(value).s(_Char___init__impl__6a9atx(10));
};
protoOf(HttpClientCallLogger).t54 = function (message) {
  var tmp0 = this.u53_1;
  // Inline function 'kotlin.text.trim' call
  // Inline function 'kotlin.text.appendLine' call
  var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
  // Inline function 'kotlin.text.appendLine' call
  tmp0.q(value).s(_Char___init__impl__6a9atx(10));
  this.w53_1.u1n();
};
protoOf(HttpClientCallLogger).u54 = function (message, $completion) {
  var tmp = new $logResponseExceptionCOROUTINE$(this, message, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(HttpClientCallLogger).v54 = function (message, $completion) {
  var tmp = new $logResponseBodyCOROUTINE$(this, message, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(HttpClientCallLogger).w54 = function () {
  if (!this.x53_1.atomicfu$compareAndSet(false, true))
    return Unit_instance;
  try {
    var message = toString(trim(this.t53_1));
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(message) > 0) {
      this.s53_1.n40(message);
    }
  }finally {
    this.v53_1.u1n();
  }
};
protoOf(HttpClientCallLogger).x54 = function ($completion) {
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
  this.a55_1 = info;
  this.b55_1 = headers;
  this.c55_1 = body;
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
  this.e55_1 = originalContent;
  this.f55_1 = channel;
  this.g55_1 = this.e55_1.n38();
  this.h55_1 = this.e55_1.p38();
  this.i55_1 = this.e55_1.o38();
  this.j55_1 = this.e55_1.m33();
}
protoOf(LoggedContent).n38 = function () {
  return this.g55_1;
};
protoOf(LoggedContent).p38 = function () {
  return this.h55_1;
};
protoOf(LoggedContent).o38 = function () {
  return this.i55_1;
};
protoOf(LoggedContent).m33 = function () {
  return this.j55_1;
};
protoOf(LoggedContent).t38 = function () {
  return this.f55_1;
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
protoOf(SimpleLogger).n40 = function (message) {
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
  tmp.k55_1 = ArrayList_init_$Create$();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_0.l55_1 = ArrayList_init_$Create$();
  this.m55_1 = null;
  this.n55_1 = LogLevel_HEADERS_getInstance();
}
protoOf(Config).o55 = function (value) {
  this.m55_1 = value;
};
protoOf(Config).p55 = function () {
  var tmp0_elvis_lhs = this.m55_1;
  return tmp0_elvis_lhs == null ? get_DEFAULT(Companion_instance) : tmp0_elvis_lhs;
};
function setupRequestLogging($this, client) {
  var tmp = Phases_getInstance().j46_1;
  client.v43_1.r2w(tmp, Logging$setupRequestLogging$slambda_0($this, null));
}
function logRequest($this, request, $completion) {
  var tmp = request.v45_1;
  var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
  var logger = new HttpClientCallLogger($this.q55_1);
  request.x45_1.u2p(get_ClientCallLogger(), logger);
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  if ($this.r55_1.a55_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value = 'REQUEST: ' + Url(request.s45_1).toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.q(value).s(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'METHOD: ' + request.t45_1.toString();
    // Inline function 'kotlin.text.appendLine' call
    this_0.q(value_0).s(_Char___init__impl__6a9atx(10));
  }
  if ($this.r55_1.b55_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = 'COMMON HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    this_0.q(value_1).s(_Char___init__impl__6a9atx(10));
    logHeaders(this_0, request.u45_1.k2t(), $this.t55_1);
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = 'CONTENT HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    this_0.q(value_2).s(_Char___init__impl__6a9atx(10));
    var tmp0 = $this.t55_1;
    var tmp$ret$9;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element.v55_1(HttpHeaders_getInstance().y2z_1)) {
          tmp$ret$9 = element;
          break $l$block;
        }
      }
      tmp$ret$9 = null;
    }
    var tmp0_safe_receiver = tmp$ret$9;
    var contentLengthPlaceholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u55_1;
    var tmp0_0 = $this.t55_1;
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = tmp0_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (element_0.v55_1(HttpHeaders_getInstance().b30_1)) {
          tmp$ret$11 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$11 = null;
    }
    var tmp1_safe_receiver = tmp$ret$11;
    var contentTypePlaceholder = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u55_1;
    var tmp2_safe_receiver = content.p38();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = HttpHeaders_getInstance().y2z_1;
      logHeader(this_0, tmp_0, contentLengthPlaceholder == null ? tmp2_safe_receiver.toString() : contentLengthPlaceholder);
    }
    var tmp3_safe_receiver = content.n38();
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_1 = HttpHeaders_getInstance().b30_1;
      logHeader(this_0, tmp_1, contentTypePlaceholder == null ? tmp3_safe_receiver.toString() : contentTypePlaceholder);
    }
    logHeaders(this_0, content.m33().k2t(), $this.t55_1);
  }
  var message = this_0.toString();
  // Inline function 'kotlin.text.isNotEmpty' call
  if (charSequenceLength(message) > 0) {
    logger.s54(message);
  }
  var tmp_2;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(message) === 0) {
    tmp_2 = true;
  } else {
    tmp_2 = !$this.r55_1.c55_1;
  }
  if (tmp_2) {
    logger.w54();
    return null;
  }
  return logRequestBody($this, content, logger, $completion);
}
function logRequestBody($this, content, logger, $completion) {
  var requestLog = StringBuilder_init_$Create$();
  // Inline function 'kotlin.text.appendLine' call
  var value = 'BODY Content-Type: ' + toString_0(content.n38());
  // Inline function 'kotlin.text.appendLine' call
  requestLog.q(value).s(_Char___init__impl__6a9atx(10));
  var tmp0_safe_receiver = content.n38();
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().z2l_1 : tmp1_elvis_lhs;
  var channel = ByteChannel();
  var tmp = GlobalScope_instance;
  var tmp_0 = Dispatchers_getInstance().s1r_1;
  var tmp_1 = launch(tmp, tmp_0, VOID, Logging$logRequestBody$slambda_0(channel, charset_0, requestLog, null));
  tmp_1.j1h(Logging$logRequestBody$lambda(logger, requestLog));
  return observe(content, channel, $completion);
}
function logRequestException($this, context, cause) {
  if ($this.r55_1.a55_1) {
    $this.q55_1.n40('REQUEST ' + Url(context.s45_1).toString() + ' failed with exception: ' + cause.toString());
  }
}
function setupResponseLogging($this, client) {
  var tmp = Phases_getInstance_0().k4c_1;
  client.w43_1.r2w(tmp, Logging$setupResponseLogging$slambda_0($this, null));
  var tmp_0 = Phases_getInstance_1().p46_1;
  client.u43_1.r2w(tmp_0, Logging$setupResponseLogging$slambda_2($this, null));
  if (!$this.r55_1.c55_1)
    return Unit_instance;
  var observer = Logging$setupResponseLogging$slambda_4($this, null);
  Plugin_getInstance().g4r(new ResponseObserver(observer), client);
}
function logResponseException($this, log, request, cause) {
  if (!$this.r55_1.a55_1)
    return Unit_instance;
  log.q('RESPONSE ' + request.a48().toString() + ' failed with exception: ' + cause.toString());
}
function Companion_0() {
  Companion_instance_0 = this;
  this.w55_1 = new AttributeKey('ClientLogging');
}
protoOf(Companion_0).i1 = function () {
  return this.w55_1;
};
protoOf(Companion_0).x55 = function (block) {
  // Inline function 'kotlin.apply' call
  var this_0 = new Config();
  block(this_0);
  var config = this_0;
  return new Logging(config.p55(), config.n55_1, config.k55_1, config.l55_1);
};
protoOf(Companion_0).w46 = function (block) {
  return this.x55(block);
};
protoOf(Companion_0).y55 = function (plugin, scope) {
  setupRequestLogging(plugin, scope);
  setupResponseLogging(plugin, scope);
};
protoOf(Companion_0).x46 = function (plugin, scope) {
  return this.y55(plugin instanceof Logging ? plugin : THROW_CCE(), scope);
};
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 == null)
    new Companion_0();
  return Companion_instance_0;
}
function shouldBeLogged($this, request) {
  var tmp;
  if ($this.s55_1.r()) {
    tmp = true;
  } else {
    var tmp0 = $this.s55_1;
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
  this.h56_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$setupRequestLogging$slambda).m44 = function ($this$intercept, it, $completion) {
  var tmp = this.n44($this$intercept, it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$setupRequestLogging$slambda).y8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.m44(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$setupRequestLogging$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 8;
          if (!shouldBeLogged(this.h56_1, this.i56_1.n2w_1)) {
            this.i56_1.n2w_1.x45_1.u2p(get_DisableLogging(), Unit_instance);
            return Unit_instance;
          }

          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = logRequest(this.h56_1, this.i56_1.n2w_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.l56_1 = suspendResult;
          this.j8_1 = 8;
          this.i8_1 = 3;
          continue $sm;
        case 2:
          this.j8_1 = 8;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            var _ = this.l8_1;
            var tmp_1 = this;
            tmp_1.l56_1 = null;
            this.i8_1 = 3;
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 3:
          this.j8_1 = 8;
          this.k56_1 = this.l56_1;
          this.i8_1 = 4;
          continue $sm;
        case 4:
          this.j8_1 = 7;
          this.j8_1 = 6;
          this.i8_1 = 5;
          var tmp0_elvis_lhs = this.k56_1;
          suspendResult = this.i56_1.r2v(tmp0_elvis_lhs == null ? this.i56_1.q2v() : tmp0_elvis_lhs, this);
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
            logRequestException(this.h56_1, this.i56_1.n2w_1, cause);
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
protoOf(Logging$setupRequestLogging$slambda).n44 = function ($this$intercept, it, completion) {
  var i = new Logging$setupRequestLogging$slambda(this.h56_1, completion);
  i.i56_1 = $this$intercept;
  i.j56_1 = it;
  return i;
};
function Logging$setupRequestLogging$slambda_0(this$0, resultContinuation) {
  var i = new Logging$setupRequestLogging$slambda(this$0, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.m44($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$logRequestBody$slambda($channel, $charset, $requestLog, resultContinuation) {
  this.u56_1 = $channel;
  this.v56_1 = $charset;
  this.w56_1 = $requestLog;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$logRequestBody$slambda).j2i = function ($this$launch, $completion) {
  var tmp = this.k2i($this$launch, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$logRequestBody$slambda).z8 = function (p1, $completion) {
  return this.j2i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(Logging$logRequestBody$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          var tmp0 = this.u56_1;
          this.z56_1 = this.v56_1;
          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = tmp0.j2h(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.y56_1 = readText(ARGUMENT, this.z56_1);
          this.j8_1 = 3;
          this.i8_1 = 4;
          continue $sm;
        case 2:
          this.j8_1 = 3;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            var cause = this.l8_1;
            var tmp_1 = this;
            tmp_1.y56_1 = null;
            this.i8_1 = 4;
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 3:
          throw this.l8_1;
        case 4:
          this.j8_1 = 3;
          var tmp0_elvis_lhs = this.y56_1;
          var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
          var tmp0_0 = this.w56_1;
          var value = 'BODY START';
          tmp0_0.q(value).s(_Char___init__impl__6a9atx(10));
          this.w56_1.q(text).s(_Char___init__impl__6a9atx(10));
          this.w56_1.q('BODY END');
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
protoOf(Logging$logRequestBody$slambda).k2i = function ($this$launch, completion) {
  var i = new Logging$logRequestBody$slambda(this.u56_1, this.v56_1, this.w56_1, completion);
  i.x56_1 = $this$launch;
  return i;
};
function Logging$logRequestBody$slambda_0($channel, $charset, $requestLog, resultContinuation) {
  var i = new Logging$logRequestBody$slambda($channel, $charset, $requestLog, resultContinuation);
  var l = function ($this$launch, $completion) {
    return i.j2i($this$launch, $completion);
  };
  l.$arity = 1;
  return l;
}
function Logging$logRequestBody$lambda($logger, $requestLog) {
  return function (it) {
    $logger.s54($requestLog.toString());
    $logger.w54();
    return Unit_instance;
  };
}
function Logging$setupResponseLogging$slambda(this$0, resultContinuation) {
  this.i57_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$setupResponseLogging$slambda).j4d = function ($this$intercept, response, $completion) {
  var tmp = this.k4d($this$intercept, response, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$setupResponseLogging$slambda).y8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.j4d(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$setupResponseLogging$slambda).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 10;
          if (this.i57_1.r55_1.equals(LogLevel_NONE_getInstance()) || this.k57_1.v48().g47().t2p(get_DisableLogging()))
            return Unit_instance;
          this.l57_1 = this.k57_1.v48().g47().r2p(get_ClientCallLogger());
          this.n57_1 = StringBuilder_init_$Create$();
          this.m57_1 = false;
          this.i8_1 = 1;
          continue $sm;
        case 1:
          this.j8_1 = 4;
          this.j8_1 = 3;
          logResponseHeader(this.n57_1, this.k57_1.v48().t44(), this.i57_1.r55_1, this.i57_1.t55_1);
          this.i8_1 = 2;
          suspendResult = this.j57_1.r2v(this.j57_1.q2v(), this);
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
            logResponseException(this.i57_1, this.n57_1, this.k57_1.v48().y47(), cause);
            this.m57_1 = true;
            throw cause;
          } else {
            throw this.l8_1;
          }

        case 4:
          this.j8_1 = 10;
          this.o57_1 = this.l8_1;
          this.l57_1.t54(this.n57_1.toString());
          if (this.m57_1 || !this.i57_1.r55_1.c55_1) {
            this.i8_1 = 5;
            suspendResult = this.l57_1.x54(this);
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
          throw this.o57_1;
        case 7:
          this.j8_1 = 10;
          this.l57_1.t54(this.n57_1.toString());
          if (this.m57_1 || !this.i57_1.r55_1.c55_1) {
            this.i8_1 = 8;
            suspendResult = this.l57_1.x54(this);
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
protoOf(Logging$setupResponseLogging$slambda).k4d = function ($this$intercept, response, completion) {
  var i = new Logging$setupResponseLogging$slambda(this.i57_1, completion);
  i.j57_1 = $this$intercept;
  i.k57_1 = response;
  return i;
};
function Logging$setupResponseLogging$slambda_0(this$0, resultContinuation) {
  var i = new Logging$setupResponseLogging$slambda(this$0, resultContinuation);
  var l = function ($this$intercept, response, $completion) {
    return i.j4d($this$intercept, response, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$setupResponseLogging$slambda_1(this$0, resultContinuation) {
  this.x57_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$setupResponseLogging$slambda_1).g45 = function ($this$intercept, it, $completion) {
  var tmp = this.h45($this$intercept, it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$setupResponseLogging$slambda_1).y8 = function (p1, p2, $completion) {
  var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
  return this.g45(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
};
protoOf(Logging$setupResponseLogging$slambda_1).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 6;
          if (this.x57_1.r55_1.equals(LogLevel_NONE_getInstance()) || this.y57_1.n2w_1.g47().t2p(get_DisableLogging())) {
            return Unit_instance;
          }

          this.j8_1 = 3;
          this.i8_1 = 1;
          suspendResult = this.y57_1.s2v(this);
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
            this.a58_1 = this.l8_1;
            var log = StringBuilder_init_$Create$();
            this.b58_1 = this.y57_1.n2w_1.g47().r2p(get_ClientCallLogger());
            logResponseException(this.x57_1, log, this.y57_1.n2w_1.y47(), this.a58_1);
            this.i8_1 = 4;
            suspendResult = this.b58_1.u54(log.toString(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 4:
          this.i8_1 = 5;
          suspendResult = this.b58_1.x54(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          throw this.a58_1;
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
protoOf(Logging$setupResponseLogging$slambda_1).h45 = function ($this$intercept, it, completion) {
  var i = new Logging$setupResponseLogging$slambda_1(this.x57_1, completion);
  i.y57_1 = $this$intercept;
  i.z57_1 = it;
  return i;
};
function Logging$setupResponseLogging$slambda_2(this$0, resultContinuation) {
  var i = new Logging$setupResponseLogging$slambda_1(this$0, resultContinuation);
  var l = function ($this$intercept, it, $completion) {
    return i.g45($this$intercept, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function Logging$setupResponseLogging$slambda_3(this$0, resultContinuation) {
  this.k58_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Logging$setupResponseLogging$slambda_3).e4e = function (it, $completion) {
  var tmp = this.f4e(it, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(Logging$setupResponseLogging$slambda_3).z8 = function (p1, $completion) {
  return this.e4e(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
};
protoOf(Logging$setupResponseLogging$slambda_3).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 10;
          if (this.k58_1.r55_1.equals(LogLevel_NONE_getInstance()) || this.l58_1.v48().g47().t2p(get_DisableLogging())) {
            return Unit_instance;
          }

          this.m58_1 = this.l58_1.v48().g47().r2p(get_ClientCallLogger());
          this.n58_1 = StringBuilder_init_$Create$();
          this.i8_1 = 1;
          continue $sm;
        case 1:
          this.j8_1 = 4;
          this.j8_1 = 3;
          this.i8_1 = 2;
          suspendResult = logResponseBody(this.n58_1, contentType(this.l58_1), this.l58_1.b17(), this);
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
          this.o58_1 = this.l8_1;
          this.i8_1 = 5;
          var this_0 = this.n58_1.toString();
          suspendResult = this.m58_1.v54(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 5:
          this.i8_1 = 6;
          suspendResult = this.m58_1.x54(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 6:
          throw this.o58_1;
        case 7:
          this.j8_1 = 10;
          this.i8_1 = 8;
          var this_1 = this.n58_1.toString();
          suspendResult = this.m58_1.v54(toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE())), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 8:
          this.i8_1 = 9;
          suspendResult = this.m58_1.x54(this);
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
protoOf(Logging$setupResponseLogging$slambda_3).f4e = function (it, completion) {
  var i = new Logging$setupResponseLogging$slambda_3(this.k58_1, completion);
  i.l58_1 = it;
  return i;
};
function Logging$setupResponseLogging$slambda_4(this$0, resultContinuation) {
  var i = new Logging$setupResponseLogging$slambda_3(this$0, resultContinuation);
  var l = function (it, $completion) {
    return i.e4e(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function Logging(logger, level, filters, sanitizedHeaders) {
  Companion_getInstance_0();
  filters = filters === VOID ? emptyList() : filters;
  this.q55_1 = logger;
  this.r55_1 = level;
  this.s55_1 = filters;
  this.t55_1 = sanitizedHeaders;
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
        if (element_0.v55_1(key)) {
          tmp$ret$5 = element_0;
          break $l$block;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp0_safe_receiver = tmp$ret$5;
    var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u55_1;
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
  if (level.a55_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value = 'RESPONSE: ' + response.o38().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.q(value).s(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'METHOD: ' + response.v48().y47().w48().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.q(value_0).s(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = 'FROM: ' + response.v48().y47().a48().toString();
    // Inline function 'kotlin.text.appendLine' call
    log.q(value_1).s(_Char___init__impl__6a9atx(10));
  }
  if (level.b55_1) {
    // Inline function 'kotlin.text.appendLine' call
    var value_2 = 'COMMON HEADERS';
    // Inline function 'kotlin.text.appendLine' call
    log.q(value_2).s(_Char___init__impl__6a9atx(10));
    logHeaders(log, response.m33().k2t(), sanitizedHeaders);
  }
}
function logResponseBody(log, contentType, content, $completion) {
  var tmp = new $logResponseBodyCOROUTINE$_0(log, contentType, content, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
}
function sam$kotlin_Comparator$0(function_0) {
  this.d59_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0).tc = function (a, b) {
  return this.d59_1(a, b);
};
protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
  return this.tc(a, b);
};
protoOf(sam$kotlin_Comparator$0).d3 = function () {
  return this.d59_1;
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
  this.x58_1 = log;
  this.y58_1 = contentType;
  this.z58_1 = content;
}
protoOf($logResponseBodyCOROUTINE$_0).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          this.a59_1 = this.x58_1;
          var tmp0 = this.a59_1;
          var value = 'BODY Content-Type: ' + toString_0(this.y58_1);
          tmp0.q(value).s(_Char___init__impl__6a9atx(10));
          var tmp0_0 = this.a59_1;
          var value_0 = 'BODY START';
          tmp0_0.q(value_0).s(_Char___init__impl__6a9atx(10));
          var tmp0_1 = this.z58_1;
          var tmp0_safe_receiver = this.y58_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
          this.c59_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().z2l_1 : tmp1_elvis_lhs;
          this.j8_1 = 2;
          this.i8_1 = 1;
          suspendResult = tmp0_1.j2h(VOID, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          this.b59_1 = readText(ARGUMENT, this.c59_1);
          this.j8_1 = 3;
          this.i8_1 = 4;
          continue $sm;
        case 2:
          this.j8_1 = 3;
          var tmp_0 = this.l8_1;
          if (tmp_0 instanceof Error) {
            var cause = this.l8_1;
            var tmp_1 = this;
            tmp_1.b59_1 = null;
            this.i8_1 = 4;
            continue $sm;
          } else {
            throw this.l8_1;
          }

        case 3:
          throw this.l8_1;
        case 4:
          this.j8_1 = 3;
          var tmp2_elvis_lhs = this.b59_1;
          var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
          this.a59_1.q(message).s(_Char___init__impl__6a9atx(10));
          this.a59_1.q('BODY END');
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
  var tmp_0 = Dispatchers_getInstance().r1r_1;
  return writer(tmp, tmp_0, VOID, toReadChannel$slambda_0(_this__u8e3s4, null)).i1s();
}
function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
  this.x59_1 = $this_toReadChannel;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(toReadChannel$slambda).t49 = function ($this$writer, $completion) {
  var tmp = this.u49($this$writer, $completion);
  tmp.k8_1 = Unit_instance;
  tmp.l8_1 = null;
  return tmp.q8();
};
protoOf(toReadChannel$slambda).z8 = function (p1, $completion) {
  return this.t49((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $completion);
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
          suspendResult = this.x59_1.v38(this.y59_1.i1s(), this);
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
protoOf(toReadChannel$slambda).u49 = function ($this$writer, completion) {
  var i = new toReadChannel$slambda(this.x59_1, completion);
  i.y59_1 = $this$writer;
  return i;
};
function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
  var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
  var l = function ($this$writer, $completion) {
    return i.t49($this$writer, $completion);
  };
  l.$arity = 1;
  return l;
}
function $observeCOROUTINE$(_this__u8e3s4, log, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.m59_1 = _this__u8e3s4;
  this.n59_1 = log;
}
protoOf($observeCOROUTINE$).q8 = function () {
  var suspendResult = this.k8_1;
  $sm: do
    try {
      var tmp = this.i8_1;
      switch (tmp) {
        case 0:
          this.j8_1 = 3;
          var tmp0_subject = this.m59_1;
          if (tmp0_subject instanceof ByteArrayContent) {
            this.i8_1 = 1;
            suspendResult = writeFully(this.n59_1, this.m59_1.q38(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            if (tmp0_subject instanceof ReadChannelContent) {
              var tmp_0 = this;
              var responseChannel = ByteChannel();
              var content = this.m59_1.t38();
              copyToBoth(content, this.n59_1, responseChannel);
              tmp_0.o59_1 = new LoggedContent(this.m59_1, responseChannel);
              this.i8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject instanceof WriteChannelContent) {
                var tmp_1 = this;
                var responseChannel_0 = ByteChannel();
                var content_0 = toReadChannel(this.m59_1);
                copyToBoth(content_0, this.n59_1, responseChannel_0);
                tmp_1.o59_1 = new LoggedContent(this.m59_1, responseChannel_0);
                this.i8_1 = 2;
                continue $sm;
              } else {
                var tmp_2 = this;
                close(this.n59_1);
                tmp_2.o59_1 = this.m59_1;
                this.i8_1 = 2;
                continue $sm;
              }
            }
          }

        case 1:
          close(this.n59_1);
          this.o59_1 = this.m59_1;
          this.i8_1 = 2;
          continue $sm;
        case 2:
          return this.o59_1;
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
