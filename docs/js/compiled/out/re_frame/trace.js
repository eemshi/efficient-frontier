// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22404){
var map__22405 = p__22404;
var map__22405__$1 = (((((!((map__22405 == null))))?(((((map__22405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22405):map__22405);
var operation = cljs.core.get.call(null,map__22405__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__22405__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__22405__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__22405__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__22407_22427 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__22408_22428 = null;
var count__22409_22429 = (0);
var i__22410_22430 = (0);
while(true){
if((i__22410_22430 < count__22409_22429)){
var vec__22419_22431 = cljs.core._nth.call(null,chunk__22408_22428,i__22410_22430);
var k_22432 = cljs.core.nth.call(null,vec__22419_22431,(0),null);
var cb_22433 = cljs.core.nth.call(null,vec__22419_22431,(1),null);
try{cb_22433.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22422){var e_22434 = e22422;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22432,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22434);
}

var G__22435 = seq__22407_22427;
var G__22436 = chunk__22408_22428;
var G__22437 = count__22409_22429;
var G__22438 = (i__22410_22430 + (1));
seq__22407_22427 = G__22435;
chunk__22408_22428 = G__22436;
count__22409_22429 = G__22437;
i__22410_22430 = G__22438;
continue;
} else {
var temp__5735__auto___22439 = cljs.core.seq.call(null,seq__22407_22427);
if(temp__5735__auto___22439){
var seq__22407_22440__$1 = temp__5735__auto___22439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22407_22440__$1)){
var c__4556__auto___22441 = cljs.core.chunk_first.call(null,seq__22407_22440__$1);
var G__22442 = cljs.core.chunk_rest.call(null,seq__22407_22440__$1);
var G__22443 = c__4556__auto___22441;
var G__22444 = cljs.core.count.call(null,c__4556__auto___22441);
var G__22445 = (0);
seq__22407_22427 = G__22442;
chunk__22408_22428 = G__22443;
count__22409_22429 = G__22444;
i__22410_22430 = G__22445;
continue;
} else {
var vec__22423_22446 = cljs.core.first.call(null,seq__22407_22440__$1);
var k_22447 = cljs.core.nth.call(null,vec__22423_22446,(0),null);
var cb_22448 = cljs.core.nth.call(null,vec__22423_22446,(1),null);
try{cb_22448.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22426){var e_22449 = e22426;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22447,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22449);
}

var G__22450 = cljs.core.next.call(null,seq__22407_22440__$1);
var G__22451 = null;
var G__22452 = (0);
var G__22453 = (0);
seq__22407_22427 = G__22450;
chunk__22408_22428 = G__22451;
count__22409_22429 = G__22452;
i__22410_22430 = G__22453;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1643864552358
