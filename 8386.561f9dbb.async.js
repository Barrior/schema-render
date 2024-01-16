"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8386],{38386:function(H,j,e){e.r(j),e.d(j,{RendererDistributor:function(){return ue.Z},RendererExecutor:function(){return ae.Z},RendererIterator:function(){return O.Z},default:function(){return ie},useCoreValue:function(){return A},useDebounceFn:function(){return re.Z},useForceUpdate:function(){return T},useLatest:function(){return te.Z},useMemoizedFn:function(){return C.Z},useUnmount:function(){return ne.Z},utils:function(){return N}});var N={};e.r(N),e.d(N,{classNames:function(){return K.Z},classNamesWithPrefix:function(){return M.Rk},cloneDeep:function(){return u.Xh},debounce:function(){return u.Ds},dropRight:function(){return u.j7},find:function(){return u.sE},get:function(){return u.U2},isArray:function(){return i.kJ},isBoolean:function(){return i.jn},isFunction:function(){return i.mf},isMatch:function(){return u.BD},isNil:function(){return i.kK},isNull:function(){return i.Ft},isNumber:function(){return i.hj},isObject:function(){return i.Kn},isPlainObject:function(){return i.PO},isString:function(){return i.HD},isUndefined:function(){return i.o8},logger:function(){return oe.Z},mapKeys:function(){return u.Cw},omit:function(){return u.CE},pick:function(){return u.ei},set:function(){return u.t8},templateCompiled:function(){return M.dr},toLower:function(){return u.t$},traverseSchema:function(){return le.Z},typeChecking:function(){return i.DN}});var I=e(57213),l=e.n(I),s=e(50959),P=e(7811),M=e(98445),i=e(32766),F=e(92139),u=e(46373),Y=e(54306),X=e.n(Y);function T(){var r=(0,s.useReducer)(function(v){return v+1},0),n=X()(r,2),t=n[0],f=n[1];return{forceUpdate:f}}var C=e(88182),J=function(){var n=(0,s.useRef)(!1);return(0,s.useEffect)(function(){return n.current=!1,function(){n.current=!0}},[]),n},Q=J;function A(r){var n,t=(0,s.useRef)((n=r.defaultValue)!==null&&n!==void 0?n:{}),f=Q(),v=T(),a=v.forceUpdate,d=(0,M.nr)(r,"value");if(d){var R;t.current=(R=r.value)!==null&&R!==void 0?R:{}}var g=(0,C.Z)(function(o,c){if(!f.current){var h,V,S,E=(0,F.P)(c.path),G=l()(l()({},c),{},{sPath:E}),B=(h=r.watch)===null||h===void 0?void 0:h[E];(0,i.mf)(B)&&B(o,G),t.current=o,d||a(),(V=r.onItemChange)===null||V===void 0||V.call(r,G),(S=r.onChange)===null||S===void 0||S.call(r,o,G)}}),x=(0,C.Z)(function(o){var c=(0,u.t8)(l()({},t.current),o.path,o.value);g(c,o)}),m=(0,C.Z)(function(){return t.current}),y=(0,C.Z)(function(o){g(o,{path:[],value:void 0})}),Z=(0,C.Z)(function(){y({})});return{value:t.current,valueRef:t,onChange:x,getValue:m,setValue:y,resetValue:Z}}var D=e(85191),L=["320px","1fr"];function W(r){var n=r.layout,t=r.layoutMinMax,f=r.layoutColumnGap,v=r.layoutRowGap,a=t==null?void 0:t[0],d=t==null?void 0:t[1],R=(0,s.useMemo)(function(){if(n===D.SY.normal)return"repeat(24, 1fr)";var x=n===D.SY.autoFill?"auto-fill":"auto-fit",m=(0,F.e)(a!=null?a:L[0]),y=(0,F.e)(d!=null?d:L[1]);return"repeat(".concat(x,", minmax(").concat(m,", ").concat(y,"))")},[n,a,d]),g={display:"grid",gridTemplateColumns:R,columnGap:f,rowGap:v};return g}var $=e(94430);function b(r){var n=r.ref,t=r.rootElementRef,f=r.rootContextRef,v=r.getValue,a=r.setValue,d=r.resetValue,R=(0,C.Z)(function(){return(0,$.Ze)((0,u.ei)(f.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),g=(0,C.Z)(function(m){var y,Z=(y=f.current)===null||y===void 0?void 0:y.rendererStorage;if(Z){var o=m?(0,i.HD)(m)?[m]:m:Object.keys(Z);o.forEach(function(c){var h;(h=Z[c])===null||h===void 0||h.setValidatorState({status:D.r6.success})})}}),x=(0,C.Z)(function(){return t.current});(0,s.useImperativeHandle)(n,function(){return{validate:R,resetError:g,setValue:a,resetValue:d,getValue:v,getRootElement:x}},[])}var p=e(15565),w=e(73561),O=e(75892),z=e(6647),K=e(68362),U=e(11527),k={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:L,disabled:!1,readonly:!1,validators:{},userCtx:{}},q=(0,s.forwardRef)(function(r,n){z.Z.falsy(r.schema,"missing schema."),z.Z.falsy(r.itemLayout,"missing itemLayout.");var t=l()(l()({},k),r),f=(0,s.useRef)(null),v=(0,s.useRef)({}),a=A(t),d=a.value,R=a.onChange,g=a.getValue,x=a.setValue,m=a.resetValue,y=(0,s.useMemo)(function(){return l()(l()({},p.Z),t.locale)},[t.locale]),Z=(0,s.useMemo)(function(){return(0,u.Cw)(t.renderers,function(h,V){return V.toLowerCase()})},[t.renderers]),o=W(t),c=v.current=l()(l()({},(0,u.ei)(t,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:o,renderers:Z,rootSchema:t.schema,rootValue:d,locale:y,rendererStorage:{},onChange:R,prefixClassNames:function(){for(var V=arguments.length,S=new Array(V),E=0;E<V;E++)S[E]=arguments[E];return M.Rk.apply(void 0,[t.prefixCls].concat(S))}});return b({ref:n,rootElementRef:f,rootContextRef:v,getValue:g,setValue:x,resetValue:m}),(0,U.jsx)(w.Z.Provider,{value:c,children:(0,U.jsx)("div",{className:(0,K.Z)(c.prefixCls,t.className,{"is-disabled":c.disabled,"is-readonly":c.readonly}),ref:f,style:l()(l()({},o),t.style),children:(0,U.jsx)(O.Z,{schema:c.rootSchema,path:[]})})})}),_=(0,s.forwardRef)(function(r,n){return(0,U.jsx)(P.Z,{catchErrorTips:r.catchErrorTips,children:(0,U.jsx)(q,l()(l()({},r),{},{ref:n}))})}),ee=_,re=e(88745),te=e(55225),ne=e(53190),ue=e(14093),ae=e(98694),oe=e(72151),le=e(51276),ie=ee},15565:function(H,j){j.Z={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}}}]);
