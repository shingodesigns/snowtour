(function(){function k(c,b,g){(c=m.getElementById(c))&&c.addEventListener(b,g)}function n(c,b){function g(a,b){var d='<div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet mdl-cell--12-col-phone mdl-shadow--2dp"><div class="mdl-card__media"><a href="{website}" target="_blank" rel="noopener"><img src="{image}" style="width:100%"></a></div><div class="mdl-card__title"><a href="{website}" target="_blank"><h2 class="mdl-card__title-text">{name}</h2></a></div><div class="mdl-card__supporting-text mdl-card--expand">{description}</div><div class="mdl-card__actions">{type}, {location}</div></div>'.replace("{name}",
a.name).replace("{description}",a.description).replace("{image}",a.image).replace(/{website}/g,a.website).replace("{type}",a.type).replace("{location}",a.location);b.insertAdjacentHTML("beforeend",d)}function a(a){for(;a.lastChild;)a.removeChild(a.lastChild)}function h(b,c,d){var h=m.getElementById(b+"_list"),k=m.getElementById(b+"_pagination");a(h);a(k);d.list=[];for(var e=0;e<c.length;e++){var f=c[e];if("All"==d.location||-1!=d.location.indexOf(f.location))if("All"==d.type)d.list.push(f);else for(var l=
0;l<f.type.length;l++)if(-1!=d.type.indexOf(f.type[l])){d.list.push(f);break}}c=Math.min(d.list.length,12);for(e=0;e<c;e++)g(d.list[e],h);c=Math.ceil(d.list.length/12);if(1<c)for(e=0;e<c;e++)f=m.createElement("a"),f.value=e,f.textContent=e+1,f.className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect",f.href="#"+b,f.addEventListener("click",function(){var b=12*parseInt(this.value,10),c=Math.min(d.list.length,b+12);for(a(h);b<c;b++)g(d.list[b],h);for(b=0;b<k.childElementCount;b++)c=
k.childNodes[b],b==this.value?c.setAttribute("disabled",!0):c.removeAttribute("disabled")}),0==e&&f.setAttribute("disabled",!0),k.appendChild(f)}var l={list:null,location:"All",type:"All"};k(c+"_link","click",function d(a){h(c,db[b],l);this.removeEventListener(a.type,d)});k(c+"_location_select","change",function(){l.location=this.value;h(c,db[b],l)});k(c+"_type_select","change",function(){l.type=this.value;h(c,db[b],l)})}var m=document;n("accommodation","accommodation");n("eat-drink-shop","eatDrinkShop");
n("gear-hire","gearHire");k("trail-maps_link","click",function g(b){var a=m.getElementById("turoa-map");a.src=a.dataset.src;a=m.getElementById("whakapapa-map");a.src=a.dataset.src;this.removeEventListener(b.type,g)});k("contact-us_form","submit",function(b){b.preventDefault();var g=this;b="";for(var a=0;a<g.length;a++){var h=g[a];0<h.name.length&&(0<b.length&&(b+="&"),b+=h.name+"="+encodeURIComponent(h.value).replace(/%20/g,"+"))}a=new XMLHttpRequest;a.onloadend=function(){g.reset();m.getElementById("contact-us_toast").MaterialSnackbar.showSnackbar({message:"Your message have been received",
timeout:1E4})};a.open(g.method,g.action);a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a.send(b)})})();