(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8683,7347],{67347:function(B,J,t){"use strict";t.r(J),t.d(J,{RendererDistributor:function(){return Ce.Z},RendererExecutor:function(){return re.Z},RendererIterator:function(){return o.Z},default:function(){return pe},useCoreValue:function(){return Y},useDebounceFn:function(){return Ae.Z},useForceUpdate:function(){return _},useLatest:function(){return he.Z},useMemoizedFn:function(){return W.Z},useUnmount:function(){return Le.Z},utils:function(){return Q}});var Q={};t.r(Q),t.d(Q,{classNames:function(){return ie.Z},classNamesWithPrefix:function(){return Z.Rk},cloneDeep:function(){return P.Xh},debounce:function(){return P.Ds},dropRight:function(){return P.j7},find:function(){return P.sE},get:function(){return P.U2},isArray:function(){return m.kJ},isBoolean:function(){return m.jn},isFunction:function(){return m.mf},isMatch:function(){return P.BD},isNil:function(){return m.kK},isNull:function(){return m.Ft},isNumber:function(){return m.hj},isObject:function(){return m.Kn},isPlainObject:function(){return m.PO},isString:function(){return m.HD},isUndefined:function(){return m.o8},logger:function(){return Me.Z},mapKeys:function(){return P.Cw},omit:function(){return P.CE},pick:function(){return P.ei},positionedOffset:function(){return ce},set:function(){return P.t8},templateCompiled:function(){return Z.dr},toLower:function(){return P.t$},traverseSchema:function(){return Ie.Z},typeChecking:function(){return m.DN}});var s=t(57213),y=t.n(s),S=t(50959),q=t(7811),Z=t(98445),m=t(32766),ne=t(92139),P=t(46373),Oe=t(54306),C=t.n(Oe);function _(){var h=(0,S.useReducer)(function(N){return N+1},0),R=C()(h,2),d=R[0],T=R[1];return{forceUpdate:T}}var W=t(88182),Ne=function(){var R=(0,S.useRef)(!1);return(0,S.useEffect)(function(){return R.current=!1,function(){R.current=!0}},[]),R},ue=Ne;function Y(h){var R,d=(0,S.useRef)((R=h.defaultValue)!==null&&R!==void 0?R:{}),T=ue(),N=_(),A=N.forceUpdate,g=(0,Z.nr)(h,"value");if(g){var $;d.current=($=h.value)!==null&&$!==void 0?$:{}}var G=(0,W.Z)(function(j,O){if(!T.current){var k,K,X,ae=(0,ne.P)(O.path),fe=y()(y()({},O),{},{sPath:ae}),je=(k=h.watch)===null||k===void 0?void 0:k[ae];(0,m.mf)(je)&&je(j,fe),d.current=j,g||A(),(K=h.onItemChange)===null||K===void 0||K.call(h,fe),(X=h.onChange)===null||X===void 0||X.call(h,j,fe)}}),H=(0,W.Z)(function(j){var O=(0,P.t8)(y()({},d.current),j.path,j.value);G(O,j)}),U=(0,W.Z)(function(){return d.current}),z=(0,W.Z)(function(j){G(j,{path:[],value:void 0})}),L=(0,W.Z)(function(){z({})});return{value:d.current,valueRef:d,onChange:H,getValue:U,setValue:z,resetValue:L}}var se=t(85191),me=["320px","1fr"];function Fe(h){var R=h.layout,d=h.layoutMinMax,T=h.layoutColumnGap,N=h.layoutRowGap,A=d==null?void 0:d[0],g=d==null?void 0:d[1],$=(0,S.useMemo)(function(){if(R===se.SY.normal)return"repeat(24, 1fr)";var H=R===se.SY.autoFill?"auto-fill":"auto-fit",U=(0,ne.e)(A!=null?A:me[0]),z=(0,ne.e)(g!=null?g:me[1]);return"repeat(".concat(H,", minmax(").concat(U,", ").concat(z,"))")},[R,A,g]),G={display:"grid",gridTemplateColumns:$,columnGap:T,rowGap:N};return G}function ce(h,R){if(!h||!R)return{left:0,top:0};for(var d=0,T=0,N=h;N&&N!==R;)d+=N.offsetLeft,T+=N.offsetTop,N=N.offsetParent;return{left:d,top:T}}var ge=t(94430);function be(h,R){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(h){var T=d.positionedElement,N=d.xAxis,A=d.yAxis,g=d.behavior,$=g===void 0?"smooth":g,G=d.gap,H=G===void 0?0:G,U=T||R;if(U){var z=ce(h,U);U.scrollTo({left:N===!1?void 0:z.left+H,top:A===!1?void 0:z.top+H,behavior:$})}}}function Ze(h){var R=h.ref,d=h.rootElementRef,T=h.rootContextRef,N=h.getValue,A=h.setValue,g=h.resetValue,$=(0,W.Z)(function(){return(0,ge.Ze)((0,P.ei)(T.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),G=(0,W.Z)(function(L){var j,O=(j=T.current)===null||j===void 0?void 0:j.rendererStorage;if(O&&L){var k=(0,m.kJ)(L)?(0,ne.P)(L):L;return O[k]}}),H=(0,W.Z)(function(L){var j,O=(j=T.current)===null||j===void 0?void 0:j.rendererStorage;if(O){var k=L?(0,m.HD)(L)?[L]:L:Object.keys(O);k.forEach(function(K){var X;(X=O[K])===null||X===void 0||X.setValidatorState({status:se.r6.success})})}}),U=(0,W.Z)(function(){return d.current}),z=(0,W.Z)(function(L,j){var O;return be((O=G(L))===null||O===void 0?void 0:O.getRootElement(),U(),j)});(0,S.useImperativeHandle)(R,function(){return{validate:$,resetError:H,setValue:A,resetValue:g,getValue:N,getRootElement:U,scrollTo:z,findItem:G}},[])}var ye=t(15565),ve=t(73561),o=t(75892),Re=t(6647),ie=t(68362),de=t(11527),Te={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:me,disabled:!1,readonly:!1,validators:{},userCtx:{}},xe=(0,S.forwardRef)(function(h,R){Re.Z.falsy(h.schema,"missing schema."),Re.Z.falsy(h.itemLayout,"missing itemLayout.");var d=y()(y()({},Te),h),T=(0,S.useRef)(null),N=(0,S.useRef)({}),A=Y(d),g=A.value,$=A.onChange,G=A.getValue,H=A.setValue,U=A.resetValue,z=(0,S.useMemo)(function(){return y()(y()({},ye.Z),d.locale)},[d.locale]),L=(0,S.useMemo)(function(){return(0,P.Cw)(d.renderers,function(k,K){return K.toLowerCase()})},[d.renderers]),j=Fe(d),O=N.current=y()(y()({},(0,P.ei)(d,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:j,renderers:L,rootSchema:d.schema,rootValue:g,locale:z,rendererStorage:{},onChange:$,prefixClassNames:function(){for(var K=arguments.length,X=new Array(K),ae=0;ae<K;ae++)X[ae]=arguments[ae];return Z.Rk.apply(void 0,[d.prefixCls].concat(X))}});return Ze({ref:R,rootElementRef:T,rootContextRef:N,getValue:G,setValue:H,resetValue:U}),(0,de.jsx)(ve.Z.Provider,{value:O,children:(0,de.jsx)("div",{className:(0,ie.Z)(O.prefixCls,d.className,{"is-disabled":O.disabled,"is-readonly":O.readonly}),ref:T,style:y()(y()({position:"relative"},j),d.style),children:(0,de.jsx)(o.Z,{schema:O.rootSchema,path:[]})})})}),De=(0,S.forwardRef)(function(h,R){return(0,de.jsx)(q.Z,{catchErrorTips:h.catchErrorTips,children:(0,de.jsx)(xe,y()(y()({},h),{},{ref:R}))})}),oe=De,Ae=t(88745),he=t(55225),Le=t(53190),Ce=t(14093),re=t(98694),Me=t(72151),Ie=t(51276),pe=oe},15565:function(B,J){"use strict";J.Z={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}},68683:function(B,J,t){"use strict";t.r(J),t.d(J,{default:function(){return jn}});var Q=t(57213),s=t.n(Q),y=t(46373),S=t(68362),q=t(67347),Z=t(98445),m=t(50959),ne=t(12342),P=t.n(ne),Oe=t(52510),C=t.n(Oe),_=t(32766),W=t(90597),Ne=t(21698),ue,Y={submit:"submit",reset:"reset"},se={normal:"normal",formItem:"formItem"},me={prefixCls:"schema-render",itemLayout:"horizontal",readonlyPlaceholder:"-",labelWidth:100,labelGap:15,layoutColumnGap:10,layoutRowGap:15,actions:[Y.submit,Y.reset],actionsRenderMode:se.normal,disableFormOnActionLoading:!0,validateFormOnSubmit:!0},Fe=(ue={},C()(ue,Y.submit,!1),C()(ue,Y.reset,!1),ue),ce="__FORM_RENDER_ACTIONS__",ge="YYYY-MM-DD",be="YYYY-MM-DD HH:mm:ss",Ze=(0,m.createContext)({}),ye=Ze;function ve(){var l=(0,m.useContext)(ye);return l}var o=t(11527),Re=["disabled"],ie,de=(ie={},C()(ie,Y.submit,function(l){var e,r=l.loading,n=l.locale,a=l.disabled;return(0,o.jsx)(W.ZP,{type:"primary",htmlType:"submit",disabled:r.submit?!1:a||r.reset,loading:r.submit,children:n==null||(e=n.FormRender)===null||e===void 0?void 0:e.submit})}),C()(ie,Y.reset,function(l){var e,r=l.handleReset,n=l.loading,a=l.locale,i=l.disabled;return(0,o.jsx)(W.ZP,{htmlType:"button",disabled:n.reset?!1:i||n.submit,loading:n.reset,onClick:r,children:a==null||(e=a.FormRender)===null||e===void 0?void 0:e.reset})}),ie),Te=function(e){var r=e.disabled,n=P()(e,Re),a=ve(),i=a.actions,u=a.actionsLoading,c=a.registerActions,p=a.handleReset,v=a.handleSubmit,f=a.layoutColumnGap,b=a.locale,D=_.kJ(i)&&i.length>0;if(!D)return null;var F=s()(s()({},de),c);return(0,o.jsx)(Ne.Z,s()(s()({size:f},n),{},{children:i.map(function(I){var x={locale:b,disabled:r,loading:u};I===Y.submit?x.handleSubmit=v:I===Y.reset&&(x.handleReset=p);var V=F[I];return V?(0,o.jsx)(m.Fragment,{children:V==null?void 0:V(x)},I):null})}))},xe=Te,De=t(25359),oe=t.n(De),Ae=t(49811),he=t.n(Ae),Le=t(54306),Ce=t.n(Le),re=t(88182),Me=t(72151);function Ie(l){var e=l.props,r=l.coreRef,n=(0,m.useState)(Fe),a=Ce()(n,2),i=a[0],u=a[1],c=(0,re.Z)(function(){var b=he()(oe()().mark(function D(F,I){return oe()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return u(function(E){return s()(s()({},E),{},C()({},F,!0))}),V.next=3,I().catch(function(E){Me.Z.warn(E)});case 3:u(function(E){return s()(s()({},E),{},C()({},F,!1))});case 4:case"end":return V.stop()}},D)}));return function(D,F){return b.apply(this,arguments)}}()),p=(0,re.Z)(function(){c(Y.submit,he()(oe()().mark(function b(){var D,F;return oe()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(r.current){x.next=2;break}return x.abrupt("return");case 2:if(!e.validateFormOnSubmit){x.next=8;break}return x.next=5,r.current.validate();case 5:if(F=x.sent,!(F.hasError||F.hasWarning)){x.next=8;break}return x.abrupt("return");case 8:return x.next=10,(D=e.onSubmit)===null||D===void 0?void 0:D.call(e,r.current.getValue());case 10:case"end":return x.stop()}},b)})))}),v=(0,re.Z)(function(b){b.preventDefault(),p()}),f=(0,re.Z)(function(){c(Y.reset,he()(oe()().mark(function b(){var D,F,I,x;return oe()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(r.current){E.next=2;break}return E.abrupt("return");case 2:return E.next=4,(D=e.onBeforeReset)===null||D===void 0?void 0:D.call(e,r.current.getValue());case 4:return I=E.sent,x=s()({},I),r.current.setValue(x),r.current.resetError(),E.next=10,(F=e.onReset)===null||F===void 0?void 0:F.call(e,x);case 10:case"end":return E.stop()}},b)})))});return{handleFormSubmit:v,handleSubmit:p,handleReset:f,actionsLoading:i,isLoading:i.submit||i.reset}}var pe=t(29752),h=t(98563),R=t(92935),d=t.n(R),T=t(77487),N=Math.random().toString(36).substring(7).replace(/\d/g,"x"),A=(0,T.Z)({key:"schema-render-".concat(N)}),g=A.css,$,G,H,U,z,L,j,O,k,K,X=g($||($=d()([`
  display: flex;
  align-items: center;
`]))),ae=g(G||(G=d()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),fe=g(H||(H=d()([`
  word-break: break-all;
`]))),je=g(U||(U=d()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),we=g(z||(z=d()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),Qe=g(L||(L=d()([`
  flex-grow: 1;
`]))),qe=g(j||(j=d()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),_e=g(O||(O=d()([`
  margin-top: 6px;
  color: var(--schema-render-color-description);
`]))),er=g(k||(k=d()([`
  margin-top: 6px;
  color: var(--schema-render-color-error);
`]))),rr=g(K||(K=d()([`
  color: var(--schema-render-color-warning);
`]))),w=S.Z,nr=function(e){var r=e.schema,n=e.required,a=e.prefixClassNames,i=e.labelColon,u=!!i;return(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)("span",{className:w(a("item-mark"),je),children:"*"}),(0,o.jsx)("span",{className:w(a("item-title"),fe),children:r.title}),!!r.titleDescription&&(0,o.jsx)(h.Z,{placement:"top",trigger:"hover",content:r.titleDescription,children:(0,o.jsx)(pe.Z,{className:w(a("item-title-tooltip"),we),style:{marginRight:u?4:void 0}})}),u&&(0,o.jsx)("span",{className:w(a("item-colon")),children:i})]})},ar=function(e){var r=e.body,n=e.schema,a=e.validator,i=e.required,u=e.disabled,c=e.readonly,p=e.userCtx,v=e.prefixClassNames,f=ve(),b=f.labelWidth,D=f.labelColon,F=f.labelGap,I=f.labelRender,x=f.locale,V=I||nr,E={schema:n,required:i,disabled:u,readonly:c,userCtx:p,prefixClassNames:v,labelWidth:b,labelColon:D,labelGap:F,locale:x};return(0,o.jsxs)("div",{className:w(v("item-layout-horizontal")),children:[(0,o.jsxs)("div",{className:w(v("item-main"),X),children:[(0,o.jsx)("div",{className:w(v("item-header"),ae),style:{flexBasis:b,marginRight:F},children:V(E)}),(0,o.jsx)("div",{className:w(v("item-body"),Qe),children:r})]}),(0,o.jsxs)("div",{className:w(v("item-footer"),qe),style:{paddingLeft:_.hj(b)?b+F:0},children:[a.status==="error"&&!!a.message&&(0,o.jsx)("div",{className:w(v("item-error-msg"),er),children:a.message}),a.status==="warning"&&!!a.message&&(0,o.jsx)("div",{className:w(v("item-warning-msg"),rr),children:a.message}),!!n.description&&(0,o.jsx)("div",{className:w(v("item-description"),_e),children:n.description})]})]})},tr=ar,Pe,Ve,Ge,Ue,We,$e,ze,Be,or=g(Pe||(Pe=d()([`
  margin-bottom: 8px;
`]))),lr=g(Ve||(Ve=d()([`
  word-break: break-all;
`]))),sr=g(Ge||(Ge=d()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),ir=g(Ue||(Ue=d()([`
  margin-left: 4px;
`]))),dr=g(We||(We=d()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),ur=g($e||($e=d()([`
  margin-top: 8px;
  color: var(--schema-render-color-description);
`]))),cr=g(ze||(ze=d()([`
  margin-top: 8px;
  color: var(--schema-render-color-error);
`]))),vr=g(Be||(Be=d()([`
  color: var(--schema-render-color-warning);
`]))),te=S.Z,mr=function(e){var r=e.schema,n=e.required,a=e.prefixClassNames,i=e.labelColon,u=!!i;return(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)("span",{className:te(a("item-mark"),sr),children:"*"}),(0,o.jsx)("span",{className:te(a("item-title"),lr),children:r.title}),!!r.titleDescription&&(0,o.jsx)(h.Z,{placement:"top",trigger:"hover",content:r.titleDescription,children:(0,o.jsx)(pe.Z,{className:te(a("item-title-tooltip"),ir),style:{marginRight:u?4:void 0}})}),u&&(0,o.jsx)("span",{className:te(a("item-colon")),children:i})]})},hr=function(e){var r=e.body,n=e.schema,a=e.validator,i=e.required,u=e.disabled,c=e.readonly,p=e.userCtx,v=e.prefixClassNames,f=ve(),b=f.labelWidth,D=f.labelColon,F=f.labelGap,I=f.labelRender,x=f.locale,V=I||mr,E={schema:n,required:i,disabled:u,readonly:c,userCtx:p,prefixClassNames:v,labelWidth:b,labelColon:D,labelGap:F,locale:x};return(0,o.jsxs)("div",{className:v("item-layout-vertical"),children:[(0,o.jsx)("div",{className:te(v("item-header"),or),children:V(E)}),(0,o.jsx)("div",{className:v("item-body"),children:r}),(0,o.jsxs)("div",{className:te(v("item-footer"),dr),children:[a.status==="error"&&!!a.message&&(0,o.jsx)("div",{className:te(v("item-error-msg"),cr),children:a.message}),a.status==="warning"&&!!a.message&&(0,o.jsx)("div",{className:te(v("item-warning-msg"),vr),children:a.message}),!!n.description&&(0,o.jsx)("div",{className:te(v("item-description"),ur),children:n.description})]})]})},pr=hr;function fr(l){var e=l.itemLayout,r=(0,m.useMemo)(function(){return!e||e==="horizontal"?tr:e==="vertical"?pr:e},[e]);return r}function gr(l,e){var r="".concat(ce,"_").concat(Date.now());return s()(s()({},l),{},{properties:s()(s()({},l==null?void 0:l.properties),{},C()({},r,s()(s()({},e),{},{renderType:ce})))})}function br(l){var e=l.itemLayout,r=l.labelWidth,n=l.labelGap;return e==="horizontal"&&_.hj(r)?r+n:0}function Se(l,e){var r=[];return _.kJ(e)&&_.kJ(l)&&e.forEach(function(n){if(!_.kK(n)){var a=y.sE(l,{value:n});a&&r.push(a.label)}}),r}function yr(l){return!!(_.kK(l)||l==="")}function Rr(l){var e=l.schema,r=l.actionsRestSchema,n=l.actionsRenderMode;return(0,m.useMemo)(function(){return n===se.normal?e:gr(e,r)},[e,r,n])}var Ye,xr=g(Ye||(Ye=d()([`
  --schema-render-color-description: #999;
  --schema-render-color-required-mark: #ff4d4f;
  --schema-render-color-warning: #faad14;
  --schema-render-color-error: #ff4d4f;

  font-size: 16px;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
`]))),Cr=t(87793),jr=t(27768),Sr=function(e){var r=e.children,n=ve(),a=n.readonlyPlaceholder;return(0,o.jsx)(o.Fragment,{children:yr(r)?a:r})},ee=Sr,Or=function(e){var r=e.schema,n=e.disabled,a=e.value,i=e.onChange;return(0,o.jsx)(jr.Z.Group,s()(s()({},r.renderOptions),{},{value:a,onChange:i,disabled:n}))},Nr=function(e){var r,n=e.schema,a=e.value,i=e.locale,u=Se((r=n.renderOptions)===null||r===void 0?void 0:r.options,a);return(0,o.jsx)(ee,{children:u.join(i.FormRender.comma)})},Fr={component:Or,readonlyComponent:Nr},He=t(72028),Zr=t(67006),le=t.n(Zr),Tr=function(e){var r=e.schema,n=e.value,a=e.onChange,i=e.disabled,u=e.locale,c=e.validator,p=(0,m.useMemo)(function(){return Z.dr(u.FormRender.placeholderSelect,{title:r.title})},[r.title,u.FormRender.placeholderSelect]);return(0,o.jsx)(He.Z,s()(s()({allowClear:!0,placeholder:p,style:{width:"100%"}},r.renderOptions),{},{status:c.status,value:n?le()(n):null,onChange:function(f){return a(f?le()(f).toISOString():void 0)},disabled:i}))},Dr=function(e){var r,n,a=e.schema,i=e.value;return(0,o.jsx)(ee,{children:i?le()(i).format(((r=a.renderOptions)===null||r===void 0?void 0:r.format)||((n=a.renderOptions)!==null&&n!==void 0&&n.showTime?be:ge)):""})},Ar={component:Tr,readonlyComponent:Dr};function Ke(l){return le()(l).toISOString()}var Lr=function(e){var r=e.schema,n=e.value,a=e.onChange,i=e.disabled,u=e.validator;return(0,o.jsx)(He.Z.RangePicker,s()(s()({allowClear:!0,style:{width:"100%"}},r.renderOptions),{},{status:u.status,value:n?[le()(n[0]),le()(n[1])]:null,onChange:function(p){return a(p?[Ke(p[0]),Ke(p[1])]:void 0)},disabled:i}))},Mr=function(e){var r=e.schema,n=e.value,a=e.locale,i="";if(_.kJ(n)&&n[0]&&n[1]){var u,c,p=(u=r.renderOptions)!==null&&u!==void 0&&u.showTime?be:ge,v=((c=r.renderOptions)===null||c===void 0?void 0:c.format)||p;i=Z.dr(a.FormRender.displayDateRange,{start:le()(n[0]).format(v),end:le()(n[1]).format(v)})}return(0,o.jsx)(ee,{children:i})},Ir={component:Lr,readonlyComponent:Mr},Er=function(e){var r=e.value;return(0,o.jsx)(ee,{children:r})},Pr={component:Er},Vr=function(e){var r=e.disabled;return(0,o.jsx)(xe,{disabled:r})},Gr={formItem:Vr},Ur=t(74437),Wr=function(e){var r=e.schema,n=e.disabled,a=e.value,i=e.onChange,u=e.validator,c=e.locale,p=(0,m.useMemo)(function(){return Z.dr(c.FormRender.placeholderInput,{title:r.title})},[r.title,c.FormRender.placeholderInput]),v=(0,re.Z)(function(f){return i(f!=null?f:void 0)});return(0,o.jsx)(Ur.Z,s()(s()({style:{width:"100%"},placeholder:p},r.renderOptions),{},{status:u.status,value:a,onChange:v,disabled:n}))},$r=function(e){var r=e.value;return(0,o.jsx)(ee,{children:r})},zr={component:Wr,readonlyComponent:$r},Ee=t(82991),Br=function(e){var r=e.schema,n=e.disabled,a=e.value,i=e.onChange,u=e.validator,c=e.locale,p=(0,m.useMemo)(function(){return Z.dr(c.FormRender.placeholderInput,{title:r.title})},[r.title,c.FormRender.placeholderInput]),v=(0,re.Z)(function(f){var b=f.target.value;b!==a&&i(b)});return(0,o.jsx)(Ee.Z,s()(s()({placeholder:p},r.renderOptions),{},{status:u.status,value:a!=null?a:"",onChange:v,disabled:n}))},Yr=function(e){var r=e.value;return(0,o.jsx)(ee,{children:r})},Hr={component:Br,readonlyComponent:Yr},Je=t(75892),ke=t(26513),Kr=function(e){var r,n,a=e.schema,i=e.path,u=e.objectStyle,c=(0,m.useState)(!1),p=Ce()(c,2),v=p[0],f=p[1],b=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:a.title}),!!a.titleDescription&&(0,o.jsx)(h.Z,{placement:"top",trigger:"hover",content:a.titleDescription,children:(0,o.jsx)(pe.Z,{style:{marginLeft:4}})})]});return(0,o.jsx)(ke.Z,s()(s()({},(r=a.renderOptions)===null||r===void 0?void 0:r.headerOptions),{},{activeKey:String(v),onChange:function(){return f(!v)},children:(0,m.createElement)(ke.Z.Panel,s()(s()({},(n=a.renderOptions)===null||n===void 0?void 0:n.panelOptions),{},{header:b,key:"false"}),(0,o.jsx)("div",{style:u,children:(0,o.jsx)(Je.Z,{schema:a,path:i})}))}))},Jr={formItem:Kr},kr=function(e){var r=e.schema,n=e.path,a=e.objectStyle;return(0,o.jsx)("div",{style:a,children:(0,o.jsx)(Je.Z,{schema:r,path:n})})},Xr={formItem:kr},wr=function(e){var r=e.schema,n=e.disabled,a=e.value,i=e.onChange,u=e.validator,c=e.locale,p=(0,m.useMemo)(function(){return Z.dr(c.FormRender.placeholderInput,{title:r.title})},[r.title,c.FormRender.placeholderInput]),v=(0,re.Z)(function(f){var b=f.target.value;b!==a&&i(b)});return(0,o.jsx)(Ee.Z.Password,s()(s()({placeholder:p},r.renderOptions),{},{status:u.status,value:a!=null?a:"",onChange:v,disabled:n}))},Qr=function(e){var r=e.value;return(0,o.jsx)(ee,{children:r})},qr={component:wr,readonlyComponent:Qr},_r=t(10294),en=function(e){var r=e.schema,n=e.disabled,a=e.value,i=e.onChange;return(0,o.jsx)(_r.ZP.Group,s()(s()({},r.renderOptions),{},{value:a,onChange:function(c){return i(c.target.value)},disabled:n}))},rn=function(e){var r,n=e.schema,a=e.value,i=Se((r=n.renderOptions)===null||r===void 0?void 0:r.options,[a]);return(0,o.jsx)(ee,{children:i[0]})},nn={component:en,readonlyComponent:rn},an=t(64263),tn=function(e){var r=e.schema,n=e.disabled,a=e.readonly,i=e.value,u=e.onChange;return(0,o.jsx)(an.Z,s()(s()({},r.renderOptions),{},{value:i!=null?i:0,onChange:u,disabled:n||a}))},on={component:tn},Xe=t(61328),ln=function(e){var r=e.schema,n=e.disabled,a=e.value,i=e.onChange,u=e.locale,c=e.validator,p=(0,m.useMemo)(function(){return Z.dr(u.FormRender.placeholderSelect,{title:r.title})},[r.title,u.FormRender.placeholderSelect]);return(0,o.jsx)(Xe.Z,s()(s()({allowClear:!0,style:{width:"100%"},placeholder:p},r.renderOptions),{},{status:c.status,mode:void 0,value:a!=null?a:null,onChange:function(f){return i(f)},disabled:n}))},sn=function(e){var r,n,a=e.schema,i=e.value,u=e.locale,c=Se((r=a.renderOptions)===null||r===void 0?void 0:r.options,[i]);return(0,o.jsx)(ee,{children:c.join((n=u.FormRender)===null||n===void 0?void 0:n.comma)})},dn={component:ln,readonlyComponent:sn},un=function(e){var r=e.schema,n=e.disabled,a=e.value,i=e.onChange,u=e.validator,c=e.locale,p=(0,m.useMemo)(function(){return Z.dr(c.FormRender.placeholderSelect,{title:r.title})},[r.title,c.FormRender.placeholderSelect]);return(0,o.jsx)(Xe.Z,s()(s()({allowClear:!0,style:{width:"100%"},placeholder:p},r.renderOptions),{},{status:u.status,mode:"multiple",value:a,onChange:function(f){return i(f)},disabled:n}))},cn=function(e){var r,n,a=e.schema,i=e.value,u=e.locale,c=Se((r=a.renderOptions)===null||r===void 0?void 0:r.options,i);return(0,o.jsx)(ee,{children:c.join((n=u.FormRender)===null||n===void 0?void 0:n.comma)})},vn={component:un,readonlyComponent:cn},mn=t(10177),hn=function(e){var r=e.schema,n=e.disabled,a=e.readonly,i=e.value,u=e.onChange;return(0,o.jsx)(mn.Z,s()(s()({},r.renderOptions),{},{checked:i,onChange:function(p){return u(p)},disabled:n||a}))},pn={component:hn},fn=function(e){var r=e.schema,n=e.disabled,a=e.value,i=e.onChange,u=e.validator,c=e.locale,p=(0,m.useMemo)(function(){return Z.dr(c.FormRender.placeholderInput,{title:r.title})},[r.title,c.FormRender.placeholderInput]),v=(0,re.Z)(function(f){var b=f.target.value;b!==a&&i(b)});return(0,o.jsx)(Ee.Z.TextArea,s()(s()({rows:3,placeholder:p},r.renderOptions),{},{status:u.status,value:a!=null?a:"",onChange:v,disabled:n}))},gn=function(e){var r=e.value;return(0,o.jsx)(ee,{children:r})},bn={component:fn,readonlyComponent:gn},M,yn=(M={},C()(M,ce,Gr),C()(M,"Object",Jr),C()(M,"ObjectNull",Xr),C()(M,"InputText",Hr),C()(M,"InputNumber",zr),C()(M,"Password",qr),C()(M,"TextArea",bn),C()(M,"Radio",nn),C()(M,"Checkbox",Fr),C()(M,"Switch",pn),C()(M,"DatePicker",Ar),C()(M,"DateRangePicker",Ir),C()(M,"Description",Pr),C()(M,"Rate",on),C()(M,"Select",dn),C()(M,"SelectMultiple",vn),M),Rn=yn,xn=function(e,r){var n=s()(s()({},me),e),a=(0,m.useRef)(null);(0,m.useImperativeHandle)(r,function(){return a.current});var i=(0,m.useMemo)(function(){return s()(s()({},Rn),n.renderers)},[n.renderers]),u=(0,m.useMemo)(function(){return s()(s()({},Cr.Z),n.locale)},[n.locale]),c=fr(n),p=Ie({props:n,coreRef:a}),v=p.handleFormSubmit,f=p.handleSubmit,b=p.handleReset,D=p.actionsLoading,F=p.isLoading,I=Rr(y.ei(n,"schema","actionsRestSchema","actionsRenderMode")),x=s()(s()({},y.ei(n,"labelWidth","labelGap","labelColon","labelRender","layoutColumnGap","layoutRowGap","actions","registerActions","readonlyPlaceholder")),{},{locale:u,actionsLoading:D,handleSubmit:f,handleReset:b}),V=n.disableFormOnActionLoading?n.disabled||F:n.disabled;return(0,o.jsx)(ye.Provider,{value:x,children:(0,o.jsxs)("form",{onSubmit:v,className:S.Z(n.rootClassName,xr),style:n.rootStyle,children:[(0,o.jsx)(q.default,s()(s()({},n),{},{ref:a,schema:I,locale:u,renderers:i,itemLayout:c,disabled:V})),n.actionsRenderMode===se.normal&&(0,o.jsx)(xe,{disabled:V,className:Z.Rk(n.prefixCls,"form-actions"),style:{marginTop:n.layoutRowGap,marginLeft:br(n)}})]})})},Cn=(0,m.forwardRef)(xn),jn=Cn},87793:function(B,J,t){"use strict";var Q=t(57213),s=t.n(Q),y=t(15565);J.Z=s()(s()({},y.Z),{},{FormRender:{submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",placeholderInput:"\u8BF7\u8F93\u5165${title}",placeholderSelect:"\u8BF7\u9009\u62E9${title}",comma:"\uFF0C",displayDateRange:"${start} \u81F3 ${end}"}})},12342:function(B,J,t){var Q=t(20006);function s(y,S){if(y==null)return{};var q=Q(y,S),Z,m;if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(y);for(m=0;m<ne.length;m++)Z=ne[m],!(S.indexOf(Z)>=0)&&Object.prototype.propertyIsEnumerable.call(y,Z)&&(q[Z]=y[Z])}return q}B.exports=s,B.exports.__esModule=!0,B.exports.default=B.exports},20006:function(B){function J(t,Q){if(t==null)return{};var s={},y=Object.keys(t),S,q;for(q=0;q<y.length;q++)S=y[q],!(Q.indexOf(S)>=0)&&(s[S]=t[S]);return s}B.exports=J,B.exports.__esModule=!0,B.exports.default=B.exports}}]);
