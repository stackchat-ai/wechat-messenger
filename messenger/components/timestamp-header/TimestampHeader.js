"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _dec,_class,_class2,_temp2,_createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_get=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(n):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../npm/@tarojs/redux/index.js"),_index4=require("../../../npm/date-fns/format/index.js"),_index5=_interopRequireDefault(_index4);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var TimestampHeader=(_dec=(0,_index3.connect)(function(e){var t=e.ui;return{conversationTimestampHeaderFormat:t.text.conversationTimestampHeaderFormat,dateFnLocale:t.dateFnLocale}}))((_temp2=_class2=function(){function s(){var e,t,r;_classCallCheck(this,s);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=r=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(o)))).$usedState=["formattedValue","value","conversationTimestampHeaderFormat","dateFnLocale"],r.customComponents=[],_possibleConstructorReturn(r,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.$$refs=[]}},{key:"_createData",value:function(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var n=this.__props,o=n.value,a=n.conversationTimestampHeaderFormat,s=n.dateFnLocale,i=(0,_index5.default)(new Date(1e3*o),a,{locale:s});return Object.assign(this.__state,{formattedValue:i}),this.__state}}]),s}(),_class2.$$events=[],_class2.$$componentPath="messenger/components/timestamp-header/TimestampHeader",_class=_temp2))||_class;exports.default=TimestampHeader,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(TimestampHeader));