"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _dec,_class,_class2,_temp2,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../npm/@tarojs/redux/index.js"),_user=require("../../state/actions/user.js"),_conversation=require("../../state/actions/conversation.js"),_message=require("../../utils/message.js"),_message2=require("../../state/constants/message.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var styles={inline:{backgroundColor:"transparent",borderColor:"transparent",borderWidth:"0px",borderTop:"1px solid #EEE",borderRadius:"0px",fontWeight:400,lineHeight:"1.5"}},mapStateToProps=function(e){var t=e.ui.text,n=e.user,o=e.config;return{actionPaymentCompletedText:t.actionPaymentCompleted,businessIconUrl:o.businessIconUrl,businessName:o.businessName,integrations:o.integrations,isLinkColorDark:o.colors.isLinkColorDark,unsupportedActionTypeText:t.unsupportedActionType,user:n}},mapDispatchToProps={sendPostback:_conversation.sendPostback,immediateUpdate:_user.immediateUpdate},Action=(_dec=(0,_index3.connect)(mapStateToProps,mapDispatchToProps,null,{withRef:!0}))((_temp2=_class2=function(){function s(){var e,t,i;_classCallCheck(this,s);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=i=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(o)))).$usedState=["_$anonymousState__temp","_$anonymousState__temp2","text","type","ACTION_TYPES","actionStyle","sendPostback","payload","metadata","uri","buttonColor","fallback","inlineButton","unsupportedActionTypeText","processing"],i.onPostbackClick=function(){i.setState({state:"processing"}),i.props.sendPostback(i.props.payload,i.props.metadata).then(function(){i.setState({state:""})}).catch(function(){i.setState({state:""})})},i.openWebview=function(){var e=getApp();e.stackchat._webviewUrl=i.props.uri;var t=!0,n=!1,o=void 0;try{for(var r,s=e.config.pages[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var a=r.value;if(/messenger\/pages\/webview\/webview$/.test(a)){wx.navigateTo({url:"/"+a});break}}}catch(e){n=!0,o=e}finally{try{!t&&s.return&&s.return()}finally{if(n)throw o}}},i.customComponents=[],_possibleConstructorReturn(i,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.$$refs=[]}},{key:"_createData",value:function(e,t,n){var o,r;this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var s=this.__props,a=s.buttonColor,i=(s.fallback,s.inlineButton),c=s.text,p=s.type,u=(s.unsupportedActionTypeText,{});a&&(u.backgroundColor=u.borderColor="#"+a),i&&(u.color="#"+a,u=_extends({},u,styles.inline));return p===_message2.ACTION_TYPES.POSTBACK?o=(0,_index.internal_inline_style)(u):p===_message2.ACTION_TYPES.WEBVIEW||p===_message2.ACTION_TYPES.LINK?r=(0,_index.internal_inline_style)(u):((0,_message.isSupportedActionType)(p),null),Object.assign(this.__state,{_$anonymousState__temp:o,_$anonymousState__temp2:r,text:c,type:p,ACTION_TYPES:_message2.ACTION_TYPES,actionStyle:u}),this.__state}}]),s}(),_class2.$$events=["onPostbackClick","openWebview"],_class2.$$componentPath="messenger/components/action/Action",_class=_temp2))||_class;exports.default=Action,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(Action));