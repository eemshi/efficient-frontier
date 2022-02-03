// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31769){if((e31769 instanceof Error)){
var e = e31769;
return "Error: Unable to stringify";
} else {
throw e31769;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31772 = arguments.length;
switch (G__31772) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31770_SHARP_){
if(typeof p1__31770_SHARP_ === 'string'){
return p1__31770_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31770_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31775 = arguments.length;
var i__4737__auto___31776 = (0);
while(true){
if((i__4737__auto___31776 < len__4736__auto___31775)){
args__4742__auto__.push((arguments[i__4737__auto___31776]));

var G__31777 = (i__4737__auto___31776 + (1));
i__4737__auto___31776 = G__31777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31774){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31774));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31779 = arguments.length;
var i__4737__auto___31780 = (0);
while(true){
if((i__4737__auto___31780 < len__4736__auto___31779)){
args__4742__auto__.push((arguments[i__4737__auto___31780]));

var G__31781 = (i__4737__auto___31780 + (1));
i__4737__auto___31780 = G__31781;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31778){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31778));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31782){
var map__31783 = p__31782;
var map__31783__$1 = (((((!((map__31783 == null))))?(((((map__31783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31783):map__31783);
var message = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31783__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27851__auto___31862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_31834){
var state_val_31835 = (state_31834[(1)]);
if((state_val_31835 === (7))){
var inst_31830 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
var statearr_31836_31863 = state_31834__$1;
(statearr_31836_31863[(2)] = inst_31830);

(statearr_31836_31863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (1))){
var state_31834__$1 = state_31834;
var statearr_31837_31864 = state_31834__$1;
(statearr_31837_31864[(2)] = null);

(statearr_31837_31864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (4))){
var inst_31787 = (state_31834[(7)]);
var inst_31787__$1 = (state_31834[(2)]);
var state_31834__$1 = (function (){var statearr_31838 = state_31834;
(statearr_31838[(7)] = inst_31787__$1);

return statearr_31838;
})();
if(cljs.core.truth_(inst_31787__$1)){
var statearr_31839_31865 = state_31834__$1;
(statearr_31839_31865[(1)] = (5));

} else {
var statearr_31840_31866 = state_31834__$1;
(statearr_31840_31866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (15))){
var inst_31794 = (state_31834[(8)]);
var inst_31809 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31794);
var inst_31810 = cljs.core.first.call(null,inst_31809);
var inst_31811 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31810);
var inst_31812 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31811)].join('');
var inst_31813 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31812);
var state_31834__$1 = state_31834;
var statearr_31841_31867 = state_31834__$1;
(statearr_31841_31867[(2)] = inst_31813);

(statearr_31841_31867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (13))){
var inst_31818 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
var statearr_31842_31868 = state_31834__$1;
(statearr_31842_31868[(2)] = inst_31818);

(statearr_31842_31868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (6))){
var state_31834__$1 = state_31834;
var statearr_31843_31869 = state_31834__$1;
(statearr_31843_31869[(2)] = null);

(statearr_31843_31869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (17))){
var inst_31816 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
var statearr_31844_31870 = state_31834__$1;
(statearr_31844_31870[(2)] = inst_31816);

(statearr_31844_31870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (3))){
var inst_31832 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31834__$1,inst_31832);
} else {
if((state_val_31835 === (12))){
var inst_31793 = (state_31834[(9)]);
var inst_31807 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31793,opts);
var state_31834__$1 = state_31834;
if(inst_31807){
var statearr_31845_31871 = state_31834__$1;
(statearr_31845_31871[(1)] = (15));

} else {
var statearr_31846_31872 = state_31834__$1;
(statearr_31846_31872[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (2))){
var state_31834__$1 = state_31834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31834__$1,(4),ch);
} else {
if((state_val_31835 === (11))){
var inst_31794 = (state_31834[(8)]);
var inst_31799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31800 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31794);
var inst_31801 = cljs.core.async.timeout.call(null,(1000));
var inst_31802 = [inst_31800,inst_31801];
var inst_31803 = (new cljs.core.PersistentVector(null,2,(5),inst_31799,inst_31802,null));
var state_31834__$1 = state_31834;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31834__$1,(14),inst_31803);
} else {
if((state_val_31835 === (9))){
var inst_31794 = (state_31834[(8)]);
var inst_31820 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31821 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31794);
var inst_31822 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31821);
var inst_31823 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31822)].join('');
var inst_31824 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31823);
var state_31834__$1 = (function (){var statearr_31847 = state_31834;
(statearr_31847[(10)] = inst_31820);

return statearr_31847;
})();
var statearr_31848_31873 = state_31834__$1;
(statearr_31848_31873[(2)] = inst_31824);

(statearr_31848_31873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (5))){
var inst_31787 = (state_31834[(7)]);
var inst_31789 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31790 = (new cljs.core.PersistentArrayMap(null,2,inst_31789,null));
var inst_31791 = (new cljs.core.PersistentHashSet(null,inst_31790,null));
var inst_31792 = figwheel.client.focus_msgs.call(null,inst_31791,inst_31787);
var inst_31793 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31792);
var inst_31794 = cljs.core.first.call(null,inst_31792);
var inst_31795 = figwheel.client.autoload_QMARK_.call(null);
var state_31834__$1 = (function (){var statearr_31849 = state_31834;
(statearr_31849[(8)] = inst_31794);

(statearr_31849[(9)] = inst_31793);

return statearr_31849;
})();
if(cljs.core.truth_(inst_31795)){
var statearr_31850_31874 = state_31834__$1;
(statearr_31850_31874[(1)] = (8));

} else {
var statearr_31851_31875 = state_31834__$1;
(statearr_31851_31875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (14))){
var inst_31805 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
var statearr_31852_31876 = state_31834__$1;
(statearr_31852_31876[(2)] = inst_31805);

(statearr_31852_31876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (16))){
var state_31834__$1 = state_31834;
var statearr_31853_31877 = state_31834__$1;
(statearr_31853_31877[(2)] = null);

(statearr_31853_31877[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (10))){
var inst_31826 = (state_31834[(2)]);
var state_31834__$1 = (function (){var statearr_31854 = state_31834;
(statearr_31854[(11)] = inst_31826);

return statearr_31854;
})();
var statearr_31855_31878 = state_31834__$1;
(statearr_31855_31878[(2)] = null);

(statearr_31855_31878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (8))){
var inst_31793 = (state_31834[(9)]);
var inst_31797 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31793,opts);
var state_31834__$1 = state_31834;
if(cljs.core.truth_(inst_31797)){
var statearr_31856_31879 = state_31834__$1;
(statearr_31856_31879[(1)] = (11));

} else {
var statearr_31857_31880 = state_31834__$1;
(statearr_31857_31880[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27757__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27757__auto____0 = (function (){
var statearr_31858 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31858[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27757__auto__);

(statearr_31858[(1)] = (1));

return statearr_31858;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27757__auto____1 = (function (state_31834){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_31834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e31859){if((e31859 instanceof Object)){
var ex__27760__auto__ = e31859;
var statearr_31860_31881 = state_31834;
(statearr_31860_31881[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31882 = state_31834;
state_31834 = G__31882;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27757__auto__ = function(state_31834){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27757__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27757__auto____1.call(this,state_31834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27757__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27757__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_31861 = f__27852__auto__.call(null);
(statearr_31861[(6)] = c__27851__auto___31862);

return statearr_31861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31883_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31883_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31889 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31885 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31886 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31887 = true;
var _STAR_print_fn_STAR__temp_val__31888 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31887);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31888);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31886);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31885);
}}catch (e31884){if((e31884 instanceof Error)){
var e = e31884;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31889], null));
} else {
var e = e31884;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31890){
var map__31891 = p__31890;
var map__31891__$1 = (((((!((map__31891 == null))))?(((((map__31891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31891):map__31891);
var opts = map__31891__$1;
var build_id = cljs.core.get.call(null,map__31891__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31893){
var vec__31894 = p__31893;
var seq__31895 = cljs.core.seq.call(null,vec__31894);
var first__31896 = cljs.core.first.call(null,seq__31895);
var seq__31895__$1 = cljs.core.next.call(null,seq__31895);
var map__31897 = first__31896;
var map__31897__$1 = (((((!((map__31897 == null))))?(((((map__31897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31897):map__31897);
var msg = map__31897__$1;
var msg_name = cljs.core.get.call(null,map__31897__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31895__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31899){
var vec__31900 = p__31899;
var seq__31901 = cljs.core.seq.call(null,vec__31900);
var first__31902 = cljs.core.first.call(null,seq__31901);
var seq__31901__$1 = cljs.core.next.call(null,seq__31901);
var map__31903 = first__31902;
var map__31903__$1 = (((((!((map__31903 == null))))?(((((map__31903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31903):map__31903);
var msg = map__31903__$1;
var msg_name = cljs.core.get.call(null,map__31903__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31901__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31905){
var map__31906 = p__31905;
var map__31906__$1 = (((((!((map__31906 == null))))?(((((map__31906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31906):map__31906);
var on_compile_warning = cljs.core.get.call(null,map__31906__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31906__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31908){
var vec__31909 = p__31908;
var seq__31910 = cljs.core.seq.call(null,vec__31909);
var first__31911 = cljs.core.first.call(null,seq__31910);
var seq__31910__$1 = cljs.core.next.call(null,seq__31910);
var map__31912 = first__31911;
var map__31912__$1 = (((((!((map__31912 == null))))?(((((map__31912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31912):map__31912);
var msg = map__31912__$1;
var msg_name = cljs.core.get.call(null,map__31912__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31910__$1;
var pred__31914 = cljs.core._EQ_;
var expr__31915 = msg_name;
if(cljs.core.truth_(pred__31914.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31915))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31914.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31915))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_32004){
var state_val_32005 = (state_32004[(1)]);
if((state_val_32005 === (7))){
var inst_31924 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31924)){
var statearr_32006_32053 = state_32004__$1;
(statearr_32006_32053[(1)] = (8));

} else {
var statearr_32007_32054 = state_32004__$1;
(statearr_32007_32054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (20))){
var inst_31998 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32008_32055 = state_32004__$1;
(statearr_32008_32055[(2)] = inst_31998);

(statearr_32008_32055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (27))){
var inst_31994 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32009_32056 = state_32004__$1;
(statearr_32009_32056[(2)] = inst_31994);

(statearr_32009_32056[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (1))){
var inst_31917 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31917)){
var statearr_32010_32057 = state_32004__$1;
(statearr_32010_32057[(1)] = (2));

} else {
var statearr_32011_32058 = state_32004__$1;
(statearr_32011_32058[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (24))){
var inst_31996 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32012_32059 = state_32004__$1;
(statearr_32012_32059[(2)] = inst_31996);

(statearr_32012_32059[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (4))){
var inst_32002 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32004__$1,inst_32002);
} else {
if((state_val_32005 === (15))){
var inst_32000 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32013_32060 = state_32004__$1;
(statearr_32013_32060[(2)] = inst_32000);

(statearr_32013_32060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (21))){
var inst_31953 = (state_32004[(2)]);
var inst_31954 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31955 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31954);
var state_32004__$1 = (function (){var statearr_32014 = state_32004;
(statearr_32014[(7)] = inst_31953);

return statearr_32014;
})();
var statearr_32015_32061 = state_32004__$1;
(statearr_32015_32061[(2)] = inst_31955);

(statearr_32015_32061[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (31))){
var inst_31983 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32004__$1 = state_32004;
if(inst_31983){
var statearr_32016_32062 = state_32004__$1;
(statearr_32016_32062[(1)] = (34));

} else {
var statearr_32017_32063 = state_32004__$1;
(statearr_32017_32063[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (32))){
var inst_31992 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32018_32064 = state_32004__$1;
(statearr_32018_32064[(2)] = inst_31992);

(statearr_32018_32064[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (33))){
var inst_31979 = (state_32004[(2)]);
var inst_31980 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31981 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31980);
var state_32004__$1 = (function (){var statearr_32019 = state_32004;
(statearr_32019[(8)] = inst_31979);

return statearr_32019;
})();
var statearr_32020_32065 = state_32004__$1;
(statearr_32020_32065[(2)] = inst_31981);

(statearr_32020_32065[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (13))){
var inst_31938 = figwheel.client.heads_up.clear.call(null);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(16),inst_31938);
} else {
if((state_val_32005 === (22))){
var inst_31959 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31960 = figwheel.client.heads_up.append_warning_message.call(null,inst_31959);
var state_32004__$1 = state_32004;
var statearr_32021_32066 = state_32004__$1;
(statearr_32021_32066[(2)] = inst_31960);

(statearr_32021_32066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (36))){
var inst_31990 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32022_32067 = state_32004__$1;
(statearr_32022_32067[(2)] = inst_31990);

(statearr_32022_32067[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (29))){
var inst_31970 = (state_32004[(2)]);
var inst_31971 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31972 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31971);
var state_32004__$1 = (function (){var statearr_32023 = state_32004;
(statearr_32023[(9)] = inst_31970);

return statearr_32023;
})();
var statearr_32024_32068 = state_32004__$1;
(statearr_32024_32068[(2)] = inst_31972);

(statearr_32024_32068[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (6))){
var inst_31919 = (state_32004[(10)]);
var state_32004__$1 = state_32004;
var statearr_32025_32069 = state_32004__$1;
(statearr_32025_32069[(2)] = inst_31919);

(statearr_32025_32069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (28))){
var inst_31966 = (state_32004[(2)]);
var inst_31967 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31968 = figwheel.client.heads_up.display_warning.call(null,inst_31967);
var state_32004__$1 = (function (){var statearr_32026 = state_32004;
(statearr_32026[(11)] = inst_31966);

return statearr_32026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(29),inst_31968);
} else {
if((state_val_32005 === (25))){
var inst_31964 = figwheel.client.heads_up.clear.call(null);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(28),inst_31964);
} else {
if((state_val_32005 === (34))){
var inst_31985 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(37),inst_31985);
} else {
if((state_val_32005 === (17))){
var inst_31944 = (state_32004[(2)]);
var inst_31945 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31946 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31945);
var state_32004__$1 = (function (){var statearr_32027 = state_32004;
(statearr_32027[(12)] = inst_31944);

return statearr_32027;
})();
var statearr_32028_32070 = state_32004__$1;
(statearr_32028_32070[(2)] = inst_31946);

(statearr_32028_32070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (3))){
var inst_31936 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32004__$1 = state_32004;
if(inst_31936){
var statearr_32029_32071 = state_32004__$1;
(statearr_32029_32071[(1)] = (13));

} else {
var statearr_32030_32072 = state_32004__$1;
(statearr_32030_32072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (12))){
var inst_31932 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32031_32073 = state_32004__$1;
(statearr_32031_32073[(2)] = inst_31932);

(statearr_32031_32073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (2))){
var inst_31919 = (state_32004[(10)]);
var inst_31919__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32004__$1 = (function (){var statearr_32032 = state_32004;
(statearr_32032[(10)] = inst_31919__$1);

return statearr_32032;
})();
if(cljs.core.truth_(inst_31919__$1)){
var statearr_32033_32074 = state_32004__$1;
(statearr_32033_32074[(1)] = (5));

} else {
var statearr_32034_32075 = state_32004__$1;
(statearr_32034_32075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (23))){
var inst_31962 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32004__$1 = state_32004;
if(inst_31962){
var statearr_32035_32076 = state_32004__$1;
(statearr_32035_32076[(1)] = (25));

} else {
var statearr_32036_32077 = state_32004__$1;
(statearr_32036_32077[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (35))){
var state_32004__$1 = state_32004;
var statearr_32037_32078 = state_32004__$1;
(statearr_32037_32078[(2)] = null);

(statearr_32037_32078[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (19))){
var inst_31957 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32004__$1 = state_32004;
if(inst_31957){
var statearr_32038_32079 = state_32004__$1;
(statearr_32038_32079[(1)] = (22));

} else {
var statearr_32039_32080 = state_32004__$1;
(statearr_32039_32080[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (11))){
var inst_31928 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32040_32081 = state_32004__$1;
(statearr_32040_32081[(2)] = inst_31928);

(statearr_32040_32081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (9))){
var inst_31930 = figwheel.client.heads_up.clear.call(null);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(12),inst_31930);
} else {
if((state_val_32005 === (5))){
var inst_31921 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32004__$1 = state_32004;
var statearr_32041_32082 = state_32004__$1;
(statearr_32041_32082[(2)] = inst_31921);

(statearr_32041_32082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (14))){
var inst_31948 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32004__$1 = state_32004;
if(inst_31948){
var statearr_32042_32083 = state_32004__$1;
(statearr_32042_32083[(1)] = (18));

} else {
var statearr_32043_32084 = state_32004__$1;
(statearr_32043_32084[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (26))){
var inst_31974 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32004__$1 = state_32004;
if(inst_31974){
var statearr_32044_32085 = state_32004__$1;
(statearr_32044_32085[(1)] = (30));

} else {
var statearr_32045_32086 = state_32004__$1;
(statearr_32045_32086[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (16))){
var inst_31940 = (state_32004[(2)]);
var inst_31941 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31942 = figwheel.client.heads_up.display_exception.call(null,inst_31941);
var state_32004__$1 = (function (){var statearr_32046 = state_32004;
(statearr_32046[(13)] = inst_31940);

return statearr_32046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(17),inst_31942);
} else {
if((state_val_32005 === (30))){
var inst_31976 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31977 = figwheel.client.heads_up.display_warning.call(null,inst_31976);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(33),inst_31977);
} else {
if((state_val_32005 === (10))){
var inst_31934 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32047_32087 = state_32004__$1;
(statearr_32047_32087[(2)] = inst_31934);

(statearr_32047_32087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (18))){
var inst_31950 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31951 = figwheel.client.heads_up.display_exception.call(null,inst_31950);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(21),inst_31951);
} else {
if((state_val_32005 === (37))){
var inst_31987 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32048_32088 = state_32004__$1;
(statearr_32048_32088[(2)] = inst_31987);

(statearr_32048_32088[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (8))){
var inst_31926 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32004__$1,(11),inst_31926);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto____0 = (function (){
var statearr_32049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32049[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto__);

(statearr_32049[(1)] = (1));

return statearr_32049;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto____1 = (function (state_32004){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_32004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e32050){if((e32050 instanceof Object)){
var ex__27760__auto__ = e32050;
var statearr_32051_32089 = state_32004;
(statearr_32051_32089[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32090 = state_32004;
state_32004 = G__32090;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto__ = function(state_32004){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto____1.call(this,state_32004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_32052 = f__27852__auto__.call(null);
(statearr_32052[(6)] = c__27851__auto__);

return statearr_32052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27851__auto___32119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_32105){
var state_val_32106 = (state_32105[(1)]);
if((state_val_32106 === (1))){
var state_32105__$1 = state_32105;
var statearr_32107_32120 = state_32105__$1;
(statearr_32107_32120[(2)] = null);

(statearr_32107_32120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (2))){
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32105__$1,(4),ch);
} else {
if((state_val_32106 === (3))){
var inst_32103 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32105__$1,inst_32103);
} else {
if((state_val_32106 === (4))){
var inst_32093 = (state_32105[(7)]);
var inst_32093__$1 = (state_32105[(2)]);
var state_32105__$1 = (function (){var statearr_32108 = state_32105;
(statearr_32108[(7)] = inst_32093__$1);

return statearr_32108;
})();
if(cljs.core.truth_(inst_32093__$1)){
var statearr_32109_32121 = state_32105__$1;
(statearr_32109_32121[(1)] = (5));

} else {
var statearr_32110_32122 = state_32105__$1;
(statearr_32110_32122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (5))){
var inst_32093 = (state_32105[(7)]);
var inst_32095 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32093);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32105__$1,(8),inst_32095);
} else {
if((state_val_32106 === (6))){
var state_32105__$1 = state_32105;
var statearr_32111_32123 = state_32105__$1;
(statearr_32111_32123[(2)] = null);

(statearr_32111_32123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (7))){
var inst_32101 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32112_32124 = state_32105__$1;
(statearr_32112_32124[(2)] = inst_32101);

(statearr_32112_32124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (8))){
var inst_32097 = (state_32105[(2)]);
var state_32105__$1 = (function (){var statearr_32113 = state_32105;
(statearr_32113[(8)] = inst_32097);

return statearr_32113;
})();
var statearr_32114_32125 = state_32105__$1;
(statearr_32114_32125[(2)] = null);

(statearr_32114_32125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27757__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27757__auto____0 = (function (){
var statearr_32115 = [null,null,null,null,null,null,null,null,null];
(statearr_32115[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27757__auto__);

(statearr_32115[(1)] = (1));

return statearr_32115;
});
var figwheel$client$heads_up_plugin_$_state_machine__27757__auto____1 = (function (state_32105){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_32105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e32116){if((e32116 instanceof Object)){
var ex__27760__auto__ = e32116;
var statearr_32117_32126 = state_32105;
(statearr_32117_32126[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32127 = state_32105;
state_32105 = G__32127;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27757__auto__ = function(state_32105){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27757__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27757__auto____1.call(this,state_32105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27757__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27757__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_32118 = f__27852__auto__.call(null);
(statearr_32118[(6)] = c__27851__auto___32119);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_32133){
var state_val_32134 = (state_32133[(1)]);
if((state_val_32134 === (1))){
var inst_32128 = cljs.core.async.timeout.call(null,(3000));
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32133__$1,(2),inst_32128);
} else {
if((state_val_32134 === (2))){
var inst_32130 = (state_32133[(2)]);
var inst_32131 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32133__$1 = (function (){var statearr_32135 = state_32133;
(statearr_32135[(7)] = inst_32130);

return statearr_32135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32133__$1,inst_32131);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27757__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27757__auto____0 = (function (){
var statearr_32136 = [null,null,null,null,null,null,null,null];
(statearr_32136[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27757__auto__);

(statearr_32136[(1)] = (1));

return statearr_32136;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27757__auto____1 = (function (state_32133){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_32133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e32137){if((e32137 instanceof Object)){
var ex__27760__auto__ = e32137;
var statearr_32138_32140 = state_32133;
(statearr_32138_32140[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32141 = state_32133;
state_32133 = G__32141;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27757__auto__ = function(state_32133){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27757__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27757__auto____1.call(this,state_32133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27757__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27757__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_32139 = f__27852__auto__.call(null);
(statearr_32139[(6)] = c__27851__auto__);

return statearr_32139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (1))){
var inst_32142 = cljs.core.async.timeout.call(null,(2000));
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32148__$1,(2),inst_32142);
} else {
if((state_val_32149 === (2))){
var inst_32144 = (state_32148[(2)]);
var inst_32145 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32146 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32145);
var state_32148__$1 = (function (){var statearr_32150 = state_32148;
(statearr_32150[(7)] = inst_32144);

return statearr_32150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32148__$1,inst_32146);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto____0 = (function (){
var statearr_32151 = [null,null,null,null,null,null,null,null];
(statearr_32151[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto__);

(statearr_32151[(1)] = (1));

return statearr_32151;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto____1 = (function (state_32148){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_32148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e32152){if((e32152 instanceof Object)){
var ex__27760__auto__ = e32152;
var statearr_32153_32155 = state_32148;
(statearr_32153_32155[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32156 = state_32148;
state_32148 = G__32156;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_32154 = f__27852__auto__.call(null);
(statearr_32154[(6)] = c__27851__auto__);

return statearr_32154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32157){
var map__32158 = p__32157;
var map__32158__$1 = (((((!((map__32158 == null))))?(((((map__32158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32158):map__32158);
var file = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32160 = "";
var G__32160__$1 = (cljs.core.truth_(file)?[G__32160,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32160);
var G__32160__$2 = (cljs.core.truth_(line)?[G__32160__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32160__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__32160__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32160__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32161){
var map__32162 = p__32161;
var map__32162__$1 = (((((!((map__32162 == null))))?(((((map__32162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32162):map__32162);
var ed = map__32162__$1;
var exception_data = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32165 = (function (){var G__32164 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32164)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32164;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32165);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32166){
var map__32167 = p__32166;
var map__32167__$1 = (((((!((map__32167 == null))))?(((((map__32167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32167):map__32167);
var w = map__32167__$1;
var message = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32169 = cljs.core.seq.call(null,plugins);
var chunk__32170 = null;
var count__32171 = (0);
var i__32172 = (0);
while(true){
if((i__32172 < count__32171)){
var vec__32179 = cljs.core._nth.call(null,chunk__32170,i__32172);
var k = cljs.core.nth.call(null,vec__32179,(0),null);
var plugin = cljs.core.nth.call(null,vec__32179,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32185 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32169,chunk__32170,count__32171,i__32172,pl_32185,vec__32179,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32185.call(null,msg_hist);
});})(seq__32169,chunk__32170,count__32171,i__32172,pl_32185,vec__32179,k,plugin))
);
} else {
}


var G__32186 = seq__32169;
var G__32187 = chunk__32170;
var G__32188 = count__32171;
var G__32189 = (i__32172 + (1));
seq__32169 = G__32186;
chunk__32170 = G__32187;
count__32171 = G__32188;
i__32172 = G__32189;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32169);
if(temp__5735__auto__){
var seq__32169__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32169__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32169__$1);
var G__32190 = cljs.core.chunk_rest.call(null,seq__32169__$1);
var G__32191 = c__4556__auto__;
var G__32192 = cljs.core.count.call(null,c__4556__auto__);
var G__32193 = (0);
seq__32169 = G__32190;
chunk__32170 = G__32191;
count__32171 = G__32192;
i__32172 = G__32193;
continue;
} else {
var vec__32182 = cljs.core.first.call(null,seq__32169__$1);
var k = cljs.core.nth.call(null,vec__32182,(0),null);
var plugin = cljs.core.nth.call(null,vec__32182,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32194 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32169,chunk__32170,count__32171,i__32172,pl_32194,vec__32182,k,plugin,seq__32169__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32194.call(null,msg_hist);
});})(seq__32169,chunk__32170,count__32171,i__32172,pl_32194,vec__32182,k,plugin,seq__32169__$1,temp__5735__auto__))
);
} else {
}


var G__32195 = cljs.core.next.call(null,seq__32169__$1);
var G__32196 = null;
var G__32197 = (0);
var G__32198 = (0);
seq__32169 = G__32195;
chunk__32170 = G__32196;
count__32171 = G__32197;
i__32172 = G__32198;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32200 = arguments.length;
switch (G__32200) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32201_32206 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32202_32207 = null;
var count__32203_32208 = (0);
var i__32204_32209 = (0);
while(true){
if((i__32204_32209 < count__32203_32208)){
var msg_32210 = cljs.core._nth.call(null,chunk__32202_32207,i__32204_32209);
figwheel.client.socket.handle_incoming_message.call(null,msg_32210);


var G__32211 = seq__32201_32206;
var G__32212 = chunk__32202_32207;
var G__32213 = count__32203_32208;
var G__32214 = (i__32204_32209 + (1));
seq__32201_32206 = G__32211;
chunk__32202_32207 = G__32212;
count__32203_32208 = G__32213;
i__32204_32209 = G__32214;
continue;
} else {
var temp__5735__auto___32215 = cljs.core.seq.call(null,seq__32201_32206);
if(temp__5735__auto___32215){
var seq__32201_32216__$1 = temp__5735__auto___32215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32201_32216__$1)){
var c__4556__auto___32217 = cljs.core.chunk_first.call(null,seq__32201_32216__$1);
var G__32218 = cljs.core.chunk_rest.call(null,seq__32201_32216__$1);
var G__32219 = c__4556__auto___32217;
var G__32220 = cljs.core.count.call(null,c__4556__auto___32217);
var G__32221 = (0);
seq__32201_32206 = G__32218;
chunk__32202_32207 = G__32219;
count__32203_32208 = G__32220;
i__32204_32209 = G__32221;
continue;
} else {
var msg_32222 = cljs.core.first.call(null,seq__32201_32216__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32222);


var G__32223 = cljs.core.next.call(null,seq__32201_32216__$1);
var G__32224 = null;
var G__32225 = (0);
var G__32226 = (0);
seq__32201_32206 = G__32223;
chunk__32202_32207 = G__32224;
count__32203_32208 = G__32225;
i__32204_32209 = G__32226;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32231 = arguments.length;
var i__4737__auto___32232 = (0);
while(true){
if((i__4737__auto___32232 < len__4736__auto___32231)){
args__4742__auto__.push((arguments[i__4737__auto___32232]));

var G__32233 = (i__4737__auto___32232 + (1));
i__4737__auto___32232 = G__32233;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32228){
var map__32229 = p__32228;
var map__32229__$1 = (((((!((map__32229 == null))))?(((((map__32229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32229):map__32229);
var opts = map__32229__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32227){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32227));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32234){if((e32234 instanceof Error)){
var e = e32234;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32234;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__32235){
var map__32236 = p__32235;
var map__32236__$1 = (((((!((map__32236 == null))))?(((((map__32236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);
var msg_name = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1643864560821
