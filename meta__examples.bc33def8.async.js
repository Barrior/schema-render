"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[768],{40492:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(63917),v={}},42254:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return R}});var t=e(5574),v=e.n(t),L=e(15009),O=e.n(L),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(59869),A=e(74072),$=e(48201),R={"examples-core-react-002-quick-start-demo-0":{component:x.memo(x.lazy(N()(O()().mark(function P(){var h,d,s,a,o,n,r,u;return O()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=m.sent,d=h.default,m.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=m.sent,a=s.Input,o=function(f){var j=f.schema,y=f.body;return x.createElement("div",null,x.createElement("h3",null,j.title),x.createElement("div",null,y))},n={InputText:{component:function(f){var j=f.schema,y=f.value,i=f.onChange;return x.createElement(a,I()(I()({},j.renderOptions),{},{value:y,onChange:function(b){return i(b.target.value)}}))}},Textarea:{component:function(f){var j=f.schema,y=f.value,i=f.onChange;return x.createElement(a.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(j.title)},j.renderOptions),{},{value:y,onChange:function(b){return i(b.target.value)}}))}}},r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},u=function(){return x.createElement(d,{itemLayout:o,renderers:n,schema:r})},m.abrupt("return",{default:u});case 13:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,antd:$},renderOpts:{compile:function(){var P=N()(O()().mark(function d(){var s,a=arguments;return O()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-002-quick-start-demo-1":{component:x.memo(x.lazy(N()(O()().mark(function P(){var h,d,s,a,o,n,r,u,l,m;return O()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=f.sent,d=h.default,f.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=f.sent,a=s.Input,f.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return o=f.sent,n=o.useState,r=function(y){var i=y.schema,C=y.body;return x.createElement("div",null,x.createElement("h3",null,i.title),x.createElement("div",null,C))},u={InputText:{component:function(y){var i=y.schema,C=y.value,b=y.onChange;return x.createElement(a,I()(I()({},i.renderOptions),{},{value:C,onChange:function(S){return b(S.target.value)}}))}},Textarea:{component:function(y){var i=y.schema,C=y.value,b=y.onChange;return x.createElement(a.TextArea,I()(I()({placeholder:"\u8BF7\u8F93\u5165".concat(i.title)},i.renderOptions),{},{value:C,onChange:function(S){return b(S.target.value)}}))}}},l={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},m=function(){var y=n({}),i=v()(y,2),C=i[0],b=i[1];return x.createElement("div",null,x.createElement(d,{itemLayout:r,renderers:u,schema:l,onChange:b}),x.createElement("h4",null,"\u6253\u5370\u8868\u5355\u6570\u636E\uFF1A"),x.createElement("pre",{style:{padding:"1em",background:"#f6f6f6"}},JSON.stringify(C,null,2)))},f.abrupt("return",{default:m});case 17:case"end":return f.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,antd:$,react:_||(_=e.t(x,2))},renderOpts:{compile:function(){var P=N()(O()().mark(function d(){var s,a=arguments;return O()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},28070:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return $}});var t=e(5574),v=e.n(t),L=e(15009),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(76777),x=e(74072),B=e(2862),A=e(78469),$={"examples-core-react-003-schema-demo-0":{component:p.memo(p.lazy(I()(O()().mark(function R(){var P,h,d,s,a,o,n,r;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=l.sent,h=P.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=l.sent,s=d.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{placeholder:"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 placeholder"}},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u751C\u751C\u7684\u6C34\u679C",options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-1":{component:p.memo(p.lazy(I()(O()().mark(function R(){var P,h,d,s,a,o,n,r;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=l.sent,h=P.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=l.sent,s=d.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u5FC5\u586B"},fruit:{title:"\u6C34\u679C",renderType:"Select",required:"$.open",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-2":{component:p.memo(p.lazy(I()(O()().mark(function R(){var P,h,d,s,a,o,n,r;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=l.sent,h=P.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=l.sent,s=d.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",disabled:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u7981\u7528"},fruit:{title:"\u6C34\u679C",renderType:"Select",disabled:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-3":{component:p.memo(p.lazy(I()(O()().mark(function R(){var P,h,d,s,a,o,n,r,u,l;return O()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return P=g.sent,h=P.useState,g.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return d=g.sent,s=d.default,g.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return a=g.sent,o=a.default,g.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return n=g.sent,r=n.default,u={renderType:"Root",properties:{title:{title:"\u63D0\u95EE",renderType:"InputText",readonly:!0},fruit:{title:"\u7B54\u6848",renderType:"Select",readonly:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}},open:{renderType:"Switch",title:"\u5207\u6362\u5230\u53EA\u8BFB\u6001"}}},l=function(){var j=h({title:"\u54EA\u4E00\u79CD\u6C34\u679C\u6700\u751C\u5462",fruit:"watermelon"}),y=v()(j,2),i=y[0],C=y[1];return p.createElement(s,{value:i,schema:u,onChange:C,itemLayout:o,renderers:r})},g.abrupt("return",{default:l});case 19:case"end":return g.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,react:_||(_=e.t(p,2)),"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-4":{component:p.memo(p.lazy(I()(O()().mark(function R(){var P,h,d,s,a,o,n,r;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=l.sent,h=P.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=l.sent,s=d.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",hidden:!0},open:{renderType:"Switch",title:"\u9690\u85CF\u6C34\u679C\u9009\u62E9"},fruit:{title:"\u6C34\u679C",renderType:"Select",hidden:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}},"examples-core-react-003-schema-demo-5":{component:p.memo(p.lazy(I()(O()().mark(function R(){var P,h,d,s,a,o,n,r;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=l.sent,h=P.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return d=l.sent,s=d.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6C34\u679C"}]}}},r=function(){return p.createElement(h,{schema:n,itemLayout:s,renderers:o})},l.abrupt("return",{default:r});case 15:case"end":return l.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":B,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":x,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var R=I()(O()().mark(function h(){var d,s=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}}}},58970:function(G,c,e){e.r(c),e.d(c,{demos:function(){return x}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(84894),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-100-layout-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function B(){var A,$,R,P,h,d,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,P=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return O.createElement($,{layout:"normal",schema:s,itemLayout:P,renderers:d})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var R,P=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,P));case 3:case"end":return d.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-1":{component:O.memo(O.lazy(L()(t()().mark(function B(){var A,$,R,P,h,d,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,P=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber",span:12},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber",span:12},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber",span:12,spanStart:1},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber",span:12},rotate:{title:"\u65CB\u8F6C\u89D2\u5EA6",renderType:"InputNumber"}}},a=function(){return O.createElement($,{layout:"normal",schema:s,itemLayout:P,renderers:d})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var R,P=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,P));case 3:case"end":return d.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-2":{component:O.memo(O.lazy(L()(t()().mark(function B(){var A,$,R,P,h,d,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,P=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return O.createElement($,{schema:s,layout:"autoFill",itemLayout:P,renderers:d})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var R,P=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,P));case 3:case"end":return d.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-3":{component:O.memo(O.lazy(L()(t()().mark(function B(){var A,$,R,P,h,d,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,P=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return O.createElement($,{schema:s,layout:"autoFit",itemLayout:P,renderers:d})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var R,P=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,P));case 3:case"end":return d.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-4":{component:O.memo(O.lazy(L()(t()().mark(function B(){var A,$,R,P,h,d,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,P=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return O.createElement($,{schema:s,layout:"autoFill",layoutMinMax:[230,230],itemLayout:P,renderers:d})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var R,P=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,P));case 3:case"end":return d.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}}}},61985:function(G,c,e){e.r(c),e.d(c,{demos:function(){return P}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(23382),I=e(74072),p=e(34539),N=e(48201),x=e(93967),B=e.n(x),A=e(29298),$=e(2862),R=e(59868),P={"examples-core-react-101-item-layout-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y,i;return t()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return d=b.sent,s=d.default,b.next=6,Promise.resolve().then(e.bind(e,34539));case 6:return a=b.sent,o=a.QuestionCircleOutlined,b.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=b.sent,r=n.Popover,b.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return u=b.sent,l=u.default,b.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return m=b.sent,g=m.default,b.next=22,Promise.resolve().then(e.bind(e,29298));case 22:return f=b.sent,j=function(S){var D=S.body,M=S.schema,E=S.validator,K=S.required,W=S.prefixClassNames;return O.createElement("div",{className:W("item-layout-vertical")},O.createElement("div",{className:l(W("item-header"),f.header)},K&&O.createElement("span",{className:l(W("item-mark"),f.mark)},"*"),O.createElement("span",{className:l(W("item-title"),f.title)},M.title),!!M.titleDescription&&O.createElement(r,{placement:"top",trigger:"hover",content:M.titleDescription},O.createElement(o,{className:l(W("item-title-tooltip"),f.titleTooltip)}))),O.createElement("div",{className:W("item-body")},D),O.createElement("div",{className:l(W("item-footer"),f.footer)},E.status==="error"&&!!E.message&&O.createElement("div",{className:l(W("item-error-msg"),f.errorMsg)},E.message),!!M.description&&O.createElement("div",{className:l(W("item-desc"),f.desc)},M.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},i=function(){return O.createElement(s,{schema:y,itemLayout:j,renderers:g})},b.abrupt("return",{default:i});case 27:case"end":return b.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Vertical/styles.ts":{type:"FILE",value:e(29758).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Vertical/styles.ts":A,"./renderers/common.tsx":$,"@schema-render/core-react":I,"@ant-design/icons":p,antd:N,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Vertical/styles.ts":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=L()(t()().mark(function s(){var a,o=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-101-item-layout-demo-1":{component:O.memo(O.lazy(L()(t()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y,i;return t()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return d=b.sent,s=d.default,b.next=6,Promise.resolve().then(e.bind(e,34539));case 6:return a=b.sent,o=a.QuestionCircleOutlined,b.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return n=b.sent,r=n.Popover,b.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return u=b.sent,l=u.default,b.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return m=b.sent,g=m.default,b.next=22,Promise.resolve().then(e.bind(e,59868));case 22:return f=b.sent,j=function(S){var D=S.body,M=S.schema,E=S.validator,K=S.required,W=S.prefixClassNames;return O.createElement("div",{className:l(W("item-layout-horizontal"),f.horizontal)},O.createElement("div",{className:l(W("item-main"),f.main)},O.createElement("div",{className:l(W("item-header"),f.header)},K&&O.createElement("span",{className:l(W("item-mark"),f.mark)},"*"),O.createElement("span",{className:l(W("item-title"),f.title)},M.title),!!M.titleDescription&&O.createElement(r,{placement:"top",trigger:"hover",content:M.titleDescription},O.createElement(o,{className:l(W("item-title-tooltip"),f.titleTooltip)}))),O.createElement("div",{className:l(W("item-body"),f.body)},D)),O.createElement("div",{className:l(W("item-footer"),f.footer)},E.status==="error"&&!!E.message&&O.createElement("div",{className:l(W("item-error-msg"),f.errorMsg)},E.message),!!M.description&&O.createElement("div",{className:l(W("item-desc"),f.desc)},M.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},i=function(){return O.createElement(s,{schema:y,itemLayout:j,renderers:g})},b.abrupt("return",{default:i});case 27:case"end":return b.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal/styles.ts":{type:"FILE",value:e(52551).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal/styles.ts":R,"./renderers/common.tsx":$,"@schema-render/core-react":I,"@ant-design/icons":p,antd:N,classnames:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/styles.ts":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=L()(t()().mark(function s(){var a,o=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},83222:function(G,c,e){e.r(c),e.d(c,{demos:function(){return x}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(86131),I=e(74072),p=e(78469),N=e(2862),x={"examples-core-react-102-prefix-cls-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function B(){var A,$,R,P,h,d,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,P=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return O.createElement($,{schema:s,itemLayout:P,renderers:d,prefixCls:"my-cls"})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-102-prefix-cls-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":p,"./renderers/common.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var R,P=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,P));case 3:case"end":return d.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}}}},81235:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return d}});var t=e(97857),v=e.n(t),L=e(15009),O=e.n(L),F=e(5574),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(15208),A=e(74072),$=e(41989),R=e(78469),P=e(2862),h=e(48201),d={"examples-core-react-200-change-event-demo-0":{component:x.memo(x.lazy(N()(O()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i;return O()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=b.sent,o=a.useState,b.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=b.sent,r=n.default,b.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return u=b.sent,l=u.default,b.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=b.sent,g=m.default,b.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=b.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var S=o({}),D=I()(S,2),M=D[0],E=D[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,value:M,onChange:function(W){return E(W)}}),x.createElement(l,{value:M}))},b.abrupt("return",{default:i});case 23:case"end":return b.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":P,react:_||(_=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P},renderOpts:{compile:function(){var s=N()(O()().mark(function o(){var n,r=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-1":{component:x.memo(x.lazy(N()(O()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i;return O()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=b.sent,o=a.useState,b.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=b.sent,r=n.default,b.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return u=b.sent,l=u.default,b.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=b.sent,g=m.default,b.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=b.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var S=o({}),D=I()(S,2),M=D[0],E=D[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,onChange:function(W,V){return E(V)}}),x.createElement(l,{value:M}))},b.abrupt("return",{default:i});case 23:case"end":return b.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":P,react:_||(_=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P},renderOpts:{compile:function(){var s=N()(O()().mark(function o(){var n,r=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-2":{component:x.memo(x.lazy(N()(O()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i;return O()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=b.sent,o=a.useState,b.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=b.sent,r=n.default,b.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return u=b.sent,l=u.default,b.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return m=b.sent,g=m.default,b.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=b.sent,j=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},i=function(){var S=o({}),D=I()(S,2),M=D[0],E=D[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,itemLayout:j,renderers:g,onItemChange:function(W){return E(W)}}),x.createElement(l,{value:M}))},b.abrupt("return",{default:i});case 23:case"end":return b.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":P,react:_||(_=e.t(x,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P},renderOpts:{compile:function(){var s=N()(O()().mark(function o(){var n,r=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-3":{component:x.memo(x.lazy(N()(O()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S;return O()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=M.sent,o=a.useState,M.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=M.sent,r=n.Input,M.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return u=M.sent,l=u.default,M.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return m=M.sent,g=m.default,M.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return f=M.sent,j=f.default,M.next=22,Promise.resolve().then(e.bind(e,78469));case 22:return y=M.sent,i=y.default,C={component:function(K){var W,V=K.schema,U=K.value,z=K.disabled,H=K.onChange;return x.createElement(r,v()(v()({placeholder:"\u8BF7\u8F93\u5165".concat((W=V.title)!==null&&W!==void 0?W:"")},V.renderOptions),{},{value:U,disabled:z,onChange:function(Y){H(Y.target.value,{extra:Math.random()})}}))}},b=v()({InputTextWithExtra:C},j),T={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputTextWithExtra"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},S=function(){var K=o({}),W=I()(K,2),V=W[0],U=W[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(l,{schema:T,itemLayout:i,renderers:b,onItemChange:function(H){return U(H)}}),x.createElement(g,{value:V}))},M.abrupt("return",{default:S});case 29:case"end":return M.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":P,react:_||(_=e.t(x,2)),antd:h,"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P},renderOpts:{compile:function(){var s=N()(O()().mark(function o(){var n,r=arguments;return O()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}}}},58297:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return P}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(233),x=e(74072),B=e(41989),A=e(78469),$=e(2862),R=e(48201),P={"examples-core-react-210-relation-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=i.sent,s=d.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=i.sent,l=u.default,i.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},j=function(){var b=s({}),T=O()(b,2),S=T[0],D=T[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:f,itemLayout:g,renderers:l,value:S,onChange:function(E,K){(K.sPath==="width"||K.sPath==="height")&&(E.width=K.value,E.height=K.value),D(E)}}),p.createElement(r,{value:S}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:_||(_=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-210-relation-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=i.sent,s=d.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=i.sent,l=u.default,i.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},j=function(){var b=s({}),T=O()(b,2),S=T[0],D=T[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(o,{schema:f,itemLayout:g,renderers:l,watch:{width:function(E){E.height=E.width},height:function(E){E.width=E.height}},value:S,onChange:D}),p.createElement(r,{value:S}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:_||(_=e.t(p,2)),"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-210-relation-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y,i;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=b.sent,s=d.useState,b.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return a=b.sent,o=a.Button,b.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return n=b.sent,r=n.default,b.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return u=b.sent,l=u.default,b.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return m=b.sent,g=m.default,f={BankSelect:{component:function(S){var D=S.value,M=S.sPath,E=S.onChange,K=function(){var U=String(Math.random()).slice(2,6),z={bank_id:"id_".concat(U),bank_account:"111222333".concat(U),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(U),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(U,"\u652F\u884C")};E(z[M],{extra:z})},W={display:"flex",width:160,padding:"4px 10px",marginRight:10,border:"1px solid #ececec",borderRadius:6};return p.createElement("div",{style:{display:"flex"}},p.createElement("div",{style:W},D),p.createElement(o,{onClick:K},"\u9009\u62E9\u8D26\u6237"))}}},j={renderType:"Root",properties:{bank_account:{title:"\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},bank_name:{title:"\u5F00\u6237\u94F6\u884C",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C",renderType:"BankSelect"}}},y=function(S,D){S.bank_id=D.extra.bank_id,S.bank_account=D.extra.bank_account,S.bank_name=D.extra.bank_name,S.bank_branch_name=D.extra.bank_branch_name},i=function(){var S=s({}),D=O()(S,2),M=D[0],E=D[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:j,itemLayout:g,renderers:f,watch:{bank_account:y,bank_name:y,bank_branch_name:y},value:M,onChange:E}),p.createElement(l,{value:M}))},b.abrupt("return",{default:i});case 25:case"end":return b.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":A,react:_||(_=e.t(p,2)),antd:R,"@schema-render/core-react":x,"@examples/components/SyntaxHighlighter":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},33632:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return P}});var t=e(5574),v=e.n(t),L=e(97857),O=e.n(L),F=e(15009),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(39008),A=e(48201),$=e(74072),R=e(78469),P={"examples-core-react-220-renderer-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function h(){var d,s,a,o,n,r,u,l,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return d=f.sent,s=d.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=f.sent,o=a.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,u={MyRate:{component:function(y){var i=y.disabled,C=y.value,b=y.onChange;return x.createElement(s,{disabled:i,value:C,onChange:b})}}},l={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},m=function(){return x.createElement(o,{schema:l,itemLayout:r,renderers:u})},f.abrupt("return",{default:m});case 16:case"end":return f.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var h=N()(I()().mark(function s(){var a,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-220-renderer-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function h(){var d,s,a,o,n,r,u,l,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return d=f.sent,s=d.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=f.sent,o=a.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,r=n.default,u={MyRate:{formItem:function(y){var i=y.schema,C=y.disabled,b=y.value,T=y.onChange;return x.createElement("div",null,x.createElement("strong",{style:{color:"red",marginRight:10}},"\u3010",i.title,"\u3011"),x.createElement(s,{disabled:C,value:b,onChange:T}))}}},l={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},m=function(){return x.createElement(o,{schema:l,itemLayout:r,renderers:u})},f.abrupt("return",{default:m});case 16:case"end":return f.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var h=N()(I()().mark(function s(){var a,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-core-react-220-renderer-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j;return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=i.sent,s=d.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return u=i.sent,l=u.Button,m=u.Input,g={InputText:{component:function(b){var T,S=b.schema,D=b.value,M=b.disabled,E=b.readonly,K=b.onChange;return E?x.createElement("div",null,D):x.createElement(m,O()(O()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((T=S.title)!==null&&T!==void 0?T:"")},S.renderOptions),{},{value:D!=null?D:"",disabled:M,onChange:function(V){return K(V.target.value)}}))}},TextArea:{component:function(b){var T,S=b.schema,D=b.value,M=b.disabled,E=b.onChange;return x.createElement(m.TextArea,O()(O()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((T=S.title)!==null&&T!==void 0?T:"")},S.renderOptions),{},{value:D!=null?D:"",onChange:function(W){return E(W.target.value)},disabled:M}))},readonlyComponent:function(b){var T=b.value;return x.createElement("div",null,T)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},j=function(){var b=s(!1),T=v()(b,2),S=T[0],D=T[1],M=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),E=v()(M,2),K=E[0],W=E[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(o,{schema:f,itemLayout:r,renderers:g,value:K,onChange:W,readonly:S}),x.createElement(l,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return D(!S)}},S?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":R,react:_||(_=e.t(x,2)),"@schema-render/core-react":$,antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var h=N()(I()().mark(function s(){var a,o=arguments;return I()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},95902:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return h}});var t=e(15009),v=e.n(t),L=e(97857),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(37424),x=e(48201),B=e(74072),A=e(33517),$=e(78469),R=e(47621),P=e(40644),h={"examples-core-react-221-renderer-object-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=T.sent,a=s.Input,T.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=T.sent,n=o.default,T.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=T.sent,u=r.default,T.next=14,Promise.resolve().then(e.bind(e,47621));case 14:return l=T.sent,m=l.default,T.next=18,Promise.resolve().then(e.bind(e,40644));case 18:return g=T.sent,f=g.default,T.next=22,Promise.resolve().then(e.bind(e,33517));case 22:return j=T.sent,y=j.default,i={Object:y,ObjectCollapse:f,InputText:{component:function(D){var M,E=D.schema,K=D.value,W=D.disabled,V=D.onChange;return p.createElement(a,O()(O()({placeholder:"\u8BF7\u8F93\u5165".concat((M=E.title)!==null&&M!==void 0?M:"")},E.renderOptions),{},{value:K,disabled:W,onChange:function(z){return V(z.target.value)}}))}}},C=function(){return p.createElement(n,{schema:m,itemLayout:u,renderers:i})},T.abrupt("return",{default:C});case 27:case"end":return T.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.jsx"},context:{"./renderers/object/ObjectNormal.tsx":A,"./item-layout/Horizontal.tsx":$,"./schemas/object.ts":R,"./renderers/object/ObjectCollapse.tsx":P,antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":P},renderOpts:{compile:function(){var d=I()(v()().mark(function a(){var o,n=arguments;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-core-react-221-renderer-object-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D,M;return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=K.sent,a=s.Input,K.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return o=K.sent,n=o.useRef,K.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return r=K.sent,u=r.default,K.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return l=K.sent,m=l.Button,g=l.message,K.next=19,Promise.resolve().then(e.bind(e,78469));case 19:return f=K.sent,j=f.default,K.next=23,Promise.resolve().then(e.bind(e,47621));case 23:return y=K.sent,i=y.default,K.next=27,Promise.resolve().then(e.bind(e,40644));case 27:return C=K.sent,b=C.default,K.next=31,Promise.resolve().then(e.bind(e,33517));case 31:return T=K.sent,S=T.default,D={Object:S,ObjectCollapse:b,InputText:{component:function(V){var U,z=V.schema,H=V.value,Q=V.disabled,Y=V.onChange;return p.createElement(a,O()(O()({placeholder:"\u8BF7\u8F93\u5165".concat((U=z.title)!==null&&U!==void 0?U:"")},z.renderOptions),{},{value:H,disabled:Q,onChange:function(re){return Y(re.target.value)}}))}}},M=function(){var V=n(null),U=function(){var z=I()(v()().mark(function H(){var Q,Y,te;return v()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,(Q=V.current)===null||Q===void 0?void 0:Q.validate();case 2:Y=de.sent,te=Y.hasError,te||g.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return de.stop()}},H)}));return function(){return z.apply(this,arguments)}}();return p.createElement("div",null,p.createElement(u,{ref:V,schema:i,itemLayout:j,renderers:D}),p.createElement(m,{type:"primary",onClick:U,style:{marginTop:15}},"\u63D0\u4EA4"))},K.abrupt("return",{default:M});case 36:case"end":return K.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":A,"./item-layout/Horizontal.tsx":$,"./schemas/object.ts":R,"./renderers/object/ObjectCollapse.tsx":P,antd:x,react:_||(_=e.t(p,2)),"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":P},renderOpts:{compile:function(){var d=I()(v()().mark(function a(){var o,n=arguments;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}}}},93609:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(48966),v={}},90239:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return h}});var t=e(5574),v=e.n(t),L=e(97857),O=e.n(L),F=e(15009),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(92436),A=e(74072),$=e(2862),R=e(78469),P=e(48201),h={"examples-core-react-223-validator-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function d(){var s,a,o,n,r,u,l,m;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=f.sent,a=s.default,f.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=f.sent,n=o.default,f.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=f.sent,u=r.default,l={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},m=function(){return x.createElement(a,{schema:l,itemLayout:n,renderers:u})},f.abrupt("return",{default:m});case 15:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":R,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var d=N()(I()().mark(function a(){var o,n=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function d(){var s,a,o,n,r,u,l,m,g,f;return I()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return s=y.sent,a=s.default,y.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=y.sent,n=o.default,y.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return r=y.sent,u=r.default,l={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{validator:"detectSensitiveWord"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,rules:[{validator:"detectSensitiveWord",message:"TIPS: \u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\u54E6"}]}}},m=function(){var i=N()(I()().mark(function C(b){return I()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.abrupt("return",new Promise(function(D){setTimeout(function(){return D({ok:!1})},200)}));case 1:case"end":return S.stop()}},C)}));return function(b){return i.apply(this,arguments)}}(),g={detectSensitiveWord:function(){var i=N()(I()().mark(function b(T){var S,D;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return S=T.value,E.next=3,m(S);case 3:if(D=E.sent,D.ok){E.next=6;break}return E.abrupt("return",{status:"error",message:"\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD"});case 6:case"end":return E.stop()}},b)}));function C(b){return i.apply(this,arguments)}return C}()},f=function(){return x.createElement(a,{schema:l,itemLayout:n,renderers:u,validators:g})},y.abrupt("return",{default:f});case 17:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":R,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var d=N()(I()().mark(function a(){var o,n=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y;return I()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=C.sent,a=s.Rate,C.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=C.sent,n=o.default,C.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return r=C.sent,u=r.default,C.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return l=C.sent,m=l.default,g={component:function(T){var S=T.schema,D=T.value,M=T.disabled,E=T.onChange;return x.createElement(a,O()(O()({},S.renderOptions),{},{value:D,disabled:M,onChange:function(W){return E(W)}}))},validator:function(T){var S=T.value;return S===0?{status:"error",message:"\u8BF7\u9009\u62E9\u8BC4\u5206"}:S<=3?{status:"error",message:"\u4EB2\uFF0C\u8BC4\u5206\u53EF\u4EE5\u6253\u9AD8\u4E00\u70B9\u54E6\u{1F62F}"}:{status:"error",message:"\u54C7\uFF0Cnice~"}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"},rate:{renderType:"Rate",title:"\u8BC4\u5206",required:!0}}},j=O()(O()({},m),{},{Rate:g}),y=function(){return x.createElement(n,{schema:f,itemLayout:u,renderers:j})},C.abrupt("return",{default:y});case 21:case"end":return C.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":R,antd:P,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var d=N()(I()().mark(function a(){var o,n=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-core-react-223-validator-demo-3":{component:x.memo(x.lazy(N()(I()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C;return I()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=T.sent,a=s.useState,o=s.useRef,T.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return n=T.sent,r=n.Button,u=n.message,T.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return l=T.sent,m=l.default,T.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return g=T.sent,f=g.default,T.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return j=T.sent,y=j.default,i={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},C=function(){var D=a({}),M=v()(D,2),E=M[0],K=M[1],W=o(null);function V(){return U.apply(this,arguments)}function U(){return U=N()(I()().mark(function z(){var H,Q,Y;return I()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,W.current.validate();case 2:if(H=re.sent,Q=H.hasError,Y=H.errorList,console.log("[validate] hasError: ",Q),console.log("[validate] errorList: ",Y),!Q){re.next=9;break}return re.abrupt("return",u.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:u.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return re.stop()}},z)})),U.apply(this,arguments)}return x.createElement("div",null,x.createElement(m,{ref:W,schema:i,value:E,onChange:K,itemLayout:y,renderers:f}),x.createElement(r,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:V},"\u63D0\u4EA4"))},T.abrupt("return",{default:C});case 25:case"end":return T.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":R,"./renderers/common.tsx":$,react:_||(_=e.t(x,2)),antd:P,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var d=N()(I()().mark(function a(){var o,n=arguments;return I()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}}}},61022:function(G,c,e){e.r(c),e.d(c,{demos:function(){return x}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(86685),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-230-global-status-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function B(){var A,$,R,P,h,d,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,P=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},a=function(){return O.createElement($,{disabled:!0,schema:s,itemLayout:P,renderers:d})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-230-global-status-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var R,P=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,P));case 3:case"end":return d.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}}}},61650:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return d}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(43315),A=e(48201),$=e(74072),R=e(33517),P=e(2862),h=e(78469),d={"examples-core-react-250-scroll-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=E.sent,o=a.useState,n=a.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,u=r.Button,l=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,b=C.default,T=I()(I()({},j),{},{Object:b}),S={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},D=function(){var W=o({}),V=O()(W,2),U=V[0],z=V[1],H=n(null);return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(g,{style:{maxWidth:500,flexGrow:1,height:500,padding:"10px 5px",border:"1px solid #ccc",overflow:"auto"},ref:H,schema:S,value:U,onChange:z,itemLayout:i,renderers:T}),x.createElement(l,{direction:"vertical"},x.createElement(u,{onClick:function(){var Y;return(Y=H.current)===null||Y===void 0?void 0:Y.scrollTo("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(u,{onClick:function(){var Y;(Y=H.current)===null||Y===void 0||Y.scrollTo(["object_spec","title"],{gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(u,{onClick:function(){var Y;(Y=H.current)===null||Y===void 0||Y.scrollTo("object_other.content",{xAxis:!1})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011")))},E.abrupt("return",{default:D});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":R,"./renderers/common.tsx":P,"./item-layout/Horizontal.tsx":h,react:_||(_=e.t(x,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var s=N()(v()().mark(function o(){var n,r=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-250-scroll-demo-1":{component:x.memo(x.lazy(N()(v()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=E.sent,o=a.useState,n=a.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,u=r.Button,l=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,b=C.default,T=I()(I()({},j),{},{Object:b}),S={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},D=function(){var W=o({}),V=O()(W,2),U=V[0],z=V[1],H=n(null),Q=n(null);return x.createElement("div",{ref:Q,style:{display:"flex",columnGap:20,height:500,padding:10,border:"1px solid #ccc",overflow:"auto",position:"relative"}},x.createElement(g,{style:{maxWidth:500,flexGrow:1},ref:H,schema:S,value:U,onChange:z,itemLayout:i,renderers:T}),x.createElement("div",{style:{position:"sticky",top:0}},x.createElement(l,{direction:"vertical"},x.createElement(u,{onClick:function(){var te;(te=H.current)===null||te===void 0||te.scrollTo("object_basic",{positionedElement:Q.current})}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(u,{onClick:function(){var te;(te=H.current)===null||te===void 0||te.scrollTo(["object_spec","title"],{positionedElement:Q.current,gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(u,{onClick:function(){var te;(te=H.current)===null||te===void 0||te.scrollTo("object_other.content",{positionedElement:Q.current})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},E.abrupt("return",{default:D});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":R,"./renderers/common.tsx":P,"./item-layout/Horizontal.tsx":h,react:_||(_=e.t(x,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var s=N()(v()().mark(function o(){var n,r=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-core-react-250-scroll-demo-2":{component:x.memo(x.lazy(N()(v()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=E.sent,o=a.useState,n=a.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return r=E.sent,u=r.Button,l=r.Space,E.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return m=E.sent,g=m.default,E.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=E.sent,j=f.default,E.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=E.sent,i=y.default,E.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return C=E.sent,b=C.default,T=I()(I()({},j),{},{Object:b}),S={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},D=function(){var W=o({}),V=O()(W,2),U=V[0],z=V[1],H=n(null),Q=function(te){var re,de,Te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;(re=H.current)===null||re===void 0||re.scrollTo(te,{positionedElement:window,gap:-76+Te,behavior:"instant"});var ue=(de=H.current)===null||de===void 0||(de=de.findItem(te))===null||de===void 0?void 0:de.getRootElement();ue==null||ue.classList.add("focus-out"),setTimeout(function(){ue==null||ue.classList.remove("focus-out")},1e3)};return x.createElement("div",{style:{display:"flex",columnGap:20}},x.createElement(g,{style:{maxWidth:500,flexGrow:1},ref:H,schema:S,value:U,onChange:z,itemLayout:i,renderers:T}),x.createElement("div",null,x.createElement(l,{direction:"vertical"},x.createElement(u,{onClick:function(){return Q("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),x.createElement(u,{onClick:function(){return Q(["object_spec","title"],-20)}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),x.createElement(u,{onClick:function(){return Q("object_other.content")}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},E.abrupt("return",{default:D});case 30:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":R,"./renderers/common.tsx":P,"./item-layout/Horizontal.tsx":h,react:_||(_=e.t(x,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":R,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":P,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var s=N()(v()().mark(function o(){var n,r=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}}}},49669:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return R}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(46715),x=e(48201),B=e(74072),A=e(78469),$=e(2862),R={"examples-core-react-280-open-api-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j,y;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=C.sent,d=h.useState,s=h.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return a=C.sent,o=a.Button,n=a.message,C.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=C.sent,u=r.default,C.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return l=C.sent,m=l.default,C.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return g=C.sent,f=g.default,j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var T=d({}),S=O()(T,2),D=S[0],M=S[1],E=s(null);function K(){return W.apply(this,arguments)}function W(){return W=I()(v()().mark(function V(){var U,z,H;return v()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,E.current.validate();case 2:if(U=Y.sent,z=U.hasError,H=U.errorList,console.log("[validate] hasError: ",z),console.log("[validate] errorList: ",H),!z){Y.next=9;break}return Y.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:n.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return Y.stop()}},V)})),W.apply(this,arguments)}return p.createElement("div",null,p.createElement(u,{ref:E,schema:j,value:D,onChange:M,itemLayout:f,renderers:m}),p.createElement(o,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:K},"\u63D0\u4EA4"))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:_||(_=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j,y;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=C.sent,d=h.useState,s=h.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return a=C.sent,o=a.Button,n=a.message,C.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return r=C.sent,u=r.default,C.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return l=C.sent,m=l.default,C.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return g=C.sent,f=g.default,j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var T=d({}),S=O()(T,2),D=S[0],M=S[1],E=s(null);function K(){return W.apply(this,arguments)}function W(){return W=I()(v()().mark(function U(){var z,H;return v()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,E.current.validate();case 2:if(z=Y.sent,H=z.hasError,!H){Y.next=6;break}return Y.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 6:n.success("\u9A8C\u8BC1\u6210\u529F");case 7:case"end":return Y.stop()}},U)})),W.apply(this,arguments)}var V=function(){E.current.resetError()};return p.createElement("div",null,p.createElement(u,{ref:E,schema:j,value:D,onChange:M,itemLayout:f,renderers:m}),p.createElement(o,{type:"primary",style:{margin:"24px 15px 0 115px"},onClick:K},"\u63D0\u4EA4"),p.createElement(o,{onClick:V},"\u91CD\u7F6E\u9519\u8BEF\u63D0\u793A"))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:_||(_=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,d=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,a=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return l=y.sent,m=l.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=d(null),b=function(){C.current.resetValue()};return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:m,renderers:u}),p.createElement(a,{style:{margin:"24px 15px 0 115px"},onClick:b},"\u91CD\u7F6E"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:_||(_=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,d=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,a=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return l=y.sent,m=l.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=d(null);return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:m,renderers:u}),p.createElement(a,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var T,S=(T=C.current)===null||T===void 0?void 0:T.getRootElement();console.log("rootElement:",S)}},"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:_||(_=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-4":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,d=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return s=y.sent,a=s.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return l=y.sent,m=l.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var C=d(null);return p.createElement("div",null,p.createElement(n,{ref:C,schema:g,itemLayout:m,renderers:u}),p.createElement(a,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var T,S=(T=C.current)===null||T===void 0||(T=T.findItem("title"))===null||T===void 0?void 0:T.getRootElement();console.log("formItemRootElement:",S)}},"\u83B7\u53D6\u3010\u6807\u9898\u3011\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:_||(_=e.t(p,2)),antd:x,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},68642:function(G,c,e){e.r(c),e.d(c,{demos:function(){return x}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(35786),I=e(74072),p=e(2862),N=e(78469),x={"examples-core-react-300-default-value-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function B(){var A,$,R,P,h,d,s,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return R=n.sent,P=R.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,d=h.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},a=function(){return O.createElement($,{schema:s,defaultValue:{title:"\u6211\u662F\u6807\u9898"},itemLayout:P,renderers:d})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"examples-core-react-300-default-value-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":p,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":I,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":p,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:function(){var B=L()(t()().mark(function $(){var R,P=arguments;return t()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(R=d.sent).default.apply(R,P));case 3:case"end":return d.stop()}},$)}));function A(){return B.apply(this,arguments)}return A}()}}}},95206:function(G,c,e){e.r(c),e.d(c,{demos:function(){return A}});var _=e(15009),t=e.n(_),v=e(97857),L=e.n(v),O=e(99289),F=e.n(O),I=e(67294),p=e(69708),N=e(74072),x=e(48201),B=e(78469),A={"examples-core-react-600-catch-error-tips-demo-0":{component:I.memo(I.lazy(F()(t()().mark(function $(){var R,P,h,d,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return R=l.sent,P=R.default,l.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return h=l.sent,d=h.Input,l.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=l.sent,a=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(d.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(T){return C(T.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(P,{schema:n,itemLayout:a,renderers:o})},l.abrupt("return",{default:r});case 16:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=F()(t()().mark(function P(){var h,d=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,d));case 3:case"end":return a.stop()}},P)}));function R(){return $.apply(this,arguments)}return R}()}},"examples-core-react-600-catch-error-tips-demo-1":{component:I.memo(I.lazy(F()(t()().mark(function $(){var R,P,h,d,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return R=l.sent,P=R.default,l.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return h=l.sent,d=h.Input,l.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=l.sent,a=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(d.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(T){return C(T.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(P,{catchErrorTips:"silent",schema:n,itemLayout:a,renderers:o})},l.abrupt("return",{default:r});case 16:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=F()(t()().mark(function P(){var h,d=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,d));case 3:case"end":return a.stop()}},P)}));function R(){return $.apply(this,arguments)}return R}()}},"examples-core-react-600-catch-error-tips-demo-2":{component:I.memo(I.lazy(F()(t()().mark(function $(){var R,P,h,d,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return R=l.sent,P=R.default,l.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return h=l.sent,d=h.Input,l.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=l.sent,a=s.default,o={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(g){var f,j=g.schema,y=g.value,i=g.disabled,C=g.onChange;return I.createElement(d.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=j.title)!==null&&f!==void 0?f:"")},j.renderOptions),{},{value:y,onChange:function(T){return C(T.target.value)},disabled:i}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return I.createElement(P,{catchErrorTips:function(){return I.createElement("div",{style:{color:"yellow",background:"black"}},"\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F")},schema:n,itemLayout:a,renderers:o})},l.abrupt("return",{default:r});case 16:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":B,"@schema-render/core-react":N,antd:x,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":B},renderOpts:{compile:function(){var $=F()(t()().mark(function P(){var h,d=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,d));case 3:case"end":return a.stop()}},P)}));function R(){return $.apply(this,arguments)}return R}()}}}},35963:function(G,c,e){e.r(c),e.d(c,{demos:function(){return B}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(96687),I=e(74072),p=e(78484),N=e(2862),x=e(78469),B={"examples-core-react-700-locale-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function A(){var $,R,P,h,d,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return $=l.sent,R=$.default,l.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return P=l.sent,h=P.default,l.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return d=l.sent,s=d.default,l.next=14,Promise.resolve().then(e.bind(e,78484));case 14:return a=l.sent,o=a.default,n={renderType:"Root",properties:{title:{title:"Title",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"Please enter a title with a maximum of 10 characters"},required:!0},content:{title:"Content",renderType:"TextArea",renderOptions:{placeholder:"Please enter content"},required:!0}}},r=function(){return O.createElement(R,{style:{maxWidth:600},schema:n,itemLayout:h,renderers:s,locale:o})},l.abrupt("return",{default:r});case 19:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-core-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IRootSchema } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":N,"./item-layout/Horizontal.tsx":x,"@schema-render/core-react":I,"@schema-render/core-react/dist/esm/locale/en_US":p,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":N,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":x},renderOpts:{compile:function(){var A=L()(t()().mark(function R(){var P,h=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},R)}));function $(){return A.apply(this,arguments)}return $}()}}}},82440:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(85105),v={}},95491:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return $}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(19632),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(2755),A=e(74072),$={"examples-core-react-890-benchmark-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function R(){var P,h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=y.sent,h=P.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=y.sent,s=d.useState,a=d.Profiler,o=function(C){var b=C.schema,T=C.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,b.title),x.createElement("div",null,T))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(C){var b=C.schema,T=C.value,S=C.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(b.title),value:T||"",onChange:function(M){return S(M.target.value)}}))}}},u=600,l={renderType:"Root",properties:{}},m=I()(Array(u).keys()),m.forEach(function(i){var C="field_".concat(i);l.properties[C]={title:C,renderType:"InputText"}}),g=["100px","1fr"],f=function(){var C=s({}),b=O()(C,2),T=b[0],S=b[1],D=s(""),M=O()(D,2),E=M[0],K=M[1],W=function(U,z){var H=parseInt(z.sPath.slice(6)),Q=H-1,Y=H+1,te="field_".concat(Y>=u?Q:Y);U[te]=z.value,S(U)};return x.createElement(a,{id:"sr",onRender:function(U,z,H,Q,Y,te){var re="\u64CD\u4F5C: ".concat(z,", \u6E32\u67D3\u8017\u65F6: ").concat(H," (\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u6027\u80FD\u4F1A\u597D\u90A3\u4E48\u4E00\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 Profiler \u6027\u80FD\u5206\u6790)"),de=document.getElementById("profile");de&&(de.innerHTML=re),console.log("===> ".concat(re)),console.log("phase: ".concat(z,", actualDuration: ").concat(H,", baseDuration: ").concat(Q,", startTime: ").concat(Y,", commitTime: ").concat(te))}},x.createElement("h3",{id:"profile"},E),x.createElement(h,{layout:"autoFill",layoutMinMax:g,schema:l,itemLayout:o,renderers:r,value:T,onChange:W}))},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,react:_||(_=e.t(x,2))},renderOpts:{compile:function(){var R=N()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}},"examples-core-react-890-benchmark-demo-1":{component:x.memo(x.lazy(N()(v()().mark(function R(){var P,h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return P=y.sent,h=P.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=y.sent,s=d.useState,a=d.Profiler,o=function(C){var b=C.schema,T=C.body;return x.createElement(x.Fragment,null,x.createElement("h4",null,b.title),x.createElement("div",null,T))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(C){var b=C.schema,T=C.value,S=C.onChange;return x.createElement("div",{style:{display:"flex"}},x.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(b.title),value:T||"",onChange:function(M){return S(M.target.value)}}))}}},u=1800,l={renderType:"Root",properties:{}},m=I()(Array(u).keys()),m.forEach(function(i){var C="field_".concat(i);l.properties[C]={title:C,renderType:"InputText"}}),g=["100px","1fr"],f=function(){var C=s({}),b=O()(C,2),T=b[0],S=b[1],D=function(E,K){var W=parseInt(K.sPath.slice(6)),V=W-1,U=W+1,z="field_".concat(U>=u?V:U);E[z]=K.value,S(E)};return x.createElement(h,{layout:"autoFill",layoutMinMax:g,schema:l,itemLayout:o,renderers:r,value:T,onChange:D})},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,react:_||(_=e.t(x,2))},renderOpts:{compile:function(){var R=N()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}}}},50142:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(88485),v={}},67941:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(97024),v={}},50094:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(92311),v={}},79584:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(78593),v={}},75916:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return R}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(25105),x=e(74072),B=e(48201),A=e(2862),$=e(78469),R={"examples-core-react-950-async-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=i.sent,d=h.default,i.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=i.sent,a=s.default,i.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=i.sent,u=r.useState,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return l=i.sent,m=l.Button,g=l.Space,f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},j=function(){var b=u({}),T=O()(b,2),S=T[0],D=T[1],M=function(){setTimeout(function(){D({title:"\u65B0\u6807\u9898::".concat(String(Math.random()).slice(2,10)),content:"\u65B0\u5185\u5BB9::".concat(String(Math.random()).slice(2,10))})},100)},E=function(){return D({})};return p.createElement(p.Fragment,null,p.createElement(d,{style:{marginBottom:15},schema:f,value:S,onChange:function(W){return D(W)},itemLayout:a,renderers:n}),p.createElement(g,null,p.createElement(m,{type:"primary",onClick:M},"\u52A0\u8F7D\u5F02\u6B65\u6570\u636E"),p.createElement(m,{onClick:E},"\u91CD\u7F6E")))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-950-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":x,react:_||(_=e.t(p,2)),antd:B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},58177:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return R}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(35170),x=e(41989),B=e(74072),A=e(2862),$=e(78469),R={"examples-core-react-951-controllable-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,d=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return l=y.sent,m=l.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=m({}),b=O()(C,2),T=b[0],S=b[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:g,itemLayout:n,renderers:u,value:T,onChange:function(M){return S(M)}}),p.createElement(d,{value:T}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:_||(_=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,d=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return l=y.sent,m=l.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=m({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),b=O()(C,1),T=b[0];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:g,itemLayout:n,renderers:u,value:T}),p.createElement(d,{value:T}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:_||(_=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,d=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return l=y.sent,m=l.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=m({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),b=O()(C,1),T=b[0],S=m(1),D=O()(S,2),M=D[0],E=D[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:g,itemLayout:n,renderers:u,value:T,onChange:function(){E(function(W){return W+1})}}),p.createElement(d,{value:T}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:_||(_=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=m.sent,d=h.default,m.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},u=function(){return p.createElement(d,{schema:r,itemLayout:a,renderers:n})},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":B,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-4":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,d=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return l=y.sent,m=l.useState,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var C=m({}),b=O()(C,2),T=b[0],S=b[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:g,itemLayout:n,renderers:u,onChange:function(M){return S(M)}}),p.createElement(d,{value:T}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:_||(_=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},30266:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return R}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(12727),x=e(41989),B=e(74072),A=e(48201),$=e(78469),R={"examples-core-react-952-multi-renderer-on-change-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j,y;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=C.sent,d=h.default,C.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=C.sent,a=s.default,C.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=C.sent,n=o.default,C.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return r=C.sent,u=r.useState,l=r.useEffect,C.next=19,Promise.resolve().then(e.bind(e,48201));case 19:return m=C.sent,g=m.Input,f={InputOrg:{component:function(T){var S,D=T.schema,M=T.value,E=T.rootValue,K=T.onChange;return console.log("==== InputOrg ===="),console.log("value:",M),console.log("rootValue:",E),l(function(){K("\u673A\u6784 A")},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((S=D.title)!==null&&S!==void 0?S:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}},InputSupplier:{component:function(T){var S,D=T.schema,M=T.value,E=T.rootValue,K=T.onChange;return console.log("==== InputSupplier ===="),console.log("value:",M),console.log("rootValue:",E),l(function(){K("\u4F9B\u5E94\u5546 A")},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((S=D.title)!==null&&S!==void 0?S:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}},InputBill:{component:function(T){var S,D=T.schema,M=T.value,E=T.rootValue,K=T.onChange;return console.log("==== InputBill ===="),console.log("value:",M),console.log("rootValue:",E),l(function(){setTimeout(function(){K("\u5355\u53F7 A")},10)},[]),p.createElement(g,{placeholder:"\u8BF7\u8F93\u5165".concat((S=D.title)!==null&&S!==void 0?S:""),value:M!=null?M:"",onChange:function(V){return K(V.target.value)}})}}},j={renderType:"Root",properties:{org:{title:"\u673A\u6784\u540D\u79F0",renderType:"InputOrg"},supplier:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputSupplier"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputBill"}}},y=function(){var T=u({}),S=O()(T,2),D=S[0],M=S[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:j,itemLayout:n,renderers:f,value:D,onChange:function(K,W){console.log("***** updateBy ".concat(W.sPath," *****")),console.log("value:",K),console.log("e:",W),M(K)}}),p.createElement(d,{value:D}))},C.abrupt("return",{default:y});case 25:case"end":return C.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-core-react-952-multi-renderer-on-change-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":x,"@schema-render/core-react":B,react:_||(_=e.t(p,2)),antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},23450:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return P}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(53143),A=e(74072),$=e(48201),R=e(78469),P={"examples-core-react-953-disabled-component-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=i.sent,s=d.useState,i.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return u=i.sent,l=u.Button,m=u.Input,g={InputText:{component:function(b){var T,S=b.schema,D=b.value,M=b.disabled,E=b.readonly,K=b.onChange;return x.createElement(m,I()(I()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((T=S.title)!==null&&T!==void 0?T:"")},S.renderOptions),{},{value:D!=null?D:"",disabled:M,onChange:function(V){return K(V.target.value)}}))},readonlyComponent:function(b){var T=b.value;return x.createElement(x.Fragment,null,T)},disabledComponent:function(b){var T=b.value;return x.createElement(x.Fragment,null,"Disabled: ",T)}},TextArea:{component:function(b){var T,S=b.schema,D=b.value,M=b.disabled,E=b.onChange;return x.createElement(m.TextArea,I()(I()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((T=S.title)!==null&&T!==void 0?T:"")},S.renderOptions),{},{value:D!=null?D:"",onChange:function(W){return E(W.target.value)},disabled:M}))},readonlyComponent:function(b){var T=b.value;return x.createElement("div",null,T)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},j=function(){var b=s(!1),T=O()(b,2),S=T[0],D=T[1],M=s(!1),E=O()(M,2),K=E[0],W=E[1],V=s({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),U=O()(V,2),z=U[0],H=U[1];return x.createElement("div",{style:{maxWidth:500}},x.createElement(o,{schema:f,itemLayout:r,renderers:g,value:z,onChange:H,readonly:S,disabled:K}),x.createElement(l,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return W(!K)}},K?"\u53D6\u6D88":"\u5207\u6362\u5230"," disabled \u72B6\u6001"),x.createElement(l,{style:{margin:"20px 0 0 115px"},onClick:function(){return D(!S)}},S?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-953-disabled-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":R,react:_||(_=e.t(x,2)),"@schema-render/core-react":A,antd:$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var h=N()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},17571:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return $}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(65063),x=e(41989),B=e(48201),A=e(74311),$={"examples-form-render-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function R(){var P,h,d,s,a,o,n,r,u,l;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return P=g.sent,h=P.default,g.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=g.sent,s=d.useState,g.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return a=g.sent,o=a.message,g.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return n=g.sent,r=n.default,u={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",description:"\u7528\u6237\u540D\u6700\u591A20\u4E2A\u5B57\u7B26",renderOptions:{maxLength:20},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]}}},l=function(){var j=s({}),y=O()(j,2),i=y[0],C=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:u,value:i,onChange:C,onSubmit:function(){o.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(h,{value:i}))},g.abrupt("return",{default:l});case 19:case"end":return g.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-form-render-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:_||(_=e.t(p,2)),antd:B,"@schema-render/form-render-react":A},renderOpts:{compile:function(){var R=I()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}}}},8266:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return A}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(30761),x=e(41989),B=e(74311),A={"examples-form-render-react-100-item-layout-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function $(){var R,P,h,d,s,a,o,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return R=u.sent,P=R.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=u.sent,d=h.default,u.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=u.sent,a=s.default,o={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=P({}),g=O()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{itemLayout:"vertical",schema:o,value:f,onChange:j}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,d));case 3:case"end":return a.stop()}},P)}));function R(){return $.apply(this,arguments)}return R}()}},"examples-form-render-react-100-item-layout-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function $(){var R,P,h,d,s,a,o,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return R=u.sent,P=R.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=u.sent,d=h.default,u.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=u.sent,a=s.default,o={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=P({}),g=O()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{itemLayout:"horizontal",schema:o,value:f,onChange:j}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,d));case 3:case"end":return a.stop()}},P)}));function R(){return $.apply(this,arguments)}return R}()}}}},86799:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return R}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(25937),x=e(41989),B=e(74311),A=e(34539),$=e(48201),R={"examples-form-render-react-200-label-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=m.sent,d=h.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},u=function(){var f=d({}),j=O()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,schema:r,value:y,onChange:i}),p.createElement(a,{value:y}))},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx",description:"number \u7C7B\u578B\u7528\u4E8E\u8BBE\u7F6E\u56FA\u5B9A\u6570\u503C",title:"number \u7C7B\u578B"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=m.sent,d=h.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},u=function(){var f=d({}),j=O()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:"max-content",schema:r,value:y,onChange:i}),p.createElement(a,{value:y}))},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx",description:"string \u7C7B\u578B\uFF0C\u901A\u5E38\u662F CSS \u5C5E\u6027\uFF0C\u5982 max-content",title:"string \u7C7B\u578B"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=m.sent,d=h.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},u=function(){var f=d({}),j=O()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelGap:0,labelColon:"\uFF1A",schema:r,value:y,onChange:i}),p.createElement(a,{value:y}))},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=i.sent,d=h.useState,i.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=i.sent,a=s.default,i.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,34539));case 14:return r=i.sent,u=r.QuestionCircleOutlined,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return l=i.sent,m=l.Popover,g={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(b){var T=b.schema,S=b.required,D=b.prefixClassNames;return p.createElement("div",null,T.title,!!T.titleDescription&&p.createElement(m,{placement:"top",trigger:"hover",content:T.titleDescription},p.createElement(u,{className:D("item-title-tooltip"),style:{marginLeft:4}})),!S&&" (\u53EF\u9009)")},j=function(){var b=d({}),T=O()(b,2),S=T[0],D=T[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{labelWidth:100,labelRender:f,schema:g,value:S,onChange:D}),p.createElement(a,{value:S}))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B,"@ant-design/icons":A,antd:$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},41393:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return P}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(91260),x=e(48201),B=e(41989),A=e(38959),$=e(74311),R=e(34539),P={"examples-form-render-react-300-actions-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=C.sent,s=d.useState,a=d.useRef,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=C.sent,n=o.message,C.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=C.sent,u=r.default,C.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return l=C.sent,m=l.sleep,C.next=19,Promise.resolve().then(e.bind(e,74311));case 19:return g=C.sent,f=g.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var T=s({}),S=O()(T,2),D=S[0],M=S[1],E=a(null),K=function(){var W=I()(v()().mark(function V(){var U,z;return v()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,E.current.validate();case 2:if(U=Q.sent,z=U.hasError,!z){Q.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),Q.abrupt("return");case 7:return Q.next=9,m();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return Q.stop()}},V)}));return function(){return W.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{ref:E,schema:j,value:D,onChange:M,onSubmit:K}),p.createElement(u,{value:D}))},C.abrupt("return",{default:y});case 24:case"end":return C.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@examples/utils":A,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g;return v()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=j.sent,s=d.useState,j.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return a=j.sent,o=a.message,j.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=j.sent,r=n.default,j.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return u=j.sent,l=u.default,m={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var i=s({}),C=O()(i,2),b=C[0],T=C[1],S=function(){o.success("\u91CD\u7F6E\u5B8C\u6210")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(l,{schema:m,value:b,onChange:T,onReset:S}),p.createElement(r,{value:b}))},j.abrupt("return",{default:g});case 19:case"end":return j.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=i.sent,s=d.useState,i.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return a=i.sent,o=a.message,i.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return n=i.sent,r=n.sleep,i.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return u=i.sent,l=u.default,i.next=18,Promise.resolve().then(e.bind(e,74311));case 18:return m=i.sent,g=m.default,f={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},j=function(){var b=s({}),T=O()(b,2),S=T[0],D=T[1],M=function(){var E=I()(v()().mark(function K(){return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,r();case 2:o.success("\u91CD\u7F6E\u5B8C\u6210");case 3:case"end":return V.stop()}},K)}));return function(){return E.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(g,{schema:f,value:S,onChange:D,onReset:M}),p.createElement(l,{value:S}))},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),antd:x,"@examples/utils":A,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g;return v()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=j.sent,s=d.useState,j.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=j.sent,o=a.sleep,j.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=j.sent,r=n.default,j.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return u=j.sent,l=u.default,m={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var i=s({}),C=O()(i,2),b=C[0],T=C[1],S=function(){var D=I()(v()().mark(function M(){return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return K.abrupt("return",{account:"\u5F20\u4E09".concat(Date.now())});case 3:case"end":return K.stop()}},M)}));return function(){return D.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(l,{schema:m,value:b,onChange:T,onBeforeReset:S,onReset:function(M){console.log("formData:",M)}}),p.createElement(r,{value:b}))},j.abrupt("return",{default:g});case 19:case"end":return j.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/utils":A,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-4":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=g.sent,s=d.useState,g.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=g.sent,o=a.default,g.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=g.sent,r=n.default,u={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var j=s({}),y=O()(j,2),i=y[0],C=y[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(r,{schema:u,value:i,onChange:C,actions:["reset","submit"]}),p.createElement(o,{value:i}))},g.abrupt("return",{default:l});case 15:case"end":return g.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx",description:"\u914D\u7F6E actions \u4E3A ['reset', 'submit'] \u8C03\u6362\u6309\u94AE\u4F4D\u7F6E",title:"\u914D\u7F6E\u987A\u5E8F"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-5":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=C.sent,s=d.useState,C.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return a=C.sent,o=a.message,n=a.Button,C.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return r=C.sent,u=r.sleep,C.next=15,Promise.resolve().then(e.bind(e,41989));case 15:return l=C.sent,m=l.default,C.next=19,Promise.resolve().then(e.bind(e,74311));case 19:return g=C.sent,f=g.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var T=s({}),S=O()(T,2),D=S[0],M=S[1],E=function(){var W=I()(v()().mark(function V(){return v()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,u();case 2:o.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return z.stop()}},V)}));return function(){return W.apply(this,arguments)}}(),K=function(){o.success("\u5BFC\u51FA\u6210\u529F")};return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(f,{schema:j,value:D,onChange:M,onSubmit:E,actions:["submit","reset","export"],registerActions:{export:function(V){var U=V.loading;return p.createElement(n,{type:"primary",disabled:U.submit||U.reset,onClick:K},"\u5BFC\u51FA")}}}),p.createElement(m,{value:D}))},C.abrupt("return",{default:y});case 24:case"end":return C.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),antd:x,"@examples/utils":A,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-300-actions-demo-6":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=E.sent,s=d.useState,a=d.useRef,E.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=E.sent,n=o.message,r=o.Button,u=o.Popconfirm,E.next=13,Promise.resolve().then(e.bind(e,34539));case 13:return l=E.sent,m=l.DeleteOutlined,g=l.UploadOutlined,E.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return f=E.sent,j=f.sleep,E.next=22,Promise.resolve().then(e.bind(e,41989));case 22:return y=E.sent,i=y.default,E.next=26,Promise.resolve().then(e.bind(e,74311));case 26:return C=E.sent,b=C.default,T={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},S={submit:function(W){var V=W.handleSubmit,U=W.loading;return p.createElement(u,{title:"\u6E29\u99A8\u63D0\u793A",description:"\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F",onConfirm:V},p.createElement(r,{loading:U.submit,type:"primary",icon:p.createElement(g,null)},"\u63D0\u4EA4"))},reset:function(W){var V=W.handleReset,U=W.loading;return p.createElement(r,{loading:U.reset,onClick:V,icon:p.createElement(m,null)},"\u91CD\u7F6E")}},D=function(){var W=s({}),V=O()(W,2),U=V[0],z=V[1],H=a(null),Q=function(){var Y=I()(v()().mark(function te(){var re,de;return v()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,H.current.validate();case 2:if(re=ue.sent,de=re.hasError,!de){ue.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),ue.abrupt("return");case 7:return ue.next=9,j();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return ue.stop()}},te)}));return function(){return Y.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(b,{ref:H,schema:T,value:U,onChange:z,onSubmit:Q,registerActions:S}),p.createElement(i,{value:U}))},E.abrupt("return",{default:D});case 32:case"end":return E.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),antd:x,"@ant-design/icons":R,"@examples/utils":A,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},39820:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return P}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(90261),x=e(48201),B=e(41989),A=e(74311),$=e(14953),R=e(97609),P={"examples-form-render-react-500-builtin-renderers-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=C.sent,s=d.useState,a=d.useMemo,C.next=7,Promise.resolve().then(e.bind(e,48201));case 7:return o=C.sent,n=o.Button,C.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return r=C.sent,u=r.default,C.next=15,Promise.resolve().then(e.bind(e,74311));case 15:return l=C.sent,m=l.default,C.next=19,Promise.resolve().then(e.bind(e,97609));case 19:return g=C.sent,C.next=22,Promise.resolve().then(e.bind(e,14953));case 22:return f=C.sent,j=f.default,y=function(){var T=s(!1),S=O()(T,2),D=S[0],M=S[1],E=s(!1),K=O()(E,2),W=K[0],V=K[1],U=s({Description:"\u7EAF\u5C55\u793A\u7684\u5185\u5BB9\u5427\u5566\u5427\u5566"}),z=O()(U,2),H=z[0],Q=z[1],Y=a(function(){return{disable:function(){return p.createElement(n,{type:"dashed",onClick:function(){return M(!D)}},D?"\u53D6\u6D88":"\u8BBE\u4E3A"," disabled \u72B6\u6001")},readonly:function(){return p.createElement(n,{type:"dashed",onClick:function(){return V(!W)}},W?"\u53D6\u6D88":"\u8BBE\u4E3A"," readonly \u72B6\u6001")}}},[W,D]);return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(m,{rootClassName:g.builtinRenderers,labelWidth:230,schema:j,value:H,onChange:Q,actions:["submit","reset","disable","readonly"],registerActions:Y,disabled:D,readonly:W,readonlyPlaceholder:p.createElement("span",{style:{color:"#666",fontSize:14}},"-")}),p.createElement(u,{value:H}))},C.abrupt("return",{default:y});case 26:case"end":return C.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-500-builtin-renderers-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},"./schemas/all.ts":{type:"FILE",value:e(71525).Z},"./styles.ts":{type:"FILE",value:e(24127).Z}},entry:"index.tsx"},context:{"./schemas/all.ts":$,"./styles.ts":R,react:_||(_=e.t(p,2)),antd:x,"@examples/components/SyntaxHighlighter":B,"@schema-render/form-render-react":A,"/home/runner/work/schema-render/schema-render/examples/form-render-react/schemas/all.ts":$,"/home/runner/work/schema-render/schema-render/examples/form-render-react/styles/index.ts":R},renderOpts:{compile:function(){var h=I()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},28680:function(G,c,e){e.r(c),e.d(c,{demos:function(){return N}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(4123),I=e(74311),p=e(35804),N={"examples-form-render-react-700-locale-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function x(){var B,A,$,R,P,h;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return B=s.sent,A=B.default,s.next=6,Promise.resolve().then(e.bind(e,35804));case 6:return $=s.sent,R=$.default,P={renderType:"Root",properties:{username:{title:"username",renderType:"InputText",required:!0},password:{title:"password",renderType:"Password",required:!0}}},h=function(){return O.createElement(A,{rootStyle:{maxWidth:500},schema:P,locale:R})},s.abrupt("return",{default:h});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{"@schema-render/form-render-react":I,"@schema-render/form-render-react/dist/esm/locale/en_US":p},renderOpts:{compile:function(){var x=L()(t()().mark(function A(){var $,R=arguments;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,R));case 3:case"end":return h.stop()}},A)}));function B(){return x.apply(this,arguments)}return B}()}}}},47023:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(74624),v={}},48167:function(G,c,e){e.r(c),e.d(c,{demos:function(){return N}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(83140),I=e(74311),p=e(37418),N={"examples-form-render-react-850-position-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function x(){var B,A,$,R,P,h,d;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return B=a.sent,A=B.default,a.next=6,Promise.resolve().then(e.bind(e,37418));case 6:return $=a.sent,R=$.default,P={renderType:"Root",properties:{settlement_mode:{title:"\u7ED3\u7B97\u5468\u671F\u540D\u79F0",renderType:"InputText",description:"\u652F\u6301\u4E2D\u6587\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF(_)\uFF0C\u4E0D\u80FD\u5305\u542B\u7A7A\u683C",span:16},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",span:8,spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText",span:8},bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",span:8,spanStart:1},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect",span:8},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect",span:8},cooperation:{title:"\u5408\u4F5C\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u8D2D\u9500",value:1},{label:"\u4EE3\u9500",value:2}]}},payment:{title:"\u4ED8\u6B3E\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u7EBF\u4E0A\u652F\u4ED8",value:1},{label:"\u7EBF\u4E0B\u652F\u4ED8",value:2}]}}}},h=function(n,r){n.bank_id=r.extra.bank_id,n.bank_account=r.extra.bank_account,n.bank_name=r.extra.bank_name,n.bank_branch_name=r.extra.bank_branch_name},d=function(){return O.createElement(A,{schema:P,renderers:R,watch:{bank_account:h,bank_name:h,bank_branch_name:h}})},a.abrupt("return",{default:d});case 12:case"end":return a.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-form-render-react-850-position-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},"./renderers.tsx":{type:"FILE",value:e(540).Z}},entry:"index.tsx"},context:{"./renderers.tsx":p,"@schema-render/form-render-react":I,"/home/runner/work/schema-render/schema-render/examples/form-render-react/renderers/index.tsx":p},renderOpts:{compile:function(){var x=L()(t()().mark(function A(){var $,R=arguments;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,R));case 3:case"end":return h.stop()}},A)}));function B(){return x.apply(this,arguments)}return B}()}}}},68170:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return d}});var t=e(9783),v=e.n(t),L=e(97857),O=e.n(L),F=e(15009),I=e.n(F),p=e(5574),N=e.n(p),x=e(99289),B=e.n(x),A=e(67294),$=e(34877),R=e(74311),P=e(48201),h=e(31776),d={"examples-form-render-react-851-steps-demo-0":{component:A.memo(A.lazy(B()(I()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i,C;return I()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=T.sent,o=a.useState,n=a.useMemo,r=a.useRef,T.next=8,Promise.resolve().then(e.bind(e,74311));case 8:return u=T.sent,l=u.default,T.next=12,Promise.resolve().then(e.bind(e,48201));case 12:return m=T.sent,g=m.Steps,f=m.Button,T.next=17,Promise.resolve().then(e.bind(e,31776));case 17:return j=T.sent,y=j.useMemoizedFn,i={renderType:"Root",properties:{step1:{title:"\u6B65\u9AA4\u4E00",renderType:"ObjectNull",hidden:"$userCtx.step !== 0",properties:{title:{title:"\u6B65\u9AA4\u4E00\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E00\u5185\u5BB9",renderType:"InputText",required:!0}}},step2:{title:"\u6B65\u9AA4\u4E8C",renderType:"ObjectNull",hidden:"$userCtx.step !== 1",properties:{title:{title:"\u6B65\u9AA4\u4E8C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E8C\u5185\u5BB9",renderType:"InputText",required:!0}}},step3:{title:"\u6B65\u9AA4\u4E09",renderType:"ObjectNull",hidden:"$userCtx.step !== 2",properties:{title:{title:"\u6B65\u9AA4\u4E09\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E09\u5185\u5BB9",renderType:"InputText",required:!0}}}}},C=function(){var D=o(0),M=N()(D,2),E=M[0],K=M[1],W=o({}),V=N()(W,2),U=V[0],z=V[1],H=r(null),Q=function(){K(function(ue){return ue-1})},Y=y(B()(I()().mark(function Te(){var ue,ie,De,fe;return I()().wrap(function(Oe){for(;;)switch(Oe.prev=Oe.next){case 0:return Oe.next=2,(ue=H.current)===null||ue===void 0?void 0:ue.validate();case 2:if(ie=Oe.sent,!(ie!=null&&ie.hasError||ie!=null&&ie.hasWarning)){Oe.next=8;break}if(De="step".concat(E+1),fe=ie.errorList.some(function(_e){return _e.path[0]===De}),!fe){Oe.next=8;break}return Oe.abrupt("return");case 8:K(E+1);case 9:case"end":return Oe.stop()}},Te)}))),te=y(function(){var Te;z(O()(O()({},U),{},v()({},"step".concat(E+1),{}))),(Te=H.current)===null||Te===void 0||Te.resetError()}),re=n(function(){return{prev:function(){return A.createElement(f,{onClick:Q},"\u4E0A\u4E00\u6B65")},next:function(){return A.createElement(f,{type:"primary",onClick:Y},"\u4E0B\u4E00\u6B65")},reset:function(){return A.createElement(f,{onClick:te},"\u91CD\u7F6E")}}},[]),de=function(){var Te=B()(I()().mark(function ue(){var ie,De;return I()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,(ie=H.current)===null||ie===void 0?void 0:ie.validate();case 2:if(De=Pe.sent,!(De!=null&&De.hasError||De!=null&&De.hasWarning)){Pe.next=5;break}return Pe.abrupt("return");case 5:case"end":return Pe.stop()}},ue)}));return function(){return Te.apply(this,arguments)}}();return A.createElement("div",{style:{maxWidth:800}},A.createElement(g,{size:"small",current:E,onChange:K,items:[{title:"\u6B65\u9AA4\u4E00",disabled:!0},{title:"\u6B65\u9AA4\u4E8C",disabled:!0},{title:"\u6B65\u9AA4\u4E09",disabled:!0}],style:{marginBottom:20}}),A.createElement(l,{ref:H,schema:i,value:U,onChange:z,userCtx:{step:E},actions:E===0?["next","reset"]:E===2?["submit","prev","reset"]:["next","prev","reset"],registerActions:re,onSubmit:de}))},T.abrupt("return",{default:C});case 22:case"end":return T.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-form-render-react-851-steps-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo, useRef } from 'react'
import FormRender from '@schema-render/form-render-react'
import type {
  IFormRenderRootSchema,
  IFormRenderProps,
  IFormRenderRef,
} from '@schema-render/form-render-react'
import { Steps, Button } from 'antd'
import { useMemoizedFn } from 'ahooks'

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
  const handleNext = useMemoizedFn(async () => {
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
  })

  // \u53EA\u91CD\u7F6E\u5F53\u524D\u6B65\u9AA4\u4E0B\u7684\u8868\u5355\u9879\u6570\u636E
  const handleReset = useMemoizedFn(() => {
    // \u91CD\u7F6E\u6570\u636E
    setValue({
      ...value,
      [\`step\${currentStep + 1}\`]: {},
    })
    // \u91CD\u7F6E\u9519\u8BEF\u63D0\u793A
    formRenderRef.current?.resetError()
  })

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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},ahooks:{type:"NPM",value:"3.8.1"}},entry:"index.tsx"},context:{react:_||(_=e.t(A,2)),"@schema-render/form-render-react":R,antd:P,ahooks:h},renderOpts:{compile:function(){var s=B()(I()().mark(function o(){var n,r=arguments;return I()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}}}},62127:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return P}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(45011),A=e(41989),$=e(74311),R=e(48201),P={"examples-form-render-react-852-audit-renderer-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y,i;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=b.sent,s=d.useState,b.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=b.sent,o=a.default,b.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=b.sent,r=n.default,b.next=14,Promise.resolve().then(e.bind(e,48201));case 14:return u=b.sent,l=u.Input,m=u.Radio,g=[{label:"\u5BA1\u6838\u901A\u8FC7",value:1},{label:"\u5BA1\u6838\u5931\u8D25",value:2}],f=function(S){var D,M=S.disabled,E=S.value,K=S.onChange,W=S.validator,V=function(H){K(I()(I()({},E),H),{triggerValidator:!H.hasOwnProperty("type")})},U=(E==null?void 0:E.type)===2;return x.createElement("div",null,x.createElement(m.Group,{options:g,value:(D=E==null?void 0:E.type)!==null&&D!==void 0?D:null,onChange:function(H){return V({type:H.target.value})},disabled:M}),x.createElement("div",{style:{marginTop:U?5:0}},U&&x.createElement(l.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0",autoFocus:!0,showCount:!0,maxLength:200,status:W.status,disabled:M,value:E.failReason,onChange:function(H){return V({failReason:H.target.value})}})))},j={Audit:{component:f,validator:function(S){var D=S.value;if((D==null?void 0:D.type)===2&&!D.failReason)return{status:"error",message:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0"}}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0},audit:{title:"\u5BA1\u6838\u7ED3\u679C",renderType:"Audit",required:!0}}},i=function(){var S=s({}),D=O()(S,2),M=D[0],E=D[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{schema:y,value:M,onChange:E,renderers:j}),x.createElement(o,{value:M}))},b.abrupt("return",{default:i});case 23:case"end":return b.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-852-audit-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:_||(_=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$,antd:R},renderOpts:{compile:function(){var h=N()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},42087:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return A}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(6168),x=e(41989),B=e(74311),A={"examples-form-render-react-853-validate-on-blur-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function $(){var R,P,h,d,s,a,o,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return R=u.sent,P=R.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=u.sent,d=h.default,u.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=u.sent,a=s.default,o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},amount:{title:"\u603B\u989D",renderType:"InputNumber",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:50,message:"\u603B\u989D\u4E0D\u80FD\u5C11 50"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},password:{title:"\u5BC6\u7801\u6846",renderType:"Password",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}},n=function(){var m=P({}),g=O()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:o,value:f,onChange:j}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-853-validate-on-blur-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,d));case 3:case"end":return a.stop()}},P)}));function R(){return $.apply(this,arguments)}return R}()}}}},55850:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return P}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(97857),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(88358),A=e(41989),$=e(74311),R=e(48201),P={"examples-form-render-react-880-relation-checkbox-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=i.sent,s=d.useState,a=d.useRef,i.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return o=i.sent,n=o.default,i.next=11,Promise.resolve().then(e.bind(e,74311));case 11:return r=i.sent,u=r.default,i.next=15,Promise.resolve().then(e.bind(e,48201));case 15:return l=i.sent,m=l.Select,g={component:function(b){var T,S=b.schema,D=b.value,M=b.disabled,E=b.validator,K=b.onChange,W=b.userCtx,V=W.cityList||((T=S.renderOptions)===null||T===void 0?void 0:T.options);return x.createElement(m,I()(I()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat(S.title)},S.renderOptions),{},{options:V,status:E.status,mode:void 0,value:D,onChange:function(z){return K(z)},disabled:M}))}},f={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"AvailableCities"}}},j=function(){var b=s({}),T=O()(b,2),S=T[0],D=T[1],M=a({});return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(u,{labelWidth:180,actions:[],schema:f,value:S,onChange:D,renderers:{AvailableCities:g},watch:{cities:function(K,W){M.current.cityList=W.extra.checkedOptions,W.value.includes(K.available_cities)||(K.available_cities=void 0)}},userCtx:M.current}),x.createElement(n,{value:S}))},i.abrupt("return",{default:j});case 21:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.jsx"},context:{react:_||(_=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$,antd:R},renderOpts:{compile:function(){var h=N()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-form-render-react-880-relation-checkbox-demo-1":{component:x.memo(x.lazy(N()(v()().mark(function h(){var d,s,a,o,n,r,u,l;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=g.sent,s=d.useState,g.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=g.sent,o=a.default,g.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return n=g.sent,r=n.default,u={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Select",renderOptions:{}}}},l=function(){var j=s({}),y=O()(j,2),i=y[0],C=y[1];return x.createElement("div",{className:"example-layout-cols-2"},x.createElement(r,{labelWidth:180,actions:[],schema:u,value:i,onChange:C,watch:{cities:function(T,S){u.properties.available_cities.renderOptions.options=S.extra.checkedOptions,S.value.includes(T.available_cities)||(T.available_cities=void 0)}}}),x.createElement(o,{value:i}))},g.abrupt("return",{default:l});case 15:case"end":return g.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{react:_||(_=e.t(x,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=N()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},54811:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return A}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(73888),x=e(41989),B=e(74311),A={"examples-form-render-react-881-relation-select-multiple-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function $(){var R,P,h,d,s,a,o,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"SelectMultiple",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Checkbox",renderOptions:{options:m}}}};return g},u.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return R=u.sent,P=R.useState,u.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return h=u.sent,d=h.default,u.next=11,Promise.resolve().then(e.bind(e,74311));case 11:return s=u.sent,a=s.default,n=function(){var m=P({}),g=O()(m,2),f=g[0],j=g[1],y=P(function(){return o()}),i=O()(y,2),C=i[0],b=i[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{labelWidth:180,actions:[],schema:C,value:f,onChange:j,watch:{cities:function(S,D){b(o(D.extra.selectedOptions)),D.value.includes(S.available_cities)||(S.available_cities=void 0)}}}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-881-relation-select-multiple-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,d));case 3:case"end":return a.stop()}},P)}));function R(){return $.apply(this,arguments)}return R}()}}}},37531:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return $}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(19632),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(73914),A=e(74311),$={"examples-form-render-react-890-benchmark-demo-0":{component:x.memo(x.lazy(N()(v()().mark(function R(){var P,h,d,s,a,o,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return P=m.sent,h=P.default,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,s=d.useState,a=100,o={renderType:"Root",properties:{}},n=I()(Array(a).keys()),n.forEach(function(g){var f="field_".concat(g);o.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],u=function(){var f=s({}),j=O()(f,2),y=j[0],i=j[1],C=function(T,S){var D=parseInt(S.sPath.slice(6)),M=D-1,E=D+1,K="field_".concat(E>=a?M:E);T[K]=S.value,i(T)};return x.createElement(h,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:o,value:y,onChange:C})},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":A,react:_||(_=e.t(x,2))},renderOpts:{compile:function(){var R=N()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}},"examples-form-render-react-890-benchmark-demo-1":{component:x.memo(x.lazy(N()(v()().mark(function R(){var P,h,d,s,a,o,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74311));case 2:return P=m.sent,h=P.default,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,s=d.useState,a=300,o={renderType:"Root",properties:{}},n=I()(Array(a).keys()),n.forEach(function(g){var f="field_".concat(g);o.properties[f]={title:f,renderType:"InputText",required:!0}}),r=["200px","1fr"],u=function(){var f=s({}),j=O()(f,2),y=j[0],i=j[1],C=function(T,S){var D=parseInt(S.sPath.slice(6)),M=D-1,E=D+1,K="field_".concat(E>=a?M:E);T[K]=S.value,i(T)};return x.createElement(h,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:o,value:y,onChange:C})},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":A,react:_||(_=e.t(x,2))},renderOpts:{compile:function(){var R=N()(v()().mark(function h(){var d,s=arguments;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}}}},53775:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return A}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(64768),x=e(41989),B=e(74311),A={"examples-form-render-react-900-renderers-warning-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function $(){var R,P,h,d,s,a,o,n;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return R=u.sent,P=R.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=u.sent,d=h.default,u.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return s=u.sent,a=s.default,o={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var m=P({}),g=O()(m,2),f=g[0],j=g[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(a,{schema:o,value:f,onChange:j}),p.createElement(d,{value:f}))},u.abrupt("return",{default:n});case 15:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-900-renderers-warning-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var $=I()(v()().mark(function P(){var h,d=arguments;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,d));case 3:case"end":return a.stop()}},P)}));function R(){return $.apply(this,arguments)}return R}()}}}},88642:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return R}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(87004),x=e(41989),B=e(74311),A=e(34539),$=e(48201),R={"examples-form-render-react-901-label-vertical-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=m.sent,d=h.useState,m.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=m.sent,a=s.default,m.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=m.sent,n=o.default,r={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},u=function(){var f=d({}),j=O()(f,2),y=j[0],i=j[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelColon:"\uFF1A",schema:r,value:y,onChange:i}),p.createElement(a,{value:y}))},m.abrupt("return",{default:u});case 15:case"end":return m.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-form-render-react-901-label-vertical-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=i.sent,d=h.useState,i.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return s=i.sent,a=s.default,i.next=10,Promise.resolve().then(e.bind(e,74311));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,34539));case 14:return r=i.sent,u=r.QuestionCircleOutlined,i.next=18,Promise.resolve().then(e.bind(e,48201));case 18:return l=i.sent,m=l.Popover,g={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(b){var T=b.schema,S=b.required,D=b.prefixClassNames;return p.createElement("div",null,T.title,!!T.titleDescription&&p.createElement(m,{placement:"top",trigger:"hover",content:T.titleDescription},p.createElement(u,{className:D("item-title-tooltip"),style:{marginLeft:4}})),!S&&" (\u53EF\u9009)")},j=function(){var b=d({}),T=O()(b,2),S=T[0],D=T[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(n,{itemLayout:"vertical",labelWidth:150,labelRender:f,schema:g,value:S,onChange:D}),p.createElement(a,{value:S}))},i.abrupt("return",{default:j});case 24:case"end":return i.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"},"@ant-design/icons":{type:"NPM",value:"5.5.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{react:_||(_=e.t(p,2)),"@examples/components/SyntaxHighlighter":x,"@schema-render/form-render-react":B,"@ant-design/icons":A,antd:$},renderOpts:{compile:function(){var P=I()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},94270:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return r}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(43895),x=e(41989),B=e(48201),A=e(74072),$=e(2862),R=e(78469),P=e(74311),h=e(38959),d=e(36116),s=e(71856),a=e(68666),o=e(92114),n=e(362),r={"examples-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function u(){var l,m,g,f,j,y,i,C,b,T,S,D,M,E,K,W;return v()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return l=U.sent,m=l.default,U.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return g=U.sent,f=g.useState,j=g.useRef,U.next=11,Promise.resolve().then(e.bind(e,48201));case 11:return y=U.sent,i=y.Button,C=y.message,U.next=16,Promise.resolve().then(e.bind(e,74072));case 16:return b=U.sent,T=b.default,U.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return S=U.sent,D=S.default,U.next=24,Promise.resolve().then(e.bind(e,2862));case 24:return M=U.sent,E=M.default,K={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},W=function(){var H=f({}),Q=O()(H,2),Y=Q[0],te=Q[1],re=j(),de=function(){var Te=I()(v()().mark(function ue(){var ie;return v()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return fe.next=2,re.current.validate();case 2:ie=fe.sent,ie.hasError||C.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return fe.stop()}},ue)}));return function(){return Te.apply(this,arguments)}}();return p.createElement("div",{className:"example-layout-cols-2"},p.createElement("div",null,p.createElement(T,{ref:re,schema:K,value:Y,onChange:te,itemLayout:D,renderers:E}),p.createElement(i,{type:"primary",style:{margin:"20px 0 0 115px"},onClick:de},"\u63D0\u4EA4")),p.createElement(m,{value:Y}))},U.abrupt("return",{default:W});case 29:case"end":return U.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/core-react":{type:"NPM",value:"1.6.2"},"./core-react/renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./core-react/item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./core-react/renderers/common.tsx":$,"./core-react/item-layout/Horizontal.tsx":R,"@examples/components/SyntaxHighlighter":x,react:_||(_=e.t(p,2)),antd:B,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":R},renderOpts:{compile:function(){var u=I()(v()().mark(function m(){var g,f=arguments;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function l(){return u.apply(this,arguments)}return l}()}},"examples-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function u(){var l,m,g,f,j,y,i,C,b,T;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return l=D.sent,m=l.default,D.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return g=D.sent,f=g.useState,D.next=10,Promise.resolve().then(e.bind(e,48201));case 10:return j=D.sent,y=j.message,D.next=14,Promise.resolve().then(e.bind(e,74311));case 14:return i=D.sent,C=i.default,b={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},T=function(){var E=f({}),K=O()(E,2),W=K[0],V=K[1];return p.createElement("div",{className:"example-layout-cols-2"},p.createElement(C,{schema:b,value:W,onChange:V,onSubmit:function(){return y.success("\u63D0\u4EA4\u6210\u529F")}}),p.createElement(m,{value:W}))},D.abrupt("return",{default:T});case 19:case"end":return D.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/form-render-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":x,react:_||(_=e.t(p,2)),antd:B,"@schema-render/form-render-react":P},renderOpts:{compile:function(){var u=I()(v()().mark(function m(){var g,f=arguments;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function l(){return u.apply(this,arguments)}return l}()}},"examples-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function u(){var l,m,g,f,j,y;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return l=C.sent,m=l.sleep,C.next=6,Promise.resolve().then(e.bind(e,36116));case 6:return g=C.sent,f=g.default,j={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},y=function(){var T=function(){var S=I()(v()().mark(function D(M){return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log("searchParams:",M),K.next=3,m();case 3:case"end":return K.stop()}},D)}));return function(M){return S.apply(this,arguments)}}();return p.createElement(f,{schema:j,onSubmit:T,onReset:T})},C.abrupt("return",{default:y});case 11:case"end":return C.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'

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

export default Demo`},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.6.2"}},entry:"index.jsx"},context:{"@examples/utils":h,"@schema-render/search-react":d},renderOpts:{compile:function(){var u=I()(v()().mark(function m(){var g,f=arguments;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function l(){return u.apply(this,arguments)}return l}()}},"examples-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function u(){var l,m,g,f,j,y,i,C,b,T,S;return v()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return l=M.sent,m=l.sleep,M.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return g=M.sent,f=g.default,M.next=10,Promise.resolve().then(e.bind(e,362));case 10:return j=M.sent,y=j.default,M.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return i=M.sent,C=i.default,M.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return b=M.sent,T=b.default,S=function(){return p.createElement(T,{search:{schema:f},table:{columns:y,showRowNumber:!0},request:function(){var K=I()(v()().mark(function V(U){var z;return v()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return console.log("searchParams:",U),Q.next=3,m();case 3:return z=C(),Q.abrupt("return",{data:z,total:100});case 5:case"end":return Q.stop()}},V)}));function W(V){return K.apply(this,arguments)}return W}()})},M.abrupt("return",{default:S});case 22:case"end":return M.stop()}},u)})))),asset:{type:"BLOCK",id:"examples-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./search-table-react/helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./search-table-react/helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./search-table-react/helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./search-table-react/helpers/schema.ts":a,"./search-table-react/helpers/createDataSource.ts":o,"./search-table-react/helpers/columns.ts":n,"@examples/utils":h,"@schema-render/search-table-react":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":n},renderOpts:{compile:function(){var u=I()(v()().mark(function m(){var g,f=arguments;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(g=y.sent).default.apply(g,f));case 3:case"end":return y.stop()}},m)}));function l(){return u.apply(this,arguments)}return l}()}}}},11124:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return h}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(67342),x=e(48201),B=e(38959),A=e(67247),$=e(36116),R=e(77095),P=e(36641),h={"examples-search-react-001-intro-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S;return v()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=M.sent,a=s.useState,M.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return o=M.sent,n=o.ConfigProvider,r=o.Table,M.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return u=M.sent,l=u.sleep,M.next=15,Promise.resolve().then(e.bind(e,67247));case 15:return m=M.sent,g=m.default,M.next=19,Promise.resolve().then(e.bind(e,36641));case 19:return f=M.sent,j=f.default,M.next=23,Promise.resolve().then(e.bind(e,77095));case 23:return y=M.sent,i=y.default,M.next=27,Promise.resolve().then(e.bind(e,36116));case 27:return C=M.sent,b=C.default,T={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},S=function(){var K=a(function(){return i()}),W=O()(K,2),V=W[0],U=W[1],z=function(){var H=I()(v()().mark(function Q(Y){return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return console.log("searchParams:",Y),re.next=3,l();case 3:U(i());case 4:case"end":return re.stop()}},Q)}));return function(Y){return H.apply(this,arguments)}}();return p.createElement(n,{locale:g},p.createElement(b,{schema:T,onSubmit:z,onReset:z}),p.createElement(r,{style:{marginTop:20},columns:j,dataSource:V,scroll:{x:1500}}))},M.abrupt("return",{default:S});case 32:case"end":return M.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(77538).Z},"./helpers/columns.ts":{type:"FILE",value:e(96390).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/columns.ts":P,react:_||(_=e.t(p,2)),antd:x,"@examples/utils":B,"antd/locale/zh_CN":A,"@schema-render/search-react":$,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/columns.ts":P},renderOpts:{compile:function(){var d=I()(v()().mark(function a(){var o,n=arguments;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}}}},79899:function(G,c,e){e.r(c),e.d(c,{demos:function(){return B}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(27885),I=e(48201),p=e(38959),N=e(67247),x=e(36116),B={"examples-search-react-300-actions-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function A(){var $,R,P,h,d,s,a,o,n,r;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return $=l.sent,R=$.ConfigProvider,l.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return P=l.sent,h=P.sleep,l.next=10,Promise.resolve().then(e.bind(e,67247));case 10:return d=l.sent,s=d.default,l.next=14,Promise.resolve().then(e.bind(e,36116));case 14:return a=l.sent,o=a.default,n={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},r=function(){var g=function(){var j=L()(t()().mark(function y(i){return t()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return console.log("searchParams:",i),b.next=3,h();case 3:case"end":return b.stop()}},y)}));return function(i){return j.apply(this,arguments)}}(),f=function(y){console.log("isCollapsed:",y)};return O.createElement(R,{locale:s},O.createElement(o,{schema:n,onSubmit:g,onReset:g,onToggleCollapsed:f}))},l.abrupt("return",{default:r});case 19:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{antd:I,"@examples/utils":p,"antd/locale/zh_CN":N,"@schema-render/search-react":x},renderOpts:{compile:function(){var A=L()(t()().mark(function R(){var P,h=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},R)}));function $(){return A.apply(this,arguments)}return $}()}}}},49469:function(G,c,e){e.r(c),e.d(c,{demos:function(){return N}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(10122),I=e(36116),p=e(9686),N={"examples-search-react-700-locale-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function x(){var B,A,$,R,P,h;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return B=s.sent,A=B.default,s.next=6,Promise.resolve().then(e.bind(e,9686));case 6:return $=s.sent,R=$.default,P={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"}}},h=function(){return O.createElement(A,{schema:P,labelWidth:120,locale:R})},s.abrupt("return",{default:h});case 11:case"end":return s.stop()}},x)})))),asset:{type:"BLOCK",id:"examples-search-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.6.2"}},entry:"index.tsx"},context:{"@schema-render/search-react":I,"@schema-render/search-react/dist/esm/locale/en_US":p},renderOpts:{compile:function(){var x=L()(t()().mark(function A(){var $,R=arguments;return t()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,R));case 3:case"end":return h.stop()}},A)}));function B(){return x.apply(this,arguments)}return B}()}}}},90712:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(84123),v={}},11973:function(G,c,e){e.r(c),e.d(c,{demos:function(){return B}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(24197),I=e(36116),p=e(57864),N=e(35719),x=e(9680),B={"examples-search-react-850-category-title-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function A(){var $,R,P,h,d,s,a,o,n,r,u,l;return t()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return $=g.sent,R=$.default,g.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return P=g.sent,h=P.default,g.next=10,Promise.resolve().then(e.bind(e,57864));case 10:return d=g.sent,s=d.default,a={BankSelect:h,ObjectSectionTitle:s},o={renderType:"Root",properties:{basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"}}},payment:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}},collection:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}}}},n=function(j){var y=function(C,b){C[j].bank_id=b.extra.bank_id,C[j].bank_account=b.extra.bank_account,C[j].bank_name=b.extra.bank_name,C[j].bank_branch_name=b.extra.bank_branch_name};return y},r=n("payment"),u=n("collection"),l=function(){return O.createElement(R,{defaultCollapsed:!1,style:{gridTemplateColumns:"auto"},schema:o,renderers:a,actions:["collapse"],watch:{"payment.bank_account":r,"payment.bank_name":r,"payment.bank_branch_name":r,"collection.bank_account":u,"collection.bank_name":u,"collection.bank_branch_name":u}})},g.abrupt("return",{default:l});case 19:case"end":return g.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.6.2"},"./renderers/ObjectSectionTitle.tsx":{type:"FILE",value:e(97395).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/ObjectSectionTitle.tsx":p,"./renderers/BankSelect.tsx":N,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/ObjectSectionTitle.tsx":p,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":N},renderOpts:{compile:function(){var A=L()(t()().mark(function R(){var P,h=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},R)}));function $(){return A.apply(this,arguments)}return $}()}},"examples-search-react-850-category-title-demo-1":{component:O.memo(O.lazy(L()(t()().mark(function A(){var $,R,P,h,d,s,a,o,n,r,u,l,m;return t()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return $=f.sent,R=$.default,f.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return P=f.sent,h=P.default,f.next=10,Promise.resolve().then(e.bind(e,9680));case 10:return d=f.sent,s=d.default,a={BankSelect:h,SectionTitle:s},o={renderType:"Root",properties:{_section_title_x1:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"SectionTitle"},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},_section_title_x2:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},payment_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},payment_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},payment_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x3:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},collection_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},collection_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},collection_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x4:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},reason:{title:"\u4E8B\u7531",renderType:"InputText",spanStart:1,style:{width:"calc(100vw - 635px)"}},remark:{title:"\u5907\u6CE8",renderType:"TextArea",renderOptions:{rows:1},style:{gridColumn:"1/3"}}}},n=function(y){var i=function(b,T){b["".concat(y,"_bank_id")]=T.extra.bank_id,b["".concat(y,"_bank_account")]=T.extra.bank_account,b["".concat(y,"_bank_name")]=T.extra.bank_name,b["".concat(y,"_bank_branch_name")]=T.extra.bank_branch_name};return i},r=n("payment"),u=n("collection"),l=function(y){var i;if(!y)return 5;var C=y.clientWidth,b=((i=y.querySelector(".schema-render-form-item:nth-of-type(2)"))===null||i===void 0||(i=i.getBoundingClientRect())===null||i===void 0?void 0:i.width)||320;return Math.floor(C/b)*2},m=function(){return O.createElement(R,{defaultCollapsed:!1,schema:o,renderers:a,actions:["collapse"],watch:{payment_bank_account:r,payment_bank_name:r,payment_bank_branch_name:r,collection_bank_account:u,collection_bank_name:u,collection_bank_branch_name:u},calcCollapsedNumber:l})},f.abrupt("return",{default:m});case 20:case"end":return f.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"1.6.2"},"./renderers/SectionTitle.tsx":{type:"FILE",value:e(5038).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/SectionTitle.tsx":x,"./renderers/BankSelect.tsx":N,"@schema-render/search-react":I,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/SectionTitle.tsx":x,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":N},renderOpts:{compile:function(){var A=L()(t()().mark(function R(){var P,h=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},R)}));function $(){return A.apply(this,arguments)}return $}()}}}},79181:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return o}});var t=e(5574),v=e.n(t),L=e(97857),O=e.n(L),F=e(15009),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(69306),A=e(38959),$=e(71856),R=e(92114),P=e(68666),h=e(362),d=e(48201),s=e(67247),a=e(91845),o={"examples-search-table-react-001-intro-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b;return I()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=S.sent,u=r.sleep,S.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=S.sent,m=l.default,S.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=S.sent,f=g.default,S.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=S.sent,y=j.default,S.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=S.sent,C=i.default,b=function(){return x.createElement(C,{search:{schema:m},table:{columns:f},request:function(){var M=N()(I()().mark(function K(W){var V;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return console.log("searchParams:",W),z.next=3,u();case 3:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 5:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},S.abrupt("return",{default:b});case 22:case"end":return S.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-001-intro-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b,T,S,D,M,E,K,W,V,U,z,H,Q,Y,te,re,de,Te;return I()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=ie.sent,u=r.sleep,ie.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=ie.sent,m=l.default,ie.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=ie.sent,f=g.default,ie.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=ie.sent,y=j.default,ie.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=ie.sent,C=i.default,ie.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return b=ie.sent,T=b.useState,S=b.useRef,ie.next=27,Promise.resolve().then(e.bind(e,48201));case 27:return D=ie.sent,M=D.ConfigProvider,E=D.message,K=D.Button,W=D.Tag,ie.next=34,Promise.resolve().then(e.bind(e,67247));case 34:return V=ie.sent,U=V.default,ie.next=38,Promise.resolve().then(e.bind(e,91845));case 38:return z=ie.sent,H=z.pinyin,Q=/[\u4e00-\u9fa5]/,Y=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],te=f.map(function(De,fe){var Pe=O()({},De);return fe===0?Pe.fixed="left":fe===f.length-1&&(Pe.fixed="right"),Pe}),re={height:50,lineHeight:"50px",marginBottom:16,borderRadius:10,textAlign:"center",background:"#b6e0fa"},de=function(fe){return u()},Te=function(){var fe=T("1"),Pe=v()(fe,2),Oe=Pe[0],_e=Pe[1],Le=S(null),We=function(Fe,Ke){return[{text:"\u7F16\u8F91",onClick:function(){E.success("\u70B9\u51FB\u4E86\u7B2C ".concat(Ke," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Ze=N()(I()().mark(function Ge(){var Ye;return I()().wrap(function(Be){for(;;)switch(Be.prev=Be.next){case 0:return Be.next=2,de(Fe.id);case 2:(Ye=Le.current)===null||Ye===void 0||Ye.refresh();case 3:case"end":return Be.stop()}},Ge)}));function Ne(){return Ze.apply(this,arguments)}return Ne}()}]},Ae={left:x.createElement(K,{style:{marginRight:16}},"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9"),right:x.createElement(K,null,"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9")};return x.createElement(M,{locale:U},x.createElement(C,{ref:Le,search:{schema:m,labelWidth:80},title:{showSetting:!0,tabs:{activeKey:Oe,items:Y,onChange:_e,tabBarExtraContent:Ae}},titleTop:function(){return x.createElement("div",{style:re},"Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49")},titleBottom:function(){return x.createElement("div",{style:re},"Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49")},table:{columns:te,showRowNumber:!0,actionItems:We,actionItemsCount:3,actionItemsColumnData:{width:180},sortMode:"local-all",sortStringValueTransform:function(Fe){return Q.test(Fe)?H(Fe,{toneType:"none"}):Fe}},request:function(){var Ue=N()(I()().mark(function Ke(Ze){var Ne,Ge;return I()().wrap(function(Je){for(;;)switch(Je.prev=Je.next){case 0:return Je.next=2,u();case 2:return Ne=y(Ze.pageSize),Ge=Ne.reduce(function(Be,He){return Be+He.goods_price},0).toFixed(2),Je.abrupt("return",{data:Ne,total:100,summaryData:{supplier_code:x.createElement(W,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:Ge}});case 5:case"end":return Je.stop()}},Ke)}));function Fe(Ke){return Ue.apply(this,arguments)}return Fe}()}))},ie.abrupt("return",{default:Te});case 47:case"end":return ie.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

  const tabBarExtraContent = {
    left: <Button style={{ marginRight: 16 }}>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9</Button>,
    right: <Button>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9</Button>,
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema, labelWidth: 80 }}
        title={{
          // \u663E\u793A\u5217\u8BBE\u7F6E
          showSetting: true,
          // \u6807\u7B7E\u9875
          tabs: {
            activeKey,
            items,
            onChange: setActiveKey,
            tabBarExtraContent,
          },
        }}
        titleTop={() => <div style={titleSectionStyle}>Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49</div>}
        titleBottom={() => <div style={titleSectionStyle}>Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49</div>}
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,react:_||(_=e.t(x,2)),antd:d,"antd/locale/zh_CN":s,"pinyin-pro":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}}}},37629:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return P}});var t=e(15009),v=e.n(t),L=e(99289),O=e.n(L),F=e(67294),I=e(72106),p=e(38959),N=e(71856),x=e(92114),B=e(68666),A=e(362),$=e(48201),R=e(67247),P={"examples-search-table-react-010-table-actions-demo-0":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=y.sent,s=d.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=y.sent,o=a.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=y.sent,r=n.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return u=y.sent,l=u.default,y.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=y.sent,g=m.default,f=function(){return F.createElement(g,{search:{schema:o},table:{columns:r,showRowNumber:!0},request:function(){var C=O()(v()().mark(function T(S){var D;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,s();case 2:return D=l(S.pageSize),E.abrupt("return",{data:D,total:100});case 4:case"end":return E.stop()}},T)}));function b(T){return C.apply(this,arguments)}return b}()})},y.abrupt("return",{default:f});case 22:case"end":return y.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-search-table-react-010-table-actions-demo-1":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=i.sent,s=d.sleep,i.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=i.sent,o=a.default,i.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=i.sent,r=n.default,i.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return u=i.sent,l=u.default,i.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=i.sent,g=m.default,f=function(b,T,S){return F.createElement("div",{style:{width:20,height:20,borderRadius:"50%",background:"black",color:"white",display:"inline-flex",justifyContent:"center",alignItems:"center"}},S+1)},j=function(){return F.createElement(g,{search:{schema:o},table:{columns:r,showRowNumber:!0,rowNumberColumnData:{width:80,render:f}},request:function(){var b=O()(v()().mark(function S(D){var M;return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return M=l(D.pageSize),K.abrupt("return",{data:M,total:100});case 4:case"end":return K.stop()}},S)}));function T(S){return b.apply(this,arguments)}return T}()})},i.abrupt("return",{default:j});case 23:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/columns.ts":A,"./helpers/schema.ts":B,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-search-table-react-010-table-actions-demo-2":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y,i,C,b;return v()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=S.sent,s=d.sleep,S.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=S.sent,o=a.default,S.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=S.sent,r=n.default,S.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return u=S.sent,l=u.default,S.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return m=S.sent,g=m.default,S.next=22,Promise.resolve().then(e.bind(e,48201));case 22:return f=S.sent,j=f.ConfigProvider,y=f.message,S.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return i=S.sent,C=i.default,b=function(){var M=function(K,W){return[{text:"\u7F16\u8F91",onClick:function(){y.success("\u70B9\u51FB\u4E86\u7B2C ".concat(W," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"}]};return F.createElement(j,{locale:C},F.createElement(g,{search:{schema:o},table:{columns:r,actionItems:M},request:function(){var E=O()(v()().mark(function W(V){var U;return v()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,s();case 2:return U=l(V.pageSize),H.abrupt("return",{data:U,total:100});case 4:case"end":return H.stop()}},W)}));function K(W){return E.apply(this,arguments)}return K}()}))},S.abrupt("return",{default:b});case 31:case"end":return S.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-search-table-react-010-table-actions-demo-3":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=E.sent,s=d.useRef,E.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=E.sent,o=a.sleep,E.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=E.sent,r=n.default,E.next=14,Promise.resolve().then(e.bind(e,362));case 14:return u=E.sent,l=u.default,E.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return m=E.sent,g=m.default,E.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return f=E.sent,j=f.default,E.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=E.sent,i=y.ConfigProvider,C=y.message,E.next=31,Promise.resolve().then(e.bind(e,67247));case 31:return b=E.sent,T=b.default,S=function(W){return o()},D=function(){var W=s(null),V=function(z,H){return[{text:"\u7F16\u8F91",onClick:function(){C.success("\u70B9\u51FB\u7B2C ".concat(H," \u7F16\u8F91\u4E86"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Q=O()(v()().mark(function te(){var re;return v()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:return Te.next=2,S(z.id);case 2:(re=W.current)===null||re===void 0||re.refresh();case 3:case"end":return Te.stop()}},te)}));function Y(){return Q.apply(this,arguments)}return Y}()}]};return F.createElement(i,{locale:T},F.createElement(j,{ref:W,search:{schema:r},table:{columns:l,actionItems:V,actionItemsDropdownProps:{overlayClassName:"my-dropdown-class-name"}},request:function(){var U=O()(v()().mark(function H(Q){var Y;return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,o();case 2:return Y=g(Q.pageSize),re.abrupt("return",{data:Y,total:100});case 4:case"end":return re.stop()}},H)}));function z(H){return U.apply(this,arguments)}return z}()}))},E.abrupt("return",{default:D});case 36:case"end":return E.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,react:_||(_=e.t(F,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}},"examples-search-table-react-010-table-actions-demo-4":{component:F.memo(F.lazy(O()(v()().mark(function h(){var d,s,a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S;return v()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=M.sent,s=d.useRef,M.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=M.sent,o=a.sleep,M.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=M.sent,r=n.default,M.next=14,Promise.resolve().then(e.bind(e,362));case 14:return u=M.sent,l=u.default,M.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return m=M.sent,g=m.default,M.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return f=M.sent,j=f.default,M.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return y=M.sent,i=y.ConfigProvider,M.next=30,Promise.resolve().then(e.bind(e,67247));case 30:return C=M.sent,b=C.default,T=function(K){return o()},S=function(){var K=s(null),W=function(U,z){return[{text:F.createElement("a",{href:"https://schema-render.js.org/",style:{color:"green",padding:"0 7px"},key:"link-".concat(z)},"\u7F16\u8F91")},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,confirmProps:{title:"\u6E29\u99A8\u63D0\u793A",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010".concat(U.supplier_code,"\u3011\u4F9B\u5E94\u5546\u5417\uFF1F")},onClick:function(){var H=O()(v()().mark(function Y(){var te;return v()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,T(U.id);case 2:(te=K.current)===null||te===void 0||te.refresh();case 3:case"end":return de.stop()}},Y)}));function Q(){return H.apply(this,arguments)}return Q}()}]};return F.createElement(i,{locale:b},F.createElement(j,{ref:K,search:{schema:r},table:{columns:l,actionItems:W,actionItemsCount:3,actionItemsColumnData:{width:180}},request:function(){var V=O()(v()().mark(function z(H){var Q;return v()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,o();case 2:return Q=g(H.pageSize),te.abrupt("return",{data:Q,total:100});case 4:case"end":return te.stop()}},z)}));function U(z){return V.apply(this,arguments)}return U}()}))},M.abrupt("return",{default:S});case 35:case"end":return M.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,react:_||(_=e.t(F,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:$,"antd/locale/zh_CN":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=O()(v()().mark(function s(){var a,o=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,o));case 3:case"end":return r.stop()}},s)}));function d(){return h.apply(this,arguments)}return d}()}}}},89588:function(G,c,e){e.r(c),e.d(c,{demos:function(){return R}});var _=e(97857),t=e.n(_),v=e(15009),L=e.n(v),O=e(99289),F=e.n(O),I=e(67294),p=e(17258),N=e(38959),x=e(71856),B=e(92114),A=e(68666),$=e(362),R={"examples-search-table-react-020-table-height-demo-0":{component:I.memo(I.lazy(F()(L()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g;return L()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return h=j.sent,d=h.sleep,j.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=j.sent,a=s.default,j.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=j.sent,n=o.default,j.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=j.sent,u=r.default,j.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return l=j.sent,m=l.default,g=function(){return I.createElement(m,{style:{height:500,overflow:"hidden"},search:{schema:a},table:{columns:n,autoScrollY:!0},request:function(){var i=F()(L()().mark(function b(T){var S;return L()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,d();case 2:return S=u(T.pageSize),M.abrupt("return",{data:S,total:100});case 4:case"end":return M.stop()}},b)}));function C(b){return i.apply(this,arguments)}return C}()})},j.abrupt("return",{default:g});case 22:case"end":return j.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns.ts":$,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var P=F()(L()().mark(function d(){var s,a=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-020-table-height-demo-1":{component:I.memo(I.lazy(F()(L()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f;return L()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return h=y.sent,d=h.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return s=y.sent,a=s.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return o=y.sent,n=o.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return r=y.sent,u=r.default,y.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return l=y.sent,m=l.default,g={height:50,lineHeight:"50px",marginTop:16,borderRadius:10,textAlign:"center",background:"lightskyblue"},f=function(){return I.createElement(m,{style:{height:700,overflow:"hidden"},search:{schema:a},table:{columns:n,autoScrollY:!0},request:function(){var C=F()(L()().mark(function T(S){var D;return L()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,d();case 2:return D=u(S.pageSize),E.abrupt("return",{data:D,total:100});case 4:case"end":return E.stop()}},T)}));function b(T){return C.apply(this,arguments)}return b}(),header:function(){return I.createElement("div",{style:t()(t()({},g),{},{margin:"0 0 16px 0"})},"Header")},titleTop:function(){return I.createElement("div",{style:g},"Title Top")},titleBottom:function(){return I.createElement("div",{style:g},"Title Bottom")},footer:function(){return I.createElement("div",{style:g},"Footer")}})},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns.ts":$,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var P=F()(L()().mark(function d(){var s,a=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},64929:function(G,c,e){e.r(c),e.d(c,{demos:function(){return R}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(73865),I=e(48201),p=e(38959),N=e(71856),x=e(92114),B=e(68666),A=e(362),$=e(23786),R={"examples-search-table-react-030-table-summay-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=i.sent,d=h.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,u=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300}},request:function(){var b=L()(t()().mark(function S(D){var M,E;return t()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,a();case 2:return M=m(D.pageSize),E=M.reduce(function(V,U){return V+U.goods_price},0).toFixed(2),W.abrupt("return",{data:M,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:E}});case 5:case"end":return W.stop()}},S)}));function T(S){return b.apply(this,arguments)}return T}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var P=L()(t()().mark(function d(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-1":{component:O.memo(O.lazy(L()(t()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=i.sent,d=h.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,u=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var b=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},T=O.createElement("div",{style:{color:"red",fontWeight:"bold"}},"\u5408\u8BA1");return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},showRowNumber:!0,summaryText:T,actionItems:b},request:function(){var S=L()(t()().mark(function M(E){var K,W;return t()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,a();case 2:return K=m(E.pageSize),W=K.reduce(function(z,H){return z+H.goods_price},0).toFixed(2),U.abrupt("return",{data:K,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:W}});case 5:case"end":return U.stop()}},M)}));function D(M){return S.apply(this,arguments)}return D}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var P=L()(t()().mark(function d(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-2":{component:O.memo(O.lazy(L()(t()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=i.sent,d=h.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,u=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var b=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},actionItems:b,rowSelection:{columnWidth:60,fixed:!0,type:"checkbox"}},request:function(){var T=L()(t()().mark(function D(M){var E,K;return t()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,a();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},D)}));function S(D){return T.apply(this,arguments)}return S}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var P=L()(t()().mark(function d(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-3":{component:O.memo(O.lazy(L()(t()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=i.sent,d=h.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=i.sent,u=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var b=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},showRowNumber:!0,actionItems:b,rowSelection:{type:"checkbox"}},request:function(){var T=L()(t()().mark(function D(M){var E,K;return t()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,a();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},D)}));function S(D){return T.apply(this,arguments)}return S}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var P=L()(t()().mark(function d(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-4":{component:O.memo(O.lazy(L()(t()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j,y;return t()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=C.sent,d=h.Tag,C.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=C.sent,a=s.sleep,C.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=C.sent,n=o.default,C.next=14,Promise.resolve().then(e.bind(e,362));case 14:return r=C.sent,u=r.default,C.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=C.sent,m=l.default,C.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=C.sent,f=g.default,j={width:116,height:"100%",background:"white",position:"absolute",left:-48,top:0,display:"flex",alignItems:"center",justifyContent:"center"},y=function(){var T=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},S=O.createElement("div",{style:j},"\u5408\u8BA1");return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},showRowNumber:!0,bordered:!0,summaryText:S,actionItems:T,rowSelection:{type:"checkbox"}},request:function(){var D=L()(t()().mark(function E(K){var W,V;return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,a();case 2:return W=m(K.pageSize),V=W.reduce(function(H,Q){return H+Q.goods_price},0).toFixed(2),z.abrupt("return",{data:W,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:V}});case 5:case"end":return z.stop()}},E)}));function M(E){return D.apply(this,arguments)}return M}()})},C.abrupt("return",{default:y});case 27:case"end":return C.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns.ts":A,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var P=L()(t()().mark(function d(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-5":{component:O.memo(O.lazy(L()(t()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return h=i.sent,d=h.Tag,i.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return s=i.sent,a=s.sleep,i.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return o=i.sent,n=o.default,i.next=14,Promise.resolve().then(e.bind(e,23786));case 14:return r=i.sent,u=r.default,i.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return l=i.sent,m=l.default,i.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return g=i.sent,f=g.default,j=function(){var b=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return O.createElement(f,{search:{schema:n},table:{columns:u,scroll:{y:300},showRowNumber:!0,bordered:!0,actionItems:b},request:function(){var T=L()(t()().mark(function D(M){var E,K;return t()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,a();case 2:return E=m(M.pageSize),K=E.reduce(function(U,z){return U+z.goods_price},0).toFixed(2),V.abrupt("return",{data:E,total:100,summaryData:{supplier_code:O.createElement(d,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return V.stop()}},D)}));function S(D){return T.apply(this,arguments)}return S}()})},i.abrupt("return",{default:j});case 26:case"end":return i.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":x,"./helpers/schema.ts":B,"./helpers/columns-tree.ts":$,antd:I,"@examples/utils":p,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":$},renderOpts:{compile:function(){var P=L()(t()().mark(function d(){var s,a=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},35955:function(G,c,e){e.r(c),e.d(c,{demos:function(){return h}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(81535),I=e(48201),p=e(67247),N=e(38959),x=e(71856),B=e(92114),A=e(68666),$=e(362),R=e(23786),P=e(91845),h={"examples-search-table-react-040-table-sort-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C;return t()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=T.sent,a=s.ConfigProvider,T.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=T.sent,n=o.default,T.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=T.sent,u=r.sleep,T.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=T.sent,m=l.default,T.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return g=T.sent,f=g.default,T.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return j=T.sent,y=j.default,i=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sortType:"string"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string",sortDataExtractor:function(D){return D.bill_type}},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sortType:"number"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}],C=function(){return O.createElement(a,{locale:n},O.createElement(y,{search:{schema:m},table:{columns:i},request:function(){var D=L()(t()().mark(function E(K){var W;return t()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,u();case 2:return W=f(K.pageSize),U.abrupt("return",{data:W,total:100});case 4:case"end":return U.stop()}},E)}));function M(E){return D.apply(this,arguments)}return M}()}))},T.abrupt("return",{default:C});case 27:case"end":return T.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:function(){var d=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-1":{component:O.memo(O.lazy(L()(t()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C,b;return t()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=S.sent,a=s.ConfigProvider,S.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=S.sent,n=o.default,S.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=S.sent,u=r.sleep,S.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=S.sent,m=l.default,S.next=18,Promise.resolve().then(e.bind(e,362));case 18:return g=S.sent,f=g.default,S.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=S.sent,y=j.default,S.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=S.sent,C=i.default,b=function(){return O.createElement(a,{locale:n},O.createElement(C,{search:{schema:m},table:{columns:f,sortMode:"local-all"},request:function(){var M=L()(t()().mark(function K(W){var V;return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,u();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()}))},S.abrupt("return",{default:b});case 30:case"end":return S.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns.ts":$,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var d=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-2":{component:O.memo(O.lazy(L()(t()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C,b;return t()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=S.sent,a=s.ConfigProvider,S.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=S.sent,n=o.default,S.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=S.sent,u=r.sleep,S.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=S.sent,m=l.default,S.next=18,Promise.resolve().then(e.bind(e,23786));case 18:return g=S.sent,f=g.default,S.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=S.sent,y=j.default,S.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=S.sent,C=i.default,b=function(){return O.createElement(a,{locale:n},O.createElement(C,{search:{schema:m},table:{columns:f,bordered:!0,sortMode:"local-all"},request:function(){var M=L()(t()().mark(function K(W){var V;return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,u();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()}))},S.abrupt("return",{default:b});case 30:case"end":return S.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":A,"./helpers/createDataSource.ts":B,"./helpers/columns-tree.ts":R,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":R},renderOpts:{compile:function(){var d=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-3":{component:O.memo(O.lazy(L()(t()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D;return t()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=E.sent,a=s.ConfigProvider,E.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=E.sent,n=o.default,E.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=E.sent,u=r.sleep,E.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=E.sent,m=l.default,E.next=18,Promise.resolve().then(e.bind(e,362));case 18:return g=E.sent,f=g.default,E.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return j=E.sent,y=j.default,E.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return i=E.sent,C=i.default,E.next=30,Promise.resolve().then(e.bind(e,91845));case 30:return b=E.sent,T=b.pinyin,S=/[\u4e00-\u9fa5]/,D=function(){return O.createElement(a,{locale:n},O.createElement(C,{search:{schema:m},table:{columns:f,sortMode:"local-all",sortStringValueTransform:function(V){return S.test(V)?T(V,{toneType:"none"}):V}},request:function(){var W=L()(t()().mark(function U(z){var H;return t()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,u();case 2:return H=y(z.pageSize),Y.abrupt("return",{data:H,total:100});case 4:case"end":return Y.stop()}},U)}));function V(U){return W.apply(this,arguments)}return V}()}))},E.abrupt("return",{default:D});case 35:case"end":return E.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,"./helpers/columns.ts":$,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"pinyin-pro":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var d=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}},"examples-search-table-react-040-table-sort-demo-4":{component:O.memo(O.lazy(L()(t()().mark(function d(){var s,a,o,n,r,u,l,m,g,f,j,y,i,C;return t()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return s=T.sent,a=s.ConfigProvider,T.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return o=T.sent,n=o.default,T.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return r=T.sent,u=r.sleep,T.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return l=T.sent,m=l.default,T.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return g=T.sent,f=g.default,T.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return j=T.sent,y=j.default,i=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",sorter:!0},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sorter:!0},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sorter:!0},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",sorter:!0},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120,sorter:!0}],C=function(){return O.createElement(a,{locale:n},O.createElement(y,{search:{schema:m},table:{columns:i,sortMode:"service"},request:function(){var D=L()(t()().mark(function E(K,W){var V,U,z;return t()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return V=W.sorter,U=V,Q.next=4,u();case 4:return z=f(K.pageSize,{sort_field:U==null?void 0:U.field,sort_order:U==null?void 0:U.order}),Q.abrupt("return",{data:z,total:100});case 6:case"end":return Q.stop()}},E)}));function M(E,K){return D.apply(this,arguments)}return M}()}))},T.abrupt("return",{default:C});case 27:case"end":return T.stop()}},d)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":B,"./helpers/schema.ts":A,antd:I,"antd/locale/zh_CN":p,"@examples/utils":N,"@schema-render/search-table-react":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:function(){var d=L()(t()().mark(function a(){var o,n=arguments;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},a)}));function s(){return d.apply(this,arguments)}return s}()}}}},66725:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return s}});var t=e(15009),v=e.n(t),L=e(5574),O=e.n(L),F=e(99289),I=e.n(F),p=e(67294),N=e(18899),x=e(38959),B=e(71856),A=e(92114),$=e(68666),R=e(362),P=e(27164),h=e(6271),d=e(48201),s={"examples-search-table-react-050-tabs-demo-0":{component:p.memo(p.lazy(I()(v()().mark(function a(){var o,n,r,u,l,m,g,f,j,y,i,C,b,T;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=D.sent,n=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,u=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=D.sent,m=l.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=D.sent,f=g.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=D.sent,y=j.default,D.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=D.sent,C=i.useState,b=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],T=function(){var E=C("1"),K=O()(E,2),W=K[0],V=K[1];return p.createElement(y,{search:{schema:u,labelWidth:80},title:{tabs:{activeKey:W,items:b,onChange:V}},table:{columns:m},request:function(){var U=I()(v()().mark(function H(Q){var Y;return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return console.log("activeKey:",W),re.next=3,n();case 3:return Y=f(Q.pageSize),re.abrupt("return",{data:Y,total:100});case 5:case"end":return re.stop()}},H)}));function z(H){return U.apply(this,arguments)}return z}()})},D.abrupt("return",{default:T});case 27:case"end":return D.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":B,react:_||(_=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var a=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-1":{component:p.memo(p.lazy(I()(v()().mark(function a(){var o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D,M,E;return v()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=W.sent,n=o.useState,W.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return r=W.sent,u=r.sleep,W.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return l=W.sent,m=l.default,W.next=14,Promise.resolve().then(e.bind(e,362));case 14:return g=W.sent,f=g.default,W.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return j=W.sent,y=j.default,W.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return i=W.sent,C=i.default,W.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return b=W.sent,T=b.default,W.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return S=W.sent,D=S.default,M=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],E=function(){var U=n("1"),z=O()(U,2),H=z[0],Q=z[1];return p.createElement(D,{search:{schema:m},title:{showSetting:!0,tabs:{activeKey:H,items:M,onChange:Q}},table:{columns:H==="1"?f:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var Y=I()(v()().mark(function re(de){var Te,ue;return v()().wrap(function(De){for(;;)switch(De.prev=De.next){case 0:return De.next=2,u();case 2:if(Te=H==="1"?C:T,ue=Te(de.pageSize),!(Math.random()>.7)){De.next=6;break}throw new Error("\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF");case 6:return De.abrupt("return",{data:ue,total:100});case 7:case"end":return De.stop()}},re)}));function te(re){return Y.apply(this,arguments)}return te}()})},W.abrupt("return",{default:E});case 35:case"end":return W.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":$,"./helpers/createDataSource-vt.ts":P,"./helpers/columns-value-type.ts":h,"./helpers/createDataSource.ts":A,"./helpers/columns.ts":R,react:_||(_=e.t(p,2)),"@examples/utils":x,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var a=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-2":{component:p.memo(p.lazy(I()(v()().mark(function a(){var o,n,r,u,l,m,g,f,j,y,i,C,b,T;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=D.sent,n=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=D.sent,u=r.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=D.sent,m=l.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=D.sent,f=g.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=D.sent,y=j.default,D.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=D.sent,C=i.useState,b=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],T=function(){var E=C("1"),K=O()(E,2),W=K[0],V=K[1];return p.createElement(y,{search:{schema:u,labelWidth:80},title:{showSetting:!0,tabs:{activeKey:W,items:b,onChange:V}},table:{columns:m},request:function(){var U=I()(v()().mark(function H(Q){var Y;return v()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return console.log("activeKey:",W),re.next=3,n();case 3:return Y=f(Q.pageSize),re.abrupt("return",{data:Y,total:100});case 5:case"end":return re.stop()}},H)}));function z(H){return U.apply(this,arguments)}return z}()})},D.abrupt("return",{default:T});case 27:case"end":return D.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":B,react:_||(_=e.t(p,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var a=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-3":{component:p.memo(p.lazy(I()(v()().mark(function a(){var o,n,r,u,l,m,g,f,j,y,i;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=b.sent,n=o.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=b.sent,u=r.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=b.sent,m=l.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=b.sent,f=g.default,b.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=b.sent,y=j.default,i=function(){return p.createElement(y,{search:{schema:u,labelWidth:80},title:{showSetting:!0},table:{columns:m},request:function(){var S=I()(v()().mark(function M(E){var K;return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,n();case 2:return K=f(E.pageSize),V.abrupt("return",{data:K,total:100});case 4:case"end":return V.stop()}},M)}));function D(M){return S.apply(this,arguments)}return D}()})},b.abrupt("return",{default:i});case 22:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":R,"@examples/utils":x,"@schema-render/search-table-react":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R},renderOpts:{compile:function(){var a=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}},"examples-search-table-react-050-tabs-demo-4":{component:p.memo(p.lazy(I()(v()().mark(function a(){var o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return o=E.sent,n=o.sleep,E.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return r=E.sent,u=r.default,E.next=10,Promise.resolve().then(e.bind(e,362));case 10:return l=E.sent,m=l.default,E.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return g=E.sent,f=g.default,E.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return j=E.sent,y=j.default,E.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return i=E.sent,C=i.useState,E.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return b=E.sent,T=b.Button,S=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],D=function(){var W=C("1"),V=O()(W,2),U=V[0],z=V[1],H={left:p.createElement(T,{style:{marginRight:16}},"\u5DE6\u4FA7\u5185\u5BB9"),right:p.createElement(T,null,"\u53F3\u4FA7\u5185\u5BB9")};return p.createElement(y,{search:{schema:u,labelWidth:80},title:{showSetting:!0,tabs:{activeKey:U,items:S,onChange:z,tabBarExtraContent:H}},table:{columns:m},request:function(){var Q=I()(v()().mark(function te(re){var de;return v()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return console.log("activeKey:",U),ue.next=3,n();case 3:return de=f(re.pageSize),ue.abrupt("return",{data:de,total:100});case 5:case"end":return ue.stop()}},te)}));function Y(te){return Q.apply(this,arguments)}return Y}()})},E.abrupt("return",{default:D});case 31:case"end":return E.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { useState } from 'react'
import { Button } from 'antd'

const items = [
  { key: '1', label: '\u5DF2\u63D0\u4EA4' },
  { key: '2', label: '\u5F85\u63D0\u4EA4' },
  { key: '3', label: '\u5F85\u5BA1\u6838' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  const tabBarExtraContent = {
    left: <Button style={{ marginRight: 16 }}>\u5DE6\u4FA7\u5185\u5BB9</Button>,
    right: <Button>\u53F3\u4FA7\u5185\u5BB9</Button>,
  }

  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
          tabBarExtraContent,
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/columns.ts":R,"./helpers/schema.ts":$,"@examples/utils":x,"@schema-render/search-table-react":B,react:_||(_=e.t(p,2)),antd:d,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$},renderOpts:{compile:function(){var a=I()(v()().mark(function n(){var r,u=arguments;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(r=m.sent).default.apply(r,u));case 3:case"end":return m.stop()}},n)}));function o(){return a.apply(this,arguments)}return o}()}}}},23915:function(G,c,e){e.r(c),e.d(c,{demos:function(){return d}});var _=e(97857),t=e.n(_),v=e(15009),L=e.n(v),O=e(99289),F=e.n(O),I=e(67294),p=e(87922),N=e(48201),x=e(67247),B=e(38959),A=e(71856),$=e(27164),R=e(68666),P=e(6271),h=e(41989),d={"examples-search-table-react-060-value-type-demo-0":{component:I.memo(I.lazy(F()(L()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i,C,b,T;return L()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,48201));case 2:return a=D.sent,o=a.ConfigProvider,D.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return n=D.sent,r=n.default,D.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return u=D.sent,l=u.sleep,D.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return m=D.sent,g=m.default,D.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return f=D.sent,j=f.default,D.next=22,Promise.resolve().then(e.bind(e,27164));case 22:return y=D.sent,i=y.default,D.next=26,Promise.resolve().then(e.bind(e,71856));case 26:return C=D.sent,b=C.default,T=function(){return I.createElement(o,{locale:r},I.createElement(b,{search:{schema:g},table:{columns:j,showRowNumber:!0,sortMode:"local-all"},request:function(){var E=F()(L()().mark(function W(V){var U;return L()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,l();case 2:return U=i(V.pageSize),H.abrupt("return",{data:U,total:100});case 4:case"end":return H.stop()}},W)}));function K(W){return E.apply(this,arguments)}return K}()}))},D.abrupt("return",{default:T});case 30:case"end":return D.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"5.21.4"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":R,"./helpers/columns-value-type.ts":P,antd:N,"antd/locale/zh_CN":x,"@examples/utils":B,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":P},renderOpts:{compile:function(){var s=F()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-search-table-react-060-value-type-demo-1":{component:I.memo(I.lazy(F()(L()().mark(function s(){var a,o,n,r,u,l,m,g,f,j;return L()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return a=i.sent,o=a.sleep,i.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return n=i.sent,r=n.default,i.next=10,Promise.resolve().then(e.bind(e,27164));case 10:return u=i.sent,l=u.default,i.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return m=i.sent,g=m.default,f=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u5F69\u8272\u6807\u7B7E",dataIndex:"tags",valueType:function(b){return{type:"tags",color:Array.isArray(b.tags)?"blue":"green"}}}],j=function(){return I.createElement(g,{search:{schema:r},table:{columns:f,sortMode:"local-all"},request:function(){var b=F()(L()().mark(function S(D){var M;return L()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return M=l(D.pageSize),K.abrupt("return",{data:M,total:100});case 4:case"end":return K.stop()}},S)}));function T(S){return b.apply(this,arguments)}return T}()})},i.abrupt("return",{default:j});case 19:case"end":return i.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":R,"@examples/utils":B,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":R},renderOpts:{compile:function(){var s=F()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}},"examples-search-table-react-060-value-type-demo-2":{component:I.memo(I.lazy(F()(L()().mark(function s(){var a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D,M,E;return L()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return a=W.sent,o=a.default,W.next=6,Promise.resolve().then(e.bind(e,48201));case 6:return n=W.sent,r=n.ConfigProvider,u=n.Tag,W.next=11,Promise.resolve().then(e.bind(e,67247));case 11:return l=W.sent,m=l.default,W.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return g=W.sent,f=g.sleep,W.next=19,Promise.resolve().then(e.bind(e,68666));case 19:return j=W.sent,y=j.default,W.next=23,Promise.resolve().then(e.bind(e,27164));case 23:return i=W.sent,C=i.default,W.next=27,Promise.resolve().then(e.bind(e,71856));case 27:return b=W.sent,T=b.default,S=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u4EE3\u7801\u5757",dataIndex:"code",valueType:"code"},{title:"\u90E8\u7F72\u72B6\u6001",dataIndex:"deploy_status",valueType:"deploy-status"},{title:"\u90E8\u7F72\u72B6\u6001(Tag)",dataIndex:"deploy_status_tag",valueType:"deploy-status-tag"}],D={0:{text:"\u5F02\u5E38",style:{background:"red"},color:"red"},1:{text:"\u8FDB\u884C\u4E2D",style:{background:"blue"},color:"blue"},2:{text:"\u6210\u529F",style:{background:"green"},color:"green"}},M={code:function(U){var z=U.value;return I.createElement(o,{value:z,language:"js"})},"deploy-status":function(U){var z=U.value,H=D[z];return I.createElement("div",null,I.createElement("span",{style:t()({display:"inline-block",width:8,height:8,borderRadius:"50%",marginRight:6},H.style)}),H.text)},"deploy-status-tag":function(U){var z=U.record,H=z.deploy_status,Q=D[H];return I.createElement(u,{color:Q.color},Q.text)}},E=function(){return I.createElement(r,{locale:m},I.createElement(T,{search:{schema:y},table:{columns:S,showRowNumber:!0,sortMode:"local-all",registerValueType:M},request:function(){var U=F()(L()().mark(function H(Q){var Y;return L()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,f();case 2:return Y=C(Q.pageSize),re.abrupt("return",{data:Y,total:100});case 4:case"end":return re.stop()}},H)}));function z(H){return U.apply(this,arguments)}return z}()}))},W.abrupt("return",{default:E});case 34:case"end":return W.stop()}},s)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},antd:{type:"NPM",value:"5.21.4"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":R,"@examples/components/SyntaxHighlighter":h,antd:N,"antd/locale/zh_CN":x,"@examples/utils":B,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":R},renderOpts:{compile:function(){var s=F()(L()().mark(function o(){var n,r=arguments;return L()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,r));case 3:case"end":return l.stop()}},o)}));function a(){return s.apply(this,arguments)}return a}()}}}},55983:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return o}});var t=e(5574),v=e.n(t),L=e(97857),O=e.n(L),F=e(15009),I=e.n(F),p=e(99289),N=e.n(p),x=e(67294),B=e(8497),A=e(38959),$=e(71856),R=e(92114),P=e(68666),h=e(362),d=e(27164),s=e(6271),a=e(48201),o={"examples-search-table-react-100-columns-setting-demo-0":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b;return I()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=S.sent,u=r.sleep,S.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=S.sent,m=l.default,S.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=S.sent,f=g.default,S.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=S.sent,y=j.default,S.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=S.sent,C=i.default,b=function(){return x.createElement(C,{search:{schema:m},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var M=N()(I()().mark(function K(W){var V;return I()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,u();case 2:return V=y(W.pageSize),z.abrupt("return",{data:V,total:100});case 4:case"end":return z.stop()}},K)}));function E(K){return M.apply(this,arguments)}return E}()})},S.abrupt("return",{default:b});case 22:case"end":return S.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-1":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b,T;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=D.sent,u=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=D.sent,m=l.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=D.sent,f=g.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=D.sent,y=j.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=D.sent,C=i.default,b=f.map(function(M,E){var K=O()({},M);return E===0?K.fixed="left":E===f.length-1&&(K.fixed="right"),K}),T=function(){return x.createElement(C,{search:{schema:m},title:{showSetting:!0},table:{columns:b,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var E=N()(I()().mark(function W(V){var U;return I()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,u();case 2:return U=y(V.pageSize),H.abrupt("return",{data:U,total:100});case 4:case"end":return H.stop()}},W)}));function K(W){return E.apply(this,arguments)}return K}()})},D.abrupt("return",{default:T});case 23:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/columns.ts":h,"./helpers/schema.ts":P,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-2":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b,T,S,D,M,E,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,u=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return l=U.sent,m=l.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,C=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return b=U.sent,T=b.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return S=U.sent,D=S.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],W=function(){var H=u("1"),Q=v()(H,2),Y=Q[0],te=Q[1];return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:te}},table:{columns:Y==="1"?y:C,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var re=N()(I()().mark(function Te(ue){var ie,De;return I()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,m();case 2:return ie=Y==="1"?T:D,De=ie(ue.pageSize),Pe.abrupt("return",{data:De,total:100});case 5:case"end":return Pe.stop()}},Te)}));function de(Te){return re.apply(this,arguments)}return de}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":d,"./helpers/schema.ts":P,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":R,"./helpers/columns.ts":h,react:_||(_=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":d,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-3":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b,T,S,D,M;return I()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=K.sent,u=r.useRef,K.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return l=K.sent,m=l.sleep,K.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=K.sent,f=g.default,K.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=K.sent,y=j.default,K.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return i=K.sent,C=i.default,K.next=22,Promise.resolve().then(e.bind(e,71856));case 22:return b=K.sent,T=b.default,K.next=26,Promise.resolve().then(e.bind(e,48201));case 26:return S=K.sent,D=S.Button,M=function(){var V=u(null),U=function(){var H;(H=V.current)===null||H===void 0||H.openSettingModal()};return x.createElement(T,{ref:V,search:{schema:f},titleTop:function(){return x.createElement(D,{type:"primary",onClick:U},"\u6253\u5F00\u5217\u8BBE\u7F6E")},table:{columns:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var z=N()(I()().mark(function Q(Y){var te;return I()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,m();case 2:return te=C(Y.pageSize),de.abrupt("return",{data:te,total:100});case 4:case"end":return de.stop()}},Q)}));function H(Q){return z.apply(this,arguments)}return H}()})},K.abrupt("return",{default:M});case 30:case"end":return K.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":P,"./helpers/columns.ts":h,react:_||(_=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":$,antd:a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-4":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b,T;return I()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return r=D.sent,u=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return l=D.sent,m=l.default,D.next=10,Promise.resolve().then(e.bind(e,362));case 10:return g=D.sent,f=g.default,D.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return j=D.sent,y=j.default,D.next=18,Promise.resolve().then(e.bind(e,71856));case 18:return i=D.sent,C=i.default,b="save-setting-unique-id",T=function(){var E=function(){var W=N()(I()().mark(function V(U){return I()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,u();case 2:localStorage.setItem(b,JSON.stringify(U));case 3:case"end":return H.stop()}},V)}));return function(U){return W.apply(this,arguments)}}(),K=function(){var W=N()(I()().mark(function V(){var U;return I()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,u();case 2:if(U=localStorage.getItem(b),!U){H.next=5;break}return H.abrupt("return",JSON.parse(U));case 5:case"end":return H.stop()}},V)}));return function(){return W.apply(this,arguments)}}();return x.createElement(C,{search:{schema:m},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},onSettingChanged:E,getSetting:K},request:function(){var W=N()(I()().mark(function U(z){var H;return I()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,u();case 2:return H=y(z.pageSize),Y.abrupt("return",{data:H,total:100});case 4:case"end":return Y.stop()}},U)}));function V(U){return W.apply(this,arguments)}return V}()})},D.abrupt("return",{default:T});case 23:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":R,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-5":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b,T,S,D,M,E,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,u=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return l=U.sent,m=l.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,C=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return b=U.sent,T=b.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return S=U.sent,D=S.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],W=function(){var H=u("1"),Q=v()(H,2),Y=Q[0],te=Q[1],re=function(){var Te=N()(I()().mark(function ue(ie,De){return I()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,m();case 2:localStorage.setItem(De,JSON.stringify(ie));case 3:case"end":return Pe.stop()}},ue)}));return function(ie,De){return Te.apply(this,arguments)}}(),de=function(){var Te=N()(I()().mark(function ue(ie){var De;return I()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,m();case 2:if(De=localStorage.getItem(ie),!De){Pe.next=5;break}return Pe.abrupt("return",JSON.parse(De));case 5:case"end":return Pe.stop()}},ue)}));return function(ie){return Te.apply(this,arguments)}}();return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:te}},table:{columns:Y==="1"?y:C,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-tab-".concat(Y),onSettingChanged:re,getSetting:de},request:function(){var Te=N()(I()().mark(function ie(De){var fe,Pe;return I()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,m();case 2:return fe=Y==="1"?T:D,Pe=fe(De.pageSize),_e.abrupt("return",{data:Pe,total:100});case 5:case"end":return _e.stop()}},ie)}));function ue(ie){return Te.apply(this,arguments)}return ue}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":d,"./helpers/schema.ts":P,"./helpers/columns.ts":h,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":R,react:_||(_=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":d,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}},"examples-search-table-react-100-columns-setting-demo-6":{component:x.memo(x.lazy(N()(I()().mark(function n(){var r,u,l,m,g,f,j,y,i,C,b,T,S,D,M,E,K,W;return I()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=U.sent,u=r.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return l=U.sent,m=l.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return g=U.sent,f=g.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return j=U.sent,y=j.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return i=U.sent,C=i.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return b=U.sent,T=b.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return S=U.sent,D=S.default,U.next=30,Promise.resolve().then(e.bind(e,71856));case 30:return M=U.sent,E=M.default,K=[{key:"1",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E00"},{key:"2",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E8C"}],W=function(){var H=u("1"),Q=v()(H,2),Y=Q[0],te=Q[1],re=u([]),de=v()(re,2),Te=de[0],ue=de[1],ie=function(){var Pe=N()(I()().mark(function Oe(_e,Le){return I()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Ae.next=2,m();case 2:localStorage.setItem(Le,JSON.stringify(_e));case 3:case"end":return Ae.stop()}},Oe)}));return function(_e,Le){return Pe.apply(this,arguments)}}(),De=function(){var Pe=N()(I()().mark(function Oe(_e){var Le;return I()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Ae.next=2,m();case 2:if(Le=localStorage.getItem(_e),!Le){Ae.next=5;break}return Ae.abrupt("return",JSON.parse(Le));case 5:case"end":return Ae.stop()}},Oe)}));return function(_e){return Pe.apply(this,arguments)}}(),fe=function(){var Pe=N()(I()().mark(function Oe(){return I()().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,m(500);case 2:return Le.abrupt("return",Y==="1"?y:C);case 3:case"end":return Le.stop()}},Oe)}));return function(){return Pe.apply(this,arguments)}}();return x.createElement(E,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:Y,items:K,onChange:te}},table:{columns:Te,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-async-".concat(Y),onSettingChanged:ie,getSetting:De},request:function(){var Pe=N()(I()().mark(function _e(Le){var We,Ae,Ue;return I()().wrap(function(Ke){for(;;)switch(Ke.prev=Ke.next){case 0:return Ke.next=2,m();case 2:return We=Y==="1"?T:D,Ae=We(Le.pageSize),Ke.next=6,fe();case 6:return Ue=Ke.sent,ue(Ue),Ke.abrupt("return",{data:Ae,total:100});case 9:case"end":return Ke.stop()}},_e)}));function Oe(_e){return Pe.apply(this,arguments)}return Oe}()})},U.abrupt("return",{default:W});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":P,"./helpers/createDataSource-vt.ts":d,"./helpers/columns-value-type.ts":s,"./helpers/createDataSource.ts":R,"./helpers/columns.ts":h,react:_||(_=e.t(x,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":P,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":d,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":R,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=N()(I()().mark(function u(){var l,m=arguments;return I()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,m));case 3:case"end":return f.stop()}},u)}));function r(){return n.apply(this,arguments)}return r}()}}}},47381:function(G,c,e){e.r(c),e.d(c,{demos:function(){return $}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(90749),I=e(71856),p=e(38959),N=e(74465),x=e(62244),B=e(34200),A=e(24534),$={"examples-search-table-react-700-locale-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function R(){var P,h,d,s,a,o,n,r,u,l,m,g,f;return t()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,34200));case 2:return P=y.sent,h=P.default,y.next=6,Promise.resolve().then(e.bind(e,24534));case 6:return d=y.sent,s=d.default,y.next=10,Promise.resolve().then(e.bind(e,62244));case 10:return a=y.sent,o=a.default,y.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return n=y.sent,r=n.default,y.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return u=y.sent,l=u.sleep,y.next=22,Promise.resolve().then(e.bind(e,74465));case 22:return m=y.sent,g=m.default,f=function(){return O.createElement(r,{locale:g,search:{schema:h,labelWidth:"max-content"},title:{showSetting:!0},table:{bordered:!0,columns:s,showRowNumber:!0,actionItems:function(){return[{text:"Edit"},{text:"View"},{text:"Delete",danger:!0}]},actionItemsColumnData:{width:150},summaryText:"Total"},request:function(){var C=L()(t()().mark(function T(S){var D,M;return t()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,l();case 2:return D=o(S.pageSize),M=D.reduce(function(W,V){return W+V.goods_price},0).toFixed(2),K.abrupt("return",{data:D,total:100,summaryData:{goods_price:M}});case 5:case"end":return K.stop()}},T)}));function b(T){return C.apply(this,arguments)}return b}()})},y.abrupt("return",{default:f});case 26:case"end":return y.stop()}},R)})))),asset:{type:"BLOCK",id:"examples-search-table-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import schemaEn from './helpers/schema-en'
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

export default Demo`},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},root:{type:"NPM"},"./helpers/createDataSource-en.ts":{type:"FILE",value:e(45876).Z},"./helpers/schema-en.ts":{type:"FILE",value:e(36556).Z},"./helpers/columns-en.ts":{type:"FILE",value:e(71091).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-en.ts":x,"./helpers/schema-en.ts":B,"./helpers/columns-en.ts":A,"@schema-render/search-table-react":I,"@examples/utils":p,"@schema-render/search-table-react/dist/esm/locale/en_US":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-en.ts":x,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema-en.ts":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-en.ts":A},renderOpts:{compile:function(){var R=L()(t()().mark(function h(){var d,s=arguments;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,s));case 3:case"end":return o.stop()}},h)}));function P(){return R.apply(this,arguments)}return P}()}}}},81706:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(27490),v={}},62111:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(8906),v={}},44307:function(G,c,e){var _;e.r(c),e.d(c,{demos:function(){return R}});var t=e(15009),v=e.n(t),L=e(99289),O=e.n(L),F=e(67294),I=e(34451),p=e(38959),N=e(71856),x=e(48201),B=e(67247),A=e(92114),$=e(68666),R={"examples-search-table-react-900-table-editable-demo-0":{component:F.memo(F.lazy(O()(v()().mark(function P(){var h,d,s,a,o,n,r,u,l,m,g,f,j,y,i,C,b,T,S,D;return v()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=E.sent,d=h.useRef,s=h.useMemo,E.next=7,Promise.resolve().then(e.bind(e,38959));case 7:return a=E.sent,o=a.sleep,E.next=11,Promise.resolve().then(e.bind(e,68666));case 11:return n=E.sent,r=n.default,E.next=15,Promise.resolve().then(e.bind(e,92114));case 15:return u=E.sent,l=u.default,E.next=19,Promise.resolve().then(e.bind(e,71856));case 19:return m=E.sent,g=m.default,E.next=23,Promise.resolve().then(e.bind(e,48201));case 23:return f=E.sent,j=f.ConfigProvider,E.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return y=E.sent,i=y.default,E.next=31,Promise.resolve().then(e.bind(e,48201));case 31:return C=E.sent,b=C.InputNumber,T=C.Button,S=C.message,D=function(){var W=d(null),V=s(function(){return[{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",render:function(H,Q){return F.createElement(b,{value:H,onChange:function(te){var re;Q.goods_price=te,(re=W.current)===null||re===void 0||re.rerender()}})}},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]},[]),U=function(){var H;console.log("dataSource:",(H=W.current)===null||H===void 0?void 0:H.getDataSource()),S.success("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6700\u65B0\u6570\u636E")};return F.createElement(j,{locale:i},F.createElement(g,{ref:W,search:{schema:r},table:{columns:V},request:function(){var z=O()(v()().mark(function Q(Y){var te;return v()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,o();case 2:return te=l(Y.pageSize),de.abrupt("return",{data:te,total:100});case 4:case"end":return de.stop()}},Q)}));function H(Q){return z.apply(this,arguments)}return H}()}),F.createElement(T,{type:"primary",onClick:U},"\u63D0\u4EA4"))},E.abrupt("return",{default:D});case 37:case"end":return E.stop()}},P)})))),asset:{type:"BLOCK",id:"examples-search-table-react-900-table-editable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},antd:{type:"NPM",value:"5.21.4"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,react:_||(_=e.t(F,2)),"@examples/utils":p,"@schema-render/search-table-react":N,antd:x,"antd/locale/zh_CN":B,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$},renderOpts:{compile:function(){var P=O()(v()().mark(function d(){var s,a=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},d)}));function h(){return P.apply(this,arguments)}return h}()}}}},13836:function(G,c,e){e.r(c),e.d(c,{demos:function(){return v}});var _=e(67294),t=e(24311),v={}},28629:function(G,c,e){e.r(c),e.d(c,{demos:function(){return B}});var _=e(15009),t=e.n(_),v=e(99289),L=e.n(v),O=e(67294),F=e(63710),I=e(38959),p=e(71856),N=e(92114),x=e(362),B={"examples-search-table-react-910-no-search-demo-0":{component:O.memo(O.lazy(L()(t()().mark(function A(){var $,R,P,h,d,s,a,o,n;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return $=u.sent,R=$.sleep,u.next=6,Promise.resolve().then(e.bind(e,362));case 6:return P=u.sent,h=P.default,u.next=10,Promise.resolve().then(e.bind(e,92114));case 10:return d=u.sent,s=d.default,u.next=14,Promise.resolve().then(e.bind(e,71856));case 14:return a=u.sent,o=a.default,n=function(){return O.createElement(o,{search:!1,table:{columns:h},request:function(){var m=L()(t()().mark(function f(){var j;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,R();case 2:return j=s(),i.abrupt("return",{data:j,total:100});case 4:case"end":return i.stop()}},f)}));function g(){return m.apply(this,arguments)}return g}()})},u.abrupt("return",{default:n});case 18:case"end":return u.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-table-react-910-no-search-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"1.6.2"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":N,"./helpers/columns.ts":x,"@examples/utils":I,"@schema-render/search-table-react":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":x},renderOpts:{compile:function(){var A=L()(t()().mark(function R(){var P,h=arguments;return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(P=s.sent).default.apply(P,h));case 3:case"end":return s.stop()}},R)}));function $(){return A.apply(this,arguments)}return $}()}}}},41989:function(G,c,e){e.r(c),e.d(c,{default:function(){return O}});var _=e(42481),t=e(71353),v=e(85893),L=function(I){var p=I.value,N=I.language,x=N===void 0?"json":N,B=I.style;return(0,v.jsx)("div",{style:B,children:(0,v.jsx)(_.Z,{className:"example-hl",language:x,style:t.Z,children:x==="json"?JSON.stringify(p,null,2):p})})},O=L},78469:function(G,c,e){e.r(c);var _=e(25035),t=e(55241),v=e(93967),L=e.n(v),O=e(59868),F=e(85893),I=function(N){var x=N.body,B=N.schema,A=N.validator,$=N.required,R=N.prefixClassNames;return(0,F.jsxs)("div",{className:L()(R("item-layout-horizontal"),O.horizontal),children:[(0,F.jsxs)("div",{className:L()(R("item-main"),O.main),children:[(0,F.jsxs)("div",{className:L()(R("item-header"),O.header),children:[$&&(0,F.jsx)("span",{className:L()(R("item-mark"),O.mark),children:"*"}),(0,F.jsx)("span",{className:L()(R("item-title"),O.title),children:B.title}),!!B.titleDescription&&(0,F.jsx)(t.Z,{placement:"top",trigger:"hover",content:B.titleDescription,children:(0,F.jsx)(_.Z,{className:L()(R("item-title-tooltip"),O.titleTooltip)})})]}),(0,F.jsx)("div",{className:L()(R("item-body"),O.body),children:x})]}),(0,F.jsxs)("div",{className:L()(R("item-footer"),O.footer),children:[A.status==="error"&&!!A.message&&(0,F.jsx)("div",{className:L()(R("item-error-msg"),O.errorMsg),children:A.message}),!!B.description&&(0,F.jsx)("div",{className:L()(R("item-desc"),O.desc),children:B.description})]})]})};c.default=I},59868:function(G,c,e){e.r(c),e.d(c,{body:function(){return o},desc:function(){return r},errorMsg:function(){return u},footer:function(){return n},header:function(){return h},horizontal:function(){return R},main:function(){return P},mark:function(){return s},title:function(){return d},titleTooltip:function(){return a}});var _=e(68400),t=e.n(_),v=e(77525),L,O,F,I,p,N,x,B,A,$,R=(0,v.H)(L||(L=t()([""]))),P=(0,v.H)(O||(O=t()([`
  display: flex;
  align-items: center;
`]))),h=(0,v.H)(F||(F=t()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),d=(0,v.H)(I||(I=t()([`
  word-break: break-all;
`]))),s=(0,v.H)(p||(p=t()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),a=(0,v.H)(N||(N=t()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),o=(0,v.H)(x||(x=t()([`
  flex-grow: 1;
`]))),n=(0,v.H)(B||(B=t()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),r=(0,v.H)(A||(A=t()([`
  margin-top: 6px;
  color: #999;
`]))),u=(0,v.H)($||($=t()([`
  margin-top: 6px;
  color: #ff4d4f;
`])))},29298:function(G,c,e){e.r(c),e.d(c,{desc:function(){return h},errorMsg:function(){return d},footer:function(){return P},header:function(){return B},mark:function(){return $},title:function(){return A},titleTooltip:function(){return R}});var _=e(68400),t=e.n(_),v=e(77525),L,O,F,I,p,N,x,B=(0,v.H)(L||(L=t()([`
  margin-bottom: 8px;
`]))),A=(0,v.H)(O||(O=t()([`
  word-break: break-all;
`]))),$=(0,v.H)(F||(F=t()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),R=(0,v.H)(I||(I=t()([`
  margin-left: 4px;
`]))),P=(0,v.H)(p||(p=t()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),h=(0,v.H)(N||(N=t()([`
  margin-top: 8px;
  color: #999;
`]))),d=(0,v.H)(x||(x=t()([`
  margin-top: 8px;
  color: #ff4d4f;
`])))},2862:function(G,c,e){e.r(c);var _=e(97857),t=e.n(_),v=e(25278),L=e(13457),O=e(41637),F=e(34041),I=e(55742),p=e(85893),N={InputText:{component:function(B){var A,$=B.schema,R=B.value,P=B.disabled,h=B.readonly,d=B.onChange;return h?(0,p.jsx)("div",{children:R}):(0,p.jsx)(v.Z,t()(t()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:R!=null?R:"",disabled:P,onChange:function(a){return d(a.target.value)}}))}},InputNumber:{component:function(B){var A,$=B.schema,R=B.value,P=B.disabled,h=B.readonly,d=B.onChange;return h?(0,p.jsx)("div",{children:R}):(0,p.jsx)(L.Z,t()(t()({style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:R,onChange:function(a){return d(a!=null?a:void 0)},disabled:P}))}},TextArea:{component:function(B){var A,$=B.schema,R=B.value,P=B.disabled,h=B.readonly,d=B.onChange;return h?(0,p.jsx)("div",{children:R}):(0,p.jsx)(v.Z.TextArea,t()(t()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:R!=null?R:"",onChange:function(a){return d(a.target.value)},disabled:P}))}},Password:{component:function(B){var A,$=B.schema,R=B.value,P=B.disabled,h=B.readonly,d=B.onChange;return h?(0,p.jsx)("div",{children:R}):(0,p.jsx)(v.Z.Password,t()(t()({placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:R!=null?R:"",onChange:function(a){return d(a.target.value)},disabled:P}))}},Switch:{component:function(B){var A=B.value,$=B.disabled,R=B.onChange;return(0,p.jsx)(O.Z,{checked:A,disabled:$,onChange:function(h){return R(h)}})}},Select:{component:function(B){var A,$,R,P=B.schema,h=B.value,d=B.disabled,s=B.readonly,a=B.onChange,o=(A=($=P.renderOptions)===null||$===void 0?void 0:$.options)!==null&&A!==void 0?A:[];if(s){var n=o.find(function(r){return r.value===h});return(0,p.jsx)("div",{children:n==null?void 0:n.label})}return(0,p.jsx)(F.default,t()(t()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat((R=P.title)!==null&&R!==void 0?R:"")},P.renderOptions),{},{value:h,onChange:function(u){return a(u)},disabled:d}))}},Radio:{component:function(B){var A,$,R=B.schema,P=B.value,h=B.disabled,d=B.onChange,s=(A=($=R.renderOptions)===null||$===void 0?void 0:$.options)!==null&&A!==void 0?A:[];return(0,p.jsx)(I.ZP.Group,{value:P,disabled:h,onChange:function(o){return d(o.target.value)},children:s.map(function(a){return(0,p.jsx)(I.ZP,{value:a.value,disabled:a.disabled,children:a.label},a.value)})})}}};c.default=N},40644:function(G,c,e){e.r(c);var _=e(5574),t=e.n(_),v=e(25035),L=e(52162),O=e(55241),F=e(47221),I=e(67294),p=e(85893),N=function(B){var A=B.schema,$=B.path,R=B.objectStyle,P=(0,I.useState)(!1),h=t()(P,2),d=h[0],s=h[1],a=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{children:A.title}),!!A.titleDescription&&(0,p.jsx)(O.Z,{placement:"top",trigger:"hover",content:A.titleDescription,children:(0,p.jsx)(v.Z,{style:{marginLeft:4}})})]});return(0,p.jsx)(F.Z,{bordered:!1,ghost:!0,activeKey:String(d),onChange:function(){return s(!d)},children:(0,p.jsx)(F.Z.Panel,{header:a,style:{borderRadius:4,background:"rgba(0,0,0,0.03)"},children:(0,p.jsx)("div",{style:R,children:(0,p.jsx)(L.Z,{schema:A,path:$})})},"false")})};c.default={formItem:N}},33517:function(G,c,e){e.r(c);var _=e(25035),t=e(52162),v=e(55241),L=e(85893),O={background:"#efefef",fontWeight:"bold",padding:"7px 15px",borderRadius:4,marginBottom:15},F=function(p){var N=p.schema,x=p.path,B=p.objectStyle;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("div",{style:O,children:[(0,L.jsx)("span",{children:N.title}),!!N.titleDescription&&(0,L.jsx)(v.Z,{placement:"top",trigger:"hover",content:N.titleDescription,children:(0,L.jsx)(_.Z,{style:{marginLeft:4}})})]}),(0,L.jsx)("div",{style:B,children:(0,L.jsx)(t.Z,{schema:N,path:x})})]})};c.default={formItem:F}},47621:function(G,c,e){e.r(c),c.default={renderType:"Root",properties:{title:{renderType:"InputText",title:"\u4E00\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E00\u7EA7\u5185\u5BB9"},o1:{renderType:"Object",title:"\u4EC5\u52A0\u7C97\u6807\u9898\u7684\u5BF9\u8C61 Object",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}},o2:{renderType:"ObjectCollapse",title:"\u53EF\u6298\u53E0\u7684\u5BF9\u8C61 ObjectCollapse",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}}}}},37418:function(G,c,e){e.r(c),e.d(c,{default:function(){return F}});var _=e(67294),t=e(85893),v={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #ececec",borderRadius:6,cursor:"pointer",fontSize:14},L=function(p){var N=p.value,x=p.sPath,B=p.onChange,A=function(){var R=String(Math.random()).slice(2,6),P={bank_id:"id_".concat(R),bank_account:"111222333".concat(R),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(R),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(R,"\u652F\u884C")};B(P[x],{extra:P})};return(0,t.jsx)("div",{style:v,onClick:A,children:N?(0,t.jsx)("div",{children:N}):(0,t.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})},O={component:L},F={BankSelect:O}},14953:function(G,c,e){e.r(c);var _=[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing",disabled:!0}],t={renderType:"Root",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}},Switch:{title:"\u5F00\u5173\uFF08Switch\uFF09",renderType:"Switch"},SwitchBox:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE"}},TextArea:{title:"\u591A\u884C\u6587\u672C\uFF08TextArea\uFF09",renderType:"TextArea",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},Password:{title:"\u5BC6\u7801\u6846\uFF08Password\uFF09",renderType:"Password",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},Select:{title:"\u5355\u9879\u9009\u62E9\u5668\uFF08Select\uFF09",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:_,mode:"multiple"}},SelectMultiple:{title:"\u591A\u9879\u9009\u62E9\u5668\uFF08SelectMultiple\uFF09",renderType:"SelectMultiple",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:_}},Radio:{title:"\u5355\u9009\u6846\uFF08Radio\uFF09",renderType:"Radio",renderOptions:{options:_}},Checkbox:{title:"\u591A\u9009\u6846\uFF08Checkbox\uFF09",renderType:"Checkbox",renderOptions:{options:_}},Rate:{title:"\u8BC4\u5206\uFF08Rate\uFF09",renderType:"Rate"},DatePicker:{title:"\u65E5\u671F\uFF08DatePicker\uFF09",renderType:"DatePicker",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",format:"YYYY\u5E74MM\u6708DD\u65E5"}},DateRangePicker:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},Description:{title:"\u7EAF\u5C55\u793A\uFF08Description\uFF09",renderType:"Description"},Object:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF08Object\uFF09",renderType:"Object",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectRightIcon:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u7BAD\u5934\u5728\u53F3\u8FB9",renderType:"Object",renderOptions:{headerOptions:{expandIconPosition:"end"}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNotCollapse:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u4E0D\u5141\u8BB8\u6298\u53E0",renderType:"Object",renderOptions:{headerOptions:{collapsible:"icon"},panelOptions:{showArrow:!1}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNull:{title:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderType:"ObjectNull",style:{border:"1px solid #d9d9d9",padding:10,borderRadius:6},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}}}};c.default=t},97609:function(G,c,e){e.r(c),e.d(c,{builtinRenderers:function(){return O}});var _=e(68400),t=e.n(_),v=e(77525),L,O=(0,v.H)(L||(L=t()([`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
`])))},36641:function(G,c,e){e.r(c);var _=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",align:"center"},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",align:"center"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",align:"center"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",align:"center"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",align:"center"},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status",align:"center"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator",align:"center"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",align:"center"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",align:"center"},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",align:"center"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",align:"center"}];c.default=_},77095:function(G,c,e){e.r(c),e.d(c,{default:function(){return v}});var _=e(27484),t=e.n(_);function v(){for(var L=[],O=0;O<10;O++){var F=String(Math.random()).slice(2,6),I=Math.random()>.5?1:2,p=t()().format("YYYY-MM-DD HH:mm:ss");L.push({key:Math.random(),supplier_name:"".concat(F,"\u6709\u9650\u516C\u53F8"),supplier_code:F,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:p,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:I===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:I===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:p})}return L}},35719:function(G,c,e){e.r(c);var _=e(67294),t=e(85893),v={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #d9d9d9",borderRadius:6,cursor:"pointer",fontSize:14},L=function(F){var I=F.value,p=F.sPath,N=F.onChange,x=function(){var A=String(Math.random()).slice(2,6),$={bank_id:"id_".concat(A),bank_account:"111222333".concat(A),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(A),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(A,"\u652F\u884C")};N($[p],{extra:$})};return(0,t.jsx)("div",{style:v,onClick:x,children:I?(0,t.jsx)("div",{children:I}):(0,t.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})};c.default={component:L}},57864:function(G,c,e){e.r(c);var _=e(52162),t=e(85893),v=function(O){var F=O.schema,I=O.path,p=O.objectStyle;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"section-title",children:F.title}),(0,t.jsx)("div",{style:p,children:(0,t.jsx)(_.Z,{schema:F,path:I})})]})};c.default={formItem:v}},9680:function(G,c,e){e.r(c);var _=e(85893),t=function(L){var O=L.schema;return(0,_.jsx)("div",{className:"section-title",children:O.title})};c.default={formItem:t}},24534:function(G,c,e){e.r(c);var _=[{title:"Supplier Name",dataIndex:"supplier_name",width:150,fixed:"left"},{title:"Supplier Code",dataIndex:"supplier_code",width:150},{title:"Description",dataIndex:"description",valueType:function(){return{type:"long-text-modal",maxLength:20}}},{title:"Bill No",dataIndex:"bill_no",width:130},{title:"Bill Type",dataIndex:"bill_type"},{title:"Bill Date",dataIndex:"bill_date",width:120},{title:"Bill Status",dataIndex:"bill_status"},{title:"Operator",dataIndex:"operator"},{title:"Goods Name",dataIndex:"goods_name",width:130},{title:"Goods Price",dataIndex:"goods_price"},{title:"Goods Code",dataIndex:"goods_code",width:130},{title:"Goods Category",dataIndex:"goods_category"},{title:"Goods Date",dataIndex:"goods_date",width:120,fixed:"right"}];c.default=_},23786:function(G,c,e){e.r(c);var _=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u4FE1\u606F",children:[{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"}]},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u4FE1\u606F",children:[{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]}];c.default=_},6271:function(G,c,e){e.r(c);var _=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u8BC4\u7EA7(rate)",dataIndex:"rate",valueType:"rate"},{title:"\u4EE3\u7801\u5757(code)",dataIndex:"code",valueType:"code"},{title:"\u5343\u5206\u4F4D\u6570\u5B57(comma-number)",dataIndex:"comma_number",valueType:"comma-number"},{title:"\u767E\u5206\u6BD4(percent)",dataIndex:"percent",valueType:"percent"},{title:"\u957F\u6587\u6848(long-text)",dataIndex:"long_text",valueType:function(v,L){return{type:"long-text",maxLength:20,color:L%2?"#1677ff":"#000"}},width:270},{title:"\u957F\u6587\u6848(long-text-modal)",dataIndex:"long_text_modal",valueType:function(){return{type:"long-text-modal",maxLength:20,width:500}},width:270},{title:"\u72B6\u6001\u5F00\u5173(switch)",dataIndex:"switch_status",valueType:"switch"},{title:"\u6807\u7B7E(tags)",dataIndex:"tags",valueType:"tags",width:140},{title:"\u56FE\u7247(images)",dataIndex:"image_list",valueType:"images"}];c.default=_},362:function(G,c,e){e.r(c);var _=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}];c.default=_},62244:function(G,c,e){e.r(c),e.d(c,{default:function(){return v}});var _=e(27484),t=e.n(_);function v(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,O=[],F=0;F<L;F++){var I=String(Math.random()).slice(2,6),p=Math.random()>.5?1:2,N=t()().format("DD/MM/YYYY HH:mm:ss"),x="id_".concat(F);O.push({key:x,id:x,supplier_name:"".concat(I," Co.,Ltd."),supplier_code:I,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"Purchase Order":"Return Order",bill_date:N,bill_status:Math.random()>.5?"Submitted":"To be submitted",operator:Math.random()>.5?"Tom":"Lily",goods_name:p===1?"10 red roses":"Live bass",goods_code:"G".concat(Date.now()),goods_category:p===1?"Fruits & Flowers":"Aquatic Products",goods_date:N,goods_price:p===1?19.9:22.8,description:"SearchTable is a conditional search table component based on the Search + Antd Table encapsulation; It is often used for data retrieval, display and operation of background management systems."})}return O}},27164:function(G,c,e){e.r(c),e.d(c,{default:function(){return t}});function _(v,L){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,F=Math.random()*(L-v)+v;return O?Math.floor(F):F}function t(){for(var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,L=[],O=0;O<v;O++){var F="id_".concat(O);L.push({key:F,id:F,title:"".concat(String(Math.random()).slice(2,6),"\u6807\u9898"),rate:_(0,5),code:`
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      `.trim(),comma_number:Math.random()>.4?_(1e3,1e5):_(0,1e3),percent:_(0,100).toFixed(2),switch_status:Math.random()>.5,tags:Math.random()>.5?"\u5F20\u4E09":["\u674E\u56DB","\u738B\u4E94"],image_list:Math.random()>.5?"https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg":["https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif","https://raw.githubusercontent.com/Barrior/assets/main/gift.png"],deploy_status:_(0,3),long_text:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",long_text_modal:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002"})}return L}},92114:function(G,c,e){e.r(c),e.d(c,{default:function(){return v}});var _=e(27484),t=e.n(_);function v(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,O=arguments.length>1?arguments[1]:void 0,F=[],I=0;I<L;I++){var p=String(Math.random()).slice(2,6),N=Math.random()>.5?1:2,x=t()().format("YYYY-MM-DD HH:mm:ss"),B="id_".concat(I);F.push({key:B,id:B,supplier_name:"".concat(p,"\u6709\u9650\u516C\u53F8"),supplier_code:p,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:x,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:N===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:N===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:x,goods_price:N===1?19.9:22.8})}return O&&F.sort(function(A,$){var R=String(A[O.sort_field]),P=String($[O.sort_field]);return O.sort_order==="ascend"?R.localeCompare(P):P.localeCompare(R)}),F}},34200:function(G,c,e){e.r(c);var _={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_type:{title:"Bill Type",renderType:"Select",renderOptions:{options:[{label:"Purchase Order",value:1},{label:"Inbound Order",value:2},{label:"Return Order",value:3}]}},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"},goods_category:{title:"Goods Category",renderType:"Select",renderOptions:{options:[{label:"Fruits & Flowers",value:1},{label:"Aquatic Products",value:2},{label:"Grains & Oils & Seasoning",value:3}]}}}};c.default=_},68666:function(G,c,e){e.r(c);var _={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}};c.default=_},77525:function(G,c,e){e.d(c,{H:function(){return v}});var _=e(80834),t=(0,_.Z)({key:"schema-render"}),v=t.css},38959:function(G,c,e){e.r(c),e.d(c,{sleep:function(){return _}});function _(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(v){return setTimeout(v,t)})}},57558:function(G,c,e){var _=e(67294),t=(0,_.createContext)({});c.Z=t},57547:function(G,c,e){e.d(c,{Z:function(){return h}});var _=e(12444),t=e.n(_),v=e(72004),L=e.n(v),O=e(25098),F=e.n(O),I=e(31996),p=e.n(I),N=e(26037),x=e.n(N),B=e(9783),A=e.n(B),$=e(67294),R=e(28e3),P=e(85893),h=function(d){p()(a,d);var s=x()(a);function a(){var o;t()(this,a);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return o=s.call.apply(s,[this].concat(r)),A()(F()(o),"state",{hasError:!1,error:Error()}),o}return L()(a,[{key:"getFallback",value:function(){var n,r=this.state.error,u=this.props.catchErrorTips;return u==="silent"?null:(0,R.mf)(u)?u(r):(0,P.jsxs)("div",{style:{color:"red"},children:["[ErrorBoundary] ",(n=r==null?void 0:r.stack)!==null&&n!==void 0?n:String(r)]})}},{key:"render",value:function(){return this.state.hasError?this.getFallback():this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0,error:n}}}]),a}($.Component)},95399:function(G,c,e){e.d(c,{SY:function(){return v},f1:function(){return t},r6:function(){return _}});var _=function(L){return L.success="success",L.warning="warning",L.error="error",L}({}),t=[_.success,_.warning,_.error],v=function(L){return L.normal="normal",L.autoFill="autoFill",L.autoFit="autoFit",L}({})},16223:function(G,c,e){var _=e(67294),t=e(38812),v=function(O,F){var I=(0,t.Z)(O);(0,_.useEffect)(function(){I.current()},F)};c.Z=v},56432:function(G,c,e){var _=e(67294),t=e(23060),v=e(38812),L=e(37091);function O(F,I){var p,N=(0,v.Z)(F),x=(p=I==null?void 0:I.wait)!==null&&p!==void 0?p:1e3,B=(0,_.useMemo)(function(){return(0,t.Ds)(function(){return N.current.apply(N,arguments)},x)},[]);return(0,L.Z)(function(){return B.cancel()}),{run:B,cancel:B.cancel}}c.Z=O},4559:function(G,c,e){e.d(c,{Z:function(){return L}});var _=e(5574),t=e.n(_),v=e(67294);function L(){var O=(0,v.useReducer)(function(N){return N+1},0),F=t()(O,2),I=F[0],p=F[1];return{forceUpdate:p}}},38812:function(G,c,e){var _=e(67294);function t(v){var L=(0,_.useRef)(v);return L.current=v,L}c.Z=t},24317:function(G,c,e){e.d(c,{Z:function(){return t}});var _=e(67294);function t(v){var L=(0,_.useRef)(v),O=(0,_.useRef)();return L.current=(0,_.useMemo)(function(){return v},[v]),O.current||(O.current=function(){for(var F=arguments.length,I=new Array(F),p=0;p<F;p++)I[p]=arguments[p];return L.current.apply(this,I)}),O.current}},85908:function(G,c,e){var _=e(67294),t=function(L){(0,_.useEffect)(function(){return L()},[])};c.Z=t},90808:function(G,c,e){e.d(c,{Z:function(){return v}});var _=e(67294),t=e(57558);function v(){var L=(0,_.useContext)(t.Z);return L}},37091:function(G,c,e){var _=e(67294),t=e(38812),v=function(O){var F=(0,t.Z)(O);(0,_.useEffect)(function(){return function(){F.current()}},[])};c.Z=v},74072:function(G,c,e){e.r(c),e.d(c,{RendererDistributor:function(){return E.Z},RendererExecutor:function(){return K.Z},RendererIterator:function(){return l.Z},default:function(){return U},useAsyncEffect:function(){return b.Z},useCoreValue:function(){return R},useDebounceFn:function(){return T.Z},useForceUpdate:function(){return x.Z},useLatest:function(){return S.Z},useMemoizedFn:function(){return B.Z},useMounted:function(){return D.Z},useUnmount:function(){return M.Z},utils:function(){return _}});var _={};e.r(_),e.d(_,{classNames:function(){return g.Z},classNamesWithPrefix:function(){return F.Rk},cloneDeep:function(){return N.Xh},debounce:function(){return N.Ds},dropRight:function(){return N.j7},find:function(){return N.sE},get:function(){return N.U2},hasOwnProperty:function(){return F.nr},isArray:function(){return I.kJ},isBoolean:function(){return I.jn},isFunction:function(){return I.mf},isMatch:function(){return N.BD},isNil:function(){return I.kK},isNull:function(){return I.Ft},isNumber:function(){return I.hj},isObject:function(){return I.Kn},isPlainObject:function(){return I.PO},isString:function(){return I.HD},isUndefined:function(){return I.o8},logger:function(){return W.Z},mapKeys:function(){return N.Cw},omit:function(){return N.CE},pick:function(){return N.ei},positionedOffset:function(){return s},set:function(){return N.t8},templateCompiled:function(){return F.dr},toLower:function(){return N.t$},traverseSchema:function(){return V.Z},typeChecking:function(){return I.DN}});var t=e(97857),v=e.n(t),L=e(67294),O=e(57547),F=e(52038),I=e(28e3),p=e(49552),N=e(23060),x=e(4559),B=e(24317),A=function(){var H=(0,L.useRef)(!1);return(0,L.useEffect)(function(){return H.current=!1,function(){H.current=!0}},[]),H},$=A;function R(z){var H,Q=(0,L.useRef)((H=z.defaultValue)!==null&&H!==void 0?H:{}),Y=$(),te=(0,x.Z)(),re=te.forceUpdate,de=(0,F.nr)(z,"value");if(de){var Te;Q.current=(Te=z.value)!==null&&Te!==void 0?Te:{}}var ue=(0,B.Z)(function(Oe,_e){if(!Y.current){var Le,We,Ae,Ue=(0,p.P)(_e.path),Fe=v()(v()({},_e),{},{sPath:Ue}),Ke=(Le=z.watch)===null||Le===void 0?void 0:Le[Ue];(0,I.mf)(Ke)&&Ke(Oe,Fe),Q.current=Oe,de||re(),(We=z.onItemChange)===null||We===void 0||We.call(z,Fe),(Ae=z.onChange)===null||Ae===void 0||Ae.call(z,Oe,Fe)}}),ie=(0,B.Z)(function(Oe){var _e=(0,N.t8)(v()({},Q.current),Oe.path,Oe.value);ue(_e,Oe)}),De=(0,B.Z)(function(){return Q.current}),fe=(0,B.Z)(function(Oe){ue(Oe,{path:[],value:void 0})}),Pe=(0,B.Z)(function(){fe({})});return{value:Q.current,valueRef:Q,onChange:ie,getValue:De,setValue:fe,resetValue:Pe}}var P=e(95399),h=["320px","1fr"];function d(z){var H=z.layout,Q=z.layoutMinMax,Y=z.layoutColumnGap,te=z.layoutRowGap,re=Q==null?void 0:Q[0],de=Q==null?void 0:Q[1],Te=(0,L.useMemo)(function(){if(H===P.SY.normal)return"repeat(24, 1fr)";var ie=H===P.SY.autoFill?"auto-fill":"auto-fit",De=(0,p.e)(re!=null?re:h[0]),fe=(0,p.e)(de!=null?de:h[1]);return"repeat(".concat(ie,", minmax(").concat(De,", ").concat(fe,"))")},[H,re,de]),ue={display:"grid",gridTemplateColumns:Te,columnGap:Y,rowGap:te};return ue}function s(z,H){if(!z||!H)return{left:0,top:0};for(var Q=0,Y=0,te=z;te&&te!==H;)Q+=te.offsetLeft,Y+=te.offsetTop,te=te.offsetParent;return{left:Q,top:Y}}var a=e(36578);function o(z,H){var Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(z){var Y=Q.positionedElement,te=Q.xAxis,re=Q.yAxis,de=Q.behavior,Te=de===void 0?"smooth":de,ue=Q.gap,ie=ue===void 0?0:ue,De=Y||H;if(De){var fe=s(z,De);De.scrollTo({left:te===!1?void 0:fe.left+ie,top:re===!1?void 0:fe.top+ie,behavior:Te})}}}function n(z){var H=z.ref,Q=z.rootElementRef,Y=z.rootContextRef,te=z.getValue,re=z.setValue,de=z.resetValue,Te=(0,B.Z)(function(){return(0,a.Ze)((0,N.ei)(Y.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),ue=(0,B.Z)(function(Pe){var Oe,_e=(Oe=Y.current)===null||Oe===void 0?void 0:Oe.rendererStorage;if(_e&&Pe){var Le=(0,I.kJ)(Pe)?(0,p.P)(Pe):Pe;return _e[Le]}}),ie=(0,B.Z)(function(Pe){var Oe,_e=(Oe=Y.current)===null||Oe===void 0?void 0:Oe.rendererStorage;if(_e){var Le=Pe?(0,I.HD)(Pe)?[Pe]:Pe:Object.keys(_e);Le.forEach(function(We){var Ae;(Ae=_e[We])===null||Ae===void 0||Ae.setValidatorState({status:P.r6.success})})}}),De=(0,B.Z)(function(){return Q.current}),fe=(0,B.Z)(function(Pe,Oe){var _e;return o((_e=ue(Pe))===null||_e===void 0?void 0:_e.getRootElement(),De(),Oe)});(0,L.useImperativeHandle)(H,function(){return{validate:Te,resetError:ie,setValue:re,resetValue:de,getValue:te,getRootElement:De,scrollTo:fe,findItem:ue}},[])}var r=e(39214),u=e(57558),l=e(52162),m=e(97192),g=e(18474),f=e(85893),j={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:h,disabled:!1,readonly:!1,validators:{},userCtx:{}},y=(0,L.forwardRef)(function(z,H){m.Z.falsy(z.schema,"missing schema."),m.Z.falsy(z.itemLayout,"missing itemLayout.");var Q=v()(v()({},j),z),Y=(0,L.useRef)(null),te=(0,L.useRef)({}),re=R(Q),de=re.value,Te=re.onChange,ue=re.getValue,ie=re.setValue,De=re.resetValue,fe=(0,L.useMemo)(function(){return v()(v()({},r.Z),Q.locale)},[Q.locale]),Pe=(0,L.useMemo)(function(){return(0,N.Cw)(Q.renderers,function(Le,We){return We.toLowerCase()})},[Q.renderers]),Oe=d(Q),_e=te.current=v()(v()({},(0,N.ei)(Q,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:Oe,renderers:Pe,rootSchema:Q.schema,rootValue:de,locale:fe,rendererStorage:{},onChange:Te,prefixClassNames:function(){for(var We=arguments.length,Ae=new Array(We),Ue=0;Ue<We;Ue++)Ae[Ue]=arguments[Ue];return F.Rk.apply(void 0,[Q.prefixCls].concat(Ae))}});return n({ref:H,rootElementRef:Y,rootContextRef:te,getValue:ue,setValue:ie,resetValue:De}),(0,f.jsx)(u.Z.Provider,{value:_e,children:(0,f.jsx)("div",{className:(0,g.Z)(_e.prefixCls,Q.className,{"is-disabled":_e.disabled,"is-readonly":_e.readonly}),ref:Y,style:v()(v()({position:"relative"},Oe),Q.style),children:(0,f.jsx)(l.Z,{schema:_e.rootSchema,path:[]})})})}),i=(0,L.forwardRef)(function(z,H){return(0,f.jsx)(O.Z,{catchErrorTips:z.catchErrorTips,children:(0,f.jsx)(y,v()(v()({},z),{},{ref:H}))})}),C=i,b=e(16223),T=e(56432),S=e(38812),D=e(85908),M=e(37091),E=e(82535),K=e(94963),W=e(93047),V=e(44081),U=C},78484:function(G,c,e){e.r(c),c.default={localeName:"en-us",validation:{required:"${label} is required",typeError:"Data format error, expect ${type} type"}}},39214:function(G,c){c.Z={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}},82535:function(G,c,e){var _=e(97857),t=e.n(_),v=e(90808),L=e(97192),O=e(8465),F=e(94963),I=e(85893),p=function(x){var B=(0,v.Z)(),A=x.schema;L.Z.falsy(A,"schema is required in RendererDistributor Props.");var $=(0,O.j)(B.renderers,A.renderType);return $?(0,I.jsx)(F.Z,t()(t()({},x),{},{renderer:$})):null};c.Z=p},94963:function(G,c,e){var _=e(15009),t=e.n(_),v=e(97857),L=e.n(v),O=e(99289),F=e.n(O),I=e(5574),p=e.n(I),N=e(67294),x=e(57547),B=e(95399),A=e(56432),$=e(24317),R=e(90808),P=e(18474),h=e(49552),d=e(23060),s=e(36578),a=e(85893),o=function(r){var u=r.schema,l=r.path,m=r.renderer,g=r.gridColumn,f=(0,R.Z)(),j=(0,N.useState)({status:B.r6.success}),y=p()(j,2),i=y[0],C=y[1],b=(0,h.P)(l),T=(0,N.useRef)(null);f.rendererStorage[b]=(0,N.useMemo)(function(){return{setValidatorState:function(z){return C(z)},getRootElement:function(){return T.current}}},[C]);var S=(0,A.Z)(function(){var U=F()(t()().mark(function z(H){var Q;return t()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,(0,s.Q7)({schema:u,rootValue:f.rootValue,userCtx:f.userCtx,path:l,value:H,locale:f.locale,globalValidators:f.validators,rendererValidator:m.validator,rendererValidatorParams:E});case 2:Q=te.sent,C(L()({},Q));case 4:case"end":return te.stop()}},z)}));return function(z){return U.apply(this,arguments)}}(),{wait:300}),D=S.run,M=(0,$.Z)(function(){var U=F()(t()().mark(function z(H){var Q,Y=arguments;return t()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:Q=Y.length>1&&Y[1]!==void 0?Y[1]:{},f.onChange({path:l,value:H,extra:Q.extra}),Q.triggerValidator!==!1?D(H):C({status:B.r6.success});case 3:case"end":return re.stop()}},z)}));return function(z){return U.apply(this,arguments)}}()),E=(0,s.cy)(L()({schema:u,path:l,value:(0,d.U2)(f.rootValue,l)},(0,d.ei)(f,"disabled","readonly","rootValue","userCtx","locale"))),K=L()(L()({},E),{},{validator:i,objectStyle:f.objectStyle,onChange:M}),W=K,V=function(){var z=L()(L()({},(0,d.ei)(K,"schema","required","disabled","readonly","validator","locale","userCtx")),{},{prefixClassNames:f.prefixClassNames});if(K.readonly){if(m.readonlyFormItem)return(0,N.createElement)(m.readonlyFormItem,W);if(m.readonlyComponent)return(0,N.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(m.readonlyComponent,K)}))}if(K.disabled){if(m.disabledFormItem)return(0,N.createElement)(m.disabledFormItem,W);if(m.disabledComponent)return(0,N.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(m.disabledComponent,K)}))}if(m.formItem)return(0,N.createElement)(m.formItem,W);if(m.component)return(0,N.createElement)(f.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(m.component,K)}))};return(0,a.jsx)("div",{ref:T,className:(0,P.Z)(f.prefixClassNames("form-item","item-".concat(u.renderType)),u.className,{"is-required":K.required,"is-disabled":K.disabled,"is-readonly":K.readonly}),style:L()({gridColumn:g},u.style),children:(0,a.jsx)(x.Z,{catchErrorTips:f.catchErrorTips,children:V()})})};c.Z=o},52162:function(G,c,e){var _=e(97857),t=e.n(_),v=e(19632),L=e.n(v),O=e(67294),F=e(95399),I=e(90808),p=e(28e3),N=e(49552),x=e(27597),B=e(23060),A=e(82535),$=e(85893),R=function(h){var d=h.schema,s=h.path,a=(0,I.Z)(),o=a.rootValue,n=a.userCtx,r=s.length?(0,B.U2)(o,s):o,u=1,l=Object.keys(d.properties).map(function(m){var g=d.properties[m],f=(0,x.A)({statement:g.hidden,parentValue:r,rootValue:o,userCtx:n});if(f)return null;var j=[].concat(L()(s),[m]),y=(0,N.P)(j),i;if(a.layout===F.SY.normal){var C=u,b=25;!(0,p.hj)(g.span)&&!(0,p.hj)(g.spanStart)?C=u=1:(g.spanStart&&(C=g.spanStart,u=C),g.span&&(b=C+g.span,u=b)),i="".concat(C,"/").concat(b)}else(0,p.hj)(g.spanStart)&&(i="".concat(g.spanStart,"/auto"));var T={schema:g,path:j,gridColumn:i};return(0,$.jsx)(A.Z,t()({},T),y)});return(0,$.jsx)(O.Fragment,{children:l})};c.Z=R},97192:function(G,c){function e(v,L){v&&t(L)}function _(v,L){!v&&t(L)}function t(v){throw new Error("[AssertionError]: ".concat(v!=null?v:"Failed"))}c.Z={truthy:e,falsy:_,fail:t}},52038:function(G,c,e){e.d(c,{RI:function(){return O},Rk:function(){return I},dr:function(){return F},nr:function(){return p}});var _=e(28e3),t=e(18474),v=e(93047);function L(){return"".concat(Date.now()).concat(Math.random().toString().substring(2,5)).replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1-$2-$3-$4")}function O(x){if(!(0,_.HD)(x))return null;try{return new RegExp(x)}catch(B){v.Z.warn(B)}return null}function F(x){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return x?x.replace(/\$\{((\s|.)+?)?\}/g,function(){var A,$=(A=arguments.length<=1?void 0:arguments[1])===null||A===void 0?void 0:A.trim();if(!$)return"";var R=B[$];return R!=null?R:""}):""}function I(x){for(var B=arguments.length,A=new Array(B>1?B-1:0),$=1;$<B;$++)A[$-1]=arguments[$];if(!A.length)return"";var R=t.Z.apply(void 0,A).trim();if(!R)return"";var P=R.split(" ").map(function(h){return"".concat(x,"-").concat(h)});return P.join(" ")}function p(x,B){return Object.prototype.hasOwnProperty.call(x,B)}function N(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(B){return setTimeout(B,x)})}},28e3:function(G,c,e){e.d(c,{DN:function(){return O},Ft:function(){return R},HD:function(){return x},Kn:function(){return p},PO:function(){return N},hj:function(){return B},jn:function(){return A},kJ:function(){return I},kK:function(){return P},mf:function(){return F},o8:function(){return $}});var _=e(52677),t=e.n(_),v=Function.prototype.toString,L=v.call(Object);function O(h,d){return Object.prototype.toString.call(h)===d}function F(h){return O(h,"[object Function]")||O(h,"[object AsyncFunction]")}function I(h){return Array.isArray(h)}function p(h){var d=t()(h);return h!==null&&(d==="object"||d==="function")}function N(h){if(!O(h,"[object Object]"))return!1;var d=Object.getPrototypeOf(h);if(d===null)return!0;var s=Object.hasOwnProperty.call(d,"constructor")&&d.constructor;return typeof s=="function"&&s instanceof s&&v.call(s)===L}function x(h){return typeof h=="string"}function B(h){return typeof h=="number"}function A(h){return typeof h=="boolean"}function $(h){return h===void 0}function R(h){return h===null}function P(h){return $(h)||R(h)}},18474:function(G,c,e){var _=e(52677),t=e.n(_),v={}.hasOwnProperty;function L(){for(var O=[],F=0;F<arguments.length;F++){var I=arguments[F];if(I){var p=t()(I);if(p==="string"||p==="number")O.push(I);else if(Array.isArray(I)){if(I.length){var N=L.apply(null,I);N&&O.push(N)}}else if(p==="object"){if(I.toString!==Object.prototype.toString&&!I.toString.toString().includes("[native code]")){O.push(I.toString());continue}for(var x in I)v.call(I,x)&&I[x]&&O.push(x)}}}return O.join(" ")}c.Z=L},93047:function(G,c){var e={warn:function(){var t;(t=console).warn.apply(t,arguments)}};c.Z=e},49552:function(G,c,e){e.d(c,{P:function(){return t},e:function(){return v}});var _=e(28e3);function t(L){return L.join(".")}function v(L){return(0,_.hj)(L)?"".concat(String(L),"px"):L}},8465:function(G,c,e){e.d(c,{j:function(){return _}});function _(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1?arguments[1]:void 0;if(v){var L=t[v.toLowerCase()];if(L&&(L.formItem||L.component))return L}}},27597:function(G,c,e){e.d(c,{A:function(){return L},o:function(){return O}});var _=e(23060),t=e(28e3),v=e(93047);function L(F){var I=F.statement,p=F.parentValue,N=p===void 0?{}:p,x=F.rootValue,B=x===void 0?{}:x,A=F.userCtx,$=A===void 0?{}:A;if((0,t.jn)(I))return I;if((0,t.HD)(I))try{var R=new Function("$","$root","$userCtx","return ".concat(I));return!!R(N,B,$)}catch(P){v.Z.warn(P)}return!1}function O(F){var I=F.statement,p=F.path,N=F.rootValue,x=F.userCtx,B=(0,_.j7)(p);return L({statement:I,parentValue:B.length?(0,_.U2)(N,B):N,rootValue:N,userCtx:x})}},23060:function(G,c,e){e.d(c,{BD:function(){return R},CE:function(){return B},Cw:function(){return N},Ds:function(){return a},U2:function(){return P},Xh:function(){return p},ei:function(){return x},j7:function(){return A},sE:function(){return $},t$:function(){return o},t8:function(){return s}});var _=e(97857),t=e.n(_),v=e(52677),L=e.n(v),O=e(97192),F=e(52038),I=e(28e3);function p(n){var r,u,l;if(Array.isArray(n)){for(u=Array(r=n.length);r--;)u[r]=(l=n[r])&&L()(l)==="object"?p(l):l;return u}if(Object.prototype.toString.call(n)==="[object Object]"){u={};for(r in n)r==="__proto__"?Object.defineProperty(u,r,{value:p(n[r]),configurable:!0,enumerable:!0,writable:!0}):u[r]=(l=n[r])&&L()(l)==="object"?p(l):l;return u}return n}function N(n,r){if(!(0,I.PO)(n)||!(0,I.mf)(r))return{};var u=Object.keys(n),l={};return u.map(function(m){var g=n[m],f=r(g,m);l[f]=g}),l}function x(n){var r={};if(!(0,I.PO)(n))return r;for(var u=arguments.length,l=new Array(u>1?u-1:0),m=1;m<u;m++)l[m-1]=arguments[m];return l.map(function(g){(0,F.nr)(n,g)&&(r[g]=n[g])}),r}function B(n){if(!(0,I.PO)(n))return{};for(var r=t()({},n),u=arguments.length,l=new Array(u>1?u-1:0),m=1;m<u;m++)l[m-1]=arguments[m];return l.map(function(g){(0,F.nr)(n,g)&&delete r[g]}),r}function A(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,I.kJ)(n)?n.slice(0,r>0?r*-1:n.length):[]}function $(n,r){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if((0,I.kJ)(n))for(var l=n.length,m=u;m<l;m++){var g=n[m];if((0,I.mf)(r)){if(r(g))return g}else if((0,I.PO)(r)&&R(g,r))return g}}function R(n,r){if(!(0,I.PO)(n))return!0;for(var u=Object.keys(r),l=0;l<u.length;l++){var m=u[l];if(!(0,F.nr)(n,m)||r[m]!==n[m])return!1}return!0}function P(n,r){if(!(!(0,I.PO)(n)||!(0,I.kJ)(r))){for(var u=n,l=0;l<r.length;l++){var m=r[l];if(u)u=u[m];else return}return u}}var h=/^(?:0|[1-9]\d*)$/;function d(n){return(0,I.hj)(n)||h.test(n)}function s(n,r,u){if(!(0,I.PO)(n))return n;for(var l=r.length,m=l-1,g=-1,f=n;f!==null&&++g<l;){var j=r[g],y=u;if(g!==m){var i=f[j];y=(0,I.Kn)(i)?i:d(r[g+1])?[]:{}}f[j]=y,f=f[j]}return n}function a(n,r){(0,I.mf)(n)||O.Z.fail("Expected a function");var u;function l(){for(var m=this,g=arguments.length,f=new Array(g),j=0;j<g;j++)f[j]=arguments[j];clearTimeout(u),u=setTimeout(function(){return n.apply(m,f)},r)}return l.cancel=function(){clearTimeout(u)},l}function o(n){return(0,I.HD)(n)?n.toLowerCase():""}},44081:function(G,c,e){e.d(c,{Z:function(){return N}});var _=e(19632),t=e.n(_),v=e(97857),L=e.n(v),O=e(52677),F=e.n(O),I=e(23060);function p(x){var B=x.properties;return!B||F()(B)!=="object"||Array.isArray(B)}function N(x,B,A){var $=L()({mapKey:"renderType",ignoreCase:!0,clone:!0,initialState:{},initialStore:{}},A),R=$.clone?(0,I.Xh)(x):x;B=(0,I.Cw)(B,function(h,d){return d.toLowerCase()});var P=function h(d){var s=d.schema,a=d.path,o=d.state,n=d.store;p(s)||Object.keys(s.properties).forEach(function(r){var u,l,m,g,f,j,y,i,C,b=s.properties[r],T=[].concat(t()(a),[r]),S=(0,I.Xh)(o),D={schema:b,parentSchema:s,path:T,field:r,state:S,store:n},M=function(Q){h(L()(L()({schema:b,path:T,state:S},Q),{},{store:n}))},E=(u=B.$$)!==null&&u!==void 0?u:{},K=(l=B.$$object)!==null&&l!==void 0?l:{};(m=E.enter)===null||m===void 0||m.call(E,L()(L()({},D),{},{traverse:M}));var W=(g=b[$.mapKey])!==null&&g!==void 0?g:"";W=$.ignoreCase?(0,I.t$)(W):W;var V=(0,I.t$)(W).startsWith("object");if(V){var U;(U=K.enter)===null||U===void 0||U.call(K,L()(L()({},D),{},{traverse:M}))}var z=(f=B[W])!==null&&f!==void 0?f:{};(j=z.enter)===null||j===void 0||j.call(z,L()(L()({},D),{},{traverse:M})),(y=E.exit)===null||y===void 0||y.call(E,D),V&&((i=K.exit)===null||i===void 0||i.call(K,D)),(C=z.exit)===null||C===void 0||C.call(z,D)})};return P({schema:R,path:[],state:$.initialState,store:$.initialStore}),R}},36578:function(G,c,e){e.d(c,{cy:function(){return S},Q7:function(){return i},Ze:function(){return j}});var _=e(97857),t=e.n(_),v=e(15009),L=e.n(v),O=e(19632),F=e.n(O),I=e(99289),p=e.n(I),N=e(95399),x=e(23060),B=e(52038),A=e(28e3),$=e(49552),R=e(8465),P=e(12444),h=e.n(P),d=e(72004),s=e.n(d),a=e(9783),o=e.n(a),n=function(){function D(M){h()(this,D),o()(this,"value",void 0),o()(this,"rules",void 0),o()(this,"locale",void 0),o()(this,"globalValidators",void 0),o()(this,"globalValidatorParams",void 0),Object.assign(this,M)}return s()(D,[{key:"setValue",value:function(E){this.value=E}},{key:"validate",value:function(){var M=p()(L()().mark(function K(){return L()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,this.validateRules(this.rules);case 2:return V.abrupt("return",V.sent);case 3:case"end":return V.stop()}},K,this)}));function E(){return M.apply(this,arguments)}return E}()},{key:"validateRules",value:function(){var M=p()(L()().mark(function K(W){var V,U,z,H;return L()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:Y.prev=0,V=l(W),U=0,z=V;case 3:if(!(U<z.length)){Y.next=12;break}if(H=z[U],!(0,A.PO)(H)){Y.next=9;break}return this.validateRuleItem(H),Y.next=9,this.validateGlobal(H);case 9:U++,Y.next=3;break;case 12:Y.next=19;break;case 14:if(Y.prev=14,Y.t0=Y.catch(0),!D.isValidationError(Y.t0)){Y.next=18;break}return Y.abrupt("return",(0,x.ei)(Y.t0,"status","message","extra"));case 18:return Y.abrupt("return",{status:N.r6.error,message:Y.t0!==null&&Y.t0!==void 0&&Y.t0.message?Y.t0.message:"CatchError"});case 19:return Y.abrupt("return",{status:N.r6.success});case 20:case"end":return Y.stop()}},K,this,[[0,14]])}));function E(K){return M.apply(this,arguments)}return E}()},{key:"validateRuleItem",value:function(E){var K=(0,A.jn)(E.required)?E.required:void 0,W=(0,A.hj)(E.len)?E.len:void 0,V=(0,A.hj)(E.min)?E.min:void 0,U=(0,A.hj)(E.max)?E.max:void 0,z=D.fail,H=this.value,Q=this.locale;if(K&&[void 0,null].includes(H)&&D.fail(E.message),(E.type==="string"&&!(0,A.HD)(H)||E.type==="number"&&!(0,A.hj)(H)||E.type==="boolean"&&!(0,A.jn)(H)||E.type==="object"&&!(0,A.PO)(H)||E.type==="array"&&!(0,A.kJ)(H))&&z((0,B.dr)(Q.typeError,{type:E.type})),(0,A.HD)(H)){var Y=(0,B.RI)(E.pattern);(K&&H===""||W&&H.length!==W||V&&H.length<V||U&&H.length>U||Y&&!Y.test(H))&&z(E.message)}(0,A.hj)(H)&&(W&&H!==W||V&&H<V||U&&H>U)&&z(E.message),(0,A.kJ)(H)&&(K&&H.length===0||W&&H.length!==W||V&&H.length<V||U&&H.length>U)&&z(E.message)}},{key:"validateGlobal",value:function(){var M=p()(L()().mark(function K(W){var V,U,z,H,Q,Y,te,re,de;return L()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(V=W.validator,U=this.globalValidators,z=this.globalValidatorParams,!(!V||!U||!z)){ue.next=4;break}return ue.abrupt("return");case 4:if(H=U[V],Q=function(De){De.status!==N.r6.success&&D.fail(De)},!u(H)){ue.next=11;break}return ue.next=9,this.validateRules(H.filter(function(ie){return!ie.validator}));case 9:Y=ue.sent,Q(Y);case 11:if(!(0,A.mf)(H)){ue.next=21;break}return ue.next=14,H(t()(t()({},z),{},{value:this.value}));case 14:if(te=ue.sent,!u(te)){ue.next=20;break}return ue.next=18,this.validateRules(te.filter(function(ie){return!ie.validator}));case 18:re=ue.sent,Q(re);case 20:r(te)&&Q({status:te.status,message:(de=W.message)!==null&&de!==void 0?de:te.message,extra:te.extra});case 21:case"end":return ue.stop()}},K,this)}));function E(K){return M.apply(this,arguments)}return E}()}],[{key:"isValidationError",value:function(E){return(0,A.PO)(E)&&(0,B.nr)(E,D.failUK)}},{key:"fail",value:function(E){var K=o()({},D.failUK,!0);throw(0,A.HD)(E)?K.message=E:(0,A.PO)(E)&&Object.assign(K,(0,x.ei)(E,"status","message","extra")),K.status||(K.status=N.r6.error),K}}]),D}();o()(n,"failUK",typeof Symbol=="function"?Symbol("SRV"):"$$SRV");function r(D){return N.f1.includes(D==null?void 0:D.status)}function u(D){return(0,A.kJ)(D)&&!!D.length}function l(D){var M=[];return(0,A.PO)(D)?M.push(D):(0,A.kJ)(D)&&M.push.apply(M,F()(D)),M}function m(D){var M=new n(D);return M.validate()}var g=e(27597),f=e(44081);function j(D){return y.apply(this,arguments)}function y(){return y=p()(L()().mark(function D(M){var E,K,W,V,U,z,H,Q,Y,te,re,de,Te;return L()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return E=M.rootSchema,K=M.rootValue,W=M.disabled,V=M.readonly,U=M.locale,z=M.renderers,H=M.rendererStorage,Q=M.validators,Y=M.userCtx,te=[],(0,f.Z)(E,{$$:{enter:function(fe){var Pe=fe.schema,Oe=fe.path,_e=(0,g.o)({statement:Pe.hidden,rootValue:K,path:Oe,userCtx:Y});if(!_e){var Le=(0,R.j)(z,Pe.renderType);if(Le){var We=function(){var Ae=p()(L()().mark(function Ue(){var Fe,Ke,Ze,Ne,Ge,Ye;return L()().wrap(function(Be){for(;;)switch(Be.prev=Be.next){case 0:return Fe=(0,x.U2)(K,Oe),Ke=S({schema:Pe,value:Fe,path:Oe,disabled:W,readonly:V,rootValue:K,locale:U,userCtx:Y}),Be.prev=2,Be.next=5,i({schema:Pe,rootValue:K,userCtx:Y,path:Oe,locale:U,value:Fe,globalValidators:Q,rendererValidator:Le.validator,rendererValidatorParams:Ke});case 5:if(Ze=Be.sent,Ne=Ze.status,Ge=Ze.message,Ye=Ze.extra,Ne===N.r6.success){Be.next=11;break}return Be.abrupt("return",{path:Oe,value:Fe,status:Ne,message:Ge,extra:Ye});case 11:Be.next=16;break;case 13:return Be.prev=13,Be.t0=Be.catch(2),Be.abrupt("return",{path:Oe,value:Fe,status:N.r6.error,message:"[CatchError]: ".concat(Be.t0===null||Be.t0===void 0?void 0:Be.t0.message)});case 16:case"end":return Be.stop()}},Ue,null,[[2,13]])}));return function(){return Ae.apply(this,arguments)}}();te.push(We())}}}},$$Object:{enter:function(fe){var Pe=fe.traverse;Pe()}}},{clone:!1}),re=[],de=[],ie.next=7,Promise.all(te).then(function(De){return De.filter(function(fe){return(fe==null?void 0:fe.status)===N.r6.error?re.push(fe):(fe==null?void 0:fe.status)===N.r6.warning&&de.push(fe),!!fe})});case 7:return Te=ie.sent,Te.forEach(function(De){var fe=De.status,Pe=De.path,Oe=De.message,_e=De.extra,Le=H[(0,$.P)(Pe)];Le==null||Le.setValidatorState({status:fe,message:Oe,extra:_e})}),ie.abrupt("return",{hasError:!!re.length,hasWarning:!!de.length,errorList:re,warningList:de});case 10:case"end":return ie.stop()}},D)})),y.apply(this,arguments)}function i(D){return C.apply(this,arguments)}function C(){return C=p()(L()().mark(function D(M){var E,K,W,V,U,z,H,Q,Y,te,re,de,Te,ue,ie;return L()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:if(E=M.schema,K=M.rootValue,W=M.userCtx,V=M.path,U=M.locale,z=M.value,H=M.globalValidators,Q=M.rendererValidator,Y=M.rendererValidatorParams,te=b({schema:E,rootValue:K,path:V,locale:U,userCtx:W}),re={value:z,globalValidators:H,globalValidatorParams:Y,locale:U.validation},!u(te)){fe.next=9;break}return fe.next=6,m(t()(t()({},re),{},{rules:te}));case 6:if(de=fe.sent,de.status===N.r6.success){fe.next=9;break}return fe.abrupt("return",de);case 9:if(!u(Q)){fe.next=14;break}return fe.next=12,m(t()(t()({},re),{},{rules:Q}));case 12:return Te=fe.sent,fe.abrupt("return",Te);case 14:if(!(0,A.mf)(Q)){fe.next=25;break}return fe.next=17,Q(t()(t()({},Y),{},{value:z}));case 17:if(ue=fe.sent,!u(ue)){fe.next=23;break}return fe.next=21,m(t()(t()({},re),{},{rules:ue}));case 21:return ie=fe.sent,fe.abrupt("return",ie);case 23:if(!r(ue)){fe.next=25;break}return fe.abrupt("return",{status:ue.status,message:ue.message,extra:ue.extra});case 25:return fe.abrupt("return",{status:N.r6.success});case 26:case"end":return fe.stop()}},D)})),C.apply(this,arguments)}function b(D){var M=D.schema,E=D.rootValue,K=D.path,W=D.locale,V=D.userCtx,U=l(M.rules),z=(0,g.o)({statement:M.required,rootValue:E,path:K,userCtx:V});return z&&!(0,x.sE)(M.rules,{required:!0})&&U.unshift({required:!0,message:(0,B.dr)(W.validation.required,{label:M.title})}),U}function T(D){var M=D.schema,E=D.rootValue,K=D.path,W=D.userCtx,V=(0,g.o)({statement:M.required,rootValue:E,path:K,userCtx:W});return!!(V||(0,x.sE)(l(M.rules),{required:!0}))}function S(D){var M=D.schema,E=D.value,K=D.path,W=D.disabled,V=D.readonly,U=D.rootValue,z=D.locale,H=D.userCtx,Q=!!W,Y=!!V;Q||(Q=(0,g.o)({statement:M.disabled,rootValue:U,path:K,userCtx:H})),Y||(Y=(0,g.o)({statement:M.readonly,rootValue:U,path:K,userCtx:H}));var te=T({schema:M,path:K,rootValue:U,userCtx:H});return{schema:M,value:E,path:F()(K),sPath:(0,$.P)(K),required:te,disabled:Q,readonly:Y,rootValue:U,locale:z,userCtx:H}}},21222:function(G,c,e){e.d(c,{H:function(){return L}});var _=e(80834),t=Math.random().toString(36).substring(7).replace(/\d/g,"x"),v=(0,_.Z)({key:"schema-render-".concat(t)}),L=v.css},74311:function(G,c,e){e.r(c),e.d(c,{cij:function(){return H.H},default:function(){return he}});var _=e(97857),t=e.n(_),v=e(23060),L=e(18474),O=e(74072),F=e(52038),I=e(67294),p=e(13769),N=e.n(p),x=e(9783),B=e.n(x),A=e(28e3),$=e(14726),R=e(42075),P={submit:"submit",reset:"reset"},h={normal:"normal",formItem:"formItem"},d={prefixCls:"schema-render",itemLayout:"horizontal",readonlyPlaceholder:"-",labelWidth:100,labelGap:15,layoutColumnGap:10,layoutRowGap:15,actions:[P.submit,P.reset],actionsRenderMode:h.normal,disableFormOnActionLoading:!0,validateFormOnSubmit:!0},s=B()(B()({},P.submit,!1),P.reset,!1),a="__FORM_RENDER_ACTIONS__",o="YYYY-MM-DD",n="YYYY-MM-DD HH:mm:ss",r=(0,I.createContext)({}),u=r;function l(){var ne=(0,I.useContext)(u);return ne}var m=e(85893),g=["disabled"],f=B()(B()({},P.submit,function(ne){var Z,J=ne.loading,w=ne.locale,X=ne.disabled;return(0,m.jsx)($.ZP,{type:"primary",htmlType:"submit",disabled:J.submit?!1:X||J.reset,loading:J.submit,children:w==null||(Z=w.FormRender)===null||Z===void 0?void 0:Z.submit})}),P.reset,function(ne){var Z,J=ne.handleReset,w=ne.loading,X=ne.locale,q=ne.disabled;return(0,m.jsx)($.ZP,{htmlType:"button",disabled:w.reset?!1:q||w.submit,loading:w.reset,onClick:J,children:X==null||(Z=X.FormRender)===null||Z===void 0?void 0:Z.reset})}),j=function(Z){var J=Z.disabled,w=N()(Z,g),X=l(),q=X.actions,le=X.actionsLoading,ce=X.registerActions,me=X.handleReset,Ie=X.handleSubmit,Ee=X.layoutColumnGap,Ce=X.locale,be=A.kJ(q)&&q.length>0;if(!be)return null;var Re=t()(t()({},f),ce);return(0,m.jsx)(R.Z,t()(t()({size:Ee},w),{},{children:q.map(function(Me){var Se={locale:Ce,disabled:J,loading:le};Me===P.submit?Se.handleSubmit=Ie:Me===P.reset&&(Se.handleReset=me);var je=Re[Me];return je?(0,m.jsx)(I.Fragment,{children:je==null?void 0:je(Se)},Me):null})}))},y=j,i=e(15009),C=e.n(i),b=e(99289),T=e.n(b),S=e(5574),D=e.n(S),M=e(24317),E=e(93047);function K(ne){var Z=ne.props,J=ne.coreRef,w=(0,I.useState)(s),X=D()(w,2),q=X[0],le=X[1],ce=(0,M.Z)(function(){var Ce=T()(C()().mark(function be(Re,Me){return C()().wrap(function(je){for(;;)switch(je.prev=je.next){case 0:return le(function($e){return t()(t()({},$e),{},B()({},Re,!0))}),je.next=3,Me().catch(function($e){E.Z.warn($e)});case 3:le(function($e){return t()(t()({},$e),{},B()({},Re,!1))});case 4:case"end":return je.stop()}},be)}));return function(be,Re){return Ce.apply(this,arguments)}}()),me=(0,M.Z)(function(){ce(P.submit,T()(C()().mark(function Ce(){var be,Re;return C()().wrap(function(Se){for(;;)switch(Se.prev=Se.next){case 0:if(J.current){Se.next=2;break}return Se.abrupt("return");case 2:if(!Z.validateFormOnSubmit){Se.next=8;break}return Se.next=5,J.current.validate();case 5:if(Re=Se.sent,!(Re.hasError||Re.hasWarning)){Se.next=8;break}return Se.abrupt("return");case 8:return Se.next=10,(be=Z.onSubmit)===null||be===void 0?void 0:be.call(Z,J.current.getValue());case 10:case"end":return Se.stop()}},Ce)})))}),Ie=(0,M.Z)(function(Ce){Ce.preventDefault(),Ce.stopPropagation(),me()}),Ee=(0,M.Z)(function(){ce(P.reset,T()(C()().mark(function Ce(){var be,Re,Me,Se;return C()().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:if(J.current){$e.next=2;break}return $e.abrupt("return");case 2:return $e.next=4,(be=Z.onBeforeReset)===null||be===void 0?void 0:be.call(Z,J.current.getValue());case 4:return Me=$e.sent,Se=t()({},Me),J.current.setValue(Se),J.current.resetError(),$e.next=10,(Re=Z.onReset)===null||Re===void 0?void 0:Re.call(Z,Se);case 10:case"end":return $e.stop()}},Ce)})))});return{handleFormSubmit:Ie,handleSubmit:me,handleReset:Ee,actionsLoading:q,isLoading:q.submit||q.reset}}var W=e(25035),V=e(55241),U=e(68400),z=e.n(U),H=e(21222),Q,Y,te,re,de,Te,ue,ie,De,fe,Pe=(0,H.H)(Q||(Q=z()([`
  display: flex;
  align-items: center;
`]))),Oe=(0,H.H)(Y||(Y=z()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),_e=(0,H.H)(te||(te=z()([`
  word-break: break-all;
`]))),Le=(0,H.H)(re||(re=z()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),We=(0,H.H)(de||(de=z()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),Ae=(0,H.H)(Te||(Te=z()([`
  flex-grow: 1;
`]))),Ue=(0,H.H)(ue||(ue=z()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),Fe=(0,H.H)(ie||(ie=z()([`
  margin-top: 6px;
  color: var(--schema-render-color-description);
`]))),Ke=(0,H.H)(De||(De=z()([`
  margin-top: 6px;
  color: var(--schema-render-color-error);
`]))),Ze=(0,H.H)(fe||(fe=z()([`
  color: var(--schema-render-color-warning);
`]))),Ne=L.Z,Ge=function(Z){var J=Z.schema,w=Z.required,X=Z.prefixClassNames,q=Z.labelColon,le=!!q;return(0,m.jsxs)(m.Fragment,{children:[w&&(0,m.jsx)("span",{className:Ne(X("item-mark"),Le),children:"*"}),(0,m.jsx)("span",{className:Ne(X("item-title"),_e),children:J.title}),!!J.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:J.titleDescription,children:(0,m.jsx)(W.Z,{className:Ne(X("item-title-tooltip"),We),style:{marginRight:le?4:void 0}})}),le&&(0,m.jsx)("span",{className:Ne(X("item-colon")),children:q})]})},Ye=function(Z){var J=Z.body,w=Z.schema,X=Z.validator,q=Z.required,le=Z.disabled,ce=Z.readonly,me=Z.userCtx,Ie=Z.prefixClassNames,Ee=l(),Ce=Ee.labelWidth,be=Ee.labelColon,Re=Ee.labelGap,Me=Ee.labelRender,Se=Ee.locale,je=Me||Ge,$e={schema:w,required:q,disabled:le,readonly:ce,userCtx:me,prefixClassNames:Ie,labelWidth:Ce,labelColon:be,labelGap:Re,locale:Se};return(0,m.jsxs)("div",{className:Ne(Ie("item-layout-horizontal")),children:[(0,m.jsxs)("div",{className:Ne(Ie("item-main"),Pe),children:[(0,m.jsx)("div",{className:Ne(Ie("item-header"),Oe),style:{flexBasis:Ce,marginRight:Re},children:je($e)}),(0,m.jsx)("div",{className:Ne(Ie("item-body"),Ae),children:J})]}),(0,m.jsxs)("div",{className:Ne(Ie("item-footer"),Ue),style:{paddingLeft:A.hj(Ce)?Ce+Re:0},children:[X.status==="error"&&!!X.message&&(0,m.jsx)("div",{className:Ne(Ie("item-error-msg"),Ke),children:X.message}),X.status==="warning"&&!!X.message&&(0,m.jsx)("div",{className:Ne(Ie("item-warning-msg"),Ze),children:X.message}),!!w.description&&(0,m.jsx)("div",{className:Ne(Ie("item-description"),Fe),children:w.description})]})]})},Je=Ye,Be,He,hn,nn,vn,tn,In,en,An=(0,H.H)(Be||(Be=z()([`
  margin-bottom: 8px;
`]))),an=(0,H.H)(He||(He=z()([`
  word-break: break-all;
`]))),jn=(0,H.H)(hn||(hn=z()([`
  margin-right: 4px;
  color: var(--schema-render-color-required-mark);
  position: relative;
  top: 2px;
`]))),Bn=(0,H.H)(nn||(nn=z()([`
  margin-left: 4px;
`]))),$n=(0,H.H)(vn||(vn=z()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),Kn=(0,H.H)(tn||(tn=z()([`
  margin-top: 8px;
  color: var(--schema-render-color-description);
`]))),Nn=(0,H.H)(In||(In=z()([`
  margin-top: 8px;
  color: var(--schema-render-color-error);
`]))),Wn=(0,H.H)(en||(en=z()([`
  color: var(--schema-render-color-warning);
`]))),Qe=L.Z,Un=function(Z){var J=Z.schema,w=Z.required,X=Z.prefixClassNames,q=Z.labelColon,le=!!q;return(0,m.jsxs)(m.Fragment,{children:[w&&(0,m.jsx)("span",{className:Qe(X("item-mark"),jn),children:"*"}),(0,m.jsx)("span",{className:Qe(X("item-title"),an),children:J.title}),!!J.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:J.titleDescription,children:(0,m.jsx)(W.Z,{className:Qe(X("item-title-tooltip"),Bn),style:{marginRight:le?4:void 0}})}),le&&(0,m.jsx)("span",{className:Qe(X("item-colon")),children:q})]})},Xe=function(Z){var J=Z.body,w=Z.schema,X=Z.validator,q=Z.required,le=Z.disabled,ce=Z.readonly,me=Z.userCtx,Ie=Z.prefixClassNames,Ee=l(),Ce=Ee.labelWidth,be=Ee.labelColon,Re=Ee.labelGap,Me=Ee.labelRender,Se=Ee.locale,je=Me||Un,$e={schema:w,required:q,disabled:le,readonly:ce,userCtx:me,prefixClassNames:Ie,labelWidth:Ce,labelColon:be,labelGap:Re,locale:Se};return(0,m.jsxs)("div",{className:Ie("item-layout-vertical"),children:[(0,m.jsx)("div",{className:Qe(Ie("item-header"),An),children:je($e)}),(0,m.jsx)("div",{className:Ie("item-body"),children:J}),(0,m.jsxs)("div",{className:Qe(Ie("item-footer"),$n),children:[X.status==="error"&&!!X.message&&(0,m.jsx)("div",{className:Qe(Ie("item-error-msg"),Nn),children:X.message}),X.status==="warning"&&!!X.message&&(0,m.jsx)("div",{className:Qe(Ie("item-warning-msg"),Wn),children:X.message}),!!w.description&&(0,m.jsx)("div",{className:Qe(Ie("item-description"),Kn),children:w.description})]})]})},we=Xe;function fn(ne){var Z=ne.itemLayout,J=(0,I.useMemo)(function(){return!Z||Z==="horizontal"?Je:Z==="vertical"?we:Z},[Z]);return J}var rn=A.kJ,dn=A.kK,yn=A.Kn;function xn(ne,Z){var J="".concat(a,"_").concat(Date.now());return t()(t()({},ne),{},{properties:t()(t()({},ne==null?void 0:ne.properties),{},B()({},J,t()(t()({},Z),{},{renderType:a})))})}function gn(ne){var Z=ne.itemLayout,J=ne.labelWidth,w=ne.labelGap;return Z==="horizontal"&&A.hj(J)?J+w:0}function un(){for(var ne=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],Z=arguments.length>1?arguments[1]:void 0,J=0;J<ne.length;J++){var w=ne[J],X=yn(w)?w:{label:w,value:w},q=Z(X);if(q)return}}function sn(ne,Z){var J=[];return!rn(ne)||!rn(Z)||Z.forEach(function(w){dn(w)||un(ne,function(X){if(w===X.value)return J.push(X.label),!0})}),J}function Fn(ne,Z){var J=[];return!rn(ne)||!rn(Z)||un(ne,function(w){Z.includes(w.value)&&J.push(w)}),J}function zn(ne){return!!(dn(ne)||ne==="")}function Hn(ne){var Z=ne.schema,J=ne.actionsRestSchema,w=ne.actionsRenderMode;return(0,I.useMemo)(function(){return w===h.normal?Z:xn(Z,J)},[Z,J,w])}var En,Pn=(0,H.H)(En||(En=z()([`
  --schema-render-color-description: #999;
  --schema-render-color-required-mark: #ff4d4f;
  --schema-render-color-warning: #faad14;
  --schema-render-color-error: #ff4d4f;

  font-size: 16px;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
`]))),Zn=e(28403),on=e(84567),Vn=function(Z){var J=Z.children,w=l(),X=w.readonlyPlaceholder;return(0,m.jsx)(m.Fragment,{children:zn(J)?X:J})},Ve=Vn,Gn=function(Z){var J=Z.schema,w=Z.disabled,X=Z.value,q=Z.onChange,le=(0,M.Z)(function(ce){var me;q(ce,{extra:{checkedOptions:Fn((me=J.renderOptions)===null||me===void 0?void 0:me.options,ce)}})});return(0,m.jsx)(on.Z.Group,t()(t()({},J.renderOptions),{},{value:X,onChange:le,disabled:w}))},Yn=function(Z){var J,w=Z.schema,X=Z.value,q=Z.locale,le=sn((J=w.renderOptions)===null||J===void 0?void 0:J.options,X);return(0,m.jsx)(Ve,{children:le.join(q.FormRender.comma)})},Jn={component:Gn,readonlyComponent:Yn},Tn=e(88760),Qn=e(27484),ke=e.n(Qn),Xn=function(Z){var J=Z.schema,w=Z.value,X=Z.onChange,q=Z.disabled,le=Z.locale,ce=Z.validator,me=(0,I.useMemo)(function(){return F.dr(le.FormRender.placeholderSelect,{title:J.title})},[J.title,le.FormRender.placeholderSelect]);return(0,m.jsx)(Tn.default,t()(t()({allowClear:!0,placeholder:me,style:{width:"100%"}},J.renderOptions),{},{status:ce.status,value:w?ke()(w):null,onChange:function(Ee){return X(Ee?ke()(Ee).toISOString():void 0)},disabled:q}))},wn=function(Z){var J,w,X=Z.schema,q=Z.value;return(0,m.jsx)(Ve,{children:q?ke()(q).format(((J=X.renderOptions)===null||J===void 0?void 0:J.format)||((w=X.renderOptions)!==null&&w!==void 0&&w.showTime?n:o)):""})},kn={component:Xn,readonlyComponent:wn};function mn(ne){return ke()(ne).toISOString()}var qn=function(Z){var J=Z.schema,w=Z.value,X=Z.onChange,q=Z.disabled,le=Z.validator,ce=J.renderOptions||{},me=ce.showTime;return(0,m.jsx)(Tn.default.RangePicker,t()(t()({allowClear:!0,allowEmpty:!0,style:{width:"100%"}},J.renderOptions),{},{disabled:q,status:le.status,value:w?[ke()(w[0]),ke()(w[1])]:null,onChange:function(Ee){if(Ee&&Ee[0]&&Ee[1]){var Ce=me?Ee[0]:Ee[0].startOf("day"),be=me?Ee[1]:Ee[1].endOf("day");X([mn(Ce),mn(be)])}else X(void 0)}}))},er=function(Z){var J=Z.schema,w=Z.value,X=Z.locale,q="";if(A.kJ(w)&&w[0]&&w[1]){var le,ce,me,Ie=(le=J.renderOptions)!==null&&le!==void 0&&le.showTime?n:o,Ee=((ce=J.renderOptions)===null||ce===void 0?void 0:ce.format)||Ie,Ce=((me=J.renderOptions)===null||me===void 0?void 0:me.displayTextTemplate)||X.FormRender.displayDateRange;q=F.dr(Ce,{start:ke()(w[0]).format(Ee),end:ke()(w[1]).format(Ee)})}return(0,m.jsx)(Ve,{children:q})},nr={component:qn,readonlyComponent:er},rr=function(Z){var J=Z.value;return(0,m.jsx)(Ve,{children:J})},Dn={component:rr},tr=function(Z){var J=Z.disabled;return(0,m.jsx)(y,{disabled:J})},ar={formItem:tr},sr=e(13457),or=["validateOnBlur"],cn=function(Z){var J=Z.schema,w=Z.disabled,X=Z.value,q=Z.onChange,le=Z.validator,ce=Z.locale,me=J.renderOptions||{},Ie=me.validateOnBlur,Ee=N()(me,or),Ce=(0,I.useMemo)(function(){return F.dr(ce.FormRender.placeholderInput,{title:J.title})},[J.title,ce.FormRender.placeholderInput]),be=(0,M.Z)(function(Me){q(Me!=null?Me:void 0,{triggerValidator:!Ie})}),Re=(0,M.Z)(function(){q(X,{triggerValidator:!0})});return(0,m.jsx)(sr.Z,t()(t()({style:{width:"100%"},placeholder:Ce},Ee),{},{status:le.status,value:X,onChange:be,onBlur:Ie?Re:void 0,disabled:w}))},lr=function(Z){var J=Z.value;return(0,m.jsx)(Ve,{children:J})},dr={component:cn,readonlyComponent:lr},ln=e(25278),ur=["validateOnBlur"],bn=function(Z){var J=Z.schema,w=Z.disabled,X=Z.value,q=Z.onChange,le=Z.validator,ce=Z.locale,me=J.renderOptions||{},Ie=me.validateOnBlur,Ee=N()(me,ur),Ce=(0,I.useMemo)(function(){return F.dr(ce.FormRender.placeholderInput,{title:J.title})},[J.title,ce.FormRender.placeholderInput]),be=(0,M.Z)(function(Me){var Se=Me.target.value;Se!==X&&q(Se,{triggerValidator:!Ie})}),Re=(0,M.Z)(function(){q(X,{triggerValidator:!0})});return(0,m.jsx)(ln.Z,t()(t()({placeholder:Ce},Ee),{},{status:le.status,value:X!=null?X:"",onChange:be,onBlur:Ie?Re:void 0,disabled:w}))},mr=function(Z){var J=Z.value;return(0,m.jsx)(Ve,{children:J})},cr={component:bn,readonlyComponent:mr},On=e(52162),Cn=e(47221),ir=function(Z){var J,w,X=Z.schema,q=Z.path,le=Z.objectStyle,ce=(0,I.useState)(!1),me=D()(ce,2),Ie=me[0],Ee=me[1],Ce=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{children:X.title}),!!X.titleDescription&&(0,m.jsx)(V.Z,{placement:"top",trigger:"hover",content:X.titleDescription,children:(0,m.jsx)(W.Z,{style:{marginLeft:4}})})]});return(0,m.jsx)(Cn.Z,t()(t()({},(J=X.renderOptions)===null||J===void 0?void 0:J.headerOptions),{},{activeKey:String(Ie),onChange:function(){return Ee(!Ie)},children:(0,I.createElement)(Cn.Z.Panel,t()(t()({},(w=X.renderOptions)===null||w===void 0?void 0:w.panelOptions),{},{header:Ce,key:"false"}),(0,m.jsx)("div",{style:le,children:(0,m.jsx)(On.Z,{schema:X,path:q})}))}))},pr={formItem:ir},_n=function(Z){var J=Z.schema,w=Z.path,X=Z.objectStyle;return(0,m.jsx)("div",{style:X,children:(0,m.jsx)(On.Z,{schema:J,path:w})})},hr={formItem:_n},vr=["validateOnBlur"],Ir=function(Z){var J=Z.schema,w=Z.disabled,X=Z.value,q=Z.onChange,le=Z.validator,ce=Z.locale,me=J.renderOptions||{},Ie=me.validateOnBlur,Ee=N()(me,vr),Ce=(0,I.useMemo)(function(){return F.dr(ce.FormRender.placeholderInput,{title:J.title})},[J.title,ce.FormRender.placeholderInput]),be=(0,M.Z)(function(Me){var Se=Me.target.value;Se!==X&&q(Se,{triggerValidator:!Ie})}),Re=(0,M.Z)(function(){q(X,{triggerValidator:!0})});return(0,m.jsx)(ln.Z.Password,t()(t()({placeholder:Ce},Ee),{},{status:le.status,value:X!=null?X:"",onChange:be,onBlur:Ie?Re:void 0,disabled:w}))},fr=function(Z){var J=Z.value;return(0,m.jsx)(Ve,{children:J})},yr={component:Ir,readonlyComponent:fr},xr=e(55742),Sn=function(Z){var J=Z.schema,w=Z.disabled,X=Z.value,q=Z.onChange;return(0,m.jsx)(xr.ZP.Group,t()(t()({},J.renderOptions),{},{value:X,onChange:function(ce){return q(ce.target.value)},disabled:w}))},gr=function(Z){var J,w=Z.schema,X=Z.value,q=sn((J=w.renderOptions)===null||J===void 0?void 0:J.options,[X]);return(0,m.jsx)(Ve,{children:q[0]})},Er={component:Sn,readonlyComponent:gr},Pr=e(67002),Tr=function(Z){var J=Z.schema,w=Z.disabled,X=Z.readonly,q=Z.value,le=Z.onChange;return(0,m.jsx)(Pr.Z,t()(t()({},J.renderOptions),{},{value:q!=null?q:0,onChange:le,disabled:w||X}))},Dr={component:Tr},Rn=e(34041),br=function(Z){var J=Z.schema,w=Z.disabled,X=Z.value,q=Z.onChange,le=Z.locale,ce=Z.validator,me=(0,I.useMemo)(function(){return F.dr(le.FormRender.placeholderSelect,{title:J.title})},[J.title,le.FormRender.placeholderSelect]);return(0,m.jsx)(Rn.default,t()(t()({allowClear:!0,style:{width:"100%"},placeholder:me},J.renderOptions),{},{status:ce.status,mode:void 0,value:X!=null?X:null,onChange:function(Ee){return q(Ee)},disabled:w}))},Or=function(Z){var J,w,X=Z.schema,q=Z.value,le=Z.locale,ce=sn((J=X.renderOptions)===null||J===void 0?void 0:J.options,[q]);return(0,m.jsx)(Ve,{children:ce.join((w=le.FormRender)===null||w===void 0?void 0:w.comma)})},Cr={component:br,readonlyComponent:Or},_r=function(Z){var J=Z.schema,w=Z.disabled,X=Z.value,q=Z.onChange,le=Z.validator,ce=Z.locale,me=(0,I.useMemo)(function(){return F.dr(ce.FormRender.placeholderSelect,{title:J.title})},[J.title,ce.FormRender.placeholderSelect]),Ie=(0,M.Z)(function(Ee,Ce){q(Ee,{extra:{selectedOptions:Ce}})});return(0,m.jsx)(Rn.default,t()(t()({allowClear:!0,style:{width:"100%"},placeholder:me},J.renderOptions),{},{status:le.status,mode:"multiple",value:X,onChange:Ie,disabled:w}))},Sr=function(Z){var J,w,X=Z.schema,q=Z.value,le=Z.locale,ce=sn((J=X.renderOptions)===null||J===void 0?void 0:J.options,q);return(0,m.jsx)(Ve,{children:ce.join((w=le.FormRender)===null||w===void 0?void 0:w.comma)})},Rr={component:_r,readonlyComponent:Sr},Mr=e(41637),Lr=function(Z){var J=Z.schema,w=Z.disabled,X=Z.readonly,q=Z.value,le=Z.onChange;return(0,m.jsx)(Mr.Z,t()(t()({},J.renderOptions),{},{checked:q,onChange:function(me){return le(me)},disabled:w||X}))},Ar={component:Lr},jr=function(Z){var J,w=Z.schema,X=Z.disabled,q=Z.readonly,le=Z.value,ce=Z.onChange;return(0,m.jsx)(on.Z,t()(t()({},w.renderOptions),{},{checked:le,onChange:function(Ie){return ce(Ie.target.checked)},disabled:X||q,children:(J=w.renderOptions)===null||J===void 0?void 0:J.text}))},ee={component:jr},k=["validateOnBlur"],ae=function(Z){var J=Z.schema,w=Z.disabled,X=Z.value,q=Z.onChange,le=Z.validator,ce=Z.locale,me=J.renderOptions||{},Ie=me.validateOnBlur,Ee=N()(me,k),Ce=(0,I.useMemo)(function(){return F.dr(ce.FormRender.placeholderInput,{title:J.title})},[J.title,ce.FormRender.placeholderInput]),be=(0,M.Z)(function(Me){var Se=Me.target.value;Se!==X&&q(Se,{triggerValidator:!Ie})}),Re=(0,M.Z)(function(){q(X,{triggerValidator:!0})});return(0,m.jsx)(ln.Z.TextArea,t()(t()({rows:3,placeholder:Ce},Ee),{},{status:le.status,value:X!=null?X:"",onChange:be,onBlur:Ie?Re:void 0,disabled:w}))},se=function(Z){var J=Z.value;return(0,m.jsx)(Ve,{children:J})},oe={component:ae,readonlyComponent:se},pe,xe=(pe={},B()(B()(B()(B()(B()(B()(B()(B()(B()(B()(pe,a,ar),"Object",pr),"ObjectNull",hr),"InputText",cr),"InputNumber",dr),"Password",yr),"TextArea",oe),"Radio",Er),"Checkbox",Jn),"Switch",Ar),B()(B()(B()(B()(B()(B()(B()(pe,"SwitchBox",ee),"DatePicker",kn),"DateRangePicker",nr),"Description",Dn),"Rate",Dr),"Select",Cr),"SelectMultiple",Rr)),ve=xe,ye=function(Z,J){var w=t()(t()({},d),Z),X=(0,I.useRef)(null);(0,I.useImperativeHandle)(J,function(){return X.current});var q=(0,I.useMemo)(function(){return t()(t()({},ve),w.renderers)},[w.renderers]),le=(0,I.useMemo)(function(){return t()(t()({},Zn.Z),w.locale)},[w.locale]),ce=fn(w),me=K({props:w,coreRef:X}),Ie=me.handleFormSubmit,Ee=me.handleSubmit,Ce=me.handleReset,be=me.actionsLoading,Re=me.isLoading,Me=Hn(v.ei(w,"schema","actionsRestSchema","actionsRenderMode")),Se=t()(t()({},v.ei(w,"labelWidth","labelGap","labelColon","labelRender","layoutColumnGap","layoutRowGap","actions","registerActions","readonlyPlaceholder")),{},{locale:le,actionsLoading:be,handleSubmit:Ee,handleReset:Ce}),je=w.disableFormOnActionLoading?w.disabled||Re:w.disabled;return(0,m.jsx)(u.Provider,{value:Se,children:(0,m.jsxs)("form",{onSubmit:Ie,className:L.Z(w.rootClassName,Pn),style:w.rootStyle,children:[(0,m.jsx)(O.default,t()(t()({},w),{},{ref:X,schema:Me,locale:le,renderers:q,itemLayout:ce,disabled:je})),w.actionsRenderMode===h.normal&&(0,m.jsx)(y,{disabled:je,className:F.Rk(w.prefixCls,"form-actions"),style:{marginTop:w.layoutRowGap,marginLeft:gn(w)}})]})})},ge=(0,I.forwardRef)(ye),he=ge},35804:function(G,c,e){e.r(c);var _=e(97857),t=e.n(_),v=e(78484);c.default=t()(t()({},v.default),{},{FormRender:{submit:"Submit",reset:"Reset",placeholderInput:"Please enter ${title}",placeholderSelect:"Please select ${title}",comma:",",displayDateRange:"${start} to ${end}"}})},28403:function(G,c,e){var _=e(97857),t=e.n(_),v=e(39214);c.Z=t()(t()({},v.Z),{},{FormRender:{submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",placeholderInput:"\u8BF7\u8F93\u5165${title}",placeholderSelect:"\u8BF7\u9009\u62E9${title}",comma:"\uFF0C",displayDateRange:"${start} \u81F3 ${end}"}})},36116:function(G,c,e){e.r(c),e.d(c,{default:function(){return b}});var _=e(97857),t=e.n(_),v=e(68795),L=e(48689),O=e(74311),F=e(14726),I=e(67294),p={submit:"submit",reset:"reset",collapse:"collapse"},N={prefixCls:"schema-render",layoutColumnGap:10,layoutRowGap:15,actions:[p.reset,p.submit,p.collapse],defaultCollapsed:!0,collapsedRows:2},x=e(5574),B=e.n(x),A=e(80882),$=e(48115),R=e(24317);function P(T,S,D){var M;if(D)return D(T);if(!T)return 5;var E=T.clientWidth,K=((M=T.firstElementChild)===null||M===void 0||(M=M.getBoundingClientRect())===null||M===void 0?void 0:M.width)||320;return Math.floor(E/K)*S-1}var h=e(64599),d=e.n(h);function s(T,S){var D={},M=Object.keys(T.properties).slice(0,S),E=d()(M),K;try{for(E.s();!(K=E.n()).done;){var W=K.value;D[W]=T.properties[W]}}catch(V){E.e(V)}finally{E.f()}return{renderType:"Root",properties:D}}function a(T){var S=T.isCollapsed,D=T.rawSchema,M=T.collapsedNumber;return S?s(D,M):D}var o=e(28e3);function n(T){return o.PO(T)?Object.keys(T).length:o.kJ(T)||o.HD(T)?T.length:0}var r=e(38812);function u(T,S){var D=(0,r.Z)(S),M=(0,I.useRef)(-1);(0,I.useEffect)(function(){var E,K=(E=T.current)===null||E===void 0?void 0:E.getRootElement();if(K){var W=new ResizeObserver(function(V){var U=V[0].contentRect.width;M.current!==U&&(M.current=U,D.current(K))});return W.observe(K),function(){return W.disconnect()}}},[])}var l=e(85893);function m(T,S){var D=T.schema,M=(0,I.useState)(T.defaultCollapsed),E=B()(M,2),K=E[0],W=E[1],V=(0,I.useState)(function(){var de;return P((de=S.current)===null||de===void 0?void 0:de.getRootElement(),T.collapsedRows,T.calcCollapsedNumber)}),U=B()(V,2),z=U[0],H=U[1],Q=(0,I.useRef)(D);(0,I.useMemo)(function(){Q.current=a({isCollapsed:K,collapsedNumber:z,rawSchema:D})},[z,K,D]),u(S,function(de){H(P(de,T.collapsedRows,T.calcCollapsedNumber))});var Y=(0,R.Z)(function(de){var Te;W(de),(Te=T.onToggleCollapsed)===null||Te===void 0||Te.call(T,de)}),te=(0,R.Z)(function(de){var Te,ue=de.locale;if(n(D.properties)<=z)return null;if(K){var ie;return(0,l.jsxs)(F.ZP,{type:"link",onClick:function(){return Y(!1)},style:{padding:0},children:[ue==null||(ie=ue.Search)===null||ie===void 0?void 0:ie.expand,(0,l.jsx)(A.Z,{})]})}return(0,l.jsxs)(F.ZP,{type:"link",onClick:function(){return Y(!0)},style:{padding:0},children:[ue==null||(Te=ue.Search)===null||Te===void 0?void 0:Te.collapse,(0,l.jsx)($.Z,{})]})}),re=t()({collapse:te},T.registerActions);return{schema:Q.current,registerActions:re}}var g=e(6386),f=e(52038);function j(T){return{className:f.Rk(T,"form-actions"),style:{gridColumnStart:-2,textAlign:"end"}}}var y={submit:function(S){var D=S.loading,M=S.locale;return(0,l.jsx)(F.ZP,{loading:D.submit,htmlType:"submit",type:"primary",icon:(0,l.jsx)(v.Z,{}),children:M.FormRender.submit})},reset:function(S){var D=S.loading,M=S.locale,E=S.handleReset;return(0,l.jsx)(F.ZP,{loading:D.reset,onClick:E,icon:(0,l.jsx)(L.Z,{}),children:M.FormRender.reset})}},i=function(S,D){var M=t()(t()({},N),S),E=(0,I.useRef)(null),K=(0,I.useMemo)(function(){return t()(t()({},g.Z),M.locale)},[M.locale]),W=m(M,E),V=W.schema,U=W.registerActions,z=(0,I.useMemo)(function(){return j(M.prefixCls)},[M.prefixCls]);return(0,I.useImperativeHandle)(D,function(){return E.current}),(0,l.jsx)(O.default,t()(t()({layout:"autoFill"},M),{},{ref:E,locale:K,schema:V,registerActions:t()(t()({},y),U),actionsRestSchema:z,actionsRenderMode:"formItem"}))},C=(0,I.forwardRef)(i),b=C},9686:function(G,c,e){e.r(c);var _=e(97857),t=e.n(_),v=e(35804);c.default=t()(t()({},v.default),{},{FormRender:t()(t()({},v.default.FormRender),{},{submit:"Search"}),Search:{collapse:"Collapse",expand:"Expand"}})},6386:function(G,c,e){var _=e(97857),t=e.n(_),v=e(28403);c.Z=t()(t()({},v.Z),{},{FormRender:t()(t()({},v.Z.FormRender),{},{submit:"\u67E5\u8BE2"}),Search:{collapse:"\u6536\u8D77",expand:"\u5C55\u5F00"}})},71856:function(G,c,e){e.r(c),e.d(c,{default:function(){return jr}});var _=e(97857),t=e.n(_),v=e(18474),L=e(28e3),O=e(85908),F=e(24317),I=e(95511),p=e(67294),N=L.kJ,x=L.PO,B=L.HD,A=L.kK,$=function(k){return N(k)?!k.length:x(k)?!Object.keys(k).length:B(k)?k.trim()==="":A(k)};function R(ee,k){return N(ee)?ee.map(k):[]}function P(ee,k){if(ee)for(var ae=ee.length,se=0;se<ae;se++){var oe=k==null?void 0:k(ee[se],se,ee);if(oe)return}}function h(){return Math.random().toString(36).substring(7).replace(/\d/g,"x")}var d=h(),s=function(ee){return ee.actions="__actions__",ee.rowNumber="__row-number__",ee}({}),a={table:"st-table-".concat(d),pagination:"st-pagination-".concat(d)},o=e(23060),n=e(13769),r=e.n(n),u=e(41637),l=e(66309),m=e(67002),g=e(5574),f=e.n(g),j=e(57020),y=e(42075),i=e(85893),C=function(k){var ae=k.imgList,se=k.imgProps,oe=k.groupProps,pe=(0,p.useState)(!1),xe=f()(pe,2),ve=xe[0],ye=xe[1],ge=(0,p.useState)(0),he=f()(ge,2),ne=he[0],Z=he[1],J=function(X){Z(X),ye(!0)};return(0,i.jsx)(j.Z.PreviewGroup,t()(t()({},oe),{},{items:ae,preview:{visible:ve,current:ne,onChange:function(X){return Z(X)},onVisibleChange:function(X){return ye(X)}},children:(0,i.jsx)(y.Z,{children:ae.map(function(w,X){return(0,p.createElement)(j.Z,t()(t()({width:60},se),{},{src:w,key:X,onClick:function(){return J(X)}}))})})}))},b=C,T={backgroundColor:"#ececec",padding:16,borderRadius:6,textAlign:"left"},S=new RegExp("(?<!\\d*\\.\\d*)(?=(\\B\\d{3})+(\\.\\d+)?$)","g"),D=function(k){var ae=k.value;return $(ae)?"-":isNaN(Number(ae))?ae:String(ae).replace(S,",")},M=D,E=e(83062),K=["maxLength"],W=function(k){var ae=k.value,se=k.options,oe=se===void 0?{}:se,pe=$(ae)?"-":String(ae),xe=oe.maxLength,ve=xe===void 0?10:xe,ye=r()(oe,K);return pe.length>ve?(0,i.jsxs)(E.Z,t()(t()({title:pe},ye),{},{children:[pe.slice(0,ve-1),"..."]})):(0,i.jsx)(i.Fragment,{children:pe})},V=W,U=e(14726),z=e(85576),H=(0,p.createContext)({}),Q=H;function Y(){var ee=(0,p.useContext)(Q);return ee}var te=["maxLength"],re=function(k){var ae=k.value,se=k.options,oe=se===void 0?{}:se,pe=$(ae)?"-":String(ae),xe=oe.maxLength,ve=xe===void 0?10:xe,ye=r()(oe,te),ge=(0,p.useState)(!1),he=f()(ge,2),ne=he[0],Z=he[1],J=Y();return pe.length>ve?(0,i.jsxs)(i.Fragment,{children:[pe.slice(0,ve-3),"...",(0,i.jsx)(U.ZP,{type:"link",style:{padding:0},onClick:function(){return Z(!0)},children:J.locale.SearchTable.longTextModalLabel}),(0,i.jsx)(z.Z,t()(t()({width:600,title:J.locale.SearchTable.longTextModalTitle,footer:null},ye),{},{open:ne,onCancel:function(){return Z(!1)},children:pe}))]}):(0,i.jsx)(i.Fragment,{children:pe})},de=re,Te=["groupProps"],ue=L.kJ,ie={code:function(k){var ae=k.value,se=k.options;return(0,i.jsx)("pre",{style:t()(t()({},T),se.style),children:(0,i.jsx)("code",{children:ae})})},percent:function(k){var ae=k.value;return $(ae)?"-":"".concat(ae,"%")},switch:function(k){var ae=k.value,se=k.options;return(0,i.jsx)(u.Z,t()(t()({},se),{},{checked:!!ae}))},tags:function(k){var ae=k.value,se=k.options,oe=ue(ae)?ae:[ae];return oe.map(function(pe,xe){return(0,p.createElement)(l.Z,t()(t()({},se),{},{key:xe}),pe)})},rate:function(k){var ae=k.value,se=k.options;return(0,i.jsx)(m.Z,t()(t()({style:{width:134}},se),{},{disabled:!0,value:ae}))},"comma-number":function(k){return(0,i.jsx)(M,t()({},k))},images:function(k){var ae=k.value,se=k.options;if($(ae))return"-";var oe=ue(ae)?ae:[ae],pe=se.groupProps,xe=r()(se,Te);return(0,i.jsx)(b,{imgList:oe,imgProps:xe,groupProps:pe})},"long-text":function(k){return(0,i.jsx)(V,t()({},k))},"long-text-modal":function(k){return(0,i.jsx)(de,t()({},k))}},De=e(27484),fe=e.n(De),Pe=o.U2,Oe=L.kJ,_e=L.PO;function Le(ee,k){return ee===k?0:ee>k?1:-1}var We=function(k,ae,se){var oe=se.sortType,pe=se.sortOrder,xe=se.arrDataIndex,ve=se.sortDataExtractor,ye=se.sortStringValueTransform,ge=ve?ve(k):Pe(k,xe),he=ve?ve(ae):Pe(ae,xe);return _e(ge)||_e(he)?0:(Oe(ge)&&(ge=ge.join("")),Oe(he)&&(he=he.join("")),ge=String(ge).trim(),he=String(he).trim(),$(ge)?pe==="ascend"?1:-1:$(he)?pe==="ascend"?-1:1:oe==="string"?(ye&&(ge=ye(ge),he=ye(he)),Le("@".concat(ge).toLowerCase(),"@".concat(he).toLowerCase())):oe==="date"?Le(new Date(ge),new Date(he)):!isNaN(Number(ge))&&!isNaN(Number(he))?Le(Number(ge),Number(he)):fe()(ge).isValid()&&fe()(he).isValid()?Le(new Date(ge),new Date(he)):(ye&&(ge=ye(ge),he=ye(he)),Le(ge,he)))},Ae=["title","dataIndex","children","valueType"],Ue=["type"],Fe=o.U2,Ke=L.kJ,Ze=L.HD,Ne=L.mf;function Ge(ee,k,ae){return ee.map(function(se){var oe=se.title,pe=se.dataIndex,xe=se.children,ve=se.valueType,ye=r()(se,Ae);Ke(xe)&&(xe=Ge(xe,k,ae));var ge=Ke(pe)?pe.join("."):pe,he=Ke(pe)?pe:[pe],ne=k.sortMode==="local-all"||k.sortMode==="service-all",Z=!!ye.sorter||!!ye.sortType||ne,J=!1;xe||(ye.sorter?J=ye.sorter:(ne||ye.sortType)&&(J=k.sortMode==="service-all"?!0:function(X,q,le){return We(X,q,{arrDataIndex:he,sortOrder:le,sortType:ye.sortType,sortDataExtractor:ye.sortDataExtractor,sortStringValueTransform:k.sortStringValueTransform})}));var w=function(q,le,ce){var me=Fe(le,he),Ie="",Ee=void 0;if(ve)if(Ne(ve)){var Ce=ve(le,ce),be=Ce.type,Re=r()(Ce,Ue);Ie=be,Ee=Re}else Ie=ve;var Me=ae[Ie];return Me?Me({value:me,record:le,options:Ee||{},index:ce}):$(me)?"-":me};return t()(t()({align:"center",key:ge,width:Ze(oe)?oe.length*16+(Z?50:30):void 0,render:w},ye),{},{title:oe,dataIndex:pe,children:xe,sorter:J})})}var Ye=o.Cw;function Je(ee){var k=ee.table,ae=ee.globalStateRef,se=(0,p.useRef)([]),oe=ae.current.isTabChanging;(0,p.useMemo)(function(){oe||(se.current=k.columns||[])},[k.columns,oe]);var pe=(0,p.useMemo)(function(){var ve=t()(t()({},ie),k.registerValueType);return Ye(ve,function(ye,ge){return ge.toLowerCase()})},[k.registerValueType]),xe=(0,p.useMemo)(function(){return Ge(se.current,k,pe)},[se.current]);return{rawColumns:se.current,baseColumns:xe}}var Be=e(15009),He=e.n(Be),hn=e(99289),nn=e.n(hn),vn=e(19632),tn=e.n(vn),In=e(16223),en=e(60887),An=e(32339),an=e(45587),jn=e(24285),Bn=function(k){var ae=k.items,se=ae===void 0?[]:ae,oe=k.onChange,pe=k.itemClassName,xe=k.overlayClassName,ve=k.renderItem,ye=(0,en.Dy)((0,en.VT)(en.MA)),ge=(0,p.useState)(null),he=f()(ge,2),ne=he[0],Z=he[1],J=(0,F.Z)(function(w){var X=w.active,q=w.over;if(X.id!==q.id){var le=se.findIndex(function(me){return me.id===X.id}),ce=se.findIndex(function(me){return me.id===q.id});oe==null||oe((0,an.Rp)(se,le,ce))}Z(null)});return(0,i.jsxs)(en.LB,{sensors:ye,collisionDetection:en.pE,onDragStart:function(X){var q=X.active;return Z(q.id)},onDragEnd:J,modifiers:[An.DL],children:[(0,i.jsx)(an.Fo,{items:se,strategy:an.qw,children:se.map(function(w,X){return(0,i.jsx)($n,{className:pe,id:w.id,itemData:w,itemIndex:X,renderItem:ve},w.id)})}),(0,i.jsx)(en.y9,{zIndex:9999,children:ne?(0,i.jsx)("div",{className:xe,children:ve==null?void 0:ve(se.find(function(w){return w.id===ne}),se.findIndex(function(w){return w.id===ne}))}):null})]})};function $n(ee){var k=ee.className,ae=ee.id,se=ee.itemData,oe=ee.itemIndex,pe=ee.renderItem,xe=(0,an.nB)({id:ae}),ve={transform:jn.ux.Transform.toString(xe.transform),transition:xe.transition,opacity:xe.isDragging?0:void 0};return(0,i.jsx)("div",{className:k,ref:xe.setNodeRef,style:ve,children:pe==null?void 0:pe(se,oe,xe)})}var Kn=Bn,Nn=e(29751),Wn=e(13457);function Qe(ee){var k=ee.locale,ae=k.SearchTable.settingModalColumnEnum,se=k.SearchTable.settingModalColumnSortEnum,oe=[{title:ae[0],dataIndex:"name",width:200},{title:ae[1],dataIndex:"hidden",width:90,render:function(xe,ve){return(0,i.jsx)(u.Z,{checked:!xe,onChange:function(ye){function ge(he){return ye.apply(this,arguments)}return ge.toString=function(){return ye.toString()},ge}(function(ye){return ve(!ye)})})}},{title:ae[2],dataIndex:"width",width:100,render:function(xe,ve){return(0,i.jsx)(Wn.Z,{min:1,value:xe,onChange:function(ye){function ge(he){return ye.apply(this,arguments)}return ge.toString=function(){return ye.toString()},ge}(function(ye){ye&&ve(ye)})})}},{title:ae[3],dataIndex:"fixed",width:60,algin:"center",render:function(xe){var ve=xe?xe==="left"?se[0]:se[1]:se[2],ye=xe?xe==="left"?"orange":"blue":void 0;return(0,i.jsx)(l.Z,{color:ye,style:{margin:0},children:ve})}},{title:ae[4],dataIndex:"sort",width:50,algin:"center",render:function(){return(0,i.jsx)(U.ZP,{type:"text",size:"small",icon:(0,i.jsx)(Nn.Z,{}),style:{cursor:"move"}})}}];return oe}var Un=e(68400),Xe=e.n(Un),we=e(21222),fn,rn,dn,yn,xn,gn,un,sn=(0,we.H)(fn||(fn=Xe()([`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
`]))),Fn=(0,we.H)(rn||(rn=Xe()([`
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
`]))),zn=(0,we.H)(dn||(dn=Xe()([`
  border-top: 1px solid #f0f0f0;

  &:first-of-type {
    border-top: none;
  }
`]))),Hn=(0,we.H)(yn||(yn=Xe()([`
  background-color: #fff;
  transform: scale(1.05);
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: 200ms ease-out;
`]))),En=(0,we.H)(xn||(xn=Xe()([`
  display: flex;
  padding: 8px 0;
  background-color: #fff;

  &:hover {
    background-color: #fafafa;
  }
`]))),Pn=(0,we.H)(gn||(gn=Xe()([`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0 12px;
  word-break: break-all;
  flex-shrink: 0;
`]))),Zn=(0,we.H)(un||(un=Xe()([`
  text-align: right;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`])));function on(ee){return ee.map(function(k){return{id:String(k.dataIndex),name:k.title,hidden:k.hidden,width:k.width,fixed:k.fixed}})}var Vn=function(k){var ae=k.defaultColumns,se=k.sortColumns,oe=k.onOk,pe=Y(),xe=(0,p.useState)(function(){return on(se)}),ve=f()(xe,2),ye=ve[0],ge=ve[1],he=(0,p.useMemo)(function(){return Qe({locale:pe.locale})},[pe.locale]),ne=(0,F.Z)(function(q,le,ce){var me=tn()(ye);me[q][le]=ce,ge(me)}),Z=(0,F.Z)(function(q){ge(q)}),J=(0,F.Z)(function(){ge(on(se))}),w=(0,F.Z)(function(){ge(on(ae))}),X=(0,F.Z)(function(){var q=[];ye.forEach(function(le){var ce=le.id,me=le.width,Ie=le.hidden,Ee=ae.find(function(Ce){return String(Ce.dataIndex)===ce});Ee&&q.push(t()(t()({},Ee),{},{width:me,hidden:Ie}))}),oe==null||oe(q)});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:sn,children:he.map(function(q,le){return(0,i.jsx)("div",{className:Pn,style:{width:q.width,justifyContent:q.algin},children:q.title},le)})}),(0,i.jsx)("div",{className:Fn,children:(0,i.jsx)(Kn,{items:ye,onChange:Z,itemClassName:zn,overlayClassName:Hn,renderItem:function(le,ce,me){return(0,i.jsx)("div",{className:En,children:he.map(function(Ie,Ee){var Ce=le[Ie.dataIndex],be=Ie.dataIndex==="sort"?me==null?void 0:me.listeners:{};return(0,i.jsx)("div",t()(t()({className:Pn,style:{width:Ie.width,justifyContent:Ie.algin}},be),{},{children:Ie.render?Ie.render(Ce,function(Re){return ne(ce,Ie.dataIndex,Re)}):Ce}),"".concat(ce).concat(Ee))})},ce)}})}),(0,i.jsx)("div",{className:Zn,children:(0,i.jsxs)(y.Z,{children:[(0,i.jsx)(U.ZP,{onClick:w,children:pe.locale.SearchTable.settingModalResetDefault}),(0,i.jsx)(U.ZP,{onClick:J,children:pe.locale.SearchTable.settingModalReset}),(0,i.jsx)(U.ZP,{type:"primary",onClick:X,children:pe.locale.SearchTable.settingModalOk})]})})]})},Ve=Vn,Gn=["sortColumns","defaultColumns","onOk"],Yn=function(k){var ae=k.sortColumns,se=k.defaultColumns,oe=k.onOk,pe=r()(k,Gn),xe=Y();return(0,i.jsx)(z.Z,t()(t()({title:xe.locale.SearchTable.settingModalTitle,width:680,centered:!0,destroyOnClose:!0,footer:null},pe),{},{children:(0,i.jsx)(Ve,{sortColumns:ae,defaultColumns:se,onOk:oe})}))},Jn=Yn,Tn=function(k,ae){var se=[],oe={};k.forEach(function(ye){oe[String(ye.dataIndex)]=ye}),ae.forEach(function(ye){var ge=String(ye.dataIndex),he=oe[ge];if(he){var ne,Z,J;se.push(t()(t()({},he),{},{width:(ne=ye.width)!==null&&ne!==void 0?ne:he.width,hidden:(Z=ye.hidden)!==null&&Z!==void 0?Z:he.hidden,fixed:(J=ye.fixed)!==null&&J!==void 0?J:he.fixed})),delete oe[ge]}});for(var pe=0,xe=Object.values(oe);pe<xe.length;pe++){var ve=xe[pe];se.push(ve)}return se},Qn=o.ei;function ke(ee){var k=ee.baseColumns,ae=ee.table,se=ee.globalStateRef,oe=(0,p.useRef)([]),pe=(0,p.useState)(!1),xe=f()(pe,2),ve=xe[0],ye=xe[1],ge=(0,p.useState)([]),he=f()(ge,2),ne=he[0],Z=he[1],J=se.current.isTabChanging;(0,p.useMemo)(function(){if(!J)if(ne.length){var ce=ae.settingColumnsMergeAlgo||Tn;oe.current=ce(k,ne)}else oe.current=tn()(k)},[k,ne]);var w=(0,F.Z)(function(){ye(!0)}),X=(0,F.Z)(function(){ye(!1)}),q=(0,F.Z)(function(ce){var me;oe.current=ce,X();var Ie=ce.map(function(Ee){return Qn(Ee,"title","dataIndex","width","hidden","fixed")});(me=ae.onSettingChanged)===null||me===void 0||me.call(ae,{columns:Ie},ae.settingId)}),le=(0,i.jsx)(Jn,{open:ve,sortColumns:oe.current,defaultColumns:k,onCancel:X,onOk:q});return(0,In.Z)(nn()(He()().mark(function ce(){var me,Ie,Ee;return He()().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return be.next=2,(me=ae.getSetting)===null||me===void 0?void 0:me.call(ae,ae.settingId);case 2:Ee=be.sent,Ee!=null&&(Ie=Ee.columns)!==null&&Ie!==void 0&&Ie.length&&Z(Ee.columns);case 4:case"end":return be.stop()}},ce)})),[ae.settingId]),{sortColumns:oe.current,sortModalHolder:le,openSettingModal:w,closeSettingModal:X}}var Xn=e(80882),wn=e(86738),kn=e(85418),mn=e(93047),qn=["children","onClick","noLoading"],er=mn.Z;function nr(ee){var k=ee.children,ae=ee.onClick,se=ee.noLoading,oe=se===void 0?!1:se,pe=r()(ee,qn),xe=(0,p.useState)(!1),ve=f()(xe,2),ye=ve[0],ge=ve[1],he=(0,F.Z)(function(){var ne=nn()(He()().mark(function Z(J){return He()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(!oe){X.next=3;break}return ae==null||ae(J),X.abrupt("return");case 3:return ge(!0),X.prev=4,X.next=7,ae==null?void 0:ae(J);case 7:X.next=12;break;case 9:X.prev=9,X.t0=X.catch(4),er.warn(X.t0);case 12:ge(!1);case 13:case"end":return X.stop()}},Z,null,[[4,9]])}));return function(Z){return ne.apply(this,arguments)}}());return(0,i.jsx)(U.ZP,t()(t()({loading:ye},pe),{},{onClick:he,children:k}))}var rr=["text","confirmAgain","confirmProps","onClick"],Dn,tr=L.kJ,ar=L.HD,sr=o.CE,or=(0,we.H)(Dn||(Dn=Xe()([`
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
`])));function cn(ee,k){var ae=ee.text,se=ee.confirmAgain,oe=ee.confirmProps,pe=ee.onClick,xe=r()(ee,rr),ve=ar(ae)?(0,i.jsx)(nr,t()(t()({type:"link",size:"small"},sr(xe,"isShow")),{},{onClick:function(ge){return!se&&(pe==null?void 0:pe(ge))},children:ae}),k):ae;return se?(0,i.jsx)(wn.Z,t()(t()({title:"\u6E29\u99A8\u63D0\u793A",description:"\u8BF7\u4E8C\u6B21\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\uFF01"},oe),{},{onConfirm:pe,children:ve}),k):ve}function lr(ee){var k=ee.record,ae=ee.index,se=ee.actionItems,oe=ee.actionItemsCount,pe=ee.actionItemsDropdownProps,xe=ee.locale,ve=se==null?void 0:se(k,ae);if(!tr(ve))return null;var ye=ve.filter(function(Z){return Z.isShow!==!1}),ge;if(ye.length>oe){var he=[],ne=[];return ye.forEach(function(Z,J){J<oe-1?he.push(Z):ne.push(cn(Z,J))}),(0,i.jsxs)(i.Fragment,{children:[he.map(function(Z,J){return cn(Z,J)}),(0,i.jsx)(kn.Z,t()(t()({placement:"bottomRight"},pe),{},{dropdownRender:function(){return(0,i.jsx)("div",{className:or,children:ne.map(function(J,w){return(0,i.jsx)(p.Fragment,{children:J},w)})})},children:(0,i.jsxs)(U.ZP,{type:"link",size:"small",style:{gap:2,display:"inline-flex",alignItems:"center"},children:[xe.SearchTable.more," ",(0,i.jsx)(Xn.Z,{style:{margin:0}})]})}))]})}else ge=ye.map(function(Z,J){return cn(Z,J)});return ge}function dr(ee){var k=ee.table,ae=ee.sortColumns,se=ee.locale,oe=k.showRowNumber,pe=oe===void 0?!1:oe,xe=k.rowNumberColumnData,ve=xe===void 0?{}:xe,ye=k.actionItems,ge=k.actionItemsCount,he=ge===void 0?2:ge,ne=k.actionItemsColumnData,Z=ne===void 0?{}:ne,J=k.actionItemsDropdownProps,w=(0,F.Z)(function(le,ce,me){return lr({record:ce,index:me,actionItems:ye,actionItemsCount:he,actionItemsDropdownProps:J,locale:se})}),X=(0,p.useMemo)(function(){return ae.filter(function(le){return!le.hidden})},[ae]),q=(0,p.useMemo)(function(){var le=tn()(X);return pe&&le.unshift(t()({title:se.SearchTable.serialColumnName,align:"center",width:70,fixed:"left",render:function(me,Ie,Ee){return Ee+1},key:s.rowNumber},ve)),ye&&le.push(t()({title:se.SearchTable.actionColumnName,align:"center",fixed:"right",width:134,render:w,key:s.actions},Z)),le},[X]);return{finalColumns:q}}var ln=e(4559);function ur(ee){var k=ee.ref,ae=ee.rootElemRef,se=ee.searchRef,oe=ee.requestParamsRef,pe=ee.requestExtraParamsRef,xe=ee.searchValueRef,ve=ee.dataSource,ye=ee.updateDataSource,ge=ee.updateSummaryData,he=ee.updateScrollY,ne=ee.openSettingModal,Z=ee.runRequest,J=(0,ln.Z)(),w=J.forceUpdate;(0,p.useImperativeHandle)(k,function(){return{refresh:Z,getRootElement:function(){return ae.current},getSearchRef:function(){return se.current},getRequestParams:function(){return oe.current},getRequestExtraParams:function(){return pe.current},getSearchValue:function(){return xe.current},setSearchValue:function(q,le){var ce,me=le!=null&&le.overwrite?q:t()(t()({},xe.current),q);(ce=se.current)===null||ce===void 0||ce.setValue(me)},clearSearchValue:function(){var q;return(q=se.current)===null||q===void 0?void 0:q.resetValue()},getDataSource:function(){return ve},setDataSource:function(q){ye(q),w()},setSummaryData:function(q){ge(q),w()},updateScrollY:he,openSettingModal:ne,rerender:w}})}var bn=e(52038),mr=mn.Z,cr=o.ei,On=v.Z,Cn=bn.dr;function ir(ee){var k,ae=ee.request,se=ee.updateScrollY,oe=ee.table,pe=ee.searchValueRef,xe=ee.locale,ve=(0,p.useRef)({current:1,pageSize:(oe.pagination!==!1?(k=oe.pagination)===null||k===void 0?void 0:k.defaultPageSize:10)||10,total:0}),ye=(0,p.useRef)({}),ge=(0,p.useRef)({}),he=(0,p.useRef)([]),ne=(0,p.useRef)({}),Z=(0,p.useState)(!1),J=f()(Z,2),w=J[0],X=J[1];oe.pagination===!1&&(ve.current={});var q=(0,F.Z)(function(){var Ce=nn()(He()().mark(function be(Re,Me){var Se,je,$e;return He()().wrap(function(ze){for(;;)switch(ze.prev=ze.next){case 0:if(Se={data:[],total:0},!w){ze.next=3;break}return ze.abrupt("return",Se);case 3:if(X(!0),ze.prev=4,!ae){ze.next=18;break}return je={},Me!=null&&Me.overwrite?je=Re||{}:je=t()(t()(t()({},pe.current),cr(ve.current,"current","pageSize")),Re),ze.next=10,ae(je,ge.current);case 10:$e=ze.sent,ye.current=je,je.current&&(ve.current.current=je.current),je.pageSize&&(ve.current.pageSize=je.pageSize),ve.current.total=$e.total||0,he.current=$e.data||[],ne.current=$e.summaryData||{},Se=t()(t()({},$e),{},{data:he.current,total:ve.current.total});case 18:ze.next=23;break;case 20:ze.prev=20,ze.t0=ze.catch(4),mr.warn(ze.t0);case 23:return X(!1),oe.autoScrollY&&se(),ze.abrupt("return",Se);case 26:case"end":return ze.stop()}},be,null,[[4,20]])}));return function(be,Re){return Ce.apply(this,arguments)}}()),le=!1;if(oe.pagination!==!1){var ce;le=t()(t()(t()({style:{marginBottom:0},showQuickJumper:!0,showSizeChanger:!0,showTotal:function(be){var Re=ve.current,Me=Re.current,Se=Re.pageSize,je=(Me-1)*Se,$e=je+he.current.length;return Cn(xe.SearchTable.paginationTotal,{start:je||1,end:$e,total:be})}},oe.pagination),ve.current),{},{onChange:function(be,Re){var Me,Se;(Me=oe.pagination)===null||Me===void 0||(Se=Me.onChange)===null||Se===void 0||Se.call(Me,be,Re),Object.assign(ve.current,{current:be,pageSize:Re}),q()},className:On((ce=oe.pagination)===null||ce===void 0?void 0:ce.className,a.pagination)})}var me=(0,F.Z)(function(Ce){he.current=Ce}),Ie=(0,F.Z)(function(Ce){ne.current=Ce}),Ee=(0,F.Z)(function(Ce){ge.current=Ce});return{loading:w,dataSource:he.current,updateDataSource:me,summaryData:ne.current,updateSummaryData:Ie,requestParamsRef:ye,requestExtraParamsRef:ge,updateRequestExtraParams:Ee,finalPagination:le,runRequest:q}}var pr=L.HD;function _n(ee){if(!ee)return 0;var k=window.getComputedStyle(ee,null),ae=parseFloat(k.marginTop)+parseFloat(k.marginBottom);return ee.offsetHeight+ae}function hr(ee,k){if(!ee||!k)return 0;var ae=window.getComputedStyle(ee,null),se=ae[k];return pr(se)&&se.match(/^\d+/)?parseFloat(se):0}var vr=L.o8;function Ir(ee){var k=ee.table,ae=ee.rootElemRef,se=(0,p.useState)(k.virtual?0:void 0),oe=f()(se,2),pe=oe[0],xe=oe[1],ve=(0,p.useRef)(),ye=(0,F.Z)(function(){var he;if(!(!ae.current||!vr((he=k.scroll)===null||he===void 0?void 0:he.y))){var ne=ae.current.querySelector(".".concat(a.table)),Z=ne==null?void 0:ne.querySelector("thead"),J=ne==null?void 0:ne.querySelector("tfoot"),w=ne==null?void 0:ne.querySelector(".".concat(a.pagination)),X=[Z,J,w],q=0;P(ae.current.children,function(le){le!==ne&&(q+=_n(le))}),q+=hr(ne,"marginTop"),P(X,function(le){q+=_n(le)}),xe(ae.current.clientHeight-q)}}),ge=(0,F.Z)(function(){var he=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;ne&&!k.autoScrollY||(clearTimeout(ve.current),ve.current=setTimeout(ye,he))});return(0,O.Z)(function(){var he=function(){return ge(0,!0)};return window.addEventListener("resize",he),function(){return window.removeEventListener("resize",he)}}),{scrollY:pe,updateScrollY:ge}}var fr=e(36116),yr=bn.nr;function xr(ee){var k=ee.locale,ae=ee.loading,se=ee.search,oe=ee.searchValueRef,pe=ee.runRequest,xe=ee.updateScrollY,ve=se===!1?{}:se,ye=(0,p.useRef)(null),ge=(0,ln.Z)(),he=ge.forceUpdate,ne=yr(ve,"value");if(ne){var Z;oe.current=(Z=ve.value)!==null&&Z!==void 0?Z:{}}var J=(0,F.Z)(function(ce,me){var Ie;oe.current=t()({},ce),ne||he(),(Ie=ve.onChange)===null||Ie===void 0||Ie.call(ve,ce,me)}),w=(0,F.Z)(function(){var ce=nn()(He()().mark(function me(Ie){var Ee;return He()().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return oe.current=t()({},Ie),be.next=3,(Ee=ve.onReset)===null||Ee===void 0?void 0:Ee.call(ve,Ie);case 3:return be.next=5,pe({current:1});case 5:case"end":return be.stop()}},me)}));return function(me){return ce.apply(this,arguments)}}()),X=(0,F.Z)(function(){var ce=nn()(He()().mark(function me(Ie){var Ee;return He()().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return be.next=2,(Ee=ve.onSubmit)===null||Ee===void 0?void 0:Ee.call(ve,Ie);case 2:return be.next=4,pe();case 4:case"end":return be.stop()}},me)}));return function(me){return ce.apply(this,arguments)}}()),q=(0,F.Z)(function(ce){var me;(me=ve.onToggleCollapsed)===null||me===void 0||me.call(ve,ce),xe(0,!0)}),le=se?(0,i.jsx)(fr.default,t()(t()({},se),{},{locale:se.locale||k,rootStyle:t()({marginBottom:16},se.rootStyle),ref:ye,disabled:se.disabled||ae,value:oe.current,onChange:J,onReset:w,onSubmit:X,onToggleCollapsed:q})):null;return{searchNodeHolder:le,searchRef:ye}}var Sn=L.kJ,gr=L.kK;function Er(ee,k){return ee===s.rowNumber?k:ee===s.actions?"":"-"}function Pr(ee){var k=[];function ae(se){P(se,function(oe){Sn(oe.children)?ae(oe.children):k.push(oe)})}return ae(ee),k}function Tr(ee){var k=ee.flattenedColumns,ae=ee.summaryData,se=ee.summaryText,oe=se===void 0?"\u5408\u8BA1":se,pe=ee.hasRowNumber,xe=pe===void 0?!1:pe,ve=ee.hasRowSelection,ye=ve===void 0?!1:ve,ge=[],he=-1;return ye&&(he++,ge.push({index:he,text:xe?"":oe})),P(k,function(ne){var Z=ne.key,J=ne.dataIndex,w=Sn(J)?J.join("."):J,X=String(Z||w),q=ae[X];he++,ge.push({index:he,text:gr(q)?Er(X,oe):q})}),ge}function Dr(ee){var k=Tr(ee);return(0,i.jsx)(I.Z.Summary,{fixed:"bottom",children:(0,i.jsx)(I.Z.Summary.Row,{children:k.map(function(ae){return(0,i.jsx)(I.Z.Summary.Cell,{align:"center",index:ae.index,colSpan:ae.colSpan,children:ae.text},ae.index)})})})}function Rn(ee){var k=ee.table,ae=ee.finalColumns,se=ee.summaryData,oe=(0,p.useMemo)(function(){return Pr(ae)},[ae]),pe=(0,F.Z)(function(){return Dr({flattenedColumns:oe,summaryData:se,summaryText:k.summaryText,hasRowSelection:!!k.rowSelection,hasRowNumber:k.showRowNumber})}),xe=k.summary?k.summary:$(se)?void 0:function(){return pe()};return{finalSummary:xe}}var br=e(42952),Or=e(56140);function Cr(ee){var k,ae=ee.locale,se=ee.title,oe=se===void 0?{}:se,pe=ee.loading,xe=ee.globalStateRef,ve=ee.runRequest,ye=ee.openSettingModal,ge=(0,F.Z)(function(J){var w,X;pe||(xe.current.isTabChanging=!0,(w=oe.tabs)===null||w===void 0||(X=w.onChange)===null||X===void 0||X.call(w,J),setTimeout(function(){return ve({current:1}).finally(function(){return xe.current.isTabChanging=!1})},0))}),he={},ne=oe.showSetting?(0,i.jsx)(E.Z,{title:ae.SearchTable.settingTips,children:(0,i.jsx)(U.ZP,{icon:(0,i.jsx)(br.Z,{}),disabled:pe,style:{marginLeft:10},onClick:ye})}):null;(k=oe.tabs)!==null&&k!==void 0&&k.tabBarExtraContent&&((0,p.isValidElement)(oe.tabs.tabBarExtraContent)?he.right=oe.tabs.tabBarExtraContent:Object.assign(he,oe.tabs.tabBarExtraContent)),oe.showSetting&&(he.right=(0,i.jsxs)(i.Fragment,{children:[he.right,ne]}));var Z=oe.tabs?(0,i.jsx)(Or.Z,t()(t()({},oe.tabs),{},{tabBarExtraContent:he,onChange:ge})):oe.showSetting?(0,i.jsx)("div",{className:oe.className,style:t()({textAlign:"right",marginBottom:16},oe.style),children:ne}):null;return{titleNodeHolder:Z}}var _r=e(6386),Sr=t()(t()({},_r.Z),{},{SearchTable:{serialColumnName:"\u5E8F\u53F7",actionColumnName:"\u64CD\u4F5C",more:"\u66F4\u591A",paginationTotal:"\u5171 ${total} \u6761\u6570\u636E",settingTips:"\u5217\u8BBE\u7F6E",settingModalTitle:"\u5217\u8BBE\u7F6E",settingModalOk:"\u786E\u5B9A",settingModalReset:"\u91CD\u7F6E\u672C\u6B21\u8BBE\u7F6E",settingModalResetDefault:"\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E",settingModalColumnEnum:["\u5217\u540D\u79F0","\u663E\u793A\u5217","\u5BBD\u5EA6","\u56FA\u5B9A\u65B9\u5F0F","\u6392\u5E8F"],settingModalColumnSortEnum:["\u5DE6","\u53F3","\u65E0"],longTextModalLabel:"\u5168\u90E8",longTextModalTitle:"\u5168\u90E8"}}),Rr=v.Z,Mr=L.PO,Lr=function(k,ae){var se=k.className,oe=k.style,pe=k.locale,xe=k.request,ve=k.requestOnMounted,ye=ve===void 0?!0:ve,ge=k.header,he=k.search,ne=k.titleTop,Z=k.title,J=Z===void 0?{}:Z,w=k.titleBottom,X=k.table,q=X===void 0?{}:X,le=k.footer,ce=(0,p.useRef)(null),me=(0,p.useRef)(he===!1?{}:he.defaultValue||{}),Ie=(0,p.useMemo)(function(){return t()(t()({},Sr),pe)},[pe]),Ee=(0,p.useRef)({isTabChanging:!1}),Ce=Je({table:q,globalStateRef:Ee}),be=Ce.baseColumns,Re=ke({table:q,baseColumns:be,globalStateRef:Ee}),Me=Re.sortColumns,Se=Re.sortModalHolder,je=Re.openSettingModal,$e=dr({table:q,sortColumns:Me,locale:Ie}),Br=$e.finalColumns,ze=Ir({table:q,rootElemRef:ce}),zr=ze.scrollY,$r=ze.updateScrollY,qe=ir({searchValueRef:me,table:q,request:xe,updateScrollY:$r,locale:Ie}),Mn=qe.loading,Nr=qe.dataSource,Hr=qe.updateDataSource,Zr=qe.summaryData,Vr=qe.updateSummaryData,Gr=qe.finalPagination,pn=qe.runRequest,Yr=qe.requestParamsRef,Jr=qe.requestExtraParamsRef,Qr=qe.updateRequestExtraParams,Wr=xr({locale:Ie,loading:Mn,search:he,searchValueRef:me,runRequest:pn,updateScrollY:$r}),Xr=Wr.searchNodeHolder,wr=Wr.searchRef,kr=Cr({locale:Ie,title:J,loading:Mn,globalStateRef:Ee,runRequest:pn,openSettingModal:je}),qr=kr.titleNodeHolder,et=Rn({table:q,finalColumns:Br,summaryData:Zr}),nt=et.finalSummary;(0,O.Z)(function(){ye&&pn()});var Ln={loading:Mn},rt=(0,F.Z)(function(tt,Ur,Fr,at){var Kr;(q.sortMode==="service"||q.sortMode==="service-all")&&(Qr({filter:Ur,sorter:Fr}),pn()),(Kr=q.onChange)===null||Kr===void 0||Kr.call(q,tt,Ur,Fr,at)});return ur({ref:ae,rootElemRef:ce,searchRef:wr,requestParamsRef:Yr,requestExtraParamsRef:Jr,searchValueRef:me,dataSource:Nr,updateDataSource:Hr,updateSummaryData:Vr,updateScrollY:$r,openSettingModal:je,runRequest:pn}),(0,i.jsx)(Q.Provider,{value:{locale:Ie},children:(0,i.jsxs)("div",{ref:ce,className:se,style:oe,children:[ge==null?void 0:ge(Ln),Xr,ne==null?void 0:ne(Ln),qr,w==null?void 0:w(Ln),(0,i.jsx)(I.Z,t()(t()({tableLayout:"fixed"},q),{},{className:Rr(q.className,a.table),columns:Br,dataSource:Nr,loading:t()({spinning:Mn},Mr(q==null?void 0:q.loading)?q.loading:void 0),scroll:t()({scrollToFirstRowOnChange:!0,x:"max-content",y:zr},q==null?void 0:q.scroll),summary:nt,pagination:Gr,onChange:rt})),le==null?void 0:le(Ln),Se]})})},Ar=(0,p.forwardRef)(Lr),jr=Ar},74465:function(G,c,e){e.r(c);var _=e(97857),t=e.n(_),v=e(9686);c.default=t()(t()({},v.default),{},{SearchTable:{serialColumnName:"Rank",actionColumnName:"Actions",more:"More",paginationTotal:"Showing ${start} to ${end} of ${total} entries",settingTips:"Columns Setting",settingModalTitle:"Columns Setting",settingModalOk:"Ok",settingModalReset:"Reset Current Setting",settingModalResetDefault:"Restore Defaults",settingModalColumnEnum:["Name","Display","Width","Fixed","Sort"],settingModalColumnSortEnum:["left","right","-"],longTextModalLabel:"All",longTextModalTitle:"All"}})},88442:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(63917);const t=[{value:"SchemaRender",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u5957 ",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u7B80\u5355",paraId:0,tocIndex:1},{value:"\uFF0C\u4F46\u53C8\u8FFD\u6C42 ",paraId:0,tocIndex:1},{value:"\u7075\u6D3B",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u53EF\u9AD8\u5B9A",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u597D\u7528\u7684",paraId:0,tocIndex:1},{value:" \u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848\uFF0C\u65E8\u5728\u6C89\u6DC0\u89E3\u51B3\u5E38\u89C1\u8868\u5355\u6848\u4F8B\u7684\u6E32\u67D3\u5E93\uFF0C\u4E0E\u76F8\u5173\u7684\u901A\u7528\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u5347\u7814\u53D1\u6548\u7387\u3002",paraId:0,tocIndex:1},{value:"\u5185\u5BB9\u76EE\u5F55\uFF1A",paraId:1,tocIndex:1},{value:"Core",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6E32\u67D3\u5E93\u5185\u6838\uFF0C\u901A\u8FC7\u4E00\u5957\u7B80\u6613\u7684 ",paraId:2,tocIndex:1},{value:"JSON Schema",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\u51FA\u4E00\u5957\u8868\u5355\uFF0C\u5185\u6838\u4E3B\u8981\u5904\u7406 Schema \u534F\u8BAE\u3001\u6E32\u67D3\u5668\u7F16\u6392\u3001\u903B\u8F91\u8054\u52A8\u3001\u6821\u9A8C\u80FD\u529B\u7B49\uFF0C\u652F\u6301 SSR(Server-Side Rendering)\u3002",paraId:2,tocIndex:1},{value:"FormRender",paraId:2,tocIndex:1},{value:": \u57FA\u4E8E Core + ",paraId:2,tocIndex:1},{value:"Antd",paraId:2,tocIndex:1},{value:" \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u8868\u5355\u6E32\u67D3\u5E93\u3002",paraId:2,tocIndex:1},{value:"Search",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:2,tocIndex:1},{value:"SearchTable",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u3002",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u9879\u76EE\u662F\u57FA\u4E8E React \u6280\u672F\u6808\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u540E\u7F00\u90FD\u52A0\u4E86 ",paraId:4},{value:"-react",paraId:4},{value:" \u5B57\u773C\uFF0C\u540E\u7EED\u53EF\u80FD\u4F1A\u5C06 Core \u62BD\u79BB\u6210\u4E0D\u4F9D\u8D56\u4E8E\u6280\u672F\u6808\u7684\u7EAF JavaScript \u9879\u76EE\uFF0C\u4EE5\u4FBF\u652F\u6301\u4EFB\u4F55\u6280\u672F\u6846\u67B6\u3002",paraId:4},{value:"FormRender\u3001Search \u6CA1\u6709\u5F88\u597D\u7684\u652F\u6301 SSR\uFF0C\u5982\u679C\u662F Next.js \u9879\u76EE\uFF0C\u53EF\u4EE5\u52A8\u6001\u5BFC\u5165\u5E76\u914D\u7F6E ssr \u4E3A\u4E0D\u542F\u7528\uFF0C\u5982\u4E0B\u793A\u4F8B\u3002",paraId:5},{value:`import dynamic from 'next/dynamic'

const FormRender = dynamic(() => import('@schema-render/form-render-react'), {
  ssr: false,
})
`,paraId:6},{value:"\u6E32\u67D3\u5185\u6838\u5FC5\u987B\u7EC4\u88C5 ",paraId:7,tocIndex:2},{value:"itemLayout",paraId:7,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:7,tocIndex:2},{value:"Renderers",paraId:7,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u6765\u5B9E\u73B0\u4E00\u4E2A\u6E32\u67D3\u5E93\uFF0C\u7136\u540E\u901A\u8FC7 JSON Schema \u9A71\u52A8\u6E32\u67D3\u51FA\u6240\u9700\u7684\u8868\u5355\u3002",paraId:7,tocIndex:2},{value:"\u7279\u70B9\uFF1A\u534F\u8BAE\u9A71\u52A8\u3001\u7B80\u6D01\u6613\u7528\u3001\u9AD8\u53EF\u5B9A\u5236\u3001\u8F7B\u91CF\u7EA7\u3002",paraId:8,tocIndex:2},{value:"\u534F\u8BAE\u9A71\u52A8",paraId:9,tocIndex:2},{value:"\uFF1A\u901A\u8FC7\u7F16\u5199\u4E00\u4EFD\u7B80\u6613\u7684 JSON Schema \u6765\u5B9E\u73B0\u5185\u5BB9\u7684\u6E32\u67D3\uFF0C\u53C2\u8003",paraId:9,tocIndex:2},{value:"\u5FEB\u901F\u4E0A\u624B",paraId:10,tocIndex:2},{value:"\u3002",paraId:9,tocIndex:2},{value:"\u7B80\u6D01\u6613\u7528",paraId:9,tocIndex:2},{value:"\uFF1A\u4EC1\u8005\u89C1\u4EC1\u667A\u8005\u89C1\u667A\uFF0C\u7B14\u8005\u4EE5\u4E3A\u662F\u6BD4\u8F83\u8A00\u7B80\u610F\u8D45\u3001\u6613\u7528\u7684\uFF0C\u5982\u540C\u5185\u90E8\u6E90\u7801\u4E00\u6837\uFF0C\u5316\u7E41\u4E3A\u7B80\uFF0C\u65E0\u5FC5\u8981\u4E0D\u589E\u5B9E\u4F53\u3002",paraId:9,tocIndex:2},{value:"\u9AD8\u53EF\u5B9A\u5236",paraId:9,tocIndex:2},{value:"\uFF1A\u901A\u8FC7\u914D\u7F6E\u4E0E\u7EC4\u88C5 layout\u3001itemLayout\u3001renderers \u7B49\u53EF\u4EE5\u6309\u9700\u5B9E\u73B0\u4E00\u4E2A\u8D34\u5408\u4E1A\u52A1\u81EA\u8EAB\u7684\u6E32\u67D3\u5E93\uFF0C\u5982 FormRender\u3002",paraId:9,tocIndex:2},{value:"\u8F7B\u91CF\u7EA7",paraId:9,tocIndex:2},{value:"\uFF1A\u8D44\u6E90\u5305\u5927\u5C0F\u4EC5 17.6k, gzip 6.5k",paraId:9,tocIndex:2}]},87351:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(59869);const t=[{value:`npm install @schema-render/core-react --save
`,paraId:0,tocIndex:1},{value:"\u6B65\u9AA4\u4E00\uFF1A",paraId:1,tocIndex:2},{value:" \u9700\u8981\u5148\u7EC4\u88C5\u5FC5\u987B\u7684\u90E8\u4EF6 ",paraId:1,tocIndex:2},{value:"itemLayout",paraId:1,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:1,tocIndex:2},{value:"Renderers",paraId:1,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4F7F Core \u8FD0\u884C\u5B8C\u6574\u3002",paraId:1,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:": \u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:2},{value:"Renderers",paraId:2,tocIndex:2},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u8868\u5355\u9879\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C",paraId:2,tocIndex:2},{value:"schema \u534F\u8BAE",paraId:2,tocIndex:2},{value:" \u7684 ",paraId:2,tocIndex:2},{value:"renderType",paraId:2,tocIndex:2},{value:" \u5B57\u6BB5\u6307\u5411\u5176\u540D\u79F0\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u6E32\u67D3\u5668 Renderer",paraId:4,tocIndex:2},{value:"\u6B65\u9AA4\u4E8C\uFF1A",paraId:5,tocIndex:2},{value:" \u7136\u540E\u901A\u8FC7\u58F0\u660E ",paraId:5,tocIndex:2},{value:"Schema \u534F\u8BAE",paraId:5,tocIndex:2},{value:" \u6765\u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u6837\u7684\u8868\u5355\u3002",paraId:5,tocIndex:2},{value:"\u534F\u8BAE\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:6,tocIndex:2},{value:"\u534F\u8BAE\u4ECB\u7ECD Schema",paraId:7,tocIndex:2},{value:"\u6B65\u9AA4\u4E09\uFF1A",paraId:8,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:2},{value:"onChange",paraId:8,tocIndex:2},{value:" \u4E8B\u4EF6\u83B7\u53D6\u8868\u5355\u7684\u6574\u4F53\u6570\u636E\u3002",paraId:8,tocIndex:2},{value:"\u4E8B\u4EF6\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:9,tocIndex:2},{value:"\u6570\u636E\u56DE\u8C03 ChangeEvent",paraId:10,tocIndex:2},{value:"\u6B65\u9AA4\u56DB\uFF1A",paraId:11,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:11,tocIndex:2},{value:"value",paraId:11,tocIndex:2},{value:" \u53C2\u6570\u5B9E\u73B0\u8868\u5355\u6570\u636E\u81EA\u5DF1\u63A7\u5236\u3002",paraId:11,tocIndex:2},{value:"\u53C2\u8003\u9605\u8BFB\uFF1A",paraId:12,tocIndex:2},{value:"\u72B6\u6001\u53D7\u63A7\u4E0E\u975E\u53D7\u63A7",paraId:12,tocIndex:2},{value:"\u6B65\u9AA4\u4E00\u52A0\u6B65\u9AA4\u4E8C",paraId:13,tocIndex:3},{value:"\u589E\u52A0\u6B65\u9AA4\u4E09",paraId:14,tocIndex:4}]},43504:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(76777);const t=[{value:"\u57FA\u7840\u534F\u8BAE\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u9879\u7684\u57FA\u7840\u529F\u80FD\u3002",paraId:0,tocIndex:2},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:1,tocIndex:3},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:2,tocIndex:4},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:3,tocIndex:5},{value:`\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6E32\u67D3\u4E3B\u4F53\u5185\u5BB9\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002
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
`,paraId:27,tocIndex:17},{value:"\u7ED9\u8868\u5355\u9879\u8BBE\u7F6E\u6837\u5F0F\uFF0C\u540C ",paraId:28,tocIndex:18},{value:"className",paraId:28,tocIndex:18},{value:"\u3002",paraId:28,tocIndex:18},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u5360\u7528\u7684\u6805\u683C\u5BBD\u5EA6\u3002",paraId:29,tocIndex:19},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:30,tocIndex:19},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:31,tocIndex:19},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002",paraId:32,tocIndex:20},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:33,tocIndex:20},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:34,tocIndex:20},{value:"\u6570\u636E\u6821\u9A8C\u534F\u8BAE\u901A\u8FC7 ",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u5173\u952E\u5B57\u5B9A\u4E49\uFF0C",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u89C4\u5219\u662F\u501F\u9274 async-validator API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:35,tocIndex:21},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:36,tocIndex:21},{value:"type",paraId:36,tocIndex:21},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:36,tocIndex:21},{value:"\u540D\u79F0",paraId:37,tocIndex:21},{value:"\u8BF4\u660E",paraId:37,tocIndex:21},{value:"\u7C7B\u578B",paraId:37,tocIndex:21},{value:"type",paraId:37,tocIndex:21},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"required",paraId:37,tocIndex:21},{value:"\u662F\u5426\u5FC5\u586B",paraId:37,tocIndex:21},{value:"boolean",paraId:37,tocIndex:21},{value:"min",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"max",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"len",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"pattern",paraId:37,tocIndex:21},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"validator",paraId:37,tocIndex:21},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"message",paraId:37,tocIndex:21},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"\u793A\u4F8B",paraId:38,tocIndex:21},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:39},{value:"\u6821\u9A8C\u5668 Validator",paraId:40},{value:"\u534F\u8BAE\u4FDD\u7559\u5173\u952E\u5B57\u53EF\u80FD\u4F1A\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u4F7F\u7528\uFF0C\u4E3A\u4E86\u907F\u514D\u51B2\u7A81\uFF0C\u5E94\u5F53\u4E0D\u5360\u7528\uFF1B\u4FDD\u7559\u5173\u952E\u5B57\u5217\u8868\u5982\u4E0B",paraId:41,tocIndex:22},{value:"type",paraId:42,tocIndex:22},{value:": \u5B9A\u4E49\u5F53\u524D\u8868\u5355\u9879\u5BF9\u5E94\u7684\u7EAF ",paraId:42,tocIndex:22},{value:"JavaScript",paraId:42,tocIndex:22},{value:" \u6570\u636E\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:42,tocIndex:22},{value:"string",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"number",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"object",paraId:42,tocIndex:22},{value:" \u7B49\u3002",paraId:42,tocIndex:22}]},12157:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(84894);const t=[{value:"layout",paraId:0,tocIndex:0},{value:" \u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u4E4B\u95F4",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u6A21\u5F0F\u3002",paraId:0,tocIndex:0},{value:"normal",paraId:1,tocIndex:0},{value:": \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u6807\u51C6\u6805\u683C\u5E03\u5C40\uFF0C\u5C06\u5BB9\u5668\u5747\u5206\u4E3A ",paraId:1,tocIndex:0},{value:"24",paraId:1,tocIndex:0},{value:" \u4EFD\uFF0C\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\uFF08\u5373 24 \u4EFD\uFF09\uFF1B\u5F53\u7136\u53EF\u4EE5\u5728 Schema \u91CC\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"span",paraId:1,tocIndex:0},{value:" \u5B57\u6BB5\u8BBE\u7F6E\u7279\u5B9A\u7684\u4EFD\u6570\uFF08\u5BBD\u5EA6\uFF09\u3002",paraId:1,tocIndex:0},{value:"autoFill",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0C",paraId:1,tocIndex:0},{value:"CSS Grid",paraId:1,tocIndex:0},{value:" autoFill \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"autoFit",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0CCSS Grid autoFit \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\u3002",paraId:2,tocIndex:1},{value:"\u901A\u8FC7\u5728 ",paraId:3,tocIndex:2},{value:"Schema",paraId:3,tocIndex:2},{value:" \u4E0A\u6307\u5B9A ",paraId:3,tocIndex:2},{value:"span",paraId:3,tocIndex:2},{value:" \u548C ",paraId:3,tocIndex:2},{value:"spanStart",paraId:3,tocIndex:2},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:3,tocIndex:2},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:2},{value:"\u548C",paraId:3,tocIndex:2},{value:"\u4F4D\u7F6E",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u5BBD\u5EA6\uFF0C\u4EE5\u4EFD\u8BA1\u7B97\u3002",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u4ECE\u7B2C\u51E0\u4E2A\u6805\u683C\u5F00\u59CB\uFF0C\u901A\u5E38\u5728\u9700\u8981\u6362\u884C\u7684\u65F6\u5019\u4F7F\u7528\u3002",paraId:4,tocIndex:2},{value:"\u5F53 ",paraId:4,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:" \u548C ",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:" \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09",paraId:4,tocIndex:2},{value:"\u6839\u636E\u8BBE\u7F6E\u7684 ",paraId:5,tocIndex:3},{value:"layoutMinMax",paraId:5,tocIndex:3},{value:"\uFF08\u5373 ",paraId:5,tocIndex:3},{value:"Grid minmax",paraId:5,tocIndex:3},{value:"\uFF09\u4E0E",paraId:5,tocIndex:3},{value:"\u8868\u5355\u6839\u5143\u7D20",paraId:5,tocIndex:3},{value:"\u5BBD\u5EA6\u52A8\u6001\u8BA1\u7B97\u5E03\u5C40\u5BBD\u5EA6\uFF0C\u52A8\u6001\u6392\u5217\u4E0E\u6362\u884C\u3002",paraId:5,tocIndex:3},{value:"autoFit",paraId:6,tocIndex:4},{value:" \u4E0E ",paraId:6,tocIndex:4},{value:"autoFill",paraId:6,tocIndex:4},{value:" \u96F7\u540C\uFF0C\u7EC6\u5FAE\u7684\u5DEE\u522B\u8BF7\u67E5\u770B ",paraId:6,tocIndex:4},{value:"\u8FD9\u7BC7\u6587\u7AE0\u7684\u5BF9\u6BD4",paraId:6,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"\u4E0D\u7BA1\u662F ",paraId:7,tocIndex:5},{value:"autoFill",paraId:7,tocIndex:5},{value:" \u8FD8\u662F ",paraId:7,tocIndex:5},{value:"autoFit",paraId:7,tocIndex:5},{value:" \u90FD\u53EF\u4EE5\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"layoutMinMax",paraId:7,tocIndex:5},{value:" \u8BBE\u7F6E\u8868\u5355\u9879\u5BBD\u5EA6\u7684\u6700\u5C0F\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:7,tocIndex:5},{value:"['320px', '1fr']",paraId:7,tocIndex:5},{value:"\u3002",paraId:7,tocIndex:5},{value:"\u4EE5\u4E0B\u793A\u4F8B\u8BBE\u7F6E\u6700\u5C0F\u6700\u5927\u90FD\u4E3A ",paraId:8,tocIndex:5},{value:"230px",paraId:8,tocIndex:5},{value:" \u7684\u5E03\u5C40\u3002",paraId:8,tocIndex:5},{value:"layoutMinMax",paraId:9},{value:" \u5185\u7684\u503C\u53EF\u4EE5\u662F ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F ",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\uFF0C",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6210\u4EE5 ",paraId:9},{value:"px",paraId:9},{value:" \u4E3A\u5355\u4F4D\u7684 ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\u503C\u3002",paraId:9}]},14569:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(23382);const t=[{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u7528\u4E8E\u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u5185\u90E8",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\u3002",paraId:0,tocIndex:0},{value:"\u5E38\u89C1\u7684\u5E03\u5C40\u7ED3\u6784\u6709 2 \u79CD\uFF1A\u7EB5\u5411\u5E03\u5C40\uFF08Vertical\uFF09\u548C\u6A2A\u5411\u5E03\u5C40\uFF08Horizontal\uFF09\uFF0C\u4E0B\u9762\u7684\u7AE0\u8282\u5C06\u4E3E\u4F8B\u5B9E\u73B0\u8FD9\u4E24\u79CD\u5E03\u5C40\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"IOpenItemLayoutParams",paraId:2,tocIndex:3},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"schema",paraId:3,tocIndex:3},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:3,tocIndex:3},{value:"ISchema",paraId:3,tocIndex:3},{value:"required",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"readonly",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"validator",paraId:3,tocIndex:3},{value:"\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F\uFF0C\u5305\u542B ",paraId:3,tocIndex:3},{value:"status(\u72B6\u6001)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"message(\u63D0\u793A\u4FE1\u606F)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"extra(\u989D\u5916\u6570\u636E)",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"locale",paraId:3,tocIndex:3},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"userCtx",paraId:3,tocIndex:3},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"body",paraId:3,tocIndex:3},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"prefixClassNames",paraId:3,tocIndex:3},{value:"\u5BF9 ",paraId:3,tocIndex:3},{value:"classnames",paraId:3,tocIndex:3},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:3,tocIndex:3},{value:"(...args: classNames.ArgumentArray) => string",paraId:3,tocIndex:3}]},49116:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(86131);const t=[{value:"\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"prefixCls",paraId:0,tocIndex:0},{value:" \u5B9A\u5236\u6837\u5F0F\u7C7B\u540D\u524D\u7F00",paraId:0,tocIndex:0},{value:"\u6253\u5F00 DevTools \u9762\u677F\u67E5\u770B DOM \u5143\u7D20\u7C7B\u540D",paraId:1}]},44272:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(15208);const t=[{value:"\u5F53\u8868\u5355\u9879\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8868\u5355\u5168\u91CF\u6570\u636E\u3002",paraId:0,tocIndex:1},{value:"onChange",paraId:1},{value:" \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\uFF0C\u5305\u542B\u5982\u4E0B\u6570\u636E\uFF1A",paraId:1},{value:"path",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u7684\u8868\u5355\u9879\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C",paraId:2},{value:"array",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"sPath",paraId:2},{value:": \u5B8C\u6574\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32\u5316\u8868\u793A\uFF0C",paraId:2},{value:"string",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"value",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u7684\u6570\u636E\u503C\u3002",paraId:2},{value:"extra",paraId:2},{value:": \u643A\u5E26\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u4EFB\u610F\u6570\u636E\u683C\u5F0F\u3002",paraId:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4E0E ",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:" \u8C03\u7528\u65F6\u673A\u4E00\u81F4\uFF0C\u53EA\u662F ",paraId:3,tocIndex:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4EC5\u5305\u542B\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\u3002",paraId:3,tocIndex:2},{value:"\u9002\u7528\u4E8E\u4E0D\u9700\u8981\u63A5\u7BA1\u6574\u4E2A\u8868\u5355\u6570\u636E\uFF08value\uFF09\uFF0C\u53C8\u9700\u8981\u76D1\u542C\u67D0\u4E2A\u8868\u5355\u9879\u53D8\u5316\u800C\u540E\u5904\u7406\u4E00\u4E9B\u4E8B\u60C5\u7684\u573A\u666F\u3002",paraId:4,tocIndex:2},{value:"\u989D\u5916\u4FE1\u606F\u662F\u6E32\u67D3\u5668\u5728\u53D1\u751F ",paraId:5,tocIndex:3},{value:"change",paraId:5,tocIndex:3},{value:" \u4E8B\u4EF6\u65F6\u544A\u77E5\u7ED9\u5916\u9762\u7684\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u5904\u7406\u7279\u6B8A\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:5,tocIndex:3}]},19520:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(233);const t=[{value:"\u6570\u636E\u8054\u52A8\u6709\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5206\u522B\u662F ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:" \u4E24\u79CD\u65B9\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u5728\u89E6\u53D1 ",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:" \u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7\u6539\u53D8\u6570\u636E\u5B9E\u73B0\u3002",paraId:1,tocIndex:1},{value:"watch",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u662F ",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u7684\u4E00\u79CD\u4FBF\u6377\u5199\u6CD5\uFF0C\u907F\u514D\u5927\u91CF ",paraId:2,tocIndex:2},{value:"if",paraId:2,tocIndex:2},{value:" \u8BED\u53E5\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u6E05\u6670\u5EA6\u4EE5\u53CA\u7814\u53D1\u6548\u7387\u3002",paraId:2,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:" \u5339\u914D\u7684\u662F ",paraId:3,tocIndex:2},{value:"sPath",paraId:3,tocIndex:2},{value:" \u8DEF\u5F84\u503C\uFF0C\u5982\u679C\u662F\u5D4C\u5957\u8DEF\u5F84\u503C\uFF0C\u5219\u4F7F\u7528\u70B9 ",paraId:3,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:" \u62FC\u63A5\u8868\u793A\uFF0C\u5982 ",paraId:3,tocIndex:2},{value:"objectX.width",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"\u8054\u52A8\u5BF9\u8C61\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:3},{value:"extra",paraId:4,tocIndex:3},{value:" \u5C5E\u6027\u6765\u5904\u7406\u3002",paraId:4,tocIndex:3}]},53671:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(39008);const t=[{value:"\u6E32\u67D3\u5668\u662F\u4E3B\u8981\u5185\u5BB9\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C5E\u6027\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EF\u72EC\u7ACB\u5B9A\u4E49\u5E03\u5C40\u7ED3\u6784\uFF08\u4E0D\u53D7\u9650\u4E8E itemLayout \u5E03\u5C40\uFF09\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"readonlyComponent",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"readonlyFormItem",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6\u6CE8\u518C\u6D41\u7A0B\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:"component",paraId:3,tocIndex:1},{value:" \u6A21\u5F0F\u662F\u5E38\u7528\u7684\u5B9A\u4E49\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u7F16\u5199\u6807\u9898\u4E0E\u5185\u5BB9\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u7531 ",paraId:3,tocIndex:1},{value:"itemLayout",paraId:3,tocIndex:1},{value:" \u7EDF\u4E00\u7BA1\u7406\u3002",paraId:3,tocIndex:1},{value:"\u4E0B\u9762\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"component",paraId:4,tocIndex:1},{value:" \u6A21\u5F0F\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BC4\u5206\u6E32\u67D3\u5668\u3002",paraId:4,tocIndex:1},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"IOpenComponentParams",paraId:5,tocIndex:2},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:5,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:2},{value:"\u8BF4\u660E",paraId:6,tocIndex:2},{value:"\u7C7B\u578B",paraId:6,tocIndex:2},{value:"schema",paraId:6,tocIndex:2},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:6,tocIndex:2},{value:"ISchema",paraId:6,tocIndex:2},{value:"value",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:6,tocIndex:2},{value:"any",paraId:6,tocIndex:2},{value:"rootValue",paraId:6,tocIndex:2},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"path",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:6,tocIndex:2},{value:"array",paraId:6,tocIndex:2},{value:"sPath",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:6,tocIndex:2},{value:"string",paraId:6,tocIndex:2},{value:"required",paraId:6,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"disabled",paraId:6,tocIndex:2},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"readonly",paraId:6,tocIndex:2},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"locale",paraId:6,tocIndex:2},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"userCtx",paraId:6,tocIndex:2},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"objectStyle",paraId:6,tocIndex:2},{value:"\u5BF9\u8C61\u7C7B\u578B\u6837\u5F0F",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"validator",paraId:6,tocIndex:2},{value:"\u6821\u9A8C\u5668\u4FE1\u606F\uFF0C\u5305\u542B\u6821\u9A8C\u72B6\u6001\u3001\u63D0\u793A\u6D88\u606F\u4E0E\u9644\u52A0\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"onChange",paraId:6,tocIndex:2},{value:"\u8868\u5355\u9879\u503C\u56DE\u8C03\u4E8B\u4EF6",paraId:6,tocIndex:2},{value:"Function",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: any, options?: IOpenChangeOptions) => void",paraId:7,tocIndex:3},{value:"options",paraId:7,tocIndex:3},{value:` \u53EF\u9009\u53C2\u6570\u5982\u4E0B\uFF1A
`,paraId:7,tocIndex:3},{value:"triggerValidator",paraId:8,tocIndex:3},{value:": \u662F\u5426\u89E6\u53D1\u6821\u9A8C\u5668\uFF0C",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:" \u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"extra",paraId:8,tocIndex:3},{value:": \u643A\u5E26\u7684\u989D\u5916\u6570\u636E\uFF0C\u4EFB\u610F\u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"formItem",paraId:9,tocIndex:4},{value:" \u6A21\u5F0F\u9002\u7528\u4E8E\u9700\u8981\u7A81\u7834 ",paraId:9,tocIndex:4},{value:"itemLayout",paraId:9,tocIndex:4},{value:" \u7684\u9650\u5236\uFF0C\u72EC\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7684\u573A\u666F\u3002",paraId:9,tocIndex:4},{value:"\u540C\u6837\u4EE5\u8BC4\u5206\u6E32\u67D3\u5668\u4E3A\u4F8B\uFF0C\u5C06\u8868\u5355\u9879\u7684\u6807\u9898\u52A0\u7C97\u52A0\u7EA2\u6765\u5C55\u793A\u3002",paraId:10,tocIndex:4},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:5},{value:"IOpenFormItemParams",paraId:11,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:11,tocIndex:5},{value:"\u76EE\u524D ",paraId:12,tocIndex:5},{value:"formItem",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E0E ",paraId:12,tocIndex:5},{value:"component",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E00\u81F4\u3002",paraId:12,tocIndex:5},{value:"\u7F16\u5199\u53EA\u8BFB\u6001\u903B\u8F91\u6709 2 \u79CD\u65B9\u5F0F\uFF1A",paraId:13,tocIndex:6},{value:"\u7B2C\u4E00\u79CD\uFF0C\u5728 ",paraId:14,tocIndex:6},{value:"component",paraId:14,tocIndex:6},{value:" \u7EC4\u4EF6\u91CC\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonly",paraId:14,tocIndex:6},{value:" \u72B6\u6001\u533A\u5206\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5B58\u5728 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\uFF0C\u5E76\u4E14\u5728\u590D\u6742\u7EC4\u4EF6\u91CC\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"\u7B2C\u4E8C\u79CD\uFF0C\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:14,tocIndex:6},{value:" \u58F0\u660E\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\u4F7F\u5F97\u67B6\u6784\u66F4\u6E05\u6670\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u7EC4\u4EF6\u907F\u514D\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:15,tocIndex:6},{value:" \u53C2\u6570\u4E0E ",paraId:15,tocIndex:6},{value:"component",paraId:15,tocIndex:6},{value:" \u4E00\u81F4\u3002",paraId:15,tocIndex:6},{value:"readonlyFormItem",paraId:16,tocIndex:7},{value:" \u4E0E ",paraId:16,tocIndex:7},{value:"readonlyComponent",paraId:16,tocIndex:7},{value:" \u6A21\u5F0F\u4E00\u81F4\uFF0C\u53C2\u6570\u4E0E ",paraId:16,tocIndex:7},{value:"formItem",paraId:16,tocIndex:7},{value:" \u4E00\u81F4\u3002",paraId:16,tocIndex:7},{value:"\u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\uFF1B\u8BE6\u60C5\u89C1 ",paraId:17,tocIndex:8},{value:"Renderer Validator",paraId:18,tocIndex:8},{value:"\u3002",paraId:17,tocIndex:8}]},71905:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(37424);const t=[{value:"\u901A\u8FC7\u521B\u5EFA\u4EE5 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u5F00\u5934\u7684\u6E32\u67D3\u5668\u53EF\u4EE5\u5236\u4F5C\u5D4C\u5957\u7684\u7ED3\u6784\u8868\u5355\uFF0C\u652F\u6301\u591A\u79CD\u4E0D\u540C\u529F\u80FD\u7684 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u6E32\u67D3\u5668\u540C\u65F6\u5B58\u5728\u3002",paraId:0,tocIndex:0},{value:"\u5212\u91CD\u70B9\uFF1A",paraId:1,tocIndex:0},{value:"Schema \u534F\u8BAE\u6A21\u578B\u7684\u5B50\u8282\u70B9\u901A\u8FC7\u8C03\u7528 ",paraId:2,tocIndex:0},{value:"RendererIterator",paraId:2,tocIndex:0},{value:" \u6E32\u67D3\u5668\u8FED\u4EE3\u5668\u6765\u6E32\u67D3\u3002",paraId:2,tocIndex:0},{value:"\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 ",paraId:2,tocIndex:0},{value:"objectStyle",paraId:2,tocIndex:0},{value:" \u6837\u5F0F\uFF0C\u4EE5\u7EE7\u627F\u5185\u6838\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40\u3002",paraId:2,tocIndex:0},{value:`<div style={objectStyle}>
  <RendererIterator schema={schema} path={path} />
</div>
`,paraId:3,tocIndex:0},{value:"\u6309\u89C4\u8303\u7F16\u5199\u7684\u5BF9\u8C61\u7ED3\u6784 Schema \u662F\u652F\u6301\u5185\u7F6E\u81EA\u52A8\u6821\u9A8C\u7684\uFF0C\u6821\u9A8C\u529F\u80FD\u8BE6\u89C1 ",paraId:4,tocIndex:2},{value:"\u6821\u9A8C\u5668 Validator",paraId:5,tocIndex:2},{value:" \u7AE0\u8282\u3002",paraId:4,tocIndex:2}]},73148:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(48966);const t=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},12875:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(92436);const t=[{value:"\u6821\u9A8C\u529F\u80FD\u6709\u5982\u4E0B\u4E09\u79CD\u65B9\u5F0F\u5B9A\u4E49\uFF1A",paraId:0,tocIndex:0},{value:"Schema Rules",paraId:1,tocIndex:0},{value:": Schema \u534F\u8BAE ",paraId:1,tocIndex:0},{value:"rules",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Global Validators",paraId:1,tocIndex:0},{value:": \u5168\u5C40 ",paraId:1,tocIndex:0},{value:"validators",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Renderer Validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668 ",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Schema Rules \u89C4\u5219\u901A\u8FC7\u5728 Schema \u534F\u8BAE\u58F0\u660E ",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\uFF0C",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u89C4\u5219\u662F\u501F\u9274 ",paraId:2,tocIndex:1},{value:"async-validator",paraId:2,tocIndex:1},{value:" API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:2,tocIndex:1},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:3,tocIndex:1},{value:"\u540D\u79F0",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"type",paraId:4,tocIndex:1},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"required",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:1},{value:"boolean",paraId:4,tocIndex:1},{value:"min",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"max",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"len",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"pattern",paraId:4,tocIndex:1},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"validator",paraId:4,tocIndex:1},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"message",paraId:4,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"\u89E6\u53D1\u65F6\u673A\uFF1A\u6BCF\u6B21\u6E32\u67D3\u5668\u7EC4\u4EF6 ",paraId:5,tocIndex:1},{value:"onChange",paraId:5,tocIndex:1},{value:" \u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u6821\u9A8C\u673A\u5236\uFF0C\u5E76\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u3002",paraId:5,tocIndex:1},{value:"\u5982\u679C\u5E0C\u671B ",paraId:6},{value:"onChange",paraId:6},{value:" \u65F6\u4E0D\u89E6\u53D1\u6821\u9A8C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684 ",paraId:6},{value:"triggerValidator",paraId:6},{value:" \u4E3A ",paraId:6},{value:"false",paraId:6},{value:" \u5B9E\u73B0\uFF0C\u793A\u4F8B\uFF1A",paraId:6},{value:"onChange('xxx', { triggerValidator: false })",paraId:6},{value:"\u3002",paraId:6},{value:"1\u3001Schema Rules \u89C4\u5219\u91CC\u7684 validator \u5B57\u6BB5\u4E0E async-validator API \u4E0D\u5BF9\u5E94\u3002",paraId:7},{value:`
2\u3001Schema Rules \u548C Global Validators \u89C4\u5219\u91CC\u7684 validator \u5C5E\u6027\u4E0D\u5141\u8BB8\u518D\u6B21\u58F0\u660E `,paraId:7},{value:"validator",paraId:7},{value:" \u5C5E\u6027\uFF08\u5185\u90E8\u4F1A\u5FFD\u7565\uFF09\uFF0C\u907F\u514D\u9677\u5165\u5FAA\u73AF\u8C03\u7528\u3002",paraId:7},{value:"\u793A\u4F8B",paraId:8},{value:"Global Validators \u662F\u5168\u5C40\u6821\u9A8C\u5668\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u590D\u7528\u901A\u7528\u7684\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6821\u9A8C\u5668\u6CE8\u518C\u5728\u5168\u5C40 ",paraId:9,tocIndex:2},{value:"validators",paraId:9,tocIndex:2},{value:" \u91CC\uFF0C\u7136\u540E\u5728 schema \u91CC\u901A\u8FC7 ",paraId:9,tocIndex:2},{value:"rules: [{ validator: 'name' }]",paraId:9,tocIndex:2},{value:" \u6765\u4F7F\u7528\u3002",paraId:9,tocIndex:2},{value:"\u901A\u8FC7\u6E32\u67D3\u5668\u7684 ",paraId:10,tocIndex:3},{value:"validator",paraId:10,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u6346\u7ED1\u5728\u4E00\u8D77\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:10,tocIndex:3},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u5148\u6821\u9A8C\u8F93\u5165\u5185\u5BB9\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u6821\u9A8C\u901A\u8FC7\u624D\u5141\u8BB8\u63D0\u4EA4\u6570\u636E\u3002",paraId:11,tocIndex:4},{value:"Global Validators \u548C Renderer Validator \u7684\u5B9A\u4E49\u662F\u4E00\u6837\u7684\uFF0C\u652F\u6301\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF1A",paraId:12,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u4E0E ",paraId:13,tocIndex:5},{value:"Schema Rules",paraId:13,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:13,tocIndex:5},{value:"validator: [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:13,tocIndex:5},{value:"\u3002",paraId:13,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u51FD\u6570\u6821\u9A8C\uFF0C\u51FD\u6570\u53C2\u6570\u5982\u4E0B\u5217\u8868\uFF0C\u7686\u4E3A\u53EA\u8BFB\u5C5E\u6027\u3002",paraId:13,tocIndex:5},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:14,tocIndex:5},{value:"IOpenValidatorParams",paraId:14,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:14,tocIndex:5},{value:"\u53C2\u6570",paraId:15,tocIndex:5},{value:"\u8BF4\u660E",paraId:15,tocIndex:5},{value:"\u7C7B\u578B",paraId:15,tocIndex:5},{value:"schema",paraId:15,tocIndex:5},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:15,tocIndex:5},{value:"ISchema",paraId:15,tocIndex:5},{value:"value",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:15,tocIndex:5},{value:"any",paraId:15,tocIndex:5},{value:"rootValue",paraId:15,tocIndex:5},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"path",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:15,tocIndex:5},{value:"array",paraId:15,tocIndex:5},{value:"sPath",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:15,tocIndex:5},{value:"string",paraId:15,tocIndex:5},{value:"required",paraId:15,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"disabled",paraId:15,tocIndex:5},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"readonly",paraId:15,tocIndex:5},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"locale",paraId:15,tocIndex:5},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"userCtx",paraId:15,tocIndex:5},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u4E09\u79CD\u8FD4\u56DE\u5F62\u6001\uFF1A",paraId:16,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:17,tocIndex:5},{value:"undefined",paraId:17,tocIndex:5},{value:"\uFF0C\u8868\u793A\u6821\u9A8C\u6210\u529F\u3002",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u4E0E ",paraId:17,tocIndex:5},{value:"Schema Rules",paraId:17,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:17,tocIndex:5},{value:"return [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u6807\u51C6\u72B6\u6001\u7ED3\u6784\uFF0C\u5982\u4E0B\u63CF\u8FF0",paraId:17,tocIndex:5},{value:"\u53C2\u6570",paraId:18,tocIndex:5},{value:"\u8BF4\u660E",paraId:18,tocIndex:5},{value:"\u7C7B\u578B",paraId:18,tocIndex:5},{value:"status",paraId:18,tocIndex:5},{value:"\u6821\u9A8C\u72B6\u6001\uFF0C",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" \u9519\u8BEF\uFF0C",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" \u8B66\u544A\uFF0C",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:" \u6210\u529F",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:"message",paraId:18,tocIndex:5},{value:"\u9519\u8BEF\u6216\u8B66\u544A\u72B6\u6001\u65F6\u7684\u63D0\u793A\u4FE1\u606F",paraId:18,tocIndex:5},{value:"string",paraId:18,tocIndex:5},{value:"extra",paraId:18,tocIndex:5},{value:"\u989D\u5916\u6570\u636E",paraId:18,tocIndex:5},{value:"any",paraId:18,tocIndex:5}]},15727:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(86685);const t=[{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u5728\u6700\u9876\u5C42\u76F4\u63A5\u63A7\u5236\u8868\u5355\u7684\u72B6\u6001\uFF0C\u4EE5\u964D\u4F4E\u534F\u8BAE\u63A7\u5236\u7F16\u7801\u6210\u672C\u3002",paraId:0,tocIndex:0},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u6743\u91CD\u5927\u4E8E Schema \u534F\u8BAE\u7684\u72B6\u6001\u63A7\u5236\u3002",paraId:1,tocIndex:0},{value:"\u4EE5\u4E0B\u662F\u5168\u5C40\u72B6\u6001\u63A7\u5236\u53EF\u7528\u7684\u53C2\u6570",paraId:2,tocIndex:0},{value:"disabled",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u7981\u7528",paraId:3,tocIndex:0},{value:"\uFF0C\u7981\u7528\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-disabled",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0},{value:"readonly",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u53EA\u8BFB",paraId:3,tocIndex:0},{value:"\uFF0C\u53EA\u8BFB\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-readonly",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0}]},59865:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(43315);const t=[{value:"\u5F53\u8868\u5355\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u7684\u4F4D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void",paraId:1,tocIndex:0},{value:"\u540D\u79F0",paraId:2,tocIndex:1},{value:"\u63CF\u8FF0",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"paths",paraId:2,tocIndex:1},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" | ",paraId:2,tocIndex:1},{value:"string[]",paraId:2,tocIndex:1},{value:"options",paraId:2,tocIndex:1},{value:"\u9009\u9879\u53C2\u6570\uFF0C\u5982\u4E0B\u8868\u683C",paraId:2,tocIndex:1},{value:"IScrollToOptions",paraId:2,tocIndex:1},{value:"\u540D\u79F0",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"xAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 x \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"yAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 y \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"behavior",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u8FC7\u6E21\u884C\u4E3A",paraId:3,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4 ",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"instant",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"auto",paraId:3,tocIndex:2},{value:"gap",paraId:3,tocIndex:2},{value:"\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u5DEE\u503C\uFF0C\u53EF\u4EE5\u662F\u6B63\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"positionedElement",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20 (\u9700\u8981\u5E26\u5B9A\u4F4D\u5C5E\u6027 position)\uFF0C\u9002\u7528\u4E8E\u975E Core \u6839\u8282\u70B9\u6EDA\u52A8",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"Window",paraId:3,tocIndex:2},{value:"\u65E0",paraId:4,tocIndex:3},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u662F ",paraId:5,tocIndex:4},{value:"Core",paraId:5,tocIndex:4},{value:" \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",paraId:5,tocIndex:4},{value:"scrollTo",paraId:5,tocIndex:4},{value:" \u65B9\u6CD5\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u4F4D\u7F6E\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u8D85\u8FC7 Core \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EA\u9700\u5728 ",paraId:6,tocIndex:5},{value:"scrollTo",paraId:6,tocIndex:5},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:6,tocIndex:5},{value:"positionedElement",paraId:6,tocIndex:5},{value:" \u53C2\u6570\u4E3A\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u5373\u53EF\u3002",paraId:6,tocIndex:5},{value:"\u524D\u7F6E\u6761\u4EF6\uFF1A",paraId:7,tocIndex:5},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u9700\u8981\u662F\u201C\u5B9A\u4F4D\u5143\u7D20\u201D\uFF0C\u5982\u58F0\u660E ",paraId:8,tocIndex:5},{value:"position",paraId:8,tocIndex:5},{value:" \u4E3A\u975E ",paraId:8,tocIndex:5},{value:"static",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u8FD9\u6837\u6307\u5B9A\u7684\u8868\u5355\u9879\u624D\u80FD\u67E5\u627E\u5230\u8BE5\u6EDA\u52A8\u7956\u5148\u5143\u7D20\uFF0C\u624D\u80FD\u83B7\u53D6\u5230\u6B63\u786E\u7684\u8DDD\u79BB\u3002",paraId:8,tocIndex:5},{value:"\u5B9A\u4F4D\u5143\u7D20\uFF1A",paraId:8,tocIndex:5},{value:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent",paraId:8,tocIndex:5},{value:"\u5982\u679C\u8981\u8BA9\u7A97\u53E3\u6EDA\u52A8\uFF0C\u540C\u6837\u7684\u65B9\u5F0F\uFF0C\u53EA\u9700\u5728 ",paraId:9,tocIndex:6},{value:"scrollTo",paraId:9,tocIndex:6},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:9,tocIndex:6},{value:"positionedElement",paraId:9,tocIndex:6},{value:" \u53C2\u6570\u4E3A ",paraId:9,tocIndex:6},{value:"window",paraId:9,tocIndex:6},{value:" \u5373\u53EF\uFF0C\u4E0D\u8FC7\u5185\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB\u662F\u53EA\u8BA1\u7B97\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u56E0\u4E3A ",paraId:9,tocIndex:6},{value:"offsetParent",paraId:9,tocIndex:6},{value:" \u6700\u7EC8\u53EA\u80FD\u5B9A\u4F4D\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u6240\u4EE5\uFF08\u4E5F\u662F\u5E38\u7406\u60C5\u51B5\u4E0B\uFF09body \u548C html \u5143\u7D20\u4E0D\u5E94\u8BE5\u5B58\u5728 margin \u548C padding \u503C\u3002",paraId:9,tocIndex:6}]},63021:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(46715);const t=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"ref",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"validate",paraId:1,tocIndex:0},{value:": \u6821\u9A8C\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"resetError",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\u3002",paraId:1,tocIndex:0},{value:"resetValue",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"setValue",paraId:1,tocIndex:0},{value:": \u8BBE\u7F6E\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getValue",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getRootElement",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:0},{value:"findItem",paraId:1,tocIndex:0},{value:`: \u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u65B9\u6CD5\u5982\u4E0B\u3002
`,paraId:1,tocIndex:0},{value:"getRootElement",paraId:2,tocIndex:0},{value:": \u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:2,tocIndex:0},{value:"scrollTo",paraId:1,tocIndex:0},{value:": \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BE6\u89C1",paraId:1,tocIndex:0},{value:"\u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E ScrollTo",paraId:3,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5982\u6839\u636E\u6821\u9A8C\u7ED3\u679C\u5224\u65AD\u662F\u5426\u63D0\u4EA4\u6570\u636E\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"() => Promise<IOpenValidateResult>",paraId:5,tocIndex:1},{value:"\u65E0",paraId:6,tocIndex:2},{value:"\u540D\u79F0",paraId:7,tocIndex:3},{value:"\u63CF\u8FF0",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"hasError",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u9519\u8BEF",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"hasWarning",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u8B66\u544A",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"errorList",paraId:7,tocIndex:3},{value:"\u9519\u8BEF\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"warningList",paraId:7,tocIndex:3},{value:"\u8B66\u544A\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"\u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\uFF0C\u5982\u6570\u636E\u56DE\u586B\u65F6\uFF0C\u53EF\u7528\u6B64\u65B9\u6CD5\u91CD\u7F6E\u9519\u8BEF\u4FE1\u606F",paraId:8,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:5},{value:"(paths?: string | string[]) => void",paraId:9,tocIndex:5},{value:"\u540D\u79F0",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"paths",paraId:10,tocIndex:6},{value:"\u91CD\u7F6E\u6307\u5B9A\u8DEF\u5F84\u7684\u8868\u5355\u9879\u9519\u8BEF\u63D0\u793A\uFF0C\u6CA1\u6709\u6307\u5B9A\u8DEF\u5F84\u5219\u91CD\u7F6E\u6240\u6709\u8868\u5355\u9879",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:" | ",paraId:10,tocIndex:6},{value:"string[]",paraId:10,tocIndex:6},{value:"\u65E0",paraId:11,tocIndex:7},{value:"\u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:12,tocIndex:9},{value:"\u65E0",paraId:13,tocIndex:10},{value:"\u65E0",paraId:14,tocIndex:11},{value:"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:15,tocIndex:13},{value:"\u7C7B\u578B\uFF1A",paraId:16,tocIndex:13},{value:"() => HTMLDivElement | null",paraId:16,tocIndex:13},{value:"\u65E0",paraId:17,tocIndex:14},{value:"\u6839\u8282\u70B9 DOM \u5143\u7D20\u6216\u7A7A",paraId:18,tocIndex:15},{value:"\u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u4F1A\u63D0\u4F9B\u4E00\u4E9B API \u65B9\u6CD5\u3002",paraId:19,tocIndex:17},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:17},{value:"(paths?: string | string[]) => IRendererInstance | undefined",paraId:20,tocIndex:17},{value:"\u540D\u79F0",paraId:21,tocIndex:18},{value:"\u63CF\u8FF0",paraId:21,tocIndex:18},{value:"\u7C7B\u578B",paraId:21,tocIndex:18},{value:"paths",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:" | ",paraId:21,tocIndex:18},{value:"string[]",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5F00\u653E API \u5982\u4E0B",paraId:22,tocIndex:19},{value:"\u540D\u79F0",paraId:23,tocIndex:19},{value:"\u63CF\u8FF0",paraId:23,tocIndex:19},{value:"\u7C7B\u578B",paraId:23,tocIndex:19},{value:"getRootElement",paraId:23,tocIndex:19},{value:"\u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20",paraId:23,tocIndex:19},{value:"() => HTMLElement | null",paraId:23,tocIndex:19}]},727:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(35786);const t=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},71789:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(69708);const t=[{value:"\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u5F53\u6355\u83B7\u5230\u9519\u8BEF\u7684\u65F6\u5019\u4F1A\u6807\u7EA2\u5C55\u793A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u4EA6\u53EF\u914D\u7F6E\u5982\u4E0B 2 \u4E2A\u53C2\u6570\u81EA\u5B9A\u4E49\u6216\u9690\u85CF\u9519\u8BEF\u63D0\u793A",paraId:0,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"\u51FD\u6570",paraId:1,tocIndex:0},{value:" \u5219\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F",paraId:1,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"silent",paraId:1,tocIndex:0},{value:" \u5219\u4E0D\u63D0\u793A\u9519\u8BEF",paraId:1,tocIndex:0}]},49961:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(96687);const t=[{value:"Core",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},47468:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(85105);const t=[{value:"\u53C2\u89C1",paraId:0,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u7C7B\u540D\u3002",paraId:2,tocIndex:2},{value:"\u8868\u5355\u9ED8\u8BA4\u503C\u3002",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5168\u5C40\u7981\u7528\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:4,tocIndex:4},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u3002",paraId:4,tocIndex:4},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:6,tocIndex:5},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:7,tocIndex:5},{value:"\u3002",paraId:6,tocIndex:5},{value:"\u8868\u5355\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:8,tocIndex:6},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:9,tocIndex:6},{value:"\u3002",paraId:8,tocIndex:6},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u5217\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:10,tocIndex:7},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:11,tocIndex:7},{value:"\u3002",paraId:10,tocIndex:7},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u6700\u5C0F\u5BBD\u5EA6\u4E0E\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53 layout \u4E3A autoFill\u3001autoFit \u65F6\u751F\u6548\uFF0C\u8BE6\u60C5\u89C1",paraId:12,tocIndex:8},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:13,tocIndex:8},{value:"\u3002",paraId:12,tocIndex:8},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u884C\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:14,tocIndex:9},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:15,tocIndex:9},{value:"\u3002",paraId:14,tocIndex:9},{value:"\u56FD\u9645\u5316\uFF0C\u8BE6\u60C5\u89C1",paraId:16,tocIndex:10},{value:"\u56FD\u9645\u5316 Locale",paraId:17,tocIndex:10},{value:"\u3002",paraId:16,tocIndex:10},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:18,tocIndex:11},{value:"onChange \u4E8B\u4EF6",paraId:19,tocIndex:11},{value:"\u3002",paraId:18,tocIndex:11},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:20,tocIndex:12},{value:"onItemChange \u4E8B\u4EF6",paraId:21,tocIndex:12},{value:"\u3002",paraId:20,tocIndex:12},{value:"\u6837\u5F0F\u7C7B\u540D\u524D\u7F00\uFF0C\u9ED8\u8BA4\u4E3A schema-render\u3002",paraId:22,tocIndex:13},{value:"\u662F\u5426\u5168\u5C40\u53EA\u8BFB\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:23,tocIndex:14},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:24,tocIndex:14},{value:"\u3002",paraId:23,tocIndex:14},{value:"\u6CE8\u518C\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:25,tocIndex:15},{value:"\u6E32\u67D3\u5668 Renderer",paraId:26,tocIndex:15},{value:"\u3002",paraId:25,tocIndex:15},{value:"Schema \u63CF\u8FF0\u534F\u8BAE\u3002",paraId:27,tocIndex:16},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u3002",paraId:28,tocIndex:17},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E\u3002",paraId:29,tocIndex:18},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:30,tocIndex:19},{value:"Global Validators",paraId:31,tocIndex:19},{value:"\u3002",paraId:30,tocIndex:19},{value:"\u8868\u5355\u6570\u636E\u3002",paraId:32,tocIndex:20},{value:"\u76D1\u542C\u6570\u636E\u53D8\u5316\u5904\u7406\u8054\u52A8\u903B\u8F91\uFF0C\u8BE6\u60C5\u89C1",paraId:33,tocIndex:21},{value:"\u6570\u636E\u8054\u52A8 watch \u65B9\u5F0F",paraId:34,tocIndex:21},{value:"\u3002",paraId:33,tocIndex:21}]},73890:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(2755);const t=[{value:"600 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"1800 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},21979:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(88485);const t=[]},98008:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(97024);const t=[]},15672:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(92311);const t=[{value:"\u89C1: ",paraId:0,tocIndex:1},{value:"Schema Transform",paraId:1,tocIndex:1}]},3215:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(78593);const t=[]},72624:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(25105);const t=[]},38319:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(35170);const t=[{value:"\u6709 ",paraId:0,tocIndex:1},{value:"value",paraId:0,tocIndex:1},{value:"\uFF0C\u6709 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u573A\u666F",paraId:0,tocIndex:1},{value:"\u6709 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\uFF0C\u65E0 ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u573A\u666F",paraId:1,tocIndex:2},{value:"\u6709 ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:"\uFF0C\u6709 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\uFF0C\u4F46 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:" \u4E0D\u66F4\u65B0\u503C\uFF0C\u975E\u6B63\u5E38\u573A\u666F",paraId:2,tocIndex:3},{value:"\u65E0 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\uFF0C\u65E0 ",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:" \u573A\u666F",paraId:3,tocIndex:4},{value:"\u65E0 ",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:"\uFF0C\u6709 ",paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:" \u573A\u666F",paraId:4,tocIndex:5}]},23352:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(12727);const t=[{value:"\u591A\u4E2A\u6E32\u67D3\u5668\u5185\u90E8\u540C\u65F6\u5728 ",paraId:0,tocIndex:0},{value:"useEffect",paraId:0,tocIndex:0},{value:" \u5185\u8C03\u7528 ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u65B9\u6CD5\u66F4\u65B0\uFF08\u521D\u59CB\u5316\uFF09\u6570\u636E\uFF0Cvalue \u503C\u9700\u8981\u662F\u6700\u65B0\u7684",paraId:0,tocIndex:0}]},17139:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(53143);const t=[{value:"disabledComponent",paraId:0,tocIndex:0},{value:" \u4E0E ",paraId:0,tocIndex:0},{value:"disabledFormItem",paraId:0,tocIndex:0},{value:" \u9A8C\u8BC1",paraId:0,tocIndex:0}]},44878:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(65063);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86\u5E03\u5C40\u7ED3\u6784\u4EE5\u53CA\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u4EE5\u8FBE\u5230 ",paraId:0,tocIndex:0},{value:"\u5F00\u7BB1\u5373\u7528",paraId:0,tocIndex:0},{value:" \u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u7EB5\u5411\u4E0E\u6A2A\u5411\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784\u53EF\u914D\u7F6E label \u5BBD\u5EA6\u7B49\u5185\u5BB9\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6807\u9898\u8BBE\u7F6E label",paraId:4,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C\u7279\u6027\uFF0C\u5982\u63D0\u4EA4\u3001\u91CD\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:5,tocIndex:0},{value:"\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5185\u7F6E\u6E32\u67D3\u5668 renderers",paraId:6,tocIndex:0},{value:`npm install @schema-render/form-render-react --save
`,paraId:7,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:8,tocIndex:1},{value:`npm install antd --save
`,paraId:9,tocIndex:1}]},8706:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(30761);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u7EB5\u5411\u4E0E\u6A2A\u5411\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5B9A\u5236\u3002",paraId:0,tocIndex:0},{value:"\u7EB5\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:1,tocIndex:1},{value:"vertical",paraId:1,tocIndex:1},{value:" \u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6A2A\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:2,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:2,tocIndex:2},{value:"horizontal",paraId:2,tocIndex:2},{value:" \u5373\u53EF\u3002",paraId:2,tocIndex:2},{value:"\u5B9A\u5236\u5E03\u5C40\u8BF7\u67E5\u770B ",paraId:3,tocIndex:3},{value:"Core \u6587\u6863",paraId:4,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]},39263:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(25937);const t=[{value:"label",paraId:0,tocIndex:0},{value:" \u76F8\u5173\u7684\u914D\u7F6E\u4E3B\u8981\u9488\u5BF9\u4E8E ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"horizontal",paraId:0,tocIndex:0},{value:" \u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u3001\u95F4\u8DDD\u3001\u5192\u53F7\u3001\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"labelWidth",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E \u201C\u6807\u9898\u5757\u201D \u7684\u5BBD\u5EA6\uFF0C\u652F\u6301 ",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:" \u4E0E ",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" \u7C7B\u578B\u3002",paraId:2,tocIndex:1},{value:"labelColon",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u63A7\u5236\u5192\u53F7\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u65E0\u3002",paraId:3,tocIndex:4},{value:"labelRender",paraId:4,tocIndex:5},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u201C\u6807\u9898\u5757\u201D\u7684\u6E32\u67D3\u5185\u5BB9\uFF0C\u5982\u5FC5\u586B ",paraId:4,tocIndex:5},{value:"*",paraId:4,tocIndex:5},{value:" \u53F7\u6807\u8BB0\u8C03\u6574\u4E3A ",paraId:4,tocIndex:5},{value:"(\u53EF\u9009)",paraId:4,tocIndex:5},{value:" \u8FD9\u6837\u7684\u5F62\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u540D\u79F0",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"labelWidth",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number | string",paraId:5,tocIndex:6},{value:"100",paraId:5,tocIndex:6},{value:"labelGap",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"15",paraId:5,tocIndex:6},{value:"labelColon",paraId:5,tocIndex:6},{value:"\u5B9A\u4E49 label \u5192\u53F7",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"labelRender",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:5,tocIndex:6},{value:"(params) => ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u62E5\u6709 ",paraId:6,tocIndex:7},{value:"labelWidth",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelGap",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelColon",paraId:6,tocIndex:7},{value:" \u5916\uFF0C\u8FD8\u62E5\u6709\u4EE5\u4E0B\u53C2\u6570\u3002",paraId:6,tocIndex:7},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"schema",paraId:7,tocIndex:7},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:7,tocIndex:7},{value:"ISchema",paraId:7,tocIndex:7},{value:"required",paraId:7,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"readonly",paraId:7,tocIndex:7},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"locale",paraId:7,tocIndex:7},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"userCtx",paraId:7,tocIndex:7},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"prefixClassNames",paraId:7,tocIndex:7},{value:"\u5BF9 ",paraId:7,tocIndex:7},{value:"classnames",paraId:7,tocIndex:7},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:7,tocIndex:7},{value:"(...args: classNames.ArgumentArray) => string",paraId:7,tocIndex:7}]},43811:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(91260);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4",paraId:0,tocIndex:0},{value:"\u4E0E",paraId:0,tocIndex:0},{value:"\u91CD\u7F6E",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\uFF0C\u76F8\u5173 API \u5982\u4E0B\u6587\u6240\u8FF0\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u300C\u63D0\u4EA4\u300D\u6309\u94AE\uFF0C\u6216\u5728\u8868\u5355\u5185\u6309\u4E0B\u56DE\u8F66\u952E\u89E6\u53D1\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:1},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6570\u636E",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u7684\u65F6\u5019\u89E6\u53D1\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:4,tocIndex:2},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:": \u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E",paraId:4,tocIndex:2},{value:"\u91CD\u7F6E\u4E8B\u4EF6\u652F\u6301\u5F02\u6B65\uFF0C\u6B64\u65F6\u6309\u94AE\u4F1A\u589E\u52A0 loading \u6548\u679C\u3002",paraId:5},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\u4F1A\u5728 ",paraId:6,tocIndex:3},{value:"onReset",paraId:6,tocIndex:3},{value:" \u4E4B\u524D\u89E6\u53D1\uFF0C\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61\u6570\u636E\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E\u3002",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:7,tocIndex:3},{value:"value",paraId:7,tocIndex:3},{value:": \u5F53\u524D\u8868\u5355\u6570\u636E",paraId:7,tocIndex:3},{value:"actions",paraId:8,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u662F\u5426\u5C55\u793A\u53CA\u5176\u987A\u5E8F\uFF0C\u9ED8\u8BA4 ",paraId:8,tocIndex:4},{value:"actions",paraId:8,tocIndex:4},{value:" \u7B49\u4E8E ",paraId:8,tocIndex:4},{value:"['submit', 'reset']",paraId:8,tocIndex:4},{value:"\u3002",paraId:8,tocIndex:4},{value:"\u652F\u6301\u5217\u8868\u5982\u4E0B\uFF1A",paraId:9,tocIndex:4},{value:"submit",paraId:10,tocIndex:4},{value:": \u63D0\u4EA4",paraId:10,tocIndex:4},{value:"reset",paraId:10,tocIndex:4},{value:": \u91CD\u7F6E",paraId:10,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:7},{value:"registerActions",paraId:11,tocIndex:7},{value:" \u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:11,tocIndex:7},{value:"\u64CD\u4F5C\u540D\u79F0\u662F ",paraId:12,tocIndex:8},{value:"submit",paraId:12,tocIndex:8},{value:"\u3001",paraId:12,tocIndex:8},{value:"reset",paraId:12,tocIndex:8},{value:"\uFF0C\u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A\uFF0C\u5982\u8986\u76D6\u63D0\u4EA4\u6309\u94AE\uFF0C\u589E\u52A0\u3010\u4E8C\u6B21\u786E\u8BA4\u3011\u7684\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u6DFB\u52A0\u56FE\u6807\u3002",paraId:12,tocIndex:8},{value:"registerActions",paraId:13,tocIndex:9},{value:" \u6CE8\u518C\u9879\u7684\u7C7B\u578B\u4E3A\uFF1A",paraId:13,tocIndex:9},{value:"(p: IRegisterActionsFnParams) => ReactNode",paraId:13,tocIndex:9},{value:"IRegisterActionsFnParams",paraId:14,tocIndex:9},{value:" \u53C2\u6570\u8BE6\u89E3\u5982\u4E0B\u8868\u683C",paraId:14,tocIndex:9},{value:"\u53C2\u6570",paraId:15,tocIndex:9},{value:"\u63CF\u8FF0",paraId:15,tocIndex:9},{value:"\u7C7B\u578B",paraId:15,tocIndex:9},{value:"handleSubmit",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"submit",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"handleReset",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"reset",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u4E8B\u4EF6\u7684 ",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:" \u72B6\u6001",paraId:15,tocIndex:9},{value:"{ submit: boolean; reset: boolean; }",paraId:15,tocIndex:9},{value:"disabled",paraId:15,tocIndex:9},{value:"\u5168\u5C40\u7981\u7528\u72B6\u6001",paraId:15,tocIndex:9},{value:"boolean",paraId:15,tocIndex:9},{value:"locale",paraId:15,tocIndex:9},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:9},{value:"object",paraId:15,tocIndex:9},{value:"\u53C2\u6570",paraId:16,tocIndex:10},{value:"\u63CF\u8FF0",paraId:16,tocIndex:10},{value:"\u7C7B\u578B",paraId:16,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:10},{value:"disableFormOnActionLoading",paraId:16,tocIndex:10},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10},{value:"validateFormOnSubmit",paraId:16,tocIndex:10},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10}]},14590:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(90261);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408",paraId:0,tocIndex:0},{value:"\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u5185\u7F6E\u6E32\u67D3\u5668\u7684\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 ",paraId:1},{value:"schema.renderOptions",paraId:1},{value:" \u4F20\u9012\uFF0C\u5BF9\u5E94 ",paraId:1},{value:"Antd",paraId:1},{value:" \u7EC4\u4EF6\u7684\u53C2\u6570\u3002",paraId:1},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u591A\u9879\u9009\u62E9\u5668\u7684\u5185\u5BB9\u662F\u901A\u8FC7",paraId:2,tocIndex:1},{value:"\u9017\u53F7",paraId:2,tocIndex:1},{value:"\u62FC\u63A5\u5728\u4E00\u8D77\u7684\uFF0C\u53C2\u8003 ",paraId:2,tocIndex:1},{value:"locale",paraId:2,tocIndex:1},{value:" \u7684 ",paraId:2,tocIndex:1},{value:"FormRender.comma",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:"\u975E Antd Descriptions \u7EC4\u4EF6\uFF0C\u65E0\u5165\u53C2\uFF0C\u4EC5\u4F5C\u7EAF\u6570\u636E\u5C55\u793A\u3002",paraId:3,tocIndex:2},{value:"v1.4.0",paraId:4,tocIndex:2},{value:"FormRender v1.4.0 \u5F00\u59CB\u652F\u6301 SwitchBox \u6E32\u67D3\u5668\uFF0C\u901A\u8FC7 ",paraId:5,tocIndex:3},{value:"renderOptions.text",paraId:5,tocIndex:3},{value:" \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:5,tocIndex:3},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:6,tocIndex:4},{value:"extra.checkedOptions",paraId:6,tocIndex:4},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:6,tocIndex:4},{value:"options",paraId:6,tocIndex:4},{value:" \u6570\u636E\u3002\u6848\u4F8B\u89C1",paraId:6,tocIndex:4},{value:"Checkbox \u9009\u4E2D\u503C\u8054\u52A8",paraId:7,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"v1.4.0",paraId:8,tocIndex:4},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:9,tocIndex:5},{value:"extra.selectedOptions",paraId:9,tocIndex:5},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:9,tocIndex:5},{value:"options",paraId:9,tocIndex:5},{value:" \u6570\u636E\u3002",paraId:9,tocIndex:5},{value:"v1.4.0",paraId:10,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:11,tocIndex:6},{value:"ISOString",paraId:11,tocIndex:6},{value:" \u683C\u5F0F\u7684\u65E5\u671F\u503C\uFF0C\u8BE5\u503C\u53EF\u4EE5\u66F4\u597D\u7684\u652F\u6301\u8DE8\u65F6\u533A\u7684\u9700\u8981\u3002",paraId:11,tocIndex:6},{value:"\u8FD4\u56DE ISOString \u683C\u5F0F\u7684\u65E5\u671F\u503C\u3002",paraId:12,tocIndex:7},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u6587\u6848\u5C55\u793A\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:13,tocIndex:7},{value:"locale",paraId:13,tocIndex:7},{value:" \u7684 ",paraId:13,tocIndex:7},{value:"FormRender.displayDateRange",paraId:13,tocIndex:7},{value:" \u6765\u81EA\u5B9A\u4E49\u3002",paraId:13,tocIndex:7},{value:"renderOptions.headerOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5934\u90E8\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"renderOptions.panelOptions",paraId:14,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5185\u5BB9\u9762\u677F\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:14,tocIndex:8},{value:"Collapse.Panel",paraId:14,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:14,tocIndex:8},{value:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF0C\u5E94\u7528\u573A\u666F\uFF1A\u6B65\u9AA4\u8868\u5355\u3002",paraId:15,tocIndex:9},{value:"\u63A5\u53D7 ",paraId:16,tocIndex:9},{value:"className",paraId:16,tocIndex:9},{value:" \u548C ",paraId:16,tocIndex:9},{value:"style",paraId:16,tocIndex:9},{value:" \u5C5E\u6027\u3002",paraId:16,tocIndex:9}]},93076:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(4123);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},24426:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(74624);const t=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"Core",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"rootClassName",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"rootStyle",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"itemLayout",paraId:1,tocIndex:0},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784",paraId:1,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"vertical",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"React.ComponentType<IOpenItemLayoutParams>",paraId:2,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:"readonlyPlaceholder",paraId:1,tocIndex:0},{value:"\u53EA\u8BFB\u72B6\u6001\u6CA1\u6709\u6570\u636E\u65F6\u7684\u5360\u4F4D\u7B26\uFF0C",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"undefined",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"\u7A7A\u5B57\u7B26\u4E32",paraId:1,tocIndex:0},{value:" \u4F1A\u88AB\u5224\u5B9A\u4E3A\u7A7A\u6570\u636E",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelWidth",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\uFF08\u6807\u9898\u5757\uFF09\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"100",paraId:1,tocIndex:0},{value:"labelColon",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u5192\u53F7",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelGap",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"15",paraId:1,tocIndex:0},{value:"labelRender",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:1,tocIndex:0},{value:"(params) => ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["submit", "reset"]',paraId:1,tocIndex:0},{value:"registerActions",paraId:1,tocIndex:0},{value:"\u6CE8\u518C\u64CD\u4F5C\u884C\u4E3A\uFF0C\u5982\u679C\u662F submit\u3001reset \u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A",paraId:1,tocIndex:0},{value:"IRegisterActions",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"disableFormOnActionLoading",paraId:1,tocIndex:0},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"validateFormOnSubmit",paraId:1,tocIndex:0},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"onSubmit",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onBeforeReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\uFF0C\u5982\u679C\u8FD4\u56DE\u6570\u636E\uFF0C\u5219\u4F5C\u4E3A\u65B0\u6570\u636E\u586B\u5165\u8868\u5355",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},64092:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(83140);const t=[{value:"\u901A\u8FC7\u5728 ",paraId:0,tocIndex:0},{value:"Schema",paraId:0,tocIndex:0},{value:" \u4E0A\u6307\u5B9A ",paraId:0,tocIndex:0},{value:"span",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"spanStart",paraId:0,tocIndex:0},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:0,tocIndex:0},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"\u4F4D\u7F6E",paraId:0,tocIndex:0},{value:"\uFF0C\u8BE6\u60C5\u89C1",paraId:0,tocIndex:0},{value:"\u6805\u683C\u5E03\u5C40-\u81EA\u5B9A\u4E49\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0}]},75796:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(34877);const t=[{value:"\u6B65\u9AA4\u8868\u5355\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u90FD\u7531 FormRender \u6E32\u67D3\uFF0C\u901A\u8FC7 hidden \u5C5E\u6027\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u6570\u636E\u5728\u4E00\u4E2A FormRender \u5B9E\u4F8B\u91CC\uFF0C\u6821\u9A8C\u65B9\u6CD5\u53EA\u8C03\u7528\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u6709\u53D8\u5316\uFF0C\u9700\u8981\u5C06\u8868\u5355\u9879\u653E\u5728 Object \u5BF9\u8C61\u91CC",paraId:2,tocIndex:0},{value:"\u6E32\u67D3\u591A\u4E2A FormRender \u5B9E\u4F8B",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u65E0\u53D8\u5316",paraId:3,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u6821\u9A8C\u65B9\u6CD5\u9700\u8981\u8C03\u7528\u591A\u4E2A\uFF0C\u6700\u7EC8\u7684\u6570\u636E\u9700\u8981\u5408\u5E76\u5728\u4E00\u8D77",paraId:3,tocIndex:0},{value:"\u4E0B\u9762\u793A\u4F8B\u7B2C\u4E00\u79CD\u65B9\u6848",paraId:4,tocIndex:0}]},2131:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(45011);const t=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\uFF0C\u6821\u9A8C\u4E0D\u89E6\u53D1\u3002",paraId:1,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u65F6\uFF0C\u672A\u8F93\u5165\u5931\u8D25\u539F\u56E0\u9700\u8981\u89E6\u53D1\u6821\u9A8C\u3002",paraId:1,tocIndex:0},{value:"\u6280\u672F\u5B9E\u73B0",paraId:2,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: false",paraId:3,tocIndex:0},{value:" \u8FBE\u5230\u4E0D\u89E6\u53D1\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u6E05\u695A\u5DF2\u6709\u7684\u9519\u8BEF\u63D0\u793A\u3002",paraId:3,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u8F93\u5165\u6846\u8F93\u5165\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: true",paraId:3,tocIndex:0},{value:" \u89E6\u53D1\u6821\u9A8C\u3002",paraId:3,tocIndex:0}]},98685:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(6168);const t=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u5B58\u5728\u6700\u5C0F\u957F\u5EA6\u6821\u9A8C\u65F6\uFF0C\u5E0C\u671B\u5728\u8F93\u5165\u7684\u65F6\u5019\u4E0D\u6821\u9A8C\u6570\u636E\uFF0C\u5728\u5931\u53BB\u7126\u70B9\uFF08",paraId:1,tocIndex:0},{value:"onBlur",paraId:1,tocIndex:0},{value:"\uFF09\u65F6\u624D\u6821\u9A8C\u6570\u636E\u6B63\u786E\u6027\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u901A\u8FC7\u5728 renderOptions \u4E0A\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"validateOnBlur: true",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u53EF\u5B9E\u73B0\u4E0A\u8FF0\u9700\u6C42\u3002",paraId:3,tocIndex:0},{value:`\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5185\u7F6E\u6E32\u67D3\u5668\u6709\uFF1A
`,paraId:3,tocIndex:0},{value:"InputText",paraId:4,tocIndex:0},{value:"InputNumber",paraId:4,tocIndex:0},{value:"Password",paraId:4,tocIndex:0},{value:"TextArea",paraId:4,tocIndex:0}]},7669:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(88358);const t=[{value:"\u67D0\u4E2A\u8868\u5355\u9879\u9009\u4E2D\u540E\u7684\u503C\u8054\u52A8\u5230\u5176\u4ED6\u8868\u5355\u9879\u4F7F\u7528\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668",paraId:1,tocIndex:0},{value:" + ",paraId:1,tocIndex:0},{value:"userCtx",paraId:1,tocIndex:0},{value:" \u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u901A\u8FC7\u4FEE\u6539 ",paraId:1,tocIndex:0},{value:"Schema",paraId:1,tocIndex:0},{value:" \u7684 ",paraId:1,tocIndex:0},{value:"renderOptions",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:2,tocIndex:1},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:3,tocIndex:2}]},15577:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(73888);const t=[{value:"\u4E0E Checkbox \u6E32\u67D3\u5668\u4E00\u6837\uFF0C\u4E0D\u8FC7\u5B57\u6BB5\u540D\u662F ",paraId:0,tocIndex:0},{value:"selectedOptions",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:1,tocIndex:1}]},2531:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(73914);const t=[{value:"100 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"300 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},26875:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(64768);const t=[{value:"\u652F\u6301 ",paraId:0,tocIndex:1},{value:"warning",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"error",paraId:0,tocIndex:1},{value:" \u6837\u5F0F",paraId:0,tocIndex:1}]},18335:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(87004);const t=[{value:"\u5192\u53F7\u8BBE\u7F6E",paraId:0,tocIndex:1}]},9034:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(43895);const t=[{value:"\u5185\u6838\u7075\u6D3B\u3001\u9AD8\u53EF\u5B9A\u5236\uFF0C\u4F46\u9700\u8981\u7EC4\u88C5\u5FC5\u8981\u90E8\u4EF6 ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:0,tocIndex:0},{value:"renderers",paraId:0,tocIndex:0},{value:`\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\uFF0C
\u7136\u540E\u901A\u8FC7\u4E00\u5957 Schema \u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u7684\u8868\u5355\u3002`,paraId:0,tocIndex:0},{value:"FormRender",paraId:1,tocIndex:1},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:1,tocIndex:1},{value:"renderers",paraId:1,tocIndex:1},{value:"\uFF08\u5E38\u7528\u8868\u5355\u7C7B\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4EE5\u53CA\u63D0\u4EA4\u91CD\u7F6E\u64CD\u4F5C\uFF0C\u4EE5\u8FBE\u5230",paraId:1,tocIndex:1},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"Search",paraId:2,tocIndex:2},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:2,tocIndex:2}]},23652:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(67342);const t=[{value:"Search",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4 ",paraId:2,tocIndex:0},{value:"layout",paraId:2,tocIndex:0},{value:" \u4E3A ",paraId:2,tocIndex:0},{value:"autoFill",paraId:2,tocIndex:0},{value:" \u5E03\u5C40",paraId:2,tocIndex:0},{value:"\u589E\u52A0\u6298\u53E0\u5C55\u5F00\u529F\u80FD\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:3,tocIndex:0},{value:`npm install @schema-render/search-react --save
`,paraId:4,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:5,tocIndex:1},{value:`npm install antd --save
`,paraId:6,tocIndex:1},{value:"\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:7,tocIndex:2}]},26138:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(27885);const t=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u7B49\u76F8\u5173 API \u5916\uFF0C\u8FD8\u589E\u52A0\u4E86\u6298\u53E0\u4E0E\u5C55\u5F00\u64CD\u4F5C\u884C\u4E3A\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8868\u5355\u9879\u8D85\u8FC7 ",paraId:1,tocIndex:1},{value:"2",paraId:1,tocIndex:1},{value:" \u884C\u5C31\u4F1A\u6298\u53E0\uFF0C",paraId:1,tocIndex:1},{value:"onToggleCollapsed",paraId:1,tocIndex:1},{value:" \u662F\u6298\u53E0\u5C55\u5F00\u4E8B\u4EF6\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"actions",paraId:2,tocIndex:2},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:2,tocIndex:2},{value:"string[]",paraId:2,tocIndex:2},{value:'["reset", "submit", "collapse"]',paraId:2,tocIndex:2},{value:"defaultCollapsed",paraId:2,tocIndex:2},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"collapsedRows",paraId:2,tocIndex:2},{value:"\u6298\u53E0\u884C\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"2",paraId:2,tocIndex:2},{value:"calcCollapsedNumber",paraId:2,tocIndex:2},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:2,tocIndex:2},{value:"container",paraId:2,tocIndex:2},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:2,tocIndex:2},{value:"(container?: HTMLElement) => number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"onToggleCollapsed",paraId:2,tocIndex:2},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"(isCollapsed: boolean) => void",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2}]},51001:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(10122);const t=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},13086:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(84123);const t=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["reset", "submit", "collapse"]',paraId:1,tocIndex:0},{value:"defaultCollapsed",paraId:1,tocIndex:0},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"collapsedRows",paraId:1,tocIndex:0},{value:"\u6298\u53E0\u884C\u6570",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"2",paraId:1,tocIndex:0},{value:"calcCollapsedNumber",paraId:1,tocIndex:0},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:1,tocIndex:0},{value:"container",paraId:1,tocIndex:0},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:1,tocIndex:0},{value:"(container?: HTMLElement) => number",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onToggleCollapsed",paraId:1,tocIndex:0},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(isCollapsed: boolean) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},31626:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(24197);const t=[{value:"\u5206\u7C7B\u6807\u9898\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 Object \u5BF9\u8C61\u6E32\u67D3\u5668\uFF0C\u4F1A\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E\u5206\u7C7B\u6807\u9898\u8868\u5355\u9879\u5360\u6EE1\u4E00\u884C\uFF0C\u4E0D\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0}]},60031:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(69306);const t=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u4E3B\u8981\u7279\u6027\u6709\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u7B80\u5355\u3001\u5F00\u7BB1\u5373\u7528",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u7A7A\u6570\u636E\u5360\u4F4D\u7B26\u5904\u7406",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u5217\u5BBD\u5EA6\u5904\u7406",paraId:2,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF08\u4E00\u5C4F\u5C55\u793A\uFF09\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u9AD8\u5EA6\u81EA\u9002\u5E94 AutoScrollY",paraId:3,tocIndex:0},{value:"\u652F\u6301\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:4,tocIndex:0},{value:"\u652F\u6301\u914D\u7F6E\u5F0F\u64CD\u4F5C\u680F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:5,tocIndex:0},{value:"\u652F\u6301\u5E38\u89C1\u6570\u636E\u7C7B\u578B\u663E\u793A\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6570\u636E\u663E\u793A Value Type",paraId:6,tocIndex:0},{value:"\u652F\u6301\u524D\u7AEF\u6392\u5E8F\uFF1A\u6309\u62FC\u97F3\u3001\u6570\u5B57\u3001\u65E5\u671F\u683C\u5F0F\u6392\u5E8F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6392\u5E8F Sort",paraId:7,tocIndex:0},{value:"\u652F\u6301\u201C\u5408\u8BA1\u680F\u201D\uFF0C\u901A\u8FC7\u6570\u636E\u81EA\u52A8\u5339\u914D\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5408\u8BA1\u680F Summary",paraId:8,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u9690\u85CF\u663E\u793A\u3001\u6392\u5E8F\u3001\u5BBD\u5EA6\u8BBE\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:9,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u8BBE\u7F6E\u6301\u4E45\u5316\u5B58\u50A8\u4E0E\u5408\u5E76\u7B97\u6CD5\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:10,tocIndex:0},{value:`npm install @schema-render/search-table-react --save
`,paraId:11,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:12,tocIndex:1},{value:`npm install antd --save
`,paraId:13,tocIndex:1},{value:"\u57FA\u672C\u7528\u6CD5\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E09\u4E2A\u5C5E\u6027",paraId:14,tocIndex:2},{value:"schema",paraId:15,tocIndex:2},{value:": \u641C\u7D22\u7684\u6761\u4EF6\uFF0C\u8BE6\u89E3 ",paraId:15,tocIndex:2},{value:"Search",paraId:16,tocIndex:2},{value:" \u7EC4\u4EF6\u3002",paraId:15,tocIndex:2},{value:"columns",paraId:15,tocIndex:2},{value:": \u8868\u683C\u5217\u5C5E\u6027\uFF0C\u9664 ",paraId:15,tocIndex:2},{value:"Antd Table columns",paraId:15,tocIndex:2},{value:` \u5C5E\u6027\u5916\uFF0C\u6269\u5C55\u7684\u5C5E\u6027\u89C1 API Reference\u3002
`,paraId:15,tocIndex:2},{value:"\u6CE8\uFF1A",paraId:17,tocIndex:2},{value:"dataIndex",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u9700\u4FDD\u6301\u552F\u4E00\u6027\uFF0C",paraId:17,tocIndex:2},{value:"key",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u53EF\u7701\u7565\u3002",paraId:17,tocIndex:2},{value:"request",paraId:15,tocIndex:2},{value:`: \u8BF7\u6C42\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u6765\u8BF7\u6C42\u540E\u7AEF\u6570\u636E\u63A5\u53E3\uFF0C\u5E76\u6309\u683C\u5F0F\u8FD4\u56DE\u3002
`,paraId:15,tocIndex:2},{value:`\u53C2\u6570\u9664 schema \u58F0\u660E\u7684\u5B57\u6BB5\u5916\uFF0C\u8FD8\u5305\u62EC\u5206\u9875\u5B57\u6BB5\u3002
`,paraId:18,tocIndex:2},{value:"current",paraId:19,tocIndex:2},{value:": \u5F53\u524D\u9875\u7801\u3002",paraId:19,tocIndex:2},{value:"pageSize",paraId:19,tocIndex:2},{value:": \u6BCF\u9875\u6761\u6570\u3002",paraId:19,tocIndex:2},{value:`\u8FD4\u56DE\u5B57\u6BB5\u5982\u4E0B\u3002
`,paraId:18,tocIndex:2},{value:"data",paraId:20,tocIndex:2},{value:": \u8868\u683C\u6570\u636E\u6E90\uFF0C\u5BF9\u5E94 Antd Table \u7684 ",paraId:20,tocIndex:2},{value:"dataSource",paraId:20,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:20,tocIndex:2},{value:"total",paraId:20,tocIndex:2},{value:": \u603B\u7684\u8BB0\u5F55\u6570\uFF0C\u5E94\u7528\u4E8E\u5206\u9875\u3002",paraId:20,tocIndex:2},{value:"summary",paraId:20,tocIndex:2},{value:": \u5408\u8BA1\u680F\u6570\u636E\uFF0C\u8BE6\u89C1 ",paraId:20,tocIndex:2},{value:"\u5408\u8BA1\u680F Summary",paraId:21,tocIndex:2},{value:"\u3002",paraId:20,tocIndex:2}]},12952:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(72106);const t=[{value:"\u901A\u8FC7\u6DFB\u52A0 ",paraId:0,tocIndex:1},{value:"showRowNumber",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\uFF0C\u53EF\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\u5217\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"rowNumberColumnData",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u914D\u7F6E\u5E8F\u53F7\u5217\u5C5E\u6027\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"Antd Table columns",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:1,tocIndex:2},{value:"\u58F0\u660E ",paraId:2,tocIndex:3},{value:"actionItems",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\uFF0C\u5C06\u6DFB\u52A0\u64CD\u4F5C\u5217\uFF0C\u53C2\u6570\u8BE6\u89E3\u89C1\u6587\u5E95\u3010actionItems \u53C2\u6570\u8BE6\u89E3\u3011\u3002",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6570\u91CF\u8D85\u8FC7\u9608\u503C\uFF0C\u5C06\u4EE5",paraId:3,tocIndex:4},{value:"\u201C\u66F4\u591A\u201D",paraId:3,tocIndex:4},{value:"\u5F62\u5F0F\u4EA4\u4E92\uFF0C\u9ED8\u8BA4\u9608\u503C\u4E3A ",paraId:3,tocIndex:4},{value:"2",paraId:3,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"actionItemsCount",paraId:3,tocIndex:4},{value:" \u4FEE\u6539\u9608\u503C\u3002",paraId:3,tocIndex:4},{value:"\u4E0B\u62C9\u6846\u5C5E\u6027\u53EF\u901A\u8FC7 ",paraId:4,tocIndex:4},{value:"actionItemsDropdownProps",paraId:4,tocIndex:4},{value:" \u914D\u7F6E\uFF0C\u5BF9\u5E94 Antd ",paraId:4,tocIndex:4},{value:"Dropdown",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u3002",paraId:4,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:5},{value:"actionItemsColumnData",paraId:5,tocIndex:5},{value:" \u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u5217\u5C5E\u6027\uFF0C\u540C\u6837\u5BF9\u5E94 Antd Table columns \u503C\u3002",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"record",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u6570\u636E",paraId:6,tocIndex:7},{value:"Record<string, any>",paraId:6,tocIndex:7},{value:"index",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u7D22\u5F15",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"\u9664\u4E86 Antd ",paraId:7,tocIndex:8},{value:"Button",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u5982\u4E0B\u53C2\u6570\u3002",paraId:7,tocIndex:8},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"text",paraId:8,tocIndex:8},{value:"\u64CD\u4F5C\u6587\u6848",paraId:8,tocIndex:8},{value:"string | ReactNode",paraId:8,tocIndex:8},{value:"isShow",paraId:8,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmAgain",paraId:8,tocIndex:8},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmProps",paraId:8,tocIndex:8},{value:"\u4E8C\u6B21\u786E\u8BA4\u5C5E\u6027\uFF0C\u5BF9\u5E94 Antd ",paraId:8,tocIndex:8},{value:"Popconfirm",paraId:8,tocIndex:8},{value:" \u5C5E\u6027",paraId:8,tocIndex:8},{value:"object",paraId:8,tocIndex:8},{value:"onClick",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE Promise \u5C06\u6DFB\u52A0 loading \u6548\u679C",paraId:8,tocIndex:8},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",paraId:8,tocIndex:8}]},10198:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(17258);const t=[{value:"\u8868\u683C\u7684 ",paraId:0,tocIndex:1},{value:"autoScrollY",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5176\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4EE5\u5B9E\u73B0\u201C\u4E00\u5C4F\u201D\u663E\u793A\u6548\u679C\uFF0C\u800C\u4E0D\u51FA\u73B0\u9875\u9762\u7EA7\u6EDA\u52A8\u6761\u3002",paraId:0,tocIndex:1},{value:"\u5F00\u542F ",paraId:1,tocIndex:1},{value:"autoScrollY",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u540E\uFF0CAntd Table \u7684 ",paraId:1,tocIndex:1},{value:"scroll.y",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1 ",paraId:1,tocIndex:1},{value:"SearchTable",paraId:1,tocIndex:1},{value:" \u6839\u8282\u70B9\u5143\u7D20\u5B58\u5728\u56FA\u5B9A\u9AD8\u5EA6\u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6DFB\u52A0 ",paraId:2,tocIndex:2},{value:"header",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"footer",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleTop",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleBottom",paraId:2,tocIndex:2},{value:" \u5B50\u8282\u70B9\u6548\u679C\u3002",paraId:2,tocIndex:2}]},51184:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(73865);const t=[{value:"\u5185\u7F6E\u201C\u5408\u8BA1\u201D\u6570\u636E\u663E\u793A\u529F\u80FD\uFF0C\u53EA\u9700\u5728 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u91CC\u8FD4\u56DE ",paraId:0,tocIndex:1},{value:"summaryData",paraId:0,tocIndex:1},{value:" \u6570\u636E\u5373\u53EF\uFF0C\u6570\u636E\u5B57\u6BB5\u5BF9\u5E94\u8868\u683C\u5217\u7684 ",paraId:0,tocIndex:1},{value:"dataIndex",paraId:0,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5408\u8BA1\u6570\u636E\u7684\u4F4D\u7F6E\u5C06\u6839\u636E\u6B64\u5BF9\u5E94\u5173\u7CFB\u81EA\u52A8\u8BA1\u7B97\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"summaryText",paraId:1,tocIndex:2},{value:" \u53EF\u5B9A\u4E49 ",paraId:1,tocIndex:2},{value:"\u5408\u8BA1",paraId:1,tocIndex:2},{value:" \u6587\u6848\uFF0C\u4F1A\u5728\u5E8F\u53F7\u680F\u663E\u793A\u3002",paraId:1,tocIndex:2},{value:"\u53EA\u6709",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:3},{value:" \u4E0E ",paraId:3},{value:"\u5E8F\u53F7\u680F",paraId:3},{value:" \u540C\u65F6\u5B58\u5728\u3002",paraId:3},{value:"\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u201C\u5408\u8BA1\u201D \u6587\u6848\u5360\u636E\u4E24\u4E2A\u5355\u5143\u683C\u3002",paraId:4}]},59418:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(81535);const t=[{value:"sortMode",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u63A7\u5236\u662F",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\u8FD8\u662F",paraId:0,tocIndex:0},{value:"\u540E\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\uFF0C\u53D6\u503C\u6709\u56DB\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"local",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"local-all",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5\uFF0C\u4E14\u6309\u6570\u636E\u7C7B\u578B\u81EA\u52A8\u5E94\u7528\u6392\u5E8F\u65B9\u6848",paraId:1,tocIndex:0},{value:"service",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"service-all",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5",paraId:1,tocIndex:0},{value:"\u5728\u5217\u4E0A\u58F0\u660E ",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u5C31\u4F1A\u6DFB\u52A0\u6392\u5E8F\u529F\u80FD\uFF1B",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u53D6\u503C\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A",paraId:2,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"number",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u6570\u503C\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"date",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u65E5\u671F\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u6392\u5E8F\u6570\u636E\u503C\u662F\u901A\u8FC7\u5217\u7684 ",paraId:4,tocIndex:1},{value:"dataIndex",paraId:4,tocIndex:1},{value:" \u83B7\u53D6\uFF0C\u5982\u679C\u6570\u636E\u590D\u6742\uFF0C\u5219\u9700\u8981\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"sortDataExtractor",paraId:4,tocIndex:1},{value:" \u5C5E\u6027\u83B7\u53D6\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"sortDataExtractor: (record: IObjectAny) => string | number | void",paraId:5,tocIndex:1},{value:"\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:6,tocIndex:2},{value:"sortMode",paraId:6,tocIndex:2},{value:" \u5C5E\u6027\u4E3A ",paraId:6,tocIndex:2},{value:"local-all",paraId:6,tocIndex:2},{value:"\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5217\u5B57\u6BB5\u90FD\u5C06\u8FDB\u884C\u6392\u5E8F\uFF08\u6392\u9664\u5E8F\u53F7\u3001\u64CD\u4F5C\u7B49\u65E0\u5173\u5217\uFF09\u3002",paraId:6,tocIndex:2},{value:"\u6392\u5E8F\u7684\u65B9\u5F0F\u5C06\u4EE5\u6570\u636E\u7684\u7C7B\u578B\u8FDB\u884C\u81EA\u52A8\u5224\u65AD\uFF0C\u5F53\u7136\u5224\u65AD\u9519\u8BEF\u65F6\uFF0C\u5219\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u6392\u5E8F\u7C7B\u578B ",paraId:7,tocIndex:2},{value:"sortType",paraId:7,tocIndex:2},{value:" \u503C\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301\u5D4C\u5957\u8868\u5934\u6392\u5E8F\u3002",paraId:8,tocIndex:3},{value:"\u8981\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u8F6C\u62FC\u97F3\u7684\u89E3\u6790\u5E93\uFF0C\u5982 ",paraId:9,tocIndex:4},{value:"pinyin-pro",paraId:9,tocIndex:4},{value:"\u3002",paraId:9,tocIndex:4},{value:"\u518D\u901A\u8FC7 ",paraId:10,tocIndex:4},{value:"sortStringValueTransform",paraId:10,tocIndex:4},{value:" \u5C5E\u6027\u5C06\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u8F6C\u6362\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\u4E86\u3002",paraId:10,tocIndex:4},{value:"\u8BBE\u7F6E ",paraId:11,tocIndex:5},{value:"sortMode",paraId:11,tocIndex:5},{value:" \u5C5E\u6027\u4E3A ",paraId:11,tocIndex:5},{value:"service",paraId:11,tocIndex:5},{value:"\uFF0C\u5219\u8868\u793A\u540E\u7AEF\u63A5\u53E3\u6392\u5E8F\uFF0C\u5C06\u8C03\u7528 ",paraId:11,tocIndex:5},{value:"request",paraId:11,tocIndex:5},{value:" \u8BF7\u6C42\u3002",paraId:11,tocIndex:5}]},49329:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(18899);const t=[{value:"title.tabs",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u5B9A\u4E49\u6807\u7B7E\u9875\u5207\u6362\u529F\u80FD\uFF0C\u5207\u6362\u540E\u4F1A\u518D\u6B21\u8C03\u7528 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u51FD\u6570\u3002API \u4E0E Antd ",paraId:0,tocIndex:1},{value:"Tabs",paraId:0,tocIndex:1},{value:" \u7EC4\u4EF6\u4E00\u81F4\u3002",paraId:0,tocIndex:1},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showSetting",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u5F00\u542F\u5217\u8BBE\u7F6E\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u4EC5\u5F00\u542F\u5217\u8BBE\u7F6E\u529F\u80FD\u65F6\uFF0C\u6807\u9898\u680F DOM \u7ED3\u6784\u6709\u53D8\u5316\uFF0C\u4E0D\u5B58\u5728 Tabs \u7EC4\u4EF6 DOM \u7ED3\u6784\u3002",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 Antd Tabs \u81EA\u5E26\u7684 ",paraId:3,tocIndex:5},{value:"tabBarExtraContent",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u5B9E\u73B0\u3002",paraId:3,tocIndex:5}]},78323:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(87922);const t=[{value:"\u4E3A\u4E86\u63D0\u5347\u4E00\u4E9B\u5E38\u89C4\u6570\u636E\u5185\u5BB9\u7684\u6E32\u67D3\u7814\u53D1\u6548\u7387\uFF0C\u5982\u6570\u5B57\u91D1\u989D\u5343\u5206\u4F4D\u5904\u7406\u3001\u56FE\u7247\u663E\u793A\u3001\u4EE3\u7801\u5757\u663E\u793A\u7B49\uFF0CSearchTable \u6269\u5C55\u4E86 Antd Table \u7EC4\u4EF6\u7684 ",paraId:0,tocIndex:0},{value:"column",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u53EA\u9700\u58F0\u660E ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"comma-number",paraId:0,tocIndex:0},{value:"\uFF0C\u6570\u636E\u7684\u663E\u793A\u5C31\u4F1A\u81EA\u52A8\u505A\u5343\u5206\u4F4D\u5904\u7406\u3002",paraId:0,tocIndex:0},{value:"\u51FD\u6570\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF0C\u5F69\u8272\u6807\u7B7E\u3002",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u6570\u636E\u503C\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u4F20\u53C2\u8BF4\u660E",paraId:2,tocIndex:2},{value:"code",paraId:2,tocIndex:2},{value:"\u4EE3\u7801\u5757\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rate",paraId:2,tocIndex:2},{value:"\u8BC4\u5206\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"Antd Rate \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"switch",paraId:2,tocIndex:2},{value:"\u5F00\u5173\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"boolean | 1 | 0",paraId:2,tocIndex:2},{value:"Antd Switch \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"images",paraId:2,tocIndex:2},{value:"\u56FE\u7247\u9884\u89C8\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Image \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"tags",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u5F62\u5F0F",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Tag \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"comma-number",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"percent",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u52A0\u767E\u5206\u53F7\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"long-text",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848 tooltip \u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Tooltip \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"long-text-modal",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848\u70B9\u51FB\u5F39\u7A97\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10\uFF0C\u5176\u4ED6\u4E3A Antd Modal \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"registerValueType",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u663E\u793A\u7C7B\u578B\uFF0C\u540C\u540D\u5C06\u8986\u76D6\u3002",paraId:3,tocIndex:3}]},66376:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(8497);const t=[{value:"\u6253\u5F00 ",paraId:0,tocIndex:1},{value:"showSetting",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5C06\u5F00\u542F\u5217\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u89E6\u53D1\u6309\u94AE\u5728\u6807\u9898\u680F\u6700\u53F3\u4FA7\u3002",paraId:0,tocIndex:1},{value:"\u56FA\u5B9A\u5217\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u9700\u8981\u957F\u4E45\u7684\u5B58\u50A8\u7528\u6237\u6392\u5E8F\u8BBE\u7F6E\uFF0C\u518D\u6B21\u6253\u5F00\u7684\u65F6\u5019\u4FDD\u6301\u4E0A\u4E00\u6B21\u5B58\u50A8\u7684\u6392\u5E8F\u8BBE\u7F6E\u3002",paraId:2,tocIndex:5},{value:"onSettingChanged",paraId:3,tocIndex:5},{value:": \u5F53\u70B9\u51FB\u5217\u8BBE\u7F6E\u7684\u3010\u786E\u5B9A\u3011\u6309\u94AE\u540E\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u6BCF\u6B21\u6392\u5E8F\u540E\u7684\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"getSetting",paraId:3,tocIndex:5},{value:": \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u540E\u4F1A\u6267\u884C\u4E00\u6B21\u8BE5\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5B58\u50A8\u7684\u6392\u5E8F\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"settingColumnsMergeAlgo",paraId:3,tocIndex:5},{value:": \u81EA\u5B9A\u4E49\u5B58\u50A8\u7684\u5217\u6570\u636E\u4E0E\u5F53\u524D\u5217\u6570\u636E\u7684\u5408\u5E76\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7B97\u6CD5\u662F\u6309\u7167\u5B58\u50A8\u7684\u5217\u6570\u636E\u6392\u5E8F\uFF0C\u8FC7\u6EE4\u5DF2\u7ECF\u5220\u9664\u7684\u5217\uFF0C\u65B0\u7684\u5217\u653E\u7F6E\u5728\u6700\u540E\u3002",paraId:3,tocIndex:5},{value:"\u4E1A\u52A1\u573A\u666F",paraId:4,tocIndex:6},{value:"\u4E0D\u540C\u5206\u7C7B\u7684 Tabs \u5207\u6362\u65F6\uFF0C\u8868\u683C\u5217\u6570\u636E\u662F\u4E0D\u540C\u7684\uFF0C\u5217\u6570\u636E\u5B58\u50A8\u548C\u83B7\u53D6\u4E5F\u4E0D\u540C\u3002",paraId:5,tocIndex:6},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:6,tocIndex:6},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u5B9E\u73B0 Tabs \u5207\u6362\u65F6\u91CD\u65B0\u83B7\u53D6\u5B58\u50A8\u6570\u636E\u5B9E\u73B0\u3002",paraId:7,tocIndex:6},{value:"\u6BCF\u6B21 ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u53D8\u5316\u4F1A\u8C03\u4E00\u6B21 ",paraId:7,tocIndex:6},{value:"getSetting",paraId:7,tocIndex:6},{value:" \u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u4E0D\u540C\u7684\u6570\u636E\u3002",paraId:7,tocIndex:6},{value:"\u6570\u636E\u590D\u6742\u7E41\u591A\u7684\u60C5\u51B5\uFF0C\u8868\u5934\u53EF\u4EE5\u7531\u540E\u7AEF\u8FD4\u56DE\uFF0C\u51CF\u5C11\u524D\u540E\u7AEF\u5B57\u6BB5\u5BF9\u9F50\u7684\u6210\u672C\u3002",paraId:8,tocIndex:7}]},5664:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(90749);const t=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},95378:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(27490);const t=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:"\u6570\u636E\u8BF7\u6C42\u51FD\u6570",paraId:0,tocIndex:1},{value:"((params: IObjectAny, extraParams: IRequestExtraParams) => Promise<IRequestResult>)",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"requestOnMounted",paraId:0,tocIndex:1},{value:"\u6302\u8F7D\u5B8C\u6210\u662F\u5426\u7ACB\u5373\u53D1\u9001\u4E00\u6B21 request \u8BF7\u6C42\u5EA6",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"true",paraId:0,tocIndex:1},{value:"header",paraId:0,tocIndex:1},{value:"\u5934\u90E8\u680F\u5185\u5BB9\u6E32\u67D3",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"search",paraId:0,tocIndex:1},{value:"\u641C\u7D22\u680F\uFF0C\u89C1",paraId:0,tocIndex:1},{value:"Search API",paraId:1,tocIndex:1},{value:"ISearchProps | false",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleTop",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u9876\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"title",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\uFF0C\u89C1\u4E0B\u65B9 title \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleBottom",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u5E95\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"table",paraId:0,tocIndex:1},{value:"\u8868\u683C\u680F\uFF0C\u89C1\u4E0B\u65B9 table \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"footer",paraId:0,tocIndex:1},{value:"\u5E95\u90E8\u680F",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u6837\u5F0F",paraId:2,tocIndex:2},{value:"CSSProperties",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"tabs",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u9875\u5C5E\u6027\uFF0C\u89C1",paraId:2,tocIndex:2},{value:"Antd Tabs",paraId:2,tocIndex:2},{value:"TabsProps",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showSetting",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5217\u8BBE\u7F6E\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u9664 Antd Table \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"showRowNumber",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5E8F\u53F7\u5217",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"rowNumberColumnData",paraId:4,tocIndex:3},{value:"\u5E8F\u53F7\u5217 Antd \u914D\u7F6E\u6570\u636E",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItems",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u5185\u5BB9\uFF0C\u4E0D\u5B58\u5728\u5219\u4E0D\u5C55\u793A\u64CD\u4F5C\u5217\uFF0C\u6570\u91CF\u8D85\u8FC7\u8BBE\u5B9A\u9608\u503C\u5219\u4E0B\u62C9\u4EA4\u4E92",paraId:4,tocIndex:3},{value:"(record: IObjectAny, index: number) => IActionItem[]",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsColumnData",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217 Antd \u914D\u7F6E\u6570\u636E\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u5217\u5BBD\u5EA6\u7B49",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsCount",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u4E0B\u62C9\u4EA4\u4E92\u9608\u503C\uFF0C\u9ED8\u8BA4\u4E3A 2",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"2",paraId:4,tocIndex:3},{value:"actionItemsDropdownProps",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u6309\u94AE\u4E0B\u62C9\u83DC\u5355\u5C5E\u6027\uFF0C\u89C1 Antd Dropdown \u7EC4\u4EF6",paraId:4,tocIndex:3},{value:"DropDownProps",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortMode",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u65B9\u6848\uFF0C\u524D\u7AEF\u6392\u5E8F\u6216\u540E\u7AEF\u6392\u5E8F",paraId:4,tocIndex:3},{value:"'local' | 'local-all' | 'service' | 'service-all'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortStringValueTransform",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u5B57\u7B26\u4E32\u6570\u636E\u8F6C\u6362\u65B9\u6848",paraId:4,tocIndex:3},{value:"(value: string) => string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"autoScrollY",paraId:4,tocIndex:3},{value:"\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u8868\u683C scrollY \u5C5E\u6027\uFF0C\u8FBE\u5230\u9002\u914D\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u201D\u4E00\u5C4F\u663E\u793A\u201C\u6548\u679C",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"summaryText",paraId:4,tocIndex:3},{value:"\u5408\u8BA1\u680F\u6587\u6848",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"\u5408\u8BA1",paraId:4,tocIndex:3},{value:"registerValueType",paraId:4,tocIndex:3},{value:"\u6CE8\u518C valueType, \u540C\u540D\u5C06\u8986\u76D6",paraId:4,tocIndex:3},{value:"{ [type: string]: (p: { value: any; record: IObjectAny; options: IObjectAny; index: number }) => ReactNode }",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u9664 Antd Table Column \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:5,tocIndex:4},{value:"\u53C2\u6570",paraId:6,tocIndex:4},{value:"\u63CF\u8FF0",paraId:6,tocIndex:4},{value:"\u7C7B\u578B",paraId:6,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:4},{value:"sortType",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u7C7B\u578B",paraId:6,tocIndex:4},{value:"'string' | 'number' | 'date'",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"sortDataExtractor",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u6570\u636E\u53D6\u503C\u51FD\u6570\uFF0C\u590D\u6742\u6570\u636E\u63D0\u53D6\u7528",paraId:6,tocIndex:4},{value:"(record: IObjectAny) => string | number",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"valueType",paraId:6,tocIndex:4},{value:"\u6570\u636E\u663E\u793A\u7C7B\u522B",paraId:6,tocIndex:4},{value:"IValueType | ((record: IObjectAny) => { type: IValueType, [props: string]: any })",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"\u5373 ",paraId:7,tocIndex:5},{value:"IActionItem",paraId:7,tocIndex:5},{value:", \u7EE7\u627F Antd Button \u7EC4\u4EF6\u53C2\u6570\uFF0C\u4EE5\u53CA\u4E0B\u9762\u6269\u5C55\u53C2\u6570\u3002",paraId:7,tocIndex:5},{value:"\u53C2\u6570",paraId:8,tocIndex:5},{value:"\u63CF\u8FF0",paraId:8,tocIndex:5},{value:"\u7C7B\u578B",paraId:8,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:5},{value:"text",paraId:8,tocIndex:5},{value:"\u6309\u94AE\u6587\u6848",paraId:8,tocIndex:5},{value:"ReactNode",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"isShow",paraId:8,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmAgain",paraId:8,tocIndex:5},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmProps",paraId:8,tocIndex:5},{value:"\u4E8C\u6B21\u786E\u8BA4 Antd Popconfirm \u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:5},{value:"Omit<PopconfirmProps, 'onConfirm'>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"onClick",paraId:8,tocIndex:5},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE ",paraId:8,tocIndex:5},{value:"Promise",paraId:8,tocIndex:5},{value:"\uFF0C\u5219\u589E\u52A0 ",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" \u6548\u679C",paraId:8,tocIndex:5},{value:"(event: MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5}]},39168:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(8906);const t=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:"ref",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"refresh",paraId:1,tocIndex:1},{value:": \u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"request",paraId:1,tocIndex:1},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRootElement",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:1},{value:"getSearchRef",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u680F\u5B9E\u4F8B\u3002",paraId:1,tocIndex:1},{value:"getDataSource",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setDataSource",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setSummaryData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5408\u8BA1\u680F\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getSearchValue",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u53C2\u6570\u3002",paraId:1,tocIndex:1},{value:"setSearchValue",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"clearSearchValue",paraId:1,tocIndex:1},{value:": \u6E05\u9664\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRequestParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u201C\u5BFC\u51FA\u201D\u65F6\u5E38\u7528\u3002",paraId:1,tocIndex:1},{value:"getRequestExtraParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u989D\u5916\u53C2\u6570\uFF0C\u5982\u6392\u5E8F\u53C2\u6570\u7B49\u3002",paraId:1,tocIndex:1},{value:"updateScrollY",paraId:1,tocIndex:1},{value:": \u66F4\u65B0\u8868\u683C\u9AD8\u5EA6\u4EE5\u8FBE\u5230\u201C\u4E00\u5C4F\u663E\u793A\u201D\u6548\u679C\u3002",paraId:1,tocIndex:1},{value:"openSettingModal",paraId:1,tocIndex:1},{value:": \u6253\u5F00\u5217\u8BBE\u7F6E\u5F39\u7A97\u3002",paraId:1,tocIndex:1},{value:"\u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:2,tocIndex:2},{value:"request",paraId:2,tocIndex:2},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:2,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:2},{value:"(params?: IRequestParams, options?: IRequestOptions) => Promise<IRequestResult>",paraId:3,tocIndex:2},{value:"\u540D\u79F0",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"params",paraId:4,tocIndex:3},{value:"\u641C\u7D22\u53CA\u5206\u9875\u53C2\u6570",paraId:4,tocIndex:3},{value:"IRequestParams",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:"\u5237\u65B0\u9009\u9879\uFF0C\u63A7\u5236\u5237\u65B0\u884C\u4E3A",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:5,tocIndex:3},{value:"\u540D\u79F0",paraId:6,tocIndex:3},{value:"\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"overwrite",paraId:6,tocIndex:3},{value:"\u662F\u5426\u8986\u76D6\u53C2\u6570\u65B9\u5F0F\u5237\u65B0\uFF0C\u9ED8\u8BA4 ",paraId:6,tocIndex:3},{value:"false",paraId:6,tocIndex:3},{value:" \u5373\u5408\u5E76\u5165\u53C2",paraId:6,tocIndex:3},{value:"boolean",paraId:6,tocIndex:3}]},9382:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(34451);const t=[]},93283:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(24311);const t=[{value:"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E8C\u6B21\u5C01\u88C5 SearchTable \u4EE5\u9002\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u5E38\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u64CD\u4F5C\u5217\u7684\u94FE\u63A5\u8DF3\u8F6C\u662F\u5355\u9875\u8DF3\u8F6C\u800C\u4E0D\u662F",paraId:0,tocIndex:0},{value:"<a>",paraId:0,tocIndex:0},{value:" \u6807\u7B7E\u7684\u5237\u65B0\u8DF3\u8F6C\uFF0C\u57FA\u4E8E\u6B64\u9700\u6C42\u6211\u4EEC\u4EE5 ",paraId:0,tocIndex:0},{value:"Next.js",paraId:0,tocIndex:0},{value:" \u5355\u9875\u8DF3\u8F6C\u4E8C\u6B21\u5C01\u88C5\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:`import { useRef, forwardRef, useImperativeHandle } from 'react'
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
`,paraId:1,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u64CD\u4F5C\u5217\u6309\u94AE\u589E\u52A0\u300C\u6743\u9650\u6821\u9A8C\u300D\u7684\u903B\u8F91\u7B49\uFF08\u589E\u52A0\u6743\u9650\u914D\u7F6E\u5C5E\u6027\uFF0C\u7ED3\u5408 isShow \u5C5E\u6027\u5B9E\u73B0\uFF09\uFF0C\u5C01\u88C5\u65B9\u5F0F\u96F7\u540C\u3002",paraId:2}]},92724:function(G,c,e){e.r(c),e.d(c,{texts:function(){return t}});var _=e(63710);const t=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:0},{value:"search: false",paraId:0,tocIndex:0},{value:" \u53EF\u9690\u85CF\u641C\u7D22\u533A\u57DF",paraId:0,tocIndex:0}]},36005:function(G,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
