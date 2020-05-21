"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};exports.subscribeIot=subscribeIot,exports.disconnectIot=disconnectIot,exports.reconnectIot=reconnectIot;var _appState=require("./app-state.js"),_conversation=require("./conversation.js"),_app=require("../constants/app.js"),_index=require("../store/index.js"),_connectionState=require("../constants/connection-state.js"),_applyPseudoStaticIds=require("../../utils/applyPseudoStaticIds.js"),_awsSdkReactNative=require("../../lib/aws-sdk-react-native.js"),_awsSdkReactNative2=_interopRequireDefault(_awsSdkReactNative),_AwsV4Signer=require("../../utils/AwsV4Signer.js"),_index2=require("../../lib/mqttjs/index.js"),_index3=_interopRequireDefault(_index2);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var client=null,connectionInProgress=!1,isReconnecting=!1,connectionPromise=null;function subscribeIot(){return isReconnecting||connectionInProgress?connectionPromise:subscribeClient()}function subscribeClient(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,a=_index.store.dispatch,e=(0,_index.store.getState)(),r=e.config.realtime,t=e.user.id;return e.appState.connectionState===_connectionState.CONNECTION_STATE.CONNECTED&&client?Promise.resolve():(connectionInProgress=!0,connectionPromise=new Promise(function(s,e){return t?getClient().then(function(e){(client=e).subscribe(""+_awsSdkReactNative2.default.config.credentials.identityId,{qos:1},function(e){if(e){var t=r.retryInterval,n=void 0===t?15:t,i=r.maxConnectionAttempts,o=c<(void 0===i?5:i)-1&&401===e.code&&"Unknown client"===e.message;if(o?_index.store.dispatch((0,_appState.setConnectionState)(_connectionState.CONNECTION_STATE.DISCONNECTED_WITH_RETRY)):_index.store.dispatch((0,_appState.setConnectionState)(_connectionState.CONNECTION_STATE.DISCONNECTED)),!o)throw connectionInProgress=!1,connectionPromise=null,Object.assign(new Error(e.message),_extends({},e,{reattemptCount:c}));disconnectIot(),setTimeout(function(){subscribeIot(++c).then(function(){s()})},0===c?0:1e3*n)}else client.on("message",function(e,t){var n=JSON.parse(t.toString());n.message.items&&0<n.message.items.length&&(0,_applyPseudoStaticIds.applyPseudoStaticIds)(n.message);var i=[_extends({type:"message"},n)],o=i.filter(function(e){return"message"===e.type}),s=i.filter(function(e){return"activity"===e.type}),c=i.filter(function(e){return e.type.startsWith("link")}),r=i.filter(function(e){return e.type.startsWith("upload")});0<o.length&&a(handleMessageEvents(o)),0<s.length&&a(handleActivityEvents(s)),0<c.length&&a(handleLinkEvents(c)),0<r.length&&a(handleUploadEvents(r)),connectionInProgress&&_index.store.dispatch((0,_appState.setConnectionState)(_connectionState.CONNECTION_STATE.CONNECTED))}),s();isReconnecting=connectionInProgress=!1})}).catch(function(){connectionInProgress=isReconnecting=!1}):(connectionInProgress=!1,e())}))}function disconnectIot(){return new Promise(function(e){client?(client.end(),setTimeout(function(){client=null,e()},1500)):e()})}function reconnectIot(){return isReconnecting?connectionPromise:(isReconnecting=!0,connectionPromise=new Promise(function(e){disconnectIot().then(function(){subscribeClient().then(function(){e()})})}))}function getClient(){if(client)return Promise.resolve(client);var e=_index.store.getState(),t=e.config,n=(e.user,"wxs://"+t.brokerUrl);try{return _awsSdkReactNative2.default.config.credentials.getPromise().then(function(){return client=(0,_index3.default)(n,{clientId:_awsSdkReactNative2.default.config.credentials.identityId+"-"+Math.random().toString(36).slice(-7),transformWsUrl:function(e,t){return _awsSdkReactNative2.default.config.credentials.get(),new _AwsV4Signer.AwsV4Signer({url:"wss://"+t.host+"/mqtt",accessKeyId:_awsSdkReactNative2.default.config.credentials.accessKeyId,secretAccessKey:_awsSdkReactNative2.default.config.credentials.secretAccessKey,sessionToken:_awsSdkReactNative2.default.config.credentials.sessionToken,region:_awsSdkReactNative2.default.config.region,service:"iotdevicegateway",appendSessionToken:!0,signQuery:!0}).signMqttOverSocket()},protocolId:"MQIsdp",protocolVersion:3,wsOptions:{port:443}}),wx.onSocketError(function(){_awsSdkReactNative2.default.config.credentials.expired&&(_index.store.dispatch((0,_appState.setConnectionState)(_connectionState.CONNECTION_STATE.DISCONNECTED_WITH_RETRY)),_awsSdkReactNative2.default.config.credentials.getPromise().then(function(){client.reconnect()}))}),client.on("offline",function(){_index.store.dispatch((0,_appState.setConnectionState)(_connectionState.CONNECTION_STATE.DISCONNECTED_WITH_RETRY))}),client.on("connect",function(){_index.store.dispatch((0,_appState.setConnectionState)(_connectionState.CONNECTION_STATE.CONNECTED))}),client.on("reconnect",function(){_index.store.dispatch((0,_appState.setConnectionState)(_connectionState.CONNECTION_STATE.DISCONNECTED_WITH_RETRY))}),client})}catch(e){}}function handleMessageEvents(d){return function(n,e){var t=e(),i=(t.config.appId,t.conversation),o=i.id,s=(i.messages,t.ui.isAtBottom),c=t.appState,r=c.widgetState,a=c.settingsVisible;d.filter(function(e){return e.conversation.id===o}).forEach(function(e){var t=e.message;return t.clientMessageId?n((0,_conversation.replaceMessage)({clientMessageId:t.clientMessageId},t)):n((0,_conversation.addMessage)(t)),"endUser"===t.role?n((0,_conversation.resetUnreadCount)()):r!==_app.WIDGET_STATE.OPENED&&r!==_app.WIDGET_STATE.EMBEDDED||a||!s?void n((0,_conversation.incrementUnreadCount)()):n((0,_conversation.resetUnreadCount)())})}}function handleActivityEvents(n){return function(c,e){var r=e().conversation,t=r.id;n.filter(function(e){return e.conversation.id===t}).forEach(function(e){var t=e.activity,n=t.type,i=t.role,o=t.data,s=e.conversation;if("businessSystem"===i)switch(n){case"typing:start":return c((0,_appState.showTypingIndicator)(o));case"typing:stop":return c((0,_appState.hideTypingIndicator)());case"conversation:read":return r.appMakerLastRead=s.appMakerLastRead,c((0,_conversation.setConversation)(r))}})}}