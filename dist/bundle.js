/*! For license information please see bundle.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("dexie")):"function"==typeof define&&define.amd?define(["dexie"],e):"object"==typeof exports?exports["Svelter Search"]=e(require("dexie")):t["Svelter Search"]=e(t.dexie)}(self,(t=>(()=>{"use strict";var e={363:e=>{e.exports=t}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var o=r[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};n.r(a),n.d(a,{default:()=>v});var o=n(363),i=n.n(o);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return s(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function l(){l=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),u=new N(n||[]);return a(i,"_invoke",{value:O(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",b={};function g(){}function w(){}function _(){}var x={};h(x,i,(function(){return this}));var k=Object.getPrototypeOf,S=k&&k(k(T([])));S&&S!==r&&n.call(S,i)&&(x=S);var E=_.prototype=g.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(a,o,i,c){var s=p(t[a],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==u(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function O(e,r,n){var a=d;return function(o,i){if(a===y)throw Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var c=P(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=y;var s=p(e,r,n);if("normal"===s.type){if(a=n.done?m:v,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=p(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(u(e)+" is not iterable")}return w.prototype=_,a(E,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:w,configurable:!0}),w.displayName=h(_,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,h(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(j.prototype),h(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new j(f(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),h(E,s,"Generator"),h(E,i,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return u.type="throw",u.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;D(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function h(t,e,r,n,a,o,i){try{var u=t[o](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,a)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){h(o,n,a,i,u,"next",t)}function u(t){h(o,n,a,i,u,"throw",t)}i(void 0)}))}}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function d(t){var e=function(t){if("object"!=u(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}const v=function(){return t=function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.search_id=e.search_id||"default_search",this.update_interval=e.update_interval||36e5,this.data_url=e.data_url||"",this.date_url=e.date_url||"",this.last_update=null,this.auto_update=void 0!==e.auto_update&&e.auto_update,this.incrementalUpdate=void 0!==e.incrementalUpdate&&e.incrementalUpdate,this.db=new(i())("svelter_search");var n={};n[this.search_id]="&id, updated_at, search_value, *searchWords",this.db.version(1).stores(n),this.db[this.search_id].hook("creating",(function(t,e){"string"==typeof e.search_value?e.searchWords=r.getAllWords(e.search_value):e.searchWords=[]})),this.db[this.search_id].hook("updating",(function(t,e,n){if(t.hasOwnProperty("search_value"))return"string"==typeof t.search_value?{searchWords:r.getAllWords(t.search_value)}:{searchWords:[]}}));var a="svelter_search_".concat(this.search_id,"_last_update"),o=localStorage.getItem(a);this.last_update=o?new Date(o):new Date(0)},e=[{key:"getAllWords",value:function(t){var e=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").match(/\b\w+\b/g);if(e){var r=new Set(e.map((function(t){return t.toLowerCase()})));return Array.from(r)}return[]}},{key:"update",value:(s=f(l().mark((function t(){var e,r,n,a=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:this.data_url,t.t0=console,t.next=4,this.isUpdateNeeded();case 4:return t.t1=t.sent,t.t0.log.call(t.t0,t.t1),t.next=8,this.isUpdateNeeded();case 8:if(t.sent){t.next=10;break}return t.abrupt("return");case 10:if(this.incrementalUpdate){t.next=13;break}return t.next=13,this.clear();case 13:return t.prev=13,t.next=16,fetch(e);case 16:return r=t.sent,t.next=19,r.json();case 19:return n=t.sent,t.next=22,this.processData(n);case 22:this.last_update=new Date,localStorage.setItem("svelter_search_".concat(this.search_id,"_last_update"),this.last_update.toISOString()),t.next=30;break;case 26:throw t.prev=26,t.t2=t.catch(13),console.error("Error during update:",t.t2),t.t2;case 30:case"end":return t.stop()}}),t,this,[[13,26]])}))),function(){return s.apply(this,arguments)})},{key:"isUpdateNeeded",value:(u=f(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Date.now()-this.last_update.getTime()>=this.update_interval)){t.next=4;break}return t.abrupt("return",!0);case 4:return t.next=6,this.isRemoteChanged();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"isRemoteChanged",value:(o=f(l().mark((function t(){var e,r,n,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.date_url){t.next=2;break}return t.abrupt("return",!1);case 2:return t.prev=2,t.next=5,fetch(this.date_url);case 5:return e=t.sent,t.next=8,e.json();case 8:return r=t.sent,n=r.updated_at,a=new Date(n),t.abrupt("return",a>this.last_update);case 14:return t.prev=14,t.t0=t.catch(2),console.error("Error fetching remote update date:",t.t0),t.abrupt("return",!0);case 18:case"end":return t.stop()}}),t,this,[[2,14]])}))),function(){return o.apply(this,arguments)})},{key:"processData",value:(a=f(l().mark((function t(e){var r=this;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Array.isArray(e)){t.next=2;break}throw new Error("Data must be an array of items.");case 2:return t.next=4,this.db.transaction("rw",this.db[this.search_id],f(l().mark((function t(){var n,a,o,i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=c(e),t.prev=1,n.s();case 3:if((a=n.n()).done){t.next=20;break}if((o=a.value).id){t.next=7;break}return t.abrupt("continue",18);case 7:if(!o.is_deleted){t.next=12;break}return t.next=10,r.db[r.search_id].delete(o.id);case 10:t.next=18;break;case 12:return t.next=14,r.db[r.search_id].get(o.id);case 14:if((i=t.sent)&&!(new Date(o.updated_at)>new Date(i.updated_at))){t.next=18;break}return t.next=18,r.db[r.search_id].put({id:o.id,updated_at:o.updated_at,search_value:o.search_value,data:o.data});case 18:t.next=3;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(1),n.e(t.t0);case 25:return t.prev=25,n.f(),t.finish(25);case 28:case"end":return t.stop()}}),t,null,[[1,22,25,28]])}))));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"clear",value:(n=f(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db[this.search_id].clear();case 2:localStorage.removeItem("svelter_search_".concat(this.search_id,"_last_update")),console.log("Database purged for search_id:",this.search_id);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"search",value:(r=f(l().mark((function t(e){var r,n,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",[]);case 2:if(!this.auto_update){t.next=5;break}return t.next=5,this.update();case 5:if(r=e.normalize("NFD").replace(/[\u0300-\u036f]/g,""),(n=r.toLowerCase().match(/\b\w+\b/g))&&0!==n.length){t.next=9;break}return t.abrupt("return",[]);case 9:return t.prev=9,t.next=12,this.db[this.search_id].filter((function(t){var e=t.searchWords||[];return n.every((function(t){return e.some((function(e){return e.includes(t)}))}))})).toArray();case 12:return a=t.sent,t.abrupt("return",a);case 16:return t.prev=16,t.t0=t.catch(9),console.error("Error searching data :",t.t0),t.abrupt("return",[]);case 20:case"end":return t.stop()}}),t,this,[[9,16]])}))),function(t){return r.apply(this,arguments)})}],e&&p(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r,n,a,o,u,s}();return a})()));