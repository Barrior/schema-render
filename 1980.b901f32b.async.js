"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1980],{41670:function(ct,de,l){l.r(de),l.d(de,{default:function(){return Ae}});var Ee=l(57213),i=l.n(Ee),fe=l(74138),T=l(65533),D=l(43190),U=l(33819),S=l(50959),ae={submit:"submit",reset:"reset",collapse:"collapse"},Ne={prefixCls:"schema-render",layoutColumnGap:10,layoutRowGap:15,actions:[ae.reset,ae.submit,ae.collapse],defaultCollapsed:!0,collapsedRows:2},Ie=l(54306),he=l.n(Ie),J=l(31912),Ue=l(15752),ee=l(88182);function ge(R,I,P){var N,Z;if(P)return P(R);if(!R)return 5;var M=R.clientWidth,B=((N=R.firstElementChild)===null||N===void 0||(Z=N.getBoundingClientRect())===null||Z===void 0?void 0:Z.width)||320;return Math.floor(M/B)*I-1}var pe=l(54689),oe=l.n(pe);function le(R,I){var P={},N=Object.keys(R.properties).slice(0,I),Z=oe()(N),M;try{for(Z.s();!(M=Z.n()).done;){var B=M.value;P[B]=R.properties[B]}}catch(H){Z.e(H)}finally{Z.f()}return{renderType:"Root",properties:P}}function te(R){var I=R.isCollapsed,P=R.rawSchema,N=R.collapsedNumber;return I?le(P,N):P}var ue=l(32766);function Se(R){return ue.PO(R)?Object.keys(R).length:ue.kJ(R)||ue.HD(R)?R.length:0}var Pe=l(55225);function Ze(R,I){var P=(0,Pe.Z)(I),N=(0,S.useRef)(-1);(0,S.useEffect)(function(){var Z,M=(Z=R.current)===null||Z===void 0?void 0:Z.getRootElement();if(M){var B=new ResizeObserver(function(H){var W=H[0].contentRect.width;N.current!==W&&(N.current=W,P.current(M))});return B.observe(M),function(){return B.disconnect()}}},[])}var O=l(11527);function Ce(R,I){var P=R.schema,N=(0,S.useState)(R.defaultCollapsed),Z=he()(N,2),M=Z[0],B=Z[1],H=(0,S.useState)(function(){var $;return ge(($=I.current)===null||$===void 0?void 0:$.getRootElement(),R.collapsedRows,R.calcCollapsedNumber)}),W=he()(H,2),re=W[0],Ve=W[1],ye=(0,S.useRef)(P);(0,S.useMemo)(function(){ye.current=te({isCollapsed:M,collapsedNumber:re,rawSchema:P})},[re,M,P]),Ze(I,function($){Ve(ge($,R.collapsedRows,R.calcCollapsedNumber))});var se=(0,ee.Z)(function($){var G;B($),(G=R.onToggleCollapsed)===null||G===void 0||G.call(R,$)}),Be=(0,ee.Z)(function($){var G,K=$.locale;if(Se(P.properties)<=re)return null;if(M){var ve;return(0,O.jsxs)(U.ZP,{type:"link",onClick:function(){return se(!1)},style:{padding:0},children:[K==null||(ve=K.Search)===null||ve===void 0?void 0:ve.expand,(0,O.jsx)(J.Z,{})]})}return(0,O.jsxs)(U.ZP,{type:"link",onClick:function(){return se(!0)},style:{padding:0},children:[K==null||(G=K.Search)===null||G===void 0?void 0:G.collapse,(0,O.jsx)(Ue.Z,{})]})}),Fe=i()({collapse:Be},R.registerActions);return{schema:ye.current,registerActions:Fe}}var ce=l(87793),v=i()(i()({},ce.Z),{},{FormRender:i()(i()({},ce.Z.FormRender),{},{submit:"\u67E5\u8BE2"}),Search:{collapse:"\u6536\u8D77",expand:"\u5C55\u5F00"}}),we=l(98445);function Te(R){return{className:we.Rk(R,"form-actions"),style:{gridColumnStart:-2,textAlign:"end"}}}var Oe={submit:function(I){var P=I.loading;return(0,O.jsx)(U.ZP,{loading:P.submit,htmlType:"submit",type:"primary",icon:(0,O.jsx)(fe.Z,{}),children:"\u641C\u7D22"})},reset:function(I){var P=I.loading,N=I.handleReset;return(0,O.jsx)(U.ZP,{loading:P.reset,onClick:N,icon:(0,O.jsx)(T.Z,{}),children:"\u91CD\u7F6E"})}},Me=function(I,P){var N=i()(i()({},Ne),I),Z=(0,S.useRef)(null),M=(0,S.useMemo)(function(){return i()(i()({},v),N.locale)},[N.locale]),B=Ce(N,Z),H=B.schema,W=B.registerActions,re=(0,S.useMemo)(function(){return Te(N.prefixCls)},[N.prefixCls]);return(0,S.useImperativeHandle)(P,function(){return Z.current}),(0,O.jsx)(D.default,i()(i()({layout:"autoFill"},N),{},{ref:Z,locale:M,schema:H,registerActions:i()(i()({},Oe),W),actionsRestSchema:re,actionsRenderMode:"formItem"}))},xe=(0,S.forwardRef)(Me),Ae=xe},61980:function(ct,de,l){l.r(de),l.d(de,{default:function(){return Rr}});var Ee=l(57213),i=l.n(Ee),fe=l(68362),T=l(32766),D=l(88182),U=l(55659),S=l(50959),ae=T.kJ,Ne=T.PO,Ie=T.HD,he=T.kK,J=function(e){return ae(e)?!e.length:Ne(e)?!Object.keys(e).length:Ie(e)?e.trim()==="":he(e)};function Ue(t,e){return ae(t)?t.map(e):[]}function ee(t,e){if(t)for(var n=t.length,r=0;r<n;r++){var a=e==null?void 0:e(t[r],r,t);if(a)return}}function ge(){return Math.random().toString(36).substring(7).replace(/\d/g,"x")}var pe=ge(),oe=function(t){return t.actions="__actions__",t.rowNumber="__row-number__",t}({}),le={table:"st-table-".concat(pe),pagination:"st-pagination-".concat(pe)},te=l(46373),ue=l(66640),Se=l(19912),Pe=l(4883),Ze=l(54306),O=l.n(Ze),Ce=l(3383),ce=l(11352),v=l(11527),we=function(e){var n=e.imgList,r=e.options,a=(0,S.useState)(!1),c=O()(a,2),u=c[0],m=c[1],g=(0,S.useState)(0),d=O()(g,2),s=d[0],f=d[1],b=function(h){f(h),m(!0)};return(0,v.jsx)(Ce.Z.PreviewGroup,{items:n,preview:{visible:u,current:s,onChange:function(h){return f(h)},onVisibleChange:function(h){return m(h)}},children:(0,v.jsx)(ce.Z,{children:n.map(function(x,h){return(0,S.createElement)(Ce.Z,i()(i()({width:60},r),{},{src:x,key:h,onClick:function(){return b(h)}}))})})})},Te=we,Oe=new RegExp("(?<!\\d*\\.\\d*)(?=(\\B\\d{3})+(\\.\\d+)?$)","g"),Me={backgroundColor:"#ececec",padding:16,borderRadius:6,textAlign:"left"},xe=T.kJ,Ae={code:function(e){var n=e.value,r=e.options;return(0,v.jsx)("pre",{style:i()(i()({},Me),r.style),children:(0,v.jsx)("code",{children:n})})},percent:function(e){var n=e.value;return J(n)?"-":"".concat(n,"%")},switch:function(e){var n=e.value,r=e.options;return(0,v.jsx)(ue.Z,i()(i()({},r),{},{checked:!!n}))},tags:function(e){var n=e.value,r=e.options,a=xe(n)?n:[n];return a.map(function(c,u){return(0,S.createElement)(Se.Z,i()(i()({},r),{},{key:u}),c)})},rate:function(e){var n=e.value,r=e.options;return(0,v.jsx)(Pe.Z,i()(i()({style:{width:134}},r),{},{disabled:!0,value:n}))},"comma-number":function(e){var n=e.value;if(J(n))return"-";var r=Number(n);return isNaN(r)?n:String(n).replace(Oe,",")},images:function(e){var n=e.value,r=e.options;if(J(n))return"-";var a=xe(n)?n:[n];return(0,v.jsx)(Te,{imgList:a,options:r})}},R=l(12342),I=l.n(R),P=l(67006),N=l.n(P),Z=te.U2,M=T.kJ,B=T.PO;function H(t,e){return t===e?0:t>e?1:-1}var W=function(e,n,r){var a=r.sortType,c=r.sortOrder,u=r.arrDataIndex,m=r.sortDataExtractor,g=r.sortStringValueTransform,d=m?m(e):Z(e,u),s=m?m(n):Z(n,u);return B(d)||B(s)?0:(M(d)&&(d=d.join("")),M(s)&&(s=s.join("")),d=String(d).trim(),s=String(s).trim(),J(d)?c==="ascend"?1:-1:J(s)?c==="ascend"?-1:1:a==="string"?(g&&(d=g(d),s=g(s)),H("@".concat(d).toLowerCase(),"@".concat(s).toLowerCase())):a==="date"?H(new Date(d),new Date(s)):!isNaN(Number(d))&&!isNaN(Number(s))?H(Number(d),Number(s)):N()(d).isValid()&&N()(s).isValid()?H(new Date(d),new Date(s)):(g&&(d=g(d),s=g(s)),H(d,s)))},re=["title","dataIndex","children","valueType"],Ve=["type"],ye=te.U2,se=T.kJ,Be=T.HD,Fe=T.mf;function $(t,e,n){return t.map(function(r){var a=r.title,c=r.dataIndex,u=r.children,m=r.valueType,g=I()(r,re);se(u)&&(u=$(u,e,n));var d=se(c)?c.join("."):c,s=se(c)?c:[c],f=e.sortMode==="local-all"||e.sortMode==="service-all",b=!!g.sorter||!!g.sortType||f,x=!1;u||(g.sorter?x=g.sorter:(f||g.sortType)&&(x=e.sortMode==="service-all"?!0:function(o,p,C){return W(o,p,{arrDataIndex:s,sortOrder:C,sortType:g.sortType,sortDataExtractor:g.sortDataExtractor,sortStringValueTransform:e.sortStringValueTransform})}));var h=function(p,C,y){var j=ye(C,s),w="",A=void 0;if(m)if(Fe(m)){var E=m(C),z=E.type,L=I()(E,Ve);w=z,A=L}else w=m;var F=n[w];return F?F({value:j,record:C,options:A||{},index:y}):J(j)?"-":j};return i()(i()({align:"center",key:d,width:Be(a)?a.length*16+(b?50:30):void 0,render:h},g),{},{title:a,dataIndex:c,children:u,sorter:x})})}var G=te.Cw;function K(t){var e=t.table,n=t.globalStateRef,r=(0,S.useRef)([]),a=n.current.isTabChanging;(0,S.useMemo)(function(){a||(r.current=e.columns||[])},[e.columns,a]);var c=(0,S.useMemo)(function(){var m=i()(i()({},Ae),e.registerValueType);return G(m,function(g,d){return d.toLowerCase()})},[e.registerValueType]),u=(0,S.useMemo)(function(){return $(r.current,e,c)},[r.current]);return{rawColumns:r.current,baseColumns:u}}var ve=l(13104),He=l(93525),Je=l.n(He),ne=l(33819),ie=l(85264),vt=l(88102),Re=l(6472),mt=l(47581),ft=function(e){var n=e.items,r=n===void 0?[]:n,a=e.onChange,c=e.itemClassName,u=e.overlayClassName,m=e.renderItem,g=(0,ie.Dy)((0,ie.VT)(ie.MA)),d=(0,S.useState)(null),s=O()(d,2),f=s[0],b=s[1],x=(0,D.Z)(function(h){var o=h.active,p=h.over;if(o.id!==p.id){var C=r.findIndex(function(j){return j.id===o.id}),y=r.findIndex(function(j){return j.id===p.id});a==null||a((0,Re.Rp)(r,C,y))}b(null)});return(0,v.jsxs)(ie.LB,{sensors:g,collisionDetection:ie.pE,onDragStart:function(o){var p=o.active;return b(p.id)},onDragEnd:x,modifiers:[vt.DL],children:[(0,v.jsx)(Re.Fo,{items:r,strategy:Re.qw,children:r.map(function(h,o){return(0,v.jsx)(ht,{className:c,id:h.id,itemData:h,itemIndex:o,renderItem:m},h.id)})}),(0,v.jsx)(ie.y9,{zIndex:9999,children:f?(0,v.jsx)("div",{className:u,children:m==null?void 0:m(r.find(function(h){return h.id===f}),r.findIndex(function(h){return h.id===f}))}):null})]})};function ht(t){var e=t.className,n=t.id,r=t.itemData,a=t.itemIndex,c=t.renderItem,u=(0,Re.nB)({id:n}),m={transform:mt.ux.Transform.toString(u.transform),transition:u.transition,opacity:u.isDragging?0:void 0};return(0,v.jsx)("div",{className:e,ref:u.setNodeRef,style:m,children:c==null?void 0:c(r,a,u)})}var gt=ft,pt=l(79386),St=l(54221),Ct=[{title:"\u5217\u540D\u79F0",dataIndex:"name",width:200},{title:"\u9690\u85CF\u5217",dataIndex:"hidden",width:90,render:function(e,n){return(0,v.jsx)(ue.Z,{checked:e,onChange:n})}},{title:"\u5BBD\u5EA6",dataIndex:"width",width:100,render:function(e,n){return(0,v.jsx)(St.Z,{min:1,value:e,onChange:function(r){function a(c){return r.apply(this,arguments)}return a.toString=function(){return r.toString()},a}(function(r){r&&n(r)})})}},{title:"\u56FA\u5B9A\u65B9\u5F0F",dataIndex:"fixed",width:60,algin:"center",render:function(e){var n=e?e==="left"?"\u5DE6":"\u53F3":"\u65E0",r=e?e==="left"?"orange":"blue":void 0;return(0,v.jsx)(Se.Z,{color:r,style:{margin:0},children:n})}},{title:"\u6392\u5E8F",dataIndex:"sort",width:50,algin:"center",render:function(){return(0,v.jsx)(ne.ZP,{type:"text",size:"small",icon:(0,v.jsx)(pt.Z,{}),style:{cursor:"move"}})}}],We=Ct,xt=l(92935),Q=l.n(xt),X=l(29070),Ge,Ke,Qe,Xe,qe,_e,et,yt=(0,X.H)(Ge||(Ge=Q()([`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
`]))),Rt=(0,X.H)(Ke||(Ke=Q()([`
  max-height: calc(100vh - 260px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
`]))),bt=(0,X.H)(Qe||(Qe=Q()([`
  border-top: 1px solid #f0f0f0;

  &:first-of-type {
    border-top: none;
  }
`]))),jt=(0,X.H)(Xe||(Xe=Q()([`
  background-color: #fff;
  transform: scale(1.05);
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: 200ms ease-out;
`]))),Dt=(0,X.H)(qe||(qe=Q()([`
  display: flex;
  padding: 8px 0;
  background-color: #fff;

  &:hover {
    background-color: #fafafa;
  }
`]))),tt=(0,X.H)(_e||(_e=Q()([`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 12px;
  word-break: break-all;
`]))),Et=(0,X.H)(et||(et=Q()([`
  text-align: right;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`])));function $e(t){return t.map(function(e){return{id:String(e.dataIndex),name:e.title,hidden:e.hidden,width:e.width,fixed:e.fixed}})}var Nt=function(e){var n=e.defaultColumns,r=e.sortColumns,a=e.onOk,c=(0,S.useState)(function(){return $e(r)}),u=O()(c,2),m=u[0],g=u[1],d=(0,D.Z)(function(h,o,p){m[h][o]=p,g(Je()(m))}),s=(0,D.Z)(function(h){g(h)}),f=(0,D.Z)(function(){g($e(r))}),b=(0,D.Z)(function(){g($e(n))}),x=(0,D.Z)(function(){var h=[];m.forEach(function(o){var p=o.id,C=o.width,y=o.hidden,j=n.find(function(w){return String(w.dataIndex)===p});j&&h.push(i()(i()({},j),{},{width:C,hidden:y}))}),a==null||a(h)});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:yt,children:We.map(function(h,o){return(0,v.jsx)("div",{className:tt,style:{width:h.width,justifyContent:h.algin},children:h.title},o)})}),(0,v.jsx)("div",{className:Rt,children:(0,v.jsx)(gt,{items:m,onChange:s,itemClassName:bt,overlayClassName:jt,renderItem:function(o,p,C){return(0,v.jsx)("div",{className:Dt,children:We.map(function(y,j){var w=o[y.dataIndex],A=y.dataIndex==="sort"?C==null?void 0:C.listeners:{};return(0,v.jsx)("div",i()(i()({className:tt,style:{width:y.width,justifyContent:y.algin}},A),{},{children:y.render?y.render(w,function(E){return d(p,y.dataIndex,E)}):w}),"".concat(p).concat(j))})},p)}})}),(0,v.jsx)("div",{className:Et,children:(0,v.jsxs)(ce.Z,{children:[(0,v.jsx)(ne.ZP,{onClick:b,children:"\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E"}),(0,v.jsx)(ne.ZP,{onClick:f,children:"\u91CD\u7F6E\u672C\u6B21\u8BBE\u7F6E"}),(0,v.jsx)(ne.ZP,{type:"primary",onClick:x,children:"\u786E\u5B9A"})]})})]})},It=Nt,Pt=["sortColumns","defaultColumns","onOk"],Zt=function(e){var n=e.sortColumns,r=e.defaultColumns,a=e.onOk,c=I()(e,Pt);return(0,v.jsx)(ve.Z,i()(i()({title:"\u5217\u8BBE\u7F6E",width:660,centered:!0,destroyOnClose:!0,footer:null},c),{},{children:(0,v.jsx)(It,{sortColumns:n,defaultColumns:r,onOk:a})}))},wt=Zt;function Tt(t){return t.map(function(e){return i()({},e)})}function Ot(t){var e=t.baseColumns,n=(0,S.useRef)([]),r=(0,S.useState)(!1),a=O()(r,2),c=a[0],u=a[1];(0,S.useMemo)(function(){n.current=Tt(e)},[e]);var m=(0,D.Z)(function(){u(!0)}),g=(0,D.Z)(function(){u(!1)}),d=(0,D.Z)(function(f){n.current=f,g()}),s=(0,v.jsx)(wt,{open:c,sortColumns:n.current,defaultColumns:e,onCancel:g,onOk:d});return{sortColumns:n.current,sortModalHolder:s,openSortModal:m,closeSortModal:g}}var Mt=l(31912),At=l(86162),Vt=l(2772),Bt=l(25359),q=l.n(Bt),Ft=l(49811),be=l.n(Ft),rt=l(72151),Ht=["children","onClick","noLoading"],$t=rt.Z;function Lt(t){var e=t.children,n=t.onClick,r=t.noLoading,a=r===void 0?!1:r,c=I()(t,Ht),u=(0,S.useState)(!1),m=O()(u,2),g=m[0],d=m[1],s=(0,D.Z)(function(){var f=be()(q()().mark(function b(x){return q()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!a){o.next=3;break}return n==null||n(x),o.abrupt("return");case 3:return d(!0),o.prev=4,o.next=7,n==null?void 0:n(x);case 7:o.next=12;break;case 9:o.prev=9,o.t0=o.catch(4),$t.warn(o.t0);case 12:d(!1);case 13:case"end":return o.stop()}},b,null,[[4,9]])}));return function(b){return f.apply(this,arguments)}}());return(0,v.jsx)(ne.ZP,i()(i()({loading:g},c),{},{onClick:s,children:e}))}var Yt=["text","confirmAgain","confirmProps","onClick"],nt,zt=T.kJ,kt=T.HD,Ut=te.CE,Jt=(0,X.H)(nt||(nt=Q()([`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 #ececec;
  min-width: 70px;
  padding: 6px;

  > * {
    display: block;
    width: 100%;
    height: auto !important;
    padding: 3px 6px !important;

    &:hover {
      background: #f6f6f6 !important;
    }
  }
`])));function Le(t,e){var n=t.text,r=t.confirmAgain,a=t.confirmProps,c=t.onClick,u=I()(t,Yt),m=kt(n)?(0,v.jsx)(Lt,i()(i()({type:"link",size:"small"},Ut(u,"isShow")),{},{onClick:function(d){return!r&&(c==null?void 0:c(d))},children:n}),e):n;return r?(0,v.jsx)(At.Z,i()(i()({title:"\u6E29\u99A8\u63D0\u793A",description:"\u8BF7\u4E8C\u6B21\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\uFF01"},a),{},{onConfirm:c,children:m}),e):m}function Wt(t){var e=t.record,n=t.index,r=t.actionItems,a=t.actionItemsCount,c=t.actionItemsDropdownProps,u=r==null?void 0:r(e,n);if(!zt(u))return null;var m=u.filter(function(f){return f.isShow!==!1}),g;if(m.length>a){var d=[],s=[];return m.forEach(function(f,b){b<a-1?d.push(f):s.push(Le(f,b))}),(0,v.jsxs)(v.Fragment,{children:[d.map(function(f,b){return Le(f,b)}),(0,v.jsx)(Vt.Z,i()(i()({placement:"bottomRight"},c),{},{dropdownRender:function(){return(0,v.jsx)("div",{className:Jt,children:s.map(function(b,x){return(0,v.jsx)(S.Fragment,{children:b},x)})})},children:(0,v.jsxs)(ne.ZP,{type:"link",size:"small",style:{gap:2,display:"inline-flex",alignItems:"center"},children:["\u66F4\u591A ",(0,v.jsx)(Mt.Z,{style:{margin:0}})]})}))]})}else g=m.map(function(f,b){return Le(f,b)});return g}function Gt(t){var e=t.table,n=t.sortColumns,r=e.showRowNumber,a=r===void 0?!1:r,c=e.rowNumberColumnData,u=c===void 0?{}:c,m=e.actionItems,g=e.actionItemsCount,d=g===void 0?2:g,s=e.actionItemsColumnData,f=s===void 0?{}:s,b=e.actionItemsDropdownProps,x=(0,D.Z)(function(p,C,y){return Wt({record:C,index:y,actionItems:m,actionItemsCount:d,actionItemsDropdownProps:b})}),h=(0,S.useMemo)(function(){return n.filter(function(p){return!p.hidden})},[n]),o=(0,S.useMemo)(function(){var p=Je()(h);return a&&p.unshift(i()({title:"\u5E8F\u53F7",align:"center",width:70,fixed:"left",render:function(y,j,w){return w+1},key:oe.rowNumber},u)),m&&p.push(i()({title:"\u64CD\u4F5C",align:"center",fixed:"right",width:134,render:x,key:oe.actions},f)),p},[h]);return{finalColumns:o}}var at=l(2950);function Kt(t){var e=t.ref,n=t.rootElemRef,r=t.searchRef,a=t.requestParamsRef,c=t.requestExtraParamsRef,u=t.searchValueRef,m=t.dataSource,g=t.updateDataSource,d=t.updateSummaryData,s=t.updateScrollY,f=t.openSortModal,b=t.runRequest,x=(0,at.Z)(),h=x.forceUpdate;(0,S.useImperativeHandle)(e,function(){return{refresh:b,getRootElement:function(){return n.current},getSearchRef:function(){return r.current},getRequestParams:function(){return a.current},getRequestExtraParams:function(){return c.current},getSearchValue:function(){return u.current},setSearchValue:function(p,C){var y,j=C!=null&&C.overwrite?p:i()(i()({},u.current),p);(y=r.current)===null||y===void 0||y.setValue(j)},clearSearchValue:function(){var p;return(p=r.current)===null||p===void 0?void 0:p.resetValue()},getDataSource:function(){return m},setDataSource:function(p){g(p),h()},setSummaryData:function(p){d(p),h()},updateScrollY:s,openSortModal:f,rerender:h}})}var Qt=rt.Z,Xt=te.ei,qt=fe.Z;function _t(t){var e,n=t.request,r=t.updateScrollY,a=t.table,c=t.searchValueRef,u=(0,S.useRef)({current:1,pageSize:(a.pagination!==!1?(e=a.pagination)===null||e===void 0?void 0:e.defaultPageSize:10)||10,total:0}),m=(0,S.useRef)({}),g=(0,S.useRef)({}),d=(0,S.useRef)([]),s=(0,S.useRef)({}),f=(0,S.useState)(!1),b=O()(f,2),x=b[0],h=b[1];a.pagination===!1&&(u.current={});var o=(0,D.Z)(function(){var A=be()(q()().mark(function E(z,L){var F,Y,_;return q()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(F={data:[],total:0},!x){V.next=3;break}return V.abrupt("return",F);case 3:if(h(!0),V.prev=4,!n){V.next=18;break}return Y={},L!=null&&L.overwrite?Y=z||{}:Y=i()(i()(i()({},c.current),Xt(u.current,"current","pageSize")),z),V.next=10,n(Y,g.current);case 10:_=V.sent,m.current=Y,Y.current&&(u.current.current=Y.current),Y.pageSize&&(u.current.pageSize=Y.pageSize),u.current.total=_.total||0,d.current=_.data||[],s.current=_.summaryData||{},F=i()(i()({},_),{},{data:d.current,total:u.current.total});case 18:V.next=23;break;case 20:V.prev=20,V.t0=V.catch(4),Qt.warn(V.t0);case 23:return h(!1),a.autoScrollY&&r(),V.abrupt("return",F);case 26:case"end":return V.stop()}},E,null,[[4,20]])}));return function(E,z){return A.apply(this,arguments)}}()),p=!1;if(a.pagination!==!1){var C;p=i()(i()(i()({style:{marginBottom:0},showQuickJumper:!0,showSizeChanger:!0},a.pagination),u.current),{},{onChange:function(E,z){var L,F;(L=a.pagination)===null||L===void 0||(F=L.onChange)===null||F===void 0||F.call(L,E,z),Object.assign(u.current,{current:E,pageSize:z}),o()},className:qt((C=a.pagination)===null||C===void 0?void 0:C.className,le.pagination)})}var y=(0,D.Z)(function(A){d.current=A}),j=(0,D.Z)(function(A){s.current=A}),w=(0,D.Z)(function(A){g.current=A});return{loading:x,dataSource:d.current,updateDataSource:y,summaryData:s.current,updateSummaryData:j,requestParamsRef:m,requestExtraParamsRef:g,updateRequestExtraParams:w,finalPagination:p,runRequest:o}}var er=T.HD;function ot(t){if(!t)return 0;var e=window.getComputedStyle(t,null),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom);return t.offsetHeight+n}function tr(t,e){if(!t||!e)return 0;var n=window.getComputedStyle(t,null),r=n[e];return er(r)&&r.match(/^\d+/)?parseFloat(r):0}var rr=T.o8;function nr(t){var e=t.table,n=t.rootElemRef,r=(0,S.useState)(e.virtual?0:void 0),a=O()(r,2),c=a[0],u=a[1],m=(0,S.useRef)(),g=(0,D.Z)(function(){var s;if(!(!n.current||!rr((s=e.scroll)===null||s===void 0?void 0:s.y))){var f=n.current.querySelector(".".concat(le.table)),b=f==null?void 0:f.querySelector("thead"),x=f==null?void 0:f.querySelector("tfoot"),h=f==null?void 0:f.querySelector(".".concat(le.pagination)),o=[b,x,h],p=0;ee(n.current.children,function(C){C!==f&&(p+=ot(C))}),p+=tr(f,"marginTop"),ee(o,function(C){p+=ot(C)}),u(n.current.clientHeight-p)}}),d=(0,D.Z)(function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;f&&!e.autoScrollY||(clearTimeout(m.current),m.current=setTimeout(g,s))});return(0,S.useEffect)(function(){if(e.autoScrollY){var s=function(){return d()};return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}},[]),{scrollY:c,updateScrollY:d}}var ar=l(98445),or=l(41670),lr=ar.nr;function ur(t){var e=t.loading,n=t.search,r=t.searchValueRef,a=t.runRequest,c=t.updateScrollY,u=n===!1?{}:n,m=(0,S.useRef)(null),g=(0,at.Z)(),d=g.forceUpdate,s=lr(u,"value");if(s){var f;r.current=(f=u.value)!==null&&f!==void 0?f:{}}var b=(0,D.Z)(function(C,y){var j;r.current=i()({},C),s||d(),(j=u.onChange)===null||j===void 0||j.call(u,C,y)}),x=(0,D.Z)(function(){var C=be()(q()().mark(function y(j){var w;return q()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return r.current=i()({},j),E.next=3,(w=u.onReset)===null||w===void 0?void 0:w.call(u,j);case 3:return E.next=5,a({current:1});case 5:case"end":return E.stop()}},y)}));return function(y){return C.apply(this,arguments)}}()),h=(0,D.Z)(function(){var C=be()(q()().mark(function y(j){var w;return q()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(w=u.onSubmit)===null||w===void 0?void 0:w.call(u,j);case 2:return E.next=4,a();case 4:case"end":return E.stop()}},y)}));return function(y){return C.apply(this,arguments)}}()),o=(0,D.Z)(function(C){var y;(y=u.onToggleCollapsed)===null||y===void 0||y.call(u,C),c(0,!0)}),p=n?(0,v.jsx)(or.default,i()(i()({},n),{},{rootStyle:i()({marginBottom:16},n.rootStyle),ref:m,disabled:n.disabled||e,value:r.current,onChange:b,onReset:x,onSubmit:h,onToggleCollapsed:o})):null;return{searchNodeHolder:p,searchRef:m}}var lt=T.kJ,sr=T.kK;function ir(t,e){return t===oe.rowNumber?e:t===oe.actions?"":"-"}function dr(t){var e=[];function n(r){ee(r,function(a){lt(a.children)?n(a.children):e.push(a)})}return n(t),e}function cr(t){var e=t.flattenedColumns,n=t.summaryData,r=t.summaryText,a=r===void 0?"\u5408\u8BA1":r,c=t.hasRowNumber,u=c===void 0?!1:c,m=t.hasRowSelection,g=m===void 0?!1:m,d=[],s=-1;return g&&(s++,d.push({index:s,text:u?"":a})),ee(e,function(f){var b=f.key,x=f.dataIndex,h=lt(x)?x.join("."):x,o=b||h,p=n[o];s++,d.push({index:s,text:sr(p)?ir(o,a):p})}),d}function vr(t){var e=cr(t);return(0,v.jsx)(U.Z.Summary,{fixed:"bottom",children:(0,v.jsx)(U.Z.Summary.Row,{children:e.map(function(n){return(0,v.jsx)(U.Z.Summary.Cell,{align:"center",index:n.index,colSpan:n.colSpan,children:n.text},n.index)})})})}function mr(t){var e=t.table,n=t.finalColumns,r=t.summaryData,a=(0,S.useMemo)(function(){return dr(n)},[n]),c=(0,D.Z)(function(){return vr({flattenedColumns:a,summaryData:r,summaryText:e.summaryText,hasRowSelection:!!e.rowSelection,hasRowNumber:e.showRowNumber})}),u=e.summary?e.summary:J(r)?void 0:function(){return c()};return{finalSummary:u}}var fr=l(71524),hr=l(96335),gr=l(14467);function pr(t){var e,n=t.title,r=n===void 0?{}:n,a=t.loading,c=t.globalStateRef,u=t.runRequest,m=t.openSortModal,g=(0,D.Z)(function(b){var x,h;a||(c.current.isTabChanging=!0,(x=r.tabs)===null||x===void 0||(h=x.onChange)===null||h===void 0||h.call(x,b),setTimeout(function(){return u({current:1}).finally(function(){return c.current.isTabChanging=!1})},0))}),d={},s=r.showSetting?(0,v.jsx)(hr.Z,{title:"\u5217\u8BBE\u7F6E",children:(0,v.jsx)(ne.ZP,{icon:(0,v.jsx)(fr.Z,{}),disabled:a,style:{marginLeft:10},onClick:m})}):null;(e=r.tabs)!==null&&e!==void 0&&e.tabBarExtraContent&&((0,S.isValidElement)(r.tabs.tabBarExtraContent)?d.right=r.tabs.tabBarExtraContent:Object.assign(d,r.tabs.tabBarExtraContent)),r.showSetting&&(d.right=(0,v.jsxs)(v.Fragment,{children:[d.right,s]}));var f=r.tabs?(0,v.jsx)(gr.Z,i()(i()({},r.tabs),{},{tabBarExtraContent:d,onChange:g})):r.showSetting?(0,v.jsx)("div",{className:r.className,style:i()({textAlign:"right",marginBottom:16},r.style),children:s}):null;return{titleNodeHolder:f}}var Sr=fe.Z,Cr=T.PO,xr=function(e,n){var r=e.className,a=e.style,c=e.request,u=e.requestOnMounted,m=u===void 0?!0:u,g=e.header,d=e.search,s=e.titleTop,f=e.title,b=f===void 0?{}:f,x=e.titleBottom,h=e.table,o=h===void 0?{}:h,p=e.footer,C=(0,S.useRef)(null),y=(0,S.useRef)(d===!1?{}:d.defaultValue||{}),j=(0,S.useRef)({isTabChanging:!1}),w=K({table:o,globalStateRef:j}),A=w.baseColumns,E=Ot({baseColumns:A}),z=E.sortColumns,L=E.sortModalHolder,F=E.openSortModal,Y=Gt({table:o,sortColumns:z}),_=Y.finalColumns,Ye=nr({table:o,rootElemRef:C}),V=Ye.scrollY,ze=Ye.updateScrollY,k=_t({searchValueRef:y,table:o,request:c,updateScrollY:ze}),je=k.loading,ut=k.dataSource,br=k.updateDataSource,jr=k.summaryData,Dr=k.updateSummaryData,Er=k.finalPagination,me=k.runRequest,Nr=k.requestParamsRef,Ir=k.requestExtraParamsRef,Pr=k.updateRequestExtraParams,st=ur({loading:je,search:d,searchValueRef:y,runRequest:me,updateScrollY:ze}),Zr=st.searchNodeHolder,wr=st.searchRef,Tr=pr({title:b,loading:je,globalStateRef:j,runRequest:me,openSortModal:F}),Or=Tr.titleNodeHolder,Mr=mr({table:o,finalColumns:_,summaryData:jr}),Ar=Mr.finalSummary;(0,S.useEffect)(function(){m&&me()},[]);var De={loading:je},Vr=(0,D.Z)(function(Br,it,dt,Fr){var ke;(o.sortMode==="service"||o.sortMode==="service-all")&&(Pr({filter:it,sorter:dt}),me()),(ke=o.onChange)===null||ke===void 0||ke.call(o,Br,it,dt,Fr)});return Kt({ref:n,rootElemRef:C,searchRef:wr,requestParamsRef:Nr,requestExtraParamsRef:Ir,searchValueRef:y,dataSource:ut,updateDataSource:br,updateSummaryData:Dr,updateScrollY:ze,openSortModal:F,runRequest:me}),(0,v.jsxs)("div",{ref:C,className:r,style:a,children:[g==null?void 0:g(De),Zr,s==null?void 0:s(De),Or,x==null?void 0:x(De),(0,v.jsx)(U.Z,i()(i()({tableLayout:"fixed"},o),{},{className:Sr(o.className,le.table),columns:_,dataSource:ut,loading:i()({spinning:je},Cr(o==null?void 0:o.loading)?o.loading:void 0),scroll:i()({scrollToFirstRowOnChange:!0,x:"max-content",y:V},o==null?void 0:o.scroll),summary:Ar,pagination:Er,onChange:Vr})),p==null?void 0:p(De),L]})},yr=(0,S.forwardRef)(xr),Rr=yr}}]);
