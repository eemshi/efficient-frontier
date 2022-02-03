// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27911 = arguments.length;
switch (G__27911) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27912 = (function (f,blockable,meta27913){
this.f = f;
this.blockable = blockable;
this.meta27913 = meta27913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27914,meta27913__$1){
var self__ = this;
var _27914__$1 = this;
return (new cljs.core.async.t_cljs$core$async27912(self__.f,self__.blockable,meta27913__$1));
}));

(cljs.core.async.t_cljs$core$async27912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27914){
var self__ = this;
var _27914__$1 = this;
return self__.meta27913;
}));

(cljs.core.async.t_cljs$core$async27912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27913","meta27913",1911756195,null)], null);
}));

(cljs.core.async.t_cljs$core$async27912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27912");

(cljs.core.async.t_cljs$core$async27912.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27912.
 */
cljs.core.async.__GT_t_cljs$core$async27912 = (function cljs$core$async$__GT_t_cljs$core$async27912(f__$1,blockable__$1,meta27913){
return (new cljs.core.async.t_cljs$core$async27912(f__$1,blockable__$1,meta27913));
});

}

return (new cljs.core.async.t_cljs$core$async27912(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27918 = arguments.length;
switch (G__27918) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27921 = arguments.length;
switch (G__27921) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27924 = arguments.length;
switch (G__27924) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27926 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27926);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27926);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27928 = arguments.length;
switch (G__27928) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___27930 = n;
var x_27931 = (0);
while(true){
if((x_27931 < n__4613__auto___27930)){
(a[x_27931] = (0));

var G__27932 = (x_27931 + (1));
x_27931 = G__27932;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27933 = (i + (1));
i = G__27933;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27934 = (function (flag,meta27935){
this.flag = flag;
this.meta27935 = meta27935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27936,meta27935__$1){
var self__ = this;
var _27936__$1 = this;
return (new cljs.core.async.t_cljs$core$async27934(self__.flag,meta27935__$1));
}));

(cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27936){
var self__ = this;
var _27936__$1 = this;
return self__.meta27935;
}));

(cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27935","meta27935",-666518583,null)], null);
}));

(cljs.core.async.t_cljs$core$async27934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27934");

(cljs.core.async.t_cljs$core$async27934.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27934.
 */
cljs.core.async.__GT_t_cljs$core$async27934 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27934(flag__$1,meta27935){
return (new cljs.core.async.t_cljs$core$async27934(flag__$1,meta27935));
});

}

return (new cljs.core.async.t_cljs$core$async27934(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27937 = (function (flag,cb,meta27938){
this.flag = flag;
this.cb = cb;
this.meta27938 = meta27938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27939,meta27938__$1){
var self__ = this;
var _27939__$1 = this;
return (new cljs.core.async.t_cljs$core$async27937(self__.flag,self__.cb,meta27938__$1));
}));

(cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27939){
var self__ = this;
var _27939__$1 = this;
return self__.meta27938;
}));

(cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27938","meta27938",321588810,null)], null);
}));

(cljs.core.async.t_cljs$core$async27937.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27937");

(cljs.core.async.t_cljs$core$async27937.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27937");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27937.
 */
cljs.core.async.__GT_t_cljs$core$async27937 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27937(flag__$1,cb__$1,meta27938){
return (new cljs.core.async.t_cljs$core$async27937(flag__$1,cb__$1,meta27938));
});

}

return (new cljs.core.async.t_cljs$core$async27937(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27940_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27940_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27941_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27941_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27942 = (i + (1));
i = G__27942;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27948 = arguments.length;
var i__4737__auto___27949 = (0);
while(true){
if((i__4737__auto___27949 < len__4736__auto___27948)){
args__4742__auto__.push((arguments[i__4737__auto___27949]));

var G__27950 = (i__4737__auto___27949 + (1));
i__4737__auto___27949 = G__27950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27945){
var map__27946 = p__27945;
var map__27946__$1 = (((((!((map__27946 == null))))?(((((map__27946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27946):map__27946);
var opts = map__27946__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27943){
var G__27944 = cljs.core.first.call(null,seq27943);
var seq27943__$1 = cljs.core.next.call(null,seq27943);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27944,seq27943__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27952 = arguments.length;
switch (G__27952) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27851__auto___27998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_27976){
var state_val_27977 = (state_27976[(1)]);
if((state_val_27977 === (7))){
var inst_27972 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_27978_27999 = state_27976__$1;
(statearr_27978_27999[(2)] = inst_27972);

(statearr_27978_27999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (1))){
var state_27976__$1 = state_27976;
var statearr_27979_28000 = state_27976__$1;
(statearr_27979_28000[(2)] = null);

(statearr_27979_28000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (4))){
var inst_27955 = (state_27976[(7)]);
var inst_27955__$1 = (state_27976[(2)]);
var inst_27956 = (inst_27955__$1 == null);
var state_27976__$1 = (function (){var statearr_27980 = state_27976;
(statearr_27980[(7)] = inst_27955__$1);

return statearr_27980;
})();
if(cljs.core.truth_(inst_27956)){
var statearr_27981_28001 = state_27976__$1;
(statearr_27981_28001[(1)] = (5));

} else {
var statearr_27982_28002 = state_27976__$1;
(statearr_27982_28002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (13))){
var state_27976__$1 = state_27976;
var statearr_27983_28003 = state_27976__$1;
(statearr_27983_28003[(2)] = null);

(statearr_27983_28003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (6))){
var inst_27955 = (state_27976[(7)]);
var state_27976__$1 = state_27976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27976__$1,(11),to,inst_27955);
} else {
if((state_val_27977 === (3))){
var inst_27974 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27976__$1,inst_27974);
} else {
if((state_val_27977 === (12))){
var state_27976__$1 = state_27976;
var statearr_27984_28004 = state_27976__$1;
(statearr_27984_28004[(2)] = null);

(statearr_27984_28004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (2))){
var state_27976__$1 = state_27976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27976__$1,(4),from);
} else {
if((state_val_27977 === (11))){
var inst_27965 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
if(cljs.core.truth_(inst_27965)){
var statearr_27985_28005 = state_27976__$1;
(statearr_27985_28005[(1)] = (12));

} else {
var statearr_27986_28006 = state_27976__$1;
(statearr_27986_28006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (9))){
var state_27976__$1 = state_27976;
var statearr_27987_28007 = state_27976__$1;
(statearr_27987_28007[(2)] = null);

(statearr_27987_28007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (5))){
var state_27976__$1 = state_27976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27988_28008 = state_27976__$1;
(statearr_27988_28008[(1)] = (8));

} else {
var statearr_27989_28009 = state_27976__$1;
(statearr_27989_28009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (14))){
var inst_27970 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_27990_28010 = state_27976__$1;
(statearr_27990_28010[(2)] = inst_27970);

(statearr_27990_28010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (10))){
var inst_27962 = (state_27976[(2)]);
var state_27976__$1 = state_27976;
var statearr_27991_28011 = state_27976__$1;
(statearr_27991_28011[(2)] = inst_27962);

(statearr_27991_28011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27977 === (8))){
var inst_27959 = cljs.core.async.close_BANG_.call(null,to);
var state_27976__$1 = state_27976;
var statearr_27992_28012 = state_27976__$1;
(statearr_27992_28012[(2)] = inst_27959);

(statearr_27992_28012[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_27993 = [null,null,null,null,null,null,null,null];
(statearr_27993[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_27993[(1)] = (1));

return statearr_27993;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_27976){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_27976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e27994){if((e27994 instanceof Object)){
var ex__27760__auto__ = e27994;
var statearr_27995_28013 = state_27976;
(statearr_27995_28013[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28014 = state_27976;
state_27976 = G__28014;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_27976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_27976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_27996 = f__27852__auto__.call(null);
(statearr_27996[(6)] = c__27851__auto___27998);

return statearr_27996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__28015){
var vec__28016 = p__28015;
var v = cljs.core.nth.call(null,vec__28016,(0),null);
var p = cljs.core.nth.call(null,vec__28016,(1),null);
var job = vec__28016;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27851__auto___28187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28023){
var state_val_28024 = (state_28023[(1)]);
if((state_val_28024 === (1))){
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28023__$1,(2),res,v);
} else {
if((state_val_28024 === (2))){
var inst_28020 = (state_28023[(2)]);
var inst_28021 = cljs.core.async.close_BANG_.call(null,res);
var state_28023__$1 = (function (){var statearr_28025 = state_28023;
(statearr_28025[(7)] = inst_28020);

return statearr_28025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28023__$1,inst_28021);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0 = (function (){
var statearr_28026 = [null,null,null,null,null,null,null,null];
(statearr_28026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__);

(statearr_28026[(1)] = (1));

return statearr_28026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1 = (function (state_28023){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28027){if((e28027 instanceof Object)){
var ex__27760__auto__ = e28027;
var statearr_28028_28188 = state_28023;
(statearr_28028_28188[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28189 = state_28023;
state_28023 = G__28189;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = function(state_28023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1.call(this,state_28023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28029 = f__27852__auto__.call(null);
(statearr_28029[(6)] = c__27851__auto___28187);

return statearr_28029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__28030){
var vec__28031 = p__28030;
var v = cljs.core.nth.call(null,vec__28031,(0),null);
var p = cljs.core.nth.call(null,vec__28031,(1),null);
var job = vec__28031;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___28190 = n;
var __28191 = (0);
while(true){
if((__28191 < n__4613__auto___28190)){
var G__28034_28192 = type;
var G__28034_28193__$1 = (((G__28034_28192 instanceof cljs.core.Keyword))?G__28034_28192.fqn:null);
switch (G__28034_28193__$1) {
case "compute":
var c__27851__auto___28195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28191,c__27851__auto___28195,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async){
return (function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = ((function (__28191,c__27851__auto___28195,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async){
return (function (state_28047){
var state_val_28048 = (state_28047[(1)]);
if((state_val_28048 === (1))){
var state_28047__$1 = state_28047;
var statearr_28049_28196 = state_28047__$1;
(statearr_28049_28196[(2)] = null);

(statearr_28049_28196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (2))){
var state_28047__$1 = state_28047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28047__$1,(4),jobs);
} else {
if((state_val_28048 === (3))){
var inst_28045 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28047__$1,inst_28045);
} else {
if((state_val_28048 === (4))){
var inst_28037 = (state_28047[(2)]);
var inst_28038 = process.call(null,inst_28037);
var state_28047__$1 = state_28047;
if(cljs.core.truth_(inst_28038)){
var statearr_28050_28197 = state_28047__$1;
(statearr_28050_28197[(1)] = (5));

} else {
var statearr_28051_28198 = state_28047__$1;
(statearr_28051_28198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (5))){
var state_28047__$1 = state_28047;
var statearr_28052_28199 = state_28047__$1;
(statearr_28052_28199[(2)] = null);

(statearr_28052_28199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (6))){
var state_28047__$1 = state_28047;
var statearr_28053_28200 = state_28047__$1;
(statearr_28053_28200[(2)] = null);

(statearr_28053_28200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (7))){
var inst_28043 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
var statearr_28054_28201 = state_28047__$1;
(statearr_28054_28201[(2)] = inst_28043);

(statearr_28054_28201[(1)] = (3));


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
});})(__28191,c__27851__auto___28195,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async))
;
return ((function (__28191,switch__27756__auto__,c__27851__auto___28195,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0 = (function (){
var statearr_28055 = [null,null,null,null,null,null,null];
(statearr_28055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__);

(statearr_28055[(1)] = (1));

return statearr_28055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1 = (function (state_28047){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28056){if((e28056 instanceof Object)){
var ex__27760__auto__ = e28056;
var statearr_28057_28202 = state_28047;
(statearr_28057_28202[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28203 = state_28047;
state_28047 = G__28203;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = function(state_28047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1.call(this,state_28047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__;
})()
;})(__28191,switch__27756__auto__,c__27851__auto___28195,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async))
})();
var state__27853__auto__ = (function (){var statearr_28058 = f__27852__auto__.call(null);
(statearr_28058[(6)] = c__27851__auto___28195);

return statearr_28058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
});})(__28191,c__27851__auto___28195,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async))
);


break;
case "async":
var c__27851__auto___28204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28191,c__27851__auto___28204,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async){
return (function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = ((function (__28191,c__27851__auto___28204,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async){
return (function (state_28071){
var state_val_28072 = (state_28071[(1)]);
if((state_val_28072 === (1))){
var state_28071__$1 = state_28071;
var statearr_28073_28205 = state_28071__$1;
(statearr_28073_28205[(2)] = null);

(statearr_28073_28205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (2))){
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28071__$1,(4),jobs);
} else {
if((state_val_28072 === (3))){
var inst_28069 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28071__$1,inst_28069);
} else {
if((state_val_28072 === (4))){
var inst_28061 = (state_28071[(2)]);
var inst_28062 = async.call(null,inst_28061);
var state_28071__$1 = state_28071;
if(cljs.core.truth_(inst_28062)){
var statearr_28074_28206 = state_28071__$1;
(statearr_28074_28206[(1)] = (5));

} else {
var statearr_28075_28207 = state_28071__$1;
(statearr_28075_28207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (5))){
var state_28071__$1 = state_28071;
var statearr_28076_28208 = state_28071__$1;
(statearr_28076_28208[(2)] = null);

(statearr_28076_28208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (6))){
var state_28071__$1 = state_28071;
var statearr_28077_28209 = state_28071__$1;
(statearr_28077_28209[(2)] = null);

(statearr_28077_28209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28072 === (7))){
var inst_28067 = (state_28071[(2)]);
var state_28071__$1 = state_28071;
var statearr_28078_28210 = state_28071__$1;
(statearr_28078_28210[(2)] = inst_28067);

(statearr_28078_28210[(1)] = (3));


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
});})(__28191,c__27851__auto___28204,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async))
;
return ((function (__28191,switch__27756__auto__,c__27851__auto___28204,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0 = (function (){
var statearr_28079 = [null,null,null,null,null,null,null];
(statearr_28079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__);

(statearr_28079[(1)] = (1));

return statearr_28079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1 = (function (state_28071){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28080){if((e28080 instanceof Object)){
var ex__27760__auto__ = e28080;
var statearr_28081_28211 = state_28071;
(statearr_28081_28211[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28212 = state_28071;
state_28071 = G__28212;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = function(state_28071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1.call(this,state_28071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__;
})()
;})(__28191,switch__27756__auto__,c__27851__auto___28204,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async))
})();
var state__27853__auto__ = (function (){var statearr_28082 = f__27852__auto__.call(null);
(statearr_28082[(6)] = c__27851__auto___28204);

return statearr_28082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
});})(__28191,c__27851__auto___28204,G__28034_28192,G__28034_28193__$1,n__4613__auto___28190,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28034_28193__$1)].join('')));

}

var G__28213 = (__28191 + (1));
__28191 = G__28213;
continue;
} else {
}
break;
}

var c__27851__auto___28214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28104){
var state_val_28105 = (state_28104[(1)]);
if((state_val_28105 === (7))){
var inst_28100 = (state_28104[(2)]);
var state_28104__$1 = state_28104;
var statearr_28106_28215 = state_28104__$1;
(statearr_28106_28215[(2)] = inst_28100);

(statearr_28106_28215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (1))){
var state_28104__$1 = state_28104;
var statearr_28107_28216 = state_28104__$1;
(statearr_28107_28216[(2)] = null);

(statearr_28107_28216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (4))){
var inst_28085 = (state_28104[(7)]);
var inst_28085__$1 = (state_28104[(2)]);
var inst_28086 = (inst_28085__$1 == null);
var state_28104__$1 = (function (){var statearr_28108 = state_28104;
(statearr_28108[(7)] = inst_28085__$1);

return statearr_28108;
})();
if(cljs.core.truth_(inst_28086)){
var statearr_28109_28217 = state_28104__$1;
(statearr_28109_28217[(1)] = (5));

} else {
var statearr_28110_28218 = state_28104__$1;
(statearr_28110_28218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (6))){
var inst_28090 = (state_28104[(8)]);
var inst_28085 = (state_28104[(7)]);
var inst_28090__$1 = cljs.core.async.chan.call(null,(1));
var inst_28091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28092 = [inst_28085,inst_28090__$1];
var inst_28093 = (new cljs.core.PersistentVector(null,2,(5),inst_28091,inst_28092,null));
var state_28104__$1 = (function (){var statearr_28111 = state_28104;
(statearr_28111[(8)] = inst_28090__$1);

return statearr_28111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28104__$1,(8),jobs,inst_28093);
} else {
if((state_val_28105 === (3))){
var inst_28102 = (state_28104[(2)]);
var state_28104__$1 = state_28104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28104__$1,inst_28102);
} else {
if((state_val_28105 === (2))){
var state_28104__$1 = state_28104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28104__$1,(4),from);
} else {
if((state_val_28105 === (9))){
var inst_28097 = (state_28104[(2)]);
var state_28104__$1 = (function (){var statearr_28112 = state_28104;
(statearr_28112[(9)] = inst_28097);

return statearr_28112;
})();
var statearr_28113_28219 = state_28104__$1;
(statearr_28113_28219[(2)] = null);

(statearr_28113_28219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (5))){
var inst_28088 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28104__$1 = state_28104;
var statearr_28114_28220 = state_28104__$1;
(statearr_28114_28220[(2)] = inst_28088);

(statearr_28114_28220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28105 === (8))){
var inst_28090 = (state_28104[(8)]);
var inst_28095 = (state_28104[(2)]);
var state_28104__$1 = (function (){var statearr_28115 = state_28104;
(statearr_28115[(10)] = inst_28095);

return statearr_28115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28104__$1,(9),results,inst_28090);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0 = (function (){
var statearr_28116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__);

(statearr_28116[(1)] = (1));

return statearr_28116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1 = (function (state_28104){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28117){if((e28117 instanceof Object)){
var ex__27760__auto__ = e28117;
var statearr_28118_28221 = state_28104;
(statearr_28118_28221[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28222 = state_28104;
state_28104 = G__28222;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = function(state_28104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1.call(this,state_28104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28119 = f__27852__auto__.call(null);
(statearr_28119[(6)] = c__27851__auto___28214);

return statearr_28119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28157){
var state_val_28158 = (state_28157[(1)]);
if((state_val_28158 === (7))){
var inst_28153 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28159_28223 = state_28157__$1;
(statearr_28159_28223[(2)] = inst_28153);

(statearr_28159_28223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (20))){
var state_28157__$1 = state_28157;
var statearr_28160_28224 = state_28157__$1;
(statearr_28160_28224[(2)] = null);

(statearr_28160_28224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (1))){
var state_28157__$1 = state_28157;
var statearr_28161_28225 = state_28157__$1;
(statearr_28161_28225[(2)] = null);

(statearr_28161_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (4))){
var inst_28122 = (state_28157[(7)]);
var inst_28122__$1 = (state_28157[(2)]);
var inst_28123 = (inst_28122__$1 == null);
var state_28157__$1 = (function (){var statearr_28162 = state_28157;
(statearr_28162[(7)] = inst_28122__$1);

return statearr_28162;
})();
if(cljs.core.truth_(inst_28123)){
var statearr_28163_28226 = state_28157__$1;
(statearr_28163_28226[(1)] = (5));

} else {
var statearr_28164_28227 = state_28157__$1;
(statearr_28164_28227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (15))){
var inst_28135 = (state_28157[(8)]);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28157__$1,(18),to,inst_28135);
} else {
if((state_val_28158 === (21))){
var inst_28148 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28165_28228 = state_28157__$1;
(statearr_28165_28228[(2)] = inst_28148);

(statearr_28165_28228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (13))){
var inst_28150 = (state_28157[(2)]);
var state_28157__$1 = (function (){var statearr_28166 = state_28157;
(statearr_28166[(9)] = inst_28150);

return statearr_28166;
})();
var statearr_28167_28229 = state_28157__$1;
(statearr_28167_28229[(2)] = null);

(statearr_28167_28229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (6))){
var inst_28122 = (state_28157[(7)]);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28157__$1,(11),inst_28122);
} else {
if((state_val_28158 === (17))){
var inst_28143 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
if(cljs.core.truth_(inst_28143)){
var statearr_28168_28230 = state_28157__$1;
(statearr_28168_28230[(1)] = (19));

} else {
var statearr_28169_28231 = state_28157__$1;
(statearr_28169_28231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (3))){
var inst_28155 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28157__$1,inst_28155);
} else {
if((state_val_28158 === (12))){
var inst_28132 = (state_28157[(10)]);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28157__$1,(14),inst_28132);
} else {
if((state_val_28158 === (2))){
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28157__$1,(4),results);
} else {
if((state_val_28158 === (19))){
var state_28157__$1 = state_28157;
var statearr_28170_28232 = state_28157__$1;
(statearr_28170_28232[(2)] = null);

(statearr_28170_28232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (11))){
var inst_28132 = (state_28157[(2)]);
var state_28157__$1 = (function (){var statearr_28171 = state_28157;
(statearr_28171[(10)] = inst_28132);

return statearr_28171;
})();
var statearr_28172_28233 = state_28157__$1;
(statearr_28172_28233[(2)] = null);

(statearr_28172_28233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (9))){
var state_28157__$1 = state_28157;
var statearr_28173_28234 = state_28157__$1;
(statearr_28173_28234[(2)] = null);

(statearr_28173_28234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (5))){
var state_28157__$1 = state_28157;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28174_28235 = state_28157__$1;
(statearr_28174_28235[(1)] = (8));

} else {
var statearr_28175_28236 = state_28157__$1;
(statearr_28175_28236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (14))){
var inst_28135 = (state_28157[(8)]);
var inst_28135__$1 = (state_28157[(2)]);
var inst_28136 = (inst_28135__$1 == null);
var inst_28137 = cljs.core.not.call(null,inst_28136);
var state_28157__$1 = (function (){var statearr_28176 = state_28157;
(statearr_28176[(8)] = inst_28135__$1);

return statearr_28176;
})();
if(inst_28137){
var statearr_28177_28237 = state_28157__$1;
(statearr_28177_28237[(1)] = (15));

} else {
var statearr_28178_28238 = state_28157__$1;
(statearr_28178_28238[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (16))){
var state_28157__$1 = state_28157;
var statearr_28179_28239 = state_28157__$1;
(statearr_28179_28239[(2)] = false);

(statearr_28179_28239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (10))){
var inst_28129 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28180_28240 = state_28157__$1;
(statearr_28180_28240[(2)] = inst_28129);

(statearr_28180_28240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (18))){
var inst_28140 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28181_28241 = state_28157__$1;
(statearr_28181_28241[(2)] = inst_28140);

(statearr_28181_28241[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (8))){
var inst_28126 = cljs.core.async.close_BANG_.call(null,to);
var state_28157__$1 = state_28157;
var statearr_28182_28242 = state_28157__$1;
(statearr_28182_28242[(2)] = inst_28126);

(statearr_28182_28242[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0 = (function (){
var statearr_28183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__);

(statearr_28183[(1)] = (1));

return statearr_28183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1 = (function (state_28157){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28184){if((e28184 instanceof Object)){
var ex__27760__auto__ = e28184;
var statearr_28185_28243 = state_28157;
(statearr_28185_28243[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28244 = state_28157;
state_28157 = G__28244;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__ = function(state_28157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1.call(this,state_28157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27757__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28186 = f__27852__auto__.call(null);
(statearr_28186[(6)] = c__27851__auto__);

return statearr_28186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28246 = arguments.length;
switch (G__28246) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28249 = arguments.length;
switch (G__28249) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28252 = arguments.length;
switch (G__28252) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27851__auto___28301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28278){
var state_val_28279 = (state_28278[(1)]);
if((state_val_28279 === (7))){
var inst_28274 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
var statearr_28280_28302 = state_28278__$1;
(statearr_28280_28302[(2)] = inst_28274);

(statearr_28280_28302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (1))){
var state_28278__$1 = state_28278;
var statearr_28281_28303 = state_28278__$1;
(statearr_28281_28303[(2)] = null);

(statearr_28281_28303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (4))){
var inst_28255 = (state_28278[(7)]);
var inst_28255__$1 = (state_28278[(2)]);
var inst_28256 = (inst_28255__$1 == null);
var state_28278__$1 = (function (){var statearr_28282 = state_28278;
(statearr_28282[(7)] = inst_28255__$1);

return statearr_28282;
})();
if(cljs.core.truth_(inst_28256)){
var statearr_28283_28304 = state_28278__$1;
(statearr_28283_28304[(1)] = (5));

} else {
var statearr_28284_28305 = state_28278__$1;
(statearr_28284_28305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (13))){
var state_28278__$1 = state_28278;
var statearr_28285_28306 = state_28278__$1;
(statearr_28285_28306[(2)] = null);

(statearr_28285_28306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (6))){
var inst_28255 = (state_28278[(7)]);
var inst_28261 = p.call(null,inst_28255);
var state_28278__$1 = state_28278;
if(cljs.core.truth_(inst_28261)){
var statearr_28286_28307 = state_28278__$1;
(statearr_28286_28307[(1)] = (9));

} else {
var statearr_28287_28308 = state_28278__$1;
(statearr_28287_28308[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (3))){
var inst_28276 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28278__$1,inst_28276);
} else {
if((state_val_28279 === (12))){
var state_28278__$1 = state_28278;
var statearr_28288_28309 = state_28278__$1;
(statearr_28288_28309[(2)] = null);

(statearr_28288_28309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (2))){
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28278__$1,(4),ch);
} else {
if((state_val_28279 === (11))){
var inst_28255 = (state_28278[(7)]);
var inst_28265 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28278__$1,(8),inst_28265,inst_28255);
} else {
if((state_val_28279 === (9))){
var state_28278__$1 = state_28278;
var statearr_28289_28310 = state_28278__$1;
(statearr_28289_28310[(2)] = tc);

(statearr_28289_28310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (5))){
var inst_28258 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28259 = cljs.core.async.close_BANG_.call(null,fc);
var state_28278__$1 = (function (){var statearr_28290 = state_28278;
(statearr_28290[(8)] = inst_28258);

return statearr_28290;
})();
var statearr_28291_28311 = state_28278__$1;
(statearr_28291_28311[(2)] = inst_28259);

(statearr_28291_28311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (14))){
var inst_28272 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
var statearr_28292_28312 = state_28278__$1;
(statearr_28292_28312[(2)] = inst_28272);

(statearr_28292_28312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (10))){
var state_28278__$1 = state_28278;
var statearr_28293_28313 = state_28278__$1;
(statearr_28293_28313[(2)] = fc);

(statearr_28293_28313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28279 === (8))){
var inst_28267 = (state_28278[(2)]);
var state_28278__$1 = state_28278;
if(cljs.core.truth_(inst_28267)){
var statearr_28294_28314 = state_28278__$1;
(statearr_28294_28314[(1)] = (12));

} else {
var statearr_28295_28315 = state_28278__$1;
(statearr_28295_28315[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_28296 = [null,null,null,null,null,null,null,null,null];
(statearr_28296[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_28296[(1)] = (1));

return statearr_28296;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_28278){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28297){if((e28297 instanceof Object)){
var ex__27760__auto__ = e28297;
var statearr_28298_28316 = state_28278;
(statearr_28298_28316[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28317 = state_28278;
state_28278 = G__28317;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_28278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_28278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28299 = f__27852__auto__.call(null);
(statearr_28299[(6)] = c__27851__auto___28301);

return statearr_28299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28338){
var state_val_28339 = (state_28338[(1)]);
if((state_val_28339 === (7))){
var inst_28334 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
var statearr_28340_28358 = state_28338__$1;
(statearr_28340_28358[(2)] = inst_28334);

(statearr_28340_28358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (1))){
var inst_28318 = init;
var state_28338__$1 = (function (){var statearr_28341 = state_28338;
(statearr_28341[(7)] = inst_28318);

return statearr_28341;
})();
var statearr_28342_28359 = state_28338__$1;
(statearr_28342_28359[(2)] = null);

(statearr_28342_28359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (4))){
var inst_28321 = (state_28338[(8)]);
var inst_28321__$1 = (state_28338[(2)]);
var inst_28322 = (inst_28321__$1 == null);
var state_28338__$1 = (function (){var statearr_28343 = state_28338;
(statearr_28343[(8)] = inst_28321__$1);

return statearr_28343;
})();
if(cljs.core.truth_(inst_28322)){
var statearr_28344_28360 = state_28338__$1;
(statearr_28344_28360[(1)] = (5));

} else {
var statearr_28345_28361 = state_28338__$1;
(statearr_28345_28361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (6))){
var inst_28318 = (state_28338[(7)]);
var inst_28321 = (state_28338[(8)]);
var inst_28325 = (state_28338[(9)]);
var inst_28325__$1 = f.call(null,inst_28318,inst_28321);
var inst_28326 = cljs.core.reduced_QMARK_.call(null,inst_28325__$1);
var state_28338__$1 = (function (){var statearr_28346 = state_28338;
(statearr_28346[(9)] = inst_28325__$1);

return statearr_28346;
})();
if(inst_28326){
var statearr_28347_28362 = state_28338__$1;
(statearr_28347_28362[(1)] = (8));

} else {
var statearr_28348_28363 = state_28338__$1;
(statearr_28348_28363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (3))){
var inst_28336 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28338__$1,inst_28336);
} else {
if((state_val_28339 === (2))){
var state_28338__$1 = state_28338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28338__$1,(4),ch);
} else {
if((state_val_28339 === (9))){
var inst_28325 = (state_28338[(9)]);
var inst_28318 = inst_28325;
var state_28338__$1 = (function (){var statearr_28349 = state_28338;
(statearr_28349[(7)] = inst_28318);

return statearr_28349;
})();
var statearr_28350_28364 = state_28338__$1;
(statearr_28350_28364[(2)] = null);

(statearr_28350_28364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (5))){
var inst_28318 = (state_28338[(7)]);
var state_28338__$1 = state_28338;
var statearr_28351_28365 = state_28338__$1;
(statearr_28351_28365[(2)] = inst_28318);

(statearr_28351_28365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (10))){
var inst_28332 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
var statearr_28352_28366 = state_28338__$1;
(statearr_28352_28366[(2)] = inst_28332);

(statearr_28352_28366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (8))){
var inst_28325 = (state_28338[(9)]);
var inst_28328 = cljs.core.deref.call(null,inst_28325);
var state_28338__$1 = state_28338;
var statearr_28353_28367 = state_28338__$1;
(statearr_28353_28367[(2)] = inst_28328);

(statearr_28353_28367[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27757__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27757__auto____0 = (function (){
var statearr_28354 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28354[(0)] = cljs$core$async$reduce_$_state_machine__27757__auto__);

(statearr_28354[(1)] = (1));

return statearr_28354;
});
var cljs$core$async$reduce_$_state_machine__27757__auto____1 = (function (state_28338){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28355){if((e28355 instanceof Object)){
var ex__27760__auto__ = e28355;
var statearr_28356_28368 = state_28338;
(statearr_28356_28368[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28369 = state_28338;
state_28338 = G__28369;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27757__auto__ = function(state_28338){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27757__auto____1.call(this,state_28338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27757__auto____0;
cljs$core$async$reduce_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27757__auto____1;
return cljs$core$async$reduce_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28357 = f__27852__auto__.call(null);
(statearr_28357[(6)] = c__27851__auto__);

return statearr_28357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28375){
var state_val_28376 = (state_28375[(1)]);
if((state_val_28376 === (1))){
var inst_28370 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(2),inst_28370);
} else {
if((state_val_28376 === (2))){
var inst_28372 = (state_28375[(2)]);
var inst_28373 = f__$1.call(null,inst_28372);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28375__$1,inst_28373);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27757__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27757__auto____0 = (function (){
var statearr_28377 = [null,null,null,null,null,null,null];
(statearr_28377[(0)] = cljs$core$async$transduce_$_state_machine__27757__auto__);

(statearr_28377[(1)] = (1));

return statearr_28377;
});
var cljs$core$async$transduce_$_state_machine__27757__auto____1 = (function (state_28375){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28378){if((e28378 instanceof Object)){
var ex__27760__auto__ = e28378;
var statearr_28379_28381 = state_28375;
(statearr_28379_28381[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28382 = state_28375;
state_28375 = G__28382;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27757__auto__ = function(state_28375){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27757__auto____1.call(this,state_28375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27757__auto____0;
cljs$core$async$transduce_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27757__auto____1;
return cljs$core$async$transduce_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28380 = f__27852__auto__.call(null);
(statearr_28380[(6)] = c__27851__auto__);

return statearr_28380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28384 = arguments.length;
switch (G__28384) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28409){
var state_val_28410 = (state_28409[(1)]);
if((state_val_28410 === (7))){
var inst_28391 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28411_28432 = state_28409__$1;
(statearr_28411_28432[(2)] = inst_28391);

(statearr_28411_28432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (1))){
var inst_28385 = cljs.core.seq.call(null,coll);
var inst_28386 = inst_28385;
var state_28409__$1 = (function (){var statearr_28412 = state_28409;
(statearr_28412[(7)] = inst_28386);

return statearr_28412;
})();
var statearr_28413_28433 = state_28409__$1;
(statearr_28413_28433[(2)] = null);

(statearr_28413_28433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (4))){
var inst_28386 = (state_28409[(7)]);
var inst_28389 = cljs.core.first.call(null,inst_28386);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28409__$1,(7),ch,inst_28389);
} else {
if((state_val_28410 === (13))){
var inst_28403 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28414_28434 = state_28409__$1;
(statearr_28414_28434[(2)] = inst_28403);

(statearr_28414_28434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (6))){
var inst_28394 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
if(cljs.core.truth_(inst_28394)){
var statearr_28415_28435 = state_28409__$1;
(statearr_28415_28435[(1)] = (8));

} else {
var statearr_28416_28436 = state_28409__$1;
(statearr_28416_28436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (3))){
var inst_28407 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28409__$1,inst_28407);
} else {
if((state_val_28410 === (12))){
var state_28409__$1 = state_28409;
var statearr_28417_28437 = state_28409__$1;
(statearr_28417_28437[(2)] = null);

(statearr_28417_28437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (2))){
var inst_28386 = (state_28409[(7)]);
var state_28409__$1 = state_28409;
if(cljs.core.truth_(inst_28386)){
var statearr_28418_28438 = state_28409__$1;
(statearr_28418_28438[(1)] = (4));

} else {
var statearr_28419_28439 = state_28409__$1;
(statearr_28419_28439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (11))){
var inst_28400 = cljs.core.async.close_BANG_.call(null,ch);
var state_28409__$1 = state_28409;
var statearr_28420_28440 = state_28409__$1;
(statearr_28420_28440[(2)] = inst_28400);

(statearr_28420_28440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (9))){
var state_28409__$1 = state_28409;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28421_28441 = state_28409__$1;
(statearr_28421_28441[(1)] = (11));

} else {
var statearr_28422_28442 = state_28409__$1;
(statearr_28422_28442[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (5))){
var inst_28386 = (state_28409[(7)]);
var state_28409__$1 = state_28409;
var statearr_28423_28443 = state_28409__$1;
(statearr_28423_28443[(2)] = inst_28386);

(statearr_28423_28443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (10))){
var inst_28405 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28424_28444 = state_28409__$1;
(statearr_28424_28444[(2)] = inst_28405);

(statearr_28424_28444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (8))){
var inst_28386 = (state_28409[(7)]);
var inst_28396 = cljs.core.next.call(null,inst_28386);
var inst_28386__$1 = inst_28396;
var state_28409__$1 = (function (){var statearr_28425 = state_28409;
(statearr_28425[(7)] = inst_28386__$1);

return statearr_28425;
})();
var statearr_28426_28445 = state_28409__$1;
(statearr_28426_28445[(2)] = null);

(statearr_28426_28445[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_28427 = [null,null,null,null,null,null,null,null];
(statearr_28427[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_28427[(1)] = (1));

return statearr_28427;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_28409){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28428){if((e28428 instanceof Object)){
var ex__27760__auto__ = e28428;
var statearr_28429_28446 = state_28409;
(statearr_28429_28446[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28447 = state_28409;
state_28409 = G__28447;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_28409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_28409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28430 = f__27852__auto__.call(null);
(statearr_28430[(6)] = c__27851__auto__);

return statearr_28430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_28448 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_28448.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28449 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_28449.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28450 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_28450.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28451 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_28451.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28452 = (function (ch,cs,meta28453){
this.ch = ch;
this.cs = cs;
this.meta28453 = meta28453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28454,meta28453__$1){
var self__ = this;
var _28454__$1 = this;
return (new cljs.core.async.t_cljs$core$async28452(self__.ch,self__.cs,meta28453__$1));
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28454){
var self__ = this;
var _28454__$1 = this;
return self__.meta28453;
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28452.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28453","meta28453",-1461276531,null)], null);
}));

(cljs.core.async.t_cljs$core$async28452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28452");

(cljs.core.async.t_cljs$core$async28452.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28452.
 */
cljs.core.async.__GT_t_cljs$core$async28452 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28452(ch__$1,cs__$1,meta28453){
return (new cljs.core.async.t_cljs$core$async28452(ch__$1,cs__$1,meta28453));
});

}

return (new cljs.core.async.t_cljs$core$async28452(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__27851__auto___28674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28589){
var state_val_28590 = (state_28589[(1)]);
if((state_val_28590 === (7))){
var inst_28585 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28591_28675 = state_28589__$1;
(statearr_28591_28675[(2)] = inst_28585);

(statearr_28591_28675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (20))){
var inst_28488 = (state_28589[(7)]);
var inst_28500 = cljs.core.first.call(null,inst_28488);
var inst_28501 = cljs.core.nth.call(null,inst_28500,(0),null);
var inst_28502 = cljs.core.nth.call(null,inst_28500,(1),null);
var state_28589__$1 = (function (){var statearr_28592 = state_28589;
(statearr_28592[(8)] = inst_28501);

return statearr_28592;
})();
if(cljs.core.truth_(inst_28502)){
var statearr_28593_28676 = state_28589__$1;
(statearr_28593_28676[(1)] = (22));

} else {
var statearr_28594_28677 = state_28589__$1;
(statearr_28594_28677[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (27))){
var inst_28530 = (state_28589[(9)]);
var inst_28532 = (state_28589[(10)]);
var inst_28457 = (state_28589[(11)]);
var inst_28537 = (state_28589[(12)]);
var inst_28537__$1 = cljs.core._nth.call(null,inst_28530,inst_28532);
var inst_28538 = cljs.core.async.put_BANG_.call(null,inst_28537__$1,inst_28457,done);
var state_28589__$1 = (function (){var statearr_28595 = state_28589;
(statearr_28595[(12)] = inst_28537__$1);

return statearr_28595;
})();
if(cljs.core.truth_(inst_28538)){
var statearr_28596_28678 = state_28589__$1;
(statearr_28596_28678[(1)] = (30));

} else {
var statearr_28597_28679 = state_28589__$1;
(statearr_28597_28679[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (1))){
var state_28589__$1 = state_28589;
var statearr_28598_28680 = state_28589__$1;
(statearr_28598_28680[(2)] = null);

(statearr_28598_28680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (24))){
var inst_28488 = (state_28589[(7)]);
var inst_28507 = (state_28589[(2)]);
var inst_28508 = cljs.core.next.call(null,inst_28488);
var inst_28466 = inst_28508;
var inst_28467 = null;
var inst_28468 = (0);
var inst_28469 = (0);
var state_28589__$1 = (function (){var statearr_28599 = state_28589;
(statearr_28599[(13)] = inst_28507);

(statearr_28599[(14)] = inst_28467);

(statearr_28599[(15)] = inst_28469);

(statearr_28599[(16)] = inst_28468);

(statearr_28599[(17)] = inst_28466);

return statearr_28599;
})();
var statearr_28600_28681 = state_28589__$1;
(statearr_28600_28681[(2)] = null);

(statearr_28600_28681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (39))){
var state_28589__$1 = state_28589;
var statearr_28604_28682 = state_28589__$1;
(statearr_28604_28682[(2)] = null);

(statearr_28604_28682[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (4))){
var inst_28457 = (state_28589[(11)]);
var inst_28457__$1 = (state_28589[(2)]);
var inst_28458 = (inst_28457__$1 == null);
var state_28589__$1 = (function (){var statearr_28605 = state_28589;
(statearr_28605[(11)] = inst_28457__$1);

return statearr_28605;
})();
if(cljs.core.truth_(inst_28458)){
var statearr_28606_28683 = state_28589__$1;
(statearr_28606_28683[(1)] = (5));

} else {
var statearr_28607_28684 = state_28589__$1;
(statearr_28607_28684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (15))){
var inst_28467 = (state_28589[(14)]);
var inst_28469 = (state_28589[(15)]);
var inst_28468 = (state_28589[(16)]);
var inst_28466 = (state_28589[(17)]);
var inst_28484 = (state_28589[(2)]);
var inst_28485 = (inst_28469 + (1));
var tmp28601 = inst_28467;
var tmp28602 = inst_28468;
var tmp28603 = inst_28466;
var inst_28466__$1 = tmp28603;
var inst_28467__$1 = tmp28601;
var inst_28468__$1 = tmp28602;
var inst_28469__$1 = inst_28485;
var state_28589__$1 = (function (){var statearr_28608 = state_28589;
(statearr_28608[(14)] = inst_28467__$1);

(statearr_28608[(18)] = inst_28484);

(statearr_28608[(15)] = inst_28469__$1);

(statearr_28608[(16)] = inst_28468__$1);

(statearr_28608[(17)] = inst_28466__$1);

return statearr_28608;
})();
var statearr_28609_28685 = state_28589__$1;
(statearr_28609_28685[(2)] = null);

(statearr_28609_28685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (21))){
var inst_28511 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28613_28686 = state_28589__$1;
(statearr_28613_28686[(2)] = inst_28511);

(statearr_28613_28686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (31))){
var inst_28537 = (state_28589[(12)]);
var inst_28541 = done.call(null,null);
var inst_28542 = cljs.core.async.untap_STAR_.call(null,m,inst_28537);
var state_28589__$1 = (function (){var statearr_28614 = state_28589;
(statearr_28614[(19)] = inst_28541);

return statearr_28614;
})();
var statearr_28615_28687 = state_28589__$1;
(statearr_28615_28687[(2)] = inst_28542);

(statearr_28615_28687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (32))){
var inst_28529 = (state_28589[(20)]);
var inst_28530 = (state_28589[(9)]);
var inst_28532 = (state_28589[(10)]);
var inst_28531 = (state_28589[(21)]);
var inst_28544 = (state_28589[(2)]);
var inst_28545 = (inst_28532 + (1));
var tmp28610 = inst_28529;
var tmp28611 = inst_28530;
var tmp28612 = inst_28531;
var inst_28529__$1 = tmp28610;
var inst_28530__$1 = tmp28611;
var inst_28531__$1 = tmp28612;
var inst_28532__$1 = inst_28545;
var state_28589__$1 = (function (){var statearr_28616 = state_28589;
(statearr_28616[(20)] = inst_28529__$1);

(statearr_28616[(22)] = inst_28544);

(statearr_28616[(9)] = inst_28530__$1);

(statearr_28616[(10)] = inst_28532__$1);

(statearr_28616[(21)] = inst_28531__$1);

return statearr_28616;
})();
var statearr_28617_28688 = state_28589__$1;
(statearr_28617_28688[(2)] = null);

(statearr_28617_28688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (40))){
var inst_28557 = (state_28589[(23)]);
var inst_28561 = done.call(null,null);
var inst_28562 = cljs.core.async.untap_STAR_.call(null,m,inst_28557);
var state_28589__$1 = (function (){var statearr_28618 = state_28589;
(statearr_28618[(24)] = inst_28561);

return statearr_28618;
})();
var statearr_28619_28689 = state_28589__$1;
(statearr_28619_28689[(2)] = inst_28562);

(statearr_28619_28689[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (33))){
var inst_28548 = (state_28589[(25)]);
var inst_28550 = cljs.core.chunked_seq_QMARK_.call(null,inst_28548);
var state_28589__$1 = state_28589;
if(inst_28550){
var statearr_28620_28690 = state_28589__$1;
(statearr_28620_28690[(1)] = (36));

} else {
var statearr_28621_28691 = state_28589__$1;
(statearr_28621_28691[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (13))){
var inst_28478 = (state_28589[(26)]);
var inst_28481 = cljs.core.async.close_BANG_.call(null,inst_28478);
var state_28589__$1 = state_28589;
var statearr_28622_28692 = state_28589__$1;
(statearr_28622_28692[(2)] = inst_28481);

(statearr_28622_28692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (22))){
var inst_28501 = (state_28589[(8)]);
var inst_28504 = cljs.core.async.close_BANG_.call(null,inst_28501);
var state_28589__$1 = state_28589;
var statearr_28623_28693 = state_28589__$1;
(statearr_28623_28693[(2)] = inst_28504);

(statearr_28623_28693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (36))){
var inst_28548 = (state_28589[(25)]);
var inst_28552 = cljs.core.chunk_first.call(null,inst_28548);
var inst_28553 = cljs.core.chunk_rest.call(null,inst_28548);
var inst_28554 = cljs.core.count.call(null,inst_28552);
var inst_28529 = inst_28553;
var inst_28530 = inst_28552;
var inst_28531 = inst_28554;
var inst_28532 = (0);
var state_28589__$1 = (function (){var statearr_28624 = state_28589;
(statearr_28624[(20)] = inst_28529);

(statearr_28624[(9)] = inst_28530);

(statearr_28624[(10)] = inst_28532);

(statearr_28624[(21)] = inst_28531);

return statearr_28624;
})();
var statearr_28625_28694 = state_28589__$1;
(statearr_28625_28694[(2)] = null);

(statearr_28625_28694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (41))){
var inst_28548 = (state_28589[(25)]);
var inst_28564 = (state_28589[(2)]);
var inst_28565 = cljs.core.next.call(null,inst_28548);
var inst_28529 = inst_28565;
var inst_28530 = null;
var inst_28531 = (0);
var inst_28532 = (0);
var state_28589__$1 = (function (){var statearr_28626 = state_28589;
(statearr_28626[(27)] = inst_28564);

(statearr_28626[(20)] = inst_28529);

(statearr_28626[(9)] = inst_28530);

(statearr_28626[(10)] = inst_28532);

(statearr_28626[(21)] = inst_28531);

return statearr_28626;
})();
var statearr_28627_28695 = state_28589__$1;
(statearr_28627_28695[(2)] = null);

(statearr_28627_28695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (43))){
var state_28589__$1 = state_28589;
var statearr_28628_28696 = state_28589__$1;
(statearr_28628_28696[(2)] = null);

(statearr_28628_28696[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (29))){
var inst_28573 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28629_28697 = state_28589__$1;
(statearr_28629_28697[(2)] = inst_28573);

(statearr_28629_28697[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (44))){
var inst_28582 = (state_28589[(2)]);
var state_28589__$1 = (function (){var statearr_28630 = state_28589;
(statearr_28630[(28)] = inst_28582);

return statearr_28630;
})();
var statearr_28631_28698 = state_28589__$1;
(statearr_28631_28698[(2)] = null);

(statearr_28631_28698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (6))){
var inst_28521 = (state_28589[(29)]);
var inst_28520 = cljs.core.deref.call(null,cs);
var inst_28521__$1 = cljs.core.keys.call(null,inst_28520);
var inst_28522 = cljs.core.count.call(null,inst_28521__$1);
var inst_28523 = cljs.core.reset_BANG_.call(null,dctr,inst_28522);
var inst_28528 = cljs.core.seq.call(null,inst_28521__$1);
var inst_28529 = inst_28528;
var inst_28530 = null;
var inst_28531 = (0);
var inst_28532 = (0);
var state_28589__$1 = (function (){var statearr_28632 = state_28589;
(statearr_28632[(29)] = inst_28521__$1);

(statearr_28632[(20)] = inst_28529);

(statearr_28632[(9)] = inst_28530);

(statearr_28632[(10)] = inst_28532);

(statearr_28632[(21)] = inst_28531);

(statearr_28632[(30)] = inst_28523);

return statearr_28632;
})();
var statearr_28633_28699 = state_28589__$1;
(statearr_28633_28699[(2)] = null);

(statearr_28633_28699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (28))){
var inst_28529 = (state_28589[(20)]);
var inst_28548 = (state_28589[(25)]);
var inst_28548__$1 = cljs.core.seq.call(null,inst_28529);
var state_28589__$1 = (function (){var statearr_28634 = state_28589;
(statearr_28634[(25)] = inst_28548__$1);

return statearr_28634;
})();
if(inst_28548__$1){
var statearr_28635_28700 = state_28589__$1;
(statearr_28635_28700[(1)] = (33));

} else {
var statearr_28636_28701 = state_28589__$1;
(statearr_28636_28701[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (25))){
var inst_28532 = (state_28589[(10)]);
var inst_28531 = (state_28589[(21)]);
var inst_28534 = (inst_28532 < inst_28531);
var inst_28535 = inst_28534;
var state_28589__$1 = state_28589;
if(cljs.core.truth_(inst_28535)){
var statearr_28637_28702 = state_28589__$1;
(statearr_28637_28702[(1)] = (27));

} else {
var statearr_28638_28703 = state_28589__$1;
(statearr_28638_28703[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (34))){
var state_28589__$1 = state_28589;
var statearr_28639_28704 = state_28589__$1;
(statearr_28639_28704[(2)] = null);

(statearr_28639_28704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (17))){
var state_28589__$1 = state_28589;
var statearr_28640_28705 = state_28589__$1;
(statearr_28640_28705[(2)] = null);

(statearr_28640_28705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (3))){
var inst_28587 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28589__$1,inst_28587);
} else {
if((state_val_28590 === (12))){
var inst_28516 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28641_28706 = state_28589__$1;
(statearr_28641_28706[(2)] = inst_28516);

(statearr_28641_28706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (2))){
var state_28589__$1 = state_28589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28589__$1,(4),ch);
} else {
if((state_val_28590 === (23))){
var state_28589__$1 = state_28589;
var statearr_28642_28707 = state_28589__$1;
(statearr_28642_28707[(2)] = null);

(statearr_28642_28707[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (35))){
var inst_28571 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28643_28708 = state_28589__$1;
(statearr_28643_28708[(2)] = inst_28571);

(statearr_28643_28708[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (19))){
var inst_28488 = (state_28589[(7)]);
var inst_28492 = cljs.core.chunk_first.call(null,inst_28488);
var inst_28493 = cljs.core.chunk_rest.call(null,inst_28488);
var inst_28494 = cljs.core.count.call(null,inst_28492);
var inst_28466 = inst_28493;
var inst_28467 = inst_28492;
var inst_28468 = inst_28494;
var inst_28469 = (0);
var state_28589__$1 = (function (){var statearr_28644 = state_28589;
(statearr_28644[(14)] = inst_28467);

(statearr_28644[(15)] = inst_28469);

(statearr_28644[(16)] = inst_28468);

(statearr_28644[(17)] = inst_28466);

return statearr_28644;
})();
var statearr_28645_28709 = state_28589__$1;
(statearr_28645_28709[(2)] = null);

(statearr_28645_28709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (11))){
var inst_28488 = (state_28589[(7)]);
var inst_28466 = (state_28589[(17)]);
var inst_28488__$1 = cljs.core.seq.call(null,inst_28466);
var state_28589__$1 = (function (){var statearr_28646 = state_28589;
(statearr_28646[(7)] = inst_28488__$1);

return statearr_28646;
})();
if(inst_28488__$1){
var statearr_28647_28710 = state_28589__$1;
(statearr_28647_28710[(1)] = (16));

} else {
var statearr_28648_28711 = state_28589__$1;
(statearr_28648_28711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (9))){
var inst_28518 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28649_28712 = state_28589__$1;
(statearr_28649_28712[(2)] = inst_28518);

(statearr_28649_28712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (5))){
var inst_28464 = cljs.core.deref.call(null,cs);
var inst_28465 = cljs.core.seq.call(null,inst_28464);
var inst_28466 = inst_28465;
var inst_28467 = null;
var inst_28468 = (0);
var inst_28469 = (0);
var state_28589__$1 = (function (){var statearr_28650 = state_28589;
(statearr_28650[(14)] = inst_28467);

(statearr_28650[(15)] = inst_28469);

(statearr_28650[(16)] = inst_28468);

(statearr_28650[(17)] = inst_28466);

return statearr_28650;
})();
var statearr_28651_28713 = state_28589__$1;
(statearr_28651_28713[(2)] = null);

(statearr_28651_28713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (14))){
var state_28589__$1 = state_28589;
var statearr_28652_28714 = state_28589__$1;
(statearr_28652_28714[(2)] = null);

(statearr_28652_28714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (45))){
var inst_28579 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28653_28715 = state_28589__$1;
(statearr_28653_28715[(2)] = inst_28579);

(statearr_28653_28715[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (26))){
var inst_28521 = (state_28589[(29)]);
var inst_28575 = (state_28589[(2)]);
var inst_28576 = cljs.core.seq.call(null,inst_28521);
var state_28589__$1 = (function (){var statearr_28654 = state_28589;
(statearr_28654[(31)] = inst_28575);

return statearr_28654;
})();
if(inst_28576){
var statearr_28655_28716 = state_28589__$1;
(statearr_28655_28716[(1)] = (42));

} else {
var statearr_28656_28717 = state_28589__$1;
(statearr_28656_28717[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (16))){
var inst_28488 = (state_28589[(7)]);
var inst_28490 = cljs.core.chunked_seq_QMARK_.call(null,inst_28488);
var state_28589__$1 = state_28589;
if(inst_28490){
var statearr_28657_28718 = state_28589__$1;
(statearr_28657_28718[(1)] = (19));

} else {
var statearr_28658_28719 = state_28589__$1;
(statearr_28658_28719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (38))){
var inst_28568 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28659_28720 = state_28589__$1;
(statearr_28659_28720[(2)] = inst_28568);

(statearr_28659_28720[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (30))){
var state_28589__$1 = state_28589;
var statearr_28660_28721 = state_28589__$1;
(statearr_28660_28721[(2)] = null);

(statearr_28660_28721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (10))){
var inst_28467 = (state_28589[(14)]);
var inst_28469 = (state_28589[(15)]);
var inst_28477 = cljs.core._nth.call(null,inst_28467,inst_28469);
var inst_28478 = cljs.core.nth.call(null,inst_28477,(0),null);
var inst_28479 = cljs.core.nth.call(null,inst_28477,(1),null);
var state_28589__$1 = (function (){var statearr_28661 = state_28589;
(statearr_28661[(26)] = inst_28478);

return statearr_28661;
})();
if(cljs.core.truth_(inst_28479)){
var statearr_28662_28722 = state_28589__$1;
(statearr_28662_28722[(1)] = (13));

} else {
var statearr_28663_28723 = state_28589__$1;
(statearr_28663_28723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (18))){
var inst_28514 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28664_28724 = state_28589__$1;
(statearr_28664_28724[(2)] = inst_28514);

(statearr_28664_28724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (42))){
var state_28589__$1 = state_28589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28589__$1,(45),dchan);
} else {
if((state_val_28590 === (37))){
var inst_28548 = (state_28589[(25)]);
var inst_28457 = (state_28589[(11)]);
var inst_28557 = (state_28589[(23)]);
var inst_28557__$1 = cljs.core.first.call(null,inst_28548);
var inst_28558 = cljs.core.async.put_BANG_.call(null,inst_28557__$1,inst_28457,done);
var state_28589__$1 = (function (){var statearr_28665 = state_28589;
(statearr_28665[(23)] = inst_28557__$1);

return statearr_28665;
})();
if(cljs.core.truth_(inst_28558)){
var statearr_28666_28725 = state_28589__$1;
(statearr_28666_28725[(1)] = (39));

} else {
var statearr_28667_28726 = state_28589__$1;
(statearr_28667_28726[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (8))){
var inst_28469 = (state_28589[(15)]);
var inst_28468 = (state_28589[(16)]);
var inst_28471 = (inst_28469 < inst_28468);
var inst_28472 = inst_28471;
var state_28589__$1 = state_28589;
if(cljs.core.truth_(inst_28472)){
var statearr_28668_28727 = state_28589__$1;
(statearr_28668_28727[(1)] = (10));

} else {
var statearr_28669_28728 = state_28589__$1;
(statearr_28669_28728[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27757__auto__ = null;
var cljs$core$async$mult_$_state_machine__27757__auto____0 = (function (){
var statearr_28670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28670[(0)] = cljs$core$async$mult_$_state_machine__27757__auto__);

(statearr_28670[(1)] = (1));

return statearr_28670;
});
var cljs$core$async$mult_$_state_machine__27757__auto____1 = (function (state_28589){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28671){if((e28671 instanceof Object)){
var ex__27760__auto__ = e28671;
var statearr_28672_28729 = state_28589;
(statearr_28672_28729[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28730 = state_28589;
state_28589 = G__28730;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27757__auto__ = function(state_28589){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27757__auto____1.call(this,state_28589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27757__auto____0;
cljs$core$async$mult_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27757__auto____1;
return cljs$core$async$mult_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28673 = f__27852__auto__.call(null);
(statearr_28673[(6)] = c__27851__auto___28674);

return statearr_28673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28732 = arguments.length;
switch (G__28732) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_28734 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_28734.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28735 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_28735.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28736 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28736.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28737 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_28737.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28738 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28738.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28749 = arguments.length;
var i__4737__auto___28750 = (0);
while(true){
if((i__4737__auto___28750 < len__4736__auto___28749)){
args__4742__auto__.push((arguments[i__4737__auto___28750]));

var G__28751 = (i__4737__auto___28750 + (1));
i__4737__auto___28750 = G__28751;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28743){
var map__28744 = p__28743;
var map__28744__$1 = (((((!((map__28744 == null))))?(((((map__28744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28744):map__28744);
var opts = map__28744__$1;
var statearr_28746_28752 = state;
(statearr_28746_28752[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28747_28753 = state;
(statearr_28747_28753[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28748_28754 = state;
(statearr_28748_28754[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28739){
var G__28740 = cljs.core.first.call(null,seq28739);
var seq28739__$1 = cljs.core.next.call(null,seq28739);
var G__28741 = cljs.core.first.call(null,seq28739__$1);
var seq28739__$2 = cljs.core.next.call(null,seq28739__$1);
var G__28742 = cljs.core.first.call(null,seq28739__$2);
var seq28739__$3 = cljs.core.next.call(null,seq28739__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28740,G__28741,G__28742,seq28739__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28755 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28756){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28756 = meta28756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28757,meta28756__$1){
var self__ = this;
var _28757__$1 = this;
return (new cljs.core.async.t_cljs$core$async28755(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28756__$1));
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28757){
var self__ = this;
var _28757__$1 = this;
return self__.meta28756;
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28756","meta28756",830528522,null)], null);
}));

(cljs.core.async.t_cljs$core$async28755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28755");

(cljs.core.async.t_cljs$core$async28755.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28755.
 */
cljs.core.async.__GT_t_cljs$core$async28755 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28755(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28756){
return (new cljs.core.async.t_cljs$core$async28755(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28756));
});

}

return (new cljs.core.async.t_cljs$core$async28755(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27851__auto___28919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_28859){
var state_val_28860 = (state_28859[(1)]);
if((state_val_28860 === (7))){
var inst_28774 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28861_28920 = state_28859__$1;
(statearr_28861_28920[(2)] = inst_28774);

(statearr_28861_28920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (20))){
var inst_28786 = (state_28859[(7)]);
var state_28859__$1 = state_28859;
var statearr_28862_28921 = state_28859__$1;
(statearr_28862_28921[(2)] = inst_28786);

(statearr_28862_28921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (27))){
var state_28859__$1 = state_28859;
var statearr_28863_28922 = state_28859__$1;
(statearr_28863_28922[(2)] = null);

(statearr_28863_28922[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (1))){
var inst_28761 = (state_28859[(8)]);
var inst_28761__$1 = calc_state.call(null);
var inst_28763 = (inst_28761__$1 == null);
var inst_28764 = cljs.core.not.call(null,inst_28763);
var state_28859__$1 = (function (){var statearr_28864 = state_28859;
(statearr_28864[(8)] = inst_28761__$1);

return statearr_28864;
})();
if(inst_28764){
var statearr_28865_28923 = state_28859__$1;
(statearr_28865_28923[(1)] = (2));

} else {
var statearr_28866_28924 = state_28859__$1;
(statearr_28866_28924[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (24))){
var inst_28810 = (state_28859[(9)]);
var inst_28833 = (state_28859[(10)]);
var inst_28819 = (state_28859[(11)]);
var inst_28833__$1 = inst_28810.call(null,inst_28819);
var state_28859__$1 = (function (){var statearr_28867 = state_28859;
(statearr_28867[(10)] = inst_28833__$1);

return statearr_28867;
})();
if(cljs.core.truth_(inst_28833__$1)){
var statearr_28868_28925 = state_28859__$1;
(statearr_28868_28925[(1)] = (29));

} else {
var statearr_28869_28926 = state_28859__$1;
(statearr_28869_28926[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (4))){
var inst_28777 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28777)){
var statearr_28870_28927 = state_28859__$1;
(statearr_28870_28927[(1)] = (8));

} else {
var statearr_28871_28928 = state_28859__$1;
(statearr_28871_28928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (15))){
var inst_28804 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28804)){
var statearr_28872_28929 = state_28859__$1;
(statearr_28872_28929[(1)] = (19));

} else {
var statearr_28873_28930 = state_28859__$1;
(statearr_28873_28930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (21))){
var inst_28809 = (state_28859[(12)]);
var inst_28809__$1 = (state_28859[(2)]);
var inst_28810 = cljs.core.get.call(null,inst_28809__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28811 = cljs.core.get.call(null,inst_28809__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28812 = cljs.core.get.call(null,inst_28809__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28859__$1 = (function (){var statearr_28874 = state_28859;
(statearr_28874[(12)] = inst_28809__$1);

(statearr_28874[(13)] = inst_28811);

(statearr_28874[(9)] = inst_28810);

return statearr_28874;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28859__$1,(22),inst_28812);
} else {
if((state_val_28860 === (31))){
var inst_28841 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28841)){
var statearr_28875_28931 = state_28859__$1;
(statearr_28875_28931[(1)] = (32));

} else {
var statearr_28876_28932 = state_28859__$1;
(statearr_28876_28932[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (32))){
var inst_28818 = (state_28859[(14)]);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28859__$1,(35),out,inst_28818);
} else {
if((state_val_28860 === (33))){
var inst_28809 = (state_28859[(12)]);
var inst_28786 = inst_28809;
var state_28859__$1 = (function (){var statearr_28877 = state_28859;
(statearr_28877[(7)] = inst_28786);

return statearr_28877;
})();
var statearr_28878_28933 = state_28859__$1;
(statearr_28878_28933[(2)] = null);

(statearr_28878_28933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (13))){
var inst_28786 = (state_28859[(7)]);
var inst_28793 = inst_28786.cljs$lang$protocol_mask$partition0$;
var inst_28794 = (inst_28793 & (64));
var inst_28795 = inst_28786.cljs$core$ISeq$;
var inst_28796 = (cljs.core.PROTOCOL_SENTINEL === inst_28795);
var inst_28797 = ((inst_28794) || (inst_28796));
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28797)){
var statearr_28879_28934 = state_28859__$1;
(statearr_28879_28934[(1)] = (16));

} else {
var statearr_28880_28935 = state_28859__$1;
(statearr_28880_28935[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (22))){
var inst_28818 = (state_28859[(14)]);
var inst_28819 = (state_28859[(11)]);
var inst_28817 = (state_28859[(2)]);
var inst_28818__$1 = cljs.core.nth.call(null,inst_28817,(0),null);
var inst_28819__$1 = cljs.core.nth.call(null,inst_28817,(1),null);
var inst_28820 = (inst_28818__$1 == null);
var inst_28821 = cljs.core._EQ_.call(null,inst_28819__$1,change);
var inst_28822 = ((inst_28820) || (inst_28821));
var state_28859__$1 = (function (){var statearr_28881 = state_28859;
(statearr_28881[(14)] = inst_28818__$1);

(statearr_28881[(11)] = inst_28819__$1);

return statearr_28881;
})();
if(cljs.core.truth_(inst_28822)){
var statearr_28882_28936 = state_28859__$1;
(statearr_28882_28936[(1)] = (23));

} else {
var statearr_28883_28937 = state_28859__$1;
(statearr_28883_28937[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (36))){
var inst_28809 = (state_28859[(12)]);
var inst_28786 = inst_28809;
var state_28859__$1 = (function (){var statearr_28884 = state_28859;
(statearr_28884[(7)] = inst_28786);

return statearr_28884;
})();
var statearr_28885_28938 = state_28859__$1;
(statearr_28885_28938[(2)] = null);

(statearr_28885_28938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (29))){
var inst_28833 = (state_28859[(10)]);
var state_28859__$1 = state_28859;
var statearr_28886_28939 = state_28859__$1;
(statearr_28886_28939[(2)] = inst_28833);

(statearr_28886_28939[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (6))){
var state_28859__$1 = state_28859;
var statearr_28887_28940 = state_28859__$1;
(statearr_28887_28940[(2)] = false);

(statearr_28887_28940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (28))){
var inst_28829 = (state_28859[(2)]);
var inst_28830 = calc_state.call(null);
var inst_28786 = inst_28830;
var state_28859__$1 = (function (){var statearr_28888 = state_28859;
(statearr_28888[(7)] = inst_28786);

(statearr_28888[(15)] = inst_28829);

return statearr_28888;
})();
var statearr_28889_28941 = state_28859__$1;
(statearr_28889_28941[(2)] = null);

(statearr_28889_28941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (25))){
var inst_28855 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28890_28942 = state_28859__$1;
(statearr_28890_28942[(2)] = inst_28855);

(statearr_28890_28942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (34))){
var inst_28853 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28891_28943 = state_28859__$1;
(statearr_28891_28943[(2)] = inst_28853);

(statearr_28891_28943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (17))){
var state_28859__$1 = state_28859;
var statearr_28892_28944 = state_28859__$1;
(statearr_28892_28944[(2)] = false);

(statearr_28892_28944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (3))){
var state_28859__$1 = state_28859;
var statearr_28893_28945 = state_28859__$1;
(statearr_28893_28945[(2)] = false);

(statearr_28893_28945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (12))){
var inst_28857 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28859__$1,inst_28857);
} else {
if((state_val_28860 === (2))){
var inst_28761 = (state_28859[(8)]);
var inst_28766 = inst_28761.cljs$lang$protocol_mask$partition0$;
var inst_28767 = (inst_28766 & (64));
var inst_28768 = inst_28761.cljs$core$ISeq$;
var inst_28769 = (cljs.core.PROTOCOL_SENTINEL === inst_28768);
var inst_28770 = ((inst_28767) || (inst_28769));
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28770)){
var statearr_28894_28946 = state_28859__$1;
(statearr_28894_28946[(1)] = (5));

} else {
var statearr_28895_28947 = state_28859__$1;
(statearr_28895_28947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (23))){
var inst_28818 = (state_28859[(14)]);
var inst_28824 = (inst_28818 == null);
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28824)){
var statearr_28896_28948 = state_28859__$1;
(statearr_28896_28948[(1)] = (26));

} else {
var statearr_28897_28949 = state_28859__$1;
(statearr_28897_28949[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (35))){
var inst_28844 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28844)){
var statearr_28898_28950 = state_28859__$1;
(statearr_28898_28950[(1)] = (36));

} else {
var statearr_28899_28951 = state_28859__$1;
(statearr_28899_28951[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (19))){
var inst_28786 = (state_28859[(7)]);
var inst_28806 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28786);
var state_28859__$1 = state_28859;
var statearr_28900_28952 = state_28859__$1;
(statearr_28900_28952[(2)] = inst_28806);

(statearr_28900_28952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (11))){
var inst_28786 = (state_28859[(7)]);
var inst_28790 = (inst_28786 == null);
var inst_28791 = cljs.core.not.call(null,inst_28790);
var state_28859__$1 = state_28859;
if(inst_28791){
var statearr_28901_28953 = state_28859__$1;
(statearr_28901_28953[(1)] = (13));

} else {
var statearr_28902_28954 = state_28859__$1;
(statearr_28902_28954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (9))){
var inst_28761 = (state_28859[(8)]);
var state_28859__$1 = state_28859;
var statearr_28903_28955 = state_28859__$1;
(statearr_28903_28955[(2)] = inst_28761);

(statearr_28903_28955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (5))){
var state_28859__$1 = state_28859;
var statearr_28904_28956 = state_28859__$1;
(statearr_28904_28956[(2)] = true);

(statearr_28904_28956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (14))){
var state_28859__$1 = state_28859;
var statearr_28905_28957 = state_28859__$1;
(statearr_28905_28957[(2)] = false);

(statearr_28905_28957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (26))){
var inst_28819 = (state_28859[(11)]);
var inst_28826 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28819);
var state_28859__$1 = state_28859;
var statearr_28906_28958 = state_28859__$1;
(statearr_28906_28958[(2)] = inst_28826);

(statearr_28906_28958[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (16))){
var state_28859__$1 = state_28859;
var statearr_28907_28959 = state_28859__$1;
(statearr_28907_28959[(2)] = true);

(statearr_28907_28959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (38))){
var inst_28849 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28908_28960 = state_28859__$1;
(statearr_28908_28960[(2)] = inst_28849);

(statearr_28908_28960[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (30))){
var inst_28811 = (state_28859[(13)]);
var inst_28810 = (state_28859[(9)]);
var inst_28819 = (state_28859[(11)]);
var inst_28836 = cljs.core.empty_QMARK_.call(null,inst_28810);
var inst_28837 = inst_28811.call(null,inst_28819);
var inst_28838 = cljs.core.not.call(null,inst_28837);
var inst_28839 = ((inst_28836) && (inst_28838));
var state_28859__$1 = state_28859;
var statearr_28909_28961 = state_28859__$1;
(statearr_28909_28961[(2)] = inst_28839);

(statearr_28909_28961[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (10))){
var inst_28761 = (state_28859[(8)]);
var inst_28782 = (state_28859[(2)]);
var inst_28783 = cljs.core.get.call(null,inst_28782,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28784 = cljs.core.get.call(null,inst_28782,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28785 = cljs.core.get.call(null,inst_28782,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28786 = inst_28761;
var state_28859__$1 = (function (){var statearr_28910 = state_28859;
(statearr_28910[(16)] = inst_28784);

(statearr_28910[(7)] = inst_28786);

(statearr_28910[(17)] = inst_28783);

(statearr_28910[(18)] = inst_28785);

return statearr_28910;
})();
var statearr_28911_28962 = state_28859__$1;
(statearr_28911_28962[(2)] = null);

(statearr_28911_28962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (18))){
var inst_28801 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28912_28963 = state_28859__$1;
(statearr_28912_28963[(2)] = inst_28801);

(statearr_28912_28963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (37))){
var state_28859__$1 = state_28859;
var statearr_28913_28964 = state_28859__$1;
(statearr_28913_28964[(2)] = null);

(statearr_28913_28964[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (8))){
var inst_28761 = (state_28859[(8)]);
var inst_28779 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28761);
var state_28859__$1 = state_28859;
var statearr_28914_28965 = state_28859__$1;
(statearr_28914_28965[(2)] = inst_28779);

(statearr_28914_28965[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27757__auto__ = null;
var cljs$core$async$mix_$_state_machine__27757__auto____0 = (function (){
var statearr_28915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28915[(0)] = cljs$core$async$mix_$_state_machine__27757__auto__);

(statearr_28915[(1)] = (1));

return statearr_28915;
});
var cljs$core$async$mix_$_state_machine__27757__auto____1 = (function (state_28859){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_28859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e28916){if((e28916 instanceof Object)){
var ex__27760__auto__ = e28916;
var statearr_28917_28966 = state_28859;
(statearr_28917_28966[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28967 = state_28859;
state_28859 = G__28967;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27757__auto__ = function(state_28859){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27757__auto____1.call(this,state_28859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27757__auto____0;
cljs$core$async$mix_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27757__auto____1;
return cljs$core$async$mix_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_28918 = f__27852__auto__.call(null);
(statearr_28918[(6)] = c__27851__auto___28919);

return statearr_28918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_28970 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_28970.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28971 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_28971.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28972 = (function() {
var G__28973 = null;
var G__28973__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__28973__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__28973 = function(p,v){
switch(arguments.length){
case 1:
return G__28973__1.call(this,p);
case 2:
return G__28973__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28973.cljs$core$IFn$_invoke$arity$1 = G__28973__1;
G__28973.cljs$core$IFn$_invoke$arity$2 = G__28973__2;
return G__28973;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28969 = arguments.length;
switch (G__28969) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28972.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28972.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28977 = arguments.length;
switch (G__28977) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28975_SHARP_){
if(cljs.core.truth_(p1__28975_SHARP_.call(null,topic))){
return p1__28975_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28975_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28979 = meta28979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28980,meta28979__$1){
var self__ = this;
var _28980__$1 = this;
return (new cljs.core.async.t_cljs$core$async28978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28979__$1));
}));

(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28980){
var self__ = this;
var _28980__$1 = this;
return self__.meta28979;
}));

(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28979","meta28979",-177035071,null)], null);
}));

(cljs.core.async.t_cljs$core$async28978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28978");

(cljs.core.async.t_cljs$core$async28978.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28978.
 */
cljs.core.async.__GT_t_cljs$core$async28978 = (function cljs$core$async$__GT_t_cljs$core$async28978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28979){
return (new cljs.core.async.t_cljs$core$async28978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28979));
});

}

return (new cljs.core.async.t_cljs$core$async28978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27851__auto___29098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29052){
var state_val_29053 = (state_29052[(1)]);
if((state_val_29053 === (7))){
var inst_29048 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29054_29099 = state_29052__$1;
(statearr_29054_29099[(2)] = inst_29048);

(statearr_29054_29099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (20))){
var state_29052__$1 = state_29052;
var statearr_29055_29100 = state_29052__$1;
(statearr_29055_29100[(2)] = null);

(statearr_29055_29100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (1))){
var state_29052__$1 = state_29052;
var statearr_29056_29101 = state_29052__$1;
(statearr_29056_29101[(2)] = null);

(statearr_29056_29101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (24))){
var inst_29031 = (state_29052[(7)]);
var inst_29040 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29031);
var state_29052__$1 = state_29052;
var statearr_29057_29102 = state_29052__$1;
(statearr_29057_29102[(2)] = inst_29040);

(statearr_29057_29102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (4))){
var inst_28983 = (state_29052[(8)]);
var inst_28983__$1 = (state_29052[(2)]);
var inst_28984 = (inst_28983__$1 == null);
var state_29052__$1 = (function (){var statearr_29058 = state_29052;
(statearr_29058[(8)] = inst_28983__$1);

return statearr_29058;
})();
if(cljs.core.truth_(inst_28984)){
var statearr_29059_29103 = state_29052__$1;
(statearr_29059_29103[(1)] = (5));

} else {
var statearr_29060_29104 = state_29052__$1;
(statearr_29060_29104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (15))){
var inst_29025 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29061_29105 = state_29052__$1;
(statearr_29061_29105[(2)] = inst_29025);

(statearr_29061_29105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (21))){
var inst_29045 = (state_29052[(2)]);
var state_29052__$1 = (function (){var statearr_29062 = state_29052;
(statearr_29062[(9)] = inst_29045);

return statearr_29062;
})();
var statearr_29063_29106 = state_29052__$1;
(statearr_29063_29106[(2)] = null);

(statearr_29063_29106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (13))){
var inst_29007 = (state_29052[(10)]);
var inst_29009 = cljs.core.chunked_seq_QMARK_.call(null,inst_29007);
var state_29052__$1 = state_29052;
if(inst_29009){
var statearr_29064_29107 = state_29052__$1;
(statearr_29064_29107[(1)] = (16));

} else {
var statearr_29065_29108 = state_29052__$1;
(statearr_29065_29108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (22))){
var inst_29037 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_29037)){
var statearr_29066_29109 = state_29052__$1;
(statearr_29066_29109[(1)] = (23));

} else {
var statearr_29067_29110 = state_29052__$1;
(statearr_29067_29110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (6))){
var inst_28983 = (state_29052[(8)]);
var inst_29031 = (state_29052[(7)]);
var inst_29033 = (state_29052[(11)]);
var inst_29031__$1 = topic_fn.call(null,inst_28983);
var inst_29032 = cljs.core.deref.call(null,mults);
var inst_29033__$1 = cljs.core.get.call(null,inst_29032,inst_29031__$1);
var state_29052__$1 = (function (){var statearr_29068 = state_29052;
(statearr_29068[(7)] = inst_29031__$1);

(statearr_29068[(11)] = inst_29033__$1);

return statearr_29068;
})();
if(cljs.core.truth_(inst_29033__$1)){
var statearr_29069_29111 = state_29052__$1;
(statearr_29069_29111[(1)] = (19));

} else {
var statearr_29070_29112 = state_29052__$1;
(statearr_29070_29112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (25))){
var inst_29042 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29071_29113 = state_29052__$1;
(statearr_29071_29113[(2)] = inst_29042);

(statearr_29071_29113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (17))){
var inst_29007 = (state_29052[(10)]);
var inst_29016 = cljs.core.first.call(null,inst_29007);
var inst_29017 = cljs.core.async.muxch_STAR_.call(null,inst_29016);
var inst_29018 = cljs.core.async.close_BANG_.call(null,inst_29017);
var inst_29019 = cljs.core.next.call(null,inst_29007);
var inst_28993 = inst_29019;
var inst_28994 = null;
var inst_28995 = (0);
var inst_28996 = (0);
var state_29052__$1 = (function (){var statearr_29072 = state_29052;
(statearr_29072[(12)] = inst_28996);

(statearr_29072[(13)] = inst_29018);

(statearr_29072[(14)] = inst_28994);

(statearr_29072[(15)] = inst_28995);

(statearr_29072[(16)] = inst_28993);

return statearr_29072;
})();
var statearr_29073_29114 = state_29052__$1;
(statearr_29073_29114[(2)] = null);

(statearr_29073_29114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (3))){
var inst_29050 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29052__$1,inst_29050);
} else {
if((state_val_29053 === (12))){
var inst_29027 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29074_29115 = state_29052__$1;
(statearr_29074_29115[(2)] = inst_29027);

(statearr_29074_29115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (2))){
var state_29052__$1 = state_29052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29052__$1,(4),ch);
} else {
if((state_val_29053 === (23))){
var state_29052__$1 = state_29052;
var statearr_29075_29116 = state_29052__$1;
(statearr_29075_29116[(2)] = null);

(statearr_29075_29116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (19))){
var inst_28983 = (state_29052[(8)]);
var inst_29033 = (state_29052[(11)]);
var inst_29035 = cljs.core.async.muxch_STAR_.call(null,inst_29033);
var state_29052__$1 = state_29052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29052__$1,(22),inst_29035,inst_28983);
} else {
if((state_val_29053 === (11))){
var inst_29007 = (state_29052[(10)]);
var inst_28993 = (state_29052[(16)]);
var inst_29007__$1 = cljs.core.seq.call(null,inst_28993);
var state_29052__$1 = (function (){var statearr_29076 = state_29052;
(statearr_29076[(10)] = inst_29007__$1);

return statearr_29076;
})();
if(inst_29007__$1){
var statearr_29077_29117 = state_29052__$1;
(statearr_29077_29117[(1)] = (13));

} else {
var statearr_29078_29118 = state_29052__$1;
(statearr_29078_29118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (9))){
var inst_29029 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29079_29119 = state_29052__$1;
(statearr_29079_29119[(2)] = inst_29029);

(statearr_29079_29119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (5))){
var inst_28990 = cljs.core.deref.call(null,mults);
var inst_28991 = cljs.core.vals.call(null,inst_28990);
var inst_28992 = cljs.core.seq.call(null,inst_28991);
var inst_28993 = inst_28992;
var inst_28994 = null;
var inst_28995 = (0);
var inst_28996 = (0);
var state_29052__$1 = (function (){var statearr_29080 = state_29052;
(statearr_29080[(12)] = inst_28996);

(statearr_29080[(14)] = inst_28994);

(statearr_29080[(15)] = inst_28995);

(statearr_29080[(16)] = inst_28993);

return statearr_29080;
})();
var statearr_29081_29120 = state_29052__$1;
(statearr_29081_29120[(2)] = null);

(statearr_29081_29120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (14))){
var state_29052__$1 = state_29052;
var statearr_29085_29121 = state_29052__$1;
(statearr_29085_29121[(2)] = null);

(statearr_29085_29121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (16))){
var inst_29007 = (state_29052[(10)]);
var inst_29011 = cljs.core.chunk_first.call(null,inst_29007);
var inst_29012 = cljs.core.chunk_rest.call(null,inst_29007);
var inst_29013 = cljs.core.count.call(null,inst_29011);
var inst_28993 = inst_29012;
var inst_28994 = inst_29011;
var inst_28995 = inst_29013;
var inst_28996 = (0);
var state_29052__$1 = (function (){var statearr_29086 = state_29052;
(statearr_29086[(12)] = inst_28996);

(statearr_29086[(14)] = inst_28994);

(statearr_29086[(15)] = inst_28995);

(statearr_29086[(16)] = inst_28993);

return statearr_29086;
})();
var statearr_29087_29122 = state_29052__$1;
(statearr_29087_29122[(2)] = null);

(statearr_29087_29122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (10))){
var inst_28996 = (state_29052[(12)]);
var inst_28994 = (state_29052[(14)]);
var inst_28995 = (state_29052[(15)]);
var inst_28993 = (state_29052[(16)]);
var inst_29001 = cljs.core._nth.call(null,inst_28994,inst_28996);
var inst_29002 = cljs.core.async.muxch_STAR_.call(null,inst_29001);
var inst_29003 = cljs.core.async.close_BANG_.call(null,inst_29002);
var inst_29004 = (inst_28996 + (1));
var tmp29082 = inst_28994;
var tmp29083 = inst_28995;
var tmp29084 = inst_28993;
var inst_28993__$1 = tmp29084;
var inst_28994__$1 = tmp29082;
var inst_28995__$1 = tmp29083;
var inst_28996__$1 = inst_29004;
var state_29052__$1 = (function (){var statearr_29088 = state_29052;
(statearr_29088[(12)] = inst_28996__$1);

(statearr_29088[(14)] = inst_28994__$1);

(statearr_29088[(15)] = inst_28995__$1);

(statearr_29088[(16)] = inst_28993__$1);

(statearr_29088[(17)] = inst_29003);

return statearr_29088;
})();
var statearr_29089_29123 = state_29052__$1;
(statearr_29089_29123[(2)] = null);

(statearr_29089_29123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (18))){
var inst_29022 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29090_29124 = state_29052__$1;
(statearr_29090_29124[(2)] = inst_29022);

(statearr_29090_29124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (8))){
var inst_28996 = (state_29052[(12)]);
var inst_28995 = (state_29052[(15)]);
var inst_28998 = (inst_28996 < inst_28995);
var inst_28999 = inst_28998;
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_28999)){
var statearr_29091_29125 = state_29052__$1;
(statearr_29091_29125[(1)] = (10));

} else {
var statearr_29092_29126 = state_29052__$1;
(statearr_29092_29126[(1)] = (11));

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
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_29093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29093[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_29093[(1)] = (1));

return statearr_29093;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_29052){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29094){if((e29094 instanceof Object)){
var ex__27760__auto__ = e29094;
var statearr_29095_29127 = state_29052;
(statearr_29095_29127[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29128 = state_29052;
state_29052 = G__29128;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_29052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_29052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29096 = f__27852__auto__.call(null);
(statearr_29096[(6)] = c__27851__auto___29098);

return statearr_29096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29130 = arguments.length;
switch (G__29130) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29133 = arguments.length;
switch (G__29133) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29136 = arguments.length;
switch (G__29136) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__27851__auto___29203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29175){
var state_val_29176 = (state_29175[(1)]);
if((state_val_29176 === (7))){
var state_29175__$1 = state_29175;
var statearr_29177_29204 = state_29175__$1;
(statearr_29177_29204[(2)] = null);

(statearr_29177_29204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (1))){
var state_29175__$1 = state_29175;
var statearr_29178_29205 = state_29175__$1;
(statearr_29178_29205[(2)] = null);

(statearr_29178_29205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (4))){
var inst_29139 = (state_29175[(7)]);
var inst_29141 = (inst_29139 < cnt);
var state_29175__$1 = state_29175;
if(cljs.core.truth_(inst_29141)){
var statearr_29179_29206 = state_29175__$1;
(statearr_29179_29206[(1)] = (6));

} else {
var statearr_29180_29207 = state_29175__$1;
(statearr_29180_29207[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (15))){
var inst_29171 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29181_29208 = state_29175__$1;
(statearr_29181_29208[(2)] = inst_29171);

(statearr_29181_29208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (13))){
var inst_29164 = cljs.core.async.close_BANG_.call(null,out);
var state_29175__$1 = state_29175;
var statearr_29182_29209 = state_29175__$1;
(statearr_29182_29209[(2)] = inst_29164);

(statearr_29182_29209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (6))){
var state_29175__$1 = state_29175;
var statearr_29183_29210 = state_29175__$1;
(statearr_29183_29210[(2)] = null);

(statearr_29183_29210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (3))){
var inst_29173 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29175__$1,inst_29173);
} else {
if((state_val_29176 === (12))){
var inst_29161 = (state_29175[(8)]);
var inst_29161__$1 = (state_29175[(2)]);
var inst_29162 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29161__$1);
var state_29175__$1 = (function (){var statearr_29184 = state_29175;
(statearr_29184[(8)] = inst_29161__$1);

return statearr_29184;
})();
if(cljs.core.truth_(inst_29162)){
var statearr_29185_29211 = state_29175__$1;
(statearr_29185_29211[(1)] = (13));

} else {
var statearr_29186_29212 = state_29175__$1;
(statearr_29186_29212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (2))){
var inst_29138 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29139 = (0);
var state_29175__$1 = (function (){var statearr_29187 = state_29175;
(statearr_29187[(7)] = inst_29139);

(statearr_29187[(9)] = inst_29138);

return statearr_29187;
})();
var statearr_29188_29213 = state_29175__$1;
(statearr_29188_29213[(2)] = null);

(statearr_29188_29213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (11))){
var inst_29139 = (state_29175[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29175,(10),Object,null,(9));
var inst_29148 = chs__$1.call(null,inst_29139);
var inst_29149 = done.call(null,inst_29139);
var inst_29150 = cljs.core.async.take_BANG_.call(null,inst_29148,inst_29149);
var state_29175__$1 = state_29175;
var statearr_29189_29214 = state_29175__$1;
(statearr_29189_29214[(2)] = inst_29150);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29175__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (9))){
var inst_29139 = (state_29175[(7)]);
var inst_29152 = (state_29175[(2)]);
var inst_29153 = (inst_29139 + (1));
var inst_29139__$1 = inst_29153;
var state_29175__$1 = (function (){var statearr_29190 = state_29175;
(statearr_29190[(7)] = inst_29139__$1);

(statearr_29190[(10)] = inst_29152);

return statearr_29190;
})();
var statearr_29191_29215 = state_29175__$1;
(statearr_29191_29215[(2)] = null);

(statearr_29191_29215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (5))){
var inst_29159 = (state_29175[(2)]);
var state_29175__$1 = (function (){var statearr_29192 = state_29175;
(statearr_29192[(11)] = inst_29159);

return statearr_29192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29175__$1,(12),dchan);
} else {
if((state_val_29176 === (14))){
var inst_29161 = (state_29175[(8)]);
var inst_29166 = cljs.core.apply.call(null,f,inst_29161);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29175__$1,(16),out,inst_29166);
} else {
if((state_val_29176 === (16))){
var inst_29168 = (state_29175[(2)]);
var state_29175__$1 = (function (){var statearr_29193 = state_29175;
(statearr_29193[(12)] = inst_29168);

return statearr_29193;
})();
var statearr_29194_29216 = state_29175__$1;
(statearr_29194_29216[(2)] = null);

(statearr_29194_29216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (10))){
var inst_29143 = (state_29175[(2)]);
var inst_29144 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29175__$1 = (function (){var statearr_29195 = state_29175;
(statearr_29195[(13)] = inst_29143);

return statearr_29195;
})();
var statearr_29196_29217 = state_29175__$1;
(statearr_29196_29217[(2)] = inst_29144);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29175__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (8))){
var inst_29157 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29197_29218 = state_29175__$1;
(statearr_29197_29218[(2)] = inst_29157);

(statearr_29197_29218[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_29198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29198[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_29198[(1)] = (1));

return statearr_29198;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_29175){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29199){if((e29199 instanceof Object)){
var ex__27760__auto__ = e29199;
var statearr_29200_29219 = state_29175;
(statearr_29200_29219[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29220 = state_29175;
state_29175 = G__29220;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_29175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_29175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29201 = f__27852__auto__.call(null);
(statearr_29201[(6)] = c__27851__auto___29203);

return statearr_29201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29223 = arguments.length;
switch (G__29223) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27851__auto___29277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29255){
var state_val_29256 = (state_29255[(1)]);
if((state_val_29256 === (7))){
var inst_29234 = (state_29255[(7)]);
var inst_29235 = (state_29255[(8)]);
var inst_29234__$1 = (state_29255[(2)]);
var inst_29235__$1 = cljs.core.nth.call(null,inst_29234__$1,(0),null);
var inst_29236 = cljs.core.nth.call(null,inst_29234__$1,(1),null);
var inst_29237 = (inst_29235__$1 == null);
var state_29255__$1 = (function (){var statearr_29257 = state_29255;
(statearr_29257[(7)] = inst_29234__$1);

(statearr_29257[(8)] = inst_29235__$1);

(statearr_29257[(9)] = inst_29236);

return statearr_29257;
})();
if(cljs.core.truth_(inst_29237)){
var statearr_29258_29278 = state_29255__$1;
(statearr_29258_29278[(1)] = (8));

} else {
var statearr_29259_29279 = state_29255__$1;
(statearr_29259_29279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (1))){
var inst_29224 = cljs.core.vec.call(null,chs);
var inst_29225 = inst_29224;
var state_29255__$1 = (function (){var statearr_29260 = state_29255;
(statearr_29260[(10)] = inst_29225);

return statearr_29260;
})();
var statearr_29261_29280 = state_29255__$1;
(statearr_29261_29280[(2)] = null);

(statearr_29261_29280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (4))){
var inst_29225 = (state_29255[(10)]);
var state_29255__$1 = state_29255;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29255__$1,(7),inst_29225);
} else {
if((state_val_29256 === (6))){
var inst_29251 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29262_29281 = state_29255__$1;
(statearr_29262_29281[(2)] = inst_29251);

(statearr_29262_29281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (3))){
var inst_29253 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29255__$1,inst_29253);
} else {
if((state_val_29256 === (2))){
var inst_29225 = (state_29255[(10)]);
var inst_29227 = cljs.core.count.call(null,inst_29225);
var inst_29228 = (inst_29227 > (0));
var state_29255__$1 = state_29255;
if(cljs.core.truth_(inst_29228)){
var statearr_29264_29282 = state_29255__$1;
(statearr_29264_29282[(1)] = (4));

} else {
var statearr_29265_29283 = state_29255__$1;
(statearr_29265_29283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (11))){
var inst_29225 = (state_29255[(10)]);
var inst_29244 = (state_29255[(2)]);
var tmp29263 = inst_29225;
var inst_29225__$1 = tmp29263;
var state_29255__$1 = (function (){var statearr_29266 = state_29255;
(statearr_29266[(11)] = inst_29244);

(statearr_29266[(10)] = inst_29225__$1);

return statearr_29266;
})();
var statearr_29267_29284 = state_29255__$1;
(statearr_29267_29284[(2)] = null);

(statearr_29267_29284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (9))){
var inst_29235 = (state_29255[(8)]);
var state_29255__$1 = state_29255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29255__$1,(11),out,inst_29235);
} else {
if((state_val_29256 === (5))){
var inst_29249 = cljs.core.async.close_BANG_.call(null,out);
var state_29255__$1 = state_29255;
var statearr_29268_29285 = state_29255__$1;
(statearr_29268_29285[(2)] = inst_29249);

(statearr_29268_29285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (10))){
var inst_29247 = (state_29255[(2)]);
var state_29255__$1 = state_29255;
var statearr_29269_29286 = state_29255__$1;
(statearr_29269_29286[(2)] = inst_29247);

(statearr_29269_29286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29256 === (8))){
var inst_29234 = (state_29255[(7)]);
var inst_29235 = (state_29255[(8)]);
var inst_29225 = (state_29255[(10)]);
var inst_29236 = (state_29255[(9)]);
var inst_29239 = (function (){var cs = inst_29225;
var vec__29230 = inst_29234;
var v = inst_29235;
var c = inst_29236;
return (function (p1__29221_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29221_SHARP_);
});
})();
var inst_29240 = cljs.core.filterv.call(null,inst_29239,inst_29225);
var inst_29225__$1 = inst_29240;
var state_29255__$1 = (function (){var statearr_29270 = state_29255;
(statearr_29270[(10)] = inst_29225__$1);

return statearr_29270;
})();
var statearr_29271_29287 = state_29255__$1;
(statearr_29271_29287[(2)] = null);

(statearr_29271_29287[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_29272 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29272[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_29272[(1)] = (1));

return statearr_29272;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_29255){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29273){if((e29273 instanceof Object)){
var ex__27760__auto__ = e29273;
var statearr_29274_29288 = state_29255;
(statearr_29274_29288[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29289 = state_29255;
state_29255 = G__29289;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_29255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_29255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29275 = f__27852__auto__.call(null);
(statearr_29275[(6)] = c__27851__auto___29277);

return statearr_29275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29291 = arguments.length;
switch (G__29291) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27851__auto___29336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29315){
var state_val_29316 = (state_29315[(1)]);
if((state_val_29316 === (7))){
var inst_29297 = (state_29315[(7)]);
var inst_29297__$1 = (state_29315[(2)]);
var inst_29298 = (inst_29297__$1 == null);
var inst_29299 = cljs.core.not.call(null,inst_29298);
var state_29315__$1 = (function (){var statearr_29317 = state_29315;
(statearr_29317[(7)] = inst_29297__$1);

return statearr_29317;
})();
if(inst_29299){
var statearr_29318_29337 = state_29315__$1;
(statearr_29318_29337[(1)] = (8));

} else {
var statearr_29319_29338 = state_29315__$1;
(statearr_29319_29338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29316 === (1))){
var inst_29292 = (0);
var state_29315__$1 = (function (){var statearr_29320 = state_29315;
(statearr_29320[(8)] = inst_29292);

return statearr_29320;
})();
var statearr_29321_29339 = state_29315__$1;
(statearr_29321_29339[(2)] = null);

(statearr_29321_29339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29316 === (4))){
var state_29315__$1 = state_29315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29315__$1,(7),ch);
} else {
if((state_val_29316 === (6))){
var inst_29310 = (state_29315[(2)]);
var state_29315__$1 = state_29315;
var statearr_29322_29340 = state_29315__$1;
(statearr_29322_29340[(2)] = inst_29310);

(statearr_29322_29340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29316 === (3))){
var inst_29312 = (state_29315[(2)]);
var inst_29313 = cljs.core.async.close_BANG_.call(null,out);
var state_29315__$1 = (function (){var statearr_29323 = state_29315;
(statearr_29323[(9)] = inst_29312);

return statearr_29323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29315__$1,inst_29313);
} else {
if((state_val_29316 === (2))){
var inst_29292 = (state_29315[(8)]);
var inst_29294 = (inst_29292 < n);
var state_29315__$1 = state_29315;
if(cljs.core.truth_(inst_29294)){
var statearr_29324_29341 = state_29315__$1;
(statearr_29324_29341[(1)] = (4));

} else {
var statearr_29325_29342 = state_29315__$1;
(statearr_29325_29342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29316 === (11))){
var inst_29292 = (state_29315[(8)]);
var inst_29302 = (state_29315[(2)]);
var inst_29303 = (inst_29292 + (1));
var inst_29292__$1 = inst_29303;
var state_29315__$1 = (function (){var statearr_29326 = state_29315;
(statearr_29326[(10)] = inst_29302);

(statearr_29326[(8)] = inst_29292__$1);

return statearr_29326;
})();
var statearr_29327_29343 = state_29315__$1;
(statearr_29327_29343[(2)] = null);

(statearr_29327_29343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29316 === (9))){
var state_29315__$1 = state_29315;
var statearr_29328_29344 = state_29315__$1;
(statearr_29328_29344[(2)] = null);

(statearr_29328_29344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29316 === (5))){
var state_29315__$1 = state_29315;
var statearr_29329_29345 = state_29315__$1;
(statearr_29329_29345[(2)] = null);

(statearr_29329_29345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29316 === (10))){
var inst_29307 = (state_29315[(2)]);
var state_29315__$1 = state_29315;
var statearr_29330_29346 = state_29315__$1;
(statearr_29330_29346[(2)] = inst_29307);

(statearr_29330_29346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29316 === (8))){
var inst_29297 = (state_29315[(7)]);
var state_29315__$1 = state_29315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29315__$1,(11),out,inst_29297);
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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_29331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29331[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_29331[(1)] = (1));

return statearr_29331;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_29315){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29332){if((e29332 instanceof Object)){
var ex__27760__auto__ = e29332;
var statearr_29333_29347 = state_29315;
(statearr_29333_29347[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29348 = state_29315;
state_29315 = G__29348;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_29315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_29315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29334 = f__27852__auto__.call(null);
(statearr_29334[(6)] = c__27851__auto___29336);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29350 = (function (f,ch,meta29351){
this.f = f;
this.ch = ch;
this.meta29351 = meta29351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29352,meta29351__$1){
var self__ = this;
var _29352__$1 = this;
return (new cljs.core.async.t_cljs$core$async29350(self__.f,self__.ch,meta29351__$1));
}));

(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29352){
var self__ = this;
var _29352__$1 = this;
return self__.meta29351;
}));

(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29353 = (function (f,ch,meta29351,_,fn1,meta29354){
this.f = f;
this.ch = ch;
this.meta29351 = meta29351;
this._ = _;
this.fn1 = fn1;
this.meta29354 = meta29354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29355,meta29354__$1){
var self__ = this;
var _29355__$1 = this;
return (new cljs.core.async.t_cljs$core$async29353(self__.f,self__.ch,self__.meta29351,self__._,self__.fn1,meta29354__$1));
}));

(cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29355){
var self__ = this;
var _29355__$1 = this;
return self__.meta29354;
}));

(cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__29349_SHARP_){
return f1.call(null,(((p1__29349_SHARP_ == null))?null:self__.f.call(null,p1__29349_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async29353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29351","meta29351",-1733765197,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29350","cljs.core.async/t_cljs$core$async29350",-525507250,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29354","meta29354",1937519216,null)], null);
}));

(cljs.core.async.t_cljs$core$async29353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29353");

(cljs.core.async.t_cljs$core$async29353.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29353.
 */
cljs.core.async.__GT_t_cljs$core$async29353 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29353(f__$1,ch__$1,meta29351__$1,___$2,fn1__$1,meta29354){
return (new cljs.core.async.t_cljs$core$async29353(f__$1,ch__$1,meta29351__$1,___$2,fn1__$1,meta29354));
});

}

return (new cljs.core.async.t_cljs$core$async29353(self__.f,self__.ch,self__.meta29351,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29351","meta29351",-1733765197,null)], null);
}));

(cljs.core.async.t_cljs$core$async29350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29350");

(cljs.core.async.t_cljs$core$async29350.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29350.
 */
cljs.core.async.__GT_t_cljs$core$async29350 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29350(f__$1,ch__$1,meta29351){
return (new cljs.core.async.t_cljs$core$async29350(f__$1,ch__$1,meta29351));
});

}

return (new cljs.core.async.t_cljs$core$async29350(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29356 = (function (f,ch,meta29357){
this.f = f;
this.ch = ch;
this.meta29357 = meta29357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29358,meta29357__$1){
var self__ = this;
var _29358__$1 = this;
return (new cljs.core.async.t_cljs$core$async29356(self__.f,self__.ch,meta29357__$1));
}));

(cljs.core.async.t_cljs$core$async29356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29358){
var self__ = this;
var _29358__$1 = this;
return self__.meta29357;
}));

(cljs.core.async.t_cljs$core$async29356.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29356.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29356.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async29356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29357","meta29357",-1712039108,null)], null);
}));

(cljs.core.async.t_cljs$core$async29356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29356");

(cljs.core.async.t_cljs$core$async29356.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29356.
 */
cljs.core.async.__GT_t_cljs$core$async29356 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29356(f__$1,ch__$1,meta29357){
return (new cljs.core.async.t_cljs$core$async29356(f__$1,ch__$1,meta29357));
});

}

return (new cljs.core.async.t_cljs$core$async29356(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29359 = (function (p,ch,meta29360){
this.p = p;
this.ch = ch;
this.meta29360 = meta29360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29361,meta29360__$1){
var self__ = this;
var _29361__$1 = this;
return (new cljs.core.async.t_cljs$core$async29359(self__.p,self__.ch,meta29360__$1));
}));

(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29361){
var self__ = this;
var _29361__$1 = this;
return self__.meta29360;
}));

(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29360","meta29360",1842940979,null)], null);
}));

(cljs.core.async.t_cljs$core$async29359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29359");

(cljs.core.async.t_cljs$core$async29359.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29359.
 */
cljs.core.async.__GT_t_cljs$core$async29359 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29359(p__$1,ch__$1,meta29360){
return (new cljs.core.async.t_cljs$core$async29359(p__$1,ch__$1,meta29360));
});

}

return (new cljs.core.async.t_cljs$core$async29359(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29363 = arguments.length;
switch (G__29363) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27851__auto___29403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (7))){
var inst_29380 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29386_29404 = state_29384__$1;
(statearr_29386_29404[(2)] = inst_29380);

(statearr_29386_29404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (1))){
var state_29384__$1 = state_29384;
var statearr_29387_29405 = state_29384__$1;
(statearr_29387_29405[(2)] = null);

(statearr_29387_29405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (4))){
var inst_29366 = (state_29384[(7)]);
var inst_29366__$1 = (state_29384[(2)]);
var inst_29367 = (inst_29366__$1 == null);
var state_29384__$1 = (function (){var statearr_29388 = state_29384;
(statearr_29388[(7)] = inst_29366__$1);

return statearr_29388;
})();
if(cljs.core.truth_(inst_29367)){
var statearr_29389_29406 = state_29384__$1;
(statearr_29389_29406[(1)] = (5));

} else {
var statearr_29390_29407 = state_29384__$1;
(statearr_29390_29407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (6))){
var inst_29366 = (state_29384[(7)]);
var inst_29371 = p.call(null,inst_29366);
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29371)){
var statearr_29391_29408 = state_29384__$1;
(statearr_29391_29408[(1)] = (8));

} else {
var statearr_29392_29409 = state_29384__$1;
(statearr_29392_29409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (3))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (2))){
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(4),ch);
} else {
if((state_val_29385 === (11))){
var inst_29374 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29393_29410 = state_29384__$1;
(statearr_29393_29410[(2)] = inst_29374);

(statearr_29393_29410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (9))){
var state_29384__$1 = state_29384;
var statearr_29394_29411 = state_29384__$1;
(statearr_29394_29411[(2)] = null);

(statearr_29394_29411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (5))){
var inst_29369 = cljs.core.async.close_BANG_.call(null,out);
var state_29384__$1 = state_29384;
var statearr_29395_29412 = state_29384__$1;
(statearr_29395_29412[(2)] = inst_29369);

(statearr_29395_29412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (10))){
var inst_29377 = (state_29384[(2)]);
var state_29384__$1 = (function (){var statearr_29396 = state_29384;
(statearr_29396[(8)] = inst_29377);

return statearr_29396;
})();
var statearr_29397_29413 = state_29384__$1;
(statearr_29397_29413[(2)] = null);

(statearr_29397_29413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (8))){
var inst_29366 = (state_29384[(7)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29384__$1,(11),out,inst_29366);
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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_29398 = [null,null,null,null,null,null,null,null,null];
(statearr_29398[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_29398[(1)] = (1));

return statearr_29398;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_29384){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29399){if((e29399 instanceof Object)){
var ex__27760__auto__ = e29399;
var statearr_29400_29414 = state_29384;
(statearr_29400_29414[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29415 = state_29384;
state_29384 = G__29415;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29401 = f__27852__auto__.call(null);
(statearr_29401[(6)] = c__27851__auto___29403);

return statearr_29401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29417 = arguments.length;
switch (G__29417) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29480){
var state_val_29481 = (state_29480[(1)]);
if((state_val_29481 === (7))){
var inst_29476 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29482_29520 = state_29480__$1;
(statearr_29482_29520[(2)] = inst_29476);

(statearr_29482_29520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (20))){
var inst_29446 = (state_29480[(7)]);
var inst_29457 = (state_29480[(2)]);
var inst_29458 = cljs.core.next.call(null,inst_29446);
var inst_29432 = inst_29458;
var inst_29433 = null;
var inst_29434 = (0);
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29483 = state_29480;
(statearr_29483[(8)] = inst_29433);

(statearr_29483[(9)] = inst_29432);

(statearr_29483[(10)] = inst_29434);

(statearr_29483[(11)] = inst_29457);

(statearr_29483[(12)] = inst_29435);

return statearr_29483;
})();
var statearr_29484_29521 = state_29480__$1;
(statearr_29484_29521[(2)] = null);

(statearr_29484_29521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (1))){
var state_29480__$1 = state_29480;
var statearr_29485_29522 = state_29480__$1;
(statearr_29485_29522[(2)] = null);

(statearr_29485_29522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (4))){
var inst_29421 = (state_29480[(13)]);
var inst_29421__$1 = (state_29480[(2)]);
var inst_29422 = (inst_29421__$1 == null);
var state_29480__$1 = (function (){var statearr_29486 = state_29480;
(statearr_29486[(13)] = inst_29421__$1);

return statearr_29486;
})();
if(cljs.core.truth_(inst_29422)){
var statearr_29487_29523 = state_29480__$1;
(statearr_29487_29523[(1)] = (5));

} else {
var statearr_29488_29524 = state_29480__$1;
(statearr_29488_29524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (15))){
var state_29480__$1 = state_29480;
var statearr_29492_29525 = state_29480__$1;
(statearr_29492_29525[(2)] = null);

(statearr_29492_29525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (21))){
var state_29480__$1 = state_29480;
var statearr_29493_29526 = state_29480__$1;
(statearr_29493_29526[(2)] = null);

(statearr_29493_29526[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (13))){
var inst_29433 = (state_29480[(8)]);
var inst_29432 = (state_29480[(9)]);
var inst_29434 = (state_29480[(10)]);
var inst_29435 = (state_29480[(12)]);
var inst_29442 = (state_29480[(2)]);
var inst_29443 = (inst_29435 + (1));
var tmp29489 = inst_29433;
var tmp29490 = inst_29432;
var tmp29491 = inst_29434;
var inst_29432__$1 = tmp29490;
var inst_29433__$1 = tmp29489;
var inst_29434__$1 = tmp29491;
var inst_29435__$1 = inst_29443;
var state_29480__$1 = (function (){var statearr_29494 = state_29480;
(statearr_29494[(8)] = inst_29433__$1);

(statearr_29494[(9)] = inst_29432__$1);

(statearr_29494[(10)] = inst_29434__$1);

(statearr_29494[(14)] = inst_29442);

(statearr_29494[(12)] = inst_29435__$1);

return statearr_29494;
})();
var statearr_29495_29527 = state_29480__$1;
(statearr_29495_29527[(2)] = null);

(statearr_29495_29527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (22))){
var state_29480__$1 = state_29480;
var statearr_29496_29528 = state_29480__$1;
(statearr_29496_29528[(2)] = null);

(statearr_29496_29528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (6))){
var inst_29421 = (state_29480[(13)]);
var inst_29430 = f.call(null,inst_29421);
var inst_29431 = cljs.core.seq.call(null,inst_29430);
var inst_29432 = inst_29431;
var inst_29433 = null;
var inst_29434 = (0);
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29497 = state_29480;
(statearr_29497[(8)] = inst_29433);

(statearr_29497[(9)] = inst_29432);

(statearr_29497[(10)] = inst_29434);

(statearr_29497[(12)] = inst_29435);

return statearr_29497;
})();
var statearr_29498_29529 = state_29480__$1;
(statearr_29498_29529[(2)] = null);

(statearr_29498_29529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (17))){
var inst_29446 = (state_29480[(7)]);
var inst_29450 = cljs.core.chunk_first.call(null,inst_29446);
var inst_29451 = cljs.core.chunk_rest.call(null,inst_29446);
var inst_29452 = cljs.core.count.call(null,inst_29450);
var inst_29432 = inst_29451;
var inst_29433 = inst_29450;
var inst_29434 = inst_29452;
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29499 = state_29480;
(statearr_29499[(8)] = inst_29433);

(statearr_29499[(9)] = inst_29432);

(statearr_29499[(10)] = inst_29434);

(statearr_29499[(12)] = inst_29435);

return statearr_29499;
})();
var statearr_29500_29530 = state_29480__$1;
(statearr_29500_29530[(2)] = null);

(statearr_29500_29530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (3))){
var inst_29478 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29480__$1,inst_29478);
} else {
if((state_val_29481 === (12))){
var inst_29466 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29501_29531 = state_29480__$1;
(statearr_29501_29531[(2)] = inst_29466);

(statearr_29501_29531[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (2))){
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29480__$1,(4),in$);
} else {
if((state_val_29481 === (23))){
var inst_29474 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29502_29532 = state_29480__$1;
(statearr_29502_29532[(2)] = inst_29474);

(statearr_29502_29532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (19))){
var inst_29461 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29503_29533 = state_29480__$1;
(statearr_29503_29533[(2)] = inst_29461);

(statearr_29503_29533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (11))){
var inst_29446 = (state_29480[(7)]);
var inst_29432 = (state_29480[(9)]);
var inst_29446__$1 = cljs.core.seq.call(null,inst_29432);
var state_29480__$1 = (function (){var statearr_29504 = state_29480;
(statearr_29504[(7)] = inst_29446__$1);

return statearr_29504;
})();
if(inst_29446__$1){
var statearr_29505_29534 = state_29480__$1;
(statearr_29505_29534[(1)] = (14));

} else {
var statearr_29506_29535 = state_29480__$1;
(statearr_29506_29535[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (9))){
var inst_29468 = (state_29480[(2)]);
var inst_29469 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29480__$1 = (function (){var statearr_29507 = state_29480;
(statearr_29507[(15)] = inst_29468);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29469)){
var statearr_29508_29536 = state_29480__$1;
(statearr_29508_29536[(1)] = (21));

} else {
var statearr_29509_29537 = state_29480__$1;
(statearr_29509_29537[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (5))){
var inst_29424 = cljs.core.async.close_BANG_.call(null,out);
var state_29480__$1 = state_29480;
var statearr_29510_29538 = state_29480__$1;
(statearr_29510_29538[(2)] = inst_29424);

(statearr_29510_29538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (14))){
var inst_29446 = (state_29480[(7)]);
var inst_29448 = cljs.core.chunked_seq_QMARK_.call(null,inst_29446);
var state_29480__$1 = state_29480;
if(inst_29448){
var statearr_29511_29539 = state_29480__$1;
(statearr_29511_29539[(1)] = (17));

} else {
var statearr_29512_29540 = state_29480__$1;
(statearr_29512_29540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (16))){
var inst_29464 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29513_29541 = state_29480__$1;
(statearr_29513_29541[(2)] = inst_29464);

(statearr_29513_29541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (10))){
var inst_29433 = (state_29480[(8)]);
var inst_29435 = (state_29480[(12)]);
var inst_29440 = cljs.core._nth.call(null,inst_29433,inst_29435);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29480__$1,(13),out,inst_29440);
} else {
if((state_val_29481 === (18))){
var inst_29446 = (state_29480[(7)]);
var inst_29455 = cljs.core.first.call(null,inst_29446);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29480__$1,(20),out,inst_29455);
} else {
if((state_val_29481 === (8))){
var inst_29434 = (state_29480[(10)]);
var inst_29435 = (state_29480[(12)]);
var inst_29437 = (inst_29435 < inst_29434);
var inst_29438 = inst_29437;
var state_29480__$1 = state_29480;
if(cljs.core.truth_(inst_29438)){
var statearr_29514_29542 = state_29480__$1;
(statearr_29514_29542[(1)] = (10));

} else {
var statearr_29515_29543 = state_29480__$1;
(statearr_29515_29543[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27757__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27757__auto____0 = (function (){
var statearr_29516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29516[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27757__auto__);

(statearr_29516[(1)] = (1));

return statearr_29516;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27757__auto____1 = (function (state_29480){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29517){if((e29517 instanceof Object)){
var ex__27760__auto__ = e29517;
var statearr_29518_29544 = state_29480;
(statearr_29518_29544[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29545 = state_29480;
state_29480 = G__29545;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27757__auto__ = function(state_29480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27757__auto____1.call(this,state_29480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27757__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27757__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29519 = f__27852__auto__.call(null);
(statearr_29519[(6)] = c__27851__auto__);

return statearr_29519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29547 = arguments.length;
switch (G__29547) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29550 = arguments.length;
switch (G__29550) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29553 = arguments.length;
switch (G__29553) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27851__auto___29600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29577){
var state_val_29578 = (state_29577[(1)]);
if((state_val_29578 === (7))){
var inst_29572 = (state_29577[(2)]);
var state_29577__$1 = state_29577;
var statearr_29579_29601 = state_29577__$1;
(statearr_29579_29601[(2)] = inst_29572);

(statearr_29579_29601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (1))){
var inst_29554 = null;
var state_29577__$1 = (function (){var statearr_29580 = state_29577;
(statearr_29580[(7)] = inst_29554);

return statearr_29580;
})();
var statearr_29581_29602 = state_29577__$1;
(statearr_29581_29602[(2)] = null);

(statearr_29581_29602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (4))){
var inst_29557 = (state_29577[(8)]);
var inst_29557__$1 = (state_29577[(2)]);
var inst_29558 = (inst_29557__$1 == null);
var inst_29559 = cljs.core.not.call(null,inst_29558);
var state_29577__$1 = (function (){var statearr_29582 = state_29577;
(statearr_29582[(8)] = inst_29557__$1);

return statearr_29582;
})();
if(inst_29559){
var statearr_29583_29603 = state_29577__$1;
(statearr_29583_29603[(1)] = (5));

} else {
var statearr_29584_29604 = state_29577__$1;
(statearr_29584_29604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (6))){
var state_29577__$1 = state_29577;
var statearr_29585_29605 = state_29577__$1;
(statearr_29585_29605[(2)] = null);

(statearr_29585_29605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (3))){
var inst_29574 = (state_29577[(2)]);
var inst_29575 = cljs.core.async.close_BANG_.call(null,out);
var state_29577__$1 = (function (){var statearr_29586 = state_29577;
(statearr_29586[(9)] = inst_29574);

return statearr_29586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29577__$1,inst_29575);
} else {
if((state_val_29578 === (2))){
var state_29577__$1 = state_29577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29577__$1,(4),ch);
} else {
if((state_val_29578 === (11))){
var inst_29557 = (state_29577[(8)]);
var inst_29566 = (state_29577[(2)]);
var inst_29554 = inst_29557;
var state_29577__$1 = (function (){var statearr_29587 = state_29577;
(statearr_29587[(7)] = inst_29554);

(statearr_29587[(10)] = inst_29566);

return statearr_29587;
})();
var statearr_29588_29606 = state_29577__$1;
(statearr_29588_29606[(2)] = null);

(statearr_29588_29606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (9))){
var inst_29557 = (state_29577[(8)]);
var state_29577__$1 = state_29577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29577__$1,(11),out,inst_29557);
} else {
if((state_val_29578 === (5))){
var inst_29554 = (state_29577[(7)]);
var inst_29557 = (state_29577[(8)]);
var inst_29561 = cljs.core._EQ_.call(null,inst_29557,inst_29554);
var state_29577__$1 = state_29577;
if(inst_29561){
var statearr_29590_29607 = state_29577__$1;
(statearr_29590_29607[(1)] = (8));

} else {
var statearr_29591_29608 = state_29577__$1;
(statearr_29591_29608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (10))){
var inst_29569 = (state_29577[(2)]);
var state_29577__$1 = state_29577;
var statearr_29592_29609 = state_29577__$1;
(statearr_29592_29609[(2)] = inst_29569);

(statearr_29592_29609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29578 === (8))){
var inst_29554 = (state_29577[(7)]);
var tmp29589 = inst_29554;
var inst_29554__$1 = tmp29589;
var state_29577__$1 = (function (){var statearr_29593 = state_29577;
(statearr_29593[(7)] = inst_29554__$1);

return statearr_29593;
})();
var statearr_29594_29610 = state_29577__$1;
(statearr_29594_29610[(2)] = null);

(statearr_29594_29610[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_29595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29595[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_29595[(1)] = (1));

return statearr_29595;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_29577){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29596){if((e29596 instanceof Object)){
var ex__27760__auto__ = e29596;
var statearr_29597_29611 = state_29577;
(statearr_29597_29611[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29612 = state_29577;
state_29577 = G__29612;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_29577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_29577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29598 = f__27852__auto__.call(null);
(statearr_29598[(6)] = c__27851__auto___29600);

return statearr_29598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29614 = arguments.length;
switch (G__29614) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27851__auto___29680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29652){
var state_val_29653 = (state_29652[(1)]);
if((state_val_29653 === (7))){
var inst_29648 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29654_29681 = state_29652__$1;
(statearr_29654_29681[(2)] = inst_29648);

(statearr_29654_29681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (1))){
var inst_29615 = (new Array(n));
var inst_29616 = inst_29615;
var inst_29617 = (0);
var state_29652__$1 = (function (){var statearr_29655 = state_29652;
(statearr_29655[(7)] = inst_29617);

(statearr_29655[(8)] = inst_29616);

return statearr_29655;
})();
var statearr_29656_29682 = state_29652__$1;
(statearr_29656_29682[(2)] = null);

(statearr_29656_29682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (4))){
var inst_29620 = (state_29652[(9)]);
var inst_29620__$1 = (state_29652[(2)]);
var inst_29621 = (inst_29620__$1 == null);
var inst_29622 = cljs.core.not.call(null,inst_29621);
var state_29652__$1 = (function (){var statearr_29657 = state_29652;
(statearr_29657[(9)] = inst_29620__$1);

return statearr_29657;
})();
if(inst_29622){
var statearr_29658_29683 = state_29652__$1;
(statearr_29658_29683[(1)] = (5));

} else {
var statearr_29659_29684 = state_29652__$1;
(statearr_29659_29684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (15))){
var inst_29642 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29660_29685 = state_29652__$1;
(statearr_29660_29685[(2)] = inst_29642);

(statearr_29660_29685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (13))){
var state_29652__$1 = state_29652;
var statearr_29661_29686 = state_29652__$1;
(statearr_29661_29686[(2)] = null);

(statearr_29661_29686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (6))){
var inst_29617 = (state_29652[(7)]);
var inst_29638 = (inst_29617 > (0));
var state_29652__$1 = state_29652;
if(cljs.core.truth_(inst_29638)){
var statearr_29662_29687 = state_29652__$1;
(statearr_29662_29687[(1)] = (12));

} else {
var statearr_29663_29688 = state_29652__$1;
(statearr_29663_29688[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (3))){
var inst_29650 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29652__$1,inst_29650);
} else {
if((state_val_29653 === (12))){
var inst_29616 = (state_29652[(8)]);
var inst_29640 = cljs.core.vec.call(null,inst_29616);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29652__$1,(15),out,inst_29640);
} else {
if((state_val_29653 === (2))){
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29652__$1,(4),ch);
} else {
if((state_val_29653 === (11))){
var inst_29632 = (state_29652[(2)]);
var inst_29633 = (new Array(n));
var inst_29616 = inst_29633;
var inst_29617 = (0);
var state_29652__$1 = (function (){var statearr_29664 = state_29652;
(statearr_29664[(10)] = inst_29632);

(statearr_29664[(7)] = inst_29617);

(statearr_29664[(8)] = inst_29616);

return statearr_29664;
})();
var statearr_29665_29689 = state_29652__$1;
(statearr_29665_29689[(2)] = null);

(statearr_29665_29689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (9))){
var inst_29616 = (state_29652[(8)]);
var inst_29630 = cljs.core.vec.call(null,inst_29616);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29652__$1,(11),out,inst_29630);
} else {
if((state_val_29653 === (5))){
var inst_29617 = (state_29652[(7)]);
var inst_29616 = (state_29652[(8)]);
var inst_29620 = (state_29652[(9)]);
var inst_29625 = (state_29652[(11)]);
var inst_29624 = (inst_29616[inst_29617] = inst_29620);
var inst_29625__$1 = (inst_29617 + (1));
var inst_29626 = (inst_29625__$1 < n);
var state_29652__$1 = (function (){var statearr_29666 = state_29652;
(statearr_29666[(12)] = inst_29624);

(statearr_29666[(11)] = inst_29625__$1);

return statearr_29666;
})();
if(cljs.core.truth_(inst_29626)){
var statearr_29667_29690 = state_29652__$1;
(statearr_29667_29690[(1)] = (8));

} else {
var statearr_29668_29691 = state_29652__$1;
(statearr_29668_29691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (14))){
var inst_29645 = (state_29652[(2)]);
var inst_29646 = cljs.core.async.close_BANG_.call(null,out);
var state_29652__$1 = (function (){var statearr_29670 = state_29652;
(statearr_29670[(13)] = inst_29645);

return statearr_29670;
})();
var statearr_29671_29692 = state_29652__$1;
(statearr_29671_29692[(2)] = inst_29646);

(statearr_29671_29692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (10))){
var inst_29636 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29672_29693 = state_29652__$1;
(statearr_29672_29693[(2)] = inst_29636);

(statearr_29672_29693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (8))){
var inst_29616 = (state_29652[(8)]);
var inst_29625 = (state_29652[(11)]);
var tmp29669 = inst_29616;
var inst_29616__$1 = tmp29669;
var inst_29617 = inst_29625;
var state_29652__$1 = (function (){var statearr_29673 = state_29652;
(statearr_29673[(7)] = inst_29617);

(statearr_29673[(8)] = inst_29616__$1);

return statearr_29673;
})();
var statearr_29674_29694 = state_29652__$1;
(statearr_29674_29694[(2)] = null);

(statearr_29674_29694[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_29675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29675[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_29675[(1)] = (1));

return statearr_29675;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_29652){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29676){if((e29676 instanceof Object)){
var ex__27760__auto__ = e29676;
var statearr_29677_29695 = state_29652;
(statearr_29677_29695[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29696 = state_29652;
state_29652 = G__29696;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_29652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_29652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29678 = f__27852__auto__.call(null);
(statearr_29678[(6)] = c__27851__auto___29680);

return statearr_29678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29698 = arguments.length;
switch (G__29698) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27851__auto___29768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_29740){
var state_val_29741 = (state_29740[(1)]);
if((state_val_29741 === (7))){
var inst_29736 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29742_29769 = state_29740__$1;
(statearr_29742_29769[(2)] = inst_29736);

(statearr_29742_29769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (1))){
var inst_29699 = [];
var inst_29700 = inst_29699;
var inst_29701 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29740__$1 = (function (){var statearr_29743 = state_29740;
(statearr_29743[(7)] = inst_29701);

(statearr_29743[(8)] = inst_29700);

return statearr_29743;
})();
var statearr_29744_29770 = state_29740__$1;
(statearr_29744_29770[(2)] = null);

(statearr_29744_29770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (4))){
var inst_29704 = (state_29740[(9)]);
var inst_29704__$1 = (state_29740[(2)]);
var inst_29705 = (inst_29704__$1 == null);
var inst_29706 = cljs.core.not.call(null,inst_29705);
var state_29740__$1 = (function (){var statearr_29745 = state_29740;
(statearr_29745[(9)] = inst_29704__$1);

return statearr_29745;
})();
if(inst_29706){
var statearr_29746_29771 = state_29740__$1;
(statearr_29746_29771[(1)] = (5));

} else {
var statearr_29747_29772 = state_29740__$1;
(statearr_29747_29772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (15))){
var inst_29730 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29748_29773 = state_29740__$1;
(statearr_29748_29773[(2)] = inst_29730);

(statearr_29748_29773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (13))){
var state_29740__$1 = state_29740;
var statearr_29749_29774 = state_29740__$1;
(statearr_29749_29774[(2)] = null);

(statearr_29749_29774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (6))){
var inst_29700 = (state_29740[(8)]);
var inst_29725 = inst_29700.length;
var inst_29726 = (inst_29725 > (0));
var state_29740__$1 = state_29740;
if(cljs.core.truth_(inst_29726)){
var statearr_29750_29775 = state_29740__$1;
(statearr_29750_29775[(1)] = (12));

} else {
var statearr_29751_29776 = state_29740__$1;
(statearr_29751_29776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (3))){
var inst_29738 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29740__$1,inst_29738);
} else {
if((state_val_29741 === (12))){
var inst_29700 = (state_29740[(8)]);
var inst_29728 = cljs.core.vec.call(null,inst_29700);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29740__$1,(15),out,inst_29728);
} else {
if((state_val_29741 === (2))){
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29740__$1,(4),ch);
} else {
if((state_val_29741 === (11))){
var inst_29708 = (state_29740[(10)]);
var inst_29704 = (state_29740[(9)]);
var inst_29718 = (state_29740[(2)]);
var inst_29719 = [];
var inst_29720 = inst_29719.push(inst_29704);
var inst_29700 = inst_29719;
var inst_29701 = inst_29708;
var state_29740__$1 = (function (){var statearr_29752 = state_29740;
(statearr_29752[(11)] = inst_29718);

(statearr_29752[(7)] = inst_29701);

(statearr_29752[(12)] = inst_29720);

(statearr_29752[(8)] = inst_29700);

return statearr_29752;
})();
var statearr_29753_29777 = state_29740__$1;
(statearr_29753_29777[(2)] = null);

(statearr_29753_29777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (9))){
var inst_29700 = (state_29740[(8)]);
var inst_29716 = cljs.core.vec.call(null,inst_29700);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29740__$1,(11),out,inst_29716);
} else {
if((state_val_29741 === (5))){
var inst_29708 = (state_29740[(10)]);
var inst_29701 = (state_29740[(7)]);
var inst_29704 = (state_29740[(9)]);
var inst_29708__$1 = f.call(null,inst_29704);
var inst_29709 = cljs.core._EQ_.call(null,inst_29708__$1,inst_29701);
var inst_29710 = cljs.core.keyword_identical_QMARK_.call(null,inst_29701,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29711 = ((inst_29709) || (inst_29710));
var state_29740__$1 = (function (){var statearr_29754 = state_29740;
(statearr_29754[(10)] = inst_29708__$1);

return statearr_29754;
})();
if(cljs.core.truth_(inst_29711)){
var statearr_29755_29778 = state_29740__$1;
(statearr_29755_29778[(1)] = (8));

} else {
var statearr_29756_29779 = state_29740__$1;
(statearr_29756_29779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (14))){
var inst_29733 = (state_29740[(2)]);
var inst_29734 = cljs.core.async.close_BANG_.call(null,out);
var state_29740__$1 = (function (){var statearr_29758 = state_29740;
(statearr_29758[(13)] = inst_29733);

return statearr_29758;
})();
var statearr_29759_29780 = state_29740__$1;
(statearr_29759_29780[(2)] = inst_29734);

(statearr_29759_29780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (10))){
var inst_29723 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29760_29781 = state_29740__$1;
(statearr_29760_29781[(2)] = inst_29723);

(statearr_29760_29781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (8))){
var inst_29708 = (state_29740[(10)]);
var inst_29704 = (state_29740[(9)]);
var inst_29700 = (state_29740[(8)]);
var inst_29713 = inst_29700.push(inst_29704);
var tmp29757 = inst_29700;
var inst_29700__$1 = tmp29757;
var inst_29701 = inst_29708;
var state_29740__$1 = (function (){var statearr_29761 = state_29740;
(statearr_29761[(14)] = inst_29713);

(statearr_29761[(7)] = inst_29701);

(statearr_29761[(8)] = inst_29700__$1);

return statearr_29761;
})();
var statearr_29762_29782 = state_29740__$1;
(statearr_29762_29782[(2)] = null);

(statearr_29762_29782[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27757__auto__ = null;
var cljs$core$async$state_machine__27757__auto____0 = (function (){
var statearr_29763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29763[(0)] = cljs$core$async$state_machine__27757__auto__);

(statearr_29763[(1)] = (1));

return statearr_29763;
});
var cljs$core$async$state_machine__27757__auto____1 = (function (state_29740){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_29740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e29764){if((e29764 instanceof Object)){
var ex__27760__auto__ = e29764;
var statearr_29765_29783 = state_29740;
(statearr_29765_29783[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29784 = state_29740;
state_29740 = G__29784;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
cljs$core$async$state_machine__27757__auto__ = function(state_29740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27757__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27757__auto____1.call(this,state_29740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27757__auto____0;
cljs$core$async$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27757__auto____1;
return cljs$core$async$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_29766 = f__27852__auto__.call(null);
(statearr_29766[(6)] = c__27851__auto___29768);

return statearr_29766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1643864558834
