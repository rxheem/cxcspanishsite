(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"+70p":function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return r("TJtU")}])},"+jru":function(t,e,r){r("aPfg")("WeakMap")},"/jkW":function(t,e,r){"use strict";r("hfKm")(e,"__esModule",{value:!0});var n=/\/\[[^/]+?\](?=\/|$)/;e.isDynamicRoute=function(t){return n.test(t)}},"0Bsm":function(t,e,r){"use strict";var n=r("KI45");e.__esModule=!0,e.default=function(t){function e(e){return a.default.createElement(t,(0,o.default)({router:(0,i.useRouter)()},e))}e.getInitialProps=t.getInitialProps,e.origGetInitialProps=t.origGetInitialProps,!1;return e};var o=n(r("htGi")),a=n(r("q1tI")),i=r("nOHt")},"4JlD":function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,s){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===typeof t?a(i(t),(function(i){var s=encodeURIComponent(n(i))+r;return o(t[i])?a(t[i],(function(t){return s+encodeURIComponent(n(t))})).join(e):s+encodeURIComponent(n(t[i]))})).join(e):s?encodeURIComponent(n(s))+r+encodeURIComponent(n(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},"5Uuq":function(t,e,r){var n=r("Jo+v"),o=r("hfKm"),a=r("iZP3"),i=r("G4HQ");function s(){if("function"!==typeof i)return null;var t=new i;return s=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var r={},i=o&&n;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var c=i?n(t,u):null;c&&(c.get||c.set)?o(r,u,c):r[u]=t[u]}return r.default=t,e&&e.set(t,r),r}},"8+Nu":function(t,e,r){var n=r("8bdy"),o=r("fprZ"),a=r("Bh1o");t.exports=function(t,e){return n(t)||o(t,e)||a()}},"8bdy":function(t,e,r){var n=r("p0XB");t.exports=function(t){if(n(t))return t}},BURE:function(t,e,r){r("cHUd")("WeakMap")},Bh1o:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},G4HQ:function(t,e,r){t.exports=r("m5qO")},KI45:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},Oc8Q:function(t,e,r){"use strict";var n,o=r("5T2Y"),a=r("V7Et")(0),i=r("kTiW"),s=r("6/1s"),u=r("kwZ1"),c=r("kB4c"),l=r("93I4"),p=r("n3ko"),h=r("n3ko"),f=!o.ActiveXObject&&"ActiveXObject"in o,d=s.getWeak,v=Object.isExtensible,y=c.ufstore,m=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(l(t)){var e=d(t);return!0===e?y(p(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return c.def(p(this,"WeakMap"),t,e)}},w=t.exports=r("raTm")("WeakMap",m,g,c,!0,!0);h&&f&&(u((n=c.getConstructor(m,"WeakMap")).prototype,g),s.NEED=!0,a(["delete","has","get","set"],(function(t){var e=w.prototype,r=e[t];i(e,t,(function(e,o){if(l(e)&&!v(e)){this._f||(this._f=new n);var a=this._f[t](e,o);return"set"==t?this:a}return r.call(this,e,o)}))})))},P5f7:function(t,e,r){"use strict";var n=r("8+Nu");r("hfKm")(e,"__esModule",{value:!0}),e.rewriteUrlForNextExport=function(t){var e=t.split("#"),r=n(e,2),o=r[0],a=r[1],i=o.split("?"),s=n(i,2),u=s[0],c=s[1];return u=u.replace(/\/$/,""),/\.[^/]+\/?$/.test(u)||(u+="/"),c&&(u+="?"+c),a&&(u+="#"+a),u}},QmWs:function(t,e,r){var n,o=(n=r("s4NR"))&&"object"==typeof n&&"default"in n?n.default:n,a=/https?|ftp|gopher|file/;function i(t){"string"==typeof t&&(t=y(t));var e=function(t,e,r){var n=t.auth,o=t.hostname,a=t.protocol||"",i=t.pathname||"",s=t.hash||"",u=t.query||"",c=!1;n=n?encodeURIComponent(n).replace(/%3A/i,":")+"@":"",t.host?c=n+t.host:o&&(c=n+(~o.indexOf(":")?"["+o+"]":o),t.port&&(c+=":"+t.port)),u&&"object"==typeof u&&(u=e.encode(u));var l=t.search||u&&"?"+u||"";return a&&":"!==a.substr(-1)&&(a+=":"),t.slashes||(!a||r.test(a))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),l&&"?"!==l[0]&&(l="?"+l),{protocol:a,host:c,pathname:i=i.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:s}}(t,o,a);return""+e.protocol+e.host+e.pathname+e.search+e.hash}var s="http://",u="w.w",c=s+u,l=/^https?|ftp|gopher|file/,p=/^(.+?)([#?].*)/,h=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,f=/^([a-z0-9.+-]*:)?\/\/\/*/i,d=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function v(t){try{return decodeURI(t)}catch(o){return t}}function y(t,e,r){void 0===e&&(e=!1),void 0===r&&(r=!1);var n=(t=v(t.trim())).match(p);t=n?n[1].replace(/\\/g,"/")+n[2]:t.replace(/\\/g,"/"),d.test(t)&&"/"!==t.slice(-1)&&(t+="/");var a=!/(^javascript)/.test(t)&&t.match(h),s=f.test(t),y="";a&&(l.test(a[1])||(y=a[1].toLowerCase(),t=""+a[2]+a[3]),a[2]||(s=!1,l.test(a[1])?(y=a[1],t=""+a[3]):t="//"+a[3]),3!==a[2].length&&1!==a[2].length||(y=a[1],t="/"+a[3]));var m,g=t.match(/(:[0-9]+)/),w="";g&&g[1]&&3===g[1].length&&(t=t.replace(w=g[1],w+"00"));var b={},x="",_="";try{m=new URL(t)}catch(o){x=o,y||r||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(_="/",t=t.substr(1));try{m=new URL(t,c)}catch(t){return b.protocol=y,b.href=y,b}}b.slashes=s&&!_,b.host=~m.host.indexOf(u)?"":m.host,b.hostname=~m.hostname.indexOf(u)?"":m.hostname.replace(/(\[|\])/g,""),b.protocol=x?y||null:m.protocol,b.search=m.search.replace(/\\/g,"%5C"),b.hash=m.hash.replace(/\\/g,"%5C");var k=t.split("#");!b.search&&~k[0].indexOf("?")&&(b.search="?"),b.hash||""!==k[1]||(b.hash="#"),b.query=e?o.decode(m.search.substr(1)):b.search.substr(1),b.pathname=_+v(m.pathname).replace(/"/g,"%22"),"about:"===b.protocol&&"blank"===b.pathname&&(b.protocol="",b.pathname=""),x&&"/"!==t[0]&&(b.pathname=b.pathname.substr(1)),y&&!l.test(y)&&"/"!==t.slice(-1)&&"/"===b.pathname&&(b.pathname=""),b.path=b.pathname+b.search,b.auth=[m.username,m.password].map(decodeURIComponent).filter(Boolean).join(":"),b.port=m.port,w&&(b.host=b.host.replace(w+"00",w),b.port=b.port.slice(0,-2)),b.href=_?""+b.pathname+b.search+b.hash:i(b);var C=/^(file)/.test(b.href)?["host","hostname"]:[];return Object.keys(b).forEach((function(t){~C.indexOf(t)||(b[t]=b[t]||null)})),b}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,g=/https?|ftp|gopher|file/;function w(t,e){var r="string"==typeof t?y(t):t;t="object"==typeof t?i(t):t;var n=y(e),o="";r.protocol&&!r.slashes&&(o=r.protocol,t=t.replace(r.protocol,""),o+="/"===e[0]||"/"===t[0]?"/":""),o&&n.protocol&&(o="",n.slashes||(o=n.protocol,e=e.replace(n.protocol,"")));var a=t.match(m);a&&!n.protocol&&(t=t.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^\/]/.test(e)&&(o=o.slice(0,-1)));var u=new URL(t,c+"/"),l=new URL(e,u).toString().replace(c,""),p=n.protocol||r.protocol;return p+=r.slashes||n.slashes?"//":"",!o&&p?l=l.replace(s,p):o&&(l=l.replace(s,"")),g.test(l)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),o&&(l=o+("/"===l[0]?l.substr(1):l)),l}e.parse=y,e.format=i,e.resolve=w,e.resolveObject=function(t,e){return y(w(t,e))}},Rp86:function(t,e,r){r("bBy9"),r("FlQf"),t.exports=r("fXsU")},TJtU:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),a=r("nOHt"),i=r.n(a),s=(r("mnIH"),o.a.createElement);e.default=function(t){return s("div",null,i.a.push("/privacy"))}},UXZV:function(t,e,r){t.exports=r("UbbE")},UbbE:function(t,e,r){r("o8NH"),t.exports=r("WEpk").Object.assign},XXOK:function(t,e,r){t.exports=r("Rp86")},YTqd:function(t,e,r){"use strict";r("hfKm")(e,"__esModule",{value:!0}),e.getRouteRegex=function(t){var e=(t.replace(/\/$/,"")||"/").replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&"),r={},n=1,o=e.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g,(function(t,e){var o=/^(\\\.){3}/.test(e);return r[e.replace(/\\([|\\{}()[\]^$+*?.-])/g,"$1").replace(/^\.{3}/,"")]={pos:n++,repeat:o},o?"/(.+?)":"/([^/]+?)"}));return{re:new RegExp("^"+o+"(?:/)?$","i"),groups:r}}},b3CU:function(t,e,r){var n=r("pbKT"),o=r("vjea");function a(e,r,i){return!function(){if("undefined"===typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],(function(){}))),!0}catch(t){return!1}}()?t.exports=a=function(t,e,r){var n=[null];n.push.apply(n,e);var a=new(Function.bind.apply(t,n));return r&&o(a,r.prototype),a}:t.exports=a=n,a.apply(null,arguments)}t.exports=a},czwh:function(t,e,r){var n=r("Y7ZC"),o=r("oVml"),a=r("eaoh"),i=r("5K7Z"),s=r("93I4"),u=r("KUxP"),c=r("wYmx"),l=(r("5T2Y").Reflect||{}).construct,p=u((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),h=!u((function(){l((function(){}))}));n(n.S+n.F*(p||h),"Reflect",{construct:function(t,e){a(t),i(e);var r=arguments.length<3?t:a(arguments[2]);if(h&&!p)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(c.apply(t,n))}var u=r.prototype,f=o(s(u)?u:Object.prototype),d=Function.apply.call(t,f,e);return s(d)?d:f}})},dZ6Y:function(t,e,r){"use strict";var n=r("SqZg");r("hfKm")(e,"__esModule",{value:!0}),e.default=function(){var t=n(null);return{on:function(e,r){(t[e]||(t[e]=[])).push(r)},off:function(e,r){t[e]&&t[e].splice(t[e].indexOf(r)>>>0,1)},emit:function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(t[e]||[]).slice().map((function(t){t.apply(void 0,n)}))}}}},elyg:function(t,e,r){"use strict";var n=r("ln6h"),o=r("8+Nu"),a=r("Qetd"),i=r("eVuF"),s=r("/HRN"),u=r("WaGi"),c=r("hfKm"),l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};c(e,"__esModule",{value:!0});var p=r("QmWs"),h=l(r("dZ6Y")),f=r("g/15"),d=r("P5f7"),v=r("/jkW"),y=r("gguc"),m=r("YTqd");function g(t){return 0!==t.indexOf("")?""+t:t}function w(t){return t.replace(/\/$/,"")||"/"}var b=function(){function t(e,r,n,o){var a=this,u=o.initialProps,c=o.pageLoader,l=o.App,h=o.wrapApp,d=o.Component,y=o.err,m=o.subscription;s(this,t),this.sdc={},this.onPopState=function(t){if(t.state){if((!t.state||!a.isSsr||t.state.url!==a.pathname||t.state.as!==a.asPath)&&(!a._bps||a._bps(t.state))){var e=t.state,r=e.url,n=e.as,o=e.options;0,a.replace(r,n,o)}}else{var i=a.pathname,s=a.query;a.changeState("replaceState",f.formatWithValidation({pathname:i,query:s}),f.getURL())}},this._getStaticData=function(t,e){var r=p.parse(t).pathname;return r=r&&"/"!==r?r:"/index",(e=a.sdc[r])?i.resolve(e):fetch("/_next/data/".concat(__NEXT_DATA__.buildId).concat(r,".json")).then((function(t){if(!t.ok)throw new Error("Failed to load static props");return t.json()})).then((function(t){return a.sdc[r]=t,t})).catch((function(t){throw t.code="PAGE_LOAD_ERROR",t}))},this.route=w(e),this.components={},"/_error"!==e&&(this.components[this.route]={Component:d,props:u,err:y}),this.components["/_app"]={Component:l},this.events=t.events,this.pageLoader=c,this.pathname=e,this.query=r,this.asPath=v.isDynamicRoute(e)&&__NEXT_DATA__.autoExport?e:n,this.sub=m,this.clc=null,this._wrapApp=h,this.isSsr=!0,this.changeState("replaceState",f.formatWithValidation({pathname:e,query:r}),n),window.addEventListener("popstate",this.onPopState)}return u(t,[{key:"update",value:function(t,e){var r=e.default||e,n=this.components[t];if(!n)throw new Error("Cannot update unavailable route: ".concat(t));var o=a(a({},n),{Component:r});this.components[t]=o,"/_app"!==t?t===this.route&&this.notify(o):this.notify(this.components[this.route])}},{key:"reload",value:function(){window.location.reload()}},{key:"back",value:function(){window.history.back()}},{key:"push",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("pushState",t,e,r)}},{key:"replace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("replaceState",t,e,r)}},{key:"change",value:function(e,r,n,o){var s=this;return new i((function(i,u){o._h||(s.isSsr=!1),f.SUPPORTS_PERFORMANCE_USER_TIMING&&performance.mark("routeChange");var c="object"===typeof r?f.formatWithValidation(r):r,l="object"===typeof n?f.formatWithValidation(n):n;if(s.abortComponentLoad(l),!o._h&&s.onlyAHashChange(l))return s.asPath=l,t.events.emit("hashChangeStart",l),s.changeState(e,c,g(l)),s.scrollToHash(l),t.events.emit("hashChangeComplete",l),i(!0);var h=p.parse(c,!0),d=h.pathname,b=h.query,x=h.protocol;if(!d||x)return i(!1);s.urlIsNew(l)||(e="replaceState");var _=w(d),k=o.shallow,C=void 0!==k&&k;if(v.isDynamicRoute(_)){var E=p.parse(l).pathname,P=y.getRouteMatcher(m.getRouteRegex(_))(E);if(!P){var R="The provided `as` value (".concat(E,") is incompatible with the `href` value (").concat(_,"). ")+"Read more: https://err.sh/zeit/next.js/incompatible-href-as";return console.error(R),i(!1)}a(b,P)}t.events.emit("routeChangeStart",l),s.getRouteInfo(_,d,b,l,C).then((function(r){var n=r.error;if(n&&n.cancelled)return i(!1);t.events.emit("beforeHistoryChange",l),s.changeState(e,c,g(l),o);var u=window.location.hash.substring(1);if(s.set(_,d,b,l,a(a({},r),{hash:u})),n)throw t.events.emit("routeChangeError",n,l),n;return t.events.emit("routeChangeComplete",l),i(!0)}),u)}))}},{key:"changeState",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};"pushState"===t&&f.getURL()===r||window.history[t]({url:e,as:r,options:n},null,r)}},{key:"getRouteInfo",value:function(t,e,r,n){var o=this,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=this.components[t];return a&&s&&this.route===t?i.resolve(s):new i((function(e,r){if(s)return e(s);o.fetchComponent(t).then((function(t){return e({Component:t})}),r)})).then((function(a){var i=a.Component;return o._getData((function(){return i.__NEXT_SPR?o._getStaticData(n):o.getInitialProps(i,{pathname:e,query:r,asPath:n})})).then((function(e){return a.props=e,o.components[t]=a,a}))})).catch((function(t){return new i((function(a){return"PAGE_LOAD_ERROR"===t.code?(window.location.href=n,t.cancelled=!0,a({error:t})):t.cancelled?a({error:t}):void a(o.fetchComponent("/_error").then((function(n){var a={Component:n,err:t};return new i((function(i){o.getInitialProps(n,{err:t,pathname:e,query:r}).then((function(e){a.props=e,a.error=t,i(a)}),(function(e){console.error("Error in error page `getInitialProps`: ",e),a.error=t,a.props={},i(a)}))}))})))}))}))}},{key:"set",value:function(t,e,r,n,o){this.route=t,this.pathname=e,this.query=r,this.asPath=n,this.notify(o)}},{key:"beforePopState",value:function(t){this._bps=t}},{key:"onlyAHashChange",value:function(t){if(!this.asPath)return!1;var e=this.asPath.split("#"),r=o(e,2),n=r[0],a=r[1],i=t.split("#"),s=o(i,2),u=s[0],c=s[1];return!(!c||n!==u||a!==c)||n===u&&a!==c}},{key:"scrollToHash",value:function(t){var e=t.split("#"),r=o(e,2)[1];if(""!==r){var n=document.getElementById(r);if(n)n.scrollIntoView();else{var a=document.getElementsByName(r)[0];a&&a.scrollIntoView()}}else window.scrollTo(0,0)}},{key:"urlIsNew",value:function(t){return this.asPath!==t}},{key:"prefetch",value:function(t){var e=this;return new i((function(r,n){var o=p.parse(t),a=o.pathname,i=o.protocol;if(a&&!i){var s=w(a);0,e.pageLoader.prefetch(s).then(r,n)}}))}},{key:"fetchComponent",value:function(t){var e,r,o,a;return n.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=!1,r=this.clc=function(){e=!0},i.next=4,n.awrap(this.pageLoader.loadPage(t));case 4:if(o=i.sent,!e){i.next=9;break}throw(a=new Error('Abort fetching component for route: "'.concat(t,'"'))).cancelled=!0,a;case 9:return r===this.clc&&(this.clc=null),i.abrupt("return",o);case 11:case"end":return i.stop()}}),null,this)}},{key:"_getData",value:function(t){var e=this,r=!1,n=function(){r=!0};return this.clc=n,t().then((function(t){if(n===e.clc&&(e.clc=null),r){var o=new Error("Loading initial props cancelled");throw o.cancelled=!0,o}return t}))}},{key:"getInitialProps",value:function(t,e){var r=this.components["/_app"].Component,n=this._wrapApp(r);return e.AppTree=n,f.loadGetInitialProps(r,{AppTree:n,Component:t,router:this,ctx:e})}},{key:"abortComponentLoad",value:function(e){if(this.clc){var r=new Error("Route Cancelled");r.cancelled=!0,t.events.emit("routeChangeError",r,e),this.clc(),this.clc=null}}},{key:"notify",value:function(t){this.sub(t,this.components["/_app"].Component)}}],[{key:"_rewriteUrlForNextExport",value:function(t){return d.rewriteUrlForNextExport(t)}}]),t}();e.default=b,b.events=h.default()},fXsU:function(t,e,r){var n=r("5K7Z"),o=r("fNZA");t.exports=r("WEpk").getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},fprZ:function(t,e,r){var n=r("XXOK"),o=r("yLu3");t.exports=function(t,e){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],a=!0,i=!1,s=void 0;try{for(var u,c=n(t);!(a=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);a=!0);}catch(l){i=!0,s=l}finally{try{a||null==c.return||c.return()}finally{if(i)throw s}}return r}}},"g/15":function(t,e,r){"use strict";var n=r("ln6h");r("pLtp");r("hfKm")(e,"__esModule",{value:!0});var o=r("QmWs");function a(){var t=window.location,e=t.protocol,r=t.hostname,n=t.port;return"".concat(e,"//").concat(r).concat(n?":"+n:"")}function i(t){return"string"===typeof t?t:t.displayName||t.name||"Unknown"}function s(t){return t.finished||t.headersSent}e.execOnce=function(t){var e=this,r=!1,n=null;return function(){if(!r){r=!0;for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];n=t.apply(e,a)}return n}},e.getLocationOrigin=a,e.getURL=function(){var t=window.location.href,e=a();return t.substring(e.length)},e.getDisplayName=i,e.isResSent=s,e.loadGetInitialProps=function t(e,r){var o,a,u;return n.async((function(c){for(;;)switch(c.prev=c.next){case 0:c.next=4;break;case 4:if(o=r.res||r.ctx&&r.ctx.res,e.getInitialProps){c.next=12;break}if(!r.ctx||!r.Component){c.next=11;break}return c.next=9,n.awrap(t(r.Component,r.ctx));case 9:return c.t0=c.sent,c.abrupt("return",{pageProps:c.t0});case 11:return c.abrupt("return",{});case 12:return c.next=14,n.awrap(e.getInitialProps(r));case 14:if(a=c.sent,!o||!s(o)){c.next=17;break}return c.abrupt("return",a);case 17:if(a){c.next=20;break}throw u='"'.concat(i(e),'.getInitialProps()" should resolve to an object. But found "').concat(a,'" instead.'),new Error(u);case 20:return c.abrupt("return",a);case 22:case"end":return c.stop()}}))},e.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"],e.formatWithValidation=function(t,e){return o.format(t,e)},e.SUPPORTS_PERFORMANCE="undefined"!==typeof performance,e.SUPPORTS_PERFORMANCE_USER_TIMING=e.SUPPORTS_PERFORMANCE&&"function"===typeof performance.mark&&"function"===typeof performance.measure},gguc:function(t,e,r){"use strict";var n=r("pLtp");r("hfKm")(e,"__esModule",{value:!0}),e.getRouteMatcher=function(t){var e=t.re,r=t.groups;return function(t){var o=e.exec(t);if(!o)return!1;var a=decodeURIComponent,i={};return n(r).forEach((function(t){var e=r[t],n=o[e.pos];void 0!==n&&(i[t]=~n.indexOf("/")?n.split("/").map((function(t){return a(t)})):e.repeat?[a(n)]:a(n))})),i}}},htGi:function(t,e,r){var n=r("UXZV");function o(){return t.exports=o=n||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}t.exports=o},kB4c:function(t,e,r){"use strict";var n=r("XJU/"),o=r("6/1s").getWeak,a=r("5K7Z"),i=r("93I4"),s=r("EXMj"),u=r("oioR"),c=r("V7Et"),l=r("B+OT"),p=r("n3ko"),h=c(5),f=c(6),d=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},m=function(t,e){return h(t.a,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=m(this,t);if(e)return e[1]},has:function(t){return!!m(this,t)},set:function(t,e){var r=m(this,t);r?r[1]=e:this.a.push([t,e])},delete:function(t){var e=f(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,r,a){var c=t((function(t,n){s(t,c,e,"_i"),t._t=e,t._i=d++,t._l=void 0,void 0!=n&&u(n,r,t[a],t)}));return n(c.prototype,{delete:function(t){if(!i(t))return!1;var r=o(t);return!0===r?v(p(this,e)).delete(t):r&&l(r,this._i)&&delete r[this._i]},has:function(t){if(!i(t))return!1;var r=o(t);return!0===r?v(p(this,e)).has(t):r&&l(r,this._i)}}),c},def:function(t,e,r){var n=o(a(e),!0);return!0===n?v(t).set(e,r):n[t._i]=r,t},ufstore:v}},kd2E:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,a){e=e||"&",r=r||"=";var i={};if("string"!==typeof t||0===t.length)return i;var s=/\+/g;t=t.split(e);var u=1e3;a&&"number"===typeof a.maxKeys&&(u=a.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var l=0;l<c;++l){var p,h,f,d,v=t[l].replace(s,"%20"),y=v.indexOf(r);y>=0?(p=v.substr(0,y),h=v.substr(y+1)):(p=v,h=""),f=decodeURIComponent(p),d=decodeURIComponent(h),n(i,f)?o(i[f])?i[f].push(d):i[f]=[i[f],d]:i[f]=d}return i};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},kwZ1:function(t,e,r){"use strict";var n=r("jmDH"),o=r("w6GO"),a=r("mqlF"),i=r("NV0k"),s=r("JB68"),u=r("M1xp"),c=Object.assign;t.exports=!c||r("KUxP")((function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=c({},t)[r]||Object.keys(c({},e)).join("")!=n}))?function(t,e){for(var r=s(t),c=arguments.length,l=1,p=a.f,h=i.f;c>l;)for(var f,d=u(arguments[l++]),v=p?o(d).concat(p(d)):o(d),y=v.length,m=0;y>m;)f=v[m++],n&&!h.call(d,f)||(r[f]=d[f]);return r}:c},ln6h:function(t,e,r){t.exports=r("ls82")},ls82:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=c(t,e,r);if("normal"===u.type){if(n=r.done?f:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=f,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",p="suspendedYield",h="executing",f="completed",d={};function v(){}function y(){}function m(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==r&&n.call(b,a)&&(g=b);var x=m.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var s=c(t[r],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o){var a=new k(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},m5qO:function(t,e,r){r("wgeU"),r("bBy9"),r("Oc8Q"),r("BURE"),r("+jru"),t.exports=r("WEpk").WeakMap},mnIH:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),a=r("QJSi"),i=(r("8Kt/"),r("HUOD")),s=r.n(i),u=r("5Yp1"),c=o.a.createElement;e.default=function(t){return c(u.a,null,c(s.a,{title:"Privacy | CXC Spanish Online",pathname:"https://www.cxcspnish/privacy",description:"This notice describes our privacy policy. By visiting cxcspanish.com, you are accepting the practices described in this privacy notice.",siteLanguage:"en",twitterUsername:"_rxheem",author:"Raheem McDonald",article:!0,publishedDate:"Jan 13, 2020",modifiedDate:"Jan 13, 2020"}),c(a.n,null,c(a.c,null,c(a.d,{active:!0},c("a",{href:"/"},"Home")),c(a.d,{active:!0},"Privacy")),c("h4",null,"Privacy Policy"),c("p",null,"This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website."),c("h6",null,"What personal information do we collect from the people that visit our website and blog?"),c("p",null,"When using, ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, credit card information or other details to help you with your experience."),c("h6",null,"When do we collect information?"),c("p",null,"We collect information from you when you register on our site, place an order, subscribe to a newsletter, fill out a form or enter information on our site."),c("h6",null,"Transfer Of Your Personal Information"),c("p",null,"Your information, including personal information, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."),c("p",null,"We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your personal information will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."),c("h6",null,"Third Party Links"),c("p",null,"Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites."),c("h6",null,"When do we collect information?"),c("p",null,"We collect information from you when you register on our site, place an order, subscribe to a newsletter, fill out a form or enter information on our site."),c("h6",null,"How do we use your information?"),c("ul",null,c("li",null,"Help us remember you"),c("li",null,"To personalize user's experience and to allow us to deliver the type of content and product offerings in which you are most interested."),c("li",null,"To improve our website in order to better serve you."),c("li",null,"To allow us to better service you in responding to your customer service requests."),c("li",null,"To administer a contest, promotion, survey or other site feature."),c("li",null,"To quickly process your transactions."),c("li",null,"To send periodic emails regarding your order or other products and services.")),c("p",null,"When using, ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, credit card information or other details to help you with your experience."),c("a",{href:"./resources/cxc-spanish-2015-past-paper"},"CXC Spanish 2015 Past paper"),c("br",null),c("a",{href:"./resources/cxc-spanish-2016-past-paper"},"CXC Spanish 2016 Past paper"),c("br",null),c("a",{href:"./resources/cxc-spanish-2017-past-paper"},"CXC Spanish 2017 Past paper"),c("br",null),c("a",{href:"./resources/cxc-spanish-2018-past-paper"},"CXC Spanish 2018 Past paper"),c("br",null),c("a",{href:"./resources/cxc-spanish-2019-past-paper"},"CXC Spanish 2019 Past paper"),c("a",{href:"./resources/cxc-spanish-2020-past-paper"},"CXC Spanish 2019 Past paper"),c(a.C,null,c(a.l,{sm:12,md:8,lg:8,xl:8},c(a.f,null,c(a.g,null,c(a.k,null,"What are Cookies?"),c("p",null,"Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future."),c(a.e,null,"Read more \u2192")),c(a.h,null,"Cookies are used on almost every website"))),c(a.l,{sm:4,md:4,lg:4,xl:4},c(a.f,null,c(a.g,null,c("p",null,"We use cookies to:"),c("ul",null,c("li",null,"Understand and save user's preferences for future visits."),c("li",null,"Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third party services that track this information on our behalf."),c("li",null,"Help remember and process topics that youinterest you the most"),c("li",null,"Suggest other articles to you")))))),c("br",null),c("p",null,"You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies. If you disable cookies off, some features will be disabled It will turn off some of the features that make your site experience more efficient and some of our services will not function properly.")))}},nOHt:function(t,e,r){"use strict";var n=r("XXOK"),o=r("b3CU"),a=r("5Uuq"),i=r("KI45");e.__esModule=!0,e.useRouter=function(){return c.default.useContext(p.RouterContext)},e.makePublicRouterInstance=function(t){var e=t,r={},o=!0,a=!1,i=void 0;try{for(var u,c=n(d);!(o=(u=c.next()).done);o=!0){var p=u.value;"object"!==typeof e[p]?r[p]=e[p]:r[p]=(0,s.default)({},e[p])}}catch(h){a=!0,i=h}finally{try{o||null==c.return||c.return()}finally{if(a)throw i}}return r.events=l.default.events,v.forEach((function(t){r[t]=function(){return e[t].apply(e,arguments)}})),r},e.createRouter=e.withRouter=e.default=void 0;var s=i(r("htGi")),u=i(r("hfKm")),c=i(r("q1tI")),l=a(r("elyg"));e.Router=l.default,e.NextRouter=l.NextRouter;var p=r("qOIg"),h=i(r("0Bsm"));e.withRouter=h.default;var f={router:null,readyCallbacks:[],ready:function(t){if(this.router)return t();this.readyCallbacks.push(t)}},d=["pathname","route","query","asPath","components"],v=["push","replace","reload","back","prefetch","beforePopState"];function y(){if(!f.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}return f.router}(0,u.default)(f,"events",{get:function(){return l.default.events}}),d.forEach((function(t){(0,u.default)(f,t,{get:function(){return y()[t]}})})),v.forEach((function(t){f[t]=function(){var e=y();return e[t].apply(e,arguments)}})),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach((function(t){f.ready((function(){l.default.events.on(t,(function(){var e="on"+t.charAt(0).toUpperCase()+t.substring(1),r=f;if(r[e])try{r[e].apply(r,arguments)}catch(n){console.error("Error when running the Router event: "+e),console.error(n.message+"\n"+n.stack)}}))}))}));var m=f;e.default=m;e.createRouter=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return f.router=o(l.default,e),f.readyCallbacks.forEach((function(t){return t()})),f.readyCallbacks=[],f.router}},o8NH:function(t,e,r){var n=r("Y7ZC");n(n.S+n.F,"Object",{assign:r("kwZ1")})},pbKT:function(t,e,r){t.exports=r("qijr")},qOIg:function(t,e,r){"use strict";var n=r("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};n(e,"__esModule",{value:!0});var a=o(r("q1tI"));e.RouterContext=a.createContext(null)},qijr:function(t,e,r){r("czwh"),t.exports=r("WEpk").Reflect.construct},s4NR:function(t,e,r){"use strict";e.decode=e.parse=r("kd2E"),e.encode=e.stringify=r("4JlD")},wYmx:function(t,e,r){"use strict";var n=r("eaoh"),o=r("93I4"),a=r("MCSJ"),i=[].slice,s={},u=function(t,e,r){if(!(e in s)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";s[e]=Function("F,a","return new F("+n.join(",")+")")}return s[e](t,r)};t.exports=Function.bind||function(t){var e=n(this),r=i.call(arguments,1),s=function(){var n=r.concat(i.call(arguments));return this instanceof s?u(e,n.length,n):a(e,n,t)};return o(e.prototype)&&(s.prototype=e.prototype),s}}},[["+70p",1,0]]]);