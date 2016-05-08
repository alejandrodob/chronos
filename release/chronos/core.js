// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('chronos.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_();
chronos.core.ONE_SECOND = (1000);
chronos.core.add_btn = goog.dom.getElement("add");
chronos.core.start_btn = goog.dom.getElement("start");
chronos.core.pause_btn = goog.dom.getElement("pause");
chronos.core.time_input = goog.dom.getElement("timeAmount");
chronos.core.timer_container = goog.dom.getElement("timer");
chronos.core.clock_state = (function (){var G__15707 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$time,(0),cljs.core.cst$kw$started,false], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15707) : cljs.core.atom.call(null,G__15707));
})();
chronos.core.draw_time = (function chronos$core$draw_time(seconds){
return goog.dom.setTextContent(chronos.core.timer_container,seconds);
});
chronos.core.listen = (function chronos$core$listen(el,type){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__15712_15715 = el;
var G__15713_15716 = type;
var G__15714_15717 = ((function (G__15712_15715,G__15713_15716,c){
return (function (p1__15708_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__15708_SHARP_);
});})(G__15712_15715,G__15713_15716,c))
;
goog.events.listen(G__15712_15715,G__15713_15716,G__15714_15717);

return c;
});
chronos.core.listen_to_click = (function chronos$core$listen_to_click(element){
return chronos.core.listen(element,"click");
});
chronos.core.decrease_one = (function chronos$core$decrease_one(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chronos.core.clock_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null),cljs.core.dec);
});
chronos.core.set_timer = (function chronos$core$set_timer(seconds){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chronos.core.clock_state,cljs.core.assoc,cljs.core.cst$kw$time,seconds);
});
chronos.core.do_count = (function chronos$core$do_count(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chronos.core.clock_state,cljs.core.assoc,cljs.core.cst$kw$started,true);

var c__12906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto__){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto__){
return (function (state_15783){
var state_val_15784 = (state_15783[(1)]);
if((state_val_15784 === (7))){
var inst_15772 = cljs.core.async.timeout(chronos.core.ONE_SECOND);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15783__$1,(10),inst_15772);
} else {
if((state_val_15784 === (1))){
var state_15783__$1 = state_15783;
var statearr_15785_15804 = state_15783__$1;
(statearr_15785_15804[(2)] = null);

(statearr_15785_15804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15784 === (4))){
var inst_15766 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chronos.core.clock_state) : cljs.core.deref.call(null,chronos.core.clock_state));
var inst_15767 = cljs.core.cst$kw$started.cljs$core$IFn$_invoke$arity$1(inst_15766);
var state_15783__$1 = state_15783;
var statearr_15786_15805 = state_15783__$1;
(statearr_15786_15805[(2)] = inst_15767);

(statearr_15786_15805[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15784 === (6))){
var inst_15770 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
if(cljs.core.truth_(inst_15770)){
var statearr_15787_15806 = state_15783__$1;
(statearr_15787_15806[(1)] = (7));

} else {
var statearr_15788_15807 = state_15783__$1;
(statearr_15788_15807[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15784 === (3))){
var inst_15781 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15783__$1,inst_15781);
} else {
if((state_val_15784 === (2))){
var inst_15764 = (state_15783[(7)]);
var inst_15762 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chronos.core.clock_state) : cljs.core.deref.call(null,chronos.core.clock_state));
var inst_15763 = cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(inst_15762);
var inst_15764__$1 = (inst_15763 > (0));
var state_15783__$1 = (function (){var statearr_15789 = state_15783;
(statearr_15789[(7)] = inst_15764__$1);

return statearr_15789;
})();
if(cljs.core.truth_(inst_15764__$1)){
var statearr_15790_15808 = state_15783__$1;
(statearr_15790_15808[(1)] = (4));

} else {
var statearr_15791_15809 = state_15783__$1;
(statearr_15791_15809[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15784 === (9))){
var inst_15779 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
var statearr_15792_15810 = state_15783__$1;
(statearr_15792_15810[(2)] = inst_15779);

(statearr_15792_15810[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15784 === (5))){
var inst_15764 = (state_15783[(7)]);
var state_15783__$1 = state_15783;
var statearr_15793_15811 = state_15783__$1;
(statearr_15793_15811[(2)] = inst_15764);

(statearr_15793_15811[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15784 === (10))){
var inst_15774 = (state_15783[(2)]);
var inst_15775 = chronos.core.decrease_one();
var state_15783__$1 = (function (){var statearr_15794 = state_15783;
(statearr_15794[(8)] = inst_15774);

(statearr_15794[(9)] = inst_15775);

return statearr_15794;
})();
var statearr_15795_15812 = state_15783__$1;
(statearr_15795_15812[(2)] = null);

(statearr_15795_15812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15784 === (8))){
var state_15783__$1 = state_15783;
var statearr_15796_15813 = state_15783__$1;
(statearr_15796_15813[(2)] = null);

(statearr_15796_15813[(1)] = (9));


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
var chronos$core$do_count_$_state_machine__12793__auto__ = null;
var chronos$core$do_count_$_state_machine__12793__auto____0 = (function (){
var statearr_15800 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15800[(0)] = chronos$core$do_count_$_state_machine__12793__auto__);

(statearr_15800[(1)] = (1));

return statearr_15800;
});
var chronos$core$do_count_$_state_machine__12793__auto____1 = (function (state_15783){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15783);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15801){if((e15801 instanceof Object)){
var ex__12796__auto__ = e15801;
var statearr_15802_15814 = state_15783;
(statearr_15802_15814[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15783);

return cljs.core.cst$kw$recur;
} else {
throw e15801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15815 = state_15783;
state_15783 = G__15815;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
chronos$core$do_count_$_state_machine__12793__auto__ = function(state_15783){
switch(arguments.length){
case 0:
return chronos$core$do_count_$_state_machine__12793__auto____0.call(this);
case 1:
return chronos$core$do_count_$_state_machine__12793__auto____1.call(this,state_15783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chronos$core$do_count_$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = chronos$core$do_count_$_state_machine__12793__auto____0;
chronos$core$do_count_$_state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = chronos$core$do_count_$_state_machine__12793__auto____1;
return chronos$core$do_count_$_state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto__))
})();
var state__12908__auto__ = (function (){var statearr_15803 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto__);

return statearr_15803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto__))
);

return c__12906__auto__;
});
chronos.core.pause_counter = (function chronos$core$pause_counter(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(chronos.core.clock_state,cljs.core.assoc,cljs.core.cst$kw$started,false);
});
cljs.core.add_watch(chronos.core.clock_state,cljs.core.cst$kw$watcher,(function (p1__15817_SHARP_,p2__15818_SHARP_,p3__15819_SHARP_,p4__15816_SHARP_){
return chronos.core.draw_time(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p4__15816_SHARP_));
}));
var c__12906__auto___15850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15850){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15850){
return (function (state_15834){
var state_val_15835 = (state_15834[(1)]);
if((state_val_15835 === (1))){
var state_15834__$1 = state_15834;
var statearr_15836_15851 = state_15834__$1;
(statearr_15836_15851[(2)] = null);

(statearr_15836_15851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15835 === (2))){
var state_15834__$1 = state_15834;
var statearr_15837_15852 = state_15834__$1;
(statearr_15837_15852[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_15835 === (3))){
var inst_15832 = (state_15834[(2)]);
var state_15834__$1 = state_15834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15834__$1,inst_15832);
} else {
if((state_val_15835 === (4))){
var inst_15822 = chronos.core.listen_to_click(chronos.core.add_btn);
var state_15834__$1 = state_15834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15834__$1,(7),inst_15822);
} else {
if((state_val_15835 === (5))){
var state_15834__$1 = state_15834;
var statearr_15839_15853 = state_15834__$1;
(statearr_15839_15853[(2)] = null);

(statearr_15839_15853[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15835 === (6))){
var inst_15830 = (state_15834[(2)]);
var state_15834__$1 = state_15834;
var statearr_15840_15854 = state_15834__$1;
(statearr_15840_15854[(2)] = inst_15830);

(statearr_15840_15854[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15835 === (7))){
var inst_15824 = (state_15834[(2)]);
var inst_15825 = chronos.core.time_input.value;
var inst_15826 = chronos.core.set_timer(inst_15825);
var state_15834__$1 = (function (){var statearr_15841 = state_15834;
(statearr_15841[(7)] = inst_15826);

(statearr_15841[(8)] = inst_15824);

return statearr_15841;
})();
var statearr_15842_15855 = state_15834__$1;
(statearr_15842_15855[(2)] = null);

(statearr_15842_15855[(1)] = (2));


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
});})(c__12906__auto___15850))
;
return ((function (switch__12792__auto__,c__12906__auto___15850){
return (function() {
var chronos$core$state_machine__12793__auto__ = null;
var chronos$core$state_machine__12793__auto____0 = (function (){
var statearr_15846 = [null,null,null,null,null,null,null,null,null];
(statearr_15846[(0)] = chronos$core$state_machine__12793__auto__);

(statearr_15846[(1)] = (1));

return statearr_15846;
});
var chronos$core$state_machine__12793__auto____1 = (function (state_15834){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15834);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15847){if((e15847 instanceof Object)){
var ex__12796__auto__ = e15847;
var statearr_15848_15856 = state_15834;
(statearr_15848_15856[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15834);

return cljs.core.cst$kw$recur;
} else {
throw e15847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15857 = state_15834;
state_15834 = G__15857;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
chronos$core$state_machine__12793__auto__ = function(state_15834){
switch(arguments.length){
case 0:
return chronos$core$state_machine__12793__auto____0.call(this);
case 1:
return chronos$core$state_machine__12793__auto____1.call(this,state_15834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chronos$core$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = chronos$core$state_machine__12793__auto____0;
chronos$core$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = chronos$core$state_machine__12793__auto____1;
return chronos$core$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15850))
})();
var state__12908__auto__ = (function (){var statearr_15849 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15850);

return statearr_15849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15850))
);

var c__12906__auto___15887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15887){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15887){
return (function (state_15871){
var state_val_15872 = (state_15871[(1)]);
if((state_val_15872 === (1))){
var state_15871__$1 = state_15871;
var statearr_15873_15888 = state_15871__$1;
(statearr_15873_15888[(2)] = null);

(statearr_15873_15888[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (2))){
var state_15871__$1 = state_15871;
var statearr_15874_15889 = state_15871__$1;
(statearr_15874_15889[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (3))){
var inst_15869 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15871__$1,inst_15869);
} else {
if((state_val_15872 === (4))){
var inst_15860 = chronos.core.listen_to_click(chronos.core.start_btn);
var state_15871__$1 = state_15871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15871__$1,(7),inst_15860);
} else {
if((state_val_15872 === (5))){
var state_15871__$1 = state_15871;
var statearr_15876_15890 = state_15871__$1;
(statearr_15876_15890[(2)] = null);

(statearr_15876_15890[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (6))){
var inst_15867 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
var statearr_15877_15891 = state_15871__$1;
(statearr_15877_15891[(2)] = inst_15867);

(statearr_15877_15891[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15872 === (7))){
var inst_15862 = (state_15871[(2)]);
var inst_15863 = chronos.core.do_count();
var state_15871__$1 = (function (){var statearr_15878 = state_15871;
(statearr_15878[(7)] = inst_15862);

(statearr_15878[(8)] = inst_15863);

return statearr_15878;
})();
var statearr_15879_15892 = state_15871__$1;
(statearr_15879_15892[(2)] = null);

(statearr_15879_15892[(1)] = (2));


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
});})(c__12906__auto___15887))
;
return ((function (switch__12792__auto__,c__12906__auto___15887){
return (function() {
var chronos$core$state_machine__12793__auto__ = null;
var chronos$core$state_machine__12793__auto____0 = (function (){
var statearr_15883 = [null,null,null,null,null,null,null,null,null];
(statearr_15883[(0)] = chronos$core$state_machine__12793__auto__);

(statearr_15883[(1)] = (1));

return statearr_15883;
});
var chronos$core$state_machine__12793__auto____1 = (function (state_15871){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15871);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15884){if((e15884 instanceof Object)){
var ex__12796__auto__ = e15884;
var statearr_15885_15893 = state_15871;
(statearr_15885_15893[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15871);

return cljs.core.cst$kw$recur;
} else {
throw e15884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15894 = state_15871;
state_15871 = G__15894;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
chronos$core$state_machine__12793__auto__ = function(state_15871){
switch(arguments.length){
case 0:
return chronos$core$state_machine__12793__auto____0.call(this);
case 1:
return chronos$core$state_machine__12793__auto____1.call(this,state_15871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chronos$core$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = chronos$core$state_machine__12793__auto____0;
chronos$core$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = chronos$core$state_machine__12793__auto____1;
return chronos$core$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15887))
})();
var state__12908__auto__ = (function (){var statearr_15886 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15887);

return statearr_15886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15887))
);

var c__12906__auto___15924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12906__auto___15924){
return (function (){
var f__12907__auto__ = (function (){var switch__12792__auto__ = ((function (c__12906__auto___15924){
return (function (state_15908){
var state_val_15909 = (state_15908[(1)]);
if((state_val_15909 === (1))){
var state_15908__$1 = state_15908;
var statearr_15910_15925 = state_15908__$1;
(statearr_15910_15925[(2)] = null);

(statearr_15910_15925[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15909 === (2))){
var state_15908__$1 = state_15908;
var statearr_15911_15926 = state_15908__$1;
(statearr_15911_15926[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_15909 === (3))){
var inst_15906 = (state_15908[(2)]);
var state_15908__$1 = state_15908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15908__$1,inst_15906);
} else {
if((state_val_15909 === (4))){
var inst_15897 = chronos.core.listen_to_click(chronos.core.pause_btn);
var state_15908__$1 = state_15908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15908__$1,(7),inst_15897);
} else {
if((state_val_15909 === (5))){
var state_15908__$1 = state_15908;
var statearr_15913_15927 = state_15908__$1;
(statearr_15913_15927[(2)] = null);

(statearr_15913_15927[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15909 === (6))){
var inst_15904 = (state_15908[(2)]);
var state_15908__$1 = state_15908;
var statearr_15914_15928 = state_15908__$1;
(statearr_15914_15928[(2)] = inst_15904);

(statearr_15914_15928[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15909 === (7))){
var inst_15899 = (state_15908[(2)]);
var inst_15900 = chronos.core.pause_counter();
var state_15908__$1 = (function (){var statearr_15915 = state_15908;
(statearr_15915[(7)] = inst_15899);

(statearr_15915[(8)] = inst_15900);

return statearr_15915;
})();
var statearr_15916_15929 = state_15908__$1;
(statearr_15916_15929[(2)] = null);

(statearr_15916_15929[(1)] = (2));


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
});})(c__12906__auto___15924))
;
return ((function (switch__12792__auto__,c__12906__auto___15924){
return (function() {
var chronos$core$state_machine__12793__auto__ = null;
var chronos$core$state_machine__12793__auto____0 = (function (){
var statearr_15920 = [null,null,null,null,null,null,null,null,null];
(statearr_15920[(0)] = chronos$core$state_machine__12793__auto__);

(statearr_15920[(1)] = (1));

return statearr_15920;
});
var chronos$core$state_machine__12793__auto____1 = (function (state_15908){
while(true){
var ret_value__12794__auto__ = (function (){try{while(true){
var result__12795__auto__ = switch__12792__auto__(state_15908);
if(cljs.core.keyword_identical_QMARK_(result__12795__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12795__auto__;
}
break;
}
}catch (e15921){if((e15921 instanceof Object)){
var ex__12796__auto__ = e15921;
var statearr_15922_15930 = state_15908;
(statearr_15922_15930[(5)] = ex__12796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15908);

return cljs.core.cst$kw$recur;
} else {
throw e15921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12794__auto__,cljs.core.cst$kw$recur)){
var G__15931 = state_15908;
state_15908 = G__15931;
continue;
} else {
return ret_value__12794__auto__;
}
break;
}
});
chronos$core$state_machine__12793__auto__ = function(state_15908){
switch(arguments.length){
case 0:
return chronos$core$state_machine__12793__auto____0.call(this);
case 1:
return chronos$core$state_machine__12793__auto____1.call(this,state_15908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chronos$core$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$0 = chronos$core$state_machine__12793__auto____0;
chronos$core$state_machine__12793__auto__.cljs$core$IFn$_invoke$arity$1 = chronos$core$state_machine__12793__auto____1;
return chronos$core$state_machine__12793__auto__;
})()
;})(switch__12792__auto__,c__12906__auto___15924))
})();
var state__12908__auto__ = (function (){var statearr_15923 = (f__12907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12907__auto__.cljs$core$IFn$_invoke$arity$0() : f__12907__auto__.call(null));
(statearr_15923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12906__auto___15924);

return statearr_15923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12908__auto__);
});})(c__12906__auto___15924))
);

