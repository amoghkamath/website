(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0361e834","chunk-4c5f6ffc":"d9b25080"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-4c5f6ffc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-4c5f6ffc":"9ec3c53b"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"049a":function(e,t,n){},"25b6":function(e,t,n){},"519a":function(e,t,n){"use strict";var r=n("25b6"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{active:e.sidebarOpen},attrs:{id:"app"}},[n("sidebar",{class:{active:e.sidebarOpen}}),n("div",{staticClass:"navigation"},[n("b-button",{staticStyle:{border:"none","box-shadow":"none"},attrs:{size:"is-large",type:"is-dark","icon-left":"menu"},on:{click:e.openSidebar}})],1),n("router-view")],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("div",{staticClass:"container"},e._l(e.tabs,(function(t){return n("h2",{key:t.name,on:{click:function(n){return e.$router.push("/"+t.page)}}},[e._v(e._s(t.name))])})),0)])},i=[],c={name:"sidebar",data:function(){return{tabs:[{name:"Home",page:"home"},{name:"About",page:"about"}]}}},s=c,l=(n("519a"),n("2877")),f=Object(l["a"])(s,u,i,!1,null,null,null),p=f.exports,d={name:"App",components:{sidebar:p},data:function(){return{sidebarOpen:!1}},methods:{openSidebar:function(){this.sidebarOpen=!this.sidebarOpen}}},b=d,h=(n("5c0b"),Object(l["a"])(b,a,o,!1,null,null,null)),m=h.exports,v=(n("d3b7"),n("8c4f"));r["a"].use(v["a"]);var g=[{path:"/",name:"Home",component:function(){return n.e("chunk-4c5f6ffc").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new v["a"]({routes:g}),w=y,O=n("289d");n("5abe");r["a"].config.productionTip=!1,r["a"].use(O["a"]),new r["a"]({router:w,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("049a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.585861fa.js.map