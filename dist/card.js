module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";var n,o=this&&this.__makeTemplateObject||function(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e},a=this&&this.__extends||(n=function(e,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),l=this&&this.__assign||function(){return(l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty(r,"__esModule",{value:!0});var c=i(t(2)),s=t(3);r.cardStyles={article:s.createGlobalStyle(p||(p=o(["\n    .fd-card.article {\n        background: rgba(0,0,0,0.04);\n        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);\n        position: relative;\n    }"],["\n    .fd-card.article {\n        background: rgba(0,0,0,0.04);\n        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);\n        position: relative;\n    }"]))),default:s.createGlobalStyle(u||(u=o(["\n    .fd-card {\n        background: #ffeadb;\n        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);\n        position: relative;\n    }"],["\n    .fd-card {\n        background: #ffeadb;\n        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);\n        position: relative;\n    }"]))),longread:s.createGlobalStyle(d||(d=o(["\n    .fd-card.longread {\n        background: #ffeadb;\n        position: relative;\n        box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1)\n    }"],["\n    .fd-card.longread {\n        background: #ffeadb;\n        position: relative;\n        box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1)\n    }"]))),persoonlijk:s.createGlobalStyle(f||(f=o(["\n    .fd-card.persoonlijk {\n        background: rgba(0,0,0,0.04);\n        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);\n        position: relative;\n    }"],["\n    .fd-card.persoonlijk {\n        background: rgba(0,0,0,0.04);\n        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);\n        position: relative;\n    }"]))),"persoonlijk longread":s.createGlobalStyle(b||(b=o(["\n    .fd-card.persoonlijk.longread {\n        background: rgba(0,0,0,0.04);\n        box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1);\n        position: relative;\n    }"],["\n    .fd-card.persoonlijk.longread {\n        background: rgba(0,0,0,0.04);\n        box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1);\n        position: relative;\n    }"])))};var p,u,d,f,b,y,g,x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return c.default.createElement(c.default.Fragment,null,c.default.createElement(r.cardStyles[this.props.cardStyle],{},null),c.default.createElement("div",l({},this.props,{className:"fd-card"+(this.props.className?" "+this.props.className:"")+(this.props.cardStyle?" "+this.props.cardStyle:"")}),this.props.children))},t}(c.PureComponent);function h(e){var t,n=r.cardStyles;for(var a in n)e&&-1===e.indexOf(a)||(t=t?s.createGlobalStyle(y||(y=o(["","",""],["","",""])),t.globalStyle.rules,n[a].globalStyle.rules):s.createGlobalStyle(g||(g=o(["",""],["",""])),n[a].globalStyle.rules));return t}r.default=x,r.getCardStyle=function(e){return r.cardStyles[e]},r.getAllCardStyles=h,r.CardStyle=h()},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("styled-components")}]);