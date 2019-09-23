"use strict";var Commons=require("./commons.js"),LISTENERS=Commons.LISTENERS,ATTRIBUTE=Commons.ATTRIBUTE,newNode=Commons.newNode;function getAttributeListener(t,e){for(var n=t[LISTENERS][e];null!=n;){if(n.kind===ATTRIBUTE)return n.listener;n=n.next}return null}function setAttributeListener(t,e,n){"function"!=typeof n&&"object"!=typeof n&&(n=null);for(var o=null,r=t[LISTENERS][e];null!=r;)r.kind===ATTRIBUTE?null==o?t[LISTENERS][e]=r.next:o.next=r.next:o=r,r=r.next;null!=n&&(null==o?t[LISTENERS][e]=newNode(n,ATTRIBUTE):o.next=newNode(n,ATTRIBUTE))}exports.defineCustomEventTarget=function(t,e){function n(){t.call(this)}var o={constructor:{value:n,configurable:!0,writable:!0}};return e.forEach(function(e){o["on"+e]={get:function(){return getAttributeListener(this,e)},set:function(t){setAttributeListener(this,e,t)},configurable:!0,enumerable:!0}}),n.prototype=Object.create(t.prototype,o),n};