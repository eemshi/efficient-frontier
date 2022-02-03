// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22572 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22573 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22573);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___22606 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___22606)){
var new_db_22607 = temp__5735__auto___22606;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_22607);
} else {
}

var seq__22574 = cljs.core.seq.call(null,effects_without_db);
var chunk__22575 = null;
var count__22576 = (0);
var i__22577 = (0);
while(true){
if((i__22577 < count__22576)){
var vec__22584 = cljs.core._nth.call(null,chunk__22575,i__22577);
var effect_key = cljs.core.nth.call(null,vec__22584,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22584,(1),null);
var temp__5733__auto___22608 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22608)){
var effect_fn_22609 = temp__5733__auto___22608;
effect_fn_22609.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22610 = seq__22574;
var G__22611 = chunk__22575;
var G__22612 = count__22576;
var G__22613 = (i__22577 + (1));
seq__22574 = G__22610;
chunk__22575 = G__22611;
count__22576 = G__22612;
i__22577 = G__22613;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22574);
if(temp__5735__auto__){
var seq__22574__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22574__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22574__$1);
var G__22614 = cljs.core.chunk_rest.call(null,seq__22574__$1);
var G__22615 = c__4556__auto__;
var G__22616 = cljs.core.count.call(null,c__4556__auto__);
var G__22617 = (0);
seq__22574 = G__22614;
chunk__22575 = G__22615;
count__22576 = G__22616;
i__22577 = G__22617;
continue;
} else {
var vec__22587 = cljs.core.first.call(null,seq__22574__$1);
var effect_key = cljs.core.nth.call(null,vec__22587,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22587,(1),null);
var temp__5733__auto___22618 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22618)){
var effect_fn_22619 = temp__5733__auto___22618;
effect_fn_22619.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22620 = cljs.core.next.call(null,seq__22574__$1);
var G__22621 = null;
var G__22622 = (0);
var G__22623 = (0);
seq__22574 = G__22620;
chunk__22575 = G__22621;
count__22576 = G__22622;
i__22577 = G__22623;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22382__auto___22624 = re_frame.interop.now.call(null);
var duration__22383__auto___22625 = (end__22382__auto___22624 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22383__auto___22625,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22382__auto___22624);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22572);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___22626 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___22626)){
var new_db_22627 = temp__5735__auto___22626;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_22627);
} else {
}

var seq__22590 = cljs.core.seq.call(null,effects_without_db);
var chunk__22591 = null;
var count__22592 = (0);
var i__22593 = (0);
while(true){
if((i__22593 < count__22592)){
var vec__22600 = cljs.core._nth.call(null,chunk__22591,i__22593);
var effect_key = cljs.core.nth.call(null,vec__22600,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22600,(1),null);
var temp__5733__auto___22628 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22628)){
var effect_fn_22629 = temp__5733__auto___22628;
effect_fn_22629.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22630 = seq__22590;
var G__22631 = chunk__22591;
var G__22632 = count__22592;
var G__22633 = (i__22593 + (1));
seq__22590 = G__22630;
chunk__22591 = G__22631;
count__22592 = G__22632;
i__22593 = G__22633;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22590);
if(temp__5735__auto__){
var seq__22590__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22590__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22590__$1);
var G__22634 = cljs.core.chunk_rest.call(null,seq__22590__$1);
var G__22635 = c__4556__auto__;
var G__22636 = cljs.core.count.call(null,c__4556__auto__);
var G__22637 = (0);
seq__22590 = G__22634;
chunk__22591 = G__22635;
count__22592 = G__22636;
i__22593 = G__22637;
continue;
} else {
var vec__22603 = cljs.core.first.call(null,seq__22590__$1);
var effect_key = cljs.core.nth.call(null,vec__22603,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22603,(1),null);
var temp__5733__auto___22638 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22638)){
var effect_fn_22639 = temp__5733__auto___22638;
effect_fn_22639.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22640 = cljs.core.next.call(null,seq__22590__$1);
var G__22641 = null;
var G__22642 = (0);
var G__22643 = (0);
seq__22590 = G__22640;
chunk__22591 = G__22641;
count__22592 = G__22642;
i__22593 = G__22643;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__22644){
var map__22645 = p__22644;
var map__22645__$1 = (((((!((map__22645 == null))))?(((((map__22645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22645):map__22645);
var effect = map__22645__$1;
var ms = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__22647 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22648 = null;
var count__22649 = (0);
var i__22650 = (0);
while(true){
if((i__22650 < count__22649)){
var effect = cljs.core._nth.call(null,chunk__22648,i__22650);
re_frame.fx.dispatch_later.call(null,effect);


var G__22651 = seq__22647;
var G__22652 = chunk__22648;
var G__22653 = count__22649;
var G__22654 = (i__22650 + (1));
seq__22647 = G__22651;
chunk__22648 = G__22652;
count__22649 = G__22653;
i__22650 = G__22654;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22647);
if(temp__5735__auto__){
var seq__22647__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22647__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22647__$1);
var G__22655 = cljs.core.chunk_rest.call(null,seq__22647__$1);
var G__22656 = c__4556__auto__;
var G__22657 = cljs.core.count.call(null,c__4556__auto__);
var G__22658 = (0);
seq__22647 = G__22655;
chunk__22648 = G__22656;
count__22649 = G__22657;
i__22650 = G__22658;
continue;
} else {
var effect = cljs.core.first.call(null,seq__22647__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__22659 = cljs.core.next.call(null,seq__22647__$1);
var G__22660 = null;
var G__22661 = (0);
var G__22662 = (0);
seq__22647 = G__22659;
chunk__22648 = G__22660;
count__22649 = G__22661;
i__22650 = G__22662;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__22663 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__22664 = null;
var count__22665 = (0);
var i__22666 = (0);
while(true){
if((i__22666 < count__22665)){
var vec__22673 = cljs.core._nth.call(null,chunk__22664,i__22666);
var effect_key = cljs.core.nth.call(null,vec__22673,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22673,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___22679 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22679)){
var effect_fn_22680 = temp__5733__auto___22679;
effect_fn_22680.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__22681 = seq__22663;
var G__22682 = chunk__22664;
var G__22683 = count__22665;
var G__22684 = (i__22666 + (1));
seq__22663 = G__22681;
chunk__22664 = G__22682;
count__22665 = G__22683;
i__22666 = G__22684;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22663);
if(temp__5735__auto__){
var seq__22663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22663__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22663__$1);
var G__22685 = cljs.core.chunk_rest.call(null,seq__22663__$1);
var G__22686 = c__4556__auto__;
var G__22687 = cljs.core.count.call(null,c__4556__auto__);
var G__22688 = (0);
seq__22663 = G__22685;
chunk__22664 = G__22686;
count__22665 = G__22687;
i__22666 = G__22688;
continue;
} else {
var vec__22676 = cljs.core.first.call(null,seq__22663__$1);
var effect_key = cljs.core.nth.call(null,vec__22676,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22676,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___22689 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22689)){
var effect_fn_22690 = temp__5733__auto___22689;
effect_fn_22690.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__22691 = cljs.core.next.call(null,seq__22663__$1);
var G__22692 = null;
var G__22693 = (0);
var G__22694 = (0);
seq__22663 = G__22691;
chunk__22664 = G__22692;
count__22665 = G__22693;
i__22666 = G__22694;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__22695 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22696 = null;
var count__22697 = (0);
var i__22698 = (0);
while(true){
if((i__22698 < count__22697)){
var event = cljs.core._nth.call(null,chunk__22696,i__22698);
re_frame.router.dispatch.call(null,event);


var G__22699 = seq__22695;
var G__22700 = chunk__22696;
var G__22701 = count__22697;
var G__22702 = (i__22698 + (1));
seq__22695 = G__22699;
chunk__22696 = G__22700;
count__22697 = G__22701;
i__22698 = G__22702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22695);
if(temp__5735__auto__){
var seq__22695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22695__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22695__$1);
var G__22703 = cljs.core.chunk_rest.call(null,seq__22695__$1);
var G__22704 = c__4556__auto__;
var G__22705 = cljs.core.count.call(null,c__4556__auto__);
var G__22706 = (0);
seq__22695 = G__22703;
chunk__22696 = G__22704;
count__22697 = G__22705;
i__22698 = G__22706;
continue;
} else {
var event = cljs.core.first.call(null,seq__22695__$1);
re_frame.router.dispatch.call(null,event);


var G__22707 = cljs.core.next.call(null,seq__22695__$1);
var G__22708 = null;
var G__22709 = (0);
var G__22710 = (0);
seq__22695 = G__22707;
chunk__22696 = G__22708;
count__22697 = G__22709;
i__22698 = G__22710;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22711 = cljs.core.seq.call(null,value);
var chunk__22712 = null;
var count__22713 = (0);
var i__22714 = (0);
while(true){
if((i__22714 < count__22713)){
var event = cljs.core._nth.call(null,chunk__22712,i__22714);
clear_event.call(null,event);


var G__22715 = seq__22711;
var G__22716 = chunk__22712;
var G__22717 = count__22713;
var G__22718 = (i__22714 + (1));
seq__22711 = G__22715;
chunk__22712 = G__22716;
count__22713 = G__22717;
i__22714 = G__22718;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22711);
if(temp__5735__auto__){
var seq__22711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22711__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__22711__$1);
var G__22719 = cljs.core.chunk_rest.call(null,seq__22711__$1);
var G__22720 = c__4556__auto__;
var G__22721 = cljs.core.count.call(null,c__4556__auto__);
var G__22722 = (0);
seq__22711 = G__22719;
chunk__22712 = G__22720;
count__22713 = G__22721;
i__22714 = G__22722;
continue;
} else {
var event = cljs.core.first.call(null,seq__22711__$1);
clear_event.call(null,event);


var G__22723 = cljs.core.next.call(null,seq__22711__$1);
var G__22724 = null;
var G__22725 = (0);
var G__22726 = (0);
seq__22711 = G__22723;
chunk__22712 = G__22724;
count__22713 = G__22725;
i__22714 = G__22726;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1643864552840
