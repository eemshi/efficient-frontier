// Compiled by ClojureScript 1.10.773 {}
goog.provide('mpt_charts.stats');
goog.require('cljs.core');
mpt_charts.stats.risk_free_rate = (.02 / (252));
mpt_charts.stats.average = (function mpt_charts$stats$average(nums){
return (cljs.core.apply.call(null,cljs.core._PLUS_,nums) / cljs.core.count.call(null,nums));
});
mpt_charts.stats.standard_deviation = (function mpt_charts$stats$standard_deviation(list){
var mean = mpt_charts.stats.average.call(null,list);
var list_value_minus_mean_squared = cljs.core.map.call(null,(function (p1__32158_SHARP_){
return ((p1__32158_SHARP_ - mean) * (p1__32158_SHARP_ - mean));
}),list);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,list_value_minus_mean_squared);
var variance = (sum / cljs.core.count.call(null,list));
return Math.sqrt(variance);
});
mpt_charts.stats.covariance = (function mpt_charts$stats$covariance(list_x,list_y){
var mean_x = mpt_charts.stats.average.call(null,list_x);
var mean_y = mpt_charts.stats.average.call(null,list_y);
return (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (x,y){
return ((x - mean_x) * (y - mean_y));
}),list_x,list_y)) / cljs.core.count.call(null,list_x));
});

//# sourceMappingURL=stats.js.map?rel=1643865413473
