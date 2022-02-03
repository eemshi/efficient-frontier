// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21341__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21342__i = 0, G__21342__a = new Array(arguments.length -  0);
while (G__21342__i < G__21342__a.length) {G__21342__a[G__21342__i] = arguments[G__21342__i + 0]; ++G__21342__i;}
  args = new cljs.core.IndexedSeq(G__21342__a,0,null);
} 
return G__21341__delegate.call(this,args);};
G__21341.cljs$lang$maxFixedArity = 0;
G__21341.cljs$lang$applyTo = (function (arglist__21343){
var args = cljs.core.seq(arglist__21343);
return G__21341__delegate(args);
});
G__21341.cljs$core$IFn$_invoke$arity$variadic = G__21341__delegate;
return G__21341;
})()
);

(o.error = (function() { 
var G__21344__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21345__i = 0, G__21345__a = new Array(arguments.length -  0);
while (G__21345__i < G__21345__a.length) {G__21345__a[G__21345__i] = arguments[G__21345__i + 0]; ++G__21345__i;}
  args = new cljs.core.IndexedSeq(G__21345__a,0,null);
} 
return G__21344__delegate.call(this,args);};
G__21344.cljs$lang$maxFixedArity = 0;
G__21344.cljs$lang$applyTo = (function (arglist__21346){
var args = cljs.core.seq(arglist__21346);
return G__21344__delegate(args);
});
G__21344.cljs$core$IFn$_invoke$arity$variadic = G__21344__delegate;
return G__21344;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1643864550797
