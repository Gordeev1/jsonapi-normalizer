!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["jsonapi-normalizer"]=t():r["jsonapi-normalizer"]=t()}(this,function(){return function(r){function t(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return r[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=r,t.c=n,t.p="",t(0)}([function(r,t){"use strict";function n(r){if(Array.isArray(r)){for(var t=0,n=Array(r.length);t<r.length;t++)n[t]=r[t];return n}return Array.from(r)}function e(r,t){var n=t.type,e=t.id;r[n]||(r[n]=[]),r[n].push(e)}function o(r,t,n){var e=t.type,o=t.id,a=t.attributes;return r[e]||(r[e]={}),r[e][o]=f({id:o},a,i(t,n)),r}function i(r,t){var n=r.relationships;if(n){var e={};return Object.keys(n).map(function(r){e[r]=u(n[r].data,t)}),e}}function a(r){return r?Array.isArray(r)?r.map(function(r){return r.id}):r.id:null}function u(r,t){return t?a(r):Array.isArray(r)?[].concat(n(r)):f({},r)}var f=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r};r.exports=function(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=void 0;n=Array.isArray(r.data)?r.data:[r.data];var i=r.included||[],a={},u={};return n.forEach(function(r){e(a,r),o(u,r,t)}),i.forEach(function(r){o(u,r,t)}),{result:a,entities:u}}}])});