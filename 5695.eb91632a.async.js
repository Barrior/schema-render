"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[5695],{75695:function(D,p,s){s.r(p);var b=s(57213),i=s.n(b),v=s(82991),O=s(74437),E=s(10177),P=s(61328),C=s(10294),r=s(11527),j={InputText:{component:function(n){var e,o=n.schema,a=n.value,d=n.disabled,t=n.readonly,u=n.onChange;return t?(0,r.jsx)("div",{children:a}):(0,r.jsx)(v.Z,i()(i()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((e=o.title)!==null&&e!==void 0?e:"")},o.renderOptions),{},{value:a!=null?a:"",disabled:d,onChange:function(l){return u(l.target.value)}}))}},InputNumber:{component:function(n){var e,o=n.schema,a=n.value,d=n.disabled,t=n.readonly,u=n.onChange;return t?(0,r.jsx)("div",{children:a}):(0,r.jsx)(O.Z,i()(i()({style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165".concat((e=o.title)!==null&&e!==void 0?e:"")},o.renderOptions),{},{value:a,onChange:function(l){return u(l!=null?l:void 0)},disabled:d}))}},TextArea:{component:function(n){var e,o=n.schema,a=n.value,d=n.disabled,t=n.readonly,u=n.onChange;return t?(0,r.jsx)("div",{children:a}):(0,r.jsx)(v.Z.TextArea,i()(i()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((e=o.title)!==null&&e!==void 0?e:"")},o.renderOptions),{},{value:a!=null?a:"",onChange:function(l){return u(l.target.value)},disabled:d}))}},Password:{component:function(n){var e,o=n.schema,a=n.value,d=n.disabled,t=n.readonly,u=n.onChange;return t?(0,r.jsx)("div",{children:a}):(0,r.jsx)(v.Z.Password,i()(i()({placeholder:"\u8BF7\u8F93\u5165".concat((e=o.title)!==null&&e!==void 0?e:"")},o.renderOptions),{},{value:a!=null?a:"",onChange:function(l){return u(l.target.value)},disabled:d}))}},Switch:{component:function(n){var e=n.value,o=n.disabled,a=n.onChange;return(0,r.jsx)(E.Z,{checked:e,disabled:o,onChange:function(t){return a(t)}})}},Select:{component:function(n){var e,o,a,d=n.schema,t=n.value,u=n.disabled,c=n.readonly,l=n.onChange,_=(e=(o=d.renderOptions)===null||o===void 0?void 0:o.options)!==null&&e!==void 0?e:[];if(c){var m=_.find(function(g){return g.value===t});return(0,r.jsx)("div",{children:m==null?void 0:m.label})}return(0,r.jsx)(P.Z,i()(i()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat((a=d.title)!==null&&a!==void 0?a:"")},d.renderOptions),{},{value:t,onChange:function(x){return l(x)},disabled:u}))}},Radio:{component:function(n){var e,o,a=n.schema,d=n.value,t=n.disabled,u=n.onChange,c=(e=(o=a.renderOptions)===null||o===void 0?void 0:o.options)!==null&&e!==void 0?e:[];return(0,r.jsx)(C.ZP.Group,{value:d,disabled:t,onChange:function(_){return u(_.target.value)},children:c.map(function(l){return(0,r.jsx)(C.ZP,{value:l.value,disabled:l.disabled,children:l.label},l.value)})})}}};p.default=j}}]);
