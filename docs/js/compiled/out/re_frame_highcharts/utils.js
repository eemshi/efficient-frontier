// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame_highcharts.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof re_frame_highcharts !== 'undefined') && (typeof re_frame_highcharts.utils !== 'undefined') && (typeof re_frame_highcharts.utils.chart_instances !== 'undefined')){
} else {
re_frame_highcharts.utils.chart_instances = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frame_highcharts !== 'undefined') && (typeof re_frame_highcharts.utils !== 'undefined') && (typeof re_frame_highcharts.utils.stock_instances !== 'undefined')){
} else {
re_frame_highcharts.utils.stock_instances = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
re_frame_highcharts.utils.chart = (function re_frame_highcharts$utils$chart(p__32028){
var map__32029 = p__32028;
var map__32029__$1 = (((((!((map__32029 == null))))?(((((map__32029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32029):map__32029);
var chart_meta = cljs.core.get.call(null,map__32029__$1,new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542));
var style = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(chart_meta);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
}
})();
var render_chart = (function re_frame_highcharts$utils$chart_$_render_chart(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
});
var mount_chart = (function re_frame_highcharts$utils$chart_$_mount_chart(this$){
var vec__32041 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__32041,(0),null);
var map__32044 = cljs.core.nth.call(null,vec__32041,(1),null);
var map__32044__$1 = (((((!((map__32044 == null))))?(((((map__32044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32044):map__32044);
var chart_meta__$1 = cljs.core.get.call(null,map__32044__$1,new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542));
var chart_data = cljs.core.get.call(null,map__32044__$1,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206));
var chart_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(chart_meta__$1);
var chart_instance = (new Highcharts.Chart(reagent.dom.dom_node.call(null,this$),cljs.core.clj__GT_js.call(null,chart_data)));
return cljs.core.swap_BANG_.call(null,re_frame_highcharts.utils.chart_instances,cljs.core.assoc,chart_id,chart_instance);
});
var ensure_series = (function re_frame_highcharts$utils$chart_$_ensure_series(chart_instance,all_ids,id_chart_data){
var current_ids = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__32022_SHARP_){
return p1__32022_SHARP_.options.id;
}),chart_instance.series)));
var unwanted_ids = cljs.core.remove.call(null,(function (p1__32023_SHARP_){
return cljs.core._EQ_.call(null,p1__32023_SHARP_,"highcharts-navigator-series");
}),cljs.core.reduce.call(null,cljs.core.disj,current_ids,all_ids));
var existing_ids = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,current_ids),all_ids);
var new_ids = cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,current_ids),all_ids);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__32024_SHARP_){
return chart_instance.get(p1__32024_SHARP_).remove(false);
}),unwanted_ids));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__32025_SHARP_){
return chart_instance.get(p1__32025_SHARP_).setData(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,id_chart_data,p1__32025_SHARP_))),false);
}),existing_ids));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__32026_SHARP_){
return chart_instance.addSeries(cljs.core.clj__GT_js.call(null,cljs.core.get.call(null,id_chart_data,p1__32026_SHARP_)),false);
}),new_ids));

return chart_instance.redraw(false);
});
var update_chart = (function re_frame_highcharts$utils$chart_$_update_chart(this$){
var vec__32046 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__32046,(0),null);
var map__32049 = cljs.core.nth.call(null,vec__32046,(1),null);
var map__32049__$1 = (((((!((map__32049 == null))))?(((((map__32049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32049):map__32049);
var chart_meta__$1 = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542));
var chart_data = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206));
var chart_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(chart_meta__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"redo","redo",501190664).cljs$core$IFn$_invoke$arity$1(chart_meta__$1))){
cljs.core.swap_BANG_.call(null,re_frame_highcharts.utils.chart_instances,cljs.core.dissoc,chart_id);
} else {
}

var temp__5733__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame_highcharts.utils.chart_instances),chart_id);
if(cljs.core.truth_(temp__5733__auto__)){
var chart_instance = temp__5733__auto__;
return ensure_series.call(null,chart_instance,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"series","series",600710694).cljs$core$IFn$_invoke$arity$1(chart_data)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__32027_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__32027_SHARP_),p1__32027_SHARP_],null));
}),new cljs.core.Keyword(null,"series","series",600710694).cljs$core$IFn$_invoke$arity$1(chart_data))));
} else {
return mount_chart.call(null,this$);
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),render_chart,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mount_chart,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_chart], null));
});
re_frame_highcharts.utils.stock = (function re_frame_highcharts$utils$stock(p__32057){
var map__32058 = p__32057;
var map__32058__$1 = (((((!((map__32058 == null))))?(((((map__32058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32058):map__32058);
var chart_meta = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542));
var style = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(chart_meta);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
}
})();
var render_chart = (function re_frame_highcharts$utils$stock_$_render_chart(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
});
var mount_chart = (function re_frame_highcharts$utils$stock_$_mount_chart(this$){
var vec__32070 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__32070,(0),null);
var map__32073 = cljs.core.nth.call(null,vec__32070,(1),null);
var map__32073__$1 = (((((!((map__32073 == null))))?(((((map__32073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32073):map__32073);
var chart_meta__$1 = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542));
var chart_data = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206));
var chart_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(chart_meta__$1);
var chart_instance = (new Highcharts.StockChart(reagent.dom.dom_node.call(null,this$),cljs.core.clj__GT_js.call(null,chart_data)));
return cljs.core.swap_BANG_.call(null,re_frame_highcharts.utils.stock_instances,cljs.core.assoc,chart_id,chart_instance);
});
var ensure_series = (function re_frame_highcharts$utils$stock_$_ensure_series(chart_instance,all_ids,id_chart_data){
var current_ids = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__32051_SHARP_){
return p1__32051_SHARP_.options.id;
}),chart_instance.series)));
var unwanted_ids = cljs.core.remove.call(null,(function (p1__32052_SHARP_){
return cljs.core._EQ_.call(null,p1__32052_SHARP_,"highcharts-navigator-series");
}),cljs.core.reduce.call(null,cljs.core.disj,current_ids,all_ids));
var existing_ids = cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,current_ids),all_ids);
var new_ids = cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,current_ids),all_ids);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__32053_SHARP_){
return chart_instance.get(p1__32053_SHARP_).remove(false);
}),unwanted_ids));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__32054_SHARP_){
return chart_instance.get(p1__32054_SHARP_).setData(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,id_chart_data,p1__32054_SHARP_))),false);
}),existing_ids));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__32055_SHARP_){
return chart_instance.addSeries(cljs.core.clj__GT_js.call(null,cljs.core.get.call(null,id_chart_data,p1__32055_SHARP_)),false);
}),new_ids));

return chart_instance.redraw(false);
});
var update_chart = (function re_frame_highcharts$utils$stock_$_update_chart(this$){
var vec__32075 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__32075,(0),null);
var map__32078 = cljs.core.nth.call(null,vec__32075,(1),null);
var map__32078__$1 = (((((!((map__32078 == null))))?(((((map__32078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32078):map__32078);
var chart_meta__$1 = cljs.core.get.call(null,map__32078__$1,new cljs.core.Keyword(null,"chart-meta","chart-meta",-1100042542));
var chart_data = cljs.core.get.call(null,map__32078__$1,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206));
var chart_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(chart_meta__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"redo","redo",501190664).cljs$core$IFn$_invoke$arity$1(chart_meta__$1))){
cljs.core.swap_BANG_.call(null,re_frame_highcharts.utils.stock_instances,cljs.core.dissoc,chart_id);
} else {
}

var temp__5733__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame_highcharts.utils.stock_instances),chart_id);
if(cljs.core.truth_(temp__5733__auto__)){
var chart_instance = temp__5733__auto__;
return ensure_series.call(null,chart_instance,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"series","series",600710694).cljs$core$IFn$_invoke$arity$1(chart_data)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__32056_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__32056_SHARP_),p1__32056_SHARP_],null));
}),new cljs.core.Keyword(null,"series","series",600710694).cljs$core$IFn$_invoke$arity$1(chart_data))));
} else {
return mount_chart.call(null,this$);
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),render_chart,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),mount_chart,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update_chart], null));
});

//# sourceMappingURL=utils.js.map?rel=1643865386150
