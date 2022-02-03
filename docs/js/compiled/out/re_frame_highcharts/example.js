// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame_highcharts.example');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('re_frame_highcharts.utils');
goog.require('re_frame_highcharts.example_data');
re_frame_highcharts.example.line_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"line"], null),new cljs.core.Keyword(null,"plotOptions","plotOptions",-1622538002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),false], null)], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"layout","layout",-2120940921),"vertical",new cljs.core.Keyword(null,"align","align",1964212802),"right",new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"top",new cljs.core.Keyword(null,"floating","floating",-1978091029),true,new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),(1),new cljs.core.Keyword(null,"shadow","shadow",873231803),true], null),new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"series-1",new cljs.core.Keyword(null,"name","name",1843675177),"Secords",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY], null)], null)], null);
re_frame_highcharts.example.pie_config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"pie"], null),new cljs.core.Keyword(null,"plotOptions","plotOptions",-1622538002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pie","pie",1530441672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),false], null)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"A pie chart"], null),new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"series-1",new cljs.core.Keyword(null,"name","name",1843675177),"Test",new cljs.core.Keyword(null,"innerSize","innerSize",-1756763149),"80%",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Test 1",new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Test 2",new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Test 3",new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null)], null)], null)], null)], null);
re_frame_highcharts.example.stock_config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rangeSelector","rangeSelector",33047694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(1)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"AAPL Stock Price"], null),new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"AAPL",new cljs.core.Keyword(null,"data","data",-232669377),re_frame_highcharts.example_data.stock_data,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(2)], null)], null)], null)], null);
re_frame_highcharts.example.dispatch_timer_event = (function re_frame_highcharts$example$dispatch_timer_event(){
var s = (new Date()).getSeconds();
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),s], null));
});
if((typeof re_frame_highcharts !== 'undefined') && (typeof re_frame_highcharts.example !== 'undefined') && (typeof re_frame_highcharts.example.do_timer !== 'undefined')){
} else {
re_frame_highcharts.example.do_timer = setInterval(re_frame_highcharts.example.dispatch_timer_event,(1000));
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chart-1","chart-1",339269305),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"chart-1","chart-1",339269305),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),cljs.core.assoc_in.call(null,re_frame_highcharts.example.line_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"Last 120 seconds")], null),new cljs.core.Keyword(null,"chart-2","chart-2",308791264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"chart-2","chart-2",308791264),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),cljs.core.assoc_in.call(null,re_frame_highcharts.example.line_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"Last 60 seconds")], null),new cljs.core.Keyword(null,"chart-3","chart-3",-1442161309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"chart-3","chart-3",-1442161309),new cljs.core.Keyword(null,"redo","redo",501190664),true], null),new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),re_frame_highcharts.example.pie_config], null),new cljs.core.Keyword(null,"stock-1","stock-1",-934989175),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"stock-1","stock-1",-934989175)], null),new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),re_frame_highcharts.example.stock_config], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__32084){
var vec__32085 = p__32084;
var _ = cljs.core.nth.call(null,vec__32085,(0),null);
var s = cljs.core.nth.call(null,vec__32085,(1),null);
var db__$1 = cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-1","chart-1",339269305),new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"series","series",600710694),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null),(function (p1__32082_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take_last.call(null,(120),cljs.core.conj.call(null,p1__32082_SHARP_,s)));
}));
var db__$2 = cljs.core.update_in.call(null,db__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-2","chart-2",308791264),new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"series","series",600710694),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null),(function (p1__32083_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take_last.call(null,(60),cljs.core.conj.call(null,p1__32083_SHARP_,s)));
}));
return db__$2;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"value","value",305978217),(function (db,p__32088){
var vec__32089 = p__32088;
var _ = cljs.core.nth.call(null,vec__32089,(0),null);
var k = cljs.core.nth.call(null,vec__32089,(1),null);
return k.call(null,db);
}));
re_frame_highcharts.example.chart_1 = (function re_frame_highcharts$example$chart_1(){
var data__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"chart-1","chart-1",339269305)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.utils.chart,cljs.core.deref.call(null,data__$1)], null);
});
});
re_frame_highcharts.example.chart_2 = (function re_frame_highcharts$example$chart_2(){
var data__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"chart-2","chart-2",308791264)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.utils.chart,cljs.core.deref.call(null,data__$1)], null);
});
});
re_frame_highcharts.example.chart_3 = (function re_frame_highcharts$example$chart_3(){
var data__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"chart-3","chart-3",-1442161309)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.utils.chart,cljs.core.deref.call(null,data__$1)], null);
});
});
re_frame_highcharts.example.stock_1 = (function re_frame_highcharts$example$stock_1(){
var data__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"stock-1","stock-1",-934989175)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.utils.stock,cljs.core.deref.call(null,data__$1)], null);
});
});
re_frame_highcharts.example.charts_ui = (function re_frame_highcharts$example$charts_ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.example.chart_1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.example.chart_2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.example.chart_3], null)], null)], null);
});
re_frame_highcharts.example.stock_ui = (function re_frame_highcharts$example$stock_ui(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.example.stock_1], null)], null)], null);
});
re_frame_highcharts.example.on_js_reload = (function re_frame_highcharts$example$on_js_reload(){
return null;
});
re_frame_highcharts.example.run = (function re_frame_highcharts$example$run(type){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

var G__32092 = type;
switch (G__32092) {
case "charts":
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.example.charts_ui], null),document.getElementById("app"));

break;
case "stock":
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_highcharts.example.stock_ui], null),document.getElementById("app"));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32092)].join('')));

}
});
goog.exportSymbol('re_frame_highcharts.example.run', re_frame_highcharts.example.run);

//# sourceMappingURL=example.js.map?rel=1643865386204
