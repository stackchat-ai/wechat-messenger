"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_require=require("./localstorage.js"),localStorage=_require.localStorage,_require2=require("./xmlhttprequest.js"),XMLHttpRequest=_require2.XMLHttpRequest,_require3=require("./formdata.js"),FormData=_require3.FormData,navigator=require("./navigator.js"),OnlineOfflineEvents=require("./online-offline-events.js");module.exports={polyfill:function(e){var t=0<arguments.length&&void 0!==e?e:global||window;if("object"!==(void 0===t?"undefined":_typeof(t)))throw new Error("polyfill target is not an Object");var o={localStorage:localStorage,XMLHttpRequest:XMLHttpRequest,FormData:FormData,Object:Object,navigator:navigator};for(var r in o)t[r]||(t[r]=o[r]);OnlineOfflineEvents.polyfill(t),t.navigator.product="ReactNative"},localStorage:localStorage,XMLHttpRequest:XMLHttpRequest,FormData:FormData,WebSocket:WebSocket};