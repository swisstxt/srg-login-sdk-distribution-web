import {
  protoOf180f3jzyo7rfj as protoOf,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  subtract16cg4lfi29fq9 as subtract,
  toNumberlmbpvqo27r53 as toNumber,
  Paire9pteg33gng7 as Pair,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  listOfvhqybd2zx248 as listOf,
  VOID3gxj6tk5isa35 as VOID,
  emptyList1g2z5xcrvp2zy as emptyList,
  toString30pk9tzaqopn as toString,
  toString1pkumu07cwy4m as toString_0,
  equals2au1ep9vhcato as equals,
  joinToString1cxrrlmo0chqs as joinToString,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  hashCodeq5arwsb9dgti as hashCode,
  Enum3alwj03lh1n41 as Enum,
  Exceptiondt2hlxn7j7vw as Exception,
  Exception_init_$Init$2jymvyiuv5u42 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  Exception_init_$Init$gwg5c35cbjjd as Exception_init_$Init$_0,
  HashMap_init_$Create$12w7vgowic6zp as HashMap_init_$Create$,
  IllegalStateException_init_$Create$2429fvs1h56dm as IllegalStateException_init_$Create$,
  HashSet_init_$Create$33p49hmosnvr4 as HashSet_init_$Create$,
  ArrayList_init_$Create$1jemgvhi5v0js as ArrayList_init_$Create$,
  addAll21mdhg523wnoa as addAll,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  LinkedHashSet_init_$Create$2lru2gvxodydo as LinkedHashSet_init_$Create$,
  get_lastIndex1yw0x4k50k51w as get_lastIndex,
  toList3jhuyej2anx2q as toList,
  toMutableList3ewlpx8m5ca2q as toMutableList,
  copyToArray2j022khrow2yi as copyToArray,
  arrayListOf1fz8nib0ncbow as arrayListOf,
  ArrayDeque_init_$Create$2zj52gw2joiw7 as ArrayDeque_init_$Create$,
  println2shhhgwwt4c61 as println,
  isArray1hxjqtqy632bc as isArray,
  roundToLong2s902lrwaad4n as roundToLong,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Exception_init_$Create$j21gf9kcq6zq as Exception_init_$Create$,
  split2bvyvnrlcifjv as split,
  Default_getInstance1yflkybdrpcz6 as Default_getInstance,
  getNumberHashCode2l4nbdcihl25f as getNumberHashCode,
} from './kotlin-kotlin-stdlib.mjs';
import { ThreadLocalRef2gwn4e0n07y5w as ThreadLocalRef } from './Stately-stately-concurrency.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(Koin, 'Koin', Koin);
initMetadataForCompanion(Companion);
initMetadataForClass(KoinApplication, 'KoinApplication');
initMetadataForClass(BeanDefinition, 'BeanDefinition');
initMetadataForClass(Kind, 'Kind', VOID, Enum);
initMetadataForClass(Callbacks, 'Callbacks', Callbacks);
initMetadataForClass(KoinDefinition, 'KoinDefinition');
initMetadataForClass(ClosedScopeException, 'ClosedScopeException', VOID, Exception);
initMetadataForClass(DefinitionOverrideException, 'DefinitionOverrideException', VOID, Exception);
initMetadataForClass(InstanceCreationException, 'InstanceCreationException', VOID, Exception);
initMetadataForClass(NoBeanDefFoundException, 'NoBeanDefFoundException', VOID, Exception);
initMetadataForClass(NoParameterFoundException, 'NoParameterFoundException', VOID, Exception);
initMetadataForClass(ExtensionManager, 'ExtensionManager');
initMetadataForClass(InstanceFactory, 'InstanceFactory');
initMetadataForClass(FactoryInstanceFactory, 'FactoryInstanceFactory', VOID, InstanceFactory);
initMetadataForClass(InstanceContext, 'InstanceContext');
initMetadataForCompanion(Companion_0);
initMetadataForClass(SingleInstanceFactory, 'SingleInstanceFactory', VOID, InstanceFactory);
initMetadataForClass(Logger, 'Logger');
initMetadataForClass(EmptyLogger, 'EmptyLogger', EmptyLogger, Logger);
initMetadataForClass(Level, 'Level', VOID, Enum);
initMetadataForClass(Module, 'Module', Module);
initMetadataForClass(ParametersHolder, 'ParametersHolder', ParametersHolder);
initMetadataForClass(StringQualifier, 'StringQualifier');
initMetadataForClass(InstanceRegistry, 'InstanceRegistry');
initMetadataForClass(PropertyRegistry, 'PropertyRegistry');
initMetadataForCompanion(Companion_1);
initMetadataForClass(ScopeRegistry, 'ScopeRegistry');
initMetadataForClass(Scope, 'Scope');
initMetadataForCompanion(Companion_2);
initMetadataForClass(PrintLogger, 'PrintLogger', PrintLogger, Logger);
initMetadataForClass(NodeJsHrTimeSource, 'NodeJsHrTimeSource', NodeJsHrTimeSource);
initMetadataForClass(PerformanceNowTimeSource, 'PerformanceNowTimeSource', PerformanceNowTimeSource);
initMetadataForClass(DateNowTimeSource, 'DateNowTimeSource', DateNowTimeSource);
initMetadataForObject(KoinPlatformTimeTools, 'KoinPlatformTimeTools');
initMetadataForObject(KoinPlatformTools, 'KoinPlatformTools');
//endregion
function Koin() {
  this.v3v_1 = new ScopeRegistry(this);
  this.w3v_1 = new InstanceRegistry(this);
  this.x3v_1 = new PropertyRegistry(this);
  this.y3v_1 = new ExtensionManager(this);
  this.z3v_1 = new EmptyLogger();
}
protoOf(Koin).a3w = function (logger) {
  this.z3v_1 = logger;
};
protoOf(Koin).b3w = function (modules, allowOverride, createEagerInstances) {
  var flattedModules = flatten(modules);
  this.w3v_1.f3w(flattedModules, allowOverride);
  this.v3v_1.k3w(flattedModules);
  if (createEagerInstances) {
    this.l3w();
  }
};
protoOf(Koin).l3w = function () {
  this.z3v_1.n3w('Create eager instances ...');
  // Inline function 'org.koin.core.time.measureDuration' call
  // Inline function 'org.koin.core.time.measureTimedValue' call
  var start = KoinPlatformTimeTools_instance.o3w();
  this.w3v_1.p3w();
  var value = Unit_instance;
  var stop = KoinPlatformTimeTools_instance.o3w();
  // Inline function 'kotlin.Long.div' call
  var this_0 = subtract(stop, start);
  var tmp$ret$1 = toNumber(this_0) / 1000000.0;
  var duration = (new Pair(value, tmp$ret$1)).qe_1;
  this.z3v_1.n3w('Created eager instances in ' + duration + ' ms');
};
function loadModules($this, modules) {
  $this.q3w_1.b3w(modules, $this.r3w_1, false);
}
function Companion() {
}
protoOf(Companion).s3w = function () {
  var app = new KoinApplication();
  return app;
};
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function KoinApplication() {
  this.q3w_1 = new Koin();
  this.r3w_1 = true;
}
protoOf(KoinApplication).t3w = function (modules) {
  return this.u3w(listOf(modules));
};
protoOf(KoinApplication).u3w = function (modules) {
  if (this.q3w_1.z3v_1.x3w(Level_INFO_getInstance())) {
    // Inline function 'org.koin.core.time.measureDuration' call
    // Inline function 'org.koin.core.time.measureTimedValue' call
    var start = KoinPlatformTimeTools_instance.o3w();
    loadModules(this, modules);
    var value = Unit_instance;
    var stop = KoinPlatformTimeTools_instance.o3w();
    // Inline function 'kotlin.Long.div' call
    var this_0 = subtract(stop, start);
    var tmp$ret$1 = toNumber(this_0) / 1000000.0;
    var duration = (new Pair(value, tmp$ret$1)).qe_1;
    var count = this.q3w_1.w3v_1.v3w();
    this.q3w_1.z3v_1.w3w(Level_INFO_getInstance(), 'Started ' + count + ' definitions in ' + duration + ' ms');
  } else {
    loadModules(this, modules);
  }
  return this;
};
protoOf(KoinApplication).l3w = function () {
  this.q3w_1.l3w();
};
protoOf(KoinApplication).y3w = function (level) {
  this.q3w_1.a3w(KoinPlatformTools_instance.z3w(level));
  return this;
};
protoOf(KoinApplication).a3x = function (level, $super) {
  level = level === VOID ? Level_INFO_getInstance() : level;
  return $super === VOID ? this.y3w(level) : $super.y3w.call(this, level);
};
function BeanDefinition$toString$lambda(it) {
  return getFullName(it);
}
function BeanDefinition(scopeQualifier, primaryType, qualifier, definition, kind, secondaryTypes) {
  qualifier = qualifier === VOID ? null : qualifier;
  var tmp;
  if (secondaryTypes === VOID) {
    // Inline function 'kotlin.collections.listOf' call
    tmp = emptyList();
  } else {
    tmp = secondaryTypes;
  }
  secondaryTypes = tmp;
  this.b3x_1 = scopeQualifier;
  this.c3x_1 = primaryType;
  this.d3x_1 = qualifier;
  this.e3x_1 = definition;
  this.f3x_1 = kind;
  this.g3x_1 = secondaryTypes;
  this.h3x_1 = new Callbacks();
  this.i3x_1 = false;
}
protoOf(BeanDefinition).toString = function () {
  var defKind = this.f3x_1.toString();
  var defType = "'" + getFullName(this.c3x_1) + "'";
  var tmp;
  if (this.d3x_1 == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = ',qualifier:' + toString(this.d3x_1);
  }
  var tmp1_elvis_lhs = tmp;
  var defName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  // Inline function 'kotlin.let' call
  var it = this.b3x_1;
  var defScope = equals(it, Companion_getInstance_1().k3x_1) ? '' : ',scope:' + toString_0(this.b3x_1);
  var tmp_0;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!this.g3x_1.r()) {
    var tmp_1 = this.g3x_1;
    var typesAsString = joinToString(tmp_1, ',', VOID, VOID, VOID, VOID, BeanDefinition$toString$lambda);
    tmp_0 = ',binds:' + typesAsString;
  } else {
    tmp_0 = '';
  }
  var defOtherTypes = tmp_0;
  return '[' + defKind + ':' + defType + defName + defScope + defOtherTypes + ']';
};
protoOf(BeanDefinition).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof BeanDefinition))
    THROW_CCE();
  if (!this.c3x_1.equals(other.c3x_1))
    return false;
  if (!equals(this.d3x_1, other.d3x_1))
    return false;
  if (!equals(this.b3x_1, other.b3x_1))
    return false;
  return true;
};
protoOf(BeanDefinition).hashCode = function () {
  var tmp0_safe_receiver = this.d3x_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  result = imul(31, result) + this.c3x_1.hashCode() | 0;
  result = imul(31, result) + hashCode(this.b3x_1) | 0;
  return result;
};
function indexKey(clazz, typeQualifier, scopeQualifier) {
  var tmp1_elvis_lhs = typeQualifier == null ? null : typeQualifier.j1();
  var tq = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  return getFullName(clazz) + ':' + tq + ':' + toString_0(scopeQualifier);
}
var Kind_Singleton_instance;
var Kind_Factory_instance;
var Kind_Scoped_instance;
var Kind_entriesInitialized;
function Kind_initEntries() {
  if (Kind_entriesInitialized)
    return Unit_instance;
  Kind_entriesInitialized = true;
  Kind_Singleton_instance = new Kind('Singleton', 0);
  Kind_Factory_instance = new Kind('Factory', 1);
  Kind_Scoped_instance = new Kind('Scoped', 2);
}
function Kind(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Kind_Singleton_getInstance() {
  Kind_initEntries();
  return Kind_Singleton_instance;
}
function Kind_Factory_getInstance() {
  Kind_initEntries();
  return Kind_Factory_instance;
}
function Kind_Scoped_getInstance() {
  Kind_initEntries();
  return Kind_Scoped_instance;
}
function Callbacks(onClose) {
  onClose = onClose === VOID ? null : onClose;
  this.l3x_1 = onClose;
}
protoOf(Callbacks).toString = function () {
  return 'Callbacks(onClose=' + toString(this.l3x_1) + ')';
};
protoOf(Callbacks).hashCode = function () {
  return this.l3x_1 == null ? 0 : hashCode(this.l3x_1);
};
protoOf(Callbacks).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Callbacks))
    return false;
  var tmp0_other_with_cast = other instanceof Callbacks ? other : THROW_CCE();
  if (!equals(this.l3x_1, tmp0_other_with_cast.l3x_1))
    return false;
  return true;
};
function KoinDefinition(module_0, factory) {
  this.m3x_1 = module_0;
  this.n3x_1 = factory;
}
protoOf(KoinDefinition).toString = function () {
  return 'KoinDefinition(module=' + toString_0(this.m3x_1) + ', factory=' + toString_0(this.n3x_1) + ')';
};
protoOf(KoinDefinition).hashCode = function () {
  var result = this.m3x_1.hashCode();
  result = imul(result, 31) + this.n3x_1.hashCode() | 0;
  return result;
};
protoOf(KoinDefinition).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof KoinDefinition))
    return false;
  var tmp0_other_with_cast = other instanceof KoinDefinition ? other : THROW_CCE();
  if (!this.m3x_1.equals(tmp0_other_with_cast.m3x_1))
    return false;
  if (!this.n3x_1.equals(tmp0_other_with_cast.n3x_1))
    return false;
  return true;
};
function ClosedScopeException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, ClosedScopeException);
}
function DefinitionOverrideException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, DefinitionOverrideException);
}
function InstanceCreationException(msg, parent) {
  Exception_init_$Init$_0(msg, parent, this);
  captureStack(this, InstanceCreationException);
}
function NoBeanDefFoundException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, NoBeanDefFoundException);
}
function NoParameterFoundException(msg) {
  Exception_init_$Init$(msg, this);
  captureStack(this, NoParameterFoundException);
}
function ExtensionManager(_koin) {
  this.o3x_1 = _koin;
  var tmp = this;
  // Inline function 'kotlin.collections.hashMapOf' call
  tmp.p3x_1 = HashMap_init_$Create$();
}
function FactoryInstanceFactory(beanDefinition) {
  InstanceFactory.call(this, beanDefinition);
}
protoOf(FactoryInstanceFactory).r3x = function (context) {
  return this.t3x(context);
};
function InstanceContext(logger, scope, parameters) {
  parameters = parameters === VOID ? null : parameters;
  this.u3x_1 = logger;
  this.v3x_1 = scope;
  this.w3x_1 = parameters;
}
function Companion_0() {
  this.x3x_1 = '\n\t';
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
function InstanceFactory(beanDefinition) {
  this.s3x_1 = beanDefinition;
}
protoOf(InstanceFactory).t3x = function (context) {
  context.u3x_1.n3w("| (+) '" + this.s3x_1.toString() + "'");
  try {
    var tmp0_elvis_lhs = context.w3x_1;
    var parameters = tmp0_elvis_lhs == null ? emptyParametersHolder() : tmp0_elvis_lhs;
    return this.s3x_1.e3x_1(context.v3x_1, parameters);
  } catch ($p) {
    if ($p instanceof Exception) {
      var e = $p;
      var stack = KoinPlatformTools_instance.y3x(e);
      context.u3x_1.z3x("* Instance creation error : could not create instance for '" + this.s3x_1.toString() + "': " + stack);
      throw new InstanceCreationException("Could not create instance for '" + this.s3x_1.toString() + "'", e);
    } else {
      throw $p;
    }
  }
};
protoOf(InstanceFactory).equals = function (other) {
  var tmp0_safe_receiver = other instanceof InstanceFactory ? other : null;
  var other_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s3x_1;
  return this.s3x_1.equals(other_0);
};
protoOf(InstanceFactory).hashCode = function () {
  return this.s3x_1.hashCode();
};
function getValue($this) {
  var tmp0_elvis_lhs = $this.b3y_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    var message = "Single instance created couldn't return value";
    throw IllegalStateException_init_$Create$(toString_0(message));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function SingleInstanceFactory$get$lambda(this$0, $context) {
  return function () {
    var tmp;
    if (!this$0.c3y($context)) {
      this$0.b3y_1 = this$0.t3x($context);
      tmp = Unit_instance;
    }
    return Unit_instance;
  };
}
function SingleInstanceFactory(beanDefinition) {
  InstanceFactory.call(this, beanDefinition);
  this.b3y_1 = null;
}
protoOf(SingleInstanceFactory).c3y = function (context) {
  return !(this.b3y_1 == null);
};
protoOf(SingleInstanceFactory).t3x = function (context) {
  var tmp;
  if (this.b3y_1 == null) {
    tmp = protoOf(InstanceFactory).t3x.call(this, context);
  } else {
    tmp = getValue(this);
  }
  return tmp;
};
protoOf(SingleInstanceFactory).r3x = function (context) {
  var tmp = KoinPlatformTools_instance;
  tmp.d3y(this, SingleInstanceFactory$get$lambda(this, context));
  return getValue(this);
};
function EmptyLogger() {
  Logger.call(this, Level_NONE_getInstance());
}
protoOf(EmptyLogger).w3w = function (level, msg) {
};
function Logger(level) {
  level = level === VOID ? Level_INFO_getInstance() : level;
  this.m3w_1 = level;
}
protoOf(Logger).n3w = function (msg) {
  this.g3y(Level_DEBUG_getInstance(), msg);
};
protoOf(Logger).f3y = function (msg) {
  this.g3y(Level_WARNING_getInstance(), msg);
};
protoOf(Logger).z3x = function (msg) {
  this.g3y(Level_ERROR_getInstance(), msg);
};
protoOf(Logger).x3w = function (lvl) {
  return this.m3w_1.v2(lvl) <= 0;
};
protoOf(Logger).g3y = function (lvl, msg) {
  if (this.x3w(lvl)) {
    this.w3w(lvl, msg);
  }
};
protoOf(Logger).h3y = function (lvl, msg) {
  if (this.x3w(lvl)) {
    this.w3w(lvl, msg());
  }
};
var Level_DEBUG_instance;
var Level_INFO_instance;
var Level_WARNING_instance;
var Level_ERROR_instance;
var Level_NONE_instance;
var Level_entriesInitialized;
function Level_initEntries() {
  if (Level_entriesInitialized)
    return Unit_instance;
  Level_entriesInitialized = true;
  Level_DEBUG_instance = new Level('DEBUG', 0);
  Level_INFO_instance = new Level('INFO', 1);
  Level_WARNING_instance = new Level('WARNING', 2);
  Level_ERROR_instance = new Level('ERROR', 3);
  Level_NONE_instance = new Level('NONE', 4);
}
function Level(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function Level_DEBUG_getInstance() {
  Level_initEntries();
  return Level_DEBUG_instance;
}
function Level_INFO_getInstance() {
  Level_initEntries();
  return Level_INFO_instance;
}
function Level_WARNING_getInstance() {
  Level_initEntries();
  return Level_WARNING_instance;
}
function Level_ERROR_getInstance() {
  Level_initEntries();
  return Level_ERROR_instance;
}
function Level_NONE_getInstance() {
  Level_initEntries();
  return Level_NONE_instance;
}
function Module(_createdAtStart) {
  _createdAtStart = _createdAtStart === VOID ? false : _createdAtStart;
  this.i3y_1 = _createdAtStart;
  this.j3y_1 = KoinPlatformTools_instance.o3y();
  var tmp = this;
  // Inline function 'kotlin.collections.hashSetOf' call
  tmp.k3y_1 = HashSet_init_$Create$();
  var tmp_0 = this;
  // Inline function 'kotlin.collections.hashMapOf' call
  tmp_0.l3y_1 = HashMap_init_$Create$();
  var tmp_1 = this;
  // Inline function 'kotlin.collections.hashSetOf' call
  tmp_1.m3y_1 = HashSet_init_$Create$();
  var tmp_2 = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp_2.n3y_1 = ArrayList_init_$Create$();
}
protoOf(Module).p3y = function (module_0) {
  // Inline function 'kotlin.collections.plusAssign' call
  var this_0 = this.n3y_1;
  addAll(this_0, module_0);
};
protoOf(Module).q3y = function (instanceFactory) {
  var def = instanceFactory.s3x_1;
  var mapping = indexKey(def.c3x_1, def.d3x_1, def.b3x_1);
  this.r3y(mapping, instanceFactory);
};
protoOf(Module).s3y = function (instanceFactory) {
  this.k3y_1.x(instanceFactory);
};
protoOf(Module).r3y = function (mapping, factory) {
  // Inline function 'kotlin.collections.set' call
  this.l3y_1.m2(mapping, factory);
};
protoOf(Module).equals = function (other) {
  if (this === other)
    return true;
  if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
    return false;
  if (!(other instanceof Module))
    THROW_CCE();
  if (!(this.j3y_1 === other.j3y_1))
    return false;
  return true;
};
protoOf(Module).hashCode = function () {
  return getStringHashCode(this.j3y_1);
};
function flatten(modules) {
  // Inline function 'kotlin.collections.mutableSetOf' call
  // Inline function 'kotlin.apply' call
  var this_0 = LinkedHashSet_init_$Create$();
  flatten$flat(modules, this_0);
  return this_0;
}
function overrideError(factory, mapping) {
  throw new DefinitionOverrideException('Already existing definition for ' + factory.s3x_1.toString() + ' at ' + mapping);
}
function flatten$flat(modules, newModules) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = modules.t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    // Inline function 'kotlin.collections.plusAssign' call
    newModules.x(element);
    flatten$flat(element.n3y_1, newModules);
  }
}
function getFirstValue($this, clazz) {
  var tmp0 = $this.t3y_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (clazz.u9(element)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_safe_receiver = tmp$ret$1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
  }
  return tmp;
}
function getIndexedValue($this, clazz) {
  // Inline function 'kotlin.takeIf' call
  var this_0 = $this.t3y_1.a1($this.v3y_1);
  var tmp;
  if (clazz.u9(this_0)) {
    tmp = this_0;
  } else {
    tmp = null;
  }
  var tmp0_safe_receiver = tmp;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
  }
  var currentValue = tmp_0;
  if (!(currentValue == null)) {
    $this.w3y();
  }
  return currentValue;
}
function ParametersHolder(_values, useIndexedValues) {
  var tmp;
  if (_values === VOID) {
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp = ArrayList_init_$Create$();
  } else {
    tmp = _values;
  }
  _values = tmp;
  useIndexedValues = useIndexedValues === VOID ? null : useIndexedValues;
  this.t3y_1 = _values;
  this.u3y_1 = useIndexedValues;
  this.v3y_1 = 0;
}
protoOf(ParametersHolder).x3y = function (i, clazz) {
  var tmp;
  if (this.t3y_1.z() > i) {
    var tmp_0 = this.t3y_1.a1(i);
    tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  } else {
    throw new NoParameterFoundException("Can't get injected parameter #" + i + ' from ' + this.toString() + " for type '" + getFullName(clazz) + "'");
  }
  return tmp;
};
protoOf(ParametersHolder).y3y = function (clazz) {
  var tmp;
  if (this.t3y_1.r()) {
    tmp = null;
  } else {
    var tmp_0;
    switch (this.u3y_1) {
      case null:
        var tmp1_elvis_lhs = getIndexedValue(this, clazz);
        tmp_0 = tmp1_elvis_lhs == null ? getFirstValue(this, clazz) : tmp1_elvis_lhs;
        break;
      case true:
        tmp_0 = getIndexedValue(this, clazz);
        break;
      default:
        tmp_0 = getFirstValue(this, clazz);
        break;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(ParametersHolder).w3y = function () {
  if (this.v3y_1 < get_lastIndex(this.t3y_1)) {
    this.v3y_1 = this.v3y_1 + 1 | 0;
  }
};
protoOf(ParametersHolder).toString = function () {
  return 'DefinitionParameters' + toString_0(toList(this.t3y_1));
};
function emptyParametersHolder() {
  return new ParametersHolder();
}
function parametersOf(parameters) {
  return new ParametersHolder(toMutableList(parameters));
}
function _q(name) {
  return new StringQualifier(name);
}
function StringQualifier(value) {
  this.z3y_1 = value;
}
protoOf(StringQualifier).j1 = function () {
  return this.z3y_1;
};
protoOf(StringQualifier).toString = function () {
  return this.z3y_1;
};
protoOf(StringQualifier).hashCode = function () {
  return getStringHashCode(this.z3y_1);
};
protoOf(StringQualifier).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof StringQualifier))
    return false;
  var tmp0_other_with_cast = other instanceof StringQualifier ? other : THROW_CCE();
  if (!(this.z3y_1 === tmp0_other_with_cast.z3y_1))
    return false;
  return true;
};
function addAllEagerInstances($this, module_0) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = module_0.k3y_1.t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    var tmp0 = $this.e3w_1;
    // Inline function 'kotlin.collections.set' call
    var key = element.hashCode();
    tmp0.m2(key, element);
  }
}
function loadModule($this, module_0, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = module_0.l3y_1.h1().t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    // Inline function 'kotlin.collections.component1' call
    var mapping = element.i1();
    // Inline function 'kotlin.collections.component2' call
    var factory = element.j1();
    $this.a3z(allowOverride, mapping, factory);
  }
}
function createEagerInstances($this, instances) {
  var defaultContext = new InstanceContext($this.c3w_1.z3v_1, $this.c3w_1.v3v_1.j3w_1);
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = instances.t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    element.r3x(defaultContext);
  }
}
function InstanceRegistry(_koin) {
  this.c3w_1 = _koin;
  this.d3w_1 = KoinPlatformTools_instance.b3z();
  var tmp = this;
  // Inline function 'kotlin.collections.hashMapOf' call
  tmp.e3w_1 = HashMap_init_$Create$();
}
protoOf(InstanceRegistry).f3w = function (modules, allowOverride) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = modules.t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    loadModule(this, element, allowOverride);
    addAllEagerInstances(this, element);
  }
};
protoOf(InstanceRegistry).p3w = function () {
  // Inline function 'kotlin.collections.toTypedArray' call
  var this_0 = this.e3w_1.l2();
  var tmp$ret$0 = copyToArray(this_0);
  var instances = arrayListOf(tmp$ret$0.slice());
  this.e3w_1.p2();
  createEagerInstances(this, instances);
};
protoOf(InstanceRegistry).c3z = function (allowOverride, mapping, factory, logWarning) {
  if (this.d3w_1.h2(mapping)) {
    if (!allowOverride) {
      overrideError(factory, mapping);
    } else {
      if (logWarning) {
        this.c3w_1.z3v_1.f3y("(+) override index '" + mapping + "' -> '" + factory.s3x_1.toString() + "'");
      }
    }
  }
  this.c3w_1.z3v_1.n3w("(+) index '" + mapping + "' -> '" + factory.s3x_1.toString() + "'");
  // Inline function 'kotlin.collections.set' call
  this.d3w_1.m2(mapping, factory);
};
protoOf(InstanceRegistry).a3z = function (allowOverride, mapping, factory, logWarning, $super) {
  logWarning = logWarning === VOID ? true : logWarning;
  var tmp;
  if ($super === VOID) {
    this.c3z(allowOverride, mapping, factory, logWarning);
    tmp = Unit_instance;
  } else {
    tmp = $super.c3z.call(this, allowOverride, mapping, factory, logWarning);
  }
  return tmp;
};
protoOf(InstanceRegistry).d3z = function (clazz, qualifier, scopeQualifier) {
  var indexKey_0 = indexKey(clazz, qualifier, scopeQualifier);
  return this.d3w_1.j2(indexKey_0);
};
protoOf(InstanceRegistry).e3z = function (qualifier, clazz, scopeQualifier, instanceContext) {
  var tmp0_safe_receiver = this.d3z(clazz, qualifier, scopeQualifier);
  var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r3x(instanceContext);
  return (tmp == null ? true : !(tmp == null)) ? tmp : null;
};
protoOf(InstanceRegistry).v3w = function () {
  return this.d3w_1.z();
};
function PropertyRegistry(_koin) {
  this.f3z_1 = _koin;
  this.g3z_1 = KoinPlatformTools_instance.b3z();
}
function loadModule_0($this, module_0) {
  $this.h3w_1.e1(module_0.m3y_1);
}
function Companion_1() {
  Companion_instance_1 = this;
  this.j3x_1 = '_root_';
  this.k3x_1 = _q('_root_');
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function ScopeRegistry(_koin) {
  Companion_getInstance_1();
  this.g3w_1 = _koin;
  this.h3w_1 = HashSet_init_$Create$();
  this.i3w_1 = KoinPlatformTools_instance.b3z();
  this.j3w_1 = new Scope(Companion_getInstance_1().k3x_1, '_root_', true, this.g3w_1);
  this.h3w_1.x(this.j3w_1.h3z_1);
  var tmp0 = this.i3w_1;
  var tmp2 = this.j3w_1.i3z_1;
  // Inline function 'kotlin.collections.set' call
  var value = this.j3w_1;
  tmp0.m2(tmp2, value);
}
protoOf(ScopeRegistry).k3w = function (modules) {
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = modules.t();
  while (_iterator__ex2g4s.u()) {
    var element = _iterator__ex2g4s.v();
    loadModule_0(this, element);
  }
};
function resolveInstance($this, qualifier, clazz, parameterDef) {
  if ($this.p3z_1) {
    throw new ClosedScopeException("Scope '" + $this.i3z_1 + "' is closed");
  }
  var parameters = parameterDef == null ? null : parameterDef();
  var localDeque = null;
  if (!(parameters == null)) {
    var tmp = $this.k3z_1.z3v_1;
    var tmp_0 = Level_DEBUG_getInstance();
    tmp.h3y(tmp_0, Scope$resolveInstance$lambda(parameters));
    var tmp1_elvis_lhs = $this.o3z_1.s1o();
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.also' call
      $this.o3z_1.u3v(tmp0);
      tmp_1 = tmp0;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    localDeque = tmp_1;
    localDeque.sd(parameters);
  }
  var instanceContext = new InstanceContext($this.k3z_1.z3v_1, $this, parameters);
  var value = resolveValue($this, qualifier, clazz, instanceContext, parameterDef);
  if (!(localDeque == null)) {
    $this.k3z_1.z3v_1.n3w('| << parameters');
    localDeque.vd();
  }
  return value;
}
function resolveValue($this, qualifier, clazz, instanceContext, parameterDef) {
  var tmp0_elvis_lhs = $this.k3z_1.w3v_1.e3z(qualifier, clazz, $this.h3z_1, instanceContext);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    $this.k3z_1.z3v_1.n3w("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look in injected parameters");
    var tmp0_safe_receiver = $this.o3z_1.s1o();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rd();
    tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y3y(clazz);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    var tmp_1;
    if (!$this.j3z_1) {
      $this.k3z_1.z3v_1.n3w("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look at scope source");
      var tmp0_safe_receiver_0 = $this.m3z_1;
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_3;
        if (clazz.u9(tmp0_safe_receiver_0) && qualifier == null) {
          var tmp_4 = $this.m3z_1;
          tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : null;
        } else {
          tmp_3 = null;
        }
        tmp_2 = tmp_3;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = null;
    }
    tmp_0 = tmp_1;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var tmp2_elvis_lhs = tmp_0;
  var tmp_5;
  if (tmp2_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    $this.k3z_1.z3v_1.n3w("|- ? t:'" + getFullName(clazz) + "' - q:'" + toString(qualifier) + "' look in other scopes");
    tmp_5 = findInOtherScope($this, clazz, qualifier, parameterDef);
  } else {
    tmp_5 = tmp2_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_5;
  var tmp_6;
  if (tmp3_elvis_lhs == null) {
    // Inline function 'kotlin.run' call
    var tmp$ret$8;
    if (!(parameterDef == null)) {
      $this.o3z_1.w3();
      $this.k3z_1.z3v_1.n3w('|- << parameters');
    }
    throwDefinitionNotFound($this, qualifier, clazz);
    tmp_6 = tmp$ret$8;
  } else {
    tmp_6 = tmp3_elvis_lhs;
  }
  return tmp_6;
}
function findInOtherScope($this, clazz, qualifier, parameters) {
  var instance = null;
  var tmp0_iterator = $this.l3z_1.t();
  $l$loop: while (tmp0_iterator.u()) {
    var scope = tmp0_iterator.v();
    instance = scope.q3z(clazz, qualifier, parameters);
    if (!(instance == null))
      break $l$loop;
  }
  return instance;
}
function throwDefinitionNotFound($this, qualifier, clazz) {
  var tmp;
  if (qualifier == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = " and qualifier '" + toString(qualifier) + "'";
  }
  var tmp1_elvis_lhs = tmp;
  var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  throw new NoBeanDefFoundException("No definition found for type '" + getFullName(clazz) + "'" + qualifierString + '. Check your Modules configuration and add missing type and/or qualifier!');
}
function Scope$resolveInstance$lambda($parameters) {
  return function () {
    return '| >> parameters ' + toString($parameters) + ' ';
  };
}
function Scope(scopeQualifier, id, isRoot, _koin) {
  isRoot = isRoot === VOID ? false : isRoot;
  this.h3z_1 = scopeQualifier;
  this.i3z_1 = id;
  this.j3z_1 = isRoot;
  this.k3z_1 = _koin;
  var tmp = this;
  // Inline function 'kotlin.collections.arrayListOf' call
  tmp.l3z_1 = ArrayList_init_$Create$();
  this.m3z_1 = null;
  var tmp_0 = this;
  // Inline function 'kotlin.collections.arrayListOf' call
  tmp_0.n3z_1 = ArrayList_init_$Create$();
  this.o3z_1 = new ThreadLocalRef();
  this.p3z_1 = false;
}
protoOf(Scope).q3z = function (clazz, qualifier, parameters) {
  var tmp;
  try {
    tmp = this.r3z(clazz, qualifier, parameters);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof ClosedScopeException) {
      var e = $p;
      this.k3z_1.z3v_1.n3w('* Scope closed - no instance found for ' + getFullName(clazz) + ' on scope ' + this.toString());
      tmp_0 = null;
    } else {
      if ($p instanceof NoBeanDefFoundException) {
        var e_0 = $p;
        this.k3z_1.z3v_1.n3w("* No instance found for type '" + getFullName(clazz) + "' on scope '" + this.toString() + "'");
        tmp_0 = null;
      } else {
        throw $p;
      }
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(Scope).r3z = function (clazz, qualifier, parameters) {
  var tmp;
  if (this.k3z_1.z3v_1.x3w(Level_DEBUG_getInstance())) {
    var tmp_0;
    if (qualifier == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = " with qualifier '" + toString(qualifier) + "'";
    }
    var tmp1_elvis_lhs = tmp_0;
    var qualifierString = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    this.k3z_1.z3v_1.w3w(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "'" + qualifierString + ' ...');
    var start = KoinPlatformTimeTools_instance.o3w();
    var instance = resolveInstance(this, qualifier, clazz, parameters);
    var stop = KoinPlatformTimeTools_instance.o3w();
    // Inline function 'kotlin.Long.div' call
    var this_0 = subtract(stop, start);
    var duration = toNumber(this_0) / 1000000.0;
    this.k3z_1.z3v_1.w3w(Level_DEBUG_getInstance(), "|- '" + getFullName(clazz) + "' in " + duration + ' ms');
    tmp = instance;
  } else {
    tmp = resolveInstance(this, qualifier, clazz, parameters);
  }
  return tmp;
};
protoOf(Scope).toString = function () {
  return "['" + this.i3z_1 + "']";
};
function Companion_2() {
  this.s3z_1 = 1000000.0;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
function koinApplication(createEagerInstances, appDeclaration) {
  createEagerInstances = createEagerInstances === VOID ? true : createEagerInstances;
  appDeclaration = appDeclaration === VOID ? null : appDeclaration;
  var koinApplication = Companion_instance.s3w();
  if (appDeclaration == null)
    null;
  else
    appDeclaration(koinApplication);
  if (createEagerInstances) {
    koinApplication.l3w();
  }
  return koinApplication;
}
function module_0(createdAtStart, moduleDeclaration) {
  createdAtStart = createdAtStart === VOID ? false : createdAtStart;
  var module_0 = new Module(createdAtStart);
  moduleDeclaration(module_0);
  return module_0;
}
function get_classNames() {
  _init_properties_KClassExt_kt__5ro5b2();
  return classNames;
}
var classNames;
function getFullName(_this__u8e3s4) {
  _init_properties_KClassExt_kt__5ro5b2();
  var tmp0_elvis_lhs = get_classNames().j2(_this__u8e3s4);
  return tmp0_elvis_lhs == null ? saveCache(_this__u8e3s4) : tmp0_elvis_lhs;
}
function saveCache(_this__u8e3s4) {
  _init_properties_KClassExt_kt__5ro5b2();
  var name = KoinPlatformTools_instance.t3z(_this__u8e3s4);
  // Inline function 'kotlin.collections.set' call
  get_classNames().m2(_this__u8e3s4, name);
  return name;
}
var properties_initialized_KClassExt_kt_dizwhw;
function _init_properties_KClassExt_kt__5ro5b2() {
  if (!properties_initialized_KClassExt_kt_dizwhw) {
    properties_initialized_KClassExt_kt_dizwhw = true;
    classNames = KoinPlatformTools_instance.b3z();
  }
}
function PrintLogger(level) {
  level = level === VOID ? Level_INFO_getInstance() : level;
  Logger.call(this, level);
}
protoOf(PrintLogger).w3w = function (level, msg) {
  println('[' + level.toString() + '] [Koin] ' + msg);
};
function getTimeSource() {
  var tmp = typeof process !== 'undefined' && process.versions && !!process.versions.node;
  var isNode = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  var tmp_0;
  if (isNode) {
    tmp_0 = new NodeJsHrTimeSource();
  } else {
    var tmp_1 = self.performance && !!self.performance.now;
    var isPerformanceNowSupported = (!(tmp_1 == null) ? typeof tmp_1 === 'boolean' : false) ? tmp_1 : THROW_CCE();
    var tmp_2;
    if (isPerformanceNowSupported) {
      tmp_2 = new PerformanceNowTimeSource();
    } else {
      tmp_2 = new DateNowTimeSource();
    }
    tmp_0 = tmp_2;
  }
  return tmp_0;
}
function NodeJsHrTimeSource() {
}
protoOf(NodeJsHrTimeSource).v3z = function () {
  var tmp = process.hrtime();
  var tmp0_container = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
  // Inline function 'kotlin.collections.component1' call
  var seconds = tmp0_container[0];
  // Inline function 'kotlin.collections.component2' call
  var nanos = tmp0_container[1];
  return roundToLong(seconds * 1000000000 + nanos);
};
function PerformanceNowTimeSource() {
}
protoOf(PerformanceNowTimeSource).v3z = function () {
  var tmp = self.performance.now();
  return roundToLong(((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()) * 1000000);
};
function DateNowTimeSource() {
}
protoOf(DateNowTimeSource).v3z = function () {
  return roundToLong(Date.now() * 1000000);
};
function KoinPlatformTimeTools() {
}
protoOf(KoinPlatformTimeTools).o3w = function () {
  return getTimeSource().v3z();
};
var KoinPlatformTimeTools_instance;
function KoinPlatformTimeTools_getInstance() {
  return KoinPlatformTimeTools_instance;
}
function KoinPlatformTools() {
}
protoOf(KoinPlatformTools).y3x = function (e) {
  return e.toString() + toString_0(split(Exception_init_$Create$().toString(), ['\n']));
};
protoOf(KoinPlatformTools).t3z = function (kClass) {
  var tmp0_elvis_lhs = kClass.o();
  return tmp0_elvis_lhs == null ? 'KClass@' + kClass.hashCode() : tmp0_elvis_lhs;
};
protoOf(KoinPlatformTools).o3y = function () {
  return getNumberHashCode(Default_getInstance().vg()).toString();
};
protoOf(KoinPlatformTools).z3w = function (level) {
  return new PrintLogger(level);
};
protoOf(KoinPlatformTools).d3y = function (lock, block) {
  return block();
};
protoOf(KoinPlatformTools).b3z = function () {
  return HashMap_init_$Create$();
};
var KoinPlatformTools_instance;
function KoinPlatformTools_getInstance() {
  return KoinPlatformTools_instance;
}
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_2 = new Companion_2();
KoinPlatformTimeTools_instance = new KoinPlatformTimeTools();
KoinPlatformTools_instance = new KoinPlatformTools();
//endregion
//region block: exports
export {
  Kind_Factory_getInstance as Kind_Factory_getInstance38bzsz11l0vc4,
  Kind_Scoped_getInstance as Kind_Scoped_getInstanceask9gbgg1oox,
  Kind_Singleton_getInstance as Kind_Singleton_getInstance215bj7loswbl1,
  Companion_getInstance_1 as Companion_getInstance395rdjzrvx0do,
  BeanDefinition as BeanDefinitionhif1nxb54kgk,
  KoinDefinition as KoinDefinition2pr0kscd0vkk6,
  indexKey as indexKey1re3sm1jy88dl,
  FactoryInstanceFactory as FactoryInstanceFactory2tq2q9e5id3pz,
  SingleInstanceFactory as SingleInstanceFactoryp594z6t2b69a,
  parametersOf as parametersOf17ucsakfbbg9c,
  koinApplication as koinApplication1jxfb3e6wfov4,
  module_0 as module39wmcymxxg0fj,
};
//endregion
