"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7771,2633],{27771:function(M,g,r){r.r(g);var O=r(29752),s=r(98563),i=r(84875),o=r.n(i),l=r(72633),m=r(11527),x=function(_){var E=_.body,a=_.schema,c=_.validator,e=_.required,n=_.prefixClassNames;return(0,m.jsxs)("div",{className:o()(n("item-layout-horizontal"),l.horizontal),children:[(0,m.jsxs)("div",{className:o()(n("item-main"),l.main),children:[(0,m.jsxs)("div",{className:o()(n("item-header"),l.header),children:[e&&(0,m.jsx)("span",{className:o()(n("item-mark"),l.mark),children:"*"}),(0,m.jsx)("span",{className:o()(n("item-title"),l.title),children:a.title}),!!a.titleDescription&&(0,m.jsx)(s.Z,{placement:"top",trigger:"hover",content:a.titleDescription,children:(0,m.jsx)(O.Z,{className:o()(n("item-title-tooltip"),l.titleTooltip)})})]}),(0,m.jsx)("div",{className:o()(n("item-body"),l.body),children:E})]}),(0,m.jsxs)("div",{className:o()(n("item-footer"),l.footer),children:[c.status==="error"&&!!c.message&&(0,m.jsx)("div",{className:o()(n("item-error-msg"),l.errorMsg),children:c.message}),!!a.description&&(0,m.jsx)("div",{className:o()(n("item-desc"),l.desc),children:a.description})]})]})};g.default=x},72633:function(M,g,r){r.r(g),r.d(g,{body:function(){return d},desc:function(){return h},errorMsg:function(){return y},footer:function(){return t},header:function(){return v},horizontal:function(){return n},main:function(){return f},mark:function(){return p},title:function(){return j},titleTooltip:function(){return u}});var O=r(92935),s=r.n(O),i=r(13648),o,l,m,x,b,_,E,a,c,e,n=(0,i.H)(o||(o=s()([""]))),f=(0,i.H)(l||(l=s()([`
  display: flex;
  align-items: center;
`]))),v=(0,i.H)(m||(m=s()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),j=(0,i.H)(x||(x=s()([`
  word-break: break-all;
`]))),p=(0,i.H)(b||(b=s()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),u=(0,i.H)(_||(_=s()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),d=(0,i.H)(E||(E=s()([`
  flex-grow: 1;
`]))),t=(0,i.H)(a||(a=s()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),h=(0,i.H)(c||(c=s()([`
  margin-top: 6px;
  color: #999;
`]))),y=(0,i.H)(e||(e=s()([`
  margin-top: 6px;
  color: #ff4d4f;
`])))},13648:function(M,g,r){r.d(g,{H:function(){return E}});var O=r(72955),s=r(46330),i=r(18246);function o(a,c){if(a.inserted[c.name]===void 0)return a.insert("",c,a.sheet,!0)}function l(a,c,e){var n=[],f=(0,i.fp)(a,n,e);return n.length<2?e:f+c(n)}var m=function(c){var e=(0,O.Z)(c);e.sheet.speedy=function(p){this.isSpeedy=p},e.compat=!0;var n=function(){for(var u=arguments.length,d=new Array(u),t=0;t<u;t++)d[t]=arguments[t];var h=(0,s.O)(d,e.registered,void 0);return(0,i.My)(e,h,!1),e.key+"-"+h.name},f=function(){for(var u=arguments.length,d=new Array(u),t=0;t<u;t++)d[t]=arguments[t];var h=(0,s.O)(d,e.registered),y="animation-"+h.name;return o(e,{name:h.name,styles:"@keyframes "+y+"{"+h.styles+"}"}),y},v=function(){for(var u=arguments.length,d=new Array(u),t=0;t<u;t++)d[t]=arguments[t];var h=(0,s.O)(d,e.registered);o(e,h)},j=function(){for(var u=arguments.length,d=new Array(u),t=0;t<u;t++)d[t]=arguments[t];return l(e.registered,n,x(d))};return{css:n,cx:j,injectGlobal:v,keyframes:f,hydrate:function(u){u.forEach(function(d){e.inserted[d]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:i.fp.bind(null,e.registered),merge:l.bind(null,e.registered,n)}},x=function a(c){for(var e="",n=0;n<c.length;n++){var f=c[n];if(f!=null){var v=void 0;switch(typeof f){case"boolean":break;case"object":{if(Array.isArray(f))v=a(f);else{v="";for(var j in f)f[j]&&j&&(v&&(v+=" "),v+=j)}break}default:v=f}v&&(e&&(e+=" "),e+=v)}}return e},b=m,_=b({key:"schema-render"}),E=_.css}}]);
