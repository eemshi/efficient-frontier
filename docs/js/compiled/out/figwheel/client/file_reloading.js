// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__29806 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29806 == null)){
return null;
} else {
return goog.object.get(G__29806,"requires");
}
}):(function (path){
var G__29807 = goog.object.get(goog.dependencies_.requires,path);
if((G__29807 == null)){
return null;
} else {
return goog.object.getKeys(G__29807);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29808_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29808_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__29809 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29809__$1 = (((G__29809 == null))?null:goog.object.get(G__29809,"provides"));
if((G__29809__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29809__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__29810 = cljs.core.seq.call(null,provides);
var chunk__29811 = null;
var count__29812 = (0);
var i__29813 = (0);
while(true){
if((i__29813 < count__29812)){
var prov = cljs.core._nth.call(null,chunk__29811,i__29813);
var seq__29822_29834 = cljs.core.seq.call(null,requires);
var chunk__29823_29835 = null;
var count__29824_29836 = (0);
var i__29825_29837 = (0);
while(true){
if((i__29825_29837 < count__29824_29836)){
var req_29838 = cljs.core._nth.call(null,chunk__29823_29835,i__29825_29837);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29838,prov);


var G__29839 = seq__29822_29834;
var G__29840 = chunk__29823_29835;
var G__29841 = count__29824_29836;
var G__29842 = (i__29825_29837 + (1));
seq__29822_29834 = G__29839;
chunk__29823_29835 = G__29840;
count__29824_29836 = G__29841;
i__29825_29837 = G__29842;
continue;
} else {
var temp__5735__auto___29843 = cljs.core.seq.call(null,seq__29822_29834);
if(temp__5735__auto___29843){
var seq__29822_29844__$1 = temp__5735__auto___29843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29822_29844__$1)){
var c__4556__auto___29845 = cljs.core.chunk_first.call(null,seq__29822_29844__$1);
var G__29846 = cljs.core.chunk_rest.call(null,seq__29822_29844__$1);
var G__29847 = c__4556__auto___29845;
var G__29848 = cljs.core.count.call(null,c__4556__auto___29845);
var G__29849 = (0);
seq__29822_29834 = G__29846;
chunk__29823_29835 = G__29847;
count__29824_29836 = G__29848;
i__29825_29837 = G__29849;
continue;
} else {
var req_29850 = cljs.core.first.call(null,seq__29822_29844__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29850,prov);


var G__29851 = cljs.core.next.call(null,seq__29822_29844__$1);
var G__29852 = null;
var G__29853 = (0);
var G__29854 = (0);
seq__29822_29834 = G__29851;
chunk__29823_29835 = G__29852;
count__29824_29836 = G__29853;
i__29825_29837 = G__29854;
continue;
}
} else {
}
}
break;
}


var G__29855 = seq__29810;
var G__29856 = chunk__29811;
var G__29857 = count__29812;
var G__29858 = (i__29813 + (1));
seq__29810 = G__29855;
chunk__29811 = G__29856;
count__29812 = G__29857;
i__29813 = G__29858;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29810);
if(temp__5735__auto__){
var seq__29810__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29810__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29810__$1);
var G__29859 = cljs.core.chunk_rest.call(null,seq__29810__$1);
var G__29860 = c__4556__auto__;
var G__29861 = cljs.core.count.call(null,c__4556__auto__);
var G__29862 = (0);
seq__29810 = G__29859;
chunk__29811 = G__29860;
count__29812 = G__29861;
i__29813 = G__29862;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29810__$1);
var seq__29826_29863 = cljs.core.seq.call(null,requires);
var chunk__29827_29864 = null;
var count__29828_29865 = (0);
var i__29829_29866 = (0);
while(true){
if((i__29829_29866 < count__29828_29865)){
var req_29867 = cljs.core._nth.call(null,chunk__29827_29864,i__29829_29866);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29867,prov);


var G__29868 = seq__29826_29863;
var G__29869 = chunk__29827_29864;
var G__29870 = count__29828_29865;
var G__29871 = (i__29829_29866 + (1));
seq__29826_29863 = G__29868;
chunk__29827_29864 = G__29869;
count__29828_29865 = G__29870;
i__29829_29866 = G__29871;
continue;
} else {
var temp__5735__auto___29872__$1 = cljs.core.seq.call(null,seq__29826_29863);
if(temp__5735__auto___29872__$1){
var seq__29826_29873__$1 = temp__5735__auto___29872__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29826_29873__$1)){
var c__4556__auto___29874 = cljs.core.chunk_first.call(null,seq__29826_29873__$1);
var G__29875 = cljs.core.chunk_rest.call(null,seq__29826_29873__$1);
var G__29876 = c__4556__auto___29874;
var G__29877 = cljs.core.count.call(null,c__4556__auto___29874);
var G__29878 = (0);
seq__29826_29863 = G__29875;
chunk__29827_29864 = G__29876;
count__29828_29865 = G__29877;
i__29829_29866 = G__29878;
continue;
} else {
var req_29879 = cljs.core.first.call(null,seq__29826_29873__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29879,prov);


var G__29880 = cljs.core.next.call(null,seq__29826_29873__$1);
var G__29881 = null;
var G__29882 = (0);
var G__29883 = (0);
seq__29826_29863 = G__29880;
chunk__29827_29864 = G__29881;
count__29828_29865 = G__29882;
i__29829_29866 = G__29883;
continue;
}
} else {
}
}
break;
}


var G__29884 = cljs.core.next.call(null,seq__29810__$1);
var G__29885 = null;
var G__29886 = (0);
var G__29887 = (0);
seq__29810 = G__29884;
chunk__29811 = G__29885;
count__29812 = G__29886;
i__29813 = G__29887;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__29830 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29831 = null;
var count__29832 = (0);
var i__29833 = (0);
while(true){
if((i__29833 < count__29832)){
var prov = cljs.core._nth.call(null,chunk__29831,i__29833);
goog.object.forEach(deps,((function (seq__29830,chunk__29831,count__29832,i__29833,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29830,chunk__29831,count__29832,i__29833,prov,requires))
);


var G__29888 = seq__29830;
var G__29889 = chunk__29831;
var G__29890 = count__29832;
var G__29891 = (i__29833 + (1));
seq__29830 = G__29888;
chunk__29831 = G__29889;
count__29832 = G__29890;
i__29833 = G__29891;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29830);
if(temp__5735__auto__){
var seq__29830__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29830__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29830__$1);
var G__29892 = cljs.core.chunk_rest.call(null,seq__29830__$1);
var G__29893 = c__4556__auto__;
var G__29894 = cljs.core.count.call(null,c__4556__auto__);
var G__29895 = (0);
seq__29830 = G__29892;
chunk__29831 = G__29893;
count__29832 = G__29894;
i__29833 = G__29895;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29830__$1);
goog.object.forEach(deps,((function (seq__29830,chunk__29831,count__29832,i__29833,prov,seq__29830__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29830,chunk__29831,count__29832,i__29833,prov,seq__29830__$1,temp__5735__auto__,requires))
);


var G__29896 = cljs.core.next.call(null,seq__29830__$1);
var G__29897 = null;
var G__29898 = (0);
var G__29899 = (0);
seq__29830 = G__29896;
chunk__29831 = G__29897;
count__29832 = G__29898;
i__29833 = G__29899;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29900){
var vec__29901 = p__29900;
var _ = cljs.core.nth.call(null,vec__29901,(0),null);
var v = cljs.core.nth.call(null,vec__29901,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__29904){
var vec__29905 = p__29904;
var k = cljs.core.nth.call(null,vec__29905,(0),null);
var v = cljs.core.nth.call(null,vec__29905,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29917_29925 = cljs.core.seq.call(null,deps);
var chunk__29918_29926 = null;
var count__29919_29927 = (0);
var i__29920_29928 = (0);
while(true){
if((i__29920_29928 < count__29919_29927)){
var dep_29929 = cljs.core._nth.call(null,chunk__29918_29926,i__29920_29928);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29929;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29929));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29929,(depth + (1)),state);
} else {
}


var G__29930 = seq__29917_29925;
var G__29931 = chunk__29918_29926;
var G__29932 = count__29919_29927;
var G__29933 = (i__29920_29928 + (1));
seq__29917_29925 = G__29930;
chunk__29918_29926 = G__29931;
count__29919_29927 = G__29932;
i__29920_29928 = G__29933;
continue;
} else {
var temp__5735__auto___29934 = cljs.core.seq.call(null,seq__29917_29925);
if(temp__5735__auto___29934){
var seq__29917_29935__$1 = temp__5735__auto___29934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29917_29935__$1)){
var c__4556__auto___29936 = cljs.core.chunk_first.call(null,seq__29917_29935__$1);
var G__29937 = cljs.core.chunk_rest.call(null,seq__29917_29935__$1);
var G__29938 = c__4556__auto___29936;
var G__29939 = cljs.core.count.call(null,c__4556__auto___29936);
var G__29940 = (0);
seq__29917_29925 = G__29937;
chunk__29918_29926 = G__29938;
count__29919_29927 = G__29939;
i__29920_29928 = G__29940;
continue;
} else {
var dep_29941 = cljs.core.first.call(null,seq__29917_29935__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29941;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29941));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29941,(depth + (1)),state);
} else {
}


var G__29942 = cljs.core.next.call(null,seq__29917_29935__$1);
var G__29943 = null;
var G__29944 = (0);
var G__29945 = (0);
seq__29917_29925 = G__29942;
chunk__29918_29926 = G__29943;
count__29919_29927 = G__29944;
i__29920_29928 = G__29945;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29921){
var vec__29922 = p__29921;
var seq__29923 = cljs.core.seq.call(null,vec__29922);
var first__29924 = cljs.core.first.call(null,seq__29923);
var seq__29923__$1 = cljs.core.next.call(null,seq__29923);
var x = first__29924;
var xs = seq__29923__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29908_SHARP_){
return clojure.set.difference.call(null,p1__29908_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29946_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29946_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29947 = cljs.core.seq.call(null,provides);
var chunk__29948 = null;
var count__29949 = (0);
var i__29950 = (0);
while(true){
if((i__29950 < count__29949)){
var prov = cljs.core._nth.call(null,chunk__29948,i__29950);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29959_29967 = cljs.core.seq.call(null,requires);
var chunk__29960_29968 = null;
var count__29961_29969 = (0);
var i__29962_29970 = (0);
while(true){
if((i__29962_29970 < count__29961_29969)){
var req_29971 = cljs.core._nth.call(null,chunk__29960_29968,i__29962_29970);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29971,prov);


var G__29972 = seq__29959_29967;
var G__29973 = chunk__29960_29968;
var G__29974 = count__29961_29969;
var G__29975 = (i__29962_29970 + (1));
seq__29959_29967 = G__29972;
chunk__29960_29968 = G__29973;
count__29961_29969 = G__29974;
i__29962_29970 = G__29975;
continue;
} else {
var temp__5735__auto___29976 = cljs.core.seq.call(null,seq__29959_29967);
if(temp__5735__auto___29976){
var seq__29959_29977__$1 = temp__5735__auto___29976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29959_29977__$1)){
var c__4556__auto___29978 = cljs.core.chunk_first.call(null,seq__29959_29977__$1);
var G__29979 = cljs.core.chunk_rest.call(null,seq__29959_29977__$1);
var G__29980 = c__4556__auto___29978;
var G__29981 = cljs.core.count.call(null,c__4556__auto___29978);
var G__29982 = (0);
seq__29959_29967 = G__29979;
chunk__29960_29968 = G__29980;
count__29961_29969 = G__29981;
i__29962_29970 = G__29982;
continue;
} else {
var req_29983 = cljs.core.first.call(null,seq__29959_29977__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29983,prov);


var G__29984 = cljs.core.next.call(null,seq__29959_29977__$1);
var G__29985 = null;
var G__29986 = (0);
var G__29987 = (0);
seq__29959_29967 = G__29984;
chunk__29960_29968 = G__29985;
count__29961_29969 = G__29986;
i__29962_29970 = G__29987;
continue;
}
} else {
}
}
break;
}


var G__29988 = seq__29947;
var G__29989 = chunk__29948;
var G__29990 = count__29949;
var G__29991 = (i__29950 + (1));
seq__29947 = G__29988;
chunk__29948 = G__29989;
count__29949 = G__29990;
i__29950 = G__29991;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29947);
if(temp__5735__auto__){
var seq__29947__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29947__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29947__$1);
var G__29992 = cljs.core.chunk_rest.call(null,seq__29947__$1);
var G__29993 = c__4556__auto__;
var G__29994 = cljs.core.count.call(null,c__4556__auto__);
var G__29995 = (0);
seq__29947 = G__29992;
chunk__29948 = G__29993;
count__29949 = G__29994;
i__29950 = G__29995;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29947__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29963_29996 = cljs.core.seq.call(null,requires);
var chunk__29964_29997 = null;
var count__29965_29998 = (0);
var i__29966_29999 = (0);
while(true){
if((i__29966_29999 < count__29965_29998)){
var req_30000 = cljs.core._nth.call(null,chunk__29964_29997,i__29966_29999);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30000,prov);


var G__30001 = seq__29963_29996;
var G__30002 = chunk__29964_29997;
var G__30003 = count__29965_29998;
var G__30004 = (i__29966_29999 + (1));
seq__29963_29996 = G__30001;
chunk__29964_29997 = G__30002;
count__29965_29998 = G__30003;
i__29966_29999 = G__30004;
continue;
} else {
var temp__5735__auto___30005__$1 = cljs.core.seq.call(null,seq__29963_29996);
if(temp__5735__auto___30005__$1){
var seq__29963_30006__$1 = temp__5735__auto___30005__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29963_30006__$1)){
var c__4556__auto___30007 = cljs.core.chunk_first.call(null,seq__29963_30006__$1);
var G__30008 = cljs.core.chunk_rest.call(null,seq__29963_30006__$1);
var G__30009 = c__4556__auto___30007;
var G__30010 = cljs.core.count.call(null,c__4556__auto___30007);
var G__30011 = (0);
seq__29963_29996 = G__30008;
chunk__29964_29997 = G__30009;
count__29965_29998 = G__30010;
i__29966_29999 = G__30011;
continue;
} else {
var req_30012 = cljs.core.first.call(null,seq__29963_30006__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30012,prov);


var G__30013 = cljs.core.next.call(null,seq__29963_30006__$1);
var G__30014 = null;
var G__30015 = (0);
var G__30016 = (0);
seq__29963_29996 = G__30013;
chunk__29964_29997 = G__30014;
count__29965_29998 = G__30015;
i__29966_29999 = G__30016;
continue;
}
} else {
}
}
break;
}


var G__30017 = cljs.core.next.call(null,seq__29947__$1);
var G__30018 = null;
var G__30019 = (0);
var G__30020 = (0);
seq__29947 = G__30017;
chunk__29948 = G__30018;
count__29949 = G__30019;
i__29950 = G__30020;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30021_30025 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30022_30026 = null;
var count__30023_30027 = (0);
var i__30024_30028 = (0);
while(true){
if((i__30024_30028 < count__30023_30027)){
var ns_30029 = cljs.core._nth.call(null,chunk__30022_30026,i__30024_30028);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30029);


var G__30030 = seq__30021_30025;
var G__30031 = chunk__30022_30026;
var G__30032 = count__30023_30027;
var G__30033 = (i__30024_30028 + (1));
seq__30021_30025 = G__30030;
chunk__30022_30026 = G__30031;
count__30023_30027 = G__30032;
i__30024_30028 = G__30033;
continue;
} else {
var temp__5735__auto___30034 = cljs.core.seq.call(null,seq__30021_30025);
if(temp__5735__auto___30034){
var seq__30021_30035__$1 = temp__5735__auto___30034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30021_30035__$1)){
var c__4556__auto___30036 = cljs.core.chunk_first.call(null,seq__30021_30035__$1);
var G__30037 = cljs.core.chunk_rest.call(null,seq__30021_30035__$1);
var G__30038 = c__4556__auto___30036;
var G__30039 = cljs.core.count.call(null,c__4556__auto___30036);
var G__30040 = (0);
seq__30021_30025 = G__30037;
chunk__30022_30026 = G__30038;
count__30023_30027 = G__30039;
i__30024_30028 = G__30040;
continue;
} else {
var ns_30041 = cljs.core.first.call(null,seq__30021_30035__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30041);


var G__30042 = cljs.core.next.call(null,seq__30021_30035__$1);
var G__30043 = null;
var G__30044 = (0);
var G__30045 = (0);
seq__30021_30025 = G__30042;
chunk__30022_30026 = G__30043;
count__30023_30027 = G__30044;
i__30024_30028 = G__30045;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__30046__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30047__i = 0, G__30047__a = new Array(arguments.length -  0);
while (G__30047__i < G__30047__a.length) {G__30047__a[G__30047__i] = arguments[G__30047__i + 0]; ++G__30047__i;}
  args = new cljs.core.IndexedSeq(G__30047__a,0,null);
} 
return G__30046__delegate.call(this,args);};
G__30046.cljs$lang$maxFixedArity = 0;
G__30046.cljs$lang$applyTo = (function (arglist__30048){
var args = cljs.core.seq(arglist__30048);
return G__30046__delegate(args);
});
G__30046.cljs$core$IFn$_invoke$arity$variadic = G__30046__delegate;
return G__30046;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30049_SHARP_,p2__30050_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30049_SHARP_)),p2__30050_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30051_SHARP_,p2__30052_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30051_SHARP_),p2__30052_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30053 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30053.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__30053.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__30053;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30054){if((e30054 instanceof Error)){
var e = e30054;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30054;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30055){if((e30055 instanceof Error)){
var e = e30055;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30055;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30056 = cljs.core._EQ_;
var expr__30057 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30056.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30057))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30056.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30057))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30056.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30057))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30059,callback){
var map__30060 = p__30059;
var map__30060__$1 = (((((!((map__30060 == null))))?(((((map__30060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30060):map__30060);
var file_msg = map__30060__$1;
var request_url = cljs.core.get.call(null,map__30060__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_30098){
var state_val_30099 = (state_30098[(1)]);
if((state_val_30099 === (7))){
var inst_30094 = (state_30098[(2)]);
var state_30098__$1 = state_30098;
var statearr_30100_30126 = state_30098__$1;
(statearr_30100_30126[(2)] = inst_30094);

(statearr_30100_30126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (1))){
var state_30098__$1 = state_30098;
var statearr_30101_30127 = state_30098__$1;
(statearr_30101_30127[(2)] = null);

(statearr_30101_30127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (4))){
var inst_30064 = (state_30098[(7)]);
var inst_30064__$1 = (state_30098[(2)]);
var state_30098__$1 = (function (){var statearr_30102 = state_30098;
(statearr_30102[(7)] = inst_30064__$1);

return statearr_30102;
})();
if(cljs.core.truth_(inst_30064__$1)){
var statearr_30103_30128 = state_30098__$1;
(statearr_30103_30128[(1)] = (5));

} else {
var statearr_30104_30129 = state_30098__$1;
(statearr_30104_30129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (15))){
var inst_30077 = (state_30098[(8)]);
var inst_30079 = (state_30098[(9)]);
var inst_30081 = inst_30079.call(null,inst_30077);
var state_30098__$1 = state_30098;
var statearr_30105_30130 = state_30098__$1;
(statearr_30105_30130[(2)] = inst_30081);

(statearr_30105_30130[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (13))){
var inst_30088 = (state_30098[(2)]);
var state_30098__$1 = state_30098;
var statearr_30106_30131 = state_30098__$1;
(statearr_30106_30131[(2)] = inst_30088);

(statearr_30106_30131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (6))){
var state_30098__$1 = state_30098;
var statearr_30107_30132 = state_30098__$1;
(statearr_30107_30132[(2)] = null);

(statearr_30107_30132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (17))){
var inst_30085 = (state_30098[(2)]);
var state_30098__$1 = state_30098;
var statearr_30108_30133 = state_30098__$1;
(statearr_30108_30133[(2)] = inst_30085);

(statearr_30108_30133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (3))){
var inst_30096 = (state_30098[(2)]);
var state_30098__$1 = state_30098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30098__$1,inst_30096);
} else {
if((state_val_30099 === (12))){
var state_30098__$1 = state_30098;
var statearr_30109_30134 = state_30098__$1;
(statearr_30109_30134[(2)] = null);

(statearr_30109_30134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (2))){
var state_30098__$1 = state_30098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30098__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30099 === (11))){
var inst_30069 = (state_30098[(10)]);
var inst_30075 = figwheel.client.file_reloading.blocking_load.call(null,inst_30069);
var state_30098__$1 = state_30098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30098__$1,(14),inst_30075);
} else {
if((state_val_30099 === (9))){
var inst_30069 = (state_30098[(10)]);
var state_30098__$1 = state_30098;
if(cljs.core.truth_(inst_30069)){
var statearr_30110_30135 = state_30098__$1;
(statearr_30110_30135[(1)] = (11));

} else {
var statearr_30111_30136 = state_30098__$1;
(statearr_30111_30136[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (5))){
var inst_30064 = (state_30098[(7)]);
var inst_30070 = (state_30098[(11)]);
var inst_30069 = cljs.core.nth.call(null,inst_30064,(0),null);
var inst_30070__$1 = cljs.core.nth.call(null,inst_30064,(1),null);
var state_30098__$1 = (function (){var statearr_30112 = state_30098;
(statearr_30112[(11)] = inst_30070__$1);

(statearr_30112[(10)] = inst_30069);

return statearr_30112;
})();
if(cljs.core.truth_(inst_30070__$1)){
var statearr_30113_30137 = state_30098__$1;
(statearr_30113_30137[(1)] = (8));

} else {
var statearr_30114_30138 = state_30098__$1;
(statearr_30114_30138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (14))){
var inst_30069 = (state_30098[(10)]);
var inst_30079 = (state_30098[(9)]);
var inst_30077 = (state_30098[(2)]);
var inst_30078 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30079__$1 = cljs.core.get.call(null,inst_30078,inst_30069);
var state_30098__$1 = (function (){var statearr_30115 = state_30098;
(statearr_30115[(8)] = inst_30077);

(statearr_30115[(9)] = inst_30079__$1);

return statearr_30115;
})();
if(cljs.core.truth_(inst_30079__$1)){
var statearr_30116_30139 = state_30098__$1;
(statearr_30116_30139[(1)] = (15));

} else {
var statearr_30117_30140 = state_30098__$1;
(statearr_30117_30140[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (16))){
var inst_30077 = (state_30098[(8)]);
var inst_30083 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30077);
var state_30098__$1 = state_30098;
var statearr_30118_30141 = state_30098__$1;
(statearr_30118_30141[(2)] = inst_30083);

(statearr_30118_30141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (10))){
var inst_30090 = (state_30098[(2)]);
var state_30098__$1 = (function (){var statearr_30119 = state_30098;
(statearr_30119[(12)] = inst_30090);

return statearr_30119;
})();
var statearr_30120_30142 = state_30098__$1;
(statearr_30120_30142[(2)] = null);

(statearr_30120_30142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30099 === (8))){
var inst_30070 = (state_30098[(11)]);
var inst_30072 = eval(inst_30070);
var state_30098__$1 = state_30098;
var statearr_30121_30143 = state_30098__$1;
(statearr_30121_30143[(2)] = inst_30072);

(statearr_30121_30143[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27757__auto__ = null;
var figwheel$client$file_reloading$state_machine__27757__auto____0 = (function (){
var statearr_30122 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30122[(0)] = figwheel$client$file_reloading$state_machine__27757__auto__);

(statearr_30122[(1)] = (1));

return statearr_30122;
});
var figwheel$client$file_reloading$state_machine__27757__auto____1 = (function (state_30098){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_30098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e30123){if((e30123 instanceof Object)){
var ex__27760__auto__ = e30123;
var statearr_30124_30144 = state_30098;
(statearr_30124_30144[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30145 = state_30098;
state_30098 = G__30145;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27757__auto__ = function(state_30098){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27757__auto____1.call(this,state_30098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27757__auto____0;
figwheel$client$file_reloading$state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27757__auto____1;
return figwheel$client$file_reloading$state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_30125 = f__27852__auto__.call(null);
(statearr_30125[(6)] = c__27851__auto__);

return statearr_30125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30147 = arguments.length;
switch (G__30147) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30149,callback){
var map__30150 = p__30149;
var map__30150__$1 = (((((!((map__30150 == null))))?(((((map__30150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30150):map__30150);
var file_msg = map__30150__$1;
var namespace = cljs.core.get.call(null,map__30150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30152){
var map__30153 = p__30152;
var map__30153__$1 = (((((!((map__30153 == null))))?(((((map__30153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30153):map__30153);
var file_msg = map__30153__$1;
var namespace = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30155){
var map__30156 = p__30155;
var map__30156__$1 = (((((!((map__30156 == null))))?(((((map__30156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30156):map__30156);
var file_msg = map__30156__$1;
var namespace = cljs.core.get.call(null,map__30156__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30158,callback){
var map__30159 = p__30158;
var map__30159__$1 = (((((!((map__30159 == null))))?(((((map__30159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30159):map__30159);
var file_msg = map__30159__$1;
var request_url = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27851__auto___30209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_30194){
var state_val_30195 = (state_30194[(1)]);
if((state_val_30195 === (1))){
var inst_30168 = cljs.core.seq.call(null,files);
var inst_30169 = cljs.core.first.call(null,inst_30168);
var inst_30170 = cljs.core.next.call(null,inst_30168);
var inst_30171 = files;
var state_30194__$1 = (function (){var statearr_30196 = state_30194;
(statearr_30196[(7)] = inst_30169);

(statearr_30196[(8)] = inst_30170);

(statearr_30196[(9)] = inst_30171);

return statearr_30196;
})();
var statearr_30197_30210 = state_30194__$1;
(statearr_30197_30210[(2)] = null);

(statearr_30197_30210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (2))){
var inst_30171 = (state_30194[(9)]);
var inst_30177 = (state_30194[(10)]);
var inst_30176 = cljs.core.seq.call(null,inst_30171);
var inst_30177__$1 = cljs.core.first.call(null,inst_30176);
var inst_30178 = cljs.core.next.call(null,inst_30176);
var inst_30179 = (inst_30177__$1 == null);
var inst_30180 = cljs.core.not.call(null,inst_30179);
var state_30194__$1 = (function (){var statearr_30198 = state_30194;
(statearr_30198[(11)] = inst_30178);

(statearr_30198[(10)] = inst_30177__$1);

return statearr_30198;
})();
if(inst_30180){
var statearr_30199_30211 = state_30194__$1;
(statearr_30199_30211[(1)] = (4));

} else {
var statearr_30200_30212 = state_30194__$1;
(statearr_30200_30212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (3))){
var inst_30192 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30194__$1,inst_30192);
} else {
if((state_val_30195 === (4))){
var inst_30177 = (state_30194[(10)]);
var inst_30182 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30177);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(7),inst_30182);
} else {
if((state_val_30195 === (5))){
var inst_30188 = cljs.core.async.close_BANG_.call(null,out);
var state_30194__$1 = state_30194;
var statearr_30201_30213 = state_30194__$1;
(statearr_30201_30213[(2)] = inst_30188);

(statearr_30201_30213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (6))){
var inst_30190 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30202_30214 = state_30194__$1;
(statearr_30202_30214[(2)] = inst_30190);

(statearr_30202_30214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (7))){
var inst_30178 = (state_30194[(11)]);
var inst_30184 = (state_30194[(2)]);
var inst_30185 = cljs.core.async.put_BANG_.call(null,out,inst_30184);
var inst_30171 = inst_30178;
var state_30194__$1 = (function (){var statearr_30203 = state_30194;
(statearr_30203[(9)] = inst_30171);

(statearr_30203[(12)] = inst_30185);

return statearr_30203;
})();
var statearr_30204_30215 = state_30194__$1;
(statearr_30204_30215[(2)] = null);

(statearr_30204_30215[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto____0 = (function (){
var statearr_30205 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30205[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto__);

(statearr_30205[(1)] = (1));

return statearr_30205;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto____1 = (function (state_30194){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_30194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e30206){if((e30206 instanceof Object)){
var ex__27760__auto__ = e30206;
var statearr_30207_30216 = state_30194;
(statearr_30207_30216[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30217 = state_30194;
state_30194 = G__30217;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_30208 = f__27852__auto__.call(null);
(statearr_30208[(6)] = c__27851__auto___30209);

return statearr_30208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30218,opts){
var map__30219 = p__30218;
var map__30219__$1 = (((((!((map__30219 == null))))?(((((map__30219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30219):map__30219);
var eval_body = cljs.core.get.call(null,map__30219__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30219__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30221){var e = e30221;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30222_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30222_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30223){
var vec__30224 = p__30223;
var k = cljs.core.nth.call(null,vec__30224,(0),null);
var v = cljs.core.nth.call(null,vec__30224,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30227){
var vec__30228 = p__30227;
var k = cljs.core.nth.call(null,vec__30228,(0),null);
var v = cljs.core.nth.call(null,vec__30228,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30234,p__30235){
var map__30236 = p__30234;
var map__30236__$1 = (((((!((map__30236 == null))))?(((((map__30236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30236):map__30236);
var opts = map__30236__$1;
var before_jsload = cljs.core.get.call(null,map__30236__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30236__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30236__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30237 = p__30235;
var map__30237__$1 = (((((!((map__30237 == null))))?(((((map__30237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30237):map__30237);
var msg = map__30237__$1;
var files = cljs.core.get.call(null,map__30237__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30237__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30237__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27852__auto__ = (function (){var switch__27756__auto__ = (function (state_30391){
var state_val_30392 = (state_30391[(1)]);
if((state_val_30392 === (7))){
var inst_30253 = (state_30391[(7)]);
var inst_30251 = (state_30391[(8)]);
var inst_30252 = (state_30391[(9)]);
var inst_30254 = (state_30391[(10)]);
var inst_30259 = cljs.core._nth.call(null,inst_30252,inst_30254);
var inst_30260 = figwheel.client.file_reloading.eval_body.call(null,inst_30259,opts);
var inst_30261 = (inst_30254 + (1));
var tmp30393 = inst_30253;
var tmp30394 = inst_30251;
var tmp30395 = inst_30252;
var inst_30251__$1 = tmp30394;
var inst_30252__$1 = tmp30395;
var inst_30253__$1 = tmp30393;
var inst_30254__$1 = inst_30261;
var state_30391__$1 = (function (){var statearr_30396 = state_30391;
(statearr_30396[(7)] = inst_30253__$1);

(statearr_30396[(8)] = inst_30251__$1);

(statearr_30396[(9)] = inst_30252__$1);

(statearr_30396[(11)] = inst_30260);

(statearr_30396[(10)] = inst_30254__$1);

return statearr_30396;
})();
var statearr_30397_30480 = state_30391__$1;
(statearr_30397_30480[(2)] = null);

(statearr_30397_30480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (20))){
var inst_30294 = (state_30391[(12)]);
var inst_30302 = figwheel.client.file_reloading.sort_files.call(null,inst_30294);
var state_30391__$1 = state_30391;
var statearr_30398_30481 = state_30391__$1;
(statearr_30398_30481[(2)] = inst_30302);

(statearr_30398_30481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (27))){
var state_30391__$1 = state_30391;
var statearr_30399_30482 = state_30391__$1;
(statearr_30399_30482[(2)] = null);

(statearr_30399_30482[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (1))){
var inst_30243 = (state_30391[(13)]);
var inst_30240 = before_jsload.call(null,files);
var inst_30241 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30242 = (function (){return (function (p1__30231_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30231_SHARP_);
});
})();
var inst_30243__$1 = cljs.core.filter.call(null,inst_30242,files);
var inst_30244 = cljs.core.not_empty.call(null,inst_30243__$1);
var state_30391__$1 = (function (){var statearr_30400 = state_30391;
(statearr_30400[(13)] = inst_30243__$1);

(statearr_30400[(14)] = inst_30240);

(statearr_30400[(15)] = inst_30241);

return statearr_30400;
})();
if(cljs.core.truth_(inst_30244)){
var statearr_30401_30483 = state_30391__$1;
(statearr_30401_30483[(1)] = (2));

} else {
var statearr_30402_30484 = state_30391__$1;
(statearr_30402_30484[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (24))){
var state_30391__$1 = state_30391;
var statearr_30403_30485 = state_30391__$1;
(statearr_30403_30485[(2)] = null);

(statearr_30403_30485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (39))){
var inst_30344 = (state_30391[(16)]);
var state_30391__$1 = state_30391;
var statearr_30404_30486 = state_30391__$1;
(statearr_30404_30486[(2)] = inst_30344);

(statearr_30404_30486[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (46))){
var inst_30386 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
var statearr_30405_30487 = state_30391__$1;
(statearr_30405_30487[(2)] = inst_30386);

(statearr_30405_30487[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (4))){
var inst_30288 = (state_30391[(2)]);
var inst_30289 = cljs.core.List.EMPTY;
var inst_30290 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30289);
var inst_30291 = (function (){return (function (p1__30232_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30232_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30232_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30232_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_30292 = cljs.core.filter.call(null,inst_30291,files);
var inst_30293 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30294 = cljs.core.concat.call(null,inst_30292,inst_30293);
var state_30391__$1 = (function (){var statearr_30406 = state_30391;
(statearr_30406[(17)] = inst_30288);

(statearr_30406[(12)] = inst_30294);

(statearr_30406[(18)] = inst_30290);

return statearr_30406;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30407_30488 = state_30391__$1;
(statearr_30407_30488[(1)] = (16));

} else {
var statearr_30408_30489 = state_30391__$1;
(statearr_30408_30489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (15))){
var inst_30278 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
var statearr_30409_30490 = state_30391__$1;
(statearr_30409_30490[(2)] = inst_30278);

(statearr_30409_30490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (21))){
var inst_30304 = (state_30391[(19)]);
var inst_30304__$1 = (state_30391[(2)]);
var inst_30305 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30304__$1);
var state_30391__$1 = (function (){var statearr_30410 = state_30391;
(statearr_30410[(19)] = inst_30304__$1);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30391__$1,(22),inst_30305);
} else {
if((state_val_30392 === (31))){
var inst_30389 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30391__$1,inst_30389);
} else {
if((state_val_30392 === (32))){
var inst_30344 = (state_30391[(16)]);
var inst_30349 = inst_30344.cljs$lang$protocol_mask$partition0$;
var inst_30350 = (inst_30349 & (64));
var inst_30351 = inst_30344.cljs$core$ISeq$;
var inst_30352 = (cljs.core.PROTOCOL_SENTINEL === inst_30351);
var inst_30353 = ((inst_30350) || (inst_30352));
var state_30391__$1 = state_30391;
if(cljs.core.truth_(inst_30353)){
var statearr_30411_30491 = state_30391__$1;
(statearr_30411_30491[(1)] = (35));

} else {
var statearr_30412_30492 = state_30391__$1;
(statearr_30412_30492[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (40))){
var inst_30366 = (state_30391[(20)]);
var inst_30365 = (state_30391[(2)]);
var inst_30366__$1 = cljs.core.get.call(null,inst_30365,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30367 = cljs.core.get.call(null,inst_30365,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30368 = cljs.core.not_empty.call(null,inst_30366__$1);
var state_30391__$1 = (function (){var statearr_30413 = state_30391;
(statearr_30413[(21)] = inst_30367);

(statearr_30413[(20)] = inst_30366__$1);

return statearr_30413;
})();
if(cljs.core.truth_(inst_30368)){
var statearr_30414_30493 = state_30391__$1;
(statearr_30414_30493[(1)] = (41));

} else {
var statearr_30415_30494 = state_30391__$1;
(statearr_30415_30494[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (33))){
var state_30391__$1 = state_30391;
var statearr_30416_30495 = state_30391__$1;
(statearr_30416_30495[(2)] = false);

(statearr_30416_30495[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (13))){
var inst_30264 = (state_30391[(22)]);
var inst_30268 = cljs.core.chunk_first.call(null,inst_30264);
var inst_30269 = cljs.core.chunk_rest.call(null,inst_30264);
var inst_30270 = cljs.core.count.call(null,inst_30268);
var inst_30251 = inst_30269;
var inst_30252 = inst_30268;
var inst_30253 = inst_30270;
var inst_30254 = (0);
var state_30391__$1 = (function (){var statearr_30417 = state_30391;
(statearr_30417[(7)] = inst_30253);

(statearr_30417[(8)] = inst_30251);

(statearr_30417[(9)] = inst_30252);

(statearr_30417[(10)] = inst_30254);

return statearr_30417;
})();
var statearr_30418_30496 = state_30391__$1;
(statearr_30418_30496[(2)] = null);

(statearr_30418_30496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (22))){
var inst_30307 = (state_30391[(23)]);
var inst_30308 = (state_30391[(24)]);
var inst_30304 = (state_30391[(19)]);
var inst_30312 = (state_30391[(25)]);
var inst_30307__$1 = (state_30391[(2)]);
var inst_30308__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30307__$1);
var inst_30309 = (function (){var all_files = inst_30304;
var res_SINGLEQUOTE_ = inst_30307__$1;
var res = inst_30308__$1;
return (function (p1__30233_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30233_SHARP_));
});
})();
var inst_30310 = cljs.core.filter.call(null,inst_30309,inst_30307__$1);
var inst_30311 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30312__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30311);
var inst_30313 = cljs.core.not_empty.call(null,inst_30312__$1);
var state_30391__$1 = (function (){var statearr_30419 = state_30391;
(statearr_30419[(23)] = inst_30307__$1);

(statearr_30419[(26)] = inst_30310);

(statearr_30419[(24)] = inst_30308__$1);

(statearr_30419[(25)] = inst_30312__$1);

return statearr_30419;
})();
if(cljs.core.truth_(inst_30313)){
var statearr_30420_30497 = state_30391__$1;
(statearr_30420_30497[(1)] = (23));

} else {
var statearr_30421_30498 = state_30391__$1;
(statearr_30421_30498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (36))){
var state_30391__$1 = state_30391;
var statearr_30422_30499 = state_30391__$1;
(statearr_30422_30499[(2)] = false);

(statearr_30422_30499[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (41))){
var inst_30366 = (state_30391[(20)]);
var inst_30370 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30371 = cljs.core.map.call(null,inst_30370,inst_30366);
var inst_30372 = cljs.core.pr_str.call(null,inst_30371);
var inst_30373 = ["figwheel-no-load meta-data: ",inst_30372].join('');
var inst_30374 = figwheel.client.utils.log.call(null,inst_30373);
var state_30391__$1 = state_30391;
var statearr_30423_30500 = state_30391__$1;
(statearr_30423_30500[(2)] = inst_30374);

(statearr_30423_30500[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (43))){
var inst_30367 = (state_30391[(21)]);
var inst_30377 = (state_30391[(2)]);
var inst_30378 = cljs.core.not_empty.call(null,inst_30367);
var state_30391__$1 = (function (){var statearr_30424 = state_30391;
(statearr_30424[(27)] = inst_30377);

return statearr_30424;
})();
if(cljs.core.truth_(inst_30378)){
var statearr_30425_30501 = state_30391__$1;
(statearr_30425_30501[(1)] = (44));

} else {
var statearr_30426_30502 = state_30391__$1;
(statearr_30426_30502[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (29))){
var inst_30307 = (state_30391[(23)]);
var inst_30344 = (state_30391[(16)]);
var inst_30310 = (state_30391[(26)]);
var inst_30308 = (state_30391[(24)]);
var inst_30304 = (state_30391[(19)]);
var inst_30312 = (state_30391[(25)]);
var inst_30340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30343 = (function (){var all_files = inst_30304;
var res_SINGLEQUOTE_ = inst_30307;
var res = inst_30308;
var files_not_loaded = inst_30310;
var dependencies_that_loaded = inst_30312;
return (function (p__30342){
var map__30427 = p__30342;
var map__30427__$1 = (((((!((map__30427 == null))))?(((((map__30427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30427):map__30427);
var namespace = cljs.core.get.call(null,map__30427__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_30344__$1 = cljs.core.group_by.call(null,inst_30343,inst_30310);
var inst_30346 = (inst_30344__$1 == null);
var inst_30347 = cljs.core.not.call(null,inst_30346);
var state_30391__$1 = (function (){var statearr_30429 = state_30391;
(statearr_30429[(16)] = inst_30344__$1);

(statearr_30429[(28)] = inst_30340);

return statearr_30429;
})();
if(inst_30347){
var statearr_30430_30503 = state_30391__$1;
(statearr_30430_30503[(1)] = (32));

} else {
var statearr_30431_30504 = state_30391__$1;
(statearr_30431_30504[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (44))){
var inst_30367 = (state_30391[(21)]);
var inst_30380 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30367);
var inst_30381 = cljs.core.pr_str.call(null,inst_30380);
var inst_30382 = ["not required: ",inst_30381].join('');
var inst_30383 = figwheel.client.utils.log.call(null,inst_30382);
var state_30391__$1 = state_30391;
var statearr_30432_30505 = state_30391__$1;
(statearr_30432_30505[(2)] = inst_30383);

(statearr_30432_30505[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (6))){
var inst_30285 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
var statearr_30433_30506 = state_30391__$1;
(statearr_30433_30506[(2)] = inst_30285);

(statearr_30433_30506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (28))){
var inst_30310 = (state_30391[(26)]);
var inst_30337 = (state_30391[(2)]);
var inst_30338 = cljs.core.not_empty.call(null,inst_30310);
var state_30391__$1 = (function (){var statearr_30434 = state_30391;
(statearr_30434[(29)] = inst_30337);

return statearr_30434;
})();
if(cljs.core.truth_(inst_30338)){
var statearr_30435_30507 = state_30391__$1;
(statearr_30435_30507[(1)] = (29));

} else {
var statearr_30436_30508 = state_30391__$1;
(statearr_30436_30508[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (25))){
var inst_30308 = (state_30391[(24)]);
var inst_30324 = (state_30391[(2)]);
var inst_30325 = cljs.core.not_empty.call(null,inst_30308);
var state_30391__$1 = (function (){var statearr_30437 = state_30391;
(statearr_30437[(30)] = inst_30324);

return statearr_30437;
})();
if(cljs.core.truth_(inst_30325)){
var statearr_30438_30509 = state_30391__$1;
(statearr_30438_30509[(1)] = (26));

} else {
var statearr_30439_30510 = state_30391__$1;
(statearr_30439_30510[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (34))){
var inst_30360 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
if(cljs.core.truth_(inst_30360)){
var statearr_30440_30511 = state_30391__$1;
(statearr_30440_30511[(1)] = (38));

} else {
var statearr_30441_30512 = state_30391__$1;
(statearr_30441_30512[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (17))){
var state_30391__$1 = state_30391;
var statearr_30442_30513 = state_30391__$1;
(statearr_30442_30513[(2)] = recompile_dependents);

(statearr_30442_30513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (3))){
var state_30391__$1 = state_30391;
var statearr_30443_30514 = state_30391__$1;
(statearr_30443_30514[(2)] = null);

(statearr_30443_30514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (12))){
var inst_30281 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
var statearr_30444_30515 = state_30391__$1;
(statearr_30444_30515[(2)] = inst_30281);

(statearr_30444_30515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (2))){
var inst_30243 = (state_30391[(13)]);
var inst_30250 = cljs.core.seq.call(null,inst_30243);
var inst_30251 = inst_30250;
var inst_30252 = null;
var inst_30253 = (0);
var inst_30254 = (0);
var state_30391__$1 = (function (){var statearr_30445 = state_30391;
(statearr_30445[(7)] = inst_30253);

(statearr_30445[(8)] = inst_30251);

(statearr_30445[(9)] = inst_30252);

(statearr_30445[(10)] = inst_30254);

return statearr_30445;
})();
var statearr_30446_30516 = state_30391__$1;
(statearr_30446_30516[(2)] = null);

(statearr_30446_30516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (23))){
var inst_30307 = (state_30391[(23)]);
var inst_30310 = (state_30391[(26)]);
var inst_30308 = (state_30391[(24)]);
var inst_30304 = (state_30391[(19)]);
var inst_30312 = (state_30391[(25)]);
var inst_30315 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30317 = (function (){var all_files = inst_30304;
var res_SINGLEQUOTE_ = inst_30307;
var res = inst_30308;
var files_not_loaded = inst_30310;
var dependencies_that_loaded = inst_30312;
return (function (p__30316){
var map__30447 = p__30316;
var map__30447__$1 = (((((!((map__30447 == null))))?(((((map__30447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30447):map__30447);
var request_url = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_30318 = cljs.core.reverse.call(null,inst_30312);
var inst_30319 = cljs.core.map.call(null,inst_30317,inst_30318);
var inst_30320 = cljs.core.pr_str.call(null,inst_30319);
var inst_30321 = figwheel.client.utils.log.call(null,inst_30320);
var state_30391__$1 = (function (){var statearr_30449 = state_30391;
(statearr_30449[(31)] = inst_30315);

return statearr_30449;
})();
var statearr_30450_30517 = state_30391__$1;
(statearr_30450_30517[(2)] = inst_30321);

(statearr_30450_30517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (35))){
var state_30391__$1 = state_30391;
var statearr_30451_30518 = state_30391__$1;
(statearr_30451_30518[(2)] = true);

(statearr_30451_30518[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (19))){
var inst_30294 = (state_30391[(12)]);
var inst_30300 = figwheel.client.file_reloading.expand_files.call(null,inst_30294);
var state_30391__$1 = state_30391;
var statearr_30452_30519 = state_30391__$1;
(statearr_30452_30519[(2)] = inst_30300);

(statearr_30452_30519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (11))){
var state_30391__$1 = state_30391;
var statearr_30453_30520 = state_30391__$1;
(statearr_30453_30520[(2)] = null);

(statearr_30453_30520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (9))){
var inst_30283 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
var statearr_30454_30521 = state_30391__$1;
(statearr_30454_30521[(2)] = inst_30283);

(statearr_30454_30521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (5))){
var inst_30253 = (state_30391[(7)]);
var inst_30254 = (state_30391[(10)]);
var inst_30256 = (inst_30254 < inst_30253);
var inst_30257 = inst_30256;
var state_30391__$1 = state_30391;
if(cljs.core.truth_(inst_30257)){
var statearr_30455_30522 = state_30391__$1;
(statearr_30455_30522[(1)] = (7));

} else {
var statearr_30456_30523 = state_30391__$1;
(statearr_30456_30523[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (14))){
var inst_30264 = (state_30391[(22)]);
var inst_30273 = cljs.core.first.call(null,inst_30264);
var inst_30274 = figwheel.client.file_reloading.eval_body.call(null,inst_30273,opts);
var inst_30275 = cljs.core.next.call(null,inst_30264);
var inst_30251 = inst_30275;
var inst_30252 = null;
var inst_30253 = (0);
var inst_30254 = (0);
var state_30391__$1 = (function (){var statearr_30457 = state_30391;
(statearr_30457[(7)] = inst_30253);

(statearr_30457[(8)] = inst_30251);

(statearr_30457[(32)] = inst_30274);

(statearr_30457[(9)] = inst_30252);

(statearr_30457[(10)] = inst_30254);

return statearr_30457;
})();
var statearr_30458_30524 = state_30391__$1;
(statearr_30458_30524[(2)] = null);

(statearr_30458_30524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (45))){
var state_30391__$1 = state_30391;
var statearr_30459_30525 = state_30391__$1;
(statearr_30459_30525[(2)] = null);

(statearr_30459_30525[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (26))){
var inst_30307 = (state_30391[(23)]);
var inst_30310 = (state_30391[(26)]);
var inst_30308 = (state_30391[(24)]);
var inst_30304 = (state_30391[(19)]);
var inst_30312 = (state_30391[(25)]);
var inst_30327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30329 = (function (){var all_files = inst_30304;
var res_SINGLEQUOTE_ = inst_30307;
var res = inst_30308;
var files_not_loaded = inst_30310;
var dependencies_that_loaded = inst_30312;
return (function (p__30328){
var map__30460 = p__30328;
var map__30460__$1 = (((((!((map__30460 == null))))?(((((map__30460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30460):map__30460);
var namespace = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_30330 = cljs.core.map.call(null,inst_30329,inst_30308);
var inst_30331 = cljs.core.pr_str.call(null,inst_30330);
var inst_30332 = figwheel.client.utils.log.call(null,inst_30331);
var inst_30333 = (function (){var all_files = inst_30304;
var res_SINGLEQUOTE_ = inst_30307;
var res = inst_30308;
var files_not_loaded = inst_30310;
var dependencies_that_loaded = inst_30312;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_30334 = setTimeout(inst_30333,(10));
var state_30391__$1 = (function (){var statearr_30462 = state_30391;
(statearr_30462[(33)] = inst_30327);

(statearr_30462[(34)] = inst_30332);

return statearr_30462;
})();
var statearr_30463_30526 = state_30391__$1;
(statearr_30463_30526[(2)] = inst_30334);

(statearr_30463_30526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (16))){
var state_30391__$1 = state_30391;
var statearr_30464_30527 = state_30391__$1;
(statearr_30464_30527[(2)] = reload_dependents);

(statearr_30464_30527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (38))){
var inst_30344 = (state_30391[(16)]);
var inst_30362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30344);
var state_30391__$1 = state_30391;
var statearr_30465_30528 = state_30391__$1;
(statearr_30465_30528[(2)] = inst_30362);

(statearr_30465_30528[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (30))){
var state_30391__$1 = state_30391;
var statearr_30466_30529 = state_30391__$1;
(statearr_30466_30529[(2)] = null);

(statearr_30466_30529[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (10))){
var inst_30264 = (state_30391[(22)]);
var inst_30266 = cljs.core.chunked_seq_QMARK_.call(null,inst_30264);
var state_30391__$1 = state_30391;
if(inst_30266){
var statearr_30467_30530 = state_30391__$1;
(statearr_30467_30530[(1)] = (13));

} else {
var statearr_30468_30531 = state_30391__$1;
(statearr_30468_30531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (18))){
var inst_30298 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
if(cljs.core.truth_(inst_30298)){
var statearr_30469_30532 = state_30391__$1;
(statearr_30469_30532[(1)] = (19));

} else {
var statearr_30470_30533 = state_30391__$1;
(statearr_30470_30533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (42))){
var state_30391__$1 = state_30391;
var statearr_30471_30534 = state_30391__$1;
(statearr_30471_30534[(2)] = null);

(statearr_30471_30534[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (37))){
var inst_30357 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
var statearr_30472_30535 = state_30391__$1;
(statearr_30472_30535[(2)] = inst_30357);

(statearr_30472_30535[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (8))){
var inst_30251 = (state_30391[(8)]);
var inst_30264 = (state_30391[(22)]);
var inst_30264__$1 = cljs.core.seq.call(null,inst_30251);
var state_30391__$1 = (function (){var statearr_30473 = state_30391;
(statearr_30473[(22)] = inst_30264__$1);

return statearr_30473;
})();
if(inst_30264__$1){
var statearr_30474_30536 = state_30391__$1;
(statearr_30474_30536[(1)] = (10));

} else {
var statearr_30475_30537 = state_30391__$1;
(statearr_30475_30537[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto____0 = (function (){
var statearr_30476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30476[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto__);

(statearr_30476[(1)] = (1));

return statearr_30476;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto____1 = (function (state_30391){
while(true){
var ret_value__27758__auto__ = (function (){try{while(true){
var result__27759__auto__ = switch__27756__auto__.call(null,state_30391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27759__auto__;
}
break;
}
}catch (e30477){if((e30477 instanceof Object)){
var ex__27760__auto__ = e30477;
var statearr_30478_30538 = state_30391;
(statearr_30478_30538[(5)] = ex__27760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30539 = state_30391;
state_30391 = G__30539;
continue;
} else {
return ret_value__27758__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto__ = function(state_30391){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto____1.call(this,state_30391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27757__auto__;
})()
})();
var state__27853__auto__ = (function (){var statearr_30479 = f__27852__auto__.call(null);
(statearr_30479[(6)] = c__27851__auto__);

return statearr_30479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27853__auto__);
}));

return c__27851__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30542,link){
var map__30543 = p__30542;
var map__30543__$1 = (((((!((map__30543 == null))))?(((((map__30543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30543):map__30543);
var file = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__30540_SHARP_,p2__30541_SHARP_){
if(cljs.core._EQ_.call(null,p1__30540_SHARP_,p2__30541_SHARP_)){
return p1__30540_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30546){
var map__30547 = p__30546;
var map__30547__$1 = (((((!((map__30547 == null))))?(((((map__30547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);
var match_length = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30545_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30545_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30549_SHARP_,p2__30550_SHARP_){
return cljs.core.assoc.call(null,p1__30549_SHARP_,cljs.core.get.call(null,p2__30550_SHARP_,key),p2__30550_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30551 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30551);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30551);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30552,p__30553){
var map__30554 = p__30552;
var map__30554__$1 = (((((!((map__30554 == null))))?(((((map__30554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30554):map__30554);
var on_cssload = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30555 = p__30553;
var map__30555__$1 = (((((!((map__30555 == null))))?(((((map__30555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30555):map__30555);
var files_msg = map__30555__$1;
var files = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1643864559289
