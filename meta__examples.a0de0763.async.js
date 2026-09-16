"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[768],{40492:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(63917),p={}},42254:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return M}});var r=e(5574),p=e.n(r),L=e(15009),T=e.n(L),z=e(97857),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(59869),A=e(74072),$=e(24345),M={"examples-core-react-002-quick-start-demo-0":{component:g.memo(g.lazy(W()(T()().mark(function D(){var h,m,o,a,s,n,t,l;return T()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=u.sent,m=h.default,u.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return o=u.sent,a=o.Input,s=function(f){var B=f.schema,y=f.body;return g.createElement("div",null,g.createElement("h3",null,B.title),g.createElement("div",null,y))},n={InputText:{component:function(f){var B=f.schema,y=f.value,I=f.onChange;return g.createElement(a,v()(v()({},B.renderOptions),{},{value:y,onChange:function(O){return I(O.target.value)}}))}},Textarea:{component:function(f){var B=f.schema,y=f.value,I=f.onChange;return g.createElement(a.TextArea,v()(v()({placeholder:"\u8BF7\u8F93\u5165".concat(B.title)},B.renderOptions),{},{value:y,onChange:function(O){return I(O.target.value)}}))}}},t={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},l=function(){return g.createElement(m,{itemLayout:s,renderers:n,schema:t})},u.abrupt("return",{default:l});case 13:case"end":return u.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,antd:$},renderOpts:{compile:function(){var D=W()(T()().mark(function m(){var o,a=arguments;return T()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-002-quick-start-demo-1":{component:g.memo(g.lazy(W()(T()().mark(function D(){var h,m,o,a,s,n,t,l,d,u;return T()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=f.sent,m=h.default,f.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return o=f.sent,a=o.Input,f.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return s=f.sent,n=s.useState,t=function(y){var I=y.schema,x=y.body;return g.createElement("div",null,g.createElement("h3",null,I.title),g.createElement("div",null,x))},l={InputText:{component:function(y){var I=y.schema,x=y.value,O=y.onChange;return g.createElement(a,v()(v()({},I.renderOptions),{},{value:x,onChange:function(b){return O(b.target.value)}}))}},Textarea:{component:function(y){var I=y.schema,x=y.value,O=y.onChange;return g.createElement(a.TextArea,v()(v()({placeholder:"\u8BF7\u8F93\u5165".concat(I.title)},I.renderOptions),{},{value:x,onChange:function(b){return O(b.target.value)}}))}}},d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},u=function(){var y=n({}),I=p()(y,2),x=I[0],O=I[1];return g.createElement("div",null,g.createElement(m,{itemLayout:t,renderers:l,schema:d,onChange:O}),g.createElement("h4",null,"\u6253\u5370\u8868\u5355\u6570\u636E\uFF1A"),g.createElement("pre",{style:{padding:"1em",background:"#f6f6f6"}},JSON.stringify(x,null,2)))},f.abrupt("return",{default:u});case 17:case"end":return f.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-002-quick-start-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,antd:$,react:R||(R=e.t(g,2))},renderOpts:{compile:function(){var D=W()(T()().mark(function m(){var o,a=arguments;return T()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},28070:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return $}});var r=e(5574),p=e.n(r),L=e(15009),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(76777),g=e(74072),j=e(2862),A=e(78469),$={"examples-core-react-003-schema-demo-0":{component:i.memo(i.lazy(v()(T()().mark(function M(){var D,h,m,o,a,s,n,t;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return D=d.sent,h=D.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,o=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=d.sent,s=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{placeholder:"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 placeholder"}},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u751C\u751C\u7684\u6C34\u679C",options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},t=function(){return i.createElement(h,{schema:n,itemLayout:o,renderers:s})},d.abrupt("return",{default:t});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":g,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var M=v()(T()().mark(function h(){var m,o=arguments;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}},"examples-core-react-003-schema-demo-1":{component:i.memo(i.lazy(v()(T()().mark(function M(){var D,h,m,o,a,s,n,t;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return D=d.sent,h=D.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,o=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=d.sent,s=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u5FC5\u586B"},fruit:{title:"\u6C34\u679C",renderType:"Select",required:"$.open",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},t=function(){return i.createElement(h,{schema:n,itemLayout:o,renderers:s})},d.abrupt("return",{default:t});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":g,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var M=v()(T()().mark(function h(){var m,o=arguments;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}},"examples-core-react-003-schema-demo-2":{component:i.memo(i.lazy(v()(T()().mark(function M(){var D,h,m,o,a,s,n,t;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return D=d.sent,h=D.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,o=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=d.sent,s=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",disabled:!0},open:{renderType:"Switch",title:"\u5F00\u542F\u6C34\u679C\u7981\u7528"},fruit:{title:"\u6C34\u679C",renderType:"Select",disabled:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},t=function(){return i.createElement(h,{schema:n,itemLayout:o,renderers:s})},d.abrupt("return",{default:t});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":g,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var M=v()(T()().mark(function h(){var m,o=arguments;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}},"examples-core-react-003-schema-demo-3":{component:i.memo(i.lazy(v()(T()().mark(function M(){var D,h,m,o,a,s,n,t,l,d;return T()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return D=E.sent,h=D.useState,E.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return m=E.sent,o=m.default,E.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return a=E.sent,s=a.default,E.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return n=E.sent,t=n.default,l={renderType:"Root",properties:{title:{title:"\u63D0\u95EE",renderType:"InputText",readonly:!0},fruit:{title:"\u7B54\u6848",renderType:"Select",readonly:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}},open:{renderType:"Switch",title:"\u5207\u6362\u5230\u53EA\u8BFB\u6001"}}},d=function(){var B=h({title:"\u54EA\u4E00\u79CD\u6C34\u679C\u6700\u751C\u5462",fruit:"watermelon"}),y=p()(B,2),I=y[0],x=y[1];return i.createElement(o,{value:I,schema:l,onChange:x,itemLayout:s,renderers:t})},E.abrupt("return",{default:d});case 19:case"end":return E.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":A,react:R||(R=e.t(i,2)),"@schema-render/core-react":g,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var M=v()(T()().mark(function h(){var m,o=arguments;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}},"examples-core-react-003-schema-demo-4":{component:i.memo(i.lazy(v()(T()().mark(function M(){var D,h,m,o,a,s,n,t;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return D=d.sent,h=D.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,o=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=d.sent,s=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",hidden:!0},open:{renderType:"Switch",title:"\u9690\u85CF\u6C34\u679C\u9009\u62E9"},fruit:{title:"\u6C34\u679C",renderType:"Select",hidden:"$.open === true",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]}}}},t=function(){return i.createElement(h,{schema:n,itemLayout:o,renderers:s})},d.abrupt("return",{default:t});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":g,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var M=v()(T()().mark(function h(){var m,o=arguments;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}},"examples-core-react-003-schema-demo-5":{component:i.memo(i.lazy(v()(T()().mark(function M(){var D,h,m,o,a,s,n,t;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return D=d.sent,h=D.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return m=d.sent,o=m.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return a=d.sent,s=a.default,n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},fruit:{title:"\u6C34\u679C",renderType:"Select",renderOptions:{options:[{label:"\u82F9\u679C",value:"apple"},{label:"\u9999\u8549",value:"banana"},{label:"\u897F\u74DC",value:"watermelon"}]},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6C34\u679C"}]}}},t=function(){return i.createElement(h,{schema:n,itemLayout:o,renderers:s})},d.abrupt("return",{default:t});case 15:case"end":return d.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-003-schema-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":j,"./item-layout/Horizontal.tsx":A,"@schema-render/core-react":g,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var M=v()(T()().mark(function h(){var m,o=arguments;return T()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}}}},58970:function(V,c,e){e.r(c),e.d(c,{demos:function(){return g}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(84894),v=e(74072),i=e(2862),W=e(78469),g={"examples-core-react-100-layout-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function j(){var A,$,M,D,h,m,o,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,D=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,m=h.default,o={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return T.createElement($,{layout:"normal",schema:o,itemLayout:D,renderers:m})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":i,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":i,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var j=L()(r()().mark(function $(){var M,D=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(M=m.sent).default.apply(M,D));case 3:case"end":return m.stop()}},$)}));function A(){return j.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-1":{component:T.memo(T.lazy(L()(r()().mark(function j(){var A,$,M,D,h,m,o,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,D=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,m=h.default,o={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber",span:12},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber",span:12},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber",span:12,spanStart:1},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber",span:12},rotate:{title:"\u65CB\u8F6C\u89D2\u5EA6",renderType:"InputNumber"}}},a=function(){return T.createElement($,{layout:"normal",schema:o,itemLayout:D,renderers:m})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":i,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":i,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var j=L()(r()().mark(function $(){var M,D=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(M=m.sent).default.apply(M,D));case 3:case"end":return m.stop()}},$)}));function A(){return j.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-2":{component:T.memo(T.lazy(L()(r()().mark(function j(){var A,$,M,D,h,m,o,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,D=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,m=h.default,o={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return T.createElement($,{schema:o,layout:"autoFill",itemLayout:D,renderers:m})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":i,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":i,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var j=L()(r()().mark(function $(){var M,D=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(M=m.sent).default.apply(M,D));case 3:case"end":return m.stop()}},$)}));function A(){return j.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-3":{component:T.memo(T.lazy(L()(r()().mark(function j(){var A,$,M,D,h,m,o,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,D=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,m=h.default,o={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return T.createElement($,{schema:o,layout:"autoFit",itemLayout:D,renderers:m})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":i,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":i,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var j=L()(r()().mark(function $(){var M,D=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(M=m.sent).default.apply(M,D));case 3:case"end":return m.stop()}},$)}));function A(){return j.apply(this,arguments)}return A}()}},"examples-core-react-100-layout-demo-4":{component:T.memo(T.lazy(L()(r()().mark(function j(){var A,$,M,D,h,m,o,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,D=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,m=h.default,o={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return T.createElement($,{schema:o,layout:"autoFill",layoutMinMax:[230,230],itemLayout:D,renderers:m})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-100-layout-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":i,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":i,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var j=L()(r()().mark(function $(){var M,D=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(M=m.sent).default.apply(M,D));case 3:case"end":return m.stop()}},$)}));function A(){return j.apply(this,arguments)}return A}()}}}},61985:function(V,c,e){e.r(c),e.d(c,{demos:function(){return D}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(23382),v=e(74072),i=e(29046),W=e(24345),g=e(93967),j=e.n(g),A=e(29298),$=e(2862),M=e(59868),D={"examples-core-react-101-item-layout-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y,I;return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return m=O.sent,o=m.default,O.next=6,Promise.resolve().then(e.bind(e,29046));case 6:return a=O.sent,s=a.QuestionCircleOutlined,O.next=10,Promise.resolve().then(e.bind(e,24345));case 10:return n=O.sent,t=n.Popover,O.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return u=O.sent,E=u.default,O.next=22,Promise.resolve().then(e.bind(e,29298));case 22:return f=O.sent,B=function(b){var C=b.body,_=b.schema,P=b.validator,K=b.required,N=b.prefixClassNames;return T.createElement("div",{className:N("item-layout-vertical")},T.createElement("div",{className:d(N("item-header"),f.header)},K&&T.createElement("span",{className:d(N("item-mark"),f.mark)},"*"),T.createElement("span",{className:d(N("item-title"),f.title)},_.title),!!_.titleDescription&&T.createElement(t,{placement:"top",trigger:"hover",content:_.titleDescription},T.createElement(s,{className:d(N("item-title-tooltip"),f.titleTooltip)}))),T.createElement("div",{className:N("item-body")},C),T.createElement("div",{className:d(N("item-footer"),f.footer)},P.status==="error"&&!!P.message&&T.createElement("div",{className:d(N("item-error-msg"),f.errorMsg)},P.message),!!_.description&&T.createElement("div",{className:d(N("item-desc"),f.desc)},_.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},I=function(){return T.createElement(o,{schema:y,itemLayout:B,renderers:E})},O.abrupt("return",{default:I});case 27:case"end":return O.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},antd:{type:"NPM",value:"6.6.3"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Vertical/styles.ts":{type:"FILE",value:e(29758).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Vertical/styles.ts":A,"./renderers/common.tsx":$,"@schema-render/core-react":v,"@ant-design/icons":i,antd:W,classnames:g,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Vertical/styles.ts":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=L()(r()().mark(function o(){var a,s=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-core-react-101-item-layout-demo-1":{component:T.memo(T.lazy(L()(r()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y,I;return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return m=O.sent,o=m.default,O.next=6,Promise.resolve().then(e.bind(e,29046));case 6:return a=O.sent,s=a.QuestionCircleOutlined,O.next=10,Promise.resolve().then(e.bind(e,24345));case 10:return n=O.sent,t=n.Popover,O.next=14,Promise.resolve().then(e.t.bind(e,93967,23));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return u=O.sent,E=u.default,O.next=22,Promise.resolve().then(e.bind(e,59868));case 22:return f=O.sent,B=function(b){var C=b.body,_=b.schema,P=b.validator,K=b.required,N=b.prefixClassNames;return T.createElement("div",{className:d(N("item-layout-horizontal"),f.horizontal)},T.createElement("div",{className:d(N("item-main"),f.main)},T.createElement("div",{className:d(N("item-header"),f.header)},K&&T.createElement("span",{className:d(N("item-mark"),f.mark)},"*"),T.createElement("span",{className:d(N("item-title"),f.title)},_.title),!!_.titleDescription&&T.createElement(t,{placement:"top",trigger:"hover",content:_.titleDescription},T.createElement(s,{className:d(N("item-title-tooltip"),f.titleTooltip)}))),T.createElement("div",{className:d(N("item-body"),f.body)},C)),T.createElement("div",{className:d(N("item-footer"),f.footer)},P.status==="error"&&!!P.message&&T.createElement("div",{className:d(N("item-error-msg"),f.errorMsg)},P.message),!!_.description&&T.createElement("div",{className:d(N("item-desc"),f.desc)},_.description)))},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u63CF\u8FF0",description:"\u8868\u5355\u9879\u7684\u4E00\u4E9B\u63CF\u8FF0",required:!0,renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},I=function(){return T.createElement(o,{schema:y,itemLayout:B,renderers:E})},O.abrupt("return",{default:I});case 27:case"end":return O.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-101-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IOpenItemLayoutParams } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},antd:{type:"NPM",value:"6.6.3"},classnames:{type:"NPM",value:"2.5.1"},"./item-layout/Horizontal/styles.ts":{type:"FILE",value:e(52551).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal/styles.ts":M,"./renderers/common.tsx":$,"@schema-render/core-react":v,"@ant-design/icons":i,antd:W,classnames:g,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/styles.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=L()(r()().mark(function o(){var a,s=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},83222:function(V,c,e){e.r(c),e.d(c,{demos:function(){return g}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(86131),v=e(74072),i=e(2862),W=e(78469),g={"examples-core-react-102-prefix-cls-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function j(){var A,$,M,D,h,m,o,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,D=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,m=h.default,o={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},left:{title:"\u6C34\u5E73\u4F4D\u7F6E",renderType:"InputNumber"},top:{title:"\u5782\u76F4\u4F4D\u7F6E",renderType:"InputNumber"}}},a=function(){return T.createElement($,{schema:o,itemLayout:D,renderers:m,prefixCls:"my-cls"})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-102-prefix-cls-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":i,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":i,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var j=L()(r()().mark(function $(){var M,D=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(M=m.sent).default.apply(M,D));case 3:case"end":return m.stop()}},$)}));function A(){return j.apply(this,arguments)}return A}()}}}},81235:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return m}});var r=e(97857),p=e.n(r),L=e(15009),T=e.n(L),z=e(5574),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(15208),A=e(74072),$=e(41989),M=e(78469),D=e(2862),h=e(24345),m={"examples-core-react-200-change-event-demo-0":{component:g.memo(g.lazy(W()(T()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I;return T()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=O.sent,s=a.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,t=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=O.sent,E=u.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,B=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},I=function(){var b=s({}),C=v()(b,2),_=C[0],P=C[1];return g.createElement("div",{className:"example-layout-cols-2"},g.createElement(t,{schema:y,itemLayout:B,renderers:E,value:_,onChange:function(N){return P(N)}}),g.createElement(d,{value:_}))},O.abrupt("return",{default:I});case 23:case"end":return O.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":D,react:R||(R=e.t(g,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":D},renderOpts:{compile:function(){var o=W()(T()().mark(function s(){var n,t=arguments;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-1":{component:g.memo(g.lazy(W()(T()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I;return T()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=O.sent,s=a.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,t=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=O.sent,E=u.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,B=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},I=function(){var b=s({}),C=v()(b,2),_=C[0],P=C[1];return g.createElement("div",{className:"example-layout-cols-2"},g.createElement(t,{schema:y,itemLayout:B,renderers:E,onChange:function(N,H){return P(H)}}),g.createElement(d,{value:_}))},O.abrupt("return",{default:I});case 23:case"end":return O.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":D,react:R||(R=e.t(g,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":D},renderOpts:{compile:function(){var o=W()(T()().mark(function s(){var n,t=arguments;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-2":{component:g.memo(g.lazy(W()(T()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I;return T()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=O.sent,s=a.useState,O.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return n=O.sent,t=n.default,O.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return l=O.sent,d=l.default,O.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return u=O.sent,E=u.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return f=O.sent,B=f.default,y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},I=function(){var b=s({}),C=v()(b,2),_=C[0],P=C[1];return g.createElement("div",{className:"example-layout-cols-2"},g.createElement(t,{schema:y,itemLayout:B,renderers:E,onItemChange:function(N){return P(N)}}),g.createElement(d,{value:_}))},O.abrupt("return",{default:I});case 23:case"end":return O.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":D,react:R||(R=e.t(g,2)),"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":D},renderOpts:{compile:function(){var o=W()(T()().mark(function s(){var n,t=arguments;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}},"examples-core-react-200-change-event-demo-3":{component:g.memo(g.lazy(W()(T()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b;return T()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=_.sent,s=a.useState,_.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return n=_.sent,t=n.Input,_.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return l=_.sent,d=l.default,_.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return u=_.sent,E=u.default,_.next=18,Promise.resolve().then(e.bind(e,2862));case 18:return f=_.sent,B=f.default,_.next=22,Promise.resolve().then(e.bind(e,78469));case 22:return y=_.sent,I=y.default,x={component:function(K){var N,H=K.schema,U=K.value,F=K.disabled,Z=K.onChange;return g.createElement(t,p()(p()({placeholder:"\u8BF7\u8F93\u5165".concat((N=H.title)!==null&&N!==void 0?N:"")},H.renderOptions),{},{value:U,disabled:F,onChange:function(J){Z(J.target.value,{extra:Math.random()})}}))}},O=p()({InputTextWithExtra:x},B),S={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputTextWithExtra"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},b=function(){var K=s({}),N=v()(K,2),H=N[0],U=N[1];return g.createElement("div",{className:"example-layout-cols-2"},g.createElement(d,{schema:S,itemLayout:I,renderers:O,onItemChange:function(Z){return U(Z)}}),g.createElement(E,{value:H}))},_.abrupt("return",{default:b});case 29:case"end":return _.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-200-change-event-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":D,react:R||(R=e.t(g,2)),antd:h,"@schema-render/core-react":A,"@examples/components/SyntaxHighlighter":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":D},renderOpts:{compile:function(){var o=W()(T()().mark(function s(){var n,t=arguments;return T()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}}}},58297:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return D}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(233),g=e(74072),j=e(41989),A=e(78469),$=e(2862),M=e(24345),D={"examples-core-react-210-relation-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=I.sent,o=m.useState,I.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=I.sent,s=a.default,I.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=I.sent,t=n.default,I.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return l=I.sent,d=l.default,I.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return u=I.sent,E=u.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},B=function(){var O=o({}),S=T()(O,2),b=S[0],C=S[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(s,{schema:f,itemLayout:E,renderers:d,value:b,onChange:function(P,K){(K.sPath==="width"||K.sPath==="height")&&(P.width=K.value,P.height=K.value),C(P)}}),i.createElement(t,{value:b}))},I.abrupt("return",{default:B});case 23:case"end":return I.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(i,2)),"@schema-render/core-react":g,"@examples/components/SyntaxHighlighter":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-core-react-210-relation-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=I.sent,o=m.useState,I.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=I.sent,s=a.default,I.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=I.sent,t=n.default,I.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return l=I.sent,d=l.default,I.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return u=I.sent,E=u.default,f={renderType:"Root",properties:{width:{title:"\u5BBD\u5EA6",renderType:"InputNumber"},height:{title:"\u9AD8\u5EA6",renderType:"InputNumber"},x:{title:"\u6A2A\u5750\u6807",renderType:"InputNumber"},y:{title:"\u7EB5\u5750\u6807",renderType:"InputNumber"}}},B=function(){var O=o({}),S=T()(O,2),b=S[0],C=S[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(s,{schema:f,itemLayout:E,renderers:d,watch:{width:function(P){P.height=P.width},height:function(P){P.width=P.height}},value:b,onChange:C}),i.createElement(t,{value:b}))},I.abrupt("return",{default:B});case 23:case"end":return I.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(i,2)),"@schema-render/core-react":g,"@examples/components/SyntaxHighlighter":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-core-react-210-relation-demo-2":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y,I;return p()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=O.sent,o=m.useState,O.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return a=O.sent,s=a.Button,O.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return n=O.sent,t=n.default,O.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return l=O.sent,d=l.default,O.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return u=O.sent,E=u.default,f={BankSelect:{component:function(b){var C=b.value,_=b.sPath,P=b.onChange,K=function(){var U=String(Math.random()).slice(2,6),F={bank_id:"id_".concat(U),bank_account:"111222333".concat(U),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(U),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(U,"\u652F\u884C")};P(F[_],{extra:F})},N={display:"flex",width:160,padding:"4px 10px",marginRight:10,border:"1px solid #ececec",borderRadius:6};return i.createElement("div",{style:{display:"flex"}},i.createElement("div",{style:N},C),i.createElement(s,{onClick:K},"\u9009\u62E9\u8D26\u6237"))}}},B={renderType:"Root",properties:{bank_account:{title:"\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},bank_name:{title:"\u5F00\u6237\u94F6\u884C",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C",renderType:"BankSelect"}}},y=function(b,C){b.bank_id=C.extra.bank_id,b.bank_account=C.extra.bank_account,b.bank_name=C.extra.bank_name,b.bank_branch_name=C.extra.bank_branch_name},I=function(){var b=o({}),C=T()(b,2),_=C[0],P=C[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(t,{schema:B,itemLayout:E,renderers:f,watch:{bank_account:y,bank_name:y,bank_branch_name:y},value:_,onChange:P}),i.createElement(d,{value:_}))},O.abrupt("return",{default:I});case 25:case"end":return O.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-210-relation-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},root:{type:"NPM"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":A,react:R||(R=e.t(i,2)),antd:M,"@schema-render/core-react":g,"@examples/components/SyntaxHighlighter":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},33632:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return D}});var r=e(5574),p=e.n(r),L=e(97857),T=e.n(L),z=e(15009),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(39008),A=e(24345),$=e(74072),M=e(78469),D={"examples-core-react-220-renderer-demo-0":{component:g.memo(g.lazy(W()(v()().mark(function h(){var m,o,a,s,n,t,l,d,u;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return m=f.sent,o=m.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=f.sent,s=a.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,t=n.default,l={MyRate:{component:function(y){var I=y.disabled,x=y.value,O=y.onChange;return g.createElement(o,{disabled:I,value:x,onChange:O})}}},d={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},u=function(){return g.createElement(s,{schema:d,itemLayout:t,renderers:l})},f.abrupt("return",{default:u});case 16:case"end":return f.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var h=W()(v()().mark(function o(){var a,s=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-core-react-220-renderer-demo-1":{component:g.memo(g.lazy(W()(v()().mark(function h(){var m,o,a,s,n,t,l,d,u;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return m=f.sent,o=m.Rate,f.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=f.sent,s=a.default,f.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=f.sent,t=n.default,l={MyRate:{formItem:function(y){var I=y.schema,x=y.disabled,O=y.value,S=y.onChange;return g.createElement("div",null,g.createElement("strong",{style:{color:"red",marginRight:10}},"\u3010",I.title,"\u3011"),g.createElement(o,{disabled:x,value:O,onChange:S}))}}},d={renderType:"Root",properties:{rate:{title:"\u8BC4\u5206",renderType:"MyRate"}}},u=function(){return g.createElement(s,{schema:d,itemLayout:t,renderers:l})},f.abrupt("return",{default:u});case 16:case"end":return f.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var h=W()(v()().mark(function o(){var a,s=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-core-react-220-renderer-demo-2":{component:g.memo(g.lazy(W()(v()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=I.sent,o=m.useState,I.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=I.sent,s=a.default,I.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=I.sent,t=n.default,I.next=14,Promise.resolve().then(e.bind(e,24345));case 14:return l=I.sent,d=l.Button,u=l.Input,E={InputText:{component:function(O){var S,b=O.schema,C=O.value,_=O.disabled,P=O.readonly,K=O.onChange;return P?g.createElement("div",null,C):g.createElement(u,T()(T()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((S=b.title)!==null&&S!==void 0?S:"")},b.renderOptions),{},{value:C!=null?C:"",disabled:_,onChange:function(H){return K(H.target.value)}}))}},TextArea:{component:function(O){var S,b=O.schema,C=O.value,_=O.disabled,P=O.onChange;return g.createElement(u.TextArea,T()(T()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((S=b.title)!==null&&S!==void 0?S:"")},b.renderOptions),{},{value:C!=null?C:"",onChange:function(N){return P(N.target.value)},disabled:_}))},readonlyComponent:function(O){var S=O.value;return g.createElement("div",null,S)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},B=function(){var O=o(!1),S=p()(O,2),b=S[0],C=S[1],_=o({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),P=p()(_,2),K=P[0],N=P[1];return g.createElement("div",{style:{maxWidth:500}},g.createElement(s,{schema:f,itemLayout:t,renderers:E,value:K,onChange:N,readonly:b}),g.createElement(d,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return C(!b)}},b?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},I.abrupt("return",{default:B});case 21:case"end":return I.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-220-renderer-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":M,react:R||(R=e.t(g,2)),"@schema-render/core-react":$,antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var h=W()(v()().mark(function o(){var a,s=arguments;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},95902:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return h}});var r=e(15009),p=e.n(r),L=e(97857),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(37424),g=e(24345),j=e(74072),A=e(33517),$=e(78469),M=e(47621),D=e(40644),h={"examples-core-react-221-renderer-object-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x;return p()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return o=S.sent,a=o.Input,S.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=S.sent,n=s.default,S.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return t=S.sent,l=t.default,S.next=14,Promise.resolve().then(e.bind(e,47621));case 14:return d=S.sent,u=d.default,S.next=18,Promise.resolve().then(e.bind(e,40644));case 18:return E=S.sent,f=E.default,S.next=22,Promise.resolve().then(e.bind(e,33517));case 22:return B=S.sent,y=B.default,I={Object:y,ObjectCollapse:f,InputText:{component:function(C){var _,P=C.schema,K=C.value,N=C.disabled,H=C.onChange;return i.createElement(a,T()(T()({placeholder:"\u8BF7\u8F93\u5165".concat((_=P.title)!==null&&_!==void 0?_:"")},P.renderOptions),{},{value:K,disabled:N,onChange:function(F){return H(F.target.value)}}))}}},x=function(){return i.createElement(n,{schema:u,itemLayout:l,renderers:I})},S.abrupt("return",{default:x});case 27:case"end":return S.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.jsx"},context:{"./renderers/object/ObjectNormal.tsx":A,"./item-layout/Horizontal.tsx":$,"./schemas/object.ts":M,"./renderers/object/ObjectCollapse.tsx":D,antd:g,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":D},renderOpts:{compile:function(){var m=v()(p()().mark(function a(){var s,n=arguments;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"examples-core-react-221-renderer-object-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C,_;return p()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return o=K.sent,a=o.Input,K.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return s=K.sent,n=s.useRef,K.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return t=K.sent,l=t.default,K.next=14,Promise.resolve().then(e.bind(e,24345));case 14:return d=K.sent,u=d.Button,E=d.message,K.next=19,Promise.resolve().then(e.bind(e,78469));case 19:return f=K.sent,B=f.default,K.next=23,Promise.resolve().then(e.bind(e,47621));case 23:return y=K.sent,I=y.default,K.next=27,Promise.resolve().then(e.bind(e,40644));case 27:return x=K.sent,O=x.default,K.next=31,Promise.resolve().then(e.bind(e,33517));case 31:return S=K.sent,b=S.default,C={Object:b,ObjectCollapse:O,InputText:{component:function(H){var U,F=H.schema,Z=H.value,Q=H.disabled,J=H.onChange;return i.createElement(a,T()(T()({placeholder:"\u8BF7\u8F93\u5165".concat((U=F.title)!==null&&U!==void 0?U:"")},F.renderOptions),{},{value:Z,disabled:Q,onChange:function(ee){return J(ee.target.value)}}))}}},_=function(){var H=n(null),U=function(){var F=v()(p()().mark(function Z(){var Q,J,ne;return p()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,(Q=H.current)===null||Q===void 0?void 0:Q.validate();case 2:J=se.sent,ne=J.hasError,ne||E.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return se.stop()}},Z)}));return function(){return F.apply(this,arguments)}}();return i.createElement("div",null,i.createElement(l,{ref:H,schema:I,itemLayout:B,renderers:C}),i.createElement(u,{type:"primary",onClick:U,style:{marginTop:15}},"\u63D0\u4EA4"))},K.abrupt("return",{default:_});case 36:case"end":return K.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-221-renderer-object-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./schemas/object.ts":{type:"FILE",value:e(12967).Z},"./renderers/object/ObjectCollapse.tsx":{type:"FILE",value:e(93635).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":A,"./item-layout/Horizontal.tsx":$,"./schemas/object.ts":M,"./renderers/object/ObjectCollapse.tsx":D,antd:g,react:R||(R=e.t(i,2)),"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/schemas/object.ts":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectCollapse.tsx":D},renderOpts:{compile:function(){var m=v()(p()().mark(function a(){var s,n=arguments;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},93609:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(48966),p={}},90239:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return h}});var r=e(5574),p=e.n(r),L=e(97857),T=e.n(L),z=e(15009),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(92436),A=e(74072),$=e(2862),M=e(78469),D=e(24345),h={"examples-core-react-223-validator-demo-0":{component:g.memo(g.lazy(W()(v()().mark(function m(){var o,a,s,n,t,l,d,u;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return o=f.sent,a=o.default,f.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=f.sent,n=s.default,f.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=f.sent,l=t.default,d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},u=function(){return g.createElement(a,{schema:d,itemLayout:n,renderers:l})},f.abrupt("return",{default:u});case 15:case"end":return f.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":M,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var m=W()(v()().mark(function a(){var s,n=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"examples-core-react-223-validator-demo-1":{component:g.memo(g.lazy(W()(v()().mark(function m(){var o,a,s,n,t,l,d,u,E,f;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return o=y.sent,a=o.default,y.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return s=y.sent,n=s.default,y.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return t=y.sent,l=t.default,d={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{validator:"detectSensitiveWord"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,rules:[{validator:"detectSensitiveWord",message:"TIPS: \u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD\u54E6"}]}}},u=function(){var I=W()(v()().mark(function x(O){return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",new Promise(function(C){setTimeout(function(){return C({ok:!1})},200)}));case 1:case"end":return b.stop()}},x)}));return function(O){return I.apply(this,arguments)}}(),E={detectSensitiveWord:function(){var I=W()(v()().mark(function O(S){var b,C;return v()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return b=S.value,P.next=3,u(b);case 3:if(C=P.sent,C.ok){P.next=6;break}return P.abrupt("return",{status:"error",message:"\u5185\u5BB9\u5305\u542B\u654F\u611F\u8BCD"});case 6:case"end":return P.stop()}},O)}));function x(O){return I.apply(this,arguments)}return x}()},f=function(){return g.createElement(a,{schema:d,itemLayout:n,renderers:l,validators:E})},y.abrupt("return",{default:f});case 17:case"end":return y.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":M,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var m=W()(v()().mark(function a(){var s,n=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"examples-core-react-223-validator-demo-2":{component:g.memo(g.lazy(W()(v()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y;return v()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return o=x.sent,a=o.Rate,x.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return s=x.sent,n=s.default,x.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return t=x.sent,l=t.default,x.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return d=x.sent,u=d.default,E={component:function(S){var b=S.schema,C=S.value,_=S.disabled,P=S.onChange;return g.createElement(a,T()(T()({},b.renderOptions),{},{value:C,disabled:_,onChange:function(N){return P(N)}}))},validator:function(S){var b=S.value;return b===0?{status:"error",message:"\u8BF7\u9009\u62E9\u8BC4\u5206"}:b<=3?{status:"error",message:"\u4EB2\uFF0C\u8BC4\u5206\u53EF\u4EE5\u6253\u9AD8\u4E00\u70B9\u54E6\u{1F62F}"}:{status:"error",message:"\u54C7\uFF0Cnice~"}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"},rate:{renderType:"Rate",title:"\u8BC4\u5206",required:!0}}},B=T()(T()({},u),{},{Rate:E}),y=function(){return g.createElement(n,{schema:f,itemLayout:l,renderers:B})},x.abrupt("return",{default:y});case 21:case"end":return x.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rate } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":$,"./item-layout/Horizontal.tsx":M,antd:D,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var m=W()(v()().mark(function a(){var s,n=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"examples-core-react-223-validator-demo-3":{component:g.memo(g.lazy(W()(v()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x;return v()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=S.sent,a=o.useState,s=o.useRef,S.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return n=S.sent,t=n.Button,l=n.message,S.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return d=S.sent,u=d.default,S.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return E=S.sent,f=E.default,S.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return B=S.sent,y=B.default,I={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"},{pattern:"^[a-zA-Z\\d]+$",message:"\u6807\u9898\u4EC5\u80FD\u5305\u542B\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}]}}},x=function(){var C=a({}),_=p()(C,2),P=_[0],K=_[1],N=s(null);function H(){return U.apply(this,arguments)}function U(){return U=W()(v()().mark(function F(){var Z,Q,J;return v()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,N.current.validate();case 2:if(Z=ee.sent,Q=Z.hasError,J=Z.errorList,console.log("[validate] hasError: ",Q),console.log("[validate] errorList: ",J),!Q){ee.next=9;break}return ee.abrupt("return",l.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:l.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return ee.stop()}},F)})),U.apply(this,arguments)}return g.createElement("div",null,g.createElement(u,{ref:N,schema:I,value:P,onChange:K,itemLayout:y,renderers:f}),g.createElement(t,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:H},"\u63D0\u4EA4"))},S.abrupt("return",{default:x});case 25:case"end":return S.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-core-react-223-validator-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":M,"./renderers/common.tsx":$,react:R||(R=e.t(g,2)),antd:D,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var m=W()(v()().mark(function a(){var s,n=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},61022:function(V,c,e){e.r(c),e.d(c,{demos:function(){return g}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(86685),v=e(74072),i=e(2862),W=e(78469),g={"examples-core-react-230-global-status-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function j(){var A,$,M,D,h,m,o,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,D=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,m=h.default,o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},a=function(){return T.createElement($,{disabled:!0,schema:o,itemLayout:D,renderers:m})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-230-global-status-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":i,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":i,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var j=L()(r()().mark(function $(){var M,D=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(M=m.sent).default.apply(M,D));case 3:case"end":return m.stop()}},$)}));function A(){return j.apply(this,arguments)}return A}()}}}},61650:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return m}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(97857),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(43315),A=e(24345),$=e(74072),M=e(33517),D=e(2862),h=e(78469),m={"examples-core-react-250-scroll-demo-0":{component:g.memo(g.lazy(W()(p()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C;return p()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=P.sent,s=a.useState,n=a.useRef,P.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return t=P.sent,l=t.Button,d=t.Space,P.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return u=P.sent,E=u.default,P.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=P.sent,B=f.default,P.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=P.sent,I=y.default,P.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return x=P.sent,O=x.default,S=v()(v()({},B),{},{Object:O}),b={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},C=function(){var N=s({}),H=T()(N,2),U=H[0],F=H[1],Z=n(null);return g.createElement("div",{style:{display:"flex",columnGap:20}},g.createElement(E,{style:{maxWidth:500,flexGrow:1,height:500,padding:"10px 5px",border:"1px solid #ccc",overflow:"auto"},ref:Z,schema:b,value:U,onChange:F,itemLayout:I,renderers:S}),g.createElement(d,{direction:"vertical"},g.createElement(l,{onClick:function(){var J;return(J=Z.current)===null||J===void 0?void 0:J.scrollTo("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),g.createElement(l,{onClick:function(){var J;(J=Z.current)===null||J===void 0||J.scrollTo(["object_spec","title"],{gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),g.createElement(l,{onClick:function(){var J;(J=Z.current)===null||J===void 0||J.scrollTo("object_other.content",{xAxis:!1})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011")))},P.abrupt("return",{default:C});case 30:case"end":return P.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":D,"./item-layout/Horizontal.tsx":h,react:R||(R=e.t(g,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":D,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var o=W()(p()().mark(function s(){var n,t=arguments;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}},"examples-core-react-250-scroll-demo-1":{component:g.memo(g.lazy(W()(p()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C;return p()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=P.sent,s=a.useState,n=a.useRef,P.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return t=P.sent,l=t.Button,d=t.Space,P.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return u=P.sent,E=u.default,P.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=P.sent,B=f.default,P.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=P.sent,I=y.default,P.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return x=P.sent,O=x.default,S=v()(v()({},B),{},{Object:O}),b={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},C=function(){var N=s({}),H=T()(N,2),U=H[0],F=H[1],Z=n(null),Q=n(null);return g.createElement("div",{ref:Q,style:{display:"flex",columnGap:20,height:500,padding:10,border:"1px solid #ccc",overflow:"auto",position:"relative"}},g.createElement(E,{style:{maxWidth:500,flexGrow:1},ref:Z,schema:b,value:U,onChange:F,itemLayout:I,renderers:S}),g.createElement("div",{style:{position:"sticky",top:0}},g.createElement(d,{direction:"vertical"},g.createElement(l,{onClick:function(){var ne;(ne=Z.current)===null||ne===void 0||ne.scrollTo("object_basic",{positionedElement:Q.current})}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),g.createElement(l,{onClick:function(){var ne;(ne=Z.current)===null||ne===void 0||ne.scrollTo(["object_spec","title"],{positionedElement:Q.current,gap:-20})}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),g.createElement(l,{onClick:function(){var ne;(ne=Z.current)===null||ne===void 0||ne.scrollTo("object_other.content",{positionedElement:Q.current})}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},P.abrupt("return",{default:C});case 30:case"end":return P.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":D,"./item-layout/Horizontal.tsx":h,react:R||(R=e.t(g,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":D,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var o=W()(p()().mark(function s(){var n,t=arguments;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}},"examples-core-react-250-scroll-demo-2":{component:g.memo(g.lazy(W()(p()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C;return p()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return a=P.sent,s=a.useState,n=a.useRef,P.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return t=P.sent,l=t.Button,d=t.Space,P.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return u=P.sent,E=u.default,P.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return f=P.sent,B=f.default,P.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return y=P.sent,I=y.default,P.next=24,Promise.resolve().then(e.bind(e,33517));case 24:return x=P.sent,O=x.default,S=v()(v()({},B),{},{Object:O}),b={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}},object_basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u57FA\u7840\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u57FA\u7840\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_spec:{title:"\u89C4\u683C\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u89C4\u683C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u89C4\u683C\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_service:{title:"\u670D\u52A1\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u670D\u52A1\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u670D\u52A1\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}},object_other:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"Object",properties:{title:{title:"\u5176\u4ED6\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5176\u4ED6\u5185\u5BB9",renderType:"TextArea",required:!0,renderOptions:{rows:10}}}}}},C=function(){var N=s({}),H=T()(N,2),U=H[0],F=H[1],Z=n(null),Q=function(ne){var ee,se,Ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;(ee=Z.current)===null||ee===void 0||ee.scrollTo(ne,{positionedElement:window,gap:-76+Ie,behavior:"instant"});var me=(se=Z.current)===null||se===void 0||(se=se.findItem(ne))===null||se===void 0?void 0:se.getRootElement();me==null||me.classList.add("focus-out"),setTimeout(function(){me==null||me.classList.remove("focus-out")},1e3)};return g.createElement("div",{style:{display:"flex",columnGap:20}},g.createElement(E,{style:{maxWidth:500,flexGrow:1},ref:Z,schema:b,value:U,onChange:F,itemLayout:I,renderers:S}),g.createElement("div",null,g.createElement(d,{direction:"vertical"},g.createElement(l,{onClick:function(){return Q("object_basic")}},"\u79FB\u52A8\u5230\u3010\u57FA\u7840\u4FE1\u606F\u3011"),g.createElement(l,{onClick:function(){return Q(["object_spec","title"],-20)}},"\u79FB\u52A8\u5230\u3010\u89C4\u683C\u4FE1\u606F-\u89C4\u683C\u6807\u9898-\u589E\u52A020px\u8DDD\u79BB\u3011"),g.createElement(l,{onClick:function(){return Q("object_other.content")}},"\u79FB\u52A8\u5230\u3010\u5176\u4ED6\u4FE1\u606F-\u5176\u4ED6\u5185\u5BB9\u3011"))))},P.abrupt("return",{default:C});case 30:case"end":return P.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-core-react-250-scroll-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/object/ObjectNormal.tsx":{type:"FILE",value:e(3116).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/object/ObjectNormal.tsx":M,"./renderers/common.tsx":D,"./item-layout/Horizontal.tsx":h,react:R||(R=e.t(g,2)),antd:A,"@schema-render/core-react":$,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/object/ObjectNormal.tsx":M,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":D,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":h},renderOpts:{compile:function(){var o=W()(p()().mark(function s(){var n,t=arguments;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}}}},49669:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return M}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(46715),g=e(24345),j=e(74072),A=e(78469),$=e(2862),M={"examples-core-react-280-open-api-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B,y;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=x.sent,m=h.useState,o=h.useRef,x.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return a=x.sent,s=a.Button,n=a.message,x.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return t=x.sent,l=t.default,x.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return d=x.sent,u=d.default,x.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return E=x.sent,f=E.default,B={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var S=m({}),b=T()(S,2),C=b[0],_=b[1],P=o(null);function K(){return N.apply(this,arguments)}function N(){return N=v()(p()().mark(function H(){var U,F,Z;return p()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,P.current.validate();case 2:if(U=J.sent,F=U.hasError,Z=U.errorList,console.log("[validate] hasError: ",F),console.log("[validate] errorList: ",Z),!F){J.next=9;break}return J.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 9:n.success("\u9A8C\u8BC1\u6210\u529F");case 10:case"end":return J.stop()}},H)})),N.apply(this,arguments)}return i.createElement("div",null,i.createElement(l,{ref:P,schema:B,value:C,onChange:_,itemLayout:f,renderers:u}),i.createElement(s,{type:"primary",style:{margin:"24px 0 0 115px"},onClick:K},"\u63D0\u4EA4"))},x.abrupt("return",{default:y});case 25:case"end":return x.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(i,2)),antd:g,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B,y;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=x.sent,m=h.useState,o=h.useRef,x.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return a=x.sent,s=a.Button,n=a.message,x.next=12,Promise.resolve().then(e.bind(e,74072));case 12:return t=x.sent,l=t.default,x.next=16,Promise.resolve().then(e.bind(e,2862));case 16:return d=x.sent,u=d.default,x.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return E=x.sent,f=E.default,B={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0,rules:[{min:5,message:"\u6807\u9898\u6700\u5C11 5 \u4E2A\u5B57\u7B26"},{max:10,message:"\u6807\u9898\u4E0D\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},y=function(){var S=m({}),b=T()(S,2),C=b[0],_=b[1],P=o(null);function K(){return N.apply(this,arguments)}function N(){return N=v()(p()().mark(function U(){var F,Z;return p()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,P.current.validate();case 2:if(F=J.sent,Z=F.hasError,!Z){J.next=6;break}return J.abrupt("return",n.error("\u9A8C\u8BC1\u9519\u8BEF"));case 6:n.success("\u9A8C\u8BC1\u6210\u529F");case 7:case"end":return J.stop()}},U)})),N.apply(this,arguments)}var H=function(){P.current.resetError()};return i.createElement("div",null,i.createElement(l,{ref:P,schema:B,value:C,onChange:_,itemLayout:f,renderers:u}),i.createElement(s,{type:"primary",style:{margin:"24px 15px 0 115px"},onClick:K},"\u63D0\u4EA4"),i.createElement(s,{onClick:H},"\u91CD\u7F6E\u9519\u8BEF\u63D0\u793A"))},x.abrupt("return",{default:y});case 25:case"end":return x.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(i,2)),antd:g,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-2":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,m=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return o=y.sent,a=o.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return s=y.sent,n=s.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return t=y.sent,l=t.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,u=d.default,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var x=m(null),O=function(){x.current.resetValue()};return i.createElement("div",null,i.createElement(n,{ref:x,schema:E,itemLayout:u,renderers:l}),i.createElement(a,{style:{margin:"24px 15px 0 115px"},onClick:O},"\u91CD\u7F6E"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(i,2)),antd:g,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-3":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,m=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return o=y.sent,a=o.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return s=y.sent,n=s.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return t=y.sent,l=t.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,u=d.default,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var x=m(null);return i.createElement("div",null,i.createElement(n,{ref:x,schema:E,itemLayout:u,renderers:l}),i.createElement(a,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var S,b=(S=x.current)===null||S===void 0?void 0:S.getRootElement();console.log("rootElement:",b)}},"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(i,2)),antd:g,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-280-open-api-demo-4":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=y.sent,m=h.useRef,y.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return o=y.sent,a=o.Button,y.next=10,Promise.resolve().then(e.bind(e,74072));case 10:return s=y.sent,n=s.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return t=y.sent,l=t.default,y.next=18,Promise.resolve().then(e.bind(e,78469));case 18:return d=y.sent,u=d.default,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0}}},f=function(){var x=m(null);return i.createElement("div",null,i.createElement(n,{ref:x,schema:E,itemLayout:u,renderers:l}),i.createElement(a,{style:{margin:"24px 15px 0 115px"},type:"primary",onClick:function(){var S,b=(S=x.current)===null||S===void 0||(S=S.findItem("title"))===null||S===void 0?void 0:S.getRootElement();console.log("formItemRootElement:",b)}},"\u83B7\u53D6\u3010\u6807\u9898\u3011\u6839\u8282\u70B9 DOM \u5143\u7D20\uFF0C\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B"))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-280-open-api-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":A,"./renderers/common.tsx":$,react:R||(R=e.t(i,2)),antd:g,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},68642:function(V,c,e){e.r(c),e.d(c,{demos:function(){return g}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(35786),v=e(74072),i=e(2862),W=e(78469),g={"examples-core-react-300-default-value-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function j(){var A,$,M,D,h,m,o,a;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return A=n.sent,$=A.default,n.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return M=n.sent,D=M.default,n.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return h=n.sent,m=h.default,o={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},a=function(){return T.createElement($,{schema:o,defaultValue:{title:"\u6211\u662F\u6807\u9898"},itemLayout:D,renderers:m})},n.abrupt("return",{default:a});case 15:case"end":return n.stop()}},j)})))),asset:{type:"BLOCK",id:"examples-core-react-300-default-value-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":i,"./item-layout/Horizontal.tsx":W,"@schema-render/core-react":v,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":i,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":W},renderOpts:{compile:function(){var j=L()(r()().mark(function $(){var M,D=arguments;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(4019).then(e.bind(e,4019));case 2:return m.abrupt("return",(M=m.sent).default.apply(M,D));case 3:case"end":return m.stop()}},$)}));function A(){return j.apply(this,arguments)}return A}()}}}},95206:function(V,c,e){e.r(c),e.d(c,{demos:function(){return A}});var R=e(15009),r=e.n(R),p=e(97857),L=e.n(p),T=e(99289),z=e.n(T),v=e(67294),i=e(69708),W=e(74072),g=e(24345),j=e(78469),A={"examples-core-react-600-catch-error-tips-demo-0":{component:v.memo(v.lazy(z()(r()().mark(function $(){var M,D,h,m,o,a,s,n,t;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return M=d.sent,D=M.default,d.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return h=d.sent,m=h.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=d.sent,a=o.default,s={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(E){var f,B=E.schema,y=E.value,I=E.disabled,x=E.onChange;return v.createElement(m.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=B.title)!==null&&f!==void 0?f:"")},B.renderOptions),{},{value:y,onChange:function(S){return x(S.target.value)},disabled:I}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return v.createElement(D,{schema:n,itemLayout:a,renderers:s})},d.abrupt("return",{default:t});case 16:case"end":return d.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":j,"@schema-render/core-react":W,antd:g,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var $=z()(r()().mark(function D(){var h,m=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}},"examples-core-react-600-catch-error-tips-demo-1":{component:v.memo(v.lazy(z()(r()().mark(function $(){var M,D,h,m,o,a,s,n,t;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return M=d.sent,D=M.default,d.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return h=d.sent,m=h.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=d.sent,a=o.default,s={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(E){var f,B=E.schema,y=E.value,I=E.disabled,x=E.onChange;return v.createElement(m.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=B.title)!==null&&f!==void 0?f:"")},B.renderOptions),{},{value:y,onChange:function(S){return x(S.target.value)},disabled:I}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return v.createElement(D,{catchErrorTips:"silent",schema:n,itemLayout:a,renderers:s})},d.abrupt("return",{default:t});case 16:case"end":return d.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":j,"@schema-render/core-react":W,antd:g,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var $=z()(r()().mark(function D(){var h,m=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}},"examples-core-react-600-catch-error-tips-demo-2":{component:v.memo(v.lazy(z()(r()().mark(function $(){var M,D,h,m,o,a,s,n,t;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return M=d.sent,D=M.default,d.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return h=d.sent,m=h.Input,d.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return o=d.sent,a=o.default,s={InputText:{component:function(){throw Error("\u53D1\u751F\u9519\u8BEF\u4E86")}},TextArea:{component:function(E){var f,B=E.schema,y=E.value,I=E.disabled,x=E.onChange;return v.createElement(m.TextArea,L()(L()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((f=B.title)!==null&&f!==void 0?f:"")},B.renderOptions),{},{value:y,onChange:function(S){return x(S.target.value)},disabled:I}))}}},n={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u6700\u591A10\u4E2A\u5B57\u7B26"}},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},t=function(){return v.createElement(D,{catchErrorTips:function(){return v.createElement("div",{style:{color:"yellow",background:"black"}},"\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u4FE1\u606F")},schema:n,itemLayout:a,renderers:s})},d.abrupt("return",{default:t});case 16:case"end":return d.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-core-react-600-catch-error-tips-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":j,"@schema-render/core-react":W,antd:g,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":j},renderOpts:{compile:function(){var $=z()(r()().mark(function D(){var h,m=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}}}},35963:function(V,c,e){e.r(c),e.d(c,{demos:function(){return j}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(96687),v=e(74072),i=e(78484),W=e(2862),g=e(78469),j={"examples-core-react-700-locale-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function A(){var $,M,D,h,m,o,a,s,n,t;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return $=d.sent,M=$.default,d.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return D=d.sent,h=D.default,d.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return m=d.sent,o=m.default,d.next=14,Promise.resolve().then(e.bind(e,78484));case 14:return a=d.sent,s=a.default,n={renderType:"Root",properties:{title:{title:"Title",renderType:"InputText",renderOptions:{maxLength:10,placeholder:"Please enter a title with a maximum of 10 characters"},required:!0},content:{title:"Content",renderType:"TextArea",renderOptions:{placeholder:"Please enter content"},required:!0}}},t=function(){return T.createElement(M,{style:{maxWidth:600},schema:n,itemLayout:h,renderers:o,locale:s})},d.abrupt("return",{default:t});case 19:case"end":return d.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-core-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core, { IRootSchema } from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":W,"./item-layout/Horizontal.tsx":g,"@schema-render/core-react":v,"@schema-render/core-react/src/locale/en_US":i,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":W,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":g},renderOpts:{compile:function(){var A=L()(r()().mark(function M(){var D,h=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(D=o.sent).default.apply(D,h));case 3:case"end":return o.stop()}},M)}));function $(){return A.apply(this,arguments)}return $}()}}}},82440:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(85105),p={}},95491:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return $}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(19632),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(2755),A=e(74072),$={"examples-core-react-890-benchmark-demo-0":{component:g.memo(g.lazy(W()(p()().mark(function M(){var D,h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return D=y.sent,h=D.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=y.sent,o=m.useState,a=m.Profiler,s=function(x){var O=x.schema,S=x.body;return g.createElement(g.Fragment,null,g.createElement("h4",null,O.title),g.createElement("div",null,S))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},t={InputText:{component:function(x){var O=x.schema,S=x.value,b=x.onChange;return g.createElement("div",{style:{display:"flex"}},g.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(O.title),value:S||"",onChange:function(_){return b(_.target.value)}}))}}},l=600,d={renderType:"Root",properties:{}},u=v()(Array(l).keys()),u.forEach(function(I){var x="field_".concat(I);d.properties[x]={title:x,renderType:"InputText"}}),E=["100px","1fr"],f=function(){var x=o({}),O=T()(x,2),S=O[0],b=O[1],C=o(""),_=T()(C,2),P=_[0],K=_[1],N=function(U,F){var Z=parseInt(F.sPath.slice(6)),Q=Z-1,J=Z+1,ne="field_".concat(J>=l?Q:J);U[ne]=F.value,b(U)};return g.createElement(a,{id:"sr",onRender:function(U,F,Z,Q,J,ne){var ee="\u64CD\u4F5C: ".concat(F,", \u6E32\u67D3\u8017\u65F6: ").concat(Z," (\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\u6027\u80FD\u4F1A\u597D\u90A3\u4E48\u4E00\u70B9\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 Profiler \u6027\u80FD\u5206\u6790)"),se=document.getElementById("profile");se&&(se.innerHTML=ee),console.log("===> ".concat(ee)),console.log("phase: ".concat(F,", actualDuration: ").concat(Z,", baseDuration: ").concat(Q,", startTime: ").concat(J,", commitTime: ").concat(ne))}},g.createElement("h3",{id:"profile"},P),g.createElement(h,{layout:"autoFill",layoutMinMax:E,schema:d,itemLayout:s,renderers:t,value:S,onChange:N}))},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,react:R||(R=e.t(g,2))},renderOpts:{compile:function(){var M=W()(p()().mark(function h(){var m,o=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}},"examples-core-react-890-benchmark-demo-1":{component:g.memo(g.lazy(W()(p()().mark(function M(){var D,h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return D=y.sent,h=D.default,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=y.sent,o=m.useState,a=m.Profiler,s=function(x){var O=x.schema,S=x.body;return g.createElement(g.Fragment,null,g.createElement("h4",null,O.title),g.createElement("div",null,S))},n={border:"1px solid #ccc",borderRadius:6,padding:8,width:"100%",boxSize:"border-box"},t={InputText:{component:function(x){var O=x.schema,S=x.value,b=x.onChange;return g.createElement("div",{style:{display:"flex"}},g.createElement("input",{style:n,placeholder:"\u8BF7\u8F93\u5165".concat(O.title),value:S||"",onChange:function(_){return b(_.target.value)}}))}}},l=1800,d={renderType:"Root",properties:{}},u=v()(Array(l).keys()),u.forEach(function(I){var x="field_".concat(I);d.properties[x]={title:x,renderType:"InputText"}}),E=["100px","1fr"],f=function(){var x=o({}),O=T()(x,2),S=O[0],b=O[1],C=function(P,K){var N=parseInt(K.sPath.slice(6)),H=N-1,U=N+1,F="field_".concat(U>=l?H:U);P[F]=K.value,b(P)};return g.createElement(h,{layout:"autoFill",layoutMinMax:E,schema:d,itemLayout:s,renderers:t,value:S,onChange:C})},y.abrupt("return",{default:f});case 19:case"end":return y.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-core-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/core-react":A,react:R||(R=e.t(g,2))},renderOpts:{compile:function(){var M=W()(p()().mark(function h(){var m,o=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}}}},50142:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(88485),p={}},67941:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(97024),p={}},50094:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(92311),p={}},79584:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(78593),p={}},75916:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return M}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(25105),g=e(74072),j=e(24345),A=e(2862),$=e(78469),M={"examples-core-react-950-async-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=I.sent,m=h.default,I.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=I.sent,a=o.default,I.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return s=I.sent,n=s.default,I.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return t=I.sent,l=t.useState,I.next=18,Promise.resolve().then(e.bind(e,24345));case 18:return d=I.sent,u=d.Button,E=d.Space,f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},B=function(){var O=l({}),S=T()(O,2),b=S[0],C=S[1],_=function(){setTimeout(function(){C({title:"\u65B0\u6807\u9898::".concat(String(Math.random()).slice(2,10)),content:"\u65B0\u5185\u5BB9::".concat(String(Math.random()).slice(2,10))})},100)},P=function(){return C({})};return i.createElement(i.Fragment,null,i.createElement(m,{style:{marginBottom:15},schema:f,value:b,onChange:function(N){return C(N)},itemLayout:a,renderers:n}),i.createElement(E,null,i.createElement(u,{type:"primary",onClick:_},"\u52A0\u8F7D\u5F02\u6B65\u6570\u636E"),i.createElement(u,{onClick:P},"\u91CD\u7F6E")))},I.abrupt("return",{default:B});case 24:case"end":return I.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-950-async-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":g,react:R||(R=e.t(i,2)),antd:j,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},58177:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return M}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(35170),g=e(41989),j=e(74072),A=e(2862),$=e(78469),M={"examples-core-react-951-controllable-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,m=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=y.sent,a=o.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=y.sent,n=s.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return t=y.sent,l=t.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,u=d.useState,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var x=u({}),O=T()(x,2),S=O[0],b=O[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{schema:E,itemLayout:n,renderers:l,value:S,onChange:function(_){return b(_)}}),i.createElement(m,{value:S}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":g,"@schema-render/core-react":j,react:R||(R=e.t(i,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,m=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=y.sent,a=o.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=y.sent,n=s.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return t=y.sent,l=t.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,u=d.useState,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var x=u({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),O=T()(x,1),S=O[0];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{schema:E,itemLayout:n,renderers:l,value:S}),i.createElement(m,{value:S}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":g,"@schema-render/core-react":j,react:R||(R=e.t(i,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-2":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,m=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=y.sent,a=o.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=y.sent,n=s.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return t=y.sent,l=t.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,u=d.useState,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var x=u({title:"\u6211\u662F\u56FA\u5B9A\u7684\u6807\u9898"}),O=T()(x,1),S=O[0],b=u(1),C=T()(b,2),_=C[0],P=C[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{schema:E,itemLayout:n,renderers:l,value:S,onChange:function(){P(function(N){return N+1})}}),i.createElement(m,{value:S}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":g,"@schema-render/core-react":j,react:R||(R=e.t(i,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-3":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,74072));case 2:return h=u.sent,m=h.default,u.next=6,Promise.resolve().then(e.bind(e,78469));case 6:return o=u.sent,a=o.default,u.next=10,Promise.resolve().then(e.bind(e,2862));case 10:return s=u.sent,n=s.default,t={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},l=function(){return i.createElement(m,{schema:t,itemLayout:a,renderers:n})},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Core from '@schema-render/core-react'
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

export default Demo`},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@schema-render/core-react":j,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-core-react-951-controllable-demo-4":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=y.sent,m=h.default,y.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=y.sent,a=o.default,y.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=y.sent,n=s.default,y.next=14,Promise.resolve().then(e.bind(e,2862));case 14:return t=y.sent,l=t.default,y.next=18,Promise.resolve().then(e.t.bind(e,67294,19));case 18:return d=y.sent,u=d.useState,E={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"Textarea"}}},f=function(){var x=u({}),O=T()(x,2),S=O[0],b=O[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{schema:E,itemLayout:n,renderers:l,onChange:function(_){return b(_)}}),i.createElement(m,{value:S}))},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-951-controllable-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},"./renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./renderers/common.tsx":A,"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":g,"@schema-render/core-react":j,react:R||(R=e.t(i,2)),"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},30266:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return M}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(12727),g=e(41989),j=e(74072),A=e(24345),$=e(78469),M={"examples-core-react-952-multi-renderer-on-change-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B,y;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return h=x.sent,m=h.default,x.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return o=x.sent,a=o.default,x.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return s=x.sent,n=s.default,x.next=14,Promise.resolve().then(e.t.bind(e,67294,19));case 14:return t=x.sent,l=t.useState,d=t.useEffect,x.next=19,Promise.resolve().then(e.bind(e,24345));case 19:return u=x.sent,E=u.Input,f={InputOrg:{component:function(S){var b,C=S.schema,_=S.value,P=S.rootValue,K=S.onChange;return console.log("==== InputOrg ===="),console.log("value:",_),console.log("rootValue:",P),d(function(){K("\u673A\u6784 A")},[]),i.createElement(E,{placeholder:"\u8BF7\u8F93\u5165".concat((b=C.title)!==null&&b!==void 0?b:""),value:_!=null?_:"",onChange:function(H){return K(H.target.value)}})}},InputSupplier:{component:function(S){var b,C=S.schema,_=S.value,P=S.rootValue,K=S.onChange;return console.log("==== InputSupplier ===="),console.log("value:",_),console.log("rootValue:",P),d(function(){K("\u4F9B\u5E94\u5546 A")},[]),i.createElement(E,{placeholder:"\u8BF7\u8F93\u5165".concat((b=C.title)!==null&&b!==void 0?b:""),value:_!=null?_:"",onChange:function(H){return K(H.target.value)}})}},InputBill:{component:function(S){var b,C=S.schema,_=S.value,P=S.rootValue,K=S.onChange;return console.log("==== InputBill ===="),console.log("value:",_),console.log("rootValue:",P),d(function(){setTimeout(function(){K("\u5355\u53F7 A")},10)},[]),i.createElement(E,{placeholder:"\u8BF7\u8F93\u5165".concat((b=C.title)!==null&&b!==void 0?b:""),value:_!=null?_:"",onChange:function(H){return K(H.target.value)}})}}},B={renderType:"Root",properties:{org:{title:"\u673A\u6784\u540D\u79F0",renderType:"InputOrg"},supplier:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputSupplier"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputBill"}}},y=function(){var S=l({}),b=T()(S,2),C=b[0],_=b[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{schema:B,itemLayout:n,renderers:f,value:C,onChange:function(K,N){console.log("***** updateBy ".concat(N.sPath," *****")),console.log("value:",K),console.log("e:",N),_(K)}}),i.createElement(m,{value:C}))},x.abrupt("return",{default:y});case 25:case"end":return x.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-core-react-952-multi-renderer-on-change-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.tsx"},context:{"./item-layout/Horizontal.tsx":$,"@examples/components/SyntaxHighlighter":g,"@schema-render/core-react":j,react:R||(R=e.t(i,2)),antd:A,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},23450:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return D}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(97857),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(53143),A=e(74072),$=e(24345),M=e(78469),D={"examples-core-react-953-disabled-component-demo-0":{component:g.memo(g.lazy(W()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=I.sent,o=m.useState,I.next=6,Promise.resolve().then(e.bind(e,74072));case 6:return a=I.sent,s=a.default,I.next=10,Promise.resolve().then(e.bind(e,78469));case 10:return n=I.sent,t=n.default,I.next=14,Promise.resolve().then(e.bind(e,24345));case 14:return l=I.sent,d=l.Button,u=l.Input,E={InputText:{component:function(O){var S,b=O.schema,C=O.value,_=O.disabled,P=O.readonly,K=O.onChange;return g.createElement(u,v()(v()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((S=b.title)!==null&&S!==void 0?S:"")},b.renderOptions),{},{value:C!=null?C:"",disabled:_,onChange:function(H){return K(H.target.value)}}))},readonlyComponent:function(O){var S=O.value;return g.createElement(g.Fragment,null,S)},disabledComponent:function(O){var S=O.value;return g.createElement(g.Fragment,null,"Disabled: ",S)}},TextArea:{component:function(O){var S,b=O.schema,C=O.value,_=O.disabled,P=O.onChange;return g.createElement(u.TextArea,v()(v()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((S=b.title)!==null&&S!==void 0?S:"")},b.renderOptions),{},{value:C!=null?C:"",onChange:function(N){return P(N.target.value)},disabled:_}))},readonlyComponent:function(O){var S=O.value;return g.createElement("div",null,S)}}},f={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText"},content:{title:"\u5185\u5BB9",renderType:"TextArea"}}},B=function(){var O=o(!1),S=T()(O,2),b=S[0],C=S[1],_=o(!1),P=T()(_,2),K=P[0],N=P[1],H=o({title:"SchemaRender \u662F\u4EC0\u4E48",content:"SchemaRender \u662F\u4E00\u5957\u66F4\u597D\u7528\u7684\u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848"}),U=T()(H,2),F=U[0],Z=U[1];return g.createElement("div",{style:{maxWidth:500}},g.createElement(s,{schema:f,itemLayout:t,renderers:E,value:F,onChange:Z,readonly:b,disabled:K}),g.createElement(d,{style:{margin:"20px 0 0 115px"},type:"primary",onClick:function(){return N(!K)}},K?"\u53D6\u6D88":"\u5207\u6362\u5230"," disabled \u72B6\u6001"),g.createElement(d,{style:{margin:"20px 0 0 115px"},onClick:function(){return C(!b)}},b?"\u53D6\u6D88":"\u5207\u6362\u5230"," readonly \u72B6\u6001"))},I.abrupt("return",{default:B});case 21:case"end":return I.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-core-react-953-disabled-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./item-layout/Horizontal.tsx":M,react:R||(R=e.t(g,2)),"@schema-render/core-react":A,antd:$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var h=W()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},17571:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return $}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(65063),g=e(41989),j=e(24345),A=e(35672),$={"examples-form-render-react-001-intro-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function M(){var D,h,m,o,a,s,n,t,l,d;return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return D=E.sent,h=D.default,E.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=E.sent,o=m.useState,E.next=10,Promise.resolve().then(e.bind(e,24345));case 10:return a=E.sent,s=a.message,E.next=14,Promise.resolve().then(e.bind(e,35672));case 14:return n=E.sent,t=n.default,l={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",description:"\u7528\u6237\u540D\u6700\u591A20\u4E2A\u5B57\u7B26",renderOptions:{maxLength:20},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]}}},d=function(){var B=o({}),y=T()(B,2),I=y[0],x=y[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(t,{schema:l,value:I,onChange:x,onSubmit:function(){s.success("\u63D0\u4EA4\u6210\u529F")}}),i.createElement(h,{value:I}))},E.abrupt("return",{default:d});case 19:case"end":return E.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":g,react:R||(R=e.t(i,2)),antd:j,"@schema-render/form-render-react":A},renderOpts:{compile:function(){var M=v()(p()().mark(function h(){var m,o=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}}}},8266:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(30761),g=e(41989),j=e(35672),A={"examples-form-render-react-100-item-layout-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function $(){var M,D,h,m,o,a,s,n;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=l.sent,D=M.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=l.sent,m=h.default,l.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return o=l.sent,a=o.default,s={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var u=D({}),E=T()(u,2),f=E[0],B=E[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{itemLayout:"vertical",schema:s,value:f,onChange:B}),i.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var $=v()(p()().mark(function D(){var h,m=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}},"examples-form-render-react-100-item-layout-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function $(){var M,D,h,m,o,a,s,n;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=l.sent,D=M.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=l.sent,m=h.default,l.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return o=l.sent,a=o.default,s={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var u=D({}),E=T()(u,2),f=E[0],B=E[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{itemLayout:"horizontal",schema:s,value:f,onChange:B}),i.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-100-item-layout-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var $=v()(p()().mark(function D(){var h,m=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}}}},86799:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return M}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(25937),g=e(41989),j=e(35672),A=e(29046),$=e(24345),M={"examples-form-render-react-200-label-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=u.sent,m=h.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return o=u.sent,a=o.default,u.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return s=u.sent,n=s.default,t={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=m({}),B=T()(f,2),y=B[0],I=B[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(n,{labelWidth:100,schema:t,value:y,onChange:I}),i.createElement(a,{value:y}))},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx",description:"number \u7C7B\u578B\u7528\u4E8E\u8BBE\u7F6E\u56FA\u5B9A\u6570\u503C",title:"number \u7C7B\u578B"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=u.sent,m=h.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return o=u.sent,a=o.default,u.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return s=u.sent,n=s.default,t={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=m({}),B=T()(f,2),y=B[0],I=B[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(n,{labelWidth:"max-content",schema:t,value:y,onChange:I}),i.createElement(a,{value:y}))},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx",description:"string \u7C7B\u578B\uFF0C\u901A\u5E38\u662F CSS \u5C5E\u6027\uFF0C\u5982 max-content",title:"string \u7C7B\u578B"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-2":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=u.sent,m=h.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return o=u.sent,a=o.default,u.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return s=u.sent,n=s.default,t={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},l=function(){var f=m({}),B=T()(f,2),y=B[0],I=B[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(n,{labelWidth:100,labelGap:0,labelColon:"\uFF1A",schema:t,value:y,onChange:I}),i.createElement(a,{value:y}))},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-form-render-react-200-label-demo-3":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=I.sent,m=h.useState,I.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return o=I.sent,a=o.default,I.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return s=I.sent,n=s.default,I.next=14,Promise.resolve().then(e.bind(e,29046));case 14:return t=I.sent,l=t.QuestionCircleOutlined,I.next=18,Promise.resolve().then(e.bind(e,24345));case 18:return d=I.sent,u=d.Popover,E={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(O){var S=O.schema,b=O.required,C=O.prefixClassNames;return i.createElement("div",null,S.title,!!S.titleDescription&&i.createElement(u,{placement:"top",trigger:"hover",content:S.titleDescription},i.createElement(l,{className:C("item-title-tooltip"),style:{marginLeft:4}})),!b&&" (\u53EF\u9009)")},B=function(){var O=m({}),S=T()(O,2),b=S[0],C=S[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(n,{labelWidth:100,labelRender:f,schema:E,value:b,onChange:C}),i.createElement(a,{value:b}))},I.abrupt("return",{default:B});case 24:case"end":return I.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-form-render-react-200-label-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},antd:{type:"NPM",value:"6.6.3"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j,"@ant-design/icons":A,antd:$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},41393:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return D}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(91260),g=e(24345),j=e(41989),A=e(38959),$=e(35672),M=e(29046),D={"examples-form-render-react-300-actions-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=x.sent,o=m.useState,a=m.useRef,x.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return s=x.sent,n=s.message,x.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return t=x.sent,l=t.default,x.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return d=x.sent,u=d.sleep,x.next=19,Promise.resolve().then(e.bind(e,35672));case 19:return E=x.sent,f=E.default,B={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var S=o({}),b=T()(S,2),C=b[0],_=b[1],P=a(null),K=function(){var N=v()(p()().mark(function H(){var U,F;return p()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,P.current.validate();case 2:if(U=Q.sent,F=U.hasError,!F){Q.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),Q.abrupt("return");case 7:return Q.next=9,u();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return Q.stop()}},H)}));return function(){return N.apply(this,arguments)}}();return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(f,{ref:P,schema:B,value:C,onChange:_,onSubmit:K}),i.createElement(l,{value:C}))},x.abrupt("return",{default:y});case 24:case"end":return x.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),antd:g,"@examples/components/SyntaxHighlighter":j,"@examples/utils":A,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E;return p()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=B.sent,o=m.useState,B.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return a=B.sent,s=a.message,B.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=B.sent,t=n.default,B.next=14,Promise.resolve().then(e.bind(e,35672));case 14:return l=B.sent,d=l.default,u={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},E=function(){var I=o({}),x=T()(I,2),O=x[0],S=x[1],b=function(){s.success("\u91CD\u7F6E\u5B8C\u6210")};return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(d,{schema:u,value:O,onChange:S,onReset:b}),i.createElement(t,{value:O}))},B.abrupt("return",{default:E});case 19:case"end":return B.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),antd:g,"@examples/components/SyntaxHighlighter":j,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-2":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=I.sent,o=m.useState,I.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return a=I.sent,s=a.message,I.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return n=I.sent,t=n.sleep,I.next=14,Promise.resolve().then(e.bind(e,41989));case 14:return l=I.sent,d=l.default,I.next=18,Promise.resolve().then(e.bind(e,35672));case 18:return u=I.sent,E=u.default,f={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},B=function(){var O=o({}),S=T()(O,2),b=S[0],C=S[1],_=function(){var P=v()(p()().mark(function K(){return p()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,t();case 2:s.success("\u91CD\u7F6E\u5B8C\u6210");case 3:case"end":return H.stop()}},K)}));return function(){return P.apply(this,arguments)}}();return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(E,{schema:f,value:b,onChange:C,onReset:_}),i.createElement(d,{value:b}))},I.abrupt("return",{default:B});case 23:case"end":return I.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),antd:g,"@examples/utils":A,"@examples/components/SyntaxHighlighter":j,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-3":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E;return p()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=B.sent,o=m.useState,B.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=B.sent,s=a.sleep,B.next=10,Promise.resolve().then(e.bind(e,41989));case 10:return n=B.sent,t=n.default,B.next=14,Promise.resolve().then(e.bind(e,35672));case 14:return l=B.sent,d=l.default,u={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},E=function(){var I=o({}),x=T()(I,2),O=x[0],S=x[1],b=function(){var C=v()(p()().mark(function _(){return p()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return K.abrupt("return",{account:"\u5F20\u4E09".concat(Date.now())});case 3:case"end":return K.stop()}},_)}));return function(){return C.apply(this,arguments)}}();return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(d,{schema:u,value:O,onChange:S,onBeforeReset:b,onReset:function(_){console.log("formData:",_)}}),i.createElement(t,{value:O}))},B.abrupt("return",{default:E});case 19:case"end":return B.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/utils":A,"@examples/components/SyntaxHighlighter":j,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-4":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d;return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=E.sent,o=m.useState,E.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=E.sent,s=a.default,E.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return n=E.sent,t=n.default,l={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},d=function(){var B=o({}),y=T()(B,2),I=y[0],x=y[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(t,{schema:l,value:I,onChange:x,actions:["reset","submit"]}),i.createElement(s,{value:I}))},E.abrupt("return",{default:d});case 15:case"end":return E.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx",description:"\u914D\u7F6E actions \u4E3A ['reset', 'submit'] \u8C03\u6362\u6309\u94AE\u4F4D\u7F6E",title:"\u914D\u7F6E\u987A\u5E8F"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":j,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-5":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=x.sent,o=m.useState,x.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return a=x.sent,s=a.message,n=a.Button,x.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return t=x.sent,l=t.sleep,x.next=15,Promise.resolve().then(e.bind(e,41989));case 15:return d=x.sent,u=d.default,x.next=19,Promise.resolve().then(e.bind(e,35672));case 19:return E=x.sent,f=E.default,B={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},y=function(){var S=o({}),b=T()(S,2),C=b[0],_=b[1],P=function(){var N=v()(p()().mark(function H(){return p()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,l();case 2:s.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return F.stop()}},H)}));return function(){return N.apply(this,arguments)}}(),K=function(){s.success("\u5BFC\u51FA\u6210\u529F")};return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(f,{schema:B,value:C,onChange:_,onSubmit:P,actions:["submit","reset","export"],registerActions:{export:function(H){var U=H.loading;return i.createElement(n,{type:"primary",disabled:U.submit||U.reset,onClick:K},"\u5BFC\u51FA")}}}),i.createElement(u,{value:C}))},x.abrupt("return",{default:y});case 24:case"end":return x.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),antd:g,"@examples/utils":A,"@examples/components/SyntaxHighlighter":j,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-form-render-react-300-actions-demo-6":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C;return p()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=P.sent,o=m.useState,a=m.useRef,P.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return s=P.sent,n=s.message,t=s.Button,l=s.Popconfirm,P.next=13,Promise.resolve().then(e.bind(e,29046));case 13:return d=P.sent,u=d.DeleteOutlined,E=d.UploadOutlined,P.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return f=P.sent,B=f.sleep,P.next=22,Promise.resolve().then(e.bind(e,41989));case 22:return y=P.sent,I=y.default,P.next=26,Promise.resolve().then(e.bind(e,35672));case 26:return x=P.sent,O=x.default,S={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},b={submit:function(N){var H=N.handleSubmit,U=N.loading;return i.createElement(l,{title:"\u6E29\u99A8\u63D0\u793A",description:"\u786E\u5B9A\u8981\u63D0\u4EA4\u5417\uFF1F",onConfirm:H},i.createElement(t,{loading:U.submit,type:"primary",icon:i.createElement(E,null)},"\u63D0\u4EA4"))},reset:function(N){var H=N.handleReset,U=N.loading;return i.createElement(t,{loading:U.reset,onClick:H,icon:i.createElement(u,null)},"\u91CD\u7F6E")}},C=function(){var N=o({}),H=T()(N,2),U=H[0],F=H[1],Z=a(null),Q=function(){var J=v()(p()().mark(function ne(){var ee,se;return p()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:return me.next=2,Z.current.validate();case 2:if(ee=me.sent,se=ee.hasError,!se){me.next=7;break}return n.error("\u8868\u5355\u5B58\u5728\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u540E\u518D\u63D0\u4EA4"),me.abrupt("return");case 7:return me.next=9,B();case 9:n.success("\u6CE8\u518C\u6210\u529F");case 10:case"end":return me.stop()}},ne)}));return function(){return J.apply(this,arguments)}}();return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(O,{ref:Z,schema:S,value:U,onChange:F,onSubmit:Q,registerActions:b}),i.createElement(I,{value:U}))},P.abrupt("return",{default:C});case 32:case"end":return P.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-300-actions-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),antd:g,"@ant-design/icons":M,"@examples/utils":A,"@examples/components/SyntaxHighlighter":j,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},39820:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return D}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(90261),g=e(24345),j=e(41989),A=e(35672),$=e(92419),M=e(97609),D={"examples-form-render-react-500-builtin-renderers-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=x.sent,o=m.useState,a=m.useMemo,x.next=7,Promise.resolve().then(e.bind(e,24345));case 7:return s=x.sent,n=s.Button,x.next=11,Promise.resolve().then(e.bind(e,41989));case 11:return t=x.sent,l=t.default,x.next=15,Promise.resolve().then(e.bind(e,35672));case 15:return d=x.sent,u=d.default,x.next=19,Promise.resolve().then(e.bind(e,97609));case 19:return E=x.sent,x.next=22,Promise.resolve().then(e.bind(e,92419));case 22:return f=x.sent,B=f.default,y=function(){var S=o(!1),b=T()(S,2),C=b[0],_=b[1],P=o(!1),K=T()(P,2),N=K[0],H=K[1],U=o({Description:"\u7EAF\u5C55\u793A\u7684\u5185\u5BB9\u5427\u5566\u5427\u5566"}),F=T()(U,2),Z=F[0],Q=F[1],J=a(function(){return{disable:function(){return i.createElement(n,{type:"dashed",onClick:function(){return _(!C)}},C?"\u53D6\u6D88":"\u8BBE\u4E3A"," disabled \u72B6\u6001")},readonly:function(){return i.createElement(n,{type:"dashed",onClick:function(){return H(!N)}},N?"\u53D6\u6D88":"\u8BBE\u4E3A"," readonly \u72B6\u6001")}}},[N,C]);return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(u,{rootClassName:E.builtinRenderers,labelWidth:230,schema:B,value:Z,onChange:Q,actions:["submit","reset","disable","readonly"],registerActions:J,disabled:C,readonly:N,readonlyPlaceholder:i.createElement("span",{style:{color:"#666",fontSize:14}},"-")}),i.createElement(l,{value:Z}))},x.abrupt("return",{default:y});case 26:case"end":return x.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-500-builtin-renderers-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},"./schemas/all.tsx":{type:"FILE",value:e(78597).Z},"./styles.ts":{type:"FILE",value:e(24127).Z}},entry:"index.tsx"},context:{"./schemas/all.tsx":$,"./styles.ts":M,react:R||(R=e.t(i,2)),antd:g,"@examples/components/SyntaxHighlighter":j,"@schema-render/form-render-react":A,"/home/runner/work/schema-render/schema-render/examples/form-render-react/schemas/all.tsx":$,"/home/runner/work/schema-render/schema-render/examples/form-render-react/styles/index.ts":M},renderOpts:{compile:function(){var h=v()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},28680:function(V,c,e){e.r(c),e.d(c,{demos:function(){return W}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(4123),v=e(35672),i=e(35804),W={"examples-form-render-react-700-locale-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function g(){var j,A,$,M,D,h;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,35672));case 2:return j=o.sent,A=j.default,o.next=6,Promise.resolve().then(e.bind(e,35804));case 6:return $=o.sent,M=$.default,D={renderType:"Root",properties:{username:{title:"username",renderType:"InputText",required:!0},password:{title:"password",renderType:"Password",required:!0}}},h=function(){return T.createElement(A,{rootStyle:{maxWidth:500},schema:D,locale:M})},o.abrupt("return",{default:h});case 11:case"end":return o.stop()}},g)})))),asset:{type:"BLOCK",id:"examples-form-render-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{"@schema-render/form-render-react":v,"@schema-render/form-render-react/src/locale/en_US":i},renderOpts:{compile:function(){var g=L()(r()().mark(function A(){var $,M=arguments;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,M));case 3:case"end":return h.stop()}},A)}));function j(){return g.apply(this,arguments)}return j}()}}}},47023:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(74624),p={}},48167:function(V,c,e){e.r(c),e.d(c,{demos:function(){return W}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(83140),v=e(35672),i=e(37418),W={"examples-form-render-react-850-position-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function g(){var j,A,$,M,D,h,m;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,35672));case 2:return j=a.sent,A=j.default,a.next=6,Promise.resolve().then(e.bind(e,37418));case 6:return $=a.sent,M=$.default,D={renderType:"Root",properties:{settlement_mode:{title:"\u7ED3\u7B97\u5468\u671F\u540D\u79F0",renderType:"InputText",description:"\u652F\u6301\u4E2D\u6587\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF(_)\uFF0C\u4E0D\u80FD\u5305\u542B\u7A7A\u683C",span:16},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",span:8,spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText",span:8},bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",span:8,spanStart:1},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect",span:8},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect",span:8},cooperation:{title:"\u5408\u4F5C\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u8D2D\u9500",value:1},{label:"\u4EE3\u9500",value:2}]}},payment:{title:"\u4ED8\u6B3E\u65B9\u5F0F",renderType:"Radio",renderOptions:{options:[{label:"\u7EBF\u4E0A\u652F\u4ED8",value:1},{label:"\u7EBF\u4E0B\u652F\u4ED8",value:2}]}}}},h=function(n,t){n.bank_id=t.extra.bank_id,n.bank_account=t.extra.bank_account,n.bank_name=t.extra.bank_name,n.bank_branch_name=t.extra.bank_branch_name},m=function(){return T.createElement(A,{schema:D,renderers:M,watch:{bank_account:h,bank_name:h,bank_branch_name:h}})},a.abrupt("return",{default:m});case 12:case"end":return a.stop()}},g)})))),asset:{type:"BLOCK",id:"examples-form-render-react-850-position-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},"./renderers.tsx":{type:"FILE",value:e(540).Z}},entry:"index.tsx"},context:{"./renderers.tsx":i,"@schema-render/form-render-react":v,"/home/runner/work/schema-render/schema-render/examples/form-render-react/renderers/index.tsx":i},renderOpts:{compile:function(){var g=L()(r()().mark(function A(){var $,M=arguments;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,M));case 3:case"end":return h.stop()}},A)}));function j(){return g.apply(this,arguments)}return j}()}}}},68170:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return h}});var r=e(9783),p=e.n(r),L=e(97857),T=e.n(L),z=e(15009),v=e.n(z),i=e(5574),W=e.n(i),g=e(99289),j=e.n(g),A=e(67294),$=e(34877),M=e(35672),D=e(24345),h={"examples-form-render-react-851-steps-demo-0":{component:A.memo(A.lazy(j()(v()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=I.sent,a=o.useState,s=o.useMemo,n=o.useRef,I.next=8,Promise.resolve().then(e.bind(e,35672));case 8:return t=I.sent,l=t.default,I.next=12,Promise.resolve().then(e.bind(e,24345));case 12:return d=I.sent,u=d.Steps,E=d.Button,f={renderType:"Root",properties:{step1:{title:"\u6B65\u9AA4\u4E00",renderType:"ObjectNull",hidden:"$userCtx.step !== 0",properties:{title:{title:"\u6B65\u9AA4\u4E00\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E00\u5185\u5BB9",renderType:"InputText",required:!0}}},step2:{title:"\u6B65\u9AA4\u4E8C",renderType:"ObjectNull",hidden:"$userCtx.step !== 1",properties:{title:{title:"\u6B65\u9AA4\u4E8C\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E8C\u5185\u5BB9",renderType:"InputText",required:!0}}},step3:{title:"\u6B65\u9AA4\u4E09",renderType:"ObjectNull",hidden:"$userCtx.step !== 2",properties:{title:{title:"\u6B65\u9AA4\u4E09\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u6B65\u9AA4\u4E09\u5185\u5BB9",renderType:"InputText",required:!0}}}}},B=function(){var O=a(0),S=W()(O,2),b=S[0],C=S[1],_=a({}),P=W()(_,2),K=P[0],N=P[1],H=n(null),U=function(){C(function(ee){return ee-1})},F=function(){var ne=j()(v()().mark(function ee(){var se,Ie,me,ie;return v()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,(se=H.current)===null||se===void 0?void 0:se.validate();case 2:if(Ie=pe.sent,!(Ie!=null&&Ie.hasError||Ie!=null&&Ie.hasWarning)){pe.next=8;break}if(me="step".concat(b+1),ie=Ie.errorList.some(function(xe){return xe.path[0]===me}),!ie){pe.next=8;break}return pe.abrupt("return");case 8:C(b+1);case 9:case"end":return pe.stop()}},ee)}));return function(){return ne.apply(this,arguments)}}(),Z=function(){var ee;N(T()(T()({},K),{},p()({},"step".concat(b+1),{}))),(ee=H.current)===null||ee===void 0||ee.resetError()},Q=s(function(){return{prev:function(){return A.createElement(E,{onClick:U},"\u4E0A\u4E00\u6B65")},next:function(){return A.createElement(E,{type:"primary",onClick:F},"\u4E0B\u4E00\u6B65")},reset:function(){return A.createElement(E,{onClick:Z},"\u91CD\u7F6E")}}},[]),J=function(){var ne=j()(v()().mark(function ee(){var se,Ie;return v()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,(se=H.current)===null||se===void 0?void 0:se.validate();case 2:if(Ie=ie.sent,!(Ie!=null&&Ie.hasError||Ie!=null&&Ie.hasWarning)){ie.next=5;break}return ie.abrupt("return");case 5:case"end":return ie.stop()}},ee)}));return function(){return ne.apply(this,arguments)}}();return A.createElement("div",{style:{maxWidth:800}},A.createElement(u,{size:"small",current:b,onChange:C,items:[{title:"\u6B65\u9AA4\u4E00",disabled:!0},{title:"\u6B65\u9AA4\u4E8C",disabled:!0},{title:"\u6B65\u9AA4\u4E09",disabled:!0}],style:{marginBottom:20}}),A.createElement(l,{ref:H,schema:f,value:K,onChange:N,userCtx:{step:b},actions:b===0?["next","reset"]:b===2?["submit","prev","reset"]:["next","prev","reset"],registerActions:Q,onSubmit:J}))},I.abrupt("return",{default:B});case 18:case"end":return I.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-form-render-react-851-steps-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useMemo, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"}},entry:"index.tsx"},context:{react:R||(R=e.t(A,2)),"@schema-render/form-render-react":M,antd:D},renderOpts:{compile:function(){var m=j()(v()().mark(function a(){var s,n=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},62127:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return D}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(97857),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(45011),A=e(41989),$=e(35672),M=e(24345),D={"examples-form-render-react-852-audit-renderer-demo-0":{component:g.memo(g.lazy(W()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y,I;return p()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=O.sent,o=m.useState,O.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=O.sent,s=a.default,O.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return n=O.sent,t=n.default,O.next=14,Promise.resolve().then(e.bind(e,24345));case 14:return l=O.sent,d=l.Input,u=l.Radio,E=[{label:"\u5BA1\u6838\u901A\u8FC7",value:1},{label:"\u5BA1\u6838\u5931\u8D25",value:2}],f=function(b){var C,_=b.disabled,P=b.value,K=b.onChange,N=b.validator,H=function(Z){K(v()(v()({},P),Z),{triggerValidator:!Z.hasOwnProperty("type")})},U=(P==null?void 0:P.type)===2;return g.createElement("div",null,g.createElement(u.Group,{options:E,value:(C=P==null?void 0:P.type)!==null&&C!==void 0?C:null,onChange:function(Z){return H({type:Z.target.value})},disabled:_}),g.createElement("div",{style:{marginTop:U?5:0}},U&&g.createElement(d.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0",autoFocus:!0,showCount:!0,maxLength:200,status:N.status,disabled:_,value:P.failReason,onChange:function(Z){return H({failReason:Z.target.value})}})))},B={Audit:{component:f,validator:function(b){var C=b.value;if((C==null?void 0:C.type)===2&&!C.failReason)return{status:"error",message:"\u8BF7\u8F93\u5165\u5931\u8D25\u539F\u56E0"}}}},y={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",required:!0},content:{title:"\u5185\u5BB9",renderType:"TextArea",required:!0},audit:{title:"\u5BA1\u6838\u7ED3\u679C",renderType:"Audit",required:!0}}},I=function(){var b=o({}),C=T()(b,2),_=C[0],P=C[1];return g.createElement("div",{className:"example-layout-cols-2"},g.createElement(t,{schema:y,value:_,onChange:P,renderers:B}),g.createElement(s,{value:_}))},O.abrupt("return",{default:I});case 23:case"end":return O.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-852-audit-renderer-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"}},entry:"index.tsx"},context:{react:R||(R=e.t(g,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$,antd:M},renderOpts:{compile:function(){var h=W()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},42087:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(6168),g=e(41989),j=e(35672),A={"examples-form-render-react-853-validate-on-blur-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function $(){var M,D,h,m,o,a,s,n;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=l.sent,D=M.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=l.sent,m=h.default,l.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return o=l.sent,a=o.default,s={renderType:"Root",properties:{title:{title:"\u6807\u9898",renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},amount:{title:"\u603B\u989D",renderType:"InputNumber",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:50,message:"\u603B\u989D\u4E0D\u80FD\u5C11 50"}]},content:{title:"\u5185\u5BB9",renderType:"TextArea",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]},password:{title:"\u5BC6\u7801\u6846",renderType:"Password",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}},n=function(){var u=D({}),E=T()(u,2),f=E[0],B=E[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{schema:s,value:f,onChange:B}),i.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-853-validate-on-blur-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var $=v()(p()().mark(function D(){var h,m=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}}}},19658:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(6882),g=e(41989),j=e(35672),A={"examples-form-render-react-854-scroll-to-first-error-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function $(){var M,D,h,m,o,a,s,n,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return n=function(){for(var f={renderType:"Root",properties:{}},B=1;B<=30;B++){var y="field_".concat(B);f.properties[y]={title:"\u6807\u9898_".concat(B),renderType:"InputText",renderOptions:{validateOnBlur:!0},required:!0,rules:[{min:5,message:"\u81F3\u5C11\u9700\u8981\u8F93\u5165 5 \u4E2A\u5B57\u7B26"}]}}return f},u.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return M=u.sent,D=M.useState,h=M.useRef,u.next=8,Promise.resolve().then(e.bind(e,41989));case 8:return m=u.sent,o=m.default,u.next=12,Promise.resolve().then(e.bind(e,35672));case 12:return a=u.sent,s=a.default,t=n(),l=function(){var f=D({}),B=T()(f,2),y=B[0],I=B[1],x=h(null),O=function(){var S=v()(p()().mark(function b(){var C,_,P;return p()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,(C=x.current)===null||C===void 0?void 0:C.validate();case 2:_=N.sent,_!=null&&_.hasError&&((P=x.current)===null||P===void 0||P.scrollTo(_.errorList[0].path,{gap:-76,positionedElement:window}));case 4:case"end":return N.stop()}},b)}));return function(){return S.apply(this,arguments)}}();return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(s,{ref:x,schema:t,value:y,onChange:I,onSubmit:O,validateFormOnSubmit:!1}),i.createElement(o,{value:y}))},u.abrupt("return",{default:l});case 17:case"end":return u.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-854-scroll-to-first-error-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var $=v()(p()().mark(function D(){var h,m=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}}}},55850:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return D}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(97857),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(88358),A=e(41989),$=e(35672),M=e(24345),D={"examples-form-render-react-880-relation-checkbox-demo-0":{component:g.memo(g.lazy(W()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=I.sent,o=m.useState,a=m.useRef,I.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return s=I.sent,n=s.default,I.next=11,Promise.resolve().then(e.bind(e,35672));case 11:return t=I.sent,l=t.default,I.next=15,Promise.resolve().then(e.bind(e,24345));case 15:return d=I.sent,u=d.Select,E={component:function(O){var S,b=O.schema,C=O.value,_=O.disabled,P=O.validator,K=O.onChange,N=O.userCtx,H=N.cityList||((S=b.renderOptions)===null||S===void 0?void 0:S.options);return g.createElement(u,v()(v()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat(b.title)},b.renderOptions),{},{options:H,status:P.status,mode:void 0,value:C,onChange:function(F){return K(F)},disabled:_}))}},f={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"AvailableCities"}}},B=function(){var O=o({}),S=T()(O,2),b=S[0],C=S[1],_=a({});return g.createElement("div",{className:"example-layout-cols-2"},g.createElement(l,{labelWidth:180,actions:[],schema:f,value:b,onChange:C,renderers:{AvailableCities:E},watch:{cities:function(K,N){_.current.cityList=N.extra.checkedOptions,N.value.includes(K.available_cities)||(K.available_cities=void 0)}},userCtx:_.current}),g.createElement(n,{value:b}))},I.abrupt("return",{default:B});case 21:case"end":return I.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState, useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"}},entry:"index.jsx"},context:{react:R||(R=e.t(g,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$,antd:M},renderOpts:{compile:function(){var h=W()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-form-render-react-880-relation-checkbox-demo-1":{component:g.memo(g.lazy(W()(p()().mark(function h(){var m,o,a,s,n,t,l,d;return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=E.sent,o=m.useState,E.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return a=E.sent,s=a.default,E.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return n=E.sent,t=n.default,l={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"Checkbox",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Select",renderOptions:{}}}},d=function(){var B=o({}),y=T()(B,2),I=y[0],x=y[1];return g.createElement("div",{className:"example-layout-cols-2"},g.createElement(t,{labelWidth:180,actions:[],schema:l,value:I,onChange:x,watch:{cities:function(S,b){l.properties.available_cities.renderOptions.options=b.extra.checkedOptions,b.value.includes(S.available_cities)||(S.available_cities=void 0)}}}),g.createElement(s,{value:I}))},E.abrupt("return",{default:d});case 15:case"end":return E.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-form-render-react-880-relation-checkbox-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.jsx"},context:{react:R||(R=e.t(g,2)),"@examples/components/SyntaxHighlighter":A,"@schema-render/form-render-react":$},renderOpts:{compile:function(){var h=W()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},54811:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(73888),g=e(41989),j=e(35672),A={"examples-form-render-react-881-relation-select-multiple-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function $(){var M,D,h,m,o,a,s,n;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return s=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],E={renderType:"Root",properties:{cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02\u8303\u56F4",renderType:"SelectMultiple",renderOptions:{options:[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing"}]}},available_cities:{title:"\u8BBE\u7F6E\u53EF\u9009\u57CE\u5E02",renderType:"Checkbox",renderOptions:{options:u}}}};return E},l.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return M=l.sent,D=M.useState,l.next=7,Promise.resolve().then(e.bind(e,41989));case 7:return h=l.sent,m=h.default,l.next=11,Promise.resolve().then(e.bind(e,35672));case 11:return o=l.sent,a=o.default,n=function(){var u=D({}),E=T()(u,2),f=E[0],B=E[1],y=D(function(){return s()}),I=T()(y,2),x=I[0],O=I[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{labelWidth:180,actions:[],schema:x,value:f,onChange:B,watch:{cities:function(b,C){O(s(C.extra.selectedOptions)),C.value.includes(b.available_cities)||(b.available_cities=void 0)}}}),i.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-881-relation-select-multiple-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.jsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var $=v()(p()().mark(function D(){var h,m=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}}}},37531:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return $}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(19632),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(73914),A=e(35672),$={"examples-form-render-react-890-benchmark-demo-0":{component:g.memo(g.lazy(W()(p()().mark(function M(){var D,h,m,o,a,s,n,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,35672));case 2:return D=u.sent,h=D.default,u.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=u.sent,o=m.useState,a=100,s={renderType:"Root",properties:{}},n=v()(Array(a).keys()),n.forEach(function(E){var f="field_".concat(E);s.properties[f]={title:f,renderType:"InputText",required:!0}}),t=["200px","1fr"],l=function(){var f=o({}),B=T()(f,2),y=B[0],I=B[1],x=function(S,b){var C=parseInt(b.sPath.slice(6)),_=C-1,P=C+1,K="field_".concat(P>=a?_:P);S[K]=b.value,I(S)};return g.createElement(h,{layout:"autoFill",layoutMinMax:t,itemLayout:"vertical",schema:s,value:y,onChange:x})},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":A,react:R||(R=e.t(g,2))},renderOpts:{compile:function(){var M=W()(p()().mark(function h(){var m,o=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}},"examples-form-render-react-890-benchmark-demo-1":{component:g.memo(g.lazy(W()(p()().mark(function M(){var D,h,m,o,a,s,n,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,35672));case 2:return D=u.sent,h=D.default,u.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return m=u.sent,o=m.useState,a=300,s={renderType:"Root",properties:{}},n=v()(Array(a).keys()),n.forEach(function(E){var f="field_".concat(E);s.properties[f]={title:f,renderType:"InputText",required:!0}}),t=["200px","1fr"],l=function(){var f=o({}),B=T()(f,2),y=B[0],I=B[1],x=function(S,b){var C=parseInt(b.sPath.slice(6)),_=C-1,P=C+1,K="field_".concat(P>=a?_:P);S[K]=b.value,I(S)};return g.createElement(h,{layout:"autoFill",layoutMinMax:t,itemLayout:"vertical",schema:s,value:y,onChange:x})},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-form-render-react-890-benchmark-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import FormRender from '@schema-render/form-render-react'
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

export default Demo`},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"@schema-render/form-render-react":A,react:R||(R=e.t(g,2))},renderOpts:{compile:function(){var M=W()(p()().mark(function h(){var m,o=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}}}},53775:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return A}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(64768),g=e(41989),j=e(35672),A={"examples-form-render-react-900-renderers-warning-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function $(){var M,D,h,m,o,a,s,n;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return M=l.sent,D=M.useState,l.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return h=l.sent,m=h.default,l.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return o=l.sent,a=o.default,s={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0}}},n=function(){var u=D({}),E=T()(u,2),f=E[0],B=E[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(a,{schema:s,value:f,onChange:B}),i.createElement(m,{value:f}))},l.abrupt("return",{default:n});case 15:case"end":return l.stop()}},$)})))),asset:{type:"BLOCK",id:"examples-form-render-react-900-renderers-warning-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var $=v()(p()().mark(function D(){var h,m=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(h=a.sent).default.apply(h,m));case 3:case"end":return a.stop()}},D)}));function M(){return $.apply(this,arguments)}return M}()}}}},88642:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return M}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(87004),g=e(41989),j=e(35672),A=e(29046),$=e(24345),M={"examples-form-render-react-901-label-vertical-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=u.sent,m=h.useState,u.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return o=u.sent,a=o.default,u.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return s=u.sent,n=s.default,t={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},l=function(){var f=m({}),B=T()(f,2),y=B[0],I=B[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(n,{itemLayout:"vertical",labelColon:"\uFF1A",schema:t,value:y,onChange:I}),i.createElement(a,{value:y}))},u.abrupt("return",{default:l});case 15:case"end":return u.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-form-render-react-901-label-vertical-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=I.sent,m=h.useState,I.next=6,Promise.resolve().then(e.bind(e,41989));case 6:return o=I.sent,a=o.default,I.next=10,Promise.resolve().then(e.bind(e,35672));case 10:return s=I.sent,n=s.default,I.next=14,Promise.resolve().then(e.bind(e,29046));case 14:return t=I.sent,l=t.QuestionCircleOutlined,I.next=18,Promise.resolve().then(e.bind(e,24345));case 18:return d=I.sent,u=d.Popover,E={renderType:"Root",properties:{account:{title:"\u7528\u6237\u540D",renderType:"InputText",required:!0},password:{title:"\u5BC6\u7801",renderType:"Password",required:!0},gender:{title:"\u6027\u522B",renderType:"Radio",renderOptions:{options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}]}}}},f=function(O){var S=O.schema,b=O.required,C=O.prefixClassNames;return i.createElement("div",null,S.title,!!S.titleDescription&&i.createElement(u,{placement:"top",trigger:"hover",content:S.titleDescription},i.createElement(l,{className:C("item-title-tooltip"),style:{marginLeft:4}})),!b&&" (\u53EF\u9009)")},B=function(){var O=m({}),S=T()(O,2),b=S[0],C=S[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(n,{itemLayout:"vertical",labelWidth:150,labelRender:f,schema:E,value:b,onChange:C}),i.createElement(a,{value:b}))},I.abrupt("return",{default:B});case 24:case"end":return I.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-form-render-react-901-label-vertical-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"},"@ant-design/icons":{type:"NPM",value:"6.3.4"},antd:{type:"NPM",value:"6.6.3"}},entry:"index.tsx"},context:{react:R||(R=e.t(i,2)),"@examples/components/SyntaxHighlighter":g,"@schema-render/form-render-react":j,"@ant-design/icons":A,antd:$},renderOpts:{compile:function(){var D=v()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},94270:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return t}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(43895),g=e(41989),j=e(24345),A=e(74072),$=e(2862),M=e(78469),D=e(35672),h=e(38959),m=e(36116),o=e(25520),a=e(68666),s=e(92114),n=e(362),t={"examples-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function l(){var d,u,E,f,B,y,I,x,O,S,b,C,_,P,K,N;return p()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return d=U.sent,u=d.default,U.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return E=U.sent,f=E.useState,B=E.useRef,U.next=11,Promise.resolve().then(e.bind(e,24345));case 11:return y=U.sent,I=y.Button,x=y.message,U.next=16,Promise.resolve().then(e.bind(e,74072));case 16:return O=U.sent,S=O.default,U.next=20,Promise.resolve().then(e.bind(e,78469));case 20:return b=U.sent,C=b.default,U.next=24,Promise.resolve().then(e.bind(e,2862));case 24:return _=U.sent,P=_.default,K={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},N=function(){var Z=f({}),Q=T()(Z,2),J=Q[0],ne=Q[1],ee=B(),se=function(){var Ie=v()(p()().mark(function me(){var ie;return p()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,ee.current.validate();case 2:ie=pe.sent,ie.hasError||x.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return pe.stop()}},me)}));return function(){return Ie.apply(this,arguments)}}();return i.createElement("div",{className:"example-layout-cols-2"},i.createElement("div",null,i.createElement(S,{ref:ee,schema:K,value:J,onChange:ne,itemLayout:C,renderers:P}),i.createElement(I,{type:"primary",style:{margin:"20px 0 0 115px"},onClick:se},"\u63D0\u4EA4")),i.createElement(u,{value:J}))},U.abrupt("return",{default:N});case 29:case"end":return U.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/core-react":{type:"NPM",value:"2.5.0"},"./core-react/renderers/common.tsx":{type:"FILE",value:e(19970).Z},"./core-react/item-layout/Horizontal.tsx":{type:"FILE",value:e(36005).Z}},entry:"index.jsx"},context:{"./core-react/renderers/common.tsx":$,"./core-react/item-layout/Horizontal.tsx":M,"@examples/components/SyntaxHighlighter":g,react:R||(R=e.t(i,2)),antd:j,"@schema-render/core-react":A,"/home/runner/work/schema-render/schema-render/examples/core-react/renderers/common.tsx":$,"/home/runner/work/schema-render/schema-render/examples/core-react/item-layout/Horizontal/index.tsx":M},renderOpts:{compile:function(){var l=v()(p()().mark(function u(){var E,f=arguments;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(E=y.sent).default.apply(E,f));case 3:case"end":return y.stop()}},u)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function l(){var d,u,E,f,B,y,I,x,O,S;return p()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return d=C.sent,u=d.default,C.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return E=C.sent,f=E.useState,C.next=10,Promise.resolve().then(e.bind(e,24345));case 10:return B=C.sent,y=B.message,C.next=14,Promise.resolve().then(e.bind(e,35672));case 14:return I=C.sent,x=I.default,O={renderType:"Root",properties:{username:{title:"\u7528\u6237\u540D",renderType:"InputText",renderOptions:{maxLength:20,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u6700\u591A20\u4E2A\u5B57\u7B26"},required:!0},password:{title:"\u5BC6\u7801",description:"\u8BF7\u8F93\u51656~10\u4E2A\u5B57\u7B26\uFF0C\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57",renderType:"Password",renderOptions:{minLength:6,maxLength:20},required:!0,rules:[{min:6,message:"\u8BF7\u8F93\u5165\u81F3\u5C11 6 \u4E2A\u5B57\u7B26"},{max:20,message:"\u6700\u591A\u53EA\u80FD 20 \u4E2A\u5B57\u7B26"},{pattern:"^[A-Za-z0-9]+$",message:"\u53EA\u80FD\u8F93\u5165\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"}]},auto_login:{title:"\u81EA\u52A8\u767B\u5F55",titleDescription:"\u5F00\u542F\u540E\u4E24\u5468\u5185\u81EA\u52A8\u518D\u6B21\u767B\u5F55",renderType:"Switch"}}},S=function(){var P=f({}),K=T()(P,2),N=K[0],H=K[1];return i.createElement("div",{className:"example-layout-cols-2"},i.createElement(x,{schema:O,value:N,onChange:H,onSubmit:function(){return y.success("\u63D0\u4EA4\u6210\u529F")}}),i.createElement(u,{value:N}))},C.abrupt("return",{default:S});case 19:case"end":return C.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/form-render-react":{type:"NPM",value:"2.5.0"}},entry:"index.jsx"},context:{"@examples/components/SyntaxHighlighter":g,react:R||(R=e.t(i,2)),antd:j,"@schema-render/form-render-react":D},renderOpts:{compile:function(){var l=v()(p()().mark(function u(){var E,f=arguments;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(E=y.sent).default.apply(E,f));case 3:case"end":return y.stop()}},u)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-2":{component:i.memo(i.lazy(v()(p()().mark(function l(){var d,u,E,f,B,y;return p()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=x.sent,u=d.sleep,x.next=6,Promise.resolve().then(e.bind(e,36116));case 6:return E=x.sent,f=E.default,B={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},y=function(){var S=function(){var b=v()(p()().mark(function C(_){return p()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log("searchParams:",_),K.next=3,u();case 3:case"end":return K.stop()}},C)}));return function(_){return b.apply(this,arguments)}}();return i.createElement(f,{schema:B,onSubmit:S,onReset:S})},x.abrupt("return",{default:y});case 11:case"end":return x.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'

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

export default Demo`},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"2.5.0"}},entry:"index.jsx"},context:{"@examples/utils":h,"@schema-render/search-react":m},renderOpts:{compile:function(){var l=v()(p()().mark(function u(){var E,f=arguments;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(E=y.sent).default.apply(E,f));case 3:case"end":return y.stop()}},u)}));function d(){return l.apply(this,arguments)}return d}()}},"examples-demo-3":{component:i.memo(i.lazy(v()(p()().mark(function l(){var d,u,E,f,B,y,I,x,O,S,b;return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return d=_.sent,u=d.sleep,_.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return E=_.sent,f=E.default,_.next=10,Promise.resolve().then(e.bind(e,362));case 10:return B=_.sent,y=B.default,_.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return I=_.sent,x=I.default,_.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return O=_.sent,S=O.default,b=function(){return i.createElement(S,{search:{schema:f},table:{columns:y,showRowNumber:!0},request:function(){var K=v()(p()().mark(function H(U){var F;return p()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return console.log("searchParams:",U),Q.next=3,u();case 3:return F=x(),Q.abrupt("return",{data:F,total:100});case 5:case"end":return Q.stop()}},H)}));function N(H){return K.apply(this,arguments)}return N}()})},_.abrupt("return",{default:b});case 22:case"end":return _.stop()}},l)})))),asset:{type:"BLOCK",id:"examples-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./search-table-react/helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./search-table-react/helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./search-table-react/helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./search-table-react/helpers/schema.ts":a,"./search-table-react/helpers/createDataSource.ts":s,"./search-table-react/helpers/columns.ts":n,"@examples/utils":h,"@schema-render/search-table-react":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":s,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":n},renderOpts:{compile:function(){var l=v()(p()().mark(function u(){var E,f=arguments;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(4019).then(e.bind(e,4019));case 2:return y.abrupt("return",(E=y.sent).default.apply(E,f));case 3:case"end":return y.stop()}},u)}));function d(){return l.apply(this,arguments)}return d}()}}}},11124:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return h}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(67342),g=e(24345),j=e(38959),A=e(67247),$=e(36116),M=e(77095),D=e(36641),h={"examples-search-react-001-intro-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b;return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=_.sent,a=o.useState,_.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return s=_.sent,n=s.ConfigProvider,t=s.Table,_.next=11,Promise.resolve().then(e.bind(e,38959));case 11:return l=_.sent,d=l.sleep,_.next=15,Promise.resolve().then(e.bind(e,67247));case 15:return u=_.sent,E=u.default,_.next=19,Promise.resolve().then(e.bind(e,36641));case 19:return f=_.sent,B=f.default,_.next=23,Promise.resolve().then(e.bind(e,77095));case 23:return y=_.sent,I=y.default,_.next=27,Promise.resolve().then(e.bind(e,36116));case 27:return x=_.sent,O=x.default,S={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},b=function(){var K=a(function(){return I()}),N=T()(K,2),H=N[0],U=N[1],F=function(){var Z=v()(p()().mark(function Q(J){return p()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return console.log("searchParams:",J),ee.next=3,d();case 3:U(I());case 4:case"end":return ee.stop()}},Q)}));return function(J){return Z.apply(this,arguments)}}();return i.createElement(n,{locale:E},i.createElement(O,{schema:S,onSubmit:F,onReset:F}),i.createElement(t,{style:{marginTop:20},columns:B,dataSource:H,scroll:{x:1500}}))},_.abrupt("return",{default:b});case 32:case"end":return _.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(77538).Z},"./helpers/columns.ts":{type:"FILE",value:e(96390).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/columns.ts":D,react:R||(R=e.t(i,2)),antd:g,"@examples/utils":j,"antd/locale/zh_CN":A,"@schema-render/search-react":$,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-react/helpers/columns.ts":D},renderOpts:{compile:function(){var m=v()(p()().mark(function a(){var s,n=arguments;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},79899:function(V,c,e){e.r(c),e.d(c,{demos:function(){return j}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(27885),v=e(24345),i=e(38959),W=e(67247),g=e(36116),j={"examples-search-react-300-actions-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function A(){var $,M,D,h,m,o,a,s,n,t;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return $=d.sent,M=$.ConfigProvider,d.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return D=d.sent,h=D.sleep,d.next=10,Promise.resolve().then(e.bind(e,67247));case 10:return m=d.sent,o=m.default,d.next=14,Promise.resolve().then(e.bind(e,36116));case 14:return a=d.sent,s=a.default,n={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}},t=function(){var E=function(){var B=L()(r()().mark(function y(I){return r()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log("searchParams:",I),O.next=3,h();case 3:case"end":return O.stop()}},y)}));return function(I){return B.apply(this,arguments)}}(),f=function(y){console.log("isCollapsed:",y)};return T.createElement(M,{locale:o},T.createElement(s,{schema:n,onSubmit:E,onReset:E,onToggleCollapsed:f}))},d.abrupt("return",{default:t});case 19:case"end":return d.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-300-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{antd:v,"@examples/utils":i,"antd/locale/zh_CN":W,"@schema-render/search-react":g},renderOpts:{compile:function(){var A=L()(r()().mark(function M(){var D,h=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(D=o.sent).default.apply(D,h));case 3:case"end":return o.stop()}},M)}));function $(){return A.apply(this,arguments)}return $}()}}}},49469:function(V,c,e){e.r(c),e.d(c,{demos:function(){return W}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(10122),v=e(36116),i=e(9686),W={"examples-search-react-700-locale-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function g(){var j,A,$,M,D,h;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return j=o.sent,A=j.default,o.next=6,Promise.resolve().then(e.bind(e,9686));case 6:return $=o.sent,M=$.default,D={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"}}},h=function(){return T.createElement(A,{schema:D,labelWidth:120,locale:M})},o.abrupt("return",{default:h});case 11:case"end":return o.stop()}},g)})))),asset:{type:"BLOCK",id:"examples-search-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"2.5.0"}},entry:"index.tsx"},context:{"@schema-render/search-react":v,"@schema-render/search-react/src/locale/en_US":i},renderOpts:{compile:function(){var g=L()(r()().mark(function A(){var $,M=arguments;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(4019).then(e.bind(e,4019));case 2:return h.abrupt("return",($=h.sent).default.apply($,M));case 3:case"end":return h.stop()}},A)}));function j(){return g.apply(this,arguments)}return j}()}}}},90712:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(84123),p={}},11973:function(V,c,e){e.r(c),e.d(c,{demos:function(){return j}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(24197),v=e(36116),i=e(35719),W=e(57864),g=e(9680),j={"examples-search-react-850-category-title-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function A(){var $,M,D,h,m,o,a,s,n,t,l,d;return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return $=E.sent,M=$.default,E.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return D=E.sent,h=D.default,E.next=10,Promise.resolve().then(e.bind(e,57864));case 10:return m=E.sent,o=m.default,a={BankSelect:h,ObjectSectionTitle:o},s={renderType:"Root",properties:{basic:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"}}},payment:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}},collection:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"ObjectSectionTitle",properties:{bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect"},bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"}}}}},n=function(B){var y=function(x,O){x[B].bank_id=O.extra.bank_id,x[B].bank_account=O.extra.bank_account,x[B].bank_name=O.extra.bank_name,x[B].bank_branch_name=O.extra.bank_branch_name};return y},t=n("payment"),l=n("collection"),d=function(){return T.createElement(M,{defaultCollapsed:!1,style:{gridTemplateColumns:"auto"},schema:s,renderers:a,actions:["collapse"],watch:{"payment.bank_account":t,"payment.bank_name":t,"payment.bank_branch_name":t,"collection.bank_account":l,"collection.bank_name":l,"collection.bank_branch_name":l}})},E.abrupt("return",{default:d});case 19:case"end":return E.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"2.5.0"},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z},"./renderers/ObjectSectionTitle.tsx":{type:"FILE",value:e(97395).Z}},entry:"index.tsx"},context:{"./renderers/BankSelect.tsx":i,"./renderers/ObjectSectionTitle.tsx":W,"@schema-render/search-react":v,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":i,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/ObjectSectionTitle.tsx":W},renderOpts:{compile:function(){var A=L()(r()().mark(function M(){var D,h=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(D=o.sent).default.apply(D,h));case 3:case"end":return o.stop()}},M)}));function $(){return A.apply(this,arguments)}return $}()}},"examples-search-react-850-category-title-demo-1":{component:T.memo(T.lazy(L()(r()().mark(function A(){var $,M,D,h,m,o,a,s,n,t,l,d,u;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,36116));case 2:return $=f.sent,M=$.default,f.next=6,Promise.resolve().then(e.bind(e,35719));case 6:return D=f.sent,h=D.default,f.next=10,Promise.resolve().then(e.bind(e,9680));case 10:return m=f.sent,o=m.default,a={BankSelect:h,SectionTitle:o},s={renderType:"Root",properties:{_section_title_x1:{title:"\u57FA\u7840\u4FE1\u606F",renderType:"SectionTitle"},supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText",spanStart:1},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},_section_title_x2:{title:"\u4ED8\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},payment_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},payment_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},payment_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x3:{title:"\u6536\u6B3E\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},collection_bank_name:{title:"\u5F00\u6237\u94F6\u884C\u540D\u79F0",renderType:"BankSelect",spanStart:1},collection_bank_branch_name:{title:"\u5F00\u6237\u652F\u884C\u540D\u79F0",renderType:"BankSelect"},collection_bank_account:{title:"\u5F00\u6237\u94F6\u884C\u8D26\u53F7",renderType:"BankSelect"},_section_title_x4:{title:"\u5176\u4ED6\u4FE1\u606F",renderType:"SectionTitle",spanStart:1},reason:{title:"\u4E8B\u7531",renderType:"InputText",spanStart:1,style:{width:"calc(100vw - 635px)"}},remark:{title:"\u5907\u6CE8",renderType:"TextArea",renderOptions:{rows:1},style:{gridColumn:"1/3"}}}},n=function(y){var I=function(O,S){O["".concat(y,"_bank_id")]=S.extra.bank_id,O["".concat(y,"_bank_account")]=S.extra.bank_account,O["".concat(y,"_bank_name")]=S.extra.bank_name,O["".concat(y,"_bank_branch_name")]=S.extra.bank_branch_name};return I},t=n("payment"),l=n("collection"),d=function(y){var I;if(!y)return 5;var x=y.clientWidth,O=((I=y.querySelector(".schema-render-form-item:nth-of-type(2)"))===null||I===void 0||(I=I.getBoundingClientRect())===null||I===void 0?void 0:I.width)||320;return Math.floor(x/O)*2},u=function(){return T.createElement(M,{defaultCollapsed:!1,schema:s,renderers:a,actions:["collapse"],watch:{payment_bank_account:t,payment_bank_name:t,payment_bank_branch_name:t,collection_bank_account:l,collection_bank_name:l,collection_bank_branch_name:l},calcCollapsedNumber:d})},f.abrupt("return",{default:u});case 20:case"end":return f.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-react-850-category-title-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import Search from '@schema-render/search-react'
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

export default Demo`},"@schema-render/search-react":{type:"NPM",value:"2.5.0"},"./renderers/SectionTitle.tsx":{type:"FILE",value:e(5038).Z},"./renderers/BankSelect.tsx":{type:"FILE",value:e(19150).Z}},entry:"index.tsx"},context:{"./renderers/SectionTitle.tsx":g,"./renderers/BankSelect.tsx":i,"@schema-render/search-react":v,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/SectionTitle.tsx":g,"/home/runner/work/schema-render/schema-render/examples/search-react/renderers/BankSelect.tsx":i},renderOpts:{compile:function(){var A=L()(r()().mark(function M(){var D,h=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(D=o.sent).default.apply(D,h));case 3:case"end":return o.stop()}},M)}));function $(){return A.apply(this,arguments)}return $}()}}}},79181:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return s}});var r=e(5574),p=e.n(r),L=e(97857),T=e.n(L),z=e(15009),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(69306),A=e(38959),$=e(25520),M=e(92114),D=e(68666),h=e(362),m=e(24345),o=e(67247),a=e(91845),s={"examples-search-table-react-001-intro-demo-0":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return t=b.sent,l=t.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=b.sent,u=d.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=b.sent,f=E.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=b.sent,y=B.default,b.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return I=b.sent,x=I.default,O=function(){return g.createElement(x,{search:{schema:u},table:{columns:f},request:function(){var _=W()(v()().mark(function K(N){var H;return v()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return console.log("searchParams:",N),F.next=3,l();case 3:return H=y(N.pageSize),F.abrupt("return",{data:H,total:100});case 5:case"end":return F.stop()}},K)}));function P(K){return _.apply(this,arguments)}return P}()})},b.abrupt("return",{default:O});case 22:case"end":return b.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":D,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}},"examples-search-table-react-001-intro-demo-1":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O,S,b,C,_,P,K,N,H,U,F,Z,Q,J,ne,ee,se,Ie;return v()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return t=ie.sent,l=t.sleep,ie.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=ie.sent,u=d.default,ie.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=ie.sent,f=E.default,ie.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=ie.sent,y=B.default,ie.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return I=ie.sent,x=I.default,ie.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return O=ie.sent,S=O.useState,b=O.useRef,ie.next=27,Promise.resolve().then(e.bind(e,24345));case 27:return C=ie.sent,_=C.ConfigProvider,P=C.message,K=C.Button,N=C.Tag,ie.next=34,Promise.resolve().then(e.bind(e,67247));case 34:return H=ie.sent,U=H.default,ie.next=38,Promise.resolve().then(e.bind(e,91845));case 38:return F=ie.sent,Z=F.pinyin,Q=/[\u4e00-\u9fa5]/,J=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],ne=f.map(function(Pe,pe){var xe=T()({},Pe);return pe===0?xe.fixed="left":pe===f.length-1&&(xe.fixed="right"),xe}),ee={height:50,lineHeight:"50px",marginBottom:16,borderRadius:10,textAlign:"center",background:"#b6e0fa"},se=function(pe){return l()},Ie=function(){var pe=S("1"),xe=p()(pe,2),_e=xe[0],Ae=xe[1],We=b(null),ze=function(He,Ge){return[{text:"\u7F16\u8F91",onClick:function(){P.success("\u70B9\u51FB\u4E86\u7B2C ".concat(Ge," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Ye=W()(v()().mark(function rn(){var sn;return v()().wrap(function(ln){for(;;)switch(ln.prev=ln.next){case 0:return ln.next=2,se(He.id);case 2:(sn=We.current)===null||sn===void 0||sn.refresh();case 3:case"end":return ln.stop()}},rn)}));function ke(){return Ye.apply(this,arguments)}return ke}()}]};return g.createElement(_,{locale:U},g.createElement(x,{ref:We,search:{schema:u,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:_e,items:J,onChange:Ae},leftExtraContent:function(He){var Ge=He.loading;return g.createElement(K,{disabled:Ge},"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(He){var Ge=He.loading;return g.createElement(K,{disabled:Ge},"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9")}},titleTop:function(){return g.createElement("div",{style:ee},"Title Top \u5185\u5BB9\u81EA\u5B9A\u4E49")},titleBottom:function(){return g.createElement("div",{style:ee},"Title Bottom \u5185\u5BB9\u81EA\u5B9A\u4E49")},header:function(){return g.createElement("div",{style:ee},"Header \u5185\u5BB9\u81EA\u5B9A\u4E49")},footer:function(){return g.createElement("div",{style:T()(T()({},ee),{},{marginTop:16})},"Footer \u5185\u5BB9\u81EA\u5B9A\u4E49")},table:{columns:ne,showRowNumber:!0,actionItems:ze,actionItemsCount:3,actionItemsColumnData:{width:180},sortMode:"local-all",sortStringValueTransform:function(He){return Q.test(He)?Z(He,{toneType:"none"}):He}},request:function(){var Ne=W()(v()().mark(function Ge(Ye){var ke,rn;return v()().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:return Ve.next=2,l();case 2:return ke=y(Ye.pageSize),rn=ke.reduce(function(ln,Je){return ln+Je.goods_price},0).toFixed(2),Ve.abrupt("return",{data:ke,total:100,summaryData:{supplier_code:g.createElement(N,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:rn}});case 5:case"end":return Ve.stop()}},Ge)}));function He(Ge){return Ne.apply(this,arguments)}return He}()}))},ie.abrupt("return",{default:Ie});case 47:case"end":return ie.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-001-intro-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.6.3"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":D,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,react:R||(R=e.t(g,2)),antd:m,"antd/locale/zh_CN":o,"pinyin-pro":a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}}}},37629:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return D}});var r=e(15009),p=e.n(r),L=e(99289),T=e.n(L),z=e(67294),v=e(72106),i=e(38959),W=e(25520),g=e(92114),j=e(68666),A=e(362),$=e(24345),M=e(67247),D={"examples-search-table-react-010-table-actions-demo-0":{component:z.memo(z.lazy(T()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f;return p()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return m=y.sent,o=m.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=y.sent,s=a.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=y.sent,t=n.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=y.sent,d=l.default,y.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return u=y.sent,E=u.default,f=function(){return z.createElement(E,{search:{schema:s},table:{columns:t,showRowNumber:!0},request:function(){var x=T()(p()().mark(function S(b){var C;return p()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,o();case 2:return C=d(b.pageSize),P.abrupt("return",{data:C,total:100});case 4:case"end":return P.stop()}},S)}));function O(S){return x.apply(this,arguments)}return O}()})},y.abrupt("return",{default:f});case 22:case"end":return y.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/schema.ts":j,"./helpers/columns.ts":A,"@examples/utils":i,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=T()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-search-table-react-010-table-actions-demo-1":{component:z.memo(z.lazy(T()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B;return p()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return m=I.sent,o=m.sleep,I.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=I.sent,s=a.default,I.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=I.sent,t=n.default,I.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=I.sent,d=l.default,I.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return u=I.sent,E=u.default,f=function(O,S,b){return z.createElement("div",{style:{width:20,height:20,borderRadius:"50%",background:"black",color:"white",display:"inline-flex",justifyContent:"center",alignItems:"center"}},b+1)},B=function(){return z.createElement(E,{search:{schema:s},table:{columns:t,showRowNumber:!0,rowNumberColumnData:{width:80,render:f}},request:function(){var O=T()(p()().mark(function b(C){var _;return p()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,o();case 2:return _=d(C.pageSize),K.abrupt("return",{data:_,total:100});case 4:case"end":return K.stop()}},b)}));function S(b){return O.apply(this,arguments)}return S}()})},I.abrupt("return",{default:B});case 23:case"end":return I.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":j,"./helpers/createDataSource.ts":g,"./helpers/columns.ts":A,"@examples/utils":i,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=T()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-search-table-react-010-table-actions-demo-2":{component:z.memo(z.lazy(T()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y,I,x,O;return p()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return m=b.sent,o=m.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return a=b.sent,s=a.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return n=b.sent,t=n.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return l=b.sent,d=l.default,b.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return u=b.sent,E=u.default,b.next=22,Promise.resolve().then(e.bind(e,24345));case 22:return f=b.sent,B=f.ConfigProvider,y=f.message,b.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return I=b.sent,x=I.default,O=function(){var _=function(K,N){return[{text:"\u7F16\u8F91",onClick:function(){y.success("\u70B9\u51FB\u4E86\u7B2C ".concat(N," \u4E2A\u7F16\u8F91"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"}]};return z.createElement(B,{locale:x},z.createElement(E,{search:{schema:s},table:{columns:t,actionItems:_},request:function(){var P=T()(p()().mark(function N(H){var U;return p()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,o();case 2:return U=d(H.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return P.apply(this,arguments)}return K}()}))},b.abrupt("return",{default:O});case 31:case"end":return b.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/schema.ts":j,"./helpers/columns.ts":A,"@examples/utils":i,"@schema-render/search-table-react":W,antd:$,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=T()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-search-table-react-010-table-actions-demo-3":{component:z.memo(z.lazy(T()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C;return p()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=P.sent,o=m.useRef,P.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=P.sent,s=a.sleep,P.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=P.sent,t=n.default,P.next=14,Promise.resolve().then(e.bind(e,362));case 14:return l=P.sent,d=l.default,P.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return u=P.sent,E=u.default,P.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return f=P.sent,B=f.default,P.next=26,Promise.resolve().then(e.bind(e,24345));case 26:return y=P.sent,I=y.ConfigProvider,x=y.message,P.next=31,Promise.resolve().then(e.bind(e,67247));case 31:return O=P.sent,S=O.default,b=function(N){return s()},C=function(){var N=o(null),H=function(F,Z){return[{text:"\u7F16\u8F91",onClick:function(){x.success("\u70B9\u51FB\u7B2C ".concat(Z," \u7F16\u8F91\u4E86"))}},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,onClick:function(){var Q=T()(p()().mark(function ne(){var ee;return p()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:return Ie.next=2,b(F.id);case 2:(ee=N.current)===null||ee===void 0||ee.refresh();case 3:case"end":return Ie.stop()}},ne)}));function J(){return Q.apply(this,arguments)}return J}()}]};return z.createElement(I,{locale:S},z.createElement(B,{ref:N,search:{schema:t},table:{columns:d,actionItems:H,actionItemsDropdownProps:{overlayClassName:"my-dropdown-class-name"}},request:function(){var U=T()(p()().mark(function Z(Q){var J;return p()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,s();case 2:return J=E(Q.pageSize),ee.abrupt("return",{data:J,total:100});case 4:case"end":return ee.stop()}},Z)}));function F(Z){return U.apply(this,arguments)}return F}()}))},P.abrupt("return",{default:C});case 36:case"end":return P.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/schema.ts":j,"./helpers/columns.ts":A,react:R||(R=e.t(z,2)),"@examples/utils":i,"@schema-render/search-table-react":W,antd:$,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=T()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}},"examples-search-table-react-010-table-actions-demo-4":{component:z.memo(z.lazy(T()(p()().mark(function h(){var m,o,a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b;return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return m=_.sent,o=m.useRef,_.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return a=_.sent,s=a.sleep,_.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return n=_.sent,t=n.default,_.next=14,Promise.resolve().then(e.bind(e,362));case 14:return l=_.sent,d=l.default,_.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return u=_.sent,E=u.default,_.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return f=_.sent,B=f.default,_.next=26,Promise.resolve().then(e.bind(e,24345));case 26:return y=_.sent,I=y.ConfigProvider,_.next=30,Promise.resolve().then(e.bind(e,67247));case 30:return x=_.sent,O=x.default,S=function(K){return s()},b=function(){var K=o(null),N=function(U,F){return[{text:z.createElement("a",{href:"https://schema-render.js.org/",style:{color:"green",padding:"0 7px"},key:"link-".concat(F)},"\u7F16\u8F91")},{text:"\u8BE6\u60C5",href:"https://schema-render.js.org/",target:"_blank"},{text:"\u5220\u9664",danger:!0,confirmAgain:!0,confirmProps:{title:"\u6E29\u99A8\u63D0\u793A",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010".concat(U.supplier_code,"\u3011\u4F9B\u5E94\u5546\u5417\uFF1F")},onClick:function(){var Z=T()(p()().mark(function J(){var ne;return p()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,S(U.id);case 2:(ne=K.current)===null||ne===void 0||ne.refresh();case 3:case"end":return se.stop()}},J)}));function Q(){return Z.apply(this,arguments)}return Q}()}]};return z.createElement(I,{locale:O},z.createElement(B,{ref:K,search:{schema:t},table:{columns:d,actionItems:N,actionItemsCount:3,actionItemsColumnData:{width:180}},request:function(){var H=T()(p()().mark(function F(Z){var Q;return p()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,s();case 2:return Q=E(Z.pageSize),ne.abrupt("return",{data:Q,total:100});case 4:case"end":return ne.stop()}},F)}));function U(F){return H.apply(this,arguments)}return U}()}))},_.abrupt("return",{default:b});case 35:case"end":return _.stop()}},h)})))),asset:{type:"BLOCK",id:"examples-search-table-react-010-table-actions-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/schema.ts":j,"./helpers/columns.ts":A,react:R||(R=e.t(z,2)),"@examples/utils":i,"@schema-render/search-table-react":W,antd:$,"antd/locale/zh_CN":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var h=T()(p()().mark(function o(){var a,s=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},o)}));function m(){return h.apply(this,arguments)}return m}()}}}},89588:function(V,c,e){e.r(c),e.d(c,{demos:function(){return M}});var R=e(97857),r=e.n(R),p=e(15009),L=e.n(p),T=e(99289),z=e.n(T),v=e(67294),i=e(17258),W=e(38959),g=e(25520),j=e(92114),A=e(68666),$=e(362),M={"examples-search-table-react-020-table-height-demo-0":{component:v.memo(v.lazy(z()(L()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E;return L()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return h=B.sent,m=h.sleep,B.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return o=B.sent,a=o.default,B.next=10,Promise.resolve().then(e.bind(e,362));case 10:return s=B.sent,n=s.default,B.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return t=B.sent,l=t.default,B.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return d=B.sent,u=d.default,E=function(){return v.createElement(u,{style:{height:500,overflow:"hidden"},search:{schema:a},table:{columns:n,autoScrollY:!0},request:function(){var I=z()(L()().mark(function O(S){var b;return L()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,m();case 2:return b=l(S.pageSize),_.abrupt("return",{data:b,total:100});case 4:case"end":return _.stop()}},O)}));function x(O){return I.apply(this,arguments)}return x}()})},B.abrupt("return",{default:E});case 22:case"end":return B.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":j,"./helpers/schema.ts":A,"./helpers/columns.ts":$,"@examples/utils":W,"@schema-render/search-table-react":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var D=z()(L()().mark(function m(){var o,a=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-search-table-react-020-table-height-demo-1":{component:v.memo(v.lazy(z()(L()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f;return L()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return h=y.sent,m=h.sleep,y.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return o=y.sent,a=o.default,y.next=10,Promise.resolve().then(e.bind(e,362));case 10:return s=y.sent,n=s.default,y.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return t=y.sent,l=t.default,y.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return d=y.sent,u=d.default,E={height:50,lineHeight:"50px",marginTop:16,borderRadius:10,textAlign:"center",background:"lightskyblue"},f=function(){return v.createElement(u,{style:{height:700,overflow:"hidden"},search:{schema:a},table:{columns:n,autoScrollY:!0},request:function(){var x=z()(L()().mark(function S(b){var C;return L()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,m();case 2:return C=l(b.pageSize),P.abrupt("return",{data:C,total:100});case 4:case"end":return P.stop()}},S)}));function O(S){return x.apply(this,arguments)}return O}(),header:function(){return v.createElement("div",{style:r()(r()({},E),{},{margin:"0 0 16px 0"})},"Header")},titleTop:function(){return v.createElement("div",{style:E},"Title Top")},titleBottom:function(){return v.createElement("div",{style:E},"Title Bottom")},footer:function(){return v.createElement("div",{style:E},"Footer")}})},y.abrupt("return",{default:f});case 23:case"end":return y.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-020-table-height-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":j,"./helpers/schema.ts":A,"./helpers/columns.ts":$,"@examples/utils":W,"@schema-render/search-table-react":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var D=z()(L()().mark(function m(){var o,a=arguments;return L()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},64929:function(V,c,e){e.r(c),e.d(c,{demos:function(){return M}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(73865),v=e(24345),i=e(38959),W=e(25520),g=e(92114),j=e(68666),A=e(362),$=e(23786),M={"examples-search-table-react-030-table-summay-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return h=I.sent,m=h.Tag,I.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=I.sent,a=o.sleep,I.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return s=I.sent,n=s.default,I.next=14,Promise.resolve().then(e.bind(e,362));case 14:return t=I.sent,l=t.default,I.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=I.sent,u=d.default,I.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return E=I.sent,f=E.default,B=function(){return T.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300}},request:function(){var O=L()(r()().mark(function b(C){var _,P;return r()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,a();case 2:return _=u(C.pageSize),P=_.reduce(function(H,U){return H+U.goods_price},0).toFixed(2),N.abrupt("return",{data:_,total:100,summaryData:{supplier_code:T.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:P}});case 5:case"end":return N.stop()}},b)}));function S(b){return O.apply(this,arguments)}return S}()})},I.abrupt("return",{default:B});case 26:case"end":return I.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/schema.ts":j,"./helpers/columns.ts":A,antd:v,"@examples/utils":i,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var D=L()(r()().mark(function m(){var o,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-1":{component:T.memo(T.lazy(L()(r()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return h=I.sent,m=h.Tag,I.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=I.sent,a=o.sleep,I.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return s=I.sent,n=s.default,I.next=14,Promise.resolve().then(e.bind(e,362));case 14:return t=I.sent,l=t.default,I.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=I.sent,u=d.default,I.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return E=I.sent,f=E.default,B=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},S=T.createElement("div",{style:{color:"red",fontWeight:"bold"}},"\u5408\u8BA1");return T.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,summaryText:S,actionItems:O},request:function(){var b=L()(r()().mark(function _(P){var K,N;return r()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,a();case 2:return K=u(P.pageSize),N=K.reduce(function(F,Z){return F+Z.goods_price},0).toFixed(2),U.abrupt("return",{data:K,total:100,summaryData:{supplier_code:T.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:N}});case 5:case"end":return U.stop()}},_)}));function C(_){return b.apply(this,arguments)}return C}()})},I.abrupt("return",{default:B});case 26:case"end":return I.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/columns.ts":A,"./helpers/schema.ts":j,antd:v,"@examples/utils":i,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j},renderOpts:{compile:function(){var D=L()(r()().mark(function m(){var o,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-2":{component:T.memo(T.lazy(L()(r()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return h=I.sent,m=h.Tag,I.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=I.sent,a=o.sleep,I.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return s=I.sent,n=s.default,I.next=14,Promise.resolve().then(e.bind(e,362));case 14:return t=I.sent,l=t.default,I.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=I.sent,u=d.default,I.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return E=I.sent,f=E.default,B=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return T.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},actionItems:O,rowSelection:{columnWidth:60,fixed:!0,type:"checkbox"}},request:function(){var S=L()(r()().mark(function C(_){var P,K;return r()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,a();case 2:return P=u(_.pageSize),K=P.reduce(function(U,F){return U+F.goods_price},0).toFixed(2),H.abrupt("return",{data:P,total:100,summaryData:{supplier_code:T.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},C)}));function b(C){return S.apply(this,arguments)}return b}()})},I.abrupt("return",{default:B});case 26:case"end":return I.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/schema.ts":j,"./helpers/columns.ts":A,antd:v,"@examples/utils":i,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var D=L()(r()().mark(function m(){var o,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-3":{component:T.memo(T.lazy(L()(r()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return h=I.sent,m=h.Tag,I.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=I.sent,a=o.sleep,I.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return s=I.sent,n=s.default,I.next=14,Promise.resolve().then(e.bind(e,362));case 14:return t=I.sent,l=t.default,I.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=I.sent,u=d.default,I.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return E=I.sent,f=E.default,B=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return T.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,actionItems:O,rowSelection:{type:"checkbox"}},request:function(){var S=L()(r()().mark(function C(_){var P,K;return r()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,a();case 2:return P=u(_.pageSize),K=P.reduce(function(U,F){return U+F.goods_price},0).toFixed(2),H.abrupt("return",{data:P,total:100,summaryData:{supplier_code:T.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},C)}));function b(C){return S.apply(this,arguments)}return b}()})},I.abrupt("return",{default:B});case 26:case"end":return I.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/schema.ts":j,"./helpers/columns.ts":A,antd:v,"@examples/utils":i,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var D=L()(r()().mark(function m(){var o,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-4":{component:T.memo(T.lazy(L()(r()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B,y;return r()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return h=x.sent,m=h.Tag,x.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=x.sent,a=o.sleep,x.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return s=x.sent,n=s.default,x.next=14,Promise.resolve().then(e.bind(e,362));case 14:return t=x.sent,l=t.default,x.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=x.sent,u=d.default,x.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return E=x.sent,f=E.default,B={width:116,height:"100%",background:"white",position:"absolute",left:-48,top:0,display:"flex",alignItems:"center",justifyContent:"center"},y=function(){var S=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]},b=T.createElement("div",{style:B},"\u5408\u8BA1");return T.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,bordered:!0,summaryText:b,actionItems:S,rowSelection:{type:"checkbox"}},request:function(){var C=L()(r()().mark(function P(K){var N,H;return r()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,a();case 2:return N=u(K.pageSize),H=N.reduce(function(Z,Q){return Z+Q.goods_price},0).toFixed(2),F.abrupt("return",{data:N,total:100,summaryData:{supplier_code:T.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:H}});case 5:case"end":return F.stop()}},P)}));function _(P){return C.apply(this,arguments)}return _}()})},x.abrupt("return",{default:y});case 27:case"end":return x.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.jsx"},context:{"./helpers/createDataSource.ts":g,"./helpers/schema.ts":j,"./helpers/columns.ts":A,antd:v,"@examples/utils":i,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":A},renderOpts:{compile:function(){var D=L()(r()().mark(function m(){var o,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}},"examples-search-table-react-030-table-summay-demo-5":{component:T.memo(T.lazy(L()(r()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return h=I.sent,m=h.Tag,I.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return o=I.sent,a=o.sleep,I.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return s=I.sent,n=s.default,I.next=14,Promise.resolve().then(e.bind(e,23786));case 14:return t=I.sent,l=t.default,I.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return d=I.sent,u=d.default,I.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return E=I.sent,f=E.default,B=function(){var O=function(){return[{text:"\u7F16\u8F91"},{text:"\u5220\u9664"}]};return T.createElement(f,{search:{schema:n},table:{columns:l,scroll:{y:300},showRowNumber:!0,bordered:!0,actionItems:O},request:function(){var S=L()(r()().mark(function C(_){var P,K;return r()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,a();case 2:return P=u(_.pageSize),K=P.reduce(function(U,F){return U+F.goods_price},0).toFixed(2),H.abrupt("return",{data:P,total:100,summaryData:{supplier_code:T.createElement(m,{color:"blue"},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),goods_price:K}});case 5:case"end":return H.stop()}},C)}));function b(C){return S.apply(this,arguments)}return b}()})},I.abrupt("return",{default:B});case 26:case"end":return I.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-030-table-summay-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Tag } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.jsx"},context:{"./helpers/columns-tree.ts":$,"./helpers/schema.ts":j,"./helpers/createDataSource.ts":g,antd:v,"@examples/utils":i,"@schema-render/search-table-react":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":g},renderOpts:{compile:function(){var D=L()(r()().mark(function m(){var o,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},35955:function(V,c,e){e.r(c),e.d(c,{demos:function(){return h}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(81535),v=e(24345),i=e(67247),W=e(38959),g=e(25520),j=e(92114),A=e(68666),$=e(362),M=e(23786),D=e(91845),h={"examples-search-table-react-040-table-sort-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x;return r()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return o=S.sent,a=o.ConfigProvider,S.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return s=S.sent,n=s.default,S.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return t=S.sent,l=t.sleep,S.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=S.sent,u=d.default,S.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return E=S.sent,f=E.default,S.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return B=S.sent,y=B.default,I=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sortType:"string"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string",sortDataExtractor:function(C){return C.bill_type}},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sortType:"number"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}],x=function(){return T.createElement(a,{locale:n},T.createElement(y,{search:{schema:u},table:{columns:I},request:function(){var C=L()(r()().mark(function P(K){var N;return r()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,l();case 2:return N=f(K.pageSize),U.abrupt("return",{data:N,total:100});case 4:case"end":return U.stop()}},P)}));function _(P){return C.apply(this,arguments)}return _}()}))},S.abrupt("return",{default:x});case 27:case"end":return S.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":j,"./helpers/schema.ts":A,antd:v,"antd/locale/zh_CN":i,"@examples/utils":W,"@schema-render/search-table-react":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:function(){var m=L()(r()().mark(function a(){var s,n=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"examples-search-table-react-040-table-sort-demo-1":{component:T.memo(T.lazy(L()(r()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x,O;return r()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return o=b.sent,a=o.ConfigProvider,b.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return s=b.sent,n=s.default,b.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return t=b.sent,l=t.sleep,b.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=b.sent,u=d.default,b.next=18,Promise.resolve().then(e.bind(e,362));case 18:return E=b.sent,f=E.default,b.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return B=b.sent,y=B.default,b.next=26,Promise.resolve().then(e.bind(e,25520));case 26:return I=b.sent,x=I.default,O=function(){return T.createElement(a,{locale:n},T.createElement(x,{search:{schema:u},table:{columns:f,sortMode:"local-all"},request:function(){var _=L()(r()().mark(function K(N){var H;return r()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,l();case 2:return H=y(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function P(K){return _.apply(this,arguments)}return P}()}))},b.abrupt("return",{default:O});case 30:case"end":return b.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":j,"./helpers/schema.ts":A,"./helpers/columns.ts":$,antd:v,"antd/locale/zh_CN":i,"@examples/utils":W,"@schema-render/search-table-react":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var m=L()(r()().mark(function a(){var s,n=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"examples-search-table-react-040-table-sort-demo-2":{component:T.memo(T.lazy(L()(r()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x,O;return r()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return o=b.sent,a=o.ConfigProvider,b.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return s=b.sent,n=s.default,b.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return t=b.sent,l=t.sleep,b.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=b.sent,u=d.default,b.next=18,Promise.resolve().then(e.bind(e,23786));case 18:return E=b.sent,f=E.default,b.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return B=b.sent,y=B.default,b.next=26,Promise.resolve().then(e.bind(e,25520));case 26:return I=b.sent,x=I.default,O=function(){return T.createElement(a,{locale:n},T.createElement(x,{search:{schema:u},table:{columns:f,bordered:!0,sortMode:"local-all"},request:function(){var _=L()(r()().mark(function K(N){var H;return r()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,l();case 2:return H=y(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function P(K){return _.apply(this,arguments)}return P}()}))},b.abrupt("return",{default:O});case 30:case"end":return b.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-tree.ts":{type:"FILE",value:e(29449).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":j,"./helpers/schema.ts":A,"./helpers/columns-tree.ts":M,antd:v,"antd/locale/zh_CN":i,"@examples/utils":W,"@schema-render/search-table-react":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-tree.ts":M},renderOpts:{compile:function(){var m=L()(r()().mark(function a(){var s,n=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"examples-search-table-react-040-table-sort-demo-3":{component:T.memo(T.lazy(L()(r()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C;return r()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return o=P.sent,a=o.ConfigProvider,P.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return s=P.sent,n=s.default,P.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return t=P.sent,l=t.sleep,P.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=P.sent,u=d.default,P.next=18,Promise.resolve().then(e.bind(e,362));case 18:return E=P.sent,f=E.default,P.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return B=P.sent,y=B.default,P.next=26,Promise.resolve().then(e.bind(e,25520));case 26:return I=P.sent,x=I.default,P.next=30,Promise.resolve().then(e.bind(e,91845));case 30:return O=P.sent,S=O.pinyin,b=/[\u4e00-\u9fa5]/,C=function(){return T.createElement(a,{locale:n},T.createElement(x,{search:{schema:u},table:{columns:f,sortMode:"local-all",sortStringValueTransform:function(H){return b.test(H)?S(H,{toneType:"none"}):H}},request:function(){var N=L()(r()().mark(function U(F){var Z;return r()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,l();case 2:return Z=y(F.pageSize),J.abrupt("return",{data:Z,total:100});case 4:case"end":return J.stop()}},U)}));function H(U){return N.apply(this,arguments)}return H}()}))},P.abrupt("return",{default:C});case 35:case"end":return P.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"pinyin-pro":{type:"NPM",value:"3.25.0"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":A,"./helpers/createDataSource.ts":j,"./helpers/columns.ts":$,antd:v,"antd/locale/zh_CN":i,"@examples/utils":W,"@schema-render/search-table-react":g,"pinyin-pro":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":$},renderOpts:{compile:function(){var m=L()(r()().mark(function a(){var s,n=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}},"examples-search-table-react-040-table-sort-demo-4":{component:T.memo(T.lazy(L()(r()().mark(function m(){var o,a,s,n,t,l,d,u,E,f,B,y,I,x;return r()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return o=S.sent,a=o.ConfigProvider,S.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return s=S.sent,n=s.default,S.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return t=S.sent,l=t.sleep,S.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return d=S.sent,u=d.default,S.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return E=S.sent,f=E.default,S.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return B=S.sent,y=B.default,I=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",sorter:!0},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130,sorter:!0},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",sortType:"string"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",sorter:!0},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",sorter:!0},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120,sorter:!0}],x=function(){return T.createElement(a,{locale:n},T.createElement(y,{search:{schema:u},table:{columns:I,sortMode:"service"},request:function(){var C=L()(r()().mark(function P(K,N){var H,U,F;return r()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return H=N.sorter,U=H,Q.next=4,l();case 4:return F=f(K.pageSize,{sort_field:U==null?void 0:U.field,sort_order:U==null?void 0:U.order}),Q.abrupt("return",{data:F,total:100});case 6:case"end":return Q.stop()}},P)}));function _(P,K){return C.apply(this,arguments)}return _}()}))},S.abrupt("return",{default:x});case 27:case"end":return S.stop()}},m)})))),asset:{type:"BLOCK",id:"examples-search-table-react-040-table-sort-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":j,"./helpers/schema.ts":A,antd:v,"antd/locale/zh_CN":i,"@examples/utils":W,"@schema-render/search-table-react":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":A},renderOpts:{compile:function(){var m=L()(r()().mark(function a(){var s,n=arguments;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(4019).then(e.bind(e,4019));case 2:return l.abrupt("return",(s=l.sent).default.apply(s,n));case 3:case"end":return l.stop()}},a)}));function o(){return m.apply(this,arguments)}return o}()}}}},66725:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return o}});var r=e(15009),p=e.n(r),L=e(5574),T=e.n(L),z=e(99289),v=e.n(z),i=e(67294),W=e(18899),g=e(38959),j=e(25520),A=e(92114),$=e(68666),M=e(362),D=e(27164),h=e(6271),m=e(24345),o={"examples-search-table-react-050-tabs-demo-0":{component:i.memo(i.lazy(v()(p()().mark(function a(){var s,n,t,l,d,u,E,f,B,y,I,x,O,S;return p()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return s=C.sent,n=s.sleep,C.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=C.sent,l=t.default,C.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=C.sent,u=d.default,C.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=C.sent,f=E.default,C.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return B=C.sent,y=B.default,C.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return I=C.sent,x=I.useState,O=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],S=function(){var P=x("1"),K=T()(P,2),N=K[0],H=K[1];return i.createElement(y,{search:{schema:l,labelWidth:80},title:{tabs:{activeKey:N,items:O,onChange:H}},table:{columns:u},request:function(){var U=v()(p()().mark(function Z(Q){var J;return p()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return console.log("activeKey:",N),ee.next=3,n();case 3:return J=f(Q.pageSize),ee.abrupt("return",{data:J,total:100});case 5:case"end":return ee.stop()}},Z)}));function F(Z){return U.apply(this,arguments)}return F}()})},C.abrupt("return",{default:S});case 27:case"end":return C.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":g,"@schema-render/search-table-react":j,react:R||(R=e.t(i,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var a=v()(p()().mark(function n(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},n)}));function s(){return a.apply(this,arguments)}return s}()}},"examples-search-table-react-050-tabs-demo-1":{component:i.memo(i.lazy(v()(p()().mark(function a(){var s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C,_,P;return p()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=N.sent,n=s.useState,N.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return t=N.sent,l=t.sleep,N.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return d=N.sent,u=d.default,N.next=14,Promise.resolve().then(e.bind(e,362));case 14:return E=N.sent,f=E.default,N.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return B=N.sent,y=B.default,N.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return I=N.sent,x=I.default,N.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return O=N.sent,S=O.default,N.next=30,Promise.resolve().then(e.bind(e,25520));case 30:return b=N.sent,C=b.default,_=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],P=function(){var U=n("1"),F=T()(U,2),Z=F[0],Q=F[1];return i.createElement(C,{search:{schema:u},title:{showSetting:!0,tabs:{activeKey:Z,items:_,onChange:Q}},table:{columns:Z==="1"?f:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var J=v()(p()().mark(function ee(se){var Ie,me;return p()().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,l();case 2:if(Ie=Z==="1"?x:S,me=Ie(se.pageSize),!(Math.random()>.7)){Pe.next=6;break}throw new Error("\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF");case 6:return Pe.abrupt("return",{data:me,total:100});case 7:case"end":return Pe.stop()}},ee)}));function ne(ee){return J.apply(this,arguments)}return ne}()})},N.abrupt("return",{default:P});case 35:case"end":return N.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":D,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"./helpers/columns-value-type.ts":h,"./helpers/createDataSource.ts":A,react:R||(R=e.t(i,2)),"@examples/utils":g,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A},renderOpts:{compile:function(){var a=v()(p()().mark(function n(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},n)}));function s(){return a.apply(this,arguments)}return s}()}},"examples-search-table-react-050-tabs-demo-2":{component:i.memo(i.lazy(v()(p()().mark(function a(){var s,n,t,l,d,u,E,f,B,y,I,x,O,S;return p()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return s=C.sent,n=s.sleep,C.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=C.sent,l=t.default,C.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=C.sent,u=d.default,C.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=C.sent,f=E.default,C.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return B=C.sent,y=B.default,C.next=22,Promise.resolve().then(e.t.bind(e,67294,19));case 22:return I=C.sent,x=I.useState,O=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],S=function(){var P=x("1"),K=T()(P,2),N=K[0],H=K[1];return i.createElement(y,{search:{schema:l,labelWidth:80},title:{showSetting:!0,showRefresh:!0,tabs:{activeKey:N,items:O,onChange:H}},table:{columns:u},request:function(){var U=v()(p()().mark(function Z(Q){var J;return p()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return console.log("activeKey:",N),ee.next=3,n();case 3:return J=f(Q.pageSize),ee.abrupt("return",{data:J,total:100});case 5:case"end":return ee.stop()}},Z)}));function F(Z){return U.apply(this,arguments)}return F}()})},C.abrupt("return",{default:S});case 27:case"end":return C.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":g,"@schema-render/search-table-react":j,react:R||(R=e.t(i,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var a=v()(p()().mark(function n(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},n)}));function s(){return a.apply(this,arguments)}return s}()}},"examples-search-table-react-050-tabs-demo-3":{component:i.memo(i.lazy(v()(p()().mark(function a(){var s,n,t,l,d,u,E,f,B,y,I;return p()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return s=O.sent,n=s.sleep,O.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=O.sent,l=t.default,O.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=O.sent,u=d.default,O.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=O.sent,f=E.default,O.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return B=O.sent,y=B.default,I=function(){return i.createElement(y,{search:{schema:l,labelWidth:80},title:{showSetting:!0,showRefresh:!0},table:{columns:u},request:function(){var b=v()(p()().mark(function _(P){var K;return p()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,n();case 2:return K=f(P.pageSize),H.abrupt("return",{data:K,total:100});case 4:case"end":return H.stop()}},_)}));function C(_){return b.apply(this,arguments)}return C}()})},O.abrupt("return",{default:I});case 22:case"end":return O.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":$,"./helpers/createDataSource.ts":A,"./helpers/columns.ts":M,"@examples/utils":g,"@schema-render/search-table-react":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var a=v()(p()().mark(function n(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},n)}));function s(){return a.apply(this,arguments)}return s}()}},"examples-search-table-react-050-tabs-demo-4":{component:i.memo(i.lazy(v()(p()().mark(function a(){var s,n,t,l,d,u,E,f,B,y,I,x,O;return p()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return s=b.sent,n=s.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=b.sent,l=t.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=b.sent,u=d.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=b.sent,f=E.default,b.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return B=b.sent,y=B.default,b.next=22,Promise.resolve().then(e.bind(e,24345));case 22:return I=b.sent,x=I.Button,O=function(){return i.createElement(y,{search:{schema:l,labelWidth:80},title:{leftExtraContent:function(P){var K=P.loading;return i.createElement(i.Fragment,null,i.createElement(x,{type:"primary",disabled:K},"\u5BFC\u5165"),i.createElement(x,{disabled:K},"\u5BFC\u51FA"))}},table:{columns:u},request:function(){var _=v()(p()().mark(function K(N){var H;return p()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,n();case 2:return H=f(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function P(K){return _.apply(this,arguments)}return P}()})},b.abrupt("return",{default:O});case 26:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":g,"@schema-render/search-table-react":j,antd:m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var a=v()(p()().mark(function n(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},n)}));function s(){return a.apply(this,arguments)}return s}()}},"examples-search-table-react-050-tabs-demo-5":{component:i.memo(i.lazy(v()(p()().mark(function a(){var s,n,t,l,d,u,E,f,B,y,I,x,O;return p()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return s=b.sent,n=s.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=b.sent,l=t.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=b.sent,u=d.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=b.sent,f=E.default,b.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return B=b.sent,y=B.default,b.next=22,Promise.resolve().then(e.bind(e,24345));case 22:return I=b.sent,x=I.Button,O=function(){return i.createElement(y,{search:{schema:l,labelWidth:80},title:{rightExtraContent:function(P){var K=P.loading;return i.createElement(x,{disabled:K},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:u},request:function(){var _=v()(p()().mark(function K(N){var H;return p()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,n();case 2:return H=f(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function P(K){return _.apply(this,arguments)}return P}()})},b.abrupt("return",{default:O});case 26:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":g,"@schema-render/search-table-react":j,antd:m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var a=v()(p()().mark(function n(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},n)}));function s(){return a.apply(this,arguments)}return s}()}},"examples-search-table-react-050-tabs-demo-6":{component:i.memo(i.lazy(v()(p()().mark(function a(){var s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C;return p()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return s=P.sent,n=s.sleep,P.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return t=P.sent,l=t.default,P.next=10,Promise.resolve().then(e.bind(e,362));case 10:return d=P.sent,u=d.default,P.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return E=P.sent,f=E.default,P.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return B=P.sent,y=B.default,P.next=22,Promise.resolve().then(e.bind(e,24345));case 22:return I=P.sent,x=I.Button,P.next=26,Promise.resolve().then(e.t.bind(e,67294,19));case 26:return O=P.sent,S=O.useState,b=[{key:"1",label:"\u5DF2\u63D0\u4EA4"},{key:"2",label:"\u5F85\u63D0\u4EA4"},{key:"3",label:"\u5F85\u5BA1\u6838"}],C=function(){var N=S("1"),H=T()(N,2),U=H[0],F=H[1];return i.createElement(y,{search:{schema:l,labelWidth:80},title:{showRefresh:!0,showSetting:!0,tabs:{activeKey:U,items:b,onChange:F},leftExtraContent:function(Q){var J=Q.loading;return i.createElement(x,{disabled:J},"\u5DE6\u4FA7\u5185\u5BB9")},rightExtraContent:function(Q){var J=Q.loading;return i.createElement(x,{disabled:J},"\u53F3\u4FA7\u5185\u5BB9")}},table:{columns:u},request:function(){var Z=v()(p()().mark(function J(ne){var ee;return p()().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:return Ie.next=2,n();case 2:return ee=f(ne.pageSize),Ie.abrupt("return",{data:ee,total:100});case 4:case"end":return Ie.stop()}},J)}));function Q(J){return Z.apply(this,arguments)}return Q}()})},P.abrupt("return",{default:C});case 31:case"end":return P.stop()}},a)})))),asset:{type:"BLOCK",id:"examples-search-table-react-050-tabs-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},react:{type:"NPM",value:"18.3.1"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,"./helpers/columns.ts":M,"@examples/utils":g,"@schema-render/search-table-react":j,antd:m,react:R||(R=e.t(i,2)),"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":M},renderOpts:{compile:function(){var a=v()(p()().mark(function n(){var t,l=arguments;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(4019).then(e.bind(e,4019));case 2:return u.abrupt("return",(t=u.sent).default.apply(t,l));case 3:case"end":return u.stop()}},n)}));function s(){return a.apply(this,arguments)}return s}()}}}},23915:function(V,c,e){e.r(c),e.d(c,{demos:function(){return m}});var R=e(97857),r=e.n(R),p=e(15009),L=e.n(p),T=e(99289),z=e.n(T),v=e(67294),i=e(87922),W=e(24345),g=e(67247),j=e(38959),A=e(25520),$=e(27164),M=e(68666),D=e(6271),h=e(41989),m={"examples-search-table-react-060-value-type-demo-0":{component:v.memo(v.lazy(z()(L()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I,x,O,S;return L()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,24345));case 2:return a=C.sent,s=a.ConfigProvider,C.next=6,Promise.resolve().then(e.bind(e,67247));case 6:return n=C.sent,t=n.default,C.next=10,Promise.resolve().then(e.bind(e,38959));case 10:return l=C.sent,d=l.sleep,C.next=14,Promise.resolve().then(e.bind(e,68666));case 14:return u=C.sent,E=u.default,C.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return f=C.sent,B=f.default,C.next=22,Promise.resolve().then(e.bind(e,27164));case 22:return y=C.sent,I=y.default,C.next=26,Promise.resolve().then(e.bind(e,25520));case 26:return x=C.sent,O=x.default,S=function(){return v.createElement(s,{locale:t},v.createElement(O,{search:{schema:E},table:{columns:B,showRowNumber:!0,sortMode:"local-all"},request:function(){var P=z()(L()().mark(function N(H){var U;return L()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,d();case 2:return U=I(H.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return P.apply(this,arguments)}return K}()}))},C.abrupt("return",{default:S});case 30:case"end":return C.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConfigProvider } from 'antd'
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

export default Demo`},antd:{type:"NPM",value:"6.6.3"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":M,"./helpers/columns-value-type.ts":D,antd:W,"antd/locale/zh_CN":g,"@examples/utils":j,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":D},renderOpts:{compile:function(){var o=z()(L()().mark(function s(){var n,t=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}},"examples-search-table-react-060-value-type-demo-1":{component:v.memo(v.lazy(z()(L()().mark(function o(){var a,s,n,t,l,d,u,E,f,B;return L()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return a=I.sent,s=a.sleep,I.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return n=I.sent,t=n.default,I.next=10,Promise.resolve().then(e.bind(e,27164));case 10:return l=I.sent,d=l.default,I.next=14,Promise.resolve().then(e.bind(e,25520));case 14:return u=I.sent,E=u.default,f=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u81EA\u5B9A\u4E49 Rate \u5B57\u7B26",dataIndex:"rate",valueType:function(O,S){return{type:"rate",character:S%2===0?"A":void 0}}}],B=function(){return v.createElement(E,{search:{schema:t},table:{columns:f,sortMode:"local-all"},request:function(){var O=z()(L()().mark(function b(C){var _;return L()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,s();case 2:return _=d(C.pageSize),K.abrupt("return",{data:_,total:100});case 4:case"end":return K.stop()}},b)}));function S(b){return O.apply(this,arguments)}return S}()})},I.abrupt("return",{default:B});case 19:case"end":return I.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":M,"@examples/utils":j,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M},renderOpts:{compile:function(){var o=z()(L()().mark(function s(){var n,t=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}},"examples-search-table-react-060-value-type-demo-2":{component:v.memo(v.lazy(z()(L()().mark(function o(){var a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C,_,P;return L()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,Promise.resolve().then(e.bind(e,41989));case 2:return a=N.sent,s=a.default,N.next=6,Promise.resolve().then(e.bind(e,24345));case 6:return n=N.sent,t=n.ConfigProvider,l=n.Tag,N.next=11,Promise.resolve().then(e.bind(e,67247));case 11:return d=N.sent,u=d.default,N.next=15,Promise.resolve().then(e.bind(e,38959));case 15:return E=N.sent,f=E.sleep,N.next=19,Promise.resolve().then(e.bind(e,68666));case 19:return B=N.sent,y=B.default,N.next=23,Promise.resolve().then(e.bind(e,27164));case 23:return I=N.sent,x=I.default,N.next=27,Promise.resolve().then(e.bind(e,25520));case 27:return O=N.sent,S=O.default,b=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u4EE3\u7801\u5757",dataIndex:"code",valueType:"code"},{title:"\u90E8\u7F72\u72B6\u6001",dataIndex:"deploy_status",valueType:"deploy-status"},{title:"\u90E8\u7F72\u72B6\u6001(Tag)",dataIndex:"deploy_status_tag",valueType:"deploy-status-tag"}],C={0:{text:"\u5F02\u5E38",style:{background:"red"},color:"red"},1:{text:"\u8FDB\u884C\u4E2D",style:{background:"blue"},color:"blue"},2:{text:"\u6210\u529F",style:{background:"green"},color:"green"}},_={code:function(U){var F=U.value;return v.createElement(s,{value:F,language:"js"})},"deploy-status":function(U){var F=U.value,Z=C[F];return v.createElement("div",null,v.createElement("span",{style:r()({display:"inline-block",width:8,height:8,borderRadius:"50%",marginRight:6},Z.style)}),Z.text)},"deploy-status-tag":function(U){var F=U.record,Z=F.deploy_status,Q=C[Z];return v.createElement(l,{color:Q.color},Q.text)}},P=function(){return v.createElement(t,{locale:u},v.createElement(S,{search:{schema:y},table:{columns:b,showRowNumber:!0,sortMode:"local-all",registerValueType:_},request:function(){var U=z()(L()().mark(function Z(Q){var J;return L()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,f();case 2:return J=x(Q.pageSize),ee.abrupt("return",{data:J,total:100});case 4:case"end":return ee.stop()}},Z)}));function F(Z){return U.apply(this,arguments)}return F}()}))},N.abrupt("return",{default:P});case 34:case"end":return N.stop()}},o)})))),asset:{type:"BLOCK",id:"examples-search-table-react-060-value-type-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
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

export default Demo`},root:{type:"NPM"},antd:{type:"NPM",value:"6.6.3"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":$,"./helpers/schema.ts":M,"@examples/components/SyntaxHighlighter":h,antd:W,"antd/locale/zh_CN":g,"@examples/utils":j,"@schema-render/search-table-react":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":M},renderOpts:{compile:function(){var o=z()(L()().mark(function s(){var n,t=arguments;return L()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(4019).then(e.bind(e,4019));case 2:return d.abrupt("return",(n=d.sent).default.apply(n,t));case 3:case"end":return d.stop()}},s)}));function a(){return o.apply(this,arguments)}return a}()}}}},55983:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return s}});var r=e(5574),p=e.n(r),L=e(97857),T=e.n(L),z=e(15009),v=e.n(z),i=e(99289),W=e.n(i),g=e(67294),j=e(8497),A=e(38959),$=e(25520),M=e(92114),D=e(68666),h=e(362),m=e(27164),o=e(6271),a=e(24345),s={"examples-search-table-react-100-columns-setting-demo-0":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return t=b.sent,l=t.sleep,b.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=b.sent,u=d.default,b.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=b.sent,f=E.default,b.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=b.sent,y=B.default,b.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return I=b.sent,x=I.default,O=function(){return g.createElement(x,{search:{schema:u},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var _=W()(v()().mark(function K(N){var H;return v()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,l();case 2:return H=y(N.pageSize),F.abrupt("return",{data:H,total:100});case 4:case"end":return F.stop()}},K)}));function P(K){return _.apply(this,arguments)}return P}()})},b.abrupt("return",{default:O});case 22:case"end":return b.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":D,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}},"examples-search-table-react-100-columns-setting-demo-1":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O,S;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return t=C.sent,l=t.sleep,C.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=C.sent,u=d.default,C.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=C.sent,f=E.default,C.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=C.sent,y=B.default,C.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return I=C.sent,x=I.default,O=f.map(function(_,P){var K=T()({},_);return P===0?K.fixed="left":P===f.length-1&&(K.fixed="right"),K}),S=function(){return g.createElement(x,{search:{schema:u},title:{showSetting:!0},table:{columns:O,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var P=W()(v()().mark(function N(H){var U;return v()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:return U=y(H.pageSize),Z.abrupt("return",{data:U,total:100});case 4:case"end":return Z.stop()}},N)}));function K(N){return P.apply(this,arguments)}return K}()})},C.abrupt("return",{default:S});case 23:case"end":return C.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":D,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}},"examples-search-table-react-100-columns-setting-demo-2":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O,S,b,C,_,P,K,N;return v()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=U.sent,l=t.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=U.sent,u=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return E=U.sent,f=E.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return B=U.sent,y=B.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return I=U.sent,x=I.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,S=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return b=U.sent,C=b.default,U.next=30,Promise.resolve().then(e.bind(e,25520));case 30:return _=U.sent,P=_.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),Q=p()(Z,2),J=Q[0],ne=Q[1];return g.createElement(P,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:J,items:K,onChange:ne}},table:{columns:J==="1"?y:x,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var ee=W()(v()().mark(function Ie(me){var ie,Pe;return v()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,u();case 2:return ie=J==="1"?S:C,Pe=ie(me.pageSize),xe.abrupt("return",{data:Pe,total:100});case 5:case"end":return xe.stop()}},Ie)}));function se(Ie){return ee.apply(this,arguments)}return se}()})},U.abrupt("return",{default:N});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":m,"./helpers/schema.ts":D,"./helpers/columns.ts":h,"./helpers/columns-value-type.ts":o,"./helpers/createDataSource.ts":M,react:R||(R=e.t(g,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}},"examples-search-table-react-100-columns-setting-demo-3":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O,S,b,C,_;return v()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=K.sent,l=t.useRef,K.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=K.sent,u=d.sleep,K.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return E=K.sent,f=E.default,K.next=14,Promise.resolve().then(e.bind(e,362));case 14:return B=K.sent,y=B.default,K.next=18,Promise.resolve().then(e.bind(e,92114));case 18:return I=K.sent,x=I.default,K.next=22,Promise.resolve().then(e.bind(e,25520));case 22:return O=K.sent,S=O.default,K.next=26,Promise.resolve().then(e.bind(e,24345));case 26:return b=K.sent,C=b.Button,_=function(){var H=l(null),U=function(){var Z;(Z=H.current)===null||Z===void 0||Z.openSettingModal()};return g.createElement(S,{ref:H,search:{schema:f},titleTop:function(){return g.createElement(C,{type:"primary",onClick:U},"\u6253\u5F00\u5217\u8BBE\u7F6E")},table:{columns:y,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]}},request:function(){var F=W()(v()().mark(function Q(J){var ne;return v()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,u();case 2:return ne=x(J.pageSize),se.abrupt("return",{data:ne,total:100});case 4:case"end":return se.stop()}},Q)}));function Z(Q){return F.apply(this,arguments)}return Z}()})},K.abrupt("return",{default:_});case 30:case"end":return K.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":D,"./helpers/createDataSource.ts":M,"./helpers/columns.ts":h,react:R||(R=e.t(g,2)),"@examples/utils":A,"@schema-render/search-table-react":$,antd:a,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}},"examples-search-table-react-100-columns-setting-demo-4":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O,S;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return t=C.sent,l=t.sleep,C.next=6,Promise.resolve().then(e.bind(e,68666));case 6:return d=C.sent,u=d.default,C.next=10,Promise.resolve().then(e.bind(e,362));case 10:return E=C.sent,f=E.default,C.next=14,Promise.resolve().then(e.bind(e,92114));case 14:return B=C.sent,y=B.default,C.next=18,Promise.resolve().then(e.bind(e,25520));case 18:return I=C.sent,x=I.default,O="save-setting-unique-id",S=function(){var P=function(){var N=W()(v()().mark(function H(U){return v()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:localStorage.setItem(O,JSON.stringify(U));case 3:case"end":return Z.stop()}},H)}));return function(U){return N.apply(this,arguments)}}(),K=function(){var N=W()(v()().mark(function H(){var U;return v()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,l();case 2:if(U=localStorage.getItem(O),!U){Z.next=5;break}return Z.abrupt("return",JSON.parse(U));case 5:case"end":return Z.stop()}},H)}));return function(){return N.apply(this,arguments)}}();return g.createElement(x,{search:{schema:u},title:{showSetting:!0},table:{columns:f,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},onSettingChanged:P,getSetting:K},request:function(){var N=W()(v()().mark(function U(F){var Z;return v()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,l();case 2:return Z=y(F.pageSize),J.abrupt("return",{data:Z,total:100});case 4:case"end":return J.stop()}},U)}));function H(U){return N.apply(this,arguments)}return H}()})},C.abrupt("return",{default:S});case 23:case"end":return C.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":M,"./helpers/schema.ts":D,"./helpers/columns.ts":h,"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}},"examples-search-table-react-100-columns-setting-demo-5":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O,S,b,C,_,P,K,N;return v()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=U.sent,l=t.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=U.sent,u=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return E=U.sent,f=E.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return B=U.sent,y=B.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return I=U.sent,x=I.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,S=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return b=U.sent,C=b.default,U.next=30,Promise.resolve().then(e.bind(e,25520));case 30:return _=U.sent,P=_.default,K=[{key:"1",label:"\u5206\u7C7B\u4E00"},{key:"2",label:"\u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),Q=p()(Z,2),J=Q[0],ne=Q[1],ee=function(){var Ie=W()(v()().mark(function me(ie,Pe){return v()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,u();case 2:localStorage.setItem(Pe,JSON.stringify(ie));case 3:case"end":return xe.stop()}},me)}));return function(ie,Pe){return Ie.apply(this,arguments)}}(),se=function(){var Ie=W()(v()().mark(function me(ie){var Pe;return v()().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,u();case 2:if(Pe=localStorage.getItem(ie),!Pe){xe.next=5;break}return xe.abrupt("return",JSON.parse(Pe));case 5:case"end":return xe.stop()}},me)}));return function(ie){return Ie.apply(this,arguments)}}();return g.createElement(P,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:J,items:K,onChange:ne}},table:{columns:J==="1"?y:x,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-tab-".concat(J),onSettingChanged:ee,getSetting:se},request:function(){var Ie=W()(v()().mark(function ie(Pe){var pe,xe;return v()().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Ae.next=2,u();case 2:return pe=J==="1"?S:C,xe=pe(Pe.pageSize),Ae.abrupt("return",{data:xe,total:100});case 5:case"end":return Ae.stop()}},ie)}));function me(ie){return Ie.apply(this,arguments)}return me}()})},U.abrupt("return",{default:N});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-vt.ts":m,"./helpers/schema.ts":D,"./helpers/columns.ts":h,"./helpers/columns-value-type.ts":o,"./helpers/createDataSource.ts":M,react:R||(R=e.t(g,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}},"examples-search-table-react-100-columns-setting-demo-6":{component:g.memo(g.lazy(W()(v()().mark(function n(){var t,l,d,u,E,f,B,y,I,x,O,S,b,C,_,P,K,N;return v()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return t=U.sent,l=t.useState,U.next=6,Promise.resolve().then(e.bind(e,38959));case 6:return d=U.sent,u=d.sleep,U.next=10,Promise.resolve().then(e.bind(e,68666));case 10:return E=U.sent,f=E.default,U.next=14,Promise.resolve().then(e.bind(e,362));case 14:return B=U.sent,y=B.default,U.next=18,Promise.resolve().then(e.bind(e,6271));case 18:return I=U.sent,x=I.default,U.next=22,Promise.resolve().then(e.bind(e,92114));case 22:return O=U.sent,S=O.default,U.next=26,Promise.resolve().then(e.bind(e,27164));case 26:return b=U.sent,C=b.default,U.next=30,Promise.resolve().then(e.bind(e,25520));case 30:return _=U.sent,P=_.default,K=[{key:"1",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E00"},{key:"2",label:"\u5F02\u6B65\u8868\u5934 \u2705 \u5206\u7C7B\u4E8C"}],N=function(){var Z=l("1"),Q=p()(Z,2),J=Q[0],ne=Q[1],ee=l([]),se=p()(ee,2),Ie=se[0],me=se[1],ie=function(){var xe=W()(v()().mark(function _e(Ae,We){return v()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return Ne.next=2,u();case 2:localStorage.setItem(We,JSON.stringify(Ae));case 3:case"end":return Ne.stop()}},_e)}));return function(Ae,We){return xe.apply(this,arguments)}}(),Pe=function(){var xe=W()(v()().mark(function _e(Ae){var We;return v()().wrap(function(Ne){for(;;)switch(Ne.prev=Ne.next){case 0:return Ne.next=2,u();case 2:if(We=localStorage.getItem(Ae),!We){Ne.next=5;break}return Ne.abrupt("return",JSON.parse(We));case 5:case"end":return Ne.stop()}},_e)}));return function(Ae){return xe.apply(this,arguments)}}(),pe=function(){var xe=W()(v()().mark(function _e(){return v()().wrap(function(We){for(;;)switch(We.prev=We.next){case 0:return We.next=2,u(500);case 2:return We.abrupt("return",J==="1"?y:x);case 3:case"end":return We.stop()}},_e)}));return function(){return xe.apply(this,arguments)}}();return g.createElement(P,{search:{schema:f},title:{showSetting:!0,tabs:{activeKey:J,items:K,onChange:ne}},table:{columns:Ie,showRowNumber:!0,actionItems:function(){return[{text:"\u7F16\u8F91"},{text:"\u8BE6\u60C5"}]},settingId:"save-setting-unique-id-async-".concat(J),onSettingChanged:ie,getSetting:Pe},request:function(){var xe=W()(v()().mark(function Ae(We){var ze,Ne,He;return v()().wrap(function(Ye){for(;;)switch(Ye.prev=Ye.next){case 0:return Ye.next=2,u();case 2:return ze=J==="1"?S:C,Ne=ze(We.pageSize),Ye.next=6,pe();case 6:return He=Ye.sent,me(He),Ye.abrupt("return",{data:Ne,total:100});case 9:case"end":return Ye.stop()}},Ae)}));function _e(Ae){return xe.apply(this,arguments)}return _e}()})},U.abrupt("return",{default:N});case 35:case"end":return U.stop()}},n)})))),asset:{type:"BLOCK",id:"examples-search-table-react-100-columns-setting-demo-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z},"./helpers/createDataSource-vt.ts":{type:"FILE",value:e(90887).Z},"./helpers/columns-value-type.ts":{type:"FILE",value:e(17261).Z},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/schema.ts":D,"./helpers/createDataSource-vt.ts":m,"./helpers/columns-value-type.ts":o,"./helpers/createDataSource.ts":M,"./helpers/columns.ts":h,react:R||(R=e.t(g,2)),"@examples/utils":A,"@schema-render/search-table-react":$,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":D,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-vt.ts":m,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-value-type.ts":o,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":M,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":h},renderOpts:{compile:function(){var n=W()(v()().mark(function l(){var d,u=arguments;return v()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(4019).then(e.bind(e,4019));case 2:return f.abrupt("return",(d=f.sent).default.apply(d,u));case 3:case"end":return f.stop()}},l)}));function t(){return n.apply(this,arguments)}return t}()}}}},47381:function(V,c,e){e.r(c),e.d(c,{demos:function(){return $}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(90749),v=e(25520),i=e(38959),W=e(74465),g=e(62244),j=e(34200),A=e(24534),$={"examples-search-table-react-700-locale-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function M(){var D,h,m,o,a,s,n,t,l,d,u,E,f;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,34200));case 2:return D=y.sent,h=D.default,y.next=6,Promise.resolve().then(e.bind(e,24534));case 6:return m=y.sent,o=m.default,y.next=10,Promise.resolve().then(e.bind(e,62244));case 10:return a=y.sent,s=a.default,y.next=14,Promise.resolve().then(e.bind(e,25520));case 14:return n=y.sent,t=n.default,y.next=18,Promise.resolve().then(e.bind(e,38959));case 18:return l=y.sent,d=l.sleep,y.next=22,Promise.resolve().then(e.bind(e,74465));case 22:return u=y.sent,E=u.default,f=function(){return T.createElement(t,{locale:E,search:{schema:h,labelWidth:"max-content"},title:{showRefresh:!0,showSetting:!0},table:{bordered:!0,columns:o,showRowNumber:!0,actionItems:function(){return[{text:"Edit"},{text:"View"},{text:"Delete",danger:!0}]},actionItemsColumnData:{width:150},summaryText:"Total"},request:function(){var x=L()(r()().mark(function S(b){var C,_;return r()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,d();case 2:return C=s(b.pageSize),_=C.reduce(function(N,H){return N+H.goods_price},0).toFixed(2),K.abrupt("return",{data:C,total:100,summaryData:{goods_price:_}});case 5:case"end":return K.stop()}},S)}));function O(S){return x.apply(this,arguments)}return O}()})},y.abrupt("return",{default:f});case 26:case"end":return y.stop()}},M)})))),asset:{type:"BLOCK",id:"examples-search-table-react-700-locale-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import schemaEn from './helpers/schema-en'
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

export default Demo`},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},root:{type:"NPM"},"./helpers/createDataSource-en.ts":{type:"FILE",value:e(45876).Z},"./helpers/schema-en.ts":{type:"FILE",value:e(36556).Z},"./helpers/columns-en.ts":{type:"FILE",value:e(71091).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource-en.ts":g,"./helpers/schema-en.ts":j,"./helpers/columns-en.ts":A,"@schema-render/search-table-react":v,"@examples/utils":i,"@schema-render/search-table-react/src/locale/en_US":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource-en.ts":g,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema-en.ts":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns-en.ts":A},renderOpts:{compile:function(){var M=L()(r()().mark(function h(){var m,o=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(4019).then(e.bind(e,4019));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,o));case 3:case"end":return s.stop()}},h)}));function D(){return M.apply(this,arguments)}return D}()}}}},81706:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(27490),p={}},62111:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(8906),p={}},44307:function(V,c,e){var R;e.r(c),e.d(c,{demos:function(){return M}});var r=e(15009),p=e.n(r),L=e(99289),T=e.n(L),z=e(67294),v=e(34451),i=e(38959),W=e(25520),g=e(24345),j=e(67247),A=e(92114),$=e(68666),M={"examples-search-table-react-900-table-editable-demo-0":{component:z.memo(z.lazy(T()(p()().mark(function D(){var h,m,o,a,s,n,t,l,d,u,E,f,B,y,I,x,O,S,b,C;return p()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return h=P.sent,m=h.useRef,o=h.useMemo,P.next=7,Promise.resolve().then(e.bind(e,38959));case 7:return a=P.sent,s=a.sleep,P.next=11,Promise.resolve().then(e.bind(e,68666));case 11:return n=P.sent,t=n.default,P.next=15,Promise.resolve().then(e.bind(e,92114));case 15:return l=P.sent,d=l.default,P.next=19,Promise.resolve().then(e.bind(e,25520));case 19:return u=P.sent,E=u.default,P.next=23,Promise.resolve().then(e.bind(e,24345));case 23:return f=P.sent,B=f.ConfigProvider,P.next=27,Promise.resolve().then(e.bind(e,67247));case 27:return y=P.sent,I=y.default,P.next=31,Promise.resolve().then(e.bind(e,24345));case 31:return x=P.sent,O=x.InputNumber,S=x.Button,b=x.message,C=function(){var N=m(null),H=o(function(){return[{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price",render:function(Z,Q){return z.createElement(O,{value:Z,onChange:function(ne){var ee;Q.goods_price=ne,(ee=N.current)===null||ee===void 0||ee.rerender()}})}},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]},[]),U=function(){var Z;console.log("dataSource:",(Z=N.current)===null||Z===void 0?void 0:Z.getDataSource()),b.success("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6700\u65B0\u6570\u636E")};return z.createElement(B,{locale:I},z.createElement(E,{ref:N,search:{schema:t},table:{columns:H},request:function(){var F=T()(p()().mark(function Q(J){var ne;return p()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,s();case 2:return ne=d(J.pageSize),se.abrupt("return",{data:ne,total:100});case 4:case"end":return se.stop()}},Q)}));function Z(Q){return F.apply(this,arguments)}return Z}()}),z.createElement(S,{type:"primary",onClick:U},"\u63D0\u4EA4"))},P.abrupt("return",{default:C});case 37:case"end":return P.stop()}},D)})))),asset:{type:"BLOCK",id:"examples-search-table-react-900-table-editable-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef, useMemo } from 'react'
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

export default Demo`},react:{type:"NPM",value:"18.3.1"},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},antd:{type:"NPM",value:"6.6.3"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/schema.ts":{type:"FILE",value:e(22452).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":A,"./helpers/schema.ts":$,react:R||(R=e.t(z,2)),"@examples/utils":i,"@schema-render/search-table-react":W,antd:g,"antd/locale/zh_CN":j,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":A,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/schema.ts":$},renderOpts:{compile:function(){var D=T()(p()().mark(function m(){var o,a=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,a));case 3:case"end":return n.stop()}},m)}));function h(){return D.apply(this,arguments)}return h}()}}}},13836:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(24311),p={}},9482:function(V,c,e){e.r(c),e.d(c,{demos:function(){return p}});var R=e(67294),r=e(49409),p={}},28629:function(V,c,e){e.r(c),e.d(c,{demos:function(){return j}});var R=e(15009),r=e.n(R),p=e(99289),L=e.n(p),T=e(67294),z=e(63710),v=e(38959),i=e(25520),W=e(92114),g=e(362),j={"examples-search-table-react-910-no-search-demo-0":{component:T.memo(T.lazy(L()(r()().mark(function A(){var $,M,D,h,m,o,a,s,n;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,38959));case 2:return $=l.sent,M=$.sleep,l.next=6,Promise.resolve().then(e.bind(e,362));case 6:return D=l.sent,h=D.default,l.next=10,Promise.resolve().then(e.bind(e,92114));case 10:return m=l.sent,o=m.default,l.next=14,Promise.resolve().then(e.bind(e,25520));case 14:return a=l.sent,s=a.default,n=function(){return T.createElement(s,{search:!1,table:{columns:h},request:function(){var u=L()(r()().mark(function f(){var B;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,M();case 2:return B=o(),I.abrupt("return",{data:B,total:100});case 4:case"end":return I.stop()}},f)}));function E(){return u.apply(this,arguments)}return E}()})},l.abrupt("return",{default:n});case 18:case"end":return l.stop()}},A)})))),asset:{type:"BLOCK",id:"examples-search-table-react-910-no-search-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { sleep } from '@examples/utils'
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

export default Demo`},root:{type:"NPM"},"@schema-render/search-table-react":{type:"NPM",value:"2.5.0"},"./helpers/createDataSource.ts":{type:"FILE",value:e(37343).Z},"./helpers/columns.ts":{type:"FILE",value:e(34569).Z}},entry:"index.tsx"},context:{"./helpers/createDataSource.ts":W,"./helpers/columns.ts":g,"@examples/utils":v,"@schema-render/search-table-react":i,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/createDataSource.ts":W,"/home/runner/work/schema-render/schema-render/examples/search-table-react/helpers/columns.ts":g},renderOpts:{compile:function(){var A=L()(r()().mark(function M(){var D,h=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(4019).then(e.bind(e,4019));case 2:return o.abrupt("return",(D=o.sent).default.apply(D,h));case 3:case"end":return o.stop()}},M)}));function $(){return A.apply(this,arguments)}return $}()}}}},41989:function(V,c,e){e.r(c),e.d(c,{default:function(){return T}});var R=e(42481),r=e(71353),p=e(85893),L=function(v){var i=v.value,W=v.language,g=W===void 0?"json":W,j=v.style;return(0,p.jsx)("div",{style:j,children:(0,p.jsx)(R.Z,{className:"example-hl",language:g,style:r.Z,children:g==="json"?JSON.stringify(i,null,2):i})})},T=L},78469:function(V,c,e){e.r(c);var R=e(25035),r=e(55241),p=e(93967),L=e.n(p),T=e(59868),z=e(85893),v=function(W){var g=W.body,j=W.schema,A=W.validator,$=W.required,M=W.prefixClassNames;return(0,z.jsxs)("div",{className:L()(M("item-layout-horizontal"),T.horizontal),children:[(0,z.jsxs)("div",{className:L()(M("item-main"),T.main),children:[(0,z.jsxs)("div",{className:L()(M("item-header"),T.header),children:[$&&(0,z.jsx)("span",{className:L()(M("item-mark"),T.mark),children:"*"}),(0,z.jsx)("span",{className:L()(M("item-title"),T.title),children:j.title}),!!j.titleDescription&&(0,z.jsx)(r.Z,{placement:"top",trigger:"hover",content:j.titleDescription,children:(0,z.jsx)(R.Z,{className:L()(M("item-title-tooltip"),T.titleTooltip)})})]}),(0,z.jsx)("div",{className:L()(M("item-body"),T.body),children:g})]}),(0,z.jsxs)("div",{className:L()(M("item-footer"),T.footer),children:[A.status==="error"&&!!A.message&&(0,z.jsx)("div",{className:L()(M("item-error-msg"),T.errorMsg),children:A.message}),!!j.description&&(0,z.jsx)("div",{className:L()(M("item-desc"),T.desc),children:j.description})]})]})};c.default=v},59868:function(V,c,e){e.r(c),e.d(c,{body:function(){return s},desc:function(){return t},errorMsg:function(){return l},footer:function(){return n},header:function(){return h},horizontal:function(){return M},main:function(){return D},mark:function(){return o},title:function(){return m},titleTooltip:function(){return a}});var R=e(68400),r=e.n(R),p=e(77525),L,T,z,v,i,W,g,j,A,$,M=(0,p.H)(L||(L=r()([""]))),D=(0,p.H)(T||(T=r()([`
  display: flex;
  align-items: center;
`]))),h=(0,p.H)(z||(z=r()([`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
`]))),m=(0,p.H)(v||(v=r()([`
  word-break: break-all;
`]))),o=(0,p.H)(i||(i=r()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),a=(0,p.H)(W||(W=r()([`
  margin-left: 4px;
  position: relative;
  top: 1px;
`]))),s=(0,p.H)(g||(g=r()([`
  flex-grow: 1;
`]))),n=(0,p.H)(j||(j=r()([`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`]))),t=(0,p.H)(A||(A=r()([`
  margin-top: 6px;
  color: #999;
`]))),l=(0,p.H)($||($=r()([`
  margin-top: 6px;
  color: #ff4d4f;
`])))},29298:function(V,c,e){e.r(c),e.d(c,{desc:function(){return h},errorMsg:function(){return m},footer:function(){return D},header:function(){return j},mark:function(){return $},title:function(){return A},titleTooltip:function(){return M}});var R=e(68400),r=e.n(R),p=e(77525),L,T,z,v,i,W,g,j=(0,p.H)(L||(L=r()([`
  margin-bottom: 8px;
`]))),A=(0,p.H)(T||(T=r()([`
  word-break: break-all;
`]))),$=(0,p.H)(z||(z=r()([`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`]))),M=(0,p.H)(v||(v=r()([`
  margin-left: 4px;
`]))),D=(0,p.H)(i||(i=r()([`
  word-break: break-all;

  &:empty {
    display: none;
  }
`]))),h=(0,p.H)(W||(W=r()([`
  margin-top: 8px;
  color: #999;
`]))),m=(0,p.H)(g||(g=r()([`
  margin-top: 8px;
  color: #ff4d4f;
`])))},2862:function(V,c,e){e.r(c);var R=e(97857),r=e.n(R),p=e(52423),L=e(56755),T=e(40478),z=e(92708),v=e(55742),i=e(85893),W={InputText:{component:function(j){var A,$=j.schema,M=j.value,D=j.disabled,h=j.readonly,m=j.onChange;return h?(0,i.jsx)("div",{children:M}):(0,i.jsx)(p.Z,r()(r()({allowClear:!0,placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:M!=null?M:"",disabled:D,onChange:function(a){return m(a.target.value)}}))}},InputNumber:{component:function(j){var A,$=j.schema,M=j.value,D=j.disabled,h=j.readonly,m=j.onChange;return h?(0,i.jsx)("div",{children:M}):(0,i.jsx)(L.Z,r()(r()({style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:M,onChange:function(a){return m(a!=null?a:void 0)},disabled:D}))}},TextArea:{component:function(j){var A,$=j.schema,M=j.value,D=j.disabled,h=j.readonly,m=j.onChange;return h?(0,i.jsx)("div",{children:M}):(0,i.jsx)(p.Z.TextArea,r()(r()({rows:3,placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:M!=null?M:"",onChange:function(a){return m(a.target.value)},disabled:D}))}},Password:{component:function(j){var A,$=j.schema,M=j.value,D=j.disabled,h=j.readonly,m=j.onChange;return h?(0,i.jsx)("div",{children:M}):(0,i.jsx)(p.Z.Password,r()(r()({placeholder:"\u8BF7\u8F93\u5165".concat((A=$.title)!==null&&A!==void 0?A:"")},$.renderOptions),{},{value:M!=null?M:"",onChange:function(a){return m(a.target.value)},disabled:D}))}},Switch:{component:function(j){var A=j.value,$=j.disabled,M=j.onChange;return(0,i.jsx)(T.Z,{checked:A,disabled:$,onChange:function(h){return M(h)}})}},Select:{component:function(j){var A,$,M,D=j.schema,h=j.value,m=j.disabled,o=j.readonly,a=j.onChange,s=(A=($=D.renderOptions)===null||$===void 0?void 0:$.options)!==null&&A!==void 0?A:[];if(o){var n=s.find(function(t){return t.value===h});return(0,i.jsx)("div",{children:n==null?void 0:n.label})}return(0,i.jsx)(z.default,r()(r()({allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9".concat((M=D.title)!==null&&M!==void 0?M:"")},D.renderOptions),{},{value:h,onChange:function(l){return a(l)},disabled:m}))}},Radio:{component:function(j){var A,$,M=j.schema,D=j.value,h=j.disabled,m=j.onChange,o=(A=($=M.renderOptions)===null||$===void 0?void 0:$.options)!==null&&A!==void 0?A:[];return(0,i.jsx)(v.ZP.Group,{value:D,disabled:h,onChange:function(s){return m(s.target.value)},children:o.map(function(a){return(0,i.jsx)(v.ZP,{value:a.value,disabled:a.disabled,children:a.label},a.value)})})}}};c.default=W},40644:function(V,c,e){e.r(c);var R=e(5574),r=e.n(R),p=e(25035),L=e(52162),T=e(55241),z=e(20439),v=e(67294),i=e(85893),W=function(j){var A=j.schema,$=j.path,M=j.objectStyle,D=(0,v.useState)(!1),h=r()(D,2),m=h[0],o=h[1],a=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:A.title}),!!A.titleDescription&&(0,i.jsx)(T.Z,{placement:"top",trigger:"hover",content:A.titleDescription,children:(0,i.jsx)(p.Z,{style:{marginLeft:4}})})]});return(0,i.jsx)(z.Z,{bordered:!1,ghost:!0,activeKey:String(m),onChange:function(){return o(!m)},children:(0,i.jsx)(z.Z.Panel,{header:a,style:{borderRadius:4,background:"rgba(0,0,0,0.03)"},children:(0,i.jsx)("div",{style:M,children:(0,i.jsx)(L.Z,{schema:A,path:$})})},"false")})};c.default={formItem:W}},33517:function(V,c,e){e.r(c);var R=e(25035),r=e(52162),p=e(55241),L=e(85893),T={background:"#efefef",fontWeight:"bold",padding:"7px 15px",borderRadius:4,marginBottom:15},z=function(i){var W=i.schema,g=i.path,j=i.objectStyle;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("div",{style:T,children:[(0,L.jsx)("span",{children:W.title}),!!W.titleDescription&&(0,L.jsx)(p.Z,{placement:"top",trigger:"hover",content:W.titleDescription,children:(0,L.jsx)(R.Z,{style:{marginLeft:4}})})]}),(0,L.jsx)("div",{style:j,children:(0,L.jsx)(r.Z,{schema:W,path:g})})]})};c.default={formItem:z}},47621:function(V,c,e){e.r(c),c.default={renderType:"Root",properties:{title:{renderType:"InputText",title:"\u4E00\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E00\u7EA7\u5185\u5BB9"},o1:{renderType:"Object",title:"\u4EC5\u52A0\u7C97\u6807\u9898\u7684\u5BF9\u8C61 Object",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}},o2:{renderType:"ObjectCollapse",title:"\u53EF\u6298\u53E0\u7684\u5BF9\u8C61 ObjectCollapse",titleDescription:"\u53EF\u4EE5\u52A0\u4E00\u4E9B\u8BF4\u660E",properties:{title:{renderType:"InputText",title:"\u4E8C\u7EA7\u6807\u9898",titleDescription:"\u6807\u9898\u7684\u4E00\u4E9B\u8BF4\u660E",required:!0},content:{renderType:"InputText",title:"\u4E8C\u7EA7\u5185\u5BB9"}}}}}},37418:function(V,c,e){e.r(c),e.d(c,{default:function(){return z}});var R=e(67294),r=e(85893),p={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #ececec",borderRadius:6,cursor:"pointer",fontSize:14},L=function(i){var W=i.value,g=i.sPath,j=i.onChange,A=function(){var M=String(Math.random()).slice(2,6),D={bank_id:"id_".concat(M),bank_account:"111222333".concat(M),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(M),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(M,"\u652F\u884C")};j(D[g],{extra:D})};return(0,r.jsx)("div",{style:p,onClick:A,children:W?(0,r.jsx)("div",{children:W}):(0,r.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})},T={component:L},z={BankSelect:T}},92419:function(V,c,e){e.r(c);var R=e(85893),r=[{label:"\u6210\u90FD",value:"chengdu"},{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u6DF1\u5733",value:"shenzhen"},{label:"\u5317\u4EAC",value:"beijing",disabled:!0}],p={renderType:"Root",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}},Switch:{title:"\u5F00\u5173\uFF08Switch\uFF09",renderType:"Switch"},SwitchBox:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE"}},SwitchBoxWithRightContent:{title:"\u5F00\u5173\uFF08SwitchBox\uFF09",renderType:"SwitchBox",renderOptions:{text:"\u540C\u610F\u5E73\u53F0\u7528\u6237\u5185\u5BB9\u534F\u8BAE",rightExtraContent:function(T){var z=T.value,v=T.disabled,i=T.readonly;return(0,R.jsxs)("span",{style:{color:z?"green":"red"},children:[z?"\u5DF2\u540C\u610F":"\u672A\u540C\u610F",v&&"\uFF08\u7981\u7528\uFF09",i&&"\uFF08\u53EA\u8BFB\uFF09"]})}}},TextArea:{title:"\u591A\u884C\u6587\u672C\uFF08TextArea\uFF09",renderType:"TextArea",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},Password:{title:"\u5BC6\u7801\u6846\uFF08Password\uFF09",renderType:"Password",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},Select:{title:"\u5355\u9879\u9009\u62E9\u5668\uFF08Select\uFF09",renderType:"Select",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:r,mode:"multiple"}},SelectMultiple:{title:"\u591A\u9879\u9009\u62E9\u5668\uFF08SelectMultiple\uFF09",renderType:"SelectMultiple",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u5185\u5BB9",options:r}},Radio:{title:"\u5355\u9009\u6846\uFF08Radio\uFF09",renderType:"Radio",renderOptions:{options:r}},Checkbox:{title:"\u591A\u9009\u6846\uFF08Checkbox\uFF09",renderType:"Checkbox",renderOptions:{options:r}},Rate:{title:"\u8BC4\u5206\uFF08Rate\uFF09",renderType:"Rate"},DatePicker:{title:"\u65E5\u671F\uFF08DatePicker\uFF09",renderType:"DatePicker",renderOptions:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",format:"YYYY\u5E74MM\u6708DD\u65E5",outputFormat:"YYYY-MM-DD"}},DateRangePicker:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}},DateRangePickerObjectStruct:{title:"\u65E5\u671F\u8303\u56F4\uFF08DateRangePicker\uFF09-\u5BF9\u8C61\u683C\u5F0F\u503C",renderType:"DateRangePicker",renderOptions:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],valueStruct:"object",valueFieldMap:{start:"start_time",end:"end_time"}}},Description:{title:"\u7EAF\u5C55\u793A\uFF08Description\uFF09",renderType:"Description"},Object:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF08Object\uFF09",renderType:"Object",properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectRightIcon:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u7BAD\u5934\u5728\u53F3\u8FB9",renderType:"Object",renderOptions:{headerOptions:{expandIconPosition:"end"}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNotCollapse:{title:"\u5BF9\u8C61\u5BB9\u5668\uFF0C\u4E0D\u5141\u8BB8\u6298\u53E0",renderType:"Object",renderOptions:{headerOptions:{collapsible:"icon"},panelOptions:{showArrow:!1}},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}},ObjectNull:{title:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderType:"ObjectNull",style:{border:"1px solid #d9d9d9",padding:10,borderRadius:6},properties:{InputText:{title:"\u5355\u884C\u6587\u672C\uFF08InputText\uFF09",renderType:"InputText",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},InputNumber:{title:"\u6570\u5B57\uFF08InputNumber\uFF09",renderType:"InputNumber",description:"\u6765\u81EA\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF08ObjectNull\uFF09",renderOptions:{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}}}}}};c.default=p},97609:function(V,c,e){e.r(c),e.d(c,{builtinRenderers:function(){return T}});var R=e(68400),r=e.n(R),p=e(77525),L,T=(0,p.H)(L||(L=r()([`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
`])))},36641:function(V,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",align:"center"},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code",align:"center"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",align:"center"},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type",align:"center"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",align:"center"},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status",align:"center"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator",align:"center"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",align:"center"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",align:"center"},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category",align:"center"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",align:"center"}];c.default=R},77095:function(V,c,e){e.r(c),e.d(c,{default:function(){return p}});var R=e(27484),r=e.n(R);function p(){for(var L=[],T=0;T<10;T++){var z=String(Math.random()).slice(2,6),v=Math.random()>.5?1:2,i=r()().format("YYYY-MM-DD HH:mm:ss");L.push({key:Math.random(),supplier_name:"".concat(z,"\u6709\u9650\u516C\u53F8"),supplier_code:z,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:i,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:v===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:v===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:i})}return L}},35719:function(V,c,e){e.r(c);var R=e(67294),r=e(85893),p={display:"flex",alignItems:"center",padding:"4px 10px",height:32,boxSizing:"border-box",border:"1px solid #d9d9d9",borderRadius:6,cursor:"pointer",fontSize:14},L=function(z){var v=z.value,i=z.sPath,W=z.onChange,g=function(){var A=String(Math.random()).slice(2,6),$={bank_id:"id_".concat(A),bank_account:"111222333".concat(A),bank_name:"\u62DB\u8D22\u732B\u94F6\u884C".concat(A),bank_branch_name:"\u62DB\u8D22\u732B\u6210\u90FD".concat(A,"\u652F\u884C")};W($[i],{extra:$})};return(0,r.jsx)("div",{style:p,onClick:g,children:v?(0,r.jsx)("div",{children:v}):(0,r.jsx)("div",{style:{color:"#c0c0c0"},children:"\u9009\u62E9\u94F6\u884C\u8D26\u6237"})})};c.default={component:L}},57864:function(V,c,e){e.r(c);var R=e(52162),r=e(85893),p=function(T){var z=T.schema,v=T.path,i=T.objectStyle;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"section-title",children:z.title}),(0,r.jsx)("div",{style:i,children:(0,r.jsx)(R.Z,{schema:z,path:v})})]})};c.default={formItem:p}},9680:function(V,c,e){e.r(c);var R=e(85893),r=function(L){var T=L.schema;return(0,R.jsx)("div",{className:"section-title",children:T.title})};c.default={formItem:r}},24534:function(V,c,e){e.r(c);var R=[{title:"Supplier Name",dataIndex:"supplier_name",width:150,fixed:"left"},{title:"Supplier Code",dataIndex:"supplier_code",width:150},{title:"Description",dataIndex:"description",valueType:function(){return{type:"long-text-modal",maxLength:20}}},{title:"Bill No",dataIndex:"bill_no",width:130},{title:"Bill Type",dataIndex:"bill_type"},{title:"Bill Date",dataIndex:"bill_date",width:120},{title:"Bill Status",dataIndex:"bill_status"},{title:"Operator",dataIndex:"operator"},{title:"Goods Name",dataIndex:"goods_name",width:130},{title:"Goods Price",dataIndex:"goods_price"},{title:"Goods Code",dataIndex:"goods_code",width:130},{title:"Goods Category",dataIndex:"goods_category"},{title:"Goods Date",dataIndex:"goods_date",width:120,fixed:"right"}];c.default=R},23786:function(V,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u4FE1\u606F",children:[{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"}]},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u4FE1\u606F",children:[{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}]}];c.default=R},6271:function(V,c,e){e.r(c);var R=[{title:"\u5E38\u89C4\u6807\u9898",dataIndex:"title"},{title:"\u8BC4\u7EA7(rate)",dataIndex:"rate",valueType:"rate"},{title:"\u4EE3\u7801\u5757(code)",dataIndex:"code",valueType:"code"},{title:"\u5343\u5206\u4F4D\u6570\u5B57(comma-number)",dataIndex:"comma_number",valueType:"comma-number"},{title:"\u767E\u5206\u6BD4(percent)",dataIndex:"percent",valueType:"percent"},{title:"\u957F\u6587\u6848(long-text)",dataIndex:"long_text",valueType:function(p,L){return{type:"long-text",maxLength:15,placement:L%3===0?"start":L%3===1?"middle":"end",tooltipProps:{color:L%2?"#1677ff":"#000"}}},width:270},{title:"\u957F\u6587\u6848(long-text-modal)",dataIndex:"long_text_modal",valueType:function(p,L){return{type:"long-text-modal",maxLength:20,btnText:L%2?"\u67E5\u770B\u8BE6\u60C5":"\u5168\u90E8",modalProps:{title:L%2?"\u8BE6\u60C5":"\u5168\u90E8",width:500},modalContent:L%2?"\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684 modal \u5185\u5BB9\uFF0C\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u653E\u7F6E\u4EFB\u4F55 React \u7EC4\u4EF6\u6216\u5143\u7D20\u3002":void 0}},width:270},{title:"\u72B6\u6001\u5F00\u5173(switch)",dataIndex:"switch_status",valueType:"switch"},{title:"\u6807\u7B7E(tags)",dataIndex:"tags",valueType:"tags",width:140},{title:"\u6807\u7B7E(tags with options)",dataIndex:"tags2",valueType:function(){return{type:"tags",options:[{label:"\u82F9\u679C",value:"apple",color:"cyan"},{label:"\u6843\u5B50",value:"peach",color:"pink"},{label:"\u9999\u8549",value:"banana",color:"orange"}]}},width:140},{title:"\u56FE\u7247(images)",dataIndex:"image_list",valueType:"images"}];c.default=R},362:function(V,c,e){e.r(c);var R=[{title:"\u4F9B\u5E94\u5546\u540D\u79F0",dataIndex:"supplier_name",width:130},{title:"\u4F9B\u5E94\u5546\u7F16\u7801",dataIndex:"supplier_code"},{title:"\u5355\u636E\u7F16\u53F7",dataIndex:"bill_no",width:130},{title:"\u5355\u636E\u7C7B\u578B",dataIndex:"bill_type"},{title:"\u5355\u636E\u65E5\u671F",dataIndex:"bill_date",width:120},{title:"\u5355\u636E\u72B6\u6001",dataIndex:"bill_status"},{title:"\u5236\u5355\u4EBA",dataIndex:"operator"},{title:"\u5546\u54C1\u540D\u79F0",dataIndex:"goods_name",width:130},{title:"\u5546\u54C1\u4EF7\u683C(\u5143)",dataIndex:"goods_price"},{title:"\u5546\u54C1\u7F16\u7801",dataIndex:"goods_code",width:130},{title:"\u5546\u54C1\u5206\u7C7B",dataIndex:"goods_category"},{title:"\u5546\u54C1\u65E5\u671F",dataIndex:"goods_date",width:120}];c.default=R},62244:function(V,c,e){e.r(c),e.d(c,{default:function(){return p}});var R=e(27484),r=e.n(R);function p(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,T=[],z=0;z<L;z++){var v=String(Math.random()).slice(2,6),i=Math.random()>.5?1:2,W=r()().format("DD/MM/YYYY HH:mm:ss"),g="id_".concat(z);T.push({key:g,id:g,supplier_name:"".concat(v," Co.,Ltd."),supplier_code:v,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"Purchase Order":"Return Order",bill_date:W,bill_status:Math.random()>.5?"Submitted":"To be submitted",operator:Math.random()>.5?"Tom":"Lily",goods_name:i===1?"10 red roses":"Live bass",goods_code:"G".concat(Date.now()),goods_category:i===1?"Fruits & Flowers":"Aquatic Products",goods_date:W,goods_price:i===1?19.9:22.8,description:"SearchTable is a conditional search table component based on the Search + Antd Table encapsulation; It is often used for data retrieval, display and operation of background management systems."})}return T}},27164:function(V,c,e){e.r(c),e.d(c,{default:function(){return r}});function R(p,L){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,z=Math.random()*(L-p)+p;return T?Math.floor(z):z}function r(){for(var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,L=[],T=0;T<p;T++){var z="id_".concat(T);L.push({key:z,id:z,title:"".concat(String(Math.random()).slice(2,6),"\u6807\u9898"),rate:R(0,5),code:`
function rangeNumber(min, max) {
  return Math.random() * (max - min) + min
}
      `.trim(),comma_number:Math.random()>.4?R(1e3,1e5):R(0,1e3),percent:R(0,100).toFixed(2),switch_status:Math.random()>.5,tags:Math.random()>.5?"\u5F20\u4E09":["\u674E\u56DB","\u738B\u4E94"],tags2:Math.random()>.5?"apple":["peach","banana"],image_list:Math.random()>.5?"https://raw.githubusercontent.com/Barrior/assets/main/chrome-logo.svg":["https://raw.githubusercontent.com/Barrior/assets/main/smiling-face.gif","https://raw.githubusercontent.com/Barrior/assets/main/gift.png"],deploy_status:R(0,3),long_text:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",long_text_modal:"SearchTable \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002"})}return L}},92114:function(V,c,e){e.r(c),e.d(c,{default:function(){return p}});var R=e(27484),r=e.n(R);function p(){for(var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,T=arguments.length>1?arguments[1]:void 0,z=[],v=0;v<L;v++){var i=String(Math.random()).slice(2,6),W=Math.random()>.5?1:2,g=r()().format("YYYY-MM-DD HH:mm:ss"),j="id_".concat(v);z.push({key:j,id:j,supplier_name:"".concat(i,"\u6709\u9650\u516C\u53F8"),supplier_code:i,bill_no:"B".concat(Date.now()),bill_type:Math.random()>.5?"\u91C7\u8D2D\u5355":"\u9000\u8D27\u5355",bill_date:g,bill_status:Math.random()>.5?"\u5DF2\u63D0\u4EA4":"\u5F85\u63D0\u4EA4",operator:Math.random()>.5?"\u5F20\u4E09":"\u674E\u56DB",goods_name:W===1?"\u7EA2\u73AB\u747010\u679D":"\u9C9C\u6D3B\u9C88\u9C7C",goods_code:"G".concat(Date.now()),goods_category:W===1?"\u6C34\u679C\u9C9C\u82B1":"\u6D77\u9C9C\u6C34\u4EA7",goods_date:g,goods_price:W===1?19.9:22.8})}return T&&z.sort(function(A,$){var M=String(A[T.sort_field]),D=String($[T.sort_field]);return T.sort_order==="ascend"?M.localeCompare(D):D.localeCompare(M)}),z}},34200:function(V,c,e){e.r(c);var R={renderType:"Root",properties:{supplier_name:{title:"Supplier Name",renderType:"InputText"},supplier_code:{title:"Supplier Code",renderType:"InputText"},bill_no:{title:"Bill No",renderType:"InputText"},bill_type:{title:"Bill Type",renderType:"Select",renderOptions:{options:[{label:"Purchase Order",value:1},{label:"Inbound Order",value:2},{label:"Return Order",value:3}]}},bill_date:{title:"Bill Date",renderType:"DateRangePicker"},bill_status:{title:"Bill Status",renderType:"Select",renderOptions:{options:[{label:"submitted",value:1},{label:"pending submit",value:2},{label:"pending approval",value:3}]}},operator:{title:"Operator",renderType:"InputText"},goods_name:{title:"Goods Name",renderType:"InputText"},goods_code:{title:"Goods Code",renderType:"InputText"},goods_category:{title:"Goods Category",renderType:"Select",renderOptions:{options:[{label:"Fruits & Flowers",value:1},{label:"Aquatic Products",value:2},{label:"Grains & Oils & Seasoning",value:3}]}}}};c.default=R},68666:function(V,c,e){e.r(c);var R={renderType:"Root",properties:{supplier_name:{title:"\u4F9B\u5E94\u5546\u540D\u79F0",renderType:"InputText"},supplier_code:{title:"\u4F9B\u5E94\u5546\u7F16\u7801",renderType:"InputText"},bill_no:{title:"\u5355\u636E\u7F16\u53F7",renderType:"InputText"},bill_type:{title:"\u5355\u636E\u7C7B\u578B",renderType:"Select",renderOptions:{options:[{label:"\u91C7\u8D2D\u5355",value:1},{label:"\u5165\u5E93\u5355",value:2},{label:"\u9000\u8D27\u5355",value:3}]}},bill_date:{title:"\u5355\u636E\u65E5\u671F",renderType:"DateRangePicker"},bill_status:{title:"\u5355\u636E\u72B6\u6001",renderType:"Select",renderOptions:{options:[{label:"\u5DF2\u63D0\u4EA4",value:1},{label:"\u5F85\u63D0\u4EA4",value:2},{label:"\u5F85\u5BA1\u6279",value:3}]}},operator:{title:"\u5236\u5355\u4EBA",renderType:"InputText"},goods_name:{title:"\u5546\u54C1\u540D\u79F0",renderType:"InputText"},goods_code:{title:"\u5546\u54C1\u7F16\u7801",renderType:"InputText"},goods_category:{title:"\u5546\u54C1\u5206\u7C7B",renderType:"Select",renderOptions:{options:[{label:"\u6C34\u679C\u9C9C\u82B1",value:1},{label:"\u6D77\u9C9C\u6C34\u4EA7",value:2},{label:"\u7CAE\u6CB9\u8C03\u5473",value:3}]}}}};c.default=R},77525:function(V,c,e){e.d(c,{H:function(){return p}});var R=e(80834),r=(0,R.Z)({key:"schema-render"}),p=r.css},38959:function(V,c,e){e.r(c),e.d(c,{sleep:function(){return R}});function R(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(p){return setTimeout(p,r)})}},57558:function(V,c,e){var R=e(67294),r=(0,R.createContext)({});c.Z=r},57547:function(V,c,e){e.d(c,{Z:function(){return h}});var R=e(12444),r=e.n(R),p=e(72004),L=e.n(p),T=e(25098),z=e.n(T),v=e(31996),i=e.n(v),W=e(26037),g=e.n(W),j=e(9783),A=e.n(j),$=e(67294),M=e(28e3),D=e(85893),h=function(m){i()(a,m);var o=g()(a);function a(){var s;r()(this,a);for(var n=arguments.length,t=new Array(n),l=0;l<n;l++)t[l]=arguments[l];return s=o.call.apply(o,[this].concat(t)),A()(z()(s),"state",{hasError:!1,error:Error()}),s}return L()(a,[{key:"getFallback",value:function(){var n,t=this.state.error,l=this.props.catchErrorTips;return l==="silent"?null:(0,M.mf)(l)?l(t):(0,D.jsxs)("div",{style:{color:"red"},children:["[ErrorBoundary] ",(n=t==null?void 0:t.stack)!==null&&n!==void 0?n:String(t)]})}},{key:"render",value:function(){return this.state.hasError?this.getFallback():this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0,error:n}}}]),a}($.Component)},95399:function(V,c,e){e.d(c,{SY:function(){return p},f1:function(){return r},r6:function(){return R}});var R=function(L){return L.success="success",L.warning="warning",L.error="error",L}({}),r=[R.success,R.warning,R.error],p=function(L){return L.normal="normal",L.autoFill="autoFill",L.autoFit="autoFit",L}({})},16223:function(V,c,e){var R=e(67294),r=e(38812),p=function(T,z){var v=(0,r.Z)(T);(0,R.useEffect)(function(){v.current()},z)};c.Z=p},56432:function(V,c,e){var R=e(67294),r=e(23060),p=e(38812),L=e(37091);function T(z,v){var i,W=(0,p.Z)(z),g=(i=v==null?void 0:v.wait)!==null&&i!==void 0?i:1e3,j=(0,R.useMemo)(function(){return(0,r.Ds)(function(){return W.current.apply(W,arguments)},g)},[]);return(0,L.Z)(function(){return j.cancel()}),{run:j,cancel:j.cancel}}c.Z=T},4559:function(V,c,e){e.d(c,{Z:function(){return L}});var R=e(5574),r=e.n(R),p=e(67294);function L(){var T=(0,p.useReducer)(function(W){return W+1},0),z=r()(T,2),v=z[0],i=z[1];return{forceUpdate:i}}},38812:function(V,c,e){var R=e(67294);function r(p){var L=(0,R.useRef)(p);return L.current=p,L}c.Z=r},24317:function(V,c,e){e.d(c,{Z:function(){return r}});var R=e(67294);function r(p){var L=(0,R.useRef)(p),T=(0,R.useRef)();return L.current=(0,R.useMemo)(function(){return p},[p]),T.current||(T.current=function(){for(var z=arguments.length,v=new Array(z),i=0;i<z;i++)v[i]=arguments[i];return L.current.apply(this,v)}),T.current}},85908:function(V,c,e){var R=e(67294),r=function(L){(0,R.useEffect)(function(){return L()},[])};c.Z=r},90808:function(V,c,e){e.d(c,{Z:function(){return p}});var R=e(67294),r=e(57558);function p(){var L=(0,R.useContext)(r.Z);return L}},37091:function(V,c,e){var R=e(67294),r=e(38812),p=function(T){var z=(0,r.Z)(T);(0,R.useEffect)(function(){return function(){z.current()}},[])};c.Z=p},74072:function(V,c,e){e.r(c),e.d(c,{RendererDistributor:function(){return P.Z},RendererExecutor:function(){return K.Z},RendererIterator:function(){return d.Z},default:function(){return U},useAsyncEffect:function(){return O.Z},useCoreValue:function(){return M},useDebounceFn:function(){return S.Z},useForceUpdate:function(){return g.Z},useLatest:function(){return b.Z},useMemoizedFn:function(){return j.Z},useMounted:function(){return C.Z},useUnmount:function(){return _.Z},utils:function(){return R}});var R={};e.r(R),e.d(R,{classNames:function(){return E.Z},classNamesWithPrefix:function(){return z.Rk},cloneDeep:function(){return W.Xh},debounce:function(){return W.Ds},dropRight:function(){return W.j7},find:function(){return W.sE},get:function(){return W.U2},hasOwnProperty:function(){return z.nr},isArray:function(){return v.kJ},isBoolean:function(){return v.jn},isFunction:function(){return v.mf},isMatch:function(){return W.BD},isNil:function(){return v.kK},isNull:function(){return v.Ft},isNumber:function(){return v.hj},isObject:function(){return v.Kn},isPlainObject:function(){return v.PO},isString:function(){return v.HD},isUndefined:function(){return v.o8},logger:function(){return N.Z},mapKeys:function(){return W.Cw},omit:function(){return W.CE},pick:function(){return W.ei},positionedOffset:function(){return o},set:function(){return W.t8},templateCompiled:function(){return z.dr},toLower:function(){return W.t$},traverseSchema:function(){return H.Z},typeChecking:function(){return v.DN}});var r=e(97857),p=e.n(r),L=e(67294),T=e(57547),z=e(52038),v=e(28e3),i=e(49552),W=e(23060),g=e(4559),j=e(24317),A=function(){var Z=(0,L.useRef)(!1);return(0,L.useEffect)(function(){return Z.current=!1,function(){Z.current=!0}},[]),Z},$=A;function M(F){var Z,Q=(0,L.useRef)((Z=F.defaultValue)!==null&&Z!==void 0?Z:{}),J=$(),ne=(0,g.Z)(),ee=ne.forceUpdate,se=(0,z.nr)(F,"value");if(se){var Ie;Q.current=(Ie=F.value)!==null&&Ie!==void 0?Ie:{}}var me=(0,j.Z)(function(_e,Ae){if(!J.current){var We,ze,Ne,He=(0,i.P)(Ae.path),Ge=p()(p()({},Ae),{},{sPath:He}),Ye=(We=F.watch)===null||We===void 0?void 0:We[He];(0,v.mf)(Ye)&&Ye(_e,Ge),Q.current=_e,se||ee(),(ze=F.onItemChange)===null||ze===void 0||ze.call(F,Ge),(Ne=F.onChange)===null||Ne===void 0||Ne.call(F,_e,Ge)}}),ie=(0,j.Z)(function(_e){var Ae=(0,W.t8)(p()({},Q.current),_e.path,_e.value);me(Ae,_e)}),Pe=(0,j.Z)(function(){return Q.current}),pe=(0,j.Z)(function(_e){me(_e,{path:[],value:void 0})}),xe=(0,j.Z)(function(){pe({})});return{value:Q.current,valueRef:Q,onChange:ie,getValue:Pe,setValue:pe,resetValue:xe}}var D=e(95399),h=["320px","1fr"];function m(F){var Z=F.layout,Q=F.layoutMinMax,J=F.layoutColumnGap,ne=F.layoutRowGap,ee=Q==null?void 0:Q[0],se=Q==null?void 0:Q[1],Ie=(0,L.useMemo)(function(){if(Z===D.SY.normal)return"repeat(24, 1fr)";var ie=Z===D.SY.autoFill?"auto-fill":"auto-fit",Pe=(0,i.e)(ee!=null?ee:h[0]),pe=(0,i.e)(se!=null?se:h[1]);return"repeat(".concat(ie,", minmax(").concat(Pe,", ").concat(pe,"))")},[Z,ee,se]),me={display:"grid",gridTemplateColumns:Ie,columnGap:J,rowGap:ne};return me}function o(F,Z){if(!F||!Z)return{left:0,top:0};for(var Q=0,J=0,ne=F;ne&&ne!==Z;)Q+=ne.offsetLeft,J+=ne.offsetTop,ne=ne.offsetParent;return{left:Q,top:J}}var a=e(36578);function s(F,Z){var Q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(F){var J=Q.positionedElement,ne=Q.xAxis,ee=Q.yAxis,se=Q.behavior,Ie=se===void 0?"smooth":se,me=Q.gap,ie=me===void 0?0:me,Pe=J||Z;if(Pe){var pe=o(F,Pe);Pe.scrollTo({left:ne===!1?void 0:pe.left+ie,top:ee===!1?void 0:pe.top+ie,behavior:Ie})}}}function n(F){var Z=F.ref,Q=F.rootElementRef,J=F.rootContextRef,ne=F.getValue,ee=F.setValue,se=F.resetValue,Ie=(0,j.Z)(function(){return(0,a.Ze)((0,W.ei)(J.current,"rootSchema","rootValue","locale","disabled","readonly","renderers","rendererStorage","validators","userCtx"))}),me=(0,j.Z)(function(xe){var _e,Ae=(_e=J.current)===null||_e===void 0?void 0:_e.rendererStorage;if(Ae&&xe){var We=(0,v.kJ)(xe)?(0,i.P)(xe):xe;return Ae[We]}}),ie=(0,j.Z)(function(xe){var _e,Ae=(_e=J.current)===null||_e===void 0?void 0:_e.rendererStorage;if(Ae){var We=xe?(0,v.HD)(xe)?[xe]:xe:Object.keys(Ae);We.forEach(function(ze){var Ne;(Ne=Ae[ze])===null||Ne===void 0||Ne.setValidatorState({status:D.r6.success})})}}),Pe=(0,j.Z)(function(){return Q.current}),pe=(0,j.Z)(function(xe,_e){var Ae;return s((Ae=me(xe))===null||Ae===void 0?void 0:Ae.getRootElement(),Pe(),_e)});(0,L.useImperativeHandle)(Z,function(){return{validate:Ie,resetError:ie,setValue:ee,resetValue:se,getValue:ne,getRootElement:Pe,scrollTo:pe,findItem:me}},[])}var t=e(39214),l=e(57558),d=e(52162),u=e(97192),E=e(18474),f=e(85893),B={prefixCls:"schema-render",layout:"normal",layoutColumnGap:10,layoutRowGap:15,layoutMinMax:h,disabled:!1,readonly:!1,validators:{},userCtx:{}},y=(0,L.forwardRef)(function(F,Z){u.Z.falsy(F.schema,"missing schema."),u.Z.falsy(F.itemLayout,"missing itemLayout.");var Q=p()(p()({},B),F),J=(0,L.useRef)(null),ne=(0,L.useRef)({}),ee=M(Q),se=ee.value,Ie=ee.onChange,me=ee.getValue,ie=ee.setValue,Pe=ee.resetValue,pe=(0,L.useMemo)(function(){return p()(p()({},t.Z),Q.locale)},[Q.locale]),xe=(0,L.useMemo)(function(){return(0,W.Cw)(Q.renderers,function(We,ze){return ze.toLowerCase()})},[Q.renderers]),_e=m(Q),Ae=ne.current=p()(p()({},(0,W.ei)(Q,"disabled","readonly","prefixCls","layout","itemLayout","userCtx","validators","catchErrorTips")),{},{objectStyle:_e,renderers:xe,rootSchema:Q.schema,rootValue:se,locale:pe,rendererStorage:{},onChange:Ie,prefixClassNames:function(){for(var ze=arguments.length,Ne=new Array(ze),He=0;He<ze;He++)Ne[He]=arguments[He];return z.Rk.apply(void 0,[Q.prefixCls].concat(Ne))}});return n({ref:Z,rootElementRef:J,rootContextRef:ne,getValue:me,setValue:ie,resetValue:Pe}),(0,f.jsx)(l.Z.Provider,{value:Ae,children:(0,f.jsx)("div",{className:(0,E.Z)(Ae.prefixCls,Q.className,{"is-disabled":Ae.disabled,"is-readonly":Ae.readonly}),ref:J,style:p()(p()({position:"relative"},_e),Q.style),children:(0,f.jsx)(d.Z,{schema:Ae.rootSchema,path:[]})})})}),I=(0,L.forwardRef)(function(F,Z){return(0,f.jsx)(T.Z,{catchErrorTips:F.catchErrorTips,children:(0,f.jsx)(y,p()(p()({},F),{},{ref:Z}))})}),x=I,O=e(16223),S=e(56432),b=e(38812),C=e(85908),_=e(37091),P=e(82535),K=e(94963),N=e(93047),H=e(44081),U=x},78484:function(V,c,e){e.r(c),c.default={localeName:"en-us",validation:{required:"${label} is required",typeError:"Data format error, expect ${type} type"}}},39214:function(V,c){c.Z={localeName:"zh-cn",validation:{required:"${label}\u662F\u5FC5\u586B\u9879",typeError:"\u6570\u636E\u683C\u5F0F\u9519\u8BEF\uFF0C\u671F\u671B ${type} \u7C7B\u578B"}}},82535:function(V,c,e){var R=e(97857),r=e.n(R),p=e(90808),L=e(97192),T=e(8465),z=e(94963),v=e(85893),i=function(g){var j=(0,p.Z)(),A=g.schema;L.Z.falsy(A,"schema is required in RendererDistributor Props.");var $=(0,T.j)(j.renderers,A.renderType);return $?(0,v.jsx)(z.Z,r()(r()({},g),{},{renderer:$})):null};c.Z=i},94963:function(V,c,e){var R=e(15009),r=e.n(R),p=e(97857),L=e.n(p),T=e(99289),z=e.n(T),v=e(5574),i=e.n(v),W=e(67294),g=e(57547),j=e(95399),A=e(56432),$=e(24317),M=e(90808),D=e(18474),h=e(49552),m=e(23060),o=e(36578),a=e(85893),s=function(t){var l=t.schema,d=t.path,u=t.renderer,E=t.gridColumn,f=(0,M.Z)(),B=(0,W.useState)({status:j.r6.success}),y=i()(B,2),I=y[0],x=y[1],O=(0,h.P)(d),S=(0,W.useRef)(null);f.rendererStorage[O]=(0,W.useMemo)(function(){return{setValidatorState:function(F){return x(F)},getRootElement:function(){return S.current}}},[x]);var b=(0,A.Z)(function(){var U=z()(r()().mark(function F(Z){var Q;return r()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,(0,o.Q7)({schema:l,rootValue:f.rootValue,userCtx:f.userCtx,path:d,value:Z,locale:f.locale,globalValidators:f.validators,rendererValidator:u.validator,rendererValidatorParams:P});case 2:Q=ne.sent,x(L()({},Q));case 4:case"end":return ne.stop()}},F)}));return function(F){return U.apply(this,arguments)}}(),{wait:300}),C=b.run,_=(0,$.Z)(function(){var U=z()(r()().mark(function F(Z){var Q,J=arguments;return r()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:Q=J.length>1&&J[1]!==void 0?J[1]:{},f.onChange({path:d,value:Z,extra:Q.extra}),Q.triggerValidator!==!1?C(Z):x({status:j.r6.success});case 3:case"end":return ee.stop()}},F)}));return function(F){return U.apply(this,arguments)}}()),P=(0,o.cy)(L()({schema:l,path:d,value:(0,m.U2)(f.rootValue,d)},(0,m.ei)(f,"disabled","readonly","rootValue","userCtx","locale"))),K=L()(L()({},P),{},{validator:I,objectStyle:f.objectStyle,onChange:_}),N=K,H=function(){var F=L()(L()({},(0,m.ei)(K,"schema","required","disabled","readonly","validator","locale","userCtx")),{},{prefixClassNames:f.prefixClassNames});if(K.readonly){if(u.readonlyFormItem)return(0,W.createElement)(u.readonlyFormItem,N);if(u.readonlyComponent)return(0,W.createElement)(f.itemLayout,L()(L()({},F),{},{body:(0,W.createElement)(u.readonlyComponent,K)}))}if(K.disabled){if(u.disabledFormItem)return(0,W.createElement)(u.disabledFormItem,N);if(u.disabledComponent)return(0,W.createElement)(f.itemLayout,L()(L()({},F),{},{body:(0,W.createElement)(u.disabledComponent,K)}))}if(u.formItem)return(0,W.createElement)(u.formItem,N);if(u.component)return(0,W.createElement)(f.itemLayout,L()(L()({},F),{},{body:(0,W.createElement)(u.component,K)}))};return(0,a.jsx)("div",{ref:S,className:(0,D.Z)(f.prefixClassNames("form-item","item-".concat(l.renderType)),l.className,{"is-required":K.required,"is-disabled":K.disabled,"is-readonly":K.readonly}),style:L()({gridColumn:E},l.style),children:(0,a.jsx)(g.Z,{catchErrorTips:f.catchErrorTips,children:H()})})};c.Z=s},52162:function(V,c,e){var R=e(97857),r=e.n(R),p=e(19632),L=e.n(p),T=e(67294),z=e(95399),v=e(90808),i=e(28e3),W=e(49552),g=e(27597),j=e(23060),A=e(82535),$=e(85893),M=function(h){var m=h.schema,o=h.path,a=(0,v.Z)(),s=a.rootValue,n=a.userCtx,t=o.length?(0,j.U2)(s,o):s,l=1,d=Object.keys(m.properties).map(function(u){var E=m.properties[u],f=(0,g.A)({statement:E.hidden,parentValue:t,rootValue:s,userCtx:n});if(f)return null;var B=[].concat(L()(o),[u]),y=(0,W.P)(B),I;if(a.layout===z.SY.normal){var x=l,O=25;!(0,i.hj)(E.span)&&!(0,i.hj)(E.spanStart)?x=l=1:(E.spanStart&&(x=E.spanStart,l=x),E.span&&(O=x+E.span,l=O)),I="".concat(x,"/").concat(O)}else(0,i.hj)(E.spanStart)&&(I="".concat(E.spanStart,"/auto"));var S={schema:E,path:B,gridColumn:I};return(0,$.jsx)(A.Z,r()({},S),y)});return(0,$.jsx)(T.Fragment,{children:d})};c.Z=M},97192:function(V,c){function e(p,L){p&&r(L)}function R(p,L){!p&&r(L)}function r(p){throw new Error("[AssertionError]: ".concat(p!=null?p:"Failed"))}c.Z={truthy:e,falsy:R,fail:r}},52038:function(V,c,e){e.d(c,{RI:function(){return T},Rk:function(){return v},dr:function(){return z},nr:function(){return i}});var R=e(28e3),r=e(18474),p=e(93047);function L(){return"".concat(Date.now()).concat(Math.random().toString().substring(2,5)).replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1-$2-$3-$4")}function T(g){if(!(0,R.HD)(g))return null;try{return new RegExp(g)}catch(j){p.Z.warn(j)}return null}function z(g){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return g?g.replace(/\$\{((\s|.)+?)?\}/g,function(){var A,$=(A=arguments.length<=1?void 0:arguments[1])===null||A===void 0?void 0:A.trim();if(!$)return"";var M=j[$];return M!=null?M:""}):""}function v(g){for(var j=arguments.length,A=new Array(j>1?j-1:0),$=1;$<j;$++)A[$-1]=arguments[$];if(!A.length)return"";var M=r.Z.apply(void 0,A).trim();if(!M)return"";var D=M.split(" ").map(function(h){return"".concat(g,"-").concat(h)});return D.join(" ")}function i(g,j){return Object.prototype.hasOwnProperty.call(g,j)}function W(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(j){return setTimeout(j,g)})}},28e3:function(V,c,e){e.d(c,{DN:function(){return T},Ft:function(){return M},HD:function(){return g},Kn:function(){return i},PO:function(){return W},hj:function(){return j},jn:function(){return A},kJ:function(){return v},kK:function(){return D},mf:function(){return z},o8:function(){return $}});var R=e(52677),r=e.n(R),p=Function.prototype.toString,L=p.call(Object);function T(h,m){return Object.prototype.toString.call(h)===m}function z(h){return T(h,"[object Function]")||T(h,"[object AsyncFunction]")}function v(h){return Array.isArray(h)}function i(h){var m=r()(h);return h!==null&&(m==="object"||m==="function")}function W(h){if(!T(h,"[object Object]"))return!1;var m=Object.getPrototypeOf(h);if(m===null)return!0;var o=Object.hasOwnProperty.call(m,"constructor")&&m.constructor;return typeof o=="function"&&o instanceof o&&p.call(o)===L}function g(h){return typeof h=="string"}function j(h){return typeof h=="number"}function A(h){return typeof h=="boolean"}function $(h){return h===void 0}function M(h){return h===null}function D(h){return $(h)||M(h)}},18474:function(V,c,e){var R=e(52677),r=e.n(R),p={}.hasOwnProperty;function L(){for(var T=[],z=0;z<arguments.length;z++){var v=arguments[z];if(v){var i=r()(v);if(i==="string"||i==="number")T.push(v);else if(Array.isArray(v)){if(v.length){var W=L.apply(null,v);W&&T.push(W)}}else if(i==="object"){if(v.toString!==Object.prototype.toString&&!v.toString.toString().includes("[native code]")){T.push(v.toString());continue}for(var g in v)p.call(v,g)&&v[g]&&T.push(g)}}}return T.join(" ")}c.Z=L},93047:function(V,c){var e={warn:function(){var r;(r=console).warn.apply(r,arguments)}};c.Z=e},49552:function(V,c,e){e.d(c,{P:function(){return r},e:function(){return p}});var R=e(28e3);function r(L){return L.join(".")}function p(L){return(0,R.hj)(L)?"".concat(String(L),"px"):L}},8465:function(V,c,e){e.d(c,{j:function(){return R}});function R(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1?arguments[1]:void 0;if(p){var L=r[p.toLowerCase()];if(L&&(L.formItem||L.component))return L}}},27597:function(V,c,e){e.d(c,{A:function(){return L},o:function(){return T}});var R=e(23060),r=e(28e3),p=e(93047);function L(z){var v=z.statement,i=z.parentValue,W=i===void 0?{}:i,g=z.rootValue,j=g===void 0?{}:g,A=z.userCtx,$=A===void 0?{}:A;if((0,r.jn)(v))return v;if((0,r.HD)(v))try{var M=new Function("$","$root","$userCtx","return ".concat(v));return!!M(W,j,$)}catch(D){p.Z.warn(D)}return!1}function T(z){var v=z.statement,i=z.path,W=z.rootValue,g=z.userCtx,j=(0,R.j7)(i);return L({statement:v,parentValue:j.length?(0,R.U2)(W,j):W,rootValue:W,userCtx:g})}},23060:function(V,c,e){e.d(c,{BD:function(){return M},CE:function(){return j},Cw:function(){return W},Ds:function(){return a},U2:function(){return D},Xh:function(){return i},ei:function(){return g},j7:function(){return A},sE:function(){return $},t$:function(){return s},t8:function(){return o}});var R=e(97857),r=e.n(R),p=e(52677),L=e.n(p),T=e(97192),z=e(52038),v=e(28e3);function i(n){var t,l,d;if(Array.isArray(n)){for(l=Array(t=n.length);t--;)l[t]=(d=n[t])&&L()(d)==="object"?i(d):d;return l}if(Object.prototype.toString.call(n)==="[object Object]"){l={};var u=n;for(t in u)t==="__proto__"?Object.defineProperty(l,t,{value:i(u[t]),configurable:!0,enumerable:!0,writable:!0}):l[t]=(d=u[t])&&L()(d)==="object"?i(d):d;return l}return n}function W(n,t){if(!(0,v.PO)(n)||!(0,v.mf)(t))return{};var l=Object.keys(n),d={};return l.map(function(u){var E=n[u],f=t(E,u);d[f]=E}),d}function g(n){var t={};if(!(0,v.PO)(n))return t;for(var l=arguments.length,d=new Array(l>1?l-1:0),u=1;u<l;u++)d[u-1]=arguments[u];return d.map(function(E){(0,z.nr)(n,E)&&(t[E]=n[E])}),t}function j(n){if(!(0,v.PO)(n))return{};for(var t=r()({},n),l=arguments.length,d=new Array(l>1?l-1:0),u=1;u<l;u++)d[u-1]=arguments[u];return d.map(function(E){(0,z.nr)(n,E)&&delete t[E]}),t}function A(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return(0,v.kJ)(n)?n.slice(0,t>0?t*-1:n.length):[]}function $(n,t){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if((0,v.kJ)(n))for(var d=n.length,u=l;u<d;u++){var E=n[u];if((0,v.mf)(t)){if(t(E))return E}else if((0,v.PO)(t)&&M(E,t))return E}}function M(n,t){if(!(0,v.PO)(n))return!0;for(var l=Object.keys(t),d=0;d<l.length;d++){var u=l[d];if(!(0,z.nr)(n,u)||t[u]!==n[u])return!1}return!0}function D(n,t){if(!(!(0,v.PO)(n)||!(0,v.kJ)(t))){for(var l=n,d=0;d<t.length;d++){var u=t[d];if(l)l=l[u];else return}return l}}var h=/^(?:0|[1-9]\d*)$/;function m(n){return(0,v.hj)(n)||h.test(n)}function o(n,t,l){if(!(0,v.PO)(n))return n;for(var d=t.length,u=d-1,E=-1,f=n;f!==null&&++E<d;){var B=t[E],y=l;if(E!==u){var I=f[B];y=(0,v.Kn)(I)?I:m(t[E+1])?[]:{}}f[B]=y,f=f[B]}return n}function a(n,t){(0,v.mf)(n)||T.Z.fail("Expected a function");var l;function d(){for(var u=this,E=arguments.length,f=new Array(E),B=0;B<E;B++)f[B]=arguments[B];clearTimeout(l),l=setTimeout(function(){return n.apply(u,f)},t)}return d.cancel=function(){clearTimeout(l)},d}function s(n){return(0,v.HD)(n)?n.toLowerCase():""}},44081:function(V,c,e){e.d(c,{Z:function(){return W}});var R=e(19632),r=e.n(R),p=e(97857),L=e.n(p),T=e(52677),z=e.n(T),v=e(23060);function i(g){var j=g.properties;return!j||z()(j)!=="object"||Array.isArray(j)}function W(g,j,A){var $=L()({mapKey:"renderType",ignoreCase:!0,clone:!0,initialState:{},initialStore:{}},A),M=$.clone?(0,v.Xh)(g):g;j=(0,v.Cw)(j,function(h,m){return m.toLowerCase()});var D=function h(m){var o=m.schema,a=m.path,s=m.state,n=m.store;i(o)||Object.keys(o.properties).forEach(function(t){var l,d,u,E,f,B,y,I,x,O=o.properties[t],S=[].concat(r()(a),[t]),b=(0,v.Xh)(s),C={schema:O,parentSchema:o,path:S,field:t,state:b,store:n},_=function(Q){h(L()(L()({schema:O,path:S,state:b},Q),{},{store:n}))},P=(l=j.$$)!==null&&l!==void 0?l:{},K=(d=j.$$object)!==null&&d!==void 0?d:{};(u=P.enter)===null||u===void 0||u.call(P,L()(L()({},C),{},{traverse:_}));var N=(E=O[$.mapKey])!==null&&E!==void 0?E:"";N=$.ignoreCase?(0,v.t$)(N):N;var H=(0,v.t$)(N).startsWith("object");if(H){var U;(U=K.enter)===null||U===void 0||U.call(K,L()(L()({},C),{},{traverse:_}))}var F=(f=j[N])!==null&&f!==void 0?f:{};(B=F.enter)===null||B===void 0||B.call(F,L()(L()({},C),{},{traverse:_})),(y=P.exit)===null||y===void 0||y.call(P,C),H&&((I=K.exit)===null||I===void 0||I.call(K,C)),(x=F.exit)===null||x===void 0||x.call(F,C)})};return D({schema:M,path:[],state:$.initialState,store:$.initialStore}),M}},36578:function(V,c,e){e.d(c,{cy:function(){return b},Q7:function(){return I},Ze:function(){return B}});var R=e(97857),r=e.n(R),p=e(15009),L=e.n(p),T=e(19632),z=e.n(T),v=e(99289),i=e.n(v),W=e(95399),g=e(23060),j=e(52038),A=e(28e3),$=e(49552),M=e(8465),D=e(12444),h=e.n(D),m=e(72004),o=e.n(m),a=e(9783),s=e.n(a),n=function(){function C(_){h()(this,C),s()(this,"value",void 0),s()(this,"rules",void 0),s()(this,"locale",void 0),s()(this,"globalValidators",void 0),s()(this,"globalValidatorParams",void 0),Object.assign(this,_)}return o()(C,[{key:"setValue",value:function(P){this.value=P}},{key:"validate",value:function(){var _=i()(L()().mark(function K(){return L()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,this.validateRules(this.rules);case 2:return H.abrupt("return",H.sent);case 3:case"end":return H.stop()}},K,this)}));function P(){return _.apply(this,arguments)}return P}()},{key:"validateRules",value:function(){var _=i()(L()().mark(function K(N){var H,U,F,Z;return L()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:J.prev=0,H=d(N),U=0,F=H;case 3:if(!(U<F.length)){J.next=12;break}if(Z=F[U],!(0,A.PO)(Z)){J.next=9;break}return this.validateRuleItem(Z),J.next=9,this.validateGlobal(Z);case 9:U++,J.next=3;break;case 12:J.next=19;break;case 14:if(J.prev=14,J.t0=J.catch(0),!C.isValidationError(J.t0)){J.next=18;break}return J.abrupt("return",(0,g.ei)(J.t0,"status","message","extra"));case 18:return J.abrupt("return",{status:W.r6.error,message:J.t0!==null&&J.t0!==void 0&&J.t0.message?J.t0.message:"CatchError"});case 19:return J.abrupt("return",{status:W.r6.success});case 20:case"end":return J.stop()}},K,this,[[0,14]])}));function P(K){return _.apply(this,arguments)}return P}()},{key:"validateRuleItem",value:function(P){var K=(0,A.jn)(P.required)?P.required:void 0,N=(0,A.hj)(P.len)?P.len:void 0,H=(0,A.hj)(P.min)?P.min:void 0,U=(0,A.hj)(P.max)?P.max:void 0,F=C.fail,Z=this.value,Q=this.locale;if(K&&[void 0,null].includes(Z)&&C.fail(P.message),(P.type==="string"&&!(0,A.HD)(Z)||P.type==="number"&&!(0,A.hj)(Z)||P.type==="boolean"&&!(0,A.jn)(Z)||P.type==="object"&&!(0,A.PO)(Z)||P.type==="array"&&!(0,A.kJ)(Z))&&F((0,j.dr)(Q.typeError,{type:P.type})),(0,A.HD)(Z)){var J=(0,j.RI)(P.pattern);(K&&Z===""||N&&Z.length!==N||H&&Z.length<H||U&&Z.length>U||J&&!J.test(Z))&&F(P.message)}(0,A.hj)(Z)&&(N&&Z!==N||H&&Z<H||U&&Z>U)&&F(P.message),(0,A.kJ)(Z)&&(K&&Z.length===0||N&&Z.length!==N||H&&Z.length<H||U&&Z.length>U)&&F(P.message)}},{key:"validateGlobal",value:function(){var _=i()(L()().mark(function K(N){var H,U,F,Z,Q,J,ne,ee,se;return L()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:if(H=N.validator,U=this.globalValidators,F=this.globalValidatorParams,!(!H||!U||!F)){me.next=4;break}return me.abrupt("return");case 4:if(Z=U[H],Q=function(Pe){Pe.status!==W.r6.success&&C.fail(Pe)},!l(Z)){me.next=11;break}return me.next=9,this.validateRules(Z.filter(function(ie){return!ie.validator}));case 9:J=me.sent,Q(J);case 11:if(!(0,A.mf)(Z)){me.next=21;break}return me.next=14,Z(r()(r()({},F),{},{value:this.value}));case 14:if(ne=me.sent,!l(ne)){me.next=20;break}return me.next=18,this.validateRules(ne.filter(function(ie){return!ie.validator}));case 18:ee=me.sent,Q(ee);case 20:t(ne)&&Q({status:ne.status,message:(se=N.message)!==null&&se!==void 0?se:ne.message,extra:ne.extra});case 21:case"end":return me.stop()}},K,this)}));function P(K){return _.apply(this,arguments)}return P}()}],[{key:"isValidationError",value:function(P){return(0,A.PO)(P)&&(0,j.nr)(P,C.failUK)}},{key:"fail",value:function(P){var K=s()({},C.failUK,!0);throw(0,A.HD)(P)?K.message=P:(0,A.PO)(P)&&Object.assign(K,(0,g.ei)(P,"status","message","extra")),K.status||(K.status=W.r6.error),K}}]),C}();s()(n,"failUK",typeof Symbol=="function"?Symbol("SRV"):"$$SRV");function t(C){return W.f1.includes(C==null?void 0:C.status)}function l(C){return(0,A.kJ)(C)&&!!C.length}function d(C){var _=[];return(0,A.PO)(C)?_.push(C):(0,A.kJ)(C)&&_.push.apply(_,z()(C)),_}function u(C){var _=new n(C);return _.validate()}var E=e(27597),f=e(44081);function B(C){return y.apply(this,arguments)}function y(){return y=i()(L()().mark(function C(_){var P,K,N,H,U,F,Z,Q,J,ne,ee,se,Ie;return L()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return P=_.rootSchema,K=_.rootValue,N=_.disabled,H=_.readonly,U=_.locale,F=_.renderers,Z=_.rendererStorage,Q=_.validators,J=_.userCtx,ne=[],(0,f.Z)(P,{$$:{enter:function(pe){var xe=pe.schema,_e=pe.path,Ae=(0,E.o)({statement:xe.hidden,rootValue:K,path:_e,userCtx:J});if(!Ae){var We=(0,M.j)(F,xe.renderType);if(We){var ze=function(){var Ne=i()(L()().mark(function He(){var Ge,Ye,ke,rn,sn,Ve;return L()().wrap(function(Je){for(;;)switch(Je.prev=Je.next){case 0:return Ge=(0,g.U2)(K,_e),Ye=b({schema:xe,value:Ge,path:_e,disabled:N,readonly:H,rootValue:K,locale:U,userCtx:J}),Je.prev=2,Je.next=5,I({schema:xe,rootValue:K,userCtx:J,path:_e,locale:U,value:Ge,globalValidators:Q,rendererValidator:We.validator,rendererValidatorParams:Ye});case 5:if(ke=Je.sent,rn=ke.status,sn=ke.message,Ve=ke.extra,rn===W.r6.success){Je.next=11;break}return Je.abrupt("return",{path:_e,value:Ge,status:rn,message:sn,extra:Ve});case 11:Je.next=16;break;case 13:return Je.prev=13,Je.t0=Je.catch(2),Je.abrupt("return",{path:_e,value:Ge,status:W.r6.error,message:"[CatchError]: ".concat(Je.t0===null||Je.t0===void 0?void 0:Je.t0.message)});case 16:case"end":return Je.stop()}},He,null,[[2,13]])}));return function(){return Ne.apply(this,arguments)}}();ne.push(ze())}}}},$$Object:{enter:function(pe){var xe=pe.traverse;xe()}}},{clone:!1}),ee=[],se=[],ie.next=7,Promise.all(ne).then(function(Pe){return Pe.filter(function(pe){return(pe==null?void 0:pe.status)===W.r6.error?ee.push(pe):(pe==null?void 0:pe.status)===W.r6.warning&&se.push(pe),!!pe})});case 7:return Ie=ie.sent,Ie.forEach(function(Pe){var pe=Pe.status,xe=Pe.path,_e=Pe.message,Ae=Pe.extra,We=Z[(0,$.P)(xe)];We==null||We.setValidatorState({status:pe,message:_e,extra:Ae})}),ie.abrupt("return",{hasError:!!ee.length,hasWarning:!!se.length,errorList:ee,warningList:se});case 10:case"end":return ie.stop()}},C)})),y.apply(this,arguments)}function I(C){return x.apply(this,arguments)}function x(){return x=i()(L()().mark(function C(_){var P,K,N,H,U,F,Z,Q,J,ne,ee,se,Ie,me,ie;return L()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:if(P=_.schema,K=_.rootValue,N=_.userCtx,H=_.path,U=_.locale,F=_.value,Z=_.globalValidators,Q=_.rendererValidator,J=_.rendererValidatorParams,ne=O({schema:P,rootValue:K,path:H,locale:U,userCtx:N}),ee={value:F,globalValidators:Z,globalValidatorParams:J,locale:U.validation},!l(ne)){pe.next=9;break}return pe.next=6,u(r()(r()({},ee),{},{rules:ne}));case 6:if(se=pe.sent,se.status===W.r6.success){pe.next=9;break}return pe.abrupt("return",se);case 9:if(!l(Q)){pe.next=14;break}return pe.next=12,u(r()(r()({},ee),{},{rules:Q}));case 12:return Ie=pe.sent,pe.abrupt("return",Ie);case 14:if(!(0,A.mf)(Q)){pe.next=25;break}return pe.next=17,Q(r()(r()({},J),{},{value:F}));case 17:if(me=pe.sent,!l(me)){pe.next=23;break}return pe.next=21,u(r()(r()({},ee),{},{rules:me}));case 21:return ie=pe.sent,pe.abrupt("return",ie);case 23:if(!t(me)){pe.next=25;break}return pe.abrupt("return",{status:me.status,message:me.message,extra:me.extra});case 25:return pe.abrupt("return",{status:W.r6.success});case 26:case"end":return pe.stop()}},C)})),x.apply(this,arguments)}function O(C){var _=C.schema,P=C.rootValue,K=C.path,N=C.locale,H=C.userCtx,U=d(_.rules),F=(0,E.o)({statement:_.required,rootValue:P,path:K,userCtx:H});return F&&!(0,g.sE)(_.rules,{required:!0})&&U.unshift({required:!0,message:(0,j.dr)(N.validation.required,{label:_.title})}),U}function S(C){var _=C.schema,P=C.rootValue,K=C.path,N=C.userCtx,H=(0,E.o)({statement:_.required,rootValue:P,path:K,userCtx:N});return!!(H||(0,g.sE)(d(_.rules),{required:!0}))}function b(C){var _=C.schema,P=C.value,K=C.path,N=C.disabled,H=C.readonly,U=C.rootValue,F=C.locale,Z=C.userCtx,Q=!!N,J=!!H;Q||(Q=(0,E.o)({statement:_.disabled,rootValue:U,path:K,userCtx:Z})),J||(J=(0,E.o)({statement:_.readonly,rootValue:U,path:K,userCtx:Z}));var ne=S({schema:_,path:K,rootValue:U,userCtx:Z});return{schema:_,value:P,path:z()(K),sPath:(0,$.P)(K),required:ne,disabled:Q,readonly:J,rootValue:U,locale:F,userCtx:Z}}},35672:function(V,c,e){e.r(c),e.d(c,{default:function(){return br}});var R=e(97857),r=e.n(R),p=e(23060),L=e(18474),T=e(74072),z=e(52038),v=e(67294),i=e(13769),W=e.n(i),g=e(9783),j=e.n(g),A=e(28e3),$=e(71577),M=e(34586),D={submit:"submit",reset:"reset"},h={normal:"normal",formItem:"formItem"},m={prefixCls:"schema-render",itemLayout:"horizontal",readonlyPlaceholder:"-",labelWidth:100,labelGap:15,layoutColumnGap:10,layoutRowGap:15,actions:[D.submit,D.reset],actionsRenderMode:h.normal,disableFormOnActionLoading:!0,validateFormOnSubmit:!0},o=j()(j()({},D.submit,!1),D.reset,!1),a="__FORM_RENDER_ACTIONS__",s="YYYY-MM-DD",n="YYYY-MM-DD HH:mm:ss",t=(0,v.createContext)({}),l=t;function d(){var ue=(0,v.useContext)(l);return ue}var u=e(85893),E=["disabled"],f=j()(j()({},D.submit,function(ue){var G,k=ue.loading,re=ue.locale,te=ue.disabled,fe=ue.submitText;return(0,u.jsx)($.ZP,{type:"primary",htmlType:"submit",disabled:k.submit?!1:te||k.reset,loading:k.submit,children:fe||(re==null||(G=re.FormRender)===null||G===void 0?void 0:G.submit)})}),D.reset,function(ue){var G,k=ue.handleReset,re=ue.loading,te=ue.locale,fe=ue.disabled,Ee=ue.resetText;return(0,u.jsx)($.ZP,{htmlType:"button",disabled:re.reset?!1:fe||re.submit,loading:re.reset,onClick:k,children:Ee||(te==null||(G=te.FormRender)===null||G===void 0?void 0:G.reset)})}),B=function(G){var k=G.disabled,re=W()(G,E),te=d(),fe=te.actions,Ee=te.actionsLoading,De=te.registerActions,Oe=te.handleReset,Se=te.handleSubmit,Ke=te.layoutColumnGap,Le=te.locale,X=te.submitText,Y=te.resetText,q=A.kJ(fe)&&fe.length>0;if(!q)return null;var w=r()(r()({},f),De);return(0,u.jsx)(M.Z,r()(r()({size:Ke},re),{},{children:fe.map(function(ae){var oe={locale:Le,disabled:k,loading:Ee,submitText:X,resetText:Y};ae===D.submit?oe.handleSubmit=Se:ae===D.reset&&(oe.handleReset=Oe);var he=w[ae];return he?(0,u.jsx)(v.Fragment,{children:he==null?void 0:he(oe)},ae):null})}))},y=B,I=e(15009),x=e.n(I),O=e(99289),S=e.n(O),b=e(5574),C=e.n(b),_=e(24317),P=e(93047);function K(ue){var G=ue.props,k=ue.coreRef,re=(0,v.useState)(o),te=C()(re,2),fe=te[0],Ee=te[1],De=(0,_.Z)(function(){var Le=S()(x()().mark(function X(Y,q){return x()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return Ee(function(oe){return r()(r()({},oe),{},j()({},Y,!0))}),ae.next=3,q().catch(function(oe){P.Z.warn(oe)});case 3:Ee(function(oe){return r()(r()({},oe),{},j()({},Y,!1))});case 4:case"end":return ae.stop()}},X)}));return function(X,Y){return Le.apply(this,arguments)}}()),Oe=(0,_.Z)(function(){De(D.submit,S()(x()().mark(function Le(){var X,Y;return x()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(k.current){w.next=2;break}return w.abrupt("return");case 2:if(!G.validateFormOnSubmit){w.next=8;break}return w.next=5,k.current.validate();case 5:if(Y=w.sent,!(Y.hasError||Y.hasWarning)){w.next=8;break}return w.abrupt("return");case 8:return w.next=10,(X=G.onSubmit)===null||X===void 0?void 0:X.call(G,k.current.getValue());case 10:case"end":return w.stop()}},Le)})))}),Se=(0,_.Z)(function(Le){Le.preventDefault(),Le.stopPropagation(),Oe()}),Ke=(0,_.Z)(function(){De(D.reset,S()(x()().mark(function Le(){var X,Y,q,w;return x()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:if(k.current){oe.next=2;break}return oe.abrupt("return");case 2:return oe.next=4,(X=G.onBeforeReset)===null||X===void 0?void 0:X.call(G,k.current.getValue());case 4:return q=oe.sent,w=r()({},q),k.current.setValue(w),k.current.resetError(),oe.next=10,(Y=G.onReset)===null||Y===void 0?void 0:Y.call(G,w);case 10:case"end":return oe.stop()}},Le)})))});return{handleFormSubmit:Se,handleSubmit:Oe,handleReset:Ke,actionsLoading:fe,isLoading:fe.submit||fe.reset}}var N=e(25035),H=e(55241),U={main:"KJktzdbIf6ks6VzJokOi",header:"W1VzXHn16gct5GcAQzAJ",title:"u9uqtcpUufcUHpxoTX8i",mark:"nTrbqAVZyQszXeIv0c0x",titleTooltip:"PJv9lp7OIAhz09e0Mzc4",body:"rcElCiD94RYg1EDwB1Ks",footer:"Or0SQj4yW5w2FsZNGqSx",description:"Ar4nHGzakHcHpxyEgDsm",errorMsg:"Uboc8A0zOlwiit1DFVUs",warningMsg:"bBWNfGgbPgIM39mCuAv5"},F=L.Z,Z=function(G){var k=G.schema,re=G.required,te=G.prefixClassNames,fe=G.labelColon,Ee=!!fe;return(0,u.jsxs)(u.Fragment,{children:[re&&(0,u.jsx)("span",{className:F(te("item-mark"),U.mark),children:"*"}),(0,u.jsx)("span",{className:F(te("item-title"),U.title),children:k.title}),!!k.titleDescription&&(0,u.jsx)(H.Z,{placement:"top",trigger:"hover",content:k.titleDescription,children:(0,u.jsx)(N.Z,{className:F(te("item-title-tooltip"),U.titleTooltip),style:{marginRight:Ee?4:void 0}})}),Ee&&(0,u.jsx)("span",{className:F(te("item-colon")),children:fe})]})},Q=function(G){var k=G.body,re=G.schema,te=G.validator,fe=G.required,Ee=G.disabled,De=G.readonly,Oe=G.userCtx,Se=G.prefixClassNames,Ke=d(),Le=Ke.labelWidth,X=Ke.labelColon,Y=Ke.labelGap,q=Ke.labelRender,w=Ke.locale,ae=q||Z,oe={schema:re,required:fe,disabled:Ee,readonly:De,userCtx:Oe,prefixClassNames:Se,labelWidth:Le,labelColon:X,labelGap:Y,locale:w};return(0,u.jsxs)("div",{className:F(Se("item-layout-horizontal")),children:[(0,u.jsxs)("div",{className:F(Se("item-main"),U.main),children:[(0,u.jsx)("div",{className:F(Se("item-header"),U.header),style:{flexBasis:Le,marginRight:Y},children:ae(oe)}),(0,u.jsx)("div",{className:F(Se("item-body"),U.body),children:k})]}),(0,u.jsxs)("div",{className:F(Se("item-footer"),U.footer),style:{paddingLeft:A.hj(Le)?Le+Y:0},children:[te.status==="error"&&!!te.message&&(0,u.jsx)("div",{className:F(Se("item-error-msg"),U.errorMsg),children:te.message}),te.status==="warning"&&!!te.message&&(0,u.jsx)("div",{className:F(Se("item-warning-msg"),U.warningMsg),children:te.message}),!!re.description&&(0,u.jsx)("div",{className:F(Se("item-description"),U.description),children:re.description})]})]})},J=Q,ne={header:"cXgCcSVvNlsIaSBsMlHM",title:"Q3eNxjI6cLAZBBW2_yas",mark:"BuWsBZA0kykyRHVVzIdZ",titleTooltip:"hJ0d8TOr3t8ohz2ebCeX",footer:"evsVbV8JQZUkwdzenShU",description:"E03i6p7KIc4amADSI9O2",errorMsg:"XpfzMTzdt2UStOnYDFHa",warningMsg:"GfBuXM4GhVwvjTHc_dZO"},ee=L.Z,se=function(G){var k=G.schema,re=G.required,te=G.prefixClassNames,fe=G.labelColon,Ee=!!fe;return(0,u.jsxs)(u.Fragment,{children:[re&&(0,u.jsx)("span",{className:ee(te("item-mark"),ne.mark),children:"*"}),(0,u.jsx)("span",{className:ee(te("item-title"),ne.title),children:k.title}),!!k.titleDescription&&(0,u.jsx)(H.Z,{placement:"top",trigger:"hover",content:k.titleDescription,children:(0,u.jsx)(N.Z,{className:ee(te("item-title-tooltip"),ne.titleTooltip),style:{marginRight:Ee?4:void 0}})}),Ee&&(0,u.jsx)("span",{className:ee(te("item-colon")),children:fe})]})},Ie=function(G){var k=G.body,re=G.schema,te=G.validator,fe=G.required,Ee=G.disabled,De=G.readonly,Oe=G.userCtx,Se=G.prefixClassNames,Ke=d(),Le=Ke.labelWidth,X=Ke.labelColon,Y=Ke.labelGap,q=Ke.labelRender,w=Ke.locale,ae=q||se,oe={schema:re,required:fe,disabled:Ee,readonly:De,userCtx:Oe,prefixClassNames:Se,labelWidth:Le,labelColon:X,labelGap:Y,locale:w};return(0,u.jsxs)("div",{className:Se("item-layout-vertical"),children:[(0,u.jsx)("div",{className:ee(Se("item-header"),ne.header),children:ae(oe)}),(0,u.jsx)("div",{className:Se("item-body"),children:k}),(0,u.jsxs)("div",{className:ee(Se("item-footer"),ne.footer),children:[te.status==="error"&&!!te.message&&(0,u.jsx)("div",{className:ee(Se("item-error-msg"),ne.errorMsg),children:te.message}),te.status==="warning"&&!!te.message&&(0,u.jsx)("div",{className:ee(Se("item-warning-msg"),ne.warningMsg),children:te.message}),!!re.description&&(0,u.jsx)("div",{className:ee(Se("item-description"),ne.description),children:re.description})]})]})},me=Ie;function ie(ue){var G=ue.itemLayout,k=(0,v.useMemo)(function(){return!G||G==="horizontal"?J:G==="vertical"?me:G},[G]);return k}var Pe=A.kJ,pe=A.kK,xe=A.Kn;function _e(ue,G){var k="".concat(a,"_").concat(Date.now());return r()(r()({},ue),{},{properties:r()(r()({},ue==null?void 0:ue.properties),{},j()({},k,r()(r()({},G),{},{renderType:a})))})}function Ae(ue){var G=ue.itemLayout,k=ue.labelWidth,re=ue.labelGap;return G==="horizontal"&&A.hj(k)?k+re:0}function We(){for(var ue=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],G=arguments.length>1?arguments[1]:void 0,k=0;k<ue.length;k++){var re=ue[k],te=xe(re)?re:{label:re,value:re},fe=G(te);if(fe)return}}function ze(ue,G){var k=[];return!Pe(ue)||!Pe(G)||G.forEach(function(re){pe(re)||We(ue,function(te){if(re===te.value)return k.push(te.label),!0})}),k}function Ne(ue,G){var k=[];return!Pe(ue)||!Pe(G)||We(ue,function(re){G.includes(re.value)&&k.push(re)}),k}function He(ue){return!!(pe(ue)||ue==="")}function Ge(ue){var G=ue.schema,k=ue.actionsRestSchema,re=ue.actionsRenderMode;return(0,v.useMemo)(function(){return re===h.normal?G:_e(G,k)},[G,k,re])}var Ye={formRender:"y_rJEiPMcFoaaCwgDsVT"},ke=e(28403),rn=e(84567),sn=function(G){var k=G.children,re=d(),te=re.readonlyPlaceholder;return(0,u.jsx)(u.Fragment,{children:He(k)?te:k})},Ve=sn,ln=function(G){var k=G.schema,re=G.disabled,te=G.value,fe=G.onChange,Ee=(0,_.Z)(function(De){var Oe;fe(De,{extra:{checkedOptions:Ne((Oe=k.renderOptions)===null||Oe===void 0?void 0:Oe.options,De)}})});return(0,u.jsx)(rn.Z.Group,r()(r()({},k.renderOptions),{},{value:te,onChange:Ee,disabled:re}))},Je=function(G){var k,re=G.schema,te=G.value,fe=G.locale,Ee=ze((k=re.renderOptions)===null||k===void 0?void 0:k.options,te);return(0,u.jsx)(Ve,{children:Ee.join(fe.FormRender.comma)})},_n={component:ln,readonlyComponent:Je},tn=e(47933),Mn=e(27484),en=e.n(Mn),Ln=function(G){var k=G.schema,re=G.value,te=G.onChange,fe=G.disabled,Ee=G.locale,De=G.validator,Oe=(0,v.useMemo)(function(){return z.dr(Ee.FormRender.placeholderSelect,{title:k.title})},[k.title,Ee.FormRender.placeholderSelect]),Se=(0,_.Z)(function(Ke){var Le,X=(Le=k.renderOptions)===null||Le===void 0?void 0:Le.outputFormat;te(Ke?X?en()(Ke).format(X):en()(Ke).toISOString():void 0)});return(0,u.jsx)(tn.default,r()(r()({allowClear:!0,placeholder:Oe,style:{width:"100%"}},k.renderOptions),{},{status:De.status,value:re?en()(re):null,onChange:Se,disabled:fe}))},pn=function(G){var k,re,te=G.schema,fe=G.value;return(0,u.jsx)(Ve,{children:fe?en()(fe).format(((k=te.renderOptions)===null||k===void 0?void 0:k.format)||((re=te.renderOptions)!==null&&re!==void 0&&re.showTime?n:s)):""})},An={component:Ln,readonlyComponent:pn};function mn(ue,G){return G?en()(ue).format(G):en()(ue).toISOString()}function xn(ue){var G=(ue==null?void 0:ue.start)||"start",k=(ue==null?void 0:ue.end)||"end";return{startField:G,endField:k}}function cn(ue,G){var k,re;if((G==null?void 0:G.valueStruct)==="object"){var te=xn(G==null?void 0:G.valueFieldMap),fe=te.startField,Ee=te.endField;k=ue[fe],re=ue[Ee]}else k=ue[0],re=ue[1];return[en()(k),en()(re)]}function Bn(ue,G,k,re){var te=mn(ue,k),fe=mn(G,k);if((re==null?void 0:re.valueStruct)==="object"){var Ee=xn(re==null?void 0:re.valueFieldMap),De=Ee.startField,Oe=Ee.endField;return j()(j()({},De,te),Oe,fe)}return[te,fe]}var jn=function(G){var k=G.schema,re=G.value,te=G.onChange,fe=G.disabled,Ee=G.validator,De=k.renderOptions||{},Oe=De.showTime,Se=De.outputFormat;return(0,u.jsx)(tn.default.RangePicker,r()(r()({allowClear:!0,allowEmpty:!0,style:{width:"100%"}},k.renderOptions),{},{disabled:fe,status:Ee.status,value:re?cn(re,k.renderOptions):null,onChange:function(Le){if(Le&&Le[0]&&Le[1]){var X=Oe?Le[0]:Le[0].startOf("day"),Y=Oe?Le[1]:Le[1].endOf("day");te(Bn(X,Y,Se,k.renderOptions))}else te(void 0)}}))},$n=function(G){var k=G.schema,re=G.value,te=G.locale,fe="";if(A.kJ(re)||A.PO(re)){var Ee,De,Oe,Se=cn(re,k.renderOptions),Ke=C()(Se,2),Le=Ke[0],X=Ke[1],Y=(Ee=k.renderOptions)!==null&&Ee!==void 0&&Ee.showTime?n:s,q=((De=k.renderOptions)===null||De===void 0?void 0:De.format)||Y,w=((Oe=k.renderOptions)===null||Oe===void 0?void 0:Oe.displayTextTemplate)||te.FormRender.displayDateRange;fe=z.dr(w,{start:Le.format(q),end:X.format(q)})}return(0,u.jsx)(Ve,{children:fe})},Kn={component:jn,readonlyComponent:$n},Nn=function(G){var k=G.value;return(0,u.jsx)(Ve,{children:k})},Wn={component:Nn},Un=function(G){var k=G.disabled;return(0,u.jsx)(y,{disabled:k})},dn={formItem:Un},hn=e(56755),Fn=["validateOnBlur"],zn=function(G){var k=G.schema,re=G.disabled,te=G.value,fe=G.onChange,Ee=G.validator,De=G.locale,Oe=k.renderOptions||{},Se=Oe.validateOnBlur,Ke=W()(Oe,Fn),Le=(0,v.useMemo)(function(){return z.dr(De.FormRender.placeholderInput,{title:k.title})},[k.title,De.FormRender.placeholderInput]),X=(0,_.Z)(function(q){fe(q!=null?q:void 0,{triggerValidator:!Se})}),Y=(0,_.Z)(function(){fe(te,{triggerValidator:!0})});return(0,u.jsx)(hn.Z,r()(r()({style:{width:"100%"},placeholder:Le},Ke),{},{status:Ee.status,value:te,onChange:X,onBlur:Se?Y:void 0,disabled:re}))},Hn=function(G){var k=G.value;return(0,u.jsx)(Ve,{children:k})},Zn={component:zn,readonlyComponent:Hn},vn=e(52423),Vn=["validateOnBlur"],Gn=function(G){var k=G.schema,re=G.disabled,te=G.value,fe=G.onChange,Ee=G.validator,De=G.locale,Oe=k.renderOptions||{},Se=Oe.validateOnBlur,Ke=W()(Oe,Vn),Le=(0,v.useMemo)(function(){return z.dr(De.FormRender.placeholderInput,{title:k.title})},[k.title,De.FormRender.placeholderInput]),X=(0,_.Z)(function(q){var w=q.target.value;w!==te&&fe(w||void 0,{triggerValidator:!Se})}),Y=(0,_.Z)(function(){fe(te,{triggerValidator:!0})});return(0,u.jsx)(vn.Z,r()(r()({placeholder:Le},Ke),{},{status:Ee.status,value:te!=null?te:"",onChange:X,onBlur:Se?Y:void 0,disabled:re}))},Yn=function(G){var k=G.value;return(0,u.jsx)(Ve,{children:k})},Jn={component:Gn,readonlyComponent:Yn},gn=e(52162),En=e(20439),Pn=function(G){var k,re,te=G.schema,fe=G.path,Ee=G.objectStyle,De=(0,v.useState)(!1),Oe=C()(De,2),Se=Oe[0],Ke=Oe[1],Le=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{children:te.title}),!!te.titleDescription&&(0,u.jsx)(H.Z,{placement:"top",trigger:"hover",content:te.titleDescription,children:(0,u.jsx)(N.Z,{style:{marginLeft:4}})})]});return(0,u.jsx)(En.Z,r()(r()({},(k=te.renderOptions)===null||k===void 0?void 0:k.headerOptions),{},{activeKey:String(Se),onChange:function(){return Ke(!Se)},children:(0,v.createElement)(En.Z.Panel,r()(r()({},(re=te.renderOptions)===null||re===void 0?void 0:re.panelOptions),{},{header:Le,key:"false"}),(0,u.jsx)("div",{style:Ee,children:(0,u.jsx)(gn.Z,{schema:te,path:fe})}))}))},Qn={formItem:Pn},Xn=function(G){var k=G.schema,re=G.path,te=G.objectStyle;return(0,u.jsx)("div",{style:te,children:(0,u.jsx)(gn.Z,{schema:k,path:re})})},wn={formItem:Xn},kn=["validateOnBlur"],qn=function(G){var k=G.schema,re=G.disabled,te=G.value,fe=G.onChange,Ee=G.validator,De=G.locale,Oe=k.renderOptions||{},Se=Oe.validateOnBlur,Ke=W()(Oe,kn),Le=(0,v.useMemo)(function(){return z.dr(De.FormRender.placeholderInput,{title:k.title})},[k.title,De.FormRender.placeholderInput]),X=(0,_.Z)(function(q){var w=q.target.value;w!==te&&fe(w||void 0,{triggerValidator:!Se})}),Y=(0,_.Z)(function(){fe(te,{triggerValidator:!0})});return(0,u.jsx)(vn.Z.Password,r()(r()({placeholder:Le},Ke),{},{status:Ee.status,value:te!=null?te:"",onChange:X,onBlur:Se?Y:void 0,disabled:re}))},er=function(G){var k=G.value;return(0,u.jsx)(Ve,{children:k})},nr={component:qn,readonlyComponent:er},rr=e(55742),In=function(G){var k=G.schema,re=G.disabled,te=G.value,fe=G.onChange;return(0,u.jsx)(rr.ZP.Group,r()(r()({},k.renderOptions),{},{value:te,onChange:function(De){return fe(De.target.value)},disabled:re}))},tr=function(G){var k,re=G.schema,te=G.value,fe=ze((k=re.renderOptions)===null||k===void 0?void 0:k.options,[te]);return(0,u.jsx)(Ve,{children:fe[0]})},ar={component:In,readonlyComponent:tr},Tn=e(95122),or=function(G){var k=G.schema,re=G.disabled,te=G.readonly,fe=G.value,Ee=G.onChange;return(0,u.jsx)(Tn.Z,r()(r()({},k.renderOptions),{},{value:fe!=null?fe:0,onChange:Ee,disabled:re||te}))},Dn={component:or},bn=e(92708),sr=function(G){var k=G.schema,re=G.disabled,te=G.value,fe=G.onChange,Ee=G.locale,De=G.validator,Oe=(0,v.useMemo)(function(){return z.dr(Ee.FormRender.placeholderSelect,{title:k.title})},[k.title,Ee.FormRender.placeholderSelect]);return(0,u.jsx)(bn.default,r()(r()({allowClear:!0,style:{width:"100%"},placeholder:Oe},k.renderOptions),{},{status:De.status,mode:void 0,value:te!=null?te:null,onChange:function(Ke){return fe(Ke)},disabled:re}))},lr=function(G){var k,re,te=G.schema,fe=G.value,Ee=G.locale,De=ze((k=te.renderOptions)===null||k===void 0?void 0:k.options,[fe]);return(0,u.jsx)(Ve,{children:De.join((re=Ee.FormRender)===null||re===void 0?void 0:re.comma)})},dr={component:sr,readonlyComponent:lr},ur=function(G){var k=G.schema,re=G.disabled,te=G.value,fe=G.onChange,Ee=G.validator,De=G.locale,Oe=(0,v.useMemo)(function(){return z.dr(De.FormRender.placeholderSelect,{title:k.title})},[k.title,De.FormRender.placeholderSelect]),Se=(0,_.Z)(function(Ke,Le){fe(Ke,{extra:{selectedOptions:Le}})});return(0,u.jsx)(bn.default,r()(r()({allowClear:!0,style:{width:"100%"},placeholder:Oe},k.renderOptions),{},{status:Ee.status,mode:"multiple",value:te,onChange:Se,disabled:re}))},mr=function(G){var k,re,te=G.schema,fe=G.value,Ee=G.locale,De=ze((k=te.renderOptions)===null||k===void 0?void 0:k.options,fe);return(0,u.jsx)(Ve,{children:De.join((re=Ee.FormRender)===null||re===void 0?void 0:re.comma)})},Cn={component:ur,readonlyComponent:mr},cr=e(40478),ir=function(G){var k=G.schema,re=G.disabled,te=G.readonly,fe=G.value,Ee=G.onChange;return(0,u.jsx)(cr.Z,r()(r()({},k.renderOptions),{},{checked:fe,onChange:function(Oe){return Ee(Oe)},disabled:re||te}))},pr={component:ir},hr={switchBox:"hQFhxJ_W2UD57V313BGA"},vr=["text","rightExtraContent","rootClassName","rootStyle"],Ir=function(G){var k=G.schema,re=G.disabled,te=G.readonly,fe=G.value,Ee=G.onChange,De=k.renderOptions||{},Oe=De.text,Se=De.rightExtraContent,Ke=De.rootClassName,Le=De.rootStyle,X=W()(De,vr),Y=A.mf(Se)?Se({value:fe,disabled:re,readonly:te}):Se;return(0,u.jsxs)("div",{className:L.Z(Ke,hr.switchBox),style:Le,children:[(0,u.jsx)(rn.Z,r()(r()({},X),{},{checked:fe,onChange:function(w){return Ee(w.target.checked)},disabled:re||te,children:Oe})),Y]})},On={component:Ir},fr=["validateOnBlur"],yr=function(G){var k=G.schema,re=G.disabled,te=G.value,fe=G.onChange,Ee=G.validator,De=G.locale,Oe=k.renderOptions||{},Se=Oe.validateOnBlur,Ke=W()(Oe,fr),Le=(0,v.useMemo)(function(){return z.dr(De.FormRender.placeholderInput,{title:k.title})},[k.title,De.FormRender.placeholderInput]),X=(0,_.Z)(function(q){var w=q.target.value;w!==te&&fe(w||void 0,{triggerValidator:!Se})}),Y=(0,_.Z)(function(){fe(te,{triggerValidator:!0})});return(0,u.jsx)(vn.Z.TextArea,r()(r()({rows:3,placeholder:Le},Ke),{},{status:Ee.status,value:te!=null?te:"",onChange:X,onBlur:Se?Y:void 0,disabled:re}))},xr=function(G){var k=G.value;return(0,u.jsx)(Ve,{children:k})},gr={component:yr,readonlyComponent:xr},fn,Er=(fn={},j()(j()(j()(j()(j()(j()(j()(j()(j()(j()(fn,a,dn),"Object",Qn),"ObjectNull",wn),"InputText",Jn),"InputNumber",Zn),"Password",nr),"TextArea",gr),"Radio",ar),"Checkbox",_n),"Switch",pr),j()(j()(j()(j()(j()(j()(j()(fn,"SwitchBox",On),"DatePicker",An),"DateRangePicker",Kn),"Description",Wn),"Rate",Dn),"Select",dr),"SelectMultiple",Cn)),Pr=Er,Tr=function(G,k){var re=r()(r()({},m),G),te=(0,v.useRef)(null);(0,v.useImperativeHandle)(k,function(){return te.current});var fe=(0,v.useMemo)(function(){return r()(r()({},Pr),re.renderers)},[re.renderers]),Ee=(0,v.useMemo)(function(){return r()(r()({},ke.Z),re.locale)},[re.locale]),De=ie(re),Oe=K({props:re,coreRef:te}),Se=Oe.handleFormSubmit,Ke=Oe.handleSubmit,Le=Oe.handleReset,X=Oe.actionsLoading,Y=Oe.isLoading,q=Ge(p.ei(re,"schema","actionsRestSchema","actionsRenderMode")),w=r()(r()({},p.ei(re,"labelWidth","labelGap","labelColon","labelRender","layoutColumnGap","layoutRowGap","actions","registerActions","readonlyPlaceholder","submitText","resetText")),{},{locale:Ee,actionsLoading:X,handleSubmit:Ke,handleReset:Le}),ae=re.disableFormOnActionLoading?re.disabled||Y:re.disabled;return(0,u.jsx)(l.Provider,{value:w,children:(0,u.jsxs)("form",{onSubmit:Se,className:L.Z(re.rootClassName,Ye.formRender),style:re.rootStyle,children:[(0,u.jsx)(T.default,r()(r()({},re),{},{ref:te,schema:q,locale:Ee,renderers:fe,itemLayout:De,disabled:ae})),re.actionsRenderMode===h.normal&&(0,u.jsx)(y,{disabled:ae,className:z.Rk(re.prefixCls,"form-actions"),style:{marginTop:re.layoutRowGap,marginLeft:Ae(re)}})]})})},Dr=(0,v.forwardRef)(Tr),br=Dr},35804:function(V,c,e){e.r(c);var R=e(97857),r=e.n(R),p=e(78484);c.default=r()(r()({},p.default),{},{FormRender:{submit:"Submit",reset:"Reset",placeholderInput:"Please enter ${title}",placeholderSelect:"Please select ${title}",comma:",",displayDateRange:"${start} to ${end}"}})},28403:function(V,c,e){var R=e(97857),r=e.n(R),p=e(39214);c.Z=r()(r()({},p.Z),{},{FormRender:{submit:"\u63D0\u4EA4",reset:"\u91CD\u7F6E",placeholderInput:"\u8BF7\u8F93\u5165${title}",placeholderSelect:"\u8BF7\u9009\u62E9${title}",comma:"\uFF0C",displayDateRange:"${start} \u81F3 ${end}"}})},36116:function(V,c,e){e.r(c),e.d(c,{default:function(){return O}});var R=e(97857),r=e.n(R),p=e(68795),L=e(48689),T=e(35672),z=e(71577),v=e(67294),i={submit:"submit",reset:"reset",collapse:"collapse"},W={prefixCls:"schema-render",layoutColumnGap:10,layoutRowGap:15,actions:[i.reset,i.submit,i.collapse],defaultCollapsed:!0,collapsedRows:2},g=e(5574),j=e.n(g),A=e(80882),$=e(48115),M=e(24317);function D(S,b,C){var _;if(C)return C(S);if(!S)return 5;var P=S.clientWidth,K=((_=S.firstElementChild)===null||_===void 0||(_=_.getBoundingClientRect())===null||_===void 0?void 0:_.width)||320;return Math.floor(P/K)*b-1}var h=e(64599),m=e.n(h);function o(S,b){var C={},_=Object.keys(S.properties).slice(0,b),P=m()(_),K;try{for(P.s();!(K=P.n()).done;){var N=K.value;C[N]=S.properties[N]}}catch(H){P.e(H)}finally{P.f()}return{renderType:"Root",properties:C}}function a(S){var b=S.isCollapsed,C=S.rawSchema,_=S.collapsedNumber;return b?o(C,_):C}var s=e(28e3);function n(S){return s.PO(S)?Object.keys(S).length:s.kJ(S)||s.HD(S)?S.length:0}var t=e(38812);function l(S,b){var C=(0,t.Z)(b),_=(0,v.useRef)(-1);(0,v.useEffect)(function(){var P,K=(P=S.current)===null||P===void 0?void 0:P.getRootElement();if(K){var N=new ResizeObserver(function(H){var U=H[0].contentRect.width;_.current!==U&&(_.current=U,C.current(K))});return N.observe(K),function(){return N.disconnect()}}},[])}var d=e(85893);function u(S,b){var C=S.schema,_=(0,v.useState)(S.defaultCollapsed),P=j()(_,2),K=P[0],N=P[1],H=(0,v.useState)(function(){var se;return D((se=b.current)===null||se===void 0?void 0:se.getRootElement(),S.collapsedRows,S.calcCollapsedNumber)}),U=j()(H,2),F=U[0],Z=U[1],Q=(0,v.useRef)(C);(0,v.useMemo)(function(){Q.current=a({isCollapsed:K,collapsedNumber:F,rawSchema:C})},[F,K,C]),l(b,function(se){Z(D(se,S.collapsedRows,S.calcCollapsedNumber))});var J=(0,M.Z)(function(se){var Ie;N(se),(Ie=S.onToggleCollapsed)===null||Ie===void 0||Ie.call(S,se)}),ne=(0,M.Z)(function(se){var Ie,me=se.locale;if(n(C.properties)<=F)return null;if(K){var ie;return(0,d.jsxs)(z.ZP,{type:"link",onClick:function(){return J(!1)},style:{padding:0},children:[me==null||(ie=me.Search)===null||ie===void 0?void 0:ie.expand,(0,d.jsx)(A.Z,{})]})}return(0,d.jsxs)(z.ZP,{type:"link",onClick:function(){return J(!0)},style:{padding:0},children:[me==null||(Ie=me.Search)===null||Ie===void 0?void 0:Ie.collapse,(0,d.jsx)($.Z,{})]})}),ee=r()({collapse:ne},S.registerActions);return{schema:Q.current,registerActions:ee}}var E=e(6386),f=e(52038);function B(S){return{className:f.Rk(S,"form-actions"),style:{gridColumnStart:-2,textAlign:"end"}}}var y={submit:function(b){var C=b.loading,_=b.locale,P=b.submitText,K=b.disabled;return(0,d.jsx)(z.ZP,{type:"primary",htmlType:"submit",icon:(0,d.jsx)(p.Z,{}),loading:C.submit,disabled:C.submit?!1:K||C.reset,children:P||_.FormRender.submit})},reset:function(b){var C=b.loading,_=b.locale,P=b.handleReset,K=b.resetText,N=b.disabled;return(0,d.jsx)(z.ZP,{htmlType:"button",icon:(0,d.jsx)(L.Z,{}),loading:C.reset,disabled:C.reset?!1:N||C.submit,onClick:P,children:K||_.FormRender.reset})}},I=function(b,C){var _=r()(r()({},W),b),P=(0,v.useRef)(null),K=(0,v.useMemo)(function(){return r()(r()({},E.Z),_.locale)},[_.locale]),N=u(_,P),H=N.schema,U=N.registerActions,F=(0,v.useMemo)(function(){return B(_.prefixCls)},[_.prefixCls]);return(0,v.useImperativeHandle)(C,function(){return P.current}),(0,d.jsx)(T.default,r()(r()({layout:"autoFill"},_),{},{ref:P,locale:K,schema:H,registerActions:r()(r()({},y),U),actionsRestSchema:F,actionsRenderMode:"formItem"}))},x=(0,v.forwardRef)(I),O=x},9686:function(V,c,e){e.r(c);var R=e(97857),r=e.n(R),p=e(35804);c.default=r()(r()({},p.default),{},{FormRender:r()(r()({},p.default.FormRender),{},{submit:"Search"}),Search:{collapse:"Collapse",expand:"Expand"}})},6386:function(V,c,e){var R=e(97857),r=e.n(R),p=e(28403);c.Z=r()(r()({},p.Z),{},{FormRender:r()(r()({},p.Z.FormRender),{},{submit:"\u67E5\u8BE2"}),Search:{collapse:"\u6536\u8D77",expand:"\u5C55\u5F00"}})},25520:function(V,c,e){e.r(c),e.d(c,{default:function(){return Le}});var R=e(97857),r=e.n(R),p=e(18474),L=e(28e3),T=e(24317),z=e(85908),v=e(95119),i=e(67294),W=L.kJ,g=L.PO,j=L.HD,A=L.kK,$=function(Y){return W(Y)?!Y.length:g(Y)?!Object.keys(Y).length:j(Y)?Y.trim()==="":A(Y)};function M(X,Y){return W(X)?X.map(Y):[]}function D(X,Y){if(X)for(var q=X.length,w=0;w<q;w++){var ae=Y==null?void 0:Y(X[w],w,X);if(ae)return}}function h(){return Math.random().toString(36).substring(7).replace(/\d/g,"x")}var m=h(),o=function(X){return X.actions="__actions__",X.rowNumber="__row-number__",X}({}),a={table:"st-table-".concat(m),pagination:"st-pagination-".concat(m)},s=e(23060),n=e(13769),t=e.n(n),l=e(40478),d=e(34586),u=e(66090),E=e(83062),f=e(95122),B=e(5574),y=e.n(B),I=e(67676),x=e(85893),O=function(Y){var q=Y.imgList,w=Y.imgProps,ae=Y.groupProps,oe=(0,i.useState)(!1),he=y()(oe,2),le=he[0],de=he[1],ve=(0,i.useState)(0),ce=y()(ve,2),ge=ce[0],Me=ce[1],Be=function(Te){Me(Te),de(!0)};return(0,x.jsx)(I.Z.PreviewGroup,r()(r()({},ae),{},{items:q,preview:{visible:le,current:ge,onChange:function(Te){return Me(Te)},onVisibleChange:function(Te){return de(Te)}},children:(0,x.jsx)(d.Z,{children:q.map(function(je,Te){return(0,i.createElement)(I.Z,r()(r()({width:60},w),{},{src:je,key:Te,onClick:function(){return Be(Te)}}))})})}))},S=O,b={backgroundColor:"#ececec",padding:16,borderRadius:6,textAlign:"left"},C=new RegExp("(?<!\\d*\\.\\d*)(?=(\\B\\d{3})+(\\.\\d+)?$)","g"),_=function(Y){var q=Y.value;return $(q)?"-":isNaN(Number(q))?q:String(q).replace(C,",")},P=_,K="...",N=function(Y,q,w){var ae=Array.from(Y);if(ae.length<=q)return Y;var oe=K.length,he=Math.max(0,q-oe);if(he===0)return ae.slice(0,q);if(w==="start")return"".concat(K).concat(ae.slice(-he).join(""));if(w==="middle"){var le=Math.ceil(he/2),de=Math.floor(he/2),ve=ae.slice(0,le).join(""),ce=de>0?ae.slice(-de).join(""):"";return"".concat(ve).concat(K).concat(ce)}return"".concat(ae.slice(0,he).join("")).concat(K)},H=function(Y){var q=Y.value,w=Y.options,ae=w===void 0?{}:w,oe=$(q)?"-":String(q),he=ae.maxLength,le=he===void 0?10:he,de=ae.placement,ve=de===void 0?"end":de,ce=ae.tooltipProps,ge=N(oe,le,ve);return ge===oe?(0,x.jsx)(x.Fragment,{children:oe}):(0,x.jsx)(E.Z,r()(r()({title:oe},ce),{},{children:(0,x.jsx)("span",{children:ge})}))},U=H,F=e(71577),Z=e(85576),Q=(0,i.createContext)({}),J=Q;function ne(){var X=(0,i.useContext)(J);return X}var ee=function(Y){var q=Y.value,w=Y.options,ae=w===void 0?{}:w,oe=$(q)?"-":String(q),he=ae.maxLength,le=he===void 0?10:he,de=ae.btnText,ve=ae.modalProps,ce=ae.modalContent,ge=(0,i.useState)(!1),Me=y()(ge,2),Be=Me[0],je=Me[1],Te=ne();return oe.length>le?(0,x.jsxs)(x.Fragment,{children:[N(oe,le,"end"),(0,x.jsx)(F.ZP,{type:"link",style:{padding:0},onClick:function(){return je(!0)},children:de||Te.locale.SearchTable.longTextModalLabel}),(0,x.jsx)(Z.Z,r()(r()({width:600,title:Te.locale.SearchTable.longTextModalTitle,footer:null},ve),{},{open:Be,onCancel:function(){return je(!1)},children:ce||oe}))]}):(0,x.jsx)(x.Fragment,{children:oe})},se=ee,Ie=["groupProps"],me=L.kJ,ie=s.sE,Pe={code:function(Y){var q=Y.value,w=Y.options;return(0,x.jsx)("pre",{style:r()(r()({},b),w.style),children:(0,x.jsx)("code",{children:q})})},percent:function(Y){var q=Y.value;return $(q)?"-":"".concat(q,"%")},switch:function(Y){var q=Y.value,w=Y.options;return(0,x.jsx)(l.Z,r()(r()({},w),{},{checked:!!q}))},tags:function(Y){var q=Y.value,w=Y.options,ae=w.options,oe=w.tooltipProps,he=w.spaceProps,le=me(q)?q:[q];return(0,x.jsx)(d.Z,r()(r()({},he),{},{children:le.map(function(de,ve){var ce=ae?ie(ae,{value:de}):null,ge=(0,i.createElement)(u.Z,r()(r()({variant:"outlined"},ce),{},{key:"tag-".concat(ve)}),ce?ce.label:de);return oe?(0,i.createElement)(E.Z,r()(r()({},oe),{},{key:ve}),ge):ge})}))},rate:function(Y){var q=Y.value,w=Y.options;return(0,x.jsx)(f.Z,r()(r()({style:{width:134},disabled:!0},w),{},{value:q}))},"comma-number":function(Y){return(0,x.jsx)(P,r()({},Y))},images:function(Y){var q=Y.value,w=Y.options;if($(q))return"-";var ae=me(q)?q:[q],oe=w.groupProps,he=t()(w,Ie);return(0,x.jsx)(S,{imgList:ae,imgProps:he,groupProps:oe})},"long-text":function(Y){return(0,x.jsx)(U,r()({},Y))},"long-text-modal":function(Y){return(0,x.jsx)(se,r()({},Y))}},pe=e(27484),xe=e.n(pe),_e=s.U2,Ae=L.kJ,We=L.PO;function ze(X,Y){return X===Y?0:X>Y?1:-1}var Ne=function(Y,q,w){var ae=w.sortType,oe=w.sortOrder,he=w.arrDataIndex,le=w.sortDataExtractor,de=w.sortStringValueTransform,ve=le?le(Y):_e(Y,he),ce=le?le(q):_e(q,he);return We(ve)||We(ce)?0:(Ae(ve)&&(ve=ve.join("")),Ae(ce)&&(ce=ce.join("")),ve=String(ve).trim(),ce=String(ce).trim(),$(ve)?oe==="ascend"?1:-1:$(ce)?oe==="ascend"?-1:1:ae==="string"?(de&&(ve=de(ve),ce=de(ce)),ze("@".concat(ve).toLowerCase(),"@".concat(ce).toLowerCase())):ae==="date"?ze(new Date(ve),new Date(ce)):!isNaN(Number(ve))&&!isNaN(Number(ce))?ze(Number(ve),Number(ce)):xe()(ve).isValid()&&xe()(ce).isValid()?ze(new Date(ve),new Date(ce)):(de&&(ve=de(ve),ce=de(ce)),ze(ve,ce)))},He=["title","dataIndex","children","valueType"],Ge=["type"],Ye=s.U2,ke=L.kJ,rn=L.HD,sn=L.mf;function Ve(X,Y,q){return X.map(function(w){var ae=w.title,oe=w.dataIndex,he=w.children,le=w.valueType,de=t()(w,He);ke(he)&&(he=Ve(he,Y,q));var ve=ke(oe)?oe.join("."):oe,ce=ke(oe)?oe:[oe],ge=Y.sortMode==="local-all"||Y.sortMode==="service-all",Me=!!de.sorter||!!de.sortType||ge,Be=!1;he||(de.sorter?Be=de.sorter:(ge||de.sortType)&&(Be=Y.sortMode==="service-all"?!0:function(Te,ye,be){return Ne(Te,ye,{arrDataIndex:ce,sortOrder:be,sortType:de.sortType,sortDataExtractor:de.sortDataExtractor,sortStringValueTransform:Y.sortStringValueTransform})}));var je=function(ye,be,Ce){var Re=Ye(be,ce),$e="",Ue=void 0;if(le)if(sn(le)){var Qe=le(be,Ce),Ze=Qe.type,Fe=t()(Qe,Ge);$e=Ze,Ue=Fe}else $e=le;var Xe=q[$e];return Xe?Xe({value:Re,record:be,options:Ue||{},index:Ce}):$(Re)?"-":Re};return r()(r()({align:"center",key:ve,width:rn(ae)?ae.length*16+(Me?50:30):void 0,render:je},de),{},{title:ae,dataIndex:oe,children:he,sorter:Be})})}var ln=s.Cw;function Je(X){var Y=X.table,q=X.globalStateRef,w=(0,i.useRef)([]),ae=q.current.isTabChanging;(0,i.useMemo)(function(){ae||(w.current=Y.columns||[])},[Y.columns,ae]);var oe=(0,i.useMemo)(function(){var le=r()(r()({},Pe),Y.registerValueType);return ln(le,function(de,ve){return ve.toLowerCase()})},[Y.registerValueType]),he=(0,i.useMemo)(function(){return Ve(w.current,Y,oe)},[w.current]);return{rawColumns:w.current,baseColumns:he}}var _n=e(15009),tn=e.n(_n),Mn=e(99289),en=e.n(Mn),Ln=e(19632),pn=e.n(Ln),An=e(16223),mn=e(60887),xn=e(32339),cn=e(45587),Bn=e(24285),jn=function(Y){var q=Y.items,w=q===void 0?[]:q,ae=Y.onChange,oe=Y.itemClassName,he=Y.overlayClassName,le=Y.renderItem,de=(0,mn.Dy)((0,mn.VT)(mn.MA)),ve=(0,i.useState)(null),ce=y()(ve,2),ge=ce[0],Me=ce[1],Be=(0,T.Z)(function(je){var Te=je.active,ye=je.over;if(Te.id!==ye.id){var be=w.findIndex(function(Re){return Re.id===Te.id}),Ce=w.findIndex(function(Re){return Re.id===ye.id});ae==null||ae((0,cn.Rp)(w,be,Ce))}Me(null)});return(0,x.jsxs)(mn.LB,{sensors:de,collisionDetection:mn.pE,onDragStart:function(Te){var ye=Te.active;return Me(ye.id)},onDragEnd:Be,modifiers:[xn.DL],children:[(0,x.jsx)(cn.Fo,{items:w,strategy:cn.qw,children:w.map(function(je,Te){return(0,x.jsx)($n,{className:oe,id:je.id,itemData:je,itemIndex:Te,renderItem:le},je.id)})}),(0,x.jsx)(mn.y9,{zIndex:9999,children:ge?(0,x.jsx)("div",{className:he,children:le==null?void 0:le(w.find(function(je){return je.id===ge}),w.findIndex(function(je){return je.id===ge}))}):null})]})};function $n(X){var Y=X.className,q=X.id,w=X.itemData,ae=X.itemIndex,oe=X.renderItem,he=(0,cn.nB)({id:q}),le={transform:Bn.ux.Transform.toString(he.transform),transition:he.transition,opacity:he.isDragging?0:void 0};return(0,x.jsx)("div",{className:Y,ref:he.setNodeRef,style:le,children:oe==null?void 0:oe(w,ae,he)})}var Kn=jn,Nn=e(29751),Wn=e(56755);function Un(X){var Y=X.locale,q=Y.SearchTable.settingModalColumnEnum,w=[{title:q[0],dataIndex:"name",width:250},{title:q[1],dataIndex:"hidden",width:120,render:function(oe,he){return(0,x.jsx)(l.Z,{checked:!oe,onChange:function(le){function de(ve){return le.apply(this,arguments)}return de.toString=function(){return le.toString()},de}(function(le){return he(!le)})})}},{title:q[2],dataIndex:"width",width:130,render:function(oe,he){return(0,x.jsx)(Wn.Z,{min:1,value:oe,onChange:function(le){function de(ve){return le.apply(this,arguments)}return de.toString=function(){return le.toString()},de}(function(le){le&&he(le)})})}},{title:q[4],dataIndex:"sort",width:60,algin:"center",render:function(){return(0,x.jsx)(F.ZP,{type:"text",size:"small",icon:(0,x.jsx)(Nn.Z,{}),style:{cursor:"move"}})}}];return w}var dn={settingContent:"ZDRJtfi0mQAko8QQ3t0s",header:"QAOM154PCv4EfJwXuMGD",list:"LkLIqYE_K14s_LJCkMNb",rowWrapper:"merlP_IozdkGeCwp_YFt",rowWrapperOverlay:"UeufD9AKSlIy1YxIEUVc",row:"LTEO9LAZImQXEcqT5pE2",col:"tHW2QaJsCZklZxvxdAlP",footer:"k0oUhFnmHEmaXGLy4_XN"};function hn(X){return X.map(function(Y){return{id:String(Y.dataIndex),name:Y.title,hidden:Y.hidden,width:Y.width,fixed:Y.fixed}})}var Fn=function(Y){var q=Y.defaultColumns,w=Y.sortColumns,ae=Y.onOk,oe=ne(),he=(0,i.useState)(function(){return hn(w)}),le=y()(he,2),de=le[0],ve=le[1],ce=(0,i.useMemo)(function(){return Un({locale:oe.locale})},[oe.locale]),ge=(0,T.Z)(function(ye,be,Ce){var Re=pn()(de);Re[ye][be]=Ce,ve(Re)}),Me=(0,T.Z)(function(ye){ve(ye)}),Be=(0,T.Z)(function(){ve(hn(w))}),je=(0,T.Z)(function(){ve(hn(q))}),Te=(0,T.Z)(function(){var ye=[];de.forEach(function(be){var Ce=be.id,Re=be.width,$e=be.hidden,Ue=q.find(function(Qe){return String(Qe.dataIndex)===Ce});Ue&&ye.push(r()(r()({},Ue),{},{width:Re,hidden:$e}))}),ae==null||ae(ye)});return(0,x.jsxs)("div",{className:dn.settingContent,children:[(0,x.jsx)("div",{className:dn.header,children:ce.map(function(ye,be){return(0,x.jsx)("div",{className:dn.col,style:{width:ye.width,justifyContent:ye.algin},children:ye.title},be)})}),(0,x.jsx)("div",{className:dn.list,children:(0,x.jsx)(Kn,{items:de,onChange:Me,itemClassName:dn.rowWrapper,overlayClassName:dn.rowWrapperOverlay,renderItem:function(be,Ce,Re){return(0,x.jsx)("div",{className:dn.row,children:ce.map(function($e,Ue){var Qe=be[$e.dataIndex],Ze=$e.dataIndex==="sort"?Re==null?void 0:Re.listeners:{};return(0,x.jsx)("div",r()(r()({className:dn.col,style:{width:$e.width,justifyContent:$e.algin}},Ze),{},{children:$e.render?$e.render(Qe,function(Fe){return ge(Ce,$e.dataIndex,Fe)}):Qe}),"".concat(Ce).concat(Ue))})},Ce)}})}),(0,x.jsx)("div",{className:dn.footer,children:(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(F.ZP,{onClick:je,children:oe.locale.SearchTable.settingModalResetDefault}),(0,x.jsx)(F.ZP,{onClick:Be,children:oe.locale.SearchTable.settingModalReset}),(0,x.jsx)(F.ZP,{type:"primary",onClick:Te,children:oe.locale.SearchTable.settingModalOk})]})})]})},zn=Fn,Hn=["sortColumns","defaultColumns","onOk"],Zn=function(Y){var q=Y.sortColumns,w=Y.defaultColumns,ae=Y.onOk,oe=t()(Y,Hn),he=ne();return(0,x.jsx)(Z.Z,r()(r()({title:he.locale.SearchTable.settingModalTitle,width:"auto",centered:!0,destroyOnClose:!0,footer:null},oe),{},{children:(0,x.jsx)(zn,{sortColumns:q,defaultColumns:w,onOk:ae})}))},vn=Zn,Vn=function(Y,q){var w=[],ae={};Y.forEach(function(de){ae[String(de.dataIndex)]=de}),q.forEach(function(de){var ve=String(de.dataIndex),ce=ae[ve];if(ce){var ge,Me,Be;w.push(r()(r()({},ce),{},{width:(ge=de.width)!==null&&ge!==void 0?ge:ce.width,hidden:(Me=de.hidden)!==null&&Me!==void 0?Me:ce.hidden,fixed:(Be=de.fixed)!==null&&Be!==void 0?Be:ce.fixed})),delete ae[ve]}});for(var oe=0,he=Object.values(ae);oe<he.length;oe++){var le=he[oe];w.push(le)}return w},Gn=s.ei;function Yn(X){var Y=X.baseColumns,q=X.table,w=X.globalStateRef,ae=(0,i.useRef)([]),oe=(0,i.useState)(!1),he=y()(oe,2),le=he[0],de=he[1],ve=(0,i.useState)([]),ce=y()(ve,2),ge=ce[0],Me=ce[1],Be=w.current.isTabChanging;(0,i.useMemo)(function(){if(!Be)if(ge.length){var Ce=q.settingColumnsMergeAlgo||Vn;ae.current=Ce(Y,ge)}else ae.current=pn()(Y)},[Y,ge]);var je=(0,T.Z)(function(){de(!0)}),Te=(0,T.Z)(function(){de(!1)}),ye=(0,T.Z)(function(Ce){var Re;ae.current=Ce,Te();var $e=Ce.map(function(Ue){return Gn(Ue,"title","dataIndex","width","hidden","fixed")});(Re=q.onSettingChanged)===null||Re===void 0||Re.call(q,{columns:$e},q.settingId)}),be=(0,x.jsx)(vn,{open:le,sortColumns:ae.current,defaultColumns:Y,onCancel:Te,onOk:ye});return(0,An.Z)(en()(tn()().mark(function Ce(){var Re,$e,Ue;return tn()().wrap(function(Ze){for(;;)switch(Ze.prev=Ze.next){case 0:return Ze.next=2,(Re=q.getSetting)===null||Re===void 0?void 0:Re.call(q,q.settingId);case 2:Ue=Ze.sent,Ue!=null&&($e=Ue.columns)!==null&&$e!==void 0&&$e.length&&Me(Ue.columns);case 4:case"end":return Ze.stop()}},Ce)})),[q.settingId]),{sortColumns:ae.current,sortModalHolder:be,openSettingModal:je,closeSettingModal:Te}}var Jn=e(80882),gn=e(86738),En=e(85418),Pn=e(93047),Qn=["children","onClick","noLoading"],Xn=Pn.Z;function wn(X){var Y=X.children,q=X.onClick,w=X.noLoading,ae=w===void 0?!1:w,oe=t()(X,Qn),he=(0,i.useState)(!1),le=y()(he,2),de=le[0],ve=le[1],ce=(0,T.Z)(function(){var ge=en()(tn()().mark(function Me(Be){return tn()().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:if(!ae){Te.next=3;break}return q==null||q(Be),Te.abrupt("return");case 3:return ve(!0),Te.prev=4,Te.next=7,q==null?void 0:q(Be);case 7:Te.next=12;break;case 9:Te.prev=9,Te.t0=Te.catch(4),Xn.warn(Te.t0);case 12:ve(!1);case 13:case"end":return Te.stop()}},Me,null,[[4,9]])}));return function(Me){return ge.apply(this,arguments)}}());return(0,x.jsx)(F.ZP,r()(r()({loading:de},oe),{},{onClick:ce,children:Y}))}var kn={dropdownCls:"QCPZxJ055cnYMBRnfgUa"},qn=["text","confirmAgain","confirmProps","onClick"],er=L.kJ,nr=L.HD,rr=s.CE;function In(X,Y){var q=X.text,w=X.confirmAgain,ae=X.confirmProps,oe=X.onClick,he=t()(X,qn),le=nr(q)?(0,x.jsx)(wn,r()(r()({type:"link",size:"small"},rr(he,"isShow")),{},{onClick:function(ve){return!w&&(oe==null?void 0:oe(ve))},children:q}),Y):q;return w?(0,x.jsx)(gn.Z,r()(r()({title:"\u6E29\u99A8\u63D0\u793A",description:"\u8BF7\u4E8C\u6B21\u786E\u8BA4\u60A8\u7684\u64CD\u4F5C\uFF01"},ae),{},{onConfirm:oe,children:le}),Y):le}function tr(X){var Y=X.record,q=X.index,w=X.actionItems,ae=X.actionItemsCount,oe=X.actionItemsDropdownProps,he=X.locale,le=w==null?void 0:w(Y,q);if(!er(le))return null;var de=le.filter(function(Me){return Me.isShow!==!1}),ve;if(de.length>ae){var ce=[],ge=[];return de.forEach(function(Me,Be){Be<ae-1?ce.push(Me):ge.push(In(Me,Be))}),(0,x.jsxs)(x.Fragment,{children:[ce.map(function(Me,Be){return In(Me,Be)}),(0,x.jsx)(En.Z,r()(r()({placement:"bottomRight"},oe),{},{dropdownRender:function(){return(0,x.jsx)("div",{className:kn.dropdownCls,children:ge.map(function(Be,je){return(0,x.jsx)(i.Fragment,{children:Be},je)})})},children:(0,x.jsxs)(F.ZP,{type:"link",size:"small",style:{gap:2,display:"inline-flex",alignItems:"center"},children:[he.SearchTable.more," ",(0,x.jsx)(Jn.Z,{style:{margin:0}})]})}))]})}else ve=de.map(function(Me,Be){return In(Me,Be)});return ve}function ar(X){var Y=X.table,q=X.sortColumns,w=X.locale,ae=Y.showRowNumber,oe=ae===void 0?!1:ae,he=Y.rowNumberColumnData,le=he===void 0?{}:he,de=Y.actionItems,ve=Y.actionItemsCount,ce=ve===void 0?2:ve,ge=Y.actionItemsColumnData,Me=ge===void 0?{}:ge,Be=Y.actionItemsDropdownProps,je=(0,T.Z)(function(be,Ce,Re){return tr({record:Ce,index:Re,actionItems:de,actionItemsCount:ce,actionItemsDropdownProps:Be,locale:w})}),Te=(0,i.useMemo)(function(){return q.filter(function(be){return!be.hidden})},[q]),ye=(0,i.useMemo)(function(){var be=pn()(Te);return oe&&be.unshift(r()({title:w.SearchTable.serialColumnName,align:"center",width:70,fixed:"left",render:function(Re,$e,Ue){return Ue+1},key:o.rowNumber},le)),de&&be.push(r()({title:w.SearchTable.actionColumnName,align:"center",fixed:"right",width:134,render:je,key:o.actions},Me)),be},[Te]);return{finalColumns:ye}}var Tn=e(4559);function or(X){var Y=X.ref,q=X.rootElemRef,w=X.searchRef,ae=X.requestParamsRef,oe=X.requestExtraParamsRef,he=X.paginationRef,le=X.searchValueRef,de=X.dataSource,ve=X.updateDataSource,ce=X.updateSummaryData,ge=X.updatePagination,Me=X.updateScrollY,Be=X.openSettingModal,je=X.runRequest,Te=(0,Tn.Z)(),ye=Te.forceUpdate;(0,i.useImperativeHandle)(Y,function(){return{refresh:je,getRootElement:function(){return q.current},getSearchRef:function(){return w.current},getPaginationData:function(){return he.current},setPaginationData:ge,getRequestParams:function(){return ae.current},getRequestExtraParams:function(){return oe.current},getSearchValue:function(){return le.current},setSearchValue:function(Ce,Re){var $e,Ue=Re!=null&&Re.overwrite?Ce:r()(r()({},le.current),Ce);($e=w.current)===null||$e===void 0||$e.setValue(Ue)},clearSearchValue:function(){var Ce;return(Ce=w.current)===null||Ce===void 0?void 0:Ce.resetValue()},getDataSource:function(){return de},setDataSource:function(Ce){ve(Ce),ye()},setSummaryData:function(Ce){ce(Ce),ye()},updateScrollY:Me,openSettingModal:Be,rerender:ye}})}var Dn=e(52038),bn=Pn.Z,sr=s.ei,lr=p.Z,dr=Dn.dr;function ur(X){var Y,q=X.request,w=X.updateScrollY,ae=X.table,oe=X.searchValueRef,he=X.locale,le=(0,i.useRef)({current:1,pageSize:(ae.pagination!==!1?(Y=ae.pagination)===null||Y===void 0?void 0:Y.defaultPageSize:10)||10,total:0}),de=(0,i.useRef)({}),ve=(0,i.useRef)({}),ce=(0,i.useRef)([]),ge=(0,i.useRef)({}),Me=(0,i.useState)(!1),Be=y()(Me,2),je=Be[0],Te=Be[1];ae.pagination===!1&&(le.current={});var ye=(0,T.Z)(function(){var Ze=en()(tn()().mark(function Fe(Xe,qe){var an,nn,un;return tn()().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:if(an={data:[],total:0},!je){we.next=3;break}return we.abrupt("return",an);case 3:if(Te(!0),we.prev=4,!q){we.next=18;break}return nn={},qe!=null&&qe.overwrite?nn=Xe||{}:nn=r()(r()(r()({},oe.current),sr(le.current,"current","pageSize")),Xe),we.next=10,q(nn,ve.current);case 10:un=we.sent,de.current=nn,nn.current&&(le.current.current=nn.current),nn.pageSize&&(le.current.pageSize=nn.pageSize),le.current.total=un.total||0,ce.current=un.data||[],ge.current=un.summaryData||{},an=r()(r()({},un),{},{data:ce.current,total:le.current.total});case 18:we.next=23;break;case 20:we.prev=20,we.t0=we.catch(4),bn.warn(we.t0);case 23:return Te(!1),ae.autoScrollY&&w(),we.abrupt("return",an);case 26:case"end":return we.stop()}},Fe,null,[[4,20]])}));return function(Fe,Xe){return Ze.apply(this,arguments)}}()),be=!1;if(ae.pagination!==!1){var Ce;be=r()(r()(r()({style:{marginBottom:0},showQuickJumper:!0,showSizeChanger:!0,showTotal:function(Fe){var Xe=le.current,qe=Xe.current,an=Xe.pageSize,nn=(qe-1)*an,un=nn+ce.current.length;return dr(he.SearchTable.paginationTotal,{start:nn||1,end:un,total:Fe})}},ae.pagination),le.current),{},{onChange:function(Fe,Xe){var qe,an;(qe=ae.pagination)===null||qe===void 0||(an=qe.onChange)===null||an===void 0||an.call(qe,Fe,Xe),Object.assign(le.current,{current:Fe,pageSize:Xe}),ye()},className:lr((Ce=ae.pagination)===null||Ce===void 0?void 0:Ce.className,a.pagination)})}var Re=(0,T.Z)(function(Ze){ce.current=Ze}),$e=(0,T.Z)(function(Ze){ge.current=Ze}),Ue=(0,T.Z)(function(Ze){ve.current=Ze}),Qe=(0,T.Z)(function(Ze){Ze&&Object.assign(le.current,Ze)});return{loading:je,dataSource:ce.current,updateDataSource:Re,summaryData:ge.current,updateSummaryData:$e,requestParamsRef:de,requestExtraParamsRef:ve,updateRequestExtraParams:Ue,paginationRef:le,updatePagination:Qe,finalPagination:be,runRequest:ye}}var mr=L.HD;function Cn(X){if(!X)return 0;var Y=window.getComputedStyle(X,null),q=parseFloat(Y.marginTop)+parseFloat(Y.marginBottom);return X.offsetHeight+q}function cr(X,Y){if(!X||!Y)return 0;var q=window.getComputedStyle(X,null),w=q[Y];return mr(w)&&w.match(/^\d+/)?parseFloat(w):0}var ir=L.o8;function pr(X){var Y=X.table,q=X.rootElemRef,w=(0,i.useState)(Y.virtual?0:void 0),ae=y()(w,2),oe=ae[0],he=ae[1],le=(0,i.useRef)(),de=(0,T.Z)(function(){var ce;if(!(!q.current||!ir((ce=Y.scroll)===null||ce===void 0?void 0:ce.y))){var ge=q.current.querySelector(".".concat(a.table)),Me=ge==null?void 0:ge.querySelector("thead"),Be=ge==null?void 0:ge.querySelector("tfoot"),je=ge==null?void 0:ge.querySelector(".".concat(a.pagination)),Te=[Me,Be,je],ye=0;D(q.current.children,function(be){be!==ge&&(ye+=Cn(be))}),ye+=cr(ge,"marginTop"),D(Te,function(be){ye+=Cn(be)}),he(q.current.clientHeight-ye)}}),ve=(0,T.Z)(function(){var ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;ge&&!Y.autoScrollY||(clearTimeout(le.current),le.current=setTimeout(de,ce))});return(0,z.Z)(function(){var ce=function(){return ve(0,!0)};return window.addEventListener("resize",ce),function(){return window.removeEventListener("resize",ce)}}),{scrollY:oe,updateScrollY:ve}}var hr=e(36116),vr=Dn.nr;function Ir(X){var Y=X.locale,q=X.loading,w=X.search,ae=X.searchValueRef,oe=X.runRequest,he=X.updateScrollY,le=w===!1?{}:w,de=(0,i.useRef)(null),ve=(0,Tn.Z)(),ce=ve.forceUpdate,ge=vr(le,"value");if(ge){var Me;ae.current=(Me=le.value)!==null&&Me!==void 0?Me:{}}var Be=(0,T.Z)(function(Ce,Re){var $e;ae.current=r()({},Ce),ge||ce(),($e=le.onChange)===null||$e===void 0||$e.call(le,Ce,Re)}),je=(0,T.Z)(function(){var Ce=en()(tn()().mark(function Re($e){var Ue,Qe;return tn()().wrap(function(Fe){for(;;)switch(Fe.prev=Fe.next){case 0:return ae.current=r()({},$e),Fe.next=3,(Ue=le.onReset)===null||Ue===void 0?void 0:Ue.call(le,$e);case 3:if(Qe=Fe.sent,Qe===!1){Fe.next=7;break}return Fe.next=7,oe({current:1});case 7:case"end":return Fe.stop()}},Re)}));return function(Re){return Ce.apply(this,arguments)}}()),Te=(0,T.Z)(function(){var Ce=en()(tn()().mark(function Re($e){var Ue,Qe;return tn()().wrap(function(Fe){for(;;)switch(Fe.prev=Fe.next){case 0:return Fe.next=2,(Ue=le.onSubmit)===null||Ue===void 0?void 0:Ue.call(le,$e);case 2:if(Qe=Fe.sent,Qe===!1){Fe.next=6;break}return Fe.next=6,oe({current:1});case 6:case"end":return Fe.stop()}},Re)}));return function(Re){return Ce.apply(this,arguments)}}()),ye=(0,T.Z)(function(Ce){var Re;(Re=le.onToggleCollapsed)===null||Re===void 0||Re.call(le,Ce),he(0,!0)}),be=w?(0,x.jsx)(hr.default,r()(r()({},w),{},{locale:w.locale||Y,rootStyle:r()({marginBottom:16},w.rootStyle),ref:de,disabled:w.disabled||q,value:ae.current,onChange:Be,onReset:je,onSubmit:Te,onToggleCollapsed:ye})):null;return{searchNodeHolder:be,searchRef:de}}var On=L.kJ,fr=L.kK;function yr(X,Y){return X===o.rowNumber?Y:X===o.actions?"":"-"}function xr(X){var Y=[];function q(w){D(w,function(ae){On(ae.children)?q(ae.children):Y.push(ae)})}return q(X),Y}function gr(X){var Y=X.flattenedColumns,q=X.summaryData,w=X.summaryText,ae=w===void 0?"\u5408\u8BA1":w,oe=X.hasRowNumber,he=oe===void 0?!1:oe,le=X.hasRowSelection,de=le===void 0?!1:le,ve=[],ce=-1;return de&&(ce++,ve.push({index:ce,text:he?"":ae})),D(Y,function(ge){var Me=ge.key,Be=ge.dataIndex,je=On(Be)?Be.join("."):Be,Te=String(Me||je),ye=q[Te];ce++,ve.push({index:ce,text:fr(ye)?yr(Te,ae):ye})}),ve}function fn(X){var Y=gr(X);return(0,x.jsx)(v.Z.Summary,{fixed:"bottom",children:(0,x.jsx)(v.Z.Summary.Row,{children:Y.map(function(q){return(0,x.jsx)(v.Z.Summary.Cell,{align:"center",index:q.index,colSpan:q.colSpan,children:q.text},q.index)})})})}function Er(X){var Y=X.table,q=X.finalColumns,w=X.summaryData,ae=(0,i.useMemo)(function(){return xr(q)},[q]),oe=(0,T.Z)(function(){return fn({flattenedColumns:ae,summaryData:w,summaryText:Y.summaryText,hasRowSelection:!!Y.rowSelection,hasRowNumber:Y.showRowNumber})}),he=Y.summary?Y.summary:$(w)?void 0:function(){return oe()};return{finalSummary:he}}var Pr=e(9783),Tr=e.n(Pr),Dr=e(42952),br=e(98165),ue=e(18315),G={tabsHideLine:"uDtbDqYyMw3PdeGEwjmS"},k=p.Z;function re(X){var Y,q,w,ae,oe,he=X.locale,le=X.title,de=le===void 0?{}:le,ve=X.loading,ce=X.globalStateRef,ge=X.runRequest,Me=X.openSettingModal,Be=(0,T.Z)(function(Fe){var Xe,qe;ve||(ce.current.isTabChanging=!0,(Xe=de.tabs)===null||Xe===void 0||(qe=Xe.onChange)===null||qe===void 0||qe.call(Xe,Fe),setTimeout(function(){return ge({current:1}).finally(function(){return ce.current.isTabChanging=!1})},0))}),je={loading:ve},Te=(Y=de.leftExtraContent)===null||Y===void 0?void 0:Y.call(de,je),ye=(q=de.rightExtraContent)===null||q===void 0?void 0:q.call(de,je),be=null,Ce=null,Re=de.showSetting?(0,x.jsx)(E.Z,{title:he.SearchTable.settingTips,children:(0,x.jsx)(F.ZP,{icon:(0,x.jsx)(Dr.Z,{}),disabled:ve,onClick:Me})}):null,$e=de.showRefresh?(0,x.jsx)(E.Z,{title:he.SearchTable.refreshTips,children:(0,x.jsx)(F.ZP,{icon:(0,x.jsx)(br.Z,{}),disabled:ve,onClick:function(){return ge()}})}):null;if((w=de.tabs)!==null&&w!==void 0&&w.tabBarExtraContent)if((0,i.isValidElement)(de.tabs.tabBarExtraContent))Ce=de.tabs.tabBarExtraContent;else{var Ue=de.tabs.tabBarExtraContent;be=Ue.left,Ce=Ue.right}var Qe={left:be||Te?(0,x.jsxs)(d.Z,{size:10,style:{marginRight:16},children:[be,Te]}):null,right:Ce||ye||$e||Re?(0,x.jsxs)(d.Z,{size:10,children:[Ce,ye,$e,Re]}):null},Ze=Qe.left||Qe.right||de.tabs?(0,x.jsx)(ue.Z,r()(r()({},de.tabs),{},{className:k(de.className,(ae=de.tabs)===null||ae===void 0?void 0:ae.className,Tr()({},G.tabsHideLine,!de.tabs)),style:de.style||((oe=de.tabs)===null||oe===void 0?void 0:oe.style),tabBarExtraContent:Qe,onChange:Be})):null;return{titleNodeHolder:Ze}}var te=e(6386),fe=r()(r()({},te.Z),{},{SearchTable:{serialColumnName:"\u5E8F\u53F7",actionColumnName:"\u64CD\u4F5C",more:"\u66F4\u591A",paginationTotal:"\u5171 ${total} \u6761\u6570\u636E",refreshTips:"\u5237\u65B0",settingTips:"\u5217\u8BBE\u7F6E",settingModalTitle:"\u5217\u8BBE\u7F6E",settingModalOk:"\u786E\u5B9A",settingModalReset:"\u91CD\u7F6E\u672C\u6B21\u8BBE\u7F6E",settingModalResetDefault:"\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E",settingModalColumnEnum:["\u5217\u540D\u79F0","\u663E\u793A\u5217","\u5BBD\u5EA6","\u56FA\u5B9A\u65B9\u5F0F","\u6392\u5E8F"],settingModalColumnSortEnum:["\u5DE6","\u53F3","\u65E0"],longTextModalLabel:"\u5168\u90E8",longTextModalTitle:"\u5168\u90E8"}}),Ee=p.Z,De=L.PO,Oe=L.kK,Se=function(Y,q){var w=Y.className,ae=Y.style,oe=Y.locale,he=Y.request,le=Y.requestOnMounted,de=le===void 0?!0:le,ve=Y.header,ce=Y.search,ge=Y.titleTop,Me=Y.title,Be=Me===void 0?{}:Me,je=Y.titleBottom,Te=Y.table,ye=Te===void 0?{}:Te,be=Y.footer,Ce=(0,i.useRef)(null),Re=(0,i.useRef)(ce===!1?{}:ce.defaultValue||{}),$e=(0,i.useMemo)(function(){return r()(r()({},fe),oe)},[oe]);ye.rowSelection&&Oe(ye.rowSelection.columnWidth)&&(ye.rowSelection=r()(r()({},ye.rowSelection),{},{columnWidth:32}));var Ue=(0,i.useRef)({isTabChanging:!1}),Qe=Je({table:ye,globalStateRef:Ue}),Ze=Qe.baseColumns,Fe=Yn({table:ye,baseColumns:Ze,globalStateRef:Ue}),Xe=Fe.sortColumns,qe=Fe.sortModalHolder,an=Fe.openSettingModal,nn=ar({table:ye,sortColumns:Xe,locale:$e}),un=nn.finalColumns,Cr=pr({table:ye,rootElemRef:Ce}),we=Cr.scrollY,Or=Cr.updateScrollY,on=ur({searchValueRef:Re,table:ye,request:he,updateScrollY:Or,locale:$e}),Sn=on.loading,Rr=on.dataSource,Ar=on.updateDataSource,Br=on.summaryData,jr=on.updateSummaryData,$r=on.finalPagination,yn=on.runRequest,Kr=on.requestParamsRef,Nr=on.requestExtraParamsRef,Wr=on.updateRequestExtraParams,Ur=on.paginationRef,Fr=on.updatePagination,_r=Ir({locale:$e,loading:Sn,search:ce,searchValueRef:Re,runRequest:yn,updateScrollY:Or}),zr=_r.searchNodeHolder,Hr=_r.searchRef,Zr=re({locale:$e,title:Be,loading:Sn,globalStateRef:Ue,runRequest:yn,openSettingModal:an}),Vr=Zr.titleNodeHolder,Gr=Er({table:ye,finalColumns:un,summaryData:Br}),Yr=Gr.finalSummary,Rn={loading:Sn},Jr=(0,T.Z)(function(Qr,Mr,Lr,Xr){var Sr;(ye.sortMode==="service"||ye.sortMode==="service-all")&&(Wr({filter:Mr,sorter:Lr}),yn()),(Sr=ye.onChange)===null||Sr===void 0||Sr.call(ye,Qr,Mr,Lr,Xr)});return(0,z.Z)(function(){de&&yn()}),or({ref:q,rootElemRef:Ce,searchRef:Hr,requestParamsRef:Kr,requestExtraParamsRef:Nr,paginationRef:Ur,searchValueRef:Re,dataSource:Rr,updateDataSource:Ar,updateSummaryData:jr,updatePagination:Fr,updateScrollY:Or,openSettingModal:an,runRequest:yn}),(0,x.jsx)(J.Provider,{value:{locale:$e},children:(0,x.jsxs)("div",{ref:Ce,className:w,style:ae,children:[ve==null?void 0:ve(Rn),zr,ge==null?void 0:ge(Rn),Vr,je==null?void 0:je(Rn),(0,x.jsx)(v.Z,r()(r()({tableLayout:"fixed"},ye),{},{className:Ee(ye.className,a.table),columns:un,dataSource:Rr,loading:r()({spinning:Sn},De(ye==null?void 0:ye.loading)?ye.loading:void 0),scroll:r()({scrollToFirstRowOnChange:!0,x:"max-content",y:we},ye==null?void 0:ye.scroll),summary:Yr,pagination:$r,onChange:Jr})),be==null?void 0:be(Rn),qe]})})},Ke=(0,i.forwardRef)(Se),Le=Ke},74465:function(V,c,e){e.r(c);var R=e(97857),r=e.n(R),p=e(9686);c.default=r()(r()({},p.default),{},{SearchTable:{serialColumnName:"Rank",actionColumnName:"Actions",more:"More",paginationTotal:"Showing ${start} to ${end} of ${total} entries",refreshTips:"Refresh",settingTips:"Columns Setting",settingModalTitle:"Columns Setting",settingModalOk:"Ok",settingModalReset:"Reset Current Setting",settingModalResetDefault:"Restore Defaults",settingModalColumnEnum:["Name","Display","Width","Fixed","Sort"],settingModalColumnSortEnum:["left","right","-"],longTextModalLabel:"All",longTextModalTitle:"All"}})},88442:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(63917);const r=[{value:"SchemaRender",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u5957 ",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u7B80\u5355",paraId:0,tocIndex:1},{value:"\uFF0C\u4F46\u53C8\u8FFD\u6C42 ",paraId:0,tocIndex:1},{value:"\u7075\u6D3B",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u53EF\u9AD8\u5B9A",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"\u597D\u7528\u7684",paraId:0,tocIndex:1},{value:" \u8868\u5355\u6E32\u67D3\u89E3\u51B3\u65B9\u6848\uFF0C\u65E8\u5728\u6C89\u6DC0\u89E3\u51B3\u5E38\u89C1\u8868\u5355\u6848\u4F8B\u7684\u6E32\u67D3\u5E93\uFF0C\u4E0E\u76F8\u5173\u7684\u901A\u7528\u7EC4\u4EF6\uFF0C\u4EE5\u63D0\u5347\u7814\u53D1\u6548\u7387\uFF1B\u652F\u6301 SSR(Server-Side Rendering) \u6E32\u67D3\u3002",paraId:0,tocIndex:1},{value:"\u5185\u5BB9\u76EE\u5F55\uFF1A",paraId:1,tocIndex:1},{value:"Core",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6E32\u67D3\u5E93\u5185\u6838\uFF0C\u901A\u8FC7\u4E00\u5957\u7B80\u6613\u7684 ",paraId:2,tocIndex:1},{value:"JSON Schema",paraId:3,tocIndex:1},{value:" \u6784\u5EFA\u51FA\u4E00\u5957\u8868\u5355\uFF0C\u5185\u6838\u4E3B\u8981\u5904\u7406 Schema \u534F\u8BAE\u3001\u6E32\u67D3\u5668\u7F16\u6392\u3001\u903B\u8F91\u8054\u52A8\u3001\u6821\u9A8C\u80FD\u529B\u7B49\u3002",paraId:2,tocIndex:1},{value:"FormRender",paraId:2,tocIndex:1},{value:": \u57FA\u4E8E Core + ",paraId:2,tocIndex:1},{value:"Antd",paraId:2,tocIndex:1},{value:" \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u8868\u5355\u6E32\u67D3\u5E93\u3002",paraId:2,tocIndex:1},{value:"Search",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:2,tocIndex:1},{value:"SearchTable",paraId:2,tocIndex:1},{value:"\uFF1A\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u3002",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u9879\u76EE\u662F\u57FA\u4E8E React \u6280\u672F\u6808\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u540E\u7F00\u90FD\u52A0\u4E86 ",paraId:4},{value:"-react",paraId:4},{value:" \u5B57\u773C\uFF0C\u540E\u7EED\u53EF\u80FD\u4F1A\u5C06 Core \u62BD\u79BB\u6210\u4E0D\u4F9D\u8D56\u4E8E\u6280\u672F\u6808\u7684\u7EAF JavaScript \u9879\u76EE\uFF0C\u4EE5\u4FBF\u652F\u6301\u4EFB\u4F55\u6280\u672F\u6846\u67B6\u3002",paraId:4},{value:"FormRender\u3001Search\u3001SearchTable \u4F7F\u7528\u7684\u662F ",paraId:5,tocIndex:2},{value:"CSS Modules",paraId:5,tocIndex:2},{value:" \u7684\u6837\u5F0F\u65B9\u6848\uFF0C\u6545\u9879\u76EE\u9700\u8981\u5F00\u542F\u6A21\u5757\u7F16\u8BD1\u3002",paraId:5,tocIndex:2},{value:"\u4EE5 ",paraId:6,tocIndex:2},{value:"Next.js",paraId:6,tocIndex:2},{value:" \u4E3A\u4F8B\uFF0C\u9879\u76EE\u9700\u914D\u7F6E ",paraId:6,tocIndex:2},{value:"next.config.js",paraId:6,tocIndex:2},{value:" \u6587\u4EF6\uFF1A",paraId:6,tocIndex:2},{value:`// \u7F16\u8BD1 node_modules \u4E0B\u7684\u6A21\u5757
{
  transpilePackages: [
    '@schema-render/core-react',
    '@schema-render/form-render-react',
    '@schema-render/search-react',
    '@schema-render/search-table-react',
  ]
}
`,paraId:7,tocIndex:2},{value:"\u6E32\u67D3\u5185\u6838\u5FC5\u987B\u7EC4\u88C5 ",paraId:8,tocIndex:3},{value:"itemLayout",paraId:8,tocIndex:3},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:8,tocIndex:3},{value:"Renderers",paraId:8,tocIndex:3},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u6765\u5B9E\u73B0\u4E00\u4E2A\u6E32\u67D3\u5E93\uFF0C\u7136\u540E\u901A\u8FC7 JSON Schema \u9A71\u52A8\u6E32\u67D3\u51FA\u6240\u9700\u7684\u8868\u5355\u3002",paraId:8,tocIndex:3},{value:"\u7279\u70B9\uFF1A\u534F\u8BAE\u9A71\u52A8\u3001\u7B80\u6D01\u6613\u7528\u3001\u9AD8\u53EF\u5B9A\u5236\u3001\u8F7B\u91CF\u7EA7\u3002",paraId:9,tocIndex:3},{value:"\u534F\u8BAE\u9A71\u52A8",paraId:10,tocIndex:3},{value:"\uFF1A\u901A\u8FC7\u7F16\u5199\u4E00\u4EFD\u7B80\u6613\u7684 JSON Schema \u6765\u5B9E\u73B0\u5185\u5BB9\u7684\u6E32\u67D3\uFF0C\u53C2\u8003",paraId:10,tocIndex:3},{value:"\u5FEB\u901F\u4E0A\u624B",paraId:11,tocIndex:3},{value:"\u3002",paraId:10,tocIndex:3},{value:"\u7B80\u6D01\u6613\u7528",paraId:10,tocIndex:3},{value:"\uFF1A\u4EC1\u8005\u89C1\u4EC1\u667A\u8005\u89C1\u667A\uFF0C\u7B14\u8005\u4EE5\u4E3A\u662F\u6BD4\u8F83\u8A00\u7B80\u610F\u8D45\u3001\u6613\u7528\u7684\uFF0C\u5982\u540C\u5185\u90E8\u6E90\u7801\u4E00\u6837\uFF0C\u5316\u7E41\u4E3A\u7B80\uFF0C\u65E0\u5FC5\u8981\u4E0D\u589E\u5B9E\u4F53\u3002",paraId:10,tocIndex:3},{value:"\u9AD8\u53EF\u5B9A\u5236",paraId:10,tocIndex:3},{value:"\uFF1A\u901A\u8FC7\u7EC4\u88C5 layout\u3001itemLayout\u3001renderers \u7B49\u53EF\u4EE5\u6309\u9700\u5B9E\u73B0\u4E00\u4E2A\u8D34\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u6E32\u67D3\u5E93\uFF0C\u5982 FormRender\u3002",paraId:10,tocIndex:3},{value:"\u8F7B\u91CF\u7EA7",paraId:10,tocIndex:3},{value:"\uFF1A\u8D44\u6E90\u5305\u5927\u5C0F\u4EC5 17.6k, gzip 6.5k",paraId:10,tocIndex:3}]},87351:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(59869);const r=[{value:`npm install @schema-render/core-react --save
`,paraId:0,tocIndex:1},{value:"\u6B65\u9AA4\u4E00\uFF1A",paraId:1,tocIndex:2},{value:" \u9700\u8981\u5148\u7EC4\u88C5\u5FC5\u987B\u7684\u90E8\u4EF6 ",paraId:1,tocIndex:2},{value:"itemLayout",paraId:1,tocIndex:2},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\uFF09\u3001",paraId:1,tocIndex:2},{value:"Renderers",paraId:1,tocIndex:2},{value:"\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4F7F Core \u8FD0\u884C\u5B8C\u6574\u3002",paraId:1,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:": \u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:2},{value:"Renderers",paraId:2,tocIndex:2},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u8868\u5355\u9879\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C",paraId:2,tocIndex:2},{value:"schema \u534F\u8BAE",paraId:2,tocIndex:2},{value:" \u7684 ",paraId:2,tocIndex:2},{value:"renderType",paraId:2,tocIndex:2},{value:" \u5B57\u6BB5\u6307\u5411\u5176\u540D\u79F0\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:2,tocIndex:2},{value:"\u6E32\u67D3\u5668 Renderer",paraId:4,tocIndex:2},{value:"\u6B65\u9AA4\u4E8C\uFF1A",paraId:5,tocIndex:2},{value:" \u7136\u540E\u901A\u8FC7\u58F0\u660E ",paraId:5,tocIndex:2},{value:"Schema \u534F\u8BAE",paraId:5,tocIndex:2},{value:" \u6765\u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u4EC0\u4E48\u6837\u7684\u8868\u5355\u3002",paraId:5,tocIndex:2},{value:"\u534F\u8BAE\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:6,tocIndex:2},{value:"\u534F\u8BAE\u4ECB\u7ECD Schema",paraId:7,tocIndex:2},{value:"\u6B65\u9AA4\u4E09\uFF1A",paraId:8,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:8,tocIndex:2},{value:"onChange",paraId:8,tocIndex:2},{value:" \u4E8B\u4EF6\u83B7\u53D6\u8868\u5355\u7684\u6574\u4F53\u6570\u636E\u3002",paraId:8,tocIndex:2},{value:"\u4E8B\u4EF6\u8BE6\u60C5\u8BF7\u53C2\u89C1 ",paraId:9,tocIndex:2},{value:"\u6570\u636E\u56DE\u8C03 ChangeEvent",paraId:10,tocIndex:2},{value:"\u6B65\u9AA4\u56DB\uFF1A",paraId:11,tocIndex:2},{value:" \u53EF\u9009\u6B65\u9AA4\uFF0C\u901A\u8FC7 ",paraId:11,tocIndex:2},{value:"value",paraId:11,tocIndex:2},{value:" \u53C2\u6570\u5B9E\u73B0\u8868\u5355\u6570\u636E\u81EA\u5DF1\u63A7\u5236\u3002",paraId:11,tocIndex:2},{value:"\u53C2\u8003\u9605\u8BFB\uFF1A",paraId:12,tocIndex:2},{value:"\u72B6\u6001\u53D7\u63A7\u4E0E\u975E\u53D7\u63A7",paraId:12,tocIndex:2},{value:"\u6B65\u9AA4\u4E00\u548C\u6B65\u9AA4\u4E8C",paraId:13,tocIndex:3},{value:"\u589E\u52A0\u6B65\u9AA4\u4E09",paraId:14,tocIndex:4}]},43504:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(76777);const r=[{value:"\u57FA\u7840\u534F\u8BAE\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u9879\u7684\u57FA\u7840\u529F\u80FD\u3002",paraId:0,tocIndex:2},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:1,tocIndex:3},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6807\u9898\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:2,tocIndex:4},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u7684\u63CF\u8FF0\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002",paraId:3,tocIndex:5},{value:`\u5B9A\u4E49\u8868\u5355\u9879\u7684\u6E32\u67D3\u4E3B\u4F53\u5185\u5BB9\uFF0C\u5982\u5927\u56FE\u6240\u793A\u3002
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
`,paraId:27,tocIndex:17},{value:"\u7ED9\u8868\u5355\u9879\u8BBE\u7F6E\u6837\u5F0F\uFF0C\u540C ",paraId:28,tocIndex:18},{value:"className",paraId:28,tocIndex:18},{value:"\u3002",paraId:28,tocIndex:18},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u5360\u7528\u7684\u6805\u683C\u5BBD\u5EA6\u3002",paraId:29,tocIndex:19},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:30,tocIndex:19},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:31,tocIndex:19},{value:"\u8BBE\u7F6E\u6805\u683C\u5E03\u5C40\u6A21\u5F0F\u4E0B\uFF0C\u8868\u5355\u9879\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002",paraId:32,tocIndex:20},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:33,tocIndex:20},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:34,tocIndex:20},{value:"\u6570\u636E\u6821\u9A8C\u534F\u8BAE\u901A\u8FC7 ",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u5173\u952E\u5B57\u5B9A\u4E49\uFF0C",paraId:35,tocIndex:21},{value:"rules",paraId:35,tocIndex:21},{value:" \u89C4\u5219\u662F\u501F\u9274 async-validator API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:35,tocIndex:21},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:36,tocIndex:21},{value:"type",paraId:36,tocIndex:21},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:36,tocIndex:21},{value:"\u540D\u79F0",paraId:37,tocIndex:21},{value:"\u8BF4\u660E",paraId:37,tocIndex:21},{value:"\u7C7B\u578B",paraId:37,tocIndex:21},{value:"type",paraId:37,tocIndex:21},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"required",paraId:37,tocIndex:21},{value:"\u662F\u5426\u5FC5\u586B",paraId:37,tocIndex:21},{value:"boolean",paraId:37,tocIndex:21},{value:"min",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"max",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"len",paraId:37,tocIndex:21},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:37,tocIndex:21},{value:"number",paraId:37,tocIndex:21},{value:"pattern",paraId:37,tocIndex:21},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"validator",paraId:37,tocIndex:21},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"message",paraId:37,tocIndex:21},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:37,tocIndex:21},{value:"string",paraId:37,tocIndex:21},{value:"\u793A\u4F8B",paraId:38,tocIndex:21},{value:"\u8BE6\u60C5\u8BF7\u79FB\u6B65\u81F3 ",paraId:39},{value:"\u6821\u9A8C\u5668 Validator",paraId:40},{value:"\u534F\u8BAE\u4FDD\u7559\u5173\u952E\u5B57\u53EF\u80FD\u4F1A\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u4F7F\u7528\uFF0C\u4E3A\u4E86\u907F\u514D\u51B2\u7A81\uFF0C\u5E94\u5F53\u4E0D\u5360\u7528\uFF1B\u4FDD\u7559\u5173\u952E\u5B57\u5217\u8868\u5982\u4E0B",paraId:41,tocIndex:22},{value:"type",paraId:42,tocIndex:22},{value:": \u5B9A\u4E49\u5F53\u524D\u8868\u5355\u9879\u5BF9\u5E94\u7684\u7EAF ",paraId:42,tocIndex:22},{value:"JavaScript",paraId:42,tocIndex:22},{value:" \u6570\u636E\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:42,tocIndex:22},{value:"string",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"number",paraId:42,tocIndex:22},{value:"\u3001",paraId:42,tocIndex:22},{value:"object",paraId:42,tocIndex:22},{value:" \u7B49\u3002",paraId:42,tocIndex:22}]},12157:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(84894);const r=[{value:"layout",paraId:0,tocIndex:0},{value:" \u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u4E4B\u95F4",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u6A21\u5F0F\u3002",paraId:0,tocIndex:0},{value:"normal",paraId:1,tocIndex:0},{value:": \u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u6807\u51C6\u6805\u683C\u5E03\u5C40\uFF0C\u5C06\u5BB9\u5668\u5747\u5206\u4E3A ",paraId:1,tocIndex:0},{value:"24",paraId:1,tocIndex:0},{value:" \u4EFD\uFF0C\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\uFF08\u5373 24 \u4EFD\uFF09\uFF1B\u5F53\u7136\u53EF\u4EE5\u5728 Schema \u91CC\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"span",paraId:1,tocIndex:0},{value:" \u5B57\u6BB5\u8BBE\u7F6E\u7279\u5B9A\u7684\u4EFD\u6570\uFF08\u5BBD\u5EA6\uFF09\u3002",paraId:1,tocIndex:0},{value:"autoFill",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0C",paraId:1,tocIndex:0},{value:"CSS Grid",paraId:1,tocIndex:0},{value:" autoFill \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"autoFit",paraId:1,tocIndex:0},{value:": \u6307\u5B9A\u8868\u5355\u9879\u6700\u5C0F\u6700\u5927\u5BBD\u5EA6\u7684\u81EA\u9002\u5E94\u5E03\u5C40\uFF0CCSS Grid autoFit \u6A21\u5F0F\u3002",paraId:1,tocIndex:0},{value:"\u6BCF\u4E2A\u8868\u5355\u9879\u9ED8\u8BA4\u5360\u6EE1\u4E00\u884C\u3002",paraId:2,tocIndex:1},{value:"\u901A\u8FC7\u5728 ",paraId:3,tocIndex:2},{value:"Schema",paraId:3,tocIndex:2},{value:" \u4E0A\u6307\u5B9A ",paraId:3,tocIndex:2},{value:"span",paraId:3,tocIndex:2},{value:" \u548C ",paraId:3,tocIndex:2},{value:"spanStart",paraId:3,tocIndex:2},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:3,tocIndex:2},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:2},{value:"\u548C",paraId:3,tocIndex:2},{value:"\u4F4D\u7F6E",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u5BBD\u5EA6\uFF0C\u4EE5\u4EFD\u8BA1\u7B97\u3002",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:": \u6307\u5B9A\u8868\u5355\u9879\u4ECE\u7B2C\u51E0\u4E2A\u6805\u683C\u5F00\u59CB\uFF0C\u901A\u5E38\u5728\u9700\u8981\u6362\u884C\u7684\u65F6\u5019\u4F7F\u7528\u3002",paraId:4,tocIndex:2},{value:"\u5F53 ",paraId:4,tocIndex:2},{value:"span",paraId:4,tocIndex:2},{value:" \u548C ",paraId:4,tocIndex:2},{value:"spanStart",paraId:4,tocIndex:2},{value:" \u90FD\u672A\u5B9A\u4E49\u65F6\uFF0C\u81EA\u52A8\u6062\u590D\u5E38\u89C4\u6A21\u5F0F\uFF08\u5360\u6EE1\u4E00\u884C\uFF09",paraId:4,tocIndex:2},{value:"\u6839\u636E\u8BBE\u7F6E\u7684 ",paraId:5,tocIndex:3},{value:"layoutMinMax",paraId:5,tocIndex:3},{value:"\uFF08\u5373 ",paraId:5,tocIndex:3},{value:"Grid minmax",paraId:5,tocIndex:3},{value:"\uFF09\u4E0E",paraId:5,tocIndex:3},{value:"\u8868\u5355\u6839\u5143\u7D20",paraId:5,tocIndex:3},{value:"\u5BBD\u5EA6\u52A8\u6001\u8BA1\u7B97\u5E03\u5C40\u5BBD\u5EA6\uFF0C\u52A8\u6001\u6392\u5217\u4E0E\u6362\u884C\u3002",paraId:5,tocIndex:3},{value:"autoFit",paraId:6,tocIndex:4},{value:" \u4E0E ",paraId:6,tocIndex:4},{value:"autoFill",paraId:6,tocIndex:4},{value:" \u96F7\u540C\uFF0C\u7EC6\u5FAE\u7684\u5DEE\u522B\u8BF7\u67E5\u770B ",paraId:6,tocIndex:4},{value:"\u8FD9\u7BC7\u6587\u7AE0\u7684\u5BF9\u6BD4",paraId:6,tocIndex:4},{value:"\u3002",paraId:6,tocIndex:4},{value:"\u4E0D\u7BA1\u662F ",paraId:7,tocIndex:5},{value:"autoFill",paraId:7,tocIndex:5},{value:" \u8FD8\u662F ",paraId:7,tocIndex:5},{value:"autoFit",paraId:7,tocIndex:5},{value:" \u90FD\u53EF\u4EE5\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"layoutMinMax",paraId:7,tocIndex:5},{value:" \u8BBE\u7F6E\u8868\u5355\u9879\u5BBD\u5EA6\u7684\u6700\u5C0F\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:7,tocIndex:5},{value:"['320px', '1fr']",paraId:7,tocIndex:5},{value:"\u3002",paraId:7,tocIndex:5},{value:"\u4EE5\u4E0B\u793A\u4F8B\u8BBE\u7F6E\u6700\u5C0F\u6700\u5927\u90FD\u4E3A ",paraId:8,tocIndex:5},{value:"230px",paraId:8,tocIndex:5},{value:" \u7684\u5E03\u5C40\u3002",paraId:8,tocIndex:5},{value:"layoutMinMax",paraId:9},{value:" \u5185\u7684\u503C\u53EF\u4EE5\u662F ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F ",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\uFF0C",paraId:9},{value:"number",paraId:9},{value:" \u7C7B\u578B\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6210\u4EE5 ",paraId:9},{value:"px",paraId:9},{value:" \u4E3A\u5355\u4F4D\u7684 ",paraId:9},{value:"string",paraId:9},{value:" \u7C7B\u578B\u503C\u3002",paraId:9}]},14569:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(23382);const r=[{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u7528\u4E8E\u5B9A\u4E49 ",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u5185\u90E8",paraId:0,tocIndex:0},{value:" \u7684\u5E03\u5C40\u7ED3\u6784\u3002",paraId:0,tocIndex:0},{value:"\u5E38\u89C1\u7684\u5E03\u5C40\u7ED3\u6784\u6709 2 \u79CD\uFF1A\u7EB5\u5411\u5E03\u5C40\uFF08Vertical\uFF09\u548C\u6A2A\u5411\u5E03\u5C40\uFF08Horizontal\uFF09\uFF0C\u4E0B\u9762\u7684\u7AE0\u8282\u5C06\u4E3E\u4F8B\u5B9E\u73B0\u8FD9\u4E24\u79CD\u5E03\u5C40\u3002",paraId:1,tocIndex:0},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"IOpenItemLayoutParams",paraId:2,tocIndex:3},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:2,tocIndex:3},{value:"\u53C2\u6570",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"schema",paraId:3,tocIndex:3},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:3,tocIndex:3},{value:"ISchema",paraId:3,tocIndex:3},{value:"required",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"disabled",paraId:3,tocIndex:3},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"readonly",paraId:3,tocIndex:3},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:3,tocIndex:3},{value:"boolean",paraId:3,tocIndex:3},{value:"validator",paraId:3,tocIndex:3},{value:"\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F\uFF0C\u5305\u542B ",paraId:3,tocIndex:3},{value:"status(\u72B6\u6001)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"message(\u63D0\u793A\u4FE1\u606F)",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"extra(\u989D\u5916\u6570\u636E)",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"locale",paraId:3,tocIndex:3},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"userCtx",paraId:3,tocIndex:3},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:3,tocIndex:3},{value:"object",paraId:3,tocIndex:3},{value:"body",paraId:3,tocIndex:3},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"prefixClassNames",paraId:3,tocIndex:3},{value:"\u5BF9 ",paraId:3,tocIndex:3},{value:"classnames",paraId:3,tocIndex:3},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:3,tocIndex:3},{value:"(...args: classNames.ArgumentArray) => string",paraId:3,tocIndex:3}]},49116:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(86131);const r=[{value:"\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"prefixCls",paraId:0,tocIndex:0},{value:" \u5B9A\u5236\u6837\u5F0F\u7C7B\u540D\u524D\u7F00",paraId:0,tocIndex:0},{value:"\u6253\u5F00 DevTools \u9762\u677F\u67E5\u770B DOM \u5143\u7D20\u7C7B\u540D",paraId:1}]},44272:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(15208);const r=[{value:"\u5F53\u8868\u5355\u9879\u6570\u636E\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8868\u5355\u5168\u91CF\u6570\u636E\u3002",paraId:0,tocIndex:1},{value:"onChange",paraId:1},{value:" \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\uFF0C\u5305\u542B\u5982\u4E0B\u6570\u636E\uFF1A",paraId:1},{value:"path",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u7684\u8868\u5355\u9879\u7684\u5B8C\u6574\u8DEF\u5F84\uFF0C",paraId:2},{value:"array",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"sPath",paraId:2},{value:": \u5B8C\u6574\u8DEF\u5F84\u7684\u5B57\u7B26\u4E32\u5316\u8868\u793A\uFF0C",paraId:2},{value:"string",paraId:2},{value:" \u683C\u5F0F\u3002",paraId:2},{value:"value",paraId:2},{value:": \u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u7684\u6570\u636E\u503C\u3002",paraId:2},{value:"extra",paraId:2},{value:": \u643A\u5E26\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u4EFB\u610F\u6570\u636E\u683C\u5F0F\u3002",paraId:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4E0E ",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:" \u8C03\u7528\u65F6\u673A\u4E00\u81F4\uFF0C\u53EA\u662F ",paraId:3,tocIndex:2},{value:"onItemChange",paraId:3,tocIndex:2},{value:" \u4EC5\u5305\u542B\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u4FE1\u606F\u3002",paraId:3,tocIndex:2},{value:"\u9002\u7528\u4E8E\u4E0D\u9700\u8981\u63A5\u7BA1\u6574\u4E2A\u8868\u5355\u6570\u636E\uFF08value\uFF09\uFF0C\u53C8\u9700\u8981\u76D1\u542C\u67D0\u4E2A\u8868\u5355\u9879\u53D8\u5316\u800C\u540E\u5904\u7406\u4E00\u4E9B\u4E8B\u60C5\u7684\u573A\u666F\u3002",paraId:4,tocIndex:2},{value:"\u989D\u5916\u4FE1\u606F\u662F\u6E32\u67D3\u5668\u5728\u53D1\u751F ",paraId:5,tocIndex:3},{value:"change",paraId:5,tocIndex:3},{value:" \u4E8B\u4EF6\u65F6\u544A\u77E5\u7ED9\u5916\u9762\u7684\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u5904\u7406\u7279\u6B8A\u573A\u666F\u7684\u9700\u6C42\u3002",paraId:5,tocIndex:3}]},19520:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(233);const r=[{value:"\u6570\u636E\u8054\u52A8\u6709\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5206\u522B\u662F ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"watch",paraId:0,tocIndex:0},{value:" \u4E24\u79CD\u65B9\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u5728\u89E6\u53D1 ",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:" \u4E8B\u4EF6\u65F6\uFF0C\u901A\u8FC7\u6539\u53D8\u6570\u636E\u5B9E\u73B0\u3002",paraId:1,tocIndex:1},{value:"watch",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u662F ",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:" \u65B9\u5F0F\u7684\u4E00\u79CD\u4FBF\u6377\u5199\u6CD5\uFF0C\u907F\u514D\u5927\u91CF ",paraId:2,tocIndex:2},{value:"if",paraId:2,tocIndex:2},{value:" \u8BED\u53E5\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u6E05\u6670\u5EA6\u4EE5\u53CA\u7814\u53D1\u6548\u7387\u3002",paraId:2,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:" \u5339\u914D\u7684\u662F ",paraId:3,tocIndex:2},{value:"sPath",paraId:3,tocIndex:2},{value:" \u8DEF\u5F84\u503C\uFF0C\u5982\u679C\u662F\u5D4C\u5957\u8DEF\u5F84\u503C\uFF0C\u5219\u4F7F\u7528\u70B9 ",paraId:3,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:" \u62FC\u63A5\u8868\u793A\uFF0C\u5982 ",paraId:3,tocIndex:2},{value:"objectX.width",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"\u8054\u52A8\u5BF9\u8C61\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:3},{value:"extra",paraId:4,tocIndex:3},{value:" \u5C5E\u6027\u6765\u5904\u7406\u3002",paraId:4,tocIndex:3}]},53671:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(39008);const r=[{value:"\u6E32\u67D3\u5668\u662F\u4E3B\u8981\u5185\u5BB9\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C5E\u6027\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:": \u6CE8\u518C\u6E32\u67D3\u5668\u7EC4\u4EF6\uFF0C\u6E32\u67D3\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EF\u72EC\u7ACB\u5B9A\u4E49\u5E03\u5C40\u7ED3\u6784\uFF08\u4E0D\u53D7\u9650\u4E8E itemLayout \u5E03\u5C40\uFF09\uFF0C",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:" \u7C7B\u578B\u3002",paraId:1,tocIndex:0},{value:"readonlyComponent",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"component",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"readonlyFormItem",paraId:1,tocIndex:0},{value:": \u53EA\u8BFB\u6001\u65F6\uFF0C",paraId:1,tocIndex:0},{value:"formItem",paraId:1,tocIndex:0},{value:" \u6A21\u5F0F\u7684\u53EF\u9009\u66FF\u4EE3\u65B9\u6848\u3002",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"\u6E32\u67D3\u5668\u7EC4\u4EF6\u6CE8\u518C\u6D41\u7A0B\u5982\u4E0B\uFF1A",paraId:2,tocIndex:0},{value:"component",paraId:3,tocIndex:1},{value:" \u6A21\u5F0F\u662F\u5E38\u7528\u7684\u5B9A\u4E49\u6E32\u67D3\u5668\u7EC4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u7F16\u5199\u6807\u9898\u4E0E\u5185\u5BB9\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u7531 ",paraId:3,tocIndex:1},{value:"itemLayout",paraId:3,tocIndex:1},{value:" \u7EDF\u4E00\u7BA1\u7406\u3002",paraId:3,tocIndex:1},{value:"\u4E0B\u9762\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"component",paraId:4,tocIndex:1},{value:" \u6A21\u5F0F\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8BC4\u5206\u6E32\u67D3\u5668\u3002",paraId:4,tocIndex:1},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:5,tocIndex:2},{value:"IOpenComponentParams",paraId:5,tocIndex:2},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:5,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:2},{value:"\u8BF4\u660E",paraId:6,tocIndex:2},{value:"\u7C7B\u578B",paraId:6,tocIndex:2},{value:"schema",paraId:6,tocIndex:2},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:6,tocIndex:2},{value:"ISchema",paraId:6,tocIndex:2},{value:"value",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:6,tocIndex:2},{value:"any",paraId:6,tocIndex:2},{value:"rootValue",paraId:6,tocIndex:2},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"path",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:6,tocIndex:2},{value:"array",paraId:6,tocIndex:2},{value:"sPath",paraId:6,tocIndex:2},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:6,tocIndex:2},{value:"string",paraId:6,tocIndex:2},{value:"required",paraId:6,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"disabled",paraId:6,tocIndex:2},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"readonly",paraId:6,tocIndex:2},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:6,tocIndex:2},{value:"boolean",paraId:6,tocIndex:2},{value:"locale",paraId:6,tocIndex:2},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"userCtx",paraId:6,tocIndex:2},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"objectStyle",paraId:6,tocIndex:2},{value:"\u5BF9\u8C61\u7C7B\u578B\u6837\u5F0F",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"validator",paraId:6,tocIndex:2},{value:"\u6821\u9A8C\u5668\u4FE1\u606F\uFF0C\u5305\u542B\u6821\u9A8C\u72B6\u6001\u3001\u63D0\u793A\u6D88\u606F\u4E0E\u9644\u52A0\u6570\u636E",paraId:6,tocIndex:2},{value:"object",paraId:6,tocIndex:2},{value:"onChange",paraId:6,tocIndex:2},{value:"\u8868\u5355\u9879\u503C\u56DE\u8C03\u4E8B\u4EF6",paraId:6,tocIndex:2},{value:"Function",paraId:6,tocIndex:2},{value:"\u51FD\u6570\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: any, options?: IOpenChangeOptions) => void",paraId:7,tocIndex:3},{value:"options",paraId:7,tocIndex:3},{value:` \u53EF\u9009\u53C2\u6570\u5982\u4E0B\uFF1A
`,paraId:7,tocIndex:3},{value:"triggerValidator",paraId:8,tocIndex:3},{value:": \u662F\u5426\u89E6\u53D1\u6821\u9A8C\u5668\uFF0C",paraId:8,tocIndex:3},{value:"boolean",paraId:8,tocIndex:3},{value:" \u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"extra",paraId:8,tocIndex:3},{value:": \u643A\u5E26\u7684\u989D\u5916\u6570\u636E\uFF0C\u4EFB\u610F\u7C7B\u578B\u3002",paraId:8,tocIndex:3},{value:"formItem",paraId:9,tocIndex:4},{value:" \u6A21\u5F0F\u9002\u7528\u4E8E\u9700\u8981\u7A81\u7834 ",paraId:9,tocIndex:4},{value:"itemLayout",paraId:9,tocIndex:4},{value:" \u7684\u9650\u5236\uFF0C\u72EC\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u7684\u5E03\u5C40\u7684\u573A\u666F\u3002",paraId:9,tocIndex:4},{value:"\u540C\u6837\u4EE5\u8BC4\u5206\u6E32\u67D3\u5668\u4E3A\u4F8B\uFF0C\u5C06\u8868\u5355\u9879\u7684\u6807\u9898\u52A0\u7C97\u52A0\u7EA2\u6765\u5C55\u793A\u3002",paraId:10,tocIndex:4},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:5},{value:"IOpenFormItemParams",paraId:11,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:11,tocIndex:5},{value:"\u76EE\u524D ",paraId:12,tocIndex:5},{value:"formItem",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E0E ",paraId:12,tocIndex:5},{value:"component",paraId:12,tocIndex:5},{value:" \u53C2\u6570\u4E00\u81F4\u3002",paraId:12,tocIndex:5},{value:"\u7F16\u5199\u53EA\u8BFB\u6001\u903B\u8F91\u6709 2 \u79CD\u65B9\u5F0F\uFF1A",paraId:13,tocIndex:6},{value:"\u7B2C\u4E00\u79CD\uFF0C\u5728 ",paraId:14,tocIndex:6},{value:"component",paraId:14,tocIndex:6},{value:" \u7EC4\u4EF6\u91CC\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonly",paraId:14,tocIndex:6},{value:" \u72B6\u6001\u533A\u5206\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5B58\u5728 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\uFF0C\u5E76\u4E14\u5728\u590D\u6742\u7EC4\u4EF6\u91CC\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"\u7B2C\u4E8C\u79CD\uFF0C\u901A\u8FC7 ",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:14,tocIndex:6},{value:" \u58F0\u660E\uFF0C\u53EF\u4EE5\u51CF\u5C11 ",paraId:14,tocIndex:6},{value:"if",paraId:14,tocIndex:6},{value:" \u8BED\u53E5\u4F7F\u5F97\u67B6\u6784\u66F4\u6E05\u6670\uFF0C\u5BF9\u4E8E\u590D\u6742\u7684\u7EC4\u4EF6\u907F\u514D\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u72B6\u6001\u5B9A\u4E49\u7B49\u903B\u8F91\u3002",paraId:14,tocIndex:6},{value:"readonlyComponent",paraId:15,tocIndex:6},{value:" \u53C2\u6570\u4E0E ",paraId:15,tocIndex:6},{value:"component",paraId:15,tocIndex:6},{value:" \u4E00\u81F4\u3002",paraId:15,tocIndex:6},{value:"readonlyFormItem",paraId:16,tocIndex:7},{value:" \u4E0E ",paraId:16,tocIndex:7},{value:"readonlyComponent",paraId:16,tocIndex:7},{value:" \u6A21\u5F0F\u4E00\u81F4\uFF0C\u53C2\u6570\u4E0E ",paraId:16,tocIndex:7},{value:"formItem",paraId:16,tocIndex:7},{value:" \u4E00\u81F4\u3002",paraId:16,tocIndex:7},{value:"\u6E32\u67D3\u5668\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u7ED1\u5B9A\u7684\u6821\u9A8C\u89C4\u5219\uFF1B\u8BE6\u60C5\u89C1 ",paraId:17,tocIndex:8},{value:"Renderer Validator",paraId:18,tocIndex:8},{value:"\u3002",paraId:17,tocIndex:8}]},71905:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(37424);const r=[{value:"\u901A\u8FC7\u521B\u5EFA\u4EE5 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u5F00\u5934\u7684\u6E32\u67D3\u5668\u53EF\u4EE5\u5236\u4F5C\u5D4C\u5957\u7684\u7ED3\u6784\u8868\u5355\uFF0C\u652F\u6301\u591A\u79CD\u4E0D\u540C\u529F\u80FD\u7684 ",paraId:0,tocIndex:0},{value:"Object",paraId:0,tocIndex:0},{value:" \u6E32\u67D3\u5668\u540C\u65F6\u5B58\u5728\u3002",paraId:0,tocIndex:0},{value:"\u5212\u91CD\u70B9\uFF1A",paraId:1,tocIndex:0},{value:"Schema \u534F\u8BAE\u6A21\u578B\u7684\u5B50\u8282\u70B9\u901A\u8FC7\u8C03\u7528 ",paraId:2,tocIndex:0},{value:"RendererIterator",paraId:2,tocIndex:0},{value:" \u6E32\u67D3\u5668\u8FED\u4EE3\u5668\u6765\u6E32\u67D3\u3002",paraId:2,tocIndex:0},{value:"\u5BB9\u5668\u5143\u7D20\u9700\u8981\u6DFB\u52A0 ",paraId:2,tocIndex:0},{value:"objectStyle",paraId:2,tocIndex:0},{value:" \u6837\u5F0F\uFF0C\u4EE5\u7EE7\u627F\u5185\u6838\u4E00\u81F4\u7684\u6805\u683C\u5E03\u5C40\u3002",paraId:2,tocIndex:0},{value:`<div style={objectStyle}>
  <RendererIterator schema={schema} path={path} />
</div>
`,paraId:3,tocIndex:0},{value:"\u6309\u89C4\u8303\u7F16\u5199\u7684\u5BF9\u8C61\u7ED3\u6784 Schema \u662F\u652F\u6301\u5185\u7F6E\u81EA\u52A8\u6821\u9A8C\u7684\uFF0C\u6821\u9A8C\u529F\u80FD\u8BE6\u89C1 ",paraId:4,tocIndex:2},{value:"\u6821\u9A8C\u5668 Validator",paraId:5,tocIndex:2},{value:" \u7AE0\u8282\u3002",paraId:4,tocIndex:2}]},73148:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(48966);const r=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},12875:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(92436);const r=[{value:"\u6821\u9A8C\u529F\u80FD\u6709\u5982\u4E0B\u4E09\u79CD\u65B9\u5F0F\u5B9A\u4E49\uFF1A",paraId:0,tocIndex:0},{value:"Schema Rules",paraId:1,tocIndex:0},{value:": Schema \u534F\u8BAE ",paraId:1,tocIndex:0},{value:"rules",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Global Validators",paraId:1,tocIndex:0},{value:": \u5168\u5C40 ",paraId:1,tocIndex:0},{value:"validators",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Renderer Validator",paraId:1,tocIndex:0},{value:": \u6E32\u67D3\u5668 ",paraId:1,tocIndex:0},{value:"validator",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002",paraId:1,tocIndex:0},{value:"Schema Rules \u89C4\u5219\u901A\u8FC7\u5728 Schema \u534F\u8BAE\u58F0\u660E ",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u6765\u5B9A\u4E49\uFF0C",paraId:2,tocIndex:1},{value:"rules",paraId:2,tocIndex:1},{value:" \u89C4\u5219\u662F\u501F\u9274 ",paraId:2,tocIndex:1},{value:"async-validator",paraId:2,tocIndex:1},{value:" API \u5185\u90E8\u5B9E\u73B0\u7684\u4E00\u5957\u6821\u9A8C\u80FD\u529B\u5B50\u96C6\uFF0C\u4EE5\u4FDD\u6301 JSON Schema \u53EF\u5E8F\u5217\u5316\uFF0C\u4EE5\u53CA\u6838\u5FC3\u5E93\u7684\u8F7B\u91CF\u597D\u7528\u3002",paraId:2,tocIndex:1},{value:"\u652F\u6301\u89C4\u5219\u5982\u4E0B\u5217\u8868\uFF0C\u90FD\u662F\u53EF\u9009\u9879\uFF0C\u540C\u65F6\u89C4\u5219\u53EF\u4EE5\u4E0D\u58F0\u660E ",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u63A8\u65AD\uFF0C\u58F0\u660E\u5219\u5177\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002",paraId:3,tocIndex:1},{value:"\u540D\u79F0",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"type",paraId:4,tocIndex:1},{value:"\u5B9A\u4E49\u6570\u636E\u7684 JavaScript \u6570\u636E\u7C7B\u578B\uFF0C\u7B26\u5408\u5B9A\u4E49\u624D\u80FD\u6821\u9A8C\u901A\u8FC7\uFF0C\u4E0D\u586B\u5219\u81EA\u52A8\u63A8\u65AD",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"required",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:1},{value:"boolean",paraId:4,tocIndex:1},{value:"min",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"max",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"len",paraId:4,tocIndex:1},{value:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"pattern",paraId:4,tocIndex:1},{value:"\u6B63\u5219\u5339\u914D\uFF0C\u4EC5 string \u7C7B\u578B\u751F\u6548",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"validator",paraId:4,tocIndex:1},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u540D\u79F0",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"message",paraId:4,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:4,tocIndex:1},{value:"string",paraId:4,tocIndex:1},{value:"\u89E6\u53D1\u65F6\u673A\uFF1A\u6BCF\u6B21\u6E32\u67D3\u5668\u7EC4\u4EF6 ",paraId:5,tocIndex:1},{value:"onChange",paraId:5,tocIndex:1},{value:" \u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u6821\u9A8C\u673A\u5236\uFF0C\u5E76\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\u3002",paraId:5,tocIndex:1},{value:"\u5982\u679C\u5E0C\u671B ",paraId:6},{value:"onChange",paraId:6},{value:" \u65F6\u4E0D\u89E6\u53D1\u6821\u9A8C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684 ",paraId:6},{value:"triggerValidator",paraId:6},{value:" \u4E3A ",paraId:6},{value:"false",paraId:6},{value:" \u5B9E\u73B0\uFF0C\u793A\u4F8B\uFF1A",paraId:6},{value:"onChange('xxx', { triggerValidator: false })",paraId:6},{value:"\u3002",paraId:6},{value:"1\u3001Schema Rules \u89C4\u5219\u91CC\u7684 validator \u5B57\u6BB5\u4E0E async-validator API \u4E0D\u5BF9\u5E94\u3002",paraId:7},{value:`
2\u3001Schema Rules \u548C Global Validators \u89C4\u5219\u91CC\u7684 validator \u5C5E\u6027\u4E0D\u5141\u8BB8\u518D\u6B21\u58F0\u660E `,paraId:7},{value:"validator",paraId:7},{value:" \u5C5E\u6027\uFF08\u5185\u90E8\u4F1A\u5FFD\u7565\uFF09\uFF0C\u907F\u514D\u9677\u5165\u5FAA\u73AF\u8C03\u7528\u3002",paraId:7},{value:"\u793A\u4F8B",paraId:8},{value:"Global Validators \u662F\u5168\u5C40\u6821\u9A8C\u5668\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u590D\u7528\u901A\u7528\u7684\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u6821\u9A8C\u5668\u6CE8\u518C\u5728\u5168\u5C40 ",paraId:9,tocIndex:2},{value:"validators",paraId:9,tocIndex:2},{value:" \u91CC\uFF0C\u7136\u540E\u5728 schema \u91CC\u901A\u8FC7 ",paraId:9,tocIndex:2},{value:"rules: [{ validator: 'name' }]",paraId:9,tocIndex:2},{value:" \u6765\u4F7F\u7528\u3002",paraId:9,tocIndex:2},{value:"\u901A\u8FC7\u6E32\u67D3\u5668\u7684 ",paraId:10,tocIndex:3},{value:"validator",paraId:10,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E0E\u6E32\u67D3\u5668\u6346\u7ED1\u5728\u4E00\u8D77\u7684\u6821\u9A8C\u89C4\u5219\u3002",paraId:10,tocIndex:3},{value:"\u63D0\u4EA4\u8868\u5355\u65F6\u5148\u6821\u9A8C\u8F93\u5165\u5185\u5BB9\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u6821\u9A8C\u901A\u8FC7\u624D\u5141\u8BB8\u63D0\u4EA4\u6570\u636E\u3002",paraId:11,tocIndex:4},{value:"Global Validators \u548C Renderer Validator \u7684\u5B9A\u4E49\u662F\u4E00\u6837\u7684\uFF0C\u652F\u6301\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\uFF1A",paraId:12,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u4E0E ",paraId:13,tocIndex:5},{value:"Schema Rules",paraId:13,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:13,tocIndex:5},{value:"validator: [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:13,tocIndex:5},{value:"\u3002",paraId:13,tocIndex:5},{value:"\u5B9A\u4E49\u4E3A\u51FD\u6570\u6821\u9A8C\uFF0C\u51FD\u6570\u53C2\u6570\u5982\u4E0B\u5217\u8868\uFF0C\u7686\u4E3A\u53EA\u8BFB\u5C5E\u6027\u3002",paraId:13,tocIndex:5},{value:"\u5982\u679C\u662F TypeScript \u9879\u76EE\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:14,tocIndex:5},{value:"IOpenValidatorParams",paraId:14,tocIndex:5},{value:" \u7C7B\u578B\u4E86\u89E3\u6240\u6709\u7684\u53C2\u6570\u53CA\u5176\u6CE8\u89E3\u3002",paraId:14,tocIndex:5},{value:"\u53C2\u6570",paraId:15,tocIndex:5},{value:"\u8BF4\u660E",paraId:15,tocIndex:5},{value:"\u7C7B\u578B",paraId:15,tocIndex:5},{value:"schema",paraId:15,tocIndex:5},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:15,tocIndex:5},{value:"ISchema",paraId:15,tocIndex:5},{value:"value",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u503C",paraId:15,tocIndex:5},{value:"any",paraId:15,tocIndex:5},{value:"rootValue",paraId:15,tocIndex:5},{value:"\u8868\u5355\u6574\u4F53\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"path",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84",paraId:15,tocIndex:5},{value:"array",paraId:15,tocIndex:5},{value:"sPath",paraId:15,tocIndex:5},{value:"\u5F53\u524D\u8868\u5355\u9879\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u683C\u5F0F\u8868\u793A",paraId:15,tocIndex:5},{value:"string",paraId:15,tocIndex:5},{value:"required",paraId:15,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"disabled",paraId:15,tocIndex:5},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"readonly",paraId:15,tocIndex:5},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:15,tocIndex:5},{value:"boolean",paraId:15,tocIndex:5},{value:"locale",paraId:15,tocIndex:5},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"userCtx",paraId:15,tocIndex:5},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:15,tocIndex:5},{value:"object",paraId:15,tocIndex:5},{value:"\u51FD\u6570\u8FD4\u56DE\u503C\u6709\u4E09\u79CD\u8FD4\u56DE\u5F62\u6001\uFF1A",paraId:16,tocIndex:5},{value:"\u8FD4\u56DE ",paraId:17,tocIndex:5},{value:"undefined",paraId:17,tocIndex:5},{value:"\uFF0C\u8868\u793A\u6821\u9A8C\u6210\u529F\u3002",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u4E0E ",paraId:17,tocIndex:5},{value:"Schema Rules",paraId:17,tocIndex:5},{value:" \u4E00\u6837\u7684\u89C4\u5219\uFF0C\u5982 ",paraId:17,tocIndex:5},{value:"return [{ min: 10, message: '\u8BF7\u8F93\u5165\u6700\u5C1110\u4E2A\u5B57\u7B26' }]",paraId:17,tocIndex:5},{value:"\u8FD4\u56DE\u6807\u51C6\u72B6\u6001\u7ED3\u6784\uFF0C\u5982\u4E0B\u63CF\u8FF0",paraId:17,tocIndex:5},{value:"\u53C2\u6570",paraId:18,tocIndex:5},{value:"\u8BF4\u660E",paraId:18,tocIndex:5},{value:"\u7C7B\u578B",paraId:18,tocIndex:5},{value:"status",paraId:18,tocIndex:5},{value:"\u6821\u9A8C\u72B6\u6001\uFF0C",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" \u9519\u8BEF\uFF0C",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" \u8B66\u544A\uFF0C",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:" \u6210\u529F",paraId:18,tocIndex:5},{value:"error",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"warning",paraId:18,tocIndex:5},{value:" | ",paraId:18,tocIndex:5},{value:"success",paraId:18,tocIndex:5},{value:"message",paraId:18,tocIndex:5},{value:"\u9519\u8BEF\u6216\u8B66\u544A\u72B6\u6001\u65F6\u7684\u63D0\u793A\u4FE1\u606F",paraId:18,tocIndex:5},{value:"string",paraId:18,tocIndex:5},{value:"extra",paraId:18,tocIndex:5},{value:"\u989D\u5916\u6570\u636E",paraId:18,tocIndex:5},{value:"any",paraId:18,tocIndex:5}]},15727:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(86685);const r=[{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u5728\u6700\u9876\u5C42\u76F4\u63A5\u63A7\u5236\u8868\u5355\u7684\u72B6\u6001\uFF0C\u4EE5\u964D\u4F4E\u534F\u8BAE\u63A7\u5236\u7F16\u7801\u6210\u672C\u3002",paraId:0,tocIndex:0},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236\u7684\u6743\u91CD\u5927\u4E8E Schema \u534F\u8BAE\u7684\u72B6\u6001\u63A7\u5236\u3002",paraId:1,tocIndex:0},{value:"\u4EE5\u4E0B\u662F\u5168\u5C40\u72B6\u6001\u63A7\u5236\u53EF\u7528\u7684\u53C2\u6570",paraId:2,tocIndex:0},{value:"disabled",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u7981\u7528",paraId:3,tocIndex:0},{value:"\uFF0C\u7981\u7528\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-disabled",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0},{value:"readonly",paraId:3,tocIndex:0},{value:": boolean \u7C7B\u578B\uFF0C\u63A7\u5236\u8868\u5355\u9879\u662F\u5426",paraId:3,tocIndex:0},{value:"\u53EA\u8BFB",paraId:3,tocIndex:0},{value:"\uFF0C\u53EA\u8BFB\u65F6\u4F1A\u5728\u6839\u8282\u70B9\u589E\u52A0 ",paraId:3,tocIndex:0},{value:"is-readonly",paraId:3,tocIndex:0},{value:" \u7C7B\u540D\u3002",paraId:3,tocIndex:0}]},59865:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(43315);const r=[{value:"\u5F53\u8868\u5355\u6BD4\u8F83\u957F\u7684\u65F6\u5019\uFF0C\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u7684\u4F4D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u7C7B\u578B\uFF1A",paraId:1,tocIndex:0},{value:"scrollTo: (paths?: string | string[], options?: IScrollToOptions) => void",paraId:1,tocIndex:0},{value:"\u540D\u79F0",paraId:2,tocIndex:1},{value:"\u63CF\u8FF0",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"paths",paraId:2,tocIndex:1},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" | ",paraId:2,tocIndex:1},{value:"string[]",paraId:2,tocIndex:1},{value:"options",paraId:2,tocIndex:1},{value:"\u9009\u9879\u53C2\u6570\uFF0C\u5982\u4E0B\u8868\u683C",paraId:2,tocIndex:1},{value:"IScrollToOptions",paraId:2,tocIndex:1},{value:"\u540D\u79F0",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"xAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 x \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"yAxis",paraId:3,tocIndex:2},{value:"\u662F\u5426\u89E6\u53D1 y \u8F74\u79FB\u52A8\uFF0C\u9ED8\u8BA4 true",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"behavior",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u8FC7\u6E21\u884C\u4E3A",paraId:3,tocIndex:2},{value:"\uFF0C\u9ED8\u8BA4 ",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:"smooth",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"instant",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"auto",paraId:3,tocIndex:2},{value:"gap",paraId:3,tocIndex:2},{value:"\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u5DEE\u503C\uFF0C\u53EF\u4EE5\u662F\u6B63\u8D1F\u503C\uFF0C\u9ED8\u8BA4\u4E3A 0",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"positionedElement",paraId:3,tocIndex:2},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20 (\u9700\u8981\u5E26\u5B9A\u4F4D\u5C5E\u6027 position)\uFF0C\u9002\u7528\u4E8E\u975E Core \u6839\u8282\u70B9\u6EDA\u52A8",paraId:3,tocIndex:2},{value:"HTMLElement",paraId:3,tocIndex:2},{value:" | ",paraId:3,tocIndex:2},{value:"Window",paraId:3,tocIndex:2},{value:"\u65E0",paraId:4,tocIndex:3},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u662F ",paraId:5,tocIndex:4},{value:"Core",paraId:5,tocIndex:4},{value:" \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",paraId:5,tocIndex:4},{value:"scrollTo",paraId:5,tocIndex:4},{value:" \u65B9\u6CD5\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u4F4D\u7F6E\u3002",paraId:5,tocIndex:4},{value:"\u5982\u679C\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u8D85\u8FC7 Core \u6839\u8282\u70B9\u5143\u7D20\uFF0C\u90A3\u4E48\u53EA\u9700\u5728 ",paraId:6,tocIndex:5},{value:"scrollTo",paraId:6,tocIndex:5},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:6,tocIndex:5},{value:"positionedElement",paraId:6,tocIndex:5},{value:" \u53C2\u6570\u4E3A\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u5373\u53EF\u3002",paraId:6,tocIndex:5},{value:"\u524D\u7F6E\u6761\u4EF6\uFF1A",paraId:7,tocIndex:5},{value:"\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u9700\u8981\u662F\u201C\u5B9A\u4F4D\u5143\u7D20\u201D\uFF0C\u5982\u58F0\u660E ",paraId:8,tocIndex:5},{value:"position",paraId:8,tocIndex:5},{value:" \u4E3A\u975E ",paraId:8,tocIndex:5},{value:"static",paraId:8,tocIndex:5},{value:" \u5C5E\u6027\uFF0C\u8FD9\u6837\u6307\u5B9A\u7684\u8868\u5355\u9879\u624D\u80FD\u67E5\u627E\u5230\u8BE5\u6EDA\u52A8\u7956\u5148\u5143\u7D20\uFF0C\u624D\u80FD\u83B7\u53D6\u5230\u6B63\u786E\u7684\u8DDD\u79BB\u3002",paraId:8,tocIndex:5},{value:"\u5B9A\u4F4D\u5143\u7D20\uFF1A",paraId:8,tocIndex:5},{value:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent",paraId:8,tocIndex:5},{value:"\u5982\u679C\u8981\u8BA9\u7A97\u53E3\u6EDA\u52A8\uFF0C\u540C\u6837\u7684\u65B9\u5F0F\uFF0C\u53EA\u9700\u5728 ",paraId:9,tocIndex:6},{value:"scrollTo",paraId:9,tocIndex:6},{value:" \u65B9\u6CD5\u6307\u5B9A ",paraId:9,tocIndex:6},{value:"positionedElement",paraId:9,tocIndex:6},{value:" \u53C2\u6570\u4E3A ",paraId:9,tocIndex:6},{value:"window",paraId:9,tocIndex:6},{value:" \u5373\u53EF\uFF0C\u4E0D\u8FC7\u5185\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB\u662F\u53EA\u8BA1\u7B97\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u56E0\u4E3A ",paraId:9,tocIndex:6},{value:"offsetParent",paraId:9,tocIndex:6},{value:" \u6700\u7EC8\u53EA\u80FD\u5B9A\u4F4D\u5230 ",paraId:9,tocIndex:6},{value:"body",paraId:9,tocIndex:6},{value:" \u5143\u7D20\uFF0C\u6240\u4EE5\uFF08\u4E5F\u662F\u5E38\u7406\u60C5\u51B5\u4E0B\uFF09body \u548C html \u5143\u7D20\u4E0D\u5E94\u8BE5\u5B58\u5728 margin \u548C padding \u503C\u3002",paraId:9,tocIndex:6}]},63021:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(46715);const r=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:0},{value:"ref",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"validate",paraId:1,tocIndex:0},{value:": \u6821\u9A8C\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"resetError",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\u3002",paraId:1,tocIndex:0},{value:"resetValue",paraId:1,tocIndex:0},{value:": \u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"setValue",paraId:1,tocIndex:0},{value:": \u8BBE\u7F6E\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getValue",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u901A\u7528\u5E93\u5C01\u88C5\uFF0C\u4E1A\u52A1\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2A API\u3002",paraId:1,tocIndex:0},{value:"getRootElement",paraId:1,tocIndex:0},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:0},{value:"findItem",paraId:1,tocIndex:0},{value:`: \u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u65B9\u6CD5\u5982\u4E0B\u3002
`,paraId:1,tocIndex:0},{value:"getRootElement",paraId:2,tocIndex:0},{value:": \u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:2,tocIndex:0},{value:"scrollTo",paraId:1,tocIndex:0},{value:": \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BE6\u89C1",paraId:1,tocIndex:0},{value:"\u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E ScrollTo",paraId:3,tocIndex:0},{value:"\u3002",paraId:1,tocIndex:0},{value:"\u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5982\u6839\u636E\u6821\u9A8C\u7ED3\u679C\u5224\u65AD\u662F\u5426\u63D0\u4EA4\u6570\u636E\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"() => Promise<IOpenValidateResult>",paraId:5,tocIndex:1},{value:"\u65E0",paraId:6,tocIndex:2},{value:"\u540D\u79F0",paraId:7,tocIndex:3},{value:"\u63CF\u8FF0",paraId:7,tocIndex:3},{value:"\u7C7B\u578B",paraId:7,tocIndex:3},{value:"hasError",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u9519\u8BEF",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"hasWarning",paraId:7,tocIndex:3},{value:"\u662F\u5426\u5B58\u5728\u8B66\u544A",paraId:7,tocIndex:3},{value:"boolean",paraId:7,tocIndex:3},{value:"errorList",paraId:7,tocIndex:3},{value:"\u9519\u8BEF\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"warningList",paraId:7,tocIndex:3},{value:"\u8B66\u544A\u8868\u5355\u9879\u6570\u636E",paraId:7,tocIndex:3},{value:"array",paraId:7,tocIndex:3},{value:"\u91CD\u7F6E\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F\uFF08\u542B\u8B66\u544A\u4FE1\u606F\uFF09\uFF0C\u5982\u6570\u636E\u56DE\u586B\u65F6\uFF0C\u53EF\u7528\u6B64\u65B9\u6CD5\u91CD\u7F6E\u9519\u8BEF\u4FE1\u606F",paraId:8,tocIndex:5},{value:"\u7C7B\u578B\uFF1A",paraId:9,tocIndex:5},{value:"(paths?: string | string[]) => void",paraId:9,tocIndex:5},{value:"\u540D\u79F0",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"paths",paraId:10,tocIndex:6},{value:"\u91CD\u7F6E\u6307\u5B9A\u8DEF\u5F84\u7684\u8868\u5355\u9879\u9519\u8BEF\u63D0\u793A\uFF0C\u6CA1\u6709\u6307\u5B9A\u8DEF\u5F84\u5219\u91CD\u7F6E\u6240\u6709\u8868\u5355\u9879",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:" | ",paraId:10,tocIndex:6},{value:"string[]",paraId:10,tocIndex:6},{value:"\u65E0",paraId:11,tocIndex:7},{value:"\u91CD\u7F6E\u8868\u5355\u6570\u636E\u3002",paraId:12,tocIndex:9},{value:"\u65E0",paraId:13,tocIndex:10},{value:"\u65E0",paraId:14,tocIndex:11},{value:"\u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:15,tocIndex:13},{value:"\u7C7B\u578B\uFF1A",paraId:16,tocIndex:13},{value:"() => HTMLDivElement | null",paraId:16,tocIndex:13},{value:"\u65E0",paraId:17,tocIndex:14},{value:"\u6839\u8282\u70B9 DOM \u5143\u7D20\u6216\u7A7A",paraId:18,tocIndex:15},{value:"\u67E5\u627E\u6307\u5B9A\u8868\u5355\u9879\uFF0C\u8FD4\u56DE\u6307\u5B9A\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u4F1A\u63D0\u4F9B\u4E00\u4E9B API \u65B9\u6CD5\u3002",paraId:19,tocIndex:17},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:17},{value:"(paths?: string | string[]) => IRendererInstance | undefined",paraId:20,tocIndex:17},{value:"\u540D\u79F0",paraId:21,tocIndex:18},{value:"\u63CF\u8FF0",paraId:21,tocIndex:18},{value:"\u7C7B\u578B",paraId:21,tocIndex:18},{value:"paths",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u8DEF\u5F84",paraId:21,tocIndex:18},{value:"string",paraId:21,tocIndex:18},{value:" | ",paraId:21,tocIndex:18},{value:"string[]",paraId:21,tocIndex:18},{value:"\u8868\u5355\u9879\u5B9E\u4F8B\uFF0C\u5F00\u653E API \u5982\u4E0B",paraId:22,tocIndex:19},{value:"\u540D\u79F0",paraId:23,tocIndex:19},{value:"\u63CF\u8FF0",paraId:23,tocIndex:19},{value:"\u7C7B\u578B",paraId:23,tocIndex:19},{value:"getRootElement",paraId:23,tocIndex:19},{value:"\u83B7\u53D6\u6307\u5B9A\u8868\u5355\u9879\u7684\u6839\u8282\u70B9 DOM \u5143\u7D20",paraId:23,tocIndex:19},{value:"() => HTMLElement | null",paraId:23,tocIndex:19}]},727:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(35786);const r=[{value:"\u8FD8\u5728\u8BBE\u8BA1\u4E2D",paraId:0}]},71789:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(69708);const r=[{value:"\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u5F53\u6355\u83B7\u5230\u9519\u8BEF\u7684\u65F6\u5019\u4F1A\u6807\u7EA2\u5C55\u793A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u4EA6\u53EF\u914D\u7F6E\u5982\u4E0B 2 \u4E2A\u53C2\u6570\u81EA\u5B9A\u4E49\u6216\u9690\u85CF\u9519\u8BEF\u63D0\u793A",paraId:0,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"\u51FD\u6570",paraId:1,tocIndex:0},{value:" \u5219\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F",paraId:1,tocIndex:0},{value:"\u4F20\u5165 ",paraId:1,tocIndex:0},{value:"silent",paraId:1,tocIndex:0},{value:" \u5219\u4E0D\u63D0\u793A\u9519\u8BEF",paraId:1,tocIndex:0}]},49961:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(96687);const r=[{value:"Core",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},47468:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(85105);const r=[{value:"\u53C2\u89C1",paraId:0,tocIndex:1},{value:"\u9519\u8BEF\u63D0\u793A\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u7C7B\u540D\u3002",paraId:2,tocIndex:2},{value:"\u8868\u5355\u9ED8\u8BA4\u503C\u3002",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5168\u5C40\u7981\u7528\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:4,tocIndex:4},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u3002",paraId:4,tocIndex:4},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:6,tocIndex:5},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:7,tocIndex:5},{value:"\u3002",paraId:6,tocIndex:5},{value:"\u8868\u5355\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u60C5\u89C1",paraId:8,tocIndex:6},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:9,tocIndex:6},{value:"\u3002",paraId:8,tocIndex:6},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u5217\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:10,tocIndex:7},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:11,tocIndex:7},{value:"\u3002",paraId:10,tocIndex:7},{value:"\u5B9A\u4E49\u8868\u5355\u9879\u6700\u5C0F\u5BBD\u5EA6\u4E0E\u6700\u5927\u5BBD\u5EA6\uFF0C\u5F53 layout \u4E3A autoFill\u3001autoFit \u65F6\u751F\u6548\uFF0C\u8BE6\u60C5\u89C1",paraId:12,tocIndex:8},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:13,tocIndex:8},{value:"\u3002",paraId:12,tocIndex:8},{value:"\u8868\u5355\u9879\u4E4B\u95F4\u7684\u884C\u95F4\u8DDD\uFF0C\u8BE6\u60C5\u89C1",paraId:14,tocIndex:9},{value:"\u5E03\u5C40\u7ED3\u6784 layout",paraId:15,tocIndex:9},{value:"\u3002",paraId:14,tocIndex:9},{value:"\u56FD\u9645\u5316\uFF0C\u8BE6\u60C5\u89C1",paraId:16,tocIndex:10},{value:"\u56FD\u9645\u5316 Locale",paraId:17,tocIndex:10},{value:"\u3002",paraId:16,tocIndex:10},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:18,tocIndex:11},{value:"onChange \u4E8B\u4EF6",paraId:19,tocIndex:11},{value:"\u3002",paraId:18,tocIndex:11},{value:"\u6570\u636E\u53D8\u5316\u4E8B\u4EF6\uFF0C\u8BE6\u60C5\u89C1",paraId:20,tocIndex:12},{value:"onItemChange \u4E8B\u4EF6",paraId:21,tocIndex:12},{value:"\u3002",paraId:20,tocIndex:12},{value:"\u6837\u5F0F\u7C7B\u540D\u524D\u7F00\uFF0C\u9ED8\u8BA4\u4E3A schema-render\u3002",paraId:22,tocIndex:13},{value:"\u662F\u5426\u5168\u5C40\u53EA\u8BFB\u8868\u5355\uFF0C\u8BE6\u60C5\u89C1",paraId:23,tocIndex:14},{value:"\u5168\u5C40\u72B6\u6001\u63A7\u5236",paraId:24,tocIndex:14},{value:"\u3002",paraId:23,tocIndex:14},{value:"\u6CE8\u518C\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:25,tocIndex:15},{value:"\u6E32\u67D3\u5668 Renderer",paraId:26,tocIndex:15},{value:"\u3002",paraId:25,tocIndex:15},{value:"Schema \u63CF\u8FF0\u534F\u8BAE\u3002",paraId:27,tocIndex:16},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u3002",paraId:28,tocIndex:17},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E\u3002",paraId:29,tocIndex:18},{value:"\u5168\u5C40\u6821\u9A8C\u5668\u96C6\u5408\uFF0C\u8BE6\u60C5\u89C1",paraId:30,tocIndex:19},{value:"Global Validators",paraId:31,tocIndex:19},{value:"\u3002",paraId:30,tocIndex:19},{value:"\u8868\u5355\u6570\u636E\u3002",paraId:32,tocIndex:20},{value:"\u76D1\u542C\u6570\u636E\u53D8\u5316\u5904\u7406\u8054\u52A8\u903B\u8F91\uFF0C\u8BE6\u60C5\u89C1",paraId:33,tocIndex:21},{value:"\u6570\u636E\u8054\u52A8 watch \u65B9\u5F0F",paraId:34,tocIndex:21},{value:"\u3002",paraId:33,tocIndex:21}]},73890:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(2755);const r=[{value:"600 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"1800 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},21979:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(88485);const r=[]},98008:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(97024);const r=[]},15672:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(92311);const r=[{value:"\u89C1: ",paraId:0,tocIndex:1},{value:"Schema Transform",paraId:1,tocIndex:1}]},3215:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(78593);const r=[]},72624:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(25105);const r=[]},38319:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(35170);const r=[{value:"\u6709 ",paraId:0,tocIndex:1},{value:"value",paraId:0,tocIndex:1},{value:"\uFF0C\u6709 ",paraId:0,tocIndex:1},{value:"onChange",paraId:0,tocIndex:1},{value:" \u573A\u666F",paraId:0,tocIndex:1},{value:"\u6709 ",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\uFF0C\u65E0 ",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:" \u573A\u666F",paraId:1,tocIndex:2},{value:"\u6709 ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:"\uFF0C\u6709 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\uFF0C\u4F46 ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:" \u4E0D\u66F4\u65B0\u503C\uFF0C\u975E\u6B63\u5E38\u573A\u666F",paraId:2,tocIndex:3},{value:"\u65E0 ",paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:"\uFF0C\u65E0 ",paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:" \u573A\u666F",paraId:3,tocIndex:4},{value:"\u65E0 ",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:"\uFF0C\u6709 ",paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:" \u573A\u666F",paraId:4,tocIndex:5}]},23352:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(12727);const r=[{value:"\u591A\u4E2A\u6E32\u67D3\u5668\u5185\u90E8\u540C\u65F6\u5728 ",paraId:0,tocIndex:0},{value:"useEffect",paraId:0,tocIndex:0},{value:" \u5185\u8C03\u7528 ",paraId:0,tocIndex:0},{value:"onChange",paraId:0,tocIndex:0},{value:" \u65B9\u6CD5\u66F4\u65B0\uFF08\u521D\u59CB\u5316\uFF09\u6570\u636E\uFF0Cvalue \u503C\u9700\u8981\u662F\u6700\u65B0\u7684",paraId:0,tocIndex:0}]},17139:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(53143);const r=[{value:"disabledComponent",paraId:0,tocIndex:0},{value:" \u4E0E ",paraId:0,tocIndex:0},{value:"disabledFormItem",paraId:0,tocIndex:0},{value:" \u9A8C\u8BC1",paraId:0,tocIndex:0}]},44878:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(65063);const r=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86\u5E03\u5C40\u7ED3\u6784\u4EE5\u53CA\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u4EE5\u8FBE\u5230 ",paraId:0,tocIndex:0},{value:"\u5F00\u7BB1\u5373\u7528",paraId:0,tocIndex:0},{value:" \u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u7EB5\u5411\u4E0E\u6A2A\u5411\u5E03\u5C40\u7ED3\u6784\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784 itemLayout",paraId:3,tocIndex:0},{value:"\u5E03\u5C40\u7ED3\u6784\u53EF\u914D\u7F6E label \u5BBD\u5EA6\u7B49\u5185\u5BB9\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6807\u9898\u8BBE\u7F6E label",paraId:4,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C\u7279\u6027\uFF0C\u5982\u63D0\u4EA4\u3001\u91CD\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:5,tocIndex:0},{value:"\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5185\u7F6E\u6E32\u67D3\u5668 renderers",paraId:6,tocIndex:0},{value:`npm install @schema-render/form-render-react --save
`,paraId:7,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:8,tocIndex:1},{value:`npm install antd --save
`,paraId:9,tocIndex:1}]},8706:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(30761);const r=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u7EB5\u5411\u4E0E\u6A2A\u5411\u7684\u5E03\u5C40\u7ED3\u6784\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u5B9A\u5236\u3002",paraId:0,tocIndex:0},{value:"\u7EB5\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:1,tocIndex:1},{value:"vertical",paraId:1,tocIndex:1},{value:" \u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6A2A\u5411\u5E03\u5C40\u53EA\u9700\u8981\u5728 ",paraId:2,tocIndex:2},{value:"itemLayout",paraId:2,tocIndex:2},{value:" \u5C5E\u6027\u4E0A\u58F0\u660E\u4E3A ",paraId:2,tocIndex:2},{value:"horizontal",paraId:2,tocIndex:2},{value:" \u5373\u53EF\u3002",paraId:2,tocIndex:2},{value:"\u5B9A\u5236\u5E03\u5C40\u8BF7\u67E5\u770B ",paraId:3,tocIndex:3},{value:"Core \u6587\u6863",paraId:4,tocIndex:3},{value:"\u3002",paraId:3,tocIndex:3}]},39263:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(25937);const r=[{value:"label",paraId:0,tocIndex:0},{value:" \u76F8\u5173\u7684\u914D\u7F6E\u4E3B\u8981\u9488\u5BF9\u4E8E ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"horizontal",paraId:0,tocIndex:0},{value:" \u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u914D\u7F6E\u5BBD\u5EA6\u3001\u95F4\u8DDD\u3001\u5192\u53F7\u3001\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",paraId:1,tocIndex:0},{value:"labelWidth",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E \u201C\u6807\u9898\u5757\u201D \u7684\u5BBD\u5EA6\uFF0C\u652F\u6301 ",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:" \u4E0E ",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:" \u7C7B\u578B\u3002",paraId:2,tocIndex:1},{value:"labelColon",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u63A7\u5236\u5192\u53F7\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u65E0\u3002",paraId:3,tocIndex:4},{value:"labelRender",paraId:4,tocIndex:5},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u201C\u6807\u9898\u5757\u201D\u7684\u6E32\u67D3\u5185\u5BB9\uFF0C\u5982\u5FC5\u586B ",paraId:4,tocIndex:5},{value:"*",paraId:4,tocIndex:5},{value:" \u53F7\u6807\u8BB0\u8C03\u6574\u4E3A ",paraId:4,tocIndex:5},{value:"(\u53EF\u9009)",paraId:4,tocIndex:5},{value:" \u8FD9\u6837\u7684\u5F62\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u540D\u79F0",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"labelWidth",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number | string",paraId:5,tocIndex:6},{value:"100",paraId:5,tocIndex:6},{value:"labelGap",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E label \u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD\uFF0C\u4EC5 ",paraId:5,tocIndex:6},{value:"itemLayout",paraId:5,tocIndex:6},{value:" \u4E3A ",paraId:5,tocIndex:6},{value:"horizontal",paraId:5,tocIndex:6},{value:" \u6709\u6548",paraId:5,tocIndex:6},{value:"number",paraId:5,tocIndex:6},{value:"15",paraId:5,tocIndex:6},{value:"labelColon",paraId:5,tocIndex:6},{value:"\u5B9A\u4E49 label \u5192\u53F7",paraId:5,tocIndex:6},{value:"ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"labelRender",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:5,tocIndex:6},{value:"(params) => ReactNode",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u9664\u4E86\u62E5\u6709 ",paraId:6,tocIndex:7},{value:"labelWidth",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelGap",paraId:6,tocIndex:7},{value:"\u3001",paraId:6,tocIndex:7},{value:"labelColon",paraId:6,tocIndex:7},{value:" \u5916\uFF0C\u8FD8\u62E5\u6709\u4EE5\u4E0B\u53C2\u6570\u3002",paraId:6,tocIndex:7},{value:"\u53C2\u6570",paraId:7,tocIndex:7},{value:"\u8BF4\u660E",paraId:7,tocIndex:7},{value:"\u7C7B\u578B",paraId:7,tocIndex:7},{value:"schema",paraId:7,tocIndex:7},{value:"Schema \u534F\u8BAE\u63CF\u8FF0\u5BF9\u8C61",paraId:7,tocIndex:7},{value:"ISchema",paraId:7,tocIndex:7},{value:"required",paraId:7,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"\u662F\u5426\u7981\u7528\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"readonly",paraId:7,tocIndex:7},{value:"\u662F\u5426\u53EA\u8BFB\u6001\uFF0C\u503C\u4E3A\u8BA1\u7B97\u540E\u7684\u7ED3\u679C",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"locale",paraId:7,tocIndex:7},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"userCtx",paraId:7,tocIndex:7},{value:"\u7528\u6237\u5168\u5C40\u4E0A\u4E0B\u6587\u6570\u636E",paraId:7,tocIndex:7},{value:"object",paraId:7,tocIndex:7},{value:"prefixClassNames",paraId:7,tocIndex:7},{value:"\u5BF9 ",paraId:7,tocIndex:7},{value:"classnames",paraId:7,tocIndex:7},{value:" \u5BFC\u51FA\u65B9\u6CD5\u7684\u5305\u88C5\uFF0C\u5E26\u6709 prefixCls \u524D\u7F00\u7684\u7C7B\u540D\u65B9\u6CD5",paraId:7,tocIndex:7},{value:"(...args: classNames.ArgumentArray) => string",paraId:7,tocIndex:7}]},43811:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(91260);const r=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4",paraId:0,tocIndex:0},{value:"\u4E0E",paraId:0,tocIndex:0},{value:"\u91CD\u7F6E",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\uFF0C\u76F8\u5173 API \u5982\u4E0B\u6587\u6240\u8FF0\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u300C\u63D0\u4EA4\u300D\u6309\u94AE\uFF0C\u6216\u5728\u8868\u5355\u5185\u6309\u4E0B\u56DE\u8F66\u952E\u89E6\u53D1\u3002",paraId:1,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:2,tocIndex:1},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:": \u8868\u5355\u6570\u636E",paraId:2,tocIndex:1},{value:"\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u7684\u65F6\u5019\u89E6\u53D1\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:4,tocIndex:2},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:": \u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E",paraId:4,tocIndex:2},{value:"\u91CD\u7F6E\u4E8B\u4EF6\u652F\u6301\u5F02\u6B65\uFF0C\u6B64\u65F6\u6309\u94AE\u4F1A\u589E\u52A0 loading \u6548\u679C\u3002",paraId:5},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\u4F1A\u5728 ",paraId:6,tocIndex:3},{value:"onReset",paraId:6,tocIndex:3},{value:" \u4E4B\u524D\u89E6\u53D1\uFF0C\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61\u6570\u636E\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u91CD\u7F6E\u540E\u7684\u8868\u5355\u6570\u636E\u3002",paraId:6,tocIndex:3},{value:"\u7C7B\u578B\uFF1A",paraId:7,tocIndex:3},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:7,tocIndex:3},{value:"value",paraId:7,tocIndex:3},{value:": \u5F53\u524D\u8868\u5355\u6570\u636E",paraId:7,tocIndex:3},{value:"actions",paraId:8,tocIndex:4},{value:" \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u662F\u5426\u5C55\u793A\u53CA\u5176\u987A\u5E8F\uFF0C\u9ED8\u8BA4 ",paraId:8,tocIndex:4},{value:"actions",paraId:8,tocIndex:4},{value:" \u7B49\u4E8E ",paraId:8,tocIndex:4},{value:"['submit', 'reset']",paraId:8,tocIndex:4},{value:"\u3002",paraId:8,tocIndex:4},{value:"\u652F\u6301\u5217\u8868\u5982\u4E0B\uFF1A",paraId:9,tocIndex:4},{value:"submit",paraId:10,tocIndex:4},{value:": \u63D0\u4EA4",paraId:10,tocIndex:4},{value:"reset",paraId:10,tocIndex:4},{value:": \u91CD\u7F6E",paraId:10,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:11,tocIndex:7},{value:"registerActions",paraId:11,tocIndex:7},{value:" \u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:11,tocIndex:7},{value:"\u64CD\u4F5C\u540D\u79F0\u662F ",paraId:12,tocIndex:8},{value:"submit",paraId:12,tocIndex:8},{value:"\u3001",paraId:12,tocIndex:8},{value:"reset",paraId:12,tocIndex:8},{value:"\uFF0C\u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A\uFF0C\u5982\u8986\u76D6\u63D0\u4EA4\u6309\u94AE\uFF0C\u589E\u52A0\u3010\u4E8C\u6B21\u786E\u8BA4\u3011\u7684\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u6DFB\u52A0\u56FE\u6807\u3002",paraId:12,tocIndex:8},{value:"registerActions",paraId:13,tocIndex:9},{value:" \u6CE8\u518C\u9879\u7684\u7C7B\u578B\u4E3A\uFF1A",paraId:13,tocIndex:9},{value:"(p: IRegisterActionsFnParams) => ReactNode",paraId:13,tocIndex:9},{value:"IRegisterActionsFnParams",paraId:14,tocIndex:9},{value:" \u53C2\u6570\u8BE6\u89E3\u5982\u4E0B\u8868\u683C",paraId:14,tocIndex:9},{value:"\u53C2\u6570",paraId:15,tocIndex:9},{value:"\u63CF\u8FF0",paraId:15,tocIndex:9},{value:"\u7C7B\u578B",paraId:15,tocIndex:9},{value:"handleSubmit",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"submit",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"handleReset",paraId:15,tocIndex:9},{value:"\u5F53\u64CD\u4F5C\u540D\u79F0\u4E3A ",paraId:15,tocIndex:9},{value:"reset",paraId:15,tocIndex:9},{value:" \u65F6\uFF0C\u5B58\u5728\u8BE5\u4E8B\u4EF6",paraId:15,tocIndex:9},{value:"() => void",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u4E8B\u4EF6\u7684 ",paraId:15,tocIndex:9},{value:"loading",paraId:15,tocIndex:9},{value:" \u72B6\u6001",paraId:15,tocIndex:9},{value:"{ submit: boolean; reset: boolean; }",paraId:15,tocIndex:9},{value:"disabled",paraId:15,tocIndex:9},{value:"\u5168\u5C40\u7981\u7528\u72B6\u6001",paraId:15,tocIndex:9},{value:"boolean",paraId:15,tocIndex:9},{value:"locale",paraId:15,tocIndex:9},{value:"\u5F53\u524D\u8BED\u8A00\u6570\u636E",paraId:15,tocIndex:9},{value:"object",paraId:15,tocIndex:9},{value:"submitText",paraId:15,tocIndex:9},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"resetText",paraId:15,tocIndex:9},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:15,tocIndex:9},{value:"string",paraId:15,tocIndex:9},{value:"\u53C2\u6570",paraId:16,tocIndex:10},{value:"\u63CF\u8FF0",paraId:16,tocIndex:10},{value:"\u7C7B\u578B",paraId:16,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:10},{value:"disableFormOnActionLoading",paraId:16,tocIndex:10},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10},{value:"validateFormOnSubmit",paraId:16,tocIndex:10},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:16,tocIndex:10},{value:"boolean",paraId:16,tocIndex:10},{value:"true",paraId:16,tocIndex:10}]},14590:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(90261);const r=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u5185\u7F6E\u4E86\u5E38\u7528\u7684\u8868\u5355\u6E32\u67D3\u5668\u96C6\u5408",paraId:0,tocIndex:0},{value:"\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u5185\u7F6E\u6E32\u67D3\u5668\u7684\u53C2\u6570\u53EF\u4EE5\u901A\u8FC7 ",paraId:1},{value:"schema.renderOptions",paraId:1},{value:" \u4F20\u9012\uFF0C\u5BF9\u5E94 ",paraId:1},{value:"Antd",paraId:1},{value:" \u7EC4\u4EF6\u7684\u53C2\u6570\u3002",paraId:1},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u591A\u9879\u9009\u62E9\u5668\u7684\u5185\u5BB9\u662F\u901A\u8FC7",paraId:2,tocIndex:1},{value:"\u9017\u53F7",paraId:2,tocIndex:1},{value:"\u62FC\u63A5\u5728\u4E00\u8D77\u7684\uFF0C\u53C2\u8003 ",paraId:2,tocIndex:1},{value:"locale",paraId:2,tocIndex:1},{value:" \u7684 ",paraId:2,tocIndex:1},{value:"FormRender.comma",paraId:2,tocIndex:1},{value:"\u3002",paraId:2,tocIndex:1},{value:"\u975E Antd Descriptions \u7EC4\u4EF6\uFF0C\u65E0\u5165\u53C2\uFF0C\u4EC5\u4F5C\u7EAF\u6570\u636E\u5C55\u793A\u3002",paraId:3,tocIndex:2},{value:"v1.4.0",paraId:4,tocIndex:2},{value:"FormRender v1.4.0 \u5F00\u59CB\u652F\u6301 SwitchBox \u6E32\u67D3\u5668\uFF0C\u901A\u8FC7 ",paraId:5,tocIndex:3},{value:"renderOptions.text",paraId:5,tocIndex:3},{value:" \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:5,tocIndex:3},{value:"\u53C2\u6570\u6709\uFF1A",paraId:6,tocIndex:3},{value:"text",paraId:7,tocIndex:3},{value:": \u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002",paraId:7,tocIndex:3},{value:"rightExtraContent",paraId:7,tocIndex:3},{value:": ",paraId:7,tocIndex:3},{value:"ReactNode | ({ value, disabled, readonly }) => ReactNode",paraId:7,tocIndex:3},{value:", \u53F3\u4FA7\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",paraId:7,tocIndex:3},{value:"v2.5.0",paraId:8,tocIndex:3},{value:"rootClassName",paraId:7,tocIndex:3},{value:",: \u6839\u7ED3\u70B9\u7C7B\u540D\u3002",paraId:7,tocIndex:3},{value:"v2.5.0",paraId:9,tocIndex:3},{value:"rootStyle",paraId:7,tocIndex:3},{value:": \u6839\u7ED3\u70B9\u6837\u5F0F\u3002",paraId:7,tocIndex:3},{value:"v2.5.0",paraId:10,tocIndex:3},{value:"\u5176\u4ED6\u4E3A Antd Checkbox \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:7,tocIndex:3},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:11,tocIndex:4},{value:"extra.checkedOptions",paraId:11,tocIndex:4},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:11,tocIndex:4},{value:"options",paraId:11,tocIndex:4},{value:" \u6570\u636E\u3002\u6848\u4F8B\u89C1",paraId:11,tocIndex:4},{value:"Checkbox \u9009\u4E2D\u503C\u8054\u52A8",paraId:12,tocIndex:4},{value:"\u3002",paraId:11,tocIndex:4},{value:"v1.4.0",paraId:13,tocIndex:4},{value:"onChange \u4E8B\u4EF6\u652F\u6301 ",paraId:14,tocIndex:5},{value:"extra.selectedOptions",paraId:14,tocIndex:5},{value:" \u53C2\u6570\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684 ",paraId:14,tocIndex:5},{value:"options",paraId:14,tocIndex:5},{value:" \u6570\u636E\u3002",paraId:14,tocIndex:5},{value:"v1.4.0",paraId:15,tocIndex:5},{value:"\u9ED8\u8BA4\u8FD4\u56DE ",paraId:16,tocIndex:6},{value:"ISOString",paraId:16,tocIndex:6},{value:" \u683C\u5F0F\u7684\u65E5\u671F\u503C\uFF0C\u8BE5\u503C\u53EF\u4EE5\u5F88\u597D\u7684\u652F\u6301\u8DE8\u65F6\u533A\u7684\u9700\u8981\u3002",paraId:16,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:17,tocIndex:6},{value:"outputFormat",paraId:17,tocIndex:6},{value:" \u53EF\u63A7\u5236\u8F93\u51FA\u683C\u5F0F\u3002",paraId:17,tocIndex:6},{value:"v2.2.0",paraId:18,tocIndex:6},{value:"\u9ED8\u8BA4\u8FD4\u56DE ISOString \u683C\u5F0F\u7684\u65E5\u671F\u503C\u3002",paraId:19,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:20,tocIndex:7},{value:"outputFormat",paraId:20,tocIndex:7},{value:" \u53EF\u63A7\u5236\u8F93\u51FA\u683C\u5F0F\u3002",paraId:20,tocIndex:7},{value:"v2.2.0",paraId:21,tocIndex:7},{value:"\u63A7\u5236\u503C\u683C\u5F0F\uFF1A",paraId:22,tocIndex:7},{value:"v2.3.0",paraId:23,tocIndex:7},{value:"valueStruct",paraId:24,tocIndex:7},{value:": ",paraId:24,tocIndex:7},{value:"object | array",paraId:24,tocIndex:7},{value:", ",paraId:24,tocIndex:7},{value:"object",paraId:24,tocIndex:7},{value:" \u8868\u793A\u503C\u4E3A\u5BF9\u8C61\u683C\u5F0F\uFF0C\u6B64\u65F6\u901A\u8FC7 ",paraId:24,tocIndex:7},{value:"valueFieldMap",paraId:24,tocIndex:7},{value:" \u53EF\u63A7\u5236\u5B57\u6BB5\u540D\u79F0\u3002",paraId:24,tocIndex:7},{value:"valueFieldMap",paraId:24,tocIndex:7},{value:": \u5BF9\u8C61\u683C\u5F0F\u65F6\u53EF\u7528\uFF0C",paraId:24,tocIndex:7},{value:"{ start: '\u5B9A\u4E49\u5F00\u59CB\u65F6\u95F4\u5B57\u6BB5\u540D', end: '\u5B9A\u4E49\u7ED3\u675F\u65F6\u95F4\u5B57\u6BB5\u540D' }",paraId:24,tocIndex:7},{value:"\u3002",paraId:24,tocIndex:7},{value:"\u53EA\u8BFB\u6001\u65F6\uFF0C\u6587\u6848\u5C55\u793A\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",paraId:25,tocIndex:7},{value:"locale",paraId:25,tocIndex:7},{value:" \u7684 ",paraId:25,tocIndex:7},{value:"FormRender.displayDateRange",paraId:25,tocIndex:7},{value:" \u6765\u81EA\u5B9A\u4E49\u3002",paraId:25,tocIndex:7},{value:"renderOptions.headerOptions",paraId:26,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5934\u90E8\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:26,tocIndex:8},{value:"Collapse",paraId:26,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:26,tocIndex:8},{value:"renderOptions.panelOptions",paraId:26,tocIndex:8},{value:" \u53EF\u4EE5\u914D\u7F6E\u5BF9\u8C61\u5BB9\u5668\u5185\u5BB9\u9762\u677F\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 Antd ",paraId:26,tocIndex:8},{value:"Collapse.Panel",paraId:26,tocIndex:8},{value:" \u7EC4\u4EF6\u53C2\u6570\u3002",paraId:26,tocIndex:8},{value:"\u53EA\u6E32\u67D3\u5B50\u8282\u70B9\u7684\u5BF9\u8C61\u5BB9\u5668\uFF0C\u5E94\u7528\u573A\u666F\uFF1A\u6B65\u9AA4\u8868\u5355\u3002",paraId:27,tocIndex:9},{value:"\u63A5\u53D7 ",paraId:28,tocIndex:9},{value:"className",paraId:28,tocIndex:9},{value:" \u548C ",paraId:28,tocIndex:9},{value:"style",paraId:28,tocIndex:9},{value:" \u5C5E\u6027\u3002",paraId:28,tocIndex:9}]},93076:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(4123);const r=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},24426:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(74624);const r=[{value:"FormRender",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"Core",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"rootClassName",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"rootStyle",paraId:1,tocIndex:0},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"itemLayout",paraId:1,tocIndex:0},{value:"\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784",paraId:1,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"vertical",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"React.ComponentType<IOpenItemLayoutParams>",paraId:2,tocIndex:0},{value:"horizontal",paraId:1,tocIndex:0},{value:"readonlyPlaceholder",paraId:1,tocIndex:0},{value:"\u53EA\u8BFB\u72B6\u6001\u6CA1\u6709\u6570\u636E\u65F6\u7684\u5360\u4F4D\u7B26\uFF0C",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"undefined",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"\u7A7A\u5B57\u7B26\u4E32",paraId:1,tocIndex:0},{value:" \u4F1A\u88AB\u5224\u5B9A\u4E3A\u7A7A\u6570\u636E",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelWidth",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\uFF08\u6807\u9898\u5757\uFF09\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"100",paraId:1,tocIndex:0},{value:"labelColon",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u5192\u53F7",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"labelGap",paraId:1,tocIndex:0},{value:"\u6807\u7B7E\u4E0E\u53F3\u4FA7\u5185\u5BB9\u7684\u95F4\u8DDD",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"15",paraId:1,tocIndex:0},{value:"labelRender",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49 label \u6E32\u67D3",paraId:1,tocIndex:0},{value:"(params) => ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"null",paraId:1,tocIndex:0},{value:'["submit", "reset"]',paraId:1,tocIndex:0},{value:"registerActions",paraId:1,tocIndex:0},{value:"\u6CE8\u518C\u64CD\u4F5C\u884C\u4E3A\uFF0C\u5982\u679C\u662F submit\u3001reset \u5C06\u8986\u76D6\u539F\u6709\u884C\u4E3A",paraId:1,tocIndex:0},{value:"IRegisterActions",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"disableFormOnActionLoading",paraId:1,tocIndex:0},{value:"\u5F53\u64CD\u4F5C\u884C\u4E3A\u6309\u94AE\u5904\u4E8E loading \u72B6\u6001\u65F6\uFF0C\u662F\u5426\u7981\u7528\u8868\u5355",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"validateFormOnSubmit",paraId:1,tocIndex:0},{value:"\u89E6\u53D1 onSubmit \u4E8B\u4EF6\u524D\u662F\u5426\u6267\u884C\u8868\u5355\u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A true\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u5C06\u4E0D\u4F1A\u89E6\u53D1 onSubmit \u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"submitText",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"resetText",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u6848\uFF0C\u4F18\u5148\u7EA7\u5927\u4E8E locale \u8BED\u8A00\u5305",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onSubmit",paraId:1,tocIndex:0},{value:"\u63D0\u4EA4\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onBeforeReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u524D\u7F6E\u4E8B\u4EF6\uFF0C\u5982\u679C\u8FD4\u56DE\u6570\u636E\uFF0C\u5219\u4F5C\u4E3A\u65B0\u6570\u636E\u586B\u5165\u8868\u5355",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<IObjectAny | void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onReset",paraId:1,tocIndex:0},{value:"\u91CD\u7F6E\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(value: IObjectAny) => IMaybePromise<void>",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},64092:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(83140);const r=[{value:"\u901A\u8FC7\u5728 ",paraId:0,tocIndex:0},{value:"Schema",paraId:0,tocIndex:0},{value:" \u4E0A\u6307\u5B9A ",paraId:0,tocIndex:0},{value:"span",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"spanStart",paraId:0,tocIndex:0},{value:" \u53EF\u4EE5\u63A7\u5236\u8868\u5355\u9879\u7279\u5B9A\u7684",paraId:0,tocIndex:0},{value:"\u5BBD\u5EA6",paraId:0,tocIndex:0},{value:"\u548C",paraId:0,tocIndex:0},{value:"\u4F4D\u7F6E",paraId:0,tocIndex:0},{value:"\uFF0C\u8BE6\u60C5\u89C1",paraId:0,tocIndex:0},{value:"\u6805\u683C\u5E03\u5C40-\u81EA\u5B9A\u4E49\u5BBD\u5EA6",paraId:1,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0}]},75796:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(34877);const r=[{value:"\u6B65\u9AA4\u8868\u5355\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u8868\u5355\u9879\u90FD\u7531 FormRender \u6E32\u67D3\uFF0C\u901A\u8FC7 hidden \u5C5E\u6027\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u6570\u636E\u5728\u4E00\u4E2A FormRender \u5B9E\u4F8B\u91CC\uFF0C\u6821\u9A8C\u65B9\u6CD5\u53EA\u8C03\u7528\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u6709\u53D8\u5316\uFF0C\u9700\u8981\u5C06\u8868\u5355\u9879\u653E\u5728 Object \u5BF9\u8C61\u91CC",paraId:2,tocIndex:0},{value:"\u6E32\u67D3\u591A\u4E2A FormRender \u5B9E\u4F8B",paraId:1,tocIndex:0},{value:"\u4F18\u52BF\uFF1A\u8868\u5355\u6570\u636E\u5C42\u7EA7\u65E0\u53D8\u5316",paraId:3,tocIndex:0},{value:"\u52A3\u52BF\uFF1A\u6821\u9A8C\u65B9\u6CD5\u9700\u8981\u8C03\u7528\u591A\u4E2A\uFF0C\u6700\u7EC8\u7684\u6570\u636E\u9700\u8981\u5408\u5E76\u5728\u4E00\u8D77",paraId:3,tocIndex:0},{value:"\u4E0B\u9762\u793A\u4F8B\u7B2C\u4E00\u79CD\u65B9\u6848",paraId:4,tocIndex:0}]},2131:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(45011);const r=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\uFF0C\u6821\u9A8C\u4E0D\u89E6\u53D1\u3002",paraId:1,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u65F6\uFF0C\u672A\u8F93\u5165\u5931\u8D25\u539F\u56E0\u9700\u8981\u89E6\u53D1\u6821\u9A8C\u3002",paraId:1,tocIndex:0},{value:"\u6280\u672F\u5B9E\u73B0",paraId:2,tocIndex:0},{value:"\u5207\u6362\u5BA1\u6838\u72B6\u6001\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: false",paraId:3,tocIndex:0},{value:" \u8FBE\u5230\u4E0D\u89E6\u53D1\u6821\u9A8C\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u6E05\u695A\u5DF2\u6709\u7684\u9519\u8BEF\u63D0\u793A\u3002",paraId:3,tocIndex:0},{value:"\u5BA1\u6838\u5931\u8D25\u8F93\u5165\u6846\u8F93\u5165\u65F6\uFF0C\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"triggerValidator: true",paraId:3,tocIndex:0},{value:" \u89E6\u53D1\u6821\u9A8C\u3002",paraId:3,tocIndex:0}]},98685:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(6168);const r=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u5B58\u5728\u6700\u5C0F\u957F\u5EA6\u6821\u9A8C\u65F6\uFF0C\u5E0C\u671B\u5728\u8F93\u5165\u7684\u65F6\u5019\u4E0D\u6821\u9A8C\u6570\u636E\uFF0C\u5728\u5931\u53BB\u7126\u70B9\uFF08",paraId:1,tocIndex:0},{value:"onBlur",paraId:1,tocIndex:0},{value:"\uFF09\u65F6\u624D\u6821\u9A8C\u6570\u636E\u6B63\u786E\u6027\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u5185\u7F6E InputText\u3001TextArea \u7B49\u6E32\u67D3\u5668\uFF0C\u901A\u8FC7\u5728 renderOptions \u4E0A\u8BBE\u7F6E ",paraId:3,tocIndex:0},{value:"validateOnBlur: true",paraId:3,tocIndex:0},{value:" \u5C5E\u6027\u53EF\u5B9E\u73B0\u4E0A\u8FF0\u9700\u6C42\u3002",paraId:3,tocIndex:0},{value:`\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u7684\u5185\u7F6E\u6E32\u67D3\u5668\u6709\uFF1A
`,paraId:3,tocIndex:0},{value:"InputText",paraId:4,tocIndex:0},{value:"InputNumber",paraId:4,tocIndex:0},{value:"Password",paraId:4,tocIndex:0},{value:"TextArea",paraId:4,tocIndex:0}]},9046:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(6882);const r=[{value:"\u4E1A\u52A1\u573A\u666F",paraId:0,tocIndex:0},{value:"\u5F53\u8868\u5355\u9879\u8FC7\u591A\u65F6\u5BB9\u5668\u5B58\u5728\u6EDA\u52A8\u6761\uFF0C\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u65F6\u5E94\u8BE5\u5B9A\u4F4D\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u8868\u5355\u9879\u4EE5\u63D0\u9192\u7528\u6237\u3002",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:2,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:0},{value:"validate",paraId:3,tocIndex:0},{value:" \u6821\u9A8C\u8868\u5355\u6570\u636E\uFF0C\u5F97\u5230\u9519\u8BEF\u9879\u6570\u636E\uFF0C\u518D\u901A\u8FC7 ",paraId:3,tocIndex:0},{value:"scrollTo",paraId:3,tocIndex:0},{value:" \u6EDA\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u3002",paraId:3,tocIndex:0}]},7669:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(88358);const r=[{value:"\u67D0\u4E2A\u8868\u5355\u9879\u9009\u4E2D\u540E\u7684\u503C\u8054\u52A8\u5230\u5176\u4ED6\u8868\u5355\u9879\u4F7F\u7528\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668",paraId:1,tocIndex:0},{value:" + ",paraId:1,tocIndex:0},{value:"userCtx",paraId:1,tocIndex:0},{value:" \u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u901A\u8FC7\u4FEE\u6539 ",paraId:1,tocIndex:0},{value:"Schema",paraId:1,tocIndex:0},{value:" \u7684 ",paraId:1,tocIndex:0},{value:"renderOptions",paraId:1,tocIndex:0},{value:" \u5C5E\u6027\u5B9E\u73B0",paraId:1,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:2,tocIndex:1},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:3,tocIndex:2}]},15577:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(73888);const r=[{value:"\u4E0E Checkbox \u6E32\u67D3\u5668\u4E00\u6837\uFF0C\u4E0D\u8FC7\u5B57\u6BB5\u540D\u662F ",paraId:0,tocIndex:0},{value:"selectedOptions",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u3010\u53EF\u9009\u57CE\u5E02\u3011\u4F9D\u8D56\u3010\u53EF\u9009\u57CE\u5E02\u8303\u56F4\u3011\u7684\u6570\u636E",paraId:1,tocIndex:1}]},2531:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(73914);const r=[{value:"100 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E1D\u6ED1\u6D41\u7545",paraId:0,tocIndex:1},{value:"300 \u4E2A\u8868\u5355\u9879\u8054\u52A8\u6027\u80FD\u6D4B\u8BD5\uFF0C\u8F83\u4E3A\u6D41\u7545",paraId:1,tocIndex:2}]},26875:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(64768);const r=[{value:"\u652F\u6301 ",paraId:0,tocIndex:1},{value:"warning",paraId:0,tocIndex:1},{value:"\u3001",paraId:0,tocIndex:1},{value:"error",paraId:0,tocIndex:1},{value:" \u6837\u5F0F",paraId:0,tocIndex:1}]},18335:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(87004);const r=[{value:"\u5192\u53F7\u8BBE\u7F6E",paraId:0,tocIndex:1}]},9034:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(43895);const r=[{value:"\u5185\u6838\u7075\u6D3B\u3001\u9AD8\u53EF\u5B9A\u5236\uFF0C\u4F46\u9700\u8981\u7EC4\u88C5\u5FC5\u8981\u90E8\u4EF6 ",paraId:0,tocIndex:0},{value:"itemLayout",paraId:0,tocIndex:0},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:0,tocIndex:0},{value:"renderers",paraId:0,tocIndex:0},{value:`\uFF08\u6E32\u67D3\u5668\u96C6\u5408\uFF09\uFF0C
\u7136\u540E\u901A\u8FC7\u4E00\u5957 Schema \u63CF\u8FF0\u9700\u8981\u6E32\u67D3\u7684\u8868\u5355\u3002`,paraId:0,tocIndex:0},{value:"FormRender",paraId:1,tocIndex:1},{value:" \u662F\u57FA\u4E8E Core + Antd \u5C01\u88C5\u7684\u8868\u5355\u6E32\u67D3\u5E93\uFF0C\u5185\u7F6E\u4E86 ",paraId:1,tocIndex:1},{value:"itemLayout",paraId:1,tocIndex:1},{value:"\uFF08\u8868\u5355\u9879\u5E03\u5C40\u7ED3\u6784\uFF09\u3001",paraId:1,tocIndex:1},{value:"renderers",paraId:1,tocIndex:1},{value:"\uFF08\u5E38\u7528\u8868\u5355\u7C7B\u6E32\u67D3\u5668\u96C6\u5408\uFF09\u4EE5\u53CA\u63D0\u4EA4\u91CD\u7F6E\u64CD\u4F5C\uFF0C\u4EE5\u8FBE\u5230",paraId:1,tocIndex:1},{value:"\u5F00\u7BB1\u5373\u7528",paraId:1,tocIndex:1},{value:"\u3002",paraId:1,tocIndex:1},{value:"Search",paraId:2,tocIndex:2},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\uFF0C\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:2,tocIndex:2}]},23652:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(67342);const r=[{value:"Search",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E FormRender \u5C01\u88C5\u7684\u5F00\u7BB1\u5373\u7528\u7684\u6761\u4EF6\u641C\u7D22\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u7279\u6027\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4 ",paraId:2,tocIndex:0},{value:"layout",paraId:2,tocIndex:0},{value:" \u4E3A ",paraId:2,tocIndex:0},{value:"autoFill",paraId:2,tocIndex:0},{value:" \u5E03\u5C40",paraId:2,tocIndex:0},{value:"\u589E\u52A0\u6298\u53E0\u5C55\u5F00\u529F\u80FD\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u884C\u4E3A\u64CD\u4F5C actions",paraId:3,tocIndex:0},{value:`npm install @schema-render/search-react --save
`,paraId:4,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:5,tocIndex:1},{value:`npm install antd --save
`,paraId:6,tocIndex:1},{value:"\u5E38\u4E0E\u8868\u683C\u914D\u5408\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u4E0E\u5C55\u793A\u64CD\u4F5C\u3002",paraId:7,tocIndex:2}]},26138:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(27885);const r=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684\u63D0\u4EA4\u4E0E\u91CD\u7F6E\u7B49\u76F8\u5173 API \u5916\uFF0C\u8FD8\u589E\u52A0\u4E86\u6298\u53E0\u4E0E\u5C55\u5F00\u64CD\u4F5C\u884C\u4E3A\u3002",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8868\u5355\u9879\u8D85\u8FC7 ",paraId:1,tocIndex:1},{value:"2",paraId:1,tocIndex:1},{value:" \u884C\u5C31\u4F1A\u6298\u53E0\uFF0C",paraId:1,tocIndex:1},{value:"onToggleCollapsed",paraId:1,tocIndex:1},{value:" \u662F\u6298\u53E0\u5C55\u5F00\u4E8B\u4EF6\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"actions",paraId:2,tocIndex:2},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:2,tocIndex:2},{value:"string[]",paraId:2,tocIndex:2},{value:'["reset", "submit", "collapse"]',paraId:2,tocIndex:2},{value:"defaultCollapsed",paraId:2,tocIndex:2},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"collapsedRows",paraId:2,tocIndex:2},{value:"\u6298\u53E0\u884C\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"2",paraId:2,tocIndex:2},{value:"calcCollapsedNumber",paraId:2,tocIndex:2},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:2,tocIndex:2},{value:"container",paraId:2,tocIndex:2},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:2,tocIndex:2},{value:"(container?: HTMLElement) => number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"onToggleCollapsed",paraId:2,tocIndex:2},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"(isCollapsed: boolean) => void",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2}]},51001:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(10122);const r=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},13086:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(84123);const r=[{value:"Search",paraId:0,tocIndex:0},{value:" \u9664\u4E86\u652F\u6301 ",paraId:0,tocIndex:0},{value:"FormRender",paraId:0,tocIndex:0},{value:" \u7684 API \u5916\uFF0C\u8FD8\u652F\u6301\u4EE5\u4E0B API\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:0},{value:"\u63CF\u8FF0",paraId:1,tocIndex:0},{value:"\u7C7B\u578B",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:0},{value:"locale",paraId:1,tocIndex:0},{value:"\u56FD\u9645\u5316\u8BED\u8A00\u6570\u636E",paraId:1,tocIndex:0},{value:"object",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"actions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u64CD\u4F5C\u6309\u94AE\u5C55\u793A\u9879\u53CA\u5176\u987A\u5E8F",paraId:1,tocIndex:0},{value:"string[]",paraId:1,tocIndex:0},{value:'["reset", "submit", "collapse"]',paraId:1,tocIndex:0},{value:"defaultCollapsed",paraId:1,tocIndex:0},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"collapsedRows",paraId:1,tocIndex:0},{value:"\u6298\u53E0\u884C\u6570",paraId:1,tocIndex:0},{value:"number",paraId:1,tocIndex:0},{value:"2",paraId:1,tocIndex:0},{value:"calcCollapsedNumber",paraId:1,tocIndex:0},{value:"\u8BA1\u7B97\u6298\u53E0\u65F6\u5C55\u793A\u7684\u8868\u5355\u9879\u4E2A\u6570\u7684\u7B97\u6CD5\uFF0C",paraId:1,tocIndex:0},{value:"container",paraId:1,tocIndex:0},{value:" \u662F\u6839\u8282\u70B9\u5143\u7D20",paraId:1,tocIndex:0},{value:"(container?: HTMLElement) => number",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"onToggleCollapsed",paraId:1,tocIndex:0},{value:"\u300C\u6298\u53E0/\u5C55\u5F00\u300D\u5207\u6362\u4E8B\u4EF6",paraId:1,tocIndex:0},{value:"(isCollapsed: boolean) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},31626:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(24197);const r=[{value:"\u5206\u7C7B\u6807\u9898\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 Object \u5BF9\u8C61\u6E32\u67D3\u5668\uFF0C\u4F1A\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E\u5206\u7C7B\u6807\u9898\u8868\u5355\u9879\u5360\u6EE1\u4E00\u884C\uFF0C\u4E0D\u6539\u53D8\u8868\u5355\u6570\u636E\u7ED3\u6784",paraId:1,tocIndex:0}]},60031:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(69306);const r=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u662F\u57FA\u4E8E Search + Antd Table \u5C01\u88C5\u7684\u6761\u4EF6\u641C\u7D22\u8868\u683C\u7EC4\u4EF6\uFF1B\u5E38\u7528\u4E8E\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6570\u636E\u68C0\u7D22\u3001\u663E\u793A\u4E0E\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u4E3B\u8981\u7279\u6027\u6709\uFF1A",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4\u7B80\u5355\u3001\u5F00\u7BB1\u5373\u7528",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u7A7A\u6570\u636E\u5360\u4F4D\u7B26\u5904\u7406",paraId:2,tocIndex:0},{value:"\u9ED8\u8BA4\u5217\u5BBD\u5EA6\u5904\u7406",paraId:2,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF08\u4E00\u5C4F\u5C55\u793A\uFF09\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u9AD8\u5EA6\u81EA\u9002\u5E94 AutoScrollY",paraId:3,tocIndex:0},{value:"\u652F\u6301\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:4,tocIndex:0},{value:"\u652F\u6301\u914D\u7F6E\u5F0F\u64CD\u4F5C\u680F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5E8F\u53F7\u4E0E\u64CD\u4F5C\u5217",paraId:5,tocIndex:0},{value:"\u652F\u6301\u5E38\u89C1\u6570\u636E\u7C7B\u578B\u663E\u793A\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6570\u636E\u663E\u793A Value Type",paraId:6,tocIndex:0},{value:"\u652F\u6301\u524D\u7AEF\u6392\u5E8F\uFF1A\u6309\u62FC\u97F3\u3001\u6570\u5B57\u3001\u65E5\u671F\u683C\u5F0F\u6392\u5E8F\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u6392\u5E8F Sort",paraId:7,tocIndex:0},{value:"\u652F\u6301\u201C\u5408\u8BA1\u680F\u201D\uFF0C\u901A\u8FC7\u6570\u636E\u81EA\u52A8\u5339\u914D\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5408\u8BA1\u680F Summary",paraId:8,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u9690\u85CF\u663E\u793A\u3001\u6392\u5E8F\u3001\u5BBD\u5EA6\u8BBE\u7F6E\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:9,tocIndex:0},{value:"\u652F\u6301\u8868\u683C\u5217\u8BBE\u7F6E\u6301\u4E45\u5316\u5B58\u50A8\u4E0E\u5408\u5E76\u7B97\u6CD5\uFF0C\u8BE6\u89C1",paraId:2,tocIndex:0},{value:"\u5217\u8BBE\u7F6E Columns Setting",paraId:10,tocIndex:0},{value:`npm install @schema-render/search-table-react --save
`,paraId:11,tocIndex:1},{value:"\u5982\u679C\u6CA1\u6709\u5B89\u88C5 antd\uFF0C\u8FD8\u9700\u5B89\u88C5\u5B83",paraId:12,tocIndex:1},{value:`npm install antd --save
`,paraId:13,tocIndex:1},{value:"\u57FA\u672C\u7528\u6CD5\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E09\u4E2A\u5C5E\u6027",paraId:14,tocIndex:2},{value:"schema",paraId:15,tocIndex:2},{value:": \u641C\u7D22\u7684\u6761\u4EF6\uFF0C\u8BE6\u89E3 ",paraId:15,tocIndex:2},{value:"Search",paraId:16,tocIndex:2},{value:" \u7EC4\u4EF6\u3002",paraId:15,tocIndex:2},{value:"columns",paraId:15,tocIndex:2},{value:": \u8868\u683C\u5217\u5C5E\u6027\uFF0C\u9664 ",paraId:15,tocIndex:2},{value:"Antd Table columns",paraId:15,tocIndex:2},{value:` \u5C5E\u6027\u5916\uFF0C\u6269\u5C55\u7684\u5C5E\u6027\u89C1 API Reference\u3002
`,paraId:15,tocIndex:2},{value:"\u6CE8\uFF1A",paraId:17,tocIndex:2},{value:"dataIndex",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u9700\u4FDD\u6301\u552F\u4E00\u6027\uFF0C",paraId:17,tocIndex:2},{value:"key",paraId:17,tocIndex:2},{value:" \u5B57\u6BB5\u53EF\u7701\u7565\u3002",paraId:17,tocIndex:2},{value:"request",paraId:15,tocIndex:2},{value:`: \u8BF7\u6C42\u6570\u636E\u7684\u51FD\u6570\uFF0C\u7528\u6765\u8BF7\u6C42\u540E\u7AEF\u6570\u636E\u63A5\u53E3\uFF0C\u5E76\u6309\u683C\u5F0F\u8FD4\u56DE\u3002
`,paraId:15,tocIndex:2},{value:`\u53C2\u6570\u9664 schema \u58F0\u660E\u7684\u5B57\u6BB5\u5916\uFF0C\u8FD8\u5305\u62EC\u5206\u9875\u5B57\u6BB5\u3002
`,paraId:18,tocIndex:2},{value:"current",paraId:19,tocIndex:2},{value:": \u5F53\u524D\u9875\u7801\u3002",paraId:19,tocIndex:2},{value:"pageSize",paraId:19,tocIndex:2},{value:": \u6BCF\u9875\u6761\u6570\u3002",paraId:19,tocIndex:2},{value:`\u8FD4\u56DE\u5B57\u6BB5\u5982\u4E0B\u3002
`,paraId:18,tocIndex:2},{value:"data",paraId:20,tocIndex:2},{value:": \u8868\u683C\u6570\u636E\u6E90\uFF0C\u5BF9\u5E94 Antd Table \u7684 ",paraId:20,tocIndex:2},{value:"dataSource",paraId:20,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:20,tocIndex:2},{value:"total",paraId:20,tocIndex:2},{value:": \u603B\u7684\u8BB0\u5F55\u6570\uFF0C\u5E94\u7528\u4E8E\u5206\u9875\u3002",paraId:20,tocIndex:2},{value:"summary",paraId:20,tocIndex:2},{value:": \u5408\u8BA1\u680F\u6570\u636E\uFF0C\u8BE6\u89C1 ",paraId:20,tocIndex:2},{value:"\u5408\u8BA1\u680F Summary",paraId:21,tocIndex:2},{value:"\u3002",paraId:20,tocIndex:2}]},12952:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(72106);const r=[{value:"\u901A\u8FC7\u6DFB\u52A0 ",paraId:0,tocIndex:1},{value:"showRowNumber",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\uFF0C\u53EF\u81EA\u52A8\u6DFB\u52A0\u5E8F\u53F7\u5217\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"rowNumberColumnData",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u914D\u7F6E\u5E8F\u53F7\u5217\u5C5E\u6027\uFF0C\u5BF9\u5E94 ",paraId:1,tocIndex:2},{value:"Antd Table columns",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u3002",paraId:1,tocIndex:2},{value:"\u58F0\u660E ",paraId:2,tocIndex:3},{value:"actionItems",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\uFF0C\u5C06\u6DFB\u52A0\u64CD\u4F5C\u5217\uFF0C\u53C2\u6570\u8BE6\u89E3\u89C1\u6587\u5E95\u3010actionItems \u53C2\u6570\u8BE6\u89E3\u3011\u3002",paraId:2,tocIndex:3},{value:"\u6309\u94AE\u6570\u91CF\u8D85\u8FC7\u9608\u503C\uFF0C\u5C06\u4EE5",paraId:3,tocIndex:4},{value:"\u201C\u66F4\u591A\u201D",paraId:3,tocIndex:4},{value:"\u5F62\u5F0F\u4EA4\u4E92\uFF0C\u9ED8\u8BA4\u9608\u503C\u4E3A ",paraId:3,tocIndex:4},{value:"2",paraId:3,tocIndex:4},{value:"\uFF0C\u53EF\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"actionItemsCount",paraId:3,tocIndex:4},{value:" \u4FEE\u6539\u9608\u503C\u3002",paraId:3,tocIndex:4},{value:"\u4E0B\u62C9\u6846\u5C5E\u6027\u53EF\u901A\u8FC7 ",paraId:4,tocIndex:4},{value:"actionItemsDropdownProps",paraId:4,tocIndex:4},{value:" \u914D\u7F6E\uFF0C\u5BF9\u5E94 Antd ",paraId:4,tocIndex:4},{value:"Dropdown",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u3002",paraId:4,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:5},{value:"actionItemsColumnData",paraId:5,tocIndex:5},{value:" \u53EF\u4EE5\u914D\u7F6E\u64CD\u4F5C\u5217\u5C5E\u6027\uFF0C\u540C\u6837\u5BF9\u5E94 Antd Table columns \u503C\u3002",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:6,tocIndex:7},{value:"\u8BF4\u660E",paraId:6,tocIndex:7},{value:"\u7C7B\u578B",paraId:6,tocIndex:7},{value:"record",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u6570\u636E",paraId:6,tocIndex:7},{value:"Record<string, any>",paraId:6,tocIndex:7},{value:"index",paraId:6,tocIndex:7},{value:"\u5F53\u524D\u884C\u7D22\u5F15",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"\u9664\u4E86 Antd ",paraId:7,tocIndex:8},{value:"Button",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u5982\u4E0B\u53C2\u6570\u3002",paraId:7,tocIndex:8},{value:"\u53C2\u6570",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"text",paraId:8,tocIndex:8},{value:"\u64CD\u4F5C\u6587\u6848",paraId:8,tocIndex:8},{value:"string | ReactNode",paraId:8,tocIndex:8},{value:"isShow",paraId:8,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmAgain",paraId:8,tocIndex:8},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"confirmProps",paraId:8,tocIndex:8},{value:"\u4E8C\u6B21\u786E\u8BA4\u5C5E\u6027\uFF0C\u5BF9\u5E94 Antd ",paraId:8,tocIndex:8},{value:"Popconfirm",paraId:8,tocIndex:8},{value:" \u5C5E\u6027",paraId:8,tocIndex:8},{value:"object",paraId:8,tocIndex:8},{value:"onClick",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE Promise \u5C06\u6DFB\u52A0 loading \u6548\u679C",paraId:8,tocIndex:8},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",paraId:8,tocIndex:8}]},10198:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(17258);const r=[{value:"\u8868\u683C\u7684 ",paraId:0,tocIndex:1},{value:"autoScrollY",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5176\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4EE5\u5B9E\u73B0\u201C\u4E00\u5C4F\u201D\u663E\u793A\u6548\u679C\uFF0C\u800C\u4E0D\u51FA\u73B0\u9875\u9762\u7EA7\u6EDA\u52A8\u6761\u3002",paraId:0,tocIndex:1},{value:"\u5F00\u542F ",paraId:1,tocIndex:1},{value:"autoScrollY",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u540E\uFF0CAntd Table \u7684 ",paraId:1,tocIndex:1},{value:"scroll.y",paraId:1,tocIndex:1},{value:" \u5C5E\u6027\u4F1A\u81EA\u52A8\u8BA1\u7B97\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1 ",paraId:1,tocIndex:1},{value:"SearchTable",paraId:1,tocIndex:1},{value:" \u6839\u8282\u70B9\u5143\u7D20\u5B58\u5728\u56FA\u5B9A\u9AD8\u5EA6\u5373\u53EF\u3002",paraId:1,tocIndex:1},{value:"\u6DFB\u52A0 ",paraId:2,tocIndex:2},{value:"header",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"footer",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleTop",paraId:2,tocIndex:2},{value:"\u3001",paraId:2,tocIndex:2},{value:"titleBottom",paraId:2,tocIndex:2},{value:" \u5B50\u8282\u70B9\u6548\u679C\u3002",paraId:2,tocIndex:2}]},51184:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(73865);const r=[{value:"\u5185\u7F6E\u201C\u5408\u8BA1\u201D\u6570\u636E\u663E\u793A\u529F\u80FD\uFF0C\u53EA\u9700\u5728 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u91CC\u8FD4\u56DE ",paraId:0,tocIndex:1},{value:"summaryData",paraId:0,tocIndex:1},{value:" \u6570\u636E\u5373\u53EF\uFF0C\u6570\u636E\u5B57\u6BB5\u5BF9\u5E94\u8868\u683C\u5217\u7684 ",paraId:0,tocIndex:1},{value:"dataIndex",paraId:0,tocIndex:1},{value:" \u5B57\u6BB5\uFF0C\u5408\u8BA1\u6570\u636E\u7684\u4F4D\u7F6E\u5C06\u6839\u636E\u6B64\u5BF9\u5E94\u5173\u7CFB\u81EA\u52A8\u8BA1\u7B97\u3002",paraId:0,tocIndex:1},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"summaryText",paraId:1,tocIndex:2},{value:" \u53EF\u5B9A\u4E49 ",paraId:1,tocIndex:2},{value:"\u5408\u8BA1",paraId:1,tocIndex:2},{value:" \u6587\u6848\uFF0C\u4F1A\u5728\u5E8F\u53F7\u680F\u663E\u793A\u3002",paraId:1,tocIndex:2},{value:"\u53EA\u6709",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u9009\u4E2D\u680F",paraId:3},{value:" \u4E0E ",paraId:3},{value:"\u5E8F\u53F7\u680F",paraId:3},{value:" \u540C\u65F6\u5B58\u5728\u3002",paraId:3},{value:"\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u201C\u5408\u8BA1\u201D \u6587\u6848\u5360\u636E\u4E24\u4E2A\u5355\u5143\u683C\u3002",paraId:4}]},59418:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(81535);const r=[{value:"sortMode",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\u63A7\u5236\u662F",paraId:0,tocIndex:0},{value:"\u524D\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\u8FD8\u662F",paraId:0,tocIndex:0},{value:"\u540E\u7AEF\u6392\u5E8F",paraId:0,tocIndex:0},{value:"\uFF0C\u53D6\u503C\u6709\u56DB\u79CD\uFF1A",paraId:0,tocIndex:0},{value:"local",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"local-all",paraId:1,tocIndex:0},{value:": \u524D\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5\uFF0C\u4E14\u6309\u6570\u636E\u7C7B\u578B\u81EA\u52A8\u5E94\u7528\u6392\u5E8F\u65B9\u6848",paraId:1,tocIndex:0},{value:"service",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F",paraId:1,tocIndex:0},{value:"service-all",paraId:1,tocIndex:0},{value:": \u540E\u7AEF\u6392\u5E8F\uFF0C\u6392\u5E8F\u6240\u6709\u5B57\u6BB5",paraId:1,tocIndex:0},{value:"\u5728\u5217\u4E0A\u58F0\u660E ",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u5C5E\u6027\u5C31\u4F1A\u6DFB\u52A0\u6392\u5E8F\u529F\u80FD\uFF1B",paraId:2,tocIndex:1},{value:"sortType",paraId:2,tocIndex:1},{value:" \u53D6\u503C\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A",paraId:2,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"number",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u6570\u503C\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"date",paraId:3,tocIndex:1},{value:": \u8BA9\u6570\u636E\u4EE5\u65E5\u671F\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u6392\u5E8F\u6570\u636E\u503C\u662F\u901A\u8FC7\u5217\u7684 ",paraId:4,tocIndex:1},{value:"dataIndex",paraId:4,tocIndex:1},{value:" \u83B7\u53D6\uFF0C\u5982\u679C\u6570\u636E\u590D\u6742\uFF0C\u5219\u9700\u8981\u901A\u8FC7 ",paraId:4,tocIndex:1},{value:"sortDataExtractor",paraId:4,tocIndex:1},{value:" \u5C5E\u6027\u83B7\u53D6\u3002",paraId:4,tocIndex:1},{value:"\u7C7B\u578B\uFF1A",paraId:5,tocIndex:1},{value:"sortDataExtractor: (record: IObjectAny) => string | number | void",paraId:5,tocIndex:1},{value:"\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:6,tocIndex:2},{value:"sortMode",paraId:6,tocIndex:2},{value:" \u5C5E\u6027\u4E3A ",paraId:6,tocIndex:2},{value:"local-all",paraId:6,tocIndex:2},{value:"\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5217\u5B57\u6BB5\u90FD\u5C06\u8FDB\u884C\u6392\u5E8F\uFF08\u6392\u9664\u5E8F\u53F7\u3001\u64CD\u4F5C\u7B49\u65E0\u5173\u5217\uFF09\u3002",paraId:6,tocIndex:2},{value:"\u6392\u5E8F\u7684\u65B9\u5F0F\u5C06\u4EE5\u6570\u636E\u7684\u7C7B\u578B\u8FDB\u884C\u81EA\u52A8\u5224\u65AD\uFF0C\u5F53\u7136\u5224\u65AD\u9519\u8BEF\u65F6\uFF0C\u5219\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\u6392\u5E8F\u7C7B\u578B ",paraId:7,tocIndex:2},{value:"sortType",paraId:7,tocIndex:2},{value:" \u503C\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301\u5D4C\u5957\u8868\u5934\u6392\u5E8F\u3002",paraId:8,tocIndex:3},{value:"\u8981\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u8F6C\u62FC\u97F3\u7684\u89E3\u6790\u5E93\uFF0C\u5982 ",paraId:9,tocIndex:4},{value:"pinyin-pro",paraId:9,tocIndex:4},{value:"\u3002",paraId:9,tocIndex:4},{value:"\u518D\u901A\u8FC7 ",paraId:10,tocIndex:4},{value:"sortStringValueTransform",paraId:10,tocIndex:4},{value:" \u5C5E\u6027\u5C06\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u8F6C\u6362\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u62FC\u97F3\u6392\u5E8F\u4E86\u3002",paraId:10,tocIndex:4},{value:"\u8BBE\u7F6E ",paraId:11,tocIndex:5},{value:"sortMode",paraId:11,tocIndex:5},{value:" \u5C5E\u6027\u4E3A ",paraId:11,tocIndex:5},{value:"service",paraId:11,tocIndex:5},{value:"\uFF0C\u5219\u8868\u793A\u540E\u7AEF\u63A5\u53E3\u6392\u5E8F\uFF0C\u5C06\u8C03\u7528 ",paraId:11,tocIndex:5},{value:"request",paraId:11,tocIndex:5},{value:" \u8BF7\u6C42\u3002",paraId:11,tocIndex:5}]},49329:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(18899);const r=[{value:"title.tabs",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u53EF\u5B9A\u4E49\u6807\u7B7E\u9875\u5207\u6362\u529F\u80FD\uFF0C\u5207\u6362\u540E\u4F1A\u518D\u6B21\u8C03\u7528 ",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:" \u51FD\u6570\u3002API \u4E0E Antd ",paraId:0,tocIndex:1},{value:"Tabs",paraId:0,tocIndex:1},{value:" \u7EC4\u4EF6\u4E00\u81F4\u3002",paraId:0,tocIndex:1},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showSetting",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5217\u8BBE\u7F6E\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u8BBE\u7F6E ",paraId:1,tocIndex:3},{value:"showRefresh",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u4E3A ",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:" \u53EF\u4EE5\u663E\u793A\u5237\u65B0\u529F\u80FD\u3002",paraId:1,tocIndex:3},{value:"\u4EC5\u663E\u793A\u5217\u8BBE\u7F6E\u4E0E\u5237\u65B0\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6DFB\u52A0\u7C7B\u540D\u5220\u9664\u3002",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"leftExtraContent",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9\uFF0C\u4E0B\u5212\u7EBF\u6837\u5F0F\u8BF7\u6309\u9700\u5220\u9664\u3002",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"rightExtraContent",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u53EF\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9\u3002",paraId:4,tocIndex:6}]},78323:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(87922);const r=[{value:"\u4E3A\u4E86\u63D0\u5347\u4E00\u4E9B\u5E38\u89C4\u6570\u636E\u5185\u5BB9\u7684\u6E32\u67D3\u7814\u53D1\u6548\u7387\uFF0C\u5982\u6570\u5B57\u91D1\u989D\u5343\u5206\u4F4D\u5904\u7406\u3001\u56FE\u7247\u663E\u793A\u3001\u4EE3\u7801\u5757\u663E\u793A\u7B49\uFF0CSearchTable \u6269\u5C55\u4E86 Antd Table \u7EC4\u4EF6\u7684 ",paraId:0,tocIndex:0},{value:"column",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u5C5E\u6027\uFF0C\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u53EA\u9700\u58F0\u660E ",paraId:0,tocIndex:0},{value:"valueType",paraId:0,tocIndex:0},{value:" \u4E3A ",paraId:0,tocIndex:0},{value:"comma-number",paraId:0,tocIndex:0},{value:"\uFF0C\u6570\u636E\u7684\u663E\u793A\u5C31\u4F1A\u81EA\u52A8\u505A\u5343\u5206\u4F4D\u5904\u7406\u3002",paraId:0,tocIndex:0},{value:"\u51FD\u6570\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF0C\u81EA\u5B9A\u4E49 ",paraId:1},{value:"Rate",paraId:1},{value:" \u5B57\u7B26\u3002",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u6570\u636E\u503C\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u4F20\u53C2\u8BF4\u660E",paraId:2,tocIndex:2},{value:"code",paraId:2,tocIndex:2},{value:"\u4EE3\u7801\u5757\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rate",paraId:2,tocIndex:2},{value:"\u8BC4\u5206\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"Antd Rate \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"switch",paraId:2,tocIndex:2},{value:"\u5F00\u5173\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"boolean | 1 | 0",paraId:2,tocIndex:2},{value:"Antd Switch \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"images",paraId:2,tocIndex:2},{value:"\u56FE\u7247\u9884\u89C8\u5F62\u5F0F\u663E\u793A",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"Antd Image \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"tags",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u5F62\u5F0F",paraId:2,tocIndex:2},{value:"string | string[]",paraId:2,tocIndex:2},{value:"options:",paraId:2,tocIndex:2},{value:" \u6570\u7EC4\u683C\u5F0F\uFF0C",paraId:2,tocIndex:2},{value:"{ label: ReactNode; value: string | number }[]",paraId:2,tocIndex:2},{value:" \u6570\u7EC4\u6BCF\u4E00\u9879\u5BF9\u5E94 Antd Tag \u7EC4\u4EF6\u53C2\u6570 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"tooltipProps:",paraId:2,tocIndex:2},{value:" Antd Tooltip \u7EC4\u4EF6\u53C2\u6570 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"spaceProps:",paraId:2,tocIndex:2},{value:" Antd Space \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"comma-number",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u5343\u5206\u4F4D\u5904\u7406\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"percent",paraId:2,tocIndex:2},{value:"\u6570\u5B57\u52A0\u767E\u5206\u53F7\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"long-text",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848 tooltip \u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10 ",paraId:2,tocIndex:2},{value:"placement:",paraId:2,tocIndex:2},{value:" \u7701\u7565\u53F7\u4F4D\u7F6E\uFF0C",paraId:2,tocIndex:2},{value:"'start' | 'middle' | 'end'",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"tooltipProps:",paraId:2,tocIndex:2},{value:" Antd Tooltip \u7EC4\u4EF6\u53C2\u6570",paraId:2,tocIndex:2},{value:"long-text-modal",paraId:2,tocIndex:2},{value:"\u957F\u6587\u6848\u70B9\u51FB\u5F39\u7A97\u663E\u793A",paraId:2,tocIndex:2},{value:"number | string",paraId:2,tocIndex:2},{value:"maxLength:",paraId:2,tocIndex:2},{value:" \u6EA2\u51FA\u7701\u7565\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 10 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"btnText:",paraId:2,tocIndex:2},{value:" \u6309\u94AE\u6587\u6848 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"modalProps:",paraId:2,tocIndex:2},{value:" Antd Modal \u7EC4\u4EF6\u53C2\u6570 ",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"modalContent:",paraId:2,tocIndex:2},{value:" \u81EA\u5B9A\u4E49 Modal \u5185\u5BB9",paraId:2,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"registerValueType",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u53EF\u4EE5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u663E\u793A\u7C7B\u578B\uFF0C\u540C\u540D\u5C06\u8986\u76D6\u3002",paraId:3,tocIndex:3}]},66376:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(8497);const r=[{value:"\u6253\u5F00 ",paraId:0,tocIndex:1},{value:"showSetting",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5C06\u5F00\u542F\u5217\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u89E6\u53D1\u6309\u94AE\u5728\u6807\u9898\u680F\u6700\u53F3\u4FA7\u3002",paraId:0,tocIndex:1},{value:"\u56FA\u5B9A\u5217\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u9700\u8981\u957F\u4E45\u7684\u5B58\u50A8\u7528\u6237\u6392\u5E8F\u8BBE\u7F6E\uFF0C\u518D\u6B21\u6253\u5F00\u7684\u65F6\u5019\u4FDD\u6301\u4E0A\u4E00\u6B21\u5B58\u50A8\u7684\u6392\u5E8F\u8BBE\u7F6E\u3002",paraId:2,tocIndex:5},{value:"onSettingChanged",paraId:3,tocIndex:5},{value:": \u5F53\u70B9\u51FB\u5217\u8BBE\u7F6E\u7684\u3010\u786E\u5B9A\u3011\u6309\u94AE\u540E\uFF0C\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u6BCF\u6B21\u6392\u5E8F\u540E\u7684\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"getSetting",paraId:3,tocIndex:5},{value:": \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u540E\u4F1A\u6267\u884C\u4E00\u6B21\u8BE5\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5B58\u50A8\u7684\u6392\u5E8F\u5217\u6570\u636E\u3002",paraId:3,tocIndex:5},{value:"settingColumnsMergeAlgo",paraId:3,tocIndex:5},{value:": \u81EA\u5B9A\u4E49\u5B58\u50A8\u7684\u5217\u6570\u636E\u4E0E\u5F53\u524D\u5217\u6570\u636E\u7684\u5408\u5E76\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7B97\u6CD5\u662F\u6309\u7167\u5B58\u50A8\u7684\u5217\u6570\u636E\u6392\u5E8F\uFF0C\u8FC7\u6EE4\u5DF2\u7ECF\u5220\u9664\u7684\u5217\uFF0C\u65B0\u7684\u5217\u653E\u7F6E\u5728\u6700\u540E\u3002",paraId:3,tocIndex:5},{value:"\u4E1A\u52A1\u573A\u666F",paraId:4,tocIndex:6},{value:"\u4E0D\u540C\u5206\u7C7B\u7684 Tabs \u5207\u6362\u65F6\uFF0C\u8868\u683C\u5217\u6570\u636E\u662F\u4E0D\u540C\u7684\uFF0C\u5217\u6570\u636E\u5B58\u50A8\u548C\u83B7\u53D6\u4E5F\u4E0D\u540C\u3002",paraId:5,tocIndex:6},{value:"\u5B9E\u73B0\u65B9\u6848",paraId:6,tocIndex:6},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u5B9E\u73B0 Tabs \u5207\u6362\u65F6\u91CD\u65B0\u83B7\u53D6\u5B58\u50A8\u6570\u636E\u5B9E\u73B0\u3002",paraId:7,tocIndex:6},{value:"\u6BCF\u6B21 ",paraId:7,tocIndex:6},{value:"settingId",paraId:7,tocIndex:6},{value:" \u53D8\u5316\u4F1A\u8C03\u4E00\u6B21 ",paraId:7,tocIndex:6},{value:"getSetting",paraId:7,tocIndex:6},{value:" \u65B9\u6CD5\uFF0C\u7528\u4E8E\u83B7\u53D6\u4E0D\u540C\u7684\u6570\u636E\u3002",paraId:7,tocIndex:6},{value:"\u6570\u636E\u590D\u6742\u7E41\u591A\u7684\u60C5\u51B5\uFF0C\u8868\u5934\u53EF\u4EE5\u7531\u540E\u7AEF\u8FD4\u56DE\uFF0C\u51CF\u5C11\u524D\u540E\u7AEF\u5B57\u6BB5\u5BF9\u9F50\u7684\u6210\u672C\u3002",paraId:8,tocIndex:7}]},5664:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(90749);const r=[{value:"SearchTable",paraId:0,tocIndex:0},{value:" \u9ED8\u8BA4\u6587\u6848\u662F\u4E2D\u6587\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u53EA\u9700\u914D\u7F6E ",paraId:0,tocIndex:0},{value:"locale",paraId:0,tocIndex:0},{value:" \u8986\u76D6\u9ED8\u8BA4\u7684\u8BED\u8A00\uFF0C\u793A\u4F8B\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:"\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u8BED\u8A00\uFF1A",paraId:1},{value:"\u8BED\u8A00",paraId:2},{value:"\u6587\u4EF6\u540D",paraId:2},{value:"\u4E2D\u6587",paraId:2},{value:"zh_CN",paraId:2},{value:"\u82F1\u6587",paraId:2},{value:"en_US",paraId:2},{value:"\u5982\u679C\u627E\u4E0D\u5230\u4F60\u9700\u8981\u7684\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 ",paraId:3},{value:"\u4E2D\u6587\u8BED\u8A00\u5305",paraId:3},{value:" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF0C\u5E76\u7ED9\u6211\u4EEC\u53D1\u4E00\u4E2A Pull Request\u3002",paraId:3},{value:"\u6216\u8005\u914D\u7F6E\u76F8\u540C\u7684\u8BED\u8A00\u5305\u6570\u636E\u683C\u5F0F\u4F20\u503C\u7ED9 ",paraId:3},{value:"locale",paraId:3},{value:" \u5C5E\u6027\u3002",paraId:3}]},95378:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(27490);const r=[{value:"\u53C2\u6570",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F\u540D",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"\u6839\u8282\u70B9\u6837\u5F0F",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"request",paraId:0,tocIndex:1},{value:"\u6570\u636E\u8BF7\u6C42\u51FD\u6570",paraId:0,tocIndex:1},{value:"((params: IObjectAny, extraParams: IRequestExtraParams) => Promise<IRequestResult>)",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"requestOnMounted",paraId:0,tocIndex:1},{value:"\u6302\u8F7D\u5B8C\u6210\u662F\u5426\u7ACB\u5373\u53D1\u9001\u4E00\u6B21 request \u8BF7\u6C42\u5EA6",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"true",paraId:0,tocIndex:1},{value:"header",paraId:0,tocIndex:1},{value:"\u5934\u90E8\u680F\u5185\u5BB9\u6E32\u67D3",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"search",paraId:0,tocIndex:1},{value:"\u641C\u7D22\u680F\uFF0C\u89C1",paraId:0,tocIndex:1},{value:"Search API",paraId:1,tocIndex:1},{value:"ISearchProps | false",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleTop",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u9876\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"title",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\uFF0C\u89C1\u4E0B\u65B9 title \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"titleBottom",paraId:0,tocIndex:1},{value:"\u6807\u9898\u680F\u5E95\u90E8\u533A\u57DF",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"table",paraId:0,tocIndex:1},{value:"\u8868\u683C\u680F\uFF0C\u89C1\u4E0B\u65B9 table \u63CF\u8FF0",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"footer",paraId:0,tocIndex:1},{value:"\u5E95\u90E8\u680F",paraId:0,tocIndex:1},{value:"(p: IRenderParams) => ReactNode",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u63CF\u8FF0",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u6807\u9898\u680F\u6837\u5F0F",paraId:2,tocIndex:2},{value:"CSSProperties",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"tabs",paraId:2,tocIndex:2},{value:"\u6807\u7B7E\u9875\u5C5E\u6027\uFF0C\u89C1",paraId:2,tocIndex:2},{value:"Antd Tabs",paraId:2,tocIndex:2},{value:"TabsProps",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showSetting",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5217\u8BBE\u7F6E\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"showRefresh",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5C55\u793A\u201C\u5237\u65B0\u201D\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"leftExtraContent",paraId:2,tocIndex:2},{value:"\u5DE6\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"rightExtraContent",paraId:2,tocIndex:2},{value:"\u53F3\u4FA7\u989D\u5916\u5185\u5BB9",paraId:2,tocIndex:2},{value:"(p: IRenderParams) => ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u9664 Antd Table \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:3,tocIndex:3},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"showRowNumber",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5E8F\u53F7\u5217",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"rowNumberColumnData",paraId:4,tocIndex:3},{value:"\u5E8F\u53F7\u5217 Antd \u914D\u7F6E\u6570\u636E",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItems",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u5185\u5BB9\uFF0C\u4E0D\u5B58\u5728\u5219\u4E0D\u5C55\u793A\u64CD\u4F5C\u5217\uFF0C\u6570\u91CF\u8D85\u8FC7\u8BBE\u5B9A\u9608\u503C\u5219\u4E0B\u62C9\u4EA4\u4E92",paraId:4,tocIndex:3},{value:"(record: IObjectAny, index: number) => IActionItem[]",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsColumnData",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217 Antd \u914D\u7F6E\u6570\u636E\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u5217\u5BBD\u5EA6\u7B49",paraId:4,tocIndex:3},{value:"ColumnType",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"actionItemsCount",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u5217\u6309\u94AE\u4E0B\u62C9\u4EA4\u4E92\u9608\u503C\uFF0C\u9ED8\u8BA4\u4E3A 2",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"2",paraId:4,tocIndex:3},{value:"actionItemsDropdownProps",paraId:4,tocIndex:3},{value:"\u64CD\u4F5C\u6309\u94AE\u4E0B\u62C9\u83DC\u5355\u5C5E\u6027\uFF0C\u89C1 Antd Dropdown \u7EC4\u4EF6",paraId:4,tocIndex:3},{value:"DropDownProps",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortMode",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u65B9\u6848\uFF0C\u524D\u7AEF\u6392\u5E8F\u6216\u540E\u7AEF\u6392\u5E8F",paraId:4,tocIndex:3},{value:"'local' | 'local-all' | 'service' | 'service-all'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"sortStringValueTransform",paraId:4,tocIndex:3},{value:"\u6392\u5E8F\u5B57\u7B26\u4E32\u6570\u636E\u8F6C\u6362\u65B9\u6848",paraId:4,tocIndex:3},{value:"(value: string) => string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"autoScrollY",paraId:4,tocIndex:3},{value:"\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u8868\u683C scrollY \u5C5E\u6027\uFF0C\u8FBE\u5230\u9002\u914D\u5C4F\u5E55\u9AD8\u5EA6\uFF0C\u201D\u4E00\u5C4F\u663E\u793A\u201C\u6548\u679C",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"summaryText",paraId:4,tocIndex:3},{value:"\u5408\u8BA1\u680F\u6587\u6848",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"\u5408\u8BA1",paraId:4,tocIndex:3},{value:"registerValueType",paraId:4,tocIndex:3},{value:"\u6CE8\u518C valueType, \u540C\u540D\u5C06\u8986\u76D6",paraId:4,tocIndex:3},{value:"{ [type: string]: (p: { value: any; record: IObjectAny; options: IObjectAny; index: number }) => ReactNode }",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u9664 Antd Table Column \u5C5E\u6027\u5916\uFF0C\u8FD8\u6269\u5C55\u4E86\u4EE5\u4E0B\u5C5E\u6027\u3002",paraId:5,tocIndex:4},{value:"\u53C2\u6570",paraId:6,tocIndex:4},{value:"\u63CF\u8FF0",paraId:6,tocIndex:4},{value:"\u7C7B\u578B",paraId:6,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:4},{value:"sortType",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u7C7B\u578B",paraId:6,tocIndex:4},{value:"'string' | 'number' | 'date'",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"sortDataExtractor",paraId:6,tocIndex:4},{value:"\u6392\u5E8F\u6570\u636E\u53D6\u503C\u51FD\u6570\uFF0C\u590D\u6742\u6570\u636E\u63D0\u53D6\u7528",paraId:6,tocIndex:4},{value:"(record: IObjectAny) => string | number",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"valueType",paraId:6,tocIndex:4},{value:"\u6570\u636E\u663E\u793A\u7C7B\u522B",paraId:6,tocIndex:4},{value:"IValueType | ((record: IObjectAny) => { type: IValueType, [props: string]: any })",paraId:6,tocIndex:4},{value:"-",paraId:6,tocIndex:4},{value:"\u5373 ",paraId:7,tocIndex:5},{value:"IActionItem",paraId:7,tocIndex:5},{value:", \u7EE7\u627F Antd Button \u7EC4\u4EF6\u53C2\u6570\uFF0C\u4EE5\u53CA\u4E0B\u9762\u6269\u5C55\u53C2\u6570\u3002",paraId:7,tocIndex:5},{value:"\u53C2\u6570",paraId:8,tocIndex:5},{value:"\u63CF\u8FF0",paraId:8,tocIndex:5},{value:"\u7C7B\u578B",paraId:8,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:5},{value:"text",paraId:8,tocIndex:5},{value:"\u6309\u94AE\u6587\u6848",paraId:8,tocIndex:5},{value:"ReactNode",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"isShow",paraId:8,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmAgain",paraId:8,tocIndex:5},{value:"\u662F\u5426\u589E\u52A0\u300C\u4E8C\u6B21\u786E\u8BA4\u300D",paraId:8,tocIndex:5},{value:"boolean",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"confirmProps",paraId:8,tocIndex:5},{value:"\u4E8C\u6B21\u786E\u8BA4 Antd Popconfirm \u7EC4\u4EF6\u53C2\u6570",paraId:8,tocIndex:5},{value:"Omit<PopconfirmProps, 'onConfirm'>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5},{value:"onClick",paraId:8,tocIndex:5},{value:"\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE ",paraId:8,tocIndex:5},{value:"Promise",paraId:8,tocIndex:5},{value:"\uFF0C\u5219\u589E\u52A0 ",paraId:8,tocIndex:5},{value:"loading",paraId:8,tocIndex:5},{value:" \u6548\u679C",paraId:8,tocIndex:5},{value:"(event: MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>",paraId:8,tocIndex:5},{value:"-",paraId:8,tocIndex:5}]},39168:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(8906);const r=[{value:"\u5185\u6838\u901A\u8FC7 ",paraId:0,tocIndex:1},{value:"ref",paraId:0,tocIndex:1},{value:" \u5C5E\u6027\u5F00\u653E\u7684 API \u65B9\u6CD5\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"refresh",paraId:1,tocIndex:1},{value:": \u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:1,tocIndex:1},{value:"request",paraId:1,tocIndex:1},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRootElement",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u6839\u8282\u70B9 DOM \u5143\u7D20\u3002",paraId:1,tocIndex:1},{value:"getSearchRef",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u680F\u5B9E\u4F8B\u3002",paraId:1,tocIndex:1},{value:"getDataSource",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setDataSource",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u8868\u683C\u5217\u8868\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setSummaryData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5408\u8BA1\u680F\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getSearchValue",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u641C\u7D22\u53C2\u6570\u3002",paraId:1,tocIndex:1},{value:"setSearchValue",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"clearSearchValue",paraId:1,tocIndex:1},{value:": \u6E05\u9664\u641C\u7D22\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"getRequestParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u201C\u5BFC\u51FA\u201D\u65F6\u5E38\u7528\u3002",paraId:1,tocIndex:1},{value:"getRequestExtraParams",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u8BF7\u6C42\u989D\u5916\u53C2\u6570\uFF0C\u5982\u6392\u5E8F\u53C2\u6570\u7B49\u3002",paraId:1,tocIndex:1},{value:"getPaginationData",paraId:1,tocIndex:1},{value:": \u83B7\u53D6\u5206\u9875\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"setPaginationData",paraId:1,tocIndex:1},{value:": \u8BBE\u7F6E\u5206\u9875\u6570\u636E\u3002",paraId:1,tocIndex:1},{value:"updateScrollY",paraId:1,tocIndex:1},{value:": \u66F4\u65B0\u8868\u683C\u9AD8\u5EA6\u4EE5\u8FBE\u5230\u201C\u4E00\u5C4F\u663E\u793A\u201D\u6548\u679C\u3002",paraId:1,tocIndex:1},{value:"openSettingModal",paraId:1,tocIndex:1},{value:": \u6253\u5F00\u5217\u8BBE\u7F6E\u5F39\u7A97\u3002",paraId:1,tocIndex:1},{value:"\u5237\u65B0\u8868\u683C\u5185\u5BB9\uFF0C\u5C06\u8C03\u7528 ",paraId:2,tocIndex:2},{value:"request",paraId:2,tocIndex:2},{value:" \u91CD\u65B0\u62C9\u53D6\u6570\u636E\u3002",paraId:2,tocIndex:2},{value:"\u7C7B\u578B\uFF1A",paraId:3,tocIndex:2},{value:"(params?: IRequestParams, options?: IRequestOptions) => Promise<IRequestResult>",paraId:3,tocIndex:2},{value:"\u540D\u79F0",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"params",paraId:4,tocIndex:3},{value:"\u641C\u7D22\u53CA\u5206\u9875\u53C2\u6570",paraId:4,tocIndex:3},{value:"IRequestParams",paraId:4,tocIndex:3},{value:"options",paraId:4,tocIndex:3},{value:"\u5237\u65B0\u9009\u9879\uFF0C\u63A7\u5236\u5237\u65B0\u884C\u4E3A",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:4,tocIndex:3},{value:"IRequestOptions",paraId:5,tocIndex:3},{value:"\u540D\u79F0",paraId:6,tocIndex:3},{value:"\u63CF\u8FF0",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"overwrite",paraId:6,tocIndex:3},{value:"\u662F\u5426\u8986\u76D6\u53C2\u6570\u65B9\u5F0F\u5237\u65B0\uFF0C\u9ED8\u8BA4 ",paraId:6,tocIndex:3},{value:"false",paraId:6,tocIndex:3},{value:" \u5373\u5408\u5E76\u5165\u53C2",paraId:6,tocIndex:3},{value:"boolean",paraId:6,tocIndex:3}]},9382:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(34451);const r=[]},93283:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(24311);const r=[{value:"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E8C\u6B21\u5C01\u88C5 SearchTable \u4EE5\u9002\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u5E38\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u64CD\u4F5C\u5217\u7684\u94FE\u63A5\u8DF3\u8F6C\u662F\u5355\u9875\u8DF3\u8F6C\u800C\u4E0D\u662F",paraId:0,tocIndex:0},{value:"<a>",paraId:0,tocIndex:0},{value:" \u6807\u7B7E\u7684\u5237\u65B0\u8DF3\u8F6C\uFF0C\u57FA\u4E8E\u6B64\u9700\u6C42\u6211\u4EEC\u4EE5 ",paraId:0,tocIndex:0},{value:"Next.js",paraId:0,tocIndex:0},{value:" \u5355\u9875\u8DF3\u8F6C\u4E8C\u6B21\u5C01\u88C5\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:`import { useRef, forwardRef, useImperativeHandle } from 'react'
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
`,paraId:1,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u64CD\u4F5C\u5217\u6309\u94AE\u589E\u52A0\u300C\u6743\u9650\u6821\u9A8C\u300D\u7684\u903B\u8F91\u7B49\uFF08\u589E\u52A0\u6743\u9650\u914D\u7F6E\u5C5E\u6027\uFF0C\u7ED3\u5408 isShow \u5C5E\u6027\u5B9E\u73B0\uFF09\uFF0C\u5C01\u88C5\u65B9\u5F0F\u96F7\u540C\u3002",paraId:2}]},85162:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(49409);const r=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"\u64CD\u4F5C\u6309\u94AE\u5355\u9875\u8DF3\u8F6C",paraId:1,tocIndex:0}]},92724:function(V,c,e){e.r(c),e.d(c,{texts:function(){return r}});var R=e(63710);const r=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:0},{value:"search: false",paraId:0,tocIndex:0},{value:" \u53EF\u9690\u85CF\u641C\u7D22\u533A\u57DF",paraId:0,tocIndex:0}]},36005:function(V,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},52551:function(V,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

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
`},29758:function(V,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

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
`},19970:function(V,c){c.Z=`import type { IRenderers, ISchema } from '@schema-render/core-react'
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
`},93635:function(V,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},3116:function(V,c){c.Z=`import { QuestionCircleOutlined } from '@ant-design/icons'
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
`},12967:function(V,c){c.Z=`import type { IRootSchema } from '@schema-render/core-react'

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
`},540:function(V,c){c.Z=`import BankSelect from './BankSelect'

export default {
  BankSelect,
}
`},78597:function(V,c){c.Z=`import type { IRootSchema } from '@schema-render/core-react'

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
`},24127:function(V,c){c.Z=`import { cij } from '@examples/utils/cssinjs'

export const builtinRenderers = cij\`
  min-width: 580px;
  font-size: 15px !important;

  .schema-render-form-actions {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
\`
`},96390:function(V,c){c.Z=`import type { TableProps } from 'antd'

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
`},77538:function(V,c){c.Z=`import dayjs from 'dayjs'

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
`},19150:function(V,c){c.Z=`import type { IOpenComponentParams } from '@schema-render/core-react'
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
`},97395:function(V,c){c.Z=`import type { IObjectSchema, IOpenFormItemParams } from '@schema-render/core-react'
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
`},5038:function(V,c){c.Z=`import type { IOpenFormItemParams } from '@schema-render/core-react'
import type { FC } from 'react'

const SectionTitle: FC<IOpenFormItemParams<never>> = ({ schema }) => {
  return <div className="section-title">{schema.title}</div>
}

export default {
  formItem: SectionTitle as never,
}
`},71091:function(V,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},29449:function(V,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},17261:function(V,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},34569:function(V,c){c.Z=`import type { IColumnType } from '@schema-render/search-table-react'

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
`},45876:function(V,c){c.Z=`import dayjs from 'dayjs'

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
`},90887:function(V,c){c.Z=`function rangeNumber(min: number, max: number, toInt = true) {
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
`},37343:function(V,c){c.Z=`import dayjs from 'dayjs'

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
`},36556:function(V,c){c.Z=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

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
`},22452:function(V,c){c.Z=`import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

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
