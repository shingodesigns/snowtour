angular.module("a", []).controller("c",["$http",function(c){var b=this;b.c=function(){c.get(b.s+".json").then(function(a){b.d=a.data})};b.s=function(a){return"OPEN"==a?"green":"CLOSED"==a?"red":"orange"};b.w=function(a){return 20>a?"white":40>a?"green":60>a?"yellow":80>a?"orange":"red"}}]);