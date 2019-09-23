"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),_appState=require("./state/actions/app-state.js"),appStateActions=_interopRequireWildcard(_appState),_conversation=require("./state/actions/conversation.js"),conversationActions=_interopRequireWildcard(_conversation),_user=require("./state/actions/user.js"),userActions=_interopRequireWildcard(_user),_storage=require("./utils/storage.js"),storage=_interopRequireWildcard(_storage),_index=require("../npm/lodash.pick/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../npm/@tarojs/taro-weapp/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("./state/store/index.js"),_i18n=require("./state/constants/i18n.js"),_ui=require("./state/actions/ui.js"),_index6=require("../npm/redux-batched-actions/lib/index.js"),_config=require("./state/actions/config.js"),_events=require("./utils/events.js"),_awsSdkReactNative=require("./lib/aws-sdk-react-native.js"),_awsSdkReactNative2=_interopRequireDefault(_awsSdkReactNative),_index7=require("./polyfills/index.js"),_index8=require("../npm/@stackchat/identity-utils/lib/index.js"),_message=require("./utils/message.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(0,_index7.polyfill)(global);var IS_INITIALIZED=!1,initialStoreChange=!0,lastTriggeredMessageTimestamp=0,Messenger=(_temp2=_class=function(){function o(){var e,t,n;_classCallCheck(this,o);for(var i=arguments.length,s=Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=n=_possibleConstructorReturn(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(s)))).$usedState=[],n.config={component:!0},n.customComponents=["Widget"],_possibleConstructorReturn(n,t)}return _inherits(o,_index3.Component),_createClass(o,[{key:"_constructor",value:function(){init(getApp().stackchat),this.$$refs=[]}},{key:"componentDidMount",value:function(){}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;return Object.assign(this.__state,{}),this.__state}}]),o}(),_class.$$events=[],_class.$$componentPath="messenger/Messenger",_temp2);function init(){var s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!IS_INITIALIZED){if(IS_INITIALIZED=!0,!s.appId)throw new Error("Must provide an appId.");s=_extends({menuItems:{imageUpload:!0,fileUpload:!0,shareLocation:!0},imageUploadEnabled:!0,soundNotificationEnabled:!0,notificationChannelPromptEnabled:!0,locale:_i18n.DEFAULT_LOCALE},s),storage.init();var e=storage.getItem(s.appId+".sessionToken"),r=storage.getItem(s.appId+".appUserId"),o=storage.getItem(s.appId+".conversationId"),t=s.customColors||{},n=t.conversationColor,i=t.actionColor,a=t.brandColor,c=s.APP_CONFIG_API_BASE_URL||"https://api.io.au.stackchat.com",d=[appStateActions.setEmbedded(!!s.embedded),(0,_config.setConfig)("appId",s.appId),(0,_config.setConfig)("menuItems",s.menuItems),(0,_config.setConfig)("configBaseUrl",c),(0,_config.setConfig)("apigBaseUrl",s.APIG_BASE_URL),(0,_config.setConfig)("bypassApigBaseUrl",s.BYPASS_APIG_BASE_URL),(0,_config.setConfig)("voiceConfig",_extends({dictation:!1},s.voice)),(0,_config.setLocalSettings)(_extends({accentColor:n,linkColor:i,brandColor:a},(0,_index2.default)(s,["displayStyle","buttonIconUrl","buttonWidth","buttonHeight","businessName","businessIconUrl","integrationOrder","backgroundImageUrl","fixedIntroPane"])))];return r&&d.push(userActions.setUser({id:r})),e&&d.push(authActions.setAuth({sessionToken:e})),o&&d.push(conversationActions.setConversation({id:o})),s.customText&&d.push((0,_ui.updateText)(s.customText)),_index5.store.dispatch((0,_index6.batchActions)(d)),(0,_events.observeStore)(_index5.store,function(e){var t=e.config,n=t.appId,i=t.displayStyle,s=e.conversation,r=e.appState,o=r.widgetState;return{isInitialized:r.isInitialized,conversation:s,widgetState:o,displayStyle:i,appId:n}},onStoreChange),_index5.store.dispatch((0,_config.fetchConfig)()).then(function(){return _index5.store.dispatch((0,_ui.setLocale)(s.locale))}).then(function(){var e=_index5.store.getState().config,t=e.isAppActive,n=e.identityPoolId;if(!t)throw new Error("App is inactive.");_awsSdkReactNative2.default.config.region=n.split(":")[0],_awsSdkReactNative2.default.config.credentials=new _awsSdkReactNative2.default.CognitoIdentityCredentials({IdentityPoolId:n});var i=storage.getItem(s.appId+".identityPoolId");return i&&i!==n&&(storage.removeOldIdentityPoolReferences(s.appId),_index5.store.dispatch(conversationActions.setConversation({id:void 0}))),storage.setItem(s.appId+".identityPoolId",n),Promise.resolve().then(function(){var e=storage.getItem(s.appId+".identityId");return""!==e&&(_awsSdkReactNative2.default.config.credentials.identityId=e,_awsSdkReactNative2.default.config.credentials.params.IdentityId=e),_awsSdkReactNative2.default.config.credentials.getPromise().then(function(){storage.setItem(s.appId+".appUserId",(0,_index8.convertCognitoIdToUserId)(_awsSdkReactNative2.default.config.credentials.identityId)),e||storage.setItem(s.appId+".identityId",_awsSdkReactNative2.default.config.credentials.identityId)})}).then(function(){if(o&&r)return _index5.store.dispatch(conversationActions.fetchUserConversation()).catch(function(e){var t=e.response&&e.response.status;if(401===t||403===t||404===t)return storage.removeItem(s.appId+".appUserId"),storage.removeItem(s.appId+".sessionToken"),_index5.store.dispatch((0,_index6.batchActions)([authActions.resetAuth(),userActions.resetUser()]));throw e})}).then(function(){_index5.store.dispatch(appStateActions.setInitializationState(!0)),_events.observable.trigger("ready")})}).catch(function(e){throw e})}}function onStoreChange(e,t){var n=e.conversation,i=n.messages,s=n.replyActions,r=n.unreadCount,o=(e.widgetState,e.displayStyle,e.isInitialized),a=t.conversation,c=a.messages,d=a.replyActions,l=a.unreadCount,u=(t.widgetState,t.displayStyle,s&&s.actions&&0<s.actions.length),p=u&&(s.actions.length!==d.actions.length||d.actions[0].id!==s.actions[0].id),_=u&&s.message&&(!s.message.text||!s.message.text.trim()),f=r;if(p&&_&&(!0,o&&_events.observable.trigger("message:received",(0,_message.filterClientProps)(s.message)),f=r-1),0<i.length){var g=i.filter(function(e){return"endUser"!==e.role}),h=c.filter(function(e){return"endUser"!==e.role}),v=g.length-h.length;g.slice(-v).filter(function(e){return e.timestamp>lastTriggeredMessageTimestamp}).forEach(function(e){o&&_events.observable.trigger("message:received",(0,_message.filterClientProps)(e)),lastTriggeredMessageTimestamp=e.timestamp,initialStoreChange||!0})}0<f&&f!==l&&_events.observable.trigger("unreadCount",f),initialStoreChange=!1}exports.default=Messenger,Component(require("../npm/@tarojs/taro-weapp/index.js").default.createComponent(Messenger));