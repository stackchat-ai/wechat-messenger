"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(o):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_dimensions=require("../../state/constants/dimensions.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var BASE_COMPONENT_CLASS="sc-carousel",styles={carouselItem:{maxWidth:_dimensions.MESSAGE_ITEM.WIDTH+"px",minWidth:_dimensions.MESSAGE_ITEM.WIDTH+"px",verticalAlign:"top",fontSize:"initial",backgroundColor:"#FFFFFF",border:"1px solid rgb(234, 234, 234)",overflow:"hidden",marginRight:"5px"},defaultAction:{cursor:"pointer"},defaultActionContainer:{display:"flex",flexDirection:"column",height:"100%"},content:{display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",transition:"all 0.3s ease-out",height:"auto"},image:{overflow:"hidden"},title:{margin:"15px 8px 5px",fontWeight:"500",fontSize:"15px",overflow:"hidden",textOverflow:"ellipsis"},description:{margin:"0px 8px 13px",fontSize:"13px",whiteSpace:"pre-wrap",flex:"2 1 auto"},actions:{margin:"0px"}},CarouselItem=(_temp2=_class=function(){function s(){var e,t,n;_classCallCheck(this,s);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(i)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","anonymousState__temp5","anonymousState__temp6","anonymousState__temp7","loopArray3","$compid__13","BASE_COMPONENT_CLASS","mediaUrl","messageActions","title","description","dispatch","isFirstItem","isLastItem","actions","linkColor","displaySettings"],n.onItemClick=function(e){var t=n.props.dispatch;executeAction(t,e)},n.customComponents=["ImageMessage","Action"],_possibleConstructorReturn(n,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.$$refs=[]}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,i=(0,_index.genCompid)(o+"$compid__13"),r=this.__props,s=r.isFirstItem,a=r.isLastItem,l=r.mediaUrl,p=r.actions,_=r.title,c=r.description,u=r.linkColor,m=r.displaySettings,d={imageAspectRatio:m?m.imageAspectRatio:"horizontal",mediaUrl:l},f=_extends({},styles.image),y=_extends({},styles.carouselItem);s&&(y.borderRadius="14px 0px 0px 14px"),a&&(y.marginRight="0px",y.borderRadius=s?"14px":"0px 14px 14px 0px"),m&&"square"===m.imageAspectRatio&&(f.height=_dimensions.COMPLEX_IMAGE.SQUARE.HEIGHT);var x=_extends({},styles.defaultActionContainer);var g=(0,_index.internal_inline_style)(y),h=(0,_index.internal_inline_style)(styles.content),S=(0,_index.internal_inline_style)(x),v=l?(0,_index.internal_inline_style)(f):null,C=(0,_index.internal_inline_style)(styles.title),b=(0,_index.internal_inline_style)(styles.description),O=(0,_index.internal_inline_style)(styles.actions),A=p?p.map(function(e,t){e={$original:(0,_index.internal_get_original)(e)};var n=(0,_index.genCompid)(o+"OkqnsbLZHP"+t);return _index.propsManager.set(_extends({buttonColor:u,inlineButton:!0},e.$original),n),{$compid__12:n,$original:e.$original}}):[];return l&&_index.propsManager.set(_extends({},d),i),Object.assign(this.__state,{anonymousState__temp:g,anonymousState__temp2:h,anonymousState__temp3:S,anonymousState__temp4:v,anonymousState__temp5:C,anonymousState__temp6:b,anonymousState__temp7:O,loopArray3:A,$compid__13:i,BASE_COMPONENT_CLASS:BASE_COMPONENT_CLASS,mediaUrl:l,messageActions:p,title:_,description:c}),this.__state}}]),s}(),_class.$$events=[],_class.$$componentPath="messenger/components/carousel-item/CarouselItem",_temp2);exports.default=CarouselItem,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(CarouselItem));