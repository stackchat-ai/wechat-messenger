"use strict";var toObject=Object,TypeErr=TypeError;module.exports=function(){if(null!=this&&this!==toObject(this))throw new TypeErr("RegExp.prototype.flags getter called on non-object");var t="";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t};