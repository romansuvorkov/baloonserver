(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{105:function(t,a,e){"use strict";e.r(a);var r,n=e(0),o=e.n(n),s=e(1),i=e.n(s),u=new Uint8Array(16);function d(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var f=function(t){return"string"==typeof t&&p.test(t)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var m=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(c[t[a+0]]+c[t[a+1]]+c[t[a+2]]+c[t[a+3]]+"-"+c[t[a+4]]+c[t[a+5]]+"-"+c[t[a+6]]+c[t[a+7]]+"-"+c[t[a+8]]+c[t[a+9]]+"-"+c[t[a+10]]+c[t[a+11]]+c[t[a+12]]+c[t[a+13]]+c[t[a+14]]+c[t[a+15]]).toLowerCase();if(!f(e))throw TypeError("Stringified UUID is invalid");return e};var v=function(t,a,e){var r=(t=t||{}).random||(t.rng||d)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,a){e=e||0;for(var n=0;n<16;++n)a[e+n]=r[n];return a}return m(r)};function g(t){var a=t.dataText;return o.a.createElement("div",{className:"advantage_wrapper",id:"catalog_start"},o.a.createElement("div",{className:"advantage_list"},a.map((function(t){return o.a.createElement("div",{className:"advantage_card",key:v()},o.a.createElement("span",{className:"advantage_text"},t))}))))}a.default=g;g.propTypes={dataText:i.a.arrayOf(i.a.string)},g.defaultProps={dataText:null}}}]);