"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};exports.default=UIReducer;var _ui=require("../actions/ui.js"),_common=require("../actions/common.js"),_i18n=require("../constants/i18n.js"),INITIAL_STATE={text:{actionPaymentCompleted:"Payment Completed",actionPaymentError:"An error occurred while processing the card. <br> Please try again or use a different card.",actionPostbackError:"An error occurred while processing your action. Please try again.",clickToRetry:"Message not delivered. Click to retry.",connectingNotification:"Connecting chat",connectNotificationText:"Be notified inside your other apps when you get a reply.",connectNotificationSingleText:"Be notified when you get a reply.",connectNotificationSingleButtonText:"Turn on <name> notifications",connectNotificationOthersText:"others",conversationTimestampHeaderFormat:"MMMM D YYYY, h:mm A",couldNotConnect:"Couldn't connect. You can {retry}.",couldNotConnectInner:"retry connecting now",couldNotConnectWithRetry:"Couldn't connect. We'll keep retrying, or you can {retry}.",couldNotConnectWithRetryInner:"try now",connectionNoNetwork:"No internet connection found.",connectionDisconnected:"You have been disconnected from the server.",emailChangeAddress:"Change my email",emailDescription:"To be notified by email when you get a reply, enter your email address.",emailFieldLabel:"Your email",emailFieldPlaceholder:"Your email address",emailFormButton:"Continue",fetchHistory:"Load more",fetchingHistory:"Retrieving history...",fileTooLargeError:"Max file size limit exceeded ({size})",frontendEmailChannelDescription:"To talk to us using email just send a message to our email address and we'll reply shortly:",headerText:"How can we help?",imageClickToReload:"Click to reload image.",imageClickToView:"Click to view {size} image.",imagePreviewNotAvailable:"Preview not available.",inputPlaceholder:"Type a message...",introAppText:"Message us below or from your favorite app.",introductionText:"We're here to talk, so ask us anything!",invalidFileError:"Only images are supported. Choose a file with a supported extension (jpg, jpeg, png, gif, or bmp).",lineChannelDescription:"To talk to us using LINE, scan this QR code using the LINE app and send us a message.",locationNotSupported:"Your browser does not support location services or it’s been disabled. Please type your location instead.",locationSecurityRestriction:"This website cannot access your location. Please type your location instead.",locationSendingFailed:"Could not send location",locationServicesDenied:"This website cannot access your location. Allow access in your settings or type your location instead.",messageError:"An error occured while sending your message. Please try again.",messageIndicatorTitlePlural:"({count}) New messages",messageIndicatorTitleSingular:"({count}) New message",messageRelativeTimeDay:"{value}d ago",messageRelativeTimeHour:"{value}h ago",messageRelativeTimeJustNow:"Just now",messageRelativeTimeMinute:"{value}m ago",messageTimestampFormat:"h:mm A",messageSending:"Sending...",messageDelivered:"Delivered",messengerChannelDescription:"Connect your Facebook Messenger account to be notified when you get a reply and continue the conversation on Facebook Messenger.",notificationSettingsChannelsDescription:"You can also talk to us from your favorite app or service.",notificationSettingsChannelsTitle:"Other Channels",notificationSettingsConnected:"Connected",notificationSettingsConnectedAs:"Connected as {username}",sendButtonText:"Send",settingsHeaderText:"Settings",shareLocation:"Share location",smsBadRequestError:"We were unable to communicate with this number. Try again or use a different one.",smsCancel:"Cancel",smsChangeNumber:"Change my number",smsChannelDescription:"Connect your SMS number to be notified when you get a reply and continue the conversation over SMS.",smsChannelPendingDescription:"Check your messages at {number} to confirm your phone number.",smsContinue:"Continue",smsInvalidNumberError:"Your phone number isn't valid. Please try again.",smsLinkCancelled:"Link to {appUserNumber} was cancelled.",smsLinkPending:"Pending",smsPingChannelError:"There was an error sending a message to your number.",smsSendText:"Send me a text",smsStartTexting:"Start Texting",smsTooManyRequestsError:"A connection for that number was requested recently. Please try again in {minutes} minutes.",smsTooManyRequestsOneMinuteError:"A connection for that number was requested recently. Please try again in 1 minute.",smsUnhandledError:"Something went wrong. Please try again.",startingText:void 0,tapToRetry:"Message not delivered. Tap to retry.",telegramChannelDescription:"Connect your Telegram account to be notified when you get a reply and continue the conversation on Telegram",uploadDocument:"Upload document",uploadInvalidError:"Invalid file",fileTypeError:"Unsupported file type.",uploadPhoto:"Upload photo",uploadVirusError:"A virus was detected in your file and it has been rejected",unsupportedMessageType:"Unsupported message type.",unsupportedActionType:"Unsupported action type.",linkError:"An error occurred when attempting to generate a link for this channel. Please try again.",voiceConnecting:"Please wait...",voiceListening:"I'm listening...",voiceNoSpeechDetected:"No speech detected",voiceNoMicrophoneAccess:"Microphone access disabled",viberChannelDescription:"Connect your Viber account to be notified when you get a reply and continue the conversation on Viber. To get started, scan the QR code using the Viber app.",viberChannelDescriptionMobile:"Connect your Viber account to be notified when you get a reply and continue the conversation on Viber. To get started, install the Viber app and tap Connect.",viberQRCodeError:"An error occurred while fetching your Viber QR code. Please try again.",wechatChannelDescription:"Connect your WeChat account to be notified when you get a reply and continue the conversation on WeChat. To get started, scan this QR code using the WeChat app.",wechatChannelDescriptionMobile:"Connect your WeChat account to be notified when you get a reply and continue the conversation on WeChat. To get started, save this QR code image and upload it in the <a href='weixin://dl/scan'>QR code scanner</a>.",wechatQRCodeError:"An error occurred while fetching your WeChat QR code. Please try again."},locale:_i18n.DEFAULT_LOCALE,dateFnLocale:null,isAtBottom:!1};function UIReducer(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:INITIAL_STATE,n=arguments[1];switch(n.type){case _ui.RESET_UI:case _common.RESET:return _extends({},INITIAL_STATE);case _ui.UPDATE_UI_TEXT:return _extends({},e,{text:_extends({},e.text,n.text)});case _ui.SET_LOCALE:return _extends({},e,{locale:n.locale,dateFnLocale:n.dateFnLocale});case _ui.SET_CONNECT_NOTIFICATION_ALLOWED:return _extends({},e,{isConnectNotificationAllowed:n.isConnectNotificationAllowed});case _ui.SET_IS_AT_BOTTOM:return _extends({},e,{isAtBottom:n.isAtBottom});default:return e}}