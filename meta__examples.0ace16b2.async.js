"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[768],{40492:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(63917),h={}},42254:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return R}});var a=e(5574),h=e.n(a),L=e(15009),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(59869),A=e(74072),B=e(48201),R={"examples-core-react-002-quick-start-demo-0":{component:x.memo(x.lazy(W()(P()().mark(function T(){var v,u,s,t,o,n,r,l;return P()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=m.sent,u=v.default,m.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=m.sent,t=s.Input,o=function(f){var j=f.schema,y=f.body;return x.createElement("div",null,x.createElement("h3",null,j.title),x.createElement("div",null,y))},n={InputText:{component:function(f){var j=f.schema,y=f.value,i=f.onChange;return x.createElement(t,I()(I()({},j.renderOptions),{},{value:y,onChange:function(O){return i(O.target.value)}}))}},Textarea:{component:function(f){var j=f.schema,y=f.value,i=f.onChange;return x.createElement(t.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(j.title)},j.renderOptions),{},{value:y,onChange:function(O){return i(O.target.value)}}))}}},r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},l=function(){return x.createElement(u,{itemLayout:o,renderers:n,schema:r})},m.abrupt("return",{default:l});case 13:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import { Input } from 'antd'

/**
 * \u5B9A\u4E49\u7EDF\u4E00\u7684\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF0C\u8FD9\u91CC\u662F\u5F88\u7B80\u5316\u7684\u5B9E\u73B0
 */
const VerticalItemLayout = ({ schema, body }) => {
  return (
    <div>
      {/* \u5C55\u793A Schema \u534F\u8BAE\u6807\u9898 */}
      <h3>{schema.title}</h3>

      {/* \u5C55\u793A\u4E3B\u8981\u5185\u5BB9 */}
      <div>{body}</div>
    </div>
  )
}

/**
 * \u6CE8\u518C\u6E32\u67D3\u5668
 */
const renderers = {
  /* \u5B9A\u4E49\u6E32\u67D3\u5668\u540D\u79F0\uFF0C\u7ED9\u534F\u8BAE\u7684 renderType \u4F7F\u7528 */
  InputText: {
    /*
     * component \u662F\u6E32\u67D3\u5668\u5176\u4E2D\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9\uFF0C
     * \u8BE6\u60C5\u8BF7\u53C2\u89C1\u300C\u6E32\u67D3\u5668 Renderer\u300D\u7AE0\u8282
     */
    component: ({ schema, value, onChange }) => {
      return (
        <Input
          /* \u5C06 Schema \u534F\u8BAE\u7684\u7EC4\u4EF6\u53C2\u6570\u4F20\u9012\u7ED9\u7EC4\u4EF6 */
          {...schema.renderOptions}
          /* \u5C06\u5F53\u524D\u8868\u5355\u7684\u6570\u636E\u5373 value \u4F20\u9012\u7ED9\u7EC4\u4EF6 */
          value={value}
          /* \u8F93\u5165\u6846\u4E8B\u4EF6\uFF0C\u66F4\u65B0\u5F53\u524D\u8868\u5355\u9879\u6570\u636E */
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  /* \u6CE8\u518C\u6587\u672C\u57DF\u6E32\u67D3\u5668\uFF0C\u540C\u6837\u7684\u89C4\u5219 */
  Textarea: {
    component: ({ schema, value, onChange }) => {
      return (
        <Input.TextArea
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title}\`}
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
}

/**
 * Schema \u534F\u8BAE\u9700\u8981\u4EE5 renderType \u4E3A Root \u5F00\u5934\uFF0C
 * \u5728\u540C\u7EA7\u7684 properties \u5C5E\u6027\u4E0B\u58F0\u660E\u300C\u8868\u5355\u9879\u300D\u6709\u54EA\u4E9B\uFF0C\u7528\u4EC0\u4E48\u6E32\u67D3\u5668\u6E32\u67D3
 */
const schema = {
  renderType: 'Root',
  properties: {
    /* \u8FD9\u4E00\u7EA7\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5B57\u6BB5 */
    title: {
      /* \u8FD9\u4E00\u7EA7\u662F Schema \u534F\u8BAE\u7684\u5C5E\u6027 */
      // \u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898
      title: '\u6807\u9898',

      // \u5B9A\u4E49\u8868\u5355\u9879\u7528\u4EC0\u4E48\u6E32\u67D3\u5668\u6E32\u67D3
      renderType: 'InputText',

      // \u4F20\u9012\u7ED9\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u53C2\u6570
      renderOptions: {
        maxLength: 10,
        placeholder: '\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26',
      },
    },
    /* \u7B2C\u4E8C\u4E2A\u8868\u5355\u9879\uFF0C\u540C\u6837\u7684\u89C4\u5219 */
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
}

const Demo = () => {
  return (
    <Core
      /* \u6B65\u9AA4\u4E00\uFF1A\u6CE8\u518C\u8868\u5355\u9879\u7EDF\u4E00\u7684\u5E03\u5C40\u7ED3\u6784 */
      itemLayout={VerticalItemLayout}
      /* \u6B65\u9AA4\u4E00\uFF1A\u6CE8\u518C Schema \u534F\u8BAE\u9700\u8981\u4F7F\u7528\u5230\u7684\u6E32\u67D3\u5668 */
      renderers={renderers}
      /* \u6B65\u9AA4\u4E8C\uFF1A\u5C06 Schema \u534F\u8BAE\u4F20\u9012\u7ED9\u5185\u6838\u6E32\u67D3 */
      schema={schema}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,antd:B},renderOpts:{compile:function(){var T=W()(P()().mark(function u(){var s,t=arguments;return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-002-quick-start-demo-1":{component:x.memo(x.lazy(W()(P()().mark(function T(){var v,u,s,t,o,n,r,l,d,m;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=f.sent,u=v.default,f.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=f.sent,t=s.Input,f.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return o=f.sent,n=o.useState,r=function(y){var i=y.schema,C=y.body;return x.createElement("div",null,x.createElement("h3",null,i.title),x.createElement("div",null,C))},l={InputText:{component:function(y){var i=y.schema,C=y.value,O=y.onChange;return x.createElement(t,I()(I()({},i.renderOptions),{},{value:C,onChange:function(D){return O(D.target.value)}}))}},Textarea:{component:function(y){var i=y.schema,C=y.value,O=y.onChange;return x.createElement(t.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(i.title)},i.renderOptions),{},{value:C,onChange:function(D){return O(D.target.value)}}))}}},d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},m=function(){var y=n({}),i=h()(y,2),C=i[0],O=i[1];return x.createElement("div",null,x.createElement(u,{itemLayout:r,renderers:l,schema:d,onChange:O}),x.createElement("h4",null,"\u6253\u5370\u8868\u5355\u6570\u636E\uFF1A"),x.createElement("pre",{style:{padding:"1em",background:"#f6f6f6"}},JSON.stringify(C,null,2)))},f.abrupt("return",{default:m});case 17:case"end":return f.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import { Input } from 'antd'
import { useState } from 'react'

const VerticalItemLayout = ({ schema, body }) => {
  return (
    <div>
      <h3>{schema.title}</h3>
      <div>{body}</div>
    </div>
  )
}

const renderers = {
  InputText: {
    component: ({ schema, value, onChange }) => {
      return (
        <Input
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  Textarea: {
    component: ({ schema, value, onChange }) => {
      return (
        <Input.TextArea
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title}\`}
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26',
      },
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div>
      <Core
        itemLayout={VerticalItemLayout}
        renderers={renderers}
        schema={schema}
        /* \u6B65\u9AA4\u4E09\uFF1A\u901A\u8FC7 onChange \u4E8B\u4EF6\u83B7\u53D6\u8868\u5355\u7684\u6574\u4F53\u6570\u636E */
        onChange={setValue}
      />

      <h4>\u6253\u5370\u8868\u5355\u6570\u636E\uFF1A</h4>

      {/* \u6253\u5370\u8868\u5355\u6570\u636E */}
      <pre style={{ padding: '1em', background: '#f6f6f6' }}>
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,antd:B,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var T=W()(P()().mark(function u(){var s,t=arguments;return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},28070:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return B}});var a=e(5574),h=e.n(a),L=e(15009),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(76777),x=e(74072),$=e(2862),A=e(78469),B={"examples-core-react-003-schema-demo-0":{component:p.memo(p.lazy(I()(P()().mark(function R(){var T,v,u,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=d.sent,s=u.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{placeholder:"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 placeholder"}},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u751C\u751C\u7684\u6C34\u679C",options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import type { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      // \u901A\u8FC7 renderOptions \u5411 InputText \u4F20\u9012\u81EA\u5B9A\u4E49\u7684 placeholder \u5185\u5BB9
      renderOptions: {
        placeholder: '\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 placeholder',
      },
    },
    fruit: {
      title: '\u6C34\u679C',
      renderType: 'Select',
      // \u901A\u8FC7 renderOptions \u5411 Select \u4F20\u9012\u679A\u4E3E\u503C\u4EE5\u53CA\u81EA\u5B9A\u4E49 placeholder
      renderOptions: {
        placeholder: '\u8BF7\u9009\u62E9\u4E00\u4E2A\u751C\u751C\u7684\u6C34\u679C',
        options: [
          { label: '\u82F9\u679C', value: 'apple' },
          { label: '\u9999\u8549', value: 'banana' },
          { label: '\u897F\u74DC', value: 'watermelon' },
        ],
      },
    },
  },
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-1":{component:p.memo(p.lazy(I()(P()().mark(function R(){var T,v,u,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=d.sent,s=u.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u5FC5\u586B"},fruit:{title:"\u6C34\u679C",renderType:"Select",required:"$.open",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import type { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      // \u58F0\u660E\u300C\u6807\u9898\u300D\u4E3A\u5FC5\u586B\u9879\uFF0C\u672A\u586B\u65F6\u63D0\u4EA4\u5C06\u88AB\u7981\u6B62
      required: true,
    },
    open: {
      renderType: 'Switch',
      title: '\u5F00\u542F\u6C34\u679C\u5FC5\u586B',
    },
    fruit: {
      title: '\u6C34\u679C',
      renderType: 'Select',
      /**
       * \u901A\u8FC7 JavaScript \u8868\u8FBE\u5F0F\u63A7\u5236\u8868\u5355\u9879\u7684\u7981\u7528\u72B6\u6001
       * \u8868\u8FBE\u5F0F\u6700\u540E\u7684\u7ED3\u679C\u9700\u8981\u662F boolean \u503C
       *
       * \u4E0B\u9762\u7684\u542B\u4E49\u662F\uFF1A\u5982\u679C\u5F53\u524D\u5C42\u7EA7\u4E0B\u7684 open \u5B57\u6BB5\u7684\u503C\u4E3A true\uFF0C\u90A3\u4E48\u5FC5\u586B\uFF0C\u5426\u5219\u4E0D\u5FC5\u586B
       */
      required: '$.open',
      renderOptions: {
        options: [
          { label: '\u82F9\u679C', value: 'apple' },
          { label: '\u9999\u8549', value: 'banana' },
          { label: '\u897F\u74DC', value: 'watermelon' },
        ],
      },
    },
  },
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-2":{component:p.memo(p.lazy(I()(P()().mark(function R(){var T,v,u,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=d.sent,s=u.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",disabled:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u7981\u7528"},fruit:{title:"\u6C34\u679C",renderType:"Select",disabled:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import type { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      disabled: true,
    },
    open: {
      renderType: 'Switch',
      title: '\u5F00\u542F\u6C34\u679C\u7981\u7528',
    },
    fruit: {
      title: '\u6C34\u679C',
      renderType: 'Select',
      disabled: '$.open === true',
      renderOptions: {
        options: [
          { label: '\u82F9\u679C', value: 'apple' },
          { label: '\u9999\u8549', value: 'banana' },
          { label: '\u897F\u74DC', value: 'watermelon' },
        ],
      },
    },
  },
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-3":{component:p.memo(p.lazy(I()(P()().mark(function R(){var T,v,u,s,t,o,n,r,l,d;return P()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return T=g.sent,v=T.useState,g.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return u=g.sent,s=u.default,g.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return t=g.sent,o=t.default,g.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return n=g.sent,r=n.default,l={renderType:"Root",properties:{title:{title:"\u63D0\u95EE",renderType:"InputText",readonly:!0},fruit:{title:"\u7B54\u6848",renderType:"Select",readonly:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}},open:{renderType:"Switch",title:"\u5207\u6362\u5230\u53EA\u8BFB\u6001"}}},d=function(){var j=v({title:"\u54EA\u4E00\u79CD\u6C34\u679C\u6700\u751C\u5462",fruit:"watermelon"}),y=h()(j,2),i=y[0],C=y[1];return p.createElement(s,{value:i,schema:l,onChange:C,itemLayout:o,renderers:r})},g.abrupt("return",{default:d});case 19:case"end":return g.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import Core from '@schema-render/core-react'
import type { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u63D0\u95EE',
      renderType: 'InputText',
      readonly: true,
    },
    fruit: {
      title: '\u7B54\u6848',
      renderType: 'Select',
      readonly: '$.open === true',
      renderOptions: {
        options: [
          { label: '\u82F9\u679C', value: 'apple' },
          { label: '\u9999\u8549', value: 'banana' },
          { label: '\u897F\u74DC', value: 'watermelon' },
        ],
      },
    },
    open: {
      renderType: 'Switch',
      title: '\u5207\u6362\u5230\u53EA\u8BFB\u6001',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState<object>({
    title: '\u54EA\u4E00\u79CD\u6C34\u679C\u6700\u751C\u5462',
    fruit: 'watermelon',
  })

  return (
    <Core
      value={value}
      schema={schema}
      onChange={setValue}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":A,react:S||(S=e.t(p,2)),"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-4":{component:p.memo(p.lazy(I()(P()().mark(function R(){var T,v,u,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=d.sent,s=u.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",hidden:!0},open:{renderType:"Switch",title:"\u9690\u85CF\u6C34\u679C\u9009\u62E9"},fruit:{title:"\u6C34\u679C",renderType:"Select",hidden:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import type { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      hidden: true,
    },
    open: {
      renderType: 'Switch',
      title: '\u9690\u85CF\u6C34\u679C\u9009\u62E9',
    },
    fruit: {
      title: '\u6C34\u679C',
      renderType: 'Select',
      hidden: '$.open === true',
      renderOptions: {
        options: [
          { label: '\u82F9\u679C', value: 'apple' },
          { label: '\u9999\u8549', value: 'banana' },
          { label: '\u897F\u74DC', value: 'watermelon' },
        ],
      },
    },
  },
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}},"examples-core-react-003-schema-demo-5":{component:p.memo(p.lazy(I()(P()().mark(function R(){var T,v,u,s,t,o,n,r;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=d.sent,v=T.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return u=d.sent,s=u.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6C34\u679C"}]}}},r=function(){return p.createElement(v,{schema:n,itemLayout:s,renderers:o})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import type { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
      // \u901A\u8FC7 rules \u5B57\u6BB5\u58F0\u660E\u6821\u9A8C\u7684\u89C4\u5219
      rules: [
        { max: 10, message: '\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26' },
        { pattern: '^[a-zA-Z\\\\d]+$', message: '\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57' },
      ],
    },
    fruit: {
      title: '\u6C34\u679C',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u82F9\u679C', value: 'apple' },
          { label: '\u9999\u8549', value: 'banana' },
          { label: '\u897F\u74DC', value: 'watermelon' },
        ],
      },
      // rules \u5185\u7684 required \u4E0E\u540C\u7EA7\u7684 required \u529F\u80FD\u4E00\u81F4
      rules: [{ required: true, message: '\u8BF7\u9009\u62E9\u6C34\u679C' }],
    },
  },
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(P()().mark(function v(){var u,s=arguments;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}}}},58970:function(G,c,e){e.r(c),e.d(c,{demos:function(){return x}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(84894),I=e(74072),p=e(2862),W=e(78469),x={"examples-core-react-100-layout-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function $(){var A,B,R,T,v,u,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,B=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,T=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(B,{layout:"normal",schema:s,itemLayout:T,renderers:u})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '\u5BBD\u5EA6',
      renderType: 'InputNumber',
    },
    height: {
      title: '\u9AD8\u5EA6',
      renderType: 'InputNumber',
    },
    left: {
      title: '\u6C34\u5E73\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
    top: {
      title: '\u5782\u76F4\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
  },
} as const

const Demo = () => {
  return (
    <Core layout="normal" schema={schema} itemLayout={Horizontal} renderers={renderers} />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var $=L()(a()().mark(function B(){var R,T=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(R=u.sent).default.apply(R,T));case 3:case"end":return u.stop()}},B)}));function A(){return $.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-1":{component:P.memo(P.lazy(L()(a()().mark(function $(){var A,B,R,T,v,u,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,B=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,T=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber",span:12},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber",span:12},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber",span:12,spanStart:1},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber",span:12},rotate:{title:"\u65CB\u8F6C\u89D2\u5EA6",renderType:"InputNumber"}}},t=function(){return P.createElement(B,{layout:"normal",schema:s,itemLayout:T,renderers:u})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '\u5BBD\u5EA6',
      renderType: 'InputNumber',
      // \u901A\u8FC7 span \u8BBE\u7F6E\u8868\u5355\u9879\u4E3A 50% \u7684\u5BBD\u5EA6\uFF0812/24\uFF09
      span: 12,
    },
    height: {
      title: '\u9AD8\u5EA6',
      renderType: 'InputNumber',
      span: 12,
    },
    left: {
      title: '\u6C34\u5E73\u4F4D\u7F6E',
      renderType: 'InputNumber',
      // \u901A\u8FC7 span \u8BBE\u7F6E\u8868\u5355\u9879\u4E3A 50% \u7684\u5BBD\u5EA6
      span: 12,
      // \u901A\u8FC7 spanStart \u8BBE\u7F6E\u8868\u5355\u9879\u4ECE\u7B2C\u4E00\u4E2A\u6805\u683C\u5F00\u59CB\u5E03\u5C40\uFF0C\u5373\u65B0\u8D77\u4E00\u884C
      spanStart: 1,
    },
    // \u540E\u9762\u7684\u8868\u5355\u9879\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u8DDF\u968F\u4E0A\u4E00\u4E2A\u8868\u5355\u9879\u7684\u4F4D\u7F6E
    top: {
      title: '\u5782\u76F4\u4F4D\u7F6E',
      renderType: 'InputNumber',
      span: 12,
    },
    // \u5F53 span \u548C spanStart \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09
    rotate: {
      title: '\u65CB\u8F6C\u89D2\u5EA6',
      renderType: 'InputNumber',
    },
  },
} as const

const Demo = () => {
  return (
    <Core layout="normal" schema={schema} itemLayout={Horizontal} renderers={renderers} />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var $=L()(a()().mark(function B(){var R,T=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(R=u.sent).default.apply(R,T));case 3:case"end":return u.stop()}},B)}));function A(){return $.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-2":{component:P.memo(P.lazy(L()(a()().mark(function $(){var A,B,R,T,v,u,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,B=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,T=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(B,{schema:s,layout:"autoFill",itemLayout:T,renderers:u})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '\u5BBD\u5EA6',
      renderType: 'InputNumber',
    },
    height: {
      title: '\u9AD8\u5EA6',
      renderType: 'InputNumber',
    },
    left: {
      title: '\u6C34\u5E73\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
    top: {
      title: '\u5782\u76F4\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      schema={schema}
      layout="autoFill"
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var $=L()(a()().mark(function B(){var R,T=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(R=u.sent).default.apply(R,T));case 3:case"end":return u.stop()}},B)}));function A(){return $.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-3":{component:P.memo(P.lazy(L()(a()().mark(function $(){var A,B,R,T,v,u,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,B=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,T=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(B,{schema:s,layout:"autoFit",itemLayout:T,renderers:u})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '\u5BBD\u5EA6',
      renderType: 'InputNumber',
    },
    height: {
      title: '\u9AD8\u5EA6',
      renderType: 'InputNumber',
    },
    left: {
      title: '\u6C34\u5E73\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
    top: {
      title: '\u5782\u76F4\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      schema={schema}
      layout="autoFit"
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var $=L()(a()().mark(function B(){var R,T=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(R=u.sent).default.apply(R,T));case 3:case"end":return u.stop()}},B)}));function A(){return $.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-4":{component:P.memo(P.lazy(L()(a()().mark(function $(){var A,B,R,T,v,u,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,B=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,T=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(B,{schema:s,layout:"autoFill",layoutMinMax:[230,230],itemLayout:T,renderers:u})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '\u5BBD\u5EA6',
      renderType: 'InputNumber',
    },
    height: {
      title: '\u9AD8\u5EA6',
      renderType: 'InputNumber',
    },
    left: {
      title: '\u6C34\u5E73\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
    top: {
      title: '\u5782\u76F4\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      schema={schema}
      layout="autoFill"
      layoutMinMax={[230, 230]}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var $=L()(a()().mark(function B(){var R,T=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(R=u.sent).default.apply(R,T));case 3:case"end":return u.stop()}},B)}));function A(){return $.apply(this,arguments)}return A}()}}}},61985:function(G,c,e){e.r(c),e.d(c,{demos:function(){return T}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(23382),I=e(74072),p=e(69581),W=e(48201),x=e(93967),$=e.n(x),A=e(29298),B=e(2862),R=e(59868),T={"examples-core-react-101-item-layout-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y,i;return a()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return u=O.sent,s=u.default,O.next=6,Promise.resolve().then(e.bind(e,69581));case 6:return t=O.sent,o=t.QuestionCircleOutlined,O.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=O.sent,r=n.Popover,O.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return m=O.sent,g=m.default,O.next=22,Promise.resolve().then(e.bind(e,29298));case 22:return f=O.sent,j=function(D){var b=D.body,M=D.schema,E=D.validator,K=D.required,N=D.prefixClassNames;return P.createElement("div",{className:N("item-layout-vertical")},P.createElement("div",{className:d(N("item-header"),f.header)},K&&P.createElement("span",{className:d(N("item-mark"),f.mark)},"*"),P.createElement("span",{className:d(N("item-title"),f.title)},M.title),!!M.titleDescription&&P.createElement(r,{placement:"top",trigger:"hover",content:M.titleDescription},P.createElement(o,{className:d(N("item-title-tooltip"),f.titleTooltip)}))),P.createElement("div",{className:N("item-body")},b),P.createElement("div",{className:d(N("item-footer"),f.footer)},E.status==="error"&&!!E.message&&P.createElement("div",{className:d(N("item-error-msg"),f.errorMsg)},E.message),!!M.description&&P.createElement("div",{className:d(N("item-desc"),f.desc)},M.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},i=function(){return P.createElement(s,{schema:y,itemLayout:j,renderers:g})},O.abrupt("return",{default:i});case 27:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import classNames from 'classnames'
import renderers from './renderers/common'
import type { FC } from 'react'

import * as styles from './item-layout/Vertical/styles'

// \u5B9A\u4E49\u8868\u5355\u9879\u7EB5\u5411\u5E03\u5C40\u7ED3\u6784 (Vertical)
const Vertical: FC<IOpenItemLayoutParams> = ({
  body,
  schema,
  validator,
  required,
  // \u5BF9 classnames \u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u643A\u5E26 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5
  prefixClassNames,
}) => {
  return (
    <div className={prefixClassNames('item-layout-vertical')}>
      {/* \u5B9A\u4E49\u8868\u5355\u9879 header \u7ED3\u6784\u4E0E\u6837\u5F0F */}
      <div className={classNames(prefixClassNames('item-header'), styles.header)}>
        {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u5FC5\u586B\u300D\u72B6\u6001\u7684\u5C55\u793A */}
        {required && (
          <span className={classNames(prefixClassNames('item-mark'), styles.mark)}>
            *
          </span>
        )}
        {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u6807\u9898\u300D\u7684\u5C55\u793A */}
        <span className={classNames(prefixClassNames('item-title'), styles.title)}>
          {schema.title}
        </span>
        {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u6807\u9898\u63CF\u8FF0\u300D\u7684\u5C55\u793A\uFF0C\u5B58\u5728\u624D\u5C55\u793A */}
        {!!schema.titleDescription && (
          <Popover placement="top" trigger="hover" content={schema.titleDescription}>
            <QuestionCircleOutlined
              className={classNames(
                prefixClassNames('item-title-tooltip'),
                styles.titleTooltip
              )}
            />
          </Popover>
        )}
      </div>

      {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u4E3B\u8981\u5185\u5BB9\u300D\u7684\u5C55\u793A\uFF0Cbody \u4E3A\u6E32\u67D3\u5668\u7EC4\u4EF6 */}
      <div className={prefixClassNames('item-body')}>{body}</div>

      {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u9875\u811A\u300D\u7684\u5C55\u793A\u5185\u5BB9 */}
      <div className={classNames(prefixClassNames('item-footer'), styles.footer)}>
        {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u6821\u9A8C\u9519\u8BEF\u300D\u72B6\u6001\u7684\u5C55\u793A\uFF0C\u9519\u8BEF\u4E14\u6709\u9519\u8BEF\u4FE1\u606F\u624D\u5C55\u793A\u7EA2\u8272\u9519\u8BEF\u63D0\u793A\u4FE1\u606F */}
        {validator.status === 'error' && !!validator.message && (
          <div
            className={classNames(prefixClassNames('item-error-msg'), styles.errorMsg)}
          >
            {validator.message}
          </div>
        )}
        {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u63CF\u8FF0\u4FE1\u606F\u300D\u7684\u5C55\u793A */}
        {!!schema.description && (
          <div className={classNames(prefixClassNames('item-desc'), styles.desc)}>
            {schema.description}
          </div>
        )}
      </div>
    </div>
  )
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      titleDescription: '\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0',
      description: '\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0',
      required: true,
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26',
      },
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
    },
  },
} as const

const Demo = () => {
  return <Core schema={schema} itemLayout={Vertical} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Vertical/styles.ts":{type:"FILE",value:e(29758).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Vertical/styles.ts":A,"./renderers/common.tsx":B,"@schema-render/core-react":I,"@ant-design/icons":p,antd:W,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Vertical/styles.ts":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var v=L()(a()().mark(function s(){var t,o=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-101-item-layout-demo-1":{component:P.memo(P.lazy(L()(a()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y,i;return a()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return u=O.sent,s=u.default,O.next=6,Promise.resolve().then(e.bind(e,69581));case 6:return t=O.sent,o=t.QuestionCircleOutlined,O.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=O.sent,r=n.Popover,O.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return m=O.sent,g=m.default,O.next=22,Promise.resolve().then(e.bind(e,59868));case 22:return f=O.sent,j=function(D){var b=D.body,M=D.schema,E=D.validator,K=D.required,N=D.prefixClassNames;return P.createElement("div",{className:d(N("item-layout-horizontal"),f.horizontal)},P.createElement("div",{className:d(N("item-main"),f.main)},P.createElement("div",{className:d(N("item-header"),f.header)},K&&P.createElement("span",{className:d(N("item-mark"),f.mark)},"*"),P.createElement("span",{className:d(N("item-title"),f.title)},M.title),!!M.titleDescription&&P.createElement(r,{placement:"top",trigger:"hover",content:M.titleDescription},P.createElement(o,{className:d(N("item-title-tooltip"),f.titleTooltip)}))),P.createElement("div",{className:d(N("item-body"),f.body)},b)),P.createElement("div",{className:d(N("item-footer"),f.footer)},E.status==="error"&&!!E.message&&P.createElement("div",{className:d(N("item-error-msg"),f.errorMsg)},E.message),!!M.description&&P.createElement("div",{className:d(N("item-desc"),f.desc)},M.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},i=function(){return P.createElement(s,{schema:y,itemLayout:j,renderers:g})},O.abrupt("return",{default:i});case 27:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import classNames from 'classnames'
import renderers from './renderers/common'
import type { FC } from 'react'

import * as styles from './item-layout/Horizontal/styles'

// \u5B9A\u4E49\u8868\u5355\u9879\u6A2A\u5411\u5E03\u5C40\u7ED3\u6784 (Horizontal)
const Horizontal: FC<IOpenItemLayoutParams> = ({
  body,
  schema,
  validator,
  required,
  // \u5BF9 classnames \u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u643A\u5E26 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5
  prefixClassNames,
}) => {
  return (
    <div
      className={classNames(
        prefixClassNames('item-layout-horizontal'),
        styles.horizontal
      )}
    >
      <div className={classNames(prefixClassNames('item-main'), styles.main)}>
        {/* \u5B9A\u4E49\u8868\u5355\u9879 header \u7ED3\u6784\u4E0E\u6837\u5F0F */}
        <div className={classNames(prefixClassNames('item-header'), styles.header)}>
          {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u5FC5\u586B\u300D\u72B6\u6001\u7684\u5C55\u793A */}
          {required && (
            <span className={classNames(prefixClassNames('item-mark'), styles.mark)}>
              *
            </span>
          )}
          {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u6807\u9898\u300D\u7684\u5C55\u793A */}
          <span className={classNames(prefixClassNames('item-title'), styles.title)}>
            {schema.title}
          </span>
          {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u6807\u9898\u63CF\u8FF0\u300D\u7684\u5C55\u793A\uFF0C\u5B58\u5728\u624D\u5C55\u793A */}
          {!!schema.titleDescription && (
            <Popover placement="top" trigger="hover" content={schema.titleDescription}>
              <QuestionCircleOutlined
                className={classNames(
                  prefixClassNames('item-title-tooltip'),
                  styles.titleTooltip
                )}
              />
            </Popover>
          )}
        </div>

        {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u4E3B\u8981\u5185\u5BB9\u300D\u7684\u5C55\u793A\uFF0Cbody \u4E3A\u6E32\u67D3\u5668\u7EC4\u4EF6 */}
        <div className={classNames(prefixClassNames('item-body'), styles.body)}>
          {body}
        </div>
      </div>

      {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u9875\u811A\u300D\u7684\u5C55\u793A\u5185\u5BB9 */}
      <div className={classNames(prefixClassNames('item-footer'), styles.footer)}>
        {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u6821\u9A8C\u9519\u8BEF\u300D\u72B6\u6001\u7684\u5C55\u793A\uFF0C\u9519\u8BEF\u4E14\u6709\u9519\u8BEF\u4FE1\u606F\u624D\u5C55\u793A\u7EA2\u8272\u9519\u8BEF\u63D0\u793A\u4FE1\u606F */}
        {validator.status === 'error' && !!validator.message && (
          <div
            className={classNames(prefixClassNames('item-error-msg'), styles.errorMsg)}
          >
            {validator.message}
          </div>
        )}
        {/* \u5B9A\u4E49\u8868\u5355\u9879\u300C\u63CF\u8FF0\u4FE1\u606F\u300D\u7684\u5C55\u793A */}
        {!!schema.description && (
          <div className={classNames(prefixClassNames('item-desc'), styles.desc)}>
            {schema.description}
          </div>
        )}
      </div>
    </div>
  )
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      titleDescription: '\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0',
      description: '\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0',
      required: true,
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26',
      },
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
    },
  },
} as const

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal/styles.ts":{type:"FILE",value:e(52551).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal/styles.ts":R,"./renderers/common.tsx":B,"@schema-render/core-react":I,"@ant-design/icons":p,antd:W,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/styles.ts":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var v=L()(a()().mark(function s(){var t,o=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},83222:function(G,c,e){e.r(c),e.d(c,{demos:function(){return x}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(86131),I=e(74072),p=e(2862),W=e(78469),x={"examples-core-react-102-prefix-cls-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function $(){var A,B,R,T,v,u,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,B=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,T=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return P.createElement(B,{schema:s,itemLayout:T,renderers:u,prefixCls:"my-cls"})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-102-prefix-cls-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '\u5BBD\u5EA6',
      renderType: 'InputNumber',
    },
    height: {
      title: '\u9AD8\u5EA6',
      renderType: 'InputNumber',
    },
    left: {
      title: '\u6C34\u5E73\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
    top: {
      title: '\u5782\u76F4\u4F4D\u7F6E',
      renderType: 'InputNumber',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
      prefixCls="my-cls"
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var $=L()(a()().mark(function B(){var R,T=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(R=u.sent).default.apply(R,T));case 3:case"end":return u.stop()}},B)}));function A(){return $.apply(this,arguments)}return A}()}}}},81235:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return u}});var a=e(97857),h=e.n(a),L=e(15009),P=e.n(L),H=e(5574),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(15208),A=e(74072),B=e(41989),R=e(78469),T=e(2862),v=e(48201),u={"examples-core-react-200-change-event-demo-0":{component:x.memo(x.lazy(W()(P()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=O.sent,o=t.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=O.sent,g=m.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var D=o({}),b=I()(D,2),M=b[0],E=b[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,value:M,onChange:function(N){return E(N)}}),x.createElement(d,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        // \u8BBE\u7F6E\u8868\u5355\u5168\u91CF\u6570\u636E
        value={value}
        // \u63A5\u6536\u8868\u5355\u5168\u91CF\u6570\u636E
        onChange={(val) => setValue(val)}
      />

      {/* \u6253\u5370\u8868\u5355\u5168\u91CF\u6570\u636E */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":T,react:S||(S=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=W()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-1":{component:x.memo(x.lazy(W()(P()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=O.sent,o=t.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=O.sent,g=m.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var D=o({}),b=I()(D,2),M=b[0],E=b[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,onChange:function(N,V){return E(V)}}),x.createElement(d,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
    },
  },
} as const

const Demo = () => {
  const [eventInfo, setEventInfo] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        // \u63A5\u6536\u4E8B\u4EF6\u4FE1\u606F
        onChange={(_val, event) => setEventInfo(event)}
      />

      {/* \u6253\u5370\u4E8B\u4EF6\u4FE1\u606F */}
      <SyntaxHighlighter value={eventInfo} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":T,react:S||(S=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=W()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-2":{component:x.memo(x.lazy(W()(P()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i;return P()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=O.sent,o=t.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,r=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=O.sent,g=m.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var D=o({}),b=I()(D,2),M=b[0],E=b[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,onItemChange:function(N){return E(N)}}),x.createElement(d,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
    },
  },
} as const

const Demo = () => {
  const [eventInfo, setEventInfo] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        // \u63A5\u6536\u4E8B\u4EF6\u4FE1\u606F
        onItemChange={(event) => setEventInfo(event)}
      />

      {/* \u6253\u5370\u4E8B\u4EF6\u4FE1\u606F */}
      <SyntaxHighlighter value={eventInfo} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":T,react:S||(S=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T},renderOpts:{compile:function(){var s=W()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-200-change-event-demo-3":{component:x.memo(x.lazy(W()(P()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D;return P()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=M.sent,o=t.useState,M.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=M.sent,r=n.Input,M.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return l=M.sent,d=l.default,M.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return m=M.sent,g=m.default,M.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return f=M.sent,j=f.default,M.next=22,Promise.resolve().then(e.bind(e,78469));case 22:return y=M.sent,i=y.default,C={component:function(K){var N,V=K.schema,U=K.value,z=K.disabled,Z=K.onChange;return x.createElement(r,h()(h()({placeholder:"\u8BF7\u8F93\u5165".concat((N=V.title)!==null&&N!==void 0?N:"")},V.renderOptions),{},{value:U,disabled:z,onChange:function(X){Z(X.target.value,{extra:Math.random()})}}))}},O=h()({InputTextWithExtra:C},j),_={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputTextWithExtra"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},D=function(){var K=o({}),N=I()(K,2),V=N[0],U=N[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(d,{schema:_,itemLayout:i,renderers:O,onItemChange:function(Z){return U(Z)}}),x.createElement(g,{value:V}))},M.abrupt("return",{default:D});case 29:case"end":return M.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { Input } from 'antd'
import Core, { IRenderer } from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

// \u793A\u4F8B\uFF1A\u5B9A\u4E49\u643A\u5E26\u989D\u5916\u4FE1\u606F\u7684\u6E32\u67D3\u5668
const InputTextWithExtra: IRenderer = {
  component: ({ schema, value, disabled, onChange }) => {
    return (
      <Input
        placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
        {...schema.renderOptions}
        value={value}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.value, {
            // \u5728 change \u7684\u65F6\u5019\u643A\u5E26\u989D\u5916\u4FE1\u606F
            extra: Math.random(),
          })
        }}
      />
    )
  },
}

// \u6CE8\u518C\u6E32\u67D3\u5668
const myRenderers = { InputTextWithExtra, ...renderers }

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputTextWithExtra',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
    },
  },
} as const

const Demo = () => {
  const [eventInfo, setEventInfo] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={myRenderers}
        // \u63A5\u6536\u4E8B\u4EF6\u4FE1\u606F
        onItemChange={(event) => setEventInfo(event)}
      />

      {/* \u6253\u5370\u4E8B\u4EF6\u4FE1\u606F */}
      <SyntaxHighlighter value={eventInfo} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":T,"./item-layout/Horizontal.tsx":R,react:S||(S=e.t(x,2)),antd:v,"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var s=W()(P()().mark(function o(){var n,r=arguments;return P()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}}}},58297:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(233),x=e(74072),$=e(41989),A=e(78469),B=e(2862),R=e(48201),T={"examples-core-react-210-relation-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return l=i.sent,d=l.default,i.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},j=function(){var O=s({}),_=P()(O,2),D=_[0],b=_[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:f,itemLayout:g,renderers:d,value:D,onChange:function(E,K){(K.sPath==="width"||K.sPath==="height")&&(E.width=K.value,E.height=K.value),b(E)}}),p.createElement(r,{value:D}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '\u5BBD\u5EA6',
      renderType: 'InputNumber',
    },
    height: {
      title: '\u9AD8\u5EA6',
      renderType: 'InputNumber',
    },
    x: {
      title: '\u6A2A\u5750\u6807',
      renderType: 'InputNumber',
    },
    y: {
      title: '\u7EB5\u5750\u6807',
      renderType: 'InputNumber',
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        /* \u4F20\u9012\u8868\u5355\u6570\u636E */
        value={value}
        /* \u76D1\u542C\u4E8B\u4EF6\u5E76\u5904\u7406\u8054\u52A8\u5173\u7CFB */
        onChange={(formData, event) => {
          // \u5BBD\u5EA6\u6216\u9AD8\u5EA6\u53D8\u5316\u65F6\uFF0C\u8054\u52A8\u6570\u636E\u4FDD\u6301\u4E00\u81F4
          if (event.sPath === 'width' || event.sPath === 'height') {
            formData.width = event.value
            formData.height = event.value
          }

          // \u8BBE\u7F6E\u8868\u5355\u6570\u636E
          setValue(formData)
        }}
      />

      {/* \u6253\u5370\u8868\u5355\u6570\u636E */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":B,react:S||(S=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-210-relation-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return l=i.sent,d=l.default,i.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},j=function(){var O=s({}),_=P()(O,2),D=_[0],b=_[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:f,itemLayout:g,renderers:d,watch:{width:function(E){E.height=E.width},height:function(E){E.width=E.height}},value:D,onChange:b}),p.createElement(r,{value:D}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema = {
  renderType: 'Root',
  properties: {
    width: {
      title: '\u5BBD\u5EA6',
      renderType: 'InputNumber',
    },
    height: {
      title: '\u9AD8\u5EA6',
      renderType: 'InputNumber',
    },
    x: {
      title: '\u6A2A\u5750\u6807',
      renderType: 'InputNumber',
    },
    y: {
      title: '\u7EB5\u5750\u6807',
      renderType: 'InputNumber',
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        /* \u5904\u7406\u8054\u52A8\u5173\u7CFB\uFF1A\u76D1\u542C\u5BBD\u9AD8\u53D8\u5316\uFF0C\u8054\u52A8\u5BBD\u9AD8\u6570\u636E\u4FDD\u6301\u4E00\u81F4 */
        watch={{
          width: (formData) => {
            formData.height = formData.width
          },
          height: (formData) => {
            formData.width = formData.height
          },
        }}
        /* \u4F20\u9012\u8868\u5355\u6570\u636E */
        value={value}
        /* \u63A5\u6536\u8868\u5355\u6570\u636E */
        onChange={setValue}
      />

      {/* \u6253\u5370\u8868\u5355\u6570\u636E */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":B,react:S||(S=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-210-relation-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=O.sent,s=u.useState,O.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=O.sent,o=t.Button,O.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return n=O.sent,r=n.default,O.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=O.sent,g=m.default,f={BankSelect:{component:function(D){var b=D.value,M=D.sPath,E=D.onChange,K=function(){var U=String(Math.random()).slice(2,6),z={bank_id:"id_".concat(U),bank_account:"111222333".concat(U),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(U),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(U,"\u652F\u884C")};E(z[M],{extra:z})},N={display:"flex",width:160,padding:"4px 10px",marginRight:10,border:"1px solid #ececec",borderRadius:6};return p.createElement("div",{style:{display:"flex"}},p.createElement("div",{style:N},b),p.createElement(o,{onClick:K},"\u9009\u62E9\u8D26\u6237"))}}},j={renderType:"Root",properties:{bank_account:{title:"\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},bank_name:{title:"\u5F00\u6237\u94F6\u884C",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C",renderType:"BankSelect"}}},y=function(D,b){D.bank_id=b.extra.bank_id,D.bank_account=b.extra.bank_account,D.bank_name=b.extra.bank_name,D.bank_branch_name=b.extra.bank_branch_name},i=function(){var D=s({}),b=P()(D,2),M=b[0],E=b[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:j,itemLayout:g,renderers:f,watch:{bank_account:y,bank_name:y,bank_branch_name:y},value:M,onChange:E}),p.createElement(d,{value:M}))},O.abrupt("return",{default:i});case 25:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
import { Button } from 'antd'
import Core from '@schema-render/core-react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import Horizontal from './item-layout/Horizontal'

const renderers = {
  BankSelect: {
    component: ({ value, sPath, onChange }) => {
      const handleBankSelect = () => {
        const random = String(Math.random()).slice(2, 6)
        const bankData = {
          bank_id: \`id_\${random}\`,
          bank_account: \`111222333\${random}\`,
          bank_name: \`\u62DB\u8D22\u732B\u94F6\u884C\${random}\`,
          bank_branch_name: \`\u62DB\u8D22\u732B\u6210\u90FD\${random}\u652F\u884C\`,
        }
        // \u94F6\u884C\u8D26\u6237\u6570\u636E\u901A\u8FC7 extra \u5C5E\u6027\u900F\u4F20\u5230\u5916\u90E8\u7528\u4E8E\u8054\u52A8\u5904\u7406
        onChange(bankData[sPath], {
          extra: bankData,
        })
      }

      const style = {
        display: 'flex',
        width: 160,
        padding: '4px 10px',
        marginRight: 10,
        border: '1px solid #ececec',
        borderRadius: 6,
      }

      return (
        <div style={{ display: 'flex' }}>
          {/* \u5C55\u793A\u5F53\u524D\u8868\u5355\u9879\u503C */}
          <div style={style}>{value}</div>
          <Button onClick={handleBankSelect}>\u9009\u62E9\u8D26\u6237</Button>
        </div>
      )
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    bank_account: {
      title: '\u94F6\u884C\u8D26\u53F7',
      renderType: 'BankSelect',
    },
    bank_name: {
      title: '\u5F00\u6237\u94F6\u884C',
      renderType: 'BankSelect',
    },
    bank_branch_name: {
      title: '\u5F00\u6237\u652F\u884C',
      renderType: 'BankSelect',
    },
  },
}

// \u8054\u52A8\u903B\u8F91\u5904\u7406
const bankRelation = (formData, event) => {
  formData.bank_id = event.extra.bank_id
  formData.bank_account = event.extra.bank_account
  formData.bank_name = event.extra.bank_name
  formData.bank_branch_name = event.extra.bank_branch_name
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        /* \u76D1\u542C\u5173\u8054\u8868\u5355\u9879\u53D8\u5316\uFF0C\u8054\u52A8\u903B\u8F91\u5904\u7406 */
        watch={{
          bank_account: bankRelation,
          bank_name: bankRelation,
          bank_branch_name: bankRelation,
        }}
        value={value}
        onChange={setValue}
      />

      {/* \u6253\u5370\u8868\u5355\u6570\u636E */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":A,react:S||(S=e.t(p,2)),antd:R,"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},33632:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return T}});var a=e(5574),h=e.n(a),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(39008),A=e(48201),B=e(74072),R=e(78469),T={"examples-core-react-220-renderer-demo-0":{component:x.memo(x.lazy(W()(I()().mark(function v(){var u,s,t,o,n,r,l,d,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return u=f.sent,s=u.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=f.sent,o=t.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,l={MyRate:{component:function(y){var i=y.disabled,C=y.value,O=y.onChange;return x.createElement(s,{disabled:i,value:C,onChange:O})}}},d={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},m=function(){return x.createElement(o,{schema:d,itemLayout:r,renderers:l})},f.abrupt("return",{default:m});case 16:case"end":return f.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
import Core from '@schema-render/core-react'
import type { IRenderers, IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'

const renderers: IRenderers = {
  // \u5B9A\u4E49\u6E32\u67D3\u5668\u540D\u79F0
  MyRate: {
    // \u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9\uFF0C\u5982\u679C\u5C5E\u6027\u4E00\u81F4\uFF0C\u4EA6\u53EF\u5199\u6210\u8FD9\u6837 component: Rate
    component: ({ disabled, value, onChange }) => {
      return <Rate disabled={disabled} value={value} onChange={onChange} />
    },
  },
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    rate: {
      title: '\u8BC4\u5206',
      // \u4F7F\u7528\u5BF9\u5E94\u6E32\u67D3\u5668\u540D\u79F0
      renderType: 'MyRate',
    },
  },
}

const Demo = () => {
  return (
    <Core
      schema={schema}
      itemLayout={Horizontal}
      /* \u6CE8\u518C\u6E32\u67D3\u5668 */
      renderers={renderers}
    />
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,antd:A,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var v=W()(I()().mark(function s(){var t,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-220-renderer-demo-1":{component:x.memo(x.lazy(W()(I()().mark(function v(){var u,s,t,o,n,r,l,d,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return u=f.sent,s=u.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=f.sent,o=t.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,l={MyRate:{formItem:function(y){var i=y.schema,C=y.disabled,O=y.value,_=y.onChange;return x.createElement("div",null,x.createElement("strong",{style:{color:"red",marginRight:10}},"\u3010",i.title,"\u3011"),x.createElement(s,{disabled:C,value:O,onChange:_}))}}},d={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},m=function(){return x.createElement(o,{schema:d,itemLayout:r,renderers:l})},f.abrupt("return",{default:m});case 16:case"end":return f.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
import Core from '@schema-render/core-react'
import type { IRenderers, IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'

const renderers: IRenderers = {
  // \u5B9A\u4E49\u6E32\u67D3\u5668\u540D\u79F0
  MyRate: {
    // formItem \u6A21\u5F0F\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9
    formItem: ({ schema, disabled, value, onChange }) => {
      return (
        <div>
          <strong style={{ color: 'red', marginRight: 10 }}>\u3010{schema.title}\u3011</strong>
          <Rate disabled={disabled} value={value} onChange={onChange} />
        </div>
      )
    },
  },
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    rate: {
      title: '\u8BC4\u5206',
      // \u4F7F\u7528\u5BF9\u5E94\u6E32\u67D3\u5668\u540D\u79F0
      renderType: 'MyRate',
    },
  },
}

const Demo = () => {
  return (
    <Core
      schema={schema}
      itemLayout={Horizontal}
      /* \u6CE8\u518C\u6E32\u67D3\u5668 */
      renderers={renderers}
    />
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,antd:A,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var v=W()(I()().mark(function s(){var t,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-core-react-220-renderer-demo-2":{component:x.memo(x.lazy(W()(I()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return l=i.sent,d=l.Button,m=l.Input,g={InputText:{component:function(O){var _,D=O.schema,b=O.value,M=O.disabled,E=O.readonly,K=O.onChange;return E?x.createElement("div",null,b):x.createElement(m,P()(P()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((_=D.title)!==null&&_!==void 0?_:"")},D.renderOptions),{},{value:b!=null?b:"",disabled:M,onChange:function(V){return K(V.target.value)}}))}},TextArea:{component:function(O){var _,D=O.schema,b=O.value,M=O.disabled,E=O.onChange;return x.createElement(m.TextArea,P()(P()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((_=D.title)!==null&&_!==void 0?_:"")},D.renderOptions),{},{value:b!=null?b:"",onChange:function(N){return E(N.target.value)},disabled:M}))},readonlyComponent:function(O){var _=O.value;return x.createElement("div",null,_)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},j=function(){var O=s(!1),_=h()(O,2),D=_[0],b=_[1],M=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),E=h()(M,2),K=E[0],N=E[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(o,{schema:f,itemLayout:r,renderers:g,value:K,onChange:N,readonly:D}),x.createElement(d,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return b(!D)}},D?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import { Button, Input } from 'antd'

const renderers = {
  InputText: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      // \u5728 component \u7EC4\u4EF6\u91CC\u5199\u53EA\u8BFB\u6001\u903B\u8F91
      if (readonly) {
        return <div>{value}</div>
      }

      return (
        <Input
          allowClear
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value ?? ''}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input.TextArea
          rows={3}
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      )
    },
    // \u901A\u8FC7 readonlyComponent \u58F0\u660E\uFF0C\u53EF\u4EE5\u51CF\u5C11 if \u8BED\u53E5\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u7EC4\u4EF6\u907F\u514D\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002
    readonlyComponent: ({ value }) => {
      return <div>{value}</div>
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
    },
  },
}

const Demo = () => {
  const [isReadonly, setIsReadonly] = useState(false)
  const [value, setValue] = useState({
    title: 'SchemaRender \u662F\u4EC0\u4E48',
    content: 'SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848',
  })

  return (
    <div style={{ maxWidth: 500 }}>
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        value={value}
        onChange={setValue}
        readonly={isReadonly}
      />
      <Button
        style={{ margin: '20px 0 0 115px' }}
        type="primary"
        onClick={() => setIsReadonly(!isReadonly)}
      >
        {isReadonly ? '\u53D6\u6D88' : '\u5207\u6362\u5230'} readonly \u72B6\u6001
      </Button>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":R,react:S||(S=e.t(x,2)),"@schema-render/core-react":B,antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var v=W()(I()().mark(function s(){var t,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},95902:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return v}});var a=e(15009),h=e.n(a),L=e(97857),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(37424),x=e(48201),$=e(74072),A=e(33517),B=e(78469),R=e(47621),T=e(40644),v={"examples-core-react-221-renderer-object-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C;return h()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=_.sent,t=s.Input,_.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=_.sent,n=o.default,_.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=_.sent,l=r.default,_.next=14,Promise.resolve().then(e.bind(e,47621));case 14:return d=_.sent,m=d.default,_.next=18,Promise.resolve().then(e.bind(e,40644));case 18:return g=_.sent,f=g.default,_.next=22,Promise.resolve().then(e.bind(e,33517));case 22:return j=_.sent,y=j.default,i={Object:y,ObjectCollapse:f,InputText:{component:function(b){var M,E=b.schema,K=b.value,N=b.disabled,V=b.onChange;return p.createElement(t,P()(P()({placeholder:"\u8BF7\u8F93\u5165".concat((M=E.title)!==null&&M!==void 0?M:"")},E.renderOptions),{},{value:K,disabled:N,onChange:function(z){return V(z.target.value)}}))}}},C=function(){return p.createElement(n,{schema:m,itemLayout:l,renderers:i})},_.abrupt("return",{default:C});case 27:case"end":return _.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Input } from 'antd'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import schema from './schemas/object'

import ObjectCollapse from './renderers/object/ObjectCollapse'
import Object from './renderers/object/ObjectNormal'

const renderers = {
  // \u6CE8\u518C\u300C\u5E38\u89C4\u7684\u300D\u5BF9\u8C61\u7C7B\u578B\u6E32\u67D3\u5668
  Object,

  // \u6CE8\u518C\u300C\u53EF\u6298\u53E0\u7684\u300D\u5BF9\u8C61\u7C7B\u578B\u6E32\u67D3\u5668
  ObjectCollapse,

  InputText: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.jsx"},context:{"./renderers/object/ObjectNormal.tsx":A,"./item-layout/Horizontal.tsx":B,"./schemas/object.ts":R,"./renderers/object/ObjectCollapse.tsx":T,antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":T},renderOpts:{compile:function(){var u=I()(h()().mark(function t(){var o,n=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-core-react-221-renderer-object-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b,M;return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=K.sent,t=s.Input,K.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return o=K.sent,n=o.useRef,K.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return r=K.sent,l=r.default,K.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return d=K.sent,m=d.Button,g=d.message,K.next=19,Promise.resolve().then(e.bind(e,78469));case 19:return f=K.sent,j=f.default,K.next=23,Promise.resolve().then(e.bind(e,47621));case 23:return y=K.sent,i=y.default,K.next=27,Promise.resolve().then(e.bind(e,40644));case 27:return C=K.sent,O=C.default,K.next=31,Promise.resolve().then(e.bind(e,33517));case 31:return _=K.sent,D=_.default,b={Object:D,ObjectCollapse:O,InputText:{component:function(V){var U,z=V.schema,Z=V.value,w=V.disabled,X=V.onChange;return p.createElement(t,P()(P()({placeholder:"\u8BF7\u8F93\u5165".concat((U=z.title)!==null&&U!==void 0?U:"")},z.renderOptions),{},{value:Z,disabled:w,onChange:function(te){return X(te.target.value)}}))}}},M=function(){var V=n(null),U=function(){var z=I()(h()().mark(function Z(){var w,X,ae;return h()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,(w=V.current)===null||w===void 0?void 0:w.validate();case 2:X=ue.sent,ae=X.hasError,ae||g.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return ue.stop()}},Z)}));return function(){return z.apply(this,arguments)}}();return p.createElement("div",null,p.createElement(l,{ref:V,schema:i,itemLayout:j,renderers:b}),p.createElement(m,{type:"primary",onClick:U,style:{marginTop:15}},"\u63D0\u4EA4"))},K.abrupt("return",{default:M});case 36:case"end":return K.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd'
import { useRef } from 'react'
import Core from '@schema-render/core-react'
import { Button, message } from 'antd'
import Horizontal from './item-layout/Horizontal'
import schema from './schemas/object'
import type { ICoreRef, IRenderers, IObjectSchema } from '@schema-render/core-react'

import ObjectCollapse from './renderers/object/ObjectCollapse'
import Object from './renderers/object/ObjectNormal'

const renderers: IRenderers<any, IObjectSchema> = {
  // \u6CE8\u518C\u300C\u5E38\u89C4\u7684\u300D\u5BF9\u8C61\u7C7B\u578B\u6E32\u67D3\u5668
  Object,

  // \u6CE8\u518C\u300C\u53EF\u6298\u53E0\u7684\u300D\u5BF9\u8C61\u7C7B\u578B\u6E32\u67D3\u5668
  ObjectCollapse,

  InputText: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
}

const Demo = () => {
  const coreRef = useRef<ICoreRef>(null)

  const handleSubmit = async () => {
    const { hasError } = await coreRef.current?.validate()!

    if (!hasError) {
      // \u63D0\u4EA4\u6570\u636E...
      message.success('\u63D0\u4EA4\u6210\u529F')
    }
  }

  return (
    <div>
      <Core ref={coreRef} schema={schema} itemLayout={Horizontal} renderers={renderers} />
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: 15 }}>
        \u63D0\u4EA4
      </Button>
    </div>
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":A,"./item-layout/Horizontal.tsx":B,"./schemas/object.ts":R,"./renderers/object/ObjectCollapse.tsx":T,antd:x,react:S||(S=e.t(p,2)),"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":T},renderOpts:{compile:function(){var u=I()(h()().mark(function t(){var o,n=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}}}},93609:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(48966),h={}},90239:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return v}});var a=e(5574),h=e.n(a),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(92436),A=e(74072),B=e(2862),R=e(78469),T=e(48201),v={"examples-core-react-223-validator-demo-0":{component:x.memo(x.lazy(W()(I()().mark(function u(){var s,t,o,n,r,l,d,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=f.sent,t=s.default,f.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=f.sent,n=o.default,f.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=f.sent,l=r.default,d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},m=function(){return x.createElement(t,{schema:d,itemLayout:n,renderers:l})},f.abrupt("return",{default:m});case 15:case"end":return f.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
      // \u901A\u8FC7 rules \u5C5E\u6027\u58F0\u660E\u6821\u9A8C\u89C4\u5219
      rules: [
        { max: 10, message: '\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26' },
        { pattern: '^[a-zA-Z\\\\d]+$', message: '\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57' },
      ],
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      // rules \u5185\u7684 required \u4E0E\u540C\u7EA7\u7684 required \u529F\u80FD\u4E00\u81F4
      rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u5185\u5BB9' }],
    },
  },
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":R,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var u=W()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-1":{component:x.memo(x.lazy(W()(I()().mark(function u(){var s,t,o,n,r,l,d,m,g,f;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=y.sent,t=s.default,y.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=y.sent,n=o.default,y.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=y.sent,l=r.default,d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{validator:"detectSensitiveWord"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,rules:[{validator:"detectSensitiveWord",message:"TIPS: \u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\u54E6"}]}}},m=function(){var i=W()(I()().mark(function C(O){return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",new Promise(function(b){setTimeout(function(){return b({ok:!1})},200)}));case 1:case"end":return D.stop()}},C)}));return function(O){return i.apply(this,arguments)}}(),g={detectSensitiveWord:function(){var i=W()(I()().mark(function O(_){var D,b;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return D=_.value,E.next=3,m(D);case 3:if(b=E.sent,b.ok){E.next=6;break}return E.abrupt("return",{status:"error",message:"\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD"});case 6:case"end":return E.stop()}},O)}));function C(O){return i.apply(this,arguments)}return C}()},f=function(){return x.createElement(t,{schema:d,itemLayout:n,renderers:l,validators:g})},y.abrupt("return",{default:f});case 17:case"end":return y.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import type { IValidators, IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
      rules: [
        { max: 10, message: '\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26' },
        // \u4F7F\u7528\u5168\u5C40\u6821\u9A8C\u5668\uFF0C\u9519\u8BEF\u63D0\u793A\u8BED\u6765\u81EA\u6821\u9A8C\u5668
        { validator: 'detectSensitiveWord' },
      ],
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
      // \u6307\u5B9A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u7684\u6743\u91CD\u66F4\u9AD8
      rules: [{ validator: 'detectSensitiveWord', message: 'TIPS: \u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\u54E6' }],
    },
  },
}

const DSW = async (_value: string) => {
  return new Promise<{ ok: boolean }>((resolve) => {
    setTimeout(() => resolve({ ok: false }), 200)
  })
}

// \u58F0\u660E\u5168\u5C40\u6821\u9A8C\u5668
const globalValidators: IValidators = {
  // \u51FD\u6570\u53C2\u6570\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3\u6587\u6863\u5E95\u90E8\u300CAPI \u5217\u8868\u300D
  detectSensitiveWord: async ({ value }) => {
    // \u8C03\u7528\u5F02\u6B65\u63A5\u53E3\u9A8C\u8BC1\u6570\u636E
    const res = await DSW(value)

    if (!res.ok) {
      return {
        status: 'error',
        message: '\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD',
      }
    }
  },
}

const Demo = () => {
  return (
    <Core
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
      /* \u6CE8\u518C\u5168\u5C40\u6821\u9A8C\u5668 */
      validators={globalValidators}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":R,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var u=W()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-2":{component:x.memo(x.lazy(W()(I()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y;return I()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=C.sent,t=s.Rate,C.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=C.sent,n=o.default,C.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=C.sent,l=r.default,C.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return d=C.sent,m=d.default,g={component:function(_){var D=_.schema,b=_.value,M=_.disabled,E=_.onChange;return x.createElement(t,P()(P()({},D.renderOptions),{},{value:b,disabled:M,onChange:function(N){return E(N)}}))},validator:function(_){var D=_.value;return D===0?{status:"error",message:"\u8BF7\u9009\u62E9\u8BC4\u5206"}:D<=3?{status:"error",message:"\u4EB2\uFF0C\u8BC4\u5206\u53EF\u4EE5\u6253\u9AD8\u4E00\u70B9\u54E6\u{1F62F}"}:{status:"error",message:"\u54C7\uFF0Cnice~"}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"},rate:{renderType:"Rate",title:"\u8BC4\u5206",required:!0}}},j=P()(P()({},m),{},{Rate:g}),y=function(){return x.createElement(n,{schema:f,itemLayout:l,renderers:j})},C.abrupt("return",{default:y});case 21:case"end":return C.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
import Core from '@schema-render/core-react'
import type { IRenderer, IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import commonRenderers from './renderers/common'

// \u5B9A\u4E49\u8BC4\u5206\u6E32\u67D3\u5668
const RateRenderer: IRenderer = {
  component: ({ schema, value, disabled, onChange }) => {
    return (
      <Rate
        {...schema.renderOptions}
        value={value}
        disabled={disabled}
        onChange={(val) => onChange(val)}
      />
    )
  },
  validator: ({ value }) => {
    if (value === 0) {
      return {
        status: 'error',
        message: '\u8BF7\u9009\u62E9\u8BC4\u5206',
      }
    }
    if (value <= 3) {
      return {
        status: 'error',
        message: '\u4EB2\uFF0C\u8BC4\u5206\u53EF\u4EE5\u6253\u9AD8\u4E00\u70B9\u54E6\u{1F62F}',
      }
    }
    return {
      status: 'error',
      message: '\u54C7\uFF0Cnice~',
    }
  },
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
    },
    rate: {
      // \u6307\u5B9A\u8BC4\u5206\u6E32\u67D3\u5668\uFF0C\u4F1A\u81EA\u52A8\u7ED1\u5B9A\u5185\u90E8\u7684\u6821\u9A8C\u80FD\u529B
      renderType: 'Rate',
      title: '\u8BC4\u5206',
      required: true,
    },
  },
}

const renderers = {
  ...commonRenderers,
  // \u6CE8\u518C\u8BC4\u5206\u6E32\u67D3\u5668
  Rate: RateRenderer,
}

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":R,antd:T,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var u=W()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-3":{component:x.memo(x.lazy(W()(I()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C;return I()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=_.sent,t=s.useState,o=s.useRef,_.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return n=_.sent,r=n.Button,l=n.message,_.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return d=_.sent,m=d.default,_.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return g=_.sent,f=g.default,_.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return j=_.sent,y=j.default,i={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},C=function(){var b=t({}),M=h()(b,2),E=M[0],K=M[1],N=o(null);function V(){return U.apply(this,arguments)}function U(){return U=W()(I()().mark(function z(){var Z,w,X;return I()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,N.current.validate();case 2:if(Z=te.sent,w=Z.hasError,X=Z.errorList,console.log("[validate] hasError: ",w),console.log("[validate] errorList: ",X),!w){te.next=9;break}return te.abrupt("return",l.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:l.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return te.stop()}},z)})),U.apply(this,arguments)}return x.createElement("div",null,x.createElement(m,{ref:N,schema:i,value:E,onChange:K,itemLayout:y,renderers:f}),x.createElement(r,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:V},"\u63D0\u4EA4"))},_.abrupt("return",{default:C});case 25:case"end":return _.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import { Button, message } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
      rules: [
        { max: 10, message: '\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26' },
        { pattern: '^[a-zA-Z\\\\d]+$', message: '\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57' },
      ],
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u5185\u5BB9' }],
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  // \u63D0\u4EA4\u903B\u8F91\u5904\u7406
  async function handleSubmit() {
    const { hasError, errorList } = await coreRef.current!.validate()

    console.log('[validate] hasError: ', hasError)
    console.log('[validate] errorList: ', errorList)

    if (hasError) {
      return message.error('\u9A8C\u8BC1\u9519\u8BEF')
    }

    message.success('\u9A8C\u8BC1\u6210\u529F')

    // \u9A8C\u8BC1\u6210\u529F\u540E\uFF0C\u63D0\u4EA4\u6570\u636E...
  }

  return (
    <div>
      <Core
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Button type="primary" style={{ margin: '24px 0 0 115px' }} onClick={handleSubmit}>
        \u63D0\u4EA4
      </Button>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":B,react:S||(S=e.t(x,2)),antd:T,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var u=W()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}}}},61022:function(G,c,e){e.r(c),e.d(c,{demos:function(){return x}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(86685),I=e(74072),p=e(2862),W=e(78469),x={"examples-core-react-230-global-status-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function $(){var A,B,R,T,v,u,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,B=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,T=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return P.createElement(B,{disabled:!0,schema:s,itemLayout:T,renderers:u})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-230-global-status-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26',
      },
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      /* \u8BBE\u7F6E\u8868\u5355\u4E3A\u7981\u7528\u6001 */
      disabled
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var $=L()(a()().mark(function B(){var R,T=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(R=u.sent).default.apply(R,T));case 3:case"end":return u.stop()}},B)}));function A(){return $.apply(this,arguments)}return A}()}}}},61650:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return u}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(43315),A=e(48201),B=e(74072),R=e(33517),T=e(2862),v=e(78469),u={"examples-core-react-250-scroll-demo-0":{component:x.memo(x.lazy(W()(h()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=E.sent,o=t.useState,n=t.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,l=r.Button,d=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,O=C.default,_=I()(I()({},j),{},{Object:O}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},b=function(){var N=o({}),V=P()(N,2),U=V[0],z=V[1],Z=n(null);return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(g,{style:{maxWidth:500,flexGrow:1,height:500,padding:"10px 5px",border:"1px solid #ccc",overflow:"auto"},ref:Z,schema:D,value:U,onChange:z,itemLayout:i,renderers:_}),x.createElement(d,{direction:"vertical"},x.createElement(l,{onClick:function(){var X;return(X=Z.current)===null||X===void 0?void 0:X.scrollTo("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(l,{onClick:function(){var X;(X=Z.current)===null||X===void 0||X.scrollTo(["object_spec","title"],{gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(l,{onClick:function(){var X;(X=Z.current)===null||X===void 0||X.scrollTo("object_other.content",{xAxis:!1})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011")))},E.abrupt("return",{default:b});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import { Button, Space } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import comRenderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'
import Object from './renderers/object/ObjectNormal'

const renderers = {
  ...comRenderers,
  Object: Object as never,
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
      renderOptions: { rows: 10 },
    },
    object_basic: {
      title: '\u57FA\u7840\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u57FA\u7840\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u57FA\u7840\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_spec: {
      title: '\u89C4\u683C\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u89C4\u683C\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u89C4\u683C\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_service: {
      title: '\u670D\u52A1\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u670D\u52A1\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u670D\u52A1\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_other: {
      title: '\u5176\u4ED6\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u5176\u4ED6\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u5176\u4ED6\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  return (
    <div
      style={{
        display: 'flex',
        columnGap: 20,
      }}
    >
      <Core
        style={{
          maxWidth: 500,
          flexGrow: 1,
          height: 500,
          padding: '10px 5px',
          border: '1px solid #ccc',
          // \u8BBE\u7F6E Core \u6839\u8282\u70B9\u5143\u7D20\u6EDA\u52A8
          overflow: 'auto',
        }}
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Space direction="vertical">
        <Button onClick={() => coreRef.current?.scrollTo('object_basic')}>
          \u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011
        </Button>
        <Button
          onClick={() => {
            coreRef.current?.scrollTo(['object_spec', 'title'], { gap: -20 })
          }}
        >
          \u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011
        </Button>
        <Button
          onClick={() => {
            coreRef.current?.scrollTo('object_other.content', { xAxis: false })
          }}
        >
          \u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011
        </Button>
      </Space>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":R,"./renderers/common.tsx":T,"./item-layout/Horizontal.tsx":v,react:S||(S=e.t(x,2)),antd:A,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v},renderOpts:{compile:function(){var s=W()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-250-scroll-demo-1":{component:x.memo(x.lazy(W()(h()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=E.sent,o=t.useState,n=t.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,l=r.Button,d=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,O=C.default,_=I()(I()({},j),{},{Object:O}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},b=function(){var N=o({}),V=P()(N,2),U=V[0],z=V[1],Z=n(null),w=n(null);return x.createElement("div",{ref:w,style:{display:"flex",columnGap:20,height:500,padding:10,border:"1px solid #ccc",overflow:"auto",position:"relative"}},x.createElement(g,{style:{maxWidth:500,flexGrow:1},ref:Z,schema:D,value:U,onChange:z,itemLayout:i,renderers:_}),x.createElement("div",{style:{position:"sticky",top:0}},x.createElement(d,{direction:"vertical"},x.createElement(l,{onClick:function(){var ae;(ae=Z.current)===null||ae===void 0||ae.scrollTo("object_basic",{positionedElement:w.current})}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(l,{onClick:function(){var ae;(ae=Z.current)===null||ae===void 0||ae.scrollTo(["object_spec","title"],{positionedElement:w.current,gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(l,{onClick:function(){var ae;(ae=Z.current)===null||ae===void 0||ae.scrollTo("object_other.content",{positionedElement:w.current})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},E.abrupt("return",{default:b});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import { Button, Space } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import comRenderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'
import Object from './renderers/object/ObjectNormal'

const renderers = {
  ...comRenderers,
  Object: Object as never,
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
      renderOptions: { rows: 10 },
    },
    object_basic: {
      title: '\u57FA\u7840\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u57FA\u7840\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u57FA\u7840\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_spec: {
      title: '\u89C4\u683C\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u89C4\u683C\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u89C4\u683C\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_service: {
      title: '\u670D\u52A1\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u670D\u52A1\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u670D\u52A1\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_other: {
      title: '\u5176\u4ED6\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u5176\u4ED6\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u5176\u4ED6\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)
  const scrollElementRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={scrollElementRef}
      style={{
        display: 'flex',
        columnGap: 20,
        height: 500,
        padding: 10,
        border: '1px solid #ccc',
        // \u8BBE\u7F6E\u5916\u90E8\u5143\u7D20\u6EDA\u52A8
        overflow: 'auto',
        // \u8BBE\u7F6E\u5143\u7D20\u4E3A \u201C\u5B9A\u4F4D\u5143\u7D20\u201D
        position: 'relative',
      }}
    >
      <Core
        style={{
          maxWidth: 500,
          flexGrow: 1,
        }}
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <div
        style={{
          position: 'sticky',
          top: 0,
        }}
      >
        <Space direction="vertical">
          <Button
            onClick={() => {
              coreRef.current?.scrollTo('object_basic', {
                // \u8BBE\u7F6E\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20
                positionedElement: scrollElementRef.current,
              })
            }}
          >
            \u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011
          </Button>
          <Button
            onClick={() => {
              coreRef.current?.scrollTo(['object_spec', 'title'], {
                positionedElement: scrollElementRef.current,
                gap: -20,
              })
            }}
          >
            \u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011
          </Button>
          <Button
            onClick={() => {
              coreRef.current?.scrollTo('object_other.content', {
                positionedElement: scrollElementRef.current,
              })
            }}
          >
            \u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":R,"./renderers/common.tsx":T,"./item-layout/Horizontal.tsx":v,react:S||(S=e.t(x,2)),antd:A,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v},renderOpts:{compile:function(){var s=W()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-core-react-250-scroll-demo-2":{component:x.memo(x.lazy(W()(h()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=E.sent,o=t.useState,n=t.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,l=r.Button,d=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,O=C.default,_=I()(I()({},j),{},{Object:O}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},b=function(){var N=o({}),V=P()(N,2),U=V[0],z=V[1],Z=n(null),w=function(ae){var te,ue,ye=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;(te=Z.current)===null||te===void 0||te.scrollTo(ae,{positionedElement:window,gap:-76+ye,behavior:"instant"});var he=(ue=Z.current)===null||ue===void 0||(ue=ue.findItem(ae))===null||ue===void 0?void 0:ue.getRootElement();he==null||he.classList.add("focus-out"),setTimeout(function(){he==null||he.classList.remove("focus-out")},1e3)};return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(g,{style:{maxWidth:500,flexGrow:1},ref:Z,schema:D,value:U,onChange:z,itemLayout:i,renderers:_}),x.createElement("div",null,x.createElement(d,{direction:"vertical"},x.createElement(l,{onClick:function(){return w("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(l,{onClick:function(){return w(["object_spec","title"],-20)}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(l,{onClick:function(){return w("object_other.content")}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},E.abrupt("return",{default:b});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import { Button, Space } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import comRenderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'
import Object from './renderers/object/ObjectNormal'

const renderers = {
  ...comRenderers,
  Object: Object as never,
}

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
      renderOptions: { rows: 10 },
    },
    object_basic: {
      title: '\u57FA\u7840\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u57FA\u7840\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u57FA\u7840\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_spec: {
      title: '\u89C4\u683C\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u89C4\u683C\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u89C4\u683C\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_service: {
      title: '\u670D\u52A1\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u670D\u52A1\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u670D\u52A1\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
    object_other: {
      title: '\u5176\u4ED6\u4FE1\u606F',
      renderType: 'Object',
      properties: {
        title: {
          title: '\u5176\u4ED6\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u5176\u4ED6\u5185\u5BB9',
          renderType: 'TextArea',
          required: true,
          renderOptions: { rows: 10 },
        },
      },
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  const scrollTo = (paths: string | string[], gap: number = 0) => {
    coreRef.current?.scrollTo(paths, {
      // \u8BBE\u7F6E\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u4E3A window
      positionedElement: window,
      // 76 \u662F\u7AD9\u70B9\u5934\u90E8\u9AD8\u5EA6
      gap: -76 + gap,
      // \u6D4F\u89C8\u5668\u5185\u7F6E\u7684 behavior \u4E3A smooth \u65F6\uFF0C\u65E0\u6CD5\u76D1\u542C\u5230\u8FC7\u6E21\u6548\u679C\u52A8\u753B\u7ED3\u675F\uFF0C\u8FD9\u91CC\u53BB\u6389\u8FC7\u6E21\u6548\u679C
      behavior: 'instant',
    })

    /**
     * \u6DFB\u52A0\u4E00\u7B14\u805A\u7126\u52A8\u753B
     */
    // \u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u6839\u8282\u70B9\u5143\u7D20
    const elem = coreRef.current?.findItem(paths)?.getRootElement()

    // \u6DFB\u52A0\u52A8\u753B\u7C7B\u540D
    elem?.classList.add('focus-out')

    setTimeout(() => {
      // \u52A8\u753B\u7ED3\u675F\u540E\u79FB\u9664\u7C7B\u540D
      elem?.classList.remove('focus-out')
    }, 1000)
  }

  return (
    <div
      style={{
        display: 'flex',
        columnGap: 20,
      }}
    >
      <Core
        style={{
          maxWidth: 500,
          flexGrow: 1,
        }}
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <div>
        <Space direction="vertical">
          <Button onClick={() => scrollTo('object_basic')}>\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011</Button>
          <Button onClick={() => scrollTo(['object_spec', 'title'], -20)}>
            \u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011
          </Button>
          <Button onClick={() => scrollTo('object_other.content')}>
            \u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":R,"./renderers/common.tsx":T,"./item-layout/Horizontal.tsx":v,react:S||(S=e.t(x,2)),antd:A,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":T,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":v},renderOpts:{compile:function(){var s=W()(h()().mark(function o(){var n,r=arguments;return h()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}}}},49669:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return R}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(46715),x=e(48201),$=e(74072),A=e(78469),B=e(2862),R={"examples-core-react-280-open-api-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=C.sent,u=v.useState,s=v.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return t=C.sent,o=t.Button,n=t.message,C.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=C.sent,l=r.default,C.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return d=C.sent,m=d.default,C.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return g=C.sent,f=g.default,j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var _=u({}),D=P()(_,2),b=D[0],M=D[1],E=s(null);function K(){return N.apply(this,arguments)}function N(){return N=I()(h()().mark(function V(){var U,z,Z;return h()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,E.current.validate();case 2:if(U=X.sent,z=U.hasError,Z=U.errorList,console.log("[validate] hasError: ",z),console.log("[validate] errorList: ",Z),!z){X.next=9;break}return X.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:n.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return X.stop()}},V)})),N.apply(this,arguments)}return p.createElement("div",null,p.createElement(l,{ref:E,schema:j,value:b,onChange:M,itemLayout:f,renderers:m}),p.createElement(o,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:K},"\u63D0\u4EA4"))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import { Button, message } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
      rules: [
        { min: 5, message: '\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26' },
        { max: 10, message: '\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26' },
      ],
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  // \u63D0\u4EA4\u903B\u8F91\u5904\u7406
  async function handleSubmit() {
    const { hasError, errorList } = await coreRef.current!.validate()

    console.log('[validate] hasError: ', hasError)
    console.log('[validate] errorList: ', errorList)

    if (hasError) {
      return message.error('\u9A8C\u8BC1\u9519\u8BEF')
    }

    message.success('\u9A8C\u8BC1\u6210\u529F')

    // \u9A8C\u8BC1\u6210\u529F\u540E\uFF0C\u63D0\u4EA4\u6570\u636E...
  }

  return (
    <div>
      <Core
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Button type="primary" style={{ margin: '24px 0 0 115px' }} onClick={handleSubmit}>
        \u63D0\u4EA4
      </Button>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":B,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=C.sent,u=v.useState,s=v.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return t=C.sent,o=t.Button,n=t.message,C.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=C.sent,l=r.default,C.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return d=C.sent,m=d.default,C.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return g=C.sent,f=g.default,j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var _=u({}),D=P()(_,2),b=D[0],M=D[1],E=s(null);function K(){return N.apply(this,arguments)}function N(){return N=I()(h()().mark(function U(){var z,Z;return h()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,E.current.validate();case 2:if(z=X.sent,Z=z.hasError,!Z){X.next=6;break}return X.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 6:n.success("\u9A8C\u8BC1\u6210\u529F");case 7:case"end":return X.stop()}},U)})),N.apply(this,arguments)}var V=function(){E.current.resetError()};return p.createElement("div",null,p.createElement(l,{ref:E,schema:j,value:b,onChange:M,itemLayout:f,renderers:m}),p.createElement(o,{type:"primary",style:{margin:"24px 15px 0 115px"},onClick:K},"\u63D0\u4EA4"),p.createElement(o,{onClick:V},"\u91CD\u7F6E\u9519\u8BEF\u63D0\u793A"))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import { Button, message } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
      rules: [
        { min: 5, message: '\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26' },
        { max: 10, message: '\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26' },
      ],
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef<ICoreRef>(null)

  // \u63D0\u4EA4\u903B\u8F91\u5904\u7406
  async function handleSubmit() {
    const { hasError } = await coreRef.current!.validate()

    if (hasError) {
      return message.error('\u9A8C\u8BC1\u9519\u8BEF')
    }

    message.success('\u9A8C\u8BC1\u6210\u529F')
  }

  // \u91CD\u7F6E\u9519\u8BEF\u63D0\u793A\u4FE1\u606F
  const handleResetError = () => {
    coreRef.current!.resetError()
  }

  return (
    <div>
      <Core
        ref={coreRef}
        schema={schema}
        value={value}
        onChange={setValue}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Button
        type="primary"
        style={{ margin: '24px 15px 0 115px' }}
        onClick={handleSubmit}
      >
        \u63D0\u4EA4
      </Button>
      <Button onClick={handleResetError}>\u91CD\u7F6E\u9519\u8BEF\u63D0\u793A</Button>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":B,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,u=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,m=d.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=u(null),O=function(){C.current.resetValue()};return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:m,renderers:l}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},onClick:O},"\u91CD\u7F6E"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
import { Button } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
    },
  },
}

const Demo = () => {
  const coreRef = useRef<ICoreRef>(null)

  // \u91CD\u7F6E\u6570\u636E
  const handleReset = () => {
    coreRef.current!.resetValue()
  }

  return (
    <div>
      <Core ref={coreRef} schema={schema} itemLayout={Horizontal} renderers={renderers} />
      <Button style={{ margin: '24px 15px 0 115px' }} onClick={handleReset}>
        \u91CD\u7F6E
      </Button>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":B,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,u=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,m=d.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=u(null);return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:m,renderers:l}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var _,D=(_=C.current)===null||_===void 0?void 0:_.getRootElement();console.log("rootElement:",D)}},"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
import { Button } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
    },
  },
}

const Demo = () => {
  const coreRef = useRef<ICoreRef>(null)

  return (
    <div>
      <Core ref={coreRef} schema={schema} itemLayout={Horizontal} renderers={renderers} />
      <Button
        style={{ margin: '24px 15px 0 115px' }}
        type="primary"
        onClick={() => {
          const rootElement = coreRef.current?.getRootElement()
          console.log('rootElement:', rootElement)
        }}
      >
        \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B
      </Button>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":B,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-280-open-api-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=y.sent,u=v.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,t=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,m=d.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=u(null);return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:m,renderers:l}),p.createElement(t,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var _,D=(_=C.current)===null||_===void 0||(_=_.findItem("title"))===null||_===void 0?void 0:_.getRootElement();console.log("formItemRootElement:",D)}},"\u83B7\u53D6\u3010\u6807\u9898\u3011\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
import { Button } from 'antd'
import Core from '@schema-render/core-react'
import type { ICoreRef, IRootSchema } from '@schema-render/core-react'
import renderers from './renderers/common'
import Horizontal from './item-layout/Horizontal'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
    },
  },
}

const Demo = () => {
  const coreRef = useRef<ICoreRef>(null)

  return (
    <div>
      <Core ref={coreRef} schema={schema} itemLayout={Horizontal} renderers={renderers} />
      <Button
        style={{ margin: '24px 15px 0 115px' }}
        type="primary"
        onClick={() => {
          const formItemRootElement = coreRef.current?.findItem('title')?.getRootElement()
          console.log('formItemRootElement:', formItemRootElement)
        }}
      >
        \u83B7\u53D6\u3010\u6807\u9898\u3011\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B
      </Button>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":B,react:S||(S=e.t(p,2)),antd:x,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},68642:function(G,c,e){e.r(c),e.d(c,{demos:function(){return x}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(35786),I=e(74072),p=e(2862),W=e(78469),x={"examples-core-react-300-default-value-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function $(){var A,B,R,T,v,u,s,t;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,B=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,T=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return v=n.sent,u=v.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return P.createElement(B,{schema:s,defaultValue:{title:"\u6211\u662F\u6807\u9898"},itemLayout:T,renderers:u})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-300-default-value-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      schema={schema}
      defaultValue={{
        title: '\u6211\u662F\u6807\u9898',
      }}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var $=L()(a()().mark(function B(){var R,T=arguments;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(R=u.sent).default.apply(R,T));case 3:case"end":return u.stop()}},B)}));function A(){return $.apply(this,arguments)}return A}()}}}},95206:function(G,c,e){e.r(c),e.d(c,{demos:function(){return A}});var S=e(15009),a=e.n(S),h=e(97857),L=e.n(h),P=e(99289),H=e.n(P),I=e(67294),p=e(69708),W=e(74072),x=e(48201),$=e(78469),A={"examples-core-react-600-catch-error-tips-demo-0":{component:I.memo(I.lazy(H()(a()().mark(function B(){var R,T,v,u,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return R=d.sent,T=R.default,d.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=d.sent,u=v.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=d.sent,t=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(u.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(_){return C(_.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{schema:n,itemLayout:t,renderers:o})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import { Input } from 'antd'
import Horizontal from './item-layout/Horizontal'
import type { IRenderers } from '@schema-render/core-react'

const renderers: IRenderers = {
  // \u6CE8\u518C\u4F1A\u629B\u51FA\u5F02\u5E38\u7684\u6E32\u67D3\u5668
  InputText: {
    component: () => {
      throw Error('\u53D1\u751F\u9519\u8BEF\u4E86')
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input.TextArea
          rows={3}
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      )
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26',
      },
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":W,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var B=H()(a()().mark(function T(){var v,u=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}},"examples-core-react-600-catch-error-tips-demo-1":{component:I.memo(I.lazy(H()(a()().mark(function B(){var R,T,v,u,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return R=d.sent,T=R.default,d.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=d.sent,u=v.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=d.sent,t=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(u.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(_){return C(_.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{catchErrorTips:"silent",schema:n,itemLayout:t,renderers:o})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import { Input } from 'antd'
import Horizontal from './item-layout/Horizontal'
import type { IRenderers } from '@schema-render/core-react'

const renderers: IRenderers = {
  // \u6CE8\u518C\u4F1A\u629B\u51FA\u5F02\u5E38\u7684\u6E32\u67D3\u5668
  InputText: {
    component: () => {
      throw Error('\u53D1\u751F\u9519\u8BEF\u4E86')
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input.TextArea
          rows={3}
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      )
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26',
      },
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      catchErrorTips="silent"
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":W,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var B=H()(a()().mark(function T(){var v,u=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}},"examples-core-react-600-catch-error-tips-demo-2":{component:I.memo(I.lazy(H()(a()().mark(function B(){var R,T,v,u,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return R=d.sent,T=R.default,d.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return v=d.sent,u=v.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=d.sent,t=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(u.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(_){return C(_.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(T,{catchErrorTips:function(){return I.createElement("div",{style:{color:"yellow",background:"black"}},"\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F")},schema:n,itemLayout:t,renderers:o})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import { Input } from 'antd'
import Horizontal from './item-layout/Horizontal'
import type { IRenderers } from '@schema-render/core-react'

const renderers: IRenderers = {
  // \u6CE8\u518C\u4F1A\u629B\u51FA\u5F02\u5E38\u7684\u6E32\u67D3\u5668
  InputText: {
    component: () => {
      throw Error('\u53D1\u751F\u9519\u8BEF\u4E86')
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input.TextArea
          rows={3}
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      )
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: '\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26',
      },
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  return (
    <Core
      catchErrorTips={() => {
        return (
          <div style={{ color: 'yellow', background: 'black' }}>\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F</div>
        )
      }}
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":W,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var B=H()(a()().mark(function T(){var v,u=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}}}},35963:function(G,c,e){e.r(c),e.d(c,{demos:function(){return $}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(96687),I=e(74072),p=e(78484),W=e(2862),x=e(78469),$={"examples-core-react-700-locale-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function A(){var B,R,T,v,u,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return B=d.sent,R=B.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return T=d.sent,v=T.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return u=d.sent,s=u.default,d.next=14,Promise.resolve().then(e.bind(e,78484));case 14:return t=d.sent,o=t.default,n={renderType:"Root",properties:{title:{title:"Title",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"Please enter a title with a maximum of 10 characters"},required:!0},content:{title:"Content",renderType:"TextArea",renderOptions:{placeholder:"Please enter content"},required:!0}}},r=function(){return P.createElement(R,{style:{maxWidth:600},schema:n,itemLayout:v,renderers:s,locale:o})},d.abrupt("return",{default:r});case 19:case"end":return d.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-core-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from '@schema-render/core-react/dist/esm/locale/en_US'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: 'Title',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 10,
        placeholder: 'Please enter a title with a maximum of 10 characters',
      },
      required: true,
    },
    content: {
      title: 'Content',
      renderType: 'TextArea',
      renderOptions: {
        placeholder: 'Please enter content',
      },
      required: true,
    },
  },
}

const Demo = () => {
  return (
    <Core
      style={{ maxWidth: 600 }}
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
      /* \u914D\u7F6E\u8BED\u8A00\u5305 */
      locale={enUS}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":W,"./item-layout/Horizontal.tsx":x,"@schema-render/core-react":I,"@schema-render/core-react/dist/esm/locale/en_US":p,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":W,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":x},renderOpts:{compile:function(){var A=L()(a()().mark(function R(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},R)}));function B(){return A.apply(this,arguments)}return B}()}}}},82440:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(85105),h={}},95491:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return B}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(19632),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(2755),A=e(74072),B={"examples-core-react-890-benchmark-demo-0":{component:x.memo(x.lazy(W()(h()().mark(function R(){var T,v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=y.sent,s=u.useState,t=u.Profiler,o=function(C){var O=C.schema,_=C.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,O.title),x.createElement("div",null,_))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(C){var O=C.schema,_=C.value,D=C.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(O.title),value:_||"",onChange:function(M){return D(M.target.value)}}))}}},l=600,d={renderType:"Root",properties:{}},m=I()(Array(l).keys()),m.forEach(function(i){var C="field_".concat(i);d.properties[C]={title:C,renderType:"InputText"}}),g=["100px","1fr"],f=function(){var C=s({}),O=P()(C,2),_=O[0],D=O[1],b=s(""),M=P()(b,2),E=M[0],K=M[1],N=function(U,z){var Z=parseInt(z.sPath.slice(6)),w=Z-1,X=Z+1,ae="field_".concat(X>=l?w:X);U[ae]=z.value,D(U)};return x.createElement(t,{id:"sr",onRender:function(U,z,Z,w,X,ae){var te="\u64CD\u4F5C: ".concat(z,", \u6E32\u67D3\u8017\u65F6: ").concat(Z," (\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u6027\u80FD\u4F1A\u597D\u90A3\u4E48\u4E00\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 Profiler \u6027\u80FD\u5206\u6790)"),ue=document.getElementById("profile");ue&&(ue.innerHTML=te),console.log("===> ".concat(te)),console.log("phase: ".concat(z,", actualDuration: ").concat(Z,", baseDuration: ").concat(w,", startTime: ").concat(X,", commitTime: ").concat(ae))}},x.createElement("h3",{id:"profile"},E),x.createElement(v,{layout:"autoFill",layoutMinMax:g,schema:d,itemLayout:o,renderers:r,value:_,onChange:N}))},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import { useState, Profiler } from 'react'

const VerticalItemLayout = ({ schema, body }) => {
  return (
    <>
      <h4>{schema.title}</h4>
      <div>{body}</div>
    </>
  )
}

const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: 6,
  padding: 8,
  width: '100%',
  boxSize: 'border-box',
}

const renderers = {
  InputText: {
    component: ({ schema, value, onChange }) => {
      return (
        <div style={{ display: 'flex' }}>
          <input
            style={inputStyle}
            placeholder={\`\u8BF7\u8F93\u5165\${schema.title}\`}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )
    },
  },
}

/**
 * \u751F\u6210\u8868\u5355\u9879 schema
 */
const quantity = 600
const schema = { renderType: 'Root', properties: {} }
const numbers = [...Array(quantity).keys()]

numbers.forEach((num) => {
  const field = \`field_\${num}\`
  schema.properties[field] = {
    title: field,
    renderType: 'InputText',
  }
})

const layoutMinMax = ['100px', '1fr']

const Demo = () => {
  const [value, setValue] = useState({})
  const [profileData, setProfileData] = useState('')

  // \u968F\u673A\u8054\u52A8
  const handleChange = (formData, event) => {
    const currentIndex = parseInt(event.sPath.slice(6))
    const prev = currentIndex - 1
    const next = currentIndex + 1
    const field = \`field_\${next >= quantity ? prev : next}\`
    formData[field] = event.value
    setValue(formData)
  }

  return (
    <Profiler
      id="sr"
      onRender={(_id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        const msg = \`\u64CD\u4F5C: \${phase}, \u6E32\u67D3\u8017\u65F6: \${actualDuration} (\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u6027\u80FD\u4F1A\u597D\u90A3\u4E48\u4E00\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 Profiler \u6027\u80FD\u5206\u6790)\`

        const elem = document.getElementById('profile')
        elem && (elem.innerHTML = msg)

        console.log(\`===> \${msg}\`)
        console.log(
          \`phase: \${phase}, actualDuration: \${actualDuration}, baseDuration: \${baseDuration}, startTime: \${startTime}, commitTime: \${commitTime}\`
        )
      }}
    >
      <h3 id="profile">{profileData}</h3>
      <Core
        layout="autoFill"
        layoutMinMax={layoutMinMax}
        schema={schema}
        itemLayout={VerticalItemLayout}
        renderers={renderers}
        value={value}
        onChange={handleChange}
      />
    </Profiler>
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var R=W()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}},"examples-core-react-890-benchmark-demo-1":{component:x.memo(x.lazy(W()(h()().mark(function R(){var T,v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=y.sent,s=u.useState,t=u.Profiler,o=function(C){var O=C.schema,_=C.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,O.title),x.createElement("div",null,_))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(C){var O=C.schema,_=C.value,D=C.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(O.title),value:_||"",onChange:function(M){return D(M.target.value)}}))}}},l=1800,d={renderType:"Root",properties:{}},m=I()(Array(l).keys()),m.forEach(function(i){var C="field_".concat(i);d.properties[C]={title:C,renderType:"InputText"}}),g=["100px","1fr"],f=function(){var C=s({}),O=P()(C,2),_=O[0],D=O[1],b=function(E,K){var N=parseInt(K.sPath.slice(6)),V=N-1,U=N+1,z="field_".concat(U>=l?V:U);E[z]=K.value,D(E)};return x.createElement(v,{layout:"autoFill",layoutMinMax:g,schema:d,itemLayout:o,renderers:r,value:_,onChange:b})},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import { useState, Profiler } from 'react'

const VerticalItemLayout = ({ schema, body }) => {
  return (
    <>
      <h4>{schema.title}</h4>
      <div>{body}</div>
    </>
  )
}

const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: 6,
  padding: 8,
  width: '100%',
  boxSize: 'border-box',
}

const renderers = {
  InputText: {
    component: ({ schema, value, onChange }) => {
      return (
        <div style={{ display: 'flex' }}>
          <input
            style={inputStyle}
            placeholder={\`\u8BF7\u8F93\u5165\${schema.title}\`}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )
    },
  },
}

/**
 * \u751F\u6210\u8868\u5355\u9879 schema
 */
const quantity = 1800
const schema = { renderType: 'Root', properties: {} }
const numbers = [...Array(quantity).keys()]

numbers.forEach((num) => {
  const field = \`field_\${num}\`
  schema.properties[field] = {
    title: field,
    renderType: 'InputText',
  }
})

const layoutMinMax = ['100px', '1fr']

const Demo = () => {
  const [value, setValue] = useState({})

  // \u968F\u673A\u8054\u52A8
  const handleChange = (formData, event) => {
    const currentIndex = parseInt(event.sPath.slice(6))
    const prev = currentIndex - 1
    const next = currentIndex + 1
    const field = \`field_\${next >= quantity ? prev : next}\`
    formData[field] = event.value
    setValue(formData)
  }

  return (
    <Core
      layout="autoFill"
      layoutMinMax={layoutMinMax}
      schema={schema}
      itemLayout={VerticalItemLayout}
      renderers={renderers}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var R=W()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}}}},50142:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(88485),h={}},67941:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(97024),h={}},50094:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(92311),h={}},79584:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(78593),h={}},75916:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return R}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(25105),x=e(74072),$=e(48201),A=e(2862),B=e(78469),R={"examples-core-react-950-async-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=i.sent,u=v.default,i.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=i.sent,t=s.default,i.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=i.sent,l=r.useState,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return d=i.sent,m=d.Button,g=d.Space,f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},j=function(){var O=l({}),_=P()(O,2),D=_[0],b=_[1],M=function(){setTimeout(function(){b({title:"\u65B0\u6807\u9898::".concat(String(Math.random()).slice(2,10)),content:"\u65B0\u5185\u5BB9::".concat(String(Math.random()).slice(2,10))})},100)},E=function(){return b({})};return p.createElement(p.Fragment,null,p.createElement(u,{style:{marginBottom:15},schema:f,value:D,onChange:function(N){return b(N)},itemLayout:t,renderers:n}),p.createElement(g,null,p.createElement(m,{type:"primary",onClick:M},"\u52A0\u8F7D\u5F02\u6B65\u6570\u636E"),p.createElement(m,{onClick:E},"\u91CD\u7F6E")))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-950-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'
import { useState } from 'react'
import { Button, Space } from 'antd'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  const handleFetchData = () => {
    setTimeout(() => {
      setValue({
        title: \`\u65B0\u6807\u9898::\${String(Math.random()).slice(2, 10)}\`,
        content: \`\u65B0\u5185\u5BB9::\${String(Math.random()).slice(2, 10)}\`,
      })
    }, 100)
  }

  const handleReset = () => setValue({})

  return (
    <>
      <Core
        style={{ marginBottom: 15 }}
        schema={schema}
        value={value}
        onChange={(val) => setValue(val)}
        itemLayout={Horizontal}
        renderers={renderers}
      />
      <Space>
        <Button type="primary" onClick={handleFetchData}>
          \u52A0\u8F7D\u5F02\u6B65\u6570\u636E
        </Button>
        <Button onClick={handleReset}>\u91CD\u7F6E</Button>
      </Space>
    </>
  )
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":x,react:S||(S=e.t(p,2)),antd:$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},58177:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return R}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(35170),x=e(41989),$=e(74072),A=e(2862),B=e(78469),R={"examples-core-react-951-controllable-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,u=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,m=d.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=m({}),O=P()(C,2),_=O[0],D=O[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:g,itemLayout:n,renderers:l,value:_,onChange:function(M){return D(M)}}),p.createElement(u,{value:_}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'
import { useState } from 'react'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        value={value}
        onChange={(val) => setValue(val)}
      />
      {/* \u6253\u5370\u8868\u5355\u5168\u91CF\u6570\u636E */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":B,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,u=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,m=d.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=m({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),O=P()(C,1),_=O[0];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:g,itemLayout:n,renderers:l,value:_}),p.createElement(u,{value:_}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'
import { useState } from 'react'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  const [value] = useState({
    title: '\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898',
  })

  return (
    <div className="example-layout-cols-2">
      <Core schema={schema} itemLayout={Horizontal} renderers={renderers} value={value} />
      {/* \u6253\u5370\u8868\u5355\u5168\u91CF\u6570\u636E */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":B,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,u=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,m=d.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=m({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),O=P()(C,1),_=O[0],D=m(1),b=P()(D,2),M=b[0],E=b[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:g,itemLayout:n,renderers:l,value:_,onChange:function(){E(function(N){return N+1})}}),p.createElement(u,{value:_}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'
import { useState } from 'react'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  const [value] = useState({
    title: '\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898',
  })
  const [_, setCount] = useState(1)

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        value={value}
        onChange={() => {
          setCount((count) => {
            return count + 1
          })
        }}
      />
      {/* \u6253\u5370\u8868\u5355\u5168\u91CF\u6570\u636E */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":B,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return v=m.sent,u=v.default,m.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},l=function(){return p.createElement(u,{schema:r,itemLayout:t,renderers:n})},m.abrupt("return",{default:l});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  return <Core schema={schema} itemLayout={Horizontal} renderers={renderers} />
}

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-core-react-951-controllable-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=y.sent,u=v.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,m=d.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=m({}),O=P()(C,2),_=O[0],D=O[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:g,itemLayout:n,renderers:l,onChange:function(M){return D(M)}}),p.createElement(u,{value:_}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'
import { useState } from 'react'

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'Textarea',
    },
  },
} as const

const Demo = () => {
  const [formData, setFormData] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        onChange={(val) => setFormData(val)}
      />
      {/* \u6253\u5370\u8868\u5355\u5168\u91CF\u6570\u636E */}
      <SyntaxHighlighter value={formData} />
    </div>
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":B,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},30266:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return R}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(12727),x=e(41989),$=e(74072),A=e(48201),B=e(78469),R={"examples-core-react-952-multi-renderer-on-change-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return v=C.sent,u=v.default,C.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=C.sent,t=s.default,C.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=C.sent,n=o.default,C.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=C.sent,l=r.useState,d=r.useEffect,C.next=19,Promise.resolve().then(e.bind(e,48201));case 19:return m=C.sent,g=m.Input,f={InputOrg:{component:function(_){var D,b=_.schema,M=_.value,E=_.rootValue,K=_.onChange;return console.log("==== InputOrg ===="),console.log("value:",M),console.log("rootValue:",E),d(function(){K("\u673A\u6784 A")},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((D=b.title)!==null&&D!==void 0?D:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}},InputSupplier:{component:function(_){var D,b=_.schema,M=_.value,E=_.rootValue,K=_.onChange;return console.log("==== InputSupplier ===="),console.log("value:",M),console.log("rootValue:",E),d(function(){K("\u4F9B\u5E94\u5546 A")},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((D=b.title)!==null&&D!==void 0?D:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}},InputBill:{component:function(_){var D,b=_.schema,M=_.value,E=_.rootValue,K=_.onChange;return console.log("==== InputBill ===="),console.log("value:",M),console.log("rootValue:",E),d(function(){setTimeout(function(){K("\u5355\u53F7 A")},10)},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((D=b.title)!==null&&D!==void 0?D:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}}},j={renderType:"Root",properties:{org:{title:"\u673A\u6784\u540D\u79F0",renderType:"InputOrg"},supplier:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputSupplier"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputBill"}}},y=function(){var _=l({}),D=P()(_,2),b=D[0],M=D[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:j,itemLayout:n,renderers:f,value:b,onChange:function(K,N){console.log("***** updateBy ".concat(N.sPath," *****")),console.log("value:",K),console.log("e:",N),M(K)}}),p.createElement(u,{value:b}))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-core-react-952-multi-renderer-on-change-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import { useState, useEffect } from 'react'
import { Input } from 'antd'
import type { IRenderers, ISchema } from '@schema-render/core-react'

const renderers: IRenderers<any, ISchema> = {
  InputOrg: {
    component: ({ schema, value, rootValue, onChange }) => {
      console.log('==== InputOrg ====')
      console.log('value:', value)
      console.log('rootValue:', rootValue)

      useEffect(() => {
        onChange('\u673A\u6784 A')
      }, [])

      return (
        <Input
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  InputSupplier: {
    component: ({ schema, value, rootValue, onChange }) => {
      console.log('==== InputSupplier ====')
      console.log('value:', value)
      console.log('rootValue:', rootValue)

      useEffect(() => {
        onChange('\u4F9B\u5E94\u5546 A')
      }, [])

      return (
        <Input
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  InputBill: {
    component: ({ schema, value, rootValue, onChange }) => {
      console.log('==== InputBill ====')
      console.log('value:', value)
      console.log('rootValue:', rootValue)

      useEffect(() => {
        setTimeout(() => {
          onChange('\u5355\u53F7 A')
        }, 10)
      }, [])

      return (
        <Input
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    org: {
      title: '\u673A\u6784\u540D\u79F0',
      renderType: 'InputOrg',
    },
    supplier: {
      title: '\u4F9B\u5E94\u5546\u540D\u79F0',
      renderType: 'InputSupplier',
    },
    bill_no: {
      title: '\u5355\u636E\u7F16\u53F7',
      renderType: 'InputBill',
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        value={value}
        onChange={(val, e) => {
          console.log(\`***** updateBy \${e.sPath} *****\`)
          console.log('value:', val)
          console.log('e:', e)
          setValue(val)
        }}
      />
      {/* \u6253\u5370\u8868\u5355\u5168\u91CF\u6570\u636E */}
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":$,react:S||(S=e.t(p,2)),antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},23450:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(53143),A=e(74072),B=e(48201),R=e(78469),T={"examples-core-react-953-disabled-component-demo-0":{component:x.memo(x.lazy(W()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return l=i.sent,d=l.Button,m=l.Input,g={InputText:{component:function(O){var _,D=O.schema,b=O.value,M=O.disabled,E=O.readonly,K=O.onChange;return x.createElement(m,I()(I()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((_=D.title)!==null&&_!==void 0?_:"")},D.renderOptions),{},{value:b!=null?b:"",disabled:M,onChange:function(V){return K(V.target.value)}}))},readonlyComponent:function(O){var _=O.value;return x.createElement(x.Fragment,null,_)},disabledComponent:function(O){var _=O.value;return x.createElement(x.Fragment,null,"Disabled: ",_)}},TextArea:{component:function(O){var _,D=O.schema,b=O.value,M=O.disabled,E=O.onChange;return x.createElement(m.TextArea,I()(I()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((_=D.title)!==null&&_!==void 0?_:"")},D.renderOptions),{},{value:b!=null?b:"",onChange:function(N){return E(N.target.value)},disabled:M}))},readonlyComponent:function(O){var _=O.value;return x.createElement("div",null,_)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},j=function(){var O=s(!1),_=P()(O,2),D=_[0],b=_[1],M=s(!1),E=P()(M,2),K=E[0],N=E[1],V=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),U=P()(V,2),z=U[0],Z=U[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(o,{schema:f,itemLayout:r,renderers:g,value:z,onChange:Z,readonly:D,disabled:K}),x.createElement(d,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return N(!K)}},K?"\u53D6\u6D88":"\u5207\u6362\u5230"," disabled \u72B6\u6001"),x.createElement(d,{style:{margin:"20px 0 0 115px"},onClick:function(){return b(!D)}},D?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-core-react-953-disabled-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import { Button, Input } from 'antd'

const renderers = {
  InputText: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      return (
        <Input
          allowClear
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value ?? ''}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
    readonlyComponent: ({ value }) => <>{value}</>,
    disabledComponent: ({ value }) => <>Disabled: {value}</>,
  },
  TextArea: {
    component: ({ schema, value, disabled, onChange }) => {
      return (
        <Input.TextArea
          rows={3}
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      )
    },
    readonlyComponent: ({ value }) => {
      return <div>{value}</div>
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
    },
  },
}

const Demo = () => {
  const [isReadonly, setIsReadonly] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [value, setValue] = useState({
    title: 'SchemaRender \u662F\u4EC0\u4E48',
    content: 'SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848',
  })

  return (
    <div style={{ maxWidth: 500 }}>
      <Core
        schema={schema}
        itemLayout={Horizontal}
        renderers={renderers}
        value={value}
        onChange={setValue}
        readonly={isReadonly}
        disabled={isDisabled}
      />
      <Button
        style={{ margin: '20px 0 0 115px' }}
        type="primary"
        onClick={() => setIsDisabled(!isDisabled)}
      >
        {isDisabled ? '\u53D6\u6D88' : '\u5207\u6362\u5230'} disabled \u72B6\u6001
      </Button>
      <Button
        style={{ margin: '20px 0 0 115px' }}
        onClick={() => setIsReadonly(!isReadonly)}
      >
        {isReadonly ? '\u53D6\u6D88' : '\u5207\u6362\u5230'} readonly \u72B6\u6001
      </Button>
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":R,react:S||(S=e.t(x,2)),"@schema-render/core-react":A,antd:B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var v=W()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},17571:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return B}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(65063),x=e(41989),$=e(48201),A=e(74311),B={"examples-form-render-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function R(){var T,v,u,s,t,o,n,r,l,d;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return T=g.sent,v=T.default,g.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=g.sent,s=u.useState,g.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return t=g.sent,o=t.message,g.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return n=g.sent,r=n.default,l={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",description:"\u7528\u6237\u540D\u6700\u591A20\u4E2A\u5B57\u7B26",renderOptions:{maxLength:20},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]}}},d=function(){var j=s({}),y=P()(j,2),i=y[0],C=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:l,value:i,onChange:C,onSubmit:function(){o.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(v,{value:i}))},g.abrupt("return",{default:d});case 19:case"end":return g.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-form-render-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { useState } from 'react'
import { message } from 'antd'

// \u5F15\u5165 FormRender
import FormRender from '@schema-render/form-render-react'

// \u5B9A\u4E49 Schema \u63CF\u8FF0
const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      description: '\u7528\u6237\u540D\u6700\u591A20\u4E2A\u5B57\u7B26',
      renderOptions: {
        maxLength: 20,
      },
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      description: '\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57',
      renderType: 'Password',
      renderOptions: {
        minLength: 6,
        maxLength: 20,
      },
      required: true,
      rules: [
        { min: 6, message: '\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26' },
        { max: 20, message: '\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26' },
        { pattern: '^[A-Za-z0-9]+$', message: '\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57' },
      ],
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        // \u63A5\u6536\u63D0\u4EA4\u4E8B\u4EF6
        onSubmit={() => {
          message.success('\u63D0\u4EA4\u6210\u529F')
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:S||(S=e.t(p,2)),antd:$,"@schema-render/form-render-react":A},renderOpts:{compile:function(){var R=I()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}}}},8266:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return A}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(30761),x=e(41989),$=e(74311),A={"examples-form-render-react-100-item-layout-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function B(){var R,T,v,u,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return R=l.sent,T=R.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=l.sent,u=v.default,l.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=l.sent,t=s.default,o={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{itemLayout:"vertical",schema:o,value:f,onChange:j}),p.createElement(u,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type { IRootSchema } from '@schema-render/core-react'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        // \u58F0\u660E\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784
        itemLayout="vertical"
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var B=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}},"examples-form-render-react-100-item-layout-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function B(){var R,T,v,u,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return R=l.sent,T=R.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=l.sent,u=v.default,l.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=l.sent,t=s.default,o={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{itemLayout:"horizontal",schema:o,value:f,onChange:j}),p.createElement(u,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type { IRootSchema } from '@schema-render/core-react'

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        // \u58F0\u660E\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784
        itemLayout="horizontal"
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var B=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}}}},86799:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return R}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(25937),x=e(41989),$=e(74311),A=e(69581),B=e(48201),R={"examples-form-render-react-200-label-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=m.sent,u=v.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=u({}),j=P()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,schema:r,value:y,onChange:i}),p.createElement(t,{value:y}))},m.abrupt("return",{default:l});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        // \u8BBE\u7F6E\u6570\u503C\u7C7B\u578B\u5BBD\u5EA6
        labelWidth={100}
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"number \u7C7B\u578B\u7528\u4E8E\u8BBE\u7F6E\u56FA\u5B9A\u6570\u503C",title:"number \u7C7B\u578B"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=m.sent,u=v.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=u({}),j=P()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:"max-content",schema:r,value:y,onChange:i}),p.createElement(t,{value:y}))},m.abrupt("return",{default:l});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        // \u8BBE\u7F6E CSS \u5C5E\u6027
        labelWidth="max-content"
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"string \u7C7B\u578B\uFF0C\u901A\u5E38\u662F CSS \u5C5E\u6027\uFF0C\u5982 max-content",title:"string \u7C7B\u578B"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=m.sent,u=v.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=u({}),j=P()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelGap:0,labelColon:"\uFF1A",schema:r,value:y,onChange:i}),p.createElement(t,{value:y}))},m.abrupt("return",{default:l});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        labelWidth={100}
        labelGap={0}
        // \u8BBE\u7F6E\u5192\u53F7
        labelColon="\uFF1A"
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-200-label-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,u=v.useState,i.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=i.sent,t=s.default,i.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,69581));case 14:return r=i.sent,l=r.QuestionCircleOutlined,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return d=i.sent,m=d.Popover,g={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(O){var _=O.schema,D=O.required,b=O.prefixClassNames;return p.createElement("div",null,_.title,!!_.titleDescription&&p.createElement(m,{placement:"top",trigger:"hover",content:_.titleDescription},p.createElement(l,{className:b("item-title-tooltip"),style:{marginLeft:4}})),!D&&" (\u53EF\u9009)")},j=function(){var O=u({}),_=P()(O,2),D=_[0],b=_[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelRender:f,schema:g,value:D,onChange:b}),p.createElement(t,{value:D}))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'

import FormRender from '@schema-render/form-render-react'
import type { ILabelRender } from '@schema-render/form-render-react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Popover } from 'antd'

const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
    gender: {
      title: '\u6027\u522B',
      renderType: 'Radio',
      renderOptions: {
        options: [
          { label: '\u7537', value: 'male' },
          { label: '\u5973', value: 'female' },
        ],
      },
    },
  },
} as const

// \u81EA\u5B9A\u4E49\u6E32\u67D3
const labelRender: ILabelRender = ({ schema, required, prefixClassNames }) => {
  return (
    <div>
      {/* \u6807\u9898 */}
      {schema.title}

      {/* \u6807\u9898\u63CF\u8FF0\u4FE1\u606F */}
      {!!schema.titleDescription && (
        <Popover placement="top" trigger="hover" content={schema.titleDescription}>
          <QuestionCircleOutlined
            className={prefixClassNames('item-title-tooltip')}
            style={{ marginLeft: 4 }}
          />
        </Popover>
      )}

      {/* \u5FC5\u586B\u6807\u8BB0\u5904\u7406 */}
      {!required && ' (\u53EF\u9009)'}
    </div>
  )
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        labelWidth={100}
        labelRender={labelRender}
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$,"@ant-design/icons":A,antd:B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},41393:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(91260),x=e(48201),$=e(41989),A=e(38959),B=e(74311),R=e(69581),T={"examples-form-render-react-300-actions-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=C.sent,s=u.useState,t=u.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=C.sent,n=o.message,C.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=C.sent,l=r.default,C.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return d=C.sent,m=d.sleep,C.next=19,Promise.resolve().then(e.bind(e,74311));case 19:return g=C.sent,f=g.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var _=s({}),D=P()(_,2),b=D[0],M=D[1],E=t(null),K=function(){var N=I()(h()().mark(function V(){var U,z;return h()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,E.current.validate();case 2:if(U=w.sent,z=U.hasError,!z){w.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),w.abrupt("return");case 7:return w.next=9,m();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return w.stop()}},V)}));return function(){return N.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{ref:E,schema:j,value:b,onChange:M,onSubmit:K}),p.createElement(l,{value:b}))},C.abrupt("return",{default:y});case 24:case"end":return C.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import { message } from 'antd'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { sleep } from '@examples/utils'

import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRef } from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})
  const formRenderRef = useRef<IFormRenderRef>(null)

  const handleSubmit = async () => {
    const { hasError } = await formRenderRef.current!.validate()

    if (hasError) {
      message.error('\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4')
      return
    }

    await sleep()
    message.success('\u6CE8\u518C\u6210\u529F')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        ref={formRenderRef}
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":$,"@examples/utils":A,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g;return h()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=j.sent,s=u.useState,j.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=j.sent,o=t.message,j.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=j.sent,r=n.default,j.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return l=j.sent,d=l.default,m={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var i=s({}),C=P()(i,2),O=C[0],_=C[1],D=function(){o.success("\u91CD\u7F6E\u5B8C\u6210")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(d,{schema:m,value:O,onChange:_,onReset:D}),p.createElement(r,{value:O}))},j.abrupt("return",{default:g});case 19:case"end":return j.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { message } from 'antd'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  const handleReset = () => {
    message.success('\u91CD\u7F6E\u5B8C\u6210')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onReset={handleReset}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,i.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=i.sent,o=t.message,i.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return n=i.sent,r=n.sleep,i.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return l=i.sent,d=l.default,i.next=18,Promise.resolve().then(e.bind(e,74311));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},j=function(){var O=s({}),_=P()(O,2),D=_[0],b=_[1],M=function(){var E=I()(h()().mark(function K(){return h()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,r();case 2:o.success("\u91CD\u7F6E\u5B8C\u6210");case 3:case"end":return V.stop()}},K)}));return function(){return E.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(g,{schema:f,value:D,onChange:b,onReset:M}),p.createElement(d,{value:D}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { message } from 'antd'
import { sleep } from '@examples/utils'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  const handleReset = async () => {
    await sleep()
    message.success('\u91CD\u7F6E\u5B8C\u6210')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onReset={handleReset}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@examples/utils":A,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g;return h()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=j.sent,s=u.useState,j.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=j.sent,o=t.sleep,j.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=j.sent,r=n.default,j.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return l=j.sent,d=l.default,m={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var i=s({}),C=P()(i,2),O=C[0],_=C[1],D=function(){var b=I()(h()().mark(function M(){return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return K.abrupt("return",{account:"\u5F20\u4E09".concat(Date.now())});case 3:case"end":return K.stop()}},M)}));return function(){return b.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(d,{schema:m,value:O,onChange:_,onBeforeReset:D,onReset:function(M){console.log("formData:",M)}}),p.createElement(r,{value:O}))},j.abrupt("return",{default:g});case 19:case"end":return j.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { sleep } from '@examples/utils'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  const handleBeforeReset = async () => {
    await sleep()
    return {
      account: \`\u5F20\u4E09\${Date.now()}\`,
    }
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onBeforeReset={handleBeforeReset}
        onReset={(formData) => {
          console.log('formData:', formData)
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/utils":A,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=g.sent,s=u.useState,g.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=g.sent,o=t.default,g.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=g.sent,r=n.default,l={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},d=function(){var j=s({}),y=P()(j,2),i=y[0],C=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:l,value:i,onChange:C,actions:["reset","submit"]}),p.createElement(o,{value:i}))},g.abrupt("return",{default:d});case 15:case"end":return g.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        actions={['reset', 'submit']}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx",description:"\u914D\u7F6E actions \u4E3A ['reset', 'submit'] \u8C03\u6362\u6309\u94AE\u4F4D\u7F6E",title:"\u914D\u7F6E\u987A\u5E8F"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-5":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=C.sent,s=u.useState,C.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return t=C.sent,o=t.message,n=t.Button,C.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return r=C.sent,l=r.sleep,C.next=15,Promise.resolve().then(e.bind(e,41989));case 15:return d=C.sent,m=d.default,C.next=19,Promise.resolve().then(e.bind(e,74311));case 19:return g=C.sent,f=g.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var _=s({}),D=P()(_,2),b=D[0],M=D[1],E=function(){var N=I()(h()().mark(function V(){return h()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,l();case 2:o.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return z.stop()}},V)}));return function(){return N.apply(this,arguments)}}(),K=function(){o.success("\u5BFC\u51FA\u6210\u529F")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{schema:j,value:b,onChange:M,onSubmit:E,actions:["submit","reset","export"],registerActions:{export:function(V){var U=V.loading;return p.createElement(n,{type:"primary",disabled:U.submit||U.reset,onClick:K},"\u5BFC\u51FA")}}}),p.createElement(m,{value:b}))},C.abrupt("return",{default:y});case 24:case"end":return C.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { message, Button } from 'antd'
import { sleep } from '@examples/utils'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  const handleSubmit = async () => {
    await sleep()
    message.success('\u63D0\u4EA4\u6210\u529F')
  }

  const handleExport = () => {
    message.success('\u5BFC\u51FA\u6210\u529F')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        // \u5BF9\u4E8E\u6CE8\u518C\u7684\u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u9700\u8981\u901A\u8FC7 actions \u4F7F\u7528
        actions={['submit', 'reset', 'export']}
        registerActions={{
          // export \u662F\u64CD\u4F5C\u540D\u79F0
          // \u5BF9\u5E94\u7684\u51FD\u6570\u662F\u64CD\u4F5C\u5BF9\u5E94\u7684 UI \u5C55\u793A\u4E0E\u529F\u80FD
          export: ({ loading }) => {
            return (
              <Button
                type="primary"
                // \u63D0\u4EA4\u4E0E\u91CD\u7F6E\u6309\u94AE\u5728 loading \u72B6\u6001\u65F6\uFF0C\u7981\u7528\u5BFC\u51FA
                disabled={loading.submit || loading.reset}
                onClick={handleExport}
              >
                \u5BFC\u51FA
              </Button>
            )
          },
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@examples/utils":A,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-300-actions-demo-6":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=E.sent,s=u.useState,t=u.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=E.sent,n=o.message,r=o.Button,l=o.Popconfirm,E.next=13,Promise.resolve().then(e.bind(e,69581));case 13:return d=E.sent,m=d.DeleteOutlined,g=d.UploadOutlined,E.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return f=E.sent,j=f.sleep,E.next=22,Promise.resolve().then(e.bind(e,41989));case 22:return y=E.sent,i=y.default,E.next=26,Promise.resolve().then(e.bind(e,74311));case 26:return C=E.sent,O=C.default,_={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},D={submit:function(N){var V=N.handleSubmit,U=N.loading;return p.createElement(l,{title:"\u6E29\u99A8\u63D0\u793A",description:"\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F",onConfirm:V},p.createElement(r,{loading:U.submit,type:"primary",icon:p.createElement(g,null)},"\u63D0\u4EA4"))},reset:function(N){var V=N.handleReset,U=N.loading;return p.createElement(r,{loading:U.reset,onClick:V,icon:p.createElement(m,null)},"\u91CD\u7F6E")}},b=function(){var N=s({}),V=P()(N,2),U=V[0],z=V[1],Z=t(null),w=function(){var X=I()(h()().mark(function ae(){var te,ue;return h()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,Z.current.validate();case 2:if(te=he.sent,ue=te.hasError,!ue){he.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),he.abrupt("return");case 7:return he.next=9,j();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return he.stop()}},ae)}));return function(){return X.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(O,{ref:Z,schema:_,value:U,onChange:z,onSubmit:w,registerActions:D}),p.createElement(i,{value:U}))},E.abrupt("return",{default:b});case 32:case"end":return E.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import { message, Button, Popconfirm } from 'antd'
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons'
import { sleep } from '@examples/utils'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRef, IRegisterActions } from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

/**
 * \u64CD\u4F5C\u540D\u79F0\u662F submit\u3001reset\uFF0C\u5C06\u8986\u76D6\u539F\u6709\u6837\u5F0F
 */
const registerActions: IRegisterActions = {
  submit: ({ handleSubmit, loading }) => {
    return (
      <Popconfirm title="\u6E29\u99A8\u63D0\u793A" description="\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F" onConfirm={handleSubmit}>
        <Button loading={loading.submit} type="primary" icon={<UploadOutlined />}>
          \u63D0\u4EA4
        </Button>
      </Popconfirm>
    )
  },
  reset: ({ handleReset, loading }) => {
    return (
      <Button loading={loading.reset} onClick={handleReset} icon={<DeleteOutlined />}>
        \u91CD\u7F6E
      </Button>
    )
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const formRenderRef = useRef<IFormRenderRef>(null)

  const handleSubmit = async () => {
    const { hasError } = await formRenderRef.current!.validate()

    if (hasError) {
      message.error('\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4')
      return
    }

    await sleep()
    message.success('\u6CE8\u518C\u6210\u529F')
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        ref={formRenderRef}
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        registerActions={registerActions}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),antd:x,"@ant-design/icons":R,"@examples/utils":A,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},39820:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(90261),x=e(48201),$=e(41989),A=e(74311),B=e(14953),R=e(97609),T={"examples-form-render-react-500-builtin-renderers-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=C.sent,s=u.useState,t=u.useMemo,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=C.sent,n=o.Button,C.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=C.sent,l=r.default,C.next=15,Promise.resolve().then(e.bind(e,74311));case 15:return d=C.sent,m=d.default,C.next=19,Promise.resolve().then(e.bind(e,97609));case 19:return g=C.sent,C.next=22,Promise.resolve().then(e.bind(e,14953));case 22:return f=C.sent,j=f.default,y=function(){var _=s(!1),D=P()(_,2),b=D[0],M=D[1],E=s(!1),K=P()(E,2),N=K[0],V=K[1],U=s({Description:"\u7EAF\u5C55\u793A\u7684\u5185\u5BB9\u5427\u5566\u5427\u5566"}),z=P()(U,2),Z=z[0],w=z[1],X=t(function(){return{disable:function(){return p.createElement(n,{type:"dashed",onClick:function(){return M(!b)}},b?"\u53D6\u6D88":"\u8BBE\u4E3A"," disabled \u72B6\u6001")},readonly:function(){return p.createElement(n,{type:"dashed",onClick:function(){return V(!N)}},N?"\u53D6\u6D88":"\u8BBE\u4E3A"," readonly \u72B6\u6001")}}},[N,b]);return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(m,{rootClassName:g.builtinRenderers,labelWidth:230,schema:j,value:Z,onChange:w,actions:["submit","reset","disable","readonly"],registerActions:X,disabled:b,readonly:N,readonlyPlaceholder:p.createElement("span",{style:{color:"#666",fontSize:14}},"-")}),p.createElement(l,{value:Z}))},C.abrupt("return",{default:y});case 26:case"end":return C.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-500-builtin-renderers-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo } from 'react'
import { Button } from 'antd'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import * as styles from './styles'

// \u5F15\u5165\u6240\u6709\u6E32\u67D3\u5668\u7684 Schema
import schema from './schemas/all'

const Demo = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [isReadonly, setIsReadonly] = useState(false)
  const [value, setValue] = useState<object>({
    Description: '\u7EAF\u5C55\u793A\u7684\u5185\u5BB9\u5427\u5566\u5427\u5566',
  })

  const registerActions = useMemo(() => {
    return {
      disable: () => (
        <Button type="dashed" onClick={() => setIsDisabled(!isDisabled)}>
          {isDisabled ? '\u53D6\u6D88' : '\u8BBE\u4E3A'} disabled \u72B6\u6001
        </Button>
      ),
      readonly: () => (
        <Button type="dashed" onClick={() => setIsReadonly(!isReadonly)}>
          {isReadonly ? '\u53D6\u6D88' : '\u8BBE\u4E3A'} readonly \u72B6\u6001
        </Button>
      ),
    }
  }, [isReadonly, isDisabled])

  return (
    <div className="example-layout-cols-2">
      <FormRender
        rootClassName={styles.builtinRenderers}
        labelWidth={230}
        schema={schema}
        value={value}
        onChange={setValue}
        actions={['submit', 'reset', 'disable', 'readonly']}
        registerActions={registerActions}
        // \u662F\u5426\u7981\u7528\u6001
        disabled={isDisabled}
        // \u662F\u5426\u53EA\u8BFB\u72B6\u6001
        readonly={isReadonly}
        // \u53EA\u8BFB\u72B6\u6001\u6CA1\u6709\u6570\u636E\u65F6\u7684\u5360\u4F4D\u7B26
        readonlyPlaceholder={<span style={{ color: '#666', fontSize: 14 }}>-</span>}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"./schemas/all.ts":{type:"FILE",value:e(71525).Z},"./styles.ts":{type:"FILE",value:e(24127).Z}},entry:"index.tsx"},context:{"./schemas/all.ts":B,"./styles.ts":R,react:S||(S=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":$,"@schema-render/form-render-react":A,"/home/runner/work/schema-render/schema-render/examples/form-render-react/schemas/all.ts":B,"/home/runner/work/schema-render/schema-render/examples/form-render-react/styles/index.ts":R},renderOpts:{compile:function(){var v=I()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},28680:function(G,c,e){e.r(c),e.d(c,{demos:function(){return W}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(4123),I=e(74311),p=e(35804),W={"examples-form-render-react-700-locale-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function x(){var $,A,B,R,T,v;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return $=s.sent,A=$.default,s.next=6,Promise.resolve().then(e.bind(e,35804));case 6:return B=s.sent,R=B.default,T={renderType:"Root",properties:{username:{title:"username",renderType:"InputText",required:!0},password:{title:"password",renderType:"Password",required:!0}}},v=function(){return P.createElement(A,{rootStyle:{maxWidth:500},schema:T,locale:R})},s.abrupt("return",{default:v});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from '@schema-render/form-render-react/dist/esm/locale/en_US'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    username: {
      title: 'username',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: 'password',
      renderType: 'Password',
      required: true,
    },
  },
}

const Demo = () => {
  return (
    <FormRender
      rootStyle={{ maxWidth: 500 }}
      schema={schema}
      /* \u914D\u7F6E\u8BED\u8A00\u5305 */
      locale={enUS}
    />
  )
}

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{"@schema-render/form-render-react":I,"@schema-render/form-render-react/dist/esm/locale/en_US":p},renderOpts:{compile:function(){var x=L()(a()().mark(function A(){var B,R=arguments;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",(B=v.sent).default.apply(B,R));case 3:case"end":return v.stop()}},A)}));function $(){return x.apply(this,arguments)}return $}()}}}},47023:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(74624),h={}},48167:function(G,c,e){e.r(c),e.d(c,{demos:function(){return W}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(83140),I=e(74311),p=e(37418),W={"examples-form-render-react-850-position-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function x(){var $,A,B,R,T,v,u;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return $=t.sent,A=$.default,t.next=6,Promise.resolve().then(e.bind(e,37418));case 6:return B=t.sent,R=B.default,T={renderType:"Root",properties:{settlement_mode:{title:"\u7ED3\u7B97\u5468\u671F\u540D\u79F0",renderType:"InputText",description:"\u652F\u6301\u4E2D\u6587\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF(_)\uFF0C\u4E0D\u80FD\u5305\u542B\u7A7A\u683C",span:16},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",span:8,spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText",span:8},bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",span:8,spanStart:1},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect",span:8},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect",span:8},cooperation:{title:"\u5408\u4F5C\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u8D2D\u9500",value:1},{label:"\u4EE3\u9500",value:2}]}},payment:{title:"\u4ED8\u6B3E\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u7EBF\u4E0A\u652F\u4ED8",value:1},{label:"\u7EBF\u4E0B\u652F\u4ED8",value:2}]}}}},v=function(n,r){n.bank_id=r.extra.bank_id,n.bank_account=r.extra.bank_account,n.bank_name=r.extra.bank_name,n.bank_branch_name=r.extra.bank_branch_name},u=function(){return P.createElement(A,{schema:T,renderers:R,watch:{bank_account:v,bank_name:v,bank_branch_name:v}})},t.abrupt("return",{default:u});case 12:case"end":return t.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-850-position-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
import type {
  IFormRenderRootSchema,
  IFormRenderProps,
} from '@schema-render/form-render-react'
import renderers from './renderers'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    settlement_mode: {
      title: '\u7ED3\u7B97\u5468\u671F\u540D\u79F0',
      renderType: 'InputText',
      description: '\u652F\u6301\u4E2D\u6587\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF(_)\uFF0C\u4E0D\u80FD\u5305\u542B\u7A7A\u683C',
      span: 16,
    },
    supplier_name: {
      title: '\u4F9B\u5E94\u5546\u540D\u79F0',
      renderType: 'InputText',
      // \u901A\u8FC7 span \u8BBE\u7F6E\u8868\u5355\u9879\u4E3A 50% \u7684\u5BBD\u5EA6\uFF0812/24\uFF09
      span: 8,
      // \u901A\u8FC7 spanStart \u8BBE\u7F6E\u8868\u5355\u9879\u4ECE\u7B2C\u4E00\u4E2A\u6805\u683C\u5F00\u59CB\u5E03\u5C40\uFF0C\u5373\u65B0\u8D77\u4E00\u884C
      spanStart: 1,
    },
    // \u540E\u9762\u7684\u8868\u5355\u9879\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u8DDF\u968F\u4E0A\u4E00\u4E2A\u8868\u5355\u9879\u7684\u4F4D\u7F6E
    supplier_code: {
      title: '\u4F9B\u5E94\u5546\u7F16\u7801',
      renderType: 'InputText',
      span: 8,
    },
    bank_name: {
      title: '\u5F00\u6237\u94F6\u884C\u540D\u79F0',
      renderType: 'BankSelect',
      span: 8,
      spanStart: 1,
    },
    bank_branch_name: {
      title: '\u5F00\u6237\u652F\u884C\u540D\u79F0',
      renderType: 'BankSelect',
      span: 8,
    },
    bank_account: {
      title: '\u5F00\u6237\u94F6\u884C\u8D26\u53F7',
      renderType: 'BankSelect',
      span: 8,
    },
    // \u5F53 span \u548C spanStart \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09
    cooperation: {
      title: '\u5408\u4F5C\u65B9\u5F0F',
      renderType: 'Radio',
      renderOptions: {
        options: [
          { label: '\u8D2D\u9500', value: 1 },
          { label: '\u4EE3\u9500', value: 2 },
        ],
      },
    },
    payment: {
      title: '\u4ED8\u6B3E\u65B9\u5F0F',
      renderType: 'Radio',
      renderOptions: {
        options: [
          { label: '\u7EBF\u4E0A\u652F\u4ED8', value: 1 },
          { label: '\u7EBF\u4E0B\u652F\u4ED8', value: 2 },
        ],
      },
    },
  },
}

// \u8054\u52A8\u903B\u8F91\u5904\u7406
const bankRelation: IFormRenderProps['onChange'] = (formData, event) => {
  formData.bank_id = event.extra.bank_id
  formData.bank_account = event.extra.bank_account
  formData.bank_name = event.extra.bank_name
  formData.bank_branch_name = event.extra.bank_branch_name
}

const Demo = () => {
  return (
    <FormRender
      schema={schema}
      renderers={renderers}
      /* \u76D1\u542C\u5173\u8054\u8868\u5355\u9879\u53D8\u5316\uFF0C\u8054\u52A8\u903B\u8F91\u5904\u7406 */
      watch={{
        bank_account: bankRelation,
        bank_name: bankRelation,
        bank_branch_name: bankRelation,
      }}
    />
  )
}

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"./renderers.tsx":{type:"FILE",value:e(540).Z}},entry:"index.tsx"},context:{"./renderers.tsx":p,"@schema-render/form-render-react":I,"/home/runner/work/schema-render/schema-render/examples/form-render-react/renderers/index.tsx":p},renderOpts:{compile:function(){var x=L()(a()().mark(function A(){var B,R=arguments;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",(B=v.sent).default.apply(B,R));case 3:case"end":return v.stop()}},A)}));function $(){return x.apply(this,arguments)}return $}()}}}},68170:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return v}});var a=e(9783),h=e.n(a),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(5574),W=e.n(p),x=e(99289),$=e.n(x),A=e(67294),B=e(34877),R=e(74311),T=e(48201),v={"examples-form-render-react-851-steps-demo-0":{component:A.memo(A.lazy($()(I()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=i.sent,t=s.useState,o=s.useMemo,n=s.useRef,i.next=8,Promise.resolve().then(e.bind(e,74311));case 8:return r=i.sent,l=r.default,i.next=12,Promise.resolve().then(e.bind(e,48201));case 12:return d=i.sent,m=d.Steps,g=d.Button,f={renderType:"Root",properties:{step1:{title:"\u6B65\u9AA4\u4E00",renderType:"ObjectNull",hidden:"$userCtx.step !== 0",properties:{title:{title:"\u6B65\u9AA4\u4E00\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E00\u5185\u5BB9",renderType:"InputText",required:!0}}},step2:{title:"\u6B65\u9AA4\u4E8C",renderType:"ObjectNull",hidden:"$userCtx.step !== 1",properties:{title:{title:"\u6B65\u9AA4\u4E8C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E8C\u5185\u5BB9",renderType:"InputText",required:!0}}},step3:{title:"\u6B65\u9AA4\u4E09",renderType:"ObjectNull",hidden:"$userCtx.step !== 2",properties:{title:{title:"\u6B65\u9AA4\u4E09\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E09\u5185\u5BB9",renderType:"InputText",required:!0}}}}},j=function(){var O=t(0),_=W()(O,2),D=_[0],b=_[1],M=t({}),E=W()(M,2),K=E[0],N=E[1],V=n(null),U=function(){b(function(te){return te-1})},z=function(){var ae=$()(I()().mark(function te(){var ue,ye,he,ve;return I()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:return Ie.next=2,(ue=V.current)===null||ue===void 0?void 0:ue.validate();case 2:if(ye=Ie.sent,!(ye!=null&&ye.hasError||ye!=null&&ye.hasWarning)){Ie.next=8;break}if(he="step".concat(D+1),ve=ye.errorList.some(function(Ee){return Ee.path[0]===he}),!ve){Ie.next=8;break}return Ie.abrupt("return");case 8:b(D+1);case 9:case"end":return Ie.stop()}},te)}));return function(){return ae.apply(this,arguments)}}(),Z=function(){var te;N(P()(P()({},K),{},h()({},"step".concat(D+1),{}))),(te=V.current)===null||te===void 0||te.resetError()},w=o(function(){return{prev:function(){return A.createElement(g,{onClick:U},"\u4E0A\u4E00\u6B65")},next:function(){return A.createElement(g,{type:"primary",onClick:z},"\u4E0B\u4E00\u6B65")},reset:function(){return A.createElement(g,{onClick:Z},"\u91CD\u7F6E")}}},[]),X=function(){var ae=$()(I()().mark(function te(){var ue,ye;return I()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,(ue=V.current)===null||ue===void 0?void 0:ue.validate();case 2:if(ye=ve.sent,!(ye!=null&&ye.hasError||ye!=null&&ye.hasWarning)){ve.next=5;break}return ve.abrupt("return");case 5:case"end":return ve.stop()}},te)}));return function(){return ae.apply(this,arguments)}}();return A.createElement("div",{style:{maxWidth:800}},A.createElement(m,{size:"small",current:D,onChange:b,items:[{title:"\u6B65\u9AA4\u4E00",disabled:!0},{title:"\u6B65\u9AA4\u4E8C",disabled:!0},{title:"\u6B65\u9AA4\u4E09",disabled:!0}],style:{marginBottom:20}}),A.createElement(l,{ref:V,schema:f,value:K,onChange:N,userCtx:{step:D},actions:D===0?["next","reset"]:D===2?["submit","prev","reset"]:["next","prev","reset"],registerActions:w,onSubmit:X}))},i.abrupt("return",{default:j});case 18:case"end":return i.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-form-render-react-851-steps-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo, useRef } from 'react'
import FormRender from '@schema-render/form-render-react'
import type {
  IFormRenderRootSchema,
  IFormRenderProps,
  IFormRenderRef,
} from '@schema-render/form-render-react'
import { Steps, Button } from 'antd'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    step1: {
      title: '\u6B65\u9AA4\u4E00',
      renderType: 'ObjectNull',
      hidden: '$userCtx.step !== 0',
      properties: {
        title: {
          title: '\u6B65\u9AA4\u4E00\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u6B65\u9AA4\u4E00\u5185\u5BB9',
          renderType: 'InputText',
          required: true,
        },
      },
    },
    step2: {
      title: '\u6B65\u9AA4\u4E8C',
      renderType: 'ObjectNull',
      hidden: '$userCtx.step !== 1',
      properties: {
        title: {
          title: '\u6B65\u9AA4\u4E8C\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u6B65\u9AA4\u4E8C\u5185\u5BB9',
          renderType: 'InputText',
          required: true,
        },
      },
    },
    step3: {
      title: '\u6B65\u9AA4\u4E09',
      renderType: 'ObjectNull',
      hidden: '$userCtx.step !== 2',
      properties: {
        title: {
          title: '\u6B65\u9AA4\u4E09\u6807\u9898',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '\u6B65\u9AA4\u4E09\u5185\u5BB9',
          renderType: 'InputText',
          required: true,
        },
      },
    },
  },
}

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [value, setValue] = useState({})
  const formRenderRef = useRef<IFormRenderRef>(null)

  // \u4E0A\u4E00\u6B65\u4E8B\u4EF6
  const handlePrev = () => {
    setCurrentStep((cur) => cur - 1)
  }

  // \u4E0B\u4E00\u6B65\u4E8B\u4EF6
  const handleNext = async () => {
    // formRenderRef \u7684 validate \u4F1A\u6821\u9A8C\u6240\u6709\u8868\u5355\u9879
    const res = await formRenderRef.current?.validate()
    if (res?.hasError || res?.hasWarning) {
      const currentStepField = \`step\${currentStep + 1}\`

      // \u5982\u679C\u9519\u8BEF\u5217\u8868\u91CC\u5B58\u5728\u5F53\u524D\u6B65\u9AA4\u4E0B\u7684\u8868\u5355\uFF0C\u8868\u793A\u5F53\u524D\u6B65\u9AA4\u4E0B\u7684\u8868\u5355\u5B58\u5728\u9519\u8BEF\u9879\uFF0C\u5219\u4E0D\u8DF3\u5230\u4E0B\u4E00\u6B65
      const blockCurrentStep = res.errorList.some(
        (item) => item.path[0] === currentStepField
      )
      if (blockCurrentStep) {
        return
      }
    }

    // \u6821\u9A8C\u901A\u8FC7\u624D\u8FDB\u884C\u4E0B\u4E00\u6B65
    setCurrentStep(currentStep + 1)
  }

  // \u53EA\u91CD\u7F6E\u5F53\u524D\u6B65\u9AA4\u4E0B\u7684\u8868\u5355\u9879\u6570\u636E
  const handleReset = () => {
    // \u91CD\u7F6E\u6570\u636E
    setValue({
      ...value,
      [\`step\${currentStep + 1}\`]: {},
    })
    // \u91CD\u7F6E\u9519\u8BEF\u63D0\u793A
    formRenderRef.current?.resetError()
  }

  const registerActions = useMemo(() => {
    return {
      prev: () => <Button onClick={handlePrev}>\u4E0A\u4E00\u6B65</Button>,
      next: () => (
        <Button type="primary" onClick={handleNext}>
          \u4E0B\u4E00\u6B65
        </Button>
      ),
      reset: () => <Button onClick={handleReset}>\u91CD\u7F6E</Button>,
    }
  }, [])

  // \u63D0\u4EA4\u4E8B\u4EF6
  const handleSubmit: IFormRenderProps['onSubmit'] = async () => {
    const res = await formRenderRef.current?.validate()

    if (res?.hasError || res?.hasWarning) {
      return
    }

    // \u6821\u9A8C\u901A\u8FC7\u540E\uFF0C\u53D1\u9001\u63D0\u4EA4\u6570\u636E
  }

  return (
    <div style={{ maxWidth: 800 }}>
      <Steps
        size="small"
        current={currentStep}
        onChange={setCurrentStep}
        items={[
          { title: '\u6B65\u9AA4\u4E00', disabled: true },
          { title: '\u6B65\u9AA4\u4E8C', disabled: true },
          { title: '\u6B65\u9AA4\u4E09', disabled: true },
        ]}
        style={{ marginBottom: 20 }}
      />
      <FormRender
        ref={formRenderRef}
        schema={schema}
        value={value}
        onChange={setValue}
        // \u901A\u8FC7 userCtx \u6CE8\u5165\u6B65\u9AA4\u8FDB\u5EA6\uFF0C\u5728 schema \u91CC\u4F7F\u7528
        userCtx={{ step: currentStep }}
        actions={
          currentStep === 0
            ? ['next', 'reset']
            : currentStep === 2
            ? ['submit', 'prev', 'reset']
            : ['next', 'prev', 'reset']
        }
        registerActions={registerActions}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:S||(S=e.t(A,2)),"@schema-render/form-render-react":R,antd:T},renderOpts:{compile:function(){var u=$()(I()().mark(function t(){var o,n=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}}}},62127:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(45011),A=e(41989),B=e(74311),R=e(48201),T={"examples-form-render-react-852-audit-renderer-demo-0":{component:x.memo(x.lazy(W()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=O.sent,s=u.useState,O.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=O.sent,o=t.default,O.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=O.sent,r=n.default,O.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return l=O.sent,d=l.Input,m=l.Radio,g=[{label:"\u5BA1\u6838\u901A\u8FC7",value:1},{label:"\u5BA1\u6838\u5931\u8D25",value:2}],f=function(D){var b,M=D.disabled,E=D.value,K=D.onChange,N=D.validator,V=function(Z){K(I()(I()({},E),Z),{triggerValidator:!Z.hasOwnProperty("type")})},U=(E==null?void 0:E.type)===2;return x.createElement("div",null,x.createElement(m.Group,{options:g,value:(b=E==null?void 0:E.type)!==null&&b!==void 0?b:null,onChange:function(Z){return V({type:Z.target.value})},disabled:M}),x.createElement("div",{style:{marginTop:U?5:0}},U&&x.createElement(d.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0",autoFocus:!0,showCount:!0,maxLength:200,status:N.status,disabled:M,value:E.failReason,onChange:function(Z){return V({failReason:Z.target.value})}})))},j={Audit:{component:f,validator:function(D){var b=D.value;if((b==null?void 0:b.type)===2&&!b.failReason)return{status:"error",message:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0"}}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0},audit:{title:"\u5BA1\u6838\u7ED3\u679C",renderType:"Audit",required:!0}}},i=function(){var D=s({}),b=P()(D,2),M=b[0],E=b[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,value:M,onChange:E,renderers:j}),x.createElement(o,{value:M}))},O.abrupt("return",{default:i});case 23:case"end":return O.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-852-audit-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type {
  IOpenComponentParams,
  IOpenValidatorParams,
  IRenderers,
} from '@schema-render/core-react'
import { Input, Radio } from 'antd'

type IValue = {
  // \u5BA1\u6838\u7C7B\u578B
  type: number
  // \u5BA1\u6838\u5931\u8D25\u539F\u56E0
  failReason?: string
}

type IProps = React.FC<IOpenComponentParams<IValue>>

/**
 * \u5BA1\u6838\u7ED3\u679C\u72B6\u6001
 */
const AUDIT_STATUS_OPTIONS = [
  { label: '\u5BA1\u6838\u901A\u8FC7', value: 1 },
  { label: '\u5BA1\u6838\u5931\u8D25', value: 2 },
]

/**
 * \u5BA1\u6838\u7ED3\u679C\u6E32\u67D3\u5668
 */
const Audit: IProps = ({ disabled, value, onChange, validator }) => {
  const emitChange = (nextValue: Partial<IValue>) => {
    onChange(
      { ...value!, ...nextValue },
      { triggerValidator: nextValue.hasOwnProperty('type') ? false : true }
    )
  }

  const hasExtraContent = value?.type === 2

  return (
    <div>
      <Radio.Group
        options={AUDIT_STATUS_OPTIONS}
        value={value?.type ?? null}
        onChange={(e) => emitChange({ type: e.target.value })}
        disabled={disabled}
      />
      <div style={{ marginTop: hasExtraContent ? 5 : 0 }}>
        {hasExtraContent && (
          <Input.TextArea
            placeholder="\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0"
            autoFocus
            showCount
            maxLength={200}
            status={validator.status as never}
            disabled={disabled}
            value={value.failReason}
            onChange={(e) => emitChange({ failReason: e.target.value })}
          />
        )}
      </div>
    </div>
  )
}

const renderers: IRenderers = {
  Audit: {
    component: Audit,
    validator: ({ value }: IOpenValidatorParams<IValue>) => {
      if (value?.type === 2 && !value.failReason) {
        return {
          status: 'error',
          message: '\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0',
        }
      }
    },
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      required: true,
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      required: true,
    },
    audit: {
      title: '\u5BA1\u6838\u7ED3\u679C',
      renderType: 'Audit',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        renderers={renderers}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:S||(S=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":B,antd:R},renderOpts:{compile:function(){var v=W()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},42087:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return A}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(6168),x=e(41989),$=e(74311),A={"examples-form-render-react-853-validate-on-blur-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function B(){var R,T,v,u,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return R=l.sent,T=R.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=l.sent,u=v.default,l.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=l.sent,t=s.default,o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},amount:{title:"\u603B\u989D",renderType:"InputNumber",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:50,message:"\u603B\u989D\u4E0D\u80FD\u5C11 50"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},password:{title:"\u5BC6\u7801\u6846",renderType:"Password",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}},n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:o,value:f,onChange:j}),p.createElement(u,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-form-render-react-853-validate-on-blur-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 5, message: '\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26' }],
    },
    amount: {
      title: '\u603B\u989D',
      renderType: 'InputNumber',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 50, message: '\u603B\u989D\u4E0D\u80FD\u5C11 50' }],
    },
    content: {
      title: '\u5185\u5BB9',
      renderType: 'TextArea',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 5, message: '\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26' }],
    },
    password: {
      title: '\u5BC6\u7801\u6846',
      renderType: 'Password',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 5, message: '\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26' }],
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender schema={schema} value={value} onChange={setValue} />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var B=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}}}},19658:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return A}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(6882),x=e(41989),$=e(74311),A={"examples-form-render-react-854-scroll-to-first-error-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function B(){var R,T,v,u,s,t,o,n,r,l;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return n=function(){for(var f={renderType:"Root",properties:{}},j=1;j<=30;j++){var y="field_".concat(j);f.properties[y]={title:"\u6807\u9898_".concat(j),renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}return f},m.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return R=m.sent,T=R.useState,v=R.useRef,m.next=8,Promise.resolve().then(e.bind(e,41989));case 8:return u=m.sent,s=u.default,m.next=12,Promise.resolve().then(e.bind(e,74311));case 12:return t=m.sent,o=t.default,r=n(),l=function(){var f=T({}),j=P()(f,2),y=j[0],i=j[1],C=v(null),O=function(){var _=I()(h()().mark(function D(){var b,M,E;return h()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,(b=C.current)===null||b===void 0?void 0:b.validate();case 2:M=N.sent,M!=null&&M.hasError&&((E=C.current)===null||E===void 0||E.scrollTo(M.errorList[0].path,{gap:-76,positionedElement:window}));case 4:case"end":return N.stop()}},D)}));return function(){return _.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{ref:C,schema:r,value:y,onChange:i,onSubmit:O,validateFormOnSubmit:!1}),p.createElement(s,{value:y}))},m.abrupt("return",{default:l});case 17:case"end":return m.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-form-render-react-854-scroll-to-first-error-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import type {
  IFormRenderRootSchema,
  IFormRenderRef,
} from '@schema-render/form-render-react'

function createSchema() {
  const schema: IFormRenderRootSchema = {
    renderType: 'Root',
    properties: {},
  }

  for (let i = 1; i <= 30; i++) {
    const field = \`field_\${i}\`
    schema.properties[field] = {
      title: \`\u6807\u9898_\${i}\`,
      renderType: 'InputText',
      renderOptions: {
        validateOnBlur: true,
      },
      required: true,
      rules: [{ min: 5, message: '\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26' }],
    }
  }

  return schema
}

const schema = createSchema()

const Demo = () => {
  const [value, setValue] = useState({})
  const formRenderRef = useRef<IFormRenderRef>(null)

  const handleSubmit = async () => {
    const res = await formRenderRef.current?.validate()
    if (res?.hasError) {
      formRenderRef.current?.scrollTo(res.errorList[0].path, {
        // 76 \u662F\u5B98\u7F51\u6587\u6863\u9875\u5934\u9AD8\u5EA6
        gap: -76,
        positionedElement: window,
      })
    }
  }

  return (
    <div className="example-layout-cols-2">
      <FormRender
        ref={formRenderRef}
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        validateFormOnSubmit={false}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var B=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}}}},55850:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(97857),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(88358),A=e(41989),B=e(74311),R=e(48201),T={"examples-form-render-react-880-relation-checkbox-demo-0":{component:x.memo(x.lazy(W()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=i.sent,s=u.useState,t=u.useRef,i.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return o=i.sent,n=o.default,i.next=11,Promise.resolve().then(e.bind(e,74311));case 11:return r=i.sent,l=r.default,i.next=15,Promise.resolve().then(e.bind(e,48201));case 15:return d=i.sent,m=d.Select,g={component:function(O){var _,D=O.schema,b=O.value,M=O.disabled,E=O.validator,K=O.onChange,N=O.userCtx,V=N.cityList||((_=D.renderOptions)===null||_===void 0?void 0:_.options);return x.createElement(m,I()(I()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat(D.title)},D.renderOptions),{},{options:V,status:E.status,mode:void 0,value:b,onChange:function(z){return K(z)},disabled:M}))}},f={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"AvailableCities"}}},j=function(){var O=s({}),_=P()(O,2),D=_[0],b=_[1],M=t({});return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(l,{labelWidth:180,actions:[],schema:f,value:D,onChange:b,renderers:{AvailableCities:g},watch:{cities:function(K,N){M.current.cityList=N.extra.checkedOptions,N.value.includes(K.available_cities)||(K.available_cities=void 0)}},userCtx:M.current}),x.createElement(n,{value:D}))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState, useRef } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'
import { Select } from 'antd'

// \u81EA\u5B9A\u4E49\u6E32\u67D3\u5668
const AvailableCities = {
  component: ({ schema, value, disabled, validator, onChange, userCtx }) => {
    // \u4F18\u5148\u4F7F\u7528 userCtx.cityList \u4F5C\u4E3A\u6570\u636E
    const options = userCtx.cityList || schema.renderOptions?.options

    return (
      <Select
        allowClear
        style={{ width: '100%' }}
        placeholder={\`\u8BF7\u9009\u62E9\${schema.title}\`}
        {...schema.renderOptions}
        options={options}
        status={validator.status}
        mode={undefined}
        value={value}
        onChange={(val) => onChange(val)}
        disabled={disabled}
      />
    )
  },
}

const schema = {
  renderType: 'Root',
  properties: {
    cities: {
      title: '\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4',
      renderType: 'Checkbox',
      renderOptions: {
        options: [
          { label: '\u6210\u90FD', value: 'chengdu' },
          { label: '\u676D\u5DDE', value: 'hangzhou' },
          { label: '\u6DF1\u5733', value: 'shenzhen' },
          { label: '\u5317\u4EAC', value: 'beijing' },
        ],
      },
    },
    available_cities: {
      title: '\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02',
      // \u4F7F\u7528\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668
      renderType: 'AvailableCities',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const userCtx = useRef({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        labelWidth={180}
        actions={[]}
        schema={schema}
        value={value}
        onChange={setValue}
        // \u6CE8\u518C\u6E32\u67D3\u5668
        renderers={{ AvailableCities }}
        // \u5904\u7406\u8054\u52A8\u903B\u8F91
        watch={{
          cities: (formData, event) => {
            // \u5C06\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u6570\u636E\u8D4B\u503C\u7ED9 userCtx
            userCtx.current.cityList = event.extra.checkedOptions

            // \u5DF2\u9009\u4E2D\u7684\u503C\u4E0D\u5728\u8303\u56F4\u5185\uFF0C\u5219\u6E05\u9664
            if (!event.value.includes(formData.available_cities)) {
              formData.available_cities = undefined
            }
          },
        }}
        // \u4F20\u9012 userCtx \u6570\u636E
        userCtx={userCtx.current}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{react:S||(S=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":B,antd:R},renderOpts:{compile:function(){var v=W()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-form-render-react-880-relation-checkbox-demo-1":{component:x.memo(x.lazy(W()(h()().mark(function v(){var u,s,t,o,n,r,l,d;return h()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=g.sent,s=u.useState,g.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return t=g.sent,o=t.default,g.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=g.sent,r=n.default,l={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Select",renderOptions:{}}}},d=function(){var j=s({}),y=P()(j,2),i=y[0],C=y[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{labelWidth:180,actions:[],schema:l,value:i,onChange:C,watch:{cities:function(_,D){l.properties.available_cities.renderOptions.options=D.extra.checkedOptions,D.value.includes(_.available_cities)||(_.available_cities=void 0)}}}),x.createElement(o,{value:i}))},g.abrupt("return",{default:d});case 15:case"end":return g.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    cities: {
      title: '\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4',
      renderType: 'Checkbox',
      renderOptions: {
        options: [
          { label: '\u6210\u90FD', value: 'chengdu' },
          { label: '\u676D\u5DDE', value: 'hangzhou' },
          { label: '\u6DF1\u5733', value: 'shenzhen' },
          { label: '\u5317\u4EAC', value: 'beijing' },
        ],
      },
    },
    available_cities: {
      title: '\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02',
      renderType: 'Select',
      renderOptions: {},
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        labelWidth={180}
        actions={[]}
        schema={schema}
        value={value}
        onChange={setValue}
        watch={{
          cities: (formData, event) => {
            // \u4FEE\u6539 schema \u53C2\u6570\uFF0C\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019\u4F1A\u88AB\u5E94\u7528
            schema.properties.available_cities.renderOptions.options =
              event.extra.checkedOptions

            // \u5DF2\u9009\u4E2D\u7684\u503C\u4E0D\u5728\u8303\u56F4\u5185\uFF0C\u5219\u6E05\u9664
            if (!event.value.includes(formData.available_cities)) {
              formData.available_cities = undefined
            }
          },
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{react:S||(S=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var v=W()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},54811:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return A}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(73888),x=e(41989),$=e(74311),A={"examples-form-render-react-881-relation-select-multiple-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function B(){var R,T,v,u,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"SelectMultiple",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Checkbox",renderOptions:{options:m}}}};return g},l.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return R=l.sent,T=R.useState,l.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return v=l.sent,u=v.default,l.next=11,Promise.resolve().then(e.bind(e,74311));case 11:return s=l.sent,t=s.default,n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1],y=T(function(){return o()}),i=P()(y,2),C=i[0],O=i[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{labelWidth:180,actions:[],schema:C,value:f,onChange:j,watch:{cities:function(D,b){O(o(b.extra.selectedOptions)),b.value.includes(D.available_cities)||(D.available_cities=void 0)}}}),p.createElement(u,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-form-render-react-881-relation-select-multiple-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

function createSchema(available_cities_options = []) {
  const schema = {
    renderType: 'Root',
    properties: {
      cities: {
        title: '\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4',
        renderType: 'SelectMultiple',
        renderOptions: {
          options: [
            { label: '\u6210\u90FD', value: 'chengdu' },
            { label: '\u676D\u5DDE', value: 'hangzhou' },
            { label: '\u6DF1\u5733', value: 'shenzhen' },
            { label: '\u5317\u4EAC', value: 'beijing' },
          ],
        },
      },
      available_cities: {
        title: '\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02',
        renderType: 'Checkbox',
        renderOptions: {
          options: available_cities_options,
        },
      },
    },
  }
  return schema
}

const Demo = () => {
  const [value, setValue] = useState({})
  const [schema, setSchema] = useState(() => createSchema())

  return (
    <div className="example-layout-cols-2">
      <FormRender
        labelWidth={180}
        actions={[]}
        schema={schema}
        value={value}
        onChange={setValue}
        watch={{
          cities: (formData, event) => {
            // \u57FA\u4E8E\u4E0B\u62C9\u9009\u4E2D\u9879\uFF0C\u91CD\u65B0\u521B\u5EFA schema \u6E32\u67D3
            setSchema(createSchema(event.extra.selectedOptions))

            // \u5DF2\u9009\u4E2D\u7684\u503C\u4E0D\u5728\u8303\u56F4\u5185\uFF0C\u5219\u6E05\u9664
            if (!event.value.includes(formData.available_cities)) {
              formData.available_cities = undefined
            }
          },
        }}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var B=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}}}},37531:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return B}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(19632),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(73914),A=e(74311),B={"examples-form-render-react-890-benchmark-demo-0":{component:x.memo(x.lazy(W()(h()().mark(function R(){var T,v,u,s,t,o,n,r,l;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return T=m.sent,v=T.default,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=m.sent,s=u.useState,t=100,o={renderType:"Root",properties:{}},n=I()(Array(t).keys()),n.forEach(function(g){var f="field_".concat(g);o.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],l=function(){var f=s({}),j=P()(f,2),y=j[0],i=j[1],C=function(_,D){var b=parseInt(D.sPath.slice(6)),M=b-1,E=b+1,K="field_".concat(E>=t?M:E);_[K]=D.value,i(_)};return x.createElement(v,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:o,value:y,onChange:C})},m.abrupt("return",{default:l});case 15:case"end":return m.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
import { useState } from 'react'

/**
 * \u751F\u6210\u8868\u5355\u9879 schema
 */
const quantity = 100
const schema = { renderType: 'Root', properties: {} }
const numbers = [...Array(quantity).keys()]

numbers.forEach((num) => {
  const field = \`field_\${num}\`
  schema.properties[field] = {
    title: field,
    renderType: 'InputText',
    required: true,
  }
})

const layoutMinMax = ['200px', '1fr']

const Demo = () => {
  const [value, setValue] = useState({})

  // \u968F\u673A\u8054\u52A8
  const handleChange = (formData, event) => {
    const currentIndex = parseInt(event.sPath.slice(6))
    const prev = currentIndex - 1
    const next = currentIndex + 1
    const field = \`field_\${next >= quantity ? prev : next}\`
    formData[field] = event.value
    setValue(formData)
  }

  return (
    <FormRender
      layout="autoFill"
      layoutMinMax={layoutMinMax}
      itemLayout="vertical"
      schema={schema}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":A,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var R=W()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}},"examples-form-render-react-890-benchmark-demo-1":{component:x.memo(x.lazy(W()(h()().mark(function R(){var T,v,u,s,t,o,n,r,l;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return T=m.sent,v=T.default,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=m.sent,s=u.useState,t=300,o={renderType:"Root",properties:{}},n=I()(Array(t).keys()),n.forEach(function(g){var f="field_".concat(g);o.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],l=function(){var f=s({}),j=P()(f,2),y=j[0],i=j[1],C=function(_,D){var b=parseInt(D.sPath.slice(6)),M=b-1,E=b+1,K="field_".concat(E>=t?M:E);_[K]=D.value,i(_)};return x.createElement(v,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:o,value:y,onChange:C})},m.abrupt("return",{default:l});case 15:case"end":return m.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
import { useState } from 'react'

/**
 * \u751F\u6210\u8868\u5355\u9879 schema
 */
const quantity = 300
const schema = { renderType: 'Root', properties: {} }
const numbers = [...Array(quantity).keys()]

numbers.forEach((num) => {
  const field = \`field_\${num}\`
  schema.properties[field] = {
    title: field,
    renderType: 'InputText',
    required: true,
  }
})

const layoutMinMax = ['200px', '1fr']

const Demo = () => {
  const [value, setValue] = useState({})

  // \u968F\u673A\u8054\u52A8
  const handleChange = (formData, event) => {
    const currentIndex = parseInt(event.sPath.slice(6))
    const prev = currentIndex - 1
    const next = currentIndex + 1
    const field = \`field_\${next >= quantity ? prev : next}\`
    formData[field] = event.value
    setValue(formData)
  }

  return (
    <FormRender
      layout="autoFill"
      layoutMinMax={layoutMinMax}
      itemLayout="vertical"
      schema={schema}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":A,react:S||(S=e.t(x,2))},renderOpts:{compile:function(){var R=W()(h()().mark(function v(){var u,s=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}}}},53775:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return A}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(64768),x=e(41989),$=e(74311),A={"examples-form-render-react-900-renderers-warning-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function B(){var R,T,v,u,s,t,o,n;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return R=l.sent,T=R.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return v=l.sent,u=v.default,l.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=l.sent,t=s.default,o={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=T({}),g=P()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(t,{schema:o,value:f,onChange:j}),p.createElement(u,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-form-render-react-900-renderers-warning-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender schema={schema} value={value} onChange={setValue} />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var B=I()(h()().mark(function T(){var v,u=arguments;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(v=t.sent).default.apply(v,u));case 3:case"end":return t.stop()}},T)}));function R(){return B.apply(this,arguments)}return R}()}}}},88642:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return R}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(87004),x=e(41989),$=e(74311),A=e(69581),B=e(48201),R={"examples-form-render-react-901-label-vertical-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=m.sent,u=v.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,t=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},l=function(){var f=u({}),j=P()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelColon:"\uFF1A",schema:r,value:y,onChange:i}),p.createElement(t,{value:y}))},m.abrupt("return",{default:l});case 15:case"end":return m.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender from '@schema-render/form-render-react'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
    gender: {
      title: '\u6027\u522B',
      renderType: 'Radio',
      renderOptions: {
        options: [
          { label: '\u7537', value: 'male' },
          { label: '\u5973', value: 'female' },
        ],
      },
    },
  },
} as const

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        itemLayout="vertical"
        labelColon="\uFF1A"
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-form-render-react-901-label-vertical-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=i.sent,u=v.useState,i.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=i.sent,t=s.default,i.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,69581));case 14:return r=i.sent,l=r.QuestionCircleOutlined,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return d=i.sent,m=d.Popover,g={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(O){var _=O.schema,D=O.required,b=O.prefixClassNames;return p.createElement("div",null,_.title,!!_.titleDescription&&p.createElement(m,{placement:"top",trigger:"hover",content:_.titleDescription},p.createElement(l,{className:b("item-title-tooltip"),style:{marginLeft:4}})),!D&&" (\u53EF\u9009)")},j=function(){var O=u({}),_=P()(O,2),D=_[0],b=_[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelWidth:150,labelRender:f,schema:g,value:D,onChange:b}),p.createElement(t,{value:D}))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import FormRender, { ILabelRender } from '@schema-render/form-render-react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Popover } from 'antd'

const schema = {
  renderType: 'Root',
  properties: {
    account: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      renderType: 'Password',
      required: true,
    },
    gender: {
      title: '\u6027\u522B',
      renderType: 'Radio',
      renderOptions: {
        options: [
          { label: '\u7537', value: 'male' },
          { label: '\u5973', value: 'female' },
        ],
      },
    },
  },
} as const

const labelRender: ILabelRender = ({ schema, required, prefixClassNames }) => {
  return (
    <div>
      {/* \u6807\u9898 */}
      {schema.title}

      {/* \u6807\u9898\u63CF\u8FF0\u4FE1\u606F */}
      {!!schema.titleDescription && (
        <Popover placement="top" trigger="hover" content={schema.titleDescription}>
          <QuestionCircleOutlined
            className={prefixClassNames('item-title-tooltip')}
            style={{ marginLeft: 4 }}
          />
        </Popover>
      )}

      {/* \u5FC5\u586B\u6807\u8BB0\u5904\u7406 */}
      {!required && ' (\u53EF\u9009)'}
    </div>
  )
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        itemLayout="vertical"
        labelWidth={150}
        labelRender={labelRender}
        schema={schema}
        value={value}
        onChange={setValue}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:S||(S=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":$,"@ant-design/icons":A,antd:B},renderOpts:{compile:function(){var T=I()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},94270:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return r}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(43895),x=e(41989),$=e(48201),A=e(74072),B=e(2862),R=e(78469),T=e(74311),v=e(38959),u=e(36116),s=e(71856),t=e(68666),o=e(92114),n=e(362),r={"examples-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function l(){var d,m,g,f,j,y,i,C,O,_,D,b,M,E,K,N;return h()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return d=U.sent,m=d.default,U.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return g=U.sent,f=g.useState,j=g.useRef,U.next=11,Promise.resolve().then(e.bind(e,48201));case 11:return y=U.sent,i=y.Button,C=y.message,U.next=16,Promise.resolve().then(e.bind(e,74072));case 16:return O=U.sent,_=O.default,U.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return D=U.sent,b=D.default,U.next=24,Promise.resolve().then(e.bind(e,2862));case 24:return M=U.sent,E=M.default,K={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},N=function(){var Z=f({}),w=P()(Z,2),X=w[0],ae=w[1],te=j(),ue=function(){var ye=I()(h()().mark(function he(){var ve;return h()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:return Ie.next=2,te.current.validate();case 2:ve=Ie.sent,ve.hasError||C.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return Ie.stop()}},he)}));return function(){return ye.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement("div",null,p.createElement(_,{ref:te,schema:K,value:X,onChange:ae,itemLayout:b,renderers:E}),p.createElement(i,{type:"primary",style:{margin:"20px 0 0 115px"},onClick:ue},"\u63D0\u4EA4")),p.createElement(m,{value:X}))},U.abrupt("return",{default:N});case 29:case"end":return U.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { useState, useRef } from 'react'
import { Button, message } from 'antd'

import Core from '@schema-render/core-react' // \u5185\u6838
import Horizontal from './core-react/item-layout/Horizontal' // \u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784
import renderers from './core-react/renderers/common' // \u6E32\u67D3\u5668\u96C6\u5408

// Schema \u63CF\u8FF0
const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 20,
        placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26',
      },
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      description: '\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57',
      renderType: 'Password',
      renderOptions: {
        minLength: 6,
        maxLength: 20,
      },
      required: true,
      rules: [
        { min: 6, message: '\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26' },
        { max: 20, message: '\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26' },
        { pattern: '^[A-Za-z0-9]+$', message: '\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57' },
      ],
    },
    auto_login: {
      title: '\u81EA\u52A8\u767B\u5F55',
      titleDescription: '\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55',
      renderType: 'Switch',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef()

  const handleSubmit = async () => {
    const res = await coreRef.current.validate()
    if (!res.hasError) {
      message.success('\u63D0\u4EA4\u6210\u529F')
    }
  }

  return (
    <div className="example-layout-cols-2">
      <div>
        <Core
          ref={coreRef}
          schema={schema}
          value={value}
          onChange={setValue}
          itemLayout={Horizontal}
          renderers={renderers}
        />
        <Button
          type="primary"
          style={{ margin: '20px 0 0 115px' }}
          onClick={handleSubmit}
        >
          \u63D0\u4EA4
        </Button>
      </div>
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.10.1"},"./core-react/renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./core-react/item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./core-react/renderers/common.tsx":B,"./core-react/item-layout/Horizontal.tsx":R,"@examples/components/SyntaxHighlighter":x,react:S||(S=e.t(p,2)),antd:$,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var l=I()(h()().mark(function m(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function l(){var d,m,g,f,j,y,i,C,O,_;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return d=b.sent,m=d.default,b.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return g=b.sent,f=g.useState,b.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return j=b.sent,y=j.message,b.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return i=b.sent,C=i.default,O={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},_=function(){var E=f({}),K=P()(E,2),N=K[0],V=K[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(C,{schema:O,value:N,onChange:V,onSubmit:function(){return y.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(m,{value:N}))},b.abrupt("return",{default:_});case 19:case"end":return b.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { useState } from 'react'
import { message } from 'antd'

import FormRender from '@schema-render/form-render-react' // \u8868\u5355\u6E32\u67D3\u5E93

// Schema \u63CF\u8FF0
const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '\u7528\u6237\u540D',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 20,
        placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26',
      },
      required: true,
    },
    password: {
      title: '\u5BC6\u7801',
      description: '\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57',
      renderType: 'Password',
      renderOptions: {
        minLength: 6,
        maxLength: 20,
      },
      required: true,
      rules: [
        { min: 6, message: '\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26' },
        { max: 20, message: '\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26' },
        { pattern: '^[A-Za-z0-9]+$', message: '\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57' },
      ],
    },
    auto_login: {
      title: '\u81EA\u52A8\u767B\u5F55',
      titleDescription: '\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55',
      renderType: 'Switch',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={() => message.success('\u63D0\u4EA4\u6210\u529F')}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:S||(S=e.t(p,2)),antd:$,"@schema-render/form-render-react":T},renderOpts:{compile:function(){var l=I()(h()().mark(function m(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function l(){var d,m,g,f,j,y;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=C.sent,m=d.sleep,C.next=6,Promise.resolve().then(e.bind(e,36116));case 6:return g=C.sent,f=g.default,j={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},y=function(){var _=function(){var D=I()(h()().mark(function b(M){return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log("searchParams:",M),K.next=3,m();case 3:case"end":return K.stop()}},b)}));return function(M){return D.apply(this,arguments)}}();return p.createElement(f,{schema:j,onSubmit:_,onReset:_})},C.abrupt("return",{default:y});case 11:case"end":return C.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'

// \u5F15\u5165 Search
import Search from '@schema-render/search-react'

// \u5B9A\u4E49 Schema
const schema = {
  renderType: 'Root',
  properties: {
    supplier_name: {
      title: '\u4F9B\u5E94\u5546\u540D\u79F0',
      renderType: 'InputText',
    },
    supplier_code: {
      title: '\u4F9B\u5E94\u5546\u7F16\u7801',
      renderType: 'InputText',
    },
    bill_no: {
      title: '\u5355\u636E\u7F16\u53F7',
      renderType: 'InputText',
    },
    bill_type: {
      title: '\u5355\u636E\u7C7B\u578B',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u91C7\u8D2D\u5355', value: 1 },
          { label: '\u5165\u5E93\u5355', value: 2 },
          { label: '\u9000\u8D27\u5355', value: 3 },
        ],
      },
    },
    bill_date: {
      title: '\u5355\u636E\u65E5\u671F',
      renderType: 'DateRangePicker',
    },
    bill_status: {
      title: '\u5355\u636E\u72B6\u6001',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u5DF2\u63D0\u4EA4', value: 1 },
          { label: '\u5F85\u63D0\u4EA4', value: 2 },
          { label: '\u5F85\u5BA1\u6279', value: 3 },
        ],
      },
    },
    operator: {
      title: '\u5236\u5355\u4EBA',
      renderType: 'InputText',
    },
    goods_name: {
      title: '\u5546\u54C1\u540D\u79F0',
      renderType: 'InputText',
    },
    goods_code: {
      title: '\u5546\u54C1\u7F16\u7801',
      renderType: 'InputText',
    },
    goods_category: {
      title: '\u5546\u54C1\u5206\u7C7B',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u6C34\u679C\u9C9C\u82B1', value: 1 },
          { label: '\u6D77\u9C9C\u6C34\u4EA7', value: 2 },
          { label: '\u7CAE\u6CB9\u8C03\u5473', value: 3 },
        ],
      },
    },
  },
}

const Demo = () => {
  // \u5904\u7406\u641C\u7D22
  const handleSearch = async (searchParams) => {
    // \u6253\u5370\u641C\u7D22\u6761\u4EF6
    console.log('searchParams:', searchParams)

    // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u7B49\u64CD\u4F5C
    await sleep()
  }

  return <Search schema={schema} onSubmit={handleSearch} onReset={handleSearch} />
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.jsx"},context:{"@examples/utils":v,"@schema-render/search-react":u},renderOpts:{compile:function(){var l=I()(h()().mark(function m(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function l(){var d,m,g,f,j,y,i,C,O,_,D;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=M.sent,m=d.sleep,M.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return g=M.sent,f=g.default,M.next=10,Promise.resolve().then(e.bind(e,362));case 10:return j=M.sent,y=j.default,M.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return i=M.sent,C=i.default,M.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return O=M.sent,_=O.default,D=function(){return p.createElement(_,{search:{schema:f},table:{columns:y,showRowNumber:!0},request:function(){var K=I()(h()().mark(function V(U){var z;return h()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("searchParams:",U),w.next=3,m();case 3:return z=C(),w.abrupt("return",{data:z,total:100});case 5:case"end":return w.stop()}},V)}));function N(V){return K.apply(this,arguments)}return N}()})},M.abrupt("return",{default:D});case 22:case"end":return M.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './search-table-react/helpers/schema'
import columns from './search-table-react/helpers/columns'
import createDataSource from './search-table-react/helpers/createDataSource'

// \u5F15\u5165 Search
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        showRowNumber: true,
      }}
      request={async (searchParams) => {
        // \u6253\u5370\u641C\u7D22\u6761\u4EF6
        console.log('searchParams:', searchParams)

        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource()

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
        }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./search-table-react/helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./search-table-react/helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./search-table-react/helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./search-table-react/helpers/schema.ts":t,"./search-table-react/helpers/createDataSource.ts":o,"./search-table-react/helpers/columns.ts":n,"@examples/utils":v,"@schema-render/search-table-react":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":n},renderOpts:{compile:function(){var l=I()(h()().mark(function m(){var g,f=arguments;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function d(){return l.apply(this,arguments)}return d}()}}}},11124:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return v}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(67342),x=e(48201),$=e(38959),A=e(67247),B=e(36116),R=e(77095),T=e(36641),v={"examples-search-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=M.sent,t=s.useState,M.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return o=M.sent,n=o.ConfigProvider,r=o.Table,M.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return l=M.sent,d=l.sleep,M.next=15,Promise.resolve().then(e.bind(e,67247));case 15:return m=M.sent,g=m.default,M.next=19,Promise.resolve().then(e.bind(e,36641));case 19:return f=M.sent,j=f.default,M.next=23,Promise.resolve().then(e.bind(e,77095));case 23:return y=M.sent,i=y.default,M.next=27,Promise.resolve().then(e.bind(e,36116));case 27:return C=M.sent,O=C.default,_={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},D=function(){var K=t(function(){return i()}),N=P()(K,2),V=N[0],U=N[1],z=function(){var Z=I()(h()().mark(function w(X){return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return console.log("searchParams:",X),te.next=3,d();case 3:U(i());case 4:case"end":return te.stop()}},w)}));return function(X){return Z.apply(this,arguments)}}();return p.createElement(n,{locale:g},p.createElement(O,{schema:_,onSubmit:z,onReset:z}),p.createElement(r,{style:{marginTop:20},columns:j,dataSource:V,scroll:{x:1500}}))},M.abrupt("return",{default:D});case 32:case"end":return M.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { ConfigProvider, Table } from 'antd'
import { sleep } from '@examples/utils'
import zhCN from 'antd/locale/zh_CN'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'
import type { ISearchProps } from '@schema-render/search-react'

// \u5F15\u5165 Search
import Search from '@schema-render/search-react'

// \u5B9A\u4E49 Schema
const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    supplier_name: {
      title: '\u4F9B\u5E94\u5546\u540D\u79F0',
      renderType: 'InputText',
    },
    supplier_code: {
      title: '\u4F9B\u5E94\u5546\u7F16\u7801',
      renderType: 'InputText',
    },
    bill_no: {
      title: '\u5355\u636E\u7F16\u53F7',
      renderType: 'InputText',
    },
    bill_type: {
      title: '\u5355\u636E\u7C7B\u578B',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u91C7\u8D2D\u5355', value: 1 },
          { label: '\u5165\u5E93\u5355', value: 2 },
          { label: '\u9000\u8D27\u5355', value: 3 },
        ],
      },
    },
    bill_date: {
      title: '\u5355\u636E\u65E5\u671F',
      renderType: 'DateRangePicker',
    },
    bill_status: {
      title: '\u5355\u636E\u72B6\u6001',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u5DF2\u63D0\u4EA4', value: 1 },
          { label: '\u5F85\u63D0\u4EA4', value: 2 },
          { label: '\u5F85\u5BA1\u6279', value: 3 },
        ],
      },
    },
    operator: {
      title: '\u5236\u5355\u4EBA',
      renderType: 'InputText',
    },
    goods_name: {
      title: '\u5546\u54C1\u540D\u79F0',
      renderType: 'InputText',
    },
    goods_code: {
      title: '\u5546\u54C1\u7F16\u7801',
      renderType: 'InputText',
    },
    goods_category: {
      title: '\u5546\u54C1\u5206\u7C7B',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u6C34\u679C\u9C9C\u82B1', value: 1 },
          { label: '\u6D77\u9C9C\u6C34\u4EA7', value: 2 },
          { label: '\u7CAE\u6CB9\u8C03\u5473', value: 3 },
        ],
      },
    },
  },
}

const Demo = () => {
  const [dataSource, setDataSource] = useState(() => createDataSource())

  // \u5904\u7406\u641C\u7D22
  const handleSearch: ISearchProps['onSubmit'] = async (searchParams) => {
    // \u6253\u5370\u641C\u7D22\u6761\u4EF6
    console.log('searchParams:', searchParams)

    // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u5E76\u91CD\u65B0\u8BBE\u7F6E\u8868\u683C\u6570\u636E
    await sleep()
    setDataSource(createDataSource())
  }

  return (
    <ConfigProvider locale={zhCN}>
      {/* \u4F7F\u7528 */}
      <Search schema={schema} onSubmit={handleSearch} onReset={handleSearch} />
      <Table
        style={{ marginTop: 20 }}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1500 }}
      />
    </ConfigProvider>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(77538).Z},"./helpers/columns.ts":{type:"FILE",value:e(96390).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/columns.ts":T,react:S||(S=e.t(p,2)),antd:x,"@examples/utils":$,"antd/locale/zh_CN":A,"@schema-render/search-react":B,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/columns.ts":T},renderOpts:{compile:function(){var u=I()(h()().mark(function t(){var o,n=arguments;return h()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}}}},79899:function(G,c,e){e.r(c),e.d(c,{demos:function(){return $}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(27885),I=e(48201),p=e(38959),W=e(67247),x=e(36116),$={"examples-search-react-300-actions-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function A(){var B,R,T,v,u,s,t,o,n,r;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return B=d.sent,R=B.ConfigProvider,d.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return T=d.sent,v=T.sleep,d.next=10,Promise.resolve().then(e.bind(e,67247));case 10:return u=d.sent,s=u.default,d.next=14,Promise.resolve().then(e.bind(e,36116));case 14:return t=d.sent,o=t.default,n={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},r=function(){var g=function(){var j=L()(a()().mark(function y(i){return a()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log("searchParams:",i),O.next=3,v();case 3:case"end":return O.stop()}},y)}));return function(i){return j.apply(this,arguments)}}(),f=function(y){console.log("isCollapsed:",y)};return P.createElement(R,{locale:s},P.createElement(o,{schema:n,onSubmit:g,onReset:g,onToggleCollapsed:f}))},d.abrupt("return",{default:r});case 19:case"end":return d.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
import { sleep } from '@examples/utils'
import zhCN from 'antd/locale/zh_CN'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'
import type { ISearchProps } from '@schema-render/search-react'

// \u5F15\u5165 Search
import Search from '@schema-render/search-react'

// \u5B9A\u4E49 Schema
const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    supplier_name: {
      title: '\u4F9B\u5E94\u5546\u540D\u79F0',
      renderType: 'InputText',
    },
    supplier_code: {
      title: '\u4F9B\u5E94\u5546\u7F16\u7801',
      renderType: 'InputText',
    },
    bill_no: {
      title: '\u5355\u636E\u7F16\u53F7',
      renderType: 'InputText',
    },
    bill_type: {
      title: '\u5355\u636E\u7C7B\u578B',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u91C7\u8D2D\u5355', value: 1 },
          { label: '\u5165\u5E93\u5355', value: 2 },
          { label: '\u9000\u8D27\u5355', value: 3 },
        ],
      },
    },
    bill_date: {
      title: '\u5355\u636E\u65E5\u671F',
      renderType: 'DateRangePicker',
    },
    bill_status: {
      title: '\u5355\u636E\u72B6\u6001',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u5DF2\u63D0\u4EA4', value: 1 },
          { label: '\u5F85\u63D0\u4EA4', value: 2 },
          { label: '\u5F85\u5BA1\u6279', value: 3 },
        ],
      },
    },
    operator: {
      title: '\u5236\u5355\u4EBA',
      renderType: 'InputText',
    },
    goods_name: {
      title: '\u5546\u54C1\u540D\u79F0',
      renderType: 'InputText',
    },
    goods_code: {
      title: '\u5546\u54C1\u7F16\u7801',
      renderType: 'InputText',
    },
    goods_category: {
      title: '\u5546\u54C1\u5206\u7C7B',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u6C34\u679C\u9C9C\u82B1', value: 1 },
          { label: '\u6D77\u9C9C\u6C34\u4EA7', value: 2 },
          { label: '\u7CAE\u6CB9\u8C03\u5473', value: 3 },
        ],
      },
    },
  },
}

const Demo = () => {
  // \u5904\u7406\u641C\u7D22
  const handleSearch: ISearchProps['onSubmit'] = async (searchParams) => {
    // \u6253\u5370\u641C\u7D22\u6761\u4EF6
    console.log('searchParams:', searchParams)

    // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u5E76\u91CD\u65B0\u8BBE\u7F6E\u8868\u683C\u6570\u636E
    await sleep()
  }

  // \u5904\u7406\u6298\u53E0\u4E8B\u4EF6
  const onToggleCollapsed = (isCollapsed: boolean) => {
    // \u6253\u5370\u6298\u53E0\u72B6\u6001
    console.log('isCollapsed:', isCollapsed)
  }

  return (
    <ConfigProvider locale={zhCN}>
      <Search
        schema={schema}
        onSubmit={handleSearch}
        onReset={handleSearch}
        onToggleCollapsed={onToggleCollapsed}
      />
    </ConfigProvider>
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{antd:I,"@examples/utils":p,"antd/locale/zh_CN":W,"@schema-render/search-react":x},renderOpts:{compile:function(){var A=L()(a()().mark(function R(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},R)}));function B(){return A.apply(this,arguments)}return B}()}}}},49469:function(G,c,e){e.r(c),e.d(c,{demos:function(){return W}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(10122),I=e(36116),p=e(9686),W={"examples-search-react-700-locale-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function x(){var $,A,B,R,T,v;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return $=s.sent,A=$.default,s.next=6,Promise.resolve().then(e.bind(e,9686));case 6:return B=s.sent,R=B.default,T={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"}}},v=function(){return P.createElement(A,{schema:T,labelWidth:120,locale:R})},s.abrupt("return",{default:v});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-search-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from '@schema-render/search-react/dist/esm/locale/en_US'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    supplier_name: {
      title: 'Supplier Name',
      renderType: 'InputText',
    },
    supplier_code: {
      title: 'Supplier Code',
      renderType: 'InputText',
    },
    bill_no: {
      title: 'Bill No',
      renderType: 'InputText',
    },
    bill_date: {
      title: 'Bill Date',
      renderType: 'DateRangePicker',
    },
    bill_status: {
      title: 'Bill Status',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: 'submitted', value: 1 },
          { label: 'pending submit', value: 2 },
          { label: 'pending approval', value: 3 },
        ],
      },
    },
    operator: {
      title: 'Operator',
      renderType: 'InputText',
    },
    goods_name: {
      title: 'Goods Name',
      renderType: 'InputText',
    },
    goods_code: {
      title: 'Goods Code',
      renderType: 'InputText',
    },
  },
}

const Demo = () => {
  return (
    <Search
      schema={schema}
      labelWidth={120}
      /* \u914D\u7F6E\u8BED\u8A00\u5305 */
      locale={enUS}
    />
  )
}

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"}},entry:"index.tsx"},context:{"@schema-render/search-react":I,"@schema-render/search-react/dist/esm/locale/en_US":p},renderOpts:{compile:function(){var x=L()(a()().mark(function A(){var B,R=arguments;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(4019).then(e.bind(e,4019));case 2:return v.abrupt("return",(B=v.sent).default.apply(B,R));case 3:case"end":return v.stop()}},A)}));function $(){return x.apply(this,arguments)}return $}()}}}},90712:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(84123),h={}},11973:function(G,c,e){e.r(c),e.d(c,{demos:function(){return $}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(24197),I=e(36116),p=e(57864),W=e(35719),x=e(9680),$={"examples-search-react-850-category-title-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function A(){var B,R,T,v,u,s,t,o,n,r,l,d;return a()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return B=g.sent,R=B.default,g.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return T=g.sent,v=T.default,g.next=10,Promise.resolve().then(e.bind(e,57864));case 10:return u=g.sent,s=u.default,t={BankSelect:v,ObjectSectionTitle:s},o={renderType:"Root",properties:{basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"}}},payment:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}},collection:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}}}},n=function(j){var y=function(C,O){C[j].bank_id=O.extra.bank_id,C[j].bank_account=O.extra.bank_account,C[j].bank_name=O.extra.bank_name,C[j].bank_branch_name=O.extra.bank_branch_name};return y},r=n("payment"),l=n("collection"),d=function(){return P.createElement(R,{defaultCollapsed:!1,style:{gridTemplateColumns:"auto"},schema:o,renderers:t,actions:["collapse"],watch:{"payment.bank_account":r,"payment.bank_name":r,"payment.bank_branch_name":r,"collection.bank_account":l,"collection.bank_name":l,"collection.bank_branch_name":l}})},g.abrupt("return",{default:d});case 19:case"end":return g.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
import type { ISearchProps } from '@schema-render/search-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'
import BankSelect from './renderers/BankSelect'
import ObjectSectionTitle from './renderers/ObjectSectionTitle'

const renderers = {
  BankSelect,
  ObjectSectionTitle,
}

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    basic: {
      title: '\u57FA\u7840\u4FE1\u606F',
      renderType: 'ObjectSectionTitle',
      properties: {
        supplier_name: {
          title: '\u4F9B\u5E94\u5546\u540D\u79F0',
          renderType: 'InputText',
        },
        supplier_code: {
          title: '\u4F9B\u5E94\u5546\u7F16\u7801',
          renderType: 'InputText',
        },
        bill_no: {
          title: '\u5355\u636E\u7F16\u53F7',
          renderType: 'InputText',
        },
        bill_date: {
          title: '\u5355\u636E\u65E5\u671F',
          renderType: 'DateRangePicker',
        },
        goods_name: {
          title: '\u5546\u54C1\u540D\u79F0',
          renderType: 'InputText',
        },
        goods_code: {
          title: '\u5546\u54C1\u7F16\u7801',
          renderType: 'InputText',
        },
      },
    },
    payment: {
      title: '\u4ED8\u6B3E\u4FE1\u606F',
      renderType: 'ObjectSectionTitle',
      properties: {
        bank_name: {
          title: '\u5F00\u6237\u94F6\u884C\u540D\u79F0',
          renderType: 'BankSelect',
        },
        bank_branch_name: {
          title: '\u5F00\u6237\u652F\u884C\u540D\u79F0',
          renderType: 'BankSelect',
        },
        bank_account: {
          title: '\u5F00\u6237\u94F6\u884C\u8D26\u53F7',
          renderType: 'BankSelect',
        },
      },
    },
    collection: {
      title: '\u6536\u6B3E\u4FE1\u606F',
      renderType: 'ObjectSectionTitle',
      properties: {
        bank_name: {
          title: '\u5F00\u6237\u94F6\u884C\u540D\u79F0',
          renderType: 'BankSelect',
        },
        bank_branch_name: {
          title: '\u5F00\u6237\u652F\u884C\u540D\u79F0',
          renderType: 'BankSelect',
        },
        bank_account: {
          title: '\u5F00\u6237\u94F6\u884C\u8D26\u53F7',
          renderType: 'BankSelect',
        },
      },
    },
  },
}

// \u8054\u52A8\u903B\u8F91\u5904\u7406
const bankRelationFn = (filed: string) => {
  const watchFn: ISearchProps['onChange'] = (formData, event) => {
    formData[filed].bank_id = event.extra.bank_id
    formData[filed].bank_account = event.extra.bank_account
    formData[filed].bank_name = event.extra.bank_name
    formData[filed].bank_branch_name = event.extra.bank_branch_name
  }
  return watchFn
}

const paymentBankRelation = bankRelationFn('payment')
const collectionBankRelation = bankRelationFn('collection')

const Demo = () => {
  return (
    <Search
      defaultCollapsed={false}
      // \u5C06\u5916\u5C42\u7684 gridTemplateColumns \u6837\u5F0F\u53BB\u6389\uFF0C\u8BA9\u5BF9\u8C61\u6807\u9898\u53EF\u4EE5\u5360\u6EE1\u4E00\u884C
      style={{ gridTemplateColumns: 'auto' }}
      schema={schema}
      renderers={renderers}
      actions={['collapse']}
      /* \u76D1\u542C\u5173\u8054\u8868\u5355\u9879\u53D8\u5316\uFF0C\u8054\u52A8\u903B\u8F91\u5904\u7406 */
      watch={{
        'payment.bank_account': paymentBankRelation,
        'payment.bank_name': paymentBankRelation,
        'payment.bank_branch_name': paymentBankRelation,
        'collection.bank_account': collectionBankRelation,
        'collection.bank_name': collectionBankRelation,
        'collection.bank_branch_name': collectionBankRelation,
      }}
    />
  )
}

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./renderers/ObjectSectionTitle.tsx":{type:"FILE",value:e(97395).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/ObjectSectionTitle.tsx":p,"./renderers/BankSelect.tsx":W,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/ObjectSectionTitle.tsx":p,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":W},renderOpts:{compile:function(){var A=L()(a()().mark(function R(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},R)}));function B(){return A.apply(this,arguments)}return B}()}},"examples-search-react-850-category-title-demo-1":{component:P.memo(P.lazy(L()(a()().mark(function A(){var B,R,T,v,u,s,t,o,n,r,l,d,m;return a()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return B=f.sent,R=B.default,f.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return T=f.sent,v=T.default,f.next=10,Promise.resolve().then(e.bind(e,9680));case 10:return u=f.sent,s=u.default,t={BankSelect:v,SectionTitle:s},o={renderType:"Root",properties:{_section_title_x1:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"SectionTitle"},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},_section_title_x2:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},payment_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},payment_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},payment_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x3:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},collection_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},collection_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},collection_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x4:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},reason:{title:"\u4E8B\u7531",renderType:"InputText",spanStart:1,style:{width:"calc(100vw - 635px)"}},remark:{title:"\u5907\u6CE8",renderType:"TextArea",renderOptions:{rows:1},style:{gridColumn:"1/3"}}}},n=function(y){var i=function(O,_){O["".concat(y,"_bank_id")]=_.extra.bank_id,O["".concat(y,"_bank_account")]=_.extra.bank_account,O["".concat(y,"_bank_name")]=_.extra.bank_name,O["".concat(y,"_bank_branch_name")]=_.extra.bank_branch_name};return i},r=n("payment"),l=n("collection"),d=function(y){var i;if(!y)return 5;var C=y.clientWidth,O=((i=y.querySelector(".schema-render-form-item:nth-of-type(2)"))===null||i===void 0||(i=i.getBoundingClientRect())===null||i===void 0?void 0:i.width)||320;return Math.floor(C/O)*2},m=function(){return P.createElement(R,{defaultCollapsed:!1,schema:o,renderers:t,actions:["collapse"],watch:{payment_bank_account:r,payment_bank_name:r,payment_bank_branch_name:r,collection_bank_account:l,collection_bank_name:l,collection_bank_branch_name:l},calcCollapsedNumber:d})},f.abrupt("return",{default:m});case 20:case"end":return f.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
import type { ISearchProps } from '@schema-render/search-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'
import BankSelect from './renderers/BankSelect'
import SectionTitle from './renderers/SectionTitle'

const renderers = {
  BankSelect,
  SectionTitle,
}

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    _section_title_x1: {
      title: '\u57FA\u7840\u4FE1\u606F',
      renderType: 'SectionTitle',
    },
    supplier_name: {
      title: '\u4F9B\u5E94\u5546\u540D\u79F0',
      renderType: 'InputText',
      spanStart: 1,
    },
    supplier_code: {
      title: '\u4F9B\u5E94\u5546\u7F16\u7801',
      renderType: 'InputText',
    },
    bill_no: {
      title: '\u5355\u636E\u7F16\u53F7',
      renderType: 'InputText',
    },
    bill_date: {
      title: '\u5355\u636E\u65E5\u671F',
      renderType: 'DateRangePicker',
    },
    goods_name: {
      title: '\u5546\u54C1\u540D\u79F0',
      renderType: 'InputText',
    },
    goods_code: {
      title: '\u5546\u54C1\u7F16\u7801',
      renderType: 'InputText',
    },
    _section_title_x2: {
      title: '\u4ED8\u6B3E\u4FE1\u606F',
      renderType: 'SectionTitle',
      spanStart: 1,
    },
    payment_bank_name: {
      title: '\u5F00\u6237\u94F6\u884C\u540D\u79F0',
      renderType: 'BankSelect',
      spanStart: 1,
    },
    payment_bank_branch_name: {
      title: '\u5F00\u6237\u652F\u884C\u540D\u79F0',
      renderType: 'BankSelect',
    },
    payment_bank_account: {
      title: '\u5F00\u6237\u94F6\u884C\u8D26\u53F7',
      renderType: 'BankSelect',
    },
    _section_title_x3: {
      title: '\u6536\u6B3E\u4FE1\u606F',
      renderType: 'SectionTitle',
      spanStart: 1,
    },
    collection_bank_name: {
      title: '\u5F00\u6237\u94F6\u884C\u540D\u79F0',
      renderType: 'BankSelect',
      spanStart: 1,
    },
    collection_bank_branch_name: {
      title: '\u5F00\u6237\u652F\u884C\u540D\u79F0',
      renderType: 'BankSelect',
    },
    collection_bank_account: {
      title: '\u5F00\u6237\u94F6\u884C\u8D26\u53F7',
      renderType: 'BankSelect',
    },
    _section_title_x4: {
      title: '\u5176\u4ED6\u4FE1\u606F',
      renderType: 'SectionTitle',
      spanStart: 1,
    },
    reason: {
      title: '\u4E8B\u7531',
      renderType: 'InputText',
      spanStart: 1,
      style: {
        // \u8868\u5355\u9879\u5B9E\u9645\u5BBD\u5EA6\u901A\u8FC7 style.width \u8BBE\u7F6E
        width: 'calc(100vw - 635px)',
      },
    },
    remark: {
      title: '\u5907\u6CE8',
      renderType: 'TextArea',
      renderOptions: {
        rows: 1,
      },
      style: {
        // Search \u6A21\u5F0F\u4E0B\uFF0C\u4E0D\u652F\u6301 span \u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7 style \u5C5E\u6027\u8BBE\u7F6E
        gridColumn: '1/3',
      },
    },
  },
}

// \u8054\u52A8\u903B\u8F91\u5904\u7406
const bankRelationFn = (filed: string) => {
  const watchFn: ISearchProps['onChange'] = (formData, event) => {
    formData[\`\${filed}_bank_id\`] = event.extra.bank_id
    formData[\`\${filed}_bank_account\`] = event.extra.bank_account
    formData[\`\${filed}_bank_name\`] = event.extra.bank_name
    formData[\`\${filed}_bank_branch_name\`] = event.extra.bank_branch_name
  }
  return watchFn
}

const paymentBankRelation = bankRelationFn('payment')
const collectionBankRelation = bankRelationFn('collection')

// \u8BA1\u7B97\u6298\u53E0\u4E2A\u6570\u7B97\u6CD5\u8C03\u6574\uFF0C\u589E\u52A0\u6807\u9898\u9879\u4FDD\u7559
const calcCollapsedNumber: ISearchProps['calcCollapsedNumber'] = (container) => {
  // \u5BB9\u5668\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE\u515C\u5E95\u9ED8\u8BA4\u503C
  if (!container) {
    return 5
  }

  // \u5BB9\u5668\u5BBD\u5EA6
  const containerWidth = container.clientWidth

  // \u5B50\u8282\u70B9\u5BBD\u5EA6
  const childWidth =
    container
      .querySelector('.schema-render-form-item:nth-of-type(2)')
      ?.getBoundingClientRect()?.width || 320

  // \u8BA1\u7B97\u6298\u53E0\u4E2A\u6570
  return Math.floor(containerWidth / childWidth) * 2
}

const Demo = () => {
  return (
    <Search
      defaultCollapsed={false}
      schema={schema}
      renderers={renderers}
      actions={['collapse']}
      /* \u76D1\u542C\u5173\u8054\u8868\u5355\u9879\u53D8\u5316\uFF0C\u8054\u52A8\u903B\u8F91\u5904\u7406 */
      watch={{
        payment_bank_account: paymentBankRelation,
        payment_bank_name: paymentBankRelation,
        payment_bank_branch_name: paymentBankRelation,
        collection_bank_account: collectionBankRelation,
        collection_bank_name: collectionBankRelation,
        collection_bank_branch_name: collectionBankRelation,
      }}
      calcCollapsedNumber={calcCollapsedNumber}
    />
  )
}

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.10.1"},"./renderers/SectionTitle.tsx":{type:"FILE",value:e(5038).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/SectionTitle.tsx":x,"./renderers/BankSelect.tsx":W,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/SectionTitle.tsx":x,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":W},renderOpts:{compile:function(){var A=L()(a()().mark(function R(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},R)}));function B(){return A.apply(this,arguments)}return B}()}}}},79181:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return o}});var a=e(5574),h=e.n(a),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(69306),A=e(38959),B=e(71856),R=e(92114),T=e(68666),v=e(362),u=e(48201),s=e(67247),t=e(91845),o={"examples-search-table-react-001-intro-demo-0":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=D.sent,l=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=D.sent,m=d.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=D.sent,f=g.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=D.sent,y=j.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=D.sent,C=i.default,O=function(){return x.createElement(C,{search:{schema:m},table:{columns:f},request:function(){var M=W()(I()().mark(function K(N){var V;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return console.log("searchParams:",N),z.next=3,l();case 3:return V=y(N.pageSize),z.abrupt("return",{data:V,total:100});case 5:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},D.abrupt("return",{default:O});case 22:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'

// \u5F15\u5165 Search
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{ columns }}
      request={async (searchParams) => {
        // \u6253\u5370\u641C\u7D22\u6761\u4EF6
        console.log('searchParams:', searchParams)

        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
        }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-001-intro-demo-1":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O,_,D,b,M,E,K,N,V,U,z,Z,w,X,ae,te,ue,ye;return I()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=ve.sent,l=r.sleep,ve.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=ve.sent,m=d.default,ve.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=ve.sent,f=g.default,ve.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=ve.sent,y=j.default,ve.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=ve.sent,C=i.default,ve.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return O=ve.sent,_=O.useState,D=O.useRef,ve.next=27,Promise.resolve().then(e.bind(e,48201));case 27:return b=ve.sent,M=b.ConfigProvider,E=b.message,K=b.Button,N=b.Tag,ve.next=34,Promise.resolve().then(e.bind(e,67247));case 34:return V=ve.sent,U=V.default,ve.next=38,Promise.resolve().then(e.bind(e,91845));case 38:return z=ve.sent,Z=z.pinyin,w=/[\u4e00-\u9fa5]/,X=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],ae=f.map(function(Pe,Ie){var Ee=P()({},Pe);return Ie===0?Ee.fixed="left":Ie===f.length-1&&(Ee.fixed="right"),Ee}),te={height:50,lineHeight:"50px",marginBottom:16,borderRadius:10,textAlign:"center",background:"#b6e0fa"},ue=function(Ie){return l()},ye=function(){var Ie=_("1"),Ee=h()(Ie,2),be=Ee[0],Oe=Ee[1],Ce=D(null),Ae=function(Me,je){return[{text:"\u7F16\u8F91",onClick:function(){E.success("\u70B9\u51FB\u4E86\u7B2C ".concat(je," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Le=W()(I()().mark(function Be(){var Ge;return I()().wrap(function(Ye){for(;;)switch(Ye.prev=Ye.next){case 0:return Ye.next=2,ue(Me.id);case 2:(Ge=Ce.current)===null||Ge===void 0||Ge.refresh();case 3:case"end":return Ye.stop()}},Be)}));function ze(){return Le.apply(this,arguments)}return ze}()}]};return x.createElement(M,{locale:U},x.createElement(C,{ref:Ce,search:{schema:m,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:be,items:X,onChange:Oe},leftExtraContent:function(Me){var je=Me.loading;return x.createElement(K,{disabled:je},"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(Me){var je=Me.loading;return x.createElement(K,{disabled:je},"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9")}},titleTop:function(){return x.createElement("div",{style:te},"Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49")},titleBottom:function(){return x.createElement("div",{style:te},"Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49")},header:function(){return x.createElement("div",{style:te},"Header \u5185\u5BB9\u81EA\u5B9A\u4E49")},footer:function(){return x.createElement("div",{style:P()(P()({},te),{},{marginTop:16})},"Footer \u5185\u5BB9\u81EA\u5B9A\u4E49")},table:{columns:ae,showRowNumber:!0,actionItems:Ae,actionItemsCount:3,actionItemsColumnData:{width:180},sortMode:"local-all",sortStringValueTransform:function(Me){return w.test(Me)?Z(Me,{toneType:"none"}):Me}},request:function(){var Se=W()(I()().mark(function je(Le){var ze,Be;return I()().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:return He.next=2,l();case 2:return ze=y(Le.pageSize),Be=ze.reduce(function(Ye,$e){return Ye+$e.goods_price},0).toFixed(2),He.abrupt("return",{data:ze,total:100,summaryData:{supplier_code:x.createElement(N,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:Be}});case 5:case"end":return He.stop()}},je)}));function Me(je){return Se.apply(this,arguments)}return Me}()}))},ve.abrupt("return",{default:ye});case 47:case"end":return ve.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { useState, useRef } from 'react'
import { ConfigProvider, message, Button, Tag } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { pinyin } from 'pinyin-pro'

// \u68C0\u67E5\u662F\u5426\u4E3A\u4E2D\u6587\u7684\u6B63\u5219
const REG_CHINESE = /[\\u4e00-\\u9fa5]/

const items = [
  { key: '1', label: '\u5DF2\u63D0\u4EA4' },
  { key: '2', label: '\u5F85\u63D0\u4EA4' },
  { key: '3', label: '\u5F85\u5BA1\u6838' },
]

// \u521B\u5EFA\u56FA\u5B9A\u5217
const fixedColumns = columns.map((col, index) => {
  const newCol = { ...col }

  if (index === 0) {
    newCol.fixed = 'left'
  } else if (index === columns.length - 1) {
    newCol.fixed = 'right'
  }

  return newCol
})

const titleSectionStyle = {
  height: 50,
  lineHeight: '50px',
  marginBottom: 16,
  borderRadius: 10,
  textAlign: 'center',
  background: '#b6e0fa',
}

// \u6A21\u62DF\u5220\u9664\u63A5\u53E3
const postDeleteBill = (_id: string) => sleep()

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: Record<string, any>, index: number) => {
    return [
      {
        text: '\u7F16\u8F91',
        onClick: () => {
          message.success(\`\u70B9\u51FB\u4E86\u7B2C \${index} \u4E2A\u7F16\u8F91\`)
        },
      },
      {
        text: '\u8BE6\u60C5',
        href: 'https://schema-render.js.org/',
        target: '_blank',
      },

      {
        text: '\u5220\u9664',
        danger: true,
        // \u589E\u52A0\u4E8C\u6B21\u786E\u8BA4
        confirmAgain: true,
        onClick: async () => {
          // \u8C03\u7528\u5220\u9664\u63A5\u53E3
          await postDeleteBill(record.id)
          // \u5237\u65B0\u8868\u683C\u6570\u636E
          STableRef.current?.refresh()
        },
      },
    ]
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema, labelWidth: 80 }}
        title={{
          // \u663E\u793A\u5237\u65B0\u6309\u94AE
          showRefresh: true,
          // \u663E\u793A\u5217\u8BBE\u7F6E\u6309\u94AE
          showSetting: true,
          // \u6807\u7B7E\u9875
          tabs: {
            activeKey,
            items,
            onChange: setActiveKey,
          },
          leftExtraContent: ({ loading }) => (
            <Button disabled={loading}>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9</Button>
          ),
          rightExtraContent: ({ loading }) => (
            <Button disabled={loading}>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9</Button>
          ),
        }}
        titleTop={() => <div style={titleSectionStyle}>Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49</div>}
        titleBottom={() => <div style={titleSectionStyle}>Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49</div>}
        header={() => <div style={titleSectionStyle}>Header \u5185\u5BB9\u81EA\u5B9A\u4E49</div>}
        footer={() => (
          <div style={{ ...titleSectionStyle, marginTop: 16 }}>Footer \u5185\u5BB9\u81EA\u5B9A\u4E49</div>
        )}
        table={{
          columns: fixedColumns,
          // \u663E\u793A\u5E8F\u53F7\u680F
          showRowNumber: true,
          // \u6DFB\u52A0\u64CD\u4F5C\u5217\u4E0E\u914D\u7F6E\u4E2A\u6570\u3001\u5BBD\u5EA6
          actionItems,
          actionItemsCount: 3,
          actionItemsColumnData: {
            width: 180,
          },
          // \u524D\u7AEF\u6392\u5E8F\u6240\u6709\u5B57\u6BB5
          sortMode: 'local-all',
          sortStringValueTransform: (value) => {
            return REG_CHINESE.test(value) ? pinyin(value, { toneType: 'none' }) : value
          },
        }}
        request={async (searchParams) => {
          // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          // \u8BA1\u7B97\u5546\u54C1\u5408\u8BA1\u603B\u4EF7
          const totalPrice = data
            .reduce((total, item) => total + item.goods_price, 0)
            .toFixed(2)

          return {
            data,
            total: 100,
            // \u5408\u8BA1\u680F\u6570\u636E
            summaryData: {
              // \u5BF9\u5E94\u300C\u4F9B\u5E94\u5546\u7F16\u7801\u300D
              supplier_code: <Tag color="blue">\u81EA\u5B9A\u4E49\u5185\u5BB9</Tag>,
              // \u5BF9\u5E94\u300C\u5546\u54C1\u4EF7\u683C\u300D
              goods_price: totalPrice,
            },
          }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":B,react:S||(S=e.t(x,2)),antd:u,"antd/locale/zh_CN":s,"pinyin-pro":t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}}}},37629:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return T}});var a=e(15009),h=e.n(a),L=e(99289),P=e.n(L),H=e(67294),I=e(72106),p=e(38959),W=e(71856),x=e(92114),$=e(68666),A=e(362),B=e(48201),R=e(67247),T={"examples-search-table-react-010-table-actions-demo-0":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return u=y.sent,s=u.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=y.sent,o=t.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=y.sent,r=n.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=y.sent,d=l.default,y.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=y.sent,g=m.default,f=function(){return H.createElement(g,{search:{schema:o},table:{columns:r,showRowNumber:!0},request:function(){var C=P()(h()().mark(function _(D){var b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,s();case 2:return b=d(D.pageSize),E.abrupt("return",{data:b,total:100});case 4:case"end":return E.stop()}},_)}));function O(_){return C.apply(this,arguments)}return O}()})},y.abrupt("return",{default:f});case 22:case"end":return y.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        // \u6DFB\u52A0\u5E8F\u53F7\u5217
        showRowNumber: true,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return {
          data,
          total: 100,
        }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,"@examples/utils":p,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-search-table-react-010-table-actions-demo-1":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return u=i.sent,s=u.sleep,i.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=i.sent,o=t.default,i.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=i.sent,d=l.default,i.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=i.sent,g=m.default,f=function(O,_,D){return H.createElement("div",{style:{width:20,height:20,borderRadius:"50%",background:"black",color:"white",display:"inline-flex",justifyContent:"center",alignItems:"center"}},D+1)},j=function(){return H.createElement(g,{search:{schema:o},table:{columns:r,showRowNumber:!0,rowNumberColumnData:{width:80,render:f}},request:function(){var O=P()(h()().mark(function D(b){var M;return h()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return M=d(b.pageSize),K.abrupt("return",{data:M,total:100});case 4:case"end":return K.stop()}},D)}));function _(D){return O.apply(this,arguments)}return _}()})},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

// \u81EA\u5B9A\u4E49\u5E8F\u53F7\u5217\u6E32\u67D3
const customRowNumberRender = (_t: string, _r: object, index: number) => {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'black',
        color: 'white',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {index + 1}
    </div>
  )
}

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        // \u6DFB\u52A0\u5E8F\u53F7\u5217
        showRowNumber: true,
        // \u914D\u7F6E\u5E8F\u53F7\u5217\u5C5E\u6027
        rowNumberColumnData: {
          // \u81EA\u5B9A\u4E49\u5BBD\u5EA6
          width: 80,
          // \u81EA\u5B9A\u4E49\u6E32\u67D3
          render: customRowNumberRender,
        },
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return {
          data,
          total: 100,
        }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,"@examples/utils":p,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-search-table-react-010-table-actions-demo-2":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y,i,C,O;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return u=D.sent,s=u.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=D.sent,o=t.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=D.sent,r=n.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=D.sent,d=l.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=D.sent,g=m.default,D.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return f=D.sent,j=f.ConfigProvider,y=f.message,D.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return i=D.sent,C=i.default,O=function(){var M=function(K,N){return[{text:"\u7F16\u8F91",onClick:function(){y.success("\u70B9\u51FB\u4E86\u7B2C ".concat(N," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"}]};return H.createElement(j,{locale:C},H.createElement(g,{search:{schema:o},table:{columns:r,actionItems:M},request:function(){var E=P()(h()().mark(function N(V){var U;return h()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,s();case 2:return U=d(V.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return E.apply(this,arguments)}return K}()}))},D.abrupt("return",{default:O});case 31:case"end":return D.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { ConfigProvider, message } from 'antd'
import zhCN from 'antd/locale/zh_CN'

const Demo = () => {
  const actionItems = (_record: Record<string, any>, index: number) => {
    return [
      {
        text: '\u7F16\u8F91',
        onClick: () => {
          message.success(\`\u70B9\u51FB\u4E86\u7B2C \${index} \u4E2A\u7F16\u8F91\`)
        },
      },
      {
        text: '\u8BE6\u60C5',
        href: 'https://schema-render.js.org/',
        target: '_blank',
      },
    ]
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          // \u6DFB\u52A0\u64CD\u4F5C\u5217
          actionItems,
        }}
        request={async (searchParams) => {
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return {
            data,
            total: 100,
          }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,"@examples/utils":p,"@schema-render/search-table-react":W,antd:B,"antd/locale/zh_CN":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-search-table-react-010-table-actions-demo-3":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=E.sent,s=u.useRef,E.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=E.sent,o=t.sleep,E.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=E.sent,r=n.default,E.next=14,Promise.resolve().then(e.bind(e,362));case 14:return l=E.sent,d=l.default,E.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return m=E.sent,g=m.default,E.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return f=E.sent,j=f.default,E.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=E.sent,i=y.ConfigProvider,C=y.message,E.next=31,Promise.resolve().then(e.bind(e,67247));case 31:return O=E.sent,_=O.default,D=function(N){return o()},b=function(){var N=s(null),V=function(z,Z){return[{text:"\u7F16\u8F91",onClick:function(){C.success("\u70B9\u51FB\u7B2C ".concat(Z," \u7F16\u8F91\u4E86"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var w=P()(h()().mark(function ae(){var te;return h()().wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:return ye.next=2,D(z.id);case 2:(te=N.current)===null||te===void 0||te.refresh();case 3:case"end":return ye.stop()}},ae)}));function X(){return w.apply(this,arguments)}return X}()}]};return H.createElement(i,{locale:_},H.createElement(j,{ref:N,search:{schema:r},table:{columns:d,actionItems:V,actionItemsDropdownProps:{overlayClassName:"my-dropdown-class-name"}},request:function(){var U=P()(h()().mark(function Z(w){var X;return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,o();case 2:return X=g(w.pageSize),te.abrupt("return",{data:X,total:100});case 4:case"end":return te.stop()}},Z)}));function z(Z){return U.apply(this,arguments)}return z}()}))},E.abrupt("return",{default:b});case 36:case"end":return E.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { ConfigProvider, message } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// \u6A21\u62DF\u5220\u9664\u63A5\u53E3
const postDeleteBill = (_id: string) => sleep()

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: Record<string, any>, index: number) => {
    return [
      {
        text: '\u7F16\u8F91',
        onClick: () => {
          message.success(\`\u70B9\u51FB\u7B2C \${index} \u7F16\u8F91\u4E86\`)
        },
      },
      {
        text: '\u8BE6\u60C5',
        href: 'https://schema-render.js.org/',
        target: '_blank',
      },
      {
        text: '\u5220\u9664',
        danger: true,
        // \u589E\u52A0\u4E8C\u6B21\u786E\u8BA4
        confirmAgain: true,
        onClick: async () => {
          // \u8C03\u7528\u5220\u9664\u63A5\u53E3
          await postDeleteBill(record.id)
          // \u5237\u65B0\u8868\u683C\u6570\u636E
          STableRef.current?.refresh()
        },
      },
    ]
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema }}
        table={{
          columns,
          // \u6DFB\u52A0\u64CD\u4F5C\u5217
          actionItems,
          // \u4E3A\u64CD\u4F5C\u6309\u94AE\u4E0B\u62C9\u83DC\u5355\u6DFB\u52A0\u7279\u5B9A\u6837\u5F0F\u7C7B\u540D
          actionItemsDropdownProps: {
            overlayClassName: 'my-dropdown-class-name',
          },
        }}
        request={async (searchParams) => {
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return {
            data,
            total: 100,
          }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,react:S||(S=e.t(H,2)),"@examples/utils":p,"@schema-render/search-table-react":W,antd:B,"antd/locale/zh_CN":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}},"examples-search-table-react-010-table-actions-demo-4":{component:H.memo(H.lazy(P()(h()().mark(function v(){var u,s,t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D;return h()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=M.sent,s=u.useRef,M.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=M.sent,o=t.sleep,M.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=M.sent,r=n.default,M.next=14,Promise.resolve().then(e.bind(e,362));case 14:return l=M.sent,d=l.default,M.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return m=M.sent,g=m.default,M.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return f=M.sent,j=f.default,M.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=M.sent,i=y.ConfigProvider,M.next=30,Promise.resolve().then(e.bind(e,67247));case 30:return C=M.sent,O=C.default,_=function(K){return o()},D=function(){var K=s(null),N=function(U,z){return[{text:H.createElement("a",{href:"https://schema-render.js.org/",style:{color:"green",padding:"0 7px"},key:"link-".concat(z)},"\u7F16\u8F91")},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,confirmProps:{title:"\u6E29\u99A8\u63D0\u793A",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010".concat(U.supplier_code,"\u3011\u4F9B\u5E94\u5546\u5417\uFF1F")},onClick:function(){var Z=P()(h()().mark(function X(){var ae;return h()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,_(U.id);case 2:(ae=K.current)===null||ae===void 0||ae.refresh();case 3:case"end":return ue.stop()}},X)}));function w(){return Z.apply(this,arguments)}return w}()}]};return H.createElement(i,{locale:O},H.createElement(j,{ref:K,search:{schema:r},table:{columns:d,actionItems:N,actionItemsCount:3,actionItemsColumnData:{width:180}},request:function(){var V=P()(h()().mark(function z(Z){var w;return h()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,o();case 2:return w=g(Z.pageSize),ae.abrupt("return",{data:w,total:100});case 4:case"end":return ae.stop()}},z)}));function U(z){return V.apply(this,arguments)}return U}()}))},M.abrupt("return",{default:D});case 35:case"end":return M.stop()}},v)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { ConfigProvider, message } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// \u6A21\u62DF\u5220\u9664\u63A5\u53E3
const postDeleteBill = (_id: string) => sleep()

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: Record<string, any>, index: number) => {
    return [
      {
        text: (
          <a
            href="https://schema-render.js.org/"
            style={{ color: 'green', padding: '0 7px' }}
            key={\`link-\${index}\`}
          >
            \u7F16\u8F91
          </a>
        ),
      },
      {
        text: '\u8BE6\u60C5',
        href: 'https://schema-render.js.org/',
        target: '_blank',
      },
      {
        text: '\u5220\u9664',
        danger: true,
        confirmAgain: true,
        confirmProps: {
          title: '\u6E29\u99A8\u63D0\u793A',
          description: \`\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010\${record.supplier_code}\u3011\u4F9B\u5E94\u5546\u5417\uFF1F\`,
        },
        onClick: async () => {
          // \u8C03\u7528\u5220\u9664\u63A5\u53E3
          await postDeleteBill(record.id)
          // \u5237\u65B0\u8868\u683C\u6570\u636E
          STableRef.current?.refresh()
        },
      },
    ]
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema }}
        table={{
          columns,
          actionItems,
          actionItemsCount: 3,
          // \u8BBE\u7F6E\u64CD\u4F5C\u5217\u5C5E\u6027\uFF0C\u5982\u5BBD\u5EA6
          actionItemsColumnData: {
            width: 180,
          },
        }}
        request={async (searchParams) => {
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return {
            data,
            total: 100,
          }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,react:S||(S=e.t(H,2)),"@examples/utils":p,"@schema-render/search-table-react":W,antd:B,"antd/locale/zh_CN":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var v=P()(h()().mark(function s(){var t,o=arguments;return h()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,o));case 3:case"end":return r.stop()}},s)}));function u(){return v.apply(this,arguments)}return u}()}}}},89588:function(G,c,e){e.r(c),e.d(c,{demos:function(){return R}});var S=e(97857),a=e.n(S),h=e(15009),L=e.n(h),P=e(99289),H=e.n(P),I=e(67294),p=e(17258),W=e(38959),x=e(71856),$=e(92114),A=e(68666),B=e(362),R={"examples-search-table-react-020-table-height-demo-0":{component:I.memo(I.lazy(H()(L()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g;return L()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return v=j.sent,u=v.sleep,j.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=j.sent,t=s.default,j.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=j.sent,n=o.default,j.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=j.sent,l=r.default,j.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return d=j.sent,m=d.default,g=function(){return I.createElement(m,{style:{height:500,overflow:"hidden"},search:{schema:t},table:{columns:n,autoScrollY:!0},request:function(){var i=H()(L()().mark(function O(_){var D;return L()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,u();case 2:return D=l(_.pageSize),M.abrupt("return",{data:D,total:100});case 4:case"end":return M.stop()}},O)}));function C(O){return i.apply(this,arguments)}return C}()})},j.abrupt("return",{default:g});case 22:case"end":return j.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      style={{
        // \u4FDD\u8BC1 SearchTable \u9AD8\u5EA6\u662F\u4E2A\u56FA\u5B9A\u503C
        height: 500,
        overflow: 'hidden',
      }}
      search={{ schema }}
      table={{
        columns,
        // \u5F00\u542F\u81EA\u52A8\u6EDA\u52A8 Y \u8F74\u8BA1\u7B97
        autoScrollY: true,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":A,"./helpers/columns.ts":B,"@examples/utils":W,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B},renderOpts:{compile:function(){var T=H()(L()().mark(function u(){var s,t=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-020-table-height-demo-1":{component:I.memo(I.lazy(H()(L()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f;return L()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return v=y.sent,u=v.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=y.sent,t=s.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=y.sent,l=r.default,y.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return d=y.sent,m=d.default,g={height:50,lineHeight:"50px",marginTop:16,borderRadius:10,textAlign:"center",background:"lightskyblue"},f=function(){return I.createElement(m,{style:{height:700,overflow:"hidden"},search:{schema:t},table:{columns:n,autoScrollY:!0},request:function(){var C=H()(L()().mark(function _(D){var b;return L()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,u();case 2:return b=l(D.pageSize),E.abrupt("return",{data:b,total:100});case 4:case"end":return E.stop()}},_)}));function O(_){return C.apply(this,arguments)}return O}(),header:function(){return I.createElement("div",{style:a()(a()({},g),{},{margin:"0 0 16px 0"})},"Header")},titleTop:function(){return I.createElement("div",{style:g},"Title Top")},titleBottom:function(){return I.createElement("div",{style:g},"Title Bottom")},footer:function(){return I.createElement("div",{style:g},"Footer")}})},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const style = {
  height: 50,
  lineHeight: '50px',
  marginTop: 16,
  borderRadius: 10,
  textAlign: 'center',
  background: 'lightskyblue',
}

const Demo = () => {
  return (
    <SearchTable
      style={{
        // \u4FDD\u8BC1 SearchTable \u9AD8\u5EA6\u5B58\u5728
        height: 700,
        overflow: 'hidden',
      }}
      search={{ schema }}
      table={{
        columns,
        // \u5F00\u542F\u81EA\u52A8\u6EDA\u52A8 Y \u8F74\u8BA1\u7B97
        autoScrollY: true,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
      header={() => <div style={{ ...style, margin: '0 0 16px 0' }}>Header</div>}
      titleTop={() => <div style={style}>Title Top</div>}
      titleBottom={() => <div style={style}>Title Bottom</div>}
      footer={() => <div style={style}>Footer</div>}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":A,"./helpers/columns.ts":B,"@examples/utils":W,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B},renderOpts:{compile:function(){var T=H()(L()().mark(function u(){var s,t=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},64929:function(G,c,e){e.r(c),e.d(c,{demos:function(){return R}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(73865),I=e(48201),p=e(38959),W=e(71856),x=e(92114),$=e(68666),A=e(362),B=e(23786),R={"examples-search-table-react-030-table-summay-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,m=d.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300}},request:function(){var O=L()(a()().mark(function D(b){var M,E;return a()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,t();case 2:return M=m(b.pageSize),E=M.reduce(function(V,U){return V+U.goods_price},0).toFixed(2),N.abrupt("return",{data:M,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:E}});case 5:case"end":return N.stop()}},D)}));function _(D){return O.apply(this,arguments)}return _}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{ columns, scroll: { y: 300 } }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // \u8BA1\u7B97\u5546\u54C1\u5408\u8BA1\u603B\u4EF7
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
          // \u5408\u8BA1\u680F\u6570\u636E
          summaryData: {
            // \u5BF9\u5E94\u300C\u4F9B\u5E94\u5546\u7F16\u7801\u300D
            supplier_code: <Tag color="blue">\u81EA\u5B9A\u4E49\u5185\u5BB9</Tag>,
            // \u5BF9\u5E94\u300C\u5546\u54C1\u4EF7\u683C\u300D
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(a()().mark(function u(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-1":{component:P.memo(P.lazy(L()(a()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,m=d.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},_=P.createElement("div",{style:{color:"red",fontWeight:"bold"}},"\u5408\u8BA1");return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,summaryText:_,actionItems:O},request:function(){var D=L()(a()().mark(function M(E){var K,N;return a()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,t();case 2:return K=m(E.pageSize),N=K.reduce(function(z,Z){return z+Z.goods_price},0).toFixed(2),U.abrupt("return",{data:K,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:N}});case 5:case"end":return U.stop()}},M)}));function b(M){return D.apply(this,arguments)}return b}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  const actionItems = () => [{ text: '\u7F16\u8F91' }, { text: '\u5220\u9664' }]
  const summaryText = <div style={{ color: 'red', fontWeight: 'bold' }}>\u5408\u8BA1</div>
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        scroll: { y: 300 },
        showRowNumber: true,
        summaryText,
        actionItems,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // \u8BA1\u7B97\u5546\u54C1\u5408\u8BA1\u603B\u4EF7
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
          // \u5408\u8BA1\u680F\u6570\u636E
          summaryData: {
            supplier_code: <Tag color="blue">\u81EA\u5B9A\u4E49\u5185\u5BB9</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(a()().mark(function u(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-2":{component:P.memo(P.lazy(L()(a()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,m=d.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},actionItems:O,rowSelection:{columnWidth:60,fixed:!0,type:"checkbox"}},request:function(){var _=L()(a()().mark(function b(M){var E,K;return a()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,t();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},b)}));function D(b){return _.apply(this,arguments)}return D}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  const actionItems = () => [{ text: '\u7F16\u8F91' }, { text: '\u5220\u9664' }]
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        scroll: { y: 300 },
        actionItems,
        rowSelection: {
          columnWidth: 60,
          fixed: true,
          type: 'checkbox',
        },
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // \u8BA1\u7B97\u5546\u54C1\u5408\u8BA1\u603B\u4EF7
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
          // \u5408\u8BA1\u680F\u6570\u636E
          summaryData: {
            supplier_code: <Tag color="blue">\u81EA\u5B9A\u4E49\u5185\u5BB9</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(a()().mark(function u(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-3":{component:P.memo(P.lazy(L()(a()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,m=d.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,actionItems:O,rowSelection:{type:"checkbox"}},request:function(){var _=L()(a()().mark(function b(M){var E,K;return a()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,t();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},b)}));function D(b){return _.apply(this,arguments)}return D}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  const actionItems = () => [{ text: '\u7F16\u8F91' }, { text: '\u5220\u9664' }]
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        scroll: { y: 300 },
        showRowNumber: true,
        actionItems,
        rowSelection: {
          type: 'checkbox',
        },
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // \u8BA1\u7B97\u5546\u54C1\u5408\u8BA1\u603B\u4EF7
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
          // \u5408\u8BA1\u680F\u6570\u636E
          summaryData: {
            supplier_code: <Tag color="blue">\u81EA\u5B9A\u4E49\u5185\u5BB9</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(a()().mark(function u(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-4":{component:P.memo(P.lazy(L()(a()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j,y;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=C.sent,u=v.Tag,C.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=C.sent,t=s.sleep,C.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=C.sent,n=o.default,C.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=C.sent,l=r.default,C.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=C.sent,m=d.default,C.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=C.sent,f=g.default,j={width:116,height:"100%",background:"white",position:"absolute",left:-48,top:0,display:"flex",alignItems:"center",justifyContent:"center"},y=function(){var _=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},D=P.createElement("div",{style:j},"\u5408\u8BA1");return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,bordered:!0,summaryText:D,actionItems:_,rowSelection:{type:"checkbox"}},request:function(){var b=L()(a()().mark(function E(K){var N,V;return a()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,t();case 2:return N=m(K.pageSize),V=N.reduce(function(Z,w){return Z+w.goods_price},0).toFixed(2),z.abrupt("return",{data:N,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:V}});case 5:case"end":return z.stop()}},E)}));function M(E){return b.apply(this,arguments)}return M}()})},C.abrupt("return",{default:y});case 27:case"end":return C.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

// \u901A\u8FC7\u6837\u5F0F\u63A7\u5236\u6548\u679C
const textStyle = {
  width: 116,
  height: '100%',
  background: 'white',
  position: 'absolute',
  left: -48,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Demo = () => {
  const actionItems = () => [{ text: '\u7F16\u8F91' }, { text: '\u5220\u9664' }]
  const summaryText = <div style={textStyle}>\u5408\u8BA1</div>

  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        scroll: { y: 300 },
        showRowNumber: true,
        bordered: true,
        summaryText,
        actionItems,
        rowSelection: {
          type: 'checkbox',
        },
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // \u8BA1\u7B97\u5546\u54C1\u5408\u8BA1\u603B\u4EF7
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
          // \u5408\u8BA1\u680F\u6570\u636E
          summaryData: {
            supplier_code: <Tag color="blue">\u81EA\u5B9A\u4E49\u5185\u5BB9</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var T=L()(a()().mark(function u(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}},"examples-search-table-react-030-table-summay-demo-5":{component:P.memo(P.lazy(L()(a()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return v=i.sent,u=v.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,t=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,23786));case 14:return r=i.sent,l=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=i.sent,m=d.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return P.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,bordered:!0,actionItems:O},request:function(){var _=L()(a()().mark(function b(M){var E,K;return a()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,t();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:P.createElement(u,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},b)}));function D(b){return _.apply(this,arguments)}return D}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import treeColumns from './helpers/columns-tree'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  const actionItems = () => [{ text: '\u7F16\u8F91' }, { text: '\u5220\u9664' }]

  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns: treeColumns,
        scroll: { y: 300 },
        showRowNumber: true,
        bordered: true,
        actionItems,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // \u8BA1\u7B97\u5546\u54C1\u5408\u8BA1\u603B\u4EF7
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
          // \u5408\u8BA1\u680F\u6570\u636E
          summaryData: {
            supplier_code: <Tag color="blue">\u81EA\u5B9A\u4E49\u5185\u5BB9</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":$,"./helpers/columns-tree.ts":B,antd:I,"@examples/utils":p,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":B},renderOpts:{compile:function(){var T=L()(a()().mark(function u(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},35955:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(81535),I=e(48201),p=e(67247),W=e(38959),x=e(71856),$=e(92114),A=e(68666),B=e(362),R=e(23786),T=e(91845),v={"examples-search-table-react-040-table-sort-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C;return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=_.sent,t=s.ConfigProvider,_.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=_.sent,n=o.default,_.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=_.sent,l=r.sleep,_.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=_.sent,m=d.default,_.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return g=_.sent,f=g.default,_.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return j=_.sent,y=j.default,i=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sortType:"string"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string",sortDataExtractor:function(b){return b.bill_type}},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sortType:"number"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}],C=function(){return P.createElement(t,{locale:n},P.createElement(y,{search:{schema:m},table:{columns:i},request:function(){var b=L()(a()().mark(function E(K){var N;return a()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,l();case 2:return N=f(K.pageSize),U.abrupt("return",{data:N,total:100});case 4:case"end":return U.stop()}},E)}));function M(E){return b.apply(this,arguments)}return M}()}))},_.abrupt("return",{default:C});case 27:case"end":return _.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableProps } from '@schema-render/search-table-react'

const columns: ISearchTableProps['table']['columns'] = [
  {
    title: '\u4F9B\u5E94\u5546\u540D\u79F0',
    dataIndex: 'supplier_name',
    width: 130,
  },
  {
    title: '\u4F9B\u5E94\u5546\u7F16\u7801',
    dataIndex: 'supplier_code',
  },
  {
    title: '\u5355\u636E\u7F16\u53F7',
    dataIndex: 'bill_no',
    width: 130,
    // \u901A\u8FC7\u5B57\u7B26\u4E32\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F
    sortType: 'string',
  },
  {
    title: '\u5355\u636E\u7C7B\u578B',
    dataIndex: 'bill_type',
    sortType: 'string',
    // \u5047\u8BBE\u83B7\u53D6\u590D\u6742\u6570\u636E\u503C
    sortDataExtractor: (record) => record.bill_type,
  },
  {
    title: '\u5236\u5355\u4EBA',
    dataIndex: 'operator',
  },
  {
    title: '\u5546\u54C1\u540D\u79F0',
    dataIndex: 'goods_name',
    width: 130,
  },
  {
    title: '\u5546\u54C1\u4EF7\u683C(\u5143)',
    dataIndex: 'goods_price',
    // \u901A\u8FC7\u6570\u503C\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F
    sortType: 'number',
  },
  {
    title: '\u5546\u54C1\u7F16\u7801',
    dataIndex: 'goods_code',
    width: 130,
  },
  {
    title: '\u5546\u54C1\u5206\u7C7B',
    dataIndex: 'goods_category',
  },
  {
    title: '\u5546\u54C1\u65E5\u671F',
    dataIndex: 'goods_date',
    width: 120,
  },
]

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{ columns }}
        request={async (searchParams) => {
          // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":A,antd:I,"antd/locale/zh_CN":p,"@examples/utils":W,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:function(){var u=L()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-1":{component:P.memo(P.lazy(L()(a()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C,O;return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=D.sent,t=s.ConfigProvider,D.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=D.sent,n=o.default,D.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=D.sent,l=r.sleep,D.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=D.sent,m=d.default,D.next=18,Promise.resolve().then(e.bind(e,362));case 18:return g=D.sent,f=g.default,D.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=D.sent,y=j.default,D.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=D.sent,C=i.default,O=function(){return P.createElement(t,{locale:n},P.createElement(C,{search:{schema:m},table:{columns:f,sortMode:"local-all"},request:function(){var M=L()(a()().mark(function K(N){var V;return a()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,l();case 2:return V=y(N.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()}))},D.abrupt("return",{default:O});case 30:case"end":return D.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          sortMode: 'local-all',
        }}
        request={async (searchParams) => {
          // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":A,"./helpers/columns.ts":B,antd:I,"antd/locale/zh_CN":p,"@examples/utils":W,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B},renderOpts:{compile:function(){var u=L()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-2":{component:P.memo(P.lazy(L()(a()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C,O;return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=D.sent,t=s.ConfigProvider,D.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=D.sent,n=o.default,D.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=D.sent,l=r.sleep,D.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=D.sent,m=d.default,D.next=18,Promise.resolve().then(e.bind(e,23786));case 18:return g=D.sent,f=g.default,D.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=D.sent,y=j.default,D.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=D.sent,C=i.default,O=function(){return P.createElement(t,{locale:n},P.createElement(C,{search:{schema:m},table:{columns:f,bordered:!0,sortMode:"local-all"},request:function(){var M=L()(a()().mark(function K(N){var V;return a()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,l();case 2:return V=y(N.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()}))},D.abrupt("return",{default:O});case 30:case"end":return D.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import treeColumns from './helpers/columns-tree'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns: treeColumns,
          bordered: true,
          sortMode: 'local-all',
        }}
        request={async (searchParams) => {
          // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":A,"./helpers/columns-tree.ts":R,antd:I,"antd/locale/zh_CN":p,"@examples/utils":W,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":R},renderOpts:{compile:function(){var u=L()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-3":{component:P.memo(P.lazy(L()(a()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=E.sent,t=s.ConfigProvider,E.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=E.sent,n=o.default,E.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=E.sent,l=r.sleep,E.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=E.sent,m=d.default,E.next=18,Promise.resolve().then(e.bind(e,362));case 18:return g=E.sent,f=g.default,E.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=E.sent,y=j.default,E.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=E.sent,C=i.default,E.next=30,Promise.resolve().then(e.bind(e,91845));case 30:return O=E.sent,_=O.pinyin,D=/[\u4e00-\u9fa5]/,b=function(){return P.createElement(t,{locale:n},P.createElement(C,{search:{schema:m},table:{columns:f,sortMode:"local-all",sortStringValueTransform:function(V){return D.test(V)?_(V,{toneType:"none"}):V}},request:function(){var N=L()(a()().mark(function U(z){var Z;return a()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,l();case 2:return Z=y(z.pageSize),X.abrupt("return",{data:Z,total:100});case 4:case"end":return X.stop()}},U)}));function V(U){return N.apply(this,arguments)}return V}()}))},E.abrupt("return",{default:b});case 35:case"end":return E.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { pinyin } from 'pinyin-pro'

// \u68C0\u67E5\u662F\u5426\u4E3A\u4E2D\u6587\u7684\u6B63\u5219
const REG_CHINESE = /[\\u4e00-\\u9fa5]/

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          sortMode: 'local-all',
          sortStringValueTransform: (value) => {
            return REG_CHINESE.test(value) ? pinyin(value, { toneType: 'none' }) : value
          },
        }}
        request={async (searchParams) => {
          // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":A,"./helpers/createDataSource.ts":$,"./helpers/columns.ts":B,antd:I,"antd/locale/zh_CN":p,"@examples/utils":W,"@schema-render/search-table-react":x,"pinyin-pro":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":B},renderOpts:{compile:function(){var u=L()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-4":{component:P.memo(P.lazy(L()(a()().mark(function u(){var s,t,o,n,r,l,d,m,g,f,j,y,i,C;return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=_.sent,t=s.ConfigProvider,_.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=_.sent,n=o.default,_.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=_.sent,l=r.sleep,_.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=_.sent,m=d.default,_.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return g=_.sent,f=g.default,_.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return j=_.sent,y=j.default,i=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",sorter:!0},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sorter:!0},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sorter:!0},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",sorter:!0},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120,sorter:!0}],C=function(){return P.createElement(t,{locale:n},P.createElement(y,{search:{schema:m},table:{columns:i,sortMode:"service"},request:function(){var b=L()(a()().mark(function E(K,N){var V,U,z;return a()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return V=N.sorter,U=V,w.next=4,l();case 4:return z=f(K.pageSize,{sort_field:U==null?void 0:U.field,sort_order:U==null?void 0:U.order}),w.abrupt("return",{data:z,total:100});case 6:case"end":return w.stop()}},E)}));function M(E,K){return b.apply(this,arguments)}return M}()}))},_.abrupt("return",{default:C});case 27:case"end":return _.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableProps } from '@schema-render/search-table-react'

const columns: ISearchTableProps['table']['columns'] = [
  {
    title: '\u4F9B\u5E94\u5546\u540D\u79F0',
    dataIndex: 'supplier_name',
    width: 130,
  },
  {
    title: '\u4F9B\u5E94\u5546\u7F16\u7801',
    dataIndex: 'supplier_code',
    sorter: true,
  },
  {
    title: '\u5355\u636E\u7F16\u53F7',
    dataIndex: 'bill_no',
    width: 130,
    sorter: true,
  },
  {
    title: '\u5355\u636E\u7C7B\u578B',
    dataIndex: 'bill_type',
    sortType: 'string',
  },
  {
    title: '\u5236\u5355\u4EBA',
    dataIndex: 'operator',
  },
  {
    title: '\u5546\u54C1\u540D\u79F0',
    dataIndex: 'goods_name',
    width: 130,
  },
  {
    title: '\u5546\u54C1\u4EF7\u683C(\u5143)',
    dataIndex: 'goods_price',
    sorter: true,
  },
  {
    title: '\u5546\u54C1\u7F16\u7801',
    dataIndex: 'goods_code',
    width: 130,
  },
  {
    title: '\u5546\u54C1\u5206\u7C7B',
    dataIndex: 'goods_category',
    sorter: true,
  },
  {
    title: '\u5546\u54C1\u65E5\u671F',
    dataIndex: 'goods_date',
    width: 120,
    sorter: true,
  },
]

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          sortMode: 'service',
        }}
        request={async (searchParams, { sorter }) => {
          // \u6392\u5E8F\u6570\u636E
          const sortData = sorter as any

          // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
          await sleep()
          const data = createDataSource(searchParams.pageSize, {
            sort_field: sortData?.field,
            sort_order: sortData?.order,
          })

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":$,"./helpers/schema.ts":A,antd:I,"antd/locale/zh_CN":p,"@examples/utils":W,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:function(){var u=L()(a()().mark(function t(){var o,n=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(o=l.sent).default.apply(o,n));case 3:case"end":return l.stop()}},t)}));function s(){return u.apply(this,arguments)}return s}()}}}},66725:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return s}});var a=e(15009),h=e.n(a),L=e(5574),P=e.n(L),H=e(99289),I=e.n(H),p=e(67294),W=e(18899),x=e(38959),$=e(71856),A=e(92114),B=e(68666),R=e(362),T=e(27164),v=e(6271),u=e(48201),s={"examples-search-table-react-050-tabs-demo-0":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,m,g,f,j,y,i,C,O,_;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=b.sent,n=o.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=b.sent,l=r.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=b.sent,m=d.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=b.sent,f=g.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=b.sent,y=j.default,b.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=b.sent,C=i.useState,O=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],_=function(){var E=C("1"),K=P()(E,2),N=K[0],V=K[1];return p.createElement(y,{search:{schema:l,labelWidth:80},title:{tabs:{activeKey:N,items:O,onChange:V}},table:{columns:m},request:function(){var U=I()(h()().mark(function Z(w){var X;return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return console.log("activeKey:",N),te.next=3,n();case 3:return X=f(w.pageSize),te.abrupt("return",{data:X,total:100});case 5:case"end":return te.stop()}},Z)}));function z(Z){return U.apply(this,arguments)}return z}()})},b.abrupt("return",{default:_});case 27:case"end":return b.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { useState } from 'react'

const items = [
  { key: '1', label: '\u5DF2\u63D0\u4EA4' },
  { key: '2', label: '\u5F85\u63D0\u4EA4' },
  { key: '3', label: '\u5F85\u5BA1\u6838' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // \u6253\u5370 activeKey \u503C
        console.log('activeKey:', activeKey)

        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":B,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":$,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,l));case 3:case"end":return m.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-1":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b,M,E;return h()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=N.sent,n=o.useState,N.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return r=N.sent,l=r.sleep,N.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return d=N.sent,m=d.default,N.next=14,Promise.resolve().then(e.bind(e,362));case 14:return g=N.sent,f=g.default,N.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return j=N.sent,y=j.default,N.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return i=N.sent,C=i.default,N.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return O=N.sent,_=O.default,N.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return D=N.sent,b=D.default,M=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],E=function(){var U=n("1"),z=P()(U,2),Z=z[0],w=z[1];return p.createElement(b,{search:{schema:m},title:{showSetting:!0,tabs:{activeKey:Z,items:M,onChange:w}},table:{columns:Z==="1"?f:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var X=I()(h()().mark(function te(ue){var ye,he;return h()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,l();case 2:if(ye=Z==="1"?C:_,he=ye(ue.pageSize),!(Math.random()>.7)){Pe.next=6;break}throw new Error("\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF");case 6:return Pe.abrupt("return",{data:he,total:100});case 7:case"end":return Pe.stop()}},te)}));function ae(te){return X.apply(this,arguments)}return ae}()})},N.abrupt("return",{default:E});case 35:case"end":return N.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import columnsVT from './helpers/columns-value-type'
import createDataSource from './helpers/createDataSource'
import createDataSourceVT from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'

const items = [
  { key: '1', label: '\u5206\u7C7B\u4E00' },
  { key: '2', label: '\u5206\u7C7B\u4E8C' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <SearchTable
      search={{ schema }}
      title={{
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{
        columns: activeKey === '1' ? columns : columnsVT,
        showRowNumber: true,
        actionItems: () => [{ text: '\u7F16\u8F91' }, { text: '\u8BE6\u60C5' }],
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const fetchData = activeKey === '1' ? createDataSource : createDataSourceVT
        const data = fetchData(searchParams.pageSize)

        // \u4E3B\u52A8\u629B\u9519\uFF0C\u9A8C\u8BC1\u5F02\u5E38\u573A\u666F
        if (Math.random() > 0.7) throw new Error('\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF')

        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":T,"./helpers/schema.ts":B,"./helpers/columns.ts":R,"./helpers/columns-value-type.ts":v,"./helpers/createDataSource.ts":A,react:S||(S=e.t(p,2)),"@examples/utils":x,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,l));case 3:case"end":return m.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-2":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,m,g,f,j,y,i,C,O,_;return h()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=b.sent,n=o.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=b.sent,l=r.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=b.sent,m=d.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=b.sent,f=g.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=b.sent,y=j.default,b.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=b.sent,C=i.useState,O=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],_=function(){var E=C("1"),K=P()(E,2),N=K[0],V=K[1];return p.createElement(y,{search:{schema:l,labelWidth:80},title:{showSetting:!0,showRefresh:!0,tabs:{activeKey:N,items:O,onChange:V}},table:{columns:m},request:function(){var U=I()(h()().mark(function Z(w){var X;return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return console.log("activeKey:",N),te.next=3,n();case 3:return X=f(w.pageSize),te.abrupt("return",{data:X,total:100});case 5:case"end":return te.stop()}},Z)}));function z(Z){return U.apply(this,arguments)}return z}()})},b.abrupt("return",{default:_});case 27:case"end":return b.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { useState } from 'react'

const items = [
  { key: '1', label: '\u5DF2\u63D0\u4EA4' },
  { key: '2', label: '\u5F85\u63D0\u4EA4' },
  { key: '3', label: '\u5F85\u5BA1\u6838' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        showSetting: true,
        showRefresh: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // \u6253\u5370 activeKey \u503C
        console.log('activeKey:', activeKey)

        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":B,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":$,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,l));case 3:case"end":return m.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-3":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,m,g,f,j,y,i;return h()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=O.sent,n=o.sleep,O.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=O.sent,l=r.default,O.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=O.sent,m=d.default,O.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=O.sent,f=g.default,O.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=O.sent,y=j.default,i=function(){return p.createElement(y,{search:{schema:l,labelWidth:80},title:{showSetting:!0,showRefresh:!0},table:{columns:m},request:function(){var D=I()(h()().mark(function M(E){var K;return h()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,n();case 2:return K=f(E.pageSize),V.abrupt("return",{data:K,total:100});case 4:case"end":return V.stop()}},M)}));function b(M){return D.apply(this,arguments)}return b}()})},O.abrupt("return",{default:i});case 22:case"end":return O.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        showSetting: true,
        showRefresh: true,
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":B,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,l));case 3:case"end":return m.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-4":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,m,g,f,j,y,i,C,O;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=D.sent,n=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,l=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=D.sent,m=d.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=D.sent,f=g.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=D.sent,y=j.default,D.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=D.sent,C=i.Button,O=function(){return p.createElement(y,{search:{schema:l,labelWidth:80},title:{leftExtraContent:function(E){var K=E.loading;return p.createElement(p.Fragment,null,p.createElement(C,{type:"primary",disabled:K},"\u5BFC\u5165"),p.createElement(C,{disabled:K},"\u5BFC\u51FA"))}},table:{columns:m},request:function(){var M=I()(h()().mark(function K(N){var V;return h()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,n();case 2:return V=f(N.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},D.abrupt("return",{default:O});case 26:case"end":return D.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { Button } from 'antd'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        leftExtraContent: ({ loading }) => (
          <>
            <Button type="primary" disabled={loading}>
              \u5BFC\u5165
            </Button>
            <Button disabled={loading}>\u5BFC\u51FA</Button>
          </>
        ),
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":B,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":$,antd:u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,l));case 3:case"end":return m.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-5":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,m,g,f,j,y,i,C,O;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=D.sent,n=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,l=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=D.sent,m=d.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=D.sent,f=g.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=D.sent,y=j.default,D.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=D.sent,C=i.Button,O=function(){return p.createElement(y,{search:{schema:l,labelWidth:80},title:{rightExtraContent:function(E){var K=E.loading;return p.createElement(C,{disabled:K},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:m},request:function(){var M=I()(h()().mark(function K(N){var V;return h()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,n();case 2:return V=f(N.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},D.abrupt("return",{default:O});case 26:case"end":return D.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { Button } from 'antd'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        rightExtraContent: ({ loading }) => <Button disabled={loading}>\u53F3\u4FA7\u5185\u5BB9</Button>,
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":B,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":$,antd:u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,l));case 3:case"end":return m.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-6":{component:p.memo(p.lazy(I()(h()().mark(function t(){var o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=E.sent,n=o.sleep,E.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=E.sent,l=r.default,E.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=E.sent,m=d.default,E.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=E.sent,f=g.default,E.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=E.sent,y=j.default,E.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return i=E.sent,C=i.Button,E.next=26,Promise.resolve().then(e.t.bind(e,67294,19));case 26:return O=E.sent,_=O.useState,D=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],b=function(){var N=_("1"),V=P()(N,2),U=V[0],z=V[1];return p.createElement(y,{search:{schema:l,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:U,items:D,onChange:z},leftExtraContent:function(w){var X=w.loading;return p.createElement(C,{disabled:X},"\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(w){var X=w.loading;return p.createElement(C,{disabled:X},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:m},request:function(){var Z=I()(h()().mark(function X(ae){var te;return h()().wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:return ye.next=2,n();case 2:return te=f(ae.pageSize),ye.abrupt("return",{data:te,total:100});case 4:case"end":return ye.stop()}},X)}));function w(X){return Z.apply(this,arguments)}return w}()})},E.abrupt("return",{default:b});case 31:case"end":return E.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { Button } from 'antd'
import { useState } from 'react'

const items = [
  { key: '1', label: '\u5DF2\u63D0\u4EA4' },
  { key: '2', label: '\u5F85\u63D0\u4EA4' },
  { key: '3', label: '\u5F85\u5BA1\u6838' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        showRefresh: true,
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
        leftExtraContent: ({ loading }) => <Button disabled={loading}>\u5DE6\u4FA7\u5185\u5BB9</Button>,
        rightExtraContent: ({ loading }) => <Button disabled={loading}>\u53F3\u4FA7\u5185\u5BB9</Button>,
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":B,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":$,antd:u,react:S||(S=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var t=I()(h()().mark(function n(){var r,l=arguments;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,l));case 3:case"end":return m.stop()}},n)}));function o(){return t.apply(this,arguments)}return o}()}}}},23915:function(G,c,e){e.r(c),e.d(c,{demos:function(){return u}});var S=e(97857),a=e.n(S),h=e(15009),L=e.n(h),P=e(99289),H=e.n(P),I=e(67294),p=e(87922),W=e(48201),x=e(67247),$=e(38959),A=e(71856),B=e(27164),R=e(68666),T=e(6271),v=e(41989),u={"examples-search-table-react-060-value-type-demo-0":{component:I.memo(I.lazy(H()(L()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i,C,O,_;return L()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return t=b.sent,o=t.ConfigProvider,b.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return n=b.sent,r=n.default,b.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return l=b.sent,d=l.sleep,b.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return m=b.sent,g=m.default,b.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return f=b.sent,j=f.default,b.next=22,Promise.resolve().then(e.bind(e,27164));case 22:return y=b.sent,i=y.default,b.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return C=b.sent,O=C.default,_=function(){return I.createElement(o,{locale:r},I.createElement(O,{search:{schema:g},table:{columns:j,showRowNumber:!0,sortMode:"local-all"},request:function(){var E=H()(L()().mark(function N(V){var U;return L()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,d();case 2:return U=i(V.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return E.apply(this,arguments)}return K}()}))},b.abrupt("return",{default:_});case 30:case"end":return b.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns-value-type'
import createDataSource from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          showRowNumber: true,
          sortMode: 'local-all',
        }}
        request={async (searchParams) => {
          // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":B,"./helpers/schema.ts":R,"./helpers/columns-value-type.ts":T,antd:W,"antd/locale/zh_CN":x,"@examples/utils":$,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":T},renderOpts:{compile:function(){var s=H()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-search-table-react-060-value-type-demo-1":{component:I.memo(I.lazy(H()(L()().mark(function s(){var t,o,n,r,l,d,m,g,f,j;return L()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return t=i.sent,o=t.sleep,i.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return n=i.sent,r=n.default,i.next=10,Promise.resolve().then(e.bind(e,27164));case 10:return l=i.sent,d=l.default,i.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return m=i.sent,g=m.default,f=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u5F69\u8272\u6807\u7B7E",dataIndex:"tags",valueType:function(O){return{type:"tags",color:Array.isArray(O.tags)?"blue":"green"}}}],j=function(){return I.createElement(g,{search:{schema:r},table:{columns:f,sortMode:"local-all"},request:function(){var O=H()(L()().mark(function D(b){var M;return L()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return M=d(b.pageSize),K.abrupt("return",{data:M,total:100});case 4:case"end":return K.stop()}},D)}));function _(D){return O.apply(this,arguments)}return _}()})},i.abrupt("return",{default:j});case 19:case"end":return i.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'
import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: '\u5E38\u89C4\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u5F69\u8272\u6807\u7B7E',
    dataIndex: 'tags',
    // \u51FD\u6570\u683C\u5F0F\uFF0C\u63A5\u6536\u5F53\u524D\u884C\u6570\u636E record
    valueType: (record: Record<string, any>) => {
      return {
        // \u5FC5\u987B\u8FD4\u56DE type \u5B57\u6BB5\uFF0C\u5BF9\u5E94\u6570\u636E\u663E\u793A\u7C7B\u578B
        type: 'tags',
        // \u5176\u4ED6\u53C2\u6570\uFF0C\u5C06\u900F\u4F20\u7ED9\u7C7B\u578B\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u5BF9\u5E94\u7EC4\u4EF6\u63A5\u6536\u7684 options \u5B57\u6BB5
        color: Array.isArray(record.tags) ? 'blue' : 'green',
      }
    },
  },
]

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        sortMode: 'local-all',
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":B,"./helpers/schema.ts":R,"@examples/utils":$,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":R},renderOpts:{compile:function(){var s=H()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}},"examples-search-table-react-060-value-type-demo-2":{component:I.memo(I.lazy(H()(L()().mark(function s(){var t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b,M,E;return L()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return t=N.sent,o=t.default,N.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=N.sent,r=n.ConfigProvider,l=n.Tag,N.next=11,Promise.resolve().then(e.bind(e,67247));case 11:return d=N.sent,m=d.default,N.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return g=N.sent,f=g.sleep,N.next=19,Promise.resolve().then(e.bind(e,68666));case 19:return j=N.sent,y=j.default,N.next=23,Promise.resolve().then(e.bind(e,27164));case 23:return i=N.sent,C=i.default,N.next=27,Promise.resolve().then(e.bind(e,71856));case 27:return O=N.sent,_=O.default,D=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u4EE3\u7801\u5757",dataIndex:"code",valueType:"code"},{title:"\u90E8\u7F72\u72B6\u6001",dataIndex:"deploy_status",valueType:"deploy-status"},{title:"\u90E8\u7F72\u72B6\u6001(Tag)",dataIndex:"deploy_status_tag",valueType:"deploy-status-tag"}],b={0:{text:"\u5F02\u5E38",style:{background:"red"},color:"red"},1:{text:"\u8FDB\u884C\u4E2D",style:{background:"blue"},color:"blue"},2:{text:"\u6210\u529F",style:{background:"green"},color:"green"}},M={code:function(U){var z=U.value;return I.createElement(o,{value:z,language:"js"})},"deploy-status":function(U){var z=U.value,Z=b[z];return I.createElement("div",null,I.createElement("span",{style:a()({display:"inline-block",width:8,height:8,borderRadius:"50%",marginRight:6},Z.style)}),Z.text)},"deploy-status-tag":function(U){var z=U.record,Z=z.deploy_status,w=b[Z];return I.createElement(l,{color:w.color},w.text)}},E=function(){return I.createElement(r,{locale:m},I.createElement(_,{search:{schema:y},table:{columns:D,showRowNumber:!0,sortMode:"local-all",registerValueType:M},request:function(){var U=H()(L()().mark(function Z(w){var X;return L()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,f();case 2:return X=C(w.pageSize),te.abrupt("return",{data:X,total:100});case 4:case"end":return te.stop()}},Z)}));function z(Z){return U.apply(this,arguments)}return z}()}))},N.abrupt("return",{default:E});case 34:case"end":return N.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { ConfigProvider, Tag } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'
import type { IColumnType, ITableProps } from '@schema-render/search-table-react'

const columns: IColumnType<'deploy-status' | 'deploy-status-tag'>[] = [
  {
    title: '\u5E38\u89C4\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u4EE3\u7801\u5757',
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '\u90E8\u7F72\u72B6\u6001',
    dataIndex: 'deploy_status',
    valueType: 'deploy-status',
  },
  {
    title: '\u90E8\u7F72\u72B6\u6001(Tag)',
    dataIndex: 'deploy_status_tag',
    valueType: 'deploy-status-tag',
  },
]

const DEPLOY_STATUS_MAP = {
  0: {
    text: '\u5F02\u5E38',
    style: { background: 'red' },
    color: 'red',
  },
  1: {
    text: '\u8FDB\u884C\u4E2D',
    style: { background: 'blue' },
    color: 'blue',
  },
  2: {
    text: '\u6210\u529F',
    style: { background: 'green' },
    color: 'green',
  },
}

// \u6CE8\u518C\u6570\u636E\u663E\u793A\u7C7B\u578B
const registerValueType: ITableProps['registerValueType'] = {
  /**
   * \u81EA\u5B9A\u4E49\u4EE3\u7801\u5757\u663E\u793A\uFF0C\u8986\u76D6\u5185\u7F6E\u65B9\u6848
   */
  code: ({ value }) => <SyntaxHighlighter value={value} language="js" />,
  /**
   * \u81EA\u5B9A\u4E49\u90E8\u7F72\u72B6\u6001\u7C7B\u578B
   */
  'deploy-status': ({ value }) => {
    const status = DEPLOY_STATUS_MAP[value as keyof typeof DEPLOY_STATUS_MAP]
    return (
      <div>
        <span
          style={{
            display: 'inline-block',
            width: 8,
            height: 8,
            borderRadius: '50%',
            marginRight: 6,
            ...status.style,
          }}
        />
        {status.text}
      </div>
    )
  },
  /**
   * \u81EA\u5B9A\u4E49\u90E8\u7F72\u72B6\u6001 Tag \u65B9\u6848
   */
  'deploy-status-tag': ({ record }) => {
    // \u56E0\u4E3A\u6570\u636E\u4E2D\u6CA1\u6709 deploy-status-tag \u5B57\u6BB5\uFF0C\u6240\u4EE5\u4ECE deploy_status \u5B57\u6BB5\u53D6\u503C\u3002\u5B9E\u9645\u4E0A\u6700\u597D\u4E00\u4E00\u5BF9\u5E94\u3002
    const value = record.deploy_status
    const status = DEPLOY_STATUS_MAP[value as keyof typeof DEPLOY_STATUS_MAP]
    return <Tag color={status.color}>{status.text}</Tag>
  },
}

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          showRowNumber: true,
          sortMode: 'local-all',
          registerValueType,
        }}
        request={async (searchParams) => {
          // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo`},root:{type:"NPM"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":B,"./helpers/schema.ts":R,"@examples/components/SyntaxHighlighter":v,antd:W,"antd/locale/zh_CN":x,"@examples/utils":$,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":R},renderOpts:{compile:function(){var s=H()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},o)}));function t(){return s.apply(this,arguments)}return t}()}}}},55983:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return o}});var a=e(5574),h=e.n(a),L=e(97857),P=e.n(L),H=e(15009),I=e.n(H),p=e(99289),W=e.n(p),x=e(67294),$=e(8497),A=e(38959),B=e(71856),R=e(92114),T=e(68666),v=e(362),u=e(27164),s=e(6271),t=e(48201),o={"examples-search-table-react-100-columns-setting-demo-0":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=D.sent,l=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=D.sent,m=d.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=D.sent,f=g.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=D.sent,y=j.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=D.sent,C=i.default,O=function(){return x.createElement(C,{search:{schema:m},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var M=W()(I()().mark(function K(N){var V;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,l();case 2:return V=y(N.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},D.abrupt("return",{default:O});case 22:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      title={{
        showSetting: true,
      }}
      table={{
        columns,
        showRowNumber: true,
        actionItems: () => [{ text: '\u7F16\u8F91' }, { text: '\u8BE6\u60C5' }],
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-1":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O,_;return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=b.sent,l=r.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=b.sent,m=d.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=b.sent,f=g.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=b.sent,y=j.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=b.sent,C=i.default,O=f.map(function(M,E){var K=P()({},M);return E===0?K.fixed="left":E===f.length-1&&(K.fixed="right"),K}),_=function(){return x.createElement(C,{search:{schema:m},title:{showSetting:!0},table:{columns:O,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var E=W()(I()().mark(function N(V){var U;return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:return U=y(V.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return E.apply(this,arguments)}return K}()})},b.abrupt("return",{default:_});case 23:case"end":return b.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

// \u521B\u5EFA\u56FA\u5B9A\u5217
const fixedColumns = columns.map((col, index) => {
  const newCol = { ...col }

  if (index === 0) {
    newCol.fixed = 'left'
  } else if (index === columns.length - 1) {
    newCol.fixed = 'right'
  }

  return newCol
})

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      title={{
        showSetting: true,
      }}
      table={{
        columns: fixedColumns,
        showRowNumber: true,
        actionItems: () => [{ text: '\u7F16\u8F91' }, { text: '\u8BE6\u60C5' }],
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-2":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O,_,D,b,M,E,K,N;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,l=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=U.sent,m=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,C=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,_=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return D=U.sent,b=D.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),w=h()(Z,2),X=w[0],ae=w[1];return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:X,items:K,onChange:ae}},table:{columns:X==="1"?y:C,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var te=W()(I()().mark(function ye(he){var ve,Pe;return I()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,m();case 2:return ve=X==="1"?_:b,Pe=ve(he.pageSize),Ee.abrupt("return",{data:Pe,total:100});case 5:case"end":return Ee.stop()}},ye)}));function ue(ye){return te.apply(this,arguments)}return ue}()})},U.abrupt("return",{default:N});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import columnsVT from './helpers/columns-value-type'
import createDataSource from './helpers/createDataSource'
import createDataSourceVT from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'

const items = [
  { key: '1', label: '\u5206\u7C7B\u4E00' },
  { key: '2', label: '\u5206\u7C7B\u4E8C' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <SearchTable
      search={{ schema }}
      title={{
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{
        columns: activeKey === '1' ? columns : columnsVT,
        showRowNumber: true,
        actionItems: () => [{ text: '\u7F16\u8F91' }, { text: '\u8BE6\u60C5' }],
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const fetchData = activeKey === '1' ? createDataSource : createDataSourceVT
        const data = fetchData(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":u,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":R,"./helpers/schema.ts":T,"./helpers/columns.ts":v,react:S||(S=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-3":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O,_,D,b,M;return I()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=K.sent,l=r.useRef,K.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=K.sent,m=d.sleep,K.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=K.sent,f=g.default,K.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=K.sent,y=j.default,K.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return i=K.sent,C=i.default,K.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return O=K.sent,_=O.default,K.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return D=K.sent,b=D.Button,M=function(){var V=l(null),U=function(){var Z;(Z=V.current)===null||Z===void 0||Z.openSettingModal()};return x.createElement(_,{ref:V,search:{schema:f},titleTop:function(){return x.createElement(b,{type:"primary",onClick:U},"\u6253\u5F00\u5217\u8BBE\u7F6E")},table:{columns:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var z=W()(I()().mark(function w(X){var ae;return I()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,m();case 2:return ae=C(X.pageSize),ue.abrupt("return",{data:ae,total:100});case 4:case"end":return ue.stop()}},w)}));function Z(w){return z.apply(this,arguments)}return Z}()})},K.abrupt("return",{default:M});case 30:case"end":return K.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { Button } from 'antd'

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  const handleClick = () => {
    STableRef.current?.openSettingModal()
  }

  return (
    <SearchTable
      ref={STableRef}
      search={{ schema }}
      titleTop={() => (
        <Button type="primary" onClick={handleClick}>
          \u6253\u5F00\u5217\u8BBE\u7F6E
        </Button>
      )}
      table={{
        columns,
        showRowNumber: true,
        actionItems: () => [{ text: '\u7F16\u8F91' }, { text: '\u8BE6\u60C5' }],
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":T,"./helpers/columns.ts":v,react:S||(S=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":B,antd:t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-4":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O,_;return I()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=b.sent,l=r.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=b.sent,m=d.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=b.sent,f=g.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=b.sent,y=j.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=b.sent,C=i.default,O="save-setting-unique-id",_=function(){var E=function(){var N=W()(I()().mark(function V(U){return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:localStorage.setItem(O,JSON.stringify(U));case 3:case"end":return Z.stop()}},V)}));return function(U){return N.apply(this,arguments)}}(),K=function(){var N=W()(I()().mark(function V(){var U;return I()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:if(U=localStorage.getItem(O),!U){Z.next=5;break}return Z.abrupt("return",JSON.parse(U));case 5:case"end":return Z.stop()}},V)}));return function(){return N.apply(this,arguments)}}();return x.createElement(C,{search:{schema:m},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},onSettingChanged:E,getSetting:K},request:function(){var N=W()(I()().mark(function U(z){var Z;return I()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,l();case 2:return Z=y(z.pageSize),X.abrupt("return",{data:Z,total:100});case 4:case"end":return X.stop()}},U)}));function V(U){return N.apply(this,arguments)}return V}()})},b.abrupt("return",{default:_});case 23:case"end":return b.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
// import type { IColumnType } from '@schema-render/search-table-react'

const storeKey = 'save-setting-unique-id'

const Demo = () => {
  // \u5B58\u50A8\u5217\u8BBE\u7F6E\uFF08\u5217\u6570\u636E\uFF09
  const onSettingChanged = async (data: any) => {
    await sleep()
    localStorage.setItem(storeKey, JSON.stringify(data))
  }

  // \u83B7\u53D6\u4FDD\u5B58\u7684\u8BBE\u7F6E
  const getSetting = async () => {
    await sleep()
    const data = localStorage.getItem(storeKey)
    if (data) {
      return JSON.parse(data)
    }
  }

  // \u81EA\u5B9A\u4E49\u5408\u5E76\u7B97\u6CD5\uFF1A\u3010\u5F53\u524D\u7684\u5217\u6570\u636E\u3011\u4E0E\u3010\u5B58\u50A8\u7684\u5217\u6570\u636E\u3011\u5408\u5E76\u7B97\u6CD5
  // const settingColumnsMergeAlgo = (columns: IColumnType[], storedColumns: IColumnType[]) => {
  //   return columns
  // }

  return (
    <SearchTable
      search={{ schema }}
      title={{
        showSetting: true,
      }}
      table={{
        columns,
        showRowNumber: true,
        actionItems: () => [{ text: '\u7F16\u8F91' }, { text: '\u8BE6\u60C5' }],
        onSettingChanged,
        getSetting,
        // settingColumnsMergeAlgo,
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"@examples/utils":A,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-5":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O,_,D,b,M,E,K,N;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,l=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=U.sent,m=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,C=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,_=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return D=U.sent,b=D.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),w=h()(Z,2),X=w[0],ae=w[1],te=function(){var ye=W()(I()().mark(function he(ve,Pe){return I()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,m();case 2:localStorage.setItem(Pe,JSON.stringify(ve));case 3:case"end":return Ee.stop()}},he)}));return function(ve,Pe){return ye.apply(this,arguments)}}(),ue=function(){var ye=W()(I()().mark(function he(ve){var Pe;return I()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:return Ee.next=2,m();case 2:if(Pe=localStorage.getItem(ve),!Pe){Ee.next=5;break}return Ee.abrupt("return",JSON.parse(Pe));case 5:case"end":return Ee.stop()}},he)}));return function(ve){return ye.apply(this,arguments)}}();return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:X,items:K,onChange:ae}},table:{columns:X==="1"?y:C,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-tab-".concat(X),onSettingChanged:te,getSetting:ue},request:function(){var ye=W()(I()().mark(function ve(Pe){var Ie,Ee;return I()().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:return Oe.next=2,m();case 2:return Ie=X==="1"?_:b,Ee=Ie(Pe.pageSize),Oe.abrupt("return",{data:Ee,total:100});case 5:case"end":return Oe.stop()}},ve)}));function he(ve){return ye.apply(this,arguments)}return he}()})},U.abrupt("return",{default:N});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import columnsVT from './helpers/columns-value-type'
import createDataSource from './helpers/createDataSource'
import createDataSourceVT from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'

const items = [
  { key: '1', label: '\u5206\u7C7B\u4E00' },
  { key: '2', label: '\u5206\u7C7B\u4E8C' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  // \u5B58\u50A8\u5217\u8BBE\u7F6E\uFF08\u5217\u6570\u636E\uFF09
  const onSettingChanged = async (data: any, settingId?: string) => {
    await sleep()
    // \u5B58\u50A8\u7684\u65F6\u5019\u76F4\u63A5\u4F7F\u7528\u552F\u4E00\u7684 settingId
    localStorage.setItem(settingId!, JSON.stringify(data))
  }

  // \u83B7\u53D6\u4FDD\u5B58\u7684\u8BBE\u7F6E
  const getSetting = async (settingId?: string) => {
    await sleep()
    const data = localStorage.getItem(settingId!)
    if (data) {
      return JSON.parse(data)
    }
  }

  return (
    <SearchTable
      search={{ schema }}
      title={{
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{
        columns: activeKey === '1' ? columns : columnsVT,
        showRowNumber: true,
        actionItems: () => [{ text: '\u7F16\u8F91' }, { text: '\u8BE6\u60C5' }],
        settingId: \`save-setting-unique-id-tab-\${activeKey}\`,
        onSettingChanged,
        getSetting,
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const fetchData = activeKey === '1' ? createDataSource : createDataSourceVT
        const data = fetchData(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":T,"./helpers/createDataSource-vt.ts":u,"./helpers/createDataSource.ts":R,"./helpers/columns-value-type.ts":s,"./helpers/columns.ts":v,react:S||(S=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-6":{component:x.memo(x.lazy(W()(I()().mark(function n(){var r,l,d,m,g,f,j,y,i,C,O,_,D,b,M,E,K,N;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,l=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=U.sent,m=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,C=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,_=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return D=U.sent,b=D.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E00"},{key:"2",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),w=h()(Z,2),X=w[0],ae=w[1],te=l([]),ue=h()(te,2),ye=ue[0],he=ue[1],ve=function(){var Ee=W()(I()().mark(function be(Oe,Ce){return I()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,m();case 2:localStorage.setItem(Ce,JSON.stringify(Oe));case 3:case"end":return Se.stop()}},be)}));return function(Oe,Ce){return Ee.apply(this,arguments)}}(),Pe=function(){var Ee=W()(I()().mark(function be(Oe){var Ce;return I()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:return Se.next=2,m();case 2:if(Ce=localStorage.getItem(Oe),!Ce){Se.next=5;break}return Se.abrupt("return",JSON.parse(Ce));case 5:case"end":return Se.stop()}},be)}));return function(Oe){return Ee.apply(this,arguments)}}(),Ie=function(){var Ee=W()(I()().mark(function be(){return I()().wrap(function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:return Ce.next=2,m(500);case 2:return Ce.abrupt("return",X==="1"?y:C);case 3:case"end":return Ce.stop()}},be)}));return function(){return Ee.apply(this,arguments)}}();return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:X,items:K,onChange:ae}},table:{columns:ye,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-async-".concat(X),onSettingChanged:ve,getSetting:Pe},request:function(){var Ee=W()(I()().mark(function Oe(Ce){var Ae,Se,Me;return I()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,m();case 2:return Ae=X==="1"?_:b,Se=Ae(Ce.pageSize),Le.next=6,Ie();case 6:return Me=Le.sent,he(Me),Le.abrupt("return",{data:Se,total:100});case 9:case"end":return Le.stop()}},Oe)}));function be(Oe){return Ee.apply(this,arguments)}return be}()})},U.abrupt("return",{default:N});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columnsA from './helpers/columns'
import columnsVT from './helpers/columns-value-type'
import createDataSource from './helpers/createDataSource'
import createDataSourceVT from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'
import type { IColumnType } from '@schema-render/search-table-react'

const items = [
  { key: '1', label: '\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E00' },
  { key: '2', label: '\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E8C' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')
  const [columns, setColumns] = useState<IColumnType[]>([])

  // \u5B58\u50A8\u5217\u8BBE\u7F6E\uFF08\u5217\u6570\u636E\uFF09
  const onSettingChanged = async (data: any, settingId?: string) => {
    await sleep()
    // \u5B58\u50A8\u7684\u65F6\u5019\u76F4\u63A5\u4F7F\u7528\u552F\u4E00\u7684 settingId
    localStorage.setItem(settingId!, JSON.stringify(data))
  }

  // \u83B7\u53D6\u4FDD\u5B58\u7684\u8BBE\u7F6E
  const getSetting = async (settingId?: string) => {
    await sleep()
    const data = localStorage.getItem(settingId!)
    if (data) {
      return JSON.parse(data)
    }
  }

  // \u5F02\u6B65\u83B7\u53D6\u8868\u683C columns
  const getColumns = async () => {
    await sleep(500)
    return activeKey === '1' ? columnsA : columnsVT
  }

  return (
    <SearchTable
      search={{ schema }}
      title={{
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{
        columns,
        showRowNumber: true,
        actionItems: () => [{ text: '\u7F16\u8F91' }, { text: '\u8BE6\u60C5' }],
        settingId: \`save-setting-unique-id-async-\${activeKey}\`,
        onSettingChanged,
        getSetting,
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const fetchData = activeKey === '1' ? createDataSource : createDataSourceVT
        const data = fetchData(searchParams.pageSize)

        // \u5F02\u6B65\u83B7\u53D6\u8868\u683C\u5934
        const cols = await getColumns()
        setColumns(cols)

        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":u,"./helpers/schema.ts":T,"./helpers/columns.ts":v,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":R,react:S||(S=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":T,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":v,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R},renderOpts:{compile:function(){var n=W()(I()().mark(function l(){var d,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,m));case 3:case"end":return f.stop()}},l)}));function r(){return n.apply(this,arguments)}return r}()}}}},47381:function(G,c,e){e.r(c),e.d(c,{demos:function(){return B}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(90749),I=e(71856),p=e(38959),W=e(74465),x=e(62244),$=e(24534),A=e(34200),B={"examples-search-table-react-700-locale-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function R(){var T,v,u,s,t,o,n,r,l,d,m,g,f;return a()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,34200));case 2:return T=y.sent,v=T.default,y.next=6,Promise.resolve().then(e.bind(e,24534));case 6:return u=y.sent,s=u.default,y.next=10,Promise.resolve().then(e.bind(e,62244));case 10:return t=y.sent,o=t.default,y.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return n=y.sent,r=n.default,y.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return l=y.sent,d=l.sleep,y.next=22,Promise.resolve().then(e.bind(e,74465));case 22:return m=y.sent,g=m.default,f=function(){return P.createElement(r,{locale:g,search:{schema:v,labelWidth:"max-content"},title:{showRefresh:!0,showSetting:!0},table:{bordered:!0,columns:s,showRowNumber:!0,actionItems:function(){return[{text:"Edit"},{text:"View"},{text:"Delete",danger:!0}]},actionItemsColumnData:{width:150},summaryText:"Total"},request:function(){var C=L()(a()().mark(function _(D){var b,M;return a()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,d();case 2:return b=o(D.pageSize),M=b.reduce(function(N,V){return N+V.goods_price},0).toFixed(2),K.abrupt("return",{data:b,total:100,summaryData:{goods_price:M}});case 5:case"end":return K.stop()}},_)}));function O(_){return C.apply(this,arguments)}return O}()})},y.abrupt("return",{default:f});case 26:case"end":return y.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-search-table-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import schemaEn from './helpers/schema-en'
import columnsEn from './helpers/columns-en'
import createDataSourceEn from './helpers/createDataSource-en'
import SearchTable from '@schema-render/search-table-react'
import { sleep } from '@examples/utils'

// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from '@schema-render/search-table-react/dist/esm/locale/en_US'

const Demo = () => {
  return (
    <SearchTable
      /* \u914D\u7F6E\u8BED\u8A00\u5305 */
      locale={enUS}
      search={{
        schema: schemaEn,
        labelWidth: 'max-content',
      }}
      title={{
        showRefresh: true,
        showSetting: true,
      }}
      table={{
        bordered: true,
        columns: columnsEn,
        showRowNumber: true,
        actionItems: () => [
          { text: 'Edit' },
          { text: 'View' },
          { text: 'Delete', danger: true },
        ],
        actionItemsColumnData: {
          width: 150,
        },
        summaryText: 'Total',
      }}
      request={async (searchParams) => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSourceEn(searchParams.pageSize)

        // \u8BA1\u7B97\u5546\u54C1\u5408\u8BA1\u603B\u4EF7
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // \u8FD4\u56DE\u8868\u683C\u6570\u636E\u6E32\u67D3
        return {
          // \u8868\u683C\u6570\u636E
          data,
          // \u6570\u636E\u603B\u6570\uFF0C\u7528\u4E8E\u5206\u9875
          total: 100,
          // \u5408\u8BA1\u680F\u6570\u636E
          summaryData: {
            // \u5BF9\u5E94\u300C\u5546\u54C1\u4EF7\u683C\u300D
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo`},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},root:{type:"NPM"},"./helpers/createDataSource-en.ts":{type:"FILE",value:e(45876).Z},"./helpers/columns-en.ts":{type:"FILE",value:e(71091).Z},"./helpers/schema-en.ts":{type:"FILE",value:e(36556).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-en.ts":x,"./helpers/columns-en.ts":$,"./helpers/schema-en.ts":A,"@schema-render/search-table-react":I,"@examples/utils":p,"@schema-render/search-table-react/dist/esm/locale/en_US":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-en.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-en.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema-en.ts":A},renderOpts:{compile:function(){var R=L()(a()().mark(function v(){var u,s=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,s));case 3:case"end":return o.stop()}},v)}));function T(){return R.apply(this,arguments)}return T}()}}}},81706:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(27490),h={}},62111:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(8906),h={}},44307:function(G,c,e){var S;e.r(c),e.d(c,{demos:function(){return R}});var a=e(15009),h=e.n(a),L=e(99289),P=e.n(L),H=e(67294),I=e(34451),p=e(38959),W=e(71856),x=e(48201),$=e(67247),A=e(92114),B=e(68666),R={"examples-search-table-react-900-table-editable-demo-0":{component:H.memo(H.lazy(P()(h()().mark(function T(){var v,u,s,t,o,n,r,l,d,m,g,f,j,y,i,C,O,_,D,b;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return v=E.sent,u=v.useRef,s=v.useMemo,E.next=7,Promise.resolve().then(e.bind(e,38959));case 7:return t=E.sent,o=t.sleep,E.next=11,Promise.resolve().then(e.bind(e,68666));case 11:return n=E.sent,r=n.default,E.next=15,Promise.resolve().then(e.bind(e,92114));case 15:return l=E.sent,d=l.default,E.next=19,Promise.resolve().then(e.bind(e,71856));case 19:return m=E.sent,g=m.default,E.next=23,Promise.resolve().then(e.bind(e,48201));case 23:return f=E.sent,j=f.ConfigProvider,E.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return y=E.sent,i=y.default,E.next=31,Promise.resolve().then(e.bind(e,48201));case 31:return C=E.sent,O=C.InputNumber,_=C.Button,D=C.message,b=function(){var N=u(null),V=s(function(){return[{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",render:function(Z,w){return H.createElement(O,{value:Z,onChange:function(ae){var te;w.goods_price=ae,(te=N.current)===null||te===void 0||te.rerender()}})}},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]},[]),U=function(){var Z;console.log("dataSource:",(Z=N.current)===null||Z===void 0?void 0:Z.getDataSource()),D.success("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6700\u65B0\u6570\u636E")};return H.createElement(j,{locale:i},H.createElement(g,{ref:N,search:{schema:r},table:{columns:V},request:function(){var z=P()(h()().mark(function w(X){var ae;return h()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,o();case 2:return ae=d(X.pageSize),ue.abrupt("return",{data:ae,total:100});case 4:case"end":return ue.stop()}},w)}));function Z(w){return z.apply(this,arguments)}return Z}()}),H.createElement(_,{type:"primary",onClick:U},"\u63D0\u4EA4"))},E.abrupt("return",{default:b});case 37:case"end":return E.stop()}},T)})))),asset:{type:"BLOCK",id:"examples-search-table-react-900-table-editable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef, useMemo } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import type { IColumnType } from '@schema-render/search-table-react'
import { InputNumber, Button, message } from 'antd'

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  const columns = useMemo<IColumnType[]>(
    () => [
      {
        title: '\u5355\u636E\u7F16\u53F7',
        dataIndex: 'bill_no',
        width: 130,
      },
      {
        title: '\u5355\u636E\u65E5\u671F',
        dataIndex: 'bill_date',
        width: 120,
      },
      {
        title: '\u5355\u636E\u72B6\u6001',
        dataIndex: 'bill_status',
      },
      {
        title: '\u5546\u54C1\u540D\u79F0',
        dataIndex: 'goods_name',
        width: 130,
      },
      {
        title: '\u5546\u54C1\u4EF7\u683C(\u5143)',
        dataIndex: 'goods_price',
        render: (value, record) => {
          return (
            <InputNumber
              value={value}
              onChange={(newValue) => {
                record.goods_price = newValue
                STableRef.current?.rerender()
              }}
            />
          )
        },
      },
      {
        title: '\u5546\u54C1\u7F16\u7801',
        dataIndex: 'goods_code',
        width: 130,
      },
      {
        title: '\u5546\u54C1\u5206\u7C7B',
        dataIndex: 'goods_category',
      },
      {
        title: '\u5546\u54C1\u65E5\u671F',
        dataIndex: 'goods_date',
        width: 120,
      },
    ],
    []
  )

  const handleSubmit = () => {
    console.log('dataSource:', STableRef.current?.getDataSource())
    message.success('\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6700\u65B0\u6570\u636E')
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema }}
        table={{ columns }}
        request={async (searchParams) => {
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return { data, total: 100 }
        }}
      />
      <Button type="primary" onClick={handleSubmit}>
        \u63D0\u4EA4
      </Button>
    </ConfigProvider>
  )
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":B,react:S||(S=e.t(H,2)),"@examples/utils":p,"@schema-render/search-table-react":W,antd:x,"antd/locale/zh_CN":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B},renderOpts:{compile:function(){var T=P()(h()().mark(function u(){var s,t=arguments;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function v(){return T.apply(this,arguments)}return v}()}}}},13836:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(24311),h={}},9482:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var S=e(67294),a=e(49409),h={}},28629:function(G,c,e){e.r(c),e.d(c,{demos:function(){return $}});var S=e(15009),a=e.n(S),h=e(99289),L=e.n(h),P=e(67294),H=e(63710),I=e(38959),p=e(71856),W=e(92114),x=e(362),$={"examples-search-table-react-910-no-search-demo-0":{component:P.memo(P.lazy(L()(a()().mark(function A(){var B,R,T,v,u,s,t,o,n;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return B=l.sent,R=B.sleep,l.next=6,Promise.resolve().then(e.bind(e,362));case 6:return T=l.sent,v=T.default,l.next=10,Promise.resolve().then(e.bind(e,92114));case 10:return u=l.sent,s=u.default,l.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return t=l.sent,o=t.default,n=function(){return P.createElement(o,{search:!1,table:{columns:v},request:function(){var m=L()(a()().mark(function f(){var j;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,R();case 2:return j=s(),i.abrupt("return",{data:j,total:100});case 4:case"end":return i.stop()}},f)}));function g(){return m.apply(this,arguments)}return g}()})},l.abrupt("return",{default:n});case 18:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-table-react-910-no-search-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={false}
      table={{ columns }}
      request={async () => {
        // \u6A21\u62DF\u8BF7\u6C42\u63A5\u53E3\u83B7\u53D6\u8868\u683C\u6570\u636E
        await sleep()
        const data = createDataSource()
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.10.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":W,"./helpers/columns.ts":x,"@examples/utils":I,"@schema-render/search-table-react":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":x},renderOpts:{compile:function(){var A=L()(a()().mark(function R(){var T,v=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,v));case 3:case"end":return s.stop()}},R)}));function B(){return A.apply(this,arguments)}return B}()}}}},41989:function(G,c,e){e.r(c),e.d(c,{default:function(){return P}});var S=e(42481),a=e(71353),h=e(85893),L=function(I){var p=I.value,W=I.language,x=W===void 0?"json":W,$=I.style;return(0,h.jsx)("div",{style:$,children:(0,h.jsx)(S.Z,{className:"example-hl",language:x,style:a.Z,children:x==="json"?JSON.stringify(p,null,2):p})})},P=L},78469:function(G,c,e){e.r(c);var S=e(25035),a=e(55241),h=e(93967),L=e.n(h),P=e(59868),H=e(85893),I=function(W){var x=W.body,$=W.schema,A=W.validator,B=W.required,R=W.prefixClassNames;return(0,H.jsxs)("div",{className:L()(R("item-layout-horizontal"),P.horizontal),children:[(0,H.jsxs)("div",{className:L()(R("item-main"),P.main),children:[(0,H.jsxs)("div",{className:L()(R("item-header"),P.header),children:[B&&(0,H.jsx)("span",{className:L()(R("item-mark"),P.mark),children:"*"}),(0,H.jsx)("span",{className:L()(R("item-title"),P.title),children:$.title}),!!$.titleDescription&&(0,H.jsx)(a.Z,{placement:"top",trigger:"hover",content:$.titleDescription,children:(0,H.jsx)(S.Z,{className:L()(R("item-title-tooltip"),P.titleTooltip)})})]}),(0,H.jsx)("div",{className:L()(R("item-body"),P.body),children:x})]}),(0,H.jsxs)("div",{className:L()(R("item-footer"),P.footer),children:[A.status==="error"&&!!A.message&&(0,H.jsx)("div",{className:L()(R("item-error-msg"),P.errorMsg),children:A.message}),!!$.description&&(0,H.jsx)("div",{className:L()(R("item-desc"),P.desc),children:$.description})]})]})};c.default=I},59868:function(G,c,e){e.r(c),e.d(c,{body:function(){return o},desc:function(){return r},errorMsg:function(){return l},footer:function(){return n},header:function(){return v},horizontal:function(){return R},main:function(){return T},mark:function(){return s},title:function(){return u},titleTooltip:function(){return t}});var S=e(68400),a=e.n(S),h=e(77525),L,P,H,I,p,W,x,$,A,B,R=(0,h.H)(L||(L=a()([""]))),T=(0,h.H)(P||(P=a()([`
  display: flex;
  align-items: center;
`]))),v=(0,h.H)(H||(H=a()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),u=(0,h.H)(I||(I=a()([`
  word-break: break-all;
`]))),s=(0,h.H)(p||(p=a()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),t=(0,h.H)(W||(W=a()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),o=(0,h.H)(x||(x=a()([`
  flex-grow: 1;
`]))),n=(0,h.H)($||($=a()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),r=(0,h.H)(A||(A=a()([`
  margin-top: 6px;
  color: #999;
`]))),l=(0,h.H)(B||(B=a()([`
  margin-top: 6px;
  color: #ff4d4f;
`])))},29298:function(G,c,e){e.r(c),e.d(c,{desc:function(){return v},errorMsg:function(){return u},footer:function(){return T},header:function(){return $},mark:function(){return B},title:function(){return A},titleTooltip:function(){return R}});var S=e(68400),a=e.n(S),h=e(77525),L,P,H,I,p,W,x,$=(0,h.H)(L||(L=a()([`
  margin-bottom: 8px;
`]))),A=(0,h.H)(P||(P=a()([`
  word-break: break-all;
`]))),B=(0,h.H)(H||(H=a()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),R=(0,h.H)(I||(I=a()([`
  margin-left: 4px;
`]))),T=(0,h.H)(p||(p=a()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),v=(0,h.H)(W||(W=a()([`
  margin-top: 8px;
  color: #999;
`]))),u=(0,h.H)(x||(x=a()([`
  margin-top: 8px;
  color: #ff4d4f;
`])))},2862:function(G,c,e){e.r(c);var S=e(97857),a=e.n(S),h=e(25278),L=e(13457),P=e(41637),H=e(34041),I=e(55742),p=e(85893),W={InputText:{component:function($){var A,B=$.schema,R=$.value,T=$.disabled,v=$.readonly,u=$.onChange;return v?(0,p.jsx)("div",{children:R}):(0,p.jsx)(h.Z,a()(a()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((A=B.title)!==null&&A!==void 0?A:"")},B.renderOptions),{},{value:R!=null?R:"",disabled:T,onChange:function(t){return u(t.target.value)}}))}},InputNumber:{component:function($){var A,B=$.schema,R=$.value,T=$.disabled,v=$.readonly,u=$.onChange;return v?(0,p.jsx)("div",{children:R}):(0,p.jsx)(L.Z,a()(a()({style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165".concat((A=B.title)!==null&&A!==void 0?A:"")},B.renderOptions),{},{value:R,onChange:function(t){return u(t!=null?t:void 0)},disabled:T}))}},TextArea:{component:function($){var A,B=$.schema,R=$.value,T=$.disabled,v=$.readonly,u=$.onChange;return v?(0,p.jsx)("div",{children:R}):(0,p.jsx)(h.Z.TextArea,a()(a()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((A=B.title)!==null&&A!==void 0?A:"")},B.renderOptions),{},{value:R!=null?R:"",onChange:function(t){return u(t.target.value)},disabled:T}))}},Password:{component:function($){var A,B=$.schema,R=$.value,T=$.disabled,v=$.readonly,u=$.onChange;return v?(0,p.jsx)("div",{children:R}):(0,p.jsx)(h.Z.Password,a()(a()({placeholder:"\u8BF7\u8F93\u5165".concat((A=B.title)!==null&&A!==void 0?A:"")},B.renderOptions),{},{value:R!=null?R:"",onChange:function(t){return u(t.target.value)},disabled:T}))}},Switch:{component:function($){var A=$.value,B=$.disabled,R=$.onChange;return(0,p.jsx)(P.Z,{checked:A,disabled:B,onChange:function(v){return R(v)}})}},Select:{component:function($){var A,B,R,T=$.schema,v=$.value,u=$.disabled,s=$.readonly,t=$.onChange,o=(A=(B=T.renderOptions)===null||B===void 0?void 0:B.options)!==null&&A!==void 0?A:[];if(s){var n=o.find(function(r){return r.value===v});return(0,p.jsx)("div",{children:n==null?void 0:n.label})}return(0,p.jsx)(H.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat((R=T.title)!==null&&R!==void 0?R:"")},T.renderOptions),{},{value:v,onChange:function(l){return t(l)},disabled:u}))}},Radio:{component:function($){var A,B,R=$.schema,T=$.value,v=$.disabled,u=$.onChange,s=(A=(B=R.renderOptions)===null||B===void 0?void 0:B.options)!==null&&A!==void 0?A:[];return(0,p.jsx)(I.ZP.Group,{value:T,disabled:v,onChange:function(o){return u(o.target.value)},children:s.map(function(t){return(0,p.jsx)(I.ZP,{value:t.value,disabled:t.disabled,children:t.label},t.value)})})}}};c.default=W},40644:function(G,c,e){e.r(c);var S=e(5574),a=e.n(S),h=e(25035),L=e(52162),P=e(55241),H=e(47221),I=e(67294),p=e(85893),W=function($){var A=$.schema,B=$.path,R=$.objectStyle,T=(0,I.useState)(!1),v=a()(T,2),u=v[0],s=v[1],t=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{children:A.title}),!!A.titleDescription&&(0,p.jsx)(P.Z,{placement:"top",trigger:"hover",content:A.titleDescription,children:(0,p.jsx)(h.Z,{style:{marginLeft:4}})})]});return(0,p.jsx)(H.Z,{bordered:!1,ghost:!0,activeKey:String(u),onChange:function(){return s(!u)},children:(0,p.jsx)(H.Z.Panel,{header:t,style:{borderRadius:4,background:"rgba(0,0,0,0.03)"},children:(0,p.jsx)("div",{style:R,children:(0,p.jsx)(L.Z,{schema:A,path:B})})},"false")})};c.default={formItem:W}},33517:function(G,c,e){e.r(c);var S=e(25035),a=e(52162),h=e(55241),L=e(85893),P={background:"#efefef",fontWeight:"bold",padding:"7px 15px",borderRadius:4,marginBottom:15},H=function(p){var W=p.schema,x=p.path,$=p.objectStyle;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("div",{style:P,children:[(0,L.jsx)("span",{children:W.title}),!!W.titleDescription&&(0,L.jsx)(h.Z,{placement:"top",trigger:"hover",content:W.titleDescription,children:(0,L.jsx)(S.Z,{style:{marginLeft:4}})})]}),(0,L.jsx)("div",{style:$,children:(0,L.jsx)(a.Z,{schema:W,path:x})})]})};c.default={formItem:H}},47621:function(G,c,e){e.r(c),c.default={renderType:"Root",properties:{title:{renderType:"InputText",title:"\u4E00\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E00\u7EA7\u5185\u5BB9"},o1:{renderType:"Object",title:"\u4EC5\u52A0\u7C97\u6807\u9898\u7684\u5BF9\u8C61 Object",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}},o2:{renderType:"ObjectCollapse",title:"\u53EF\u6298\u53E0\u7684\u5BF9\u8C61 ObjectCollapse",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}}}}},37418:function(G,c,e){e.r(c),e.d(c,{default:function(){return H}});var S=e(67294),a=e(85893),h={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #ececec",borderRadius:6,cursor:"pointer",fontSize:14},L=function(p){var W=p.value,x=p.sPath,$=p.onChange,A=function(){var R=String(Math.random()).slice(2,6),T={bank_id:"id_".concat(R),bank_account:"111222333".concat(R),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(R),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(R,"\u652F\u884C")};$(T[x],{extra:T})};return(0,a.jsx)("div",{style:h,onClick:A,children:W?(0,a.jsx)("div",{children:W}):(0,a.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})},P={component:L},H={BankSelect:P}},14953:function(G,c,e){e.r(c);var S=[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing",disabled:!0}],a={renderType:"Root",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}},Switch:{title:"\u5F00\u5173\uFF08Switch\uFF09",renderType:"Switch"},SwitchBox:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE"}},TextArea:{title:"\u591A\u884C\u6587\u672C\uFF08TextArea\uFF09",renderType:"TextArea",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},Password:{title:"\u5BC6\u7801\u6846\uFF08Password\uFF09",renderType:"Password",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},Select:{title:"\u5355\u9879\u9009\u62E9\u5668\uFF08Select\uFF09",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:S,mode:"multiple"}},SelectMultiple:{title:"\u591A\u9879\u9009\u62E9\u5668\uFF08SelectMultiple\uFF09",renderType:"SelectMultiple",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:S}},Radio:{title:"\u5355\u9009\u6846\uFF08Radio\uFF09",renderType:"Radio",renderOptions:{options:S}},Checkbox:{title:"\u591A\u9009\u6846\uFF08Checkbox\uFF09",renderType:"Checkbox",renderOptions:{options:S}},Rate:{title:"\u8BC4\u5206\uFF08Rate\uFF09",renderType:"Rate"},DatePicker:{title:"\u65E5\u671F\uFF08DatePicker\uFF09",renderType:"DatePicker",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",format:"YYYY\u5E74MM\u6708DD\u65E5"}},DateRangePicker:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},Description:{title:"\u7EAF\u5C55\u793A\uFF08Description\uFF09",renderType:"Description"},Object:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF08Object\uFF09",renderType:"Object",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectRightIcon:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u7BAD\u5934\u5728\u53F3\u8FB9",renderType:"Object",renderOptions:{headerOptions:{expandIconPosition:"end"}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNotCollapse:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u4E0D\u5141\u8BB8\u6298\u53E0",renderType:"Object",renderOptions:{headerOptions:{collapsible:"icon"},panelOptions:{showArrow:!1}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNull:{title:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderType:"ObjectNull",style:{border:"1px solid #d9d9d9",padding:10,borderRadius:6},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}}}};c.default=a},97609:function(G,c,e){e.r(c),e.d(c,{builtinRenderers:function(){return P}});var S=e(68400),a=e.n(S),h=e(77525),L,P=(0,h.H)(L||(L=a()([`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
`])))},36641:function(G,c,e){e.r(c);var S=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",align:"center"},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",align:"center"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",align:"center"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",align:"center"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",align:"center"},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status",align:"center"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator",align:"center"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",align:"center"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",align:"center"},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",align:"center"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",align:"center"}];c.default=S},77095:function(G,c,e){e.r(c),e.d(c,{default:function(){return h}});var S=e(27484),a=e.n(S);function h(){for(var L=[],P=0;P<10;P++){var H=String(Math.random()).slice(2,6),I=Math.random()>.5?1:2,p=a()().format("YYYY-MM-DD HH:mm:ss");L.push({key:Math.random(),supplier_name:"".concat(H,"\u6709\u9650\u516C\u53F8"),supplier_code:H,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:p,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:I===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:I===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:p})}return L}},35719:function(G,c,e){e.r(c);var S=e(67294),a=e(85893),h={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #d9d9d9",borderRadius:6,cursor:"pointer",fontSize:14},L=function(H){var I=H.value,p=H.sPath,W=H.onChange,x=function(){var A=String(Math.random()).slice(2,6),B={bank_id:"id_".concat(A),bank_account:"111222333".concat(A),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(A),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(A,"\u652F\u884C")};W(B[p],{extra:B})};return(0,a.jsx)("div",{style:h,onClick:x,children:I?(0,a.jsx)("div",{children:I}):(0,a.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})};c.default={component:L}},57864:function(G,c,e){e.r(c);var S=e(52162),a=e(85893),h=function(P){var H=P.schema,I=P.path,p=P.objectStyle;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"section-title",children:H.title}),(0,a.jsx)("div",{style:p,children:(0,a.jsx)(S.Z,{schema:H,path:I})})]})};c.default={formItem:h}},9680:function(G,c,e){e.r(c);var S=e(85893),a=function(L){var P=L.schema;return(0,S.jsx)("div",{className:"section-title",children:P.title})};c.default={formItem:a}},24534:function(G,c,e){e.r(c);var S=[{title:"Supplier Name",dataIndex:"supplier_name",width:150,fixed:"left"},{title:"Supplier Code",dataIndex:"supplier_code",width:150},{title:"Description",dataIndex:"description",valueType:function(){return{type:"long-text-modal",maxLength:20}}},{title:"Bill No",dataIndex:"bill_no",width:130},{title:"Bill Type",dataIndex:"bill_type"},{title:"Bill Date",dataIndex:"bill_date",width:120},{title:"Bill Status",dataIndex:"bill_status"},{title:"Operator",dataIndex:"operator"},{title:"Goods Name",dataIndex:"goods_name",width:130},{title:"Goods Price",dataIndex:"goods_price"},{title:"Goods Code",dataIndex:"goods_code",width:130},{title:"Goods Category",dataIndex:"goods_category"},{title:"Goods Date",dataIndex:"goods_date",width:120,fixed:"right"}];c.default=S},23786:function(G,c,e){e.r(c);var S=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u4FE1\u606F",children:[{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"}]},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u4FE1\u606F",children:[{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]}];c.default=S},6271:function(G,c,e){e.r(c);var S=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u8BC4\u7EA7(rate)",dataIndex:"rate",valueType:"rate"},{title:"\u4EE3\u7801\u5757(code)",dataIndex:"code",valueType:"code"},{title:"\u5343\u5206\u4F4D\u6570\u5B57(comma-number)",dataIndex:"comma_number",valueType:"comma-number"},{title:"\u767E\u5206\u6BD4(percent)",dataIndex:"percent",valueType:"percent"},{title:"\u957F\u6587\u6848(long-text)",dataIndex:"long_text",valueType:function(h,L){return{type:"long-text",maxLength:20,color:L%2?"#1677ff":"#000"}},width:270},{title:"\u957F\u6587\u6848(long-text-modal)",dataIndex:"long_text_modal",valueType:function(){return{type:"long-text-modal",maxLength:20,width:500}},width:270},{title:"\u72B6\u6001\u5F00\u5173(switch)",dataIndex:"switch_status",valueType:"switch"},{title:"\u6807\u7B7E(tags)",dataIndex:"tags",valueType:"tags",width:140},{title:"\u56FE\u7247(images)",dataIndex:"image_list",valueType:"images"}];c.default=S},362:function(G,c,e){e.r(c);var S=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}];c.default=S},62244:function(G,c,e){e.r(c),e.d(c,{default:function(){return h}});var S=e(27484),a=e.n(S);function h(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,P=[],H=0;H<L;H++){var I=String(Math.random()).slice(2,6),p=Math.random()>.5?1:2,W=a()().format("DD/MM/YYYY HH:mm:ss"),x="id_".concat(H);P.push({key:x,id:x,supplier_name:"".concat(I," Co.,Ltd."),supplier_code:I,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"Purchase Order":"Return Order",bill_date:W,bill_status:Math.random()>.5?"Submitted":"To be submitted",operator:Math.random()>.5?"Tom":"Lily",goods_name:p===1?"10 red roses":"Live bass",goods_code:"G".concat(Date.now()),goods_category:p===1?"Fruits & Flowers":"Aquatic Products",goods_date:W,goods_price:p===1?19.9:22.8,description:"SearchTable is a conditional search table component based on the Search + Antd Table encapsulation; It is often used for data retrieval, display and operation of background management systems."})}return P}},27164:function(G,c,e){e.r(c),e.d(c,{default:function(){return a}});function S(h,L){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,H=Math.random()*(L-h)+h;return P?Math.floor(H):H}function a(){for(var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,L=[],P=0;P<h;P++){var H="id_".concat(P);L.push({key:H,id:H,title:"".concat(String(Math.random()).slice(2,6),"\u6807\u9898"),rate:S(0,5),code:`
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      `.trim(),comma_number:Math.random()>.4?S(1e3,1e5):S(0,1e3),percent:S(0,100).toFixed(2),switch_status:Math.random()>.5,tags:Math.random()>.5?"\u5F20\u4E09":["\u674E\u56DB","\u738B\u4E94"],image_list:Math.random()>.5?"https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg":["https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif","https://raw.githubusercontent.com/Barrior/assets/main/gift.png"],deploy_status:S(0,3),long_text:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",long_text_modal:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002"})}return L}},92114:function(G,c,e){e.r(c),e.d(c,{default:function(){return h}});var S=e(27484),a=e.n(S);function h(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,P=arguments.length>1?arguments[1]:void 0,H=[],I=0;I<L;I++){var p=String(Math.random()).slice(2,6),W=Math.random()>.5?1:2,x=a()().format("YYYY-MM-DD HH:mm:ss"),$="id_".concat(I);H.push({key:$,id:$,supplier_name:"".concat(p,"\u6709\u9650\u516C\u53F8"),supplier_code:p,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:x,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:W===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:W===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:x,goods_price:W===1?19.9:22.8})}return P&&H.sort(function(A,B){var R=String(A[P.sort_field]),T=String(B[P.sort_field]);return P.sort_order==="ascend"?R.localeCompare(T):T.localeCompare(R)}),H}},34200:function(G,c,e){e.r(c);var S={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_type:{title:"Bill Type",renderType:"Select",renderOptions:{options:[{label:"Purchase Order",value:1},{label:"Inbound Order",value:2},{label:"Return Order",value:3}]}},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"},goods_category:{title:"Goods Category",renderType:"Select",renderOptions:{options:[{label:"Fruits & Flowers",value:1},{label:"Aquatic Products",value:2},{label:"Grains & Oils & Seasoning",value:3}]}}}};c.default=S},68666:function(G,c,e){e.r(c);var S={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}};c.default=S},77525:function(G,c,e){e.d(c,{H:function(){return h}});var S=e(80834),a=(0,S.Z)({key:"schema-render"}),h=a.css},38959:function(G,c,e){e.r(c),e.d(c,{sleep:function(){return S}});function S(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(h){return setTimeout(h,a)})}},57558:function(G,c,e){var S=e(67294),a=(0,S.createContext)({});c.Z=a},57547:function(G,c,e){e.d(c,{Z:function(){return v}});var S=e(12444),a=e.n(S),h=e(72004),L=e.n(h),P=e(25098),H=e.n(P),I=e(31996),p=e.n(I),W=e(26037),x=e.n(W),$=e(9783),A=e.n($),B=e(67294),R=e(28e3),T=e(85893),v=function(u){p()(t,u);var s=x()(t);function t(){var o;a()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return o=s.call.apply(s,[this].concat(r)),A()(H()(o),"state",{hasError:!1,error:Error()}),o}return L()(t,[{key:"getFallback",value:function(){var n,r=this.state.error,l=this.props.catchErrorTips;return l==="silent"?null:(0,R.mf)(l)?l(r):(0,T.jsxs)("div",{style:{color:"red"},children:["[ErrorBoundary] ",(n=r==null?void 0:r.stack)!==null&&n!==void 0?n:String(r)]})}},{key:"render",value:function(){return this.state.hasError?this.getFallback():this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0,error:n}}}]),t}(B.Component)},95399:function(G,c,e){e.d(c,{SY:function(){return h},f1:function(){return a},r6:function(){return S}});var S=function(L){return L.success="success",L.warning="warning",L.error="error",L}({}),a=[S.success,S.warning,S.error],h=function(L){return L.normal="normal",L.autoFill="autoFill",L.autoFit="autoFit",L}({})},16223:function(G,c,e){var S=e(67294),a=e(38812),h=function(P,H){var I=(0,a.Z)(P);(0,S.useEffect)(function(){I.current()},H)};c.Z=h},56432:function(G,c,e){var S=e(67294),a=e(23060),h=e(38812),L=e(37091);function P(H,I){var p,W=(0,h.Z)(H),x=(p=I==null?void 0:I.wait)!==null&&p!==void 0?p:1e3,$=(0,S.useMemo)(function(){return(0,a.Ds)(function(){return W.current.apply(W,arguments)},x)},[]);return(0,L.Z)(function(){return $.cancel()}),{run:$,cancel:$.cancel}}c.Z=P},4559:function(G,c,e){e.d(c,{Z:function(){return L}});var S=e(5574),a=e.n(S),h=e(67294);function L(){var P=(0,h.useReducer)(function(W){return W+1},0),H=a()(P,2),I=H[0],p=H[1];return{forceUpdate:p}}},38812:function(G,c,e){var S=e(67294);function a(h){var L=(0,S.useRef)(h);return L.current=h,L}c.Z=a},24317:function(G,c,e){e.d(c,{Z:function(){return a}});var S=e(67294);function a(h){var L=(0,S.useRef)(h),P=(0,S.useRef)();return L.current=(0,S.useMemo)(function(){return h},[h]),P.current||(P.current=function(){for(var H=arguments.length,I=new Array(H),p=0;p<H;p++)I[p]=arguments[p];return L.current.apply(this,I)}),P.current}},85908:function(G,c,e){var S=e(67294),a=function(L){(0,S.useEffect)(function(){return L()},[])};c.Z=a},90808:function(G,c,e){e.d(c,{Z:function(){return h}});var S=e(67294),a=e(57558);function h(){var L=(0,S.useContext)(a.Z);return L}},37091:function(G,c,e){var S=e(67294),a=e(38812),h=function(P){var H=(0,a.Z)(P);(0,S.useEffect)(function(){return function(){H.current()}},[])};c.Z=h},74072:function(G,c,e){e.r(c),e.d(c,{RendererDistributor:function(){return E.Z},RendererExecutor:function(){return K.Z},RendererIterator:function(){return d.Z},default:function(){return U},useAsyncEffect:function(){return O.Z},useCoreValue:function(){return R},useDebounceFn:function(){return _.Z},useForceUpdate:function(){return x.Z},useLatest:function(){return D.Z},useMemoizedFn:function(){return $.Z},useMounted:function(){return b.Z},useUnmount:function(){return M.Z},utils:function(){return S}});var S={};e.r(S),e.d(S,{classNames:function(){return g.Z},classNamesWithPrefix:function(){return H.Rk},cloneDeep:function(){return W.Xh},debounce:function(){return W.Ds},dropRight:function(){return W.j7},find:function(){return W.sE},get:function(){return W.U2},hasOwnProperty:function(){return H.nr},isArray:function(){return I.kJ},isBoolean:function(){return I.jn},isFunction:function(){return I.mf},isMatch:function(){return W.BD},isNil:function(){return I.kK},isNull:function(){return I.Ft},isNumber:function(){return I.hj},isObject:function(){return I.Kn},isPlainObject:function(){return I.PO},isString:function(){return I.HD},isUndefined:function(){return I.o8},logger:function(){return N.Z},mapKeys:function(){return W.Cw},omit:function(){return W.CE},pick:function(){return W.ei},positionedOffset:function(){return s},set:function(){return W.t8},templateCompiled:function(){return H.dr},toLower:function(){return W.t$},traverseSchema:function(){return V.Z},typeChecking:function(){return I.DN}});var a=e(97857),h=e.n(a),L=e(67294),P=e(57547),H=e(52038),I=e(28e3),p=e(49552),W=e(23060),x=e(4559),$=e(24317),A=function(){var Z=(0,L.useRef)(!1);return(0,L.useEffect)(function(){return Z.current=!1,function(){Z.current=!0}},[]),Z},B=A;function R(z){var Z,w=(0,L.useRef)((Z=z.defaultValue)!==null&&Z!==void 0?Z:{}),X=B(),ae=(0,x.Z)(),te=ae.forceUpdate,ue=(0,H.nr)(z,"value");if(ue){var ye;w.current=(ye=z.value)!==null&&ye!==void 0?ye:{}}var he=(0,$.Z)(function(be,Oe){if(!X.current){var Ce,Ae,Se,Me=(0,p.P)(Oe.path),je=h()(h()({},Oe),{},{sPath:Me}),Le=(Ce=z.watch)===null||Ce===void 0?void 0:Ce[Me];(0,I.mf)(Le)&&Le(be,je),w.current=be,ue||te(),(Ae=z.onItemChange)===null||Ae===void 0||Ae.call(z,je),(Se=z.onChange)===null||Se===void 0||Se.call(z,be,je)}}),ve=(0,$.Z)(function(be){var Oe=(0,W.t8)(h()({},w.current),be.path,be.value);he(Oe,be)}),Pe=(0,$.Z)(function(){return w.current}),Ie=(0,$.Z)(function(be){he(be,{path:[],value:void 0})}),Ee=(0,$.Z)(function(){Ie({})});return{value:w.current,valueRef:w,onChange:ve,getValue:Pe,setValue:Ie,resetValue:Ee}}var T=e(95399),v=["320px","1fr"];function u(z){var Z=z.layout,w=z.layoutMinMax,X=z.layoutColumnGap,ae=z.layoutRowGap,te=w==null?void 0:w[0],ue=w==null?void 0:w[1],ye=(0,L.useMemo)(function(){if(Z===T.SY.normal)return"repeat(24, 1fr)";var ve=Z===T.SY.autoFill?"auto-fill":"auto-fit",Pe=(0,p.e)(te!=null?te:v[0]),Ie=(0,p.e)(ue!=null?ue:v[1]);return"repeat(".concat(ve,", minmax(").concat(Pe,", ").concat(Ie,"))")},[Z,te,ue]),he={display:"grid",gridTemplateColumns:ye,columnGap:X,rowGap:ae};return he}function s(z,Z){if(!z||!Z)return{left:0,top:0};for(var w=0,X=0,ae=z;ae&&ae!==Z;)w+=ae.offsetLeft,X+=ae.offsetTop,ae=ae.offsetParent;return{left:w,top:X}}var t=e(36578);function o(z,Z){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(z){var X=w.positionedElement,ae=w.xAxis,te=w.yAxis,ue=w.behavior,ye=ue===void 0?"smooth":ue,he=w.gap,ve=he===void 0?0:he,Pe=X||Z;if(Pe){var Ie=s(z,Pe);Pe.scrollTo({left:ae===!1?void 0:Ie.left+ve,top:te===!1?void 0:Ie.top+ve,behavior:ye})}}}function n(z){var Z=z.ref,w=z.rootElementRef,X=z.rootContextRef,ae=z.getValue,te=z.setValue,ue=z.resetValue,ye=(0,$.Z)(function(){return(0,t.Ze)((0,W.ei)(X.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),he=(0,$.Z)(function(Ee){var be,Oe=(be=X.current)===null||be===void 0?void 0:be.rendererStorage;if(Oe&&Ee){var Ce=(0,I.kJ)(Ee)?(0,p.P)(Ee):Ee;return Oe[Ce]}}),ve=(0,$.Z)(function(Ee){var be,Oe=(be=X.current)===null||be===void 0?void 0:be.rendererStorage;if(Oe){var Ce=Ee?(0,I.HD)(Ee)?[Ee]:Ee:Object.keys(Oe);Ce.forEach(function(Ae){var Se;(Se=Oe[Ae])===null||Se===void 0||Se.setValidatorState({status:T.r6.success})})}}),Pe=(0,$.Z)(function(){return w.current}),Ie=(0,$.Z)(function(Ee,be){var Oe;return o((Oe=he(Ee))===null||Oe===void 0?void 0:Oe.getRootElement(),Pe(),be)});(0,L.useImperativeHandle)(Z,function(){return{validate:ye,resetError:ve,setValue:te,resetValue:ue,getValue:ae,getRootElement:Pe,scrollTo:Ie,findItem:he}},[])}var r=e(39214),l=e(57558),d=e(52162),m=e(97192),g=e(18474),f=e(85893),j={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:v,disabled:!1,readonly:!1,validators:{},userCtx:{}},y=(0,L.forwardRef)(function(z,Z){m.Z.falsy(z.schema,"missing schema."),m.Z.falsy(z.itemLayout,"missing itemLayout.");var w=h()(h()({},j),z),X=(0,L.useRef)(null),ae=(0,L.useRef)({}),te=R(w),ue=te.value,ye=te.onChange,he=te.getValue,ve=te.setValue,Pe=te.resetValue,Ie=(0,L.useMemo)(function(){return h()(h()({},r.Z),w.locale)},[w.locale]),Ee=(0,L.useMemo)(function(){return(0,W.Cw)(w.renderers,function(Ce,Ae){return Ae.toLowerCase()})},[w.renderers]),be=u(w),Oe=ae.current=h()(h()({},(0,W.ei)(w,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:be,renderers:Ee,rootSchema:w.schema,rootValue:ue,locale:Ie,rendererStorage:{},onChange:ye,prefixClassNames:function(){for(var Ae=arguments.length,Se=new Array(Ae),Me=0;Me<Ae;Me++)Se[Me]=arguments[Me];return H.Rk.apply(void 0,[w.prefixCls].concat(Se))}});return n({ref:Z,rootElementRef:X,rootContextRef:ae,getValue:he,setValue:ve,resetValue:Pe}),(0,f.jsx)(l.Z.Provider,{value:Oe,children:(0,f.jsx)("div",{className:(0,g.Z)(Oe.prefixCls,w.className,{"is-disabled":Oe.disabled,"is-readonly":Oe.readonly}),ref:X,style:h()(h()({position:"relative"},be),w.style),children:(0,f.jsx)(d.Z,{schema:Oe.rootSchema,path:[]})})})}),i=(0,L.forwardRef)(function(z,Z){return(0,f.jsx)(P.Z,{catchErrorTips:z.catchErrorTips,children:(0,f.jsx)(y,h()(h()({},z),{},{ref:Z}))})}),C=i,O=e(16223),_=e(56432),D=e(38812),b=e(85908),M=e(37091),E=e(82535),K=e(94963),N=e(93047),V=e(44081),U=C},78484:function(G,c,e){e.r(c),c.default={localeName:"en-us",validation:{required:"${label} is required",typeError:"Data format error, expect ${type} type"}}},39214:function(G,c){c.Z={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}},82535:function(G,c,e){var S=e(97857),a=e.n(S),h=e(90808),L=e(97192),P=e(8465),H=e(94963),I=e(85893),p=function(x){var $=(0,h.Z)(),A=x.schema;L.Z.falsy(A,"schema is required in RendererDistributor Props.");var B=(0,P.j)($.renderers,A.renderType);return B?(0,I.jsx)(H.Z,a()(a()({},x),{},{renderer:B})):null};c.Z=p},94963:function(G,c,e){var S=e(15009),a=e.n(S),h=e(97857),L=e.n(h),P=e(99289),H=e.n(P),I=e(5574),p=e.n(I),W=e(67294),x=e(57547),$=e(95399),A=e(56432),B=e(24317),R=e(90808),T=e(18474),v=e(49552),u=e(23060),s=e(36578),t=e(85893),o=function(r){var l=r.schema,d=r.path,m=r.renderer,g=r.gridColumn,f=(0,R.Z)(),j=(0,W.useState)({status:$.r6.success}),y=p()(j,2),i=y[0],C=y[1],O=(0,v.P)(d),_=(0,W.useRef)(null);f.rendererStorage[O]=(0,W.useMemo)(function(){return{setValidatorState:function(z){return C(z)},getRootElement:function(){return _.current}}},[C]);var D=(0,A.Z)(function(){var U=H()(a()().mark(function z(Z){var w;return a()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,(0,s.Q7)({schema:l,rootValue:f.rootValue,userCtx:f.userCtx,path:d,value:Z,locale:f.locale,globalValidators:f.validators,rendererValidator:m.validator,rendererValidatorParams:E});case 2:w=ae.sent,C(L()({},w));case 4:case"end":return ae.stop()}},z)}));return function(z){return U.apply(this,arguments)}}(),{wait:300}),b=D.run,M=(0,B.Z)(function(){var U=H()(a()().mark(function z(Z){var w,X=arguments;return a()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:w=X.length>1&&X[1]!==void 0?X[1]:{},f.onChange({path:d,value:Z,extra:w.extra}),w.triggerValidator!==!1?b(Z):C({status:$.r6.success});case 3:case"end":return te.stop()}},z)}));return function(z){return U.apply(this,arguments)}}()),E=(0,s.cy)(L()({schema:l,path:d,value:(0,u.U2)(f.rootValue,d)},(0,u.ei)(f,"disabled","readonly","rootValue","userCtx","locale"))),K=L()(L()({},E),{},{validator:i,objectStyle:f.objectStyle,onChange:M}),N=K,V=function(){var z=L()(L()({},(0,u.ei)(K,"schema","required","disabled","readonly","validator","locale","userCtx")),{},{prefixClassNames:f.prefixClassNames});if(K.readonly){if(m.readonlyFormItem)return(0,W.createElement)(m.readonlyFormItem,N);if(m.readonlyComponent)return(0,W.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,W.createElement)(m.readonlyComponent,K)}))}if(K.disabled){if(m.disabledFormItem)return(0,W.createElement)(m.disabledFormItem,N);if(m.disabledComponent)return(0,W.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,W.createElement)(m.disabledComponent,K)}))}if(m.formItem)return(0,W.createElement)(m.formItem,N);if(m.component)return(0,W.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,W.createElement)(m.component,K)}))};return(0,t.jsx)("div",{ref:_,className:(0,T.Z)(f.prefixClassNames("form-item","item-".concat(l.renderType)),l.className,{"is-required":K.required,"is-disabled":K.disabled,"is-readonly":K.readonly}),style:L()({gridColumn:g},l.style),children:(0,t.jsx)(x.Z,{catchErrorTips:f.catchErrorTips,children:V()})})};c.Z=o},52162:function(G,c,e){var S=e(97857),a=e.n(S),h=e(19632),L=e.n(h),P=e(67294),H=e(95399),I=e(90808),p=e(28e3),W=e(49552),x=e(27597),$=e(23060),A=e(82535),B=e(85893),R=function(v){var u=v.schema,s=v.path,t=(0,I.Z)(),o=t.rootValue,n=t.userCtx,r=s.length?(0,$.U2)(o,s):o,l=1,d=Object.keys(u.properties).map(function(m){var g=u.properties[m],f=(0,x.A)({statement:g.hidden,parentValue:r,rootValue:o,userCtx:n});if(f)return null;var j=[].concat(L()(s),[m]),y=(0,W.P)(j),i;if(t.layout===H.SY.normal){var C=l,O=25;!(0,p.hj)(g.span)&&!(0,p.hj)(g.spanStart)?C=l=1:(g.spanStart&&(C=g.spanStart,l=C),g.span&&(O=C+g.span,l=O)),i="".concat(C,"/").concat(O)}else(0,p.hj)(g.spanStart)&&(i="".concat(g.spanStart,"/auto"));var _={schema:g,path:j,gridColumn:i};return(0,B.jsx)(A.Z,a()({},_),y)});return(0,B.jsx)(P.Fragment,{children:d})};c.Z=R},97192:function(G,c){function e(h,L){h&&a(L)}function S(h,L){!h&&a(L)}function a(h){throw new Error("[AssertionError]: ".concat(h!=null?h:"Failed"))}c.Z={truthy:e,falsy:S,fail:a}},52038:function(G,c,e){e.d(c,{RI:function(){return P},Rk:function(){return I},dr:function(){return H},nr:function(){return p}});var S=e(28e3),a=e(18474),h=e(93047);function L(){return"".concat(Date.now()).concat(Math.random().toString().substring(2,5)).replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1-$2-$3-$4")}function P(x){if(!(0,S.HD)(x))return null;try{return new RegExp(x)}catch($){h.Z.warn($)}return null}function H(x){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return x?x.replace(/\$\{((\s|.)+?)?\}/g,function(){var A,B=(A=arguments.length<=1?void 0:arguments[1])===null||A===void 0?void 0:A.trim();if(!B)return"";var R=$[B];return R!=null?R:""}):""}function I(x){for(var $=arguments.length,A=new Array($>1?$-1:0),B=1;B<$;B++)A[B-1]=arguments[B];if(!A.length)return"";var R=a.Z.apply(void 0,A).trim();if(!R)return"";var T=R.split(" ").map(function(v){return"".concat(x,"-").concat(v)});return T.join(" ")}function p(x,$){return Object.prototype.hasOwnProperty.call(x,$)}function W(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function($){return setTimeout($,x)})}},28e3:function(G,c,e){e.d(c,{DN:function(){return P},Ft:function(){return R},HD:function(){return x},Kn:function(){return p},PO:function(){return W},hj:function(){return $},jn:function(){return A},kJ:function(){return I},kK:function(){return T},mf:function(){return H},o8:function(){return B}});var S=e(52677),a=e.n(S),h=Function.prototype.toString,L=h.call(Object);function P(v,u){return Object.prototype.toString.call(v)===u}function H(v){return P(v,"[object Function]")||P(v,"[object AsyncFunction]")}function I(v){return Array.isArray(v)}function p(v){var u=a()(v);return v!==null&&(u==="object"||u==="function")}function W(v){if(!P(v,"[object Object]"))return!1;var u=Object.getPrototypeOf(v);if(u===null)return!0;var s=Object.hasOwnProperty.call(u,"constructor")&&u.constructor;return typeof s=="function"&&s instanceof s&&h.call(s)===L}function x(v){return typeof v=="string"}function $(v){return typeof v=="number"}function A(v){return typeof v=="boolean"}function B(v){return v===void 0}function R(v){return v===null}function T(v){return B(v)||R(v)}},18474:function(G,c,e){var S=e(52677),a=e.n(S),h={}.hasOwnProperty;function L(){for(var P=[],H=0;H<arguments.length;H++){var I=arguments[H];if(I){var p=a()(I);if(p==="string"||p==="number")P.push(I);else if(Array.isArray(I)){if(I.length){var W=L.apply(null,I);W&&P.push(W)}}else if(p==="object"){if(I.toString!==Object.prototype.toString&&!I.toString.toString().includes("[native code]")){P.push(I.toString());continue}for(var x in I)h.call(I,x)&&I[x]&&P.push(x)}}}return P.join(" ")}c.Z=L},93047:function(G,c){var e={warn:function(){var a;(a=console).warn.apply(a,arguments)}};c.Z=e},49552:function(G,c,e){e.d(c,{P:function(){return a},e:function(){return h}});var S=e(28e3);function a(L){return L.join(".")}function h(L){return(0,S.hj)(L)?"".concat(String(L),"px"):L}},8465:function(G,c,e){e.d(c,{j:function(){return S}});function S(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=arguments.length>1?arguments[1]:void 0;if(h){var L=a[h.toLowerCase()];if(L&&(L.formItem||L.component))return L}}},27597:function(G,c,e){e.d(c,{A:function(){return L},o:function(){return P}});var S=e(23060),a=e(28e3),h=e(93047);function L(H){var I=H.statement,p=H.parentValue,W=p===void 0?{}:p,x=H.rootValue,$=x===void 0?{}:x,A=H.userCtx,B=A===void 0?{}:A;if((0,a.jn)(I))return I;if((0,a.HD)(I))try{var R=new Function("$","$root","$userCtx","return ".concat(I));return!!R(W,$,B)}catch(T){h.Z.warn(T)}return!1}function P(H){var I=H.statement,p=H.path,W=H.rootValue,x=H.userCtx,$=(0,S.j7)(p);return L({statement:I,parentValue:$.length?(0,S.U2)(W,$):W,rootValue:W,userCtx:x})}},23060:function(G,c,e){e.d(c,{BD:function(){return R},CE:function(){return $},Cw:function(){return W},Ds:function(){return t},U2:function(){return T},Xh:function(){return p},ei:function(){return x},j7:function(){return A},sE:function(){return B},t$:function(){return o},t8:function(){return s}});var S=e(97857),a=e.n(S),h=e(52677),L=e.n(h),P=e(97192),H=e(52038),I=e(28e3);function p(n){var r,l,d;if(Array.isArray(n)){for(l=Array(r=n.length);r--;)l[r]=(d=n[r])&&L()(d)==="object"?p(d):d;return l}if(Object.prototype.toString.call(n)==="[object Object]"){l={};for(r in n)r==="__proto__"?Object.defineProperty(l,r,{value:p(n[r]),configurable:!0,enumerable:!0,writable:!0}):l[r]=(d=n[r])&&L()(d)==="object"?p(d):d;return l}return n}function W(n,r){if(!(0,I.PO)(n)||!(0,I.mf)(r))return{};var l=Object.keys(n),d={};return l.map(function(m){var g=n[m],f=r(g,m);d[f]=g}),d}function x(n){var r={};if(!(0,I.PO)(n))return r;for(var l=arguments.length,d=new Array(l>1?l-1:0),m=1;m<l;m++)d[m-1]=arguments[m];return d.map(function(g){(0,H.nr)(n,g)&&(r[g]=n[g])}),r}function $(n){if(!(0,I.PO)(n))return{};for(var r=a()({},n),l=arguments.length,d=new Array(l>1?l-1:0),m=1;m<l;m++)d[m-1]=arguments[m];return d.map(function(g){(0,H.nr)(n,g)&&delete r[g]}),r}function A(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,I.kJ)(n)?n.slice(0,r>0?r*-1:n.length):[]}function B(n,r){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if((0,I.kJ)(n))for(var d=n.length,m=l;m<d;m++){var g=n[m];if((0,I.mf)(r)){if(r(g))return g}else if((0,I.PO)(r)&&R(g,r))return g}}function R(n,r){if(!(0,I.PO)(n))return!0;for(var l=Object.keys(r),d=0;d<l.length;d++){var m=l[d];if(!(0,H.nr)(n,m)||r[m]!==n[m])return!1}return!0}function T(n,r){if(!(!(0,I.PO)(n)||!(0,I.kJ)(r))){for(var l=n,d=0;d<r.length;d++){var m=r[d];if(l)l=l[m];else return}return l}}var v=/^(?:0|[1-9]\d*)$/;function u(n){return(0,I.hj)(n)||v.test(n)}function s(n,r,l){if(!(0,I.PO)(n))return n;for(var d=r.length,m=d-1,g=-1,f=n;f!==null&&++g<d;){var j=r[g],y=l;if(g!==m){var i=f[j];y=(0,I.Kn)(i)?i:u(r[g+1])?[]:{}}f[j]=y,f=f[j]}return n}function t(n,r){(0,I.mf)(n)||P.Z.fail("Expected a function");var l;function d(){for(var m=this,g=arguments.length,f=new Array(g),j=0;j<g;j++)f[j]=arguments[j];clearTimeout(l),l=setTimeout(function(){return n.apply(m,f)},r)}return d.cancel=function(){clearTimeout(l)},d}function o(n){return(0,I.HD)(n)?n.toLowerCase():""}},44081:function(G,c,e){e.d(c,{Z:function(){return W}});var S=e(19632),a=e.n(S),h=e(97857),L=e.n(h),P=e(52677),H=e.n(P),I=e(23060);function p(x){var $=x.properties;return!$||H()($)!=="object"||Array.isArray($)}function W(x,$,A){var B=L()({mapKey:"renderType",ignoreCase:!0,clone:!0,initialState:{},initialStore:{}},A),R=B.clone?(0,I.Xh)(x):x;$=(0,I.Cw)($,function(v,u){return u.toLowerCase()});var T=function v(u){var s=u.schema,t=u.path,o=u.state,n=u.store;p(s)||Object.keys(s.properties).forEach(function(r){var l,d,m,g,f,j,y,i,C,O=s.properties[r],_=[].concat(a()(t),[r]),D=(0,I.Xh)(o),b={schema:O,parentSchema:s,path:_,field:r,state:D,store:n},M=function(w){v(L()(L()({schema:O,path:_,state:D},w),{},{store:n}))},E=(l=$.$$)!==null&&l!==void 0?l:{},K=(d=$.$$object)!==null&&d!==void 0?d:{};(m=E.enter)===null||m===void 0||m.call(E,L()(L()({},b),{},{traverse:M}));var N=(g=O[B.mapKey])!==null&&g!==void 0?g:"";N=B.ignoreCase?(0,I.t$)(N):N;var V=(0,I.t$)(N).startsWith("object");if(V){var U;(U=K.enter)===null||U===void 0||U.call(K,L()(L()({},b),{},{traverse:M}))}var z=(f=$[N])!==null&&f!==void 0?f:{};(j=z.enter)===null||j===void 0||j.call(z,L()(L()({},b),{},{traverse:M})),(y=E.exit)===null||y===void 0||y.call(E,b),V&&((i=K.exit)===null||i===void 0||i.call(K,b)),(C=z.exit)===null||C===void 0||C.call(z,b)})};return T({schema:R,path:[],state:B.initialState,store:B.initialStore}),R}},36578:function(G,c,e){e.d(c,{cy:function(){return D},Q7:function(){return i},Ze:function(){return j}});var S=e(97857),a=e.n(S),h=e(15009),L=e.n(h),P=e(19632),H=e.n(P),I=e(99289),p=e.n(I),W=e(95399),x=e(23060),$=e(52038),A=e(28e3),B=e(49552),R=e(8465),T=e(12444),v=e.n(T),u=e(72004),s=e.n(u),t=e(9783),o=e.n(t),n=function(){function b(M){v()(this,b),o()(this,"value",void 0),o()(this,"rules",void 0),o()(this,"locale",void 0),o()(this,"globalValidators",void 0),o()(this,"globalValidatorParams",void 0),Object.assign(this,M)}return s()(b,[{key:"setValue",value:function(E){this.value=E}},{key:"validate",value:function(){var M=p()(L()().mark(function K(){return L()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,this.validateRules(this.rules);case 2:return V.abrupt("return",V.sent);case 3:case"end":return V.stop()}},K,this)}));function E(){return M.apply(this,arguments)}return E}()},{key:"validateRules",value:function(){var M=p()(L()().mark(function K(N){var V,U,z,Z;return L()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:X.prev=0,V=d(N),U=0,z=V;case 3:if(!(U<z.length)){X.next=12;break}if(Z=z[U],!(0,A.PO)(Z)){X.next=9;break}return this.validateRuleItem(Z),X.next=9,this.validateGlobal(Z);case 9:U++,X.next=3;break;case 12:X.next=19;break;case 14:if(X.prev=14,X.t0=X.catch(0),!b.isValidationError(X.t0)){X.next=18;break}return X.abrupt("return",(0,x.ei)(X.t0,"status","message","extra"));case 18:return X.abrupt("return",{status:W.r6.error,message:X.t0!==null&&X.t0!==void 0&&X.t0.message?X.t0.message:"CatchError"});case 19:return X.abrupt("return",{status:W.r6.success});case 20:case"end":return X.stop()}},K,this,[[0,14]])}));function E(K){return M.apply(this,arguments)}return E}()},{key:"validateRuleItem",value:function(E){var K=(0,A.jn)(E.required)?E.required:void 0,N=(0,A.hj)(E.len)?E.len:void 0,V=(0,A.hj)(E.min)?E.min:void 0,U=(0,A.hj)(E.max)?E.max:void 0,z=b.fail,Z=this.value,w=this.locale;if(K&&[void 0,null].includes(Z)&&b.fail(E.message),(E.type==="string"&&!(0,A.HD)(Z)||E.type==="number"&&!(0,A.hj)(Z)||E.type==="boolean"&&!(0,A.jn)(Z)||E.type==="object"&&!(0,A.PO)(Z)||E.type==="array"&&!(0,A.kJ)(Z))&&z((0,$.dr)(w.typeError,{type:E.type})),(0,A.HD)(Z)){var X=(0,$.RI)(E.pattern);(K&&Z===""||N&&Z.length!==N||V&&Z.length<V||U&&Z.length>U||X&&!X.test(Z))&&z(E.message)}(0,A.hj)(Z)&&(N&&Z!==N||V&&Z<V||U&&Z>U)&&z(E.message),(0,A.kJ)(Z)&&(K&&Z.length===0||N&&Z.length!==N||V&&Z.length<V||U&&Z.length>U)&&z(E.message)}},{key:"validateGlobal",value:function(){var M=p()(L()().mark(function K(N){var V,U,z,Z,w,X,ae,te,ue;return L()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(V=N.validator,U=this.globalValidators,z=this.globalValidatorParams,!(!V||!U||!z)){he.next=4;break}return he.abrupt("return");case 4:if(Z=U[V],w=function(Pe){Pe.status!==W.r6.success&&b.fail(Pe)},!l(Z)){he.next=11;break}return he.next=9,this.validateRules(Z.filter(function(ve){return!ve.validator}));case 9:X=he.sent,w(X);case 11:if(!(0,A.mf)(Z)){he.next=21;break}return he.next=14,Z(a()(a()({},z),{},{value:this.value}));case 14:if(ae=he.sent,!l(ae)){he.next=20;break}return he.next=18,this.validateRules(ae.filter(function(ve){return!ve.validator}));case 18:te=he.sent,w(te);case 20:r(ae)&&w({status:ae.status,message:(ue=N.message)!==null&&ue!==void 0?ue:ae.message,extra:ae.extra});case 21:case"end":return he.stop()}},K,this)}));function E(K){return M.apply(this,arguments)}return E}()}],[{key:"isValidationError",value:function(E){return(0,A.PO)(E)&&(0,$.nr)(E,b.failUK)}},{key:"fail",value:function(E){var K=o()({},b.failUK,!0);throw(0,A.HD)(E)?K.message=E:(0,A.PO)(E)&&Object.assign(K,(0,x.ei)(E,"status","message","extra")),K.status||(K.status=W.r6.error),K}}]),b}();o()(n,"failUK",typeof Symbol=="function"?Symbol("SRV"):"$$SRV");function r(b){return W.f1.includes(b==null?void 0:b.status)}function l(b){return(0,A.kJ)(b)&&!!b.length}function d(b){var M=[];return(0,A.PO)(b)?M.push(b):(0,A.kJ)(b)&&M.push.apply(M,H()(b)),M}function m(b){var M=new n(b);return M.validate()}var g=e(27597),f=e(44081);function j(b){return y.apply(this,arguments)}function y(){return y=p()(L()().mark(function b(M){var E,K,N,V,U,z,Z,w,X,ae,te,ue,ye;return L()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return E=M.rootSchema,K=M.rootValue,N=M.disabled,V=M.readonly,U=M.locale,z=M.renderers,Z=M.rendererStorage,w=M.validators,X=M.userCtx,ae=[],(0,f.Z)(E,{$$:{enter:function(Ie){var Ee=Ie.schema,be=Ie.path,Oe=(0,g.o)({statement:Ee.hidden,rootValue:K,path:be,userCtx:X});if(!Oe){var Ce=(0,R.j)(z,Ee.renderType);if(Ce){var Ae=function(){var Se=p()(L()().mark(function Me(){var je,Le,ze,Be,Ge,He;return L()().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:return je=(0,x.U2)(K,be),Le=D({schema:Ee,value:je,path:be,disabled:N,readonly:V,rootValue:K,locale:U,userCtx:X}),$e.prev=2,$e.next=5,i({schema:Ee,rootValue:K,userCtx:X,path:be,locale:U,value:je,globalValidators:w,rendererValidator:Ce.validator,rendererValidatorParams:Le});case 5:if(ze=$e.sent,Be=ze.status,Ge=ze.message,He=ze.extra,Be===W.r6.success){$e.next=11;break}return $e.abrupt("return",{path:be,value:je,status:Be,message:Ge,extra:He});case 11:$e.next=16;break;case 13:return $e.prev=13,$e.t0=$e.catch(2),$e.abrupt("return",{path:be,value:je,status:W.r6.error,message:"[CatchError]: ".concat($e.t0===null||$e.t0===void 0?void 0:$e.t0.message)});case 16:case"end":return $e.stop()}},Me,null,[[2,13]])}));return function(){return Se.apply(this,arguments)}}();ae.push(Ae())}}}},$$Object:{enter:function(Ie){var Ee=Ie.traverse;Ee()}}},{clone:!1}),te=[],ue=[],ve.next=7,Promise.all(ae).then(function(Pe){return Pe.filter(function(Ie){return(Ie==null?void 0:Ie.status)===W.r6.error?te.push(Ie):(Ie==null?void 0:Ie.status)===W.r6.warning&&ue.push(Ie),!!Ie})});case 7:return ye=ve.sent,ye.forEach(function(Pe){var Ie=Pe.status,Ee=Pe.path,be=Pe.message,Oe=Pe.extra,Ce=Z[(0,B.P)(Ee)];Ce==null||Ce.setValidatorState({status:Ie,message:be,extra:Oe})}),ve.abrupt("return",{hasError:!!te.length,hasWarning:!!ue.length,errorList:te,warningList:ue});case 10:case"end":return ve.stop()}},b)})),y.apply(this,arguments)}function i(b){return C.apply(this,arguments)}function C(){return C=p()(L()().mark(function b(M){var E,K,N,V,U,z,Z,w,X,ae,te,ue,ye,he,ve;return L()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:if(E=M.schema,K=M.rootValue,N=M.userCtx,V=M.path,U=M.locale,z=M.value,Z=M.globalValidators,w=M.rendererValidator,X=M.rendererValidatorParams,ae=O({schema:E,rootValue:K,path:V,locale:U,userCtx:N}),te={value:z,globalValidators:Z,globalValidatorParams:X,locale:U.validation},!l(ae)){Ie.next=9;break}return Ie.next=6,m(a()(a()({},te),{},{rules:ae}));case 6:if(ue=Ie.sent,ue.status===W.r6.success){Ie.next=9;break}return Ie.abrupt("return",ue);case 9:if(!l(w)){Ie.next=14;break}return Ie.next=12,m(a()(a()({},te),{},{rules:w}));case 12:return ye=Ie.sent,Ie.abrupt("return",ye);case 14:if(!(0,A.mf)(w)){Ie.next=25;break}return Ie.next=17,w(a()(a()({},X),{},{value:z}));case 17:if(he=Ie.sent,!l(he)){Ie.next=23;break}return Ie.next=21,m(a()(a()({},te),{},{rules:he}));case 21:return ve=Ie.sent,Ie.abrupt("return",ve);case 23:if(!r(he)){Ie.next=25;break}return Ie.abrupt("return",{status:he.status,message:he.message,extra:he.extra});case 25:return Ie.abrupt("return",{status:W.r6.success});case 26:case"end":return Ie.stop()}},b)})),C.apply(this,arguments)}function O(b){var M=b.schema,E=b.rootValue,K=b.path,N=b.locale,V=b.userCtx,U=d(M.rules),z=(0,g.o)({statement:M.required,rootValue:E,path:K,userCtx:V});return z&&!(0,x.sE)(M.rules,{required:!0})&&U.unshift({required:!0,message:(0,$.dr)(N.validation.required,{label:M.title})}),U}function _(b){var M=b.schema,E=b.rootValue,K=b.path,N=b.userCtx,V=(0,g.o)({statement:M.required,rootValue:E,path:K,userCtx:N});return!!(V||(0,x.sE)(d(M.rules),{required:!0}))}function D(b){var M=b.schema,E=b.value,K=b.path,N=b.disabled,V=b.readonly,U=b.rootValue,z=b.locale,Z=b.userCtx,w=!!N,X=!!V;w||(w=(0,g.o)({statement:M.disabled,rootValue:U,path:K,userCtx:Z})),X||(X=(0,g.o)({statement:M.readonly,rootValue:U,path:K,userCtx:Z}));var ae=_({schema:M,path:K,rootValue:U,userCtx:Z});return{schema:M,value:E,path:H()(K),sPath:(0,B.P)(K),required:ae,disabled:w,readonly:X,rootValue:U,locale:z,userCtx:Z}}},21222:function(G,c,e){e.d(c,{H:function(){return L}});var S=e(80834),a=Math.random().toString(36).substring(7).replace(/\d/g,"x"),h=(0,S.Z)({key:"schema-render-".concat(a)}),L=h.css},74311:function(G,c,e){e.r(c),e.d(c,{cij:function(){return Z.H},default:function(){return oe}});var S=e(97857),a=e.n(S),h=e(23060),L=e(18474),P=e(74072),H=e(52038),I=e(67294),p=e(13769),W=e.n(p),x=e(9783),$=e.n(x),A=e(28e3),B=e(14726),R=e(42075),T={submit:"submit",reset:"reset"},v={normal:"normal",formItem:"formItem"},u={prefixCls:"schema-render",itemLayout:"horizontal",readonlyPlaceholder:"-",labelWidth:100,labelGap:15,layoutColumnGap:10,layoutRowGap:15,actions:[T.submit,T.reset],actionsRenderMode:v.normal,disableFormOnActionLoading:!0,validateFormOnSubmit:!0},s=$()($()({},T.submit,!1),T.reset,!1),t="__FORM_RENDER_ACTIONS__",o="YYYY-MM-DD",n="YYYY-MM-DD HH:mm:ss",r=(0,I.createContext)({}),l=r;function d(){var k=(0,I.useContext)(l);return k}var m=e(85893),g=["disabled"],f=$()($()({},T.submit,function(k){var F,Y=k.loading,Q=k.locale,J=k.disabled,ee=k.submitText;return(0,m.jsx)(B.ZP,{type:"primary",htmlType:"submit",disabled:Y.submit?!1:J||Y.reset,loading:Y.submit,children:ee||(Q==null||(F=Q.FormRender)===null||F===void 0?void 0:F.submit)})}),T.reset,function(k){var F,Y=k.handleReset,Q=k.loading,J=k.locale,ee=k.disabled,ne=k.resetText;return(0,m.jsx)(B.ZP,{htmlType:"button",disabled:Q.reset?!1:ee||Q.submit,loading:Q.reset,onClick:Y,children:ne||(J==null||(F=J.FormRender)===null||F===void 0?void 0:F.reset)})}),j=function(F){var Y=F.disabled,Q=W()(F,g),J=d(),ee=J.actions,ne=J.actionsLoading,le=J.registerActions,ce=J.handleReset,ie=J.handleSubmit,pe=J.layoutColumnGap,me=J.locale,de=J.submitText,xe=J.resetText,ge=A.kJ(ee)&&ee.length>0;if(!ge)return null;var fe=a()(a()({},f),le);return(0,m.jsx)(R.Z,a()(a()({size:pe},Q),{},{children:ee.map(function(Te){var De={locale:me,disabled:Y,loading:ne,submitText:de,resetText:xe};Te===T.submit?De.handleSubmit=ie:Te===T.reset&&(De.handleReset=ce);var Re=fe[Te];return Re?(0,m.jsx)(I.Fragment,{children:Re==null?void 0:Re(De)},Te):null})}))},y=j,i=e(15009),C=e.n(i),O=e(99289),_=e.n(O),D=e(5574),b=e.n(D),M=e(24317),E=e(93047);function K(k){var F=k.props,Y=k.coreRef,Q=(0,I.useState)(s),J=b()(Q,2),ee=J[0],ne=J[1],le=(0,M.Z)(function(){var me=_()(C()().mark(function de(xe,ge){return C()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return ne(function(De){return a()(a()({},De),{},$()({},xe,!0))}),Te.next=3,ge().catch(function(De){E.Z.warn(De)});case 3:ne(function(De){return a()(a()({},De),{},$()({},xe,!1))});case 4:case"end":return Te.stop()}},de)}));return function(de,xe){return me.apply(this,arguments)}}()),ce=(0,M.Z)(function(){le(T.submit,_()(C()().mark(function me(){var de,xe;return C()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:if(Y.current){fe.next=2;break}return fe.abrupt("return");case 2:if(!F.validateFormOnSubmit){fe.next=8;break}return fe.next=5,Y.current.validate();case 5:if(xe=fe.sent,!(xe.hasError||xe.hasWarning)){fe.next=8;break}return fe.abrupt("return");case 8:return fe.next=10,(de=F.onSubmit)===null||de===void 0?void 0:de.call(F,Y.current.getValue());case 10:case"end":return fe.stop()}},me)})))}),ie=(0,M.Z)(function(me){me.preventDefault(),me.stopPropagation(),ce()}),pe=(0,M.Z)(function(){le(T.reset,_()(C()().mark(function me(){var de,xe,ge,fe;return C()().wrap(function(De){for(;;)switch(De.prev=De.next){case 0:if(Y.current){De.next=2;break}return De.abrupt("return");case 2:return De.next=4,(de=F.onBeforeReset)===null||de===void 0?void 0:de.call(F,Y.current.getValue());case 4:return ge=De.sent,fe=a()({},ge),Y.current.setValue(fe),Y.current.resetError(),De.next=10,(xe=F.onReset)===null||xe===void 0?void 0:xe.call(F,fe);case 10:case"end":return De.stop()}},me)})))});return{handleFormSubmit:ie,handleSubmit:ce,handleReset:pe,actionsLoading:ee,isLoading:ee.submit||ee.reset}}var N=e(25035),V=e(55241),U=e(68400),z=e.n(U),Z=e(21222),w,X,ae,te,ue,ye,he,ve,Pe,Ie,Ee=(0,Z.H)(w||(w=z()([`
  display: flex;
  align-items: center;
`]))),be=(0,Z.H)(X||(X=z()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),Oe=(0,Z.H)(ae||(ae=z()([`
  word-break: break-all;
`]))),Ce=(0,Z.H)(te||(te=z()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),Ae=(0,Z.H)(ue||(ue=z()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),Se=(0,Z.H)(ye||(ye=z()([`
  flex-grow: 1;
`]))),Me=(0,Z.H)(he||(he=z()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),je=(0,Z.H)(ve||(ve=z()([`
  margin-top: 6px;
  color: var(--schema-render-color-description);
`]))),Le=(0,Z.H)(Pe||(Pe=z()([`
  margin-top: 6px;
  color: var(--schema-render-color-error);
`]))),ze=(0,Z.H)(Ie||(Ie=z()([`
  color: var(--schema-render-color-warning);
`]))),Be=L.Z,Ge=function(F){var Y=F.schema,Q=F.required,J=F.prefixClassNames,ee=F.labelColon,ne=!!ee;return(0,m.jsxs)(m.Fragment,{children:[Q&&(0,m.jsx)("span",{className:Be(J("item-mark"),Ce),children:"*"}),(0,m.jsx)("span",{className:Be(J("item-title"),Oe),children:Y.title}),!!Y.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:Y.titleDescription,children:(0,m.jsx)(N.Z,{className:Be(J("item-title-tooltip"),Ae),style:{marginRight:ne?4:void 0}})}),ne&&(0,m.jsx)("span",{className:Be(J("item-colon")),children:ee})]})},He=function(F){var Y=F.body,Q=F.schema,J=F.validator,ee=F.required,ne=F.disabled,le=F.readonly,ce=F.userCtx,ie=F.prefixClassNames,pe=d(),me=pe.labelWidth,de=pe.labelColon,xe=pe.labelGap,ge=pe.labelRender,fe=pe.locale,Te=ge||Ge,De={schema:Q,required:ee,disabled:ne,readonly:le,userCtx:ce,prefixClassNames:ie,labelWidth:me,labelColon:de,labelGap:xe,locale:fe};return(0,m.jsxs)("div",{className:Be(ie("item-layout-horizontal")),children:[(0,m.jsxs)("div",{className:Be(ie("item-main"),Ee),children:[(0,m.jsx)("div",{className:Be(ie("item-header"),be),style:{flexBasis:me,marginRight:xe},children:Te(De)}),(0,m.jsx)("div",{className:Be(ie("item-body"),Se),children:Y})]}),(0,m.jsxs)("div",{className:Be(ie("item-footer"),Me),style:{paddingLeft:A.hj(me)?me+xe:0},children:[J.status==="error"&&!!J.message&&(0,m.jsx)("div",{className:Be(ie("item-error-msg"),Le),children:J.message}),J.status==="warning"&&!!J.message&&(0,m.jsx)("div",{className:Be(ie("item-warning-msg"),ze),children:J.message}),!!Q.description&&(0,m.jsx)("div",{className:Be(ie("item-description"),je),children:Q.description})]})]})},Ye=He,$e,Ze,vn,nn,In,tn,fn,qe,Bn=(0,Z.H)($e||($e=z()([`
  margin-bottom: 8px;
`]))),an=(0,Z.H)(Ze||(Ze=z()([`
  word-break: break-all;
`]))),$n=(0,Z.H)(vn||(vn=z()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),Kn=(0,Z.H)(nn||(nn=z()([`
  margin-left: 4px;
`]))),Nn=(0,Z.H)(In||(In=z()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),Wn=(0,Z.H)(tn||(tn=z()([`
  margin-top: 8px;
  color: var(--schema-render-color-description);
`]))),Un=(0,Z.H)(fn||(fn=z()([`
  margin-top: 8px;
  color: var(--schema-render-color-error);
`]))),Fn=(0,Z.H)(qe||(qe=z()([`
  color: var(--schema-render-color-warning);
`]))),Je=L.Z,zn=function(F){var Y=F.schema,Q=F.required,J=F.prefixClassNames,ee=F.labelColon,ne=!!ee;return(0,m.jsxs)(m.Fragment,{children:[Q&&(0,m.jsx)("span",{className:Je(J("item-mark"),$n),children:"*"}),(0,m.jsx)("span",{className:Je(J("item-title"),an),children:Y.title}),!!Y.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:Y.titleDescription,children:(0,m.jsx)(N.Z,{className:Je(J("item-title-tooltip"),Kn),style:{marginRight:ne?4:void 0}})}),ne&&(0,m.jsx)("span",{className:Je(J("item-colon")),children:ee})]})},Qe=function(F){var Y=F.body,Q=F.schema,J=F.validator,ee=F.required,ne=F.disabled,le=F.readonly,ce=F.userCtx,ie=F.prefixClassNames,pe=d(),me=pe.labelWidth,de=pe.labelColon,xe=pe.labelGap,ge=pe.labelRender,fe=pe.locale,Te=ge||zn,De={schema:Q,required:ee,disabled:ne,readonly:le,userCtx:ce,prefixClassNames:ie,labelWidth:me,labelColon:de,labelGap:xe,locale:fe};return(0,m.jsxs)("div",{className:ie("item-layout-vertical"),children:[(0,m.jsx)("div",{className:Je(ie("item-header"),Bn),children:Te(De)}),(0,m.jsx)("div",{className:ie("item-body"),children:Y}),(0,m.jsxs)("div",{className:Je(ie("item-footer"),Nn),children:[J.status==="error"&&!!J.message&&(0,m.jsx)("div",{className:Je(ie("item-error-msg"),Un),children:J.message}),J.status==="warning"&&!!J.message&&(0,m.jsx)("div",{className:Je(ie("item-warning-msg"),Fn),children:J.message}),!!Q.description&&(0,m.jsx)("div",{className:Je(ie("item-description"),Wn),children:Q.description})]})]})},Xe=Qe;function yn(k){var F=k.itemLayout,Y=(0,I.useMemo)(function(){return!F||F==="horizontal"?Ye:F==="vertical"?Xe:F},[F]);return Y}var rn=A.kJ,dn=A.kK,xn=A.Kn;function gn(k,F){var Y="".concat(t,"_").concat(Date.now());return a()(a()({},k),{},{properties:a()(a()({},k==null?void 0:k.properties),{},$()({},Y,a()(a()({},F),{},{renderType:t})))})}function En(k){var F=k.itemLayout,Y=k.labelWidth,Q=k.labelGap;return F==="horizontal"&&A.hj(Y)?Y+Q:0}function un(){for(var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],F=arguments.length>1?arguments[1]:void 0,Y=0;Y<k.length;Y++){var Q=k[Y],J=xn(Q)?Q:{label:Q,value:Q},ee=F(J);if(ee)return}}function sn(k,F){var Y=[];return!rn(k)||!rn(F)||F.forEach(function(Q){dn(Q)||un(k,function(J){if(Q===J.value)return Y.push(J.label),!0})}),Y}function Hn(k,F){var Y=[];return!rn(k)||!rn(F)||un(k,function(Q){F.includes(Q.value)&&Y.push(Q)}),Y}function Zn(k){return!!(dn(k)||k==="")}function Vn(k){var F=k.schema,Y=k.actionsRestSchema,Q=k.actionsRenderMode;return(0,I.useMemo)(function(){return Q===v.normal?F:gn(F,Y)},[F,Y,Q])}var Pn,Tn=(0,Z.H)(Pn||(Pn=z()([`
  --schema-render-color-description: #999;
  --schema-render-color-required-mark: #ff4d4f;
  --schema-render-color-warning: #faad14;
  --schema-render-color-error: #ff4d4f;

  font-size: 16px;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
`]))),Gn=e(28403),on=e(84567),Yn=function(F){var Y=F.children,Q=d(),J=Q.readonlyPlaceholder;return(0,m.jsx)(m.Fragment,{children:Zn(Y)?J:Y})},Ve=Yn,Jn=function(F){var Y=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=(0,M.Z)(function(le){var ce;ee(le,{extra:{checkedOptions:Hn((ce=Y.renderOptions)===null||ce===void 0?void 0:ce.options,le)}})});return(0,m.jsx)(on.Z.Group,a()(a()({},Y.renderOptions),{},{value:J,onChange:ne,disabled:Q}))},Qn=function(F){var Y,Q=F.schema,J=F.value,ee=F.locale,ne=sn((Y=Q.renderOptions)===null||Y===void 0?void 0:Y.options,J);return(0,m.jsx)(Ve,{children:ne.join(ee.FormRender.comma)})},Xn={component:Jn,readonlyComponent:Qn},Dn=e(88760),wn=e(27484),we=e.n(wn),kn=function(F){var Y=F.schema,Q=F.value,J=F.onChange,ee=F.disabled,ne=F.locale,le=F.validator,ce=(0,I.useMemo)(function(){return H.dr(ne.FormRender.placeholderSelect,{title:Y.title})},[Y.title,ne.FormRender.placeholderSelect]);return(0,m.jsx)(Dn.default,a()(a()({allowClear:!0,placeholder:ce,style:{width:"100%"}},Y.renderOptions),{},{status:le.status,value:Q?we()(Q):null,onChange:function(pe){return J(pe?we()(pe).toISOString():void 0)},disabled:ee}))},qn=function(F){var Y,Q,J=F.schema,ee=F.value;return(0,m.jsx)(Ve,{children:ee?we()(ee).format(((Y=J.renderOptions)===null||Y===void 0?void 0:Y.format)||((Q=J.renderOptions)!==null&&Q!==void 0&&Q.showTime?n:o)):""})},er={component:kn,readonlyComponent:qn};function mn(k){return we()(k).toISOString()}var nr=function(F){var Y=F.schema,Q=F.value,J=F.onChange,ee=F.disabled,ne=F.validator,le=Y.renderOptions||{},ce=le.showTime;return(0,m.jsx)(Dn.default.RangePicker,a()(a()({allowClear:!0,allowEmpty:!0,style:{width:"100%"}},Y.renderOptions),{},{disabled:ee,status:ne.status,value:Q?[we()(Q[0]),we()(Q[1])]:null,onChange:function(pe){if(pe&&pe[0]&&pe[1]){var me=ce?pe[0]:pe[0].startOf("day"),de=ce?pe[1]:pe[1].endOf("day");J([mn(me),mn(de)])}else J(void 0)}}))},rr=function(F){var Y=F.schema,Q=F.value,J=F.locale,ee="";if(A.kJ(Q)&&Q[0]&&Q[1]){var ne,le,ce,ie=(ne=Y.renderOptions)!==null&&ne!==void 0&&ne.showTime?n:o,pe=((le=Y.renderOptions)===null||le===void 0?void 0:le.format)||ie,me=((ce=Y.renderOptions)===null||ce===void 0?void 0:ce.displayTextTemplate)||J.FormRender.displayDateRange;ee=H.dr(me,{start:we()(Q[0]).format(pe),end:we()(Q[1]).format(pe)})}return(0,m.jsx)(Ve,{children:ee})},tr={component:nr,readonlyComponent:rr},ar=function(F){var Y=F.value;return(0,m.jsx)(Ve,{children:Y})},bn={component:ar},sr=function(F){var Y=F.disabled;return(0,m.jsx)(y,{disabled:Y})},or={formItem:sr},lr=e(13457),dr=["validateOnBlur"],cn=function(F){var Y=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,ce=Y.renderOptions||{},ie=ce.validateOnBlur,pe=W()(ce,dr),me=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderInput,{title:Y.title})},[Y.title,le.FormRender.placeholderInput]),de=(0,M.Z)(function(ge){ee(ge!=null?ge:void 0,{triggerValidator:!ie})}),xe=(0,M.Z)(function(){ee(J,{triggerValidator:!0})});return(0,m.jsx)(lr.Z,a()(a()({style:{width:"100%"},placeholder:me},pe),{},{status:ne.status,value:J,onChange:de,onBlur:ie?xe:void 0,disabled:Q}))},ur=function(F){var Y=F.value;return(0,m.jsx)(Ve,{children:Y})},mr={component:cn,readonlyComponent:ur},ln=e(25278),cr=["validateOnBlur"],On=function(F){var Y=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,ce=Y.renderOptions||{},ie=ce.validateOnBlur,pe=W()(ce,cr),me=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderInput,{title:Y.title})},[Y.title,le.FormRender.placeholderInput]),de=(0,M.Z)(function(ge){var fe=ge.target.value;fe!==J&&ee(fe,{triggerValidator:!ie})}),xe=(0,M.Z)(function(){ee(J,{triggerValidator:!0})});return(0,m.jsx)(ln.Z,a()(a()({placeholder:me},pe),{},{status:ne.status,value:J!=null?J:"",onChange:de,onBlur:ie?xe:void 0,disabled:Q}))},ir=function(F){var Y=F.value;return(0,m.jsx)(Ve,{children:Y})},pr={component:On,readonlyComponent:ir},Cn=e(52162),Sn=e(47221),hr=function(F){var Y,Q,J=F.schema,ee=F.path,ne=F.objectStyle,le=(0,I.useState)(!1),ce=b()(le,2),ie=ce[0],pe=ce[1],me=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{children:J.title}),!!J.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:J.titleDescription,children:(0,m.jsx)(N.Z,{style:{marginLeft:4}})})]});return(0,m.jsx)(Sn.Z,a()(a()({},(Y=J.renderOptions)===null||Y===void 0?void 0:Y.headerOptions),{},{activeKey:String(ie),onChange:function(){return pe(!ie)},children:(0,I.createElement)(Sn.Z.Panel,a()(a()({},(Q=J.renderOptions)===null||Q===void 0?void 0:Q.panelOptions),{},{header:me,key:"false"}),(0,m.jsx)("div",{style:ne,children:(0,m.jsx)(Cn.Z,{schema:J,path:ee})}))}))},vr={formItem:hr},_n=function(F){var Y=F.schema,Q=F.path,J=F.objectStyle;return(0,m.jsx)("div",{style:J,children:(0,m.jsx)(Cn.Z,{schema:Y,path:Q})})},Ir={formItem:_n},fr=["validateOnBlur"],yr=function(F){var Y=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,ce=Y.renderOptions||{},ie=ce.validateOnBlur,pe=W()(ce,fr),me=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderInput,{title:Y.title})},[Y.title,le.FormRender.placeholderInput]),de=(0,M.Z)(function(ge){var fe=ge.target.value;fe!==J&&ee(fe,{triggerValidator:!ie})}),xe=(0,M.Z)(function(){ee(J,{triggerValidator:!0})});return(0,m.jsx)(ln.Z.Password,a()(a()({placeholder:me},pe),{},{status:ne.status,value:J!=null?J:"",onChange:de,onBlur:ie?xe:void 0,disabled:Q}))},xr=function(F){var Y=F.value;return(0,m.jsx)(Ve,{children:Y})},gr={component:yr,readonlyComponent:xr},Er=e(55742),Rn=function(F){var Y=F.schema,Q=F.disabled,J=F.value,ee=F.onChange;return(0,m.jsx)(Er.ZP.Group,a()(a()({},Y.renderOptions),{},{value:J,onChange:function(le){return ee(le.target.value)},disabled:Q}))},Pr=function(F){var Y,Q=F.schema,J=F.value,ee=sn((Y=Q.renderOptions)===null||Y===void 0?void 0:Y.options,[J]);return(0,m.jsx)(Ve,{children:ee[0]})},Tr={component:Rn,readonlyComponent:Pr},Dr=e(67002),br=function(F){var Y=F.schema,Q=F.disabled,J=F.readonly,ee=F.value,ne=F.onChange;return(0,m.jsx)(Dr.Z,a()(a()({},Y.renderOptions),{},{value:ee!=null?ee:0,onChange:ne,disabled:Q||J}))},Or={component:br},Mn=e(34041),Cr=function(F){var Y=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.locale,le=F.validator,ce=(0,I.useMemo)(function(){return H.dr(ne.FormRender.placeholderSelect,{title:Y.title})},[Y.title,ne.FormRender.placeholderSelect]);return(0,m.jsx)(Mn.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:ce},Y.renderOptions),{},{status:le.status,mode:void 0,value:J!=null?J:null,onChange:function(pe){return ee(pe)},disabled:Q}))},Sr=function(F){var Y,Q,J=F.schema,ee=F.value,ne=F.locale,le=sn((Y=J.renderOptions)===null||Y===void 0?void 0:Y.options,[ee]);return(0,m.jsx)(Ve,{children:le.join((Q=ne.FormRender)===null||Q===void 0?void 0:Q.comma)})},_r={component:Cr,readonlyComponent:Sr},Rr=function(F){var Y=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,ce=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderSelect,{title:Y.title})},[Y.title,le.FormRender.placeholderSelect]),ie=(0,M.Z)(function(pe,me){ee(pe,{extra:{selectedOptions:me}})});return(0,m.jsx)(Mn.default,a()(a()({allowClear:!0,style:{width:"100%"},placeholder:ce},Y.renderOptions),{},{status:ne.status,mode:"multiple",value:J,onChange:ie,disabled:Q}))},Mr=function(F){var Y,Q,J=F.schema,ee=F.value,ne=F.locale,le=sn((Y=J.renderOptions)===null||Y===void 0?void 0:Y.options,ee);return(0,m.jsx)(Ve,{children:le.join((Q=ne.FormRender)===null||Q===void 0?void 0:Q.comma)})},Ln={component:Rr,readonlyComponent:Mr},Lr=e(41637),Ar=function(F){var Y=F.schema,Q=F.disabled,J=F.readonly,ee=F.value,ne=F.onChange;return(0,m.jsx)(Lr.Z,a()(a()({},Y.renderOptions),{},{checked:ee,onChange:function(ce){return ne(ce)},disabled:Q||J}))},jr={component:Ar},Br=function(F){var Y,Q=F.schema,J=F.disabled,ee=F.readonly,ne=F.value,le=F.onChange;return(0,m.jsx)(on.Z,a()(a()({},Q.renderOptions),{},{checked:ne,onChange:function(ie){return le(ie.target.checked)},disabled:J||ee,children:(Y=Q.renderOptions)===null||Y===void 0?void 0:Y.text}))},$r={component:Br},Kr=["validateOnBlur"],Nr=function(F){var Y=F.schema,Q=F.disabled,J=F.value,ee=F.onChange,ne=F.validator,le=F.locale,ce=Y.renderOptions||{},ie=ce.validateOnBlur,pe=W()(ce,Kr),me=(0,I.useMemo)(function(){return H.dr(le.FormRender.placeholderInput,{title:Y.title})},[Y.title,le.FormRender.placeholderInput]),de=(0,M.Z)(function(ge){var fe=ge.target.value;fe!==J&&ee(fe,{triggerValidator:!ie})}),xe=(0,M.Z)(function(){ee(J,{triggerValidator:!0})});return(0,m.jsx)(ln.Z.TextArea,a()(a()({rows:3,placeholder:me},pe),{},{status:ne.status,value:J!=null?J:"",onChange:de,onBlur:ie?xe:void 0,disabled:Q}))},Wr=function(F){var Y=F.value;return(0,m.jsx)(Ve,{children:Y})},Ur={component:Nr,readonlyComponent:Wr},pn,Fr=(pn={},$()($()($()($()($()($()($()($()($()($()(pn,t,or),"Object",vr),"ObjectNull",Ir),"InputText",pr),"InputNumber",mr),"Password",gr),"TextArea",Ur),"Radio",Tr),"Checkbox",Xn),"Switch",jr),$()($()($()($()($()($()($()(pn,"SwitchBox",$r),"DatePicker",er),"DateRangePicker",tr),"Description",bn),"Rate",Or),"Select",_r),"SelectMultiple",Ln)),re=Fr,q=function(F,Y){var Q=a()(a()({},u),F),J=(0,I.useRef)(null);(0,I.useImperativeHandle)(Y,function(){return J.current});var ee=(0,I.useMemo)(function(){return a()(a()({},re),Q.renderers)},[Q.renderers]),ne=(0,I.useMemo)(function(){return a()(a()({},Gn.Z),Q.locale)},[Q.locale]),le=yn(Q),ce=K({props:Q,coreRef:J}),ie=ce.handleFormSubmit,pe=ce.handleSubmit,me=ce.handleReset,de=ce.actionsLoading,xe=ce.isLoading,ge=Vn(h.ei(Q,"schema","actionsRestSchema","actionsRenderMode")),fe=a()(a()({},h.ei(Q,"labelWidth","labelGap","labelColon","labelRender","layoutColumnGap","layoutRowGap","actions","registerActions","readonlyPlaceholder","submitText","resetText")),{},{locale:ne,actionsLoading:de,handleSubmit:pe,handleReset:me}),Te=Q.disableFormOnActionLoading?Q.disabled||xe:Q.disabled;return(0,m.jsx)(l.Provider,{value:fe,children:(0,m.jsxs)("form",{onSubmit:ie,className:L.Z(Q.rootClassName,Tn),style:Q.rootStyle,children:[(0,m.jsx)(P.default,a()(a()({},Q),{},{ref:J,schema:ge,locale:ne,renderers:ee,itemLayout:le,disabled:Te})),Q.actionsRenderMode===v.normal&&(0,m.jsx)(y,{disabled:Te,className:H.Rk(Q.prefixCls,"form-actions"),style:{marginTop:Q.layoutRowGap,marginLeft:En(Q)}})]})})},se=(0,I.forwardRef)(q),oe=se},35804:function(G,c,e){e.r(c);var S=e(97857),a=e.n(S),h=e(78484);c.default=a()(a()({},h.default),{},{FormRender:{submit:"Submit",reset:"Reset",placeholderInput:"Please enter ${title}",placeholderSelect:"Please select ${title}",comma:",",displayDateRange:"${start} to ${end}"}})},28403:function(G,c,e){var S=e(97857),a=e.n(S),h=e(39214);c.Z=a()(a()({},h.Z),{},{FormRender:{submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",placeholderInput:"\u8BF7\u8F93\u5165${title}",placeholderSelect:"\u8BF7\u9009\u62E9${title}",comma:"\uFF0C",displayDateRange:"${start} \u81F3 ${end}"}})},36116:function(G,c,e){e.r(c),e.d(c,{default:function(){return O}});var S=e(97857),a=e.n(S),h=e(68795),L=e(48689),P=e(74311),H=e(14726),I=e(67294),p={submit:"submit",reset:"reset",collapse:"collapse"},W={prefixCls:"schema-render",layoutColumnGap:10,layoutRowGap:15,actions:[p.reset,p.submit,p.collapse],defaultCollapsed:!0,collapsedRows:2},x=e(5574),$=e.n(x),A=e(80882),B=e(48115),R=e(24317);function T(_,D,b){var M;if(b)return b(_);if(!_)return 5;var E=_.clientWidth,K=((M=_.firstElementChild)===null||M===void 0||(M=M.getBoundingClientRect())===null||M===void 0?void 0:M.width)||320;return Math.floor(E/K)*D-1}var v=e(64599),u=e.n(v);function s(_,D){var b={},M=Object.keys(_.properties).slice(0,D),E=u()(M),K;try{for(E.s();!(K=E.n()).done;){var N=K.value;b[N]=_.properties[N]}}catch(V){E.e(V)}finally{E.f()}return{renderType:"Root",properties:b}}function t(_){var D=_.isCollapsed,b=_.rawSchema,M=_.collapsedNumber;return D?s(b,M):b}var o=e(28e3);function n(_){return o.PO(_)?Object.keys(_).length:o.kJ(_)||o.HD(_)?_.length:0}var r=e(38812);function l(_,D){var b=(0,r.Z)(D),M=(0,I.useRef)(-1);(0,I.useEffect)(function(){var E,K=(E=_.current)===null||E===void 0?void 0:E.getRootElement();if(K){var N=new ResizeObserver(function(V){var U=V[0].contentRect.width;M.current!==U&&(M.current=U,b.current(K))});return N.observe(K),function(){return N.disconnect()}}},[])}var d=e(85893);function m(_,D){var b=_.schema,M=(0,I.useState)(_.defaultCollapsed),E=$()(M,2),K=E[0],N=E[1],V=(0,I.useState)(function(){var ue;return T((ue=D.current)===null||ue===void 0?void 0:ue.getRootElement(),_.collapsedRows,_.calcCollapsedNumber)}),U=$()(V,2),z=U[0],Z=U[1],w=(0,I.useRef)(b);(0,I.useMemo)(function(){w.current=t({isCollapsed:K,collapsedNumber:z,rawSchema:b})},[z,K,b]),l(D,function(ue){Z(T(ue,_.collapsedRows,_.calcCollapsedNumber))});var X=(0,R.Z)(function(ue){var ye;N(ue),(ye=_.onToggleCollapsed)===null||ye===void 0||ye.call(_,ue)}),ae=(0,R.Z)(function(ue){var ye,he=ue.locale;if(n(b.properties)<=z)return null;if(K){var ve;return(0,d.jsxs)(H.ZP,{type:"link",onClick:function(){return X(!1)},style:{padding:0},children:[he==null||(ve=he.Search)===null||ve===void 0?void 0:ve.expand,(0,d.jsx)(A.Z,{})]})}return(0,d.jsxs)(H.ZP,{type:"link",onClick:function(){return X(!0)},style:{padding:0},children:[he==null||(ye=he.Search)===null||ye===void 0?void 0:ye.collapse,(0,d.jsx)(B.Z,{})]})}),te=a()({collapse:ae},_.registerActions);return{schema:w.current,registerActions:te}}var g=e(6386),f=e(52038);function j(_){return{className:f.Rk(_,"form-actions"),style:{gridColumnStart:-2,textAlign:"end"}}}var y={submit:function(D){var b=D.loading,M=D.locale,E=D.submitText,K=D.disabled;return(0,d.jsx)(H.ZP,{type:"primary",htmlType:"submit",icon:(0,d.jsx)(h.Z,{}),loading:b.submit,disabled:b.submit?!1:K||b.reset,children:E||M.FormRender.submit})},reset:function(D){var b=D.loading,M=D.locale,E=D.handleReset,K=D.resetText,N=D.disabled;return(0,d.jsx)(H.ZP,{htmlType:"button",icon:(0,d.jsx)(L.Z,{}),loading:b.reset,disabled:b.reset?!1:N||b.submit,onClick:E,children:K||M.FormRender.reset})}},i=function(D,b){var M=a()(a()({},W),D),E=(0,I.useRef)(null),K=(0,I.useMemo)(function(){return a()(a()({},g.Z),M.locale)},[M.locale]),N=m(M,E),V=N.schema,U=N.registerActions,z=(0,I.useMemo)(function(){return j(M.prefixCls)},[M.prefixCls]);return(0,I.useImperativeHandle)(b,function(){return E.current}),(0,d.jsx)(P.default,a()(a()({layout:"autoFill"},M),{},{ref:E,locale:K,schema:V,registerActions:a()(a()({},y),U),actionsRestSchema:z,actionsRenderMode:"formItem"}))},C=(0,I.forwardRef)(i),O=C},9686:function(G,c,e){e.r(c);var S=e(97857),a=e.n(S),h=e(35804);c.default=a()(a()({},h.default),{},{FormRender:a()(a()({},h.default.FormRender),{},{submit:"Search"}),Search:{collapse:"Collapse",expand:"Expand"}})},6386:function(G,c,e){var S=e(97857),a=e.n(S),h=e(28403);c.Z=a()(a()({},h.Z),{},{FormRender:a()(a()({},h.Z.FormRender),{},{submit:"\u67E5\u8BE2"}),Search:{collapse:"\u6536\u8D77",expand:"\u5C55\u5F00"}})},71856:function(G,c,e){e.r(c),e.d(c,{default:function(){return Fr}});var S=e(97857),a=e.n(S),h=e(18474),L=e(28e3),P=e(24317),H=e(85908),I=e(95511),p=e(67294),W=L.kJ,x=L.PO,$=L.HD,A=L.kK,B=function(q){return W(q)?!q.length:x(q)?!Object.keys(q).length:$(q)?q.trim()==="":A(q)};function R(re,q){return W(re)?re.map(q):[]}function T(re,q){if(re)for(var se=re.length,oe=0;oe<se;oe++){var k=q==null?void 0:q(re[oe],oe,re);if(k)return}}function v(){return Math.random().toString(36).substring(7).replace(/\d/g,"x")}var u=v(),s=function(re){return re.actions="__actions__",re.rowNumber="__row-number__",re}({}),t={table:"st-table-".concat(u),pagination:"st-pagination-".concat(u)},o=e(23060),n=e(13769),r=e.n(n),l=e(41637),d=e(66309),m=e(67002),g=e(5574),f=e.n(g),j=e(57020),y=e(42075),i=e(85893),C=function(q){var se=q.imgList,oe=q.imgProps,k=q.groupProps,F=(0,p.useState)(!1),Y=f()(F,2),Q=Y[0],J=Y[1],ee=(0,p.useState)(0),ne=f()(ee,2),le=ne[0],ce=ne[1],ie=function(me){ce(me),J(!0)};return(0,i.jsx)(j.Z.PreviewGroup,a()(a()({},k),{},{items:se,preview:{visible:Q,current:le,onChange:function(me){return ce(me)},onVisibleChange:function(me){return J(me)}},children:(0,i.jsx)(y.Z,{children:se.map(function(pe,me){return(0,p.createElement)(j.Z,a()(a()({width:60},oe),{},{src:pe,key:me,onClick:function(){return ie(me)}}))})})}))},O=C,_={backgroundColor:"#ececec",padding:16,borderRadius:6,textAlign:"left"},D=new RegExp("(?<!\\d*\\.\\d*)(?=(\\B\\d{3})+(\\.\\d+)?$)","g"),b=function(q){var se=q.value;return B(se)?"-":isNaN(Number(se))?se:String(se).replace(D,",")},M=b,E=e(83062),K=["maxLength"],N=function(q){var se=q.value,oe=q.options,k=oe===void 0?{}:oe,F=B(se)?"-":String(se),Y=k.maxLength,Q=Y===void 0?10:Y,J=r()(k,K);return F.length>Q?(0,i.jsxs)(E.Z,a()(a()({title:F},J),{},{children:[F.slice(0,Q-1),"..."]})):(0,i.jsx)(i.Fragment,{children:F})},V=N,U=e(14726),z=e(85576),Z=(0,p.createContext)({}),w=Z;function X(){var re=(0,p.useContext)(w);return re}var ae=["maxLength"],te=function(q){var se=q.value,oe=q.options,k=oe===void 0?{}:oe,F=B(se)?"-":String(se),Y=k.maxLength,Q=Y===void 0?10:Y,J=r()(k,ae),ee=(0,p.useState)(!1),ne=f()(ee,2),le=ne[0],ce=ne[1],ie=X();return F.length>Q?(0,i.jsxs)(i.Fragment,{children:[F.slice(0,Q-3),"...",(0,i.jsx)(U.ZP,{type:"link",style:{padding:0},onClick:function(){return ce(!0)},children:ie.locale.SearchTable.longTextModalLabel}),(0,i.jsx)(z.Z,a()(a()({width:600,title:ie.locale.SearchTable.longTextModalTitle,footer:null},J),{},{open:le,onCancel:function(){return ce(!1)},children:F}))]}):(0,i.jsx)(i.Fragment,{children:F})},ue=te,ye=["groupProps"],he=L.kJ,ve={code:function(q){var se=q.value,oe=q.options;return(0,i.jsx)("pre",{style:a()(a()({},_),oe.style),children:(0,i.jsx)("code",{children:se})})},percent:function(q){var se=q.value;return B(se)?"-":"".concat(se,"%")},switch:function(q){var se=q.value,oe=q.options;return(0,i.jsx)(l.Z,a()(a()({},oe),{},{checked:!!se}))},tags:function(q){var se=q.value,oe=q.options,k=he(se)?se:[se];return k.map(function(F,Y){return(0,p.createElement)(d.Z,a()(a()({},oe),{},{key:Y}),F)})},rate:function(q){var se=q.value,oe=q.options;return(0,i.jsx)(m.Z,a()(a()({style:{width:134}},oe),{},{disabled:!0,value:se}))},"comma-number":function(q){return(0,i.jsx)(M,a()({},q))},images:function(q){var se=q.value,oe=q.options;if(B(se))return"-";var k=he(se)?se:[se],F=oe.groupProps,Y=r()(oe,ye);return(0,i.jsx)(O,{imgList:k,imgProps:Y,groupProps:F})},"long-text":function(q){return(0,i.jsx)(V,a()({},q))},"long-text-modal":function(q){return(0,i.jsx)(ue,a()({},q))}},Pe=e(27484),Ie=e.n(Pe),Ee=o.U2,be=L.kJ,Oe=L.PO;function Ce(re,q){return re===q?0:re>q?1:-1}var Ae=function(q,se,oe){var k=oe.sortType,F=oe.sortOrder,Y=oe.arrDataIndex,Q=oe.sortDataExtractor,J=oe.sortStringValueTransform,ee=Q?Q(q):Ee(q,Y),ne=Q?Q(se):Ee(se,Y);return Oe(ee)||Oe(ne)?0:(be(ee)&&(ee=ee.join("")),be(ne)&&(ne=ne.join("")),ee=String(ee).trim(),ne=String(ne).trim(),B(ee)?F==="ascend"?1:-1:B(ne)?F==="ascend"?-1:1:k==="string"?(J&&(ee=J(ee),ne=J(ne)),Ce("@".concat(ee).toLowerCase(),"@".concat(ne).toLowerCase())):k==="date"?Ce(new Date(ee),new Date(ne)):!isNaN(Number(ee))&&!isNaN(Number(ne))?Ce(Number(ee),Number(ne)):Ie()(ee).isValid()&&Ie()(ne).isValid()?Ce(new Date(ee),new Date(ne)):(J&&(ee=J(ee),ne=J(ne)),Ce(ee,ne)))},Se=["title","dataIndex","children","valueType"],Me=["type"],je=o.U2,Le=L.kJ,ze=L.HD,Be=L.mf;function Ge(re,q,se){return re.map(function(oe){var k=oe.title,F=oe.dataIndex,Y=oe.children,Q=oe.valueType,J=r()(oe,Se);Le(Y)&&(Y=Ge(Y,q,se));var ee=Le(F)?F.join("."):F,ne=Le(F)?F:[F],le=q.sortMode==="local-all"||q.sortMode==="service-all",ce=!!J.sorter||!!J.sortType||le,ie=!1;Y||(J.sorter?ie=J.sorter:(le||J.sortType)&&(ie=q.sortMode==="service-all"?!0:function(me,de,xe){return Ae(me,de,{arrDataIndex:ne,sortOrder:xe,sortType:J.sortType,sortDataExtractor:J.sortDataExtractor,sortStringValueTransform:q.sortStringValueTransform})}));var pe=function(de,xe,ge){var fe=je(xe,ne),Te="",De=void 0;if(Q)if(Be(Q)){var Re=Q(xe,ge),_e=Re.type,Ke=r()(Re,Me);Te=_e,De=Ke}else Te=Q;var Ne=se[Te];return Ne?Ne({value:fe,record:xe,options:De||{},index:ge}):B(fe)?"-":fe};return a()(a()({align:"center",key:ee,width:ze(k)?k.length*16+(ce?50:30):void 0,render:pe},J),{},{title:k,dataIndex:F,children:Y,sorter:ie})})}var He=o.Cw;function Ye(re){var q=re.table,se=re.globalStateRef,oe=(0,p.useRef)([]),k=se.current.isTabChanging;(0,p.useMemo)(function(){k||(oe.current=q.columns||[])},[q.columns,k]);var F=(0,p.useMemo)(function(){var Q=a()(a()({},ve),q.registerValueType);return He(Q,function(J,ee){return ee.toLowerCase()})},[q.registerValueType]),Y=(0,p.useMemo)(function(){return Ge(oe.current,q,F)},[oe.current]);return{rawColumns:oe.current,baseColumns:Y}}var $e=e(15009),Ze=e.n($e),vn=e(99289),nn=e.n(vn),In=e(19632),tn=e.n(In),fn=e(16223),qe=e(60887),Bn=e(32339),an=e(45587),$n=e(24285),Kn=function(q){var se=q.items,oe=se===void 0?[]:se,k=q.onChange,F=q.itemClassName,Y=q.overlayClassName,Q=q.renderItem,J=(0,qe.Dy)((0,qe.VT)(qe.MA)),ee=(0,p.useState)(null),ne=f()(ee,2),le=ne[0],ce=ne[1],ie=(0,P.Z)(function(pe){var me=pe.active,de=pe.over;if(me.id!==de.id){var xe=oe.findIndex(function(fe){return fe.id===me.id}),ge=oe.findIndex(function(fe){return fe.id===de.id});k==null||k((0,an.Rp)(oe,xe,ge))}ce(null)});return(0,i.jsxs)(qe.LB,{sensors:J,collisionDetection:qe.pE,onDragStart:function(me){var de=me.active;return ce(de.id)},onDragEnd:ie,modifiers:[Bn.DL],children:[(0,i.jsx)(an.Fo,{items:oe,strategy:an.qw,children:oe.map(function(pe,me){return(0,i.jsx)(Nn,{className:F,id:pe.id,itemData:pe,itemIndex:me,renderItem:Q},pe.id)})}),(0,i.jsx)(qe.y9,{zIndex:9999,children:le?(0,i.jsx)("div",{className:Y,children:Q==null?void 0:Q(oe.find(function(pe){return pe.id===le}),oe.findIndex(function(pe){return pe.id===le}))}):null})]})};function Nn(re){var q=re.className,se=re.id,oe=re.itemData,k=re.itemIndex,F=re.renderItem,Y=(0,an.nB)({id:se}),Q={transform:$n.ux.Transform.toString(Y.transform),transition:Y.transition,opacity:Y.isDragging?0:void 0};return(0,i.jsx)("div",{className:q,ref:Y.setNodeRef,style:Q,children:F==null?void 0:F(oe,k,Y)})}var Wn=Kn,Un=e(29751),Fn=e(13457);function Je(re){var q=re.locale,se=q.SearchTable.settingModalColumnEnum,oe=q.SearchTable.settingModalColumnSortEnum,k=[{title:se[0],dataIndex:"name",width:200},{title:se[1],dataIndex:"hidden",width:90,render:function(Y,Q){return(0,i.jsx)(l.Z,{checked:!Y,onChange:function(J){function ee(ne){return J.apply(this,arguments)}return ee.toString=function(){return J.toString()},ee}(function(J){return Q(!J)})})}},{title:se[2],dataIndex:"width",width:100,render:function(Y,Q){return(0,i.jsx)(Fn.Z,{min:1,value:Y,onChange:function(J){function ee(ne){return J.apply(this,arguments)}return ee.toString=function(){return J.toString()},ee}(function(J){J&&Q(J)})})}},{title:se[3],dataIndex:"fixed",width:60,algin:"center",render:function(Y){var Q=Y?Y==="left"?oe[0]:oe[1]:oe[2],J=Y?Y==="left"?"orange":"blue":void 0;return(0,i.jsx)(d.Z,{color:J,style:{margin:0},children:Q})}},{title:se[4],dataIndex:"sort",width:50,algin:"center",render:function(){return(0,i.jsx)(U.ZP,{type:"text",size:"small",icon:(0,i.jsx)(Un.Z,{}),style:{cursor:"move"}})}}];return k}var zn=e(68400),Qe=e.n(zn),Xe=e(21222),yn,rn,dn,xn,gn,En,un,sn=(0,Xe.H)(yn||(yn=Qe()([`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
`]))),Hn=(0,Xe.H)(rn||(rn=Qe()([`
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
`]))),Zn=(0,Xe.H)(dn||(dn=Qe()([`
  border-top: 1px solid #f0f0f0;

  &:first-of-type {
    border-top: none;
  }
`]))),Vn=(0,Xe.H)(xn||(xn=Qe()([`
  background-color: #fff;
  transform: scale(1.05);
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: 200ms ease-out;
`]))),Pn=(0,Xe.H)(gn||(gn=Qe()([`
  display: flex;
  padding: 8px 0;
  background-color: #fff;

  &:hover {
    background-color: #fafafa;
  }
`]))),Tn=(0,Xe.H)(En||(En=Qe()([`
  display: flex;
  align-items: center;
  padding: 0 12px;
  word-break: break-all;
  flex-shrink: 0;
`]))),Gn=(0,Xe.H)(un||(un=Qe()([`
  text-align: right;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`])));function on(re){return re.map(function(q){return{id:String(q.dataIndex),name:q.title,hidden:q.hidden,width:q.width,fixed:q.fixed}})}var Yn=function(q){var se=q.defaultColumns,oe=q.sortColumns,k=q.onOk,F=X(),Y=(0,p.useState)(function(){return on(oe)}),Q=f()(Y,2),J=Q[0],ee=Q[1],ne=(0,p.useMemo)(function(){return Je({locale:F.locale})},[F.locale]),le=(0,P.Z)(function(de,xe,ge){var fe=tn()(J);fe[de][xe]=ge,ee(fe)}),ce=(0,P.Z)(function(de){ee(de)}),ie=(0,P.Z)(function(){ee(on(oe))}),pe=(0,P.Z)(function(){ee(on(se))}),me=(0,P.Z)(function(){var de=[];J.forEach(function(xe){var ge=xe.id,fe=xe.width,Te=xe.hidden,De=se.find(function(Re){return String(Re.dataIndex)===ge});De&&de.push(a()(a()({},De),{},{width:fe,hidden:Te}))}),k==null||k(de)});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:sn,children:ne.map(function(de,xe){return(0,i.jsx)("div",{className:Tn,style:{width:de.width,justifyContent:de.algin},children:de.title},xe)})}),(0,i.jsx)("div",{className:Hn,children:(0,i.jsx)(Wn,{items:J,onChange:ce,itemClassName:Zn,overlayClassName:Vn,renderItem:function(xe,ge,fe){return(0,i.jsx)("div",{className:Pn,children:ne.map(function(Te,De){var Re=xe[Te.dataIndex],_e=Te.dataIndex==="sort"?fe==null?void 0:fe.listeners:{};return(0,i.jsx)("div",a()(a()({className:Tn,style:{width:Te.width,justifyContent:Te.algin}},_e),{},{children:Te.render?Te.render(Re,function(Ke){return le(ge,Te.dataIndex,Ke)}):Re}),"".concat(ge).concat(De))})},ge)}})}),(0,i.jsx)("div",{className:Gn,children:(0,i.jsxs)(y.Z,{children:[(0,i.jsx)(U.ZP,{onClick:pe,children:F.locale.SearchTable.settingModalResetDefault}),(0,i.jsx)(U.ZP,{onClick:ie,children:F.locale.SearchTable.settingModalReset}),(0,i.jsx)(U.ZP,{type:"primary",onClick:me,children:F.locale.SearchTable.settingModalOk})]})})]})},Ve=Yn,Jn=["sortColumns","defaultColumns","onOk"],Qn=function(q){var se=q.sortColumns,oe=q.defaultColumns,k=q.onOk,F=r()(q,Jn),Y=X();return(0,i.jsx)(z.Z,a()(a()({title:Y.locale.SearchTable.settingModalTitle,width:"auto",centered:!0,destroyOnClose:!0,footer:null},F),{},{children:(0,i.jsx)(Ve,{sortColumns:se,defaultColumns:oe,onOk:k})}))},Xn=Qn,Dn=function(q,se){var oe=[],k={};q.forEach(function(J){k[String(J.dataIndex)]=J}),se.forEach(function(J){var ee=String(J.dataIndex),ne=k[ee];if(ne){var le,ce,ie;oe.push(a()(a()({},ne),{},{width:(le=J.width)!==null&&le!==void 0?le:ne.width,hidden:(ce=J.hidden)!==null&&ce!==void 0?ce:ne.hidden,fixed:(ie=J.fixed)!==null&&ie!==void 0?ie:ne.fixed})),delete k[ee]}});for(var F=0,Y=Object.values(k);F<Y.length;F++){var Q=Y[F];oe.push(Q)}return oe},wn=o.ei;function we(re){var q=re.baseColumns,se=re.table,oe=re.globalStateRef,k=(0,p.useRef)([]),F=(0,p.useState)(!1),Y=f()(F,2),Q=Y[0],J=Y[1],ee=(0,p.useState)([]),ne=f()(ee,2),le=ne[0],ce=ne[1],ie=oe.current.isTabChanging;(0,p.useMemo)(function(){if(!ie)if(le.length){var ge=se.settingColumnsMergeAlgo||Dn;k.current=ge(q,le)}else k.current=tn()(q)},[q,le]);var pe=(0,P.Z)(function(){J(!0)}),me=(0,P.Z)(function(){J(!1)}),de=(0,P.Z)(function(ge){var fe;k.current=ge,me();var Te=ge.map(function(De){return wn(De,"title","dataIndex","width","hidden","fixed")});(fe=se.onSettingChanged)===null||fe===void 0||fe.call(se,{columns:Te},se.settingId)}),xe=(0,i.jsx)(Xn,{open:Q,sortColumns:k.current,defaultColumns:q,onCancel:me,onOk:de});return(0,fn.Z)(nn()(Ze()().mark(function ge(){var fe,Te,De;return Ze()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,(fe=se.getSetting)===null||fe===void 0?void 0:fe.call(se,se.settingId);case 2:De=_e.sent,De!=null&&(Te=De.columns)!==null&&Te!==void 0&&Te.length&&ce(De.columns);case 4:case"end":return _e.stop()}},ge)})),[se.settingId]),{sortColumns:k.current,sortModalHolder:xe,openSettingModal:pe,closeSettingModal:me}}var kn=e(80882),qn=e(86738),er=e(85418),mn=e(93047),nr=["children","onClick","noLoading"],rr=mn.Z;function tr(re){var q=re.children,se=re.onClick,oe=re.noLoading,k=oe===void 0?!1:oe,F=r()(re,nr),Y=(0,p.useState)(!1),Q=f()(Y,2),J=Q[0],ee=Q[1],ne=(0,P.Z)(function(){var le=nn()(Ze()().mark(function ce(ie){return Ze()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:if(!k){me.next=3;break}return se==null||se(ie),me.abrupt("return");case 3:return ee(!0),me.prev=4,me.next=7,se==null?void 0:se(ie);case 7:me.next=12;break;case 9:me.prev=9,me.t0=me.catch(4),rr.warn(me.t0);case 12:ee(!1);case 13:case"end":return me.stop()}},ce,null,[[4,9]])}));return function(ce){return le.apply(this,arguments)}}());return(0,i.jsx)(U.ZP,a()(a()({loading:J},F),{},{onClick:ne,children:q}))}var ar=["text","confirmAgain","confirmProps","onClick"],bn,sr=L.kJ,or=L.HD,lr=o.CE,dr=(0,Xe.H)(bn||(bn=Qe()([`
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
`])));function cn(re,q){var se=re.text,oe=re.confirmAgain,k=re.confirmProps,F=re.onClick,Y=r()(re,ar),Q=or(se)?(0,i.jsx)(tr,a()(a()({type:"link",size:"small"},lr(Y,"isShow")),{},{onClick:function(ee){return!oe&&(F==null?void 0:F(ee))},children:se}),q):se;return oe?(0,i.jsx)(qn.Z,a()(a()({title:"\u6E29\u99A8\u63D0\u793A",description:"\u8BF7\u4E8C\u6B21\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\uFF01"},k),{},{onConfirm:F,children:Q}),q):Q}function ur(re){var q=re.record,se=re.index,oe=re.actionItems,k=re.actionItemsCount,F=re.actionItemsDropdownProps,Y=re.locale,Q=oe==null?void 0:oe(q,se);if(!sr(Q))return null;var J=Q.filter(function(ce){return ce.isShow!==!1}),ee;if(J.length>k){var ne=[],le=[];return J.forEach(function(ce,ie){ie<k-1?ne.push(ce):le.push(cn(ce,ie))}),(0,i.jsxs)(i.Fragment,{children:[ne.map(function(ce,ie){return cn(ce,ie)}),(0,i.jsx)(er.Z,a()(a()({placement:"bottomRight"},F),{},{dropdownRender:function(){return(0,i.jsx)("div",{className:dr,children:le.map(function(ie,pe){return(0,i.jsx)(p.Fragment,{children:ie},pe)})})},children:(0,i.jsxs)(U.ZP,{type:"link",size:"small",style:{gap:2,display:"inline-flex",alignItems:"center"},children:[Y.SearchTable.more," ",(0,i.jsx)(kn.Z,{style:{margin:0}})]})}))]})}else ee=J.map(function(ce,ie){return cn(ce,ie)});return ee}function mr(re){var q=re.table,se=re.sortColumns,oe=re.locale,k=q.showRowNumber,F=k===void 0?!1:k,Y=q.rowNumberColumnData,Q=Y===void 0?{}:Y,J=q.actionItems,ee=q.actionItemsCount,ne=ee===void 0?2:ee,le=q.actionItemsColumnData,ce=le===void 0?{}:le,ie=q.actionItemsDropdownProps,pe=(0,P.Z)(function(xe,ge,fe){return ur({record:ge,index:fe,actionItems:J,actionItemsCount:ne,actionItemsDropdownProps:ie,locale:oe})}),me=(0,p.useMemo)(function(){return se.filter(function(xe){return!xe.hidden})},[se]),de=(0,p.useMemo)(function(){var xe=tn()(me);return F&&xe.unshift(a()({title:oe.SearchTable.serialColumnName,align:"center",width:70,fixed:"left",render:function(fe,Te,De){return De+1},key:s.rowNumber},Q)),J&&xe.push(a()({title:oe.SearchTable.actionColumnName,align:"center",fixed:"right",width:134,render:pe,key:s.actions},ce)),xe},[me]);return{finalColumns:de}}var ln=e(4559);function cr(re){var q=re.ref,se=re.rootElemRef,oe=re.searchRef,k=re.requestParamsRef,F=re.requestExtraParamsRef,Y=re.searchValueRef,Q=re.dataSource,J=re.updateDataSource,ee=re.updateSummaryData,ne=re.updateScrollY,le=re.openSettingModal,ce=re.runRequest,ie=(0,ln.Z)(),pe=ie.forceUpdate;(0,p.useImperativeHandle)(q,function(){return{refresh:ce,getRootElement:function(){return se.current},getSearchRef:function(){return oe.current},getRequestParams:function(){return k.current},getRequestExtraParams:function(){return F.current},getSearchValue:function(){return Y.current},setSearchValue:function(de,xe){var ge,fe=xe!=null&&xe.overwrite?de:a()(a()({},Y.current),de);(ge=oe.current)===null||ge===void 0||ge.setValue(fe)},clearSearchValue:function(){var de;return(de=oe.current)===null||de===void 0?void 0:de.resetValue()},getDataSource:function(){return Q},setDataSource:function(de){J(de),pe()},setSummaryData:function(de){ee(de),pe()},updateScrollY:ne,openSettingModal:le,rerender:pe}})}var On=e(52038),ir=mn.Z,pr=o.ei,Cn=h.Z,Sn=On.dr;function hr(re){var q,se=re.request,oe=re.updateScrollY,k=re.table,F=re.searchValueRef,Y=re.locale,Q=(0,p.useRef)({current:1,pageSize:(k.pagination!==!1?(q=k.pagination)===null||q===void 0?void 0:q.defaultPageSize:10)||10,total:0}),J=(0,p.useRef)({}),ee=(0,p.useRef)({}),ne=(0,p.useRef)([]),le=(0,p.useRef)({}),ce=(0,p.useState)(!1),ie=f()(ce,2),pe=ie[0],me=ie[1];k.pagination===!1&&(Q.current={});var de=(0,P.Z)(function(){var Re=nn()(Ze()().mark(function _e(Ke,Ne){var Ue,Fe,en;return Ze()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:if(Ue={data:[],total:0},!pe){We.next=3;break}return We.abrupt("return",Ue);case 3:if(me(!0),We.prev=4,!se){We.next=18;break}return Fe={},Ne!=null&&Ne.overwrite?Fe=Ke||{}:Fe=a()(a()(a()({},F.current),pr(Q.current,"current","pageSize")),Ke),We.next=10,se(Fe,ee.current);case 10:en=We.sent,J.current=Fe,Fe.current&&(Q.current.current=Fe.current),Fe.pageSize&&(Q.current.pageSize=Fe.pageSize),Q.current.total=en.total||0,ne.current=en.data||[],le.current=en.summaryData||{},Ue=a()(a()({},en),{},{data:ne.current,total:Q.current.total});case 18:We.next=23;break;case 20:We.prev=20,We.t0=We.catch(4),ir.warn(We.t0);case 23:return me(!1),k.autoScrollY&&oe(),We.abrupt("return",Ue);case 26:case"end":return We.stop()}},_e,null,[[4,20]])}));return function(_e,Ke){return Re.apply(this,arguments)}}()),xe=!1;if(k.pagination!==!1){var ge;xe=a()(a()(a()({style:{marginBottom:0},showQuickJumper:!0,showSizeChanger:!0,showTotal:function(_e){var Ke=Q.current,Ne=Ke.current,Ue=Ke.pageSize,Fe=(Ne-1)*Ue,en=Fe+ne.current.length;return Sn(Y.SearchTable.paginationTotal,{start:Fe||1,end:en,total:_e})}},k.pagination),Q.current),{},{onChange:function(_e,Ke){var Ne,Ue;(Ne=k.pagination)===null||Ne===void 0||(Ue=Ne.onChange)===null||Ue===void 0||Ue.call(Ne,_e,Ke),Object.assign(Q.current,{current:_e,pageSize:Ke}),de()},className:Cn((ge=k.pagination)===null||ge===void 0?void 0:ge.className,t.pagination)})}var fe=(0,P.Z)(function(Re){ne.current=Re}),Te=(0,P.Z)(function(Re){le.current=Re}),De=(0,P.Z)(function(Re){ee.current=Re});return{loading:pe,dataSource:ne.current,updateDataSource:fe,summaryData:le.current,updateSummaryData:Te,requestParamsRef:J,requestExtraParamsRef:ee,updateRequestExtraParams:De,finalPagination:xe,runRequest:de}}var vr=L.HD;function _n(re){if(!re)return 0;var q=window.getComputedStyle(re,null),se=parseFloat(q.marginTop)+parseFloat(q.marginBottom);return re.offsetHeight+se}function Ir(re,q){if(!re||!q)return 0;var se=window.getComputedStyle(re,null),oe=se[q];return vr(oe)&&oe.match(/^\d+/)?parseFloat(oe):0}var fr=L.o8;function yr(re){var q=re.table,se=re.rootElemRef,oe=(0,p.useState)(q.virtual?0:void 0),k=f()(oe,2),F=k[0],Y=k[1],Q=(0,p.useRef)(),J=(0,P.Z)(function(){var ne;if(!(!se.current||!fr((ne=q.scroll)===null||ne===void 0?void 0:ne.y))){var le=se.current.querySelector(".".concat(t.table)),ce=le==null?void 0:le.querySelector("thead"),ie=le==null?void 0:le.querySelector("tfoot"),pe=le==null?void 0:le.querySelector(".".concat(t.pagination)),me=[ce,ie,pe],de=0;T(se.current.children,function(xe){xe!==le&&(de+=_n(xe))}),de+=Ir(le,"marginTop"),T(me,function(xe){de+=_n(xe)}),Y(se.current.clientHeight-de)}}),ee=(0,P.Z)(function(){var ne=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;le&&!q.autoScrollY||(clearTimeout(Q.current),Q.current=setTimeout(J,ne))});return(0,H.Z)(function(){var ne=function(){return ee(0,!0)};return window.addEventListener("resize",ne),function(){return window.removeEventListener("resize",ne)}}),{scrollY:F,updateScrollY:ee}}var xr=e(36116),gr=On.nr;function Er(re){var q=re.locale,se=re.loading,oe=re.search,k=re.searchValueRef,F=re.runRequest,Y=re.updateScrollY,Q=oe===!1?{}:oe,J=(0,p.useRef)(null),ee=(0,ln.Z)(),ne=ee.forceUpdate,le=gr(Q,"value");if(le){var ce;k.current=(ce=Q.value)!==null&&ce!==void 0?ce:{}}var ie=(0,P.Z)(function(ge,fe){var Te;k.current=a()({},ge),le||ne(),(Te=Q.onChange)===null||Te===void 0||Te.call(Q,ge,fe)}),pe=(0,P.Z)(function(){var ge=nn()(Ze()().mark(function fe(Te){var De;return Ze()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return k.current=a()({},Te),_e.next=3,(De=Q.onReset)===null||De===void 0?void 0:De.call(Q,Te);case 3:return _e.next=5,F({current:1});case 5:case"end":return _e.stop()}},fe)}));return function(fe){return ge.apply(this,arguments)}}()),me=(0,P.Z)(function(){var ge=nn()(Ze()().mark(function fe(Te){var De;return Ze()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,(De=Q.onSubmit)===null||De===void 0?void 0:De.call(Q,Te);case 2:return _e.next=4,F();case 4:case"end":return _e.stop()}},fe)}));return function(fe){return ge.apply(this,arguments)}}()),de=(0,P.Z)(function(ge){var fe;(fe=Q.onToggleCollapsed)===null||fe===void 0||fe.call(Q,ge),Y(0,!0)}),xe=oe?(0,i.jsx)(xr.default,a()(a()({},oe),{},{locale:oe.locale||q,rootStyle:a()({marginBottom:16},oe.rootStyle),ref:J,disabled:oe.disabled||se,value:k.current,onChange:ie,onReset:pe,onSubmit:me,onToggleCollapsed:de})):null;return{searchNodeHolder:xe,searchRef:J}}var Rn=L.kJ,Pr=L.kK;function Tr(re,q){return re===s.rowNumber?q:re===s.actions?"":"-"}function Dr(re){var q=[];function se(oe){T(oe,function(k){Rn(k.children)?se(k.children):q.push(k)})}return se(re),q}function br(re){var q=re.flattenedColumns,se=re.summaryData,oe=re.summaryText,k=oe===void 0?"\u5408\u8BA1":oe,F=re.hasRowNumber,Y=F===void 0?!1:F,Q=re.hasRowSelection,J=Q===void 0?!1:Q,ee=[],ne=-1;return J&&(ne++,ee.push({index:ne,text:Y?"":k})),T(q,function(le){var ce=le.key,ie=le.dataIndex,pe=Rn(ie)?ie.join("."):ie,me=String(ce||pe),de=se[me];ne++,ee.push({index:ne,text:Pr(de)?Tr(me,k):de})}),ee}function Or(re){var q=br(re);return(0,i.jsx)(I.Z.Summary,{fixed:"bottom",children:(0,i.jsx)(I.Z.Summary.Row,{children:q.map(function(se){return(0,i.jsx)(I.Z.Summary.Cell,{align:"center",index:se.index,colSpan:se.colSpan,children:se.text},se.index)})})})}function Mn(re){var q=re.table,se=re.finalColumns,oe=re.summaryData,k=(0,p.useMemo)(function(){return Dr(se)},[se]),F=(0,P.Z)(function(){return Or({flattenedColumns:k,summaryData:oe,summaryText:q.summaryText,hasRowSelection:!!q.rowSelection,hasRowNumber:q.showRowNumber})}),Y=q.summary?q.summary:B(oe)?void 0:function(){return F()};return{finalSummary:Y}}var Cr=e(9783),Sr=e.n(Cr),_r=e(42952),Rr=e(98165),Mr=e(56140),Ln,Lr=h.Z,Ar=(0,Xe.H)(Ln||(Ln=Qe()([`
  > div::before {
    content: none !important;
  }
`])));function jr(re){var q,se,oe,k,F,Y=re.locale,Q=re.title,J=Q===void 0?{}:Q,ee=re.loading,ne=re.globalStateRef,le=re.runRequest,ce=re.openSettingModal,ie=(0,P.Z)(function(Ke){var Ne,Ue;ee||(ne.current.isTabChanging=!0,(Ne=J.tabs)===null||Ne===void 0||(Ue=Ne.onChange)===null||Ue===void 0||Ue.call(Ne,Ke),setTimeout(function(){return le({current:1}).finally(function(){return ne.current.isTabChanging=!1})},0))}),pe={loading:ee},me=(q=J.leftExtraContent)===null||q===void 0?void 0:q.call(J,pe),de=(se=J.rightExtraContent)===null||se===void 0?void 0:se.call(J,pe),xe=null,ge=null,fe=J.showSetting?(0,i.jsx)(E.Z,{title:Y.SearchTable.settingTips,children:(0,i.jsx)(U.ZP,{icon:(0,i.jsx)(_r.Z,{}),disabled:ee,onClick:ce})}):null,Te=J.showRefresh?(0,i.jsx)(E.Z,{title:Y.SearchTable.refreshTips,children:(0,i.jsx)(U.ZP,{icon:(0,i.jsx)(Rr.Z,{}),disabled:ee,onClick:function(){return le()}})}):null;if((oe=J.tabs)!==null&&oe!==void 0&&oe.tabBarExtraContent)if((0,p.isValidElement)(J.tabs.tabBarExtraContent))ge=J.tabs.tabBarExtraContent;else{var De=J.tabs.tabBarExtraContent;xe=De.left,ge=De.right}var Re={left:xe||me?(0,i.jsxs)(y.Z,{size:10,style:{marginRight:16},children:[xe,me]}):null,right:ge||de||Te||fe?(0,i.jsxs)(y.Z,{size:10,children:[ge,de,Te,fe]}):null},_e=Re.left||Re.right||J.tabs?(0,i.jsx)(Mr.Z,a()(a()({},J.tabs),{},{className:Lr(J.className,(k=J.tabs)===null||k===void 0?void 0:k.className,Sr()({},Ar,!J.tabs)),style:J.style||((F=J.tabs)===null||F===void 0?void 0:F.style),tabBarExtraContent:Re,onChange:ie})):null;return{titleNodeHolder:_e}}var Br=e(6386),$r=a()(a()({},Br.Z),{},{SearchTable:{serialColumnName:"\u5E8F\u53F7",actionColumnName:"\u64CD\u4F5C",more:"\u66F4\u591A",paginationTotal:"\u5171 ${total} \u6761\u6570\u636E",refreshTips:"\u5237\u65B0",settingTips:"\u5217\u8BBE\u7F6E",settingModalTitle:"\u5217\u8BBE\u7F6E",settingModalOk:"\u786E\u5B9A",settingModalReset:"\u91CD\u7F6E\u672C\u6B21\u8BBE\u7F6E",settingModalResetDefault:"\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E",settingModalColumnEnum:["\u5217\u540D\u79F0","\u663E\u793A\u5217","\u5BBD\u5EA6","\u56FA\u5B9A\u65B9\u5F0F","\u6392\u5E8F"],settingModalColumnSortEnum:["\u5DE6","\u53F3","\u65E0"],longTextModalLabel:"\u5168\u90E8",longTextModalTitle:"\u5168\u90E8"}}),Kr=h.Z,Nr=L.PO,Wr=L.kK,Ur=function(q,se){var oe=q.className,k=q.style,F=q.locale,Y=q.request,Q=q.requestOnMounted,J=Q===void 0?!0:Q,ee=q.header,ne=q.search,le=q.titleTop,ce=q.title,ie=ce===void 0?{}:ce,pe=q.titleBottom,me=q.table,de=me===void 0?{}:me,xe=q.footer,ge=(0,p.useRef)(null),fe=(0,p.useRef)(ne===!1?{}:ne.defaultValue||{}),Te=(0,p.useMemo)(function(){return a()(a()({},$r),F)},[F]);de.rowSelection&&Wr(de.rowSelection.columnWidth)&&(de.rowSelection=a()(a()({},de.rowSelection),{},{columnWidth:32}));var De=(0,p.useRef)({isTabChanging:!1}),Re=Ye({table:de,globalStateRef:De}),_e=Re.baseColumns,Ke=we({table:de,baseColumns:_e,globalStateRef:De}),Ne=Ke.sortColumns,Ue=Ke.sortModalHolder,Fe=Ke.openSettingModal,en=mr({table:de,sortColumns:Ne,locale:Te}),zr=en.finalColumns,We=yr({table:de,rootElemRef:ge}),Qr=We.scrollY,Hr=We.updateScrollY,ke=hr({searchValueRef:fe,table:de,request:Y,updateScrollY:Hr,locale:Te}),An=ke.loading,Vr=ke.dataSource,Xr=ke.updateDataSource,wr=ke.summaryData,kr=ke.updateSummaryData,qr=ke.finalPagination,hn=ke.runRequest,et=ke.requestParamsRef,nt=ke.requestExtraParamsRef,rt=ke.updateRequestExtraParams,Gr=Er({locale:Te,loading:An,search:ne,searchValueRef:fe,runRequest:hn,updateScrollY:Hr}),tt=Gr.searchNodeHolder,at=Gr.searchRef,st=jr({locale:Te,title:ie,loading:An,globalStateRef:De,runRequest:hn,openSettingModal:Fe}),ot=st.titleNodeHolder,lt=Mn({table:de,finalColumns:zr,summaryData:wr}),dt=lt.finalSummary,jn={loading:An},ut=(0,P.Z)(function(mt,Yr,Jr,ct){var Zr;(de.sortMode==="service"||de.sortMode==="service-all")&&(rt({filter:Yr,sorter:Jr}),hn()),(Zr=de.onChange)===null||Zr===void 0||Zr.call(de,mt,Yr,Jr,ct)});return(0,H.Z)(function(){J&&hn()}),cr({ref:se,rootElemRef:ge,searchRef:at,requestParamsRef:et,requestExtraParamsRef:nt,searchValueRef:fe,dataSource:Vr,updateDataSource:Xr,updateSummaryData:kr,updateScrollY:Hr,openSettingModal:Fe,runRequest:hn}),(0,i.jsx)(w.Provider,{value:{locale:Te},children:(0,i.jsxs)("div",{ref:ge,className:oe,style:k,children:[ee==null?void 0:ee(jn),tt,le==null?void 0:le(jn),ot,pe==null?void 0:pe(jn),(0,i.jsx)(I.Z,a()(a()({tableLayout:"fixed"},de),{},{className:Kr(de.className,t.table),columns:zr,dataSource:Vr,loading:a()({spinning:An},Nr(de==null?void 0:de.loading)?de.loading:void 0),scroll:a()({scrollToFirstRowOnChange:!0,x:"max-content",y:Qr},de==null?void 0:de.scroll),summary:dt,pagination:qr,onChange:ut})),xe==null?void 0:xe(jn),Ue]})})},pn=(0,p.forwardRef)(Ur),Fr=pn},74465:function(G,c,e){e.r(c);var S=e(97857),a=e.n(S),h=e(9686);c.default=a()(a()({},h.default),{},{SearchTable:{serialColumnName:"Rank",actionColumnName:"Actions",more:"More",paginationTotal:"Showing ${start} to ${end} of ${total} entries",refreshTips:"Refresh",settingTips:"Columns Setting",settingModalTitle:"Columns Setting",settingModalOk:"Ok",settingModalReset:"Reset Current Setting",settingModalResetDefault:"Restore Defaults",settingModalColumnEnum:["Name","Display","Width","Fixed","Sort"],settingModalColumnSortEnum:["left","right","-"],longTextModalLabel:"All",longTextModalTitle:"All"}})},88442:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(63917);const a=[{value:"SchemaRender",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u5957 ",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u7B80\u5355",paraId:0,tocIndex:1},{value:"\uFF0C\u4F46\u53C8\u8FFD\u6C42 ",paraId:0,tocIndex:1},{value:"\u7075\u6D3B",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u53EF\u9AD8\u5B9A",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u597D\u7528\u7684",paraId:0,tocIndex:1},{value:" \u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848\uFF0C\u65E8\u5728\u6C89\u6DC0\u89E3\u51B3\u5E38\u89C1\u8868\u5355\u6848\u4F8B\u7684\u6E32\u67D3\u5E93\uFF0C\u4E0E\u76F8\u5173\u7684\u901A\u7528\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u5347\u7814\u53D1\u6548\u7387\u3002",paraId:0,tocIndex:1},{value:"\u5185\u5BB9\u76EE\u5F55\uFF1A",paraId:1,tocIndex:1},{value:"Core",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6E32\u67D3\u5E93\u5185\u6838\uFF0C\u901A\u8FC7\u4E00\u5957\u7B80\u6613\u7684 ",paraId:2,tocIndex:1},{value:"JSON Schema",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\u51FA\u4E00\u5957\u8868\u5355\uFF0C\u5185\u6838\u4E3B\u8981\u5904\u7406 Schema \u534F\u8BAE\u3001\u6E32\u67D3\u5668\u7F16\u6392\u3001\u903B\u8F91\u8054\u52A8\u3001\u6821\u9A8C\u80FD\u529B\u7B49\uFF0C\u652F\u6301 SSR(Server-Side Rendering)\u3002",paraId:2,tocIndex:1},{value:"FormRender",paraId:2,tocIndex:1},{value:": \u57FA\u4E8E Core + ",paraId:2,tocIndex:1},{value:"Antd",paraId:2,tocIndex:1},{value:" \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u8868\u5355\u6E32\u67D3\u5E93\u3002",paraId:2,tocIndex:1},{value:"Search",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:2,tocIndex:1},{value:"SearchTable",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u3002",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u9879\u76EE\u662F\u57FA\u4E8E React \u6280\u672F\u6808\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u540E\u7F00\u90FD\u52A0\u4E86 ",paraId:4},{value:"-react",paraId:4},{value:" \u5B57\u773C\uFF0C\u540E\u7EED\u53EF\u80FD\u4F1A\u5C06 Core \u62BD\u79BB\u6210\u4E0D\u4F9D\u8D56\u4E8E\u6280\u672F\u6808\u7684\u7EAF JavaScript \u9879\u76EE\uFF0C\u4EE5\u4FBF\u652F\u6301\u4EFB\u4F55\u6280\u672F\u6846\u67B6\u3002",paraId:4},{value:"FormRender\u3001Search \u6CA1\u6709\u5F88\u597D\u7684\u652F\u6301 SSR\uFF0C\u5982\u679C\u662F Next.js \u9879\u76EE\uFF0C\u53EF\u4EE5\u52A8\u6001\u5BFC\u5165\u5E76\u914D\u7F6E ssr \u4E3A\u4E0D\u542F\u7528\uFF0C\u5982\u4E0B\u793A\u4F8B\u3002",paraId:5},{value:`import dynamic from 'next/dynamic'

const FormRender = dynamic(() => import('@schema-render/form-render-react'), {
  ssr: false,
})
`,paraId:6},{value:"\u6E32\u67D3\u5185\u6838\u5FC5\u987B\u7EC4\u88C5 ",paraId:7,tocIndex:2},{value:"itemLayout",paraId:7,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:7,tocIndex:2},{value:"Renderers",paraId:7,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u6765\u5B9E\u73B0\u4E00\u4E2A\u6E32\u67D3\u5E93\uFF0C\u7136\u540E\u901A\u8FC7 JSON Schema \u9A71\u52A8\u6E32\u67D3\u51FA\u6240\u9700\u7684\u8868\u5355\u3002",paraId:7,tocIndex:2},{value:"\u7279\u70B9\uFF1A\u534F\u8BAE\u9A71\u52A8\u3001\u7B80\u6D01\u6613\u7528\u3001\u9AD8\u53EF\u5B9A\u5236\u3001\u8F7B\u91CF\u7EA7\u3002",paraId:8,tocIndex:2},{value:"\u534F\u8BAE\u9A71\u52A8",paraId:9,tocIndex:2},{value:"\uFF1A\u901A\u8FC7\u7F16\u5199\u4E00\u4EFD\u7B80\u6613\u7684 JSON Schema \u6765\u5B9E\u73B0\u5185\u5BB9\u7684\u6E32\u67D3\uFF0C\u53C2\u8003",paraId:9,tocIndex:2},{value:"\u5FEB\u901F\u4E0A\u624B",paraId:10,tocIndex:2},{value:"\u3002",paraId:9,tocIndex:2},{value:"\u7B80\u6D01\u6613\u7528",paraId:9,tocIndex:2},{value:"\uFF1A\u4EC1\u8005\u89C1\u4EC1\u667A\u8005\u89C1\u667A\uFF0C\u7B14\u8005\u4EE5\u4E3A\u662F\u6BD4\u8F83\u8A00\u7B80\u610F\u8D45\u3001\u6613\u7528\u7684\uFF0C\u5982\u540C\u5185\u90E8\u6E90\u7801\u4E00\u6837\uFF0C\u5316\u7E41\u4E3A\u7B80\uFF0C\u65E0\u5FC5\u8981\u4E0D\u589E\u5B9E\u4F53\u3002",paraId:9,tocIndex:2},{value:"\u9AD8\u53EF\u5B9A\u5236",paraId:9,tocIndex:2},{value:"\uFF1A\u901A\u8FC7\u914D\u7F6E\u4E0E\u7EC4\u88C5 layout\u3001itemLayout\u3001renderers \u7B49\u53EF\u4EE5\u6309\u9700\u5B9E\u73B0\u4E00\u4E2A\u8D34\u5408\u4E1A\u52A1\u81EA\u8EAB\u7684\u6E32\u67D3\u5E93\uFF0C\u5982 FormRender\u3002",paraId:9,tocIndex:2},{value:"\u8F7B\u91CF\u7EA7",paraId:9,tocIndex:2},{value:"\uFF1A\u8D44\u6E90\u5305\u5927\u5C0F\u4EC5 17.6k, gzip 6.5k",paraId:9,tocIndex:2}]},87351:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(59869);const a=[{value:`npm install @schema-render/core-react --save
`,paraId:0,tocIndex:1},{value:"\u6B65\u9AA4\u4E00\uFF1A",paraId:1,tocIndex:2},{value:" \u9700\u8981\u5148\u7EC4\u88C5\u5FC5\u987B\u7684\u90E8\u4EF6 ",paraId:1,tocIndex:2},{value:"itemLayout",paraId:1,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:1,tocIndex:2},{value:"Renderers",paraId:1,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4F7F Core \u8FD0\u884C\u5B8C\u6574\u3002",paraId:1,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:": \u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:2},{value:"Renderers",paraId:2,tocIndex:2},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u8868\u5355\u9879\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C",paraId:2,tocIndex:2},{value:"schema \u534F\u8BAE",paraId:2,tocIndex:2},{value:" \u7684 ",paraId:2,tocIndex:2},{value:"renderType",paraId:2,tocIndex:2},{value:" \u5B57\u6BB5\u6307\u5411\u5176\u540D\u79F0\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u6E32\u67D3\u5668 Renderer",paraId:4,tocIndex:2},{value:"\u6B65\u9AA4\u4E8C\uFF1A",paraId:5,tocIndex:2},{value:" \u7136\u540E\u901A\u8FC7\u58F0\u660E ",paraId:5,tocIndex:2},{value:"Schema \u534F\u8BAE",paraId:5,tocIndex:2},{value:" \u6765\u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u6837\u7684\u8868\u5355\u3002",paraId:5,tocIndex:2},{value:"\u534F\u8BAE\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:6,tocIndex:2},{value:"\u534F\u8BAE\u4ECB\u7ECD Schema",paraId:7,tocIndex:2},{value:"\u6B65\u9AA4\u4E09\uFF1A",paraId:8,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:2},{value:"onChange",paraId:8,tocIndex:2},{value:" \u4E8B\u4EF6\u83B7\u53D6\u8868\u5355\u7684\u6574\u4F53\u6570\u636E\u3002",paraId:8,tocIndex:2},{value:"\u4E8B\u4EF6\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:9,tocIndex:2},{value:"\u6570\u636E\u56DE\u8C03 ChangeEvent",paraId:10,tocIndex:2},{value:"\u6B65\u9AA4\u56DB\uFF1A",paraId:11,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:11,tocIndex:2},{value:"value",paraId:11,tocIndex:2},{value:" \u53C2\u6570\u5B9E\u73B0\u8868\u5355\u6570\u636E\u81EA\u5DF1\u63A7\u5236\u3002",paraId:11,tocIndex:2},{value:"\u53C2\u8003\u9605\u8BFB\uFF1A",paraId:12,tocIndex:2},{value:"\u72B6\u6001\u53D7\u63A7\u4E0E\u975E\u53D7\u63A7",paraId:12,tocIndex:2},{value:"\u6B65\u9AA4\u4E00\u52A0\u6B65\u9AA4\u4E8C",paraId:13,tocIndex:3},{value:"\u589E\u52A0\u6B65\u9AA4\u4E09",paraId:14,tocIndex:4}]},43504:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(76777);const a=[{value:"\u57FA\u7840\u534F\u8BAE\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u9879\u7684\u57FA\u7840\u529F\u80FD\u3002",paraId:0,tocIndex:2},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:1,tocIndex:3},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:2,tocIndex:4},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:3,tocIndex:5},{value:`\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6E32\u67D3\u4E3B\u4F53\u5185\u5BB9\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002
`,paraId:4,tocIndex:6},{value:"renderType",paraId:4,tocIndex:6},{value:" \u53EF\u4EE5\u79F0\u4E3A\u300C\u6E32\u67D3\u7C7B\u578B\u300D\u6216\u300C\u6E32\u67D3\u5668\u540D\u79F0\u300D\uFF0C\u5176\u503C\u5BF9\u5E94\u6CE8\u518C\u5728\u300C\u6E32\u67D3\u5668\u5217\u8868\u300D\u7684\u6E32\u67D3\u5668\u3002",paraId:4,tocIndex:6},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:5,tocIndex:6},{value:"\u6E32\u67D3\u5668 Renderer",paraId:6,tocIndex:6},{value:"\u5B9A\u4E49\u4F20\u9012\u7ED9\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u53C2\u6570\uFF0C",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:" \u7C7B\u578B\u3002",paraId:7,tocIndex:7},{value:"\u4EE5\u4E0B\u901A\u8FC7\u81EA\u5B9A\u4E49 ",paraId:8,tocIndex:7},{value:"placeholder",paraId:8,tocIndex:7},{value:" \u548C Select ",paraId:8,tocIndex:7},{value:"\u679A\u4E3E\u503C",paraId:8,tocIndex:7},{value:" \u505A\u4E2A\u793A\u4F8B\u3002",paraId:8,tocIndex:7},{value:"\u7ED3\u6784\u534F\u8BAE\u53EF\u4EE5\u521B\u5EFA\u5D4C\u5957\u7684 Schema \u5185\u5BB9\uFF0C\u76EE\u524D\u652F\u6301 Object \u548C Array \u7ED3\u6784\u7C7B\u578B\u3002",paraId:9,tocIndex:8},{value:"\u5BF9\u8C61\u7ED3\u6784\u53EF\u4EE5\u58F0\u660E\u5D4C\u5957\u7684\u5BF9\u8C61\u7C7B\u578B Schema \u7ED3\u6784\uFF0C",paraId:10,tocIndex:9},{value:"renderType",paraId:10,tocIndex:9},{value:" \u4EE5 ",paraId:10,tocIndex:9},{value:"Object",paraId:10,tocIndex:9},{value:" \u5F00\u5934\uFF0C\u540C\u65F6\u9700\u8981\u6CE8\u518C\u5BF9\u5E94\u7684\u5BF9\u8C61\u6E32\u67D3\u5668\u3002",paraId:10,tocIndex:9},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:11,tocIndex:9},{value:"\u7ED3\u6784\u6E32\u67D3\u5668-\u5BF9\u8C61 Object",paraId:12,tocIndex:9},{value:"\u6570\u7EC4\u7ED3\u6784\u53EF\u4EE5\u58F0\u660E\u5D4C\u5957\u7684\u6570\u7EC4\u7C7B\u578B Schema \u7ED3\u6784\uFF0C",paraId:13,tocIndex:10},{value:"renderType",paraId:13,tocIndex:10},{value:" \u4EE5 ",paraId:13,tocIndex:10},{value:"Array",paraId:13,tocIndex:10},{value:" \u5F00\u5934\uFF0C\u540C\u65F6\u9700\u8981\u6CE8\u518C\u5BF9\u5E94\u7684\u6570\u7EC4\u6E32\u67D3\u5668\u3002",paraId:13,tocIndex:10},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:14,tocIndex:10},{value:"\u7ED3\u6784\u6E32\u67D3\u5668-\u6570\u7EC4 Array",paraId:15,tocIndex:10},{value:"\u987E\u540D\u601D\u4E49\uFF0C\u63A7\u5236\u8868\u5355\u9879\u72B6\u6001\u7684\u534F\u8BAE\uFF0C\u901A\u8FC7\u58F0\u660E ",paraId:16,tocIndex:11},{value:"Boolean",paraId:16,tocIndex:11},{value:" \u503C\u6216\u8005",paraId:16,tocIndex:11},{value:"\u8868\u8FBE\u5F0F",paraId:16,tocIndex:11},{value:"\u6765\u63A7\u5236\u8868\u5355\u9879\u7684\u72B6\u6001\uFF0C\u5982\u5FC5\u586B\u3001\u9690\u85CF\u3001\u7981\u7528\u3001\u53EA\u8BFB\u3002",paraId:16,tocIndex:11},{value:"Boolean",paraId:17,tocIndex:11},{value:": \u9002\u7528\u4E8E\u9759\u6001\u72B6\u6001\u63A7\u5236\uFF0C\u76F4\u63A5\u58F0\u660E",paraId:17,tocIndex:11},{value:"\u8868\u8FBE\u5F0F",paraId:17,tocIndex:11},{value:": \u9002\u7528\u4E8E\u52A8\u6001\u72B6\u6001\u63A7\u5236",paraId:17,tocIndex:11},{value:"\u6B64\u7C7B\u534F\u8BAE\u7684\u8868\u8FBE\u5F0F\u53D8\u91CF\u5305\u542B\u5982\u4E0B",paraId:18,tocIndex:11},{value:"$",paraId:19,tocIndex:11},{value:": \u8868\u793A\u5F53\u524D\u5C42\u7EA7\u7684\u5BF9\u8C61\u6570\u636E",paraId:19,tocIndex:11},{value:"$root",paraId:19,tocIndex:11},{value:": \u8868\u793A\u8868\u5355\u7684\u6570\u636E",paraId:19,tocIndex:11},{value:"$userCtx",paraId:19,tocIndex:11},{value:": \u8868\u793A ",paraId:19,tocIndex:11},{value:"userCtx",paraId:19,tocIndex:11},{value:" \u7684\u6570\u636E",paraId:19,tocIndex:11},{value:"\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:20,tocIndex:12},{value:"\u5FC5\u586B",paraId:20,tocIndex:12},{value:"\uFF0C\u5FC5\u586B\u65F6\u8868\u5355\u9879\u4F1A\u589E\u52A0 ",paraId:20,tocIndex:12},{value:"is-required",paraId:20,tocIndex:12},{value:" \u7C7B\u540D\u3002",paraId:20,tocIndex:12},{value:"\u4EE5\u4E0B\u662F\u76F4\u63A5\u58F0\u660E ",paraId:21,tocIndex:12},{value:"Boolean",paraId:21,tocIndex:12},{value:" \u503C\u548C",paraId:21,tocIndex:12},{value:"\u8868\u8FBE\u5F0F",paraId:21,tocIndex:12},{value:"\u52A8\u6001\u63A7\u5236\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\u7684\u793A\u4F8B\u3002",paraId:21,tocIndex:12},{value:"\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:22,tocIndex:13},{value:"\u7981\u7528",paraId:22,tocIndex:13},{value:"\uFF0C\u7981\u7528\u65F6\u8868\u5355\u9879\u4F1A\u589E\u52A0 ",paraId:22,tocIndex:13},{value:"is-disabled",paraId:22,tocIndex:13},{value:" \u7C7B\u540D\u3002",paraId:22,tocIndex:13},{value:"\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:23,tocIndex:14},{value:"\u53EA\u8BFB",paraId:23,tocIndex:14},{value:"\uFF0C\u53EA\u8BFB\u65F6\u8868\u5355\u9879\u4F1A\u589E\u52A0 ",paraId:23,tocIndex:14},{value:"is-readonly",paraId:23,tocIndex:14},{value:" \u7C7B\u540D\u3002",paraId:23,tocIndex:14},{value:"\u5E38\u5E94\u7528\u4E8E\u8868\u5355\u8BE6\u60C5\u9875\u7684\u6570\u636E\u5C55\u793A\u3002",paraId:24,tocIndex:14},{value:"\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:25,tocIndex:15},{value:"\u9690\u85CF",paraId:25,tocIndex:15},{value:"\uFF0C\u9690\u85CF\u7684\u8868\u5355\u9879\u6570\u636E\u4ECD\u7136\u5B58\u5728\u3002",paraId:25,tocIndex:15},{value:"\u7ED9\u8868\u5355\u9879\u8BBE\u7F6E\u7C7B\u540D\u3002",paraId:26,tocIndex:17},{value:`const schema = {
  renderType: 'Root',
  properties: {
    title: {
      title: '\u6807\u9898',
      renderType: 'InputText',
      className: 'my-title',
    },
  },
}
`,paraId:27,tocIndex:17},{value:"\u7ED9\u8868\u5355\u9879\u8BBE\u7F6E\u6837\u5F0F\uFF0C\u540C ",paraId:28,tocIndex:18},{value:"className",paraId:28,tocIndex:18},{value:"\u3002",paraId:28,tocIndex:18},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u5360\u7528\u7684\u6805\u683C\u5BBD\u5EA6\u3002",paraId:29,tocIndex:19},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:30,tocIndex:19},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:31,tocIndex:19},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002",paraId:32,tocIndex:20},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:33,tocIndex:20},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:34,tocIndex:20},{value:"\u6570\u636E\u6821\u9A8C\u534F\u8BAE\u901A\u8FC7 ",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u5173\u952E\u5B57\u5B9A\u4E49\uFF0C",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u89C4\u5219\u662F\u501F\u9274 async-validator API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:35,tocIndex:21},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:36,tocIndex:21},{value:"type",paraId:36,tocIndex:21},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:36,tocIndex:21},{value:"\u540D\u79F0",paraId:37,tocIndex:21},{value:"\u8BF4\u660E",paraId:37,tocIndex:21},{value:"\u7C7B\u578B",paraId:37,tocIndex:21},{value:"type",paraId:37,tocIndex:21},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"required",paraId:37,tocIndex:21},{value:"\u662F\u5426\u5FC5\u586B",paraId:37,tocIndex:21},{value:"boolean",paraId:37,tocIndex:21},{value:"min",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"max",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"len",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"pattern",paraId:37,tocIndex:21},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"validator",paraId:37,tocIndex:21},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"message",paraId:37,tocIndex:21},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"\u793A\u4F8B",paraId:38,tocIndex:21},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:39},{value:"\u6821\u9A8C\u5668 Validator",paraId:40},{value:"\u534F\u8BAE\u4FDD\u7559\u5173\u952E\u5B57\u53EF\u80FD\u4F1A\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u4F7F\u7528\uFF0C\u4E3A\u4E86\u907F\u514D\u51B2\u7A81\uFF0C\u5E94\u5F53\u4E0D\u5360\u7528\uFF1B\u4FDD\u7559\u5173\u952E\u5B57\u5217\u8868\u5982\u4E0B",paraId:41,tocIndex:22},{value:"type",paraId:42,tocIndex:22},{value:": \u5B9A\u4E49\u5F53\u524D\u8868\u5355\u9879\u5BF9\u5E94\u7684\u7EAF ",paraId:42,tocIndex:22},{value:"JavaScript",paraId:42,tocIndex:22},{value:" \u6570\u636E\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:42,tocIndex:22},{value:"string",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"number",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"object",paraId:42,tocIndex:22},{value:" \u7B49\u3002",paraId:42,tocIndex:22}]},12157:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(84894);const a=[{value:"layout",paraId:0,tocIndex:0},{value:" \u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u4E4B\u95F4",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u6A21\u5F0F\u3002",paraId:0,tocIndex:0},{value:"normal",paraId:1,tocIndex:0},{value:": \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u6807\u51C6\u6805\u683C\u5E03\u5C40\uFF0C\u5C06\u5BB9\u5668\u5747\u5206\u4E3A ",paraId:1,tocIndex:0},{value:"24",paraId:1,tocIndex:0},{value:" \u4EFD\uFF0C\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\uFF08\u5373 24 \u4EFD\uFF09\uFF1B\u5F53\u7136\u53EF\u4EE5\u5728 Schema \u91CC\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"span",paraId:1,tocIndex:0},{value:" \u5B57\u6BB5\u8BBE\u7F6E\u7279\u5B9A\u7684\u4EFD\u6570\uFF08\u5BBD\u5EA6\uFF09\u3002",paraId:1,tocIndex:0},{value:"autoFill",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0C",paraId:1,tocIndex:0},{value:"CSS Grid",paraId:1,tocIndex:0},{value:" autoFill \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"autoFit",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0CCSS Grid autoFit \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\u3002",paraId:2,tocIndex:1},{value:"\u901A\u8FC7\u5728 ",paraId:3,tocIndex:2},{value:"Schema",paraId:3,tocIndex:2},{value:" \u4E0A\u6307\u5B9A ",paraId:3,tocIndex:2},{value:"span",paraId:3,tocIndex:2},{value:" \u548C ",paraId:3,tocIndex:2},{value:"spanStart",paraId:3,tocIndex:2},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:3,tocIndex:2},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:2},{value:"\u548C",paraId:3,tocIndex:2},{value:"\u4F4D\u7F6E",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u5BBD\u5EA6\uFF0C\u4EE5\u4EFD\u8BA1\u7B97\u3002",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u4ECE\u7B2C\u51E0\u4E2A\u6805\u683C\u5F00\u59CB\uFF0C\u901A\u5E38\u5728\u9700\u8981\u6362\u884C\u7684\u65F6\u5019\u4F7F\u7528\u3002",paraId:4,tocIndex:2},{value:"\u5F53 ",paraId:4,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:" \u548C ",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:" \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09",paraId:4,tocIndex:2},{value:"\u6839\u636E\u8BBE\u7F6E\u7684 ",paraId:5,tocIndex:3},{value:"layoutMinMax",paraId:5,tocIndex:3},{value:"\uFF08\u5373 ",paraId:5,tocIndex:3},{value:"Grid minmax",paraId:5,tocIndex:3},{value:"\uFF09\u4E0E",paraId:5,tocIndex:3},{value:"\u8868\u5355\u6839\u5143\u7D20",paraId:5,tocIndex:3},{value:"\u5BBD\u5EA6\u52A8\u6001\u8BA1\u7B97\u5E03\u5C40\u5BBD\u5EA6\uFF0C\u52A8\u6001\u6392\u5217\u4E0E\u6362\u884C\u3002",paraId:5,tocIndex:3},{value:"autoFit",paraId:6,tocIndex:4},{value:" \u4E0E ",paraId:6,tocIndex:4},{value:"autoFill",paraId:6,tocIndex:4},{value:" \u96F7\u540C\uFF0C\u7EC6\u5FAE\u7684\u5DEE\u522B\u8BF7\u67E5\u770B ",paraId:6,tocIndex:4},{value:"\u8FD9\u7BC7\u6587\u7AE0\u7684\u5BF9\u6BD4",paraId:6,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"\u4E0D\u7BA1\u662F ",paraId:7,tocIndex:5},{value:"autoFill",paraId:7,tocIndex:5},{value:" \u8FD8\u662F ",paraId:7,tocIndex:5},{value:"autoFit",paraId:7,tocIndex:5},{value:" \u90FD\u53EF\u4EE5\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"layoutMinMax",paraId:7,tocIndex:5},{value:" \u8BBE\u7F6E\u8868\u5355\u9879\u5BBD\u5EA6\u7684\u6700\u5C0F\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:7,tocIndex:5},{value:"['320px', '1fr']",paraId:7,tocIndex:5},{value:"\u3002",paraId:7,tocIndex:5},{value:"\u4EE5\u4E0B\u793A\u4F8B\u8BBE\u7F6E\u6700\u5C0F\u6700\u5927\u90FD\u4E3A ",paraId:8,tocIndex:5},{value:"230px",paraId:8,tocIndex:5},{value:" \u7684\u5E03\u5C40\u3002",paraId:8,tocIndex:5},{value:"layoutMinMax",paraId:9},{value:" \u5185\u7684\u503C\u53EF\u4EE5\u662F ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F ",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\uFF0C",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6210\u4EE5 ",paraId:9},{value:"px",paraId:9},{value:" \u4E3A\u5355\u4F4D\u7684 ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\u503C\u3002",paraId:9}]},14569:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(23382);const a=[{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u7528\u4E8E\u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u5185\u90E8",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\u3002",paraId:0,tocIndex:0},{value:"\u5E38\u89C1\u7684\u5E03\u5C40\u7ED3\u6784\u6709 2 \u79CD\uFF1A\u7EB5\u5411\u5E03\u5C40\uFF08Vertical\uFF09\u548C\u6A2A\u5411\u5E03\u5C40\uFF08Horizontal\uFF09\uFF0C\u4E0B\u9762\u7684\u7AE0\u8282\u5C06\u4E3E\u4F8B\u5B9E\u73B0\u8FD9\u4E24\u79CD\u5E03\u5C40\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"IOpenItemLayoutParams",paraId:2,tocIndex:3},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"schema",paraId:3,tocIndex:3},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:3,tocIndex:3},{value:"ISchema",paraId:3,tocIndex:3},{value:"required",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"readonly",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"validator",paraId:3,tocIndex:3},{value:"\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F\uFF0C\u5305\u542B ",paraId:3,tocIndex:3},{value:"status(\u72B6\u6001)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"message(\u63D0\u793A\u4FE1\u606F)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"extra(\u989D\u5916\u6570\u636E)",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"locale",paraId:3,tocIndex:3},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"userCtx",paraId:3,tocIndex:3},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"body",paraId:3,tocIndex:3},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"prefixClassNames",paraId:3,tocIndex:3},{value:"\u5BF9 ",paraId:3,tocIndex:3},{value:"classnames",paraId:3,tocIndex:3},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:3,tocIndex:3},{value:"(...args: classNames.ArgumentArray) => string",paraId:3,tocIndex:3}]},49116:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(86131);const a=[{value:"\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"prefixCls",paraId:0,tocIndex:0},{value:" \u5B9A\u5236\u6837\u5F0F\u7C7B\u540D\u524D\u7F00",paraId:0,tocIndex:0},{value:"\u6253\u5F00 DevTools \u9762\u677F\u67E5\u770B DOM \u5143\u7D20\u7C7B\u540D",paraId:1}]},44272:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(15208);const a=[{value:"\u5F53\u8868\u5355\u9879\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8868\u5355\u5168\u91CF\u6570\u636E\u3002",paraId:0,tocIndex:1},{value:"onChange",paraId:1},{value:" \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\uFF0C\u5305\u542B\u5982\u4E0B\u6570\u636E\uFF1A",paraId:1},{value:"path",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u7684\u8868\u5355\u9879\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C",paraId:2},{value:"array",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"sPath",paraId:2},{value:": \u5B8C\u6574\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32\u5316\u8868\u793A\uFF0C",paraId:2},{value:"string",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"value",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u7684\u6570\u636E\u503C\u3002",paraId:2},{value:"extra",paraId:2},{value:": \u643A\u5E26\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u4EFB\u610F\u6570\u636E\u683C\u5F0F\u3002",paraId:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4E0E ",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:" \u8C03\u7528\u65F6\u673A\u4E00\u81F4\uFF0C\u53EA\u662F ",paraId:3,tocIndex:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4EC5\u5305\u542B\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\u3002",paraId:3,tocIndex:2},{value:"\u9002\u7528\u4E8E\u4E0D\u9700\u8981\u63A5\u7BA1\u6574\u4E2A\u8868\u5355\u6570\u636E\uFF08value\uFF09\uFF0C\u53C8\u9700\u8981\u76D1\u542C\u67D0\u4E2A\u8868\u5355\u9879\u53D8\u5316\u800C\u540E\u5904\u7406\u4E00\u4E9B\u4E8B\u60C5\u7684\u573A\u666F\u3002",paraId:4,tocIndex:2},{value:"\u989D\u5916\u4FE1\u606F\u662F\u6E32\u67D3\u5668\u5728\u53D1\u751F ",paraId:5,tocIndex:3},{value:"change",paraId:5,tocIndex:3},{value:" \u4E8B\u4EF6\u65F6\u544A\u77E5\u7ED9\u5916\u9762\u7684\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u5904\u7406\u7279\u6B8A\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:5,tocIndex:3}]},19520:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(233);const a=[{value:"\u6570\u636E\u8054\u52A8\u6709\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5206\u522B\u662F ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:" \u4E24\u79CD\u65B9\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u5728\u89E6\u53D1 ",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:" \u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7\u6539\u53D8\u6570\u636E\u5B9E\u73B0\u3002",paraId:1,tocIndex:1},{value:"watch",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u662F ",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u7684\u4E00\u79CD\u4FBF\u6377\u5199\u6CD5\uFF0C\u907F\u514D\u5927\u91CF ",paraId:2,tocIndex:2},{value:"if",paraId:2,tocIndex:2},{value:" \u8BED\u53E5\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u6E05\u6670\u5EA6\u4EE5\u53CA\u7814\u53D1\u6548\u7387\u3002",paraId:2,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:" \u5339\u914D\u7684\u662F ",paraId:3,tocIndex:2},{value:"sPath",paraId:3,tocIndex:2},{value:" \u8DEF\u5F84\u503C\uFF0C\u5982\u679C\u662F\u5D4C\u5957\u8DEF\u5F84\u503C\uFF0C\u5219\u4F7F\u7528\u70B9 ",paraId:3,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:" \u62FC\u63A5\u8868\u793A\uFF0C\u5982 ",paraId:3,tocIndex:2},{value:"objectX.width",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"\u8054\u52A8\u5BF9\u8C61\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:3},{value:"extra",paraId:4,tocIndex:3},{value:" \u5C5E\u6027\u6765\u5904\u7406\u3002",paraId:4,tocIndex:3}]},53671:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(39008);const a=[{value:"\u6E32\u67D3\u5668\u662F\u4E3B\u8981\u5185\u5BB9\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C5E\u6027\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EF\u72EC\u7ACB\u5B9A\u4E49\u5E03\u5C40\u7ED3\u6784\uFF08\u4E0D\u53D7\u9650\u4E8E itemLayout \u5E03\u5C40\uFF09\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"readonlyComponent",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"readonlyFormItem",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6\u6CE8\u518C\u6D41\u7A0B\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:"component",paraId:3,tocIndex:1},{value:" \u6A21\u5F0F\u662F\u5E38\u7528\u7684\u5B9A\u4E49\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u7F16\u5199\u6807\u9898\u4E0E\u5185\u5BB9\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u7531 ",paraId:3,tocIndex:1},{value:"itemLayout",paraId:3,tocIndex:1},{value:" \u7EDF\u4E00\u7BA1\u7406\u3002",paraId:3,tocIndex:1},{value:"\u4E0B\u9762\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"component",paraId:4,tocIndex:1},{value:" \u6A21\u5F0F\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BC4\u5206\u6E32\u67D3\u5668\u3002",paraId:4,tocIndex:1},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"IOpenComponentParams",paraId:5,tocIndex:2},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:5,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:2},{value:"\u8BF4\u660E",paraId:6,tocIndex:2},{value:"\u7C7B\u578B",paraId:6,tocIndex:2},{value:"schema",paraId:6,tocIndex:2},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:6,tocIndex:2},{value:"ISchema",paraId:6,tocIndex:2},{value:"value",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:6,tocIndex:2},{value:"any",paraId:6,tocIndex:2},{value:"rootValue",paraId:6,tocIndex:2},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"path",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:6,tocIndex:2},{value:"array",paraId:6,tocIndex:2},{value:"sPath",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:6,tocIndex:2},{value:"string",paraId:6,tocIndex:2},{value:"required",paraId:6,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"disabled",paraId:6,tocIndex:2},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"readonly",paraId:6,tocIndex:2},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"locale",paraId:6,tocIndex:2},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"userCtx",paraId:6,tocIndex:2},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"objectStyle",paraId:6,tocIndex:2},{value:"\u5BF9\u8C61\u7C7B\u578B\u6837\u5F0F",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"validator",paraId:6,tocIndex:2},{value:"\u6821\u9A8C\u5668\u4FE1\u606F\uFF0C\u5305\u542B\u6821\u9A8C\u72B6\u6001\u3001\u63D0\u793A\u6D88\u606F\u4E0E\u9644\u52A0\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"onChange",paraId:6,tocIndex:2},{value:"\u8868\u5355\u9879\u503C\u56DE\u8C03\u4E8B\u4EF6",paraId:6,tocIndex:2},{value:"Function",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: any, options?: IOpenChangeOptions) => void",paraId:7,tocIndex:3},{value:"options",paraId:7,tocIndex:3},{value:` \u53EF\u9009\u53C2\u6570\u5982\u4E0B\uFF1A
`,paraId:7,tocIndex:3},{value:"triggerValidator",paraId:8,tocIndex:3},{value:": \u662F\u5426\u89E6\u53D1\u6821\u9A8C\u5668\uFF0C",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:" \u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"extra",paraId:8,tocIndex:3},{value:": \u643A\u5E26\u7684\u989D\u5916\u6570\u636E\uFF0C\u4EFB\u610F\u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"formItem",paraId:9,tocIndex:4},{value:" \u6A21\u5F0F\u9002\u7528\u4E8E\u9700\u8981\u7A81\u7834 ",paraId:9,tocIndex:4},{value:"itemLayout",paraId:9,tocIndex:4},{value:" \u7684\u9650\u5236\uFF0C\u72EC\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7684\u573A\u666F\u3002",paraId:9,tocIndex:4},{value:"\u540C\u6837\u4EE5\u8BC4\u5206\u6E32\u67D3\u5668\u4E3A\u4F8B\uFF0C\u5C06\u8868\u5355\u9879\u7684\u6807\u9898\u52A0\u7C97\u52A0\u7EA2\u6765\u5C55\u793A\u3002",paraId:10,tocIndex:4},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:5},{value:"IOpenFormItemParams",paraId:11,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:11,tocIndex:5},{value:"\u76EE\u524D ",paraId:12,tocIndex:5},{value:"formItem",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E0E ",paraId:12,tocIndex:5},{value:"component",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E00\u81F4\u3002",paraId:12,tocIndex:5},{value:"\u7F16\u5199\u53EA\u8BFB\u6001\u903B\u8F91\u6709 2 \u79CD\u65B9\u5F0F\uFF1A",paraId:13,tocIndex:6},{value:"\u7B2C\u4E00\u79CD\uFF0C\u5728 ",paraId:14,tocIndex:6},{value:"component",paraId:14,tocIndex:6},{value:" \u7EC4\u4EF6\u91CC\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonly",paraId:14,tocIndex:6},{value:" \u72B6\u6001\u533A\u5206\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5B58\u5728 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\uFF0C\u5E76\u4E14\u5728\u590D\u6742\u7EC4\u4EF6\u91CC\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"\u7B2C\u4E8C\u79CD\uFF0C\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:14,tocIndex:6},{value:" \u58F0\u660E\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\u4F7F\u5F97\u67B6\u6784\u66F4\u6E05\u6670\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u7EC4\u4EF6\u907F\u514D\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:15,tocIndex:6},{value:" \u53C2\u6570\u4E0E ",paraId:15,tocIndex:6},{value:"component",paraId:15,tocIndex:6},{value:" \u4E00\u81F4\u3002",paraId:15,tocIndex:6},{value:"readonlyFormItem",paraId:16,tocIndex:7},{value:" \u4E0E ",paraId:16,tocIndex:7},{value:"readonlyComponent",paraId:16,tocIndex:7},{value:" \u6A21\u5F0F\u4E00\u81F4\uFF0C\u53C2\u6570\u4E0E ",paraId:16,tocIndex:7},{value:"formItem",paraId:16,tocIndex:7},{value:" \u4E00\u81F4\u3002",paraId:16,tocIndex:7},{value:"\u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\uFF1B\u8BE6\u60C5\u89C1 ",paraId:17,tocIndex:8},{value:"Renderer Validator",paraId:18,tocIndex:8},{value:"\u3002",paraId:17,tocIndex:8}]},71905:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(37424);const a=[{value:"\u901A\u8FC7\u521B\u5EFA\u4EE5 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u5F00\u5934\u7684\u6E32\u67D3\u5668\u53EF\u4EE5\u5236\u4F5C\u5D4C\u5957\u7684\u7ED3\u6784\u8868\u5355\uFF0C\u652F\u6301\u591A\u79CD\u4E0D\u540C\u529F\u80FD\u7684 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u6E32\u67D3\u5668\u540C\u65F6\u5B58\u5728\u3002",paraId:0,tocIndex:0},{value:"\u5212\u91CD\u70B9\uFF1A",paraId:1,tocIndex:0},{value:"Schema \u534F\u8BAE\u6A21\u578B\u7684\u5B50\u8282\u70B9\u901A\u8FC7\u8C03\u7528 ",paraId:2,tocIndex:0},{value:"RendererIterator",paraId:2,tocIndex:0},{value:" \u6E32\u67D3\u5668\u8FED\u4EE3\u5668\u6765\u6E32\u67D3\u3002",paraId:2,tocIndex:0},{value:"\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 ",paraId:2,tocIndex:0},{value:"objectStyle",paraId:2,tocIndex:0},{value:" \u6837\u5F0F\uFF0C\u4EE5\u7EE7\u627F\u5185\u6838\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40\u3002",paraId:2,tocIndex:0},{value:`<div style={objectStyle}>
  <RendererIterator schema={schema} path={path} />
</div>
`,paraId:3,tocIndex:0},{value:"\u6309\u89C4\u8303\u7F16\u5199\u7684\u5BF9\u8C61\u7ED3\u6784 Schema \u662F\u652F\u6301\u5185\u7F6E\u81EA\u52A8\u6821\u9A8C\u7684\uFF0C\u6821\u9A8C\u529F\u80FD\u8BE6\u89C1 ",paraId:4,tocIndex:2},{value:"\u6821\u9A8C\u5668 Validator",paraId:5,tocIndex:2},{value:" \u7AE0\u8282\u3002",paraId:4,tocIndex:2}]},73148:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(48966);const a=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},12875:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(92436);const a=[{value:"\u6821\u9A8C\u529F\u80FD\u6709\u5982\u4E0B\u4E09\u79CD\u65B9\u5F0F\u5B9A\u4E49\uFF1A",paraId:0,tocIndex:0},{value:"Schema Rules",paraId:1,tocIndex:0},{value:": Schema \u534F\u8BAE ",paraId:1,tocIndex:0},{value:"rules",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Global Validators",paraId:1,tocIndex:0},{value:": \u5168\u5C40 ",paraId:1,tocIndex:0},{value:"validators",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Renderer Validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668 ",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Schema Rules \u89C4\u5219\u901A\u8FC7\u5728 Schema \u534F\u8BAE\u58F0\u660E ",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\uFF0C",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u89C4\u5219\u662F\u501F\u9274 ",paraId:2,tocIndex:1},{value:"async-validator",paraId:2,tocIndex:1},{value:" API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:2,tocIndex:1},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:3,tocIndex:1},{value:"\u540D\u79F0",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"type",paraId:4,tocIndex:1},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"required",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:1},{value:"boolean",paraId:4,tocIndex:1},{value:"min",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"max",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"len",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"pattern",paraId:4,tocIndex:1},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"validator",paraId:4,tocIndex:1},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"message",paraId:4,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"\u89E6\u53D1\u65F6\u673A\uFF1A\u6BCF\u6B21\u6E32\u67D3\u5668\u7EC4\u4EF6 ",paraId:5,tocIndex:1},{value:"onChange",paraId:5,tocIndex:1},{value:" \u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u6821\u9A8C\u673A\u5236\uFF0C\u5E76\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u3002",paraId:5,tocIndex:1},{value:"\u5982\u679C\u5E0C\u671B ",paraId:6},{value:"onChange",paraId:6},{value:" \u65F6\u4E0D\u89E6\u53D1\u6821\u9A8C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684 ",paraId:6},{value:"triggerValidator",paraId:6},{value:" \u4E3A ",paraId:6},{value:"false",paraId:6},{value:" \u5B9E\u73B0\uFF0C\u793A\u4F8B\uFF1A",paraId:6},{value:"onChange('xxx', { triggerValidator: false })",paraId:6},{value:"\u3002",paraId:6},{value:"1\u3001Schema Rules \u89C4\u5219\u91CC\u7684 validator \u5B57\u6BB5\u4E0E async-validator API \u4E0D\u5BF9\u5E94\u3002",paraId:7},{value:`
2\u3001Schema Rules \u548C Global Validators \u89C4\u5219\u91CC\u7684 validator \u5C5E\u6027\u4E0D\u5141\u8BB8\u518D\u6B21\u58F0\u660E `,paraId:7},{value:"validator",paraId:7},{value:" \u5C5E\u6027\uFF08\u5185\u90E8\u4F1A\u5FFD\u7565\uFF09\uFF0C\u907F\u514D\u9677\u5165\u5FAA\u73AF\u8C03\u7528\u3002",paraId:7},{value:"\u793A\u4F8B",paraId:8},{value:"Global Validators \u662F\u5168\u5C40\u6821\u9A8C\u5668\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u590D\u7528\u901A\u7528\u7684\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6821\u9A8C\u5668\u6CE8\u518C\u5728\u5168\u5C40 ",paraId:9,tocIndex:2},{value:"validators",paraId:9,tocIndex:2},{value:" \u91CC\uFF0C\u7136\u540E\u5728 schema \u91CC\u901A\u8FC7 ",paraId:9,tocIndex:2},{value:"rules: [{ validator: 'name' }]",paraId:9,tocIndex:2},{value:" \u6765\u4F7F\u7528\u3002",paraId:9,tocIndex:2},{value:"\u901A\u8FC7\u6E32\u67D3\u5668\u7684 ",paraId:10,tocIndex:3},{value:"validator",paraId:10,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u6346\u7ED1\u5728\u4E00\u8D77\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:10,tocIndex:3},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u5148\u6821\u9A8C\u8F93\u5165\u5185\u5BB9\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u6821\u9A8C\u901A\u8FC7\u624D\u5141\u8BB8\u63D0\u4EA4\u6570\u636E\u3002",paraId:11,tocIndex:4},{value:"Global Validators \u548C Renderer Validator \u7684\u5B9A\u4E49\u662F\u4E00\u6837\u7684\uFF0C\u652F\u6301\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF1A",paraId:12,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u4E0E ",paraId:13,tocIndex:5},{value:"Schema Rules",paraId:13,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:13,tocIndex:5},{value:"validator: [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:13,tocIndex:5},{value:"\u3002",paraId:13,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u51FD\u6570\u6821\u9A8C\uFF0C\u51FD\u6570\u53C2\u6570\u5982\u4E0B\u5217\u8868\uFF0C\u7686\u4E3A\u53EA\u8BFB\u5C5E\u6027\u3002",paraId:13,tocIndex:5},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:14,tocIndex:5},{value:"IOpenValidatorParams",paraId:14,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:14,tocIndex:5},{value:"\u53C2\u6570",paraId:15,tocIndex:5},{value:"\u8BF4\u660E",paraId:15,tocIndex:5},{value:"\u7C7B\u578B",paraId:15,tocIndex:5},{value:"schema",paraId:15,tocIndex:5},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:15,tocIndex:5},{value:"ISchema",paraId:15,tocIndex:5},{value:"value",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:15,tocIndex:5},{value:"any",paraId:15,tocIndex:5},{value:"rootValue",paraId:15,tocIndex:5},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"path",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:15,tocIndex:5},{value:"array",paraId:15,tocIndex:5},{value:"sPath",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:15,tocIndex:5},{value:"string",paraId:15,tocIndex:5},{value:"required",paraId:15,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"disabled",paraId:15,tocIndex:5},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"readonly",paraId:15,tocIndex:5},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"locale",paraId:15,tocIndex:5},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"userCtx",paraId:15,tocIndex:5},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u4E09\u79CD\u8FD4\u56DE\u5F62\u6001\uFF1A",paraId:16,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:17,tocIndex:5},{value:"undefined",paraId:17,tocIndex:5},{value:"\uFF0C\u8868\u793A\u6821\u9A8C\u6210\u529F\u3002",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u4E0E ",paraId:17,tocIndex:5},{value:"Schema Rules",paraId:17,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:17,tocIndex:5},{value:"return [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u6807\u51C6\u72B6\u6001\u7ED3\u6784\uFF0C\u5982\u4E0B\u63CF\u8FF0",paraId:17,tocIndex:5},{value:"\u53C2\u6570",paraId:18,tocIndex:5},{value:"\u8BF4\u660E",paraId:18,tocIndex:5},{value:"\u7C7B\u578B",paraId:18,tocIndex:5},{value:"status",paraId:18,tocIndex:5},{value:"\u6821\u9A8C\u72B6\u6001\uFF0C",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" \u9519\u8BEF\uFF0C",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" \u8B66\u544A\uFF0C",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:" \u6210\u529F",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:"message",paraId:18,tocIndex:5},{value:"\u9519\u8BEF\u6216\u8B66\u544A\u72B6\u6001\u65F6\u7684\u63D0\u793A\u4FE1\u606F",paraId:18,tocIndex:5},{value:"string",paraId:18,tocIndex:5},{value:"extra",paraId:18,tocIndex:5},{value:"\u989D\u5916\u6570\u636E",paraId:18,tocIndex:5},{value:"any",paraId:18,tocIndex:5}]},15727:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(86685);const a=[{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u5728\u6700\u9876\u5C42\u76F4\u63A5\u63A7\u5236\u8868\u5355\u7684\u72B6\u6001\uFF0C\u4EE5\u964D\u4F4E\u534F\u8BAE\u63A7\u5236\u7F16\u7801\u6210\u672C\u3002",paraId:0,tocIndex:0},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u6743\u91CD\u5927\u4E8E Schema \u534F\u8BAE\u7684\u72B6\u6001\u63A7\u5236\u3002",paraId:1,tocIndex:0},{value:"\u4EE5\u4E0B\u662F\u5168\u5C40\u72B6\u6001\u63A7\u5236\u53EF\u7528\u7684\u53C2\u6570",paraId:2,tocIndex:0},{value:"disabled",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u7981\u7528",paraId:3,tocIndex:0},{value:"\uFF0C\u7981\u7528\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-disabled",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0},{value:"readonly",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u53EA\u8BFB",paraId:3,tocIndex:0},{value:"\uFF0C\u53EA\u8BFB\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-readonly",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0}]},59865:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(43315);const a=[{value:"\u5F53\u8868\u5355\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u7684\u4F4D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void",paraId:1,tocIndex:0},{value:"\u540D\u79F0",paraId:2,tocIndex:1},{value:"\u63CF\u8FF0",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"paths",paraId:2,tocIndex:1},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" | ",paraId:2,tocIndex:1},{value:"string[]",paraId:2,tocIndex:1},{value:"options",paraId:2,tocIndex:1},{value:"\u9009\u9879\u53C2\u6570\uFF0C\u5982\u4E0B\u8868\u683C",paraId:2,tocIndex:1},{value:"IScrollToOptions",paraId:2,tocIndex:1},{value:"\u540D\u79F0",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"xAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 x \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"yAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 y \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"behavior",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u8FC7\u6E21\u884C\u4E3A",paraId:3,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4 ",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"instant",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"auto",paraId:3,tocIndex:2},{value:"gap",paraId:3,tocIndex:2},{value:"\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u5DEE\u503C\uFF0C\u53EF\u4EE5\u662F\u6B63\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"positionedElement",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20 (\u9700\u8981\u5E26\u5B9A\u4F4D\u5C5E\u6027 position)\uFF0C\u9002\u7528\u4E8E\u975E Core \u6839\u8282\u70B9\u6EDA\u52A8",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"Window",paraId:3,tocIndex:2},{value:"\u65E0",paraId:4,tocIndex:3},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u662F ",paraId:5,tocIndex:4},{value:"Core",paraId:5,tocIndex:4},{value:" \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",paraId:5,tocIndex:4},{value:"scrollTo",paraId:5,tocIndex:4},{value:" \u65B9\u6CD5\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u4F4D\u7F6E\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u8D85\u8FC7 Core \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EA\u9700\u5728 ",paraId:6,tocIndex:5},{value:"scrollTo",paraId:6,tocIndex:5},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:6,tocIndex:5},{value:"positionedElement",paraId:6,tocIndex:5},{value:" \u53C2\u6570\u4E3A\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u5373\u53EF\u3002",paraId:6,tocIndex:5},{value:"\u524D\u7F6E\u6761\u4EF6\uFF1A",paraId:7,tocIndex:5},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u9700\u8981\u662F\u201C\u5B9A\u4F4D\u5143\u7D20\u201D\uFF0C\u5982\u58F0\u660E ",paraId:8,tocIndex:5},{value:"position",paraId:8,tocIndex:5},{value:" \u4E3A\u975E ",paraId:8,tocIndex:5},{value:"static",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u8FD9\u6837\u6307\u5B9A\u7684\u8868\u5355\u9879\u624D\u80FD\u67E5\u627E\u5230\u8BE5\u6EDA\u52A8\u7956\u5148\u5143\u7D20\uFF0C\u624D\u80FD\u83B7\u53D6\u5230\u6B63\u786E\u7684\u8DDD\u79BB\u3002",paraId:8,tocIndex:5},{value:"\u5B9A\u4F4D\u5143\u7D20\uFF1A",paraId:8,tocIndex:5},{value:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent",paraId:8,tocIndex:5},{value:"\u5982\u679C\u8981\u8BA9\u7A97\u53E3\u6EDA\u52A8\uFF0C\u540C\u6837\u7684\u65B9\u5F0F\uFF0C\u53EA\u9700\u5728 ",paraId:9,tocIndex:6},{value:"scrollTo",paraId:9,tocIndex:6},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:9,tocIndex:6},{value:"positionedElement",paraId:9,tocIndex:6},{value:" \u53C2\u6570\u4E3A ",paraId:9,tocIndex:6},{value:"window",paraId:9,tocIndex:6},{value:" \u5373\u53EF\uFF0C\u4E0D\u8FC7\u5185\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB\u662F\u53EA\u8BA1\u7B97\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u56E0\u4E3A ",paraId:9,tocIndex:6},{value:"offsetParent",paraId:9,tocIndex:6},{value:" \u6700\u7EC8\u53EA\u80FD\u5B9A\u4F4D\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u6240\u4EE5\uFF08\u4E5F\u662F\u5E38\u7406\u60C5\u51B5\u4E0B\uFF09body \u548C html \u5143\u7D20\u4E0D\u5E94\u8BE5\u5B58\u5728 margin \u548C padding \u503C\u3002",paraId:9,tocIndex:6}]},63021:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(46715);const a=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"ref",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"validate",paraId:1,tocIndex:0},{value:": \u6821\u9A8C\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"resetError",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\u3002",paraId:1,tocIndex:0},{value:"resetValue",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"setValue",paraId:1,tocIndex:0},{value:": \u8BBE\u7F6E\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getValue",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getRootElement",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:0},{value:"findItem",paraId:1,tocIndex:0},{value:`: \u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u65B9\u6CD5\u5982\u4E0B\u3002
`,paraId:1,tocIndex:0},{value:"getRootElement",paraId:2,tocIndex:0},{value:": \u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:2,tocIndex:0},{value:"scrollTo",paraId:1,tocIndex:0},{value:": \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BE6\u89C1",paraId:1,tocIndex:0},{value:"\u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E ScrollTo",paraId:3,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5982\u6839\u636E\u6821\u9A8C\u7ED3\u679C\u5224\u65AD\u662F\u5426\u63D0\u4EA4\u6570\u636E\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"() => Promise<IOpenValidateResult>",paraId:5,tocIndex:1},{value:"\u65E0",paraId:6,tocIndex:2},{value:"\u540D\u79F0",paraId:7,tocIndex:3},{value:"\u63CF\u8FF0",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"hasError",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u9519\u8BEF",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"hasWarning",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u8B66\u544A",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"errorList",paraId:7,tocIndex:3},{value:"\u9519\u8BEF\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"warningList",paraId:7,tocIndex:3},{value:"\u8B66\u544A\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"\u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\uFF0C\u5982\u6570\u636E\u56DE\u586B\u65F6\uFF0C\u53EF\u7528\u6B64\u65B9\u6CD5\u91CD\u7F6E\u9519\u8BEF\u4FE1\u606F",paraId:8,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:5},{value:"(paths?: string | string[]) => void",paraId:9,tocIndex:5},{value:"\u540D\u79F0",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"paths",paraId:10,tocIndex:6},{value:"\u91CD\u7F6E\u6307\u5B9A\u8DEF\u5F84\u7684\u8868\u5355\u9879\u9519\u8BEF\u63D0\u793A\uFF0C\u6CA1\u6709\u6307\u5B9A\u8DEF\u5F84\u5219\u91CD\u7F6E\u6240\u6709\u8868\u5355\u9879",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:" | ",paraId:10,tocIndex:6},{value:"string[]",paraId:10,tocIndex:6},{value:"\u65E0",paraId:11,tocIndex:7},{value:"\u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:12,tocIndex:9},{value:"\u65E0",paraId:13,tocIndex:10},{value:"\u65E0",paraId:14,tocIndex:11},{value:"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:15,tocIndex:13},{value:"\u7C7B\u578B\uFF1A",paraId:16,tocIndex:13},{value:"() => HTMLDivElement | null",paraId:16,tocIndex:13},{value:"\u65E0",paraId:17,tocIndex:14},{value:"\u6839\u8282\u70B9 DOM \u5143\u7D20\u6216\u7A7A",paraId:18,tocIndex:15},{value:"\u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u4F1A\u63D0\u4F9B\u4E00\u4E9B API \u65B9\u6CD5\u3002",paraId:19,tocIndex:17},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:17},{value:"(paths?: string | string[]) => IRendererInstance | undefined",paraId:20,tocIndex:17},{value:"\u540D\u79F0",paraId:21,tocIndex:18},{value:"\u63CF\u8FF0",paraId:21,tocIndex:18},{value:"\u7C7B\u578B",paraId:21,tocIndex:18},{value:"paths",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:" | ",paraId:21,tocIndex:18},{value:"string[]",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5F00\u653E API \u5982\u4E0B",paraId:22,tocIndex:19},{value:"\u540D\u79F0",paraId:23,tocIndex:19},{value:"\u63CF\u8FF0",paraId:23,tocIndex:19},{value:"\u7C7B\u578B",paraId:23,tocIndex:19},{value:"getRootElement",paraId:23,tocIndex:19},{value:"\u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20",paraId:23,tocIndex:19},{value:"() => HTMLElement | null",paraId:23,tocIndex:19}]},727:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(35786);const a=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},71789:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(69708);const a=[{value:"\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u5F53\u6355\u83B7\u5230\u9519\u8BEF\u7684\u65F6\u5019\u4F1A\u6807\u7EA2\u5C55\u793A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u4EA6\u53EF\u914D\u7F6E\u5982\u4E0B 2 \u4E2A\u53C2\u6570\u81EA\u5B9A\u4E49\u6216\u9690\u85CF\u9519\u8BEF\u63D0\u793A",paraId:0,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"\u51FD\u6570",paraId:1,tocIndex:0},{value:" \u5219\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F",paraId:1,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"silent",paraId:1,tocIndex:0},{value:" \u5219\u4E0D\u63D0\u793A\u9519\u8BEF",paraId:1,tocIndex:0}]},49961:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(96687);const a=[{value:"Core",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},47468:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(85105);const a=[{value:"\u53C2\u89C1",paraId:0,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u7C7B\u540D\u3002",paraId:2,tocIndex:2},{value:"\u8868\u5355\u9ED8\u8BA4\u503C\u3002",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5168\u5C40\u7981\u7528\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:4,tocIndex:4},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u3002",paraId:4,tocIndex:4},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:6,tocIndex:5},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:7,tocIndex:5},{value:"\u3002",paraId:6,tocIndex:5},{value:"\u8868\u5355\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:8,tocIndex:6},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:9,tocIndex:6},{value:"\u3002",paraId:8,tocIndex:6},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u5217\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:10,tocIndex:7},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:11,tocIndex:7},{value:"\u3002",paraId:10,tocIndex:7},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u6700\u5C0F\u5BBD\u5EA6\u4E0E\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53 layout \u4E3A autoFill\u3001autoFit \u65F6\u751F\u6548\uFF0C\u8BE6\u60C5\u89C1",paraId:12,tocIndex:8},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:13,tocIndex:8},{value:"\u3002",paraId:12,tocIndex:8},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u884C\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:14,tocIndex:9},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:15,tocIndex:9},{value:"\u3002",paraId:14,tocIndex:9},{value:"\u56FD\u9645\u5316\uFF0C\u8BE6\u60C5\u89C1",paraId:16,tocIndex:10},{value:"\u56FD\u9645\u5316 Locale",paraId:17,tocIndex:10},{value:"\u3002",paraId:16,tocIndex:10},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:18,tocIndex:11},{value:"onChange \u4E8B\u4EF6",paraId:19,tocIndex:11},{value:"\u3002",paraId:18,tocIndex:11},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:20,tocIndex:12},{value:"onItemChange \u4E8B\u4EF6",paraId:21,tocIndex:12},{value:"\u3002",paraId:20,tocIndex:12},{value:"\u6837\u5F0F\u7C7B\u540D\u524D\u7F00\uFF0C\u9ED8\u8BA4\u4E3A schema-render\u3002",paraId:22,tocIndex:13},{value:"\u662F\u5426\u5168\u5C40\u53EA\u8BFB\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:23,tocIndex:14},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:24,tocIndex:14},{value:"\u3002",paraId:23,tocIndex:14},{value:"\u6CE8\u518C\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:25,tocIndex:15},{value:"\u6E32\u67D3\u5668 Renderer",paraId:26,tocIndex:15},{value:"\u3002",paraId:25,tocIndex:15},{value:"Schema \u63CF\u8FF0\u534F\u8BAE\u3002",paraId:27,tocIndex:16},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u3002",paraId:28,tocIndex:17},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E\u3002",paraId:29,tocIndex:18},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:30,tocIndex:19},{value:"Global Validators",paraId:31,tocIndex:19},{value:"\u3002",paraId:30,tocIndex:19},{value:"\u8868\u5355\u6570\u636E\u3002",paraId:32,tocIndex:20},{value:"\u76D1\u542C\u6570\u636E\u53D8\u5316\u5904\u7406\u8054\u52A8\u903B\u8F91\uFF0C\u8BE6\u60C5\u89C1",paraId:33,tocIndex:21},{value:"\u6570\u636E\u8054\u52A8 watch \u65B9\u5F0F",paraId:34,tocIndex:21},{value:"\u3002",paraId:33,tocIndex:21}]},73890:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(2755);const a=[{value:"600 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"1800 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},21979:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(88485);const a=[]},98008:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(97024);const a=[]},15672:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(92311);const a=[{value:"\u89C1: ",paraId:0,tocIndex:1},{value:"Schema Transform",paraId:1,tocIndex:1}]},3215:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(78593);const a=[]},72624:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(25105);const a=[]},38319:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(35170);const a=[{value:"\u6709 ",paraId:0,tocIndex:1},{value:"value",paraId:0,tocIndex:1},{value:"\uFF0C\u6709 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u573A\u666F",paraId:0,tocIndex:1},{value:"\u6709 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\uFF0C\u65E0 ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u573A\u666F",paraId:1,tocIndex:2},{value:"\u6709 ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:"\uFF0C\u6709 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\uFF0C\u4F46 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:" \u4E0D\u66F4\u65B0\u503C\uFF0C\u975E\u6B63\u5E38\u573A\u666F",paraId:2,tocIndex:3},{value:"\u65E0 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\uFF0C\u65E0 ",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:" \u573A\u666F",paraId:3,tocIndex:4},{value:"\u65E0 ",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:"\uFF0C\u6709 ",paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:" \u573A\u666F",paraId:4,tocIndex:5}]},23352:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(12727);const a=[{value:"\u591A\u4E2A\u6E32\u67D3\u5668\u5185\u90E8\u540C\u65F6\u5728 ",paraId:0,tocIndex:0},{value:"useEffect",paraId:0,tocIndex:0},{value:" \u5185\u8C03\u7528 ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u65B9\u6CD5\u66F4\u65B0\uFF08\u521D\u59CB\u5316\uFF09\u6570\u636E\uFF0Cvalue \u503C\u9700\u8981\u662F\u6700\u65B0\u7684",paraId:0,tocIndex:0}]},17139:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(53143);const a=[{value:"disabledComponent",paraId:0,tocIndex:0},{value:" \u4E0E ",paraId:0,tocIndex:0},{value:"disabledFormItem",paraId:0,tocIndex:0},{value:" \u9A8C\u8BC1",paraId:0,tocIndex:0}]},44878:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(65063);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86\u5E03\u5C40\u7ED3\u6784\u4EE5\u53CA\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u4EE5\u8FBE\u5230 ",paraId:0,tocIndex:0},{value:"\u5F00\u7BB1\u5373\u7528",paraId:0,tocIndex:0},{value:" \u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u7EB5\u5411\u4E0E\u6A2A\u5411\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784\u53EF\u914D\u7F6E label \u5BBD\u5EA6\u7B49\u5185\u5BB9\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6807\u9898\u8BBE\u7F6E label",paraId:4,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C\u7279\u6027\uFF0C\u5982\u63D0\u4EA4\u3001\u91CD\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:5,tocIndex:0},{value:"\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5185\u7F6E\u6E32\u67D3\u5668 renderers",paraId:6,tocIndex:0},{value:`npm install @schema-render/form-render-react --save
`,paraId:7,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:8,tocIndex:1},{value:`npm install antd --save
`,paraId:9,tocIndex:1}]},8706:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(30761);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u7EB5\u5411\u4E0E\u6A2A\u5411\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5B9A\u5236\u3002",paraId:0,tocIndex:0},{value:"\u7EB5\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:1,tocIndex:1},{value:"vertical",paraId:1,tocIndex:1},{value:" \u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6A2A\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:2,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:2,tocIndex:2},{value:"horizontal",paraId:2,tocIndex:2},{value:" \u5373\u53EF\u3002",paraId:2,tocIndex:2},{value:"\u5B9A\u5236\u5E03\u5C40\u8BF7\u67E5\u770B ",paraId:3,tocIndex:3},{value:"Core \u6587\u6863",paraId:4,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]},39263:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(25937);const a=[{value:"label",paraId:0,tocIndex:0},{value:" \u76F8\u5173\u7684\u914D\u7F6E\u4E3B\u8981\u9488\u5BF9\u4E8E ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"horizontal",paraId:0,tocIndex:0},{value:" \u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u3001\u95F4\u8DDD\u3001\u5192\u53F7\u3001\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"labelWidth",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E \u201C\u6807\u9898\u5757\u201D \u7684\u5BBD\u5EA6\uFF0C\u652F\u6301 ",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:" \u4E0E ",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" \u7C7B\u578B\u3002",paraId:2,tocIndex:1},{value:"labelColon",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u63A7\u5236\u5192\u53F7\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u65E0\u3002",paraId:3,tocIndex:4},{value:"labelRender",paraId:4,tocIndex:5},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u201C\u6807\u9898\u5757\u201D\u7684\u6E32\u67D3\u5185\u5BB9\uFF0C\u5982\u5FC5\u586B ",paraId:4,tocIndex:5},{value:"*",paraId:4,tocIndex:5},{value:" \u53F7\u6807\u8BB0\u8C03\u6574\u4E3A ",paraId:4,tocIndex:5},{value:"(\u53EF\u9009)",paraId:4,tocIndex:5},{value:" \u8FD9\u6837\u7684\u5F62\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u540D\u79F0",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"labelWidth",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number | string",paraId:5,tocIndex:6},{value:"100",paraId:5,tocIndex:6},{value:"labelGap",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"15",paraId:5,tocIndex:6},{value:"labelColon",paraId:5,tocIndex:6},{value:"\u5B9A\u4E49 label \u5192\u53F7",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"labelRender",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:5,tocIndex:6},{value:"(params) => ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u62E5\u6709 ",paraId:6,tocIndex:7},{value:"labelWidth",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelGap",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelColon",paraId:6,tocIndex:7},{value:" \u5916\uFF0C\u8FD8\u62E5\u6709\u4EE5\u4E0B\u53C2\u6570\u3002",paraId:6,tocIndex:7},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"schema",paraId:7,tocIndex:7},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:7,tocIndex:7},{value:"ISchema",paraId:7,tocIndex:7},{value:"required",paraId:7,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"readonly",paraId:7,tocIndex:7},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"locale",paraId:7,tocIndex:7},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"userCtx",paraId:7,tocIndex:7},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"prefixClassNames",paraId:7,tocIndex:7},{value:"\u5BF9 ",paraId:7,tocIndex:7},{value:"classnames",paraId:7,tocIndex:7},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:7,tocIndex:7},{value:"(...args: classNames.ArgumentArray) => string",paraId:7,tocIndex:7}]},43811:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(91260);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4",paraId:0,tocIndex:0},{value:"\u4E0E",paraId:0,tocIndex:0},{value:"\u91CD\u7F6E",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\uFF0C\u76F8\u5173 API \u5982\u4E0B\u6587\u6240\u8FF0\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u300C\u63D0\u4EA4\u300D\u6309\u94AE\uFF0C\u6216\u5728\u8868\u5355\u5185\u6309\u4E0B\u56DE\u8F66\u952E\u89E6\u53D1\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:1},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6570\u636E",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u7684\u65F6\u5019\u89E6\u53D1\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:4,tocIndex:2},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:": \u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E",paraId:4,tocIndex:2},{value:"\u91CD\u7F6E\u4E8B\u4EF6\u652F\u6301\u5F02\u6B65\uFF0C\u6B64\u65F6\u6309\u94AE\u4F1A\u589E\u52A0 loading \u6548\u679C\u3002",paraId:5},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\u4F1A\u5728 ",paraId:6,tocIndex:3},{value:"onReset",paraId:6,tocIndex:3},{value:" \u4E4B\u524D\u89E6\u53D1\uFF0C\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61\u6570\u636E\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E\u3002",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:7,tocIndex:3},{value:"value",paraId:7,tocIndex:3},{value:": \u5F53\u524D\u8868\u5355\u6570\u636E",paraId:7,tocIndex:3},{value:"actions",paraId:8,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u662F\u5426\u5C55\u793A\u53CA\u5176\u987A\u5E8F\uFF0C\u9ED8\u8BA4 ",paraId:8,tocIndex:4},{value:"actions",paraId:8,tocIndex:4},{value:" \u7B49\u4E8E ",paraId:8,tocIndex:4},{value:"['submit', 'reset']",paraId:8,tocIndex:4},{value:"\u3002",paraId:8,tocIndex:4},{value:"\u652F\u6301\u5217\u8868\u5982\u4E0B\uFF1A",paraId:9,tocIndex:4},{value:"submit",paraId:10,tocIndex:4},{value:": \u63D0\u4EA4",paraId:10,tocIndex:4},{value:"reset",paraId:10,tocIndex:4},{value:": \u91CD\u7F6E",paraId:10,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:7},{value:"registerActions",paraId:11,tocIndex:7},{value:" \u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:11,tocIndex:7},{value:"\u64CD\u4F5C\u540D\u79F0\u662F ",paraId:12,tocIndex:8},{value:"submit",paraId:12,tocIndex:8},{value:"\u3001",paraId:12,tocIndex:8},{value:"reset",paraId:12,tocIndex:8},{value:"\uFF0C\u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A\uFF0C\u5982\u8986\u76D6\u63D0\u4EA4\u6309\u94AE\uFF0C\u589E\u52A0\u3010\u4E8C\u6B21\u786E\u8BA4\u3011\u7684\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u6DFB\u52A0\u56FE\u6807\u3002",paraId:12,tocIndex:8},{value:"registerActions",paraId:13,tocIndex:9},{value:" \u6CE8\u518C\u9879\u7684\u7C7B\u578B\u4E3A\uFF1A",paraId:13,tocIndex:9},{value:"(p: IRegisterActionsFnParams) => ReactNode",paraId:13,tocIndex:9},{value:"IRegisterActionsFnParams",paraId:14,tocIndex:9},{value:" \u53C2\u6570\u8BE6\u89E3\u5982\u4E0B\u8868\u683C",paraId:14,tocIndex:9},{value:"\u53C2\u6570",paraId:15,tocIndex:9},{value:"\u63CF\u8FF0",paraId:15,tocIndex:9},{value:"\u7C7B\u578B",paraId:15,tocIndex:9},{value:"handleSubmit",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"submit",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"handleReset",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"reset",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u4E8B\u4EF6\u7684 ",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:" \u72B6\u6001",paraId:15,tocIndex:9},{value:"{ submit: boolean; reset: boolean; }",paraId:15,tocIndex:9},{value:"disabled",paraId:15,tocIndex:9},{value:"\u5168\u5C40\u7981\u7528\u72B6\u6001",paraId:15,tocIndex:9},{value:"boolean",paraId:15,tocIndex:9},{value:"locale",paraId:15,tocIndex:9},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:9},{value:"object",paraId:15,tocIndex:9},{value:"submitText",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"resetText",paraId:15,tocIndex:9},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"\u53C2\u6570",paraId:16,tocIndex:10},{value:"\u63CF\u8FF0",paraId:16,tocIndex:10},{value:"\u7C7B\u578B",paraId:16,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:10},{value:"disableFormOnActionLoading",paraId:16,tocIndex:10},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10},{value:"validateFormOnSubmit",paraId:16,tocIndex:10},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10}]},14590:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(90261);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408",paraId:0,tocIndex:0},{value:"\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u5185\u7F6E\u6E32\u67D3\u5668\u7684\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 ",paraId:1},{value:"schema.renderOptions",paraId:1},{value:" \u4F20\u9012\uFF0C\u5BF9\u5E94 ",paraId:1},{value:"Antd",paraId:1},{value:" \u7EC4\u4EF6\u7684\u53C2\u6570\u3002",paraId:1},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u591A\u9879\u9009\u62E9\u5668\u7684\u5185\u5BB9\u662F\u901A\u8FC7",paraId:2,tocIndex:1},{value:"\u9017\u53F7",paraId:2,tocIndex:1},{value:"\u62FC\u63A5\u5728\u4E00\u8D77\u7684\uFF0C\u53C2\u8003 ",paraId:2,tocIndex:1},{value:"locale",paraId:2,tocIndex:1},{value:" \u7684 ",paraId:2,tocIndex:1},{value:"FormRender.comma",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:"\u975E Antd Descriptions \u7EC4\u4EF6\uFF0C\u65E0\u5165\u53C2\uFF0C\u4EC5\u4F5C\u7EAF\u6570\u636E\u5C55\u793A\u3002",paraId:3,tocIndex:2},{value:"v1.4.0",paraId:4,tocIndex:2},{value:"FormRender v1.4.0 \u5F00\u59CB\u652F\u6301 SwitchBox \u6E32\u67D3\u5668\uFF0C\u901A\u8FC7 ",paraId:5,tocIndex:3},{value:"renderOptions.text",paraId:5,tocIndex:3},{value:" \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:5,tocIndex:3},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:6,tocIndex:4},{value:"extra.checkedOptions",paraId:6,tocIndex:4},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:6,tocIndex:4},{value:"options",paraId:6,tocIndex:4},{value:" \u6570\u636E\u3002\u6848\u4F8B\u89C1",paraId:6,tocIndex:4},{value:"Checkbox \u9009\u4E2D\u503C\u8054\u52A8",paraId:7,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"v1.4.0",paraId:8,tocIndex:4},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:9,tocIndex:5},{value:"extra.selectedOptions",paraId:9,tocIndex:5},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:9,tocIndex:5},{value:"options",paraId:9,tocIndex:5},{value:" \u6570\u636E\u3002",paraId:9,tocIndex:5},{value:"v1.4.0",paraId:10,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:11,tocIndex:6},{value:"ISOString",paraId:11,tocIndex:6},{value:" \u683C\u5F0F\u7684\u65E5\u671F\u503C\uFF0C\u8BE5\u503C\u53EF\u4EE5\u66F4\u597D\u7684\u652F\u6301\u8DE8\u65F6\u533A\u7684\u9700\u8981\u3002",paraId:11,tocIndex:6},{value:"\u8FD4\u56DE ISOString \u683C\u5F0F\u7684\u65E5\u671F\u503C\u3002",paraId:12,tocIndex:7},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u6587\u6848\u5C55\u793A\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:13,tocIndex:7},{value:"locale",paraId:13,tocIndex:7},{value:" \u7684 ",paraId:13,tocIndex:7},{value:"FormRender.displayDateRange",paraId:13,tocIndex:7},{value:" \u6765\u81EA\u5B9A\u4E49\u3002",paraId:13,tocIndex:7},{value:"renderOptions.headerOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5934\u90E8\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"renderOptions.panelOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5185\u5BB9\u9762\u677F\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse.Panel",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF0C\u5E94\u7528\u573A\u666F\uFF1A\u6B65\u9AA4\u8868\u5355\u3002",paraId:15,tocIndex:9},{value:"\u63A5\u53D7 ",paraId:16,tocIndex:9},{value:"className",paraId:16,tocIndex:9},{value:" \u548C ",paraId:16,tocIndex:9},{value:"style",paraId:16,tocIndex:9},{value:" \u5C5E\u6027\u3002",paraId:16,tocIndex:9}]},93076:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(4123);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},24426:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(74624);const a=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"Core",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"rootClassName",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"rootStyle",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"itemLayout",paraId:1,tocIndex:0},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784",paraId:1,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"vertical",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"React.ComponentType<IOpenItemLayoutParams>",paraId:2,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:"readonlyPlaceholder",paraId:1,tocIndex:0},{value:"\u53EA\u8BFB\u72B6\u6001\u6CA1\u6709\u6570\u636E\u65F6\u7684\u5360\u4F4D\u7B26\uFF0C",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"undefined",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"\u7A7A\u5B57\u7B26\u4E32",paraId:1,tocIndex:0},{value:" \u4F1A\u88AB\u5224\u5B9A\u4E3A\u7A7A\u6570\u636E",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelWidth",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\uFF08\u6807\u9898\u5757\uFF09\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"100",paraId:1,tocIndex:0},{value:"labelColon",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u5192\u53F7",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelGap",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"15",paraId:1,tocIndex:0},{value:"labelRender",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:1,tocIndex:0},{value:"(params) => ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:'["submit", "reset"]',paraId:1,tocIndex:0},{value:"registerActions",paraId:1,tocIndex:0},{value:"\u6CE8\u518C\u64CD\u4F5C\u884C\u4E3A\uFF0C\u5982\u679C\u662F submit\u3001reset \u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A",paraId:1,tocIndex:0},{value:"IRegisterActions",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"disableFormOnActionLoading",paraId:1,tocIndex:0},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"validateFormOnSubmit",paraId:1,tocIndex:0},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"submitText",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"resetText",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onSubmit",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onBeforeReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\uFF0C\u5982\u679C\u8FD4\u56DE\u6570\u636E\uFF0C\u5219\u4F5C\u4E3A\u65B0\u6570\u636E\u586B\u5165\u8868\u5355",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},64092:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(83140);const a=[{value:"\u901A\u8FC7\u5728 ",paraId:0,tocIndex:0},{value:"Schema",paraId:0,tocIndex:0},{value:" \u4E0A\u6307\u5B9A ",paraId:0,tocIndex:0},{value:"span",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"spanStart",paraId:0,tocIndex:0},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:0,tocIndex:0},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"\u4F4D\u7F6E",paraId:0,tocIndex:0},{value:"\uFF0C\u8BE6\u60C5\u89C1",paraId:0,tocIndex:0},{value:"\u6805\u683C\u5E03\u5C40-\u81EA\u5B9A\u4E49\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0}]},75796:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(34877);const a=[{value:"\u6B65\u9AA4\u8868\u5355\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u90FD\u7531 FormRender \u6E32\u67D3\uFF0C\u901A\u8FC7 hidden \u5C5E\u6027\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u6570\u636E\u5728\u4E00\u4E2A FormRender \u5B9E\u4F8B\u91CC\uFF0C\u6821\u9A8C\u65B9\u6CD5\u53EA\u8C03\u7528\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u6709\u53D8\u5316\uFF0C\u9700\u8981\u5C06\u8868\u5355\u9879\u653E\u5728 Object \u5BF9\u8C61\u91CC",paraId:2,tocIndex:0},{value:"\u6E32\u67D3\u591A\u4E2A FormRender \u5B9E\u4F8B",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u65E0\u53D8\u5316",paraId:3,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u6821\u9A8C\u65B9\u6CD5\u9700\u8981\u8C03\u7528\u591A\u4E2A\uFF0C\u6700\u7EC8\u7684\u6570\u636E\u9700\u8981\u5408\u5E76\u5728\u4E00\u8D77",paraId:3,tocIndex:0},{value:"\u4E0B\u9762\u793A\u4F8B\u7B2C\u4E00\u79CD\u65B9\u6848",paraId:4,tocIndex:0}]},2131:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(45011);const a=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\uFF0C\u6821\u9A8C\u4E0D\u89E6\u53D1\u3002",paraId:1,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u65F6\uFF0C\u672A\u8F93\u5165\u5931\u8D25\u539F\u56E0\u9700\u8981\u89E6\u53D1\u6821\u9A8C\u3002",paraId:1,tocIndex:0},{value:"\u6280\u672F\u5B9E\u73B0",paraId:2,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: false",paraId:3,tocIndex:0},{value:" \u8FBE\u5230\u4E0D\u89E6\u53D1\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u6E05\u695A\u5DF2\u6709\u7684\u9519\u8BEF\u63D0\u793A\u3002",paraId:3,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u8F93\u5165\u6846\u8F93\u5165\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: true",paraId:3,tocIndex:0},{value:" \u89E6\u53D1\u6821\u9A8C\u3002",paraId:3,tocIndex:0}]},98685:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(6168);const a=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u5B58\u5728\u6700\u5C0F\u957F\u5EA6\u6821\u9A8C\u65F6\uFF0C\u5E0C\u671B\u5728\u8F93\u5165\u7684\u65F6\u5019\u4E0D\u6821\u9A8C\u6570\u636E\uFF0C\u5728\u5931\u53BB\u7126\u70B9\uFF08",paraId:1,tocIndex:0},{value:"onBlur",paraId:1,tocIndex:0},{value:"\uFF09\u65F6\u624D\u6821\u9A8C\u6570\u636E\u6B63\u786E\u6027\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u901A\u8FC7\u5728 renderOptions \u4E0A\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"validateOnBlur: true",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u53EF\u5B9E\u73B0\u4E0A\u8FF0\u9700\u6C42\u3002",paraId:3,tocIndex:0},{value:`\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5185\u7F6E\u6E32\u67D3\u5668\u6709\uFF1A
`,paraId:3,tocIndex:0},{value:"InputText",paraId:4,tocIndex:0},{value:"InputNumber",paraId:4,tocIndex:0},{value:"Password",paraId:4,tocIndex:0},{value:"TextArea",paraId:4,tocIndex:0}]},9046:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(6882);const a=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5F53\u8868\u5355\u9879\u8FC7\u591A\u65F6\u5BB9\u5668\u5B58\u5728\u6EDA\u52A8\u6761\uFF0C\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u65F6\u5E94\u8BE5\u5B9A\u4F4D\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8868\u5355\u9879\u4EE5\u63D0\u9192\u7528\u6237\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:0},{value:"validate",paraId:3,tocIndex:0},{value:" \u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5F97\u5230\u9519\u8BEF\u9879\u6570\u636E\uFF0C\u518D\u901A\u8FC7 ",paraId:3,tocIndex:0},{value:"scrollTo",paraId:3,tocIndex:0},{value:" \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u3002",paraId:3,tocIndex:0}]},7669:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(88358);const a=[{value:"\u67D0\u4E2A\u8868\u5355\u9879\u9009\u4E2D\u540E\u7684\u503C\u8054\u52A8\u5230\u5176\u4ED6\u8868\u5355\u9879\u4F7F\u7528\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668",paraId:1,tocIndex:0},{value:" + ",paraId:1,tocIndex:0},{value:"userCtx",paraId:1,tocIndex:0},{value:" \u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u901A\u8FC7\u4FEE\u6539 ",paraId:1,tocIndex:0},{value:"Schema",paraId:1,tocIndex:0},{value:" \u7684 ",paraId:1,tocIndex:0},{value:"renderOptions",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:2,tocIndex:1},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:3,tocIndex:2}]},15577:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(73888);const a=[{value:"\u4E0E Checkbox \u6E32\u67D3\u5668\u4E00\u6837\uFF0C\u4E0D\u8FC7\u5B57\u6BB5\u540D\u662F ",paraId:0,tocIndex:0},{value:"selectedOptions",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:1,tocIndex:1}]},2531:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(73914);const a=[{value:"100 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"300 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},26875:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(64768);const a=[{value:"\u652F\u6301 ",paraId:0,tocIndex:1},{value:"warning",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"error",paraId:0,tocIndex:1},{value:" \u6837\u5F0F",paraId:0,tocIndex:1}]},18335:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(87004);const a=[{value:"\u5192\u53F7\u8BBE\u7F6E",paraId:0,tocIndex:1}]},9034:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(43895);const a=[{value:"\u5185\u6838\u7075\u6D3B\u3001\u9AD8\u53EF\u5B9A\u5236\uFF0C\u4F46\u9700\u8981\u7EC4\u88C5\u5FC5\u8981\u90E8\u4EF6 ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:0,tocIndex:0},{value:"renderers",paraId:0,tocIndex:0},{value:`\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\uFF0C
\u7136\u540E\u901A\u8FC7\u4E00\u5957 Schema \u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u7684\u8868\u5355\u3002`,paraId:0,tocIndex:0},{value:"FormRender",paraId:1,tocIndex:1},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:1,tocIndex:1},{value:"renderers",paraId:1,tocIndex:1},{value:"\uFF08\u5E38\u7528\u8868\u5355\u7C7B\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4EE5\u53CA\u63D0\u4EA4\u91CD\u7F6E\u64CD\u4F5C\uFF0C\u4EE5\u8FBE\u5230",paraId:1,tocIndex:1},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"Search",paraId:2,tocIndex:2},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:2,tocIndex:2}]},23652:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(67342);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4 ",paraId:2,tocIndex:0},{value:"layout",paraId:2,tocIndex:0},{value:" \u4E3A ",paraId:2,tocIndex:0},{value:"autoFill",paraId:2,tocIndex:0},{value:" \u5E03\u5C40",paraId:2,tocIndex:0},{value:"\u589E\u52A0\u6298\u53E0\u5C55\u5F00\u529F\u80FD\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:3,tocIndex:0},{value:`npm install @schema-render/search-react --save
`,paraId:4,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:5,tocIndex:1},{value:`npm install antd --save
`,paraId:6,tocIndex:1},{value:"\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:7,tocIndex:2}]},26138:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(27885);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u7B49\u76F8\u5173 API \u5916\uFF0C\u8FD8\u589E\u52A0\u4E86\u6298\u53E0\u4E0E\u5C55\u5F00\u64CD\u4F5C\u884C\u4E3A\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8868\u5355\u9879\u8D85\u8FC7 ",paraId:1,tocIndex:1},{value:"2",paraId:1,tocIndex:1},{value:" \u884C\u5C31\u4F1A\u6298\u53E0\uFF0C",paraId:1,tocIndex:1},{value:"onToggleCollapsed",paraId:1,tocIndex:1},{value:" \u662F\u6298\u53E0\u5C55\u5F00\u4E8B\u4EF6\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"actions",paraId:2,tocIndex:2},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:2,tocIndex:2},{value:"string[]",paraId:2,tocIndex:2},{value:'["reset", "submit", "collapse"]',paraId:2,tocIndex:2},{value:"defaultCollapsed",paraId:2,tocIndex:2},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"collapsedRows",paraId:2,tocIndex:2},{value:"\u6298\u53E0\u884C\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"2",paraId:2,tocIndex:2},{value:"calcCollapsedNumber",paraId:2,tocIndex:2},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:2,tocIndex:2},{value:"container",paraId:2,tocIndex:2},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:2,tocIndex:2},{value:"(container?: HTMLElement) => number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"onToggleCollapsed",paraId:2,tocIndex:2},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"(isCollapsed: boolean) => void",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2}]},51001:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(10122);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},13086:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(84123);const a=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["reset", "submit", "collapse"]',paraId:1,tocIndex:0},{value:"defaultCollapsed",paraId:1,tocIndex:0},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"collapsedRows",paraId:1,tocIndex:0},{value:"\u6298\u53E0\u884C\u6570",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"2",paraId:1,tocIndex:0},{value:"calcCollapsedNumber",paraId:1,tocIndex:0},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:1,tocIndex:0},{value:"container",paraId:1,tocIndex:0},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:1,tocIndex:0},{value:"(container?: HTMLElement) => number",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onToggleCollapsed",paraId:1,tocIndex:0},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(isCollapsed: boolean) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},31626:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(24197);const a=[{value:"\u5206\u7C7B\u6807\u9898\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 Object \u5BF9\u8C61\u6E32\u67D3\u5668\uFF0C\u4F1A\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E\u5206\u7C7B\u6807\u9898\u8868\u5355\u9879\u5360\u6EE1\u4E00\u884C\uFF0C\u4E0D\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0}]},60031:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(69306);const a=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u4E3B\u8981\u7279\u6027\u6709\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u7B80\u5355\u3001\u5F00\u7BB1\u5373\u7528",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u7A7A\u6570\u636E\u5360\u4F4D\u7B26\u5904\u7406",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u5217\u5BBD\u5EA6\u5904\u7406",paraId:2,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF08\u4E00\u5C4F\u5C55\u793A\uFF09\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u9AD8\u5EA6\u81EA\u9002\u5E94 AutoScrollY",paraId:3,tocIndex:0},{value:"\u652F\u6301\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:4,tocIndex:0},{value:"\u652F\u6301\u914D\u7F6E\u5F0F\u64CD\u4F5C\u680F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:5,tocIndex:0},{value:"\u652F\u6301\u5E38\u89C1\u6570\u636E\u7C7B\u578B\u663E\u793A\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6570\u636E\u663E\u793A Value Type",paraId:6,tocIndex:0},{value:"\u652F\u6301\u524D\u7AEF\u6392\u5E8F\uFF1A\u6309\u62FC\u97F3\u3001\u6570\u5B57\u3001\u65E5\u671F\u683C\u5F0F\u6392\u5E8F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6392\u5E8F Sort",paraId:7,tocIndex:0},{value:"\u652F\u6301\u201C\u5408\u8BA1\u680F\u201D\uFF0C\u901A\u8FC7\u6570\u636E\u81EA\u52A8\u5339\u914D\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5408\u8BA1\u680F Summary",paraId:8,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u9690\u85CF\u663E\u793A\u3001\u6392\u5E8F\u3001\u5BBD\u5EA6\u8BBE\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:9,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u8BBE\u7F6E\u6301\u4E45\u5316\u5B58\u50A8\u4E0E\u5408\u5E76\u7B97\u6CD5\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:10,tocIndex:0},{value:`npm install @schema-render/search-table-react --save
`,paraId:11,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:12,tocIndex:1},{value:`npm install antd --save
`,paraId:13,tocIndex:1},{value:"\u57FA\u672C\u7528\u6CD5\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E09\u4E2A\u5C5E\u6027",paraId:14,tocIndex:2},{value:"schema",paraId:15,tocIndex:2},{value:": \u641C\u7D22\u7684\u6761\u4EF6\uFF0C\u8BE6\u89E3 ",paraId:15,tocIndex:2},{value:"Search",paraId:16,tocIndex:2},{value:" \u7EC4\u4EF6\u3002",paraId:15,tocIndex:2},{value:"columns",paraId:15,tocIndex:2},{value:": \u8868\u683C\u5217\u5C5E\u6027\uFF0C\u9664 ",paraId:15,tocIndex:2},{value:"Antd Table columns",paraId:15,tocIndex:2},{value:` \u5C5E\u6027\u5916\uFF0C\u6269\u5C55\u7684\u5C5E\u6027\u89C1 API Reference\u3002
`,paraId:15,tocIndex:2},{value:"\u6CE8\uFF1A",paraId:17,tocIndex:2},{value:"dataIndex",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u9700\u4FDD\u6301\u552F\u4E00\u6027\uFF0C",paraId:17,tocIndex:2},{value:"key",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u53EF\u7701\u7565\u3002",paraId:17,tocIndex:2},{value:"request",paraId:15,tocIndex:2},{value:`: \u8BF7\u6C42\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u6765\u8BF7\u6C42\u540E\u7AEF\u6570\u636E\u63A5\u53E3\uFF0C\u5E76\u6309\u683C\u5F0F\u8FD4\u56DE\u3002
`,paraId:15,tocIndex:2},{value:`\u53C2\u6570\u9664 schema \u58F0\u660E\u7684\u5B57\u6BB5\u5916\uFF0C\u8FD8\u5305\u62EC\u5206\u9875\u5B57\u6BB5\u3002
`,paraId:18,tocIndex:2},{value:"current",paraId:19,tocIndex:2},{value:": \u5F53\u524D\u9875\u7801\u3002",paraId:19,tocIndex:2},{value:"pageSize",paraId:19,tocIndex:2},{value:": \u6BCF\u9875\u6761\u6570\u3002",paraId:19,tocIndex:2},{value:`\u8FD4\u56DE\u5B57\u6BB5\u5982\u4E0B\u3002
`,paraId:18,tocIndex:2},{value:"data",paraId:20,tocIndex:2},{value:": \u8868\u683C\u6570\u636E\u6E90\uFF0C\u5BF9\u5E94 Antd Table \u7684 ",paraId:20,tocIndex:2},{value:"dataSource",paraId:20,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:20,tocIndex:2},{value:"total",paraId:20,tocIndex:2},{value:": \u603B\u7684\u8BB0\u5F55\u6570\uFF0C\u5E94\u7528\u4E8E\u5206\u9875\u3002",paraId:20,tocIndex:2},{value:"summary",paraId:20,tocIndex:2},{value:": \u5408\u8BA1\u680F\u6570\u636E\uFF0C\u8BE6\u89C1 ",paraId:20,tocIndex:2},{value:"\u5408\u8BA1\u680F Summary",paraId:21,tocIndex:2},{value:"\u3002",paraId:20,tocIndex:2}]},12952:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(72106);const a=[{value:"\u901A\u8FC7\u6DFB\u52A0 ",paraId:0,tocIndex:1},{value:"showRowNumber",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\uFF0C\u53EF\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\u5217\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"rowNumberColumnData",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u914D\u7F6E\u5E8F\u53F7\u5217\u5C5E\u6027\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"Antd Table columns",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:1,tocIndex:2},{value:"\u58F0\u660E ",paraId:2,tocIndex:3},{value:"actionItems",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\uFF0C\u5C06\u6DFB\u52A0\u64CD\u4F5C\u5217\uFF0C\u53C2\u6570\u8BE6\u89E3\u89C1\u6587\u5E95\u3010actionItems \u53C2\u6570\u8BE6\u89E3\u3011\u3002",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6570\u91CF\u8D85\u8FC7\u9608\u503C\uFF0C\u5C06\u4EE5",paraId:3,tocIndex:4},{value:"\u201C\u66F4\u591A\u201D",paraId:3,tocIndex:4},{value:"\u5F62\u5F0F\u4EA4\u4E92\uFF0C\u9ED8\u8BA4\u9608\u503C\u4E3A ",paraId:3,tocIndex:4},{value:"2",paraId:3,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"actionItemsCount",paraId:3,tocIndex:4},{value:" \u4FEE\u6539\u9608\u503C\u3002",paraId:3,tocIndex:4},{value:"\u4E0B\u62C9\u6846\u5C5E\u6027\u53EF\u901A\u8FC7 ",paraId:4,tocIndex:4},{value:"actionItemsDropdownProps",paraId:4,tocIndex:4},{value:" \u914D\u7F6E\uFF0C\u5BF9\u5E94 Antd ",paraId:4,tocIndex:4},{value:"Dropdown",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u3002",paraId:4,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:5},{value:"actionItemsColumnData",paraId:5,tocIndex:5},{value:" \u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u5217\u5C5E\u6027\uFF0C\u540C\u6837\u5BF9\u5E94 Antd Table columns \u503C\u3002",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"record",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u6570\u636E",paraId:6,tocIndex:7},{value:"Record<string, any>",paraId:6,tocIndex:7},{value:"index",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u7D22\u5F15",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"\u9664\u4E86 Antd ",paraId:7,tocIndex:8},{value:"Button",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u5982\u4E0B\u53C2\u6570\u3002",paraId:7,tocIndex:8},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"text",paraId:8,tocIndex:8},{value:"\u64CD\u4F5C\u6587\u6848",paraId:8,tocIndex:8},{value:"string | ReactNode",paraId:8,tocIndex:8},{value:"isShow",paraId:8,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmAgain",paraId:8,tocIndex:8},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmProps",paraId:8,tocIndex:8},{value:"\u4E8C\u6B21\u786E\u8BA4\u5C5E\u6027\uFF0C\u5BF9\u5E94 Antd ",paraId:8,tocIndex:8},{value:"Popconfirm",paraId:8,tocIndex:8},{value:" \u5C5E\u6027",paraId:8,tocIndex:8},{value:"object",paraId:8,tocIndex:8},{value:"onClick",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE Promise \u5C06\u6DFB\u52A0 loading \u6548\u679C",paraId:8,tocIndex:8},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",paraId:8,tocIndex:8}]},10198:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(17258);const a=[{value:"\u8868\u683C\u7684 ",paraId:0,tocIndex:1},{value:"autoScrollY",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5176\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4EE5\u5B9E\u73B0\u201C\u4E00\u5C4F\u201D\u663E\u793A\u6548\u679C\uFF0C\u800C\u4E0D\u51FA\u73B0\u9875\u9762\u7EA7\u6EDA\u52A8\u6761\u3002",paraId:0,tocIndex:1},{value:"\u5F00\u542F ",paraId:1,tocIndex:1},{value:"autoScrollY",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u540E\uFF0CAntd Table \u7684 ",paraId:1,tocIndex:1},{value:"scroll.y",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1 ",paraId:1,tocIndex:1},{value:"SearchTable",paraId:1,tocIndex:1},{value:" \u6839\u8282\u70B9\u5143\u7D20\u5B58\u5728\u56FA\u5B9A\u9AD8\u5EA6\u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6DFB\u52A0 ",paraId:2,tocIndex:2},{value:"header",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"footer",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleTop",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleBottom",paraId:2,tocIndex:2},{value:" \u5B50\u8282\u70B9\u6548\u679C\u3002",paraId:2,tocIndex:2}]},51184:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(73865);const a=[{value:"\u5185\u7F6E\u201C\u5408\u8BA1\u201D\u6570\u636E\u663E\u793A\u529F\u80FD\uFF0C\u53EA\u9700\u5728 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u91CC\u8FD4\u56DE ",paraId:0,tocIndex:1},{value:"summaryData",paraId:0,tocIndex:1},{value:" \u6570\u636E\u5373\u53EF\uFF0C\u6570\u636E\u5B57\u6BB5\u5BF9\u5E94\u8868\u683C\u5217\u7684 ",paraId:0,tocIndex:1},{value:"dataIndex",paraId:0,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5408\u8BA1\u6570\u636E\u7684\u4F4D\u7F6E\u5C06\u6839\u636E\u6B64\u5BF9\u5E94\u5173\u7CFB\u81EA\u52A8\u8BA1\u7B97\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"summaryText",paraId:1,tocIndex:2},{value:" \u53EF\u5B9A\u4E49 ",paraId:1,tocIndex:2},{value:"\u5408\u8BA1",paraId:1,tocIndex:2},{value:" \u6587\u6848\uFF0C\u4F1A\u5728\u5E8F\u53F7\u680F\u663E\u793A\u3002",paraId:1,tocIndex:2},{value:"\u53EA\u6709",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:3},{value:" \u4E0E ",paraId:3},{value:"\u5E8F\u53F7\u680F",paraId:3},{value:" \u540C\u65F6\u5B58\u5728\u3002",paraId:3},{value:"\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u201C\u5408\u8BA1\u201D \u6587\u6848\u5360\u636E\u4E24\u4E2A\u5355\u5143\u683C\u3002",paraId:4}]},59418:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(81535);const a=[{value:"sortMode",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u63A7\u5236\u662F",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\u8FD8\u662F",paraId:0,tocIndex:0},{value:"\u540E\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\uFF0C\u53D6\u503C\u6709\u56DB\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"local",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"local-all",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5\uFF0C\u4E14\u6309\u6570\u636E\u7C7B\u578B\u81EA\u52A8\u5E94\u7528\u6392\u5E8F\u65B9\u6848",paraId:1,tocIndex:0},{value:"service",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"service-all",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5",paraId:1,tocIndex:0},{value:"\u5728\u5217\u4E0A\u58F0\u660E ",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u5C31\u4F1A\u6DFB\u52A0\u6392\u5E8F\u529F\u80FD\uFF1B",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u53D6\u503C\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A",paraId:2,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"number",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u6570\u503C\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"date",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u65E5\u671F\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u6392\u5E8F\u6570\u636E\u503C\u662F\u901A\u8FC7\u5217\u7684 ",paraId:4,tocIndex:1},{value:"dataIndex",paraId:4,tocIndex:1},{value:" \u83B7\u53D6\uFF0C\u5982\u679C\u6570\u636E\u590D\u6742\uFF0C\u5219\u9700\u8981\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"sortDataExtractor",paraId:4,tocIndex:1},{value:" \u5C5E\u6027\u83B7\u53D6\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"sortDataExtractor: (record: IObjectAny) => string | number | void",paraId:5,tocIndex:1},{value:"\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:6,tocIndex:2},{value:"sortMode",paraId:6,tocIndex:2},{value:" \u5C5E\u6027\u4E3A ",paraId:6,tocIndex:2},{value:"local-all",paraId:6,tocIndex:2},{value:"\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5217\u5B57\u6BB5\u90FD\u5C06\u8FDB\u884C\u6392\u5E8F\uFF08\u6392\u9664\u5E8F\u53F7\u3001\u64CD\u4F5C\u7B49\u65E0\u5173\u5217\uFF09\u3002",paraId:6,tocIndex:2},{value:"\u6392\u5E8F\u7684\u65B9\u5F0F\u5C06\u4EE5\u6570\u636E\u7684\u7C7B\u578B\u8FDB\u884C\u81EA\u52A8\u5224\u65AD\uFF0C\u5F53\u7136\u5224\u65AD\u9519\u8BEF\u65F6\uFF0C\u5219\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u6392\u5E8F\u7C7B\u578B ",paraId:7,tocIndex:2},{value:"sortType",paraId:7,tocIndex:2},{value:" \u503C\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301\u5D4C\u5957\u8868\u5934\u6392\u5E8F\u3002",paraId:8,tocIndex:3},{value:"\u8981\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u8F6C\u62FC\u97F3\u7684\u89E3\u6790\u5E93\uFF0C\u5982 ",paraId:9,tocIndex:4},{value:"pinyin-pro",paraId:9,tocIndex:4},{value:"\u3002",paraId:9,tocIndex:4},{value:"\u518D\u901A\u8FC7 ",paraId:10,tocIndex:4},{value:"sortStringValueTransform",paraId:10,tocIndex:4},{value:" \u5C5E\u6027\u5C06\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u8F6C\u6362\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\u4E86\u3002",paraId:10,tocIndex:4},{value:"\u8BBE\u7F6E ",paraId:11,tocIndex:5},{value:"sortMode",paraId:11,tocIndex:5},{value:" \u5C5E\u6027\u4E3A ",paraId:11,tocIndex:5},{value:"service",paraId:11,tocIndex:5},{value:"\uFF0C\u5219\u8868\u793A\u540E\u7AEF\u63A5\u53E3\u6392\u5E8F\uFF0C\u5C06\u8C03\u7528 ",paraId:11,tocIndex:5},{value:"request",paraId:11,tocIndex:5},{value:" \u8BF7\u6C42\u3002",paraId:11,tocIndex:5}]},49329:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(18899);const a=[{value:"title.tabs",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u5B9A\u4E49\u6807\u7B7E\u9875\u5207\u6362\u529F\u80FD\uFF0C\u5207\u6362\u540E\u4F1A\u518D\u6B21\u8C03\u7528 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u51FD\u6570\u3002API \u4E0E Antd ",paraId:0,tocIndex:1},{value:"Tabs",paraId:0,tocIndex:1},{value:" \u7EC4\u4EF6\u4E00\u81F4\u3002",paraId:0,tocIndex:1},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showSetting",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5217\u8BBE\u7F6E\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showRefresh",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5237\u65B0\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u4EC5\u663E\u793A\u5217\u8BBE\u7F6E\u4E0E\u5237\u65B0\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6DFB\u52A0\u7C7B\u540D\u5220\u9664\u3002",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"leftExtraContent",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6309\u9700\u5220\u9664\u3002",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"rightExtraContent",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9\u3002",paraId:4,tocIndex:6}]},78323:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(87922);const a=[{value:"\u4E3A\u4E86\u63D0\u5347\u4E00\u4E9B\u5E38\u89C4\u6570\u636E\u5185\u5BB9\u7684\u6E32\u67D3\u7814\u53D1\u6548\u7387\uFF0C\u5982\u6570\u5B57\u91D1\u989D\u5343\u5206\u4F4D\u5904\u7406\u3001\u56FE\u7247\u663E\u793A\u3001\u4EE3\u7801\u5757\u663E\u793A\u7B49\uFF0CSearchTable \u6269\u5C55\u4E86 Antd Table \u7EC4\u4EF6\u7684 ",paraId:0,tocIndex:0},{value:"column",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u53EA\u9700\u58F0\u660E ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"comma-number",paraId:0,tocIndex:0},{value:"\uFF0C\u6570\u636E\u7684\u663E\u793A\u5C31\u4F1A\u81EA\u52A8\u505A\u5343\u5206\u4F4D\u5904\u7406\u3002",paraId:0,tocIndex:0},{value:"\u51FD\u6570\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF0C\u5F69\u8272\u6807\u7B7E\u3002",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u6570\u636E\u503C\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u4F20\u53C2\u8BF4\u660E",paraId:2,tocIndex:2},{value:"code",paraId:2,tocIndex:2},{value:"\u4EE3\u7801\u5757\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rate",paraId:2,tocIndex:2},{value:"\u8BC4\u5206\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"Antd Rate \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"switch",paraId:2,tocIndex:2},{value:"\u5F00\u5173\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"boolean | 1 | 0",paraId:2,tocIndex:2},{value:"Antd Switch \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"images",paraId:2,tocIndex:2},{value:"\u56FE\u7247\u9884\u89C8\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Image \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"tags",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u5F62\u5F0F",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Tag \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"comma-number",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"percent",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u52A0\u767E\u5206\u53F7\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"long-text",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848 tooltip \u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Tooltip \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"long-text-modal",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848\u70B9\u51FB\u5F39\u7A97\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Modal \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"registerValueType",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u663E\u793A\u7C7B\u578B\uFF0C\u540C\u540D\u5C06\u8986\u76D6\u3002",paraId:3,tocIndex:3}]},66376:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(8497);const a=[{value:"\u6253\u5F00 ",paraId:0,tocIndex:1},{value:"showSetting",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5C06\u5F00\u542F\u5217\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u89E6\u53D1\u6309\u94AE\u5728\u6807\u9898\u680F\u6700\u53F3\u4FA7\u3002",paraId:0,tocIndex:1},{value:"\u56FA\u5B9A\u5217\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u9700\u8981\u957F\u4E45\u7684\u5B58\u50A8\u7528\u6237\u6392\u5E8F\u8BBE\u7F6E\uFF0C\u518D\u6B21\u6253\u5F00\u7684\u65F6\u5019\u4FDD\u6301\u4E0A\u4E00\u6B21\u5B58\u50A8\u7684\u6392\u5E8F\u8BBE\u7F6E\u3002",paraId:2,tocIndex:5},{value:"onSettingChanged",paraId:3,tocIndex:5},{value:": \u5F53\u70B9\u51FB\u5217\u8BBE\u7F6E\u7684\u3010\u786E\u5B9A\u3011\u6309\u94AE\u540E\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u6BCF\u6B21\u6392\u5E8F\u540E\u7684\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"getSetting",paraId:3,tocIndex:5},{value:": \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u540E\u4F1A\u6267\u884C\u4E00\u6B21\u8BE5\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5B58\u50A8\u7684\u6392\u5E8F\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"settingColumnsMergeAlgo",paraId:3,tocIndex:5},{value:": \u81EA\u5B9A\u4E49\u5B58\u50A8\u7684\u5217\u6570\u636E\u4E0E\u5F53\u524D\u5217\u6570\u636E\u7684\u5408\u5E76\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7B97\u6CD5\u662F\u6309\u7167\u5B58\u50A8\u7684\u5217\u6570\u636E\u6392\u5E8F\uFF0C\u8FC7\u6EE4\u5DF2\u7ECF\u5220\u9664\u7684\u5217\uFF0C\u65B0\u7684\u5217\u653E\u7F6E\u5728\u6700\u540E\u3002",paraId:3,tocIndex:5},{value:"\u4E1A\u52A1\u573A\u666F",paraId:4,tocIndex:6},{value:"\u4E0D\u540C\u5206\u7C7B\u7684 Tabs \u5207\u6362\u65F6\uFF0C\u8868\u683C\u5217\u6570\u636E\u662F\u4E0D\u540C\u7684\uFF0C\u5217\u6570\u636E\u5B58\u50A8\u548C\u83B7\u53D6\u4E5F\u4E0D\u540C\u3002",paraId:5,tocIndex:6},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:6,tocIndex:6},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u5B9E\u73B0 Tabs \u5207\u6362\u65F6\u91CD\u65B0\u83B7\u53D6\u5B58\u50A8\u6570\u636E\u5B9E\u73B0\u3002",paraId:7,tocIndex:6},{value:"\u6BCF\u6B21 ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u53D8\u5316\u4F1A\u8C03\u4E00\u6B21 ",paraId:7,tocIndex:6},{value:"getSetting",paraId:7,tocIndex:6},{value:" \u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u4E0D\u540C\u7684\u6570\u636E\u3002",paraId:7,tocIndex:6},{value:"\u6570\u636E\u590D\u6742\u7E41\u591A\u7684\u60C5\u51B5\uFF0C\u8868\u5934\u53EF\u4EE5\u7531\u540E\u7AEF\u8FD4\u56DE\uFF0C\u51CF\u5C11\u524D\u540E\u7AEF\u5B57\u6BB5\u5BF9\u9F50\u7684\u6210\u672C\u3002",paraId:8,tocIndex:7}]},5664:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(90749);const a=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},95378:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(27490);const a=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:"\u6570\u636E\u8BF7\u6C42\u51FD\u6570",paraId:0,tocIndex:1},{value:"((params: IObjectAny, extraParams: IRequestExtraParams) => Promise<IRequestResult>)",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"requestOnMounted",paraId:0,tocIndex:1},{value:"\u6302\u8F7D\u5B8C\u6210\u662F\u5426\u7ACB\u5373\u53D1\u9001\u4E00\u6B21 request \u8BF7\u6C42\u5EA6",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"true",paraId:0,tocIndex:1},{value:"header",paraId:0,tocIndex:1},{value:"\u5934\u90E8\u680F\u5185\u5BB9\u6E32\u67D3",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"search",paraId:0,tocIndex:1},{value:"\u641C\u7D22\u680F\uFF0C\u89C1",paraId:0,tocIndex:1},{value:"Search API",paraId:1,tocIndex:1},{value:"ISearchProps | false",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleTop",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u9876\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"title",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\uFF0C\u89C1\u4E0B\u65B9 title \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleBottom",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u5E95\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"table",paraId:0,tocIndex:1},{value:"\u8868\u683C\u680F\uFF0C\u89C1\u4E0B\u65B9 table \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"footer",paraId:0,tocIndex:1},{value:"\u5E95\u90E8\u680F",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u6837\u5F0F",paraId:2,tocIndex:2},{value:"CSSProperties",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"tabs",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u9875\u5C5E\u6027\uFF0C\u89C1",paraId:2,tocIndex:2},{value:"Antd Tabs",paraId:2,tocIndex:2},{value:"TabsProps",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showSetting",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5217\u8BBE\u7F6E\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showRefresh",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5237\u65B0\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"leftExtraContent",paraId:2,tocIndex:2},{value:"\u5DE6\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rightExtraContent",paraId:2,tocIndex:2},{value:"\u53F3\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u9664 Antd Table \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"showRowNumber",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5E8F\u53F7\u5217",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"rowNumberColumnData",paraId:4,tocIndex:3},{value:"\u5E8F\u53F7\u5217 Antd \u914D\u7F6E\u6570\u636E",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItems",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u5185\u5BB9\uFF0C\u4E0D\u5B58\u5728\u5219\u4E0D\u5C55\u793A\u64CD\u4F5C\u5217\uFF0C\u6570\u91CF\u8D85\u8FC7\u8BBE\u5B9A\u9608\u503C\u5219\u4E0B\u62C9\u4EA4\u4E92",paraId:4,tocIndex:3},{value:"(record: IObjectAny, index: number) => IActionItem[]",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsColumnData",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217 Antd \u914D\u7F6E\u6570\u636E\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u5217\u5BBD\u5EA6\u7B49",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsCount",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u4E0B\u62C9\u4EA4\u4E92\u9608\u503C\uFF0C\u9ED8\u8BA4\u4E3A 2",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"2",paraId:4,tocIndex:3},{value:"actionItemsDropdownProps",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u6309\u94AE\u4E0B\u62C9\u83DC\u5355\u5C5E\u6027\uFF0C\u89C1 Antd Dropdown \u7EC4\u4EF6",paraId:4,tocIndex:3},{value:"DropDownProps",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortMode",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u65B9\u6848\uFF0C\u524D\u7AEF\u6392\u5E8F\u6216\u540E\u7AEF\u6392\u5E8F",paraId:4,tocIndex:3},{value:"'local' | 'local-all' | 'service' | 'service-all'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortStringValueTransform",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u5B57\u7B26\u4E32\u6570\u636E\u8F6C\u6362\u65B9\u6848",paraId:4,tocIndex:3},{value:"(value: string) => string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"autoScrollY",paraId:4,tocIndex:3},{value:"\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u8868\u683C scrollY \u5C5E\u6027\uFF0C\u8FBE\u5230\u9002\u914D\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u201D\u4E00\u5C4F\u663E\u793A\u201C\u6548\u679C",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"summaryText",paraId:4,tocIndex:3},{value:"\u5408\u8BA1\u680F\u6587\u6848",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"\u5408\u8BA1",paraId:4,tocIndex:3},{value:"registerValueType",paraId:4,tocIndex:3},{value:"\u6CE8\u518C valueType, \u540C\u540D\u5C06\u8986\u76D6",paraId:4,tocIndex:3},{value:"{ [type: string]: (p: { value: any; record: IObjectAny; options: IObjectAny; index: number }) => ReactNode }",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u9664 Antd Table Column \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:5,tocIndex:4},{value:"\u53C2\u6570",paraId:6,tocIndex:4},{value:"\u63CF\u8FF0",paraId:6,tocIndex:4},{value:"\u7C7B\u578B",paraId:6,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:4},{value:"sortType",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u7C7B\u578B",paraId:6,tocIndex:4},{value:"'string' | 'number' | 'date'",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"sortDataExtractor",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u6570\u636E\u53D6\u503C\u51FD\u6570\uFF0C\u590D\u6742\u6570\u636E\u63D0\u53D6\u7528",paraId:6,tocIndex:4},{value:"(record: IObjectAny) => string | number",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"valueType",paraId:6,tocIndex:4},{value:"\u6570\u636E\u663E\u793A\u7C7B\u522B",paraId:6,tocIndex:4},{value:"IValueType | ((record: IObjectAny) => { type: IValueType, [props: string]: any })",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"\u5373 ",paraId:7,tocIndex:5},{value:"IActionItem",paraId:7,tocIndex:5},{value:", \u7EE7\u627F Antd Button \u7EC4\u4EF6\u53C2\u6570\uFF0C\u4EE5\u53CA\u4E0B\u9762\u6269\u5C55\u53C2\u6570\u3002",paraId:7,tocIndex:5},{value:"\u53C2\u6570",paraId:8,tocIndex:5},{value:"\u63CF\u8FF0",paraId:8,tocIndex:5},{value:"\u7C7B\u578B",paraId:8,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:5},{value:"text",paraId:8,tocIndex:5},{value:"\u6309\u94AE\u6587\u6848",paraId:8,tocIndex:5},{value:"ReactNode",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"isShow",paraId:8,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmAgain",paraId:8,tocIndex:5},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmProps",paraId:8,tocIndex:5},{value:"\u4E8C\u6B21\u786E\u8BA4 Antd Popconfirm \u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:5},{value:"Omit<PopconfirmProps, 'onConfirm'>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"onClick",paraId:8,tocIndex:5},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE ",paraId:8,tocIndex:5},{value:"Promise",paraId:8,tocIndex:5},{value:"\uFF0C\u5219\u589E\u52A0 ",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" \u6548\u679C",paraId:8,tocIndex:5},{value:"(event: MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5}]},39168:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(8906);const a=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:"ref",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"refresh",paraId:1,tocIndex:1},{value:": \u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"request",paraId:1,tocIndex:1},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRootElement",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:1},{value:"getSearchRef",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u680F\u5B9E\u4F8B\u3002",paraId:1,tocIndex:1},{value:"getDataSource",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setDataSource",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setSummaryData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5408\u8BA1\u680F\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getSearchValue",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u53C2\u6570\u3002",paraId:1,tocIndex:1},{value:"setSearchValue",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"clearSearchValue",paraId:1,tocIndex:1},{value:": \u6E05\u9664\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRequestParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u201C\u5BFC\u51FA\u201D\u65F6\u5E38\u7528\u3002",paraId:1,tocIndex:1},{value:"getRequestExtraParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u989D\u5916\u53C2\u6570\uFF0C\u5982\u6392\u5E8F\u53C2\u6570\u7B49\u3002",paraId:1,tocIndex:1},{value:"updateScrollY",paraId:1,tocIndex:1},{value:": \u66F4\u65B0\u8868\u683C\u9AD8\u5EA6\u4EE5\u8FBE\u5230\u201C\u4E00\u5C4F\u663E\u793A\u201D\u6548\u679C\u3002",paraId:1,tocIndex:1},{value:"openSettingModal",paraId:1,tocIndex:1},{value:": \u6253\u5F00\u5217\u8BBE\u7F6E\u5F39\u7A97\u3002",paraId:1,tocIndex:1},{value:"\u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:2,tocIndex:2},{value:"request",paraId:2,tocIndex:2},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:2,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:2},{value:"(params?: IRequestParams, options?: IRequestOptions) => Promise<IRequestResult>",paraId:3,tocIndex:2},{value:"\u540D\u79F0",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"params",paraId:4,tocIndex:3},{value:"\u641C\u7D22\u53CA\u5206\u9875\u53C2\u6570",paraId:4,tocIndex:3},{value:"IRequestParams",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:"\u5237\u65B0\u9009\u9879\uFF0C\u63A7\u5236\u5237\u65B0\u884C\u4E3A",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:5,tocIndex:3},{value:"\u540D\u79F0",paraId:6,tocIndex:3},{value:"\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"overwrite",paraId:6,tocIndex:3},{value:"\u662F\u5426\u8986\u76D6\u53C2\u6570\u65B9\u5F0F\u5237\u65B0\uFF0C\u9ED8\u8BA4 ",paraId:6,tocIndex:3},{value:"false",paraId:6,tocIndex:3},{value:" \u5373\u5408\u5E76\u5165\u53C2",paraId:6,tocIndex:3},{value:"boolean",paraId:6,tocIndex:3}]},9382:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(34451);const a=[]},93283:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(24311);const a=[{value:"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E8C\u6B21\u5C01\u88C5 SearchTable \u4EE5\u9002\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u5E38\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u64CD\u4F5C\u5217\u7684\u94FE\u63A5\u8DF3\u8F6C\u662F\u5355\u9875\u8DF3\u8F6C\u800C\u4E0D\u662F",paraId:0,tocIndex:0},{value:"<a>",paraId:0,tocIndex:0},{value:" \u6807\u7B7E\u7684\u5237\u65B0\u8DF3\u8F6C\uFF0C\u57FA\u4E8E\u6B64\u9700\u6C42\u6211\u4EEC\u4EE5 ",paraId:0,tocIndex:0},{value:"Next.js",paraId:0,tocIndex:0},{value:" \u5355\u9875\u8DF3\u8F6C\u4E8C\u6B21\u5C01\u88C5\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:`import { useRef, forwardRef, useImperativeHandle } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SchemaSearchTable from '@schema-render/search-table-react'
import Link from 'next/link'
import { map } from 'lodash'

import type { Ref } from 'react'
import type {
  ISearchTableProps,
  ISearchTableRef,
} from '@schema-render/search-table-react'

type IObjectAny = Record<string, any>

/**
 * \u4E8C\u6B21\u5C01\u88C5
 */
const SearchTable = forwardRef((props: ISearchTableProps, ref?: Ref<ISearchTableRef>) => {
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: IObjectAny, index: number) => {
    const items = props.table?.actionItems?.(record, index)
    return map(items, (item: IObjectAny, idx: number) => {
      // \u8DF3\u8F6C\u5904\u7406
      const text = item.href ? (
        <Link
          href={item.href}
          target={item.target}
          // \u52A0\u552F\u4E00 key
          key={\`link-\${idx}\`}
        >
          {item.text}
        </Link>
      ) : (
        item.text
      )
      return { ...item, text }
    })
  }

  // \u5F00\u653E API
  useImperativeHandle(ref, () => STableRef.current!)

  return (
    <SchemaSearchTable
      {...props}
      ref={STableRef}
      table={{
        ...props.table,
        actionItems: props.table?.actionItems ? actionItems : undefined,
      }}
    />
  )
})

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  return (
    <SearchTable
      ref={STableRef}
      search={{ schema }}
      table={{ columns }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo
`,paraId:1,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u64CD\u4F5C\u5217\u6309\u94AE\u589E\u52A0\u300C\u6743\u9650\u6821\u9A8C\u300D\u7684\u903B\u8F91\u7B49\uFF08\u589E\u52A0\u6743\u9650\u914D\u7F6E\u5C5E\u6027\uFF0C\u7ED3\u5408 isShow \u5C5E\u6027\u5B9E\u73B0\uFF09\uFF0C\u5C01\u88C5\u65B9\u5F0F\u96F7\u540C\u3002",paraId:2}]},85162:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(49409);const a=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\u6309\u94AE\u5355\u9875\u8DF3\u8F6C",paraId:1,tocIndex:0}]},92724:function(G,c,e){e.r(c),e.d(c,{texts:function(){return a}});var S=e(63710);const a=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:0},{value:"search: false",paraId:0,tocIndex:0},{value:" \u53EF\u9690\u85CF\u641C\u7D22\u533A\u57DF",paraId:0,tocIndex:0}]},36005:function(G,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
import type { IOpenItemLayoutParams } from '@schema-render/core-react'
import { Popover } from 'antd'
import classNames from 'classnames'
import type { FC } from 'react'

import * as styles from './styles'

const Horizontal: FC<IOpenItemLayoutParams> = ({
  body,
  schema,
  validator,
  required,
  prefixClassNames,
}) => {
  return (
    <div
      className={classNames(
        prefixClassNames('item-layout-horizontal'),
        styles.horizontal
      )}
    >
      <div className={classNames(prefixClassNames('item-main'), styles.main)}>
        <div className={classNames(prefixClassNames('item-header'), styles.header)}>
          {required && (
            <span className={classNames(prefixClassNames('item-mark'), styles.mark)}>
              *
            </span>
          )}
          <span className={classNames(prefixClassNames('item-title'), styles.title)}>
            {schema.title}
          </span>
          {!!schema.titleDescription && (
            <Popover placement="top" trigger="hover" content={schema.titleDescription}>
              <QuestionCircleOutlined
                className={classNames(
                  prefixClassNames('item-title-tooltip'),
                  styles.titleTooltip
                )}
              />
            </Popover>
          )}
        </div>
        <div className={classNames(prefixClassNames('item-body'), styles.body)}>
          {body}
        </div>
      </div>

      <div className={classNames(prefixClassNames('item-footer'), styles.footer)}>
        {validator.status === 'error' && !!validator.message && (
          <div
            className={classNames(prefixClassNames('item-error-msg'), styles.errorMsg)}
          >
            {validator.message}
          </div>
        )}
        {!!schema.description && (
          <div className={classNames(prefixClassNames('item-desc'), styles.desc)}>
            {schema.description}
          </div>
        )}
      </div>
    </div>
  )
}

export default Horizontal
`},52551:function(G,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

export const horizontal = cij\`\`

export const main = cij\`
  display: flex;
  align-items: center;
\`

export const header = cij\`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
\`

export const title = cij\`
  word-break: break-all;
\`

export const mark = cij\`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
\`

export const titleTooltip = cij\`
  margin-left: 4px;
  position: relative;
  top: 1px;
\`

export const body = cij\`
  flex-grow: 1;
\`

export const footer = cij\`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
\`

export const desc = cij\`
  margin-top: 6px;
  color: #999;
\`

export const errorMsg = cij\`
  margin-top: 6px;
  color: #ff4d4f;
\`
`},29758:function(G,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

export const header = cij\`
  margin-bottom: 8px;
\`

export const title = cij\`
  word-break: break-all;
\`

export const mark = cij\`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
\`

export const titleTooltip = cij\`
  margin-left: 4px;
\`

export const footer = cij\`
  word-break: break-all;

  &:empty {
    display: none;
  }
\`

export const desc = cij\`
  margin-top: 8px;
  color: #999;
\`

export const errorMsg = cij\`
  margin-top: 8px;
  color: #ff4d4f;
\`
`},19970:function(G,c){c.Z=`import type { IRenderers, ISchema } from '@schema-render/core-react'
import { Input, InputNumber, Radio, Select, Switch } from 'antd'

interface IOptions {
  value: string | number
  label: string
  disabled?: boolean
}

const renderers: IRenderers<any, ISchema> = {
  InputText: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return <div>{value}</div>
      }

      return (
        <Input
          allowClear
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value ?? ''}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    },
  },
  InputNumber: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return <div>{value}</div>
      }

      return (
        <InputNumber
          style={{ width: '100%' }}
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value}
          onChange={(val) => onChange(val ?? undefined)}
          disabled={disabled}
        />
      )
    },
  },
  TextArea: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return <div>{value}</div>
      }

      return (
        <Input.TextArea
          rows={3}
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      )
    },
  },
  Password: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      if (readonly) {
        return <div>{value}</div>
      }

      return (
        <Input.Password
          placeholder={\`\u8BF7\u8F93\u5165\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      )
    },
  },
  Switch: {
    component: ({ value, disabled, onChange }) => {
      return (
        <Switch checked={value} disabled={disabled} onChange={(val) => onChange(val)} />
      )
    },
  },
  Select: {
    component: ({ schema, value, disabled, readonly, onChange }) => {
      const options = (schema.renderOptions?.options ?? []) as IOptions[]

      if (readonly) {
        const result = options.find((elem) => elem.value === value)
        return <div>{result?.label}</div>
      }

      return (
        <Select
          allowClear
          style={{ width: '100%' }}
          placeholder={\`\u8BF7\u9009\u62E9\${schema.title ?? ''}\`}
          {...schema.renderOptions}
          value={value}
          onChange={(val) => onChange(val)}
          disabled={disabled}
        />
      )
    },
  },
  Radio: {
    component: ({ schema, value, disabled, onChange }) => {
      const options = (schema.renderOptions?.options ?? []) as IOptions[]

      return (
        <Radio.Group
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((item) => {
            return (
              <Radio value={item.value} disabled={item.disabled} key={item.value}>
                {item.label}
              </Radio>
            )
          })}
        </Radio.Group>
      )
    },
  },
}

export default renderers
`},93635:function(G,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
import { RendererIterator } from '@schema-render/core-react'
import { Collapse, Popover } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'

const ObjectCollapse: FC<IOpenFormItemParams<object, IObjectSchema>> = ({
  schema,
  path,
  objectStyle,
}) => {
  const [collapsed, setCollapsed] = useState(false)

  const header = (
    <>
      {/* \u6E32\u67D3\u6807\u9898 */}
      <span>{schema.title}</span>

      {/* \u6309\u6807\u51C6\uFF0C\u5E94\u8BE5\u652F\u6301 schema \u7684 titleDescription \u534F\u8BAE\u529F\u80FD */}
      {!!schema.titleDescription && (
        <Popover placement="top" trigger="hover" content={schema.titleDescription}>
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Popover>
      )}
    </>
  )

  return (
    <Collapse
      bordered={false}
      ghost
      activeKey={String(collapsed)}
      onChange={() => setCollapsed(!collapsed)}
    >
      <Collapse.Panel
        header={header}
        key="false"
        style={{
          borderRadius: 4,
          background: 'rgba(0,0,0,0.03)',
        }}
      >
        {/* \u91CD\u70B9\uFF1A\u8C03\u7528 RendererIterator \u6E32\u67D3\u5B50\u8282\u70B9\uFF1B\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 objectStyle \u6837\u5F0F\uFF0C\u4EE5\u5B9E\u73B0\u6574\u4F53\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40 */}
        <div style={objectStyle}>
          <RendererIterator schema={schema} path={path} />
        </div>
      </Collapse.Panel>
    </Collapse>
  )
}

export default {
  // \u901A\u8FC7 formItem \u6A21\u5F0F\u6CE8\u518C
  formItem: ObjectCollapse,
}
`},3116:function(G,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
import { RendererIterator } from '@schema-render/core-react'
import { Popover } from 'antd'
import type { FC } from 'react'

const style = {
  background: '#efefef',
  fontWeight: 'bold',
  padding: '7px 15px',
  borderRadius: 4,
  marginBottom: 15,
}

const ObjectNormal: FC<IOpenFormItemParams<object, IObjectSchema>> = ({
  schema,
  path,
  objectStyle,
}) => {
  return (
    <>
      {/* \u6E32\u67D3\u6807\u9898\u5757\u5185\u5BB9 */}
      <div style={style}>
        {/* \u6E32\u67D3\u6807\u9898 */}
        <span>{schema.title}</span>

        {/* \u6309\u6807\u51C6\uFF0C\u5E94\u8BE5\u652F\u6301 schema \u7684 titleDescription \u534F\u8BAE\u529F\u80FD */}
        {!!schema.titleDescription && (
          <Popover placement="top" trigger="hover" content={schema.titleDescription}>
            <QuestionCircleOutlined style={{ marginLeft: 4 }} />
          </Popover>
        )}
      </div>

      {/* \u91CD\u70B9\uFF1A\u8C03\u7528 RendererIterator \u6E32\u67D3\u5B50\u8282\u70B9\uFF1B\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 objectStyle \u6837\u5F0F\uFF0C\u4EE5\u5B9E\u73B0\u6574\u4F53\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40 */}
      <div style={objectStyle}>
        <RendererIterator schema={schema} path={path} />
      </div>
    </>
  )
}

export default {
  // \u901A\u8FC7 formItem \u6A21\u5F0F\u6CE8\u518C
  formItem: ObjectNormal,
}
`},12967:function(G,c){c.Z=`import type { IRootSchema } from '@schema-render/core-react'

export default {
  renderType: 'Root',
  properties: {
    title: {
      renderType: 'InputText',
      title: '\u4E00\u7EA7\u6807\u9898',
      titleDescription: '\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E',
      required: true,
    },
    content: {
      renderType: 'InputText',
      title: '\u4E00\u7EA7\u5185\u5BB9',
    },
    o1: {
      renderType: 'Object',
      title: '\u4EC5\u52A0\u7C97\u6807\u9898\u7684\u5BF9\u8C61 Object',
      titleDescription: '\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E',
      properties: {
        title: {
          renderType: 'InputText',
          title: '\u4E8C\u7EA7\u6807\u9898',
          titleDescription: '\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E',
          required: true,
        },
        content: {
          renderType: 'InputText',
          title: '\u4E8C\u7EA7\u5185\u5BB9',
        },
      },
    },
    o2: {
      renderType: 'ObjectCollapse',
      title: '\u53EF\u6298\u53E0\u7684\u5BF9\u8C61 ObjectCollapse',
      titleDescription: '\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E',
      properties: {
        title: {
          renderType: 'InputText',
          title: '\u4E8C\u7EA7\u6807\u9898',
          titleDescription: '\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E',
          required: true,
        },
        content: {
          renderType: 'InputText',
          title: '\u4E8C\u7EA7\u5185\u5BB9',
        },
      },
    },
  },
} as IRootSchema
`},540:function(G,c){c.Z=`import BankSelect from './BankSelect'

export default {
  BankSelect,
}
`},71525:function(G,c){c.Z=`import type { IRootSchema } from '@schema-render/core-react'

const commonOptions = [
  { label: '\u6210\u90FD', value: 'chengdu' },
  { label: '\u676D\u5DDE', value: 'hangzhou' },
  { label: '\u6DF1\u5733', value: 'shenzhen' },
  { label: '\u5317\u4EAC', value: 'beijing', disabled: true },
]

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    InputText: {
      title: '\u5355\u884C\u6587\u672C\uFF08InputText\uFF09',
      renderType: 'InputText',
      renderOptions: {
        placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
      },
    },
    InputNumber: {
      title: '\u6570\u5B57\uFF08InputNumber\uFF09',
      renderType: 'InputNumber',
      renderOptions: {
        placeholder: '\u8BF7\u8F93\u5165\u6570\u5B57',
      },
    },
    Switch: {
      title: '\u5F00\u5173\uFF08Switch\uFF09',
      renderType: 'Switch',
    },
    SwitchBox: {
      title: '\u5F00\u5173\uFF08SwitchBox\uFF09',
      renderType: 'SwitchBox',
      renderOptions: {
        text: '\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE',
      },
    },
    TextArea: {
      title: '\u591A\u884C\u6587\u672C\uFF08TextArea\uFF09',
      renderType: 'TextArea',
      renderOptions: {
        placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
      },
    },
    Password: {
      title: '\u5BC6\u7801\u6846\uFF08Password\uFF09',
      renderType: 'Password',
      renderOptions: {
        placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
      },
    },
    Select: {
      title: '\u5355\u9879\u9009\u62E9\u5668\uFF08Select\uFF09',
      renderType: 'Select',
      renderOptions: {
        placeholder: '\u8BF7\u9009\u62E9\u5185\u5BB9',
        options: commonOptions,
        mode: 'multiple',
      },
    },
    SelectMultiple: {
      title: '\u591A\u9879\u9009\u62E9\u5668\uFF08SelectMultiple\uFF09',
      renderType: 'SelectMultiple',
      renderOptions: {
        placeholder: '\u8BF7\u9009\u62E9\u5185\u5BB9',
        options: commonOptions,
      },
    },
    Radio: {
      title: '\u5355\u9009\u6846\uFF08Radio\uFF09',
      renderType: 'Radio',
      renderOptions: {
        options: commonOptions,
      },
    },
    Checkbox: {
      title: '\u591A\u9009\u6846\uFF08Checkbox\uFF09',
      renderType: 'Checkbox',
      renderOptions: {
        options: commonOptions,
      },
    },
    Rate: {
      title: '\u8BC4\u5206\uFF08Rate\uFF09',
      renderType: 'Rate',
    },
    DatePicker: {
      title: '\u65E5\u671F\uFF08DatePicker\uFF09',
      renderType: 'DatePicker',
      renderOptions: {
        placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
        format: 'YYYY\u5E74MM\u6708DD\u65E5',
      },
    },
    DateRangePicker: {
      title: '\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09',
      renderType: 'DateRangePicker',
      renderOptions: {
        placeholder: ['\u5F00\u59CB\u65E5\u671F', '\u7ED3\u675F\u65E5\u671F'],
      },
    },
    Description: {
      title: '\u7EAF\u5C55\u793A\uFF08Description\uFF09',
      renderType: 'Description',
    },
    Object: {
      title: '\u5BF9\u8C61\u5BB9\u5668\uFF08Object\uFF09',
      renderType: 'Object',
      properties: {
        InputText: {
          title: '\u5355\u884C\u6587\u672C\uFF08InputText\uFF09',
          renderType: 'InputText',
          renderOptions: {
            placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
          },
        },
        InputNumber: {
          title: '\u6570\u5B57\uFF08InputNumber\uFF09',
          renderType: 'InputNumber',
          renderOptions: {
            placeholder: '\u8BF7\u8F93\u5165\u6570\u5B57',
          },
        },
      },
    },
    ObjectRightIcon: {
      title: '\u5BF9\u8C61\u5BB9\u5668\uFF0C\u7BAD\u5934\u5728\u53F3\u8FB9',
      renderType: 'Object',
      renderOptions: {
        headerOptions: {
          expandIconPosition: 'end',
        },
      },
      properties: {
        InputText: {
          title: '\u5355\u884C\u6587\u672C\uFF08InputText\uFF09',
          renderType: 'InputText',
          renderOptions: {
            placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
          },
        },
        InputNumber: {
          title: '\u6570\u5B57\uFF08InputNumber\uFF09',
          renderType: 'InputNumber',
          renderOptions: {
            placeholder: '\u8BF7\u8F93\u5165\u6570\u5B57',
          },
        },
      },
    },
    ObjectNotCollapse: {
      title: '\u5BF9\u8C61\u5BB9\u5668\uFF0C\u4E0D\u5141\u8BB8\u6298\u53E0',
      renderType: 'Object',
      renderOptions: {
        headerOptions: {
          collapsible: 'icon',
        },
        panelOptions: {
          showArrow: false,
        },
      },
      properties: {
        InputText: {
          title: '\u5355\u884C\u6587\u672C\uFF08InputText\uFF09',
          renderType: 'InputText',
          renderOptions: {
            placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
          },
        },
        InputNumber: {
          title: '\u6570\u5B57\uFF08InputNumber\uFF09',
          renderType: 'InputNumber',
          renderOptions: {
            placeholder: '\u8BF7\u8F93\u5165\u6570\u5B57',
          },
        },
      },
    },
    ObjectNull: {
      title: '\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09',
      renderType: 'ObjectNull',
      style: {
        border: '1px solid #d9d9d9',
        padding: 10,
        borderRadius: 6,
      },
      properties: {
        InputText: {
          title: '\u5355\u884C\u6587\u672C\uFF08InputText\uFF09',
          renderType: 'InputText',
          description: '\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09',
          renderOptions: {
            placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
          },
        },
        InputNumber: {
          title: '\u6570\u5B57\uFF08InputNumber\uFF09',
          renderType: 'InputNumber',
          description: '\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09',
          renderOptions: {
            placeholder: '\u8BF7\u8F93\u5165\u6570\u5B57',
          },
        },
      },
    },
  },
}

export default schema
`},24127:function(G,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

export const builtinRenderers = cij\`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
\`
`},96390:function(G,c){c.Z=`import type { TableProps } from 'antd'

const columns: TableProps<object>['columns'] = [
  {
    title: '\u4F9B\u5E94\u5546\u540D\u79F0',
    dataIndex: 'supplier_name',
    align: 'center',
  },
  {
    title: '\u4F9B\u5E94\u5546\u7F16\u7801',
    dataIndex: 'supplier_code',
    align: 'center',
  },
  {
    title: '\u5355\u636E\u7F16\u53F7',
    dataIndex: 'bill_no',
    align: 'center',
  },
  {
    title: '\u5355\u636E\u7C7B\u578B',
    dataIndex: 'bill_type',
    align: 'center',
  },
  {
    title: '\u5355\u636E\u65E5\u671F',
    dataIndex: 'bill_date',
    align: 'center',
  },
  {
    title: '\u5355\u636E\u72B6\u6001',
    dataIndex: 'bill_status',
    align: 'center',
  },
  {
    title: '\u5236\u5355\u4EBA',
    dataIndex: 'operator',
    align: 'center',
  },
  {
    title: '\u5546\u54C1\u540D\u79F0',
    dataIndex: 'goods_name',
    align: 'center',
  },
  {
    title: '\u5546\u54C1\u7F16\u7801',
    dataIndex: 'goods_code',
    align: 'center',
  },
  {
    title: '\u5546\u54C1\u5206\u7C7B',
    dataIndex: 'goods_category',
    align: 'center',
  },
  {
    title: '\u5546\u54C1\u65E5\u671F',
    dataIndex: 'goods_date',
    align: 'center',
  },
]

export default columns
`},77538:function(G,c){c.Z=`import dayjs from 'dayjs'

export default function createDataSource() {
  const dataSource: object[] = []

  for (let i = 0; i < 10; i++) {
    const random = String(Math.random()).slice(2, 6)
    const goods_category = Math.random() > 0.5 ? 1 : 2
    const date = dayjs().format('YYYY-MM-DD HH:mm:ss')

    dataSource.push({
      key: Math.random(),
      supplier_name: \`\${random}\u6709\u9650\u516C\u53F8\`,
      supplier_code: random,
      bill_no: \`B\${Date.now()}\`,
      bill_type: Math.random() > 0.5 ? '\u91C7\u8D2D\u5355' : '\u9000\u8D27\u5355',
      bill_date: date,
      bill_status: Math.random() > 0.5 ? '\u5DF2\u63D0\u4EA4' : '\u5F85\u63D0\u4EA4',
      operator: Math.random() > 0.5 ? '\u5F20\u4E09' : '\u674E\u56DB',
      goods_name: goods_category === 1 ? '\u7EA2\u73AB\u747010\u679D' : '\u9C9C\u6D3B\u9C88\u9C7C',
      goods_code: \`G\${Date.now()}\`,
      goods_category: goods_category === 1 ? '\u6C34\u679C\u9C9C\u82B1' : '\u6D77\u9C9C\u6C34\u4EA7',
      goods_date: date,
    })
  }

  return dataSource
}
`},19150:function(G,c){c.Z=`import type { IOpenComponentParams } from '@schema-render/core-react'
import React from 'react'

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: '4px 10px',
  height: 32,
  boxSizing: 'border-box',
  border: '1px solid #d9d9d9',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 14,
}

const BankSelect: React.FC<IOpenComponentParams<string>> = ({
  value,
  sPath,
  onChange,
}) => {
  const handleBankSelect = () => {
    const random = String(Math.random()).slice(2, 6)
    const bankData = {
      bank_id: \`id_\${random}\`,
      bank_account: \`111222333\${random}\`,
      bank_name: \`\u62DB\u8D22\u732B\u94F6\u884C\${random}\`,
      bank_branch_name: \`\u62DB\u8D22\u732B\u6210\u90FD\${random}\u652F\u884C\`,
    }
    // \u94F6\u884C\u8D26\u6237\u6570\u636E\u901A\u8FC7 extra \u5C5E\u6027\u900F\u4F20\u5230\u5916\u90E8\u7528\u4E8E\u8054\u52A8\u5904\u7406
    onChange(bankData[sPath as never], {
      extra: bankData,
    })
  }

  return (
    <div style={style} onClick={handleBankSelect}>
      {/* \u5C55\u793A\u5F53\u524D\u8868\u5355\u9879\u503C */}
      {value ? <div>{value}</div> : <div style={{ color: '#c0c0c0' }}>\u9009\u62E9\u94F6\u884C\u8D26\u6237</div>}
    </div>
  )
}

export default {
  component: BankSelect,
}
`},97395:function(G,c){c.Z=`import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
import { RendererIterator } from '@schema-render/core-react'
import type { FC } from 'react'

const ObjectSectionTitle: FC<IOpenFormItemParams<object, IObjectSchema>> = ({
  schema,
  path,
  objectStyle,
}) => {
  return (
    <>
      <div className="section-title">{schema.title}</div>
      <div style={objectStyle}>
        <RendererIterator schema={schema} path={path} />
      </div>
    </>
  )
}

export default {
  formItem: ObjectSectionTitle as never,
}
`},5038:function(G,c){c.Z=`import type { IOpenFormItemParams } from '@schema-render/core-react'
import type { FC } from 'react'

const SectionTitle: FC<IOpenFormItemParams<never>> = ({ schema }) => {
  return <div className="section-title">{schema.title}</div>
}

export default {
  formItem: SectionTitle as never,
}
`},71091:function(G,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: 'Supplier Name',
    dataIndex: 'supplier_name',
    width: 150,
    fixed: 'left',
  },
  {
    title: 'Supplier Code',
    dataIndex: 'supplier_code',
    width: 150,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    valueType: () => ({
      type: 'long-text-modal',
      maxLength: 20,
    }),
  },
  {
    title: 'Bill No',
    dataIndex: 'bill_no',
    width: 130,
  },
  {
    title: 'Bill Type',
    dataIndex: 'bill_type',
  },
  {
    title: 'Bill Date',
    dataIndex: 'bill_date',
    width: 120,
  },
  {
    title: 'Bill Status',
    dataIndex: 'bill_status',
  },
  {
    title: 'Operator',
    dataIndex: 'operator',
  },
  {
    title: 'Goods Name',
    dataIndex: 'goods_name',
    width: 130,
  },
  {
    title: 'Goods Price',
    dataIndex: 'goods_price',
  },
  {
    title: 'Goods Code',
    dataIndex: 'goods_code',
    width: 130,
  },
  {
    title: 'Goods Category',
    dataIndex: 'goods_category',
  },
  {
    title: 'Goods Date',
    dataIndex: 'goods_date',
    width: 120,
    fixed: 'right',
  },
]

export default columns
`},29449:function(G,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: '\u4F9B\u5E94\u5546\u540D\u79F0',
    dataIndex: 'supplier_name',
    width: 130,
  },
  {
    title: '\u4F9B\u5E94\u5546\u7F16\u7801',
    dataIndex: 'supplier_code',
  },
  {
    title: '\u5355\u636E\u7F16\u53F7',
    dataIndex: 'bill_no',
    width: 130,
  },
  {
    title: '\u5355\u636E\u4FE1\u606F',
    children: [
      {
        title: '\u5355\u636E\u7C7B\u578B',
        dataIndex: 'bill_type',
      },
      {
        title: '\u5355\u636E\u65E5\u671F',
        dataIndex: 'bill_date',
        width: 120,
      },
      {
        title: '\u5355\u636E\u72B6\u6001',
        dataIndex: 'bill_status',
      },
    ],
  },
  {
    title: '\u5236\u5355\u4EBA',
    dataIndex: 'operator',
  },
  {
    title: '\u5546\u54C1\u4FE1\u606F',
    children: [
      {
        title: '\u5546\u54C1\u540D\u79F0',
        dataIndex: 'goods_name',
        width: 130,
      },
      {
        title: '\u5546\u54C1\u4EF7\u683C(\u5143)',
        dataIndex: 'goods_price',
      },
      {
        title: '\u5546\u54C1\u7F16\u7801',
        dataIndex: 'goods_code',
        width: 130,
      },
      {
        title: '\u5546\u54C1\u5206\u7C7B',
        dataIndex: 'goods_category',
      },
      {
        title: '\u5546\u54C1\u65E5\u671F',
        dataIndex: 'goods_date',
        width: 120,
      },
    ],
  },
]

export default columns
`},17261:function(G,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: '\u5E38\u89C4\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u8BC4\u7EA7(rate)',
    dataIndex: 'rate',
    valueType: 'rate',
  },
  {
    title: '\u4EE3\u7801\u5757(code)',
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '\u5343\u5206\u4F4D\u6570\u5B57(comma-number)',
    dataIndex: 'comma_number',
    valueType: 'comma-number',
  },
  {
    title: '\u767E\u5206\u6BD4(percent)',
    dataIndex: 'percent',
    valueType: 'percent',
  },
  {
    title: '\u957F\u6587\u6848(long-text)',
    dataIndex: 'long_text',
    valueType: (_record, index) => ({
      type: 'long-text',
      maxLength: 20,
      color: index % 2 ? '#1677ff' : '#000',
    }),
    width: 270,
  },
  {
    title: '\u957F\u6587\u6848(long-text-modal)',
    dataIndex: 'long_text_modal',
    valueType: () => ({
      type: 'long-text-modal',
      maxLength: 20,
      width: 500,
    }),
    width: 270,
  },
  {
    title: '\u72B6\u6001\u5F00\u5173(switch)',
    dataIndex: 'switch_status',
    valueType: 'switch',
  },
  {
    title: '\u6807\u7B7E(tags)',
    dataIndex: 'tags',
    valueType: 'tags',
    width: 140,
  },
  {
    title: '\u56FE\u7247(images)',
    dataIndex: 'image_list',
    valueType: 'images',
  },
]

export default columns
`},34569:function(G,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: '\u4F9B\u5E94\u5546\u540D\u79F0',
    dataIndex: 'supplier_name',
    width: 130,
  },
  {
    title: '\u4F9B\u5E94\u5546\u7F16\u7801',
    dataIndex: 'supplier_code',
  },
  {
    title: '\u5355\u636E\u7F16\u53F7',
    dataIndex: 'bill_no',
    width: 130,
  },
  {
    title: '\u5355\u636E\u7C7B\u578B',
    dataIndex: 'bill_type',
  },
  {
    title: '\u5355\u636E\u65E5\u671F',
    dataIndex: 'bill_date',
    width: 120,
  },
  {
    title: '\u5355\u636E\u72B6\u6001',
    dataIndex: 'bill_status',
  },
  {
    title: '\u5236\u5355\u4EBA',
    dataIndex: 'operator',
  },
  {
    title: '\u5546\u54C1\u540D\u79F0',
    dataIndex: 'goods_name',
    width: 130,
  },
  {
    title: '\u5546\u54C1\u4EF7\u683C(\u5143)',
    dataIndex: 'goods_price',
  },
  {
    title: '\u5546\u54C1\u7F16\u7801',
    dataIndex: 'goods_code',
    width: 130,
  },
  {
    title: '\u5546\u54C1\u5206\u7C7B',
    dataIndex: 'goods_category',
  },
  {
    title: '\u5546\u54C1\u65E5\u671F',
    dataIndex: 'goods_date',
    width: 120,
  },
]

export default columns
`},45876:function(G,c){c.Z=`import dayjs from 'dayjs'

export default function createDataSourceEn(count = 10) {
  const dataSource = []

  for (let i = 0; i < count; i++) {
    const random = String(Math.random()).slice(2, 6)
    const goods_category = Math.random() > 0.5 ? 1 : 2
    const date = dayjs().format('DD/MM/YYYY HH:mm:ss')
    const id = \`id_\${i}\`

    dataSource.push({
      key: id,
      id,
      supplier_name: \`\${random} Co.,Ltd.\`,
      supplier_code: random,
      bill_no: \`B\${Date.now()}\`,
      bill_type: Math.random() > 0.5 ? 'Purchase Order' : 'Return Order',
      bill_date: date,
      bill_status: Math.random() > 0.5 ? 'Submitted' : 'To be submitted',
      operator: Math.random() > 0.5 ? 'Tom' : 'Lily',
      goods_name: goods_category === 1 ? '10 red roses' : 'Live bass',
      goods_code: \`G\${Date.now()}\`,
      goods_category: goods_category === 1 ? 'Fruits & Flowers' : 'Aquatic Products',
      goods_date: date,
      goods_price: goods_category === 1 ? 19.9 : 22.8,
      description:
        'SearchTable is a conditional search table component based on the Search + Antd Table encapsulation; It is often used for data retrieval, display and operation of background management systems.',
    })
  }

  return dataSource
}
`},90887:function(G,c){c.Z=`function rangeNumber(min: number, max: number, toInt = true) {
  const val = Math.random() * (max - min) + min
  return toInt ? Math.floor(val) : val
}

export default function createDataSource(count = 10) {
  const dataSource = []

  for (let i = 0; i < count; i++) {
    const id = \`id_\${i}\`
    dataSource.push({
      key: id,
      id,
      title: \`\${String(Math.random()).slice(2, 6)}\u6807\u9898\`,
      rate: rangeNumber(0, 5),
      code: \`
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      \`.trim(),
      comma_number:
        Math.random() > 0.4 ? rangeNumber(1000, 100000) : rangeNumber(0, 1000),
      percent: rangeNumber(0, 100).toFixed(2),
      switch_status: Math.random() > 0.5,
      tags: Math.random() > 0.5 ? '\u5F20\u4E09' : ['\u674E\u56DB', '\u738B\u4E94'],
      image_list:
        Math.random() > 0.5
          ? 'https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg'
          : [
              'https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif',
              'https://raw.githubusercontent.com/Barrior/assets/main/gift.png',
            ],
      deploy_status: rangeNumber(0, 3),
      long_text:
        'SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002',
      long_text_modal:
        'SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002',
    })
  }

  return dataSource
}
`},37343:function(G,c){c.Z=`import dayjs from 'dayjs'

export default function createDataSource(
  count = 10,
  sorter?: { sort_field: string; sort_order: 'ascend' | 'descend' | null }
) {
  const dataSource = []

  for (let i = 0; i < count; i++) {
    const random = String(Math.random()).slice(2, 6)
    const goods_category = Math.random() > 0.5 ? 1 : 2
    const date = dayjs().format('YYYY-MM-DD HH:mm:ss')
    const id = \`id_\${i}\`

    dataSource.push({
      key: id,
      id,
      supplier_name: \`\${random}\u6709\u9650\u516C\u53F8\`,
      supplier_code: random,
      bill_no: \`B\${Date.now()}\`,
      bill_type: Math.random() > 0.5 ? '\u91C7\u8D2D\u5355' : '\u9000\u8D27\u5355',
      bill_date: date,
      bill_status: Math.random() > 0.5 ? '\u5DF2\u63D0\u4EA4' : '\u5F85\u63D0\u4EA4',
      operator: Math.random() > 0.5 ? '\u5F20\u4E09' : '\u674E\u56DB',
      goods_name: goods_category === 1 ? '\u7EA2\u73AB\u747010\u679D' : '\u9C9C\u6D3B\u9C88\u9C7C',
      goods_code: \`G\${Date.now()}\`,
      goods_category: goods_category === 1 ? '\u6C34\u679C\u9C9C\u82B1' : '\u6D77\u9C9C\u6C34\u4EA7',
      goods_date: date,
      goods_price: goods_category === 1 ? 19.9 : 22.8,
    })
  }

  if (sorter) {
    dataSource.sort((a: any, b: any) => {
      const aValue = String(a[sorter.sort_field])
      const bValue = String(b[sorter.sort_field])
      return sorter.sort_order === 'ascend'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }

  return dataSource
}
`},36556:function(G,c){c.Z=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

// \u5B9A\u4E49 Schema
const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    supplier_name: {
      title: 'Supplier Name',
      renderType: 'InputText',
    },
    supplier_code: {
      title: 'Supplier Code',
      renderType: 'InputText',
    },
    bill_no: {
      title: 'Bill No',
      renderType: 'InputText',
    },
    bill_type: {
      title: 'Bill Type',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: 'Purchase Order', value: 1 },
          { label: 'Inbound Order', value: 2 },
          { label: 'Return Order', value: 3 },
        ],
      },
    },
    bill_date: {
      title: 'Bill Date',
      renderType: 'DateRangePicker',
    },
    bill_status: {
      title: 'Bill Status',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: 'submitted', value: 1 },
          { label: 'pending submit', value: 2 },
          { label: 'pending approval', value: 3 },
        ],
      },
    },
    operator: {
      title: 'Operator',
      renderType: 'InputText',
    },
    goods_name: {
      title: 'Goods Name',
      renderType: 'InputText',
    },
    goods_code: {
      title: 'Goods Code',
      renderType: 'InputText',
    },
    goods_category: {
      title: 'Goods Category',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: 'Fruits & Flowers', value: 1 },
          { label: 'Aquatic Products', value: 2 },
          { label: 'Grains & Oils & Seasoning', value: 3 },
        ],
      },
    },
  },
}

export default schema
`},22452:function(G,c){c.Z=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

// \u5B9A\u4E49 Schema
const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    supplier_name: {
      title: '\u4F9B\u5E94\u5546\u540D\u79F0',
      renderType: 'InputText',
    },
    supplier_code: {
      title: '\u4F9B\u5E94\u5546\u7F16\u7801',
      renderType: 'InputText',
    },
    bill_no: {
      title: '\u5355\u636E\u7F16\u53F7',
      renderType: 'InputText',
    },
    bill_type: {
      title: '\u5355\u636E\u7C7B\u578B',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u91C7\u8D2D\u5355', value: 1 },
          { label: '\u5165\u5E93\u5355', value: 2 },
          { label: '\u9000\u8D27\u5355', value: 3 },
        ],
      },
    },
    bill_date: {
      title: '\u5355\u636E\u65E5\u671F',
      renderType: 'DateRangePicker',
    },
    bill_status: {
      title: '\u5355\u636E\u72B6\u6001',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u5DF2\u63D0\u4EA4', value: 1 },
          { label: '\u5F85\u63D0\u4EA4', value: 2 },
          { label: '\u5F85\u5BA1\u6279', value: 3 },
        ],
      },
    },
    operator: {
      title: '\u5236\u5355\u4EBA',
      renderType: 'InputText',
    },
    goods_name: {
      title: '\u5546\u54C1\u540D\u79F0',
      renderType: 'InputText',
    },
    goods_code: {
      title: '\u5546\u54C1\u7F16\u7801',
      renderType: 'InputText',
    },
    goods_category: {
      title: '\u5546\u54C1\u5206\u7C7B',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '\u6C34\u679C\u9C9C\u82B1', value: 1 },
          { label: '\u6D77\u9C9C\u6C34\u4EA7', value: 2 },
          { label: '\u7CAE\u6CB9\u8C03\u5473', value: 3 },
        ],
      },
    },
  },
}

export default schema
`}}]);
