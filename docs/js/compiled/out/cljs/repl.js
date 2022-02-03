// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31422){
var map__31423 = p__31422;
var map__31423__$1 = (((((!((map__31423 == null))))?(((((map__31423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);
var m = map__31423__$1;
var n = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31425_31457 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31426_31458 = null;
var count__31427_31459 = (0);
var i__31428_31460 = (0);
while(true){
if((i__31428_31460 < count__31427_31459)){
var f_31461 = cljs.core._nth.call(null,chunk__31426_31458,i__31428_31460);
cljs.core.println.call(null,"  ",f_31461);


var G__31462 = seq__31425_31457;
var G__31463 = chunk__31426_31458;
var G__31464 = count__31427_31459;
var G__31465 = (i__31428_31460 + (1));
seq__31425_31457 = G__31462;
chunk__31426_31458 = G__31463;
count__31427_31459 = G__31464;
i__31428_31460 = G__31465;
continue;
} else {
var temp__5735__auto___31466 = cljs.core.seq.call(null,seq__31425_31457);
if(temp__5735__auto___31466){
var seq__31425_31467__$1 = temp__5735__auto___31466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31425_31467__$1)){
var c__4556__auto___31468 = cljs.core.chunk_first.call(null,seq__31425_31467__$1);
var G__31469 = cljs.core.chunk_rest.call(null,seq__31425_31467__$1);
var G__31470 = c__4556__auto___31468;
var G__31471 = cljs.core.count.call(null,c__4556__auto___31468);
var G__31472 = (0);
seq__31425_31457 = G__31469;
chunk__31426_31458 = G__31470;
count__31427_31459 = G__31471;
i__31428_31460 = G__31472;
continue;
} else {
var f_31473 = cljs.core.first.call(null,seq__31425_31467__$1);
cljs.core.println.call(null,"  ",f_31473);


var G__31474 = cljs.core.next.call(null,seq__31425_31467__$1);
var G__31475 = null;
var G__31476 = (0);
var G__31477 = (0);
seq__31425_31457 = G__31474;
chunk__31426_31458 = G__31475;
count__31427_31459 = G__31476;
i__31428_31460 = G__31477;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31478 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31478);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31478)))?cljs.core.second.call(null,arglists_31478):arglists_31478));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31429_31479 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31430_31480 = null;
var count__31431_31481 = (0);
var i__31432_31482 = (0);
while(true){
if((i__31432_31482 < count__31431_31481)){
var vec__31443_31483 = cljs.core._nth.call(null,chunk__31430_31480,i__31432_31482);
var name_31484 = cljs.core.nth.call(null,vec__31443_31483,(0),null);
var map__31446_31485 = cljs.core.nth.call(null,vec__31443_31483,(1),null);
var map__31446_31486__$1 = (((((!((map__31446_31485 == null))))?(((((map__31446_31485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31446_31485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31446_31485):map__31446_31485);
var doc_31487 = cljs.core.get.call(null,map__31446_31486__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31488 = cljs.core.get.call(null,map__31446_31486__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31484);

cljs.core.println.call(null," ",arglists_31488);

if(cljs.core.truth_(doc_31487)){
cljs.core.println.call(null," ",doc_31487);
} else {
}


var G__31489 = seq__31429_31479;
var G__31490 = chunk__31430_31480;
var G__31491 = count__31431_31481;
var G__31492 = (i__31432_31482 + (1));
seq__31429_31479 = G__31489;
chunk__31430_31480 = G__31490;
count__31431_31481 = G__31491;
i__31432_31482 = G__31492;
continue;
} else {
var temp__5735__auto___31493 = cljs.core.seq.call(null,seq__31429_31479);
if(temp__5735__auto___31493){
var seq__31429_31494__$1 = temp__5735__auto___31493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31429_31494__$1)){
var c__4556__auto___31495 = cljs.core.chunk_first.call(null,seq__31429_31494__$1);
var G__31496 = cljs.core.chunk_rest.call(null,seq__31429_31494__$1);
var G__31497 = c__4556__auto___31495;
var G__31498 = cljs.core.count.call(null,c__4556__auto___31495);
var G__31499 = (0);
seq__31429_31479 = G__31496;
chunk__31430_31480 = G__31497;
count__31431_31481 = G__31498;
i__31432_31482 = G__31499;
continue;
} else {
var vec__31448_31500 = cljs.core.first.call(null,seq__31429_31494__$1);
var name_31501 = cljs.core.nth.call(null,vec__31448_31500,(0),null);
var map__31451_31502 = cljs.core.nth.call(null,vec__31448_31500,(1),null);
var map__31451_31503__$1 = (((((!((map__31451_31502 == null))))?(((((map__31451_31502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31451_31502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31451_31502):map__31451_31502);
var doc_31504 = cljs.core.get.call(null,map__31451_31503__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31505 = cljs.core.get.call(null,map__31451_31503__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31501);

cljs.core.println.call(null," ",arglists_31505);

if(cljs.core.truth_(doc_31504)){
cljs.core.println.call(null," ",doc_31504);
} else {
}


var G__31506 = cljs.core.next.call(null,seq__31429_31494__$1);
var G__31507 = null;
var G__31508 = (0);
var G__31509 = (0);
seq__31429_31479 = G__31506;
chunk__31430_31480 = G__31507;
count__31431_31481 = G__31508;
i__31432_31482 = G__31509;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__31453 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31454 = null;
var count__31455 = (0);
var i__31456 = (0);
while(true){
if((i__31456 < count__31455)){
var role = cljs.core._nth.call(null,chunk__31454,i__31456);
var temp__5735__auto___31510__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31510__$1)){
var spec_31511 = temp__5735__auto___31510__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31511));
} else {
}


var G__31512 = seq__31453;
var G__31513 = chunk__31454;
var G__31514 = count__31455;
var G__31515 = (i__31456 + (1));
seq__31453 = G__31512;
chunk__31454 = G__31513;
count__31455 = G__31514;
i__31456 = G__31515;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31453);
if(temp__5735__auto____$1){
var seq__31453__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31453__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31453__$1);
var G__31516 = cljs.core.chunk_rest.call(null,seq__31453__$1);
var G__31517 = c__4556__auto__;
var G__31518 = cljs.core.count.call(null,c__4556__auto__);
var G__31519 = (0);
seq__31453 = G__31516;
chunk__31454 = G__31517;
count__31455 = G__31518;
i__31456 = G__31519;
continue;
} else {
var role = cljs.core.first.call(null,seq__31453__$1);
var temp__5735__auto___31520__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31520__$2)){
var spec_31521 = temp__5735__auto___31520__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31521));
} else {
}


var G__31522 = cljs.core.next.call(null,seq__31453__$1);
var G__31523 = null;
var G__31524 = (0);
var G__31525 = (0);
seq__31453 = G__31522;
chunk__31454 = G__31523;
count__31455 = G__31524;
i__31456 = G__31525;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31526 = cljs.core.conj.call(null,via,t);
var G__31527 = cljs.core.ex_cause.call(null,t);
via = G__31526;
t = G__31527;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data__$1 = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31530 = datafied_throwable;
var map__31530__$1 = (((((!((map__31530 == null))))?(((((map__31530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31530):map__31530);
var via = cljs.core.get.call(null,map__31530__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31530__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31530__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31531 = cljs.core.last.call(null,via);
var map__31531__$1 = (((((!((map__31531 == null))))?(((((map__31531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31531):map__31531);
var type = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data__$1 = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31532 = data__$1;
var map__31532__$1 = (((((!((map__31532 == null))))?(((((map__31532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31532):map__31532);
var problems = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31533 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31533__$1 = (((((!((map__31533 == null))))?(((((map__31533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31533):map__31533);
var top_data = map__31533__$1;
var source = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31538 = phase;
var G__31538__$1 = (((G__31538 instanceof cljs.core.Keyword))?G__31538.fqn:null);
switch (G__31538__$1) {
case "read-source":
var map__31539 = data__$1;
var map__31539__$1 = (((((!((map__31539 == null))))?(((((map__31539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31539):map__31539);
var line = cljs.core.get.call(null,map__31539__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31539__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31541 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31541__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31541,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31541);
var G__31541__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31541__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31541__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31541__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31541__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31542 = top_data;
var G__31542__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31542,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31542);
var G__31542__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31542__$1);
var G__31542__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31542__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31542__$2);
var G__31542__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31542__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31542__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31542__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data__$1);
} else {
return G__31542__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31543 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31543,(0),null);
var method = cljs.core.nth.call(null,vec__31543,(1),null);
var file = cljs.core.nth.call(null,vec__31543,(2),null);
var line = cljs.core.nth.call(null,vec__31543,(3),null);
var G__31546 = top_data;
var G__31546__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31546,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31546);
var G__31546__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31546__$1);
var G__31546__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31546__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31546__$2);
var G__31546__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31546__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31546__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31546__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31546__$4;
}

break;
case "execution":
var vec__31547 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31547,(0),null);
var method = cljs.core.nth.call(null,vec__31547,(1),null);
var file = cljs.core.nth.call(null,vec__31547,(2),null);
var line = cljs.core.nth.call(null,vec__31547,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31529_SHARP_){
var or__4126__auto__ = (p1__31529_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31529_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31550 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31550__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31550,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31550);
var G__31550__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31550__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31550__$1);
var G__31550__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31550__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31550__$2);
var G__31550__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31550__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31550__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31550__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data__$1);
} else {
return G__31550__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31538__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31554){
var map__31555 = p__31554;
var map__31555__$1 = (((((!((map__31555 == null))))?(((((map__31555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31555):map__31555);
var triage_data = map__31555__$1;
var phase = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31557 = phase;
var G__31557__$1 = (((G__31557 instanceof cljs.core.Keyword))?G__31557.fqn:null);
switch (G__31557__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31558_31567 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31559_31568 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31560_31569 = true;
var _STAR_print_fn_STAR__temp_val__31561_31570 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31560_31569);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31561_31570);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31552_SHARP_){
return cljs.core.dissoc.call(null,p1__31552_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31559_31568);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31558_31567);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31562_31571 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31563_31572 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31564_31573 = true;
var _STAR_print_fn_STAR__temp_val__31565_31574 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31564_31573);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31565_31574);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31553_SHARP_){
return cljs.core.dissoc.call(null,p1__31553_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31563_31572);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31562_31571);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31557__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1643864560392
