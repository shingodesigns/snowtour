(function(){function k(a,c,g){(a=m.getElementById(a))&&a.addEventListener(c,g)}function n(a,c){function g(b,c){var d='<div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet mdl-cell--12-col-phone mdl-shadow--2dp"><div class="mdl-card__media"><a href="{website}" target="_blank" rel="noopener"><img src="{image}" style="width:100%"></a></div><div class="mdl-card__title"><a href="{website}" target="_blank"><h2 class="mdl-card__title-text">{name}</h2></a></div><div class="mdl-card__supporting-text mdl-card--expand">{description}</div><div class="mdl-card__actions">{type}, {location}</div></div>'.replace("{name}",
b.name).replace("{description}",b.description).replace("{image}",b.image).replace(/{website}/g,b.website).replace("{type}",b.type).replace("{location}",b.location);c.insertAdjacentHTML("beforeend",d)}function b(b){for(;b.lastChild;)b.removeChild(b.lastChild)}function h(c,a,d){var h=m.getElementById(c+"_list"),k=m.getElementById(c+"_pagination");b(h);b(k);d.list=[];for(var e=0;e<a.length;e++){var f=a[e];if("All"==d.location||-1!=d.location.indexOf(f.location))if("All"==d.type)d.list.push(f);else for(var l=
0;l<f.type.length;l++)if(-1!=d.type.indexOf(f.type[l])){d.list.push(f);break}}a=Math.min(d.list.length,12);for(e=0;e<a;e++)g(d.list[e],h);a=Math.ceil(d.list.length/12);if(1<a)for(e=0;e<a;e++)f=m.createElement("a"),f.value=e,f.textContent=e+1,f.className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect",f.href="#"+c,f.addEventListener("click",function(){var a=12*parseInt(this.value,10),c=Math.min(d.list.length,a+12);for(b(h);a<c;a++)g(d.list[a],h);for(a=0;a<k.childElementCount;a++)c=
k.childNodes[a],a==this.value?c.setAttribute("disabled",!0):c.removeAttribute("disabled")}),0==e&&f.setAttribute("disabled",!0),k.appendChild(f)}var l={list:null,location:"All",type:"All"};k(a+"_link","click",function d(b){h(a,db[c],l);this.removeEventListener(b.type,d)});k(a+"_location_select","change",function(){l.location=this.value;h(a,db[c],l)});k(a+"_type_select","change",function(){l.type=this.value;h(a,db[c],l)})}var p=!("localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&
!window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&("https:"===window.location.protocol||p)&&navigator.serviceWorker.register("service-worker.js").then(function(a){a.onupdatefound=function(){if(navigator.serviceWorker.controller){var c=a.installing;c.onstatechange=function(){switch(c.state){case "redundant":throw Error("The installing service worker became redundant.");}}}}})["catch"](function(a){console.error("Error during service worker registration:",
a)});var m=document;n("accommodation","accommodation");n("eat-drink-shop","eatDrinkShop");n("gear-hire","gearHire");k("trail-maps_link","click",function g(c){var b=m.getElementById("turoa-map");b.src=b.dataset.src;b=m.getElementById("whakapapa-map");b.src=b.dataset.src;this.removeEventListener(c.type,g)});k("contact-us_form","submit",function(c){c.preventDefault();var g=this;c="";for(var b=0;b<g.length;b++){var h=g[b];0<h.name.length&&(0<c.length&&(c+="&"),c+=h.name+"="+encodeURIComponent(h.value).replace(/%20/g,
"+"))}b=new XMLHttpRequest;b.onloadend=function(){g.reset();m.getElementById("contact-us_toast").MaterialSnackbar.showSnackbar({message:"Your message have been received",timeout:1E4})};b.open(g.method,g.action);b.setRequestHeader("Content-Type","application/x-www-form-urlencoded");b.send(c)})})();