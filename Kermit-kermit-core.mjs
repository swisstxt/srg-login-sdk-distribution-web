import {
  protoOf180f3jzyo7rfj as protoOf,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  println2shhhgwwt4c61 as println,
  printStackTrace18lnx7a39cni as printStackTrace,
  listOfvhqybd2zx248 as listOf,
  toString1pkumu07cwy4m as toString,
  hashCodeq5arwsb9dgti as hashCode,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  equals2au1ep9vhcato as equals,
  StringBuilder_init_$Create$322n630qt3r8c as StringBuilder_init_$Create$,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  Enum3alwj03lh1n41 as Enum,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(BaseLogger, 'BaseLogger');
initMetadataForClass(LogWriter, 'LogWriter');
initMetadataForClass(CommonWriter, 'CommonWriter', CommonWriter, LogWriter);
initMetadataForClass(StaticConfig, 'StaticConfig', StaticConfig);
function formatSeverity(severity) {
  return severity.toString() + ':';
}
function formatTag(tag) {
  return '(' + _Tag___get_tag__impl__7z9hd6(tag) + ')';
}
function formatMessage(severity, tag, message) {
  var tmp;
  if (severity == null) {
    var tmp_0 = tag;
    tmp = (tmp_0 == null ? null : new Tag(tmp_0)) == null;
  } else {
    tmp = false;
  }
  if (tmp)
    return _Message___get_message__impl__3t69n4(message);
  var sb = StringBuilder_init_$Create$();
  if (!(severity == null)) {
    sb.q(this.j40(severity)).q(' ');
  }
  var tmp_1;
  var tmp_2 = tag;
  if (!((tmp_2 == null ? null : new Tag(tmp_2)) == null)) {
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _Tag___get_tag__impl__7z9hd6(tag);
    tmp_1 = charSequenceLength(this_0) > 0;
  } else {
    tmp_1 = false;
  }
  if (tmp_1) {
    sb.q(this.k40(tag)).q(' ');
  }
  sb.q(_Message___get_message__impl__3t69n4(message));
  return sb.toString();
}
initMetadataForInterface(MessageStringFormatter, 'MessageStringFormatter');
initMetadataForObject(DefaultFormatter, 'DefaultFormatter', VOID, VOID, [MessageStringFormatter]);
initMetadataForClass(Tag, 'Tag');
initMetadataForClass(Severity, 'Severity', VOID, Enum);
initMetadataForClass(ConsoleWriter, 'ConsoleWriter', ConsoleWriter_init_$Create$, LogWriter);
initMetadataForClass(JsMutableLoggerConfig, 'JsMutableLoggerConfig');
initMetadataForObject(ConsoleActual, 'ConsoleActual');
//endregion
function get_DEFAULT_MIN_SEVERITY() {
  _init_properties_BaseLogger_kt__lobnq7();
  return DEFAULT_MIN_SEVERITY;
}
var DEFAULT_MIN_SEVERITY;
function BaseLogger(config) {
  this.y3z_1 = config;
}
protoOf(BaseLogger).z3z = function () {
  return this.y3z_1;
};
protoOf(BaseLogger).a40 = function (severity, tag, throwable, message) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = this.z3z().b40().t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    if (element.d40(tag, severity)) {
      element.c40(severity, message, tag, throwable);
    }
  }
};
var properties_initialized_BaseLogger_kt_e6qv19;
function _init_properties_BaseLogger_kt__lobnq7() {
  if (!properties_initialized_BaseLogger_kt_e6qv19) {
    properties_initialized_BaseLogger_kt_e6qv19 = true;
    DEFAULT_MIN_SEVERITY = Severity_Verbose_getInstance();
  }
}
function CommonWriter(messageStringFormatter) {
  messageStringFormatter = messageStringFormatter === VOID ? DefaultFormatter_instance : messageStringFormatter;
  LogWriter.call(this);
  this.e40_1 = messageStringFormatter;
}
protoOf(CommonWriter).c40 = function (severity, message, tag, throwable) {
  println(this.e40_1.f40(severity, _Tag___init__impl__opaqzl(tag), _Message___init__impl__p3e8y6(message)));
  if (throwable == null)
    null;
  else {
    printStackTrace(throwable);
  }
};
function LogWriter() {
}
protoOf(LogWriter).d40 = function (tag, severity) {
  return true;
};
function StaticConfig(minSeverity, logWriterList) {
  minSeverity = minSeverity === VOID ? get_DEFAULT_MIN_SEVERITY() : minSeverity;
  logWriterList = logWriterList === VOID ? listOf(new CommonWriter()) : logWriterList;
  this.g40_1 = minSeverity;
  this.h40_1 = logWriterList;
}
protoOf(StaticConfig).i40 = function () {
  return this.g40_1;
};
protoOf(StaticConfig).b40 = function () {
  return this.h40_1;
};
protoOf(StaticConfig).toString = function () {
  return 'StaticConfig(minSeverity=' + this.g40_1.toString() + ', logWriterList=' + toString(this.h40_1) + ')';
};
protoOf(StaticConfig).hashCode = function () {
  var result = this.g40_1.hashCode();
  result = imul(result, 31) + hashCode(this.h40_1) | 0;
  return result;
};
protoOf(StaticConfig).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof StaticConfig))
    return false;
  var tmp0_other_with_cast = other instanceof StaticConfig ? other : THROW_CCE();
  if (!this.g40_1.equals(tmp0_other_with_cast.g40_1))
    return false;
  if (!equals(this.h40_1, tmp0_other_with_cast.h40_1))
    return false;
  return true;
};
function MessageStringFormatter() {
}
function DefaultFormatter() {
}
var DefaultFormatter_instance;
function DefaultFormatter_getInstance() {
  return DefaultFormatter_instance;
}
function _Tag___init__impl__opaqzl(tag) {
  return tag;
}
function _Tag___get_tag__impl__7z9hd6($this) {
  return $this;
}
function Tag__toString_impl_tvevk7($this) {
  return 'Tag(tag=' + $this + ')';
}
function Tag__hashCode_impl_848yrc($this) {
  return getStringHashCode($this);
}
function Tag__equals_impl_6ocp5g($this, other) {
  if (!(other instanceof Tag))
    return false;
  if (!($this === (other instanceof Tag ? other.l40_1 : THROW_CCE())))
    return false;
  return true;
}
function Tag(tag) {
  this.l40_1 = tag;
}
protoOf(Tag).toString = function () {
  return Tag__toString_impl_tvevk7(this.l40_1);
};
protoOf(Tag).hashCode = function () {
  return Tag__hashCode_impl_848yrc(this.l40_1);
};
protoOf(Tag).equals = function (other) {
  return Tag__equals_impl_6ocp5g(this.l40_1, other);
};
function _Message___init__impl__p3e8y6(message) {
  return message;
}
function _Message___get_message__impl__3t69n4($this) {
  return $this;
}
var Severity_Verbose_instance;
var Severity_Debug_instance;
var Severity_Info_instance;
var Severity_Warn_instance;
var Severity_Error_instance;
var Severity_Assert_instance;
var Severity_entriesInitialized;
function Severity_initEntries() {
  if (Severity_entriesInitialized)
    return Unit_instance;
  Severity_entriesInitialized = true;
  Severity_Verbose_instance = new Severity('Verbose', 0);
  Severity_Debug_instance = new Severity('Debug', 1);
  Severity_Info_instance = new Severity('Info', 2);
  Severity_Warn_instance = new Severity('Warn', 3);
  Severity_Error_instance = new Severity('Error', 4);
  Severity_Assert_instance = new Severity('Assert', 5);
}
function Severity(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Severity_Verbose_getInstance() {
  Severity_initEntries();
  return Severity_Verbose_instance;
}
function Severity_Debug_getInstance() {
  Severity_initEntries();
  return Severity_Debug_instance;
}
function Severity_Info_getInstance() {
  Severity_initEntries();
  return Severity_Info_instance;
}
function Severity_Warn_getInstance() {
  Severity_initEntries();
  return Severity_Warn_instance;
}
function Severity_Error_getInstance() {
  Severity_initEntries();
  return Severity_Error_instance;
}
function Severity_Assert_getInstance() {
  Severity_initEntries();
  return Severity_Assert_instance;
}
function ConsoleWriter_init_$Init$(messageStringFormatter, $this) {
  messageStringFormatter = messageStringFormatter === VOID ? DefaultFormatter_instance : messageStringFormatter;
  ConsoleWriter.call($this, messageStringFormatter, ConsoleActual_instance);
  return $this;
}
function ConsoleWriter_init_$Create$(messageStringFormatter) {
  return ConsoleWriter_init_$Init$(messageStringFormatter, objectCreate(protoOf(ConsoleWriter)));
}
function ConsoleWriter(messageStringFormatter, console) {
  LogWriter.call(this);
  this.m40_1 = messageStringFormatter;
  this.n40_1 = console;
}
protoOf(ConsoleWriter).c40 = function (severity, message, tag, throwable) {
  var output = this.m40_1.f40(null, _Tag___init__impl__opaqzl(tag), _Message___init__impl__p3e8y6(message));
  if (throwable == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    output = output + (' ' + stackTraceToString(throwable));
  }
  switch (severity.u2_1) {
    case 5:
    case 4:
      this.n40_1.b3y(output);
      break;
    case 3:
      this.n40_1.h3y(output);
      break;
    case 2:
      this.n40_1.o40(output);
      break;
    case 1:
    case 0:
      this.n40_1.p40(output);
      break;
  }
};
function JsMutableLoggerConfig(logWriters) {
  this.q40_1 = get_DEFAULT_MIN_SEVERITY();
  this.r40_1 = logWriters;
}
protoOf(JsMutableLoggerConfig).i40 = function () {
  return this.q40_1;
};
protoOf(JsMutableLoggerConfig).b40 = function () {
  return this.r40_1;
};
function mutableLoggerConfigInit(logWriters) {
  return new JsMutableLoggerConfig(logWriters);
}
function platformLogWriter(messageStringFormatter) {
  messageStringFormatter = messageStringFormatter === VOID ? DefaultFormatter_instance : messageStringFormatter;
  return ConsoleWriter_init_$Create$();
}
function ConsoleActual() {
}
protoOf(ConsoleActual).b3y = function (output) {
  console.error(output);
};
protoOf(ConsoleActual).h3y = function (output) {
  console.warn(output);
};
protoOf(ConsoleActual).o40 = function (output) {
  console.info(output);
};
protoOf(ConsoleActual).p40 = function (output) {
  console.log(output);
};
var ConsoleActual_instance;
function ConsoleActual_getInstance() {
  return ConsoleActual_instance;
}
//region block: post-declaration
protoOf(DefaultFormatter).j40 = formatSeverity;
protoOf(DefaultFormatter).k40 = formatTag;
protoOf(DefaultFormatter).f40 = formatMessage;
//endregion
//region block: init
DefaultFormatter_instance = new DefaultFormatter();
ConsoleActual_instance = new ConsoleActual();
//endregion
//region block: exports
export {
  BaseLogger as BaseLogger15vxnko5xe4r1,
  StaticConfig as StaticConfig3hon1h6tr743x,
  mutableLoggerConfigInit as mutableLoggerConfigInit3a48t6gios6eh,
  platformLogWriter as platformLogWritersobyk8c3gam2,
  Severity_Assert_getInstance as Severity_Assert_getInstance2p274tjudskm6,
  Severity_Debug_getInstance as Severity_Debug_getInstance316bughfb4djv,
  Severity_Error_getInstance as Severity_Error_getInstance2o5r8ixbogkws,
  Severity_Info_getInstance as Severity_Info_getInstance3kzwwr80xcgyn,
  Severity_Verbose_getInstance as Severity_Verbose_getInstance18av5pwavwfbv,
  Severity_Warn_getInstance as Severity_Warn_getInstance3rfzgl1y9et8o,
};
//endregion
