import {
  LockFreeLinkedListNode1f5fxflchw0ko as LockFreeLinkedListNode,
  CopyOnWriteHashMap2wz01l72sexe7 as CopyOnWriteHashMap,
} from './ktor-ktor-utils.mjs';
import {
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  equals2au1ep9vhcato as equals,
  addSuppressedu5jwjfvsc039 as addSuppressed,
  Unit_instance28fytmsmm6r23 as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(HandlerRegistration, 'HandlerRegistration', VOID, LockFreeLinkedListNode);
initMetadataForClass(Events, 'Events', Events);
initMetadataForClass(EventDefinition, 'EventDefinition', EventDefinition);
//endregion
function HandlerRegistration() {
}
function Events() {
  this.m42_1 = new CopyOnWriteHashMap();
}
protoOf(Events).n42 = function (definition, value) {
  var exception = null;
  var tmp0_safe_receiver = this.m42_1.c2u(definition);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
    var tmp = tmp0_safe_receiver.m1t();
    var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
    while (!equals(cur, tmp0_safe_receiver)) {
      if (cur instanceof HandlerRegistration) {
        var registration = cur;
        try {
          var tmp_0 = registration.p42_1;
          (typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE())(value);
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            var tmp0_safe_receiver_0 = exception;
            var tmp_1;
            if (tmp0_safe_receiver_0 == null) {
              tmp_1 = null;
            } else {
              addSuppressed(tmp0_safe_receiver_0, e);
              tmp_1 = Unit_instance;
            }
            if (tmp_1 == null) {
              // Inline function 'kotlin.run' call
              exception = e;
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.w2u();
    }
  }
  var tmp1_safe_receiver = exception;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp1_safe_receiver;
  }
};
function EventDefinition() {
}
//region block: exports
export {
  EventDefinition as EventDefinition1fymk8xrdelhn,
  Events as Events63tfxre48w4z,
};
//endregion
