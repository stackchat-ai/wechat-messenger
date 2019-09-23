"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.delegate=exports.Delegate=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_message=require("./message.js");function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var DELEGATE_OPTIONS=["beforeDisplay","beforeSend","beforePostbackSend"],Delegate=exports.Delegate=function(){function e(){_classCallCheck(this,e),this.delegate={}}return _createClass(e,[{key:"setDelegate",value:function(o){if("object"!==(void 0===o?"undefined":_typeof(o)))throw new Error("setDelegate failed: delegate is not an object");var e=Object.keys(o).find(function(e){return!DELEGATE_OPTIONS.includes(e)});if(void 0!==e)throw new Error("setDelegate failed: invalid delegate option: "+e);Object.keys(o).forEach(function(e){var t=o[e];if("function"!=typeof t&&null!=t)throw new Error("setDelegate failed: delegate option "+e+" is an invalid type")}),this.delegate=o}},{key:"beforeDisplay",value:function(t){var e=t;if("function"==typeof this.delegate.beforeDisplay){try{e=this.delegate.beforeDisplay((0,_message.cloneMessage)(t))}catch(e){return console.error("Could not apply the 'beforeDisplay' transformation."),console.error(e),t}e?(e.id=t.id,e._isModifiedBeforeDisplay=!0):e=null}return e}},{key:"beforeSend",value:function(e){var t=e;if("function"!=typeof this.delegate.beforeSend)return t;t=(0,_message.cloneMessage)(e);var o=this.delegate.beforeSend(e);return Object.assign(t,o)}},{key:"beforePostbackSend",value:function(e){var t=e;if("function"!=typeof this.delegate.beforePostbackSend)return t;t=(0,_message.cloneMessage)(e);var o=this.delegate.beforePostbackSend(e);return Object.assign(t,o)}},{key:"hasBeforeDisplay",value:function(){return!(!this.delegate.beforeDisplay||"function"!=typeof this.delegate.beforeDisplay)}}]),e}(),delegate=exports.delegate=new Delegate;