"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[843],{19996:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),40613:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return M}});var i=e(11604),v=e.n(i),L=e(55420),C=e.n(L),W=e(1974),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(51252),A=e(12431),M={"examples-core-react-002-quick-start-demo-0":{component:E.memo(E.lazy(N()(C()().mark(function b(){var p,o,a,t,s,n,r,l;return C()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return p=h.sent,o=p.default,h.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return a=h.sent,t=a.Input,s=function(y){var R=y.schema,g=y.body;return E.createElement("div",null,E.createElement("h3",null,R.title),E.createElement("div",null,g))},n={InputText:{component:function(y){var R=y.schema,g=y.value,f=y.onChange;return E.createElement(t,c()(c()({},R.renderOptions),{},{value:g,onChange:function(x){return f(x.target.value)}}))}},Textarea:{component:function(y){var R=y.schema,g=y.value,f=y.onChange;return E.createElement(t.TextArea,c()(c()({placeholder:"\u8BF7\u8F93\u5165".concat(R.title)},R.renderOptions),{},{value:g,onChange:function(x){return f(x.target.value)}}))}}},r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},l=function(){return E.createElement(o,{itemLayout:s,renderers:n,schema:r})},h.abrupt("return",{default:l});case 13:case"end":return h.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"}},entry:"index.jsx"},routeId:"examples/core-react/002-quick-start",context:{"@schema-render/core-react":S,antd:A},renderOpts:{compile:(function(){var b=N()(C()().mark(function o(){var a,t=arguments;return C()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-002-quick-start-demo-1":{component:E.memo(E.lazy(N()(C()().mark(function b(){var p,o,a,t,s,n,r,l,d,h;return C()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return p=y.sent,o=p.default,y.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return a=y.sent,t=a.Input,y.next=10,Promise.resolve().then(e.t.bind(e,96540,19));case 10:return s=y.sent,n=s.useState,r=function(g){var f=g.schema,O=g.body;return E.createElement("div",null,E.createElement("h3",null,f.title),E.createElement("div",null,O))},l={InputText:{component:function(g){var f=g.schema,O=g.value,x=g.onChange;return E.createElement(t,c()(c()({},f.renderOptions),{},{value:O,onChange:function(D){return x(D.target.value)}}))}},Textarea:{component:function(g){var f=g.schema,O=g.value,x=g.onChange;return E.createElement(t.TextArea,c()(c()({placeholder:"\u8BF7\u8F93\u5165".concat(f.title)},f.renderOptions),{},{value:O,onChange:function(D){return x(D.target.value)}}))}}},d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},h=function(){var g=n({}),f=v()(g,2),O=f[0],x=f[1];return E.createElement("div",null,E.createElement(o,{itemLayout:r,renderers:l,schema:d,onChange:x}),E.createElement("h4",null,"\u6253\u5370\u8868\u5355\u6570\u636E\uFF1A"),E.createElement("pre",{style:{padding:"1em",background:"#f6f6f6"}},JSON.stringify(O,null,2)))},y.abrupt("return",{default:h});case 17:case"end":return y.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},routeId:"examples/core-react/002-quick-start",context:{"@schema-render/core-react":S,antd:A,react:P||(P=e.t(E,2))},renderOpts:{compile:(function(){var b=N()(C()().mark(function o(){var a,t=arguments;return C()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),15891:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return A}});var i=e(11604),v=e.n(i),L=e(55420),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(51252),E=e(67758),S=e(67684),A={"examples-core-react-003-schema-demo-0":{component:u.memo(u.lazy(c()(C()().mark(function M(){var b,p,o,a,t,s,n,r;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return b=d.sent,p=b.default,d.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return o=d.sent,a=o.default,d.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return t=d.sent,s=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{placeholder:"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 placeholder"}},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u751C\u751C\u7684\u6C34\u679C",options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return u.createElement(p,{schema:n,itemLayout:a,renderers:s})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/003-schema",context:{"./renderers/common.tsx":E,"./item-layout/Horizontal.tsx":S,"@schema-render/core-react":N,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S},renderOpts:{compile:(function(){var M=c()(C()().mark(function p(){var o,a=arguments;return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}},"examples-core-react-003-schema-demo-1":{component:u.memo(u.lazy(c()(C()().mark(function M(){var b,p,o,a,t,s,n,r;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return b=d.sent,p=b.default,d.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return o=d.sent,a=o.default,d.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return t=d.sent,s=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u5FC5\u586B"},fruit:{title:"\u6C34\u679C",renderType:"Select",required:"$.open",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return u.createElement(p,{schema:n,itemLayout:a,renderers:s})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/003-schema",context:{"./renderers/common.tsx":E,"./item-layout/Horizontal.tsx":S,"@schema-render/core-react":N,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S},renderOpts:{compile:(function(){var M=c()(C()().mark(function p(){var o,a=arguments;return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}},"examples-core-react-003-schema-demo-2":{component:u.memo(u.lazy(c()(C()().mark(function M(){var b,p,o,a,t,s,n,r;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return b=d.sent,p=b.default,d.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return o=d.sent,a=o.default,d.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return t=d.sent,s=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",disabled:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u7981\u7528"},fruit:{title:"\u6C34\u679C",renderType:"Select",disabled:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return u.createElement(p,{schema:n,itemLayout:a,renderers:s})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/003-schema",context:{"./renderers/common.tsx":E,"./item-layout/Horizontal.tsx":S,"@schema-render/core-react":N,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S},renderOpts:{compile:(function(){var M=c()(C()().mark(function p(){var o,a=arguments;return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}},"examples-core-react-003-schema-demo-3":{component:u.memo(u.lazy(c()(C()().mark(function M(){var b,p,o,a,t,s,n,r,l,d;return C()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return b=I.sent,p=b.useState,I.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return o=I.sent,a=o.default,I.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return t=I.sent,s=t.default,I.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return n=I.sent,r=n.default,l={renderType:"Root",properties:{title:{title:"\u63D0\u95EE",renderType:"InputText",readonly:!0},fruit:{title:"\u7B54\u6848",renderType:"Select",readonly:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}},open:{renderType:"Switch",title:"\u5207\u6362\u5230\u53EA\u8BFB\u6001"}}},d=function(){var R=p({title:"\u54EA\u4E00\u79CD\u6C34\u679C\u6700\u751C\u5462",fruit:"watermelon"}),g=v()(R,2),f=g[0],O=g[1];return u.createElement(a,{value:f,schema:l,onChange:O,itemLayout:s,renderers:r})},I.abrupt("return",{default:d});case 19:case"end":return I.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/003-schema",context:{"./renderers/common.tsx":E,"./item-layout/Horizontal.tsx":S,react:P||(P=e.t(u,2)),"@schema-render/core-react":N,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S},renderOpts:{compile:(function(){var M=c()(C()().mark(function p(){var o,a=arguments;return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}},"examples-core-react-003-schema-demo-4":{component:u.memo(u.lazy(c()(C()().mark(function M(){var b,p,o,a,t,s,n,r;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return b=d.sent,p=b.default,d.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return o=d.sent,a=o.default,d.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return t=d.sent,s=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",hidden:!0},open:{renderType:"Switch",title:"\u9690\u85CF\u6C34\u679C\u9009\u62E9"},fruit:{title:"\u6C34\u679C",renderType:"Select",hidden:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},r=function(){return u.createElement(p,{schema:n,itemLayout:a,renderers:s})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/003-schema",context:{"./renderers/common.tsx":E,"./item-layout/Horizontal.tsx":S,"@schema-render/core-react":N,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S},renderOpts:{compile:(function(){var M=c()(C()().mark(function p(){var o,a=arguments;return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}},"examples-core-react-003-schema-demo-5":{component:u.memo(u.lazy(c()(C()().mark(function M(){var b,p,o,a,t,s,n,r;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return b=d.sent,p=b.default,d.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return o=d.sent,a=o.default,d.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return t=d.sent,s=t.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6C34\u679C"}]}}},r=function(){return u.createElement(p,{schema:n,itemLayout:a,renderers:s})},d.abrupt("return",{default:r});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/003-schema",context:{"./renderers/common.tsx":E,"./item-layout/Horizontal.tsx":S,"@schema-render/core-react":N,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S},renderOpts:{compile:(function(){var M=c()(C()().mark(function p(){var o,a=arguments;return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}}}}),80996:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return N}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(51252),c=e(67758),u=e(67684),N={"examples-core-react-100-layout-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function E(){var S,A,M,b,p,o,a,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return S=n.sent,A=S.default,n.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return M=n.sent,b=M.default,n.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return p=n.sent,o=p.default,a={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return C.createElement(A,{layout:"normal",schema:a,itemLayout:b,renderers:o})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/100-layout",context:{"./renderers/common.tsx":c,"./item-layout/Horizontal.tsx":u,"@schema-render/core-react":W,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":c,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":u},renderOpts:{compile:(function(){var E=L()(i()().mark(function A(){var M,b=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(1478).then(e.bind(e,71478));case 2:return o.abrupt("return",(M=o.sent).default.apply(M,b));case 3:case"end":return o.stop()}},A)}));function S(){return E.apply(this,arguments)}return S})()}},"examples-core-react-100-layout-demo-1":{component:C.memo(C.lazy(L()(i()().mark(function E(){var S,A,M,b,p,o,a,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return S=n.sent,A=S.default,n.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return M=n.sent,b=M.default,n.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return p=n.sent,o=p.default,a={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber",span:12},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber",span:12},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber",span:12,spanStart:1},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber",span:12},rotate:{title:"\u65CB\u8F6C\u89D2\u5EA6",renderType:"InputNumber"}}},t=function(){return C.createElement(A,{layout:"normal",schema:a,itemLayout:b,renderers:o})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/100-layout",context:{"./renderers/common.tsx":c,"./item-layout/Horizontal.tsx":u,"@schema-render/core-react":W,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":c,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":u},renderOpts:{compile:(function(){var E=L()(i()().mark(function A(){var M,b=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(1478).then(e.bind(e,71478));case 2:return o.abrupt("return",(M=o.sent).default.apply(M,b));case 3:case"end":return o.stop()}},A)}));function S(){return E.apply(this,arguments)}return S})()}},"examples-core-react-100-layout-demo-2":{component:C.memo(C.lazy(L()(i()().mark(function E(){var S,A,M,b,p,o,a,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return S=n.sent,A=S.default,n.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return M=n.sent,b=M.default,n.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return p=n.sent,o=p.default,a={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return C.createElement(A,{schema:a,layout:"autoFill",itemLayout:b,renderers:o})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/100-layout",context:{"./renderers/common.tsx":c,"./item-layout/Horizontal.tsx":u,"@schema-render/core-react":W,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":c,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":u},renderOpts:{compile:(function(){var E=L()(i()().mark(function A(){var M,b=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(1478).then(e.bind(e,71478));case 2:return o.abrupt("return",(M=o.sent).default.apply(M,b));case 3:case"end":return o.stop()}},A)}));function S(){return E.apply(this,arguments)}return S})()}},"examples-core-react-100-layout-demo-3":{component:C.memo(C.lazy(L()(i()().mark(function E(){var S,A,M,b,p,o,a,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return S=n.sent,A=S.default,n.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return M=n.sent,b=M.default,n.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return p=n.sent,o=p.default,a={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return C.createElement(A,{schema:a,layout:"autoFit",itemLayout:b,renderers:o})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/100-layout",context:{"./renderers/common.tsx":c,"./item-layout/Horizontal.tsx":u,"@schema-render/core-react":W,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":c,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":u},renderOpts:{compile:(function(){var E=L()(i()().mark(function A(){var M,b=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(1478).then(e.bind(e,71478));case 2:return o.abrupt("return",(M=o.sent).default.apply(M,b));case 3:case"end":return o.stop()}},A)}));function S(){return E.apply(this,arguments)}return S})()}},"examples-core-react-100-layout-demo-4":{component:C.memo(C.lazy(L()(i()().mark(function E(){var S,A,M,b,p,o,a,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return S=n.sent,A=S.default,n.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return M=n.sent,b=M.default,n.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return p=n.sent,o=p.default,a={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return C.createElement(A,{schema:a,layout:"autoFill",layoutMinMax:[230,230],itemLayout:b,renderers:o})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/100-layout",context:{"./renderers/common.tsx":c,"./item-layout/Horizontal.tsx":u,"@schema-render/core-react":W,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":c,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":u},renderOpts:{compile:(function(){var E=L()(i()().mark(function A(){var M,b=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(1478).then(e.bind(e,71478));case 2:return o.abrupt("return",(M=o.sent).default.apply(M,b));case 3:case"end":return o.stop()}},A)}));function S(){return E.apply(this,arguments)}return S})()}}}}),38357:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return b}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(51252),c=e(41523),u=e(12431),N=e(46942),E=e.n(N),S=e(81194),A=e(67758),M=e(51800),b={"examples-core-react-101-item-layout-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g,f;return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return o=x.sent,a=o.default,x.next=6,Promise.resolve().then(e.bind(e,41523));case 6:return t=x.sent,s=t.QuestionCircleOutlined,x.next=10,Promise.resolve().then(e.bind(e,12431));case 10:return n=x.sent,r=n.Popover,x.next=14,Promise.resolve().then(e.t.bind(e,46942,23));case 14:return l=x.sent,d=l.default,x.next=18,Promise.resolve().then(e.bind(e,67758));case 18:return h=x.sent,I=h.default,x.next=22,Promise.resolve().then(e.bind(e,81194));case 22:return y=x.sent,R=function(D){var B=D.body,$=D.schema,T=D.validator,K=D.required,F=D.prefixClassNames;return C.createElement("div",{className:F("item-layout-vertical")},C.createElement("div",{className:d(F("item-header"),y.header)},K&&C.createElement("span",{className:d(F("item-mark"),y.mark)},"*"),C.createElement("span",{className:d(F("item-title"),y.title)},$.title),!!$.titleDescription&&C.createElement(r,{placement:"top",trigger:"hover",content:$.titleDescription},C.createElement(s,{className:d(F("item-title-tooltip"),y.titleTooltip)}))),C.createElement("div",{className:F("item-body")},B),C.createElement("div",{className:d(F("item-footer"),y.footer)},T.status==="error"&&!!T.message&&C.createElement("div",{className:d(F("item-error-msg"),y.errorMsg)},T.message),!!$.description&&C.createElement("div",{className:d(F("item-desc"),y.desc)},$.description)))},g={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){return C.createElement(a,{schema:g,itemLayout:R,renderers:I})},x.abrupt("return",{default:f});case 27:case"end":return x.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},antd:{type:"NPM",value:"6.7.0"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Vertical/styles.ts":{type:"FILE",value:e(24621).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/101-item-layout",context:{"./item-layout/Vertical/styles.ts":S,"./renderers/common.tsx":A,"@schema-render/core-react":W,"@ant-design/icons":c,antd:u,classnames:N,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Vertical/styles.ts":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var p=L()(i()().mark(function a(){var t,s=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-core-react-101-item-layout-demo-1":{component:C.memo(C.lazy(L()(i()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g,f;return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return o=x.sent,a=o.default,x.next=6,Promise.resolve().then(e.bind(e,41523));case 6:return t=x.sent,s=t.QuestionCircleOutlined,x.next=10,Promise.resolve().then(e.bind(e,12431));case 10:return n=x.sent,r=n.Popover,x.next=14,Promise.resolve().then(e.t.bind(e,46942,23));case 14:return l=x.sent,d=l.default,x.next=18,Promise.resolve().then(e.bind(e,67758));case 18:return h=x.sent,I=h.default,x.next=22,Promise.resolve().then(e.bind(e,51800));case 22:return y=x.sent,R=function(D){var B=D.body,$=D.schema,T=D.validator,K=D.required,F=D.prefixClassNames;return C.createElement("div",{className:d(F("item-layout-horizontal"),y.horizontal)},C.createElement("div",{className:d(F("item-main"),y.main)},C.createElement("div",{className:d(F("item-header"),y.header)},K&&C.createElement("span",{className:d(F("item-mark"),y.mark)},"*"),C.createElement("span",{className:d(F("item-title"),y.title)},$.title),!!$.titleDescription&&C.createElement(r,{placement:"top",trigger:"hover",content:$.titleDescription},C.createElement(s,{className:d(F("item-title-tooltip"),y.titleTooltip)}))),C.createElement("div",{className:d(F("item-body"),y.body)},B)),C.createElement("div",{className:d(F("item-footer"),y.footer)},T.status==="error"&&!!T.message&&C.createElement("div",{className:d(F("item-error-msg"),y.errorMsg)},T.message),!!$.description&&C.createElement("div",{className:d(F("item-desc"),y.desc)},$.description)))},g={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){return C.createElement(a,{schema:g,itemLayout:R,renderers:I})},x.abrupt("return",{default:f});case 27:case"end":return x.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},antd:{type:"NPM",value:"6.7.0"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal/styles.ts":{type:"FILE",value:e(14963).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/101-item-layout",context:{"./item-layout/Horizontal/styles.ts":M,"./renderers/common.tsx":A,"@schema-render/core-react":W,"@ant-design/icons":c,antd:u,classnames:N,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/styles.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var p=L()(i()().mark(function a(){var t,s=arguments;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),24337:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return N}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(51252),c=e(67758),u=e(67684),N={"examples-core-react-102-prefix-cls-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function E(){var S,A,M,b,p,o,a,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return S=n.sent,A=S.default,n.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return M=n.sent,b=M.default,n.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return p=n.sent,o=p.default,a={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},t=function(){return C.createElement(A,{schema:a,itemLayout:b,renderers:o,prefixCls:"my-cls"})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"examples-core-react-102-prefix-cls-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/102-prefix-cls",context:{"./renderers/common.tsx":c,"./item-layout/Horizontal.tsx":u,"@schema-render/core-react":W,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":c,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":u},renderOpts:{compile:(function(){var E=L()(i()().mark(function A(){var M,b=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(1478).then(e.bind(e,71478));case 2:return o.abrupt("return",(M=o.sent).default.apply(M,b));case 3:case"end":return o.stop()}},A)}));function S(){return E.apply(this,arguments)}return S})()}}}}),58148:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return o}});var i=e(1974),v=e.n(i),L=e(55420),C=e.n(L),W=e(11604),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(51252),A=e(55173),M=e(67684),b=e(67758),p=e(12431),o={"examples-core-react-200-change-event-demo-0":{component:E.memo(E.lazy(N()(C()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f;return C()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return t=x.sent,s=t.useState,x.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return n=x.sent,r=n.default,x.next=10,Promise.resolve().then(e.bind(e,55173));case 10:return l=x.sent,d=l.default,x.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return h=x.sent,I=h.default,x.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return y=x.sent,R=y.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},f=function(){var D=s({}),B=c()(D,2),$=B[0],T=B[1];return E.createElement("div",{className:"example-layout-cols-2"},E.createElement(r,{schema:g,itemLayout:R,renderers:I,value:$,onChange:function(F){return T(F)}}),E.createElement(d,{value:$}))},x.abrupt("return",{default:f});case 23:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/200-change-event",context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":b,react:P||(P=e.t(E,2)),"@schema-render/core-react":S,"@examples/components/SyntaxHighlighter":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":b},renderOpts:{compile:(function(){var a=N()(C()().mark(function s(){var n,r=arguments;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}},"examples-core-react-200-change-event-demo-1":{component:E.memo(E.lazy(N()(C()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f;return C()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return t=x.sent,s=t.useState,x.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return n=x.sent,r=n.default,x.next=10,Promise.resolve().then(e.bind(e,55173));case 10:return l=x.sent,d=l.default,x.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return h=x.sent,I=h.default,x.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return y=x.sent,R=y.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},f=function(){var D=s({}),B=c()(D,2),$=B[0],T=B[1];return E.createElement("div",{className:"example-layout-cols-2"},E.createElement(r,{schema:g,itemLayout:R,renderers:I,onChange:function(F,H){return T(H)}}),E.createElement(d,{value:$}))},x.abrupt("return",{default:f});case 23:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/200-change-event",context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":b,react:P||(P=e.t(E,2)),"@schema-render/core-react":S,"@examples/components/SyntaxHighlighter":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":b},renderOpts:{compile:(function(){var a=N()(C()().mark(function s(){var n,r=arguments;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}},"examples-core-react-200-change-event-demo-2":{component:E.memo(E.lazy(N()(C()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f;return C()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return t=x.sent,s=t.useState,x.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return n=x.sent,r=n.default,x.next=10,Promise.resolve().then(e.bind(e,55173));case 10:return l=x.sent,d=l.default,x.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return h=x.sent,I=h.default,x.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return y=x.sent,R=y.default,g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},f=function(){var D=s({}),B=c()(D,2),$=B[0],T=B[1];return E.createElement("div",{className:"example-layout-cols-2"},E.createElement(r,{schema:g,itemLayout:R,renderers:I,onItemChange:function(F){return T(F)}}),E.createElement(d,{value:$}))},x.abrupt("return",{default:f});case 23:case"end":return x.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/200-change-event",context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":b,react:P||(P=e.t(E,2)),"@schema-render/core-react":S,"@examples/components/SyntaxHighlighter":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":b},renderOpts:{compile:(function(){var a=N()(C()().mark(function s(){var n,r=arguments;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}},"examples-core-react-200-change-event-demo-3":{component:E.memo(E.lazy(N()(C()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D;return C()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return t=$.sent,s=t.useState,$.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return n=$.sent,r=n.Input,$.next=10,Promise.resolve().then(e.bind(e,51252));case 10:return l=$.sent,d=l.default,$.next=14,Promise.resolve().then(e.bind(e,55173));case 14:return h=$.sent,I=h.default,$.next=18,Promise.resolve().then(e.bind(e,67758));case 18:return y=$.sent,R=y.default,$.next=22,Promise.resolve().then(e.bind(e,67684));case 22:return g=$.sent,f=g.default,O={component:function(K){var F,H=K.schema,U=K.value,V=K.disabled,z=K.onChange;return E.createElement(r,v()(v()({placeholder:"\u8BF7\u8F93\u5165".concat((F=H.title)!==null&&F!==void 0?F:"")},H.renderOptions),{},{value:U,disabled:V,onChange:function(Q){z(Q.target.value,{extra:Math.random()})}}))}},x=v()({InputTextWithExtra:O},R),j={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputTextWithExtra"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},D=function(){var K=s({}),F=c()(K,2),H=F[0],U=F[1];return E.createElement("div",{className:"example-layout-cols-2"},E.createElement(d,{schema:j,itemLayout:f,renderers:x,onItemChange:function(z){return U(z)}}),E.createElement(I,{value:H}))},$.abrupt("return",{default:D});case 29:case"end":return $.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/200-change-event",context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":b,react:P||(P=e.t(E,2)),antd:p,"@schema-render/core-react":S,"@examples/components/SyntaxHighlighter":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":b},renderOpts:{compile:(function(){var a=N()(C()().mark(function s(){var n,r=arguments;return C()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}}}}),69954:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return b}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(51252),E=e(55173),S=e(67684),A=e(67758),M=e(12431),b={"examples-core-react-210-relation-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=f.sent,a=o.useState,f.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return t=f.sent,s=t.default,f.next=10,Promise.resolve().then(e.bind(e,55173));case 10:return n=f.sent,r=n.default,f.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return l=f.sent,d=l.default,f.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return h=f.sent,I=h.default,y={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},R=function(){var x=a({}),j=C()(x,2),D=j[0],B=j[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(s,{schema:y,itemLayout:I,renderers:d,value:D,onChange:function(T,K){(K.sPath==="width"||K.sPath==="height")&&(T.width=K.value,T.height=K.value),B(T)}}),u.createElement(r,{value:D}))},f.abrupt("return",{default:R});case 23:case"end":return f.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/210-relation",context:{"./item-layout/Horizontal.tsx":S,"./renderers/common.tsx":A,react:P||(P=e.t(u,2)),"@schema-render/core-react":N,"@examples/components/SyntaxHighlighter":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-core-react-210-relation-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=f.sent,a=o.useState,f.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return t=f.sent,s=t.default,f.next=10,Promise.resolve().then(e.bind(e,55173));case 10:return n=f.sent,r=n.default,f.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return l=f.sent,d=l.default,f.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return h=f.sent,I=h.default,y={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},R=function(){var x=a({}),j=C()(x,2),D=j[0],B=j[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(s,{schema:y,itemLayout:I,renderers:d,watch:{width:function(T){T.height=T.width},height:function(T){T.width=T.height}},value:D,onChange:B}),u.createElement(r,{value:D}))},f.abrupt("return",{default:R});case 23:case"end":return f.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/210-relation",context:{"./item-layout/Horizontal.tsx":S,"./renderers/common.tsx":A,react:P||(P=e.t(u,2)),"@schema-render/core-react":N,"@examples/components/SyntaxHighlighter":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-core-react-210-relation-demo-2":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g,f;return v()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=x.sent,a=o.useState,x.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return t=x.sent,s=t.Button,x.next=10,Promise.resolve().then(e.bind(e,51252));case 10:return n=x.sent,r=n.default,x.next=14,Promise.resolve().then(e.bind(e,55173));case 14:return l=x.sent,d=l.default,x.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return h=x.sent,I=h.default,y={BankSelect:{component:function(D){var B=D.value,$=D.sPath,T=D.onChange,K=function(){var U=String(Math.random()).slice(2,6),V={bank_id:"id_".concat(U),bank_account:"111222333".concat(U),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(U),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(U,"\u652F\u884C")};T(V[$],{extra:V})},F={display:"flex",width:160,padding:"4px 10px",marginRight:10,border:"1px solid #ececec",borderRadius:6};return u.createElement("div",{style:{display:"flex"}},u.createElement("div",{style:F},B),u.createElement(s,{onClick:K},"\u9009\u62E9\u8D26\u6237"))}}},R={renderType:"Root",properties:{bank_account:{title:"\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},bank_name:{title:"\u5F00\u6237\u94F6\u884C",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C",renderType:"BankSelect"}}},g=function(D,B){D.bank_id=B.extra.bank_id,D.bank_account=B.extra.bank_account,D.bank_name=B.extra.bank_name,D.bank_branch_name=B.extra.bank_branch_name},f=function(){var D=a({}),B=C()(D,2),$=B[0],T=B[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(r,{schema:R,itemLayout:I,renderers:y,watch:{bank_account:g,bank_name:g,bank_branch_name:g},value:$,onChange:T}),u.createElement(d,{value:$}))},x.abrupt("return",{default:f});case 25:case"end":return x.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.jsx"},routeId:"examples/core-react/210-relation",context:{"./item-layout/Horizontal.tsx":S,react:P||(P=e.t(u,2)),antd:M,"@schema-render/core-react":N,"@examples/components/SyntaxHighlighter":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),89212:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return b}});var i=e(11604),v=e.n(i),L=e(1974),C=e.n(L),W=e(55420),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(12431),A=e(51252),M=e(67684),b={"examples-core-react-220-renderer-demo-0":{component:E.memo(E.lazy(N()(c()().mark(function p(){var o,a,t,s,n,r,l,d,h;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return o=y.sent,a=o.Rate,y.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return t=y.sent,s=t.default,y.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return n=y.sent,r=n.default,l={MyRate:{component:function(g){var f=g.disabled,O=g.value,x=g.onChange;return E.createElement(a,{disabled:f,value:O,onChange:x})}}},d={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},h=function(){return E.createElement(s,{schema:d,itemLayout:r,renderers:l})},y.abrupt("return",{default:h});case 16:case"end":return y.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/220-renderer",context:{"./item-layout/Horizontal.tsx":M,antd:S,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:(function(){var p=N()(c()().mark(function a(){var t,s=arguments;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-core-react-220-renderer-demo-1":{component:E.memo(E.lazy(N()(c()().mark(function p(){var o,a,t,s,n,r,l,d,h;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return o=y.sent,a=o.Rate,y.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return t=y.sent,s=t.default,y.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return n=y.sent,r=n.default,l={MyRate:{formItem:function(g){var f=g.schema,O=g.disabled,x=g.value,j=g.onChange;return E.createElement("div",null,E.createElement("strong",{style:{color:"red",marginRight:10}},"\u3010",f.title,"\u3011"),E.createElement(a,{disabled:O,value:x,onChange:j}))}}},d={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},h=function(){return E.createElement(s,{schema:d,itemLayout:r,renderers:l})},y.abrupt("return",{default:h});case 16:case"end":return y.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/220-renderer",context:{"./item-layout/Horizontal.tsx":M,antd:S,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:(function(){var p=N()(c()().mark(function a(){var t,s=arguments;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-core-react-220-renderer-demo-2":{component:E.memo(E.lazy(N()(c()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=f.sent,a=o.useState,f.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return t=f.sent,s=t.default,f.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return n=f.sent,r=n.default,f.next=14,Promise.resolve().then(e.bind(e,12431));case 14:return l=f.sent,d=l.Button,h=l.Input,I={InputText:{component:function(x){var j,D=x.schema,B=x.value,$=x.disabled,T=x.readonly,K=x.onChange;return T?E.createElement("div",null,B):E.createElement(h,C()(C()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((j=D.title)!==null&&j!==void 0?j:"")},D.renderOptions),{},{value:B!=null?B:"",disabled:$,onChange:function(H){return K(H.target.value)}}))}},TextArea:{component:function(x){var j,D=x.schema,B=x.value,$=x.disabled,T=x.onChange;return E.createElement(h.TextArea,C()(C()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((j=D.title)!==null&&j!==void 0?j:"")},D.renderOptions),{},{value:B!=null?B:"",onChange:function(F){return T(F.target.value)},disabled:$}))},readonlyComponent:function(x){var j=x.value;return E.createElement("div",null,j)}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},R=function(){var x=a(!1),j=v()(x,2),D=j[0],B=j[1],$=a({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),T=v()($,2),K=T[0],F=T[1];return E.createElement("div",{style:{maxWidth:500}},E.createElement(s,{schema:y,itemLayout:r,renderers:I,value:K,onChange:F,readonly:D}),E.createElement(d,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return B(!D)}},D?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},f.abrupt("return",{default:R});case 21:case"end":return f.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.jsx"},routeId:"examples/core-react/220-renderer",context:{"./item-layout/Horizontal.tsx":M,react:P||(P=e.t(E,2)),"@schema-render/core-react":A,antd:S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:(function(){var p=N()(c()().mark(function a(){var t,s=arguments;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),85819:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return p}});var i=e(55420),v=e.n(i),L=e(1974),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(12431),E=e(51252),S=e(27845),A=e(67684),M=e(24512),b=e(69337),p={"examples-core-react-221-renderer-object-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O;return v()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return a=j.sent,t=a.Input,j.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return s=j.sent,n=s.default,j.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return r=j.sent,l=r.default,j.next=14,Promise.resolve().then(e.bind(e,24512));case 14:return d=j.sent,h=d.default,j.next=18,Promise.resolve().then(e.bind(e,69337));case 18:return I=j.sent,y=I.default,j.next=22,Promise.resolve().then(e.bind(e,27845));case 22:return R=j.sent,g=R.default,f={Object:g,ObjectCollapse:y,InputText:{component:function(B){var $,T=B.schema,K=B.value,F=B.disabled,H=B.onChange;return u.createElement(t,C()(C()({placeholder:"\u8BF7\u8F93\u5165".concat(($=T.title)!==null&&$!==void 0?$:"")},T.renderOptions),{},{value:K,disabled:F,onChange:function(V){return H(V.target.value)}}))}}},O=function(){return u.createElement(n,{schema:h,itemLayout:l,renderers:f})},j.abrupt("return",{default:O});case 27:case"end":return j.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(50748).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./schemas/object.ts":{type:"FILE",value:e(33727).A},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(11480).A}},entry:"index.jsx"},routeId:"examples/core-react/221-renderer-object",context:{"./renderers/object/ObjectNormal.tsx":S,"./item-layout/Horizontal.tsx":A,"./schemas/object.ts":M,"./renderers/object/ObjectCollapse.tsx":b,antd:N,"@schema-render/core-react":E,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":b},renderOpts:{compile:(function(){var o=c()(v()().mark(function t(){var s,n=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}},"examples-core-react-221-renderer-object-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B,$;return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return a=K.sent,t=a.Input,K.next=6,Promise.resolve().then(e.t.bind(e,96540,19));case 6:return s=K.sent,n=s.useRef,K.next=10,Promise.resolve().then(e.bind(e,51252));case 10:return r=K.sent,l=r.default,K.next=14,Promise.resolve().then(e.bind(e,12431));case 14:return d=K.sent,h=d.Button,I=d.message,K.next=19,Promise.resolve().then(e.bind(e,67684));case 19:return y=K.sent,R=y.default,K.next=23,Promise.resolve().then(e.bind(e,24512));case 23:return g=K.sent,f=g.default,K.next=27,Promise.resolve().then(e.bind(e,69337));case 27:return O=K.sent,x=O.default,K.next=31,Promise.resolve().then(e.bind(e,27845));case 31:return j=K.sent,D=j.default,B={Object:D,ObjectCollapse:x,InputText:{component:function(H){var U,V=H.schema,z=H.value,J=H.disabled,Q=H.onChange;return u.createElement(t,C()(C()({placeholder:"\u8BF7\u8F93\u5165".concat((U=V.title)!==null&&U!==void 0?U:"")},V.renderOptions),{},{value:z,disabled:J,onChange:function(w){return Q(w.target.value)}}))}}},$=function(){var H=n(null),U=(function(){var V=c()(v()().mark(function z(){var J,Q,ee;return v()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,(J=H.current)===null||J===void 0?void 0:J.validate();case 2:Q=oe.sent,ee=Q.hasError,ee||I.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return oe.stop()}},z)}));return function(){return V.apply(this,arguments)}})();return u.createElement("div",null,u.createElement(l,{ref:H,schema:f,itemLayout:R,renderers:B}),u.createElement(h,{type:"primary",onClick:U,style:{marginTop:15}},"\u63D0\u4EA4"))},K.abrupt("return",{default:$});case 36:case"end":return K.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(50748).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./schemas/object.ts":{type:"FILE",value:e(33727).A},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(11480).A}},entry:"index.tsx"},routeId:"examples/core-react/221-renderer-object",context:{"./renderers/object/ObjectNormal.tsx":S,"./item-layout/Horizontal.tsx":A,"./schemas/object.ts":M,"./renderers/object/ObjectCollapse.tsx":b,antd:N,react:P||(P=e.t(u,2)),"@schema-render/core-react":E,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":b},renderOpts:{compile:(function(){var o=c()(v()().mark(function t(){var s,n=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}}}}),6382:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),24754:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return p}});var i=e(11604),v=e.n(i),L=e(1974),C=e.n(L),W=e(55420),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(51252),A=e(67758),M=e(67684),b=e(12431),p={"examples-core-react-223-validator-demo-0":{component:E.memo(E.lazy(N()(c()().mark(function o(){var a,t,s,n,r,l,d,h;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return a=y.sent,t=a.default,y.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return s=y.sent,n=s.default,y.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return r=y.sent,l=r.default,d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},h=function(){return E.createElement(t,{schema:d,itemLayout:n,renderers:l})},y.abrupt("return",{default:h});case 15:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.jsx"},routeId:"examples/core-react/223-validator",context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":M,"@schema-render/core-react":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:(function(){var o=N()(c()().mark(function t(){var s,n=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}},"examples-core-react-223-validator-demo-1":{component:E.memo(E.lazy(N()(c()().mark(function o(){var a,t,s,n,r,l,d,h,I,y;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return a=g.sent,t=a.default,g.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return s=g.sent,n=s.default,g.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return r=g.sent,l=r.default,d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{validator:"detectSensitiveWord"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,rules:[{validator:"detectSensitiveWord",message:"TIPS: \u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\u54E6"}]}}},h=(function(){var f=N()(c()().mark(function O(x){return c()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",new Promise(function(B){setTimeout(function(){return B({ok:!1})},200)}));case 1:case"end":return D.stop()}},O)}));return function(x){return f.apply(this,arguments)}})(),I={detectSensitiveWord:(function(){var f=N()(c()().mark(function x(j){var D,B;return c()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return D=j.value,T.next=3,h(D);case 3:if(B=T.sent,B.ok){T.next=6;break}return T.abrupt("return",{status:"error",message:"\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD"});case 6:case"end":return T.stop()}},x)}));function O(x){return f.apply(this,arguments)}return O})()},y=function(){return E.createElement(t,{schema:d,itemLayout:n,renderers:l,validators:I})},g.abrupt("return",{default:y});case 17:case"end":return g.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/223-validator",context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":M,"@schema-render/core-react":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:(function(){var o=N()(c()().mark(function t(){var s,n=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}},"examples-core-react-223-validator-demo-2":{component:E.memo(E.lazy(N()(c()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g;return c()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return a=O.sent,t=a.Rate,O.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return s=O.sent,n=s.default,O.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return r=O.sent,l=r.default,O.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return d=O.sent,h=d.default,I={component:function(j){var D=j.schema,B=j.value,$=j.disabled,T=j.onChange;return E.createElement(t,C()(C()({},D.renderOptions),{},{value:B,disabled:$,onChange:function(F){return T(F)}}))},validator:function(j){var D=j.value;return D===0?{status:"error",message:"\u8BF7\u9009\u62E9\u8BC4\u5206"}:D<=3?{status:"error",message:"\u4EB2\uFF0C\u8BC4\u5206\u53EF\u4EE5\u6253\u9AD8\u4E00\u70B9\u54E6\u{1F62F}"}:{status:"error",message:"\u54C7\uFF0Cnice~"}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"},rate:{renderType:"Rate",title:"\u8BC4\u5206",required:!0}}},R=C()(C()({},h),{},{Rate:I}),g=function(){return E.createElement(n,{schema:y,itemLayout:l,renderers:R})},O.abrupt("return",{default:g});case 21:case"end":return O.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/223-validator",context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":M,antd:b,"@schema-render/core-react":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:(function(){var o=N()(c()().mark(function t(){var s,n=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}},"examples-core-react-223-validator-demo-3":{component:E.memo(E.lazy(N()(c()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O;return c()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return a=j.sent,t=a.useState,s=a.useRef,j.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return n=j.sent,r=n.Button,l=n.message,j.next=12,Promise.resolve().then(e.bind(e,51252));case 12:return d=j.sent,h=d.default,j.next=16,Promise.resolve().then(e.bind(e,67758));case 16:return I=j.sent,y=I.default,j.next=20,Promise.resolve().then(e.bind(e,67684));case 20:return R=j.sent,g=R.default,f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},O=function(){var B=t({}),$=v()(B,2),T=$[0],K=$[1],F=s(null);function H(){return U.apply(this,arguments)}function U(){return U=N()(c()().mark(function V(){var z,J,Q;return c()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,F.current.validate();case 2:if(z=w.sent,J=z.hasError,Q=z.errorList,console.log("[validate] hasError: ",J),console.log("[validate] errorList: ",Q),!J){w.next=9;break}return w.abrupt("return",l.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:l.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return w.stop()}},V)})),U.apply(this,arguments)}return E.createElement("div",null,E.createElement(h,{ref:F,schema:f,value:T,onChange:K,itemLayout:g,renderers:y}),E.createElement(r,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:H},"\u63D0\u4EA4"))},j.abrupt("return",{default:O});case 25:case"end":return j.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/223-validator",context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":A,react:P||(P=e.t(E,2)),antd:b,"@schema-render/core-react":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var o=N()(c()().mark(function t(){var s,n=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}}}}),24e3:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return N}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(51252),c=e(67758),u=e(67684),N={"examples-core-react-230-global-status-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function E(){var S,A,M,b,p,o,a,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return S=n.sent,A=S.default,n.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return M=n.sent,b=M.default,n.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return p=n.sent,o=p.default,a={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return C.createElement(A,{disabled:!0,schema:a,itemLayout:b,renderers:o})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"examples-core-react-230-global-status-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/230-global-status",context:{"./renderers/common.tsx":c,"./item-layout/Horizontal.tsx":u,"@schema-render/core-react":W,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":c,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":u},renderOpts:{compile:(function(){var E=L()(i()().mark(function A(){var M,b=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(1478).then(e.bind(e,71478));case 2:return o.abrupt("return",(M=o.sent).default.apply(M,b));case 3:case"end":return o.stop()}},A)}));function S(){return E.apply(this,arguments)}return S})()}}}}),73455:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return o}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(1974),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(12431),A=e(51252),M=e(27845),b=e(67758),p=e(67684),o={"examples-core-react-250-scroll-demo-0":{component:E.memo(E.lazy(N()(v()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return t=T.sent,s=t.useState,n=t.useRef,T.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return r=T.sent,l=r.Button,d=r.Space,T.next=12,Promise.resolve().then(e.bind(e,51252));case 12:return h=T.sent,I=h.default,T.next=16,Promise.resolve().then(e.bind(e,67758));case 16:return y=T.sent,R=y.default,T.next=20,Promise.resolve().then(e.bind(e,67684));case 20:return g=T.sent,f=g.default,T.next=24,Promise.resolve().then(e.bind(e,27845));case 24:return O=T.sent,x=O.default,j=c()(c()({},R),{},{Object:x}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},B=function(){var F=s({}),H=C()(F,2),U=H[0],V=H[1],z=n(null);return E.createElement("div",{style:{display:"flex",columnGap:20}},E.createElement(I,{style:{maxWidth:500,flexGrow:1,height:500,padding:"10px 5px",border:"1px solid #ccc",overflow:"auto"},ref:z,schema:D,value:U,onChange:V,itemLayout:f,renderers:j}),E.createElement(d,{direction:"vertical"},E.createElement(l,{onClick:function(){var Q;return(Q=z.current)===null||Q===void 0?void 0:Q.scrollTo("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),E.createElement(l,{onClick:function(){var Q;(Q=z.current)===null||Q===void 0||Q.scrollTo(["object_spec","title"],{gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),E.createElement(l,{onClick:function(){var Q;(Q=z.current)===null||Q===void 0||Q.scrollTo("object_other.content",{xAxis:!1})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011")))},T.abrupt("return",{default:B});case 30:case"end":return T.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(50748).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/250-scroll",context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":b,"./item-layout/Horizontal.tsx":p,react:P||(P=e.t(E,2)),antd:S,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":b,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":p},renderOpts:{compile:(function(){var a=N()(v()().mark(function s(){var n,r=arguments;return v()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}},"examples-core-react-250-scroll-demo-1":{component:E.memo(E.lazy(N()(v()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return t=T.sent,s=t.useState,n=t.useRef,T.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return r=T.sent,l=r.Button,d=r.Space,T.next=12,Promise.resolve().then(e.bind(e,51252));case 12:return h=T.sent,I=h.default,T.next=16,Promise.resolve().then(e.bind(e,67758));case 16:return y=T.sent,R=y.default,T.next=20,Promise.resolve().then(e.bind(e,67684));case 20:return g=T.sent,f=g.default,T.next=24,Promise.resolve().then(e.bind(e,27845));case 24:return O=T.sent,x=O.default,j=c()(c()({},R),{},{Object:x}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},B=function(){var F=s({}),H=C()(F,2),U=H[0],V=H[1],z=n(null),J=n(null);return E.createElement("div",{ref:J,style:{display:"flex",columnGap:20,height:500,padding:10,border:"1px solid #ccc",overflow:"auto",position:"relative"}},E.createElement(I,{style:{maxWidth:500,flexGrow:1},ref:z,schema:D,value:U,onChange:V,itemLayout:f,renderers:j}),E.createElement("div",{style:{position:"sticky",top:0}},E.createElement(d,{direction:"vertical"},E.createElement(l,{onClick:function(){var ee;(ee=z.current)===null||ee===void 0||ee.scrollTo("object_basic",{positionedElement:J.current})}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),E.createElement(l,{onClick:function(){var ee;(ee=z.current)===null||ee===void 0||ee.scrollTo(["object_spec","title"],{positionedElement:J.current,gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),E.createElement(l,{onClick:function(){var ee;(ee=z.current)===null||ee===void 0||ee.scrollTo("object_other.content",{positionedElement:J.current})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},T.abrupt("return",{default:B});case 30:case"end":return T.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(50748).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/250-scroll",context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":b,"./item-layout/Horizontal.tsx":p,react:P||(P=e.t(E,2)),antd:S,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":b,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":p},renderOpts:{compile:(function(){var a=N()(v()().mark(function s(){var n,r=arguments;return v()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}},"examples-core-react-250-scroll-demo-2":{component:E.memo(E.lazy(N()(v()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return t=T.sent,s=t.useState,n=t.useRef,T.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return r=T.sent,l=r.Button,d=r.Space,T.next=12,Promise.resolve().then(e.bind(e,51252));case 12:return h=T.sent,I=h.default,T.next=16,Promise.resolve().then(e.bind(e,67758));case 16:return y=T.sent,R=y.default,T.next=20,Promise.resolve().then(e.bind(e,67684));case 20:return g=T.sent,f=g.default,T.next=24,Promise.resolve().then(e.bind(e,27845));case 24:return O=T.sent,x=O.default,j=c()(c()({},R),{},{Object:x}),D={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},B=function(){var F=s({}),H=C()(F,2),U=H[0],V=H[1],z=n(null),J=function(ee){var w,oe,ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;(w=z.current)===null||w===void 0||w.scrollTo(ee,{positionedElement:window,gap:-76+ie,behavior:"instant"});var fe=(oe=z.current)===null||oe===void 0||(oe=oe.findItem(ee))===null||oe===void 0?void 0:oe.getRootElement();fe==null||fe.classList.add("focus-out"),setTimeout(function(){fe==null||fe.classList.remove("focus-out")},1e3)};return E.createElement("div",{style:{display:"flex",columnGap:20}},E.createElement(I,{style:{maxWidth:500,flexGrow:1},ref:z,schema:D,value:U,onChange:V,itemLayout:f,renderers:j}),E.createElement("div",null,E.createElement(d,{direction:"vertical"},E.createElement(l,{onClick:function(){return J("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),E.createElement(l,{onClick:function(){return J(["object_spec","title"],-20)}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),E.createElement(l,{onClick:function(){return J("object_other.content")}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},T.abrupt("return",{default:B});case 30:case"end":return T.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(50748).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/250-scroll",context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":b,"./item-layout/Horizontal.tsx":p,react:P||(P=e.t(E,2)),antd:S,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":b,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":p},renderOpts:{compile:(function(){var a=N()(v()().mark(function s(){var n,r=arguments;return v()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}}}}),45224:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return M}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(12431),E=e(51252),S=e(67684),A=e(67758),M={"examples-core-react-280-open-api-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R,g;return v()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=O.sent,o=p.useState,a=p.useRef,O.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return t=O.sent,s=t.Button,n=t.message,O.next=12,Promise.resolve().then(e.bind(e,51252));case 12:return r=O.sent,l=r.default,O.next=16,Promise.resolve().then(e.bind(e,67758));case 16:return d=O.sent,h=d.default,O.next=20,Promise.resolve().then(e.bind(e,67684));case 20:return I=O.sent,y=I.default,R={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},g=function(){var j=o({}),D=C()(j,2),B=D[0],$=D[1],T=a(null);function K(){return F.apply(this,arguments)}function F(){return F=c()(v()().mark(function H(){var U,V,z;return v()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,T.current.validate();case 2:if(U=Q.sent,V=U.hasError,z=U.errorList,console.log("[validate] hasError: ",V),console.log("[validate] errorList: ",z),!V){Q.next=9;break}return Q.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:n.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return Q.stop()}},H)})),F.apply(this,arguments)}return u.createElement("div",null,u.createElement(l,{ref:T,schema:R,value:B,onChange:$,itemLayout:y,renderers:h}),u.createElement(s,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:K},"\u63D0\u4EA4"))},O.abrupt("return",{default:g});case 25:case"end":return O.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/280-open-api",context:{"./item-layout/Horizontal.tsx":S,"./renderers/common.tsx":A,react:P||(P=e.t(u,2)),antd:N,"@schema-render/core-react":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-280-open-api-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R,g;return v()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=O.sent,o=p.useState,a=p.useRef,O.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return t=O.sent,s=t.Button,n=t.message,O.next=12,Promise.resolve().then(e.bind(e,51252));case 12:return r=O.sent,l=r.default,O.next=16,Promise.resolve().then(e.bind(e,67758));case 16:return d=O.sent,h=d.default,O.next=20,Promise.resolve().then(e.bind(e,67684));case 20:return I=O.sent,y=I.default,R={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},g=function(){var j=o({}),D=C()(j,2),B=D[0],$=D[1],T=a(null);function K(){return F.apply(this,arguments)}function F(){return F=c()(v()().mark(function U(){var V,z;return v()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,T.current.validate();case 2:if(V=Q.sent,z=V.hasError,!z){Q.next=6;break}return Q.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 6:n.success("\u9A8C\u8BC1\u6210\u529F");case 7:case"end":return Q.stop()}},U)})),F.apply(this,arguments)}var H=function(){T.current.resetError()};return u.createElement("div",null,u.createElement(l,{ref:T,schema:R,value:B,onChange:$,itemLayout:y,renderers:h}),u.createElement(s,{type:"primary",style:{margin:"24px 15px 0 115px"},onClick:K},"\u63D0\u4EA4"),u.createElement(s,{onClick:H},"\u91CD\u7F6E\u9519\u8BEF\u63D0\u793A"))},O.abrupt("return",{default:g});case 25:case"end":return O.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/280-open-api",context:{"./item-layout/Horizontal.tsx":S,"./renderers/common.tsx":A,react:P||(P=e.t(u,2)),antd:N,"@schema-render/core-react":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-280-open-api-demo-2":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=g.sent,o=p.useRef,g.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return a=g.sent,t=a.Button,g.next=10,Promise.resolve().then(e.bind(e,51252));case 10:return s=g.sent,n=s.default,g.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return r=g.sent,l=r.default,g.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return d=g.sent,h=d.default,I={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var O=o(null),x=function(){O.current.resetValue()};return u.createElement("div",null,u.createElement(n,{ref:O,schema:I,itemLayout:h,renderers:l}),u.createElement(t,{style:{margin:"24px 15px 0 115px"},onClick:x},"\u91CD\u7F6E"))},g.abrupt("return",{default:y});case 23:case"end":return g.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/280-open-api",context:{"./item-layout/Horizontal.tsx":S,"./renderers/common.tsx":A,react:P||(P=e.t(u,2)),antd:N,"@schema-render/core-react":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-280-open-api-demo-3":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=g.sent,o=p.useRef,g.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return a=g.sent,t=a.Button,g.next=10,Promise.resolve().then(e.bind(e,51252));case 10:return s=g.sent,n=s.default,g.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return r=g.sent,l=r.default,g.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return d=g.sent,h=d.default,I={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var O=o(null);return u.createElement("div",null,u.createElement(n,{ref:O,schema:I,itemLayout:h,renderers:l}),u.createElement(t,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var j,D=(j=O.current)===null||j===void 0?void 0:j.getRootElement();console.log("rootElement:",D)}},"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},g.abrupt("return",{default:y});case 23:case"end":return g.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/280-open-api",context:{"./item-layout/Horizontal.tsx":S,"./renderers/common.tsx":A,react:P||(P=e.t(u,2)),antd:N,"@schema-render/core-react":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-280-open-api-demo-4":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=g.sent,o=p.useRef,g.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return a=g.sent,t=a.Button,g.next=10,Promise.resolve().then(e.bind(e,51252));case 10:return s=g.sent,n=s.default,g.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return r=g.sent,l=r.default,g.next=18,Promise.resolve().then(e.bind(e,67684));case 18:return d=g.sent,h=d.default,I={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var O=o(null);return u.createElement("div",null,u.createElement(n,{ref:O,schema:I,itemLayout:h,renderers:l}),u.createElement(t,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var j,D=(j=O.current)===null||j===void 0||(j=j.findItem("title"))===null||j===void 0?void 0:j.getRootElement();console.log("formItemRootElement:",D)}},"\u83B7\u53D6\u3010\u6807\u9898\u3011\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},g.abrupt("return",{default:y});case 23:case"end":return g.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A},"./renderers/common.tsx":{type:"FILE",value:e(81185).A}},entry:"index.tsx"},routeId:"examples/core-react/280-open-api",context:{"./item-layout/Horizontal.tsx":S,"./renderers/common.tsx":A,react:P||(P=e.t(u,2)),antd:N,"@schema-render/core-react":E,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),10837:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return N}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(51252),c=e(67758),u=e(67684),N={"examples-core-react-300-default-value-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function E(){var S,A,M,b,p,o,a,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return S=n.sent,A=S.default,n.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return M=n.sent,b=M.default,n.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return p=n.sent,o=p.default,a={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return C.createElement(A,{schema:a,defaultValue:{title:"\u6211\u662F\u6807\u9898"},itemLayout:b,renderers:o})},n.abrupt("return",{default:t});case 15:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"examples-core-react-300-default-value-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/300-default-value",context:{"./renderers/common.tsx":c,"./item-layout/Horizontal.tsx":u,"@schema-render/core-react":W,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":c,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":u},renderOpts:{compile:(function(){var E=L()(i()().mark(function A(){var M,b=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(1478).then(e.bind(e,71478));case 2:return o.abrupt("return",(M=o.sent).default.apply(M,b));case 3:case"end":return o.stop()}},A)}));function S(){return E.apply(this,arguments)}return S})()}}}}),85016:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return S}});var P=e(55420),i=e.n(P),v=e(1974),L=e.n(v),C=e(98312),W=e.n(C),c=e(96540),u=e(51252),N=e(12431),E=e(67684),S={"examples-core-react-600-catch-error-tips-demo-0":{component:c.memo(c.lazy(W()(i()().mark(function A(){var M,b,p,o,a,t,s,n,r;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return M=d.sent,b=M.default,d.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return p=d.sent,o=p.Input,d.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return a=d.sent,t=a.default,s={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(I){var y,R=I.schema,g=I.value,f=I.disabled,O=I.onChange;return c.createElement(o.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((y=R.title)!==null&&y!==void 0?y:"")},R.renderOptions),{},{value:g,onChange:function(j){return O(j.target.value)},disabled:f}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return c.createElement(b,{schema:n,itemLayout:t,renderers:s})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/600-catch-error-tips",context:{"./item-layout/Horizontal.tsx":E,"@schema-render/core-react":u,antd:N,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":E},renderOpts:{compile:(function(){var A=W()(i()().mark(function b(){var p,o=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}},"examples-core-react-600-catch-error-tips-demo-1":{component:c.memo(c.lazy(W()(i()().mark(function A(){var M,b,p,o,a,t,s,n,r;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return M=d.sent,b=M.default,d.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return p=d.sent,o=p.Input,d.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return a=d.sent,t=a.default,s={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(I){var y,R=I.schema,g=I.value,f=I.disabled,O=I.onChange;return c.createElement(o.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((y=R.title)!==null&&y!==void 0?y:"")},R.renderOptions),{},{value:g,onChange:function(j){return O(j.target.value)},disabled:f}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return c.createElement(b,{catchErrorTips:"silent",schema:n,itemLayout:t,renderers:s})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/600-catch-error-tips",context:{"./item-layout/Horizontal.tsx":E,"@schema-render/core-react":u,antd:N,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":E},renderOpts:{compile:(function(){var A=W()(i()().mark(function b(){var p,o=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}},"examples-core-react-600-catch-error-tips-demo-2":{component:c.memo(c.lazy(W()(i()().mark(function A(){var M,b,p,o,a,t,s,n,r;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return M=d.sent,b=M.default,d.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return p=d.sent,o=p.Input,d.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return a=d.sent,t=a.default,s={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(I){var y,R=I.schema,g=I.value,f=I.disabled,O=I.onChange;return c.createElement(o.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((y=R.title)!==null&&y!==void 0?y:"")},R.renderOptions),{},{value:g,onChange:function(j){return O(j.target.value)},disabled:f}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},r=function(){return c.createElement(b,{catchErrorTips:function(){return c.createElement("div",{style:{color:"yellow",background:"black"}},"\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F")},schema:n,itemLayout:t,renderers:s})},d.abrupt("return",{default:r});case 16:case"end":return d.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/600-catch-error-tips",context:{"./item-layout/Horizontal.tsx":E,"@schema-render/core-react":u,antd:N,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":E},renderOpts:{compile:(function(){var A=W()(i()().mark(function b(){var p,o=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}}}}),50694:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return E}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(51252),c=e(96754),u=e(67758),N=e(67684),E={"examples-core-react-700-locale-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function S(){var A,M,b,p,o,a,t,s,n,r;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return A=d.sent,M=A.default,d.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return b=d.sent,p=b.default,d.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return o=d.sent,a=o.default,d.next=14,Promise.resolve().then(e.bind(e,96754));case 14:return t=d.sent,s=t.default,n={renderType:"Root",properties:{title:{title:"Title",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"Please enter a title with a maximum of 10 characters"},required:!0},content:{title:"Content",renderType:"TextArea",renderOptions:{placeholder:"Please enter content"},required:!0}}},r=function(){return C.createElement(M,{style:{maxWidth:600},schema:n,itemLayout:p,renderers:a,locale:s})},d.abrupt("return",{default:r});case 19:case"end":return d.stop()}},S)})))),asset:{type:"BLOCK",id:"examples-core-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IRootSchema } from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'
import renderers from './renderers/common'

// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from '@schema-render/core-react/src/locale/en_US'

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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/700-locale",context:{"./renderers/common.tsx":u,"./item-layout/Horizontal.tsx":N,"@schema-render/core-react":W,"@schema-render/core-react/src/locale/en_US":c,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":u,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":N},renderOpts:{compile:(function(){var S=L()(i()().mark(function M(){var b,p=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(1478).then(e.bind(e,71478));case 2:return a.abrupt("return",(b=a.sent).default.apply(b,p));case 3:case"end":return a.stop()}},M)}));function A(){return S.apply(this,arguments)}return A})()}}}}),4549:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),49759:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return A}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(45647),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(51252),A={"examples-core-react-890-benchmark-demo-0":{component:E.memo(E.lazy(N()(v()().mark(function M(){var b,p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return b=g.sent,p=b.default,g.next=6,Promise.resolve().then(e.t.bind(e,96540,19));case 6:return o=g.sent,a=o.useState,t=o.Profiler,s=function(O){var x=O.schema,j=O.body;return E.createElement(E.Fragment,null,E.createElement("h4",null,x.title),E.createElement("div",null,j))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(O){var x=O.schema,j=O.value,D=O.onChange;return E.createElement("div",{style:{display:"flex"}},E.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(x.title),value:j||"",onChange:function($){return D($.target.value)}}))}}},l=600,d={renderType:"Root",properties:{}},h=c()(Array(l).keys()),h.forEach(function(f){var O="field_".concat(f);d.properties[O]={title:O,renderType:"InputText"}}),I=["100px","1fr"],y=function(){var O=a({}),x=C()(O,2),j=x[0],D=x[1],B=a(""),$=C()(B,2),T=$[0],K=$[1],F=function(U,V){var z=parseInt(V.sPath.slice(6)),J=z-1,Q=z+1,ee="field_".concat(Q>=l?J:Q);U[ee]=V.value,D(U)};return E.createElement(t,{id:"sr",onRender:function(U,V,z,J,Q,ee){var w="\u64CD\u4F5C: ".concat(V,", \u6E32\u67D3\u8017\u65F6: ").concat(z," (\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u6027\u80FD\u4F1A\u597D\u90A3\u4E48\u4E00\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 Profiler \u6027\u80FD\u5206\u6790)"),oe=document.getElementById("profile");oe&&(oe.innerHTML=w),console.log("===> ".concat(w)),console.log("phase: ".concat(V,", actualDuration: ").concat(z,", baseDuration: ").concat(J,", startTime: ").concat(Q,", commitTime: ").concat(ee))}},E.createElement("h3",{id:"profile"},T),E.createElement(p,{layout:"autoFill",layoutMinMax:I,schema:d,itemLayout:s,renderers:r,value:j,onChange:F}))},g.abrupt("return",{default:y});case 19:case"end":return g.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},routeId:"examples/core-react/890-benchmark",context:{"@schema-render/core-react":S,react:P||(P=e.t(E,2))},renderOpts:{compile:(function(){var M=N()(v()().mark(function p(){var o,a=arguments;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}},"examples-core-react-890-benchmark-demo-1":{component:E.memo(E.lazy(N()(v()().mark(function M(){var b,p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return b=g.sent,p=b.default,g.next=6,Promise.resolve().then(e.t.bind(e,96540,19));case 6:return o=g.sent,a=o.useState,t=o.Profiler,s=function(O){var x=O.schema,j=O.body;return E.createElement(E.Fragment,null,E.createElement("h4",null,x.title),E.createElement("div",null,j))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},r={InputText:{component:function(O){var x=O.schema,j=O.value,D=O.onChange;return E.createElement("div",{style:{display:"flex"}},E.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(x.title),value:j||"",onChange:function($){return D($.target.value)}}))}}},l=1800,d={renderType:"Root",properties:{}},h=c()(Array(l).keys()),h.forEach(function(f){var O="field_".concat(f);d.properties[O]={title:O,renderType:"InputText"}}),I=["100px","1fr"],y=function(){var O=a({}),x=C()(O,2),j=x[0],D=x[1],B=function(T,K){var F=parseInt(K.sPath.slice(6)),H=F-1,U=F+1,V="field_".concat(U>=l?H:U);T[V]=K.value,D(T)};return E.createElement(p,{layout:"autoFill",layoutMinMax:I,schema:d,itemLayout:s,renderers:r,value:j,onChange:B})},g.abrupt("return",{default:y});case 19:case"end":return g.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},routeId:"examples/core-react/890-benchmark",context:{"@schema-render/core-react":S,react:P||(P=e.t(E,2))},renderOpts:{compile:(function(){var M=N()(v()().mark(function p(){var o,a=arguments;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}}}}),9586:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),93364:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),57903:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),67268:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),44007:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return M}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(51252),E=e(12431),S=e(67758),A=e(67684),M={"examples-core-react-950-async-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return p=f.sent,o=p.default,f.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return a=f.sent,t=a.default,f.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return s=f.sent,n=s.default,f.next=14,Promise.resolve().then(e.t.bind(e,96540,19));case 14:return r=f.sent,l=r.useState,f.next=18,Promise.resolve().then(e.bind(e,12431));case 18:return d=f.sent,h=d.Button,I=d.Space,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},R=function(){var x=l({}),j=C()(x,2),D=j[0],B=j[1],$=function(){setTimeout(function(){B({title:"\u65B0\u6807\u9898::".concat(String(Math.random()).slice(2,10)),content:"\u65B0\u5185\u5BB9::".concat(String(Math.random()).slice(2,10))})},100)},T=function(){return B({})};return u.createElement(u.Fragment,null,u.createElement(o,{style:{marginBottom:15},schema:y,value:D,onChange:function(F){return B(F)},itemLayout:t,renderers:n}),u.createElement(I,null,u.createElement(h,{type:"primary",onClick:$},"\u52A0\u8F7D\u5F02\u6B65\u6570\u636E"),u.createElement(h,{onClick:T},"\u91CD\u7F6E")))},f.abrupt("return",{default:R});case 24:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-950-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/950-async",context:{"./renderers/common.tsx":S,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":N,react:P||(P=e.t(u,2)),antd:E,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),45503:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return M}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(51252),S=e(67758),A=e(67684),M={"examples-core-react-951-controllable-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return p=g.sent,o=p.default,g.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return a=g.sent,t=a.default,g.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return s=g.sent,n=s.default,g.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return r=g.sent,l=r.default,g.next=18,Promise.resolve().then(e.t.bind(e,96540,19));case 18:return d=g.sent,h=d.useState,I={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},y=function(){var O=h({}),x=C()(O,2),j=x[0],D=x[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{schema:I,itemLayout:n,renderers:l,value:j,onChange:function($){return D($)}}),u.createElement(o,{value:j}))},g.abrupt("return",{default:y});case 23:case"end":return g.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/951-controllable",context:{"./renderers/common.tsx":S,"./item-layout/Horizontal.tsx":A,"@examples/components/SyntaxHighlighter":N,"@schema-render/core-react":E,react:P||(P=e.t(u,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-951-controllable-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return p=g.sent,o=p.default,g.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return a=g.sent,t=a.default,g.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return s=g.sent,n=s.default,g.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return r=g.sent,l=r.default,g.next=18,Promise.resolve().then(e.t.bind(e,96540,19));case 18:return d=g.sent,h=d.useState,I={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},y=function(){var O=h({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),x=C()(O,1),j=x[0];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{schema:I,itemLayout:n,renderers:l,value:j}),u.createElement(o,{value:j}))},g.abrupt("return",{default:y});case 23:case"end":return g.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/951-controllable",context:{"./renderers/common.tsx":S,"./item-layout/Horizontal.tsx":A,"@examples/components/SyntaxHighlighter":N,"@schema-render/core-react":E,react:P||(P=e.t(u,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-951-controllable-demo-2":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return p=g.sent,o=p.default,g.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return a=g.sent,t=a.default,g.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return s=g.sent,n=s.default,g.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return r=g.sent,l=r.default,g.next=18,Promise.resolve().then(e.t.bind(e,96540,19));case 18:return d=g.sent,h=d.useState,I={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},y=function(){var O=h({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),x=C()(O,1),j=x[0],D=h(1),B=C()(D,2),$=B[0],T=B[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{schema:I,itemLayout:n,renderers:l,value:j,onChange:function(){T(function(F){return F+1})}}),u.createElement(o,{value:j}))},g.abrupt("return",{default:y});case 23:case"end":return g.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/951-controllable",context:{"./renderers/common.tsx":S,"./item-layout/Horizontal.tsx":A,"@examples/components/SyntaxHighlighter":N,"@schema-render/core-react":E,react:P||(P=e.t(u,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-951-controllable-demo-3":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,51252));case 2:return p=h.sent,o=p.default,h.next=6,Promise.resolve().then(e.bind(e,67684));case 6:return a=h.sent,t=a.default,h.next=10,Promise.resolve().then(e.bind(e,67758));case 10:return s=h.sent,n=s.default,r={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},l=function(){return u.createElement(o,{schema:r,itemLayout:t,renderers:n})},h.abrupt("return",{default:l});case 15:case"end":return h.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/951-controllable",context:{"./renderers/common.tsx":S,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":E,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-core-react-951-controllable-demo-4":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return p=g.sent,o=p.default,g.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return a=g.sent,t=a.default,g.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return s=g.sent,n=s.default,g.next=14,Promise.resolve().then(e.bind(e,67758));case 14:return r=g.sent,l=r.default,g.next=18,Promise.resolve().then(e.t.bind(e,96540,19));case 18:return d=g.sent,h=d.useState,I={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},y=function(){var O=h({}),x=C()(O,2),j=x[0],D=x[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{schema:I,itemLayout:n,renderers:l,onChange:function($){return D($)}}),u.createElement(o,{value:j}))},g.abrupt("return",{default:y});case 23:case"end":return g.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(81185).A},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/951-controllable",context:{"./renderers/common.tsx":S,"./item-layout/Horizontal.tsx":A,"@examples/components/SyntaxHighlighter":N,"@schema-render/core-react":E,react:P||(P=e.t(u,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),65530:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return M}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(51252),S=e(12431),A=e(67684),M={"examples-core-react-952-multi-renderer-on-change-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R,g;return v()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return p=O.sent,o=p.default,O.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return a=O.sent,t=a.default,O.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return s=O.sent,n=s.default,O.next=14,Promise.resolve().then(e.t.bind(e,96540,19));case 14:return r=O.sent,l=r.useState,d=r.useEffect,O.next=19,Promise.resolve().then(e.bind(e,12431));case 19:return h=O.sent,I=h.Input,y={InputOrg:{component:function(j){var D,B=j.schema,$=j.value,T=j.rootValue,K=j.onChange;return console.log("==== InputOrg ===="),console.log("value:",$),console.log("rootValue:",T),d(function(){K("\u673A\u6784 A")},[]),u.createElement(I,{placeholder:"\u8BF7\u8F93\u5165".concat((D=B.title)!==null&&D!==void 0?D:""),value:$!=null?$:"",onChange:function(H){return K(H.target.value)}})}},InputSupplier:{component:function(j){var D,B=j.schema,$=j.value,T=j.rootValue,K=j.onChange;return console.log("==== InputSupplier ===="),console.log("value:",$),console.log("rootValue:",T),d(function(){K("\u4F9B\u5E94\u5546 A")},[]),u.createElement(I,{placeholder:"\u8BF7\u8F93\u5165".concat((D=B.title)!==null&&D!==void 0?D:""),value:$!=null?$:"",onChange:function(H){return K(H.target.value)}})}},InputBill:{component:function(j){var D,B=j.schema,$=j.value,T=j.rootValue,K=j.onChange;return console.log("==== InputBill ===="),console.log("value:",$),console.log("rootValue:",T),d(function(){setTimeout(function(){K("\u5355\u53F7 A")},10)},[]),u.createElement(I,{placeholder:"\u8BF7\u8F93\u5165".concat((D=B.title)!==null&&D!==void 0?D:""),value:$!=null?$:"",onChange:function(H){return K(H.target.value)}})}}},R={renderType:"Root",properties:{org:{title:"\u673A\u6784\u540D\u79F0",renderType:"InputOrg"},supplier:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputSupplier"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputBill"}}},g=function(){var j=l({}),D=C()(j,2),B=D[0],$=D[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{schema:R,itemLayout:n,renderers:y,value:B,onChange:function(K,F){console.log("***** updateBy ".concat(F.sPath," *****")),console.log("value:",K),console.log("e:",F),$(K)}}),u.createElement(o,{value:B}))},O.abrupt("return",{default:g});case 25:case"end":return O.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-core-react-952-multi-renderer-on-change-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.tsx"},routeId:"examples/core-react/952-multi-renderer-onChange",context:{"./item-layout/Horizontal.tsx":A,"@examples/components/SyntaxHighlighter":N,"@schema-render/core-react":E,react:P||(P=e.t(u,2)),antd:S,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),70336:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return b}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(1974),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(51252),A=e(12431),M=e(67684),b={"examples-core-react-953-disabled-component-demo-0":{component:E.memo(E.lazy(N()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=f.sent,a=o.useState,f.next=6,Promise.resolve().then(e.bind(e,51252));case 6:return t=f.sent,s=t.default,f.next=10,Promise.resolve().then(e.bind(e,67684));case 10:return n=f.sent,r=n.default,f.next=14,Promise.resolve().then(e.bind(e,12431));case 14:return l=f.sent,d=l.Button,h=l.Input,I={InputText:{component:function(x){var j,D=x.schema,B=x.value,$=x.disabled,T=x.readonly,K=x.onChange;return E.createElement(h,c()(c()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((j=D.title)!==null&&j!==void 0?j:"")},D.renderOptions),{},{value:B!=null?B:"",disabled:$,onChange:function(H){return K(H.target.value)}}))},readonlyComponent:function(x){var j=x.value;return E.createElement(E.Fragment,null,j)},disabledComponent:function(x){var j=x.value;return E.createElement(E.Fragment,null,"Disabled: ",j)}},TextArea:{component:function(x){var j,D=x.schema,B=x.value,$=x.disabled,T=x.onChange;return E.createElement(h.TextArea,c()(c()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((j=D.title)!==null&&j!==void 0?j:"")},D.renderOptions),{},{value:B!=null?B:"",onChange:function(F){return T(F.target.value)},disabled:$}))},readonlyComponent:function(x){var j=x.value;return E.createElement("div",null,j)}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},R=function(){var x=a(!1),j=C()(x,2),D=j[0],B=j[1],$=a(!1),T=C()($,2),K=T[0],F=T[1],H=a({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),U=C()(H,2),V=U[0],z=U[1];return E.createElement("div",{style:{maxWidth:500}},E.createElement(s,{schema:y,itemLayout:r,renderers:I,value:V,onChange:z,readonly:D,disabled:K}),E.createElement(d,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return F(!K)}},K?"\u53D6\u6D88":"\u5207\u6362\u5230"," disabled \u72B6\u6001"),E.createElement(d,{style:{margin:"20px 0 0 115px"},onClick:function(){return B(!D)}},D?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},f.abrupt("return",{default:R});case 21:case"end":return f.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-core-react-953-disabled-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.jsx"},routeId:"examples/core-react/953-disabled-component",context:{"./item-layout/Horizontal.tsx":M,react:P||(P=e.t(E,2)),"@schema-render/core-react":S,antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:(function(){var p=N()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),55834:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return A}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(12431),S=e(6796),A={"examples-form-render-react-001-intro-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function M(){var b,p,o,a,t,s,n,r,l,d;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return b=I.sent,p=b.default,I.next=6,Promise.resolve().then(e.t.bind(e,96540,19));case 6:return o=I.sent,a=o.useState,I.next=10,Promise.resolve().then(e.bind(e,12431));case 10:return t=I.sent,s=t.message,I.next=14,Promise.resolve().then(e.bind(e,6796));case 14:return n=I.sent,r=n.default,l={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",description:"\u7528\u6237\u540D\u6700\u591A20\u4E2A\u5B57\u7B26",renderOptions:{maxLength:20},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]}}},d=function(){var R=a({}),g=C()(R,2),f=g[0],O=g[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(r,{schema:l,value:f,onChange:O,onSubmit:function(){s.success("\u63D0\u4EA4\u6210\u529F")}}),u.createElement(p,{value:f}))},I.abrupt("return",{default:d});case 19:case"end":return I.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.jsx"},routeId:"examples/form-render-react/001-intro",context:{"@examples/components/SyntaxHighlighter":N,react:P||(P=e.t(u,2)),antd:E,"@schema-render/form-render-react":S},renderOpts:{compile:(function(){var M=c()(v()().mark(function p(){var o,a=arguments;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}}}}),29644:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return S}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(6796),S={"examples-form-render-react-100-item-layout-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function A(){var M,b,p,o,a,t,s,n;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return M=l.sent,b=M.useState,l.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return p=l.sent,o=p.default,l.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return a=l.sent,t=a.default,s={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var h=b({}),I=C()(h,2),y=I[0],R=I[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{itemLayout:"vertical",schema:s,value:y,onChange:R}),u.createElement(o,{value:y}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/100-item-layout",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var A=c()(v()().mark(function b(){var p,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}},"examples-form-render-react-100-item-layout-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function A(){var M,b,p,o,a,t,s,n;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return M=l.sent,b=M.useState,l.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return p=l.sent,o=p.default,l.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return a=l.sent,t=a.default,s={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var h=b({}),I=C()(h,2),y=I[0],R=I[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{itemLayout:"horizontal",schema:s,value:y,onChange:R}),u.createElement(o,{value:y}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/100-item-layout",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var A=c()(v()().mark(function b(){var p,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}}}}),17315:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return M}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(6796),S=e(41523),A=e(12431),M={"examples-form-render-react-200-label-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=h.sent,o=p.useState,h.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return a=h.sent,t=a.default,h.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return s=h.sent,n=s.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var y=o({}),R=C()(y,2),g=R[0],f=R[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(n,{labelWidth:100,schema:r,value:g,onChange:f}),u.createElement(t,{value:g}))},h.abrupt("return",{default:l});case 15:case"end":return h.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx",description:"number \u7C7B\u578B\u7528\u4E8E\u8BBE\u7F6E\u56FA\u5B9A\u6570\u503C",title:"number \u7C7B\u578B"},routeId:"examples/form-render-react/200-label",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-form-render-react-200-label-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=h.sent,o=p.useState,h.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return a=h.sent,t=a.default,h.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return s=h.sent,n=s.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var y=o({}),R=C()(y,2),g=R[0],f=R[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(n,{labelWidth:"max-content",schema:r,value:g,onChange:f}),u.createElement(t,{value:g}))},h.abrupt("return",{default:l});case 15:case"end":return h.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx",description:"string \u7C7B\u578B\uFF0C\u901A\u5E38\u662F CSS \u5C5E\u6027\uFF0C\u5982 max-content",title:"string \u7C7B\u578B"},routeId:"examples/form-render-react/200-label",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-form-render-react-200-label-demo-2":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=h.sent,o=p.useState,h.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return a=h.sent,t=a.default,h.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return s=h.sent,n=s.default,r={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var y=o({}),R=C()(y,2),g=R[0],f=R[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(n,{labelWidth:100,labelGap:0,labelColon:"\uFF1A",schema:r,value:g,onChange:f}),u.createElement(t,{value:g}))},h.abrupt("return",{default:l});case 15:case"end":return h.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/200-label",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-form-render-react-200-label-demo-3":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=f.sent,o=p.useState,f.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return a=f.sent,t=a.default,f.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return s=f.sent,n=s.default,f.next=14,Promise.resolve().then(e.bind(e,41523));case 14:return r=f.sent,l=r.QuestionCircleOutlined,f.next=18,Promise.resolve().then(e.bind(e,12431));case 18:return d=f.sent,h=d.Popover,I={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},y=function(x){var j=x.schema,D=x.required,B=x.prefixClassNames;return u.createElement("div",null,j.title,!!j.titleDescription&&u.createElement(h,{placement:"top",trigger:"hover",content:j.titleDescription},u.createElement(l,{className:B("item-title-tooltip"),style:{marginLeft:4}})),!D&&" (\u53EF\u9009)")},R=function(){var x=o({}),j=C()(x,2),D=j[0],B=j[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(n,{labelWidth:100,labelRender:y,schema:I,value:D,onChange:B}),u.createElement(t,{value:D}))},f.abrupt("return",{default:R});case 24:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},antd:{type:"NPM",value:"6.7.0"}},entry:"index.tsx"},routeId:"examples/form-render-react/200-label",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E,"@ant-design/icons":S,antd:A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),68217:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return b}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(12431),E=e(55173),S=e(97102),A=e(6796),M=e(41523),b={"examples-form-render-react-300-actions-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g;return v()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=O.sent,a=o.useState,t=o.useRef,O.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return s=O.sent,n=s.message,O.next=11,Promise.resolve().then(e.bind(e,55173));case 11:return r=O.sent,l=r.default,O.next=15,Promise.resolve().then(e.bind(e,97102));case 15:return d=O.sent,h=d.sleep,O.next=19,Promise.resolve().then(e.bind(e,6796));case 19:return I=O.sent,y=I.default,R={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var j=a({}),D=C()(j,2),B=D[0],$=D[1],T=t(null),K=(function(){var F=c()(v()().mark(function H(){var U,V;return v()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,T.current.validate();case 2:if(U=J.sent,V=U.hasError,!V){J.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),J.abrupt("return");case 7:return J.next=9,h();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return J.stop()}},H)}));return function(){return F.apply(this,arguments)}})();return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(y,{ref:T,schema:R,value:B,onChange:$,onSubmit:K}),u.createElement(l,{value:B}))},O.abrupt("return",{default:g});case 24:case"end":return O.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/300-actions",context:{react:P||(P=e.t(u,2)),antd:N,"@examples/components/SyntaxHighlighter":E,"@examples/utils":S,"@schema-render/form-render-react":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-form-render-react-300-actions-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I;return v()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=R.sent,a=o.useState,R.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return t=R.sent,s=t.message,R.next=10,Promise.resolve().then(e.bind(e,55173));case 10:return n=R.sent,r=n.default,R.next=14,Promise.resolve().then(e.bind(e,6796));case 14:return l=R.sent,d=l.default,h={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},I=function(){var f=a({}),O=C()(f,2),x=O[0],j=O[1],D=function(){s.success("\u91CD\u7F6E\u5B8C\u6210")};return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(d,{schema:h,value:x,onChange:j,onReset:D}),u.createElement(r,{value:x}))},R.abrupt("return",{default:I});case 19:case"end":return R.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/300-actions",context:{react:P||(P=e.t(u,2)),antd:N,"@examples/components/SyntaxHighlighter":E,"@schema-render/form-render-react":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-form-render-react-300-actions-demo-2":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=f.sent,a=o.useState,f.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return t=f.sent,s=t.message,f.next=10,Promise.resolve().then(e.bind(e,97102));case 10:return n=f.sent,r=n.sleep,f.next=14,Promise.resolve().then(e.bind(e,55173));case 14:return l=f.sent,d=l.default,f.next=18,Promise.resolve().then(e.bind(e,6796));case 18:return h=f.sent,I=h.default,y={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},R=function(){var x=a({}),j=C()(x,2),D=j[0],B=j[1],$=(function(){var T=c()(v()().mark(function K(){return v()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,r();case 2:s.success("\u91CD\u7F6E\u5B8C\u6210");case 3:case"end":return H.stop()}},K)}));return function(){return T.apply(this,arguments)}})();return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(I,{schema:y,value:D,onChange:B,onReset:$}),u.createElement(d,{value:D}))},f.abrupt("return",{default:R});case 23:case"end":return f.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/300-actions",context:{react:P||(P=e.t(u,2)),antd:N,"@examples/utils":S,"@examples/components/SyntaxHighlighter":E,"@schema-render/form-render-react":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-form-render-react-300-actions-demo-3":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I;return v()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=R.sent,a=o.useState,R.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return t=R.sent,s=t.sleep,R.next=10,Promise.resolve().then(e.bind(e,55173));case 10:return n=R.sent,r=n.default,R.next=14,Promise.resolve().then(e.bind(e,6796));case 14:return l=R.sent,d=l.default,h={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},I=function(){var f=a({}),O=C()(f,2),x=O[0],j=O[1],D=(function(){var B=c()(v()().mark(function $(){return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return K.abrupt("return",{account:"\u5F20\u4E09".concat(Date.now())});case 3:case"end":return K.stop()}},$)}));return function(){return B.apply(this,arguments)}})();return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(d,{schema:h,value:x,onChange:j,onBeforeReset:D,onReset:function($){console.log("formData:",$)}}),u.createElement(r,{value:x}))},R.abrupt("return",{default:I});case 19:case"end":return R.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/300-actions",context:{react:P||(P=e.t(u,2)),"@examples/utils":S,"@examples/components/SyntaxHighlighter":E,"@schema-render/form-render-react":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-form-render-react-300-actions-demo-4":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=I.sent,a=o.useState,I.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return t=I.sent,s=t.default,I.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return n=I.sent,r=n.default,l={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},d=function(){var R=a({}),g=C()(R,2),f=g[0],O=g[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(r,{schema:l,value:f,onChange:O,actions:["reset","submit"]}),u.createElement(s,{value:f}))},I.abrupt("return",{default:d});case 15:case"end":return I.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx",description:"\u914D\u7F6E actions \u4E3A ['reset', 'submit'] \u8C03\u6362\u6309\u94AE\u4F4D\u7F6E",title:"\u914D\u7F6E\u987A\u5E8F"},routeId:"examples/form-render-react/300-actions",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":E,"@schema-render/form-render-react":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-form-render-react-300-actions-demo-5":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g;return v()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=O.sent,a=o.useState,O.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return t=O.sent,s=t.message,n=t.Button,O.next=11,Promise.resolve().then(e.bind(e,97102));case 11:return r=O.sent,l=r.sleep,O.next=15,Promise.resolve().then(e.bind(e,55173));case 15:return d=O.sent,h=d.default,O.next=19,Promise.resolve().then(e.bind(e,6796));case 19:return I=O.sent,y=I.default,R={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},g=function(){var j=a({}),D=C()(j,2),B=D[0],$=D[1],T=(function(){var F=c()(v()().mark(function H(){return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,l();case 2:s.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return V.stop()}},H)}));return function(){return F.apply(this,arguments)}})(),K=function(){s.success("\u5BFC\u51FA\u6210\u529F")};return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(y,{schema:R,value:B,onChange:$,onSubmit:T,actions:["submit","reset","export"],registerActions:{export:function(H){var U=H.loading;return u.createElement(n,{type:"primary",disabled:U.submit||U.reset,onClick:K},"\u5BFC\u51FA")}}}),u.createElement(h,{value:B}))},O.abrupt("return",{default:g});case 24:case"end":return O.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/300-actions",context:{react:P||(P=e.t(u,2)),antd:N,"@examples/utils":S,"@examples/components/SyntaxHighlighter":E,"@schema-render/form-render-react":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-form-render-react-300-actions-demo-6":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=T.sent,a=o.useState,t=o.useRef,T.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return s=T.sent,n=s.message,r=s.Button,l=s.Popconfirm,T.next=13,Promise.resolve().then(e.bind(e,41523));case 13:return d=T.sent,h=d.DeleteOutlined,I=d.UploadOutlined,T.next=18,Promise.resolve().then(e.bind(e,97102));case 18:return y=T.sent,R=y.sleep,T.next=22,Promise.resolve().then(e.bind(e,55173));case 22:return g=T.sent,f=g.default,T.next=26,Promise.resolve().then(e.bind(e,6796));case 26:return O=T.sent,x=O.default,j={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},D={submit:function(F){var H=F.handleSubmit,U=F.loading;return u.createElement(l,{title:"\u6E29\u99A8\u63D0\u793A",description:"\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F",onConfirm:H},u.createElement(r,{loading:U.submit,type:"primary",icon:u.createElement(I,null)},"\u63D0\u4EA4"))},reset:function(F){var H=F.handleReset,U=F.loading;return u.createElement(r,{loading:U.reset,onClick:H,icon:u.createElement(h,null)},"\u91CD\u7F6E")}},B=function(){var F=a({}),H=C()(F,2),U=H[0],V=H[1],z=t(null),J=(function(){var Q=c()(v()().mark(function ee(){var w,oe;return v()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return fe.next=2,z.current.validate();case 2:if(w=fe.sent,oe=w.hasError,!oe){fe.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),fe.abrupt("return");case 7:return fe.next=9,R();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return fe.stop()}},ee)}));return function(){return Q.apply(this,arguments)}})();return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(x,{ref:z,schema:j,value:U,onChange:V,onSubmit:J,registerActions:D}),u.createElement(f,{value:U}))},T.abrupt("return",{default:B});case 32:case"end":return T.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/300-actions",context:{react:P||(P=e.t(u,2)),antd:N,"@ant-design/icons":M,"@examples/utils":S,"@examples/components/SyntaxHighlighter":E,"@schema-render/form-render-react":A},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),10926:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return b}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(12431),E=e(55173),S=e(6796),A=e(66324),M=e(98779),b={"examples-form-render-react-500-builtin-renderers-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g;return v()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=O.sent,a=o.useState,t=o.useMemo,O.next=7,Promise.resolve().then(e.bind(e,12431));case 7:return s=O.sent,n=s.Button,O.next=11,Promise.resolve().then(e.bind(e,55173));case 11:return r=O.sent,l=r.default,O.next=15,Promise.resolve().then(e.bind(e,6796));case 15:return d=O.sent,h=d.default,O.next=19,Promise.resolve().then(e.bind(e,98779));case 19:return I=O.sent,O.next=22,Promise.resolve().then(e.bind(e,66324));case 22:return y=O.sent,R=y.default,g=function(){var j=a(!1),D=C()(j,2),B=D[0],$=D[1],T=a(!1),K=C()(T,2),F=K[0],H=K[1],U=a({Description:"\u7EAF\u5C55\u793A\u7684\u5185\u5BB9\u5427\u5566\u5427\u5566"}),V=C()(U,2),z=V[0],J=V[1],Q=t(function(){return{disable:function(){return u.createElement(n,{type:"dashed",onClick:function(){return $(!B)}},B?"\u53D6\u6D88":"\u8BBE\u4E3A"," disabled \u72B6\u6001")},readonly:function(){return u.createElement(n,{type:"dashed",onClick:function(){return H(!F)}},F?"\u53D6\u6D88":"\u8BBE\u4E3A"," readonly \u72B6\u6001")}}},[F,B]);return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(h,{rootClassName:I.builtinRenderers,labelWidth:230,schema:R,value:z,onChange:J,actions:["submit","reset","disable","readonly"],registerActions:Q,disabled:B,readonly:F,readonlyPlaceholder:u.createElement("span",{style:{color:"#666",fontSize:14}},"-")}),u.createElement(l,{value:z}))},O.abrupt("return",{default:g});case 26:case"end":return O.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-500-builtin-renderers-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},"./schemas/all.tsx":{type:"FILE",value:e(22227).A},"./styles.ts":{type:"FILE",value:e(48314).A}},entry:"index.tsx"},routeId:"examples/form-render-react/500-builtin-renderers",context:{"./schemas/all.tsx":A,"./styles.ts":M,react:P||(P=e.t(u,2)),antd:N,"@examples/components/SyntaxHighlighter":E,"@schema-render/form-render-react":S,"/home/runner/work/schema-render/schema-render/examples/form-render-react/schemas/all.tsx":A,"/home/runner/work/schema-render/schema-render/examples/form-render-react/styles/index.ts":M},renderOpts:{compile:(function(){var p=c()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),29864:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return u}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(6796),c=e(99998),u={"examples-form-render-react-700-locale-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function N(){var E,S,A,M,b,p;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,6796));case 2:return E=a.sent,S=E.default,a.next=6,Promise.resolve().then(e.bind(e,99998));case 6:return A=a.sent,M=A.default,b={renderType:"Root",properties:{username:{title:"username",renderType:"InputText",required:!0},password:{title:"password",renderType:"Password",required:!0}}},p=function(){return C.createElement(S,{rootStyle:{maxWidth:500},schema:b,locale:M})},a.abrupt("return",{default:p});case 11:case"end":return a.stop()}},N)})))),asset:{type:"BLOCK",id:"examples-form-render-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from '@schema-render/form-render-react/src/locale/en_US'

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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/700-locale",context:{"@schema-render/form-render-react":W,"@schema-render/form-render-react/src/locale/en_US":c},renderOpts:{compile:(function(){var N=L()(i()().mark(function S(){var A,M=arguments;return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(1478).then(e.bind(e,71478));case 2:return p.abrupt("return",(A=p.sent).default.apply(A,M));case 3:case"end":return p.stop()}},S)}));function E(){return N.apply(this,arguments)}return E})()}}}}),34243:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),43117:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return u}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(6796),c=e(83356),u={"examples-form-render-react-850-position-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function N(){var E,S,A,M,b,p,o;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,6796));case 2:return E=t.sent,S=E.default,t.next=6,Promise.resolve().then(e.bind(e,83356));case 6:return A=t.sent,M=A.default,b={renderType:"Root",properties:{settlement_mode:{title:"\u7ED3\u7B97\u5468\u671F\u540D\u79F0",renderType:"InputText",description:"\u652F\u6301\u4E2D\u6587\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF(_)\uFF0C\u4E0D\u80FD\u5305\u542B\u7A7A\u683C",span:16},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",span:8,spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText",span:8},bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",span:8,spanStart:1},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect",span:8},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect",span:8},cooperation:{title:"\u5408\u4F5C\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u8D2D\u9500",value:1},{label:"\u4EE3\u9500",value:2}]}},payment:{title:"\u4ED8\u6B3E\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u7EBF\u4E0A\u652F\u4ED8",value:1},{label:"\u7EBF\u4E0B\u652F\u4ED8",value:2}]}}}},p=function(n,r){n.bank_id=r.extra.bank_id,n.bank_account=r.extra.bank_account,n.bank_name=r.extra.bank_name,n.bank_branch_name=r.extra.bank_branch_name},o=function(){return C.createElement(S,{schema:b,renderers:M,watch:{bank_account:p,bank_name:p,bank_branch_name:p}})},t.abrupt("return",{default:o});case 12:case"end":return t.stop()}},N)})))),asset:{type:"BLOCK",id:"examples-form-render-react-850-position-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},"./renderers.tsx":{type:"FILE",value:e(5100).A}},entry:"index.tsx"},routeId:"examples/form-render-react/850-position",context:{"./renderers.tsx":c,"@schema-render/form-render-react":W,"/home/runner/work/schema-render/schema-render/examples/form-render-react/renderers/index.tsx":c},renderOpts:{compile:(function(){var N=L()(i()().mark(function S(){var A,M=arguments;return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(1478).then(e.bind(e,71478));case 2:return p.abrupt("return",(A=p.sent).default.apply(A,M));case 3:case"end":return p.stop()}},S)}));function E(){return N.apply(this,arguments)}return E})()}}}}),4790:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return p}});var i=e(68328),v=e.n(i),L=e(1974),C=e.n(L),W=e(55420),c=e.n(W),u=e(11604),N=e.n(u),E=e(98312),S=e.n(E),A=e(96540),M=e(6796),b=e(12431),p={"examples-form-render-react-851-steps-demo-0":{component:A.memo(A.lazy(S()(c()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return a=f.sent,t=a.useState,s=a.useMemo,n=a.useRef,f.next=8,Promise.resolve().then(e.bind(e,6796));case 8:return r=f.sent,l=r.default,f.next=12,Promise.resolve().then(e.bind(e,12431));case 12:return d=f.sent,h=d.Steps,I=d.Button,y={renderType:"Root",properties:{step1:{title:"\u6B65\u9AA4\u4E00",renderType:"ObjectNull",hidden:"$userCtx.step !== 0",properties:{title:{title:"\u6B65\u9AA4\u4E00\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E00\u5185\u5BB9",renderType:"InputText",required:!0}}},step2:{title:"\u6B65\u9AA4\u4E8C",renderType:"ObjectNull",hidden:"$userCtx.step !== 1",properties:{title:{title:"\u6B65\u9AA4\u4E8C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E8C\u5185\u5BB9",renderType:"InputText",required:!0}}},step3:{title:"\u6B65\u9AA4\u4E09",renderType:"ObjectNull",hidden:"$userCtx.step !== 2",properties:{title:{title:"\u6B65\u9AA4\u4E09\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E09\u5185\u5BB9",renderType:"InputText",required:!0}}}}},R=function(){var x=t(0),j=N()(x,2),D=j[0],B=j[1],$=t({}),T=N()($,2),K=T[0],F=T[1],H=n(null),U=function(){B(function(w){return w-1})},V=(function(){var ee=S()(c()().mark(function w(){var oe,ie,fe,se;return c()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,(oe=H.current)===null||oe===void 0?void 0:oe.validate();case 2:if(ie=ge.sent,!(ie!=null&&ie.hasError||ie!=null&&ie.hasWarning)){ge.next=8;break}if(fe="step".concat(D+1),se=ie.errorList.some(function(ue){return ue.path[0]===fe}),!se){ge.next=8;break}return ge.abrupt("return");case 8:B(D+1);case 9:case"end":return ge.stop()}},w)}));return function(){return ee.apply(this,arguments)}})(),z=function(){var w;F(C()(C()({},K),{},v()({},"step".concat(D+1),{}))),(w=H.current)===null||w===void 0||w.resetError()},J=s(function(){return{prev:function(){return A.createElement(I,{onClick:U},"\u4E0A\u4E00\u6B65")},next:function(){return A.createElement(I,{type:"primary",onClick:V},"\u4E0B\u4E00\u6B65")},reset:function(){return A.createElement(I,{onClick:z},"\u91CD\u7F6E")}}},[]),Q=(function(){var ee=S()(c()().mark(function w(){var oe,ie;return c()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,(oe=H.current)===null||oe===void 0?void 0:oe.validate();case 2:if(ie=se.sent,!(ie!=null&&ie.hasError||ie!=null&&ie.hasWarning)){se.next=5;break}return se.abrupt("return");case 5:case"end":return se.stop()}},w)}));return function(){return ee.apply(this,arguments)}})();return A.createElement("div",{style:{maxWidth:800}},A.createElement(h,{size:"small",current:D,onChange:B,items:[{title:"\u6B65\u9AA4\u4E00",disabled:!0},{title:"\u6B65\u9AA4\u4E8C",disabled:!0},{title:"\u6B65\u9AA4\u4E09",disabled:!0}],style:{marginBottom:20}}),A.createElement(l,{ref:H,schema:y,value:K,onChange:F,userCtx:{step:D},actions:D===0?["next","reset"]:D===2?["submit","prev","reset"]:["next","prev","reset"],registerActions:J,onSubmit:Q}))},f.abrupt("return",{default:R});case 18:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-form-render-react-851-steps-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"}},entry:"index.tsx"},routeId:"examples/form-render-react/851-steps",context:{react:P||(P=e.t(A,2)),"@schema-render/form-render-react":M,antd:b},renderOpts:{compile:(function(){var o=S()(c()().mark(function t(){var s,n=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}}}}),4113:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return b}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(1974),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(55173),A=e(6796),M=e(12431),b={"examples-form-render-react-852-audit-renderer-demo-0":{component:E.memo(E.lazy(N()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g,f;return v()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=x.sent,a=o.useState,x.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return t=x.sent,s=t.default,x.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return n=x.sent,r=n.default,x.next=14,Promise.resolve().then(e.bind(e,12431));case 14:return l=x.sent,d=l.Input,h=l.Radio,I=[{label:"\u5BA1\u6838\u901A\u8FC7",value:1},{label:"\u5BA1\u6838\u5931\u8D25",value:2}],y=function(D){var B,$=D.disabled,T=D.value,K=D.onChange,F=D.validator,H=function(z){K(c()(c()({},T),z),{triggerValidator:!z.hasOwnProperty("type")})},U=(T==null?void 0:T.type)===2;return E.createElement("div",null,E.createElement(h.Group,{options:I,value:(B=T==null?void 0:T.type)!==null&&B!==void 0?B:null,onChange:function(z){return H({type:z.target.value})},disabled:$}),E.createElement("div",{style:{marginTop:U?5:0}},U&&E.createElement(d.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0",autoFocus:!0,showCount:!0,maxLength:200,status:F.status,disabled:$,value:T.failReason,onChange:function(z){return H({failReason:z.target.value})}})))},R={Audit:{component:y,validator:function(D){var B=D.value;if((B==null?void 0:B.type)===2&&!B.failReason)return{status:"error",message:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0"}}}},g={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0},audit:{title:"\u5BA1\u6838\u7ED3\u679C",renderType:"Audit",required:!0}}},f=function(){var D=a({}),B=C()(D,2),$=B[0],T=B[1];return E.createElement("div",{className:"example-layout-cols-2"},E.createElement(r,{schema:g,value:$,onChange:T,renderers:R}),E.createElement(s,{value:$}))},x.abrupt("return",{default:f});case 23:case"end":return x.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-852-audit-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"}},entry:"index.tsx"},routeId:"examples/form-render-react/852-audit-renderer",context:{react:P||(P=e.t(E,2)),"@examples/components/SyntaxHighlighter":S,"@schema-render/form-render-react":A,antd:M},renderOpts:{compile:(function(){var p=N()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),20459:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return S}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(6796),S={"examples-form-render-react-853-validate-on-blur-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function A(){var M,b,p,o,a,t,s,n;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return M=l.sent,b=M.useState,l.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return p=l.sent,o=p.default,l.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return a=l.sent,t=a.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},amount:{title:"\u603B\u989D",renderType:"InputNumber",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:50,message:"\u603B\u989D\u4E0D\u80FD\u5C11 50"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},password:{title:"\u5BC6\u7801\u6846",renderType:"Password",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}},n=function(){var h=b({}),I=C()(h,2),y=I[0],R=I[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{schema:s,value:y,onChange:R}),u.createElement(o,{value:y}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-form-render-react-853-validate-on-blur-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/853-validate-on-blur",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var A=c()(v()().mark(function b(){var p,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}}}}),32987:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return S}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(6796),S={"examples-form-render-react-854-scroll-to-first-error-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function A(){var M,b,p,o,a,t,s,n,r,l;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return n=function(){for(var y={renderType:"Root",properties:{}},R=1;R<=30;R++){var g="field_".concat(R);y.properties[g]={title:"\u6807\u9898_".concat(R),renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}return y},h.next=3,Promise.resolve().then(e.t.bind(e,96540,19));case 3:return M=h.sent,b=M.useState,p=M.useRef,h.next=8,Promise.resolve().then(e.bind(e,55173));case 8:return o=h.sent,a=o.default,h.next=12,Promise.resolve().then(e.bind(e,6796));case 12:return t=h.sent,s=t.default,r=n(),l=function(){var y=b({}),R=C()(y,2),g=R[0],f=R[1],O=p(null),x=(function(){var j=c()(v()().mark(function D(){var B,$,T;return v()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,(B=O.current)===null||B===void 0?void 0:B.validate();case 2:$=F.sent,$!=null&&$.hasError&&((T=O.current)===null||T===void 0||T.scrollTo($.errorList[0].path,{gap:-76,positionedElement:window}));case 4:case"end":return F.stop()}},D)}));return function(){return j.apply(this,arguments)}})();return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(s,{ref:O,schema:r,value:g,onChange:f,onSubmit:x,validateFormOnSubmit:!1}),u.createElement(a,{value:g}))},h.abrupt("return",{default:l});case 17:case"end":return h.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-form-render-react-854-scroll-to-first-error-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/854-scroll-to-first-error",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var A=c()(v()().mark(function b(){var p,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}}}}),4937:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return b}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(1974),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(55173),A=e(6796),M=e(12431),b={"examples-form-render-react-880-relation-checkbox-demo-0":{component:E.memo(E.lazy(N()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=f.sent,a=o.useState,t=o.useRef,f.next=7,Promise.resolve().then(e.bind(e,55173));case 7:return s=f.sent,n=s.default,f.next=11,Promise.resolve().then(e.bind(e,6796));case 11:return r=f.sent,l=r.default,f.next=15,Promise.resolve().then(e.bind(e,12431));case 15:return d=f.sent,h=d.Select,I={component:function(x){var j,D=x.schema,B=x.value,$=x.disabled,T=x.validator,K=x.onChange,F=x.userCtx,H=F.cityList||((j=D.renderOptions)===null||j===void 0?void 0:j.options);return E.createElement(h,c()(c()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat(D.title)},D.renderOptions),{},{options:H,status:T.status,mode:void 0,value:B,onChange:function(V){return K(V)},disabled:$}))}},y={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"AvailableCities"}}},R=function(){var x=a({}),j=C()(x,2),D=j[0],B=j[1],$=t({});return E.createElement("div",{className:"example-layout-cols-2"},E.createElement(l,{labelWidth:180,actions:[],schema:y,value:D,onChange:B,renderers:{AvailableCities:I},watch:{cities:function(K,F){$.current.cityList=F.extra.checkedOptions,F.value.includes(K.available_cities)||(K.available_cities=void 0)}},userCtx:$.current}),E.createElement(n,{value:D}))},f.abrupt("return",{default:R});case 21:case"end":return f.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"}},entry:"index.jsx"},routeId:"examples/form-render-react/880-relation-checkbox",context:{react:P||(P=e.t(E,2)),"@examples/components/SyntaxHighlighter":S,"@schema-render/form-render-react":A,antd:M},renderOpts:{compile:(function(){var p=N()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-form-render-react-880-relation-checkbox-demo-1":{component:E.memo(E.lazy(N()(v()().mark(function p(){var o,a,t,s,n,r,l,d;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=I.sent,a=o.useState,I.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return t=I.sent,s=t.default,I.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return n=I.sent,r=n.default,l={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Select",renderOptions:{}}}},d=function(){var R=a({}),g=C()(R,2),f=g[0],O=g[1];return E.createElement("div",{className:"example-layout-cols-2"},E.createElement(r,{labelWidth:180,actions:[],schema:l,value:f,onChange:O,watch:{cities:function(j,D){l.properties.available_cities.renderOptions.options=D.extra.checkedOptions,D.value.includes(j.available_cities)||(j.available_cities=void 0)}}}),E.createElement(s,{value:f}))},I.abrupt("return",{default:d});case 15:case"end":return I.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.jsx"},routeId:"examples/form-render-react/880-relation-checkbox",context:{react:P||(P=e.t(E,2)),"@examples/components/SyntaxHighlighter":S,"@schema-render/form-render-react":A},renderOpts:{compile:(function(){var p=N()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),46086:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return S}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(6796),S={"examples-form-render-react-881-relation-select-multiple-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function A(){var M,b,p,o,a,t,s,n;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return s=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],I={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"SelectMultiple",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Checkbox",renderOptions:{options:h}}}};return I},l.next=3,Promise.resolve().then(e.t.bind(e,96540,19));case 3:return M=l.sent,b=M.useState,l.next=7,Promise.resolve().then(e.bind(e,55173));case 7:return p=l.sent,o=p.default,l.next=11,Promise.resolve().then(e.bind(e,6796));case 11:return a=l.sent,t=a.default,n=function(){var h=b({}),I=C()(h,2),y=I[0],R=I[1],g=b(function(){return s()}),f=C()(g,2),O=f[0],x=f[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{labelWidth:180,actions:[],schema:O,value:y,onChange:R,watch:{cities:function(D,B){x(s(B.extra.selectedOptions)),B.value.includes(D.available_cities)||(D.available_cities=void 0)}}}),u.createElement(o,{value:y}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-form-render-react-881-relation-select-multiple-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.jsx"},routeId:"examples/form-render-react/881-relation-select-multiple",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var A=c()(v()().mark(function b(){var p,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}}}}),52165:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return A}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(45647),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(6796),A={"examples-form-render-react-890-benchmark-demo-0":{component:E.memo(E.lazy(N()(v()().mark(function M(){var b,p,o,a,t,s,n,r,l;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,6796));case 2:return b=h.sent,p=b.default,h.next=6,Promise.resolve().then(e.t.bind(e,96540,19));case 6:return o=h.sent,a=o.useState,t=100,s={renderType:"Root",properties:{}},n=c()(Array(t).keys()),n.forEach(function(I){var y="field_".concat(I);s.properties[y]={title:y,renderType:"InputText",required:!0}}),r=["200px","1fr"],l=function(){var y=a({}),R=C()(y,2),g=R[0],f=R[1],O=function(j,D){var B=parseInt(D.sPath.slice(6)),$=B-1,T=B+1,K="field_".concat(T>=t?$:T);j[K]=D.value,f(j)};return E.createElement(p,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:s,value:g,onChange:O})},h.abrupt("return",{default:l});case 15:case"end":return h.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},routeId:"examples/form-render-react/890-benchmark",context:{"@schema-render/form-render-react":S,react:P||(P=e.t(E,2))},renderOpts:{compile:(function(){var M=N()(v()().mark(function p(){var o,a=arguments;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}},"examples-form-render-react-890-benchmark-demo-1":{component:E.memo(E.lazy(N()(v()().mark(function M(){var b,p,o,a,t,s,n,r,l;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,6796));case 2:return b=h.sent,p=b.default,h.next=6,Promise.resolve().then(e.t.bind(e,96540,19));case 6:return o=h.sent,a=o.useState,t=300,s={renderType:"Root",properties:{}},n=c()(Array(t).keys()),n.forEach(function(I){var y="field_".concat(I);s.properties[y]={title:y,renderType:"InputText",required:!0}}),r=["200px","1fr"],l=function(){var y=a({}),R=C()(y,2),g=R[0],f=R[1],O=function(j,D){var B=parseInt(D.sPath.slice(6)),$=B-1,T=B+1,K="field_".concat(T>=t?$:T);j[K]=D.value,f(j)};return E.createElement(p,{layout:"autoFill",layoutMinMax:r,itemLayout:"vertical",schema:s,value:g,onChange:O})},h.abrupt("return",{default:l});case 15:case"end":return h.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},routeId:"examples/form-render-react/890-benchmark",context:{"@schema-render/form-render-react":S,react:P||(P=e.t(E,2))},renderOpts:{compile:(function(){var M=N()(v()().mark(function p(){var o,a=arguments;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}}}}),66649:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return S}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(6796),S={"examples-form-render-react-900-renderers-warning-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function A(){var M,b,p,o,a,t,s,n;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return M=l.sent,b=M.useState,l.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return p=l.sent,o=p.default,l.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return a=l.sent,t=a.default,s={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var h=b({}),I=C()(h,2),y=I[0],R=I[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(t,{schema:s,value:y,onChange:R}),u.createElement(o,{value:y}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-form-render-react-900-renderers-warning-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/900-renderers-warning",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var A=c()(v()().mark(function b(){var p,o=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1478).then(e.bind(e,71478));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,o));case 3:case"end":return t.stop()}},b)}));function M(){return A.apply(this,arguments)}return M})()}}}}),30850:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return M}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(6796),S=e(41523),A=e(12431),M={"examples-form-render-react-901-label-vertical-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=h.sent,o=p.useState,h.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return a=h.sent,t=a.default,h.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return s=h.sent,n=s.default,r={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},l=function(){var y=o({}),R=C()(y,2),g=R[0],f=R[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(n,{itemLayout:"vertical",labelColon:"\uFF1A",schema:r,value:g,onChange:f}),u.createElement(t,{value:g}))},h.abrupt("return",{default:l});case 15:case"end":return h.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/form-render-react/901-label-vertical",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-form-render-react-901-label-vertical-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=f.sent,o=p.useState,f.next=6,Promise.resolve().then(e.bind(e,55173));case 6:return a=f.sent,t=a.default,f.next=10,Promise.resolve().then(e.bind(e,6796));case 10:return s=f.sent,n=s.default,f.next=14,Promise.resolve().then(e.bind(e,41523));case 14:return r=f.sent,l=r.QuestionCircleOutlined,f.next=18,Promise.resolve().then(e.bind(e,12431));case 18:return d=f.sent,h=d.Popover,I={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},y=function(x){var j=x.schema,D=x.required,B=x.prefixClassNames;return u.createElement("div",null,j.title,!!j.titleDescription&&u.createElement(h,{placement:"top",trigger:"hover",content:j.titleDescription},u.createElement(l,{className:B("item-title-tooltip"),style:{marginLeft:4}})),!D&&" (\u53EF\u9009)")},R=function(){var x=o({}),j=C()(x,2),D=j[0],B=j[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(n,{itemLayout:"vertical",labelWidth:150,labelRender:y,schema:I,value:D,onChange:B}),u.createElement(t,{value:D}))},f.abrupt("return",{default:R});case 24:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},antd:{type:"NPM",value:"6.7.0"}},entry:"index.tsx"},routeId:"examples/form-render-react/901-label-vertical",context:{react:P||(P=e.t(u,2)),"@examples/components/SyntaxHighlighter":N,"@schema-render/form-render-react":E,"@ant-design/icons":S,antd:A},renderOpts:{compile:(function(){var b=c()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),57874:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return r}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(55173),E=e(12431),S=e(51252),A=e(67758),M=e(67684),b=e(6796),p=e(97102),o=e(2552),a=e(27395),t=e(13331),s=e(92689),n=e(44099),r={"examples-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function l(){var d,h,I,y,R,g,f,O,x,j,D,B,$,T,K,F;return v()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return d=U.sent,h=d.default,U.next=6,Promise.resolve().then(e.t.bind(e,96540,19));case 6:return I=U.sent,y=I.useState,R=I.useRef,U.next=11,Promise.resolve().then(e.bind(e,12431));case 11:return g=U.sent,f=g.Button,O=g.message,U.next=16,Promise.resolve().then(e.bind(e,51252));case 16:return x=U.sent,j=x.default,U.next=20,Promise.resolve().then(e.bind(e,67684));case 20:return D=U.sent,B=D.default,U.next=24,Promise.resolve().then(e.bind(e,67758));case 24:return $=U.sent,T=$.default,K={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},F=function(){var z=y({}),J=C()(z,2),Q=J[0],ee=J[1],w=R(),oe=(function(){var ie=c()(v()().mark(function fe(){var se;return v()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,w.current.validate();case 2:se=ge.sent,se.hasError||O.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return ge.stop()}},fe)}));return function(){return ie.apply(this,arguments)}})();return u.createElement("div",{className:"example-layout-cols-2"},u.createElement("div",null,u.createElement(j,{ref:w,schema:K,value:Q,onChange:ee,itemLayout:B,renderers:T}),u.createElement(f,{type:"primary",style:{margin:"20px 0 0 115px"},onClick:oe},"\u63D0\u4EA4")),u.createElement(h,{value:Q}))},U.abrupt("return",{default:F});case 29:case"end":return U.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/core-react":{type:"NPM",value:"2.5.1"},"./core-react/renderers/common.tsx":{type:"FILE",value:e(81185).A},"./core-react/item-layout/Horizontal.tsx":{type:"FILE",value:e(68331).A}},entry:"index.jsx"},routeId:"examples/index",context:{"./core-react/renderers/common.tsx":A,"./core-react/item-layout/Horizontal.tsx":M,"@examples/components/SyntaxHighlighter":N,react:P||(P=e.t(u,2)),antd:E,"@schema-render/core-react":S,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:(function(){var l=c()(v()().mark(function h(){var I,y=arguments;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(1478).then(e.bind(e,71478));case 2:return g.abrupt("return",(I=g.sent).default.apply(I,y));case 3:case"end":return g.stop()}},h)}));function d(){return l.apply(this,arguments)}return d})()}},"examples-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function l(){var d,h,I,y,R,g,f,O,x,j;return v()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return d=B.sent,h=d.default,B.next=6,Promise.resolve().then(e.t.bind(e,96540,19));case 6:return I=B.sent,y=I.useState,B.next=10,Promise.resolve().then(e.bind(e,12431));case 10:return R=B.sent,g=R.message,B.next=14,Promise.resolve().then(e.bind(e,6796));case 14:return f=B.sent,O=f.default,x={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},j=function(){var T=y({}),K=C()(T,2),F=K[0],H=K[1];return u.createElement("div",{className:"example-layout-cols-2"},u.createElement(O,{schema:x,value:F,onChange:H,onSubmit:function(){return g.success("\u63D0\u4EA4\u6210\u529F")}}),u.createElement(h,{value:F}))},B.abrupt("return",{default:j});case 19:case"end":return B.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.1"}},entry:"index.jsx"},routeId:"examples/index",context:{"@examples/components/SyntaxHighlighter":N,react:P||(P=e.t(u,2)),antd:E,"@schema-render/form-render-react":b},renderOpts:{compile:(function(){var l=c()(v()().mark(function h(){var I,y=arguments;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(1478).then(e.bind(e,71478));case 2:return g.abrupt("return",(I=g.sent).default.apply(I,y));case 3:case"end":return g.stop()}},h)}));function d(){return l.apply(this,arguments)}return d})()}},"examples-demo-2":{component:u.memo(u.lazy(c()(v()().mark(function l(){var d,h,I,y,R,g;return v()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return d=O.sent,h=d.sleep,O.next=6,Promise.resolve().then(e.bind(e,2552));case 6:return I=O.sent,y=I.default,R={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},g=function(){var j=(function(){var D=c()(v()().mark(function B($){return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log("searchParams:",$),K.next=3,h();case 3:case"end":return K.stop()}},B)}));return function($){return D.apply(this,arguments)}})();return u.createElement(y,{schema:R,onSubmit:j,onReset:j})},O.abrupt("return",{default:g});case 11:case"end":return O.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'

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

export default Demo`},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"2.5.1"}},entry:"index.jsx"},routeId:"examples/index",context:{"@examples/utils":p,"@schema-render/search-react":o},renderOpts:{compile:(function(){var l=c()(v()().mark(function h(){var I,y=arguments;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(1478).then(e.bind(e,71478));case 2:return g.abrupt("return",(I=g.sent).default.apply(I,y));case 3:case"end":return g.stop()}},h)}));function d(){return l.apply(this,arguments)}return d})()}},"examples-demo-3":{component:u.memo(u.lazy(c()(v()().mark(function l(){var d,h,I,y,R,g,f,O,x,j,D;return v()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return d=$.sent,h=d.sleep,$.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return I=$.sent,y=I.default,$.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return R=$.sent,g=R.default,$.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return f=$.sent,O=f.default,$.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return x=$.sent,j=x.default,D=function(){return u.createElement(j,{search:{schema:y},table:{columns:g,showRowNumber:!0},request:(function(){var K=c()(v()().mark(function H(U){var V;return v()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return console.log("searchParams:",U),J.next=3,h();case 3:return V=O(),J.abrupt("return",{data:V,total:100});case 5:case"end":return J.stop()}},H)}));function F(H){return K.apply(this,arguments)}return F})()})},$.abrupt("return",{default:D});case 22:case"end":return $.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./search-table-react/helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./search-table-react/helpers/schema.ts":{type:"FILE",value:e(95736).A},"./search-table-react/helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/index",context:{"./search-table-react/helpers/createDataSource.ts":t,"./search-table-react/helpers/schema.ts":s,"./search-table-react/helpers/columns.ts":n,"@examples/utils":p,"@schema-render/search-table-react":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":n},renderOpts:{compile:(function(){var l=c()(v()().mark(function h(){var I,y=arguments;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(1478).then(e.bind(e,71478));case 2:return g.abrupt("return",(I=g.sent).default.apply(I,y));case 3:case"end":return g.stop()}},h)}));function d(){return l.apply(this,arguments)}return d})()}}}}),31119:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return p}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(12431),E=e(97102),S=e(21215),A=e(2552),M=e(57580),b=e(68990),p={"examples-search-react-001-intro-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D;return v()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return a=$.sent,t=a.useState,$.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return s=$.sent,n=s.ConfigProvider,r=s.Table,$.next=11,Promise.resolve().then(e.bind(e,97102));case 11:return l=$.sent,d=l.sleep,$.next=15,Promise.resolve().then(e.bind(e,21215));case 15:return h=$.sent,I=h.default,$.next=19,Promise.resolve().then(e.bind(e,68990));case 19:return y=$.sent,R=y.default,$.next=23,Promise.resolve().then(e.bind(e,57580));case 23:return g=$.sent,f=g.default,$.next=27,Promise.resolve().then(e.bind(e,2552));case 27:return O=$.sent,x=O.default,j={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},D=function(){var K=t(function(){return f()}),F=C()(K,2),H=F[0],U=F[1],V=(function(){var z=c()(v()().mark(function J(Q){return v()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("searchParams:",Q),w.next=3,d();case 3:U(f());case 4:case"end":return w.stop()}},J)}));return function(Q){return z.apply(this,arguments)}})();return u.createElement(n,{locale:I},u.createElement(x,{schema:j,onSubmit:V,onReset:V}),u.createElement(r,{style:{marginTop:20},columns:R,dataSource:H,scroll:{x:1500}}))},$.abrupt("return",{default:D});case 32:case"end":return $.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(52391).A},"./helpers/columns.ts":{type:"FILE",value:e(78877).A}},entry:"index.tsx"},routeId:"examples/search-react/001-intro",context:{"./helpers/createDataSource.ts":M,"./helpers/columns.ts":b,react:P||(P=e.t(u,2)),antd:N,"@examples/utils":E,"antd/locale/zh_CN":S,"@schema-render/search-react":A,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/columns.ts":b},renderOpts:{compile:(function(){var o=c()(v()().mark(function t(){var s,n=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}}}}),60640:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return E}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(12431),c=e(97102),u=e(21215),N=e(2552),E={"examples-search-react-300-actions-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function S(){var A,M,b,p,o,a,t,s,n,r;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return A=d.sent,M=A.ConfigProvider,d.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return b=d.sent,p=b.sleep,d.next=10,Promise.resolve().then(e.bind(e,21215));case 10:return o=d.sent,a=o.default,d.next=14,Promise.resolve().then(e.bind(e,2552));case 14:return t=d.sent,s=t.default,n={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},r=function(){var I=(function(){var R=L()(i()().mark(function g(f){return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("searchParams:",f),x.next=3,p();case 3:case"end":return x.stop()}},g)}));return function(f){return R.apply(this,arguments)}})(),y=function(g){console.log("isCollapsed:",g)};return C.createElement(M,{locale:a},C.createElement(s,{schema:n,onSubmit:I,onReset:I,onToggleCollapsed:y}))},d.abrupt("return",{default:r});case 19:case"end":return d.stop()}},S)})))),asset:{type:"BLOCK",id:"examples-search-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/search-react/300-actions",context:{antd:W,"@examples/utils":c,"antd/locale/zh_CN":u,"@schema-render/search-react":N},renderOpts:{compile:(function(){var S=L()(i()().mark(function M(){var b,p=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(1478).then(e.bind(e,71478));case 2:return a.abrupt("return",(b=a.sent).default.apply(b,p));case 3:case"end":return a.stop()}},M)}));function A(){return S.apply(this,arguments)}return A})()}}}}),89899:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return u}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(2552),c=e(51763),u={"examples-search-react-700-locale-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function N(){var E,S,A,M,b,p;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,2552));case 2:return E=a.sent,S=E.default,a.next=6,Promise.resolve().then(e.bind(e,51763));case 6:return A=a.sent,M=A.default,b={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"}}},p=function(){return C.createElement(S,{schema:b,labelWidth:120,locale:M})},a.abrupt("return",{default:p});case 11:case"end":return a.stop()}},N)})))),asset:{type:"BLOCK",id:"examples-search-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from '@schema-render/search-react/src/locale/en_US'

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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"2.5.1"}},entry:"index.tsx"},routeId:"examples/search-react/700-locale",context:{"@schema-render/search-react":W,"@schema-render/search-react/src/locale/en_US":c},renderOpts:{compile:(function(){var N=L()(i()().mark(function S(){var A,M=arguments;return i()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(1478).then(e.bind(e,71478));case 2:return p.abrupt("return",(A=p.sent).default.apply(A,M));case 3:case"end":return p.stop()}},S)}));function E(){return N.apply(this,arguments)}return E})()}}}}),32090:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),55362:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return E}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(2552),c=e(82230),u=e(23956),N=e(71991),E={"examples-search-react-850-category-title-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function S(){var A,M,b,p,o,a,t,s,n,r,l,d;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,2552));case 2:return A=I.sent,M=A.default,I.next=6,Promise.resolve().then(e.bind(e,23956));case 6:return b=I.sent,p=b.default,I.next=10,Promise.resolve().then(e.bind(e,82230));case 10:return o=I.sent,a=o.default,t={BankSelect:p,ObjectSectionTitle:a},s={renderType:"Root",properties:{basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"}}},payment:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}},collection:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}}}},n=function(R){var g=function(O,x){O[R].bank_id=x.extra.bank_id,O[R].bank_account=x.extra.bank_account,O[R].bank_name=x.extra.bank_name,O[R].bank_branch_name=x.extra.bank_branch_name};return g},r=n("payment"),l=n("collection"),d=function(){return C.createElement(M,{defaultCollapsed:!1,style:{gridTemplateColumns:"auto"},schema:s,renderers:t,actions:["collapse"],watch:{"payment.bank_account":r,"payment.bank_name":r,"payment.bank_branch_name":r,"collection.bank_account":l,"collection.bank_name":l,"collection.bank_branch_name":l}})},I.abrupt("return",{default:d});case 19:case"end":return I.stop()}},S)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"2.5.1"},"./renderers/ObjectSectionTitle.tsx":{type:"FILE",value:e(61473).A},"./renderers/BankSelect.tsx":{type:"FILE",value:e(22547).A}},entry:"index.tsx"},routeId:"examples/search-react/850-category-title",context:{"./renderers/ObjectSectionTitle.tsx":c,"./renderers/BankSelect.tsx":u,"@schema-render/search-react":W,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/ObjectSectionTitle.tsx":c,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":u},renderOpts:{compile:(function(){var S=L()(i()().mark(function M(){var b,p=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(1478).then(e.bind(e,71478));case 2:return a.abrupt("return",(b=a.sent).default.apply(b,p));case 3:case"end":return a.stop()}},M)}));function A(){return S.apply(this,arguments)}return A})()}},"examples-search-react-850-category-title-demo-1":{component:C.memo(C.lazy(L()(i()().mark(function S(){var A,M,b,p,o,a,t,s,n,r,l,d,h;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,2552));case 2:return A=y.sent,M=A.default,y.next=6,Promise.resolve().then(e.bind(e,23956));case 6:return b=y.sent,p=b.default,y.next=10,Promise.resolve().then(e.bind(e,71991));case 10:return o=y.sent,a=o.default,t={BankSelect:p,SectionTitle:a},s={renderType:"Root",properties:{_section_title_x1:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"SectionTitle"},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},_section_title_x2:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},payment_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},payment_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},payment_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x3:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},collection_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},collection_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},collection_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x4:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},reason:{title:"\u4E8B\u7531",renderType:"InputText",spanStart:1,style:{width:"calc(100vw - 635px)"}},remark:{title:"\u5907\u6CE8",renderType:"TextArea",renderOptions:{rows:1},style:{gridColumn:"1/3"}}}},n=function(g){var f=function(x,j){x["".concat(g,"_bank_id")]=j.extra.bank_id,x["".concat(g,"_bank_account")]=j.extra.bank_account,x["".concat(g,"_bank_name")]=j.extra.bank_name,x["".concat(g,"_bank_branch_name")]=j.extra.bank_branch_name};return f},r=n("payment"),l=n("collection"),d=function(g){var f;if(!g)return 5;var O=g.clientWidth,x=((f=g.querySelector(".schema-render-form-item:nth-of-type(2)"))===null||f===void 0||(f=f.getBoundingClientRect())===null||f===void 0?void 0:f.width)||320;return Math.floor(O/x)*2},h=function(){return C.createElement(M,{defaultCollapsed:!1,schema:s,renderers:t,actions:["collapse"],watch:{payment_bank_account:r,payment_bank_name:r,payment_bank_branch_name:r,collection_bank_account:l,collection_bank_name:l,collection_bank_branch_name:l},calcCollapsedNumber:d})},y.abrupt("return",{default:h});case 20:case"end":return y.stop()}},S)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"2.5.1"},"./renderers/SectionTitle.tsx":{type:"FILE",value:e(69170).A},"./renderers/BankSelect.tsx":{type:"FILE",value:e(22547).A}},entry:"index.tsx"},routeId:"examples/search-react/850-category-title",context:{"./renderers/SectionTitle.tsx":N,"./renderers/BankSelect.tsx":u,"@schema-render/search-react":W,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/SectionTitle.tsx":N,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":u},renderOpts:{compile:(function(){var S=L()(i()().mark(function M(){var b,p=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(1478).then(e.bind(e,71478));case 2:return a.abrupt("return",(b=a.sent).default.apply(b,p));case 3:case"end":return a.stop()}},M)}));function A(){return S.apply(this,arguments)}return A})()}}}}),64138:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return s}});var i=e(11604),v=e.n(i),L=e(1974),C=e.n(L),W=e(55420),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(97102),A=e(27395),M=e(13331),b=e(92689),p=e(44099),o=e(12431),a=e(21215),t=e(20532),s={"examples-search-table-react-001-intro-demo-0":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x;return c()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return r=D.sent,l=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return d=D.sent,h=d.default,D.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return I=D.sent,y=I.default,D.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return R=D.sent,g=R.default,D.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return f=D.sent,O=f.default,x=function(){return E.createElement(O,{search:{schema:h},table:{columns:y},request:(function(){var $=N()(c()().mark(function K(F){var H;return c()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return console.log("searchParams:",F),V.next=3,l();case 3:return H=g(F.pageSize),V.abrupt("return",{data:H,total:100});case 5:case"end":return V.stop()}},K)}));function T(K){return $.apply(this,arguments)}return T})()})},D.abrupt("return",{default:x});case 22:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/001-intro",context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":b,"./helpers/columns.ts":p,"@examples/utils":S,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}},"examples-search-table-react-001-intro-demo-1":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x,j,D,B,$,T,K,F,H,U,V,z,J,Q,ee,w,oe,ie;return c()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return r=se.sent,l=r.sleep,se.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return d=se.sent,h=d.default,se.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return I=se.sent,y=I.default,se.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return R=se.sent,g=R.default,se.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return f=se.sent,O=f.default,se.next=22,Promise.resolve().then(e.t.bind(e,96540,19));case 22:return x=se.sent,j=x.useState,D=x.useRef,se.next=27,Promise.resolve().then(e.bind(e,12431));case 27:return B=se.sent,$=B.ConfigProvider,T=B.message,K=B.Button,F=B.Tag,se.next=34,Promise.resolve().then(e.bind(e,21215));case 34:return H=se.sent,U=H.default,se.next=38,Promise.resolve().then(e.bind(e,20532));case 38:return V=se.sent,z=V.pinyin,J=/[\u4e00-\u9fa5]/,Q=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],ee=y.map(function(Pe,ge){var ue=C()({},Pe);return ge===0?ue.fixed="left":ge===y.length-1&&(ue.fixed="right"),ue}),w={height:50,lineHeight:"50px",marginBottom:16,borderRadius:10,textAlign:"center",background:"#b6e0fa"},oe=function(ge){return l()},ie=function(){var ge=j("1"),ue=v()(ge,2),Ke=ue[0],Ce=ue[1],je=D(null),He=function(ze,Ge){return[{text:"\u7F16\u8F91",onClick:function(){T.success("\u70B9\u51FB\u4E86\u7B2C ".concat(Ge," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:(function(){var _e=N()(c()().mark(function qe(){var rn;return c()().wrap(function(Ye){for(;;)switch(Ye.prev=Ye.next){case 0:return Ye.next=2,oe(ze.id);case 2:(rn=je.current)===null||rn===void 0||rn.refresh();case 3:case"end":return Ye.stop()}},qe)}));function ke(){return _e.apply(this,arguments)}return ke})()}]};return E.createElement($,{locale:U},E.createElement(O,{ref:je,search:{schema:h,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:Ke,items:Q,onChange:Ce},leftExtraContent:function(ze){var Ge=ze.loading;return E.createElement(K,{disabled:Ge},"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(ze){var Ge=ze.loading;return E.createElement(K,{disabled:Ge},"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9")}},titleTop:function(){return E.createElement("div",{style:w},"Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49")},titleBottom:function(){return E.createElement("div",{style:w},"Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49")},header:function(){return E.createElement("div",{style:w},"Header \u5185\u5BB9\u81EA\u5B9A\u4E49")},footer:function(){return E.createElement("div",{style:C()(C()({},w),{},{marginTop:16})},"Footer \u5185\u5BB9\u81EA\u5B9A\u4E49")},table:{columns:ee,showRowNumber:!0,actionItems:He,actionItemsCount:3,actionItemsColumnData:{width:180},sortMode:"local-all",sortStringValueTransform:function(ze){return J.test(ze)?z(ze,{toneType:"none"}):ze}},request:(function(){var Be=N()(c()().mark(function Ge(_e){var ke,qe;return c()().wrap(function(tn){for(;;)switch(tn.prev=tn.next){case 0:return tn.next=2,l();case 2:return ke=g(_e.pageSize),qe=ke.reduce(function(Ye,cn){return Ye+cn.goods_price},0).toFixed(2),tn.abrupt("return",{data:ke,total:100,summaryData:{supplier_code:E.createElement(F,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:qe}});case 5:case"end":return tn.stop()}},Ge)}));function ze(Ge){return Be.apply(this,arguments)}return ze})()}))},se.abrupt("return",{default:ie});case 47:case"end":return se.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.7.0"},"pinyin-pro":{type:"NPM",value:"3.29.5"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/001-intro",context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":b,"./helpers/columns.ts":p,"@examples/utils":S,"@schema-render/search-table-react":A,react:P||(P=e.t(E,2)),antd:o,"antd/locale/zh_CN":a,"pinyin-pro":t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}}}}),67988:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return b}});var i=e(55420),v=e.n(i),L=e(98312),C=e.n(L),W=e(96540),c=e(97102),u=e(27395),N=e(13331),E=e(92689),S=e(44099),A=e(12431),M=e(21215),b={"examples-search-table-react-010-table-actions-demo-0":{component:W.memo(W.lazy(C()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return o=g.sent,a=o.sleep,g.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return t=g.sent,s=t.default,g.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return n=g.sent,r=n.default,g.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return l=g.sent,d=l.default,g.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return h=g.sent,I=h.default,y=function(){return W.createElement(I,{search:{schema:s},table:{columns:r,showRowNumber:!0},request:(function(){var O=C()(v()().mark(function j(D){var B;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,a();case 2:return B=d(D.pageSize),T.abrupt("return",{data:B,total:100});case 4:case"end":return T.stop()}},j)}));function x(j){return O.apply(this,arguments)}return x})()})},g.abrupt("return",{default:y});case 22:case"end":return g.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/010-table-actions",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns.ts":S,"@examples/utils":c,"@schema-render/search-table-react":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S},renderOpts:{compile:(function(){var p=C()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-search-table-react-010-table-actions-demo-1":{component:W.memo(W.lazy(C()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return o=f.sent,a=o.sleep,f.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return t=f.sent,s=t.default,f.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return n=f.sent,r=n.default,f.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return l=f.sent,d=l.default,f.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return h=f.sent,I=h.default,y=function(x,j,D){return W.createElement("div",{style:{width:20,height:20,borderRadius:"50%",background:"black",color:"white",display:"inline-flex",justifyContent:"center",alignItems:"center"}},D+1)},R=function(){return W.createElement(I,{search:{schema:s},table:{columns:r,showRowNumber:!0,rowNumberColumnData:{width:80,render:y}},request:(function(){var x=C()(v()().mark(function D(B){var $;return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,a();case 2:return $=d(B.pageSize),K.abrupt("return",{data:$,total:100});case 4:case"end":return K.stop()}},D)}));function j(D){return x.apply(this,arguments)}return j})()})},f.abrupt("return",{default:R});case 23:case"end":return f.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/010-table-actions",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns.ts":S,"@examples/utils":c,"@schema-render/search-table-react":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S},renderOpts:{compile:(function(){var p=C()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-search-table-react-010-table-actions-demo-2":{component:W.memo(W.lazy(C()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g,f,O,x;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return o=D.sent,a=o.sleep,D.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return t=D.sent,s=t.default,D.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return n=D.sent,r=n.default,D.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return l=D.sent,d=l.default,D.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return h=D.sent,I=h.default,D.next=22,Promise.resolve().then(e.bind(e,12431));case 22:return y=D.sent,R=y.ConfigProvider,g=y.message,D.next=27,Promise.resolve().then(e.bind(e,21215));case 27:return f=D.sent,O=f.default,x=function(){var $=function(K,F){return[{text:"\u7F16\u8F91",onClick:function(){g.success("\u70B9\u51FB\u4E86\u7B2C ".concat(F," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"}]};return W.createElement(R,{locale:O},W.createElement(I,{search:{schema:s},table:{columns:r,actionItems:$},request:(function(){var T=C()(v()().mark(function F(H){var U;return v()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,a();case 2:return U=d(H.pageSize),z.abrupt("return",{data:U,total:100});case 4:case"end":return z.stop()}},F)}));function K(F){return T.apply(this,arguments)}return K})()}))},D.abrupt("return",{default:x});case 31:case"end":return D.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A}},entry:"index.tsx"},routeId:"examples/search-table-react/010-table-actions",context:{"./helpers/createDataSource.ts":N,"./helpers/columns.ts":S,"./helpers/schema.ts":E,"@examples/utils":c,"@schema-render/search-table-react":u,antd:A,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E},renderOpts:{compile:(function(){var p=C()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-search-table-react-010-table-actions-demo-3":{component:W.memo(W.lazy(C()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=T.sent,a=o.useRef,T.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return t=T.sent,s=t.sleep,T.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return n=T.sent,r=n.default,T.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return l=T.sent,d=l.default,T.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return h=T.sent,I=h.default,T.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return y=T.sent,R=y.default,T.next=26,Promise.resolve().then(e.bind(e,12431));case 26:return g=T.sent,f=g.ConfigProvider,O=g.message,T.next=31,Promise.resolve().then(e.bind(e,21215));case 31:return x=T.sent,j=x.default,D=function(F){return s()},B=function(){var F=a(null),H=function(V,z){return[{text:"\u7F16\u8F91",onClick:function(){O.success("\u70B9\u51FB\u7B2C ".concat(z," \u7F16\u8F91\u4E86"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:(function(){var J=C()(v()().mark(function ee(){var w;return v()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,D(V.id);case 2:(w=F.current)===null||w===void 0||w.refresh();case 3:case"end":return ie.stop()}},ee)}));function Q(){return J.apply(this,arguments)}return Q})()}]};return W.createElement(f,{locale:j},W.createElement(R,{ref:F,search:{schema:r},table:{columns:d,actionItems:H,actionItemsDropdownProps:{overlayClassName:"my-dropdown-class-name"}},request:(function(){var U=C()(v()().mark(function z(J){var Q;return v()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,s();case 2:return Q=I(J.pageSize),w.abrupt("return",{data:Q,total:100});case 4:case"end":return w.stop()}},z)}));function V(z){return U.apply(this,arguments)}return V})()}))},T.abrupt("return",{default:B});case 36:case"end":return T.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/010-table-actions",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns.ts":S,react:P||(P=e.t(W,2)),"@examples/utils":c,"@schema-render/search-table-react":u,antd:A,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S},renderOpts:{compile:(function(){var p=C()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}},"examples-search-table-react-010-table-actions-demo-4":{component:W.memo(W.lazy(C()(v()().mark(function p(){var o,a,t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D;return v()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return o=$.sent,a=o.useRef,$.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return t=$.sent,s=t.sleep,$.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return n=$.sent,r=n.default,$.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return l=$.sent,d=l.default,$.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return h=$.sent,I=h.default,$.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return y=$.sent,R=y.default,$.next=26,Promise.resolve().then(e.bind(e,12431));case 26:return g=$.sent,f=g.ConfigProvider,$.next=30,Promise.resolve().then(e.bind(e,21215));case 30:return O=$.sent,x=O.default,j=function(K){return s()},D=function(){var K=a(null),F=function(U,V){return[{text:W.createElement("a",{href:"https://schema-render.js.org/",style:{color:"green",padding:"0 7px"},key:"link-".concat(V)},"\u7F16\u8F91")},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,confirmProps:{title:"\u6E29\u99A8\u63D0\u793A",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010".concat(U.supplier_code,"\u3011\u4F9B\u5E94\u5546\u5417\uFF1F")},onClick:(function(){var z=C()(v()().mark(function Q(){var ee;return v()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,j(U.id);case 2:(ee=K.current)===null||ee===void 0||ee.refresh();case 3:case"end":return oe.stop()}},Q)}));function J(){return z.apply(this,arguments)}return J})()}]};return W.createElement(f,{locale:x},W.createElement(R,{ref:K,search:{schema:r},table:{columns:d,actionItems:F,actionItemsCount:3,actionItemsColumnData:{width:180}},request:(function(){var H=C()(v()().mark(function V(z){var J;return v()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,s();case 2:return J=I(z.pageSize),ee.abrupt("return",{data:J,total:100});case 4:case"end":return ee.stop()}},V)}));function U(V){return H.apply(this,arguments)}return U})()}))},$.abrupt("return",{default:D});case 35:case"end":return $.stop()}},p)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/010-table-actions",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns.ts":S,react:P||(P=e.t(W,2)),"@examples/utils":c,"@schema-render/search-table-react":u,antd:A,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S},renderOpts:{compile:(function(){var p=C()(v()().mark(function a(){var t,s=arguments;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(1478).then(e.bind(e,71478));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},a)}));function o(){return p.apply(this,arguments)}return o})()}}}}),81079:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return M}});var P=e(1974),i=e.n(P),v=e(55420),L=e.n(v),C=e(98312),W=e.n(C),c=e(96540),u=e(97102),N=e(27395),E=e(13331),S=e(92689),A=e(44099),M={"examples-search-table-react-020-table-height-demo-0":{component:c.memo(c.lazy(W()(L()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I;return L()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return p=R.sent,o=p.sleep,R.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return a=R.sent,t=a.default,R.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return s=R.sent,n=s.default,R.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return r=R.sent,l=r.default,R.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return d=R.sent,h=d.default,I=function(){return c.createElement(h,{style:{height:500,overflow:"hidden"},search:{schema:t},table:{columns:n,autoScrollY:!0},request:(function(){var f=W()(L()().mark(function x(j){var D;return L()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,o();case 2:return D=l(j.pageSize),$.abrupt("return",{data:D,total:100});case 4:case"end":return $.stop()}},x)}));function O(x){return f.apply(this,arguments)}return O})()})},R.abrupt("return",{default:I});case 22:case"end":return R.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/020-table-height",context:{"./helpers/createDataSource.ts":E,"./helpers/schema.ts":S,"./helpers/columns.ts":A,"@examples/utils":u,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:(function(){var b=W()(L()().mark(function o(){var a,t=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-search-table-react-020-table-height-demo-1":{component:c.memo(c.lazy(W()(L()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y;return L()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return p=g.sent,o=p.sleep,g.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return a=g.sent,t=a.default,g.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return s=g.sent,n=s.default,g.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return r=g.sent,l=r.default,g.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return d=g.sent,h=d.default,I={height:50,lineHeight:"50px",marginTop:16,borderRadius:10,textAlign:"center",background:"lightskyblue"},y=function(){return c.createElement(h,{style:{height:700,overflow:"hidden"},search:{schema:t},table:{columns:n,autoScrollY:!0},request:(function(){var O=W()(L()().mark(function j(D){var B;return L()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,o();case 2:return B=l(D.pageSize),T.abrupt("return",{data:B,total:100});case 4:case"end":return T.stop()}},j)}));function x(j){return O.apply(this,arguments)}return x})(),header:function(){return c.createElement("div",{style:i()(i()({},I),{},{margin:"0 0 16px 0"})},"Header")},titleTop:function(){return c.createElement("div",{style:I},"Title Top")},titleBottom:function(){return c.createElement("div",{style:I},"Title Bottom")},footer:function(){return c.createElement("div",{style:I},"Footer")}})},g.abrupt("return",{default:y});case 23:case"end":return g.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.jsx"},routeId:"examples/search-table-react/020-table-height",context:{"./helpers/createDataSource.ts":E,"./helpers/schema.ts":S,"./helpers/columns.ts":A,"@examples/utils":u,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:(function(){var b=W()(L()().mark(function o(){var a,t=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),80895:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return M}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(12431),c=e(97102),u=e(27395),N=e(13331),E=e(92689),S=e(44099),A=e(16844),M={"examples-search-table-react-030-table-summay-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return p=f.sent,o=p.Tag,f.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return a=f.sent,t=a.sleep,f.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return s=f.sent,n=s.default,f.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return r=f.sent,l=r.default,f.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return d=f.sent,h=d.default,f.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return I=f.sent,y=I.default,R=function(){return C.createElement(y,{search:{schema:n},table:{columns:l,scroll:{y:300}},request:(function(){var x=L()(i()().mark(function D(B){var $,T;return i()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,t();case 2:return $=h(B.pageSize),T=$.reduce(function(H,U){return H+U.goods_price},0).toFixed(2),F.abrupt("return",{data:$,total:100,summaryData:{supplier_code:C.createElement(o,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:T}});case 5:case"end":return F.stop()}},D)}));function j(D){return x.apply(this,arguments)}return j})()})},f.abrupt("return",{default:R});case 26:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/030-table-summay",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns.ts":S,antd:W,"@examples/utils":c,"@schema-render/search-table-react":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S},renderOpts:{compile:(function(){var b=L()(i()().mark(function o(){var a,t=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-search-table-react-030-table-summay-demo-1":{component:C.memo(C.lazy(L()(i()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return p=f.sent,o=p.Tag,f.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return a=f.sent,t=a.sleep,f.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return s=f.sent,n=s.default,f.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return r=f.sent,l=r.default,f.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return d=f.sent,h=d.default,f.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return I=f.sent,y=I.default,R=function(){var x=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},j=C.createElement("div",{style:{color:"red",fontWeight:"bold"}},"\u5408\u8BA1");return C.createElement(y,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,summaryText:j,actionItems:x},request:(function(){var D=L()(i()().mark(function $(T){var K,F;return i()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,t();case 2:return K=h(T.pageSize),F=K.reduce(function(V,z){return V+z.goods_price},0).toFixed(2),U.abrupt("return",{data:K,total:100,summaryData:{supplier_code:C.createElement(o,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:F}});case 5:case"end":return U.stop()}},$)}));function B($){return D.apply(this,arguments)}return B})()})},f.abrupt("return",{default:R});case 26:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/030-table-summay",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns.ts":S,antd:W,"@examples/utils":c,"@schema-render/search-table-react":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S},renderOpts:{compile:(function(){var b=L()(i()().mark(function o(){var a,t=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-search-table-react-030-table-summay-demo-2":{component:C.memo(C.lazy(L()(i()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return p=f.sent,o=p.Tag,f.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return a=f.sent,t=a.sleep,f.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return s=f.sent,n=s.default,f.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return r=f.sent,l=r.default,f.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return d=f.sent,h=d.default,f.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return I=f.sent,y=I.default,R=function(){var x=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return C.createElement(y,{search:{schema:n},table:{columns:l,scroll:{y:300},actionItems:x,rowSelection:{columnWidth:60,fixed:!0,type:"checkbox"}},request:(function(){var j=L()(i()().mark(function B($){var T,K;return i()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,t();case 2:return T=h($.pageSize),K=T.reduce(function(U,V){return U+V.goods_price},0).toFixed(2),H.abrupt("return",{data:T,total:100,summaryData:{supplier_code:C.createElement(o,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},B)}));function D(B){return j.apply(this,arguments)}return D})()})},f.abrupt("return",{default:R});case 26:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/030-table-summay",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns.ts":S,antd:W,"@examples/utils":c,"@schema-render/search-table-react":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S},renderOpts:{compile:(function(){var b=L()(i()().mark(function o(){var a,t=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-search-table-react-030-table-summay-demo-3":{component:C.memo(C.lazy(L()(i()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return p=f.sent,o=p.Tag,f.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return a=f.sent,t=a.sleep,f.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return s=f.sent,n=s.default,f.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return r=f.sent,l=r.default,f.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return d=f.sent,h=d.default,f.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return I=f.sent,y=I.default,R=function(){var x=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return C.createElement(y,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,actionItems:x,rowSelection:{type:"checkbox"}},request:(function(){var j=L()(i()().mark(function B($){var T,K;return i()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,t();case 2:return T=h($.pageSize),K=T.reduce(function(U,V){return U+V.goods_price},0).toFixed(2),H.abrupt("return",{data:T,total:100,summaryData:{supplier_code:C.createElement(o,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},B)}));function D(B){return j.apply(this,arguments)}return D})()})},f.abrupt("return",{default:R});case 26:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/030-table-summay",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns.ts":S,antd:W,"@examples/utils":c,"@schema-render/search-table-react":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S},renderOpts:{compile:(function(){var b=L()(i()().mark(function o(){var a,t=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-search-table-react-030-table-summay-demo-4":{component:C.memo(C.lazy(L()(i()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R,g;return i()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return p=O.sent,o=p.Tag,O.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return a=O.sent,t=a.sleep,O.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return s=O.sent,n=s.default,O.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return r=O.sent,l=r.default,O.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return d=O.sent,h=d.default,O.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return I=O.sent,y=I.default,R={width:116,height:"100%",background:"white",position:"absolute",left:-48,top:0,display:"flex",alignItems:"center",justifyContent:"center"},g=function(){var j=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},D=C.createElement("div",{style:R},"\u5408\u8BA1");return C.createElement(y,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,bordered:!0,summaryText:D,actionItems:j,rowSelection:{type:"checkbox"}},request:(function(){var B=L()(i()().mark(function T(K){var F,H;return i()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,t();case 2:return F=h(K.pageSize),H=F.reduce(function(z,J){return z+J.goods_price},0).toFixed(2),V.abrupt("return",{data:F,total:100,summaryData:{supplier_code:C.createElement(o,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:H}});case 5:case"end":return V.stop()}},T)}));function $(T){return B.apply(this,arguments)}return $})()})},O.abrupt("return",{default:g});case 27:case"end":return O.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A}},entry:"index.jsx"},routeId:"examples/search-table-react/030-table-summay",context:{"./helpers/createDataSource.ts":N,"./helpers/columns.ts":S,"./helpers/schema.ts":E,antd:W,"@examples/utils":c,"@schema-render/search-table-react":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E},renderOpts:{compile:(function(){var b=L()(i()().mark(function o(){var a,t=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}},"examples-search-table-react-030-table-summay-demo-5":{component:C.memo(C.lazy(L()(i()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return p=f.sent,o=p.Tag,f.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return a=f.sent,t=a.sleep,f.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return s=f.sent,n=s.default,f.next=14,Promise.resolve().then(e.bind(e,16844));case 14:return r=f.sent,l=r.default,f.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return d=f.sent,h=d.default,f.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return I=f.sent,y=I.default,R=function(){var x=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return C.createElement(y,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,bordered:!0,actionItems:x},request:(function(){var j=L()(i()().mark(function B($){var T,K;return i()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,t();case 2:return T=h($.pageSize),K=T.reduce(function(U,V){return U+V.goods_price},0).toFixed(2),H.abrupt("return",{data:T,total:100,summaryData:{supplier_code:C.createElement(o,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},B)}));function D(B){return j.apply(this,arguments)}return D})()})},f.abrupt("return",{default:R});case 26:case"end":return f.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns-tree.ts":{type:"FILE",value:e(13111).A}},entry:"index.jsx"},routeId:"examples/search-table-react/030-table-summay",context:{"./helpers/createDataSource.ts":N,"./helpers/schema.ts":E,"./helpers/columns-tree.ts":A,antd:W,"@examples/utils":c,"@schema-render/search-table-react":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":A},renderOpts:{compile:(function(){var b=L()(i()().mark(function o(){var a,t=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),94970:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return p}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(12431),c=e(21215),u=e(97102),N=e(27395),E=e(13331),S=e(92689),A=e(44099),M=e(16844),b=e(20532),p={"examples-search-table-react-040-table-sort-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return a=j.sent,t=a.ConfigProvider,j.next=6,Promise.resolve().then(e.bind(e,21215));case 6:return s=j.sent,n=s.default,j.next=10,Promise.resolve().then(e.bind(e,97102));case 10:return r=j.sent,l=r.sleep,j.next=14,Promise.resolve().then(e.bind(e,92689));case 14:return d=j.sent,h=d.default,j.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return I=j.sent,y=I.default,j.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return R=j.sent,g=R.default,f=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sortType:"string"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string",sortDataExtractor:function(B){return B.bill_type}},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sortType:"number"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}],O=function(){return C.createElement(t,{locale:n},C.createElement(g,{search:{schema:h},table:{columns:f},request:(function(){var B=L()(i()().mark(function T(K){var F;return i()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,l();case 2:return F=y(K.pageSize),U.abrupt("return",{data:F,total:100});case 4:case"end":return U.stop()}},T)}));function $(T){return B.apply(this,arguments)}return $})()}))},j.abrupt("return",{default:O});case 27:case"end":return j.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A}},entry:"index.tsx"},routeId:"examples/search-table-react/040-table-sort",context:{"./helpers/createDataSource.ts":E,"./helpers/schema.ts":S,antd:W,"antd/locale/zh_CN":c,"@examples/utils":u,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":S},renderOpts:{compile:(function(){var o=L()(i()().mark(function t(){var s,n=arguments;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}},"examples-search-table-react-040-table-sort-demo-1":{component:C.memo(C.lazy(L()(i()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O,x;return i()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return a=D.sent,t=a.ConfigProvider,D.next=6,Promise.resolve().then(e.bind(e,21215));case 6:return s=D.sent,n=s.default,D.next=10,Promise.resolve().then(e.bind(e,97102));case 10:return r=D.sent,l=r.sleep,D.next=14,Promise.resolve().then(e.bind(e,92689));case 14:return d=D.sent,h=d.default,D.next=18,Promise.resolve().then(e.bind(e,44099));case 18:return I=D.sent,y=I.default,D.next=22,Promise.resolve().then(e.bind(e,13331));case 22:return R=D.sent,g=R.default,D.next=26,Promise.resolve().then(e.bind(e,27395));case 26:return f=D.sent,O=f.default,x=function(){return C.createElement(t,{locale:n},C.createElement(O,{search:{schema:h},table:{columns:y,sortMode:"local-all"},request:(function(){var $=L()(i()().mark(function K(F){var H;return i()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,l();case 2:return H=g(F.pageSize),V.abrupt("return",{data:H,total:100});case 4:case"end":return V.stop()}},K)}));function T(K){return $.apply(this,arguments)}return T})()}))},D.abrupt("return",{default:x});case 30:case"end":return D.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/040-table-sort",context:{"./helpers/createDataSource.ts":E,"./helpers/schema.ts":S,"./helpers/columns.ts":A,antd:W,"antd/locale/zh_CN":c,"@examples/utils":u,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:(function(){var o=L()(i()().mark(function t(){var s,n=arguments;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}},"examples-search-table-react-040-table-sort-demo-2":{component:C.memo(C.lazy(L()(i()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O,x;return i()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return a=D.sent,t=a.ConfigProvider,D.next=6,Promise.resolve().then(e.bind(e,21215));case 6:return s=D.sent,n=s.default,D.next=10,Promise.resolve().then(e.bind(e,97102));case 10:return r=D.sent,l=r.sleep,D.next=14,Promise.resolve().then(e.bind(e,92689));case 14:return d=D.sent,h=d.default,D.next=18,Promise.resolve().then(e.bind(e,16844));case 18:return I=D.sent,y=I.default,D.next=22,Promise.resolve().then(e.bind(e,13331));case 22:return R=D.sent,g=R.default,D.next=26,Promise.resolve().then(e.bind(e,27395));case 26:return f=D.sent,O=f.default,x=function(){return C.createElement(t,{locale:n},C.createElement(O,{search:{schema:h},table:{columns:y,bordered:!0,sortMode:"local-all"},request:(function(){var $=L()(i()().mark(function K(F){var H;return i()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,l();case 2:return H=g(F.pageSize),V.abrupt("return",{data:H,total:100});case 4:case"end":return V.stop()}},K)}));function T(K){return $.apply(this,arguments)}return T})()}))},D.abrupt("return",{default:x});case 30:case"end":return D.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns-tree.ts":{type:"FILE",value:e(13111).A}},entry:"index.tsx"},routeId:"examples/search-table-react/040-table-sort",context:{"./helpers/createDataSource.ts":E,"./helpers/schema.ts":S,"./helpers/columns-tree.ts":M,antd:W,"antd/locale/zh_CN":c,"@examples/utils":u,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":M},renderOpts:{compile:(function(){var o=L()(i()().mark(function t(){var s,n=arguments;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}},"examples-search-table-react-040-table-sort-demo-3":{component:C.memo(C.lazy(L()(i()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B;return i()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return a=T.sent,t=a.ConfigProvider,T.next=6,Promise.resolve().then(e.bind(e,21215));case 6:return s=T.sent,n=s.default,T.next=10,Promise.resolve().then(e.bind(e,97102));case 10:return r=T.sent,l=r.sleep,T.next=14,Promise.resolve().then(e.bind(e,92689));case 14:return d=T.sent,h=d.default,T.next=18,Promise.resolve().then(e.bind(e,44099));case 18:return I=T.sent,y=I.default,T.next=22,Promise.resolve().then(e.bind(e,13331));case 22:return R=T.sent,g=R.default,T.next=26,Promise.resolve().then(e.bind(e,27395));case 26:return f=T.sent,O=f.default,T.next=30,Promise.resolve().then(e.bind(e,20532));case 30:return x=T.sent,j=x.pinyin,D=/[\u4e00-\u9fa5]/,B=function(){return C.createElement(t,{locale:n},C.createElement(O,{search:{schema:h},table:{columns:y,sortMode:"local-all",sortStringValueTransform:function(H){return D.test(H)?j(H,{toneType:"none"}):H}},request:(function(){var F=L()(i()().mark(function U(V){var z;return i()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,l();case 2:return z=g(V.pageSize),Q.abrupt("return",{data:z,total:100});case 4:case"end":return Q.stop()}},U)}));function H(U){return F.apply(this,arguments)}return H})()}))},T.abrupt("return",{default:B});case 35:case"end":return T.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"pinyin-pro":{type:"NPM",value:"3.29.5"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/040-table-sort",context:{"./helpers/createDataSource.ts":E,"./helpers/schema.ts":S,"./helpers/columns.ts":A,antd:W,"antd/locale/zh_CN":c,"@examples/utils":u,"@schema-render/search-table-react":N,"pinyin-pro":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:(function(){var o=L()(i()().mark(function t(){var s,n=arguments;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}},"examples-search-table-react-040-table-sort-demo-4":{component:C.memo(C.lazy(L()(i()().mark(function o(){var a,t,s,n,r,l,d,h,I,y,R,g,f,O;return i()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return a=j.sent,t=a.ConfigProvider,j.next=6,Promise.resolve().then(e.bind(e,21215));case 6:return s=j.sent,n=s.default,j.next=10,Promise.resolve().then(e.bind(e,97102));case 10:return r=j.sent,l=r.sleep,j.next=14,Promise.resolve().then(e.bind(e,92689));case 14:return d=j.sent,h=d.default,j.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return I=j.sent,y=I.default,j.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return R=j.sent,g=R.default,f=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",sorter:!0},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sorter:!0},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sorter:!0},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",sorter:!0},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120,sorter:!0}],O=function(){return C.createElement(t,{locale:n},C.createElement(g,{search:{schema:h},table:{columns:f,sortMode:"service"},request:(function(){var B=L()(i()().mark(function T(K,F){var H,U,V;return i()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return H=F.sorter,U=H,J.next=4,l();case 4:return V=y(K.pageSize,{sort_field:U==null?void 0:U.field,sort_order:U==null?void 0:U.order}),J.abrupt("return",{data:V,total:100});case 6:case"end":return J.stop()}},T)}));function $(T,K){return B.apply(this,arguments)}return $})()}))},j.abrupt("return",{default:O});case 27:case"end":return j.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A}},entry:"index.tsx"},routeId:"examples/search-table-react/040-table-sort",context:{"./helpers/createDataSource.ts":E,"./helpers/schema.ts":S,antd:W,"antd/locale/zh_CN":c,"@examples/utils":u,"@schema-render/search-table-react":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":S},renderOpts:{compile:(function(){var o=L()(i()().mark(function t(){var s,n=arguments;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1478).then(e.bind(e,71478));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},t)}));function a(){return o.apply(this,arguments)}return a})()}}}}),70194:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return a}});var i=e(55420),v=e.n(i),L=e(11604),C=e.n(L),W=e(98312),c=e.n(W),u=e(96540),N=e(97102),E=e(27395),S=e(13331),A=e(92689),M=e(44099),b=e(25166),p=e(76756),o=e(12431),a={"examples-search-table-react-050-tabs-demo-0":{component:u.memo(u.lazy(c()(v()().mark(function t(){var s,n,r,l,d,h,I,y,R,g,f,O,x,j;return v()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return s=B.sent,n=s.sleep,B.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return r=B.sent,l=r.default,B.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return d=B.sent,h=d.default,B.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return I=B.sent,y=I.default,B.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return R=B.sent,g=R.default,B.next=22,Promise.resolve().then(e.t.bind(e,96540,19));case 22:return f=B.sent,O=f.useState,x=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],j=function(){var T=O("1"),K=C()(T,2),F=K[0],H=K[1];return u.createElement(g,{search:{schema:l,labelWidth:80},title:{tabs:{activeKey:F,items:x,onChange:H}},table:{columns:h},request:(function(){var U=c()(v()().mark(function z(J){var Q;return v()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("activeKey:",F),w.next=3,n();case 3:return Q=y(J.pageSize),w.abrupt("return",{data:Q,total:100});case 5:case"end":return w.stop()}},z)}));function V(z){return U.apply(this,arguments)}return V})()})},B.abrupt("return",{default:j});case 27:case"end":return B.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/050-tabs",context:{"./helpers/createDataSource.ts":S,"./helpers/schema.ts":A,"./helpers/columns.ts":M,"@examples/utils":N,"@schema-render/search-table-react":E,react:P||(P=e.t(u,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:(function(){var t=c()(v()().mark(function n(){var r,l=arguments;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(1478).then(e.bind(e,71478));case 2:return h.abrupt("return",(r=h.sent).default.apply(r,l));case 3:case"end":return h.stop()}},n)}));function s(){return t.apply(this,arguments)}return s})()}},"examples-search-table-react-050-tabs-demo-1":{component:u.memo(u.lazy(c()(v()().mark(function t(){var s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B,$,T;return v()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return s=F.sent,n=s.useState,F.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return r=F.sent,l=r.sleep,F.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return d=F.sent,h=d.default,F.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return I=F.sent,y=I.default,F.next=18,Promise.resolve().then(e.bind(e,76756));case 18:return R=F.sent,g=R.default,F.next=22,Promise.resolve().then(e.bind(e,13331));case 22:return f=F.sent,O=f.default,F.next=26,Promise.resolve().then(e.bind(e,25166));case 26:return x=F.sent,j=x.default,F.next=30,Promise.resolve().then(e.bind(e,27395));case 30:return D=F.sent,B=D.default,$=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],T=function(){var U=n("1"),V=C()(U,2),z=V[0],J=V[1];return u.createElement(B,{search:{schema:h},title:{showSetting:!0,tabs:{activeKey:z,items:$,onChange:J}},table:{columns:z==="1"?y:g,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:(function(){var Q=c()(v()().mark(function w(oe){var ie,fe;return v()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,l();case 2:if(ie=z==="1"?O:j,fe=ie(oe.pageSize),!(Math.random()>.7)){Pe.next=6;break}throw new Error("\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF");case 6:return Pe.abrupt("return",{data:fe,total:100});case 7:case"end":return Pe.stop()}},w)}));function ee(w){return Q.apply(this,arguments)}return ee})()})},F.abrupt("return",{default:T});case 35:case"end":return F.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/columns.ts":{type:"FILE",value:e(51118).A},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(44869).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns-value-type.ts":{type:"FILE",value:e(96743).A},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A}},entry:"index.tsx"},routeId:"examples/search-table-react/050-tabs",context:{"./helpers/columns.ts":M,"./helpers/createDataSource-vt.ts":b,"./helpers/schema.ts":A,"./helpers/columns-value-type.ts":p,"./helpers/createDataSource.ts":S,react:P||(P=e.t(u,2)),"@examples/utils":N,"@schema-render/search-table-react":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":S},renderOpts:{compile:(function(){var t=c()(v()().mark(function n(){var r,l=arguments;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(1478).then(e.bind(e,71478));case 2:return h.abrupt("return",(r=h.sent).default.apply(r,l));case 3:case"end":return h.stop()}},n)}));function s(){return t.apply(this,arguments)}return s})()}},"examples-search-table-react-050-tabs-demo-2":{component:u.memo(u.lazy(c()(v()().mark(function t(){var s,n,r,l,d,h,I,y,R,g,f,O,x,j;return v()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return s=B.sent,n=s.sleep,B.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return r=B.sent,l=r.default,B.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return d=B.sent,h=d.default,B.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return I=B.sent,y=I.default,B.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return R=B.sent,g=R.default,B.next=22,Promise.resolve().then(e.t.bind(e,96540,19));case 22:return f=B.sent,O=f.useState,x=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],j=function(){var T=O("1"),K=C()(T,2),F=K[0],H=K[1];return u.createElement(g,{search:{schema:l,labelWidth:80},title:{showSetting:!0,showRefresh:!0,tabs:{activeKey:F,items:x,onChange:H}},table:{columns:h},request:(function(){var U=c()(v()().mark(function z(J){var Q;return v()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("activeKey:",F),w.next=3,n();case 3:return Q=y(J.pageSize),w.abrupt("return",{data:Q,total:100});case 5:case"end":return w.stop()}},z)}));function V(z){return U.apply(this,arguments)}return V})()})},B.abrupt("return",{default:j});case 27:case"end":return B.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/050-tabs",context:{"./helpers/createDataSource.ts":S,"./helpers/schema.ts":A,"./helpers/columns.ts":M,"@examples/utils":N,"@schema-render/search-table-react":E,react:P||(P=e.t(u,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:(function(){var t=c()(v()().mark(function n(){var r,l=arguments;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(1478).then(e.bind(e,71478));case 2:return h.abrupt("return",(r=h.sent).default.apply(r,l));case 3:case"end":return h.stop()}},n)}));function s(){return t.apply(this,arguments)}return s})()}},"examples-search-table-react-050-tabs-demo-3":{component:u.memo(u.lazy(c()(v()().mark(function t(){var s,n,r,l,d,h,I,y,R,g,f;return v()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return s=x.sent,n=s.sleep,x.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return r=x.sent,l=r.default,x.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return d=x.sent,h=d.default,x.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return I=x.sent,y=I.default,x.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return R=x.sent,g=R.default,f=function(){return u.createElement(g,{search:{schema:l,labelWidth:80},title:{showSetting:!0,showRefresh:!0},table:{columns:h},request:(function(){var D=c()(v()().mark(function $(T){var K;return v()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,n();case 2:return K=y(T.pageSize),H.abrupt("return",{data:K,total:100});case 4:case"end":return H.stop()}},$)}));function B($){return D.apply(this,arguments)}return B})()})},x.abrupt("return",{default:f});case 22:case"end":return x.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/050-tabs",context:{"./helpers/createDataSource.ts":S,"./helpers/schema.ts":A,"./helpers/columns.ts":M,"@examples/utils":N,"@schema-render/search-table-react":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:(function(){var t=c()(v()().mark(function n(){var r,l=arguments;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(1478).then(e.bind(e,71478));case 2:return h.abrupt("return",(r=h.sent).default.apply(r,l));case 3:case"end":return h.stop()}},n)}));function s(){return t.apply(this,arguments)}return s})()}},"examples-search-table-react-050-tabs-demo-4":{component:u.memo(u.lazy(c()(v()().mark(function t(){var s,n,r,l,d,h,I,y,R,g,f,O,x;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return s=D.sent,n=s.sleep,D.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return r=D.sent,l=r.default,D.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return d=D.sent,h=d.default,D.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return I=D.sent,y=I.default,D.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return R=D.sent,g=R.default,D.next=22,Promise.resolve().then(e.bind(e,12431));case 22:return f=D.sent,O=f.Button,x=function(){return u.createElement(g,{search:{schema:l,labelWidth:80},title:{leftExtraContent:function(T){var K=T.loading;return u.createElement(u.Fragment,null,u.createElement(O,{type:"primary",disabled:K},"\u5BFC\u5165"),u.createElement(O,{disabled:K},"\u5BFC\u51FA"))}},table:{columns:h},request:(function(){var $=c()(v()().mark(function K(F){var H;return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,n();case 2:return H=y(F.pageSize),V.abrupt("return",{data:H,total:100});case 4:case"end":return V.stop()}},K)}));function T(K){return $.apply(this,arguments)}return T})()})},D.abrupt("return",{default:x});case 26:case"end":return D.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/050-tabs",context:{"./helpers/createDataSource.ts":S,"./helpers/schema.ts":A,"./helpers/columns.ts":M,"@examples/utils":N,"@schema-render/search-table-react":E,antd:o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:(function(){var t=c()(v()().mark(function n(){var r,l=arguments;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(1478).then(e.bind(e,71478));case 2:return h.abrupt("return",(r=h.sent).default.apply(r,l));case 3:case"end":return h.stop()}},n)}));function s(){return t.apply(this,arguments)}return s})()}},"examples-search-table-react-050-tabs-demo-5":{component:u.memo(u.lazy(c()(v()().mark(function t(){var s,n,r,l,d,h,I,y,R,g,f,O,x;return v()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return s=D.sent,n=s.sleep,D.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return r=D.sent,l=r.default,D.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return d=D.sent,h=d.default,D.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return I=D.sent,y=I.default,D.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return R=D.sent,g=R.default,D.next=22,Promise.resolve().then(e.bind(e,12431));case 22:return f=D.sent,O=f.Button,x=function(){return u.createElement(g,{search:{schema:l,labelWidth:80},title:{rightExtraContent:function(T){var K=T.loading;return u.createElement(O,{disabled:K},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:h},request:(function(){var $=c()(v()().mark(function K(F){var H;return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,n();case 2:return H=y(F.pageSize),V.abrupt("return",{data:H,total:100});case 4:case"end":return V.stop()}},K)}));function T(K){return $.apply(this,arguments)}return T})()})},D.abrupt("return",{default:x});case 26:case"end":return D.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/050-tabs",context:{"./helpers/createDataSource.ts":S,"./helpers/schema.ts":A,"./helpers/columns.ts":M,"@examples/utils":N,"@schema-render/search-table-react":E,antd:o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:(function(){var t=c()(v()().mark(function n(){var r,l=arguments;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(1478).then(e.bind(e,71478));case 2:return h.abrupt("return",(r=h.sent).default.apply(r,l));case 3:case"end":return h.stop()}},n)}));function s(){return t.apply(this,arguments)}return s})()}},"examples-search-table-react-050-tabs-demo-6":{component:u.memo(u.lazy(c()(v()().mark(function t(){var s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return s=T.sent,n=s.sleep,T.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return r=T.sent,l=r.default,T.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return d=T.sent,h=d.default,T.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return I=T.sent,y=I.default,T.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return R=T.sent,g=R.default,T.next=22,Promise.resolve().then(e.bind(e,12431));case 22:return f=T.sent,O=f.Button,T.next=26,Promise.resolve().then(e.t.bind(e,96540,19));case 26:return x=T.sent,j=x.useState,D=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],B=function(){var F=j("1"),H=C()(F,2),U=H[0],V=H[1];return u.createElement(g,{search:{schema:l,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:U,items:D,onChange:V},leftExtraContent:function(J){var Q=J.loading;return u.createElement(O,{disabled:Q},"\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(J){var Q=J.loading;return u.createElement(O,{disabled:Q},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:h},request:(function(){var z=c()(v()().mark(function Q(ee){var w;return v()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,n();case 2:return w=y(ee.pageSize),ie.abrupt("return",{data:w,total:100});case 4:case"end":return ie.stop()}},Q)}));function J(Q){return z.apply(this,arguments)}return J})()})},T.abrupt("return",{default:B});case 31:case"end":return T.stop()}},t)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/050-tabs",context:{"./helpers/createDataSource.ts":S,"./helpers/schema.ts":A,"./helpers/columns.ts":M,"@examples/utils":N,"@schema-render/search-table-react":E,antd:o,react:P||(P=e.t(u,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:(function(){var t=c()(v()().mark(function n(){var r,l=arguments;return v()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(1478).then(e.bind(e,71478));case 2:return h.abrupt("return",(r=h.sent).default.apply(r,l));case 3:case"end":return h.stop()}},n)}));function s(){return t.apply(this,arguments)}return s})()}}}}),70727:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return o}});var P=e(1974),i=e.n(P),v=e(55420),L=e.n(v),C=e(98312),W=e.n(C),c=e(96540),u=e(12431),N=e(21215),E=e(97102),S=e(27395),A=e(25166),M=e(92689),b=e(76756),p=e(55173),o={"examples-search-table-react-060-value-type-demo-0":{component:c.memo(c.lazy(W()(L()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f,O,x,j;return L()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,12431));case 2:return t=B.sent,s=t.ConfigProvider,B.next=6,Promise.resolve().then(e.bind(e,21215));case 6:return n=B.sent,r=n.default,B.next=10,Promise.resolve().then(e.bind(e,97102));case 10:return l=B.sent,d=l.sleep,B.next=14,Promise.resolve().then(e.bind(e,92689));case 14:return h=B.sent,I=h.default,B.next=18,Promise.resolve().then(e.bind(e,76756));case 18:return y=B.sent,R=y.default,B.next=22,Promise.resolve().then(e.bind(e,25166));case 22:return g=B.sent,f=g.default,B.next=26,Promise.resolve().then(e.bind(e,27395));case 26:return O=B.sent,x=O.default,j=function(){return c.createElement(s,{locale:r},c.createElement(x,{search:{schema:I},table:{columns:R,showRowNumber:!0,sortMode:"local-all"},request:(function(){var T=W()(L()().mark(function F(H){var U;return L()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,d();case 2:return U=f(H.pageSize),z.abrupt("return",{data:U,total:100});case 4:case"end":return z.stop()}},F)}));function K(F){return T.apply(this,arguments)}return K})()}))},B.abrupt("return",{default:j});case 30:case"end":return B.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.7.0"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(44869).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns-value-type.ts":{type:"FILE",value:e(96743).A}},entry:"index.tsx"},routeId:"examples/search-table-react/060-value-type",context:{"./helpers/createDataSource-vt.ts":A,"./helpers/schema.ts":M,"./helpers/columns-value-type.ts":b,antd:u,"antd/locale/zh_CN":N,"@examples/utils":E,"@schema-render/search-table-react":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":b},renderOpts:{compile:(function(){var a=W()(L()().mark(function s(){var n,r=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}},"examples-search-table-react-060-value-type-demo-1":{component:c.memo(c.lazy(W()(L()().mark(function a(){var t,s,n,r,l,d,h,I,y,R;return L()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return t=f.sent,s=t.sleep,f.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return n=f.sent,r=n.default,f.next=10,Promise.resolve().then(e.bind(e,25166));case 10:return l=f.sent,d=l.default,f.next=14,Promise.resolve().then(e.bind(e,27395));case 14:return h=f.sent,I=h.default,y=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u81EA\u5B9A\u4E49 Rate \u5B57\u7B26",dataIndex:"rate",valueType:function(x,j){return{type:"rate",character:j%2===0?"A":void 0}}}],R=function(){return c.createElement(I,{search:{schema:r},table:{columns:y,sortMode:"local-all"},request:(function(){var x=W()(L()().mark(function D(B){var $;return L()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return $=d(B.pageSize),K.abrupt("return",{data:$,total:100});case 4:case"end":return K.stop()}},D)}));function j(D){return x.apply(this,arguments)}return j})()})},f.abrupt("return",{default:R});case 19:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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
    title: '\u81EA\u5B9A\u4E49 Rate \u5B57\u7B26',
    dataIndex: 'rate',
    // \u51FD\u6570\u683C\u5F0F\uFF0C\u63A5\u6536\u5F53\u524D\u884C\u6570\u636E record, \u5F53\u524D\u884C\u7D22\u5F15 index
    valueType: (record: Record<string, any>, index: number) => {
      return {
        // \u5FC5\u987B\u8FD4\u56DE type \u5B57\u6BB5\uFF0C\u5BF9\u5E94\u6570\u636E\u663E\u793A\u7C7B\u578B
        type: 'rate',
        // \u5176\u4ED6\u53C2\u6570\uFF0C\u5C06\u900F\u4F20\u7ED9\u7C7B\u578B\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u5BF9\u5E94\u7EC4\u4EF6\u63A5\u6536\u7684 options \u5B57\u6BB5
        character: index % 2 === 0 ? 'A' : undefined,
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(44869).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A}},entry:"index.tsx"},routeId:"examples/search-table-react/060-value-type",context:{"./helpers/createDataSource-vt.ts":A,"./helpers/schema.ts":M,"@examples/utils":E,"@schema-render/search-table-react":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M},renderOpts:{compile:(function(){var a=W()(L()().mark(function s(){var n,r=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}},"examples-search-table-react-060-value-type-demo-2":{component:c.memo(c.lazy(W()(L()().mark(function a(){var t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B,$,T;return L()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,Promise.resolve().then(e.bind(e,55173));case 2:return t=F.sent,s=t.default,F.next=6,Promise.resolve().then(e.bind(e,12431));case 6:return n=F.sent,r=n.ConfigProvider,l=n.Tag,F.next=11,Promise.resolve().then(e.bind(e,21215));case 11:return d=F.sent,h=d.default,F.next=15,Promise.resolve().then(e.bind(e,97102));case 15:return I=F.sent,y=I.sleep,F.next=19,Promise.resolve().then(e.bind(e,92689));case 19:return R=F.sent,g=R.default,F.next=23,Promise.resolve().then(e.bind(e,25166));case 23:return f=F.sent,O=f.default,F.next=27,Promise.resolve().then(e.bind(e,27395));case 27:return x=F.sent,j=x.default,D=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u4EE3\u7801\u5757",dataIndex:"code",valueType:"code"},{title:"\u90E8\u7F72\u72B6\u6001",dataIndex:"deploy_status",valueType:"deploy-status"},{title:"\u90E8\u7F72\u72B6\u6001(Tag)",dataIndex:"deploy_status_tag",valueType:"deploy-status-tag"}],B={0:{text:"\u5F02\u5E38",style:{background:"red"},color:"red"},1:{text:"\u8FDB\u884C\u4E2D",style:{background:"blue"},color:"blue"},2:{text:"\u6210\u529F",style:{background:"green"},color:"green"}},$={code:function(U){var V=U.value;return c.createElement(s,{value:V,language:"js"})},"deploy-status":function(U){var V=U.value,z=B[V];return c.createElement("div",null,c.createElement("span",{style:i()({display:"inline-block",width:8,height:8,borderRadius:"50%",marginRight:6},z.style)}),z.text)},"deploy-status-tag":function(U){var V=U.record,z=V.deploy_status,J=B[z];return c.createElement(l,{color:J.color},J.text)}},T=function(){return c.createElement(r,{locale:h},c.createElement(j,{search:{schema:g},table:{columns:D,showRowNumber:!0,sortMode:"local-all",registerValueType:$},request:(function(){var U=W()(L()().mark(function z(J){var Q;return L()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,y();case 2:return Q=O(J.pageSize),w.abrupt("return",{data:Q,total:100});case 4:case"end":return w.stop()}},z)}));function V(z){return U.apply(this,arguments)}return V})()}))},F.abrupt("return",{default:T});case 34:case"end":return F.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},antd:{type:"NPM",value:"6.7.0"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(44869).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A}},entry:"index.tsx"},routeId:"examples/search-table-react/060-value-type",context:{"./helpers/createDataSource-vt.ts":A,"./helpers/schema.ts":M,"@examples/components/SyntaxHighlighter":p,antd:u,"antd/locale/zh_CN":N,"@examples/utils":E,"@schema-render/search-table-react":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M},renderOpts:{compile:(function(){var a=W()(L()().mark(function s(){var n,r=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1478).then(e.bind(e,71478));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,r));case 3:case"end":return d.stop()}},s)}));function t(){return a.apply(this,arguments)}return t})()}}}}),99238:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return s}});var i=e(11604),v=e.n(i),L=e(1974),C=e.n(L),W=e(55420),c=e.n(W),u=e(98312),N=e.n(u),E=e(96540),S=e(97102),A=e(27395),M=e(13331),b=e(92689),p=e(44099),o=e(25166),a=e(76756),t=e(12431),s={"examples-search-table-react-100-columns-setting-demo-0":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x;return c()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return r=D.sent,l=r.sleep,D.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return d=D.sent,h=d.default,D.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return I=D.sent,y=I.default,D.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return R=D.sent,g=R.default,D.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return f=D.sent,O=f.default,x=function(){return E.createElement(O,{search:{schema:h},title:{showSetting:!0},table:{columns:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:(function(){var $=N()(c()().mark(function K(F){var H;return c()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,l();case 2:return H=g(F.pageSize),V.abrupt("return",{data:H,total:100});case 4:case"end":return V.stop()}},K)}));function T(K){return $.apply(this,arguments)}return T})()})},D.abrupt("return",{default:x});case 22:case"end":return D.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/100-columns-setting",context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":b,"./helpers/columns.ts":p,"@examples/utils":S,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}},"examples-search-table-react-100-columns-setting-demo-1":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x,j;return c()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return r=B.sent,l=r.sleep,B.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return d=B.sent,h=d.default,B.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return I=B.sent,y=I.default,B.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return R=B.sent,g=R.default,B.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return f=B.sent,O=f.default,x=y.map(function($,T){var K=C()({},$);return T===0?K.fixed="left":T===y.length-1&&(K.fixed="right"),K}),j=function(){return E.createElement(O,{search:{schema:h},title:{showSetting:!0},table:{columns:x,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:(function(){var T=N()(c()().mark(function F(H){var U;return c()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,l();case 2:return U=g(H.pageSize),z.abrupt("return",{data:U,total:100});case 4:case"end":return z.stop()}},F)}));function K(F){return T.apply(this,arguments)}return K})()})},B.abrupt("return",{default:j});case 23:case"end":return B.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/100-columns-setting",context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":b,"./helpers/columns.ts":p,"@examples/utils":S,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}},"examples-search-table-react-100-columns-setting-demo-2":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x,j,D,B,$,T,K,F;return c()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return r=U.sent,l=r.useState,U.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return d=U.sent,h=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return I=U.sent,y=I.default,U.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return R=U.sent,g=R.default,U.next=18,Promise.resolve().then(e.bind(e,76756));case 18:return f=U.sent,O=f.default,U.next=22,Promise.resolve().then(e.bind(e,13331));case 22:return x=U.sent,j=x.default,U.next=26,Promise.resolve().then(e.bind(e,25166));case 26:return D=U.sent,B=D.default,U.next=30,Promise.resolve().then(e.bind(e,27395));case 30:return $=U.sent,T=$.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],F=function(){var z=l("1"),J=v()(z,2),Q=J[0],ee=J[1];return E.createElement(T,{search:{schema:y},title:{showSetting:!0,tabs:{activeKey:Q,items:K,onChange:ee}},table:{columns:Q==="1"?g:O,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:(function(){var w=N()(c()().mark(function ie(fe){var se,Pe;return c()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,h();case 2:return se=Q==="1"?j:B,Pe=se(fe.pageSize),ue.abrupt("return",{data:Pe,total:100});case 5:case"end":return ue.stop()}},ie)}));function oe(ie){return w.apply(this,arguments)}return oe})()})},U.abrupt("return",{default:F});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(44869).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A},"./helpers/columns-value-type.ts":{type:"FILE",value:e(96743).A},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A}},entry:"index.tsx"},routeId:"examples/search-table-react/100-columns-setting",context:{"./helpers/createDataSource-vt.ts":o,"./helpers/schema.ts":b,"./helpers/columns.ts":p,"./helpers/columns-value-type.ts":a,"./helpers/createDataSource.ts":M,react:P||(P=e.t(E,2)),"@examples/utils":S,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}},"examples-search-table-react-100-columns-setting-demo-3":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x,j,D,B,$;return c()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return r=K.sent,l=r.useRef,K.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return d=K.sent,h=d.sleep,K.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return I=K.sent,y=I.default,K.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return R=K.sent,g=R.default,K.next=18,Promise.resolve().then(e.bind(e,13331));case 18:return f=K.sent,O=f.default,K.next=22,Promise.resolve().then(e.bind(e,27395));case 22:return x=K.sent,j=x.default,K.next=26,Promise.resolve().then(e.bind(e,12431));case 26:return D=K.sent,B=D.Button,$=function(){var H=l(null),U=function(){var z;(z=H.current)===null||z===void 0||z.openSettingModal()};return E.createElement(j,{ref:H,search:{schema:y},titleTop:function(){return E.createElement(B,{type:"primary",onClick:U},"\u6253\u5F00\u5217\u8BBE\u7F6E")},table:{columns:g,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:(function(){var V=N()(c()().mark(function J(Q){var ee;return c()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,h();case 2:return ee=O(Q.pageSize),oe.abrupt("return",{data:ee,total:100});case 4:case"end":return oe.stop()}},J)}));function z(J){return V.apply(this,arguments)}return z})()})},K.abrupt("return",{default:$});case 30:case"end":return K.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/100-columns-setting",context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":b,"./helpers/columns.ts":p,react:P||(P=e.t(E,2)),"@examples/utils":S,"@schema-render/search-table-react":A,antd:t,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}},"examples-search-table-react-100-columns-setting-demo-4":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x,j;return c()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return r=B.sent,l=r.sleep,B.next=6,Promise.resolve().then(e.bind(e,92689));case 6:return d=B.sent,h=d.default,B.next=10,Promise.resolve().then(e.bind(e,44099));case 10:return I=B.sent,y=I.default,B.next=14,Promise.resolve().then(e.bind(e,13331));case 14:return R=B.sent,g=R.default,B.next=18,Promise.resolve().then(e.bind(e,27395));case 18:return f=B.sent,O=f.default,x="save-setting-unique-id",j=function(){var T=(function(){var F=N()(c()().mark(function H(U){return c()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,l();case 2:localStorage.setItem(x,JSON.stringify(U));case 3:case"end":return z.stop()}},H)}));return function(U){return F.apply(this,arguments)}})(),K=(function(){var F=N()(c()().mark(function H(){var U;return c()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,l();case 2:if(U=localStorage.getItem(x),!U){z.next=5;break}return z.abrupt("return",JSON.parse(U));case 5:case"end":return z.stop()}},H)}));return function(){return F.apply(this,arguments)}})();return E.createElement(O,{search:{schema:h},title:{showSetting:!0},table:{columns:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},onSettingChanged:T,getSetting:K},request:(function(){var F=N()(c()().mark(function U(V){var z;return c()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,l();case 2:return z=g(V.pageSize),Q.abrupt("return",{data:z,total:100});case 4:case"end":return Q.stop()}},U)}));function H(U){return F.apply(this,arguments)}return H})()})},B.abrupt("return",{default:j});case 23:case"end":return B.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/100-columns-setting",context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":b,"./helpers/columns.ts":p,"@examples/utils":S,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}},"examples-search-table-react-100-columns-setting-demo-5":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x,j,D,B,$,T,K,F;return c()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return r=U.sent,l=r.useState,U.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return d=U.sent,h=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return I=U.sent,y=I.default,U.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return R=U.sent,g=R.default,U.next=18,Promise.resolve().then(e.bind(e,76756));case 18:return f=U.sent,O=f.default,U.next=22,Promise.resolve().then(e.bind(e,13331));case 22:return x=U.sent,j=x.default,U.next=26,Promise.resolve().then(e.bind(e,25166));case 26:return D=U.sent,B=D.default,U.next=30,Promise.resolve().then(e.bind(e,27395));case 30:return $=U.sent,T=$.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],F=function(){var z=l("1"),J=v()(z,2),Q=J[0],ee=J[1],w=(function(){var ie=N()(c()().mark(function fe(se,Pe){return c()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,h();case 2:localStorage.setItem(Pe,JSON.stringify(se));case 3:case"end":return ue.stop()}},fe)}));return function(se,Pe){return ie.apply(this,arguments)}})(),oe=(function(){var ie=N()(c()().mark(function fe(se){var Pe;return c()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,h();case 2:if(Pe=localStorage.getItem(se),!Pe){ue.next=5;break}return ue.abrupt("return",JSON.parse(Pe));case 5:case"end":return ue.stop()}},fe)}));return function(se){return ie.apply(this,arguments)}})();return E.createElement(T,{search:{schema:y},title:{showSetting:!0,tabs:{activeKey:Q,items:K,onChange:ee}},table:{columns:Q==="1"?g:O,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-tab-".concat(Q),onSettingChanged:w,getSetting:oe},request:(function(){var ie=N()(c()().mark(function se(Pe){var ge,ue;return c()().wrap(function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:return Ce.next=2,h();case 2:return ge=Q==="1"?j:B,ue=ge(Pe.pageSize),Ce.abrupt("return",{data:ue,total:100});case 5:case"end":return Ce.stop()}},se)}));function fe(se){return ie.apply(this,arguments)}return fe})()})},U.abrupt("return",{default:F});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(44869).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A},"./helpers/columns-value-type.ts":{type:"FILE",value:e(96743).A},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A}},entry:"index.tsx"},routeId:"examples/search-table-react/100-columns-setting",context:{"./helpers/createDataSource-vt.ts":o,"./helpers/schema.ts":b,"./helpers/columns.ts":p,"./helpers/columns-value-type.ts":a,"./helpers/createDataSource.ts":M,react:P||(P=e.t(E,2)),"@examples/utils":S,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}},"examples-search-table-react-100-columns-setting-demo-6":{component:E.memo(E.lazy(N()(c()().mark(function n(){var r,l,d,h,I,y,R,g,f,O,x,j,D,B,$,T,K,F;return c()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return r=U.sent,l=r.useState,U.next=6,Promise.resolve().then(e.bind(e,97102));case 6:return d=U.sent,h=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,92689));case 10:return I=U.sent,y=I.default,U.next=14,Promise.resolve().then(e.bind(e,44099));case 14:return R=U.sent,g=R.default,U.next=18,Promise.resolve().then(e.bind(e,76756));case 18:return f=U.sent,O=f.default,U.next=22,Promise.resolve().then(e.bind(e,13331));case 22:return x=U.sent,j=x.default,U.next=26,Promise.resolve().then(e.bind(e,25166));case 26:return D=U.sent,B=D.default,U.next=30,Promise.resolve().then(e.bind(e,27395));case 30:return $=U.sent,T=$.default,K=[{key:"1",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E00"},{key:"2",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E8C"}],F=function(){var z=l("1"),J=v()(z,2),Q=J[0],ee=J[1],w=l([]),oe=v()(w,2),ie=oe[0],fe=oe[1],se=(function(){var ue=N()(c()().mark(function Ke(Ce,je){return c()().wrap(function(Be){for(;;)switch(Be.prev=Be.next){case 0:return Be.next=2,h();case 2:localStorage.setItem(je,JSON.stringify(Ce));case 3:case"end":return Be.stop()}},Ke)}));return function(Ce,je){return ue.apply(this,arguments)}})(),Pe=(function(){var ue=N()(c()().mark(function Ke(Ce){var je;return c()().wrap(function(Be){for(;;)switch(Be.prev=Be.next){case 0:return Be.next=2,h();case 2:if(je=localStorage.getItem(Ce),!je){Be.next=5;break}return Be.abrupt("return",JSON.parse(je));case 5:case"end":return Be.stop()}},Ke)}));return function(Ce){return ue.apply(this,arguments)}})(),ge=(function(){var ue=N()(c()().mark(function Ke(){return c()().wrap(function(je){for(;;)switch(je.prev=je.next){case 0:return je.next=2,h(500);case 2:return je.abrupt("return",Q==="1"?g:O);case 3:case"end":return je.stop()}},Ke)}));return function(){return ue.apply(this,arguments)}})();return E.createElement(T,{search:{schema:y},title:{showSetting:!0,tabs:{activeKey:Q,items:K,onChange:ee}},table:{columns:ie,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-async-".concat(Q),onSettingChanged:se,getSetting:Pe},request:(function(){var ue=N()(c()().mark(function Ce(je){var He,Be,ze;return c()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,h();case 2:return He=Q==="1"?j:B,Be=He(je.pageSize),_e.next=6,ge();case 6:return ze=_e.sent,fe(ze),_e.abrupt("return",{data:Be,total:100});case 9:case"end":return _e.stop()}},Ce)}));function Ke(Ce){return ue.apply(this,arguments)}return Ke})()})},U.abrupt("return",{default:F});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(44869).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A},"./helpers/columns-value-type.ts":{type:"FILE",value:e(96743).A},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A}},entry:"index.tsx"},routeId:"examples/search-table-react/100-columns-setting",context:{"./helpers/createDataSource-vt.ts":o,"./helpers/schema.ts":b,"./helpers/columns.ts":p,"./helpers/columns-value-type.ts":a,"./helpers/createDataSource.ts":M,react:P||(P=e.t(E,2)),"@examples/utils":S,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":b,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":p,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M},renderOpts:{compile:(function(){var n=N()(c()().mark(function l(){var d,h=arguments;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(1478).then(e.bind(e,71478));case 2:return y.abrupt("return",(d=y.sent).default.apply(d,h));case 3:case"end":return y.stop()}},l)}));function r(){return n.apply(this,arguments)}return r})()}}}}),27384:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return A}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(27395),c=e(97102),u=e(29828),N=e(65043),E=e(7785),S=e(42115),A={"examples-search-table-react-700-locale-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function M(){var b,p,o,a,t,s,n,r,l,d,h,I,y;return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,7785));case 2:return b=g.sent,p=b.default,g.next=6,Promise.resolve().then(e.bind(e,42115));case 6:return o=g.sent,a=o.default,g.next=10,Promise.resolve().then(e.bind(e,65043));case 10:return t=g.sent,s=t.default,g.next=14,Promise.resolve().then(e.bind(e,27395));case 14:return n=g.sent,r=n.default,g.next=18,Promise.resolve().then(e.bind(e,97102));case 18:return l=g.sent,d=l.sleep,g.next=22,Promise.resolve().then(e.bind(e,29828));case 22:return h=g.sent,I=h.default,y=function(){return C.createElement(r,{locale:I,search:{schema:p,labelWidth:"max-content"},title:{showRefresh:!0,showSetting:!0},table:{bordered:!0,columns:a,showRowNumber:!0,actionItems:function(){return[{text:"Edit"},{text:"View"},{text:"Delete",danger:!0}]},actionItemsColumnData:{width:150},summaryText:"Total"},request:(function(){var O=L()(i()().mark(function j(D){var B,$;return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,d();case 2:return B=s(D.pageSize),$=B.reduce(function(F,H){return F+H.goods_price},0).toFixed(2),K.abrupt("return",{data:B,total:100,summaryData:{goods_price:$}});case 5:case"end":return K.stop()}},j)}));function x(j){return O.apply(this,arguments)}return x})()})},g.abrupt("return",{default:y});case 26:case"end":return g.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-search-table-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import schemaEn from './helpers/schema-en'
import columnsEn from './helpers/columns-en'
import createDataSourceEn from './helpers/createDataSource-en'
import SearchTable from '@schema-render/search-table-react'
import { sleep } from '@examples/utils'

// \u5F15\u5165\u82F1\u6587\u8BED\u8A00\u5305
import enUS from '@schema-render/search-table-react/src/locale/en_US'

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

export default Demo`},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},root:{type:"NPM"},"./helpers/createDataSource-en.ts":{type:"FILE",value:e(68498).A},"./helpers/schema-en.ts":{type:"FILE",value:e(57864).A},"./helpers/columns-en.ts":{type:"FILE",value:e(12358).A}},entry:"index.tsx"},routeId:"examples/search-table-react/700-locale",context:{"./helpers/createDataSource-en.ts":N,"./helpers/schema-en.ts":E,"./helpers/columns-en.ts":S,"@schema-render/search-table-react":W,"@examples/utils":c,"@schema-render/search-table-react/src/locale/en_US":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-en.ts":N,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema-en.ts":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-en.ts":S},renderOpts:{compile:(function(){var M=L()(i()().mark(function p(){var o,a=arguments;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1478).then(e.bind(e,71478));case 2:return s.abrupt("return",(o=s.sent).default.apply(o,a));case 3:case"end":return s.stop()}},p)}));function b(){return M.apply(this,arguments)}return b})()}}}}),89459:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),99449:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),88715:(function(_,m,e){var P;e.r(m),e.d(m,{demos:function(){return M}});var i=e(55420),v=e.n(i),L=e(98312),C=e.n(L),W=e(96540),c=e(97102),u=e(27395),N=e(12431),E=e(21215),S=e(13331),A=e(92689),M={"examples-search-table-react-900-table-editable-demo-0":{component:W.memo(W.lazy(C()(v()().mark(function b(){var p,o,a,t,s,n,r,l,d,h,I,y,R,g,f,O,x,j,D,B;return v()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.t.bind(e,96540,19));case 2:return p=T.sent,o=p.useRef,a=p.useMemo,T.next=7,Promise.resolve().then(e.bind(e,97102));case 7:return t=T.sent,s=t.sleep,T.next=11,Promise.resolve().then(e.bind(e,92689));case 11:return n=T.sent,r=n.default,T.next=15,Promise.resolve().then(e.bind(e,13331));case 15:return l=T.sent,d=l.default,T.next=19,Promise.resolve().then(e.bind(e,27395));case 19:return h=T.sent,I=h.default,T.next=23,Promise.resolve().then(e.bind(e,12431));case 23:return y=T.sent,R=y.ConfigProvider,T.next=27,Promise.resolve().then(e.bind(e,21215));case 27:return g=T.sent,f=g.default,T.next=31,Promise.resolve().then(e.bind(e,12431));case 31:return O=T.sent,x=O.InputNumber,j=O.Button,D=O.message,B=function(){var F=o(null),H=a(function(){return[{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",render:function(z,J){return W.createElement(x,{value:z,onChange:function(ee){var w;J.goods_price=ee,(w=F.current)===null||w===void 0||w.rerender()}})}},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]},[]),U=function(){var z;console.log("dataSource:",(z=F.current)===null||z===void 0?void 0:z.getDataSource()),D.success("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6700\u65B0\u6570\u636E")};return W.createElement(R,{locale:f},W.createElement(I,{ref:F,search:{schema:r},table:{columns:H},request:(function(){var V=C()(v()().mark(function J(Q){var ee;return v()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,s();case 2:return ee=d(Q.pageSize),oe.abrupt("return",{data:ee,total:100});case 4:case"end":return oe.stop()}},J)}));function z(J){return V.apply(this,arguments)}return z})()}),W.createElement(j,{type:"primary",onClick:U},"\u63D0\u4EA4"))},T.abrupt("return",{default:B});case 37:case"end":return T.stop()}},b)})))),asset:{type:"BLOCK",id:"examples-search-table-react-900-table-editable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},antd:{type:"NPM",value:"6.7.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/schema.ts":{type:"FILE",value:e(95736).A}},entry:"index.tsx"},routeId:"examples/search-table-react/900-table-editable",context:{"./helpers/createDataSource.ts":S,"./helpers/schema.ts":A,react:P||(P=e.t(W,2)),"@examples/utils":c,"@schema-render/search-table-react":u,antd:N,"antd/locale/zh_CN":E,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":S,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:(function(){var b=C()(v()().mark(function o(){var a,t=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1478).then(e.bind(e,71478));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},o)}));function p(){return b.apply(this,arguments)}return p})()}}}}),86599:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),5485:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return i}});var P=e(96540),i={}}),79399:(function(_,m,e){e.r(m),e.d(m,{demos:function(){return E}});var P=e(55420),i=e.n(P),v=e(98312),L=e.n(v),C=e(96540),W=e(97102),c=e(27395),u=e(13331),N=e(44099),E={"examples-search-table-react-910-no-search-demo-0":{component:C.memo(C.lazy(L()(i()().mark(function S(){var A,M,b,p,o,a,t,s,n;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,97102));case 2:return A=l.sent,M=A.sleep,l.next=6,Promise.resolve().then(e.bind(e,44099));case 6:return b=l.sent,p=b.default,l.next=10,Promise.resolve().then(e.bind(e,13331));case 10:return o=l.sent,a=o.default,l.next=14,Promise.resolve().then(e.bind(e,27395));case 14:return t=l.sent,s=t.default,n=function(){return C.createElement(s,{search:!1,table:{columns:p},request:(function(){var h=L()(i()().mark(function y(){var R;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,M();case 2:return R=a(),f.abrupt("return",{data:R,total:100});case 4:case"end":return f.stop()}},y)}));function I(){return h.apply(this,arguments)}return I})()})},l.abrupt("return",{default:n});case 18:case"end":return l.stop()}},S)})))),asset:{type:"BLOCK",id:"examples-search-table-react-910-no-search-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(11786).A},"./helpers/columns.ts":{type:"FILE",value:e(51118).A}},entry:"index.tsx"},routeId:"examples/search-table-react/910-no-search",context:{"./helpers/createDataSource.ts":u,"./helpers/columns.ts":N,"@examples/utils":W,"@schema-render/search-table-react":c,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":u,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":N},renderOpts:{compile:(function(){var S=L()(i()().mark(function M(){var b,p=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(1478).then(e.bind(e,71478));case 2:return a.abrupt("return",(b=a.sent).default.apply(b,p));case 3:case"end":return a.stop()}},M)}));function A(){return S.apply(this,arguments)}return A})()}}}}),55173:(function(_,m,e){e.r(m),e.d(m,{default:function(){return C}});var P=e(39856),i=e(37867),v=e(74848),L=function(c){var u=c.value,N=c.language,E=N===void 0?"json":N,S=c.style;return(0,v.jsx)("div",{style:S,children:(0,v.jsx)(P.A,{className:"example-hl",language:E,style:i.A,children:E==="json"?JSON.stringify(u,null,2):u})})},C=L}),67684:(function(_,m,e){e.r(m);var P=e(96805),i=e(28073),v=e(46942),L=e.n(v),C=e(51800),W=e(74848),c=function(N){var E=N.body,S=N.schema,A=N.validator,M=N.required,b=N.prefixClassNames;return(0,W.jsxs)("div",{className:L()(b("item-layout-horizontal"),C.horizontal),children:[(0,W.jsxs)("div",{className:L()(b("item-main"),C.main),children:[(0,W.jsxs)("div",{className:L()(b("item-header"),C.header),children:[M&&(0,W.jsx)("span",{className:L()(b("item-mark"),C.mark),children:"*"}),(0,W.jsx)("span",{className:L()(b("item-title"),C.title),children:S.title}),!!S.titleDescription&&(0,W.jsx)(i.A,{placement:"top",trigger:"hover",content:S.titleDescription,children:(0,W.jsx)(P.A,{className:L()(b("item-title-tooltip"),C.titleTooltip)})})]}),(0,W.jsx)("div",{className:L()(b("item-body"),C.body),children:E})]}),(0,W.jsxs)("div",{className:L()(b("item-footer"),C.footer),children:[A.status==="error"&&!!A.message&&(0,W.jsx)("div",{className:L()(b("item-error-msg"),C.errorMsg),children:A.message}),!!S.description&&(0,W.jsx)("div",{className:L()(b("item-desc"),C.desc),children:S.description})]})]})};m.default=c}),51800:(function(_,m,e){e.r(m),e.d(m,{body:function(){return n},desc:function(){return l},errorMsg:function(){return d},footer:function(){return r},header:function(){return o},horizontal:function(){return b},main:function(){return p},mark:function(){return t},title:function(){return a},titleTooltip:function(){return s}});var P=e(84169),i=e.n(P),v=e(19169),L,C,W,c,u,N,E,S,A,M,b=(0,v.X)(L||(L=i()([""]))),p=(0,v.X)(C||(C=i()([`
  display: flex;
  align-items: center;
`]))),o=(0,v.X)(W||(W=i()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),a=(0,v.X)(c||(c=i()([`
  word-break: break-all;
`]))),t=(0,v.X)(u||(u=i()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),s=(0,v.X)(N||(N=i()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),n=(0,v.X)(E||(E=i()([`
  flex-grow: 1;
`]))),r=(0,v.X)(S||(S=i()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),l=(0,v.X)(A||(A=i()([`
  margin-top: 6px;
  color: #999;
`]))),d=(0,v.X)(M||(M=i()([`
  margin-top: 6px;
  color: #ff4d4f;
`])))}),81194:(function(_,m,e){e.r(m),e.d(m,{desc:function(){return o},errorMsg:function(){return a},footer:function(){return p},header:function(){return S},mark:function(){return M},title:function(){return A},titleTooltip:function(){return b}});var P=e(84169),i=e.n(P),v=e(19169),L,C,W,c,u,N,E,S=(0,v.X)(L||(L=i()([`
  margin-bottom: 8px;
`]))),A=(0,v.X)(C||(C=i()([`
  word-break: break-all;
`]))),M=(0,v.X)(W||(W=i()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),b=(0,v.X)(c||(c=i()([`
  margin-left: 4px;
`]))),p=(0,v.X)(u||(u=i()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),o=(0,v.X)(N||(N=i()([`
  margin-top: 8px;
  color: #999;
`]))),a=(0,v.X)(E||(E=i()([`
  margin-top: 8px;
  color: #ff4d4f;
`])))}),67758:(function(_,m,e){e.r(m);var P=e(1974),i=e.n(P),v=e(35767),L=e(77651),C=e(51643),W=e(58679),c=e(79508),u=e(74848),N={InputText:{component:function(S){var A,M=S.schema,b=S.value,p=S.disabled,o=S.readonly,a=S.onChange;return o?(0,u.jsx)("div",{children:b}):(0,u.jsx)(v.A,i()(i()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((A=M.title)!==null&&A!==void 0?A:"")},M.renderOptions),{},{value:b!=null?b:"",disabled:p,onChange:function(s){return a(s.target.value)}}))}},InputNumber:{component:function(S){var A,M=S.schema,b=S.value,p=S.disabled,o=S.readonly,a=S.onChange;return o?(0,u.jsx)("div",{children:b}):(0,u.jsx)(L.A,i()(i()({style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165".concat((A=M.title)!==null&&A!==void 0?A:"")},M.renderOptions),{},{value:b,onChange:function(s){return a(s!=null?s:void 0)},disabled:p}))}},TextArea:{component:function(S){var A,M=S.schema,b=S.value,p=S.disabled,o=S.readonly,a=S.onChange;return o?(0,u.jsx)("div",{children:b}):(0,u.jsx)(v.A.TextArea,i()(i()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((A=M.title)!==null&&A!==void 0?A:"")},M.renderOptions),{},{value:b!=null?b:"",onChange:function(s){return a(s.target.value)},disabled:p}))}},Password:{component:function(S){var A,M=S.schema,b=S.value,p=S.disabled,o=S.readonly,a=S.onChange;return o?(0,u.jsx)("div",{children:b}):(0,u.jsx)(v.A.Password,i()(i()({placeholder:"\u8BF7\u8F93\u5165".concat((A=M.title)!==null&&A!==void 0?A:"")},M.renderOptions),{},{value:b!=null?b:"",onChange:function(s){return a(s.target.value)},disabled:p}))}},Switch:{component:function(S){var A=S.value,M=S.disabled,b=S.onChange;return(0,u.jsx)(c.A,{checked:A,disabled:M,onChange:function(o){return b(o)}})}},Select:{component:function(S){var A,M,b,p=S.schema,o=S.value,a=S.disabled,t=S.readonly,s=S.onChange,n=(A=(M=p.renderOptions)===null||M===void 0?void 0:M.options)!==null&&A!==void 0?A:[];if(t){var r=n.find(function(l){return l.value===o});return(0,u.jsx)("div",{children:r==null?void 0:r.label})}return(0,u.jsx)(W.A,i()(i()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat((b=p.title)!==null&&b!==void 0?b:"")},p.renderOptions),{},{value:o,onChange:function(d){return s(d)},disabled:a}))}},Radio:{component:function(S){var A,M,b=S.schema,p=S.value,o=S.disabled,a=S.onChange,t=(A=(M=b.renderOptions)===null||M===void 0?void 0:M.options)!==null&&A!==void 0?A:[];return(0,u.jsx)(C.Ay.Group,{value:p,disabled:o,onChange:function(n){return a(n.target.value)},children:t.map(function(s){return(0,u.jsx)(C.Ay,{value:s.value,disabled:s.disabled,children:s.label},s.value)})})}}};m.default=N}),69337:(function(_,m,e){e.r(m);var P=e(11604),i=e.n(P),v=e(96805),L=e(34309),C=e(21612),W=e(28073),c=e(96540),u=e(74848),N=function(S){var A=S.schema,M=S.path,b=S.objectStyle,p=(0,c.useState)(!1),o=i()(p,2),a=o[0],t=o[1],s=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{children:A.title}),!!A.titleDescription&&(0,u.jsx)(W.A,{placement:"top",trigger:"hover",content:A.titleDescription,children:(0,u.jsx)(v.A,{style:{marginLeft:4}})})]});return(0,u.jsx)(C.A,{bordered:!1,ghost:!0,activeKey:String(a),onChange:function(){return t(!a)},children:(0,u.jsx)(C.A.Panel,{header:s,style:{borderRadius:4,background:"rgba(0,0,0,0.03)"},children:(0,u.jsx)("div",{style:b,children:(0,u.jsx)(L.A,{schema:A,path:M})})},"false")})};m.default={formItem:N}}),27845:(function(_,m,e){e.r(m);var P=e(96805),i=e(34309),v=e(28073),L=e(74848),C={background:"#efefef",fontWeight:"bold",padding:"7px 15px",borderRadius:4,marginBottom:15},W=function(u){var N=u.schema,E=u.path,S=u.objectStyle;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("div",{style:C,children:[(0,L.jsx)("span",{children:N.title}),!!N.titleDescription&&(0,L.jsx)(v.A,{placement:"top",trigger:"hover",content:N.titleDescription,children:(0,L.jsx)(P.A,{style:{marginLeft:4}})})]}),(0,L.jsx)("div",{style:S,children:(0,L.jsx)(i.A,{schema:N,path:E})})]})};m.default={formItem:W}}),24512:(function(_,m,e){e.r(m),m.default={renderType:"Root",properties:{title:{renderType:"InputText",title:"\u4E00\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E00\u7EA7\u5185\u5BB9"},o1:{renderType:"Object",title:"\u4EC5\u52A0\u7C97\u6807\u9898\u7684\u5BF9\u8C61 Object",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}},o2:{renderType:"ObjectCollapse",title:"\u53EF\u6298\u53E0\u7684\u5BF9\u8C61 ObjectCollapse",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}}}}}),83356:(function(_,m,e){e.r(m),e.d(m,{default:function(){return W}});var P=e(96540),i=e(74848),v={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #ececec",borderRadius:6,cursor:"pointer",fontSize:14},L=function(u){var N=u.value,E=u.sPath,S=u.onChange,A=function(){var b=String(Math.random()).slice(2,6),p={bank_id:"id_".concat(b),bank_account:"111222333".concat(b),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(b),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(b,"\u652F\u884C")};S(p[E],{extra:p})};return(0,i.jsx)("div",{style:v,onClick:A,children:N?(0,i.jsx)("div",{children:N}):(0,i.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})},C={component:L},W={BankSelect:C}}),66324:(function(_,m,e){e.r(m);var P=e(74848),i=[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing",disabled:!0}],v={renderType:"Root",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}},Switch:{title:"\u5F00\u5173\uFF08Switch\uFF09",renderType:"Switch"},SwitchBox:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE"}},SwitchBoxWithRightContent:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE",rightExtraContent:function(C){var W=C.value,c=C.disabled,u=C.readonly;return(0,P.jsxs)("span",{style:{color:W?"green":"red"},children:[W?"\u5DF2\u540C\u610F":"\u672A\u540C\u610F",c&&"\uFF08\u7981\u7528\uFF09",u&&"\uFF08\u53EA\u8BFB\uFF09"]})}}},TextArea:{title:"\u591A\u884C\u6587\u672C\uFF08TextArea\uFF09",renderType:"TextArea",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},Password:{title:"\u5BC6\u7801\u6846\uFF08Password\uFF09",renderType:"Password",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},Select:{title:"\u5355\u9879\u9009\u62E9\u5668\uFF08Select\uFF09",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:i,mode:"multiple"}},SelectMultiple:{title:"\u591A\u9879\u9009\u62E9\u5668\uFF08SelectMultiple\uFF09",renderType:"SelectMultiple",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:i}},Radio:{title:"\u5355\u9009\u6846\uFF08Radio\uFF09",renderType:"Radio",renderOptions:{options:i}},Checkbox:{title:"\u591A\u9009\u6846\uFF08Checkbox\uFF09",renderType:"Checkbox",renderOptions:{options:i}},Rate:{title:"\u8BC4\u5206\uFF08Rate\uFF09",renderType:"Rate"},DatePicker:{title:"\u65E5\u671F\uFF08DatePicker\uFF09",renderType:"DatePicker",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",format:"YYYY\u5E74MM\u6708DD\u65E5",outputFormat:"YYYY-MM-DD"}},DateRangePicker:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},DateRangePickerObjectStruct:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09-\u5BF9\u8C61\u683C\u5F0F\u503C",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],valueStruct:"object",valueFieldMap:{start:"start_time",end:"end_time"}}},Description:{title:"\u7EAF\u5C55\u793A\uFF08Description\uFF09",renderType:"Description"},Object:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF08Object\uFF09",renderType:"Object",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectRightIcon:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u7BAD\u5934\u5728\u53F3\u8FB9",renderType:"Object",renderOptions:{headerOptions:{expandIconPosition:"end"}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNotCollapse:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u4E0D\u5141\u8BB8\u6298\u53E0",renderType:"Object",renderOptions:{headerOptions:{collapsible:"icon"},panelOptions:{showArrow:!1}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNull:{title:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderType:"ObjectNull",style:{border:"1px solid #d9d9d9",padding:10,borderRadius:6},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}}}};m.default=v}),98779:(function(_,m,e){e.r(m),e.d(m,{builtinRenderers:function(){return C}});var P=e(84169),i=e.n(P),v=e(19169),L,C=(0,v.X)(L||(L=i()([`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
`])))}),68990:(function(_,m,e){e.r(m);var P=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",align:"center"},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",align:"center"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",align:"center"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",align:"center"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",align:"center"},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status",align:"center"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator",align:"center"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",align:"center"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",align:"center"},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",align:"center"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",align:"center"}];m.default=P}),57580:(function(_,m,e){e.r(m),e.d(m,{default:function(){return v}});var P=e(74353),i=e.n(P);function v(){for(var L=[],C=0;C<10;C++){var W=String(Math.random()).slice(2,6),c=Math.random()>.5?1:2,u=i()().format("YYYY-MM-DD HH:mm:ss");L.push({key:Math.random(),supplier_name:"".concat(W,"\u6709\u9650\u516C\u53F8"),supplier_code:W,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:u,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:c===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:c===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:u})}return L}}),23956:(function(_,m,e){e.r(m);var P=e(96540),i=e(74848),v={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #d9d9d9",borderRadius:6,cursor:"pointer",fontSize:14},L=function(W){var c=W.value,u=W.sPath,N=W.onChange,E=function(){var A=String(Math.random()).slice(2,6),M={bank_id:"id_".concat(A),bank_account:"111222333".concat(A),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(A),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(A,"\u652F\u884C")};N(M[u],{extra:M})};return(0,i.jsx)("div",{style:v,onClick:E,children:c?(0,i.jsx)("div",{children:c}):(0,i.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})};m.default={component:L}}),82230:(function(_,m,e){e.r(m);var P=e(34309),i=e(74848),v=function(C){var W=C.schema,c=C.path,u=C.objectStyle;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"section-title",children:W.title}),(0,i.jsx)("div",{style:u,children:(0,i.jsx)(P.A,{schema:W,path:c})})]})};m.default={formItem:v}}),71991:(function(_,m,e){e.r(m);var P=e(74848),i=function(L){var C=L.schema;return(0,P.jsx)("div",{className:"section-title",children:C.title})};m.default={formItem:i}}),42115:(function(_,m,e){e.r(m);var P=[{title:"Supplier Name",dataIndex:"supplier_name",width:150,fixed:"left"},{title:"Supplier Code",dataIndex:"supplier_code",width:150},{title:"Description",dataIndex:"description",valueType:function(){return{type:"long-text-modal",maxLength:20}}},{title:"Bill No",dataIndex:"bill_no",width:130},{title:"Bill Type",dataIndex:"bill_type"},{title:"Bill Date",dataIndex:"bill_date",width:120},{title:"Bill Status",dataIndex:"bill_status"},{title:"Operator",dataIndex:"operator"},{title:"Goods Name",dataIndex:"goods_name",width:130},{title:"Goods Price",dataIndex:"goods_price"},{title:"Goods Code",dataIndex:"goods_code",width:130},{title:"Goods Category",dataIndex:"goods_category"},{title:"Goods Date",dataIndex:"goods_date",width:120,fixed:"right"}];m.default=P}),16844:(function(_,m,e){e.r(m);var P=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u4FE1\u606F",children:[{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"}]},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u4FE1\u606F",children:[{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]}];m.default=P}),76756:(function(_,m,e){e.r(m);var P=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u8BC4\u7EA7(rate)",dataIndex:"rate",valueType:"rate"},{title:"\u4EE3\u7801\u5757(code)",dataIndex:"code",valueType:"code"},{title:"\u5343\u5206\u4F4D\u6570\u5B57(comma-number)",dataIndex:"comma_number",valueType:"comma-number"},{title:"\u767E\u5206\u6BD4(percent)",dataIndex:"percent",valueType:"percent"},{title:"\u957F\u6587\u6848(long-text)",dataIndex:"long_text",valueType:function(v,L){return{type:"long-text",maxLength:15,placement:L%3===0?"start":L%3===1?"middle":"end",tooltipProps:{color:L%2?"#1677ff":"#000"}}},width:270},{title:"\u957F\u6587\u6848(long-text-modal)",dataIndex:"long_text_modal",valueType:function(v,L){return{type:"long-text-modal",maxLength:20,btnText:L%2?"\u67E5\u770B\u8BE6\u60C5":"\u5168\u90E8",modalProps:{title:L%2?"\u8BE6\u60C5":"\u5168\u90E8",width:500},modalContent:L%2?"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 modal \u5185\u5BB9\uFF0C\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u653E\u7F6E\u4EFB\u4F55 React \u7EC4\u4EF6\u6216\u5143\u7D20\u3002":void 0}},width:270},{title:"\u72B6\u6001\u5F00\u5173(switch)",dataIndex:"switch_status",valueType:"switch"},{title:"\u6807\u7B7E(tags)",dataIndex:"tags",valueType:"tags",width:140},{title:"\u6807\u7B7E(tags with options)",dataIndex:"tags2",valueType:function(){return{type:"tags",options:[{label:"\u82F9\u679C",value:"apple",color:"cyan"},{label:"\u6843\u5B50",value:"peach",color:"pink"},{label:"\u9999\u8549",value:"banana",color:"orange"}]}},width:140},{title:"\u56FE\u7247(images)",dataIndex:"image_list",valueType:"images"}];m.default=P}),44099:(function(_,m,e){e.r(m);var P=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}];m.default=P}),65043:(function(_,m,e){e.r(m),e.d(m,{default:function(){return v}});var P=e(74353),i=e.n(P);function v(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,C=[],W=0;W<L;W++){var c=String(Math.random()).slice(2,6),u=Math.random()>.5?1:2,N=i()().format("DD/MM/YYYY HH:mm:ss"),E="id_".concat(W);C.push({key:E,id:E,supplier_name:"".concat(c," Co.,Ltd."),supplier_code:c,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"Purchase Order":"Return Order",bill_date:N,bill_status:Math.random()>.5?"Submitted":"To be submitted",operator:Math.random()>.5?"Tom":"Lily",goods_name:u===1?"10 red roses":"Live bass",goods_code:"G".concat(Date.now()),goods_category:u===1?"Fruits & Flowers":"Aquatic Products",goods_date:N,goods_price:u===1?19.9:22.8,description:"SearchTable is a conditional search table component based on the Search + Antd Table encapsulation; It is often used for data retrieval, display and operation of background management systems."})}return C}}),25166:(function(_,m,e){e.r(m),e.d(m,{default:function(){return i}});function P(v,L){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,W=Math.random()*(L-v)+v;return C?Math.floor(W):W}function i(){for(var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,L=[],C=0;C<v;C++){var W="id_".concat(C);L.push({key:W,id:W,title:"".concat(String(Math.random()).slice(2,6),"\u6807\u9898"),rate:P(0,5),code:`
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      `.trim(),comma_number:Math.random()>.4?P(1e3,1e5):P(0,1e3),percent:P(0,100).toFixed(2),switch_status:Math.random()>.5,tags:Math.random()>.5?"\u5F20\u4E09":["\u674E\u56DB","\u738B\u4E94"],tags2:Math.random()>.5?"apple":["peach","banana"],image_list:Math.random()>.5?"https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg":["https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif","https://raw.githubusercontent.com/Barrior/assets/main/gift.png"],deploy_status:P(0,3),long_text:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",long_text_modal:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002"})}return L}}),13331:(function(_,m,e){e.r(m),e.d(m,{default:function(){return v}});var P=e(74353),i=e.n(P);function v(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,C=arguments.length>1?arguments[1]:void 0,W=[],c=0;c<L;c++){var u=String(Math.random()).slice(2,6),N=Math.random()>.5?1:2,E=i()().format("YYYY-MM-DD HH:mm:ss"),S="id_".concat(c);W.push({key:S,id:S,supplier_name:"".concat(u,"\u6709\u9650\u516C\u53F8"),supplier_code:u,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:E,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:N===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:N===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:E,goods_price:N===1?19.9:22.8})}return C&&W.sort(function(A,M){var b=String(A[C.sort_field]),p=String(M[C.sort_field]);return C.sort_order==="ascend"?b.localeCompare(p):p.localeCompare(b)}),W}}),7785:(function(_,m,e){e.r(m);var P={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_type:{title:"Bill Type",renderType:"Select",renderOptions:{options:[{label:"Purchase Order",value:1},{label:"Inbound Order",value:2},{label:"Return Order",value:3}]}},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"},goods_category:{title:"Goods Category",renderType:"Select",renderOptions:{options:[{label:"Fruits & Flowers",value:1},{label:"Aquatic Products",value:2},{label:"Grains & Oils & Seasoning",value:3}]}}}};m.default=P}),92689:(function(_,m,e){e.r(m);var P={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}};m.default=P}),19169:(function(_,m,e){e.d(m,{X:function(){return v}});var P=e(27573),i=(0,P.A)({key:"schema-render"}),v=i.css}),97102:(function(_,m,e){e.r(m),e.d(m,{sleep:function(){return P}});function P(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(v){return setTimeout(v,i)})}}),90400:(function(_,m,e){var P=e(96540),i=(0,P.createContext)({});m.A=i}),46620:(function(_,m,e){e.d(m,{A:function(){return o}});var P=e(91310),i=e.n(P),v=e(25208),L=e.n(v),C=e(76200),W=e.n(C),c=e(85030),u=e.n(c),N=e(70135),E=e.n(N),S=e(68328),A=e.n(S),M=e(96540),b=e(60145),p=e(74848),o=(function(a){u()(s,a);var t=E()(s);function s(){var n;i()(this,s);for(var r=arguments.length,l=new Array(r),d=0;d<r;d++)l[d]=arguments[d];return n=t.call.apply(t,[this].concat(l)),A()(W()(n),"state",{hasError:!1,error:Error()}),n}return L()(s,[{key:"getFallback",value:function(){var r,l=this.state.error,d=this.props.catchErrorTips;return d==="silent"?null:(0,b.Tn)(d)?d(l):(0,p.jsxs)("div",{style:{color:"red"},children:["[ErrorBoundary] ",(r=l==null?void 0:l.stack)!==null&&r!==void 0?r:String(l)]})}},{key:"render",value:function(){return this.state.hasError?this.getFallback():this.props.children}}],[{key:"getDerivedStateFromError",value:function(r){return{hasError:!0,error:r}}}]),s})(M.Component)}),82785:(function(_,m,e){e.d(m,{OY:function(){return i},Pz:function(){return P},UU:function(){return v}});var P=(function(L){return L.success="success",L.warning="warning",L.error="error",L})({}),i=[P.success,P.warning,P.error],v=(function(L){return L.normal="normal",L.autoFill="autoFill",L.autoFit="autoFit",L})({})}),88654:(function(_,m,e){var P=e(96540),i=e(53476),v=function(C,W){var c=(0,i.A)(C);(0,P.useEffect)(function(){c.current()},W)};m.A=v}),6392:(function(_,m,e){var P=e(96540),i=e(82846),v=e(53476),L=e(84643);function C(W,c){var u,N=(0,v.A)(W),E=(u=c==null?void 0:c.wait)!==null&&u!==void 0?u:1e3,S=(0,P.useMemo)(function(){return(0,i.sg)(function(){return N.current.apply(N,arguments)},E)},[]);return(0,L.A)(function(){return S.cancel()}),{run:S,cancel:S.cancel}}m.A=C}),14173:(function(_,m,e){e.d(m,{A:function(){return L}});var P=e(11604),i=e.n(P),v=e(96540);function L(){var C=(0,v.useReducer)(function(N){return N+1},0),W=i()(C,2),c=W[0],u=W[1];return{forceUpdate:u}}}),53476:(function(_,m,e){var P=e(96540);function i(v){var L=(0,P.useRef)(v);return L.current=v,L}m.A=i}),99651:(function(_,m,e){e.d(m,{A:function(){return i}});var P=e(96540);function i(v){var L=(0,P.useRef)(v),C=(0,P.useRef)();return L.current=(0,P.useMemo)(function(){return v},[v]),C.current||(C.current=function(){for(var W=arguments.length,c=new Array(W),u=0;u<W;u++)c[u]=arguments[u];return L.current.apply(this,c)}),C.current}}),41455:(function(_,m,e){var P=e(96540),i=function(L){(0,P.useEffect)(function(){return L()},[])};m.A=i}),45396:(function(_,m,e){e.d(m,{A:function(){return v}});var P=e(96540),i=e(90400);function v(){var L=(0,P.useContext)(i.A);return L}}),84643:(function(_,m,e){var P=e(96540),i=e(53476),v=function(C){var W=(0,i.A)(C);(0,P.useEffect)(function(){return function(){W.current()}},[])};m.A=v}),51252:(function(_,m,e){e.r(m),e.d(m,{RendererDistributor:function(){return K.A},RendererExecutor:function(){return F.A},RendererIterator:function(){return h.A},default:function(){return V},useAsyncEffect:function(){return j.A},useCoreValue:function(){return b},useDebounceFn:function(){return D.A},useForceUpdate:function(){return E.A},useLatest:function(){return B.A},useMemoizedFn:function(){return S.A},useMounted:function(){return $.A},useUnmount:function(){return T.A},utils:function(){return P}});var P={};e.r(P),e.d(P,{classNames:function(){return y.A},classNamesWithPrefix:function(){return W.tc},cloneDeep:function(){return N.mg},debounce:function(){return N.sg},dropRight:function(){return N.gc},find:function(){return N.I6},get:function(){return N.Jt},hasOwnProperty:function(){return W.mQ},isArray:function(){return c.cy},isBoolean:function(){return c.Lm},isFunction:function(){return c.Tn},isMatch:function(){return N.uv},isNil:function(){return c.gD},isNull:function(){return c.kZ},isNumber:function(){return c.Et},isObject:function(){return c.Gv},isPlainObject:function(){return c.Qd},isString:function(){return c.Kg},isUndefined:function(){return c.b0},logger:function(){return H.A},mapKeys:function(){return N.d4},omit:function(){return N.cJ},pick:function(){return N.Up},positionedOffset:function(){return t},set:function(){return N.hZ},templateCompiled:function(){return W._0},toLower:function(){return N.jp},traverseSchema:function(){return U.A},typeChecking:function(){return c.DL}});var i=e(1974),v=e.n(i),L=e(96540),C=e(46620),W=e(34972),c=e(60145),u=e(86313),N=e(82846),E=e(14173),S=e(99651),A=function(){var J=(0,L.useRef)(!1);return(0,L.useEffect)(function(){return J.current=!1,function(){J.current=!0}},[]),J},M=A;function b(z){var J,Q=(0,L.useRef)((J=z.defaultValue)!==null&&J!==void 0?J:{}),ee=M(),w=(0,E.A)(),oe=w.forceUpdate,ie=(0,W.mQ)(z,"value");if(ie){var fe;Q.current=(fe=z.value)!==null&&fe!==void 0?fe:{}}var se=(0,S.A)(function(Ce,je){if(!ee.current){var He,Be,ze,Ge=(0,u.F)(je.path),_e=v()(v()({},je),{},{sPath:Ge}),ke=(He=z.watch)===null||He===void 0?void 0:He[Ge];(0,c.Tn)(ke)&&ke(Ce,_e),Q.current=Ce,ie||oe(),(Be=z.onItemChange)===null||Be===void 0||Be.call(z,_e),(ze=z.onChange)===null||ze===void 0||ze.call(z,Ce,_e)}}),Pe=(0,S.A)(function(Ce){var je=(0,N.hZ)(v()({},Q.current),Ce.path,Ce.value);se(je,Ce)}),ge=(0,S.A)(function(){return Q.current}),ue=(0,S.A)(function(Ce){se(Ce,{path:[],value:void 0})}),Ke=(0,S.A)(function(){ue({})});return{value:Q.current,valueRef:Q,onChange:Pe,getValue:ge,setValue:ue,resetValue:Ke}}var p=e(82785),o=["320px","1fr"];function a(z){var J=z.layout,Q=z.layoutMinMax,ee=z.layoutColumnGap,w=z.layoutRowGap,oe=Q==null?void 0:Q[0],ie=Q==null?void 0:Q[1],fe=(0,L.useMemo)(function(){if(J===p.UU.normal)return"repeat(24, 1fr)";var Pe=J===p.UU.autoFill?"auto-fill":"auto-fit",ge=(0,u.U)(oe!=null?oe:o[0]),ue=(0,u.U)(ie!=null?ie:o[1]);return"repeat(".concat(Pe,", minmax(").concat(ge,", ").concat(ue,"))")},[J,oe,ie]),se={display:"grid",gridTemplateColumns:fe,columnGap:ee,rowGap:w};return se}function t(z,J){if(!z||!J)return{left:0,top:0};for(var Q=0,ee=0,w=z;w&&w!==J;)Q+=w.offsetLeft,ee+=w.offsetTop,w=w.offsetParent;return{left:Q,top:ee}}var s=e(26381);function n(z,J){var Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(z){var ee=Q.positionedElement,w=Q.xAxis,oe=Q.yAxis,ie=Q.behavior,fe=ie===void 0?"smooth":ie,se=Q.gap,Pe=se===void 0?0:se,ge=ee||J;if(ge){var ue=t(z,ge);ge.scrollTo({left:w===!1?void 0:ue.left+Pe,top:oe===!1?void 0:ue.top+Pe,behavior:fe})}}}function r(z){var J=z.ref,Q=z.rootElementRef,ee=z.rootContextRef,w=z.getValue,oe=z.setValue,ie=z.resetValue,fe=(0,S.A)(function(){return(0,s.O)((0,N.Up)(ee.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),se=(0,S.A)(function(Ke){var Ce,je=(Ce=ee.current)===null||Ce===void 0?void 0:Ce.rendererStorage;if(je&&Ke){var He=(0,c.cy)(Ke)?(0,u.F)(Ke):Ke;return je[He]}}),Pe=(0,S.A)(function(Ke){var Ce,je=(Ce=ee.current)===null||Ce===void 0?void 0:Ce.rendererStorage;if(je){var He=Ke?(0,c.Kg)(Ke)?[Ke]:Ke:Object.keys(je);He.forEach(function(Be){var ze;(ze=je[Be])===null||ze===void 0||ze.setValidatorState({status:p.Pz.success})})}}),ge=(0,S.A)(function(){return Q.current}),ue=(0,S.A)(function(Ke,Ce){var je;return n((je=se(Ke))===null||je===void 0?void 0:je.getRootElement(),ge(),Ce)});(0,L.useImperativeHandle)(J,function(){return{validate:fe,resetError:Pe,setValue:oe,resetValue:ie,getValue:w,getRootElement:ge,scrollTo:ue,findItem:se}},[])}var l=e(62672),d=e(90400),h=e(34309),I=e(3979),y=e(1097),R=e(74848),g={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:o,disabled:!1,readonly:!1,validators:{},userCtx:{}},f=(0,L.forwardRef)(function(z,J){I.A.falsy(z.schema,"missing schema."),I.A.falsy(z.itemLayout,"missing itemLayout.");var Q=v()(v()({},g),z),ee=(0,L.useRef)(null),w=(0,L.useRef)({}),oe=b(Q),ie=oe.value,fe=oe.onChange,se=oe.getValue,Pe=oe.setValue,ge=oe.resetValue,ue=(0,L.useMemo)(function(){return v()(v()({},l.A),Q.locale)},[Q.locale]),Ke=(0,L.useMemo)(function(){return(0,N.d4)(Q.renderers,function(He,Be){return Be.toLowerCase()})},[Q.renderers]),Ce=a(Q),je=w.current=v()(v()({},(0,N.Up)(Q,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:Ce,renderers:Ke,rootSchema:Q.schema,rootValue:ie,locale:ue,rendererStorage:{},onChange:fe,prefixClassNames:function(){for(var Be=arguments.length,ze=new Array(Be),Ge=0;Ge<Be;Ge++)ze[Ge]=arguments[Ge];return W.tc.apply(void 0,[Q.prefixCls].concat(ze))}});return r({ref:J,rootElementRef:ee,rootContextRef:w,getValue:se,setValue:Pe,resetValue:ge}),(0,R.jsx)(d.A.Provider,{value:je,children:(0,R.jsx)("div",{className:(0,y.A)(je.prefixCls,Q.className,{"is-disabled":je.disabled,"is-readonly":je.readonly}),ref:ee,style:v()(v()({position:"relative"},Ce),Q.style),children:(0,R.jsx)(h.A,{schema:je.rootSchema,path:[]})})})}),O=(0,L.forwardRef)(function(z,J){return(0,R.jsx)(C.A,{catchErrorTips:z.catchErrorTips,children:(0,R.jsx)(f,v()(v()({},z),{},{ref:J}))})}),x=O,j=e(88654),D=e(6392),B=e(53476),$=e(41455),T=e(84643),K=e(6652),F=e(78160),H=e(82229),U=e(40928),V=x}),96754:(function(_,m,e){e.r(m),m.default={localeName:"en-us",validation:{required:"${label} is required",typeError:"Data format error, expect ${type} type"}}}),62672:(function(_,m){m.A={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}}),6652:(function(_,m,e){var P=e(1974),i=e.n(P),v=e(45396),L=e(3979),C=e(92158),W=e(78160),c=e(74848),u=function(E){var S=(0,v.A)(),A=E.schema;L.A.falsy(A,"schema is required in RendererDistributor Props.");var M=(0,C.D)(S.renderers,A.renderType);return M?(0,c.jsx)(W.A,i()(i()({},E),{},{renderer:M})):null};m.A=u}),78160:(function(_,m,e){var P=e(55420),i=e.n(P),v=e(1974),L=e.n(v),C=e(98312),W=e.n(C),c=e(11604),u=e.n(c),N=e(96540),E=e(46620),S=e(82785),A=e(6392),M=e(99651),b=e(45396),p=e(1097),o=e(86313),a=e(82846),t=e(26381),s=e(74848),n=function(l){var d=l.schema,h=l.path,I=l.renderer,y=l.gridColumn,R=(0,b.A)(),g=(0,N.useState)({status:S.Pz.success}),f=u()(g,2),O=f[0],x=f[1],j=(0,o.F)(h),D=(0,N.useRef)(null);R.rendererStorage[j]=(0,N.useMemo)(function(){return{setValidatorState:function(z){return x(z)},getRootElement:function(){return D.current}}},[x]);var B=(0,A.A)((function(){var V=W()(i()().mark(function z(J){var Q;return i()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,(0,t.CV)({schema:d,rootValue:R.rootValue,userCtx:R.userCtx,path:h,value:J,locale:R.locale,globalValidators:R.validators,rendererValidator:I.validator,rendererValidatorParams:K});case 2:Q=w.sent,x(L()({},Q));case 4:case"end":return w.stop()}},z)}));return function(z){return V.apply(this,arguments)}})(),{wait:300}),$=B.run,T=(0,M.A)((function(){var V=W()(i()().mark(function z(J){var Q,ee=arguments;return i()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:Q=ee.length>1&&ee[1]!==void 0?ee[1]:{},R.onChange({path:h,value:J,extra:Q.extra}),Q.triggerValidator!==!1?$(J):x({status:S.Pz.success});case 3:case"end":return oe.stop()}},z)}));return function(z){return V.apply(this,arguments)}})()),K=(0,t.nJ)(L()({schema:d,path:h,value:(0,a.Jt)(R.rootValue,h)},(0,a.Up)(R,"disabled","readonly","rootValue","userCtx","locale"))),F=L()(L()({},K),{},{validator:O,objectStyle:R.objectStyle,onChange:T}),H=F,U=function(){var z=L()(L()({},(0,a.Up)(F,"schema","required","disabled","readonly","validator","locale","userCtx")),{},{prefixClassNames:R.prefixClassNames});if(F.readonly){if(I.readonlyFormItem)return(0,N.createElement)(I.readonlyFormItem,H);if(I.readonlyComponent)return(0,N.createElement)(R.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(I.readonlyComponent,F)}))}if(F.disabled){if(I.disabledFormItem)return(0,N.createElement)(I.disabledFormItem,H);if(I.disabledComponent)return(0,N.createElement)(R.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(I.disabledComponent,F)}))}if(I.formItem)return(0,N.createElement)(I.formItem,H);if(I.component)return(0,N.createElement)(R.itemLayout,L()(L()({},z),{},{body:(0,N.createElement)(I.component,F)}))};return(0,s.jsx)("div",{ref:D,className:(0,p.A)(R.prefixClassNames("form-item","item-".concat(d.renderType)),d.className,{"is-required":F.required,"is-disabled":F.disabled,"is-readonly":F.readonly}),style:L()({gridColumn:y},d.style),children:(0,s.jsx)(E.A,{catchErrorTips:R.catchErrorTips,children:U()})})};m.A=n}),34309:(function(_,m,e){var P=e(1974),i=e.n(P),v=e(45647),L=e.n(v),C=e(96540),W=e(82785),c=e(45396),u=e(60145),N=e(86313),E=e(74820),S=e(82846),A=e(6652),M=e(74848),b=function(o){var a=o.schema,t=o.path,s=(0,c.A)(),n=s.rootValue,r=s.userCtx,l=t.length?(0,S.Jt)(n,t):n,d=1,h=Object.keys(a.properties).map(function(I){var y=a.properties[I],R=(0,E.j)({statement:y.hidden,parentValue:l,rootValue:n,userCtx:r});if(R)return null;var g=[].concat(L()(t),[I]),f=(0,N.F)(g),O;if(s.layout===W.UU.normal){var x=d,j=25;!(0,u.Et)(y.span)&&!(0,u.Et)(y.spanStart)?x=d=1:(y.spanStart&&(x=y.spanStart,d=x),y.span&&(j=x+y.span,d=j)),O="".concat(x,"/").concat(j)}else(0,u.Et)(y.spanStart)&&(O="".concat(y.spanStart,"/auto"));var D={schema:y,path:g,gridColumn:O};return(0,M.jsx)(A.A,i()({},D),f)});return(0,M.jsx)(C.Fragment,{children:h})};m.A=b}),3979:(function(_,m){function e(v,L){v&&i(L)}function P(v,L){!v&&i(L)}function i(v){throw new Error("[AssertionError]: ".concat(v!=null?v:"Failed"))}m.A={truthy:e,falsy:P,fail:i}}),34972:(function(_,m,e){e.d(m,{Y9:function(){return C},_0:function(){return W},mQ:function(){return u},tc:function(){return c}});var P=e(60145),i=e(1097),v=e(82229);function L(){return"".concat(Date.now()).concat(Math.random().toString().substring(2,5)).replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1-$2-$3-$4")}function C(E){if(!(0,P.Kg)(E))return null;try{return new RegExp(E)}catch(S){v.A.warn(S)}return null}function W(E){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return E?E.replace(/\$\{((\s|.)+?)?\}/g,function(){var A,M=(A=arguments.length<=1?void 0:arguments[1])===null||A===void 0?void 0:A.trim();if(!M)return"";var b=S[M];return b!=null?b:""}):""}function c(E){for(var S=arguments.length,A=new Array(S>1?S-1:0),M=1;M<S;M++)A[M-1]=arguments[M];if(!A.length)return"";var b=i.A.apply(void 0,A).trim();if(!b)return"";var p=b.split(" ").map(function(o){return"".concat(E,"-").concat(o)});return p.join(" ")}function u(E,S){return Object.prototype.hasOwnProperty.call(E,S)}function N(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(S){return setTimeout(S,E)})}}),60145:(function(_,m,e){e.d(m,{DL:function(){return C},Et:function(){return S},Gv:function(){return u},Kg:function(){return E},Lm:function(){return A},Qd:function(){return N},Tn:function(){return W},b0:function(){return M},cy:function(){return c},gD:function(){return p},kZ:function(){return b}});var P=e(63859),i=e.n(P),v=Function.prototype.toString,L=v.call(Object);function C(o,a){return Object.prototype.toString.call(o)===a}function W(o){return C(o,"[object Function]")||C(o,"[object AsyncFunction]")}function c(o){return Array.isArray(o)}function u(o){var a=i()(o);return o!==null&&(a==="object"||a==="function")}function N(o){if(!C(o,"[object Object]"))return!1;var a=Object.getPrototypeOf(o);if(a===null)return!0;var t=Object.hasOwnProperty.call(a,"constructor")&&a.constructor;return typeof t=="function"&&t instanceof t&&v.call(t)===L}function E(o){return typeof o=="string"}function S(o){return typeof o=="number"}function A(o){return typeof o=="boolean"}function M(o){return o===void 0}function b(o){return o===null}function p(o){return M(o)||b(o)}}),1097:(function(_,m,e){var P=e(63859),i=e.n(P),v={}.hasOwnProperty;function L(){for(var C=[],W=0;W<arguments.length;W++){var c=arguments[W];if(c){var u=i()(c);if(u==="string"||u==="number")C.push(c);else if(Array.isArray(c)){if(c.length){var N=L.apply(null,c);N&&C.push(N)}}else if(u==="object"){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){C.push(c.toString());continue}for(var E in c)v.call(c,E)&&c[E]&&C.push(E)}}}return C.join(" ")}m.A=L}),82229:(function(_,m){var e={warn:function(){var i;(i=console).warn.apply(i,arguments)}};m.A=e}),86313:(function(_,m,e){e.d(m,{F:function(){return i},U:function(){return v}});var P=e(60145);function i(L){return L.join(".")}function v(L){return(0,P.Et)(L)?"".concat(String(L),"px"):L}}),92158:(function(_,m,e){e.d(m,{D:function(){return P}});function P(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=arguments.length>1?arguments[1]:void 0;if(v){var L=i[v.toLowerCase()];if(L&&(L.formItem||L.component))return L}}}),74820:(function(_,m,e){e.d(m,{i:function(){return C},j:function(){return L}});var P=e(82846),i=e(60145),v=e(82229);function L(W){var c=W.statement,u=W.parentValue,N=u===void 0?{}:u,E=W.rootValue,S=E===void 0?{}:E,A=W.userCtx,M=A===void 0?{}:A;if((0,i.Lm)(c))return c;if((0,i.Kg)(c))try{var b=new Function("$","$root","$userCtx","return ".concat(c));return!!b(N,S,M)}catch(p){v.A.warn(p)}return!1}function C(W){var c=W.statement,u=W.path,N=W.rootValue,E=W.userCtx,S=(0,P.gc)(u);return L({statement:c,parentValue:S.length?(0,P.Jt)(N,S):N,rootValue:N,userCtx:E})}}),82846:(function(_,m,e){e.d(m,{I6:function(){return M},Jt:function(){return p},Up:function(){return E},cJ:function(){return S},d4:function(){return N},gc:function(){return A},hZ:function(){return t},jp:function(){return n},mg:function(){return u},sg:function(){return s},uv:function(){return b}});var P=e(1974),i=e.n(P),v=e(63859),L=e.n(v),C=e(3979),W=e(34972),c=e(60145);function u(r){var l,d,h;if(Array.isArray(r)){for(d=Array(l=r.length);l--;)d[l]=(h=r[l])&&L()(h)==="object"?u(h):h;return d}if(Object.prototype.toString.call(r)==="[object Object]"){d={};var I=r;for(l in I)l==="__proto__"?Object.defineProperty(d,l,{value:u(I[l]),configurable:!0,enumerable:!0,writable:!0}):d[l]=(h=I[l])&&L()(h)==="object"?u(h):h;return d}return r}function N(r,l){if(!(0,c.Qd)(r)||!(0,c.Tn)(l))return{};var d=Object.keys(r),h={};return d.map(function(I){var y=r[I],R=l(y,I);h[R]=y}),h}function E(r){var l={};if(!(0,c.Qd)(r))return l;for(var d=arguments.length,h=new Array(d>1?d-1:0),I=1;I<d;I++)h[I-1]=arguments[I];return h.map(function(y){(0,W.mQ)(r,y)&&(l[y]=r[y])}),l}function S(r){if(!(0,c.Qd)(r))return{};for(var l=i()({},r),d=arguments.length,h=new Array(d>1?d-1:0),I=1;I<d;I++)h[I-1]=arguments[I];return h.map(function(y){(0,W.mQ)(r,y)&&delete l[y]}),l}function A(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,c.cy)(r)?r.slice(0,l>0?l*-1:r.length):[]}function M(r,l){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if((0,c.cy)(r))for(var h=r.length,I=d;I<h;I++){var y=r[I];if((0,c.Tn)(l)){if(l(y))return y}else if((0,c.Qd)(l)&&b(y,l))return y}}function b(r,l){if(!(0,c.Qd)(r))return!0;for(var d=Object.keys(l),h=0;h<d.length;h++){var I=d[h];if(!(0,W.mQ)(r,I)||l[I]!==r[I])return!1}return!0}function p(r,l){if(!(!(0,c.Qd)(r)||!(0,c.cy)(l))){for(var d=r,h=0;h<l.length;h++){var I=l[h];if(d)d=d[I];else return}return d}}var o=/^(?:0|[1-9]\d*)$/;function a(r){return(0,c.Et)(r)||o.test(r)}function t(r,l,d){if(!(0,c.Qd)(r))return r;for(var h=l.length,I=h-1,y=-1,R=r;R!==null&&++y<h;){var g=l[y],f=d;if(y!==I){var O=R[g];f=(0,c.Gv)(O)?O:a(l[y+1])?[]:{}}R[g]=f,R=R[g]}return r}function s(r,l){(0,c.Tn)(r)||C.A.fail("Expected a function");var d;function h(){for(var I=this,y=arguments.length,R=new Array(y),g=0;g<y;g++)R[g]=arguments[g];clearTimeout(d),d=setTimeout(function(){return r.apply(I,R)},l)}return h.cancel=function(){clearTimeout(d)},h}function n(r){return(0,c.Kg)(r)?r.toLowerCase():""}}),40928:(function(_,m,e){e.d(m,{A:function(){return N}});var P=e(45647),i=e.n(P),v=e(1974),L=e.n(v),C=e(63859),W=e.n(C),c=e(82846);function u(E){var S=E.properties;return!S||W()(S)!=="object"||Array.isArray(S)}function N(E,S,A){var M=L()({mapKey:"renderType",ignoreCase:!0,clone:!0,initialState:{},initialStore:{}},A),b=M.clone?(0,c.mg)(E):E;S=(0,c.d4)(S,function(o,a){return a.toLowerCase()});var p=function o(a){var t=a.schema,s=a.path,n=a.state,r=a.store;u(t)||Object.keys(t.properties).forEach(function(l){var d,h,I,y,R,g,f,O,x,j=t.properties[l],D=[].concat(i()(s),[l]),B=(0,c.mg)(n),$={schema:j,parentSchema:t,path:D,field:l,state:B,store:r},T=function(Q){o(L()(L()({schema:j,path:D,state:B},Q),{},{store:r}))},K=(d=S.$$)!==null&&d!==void 0?d:{},F=(h=S.$$object)!==null&&h!==void 0?h:{};(I=K.enter)===null||I===void 0||I.call(K,L()(L()({},$),{},{traverse:T}));var H=(y=j[M.mapKey])!==null&&y!==void 0?y:"";H=M.ignoreCase?(0,c.jp)(H):H;var U=(0,c.jp)(H).startsWith("object");if(U){var V;(V=F.enter)===null||V===void 0||V.call(F,L()(L()({},$),{},{traverse:T}))}var z=(R=S[H])!==null&&R!==void 0?R:{};(g=z.enter)===null||g===void 0||g.call(z,L()(L()({},$),{},{traverse:T})),(f=K.exit)===null||f===void 0||f.call(K,$),U&&((O=F.exit)===null||O===void 0||O.call(F,$)),(x=z.exit)===null||x===void 0||x.call(z,$)})};return p({schema:b,path:[],state:M.initialState,store:M.initialStore}),b}}),26381:(function(_,m,e){e.d(m,{nJ:function(){return B},CV:function(){return O},O:function(){return g}});var P=e(1974),i=e.n(P),v=e(55420),L=e.n(v),C=e(45647),W=e.n(C),c=e(98312),u=e.n(c),N=e(82785),E=e(82846),S=e(34972),A=e(60145),M=e(86313),b=e(92158),p=e(91310),o=e.n(p),a=e(25208),t=e.n(a),s=e(68328),n=e.n(s),r=(function(){function $(T){o()(this,$),n()(this,"value",void 0),n()(this,"rules",void 0),n()(this,"locale",void 0),n()(this,"globalValidators",void 0),n()(this,"globalValidatorParams",void 0),Object.assign(this,T)}return t()($,[{key:"setValue",value:function(K){this.value=K}},{key:"validate",value:(function(){var T=u()(L()().mark(function F(){return L()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,this.validateRules(this.rules);case 2:return U.abrupt("return",U.sent);case 3:case"end":return U.stop()}},F,this)}));function K(){return T.apply(this,arguments)}return K})()},{key:"validateRules",value:(function(){var T=u()(L()().mark(function F(H){var U,V,z,J;return L()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:ee.prev=0,U=h(H),V=0,z=U;case 3:if(!(V<z.length)){ee.next=12;break}if(J=z[V],!(0,A.Qd)(J)){ee.next=9;break}return this.validateRuleItem(J),ee.next=9,this.validateGlobal(J);case 9:V++,ee.next=3;break;case 12:ee.next=19;break;case 14:if(ee.prev=14,ee.t0=ee.catch(0),!$.isValidationError(ee.t0)){ee.next=18;break}return ee.abrupt("return",(0,E.Up)(ee.t0,"status","message","extra"));case 18:return ee.abrupt("return",{status:N.Pz.error,message:ee.t0!==null&&ee.t0!==void 0&&ee.t0.message?ee.t0.message:"CatchError"});case 19:return ee.abrupt("return",{status:N.Pz.success});case 20:case"end":return ee.stop()}},F,this,[[0,14]])}));function K(F){return T.apply(this,arguments)}return K})()},{key:"validateRuleItem",value:function(K){var F=(0,A.Lm)(K.required)?K.required:void 0,H=(0,A.Et)(K.len)?K.len:void 0,U=(0,A.Et)(K.min)?K.min:void 0,V=(0,A.Et)(K.max)?K.max:void 0,z=$.fail,J=this.value,Q=this.locale;if(F&&[void 0,null].includes(J)&&$.fail(K.message),(K.type==="string"&&!(0,A.Kg)(J)||K.type==="number"&&!(0,A.Et)(J)||K.type==="boolean"&&!(0,A.Lm)(J)||K.type==="object"&&!(0,A.Qd)(J)||K.type==="array"&&!(0,A.cy)(J))&&z((0,S._0)(Q.typeError,{type:K.type})),(0,A.Kg)(J)){var ee=(0,S.Y9)(K.pattern);(F&&J===""||H&&J.length!==H||U&&J.length<U||V&&J.length>V||ee&&!ee.test(J))&&z(K.message)}(0,A.Et)(J)&&(H&&J!==H||U&&J<U||V&&J>V)&&z(K.message),(0,A.cy)(J)&&(F&&J.length===0||H&&J.length!==H||U&&J.length<U||V&&J.length>V)&&z(K.message)}},{key:"validateGlobal",value:(function(){var T=u()(L()().mark(function F(H){var U,V,z,J,Q,ee,w,oe,ie;return L()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:if(U=H.validator,V=this.globalValidators,z=this.globalValidatorParams,!(!U||!V||!z)){se.next=4;break}return se.abrupt("return");case 4:if(J=V[U],Q=function(ge){ge.status!==N.Pz.success&&$.fail(ge)},!d(J)){se.next=11;break}return se.next=9,this.validateRules(J.filter(function(Pe){return!Pe.validator}));case 9:ee=se.sent,Q(ee);case 11:if(!(0,A.Tn)(J)){se.next=21;break}return se.next=14,J(i()(i()({},z),{},{value:this.value}));case 14:if(w=se.sent,!d(w)){se.next=20;break}return se.next=18,this.validateRules(w.filter(function(Pe){return!Pe.validator}));case 18:oe=se.sent,Q(oe);case 20:l(w)&&Q({status:w.status,message:(ie=H.message)!==null&&ie!==void 0?ie:w.message,extra:w.extra});case 21:case"end":return se.stop()}},F,this)}));function K(F){return T.apply(this,arguments)}return K})()}],[{key:"isValidationError",value:function(K){return(0,A.Qd)(K)&&(0,S.mQ)(K,$.failUK)}},{key:"fail",value:function(K){var F=n()({},$.failUK,!0);throw(0,A.Kg)(K)?F.message=K:(0,A.Qd)(K)&&Object.assign(F,(0,E.Up)(K,"status","message","extra")),F.status||(F.status=N.Pz.error),F}}]),$})();n()(r,"failUK",typeof Symbol=="function"?Symbol("SRV"):"$$SRV");function l($){return N.OY.includes($==null?void 0:$.status)}function d($){return(0,A.cy)($)&&!!$.length}function h($){var T=[];return(0,A.Qd)($)?T.push($):(0,A.cy)($)&&T.push.apply(T,W()($)),T}function I($){var T=new r($);return T.validate()}var y=e(74820),R=e(40928);function g($){return f.apply(this,arguments)}function f(){return f=u()(L()().mark(function $(T){var K,F,H,U,V,z,J,Q,ee,w,oe,ie,fe;return L()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return K=T.rootSchema,F=T.rootValue,H=T.disabled,U=T.readonly,V=T.locale,z=T.renderers,J=T.rendererStorage,Q=T.validators,ee=T.userCtx,w=[],(0,R.A)(K,{$$:{enter:function(ue){var Ke=ue.schema,Ce=ue.path,je=(0,y.i)({statement:Ke.hidden,rootValue:F,path:Ce,userCtx:ee});if(!je){var He=(0,b.D)(z,Ke.renderType);if(He){var Be=(function(){var ze=u()(L()().mark(function Ge(){var _e,ke,qe,rn,tn,Ye;return L()().wrap(function(Je){for(;;)switch(Je.prev=Je.next){case 0:return _e=(0,E.Jt)(F,Ce),ke=B({schema:Ke,value:_e,path:Ce,disabled:H,readonly:U,rootValue:F,locale:V,userCtx:ee}),Je.prev=2,Je.next=5,O({schema:Ke,rootValue:F,userCtx:ee,path:Ce,locale:V,value:_e,globalValidators:Q,rendererValidator:He.validator,rendererValidatorParams:ke});case 5:if(qe=Je.sent,rn=qe.status,tn=qe.message,Ye=qe.extra,rn===N.Pz.success){Je.next=11;break}return Je.abrupt("return",{path:Ce,value:_e,status:rn,message:tn,extra:Ye});case 11:Je.next=16;break;case 13:return Je.prev=13,Je.t0=Je.catch(2),Je.abrupt("return",{path:Ce,value:_e,status:N.Pz.error,message:"[CatchError]: ".concat(Je.t0===null||Je.t0===void 0?void 0:Je.t0.message)});case 16:case"end":return Je.stop()}},Ge,null,[[2,13]])}));return function(){return ze.apply(this,arguments)}})();w.push(Be())}}}},$$Object:{enter:function(ue){var Ke=ue.traverse;Ke()}}},{clone:!1}),oe=[],ie=[],Pe.next=7,Promise.all(w).then(function(ge){return ge.filter(function(ue){return(ue==null?void 0:ue.status)===N.Pz.error?oe.push(ue):(ue==null?void 0:ue.status)===N.Pz.warning&&ie.push(ue),!!ue})});case 7:return fe=Pe.sent,fe.forEach(function(ge){var ue=ge.status,Ke=ge.path,Ce=ge.message,je=ge.extra,He=J[(0,M.F)(Ke)];He==null||He.setValidatorState({status:ue,message:Ce,extra:je})}),Pe.abrupt("return",{hasError:!!oe.length,hasWarning:!!ie.length,errorList:oe,warningList:ie});case 10:case"end":return Pe.stop()}},$)})),f.apply(this,arguments)}function O($){return x.apply(this,arguments)}function x(){return x=u()(L()().mark(function $(T){var K,F,H,U,V,z,J,Q,ee,w,oe,ie,fe,se,Pe;return L()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(K=T.schema,F=T.rootValue,H=T.userCtx,U=T.path,V=T.locale,z=T.value,J=T.globalValidators,Q=T.rendererValidator,ee=T.rendererValidatorParams,w=j({schema:K,rootValue:F,path:U,locale:V,userCtx:H}),oe={value:z,globalValidators:J,globalValidatorParams:ee,locale:V.validation},!d(w)){ue.next=9;break}return ue.next=6,I(i()(i()({},oe),{},{rules:w}));case 6:if(ie=ue.sent,ie.status===N.Pz.success){ue.next=9;break}return ue.abrupt("return",ie);case 9:if(!d(Q)){ue.next=14;break}return ue.next=12,I(i()(i()({},oe),{},{rules:Q}));case 12:return fe=ue.sent,ue.abrupt("return",fe);case 14:if(!(0,A.Tn)(Q)){ue.next=25;break}return ue.next=17,Q(i()(i()({},ee),{},{value:z}));case 17:if(se=ue.sent,!d(se)){ue.next=23;break}return ue.next=21,I(i()(i()({},oe),{},{rules:se}));case 21:return Pe=ue.sent,ue.abrupt("return",Pe);case 23:if(!l(se)){ue.next=25;break}return ue.abrupt("return",{status:se.status,message:se.message,extra:se.extra});case 25:return ue.abrupt("return",{status:N.Pz.success});case 26:case"end":return ue.stop()}},$)})),x.apply(this,arguments)}function j($){var T=$.schema,K=$.rootValue,F=$.path,H=$.locale,U=$.userCtx,V=h(T.rules),z=(0,y.i)({statement:T.required,rootValue:K,path:F,userCtx:U});return z&&!(0,E.I6)(T.rules,{required:!0})&&V.unshift({required:!0,message:(0,S._0)(H.validation.required,{label:T.title})}),V}function D($){var T=$.schema,K=$.rootValue,F=$.path,H=$.userCtx,U=(0,y.i)({statement:T.required,rootValue:K,path:F,userCtx:H});return!!(U||(0,E.I6)(h(T.rules),{required:!0}))}function B($){var T=$.schema,K=$.value,F=$.path,H=$.disabled,U=$.readonly,V=$.rootValue,z=$.locale,J=$.userCtx,Q=!!H,ee=!!U;Q||(Q=(0,y.i)({statement:T.disabled,rootValue:V,path:F,userCtx:J})),ee||(ee=(0,y.i)({statement:T.readonly,rootValue:V,path:F,userCtx:J}));var w=D({schema:T,path:F,rootValue:V,userCtx:J});return{schema:T,value:K,path:W()(F),sPath:(0,M.F)(F),required:w,disabled:Q,readonly:ee,rootValue:V,locale:z,userCtx:J}}}),6796:(function(_,m,e){e.r(m),e.d(m,{default:function(){return Dr}});var P=e(1974),i=e.n(P),v=e(82846),L=e(1097),C=e(51252),W=e(34972),c=e(96540),u=e(71640),N=e.n(u),E=e(68328),S=e.n(E),A=e(60145),M=e(50400),b=e(82591),p={submit:"submit",reset:"reset"},o={normal:"normal",formItem:"formItem"},a={prefixCls:"schema-render",itemLayout:"horizontal",readonlyPlaceholder:"-",labelWidth:100,labelGap:15,layoutColumnGap:10,layoutRowGap:15,actions:[p.submit,p.reset],actionsRenderMode:o.normal,disableFormOnActionLoading:!0,validateFormOnSubmit:!0},t=S()(S()({},p.submit,!1),p.reset,!1),s="__FORM_RENDER_ACTIONS__",n="YYYY-MM-DD",r="YYYY-MM-DD HH:mm:ss",l=(0,c.createContext)({}),d=l;function h(){var me=(0,c.useContext)(d);return me}var I=e(74848),y=["disabled"],R=S()(S()({},p.submit,function(me){var G,k=me.loading,ne=me.locale,re=me.disabled,ve=me.submitText;return(0,I.jsx)(M.A,{type:"primary",htmlType:"submit",disabled:k.submit?!1:re||k.reset,loading:k.submit,children:ve||(ne==null||(G=ne.FormRender)===null||G===void 0?void 0:G.submit)})}),p.reset,function(me){var G,k=me.handleReset,ne=me.loading,re=me.locale,ve=me.disabled,xe=me.resetText;return(0,I.jsx)(M.A,{htmlType:"button",disabled:ne.reset?!1:ve||ne.submit,loading:ne.reset,onClick:k,children:xe||(re==null||(G=re.FormRender)===null||G===void 0?void 0:G.reset)})}),g=function(G){var k=G.disabled,ne=N()(G,y),re=h(),ve=re.actions,xe=re.actionsLoading,Te=re.registerActions,Se=re.handleReset,Oe=re.handleSubmit,Fe=re.layoutColumnGap,Ae=re.locale,X=re.submitText,Y=re.resetText,q=A.cy(ve)&&ve.length>0;if(!q)return null;var Z=i()(i()({},R),Te);return(0,I.jsx)(b.A,i()(i()({size:Fe},ne),{},{children:ve.map(function(te){var ae={locale:Ae,disabled:k,loading:xe,submitText:X,resetText:Y};te===p.submit?ae.handleSubmit=Oe:te===p.reset&&(ae.handleReset=Se);var pe=Z[te];return pe?(0,I.jsx)(c.Fragment,{children:pe==null?void 0:pe(ae)},te):null})}))},f=g,O=e(55420),x=e.n(O),j=e(98312),D=e.n(j),B=e(11604),$=e.n(B),T=e(99651),K=e(82229);function F(me){var G=me.props,k=me.coreRef,ne=(0,c.useState)(t),re=$()(ne,2),ve=re[0],xe=re[1],Te=(0,T.A)((function(){var Ae=D()(x()().mark(function X(Y,q){return x()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return xe(function(ae){return i()(i()({},ae),{},S()({},Y,!0))}),te.next=3,q().catch(function(ae){K.A.warn(ae)});case 3:xe(function(ae){return i()(i()({},ae),{},S()({},Y,!1))});case 4:case"end":return te.stop()}},X)}));return function(X,Y){return Ae.apply(this,arguments)}})()),Se=(0,T.A)(function(){Te(p.submit,D()(x()().mark(function Ae(){var X,Y;return x()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(k.current){Z.next=2;break}return Z.abrupt("return");case 2:if(!G.validateFormOnSubmit){Z.next=8;break}return Z.next=5,k.current.validate();case 5:if(Y=Z.sent,!(Y.hasError||Y.hasWarning)){Z.next=8;break}return Z.abrupt("return");case 8:return Z.next=10,(X=G.onSubmit)===null||X===void 0?void 0:X.call(G,k.current.getValue());case 10:case"end":return Z.stop()}},Ae)})))}),Oe=(0,T.A)(function(Ae){Ae.preventDefault(),Ae.stopPropagation(),Se()}),Fe=(0,T.A)(function(){Te(p.reset,D()(x()().mark(function Ae(){var X,Y,q,Z;return x()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(k.current){ae.next=2;break}return ae.abrupt("return");case 2:return ae.next=4,(X=G.onBeforeReset)===null||X===void 0?void 0:X.call(G,k.current.getValue());case 4:return q=ae.sent,Z=i()({},q),k.current.setValue(Z),k.current.resetError(),ae.next=10,(Y=G.onReset)===null||Y===void 0?void 0:Y.call(G,Z);case 10:case"end":return ae.stop()}},Ae)})))});return{handleFormSubmit:Oe,handleSubmit:Se,handleReset:Fe,actionsLoading:ve,isLoading:ve.submit||ve.reset}}var H=e(96805),U=e(28073),V={main:"KJktzdbIf6ks6VzJokOi",header:"W1VzXHn16gct5GcAQzAJ",title:"u9uqtcpUufcUHpxoTX8i",mark:"nTrbqAVZyQszXeIv0c0x",titleTooltip:"PJv9lp7OIAhz09e0Mzc4",body:"rcElCiD94RYg1EDwB1Ks",footer:"Or0SQj4yW5w2FsZNGqSx",description:"Ar4nHGzakHcHpxyEgDsm",errorMsg:"Uboc8A0zOlwiit1DFVUs",warningMsg:"bBWNfGgbPgIM39mCuAv5"},z=L.A,J=function(G){var k=G.schema,ne=G.required,re=G.prefixClassNames,ve=G.labelColon,xe=!!ve;return(0,I.jsxs)(I.Fragment,{children:[ne&&(0,I.jsx)("span",{className:z(re("item-mark"),V.mark),children:"*"}),(0,I.jsx)("span",{className:z(re("item-title"),V.title),children:k.title}),!!k.titleDescription&&(0,I.jsx)(U.A,{placement:"top",trigger:"hover",content:k.titleDescription,children:(0,I.jsx)(H.A,{className:z(re("item-title-tooltip"),V.titleTooltip),style:{marginRight:xe?4:void 0}})}),xe&&(0,I.jsx)("span",{className:z(re("item-colon")),children:ve})]})},Q=function(G){var k=G.body,ne=G.schema,re=G.validator,ve=G.required,xe=G.disabled,Te=G.readonly,Se=G.userCtx,Oe=G.prefixClassNames,Fe=h(),Ae=Fe.labelWidth,X=Fe.labelColon,Y=Fe.labelGap,q=Fe.labelRender,Z=Fe.locale,te=q||J,ae={schema:ne,required:ve,disabled:xe,readonly:Te,userCtx:Se,prefixClassNames:Oe,labelWidth:Ae,labelColon:X,labelGap:Y,locale:Z};return(0,I.jsxs)("div",{className:z(Oe("item-layout-horizontal")),children:[(0,I.jsxs)("div",{className:z(Oe("item-main"),V.main),children:[(0,I.jsx)("div",{className:z(Oe("item-header"),V.header),style:{flexBasis:Ae,marginRight:Y},children:te(ae)}),(0,I.jsx)("div",{className:z(Oe("item-body"),V.body),children:k})]}),(0,I.jsxs)("div",{className:z(Oe("item-footer"),V.footer),style:{paddingLeft:A.Et(Ae)?Ae+Y:0},children:[re.status==="error"&&!!re.message&&(0,I.jsx)("div",{className:z(Oe("item-error-msg"),V.errorMsg),children:re.message}),re.status==="warning"&&!!re.message&&(0,I.jsx)("div",{className:z(Oe("item-warning-msg"),V.warningMsg),children:re.message}),!!ne.description&&(0,I.jsx)("div",{className:z(Oe("item-description"),V.description),children:ne.description})]})]})},ee=Q,w={header:"cXgCcSVvNlsIaSBsMlHM",title:"Q3eNxjI6cLAZBBW2_yas",mark:"BuWsBZA0kykyRHVVzIdZ",titleTooltip:"hJ0d8TOr3t8ohz2ebCeX",footer:"evsVbV8JQZUkwdzenShU",description:"E03i6p7KIc4amADSI9O2",errorMsg:"XpfzMTzdt2UStOnYDFHa",warningMsg:"GfBuXM4GhVwvjTHc_dZO"},oe=L.A,ie=function(G){var k=G.schema,ne=G.required,re=G.prefixClassNames,ve=G.labelColon,xe=!!ve;return(0,I.jsxs)(I.Fragment,{children:[ne&&(0,I.jsx)("span",{className:oe(re("item-mark"),w.mark),children:"*"}),(0,I.jsx)("span",{className:oe(re("item-title"),w.title),children:k.title}),!!k.titleDescription&&(0,I.jsx)(U.A,{placement:"top",trigger:"hover",content:k.titleDescription,children:(0,I.jsx)(H.A,{className:oe(re("item-title-tooltip"),w.titleTooltip),style:{marginRight:xe?4:void 0}})}),xe&&(0,I.jsx)("span",{className:oe(re("item-colon")),children:ve})]})},fe=function(G){var k=G.body,ne=G.schema,re=G.validator,ve=G.required,xe=G.disabled,Te=G.readonly,Se=G.userCtx,Oe=G.prefixClassNames,Fe=h(),Ae=Fe.labelWidth,X=Fe.labelColon,Y=Fe.labelGap,q=Fe.labelRender,Z=Fe.locale,te=q||ie,ae={schema:ne,required:ve,disabled:xe,readonly:Te,userCtx:Se,prefixClassNames:Oe,labelWidth:Ae,labelColon:X,labelGap:Y,locale:Z};return(0,I.jsxs)("div",{className:Oe("item-layout-vertical"),children:[(0,I.jsx)("div",{className:oe(Oe("item-header"),w.header),children:te(ae)}),(0,I.jsx)("div",{className:Oe("item-body"),children:k}),(0,I.jsxs)("div",{className:oe(Oe("item-footer"),w.footer),children:[re.status==="error"&&!!re.message&&(0,I.jsx)("div",{className:oe(Oe("item-error-msg"),w.errorMsg),children:re.message}),re.status==="warning"&&!!re.message&&(0,I.jsx)("div",{className:oe(Oe("item-warning-msg"),w.warningMsg),children:re.message}),!!ne.description&&(0,I.jsx)("div",{className:oe(Oe("item-description"),w.description),children:ne.description})]})]})},se=fe;function Pe(me){var G=me.itemLayout,k=(0,c.useMemo)(function(){return!G||G==="horizontal"?ee:G==="vertical"?se:G},[G]);return k}var ge=A.cy,ue=A.gD,Ke=A.Gv;function Ce(me,G){var k="".concat(s,"_").concat(Date.now());return i()(i()({},me),{},{properties:i()(i()({},me==null?void 0:me.properties),{},S()({},k,i()(i()({},G),{},{renderType:s})))})}function je(me){var G=me.itemLayout,k=me.labelWidth,ne=me.labelGap;return G==="horizontal"&&A.Et(k)?k+ne:0}function He(){for(var me=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],G=arguments.length>1?arguments[1]:void 0,k=0;k<me.length;k++){var ne=me[k],re=Ke(ne)?ne:{label:ne,value:ne},ve=G(re);if(ve)return}}function Be(me,G){var k=[];return!ge(me)||!ge(G)||G.forEach(function(ne){ue(ne)||He(me,function(re){if(ne===re.value)return k.push(re.label),!0})}),k}function ze(me,G){var k=[];return!ge(me)||!ge(G)||He(me,function(ne){G.includes(ne.value)&&k.push(ne)}),k}function Ge(me){return!!(ue(me)||me==="")}function _e(me){var G=me.schema,k=me.actionsRestSchema,ne=me.actionsRenderMode;return(0,c.useMemo)(function(){return ne===o.normal?G:Ce(G,k)},[G,k,ne])}var ke={formRender:"y_rJEiPMcFoaaCwgDsVT"},qe=e(98732),rn=e(69809),tn=function(G){var k=G.children,ne=h(),re=ne.readonlyPlaceholder;return(0,I.jsx)(I.Fragment,{children:Ge(k)?re:k})},Ye=tn,cn=function(G){var k=G.schema,ne=G.disabled,re=G.value,ve=G.onChange,xe=(0,T.A)(function(Te){var Se;ve(Te,{extra:{checkedOptions:ze((Se=k.renderOptions)===null||Se===void 0?void 0:Se.options,Te)}})});return(0,I.jsx)(rn.A.Group,i()(i()({},k.renderOptions),{},{value:re,onChange:xe,disabled:ne}))},Je=function(G){var k,ne=G.schema,re=G.value,ve=G.locale,xe=Be((k=ne.renderOptions)===null||k===void 0?void 0:k.options,re);return(0,I.jsx)(Ye,{children:xe.join(ve.FormRender.comma)})},Mn={component:cn,readonlyComponent:Je},an=e(57360),An=e(74353),en=e.n(An),Ln=function(G){var k=G.schema,ne=G.value,re=G.onChange,ve=G.disabled,xe=G.locale,Te=G.validator,Se=(0,c.useMemo)(function(){return W._0(xe.FormRender.placeholderSelect,{title:k.title})},[k.title,xe.FormRender.placeholderSelect]),Oe=(0,T.A)(function(Fe){var Ae,X=(Ae=k.renderOptions)===null||Ae===void 0?void 0:Ae.outputFormat;re(Fe?X?en()(Fe).format(X):en()(Fe).toISOString():void 0)});return(0,I.jsx)(an.A,i()(i()({allowClear:!0,placeholder:Se,style:{width:"100%"}},k.renderOptions),{},{status:Te.status,value:ne?en()(ne):null,onChange:Oe,disabled:ve}))},pn=function(G){var k,ne,re=G.schema,ve=G.value;return(0,I.jsx)(Ye,{children:ve?en()(ve).format(((k=re.renderOptions)===null||k===void 0?void 0:k.format)||((ne=re.renderOptions)!==null&&ne!==void 0&&ne.showTime?r:n)):""})},jn={component:Ln,readonlyComponent:pn};function un(me,G){return G?en()(me).format(G):en()(me).toISOString()}function xn(me){var G=(me==null?void 0:me.start)||"start",k=(me==null?void 0:me.end)||"end";return{startField:G,endField:k}}function mn(me,G){var k,ne;if((G==null?void 0:G.valueStruct)==="object"){var re=xn(G==null?void 0:G.valueFieldMap),ve=re.startField,xe=re.endField;k=me[ve],ne=me[xe]}else k=me[0],ne=me[1];return[en()(k),en()(ne)]}function Bn(me,G,k,ne){var re=un(me,k),ve=un(G,k);if((ne==null?void 0:ne.valueStruct)==="object"){var xe=xn(ne==null?void 0:ne.valueFieldMap),Te=xe.startField,Se=xe.endField;return S()(S()({},Te,re),Se,ve)}return[re,ve]}var $n=function(G){var k=G.schema,ne=G.value,re=G.onChange,ve=G.disabled,xe=G.validator,Te=k.renderOptions||{},Se=Te.showTime,Oe=Te.outputFormat;return(0,I.jsx)(an.A.RangePicker,i()(i()({allowClear:!0,allowEmpty:!0,style:{width:"100%"}},k.renderOptions),{},{disabled:ve,status:xe.status,value:ne?mn(ne,k.renderOptions):null,onChange:function(Ae){if(Ae&&Ae[0]&&Ae[1]){var X=Se?Ae[0]:Ae[0].startOf("day"),Y=Se?Ae[1]:Ae[1].endOf("day");re(Bn(X,Y,Oe,k.renderOptions))}else re(void 0)}}))},Nn=function(G){var k=G.schema,ne=G.value,re=G.locale,ve="";if(A.cy(ne)||A.Qd(ne)){var xe,Te,Se,Oe=mn(ne,k.renderOptions),Fe=$()(Oe,2),Ae=Fe[0],X=Fe[1],Y=(xe=k.renderOptions)!==null&&xe!==void 0&&xe.showTime?r:n,q=((Te=k.renderOptions)===null||Te===void 0?void 0:Te.format)||Y,Z=((Se=k.renderOptions)===null||Se===void 0?void 0:Se.displayTextTemplate)||re.FormRender.displayDateRange;ve=W._0(Z,{start:Ae.format(q),end:X.format(q)})}return(0,I.jsx)(Ye,{children:ve})},Kn={component:$n,readonlyComponent:Nn},Fn=function(G){var k=G.value;return(0,I.jsx)(Ye,{children:k})},Wn={component:Fn},Un=function(G){var k=G.disabled;return(0,I.jsx)(f,{disabled:k})},ln={formItem:Un},hn=e(77651),zn=["validateOnBlur"],Hn=function(G){var k=G.schema,ne=G.disabled,re=G.value,ve=G.onChange,xe=G.validator,Te=G.locale,Se=k.renderOptions||{},Oe=Se.validateOnBlur,Fe=N()(Se,zn),Ae=(0,c.useMemo)(function(){return W._0(Te.FormRender.placeholderInput,{title:k.title})},[k.title,Te.FormRender.placeholderInput]),X=(0,T.A)(function(q){ve(q!=null?q:void 0,{triggerValidator:!Oe})}),Y=(0,T.A)(function(){ve(re,{triggerValidator:!0})});return(0,I.jsx)(hn.A,i()(i()({style:{width:"100%"},placeholder:Ae},Fe),{},{status:xe.status,value:re,onChange:X,onBlur:Oe?Y:void 0,disabled:ne}))},Vn=function(G){var k=G.value;return(0,I.jsx)(Ye,{children:k})},_n={component:Hn,readonlyComponent:Vn},vn=e(35767),Gn=["validateOnBlur"],Yn=function(G){var k=G.schema,ne=G.disabled,re=G.value,ve=G.onChange,xe=G.validator,Te=G.locale,Se=k.renderOptions||{},Oe=Se.validateOnBlur,Fe=N()(Se,Gn),Ae=(0,c.useMemo)(function(){return W._0(Te.FormRender.placeholderInput,{title:k.title})},[k.title,Te.FormRender.placeholderInput]),X=(0,T.A)(function(q){var Z=q.target.value;Z!==re&&ve(Z||void 0,{triggerValidator:!Oe})}),Y=(0,T.A)(function(){ve(re,{triggerValidator:!0})});return(0,I.jsx)(vn.A,i()(i()({placeholder:Ae},Fe),{},{status:xe.status,value:re!=null?re:"",onChange:X,onBlur:Oe?Y:void 0,disabled:ne}))},Qn=function(G){var k=G.value;return(0,I.jsx)(Ye,{children:k})},Jn={component:Yn,readonlyComponent:Qn},gn=e(34309),En=e(21612),Pn=function(G){var k,ne,re=G.schema,ve=G.path,xe=G.objectStyle,Te=(0,c.useState)(!1),Se=$()(Te,2),Oe=Se[0],Fe=Se[1],Ae=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("span",{children:re.title}),!!re.titleDescription&&(0,I.jsx)(U.A,{placement:"top",trigger:"hover",content:re.titleDescription,children:(0,I.jsx)(H.A,{style:{marginLeft:4}})})]});return(0,I.jsx)(En.A,i()(i()({},(k=re.renderOptions)===null||k===void 0?void 0:k.headerOptions),{},{activeKey:String(Oe),onChange:function(){return Fe(!Oe)},children:(0,c.createElement)(En.A.Panel,i()(i()({},(ne=re.renderOptions)===null||ne===void 0?void 0:ne.panelOptions),{},{header:Ae,key:"false"}),(0,I.jsx)("div",{style:xe,children:(0,I.jsx)(gn.A,{schema:re,path:ve})}))}))},Xn={formItem:Pn},Zn=function(G){var k=G.schema,ne=G.path,re=G.objectStyle;return(0,I.jsx)("div",{style:re,children:(0,I.jsx)(gn.A,{schema:k,path:ne})})},wn={formItem:Zn},kn=["validateOnBlur"],qn=function(G){var k=G.schema,ne=G.disabled,re=G.value,ve=G.onChange,xe=G.validator,Te=G.locale,Se=k.renderOptions||{},Oe=Se.validateOnBlur,Fe=N()(Se,kn),Ae=(0,c.useMemo)(function(){return W._0(Te.FormRender.placeholderInput,{title:k.title})},[k.title,Te.FormRender.placeholderInput]),X=(0,T.A)(function(q){var Z=q.target.value;Z!==re&&ve(Z||void 0,{triggerValidator:!Oe})}),Y=(0,T.A)(function(){ve(re,{triggerValidator:!0})});return(0,I.jsx)(vn.A.Password,i()(i()({placeholder:Ae},Fe),{},{status:xe.status,value:re!=null?re:"",onChange:X,onBlur:Oe?Y:void 0,disabled:ne}))},er=function(G){var k=G.value;return(0,I.jsx)(Ye,{children:k})},nr={component:qn,readonlyComponent:er},rr=e(51643),In=function(G){var k=G.schema,ne=G.disabled,re=G.value,ve=G.onChange;return(0,I.jsx)(rr.Ay.Group,i()(i()({},k.renderOptions),{},{value:re,onChange:function(Te){return ve(Te.target.value)},disabled:ne}))},tr=function(G){var k,ne=G.schema,re=G.value,ve=Be((k=ne.renderOptions)===null||k===void 0?void 0:k.options,[re]);return(0,I.jsx)(Ye,{children:ve[0]})},ar={component:In,readonlyComponent:tr},Tn=e(90479),or=function(G){var k=G.schema,ne=G.disabled,re=G.readonly,ve=G.value,xe=G.onChange;return(0,I.jsx)(Tn.A,i()(i()({},k.renderOptions),{},{value:ve!=null?ve:0,onChange:xe,disabled:ne||re}))},bn={component:or},Dn=e(58679),sr=function(G){var k=G.schema,ne=G.disabled,re=G.value,ve=G.onChange,xe=G.locale,Te=G.validator,Se=(0,c.useMemo)(function(){return W._0(xe.FormRender.placeholderSelect,{title:k.title})},[k.title,xe.FormRender.placeholderSelect]);return(0,I.jsx)(Dn.A,i()(i()({allowClear:!0,style:{width:"100%"},placeholder:Se},k.renderOptions),{},{status:Te.status,mode:void 0,value:re!=null?re:null,onChange:function(Fe){return ve(Fe)},disabled:ne}))},lr=function(G){var k,ne,re=G.schema,ve=G.value,xe=G.locale,Te=Be((k=re.renderOptions)===null||k===void 0?void 0:k.options,[ve]);return(0,I.jsx)(Ye,{children:Te.join((ne=xe.FormRender)===null||ne===void 0?void 0:ne.comma)})},dr={component:sr,readonlyComponent:lr},ur=function(G){var k=G.schema,ne=G.disabled,re=G.value,ve=G.onChange,xe=G.validator,Te=G.locale,Se=(0,c.useMemo)(function(){return W._0(Te.FormRender.placeholderSelect,{title:k.title})},[k.title,Te.FormRender.placeholderSelect]),Oe=(0,T.A)(function(Fe,Ae){ve(Fe,{extra:{selectedOptions:Ae}})});return(0,I.jsx)(Dn.A,i()(i()({allowClear:!0,style:{width:"100%"},placeholder:Se},k.renderOptions),{},{status:xe.status,mode:"multiple",value:re,onChange:Oe,disabled:ne}))},mr=function(G){var k,ne,re=G.schema,ve=G.value,xe=G.locale,Te=Be((k=re.renderOptions)===null||k===void 0?void 0:k.options,ve);return(0,I.jsx)(Ye,{children:Te.join((ne=xe.FormRender)===null||ne===void 0?void 0:ne.comma)})},Cn={component:ur,readonlyComponent:mr},ir=e(79508),cr=function(G){var k=G.schema,ne=G.disabled,re=G.readonly,ve=G.value,xe=G.onChange;return(0,I.jsx)(ir.A,i()(i()({},k.renderOptions),{},{checked:ve,onChange:function(Se){return xe(Se)},disabled:ne||re}))},pr={component:cr},hr={switchBox:"hQFhxJ_W2UD57V313BGA"},vr=["text","rightExtraContent","rootClassName","rootStyle"],Ir=function(G){var k=G.schema,ne=G.disabled,re=G.readonly,ve=G.value,xe=G.onChange,Te=k.renderOptions||{},Se=Te.text,Oe=Te.rightExtraContent,Fe=Te.rootClassName,Ae=Te.rootStyle,X=N()(Te,vr),Y=A.Tn(Oe)?Oe({value:ve,disabled:ne,readonly:re}):Oe;return(0,I.jsxs)("div",{className:L.A(Fe,hr.switchBox),style:Ae,children:[(0,I.jsx)(rn.A,i()(i()({},X),{},{checked:ve,onChange:function(Z){return xe(Z.target.checked)},disabled:ne||re,children:Se})),Y]})},Sn={component:Ir},fr=["validateOnBlur"],yr=function(G){var k=G.schema,ne=G.disabled,re=G.value,ve=G.onChange,xe=G.validator,Te=G.locale,Se=k.renderOptions||{},Oe=Se.validateOnBlur,Fe=N()(Se,fr),Ae=(0,c.useMemo)(function(){return W._0(Te.FormRender.placeholderInput,{title:k.title})},[k.title,Te.FormRender.placeholderInput]),X=(0,T.A)(function(q){var Z=q.target.value;Z!==re&&ve(Z||void 0,{triggerValidator:!Oe})}),Y=(0,T.A)(function(){ve(re,{triggerValidator:!0})});return(0,I.jsx)(vn.A.TextArea,i()(i()({rows:3,placeholder:Ae},Fe),{},{status:xe.status,value:re!=null?re:"",onChange:X,onBlur:Oe?Y:void 0,disabled:ne}))},xr=function(G){var k=G.value;return(0,I.jsx)(Ye,{children:k})},gr={component:yr,readonlyComponent:xr},fn,Er=(fn={},S()(S()(S()(S()(S()(S()(S()(S()(S()(S()(fn,s,ln),"Object",Xn),"ObjectNull",wn),"InputText",Jn),"InputNumber",_n),"Password",nr),"TextArea",gr),"Radio",ar),"Checkbox",Mn),"Switch",pr),S()(S()(S()(S()(S()(S()(S()(fn,"SwitchBox",Sn),"DatePicker",jn),"DateRangePicker",Kn),"Description",Wn),"Rate",bn),"Select",dr),"SelectMultiple",Cn)),Pr=Er,Tr=function(G,k){var ne=i()(i()({},a),G),re=(0,c.useRef)(null);(0,c.useImperativeHandle)(k,function(){return re.current});var ve=(0,c.useMemo)(function(){return i()(i()({},Pr),ne.renderers)},[ne.renderers]),xe=(0,c.useMemo)(function(){return i()(i()({},qe.A),ne.locale)},[ne.locale]),Te=Pe(ne),Se=F({props:ne,coreRef:re}),Oe=Se.handleFormSubmit,Fe=Se.handleSubmit,Ae=Se.handleReset,X=Se.actionsLoading,Y=Se.isLoading,q=_e(v.Up(ne,"schema","actionsRestSchema","actionsRenderMode")),Z=i()(i()({},v.Up(ne,"labelWidth","labelGap","labelColon","labelRender","layoutColumnGap","layoutRowGap","actions","registerActions","readonlyPlaceholder","submitText","resetText")),{},{locale:xe,actionsLoading:X,handleSubmit:Fe,handleReset:Ae}),te=ne.disableFormOnActionLoading?ne.disabled||Y:ne.disabled;return(0,I.jsx)(d.Provider,{value:Z,children:(0,I.jsxs)("form",{onSubmit:Oe,className:L.A(ne.rootClassName,ke.formRender),style:ne.rootStyle,children:[(0,I.jsx)(C.default,i()(i()({},ne),{},{ref:re,schema:q,locale:xe,renderers:ve,itemLayout:Te,disabled:te})),ne.actionsRenderMode===o.normal&&(0,I.jsx)(f,{disabled:te,className:W.tc(ne.prefixCls,"form-actions"),style:{marginTop:ne.layoutRowGap,marginLeft:je(ne)}})]})})},br=(0,c.forwardRef)(Tr),Dr=br}),99998:(function(_,m,e){e.r(m);var P=e(1974),i=e.n(P),v=e(96754);m.default=i()(i()({},v.default),{},{FormRender:{submit:"Submit",reset:"Reset",placeholderInput:"Please enter ${title}",placeholderSelect:"Please select ${title}",comma:",",displayDateRange:"${start} to ${end}"}})}),98732:(function(_,m,e){var P=e(1974),i=e.n(P),v=e(62672);m.A=i()(i()({},v.A),{},{FormRender:{submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",placeholderInput:"\u8BF7\u8F93\u5165${title}",placeholderSelect:"\u8BF7\u9009\u62E9${title}",comma:"\uFF0C",displayDateRange:"${start} \u81F3 ${end}"}})}),2552:(function(_,m,e){e.r(m),e.d(m,{default:function(){return j}});var P=e(1974),i=e.n(P),v=e(59758),L=e(60182),C=e(6796),W=e(50400),c=e(96540),u={submit:"submit",reset:"reset",collapse:"collapse"},N={prefixCls:"schema-render",layoutColumnGap:10,layoutRowGap:15,actions:[u.reset,u.submit,u.collapse],defaultCollapsed:!0,collapsedRows:2},E=e(11604),S=e.n(E),A=e(75389),M=e(6119),b=e(99651);function p(D,B,$){var T;if($)return $(D);if(!D)return 5;var K=D.clientWidth,F=((T=D.firstElementChild)===null||T===void 0||(T=T.getBoundingClientRect())===null||T===void 0?void 0:T.width)||320;return Math.floor(K/F)*B-1}var o=e(59224),a=e.n(o);function t(D,B){var $={},T=Object.keys(D.properties).slice(0,B),K=a()(T),F;try{for(K.s();!(F=K.n()).done;){var H=F.value;$[H]=D.properties[H]}}catch(U){K.e(U)}finally{K.f()}return{renderType:"Root",properties:$}}function s(D){var B=D.isCollapsed,$=D.rawSchema,T=D.collapsedNumber;return B?t($,T):$}var n=e(60145);function r(D){return n.Qd(D)?Object.keys(D).length:n.cy(D)||n.Kg(D)?D.length:0}var l=e(53476);function d(D,B){var $=(0,l.A)(B),T=(0,c.useRef)(-1);(0,c.useEffect)(function(){var K,F=(K=D.current)===null||K===void 0?void 0:K.getRootElement();if(F){var H=new ResizeObserver(function(U){var V=U[0].contentRect.width;T.current!==V&&(T.current=V,$.current(F))});return H.observe(F),function(){return H.disconnect()}}},[])}var h=e(74848);function I(D,B){var $=D.schema,T=(0,c.useState)(D.defaultCollapsed),K=S()(T,2),F=K[0],H=K[1],U=(0,c.useState)(function(){var ie;return p((ie=B.current)===null||ie===void 0?void 0:ie.getRootElement(),D.collapsedRows,D.calcCollapsedNumber)}),V=S()(U,2),z=V[0],J=V[1],Q=(0,c.useRef)($);(0,c.useMemo)(function(){Q.current=s({isCollapsed:F,collapsedNumber:z,rawSchema:$})},[z,F,$]),d(B,function(ie){J(p(ie,D.collapsedRows,D.calcCollapsedNumber))});var ee=(0,b.A)(function(ie){var fe;H(ie),(fe=D.onToggleCollapsed)===null||fe===void 0||fe.call(D,ie)}),w=(0,b.A)(function(ie){var fe,se=ie.locale;if(r($.properties)<=z)return null;if(F){var Pe;return(0,h.jsxs)(W.A,{type:"link",onClick:function(){return ee(!1)},style:{padding:0},children:[se==null||(Pe=se.Search)===null||Pe===void 0?void 0:Pe.expand,(0,h.jsx)(A.A,{})]})}return(0,h.jsxs)(W.A,{type:"link",onClick:function(){return ee(!0)},style:{padding:0},children:[se==null||(fe=se.Search)===null||fe===void 0?void 0:fe.collapse,(0,h.jsx)(M.A,{})]})}),oe=i()({collapse:w},D.registerActions);return{schema:Q.current,registerActions:oe}}var y=e(71485),R=e(34972);function g(D){return{className:R.tc(D,"form-actions"),style:{gridColumnStart:-2,textAlign:"end"}}}var f={submit:function(B){var $=B.loading,T=B.locale,K=B.submitText,F=B.disabled;return(0,h.jsx)(W.A,{type:"primary",htmlType:"submit",icon:(0,h.jsx)(v.A,{}),loading:$.submit,disabled:$.submit?!1:F||$.reset,children:K||T.FormRender.submit})},reset:function(B){var $=B.loading,T=B.locale,K=B.handleReset,F=B.resetText,H=B.disabled;return(0,h.jsx)(W.A,{htmlType:"button",icon:(0,h.jsx)(L.A,{}),loading:$.reset,disabled:$.reset?!1:H||$.submit,onClick:K,children:F||T.FormRender.reset})}},O=function(B,$){var T=i()(i()({},N),B),K=(0,c.useRef)(null),F=(0,c.useMemo)(function(){return i()(i()({},y.A),T.locale)},[T.locale]),H=I(T,K),U=H.schema,V=H.registerActions,z=(0,c.useMemo)(function(){return g(T.prefixCls)},[T.prefixCls]);return(0,c.useImperativeHandle)($,function(){return K.current}),(0,h.jsx)(C.default,i()(i()({layout:"autoFill"},T),{},{ref:K,locale:F,schema:U,registerActions:i()(i()({},f),V),actionsRestSchema:z,actionsRenderMode:"formItem"}))},x=(0,c.forwardRef)(O),j=x}),51763:(function(_,m,e){e.r(m);var P=e(1974),i=e.n(P),v=e(99998);m.default=i()(i()({},v.default),{},{FormRender:i()(i()({},v.default.FormRender),{},{submit:"Search"}),Search:{collapse:"Collapse",expand:"Expand"}})}),71485:(function(_,m,e){var P=e(1974),i=e.n(P),v=e(98732);m.A=i()(i()({},v.A),{},{FormRender:i()(i()({},v.A.FormRender),{},{submit:"\u67E5\u8BE2"}),Search:{collapse:"\u6536\u8D77",expand:"\u5C55\u5F00"}})}),27395:(function(_,m,e){e.r(m),e.d(m,{default:function(){return Ae}});var P=e(1974),i=e.n(P),v=e(1097),L=e(60145),C=e(99651),W=e(41455),c=e(73620),u=e(96540),N=L.cy,E=L.Qd,S=L.Kg,A=L.gD,M=function(Y){return N(Y)?!Y.length:E(Y)?!Object.keys(Y).length:S(Y)?Y.trim()==="":A(Y)};function b(X,Y){return N(X)?X.map(Y):[]}function p(X,Y){if(X)for(var q=X.length,Z=0;Z<q;Z++){var te=Y==null?void 0:Y(X[Z],Z,X);if(te)return}}function o(){return Math.random().toString(36).substring(7).replace(/\d/g,"x")}var a=o(),t=(function(X){return X.actions="__actions__",X.rowNumber="__row-number__",X})({}),s={table:"st-table-".concat(a),pagination:"st-pagination-".concat(a)},n=e(82846),r=e(71640),l=e.n(r),d=e(79508),h=e(82591),I=e(73611),y=e(88826),R=e(90479),g=e(11604),f=e.n(g),O=e(92984),x=e(74848),j=function(Y){var q=Y.imgList,Z=Y.imgProps,te=Y.groupProps,ae=(0,u.useState)(!1),pe=f()(ae,2),le=pe[0],de=pe[1],he=(0,u.useState)(0),ce=f()(he,2),ye=ce[0],Me=ce[1],$e=function(Ee){Me(Ee),de(!0)};return(0,x.jsx)(O.A.PreviewGroup,i()(i()({},te),{},{items:q,preview:{visible:le,current:ye,onChange:function(Ee){return Me(Ee)},onVisibleChange:function(Ee){return de(Ee)}},children:(0,x.jsx)(h.A,{children:q.map(function(Le,Ee){return(0,u.createElement)(O.A,i()(i()({width:60},Z),{},{src:Le,key:Ee,onClick:function(){return $e(Ee)}}))})})}))},D=j,B={backgroundColor:"#ececec",padding:16,borderRadius:6,textAlign:"left"},$=new RegExp("(?<!\\d*\\.\\d*)(?=(\\B\\d{3})+(\\.\\d+)?$)","g"),T=function(Y){var q=Y.value;return M(q)?"-":isNaN(Number(q))?q:String(q).replace($,",")},K=T,F="...",H=function(Y,q,Z){var te=Array.from(Y);if(te.length<=q)return Y;var ae=F.length,pe=Math.max(0,q-ae);if(pe===0)return te.slice(0,q);if(Z==="start")return"".concat(F).concat(te.slice(-pe).join(""));if(Z==="middle"){var le=Math.ceil(pe/2),de=Math.floor(pe/2),he=te.slice(0,le).join(""),ce=de>0?te.slice(-de).join(""):"";return"".concat(he).concat(F).concat(ce)}return"".concat(te.slice(0,pe).join("")).concat(F)},U=function(Y){var q=Y.value,Z=Y.options,te=Z===void 0?{}:Z,ae=M(q)?"-":String(q),pe=te.maxLength,le=pe===void 0?10:pe,de=te.placement,he=de===void 0?"end":de,ce=te.tooltipProps,ye=H(ae,le,he);return ye===ae?(0,x.jsx)(x.Fragment,{children:ae}):(0,x.jsx)(y.A,i()(i()({title:ae},ce),{},{children:(0,x.jsx)("span",{children:ye})}))},V=U,z=e(50400),J=e(86830),Q=(0,u.createContext)({}),ee=Q;function w(){var X=(0,u.useContext)(ee);return X}var oe=function(Y){var q=Y.value,Z=Y.options,te=Z===void 0?{}:Z,ae=M(q)?"-":String(q),pe=te.maxLength,le=pe===void 0?10:pe,de=te.btnText,he=te.modalProps,ce=te.modalContent,ye=(0,u.useState)(!1),Me=f()(ye,2),$e=Me[0],Le=Me[1],Ee=w();return ae.length>le?(0,x.jsxs)(x.Fragment,{children:[H(ae,le,"end"),(0,x.jsx)(z.A,{type:"link",style:{padding:0},onClick:function(){return Le(!0)},children:de||Ee.locale.SearchTable.longTextModalLabel}),(0,x.jsx)(J.A,i()(i()({width:600,title:Ee.locale.SearchTable.longTextModalTitle,footer:null},he),{},{open:$e,onCancel:function(){return Le(!1)},children:ce||ae}))]}):(0,x.jsx)(x.Fragment,{children:ae})},ie=oe,fe=["groupProps"],se=L.cy,Pe=n.I6,ge={code:function(Y){var q=Y.value,Z=Y.options;return(0,x.jsx)("pre",{style:i()(i()({},B),Z.style),children:(0,x.jsx)("code",{children:q})})},percent:function(Y){var q=Y.value;return M(q)?"-":"".concat(q,"%")},switch:function(Y){var q=Y.value,Z=Y.options;return(0,x.jsx)(d.A,i()(i()({},Z),{},{checked:!!q}))},tags:function(Y){var q=Y.value,Z=Y.options,te=Z.options,ae=Z.tooltipProps,pe=Z.spaceProps,le=se(q)?q:[q];return(0,x.jsx)(h.A,i()(i()({},pe),{},{children:le.map(function(de,he){var ce=te?Pe(te,{value:de}):null,ye=(0,u.createElement)(I.A,i()(i()({variant:"outlined"},ce),{},{key:"tag-".concat(he)}),ce?ce.label:de);return ae?(0,u.createElement)(y.A,i()(i()({},ae),{},{key:he}),ye):ye})}))},rate:function(Y){var q=Y.value,Z=Y.options;return(0,x.jsx)(R.A,i()(i()({style:{width:134},disabled:!0},Z),{},{value:q}))},"comma-number":function(Y){return(0,x.jsx)(K,i()({},Y))},images:function(Y){var q=Y.value,Z=Y.options;if(M(q))return"-";var te=se(q)?q:[q],ae=Z.groupProps,pe=l()(Z,fe);return(0,x.jsx)(D,{imgList:te,imgProps:pe,groupProps:ae})},"long-text":function(Y){return(0,x.jsx)(V,i()({},Y))},"long-text-modal":function(Y){return(0,x.jsx)(ie,i()({},Y))}},ue=e(74353),Ke=e.n(ue),Ce=n.Jt,je=L.cy,He=L.Qd;function Be(X,Y){return X===Y?0:X>Y?1:-1}var ze=function(Y,q,Z){var te=Z.sortType,ae=Z.sortOrder,pe=Z.arrDataIndex,le=Z.sortDataExtractor,de=Z.sortStringValueTransform,he=le?le(Y):Ce(Y,pe),ce=le?le(q):Ce(q,pe);return He(he)||He(ce)?0:(je(he)&&(he=he.join("")),je(ce)&&(ce=ce.join("")),he=String(he).trim(),ce=String(ce).trim(),M(he)?ae==="ascend"?1:-1:M(ce)?ae==="ascend"?-1:1:te==="string"?(de&&(he=de(he),ce=de(ce)),Be("@".concat(he).toLowerCase(),"@".concat(ce).toLowerCase())):te==="date"?Be(new Date(he),new Date(ce)):!isNaN(Number(he))&&!isNaN(Number(ce))?Be(Number(he),Number(ce)):Ke()(he).isValid()&&Ke()(ce).isValid()?Be(new Date(he),new Date(ce)):(de&&(he=de(he),ce=de(ce)),Be(he,ce)))},Ge=["title","dataIndex","children","valueType"],_e=["type"],ke=n.Jt,qe=L.cy,rn=L.Kg,tn=L.Tn;function Ye(X,Y,q){return X.map(function(Z){var te=Z.title,ae=Z.dataIndex,pe=Z.children,le=Z.valueType,de=l()(Z,Ge);qe(pe)&&(pe=Ye(pe,Y,q));var he=qe(ae)?ae.join("."):ae,ce=qe(ae)?ae:[ae],ye=Y.sortMode==="local-all"||Y.sortMode==="service-all",Me=!!de.sorter||!!de.sortType||ye,$e=!1;pe||(de.sorter?$e=de.sorter:(ye||de.sortType)&&($e=Y.sortMode==="service-all"?!0:function(Ee,Ie,be){return ze(Ee,Ie,{arrDataIndex:ce,sortOrder:be,sortType:de.sortType,sortDataExtractor:de.sortDataExtractor,sortStringValueTransform:Y.sortStringValueTransform})}));var Le=function(Ie,be,De){var Re=ke(be,ce),Ne="",We=void 0;if(le)if(tn(le)){var Qe=le(be,De),Ve=Qe.type,Ue=l()(Qe,_e);Ne=Ve,We=Ue}else Ne=le;var Xe=q[Ne];return Xe?Xe({value:Re,record:be,options:We||{},index:De}):M(Re)?"-":Re};return i()(i()({align:"center",key:he,width:rn(te)?te.length*16+(Me?50:30):void 0,render:Le},de),{},{title:te,dataIndex:ae,children:pe,sorter:$e})})}var cn=n.d4;function Je(X){var Y=X.table,q=X.globalStateRef,Z=(0,u.useRef)([]),te=q.current.isTabChanging;(0,u.useMemo)(function(){te||(Z.current=Y.columns||[])},[Y.columns,te]);var ae=(0,u.useMemo)(function(){var le=i()(i()({},ge),Y.registerValueType);return cn(le,function(de,he){return he.toLowerCase()})},[Y.registerValueType]),pe=(0,u.useMemo)(function(){return Ye(Z.current,Y,ae)},[Z.current]);return{rawColumns:Z.current,baseColumns:pe}}var Mn=e(55420),an=e.n(Mn),An=e(98312),en=e.n(An),Ln=e(45647),pn=e.n(Ln),jn=e(88654),un=e(82790),xn=e(18831),mn=e(43627),Bn=e(74979),$n=function(Y){var q=Y.items,Z=q===void 0?[]:q,te=Y.onChange,ae=Y.itemClassName,pe=Y.overlayClassName,le=Y.renderItem,de=(0,un.FR)((0,un.MS)(un.cA)),he=(0,u.useState)(null),ce=f()(he,2),ye=ce[0],Me=ce[1],$e=(0,C.A)(function(Le){var Ee=Le.active,Ie=Le.over;if(Ee.id!==Ie.id){var be=Z.findIndex(function(Re){return Re.id===Ee.id}),De=Z.findIndex(function(Re){return Re.id===Ie.id});te==null||te((0,mn.be)(Z,be,De))}Me(null)});return(0,x.jsxs)(un.Mp,{sensors:de,collisionDetection:un.fp,onDragStart:function(Ee){var Ie=Ee.active;return Me(Ie.id)},onDragEnd:$e,modifiers:[xn.FN],children:[(0,x.jsx)(mn.gB,{items:Z,strategy:mn._G,children:Z.map(function(Le,Ee){return(0,x.jsx)(Nn,{className:ae,id:Le.id,itemData:Le,itemIndex:Ee,renderItem:le},Le.id)})}),(0,x.jsx)(un.Hd,{zIndex:9999,children:ye?(0,x.jsx)("div",{className:pe,children:le==null?void 0:le(Z.find(function(Le){return Le.id===ye}),Z.findIndex(function(Le){return Le.id===ye}))}):null})]})};function Nn(X){var Y=X.className,q=X.id,Z=X.itemData,te=X.itemIndex,ae=X.renderItem,pe=(0,mn.gl)({id:q}),le={transform:Bn.Ks.Transform.toString(pe.transform),transition:pe.transition,opacity:pe.isDragging?0:void 0};return(0,x.jsx)("div",{className:Y,ref:pe.setNodeRef,style:le,children:ae==null?void 0:ae(Z,te,pe)})}var Kn=$n,Fn=e(97624),Wn=e(77651);function Un(X){var Y=X.locale,q=Y.SearchTable.settingModalColumnEnum,Z=[{title:q[0],dataIndex:"name",width:250},{title:q[1],dataIndex:"hidden",width:120,render:function(ae,pe){return(0,x.jsx)(d.A,{checked:!ae,onChange:(function(le){function de(he){return le.apply(this,arguments)}return de.toString=function(){return le.toString()},de})(function(le){return pe(!le)})})}},{title:q[2],dataIndex:"width",width:130,render:function(ae,pe){return(0,x.jsx)(Wn.A,{min:1,value:ae,onChange:(function(le){function de(he){return le.apply(this,arguments)}return de.toString=function(){return le.toString()},de})(function(le){le&&pe(le)})})}},{title:q[4],dataIndex:"sort",width:60,algin:"center",render:function(){return(0,x.jsx)(z.A,{type:"text",size:"small",icon:(0,x.jsx)(Fn.A,{}),style:{cursor:"move"}})}}];return Z}var ln={settingContent:"ZDRJtfi0mQAko8QQ3t0s",header:"QAOM154PCv4EfJwXuMGD",list:"LkLIqYE_K14s_LJCkMNb",rowWrapper:"merlP_IozdkGeCwp_YFt",rowWrapperOverlay:"UeufD9AKSlIy1YxIEUVc",row:"LTEO9LAZImQXEcqT5pE2",col:"tHW2QaJsCZklZxvxdAlP",footer:"k0oUhFnmHEmaXGLy4_XN"};function hn(X){return X.map(function(Y){return{id:String(Y.dataIndex),name:Y.title,hidden:Y.hidden,width:Y.width,fixed:Y.fixed}})}var zn=function(Y){var q=Y.defaultColumns,Z=Y.sortColumns,te=Y.onOk,ae=w(),pe=(0,u.useState)(function(){return hn(Z)}),le=f()(pe,2),de=le[0],he=le[1],ce=(0,u.useMemo)(function(){return Un({locale:ae.locale})},[ae.locale]),ye=(0,C.A)(function(Ie,be,De){var Re=pn()(de);Re[Ie][be]=De,he(Re)}),Me=(0,C.A)(function(Ie){he(Ie)}),$e=(0,C.A)(function(){he(hn(Z))}),Le=(0,C.A)(function(){he(hn(q))}),Ee=(0,C.A)(function(){var Ie=[];de.forEach(function(be){var De=be.id,Re=be.width,Ne=be.hidden,We=q.find(function(Qe){return String(Qe.dataIndex)===De});We&&Ie.push(i()(i()({},We),{},{width:Re,hidden:Ne}))}),te==null||te(Ie)});return(0,x.jsxs)("div",{className:ln.settingContent,children:[(0,x.jsx)("div",{className:ln.header,children:ce.map(function(Ie,be){return(0,x.jsx)("div",{className:ln.col,style:{width:Ie.width,justifyContent:Ie.algin},children:Ie.title},be)})}),(0,x.jsx)("div",{className:ln.list,children:(0,x.jsx)(Kn,{items:de,onChange:Me,itemClassName:ln.rowWrapper,overlayClassName:ln.rowWrapperOverlay,renderItem:function(be,De,Re){return(0,x.jsx)("div",{className:ln.row,children:ce.map(function(Ne,We){var Qe=be[Ne.dataIndex],Ve=Ne.dataIndex==="sort"?Re==null?void 0:Re.listeners:{};return(0,x.jsx)("div",i()(i()({className:ln.col,style:{width:Ne.width,justifyContent:Ne.algin}},Ve),{},{children:Ne.render?Ne.render(Qe,function(Ue){return ye(De,Ne.dataIndex,Ue)}):Qe}),"".concat(De).concat(We))})},De)}})}),(0,x.jsx)("div",{className:ln.footer,children:(0,x.jsxs)(h.A,{children:[(0,x.jsx)(z.A,{onClick:Le,children:ae.locale.SearchTable.settingModalResetDefault}),(0,x.jsx)(z.A,{onClick:$e,children:ae.locale.SearchTable.settingModalReset}),(0,x.jsx)(z.A,{type:"primary",onClick:Ee,children:ae.locale.SearchTable.settingModalOk})]})})]})},Hn=zn,Vn=["sortColumns","defaultColumns","onOk"],_n=function(Y){var q=Y.sortColumns,Z=Y.defaultColumns,te=Y.onOk,ae=l()(Y,Vn),pe=w();return(0,x.jsx)(J.A,i()(i()({title:pe.locale.SearchTable.settingModalTitle,width:"auto",centered:!0,destroyOnClose:!0,footer:null},ae),{},{children:(0,x.jsx)(Hn,{sortColumns:q,defaultColumns:Z,onOk:te})}))},vn=_n,Gn=function(Y,q){var Z=[],te={};Y.forEach(function(de){te[String(de.dataIndex)]=de}),q.forEach(function(de){var he=String(de.dataIndex),ce=te[he];if(ce){var ye,Me,$e;Z.push(i()(i()({},ce),{},{width:(ye=de.width)!==null&&ye!==void 0?ye:ce.width,hidden:(Me=de.hidden)!==null&&Me!==void 0?Me:ce.hidden,fixed:($e=de.fixed)!==null&&$e!==void 0?$e:ce.fixed})),delete te[he]}});for(var ae=0,pe=Object.values(te);ae<pe.length;ae++){var le=pe[ae];Z.push(le)}return Z},Yn=n.Up;function Qn(X){var Y=X.baseColumns,q=X.table,Z=X.globalStateRef,te=(0,u.useRef)([]),ae=(0,u.useState)(!1),pe=f()(ae,2),le=pe[0],de=pe[1],he=(0,u.useState)([]),ce=f()(he,2),ye=ce[0],Me=ce[1],$e=Z.current.isTabChanging;(0,u.useMemo)(function(){if(!$e)if(ye.length){var De=q.settingColumnsMergeAlgo||Gn;te.current=De(Y,ye)}else te.current=pn()(Y)},[Y,ye]);var Le=(0,C.A)(function(){de(!0)}),Ee=(0,C.A)(function(){de(!1)}),Ie=(0,C.A)(function(De){var Re;te.current=De,Ee();var Ne=De.map(function(We){return Yn(We,"title","dataIndex","width","hidden","fixed")});(Re=q.onSettingChanged)===null||Re===void 0||Re.call(q,{columns:Ne},q.settingId)}),be=(0,x.jsx)(vn,{open:le,sortColumns:te.current,defaultColumns:Y,onCancel:Ee,onOk:Ie});return(0,jn.A)(en()(an()().mark(function De(){var Re,Ne,We;return an()().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:return Ve.next=2,(Re=q.getSetting)===null||Re===void 0?void 0:Re.call(q,q.settingId);case 2:We=Ve.sent,We!=null&&(Ne=We.columns)!==null&&Ne!==void 0&&Ne.length&&Me(We.columns);case 4:case"end":return Ve.stop()}},De)})),[q.settingId]),{sortColumns:te.current,sortModalHolder:be,openSettingModal:Le,closeSettingModal:Ee}}var Jn=e(75389),gn=e(72589),En=e(79688),Pn=e(82229),Xn=["children","onClick","noLoading"],Zn=Pn.A;function wn(X){var Y=X.children,q=X.onClick,Z=X.noLoading,te=Z===void 0?!1:Z,ae=l()(X,Xn),pe=(0,u.useState)(!1),le=f()(pe,2),de=le[0],he=le[1],ce=(0,C.A)((function(){var ye=en()(an()().mark(function Me($e){return an()().wrap(function(Ee){for(;;)switch(Ee.prev=Ee.next){case 0:if(!te){Ee.next=3;break}return q==null||q($e),Ee.abrupt("return");case 3:return he(!0),Ee.prev=4,Ee.next=7,q==null?void 0:q($e);case 7:Ee.next=12;break;case 9:Ee.prev=9,Ee.t0=Ee.catch(4),Zn.warn(Ee.t0);case 12:he(!1);case 13:case"end":return Ee.stop()}},Me,null,[[4,9]])}));return function(Me){return ye.apply(this,arguments)}})());return(0,x.jsx)(z.A,i()(i()({loading:de},ae),{},{onClick:ce,children:Y}))}var kn={dropdownCls:"QCPZxJ055cnYMBRnfgUa"},qn=["text","confirmAgain","confirmProps","onClick"],er=L.cy,nr=L.Kg,rr=n.cJ;function In(X,Y){var q=X.text,Z=X.confirmAgain,te=X.confirmProps,ae=X.onClick,pe=l()(X,qn),le=nr(q)?(0,x.jsx)(wn,i()(i()({type:"link",size:"small"},rr(pe,"isShow")),{},{onClick:function(he){return!Z&&(ae==null?void 0:ae(he))},children:q}),Y):q;return Z?(0,x.jsx)(gn.A,i()(i()({title:"\u6E29\u99A8\u63D0\u793A",description:"\u8BF7\u4E8C\u6B21\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\uFF01"},te),{},{onConfirm:ae,children:le}),Y):le}function tr(X){var Y=X.record,q=X.index,Z=X.actionItems,te=X.actionItemsCount,ae=X.actionItemsDropdownProps,pe=X.locale,le=Z==null?void 0:Z(Y,q);if(!er(le))return null;var de=le.filter(function(Me){return Me.isShow!==!1}),he;if(de.length>te){var ce=[],ye=[];return de.forEach(function(Me,$e){$e<te-1?ce.push(Me):ye.push(In(Me,$e))}),(0,x.jsxs)(x.Fragment,{children:[ce.map(function(Me,$e){return In(Me,$e)}),(0,x.jsx)(En.A,i()(i()({placement:"bottomRight"},ae),{},{dropdownRender:function(){return(0,x.jsx)("div",{className:kn.dropdownCls,children:ye.map(function($e,Le){return(0,x.jsx)(u.Fragment,{children:$e},Le)})})},children:(0,x.jsxs)(z.A,{type:"link",size:"small",style:{gap:2,display:"inline-flex",alignItems:"center"},children:[pe.SearchTable.more," ",(0,x.jsx)(Jn.A,{style:{margin:0}})]})}))]})}else he=de.map(function(Me,$e){return In(Me,$e)});return he}function ar(X){var Y=X.table,q=X.sortColumns,Z=X.locale,te=Y.showRowNumber,ae=te===void 0?!1:te,pe=Y.rowNumberColumnData,le=pe===void 0?{}:pe,de=Y.actionItems,he=Y.actionItemsCount,ce=he===void 0?2:he,ye=Y.actionItemsColumnData,Me=ye===void 0?{}:ye,$e=Y.actionItemsDropdownProps,Le=(0,C.A)(function(be,De,Re){return tr({record:De,index:Re,actionItems:de,actionItemsCount:ce,actionItemsDropdownProps:$e,locale:Z})}),Ee=(0,u.useMemo)(function(){return q.filter(function(be){return!be.hidden})},[q]),Ie=(0,u.useMemo)(function(){var be=pn()(Ee);return ae&&be.unshift(i()({title:Z.SearchTable.serialColumnName,align:"center",width:70,fixed:"left",render:function(Re,Ne,We){return We+1},key:t.rowNumber},le)),de&&be.push(i()({title:Z.SearchTable.actionColumnName,align:"center",fixed:"right",width:134,render:Le,key:t.actions},Me)),be},[Ee,ae,le,de,Le,Me,Z.SearchTable.actionColumnName,Z.SearchTable.serialColumnName]);return{finalColumns:Ie}}var Tn=e(14173);function or(X){var Y=X.ref,q=X.rootElemRef,Z=X.searchRef,te=X.requestParamsRef,ae=X.requestExtraParamsRef,pe=X.paginationRef,le=X.searchValueRef,de=X.dataSource,he=X.updateDataSource,ce=X.updateSummaryData,ye=X.updatePagination,Me=X.updateScrollY,$e=X.openSettingModal,Le=X.runRequest,Ee=(0,Tn.A)(),Ie=Ee.forceUpdate;(0,u.useImperativeHandle)(Y,function(){return{refresh:Le,getRootElement:function(){return q.current},getSearchRef:function(){return Z.current},getPaginationData:function(){return pe.current},setPaginationData:ye,getRequestParams:function(){return te.current},getRequestExtraParams:function(){return ae.current},getSearchValue:function(){return le.current},setSearchValue:function(De,Re){var Ne,We=Re!=null&&Re.overwrite?De:i()(i()({},le.current),De);(Ne=Z.current)===null||Ne===void 0||Ne.setValue(We)},clearSearchValue:function(){var De;return(De=Z.current)===null||De===void 0?void 0:De.resetValue()},getDataSource:function(){return de},setDataSource:function(De){he(De),Ie()},setSummaryData:function(De){ce(De),Ie()},updateScrollY:Me,openSettingModal:$e,rerender:Ie}})}var bn=e(34972),Dn=Pn.A,sr=n.Up,lr=v.A,dr=bn._0;function ur(X){var Y,q=X.request,Z=X.updateScrollY,te=X.table,ae=X.searchValueRef,pe=X.locale,le=(0,u.useRef)({current:1,pageSize:(te.pagination!==!1?(Y=te.pagination)===null||Y===void 0?void 0:Y.defaultPageSize:10)||10,total:0}),de=(0,u.useRef)({}),he=(0,u.useRef)({}),ce=(0,u.useRef)([]),ye=(0,u.useRef)({}),Me=(0,u.useState)(!1),$e=f()(Me,2),Le=$e[0],Ee=$e[1];te.pagination===!1&&(le.current={});var Ie=(0,C.A)((function(){var Ve=en()(an()().mark(function Ue(Xe,we){var on,nn,dn;return an()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:if(on={data:[],total:0},!Le){Ze.next=3;break}return Ze.abrupt("return",on);case 3:if(Ee(!0),Ze.prev=4,!q){Ze.next=18;break}return nn={},we!=null&&we.overwrite?nn=Xe||{}:nn=i()(i()(i()({},ae.current),sr(le.current,"current","pageSize")),Xe),Ze.next=10,q(nn,he.current);case 10:dn=Ze.sent,de.current=nn,nn.current&&(le.current.current=nn.current),nn.pageSize&&(le.current.pageSize=nn.pageSize),le.current.total=dn.total||0,ce.current=dn.data||[],ye.current=dn.summaryData||{},on=i()(i()({},dn),{},{data:ce.current,total:le.current.total});case 18:Ze.next=23;break;case 20:Ze.prev=20,Ze.t0=Ze.catch(4),Dn.warn(Ze.t0);case 23:return Ee(!1),te.autoScrollY&&Z(),Ze.abrupt("return",on);case 26:case"end":return Ze.stop()}},Ue,null,[[4,20]])}));return function(Ue,Xe){return Ve.apply(this,arguments)}})()),be=!1;if(te.pagination!==!1){var De;be=i()(i()(i()({style:{marginBottom:0},showQuickJumper:!0,showSizeChanger:!0,showTotal:function(Ue){var Xe=le.current,we=Xe.current,on=Xe.pageSize,nn=(we-1)*on,dn=nn+ce.current.length;return dr(pe.SearchTable.paginationTotal,{start:nn||1,end:dn,total:Ue})}},te.pagination),le.current),{},{onChange:function(Ue,Xe){var we,on;(we=te.pagination)===null||we===void 0||(on=we.onChange)===null||on===void 0||on.call(we,Ue,Xe),Object.assign(le.current,{current:Ue,pageSize:Xe}),Ie()},className:lr((De=te.pagination)===null||De===void 0?void 0:De.className,s.pagination)})}var Re=(0,C.A)(function(Ve){ce.current=Ve}),Ne=(0,C.A)(function(Ve){ye.current=Ve}),We=(0,C.A)(function(Ve){he.current=Ve}),Qe=(0,C.A)(function(Ve){Ve&&Object.assign(le.current,Ve)});return{loading:Le,dataSource:ce.current,updateDataSource:Re,summaryData:ye.current,updateSummaryData:Ne,requestParamsRef:de,requestExtraParamsRef:he,updateRequestExtraParams:We,paginationRef:le,updatePagination:Qe,finalPagination:be,runRequest:Ie}}var mr=L.Kg;function Cn(X){if(!X)return 0;var Y=window.getComputedStyle(X,null),q=parseFloat(Y.marginTop)+parseFloat(Y.marginBottom);return X.offsetHeight+q}function ir(X,Y){if(!X||!Y)return 0;var q=window.getComputedStyle(X,null),Z=q[Y];return mr(Z)&&Z.match(/^\d+/)?parseFloat(Z):0}var cr=L.b0;function pr(X){var Y=X.table,q=X.rootElemRef,Z=(0,u.useState)(Y.virtual?0:void 0),te=f()(Z,2),ae=te[0],pe=te[1],le=(0,u.useRef)(),de=(0,C.A)(function(){var ce;if(!(!q.current||!cr((ce=Y.scroll)===null||ce===void 0?void 0:ce.y))){var ye=q.current.querySelector(".".concat(s.table)),Me=ye==null?void 0:ye.querySelector("thead"),$e=ye==null?void 0:ye.querySelector("tfoot"),Le=ye==null?void 0:ye.querySelector(".".concat(s.pagination)),Ee=[Me,$e,Le],Ie=0;p(q.current.children,function(be){be!==ye&&(Ie+=Cn(be))}),Ie+=ir(ye,"marginTop"),p(Ee,function(be){Ie+=Cn(be)}),pe(q.current.clientHeight-Ie)}}),he=(0,C.A)(function(){var ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,ye=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;ye&&!Y.autoScrollY||(clearTimeout(le.current),le.current=setTimeout(de,ce))});return(0,W.A)(function(){var ce=function(){return he(0,!0)};return window.addEventListener("resize",ce),function(){return window.removeEventListener("resize",ce)}}),{scrollY:ae,updateScrollY:he}}var hr=e(2552),vr=bn.mQ;function Ir(X){var Y=X.locale,q=X.loading,Z=X.search,te=X.searchValueRef,ae=X.runRequest,pe=X.updateScrollY,le=Z===!1?{}:Z,de=(0,u.useRef)(null),he=(0,Tn.A)(),ce=he.forceUpdate,ye=vr(le,"value");if(ye){var Me;te.current=(Me=le.value)!==null&&Me!==void 0?Me:{}}var $e=(0,C.A)(function(De,Re){var Ne;te.current=i()({},De),ye||ce(),(Ne=le.onChange)===null||Ne===void 0||Ne.call(le,De,Re)}),Le=(0,C.A)((function(){var De=en()(an()().mark(function Re(Ne){var We,Qe;return an()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:return te.current=i()({},Ne),Ue.next=3,(We=le.onReset)===null||We===void 0?void 0:We.call(le,Ne);case 3:if(Qe=Ue.sent,Qe===!1){Ue.next=7;break}return Ue.next=7,ae({current:1});case 7:case"end":return Ue.stop()}},Re)}));return function(Re){return De.apply(this,arguments)}})()),Ee=(0,C.A)((function(){var De=en()(an()().mark(function Re(Ne){var We,Qe;return an()().wrap(function(Ue){for(;;)switch(Ue.prev=Ue.next){case 0:return Ue.next=2,(We=le.onSubmit)===null||We===void 0?void 0:We.call(le,Ne);case 2:if(Qe=Ue.sent,Qe===!1){Ue.next=6;break}return Ue.next=6,ae({current:1});case 6:case"end":return Ue.stop()}},Re)}));return function(Re){return De.apply(this,arguments)}})()),Ie=(0,C.A)(function(De){var Re;(Re=le.onToggleCollapsed)===null||Re===void 0||Re.call(le,De),pe(0,!0)}),be=Z?(0,x.jsx)(hr.default,i()(i()({},Z),{},{locale:Z.locale||Y,rootStyle:i()({marginBottom:16},Z.rootStyle),ref:de,disabled:Z.disabled||q,value:te.current,onChange:$e,onReset:Le,onSubmit:Ee,onToggleCollapsed:Ie})):null;return{searchNodeHolder:be,searchRef:de}}var Sn=L.cy,fr=L.gD;function yr(X,Y){return X===t.rowNumber?Y:X===t.actions?"":"-"}function xr(X){var Y=[];function q(Z){p(Z,function(te){Sn(te.children)?q(te.children):Y.push(te)})}return q(X),Y}function gr(X){var Y=X.flattenedColumns,q=X.summaryData,Z=X.summaryText,te=Z===void 0?"\u5408\u8BA1":Z,ae=X.hasRowNumber,pe=ae===void 0?!1:ae,le=X.hasRowSelection,de=le===void 0?!1:le,he=[],ce=-1;return de&&(ce++,he.push({index:ce,text:pe?"":te})),p(Y,function(ye){var Me=ye.key,$e=ye.dataIndex,Le=Sn($e)?$e.join("."):$e,Ee=String(Me||Le),Ie=q[Ee];ce++,he.push({index:ce,text:fr(Ie)?yr(Ee,te):Ie})}),he}function fn(X){var Y=gr(X);return(0,x.jsx)(c.A.Summary,{fixed:"bottom",children:(0,x.jsx)(c.A.Summary.Row,{children:Y.map(function(q){return(0,x.jsx)(c.A.Summary.Cell,{align:"center",index:q.index,colSpan:q.colSpan,children:q.text},q.index)})})})}function Er(X){var Y=X.table,q=X.finalColumns,Z=X.summaryData,te=(0,u.useMemo)(function(){return xr(q)},[q]),ae=(0,C.A)(function(){return fn({flattenedColumns:te,summaryData:Z,summaryText:Y.summaryText,hasRowSelection:!!Y.rowSelection,hasRowNumber:Y.showRowNumber})}),pe=Y.summary?Y.summary:M(Z)?void 0:function(){return ae()};return{finalSummary:pe}}var Pr=e(68328),Tr=e.n(Pr),br=e(90420),Dr=e(90658),me=e(40538),G={tabsHideLine:"uDtbDqYyMw3PdeGEwjmS"},k=v.A;function ne(X){var Y,q,Z,te,ae,pe=X.locale,le=X.title,de=le===void 0?{}:le,he=X.loading,ce=X.globalStateRef,ye=X.runRequest,Me=X.openSettingModal,$e=(0,C.A)(function(Ue){var Xe,we;he||(ce.current.isTabChanging=!0,(Xe=de.tabs)===null||Xe===void 0||(we=Xe.onChange)===null||we===void 0||we.call(Xe,Ue),setTimeout(function(){return ye({current:1}).finally(function(){return ce.current.isTabChanging=!1})},0))}),Le={loading:he},Ee=(Y=de.leftExtraContent)===null||Y===void 0?void 0:Y.call(de,Le),Ie=(q=de.rightExtraContent)===null||q===void 0?void 0:q.call(de,Le),be=null,De=null,Re=de.showSetting?(0,x.jsx)(y.A,{title:pe.SearchTable.settingTips,children:(0,x.jsx)(z.A,{icon:(0,x.jsx)(br.A,{}),disabled:he,onClick:Me})}):null,Ne=de.showRefresh?(0,x.jsx)(y.A,{title:pe.SearchTable.refreshTips,children:(0,x.jsx)(z.A,{icon:(0,x.jsx)(Dr.A,{}),disabled:he,onClick:function(){return ye()}})}):null;if((Z=de.tabs)!==null&&Z!==void 0&&Z.tabBarExtraContent)if((0,u.isValidElement)(de.tabs.tabBarExtraContent))De=de.tabs.tabBarExtraContent;else{var We=de.tabs.tabBarExtraContent;be=We.left,De=We.right}var Qe={left:be||Ee?(0,x.jsxs)(h.A,{size:10,style:{marginRight:16},children:[be,Ee]}):null,right:De||Ie||Ne||Re?(0,x.jsxs)(h.A,{size:10,children:[De,Ie,Ne,Re]}):null},Ve=Qe.left||Qe.right||de.tabs?(0,x.jsx)(me.A,i()(i()({},de.tabs),{},{className:k(de.className,(te=de.tabs)===null||te===void 0?void 0:te.className,Tr()({},G.tabsHideLine,!de.tabs)),style:de.style||((ae=de.tabs)===null||ae===void 0?void 0:ae.style),tabBarExtraContent:Qe,onChange:$e})):null;return{titleNodeHolder:Ve}}var re=e(71485),ve=i()(i()({},re.A),{},{SearchTable:{serialColumnName:"\u5E8F\u53F7",actionColumnName:"\u64CD\u4F5C",more:"\u66F4\u591A",paginationTotal:"\u5171 ${total} \u6761\u6570\u636E",refreshTips:"\u5237\u65B0",settingTips:"\u5217\u8BBE\u7F6E",settingModalTitle:"\u5217\u8BBE\u7F6E",settingModalOk:"\u786E\u5B9A",settingModalReset:"\u91CD\u7F6E\u672C\u6B21\u8BBE\u7F6E",settingModalResetDefault:"\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E",settingModalColumnEnum:["\u5217\u540D\u79F0","\u663E\u793A\u5217","\u5BBD\u5EA6","\u56FA\u5B9A\u65B9\u5F0F","\u6392\u5E8F"],settingModalColumnSortEnum:["\u5DE6","\u53F3","\u65E0"],longTextModalLabel:"\u5168\u90E8",longTextModalTitle:"\u5168\u90E8"}}),xe=v.A,Te=L.Qd,Se=L.gD,Oe=function(Y,q){var Z=Y.className,te=Y.style,ae=Y.locale,pe=Y.request,le=Y.requestOnMounted,de=le===void 0?!0:le,he=Y.header,ce=Y.search,ye=Y.titleTop,Me=Y.title,$e=Me===void 0?{}:Me,Le=Y.titleBottom,Ee=Y.table,Ie=Ee===void 0?{}:Ee,be=Y.footer,De=(0,u.useRef)(null),Re=(0,u.useRef)(ce===!1?{}:ce.defaultValue||{}),Ne=(0,u.useMemo)(function(){return i()(i()({},ve),ae)},[ae]);Ie.rowSelection&&Se(Ie.rowSelection.columnWidth)&&(Ie.rowSelection=i()(i()({},Ie.rowSelection),{},{columnWidth:32}));var We=(0,u.useRef)({isTabChanging:!1}),Qe=Je({table:Ie,globalStateRef:We}),Ve=Qe.baseColumns,Ue=Qn({table:Ie,baseColumns:Ve,globalStateRef:We}),Xe=Ue.sortColumns,we=Ue.sortModalHolder,on=Ue.openSettingModal,nn=ar({table:Ie,sortColumns:Xe,locale:Ne}),dn=nn.finalColumns,Cr=pr({table:Ie,rootElemRef:De}),Ze=Cr.scrollY,Sr=Cr.updateScrollY,sn=ur({searchValueRef:Re,table:Ie,request:pe,updateScrollY:Sr,locale:Ne}),On=sn.loading,Rr=sn.dataSource,jr=sn.updateDataSource,Br=sn.summaryData,$r=sn.updateSummaryData,Nr=sn.finalPagination,yn=sn.runRequest,Kr=sn.requestParamsRef,Fr=sn.requestExtraParamsRef,Wr=sn.updateRequestExtraParams,Ur=sn.paginationRef,zr=sn.updatePagination,Mr=Ir({locale:Ne,loading:On,search:ce,searchValueRef:Re,runRequest:yn,updateScrollY:Sr}),Hr=Mr.searchNodeHolder,Vr=Mr.searchRef,_r=ne({locale:Ne,title:$e,loading:On,globalStateRef:We,runRequest:yn,openSettingModal:on}),Gr=_r.titleNodeHolder,Yr=Er({table:Ie,finalColumns:dn,summaryData:Br}),Qr=Yr.finalSummary,Rn={loading:On},Jr=(0,C.A)(function(Xr,Ar,Lr,Zr){var Or;(Ie.sortMode==="service"||Ie.sortMode==="service-all")&&(Wr({filter:Ar,sorter:Lr}),yn()),(Or=Ie.onChange)===null||Or===void 0||Or.call(Ie,Xr,Ar,Lr,Zr)});return(0,W.A)(function(){de&&yn()}),or({ref:q,rootElemRef:De,searchRef:Vr,requestParamsRef:Kr,requestExtraParamsRef:Fr,paginationRef:Ur,searchValueRef:Re,dataSource:Rr,updateDataSource:jr,updateSummaryData:$r,updatePagination:zr,updateScrollY:Sr,openSettingModal:on,runRequest:yn}),(0,x.jsx)(ee.Provider,{value:{locale:Ne},children:(0,x.jsxs)("div",{ref:De,className:Z,style:te,children:[he==null?void 0:he(Rn),Hr,ye==null?void 0:ye(Rn),Gr,Le==null?void 0:Le(Rn),(0,x.jsx)(c.A,i()(i()({tableLayout:"fixed"},Ie),{},{className:xe(Ie.className,s.table),columns:dn,dataSource:Rr,loading:i()({spinning:On},Te(Ie==null?void 0:Ie.loading)?Ie.loading:void 0),scroll:i()({scrollToFirstRowOnChange:!0,x:"max-content",y:Ze},Ie==null?void 0:Ie.scroll),summary:Qr,pagination:Nr,onChange:Jr})),be==null?void 0:be(Rn),we]})})},Fe=(0,u.forwardRef)(Oe),Ae=Fe}),29828:(function(_,m,e){e.r(m);var P=e(1974),i=e.n(P),v=e(51763);m.default=i()(i()({},v.default),{},{SearchTable:{serialColumnName:"Rank",actionColumnName:"Actions",more:"More",paginationTotal:"Showing ${start} to ${end} of ${total} entries",refreshTips:"Refresh",settingTips:"Columns Setting",settingModalTitle:"Columns Setting",settingModalOk:"Ok",settingModalReset:"Reset Current Setting",settingModalResetDefault:"Restore Defaults",settingModalColumnEnum:["Name","Display","Width","Fixed","Sort"],settingModalColumnSortEnum:["left","right","-"],longTextModalLabel:"All",longTextModalTitle:"All"}})}),6124:(function(_,m,e){e.r(m);const P=[{value:"SchemaRender",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u5957 ",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u7B80\u5355",paraId:0,tocIndex:1},{value:"\uFF0C\u4F46\u53C8\u8FFD\u6C42 ",paraId:0,tocIndex:1},{value:"\u7075\u6D3B",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u53EF\u9AD8\u5B9A",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u597D\u7528\u7684",paraId:0,tocIndex:1},{value:" \u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848\uFF0C\u65E8\u5728\u6C89\u6DC0\u89E3\u51B3\u5E38\u89C1\u8868\u5355\u6848\u4F8B\u7684\u6E32\u67D3\u5E93\uFF0C\u4E0E\u76F8\u5173\u7684\u901A\u7528\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u5347\u7814\u53D1\u6548\u7387\uFF1B\u652F\u6301 SSR(Server-Side Rendering) \u6E32\u67D3\u3002",paraId:0,tocIndex:1},{value:"\u5185\u5BB9\u76EE\u5F55\uFF1A",paraId:1,tocIndex:1},{value:"Core",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6E32\u67D3\u5E93\u5185\u6838\uFF0C\u901A\u8FC7\u4E00\u5957\u7B80\u6613\u7684 ",paraId:2,tocIndex:1},{value:"JSON Schema",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\u51FA\u4E00\u5957\u8868\u5355\uFF0C\u5185\u6838\u4E3B\u8981\u5904\u7406 Schema \u534F\u8BAE\u3001\u6E32\u67D3\u5668\u7F16\u6392\u3001\u903B\u8F91\u8054\u52A8\u3001\u6821\u9A8C\u80FD\u529B\u7B49\u3002",paraId:2,tocIndex:1},{value:"FormRender",paraId:2,tocIndex:1},{value:": \u57FA\u4E8E Core + ",paraId:2,tocIndex:1},{value:"Antd",paraId:2,tocIndex:1},{value:" \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u8868\u5355\u6E32\u67D3\u5E93\u3002",paraId:2,tocIndex:1},{value:"Search",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:2,tocIndex:1},{value:"SearchTable",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u3002",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u9879\u76EE\u662F\u57FA\u4E8E React \u6280\u672F\u6808\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u540E\u7F00\u90FD\u52A0\u4E86 ",paraId:4},{value:"-react",paraId:4},{value:" \u5B57\u773C\uFF0C\u540E\u7EED\u53EF\u80FD\u4F1A\u5C06 Core \u62BD\u79BB\u6210\u4E0D\u4F9D\u8D56\u4E8E\u6280\u672F\u6808\u7684\u7EAF JavaScript \u9879\u76EE\uFF0C\u4EE5\u4FBF\u652F\u6301\u4EFB\u4F55\u6280\u672F\u6846\u67B6\u3002",paraId:4},{value:"FormRender\u3001Search\u3001SearchTable \u4F7F\u7528\u7684\u662F ",paraId:5,tocIndex:2},{value:"CSS Modules",paraId:5,tocIndex:2},{value:" \u7684\u6837\u5F0F\u65B9\u6848\uFF0C\u6545\u9879\u76EE\u9700\u8981\u5F00\u542F\u6A21\u5757\u7F16\u8BD1\u3002",paraId:5,tocIndex:2},{value:"\u4EE5 ",paraId:6,tocIndex:2},{value:"Next.js",paraId:6,tocIndex:2},{value:" \u4E3A\u4F8B\uFF0C\u9879\u76EE\u9700\u914D\u7F6E ",paraId:6,tocIndex:2},{value:"next.config.js",paraId:6,tocIndex:2},{value:" \u6587\u4EF6\uFF1A",paraId:6,tocIndex:2},{value:`// \u7F16\u8BD1 node_modules \u4E0B\u7684\u6A21\u5757
{
  transpilePackages: [
    '@schema-render/core-react',
    '@schema-render/form-render-react',
    '@schema-render/search-react',
    '@schema-render/search-table-react',
  ]
}
`,paraId:7,tocIndex:2},{value:"\u6E32\u67D3\u5185\u6838\u5FC5\u987B\u7EC4\u88C5 ",paraId:8,tocIndex:3},{value:"itemLayout",paraId:8,tocIndex:3},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:8,tocIndex:3},{value:"Renderers",paraId:8,tocIndex:3},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u6765\u5B9E\u73B0\u4E00\u4E2A\u6E32\u67D3\u5E93\uFF0C\u7136\u540E\u901A\u8FC7 JSON Schema \u9A71\u52A8\u6E32\u67D3\u51FA\u6240\u9700\u7684\u8868\u5355\u3002",paraId:8,tocIndex:3},{value:"\u7279\u70B9\uFF1A\u534F\u8BAE\u9A71\u52A8\u3001\u7B80\u6D01\u6613\u7528\u3001\u9AD8\u53EF\u5B9A\u5236\u3001\u8F7B\u91CF\u7EA7\u3002",paraId:9,tocIndex:3},{value:"\u534F\u8BAE\u9A71\u52A8",paraId:10,tocIndex:3},{value:"\uFF1A\u901A\u8FC7\u7F16\u5199\u4E00\u4EFD\u7B80\u6613\u7684 JSON Schema \u6765\u5B9E\u73B0\u5185\u5BB9\u7684\u6E32\u67D3\uFF0C\u53C2\u8003",paraId:10,tocIndex:3},{value:"\u5FEB\u901F\u4E0A\u624B",paraId:11,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u7B80\u6D01\u6613\u7528",paraId:10,tocIndex:3},{value:"\uFF1A\u4EC1\u8005\u89C1\u4EC1\u667A\u8005\u89C1\u667A\uFF0C\u7B14\u8005\u4EE5\u4E3A\u662F\u6BD4\u8F83\u8A00\u7B80\u610F\u8D45\u3001\u6613\u7528\u7684\uFF0C\u5982\u540C\u5185\u90E8\u6E90\u7801\u4E00\u6837\uFF0C\u5316\u7E41\u4E3A\u7B80\uFF0C\u65E0\u5FC5\u8981\u4E0D\u589E\u5B9E\u4F53\u3002",paraId:10,tocIndex:3},{value:"\u9AD8\u53EF\u5B9A\u5236",paraId:10,tocIndex:3},{value:"\uFF1A\u901A\u8FC7\u7EC4\u88C5 layout\u3001itemLayout\u3001renderers \u7B49\u53EF\u4EE5\u6309\u9700\u5B9E\u73B0\u4E00\u4E2A\u8D34\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u6E32\u67D3\u5E93\uFF0C\u5982 FormRender\u3002",paraId:10,tocIndex:3},{value:"\u8F7B\u91CF\u7EA7",paraId:10,tocIndex:3},{value:"\uFF1A\u8D44\u6E90\u5305\u5927\u5C0F\u4EC5 17.6k, gzip 6.5k",paraId:10,tocIndex:3}];e.d(m,["texts",0,P])}),64433:(function(_,m,e){e.r(m);const P=[{value:`npm install @schema-render/core-react --save
`,paraId:0,tocIndex:1},{value:"\u6B65\u9AA4\u4E00\uFF1A",paraId:1,tocIndex:2},{value:" \u9700\u8981\u5148\u7EC4\u88C5\u5FC5\u987B\u7684\u90E8\u4EF6 ",paraId:1,tocIndex:2},{value:"itemLayout",paraId:1,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:1,tocIndex:2},{value:"Renderers",paraId:1,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4F7F Core \u8FD0\u884C\u5B8C\u6574\u3002",paraId:1,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:": \u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:2},{value:"Renderers",paraId:2,tocIndex:2},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u8868\u5355\u9879\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C",paraId:2,tocIndex:2},{value:"schema \u534F\u8BAE",paraId:2,tocIndex:2},{value:" \u7684 ",paraId:2,tocIndex:2},{value:"renderType",paraId:2,tocIndex:2},{value:" \u5B57\u6BB5\u6307\u5411\u5176\u540D\u79F0\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u6E32\u67D3\u5668 Renderer",paraId:4,tocIndex:2},{value:"\u6B65\u9AA4\u4E8C\uFF1A",paraId:5,tocIndex:2},{value:" \u7136\u540E\u901A\u8FC7\u58F0\u660E ",paraId:5,tocIndex:2},{value:"Schema \u534F\u8BAE",paraId:5,tocIndex:2},{value:" \u6765\u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u6837\u7684\u8868\u5355\u3002",paraId:5,tocIndex:2},{value:"\u534F\u8BAE\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:6,tocIndex:2},{value:"\u534F\u8BAE\u4ECB\u7ECD Schema",paraId:7,tocIndex:2},{value:"\u6B65\u9AA4\u4E09\uFF1A",paraId:8,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:2},{value:"onChange",paraId:8,tocIndex:2},{value:" \u4E8B\u4EF6\u83B7\u53D6\u8868\u5355\u7684\u6574\u4F53\u6570\u636E\u3002",paraId:8,tocIndex:2},{value:"\u4E8B\u4EF6\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:9,tocIndex:2},{value:"\u6570\u636E\u56DE\u8C03 ChangeEvent",paraId:10,tocIndex:2},{value:"\u6B65\u9AA4\u56DB\uFF1A",paraId:11,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:11,tocIndex:2},{value:"value",paraId:11,tocIndex:2},{value:" \u53C2\u6570\u5B9E\u73B0\u8868\u5355\u6570\u636E\u81EA\u5DF1\u63A7\u5236\u3002",paraId:11,tocIndex:2},{value:"\u53C2\u8003\u9605\u8BFB\uFF1A",paraId:12,tocIndex:2},{value:"\u72B6\u6001\u53D7\u63A7\u4E0E\u975E\u53D7\u63A7",paraId:12,tocIndex:2},{value:"\u6B65\u9AA4\u4E00\u548C\u6B65\u9AA4\u4E8C",paraId:13,tocIndex:3},{value:"\u589E\u52A0\u6B65\u9AA4\u4E09",paraId:14,tocIndex:4}];e.d(m,["texts",0,P])}),12139:(function(_,m,e){e.r(m);const P=[{value:"\u57FA\u7840\u534F\u8BAE\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u9879\u7684\u57FA\u7840\u529F\u80FD\u3002",paraId:0,tocIndex:2},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:1,tocIndex:3},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:2,tocIndex:4},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:3,tocIndex:5},{value:`\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6E32\u67D3\u4E3B\u4F53\u5185\u5BB9\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002
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
`,paraId:27,tocIndex:17},{value:"\u7ED9\u8868\u5355\u9879\u8BBE\u7F6E\u6837\u5F0F\uFF0C\u540C ",paraId:28,tocIndex:18},{value:"className",paraId:28,tocIndex:18},{value:"\u3002",paraId:28,tocIndex:18},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u5360\u7528\u7684\u6805\u683C\u5BBD\u5EA6\u3002",paraId:29,tocIndex:19},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:30,tocIndex:19},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:31,tocIndex:19},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002",paraId:32,tocIndex:20},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:33,tocIndex:20},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:34,tocIndex:20},{value:"\u6570\u636E\u6821\u9A8C\u534F\u8BAE\u901A\u8FC7 ",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u5173\u952E\u5B57\u5B9A\u4E49\uFF0C",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u89C4\u5219\u662F\u501F\u9274 async-validator API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:35,tocIndex:21},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:36,tocIndex:21},{value:"type",paraId:36,tocIndex:21},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:36,tocIndex:21},{value:"\u540D\u79F0",paraId:37,tocIndex:21},{value:"\u8BF4\u660E",paraId:37,tocIndex:21},{value:"\u7C7B\u578B",paraId:37,tocIndex:21},{value:"type",paraId:37,tocIndex:21},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"required",paraId:37,tocIndex:21},{value:"\u662F\u5426\u5FC5\u586B",paraId:37,tocIndex:21},{value:"boolean",paraId:37,tocIndex:21},{value:"min",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"max",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"len",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"pattern",paraId:37,tocIndex:21},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"validator",paraId:37,tocIndex:21},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"message",paraId:37,tocIndex:21},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"\u793A\u4F8B",paraId:38,tocIndex:21},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:39},{value:"\u6821\u9A8C\u5668 Validator",paraId:40},{value:"\u534F\u8BAE\u4FDD\u7559\u5173\u952E\u5B57\u53EF\u80FD\u4F1A\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u4F7F\u7528\uFF0C\u4E3A\u4E86\u907F\u514D\u51B2\u7A81\uFF0C\u5E94\u5F53\u4E0D\u5360\u7528\uFF1B\u4FDD\u7559\u5173\u952E\u5B57\u5217\u8868\u5982\u4E0B",paraId:41,tocIndex:22},{value:"type",paraId:42,tocIndex:22},{value:": \u5B9A\u4E49\u5F53\u524D\u8868\u5355\u9879\u5BF9\u5E94\u7684\u7EAF ",paraId:42,tocIndex:22},{value:"JavaScript",paraId:42,tocIndex:22},{value:" \u6570\u636E\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:42,tocIndex:22},{value:"string",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"number",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"object",paraId:42,tocIndex:22},{value:" \u7B49\u3002",paraId:42,tocIndex:22}];e.d(m,["texts",0,P])}),41972:(function(_,m,e){e.r(m);const P=[{value:"layout",paraId:0,tocIndex:0},{value:" \u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u4E4B\u95F4",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u6A21\u5F0F\u3002",paraId:0,tocIndex:0},{value:"normal",paraId:1,tocIndex:0},{value:": \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u6807\u51C6\u6805\u683C\u5E03\u5C40\uFF0C\u5C06\u5BB9\u5668\u5747\u5206\u4E3A ",paraId:1,tocIndex:0},{value:"24",paraId:1,tocIndex:0},{value:" \u4EFD\uFF0C\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\uFF08\u5373 24 \u4EFD\uFF09\uFF1B\u5F53\u7136\u53EF\u4EE5\u5728 Schema \u91CC\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"span",paraId:1,tocIndex:0},{value:" \u5B57\u6BB5\u8BBE\u7F6E\u7279\u5B9A\u7684\u4EFD\u6570\uFF08\u5BBD\u5EA6\uFF09\u3002",paraId:1,tocIndex:0},{value:"autoFill",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0C",paraId:1,tocIndex:0},{value:"CSS Grid",paraId:1,tocIndex:0},{value:" autoFill \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"autoFit",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0CCSS Grid autoFit \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\u3002",paraId:2,tocIndex:1},{value:"\u901A\u8FC7\u5728 ",paraId:3,tocIndex:2},{value:"Schema",paraId:3,tocIndex:2},{value:" \u4E0A\u6307\u5B9A ",paraId:3,tocIndex:2},{value:"span",paraId:3,tocIndex:2},{value:" \u548C ",paraId:3,tocIndex:2},{value:"spanStart",paraId:3,tocIndex:2},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:3,tocIndex:2},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:2},{value:"\u548C",paraId:3,tocIndex:2},{value:"\u4F4D\u7F6E",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u5BBD\u5EA6\uFF0C\u4EE5\u4EFD\u8BA1\u7B97\u3002",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u4ECE\u7B2C\u51E0\u4E2A\u6805\u683C\u5F00\u59CB\uFF0C\u901A\u5E38\u5728\u9700\u8981\u6362\u884C\u7684\u65F6\u5019\u4F7F\u7528\u3002",paraId:4,tocIndex:2},{value:"\u5F53 ",paraId:4,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:" \u548C ",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:" \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09",paraId:4,tocIndex:2},{value:"\u6839\u636E\u8BBE\u7F6E\u7684 ",paraId:5,tocIndex:3},{value:"layoutMinMax",paraId:5,tocIndex:3},{value:"\uFF08\u5373 ",paraId:5,tocIndex:3},{value:"Grid minmax",paraId:5,tocIndex:3},{value:"\uFF09\u4E0E",paraId:5,tocIndex:3},{value:"\u8868\u5355\u6839\u5143\u7D20",paraId:5,tocIndex:3},{value:"\u5BBD\u5EA6\u52A8\u6001\u8BA1\u7B97\u5E03\u5C40\u5BBD\u5EA6\uFF0C\u52A8\u6001\u6392\u5217\u4E0E\u6362\u884C\u3002",paraId:5,tocIndex:3},{value:"autoFit",paraId:6,tocIndex:4},{value:" \u4E0E ",paraId:6,tocIndex:4},{value:"autoFill",paraId:6,tocIndex:4},{value:" \u96F7\u540C\uFF0C\u7EC6\u5FAE\u7684\u5DEE\u522B\u8BF7\u67E5\u770B ",paraId:6,tocIndex:4},{value:"\u8FD9\u7BC7\u6587\u7AE0\u7684\u5BF9\u6BD4",paraId:6,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"\u4E0D\u7BA1\u662F ",paraId:7,tocIndex:5},{value:"autoFill",paraId:7,tocIndex:5},{value:" \u8FD8\u662F ",paraId:7,tocIndex:5},{value:"autoFit",paraId:7,tocIndex:5},{value:" \u90FD\u53EF\u4EE5\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"layoutMinMax",paraId:7,tocIndex:5},{value:" \u8BBE\u7F6E\u8868\u5355\u9879\u5BBD\u5EA6\u7684\u6700\u5C0F\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:7,tocIndex:5},{value:"['320px', '1fr']",paraId:7,tocIndex:5},{value:"\u3002",paraId:7,tocIndex:5},{value:"\u4EE5\u4E0B\u793A\u4F8B\u8BBE\u7F6E\u6700\u5C0F\u6700\u5927\u90FD\u4E3A ",paraId:8,tocIndex:5},{value:"230px",paraId:8,tocIndex:5},{value:" \u7684\u5E03\u5C40\u3002",paraId:8,tocIndex:5},{value:"layoutMinMax",paraId:9},{value:" \u5185\u7684\u503C\u53EF\u4EE5\u662F ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F ",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\uFF0C",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6210\u4EE5 ",paraId:9},{value:"px",paraId:9},{value:" \u4E3A\u5355\u4F4D\u7684 ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\u503C\u3002",paraId:9}];e.d(m,["texts",0,P])}),66385:(function(_,m,e){e.r(m);const P=[{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u7528\u4E8E\u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u5185\u90E8",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\u3002",paraId:0,tocIndex:0},{value:"\u5E38\u89C1\u7684\u5E03\u5C40\u7ED3\u6784\u6709 2 \u79CD\uFF1A\u7EB5\u5411\u5E03\u5C40\uFF08Vertical\uFF09\u548C\u6A2A\u5411\u5E03\u5C40\uFF08Horizontal\uFF09\uFF0C\u4E0B\u9762\u7684\u7AE0\u8282\u5C06\u4E3E\u4F8B\u5B9E\u73B0\u8FD9\u4E24\u79CD\u5E03\u5C40\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"IOpenItemLayoutParams",paraId:2,tocIndex:3},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"schema",paraId:3,tocIndex:3},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:3,tocIndex:3},{value:"ISchema",paraId:3,tocIndex:3},{value:"required",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"readonly",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"validator",paraId:3,tocIndex:3},{value:"\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F\uFF0C\u5305\u542B ",paraId:3,tocIndex:3},{value:"status(\u72B6\u6001)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"message(\u63D0\u793A\u4FE1\u606F)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"extra(\u989D\u5916\u6570\u636E)",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"locale",paraId:3,tocIndex:3},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"userCtx",paraId:3,tocIndex:3},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"body",paraId:3,tocIndex:3},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"prefixClassNames",paraId:3,tocIndex:3},{value:"\u5BF9 ",paraId:3,tocIndex:3},{value:"classnames",paraId:3,tocIndex:3},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:3,tocIndex:3},{value:"(...args: classNames.ArgumentArray) => string",paraId:3,tocIndex:3}];e.d(m,["texts",0,P])}),51581:(function(_,m,e){e.r(m);const P=[{value:"\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"prefixCls",paraId:0,tocIndex:0},{value:" \u5B9A\u5236\u6837\u5F0F\u7C7B\u540D\u524D\u7F00",paraId:0,tocIndex:0},{value:"\u6253\u5F00 DevTools \u9762\u677F\u67E5\u770B DOM \u5143\u7D20\u7C7B\u540D",paraId:1}];e.d(m,["texts",0,P])}),28204:(function(_,m,e){e.r(m);const P=[{value:"\u5F53\u8868\u5355\u9879\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8868\u5355\u5168\u91CF\u6570\u636E\u3002",paraId:0,tocIndex:1},{value:"onChange",paraId:1},{value:" \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\uFF0C\u5305\u542B\u5982\u4E0B\u6570\u636E\uFF1A",paraId:1},{value:"path",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u7684\u8868\u5355\u9879\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C",paraId:2},{value:"array",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"sPath",paraId:2},{value:": \u5B8C\u6574\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32\u5316\u8868\u793A\uFF0C",paraId:2},{value:"string",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"value",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u7684\u6570\u636E\u503C\u3002",paraId:2},{value:"extra",paraId:2},{value:": \u643A\u5E26\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u4EFB\u610F\u6570\u636E\u683C\u5F0F\u3002",paraId:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4E0E ",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:" \u8C03\u7528\u65F6\u673A\u4E00\u81F4\uFF0C\u53EA\u662F ",paraId:3,tocIndex:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4EC5\u5305\u542B\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\u3002",paraId:3,tocIndex:2},{value:"\u9002\u7528\u4E8E\u4E0D\u9700\u8981\u63A5\u7BA1\u6574\u4E2A\u8868\u5355\u6570\u636E\uFF08value\uFF09\uFF0C\u53C8\u9700\u8981\u76D1\u542C\u67D0\u4E2A\u8868\u5355\u9879\u53D8\u5316\u800C\u540E\u5904\u7406\u4E00\u4E9B\u4E8B\u60C5\u7684\u573A\u666F\u3002",paraId:4,tocIndex:2},{value:"\u989D\u5916\u4FE1\u606F\u662F\u6E32\u67D3\u5668\u5728\u53D1\u751F ",paraId:5,tocIndex:3},{value:"change",paraId:5,tocIndex:3},{value:" \u4E8B\u4EF6\u65F6\u544A\u77E5\u7ED9\u5916\u9762\u7684\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u5904\u7406\u7279\u6B8A\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:5,tocIndex:3}];e.d(m,["texts",0,P])}),12422:(function(_,m,e){e.r(m);const P=[{value:"\u6570\u636E\u8054\u52A8\u6709\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5206\u522B\u662F ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:" \u4E24\u79CD\u65B9\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u5728\u89E6\u53D1 ",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:" \u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7\u6539\u53D8\u6570\u636E\u5B9E\u73B0\u3002",paraId:1,tocIndex:1},{value:"watch",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u662F ",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u7684\u4E00\u79CD\u4FBF\u6377\u5199\u6CD5\uFF0C\u907F\u514D\u5927\u91CF ",paraId:2,tocIndex:2},{value:"if",paraId:2,tocIndex:2},{value:" \u8BED\u53E5\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u6E05\u6670\u5EA6\u4EE5\u53CA\u7814\u53D1\u6548\u7387\u3002",paraId:2,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:" \u5339\u914D\u7684\u662F ",paraId:3,tocIndex:2},{value:"sPath",paraId:3,tocIndex:2},{value:" \u8DEF\u5F84\u503C\uFF0C\u5982\u679C\u662F\u5D4C\u5957\u8DEF\u5F84\u503C\uFF0C\u5219\u4F7F\u7528\u70B9 ",paraId:3,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:" \u62FC\u63A5\u8868\u793A\uFF0C\u5982 ",paraId:3,tocIndex:2},{value:"objectX.width",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"\u8054\u52A8\u5BF9\u8C61\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:3},{value:"extra",paraId:4,tocIndex:3},{value:" \u5C5E\u6027\u6765\u5904\u7406\u3002",paraId:4,tocIndex:3}];e.d(m,["texts",0,P])}),59428:(function(_,m,e){e.r(m);const P=[{value:"\u6E32\u67D3\u5668\u662F\u4E3B\u8981\u5185\u5BB9\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C5E\u6027\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EF\u72EC\u7ACB\u5B9A\u4E49\u5E03\u5C40\u7ED3\u6784\uFF08\u4E0D\u53D7\u9650\u4E8E itemLayout \u5E03\u5C40\uFF09\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"readonlyComponent",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"readonlyFormItem",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6\u6CE8\u518C\u6D41\u7A0B\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:"component",paraId:3,tocIndex:1},{value:" \u6A21\u5F0F\u662F\u5E38\u7528\u7684\u5B9A\u4E49\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u7F16\u5199\u6807\u9898\u4E0E\u5185\u5BB9\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u7531 ",paraId:3,tocIndex:1},{value:"itemLayout",paraId:3,tocIndex:1},{value:" \u7EDF\u4E00\u7BA1\u7406\u3002",paraId:3,tocIndex:1},{value:"\u4E0B\u9762\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"component",paraId:4,tocIndex:1},{value:" \u6A21\u5F0F\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BC4\u5206\u6E32\u67D3\u5668\u3002",paraId:4,tocIndex:1},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"IOpenComponentParams",paraId:5,tocIndex:2},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:5,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:2},{value:"\u8BF4\u660E",paraId:6,tocIndex:2},{value:"\u7C7B\u578B",paraId:6,tocIndex:2},{value:"schema",paraId:6,tocIndex:2},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:6,tocIndex:2},{value:"ISchema",paraId:6,tocIndex:2},{value:"value",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:6,tocIndex:2},{value:"any",paraId:6,tocIndex:2},{value:"rootValue",paraId:6,tocIndex:2},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"path",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:6,tocIndex:2},{value:"array",paraId:6,tocIndex:2},{value:"sPath",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:6,tocIndex:2},{value:"string",paraId:6,tocIndex:2},{value:"required",paraId:6,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"disabled",paraId:6,tocIndex:2},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"readonly",paraId:6,tocIndex:2},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"locale",paraId:6,tocIndex:2},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"userCtx",paraId:6,tocIndex:2},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"objectStyle",paraId:6,tocIndex:2},{value:"\u5BF9\u8C61\u7C7B\u578B\u6837\u5F0F",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"validator",paraId:6,tocIndex:2},{value:"\u6821\u9A8C\u5668\u4FE1\u606F\uFF0C\u5305\u542B\u6821\u9A8C\u72B6\u6001\u3001\u63D0\u793A\u6D88\u606F\u4E0E\u9644\u52A0\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"onChange",paraId:6,tocIndex:2},{value:"\u8868\u5355\u9879\u503C\u56DE\u8C03\u4E8B\u4EF6",paraId:6,tocIndex:2},{value:"Function",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: any, options?: IOpenChangeOptions) => void",paraId:7,tocIndex:3},{value:"options",paraId:7,tocIndex:3},{value:` \u53EF\u9009\u53C2\u6570\u5982\u4E0B\uFF1A
`,paraId:7,tocIndex:3},{value:"triggerValidator",paraId:8,tocIndex:3},{value:": \u662F\u5426\u89E6\u53D1\u6821\u9A8C\u5668\uFF0C",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:" \u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"extra",paraId:8,tocIndex:3},{value:": \u643A\u5E26\u7684\u989D\u5916\u6570\u636E\uFF0C\u4EFB\u610F\u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"formItem",paraId:9,tocIndex:4},{value:" \u6A21\u5F0F\u9002\u7528\u4E8E\u9700\u8981\u7A81\u7834 ",paraId:9,tocIndex:4},{value:"itemLayout",paraId:9,tocIndex:4},{value:" \u7684\u9650\u5236\uFF0C\u72EC\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7684\u573A\u666F\u3002",paraId:9,tocIndex:4},{value:"\u540C\u6837\u4EE5\u8BC4\u5206\u6E32\u67D3\u5668\u4E3A\u4F8B\uFF0C\u5C06\u8868\u5355\u9879\u7684\u6807\u9898\u52A0\u7C97\u52A0\u7EA2\u6765\u5C55\u793A\u3002",paraId:10,tocIndex:4},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:5},{value:"IOpenFormItemParams",paraId:11,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:11,tocIndex:5},{value:"\u76EE\u524D ",paraId:12,tocIndex:5},{value:"formItem",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E0E ",paraId:12,tocIndex:5},{value:"component",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E00\u81F4\u3002",paraId:12,tocIndex:5},{value:"\u7F16\u5199\u53EA\u8BFB\u6001\u903B\u8F91\u6709 2 \u79CD\u65B9\u5F0F\uFF1A",paraId:13,tocIndex:6},{value:"\u7B2C\u4E00\u79CD\uFF0C\u5728 ",paraId:14,tocIndex:6},{value:"component",paraId:14,tocIndex:6},{value:" \u7EC4\u4EF6\u91CC\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonly",paraId:14,tocIndex:6},{value:" \u72B6\u6001\u533A\u5206\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5B58\u5728 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\uFF0C\u5E76\u4E14\u5728\u590D\u6742\u7EC4\u4EF6\u91CC\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"\u7B2C\u4E8C\u79CD\uFF0C\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:14,tocIndex:6},{value:" \u58F0\u660E\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\u4F7F\u5F97\u67B6\u6784\u66F4\u6E05\u6670\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u7EC4\u4EF6\u907F\u514D\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:15,tocIndex:6},{value:" \u53C2\u6570\u4E0E ",paraId:15,tocIndex:6},{value:"component",paraId:15,tocIndex:6},{value:" \u4E00\u81F4\u3002",paraId:15,tocIndex:6},{value:"readonlyFormItem",paraId:16,tocIndex:7},{value:" \u4E0E ",paraId:16,tocIndex:7},{value:"readonlyComponent",paraId:16,tocIndex:7},{value:" \u6A21\u5F0F\u4E00\u81F4\uFF0C\u53C2\u6570\u4E0E ",paraId:16,tocIndex:7},{value:"formItem",paraId:16,tocIndex:7},{value:" \u4E00\u81F4\u3002",paraId:16,tocIndex:7},{value:"\u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\uFF1B\u8BE6\u60C5\u89C1 ",paraId:17,tocIndex:8},{value:"Renderer Validator",paraId:18,tocIndex:8},{value:"\u3002",paraId:17,tocIndex:8}];e.d(m,["texts",0,P])}),94259:(function(_,m,e){e.r(m);const P=[{value:"\u901A\u8FC7\u521B\u5EFA\u4EE5 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u5F00\u5934\u7684\u6E32\u67D3\u5668\u53EF\u4EE5\u5236\u4F5C\u5D4C\u5957\u7684\u7ED3\u6784\u8868\u5355\uFF0C\u652F\u6301\u591A\u79CD\u4E0D\u540C\u529F\u80FD\u7684 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u6E32\u67D3\u5668\u540C\u65F6\u5B58\u5728\u3002",paraId:0,tocIndex:0},{value:"\u5212\u91CD\u70B9\uFF1A",paraId:1,tocIndex:0},{value:"Schema \u534F\u8BAE\u6A21\u578B\u7684\u5B50\u8282\u70B9\u901A\u8FC7\u8C03\u7528 ",paraId:2,tocIndex:0},{value:"RendererIterator",paraId:2,tocIndex:0},{value:" \u6E32\u67D3\u5668\u8FED\u4EE3\u5668\u6765\u6E32\u67D3\u3002",paraId:2,tocIndex:0},{value:"\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 ",paraId:2,tocIndex:0},{value:"objectStyle",paraId:2,tocIndex:0},{value:" \u6837\u5F0F\uFF0C\u4EE5\u7EE7\u627F\u5185\u6838\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40\u3002",paraId:2,tocIndex:0},{value:`<div style={objectStyle}>
  <RendererIterator schema={schema} path={path} />
</div>
`,paraId:3,tocIndex:0},{value:"\u6309\u89C4\u8303\u7F16\u5199\u7684\u5BF9\u8C61\u7ED3\u6784 Schema \u662F\u652F\u6301\u5185\u7F6E\u81EA\u52A8\u6821\u9A8C\u7684\uFF0C\u6821\u9A8C\u529F\u80FD\u8BE6\u89C1 ",paraId:4,tocIndex:2},{value:"\u6821\u9A8C\u5668 Validator",paraId:5,tocIndex:2},{value:" \u7AE0\u8282\u3002",paraId:4,tocIndex:2}];e.d(m,["texts",0,P])}),322:(function(_,m,e){e.r(m);const P=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}];e.d(m,["texts",0,P])}),81806:(function(_,m,e){e.r(m);const P=[{value:"\u6821\u9A8C\u529F\u80FD\u6709\u5982\u4E0B\u4E09\u79CD\u65B9\u5F0F\u5B9A\u4E49\uFF1A",paraId:0,tocIndex:0},{value:"Schema Rules",paraId:1,tocIndex:0},{value:": Schema \u534F\u8BAE ",paraId:1,tocIndex:0},{value:"rules",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Global Validators",paraId:1,tocIndex:0},{value:": \u5168\u5C40 ",paraId:1,tocIndex:0},{value:"validators",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Renderer Validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668 ",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Schema Rules \u89C4\u5219\u901A\u8FC7\u5728 Schema \u534F\u8BAE\u58F0\u660E ",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\uFF0C",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u89C4\u5219\u662F\u501F\u9274 ",paraId:2,tocIndex:1},{value:"async-validator",paraId:2,tocIndex:1},{value:" API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:2,tocIndex:1},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:3,tocIndex:1},{value:"\u540D\u79F0",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"type",paraId:4,tocIndex:1},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"required",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:1},{value:"boolean",paraId:4,tocIndex:1},{value:"min",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"max",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"len",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"pattern",paraId:4,tocIndex:1},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"validator",paraId:4,tocIndex:1},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"message",paraId:4,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"\u89E6\u53D1\u65F6\u673A\uFF1A\u6BCF\u6B21\u6E32\u67D3\u5668\u7EC4\u4EF6 ",paraId:5,tocIndex:1},{value:"onChange",paraId:5,tocIndex:1},{value:" \u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u6821\u9A8C\u673A\u5236\uFF0C\u5E76\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u3002",paraId:5,tocIndex:1},{value:"\u5982\u679C\u5E0C\u671B ",paraId:6},{value:"onChange",paraId:6},{value:" \u65F6\u4E0D\u89E6\u53D1\u6821\u9A8C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684 ",paraId:6},{value:"triggerValidator",paraId:6},{value:" \u4E3A ",paraId:6},{value:"false",paraId:6},{value:" \u5B9E\u73B0\uFF0C\u793A\u4F8B\uFF1A",paraId:6},{value:"onChange('xxx', { triggerValidator: false })",paraId:6},{value:"\u3002",paraId:6},{value:"1\u3001Schema Rules \u89C4\u5219\u91CC\u7684 validator \u5B57\u6BB5\u4E0E async-validator API \u4E0D\u5BF9\u5E94\u3002",paraId:7},{value:`
2\u3001Schema Rules \u548C Global Validators \u89C4\u5219\u91CC\u7684 validator \u5C5E\u6027\u4E0D\u5141\u8BB8\u518D\u6B21\u58F0\u660E `,paraId:7},{value:"validator",paraId:7},{value:" \u5C5E\u6027\uFF08\u5185\u90E8\u4F1A\u5FFD\u7565\uFF09\uFF0C\u907F\u514D\u9677\u5165\u5FAA\u73AF\u8C03\u7528\u3002",paraId:7},{value:"\u793A\u4F8B",paraId:8},{value:"Global Validators \u662F\u5168\u5C40\u6821\u9A8C\u5668\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u590D\u7528\u901A\u7528\u7684\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6821\u9A8C\u5668\u6CE8\u518C\u5728\u5168\u5C40 ",paraId:9,tocIndex:2},{value:"validators",paraId:9,tocIndex:2},{value:" \u91CC\uFF0C\u7136\u540E\u5728 schema \u91CC\u901A\u8FC7 ",paraId:9,tocIndex:2},{value:"rules: [{ validator: 'name' }]",paraId:9,tocIndex:2},{value:" \u6765\u4F7F\u7528\u3002",paraId:9,tocIndex:2},{value:"\u901A\u8FC7\u6E32\u67D3\u5668\u7684 ",paraId:10,tocIndex:3},{value:"validator",paraId:10,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u6346\u7ED1\u5728\u4E00\u8D77\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:10,tocIndex:3},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u5148\u6821\u9A8C\u8F93\u5165\u5185\u5BB9\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u6821\u9A8C\u901A\u8FC7\u624D\u5141\u8BB8\u63D0\u4EA4\u6570\u636E\u3002",paraId:11,tocIndex:4},{value:"Global Validators \u548C Renderer Validator \u7684\u5B9A\u4E49\u662F\u4E00\u6837\u7684\uFF0C\u652F\u6301\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF1A",paraId:12,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u4E0E ",paraId:13,tocIndex:5},{value:"Schema Rules",paraId:13,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:13,tocIndex:5},{value:"validator: [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:13,tocIndex:5},{value:"\u3002",paraId:13,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u51FD\u6570\u6821\u9A8C\uFF0C\u51FD\u6570\u53C2\u6570\u5982\u4E0B\u5217\u8868\uFF0C\u7686\u4E3A\u53EA\u8BFB\u5C5E\u6027\u3002",paraId:13,tocIndex:5},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:14,tocIndex:5},{value:"IOpenValidatorParams",paraId:14,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:14,tocIndex:5},{value:"\u53C2\u6570",paraId:15,tocIndex:5},{value:"\u8BF4\u660E",paraId:15,tocIndex:5},{value:"\u7C7B\u578B",paraId:15,tocIndex:5},{value:"schema",paraId:15,tocIndex:5},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:15,tocIndex:5},{value:"ISchema",paraId:15,tocIndex:5},{value:"value",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:15,tocIndex:5},{value:"any",paraId:15,tocIndex:5},{value:"rootValue",paraId:15,tocIndex:5},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"path",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:15,tocIndex:5},{value:"array",paraId:15,tocIndex:5},{value:"sPath",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:15,tocIndex:5},{value:"string",paraId:15,tocIndex:5},{value:"required",paraId:15,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"disabled",paraId:15,tocIndex:5},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"readonly",paraId:15,tocIndex:5},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"locale",paraId:15,tocIndex:5},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"userCtx",paraId:15,tocIndex:5},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u4E09\u79CD\u8FD4\u56DE\u5F62\u6001\uFF1A",paraId:16,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:17,tocIndex:5},{value:"undefined",paraId:17,tocIndex:5},{value:"\uFF0C\u8868\u793A\u6821\u9A8C\u6210\u529F\u3002",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u4E0E ",paraId:17,tocIndex:5},{value:"Schema Rules",paraId:17,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:17,tocIndex:5},{value:"return [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u6807\u51C6\u72B6\u6001\u7ED3\u6784\uFF0C\u5982\u4E0B\u63CF\u8FF0",paraId:17,tocIndex:5},{value:"\u53C2\u6570",paraId:18,tocIndex:5},{value:"\u8BF4\u660E",paraId:18,tocIndex:5},{value:"\u7C7B\u578B",paraId:18,tocIndex:5},{value:"status",paraId:18,tocIndex:5},{value:"\u6821\u9A8C\u72B6\u6001\uFF0C",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" \u9519\u8BEF\uFF0C",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" \u8B66\u544A\uFF0C",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:" \u6210\u529F",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:"message",paraId:18,tocIndex:5},{value:"\u9519\u8BEF\u6216\u8B66\u544A\u72B6\u6001\u65F6\u7684\u63D0\u793A\u4FE1\u606F",paraId:18,tocIndex:5},{value:"string",paraId:18,tocIndex:5},{value:"extra",paraId:18,tocIndex:5},{value:"\u989D\u5916\u6570\u636E",paraId:18,tocIndex:5},{value:"any",paraId:18,tocIndex:5}];e.d(m,["texts",0,P])}),54144:(function(_,m,e){e.r(m);const P=[{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u5728\u6700\u9876\u5C42\u76F4\u63A5\u63A7\u5236\u8868\u5355\u7684\u72B6\u6001\uFF0C\u4EE5\u964D\u4F4E\u534F\u8BAE\u63A7\u5236\u7F16\u7801\u6210\u672C\u3002",paraId:0,tocIndex:0},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u6743\u91CD\u5927\u4E8E Schema \u534F\u8BAE\u7684\u72B6\u6001\u63A7\u5236\u3002",paraId:1,tocIndex:0},{value:"\u4EE5\u4E0B\u662F\u5168\u5C40\u72B6\u6001\u63A7\u5236\u53EF\u7528\u7684\u53C2\u6570",paraId:2,tocIndex:0},{value:"disabled",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u7981\u7528",paraId:3,tocIndex:0},{value:"\uFF0C\u7981\u7528\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-disabled",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0},{value:"readonly",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u53EA\u8BFB",paraId:3,tocIndex:0},{value:"\uFF0C\u53EA\u8BFB\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-readonly",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0}];e.d(m,["texts",0,P])}),64207:(function(_,m,e){e.r(m);const P=[{value:"\u5F53\u8868\u5355\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u7684\u4F4D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void",paraId:1,tocIndex:0},{value:"\u540D\u79F0",paraId:2,tocIndex:1},{value:"\u63CF\u8FF0",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"paths",paraId:2,tocIndex:1},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" | ",paraId:2,tocIndex:1},{value:"string[]",paraId:2,tocIndex:1},{value:"options",paraId:2,tocIndex:1},{value:"\u9009\u9879\u53C2\u6570\uFF0C\u5982\u4E0B\u8868\u683C",paraId:2,tocIndex:1},{value:"IScrollToOptions",paraId:2,tocIndex:1},{value:"\u540D\u79F0",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"xAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 x \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"yAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 y \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"behavior",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u8FC7\u6E21\u884C\u4E3A",paraId:3,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4 ",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"instant",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"auto",paraId:3,tocIndex:2},{value:"gap",paraId:3,tocIndex:2},{value:"\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u5DEE\u503C\uFF0C\u53EF\u4EE5\u662F\u6B63\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"positionedElement",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20 (\u9700\u8981\u5E26\u5B9A\u4F4D\u5C5E\u6027 position)\uFF0C\u9002\u7528\u4E8E\u975E Core \u6839\u8282\u70B9\u6EDA\u52A8",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"Window",paraId:3,tocIndex:2},{value:"\u65E0",paraId:4,tocIndex:3},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u662F ",paraId:5,tocIndex:4},{value:"Core",paraId:5,tocIndex:4},{value:" \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",paraId:5,tocIndex:4},{value:"scrollTo",paraId:5,tocIndex:4},{value:" \u65B9\u6CD5\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u4F4D\u7F6E\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u8D85\u8FC7 Core \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EA\u9700\u5728 ",paraId:6,tocIndex:5},{value:"scrollTo",paraId:6,tocIndex:5},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:6,tocIndex:5},{value:"positionedElement",paraId:6,tocIndex:5},{value:" \u53C2\u6570\u4E3A\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u5373\u53EF\u3002",paraId:6,tocIndex:5},{value:"\u524D\u7F6E\u6761\u4EF6\uFF1A",paraId:7,tocIndex:5},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u9700\u8981\u662F\u201C\u5B9A\u4F4D\u5143\u7D20\u201D\uFF0C\u5982\u58F0\u660E ",paraId:8,tocIndex:5},{value:"position",paraId:8,tocIndex:5},{value:" \u4E3A\u975E ",paraId:8,tocIndex:5},{value:"static",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u8FD9\u6837\u6307\u5B9A\u7684\u8868\u5355\u9879\u624D\u80FD\u67E5\u627E\u5230\u8BE5\u6EDA\u52A8\u7956\u5148\u5143\u7D20\uFF0C\u624D\u80FD\u83B7\u53D6\u5230\u6B63\u786E\u7684\u8DDD\u79BB\u3002",paraId:8,tocIndex:5},{value:"\u5B9A\u4F4D\u5143\u7D20\uFF1A",paraId:8,tocIndex:5},{value:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent",paraId:8,tocIndex:5},{value:"\u5982\u679C\u8981\u8BA9\u7A97\u53E3\u6EDA\u52A8\uFF0C\u540C\u6837\u7684\u65B9\u5F0F\uFF0C\u53EA\u9700\u5728 ",paraId:9,tocIndex:6},{value:"scrollTo",paraId:9,tocIndex:6},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:9,tocIndex:6},{value:"positionedElement",paraId:9,tocIndex:6},{value:" \u53C2\u6570\u4E3A ",paraId:9,tocIndex:6},{value:"window",paraId:9,tocIndex:6},{value:" \u5373\u53EF\uFF0C\u4E0D\u8FC7\u5185\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB\u662F\u53EA\u8BA1\u7B97\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u56E0\u4E3A ",paraId:9,tocIndex:6},{value:"offsetParent",paraId:9,tocIndex:6},{value:" \u6700\u7EC8\u53EA\u80FD\u5B9A\u4F4D\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u6240\u4EE5\uFF08\u4E5F\u662F\u5E38\u7406\u60C5\u51B5\u4E0B\uFF09body \u548C html \u5143\u7D20\u4E0D\u5E94\u8BE5\u5B58\u5728 margin \u548C padding \u503C\u3002",paraId:9,tocIndex:6}];e.d(m,["texts",0,P])}),4800:(function(_,m,e){e.r(m);const P=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"ref",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"validate",paraId:1,tocIndex:0},{value:": \u6821\u9A8C\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"resetError",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\u3002",paraId:1,tocIndex:0},{value:"resetValue",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"setValue",paraId:1,tocIndex:0},{value:": \u8BBE\u7F6E\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getValue",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getRootElement",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:0},{value:"findItem",paraId:1,tocIndex:0},{value:`: \u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u65B9\u6CD5\u5982\u4E0B\u3002
`,paraId:1,tocIndex:0},{value:"getRootElement",paraId:2,tocIndex:0},{value:": \u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:2,tocIndex:0},{value:"scrollTo",paraId:1,tocIndex:0},{value:": \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BE6\u89C1",paraId:1,tocIndex:0},{value:"\u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E ScrollTo",paraId:3,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5982\u6839\u636E\u6821\u9A8C\u7ED3\u679C\u5224\u65AD\u662F\u5426\u63D0\u4EA4\u6570\u636E\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"() => Promise<IOpenValidateResult>",paraId:5,tocIndex:1},{value:"\u65E0",paraId:6,tocIndex:2},{value:"\u540D\u79F0",paraId:7,tocIndex:3},{value:"\u63CF\u8FF0",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"hasError",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u9519\u8BEF",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"hasWarning",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u8B66\u544A",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"errorList",paraId:7,tocIndex:3},{value:"\u9519\u8BEF\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"warningList",paraId:7,tocIndex:3},{value:"\u8B66\u544A\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"\u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\uFF0C\u5982\u6570\u636E\u56DE\u586B\u65F6\uFF0C\u53EF\u7528\u6B64\u65B9\u6CD5\u91CD\u7F6E\u9519\u8BEF\u4FE1\u606F",paraId:8,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:5},{value:"(paths?: string | string[]) => void",paraId:9,tocIndex:5},{value:"\u540D\u79F0",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"paths",paraId:10,tocIndex:6},{value:"\u91CD\u7F6E\u6307\u5B9A\u8DEF\u5F84\u7684\u8868\u5355\u9879\u9519\u8BEF\u63D0\u793A\uFF0C\u6CA1\u6709\u6307\u5B9A\u8DEF\u5F84\u5219\u91CD\u7F6E\u6240\u6709\u8868\u5355\u9879",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:" | ",paraId:10,tocIndex:6},{value:"string[]",paraId:10,tocIndex:6},{value:"\u65E0",paraId:11,tocIndex:7},{value:"\u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:12,tocIndex:9},{value:"\u65E0",paraId:13,tocIndex:10},{value:"\u65E0",paraId:14,tocIndex:11},{value:"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:15,tocIndex:13},{value:"\u7C7B\u578B\uFF1A",paraId:16,tocIndex:13},{value:"() => HTMLDivElement | null",paraId:16,tocIndex:13},{value:"\u65E0",paraId:17,tocIndex:14},{value:"\u6839\u8282\u70B9 DOM \u5143\u7D20\u6216\u7A7A",paraId:18,tocIndex:15},{value:"\u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u4F1A\u63D0\u4F9B\u4E00\u4E9B API \u65B9\u6CD5\u3002",paraId:19,tocIndex:17},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:17},{value:"(paths?: string | string[]) => IRendererInstance | undefined",paraId:20,tocIndex:17},{value:"\u540D\u79F0",paraId:21,tocIndex:18},{value:"\u63CF\u8FF0",paraId:21,tocIndex:18},{value:"\u7C7B\u578B",paraId:21,tocIndex:18},{value:"paths",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:" | ",paraId:21,tocIndex:18},{value:"string[]",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5F00\u653E API \u5982\u4E0B",paraId:22,tocIndex:19},{value:"\u540D\u79F0",paraId:23,tocIndex:19},{value:"\u63CF\u8FF0",paraId:23,tocIndex:19},{value:"\u7C7B\u578B",paraId:23,tocIndex:19},{value:"getRootElement",paraId:23,tocIndex:19},{value:"\u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20",paraId:23,tocIndex:19},{value:"() => HTMLElement | null",paraId:23,tocIndex:19}];e.d(m,["texts",0,P])}),69689:(function(_,m,e){e.r(m);const P=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}];e.d(m,["texts",0,P])}),37096:(function(_,m,e){e.r(m);const P=[{value:"\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u5F53\u6355\u83B7\u5230\u9519\u8BEF\u7684\u65F6\u5019\u4F1A\u6807\u7EA2\u5C55\u793A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u4EA6\u53EF\u914D\u7F6E\u5982\u4E0B 2 \u4E2A\u53C2\u6570\u81EA\u5B9A\u4E49\u6216\u9690\u85CF\u9519\u8BEF\u63D0\u793A",paraId:0,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"\u51FD\u6570",paraId:1,tocIndex:0},{value:" \u5219\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F",paraId:1,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"silent",paraId:1,tocIndex:0},{value:" \u5219\u4E0D\u63D0\u793A\u9519\u8BEF",paraId:1,tocIndex:0}];e.d(m,["texts",0,P])}),18482:(function(_,m,e){e.r(m);const P=[{value:"Core",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}];e.d(m,["texts",0,P])}),70185:(function(_,m,e){e.r(m);const P=[{value:"\u53C2\u89C1",paraId:0,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u7C7B\u540D\u3002",paraId:2,tocIndex:2},{value:"\u8868\u5355\u9ED8\u8BA4\u503C\u3002",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5168\u5C40\u7981\u7528\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:4,tocIndex:4},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u3002",paraId:4,tocIndex:4},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:6,tocIndex:5},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:7,tocIndex:5},{value:"\u3002",paraId:6,tocIndex:5},{value:"\u8868\u5355\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:8,tocIndex:6},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:9,tocIndex:6},{value:"\u3002",paraId:8,tocIndex:6},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u5217\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:10,tocIndex:7},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:11,tocIndex:7},{value:"\u3002",paraId:10,tocIndex:7},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u6700\u5C0F\u5BBD\u5EA6\u4E0E\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53 layout \u4E3A autoFill\u3001autoFit \u65F6\u751F\u6548\uFF0C\u8BE6\u60C5\u89C1",paraId:12,tocIndex:8},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:13,tocIndex:8},{value:"\u3002",paraId:12,tocIndex:8},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u884C\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:14,tocIndex:9},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:15,tocIndex:9},{value:"\u3002",paraId:14,tocIndex:9},{value:"\u56FD\u9645\u5316\uFF0C\u8BE6\u60C5\u89C1",paraId:16,tocIndex:10},{value:"\u56FD\u9645\u5316 Locale",paraId:17,tocIndex:10},{value:"\u3002",paraId:16,tocIndex:10},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:18,tocIndex:11},{value:"onChange \u4E8B\u4EF6",paraId:19,tocIndex:11},{value:"\u3002",paraId:18,tocIndex:11},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:20,tocIndex:12},{value:"onItemChange \u4E8B\u4EF6",paraId:21,tocIndex:12},{value:"\u3002",paraId:20,tocIndex:12},{value:"\u6837\u5F0F\u7C7B\u540D\u524D\u7F00\uFF0C\u9ED8\u8BA4\u4E3A schema-render\u3002",paraId:22,tocIndex:13},{value:"\u662F\u5426\u5168\u5C40\u53EA\u8BFB\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:23,tocIndex:14},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:24,tocIndex:14},{value:"\u3002",paraId:23,tocIndex:14},{value:"\u6CE8\u518C\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:25,tocIndex:15},{value:"\u6E32\u67D3\u5668 Renderer",paraId:26,tocIndex:15},{value:"\u3002",paraId:25,tocIndex:15},{value:"Schema \u63CF\u8FF0\u534F\u8BAE\u3002",paraId:27,tocIndex:16},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u3002",paraId:28,tocIndex:17},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E\u3002",paraId:29,tocIndex:18},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:30,tocIndex:19},{value:"Global Validators",paraId:31,tocIndex:19},{value:"\u3002",paraId:30,tocIndex:19},{value:"\u8868\u5355\u6570\u636E\u3002",paraId:32,tocIndex:20},{value:"\u76D1\u542C\u6570\u636E\u53D8\u5316\u5904\u7406\u8054\u52A8\u903B\u8F91\uFF0C\u8BE6\u60C5\u89C1",paraId:33,tocIndex:21},{value:"\u6570\u636E\u8054\u52A8 watch \u65B9\u5F0F",paraId:34,tocIndex:21},{value:"\u3002",paraId:33,tocIndex:21}];e.d(m,["texts",0,P])}),21823:(function(_,m,e){e.r(m);const P=[{value:"600 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"1800 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}];e.d(m,["texts",0,P])}),33022:(function(_,m,e){e.r(m);const P=[];e.d(m,["texts",0,P])}),38612:(function(_,m,e){e.r(m);const P=[];e.d(m,["texts",0,P])}),34191:(function(_,m,e){e.r(m);const P=[{value:"\u89C1: ",paraId:0,tocIndex:1},{value:"Schema Transform",paraId:1,tocIndex:1}];e.d(m,["texts",0,P])}),7364:(function(_,m,e){e.r(m);const P=[];e.d(m,["texts",0,P])}),57263:(function(_,m,e){e.r(m);const P=[];e.d(m,["texts",0,P])}),86679:(function(_,m,e){e.r(m);const P=[{value:"\u6709 ",paraId:0,tocIndex:1},{value:"value",paraId:0,tocIndex:1},{value:"\uFF0C\u6709 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u573A\u666F",paraId:0,tocIndex:1},{value:"\u6709 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\uFF0C\u65E0 ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u573A\u666F",paraId:1,tocIndex:2},{value:"\u6709 ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:"\uFF0C\u6709 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\uFF0C\u4F46 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:" \u4E0D\u66F4\u65B0\u503C\uFF0C\u975E\u6B63\u5E38\u573A\u666F",paraId:2,tocIndex:3},{value:"\u65E0 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\uFF0C\u65E0 ",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:" \u573A\u666F",paraId:3,tocIndex:4},{value:"\u65E0 ",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:"\uFF0C\u6709 ",paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:" \u573A\u666F",paraId:4,tocIndex:5}];e.d(m,["texts",0,P])}),91862:(function(_,m,e){e.r(m);const P=[{value:"\u591A\u4E2A\u6E32\u67D3\u5668\u5185\u90E8\u540C\u65F6\u5728 ",paraId:0,tocIndex:0},{value:"useEffect",paraId:0,tocIndex:0},{value:" \u5185\u8C03\u7528 ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u65B9\u6CD5\u66F4\u65B0\uFF08\u521D\u59CB\u5316\uFF09\u6570\u636E\uFF0Cvalue \u503C\u9700\u8981\u662F\u6700\u65B0\u7684",paraId:0,tocIndex:0}];e.d(m,["texts",0,P])}),65472:(function(_,m,e){e.r(m);const P=[{value:"disabledComponent",paraId:0,tocIndex:0},{value:" \u4E0E ",paraId:0,tocIndex:0},{value:"disabledFormItem",paraId:0,tocIndex:0},{value:" \u9A8C\u8BC1",paraId:0,tocIndex:0}];e.d(m,["texts",0,P])}),72542:(function(_,m,e){e.r(m);const P=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86\u5E03\u5C40\u7ED3\u6784\u4EE5\u53CA\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u4EE5\u8FBE\u5230 ",paraId:0,tocIndex:0},{value:"\u5F00\u7BB1\u5373\u7528",paraId:0,tocIndex:0},{value:" \u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u7EB5\u5411\u4E0E\u6A2A\u5411\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784\u53EF\u914D\u7F6E label \u5BBD\u5EA6\u7B49\u5185\u5BB9\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6807\u9898\u8BBE\u7F6E label",paraId:4,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C\u7279\u6027\uFF0C\u5982\u63D0\u4EA4\u3001\u91CD\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:5,tocIndex:0},{value:"\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5185\u7F6E\u6E32\u67D3\u5668 renderers",paraId:6,tocIndex:0},{value:`npm install @schema-render/form-render-react --save
`,paraId:7,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:8,tocIndex:1},{value:`npm install antd --save
`,paraId:9,tocIndex:1}];e.d(m,["texts",0,P])}),66748:(function(_,m,e){e.r(m);const P=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u7EB5\u5411\u4E0E\u6A2A\u5411\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5B9A\u5236\u3002",paraId:0,tocIndex:0},{value:"\u7EB5\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:1,tocIndex:1},{value:"vertical",paraId:1,tocIndex:1},{value:" \u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6A2A\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:2,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:2,tocIndex:2},{value:"horizontal",paraId:2,tocIndex:2},{value:" \u5373\u53EF\u3002",paraId:2,tocIndex:2},{value:"\u5B9A\u5236\u5E03\u5C40\u8BF7\u67E5\u770B ",paraId:3,tocIndex:3},{value:"Core \u6587\u6863",paraId:4,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}];e.d(m,["texts",0,P])}),64499:(function(_,m,e){e.r(m);const P=[{value:"label",paraId:0,tocIndex:0},{value:" \u76F8\u5173\u7684\u914D\u7F6E\u4E3B\u8981\u9488\u5BF9\u4E8E ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"horizontal",paraId:0,tocIndex:0},{value:" \u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u3001\u95F4\u8DDD\u3001\u5192\u53F7\u3001\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"labelWidth",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E \u201C\u6807\u9898\u5757\u201D \u7684\u5BBD\u5EA6\uFF0C\u652F\u6301 ",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:" \u4E0E ",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" \u7C7B\u578B\u3002",paraId:2,tocIndex:1},{value:"labelColon",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u63A7\u5236\u5192\u53F7\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u65E0\u3002",paraId:3,tocIndex:4},{value:"labelRender",paraId:4,tocIndex:5},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u201C\u6807\u9898\u5757\u201D\u7684\u6E32\u67D3\u5185\u5BB9\uFF0C\u5982\u5FC5\u586B ",paraId:4,tocIndex:5},{value:"*",paraId:4,tocIndex:5},{value:" \u53F7\u6807\u8BB0\u8C03\u6574\u4E3A ",paraId:4,tocIndex:5},{value:"(\u53EF\u9009)",paraId:4,tocIndex:5},{value:" \u8FD9\u6837\u7684\u5F62\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u540D\u79F0",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"labelWidth",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number | string",paraId:5,tocIndex:6},{value:"100",paraId:5,tocIndex:6},{value:"labelGap",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"15",paraId:5,tocIndex:6},{value:"labelColon",paraId:5,tocIndex:6},{value:"\u5B9A\u4E49 label \u5192\u53F7",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"labelRender",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:5,tocIndex:6},{value:"(params) => ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u62E5\u6709 ",paraId:6,tocIndex:7},{value:"labelWidth",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelGap",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelColon",paraId:6,tocIndex:7},{value:" \u5916\uFF0C\u8FD8\u62E5\u6709\u4EE5\u4E0B\u53C2\u6570\u3002",paraId:6,tocIndex:7},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"schema",paraId:7,tocIndex:7},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:7,tocIndex:7},{value:"ISchema",paraId:7,tocIndex:7},{value:"required",paraId:7,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"readonly",paraId:7,tocIndex:7},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"locale",paraId:7,tocIndex:7},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"userCtx",paraId:7,tocIndex:7},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"prefixClassNames",paraId:7,tocIndex:7},{value:"\u5BF9 ",paraId:7,tocIndex:7},{value:"classnames",paraId:7,tocIndex:7},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:7,tocIndex:7},{value:"(...args: classNames.ArgumentArray) => string",paraId:7,tocIndex:7}];e.d(m,["texts",0,P])}),20173:(function(_,m,e){e.r(m);const P=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4",paraId:0,tocIndex:0},{value:"\u4E0E",paraId:0,tocIndex:0},{value:"\u91CD\u7F6E",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\uFF0C\u76F8\u5173 API \u5982\u4E0B\u6587\u6240\u8FF0\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u300C\u63D0\u4EA4\u300D\u6309\u94AE\uFF0C\u6216\u5728\u8868\u5355\u5185\u6309\u4E0B\u56DE\u8F66\u952E\u89E6\u53D1\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:1},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6570\u636E",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u7684\u65F6\u5019\u89E6\u53D1\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:4,tocIndex:2},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:": \u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E",paraId:4,tocIndex:2},{value:"\u91CD\u7F6E\u4E8B\u4EF6\u652F\u6301\u5F02\u6B65\uFF0C\u6B64\u65F6\u6309\u94AE\u4F1A\u589E\u52A0 loading \u6548\u679C\u3002",paraId:5},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\u4F1A\u5728 ",paraId:6,tocIndex:3},{value:"onReset",paraId:6,tocIndex:3},{value:" \u4E4B\u524D\u89E6\u53D1\uFF0C\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61\u6570\u636E\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E\u3002",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:7,tocIndex:3},{value:"value",paraId:7,tocIndex:3},{value:": \u5F53\u524D\u8868\u5355\u6570\u636E",paraId:7,tocIndex:3},{value:"actions",paraId:8,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u662F\u5426\u5C55\u793A\u53CA\u5176\u987A\u5E8F\uFF0C\u9ED8\u8BA4 ",paraId:8,tocIndex:4},{value:"actions",paraId:8,tocIndex:4},{value:" \u7B49\u4E8E ",paraId:8,tocIndex:4},{value:"['submit', 'reset']",paraId:8,tocIndex:4},{value:"\u3002",paraId:8,tocIndex:4},{value:"\u652F\u6301\u5217\u8868\u5982\u4E0B\uFF1A",paraId:9,tocIndex:4},{value:"submit",paraId:10,tocIndex:4},{value:": \u63D0\u4EA4",paraId:10,tocIndex:4},{value:"reset",paraId:10,tocIndex:4},{value:": \u91CD\u7F6E",paraId:10,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:7},{value:"registerActions",paraId:11,tocIndex:7},{value:" \u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:11,tocIndex:7},{value:"\u64CD\u4F5C\u540D\u79F0\u662F ",paraId:12,tocIndex:8},{value:"submit",paraId:12,tocIndex:8},{value:"\u3001",paraId:12,tocIndex:8},{value:"reset",paraId:12,tocIndex:8},{value:"\uFF0C\u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A\uFF0C\u5982\u8986\u76D6\u63D0\u4EA4\u6309\u94AE\uFF0C\u589E\u52A0\u3010\u4E8C\u6B21\u786E\u8BA4\u3011\u7684\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u6DFB\u52A0\u56FE\u6807\u3002",paraId:12,tocIndex:8},{value:"registerActions",paraId:13,tocIndex:9},{value:" \u6CE8\u518C\u9879\u7684\u7C7B\u578B\u4E3A\uFF1A",paraId:13,tocIndex:9},{value:"(p: IRegisterActionsFnParams) => ReactNode",paraId:13,tocIndex:9},{value:"IRegisterActionsFnParams",paraId:14,tocIndex:9},{value:" \u53C2\u6570\u8BE6\u89E3\u5982\u4E0B\u8868\u683C",paraId:14,tocIndex:9},{value:"\u53C2\u6570",paraId:15,tocIndex:9},{value:"\u63CF\u8FF0",paraId:15,tocIndex:9},{value:"\u7C7B\u578B",paraId:15,tocIndex:9},{value:"handleSubmit",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"submit",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"handleReset",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"reset",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u4E8B\u4EF6\u7684 ",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:" \u72B6\u6001",paraId:15,tocIndex:9},{value:"{ submit: boolean; reset: boolean; }",paraId:15,tocIndex:9},{value:"disabled",paraId:15,tocIndex:9},{value:"\u5168\u5C40\u7981\u7528\u72B6\u6001",paraId:15,tocIndex:9},{value:"boolean",paraId:15,tocIndex:9},{value:"locale",paraId:15,tocIndex:9},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:9},{value:"object",paraId:15,tocIndex:9},{value:"submitText",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"resetText",paraId:15,tocIndex:9},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"\u53C2\u6570",paraId:16,tocIndex:10},{value:"\u63CF\u8FF0",paraId:16,tocIndex:10},{value:"\u7C7B\u578B",paraId:16,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:10},{value:"disableFormOnActionLoading",paraId:16,tocIndex:10},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10},{value:"validateFormOnSubmit",paraId:16,tocIndex:10},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10}];e.d(m,["texts",0,P])}),66394:(function(_,m,e){e.r(m);const P=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408",paraId:0,tocIndex:0},{value:"\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u5185\u7F6E\u6E32\u67D3\u5668\u7684\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 ",paraId:1},{value:"schema.renderOptions",paraId:1},{value:" \u4F20\u9012\uFF0C\u5BF9\u5E94 ",paraId:1},{value:"Antd",paraId:1},{value:" \u7EC4\u4EF6\u7684\u53C2\u6570\u3002",paraId:1},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u591A\u9879\u9009\u62E9\u5668\u7684\u5185\u5BB9\u662F\u901A\u8FC7",paraId:2,tocIndex:1},{value:"\u9017\u53F7",paraId:2,tocIndex:1},{value:"\u62FC\u63A5\u5728\u4E00\u8D77\u7684\uFF0C\u53C2\u8003 ",paraId:2,tocIndex:1},{value:"locale",paraId:2,tocIndex:1},{value:" \u7684 ",paraId:2,tocIndex:1},{value:"FormRender.comma",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:"\u975E Antd Descriptions \u7EC4\u4EF6\uFF0C\u65E0\u5165\u53C2\uFF0C\u4EC5\u4F5C\u7EAF\u6570\u636E\u5C55\u793A\u3002",paraId:3,tocIndex:2},{value:"v1.4.0",paraId:4,tocIndex:2},{value:"FormRender v1.4.0 \u5F00\u59CB\u652F\u6301 SwitchBox \u6E32\u67D3\u5668\uFF0C\u901A\u8FC7 ",paraId:5,tocIndex:3},{value:"renderOptions.text",paraId:5,tocIndex:3},{value:" \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:5,tocIndex:3},{value:"\u53C2\u6570\u6709\uFF1A",paraId:6,tocIndex:3},{value:"text",paraId:7,tocIndex:3},{value:": \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:7,tocIndex:3},{value:"rightExtraContent",paraId:7,tocIndex:3},{value:": ",paraId:7,tocIndex:3},{value:"ReactNode | ({ value, disabled, readonly }) => ReactNode",paraId:7,tocIndex:3},{value:", \u53F3\u4FA7\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",paraId:7,tocIndex:3},{value:"v2.5.0",paraId:8,tocIndex:3},{value:"rootClassName",paraId:7,tocIndex:3},{value:",: \u6839\u7ED3\u70B9\u7C7B\u540D\u3002",paraId:7,tocIndex:3},{value:"v2.5.0",paraId:9,tocIndex:3},{value:"rootStyle",paraId:7,tocIndex:3},{value:": \u6839\u7ED3\u70B9\u6837\u5F0F\u3002",paraId:7,tocIndex:3},{value:"v2.5.0",paraId:10,tocIndex:3},{value:"\u5176\u4ED6\u4E3A Antd Checkbox \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:7,tocIndex:3},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:11,tocIndex:4},{value:"extra.checkedOptions",paraId:11,tocIndex:4},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:11,tocIndex:4},{value:"options",paraId:11,tocIndex:4},{value:" \u6570\u636E\u3002\u6848\u4F8B\u89C1",paraId:11,tocIndex:4},{value:"Checkbox \u9009\u4E2D\u503C\u8054\u52A8",paraId:12,tocIndex:4},{value:"\u3002",paraId:11,tocIndex:4},{value:"v1.4.0",paraId:13,tocIndex:4},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:14,tocIndex:5},{value:"extra.selectedOptions",paraId:14,tocIndex:5},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:14,tocIndex:5},{value:"options",paraId:14,tocIndex:5},{value:" \u6570\u636E\u3002",paraId:14,tocIndex:5},{value:"v1.4.0",paraId:15,tocIndex:5},{value:"\u9ED8\u8BA4\u8FD4\u56DE ",paraId:16,tocIndex:6},{value:"ISOString",paraId:16,tocIndex:6},{value:" \u683C\u5F0F\u7684\u65E5\u671F\u503C\uFF0C\u8BE5\u503C\u53EF\u4EE5\u5F88\u597D\u7684\u652F\u6301\u8DE8\u65F6\u533A\u7684\u9700\u8981\u3002",paraId:16,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:17,tocIndex:6},{value:"outputFormat",paraId:17,tocIndex:6},{value:" \u53EF\u63A7\u5236\u8F93\u51FA\u683C\u5F0F\u3002",paraId:17,tocIndex:6},{value:"v2.2.0",paraId:18,tocIndex:6},{value:"\u9ED8\u8BA4\u8FD4\u56DE ISOString \u683C\u5F0F\u7684\u65E5\u671F\u503C\u3002",paraId:19,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:20,tocIndex:7},{value:"outputFormat",paraId:20,tocIndex:7},{value:" \u53EF\u63A7\u5236\u8F93\u51FA\u683C\u5F0F\u3002",paraId:20,tocIndex:7},{value:"v2.2.0",paraId:21,tocIndex:7},{value:"\u63A7\u5236\u503C\u683C\u5F0F\uFF1A",paraId:22,tocIndex:7},{value:"v2.3.0",paraId:23,tocIndex:7},{value:"valueStruct",paraId:24,tocIndex:7},{value:": ",paraId:24,tocIndex:7},{value:"object | array",paraId:24,tocIndex:7},{value:", ",paraId:24,tocIndex:7},{value:"object",paraId:24,tocIndex:7},{value:" \u8868\u793A\u503C\u4E3A\u5BF9\u8C61\u683C\u5F0F\uFF0C\u6B64\u65F6\u901A\u8FC7 ",paraId:24,tocIndex:7},{value:"valueFieldMap",paraId:24,tocIndex:7},{value:" \u53EF\u63A7\u5236\u5B57\u6BB5\u540D\u79F0\u3002",paraId:24,tocIndex:7},{value:"valueFieldMap",paraId:24,tocIndex:7},{value:": \u5BF9\u8C61\u683C\u5F0F\u65F6\u53EF\u7528\uFF0C",paraId:24,tocIndex:7},{value:"{ start: '\u5B9A\u4E49\u5F00\u59CB\u65F6\u95F4\u5B57\u6BB5\u540D', end: '\u5B9A\u4E49\u7ED3\u675F\u65F6\u95F4\u5B57\u6BB5\u540D' }",paraId:24,tocIndex:7},{value:"\u3002",paraId:24,tocIndex:7},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u6587\u6848\u5C55\u793A\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:25,tocIndex:7},{value:"locale",paraId:25,tocIndex:7},{value:" \u7684 ",paraId:25,tocIndex:7},{value:"FormRender.displayDateRange",paraId:25,tocIndex:7},{value:" \u6765\u81EA\u5B9A\u4E49\u3002",paraId:25,tocIndex:7},{value:"renderOptions.headerOptions",paraId:26,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5934\u90E8\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:26,tocIndex:8},{value:"Collapse",paraId:26,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:26,tocIndex:8},{value:"renderOptions.panelOptions",paraId:26,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5185\u5BB9\u9762\u677F\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:26,tocIndex:8},{value:"Collapse.Panel",paraId:26,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:26,tocIndex:8},{value:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF0C\u5E94\u7528\u573A\u666F\uFF1A\u6B65\u9AA4\u8868\u5355\u3002",paraId:27,tocIndex:9},{value:"\u63A5\u53D7 ",paraId:28,tocIndex:9},{value:"className",paraId:28,tocIndex:9},{value:" \u548C ",paraId:28,tocIndex:9},{value:"style",paraId:28,tocIndex:9},{value:" \u5C5E\u6027\u3002",paraId:28,tocIndex:9}];e.d(m,["texts",0,P])}),8832:(function(_,m,e){e.r(m);const P=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}];e.d(m,["texts",0,P])}),63795:(function(_,m,e){e.r(m);const P=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"Core",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"rootClassName",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"rootStyle",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"itemLayout",paraId:1,tocIndex:0},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784",paraId:1,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"vertical",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"React.ComponentType<IOpenItemLayoutParams>",paraId:2,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:"readonlyPlaceholder",paraId:1,tocIndex:0},{value:"\u53EA\u8BFB\u72B6\u6001\u6CA1\u6709\u6570\u636E\u65F6\u7684\u5360\u4F4D\u7B26\uFF0C",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"undefined",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"\u7A7A\u5B57\u7B26\u4E32",paraId:1,tocIndex:0},{value:" \u4F1A\u88AB\u5224\u5B9A\u4E3A\u7A7A\u6570\u636E",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelWidth",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\uFF08\u6807\u9898\u5757\uFF09\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"100",paraId:1,tocIndex:0},{value:"labelColon",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u5192\u53F7",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelGap",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"15",paraId:1,tocIndex:0},{value:"labelRender",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:1,tocIndex:0},{value:"(params) => ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:'["submit", "reset"]',paraId:1,tocIndex:0},{value:"registerActions",paraId:1,tocIndex:0},{value:"\u6CE8\u518C\u64CD\u4F5C\u884C\u4E3A\uFF0C\u5982\u679C\u662F submit\u3001reset \u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A",paraId:1,tocIndex:0},{value:"IRegisterActions",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"disableFormOnActionLoading",paraId:1,tocIndex:0},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"validateFormOnSubmit",paraId:1,tocIndex:0},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"submitText",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"resetText",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onSubmit",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onBeforeReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\uFF0C\u5982\u679C\u8FD4\u56DE\u6570\u636E\uFF0C\u5219\u4F5C\u4E3A\u65B0\u6570\u636E\u586B\u5165\u8868\u5355",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}];e.d(m,["texts",0,P])}),66417:(function(_,m,e){e.r(m);const P=[{value:"\u901A\u8FC7\u5728 ",paraId:0,tocIndex:0},{value:"Schema",paraId:0,tocIndex:0},{value:" \u4E0A\u6307\u5B9A ",paraId:0,tocIndex:0},{value:"span",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"spanStart",paraId:0,tocIndex:0},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:0,tocIndex:0},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"\u4F4D\u7F6E",paraId:0,tocIndex:0},{value:"\uFF0C\u8BE6\u60C5\u89C1",paraId:0,tocIndex:0},{value:"\u6805\u683C\u5E03\u5C40-\u81EA\u5B9A\u4E49\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0}];e.d(m,["texts",0,P])}),13234:(function(_,m,e){e.r(m);const P=[{value:"\u6B65\u9AA4\u8868\u5355\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u90FD\u7531 FormRender \u6E32\u67D3\uFF0C\u901A\u8FC7 hidden \u5C5E\u6027\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u6570\u636E\u5728\u4E00\u4E2A FormRender \u5B9E\u4F8B\u91CC\uFF0C\u6821\u9A8C\u65B9\u6CD5\u53EA\u8C03\u7528\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u6709\u53D8\u5316\uFF0C\u9700\u8981\u5C06\u8868\u5355\u9879\u653E\u5728 Object \u5BF9\u8C61\u91CC",paraId:2,tocIndex:0},{value:"\u6E32\u67D3\u591A\u4E2A FormRender \u5B9E\u4F8B",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u65E0\u53D8\u5316",paraId:3,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u6821\u9A8C\u65B9\u6CD5\u9700\u8981\u8C03\u7528\u591A\u4E2A\uFF0C\u6700\u7EC8\u7684\u6570\u636E\u9700\u8981\u5408\u5E76\u5728\u4E00\u8D77",paraId:3,tocIndex:0},{value:"\u4E0B\u9762\u793A\u4F8B\u7B2C\u4E00\u79CD\u65B9\u6848",paraId:4,tocIndex:0}];e.d(m,["texts",0,P])}),38725:(function(_,m,e){e.r(m);const P=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\uFF0C\u6821\u9A8C\u4E0D\u89E6\u53D1\u3002",paraId:1,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u65F6\uFF0C\u672A\u8F93\u5165\u5931\u8D25\u539F\u56E0\u9700\u8981\u89E6\u53D1\u6821\u9A8C\u3002",paraId:1,tocIndex:0},{value:"\u6280\u672F\u5B9E\u73B0",paraId:2,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: false",paraId:3,tocIndex:0},{value:" \u8FBE\u5230\u4E0D\u89E6\u53D1\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u6E05\u695A\u5DF2\u6709\u7684\u9519\u8BEF\u63D0\u793A\u3002",paraId:3,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u8F93\u5165\u6846\u8F93\u5165\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: true",paraId:3,tocIndex:0},{value:" \u89E6\u53D1\u6821\u9A8C\u3002",paraId:3,tocIndex:0}];e.d(m,["texts",0,P])}),62779:(function(_,m,e){e.r(m);const P=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u5B58\u5728\u6700\u5C0F\u957F\u5EA6\u6821\u9A8C\u65F6\uFF0C\u5E0C\u671B\u5728\u8F93\u5165\u7684\u65F6\u5019\u4E0D\u6821\u9A8C\u6570\u636E\uFF0C\u5728\u5931\u53BB\u7126\u70B9\uFF08",paraId:1,tocIndex:0},{value:"onBlur",paraId:1,tocIndex:0},{value:"\uFF09\u65F6\u624D\u6821\u9A8C\u6570\u636E\u6B63\u786E\u6027\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u901A\u8FC7\u5728 renderOptions \u4E0A\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"validateOnBlur: true",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u53EF\u5B9E\u73B0\u4E0A\u8FF0\u9700\u6C42\u3002",paraId:3,tocIndex:0},{value:`\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5185\u7F6E\u6E32\u67D3\u5668\u6709\uFF1A
`,paraId:3,tocIndex:0},{value:"InputText",paraId:4,tocIndex:0},{value:"InputNumber",paraId:4,tocIndex:0},{value:"Password",paraId:4,tocIndex:0},{value:"TextArea",paraId:4,tocIndex:0}];e.d(m,["texts",0,P])}),94419:(function(_,m,e){e.r(m);const P=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5F53\u8868\u5355\u9879\u8FC7\u591A\u65F6\u5BB9\u5668\u5B58\u5728\u6EDA\u52A8\u6761\uFF0C\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u65F6\u5E94\u8BE5\u5B9A\u4F4D\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8868\u5355\u9879\u4EE5\u63D0\u9192\u7528\u6237\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:0},{value:"validate",paraId:3,tocIndex:0},{value:" \u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5F97\u5230\u9519\u8BEF\u9879\u6570\u636E\uFF0C\u518D\u901A\u8FC7 ",paraId:3,tocIndex:0},{value:"scrollTo",paraId:3,tocIndex:0},{value:" \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u3002",paraId:3,tocIndex:0}];e.d(m,["texts",0,P])}),55698:(function(_,m,e){e.r(m);const P=[{value:"\u67D0\u4E2A\u8868\u5355\u9879\u9009\u4E2D\u540E\u7684\u503C\u8054\u52A8\u5230\u5176\u4ED6\u8868\u5355\u9879\u4F7F\u7528\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668",paraId:1,tocIndex:0},{value:" + ",paraId:1,tocIndex:0},{value:"userCtx",paraId:1,tocIndex:0},{value:" \u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u901A\u8FC7\u4FEE\u6539 ",paraId:1,tocIndex:0},{value:"Schema",paraId:1,tocIndex:0},{value:" \u7684 ",paraId:1,tocIndex:0},{value:"renderOptions",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:2,tocIndex:1},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:3,tocIndex:2}];e.d(m,["texts",0,P])}),3290:(function(_,m,e){e.r(m);const P=[{value:"\u4E0E Checkbox \u6E32\u67D3\u5668\u4E00\u6837\uFF0C\u4E0D\u8FC7\u5B57\u6BB5\u540D\u662F ",paraId:0,tocIndex:0},{value:"selectedOptions",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:1,tocIndex:1}];e.d(m,["texts",0,P])}),95665:(function(_,m,e){e.r(m);const P=[{value:"100 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"300 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}];e.d(m,["texts",0,P])}),51605:(function(_,m,e){e.r(m);const P=[{value:"\u652F\u6301 ",paraId:0,tocIndex:1},{value:"warning",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"error",paraId:0,tocIndex:1},{value:" \u6837\u5F0F",paraId:0,tocIndex:1}];e.d(m,["texts",0,P])}),74598:(function(_,m,e){e.r(m);const P=[{value:"\u5192\u53F7\u8BBE\u7F6E",paraId:0,tocIndex:1}];e.d(m,["texts",0,P])}),28350:(function(_,m,e){e.r(m);const P=[{value:"\u5185\u6838\u7075\u6D3B\u3001\u9AD8\u53EF\u5B9A\u5236\uFF0C\u4F46\u9700\u8981\u7EC4\u88C5\u5FC5\u8981\u90E8\u4EF6 ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:0,tocIndex:0},{value:"renderers",paraId:0,tocIndex:0},{value:`\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\uFF0C
\u7136\u540E\u901A\u8FC7\u4E00\u5957 Schema \u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u7684\u8868\u5355\u3002`,paraId:0,tocIndex:0},{value:"FormRender",paraId:1,tocIndex:1},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:1,tocIndex:1},{value:"renderers",paraId:1,tocIndex:1},{value:"\uFF08\u5E38\u7528\u8868\u5355\u7C7B\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4EE5\u53CA\u63D0\u4EA4\u91CD\u7F6E\u64CD\u4F5C\uFF0C\u4EE5\u8FBE\u5230",paraId:1,tocIndex:1},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"Search",paraId:2,tocIndex:2},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:2,tocIndex:2}];e.d(m,["texts",0,P])}),18391:(function(_,m,e){e.r(m);const P=[{value:"Search",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4 ",paraId:2,tocIndex:0},{value:"layout",paraId:2,tocIndex:0},{value:" \u4E3A ",paraId:2,tocIndex:0},{value:"autoFill",paraId:2,tocIndex:0},{value:" \u5E03\u5C40",paraId:2,tocIndex:0},{value:"\u589E\u52A0\u6298\u53E0\u5C55\u5F00\u529F\u80FD\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:3,tocIndex:0},{value:`npm install @schema-render/search-react --save
`,paraId:4,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:5,tocIndex:1},{value:`npm install antd --save
`,paraId:6,tocIndex:1},{value:"\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:7,tocIndex:2}];e.d(m,["texts",0,P])}),42944:(function(_,m,e){e.r(m);const P=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u7B49\u76F8\u5173 API \u5916\uFF0C\u8FD8\u589E\u52A0\u4E86\u6298\u53E0\u4E0E\u5C55\u5F00\u64CD\u4F5C\u884C\u4E3A\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8868\u5355\u9879\u8D85\u8FC7 ",paraId:1,tocIndex:1},{value:"2",paraId:1,tocIndex:1},{value:" \u884C\u5C31\u4F1A\u6298\u53E0\uFF0C",paraId:1,tocIndex:1},{value:"onToggleCollapsed",paraId:1,tocIndex:1},{value:" \u662F\u6298\u53E0\u5C55\u5F00\u4E8B\u4EF6\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"actions",paraId:2,tocIndex:2},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:2,tocIndex:2},{value:"string[]",paraId:2,tocIndex:2},{value:'["reset", "submit", "collapse"]',paraId:2,tocIndex:2},{value:"defaultCollapsed",paraId:2,tocIndex:2},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"collapsedRows",paraId:2,tocIndex:2},{value:"\u6298\u53E0\u884C\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"2",paraId:2,tocIndex:2},{value:"calcCollapsedNumber",paraId:2,tocIndex:2},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:2,tocIndex:2},{value:"container",paraId:2,tocIndex:2},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:2,tocIndex:2},{value:"(container?: HTMLElement) => number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"onToggleCollapsed",paraId:2,tocIndex:2},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"(isCollapsed: boolean) => void",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2}];e.d(m,["texts",0,P])}),52051:(function(_,m,e){e.r(m);const P=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}];e.d(m,["texts",0,P])}),71150:(function(_,m,e){e.r(m);const P=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["reset", "submit", "collapse"]',paraId:1,tocIndex:0},{value:"defaultCollapsed",paraId:1,tocIndex:0},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"collapsedRows",paraId:1,tocIndex:0},{value:"\u6298\u53E0\u884C\u6570",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"2",paraId:1,tocIndex:0},{value:"calcCollapsedNumber",paraId:1,tocIndex:0},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:1,tocIndex:0},{value:"container",paraId:1,tocIndex:0},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:1,tocIndex:0},{value:"(container?: HTMLElement) => number",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onToggleCollapsed",paraId:1,tocIndex:0},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(isCollapsed: boolean) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}];e.d(m,["texts",0,P])}),6758:(function(_,m,e){e.r(m);const P=[{value:"\u5206\u7C7B\u6807\u9898\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 Object \u5BF9\u8C61\u6E32\u67D3\u5668\uFF0C\u4F1A\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E\u5206\u7C7B\u6807\u9898\u8868\u5355\u9879\u5360\u6EE1\u4E00\u884C\uFF0C\u4E0D\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0}];e.d(m,["texts",0,P])}),82174:(function(_,m,e){e.r(m);const P=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u4E3B\u8981\u7279\u6027\u6709\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u7B80\u5355\u3001\u5F00\u7BB1\u5373\u7528",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u7A7A\u6570\u636E\u5360\u4F4D\u7B26\u5904\u7406",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u5217\u5BBD\u5EA6\u5904\u7406",paraId:2,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF08\u4E00\u5C4F\u5C55\u793A\uFF09\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u9AD8\u5EA6\u81EA\u9002\u5E94 AutoScrollY",paraId:3,tocIndex:0},{value:"\u652F\u6301\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:4,tocIndex:0},{value:"\u652F\u6301\u914D\u7F6E\u5F0F\u64CD\u4F5C\u680F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:5,tocIndex:0},{value:"\u652F\u6301\u5E38\u89C1\u6570\u636E\u7C7B\u578B\u663E\u793A\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6570\u636E\u663E\u793A Value Type",paraId:6,tocIndex:0},{value:"\u652F\u6301\u524D\u7AEF\u6392\u5E8F\uFF1A\u6309\u62FC\u97F3\u3001\u6570\u5B57\u3001\u65E5\u671F\u683C\u5F0F\u6392\u5E8F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6392\u5E8F Sort",paraId:7,tocIndex:0},{value:"\u652F\u6301\u201C\u5408\u8BA1\u680F\u201D\uFF0C\u901A\u8FC7\u6570\u636E\u81EA\u52A8\u5339\u914D\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5408\u8BA1\u680F Summary",paraId:8,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u9690\u85CF\u663E\u793A\u3001\u6392\u5E8F\u3001\u5BBD\u5EA6\u8BBE\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:9,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u8BBE\u7F6E\u6301\u4E45\u5316\u5B58\u50A8\u4E0E\u5408\u5E76\u7B97\u6CD5\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:10,tocIndex:0},{value:`npm install @schema-render/search-table-react --save
`,paraId:11,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:12,tocIndex:1},{value:`npm install antd --save
`,paraId:13,tocIndex:1},{value:"\u57FA\u672C\u7528\u6CD5\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E09\u4E2A\u5C5E\u6027",paraId:14,tocIndex:2},{value:"schema",paraId:15,tocIndex:2},{value:": \u641C\u7D22\u7684\u6761\u4EF6\uFF0C\u8BE6\u89E3 ",paraId:15,tocIndex:2},{value:"Search",paraId:16,tocIndex:2},{value:" \u7EC4\u4EF6\u3002",paraId:15,tocIndex:2},{value:"columns",paraId:15,tocIndex:2},{value:": \u8868\u683C\u5217\u5C5E\u6027\uFF0C\u9664 ",paraId:15,tocIndex:2},{value:"Antd Table columns",paraId:15,tocIndex:2},{value:` \u5C5E\u6027\u5916\uFF0C\u6269\u5C55\u7684\u5C5E\u6027\u89C1 API Reference\u3002
`,paraId:15,tocIndex:2},{value:"\u6CE8\uFF1A",paraId:17,tocIndex:2},{value:"dataIndex",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u9700\u4FDD\u6301\u552F\u4E00\u6027\uFF0C",paraId:17,tocIndex:2},{value:"key",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u53EF\u7701\u7565\u3002",paraId:17,tocIndex:2},{value:"request",paraId:15,tocIndex:2},{value:`: \u8BF7\u6C42\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u6765\u8BF7\u6C42\u540E\u7AEF\u6570\u636E\u63A5\u53E3\uFF0C\u5E76\u6309\u683C\u5F0F\u8FD4\u56DE\u3002
`,paraId:15,tocIndex:2},{value:`\u53C2\u6570\u9664 schema \u58F0\u660E\u7684\u5B57\u6BB5\u5916\uFF0C\u8FD8\u5305\u62EC\u5206\u9875\u5B57\u6BB5\u3002
`,paraId:18,tocIndex:2},{value:"current",paraId:19,tocIndex:2},{value:": \u5F53\u524D\u9875\u7801\u3002",paraId:19,tocIndex:2},{value:"pageSize",paraId:19,tocIndex:2},{value:": \u6BCF\u9875\u6761\u6570\u3002",paraId:19,tocIndex:2},{value:`\u8FD4\u56DE\u5B57\u6BB5\u5982\u4E0B\u3002
`,paraId:18,tocIndex:2},{value:"data",paraId:20,tocIndex:2},{value:": \u8868\u683C\u6570\u636E\u6E90\uFF0C\u5BF9\u5E94 Antd Table \u7684 ",paraId:20,tocIndex:2},{value:"dataSource",paraId:20,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:20,tocIndex:2},{value:"total",paraId:20,tocIndex:2},{value:": \u603B\u7684\u8BB0\u5F55\u6570\uFF0C\u5E94\u7528\u4E8E\u5206\u9875\u3002",paraId:20,tocIndex:2},{value:"summary",paraId:20,tocIndex:2},{value:": \u5408\u8BA1\u680F\u6570\u636E\uFF0C\u8BE6\u89C1 ",paraId:20,tocIndex:2},{value:"\u5408\u8BA1\u680F Summary",paraId:21,tocIndex:2},{value:"\u3002",paraId:20,tocIndex:2}];e.d(m,["texts",0,P])}),44908:(function(_,m,e){e.r(m);const P=[{value:"\u901A\u8FC7\u6DFB\u52A0 ",paraId:0,tocIndex:1},{value:"showRowNumber",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\uFF0C\u53EF\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\u5217\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"rowNumberColumnData",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u914D\u7F6E\u5E8F\u53F7\u5217\u5C5E\u6027\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"Antd Table columns",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:1,tocIndex:2},{value:"\u58F0\u660E ",paraId:2,tocIndex:3},{value:"actionItems",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\uFF0C\u5C06\u6DFB\u52A0\u64CD\u4F5C\u5217\uFF0C\u53C2\u6570\u8BE6\u89E3\u89C1\u6587\u5E95\u3010actionItems \u53C2\u6570\u8BE6\u89E3\u3011\u3002",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6570\u91CF\u8D85\u8FC7\u9608\u503C\uFF0C\u5C06\u4EE5",paraId:3,tocIndex:4},{value:"\u201C\u66F4\u591A\u201D",paraId:3,tocIndex:4},{value:"\u5F62\u5F0F\u4EA4\u4E92\uFF0C\u9ED8\u8BA4\u9608\u503C\u4E3A ",paraId:3,tocIndex:4},{value:"2",paraId:3,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"actionItemsCount",paraId:3,tocIndex:4},{value:" \u4FEE\u6539\u9608\u503C\u3002",paraId:3,tocIndex:4},{value:"\u4E0B\u62C9\u6846\u5C5E\u6027\u53EF\u901A\u8FC7 ",paraId:4,tocIndex:4},{value:"actionItemsDropdownProps",paraId:4,tocIndex:4},{value:" \u914D\u7F6E\uFF0C\u5BF9\u5E94 Antd ",paraId:4,tocIndex:4},{value:"Dropdown",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u3002",paraId:4,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:5},{value:"actionItemsColumnData",paraId:5,tocIndex:5},{value:" \u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u5217\u5C5E\u6027\uFF0C\u540C\u6837\u5BF9\u5E94 Antd Table columns \u503C\u3002",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"record",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u6570\u636E",paraId:6,tocIndex:7},{value:"Record<string, any>",paraId:6,tocIndex:7},{value:"index",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u7D22\u5F15",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"\u9664\u4E86 Antd ",paraId:7,tocIndex:8},{value:"Button",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u5982\u4E0B\u53C2\u6570\u3002",paraId:7,tocIndex:8},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"text",paraId:8,tocIndex:8},{value:"\u64CD\u4F5C\u6587\u6848",paraId:8,tocIndex:8},{value:"string | ReactNode",paraId:8,tocIndex:8},{value:"isShow",paraId:8,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmAgain",paraId:8,tocIndex:8},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmProps",paraId:8,tocIndex:8},{value:"\u4E8C\u6B21\u786E\u8BA4\u5C5E\u6027\uFF0C\u5BF9\u5E94 Antd ",paraId:8,tocIndex:8},{value:"Popconfirm",paraId:8,tocIndex:8},{value:" \u5C5E\u6027",paraId:8,tocIndex:8},{value:"object",paraId:8,tocIndex:8},{value:"onClick",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE Promise \u5C06\u6DFB\u52A0 loading \u6548\u679C",paraId:8,tocIndex:8},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",paraId:8,tocIndex:8}];e.d(m,["texts",0,P])}),25303:(function(_,m,e){e.r(m);const P=[{value:"\u8868\u683C\u7684 ",paraId:0,tocIndex:1},{value:"autoScrollY",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5176\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4EE5\u5B9E\u73B0\u201C\u4E00\u5C4F\u201D\u663E\u793A\u6548\u679C\uFF0C\u800C\u4E0D\u51FA\u73B0\u9875\u9762\u7EA7\u6EDA\u52A8\u6761\u3002",paraId:0,tocIndex:1},{value:"\u5F00\u542F ",paraId:1,tocIndex:1},{value:"autoScrollY",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u540E\uFF0CAntd Table \u7684 ",paraId:1,tocIndex:1},{value:"scroll.y",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1 ",paraId:1,tocIndex:1},{value:"SearchTable",paraId:1,tocIndex:1},{value:" \u6839\u8282\u70B9\u5143\u7D20\u5B58\u5728\u56FA\u5B9A\u9AD8\u5EA6\u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6DFB\u52A0 ",paraId:2,tocIndex:2},{value:"header",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"footer",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleTop",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleBottom",paraId:2,tocIndex:2},{value:" \u5B50\u8282\u70B9\u6548\u679C\u3002",paraId:2,tocIndex:2}];e.d(m,["texts",0,P])}),20927:(function(_,m,e){e.r(m);const P=[{value:"\u5185\u7F6E\u201C\u5408\u8BA1\u201D\u6570\u636E\u663E\u793A\u529F\u80FD\uFF0C\u53EA\u9700\u5728 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u91CC\u8FD4\u56DE ",paraId:0,tocIndex:1},{value:"summaryData",paraId:0,tocIndex:1},{value:" \u6570\u636E\u5373\u53EF\uFF0C\u6570\u636E\u5B57\u6BB5\u5BF9\u5E94\u8868\u683C\u5217\u7684 ",paraId:0,tocIndex:1},{value:"dataIndex",paraId:0,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5408\u8BA1\u6570\u636E\u7684\u4F4D\u7F6E\u5C06\u6839\u636E\u6B64\u5BF9\u5E94\u5173\u7CFB\u81EA\u52A8\u8BA1\u7B97\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"summaryText",paraId:1,tocIndex:2},{value:" \u53EF\u5B9A\u4E49 ",paraId:1,tocIndex:2},{value:"\u5408\u8BA1",paraId:1,tocIndex:2},{value:" \u6587\u6848\uFF0C\u4F1A\u5728\u5E8F\u53F7\u680F\u663E\u793A\u3002",paraId:1,tocIndex:2},{value:"\u53EA\u6709",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:3},{value:" \u4E0E ",paraId:3},{value:"\u5E8F\u53F7\u680F",paraId:3},{value:" \u540C\u65F6\u5B58\u5728\u3002",paraId:3},{value:"\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u201C\u5408\u8BA1\u201D \u6587\u6848\u5360\u636E\u4E24\u4E2A\u5355\u5143\u683C\u3002",paraId:4}];e.d(m,["texts",0,P])}),88230:(function(_,m,e){e.r(m);const P=[{value:"sortMode",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u63A7\u5236\u662F",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\u8FD8\u662F",paraId:0,tocIndex:0},{value:"\u540E\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\uFF0C\u53D6\u503C\u6709\u56DB\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"local",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"local-all",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5\uFF0C\u4E14\u6309\u6570\u636E\u7C7B\u578B\u81EA\u52A8\u5E94\u7528\u6392\u5E8F\u65B9\u6848",paraId:1,tocIndex:0},{value:"service",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"service-all",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5",paraId:1,tocIndex:0},{value:"\u5728\u5217\u4E0A\u58F0\u660E ",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u5C31\u4F1A\u6DFB\u52A0\u6392\u5E8F\u529F\u80FD\uFF1B",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u53D6\u503C\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A",paraId:2,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"number",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u6570\u503C\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"date",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u65E5\u671F\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u6392\u5E8F\u6570\u636E\u503C\u662F\u901A\u8FC7\u5217\u7684 ",paraId:4,tocIndex:1},{value:"dataIndex",paraId:4,tocIndex:1},{value:" \u83B7\u53D6\uFF0C\u5982\u679C\u6570\u636E\u590D\u6742\uFF0C\u5219\u9700\u8981\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"sortDataExtractor",paraId:4,tocIndex:1},{value:" \u5C5E\u6027\u83B7\u53D6\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"sortDataExtractor: (record: IObjectAny) => string | number | void",paraId:5,tocIndex:1},{value:"\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:6,tocIndex:2},{value:"sortMode",paraId:6,tocIndex:2},{value:" \u5C5E\u6027\u4E3A ",paraId:6,tocIndex:2},{value:"local-all",paraId:6,tocIndex:2},{value:"\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5217\u5B57\u6BB5\u90FD\u5C06\u8FDB\u884C\u6392\u5E8F\uFF08\u6392\u9664\u5E8F\u53F7\u3001\u64CD\u4F5C\u7B49\u65E0\u5173\u5217\uFF09\u3002",paraId:6,tocIndex:2},{value:"\u6392\u5E8F\u7684\u65B9\u5F0F\u5C06\u4EE5\u6570\u636E\u7684\u7C7B\u578B\u8FDB\u884C\u81EA\u52A8\u5224\u65AD\uFF0C\u5F53\u7136\u5224\u65AD\u9519\u8BEF\u65F6\uFF0C\u5219\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u6392\u5E8F\u7C7B\u578B ",paraId:7,tocIndex:2},{value:"sortType",paraId:7,tocIndex:2},{value:" \u503C\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301\u5D4C\u5957\u8868\u5934\u6392\u5E8F\u3002",paraId:8,tocIndex:3},{value:"\u8981\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u8F6C\u62FC\u97F3\u7684\u89E3\u6790\u5E93\uFF0C\u5982 ",paraId:9,tocIndex:4},{value:"pinyin-pro",paraId:9,tocIndex:4},{value:"\u3002",paraId:9,tocIndex:4},{value:"\u518D\u901A\u8FC7 ",paraId:10,tocIndex:4},{value:"sortStringValueTransform",paraId:10,tocIndex:4},{value:" \u5C5E\u6027\u5C06\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u8F6C\u6362\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\u4E86\u3002",paraId:10,tocIndex:4},{value:"\u8BBE\u7F6E ",paraId:11,tocIndex:5},{value:"sortMode",paraId:11,tocIndex:5},{value:" \u5C5E\u6027\u4E3A ",paraId:11,tocIndex:5},{value:"service",paraId:11,tocIndex:5},{value:"\uFF0C\u5219\u8868\u793A\u540E\u7AEF\u63A5\u53E3\u6392\u5E8F\uFF0C\u5C06\u8C03\u7528 ",paraId:11,tocIndex:5},{value:"request",paraId:11,tocIndex:5},{value:" \u8BF7\u6C42\u3002",paraId:11,tocIndex:5}];e.d(m,["texts",0,P])}),51238:(function(_,m,e){e.r(m);const P=[{value:"title.tabs",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u5B9A\u4E49\u6807\u7B7E\u9875\u5207\u6362\u529F\u80FD\uFF0C\u5207\u6362\u540E\u4F1A\u518D\u6B21\u8C03\u7528 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u51FD\u6570\u3002API \u4E0E Antd ",paraId:0,tocIndex:1},{value:"Tabs",paraId:0,tocIndex:1},{value:" \u7EC4\u4EF6\u4E00\u81F4\u3002",paraId:0,tocIndex:1},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showSetting",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5217\u8BBE\u7F6E\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showRefresh",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5237\u65B0\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u4EC5\u663E\u793A\u5217\u8BBE\u7F6E\u4E0E\u5237\u65B0\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6DFB\u52A0\u7C7B\u540D\u5220\u9664\u3002",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"leftExtraContent",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6309\u9700\u5220\u9664\u3002",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"rightExtraContent",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9\u3002",paraId:4,tocIndex:6}];e.d(m,["texts",0,P])}),83823:(function(_,m,e){e.r(m);const P=[{value:"\u4E3A\u4E86\u63D0\u5347\u4E00\u4E9B\u5E38\u89C4\u6570\u636E\u5185\u5BB9\u7684\u6E32\u67D3\u7814\u53D1\u6548\u7387\uFF0C\u5982\u6570\u5B57\u91D1\u989D\u5343\u5206\u4F4D\u5904\u7406\u3001\u56FE\u7247\u663E\u793A\u3001\u4EE3\u7801\u5757\u663E\u793A\u7B49\uFF0CSearchTable \u6269\u5C55\u4E86 Antd Table \u7EC4\u4EF6\u7684 ",paraId:0,tocIndex:0},{value:"column",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u53EA\u9700\u58F0\u660E ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"comma-number",paraId:0,tocIndex:0},{value:"\uFF0C\u6570\u636E\u7684\u663E\u793A\u5C31\u4F1A\u81EA\u52A8\u505A\u5343\u5206\u4F4D\u5904\u7406\u3002",paraId:0,tocIndex:0},{value:"\u51FD\u6570\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF0C\u81EA\u5B9A\u4E49 ",paraId:1},{value:"Rate",paraId:1},{value:" \u5B57\u7B26\u3002",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u6570\u636E\u503C\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u4F20\u53C2\u8BF4\u660E",paraId:2,tocIndex:2},{value:"code",paraId:2,tocIndex:2},{value:"\u4EE3\u7801\u5757\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rate",paraId:2,tocIndex:2},{value:"\u8BC4\u5206\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"Antd Rate \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"switch",paraId:2,tocIndex:2},{value:"\u5F00\u5173\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"boolean | 1 | 0",paraId:2,tocIndex:2},{value:"Antd Switch \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"images",paraId:2,tocIndex:2},{value:"\u56FE\u7247\u9884\u89C8\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Image \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"tags",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u5F62\u5F0F",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"options:",paraId:2,tocIndex:2},{value:" \u6570\u7EC4\u683C\u5F0F\uFF0C",paraId:2,tocIndex:2},{value:"{ label: ReactNode; value: string | number }[]",paraId:2,tocIndex:2},{value:" \u6570\u7EC4\u6BCF\u4E00\u9879\u5BF9\u5E94 Antd Tag \u7EC4\u4EF6\u53C2\u6570 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"tooltipProps:",paraId:2,tocIndex:2},{value:" Antd Tooltip \u7EC4\u4EF6\u53C2\u6570 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"spaceProps:",paraId:2,tocIndex:2},{value:" Antd Space \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"comma-number",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"percent",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u52A0\u767E\u5206\u53F7\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"long-text",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848 tooltip \u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10 ",paraId:2,tocIndex:2},{value:"placement:",paraId:2,tocIndex:2},{value:" \u7701\u7565\u53F7\u4F4D\u7F6E\uFF0C",paraId:2,tocIndex:2},{value:"'start' | 'middle' | 'end'",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"tooltipProps:",paraId:2,tocIndex:2},{value:" Antd Tooltip \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"long-text-modal",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848\u70B9\u51FB\u5F39\u7A97\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"btnText:",paraId:2,tocIndex:2},{value:" \u6309\u94AE\u6587\u6848 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"modalProps:",paraId:2,tocIndex:2},{value:" Antd Modal \u7EC4\u4EF6\u53C2\u6570 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"modalContent:",paraId:2,tocIndex:2},{value:" \u81EA\u5B9A\u4E49 Modal \u5185\u5BB9",paraId:2,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"registerValueType",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u663E\u793A\u7C7B\u578B\uFF0C\u540C\u540D\u5C06\u8986\u76D6\u3002",paraId:3,tocIndex:3}];e.d(m,["texts",0,P])}),19778:(function(_,m,e){e.r(m);const P=[{value:"\u6253\u5F00 ",paraId:0,tocIndex:1},{value:"showSetting",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5C06\u5F00\u542F\u5217\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u89E6\u53D1\u6309\u94AE\u5728\u6807\u9898\u680F\u6700\u53F3\u4FA7\u3002",paraId:0,tocIndex:1},{value:"\u56FA\u5B9A\u5217\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u9700\u8981\u957F\u4E45\u7684\u5B58\u50A8\u7528\u6237\u6392\u5E8F\u8BBE\u7F6E\uFF0C\u518D\u6B21\u6253\u5F00\u7684\u65F6\u5019\u4FDD\u6301\u4E0A\u4E00\u6B21\u5B58\u50A8\u7684\u6392\u5E8F\u8BBE\u7F6E\u3002",paraId:2,tocIndex:5},{value:"onSettingChanged",paraId:3,tocIndex:5},{value:": \u5F53\u70B9\u51FB\u5217\u8BBE\u7F6E\u7684\u3010\u786E\u5B9A\u3011\u6309\u94AE\u540E\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u6BCF\u6B21\u6392\u5E8F\u540E\u7684\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"getSetting",paraId:3,tocIndex:5},{value:": \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u540E\u4F1A\u6267\u884C\u4E00\u6B21\u8BE5\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5B58\u50A8\u7684\u6392\u5E8F\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"settingColumnsMergeAlgo",paraId:3,tocIndex:5},{value:": \u81EA\u5B9A\u4E49\u5B58\u50A8\u7684\u5217\u6570\u636E\u4E0E\u5F53\u524D\u5217\u6570\u636E\u7684\u5408\u5E76\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7B97\u6CD5\u662F\u6309\u7167\u5B58\u50A8\u7684\u5217\u6570\u636E\u6392\u5E8F\uFF0C\u8FC7\u6EE4\u5DF2\u7ECF\u5220\u9664\u7684\u5217\uFF0C\u65B0\u7684\u5217\u653E\u7F6E\u5728\u6700\u540E\u3002",paraId:3,tocIndex:5},{value:"\u4E1A\u52A1\u573A\u666F",paraId:4,tocIndex:6},{value:"\u4E0D\u540C\u5206\u7C7B\u7684 Tabs \u5207\u6362\u65F6\uFF0C\u8868\u683C\u5217\u6570\u636E\u662F\u4E0D\u540C\u7684\uFF0C\u5217\u6570\u636E\u5B58\u50A8\u548C\u83B7\u53D6\u4E5F\u4E0D\u540C\u3002",paraId:5,tocIndex:6},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:6,tocIndex:6},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u5B9E\u73B0 Tabs \u5207\u6362\u65F6\u91CD\u65B0\u83B7\u53D6\u5B58\u50A8\u6570\u636E\u5B9E\u73B0\u3002",paraId:7,tocIndex:6},{value:"\u6BCF\u6B21 ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u53D8\u5316\u4F1A\u8C03\u4E00\u6B21 ",paraId:7,tocIndex:6},{value:"getSetting",paraId:7,tocIndex:6},{value:" \u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u4E0D\u540C\u7684\u6570\u636E\u3002",paraId:7,tocIndex:6},{value:"\u6570\u636E\u590D\u6742\u7E41\u591A\u7684\u60C5\u51B5\uFF0C\u8868\u5934\u53EF\u4EE5\u7531\u540E\u7AEF\u8FD4\u56DE\uFF0C\u51CF\u5C11\u524D\u540E\u7AEF\u5B57\u6BB5\u5BF9\u9F50\u7684\u6210\u672C\u3002",paraId:8,tocIndex:7}];e.d(m,["texts",0,P])}),48928:(function(_,m,e){e.r(m);const P=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}];e.d(m,["texts",0,P])}),99411:(function(_,m,e){e.r(m);const P=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:"\u6570\u636E\u8BF7\u6C42\u51FD\u6570",paraId:0,tocIndex:1},{value:"((params: IObjectAny, extraParams: IRequestExtraParams) => Promise<IRequestResult>)",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"requestOnMounted",paraId:0,tocIndex:1},{value:"\u6302\u8F7D\u5B8C\u6210\u662F\u5426\u7ACB\u5373\u53D1\u9001\u4E00\u6B21 request \u8BF7\u6C42\u5EA6",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"true",paraId:0,tocIndex:1},{value:"header",paraId:0,tocIndex:1},{value:"\u5934\u90E8\u680F\u5185\u5BB9\u6E32\u67D3",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"search",paraId:0,tocIndex:1},{value:"\u641C\u7D22\u680F\uFF0C\u89C1",paraId:0,tocIndex:1},{value:"Search API",paraId:1,tocIndex:1},{value:"ISearchProps | false",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleTop",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u9876\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"title",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\uFF0C\u89C1\u4E0B\u65B9 title \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleBottom",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u5E95\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"table",paraId:0,tocIndex:1},{value:"\u8868\u683C\u680F\uFF0C\u89C1\u4E0B\u65B9 table \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"footer",paraId:0,tocIndex:1},{value:"\u5E95\u90E8\u680F",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u6837\u5F0F",paraId:2,tocIndex:2},{value:"CSSProperties",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"tabs",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u9875\u5C5E\u6027\uFF0C\u89C1",paraId:2,tocIndex:2},{value:"Antd Tabs",paraId:2,tocIndex:2},{value:"TabsProps",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showSetting",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5217\u8BBE\u7F6E\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showRefresh",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5237\u65B0\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"leftExtraContent",paraId:2,tocIndex:2},{value:"\u5DE6\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rightExtraContent",paraId:2,tocIndex:2},{value:"\u53F3\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u9664 Antd Table \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"showRowNumber",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5E8F\u53F7\u5217",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"rowNumberColumnData",paraId:4,tocIndex:3},{value:"\u5E8F\u53F7\u5217 Antd \u914D\u7F6E\u6570\u636E",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItems",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u5185\u5BB9\uFF0C\u4E0D\u5B58\u5728\u5219\u4E0D\u5C55\u793A\u64CD\u4F5C\u5217\uFF0C\u6570\u91CF\u8D85\u8FC7\u8BBE\u5B9A\u9608\u503C\u5219\u4E0B\u62C9\u4EA4\u4E92",paraId:4,tocIndex:3},{value:"(record: IObjectAny, index: number) => IActionItem[]",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsColumnData",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217 Antd \u914D\u7F6E\u6570\u636E\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u5217\u5BBD\u5EA6\u7B49",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsCount",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u4E0B\u62C9\u4EA4\u4E92\u9608\u503C\uFF0C\u9ED8\u8BA4\u4E3A 2",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"2",paraId:4,tocIndex:3},{value:"actionItemsDropdownProps",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u6309\u94AE\u4E0B\u62C9\u83DC\u5355\u5C5E\u6027\uFF0C\u89C1 Antd Dropdown \u7EC4\u4EF6",paraId:4,tocIndex:3},{value:"DropDownProps",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortMode",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u65B9\u6848\uFF0C\u524D\u7AEF\u6392\u5E8F\u6216\u540E\u7AEF\u6392\u5E8F",paraId:4,tocIndex:3},{value:"'local' | 'local-all' | 'service' | 'service-all'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortStringValueTransform",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u5B57\u7B26\u4E32\u6570\u636E\u8F6C\u6362\u65B9\u6848",paraId:4,tocIndex:3},{value:"(value: string) => string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"autoScrollY",paraId:4,tocIndex:3},{value:"\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u8868\u683C scrollY \u5C5E\u6027\uFF0C\u8FBE\u5230\u9002\u914D\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u201D\u4E00\u5C4F\u663E\u793A\u201C\u6548\u679C",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"summaryText",paraId:4,tocIndex:3},{value:"\u5408\u8BA1\u680F\u6587\u6848",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"\u5408\u8BA1",paraId:4,tocIndex:3},{value:"registerValueType",paraId:4,tocIndex:3},{value:"\u6CE8\u518C valueType, \u540C\u540D\u5C06\u8986\u76D6",paraId:4,tocIndex:3},{value:"{ [type: string]: (p: { value: any; record: IObjectAny; options: IObjectAny; index: number }) => ReactNode }",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u9664 Antd Table Column \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:5,tocIndex:4},{value:"\u53C2\u6570",paraId:6,tocIndex:4},{value:"\u63CF\u8FF0",paraId:6,tocIndex:4},{value:"\u7C7B\u578B",paraId:6,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:4},{value:"sortType",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u7C7B\u578B",paraId:6,tocIndex:4},{value:"'string' | 'number' | 'date'",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"sortDataExtractor",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u6570\u636E\u53D6\u503C\u51FD\u6570\uFF0C\u590D\u6742\u6570\u636E\u63D0\u53D6\u7528",paraId:6,tocIndex:4},{value:"(record: IObjectAny) => string | number",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"valueType",paraId:6,tocIndex:4},{value:"\u6570\u636E\u663E\u793A\u7C7B\u522B",paraId:6,tocIndex:4},{value:"IValueType | ((record: IObjectAny) => { type: IValueType, [props: string]: any })",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"\u5373 ",paraId:7,tocIndex:5},{value:"IActionItem",paraId:7,tocIndex:5},{value:", \u7EE7\u627F Antd Button \u7EC4\u4EF6\u53C2\u6570\uFF0C\u4EE5\u53CA\u4E0B\u9762\u6269\u5C55\u53C2\u6570\u3002",paraId:7,tocIndex:5},{value:"\u53C2\u6570",paraId:8,tocIndex:5},{value:"\u63CF\u8FF0",paraId:8,tocIndex:5},{value:"\u7C7B\u578B",paraId:8,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:5},{value:"text",paraId:8,tocIndex:5},{value:"\u6309\u94AE\u6587\u6848",paraId:8,tocIndex:5},{value:"ReactNode",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"isShow",paraId:8,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmAgain",paraId:8,tocIndex:5},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmProps",paraId:8,tocIndex:5},{value:"\u4E8C\u6B21\u786E\u8BA4 Antd Popconfirm \u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:5},{value:"Omit<PopconfirmProps, 'onConfirm'>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"onClick",paraId:8,tocIndex:5},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE ",paraId:8,tocIndex:5},{value:"Promise",paraId:8,tocIndex:5},{value:"\uFF0C\u5219\u589E\u52A0 ",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" \u6548\u679C",paraId:8,tocIndex:5},{value:"(event: MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5}];e.d(m,["texts",0,P])}),85421:(function(_,m,e){e.r(m);const P=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:"ref",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"refresh",paraId:1,tocIndex:1},{value:": \u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"request",paraId:1,tocIndex:1},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRootElement",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:1},{value:"getSearchRef",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u680F\u5B9E\u4F8B\u3002",paraId:1,tocIndex:1},{value:"getDataSource",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setDataSource",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setSummaryData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5408\u8BA1\u680F\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getSearchValue",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u53C2\u6570\u3002",paraId:1,tocIndex:1},{value:"setSearchValue",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"clearSearchValue",paraId:1,tocIndex:1},{value:": \u6E05\u9664\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRequestParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u201C\u5BFC\u51FA\u201D\u65F6\u5E38\u7528\u3002",paraId:1,tocIndex:1},{value:"getRequestExtraParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u989D\u5916\u53C2\u6570\uFF0C\u5982\u6392\u5E8F\u53C2\u6570\u7B49\u3002",paraId:1,tocIndex:1},{value:"getPaginationData",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u5206\u9875\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setPaginationData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5206\u9875\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"updateScrollY",paraId:1,tocIndex:1},{value:": \u66F4\u65B0\u8868\u683C\u9AD8\u5EA6\u4EE5\u8FBE\u5230\u201C\u4E00\u5C4F\u663E\u793A\u201D\u6548\u679C\u3002",paraId:1,tocIndex:1},{value:"openSettingModal",paraId:1,tocIndex:1},{value:": \u6253\u5F00\u5217\u8BBE\u7F6E\u5F39\u7A97\u3002",paraId:1,tocIndex:1},{value:"\u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:2,tocIndex:2},{value:"request",paraId:2,tocIndex:2},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:2,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:2},{value:"(params?: IRequestParams, options?: IRequestOptions) => Promise<IRequestResult>",paraId:3,tocIndex:2},{value:"\u540D\u79F0",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"params",paraId:4,tocIndex:3},{value:"\u641C\u7D22\u53CA\u5206\u9875\u53C2\u6570",paraId:4,tocIndex:3},{value:"IRequestParams",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:"\u5237\u65B0\u9009\u9879\uFF0C\u63A7\u5236\u5237\u65B0\u884C\u4E3A",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:5,tocIndex:3},{value:"\u540D\u79F0",paraId:6,tocIndex:3},{value:"\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"overwrite",paraId:6,tocIndex:3},{value:"\u662F\u5426\u8986\u76D6\u53C2\u6570\u65B9\u5F0F\u5237\u65B0\uFF0C\u9ED8\u8BA4 ",paraId:6,tocIndex:3},{value:"false",paraId:6,tocIndex:3},{value:" \u5373\u5408\u5E76\u5165\u53C2",paraId:6,tocIndex:3},{value:"boolean",paraId:6,tocIndex:3}];e.d(m,["texts",0,P])}),88995:(function(_,m,e){e.r(m);const P=[];e.d(m,["texts",0,P])}),66551:(function(_,m,e){e.r(m);const P=[{value:"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E8C\u6B21\u5C01\u88C5 SearchTable \u4EE5\u9002\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u5E38\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u64CD\u4F5C\u5217\u7684\u94FE\u63A5\u8DF3\u8F6C\u662F\u5355\u9875\u8DF3\u8F6C\u800C\u4E0D\u662F",paraId:0,tocIndex:0},{value:"<a>",paraId:0,tocIndex:0},{value:" \u6807\u7B7E\u7684\u5237\u65B0\u8DF3\u8F6C\uFF0C\u57FA\u4E8E\u6B64\u9700\u6C42\u6211\u4EEC\u4EE5 ",paraId:0,tocIndex:0},{value:"Next.js",paraId:0,tocIndex:0},{value:" \u5355\u9875\u8DF3\u8F6C\u4E8C\u6B21\u5C01\u88C5\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:`import { useRef, forwardRef, useImperativeHandle } from 'react'
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
`,paraId:1,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u64CD\u4F5C\u5217\u6309\u94AE\u589E\u52A0\u300C\u6743\u9650\u6821\u9A8C\u300D\u7684\u903B\u8F91\u7B49\uFF08\u589E\u52A0\u6743\u9650\u914D\u7F6E\u5C5E\u6027\uFF0C\u7ED3\u5408 isShow \u5C5E\u6027\u5B9E\u73B0\uFF09\uFF0C\u5C01\u88C5\u65B9\u5F0F\u96F7\u540C\u3002",paraId:2}];e.d(m,["texts",0,P])}),5009:(function(_,m,e){e.r(m);const P=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\u6309\u94AE\u5355\u9875\u8DF3\u8F6C",paraId:1,tocIndex:0}];e.d(m,["texts",0,P])}),18311:(function(_,m,e){e.r(m);const P=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:0},{value:"search: false",paraId:0,tocIndex:0},{value:" \u53EF\u9690\u85CF\u641C\u7D22\u533A\u57DF",paraId:0,tocIndex:0}];e.d(m,["texts",0,P])}),68331:(function(_,m){m.A=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`}),14963:(function(_,m){m.A=`import { cij } from '@examples/utils/cssinjs'

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
`}),24621:(function(_,m){m.A=`import { cij } from '@examples/utils/cssinjs'

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
`}),81185:(function(_,m){m.A=`import type { IRenderers, ISchema } from '@schema-render/core-react'
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
`}),11480:(function(_,m){m.A=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`}),50748:(function(_,m){m.A=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`}),33727:(function(_,m){m.A=`import type { IRootSchema } from '@schema-render/core-react'

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
`}),5100:(function(_,m){m.A=`import BankSelect from './BankSelect'

export default {
  BankSelect,
}
`}),22227:(function(_,m){m.A=`import type { IRootSchema } from '@schema-render/core-react'

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
    SwitchBoxWithRightContent: {
      title: '\u5F00\u5173\uFF08SwitchBox\uFF09',
      renderType: 'SwitchBox',
      renderOptions: {
        text: '\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE',
        rightExtraContent: ({
          value,
          disabled,
          readonly,
        }: {
          value: boolean
          disabled: boolean
          readonly: boolean
        }) => {
          return (
            <span style={{ color: value ? 'green' : 'red' }}>
              {value ? '\u5DF2\u540C\u610F' : '\u672A\u540C\u610F'}
              {disabled && '\uFF08\u7981\u7528\uFF09'}
              {readonly && '\uFF08\u53EA\u8BFB\uFF09'}
            </span>
          )
        },
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
        outputFormat: 'YYYY-MM-DD',
      },
    },
    DateRangePicker: {
      title: '\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09',
      renderType: 'DateRangePicker',
      renderOptions: {
        placeholder: ['\u5F00\u59CB\u65E5\u671F', '\u7ED3\u675F\u65E5\u671F'],
      },
    },
    DateRangePickerObjectStruct: {
      title: '\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09-\u5BF9\u8C61\u683C\u5F0F\u503C',
      renderType: 'DateRangePicker',
      renderOptions: {
        placeholder: ['\u5F00\u59CB\u65E5\u671F', '\u7ED3\u675F\u65E5\u671F'],
        valueStruct: 'object',
        valueFieldMap: {
          start: 'start_time',
          end: 'end_time',
        },
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
`}),48314:(function(_,m){m.A=`import { cij } from '@examples/utils/cssinjs'

export const builtinRenderers = cij\`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
\`
`}),78877:(function(_,m){m.A=`import type { TableProps } from 'antd'

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
`}),52391:(function(_,m){m.A=`import dayjs from 'dayjs'

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
`}),22547:(function(_,m){m.A=`import type { IOpenComponentParams } from '@schema-render/core-react'
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
`}),61473:(function(_,m){m.A=`import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
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
`}),69170:(function(_,m){m.A=`import type { IOpenFormItemParams } from '@schema-render/core-react'
import type { FC } from 'react'

const SectionTitle: FC<IOpenFormItemParams<never>> = ({ schema }) => {
  return <div className="section-title">{schema.title}</div>
}

export default {
  formItem: SectionTitle as never,
}
`}),12358:(function(_,m){m.A=`import type { IColumnType } from '@schema-render/search-table-react'

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
`}),13111:(function(_,m){m.A=`import type { IColumnType } from '@schema-render/search-table-react'

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
`}),96743:(function(_,m){m.A=`import type { IColumnType } from '@schema-render/search-table-react'

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
      maxLength: 15,
      placement: index % 3 === 0 ? 'start' : index % 3 === 1 ? 'middle' : 'end',
      tooltipProps: {
        color: index % 2 ? '#1677ff' : '#000',
      },
    }),
    width: 270,
  },
  {
    title: '\u957F\u6587\u6848(long-text-modal)',
    dataIndex: 'long_text_modal',
    valueType: (_record, index) => ({
      type: 'long-text-modal',
      maxLength: 20,
      btnText: index % 2 ? '\u67E5\u770B\u8BE6\u60C5' : '\u5168\u90E8',
      modalProps: {
        title: index % 2 ? '\u8BE6\u60C5' : '\u5168\u90E8',
        width: 500,
      },
      modalContent:
        index % 2
          ? '\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 modal \u5185\u5BB9\uFF0C\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u653E\u7F6E\u4EFB\u4F55 React \u7EC4\u4EF6\u6216\u5143\u7D20\u3002'
          : undefined,
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
    title: '\u6807\u7B7E(tags with options)',
    dataIndex: 'tags2',
    valueType: () => ({
      type: 'tags',
      options: [
        { label: '\u82F9\u679C', value: 'apple', color: 'cyan' },
        { label: '\u6843\u5B50', value: 'peach', color: 'pink' },
        { label: '\u9999\u8549', value: 'banana', color: 'orange' },
      ],
    }),
    width: 140,
  },
  {
    title: '\u56FE\u7247(images)',
    dataIndex: 'image_list',
    valueType: 'images',
  },
]

export default columns
`}),51118:(function(_,m){m.A=`import type { IColumnType } from '@schema-render/search-table-react'

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
`}),68498:(function(_,m){m.A=`import dayjs from 'dayjs'

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
`}),44869:(function(_,m){m.A=`function rangeNumber(min: number, max: number, toInt = true) {
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
      tags2: Math.random() > 0.5 ? 'apple' : ['peach', 'banana'],
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
`}),11786:(function(_,m){m.A=`import dayjs from 'dayjs'

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
`}),57864:(function(_,m){m.A=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

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
`}),95736:(function(_,m){m.A=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

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
`})}]);
