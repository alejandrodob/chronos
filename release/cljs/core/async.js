// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args12951 = [];
var len__6934__auto___12957 = arguments.length;
var i__6935__auto___12958 = (0);
while(true){
if((i__6935__auto___12958 < len__6934__auto___12957)){
args12951.push((arguments[i__6935__auto___12958]));

var G__12959 = (i__6935__auto___12958 + (1));
i__6935__auto___12958 = G__12959;
continue;
} else {
}
break;
}

var G__12953 = args12951.length;
switch (G__12953) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12951.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12954 = (function (f,blockable,meta12955){
this.f = f;
this.blockable = blockable;
this.meta12955 = meta12955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12956,meta12955__$1){
var self__ = this;
var _12956__$1 = this;
return (new cljs.core.async.t_cljs$core$async12954(self__.f,self__.blockable,meta12955__$1));
});

cljs.core.async.t_cljs$core$async12954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12956){
var self__ = this;
var _12956__$1 = this;
return self__.meta12955;
});

cljs.core.async.t_cljs$core$async12954.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta12955], null);
});

cljs.core.async.t_cljs$core$async12954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12954";

cljs.core.async.t_cljs$core$async12954.cljs$lang$ctorPrWriter = (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async12954");
});

cljs.core.async.__GT_t_cljs$core$async12954 = (function cljs$core$async$__GT_t_cljs$core$async12954(f__$1,blockable__$1,meta12955){
return (new cljs.core.async.t_cljs$core$async12954(f__$1,blockable__$1,meta12955));
});

}

return (new cljs.core.async.t_cljs$core$async12954(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args12963 = [];
var len__6934__auto___12966 = arguments.length;
var i__6935__auto___12967 = (0);
while(true){
if((i__6935__auto___12967 < len__6934__auto___12966)){
args12963.push((arguments[i__6935__auto___12967]));

var G__12968 = (i__6935__auto___12967 + (1));
i__6935__auto___12967 = G__12968;
continue;
} else {
}
break;
}

var G__12965 = args12963.length;
switch (G__12965) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12963.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args12970 = [];
var len__6934__auto___12973 = arguments.length;
var i__6935__auto___12974 = (0);
while(true){
if((i__6935__auto___12974 < len__6934__auto___12973)){
args12970.push((arguments[i__6935__auto___12974]));

var G__12975 = (i__6935__auto___12974 + (1));
i__6935__auto___12974 = G__12975;
continue;
} else {
}
break;
}

var G__12972 = args12970.length;
switch (G__12972) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12970.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var args12977 = [];
var len__6934__auto___12980 = arguments.length;
var i__6935__auto___12981 = (0);
while(true){
if((i__6935__auto___12981 < len__6934__auto___12980)){
args12977.push((arguments[i__6935__auto___12981]));

var G__12982 = (i__6935__auto___12981 + (1));
i__6935__auto___12981 = G__12982;
continue;
} else {
}
break;
}

var G__12979 = args12977.length;
switch (G__12979) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12977.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_12984 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12984) : fn1.call(null,val_12984));
} else {
cljs.core.async.impl.dispatch.run(((function (val_12984,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12984) : fn1.call(null,val_12984));
});})(val_12984,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var args12985 = [];
var len__6934__auto___12988 = arguments.length;
var i__6935__auto___12989 = (0);
while(true){
if((i__6935__auto___12989 < len__6934__auto___12988)){
args12985.push((arguments[i__6935__auto___12989]));

var G__12990 = (i__6935__auto___12989 + (1));
i__6935__auto___12989 = G__12990;
continue;
} else {
}
break;
}

var G__12987 = args12985.length;
switch (G__12987) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12985.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6779__auto___12992 = n;
var x_12993 = (0);
while(true){
if((x_12993 < n__6779__auto___12992)){
(a[x_12993] = (0));

var G__12994 = (x_12993 + (1));
x_12993 = G__12994;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__12995 = (i + (1));
i = G__12995;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async12999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12999 = (function (alt_flag,flag,meta13000){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13000 = meta13000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13001,meta13000__$1){
var self__ = this;
var _13001__$1 = this;
return (new cljs.core.async.t_cljs$core$async12999(self__.alt_flag,self__.flag,meta13000__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13001){
var self__ = this;
var _13001__$1 = this;
return self__.meta13000;
});})(flag))
;

cljs.core.async.t_cljs$core$async12999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async12999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12999.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13000], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12999";

cljs.core.async.t_cljs$core$async12999.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async12999");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12999 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12999(alt_flag__$1,flag__$1,meta13000){
return (new cljs.core.async.t_cljs$core$async12999(alt_flag__$1,flag__$1,meta13000));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12999(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13005 = (function (alt_handler,flag,cb,meta13006){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13006 = meta13006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13007,meta13006__$1){
var self__ = this;
var _13007__$1 = this;
return (new cljs.core.async.t_cljs$core$async13005(self__.alt_handler,self__.flag,self__.cb,meta13006__$1));
});

cljs.core.async.t_cljs$core$async13005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13007){
var self__ = this;
var _13007__$1 = this;
return self__.meta13006;
});

cljs.core.async.t_cljs$core$async13005.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13006], null);
});

cljs.core.async.t_cljs$core$async13005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13005";

cljs.core.async.t_cljs$core$async13005.cljs$lang$ctorPrWriter = (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async13005");
});

cljs.core.async.__GT_t_cljs$core$async13005 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13005(alt_handler__$1,flag__$1,cb__$1,meta13006){
return (new cljs.core.async.t_cljs$core$async13005(alt_handler__$1,flag__$1,cb__$1,meta13006));
});

}

return (new cljs.core.async.t_cljs$core$async13005(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13008_SHARP_){
var G__13012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13008_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13012) : fret.call(null,G__13012));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13009_SHARP_){
var G__13013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13009_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13013) : fret.call(null,G__13013));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__5864__auto__ = wport;
if(cljs.core.truth_(or__5864__auto__)){
return or__5864__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13014 = (i + (1));
i = G__13014;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5864__auto__ = ret;
if(cljs.core.truth_(or__5864__auto__)){
return or__5864__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__5852__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5852__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5852__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__6941__auto__ = [];
var len__6934__auto___13020 = arguments.length;
var i__6935__auto___13021 = (0);
while(true){
if((i__6935__auto___13021 < len__6934__auto___13020)){
args__6941__auto__.push((arguments[i__6935__auto___13021]));

var G__13022 = (i__6935__auto___13021 + (1));
i__6935__auto___13021 = G__13022;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((1) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6942__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13017){
var map__13018 = p__13017;
var map__13018__$1 = ((((!((map__13018 == null)))?((((map__13018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13018):map__13018);
var opts = map__13018__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13015){
var G__13016 = cljs.core.first(seq13015);
var seq13015__$1 = cljs.core.next(seq13015);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13016,seq13015__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args13023 = [];
var len__6934__auto___13073 = arguments.length;
var i__6935__auto___13074 = (0);
while(true){
if((i__6935__auto___13074 < len__6934__auto___13073)){
args13023.push((arguments[i__6935__auto___13074]));

var G__13075 = (i__6935__auto___13074 + (1));
i__6935__auto___13074 = G__13075;
continue;
} else {
}
break;
}

var G__13025 = args13023.length;
switch (G__13025) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13023.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12906__auto___13077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___13077){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___13077){
return (function (state_13049){
var state_val_13050 = (state_13049[(1)]);
if((state_val_13050 === (7))){
var inst_13045 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
var statearr_13051_13078 = state_13049__$1;
(statearr_13051_13078[(2)] = inst_13045);

(statearr_13051_13078[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (1))){
var state_13049__$1 = state_13049;
var statearr_13052_13079 = state_13049__$1;
(statearr_13052_13079[(2)] = null);

(statearr_13052_13079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (4))){
var inst_13028 = (state_13049[(7)]);
var inst_13028__$1 = (state_13049[(2)]);
var inst_13029 = (inst_13028__$1 == null);
var state_13049__$1 = (function (){var statearr_13053 = state_13049;
(statearr_13053[(7)] = inst_13028__$1);

return statearr_13053;
})();
if(cljs.core.truth_(inst_13029)){
var statearr_13054_13080 = state_13049__$1;
(statearr_13054_13080[(1)] = (5));

} else {
var statearr_13055_13081 = state_13049__$1;
(statearr_13055_13081[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (13))){
var state_13049__$1 = state_13049;
var statearr_13056_13082 = state_13049__$1;
(statearr_13056_13082[(2)] = null);

(statearr_13056_13082[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (6))){
var inst_13028 = (state_13049[(7)]);
var state_13049__$1 = state_13049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13049__$1,(11),to,inst_13028);
} else {
if((state_val_13050 === (3))){
var inst_13047 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13049__$1,inst_13047);
} else {
if((state_val_13050 === (12))){
var state_13049__$1 = state_13049;
var statearr_13057_13083 = state_13049__$1;
(statearr_13057_13083[(2)] = null);

(statearr_13057_13083[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (2))){
var state_13049__$1 = state_13049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13049__$1,(4),from);
} else {
if((state_val_13050 === (11))){
var inst_13038 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
if(cljs.core.truth_(inst_13038)){
var statearr_13058_13084 = state_13049__$1;
(statearr_13058_13084[(1)] = (12));

} else {
var statearr_13059_13085 = state_13049__$1;
(statearr_13059_13085[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (9))){
var state_13049__$1 = state_13049;
var statearr_13060_13086 = state_13049__$1;
(statearr_13060_13086[(2)] = null);

(statearr_13060_13086[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (5))){
var state_13049__$1 = state_13049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13061_13087 = state_13049__$1;
(statearr_13061_13087[(1)] = (8));

} else {
var statearr_13062_13088 = state_13049__$1;
(statearr_13062_13088[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (14))){
var inst_13043 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
var statearr_13063_13089 = state_13049__$1;
(statearr_13063_13089[(2)] = inst_13043);

(statearr_13063_13089[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (10))){
var inst_13035 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
var statearr_13064_13090 = state_13049__$1;
(statearr_13064_13090[(2)] = inst_13035);

(statearr_13064_13090[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13050 === (8))){
var inst_13032 = cljs.core.async.close_BANG_(to);
var state_13049__$1 = state_13049;
var statearr_13065_13091 = state_13049__$1;
(statearr_13065_13091[(2)] = inst_13032);

(statearr_13065_13091[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___13077))
;
return ((function (switch__12792__auto__,c__12906__auto___13077){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_13069 = [null,null,null,null,null,null,null,null];
(statearr_13069[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_13069[(1)] = (1));

return statearr_13069;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_13049){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13049);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13070){if((e13070 instanceof Object)){
var ex__12796__auto__ = e13070;
var statearr_13071_13092 = state_13049;
(statearr_13071_13092[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13049);

return cljs.core.cst$kw$recur;
} else {
throw e13070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13093 = state_13049;
state_13049 = G__13093;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_13049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_13049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___13077))
})();
var state__12908__auto__ = (function (){var statearr_13072 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___13077);

return statearr_13072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___13077))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__13277){
var vec__13278 = p__13277;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,(1),null);
var job = vec__13278;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12906__auto___13460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___13460,res,vec__13278,v,p,job,jobs,results){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___13460,res,vec__13278,v,p,job,jobs,results){
return (function (state_13283){
var state_val_13284 = (state_13283[(1)]);
if((state_val_13284 === (1))){
var state_13283__$1 = state_13283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13283__$1,(2),res,v);
} else {
if((state_val_13284 === (2))){
var inst_13280 = (state_13283[(2)]);
var inst_13281 = cljs.core.async.close_BANG_(res);
var state_13283__$1 = (function (){var statearr_13285 = state_13283;
(statearr_13285[(7)] = inst_13280);

return statearr_13285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13283__$1,inst_13281);
} else {
return null;
}
}
});})(c__12906__auto___13460,res,vec__13278,v,p,job,jobs,results))
;
return ((function (switch__12792__auto__,c__12906__auto___13460,res,vec__13278,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0 = (function (){
var statearr_13289 = [null,null,null,null,null,null,null,null];
(statearr_13289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__);

(statearr_13289[(1)] = (1));

return statearr_13289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1 = (function (state_13283){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13283);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13290){if((e13290 instanceof Object)){
var ex__12796__auto__ = e13290;
var statearr_13291_13461 = state_13283;
(statearr_13291_13461[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13283);

return cljs.core.cst$kw$recur;
} else {
throw e13290;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13462 = state_13283;
state_13283 = G__13462;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = function(state_13283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1.call(this,state_13283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___13460,res,vec__13278,v,p,job,jobs,results))
})();
var state__12908__auto__ = (function (){var statearr_13292 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___13460);

return statearr_13292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___13460,res,vec__13278,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13293){
var vec__13294 = p__13293;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13294,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13294,(1),null);
var job = vec__13294;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__6779__auto___13463 = n;
var __13464 = (0);
while(true){
if((__13464 < n__6779__auto___13463)){
var G__13295_13465 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13295_13465) {
case "compute":
var c__12906__auto___13467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13464,c__12906__auto___13467,G__13295_13465,n__6779__auto___13463,jobs,results,process,async){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (__13464,c__12906__auto___13467,G__13295_13465,n__6779__auto___13463,jobs,results,process,async){
return (function (state_13308){
var state_val_13309 = (state_13308[(1)]);
if((state_val_13309 === (1))){
var state_13308__$1 = state_13308;
var statearr_13310_13468 = state_13308__$1;
(statearr_13310_13468[(2)] = null);

(statearr_13310_13468[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13309 === (2))){
var state_13308__$1 = state_13308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13308__$1,(4),jobs);
} else {
if((state_val_13309 === (3))){
var inst_13306 = (state_13308[(2)]);
var state_13308__$1 = state_13308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13308__$1,inst_13306);
} else {
if((state_val_13309 === (4))){
var inst_13298 = (state_13308[(2)]);
var inst_13299 = process(inst_13298);
var state_13308__$1 = state_13308;
if(cljs.core.truth_(inst_13299)){
var statearr_13311_13469 = state_13308__$1;
(statearr_13311_13469[(1)] = (5));

} else {
var statearr_13312_13470 = state_13308__$1;
(statearr_13312_13470[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13309 === (5))){
var state_13308__$1 = state_13308;
var statearr_13313_13471 = state_13308__$1;
(statearr_13313_13471[(2)] = null);

(statearr_13313_13471[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13309 === (6))){
var state_13308__$1 = state_13308;
var statearr_13314_13472 = state_13308__$1;
(statearr_13314_13472[(2)] = null);

(statearr_13314_13472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13309 === (7))){
var inst_13304 = (state_13308[(2)]);
var state_13308__$1 = state_13308;
var statearr_13315_13473 = state_13308__$1;
(statearr_13315_13473[(2)] = inst_13304);

(statearr_13315_13473[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__13464,c__12906__auto___13467,G__13295_13465,n__6779__auto___13463,jobs,results,process,async))
;
return ((function (__13464,switch__12792__auto__,c__12906__auto___13467,G__13295_13465,n__6779__auto___13463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0 = (function (){
var statearr_13319 = [null,null,null,null,null,null,null];
(statearr_13319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__);

(statearr_13319[(1)] = (1));

return statearr_13319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1 = (function (state_13308){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13308);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13320){if((e13320 instanceof Object)){
var ex__12796__auto__ = e13320;
var statearr_13321_13474 = state_13308;
(statearr_13321_13474[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13308);

return cljs.core.cst$kw$recur;
} else {
throw e13320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13475 = state_13308;
state_13308 = G__13475;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = function(state_13308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1.call(this,state_13308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__;
})()
;})(__13464,switch__12792__auto__,c__12906__auto___13467,G__13295_13465,n__6779__auto___13463,jobs,results,process,async))
})();
var state__12908__auto__ = (function (){var statearr_13322 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___13467);

return statearr_13322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(__13464,c__12906__auto___13467,G__13295_13465,n__6779__auto___13463,jobs,results,process,async))
);


break;
case "async":
var c__12906__auto___13476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13464,c__12906__auto___13476,G__13295_13465,n__6779__auto___13463,jobs,results,process,async){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (__13464,c__12906__auto___13476,G__13295_13465,n__6779__auto___13463,jobs,results,process,async){
return (function (state_13335){
var state_val_13336 = (state_13335[(1)]);
if((state_val_13336 === (1))){
var state_13335__$1 = state_13335;
var statearr_13337_13477 = state_13335__$1;
(statearr_13337_13477[(2)] = null);

(statearr_13337_13477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13336 === (2))){
var state_13335__$1 = state_13335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13335__$1,(4),jobs);
} else {
if((state_val_13336 === (3))){
var inst_13333 = (state_13335[(2)]);
var state_13335__$1 = state_13335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13335__$1,inst_13333);
} else {
if((state_val_13336 === (4))){
var inst_13325 = (state_13335[(2)]);
var inst_13326 = async(inst_13325);
var state_13335__$1 = state_13335;
if(cljs.core.truth_(inst_13326)){
var statearr_13338_13478 = state_13335__$1;
(statearr_13338_13478[(1)] = (5));

} else {
var statearr_13339_13479 = state_13335__$1;
(statearr_13339_13479[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13336 === (5))){
var state_13335__$1 = state_13335;
var statearr_13340_13480 = state_13335__$1;
(statearr_13340_13480[(2)] = null);

(statearr_13340_13480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13336 === (6))){
var state_13335__$1 = state_13335;
var statearr_13341_13481 = state_13335__$1;
(statearr_13341_13481[(2)] = null);

(statearr_13341_13481[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13336 === (7))){
var inst_13331 = (state_13335[(2)]);
var state_13335__$1 = state_13335;
var statearr_13342_13482 = state_13335__$1;
(statearr_13342_13482[(2)] = inst_13331);

(statearr_13342_13482[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__13464,c__12906__auto___13476,G__13295_13465,n__6779__auto___13463,jobs,results,process,async))
;
return ((function (__13464,switch__12792__auto__,c__12906__auto___13476,G__13295_13465,n__6779__auto___13463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0 = (function (){
var statearr_13346 = [null,null,null,null,null,null,null];
(statearr_13346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__);

(statearr_13346[(1)] = (1));

return statearr_13346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1 = (function (state_13335){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13335);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13347){if((e13347 instanceof Object)){
var ex__12796__auto__ = e13347;
var statearr_13348_13483 = state_13335;
(statearr_13348_13483[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13335);

return cljs.core.cst$kw$recur;
} else {
throw e13347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13484 = state_13335;
state_13335 = G__13484;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = function(state_13335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1.call(this,state_13335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__;
})()
;})(__13464,switch__12792__auto__,c__12906__auto___13476,G__13295_13465,n__6779__auto___13463,jobs,results,process,async))
})();
var state__12908__auto__ = (function (){var statearr_13349 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___13476);

return statearr_13349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(__13464,c__12906__auto___13476,G__13295_13465,n__6779__auto___13463,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13485 = (__13464 + (1));
__13464 = G__13485;
continue;
} else {
}
break;
}

var c__12906__auto___13486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___13486,jobs,results,process,async){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___13486,jobs,results,process,async){
return (function (state_13371){
var state_val_13372 = (state_13371[(1)]);
if((state_val_13372 === (1))){
var state_13371__$1 = state_13371;
var statearr_13373_13487 = state_13371__$1;
(statearr_13373_13487[(2)] = null);

(statearr_13373_13487[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13372 === (2))){
var state_13371__$1 = state_13371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13371__$1,(4),from);
} else {
if((state_val_13372 === (3))){
var inst_13369 = (state_13371[(2)]);
var state_13371__$1 = state_13371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13371__$1,inst_13369);
} else {
if((state_val_13372 === (4))){
var inst_13352 = (state_13371[(7)]);
var inst_13352__$1 = (state_13371[(2)]);
var inst_13353 = (inst_13352__$1 == null);
var state_13371__$1 = (function (){var statearr_13374 = state_13371;
(statearr_13374[(7)] = inst_13352__$1);

return statearr_13374;
})();
if(cljs.core.truth_(inst_13353)){
var statearr_13375_13488 = state_13371__$1;
(statearr_13375_13488[(1)] = (5));

} else {
var statearr_13376_13489 = state_13371__$1;
(statearr_13376_13489[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13372 === (5))){
var inst_13355 = cljs.core.async.close_BANG_(jobs);
var state_13371__$1 = state_13371;
var statearr_13377_13490 = state_13371__$1;
(statearr_13377_13490[(2)] = inst_13355);

(statearr_13377_13490[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13372 === (6))){
var inst_13352 = (state_13371[(7)]);
var inst_13357 = (state_13371[(8)]);
var inst_13357__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13359 = [inst_13352,inst_13357__$1];
var inst_13360 = (new cljs.core.PersistentVector(null,2,(5),inst_13358,inst_13359,null));
var state_13371__$1 = (function (){var statearr_13378 = state_13371;
(statearr_13378[(8)] = inst_13357__$1);

return statearr_13378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13371__$1,(8),jobs,inst_13360);
} else {
if((state_val_13372 === (7))){
var inst_13367 = (state_13371[(2)]);
var state_13371__$1 = state_13371;
var statearr_13379_13491 = state_13371__$1;
(statearr_13379_13491[(2)] = inst_13367);

(statearr_13379_13491[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13372 === (8))){
var inst_13357 = (state_13371[(8)]);
var inst_13362 = (state_13371[(2)]);
var state_13371__$1 = (function (){var statearr_13380 = state_13371;
(statearr_13380[(9)] = inst_13362);

return statearr_13380;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13371__$1,(9),results,inst_13357);
} else {
if((state_val_13372 === (9))){
var inst_13364 = (state_13371[(2)]);
var state_13371__$1 = (function (){var statearr_13381 = state_13371;
(statearr_13381[(10)] = inst_13364);

return statearr_13381;
})();
var statearr_13382_13492 = state_13371__$1;
(statearr_13382_13492[(2)] = null);

(statearr_13382_13492[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___13486,jobs,results,process,async))
;
return ((function (switch__12792__auto__,c__12906__auto___13486,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0 = (function (){
var statearr_13386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__);

(statearr_13386[(1)] = (1));

return statearr_13386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1 = (function (state_13371){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13371);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13387){if((e13387 instanceof Object)){
var ex__12796__auto__ = e13387;
var statearr_13388_13493 = state_13371;
(statearr_13388_13493[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13371);

return cljs.core.cst$kw$recur;
} else {
throw e13387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13494 = state_13371;
state_13371 = G__13494;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = function(state_13371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1.call(this,state_13371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___13486,jobs,results,process,async))
})();
var state__12908__auto__ = (function (){var statearr_13389 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___13486);

return statearr_13389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___13486,jobs,results,process,async))
);


var c__12906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto__,jobs,results,process,async){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto__,jobs,results,process,async){
return (function (state_13427){
var state_val_13428 = (state_13427[(1)]);
if((state_val_13428 === (7))){
var inst_13423 = (state_13427[(2)]);
var state_13427__$1 = state_13427;
var statearr_13429_13495 = state_13427__$1;
(statearr_13429_13495[(2)] = inst_13423);

(statearr_13429_13495[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (20))){
var state_13427__$1 = state_13427;
var statearr_13430_13496 = state_13427__$1;
(statearr_13430_13496[(2)] = null);

(statearr_13430_13496[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (1))){
var state_13427__$1 = state_13427;
var statearr_13431_13497 = state_13427__$1;
(statearr_13431_13497[(2)] = null);

(statearr_13431_13497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (4))){
var inst_13392 = (state_13427[(7)]);
var inst_13392__$1 = (state_13427[(2)]);
var inst_13393 = (inst_13392__$1 == null);
var state_13427__$1 = (function (){var statearr_13432 = state_13427;
(statearr_13432[(7)] = inst_13392__$1);

return statearr_13432;
})();
if(cljs.core.truth_(inst_13393)){
var statearr_13433_13498 = state_13427__$1;
(statearr_13433_13498[(1)] = (5));

} else {
var statearr_13434_13499 = state_13427__$1;
(statearr_13434_13499[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (15))){
var inst_13405 = (state_13427[(8)]);
var state_13427__$1 = state_13427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13427__$1,(18),to,inst_13405);
} else {
if((state_val_13428 === (21))){
var inst_13418 = (state_13427[(2)]);
var state_13427__$1 = state_13427;
var statearr_13435_13500 = state_13427__$1;
(statearr_13435_13500[(2)] = inst_13418);

(statearr_13435_13500[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (13))){
var inst_13420 = (state_13427[(2)]);
var state_13427__$1 = (function (){var statearr_13436 = state_13427;
(statearr_13436[(9)] = inst_13420);

return statearr_13436;
})();
var statearr_13437_13501 = state_13427__$1;
(statearr_13437_13501[(2)] = null);

(statearr_13437_13501[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (6))){
var inst_13392 = (state_13427[(7)]);
var state_13427__$1 = state_13427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13427__$1,(11),inst_13392);
} else {
if((state_val_13428 === (17))){
var inst_13413 = (state_13427[(2)]);
var state_13427__$1 = state_13427;
if(cljs.core.truth_(inst_13413)){
var statearr_13438_13502 = state_13427__$1;
(statearr_13438_13502[(1)] = (19));

} else {
var statearr_13439_13503 = state_13427__$1;
(statearr_13439_13503[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (3))){
var inst_13425 = (state_13427[(2)]);
var state_13427__$1 = state_13427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13427__$1,inst_13425);
} else {
if((state_val_13428 === (12))){
var inst_13402 = (state_13427[(10)]);
var state_13427__$1 = state_13427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13427__$1,(14),inst_13402);
} else {
if((state_val_13428 === (2))){
var state_13427__$1 = state_13427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13427__$1,(4),results);
} else {
if((state_val_13428 === (19))){
var state_13427__$1 = state_13427;
var statearr_13440_13504 = state_13427__$1;
(statearr_13440_13504[(2)] = null);

(statearr_13440_13504[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (11))){
var inst_13402 = (state_13427[(2)]);
var state_13427__$1 = (function (){var statearr_13441 = state_13427;
(statearr_13441[(10)] = inst_13402);

return statearr_13441;
})();
var statearr_13442_13505 = state_13427__$1;
(statearr_13442_13505[(2)] = null);

(statearr_13442_13505[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (9))){
var state_13427__$1 = state_13427;
var statearr_13443_13506 = state_13427__$1;
(statearr_13443_13506[(2)] = null);

(statearr_13443_13506[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (5))){
var state_13427__$1 = state_13427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13444_13507 = state_13427__$1;
(statearr_13444_13507[(1)] = (8));

} else {
var statearr_13445_13508 = state_13427__$1;
(statearr_13445_13508[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (14))){
var inst_13407 = (state_13427[(11)]);
var inst_13405 = (state_13427[(8)]);
var inst_13405__$1 = (state_13427[(2)]);
var inst_13406 = (inst_13405__$1 == null);
var inst_13407__$1 = cljs.core.not(inst_13406);
var state_13427__$1 = (function (){var statearr_13446 = state_13427;
(statearr_13446[(11)] = inst_13407__$1);

(statearr_13446[(8)] = inst_13405__$1);

return statearr_13446;
})();
if(inst_13407__$1){
var statearr_13447_13509 = state_13427__$1;
(statearr_13447_13509[(1)] = (15));

} else {
var statearr_13448_13510 = state_13427__$1;
(statearr_13448_13510[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (16))){
var inst_13407 = (state_13427[(11)]);
var state_13427__$1 = state_13427;
var statearr_13449_13511 = state_13427__$1;
(statearr_13449_13511[(2)] = inst_13407);

(statearr_13449_13511[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (10))){
var inst_13399 = (state_13427[(2)]);
var state_13427__$1 = state_13427;
var statearr_13450_13512 = state_13427__$1;
(statearr_13450_13512[(2)] = inst_13399);

(statearr_13450_13512[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (18))){
var inst_13410 = (state_13427[(2)]);
var state_13427__$1 = state_13427;
var statearr_13451_13513 = state_13427__$1;
(statearr_13451_13513[(2)] = inst_13410);

(statearr_13451_13513[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13428 === (8))){
var inst_13396 = cljs.core.async.close_BANG_(to);
var state_13427__$1 = state_13427;
var statearr_13452_13514 = state_13427__$1;
(statearr_13452_13514[(2)] = inst_13396);

(statearr_13452_13514[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto__,jobs,results,process,async))
;
return ((function (switch__12792__auto__,c__12906__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0 = (function (){
var statearr_13456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__);

(statearr_13456[(1)] = (1));

return statearr_13456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1 = (function (state_13427){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13427);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13457){if((e13457 instanceof Object)){
var ex__12796__auto__ = e13457;
var statearr_13458_13515 = state_13427;
(statearr_13458_13515[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13427);

return cljs.core.cst$kw$recur;
} else {
throw e13457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13516 = state_13427;
state_13427 = G__13516;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__ = function(state_13427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1.call(this,state_13427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12793__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto__,jobs,results,process,async))
})();
var state__12908__auto__ = (function (){var statearr_13459 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto__);

return statearr_13459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto__,jobs,results,process,async))
);

return c__12906__auto__;
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
var args13517 = [];
var len__6934__auto___13520 = arguments.length;
var i__6935__auto___13521 = (0);
while(true){
if((i__6935__auto___13521 < len__6934__auto___13520)){
args13517.push((arguments[i__6935__auto___13521]));

var G__13522 = (i__6935__auto___13521 + (1));
i__6935__auto___13521 = G__13522;
continue;
} else {
}
break;
}

var G__13519 = args13517.length;
switch (G__13519) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13517.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args13524 = [];
var len__6934__auto___13527 = arguments.length;
var i__6935__auto___13528 = (0);
while(true){
if((i__6935__auto___13528 < len__6934__auto___13527)){
args13524.push((arguments[i__6935__auto___13528]));

var G__13529 = (i__6935__auto___13528 + (1));
i__6935__auto___13528 = G__13529;
continue;
} else {
}
break;
}

var G__13526 = args13524.length;
switch (G__13526) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13524.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args13531 = [];
var len__6934__auto___13584 = arguments.length;
var i__6935__auto___13585 = (0);
while(true){
if((i__6935__auto___13585 < len__6934__auto___13584)){
args13531.push((arguments[i__6935__auto___13585]));

var G__13586 = (i__6935__auto___13585 + (1));
i__6935__auto___13585 = G__13586;
continue;
} else {
}
break;
}

var G__13533 = args13531.length;
switch (G__13533) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13531.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12906__auto___13588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___13588,tc,fc){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___13588,tc,fc){
return (function (state_13559){
var state_val_13560 = (state_13559[(1)]);
if((state_val_13560 === (7))){
var inst_13555 = (state_13559[(2)]);
var state_13559__$1 = state_13559;
var statearr_13561_13589 = state_13559__$1;
(statearr_13561_13589[(2)] = inst_13555);

(statearr_13561_13589[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (1))){
var state_13559__$1 = state_13559;
var statearr_13562_13590 = state_13559__$1;
(statearr_13562_13590[(2)] = null);

(statearr_13562_13590[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (4))){
var inst_13536 = (state_13559[(7)]);
var inst_13536__$1 = (state_13559[(2)]);
var inst_13537 = (inst_13536__$1 == null);
var state_13559__$1 = (function (){var statearr_13563 = state_13559;
(statearr_13563[(7)] = inst_13536__$1);

return statearr_13563;
})();
if(cljs.core.truth_(inst_13537)){
var statearr_13564_13591 = state_13559__$1;
(statearr_13564_13591[(1)] = (5));

} else {
var statearr_13565_13592 = state_13559__$1;
(statearr_13565_13592[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (13))){
var state_13559__$1 = state_13559;
var statearr_13566_13593 = state_13559__$1;
(statearr_13566_13593[(2)] = null);

(statearr_13566_13593[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (6))){
var inst_13536 = (state_13559[(7)]);
var inst_13542 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13536) : p.call(null,inst_13536));
var state_13559__$1 = state_13559;
if(cljs.core.truth_(inst_13542)){
var statearr_13567_13594 = state_13559__$1;
(statearr_13567_13594[(1)] = (9));

} else {
var statearr_13568_13595 = state_13559__$1;
(statearr_13568_13595[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (3))){
var inst_13557 = (state_13559[(2)]);
var state_13559__$1 = state_13559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13559__$1,inst_13557);
} else {
if((state_val_13560 === (12))){
var state_13559__$1 = state_13559;
var statearr_13569_13596 = state_13559__$1;
(statearr_13569_13596[(2)] = null);

(statearr_13569_13596[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (2))){
var state_13559__$1 = state_13559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13559__$1,(4),ch);
} else {
if((state_val_13560 === (11))){
var inst_13536 = (state_13559[(7)]);
var inst_13546 = (state_13559[(2)]);
var state_13559__$1 = state_13559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13559__$1,(8),inst_13546,inst_13536);
} else {
if((state_val_13560 === (9))){
var state_13559__$1 = state_13559;
var statearr_13570_13597 = state_13559__$1;
(statearr_13570_13597[(2)] = tc);

(statearr_13570_13597[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (5))){
var inst_13539 = cljs.core.async.close_BANG_(tc);
var inst_13540 = cljs.core.async.close_BANG_(fc);
var state_13559__$1 = (function (){var statearr_13571 = state_13559;
(statearr_13571[(8)] = inst_13539);

return statearr_13571;
})();
var statearr_13572_13598 = state_13559__$1;
(statearr_13572_13598[(2)] = inst_13540);

(statearr_13572_13598[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (14))){
var inst_13553 = (state_13559[(2)]);
var state_13559__$1 = state_13559;
var statearr_13573_13599 = state_13559__$1;
(statearr_13573_13599[(2)] = inst_13553);

(statearr_13573_13599[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (10))){
var state_13559__$1 = state_13559;
var statearr_13574_13600 = state_13559__$1;
(statearr_13574_13600[(2)] = fc);

(statearr_13574_13600[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13560 === (8))){
var inst_13548 = (state_13559[(2)]);
var state_13559__$1 = state_13559;
if(cljs.core.truth_(inst_13548)){
var statearr_13575_13601 = state_13559__$1;
(statearr_13575_13601[(1)] = (12));

} else {
var statearr_13576_13602 = state_13559__$1;
(statearr_13576_13602[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___13588,tc,fc))
;
return ((function (switch__12792__auto__,c__12906__auto___13588,tc,fc){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_13580 = [null,null,null,null,null,null,null,null,null];
(statearr_13580[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_13580[(1)] = (1));

return statearr_13580;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_13559){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13559);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13581){if((e13581 instanceof Object)){
var ex__12796__auto__ = e13581;
var statearr_13582_13603 = state_13559;
(statearr_13582_13603[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13559);

return cljs.core.cst$kw$recur;
} else {
throw e13581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13604 = state_13559;
state_13559 = G__13604;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_13559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_13559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___13588,tc,fc))
})();
var state__12908__auto__ = (function (){var statearr_13583 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___13588);

return statearr_13583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___13588,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto__){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto__){
return (function (state_13668){
var state_val_13669 = (state_13668[(1)]);
if((state_val_13669 === (7))){
var inst_13664 = (state_13668[(2)]);
var state_13668__$1 = state_13668;
var statearr_13670_13691 = state_13668__$1;
(statearr_13670_13691[(2)] = inst_13664);

(statearr_13670_13691[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13669 === (1))){
var inst_13648 = init;
var state_13668__$1 = (function (){var statearr_13671 = state_13668;
(statearr_13671[(7)] = inst_13648);

return statearr_13671;
})();
var statearr_13672_13692 = state_13668__$1;
(statearr_13672_13692[(2)] = null);

(statearr_13672_13692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13669 === (4))){
var inst_13651 = (state_13668[(8)]);
var inst_13651__$1 = (state_13668[(2)]);
var inst_13652 = (inst_13651__$1 == null);
var state_13668__$1 = (function (){var statearr_13673 = state_13668;
(statearr_13673[(8)] = inst_13651__$1);

return statearr_13673;
})();
if(cljs.core.truth_(inst_13652)){
var statearr_13674_13693 = state_13668__$1;
(statearr_13674_13693[(1)] = (5));

} else {
var statearr_13675_13694 = state_13668__$1;
(statearr_13675_13694[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13669 === (6))){
var inst_13655 = (state_13668[(9)]);
var inst_13648 = (state_13668[(7)]);
var inst_13651 = (state_13668[(8)]);
var inst_13655__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13648,inst_13651) : f.call(null,inst_13648,inst_13651));
var inst_13656 = cljs.core.reduced_QMARK_(inst_13655__$1);
var state_13668__$1 = (function (){var statearr_13676 = state_13668;
(statearr_13676[(9)] = inst_13655__$1);

return statearr_13676;
})();
if(inst_13656){
var statearr_13677_13695 = state_13668__$1;
(statearr_13677_13695[(1)] = (8));

} else {
var statearr_13678_13696 = state_13668__$1;
(statearr_13678_13696[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13669 === (3))){
var inst_13666 = (state_13668[(2)]);
var state_13668__$1 = state_13668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13668__$1,inst_13666);
} else {
if((state_val_13669 === (2))){
var state_13668__$1 = state_13668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13668__$1,(4),ch);
} else {
if((state_val_13669 === (9))){
var inst_13655 = (state_13668[(9)]);
var inst_13648 = inst_13655;
var state_13668__$1 = (function (){var statearr_13679 = state_13668;
(statearr_13679[(7)] = inst_13648);

return statearr_13679;
})();
var statearr_13680_13697 = state_13668__$1;
(statearr_13680_13697[(2)] = null);

(statearr_13680_13697[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13669 === (5))){
var inst_13648 = (state_13668[(7)]);
var state_13668__$1 = state_13668;
var statearr_13681_13698 = state_13668__$1;
(statearr_13681_13698[(2)] = inst_13648);

(statearr_13681_13698[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13669 === (10))){
var inst_13662 = (state_13668[(2)]);
var state_13668__$1 = state_13668;
var statearr_13682_13699 = state_13668__$1;
(statearr_13682_13699[(2)] = inst_13662);

(statearr_13682_13699[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13669 === (8))){
var inst_13655 = (state_13668[(9)]);
var inst_13658 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_13655) : cljs.core.deref.call(null,inst_13655));
var state_13668__$1 = state_13668;
var statearr_13683_13700 = state_13668__$1;
(statearr_13683_13700[(2)] = inst_13658);

(statearr_13683_13700[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto__))
;
return ((function (switch__12792__auto__,c__12906__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12793__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12793__auto____0 = (function (){
var statearr_13687 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13687[(0)] = cljs$core$async$reduce_$_state_machine__12793__auto__);

(statearr_13687[(1)] = (1));

return statearr_13687;
});
var cljs$core$async$reduce_$_state_machine__12793__auto____1 = (function (state_13668){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13668);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13688){if((e13688 instanceof Object)){
var ex__12796__auto__ = e13688;
var statearr_13689_13701 = state_13668;
(statearr_13689_13701[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13668);

return cljs.core.cst$kw$recur;
} else {
throw e13688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13702 = state_13668;
state_13668 = G__13702;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12793__auto__ = function(state_13668){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12793__auto____1.call(this,state_13668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12793__auto____0;
cljs$core$async$reduce_$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12793__auto____1;
return cljs$core$async$reduce_$_state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto__))
})();
var state__12908__auto__ = (function (){var statearr_13690 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto__);

return statearr_13690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto__))
);

return c__12906__auto__;
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
var args13703 = [];
var len__6934__auto___13755 = arguments.length;
var i__6935__auto___13756 = (0);
while(true){
if((i__6935__auto___13756 < len__6934__auto___13755)){
args13703.push((arguments[i__6935__auto___13756]));

var G__13757 = (i__6935__auto___13756 + (1));
i__6935__auto___13756 = G__13757;
continue;
} else {
}
break;
}

var G__13705 = args13703.length;
switch (G__13705) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13703.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto__){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto__){
return (function (state_13730){
var state_val_13731 = (state_13730[(1)]);
if((state_val_13731 === (7))){
var inst_13712 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
var statearr_13732_13759 = state_13730__$1;
(statearr_13732_13759[(2)] = inst_13712);

(statearr_13732_13759[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (1))){
var inst_13706 = cljs.core.seq(coll);
var inst_13707 = inst_13706;
var state_13730__$1 = (function (){var statearr_13733 = state_13730;
(statearr_13733[(7)] = inst_13707);

return statearr_13733;
})();
var statearr_13734_13760 = state_13730__$1;
(statearr_13734_13760[(2)] = null);

(statearr_13734_13760[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (4))){
var inst_13707 = (state_13730[(7)]);
var inst_13710 = cljs.core.first(inst_13707);
var state_13730__$1 = state_13730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13730__$1,(7),ch,inst_13710);
} else {
if((state_val_13731 === (13))){
var inst_13724 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
var statearr_13735_13761 = state_13730__$1;
(statearr_13735_13761[(2)] = inst_13724);

(statearr_13735_13761[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (6))){
var inst_13715 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
if(cljs.core.truth_(inst_13715)){
var statearr_13736_13762 = state_13730__$1;
(statearr_13736_13762[(1)] = (8));

} else {
var statearr_13737_13763 = state_13730__$1;
(statearr_13737_13763[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (3))){
var inst_13728 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13730__$1,inst_13728);
} else {
if((state_val_13731 === (12))){
var state_13730__$1 = state_13730;
var statearr_13738_13764 = state_13730__$1;
(statearr_13738_13764[(2)] = null);

(statearr_13738_13764[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (2))){
var inst_13707 = (state_13730[(7)]);
var state_13730__$1 = state_13730;
if(cljs.core.truth_(inst_13707)){
var statearr_13739_13765 = state_13730__$1;
(statearr_13739_13765[(1)] = (4));

} else {
var statearr_13740_13766 = state_13730__$1;
(statearr_13740_13766[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (11))){
var inst_13721 = cljs.core.async.close_BANG_(ch);
var state_13730__$1 = state_13730;
var statearr_13741_13767 = state_13730__$1;
(statearr_13741_13767[(2)] = inst_13721);

(statearr_13741_13767[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (9))){
var state_13730__$1 = state_13730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13742_13768 = state_13730__$1;
(statearr_13742_13768[(1)] = (11));

} else {
var statearr_13743_13769 = state_13730__$1;
(statearr_13743_13769[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (5))){
var inst_13707 = (state_13730[(7)]);
var state_13730__$1 = state_13730;
var statearr_13744_13770 = state_13730__$1;
(statearr_13744_13770[(2)] = inst_13707);

(statearr_13744_13770[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (10))){
var inst_13726 = (state_13730[(2)]);
var state_13730__$1 = state_13730;
var statearr_13745_13771 = state_13730__$1;
(statearr_13745_13771[(2)] = inst_13726);

(statearr_13745_13771[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13731 === (8))){
var inst_13707 = (state_13730[(7)]);
var inst_13717 = cljs.core.next(inst_13707);
var inst_13707__$1 = inst_13717;
var state_13730__$1 = (function (){var statearr_13746 = state_13730;
(statearr_13746[(7)] = inst_13707__$1);

return statearr_13746;
})();
var statearr_13747_13772 = state_13730__$1;
(statearr_13747_13772[(2)] = null);

(statearr_13747_13772[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto__))
;
return ((function (switch__12792__auto__,c__12906__auto__){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_13751 = [null,null,null,null,null,null,null,null];
(statearr_13751[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_13751[(1)] = (1));

return statearr_13751;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_13730){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_13730);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e13752){if((e13752 instanceof Object)){
var ex__12796__auto__ = e13752;
var statearr_13753_13773 = state_13730;
(statearr_13753_13773[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13730);

return cljs.core.cst$kw$recur;
} else {
throw e13752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__13774 = state_13730;
state_13730 = G__13774;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_13730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_13730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto__))
})();
var state__12908__auto__ = (function (){var statearr_13754 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_13754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto__);

return statearr_13754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto__))
);

return c__12906__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6527__auto__ = (((_ == null))?null:_);
var m__6528__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6528__auto__.call(null,_));
} else {
var m__6528__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6528__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6527__auto__ = (((m == null))?null:m);
var m__6528__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6528__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6528__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6528__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6527__auto__ = (((m == null))?null:m);
var m__6528__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6528__auto__.call(null,m,ch));
} else {
var m__6528__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6528__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6527__auto__ = (((m == null))?null:m);
var m__6528__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6528__auto__.call(null,m));
} else {
var m__6528__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6528__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
var cs = (function (){var G__13999 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13999) : cljs.core.atom.call(null,G__13999));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14000 = (function (mult,ch,cs,meta14001){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14001 = meta14001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14002,meta14001__$1){
var self__ = this;
var _14002__$1 = this;
return (new cljs.core.async.t_cljs$core$async14000(self__.mult,self__.ch,self__.cs,meta14001__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14002){
var self__ = this;
var _14002__$1 = this;
return self__.meta14001;
});})(cs))
;

cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14003_14223 = self__.cs;
var G__14004_14224 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14003_14223,G__14004_14224) : cljs.core.reset_BANG_.call(null,G__14003_14223,G__14004_14224));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14000.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14001], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14000";

cljs.core.async.t_cljs$core$async14000.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async14000");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14000 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14000(mult__$1,ch__$1,cs__$1,meta14001){
return (new cljs.core.async.t_cljs$core$async14000(mult__$1,ch__$1,cs__$1,meta14001));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14000(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12906__auto___14225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___14225,cs,m,dchan,dctr,done){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___14225,cs,m,dchan,dctr,done){
return (function (state_14135){
var state_val_14136 = (state_14135[(1)]);
if((state_val_14136 === (7))){
var inst_14131 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14137_14226 = state_14135__$1;
(statearr_14137_14226[(2)] = inst_14131);

(statearr_14137_14226[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (20))){
var inst_14036 = (state_14135[(7)]);
var inst_14046 = cljs.core.first(inst_14036);
var inst_14047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14046,(0),null);
var inst_14048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14046,(1),null);
var state_14135__$1 = (function (){var statearr_14138 = state_14135;
(statearr_14138[(8)] = inst_14047);

return statearr_14138;
})();
if(cljs.core.truth_(inst_14048)){
var statearr_14139_14227 = state_14135__$1;
(statearr_14139_14227[(1)] = (22));

} else {
var statearr_14140_14228 = state_14135__$1;
(statearr_14140_14228[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (27))){
var inst_14007 = (state_14135[(9)]);
var inst_14078 = (state_14135[(10)]);
var inst_14083 = (state_14135[(11)]);
var inst_14076 = (state_14135[(12)]);
var inst_14083__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14076,inst_14078);
var inst_14084 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14083__$1,inst_14007,done);
var state_14135__$1 = (function (){var statearr_14141 = state_14135;
(statearr_14141[(11)] = inst_14083__$1);

return statearr_14141;
})();
if(cljs.core.truth_(inst_14084)){
var statearr_14142_14229 = state_14135__$1;
(statearr_14142_14229[(1)] = (30));

} else {
var statearr_14143_14230 = state_14135__$1;
(statearr_14143_14230[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (1))){
var state_14135__$1 = state_14135;
var statearr_14144_14231 = state_14135__$1;
(statearr_14144_14231[(2)] = null);

(statearr_14144_14231[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (24))){
var inst_14036 = (state_14135[(7)]);
var inst_14053 = (state_14135[(2)]);
var inst_14054 = cljs.core.next(inst_14036);
var inst_14016 = inst_14054;
var inst_14017 = null;
var inst_14018 = (0);
var inst_14019 = (0);
var state_14135__$1 = (function (){var statearr_14145 = state_14135;
(statearr_14145[(13)] = inst_14019);

(statearr_14145[(14)] = inst_14018);

(statearr_14145[(15)] = inst_14016);

(statearr_14145[(16)] = inst_14017);

(statearr_14145[(17)] = inst_14053);

return statearr_14145;
})();
var statearr_14146_14232 = state_14135__$1;
(statearr_14146_14232[(2)] = null);

(statearr_14146_14232[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (39))){
var state_14135__$1 = state_14135;
var statearr_14150_14233 = state_14135__$1;
(statearr_14150_14233[(2)] = null);

(statearr_14150_14233[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (4))){
var inst_14007 = (state_14135[(9)]);
var inst_14007__$1 = (state_14135[(2)]);
var inst_14008 = (inst_14007__$1 == null);
var state_14135__$1 = (function (){var statearr_14151 = state_14135;
(statearr_14151[(9)] = inst_14007__$1);

return statearr_14151;
})();
if(cljs.core.truth_(inst_14008)){
var statearr_14152_14234 = state_14135__$1;
(statearr_14152_14234[(1)] = (5));

} else {
var statearr_14153_14235 = state_14135__$1;
(statearr_14153_14235[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (15))){
var inst_14019 = (state_14135[(13)]);
var inst_14018 = (state_14135[(14)]);
var inst_14016 = (state_14135[(15)]);
var inst_14017 = (state_14135[(16)]);
var inst_14032 = (state_14135[(2)]);
var inst_14033 = (inst_14019 + (1));
var tmp14147 = inst_14018;
var tmp14148 = inst_14016;
var tmp14149 = inst_14017;
var inst_14016__$1 = tmp14148;
var inst_14017__$1 = tmp14149;
var inst_14018__$1 = tmp14147;
var inst_14019__$1 = inst_14033;
var state_14135__$1 = (function (){var statearr_14154 = state_14135;
(statearr_14154[(13)] = inst_14019__$1);

(statearr_14154[(14)] = inst_14018__$1);

(statearr_14154[(18)] = inst_14032);

(statearr_14154[(15)] = inst_14016__$1);

(statearr_14154[(16)] = inst_14017__$1);

return statearr_14154;
})();
var statearr_14155_14236 = state_14135__$1;
(statearr_14155_14236[(2)] = null);

(statearr_14155_14236[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (21))){
var inst_14057 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14159_14237 = state_14135__$1;
(statearr_14159_14237[(2)] = inst_14057);

(statearr_14159_14237[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (31))){
var inst_14083 = (state_14135[(11)]);
var inst_14087 = done(null);
var inst_14088 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14083);
var state_14135__$1 = (function (){var statearr_14160 = state_14135;
(statearr_14160[(19)] = inst_14087);

return statearr_14160;
})();
var statearr_14161_14238 = state_14135__$1;
(statearr_14161_14238[(2)] = inst_14088);

(statearr_14161_14238[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (32))){
var inst_14078 = (state_14135[(10)]);
var inst_14075 = (state_14135[(20)]);
var inst_14076 = (state_14135[(12)]);
var inst_14077 = (state_14135[(21)]);
var inst_14090 = (state_14135[(2)]);
var inst_14091 = (inst_14078 + (1));
var tmp14156 = inst_14075;
var tmp14157 = inst_14076;
var tmp14158 = inst_14077;
var inst_14075__$1 = tmp14156;
var inst_14076__$1 = tmp14157;
var inst_14077__$1 = tmp14158;
var inst_14078__$1 = inst_14091;
var state_14135__$1 = (function (){var statearr_14162 = state_14135;
(statearr_14162[(10)] = inst_14078__$1);

(statearr_14162[(20)] = inst_14075__$1);

(statearr_14162[(22)] = inst_14090);

(statearr_14162[(12)] = inst_14076__$1);

(statearr_14162[(21)] = inst_14077__$1);

return statearr_14162;
})();
var statearr_14163_14239 = state_14135__$1;
(statearr_14163_14239[(2)] = null);

(statearr_14163_14239[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (40))){
var inst_14103 = (state_14135[(23)]);
var inst_14107 = done(null);
var inst_14108 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14103);
var state_14135__$1 = (function (){var statearr_14164 = state_14135;
(statearr_14164[(24)] = inst_14107);

return statearr_14164;
})();
var statearr_14165_14240 = state_14135__$1;
(statearr_14165_14240[(2)] = inst_14108);

(statearr_14165_14240[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (33))){
var inst_14094 = (state_14135[(25)]);
var inst_14096 = cljs.core.chunked_seq_QMARK_(inst_14094);
var state_14135__$1 = state_14135;
if(inst_14096){
var statearr_14166_14241 = state_14135__$1;
(statearr_14166_14241[(1)] = (36));

} else {
var statearr_14167_14242 = state_14135__$1;
(statearr_14167_14242[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (13))){
var inst_14026 = (state_14135[(26)]);
var inst_14029 = cljs.core.async.close_BANG_(inst_14026);
var state_14135__$1 = state_14135;
var statearr_14168_14243 = state_14135__$1;
(statearr_14168_14243[(2)] = inst_14029);

(statearr_14168_14243[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (22))){
var inst_14047 = (state_14135[(8)]);
var inst_14050 = cljs.core.async.close_BANG_(inst_14047);
var state_14135__$1 = state_14135;
var statearr_14169_14244 = state_14135__$1;
(statearr_14169_14244[(2)] = inst_14050);

(statearr_14169_14244[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (36))){
var inst_14094 = (state_14135[(25)]);
var inst_14098 = cljs.core.chunk_first(inst_14094);
var inst_14099 = cljs.core.chunk_rest(inst_14094);
var inst_14100 = cljs.core.count(inst_14098);
var inst_14075 = inst_14099;
var inst_14076 = inst_14098;
var inst_14077 = inst_14100;
var inst_14078 = (0);
var state_14135__$1 = (function (){var statearr_14170 = state_14135;
(statearr_14170[(10)] = inst_14078);

(statearr_14170[(20)] = inst_14075);

(statearr_14170[(12)] = inst_14076);

(statearr_14170[(21)] = inst_14077);

return statearr_14170;
})();
var statearr_14171_14245 = state_14135__$1;
(statearr_14171_14245[(2)] = null);

(statearr_14171_14245[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (41))){
var inst_14094 = (state_14135[(25)]);
var inst_14110 = (state_14135[(2)]);
var inst_14111 = cljs.core.next(inst_14094);
var inst_14075 = inst_14111;
var inst_14076 = null;
var inst_14077 = (0);
var inst_14078 = (0);
var state_14135__$1 = (function (){var statearr_14172 = state_14135;
(statearr_14172[(10)] = inst_14078);

(statearr_14172[(20)] = inst_14075);

(statearr_14172[(12)] = inst_14076);

(statearr_14172[(27)] = inst_14110);

(statearr_14172[(21)] = inst_14077);

return statearr_14172;
})();
var statearr_14173_14246 = state_14135__$1;
(statearr_14173_14246[(2)] = null);

(statearr_14173_14246[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (43))){
var state_14135__$1 = state_14135;
var statearr_14174_14247 = state_14135__$1;
(statearr_14174_14247[(2)] = null);

(statearr_14174_14247[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (29))){
var inst_14119 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14175_14248 = state_14135__$1;
(statearr_14175_14248[(2)] = inst_14119);

(statearr_14175_14248[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (44))){
var inst_14128 = (state_14135[(2)]);
var state_14135__$1 = (function (){var statearr_14176 = state_14135;
(statearr_14176[(28)] = inst_14128);

return statearr_14176;
})();
var statearr_14177_14249 = state_14135__$1;
(statearr_14177_14249[(2)] = null);

(statearr_14177_14249[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (6))){
var inst_14067 = (state_14135[(29)]);
var inst_14066 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14067__$1 = cljs.core.keys(inst_14066);
var inst_14068 = cljs.core.count(inst_14067__$1);
var inst_14069 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14068) : cljs.core.reset_BANG_.call(null,dctr,inst_14068));
var inst_14074 = cljs.core.seq(inst_14067__$1);
var inst_14075 = inst_14074;
var inst_14076 = null;
var inst_14077 = (0);
var inst_14078 = (0);
var state_14135__$1 = (function (){var statearr_14178 = state_14135;
(statearr_14178[(29)] = inst_14067__$1);

(statearr_14178[(10)] = inst_14078);

(statearr_14178[(20)] = inst_14075);

(statearr_14178[(12)] = inst_14076);

(statearr_14178[(30)] = inst_14069);

(statearr_14178[(21)] = inst_14077);

return statearr_14178;
})();
var statearr_14179_14250 = state_14135__$1;
(statearr_14179_14250[(2)] = null);

(statearr_14179_14250[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (28))){
var inst_14075 = (state_14135[(20)]);
var inst_14094 = (state_14135[(25)]);
var inst_14094__$1 = cljs.core.seq(inst_14075);
var state_14135__$1 = (function (){var statearr_14180 = state_14135;
(statearr_14180[(25)] = inst_14094__$1);

return statearr_14180;
})();
if(inst_14094__$1){
var statearr_14181_14251 = state_14135__$1;
(statearr_14181_14251[(1)] = (33));

} else {
var statearr_14182_14252 = state_14135__$1;
(statearr_14182_14252[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (25))){
var inst_14078 = (state_14135[(10)]);
var inst_14077 = (state_14135[(21)]);
var inst_14080 = (inst_14078 < inst_14077);
var inst_14081 = inst_14080;
var state_14135__$1 = state_14135;
if(cljs.core.truth_(inst_14081)){
var statearr_14183_14253 = state_14135__$1;
(statearr_14183_14253[(1)] = (27));

} else {
var statearr_14184_14254 = state_14135__$1;
(statearr_14184_14254[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (34))){
var state_14135__$1 = state_14135;
var statearr_14185_14255 = state_14135__$1;
(statearr_14185_14255[(2)] = null);

(statearr_14185_14255[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (17))){
var state_14135__$1 = state_14135;
var statearr_14186_14256 = state_14135__$1;
(statearr_14186_14256[(2)] = null);

(statearr_14186_14256[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (3))){
var inst_14133 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14135__$1,inst_14133);
} else {
if((state_val_14136 === (12))){
var inst_14062 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14187_14257 = state_14135__$1;
(statearr_14187_14257[(2)] = inst_14062);

(statearr_14187_14257[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (2))){
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14135__$1,(4),ch);
} else {
if((state_val_14136 === (23))){
var state_14135__$1 = state_14135;
var statearr_14188_14258 = state_14135__$1;
(statearr_14188_14258[(2)] = null);

(statearr_14188_14258[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (35))){
var inst_14117 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14189_14259 = state_14135__$1;
(statearr_14189_14259[(2)] = inst_14117);

(statearr_14189_14259[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (19))){
var inst_14036 = (state_14135[(7)]);
var inst_14040 = cljs.core.chunk_first(inst_14036);
var inst_14041 = cljs.core.chunk_rest(inst_14036);
var inst_14042 = cljs.core.count(inst_14040);
var inst_14016 = inst_14041;
var inst_14017 = inst_14040;
var inst_14018 = inst_14042;
var inst_14019 = (0);
var state_14135__$1 = (function (){var statearr_14190 = state_14135;
(statearr_14190[(13)] = inst_14019);

(statearr_14190[(14)] = inst_14018);

(statearr_14190[(15)] = inst_14016);

(statearr_14190[(16)] = inst_14017);

return statearr_14190;
})();
var statearr_14191_14260 = state_14135__$1;
(statearr_14191_14260[(2)] = null);

(statearr_14191_14260[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (11))){
var inst_14036 = (state_14135[(7)]);
var inst_14016 = (state_14135[(15)]);
var inst_14036__$1 = cljs.core.seq(inst_14016);
var state_14135__$1 = (function (){var statearr_14192 = state_14135;
(statearr_14192[(7)] = inst_14036__$1);

return statearr_14192;
})();
if(inst_14036__$1){
var statearr_14193_14261 = state_14135__$1;
(statearr_14193_14261[(1)] = (16));

} else {
var statearr_14194_14262 = state_14135__$1;
(statearr_14194_14262[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (9))){
var inst_14064 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14195_14263 = state_14135__$1;
(statearr_14195_14263[(2)] = inst_14064);

(statearr_14195_14263[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (5))){
var inst_14014 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14015 = cljs.core.seq(inst_14014);
var inst_14016 = inst_14015;
var inst_14017 = null;
var inst_14018 = (0);
var inst_14019 = (0);
var state_14135__$1 = (function (){var statearr_14196 = state_14135;
(statearr_14196[(13)] = inst_14019);

(statearr_14196[(14)] = inst_14018);

(statearr_14196[(15)] = inst_14016);

(statearr_14196[(16)] = inst_14017);

return statearr_14196;
})();
var statearr_14197_14264 = state_14135__$1;
(statearr_14197_14264[(2)] = null);

(statearr_14197_14264[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (14))){
var state_14135__$1 = state_14135;
var statearr_14198_14265 = state_14135__$1;
(statearr_14198_14265[(2)] = null);

(statearr_14198_14265[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (45))){
var inst_14125 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14199_14266 = state_14135__$1;
(statearr_14199_14266[(2)] = inst_14125);

(statearr_14199_14266[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (26))){
var inst_14067 = (state_14135[(29)]);
var inst_14121 = (state_14135[(2)]);
var inst_14122 = cljs.core.seq(inst_14067);
var state_14135__$1 = (function (){var statearr_14200 = state_14135;
(statearr_14200[(31)] = inst_14121);

return statearr_14200;
})();
if(inst_14122){
var statearr_14201_14267 = state_14135__$1;
(statearr_14201_14267[(1)] = (42));

} else {
var statearr_14202_14268 = state_14135__$1;
(statearr_14202_14268[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (16))){
var inst_14036 = (state_14135[(7)]);
var inst_14038 = cljs.core.chunked_seq_QMARK_(inst_14036);
var state_14135__$1 = state_14135;
if(inst_14038){
var statearr_14203_14269 = state_14135__$1;
(statearr_14203_14269[(1)] = (19));

} else {
var statearr_14204_14270 = state_14135__$1;
(statearr_14204_14270[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (38))){
var inst_14114 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14205_14271 = state_14135__$1;
(statearr_14205_14271[(2)] = inst_14114);

(statearr_14205_14271[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (30))){
var state_14135__$1 = state_14135;
var statearr_14206_14272 = state_14135__$1;
(statearr_14206_14272[(2)] = null);

(statearr_14206_14272[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (10))){
var inst_14019 = (state_14135[(13)]);
var inst_14017 = (state_14135[(16)]);
var inst_14025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14017,inst_14019);
var inst_14026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14025,(0),null);
var inst_14027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14025,(1),null);
var state_14135__$1 = (function (){var statearr_14207 = state_14135;
(statearr_14207[(26)] = inst_14026);

return statearr_14207;
})();
if(cljs.core.truth_(inst_14027)){
var statearr_14208_14273 = state_14135__$1;
(statearr_14208_14273[(1)] = (13));

} else {
var statearr_14209_14274 = state_14135__$1;
(statearr_14209_14274[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (18))){
var inst_14060 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14210_14275 = state_14135__$1;
(statearr_14210_14275[(2)] = inst_14060);

(statearr_14210_14275[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (42))){
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14135__$1,(45),dchan);
} else {
if((state_val_14136 === (37))){
var inst_14007 = (state_14135[(9)]);
var inst_14103 = (state_14135[(23)]);
var inst_14094 = (state_14135[(25)]);
var inst_14103__$1 = cljs.core.first(inst_14094);
var inst_14104 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14103__$1,inst_14007,done);
var state_14135__$1 = (function (){var statearr_14211 = state_14135;
(statearr_14211[(23)] = inst_14103__$1);

return statearr_14211;
})();
if(cljs.core.truth_(inst_14104)){
var statearr_14212_14276 = state_14135__$1;
(statearr_14212_14276[(1)] = (39));

} else {
var statearr_14213_14277 = state_14135__$1;
(statearr_14213_14277[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14136 === (8))){
var inst_14019 = (state_14135[(13)]);
var inst_14018 = (state_14135[(14)]);
var inst_14021 = (inst_14019 < inst_14018);
var inst_14022 = inst_14021;
var state_14135__$1 = state_14135;
if(cljs.core.truth_(inst_14022)){
var statearr_14214_14278 = state_14135__$1;
(statearr_14214_14278[(1)] = (10));

} else {
var statearr_14215_14279 = state_14135__$1;
(statearr_14215_14279[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___14225,cs,m,dchan,dctr,done))
;
return ((function (switch__12792__auto__,c__12906__auto___14225,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12793__auto__ = null;
var cljs$core$async$mult_$_state_machine__12793__auto____0 = (function (){
var statearr_14219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14219[(0)] = cljs$core$async$mult_$_state_machine__12793__auto__);

(statearr_14219[(1)] = (1));

return statearr_14219;
});
var cljs$core$async$mult_$_state_machine__12793__auto____1 = (function (state_14135){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_14135);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e14220){if((e14220 instanceof Object)){
var ex__12796__auto__ = e14220;
var statearr_14221_14280 = state_14135;
(statearr_14221_14280[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14135);

return cljs.core.cst$kw$recur;
} else {
throw e14220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__14281 = state_14135;
state_14135 = G__14281;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12793__auto__ = function(state_14135){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12793__auto____1.call(this,state_14135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12793__auto____0;
cljs$core$async$mult_$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12793__auto____1;
return cljs$core$async$mult_$_state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___14225,cs,m,dchan,dctr,done))
})();
var state__12908__auto__ = (function (){var statearr_14222 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_14222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___14225);

return statearr_14222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___14225,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14282 = [];
var len__6934__auto___14285 = arguments.length;
var i__6935__auto___14286 = (0);
while(true){
if((i__6935__auto___14286 < len__6934__auto___14285)){
args14282.push((arguments[i__6935__auto___14286]));

var G__14287 = (i__6935__auto___14286 + (1));
i__6935__auto___14286 = G__14287;
continue;
} else {
}
break;
}

var G__14284 = args14282.length;
switch (G__14284) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14282.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6527__auto__ = (((m == null))?null:m);
var m__6528__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6528__auto__.call(null,m,ch));
} else {
var m__6528__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6528__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6527__auto__ = (((m == null))?null:m);
var m__6528__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6528__auto__.call(null,m,ch));
} else {
var m__6528__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6528__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6527__auto__ = (((m == null))?null:m);
var m__6528__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6528__auto__.call(null,m));
} else {
var m__6528__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6528__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6527__auto__ = (((m == null))?null:m);
var m__6528__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6528__auto__.call(null,m,state_map));
} else {
var m__6528__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6528__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6527__auto__ = (((m == null))?null:m);
var m__6528__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6528__auto__.call(null,m,mode));
} else {
var m__6528__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6528__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6941__auto__ = [];
var len__6934__auto___14299 = arguments.length;
var i__6935__auto___14300 = (0);
while(true){
if((i__6935__auto___14300 < len__6934__auto___14299)){
args__6941__auto__.push((arguments[i__6935__auto___14300]));

var G__14301 = (i__6935__auto___14300 + (1));
i__6935__auto___14300 = G__14301;
continue;
} else {
}
break;
}

var argseq__6942__auto__ = ((((3) < args__6941__auto__.length))?(new cljs.core.IndexedSeq(args__6941__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6942__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14293){
var map__14294 = p__14293;
var map__14294__$1 = ((((!((map__14294 == null)))?((((map__14294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14294):map__14294);
var opts = map__14294__$1;
var statearr_14296_14302 = state;
(statearr_14296_14302[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__14294,map__14294__$1,opts){
return (function (val){
var statearr_14297_14303 = state;
(statearr_14297_14303[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14294,map__14294__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14298_14304 = state;
(statearr_14298_14304[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14289){
var G__14290 = cljs.core.first(seq14289);
var seq14289__$1 = cljs.core.next(seq14289);
var G__14291 = cljs.core.first(seq14289__$1);
var seq14289__$2 = cljs.core.next(seq14289__$1);
var G__14292 = cljs.core.first(seq14289__$2);
var seq14289__$3 = cljs.core.next(seq14289__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14290,G__14291,G__14292,seq14289__$3);
});
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
var cs = (function (){var G__14471 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14471) : cljs.core.atom.call(null,G__14471));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14472 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14473){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14473 = meta14473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14474,meta14473__$1){
var self__ = this;
var _14474__$1 = this;
return (new cljs.core.async.t_cljs$core$async14472(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14473__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14474){
var self__ = this;
var _14474__$1 = this;
return self__.meta14473;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14475_14637 = self__.cs;
var G__14476_14638 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14475_14637,G__14476_14638) : cljs.core.reset_BANG_.call(null,G__14475_14637,G__14476_14638));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14473], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14472";

cljs.core.async.t_cljs$core$async14472.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async14472");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14472 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14472(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14473){
return (new cljs.core.async.t_cljs$core$async14472(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14473));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14472(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12906__auto___14639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___14639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___14639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14574){
var state_val_14575 = (state_14574[(1)]);
if((state_val_14575 === (7))){
var inst_14492 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14576_14640 = state_14574__$1;
(statearr_14576_14640[(2)] = inst_14492);

(statearr_14576_14640[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (20))){
var inst_14504 = (state_14574[(7)]);
var state_14574__$1 = state_14574;
var statearr_14577_14641 = state_14574__$1;
(statearr_14577_14641[(2)] = inst_14504);

(statearr_14577_14641[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (27))){
var state_14574__$1 = state_14574;
var statearr_14578_14642 = state_14574__$1;
(statearr_14578_14642[(2)] = null);

(statearr_14578_14642[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (1))){
var inst_14480 = (state_14574[(8)]);
var inst_14480__$1 = calc_state();
var inst_14482 = (inst_14480__$1 == null);
var inst_14483 = cljs.core.not(inst_14482);
var state_14574__$1 = (function (){var statearr_14579 = state_14574;
(statearr_14579[(8)] = inst_14480__$1);

return statearr_14579;
})();
if(inst_14483){
var statearr_14580_14643 = state_14574__$1;
(statearr_14580_14643[(1)] = (2));

} else {
var statearr_14581_14644 = state_14574__$1;
(statearr_14581_14644[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (24))){
var inst_14548 = (state_14574[(9)]);
var inst_14527 = (state_14574[(10)]);
var inst_14534 = (state_14574[(11)]);
var inst_14548__$1 = (inst_14527.cljs$core$IFn$_invoke$arity$1 ? inst_14527.cljs$core$IFn$_invoke$arity$1(inst_14534) : inst_14527.call(null,inst_14534));
var state_14574__$1 = (function (){var statearr_14582 = state_14574;
(statearr_14582[(9)] = inst_14548__$1);

return statearr_14582;
})();
if(cljs.core.truth_(inst_14548__$1)){
var statearr_14583_14645 = state_14574__$1;
(statearr_14583_14645[(1)] = (29));

} else {
var statearr_14584_14646 = state_14574__$1;
(statearr_14584_14646[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (4))){
var inst_14495 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14495)){
var statearr_14585_14647 = state_14574__$1;
(statearr_14585_14647[(1)] = (8));

} else {
var statearr_14586_14648 = state_14574__$1;
(statearr_14586_14648[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (15))){
var inst_14521 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14521)){
var statearr_14587_14649 = state_14574__$1;
(statearr_14587_14649[(1)] = (19));

} else {
var statearr_14588_14650 = state_14574__$1;
(statearr_14588_14650[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (21))){
var inst_14526 = (state_14574[(12)]);
var inst_14526__$1 = (state_14574[(2)]);
var inst_14527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14526__$1,cljs.core.cst$kw$solos);
var inst_14528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14526__$1,cljs.core.cst$kw$mutes);
var inst_14529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14526__$1,cljs.core.cst$kw$reads);
var state_14574__$1 = (function (){var statearr_14589 = state_14574;
(statearr_14589[(13)] = inst_14528);

(statearr_14589[(12)] = inst_14526__$1);

(statearr_14589[(10)] = inst_14527);

return statearr_14589;
})();
return cljs.core.async.ioc_alts_BANG_(state_14574__$1,(22),inst_14529);
} else {
if((state_val_14575 === (31))){
var inst_14556 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14556)){
var statearr_14590_14651 = state_14574__$1;
(statearr_14590_14651[(1)] = (32));

} else {
var statearr_14591_14652 = state_14574__$1;
(statearr_14591_14652[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (32))){
var inst_14533 = (state_14574[(14)]);
var state_14574__$1 = state_14574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14574__$1,(35),out,inst_14533);
} else {
if((state_val_14575 === (33))){
var inst_14526 = (state_14574[(12)]);
var inst_14504 = inst_14526;
var state_14574__$1 = (function (){var statearr_14592 = state_14574;
(statearr_14592[(7)] = inst_14504);

return statearr_14592;
})();
var statearr_14593_14653 = state_14574__$1;
(statearr_14593_14653[(2)] = null);

(statearr_14593_14653[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (13))){
var inst_14504 = (state_14574[(7)]);
var inst_14511 = inst_14504.cljs$lang$protocol_mask$partition0$;
var inst_14512 = (inst_14511 & (64));
var inst_14513 = inst_14504.cljs$core$ISeq$;
var inst_14514 = (inst_14512) || (inst_14513);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14514)){
var statearr_14594_14654 = state_14574__$1;
(statearr_14594_14654[(1)] = (16));

} else {
var statearr_14595_14655 = state_14574__$1;
(statearr_14595_14655[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (22))){
var inst_14533 = (state_14574[(14)]);
var inst_14534 = (state_14574[(11)]);
var inst_14532 = (state_14574[(2)]);
var inst_14533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14532,(0),null);
var inst_14534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14532,(1),null);
var inst_14535 = (inst_14533__$1 == null);
var inst_14536 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14534__$1,change);
var inst_14537 = (inst_14535) || (inst_14536);
var state_14574__$1 = (function (){var statearr_14596 = state_14574;
(statearr_14596[(14)] = inst_14533__$1);

(statearr_14596[(11)] = inst_14534__$1);

return statearr_14596;
})();
if(cljs.core.truth_(inst_14537)){
var statearr_14597_14656 = state_14574__$1;
(statearr_14597_14656[(1)] = (23));

} else {
var statearr_14598_14657 = state_14574__$1;
(statearr_14598_14657[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (36))){
var inst_14526 = (state_14574[(12)]);
var inst_14504 = inst_14526;
var state_14574__$1 = (function (){var statearr_14599 = state_14574;
(statearr_14599[(7)] = inst_14504);

return statearr_14599;
})();
var statearr_14600_14658 = state_14574__$1;
(statearr_14600_14658[(2)] = null);

(statearr_14600_14658[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (29))){
var inst_14548 = (state_14574[(9)]);
var state_14574__$1 = state_14574;
var statearr_14601_14659 = state_14574__$1;
(statearr_14601_14659[(2)] = inst_14548);

(statearr_14601_14659[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (6))){
var state_14574__$1 = state_14574;
var statearr_14602_14660 = state_14574__$1;
(statearr_14602_14660[(2)] = false);

(statearr_14602_14660[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (28))){
var inst_14544 = (state_14574[(2)]);
var inst_14545 = calc_state();
var inst_14504 = inst_14545;
var state_14574__$1 = (function (){var statearr_14603 = state_14574;
(statearr_14603[(15)] = inst_14544);

(statearr_14603[(7)] = inst_14504);

return statearr_14603;
})();
var statearr_14604_14661 = state_14574__$1;
(statearr_14604_14661[(2)] = null);

(statearr_14604_14661[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (25))){
var inst_14570 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14605_14662 = state_14574__$1;
(statearr_14605_14662[(2)] = inst_14570);

(statearr_14605_14662[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (34))){
var inst_14568 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14606_14663 = state_14574__$1;
(statearr_14606_14663[(2)] = inst_14568);

(statearr_14606_14663[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (17))){
var state_14574__$1 = state_14574;
var statearr_14607_14664 = state_14574__$1;
(statearr_14607_14664[(2)] = false);

(statearr_14607_14664[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (3))){
var state_14574__$1 = state_14574;
var statearr_14608_14665 = state_14574__$1;
(statearr_14608_14665[(2)] = false);

(statearr_14608_14665[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (12))){
var inst_14572 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14574__$1,inst_14572);
} else {
if((state_val_14575 === (2))){
var inst_14480 = (state_14574[(8)]);
var inst_14485 = inst_14480.cljs$lang$protocol_mask$partition0$;
var inst_14486 = (inst_14485 & (64));
var inst_14487 = inst_14480.cljs$core$ISeq$;
var inst_14488 = (inst_14486) || (inst_14487);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14488)){
var statearr_14609_14666 = state_14574__$1;
(statearr_14609_14666[(1)] = (5));

} else {
var statearr_14610_14667 = state_14574__$1;
(statearr_14610_14667[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (23))){
var inst_14533 = (state_14574[(14)]);
var inst_14539 = (inst_14533 == null);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14539)){
var statearr_14611_14668 = state_14574__$1;
(statearr_14611_14668[(1)] = (26));

} else {
var statearr_14612_14669 = state_14574__$1;
(statearr_14612_14669[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (35))){
var inst_14559 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14559)){
var statearr_14613_14670 = state_14574__$1;
(statearr_14613_14670[(1)] = (36));

} else {
var statearr_14614_14671 = state_14574__$1;
(statearr_14614_14671[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (19))){
var inst_14504 = (state_14574[(7)]);
var inst_14523 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14504);
var state_14574__$1 = state_14574;
var statearr_14615_14672 = state_14574__$1;
(statearr_14615_14672[(2)] = inst_14523);

(statearr_14615_14672[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (11))){
var inst_14504 = (state_14574[(7)]);
var inst_14508 = (inst_14504 == null);
var inst_14509 = cljs.core.not(inst_14508);
var state_14574__$1 = state_14574;
if(inst_14509){
var statearr_14616_14673 = state_14574__$1;
(statearr_14616_14673[(1)] = (13));

} else {
var statearr_14617_14674 = state_14574__$1;
(statearr_14617_14674[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (9))){
var inst_14480 = (state_14574[(8)]);
var state_14574__$1 = state_14574;
var statearr_14618_14675 = state_14574__$1;
(statearr_14618_14675[(2)] = inst_14480);

(statearr_14618_14675[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (5))){
var state_14574__$1 = state_14574;
var statearr_14619_14676 = state_14574__$1;
(statearr_14619_14676[(2)] = true);

(statearr_14619_14676[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (14))){
var state_14574__$1 = state_14574;
var statearr_14620_14677 = state_14574__$1;
(statearr_14620_14677[(2)] = false);

(statearr_14620_14677[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (26))){
var inst_14534 = (state_14574[(11)]);
var inst_14541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14534);
var state_14574__$1 = state_14574;
var statearr_14621_14678 = state_14574__$1;
(statearr_14621_14678[(2)] = inst_14541);

(statearr_14621_14678[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (16))){
var state_14574__$1 = state_14574;
var statearr_14622_14679 = state_14574__$1;
(statearr_14622_14679[(2)] = true);

(statearr_14622_14679[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (38))){
var inst_14564 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14623_14680 = state_14574__$1;
(statearr_14623_14680[(2)] = inst_14564);

(statearr_14623_14680[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (30))){
var inst_14528 = (state_14574[(13)]);
var inst_14527 = (state_14574[(10)]);
var inst_14534 = (state_14574[(11)]);
var inst_14551 = cljs.core.empty_QMARK_(inst_14527);
var inst_14552 = (inst_14528.cljs$core$IFn$_invoke$arity$1 ? inst_14528.cljs$core$IFn$_invoke$arity$1(inst_14534) : inst_14528.call(null,inst_14534));
var inst_14553 = cljs.core.not(inst_14552);
var inst_14554 = (inst_14551) && (inst_14553);
var state_14574__$1 = state_14574;
var statearr_14624_14681 = state_14574__$1;
(statearr_14624_14681[(2)] = inst_14554);

(statearr_14624_14681[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (10))){
var inst_14480 = (state_14574[(8)]);
var inst_14500 = (state_14574[(2)]);
var inst_14501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14500,cljs.core.cst$kw$solos);
var inst_14502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14500,cljs.core.cst$kw$mutes);
var inst_14503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14500,cljs.core.cst$kw$reads);
var inst_14504 = inst_14480;
var state_14574__$1 = (function (){var statearr_14625 = state_14574;
(statearr_14625[(16)] = inst_14503);

(statearr_14625[(17)] = inst_14502);

(statearr_14625[(7)] = inst_14504);

(statearr_14625[(18)] = inst_14501);

return statearr_14625;
})();
var statearr_14626_14682 = state_14574__$1;
(statearr_14626_14682[(2)] = null);

(statearr_14626_14682[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (18))){
var inst_14518 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14627_14683 = state_14574__$1;
(statearr_14627_14683[(2)] = inst_14518);

(statearr_14627_14683[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (37))){
var state_14574__$1 = state_14574;
var statearr_14628_14684 = state_14574__$1;
(statearr_14628_14684[(2)] = null);

(statearr_14628_14684[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14575 === (8))){
var inst_14480 = (state_14574[(8)]);
var inst_14497 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14480);
var state_14574__$1 = state_14574;
var statearr_14629_14685 = state_14574__$1;
(statearr_14629_14685[(2)] = inst_14497);

(statearr_14629_14685[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___14639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12792__auto__,c__12906__auto___14639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12793__auto__ = null;
var cljs$core$async$mix_$_state_machine__12793__auto____0 = (function (){
var statearr_14633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14633[(0)] = cljs$core$async$mix_$_state_machine__12793__auto__);

(statearr_14633[(1)] = (1));

return statearr_14633;
});
var cljs$core$async$mix_$_state_machine__12793__auto____1 = (function (state_14574){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_14574);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e14634){if((e14634 instanceof Object)){
var ex__12796__auto__ = e14634;
var statearr_14635_14686 = state_14574;
(statearr_14635_14686[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14574);

return cljs.core.cst$kw$recur;
} else {
throw e14634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__14687 = state_14574;
state_14574 = G__14687;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12793__auto__ = function(state_14574){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12793__auto____1.call(this,state_14574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12793__auto____0;
cljs$core$async$mix_$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12793__auto____1;
return cljs$core$async$mix_$_state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___14639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12908__auto__ = (function (){var statearr_14636 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_14636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___14639);

return statearr_14636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___14639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6527__auto__ = (((p == null))?null:p);
var m__6528__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6528__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6528__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6528__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6527__auto__ = (((p == null))?null:p);
var m__6528__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6528__auto__.call(null,p,v,ch));
} else {
var m__6528__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6528__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14688 = [];
var len__6934__auto___14691 = arguments.length;
var i__6935__auto___14692 = (0);
while(true){
if((i__6935__auto___14692 < len__6934__auto___14691)){
args14688.push((arguments[i__6935__auto___14692]));

var G__14693 = (i__6935__auto___14692 + (1));
i__6935__auto___14692 = G__14693;
continue;
} else {
}
break;
}

var G__14690 = args14688.length;
switch (G__14690) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14688.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6527__auto__ = (((p == null))?null:p);
var m__6528__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6528__auto__.call(null,p));
} else {
var m__6528__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6528__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6527__auto__ = (((p == null))?null:p);
var m__6528__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6527__auto__)]);
if(!((m__6528__auto__ == null))){
return (m__6528__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6528__auto__.call(null,p,v));
} else {
var m__6528__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6528__auto____$1 == null))){
return (m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6528__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6528__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args14696 = [];
var len__6934__auto___14824 = arguments.length;
var i__6935__auto___14825 = (0);
while(true){
if((i__6935__auto___14825 < len__6934__auto___14824)){
args14696.push((arguments[i__6935__auto___14825]));

var G__14826 = (i__6935__auto___14825 + (1));
i__6935__auto___14825 = G__14826;
continue;
} else {
}
break;
}

var G__14698 = args14696.length;
switch (G__14698) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14696.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__14699 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14699) : cljs.core.atom.call(null,G__14699));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__5864__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__5864__auto__)){
return or__5864__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5864__auto__,mults){
return (function (p1__14695_SHARP_){
if(cljs.core.truth_((p1__14695_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14695_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14695_SHARP_.call(null,topic)))){
return p1__14695_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14695_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5864__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14700 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14701){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14701 = meta14701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14702,meta14701__$1){
var self__ = this;
var _14702__$1 = this;
return (new cljs.core.async.t_cljs$core$async14700(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14701__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14702){
var self__ = this;
var _14702__$1 = this;
return self__.meta14701;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14703 = self__.mults;
var G__14704 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14703,G__14704) : cljs.core.reset_BANG_.call(null,G__14703,G__14704));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14700.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14700.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta14701], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14700";

cljs.core.async.t_cljs$core$async14700.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async14700");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14700 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14700(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14701){
return (new cljs.core.async.t_cljs$core$async14700(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14701));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14700(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12906__auto___14828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___14828,mults,ensure_mult,p){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___14828,mults,ensure_mult,p){
return (function (state_14776){
var state_val_14777 = (state_14776[(1)]);
if((state_val_14777 === (7))){
var inst_14772 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14778_14829 = state_14776__$1;
(statearr_14778_14829[(2)] = inst_14772);

(statearr_14778_14829[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (20))){
var state_14776__$1 = state_14776;
var statearr_14779_14830 = state_14776__$1;
(statearr_14779_14830[(2)] = null);

(statearr_14779_14830[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (1))){
var state_14776__$1 = state_14776;
var statearr_14780_14831 = state_14776__$1;
(statearr_14780_14831[(2)] = null);

(statearr_14780_14831[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (24))){
var inst_14755 = (state_14776[(7)]);
var inst_14764 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14755);
var state_14776__$1 = state_14776;
var statearr_14781_14832 = state_14776__$1;
(statearr_14781_14832[(2)] = inst_14764);

(statearr_14781_14832[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (4))){
var inst_14707 = (state_14776[(8)]);
var inst_14707__$1 = (state_14776[(2)]);
var inst_14708 = (inst_14707__$1 == null);
var state_14776__$1 = (function (){var statearr_14782 = state_14776;
(statearr_14782[(8)] = inst_14707__$1);

return statearr_14782;
})();
if(cljs.core.truth_(inst_14708)){
var statearr_14783_14833 = state_14776__$1;
(statearr_14783_14833[(1)] = (5));

} else {
var statearr_14784_14834 = state_14776__$1;
(statearr_14784_14834[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (15))){
var inst_14749 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14785_14835 = state_14776__$1;
(statearr_14785_14835[(2)] = inst_14749);

(statearr_14785_14835[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (21))){
var inst_14769 = (state_14776[(2)]);
var state_14776__$1 = (function (){var statearr_14786 = state_14776;
(statearr_14786[(9)] = inst_14769);

return statearr_14786;
})();
var statearr_14787_14836 = state_14776__$1;
(statearr_14787_14836[(2)] = null);

(statearr_14787_14836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (13))){
var inst_14731 = (state_14776[(10)]);
var inst_14733 = cljs.core.chunked_seq_QMARK_(inst_14731);
var state_14776__$1 = state_14776;
if(inst_14733){
var statearr_14788_14837 = state_14776__$1;
(statearr_14788_14837[(1)] = (16));

} else {
var statearr_14789_14838 = state_14776__$1;
(statearr_14789_14838[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (22))){
var inst_14761 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
if(cljs.core.truth_(inst_14761)){
var statearr_14790_14839 = state_14776__$1;
(statearr_14790_14839[(1)] = (23));

} else {
var statearr_14791_14840 = state_14776__$1;
(statearr_14791_14840[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (6))){
var inst_14707 = (state_14776[(8)]);
var inst_14755 = (state_14776[(7)]);
var inst_14757 = (state_14776[(11)]);
var inst_14755__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14707) : topic_fn.call(null,inst_14707));
var inst_14756 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_14757__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14756,inst_14755__$1);
var state_14776__$1 = (function (){var statearr_14792 = state_14776;
(statearr_14792[(7)] = inst_14755__$1);

(statearr_14792[(11)] = inst_14757__$1);

return statearr_14792;
})();
if(cljs.core.truth_(inst_14757__$1)){
var statearr_14793_14841 = state_14776__$1;
(statearr_14793_14841[(1)] = (19));

} else {
var statearr_14794_14842 = state_14776__$1;
(statearr_14794_14842[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (25))){
var inst_14766 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14795_14843 = state_14776__$1;
(statearr_14795_14843[(2)] = inst_14766);

(statearr_14795_14843[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (17))){
var inst_14731 = (state_14776[(10)]);
var inst_14740 = cljs.core.first(inst_14731);
var inst_14741 = cljs.core.async.muxch_STAR_(inst_14740);
var inst_14742 = cljs.core.async.close_BANG_(inst_14741);
var inst_14743 = cljs.core.next(inst_14731);
var inst_14717 = inst_14743;
var inst_14718 = null;
var inst_14719 = (0);
var inst_14720 = (0);
var state_14776__$1 = (function (){var statearr_14796 = state_14776;
(statearr_14796[(12)] = inst_14742);

(statearr_14796[(13)] = inst_14717);

(statearr_14796[(14)] = inst_14718);

(statearr_14796[(15)] = inst_14720);

(statearr_14796[(16)] = inst_14719);

return statearr_14796;
})();
var statearr_14797_14844 = state_14776__$1;
(statearr_14797_14844[(2)] = null);

(statearr_14797_14844[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (3))){
var inst_14774 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14776__$1,inst_14774);
} else {
if((state_val_14777 === (12))){
var inst_14751 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14798_14845 = state_14776__$1;
(statearr_14798_14845[(2)] = inst_14751);

(statearr_14798_14845[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (2))){
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14776__$1,(4),ch);
} else {
if((state_val_14777 === (23))){
var state_14776__$1 = state_14776;
var statearr_14799_14846 = state_14776__$1;
(statearr_14799_14846[(2)] = null);

(statearr_14799_14846[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (19))){
var inst_14707 = (state_14776[(8)]);
var inst_14757 = (state_14776[(11)]);
var inst_14759 = cljs.core.async.muxch_STAR_(inst_14757);
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14776__$1,(22),inst_14759,inst_14707);
} else {
if((state_val_14777 === (11))){
var inst_14731 = (state_14776[(10)]);
var inst_14717 = (state_14776[(13)]);
var inst_14731__$1 = cljs.core.seq(inst_14717);
var state_14776__$1 = (function (){var statearr_14800 = state_14776;
(statearr_14800[(10)] = inst_14731__$1);

return statearr_14800;
})();
if(inst_14731__$1){
var statearr_14801_14847 = state_14776__$1;
(statearr_14801_14847[(1)] = (13));

} else {
var statearr_14802_14848 = state_14776__$1;
(statearr_14802_14848[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (9))){
var inst_14753 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14803_14849 = state_14776__$1;
(statearr_14803_14849[(2)] = inst_14753);

(statearr_14803_14849[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (5))){
var inst_14714 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_14715 = cljs.core.vals(inst_14714);
var inst_14716 = cljs.core.seq(inst_14715);
var inst_14717 = inst_14716;
var inst_14718 = null;
var inst_14719 = (0);
var inst_14720 = (0);
var state_14776__$1 = (function (){var statearr_14804 = state_14776;
(statearr_14804[(13)] = inst_14717);

(statearr_14804[(14)] = inst_14718);

(statearr_14804[(15)] = inst_14720);

(statearr_14804[(16)] = inst_14719);

return statearr_14804;
})();
var statearr_14805_14850 = state_14776__$1;
(statearr_14805_14850[(2)] = null);

(statearr_14805_14850[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (14))){
var state_14776__$1 = state_14776;
var statearr_14809_14851 = state_14776__$1;
(statearr_14809_14851[(2)] = null);

(statearr_14809_14851[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (16))){
var inst_14731 = (state_14776[(10)]);
var inst_14735 = cljs.core.chunk_first(inst_14731);
var inst_14736 = cljs.core.chunk_rest(inst_14731);
var inst_14737 = cljs.core.count(inst_14735);
var inst_14717 = inst_14736;
var inst_14718 = inst_14735;
var inst_14719 = inst_14737;
var inst_14720 = (0);
var state_14776__$1 = (function (){var statearr_14810 = state_14776;
(statearr_14810[(13)] = inst_14717);

(statearr_14810[(14)] = inst_14718);

(statearr_14810[(15)] = inst_14720);

(statearr_14810[(16)] = inst_14719);

return statearr_14810;
})();
var statearr_14811_14852 = state_14776__$1;
(statearr_14811_14852[(2)] = null);

(statearr_14811_14852[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (10))){
var inst_14717 = (state_14776[(13)]);
var inst_14718 = (state_14776[(14)]);
var inst_14720 = (state_14776[(15)]);
var inst_14719 = (state_14776[(16)]);
var inst_14725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14718,inst_14720);
var inst_14726 = cljs.core.async.muxch_STAR_(inst_14725);
var inst_14727 = cljs.core.async.close_BANG_(inst_14726);
var inst_14728 = (inst_14720 + (1));
var tmp14806 = inst_14717;
var tmp14807 = inst_14718;
var tmp14808 = inst_14719;
var inst_14717__$1 = tmp14806;
var inst_14718__$1 = tmp14807;
var inst_14719__$1 = tmp14808;
var inst_14720__$1 = inst_14728;
var state_14776__$1 = (function (){var statearr_14812 = state_14776;
(statearr_14812[(13)] = inst_14717__$1);

(statearr_14812[(14)] = inst_14718__$1);

(statearr_14812[(17)] = inst_14727);

(statearr_14812[(15)] = inst_14720__$1);

(statearr_14812[(16)] = inst_14719__$1);

return statearr_14812;
})();
var statearr_14813_14853 = state_14776__$1;
(statearr_14813_14853[(2)] = null);

(statearr_14813_14853[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (18))){
var inst_14746 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14814_14854 = state_14776__$1;
(statearr_14814_14854[(2)] = inst_14746);

(statearr_14814_14854[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14777 === (8))){
var inst_14720 = (state_14776[(15)]);
var inst_14719 = (state_14776[(16)]);
var inst_14722 = (inst_14720 < inst_14719);
var inst_14723 = inst_14722;
var state_14776__$1 = state_14776;
if(cljs.core.truth_(inst_14723)){
var statearr_14815_14855 = state_14776__$1;
(statearr_14815_14855[(1)] = (10));

} else {
var statearr_14816_14856 = state_14776__$1;
(statearr_14816_14856[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___14828,mults,ensure_mult,p))
;
return ((function (switch__12792__auto__,c__12906__auto___14828,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_14820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14820[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_14820[(1)] = (1));

return statearr_14820;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_14776){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_14776);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e14821){if((e14821 instanceof Object)){
var ex__12796__auto__ = e14821;
var statearr_14822_14857 = state_14776;
(statearr_14822_14857[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14776);

return cljs.core.cst$kw$recur;
} else {
throw e14821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__14858 = state_14776;
state_14776 = G__14858;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_14776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_14776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___14828,mults,ensure_mult,p))
})();
var state__12908__auto__ = (function (){var statearr_14823 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_14823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___14828);

return statearr_14823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___14828,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14859 = [];
var len__6934__auto___14862 = arguments.length;
var i__6935__auto___14863 = (0);
while(true){
if((i__6935__auto___14863 < len__6934__auto___14862)){
args14859.push((arguments[i__6935__auto___14863]));

var G__14864 = (i__6935__auto___14863 + (1));
i__6935__auto___14863 = G__14864;
continue;
} else {
}
break;
}

var G__14861 = args14859.length;
switch (G__14861) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14859.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14866 = [];
var len__6934__auto___14869 = arguments.length;
var i__6935__auto___14870 = (0);
while(true){
if((i__6935__auto___14870 < len__6934__auto___14869)){
args14866.push((arguments[i__6935__auto___14870]));

var G__14871 = (i__6935__auto___14870 + (1));
i__6935__auto___14870 = G__14871;
continue;
} else {
}
break;
}

var G__14868 = args14866.length;
switch (G__14868) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14866.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args14873 = [];
var len__6934__auto___14944 = arguments.length;
var i__6935__auto___14945 = (0);
while(true){
if((i__6935__auto___14945 < len__6934__auto___14944)){
args14873.push((arguments[i__6935__auto___14945]));

var G__14946 = (i__6935__auto___14945 + (1));
i__6935__auto___14945 = G__14946;
continue;
} else {
}
break;
}

var G__14875 = args14873.length;
switch (G__14875) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14873.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__12906__auto___14948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___14948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___14948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14914){
var state_val_14915 = (state_14914[(1)]);
if((state_val_14915 === (7))){
var state_14914__$1 = state_14914;
var statearr_14916_14949 = state_14914__$1;
(statearr_14916_14949[(2)] = null);

(statearr_14916_14949[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (1))){
var state_14914__$1 = state_14914;
var statearr_14917_14950 = state_14914__$1;
(statearr_14917_14950[(2)] = null);

(statearr_14917_14950[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (4))){
var inst_14878 = (state_14914[(7)]);
var inst_14880 = (inst_14878 < cnt);
var state_14914__$1 = state_14914;
if(cljs.core.truth_(inst_14880)){
var statearr_14918_14951 = state_14914__$1;
(statearr_14918_14951[(1)] = (6));

} else {
var statearr_14919_14952 = state_14914__$1;
(statearr_14919_14952[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (15))){
var inst_14910 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14920_14953 = state_14914__$1;
(statearr_14920_14953[(2)] = inst_14910);

(statearr_14920_14953[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (13))){
var inst_14903 = cljs.core.async.close_BANG_(out);
var state_14914__$1 = state_14914;
var statearr_14921_14954 = state_14914__$1;
(statearr_14921_14954[(2)] = inst_14903);

(statearr_14921_14954[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (6))){
var state_14914__$1 = state_14914;
var statearr_14922_14955 = state_14914__$1;
(statearr_14922_14955[(2)] = null);

(statearr_14922_14955[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (3))){
var inst_14912 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14914__$1,inst_14912);
} else {
if((state_val_14915 === (12))){
var inst_14900 = (state_14914[(8)]);
var inst_14900__$1 = (state_14914[(2)]);
var inst_14901 = cljs.core.some(cljs.core.nil_QMARK_,inst_14900__$1);
var state_14914__$1 = (function (){var statearr_14923 = state_14914;
(statearr_14923[(8)] = inst_14900__$1);

return statearr_14923;
})();
if(cljs.core.truth_(inst_14901)){
var statearr_14924_14956 = state_14914__$1;
(statearr_14924_14956[(1)] = (13));

} else {
var statearr_14925_14957 = state_14914__$1;
(statearr_14925_14957[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (2))){
var inst_14877 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_14878 = (0);
var state_14914__$1 = (function (){var statearr_14926 = state_14914;
(statearr_14926[(7)] = inst_14878);

(statearr_14926[(9)] = inst_14877);

return statearr_14926;
})();
var statearr_14927_14958 = state_14914__$1;
(statearr_14927_14958[(2)] = null);

(statearr_14927_14958[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (11))){
var inst_14878 = (state_14914[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_14914,(10),Object,null,(9));
var inst_14887 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14878) : chs__$1.call(null,inst_14878));
var inst_14888 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14878) : done.call(null,inst_14878));
var inst_14889 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14887,inst_14888);
var state_14914__$1 = state_14914;
var statearr_14928_14959 = state_14914__$1;
(statearr_14928_14959[(2)] = inst_14889);


cljs.core.async.impl.ioc_helpers.process_exception(state_14914__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (9))){
var inst_14878 = (state_14914[(7)]);
var inst_14891 = (state_14914[(2)]);
var inst_14892 = (inst_14878 + (1));
var inst_14878__$1 = inst_14892;
var state_14914__$1 = (function (){var statearr_14929 = state_14914;
(statearr_14929[(10)] = inst_14891);

(statearr_14929[(7)] = inst_14878__$1);

return statearr_14929;
})();
var statearr_14930_14960 = state_14914__$1;
(statearr_14930_14960[(2)] = null);

(statearr_14930_14960[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (5))){
var inst_14898 = (state_14914[(2)]);
var state_14914__$1 = (function (){var statearr_14931 = state_14914;
(statearr_14931[(11)] = inst_14898);

return statearr_14931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14914__$1,(12),dchan);
} else {
if((state_val_14915 === (14))){
var inst_14900 = (state_14914[(8)]);
var inst_14905 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14900);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14914__$1,(16),out,inst_14905);
} else {
if((state_val_14915 === (16))){
var inst_14907 = (state_14914[(2)]);
var state_14914__$1 = (function (){var statearr_14932 = state_14914;
(statearr_14932[(12)] = inst_14907);

return statearr_14932;
})();
var statearr_14933_14961 = state_14914__$1;
(statearr_14933_14961[(2)] = null);

(statearr_14933_14961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (10))){
var inst_14882 = (state_14914[(2)]);
var inst_14883 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14914__$1 = (function (){var statearr_14934 = state_14914;
(statearr_14934[(13)] = inst_14882);

return statearr_14934;
})();
var statearr_14935_14962 = state_14914__$1;
(statearr_14935_14962[(2)] = inst_14883);


cljs.core.async.impl.ioc_helpers.process_exception(state_14914__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_14915 === (8))){
var inst_14896 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14936_14963 = state_14914__$1;
(statearr_14936_14963[(2)] = inst_14896);

(statearr_14936_14963[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___14948,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12792__auto__,c__12906__auto___14948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_14940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14940[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_14940[(1)] = (1));

return statearr_14940;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_14914){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_14914);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e14941){if((e14941 instanceof Object)){
var ex__12796__auto__ = e14941;
var statearr_14942_14964 = state_14914;
(statearr_14942_14964[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14914);

return cljs.core.cst$kw$recur;
} else {
throw e14941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__14965 = state_14914;
state_14914 = G__14965;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_14914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_14914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___14948,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12908__auto__ = (function (){var statearr_14943 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_14943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___14948);

return statearr_14943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___14948,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14967 = [];
var len__6934__auto___15023 = arguments.length;
var i__6935__auto___15024 = (0);
while(true){
if((i__6935__auto___15024 < len__6934__auto___15023)){
args14967.push((arguments[i__6935__auto___15024]));

var G__15025 = (i__6935__auto___15024 + (1));
i__6935__auto___15024 = G__15025;
continue;
} else {
}
break;
}

var G__14969 = args14967.length;
switch (G__14969) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14967.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12906__auto___15027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15027,out){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15027,out){
return (function (state_14999){
var state_val_15000 = (state_14999[(1)]);
if((state_val_15000 === (7))){
var inst_14979 = (state_14999[(7)]);
var inst_14978 = (state_14999[(8)]);
var inst_14978__$1 = (state_14999[(2)]);
var inst_14979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14978__$1,(0),null);
var inst_14980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14978__$1,(1),null);
var inst_14981 = (inst_14979__$1 == null);
var state_14999__$1 = (function (){var statearr_15001 = state_14999;
(statearr_15001[(9)] = inst_14980);

(statearr_15001[(7)] = inst_14979__$1);

(statearr_15001[(8)] = inst_14978__$1);

return statearr_15001;
})();
if(cljs.core.truth_(inst_14981)){
var statearr_15002_15028 = state_14999__$1;
(statearr_15002_15028[(1)] = (8));

} else {
var statearr_15003_15029 = state_14999__$1;
(statearr_15003_15029[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (1))){
var inst_14970 = cljs.core.vec(chs);
var inst_14971 = inst_14970;
var state_14999__$1 = (function (){var statearr_15004 = state_14999;
(statearr_15004[(10)] = inst_14971);

return statearr_15004;
})();
var statearr_15005_15030 = state_14999__$1;
(statearr_15005_15030[(2)] = null);

(statearr_15005_15030[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (4))){
var inst_14971 = (state_14999[(10)]);
var state_14999__$1 = state_14999;
return cljs.core.async.ioc_alts_BANG_(state_14999__$1,(7),inst_14971);
} else {
if((state_val_15000 === (6))){
var inst_14995 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15006_15031 = state_14999__$1;
(statearr_15006_15031[(2)] = inst_14995);

(statearr_15006_15031[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (3))){
var inst_14997 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14999__$1,inst_14997);
} else {
if((state_val_15000 === (2))){
var inst_14971 = (state_14999[(10)]);
var inst_14973 = cljs.core.count(inst_14971);
var inst_14974 = (inst_14973 > (0));
var state_14999__$1 = state_14999;
if(cljs.core.truth_(inst_14974)){
var statearr_15008_15032 = state_14999__$1;
(statearr_15008_15032[(1)] = (4));

} else {
var statearr_15009_15033 = state_14999__$1;
(statearr_15009_15033[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (11))){
var inst_14971 = (state_14999[(10)]);
var inst_14988 = (state_14999[(2)]);
var tmp15007 = inst_14971;
var inst_14971__$1 = tmp15007;
var state_14999__$1 = (function (){var statearr_15010 = state_14999;
(statearr_15010[(11)] = inst_14988);

(statearr_15010[(10)] = inst_14971__$1);

return statearr_15010;
})();
var statearr_15011_15034 = state_14999__$1;
(statearr_15011_15034[(2)] = null);

(statearr_15011_15034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (9))){
var inst_14979 = (state_14999[(7)]);
var state_14999__$1 = state_14999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14999__$1,(11),out,inst_14979);
} else {
if((state_val_15000 === (5))){
var inst_14993 = cljs.core.async.close_BANG_(out);
var state_14999__$1 = state_14999;
var statearr_15012_15035 = state_14999__$1;
(statearr_15012_15035[(2)] = inst_14993);

(statearr_15012_15035[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (10))){
var inst_14991 = (state_14999[(2)]);
var state_14999__$1 = state_14999;
var statearr_15013_15036 = state_14999__$1;
(statearr_15013_15036[(2)] = inst_14991);

(statearr_15013_15036[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15000 === (8))){
var inst_14980 = (state_14999[(9)]);
var inst_14979 = (state_14999[(7)]);
var inst_14978 = (state_14999[(8)]);
var inst_14971 = (state_14999[(10)]);
var inst_14983 = (function (){var cs = inst_14971;
var vec__14976 = inst_14978;
var v = inst_14979;
var c = inst_14980;
return ((function (cs,vec__14976,v,c,inst_14980,inst_14979,inst_14978,inst_14971,state_val_15000,c__12906__auto___15027,out){
return (function (p1__14966_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14966_SHARP_);
});
;})(cs,vec__14976,v,c,inst_14980,inst_14979,inst_14978,inst_14971,state_val_15000,c__12906__auto___15027,out))
})();
var inst_14984 = cljs.core.filterv(inst_14983,inst_14971);
var inst_14971__$1 = inst_14984;
var state_14999__$1 = (function (){var statearr_15014 = state_14999;
(statearr_15014[(10)] = inst_14971__$1);

return statearr_15014;
})();
var statearr_15015_15037 = state_14999__$1;
(statearr_15015_15037[(2)] = null);

(statearr_15015_15037[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___15027,out))
;
return ((function (switch__12792__auto__,c__12906__auto___15027,out){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_15019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15019[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_15019[(1)] = (1));

return statearr_15019;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_14999){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_14999);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15020){if((e15020 instanceof Object)){
var ex__12796__auto__ = e15020;
var statearr_15021_15038 = state_14999;
(statearr_15021_15038[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14999);

return cljs.core.cst$kw$recur;
} else {
throw e15020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15039 = state_14999;
state_14999 = G__15039;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_14999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_14999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15027,out))
})();
var state__12908__auto__ = (function (){var statearr_15022 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15027);

return statearr_15022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15027,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15040 = [];
var len__6934__auto___15089 = arguments.length;
var i__6935__auto___15090 = (0);
while(true){
if((i__6935__auto___15090 < len__6934__auto___15089)){
args15040.push((arguments[i__6935__auto___15090]));

var G__15091 = (i__6935__auto___15090 + (1));
i__6935__auto___15090 = G__15091;
continue;
} else {
}
break;
}

var G__15042 = args15040.length;
switch (G__15042) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15040.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12906__auto___15093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15093,out){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15093,out){
return (function (state_15066){
var state_val_15067 = (state_15066[(1)]);
if((state_val_15067 === (7))){
var inst_15048 = (state_15066[(7)]);
var inst_15048__$1 = (state_15066[(2)]);
var inst_15049 = (inst_15048__$1 == null);
var inst_15050 = cljs.core.not(inst_15049);
var state_15066__$1 = (function (){var statearr_15068 = state_15066;
(statearr_15068[(7)] = inst_15048__$1);

return statearr_15068;
})();
if(inst_15050){
var statearr_15069_15094 = state_15066__$1;
(statearr_15069_15094[(1)] = (8));

} else {
var statearr_15070_15095 = state_15066__$1;
(statearr_15070_15095[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15067 === (1))){
var inst_15043 = (0);
var state_15066__$1 = (function (){var statearr_15071 = state_15066;
(statearr_15071[(8)] = inst_15043);

return statearr_15071;
})();
var statearr_15072_15096 = state_15066__$1;
(statearr_15072_15096[(2)] = null);

(statearr_15072_15096[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15067 === (4))){
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15066__$1,(7),ch);
} else {
if((state_val_15067 === (6))){
var inst_15061 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15073_15097 = state_15066__$1;
(statearr_15073_15097[(2)] = inst_15061);

(statearr_15073_15097[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15067 === (3))){
var inst_15063 = (state_15066[(2)]);
var inst_15064 = cljs.core.async.close_BANG_(out);
var state_15066__$1 = (function (){var statearr_15074 = state_15066;
(statearr_15074[(9)] = inst_15063);

return statearr_15074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15066__$1,inst_15064);
} else {
if((state_val_15067 === (2))){
var inst_15043 = (state_15066[(8)]);
var inst_15045 = (inst_15043 < n);
var state_15066__$1 = state_15066;
if(cljs.core.truth_(inst_15045)){
var statearr_15075_15098 = state_15066__$1;
(statearr_15075_15098[(1)] = (4));

} else {
var statearr_15076_15099 = state_15066__$1;
(statearr_15076_15099[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15067 === (11))){
var inst_15043 = (state_15066[(8)]);
var inst_15053 = (state_15066[(2)]);
var inst_15054 = (inst_15043 + (1));
var inst_15043__$1 = inst_15054;
var state_15066__$1 = (function (){var statearr_15077 = state_15066;
(statearr_15077[(10)] = inst_15053);

(statearr_15077[(8)] = inst_15043__$1);

return statearr_15077;
})();
var statearr_15078_15100 = state_15066__$1;
(statearr_15078_15100[(2)] = null);

(statearr_15078_15100[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15067 === (9))){
var state_15066__$1 = state_15066;
var statearr_15079_15101 = state_15066__$1;
(statearr_15079_15101[(2)] = null);

(statearr_15079_15101[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15067 === (5))){
var state_15066__$1 = state_15066;
var statearr_15080_15102 = state_15066__$1;
(statearr_15080_15102[(2)] = null);

(statearr_15080_15102[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15067 === (10))){
var inst_15058 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15081_15103 = state_15066__$1;
(statearr_15081_15103[(2)] = inst_15058);

(statearr_15081_15103[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15067 === (8))){
var inst_15048 = (state_15066[(7)]);
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15066__$1,(11),out,inst_15048);
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
});})(c__12906__auto___15093,out))
;
return ((function (switch__12792__auto__,c__12906__auto___15093,out){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_15085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15085[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_15085[(1)] = (1));

return statearr_15085;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_15066){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15066);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15086){if((e15086 instanceof Object)){
var ex__12796__auto__ = e15086;
var statearr_15087_15104 = state_15066;
(statearr_15087_15104[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15066);

return cljs.core.cst$kw$recur;
} else {
throw e15086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15105 = state_15066;
state_15066 = G__15105;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_15066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_15066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15093,out))
})();
var state__12908__auto__ = (function (){var statearr_15088 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15093);

return statearr_15088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15093,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15115 = (function (map_LT_,f,ch,meta15116){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15116 = meta15116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15117,meta15116__$1){
var self__ = this;
var _15117__$1 = this;
return (new cljs.core.async.t_cljs$core$async15115(self__.map_LT_,self__.f,self__.ch,meta15116__$1));
});

cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15117){
var self__ = this;
var _15117__$1 = this;
return self__.meta15116;
});

cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15118 = (function (map_LT_,f,ch,meta15116,_,fn1,meta15119){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15116 = meta15116;
this._ = _;
this.fn1 = fn1;
this.meta15119 = meta15119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15120,meta15119__$1){
var self__ = this;
var _15120__$1 = this;
return (new cljs.core.async.t_cljs$core$async15118(self__.map_LT_,self__.f,self__.ch,self__.meta15116,self__._,self__.fn1,meta15119__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15120){
var self__ = this;
var _15120__$1 = this;
return self__.meta15119;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15106_SHARP_){
var G__15121 = (((p1__15106_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15106_SHARP_) : self__.f.call(null,p1__15106_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15121) : f1.call(null,G__15121));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15118.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15116,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15115], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15119], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15118";

cljs.core.async.t_cljs$core$async15118.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async15118");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15118 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15118(map_LT___$1,f__$1,ch__$1,meta15116__$1,___$2,fn1__$1,meta15119){
return (new cljs.core.async.t_cljs$core$async15118(map_LT___$1,f__$1,ch__$1,meta15116__$1,___$2,fn1__$1,meta15119));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15118(self__.map_LT_,self__.f,self__.ch,self__.meta15116,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5852__auto__ = ret;
if(cljs.core.truth_(and__5852__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__5852__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15122 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15122) : self__.f.call(null,G__15122));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15116], null);
});

cljs.core.async.t_cljs$core$async15115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15115";

cljs.core.async.t_cljs$core$async15115.cljs$lang$ctorPrWriter = (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async15115");
});

cljs.core.async.__GT_t_cljs$core$async15115 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15115(map_LT___$1,f__$1,ch__$1,meta15116){
return (new cljs.core.async.t_cljs$core$async15115(map_LT___$1,f__$1,ch__$1,meta15116));
});

}

return (new cljs.core.async.t_cljs$core$async15115(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15126 = (function (map_GT_,f,ch,meta15127){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15127 = meta15127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15128,meta15127__$1){
var self__ = this;
var _15128__$1 = this;
return (new cljs.core.async.t_cljs$core$async15126(self__.map_GT_,self__.f,self__.ch,meta15127__$1));
});

cljs.core.async.t_cljs$core$async15126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15128){
var self__ = this;
var _15128__$1 = this;
return self__.meta15127;
});

cljs.core.async.t_cljs$core$async15126.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15126.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15126.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async15126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15127], null);
});

cljs.core.async.t_cljs$core$async15126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15126";

cljs.core.async.t_cljs$core$async15126.cljs$lang$ctorPrWriter = (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async15126");
});

cljs.core.async.__GT_t_cljs$core$async15126 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15126(map_GT___$1,f__$1,ch__$1,meta15127){
return (new cljs.core.async.t_cljs$core$async15126(map_GT___$1,f__$1,ch__$1,meta15127));
});

}

return (new cljs.core.async.t_cljs$core$async15126(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15132 = (function (filter_GT_,p,ch,meta15133){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15133 = meta15133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15134,meta15133__$1){
var self__ = this;
var _15134__$1 = this;
return (new cljs.core.async.t_cljs$core$async15132(self__.filter_GT_,self__.p,self__.ch,meta15133__$1));
});

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15134){
var self__ = this;
var _15134__$1 = this;
return self__.meta15133;
});

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15133], null);
});

cljs.core.async.t_cljs$core$async15132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15132";

cljs.core.async.t_cljs$core$async15132.cljs$lang$ctorPrWriter = (function (this__6470__auto__,writer__6471__auto__,opt__6472__auto__){
return cljs.core._write(writer__6471__auto__,"cljs.core.async/t_cljs$core$async15132");
});

cljs.core.async.__GT_t_cljs$core$async15132 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15132(filter_GT___$1,p__$1,ch__$1,meta15133){
return (new cljs.core.async.t_cljs$core$async15132(filter_GT___$1,p__$1,ch__$1,meta15133));
});

}

return (new cljs.core.async.t_cljs$core$async15132(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15135 = [];
var len__6934__auto___15179 = arguments.length;
var i__6935__auto___15180 = (0);
while(true){
if((i__6935__auto___15180 < len__6934__auto___15179)){
args15135.push((arguments[i__6935__auto___15180]));

var G__15181 = (i__6935__auto___15180 + (1));
i__6935__auto___15180 = G__15181;
continue;
} else {
}
break;
}

var G__15137 = args15135.length;
switch (G__15137) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15135.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12906__auto___15183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15183,out){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15183,out){
return (function (state_15158){
var state_val_15159 = (state_15158[(1)]);
if((state_val_15159 === (7))){
var inst_15154 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15160_15184 = state_15158__$1;
(statearr_15160_15184[(2)] = inst_15154);

(statearr_15160_15184[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15159 === (1))){
var state_15158__$1 = state_15158;
var statearr_15161_15185 = state_15158__$1;
(statearr_15161_15185[(2)] = null);

(statearr_15161_15185[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15159 === (4))){
var inst_15140 = (state_15158[(7)]);
var inst_15140__$1 = (state_15158[(2)]);
var inst_15141 = (inst_15140__$1 == null);
var state_15158__$1 = (function (){var statearr_15162 = state_15158;
(statearr_15162[(7)] = inst_15140__$1);

return statearr_15162;
})();
if(cljs.core.truth_(inst_15141)){
var statearr_15163_15186 = state_15158__$1;
(statearr_15163_15186[(1)] = (5));

} else {
var statearr_15164_15187 = state_15158__$1;
(statearr_15164_15187[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15159 === (6))){
var inst_15140 = (state_15158[(7)]);
var inst_15145 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15140) : p.call(null,inst_15140));
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15145)){
var statearr_15165_15188 = state_15158__$1;
(statearr_15165_15188[(1)] = (8));

} else {
var statearr_15166_15189 = state_15158__$1;
(statearr_15166_15189[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15159 === (3))){
var inst_15156 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15158__$1,inst_15156);
} else {
if((state_val_15159 === (2))){
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15158__$1,(4),ch);
} else {
if((state_val_15159 === (11))){
var inst_15148 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15167_15190 = state_15158__$1;
(statearr_15167_15190[(2)] = inst_15148);

(statearr_15167_15190[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15159 === (9))){
var state_15158__$1 = state_15158;
var statearr_15168_15191 = state_15158__$1;
(statearr_15168_15191[(2)] = null);

(statearr_15168_15191[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15159 === (5))){
var inst_15143 = cljs.core.async.close_BANG_(out);
var state_15158__$1 = state_15158;
var statearr_15169_15192 = state_15158__$1;
(statearr_15169_15192[(2)] = inst_15143);

(statearr_15169_15192[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15159 === (10))){
var inst_15151 = (state_15158[(2)]);
var state_15158__$1 = (function (){var statearr_15170 = state_15158;
(statearr_15170[(8)] = inst_15151);

return statearr_15170;
})();
var statearr_15171_15193 = state_15158__$1;
(statearr_15171_15193[(2)] = null);

(statearr_15171_15193[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15159 === (8))){
var inst_15140 = (state_15158[(7)]);
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15158__$1,(11),out,inst_15140);
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
});})(c__12906__auto___15183,out))
;
return ((function (switch__12792__auto__,c__12906__auto___15183,out){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_15175 = [null,null,null,null,null,null,null,null,null];
(statearr_15175[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_15175[(1)] = (1));

return statearr_15175;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_15158){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15158);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15176){if((e15176 instanceof Object)){
var ex__12796__auto__ = e15176;
var statearr_15177_15194 = state_15158;
(statearr_15177_15194[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15158);

return cljs.core.cst$kw$recur;
} else {
throw e15176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15195 = state_15158;
state_15158 = G__15195;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_15158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_15158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15183,out))
})();
var state__12908__auto__ = (function (){var statearr_15178 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15183);

return statearr_15178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15183,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15196 = [];
var len__6934__auto___15199 = arguments.length;
var i__6935__auto___15200 = (0);
while(true){
if((i__6935__auto___15200 < len__6934__auto___15199)){
args15196.push((arguments[i__6935__auto___15200]));

var G__15201 = (i__6935__auto___15200 + (1));
i__6935__auto___15200 = G__15201;
continue;
} else {
}
break;
}

var G__15198 = args15196.length;
switch (G__15198) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15196.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto__){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto__){
return (function (state_15368){
var state_val_15369 = (state_15368[(1)]);
if((state_val_15369 === (7))){
var inst_15364 = (state_15368[(2)]);
var state_15368__$1 = state_15368;
var statearr_15370_15411 = state_15368__$1;
(statearr_15370_15411[(2)] = inst_15364);

(statearr_15370_15411[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (20))){
var inst_15334 = (state_15368[(7)]);
var inst_15345 = (state_15368[(2)]);
var inst_15346 = cljs.core.next(inst_15334);
var inst_15320 = inst_15346;
var inst_15321 = null;
var inst_15322 = (0);
var inst_15323 = (0);
var state_15368__$1 = (function (){var statearr_15371 = state_15368;
(statearr_15371[(8)] = inst_15321);

(statearr_15371[(9)] = inst_15323);

(statearr_15371[(10)] = inst_15320);

(statearr_15371[(11)] = inst_15322);

(statearr_15371[(12)] = inst_15345);

return statearr_15371;
})();
var statearr_15372_15412 = state_15368__$1;
(statearr_15372_15412[(2)] = null);

(statearr_15372_15412[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (1))){
var state_15368__$1 = state_15368;
var statearr_15373_15413 = state_15368__$1;
(statearr_15373_15413[(2)] = null);

(statearr_15373_15413[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (4))){
var inst_15309 = (state_15368[(13)]);
var inst_15309__$1 = (state_15368[(2)]);
var inst_15310 = (inst_15309__$1 == null);
var state_15368__$1 = (function (){var statearr_15374 = state_15368;
(statearr_15374[(13)] = inst_15309__$1);

return statearr_15374;
})();
if(cljs.core.truth_(inst_15310)){
var statearr_15375_15414 = state_15368__$1;
(statearr_15375_15414[(1)] = (5));

} else {
var statearr_15376_15415 = state_15368__$1;
(statearr_15376_15415[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (15))){
var state_15368__$1 = state_15368;
var statearr_15380_15416 = state_15368__$1;
(statearr_15380_15416[(2)] = null);

(statearr_15380_15416[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (21))){
var state_15368__$1 = state_15368;
var statearr_15381_15417 = state_15368__$1;
(statearr_15381_15417[(2)] = null);

(statearr_15381_15417[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (13))){
var inst_15321 = (state_15368[(8)]);
var inst_15323 = (state_15368[(9)]);
var inst_15320 = (state_15368[(10)]);
var inst_15322 = (state_15368[(11)]);
var inst_15330 = (state_15368[(2)]);
var inst_15331 = (inst_15323 + (1));
var tmp15377 = inst_15321;
var tmp15378 = inst_15320;
var tmp15379 = inst_15322;
var inst_15320__$1 = tmp15378;
var inst_15321__$1 = tmp15377;
var inst_15322__$1 = tmp15379;
var inst_15323__$1 = inst_15331;
var state_15368__$1 = (function (){var statearr_15382 = state_15368;
(statearr_15382[(14)] = inst_15330);

(statearr_15382[(8)] = inst_15321__$1);

(statearr_15382[(9)] = inst_15323__$1);

(statearr_15382[(10)] = inst_15320__$1);

(statearr_15382[(11)] = inst_15322__$1);

return statearr_15382;
})();
var statearr_15383_15418 = state_15368__$1;
(statearr_15383_15418[(2)] = null);

(statearr_15383_15418[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (22))){
var state_15368__$1 = state_15368;
var statearr_15384_15419 = state_15368__$1;
(statearr_15384_15419[(2)] = null);

(statearr_15384_15419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (6))){
var inst_15309 = (state_15368[(13)]);
var inst_15318 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15309) : f.call(null,inst_15309));
var inst_15319 = cljs.core.seq(inst_15318);
var inst_15320 = inst_15319;
var inst_15321 = null;
var inst_15322 = (0);
var inst_15323 = (0);
var state_15368__$1 = (function (){var statearr_15385 = state_15368;
(statearr_15385[(8)] = inst_15321);

(statearr_15385[(9)] = inst_15323);

(statearr_15385[(10)] = inst_15320);

(statearr_15385[(11)] = inst_15322);

return statearr_15385;
})();
var statearr_15386_15420 = state_15368__$1;
(statearr_15386_15420[(2)] = null);

(statearr_15386_15420[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (17))){
var inst_15334 = (state_15368[(7)]);
var inst_15338 = cljs.core.chunk_first(inst_15334);
var inst_15339 = cljs.core.chunk_rest(inst_15334);
var inst_15340 = cljs.core.count(inst_15338);
var inst_15320 = inst_15339;
var inst_15321 = inst_15338;
var inst_15322 = inst_15340;
var inst_15323 = (0);
var state_15368__$1 = (function (){var statearr_15387 = state_15368;
(statearr_15387[(8)] = inst_15321);

(statearr_15387[(9)] = inst_15323);

(statearr_15387[(10)] = inst_15320);

(statearr_15387[(11)] = inst_15322);

return statearr_15387;
})();
var statearr_15388_15421 = state_15368__$1;
(statearr_15388_15421[(2)] = null);

(statearr_15388_15421[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (3))){
var inst_15366 = (state_15368[(2)]);
var state_15368__$1 = state_15368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15368__$1,inst_15366);
} else {
if((state_val_15369 === (12))){
var inst_15354 = (state_15368[(2)]);
var state_15368__$1 = state_15368;
var statearr_15389_15422 = state_15368__$1;
(statearr_15389_15422[(2)] = inst_15354);

(statearr_15389_15422[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (2))){
var state_15368__$1 = state_15368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15368__$1,(4),in$);
} else {
if((state_val_15369 === (23))){
var inst_15362 = (state_15368[(2)]);
var state_15368__$1 = state_15368;
var statearr_15390_15423 = state_15368__$1;
(statearr_15390_15423[(2)] = inst_15362);

(statearr_15390_15423[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (19))){
var inst_15349 = (state_15368[(2)]);
var state_15368__$1 = state_15368;
var statearr_15391_15424 = state_15368__$1;
(statearr_15391_15424[(2)] = inst_15349);

(statearr_15391_15424[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (11))){
var inst_15334 = (state_15368[(7)]);
var inst_15320 = (state_15368[(10)]);
var inst_15334__$1 = cljs.core.seq(inst_15320);
var state_15368__$1 = (function (){var statearr_15392 = state_15368;
(statearr_15392[(7)] = inst_15334__$1);

return statearr_15392;
})();
if(inst_15334__$1){
var statearr_15393_15425 = state_15368__$1;
(statearr_15393_15425[(1)] = (14));

} else {
var statearr_15394_15426 = state_15368__$1;
(statearr_15394_15426[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (9))){
var inst_15356 = (state_15368[(2)]);
var inst_15357 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15368__$1 = (function (){var statearr_15395 = state_15368;
(statearr_15395[(15)] = inst_15356);

return statearr_15395;
})();
if(cljs.core.truth_(inst_15357)){
var statearr_15396_15427 = state_15368__$1;
(statearr_15396_15427[(1)] = (21));

} else {
var statearr_15397_15428 = state_15368__$1;
(statearr_15397_15428[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (5))){
var inst_15312 = cljs.core.async.close_BANG_(out);
var state_15368__$1 = state_15368;
var statearr_15398_15429 = state_15368__$1;
(statearr_15398_15429[(2)] = inst_15312);

(statearr_15398_15429[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (14))){
var inst_15334 = (state_15368[(7)]);
var inst_15336 = cljs.core.chunked_seq_QMARK_(inst_15334);
var state_15368__$1 = state_15368;
if(inst_15336){
var statearr_15399_15430 = state_15368__$1;
(statearr_15399_15430[(1)] = (17));

} else {
var statearr_15400_15431 = state_15368__$1;
(statearr_15400_15431[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (16))){
var inst_15352 = (state_15368[(2)]);
var state_15368__$1 = state_15368;
var statearr_15401_15432 = state_15368__$1;
(statearr_15401_15432[(2)] = inst_15352);

(statearr_15401_15432[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15369 === (10))){
var inst_15321 = (state_15368[(8)]);
var inst_15323 = (state_15368[(9)]);
var inst_15328 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15321,inst_15323);
var state_15368__$1 = state_15368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15368__$1,(13),out,inst_15328);
} else {
if((state_val_15369 === (18))){
var inst_15334 = (state_15368[(7)]);
var inst_15343 = cljs.core.first(inst_15334);
var state_15368__$1 = state_15368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15368__$1,(20),out,inst_15343);
} else {
if((state_val_15369 === (8))){
var inst_15323 = (state_15368[(9)]);
var inst_15322 = (state_15368[(11)]);
var inst_15325 = (inst_15323 < inst_15322);
var inst_15326 = inst_15325;
var state_15368__$1 = state_15368;
if(cljs.core.truth_(inst_15326)){
var statearr_15402_15433 = state_15368__$1;
(statearr_15402_15433[(1)] = (10));

} else {
var statearr_15403_15434 = state_15368__$1;
(statearr_15403_15434[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__12906__auto__))
;
return ((function (switch__12792__auto__,c__12906__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12793__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12793__auto____0 = (function (){
var statearr_15407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15407[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12793__auto__);

(statearr_15407[(1)] = (1));

return statearr_15407;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12793__auto____1 = (function (state_15368){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15368);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15408){if((e15408 instanceof Object)){
var ex__12796__auto__ = e15408;
var statearr_15409_15435 = state_15368;
(statearr_15409_15435[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15368);

return cljs.core.cst$kw$recur;
} else {
throw e15408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15436 = state_15368;
state_15368 = G__15436;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12793__auto__ = function(state_15368){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12793__auto____1.call(this,state_15368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12793__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12793__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto__))
})();
var state__12908__auto__ = (function (){var statearr_15410 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto__);

return statearr_15410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto__))
);

return c__12906__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15437 = [];
var len__6934__auto___15440 = arguments.length;
var i__6935__auto___15441 = (0);
while(true){
if((i__6935__auto___15441 < len__6934__auto___15440)){
args15437.push((arguments[i__6935__auto___15441]));

var G__15442 = (i__6935__auto___15441 + (1));
i__6935__auto___15441 = G__15442;
continue;
} else {
}
break;
}

var G__15439 = args15437.length;
switch (G__15439) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15437.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15444 = [];
var len__6934__auto___15447 = arguments.length;
var i__6935__auto___15448 = (0);
while(true){
if((i__6935__auto___15448 < len__6934__auto___15447)){
args15444.push((arguments[i__6935__auto___15448]));

var G__15449 = (i__6935__auto___15448 + (1));
i__6935__auto___15448 = G__15449;
continue;
} else {
}
break;
}

var G__15446 = args15444.length;
switch (G__15446) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15444.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15451 = [];
var len__6934__auto___15502 = arguments.length;
var i__6935__auto___15503 = (0);
while(true){
if((i__6935__auto___15503 < len__6934__auto___15502)){
args15451.push((arguments[i__6935__auto___15503]));

var G__15504 = (i__6935__auto___15503 + (1));
i__6935__auto___15503 = G__15504;
continue;
} else {
}
break;
}

var G__15453 = args15451.length;
switch (G__15453) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15451.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12906__auto___15506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15506,out){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15506,out){
return (function (state_15477){
var state_val_15478 = (state_15477[(1)]);
if((state_val_15478 === (7))){
var inst_15472 = (state_15477[(2)]);
var state_15477__$1 = state_15477;
var statearr_15479_15507 = state_15477__$1;
(statearr_15479_15507[(2)] = inst_15472);

(statearr_15479_15507[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15478 === (1))){
var inst_15454 = null;
var state_15477__$1 = (function (){var statearr_15480 = state_15477;
(statearr_15480[(7)] = inst_15454);

return statearr_15480;
})();
var statearr_15481_15508 = state_15477__$1;
(statearr_15481_15508[(2)] = null);

(statearr_15481_15508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15478 === (4))){
var inst_15457 = (state_15477[(8)]);
var inst_15457__$1 = (state_15477[(2)]);
var inst_15458 = (inst_15457__$1 == null);
var inst_15459 = cljs.core.not(inst_15458);
var state_15477__$1 = (function (){var statearr_15482 = state_15477;
(statearr_15482[(8)] = inst_15457__$1);

return statearr_15482;
})();
if(inst_15459){
var statearr_15483_15509 = state_15477__$1;
(statearr_15483_15509[(1)] = (5));

} else {
var statearr_15484_15510 = state_15477__$1;
(statearr_15484_15510[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15478 === (6))){
var state_15477__$1 = state_15477;
var statearr_15485_15511 = state_15477__$1;
(statearr_15485_15511[(2)] = null);

(statearr_15485_15511[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15478 === (3))){
var inst_15474 = (state_15477[(2)]);
var inst_15475 = cljs.core.async.close_BANG_(out);
var state_15477__$1 = (function (){var statearr_15486 = state_15477;
(statearr_15486[(9)] = inst_15474);

return statearr_15486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15477__$1,inst_15475);
} else {
if((state_val_15478 === (2))){
var state_15477__$1 = state_15477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15477__$1,(4),ch);
} else {
if((state_val_15478 === (11))){
var inst_15457 = (state_15477[(8)]);
var inst_15466 = (state_15477[(2)]);
var inst_15454 = inst_15457;
var state_15477__$1 = (function (){var statearr_15487 = state_15477;
(statearr_15487[(10)] = inst_15466);

(statearr_15487[(7)] = inst_15454);

return statearr_15487;
})();
var statearr_15488_15512 = state_15477__$1;
(statearr_15488_15512[(2)] = null);

(statearr_15488_15512[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15478 === (9))){
var inst_15457 = (state_15477[(8)]);
var state_15477__$1 = state_15477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15477__$1,(11),out,inst_15457);
} else {
if((state_val_15478 === (5))){
var inst_15454 = (state_15477[(7)]);
var inst_15457 = (state_15477[(8)]);
var inst_15461 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15457,inst_15454);
var state_15477__$1 = state_15477;
if(inst_15461){
var statearr_15490_15513 = state_15477__$1;
(statearr_15490_15513[(1)] = (8));

} else {
var statearr_15491_15514 = state_15477__$1;
(statearr_15491_15514[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15478 === (10))){
var inst_15469 = (state_15477[(2)]);
var state_15477__$1 = state_15477;
var statearr_15492_15515 = state_15477__$1;
(statearr_15492_15515[(2)] = inst_15469);

(statearr_15492_15515[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15478 === (8))){
var inst_15454 = (state_15477[(7)]);
var tmp15489 = inst_15454;
var inst_15454__$1 = tmp15489;
var state_15477__$1 = (function (){var statearr_15493 = state_15477;
(statearr_15493[(7)] = inst_15454__$1);

return statearr_15493;
})();
var statearr_15494_15516 = state_15477__$1;
(statearr_15494_15516[(2)] = null);

(statearr_15494_15516[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___15506,out))
;
return ((function (switch__12792__auto__,c__12906__auto___15506,out){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_15498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15498[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_15498[(1)] = (1));

return statearr_15498;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_15477){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15477);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15499){if((e15499 instanceof Object)){
var ex__12796__auto__ = e15499;
var statearr_15500_15517 = state_15477;
(statearr_15500_15517[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15477);

return cljs.core.cst$kw$recur;
} else {
throw e15499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15518 = state_15477;
state_15477 = G__15518;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_15477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_15477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15506,out))
})();
var state__12908__auto__ = (function (){var statearr_15501 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15506);

return statearr_15501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15506,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15519 = [];
var len__6934__auto___15589 = arguments.length;
var i__6935__auto___15590 = (0);
while(true){
if((i__6935__auto___15590 < len__6934__auto___15589)){
args15519.push((arguments[i__6935__auto___15590]));

var G__15591 = (i__6935__auto___15590 + (1));
i__6935__auto___15590 = G__15591;
continue;
} else {
}
break;
}

var G__15521 = args15519.length;
switch (G__15521) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15519.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12906__auto___15593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15593,out){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15593,out){
return (function (state_15559){
var state_val_15560 = (state_15559[(1)]);
if((state_val_15560 === (7))){
var inst_15555 = (state_15559[(2)]);
var state_15559__$1 = state_15559;
var statearr_15561_15594 = state_15559__$1;
(statearr_15561_15594[(2)] = inst_15555);

(statearr_15561_15594[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (1))){
var inst_15522 = (new Array(n));
var inst_15523 = inst_15522;
var inst_15524 = (0);
var state_15559__$1 = (function (){var statearr_15562 = state_15559;
(statearr_15562[(7)] = inst_15524);

(statearr_15562[(8)] = inst_15523);

return statearr_15562;
})();
var statearr_15563_15595 = state_15559__$1;
(statearr_15563_15595[(2)] = null);

(statearr_15563_15595[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (4))){
var inst_15527 = (state_15559[(9)]);
var inst_15527__$1 = (state_15559[(2)]);
var inst_15528 = (inst_15527__$1 == null);
var inst_15529 = cljs.core.not(inst_15528);
var state_15559__$1 = (function (){var statearr_15564 = state_15559;
(statearr_15564[(9)] = inst_15527__$1);

return statearr_15564;
})();
if(inst_15529){
var statearr_15565_15596 = state_15559__$1;
(statearr_15565_15596[(1)] = (5));

} else {
var statearr_15566_15597 = state_15559__$1;
(statearr_15566_15597[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (15))){
var inst_15549 = (state_15559[(2)]);
var state_15559__$1 = state_15559;
var statearr_15567_15598 = state_15559__$1;
(statearr_15567_15598[(2)] = inst_15549);

(statearr_15567_15598[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (13))){
var state_15559__$1 = state_15559;
var statearr_15568_15599 = state_15559__$1;
(statearr_15568_15599[(2)] = null);

(statearr_15568_15599[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (6))){
var inst_15524 = (state_15559[(7)]);
var inst_15545 = (inst_15524 > (0));
var state_15559__$1 = state_15559;
if(cljs.core.truth_(inst_15545)){
var statearr_15569_15600 = state_15559__$1;
(statearr_15569_15600[(1)] = (12));

} else {
var statearr_15570_15601 = state_15559__$1;
(statearr_15570_15601[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (3))){
var inst_15557 = (state_15559[(2)]);
var state_15559__$1 = state_15559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15559__$1,inst_15557);
} else {
if((state_val_15560 === (12))){
var inst_15523 = (state_15559[(8)]);
var inst_15547 = cljs.core.vec(inst_15523);
var state_15559__$1 = state_15559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15559__$1,(15),out,inst_15547);
} else {
if((state_val_15560 === (2))){
var state_15559__$1 = state_15559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15559__$1,(4),ch);
} else {
if((state_val_15560 === (11))){
var inst_15539 = (state_15559[(2)]);
var inst_15540 = (new Array(n));
var inst_15523 = inst_15540;
var inst_15524 = (0);
var state_15559__$1 = (function (){var statearr_15571 = state_15559;
(statearr_15571[(7)] = inst_15524);

(statearr_15571[(8)] = inst_15523);

(statearr_15571[(10)] = inst_15539);

return statearr_15571;
})();
var statearr_15572_15602 = state_15559__$1;
(statearr_15572_15602[(2)] = null);

(statearr_15572_15602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (9))){
var inst_15523 = (state_15559[(8)]);
var inst_15537 = cljs.core.vec(inst_15523);
var state_15559__$1 = state_15559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15559__$1,(11),out,inst_15537);
} else {
if((state_val_15560 === (5))){
var inst_15532 = (state_15559[(11)]);
var inst_15527 = (state_15559[(9)]);
var inst_15524 = (state_15559[(7)]);
var inst_15523 = (state_15559[(8)]);
var inst_15531 = (inst_15523[inst_15524] = inst_15527);
var inst_15532__$1 = (inst_15524 + (1));
var inst_15533 = (inst_15532__$1 < n);
var state_15559__$1 = (function (){var statearr_15573 = state_15559;
(statearr_15573[(11)] = inst_15532__$1);

(statearr_15573[(12)] = inst_15531);

return statearr_15573;
})();
if(cljs.core.truth_(inst_15533)){
var statearr_15574_15603 = state_15559__$1;
(statearr_15574_15603[(1)] = (8));

} else {
var statearr_15575_15604 = state_15559__$1;
(statearr_15575_15604[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (14))){
var inst_15552 = (state_15559[(2)]);
var inst_15553 = cljs.core.async.close_BANG_(out);
var state_15559__$1 = (function (){var statearr_15577 = state_15559;
(statearr_15577[(13)] = inst_15552);

return statearr_15577;
})();
var statearr_15578_15605 = state_15559__$1;
(statearr_15578_15605[(2)] = inst_15553);

(statearr_15578_15605[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (10))){
var inst_15543 = (state_15559[(2)]);
var state_15559__$1 = state_15559;
var statearr_15579_15606 = state_15559__$1;
(statearr_15579_15606[(2)] = inst_15543);

(statearr_15579_15606[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15560 === (8))){
var inst_15532 = (state_15559[(11)]);
var inst_15523 = (state_15559[(8)]);
var tmp15576 = inst_15523;
var inst_15523__$1 = tmp15576;
var inst_15524 = inst_15532;
var state_15559__$1 = (function (){var statearr_15580 = state_15559;
(statearr_15580[(7)] = inst_15524);

(statearr_15580[(8)] = inst_15523__$1);

return statearr_15580;
})();
var statearr_15581_15607 = state_15559__$1;
(statearr_15581_15607[(2)] = null);

(statearr_15581_15607[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___15593,out))
;
return ((function (switch__12792__auto__,c__12906__auto___15593,out){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_15585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15585[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_15585[(1)] = (1));

return statearr_15585;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_15559){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15559);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15586){if((e15586 instanceof Object)){
var ex__12796__auto__ = e15586;
var statearr_15587_15608 = state_15559;
(statearr_15587_15608[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15559);

return cljs.core.cst$kw$recur;
} else {
throw e15586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15609 = state_15559;
state_15559 = G__15609;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_15559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_15559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15593,out))
})();
var state__12908__auto__ = (function (){var statearr_15588 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15593);

return statearr_15588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15593,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15610 = [];
var len__6934__auto___15684 = arguments.length;
var i__6935__auto___15685 = (0);
while(true){
if((i__6935__auto___15685 < len__6934__auto___15684)){
args15610.push((arguments[i__6935__auto___15685]));

var G__15686 = (i__6935__auto___15685 + (1));
i__6935__auto___15685 = G__15686;
continue;
} else {
}
break;
}

var G__15612 = args15610.length;
switch (G__15612) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15610.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12906__auto___15688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15688,out){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15688,out){
return (function (state_15654){
var state_val_15655 = (state_15654[(1)]);
if((state_val_15655 === (7))){
var inst_15650 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
var statearr_15656_15689 = state_15654__$1;
(statearr_15656_15689[(2)] = inst_15650);

(statearr_15656_15689[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (1))){
var inst_15613 = [];
var inst_15614 = inst_15613;
var inst_15615 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_15654__$1 = (function (){var statearr_15657 = state_15654;
(statearr_15657[(7)] = inst_15615);

(statearr_15657[(8)] = inst_15614);

return statearr_15657;
})();
var statearr_15658_15690 = state_15654__$1;
(statearr_15658_15690[(2)] = null);

(statearr_15658_15690[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (4))){
var inst_15618 = (state_15654[(9)]);
var inst_15618__$1 = (state_15654[(2)]);
var inst_15619 = (inst_15618__$1 == null);
var inst_15620 = cljs.core.not(inst_15619);
var state_15654__$1 = (function (){var statearr_15659 = state_15654;
(statearr_15659[(9)] = inst_15618__$1);

return statearr_15659;
})();
if(inst_15620){
var statearr_15660_15691 = state_15654__$1;
(statearr_15660_15691[(1)] = (5));

} else {
var statearr_15661_15692 = state_15654__$1;
(statearr_15661_15692[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (15))){
var inst_15644 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
var statearr_15662_15693 = state_15654__$1;
(statearr_15662_15693[(2)] = inst_15644);

(statearr_15662_15693[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (13))){
var state_15654__$1 = state_15654;
var statearr_15663_15694 = state_15654__$1;
(statearr_15663_15694[(2)] = null);

(statearr_15663_15694[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (6))){
var inst_15614 = (state_15654[(8)]);
var inst_15639 = inst_15614.length;
var inst_15640 = (inst_15639 > (0));
var state_15654__$1 = state_15654;
if(cljs.core.truth_(inst_15640)){
var statearr_15664_15695 = state_15654__$1;
(statearr_15664_15695[(1)] = (12));

} else {
var statearr_15665_15696 = state_15654__$1;
(statearr_15665_15696[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (3))){
var inst_15652 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15654__$1,inst_15652);
} else {
if((state_val_15655 === (12))){
var inst_15614 = (state_15654[(8)]);
var inst_15642 = cljs.core.vec(inst_15614);
var state_15654__$1 = state_15654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15654__$1,(15),out,inst_15642);
} else {
if((state_val_15655 === (2))){
var state_15654__$1 = state_15654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15654__$1,(4),ch);
} else {
if((state_val_15655 === (11))){
var inst_15618 = (state_15654[(9)]);
var inst_15622 = (state_15654[(10)]);
var inst_15632 = (state_15654[(2)]);
var inst_15633 = [];
var inst_15634 = inst_15633.push(inst_15618);
var inst_15614 = inst_15633;
var inst_15615 = inst_15622;
var state_15654__$1 = (function (){var statearr_15666 = state_15654;
(statearr_15666[(11)] = inst_15632);

(statearr_15666[(7)] = inst_15615);

(statearr_15666[(8)] = inst_15614);

(statearr_15666[(12)] = inst_15634);

return statearr_15666;
})();
var statearr_15667_15697 = state_15654__$1;
(statearr_15667_15697[(2)] = null);

(statearr_15667_15697[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (9))){
var inst_15614 = (state_15654[(8)]);
var inst_15630 = cljs.core.vec(inst_15614);
var state_15654__$1 = state_15654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15654__$1,(11),out,inst_15630);
} else {
if((state_val_15655 === (5))){
var inst_15618 = (state_15654[(9)]);
var inst_15615 = (state_15654[(7)]);
var inst_15622 = (state_15654[(10)]);
var inst_15622__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15618) : f.call(null,inst_15618));
var inst_15623 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15622__$1,inst_15615);
var inst_15624 = cljs.core.keyword_identical_QMARK_(inst_15615,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_15625 = (inst_15623) || (inst_15624);
var state_15654__$1 = (function (){var statearr_15668 = state_15654;
(statearr_15668[(10)] = inst_15622__$1);

return statearr_15668;
})();
if(cljs.core.truth_(inst_15625)){
var statearr_15669_15698 = state_15654__$1;
(statearr_15669_15698[(1)] = (8));

} else {
var statearr_15670_15699 = state_15654__$1;
(statearr_15670_15699[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (14))){
var inst_15647 = (state_15654[(2)]);
var inst_15648 = cljs.core.async.close_BANG_(out);
var state_15654__$1 = (function (){var statearr_15672 = state_15654;
(statearr_15672[(13)] = inst_15647);

return statearr_15672;
})();
var statearr_15673_15700 = state_15654__$1;
(statearr_15673_15700[(2)] = inst_15648);

(statearr_15673_15700[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (10))){
var inst_15637 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
var statearr_15674_15701 = state_15654__$1;
(statearr_15674_15701[(2)] = inst_15637);

(statearr_15674_15701[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15655 === (8))){
var inst_15618 = (state_15654[(9)]);
var inst_15614 = (state_15654[(8)]);
var inst_15622 = (state_15654[(10)]);
var inst_15627 = inst_15614.push(inst_15618);
var tmp15671 = inst_15614;
var inst_15614__$1 = tmp15671;
var inst_15615 = inst_15622;
var state_15654__$1 = (function (){var statearr_15675 = state_15654;
(statearr_15675[(7)] = inst_15615);

(statearr_15675[(8)] = inst_15614__$1);

(statearr_15675[(14)] = inst_15627);

return statearr_15675;
})();
var statearr_15676_15702 = state_15654__$1;
(statearr_15676_15702[(2)] = null);

(statearr_15676_15702[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__12906__auto___15688,out))
;
return ((function (switch__12792__auto__,c__12906__auto___15688,out){
return (function() {
var cljs$core$async$state_machine__12793__auto__ = null;
var cljs$core$async$state_machine__12793__auto____0 = (function (){
var statearr_15680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15680[(0)] = cljs$core$async$state_machine__12793__auto__);

(statearr_15680[(1)] = (1));

return statearr_15680;
});
var cljs$core$async$state_machine__12793__auto____1 = (function (state_15654){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15654);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15681){if((e15681 instanceof Object)){
var ex__12796__auto__ = e15681;
var statearr_15682_15703 = state_15654;
(statearr_15682_15703[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15654);

return cljs.core.cst$kw$recur;
} else {
throw e15681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15704 = state_15654;
state_15654 = G__15704;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
cljs$core$async$state_machine__12793__auto__ = function(state_15654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12793__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12793__auto____1.call(this,state_15654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12793__auto____0;
cljs$core$async$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12793__auto____1;
return cljs$core$async$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15688,out))
})();
var state__12908__auto__ = (function (){var statearr_15683 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15688);

return statearr_15683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15688,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
